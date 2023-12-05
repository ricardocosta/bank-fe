import { faker } from "@faker-js/faker";

import { consoleError } from "#tests/setup/setup-test-env.ts";

import { getErrorMessage } from "./misc.tsx";

describe("error-message", () => {
  it("error object returns message", () => {
    const message = faker.lorem.words(2);
    expect(getErrorMessage(new Error(message))).toBe(message);
  });

  it("string returns itself", () => {
    const message = faker.lorem.words(2);
    expect(getErrorMessage(message)).toBe(message);
  });

  it("undefined falls back to Unknown", () => {
    consoleError.mockImplementation(() => {});
    expect(getErrorMessage(undefined)).toBe("Unknown Error");
    expect(consoleError).toHaveBeenCalledWith(
      "Unable to get error message for error",
      undefined,
    );
    expect(consoleError).toHaveBeenCalledTimes(1);
  });
});
