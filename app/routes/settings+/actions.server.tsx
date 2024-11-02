import { parseWithZod } from "@conform-to/zod";
import { json, redirect } from "@remix-run/node";
import { z } from "zod";

import { prepareVerification } from "#app/routes/_auth+/verify.server";
import {
  EmailChangeEmail,
  newEmailAddressSessionKey,
} from "#app/routes/settings+/profile.change-email.server.tsx";
import { ChangeEmailSchema } from "#app/routes/settings+/validation.ts";
import { prisma } from "#app/utils/db/db.server.ts";
import { sendEmail } from "#app/utils/email.server.ts";
import { verifySessionStorage } from "#app/utils/verification.server.ts";

export async function changeEmailAction({
  formData,
  userId,
  request,
}: {
  formData: FormData;
  userId: string;
  request: Request;
}) {
  const submission = await parseWithZod(formData, {
    async: true,
    schema: ChangeEmailSchema.superRefine(async (data, ctx) => {
      const existingUser = await prisma.user.findUnique({
        where: { email: data.email },
      });
      if (existingUser) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "This email is already in use.",
          path: ["email"],
        });
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

  const { otp, redirectTo, verifyUrl } = await prepareVerification({
    period: 10 * 60,
    request,
    target: userId,
    type: "change-email",
  });

  const response = await sendEmail({
    react: <EmailChangeEmail otp={otp} verifyUrl={verifyUrl.toString()} />,
    subject: `Epic Notes Email Change Verification`,
    to: submission.value.email,
  });

  if (response.status === "success") {
    const verifySession = await verifySessionStorage.getSession();
    verifySession.set(newEmailAddressSessionKey, submission.value.email);
    return redirect(redirectTo.toString(), {
      headers: {
        "set-cookie": await verifySessionStorage.commitSession(verifySession),
      },
    });
  }

  return json(
    { result: submission.reply({ formErrors: [response.error.message] }) },
    { status: 500 },
  );
}
