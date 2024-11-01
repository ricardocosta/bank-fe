import { parseWithZod } from "@conform-to/zod";
import { createId as cuid } from "@paralleldrive/cuid2";
import {
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  json,
  unstable_parseMultipartFormData as parseMultipartFormData,
  redirect,
} from "@remix-run/node";
import { z } from "zod";

import { requireUserId } from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server";

import { MAX_UPLOAD_SIZE, NoteEditorSchema } from "./__note-editor";

import type { ActionFunctionArgs } from "@remix-run/node";

import type { ImageFieldset } from "./__note-editor";

function imageHasFile(
  image: ImageFieldset,
): image is ImageFieldset & { file: NonNullable<ImageFieldset["file"]> } {
  return Boolean(image.file?.size && image.file?.size > 0);
}

function imageHasId(
  image: ImageFieldset,
): image is ImageFieldset & { id: NonNullable<ImageFieldset["id"]> } {
  return image.id !== null;
}

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);

  const formData = await parseMultipartFormData(
    request,
    createMemoryUploadHandler({ maxPartSize: MAX_UPLOAD_SIZE }),
  );

  const submission = await parseWithZod(formData, {
    async: true,
    schema: NoteEditorSchema.superRefine(async (data, ctx) => {
      if (!data.id) {
        return;
      }

      const note = await prisma.note.findUnique({
        select: { id: true },
        where: { id: data.id, ownerId: userId },
      });
      if (!note) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Note not found",
        });
      }
    }).transform(async ({ images = [], ...data }) => {
      return {
        ...data,
        imageUpdates: await Promise.all(
          images.filter(imageHasId).map(async (i) => {
            if (imageHasFile(i)) {
              return {
                altText: i.altText,
                blob: Buffer.from(await i.file.arrayBuffer()),
                contentType: i.file.type,
                id: i.id,
              };
            }

            return {
              altText: i.altText,
              id: i.id,
            };
          }),
        ),
        newImages: await Promise.all(
          images
            .filter(imageHasFile)
            .filter((i) => !i.id)
            .map(async (image) => {
              return {
                altText: image.altText,
                blob: Buffer.from(await image.file.arrayBuffer()),
                contentType: image.file.type,
              };
            }),
        ),
      };
    }),
  });

  if (submission.status !== "success") {
    return json(
      { result: submission.reply() },
      { status: submission.status === "error" ? 400 : 200 },
    );
  }

  const {
    id: noteId,
    title,
    content,
    imageUpdates = [],
    newImages = [],
  } = submission.value;

  const updatedNote = await prisma.note.upsert({
    create: {
      content,
      images: { create: { ...newImages } },
      ownerId: userId,
      title,
    },
    select: { id: true, owner: { select: { username: true } } },
    update: {
      content,
      images: {
        create: newImages,
        deleteMany: { id: { notIn: imageUpdates.map((i) => i.id) } },
        updateMany: imageUpdates.map((updates) => ({
          data: { ...updates, id: updates.blob ? cuid() : updates.id },
          where: { id: updates.id },
        })),
      },
      title,
    },
    where: { id: noteId ?? "__new_note__" },
  });

  return redirect(
    `/users/${updatedNote.owner.username}/notes/${updatedNote.id}`,
  );
}
