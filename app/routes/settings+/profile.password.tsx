import { conform, useForm } from "@conform-to/react";
import { getFieldsetConstraint, parse } from "@conform-to/zod";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { AuthenticityTokenInput } from "remix-utils/csrf/react";
import { z } from "zod";

import { ErrorList, Field } from "#app/components/forms.tsx";
import { Button } from "#app/components/ui/button.tsx";
import { Icon } from "#app/components/ui/icon.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import {
  getPasswordHash,
  requireUserId,
  verifyUserPassword,
} from "#app/utils/auth.server.ts";
import { validateCSRF } from "#app/utils/csrf.server.ts";
import { prisma } from "#app/utils/db/db.server.ts";
import { useIsPending } from "#app/utils/misc.tsx";
import { redirectWithToast } from "#app/utils/toast.server.ts";
import { PasswordSchema } from "#app/utils/user-validation.ts";

import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import type { BreadcrumbHandle } from "./profile.tsx";

export const handle: BreadcrumbHandle = {
  breadcrumb: <Icon name="dots-horizontal">Password</Icon>,
};

const ChangePasswordForm = z
  .object({
    currentPassword: PasswordSchema,
    newPassword: PasswordSchema,
    confirmNewPassword: PasswordSchema,
  })
  .superRefine(({ confirmNewPassword, newPassword }, ctx) => {
    if (confirmNewPassword !== newPassword) {
      ctx.addIssue({
        path: ["confirmNewPassword"],
        code: z.ZodIssueCode.custom,
        message: "The passwords must match",
      });
    }
  });

async function requirePassword(userId: string) {
  const password = await prisma.password.findUnique({
    select: { userId: true },
    where: { userId },
  });
  if (!password) {
    throw redirect("/settings/profile/password/create");
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);
  await requirePassword(userId);
  return json({});
}

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);
  await requirePassword(userId);
  const formData = await request.formData();
  await validateCSRF(formData, request.headers);
  const submission = await parse(formData, {
    async: true,
    schema: ChangePasswordForm.superRefine(
      async ({ currentPassword, newPassword }, ctx) => {
        if (currentPassword && newPassword) {
          const user = await verifyUserPassword(
            { id: userId },
            currentPassword,
          );
          if (!user) {
            ctx.addIssue({
              path: ["currentPassword"],
              code: z.ZodIssueCode.custom,
              message: "Incorrect password.",
            });
          }
        }
      },
    ),
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

  const { newPassword } = submission.value;

  await prisma.user.update({
    select: { username: true },
    where: { id: userId },
    data: {
      password: {
        update: {
          hash: await getPasswordHash(newPassword),
        },
      },
    },
  });

  return redirectWithToast(
    `/settings/profile`,
    {
      type: "success",
      title: "Password Changed",
      description: "Your password has been changed.",
    },
    { status: 302 },
  );
}

export default function ChangePasswordRoute() {
  const actionData = useActionData<typeof action>();
  const isPending = useIsPending();

  const [form, fields] = useForm({
    id: "password-change-form",
    constraint: getFieldsetConstraint(ChangePasswordForm),
    lastSubmission: actionData?.submission,
    onValidate({ formData }) {
      return parse(formData, { schema: ChangePasswordForm });
    },
    shouldRevalidate: "onBlur",
  });

  return (
    <Form method="POST" {...form.props} className="mx-auto max-w-md">
      <AuthenticityTokenInput />
      <Field
        errors={fields.currentPassword.errors}
        inputProps={conform.input(fields.currentPassword, { type: "password" })}
        labelProps={{ children: "Current Password" }}
      />
      <Field
        errors={fields.newPassword.errors}
        inputProps={conform.input(fields.newPassword, { type: "password" })}
        labelProps={{ children: "New Password" }}
      />
      <Field
        errors={fields.confirmNewPassword.errors}
        inputProps={conform.input(fields.confirmNewPassword, {
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
          Change Password
        </StatusButton>
      </div>
    </Form>
  );
}
