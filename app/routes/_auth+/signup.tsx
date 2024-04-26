import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import * as E from "@react-email/components";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { HoneypotInputs } from "remix-utils/honeypot/react";
import { z } from "zod";

import { GeneralErrorBoundary } from "#app/components/error-boundary.tsx";
import { ErrorList, Field } from "#app/components/forms.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import { prepareVerification } from "#app/routes/_auth+/verify.server";
import { prisma } from "#app/utils/db/db.server.ts";
import { sendEmail } from "#app/utils/email.server.ts";
import { checkHoneypot } from "#app/utils/honeypot.server.ts";
import { useIsPending } from "#app/utils/misc.tsx";
import { EmailSchema } from "#app/utils/user-validation.ts";

import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";

const SignupSchema = z.object({
  email: EmailSchema,
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  checkHoneypot(formData);

  const submission = await parseWithZod(formData, {
    schema: SignupSchema.superRefine(async (data, ctx) => {
      const existingUser = await prisma.user.findUnique({
        where: { email: data.email },
        select: { id: true },
      });
      if (existingUser) {
        ctx.addIssue({
          path: ["email"],
          code: z.ZodIssueCode.custom,
          message: "A user already exists with this email",
        });
        return;
      }
    }),
    async: true,
  });

  if (submission.status !== "success") {
    return json(
      { result: submission.reply() },
      {
        status: submission.status === "error" ? 400 : 200,
      },
    );
  }

  const { email } = submission.value;
  const { verifyUrl, redirectTo, otp } = await prepareVerification({
    period: 10 * 60,
    request,
    type: "onboarding",
    target: email,
  });

  const response = await sendEmail({
    to: email,
    subject: `Welcome to Epic Notes!`,
    react: <SignupEmail onboardingUrl={verifyUrl.toString()} otp={otp} />,
  });

  if (response.status === "success") {
    return redirect(redirectTo.toString());
  } else {
    return json(
      {
        result: submission.reply({ formErrors: [response.error.message] }),
      },
      {
        status: 500,
      },
    );
  }
}

export function SignupEmail({
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
          <E.Text>Welcome to Epic Notes!</E.Text>
        </h1>
        <p>
          <E.Text>
            {`Here's your verification code:`} <strong>{otp}</strong>
          </E.Text>
        </p>
        <p>
          <E.Text>Or click the link to get started:</E.Text>
        </p>
        <E.Link href={onboardingUrl}>{onboardingUrl}</E.Link>
      </E.Container>
    </E.Html>
  );
}

export const meta: MetaFunction = () => {
  return [{ title: "Sign Up | Epic Notes" }];
};

export default function SignupRoute() {
  const actionData = useActionData<typeof action>();
  const isPending = useIsPending();

  const [form, fields] = useForm({
    id: "signup-form",
    constraint: getZodConstraint(SignupSchema),
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: SignupSchema });
    },
    shouldRevalidate: "onBlur",
  });

  return (
    <div className="container flex flex-col justify-center pb-32 pt-20">
      <div className="text-center">
        <h1 className="text-h1">{`Let's start your journey!`}</h1>
        <p className="mt-3 text-body-md text-muted-foreground">
          Please enter your email.
        </p>
      </div>
      <div className="mx-auto mt-16 min-w-[368px] max-w-sm">
        <Form method="POST" {...getFormProps(form)}>
          <HoneypotInputs />
          <Field
            errors={fields.email.errors}
            inputProps={{
              ...getInputProps(fields.email, { type: "email" }),
              autoFocus: true,
              autoComplete: "email",
            }}
            labelProps={{
              htmlFor: fields.email.id,
              children: "Email",
            }}
          />
          <ErrorList errors={form.errors} id={form.errorId} />
          <StatusButton
            className="w-full"
            disabled={isPending}
            status={isPending ? "pending" : form.status ?? "idle"}
            type="submit"
          >
            Submit
          </StatusButton>
        </Form>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />;
}
