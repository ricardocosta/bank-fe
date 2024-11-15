import { forwardRef } from "react";
import { tv } from "tailwind-variants";

import { Box } from "~/components/ui/layout/box.tsx";
import { cn } from "~/styles/classname.ts";

import type { BoxProps } from "~/components/ui/layout/box.tsx";
import type { VariantProps } from "class-variance-authority";

const monospaceVariants = tv({
  base: "font-mono",
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
      regular: "font-normal",
      semibold: "font-semibold",
    },
  },
});

export type MonospaceProps = BoxProps & VariantProps<typeof monospaceVariants>;

export const Monospace = forwardRef<HTMLElement, MonospaceProps>(
  ({ as: Component = "p", className, size, weight, ...props }, ref) => {
    return (
      <Box
        {...props}
        as={Component}
        className={cn(monospaceVariants({ className, size, weight }))}
        ref={ref}
      />
    );
  },
);

Monospace.displayName = "Text";
