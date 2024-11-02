import { PassThrough } from "node:stream";

import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";

import { getEnv, init } from "./utils/env.server.ts";
import { NonceProvider } from "./utils/nonce-provider.ts";
import { makeTimings } from "./utils/timing.server.ts";

import type {
  HandleDocumentRequestFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";

const ABORT_DELAY = 5000;

init();
global.ENV = getEnv();

type DocRequestArgs = Parameters<HandleDocumentRequestFunction>;

export default async function handleRequest(...args: DocRequestArgs) {
  const [
    request,
    responseStatusCode,
    responseHeaders,
    remixContext,
    loadContext,
  ] = args;

  const callbackName = isbot(request.headers.get("user-agent"))
    ? "onAllReady"
    : "onShellReady";

  const nonce = loadContext.cspNonce;
  return new Promise((resolve, reject) => {
    let didError = false;
    // NOTE: this timing will only include things that are rendered in the shell
    // and will not include suspended components and deferred loaders
    const timings = makeTimings("render", "renderToPipeableStream");

    const { pipe, abort } = renderToPipeableStream(
      <NonceProvider value={nonce}>
        <RemixServer context={remixContext} url={request.url} />
      </NonceProvider>,
      {
        [callbackName]: () => {
          const body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html");
          responseHeaders.append("Server-Timing", JSON.stringify(timings));
          resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            }),
          );
          pipe(body);
        },
        nonce,
        onError: (error: unknown) => {
          didError = true;

          console.error(error);
        },
        onShellError: (err: unknown) => {
          const error = err instanceof Error ? err : new Error(String(err));
          reject(error);
        },
      },
    );

    setTimeout(abort, ABORT_DELAY);
  });
}

export function handleError(
  error: unknown,
  { request }: LoaderFunctionArgs,
): void {
  console.error(error, request);
}
