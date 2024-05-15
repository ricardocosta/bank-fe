import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { invariant } from "@epic-web/invariant";
import {
  useActionData,
  useFetcher,
  useRouteLoaderData,
} from "@remix-run/react";
import { $routeId } from "remix-routes";

import { Button } from "#app/components/ui/button";
import { Input } from "#app/components/ui/input";
import { ThemeSwitchSchema } from "#app/theme/schema";
import { useOptimisticThemeMode } from "#app/theme/useOptimisticThemeMode";

import { Icon } from "../components/ui/icon";

import type { action as rootAction, loader as rootLoader } from "#app/root.tsx";
import type { Theme } from "#app/theme/types";
import type { SubAction } from "#types/named-actions";

import type { IconName } from "../components/ui/icon";

type ThemeSwitchFetcher = SubAction<typeof rootAction, "theme-switch">;

export const ThemeSwitch = () => {
  const actionData = useActionData<ThemeSwitchFetcher>();
  const fetcher = useFetcher<ThemeSwitchFetcher>();
  const data = useRouteLoaderData<typeof rootLoader>($routeId("root"));
  invariant(data, "No data found for root loader");

  const optimisticMode = useOptimisticThemeMode();

  const mode = optimisticMode ?? data.requestInfo.userPrefs.theme ?? "system";

  let nextMode: Theme;
  switch (mode) {
    case "system":
      nextMode = "light";
      break;
    case "light":
      nextMode = "dark";
      break;
    case "dark":
      nextMode = "system";
      break;
  }

  const [form, fields] = useForm({
    id: "theme-switch",
    constraint: getZodConstraint(ThemeSwitchSchema),
    lastResult: actionData?.result,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ThemeSwitchSchema });
    },
  });

  const modeInfo: Record<Theme, { icon: IconName; label: string }> = {
    light: {
      icon: "sun",
      label: "Use Light theme",
    },
    dark: {
      icon: "moon",
      label: "Use Dark theme",
    },
    system: {
      icon: "laptop",
      label: "Use System theme",
    },
  };

  return (
    <fetcher.Form
      method="POST"
      {...getFormProps(form)}
      className="opacity-0 transition-opacity duration-200 ease-in-out focus-within:opacity-100 group-hover/sidebar:opacity-100 group-focus-visible/sidebar:opacity-100"
    >
      <Input
        {...getInputProps(fields.theme, {
          type: "hidden",
          value: false,
        })}
        value={nextMode}
      />
      <Button
        aria-label={modeInfo[nextMode].label}
        className="size-5 p-0.5 hover:bg-slate-100 focus-visible:ring-offset-0"
        name="intent"
        size="icon"
        type="submit"
        value="switchTheme"
        variant="ghost"
      >
        <Icon
          className="fill-slate-800 ring-0 ring-offset-frame"
          name={modeInfo[mode].icon}
        />
      </Button>
    </fetcher.Form>
  );
};
