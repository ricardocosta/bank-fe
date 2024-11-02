import { json } from "@remix-run/node";

import { requireUserId } from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server";
import { getDomainUrl } from "#app/utils/misc.tsx";

import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);
  const user = await prisma.user.findUniqueOrThrow({
    // this is one of the *few* instances where you can use "include" because
    // the goal is to literally get *everything*. Normally you should be
    // explicit with "select". We're suing select for images because we don't
    // want to send back the entire blob of the image. We'll send a URL they can
    // use to download it instead.
    include: {
      image: {
        select: {
          contentType: true,
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      },
      password: false, // <-- intentionally omit password
      roles: true,
      sessions: true,
    },
    where: { id: userId },
  });

  const domain = getDomainUrl(request);

  return json({
    user: {
      ...user,
      image: user.image
        ? {
            ...user.image,
            url: `${domain}/resources/user-images/${user.image.id}`,
          }
        : null,
    },
  });
}
