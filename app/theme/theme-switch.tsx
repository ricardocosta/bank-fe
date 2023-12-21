import { useForm } from "@conform-to/react";

import { useOptimisticThemeMode } from "#app/theme/useOptimisticThemeMode";

import { ErrorList } from "../components/forms";
import { Icon } from "../components/ui/icon";

import type { Submission } from "@conform-to/react";
import type { FetcherWithComponents } from "@remix-run/react";

import type { Theme } from "#app/theme/types";

export type ThemeSwitchProps = {
  fetcher: FetcherWithComponents<{
    submission: Submission<{
      theme: "system" | Theme;
    }>;
  }>;
  userPreference?: Theme | null;
};

export const ThemeSwitch = ({ fetcher, userPreference }: ThemeSwitchProps) => {
  const optimisticMode = useOptimisticThemeMode();
  const [form] = useForm({
    id: "theme-switch",
    lastSubmission: fetcher.data?.submission,
  });

  const mode = optimisticMode ?? userPreference ?? "system";

  let nextMode: "system" | Theme;
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

  const modeLabel = {
    light: (
      <Icon name="sun">
        <span className="sr-only">Light</span>
      </Icon>
    ),
    dark: (
      <Icon name="moon">
        <span className="sr-only">Dark</span>
      </Icon>
    ),
    system: (
      <Icon name="laptop">
        <span className="sr-only">System</span>
      </Icon>
    ),
  };

  return (
    <fetcher.Form method="POST" {...form.props}>
      <input name="theme" type="hidden" value={nextMode} />
      <div className="flex gap-2">
        <button
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
          type="submit"
        >
          {modeLabel[mode]}
        </button>
      </div>
      <ErrorList errors={form.errors} id={form.errorId} />
    </fetcher.Form>
  );
};
