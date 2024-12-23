import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { Form, useActionData, useSearchParams } from "@remix-run/react";
import { HoneypotInputs } from "remix-utils/honeypot/react";

import { GeneralErrorBoundary } from "#app/components/error-boundary.tsx";
import { ErrorList, Field } from "#app/components/forms.tsx";
import { Spacer } from "#app/components/spacer.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import {
  codeQueryParam,
  redirectToQueryParam,
  targetQueryParam,
  typeQueryParam,
  VerificationTypeSchema,
  VerifySchema,
} from "#app/routes/_auth+/_validation.ts";
import { validateRequest } from "#app/routes/_auth+/verify.server.ts";
import { checkHoneypot } from "#app/utils/honeypot.server.ts";
import { useIsPending } from "#app/utils/misc.tsx";

import type { ActionFunctionArgs } from "@remix-run/node";

import type { VerificationTypes } from "#app/routes/_auth+/_validation.ts";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  checkHoneypot(formData);

  return validateRequest(request, formData);
}

export default function VerifyRoute() {
  const [searchParams] = useSearchParams();
  const isPending = useIsPending();
  const actionData = useActionData<typeof action>();
  const parseWithZodType = VerificationTypeSchema.safeParse(
    searchParams.get(typeQueryParam),
  );
  const type = parseWithZodType.success ? parseWithZodType.data : null;

  const checkEmail = (
    <>
      <h1 className="text-h1">Check your email</h1>
      <p className="text-body-md text-muted-foreground mt-3">
        We&apos;ve sent you a code to verify your email address.
      </p>
    </>
  );

  const headings: Record<VerificationTypes, React.ReactNode> = {
    "change-email": checkEmail,
    onboarding: checkEmail,
    "reset-password": checkEmail,
  };

  const [form, fields] = useForm({
    constraint: getZodConstraint(VerifySchema),
    defaultValue: {
      code: searchParams.get(codeQueryParam),
      redirectTo: searchParams.get(redirectToQueryParam),
      target: searchParams.get(targetQueryParam),
      type: type,
    },
    id: "verify-form",
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: VerifySchema });
    },
  });

  return (
    <main className="container flex flex-col justify-center pb-32 pt-20">
      <div className="text-center">
        {type ? headings[type] : "Invalid Verification Type"}
      </div>

      <Spacer size="xs" />

      <div className="mx-auto flex w-72 max-w-full flex-col justify-center gap-1">
        <div>
          <ErrorList errors={form.errors} id={form.errorId} />
        </div>
        <div className="flex w-full gap-2">
          <Form method="POST" {...getFormProps(form)} className="flex-1">
            <HoneypotInputs />
            <Field
              errors={fields[codeQueryParam].errors}
              inputProps={{
                ...getInputProps(fields[codeQueryParam], { type: "text" }),
                autoComplete: "one-time-code",
              }}
              labelProps={{
                children: "Code",
                htmlFor: fields[codeQueryParam].id,
              }}
            />
            <input
              {...getInputProps(fields[typeQueryParam], { type: "hidden" })}
            />
            <input
              {...getInputProps(fields[targetQueryParam], { type: "hidden" })}
            />
            <input
              {...getInputProps(fields[redirectToQueryParam], {
                type: "hidden",
              })}
            />
            <StatusButton
              className="w-full"
              disabled={isPending}
              status={isPending ? "pending" : (form.status ?? "idle")}
              type="submit"
            >
              Submit
            </StatusButton>
          </Form>
        </div>
      </div>
    </main>
  );
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />;
}
