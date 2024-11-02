import crypto from "node:crypto";
import { constants } from "node:http2";

import { createRequestHandler } from "@remix-run/express";
import { installGlobals } from "@remix-run/node";
import { ip as ipAddress } from "address";
import chalk from "chalk";
import closeWithGrace from "close-with-grace";
import compression from "compression";
import express, { static as expressStatic } from "express";
import { rateLimit } from "express-rate-limit";
import getPort, { portNumbers } from "get-port";
import helmet from "helmet";
import morgan, { token } from "morgan";

import type { ServerBuild } from "@remix-run/node";

installGlobals();

const MODE = process.env.NODE_ENV;
const IS_PROD = MODE === "production";
const IS_DEV = MODE === "development";

const viteDevServer = IS_PROD
  ? undefined
  : await import("vite").then((vite) =>
      vite.createServer({
        server: { middlewareMode: true },
      }),
    );

const app = express();

// no ending slashes for SEO reasons
// https://github.com/epicweb-dev/epic-stack/discussions/108
app.get("*", (req, res, next) => {
  if (req.path.endsWith("/") && req.path.length > 1) {
    const query = req.url.slice(req.path.length);
    const safepath = req.path.slice(0, -1).replaceAll(/\/+/g, "/");

    res.redirect(constants.HTTP_STATUS_FOUND, safepath + query);
  } else {
    next();
  }
});

app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

if (viteDevServer) {
  app.use(viteDevServer.middlewares);
} else {
  // Remix fingerprints its assets so we can cache forever.
  app.use(
    "/assets",
    expressStatic("build/client/assets", { immutable: true, maxAge: "1y" }),
  );

  // Everything else (like favicon.ico) is cached for an hour. You may want to be
  // more aggressive with this caching.
  app.use(expressStatic("build/client", { maxAge: "1h" }));
}

app.get(["/img/*", "/favicons/*"], (_req, res) => {
  // if we made it past the expressStatic for these, then we're missing something.
  // So we'll just send a 404 and won't bother calling other middleware.
  return res.status(constants.HTTP_STATUS_NOT_FOUND).send("Not found");
});

token("url", (req) => decodeURIComponent(req.url ?? ""));
app.use(
  morgan("tiny", {
    skip: (req, res) =>
      res.statusCode === constants.HTTP_STATUS_OK &&
      (req.url?.startsWith("/resources/note-images") ||
        req.url?.startsWith("/resources/user-images")),
  }),
);

app.use((_, res, next) => {
  res.locals.cspNonce = crypto.randomBytes(16).toString("hex");
  next();
});

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "connect-src": [
          MODE === "development" ? "ws:" : undefined,
          "'self'",
        ].filter(Boolean),
        "font-src": ["'self'"],
        "frame-src": ["'self'"],
        "img-src": ["'self'", "data:"],
        "script-src": [
          "'strict-dynamic'",
          "'self'",
          // @ts-expect-error ServerResponse doesn't have .locals
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          (_, res) => `'nonce-${res.locals.cspNonce}'`,
        ],
        "script-src-attr": [
          // @ts-expect-error ServerResponse doesn't have .locals
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          (_, res) => `'nonce-${res.locals.cspNonce}'`,
        ],
        "upgrade-insecure-requests": [],
      },
      // NOTE: Remove reportOnly when you're ready to enforce this CSP
      reportOnly: true,
    },
    crossOriginEmbedderPolicy: false,
    referrerPolicy: { policy: "same-origin" },
  }),
);

// When running tests or running in development, we want to effectively disable
// rate limiting because playwright tests are very fast and we don't want to
// have to wait for the rate limit to reset between tests.
const maxMultiple =
  !IS_PROD || process.env.PLAYWRIGHT_TEST_BASE_URL ? 10_000 : 1;

const rateLimitDefault = {
  legacyHeaders: false,
  max: 1000 * maxMultiple,
  standardHeaders: true,
  windowMs: 60 * 1000,
};

const strongestRateLimit = rateLimit({
  ...rateLimitDefault,
  max: 10 * maxMultiple,
  windowMs: 60 * 1000,
});

const strongRateLimit = rateLimit({
  ...rateLimitDefault,
  max: 100 * maxMultiple,
  windowMs: 60 * 1000,
});

const generalRateLimit = rateLimit(rateLimitDefault);

app.use((req, res, next) => {
  const strongPaths = [
    "/login",
    "/signup",
    "/verify",
    "/admin",
    "/onboarding",
    "/reset-password",
    "/settings/profile",
    "/resources/login",
    "/resources/verify",
  ];

  if (req.method !== "GET" && req.method !== "HEAD") {
    if (strongPaths.some((p) => req.path.includes(p))) {
      return strongestRateLimit(req, res, next);
    }
    return strongRateLimit(req, res, next);
  }

  // the verify route is a special case because it's a GET route that
  // can have a token in the query string
  if (req.path.includes("/verify")) {
    return strongestRateLimit(req, res, next);
  }

  return generalRateLimit(req, res, next);
});

async function getBuild() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const build = viteDevServer
    ? viteDevServer.ssrLoadModule("virtual:remix/server-build")
    : await import("#build/server/index.js");

  // not sure how to make this happy 🤷‍♂️
  return build as unknown as ServerBuild;
}

app.all(
  "*",
  // ESLint doesn't want Promises being used in arguments of functions
  // that return void, which is the case for RequestHandler
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  createRequestHandler({
    build: getBuild,
    getLoadContext: (_req, res) => ({
      cspNonce: res.locals.cspNonce,
    }),
    mode: MODE,
  }),
);

const desiredPort = Number(process.env.PORT ?? 3000);
const portToUse = await getPort({
  port: portNumbers(desiredPort, desiredPort + 100),
});

const portAvailable = desiredPort === portToUse;
if (!portAvailable && !IS_DEV) {
  console.log(`⚠️ Port ${desiredPort} is not available.`);
  // oxlint-disable-next-line n/no-process-exit
  process.exit(1);
}

const server = app.listen(portToUse, () => {
  if (!portAvailable) {
    console.warn(
      chalk.yellow(
        `⚠️  Port ${desiredPort} is not available, using ${portToUse} instead.`,
      ),
    );
  }

  console.log(`🚀  We have liftoff!`);
  const localUrl = `http://localhost:${portToUse}`;
  let lanUrl: string | null = null;
  const localIp = ipAddress() ?? "Unknown";

  // Check if the address is a private ip
  // https://en.wikipedia.org/wiki/Private_network#Private_IPv4_address_spaces
  // https://github.com/facebook/create-react-app/blob/d960b9e38c062584ff6cfb1a70e1512509a966e7/packages/react-dev-utils/WebpackDevServerUtils.js#LL48C9-L54C10
  if (/^10[.]|^172[.](1[6-9]|2[0-9]|3[0-1])[.]|^192[.]168[.]/.test(localIp)) {
    lanUrl = `http://${localIp}:${portToUse}`;
  }

  console.log(
    `
${chalk.bold("Local:")}            ${chalk.cyan(localUrl)}
${lanUrl ? `${chalk.bold("On Your Network:")}  ${chalk.cyan(lanUrl)}` : ""}
${chalk.bold("Press Ctrl+C to stop")}
		`.trim(),
  );
});

closeWithGrace(async () => {
  await new Promise((resolve, reject) => {
    server.close((e) => (e ? reject(e) : resolve("ok")));
  });
});
