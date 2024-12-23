import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useSearchParams,
} from "@remix-run/react";
import { HoneypotInputs } from "remix-utils/honeypot/react";
import { safeRedirect } from "remix-utils/safe-redirect";
import { z } from "zod";

import { CheckboxField, ErrorList, Field } from "#app/components/forms.tsx";
import { Spacer } from "#app/components/spacer.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import {
  requireAnonymous,
  sessionKey,
  signup,
} from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server.ts";
import { checkHoneypot } from "#app/utils/honeypot.server.ts";
import { useIsPending } from "#app/utils/misc.tsx";
import { authSessionStorage } from "#app/utils/session.server.ts";
import { redirectWithToast } from "#app/utils/toast.server.ts";
import {
  NameSchema,
  PasswordAndConfirmPasswordSchema,
  UsernameSchema,
} from "#app/utils/user-validation.ts";
import { verifySessionStorage } from "#app/utils/verification.server.ts";

import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";

export const onboardingEmailSessionKey = "onboardingEmail";

const SignupFormSchema = z
  .object({
    agreeToTermsOfServiceAndPrivacyPolicy: z.boolean({
      required_error:
        "You must agree to the terms of service and privacy policy",
    }),
    name: NameSchema,
    redirectTo: z.string().optional(),
    remember: z.boolean().optional(),
    username: UsernameSchema,
  })
  .and(PasswordAndConfirmPasswordSchema);

async function requireOnboardingEmail(request: Request) {
  await requireAnonymous(request);
  const verifySession = await verifySessionStorage.getSession(
    request.headers.get("cookie"),
  );
  const email = verifySession.get(onboardingEmailSessionKey);
  if (typeof email !== "string" || !email) {
    throw redirect("/signup");
  }
  return email;
}
export async function loader({ request }: LoaderFunctionArgs) {
  const email = await requireOnboardingEmail(request);
  return json({ email });
}

export async function action({ request }: ActionFunctionArgs) {
  const email = await requireOnboardingEmail(request);
  const formData = await request.formData();

  checkHoneypot(formData);
  const submission = await parseWithZod(formData, {
    async: true,
    schema: (intent) =>
      SignupFormSchema.superRefine(async (data, ctx) => {
        const existingUser = await prisma.user.findUnique({
          select: { id: true },
          where: { username: data.username },
        });
        if (existingUser) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "A user already exists with this username",
            path: ["username"],
          });
          return;
        }
      }).transform(async (data) => {
        if (intent !== null) {
          return { ...data, session: null };
        }

        const session = await signup({ ...data, email });
        return { ...data, session };
      }),
  });

  if (submission.status !== "success" || !submission.value.session) {
    return json(
      { result: submission.reply() },
      {
        status: submission.status === "error" ? 400 : 200,
      },
    );
  }

  const { session, remember, redirectTo } = submission.value;

  const authSession = await authSessionStorage.getSession(
    request.headers.get("cookie"),
  );
  authSession.set(sessionKey, session.id);
  const verifySession = await verifySessionStorage.getSession();
  const headers = new Headers();
  headers.append(
    "set-cookie",
    await authSessionStorage.commitSession(authSession, {
      expires: remember ? session.expirationDate : undefined,
    }),
  );
  headers.append(
    "set-cookie",
    await verifySessionStorage.destroySession(verifySession),
  );

  return redirectWithToast(
    safeRedirect(redirectTo),
    { description: "Thanks for signing up!", title: "Welcome" },
    { headers },
  );
}

export const meta: MetaFunction = () => {
  return [{ title: "Setup Epic Notes Account" }];
};

export default function SignupRoute() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const isPending = useIsPending();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

  const [form, fields] = useForm({
    constraint: getZodConstraint(SignupFormSchema),
    defaultValue: { redirectTo },
    id: "onboarding-form",
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: SignupFormSchema });
    },
    shouldRevalidate: "onBlur",
  });

  return (
    <div className="container flex min-h-full flex-col justify-center pb-32 pt-20">
      <div className="mx-auto w-full max-w-lg">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-h1">Welcome aboard {data.email}!</h1>
          <p className="text-body-md text-muted-foreground">
            Please enter your details.
          </p>
        </div>
        <Spacer size="xs" />
        <Form
          className="mx-auto min-w-full max-w-sm sm:min-w-[368px]"
          method="POST"
          {...getFormProps(form)}
        >
          <HoneypotInputs />
          <Field
            errors={fields.username.errors}
            inputProps={{
              ...getInputProps(fields.username, { type: "text" }),
              autoComplete: "username",
              className: "lowercase",
            }}
            labelProps={{ children: "Username", htmlFor: fields.username.id }}
          />
          <Field
            errors={fields.name.errors}
            inputProps={{
              ...getInputProps(fields.name, { type: "text" }),
              autoComplete: "name",
            }}
            labelProps={{ children: "Name", htmlFor: fields.name.id }}
          />
          <Field
            errors={fields.password.errors}
            inputProps={{
              ...getInputProps(fields.password, { type: "password" }),
              autoComplete: "new-password",
            }}
            labelProps={{ children: "Password", htmlFor: fields.password.id }}
          />

          <Field
            errors={fields.confirmPassword.errors}
            inputProps={{
              ...getInputProps(fields.confirmPassword, { type: "password" }),
              autoComplete: "new-password",
            }}
            labelProps={{
              children: "Confirm Password",
              htmlFor: fields.confirmPassword.id,
            }}
          />

          <CheckboxField
            label="Do you agree to our Terms of Service and Privacy Policy?"
            {...getInputProps(fields.agreeToTermsOfServiceAndPrivacyPolicy, {
              type: "checkbox",
            })}
            errors={fields.agreeToTermsOfServiceAndPrivacyPolicy.errors}
          />

          <CheckboxField
            label="Remember me"
            {...getInputProps(fields.remember, { type: "checkbox" })}
            errors={fields.remember.errors}
          />

          <input {...getInputProps(fields.redirectTo, { type: "hidden" })} />
          <ErrorList errors={form.errors} id={form.errorId} />

          <div className="flex items-center justify-between gap-6">
            <StatusButton
              className="w-full"
              disabled={isPending}
              status={isPending ? "pending" : (form.status ?? "idle")}
              type="submit"
            >
              Create an account
            </StatusButton>
          </div>
        </Form>
      </div>
    </div>
  );
}
