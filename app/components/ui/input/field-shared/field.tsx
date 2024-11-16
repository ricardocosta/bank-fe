import { tv } from "tailwind-variants";

import { FieldDescription } from "#app/components/ui/input/field-shared/field-description.tsx";
import { FieldHint } from "#app/components/ui/input/field-shared/field-hint.tsx";
import { FieldLabel } from "#app/components/ui/input/field-shared/field-label.tsx";
import { FieldMessage } from "#app/components/ui/input/field-shared/field-message.tsx";

import type { ReactNode, Ref } from "react";
import type { ValidationState } from "react-stately";

import type { FieldBaseProps } from "#app/components/ui/input/field-shared/types.ts";

interface FieldProps extends FieldBaseProps {
  /** Whether the input is required. */
  isRequired?: boolean;

  /** Whether the value is invalid. */
  isInvalid?: boolean;

  /** Field input */
  children: ReactNode;
}

export const fieldStyles = tv({
  slots: {
    fieldControl: "self-center justify-self-end",
    fieldDescription: "col-span-2 col-start-1",
    fieldHint: "",
    fieldLabel: "self-center truncate",
    topWrapper:
      "mb-1 grid grid-cols-[auto_1fr] grid-rows-[minmax(1.5rem,auto),auto] gap-x-2",
  },
});

/**
 * A wrapper component for input fields to abstract common functionality
 */
export const Field = (props: FieldProps) => {
  const {
    isInvalid,
    validationState,
    errorMessage,
    successMessage,
    description,
    control,
    hint,
    isRequired,
    label,
    optionalText,
    children,
    refs,
  } = props;

  const { topWrapper, fieldControl, fieldLabel, fieldDescription, fieldHint } =
    fieldStyles();

  const shouldRenderTopWrapper =
    label !== undefined || description !== undefined || hint !== undefined;

  return (
    <>
      {shouldRenderTopWrapper ? (
        <div
          className={topWrapper({
            className: !label && "grid-cols-1 gap-0",
          })}
        >
          {label ? (
            <FieldLabel
              className={fieldLabel()}
              isRequired={isRequired}
              optionalText={optionalText}
              ref={refs?.labelRef}
            >
              {label}
            </FieldLabel>
          ) : null}

          {control ? <div className={fieldControl()}>{control}</div> : null}

          {description ? (
            <FieldDescription
              className={fieldDescription()}
              ref={refs?.descriptionRef}
            >
              {description}
            </FieldDescription>
          ) : null}
        </div>
      ) : null}

      {children}

      {hint ? (
        <FieldHint className={fieldHint()} ref={refs?.hintRef}>
          {hint}
        </FieldHint>
      ) : null}

      <FieldMessageRenderer
        errorMessage={errorMessage}
        isInvalid={isInvalid}
        successMessage={successMessage}
        validationState={validationState}
        ref={refs?.messageRef}
      />
    </>
  );
};

const FieldMessageRenderer = (args: {
  errorMessage?: string;
  successMessage?: string;
  isInvalid?: boolean;
  validationState?: ValidationState;
  ref?: Ref<HTMLDivElement>;
}) => {
  const { isInvalid, validationState, errorMessage, successMessage, ref } =
    args;

  if (!errorMessage && !successMessage) {
    return null;
  }

  if ((isInvalid || validationState === "invalid") && errorMessage) {
    return (
      <FieldMessage className="mt-1" validationState="invalid" ref={ref}>
        {errorMessage}
      </FieldMessage>
    );
  }

  if (validationState === "valid" && successMessage) {
    return (
      <FieldMessage className="mt-1" validationState="valid" ref={ref}>
        {successMessage}
      </FieldMessage>
    );
  }
};
