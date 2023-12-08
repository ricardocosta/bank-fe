import { generateRobotsTxt } from "@nasa-gcn/remix-seo";

export function loader() {
  return generateRobotsTxt(
    [
      { type: "userAgent", value: `*` },
      { type: "disallow", value: `/` },
    ],
    {
      appendOnDefaultPolicies: false,
    },
  );
}
