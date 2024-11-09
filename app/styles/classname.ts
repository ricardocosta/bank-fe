import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

import { extendedTheme } from "~/styles/theme-config.ts";

import type { ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]) => {
  return customTwMerge(clsx(inputs));
};

const formatColors = () => {
  const colors = [];

  for (const [key, color] of Object.entries(extendedTheme.colors)) {
    if (typeof color === "string") {
      colors.push(key);
    } else {
      const colorGroup = Object.keys(color).map((subKey) =>
        subKey === "DEFAULT" ? "" : subKey,
      );
      colors.push({ [key]: colorGroup });
    }
  }

  return colors;
};

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: Object.keys(extendedTheme.fontSize),
        },
      ],
    },
    theme: {
      borderRadius: Object.keys(extendedTheme.borderRadius),
      colors: formatColors(),
    },
  },
});
