import { forwardRef } from "react";
import { tv } from "tailwind-variants";

import { cn } from "~/styles/classname.ts";

import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const headingStyles = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-h5",
  h6: "text-h6",
};

const headingVariants = tv({
  base: "font-heading font-bold",
  defaultVariants: {
    variant: "h1",
  },
  variants: {
    variant: headingStyles,
  },
});

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    level?: keyof typeof headingStyles;
  };

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, level = "h1", ...props }, ref) => {
    const Component = level;

    return (
      <Component
        className={cn(headingVariants({ className, variant }))}
        {...props}
        ref={ref}
      />
    );
  },
);

Heading.displayName = "Heading";
