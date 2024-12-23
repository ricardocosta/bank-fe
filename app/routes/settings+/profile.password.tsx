import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
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
import { prisma } from "#app/utils/db/db.server.ts";
import { useIsPending } from "#app/utils/misc.tsx";
import { redirectWithToast } from "#app/utils/toast.server.ts";
import { PasswordSchema } from "#app/utils/user-validation.ts";

import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import type { BreadcrumbHandleType } from "./profile.tsx";

export const handle: BreadcrumbHandleType = {
  breadcrumb: <Icon name="dots-horizontal">Password</Icon>,
};

const ChangePasswordForm = z
  .object({
    confirmNewPassword: PasswordSchema,
    currentPassword: PasswordSchema,
    newPassword: PasswordSchema,
  })
  .superRefine(({ confirmNewPassword, newPassword }, ctx) => {
    if (confirmNewPassword !== newPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "The passwords must match",
        path: ["confirmNewPassword"],
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

  const submission = await parseWithZod(formData, {
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
              code: z.ZodIssueCode.custom,
              message: "Incorrect password.",
              path: ["currentPassword"],
            });
          }
        }
      },
    ),
  });

  if (submission.status !== "success") {
    return json(
      {
        result: submission.reply({
          hideFields: ["currentPassword", "newPassword", "confirmNewPassword"],
        }),
      },
      {
        status: submission.status === "error" ? 400 : 200,
      },
    );
  }

  const { newPassword } = submission.value;

  await prisma.user.update({
    data: {
      password: {
        update: {
          hash: await getPasswordHash(newPassword),
        },
      },
    },
    select: { username: true },
    where: { id: userId },
  });

  return redirectWithToast(
    `/settings/profile`,
    {
      description: "Your password has been changed.",
      title: "Password Changed",
      type: "success",
    },
    { status: 302 },
  );
}

export default function ChangePasswordRoute() {
  const actionData = useActionData<typeof action>();
  const isPending = useIsPending();

  const [form, fields] = useForm({
    constraint: getZodConstraint(ChangePasswordForm),
    id: "password-change-form",
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ChangePasswordForm });
    },
    shouldRevalidate: "onBlur",
  });

  return (
    <Form method="POST" {...getFormProps(form)} className="mx-auto max-w-md">
      <Field
        errors={fields.currentPassword.errors}
        inputProps={{
          ...getInputProps(fields.currentPassword, { type: "password" }),
          autoComplete: "current-password",
        }}
        labelProps={{ children: "Current Password" }}
      />
      <Field
        errors={fields.newPassword.errors}
        inputProps={{
          ...getInputProps(fields.newPassword, { type: "password" }),
          autoComplete: "new-password",
        }}
        labelProps={{ children: "New Password" }}
      />
      <Field
        errors={fields.confirmNewPassword.errors}
        inputProps={{
          ...getInputProps(fields.confirmNewPassword, {
            type: "password",
          }),
          autoComplete: "new-password",
        }}
        labelProps={{ children: "Confirm New Password" }}
      />
      <ErrorList errors={form.errors} id={form.errorId} />
      <div className="grid w-full grid-cols-2 gap-6">
        <Button render={<Link to="..">Cancel</Link>} variant="secondary" />
        <StatusButton
          status={isPending ? "pending" : (form.status ?? "idle")}
          type="submit"
        >
          Change Password
        </StatusButton>
      </div>
    </Form>
  );
}
