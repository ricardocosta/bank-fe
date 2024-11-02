import { invariant } from "@epic-web/invariant";
import * as E from "@react-email/components";
import { json } from "@remix-run/node";

import { prisma } from "#app/utils/db/db.server.ts";
import { sendEmail } from "#app/utils/email.server.ts";
import { redirectWithToast } from "#app/utils/toast.server.ts";
import { verifySessionStorage } from "#app/utils/verification.server.ts";

import type { VerifyFunctionArgs } from "#app/routes/_auth+/verify.server";

export const newEmailAddressSessionKey = "new-email-address";

export async function handleVerification({
  request,
  submission,
}: VerifyFunctionArgs) {
  invariant(
    submission.status === "success",
    "Submission should be successful by now",
  );

  const verifySession = await verifySessionStorage.getSession(
    request.headers.get("cookie"),
  );

  const newEmail = verifySession.get(newEmailAddressSessionKey);

  if (!newEmail) {
    return json(
      {
        result: submission.reply({
          formErrors: [
            "You must submit the code on the same device that requested the email change.",
          ],
        }),
      },
      { status: 400 },
    );
  }

  const preUpdateUser = await prisma.user.findFirstOrThrow({
    select: { email: true },
    where: { id: submission.value.target },
  });

  const user = await prisma.user.update({
    data: { email: newEmail },
    select: { email: true, id: true, username: true },
    where: { id: submission.value.target },
  });

  await sendEmail({
    react: <EmailChangeNoticeEmail userId={user.id} />,
    subject: "Epic Stack email changed",
    to: preUpdateUser.email,
  });

  return redirectWithToast(
    "/settings/profile",
    {
      description: `Your email has been changed to ${user.email}`,
      title: "Email Changed",
      type: "success",
    },
    {
      headers: {
        "set-cookie": await verifySessionStorage.destroySession(verifySession),
      },
    },
  );
}

export function EmailChangeEmail({
  verifyUrl,
  otp,
}: {
  verifyUrl: string;
  otp: string;
}) {
  return (
    <E.Html dir="ltr" lang="en">
      <E.Container>
        <h1>
          <E.Text>Epic Notes Email Change</E.Text>
        </h1>
        <p>
          <E.Text>
            Here&apos;s your verification code: <strong>{otp}</strong>
          </E.Text>
        </p>
        <p>
          <E.Text>Or click the link:</E.Text>
        </p>
        <E.Link href={verifyUrl}>{verifyUrl}</E.Link>
      </E.Container>
    </E.Html>
  );
}

export function EmailChangeNoticeEmail({ userId }: { userId: string }) {
  return (
    <E.Html dir="ltr" lang="en">
      <E.Container>
        <h1>
          <E.Text>Your Epic Notes email has been changed</E.Text>
        </h1>
        <p>
          <E.Text>
            {`We're writing to let you know that your Epic Notes email has been
            changed.`}
          </E.Text>
        </p>
        <p>
          <E.Text>
            If you changed your email address, then you can safely ignore this.
            But if you did not change your email address, then please contact
            support immediately.
          </E.Text>
        </p>
        <p>
          <E.Text>Your Account ID: {userId}</E.Text>
        </p>
      </E.Container>
    </E.Html>
  );
}
