import { constants } from "node:http2";

import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { HoneypotInputs } from "remix-utils/honeypot/react";
import { z } from "zod";

import { GeneralErrorBoundary } from "#app/components/error-boundary.tsx";
import { CheckboxField, ErrorList, Field } from "#app/components/forms.tsx";
import { Spacer } from "#app/components/spacer.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import { handleNewSession } from "#app/routes/_auth+/login.server";
import { login, requireAnonymous } from "#app/utils/auth.server.ts";
import { checkHoneypot } from "#app/utils/honeypot.server.ts";
import { useIsPending } from "#app/utils/misc.tsx";
import { PasswordSchema, UsernameSchema } from "#app/utils/user-validation.ts";

import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";

export const verifiedTimeKey = "verified-time";
export const unverifiedSessionIdKey = "unverified-session-id";
export const rememberKey = "remember";

const LoginFormSchema = z.object({
  password: PasswordSchema,
  redirectTo: z.string().optional(),
  remember: z.boolean().default(false),
  username: UsernameSchema,
});

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAnonymous(request);
  return json({});
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAnonymous(request);
  const formData = await request.formData();

  checkHoneypot(formData);
  const submission = await parseWithZod(formData, {
    async: true,
    schema: (intent) =>
      LoginFormSchema.transform(async (data, ctx) => {
        if (intent !== null) {
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
  });

  if (submission.status !== "success" || !submission.value.session) {
    return json(
      {
        result: submission.reply({
          hideFields: ["password"],
        }),
      },
      {
        status:
          submission.status === "error"
            ? constants.HTTP_STATUS_BAD_REQUEST
            : constants.HTTP_STATUS_OK,
      },
    );
  }

  const { session, remember, redirectTo } = submission.value;

  return handleNewSession({
    redirectTo,
    remember: remember ?? false,
    request,
    session,
  });
}

export default function LoginPage() {
  const actionData = useActionData<typeof action>();
  const isPending = useIsPending();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

  const [form, fields] = useForm({
    constraint: getZodConstraint(LoginFormSchema),
    defaultValue: { redirectTo },
    id: "login-form",
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: LoginFormSchema });
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
            <Form method="POST" {...getFormProps(form)}>
              <HoneypotInputs />
              <Field
                errors={fields.username.errors}
                inputProps={{
                  ...getInputProps(fields.username, { type: "text" }),
                  autoComplete: "username",
                  autoFocus: true,
                  className: "lowercase",
                }}
                labelProps={{ children: "Username" }}
              />

              <Field
                errors={fields.password.errors}
                inputProps={{
                  ...getInputProps(fields.password, {
                    type: "password",
                  }),
                  autoComplete: "current-password",
                }}
                labelProps={{ children: "Password" }}
              />

              <div className="flex justify-between">
                <CheckboxField
                  label="Remember me"
                  {...getInputProps(fields.remember, { type: "checkbox" })}
                  errors={fields.remember.errors}
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
                {...getInputProps(fields.redirectTo, { type: "hidden" })}
              />
              <ErrorList errors={form.errors} id={form.errorId} />

              <div className="flex items-center justify-between gap-6 pt-3">
                <StatusButton
                  className="w-full"
                  disabled={isPending}
                  status={isPending ? "pending" : (form.status ?? "idle")}
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
