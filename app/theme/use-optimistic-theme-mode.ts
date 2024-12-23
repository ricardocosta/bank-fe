import { parseWithZod } from "@conform-to/zod";
import { useFetchers } from "@remix-run/react";

import { ThemeSwitchSchema } from "#app/theme/schema";

/**
 * If the user's changing their theme mode preference, this will return the
 * value it's being changed to.
 */
export const useOptimisticThemeMode = () => {
  const fetchers = useFetchers();
  const themeFetcher = fetchers.find((f) => f.formAction === "/");

  if (themeFetcher && themeFetcher.formData) {
    const submission = parseWithZod(themeFetcher.formData, {
      schema: ThemeSwitchSchema,
    });

    if (submission.status === "success") {
      return submission.value.theme;
    }
  }
};
