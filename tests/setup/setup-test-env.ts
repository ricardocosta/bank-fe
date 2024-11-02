import "dotenv/config";
import "./db-setup.ts";
import "#app/utils/env.server.ts";

import { installGlobals } from "@remix-run/node";
import { cleanup } from "@testing-library/react";

// we need these to be imported first 👆

import { server } from "#tests/mocks/index.ts";

import type { MockInstance } from "vitest";

import "./custom-matchers.ts";

installGlobals();

afterEach(() => server.resetHandlers());
afterEach(() => cleanup());

export let consoleError: MockInstance<Parameters<(typeof console)["error"]>>;

beforeEach(() => {
  const originalConsoleError = console.error;
  consoleError = vi.spyOn(console, "error");
  consoleError.mockImplementation(
    (...args: Parameters<typeof console.error>) => {
      originalConsoleError(...args);
      throw new Error(
        "Console error was called. Call consoleError.mockImplementation(() => {}) if this is expected.",
      );
    },
  );
});
