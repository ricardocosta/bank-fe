import { useOptimisticThemeMode } from "#app/theme/use-optimistic-theme-mode.ts";
import { useHints } from "#app/utils/client-hints";
import { useRequestInfo } from "#app/utils/request-info";

/**
 * @returns the user's theme preference, or the client hint theme if the user
 * has not set a preference.
 */
export const useTheme = () => {
  const hints = useHints();
  const requestInfo = useRequestInfo();
  const optimisticMode = useOptimisticThemeMode();

  if (optimisticMode) {
    return optimisticMode === "system" ? hints.theme : optimisticMode;
  }

  return requestInfo.userPrefs.theme ?? hints.theme;
};
