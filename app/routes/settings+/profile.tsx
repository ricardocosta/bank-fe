import { invariantResponse } from "@epic-web/invariant";
import { json } from "@remix-run/node";
import { Link, Outlet, useMatches } from "@remix-run/react";
import { z } from "zod";

import { cn } from "~/styles/classname.ts";

import { Spacer } from "#app/components/spacer.tsx";
import { Icon } from "#app/components/ui/icon.tsx";
import { requireUserId } from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server";
import { useUser } from "#app/utils/user.ts";

import type { LoaderFunctionArgs } from "@remix-run/node";

export const BreadcrumbHandle = z.object({ breadcrumb: z.any() });
export type BreadcrumbHandleType = z.infer<typeof BreadcrumbHandle>;

export const handle: BreadcrumbHandleType = {
  breadcrumb: <Icon name="file-text">Edit Profile</Icon>,
};

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);
  const user = await prisma.user.findUnique({
    select: { username: true },
    where: { id: userId },
  });
  invariantResponse(user, "User not found", { status: 404 });
  return json({});
}

const BreadcrumbHandleMatch = z.object({
  handle: BreadcrumbHandle,
});

export default function EditUserProfile() {
  const user = useUser();
  const matches = useMatches();
  const breadcrumbs = matches
    .map((m) => {
      const result = BreadcrumbHandleMatch.safeParse(m);
      if (!result.success || !result.data.handle.breadcrumb) {
        return null;
      }

      return (
        <Link key={m.id} className="flex items-center" to={m.pathname}>
          {result.data.handle.breadcrumb}
        </Link>
      );
    })
    .filter(Boolean);

  return (
    <div className="m-auto mb-24 mt-16 max-w-3xl">
      <div className="container">
        <ul className="flex gap-3">
          <li>
            <Link
              className="text-muted-foreground"
              to={`/users/${user.username}`}
            >
              Profile
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb, i, arr) => (
            <li
              key={breadcrumb.key}
              className={cn("flex items-center gap-3", {
                "text-muted-foreground": i < arr.length - 1,
              })}
            >
              ▶️ {breadcrumb}
            </li>
          ))}
        </ul>
      </div>
      <Spacer size="xs" />
      <main className="bg-muted mx-auto px-6 py-8 md:container md:rounded-3xl">
        <Outlet />
      </main>
    </div>
  );
}
