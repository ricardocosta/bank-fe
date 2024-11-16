import { forwardRef } from "react";
import { Text as AriaText } from "react-aria-components";
import { tv } from "tailwind-variants";

import type { ForwardedRef, ReactNode } from "react";

export interface FieldDescriptionProps {
  className?: string;
  children: ReactNode;
}

export const fieldDescriptionStyles = tv({
  base: "text-sm text-gray-600",
});

/**
 * Used to display a longer description of a field,
 * such as the purpose or requirements of the field.
 */
export const FieldDescription = forwardRef(
  (
    { className, children }: FieldDescriptionProps,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => {
    return typeof children === "string" ? (
      <AriaText
        elementType="p"
        ref={ref}
        slot="description"
        className={fieldDescriptionStyles({ className })}
      >
        {children}
      </AriaText>
    ) : (
      children
    );
  },
);

FieldDescription.displayName = "FieldDescription";
