import fs from "node:fs";

import { faker } from "@faker-js/faker";

import { prisma } from "#app/utils/db/db.server";

import { expect, test } from "#tests/playwright-utils.ts";

import type { Note, NoteImage } from "@prisma/client";

test("Users can create note with an image", async ({ page, login }) => {
  const user = await login();
  await page.goto(`/users/${user.username}/notes`);

  const newNote = createNote();
  const altText = "cute koala";
  await page.getByRole("link", { name: "new note" }).click();

  // fill in form and submit
  await page.getByRole("textbox", { name: "title" }).fill(newNote.title);
  await page.getByRole("textbox", { name: "content" }).fill(newNote.content);
  await page
    .getByLabel("image")
    .nth(0)
    .setInputFiles("tests/fixtures/images/kody-notes/cute-koala.png");
  await page.getByRole("textbox", { name: "alt text" }).fill(altText);

  await page.getByRole("button", { name: "submit" }).click();
  await expect(page).toHaveURL(new RegExp(`/users/${user.username}/notes/.*`));
  await expect(
    page.getByRole("heading", { name: newNote.title }),
  ).toBeVisible();
  await expect(page.getByAltText(altText)).toBeVisible();
});

test("Users can create note with multiple images", async ({ page, login }) => {
  const user = await login();
  await page.goto(`/users/${user.username}/notes`);

  const newNote = createNote();
  const altText1 = "cute koala";
  const altText2 = "koala coder";
  await page.getByRole("link", { name: "new note" }).click();

  // fill in form and submit
  await page.getByRole("textbox", { name: "title" }).fill(newNote.title);
  await page.getByRole("textbox", { name: "content" }).fill(newNote.content);
  await page
    .getByLabel("image")
    .nth(0)
    .setInputFiles("tests/fixtures/images/kody-notes/cute-koala.png");
  await page.getByLabel("alt text").nth(0).fill(altText1);
  await page.getByRole("button", { name: "add image" }).click();

  await page
    .getByLabel("image")
    .nth(1)
    .setInputFiles("tests/fixtures/images/kody-notes/koala-coder.png");
  await page.getByLabel("alt text").nth(1).fill(altText2);

  await page.getByRole("button", { name: "submit" }).click();
  await expect(page).toHaveURL(new RegExp(`/users/${user.username}/notes/.*`));
  await expect(
    page.getByRole("heading", { name: newNote.title }),
  ).toBeVisible();
  await expect(page.getByAltText(altText1)).toBeVisible();
  await expect(page.getByAltText(altText2)).toBeVisible();
});

test("Users can edit note image", async ({ page, login }) => {
  const user = await login();

  const note = await prisma.note.create({
    data: {
      ...createNoteWithImage(),
      ownerId: user.id,
    },
    select: { id: true },
  });
  await page.goto(`/users/${user.username}/notes/${note.id}`);

  // edit the image
  await page.getByRole("link", { exact: true, name: "Edit" }).click();
  const updatedImage = {
    altText: "koala coder",
    location: "tests/fixtures/images/kody-notes/koala-coder.png",
  };
  await page.getByLabel("image").nth(0).setInputFiles(updatedImage.location);
  await page.getByLabel("alt text").nth(0).fill(updatedImage.altText);
  await page.getByRole("button", { name: "submit" }).click();

  await expect(page).toHaveURL(new RegExp(`/users/${user.username}/notes/.*`));
  await expect(page.getByAltText(updatedImage.altText)).toBeVisible();
});

test("Users can delete note image", async ({ page, login }) => {
  const user = await login();

  const note = await prisma.note.create({
    data: {
      ...createNoteWithImage(),
      ownerId: user.id,
    },
    select: { id: true, title: true },
  });
  await page.goto(`/users/${user.username}/notes/${note.id}`);

  await expect(page.getByRole("heading", { name: note.title })).toBeVisible();
  // find image tags
  const images = page
    .getByRole("main")
    .getByRole("list")
    .getByRole("listitem")
    .getByRole("img");
  const countBefore = await images.count();
  await page.getByRole("link", { exact: true, name: "Edit" }).click();
  await page.getByRole("button", { name: "remove image" }).click();
  await page.getByRole("button", { name: "submit" }).click();
  await expect(page).toHaveURL(new RegExp(`/users/${user.username}/notes/.*`));
  const countAfter = await images.count();
  expect(countAfter).toEqual(countBefore - 1);
});

function createNote() {
  return {
    content: faker.lorem.paragraphs(3),
    title: faker.lorem.words(3),
  } satisfies Omit<Note, "id" | "createdAt" | "updatedAt" | "type" | "ownerId">;
}
function createNoteWithImage() {
  return {
    ...createNote(),
    images: {
      create: {
        altText: "cute koala",
        blob: fs.readFileSync(
          "tests/fixtures/images/kody-notes/cute-koala.png",
        ),
        contentType: "image/png",
      },
    },
  } satisfies Omit<
    Note,
    "id" | "createdAt" | "updatedAt" | "type" | "ownerId"
  > & {
    images: { create: Pick<NoteImage, "altText" | "blob" | "contentType"> };
  };
}
