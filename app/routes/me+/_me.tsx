import { invariantResponse } from "@epic-web/invariant";
import { json } from "@remix-run/node";

import { requireUserId } from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server";

import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);

  const user = await prisma.user.findFirst({
    select: {
      createdAt: true,
      id: true,
      image: { select: { id: true } },
      name: true,
      username: true,
    },
    where: {
      id: userId,
    },
  });

  invariantResponse(user, "User not found", { status: 404 });

  return json({ user, userJoinedDisplay: user.createdAt.toLocaleDateString() });
}
