import { invariantResponse } from "@epic-web/invariant";
import { json } from "@remix-run/node";

import { lruCache } from "#app/utils/cache.server.ts";
import { requireUserWithRole } from "#app/utils/permissions.server.ts";

import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireUserWithRole(request, "admin");

  const { cacheKey } = params;
  invariantResponse(cacheKey, "cacheKey is required");

  return json({
    cacheKey,
    value: lruCache.get(cacheKey),
  });
}
