import { remember } from "@epic-web/remember";
import { PrismaClient } from "@prisma/client";
import chalk from "chalk";

// 🚨 WARNING 🚨
// Changing this file requires a server restart for the changes to take effect.

// Feel free to change this log threshold to something that makes sense for you
const LOG_THRESHOLD = 20;
const LOG_COLORS_MULTIPLIERS = {
  // oxlint-disable-next-line sort-keys
  green: 1.1,
  blue: 1.2,
  yellow: 1.3,
  redBright: 1.4,
  red: 1.5,
};

export type LogColors = keyof typeof LOG_COLORS_MULTIPLIERS;

export const prisma = remember("prisma", () => {
  const client = new PrismaClient({
    log: [
      { emit: "event", level: "query" },
      { emit: "stdout", level: "error" },
      { emit: "stdout", level: "warn" },
    ],
  });

  client.$on("query", (e) => {
    const color = getLogColor(e.duration);

    if (!color) {
      return;
    }

    const dur = chalk[color](`${e.duration}ms`);
    console.info(`prisma:query (${dur}): ${e.query} | ${e.params}`);
  });

  // We are not awaiting for the connection to be established
  // nor the query to be executed.
  // We need a way to remember async functions for that to be put in place.
  // https://github.com/epicweb-dev/remember/pull/3
  void client.$connect();
  void client.$executeRaw`SELECT 1;`;
  return client;
});

export const getLogColor = (duration: number) => {
  if (duration < LOG_THRESHOLD) {
    return undefined;
  }

  const color = Object.keys(LOG_COLORS_MULTIPLIERS).find((color) => {
    const multiplier = LOG_COLORS_MULTIPLIERS[color as LogColors];
    return duration < LOG_THRESHOLD * multiplier;
  });

  return (color ?? "red") as LogColors;
};
