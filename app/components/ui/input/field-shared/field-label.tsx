import { forwardRef } from "react";
import { Label as AriaLabel } from "react-aria-components";
import { tv } from "tailwind-variants";

import type { ForwardedRef } from "react";
import type { LabelProps as AriaLabelProps } from "react-aria-components";

export interface FieldLabelProps extends AriaLabelProps {
  /** Whether the input is required.
   * @default false
   */
  isRequired?: boolean;

  /**
   * Text label to show if the input is not required.
   * @default "(optional)"
   */
  optionalText?: string;
}

export const fieldLabelStyles = tv({
  slots: {
    base: "text-sm font-bold text-gray-900",
    optional: "font-normal text-gray-600",
  },
});

/**
 * FieldLabel is used as the title of an input field.
 */
export const FieldLabel = forwardRef(
  (props: FieldLabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
    const {
      isRequired,
      children,
      optionalText = "(optional)",
      className,
      ...rest
    } = props;

    const { base, optional } = fieldLabelStyles();

    return (
      <AriaLabel {...rest} ref={ref} className={base({ className })}>
        {typeof children === "string" ? (
          <>
            {children}

            {isRequired ? null : (
              <span className={optional()}>{` ${optionalText}`}</span>
            )}
          </>
        ) : (
          children
        )}
      </AriaLabel>
    );
  },
);

FieldLabel.displayName = "FieldLabel";
