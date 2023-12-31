import { conform, useForm } from "@conform-to/react";
import { getFieldsetConstraint, parse } from "@conform-to/zod";
import { invariant } from "@epic-web/invariant";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { AuthenticityTokenInput } from "remix-utils/csrf/react";
import { HoneypotInputs } from "remix-utils/honeypot/react";
import { safeRedirect } from "remix-utils/safe-redirect";
import { z } from "zod";

import { GeneralErrorBoundary } from "#app/components/error-boundary.tsx";
import { CheckboxField, ErrorList, Field } from "#app/components/forms.tsx";
import { Spacer } from "#app/components/spacer.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import { login, requireAnonymous, sessionKey } from "#app/utils/auth.server.ts";
import { validateCSRF } from "#app/utils/csrf.server.ts";
import { prisma } from "#app/utils/db/db.server.ts";
import { checkHoneypot } from "#app/utils/honeypot.server.ts";
import { combineResponseInits, useIsPending } from "#app/utils/misc.tsx";
import { authSessionStorage } from "#app/utils/session.server.ts";
import { redirectWithToast } from "#app/utils/toast.server.ts";
import { PasswordSchema, UsernameSchema } from "#app/utils/user-validation.ts";
import { verifySessionStorage } from "#app/utils/verification.server.ts";

import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";

import type { VerifyFunctionArgs } from "./verify.tsx";

export const verifiedTimeKey = "verified-time";
export const unverifiedSessionIdKey = "unverified-session-id";
export const rememberKey = "remember";

export async function handleNewSession(
  {
    request,
    session,
    redirectTo,
    remember,
  }: {
    request: Request;
    session: { userId: string; id: string; expirationDate: Date };
    redirectTo?: string;
    remember: boolean;
  },
  responseInit?: ResponseInit,
) {
  const authSession = await authSessionStorage.getSession(
    request.headers.get("cookie"),
  );
  authSession.set(sessionKey, session.id);

  return redirect(
    safeRedirect(redirectTo),
    combineResponseInits(
      {
        headers: {
          "set-cookie": await authSessionStorage.commitSession(authSession, {
            expires: remember ? session.expirationDate : undefined,
          }),
        },
      },
      responseInit,
    ),
  );
}

export async function handleVerification({
  request,
  submission,
}: VerifyFunctionArgs) {
  invariant(submission.value, "Submission should have a value by this point");
  const authSession = await authSessionStorage.getSession(
    request.headers.get("cookie"),
  );
  const verifySession = await verifySessionStorage.getSession(
    request.headers.get("cookie"),
  );

  const remember = verifySession.get(rememberKey);
  const { redirectTo } = submission.value;
  const headers = new Headers();
  authSession.set(verifiedTimeKey, Date.now());

  const unverifiedSessionId = verifySession.get(unverifiedSessionIdKey);
  if (unverifiedSessionId) {
    const session = await prisma.session.findUnique({
      select: { expirationDate: true },
      where: { id: unverifiedSessionId },
    });
    if (!session) {
      throw await redirectWithToast("/login", {
        type: "error",
        title: "Invalid session",
        description: "Could not find session to verify. Please try again.",
      });
    }
    authSession.set(sessionKey, unverifiedSessionId);

    headers.append(
      "set-cookie",
      await authSessionStorage.commitSession(authSession, {
        expires: remember ? session.expirationDate : undefined,
      }),
    );
  } else {
    headers.append(
      "set-cookie",
      await authSessionStorage.commitSession(authSession),
    );
  }

  headers.append(
    "set-cookie",
    await verifySessionStorage.destroySession(verifySession),
  );

  return redirect(safeRedirect(redirectTo), { headers });
}

const LoginFormSchema = z.object({
  username: UsernameSchema,
  password: PasswordSchema,
  redirectTo: z.string().optional(),
  remember: z.boolean().default(false),
});

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAnonymous(request);
  return json({});
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAnonymous(request);
  const formData = await request.formData();
  await validateCSRF(formData, request.headers);
  checkHoneypot(formData);
  const submission = await parse(formData, {
    schema: (intent) =>
      LoginFormSchema.transform(async (data, ctx) => {
        if (intent !== "submit") {
          return { ...data, session: null };
        }

        const session = await login(data);
        if (!session) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid username or password",
          });
          return z.NEVER;
        }

        return { ...data, session };
      }),
    async: true,
  });
  // get the password off the payload that's sent back
  delete submission.payload.password;

  if (submission.intent !== "submit") {
    // @ts-expect-error - conform should probably have support for doing this
    delete submission.value?.password;
    return json({ status: "idle", submission } as const);
  }
  if (!submission.value?.session) {
    return json({ status: "error", submission } as const, { status: 400 });
  }

  const { session, remember, redirectTo } = submission.value;

  return handleNewSession({
    request,
    session,
    remember: remember ?? false,
    redirectTo,
  });
}

export default function LoginPage() {
  const actionData = useActionData<typeof action>();
  const isPending = useIsPending();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

  const [form, fields] = useForm({
    id: "login-form",
    constraint: getFieldsetConstraint(LoginFormSchema),
    defaultValue: { redirectTo },
    lastSubmission: actionData?.submission,
    onValidate({ formData }) {
      return parse(formData, { schema: LoginFormSchema });
    },
    shouldRevalidate: "onBlur",
  });

  return (
    <div className="flex min-h-full w-full flex-col justify-center pb-32 pt-20">
      <div className="mx-auto w-full max-w-md">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-h1">Welcome back!</h1>
          <p className="text-body-md text-muted-foreground">
            Please enter your details.
          </p>
        </div>
        <Spacer size="xs" />

        <div>
          <div className="mx-auto w-full max-w-md px-8">
            <Form method="POST" {...form.props}>
              <AuthenticityTokenInput />
              <HoneypotInputs />
              <Field
                errors={fields.username.errors}
                inputProps={{
                  ...conform.input(fields.username),
                  autoFocus: true,
                  className: "lowercase",
                }}
                labelProps={{ children: "Username" }}
              />

              <Field
                errors={fields.password.errors}
                inputProps={conform.input(fields.password, {
                  type: "password",
                })}
                labelProps={{ children: "Password" }}
              />

              <div className="flex justify-between">
                <CheckboxField
                  // @ts-expect-error Radix Checkbox requires <button />-specific 'type' but conform returns broader `<input />-type`.
                  buttonProps={conform.input(fields.remember, {
                    type: "checkbox",
                  })}
                  errors={fields.remember.errors}
                  labelProps={{
                    htmlFor: fields.remember.id,
                    children: "Remember me",
                  }}
                />
                <div>
                  <Link
                    className="text-body-xs font-semibold"
                    to="/forgot-password"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <input
                {...conform.input(fields.redirectTo, { type: "hidden" })}
              />
              <ErrorList errors={form.errors} id={form.errorId} />

              <div className="flex items-center justify-between gap-6 pt-3">
                <StatusButton
                  className="w-full"
                  disabled={isPending}
                  status={isPending ? "pending" : actionData?.status ?? "idle"}
                  type="submit"
                >
                  Log in
                </StatusButton>
              </div>
            </Form>

            <div className="flex items-center justify-center gap-2 pt-6">
              <span className="text-muted-foreground">New here?</span>
              <Link
                to={
                  redirectTo
                    ? `/signup?${encodeURIComponent(redirectTo)}`
                    : "/signup"
                }
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [{ title: "Login to Epic Notes" }];
};

export function ErrorBoundary() {
  return <GeneralErrorBoundary />;
}
