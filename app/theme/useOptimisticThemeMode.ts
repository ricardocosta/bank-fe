import { parse } from "@conform-to/zod";
import { useFetchers } from "@remix-run/react";

import { ThemeFormSchema } from "#app/theme/schema";

/**
 * If the user's changing their theme mode preference, this will return the
 * value it's being changed to.
 */
export const useOptimisticThemeMode = () => {
  const fetchers = useFetchers();
  const themeFetcher = fetchers.find((f) => f.formAction === "/");

  if (themeFetcher && themeFetcher.formData) {
    const submission = parse(themeFetcher.formData, {
      schema: ThemeFormSchema,
    });

    return submission.value?.theme;
  }
};
