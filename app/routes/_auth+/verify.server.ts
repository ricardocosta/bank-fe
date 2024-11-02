import { parseWithZod } from "@conform-to/zod";
import { json } from "@remix-run/node";
import { z } from "zod";

import { handleVerification as handleOnboardingVerification } from "#app/routes/_auth+/onboarding.server";
import { handleVerification as handleResetPasswordVerification } from "#app/routes/_auth+/reset-password.server";
import {
  codeQueryParam,
  redirectToQueryParam,
  targetQueryParam,
  typeQueryParam,
  VerifySchema,
} from "#app/routes/_auth+/validation.ts";
import { handleVerification as handleChangeEmailVerification } from "#app/routes/settings+/profile.change-email.server";
import { prisma } from "#app/utils/db/db.server.ts";
import { getDomainUrl } from "#app/utils/misc.tsx";
import { generateTOTP, verifyTOTP } from "#app/utils/totp.server.ts";

import type { Submission } from "@conform-to/react";

import type { VerificationTypes } from "#app/routes/_auth+/validation.ts";

export interface VerifyFunctionArgs {
  request: Request;
  submission: Submission<
    z.input<typeof VerifySchema>,
    string[],
    z.output<typeof VerifySchema>
  >;
  body: FormData | URLSearchParams;
}

export function getRedirectToUrl({
  request,
  type,
  target,
  redirectTo,
}: {
  request: Request;
  type: VerificationTypes;
  target: string;
  redirectTo?: string;
}) {
  const redirectToUrl = new URL(`${getDomainUrl(request)}/verify`);
  redirectToUrl.searchParams.set(typeQueryParam, type);
  redirectToUrl.searchParams.set(targetQueryParam, target);

  if (redirectTo) {
    redirectToUrl.searchParams.set(redirectToQueryParam, redirectTo);
  }

  return redirectToUrl;
}

export async function prepareVerification({
  period,
  request,
  type,
  target,
}: {
  period: number;
  request: Request;
  type: VerificationTypes;
  target: string;
}) {
  const verifyUrl = getRedirectToUrl({ request, target, type });
  const redirectTo = new URL(verifyUrl.toString());

  const { otp, ...verificationConfig } = generateTOTP({
    algorithm: "SHA256",
    // Leaving off 0 and O on purpose to avoid confusing users.
    charSet: "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789",
    period,
  });

  const verificationData = {
    target,
    type,
    ...verificationConfig,
    expiresAt: new Date(Date.now() + verificationConfig.period * 1000),
  };

  await prisma.verification.upsert({
    create: verificationData,
    update: verificationData,
    where: { target_type: { target, type } },
  });

  // add the otp to the url we'll email the user.
  verifyUrl.searchParams.set(codeQueryParam, otp);

  return { otp, redirectTo, verifyUrl };
}

export async function isCodeValid({
  code,
  type,
  target,
}: {
  code: string;
  type: VerificationTypes;
  target: string;
}) {
  const verification = await prisma.verification.findUnique({
    select: { algorithm: true, charSet: true, period: true, secret: true },
    where: {
      OR: [{ expiresAt: { gt: new Date() } }, { expiresAt: null }],
      target_type: { target, type },
    },
  });

  if (!verification) {
    return false;
  }

  const result = verifyTOTP({
    otp: code,
    ...verification,
  });

  if (!result) {
    return false;
  }

  return true;
}

export async function validateRequest(
  request: Request,
  body: URLSearchParams | FormData,
) {
  const submission = await parseWithZod(body, {
    async: true,
    schema: VerifySchema.superRefine(async (data, ctx) => {
      const codeIsValid = await isCodeValid({
        code: data[codeQueryParam],
        target: data[targetQueryParam],
        type: data[typeQueryParam],
      });

      if (!codeIsValid) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Invalid code`,
          path: ["code"],
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

  const { value: submissionValue } = submission;

  async function deleteVerification() {
    await prisma.verification.delete({
      where: {
        target_type: {
          target: submissionValue[targetQueryParam],
          type: submissionValue[typeQueryParam],
        },
      },
    });
  }

  switch (submissionValue[typeQueryParam]) {
    case "reset-password": {
      await deleteVerification();
      return handleResetPasswordVerification({ body, request, submission });
    }
    case "onboarding": {
      await deleteVerification();
      return handleOnboardingVerification({ body, request, submission });
    }
    case "change-email": {
      await deleteVerification();
      return handleChangeEmailVerification({ body, request, submission });
    }
    default: {
      submissionValue[typeQueryParam] satisfies never;
    }
  }
}
