import { invariantResponse } from "@epic-web/invariant";
import { json } from "@remix-run/node";

import { cache } from "#app/utils/cache.server.ts";
import { requireUserWithRole } from "#app/utils/permissions.ts";

import type { DataFunctionArgs } from "@remix-run/node";

export async function loader({ request, params }: DataFunctionArgs) {
  await requireUserWithRole(request, "admin");

  const { cacheKey } = params;
  invariantResponse(cacheKey, "cacheKey is required");
  return json({
    cacheKey,
    value: cache.get(cacheKey),
  });
}
