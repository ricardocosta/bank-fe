import animatePlugin from "tailwindcss-animate";

import { extendedTheme } from "./app/utils/extended-theme.ts";

import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: extendedTheme,
  },
  plugins: [animatePlugin],
} satisfies Config;
