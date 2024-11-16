import { forwardRef } from "react";
import { tv } from "tailwind-variants";

import { Text } from "#app/components/ui/typography/text.tsx";

import type { ForwardedRef, ReactNode } from "react";

export interface FieldHintProps {
  className?: string;
  children: ReactNode;
}

export const fieldHintStyles = tv({
  base: "mt-0.5 text-xs text-gray-600",
});

/**
 * Used to display a user friendly hint,
 * such as a character counter or a password strength meter.
 * */
export const FieldHint = forwardRef(
  (
    { className, children }: FieldHintProps,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => {
    return typeof children === "string" ? (
      <Text as="p" ref={ref} className={fieldHintStyles({ className })}>
        {children}
      </Text>
    ) : (
      children
    );
  },
);

FieldHint.displayName = "FieldHint";
