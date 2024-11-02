import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "#app/utils/misc";

import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const flexVariants = cva("box-border flex flex-1", {
  defaultVariants: {
    align: "start",
    direction: "row",
    gap: "medium",
    justify: "start",
    wrap: "nowrap",
  },
  variants: {
    align: {
      // oxlint-disable-next-line eslint/sort-keys|
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    direction: {
      column: "flex-col",
      row: "flex-row",
    },
    gap: {
      // oxlint-disable-next-line eslint/sort-keys
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
    justify: {
      // oxlint-disable-next-line eslint/sort-keys
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
    },
  },
});

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
