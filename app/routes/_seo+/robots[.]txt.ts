import { generateRobotsTxt } from "@nasa-gcn/remix-seo";

import { getDomainUrl } from "#app/utils/misc.tsx";

import type { DataFunctionArgs } from "@remix-run/node";

export function loader({ request }: DataFunctionArgs) {
  return generateRobotsTxt([
    { type: "sitemap", value: `${getDomainUrl(request)}/sitemap.xml` },
  ]);
}
