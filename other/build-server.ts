import path from "node:path";
import { fileURLToPath } from "node:url";

import { build } from "esbuild";
import { copySync, ensureDirSync, readJsonSync } from "fs-extra/esm";
import { globSync } from "glob";

const pkg = readJsonSync(path.join(process.cwd(), "package.json")) as {
  engines: { node: string };
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const here = (...s: string[]) => path.join(__dirname, ...s);
const globsafe = (s: string) => s.replaceAll("\\", "/");

const allFiles = globSync(globsafe(here("../server/**/*.*")), {
  ignore: [
    "server/dev-server.js", // for development only
    "**/tsconfig.json",
    "**/eslint*",
    "**/__tests__/**",
  ],
});

const entries = [];
for (const file of allFiles) {
  if (/\.(ts|js|tsx|jsx)$/.test(file)) {
    entries.push(file);
  } else {
    const dest = file.replace(here("../server"), here("../server-build"));
    ensureDirSync(path.parse(dest).dir);
    copySync(file, dest);
    console.log(`copied: ${file.replace(`${here("../server")}/`, "")}`);
  }
}

console.log();
console.log("building...");

build({
  entryPoints: entries,
  format: "esm",
  logLevel: "info",
  outdir: here("../server-build"),
  platform: "node",
  sourcemap: true,
  target: [`node${pkg.engines.node}`],
}).catch((error: unknown) => {
  console.error(error);
  throw error;
});
