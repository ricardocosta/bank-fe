import {
  FormProvider,
  getFieldsetProps,
  getFormProps,
  getInputProps,
  getTextareaProps,
  useForm,
} from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { Form, useActionData } from "@remix-run/react";
import { useState } from "react";
import { z } from "zod";

import { GeneralErrorBoundary } from "#app/components/error-boundary.tsx";
import { floatingToolbarClassName } from "#app/components/floating-toolbar.tsx";
import { ErrorList, Field, TextareaField } from "#app/components/forms.tsx";
import { Button } from "#app/components/ui/button.tsx";
import { Icon } from "#app/components/ui/icon.tsx";
import { Label } from "#app/components/ui/label.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import { Textarea } from "#app/components/ui/textarea.tsx";
import { cn, getNoteImgSrc, useIsPending } from "#app/utils/misc.tsx";

import type { FieldMetadata } from "@conform-to/react";
import type { Note, NoteImage } from "@prisma/client";
import type { SerializeFrom } from "@remix-run/node";

import type { action } from "./__note-editor.server";

const titleMinLength = 1;
const titleMaxLength = 100;
const contentMinLength = 1;
const contentMaxLength = 10_000;

export const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB

const ImageFieldsetSchema = z.object({
  altText: z.string().optional(),
  file: z
    .instanceof(File)
    .optional()
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "File size must be less than 3MB"),
  id: z.string().optional(),
});

export type ImageFieldset = z.infer<typeof ImageFieldsetSchema>;

export const NoteEditorSchema = z.object({
  content: z.string().min(contentMinLength).max(contentMaxLength),
  id: z.string().optional(),
  images: z.array(ImageFieldsetSchema).max(5).optional(),
  title: z.string().min(titleMinLength).max(titleMaxLength),
});

