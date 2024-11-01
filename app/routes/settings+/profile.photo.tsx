import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { invariantResponse } from "@epic-web/invariant";
import {
  json,
  redirect,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { useState } from "react";
import { z } from "zod";

import { ErrorList } from "#app/components/forms.tsx";
import { Button } from "#app/components/ui/button.tsx";
import { Icon } from "#app/components/ui/icon.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import { requireUserId } from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server.ts";
import {
  getUserImgSrc,
  useDoubleCheck,
  useIsPending,
} from "#app/utils/misc.tsx";

import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import type { BreadcrumbHandleType } from "./profile.tsx";

export const handle: BreadcrumbHandleType = {
  breadcrumb: <Icon name="avatar">Photo</Icon>,
};

const MAX_SIZE = 1024 * 1024 * 3; // 3MB

const DeleteImageSchema = z.object({
  intent: z.literal("delete"),
});

const NewImageSchema = z.object({
  intent: z.literal("submit"),
  photoFile: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Image is required")
    .refine(
      (file) => file.size <= MAX_SIZE,
      "Image size must be less than 3MB",
    ),
});

const PhotoFormSchema = z.discriminatedUnion("intent", [
  DeleteImageSchema,
  NewImageSchema,
]);

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      image: { select: { id: true } },
      name: true,
      username: true,
    },
    where: { id: userId },
  });
  invariantResponse(user, "User not found", { status: 404 });
  return json({ user });
}

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);
  const formData = await unstable_parseMultipartFormData(
    request,
    unstable_createMemoryUploadHandler({ maxPartSize: MAX_SIZE }),
  );

  const submission = await parseWithZod(formData, {
    async: true,
    schema: PhotoFormSchema.transform(async (data) => {
      if (data.intent === "delete") {
        return { intent: "delete" };
      }
      if (data.photoFile.size <= 0) {
        return z.NEVER;
      }
      return {
        image: {
          blob: Buffer.from(await data.photoFile.arrayBuffer()),
          contentType: data.photoFile.type,
        },
        intent: data.intent,
      };
    }),
  });

  if (submission.status !== "success") {
    return json(
      { result: submission.reply() },
      {
        status: submission.status === "error" ? 400 : 200,
      },
    );
  }

  const { image, intent } = submission.value;

  if (intent === "delete") {
    await prisma.userImage.deleteMany({ where: { userId } });
    return redirect("/settings/profile");
  }

  await prisma.$transaction(async ($prisma) => {
    await $prisma.userImage.deleteMany({ where: { userId } });

    if (image) {
      await $prisma.user.update({
        data: { image: { create: image } },
        where: { id: userId },
      });
    }
  });

  return redirect("/settings/profile");
}

export default function PhotoRoute() {
  const data = useLoaderData<typeof loader>();

  const doubleCheckDeleteImage = useDoubleCheck();

  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();

  const [form, fields] = useForm({
    constraint: getZodConstraint(PhotoFormSchema),
    id: "profile-photo",
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: PhotoFormSchema });
    },
    shouldRevalidate: "onBlur",
  });

  const isPending = useIsPending();
  const pendingIntent = isPending
    ? navigation.formData?.get("intent")
    : undefined;
  const lastSubmissionIntent = fields.intent.value;

  const [newImageSrc, setNewImageSrc] = useState<string | undefined>();

  return (
    <div>
      <Form
        className="flex flex-col items-center justify-center gap-10"
        encType="multipart/form-data"
        method="POST"
        onReset={() => setNewImageSrc(undefined)}
        {...getFormProps(form)}
      >
        <img
          alt={data.user?.name ?? data.user?.username}
          className="size-52 rounded-full object-cover"
          src={
            newImageSrc ?? (data.user ? getUserImgSrc(data.user.image?.id) : "")
          }
        />
        <ErrorList errors={fields.photoFile.errors} id={fields.photoFile.id} />
        <div className="flex gap-4">
          {/*
						We're doing some kinda odd things to make it so this works well
						without JavaScript. Basically, we're using CSS to ensure the right
						buttons show up based on the input's "valid" state (whether or not
						an image has been selected). Progressive enhancement FTW!
					*/}
          <input
            {...getInputProps(fields.photoFile, { type: "file" })}
            accept="image/*"
            className="peer sr-only"
            required
            tabIndex={newImageSrc ? -1 : 0}
            onChange={(e) => {
              const file = e.currentTarget.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.addEventListener("load", (event) => {
                  setNewImageSrc(event.target?.result?.toString() ?? undefined);
                });
                reader.readAsDataURL(file);
              }
            }}
          />
          <Button
            className="cursor-pointer peer-valid:hidden peer-focus-within:ring-4 peer-focus-visible:ring-4"
            render={
              <label htmlFor={fields.photoFile.id}>
                <Icon name="pencil-1">Change</Icon>
              </label>
            }
          />
          <StatusButton
            className="peer-invalid:hidden"
            name="intent"
            status={
              pendingIntent === "submit"
                ? "pending"
                : lastSubmissionIntent === "submit"
                  ? (form.status ?? "idle")
                  : "idle"
            }
            type="submit"
            value="submit"
          >
            Save Photo
          </StatusButton>
          <Button
            className="peer-invalid:hidden"
            variant="destructive"
            {...form.reset.getButtonProps()}
          >
            <Icon name="trash">Reset</Icon>
          </Button>
          {data.user.image?.id ? (
            <StatusButton
              className="peer-valid:hidden"
              variant="destructive"
              {...doubleCheckDeleteImage.getButtonProps({
                name: "intent",
                type: "submit",
                value: "delete",
              })}
              status={
                pendingIntent === "delete"
                  ? "pending"
                  : lastSubmissionIntent === "delete"
                    ? (form.status ?? "idle")
                    : "idle"
              }
            >
              <Icon name="trash">
                {doubleCheckDeleteImage.doubleCheck
                  ? "Are you sure?"
                  : "Delete"}
              </Icon>
            </StatusButton>
          ) : null}
        </div>
        <ErrorList errors={form.errors} />
      </Form>
    </div>
  );
}
