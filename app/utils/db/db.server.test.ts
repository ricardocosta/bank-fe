import { getLogColor } from "./db.server";

import type { LogColors } from "./db.server";

describe("getLogColor", () => {
  it.each<{ duration: number; expected: LogColors | undefined }>([
    { duration: 10, expected: undefined },
    { duration: 19, expected: undefined },
    { duration: 20, expected: "green" },
    { duration: 21, expected: "green" },
    { duration: 22, expected: "blue" },
    { duration: 23, expected: "blue" },
    { duration: 24, expected: "yellow" },
    { duration: 25, expected: "yellow" },
    { duration: 26, expected: "redBright" },
    { duration: 27, expected: "redBright" },
    { duration: 28, expected: "red" },
    { duration: 29, expected: "red" },
    { duration: 30, expected: "red" },
    { duration: 31, expected: "red" },
    { duration: 35, expected: "red" },
  ])(
    "returns $expected when the duration is $duration",
    ({ duration, expected }) => {
      expect(getLogColor(duration)).toBe(expected);
    },
  );
});
