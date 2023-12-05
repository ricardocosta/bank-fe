import path from "node:path";
import { fileURLToPath } from "node:url";

import { ensureDir, readJSON, writeJSON } from "fs-extra/esm";
import { z } from "zod";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixturesDirPath = path.join(__dirname, "..", "fixtures");

export async function readFixture<T>(subdir: string, name: string) {
  return readJSON(
    path.join(fixturesDirPath, subdir, `${name}.json`),
  ) as Promise<T>;
}

export async function createFixture(
  subdir: string,
  name: string,
  data: unknown,
) {
  const dir = path.join(fixturesDirPath, subdir);
  await ensureDir(dir);
  return writeJSON(path.join(dir, `./${name}.json`), data);
}

export const EmailSchema = z.object({
  to: z.string(),
  from: z.string(),
  subject: z.string(),
  text: z.string(),
  html: z.string(),
});
type Email = z.infer<typeof EmailSchema>;

export async function writeEmail(rawEmail: unknown) {
  const email = EmailSchema.parse(rawEmail);
  await createFixture("email", email.to, email);
  return email;
}

export async function requireEmail(recipient: string) {
  const email = await readEmail(recipient);
  if (!email) {
    throw new Error(`Email to ${recipient} not found`);
  }
  return email;
}

export async function readEmail(recipient: string) {
  try {
    const email = await readFixture<Email>("email", recipient);
    return EmailSchema.parse(email);
  } catch (error) {
    console.error(`Error reading email`, error);
    return null;
  }
}

export function requireHeader(headers: Headers, header: string) {
  if (!headers.has(header)) {
    const headersString = JSON.stringify(
      Object.fromEntries(headers.entries()),
      null,
      2,
    );
    throw new Error(
      `Header "${header}" required, but not found in ${headersString}`,
    );
  }
  return headers.get(header);
}
