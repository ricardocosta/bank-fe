import { invariantResponse } from "@epic-web/invariant";

import { prisma } from "#app/utils/db/db.server";

import type { DataFunctionArgs } from "@remix-run/node";

export async function loader({ params }: DataFunctionArgs) {
  invariantResponse(params.imageId, "Image ID is required", { status: 400 });
  const image = await prisma.noteImage.findUnique({
    where: { id: params.imageId },
    select: { contentType: true, blob: true },
  });

  invariantResponse(image, "Not found", { status: 404 });

  return new Response(image.blob, {
    headers: {
      "Content-Type": image.contentType,
      "Content-Length": Buffer.byteLength(image.blob).toString(),
      "Content-Disposition": `inline; filename="${params.imageId}"`,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
