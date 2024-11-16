import { forwardRef } from "react";
import { FieldError as AriaFieldError } from "react-aria-components";
import { tv } from "tailwind-variants";

import { Icon } from "#app/components/ui/icon.tsx";

import type { ForwardedRef, ReactNode } from "react";

export interface FieldMessageProps {
  validationState?: "valid" | "invalid";
  className?: string;
  children: ReactNode;
}

const iconMap = {
  invalid: <Icon name="cross-circled" size="sm" />,
  valid: <Icon name="check-circled" size="sm" />,
};

export const fieldMessageStyles = tv({
  slots: {
    icon: "inline-block flex-shrink-0",
    wrapper: "flex items-start gap-1 text-sm",
  },
  variants: {
    isInvalid: {
      true: "",
    },
  },
  // oxlint-disable-next-line eslint/sort-keys
  compoundVariants: [
    {
      className: {
        icon: "text-red-600",
        wrapper: "text-red-600",
      },
      isInvalid: true,
    },
    {
      className: {
        icon: "text-green-700",
        wrapper: "text-green-700",
      },
      isInvalid: false,
    },
  ],
});

/**
 * FieldMessage is used to display input validation messages.
 */
export const FieldMessage = forwardRef(
  (props: FieldMessageProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { children, validationState = "invalid", className } = props;
    const isInvalid = validationState === "invalid";

    const { icon, wrapper } = fieldMessageStyles();

    return (
      <div ref={ref} className={wrapper({ className, isInvalid })}>
        <span className={icon({ isInvalid })}>{iconMap[validationState]}</span>

        {isInvalid ? <AriaFieldError>{children}</AriaFieldError> : children}
      </div>
    );
  },
);

FieldMessage.displayName = "FieldMessage";
