import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";

import { ErrorList, Field } from "#app/components/forms.tsx";
import { Icon } from "#app/components/ui/icon.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import { changeEmailAction } from "#app/routes/settings+/actions.server.tsx";
import { ChangeEmailSchema } from "#app/routes/settings+/validation.ts";
import { requireUserId } from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server.ts";
import { useIsPending } from "#app/utils/misc.tsx";

import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import type { BreadcrumbHandleType } from "./profile.tsx";

export const handle: BreadcrumbHandleType = {
  breadcrumb: <Icon name="envelope-closed">Change Email</Icon>,
};

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);
  const user = await prisma.user.findUnique({
    select: { email: true },
    where: { id: userId },
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

  return changeEmailAction({ formData, request, userId });
}

export default function ChangeEmailIndex() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  const [form, fields] = useForm({
    constraint: getZodConstraint(ChangeEmailSchema),
    id: "change-email-form",
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
