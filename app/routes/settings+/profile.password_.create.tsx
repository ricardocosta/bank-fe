import { conform, useForm } from "@conform-to/react";
import { getFieldsetConstraint, parse } from "@conform-to/zod";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";

import { ErrorList, Field } from "#app/components/forms.tsx";
import { Button } from "#app/components/ui/button.tsx";
import { Icon } from "#app/components/ui/icon.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import { getPasswordHash, requireUserId } from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server.ts";
import { useIsPending } from "#app/utils/misc.tsx";
import { PasswordAndConfirmPasswordSchema } from "#app/utils/user-validation.ts";

import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import type { BreadcrumbHandle } from "./profile.tsx";

export const handle: BreadcrumbHandle = {
  breadcrumb: <Icon name="dots-horizontal">Password</Icon>,
};

const CreatePasswordForm = PasswordAndConfirmPasswordSchema;

async function requireNoPassword(userId: string) {
  const password = await prisma.password.findUnique({
    select: { userId: true },
    where: { userId },
  });
  if (password) {
    throw redirect("/settings/profile/password");
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);
  await requireNoPassword(userId);
  return json({});
}

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);
  await requireNoPassword(userId);
  const formData = await request.formData();
  const submission = await parse(formData, {
    async: true,
    schema: CreatePasswordForm,
  });
  // clear the payload so we don't send the password back to the client
  submission.payload = {};
  if (submission.intent !== "submit") {
    // clear the value so we don't send the password back to the client
    submission.value = undefined;
    return json({ status: "idle", submission } as const);
  }
  if (!submission.value) {
    return json({ status: "error", submission } as const, { status: 400 });
  }

  const { password } = submission.value;

  await prisma.user.update({
    select: { username: true },
    where: { id: userId },
    data: {
      password: {
        create: {
          hash: await getPasswordHash(password),
        },
      },
    },
  });

  return redirect(`/settings/profile`, { status: 302 });
}

export default function CreatePasswordRoute() {
  const actionData = useActionData<typeof action>();
  const isPending = useIsPending();

  const [form, fields] = useForm({
    id: "password-create-form",
    constraint: getFieldsetConstraint(CreatePasswordForm),
    lastSubmission: actionData?.submission,
    onValidate({ formData }) {
      return parse(formData, { schema: CreatePasswordForm });
    },
    shouldRevalidate: "onBlur",
  });

  return (
    <Form method="POST" {...form.props} className="mx-auto max-w-md">
      <Field
        errors={fields.password.errors}
        inputProps={conform.input(fields.password, { type: "password" })}
        labelProps={{ children: "New Password" }}
      />
      <Field
        errors={fields.confirmPassword.errors}
        inputProps={conform.input(fields.confirmPassword, {
          type: "password",
        })}
        labelProps={{ children: "Confirm New Password" }}
      />
      <ErrorList errors={form.errors} id={form.errorId} />
      <div className="grid w-full grid-cols-2 gap-6">
        <Button asChild variant="secondary">
          <Link to="..">Cancel</Link>
        </Button>
        <StatusButton
          status={isPending ? "pending" : actionData?.status ?? "idle"}
          type="submit"
        >
          Create Password
        </StatusButton>
      </div>
    </Form>
  );
}
