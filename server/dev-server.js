import { execa } from "execa";

if (process.env.NODE_ENV === "production") {
  await import("./index.ts");
} else {
  const command =
    'tsx watch --clear-screen=false --ignore ".cache/**" --ignore "app/**" --ignore "vite.config.ts.timestamp-*" --ignore "build/**" --ignore "node_modules/**" --inspect ./index.js';

  execa(command, {
    env: {
      FORCE_COLOR: true,
      MOCKS: true,
      ...process.env,
    },
    shell: true,
    stdio: ["ignore", "inherit", "inherit"],
    // https://github.com/sindresorhus/execa/issues/433
    windowsHide: false,
  });
}
