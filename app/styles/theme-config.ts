// Cannot use ~/styles in these imports because
// postCSS won't be able to resolve the TS path aliases.
import { ASPARAGUS } from "./colors/asparagus";
import { GREY_ASPARAGUS } from "./colors/grey-asparagus";

import type { Config } from "tailwindcss";

export const extendedTheme = {
  borderColor: {
    DEFAULT: "hsl(var(--border))",
  },
  borderRadius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
  },
  colors: {
    accent: {
      DEFAULT: "hsl(var(--accent))",
      foreground: "hsl(var(--accent-foreground))",
    },
    asparagus: ASPARAGUS,
    background: "var(--background)",
    border: "hsl(var(--border))",
    card: {
      DEFAULT: "hsl(var(--card))",
      foreground: "hsl(var(--card-foreground))",
    },
    destructive: {
      DEFAULT: "hsl(var(--destructive))",
      foreground: "hsl(var(--destructive-foreground))",
    },
    foreground: {
      DEFAULT: "hsl(var(--foreground))",
      destructive: "hsl(var(--foreground-destructive))",
    },
    frame: "var(--frame)",
    greyAsparatus: GREY_ASPARAGUS,
    input: {
      DEFAULT: "hsl(var(--input))",
      invalid: "hsl(var(--input-invalid))",
    },
    muted: {
      DEFAULT: "hsl(var(--muted))",
      foreground: "hsl(var(--muted-foreground))",
    },
    popover: {
      DEFAULT: "var(--popover)",
      foreground: "hsl(var(--popover-foreground))",
    },
    primary: {
      DEFAULT: "hsl(var(--primary))",
      foreground: "hsl(var(--primary-foreground))",
    },
    ring: {
      DEFAULT: "hsl(var(--ring))",
      invalid: "hsl(var(--foreground-destructive))",
    },
    secondary: {
      DEFAULT: "var(--secondary)",
      foreground: "hsl(var(--secondary-foreground))",
    },
  },
  fontFamily: {
    heading: ["var(--font-heading)"],
    sans: ["var(--font-sans)"],
  },
  fontSize: {
    // oxlint-disable-next-line eslint/sort-keys
    // 1rem = 16px
    /** 32px size / 36px high / normal */
    "body-2xl": ["2rem", { lineHeight: "2.25rem" }],
    /** 28px size / 36px high / normal */
    "body-xl": ["1.75rem", { lineHeight: "2.25rem" }],
    /** 24px size / 32px high / normal */
    "body-lg": ["1.5rem", { lineHeight: "2rem" }],
    /** 20px size / 28px high / normal */
    "body-md": ["1.25rem", { lineHeight: "1.75rem" }],
    /** 16px size / 20px high / normal */
    "body-sm": ["1rem", { lineHeight: "1.25rem" }],
    /** 14px size / 18px high / normal */
    "body-xs": ["0.875rem", { lineHeight: "1.125rem" }],
    /** 12px size / 16px high / normal */
    "body-2xs": ["0.75rem", { lineHeight: "1rem" }],

    /** 56px size / 62px high / bold */
    h1: ["3.5rem", { fontWeight: "700", lineHeight: "3.875rem" }],
    /** 40px size / 48px high / bold */
    h2: ["2.5rem", { fontWeight: "700", lineHeight: "3rem" }],
    /** 32px size / 36px high / bold */
    h3: ["2rem", { fontWeight: "700", lineHeight: "2.25rem" }],
    /** 28px size / 36px high / bold */
    h4: ["1.75rem", { fontWeight: "700", lineHeight: "2.25rem" }],
    /** 24px size / 32px high / bold */
    h5: ["1.5rem", { fontWeight: "700", lineHeight: "2rem" }],
    /** 16px size / 20px high / bold */
    h6: ["1rem", { fontWeight: "700", lineHeight: "1.25rem" }],
    /** 80px size / 84px high / bold */
    mega: ["5rem", { fontWeight: "700", lineHeight: "5.25rem" }],

    /** 12px size / 16px high / bold */
    button: ["0.75rem", { fontWeight: "700", lineHeight: "1rem" }],
    /** 18px size / 24px high / semibold */
    caption: ["1.125rem", { fontWeight: "600", lineHeight: "1.5rem" }],
  },
} satisfies Config["theme"];
