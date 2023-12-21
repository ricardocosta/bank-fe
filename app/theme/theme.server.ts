import * as cookie from "cookie";

import type { Theme } from "#app/theme/types";

const cookieName = "en_theme";

export const getTheme = (request: Request): Theme | null => {
  const cookieHeader = request.headers.get("cookie");

  const parsed = cookieHeader
    ? cookie.parse(cookieHeader)[cookieName]
    : "light";

  if (parsed === "light" || parsed === "dark") {
    return parsed;
  }

  return null;
};

export const setTheme = (theme: Theme | "system") => {
  if (theme === "system") {
    return cookie.serialize(cookieName, "", { path: "/", maxAge: -1 });
  } else {
    return cookie.serialize(cookieName, theme, { path: "/" });
  }
};
