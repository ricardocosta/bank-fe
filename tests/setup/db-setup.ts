import { join } from "node:path";

import { copyFile, remove } from "fs-extra";

import { cleanupDb } from "#tests/db-utils.ts";

import { BASE_DATABASE_PATH } from "./global-setup.ts";

const databaseFile = `./tests/prisma/data.${
  process.env.VITEST_POOL_ID ?? 0
}.db`;
const databasePath = join(process.cwd(), databaseFile);
process.env.DATABASE_URL = `file:${databasePath}`;

beforeAll(async () => {
  await copyFile(BASE_DATABASE_PATH, databasePath);
});

// we *must* use dynamic imports here so the process.env.DATABASE_URL is set
// before prisma is imported and initialized
afterEach(async () => {
  const { prisma } = await import("#app/utils/db.server.ts");
  await cleanupDb(prisma);
});

afterAll(async () => {
  const { prisma } = await import("#app/utils/db.server.ts");
  await prisma.$disconnect();
  await remove(databasePath);
});
