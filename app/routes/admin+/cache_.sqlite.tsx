import { json, redirect } from "@remix-run/node";
import { z } from "zod";

import { cache } from "#app/utils/cache.server.ts";

import type { DataFunctionArgs } from "@remix-run/node";

export async function action({ request }: DataFunctionArgs) {
  const token = process.env.INTERNAL_COMMAND_TOKEN;
  const isAuthorized =
    request.headers.get("Authorization") === `Bearer ${token}`;

  if (!isAuthorized) {
    // nah, you can't be here...
    return redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }

  const { key, cacheValue } = z
    .object({ key: z.string(), cacheValue: z.unknown().optional() })
    .parse(await request.json());

  if (cacheValue === undefined) {
    await cache.delete(key);
  } else {
    // @ts-expect-error - we don't reliably know the type of cacheValue
    await cache.set(key, cacheValue);
  }

  return json({ success: true });
}
