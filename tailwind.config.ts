import animatePlugin from "tailwindcss-animate";
import reactAriaComponentsPlugin from "tailwindcss-react-aria-components";

// Cannot use ~/styles in this imports because
// postCSS won't be able to resolve the TS path aliases.
import { extendedTheme } from "./app/styles/theme-config.ts";

import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  plugins: [reactAriaComponentsPlugin, animatePlugin],
  theme: {
    extend: {
      ...extendedTheme,
    },
  },
} satisfies Config;
