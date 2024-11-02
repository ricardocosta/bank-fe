import fs from "node:fs";

import { faker } from "@faker-js/faker";
import { default as bcrypt } from "bcryptjs";
import { UniqueEnforcer } from "enforce-unique";

import type { PrismaClient } from "@prisma/client";

const uniqueUsernameEnforcer = new UniqueEnforcer();

export function createUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const username = uniqueUsernameEnforcer
    .enforce(() => {
      return (
        faker.string.alphanumeric({ length: 2 }) +
        "_" +
        faker.internet.userName({
          firstName: firstName.toLowerCase(),
          lastName: lastName.toLowerCase(),
        })
      );
    })
    .slice(0, 20)
    .toLowerCase()
    .replaceAll(/[^a-z0-9_]/g, "_");
  return {
    email: `${username}@example.com`,
    name: `${firstName} ${lastName}`,
    username,
  };
}

export function createPassword(password: string = faker.internet.password()) {
  return {
    hash: bcrypt.hashSync(password, 10),
  };
}

let userImages: Array<Awaited<ReturnType<typeof img>>> | undefined;
export async function getUserImages() {
  if (userImages) {
    return userImages;
  }

  userImages = await Promise.all(
    Array.from({ length: 10 }, (_, index) =>
      img({
        altText: `alt text for image ${index}`,
        filepath: `./tests/fixtures/images/user/${index}.jpg`,
      }),
    ),
  );

  return userImages;
}

export async function img({
  altText,
  filepath,
}: {
  altText?: string;
  filepath: string;
}) {
  return {
    altText,
    blob: await fs.promises.readFile(filepath),
    contentType: filepath.endsWith(".png") ? "image/png" : "image/jpeg",
  };
}

export async function cleanupDb(prisma: PrismaClient) {
  const tables = await prisma.$queryRaw<
    Array<{ name: string }>
  >`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE '_prisma_migrations';`;

  await prisma.$transaction([
    // Disable FK constraints to avoid relation conflicts during deletion
    prisma.$executeRawUnsafe(`PRAGMA foreign_keys = OFF`),
    // Delete all rows from each table, preserving table structures
    ...tables.map(({ name }) =>
      prisma.$executeRawUnsafe(`DELETE from "${name}"`),
    ),
    prisma.$executeRawUnsafe(`PRAGMA foreign_keys = ON`),
  ]);
}
