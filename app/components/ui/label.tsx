import * as React from "react";

import { cn } from "#app/utils/misc.tsx";

export type LabelProps = {
  htmlFor?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { className, ...props },
  ref,
) {
  return (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      htmlFor={props.htmlFor}
      {...props}
    />
  );
});

export { Label };
