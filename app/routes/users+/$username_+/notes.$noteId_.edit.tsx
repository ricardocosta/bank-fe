import { invariantResponse } from "@epic-web/invariant";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { requireUserId } from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server.ts";

import { NoteEditor } from "./__note-editor.tsx";

import type { LoaderFunctionArgs } from "@remix-run/node";

export { action } from "./__note-editor.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);
  const note = await prisma.note.findFirst({
    select: {
      id: true,
      title: true,
      content: true,
      images: {
        select: {
          id: true,
          altText: true,
        },
      },
    },
    where: {
      id: params.noteId,
      ownerId: userId,
    },
  });
  invariantResponse(note, "Not found", { status: 404 });
  return json({ note: note });
}

export default function NoteEdit() {
  const data = useLoaderData<typeof loader>();

  return <NoteEditor note={data.note} />;
}
