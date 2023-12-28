import { useForm } from "@conform-to/react";
import { useFetcher } from "@remix-run/react";

import { useOptimisticThemeMode } from "#app/theme/useOptimisticThemeMode";

import { ErrorList } from "../components/forms";
import { Icon } from "../components/ui/icon";

import type { Submission } from "@conform-to/react";

import type { Theme } from "#app/theme/types";

export type ThemeSwitchProps = {
  userPreference?: Theme | null;
};

type ThemeSwitchFetcher = {
  submission: Submission<{
    theme: "system" | Theme;
  }>;
};

export const ThemeSwitch = ({ userPreference }: ThemeSwitchProps) => {
  const fetcher = useFetcher<ThemeSwitchFetcher>();
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
          name="intent"
          type="submit"
          value="switchTheme"
        >
          {modeLabel[mode]}
        </button>
      </div>
      <ErrorList errors={form.errors} id={form.errorId} />
    </fetcher.Form>
  );
};
