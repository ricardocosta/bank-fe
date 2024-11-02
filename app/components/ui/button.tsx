import { Role } from "@ariakit/react";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "#app/utils/misc.tsx";

import type { RoleProps } from "@ariakit/react";
import type { VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium outline-none ring-ring ring-offset-2 ring-offset-background transition-colors focus-within:ring-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-10 px-4 py-2",
        icon: "size-10 rounded-sm",
        lg: "h-11 rounded-md px-8",
        pill: "px-12 py-3 leading-3",
        sm: "h-9 rounded-md px-3",
        wide: "px-24 py-5",
      },
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "hover:bg-secondary/80 bg-secondary text-secondary-foreground",
      },
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Pick<RoleProps, "render"> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, ...props },
  ref,
) {
  return (
    <Role.button
      ref={ref}
      className={cn(buttonVariants({ className, size, variant }))}
      {...props}
    />
  );
});

export { Button, buttonVariants };
