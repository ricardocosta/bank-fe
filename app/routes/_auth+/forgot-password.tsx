import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import * as E from "@react-email/components";
import { json, redirect } from "@remix-run/node";
import { Link, useFetcher } from "@remix-run/react";
import { HoneypotInputs } from "remix-utils/honeypot/react";
import { z } from "zod";

import { GeneralErrorBoundary } from "#app/components/error-boundary.tsx";
import { ErrorList, Field } from "#app/components/forms.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import { prepareVerification } from "#app/routes/_auth+/verify.server";
import { prisma } from "#app/utils/db/db.server.ts";
import { sendEmail } from "#app/utils/email.server.ts";
import { checkHoneypot } from "#app/utils/honeypot.server.ts";
import { EmailSchema, UsernameSchema } from "#app/utils/user-validation.ts";

import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";

const ForgotPasswordSchema = z.object({
  usernameOrEmail: z.union([EmailSchema, UsernameSchema]),
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  checkHoneypot(formData);
  const submission = await parseWithZod(formData, {
    async: true,
    schema: ForgotPasswordSchema.superRefine(async (data, ctx) => {
      const user = await prisma.user.findFirst({
        select: { id: true },
        where: {
          OR: [
            { email: data.usernameOrEmail },
            { username: data.usernameOrEmail },
          ],
        },
      });
      if (!user) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "No user exists with this username or email",
          path: ["usernameOrEmail"],
        });
        return;
      }
    }),
  });

  if (submission.status !== "success") {
    return json(
      { result: submission.reply() },
      {
        status: submission.status === "error" ? 400 : 200,
      },
    );
  }

  const { usernameOrEmail } = submission.value;

  const user = await prisma.user.findFirstOrThrow({
    select: { email: true, username: true },
    where: { OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }] },
  });

  const { verifyUrl, redirectTo, otp } = await prepareVerification({
    period: 10 * 60,
    request,
    target: usernameOrEmail,
    type: "reset-password",
  });

  const response = await sendEmail({
    react: (
      <ForgotPasswordEmail onboardingUrl={verifyUrl.toString()} otp={otp} />
    ),
    subject: `Epic Notes Password Reset`,
    to: user.email,
  });

  if (response.status === "success") {
    return redirect(redirectTo.toString());
  }

  return json(
    {
      result: submission.reply({ formErrors: [response.error.message] }),
    },
    {
      status: 500,
    },
  );
}

function ForgotPasswordEmail({
  onboardingUrl,
  otp,
}: {
  onboardingUrl: string;
  otp: string;
}) {
  return (
    <E.Html dir="ltr" lang="en">
      <E.Container>
        <h1>
          <E.Text>Epic Notes Password Reset</E.Text>
        </h1>
        <p>
          <E.Text>
            Here&apos;s your verification code: <strong>{otp}</strong>
          </E.Text>
        </p>
        <p>
          <E.Text>Or click the link:</E.Text>
        </p>
        <E.Link href={onboardingUrl}>{onboardingUrl}</E.Link>
      </E.Container>
    </E.Html>
  );
}

export const meta: MetaFunction = () => {
  return [{ title: "Password Recovery for Epic Notes" }];
};

export default function ForgotPasswordRoute() {
  const forgotPassword = useFetcher<typeof action>();

  const [form, fields] = useForm({
    constraint: getZodConstraint(ForgotPasswordSchema),
    id: "forgot-password-form",
    lastResult: forgotPassword.data?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ForgotPasswordSchema });
    },
    shouldRevalidate: "onBlur",
  });

  return (
    <div className="container pb-32 pt-20">
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-h1">Forgot Password</h1>
          <p className="text-body-md text-muted-foreground mt-3">
            No worries, we&apos;ll send you reset instructions.
          </p>
        </div>
        <div className="mx-auto mt-16 min-w-[368px] max-w-sm">
          <forgotPassword.Form method="POST" {...getFormProps(form)}>
            <HoneypotInputs />
            <div>
              <Field
                errors={fields.usernameOrEmail.errors}
                inputProps={{
                  autoFocus: true,
                  ...getInputProps(fields.usernameOrEmail, { type: "text" }),
                }}
                labelProps={{
                  children: "Username or Email",
                  htmlFor: fields.usernameOrEmail.id,
                }}
              />
            </div>
            <ErrorList errors={form.errors} id={form.errorId} />

            <div className="mt-6">
              <StatusButton
                className="w-full"
                disabled={forgotPassword.state !== "idle"}
                status={
                  forgotPassword.state === "submitting"
                    ? "pending"
                    : (form.status ?? "idle")
                }
                type="submit"
              >
                Recover password
              </StatusButton>
            </div>
          </forgotPassword.Form>
          <Link
            className="text-body-sm mt-11 text-center font-bold"
            to="/login"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />;
}
