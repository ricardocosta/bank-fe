import { forwardRef } from "react";
import { tv } from "tailwind-variants";

import { Box } from "~/components/ui/layout/box.tsx";
import { cn } from "~/styles/classname.ts";

import type { BoxProps } from "~/components/ui/layout/box.tsx";
import type { VariantProps } from "class-variance-authority";

const textVariants = tv({
  base: "font-sans",
  defaultVariants: {
    size: "md",
    weight: "regular",
  },
  variants: {
    size: {
      // oxlint-disable-next-line sort-keys
      xs: "text-body-xs",
      sm: "text-body-sm",
      md: "text-body-md",
      lg: "text-body-lg",
      xl: "text-body-xl",
    },
    weight: {
      bold: "font-bold",
      extraBold: "font-extrabold",
      extraLight: "font-extralight",
      light: "font-light",
      medium: "font-medium",
      regular: "font-normal",
      semibold: "font-semibold",
    },
  },
});

export type TextProps = BoxProps & VariantProps<typeof textVariants>;

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as: Component = "p", className, size, weight, ...props }, ref) => {
    return (
      <Box
        {...props}
        as={Component}
        className={cn(textVariants({ className, size, weight }))}
        ref={ref}
      />
    );
  },
);

Text.displayName = "Text";
