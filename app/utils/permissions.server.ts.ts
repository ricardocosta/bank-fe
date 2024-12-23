import { Prisma } from "@prisma/client";
import { json } from "@remix-run/node";

import { requireUserId } from "./auth.server.ts";
import { prisma } from "./db/db.server.ts";
import { parsePermissionString } from "./user.ts";

import type { PermissionString } from "./user.ts";

export async function requireUserWithPermission(
  request: Request,
  permission: PermissionString,
) {
  const userId = await requireUserId(request);
  const permissionData = parsePermissionString(permission);
  const user = await prisma.user.findFirst({
    select: { id: true },
    where: {
      id: userId,
      roles: {
        some: {
          permissions: {
            some: {
              ...permissionData,
              access: permissionData.access
                ? { in: permissionData.access }
                : Prisma.skip,
            },
          },
        },
      },
    },
  });
  if (!user) {
    throw json(
      {
        error: "Unauthorized",
        message: `Unauthorized: required permissions: ${permission}`,
        requiredPermission: permissionData,
      },
      { status: 403 },
    );
  }
  return user.id;
}

export async function requireUserWithRole(request: Request, name: string) {
  const userId = await requireUserId(request);
  const user = await prisma.user.findFirst({
    select: { id: true },
    where: { id: userId, roles: { some: { name } } },
  });
  if (!user) {
    throw json(
      {
        error: "Unauthorized",
        message: `Unauthorized: required role: ${name}`,
        requiredRole: name,
      },
      { status: 403 },
    );
  }
  return user.id;
}
