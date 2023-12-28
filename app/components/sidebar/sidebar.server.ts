import * as cookie from "cookie";

import type { SidebarState } from "#app/components/sidebar/types";

const cookieName = "en_sidebar";

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
