import { generateSitemap } from "@nasa-gcn/remix-seo";
// @ts-expect-error - this does work, though it's not exactly a public API
// eslint-disable-next-line n/no-missing-import
import { routes } from "@remix-run/dev/server-build";

import { getDomainUrl } from "#app/utils/misc.tsx";

import type { DataFunctionArgs } from "@remix-run/node";

export function loader({ request }: DataFunctionArgs) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return generateSitemap(request, routes, {
    siteUrl: getDomainUrl(request),
    headers: {
      "Cache-Control": `public, max-age=${60 * 5}`,
    },
  });
}
