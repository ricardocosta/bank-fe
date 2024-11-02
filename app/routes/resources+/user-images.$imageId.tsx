import { invariantResponse } from "@epic-web/invariant";

import { prisma } from "#app/utils/db/db.server";

import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  invariantResponse(params.imageId, "Image ID is required", { status: 400 });
  const image = await prisma.userImage.findUnique({
    select: { blob: true, contentType: true },
    where: { id: params.imageId },
  });

  invariantResponse(image, "Not found", { status: 404 });

  return new Response(image.blob, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Disposition": `inline; filename="${params.imageId}"`,
      "Content-Length": Buffer.byteLength(image.blob).toString(),
      "Content-Type": image.contentType,
    },
  });
}
