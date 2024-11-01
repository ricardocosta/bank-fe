import { parseWithZod } from "@conform-to/zod";
import { invariantResponse } from "@epic-web/invariant";
import { json } from "@remix-run/node";
import * as cookie from "cookie";

import { ThemeSwitchSchema } from "#app/theme/schema";

import type { Theme } from "#app/theme/types";

const cookieName = "en_theme";

export const switchThemeAction = async (request: Request) => {
  const formData = await request.formData();
  const submission = parseWithZod(formData, {
    schema: ThemeSwitchSchema,
  });

  invariantResponse(submission.status === "success", "Invalid theme received");

  const { theme } = submission.value;

  return json(
    { result: submission.reply(), type: "theme-switch" as const },
    { headers: { "set-cookie": setTheme(theme) } },
  );
};

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
    return cookie.serialize(cookieName, "", { maxAge: -1, path: "/" });
  }

  return cookie.serialize(cookieName, theme, { path: "/" });
};
