import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "#app/utils/misc";

import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const flexVariants = cva("box-border flex flex-1", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
    },
    gap: {
      none: "gap-0",
      tiny: "gap-0.5",
      small: "gap-1",
      medium: "gap-2",
      large: "gap-3",
      xlarge: "gap-4",
      ["2xlarge"]: "gap-5",
    },
    grow: {
      0: "flex-grow-0",
      1: "flex-grow",
    },
  },
  defaultVariants: {
    direction: "row",
    align: "start",
    justify: "start",
    wrap: "nowrap",
    gap: "medium",
  },
});

// Need to use interface here: https://github.com/shadcn-ui/ui/issues/120
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface FlexProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  as?: "div" | "main" | "nav" | "section" | "header";
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      as: Component = "div",
      children,
      align,
      direction,
      gap,
      grow,
      justify,
      wrap,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          flexVariants({ align, direction, gap, grow, justify, wrap }),
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Flex.displayName = "Flex";
