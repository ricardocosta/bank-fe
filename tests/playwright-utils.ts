import { test as base } from "@playwright/test";
import { Prisma } from "@prisma/client";
import * as setCookieParser from "set-cookie-parser";

import {
  getPasswordHash,
  getSessionExpirationDate,
  sessionKey,
} from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server.ts";
import { authSessionStorage } from "#app/utils/session.server.ts";

import { createUser } from "./db-utils.ts";

import type { User as UserModel } from "@prisma/client";

export * from "./db-utils.ts";

interface GetOrInsertUserOptions {
  id?: string;
  username?: UserModel["username"];
  password?: string;
  email?: UserModel["email"];
}

interface User {
  id: string;
  email: string;
  username: string;
  name: string | null;
}

async function getOrInsertUser({
  id,
  username,
  password,
  email,
}: GetOrInsertUserOptions = {}): Promise<User> {
  const select = { email: true, id: true, name: true, username: true };
  if (id) {
    return await prisma.user.findUniqueOrThrow({
      select,
      where: { id: id },
    });
  }

  const userData = createUser();
  username ??= userData.username;
  password ??= userData.username;
  email ??= userData.email;
  return await prisma.user.create({
    data: {
      ...userData,
      email,
      password: { create: { hash: await getPasswordHash(password) } },
      roles: { connect: { name: "user" } },
      username,
    },
    select,
  });
}

export const test = base.extend<{
  insertNewUser(this: void, options?: GetOrInsertUserOptions): Promise<User>;
  login(this: void, options?: GetOrInsertUserOptions): Promise<User>;
}>({
  // oxlint-disable-next-line react/rules-of-hooks
  insertNewUser: async (_params, use) => {
    let userId: string | undefined;
    await use(async (options) => {
      const user = await getOrInsertUser(options);
      userId = user.id;
      return user;
    });

    await prisma.user
      .delete({
        where: {
          id: userId ?? Prisma.skip,
        },
      })
      .catch(() => {
        /* Empty on purpose */
      });
  },

  // oxlint-disable-next-line react/rules-of-hooks
  login: async ({ page }, use) => {
    let userId: string | undefined;
    await use(async (options) => {
      const user = await getOrInsertUser(options);
      userId = user.id;

      const session = await prisma.session.create({
        data: {
          expirationDate: getSessionExpirationDate(),
          userId: user.id,
        },
        select: { id: true },
      });

      const authSession = await authSessionStorage.getSession();
      authSession.set(sessionKey, session.id);
      const cookieConfig = setCookieParser.parseString(
        await authSessionStorage.commitSession(authSession),
      );
      await page.context().addCookies([
        {
          ...cookieConfig,
          domain: "localhost",
          expires: cookieConfig.expires
            ? Number.parseInt(
                (cookieConfig.expires?.getTime() / 1000).toFixed(0),
                10,
              )
            : undefined,
          sameSite: cookieConfig.sameSite as
            | "Strict"
            | "Lax"
            | "None"
            | undefined,
        },
      ]);
      return user;
    });
    await prisma.user.deleteMany({ where: { id: userId ?? Prisma.skip } });
  },
});
export const { expect } = test;

/**
 * This allows you to wait for something (like an email to be available).
 *
 * It calls the callback every 50ms until it returns a value (and does not throw
 * an error). After the timeout, it will throw the last error that was thrown or
 * throw the error message provided as a fallback
 */
export async function waitFor<ReturnValue>(
  cb: () => ReturnValue | Promise<ReturnValue>,
  {
    errorMessage,
    timeout = 5000,
  }: { errorMessage?: string; timeout?: number } = {},
) {
  const endTime = Date.now() + timeout;
  let lastError: unknown = new Error(errorMessage);

  while (Date.now() < endTime) {
    try {
      // oxlint-disable-next-line eslint/no-await-in-loop
      const response = await cb();
      if (response) {
        return response;
      }
    } catch (error: unknown) {
      lastError = error;
    }

    // oxlint-disable-next-line eslint/no-await-in-loop
    await new Promise((r) => setTimeout(r, 100));
  }

  throw lastError;
}
