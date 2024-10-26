import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { z } from "zod";

import { ErrorList, Field } from "#app/components/forms.tsx";
import { Icon } from "#app/components/ui/icon.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import { prepareVerification } from "#app/routes/_auth+/verify.server.ts";
import { EmailChangeEmail } from "#app/routes/settings+/profile.change-email.server.tsx";
import { requireUserId } from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server.ts";
import { sendEmail } from "#app/utils/email.server.ts";
import { useIsPending } from "#app/utils/misc.tsx";
import { EmailSchema } from "#app/utils/user-validation.ts";
import { verifySessionStorage } from "#app/utils/verification.server.ts";

import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import type { BreadcrumbHandle } from "./profile.tsx";

export const handle: BreadcrumbHandle = {
  breadcrumb: <Icon name="envelope-closed">Change Email</Icon>,
};

export const newEmailAddressSessionKey = "new-email-address";

const ChangeEmailSchema = z.object({
  email: EmailSchema,
});

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { email: true },
  });
  if (!user) {
    const params = new URLSearchParams({ redirectTo: request.url });
    throw redirect(`/login?${params.toString()}`);
  }
  return json({ user });
}

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);
  const formData = await request.formData();

  const submission = await parseWithZod(formData, {
    schema: ChangeEmailSchema.superRefine(async (data, ctx) => {
      const existingUser = await prisma.user.findUnique({
        where: { email: data.email },
      });
      if (existingUser) {
        ctx.addIssue({
          path: ["email"],
          code: z.ZodIssueCode.custom,
          message: "This email is already in use.",
        });
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

  const { otp, redirectTo, verifyUrl } = await prepareVerification({
    period: 10 * 60,
    request,
    target: userId,
    type: "change-email",
  });

  const response = await sendEmail({
    to: submission.value.email,
    subject: `Epic Notes Email Change Verification`,
    react: <EmailChangeEmail otp={otp} verifyUrl={verifyUrl.toString()} />,
  });

  if (response.status === "success") {
    const verifySession = await verifySessionStorage.getSession();
    verifySession.set(newEmailAddressSessionKey, submission.value.email);
    return redirect(redirectTo.toString(), {
      headers: {
        "set-cookie": await verifySessionStorage.commitSession(verifySession),
      },
    });
  } else {
    return json(
      { result: submission.reply({ formErrors: [response.error.message] }) },
      { status: 500 },
    );
  }
}

export default function ChangeEmailIndex() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  const [form, fields] = useForm({
    id: "change-email-form",
    constraint: getZodConstraint(ChangeEmailSchema),
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ChangeEmailSchema });
    },
  });

  const isPending = useIsPending();
  return (
    <div>
      <h1 className="text-h1">Change Email</h1>
      <p>You will receive an email at the new email address to confirm.</p>
      <p>
        An email notice will also be sent to your old address {data.user.email}.
      </p>
      <div className="mx-auto mt-5 max-w-sm">
        <Form method="POST" {...getFormProps(form)}>
          <Field
            errors={fields.email.errors}
            inputProps={{
              ...getInputProps(fields.email, { type: "email" }),
              autoComplete: "email",
            }}
            labelProps={{ children: "New Email" }}
          />
          <ErrorList errors={form.errors} id={form.errorId} />
          <div>
            <StatusButton
              status={isPending ? "pending" : (form.status ?? "idle")}
            >
              Send Confirmation
            </StatusButton>
          </div>
        </Form>
      </div>
    </div>
  );
}
