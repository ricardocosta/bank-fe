import { parseWithZod } from "@conform-to/zod";
import { useFetchers } from "@remix-run/react";

import { SidebarToggleSchema } from "#app/components/sidebar/schema";

/**
 * If the user's changing their sidebar mode preference, this will return the
 * value it's being changed to.
 */
export const useOptimisticSidebarState = () => {
  const fetchers = useFetchers();
  const fetcher = fetchers.find((f) => f.formAction === "/");

  if (fetcher && fetcher.formData) {
    const submission = parseWithZod(fetcher.formData, {
      schema: SidebarToggleSchema,
    });

    if (submission.status === "success") {
      return submission.value.sidebarState;
    }
  }
};
