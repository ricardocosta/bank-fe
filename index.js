import "dotenv/config";
import "source-map-support/register.js";

import chalk from "chalk";
import closeWithGrace from "close-with-grace";

closeWithGrace(({ err }) => {
  if (err) {
    console.error(chalk.red(err));
    console.error(chalk.red(err.stack));
    throw err;
  }
});

if (process.env.MOCKS === "true") {
  await import("./tests/mocks/index.ts");
}

if (process.env.NODE_ENV === "production") {
  await import("./server-build/index.js");
} else {
  await import("./server/index.ts");
}
