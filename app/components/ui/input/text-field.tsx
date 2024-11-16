import { forwardRef } from "react";
import {
  Input as AriaInput,
  TextField as AriaTextField,
} from "react-aria-components";

import { Field } from "#app/components/ui/input/field-shared/field.tsx";
import { textInputBaseStyles } from "#app/components/ui/input/field-shared/text-input.ts";

import type { ForwardedRef } from "react";

import type { TextInputBaseProps } from "#app/components/ui/input/field-shared/text-input.ts";

export interface TextFieldProps extends TextInputBaseProps<HTMLInputElement> {}

export const TextField = forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      variant = "outline",
      size = "lg",
      isReadOnly,
      validationState,
      validationBehavior = "aria",
      inputRef,
      ...otherProps
    } = props;

    const isInvalid = props.isInvalid ?? validationState === "invalid";
    const isValid = validationState === "valid";

    return (
      <AriaTextField
        ref={ref}
        {...otherProps}
        validationBehavior={validationBehavior}
        isReadOnly={isReadOnly}
        isInvalid={isInvalid}
      >
        <Field {...props}>
          <AriaInput
            ref={inputRef}
            className={(renderProps) =>
              textInputBaseStyles({
                isReadOnly,
                isValid,
                size,
                variant,
                ...renderProps,
              })
            }
          />
        </Field>
      </AriaTextField>
    );
  },
);

TextField.displayName = "TextField";