export function NoteEditor({
  note,
}: {
  note?: SerializeFrom<
    Pick<Note, "id" | "title" | "content"> & {
      images: Array<Pick<NoteImage, "id" | "altText">>;
    }
  >;
}) {
  const actionData = useActionData<typeof action>();
  const isPending = useIsPending();

  const [form, fields] = useForm({
    constraint: getZodConstraint(NoteEditorSchema),
    defaultValue: {
      ...note,
      images: note?.images ?? [{}],
    },
    id: "note-editor",
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: NoteEditorSchema });
    },
    shouldRevalidate: "onBlur",
  });
  const imageList = fields.images.getFieldList();

  return (
    <div className="absolute inset-0">
      <FormProvider context={form.context}>
        <Form
          className="flex h-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden px-10 pb-28 pt-12"
          method="POST"
          {...getFormProps(form)}
          encType="multipart/form-data"
        >
          {/*
					This hidden submit button is here to ensure that when the user hits
					"enter" on an input field, the primary form function is submitted
					rather than the first button in the form (which is delete/add image).
				*/}
          <button className="hidden" type="submit" />
          {note ? <input name="id" type="hidden" value={note.id} /> : null}
          <div className="flex flex-col gap-1">
            <Field
              errors={fields.title.errors}
              inputProps={{
                autoFocus: true,
                ...getInputProps(fields.title, { type: "text" }),
              }}
              labelProps={{ children: "Title" }}
            />
            <TextareaField
              errors={fields.content.errors}
              labelProps={{ children: "Content" }}
              textareaProps={{
                ...getTextareaProps(fields.content),
              }}
            />
            <div>
              <Label>Images</Label>
              <ul className="flex flex-col gap-4">
                {imageList.map((image, index) => {
                  return (
                    <li
                      key={image.key}
                      className="relative border-b-2 border-muted-foreground"
                    >
                      <button
                        className="absolute right-0 top-0 text-foreground-destructive"
                        type="button"
                        {...form.remove.getButtonProps({
                          index,
                          name: fields.images.name,
                        })}
                      >
                        <span aria-hidden>
                          <Icon name="cross-1" />
                        </span>{" "}
                        <span className="sr-only">
                          Remove image {index + 1}
                        </span>
                      </button>
                      <ImageChooser meta={image} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <Button
              className="mt-3"
              {...form.insert.getButtonProps({ name: fields.images.name })}
            >
              <span aria-hidden>
                <Icon name="plus">Image</Icon>
              </span>{" "}
              <span className="sr-only">Add image</span>
            </Button>
          </div>
          <ErrorList errors={form.errors} id={form.errorId} />
        </Form>
        <div className={floatingToolbarClassName}>
          <Button variant="destructive" {...form.reset.getButtonProps()}>
            Reset
          </Button>
          <StatusButton
            disabled={isPending}
            form={form.id}
            status={isPending ? "pending" : "idle"}
            type="submit"
          >
            Submit
          </StatusButton>
        </div>
      </FormProvider>
    </div>
  );
}

function ImageChooser({ meta }: { meta: FieldMetadata<ImageFieldset> }) {
  const fields = meta.getFieldset();
  const existingImage = Boolean(fields.id.initialValue);
  const [previewImage, setPreviewImage] = useState<string | null>(
    fields.id.initialValue ? getNoteImgSrc(fields.id.initialValue) : null,
  );
  const [altText, setAltText] = useState(fields.altText.initialValue ?? "");

  return (
    <fieldset {...getFieldsetProps(meta)}>
      <div className="flex gap-3">
        <div className="w-32">
          <div className="relative size-32">
            <label
              className={cn("group absolute size-32 rounded-lg", {
                "bg-accent opacity-40 focus-within:opacity-100 hover:opacity-100":
                  !previewImage,
                "cursor-pointer focus-within:ring-2": !existingImage,
              })}
              htmlFor={fields.file.id}
            >
              {previewImage ? (
                <div className="relative">
                  <img
                    alt={altText ?? ""}
                    className="size-32 rounded-lg object-cover"
                    src={previewImage}
                  />
                  {existingImage ? null : (
                    <div className="pointer-events-none absolute -right-0.5 -top-0.5 rotate-12 rounded-sm bg-secondary px-2 py-1 text-xs text-secondary-foreground shadow-md">
                      new
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex size-32 items-center justify-center rounded-lg border border-muted-foreground text-4xl text-muted-foreground">
                  <Icon name="plus" />
                </div>
              )}
              {existingImage ? (
                <input {...getInputProps(fields.id, { type: "hidden" })} />
              ) : null}
              <input
                accept="image/*"
                aria-label="Image"
                className="absolute left-0 top-0 z-0 size-32 cursor-pointer opacity-0"
                onChange={(event) => {
                  const file = event.target.files?.[0];

                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setPreviewImage(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  } else {
                    setPreviewImage(null);
                  }
                }}
                {...getInputProps(fields.file, { type: "file" })}
              />
            </label>
          </div>
          <div className="min-h-[32px] px-4 pb-3 pt-1">
            <ErrorList errors={fields.file.errors} id={fields.file.errorId} />
          </div>
        </div>
        <div className="flex-1">
          <Label htmlFor={fields.altText.id}>Alt Text</Label>
          <Textarea
            onChange={(e) => setAltText(e.currentTarget.value)}
            {...getTextareaProps(fields.altText)}
          />
          <div className="min-h-[32px] px-4 pb-3 pt-1">
            <ErrorList
              errors={fields.altText.errors}
              id={fields.altText.errorId}
            />
          </div>
        </div>
      </div>
      <div className="min-h-[32px] px-4 pb-3 pt-1">
        <ErrorList errors={meta.errors} id={meta.errorId} />
      </div>
    </fieldset>
  );
}

export function ErrorBoundary() {
  return (
    <GeneralErrorBoundary
      statusHandlers={{
        404: ({ params }) => (
          <p>{`No note with the id "${params.noteId}" exists`}</p>
        ),
      }}
    />
  );
}
