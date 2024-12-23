import * as setCookieParser from "set-cookie-parser";

import { sessionKey } from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server";
import { authSessionStorage } from "#app/utils/session.server.ts";
import { toastKey, toastSessionStorage } from "#app/utils/toast.server.ts";

import { convertSetCookieToCookie } from "#tests/utils.ts";

import type { ToastInput } from "#app/utils/toast.server.ts";

import "@testing-library/jest-dom/vitest";

function toUrl(s?: string | null) {
  s ??= "";
  return s.startsWith("http") ? new URL(s) : new URL(s, "https://example.com");
}

function urlsMatch(u1: URL, u2: URL) {
  const u1SP = new URL(u1).searchParams;
  u1SP.sort();
  const u2SP = new URL(u2).searchParams;
  u2SP.sort();

  return (
    u1.origin === u2.origin &&
    u1.pathname === u2.pathname &&
    u1SP.toString() === u2SP.toString() &&
    u1.hash === u2.hash
  );
}

expect.extend({
  toHaveRedirect(response: Response, redirectTo?: string) {
    const location = response.headers.get("location");
    const redirectToSupplied = redirectTo !== undefined;
    if (redirectToSupplied !== Boolean(location)) {
      return {
        message: () =>
          `Expected response to ${this.isNot ? "not " : ""}redirect${
            redirectToSupplied
              ? ` to ${this.utils.printExpected(redirectTo)}`
              : ""
          } but got ${
            location ? "no redirect" : this.utils.printReceived(location)
          }`,
        pass: Boolean(location),
      };
    }
    const isRedirectStatusCode =
      response.status >= 300 && response.status < 400;
    if (!isRedirectStatusCode) {
      return {
        message: () =>
          `Expected redirect to ${
            this.isNot ? "not " : ""
          }be ${this.utils.printExpected(
            ">= 300 && < 400",
          )} but got ${this.utils.printReceived(response.status)}`,
        pass: false,
      };
    }

    return {
      message: () =>
        `Expected response to ${
          this.isNot ? "not " : ""
        }redirect to ${this.utils.printExpected(
          redirectTo,
        )} but got ${this.utils.printReceived(location)}`,
      pass:
        location === redirectTo ||
        urlsMatch(toUrl(location), toUrl(redirectTo)),
    };
  },
  async toHaveSessionForUser(response: Response, userId: string) {
    const setCookies = getSetCookie(response.headers);
    const sessionSetCookie = setCookies.find(
      (c) => setCookieParser.parseString(c).name === "en_session",
    );

    if (!sessionSetCookie) {
      return {
        message: () =>
          `The en_session set-cookie header was${
            this.isNot ? "" : " not"
          } defined`,
        pass: false,
      };
    }

    const authSession = await authSessionStorage.getSession(
      convertSetCookieToCookie(sessionSetCookie),
    );
    const sessionValue = authSession.get(sessionKey);

    if (!sessionValue) {
      return {
        message: () => `A session was${this.isNot ? "" : " not"} set in cookie`,
        pass: false,
      };
    }

    const session = await prisma.session.findUnique({
      select: { id: true },
      where: { id: sessionValue, userId },
    });

    return {
      message: () =>
        `A session was${
          this.isNot ? " not" : ""
        } created in the database for ${userId}`,
      pass: Boolean(session),
    };
  },
  async toSendToast(response: Response, toast: ToastInput) {
    const setCookies = getSetCookie(response.headers);
    const toastSetCookie = setCookies.find(
      (c) => setCookieParser.parseString(c).name === "en_toast",
    );

    if (!toastSetCookie) {
      return {
        message: () =>
          `en_toast set-cookie header was${this.isNot ? "" : " not"} defined`,
        pass: false,
      };
    }

    const toastSession = await toastSessionStorage.getSession(
      convertSetCookieToCookie(toastSetCookie),
    );
    const toastValue = toastSession.get(toastKey);

    if (!toastValue) {
      return {
        message: () => `toast was${this.isNot ? "" : " not"} set in session`,
        pass: false,
      };
    }

    const expectedToast = (toast: ToastInput) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      expect.objectContaining<ToastInput>({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        description: expect.stringContaining(toast.description),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        id: toast.id ?? expect.any(String),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        title: toast.title,
        type: toast.type,
      });

    const pass = this.equals(toastValue, expectedToast(toast));

    const diff = pass ? undefined : `\n${this.utils.diff(toastValue, toast)}`;

    return {
      message: () =>
        `toast in the response ${
          this.isNot ? "matches" : "does not match"
        } the expected toast${diff}`,
      pass,
    };
  },
});

interface CustomMatchers<R = unknown> {
  toHaveRedirect(redirectTo: string | undefined): R;
  toHaveSessionForUser(userId: string): Promise<R>;
  toSendToast(toast: ToastInput): Promise<R>;
}

declare module "vitest" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-type-definitions
  interface Assertion<T = any> extends CustomMatchers<T> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

function getSetCookie(headers: Headers) {
  // this is a sort of polyfill for headers.getSetCookie
  // https://github.com/microsoft/TypeScript/issues/55270
  // https://github.com/remix-run/remix/issues/7067
  // @ts-expect-error see the two issues above
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return headers.getAll("set-cookie") as string[];
}
