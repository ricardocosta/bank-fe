import { redirect } from "@remix-run/node";

import { logout, requireUserId } from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server";

import type { DataFunctionArgs } from "@remix-run/node";

export async function loader({ request }: DataFunctionArgs) {
  const userId = await requireUserId(request);
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    const requestUrl = new URL(request.url);
    const loginParams = new URLSearchParams([
      ["redirectTo", `${requestUrl.pathname}${requestUrl.search}`],
    ]);
    const redirectTo = `/login?${loginParams.toString()}`;
    await logout({ request, redirectTo });
    return redirect(redirectTo);
  }
  return redirect(`/users/${user.username}`);
}
