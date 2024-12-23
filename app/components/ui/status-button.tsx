import * as React from "react";
import { useSpinDelay } from "spin-delay";

import { cn } from "~/styles/classname.ts";

import {
  TooltipAnchor,
  TooltipContent,
  TooltipProvider,
} from "#app/components/ui/tooltip.tsx";

import { Button } from "./button.tsx";
import { Icon } from "./icon.tsx";

import type { ButtonProps } from "./button.tsx";

export const StatusButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    status: "pending" | "success" | "error" | "idle";
    message?: string | null;
    spinDelay?: Parameters<typeof useSpinDelay>[1];
  }
>(({ message, status, className, children, spinDelay, ...props }, ref) => {
  const delayedPending = useSpinDelay(status === "pending", {
    delay: 400,
    minDuration: 300,
    ...spinDelay,
  });
  const companion = {
    error: (
      <div className="bg-destructive inline-flex size-6 items-center justify-center rounded-full">
        <Icon className="text-destructive-foreground" name="cross-1" />
      </div>
    ),
    idle: null,
    pending: delayedPending ? (
      <div className="inline-flex size-6 items-center justify-center">
        <Icon className="animate-spin" name="update" />
      </div>
    ) : null,
    success: (
      <div className="inline-flex size-6 items-center justify-center">
        <Icon name="check" />
      </div>
    ),
  }[status];

  return (
    <Button
      ref={ref}
      className={cn("flex justify-center gap-4", className)}
      {...props}
    >
      <div>{children}</div>
      {message ? (
        <TooltipProvider>
          <TooltipAnchor>{companion}</TooltipAnchor>
          <TooltipContent>{message}</TooltipContent>
        </TooltipProvider>
      ) : (
        companion
      )}
    </Button>
  );
});
StatusButton.displayName = "Button";
