import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";

import { GeneralErrorBoundary } from "#app/components/error-boundary.tsx";
import { ErrorList, Field } from "#app/components/forms.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import { requireAnonymous, resetUserPassword } from "#app/utils/auth.server.ts";
import { useIsPending } from "#app/utils/misc.tsx";
import { PasswordAndConfirmPasswordSchema } from "#app/utils/user-validation.ts";
import { verifySessionStorage } from "#app/utils/verification.server.ts";

import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";

export const resetPasswordUsernameSessionKey = "resetPasswordUsername";

const ResetPasswordSchema = PasswordAndConfirmPasswordSchema;

async function requireResetPasswordUsername(request: Request) {
  await requireAnonymous(request);
  const verifySession = await verifySessionStorage.getSession(
    request.headers.get("cookie"),
  );
  const resetPasswordUsername = verifySession.get(
    resetPasswordUsernameSessionKey,
  );
  if (typeof resetPasswordUsername !== "string" || !resetPasswordUsername) {
    throw redirect("/login");
  }
  return resetPasswordUsername;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const resetPasswordUsername = await requireResetPasswordUsername(request);
  return json({ resetPasswordUsername });
}

export async function action({ request }: ActionFunctionArgs) {
  const resetPasswordUsername = await requireResetPasswordUsername(request);
  const formData = await request.formData();
  const submission = parseWithZod(formData, {
    schema: ResetPasswordSchema,
  });

  if (submission.status !== "success") {
    return json(
      { result: submission.reply() },
      {
        status: submission.status === "error" ? 400 : 200,
      },
    );
  }

  const { password } = submission.value;

  await resetUserPassword({ username: resetPasswordUsername, password });
  const verifySession = await verifySessionStorage.getSession();
  return redirect("/login", {
    headers: {
      "set-cookie": await verifySessionStorage.destroySession(verifySession),
    },
  });
}

export const meta: MetaFunction = () => {
  return [{ title: "Reset Password | Epic Notes" }];
};

export default function ResetPasswordPage() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const isPending = useIsPending();

  const [form, fields] = useForm({
    id: "reset-password",
    constraint: getZodConstraint(ResetPasswordSchema),
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ResetPasswordSchema });
    },
    shouldRevalidate: "onBlur",
  });

  return (
    <div className="container flex flex-col justify-center pb-32 pt-20">
      <div className="text-center">
        <h1 className="text-h1">Password Reset</h1>
        <p className="mt-3 text-body-md text-muted-foreground">
          Hi, {data.resetPasswordUsername}. No worries. It happens all the time.
        </p>
      </div>
      <div className="mx-auto mt-16 min-w-[368px] max-w-sm">
        <Form method="POST" {...getFormProps(form)}>
          <Field
            errors={fields.password.errors}
            inputProps={{
              ...getInputProps(fields.password, { type: "password" }),
              autoComplete: "new-password",
              autoFocus: true,
            }}
            labelProps={{
              htmlFor: fields.password.id,
              children: "New Password",
            }}
          />
          <Field
            errors={fields.confirmPassword.errors}
            inputProps={{
              ...getInputProps(fields.confirmPassword, { type: "password" }),
              autoComplete: "new-password",
            }}
            labelProps={{
              htmlFor: fields.confirmPassword.id,
              children: "Confirm Password",
            }}
          />

          <ErrorList errors={form.errors} id={form.errorId} />

          <StatusButton
            className="w-full"
            disabled={isPending}
            status={isPending ? "pending" : (form.status ?? "idle")}
            type="submit"
          >
            Reset password
          </StatusButton>
        </Form>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />;
}
