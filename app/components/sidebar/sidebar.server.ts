import { parseWithZod } from "@conform-to/zod";
import { invariantResponse } from "@epic-web/invariant";
import { json } from "@remix-run/node";
import * as cookie from "cookie";

import { SidebarToggleSchema } from "#app/components/sidebar/schema";

import type { SidebarState } from "#app/components/sidebar/types";

const cookieName = "en_sidebar";

export const toggleSidebarAction = async (request: Request) => {
  const formData = await request.formData();
  const submission = parseWithZod(formData, {
    schema: SidebarToggleSchema,
  });

  invariantResponse(
    submission.status === "success",
    "Invalid sidebar state received",
  );

  const { sidebarState } = submission.value;

  return json(
    { result: submission.reply(), type: "sidebar-toggle" as const },
    {
      headers: { "set-cookie": setSidebarState(sidebarState) },
    },
  );
};

export const getSidebarState = (request: Request): SidebarState | null => {
  const cookieHeader = request.headers.get("cookie");

  const parsed = cookieHeader
    ? cookie.parse(cookieHeader)[cookieName]
    : "collapsed";

  if (parsed === "expanded" || parsed === "collapsed") {
    return parsed;
  }

  return null;
};

export const setSidebarState = (sidebarState: SidebarState) => {
  return cookie.serialize(cookieName, sidebarState, { path: "/" });
};
