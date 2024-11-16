import type { ReactElement, ReactNode, Ref } from "react";
import type { ValidationState } from "react-stately";

export type FormFieldVariant = "outline" | "ghost";
export type FormFieldSize = "sm" | "md" | "lg";

export interface InputBaseProps<T extends HTMLElement> {
  /**
   * Visual style of the component
   * @default "outline"
   */
  variant?: FormFieldVariant;

  /**
   * Size of the component
   * @default "lg"
   */
  size?: FormFieldSize;

  /** Placeholder text */
  placeholder?: string;

  /** Ref for the input element */
  inputRef?: Ref<T>;
}

export interface FieldBaseProps {
  /** Field label */
  label?: string | ReactElement;

  /** A description for the field */
  description?: string | ReactElement;

  /**
   * Used to display a user friendly hint,
   * such as a character counter or a password strength meter.
   * */
  hint?: string | ReactElement;

  /** Used to add control buttons to the top right of a field */
  control?: ReactNode;

  /** An error message for the field when validationState is "invalid" */
  errorMessage?: string;

  /** A success message for the field when validationState is "valid" */
  successMessage?: string;

  /**
   * The current state of the field, which can be invalid, valid, or undefined.
   * Depending on the value, different styles will be applied to the field and its message.
   * */
  validationState?: ValidationState;

  /**
   * Indicator next to the field label if the field is not required
   */
  optionalText?: string;

  /** Object with refs to the different DOM elements that compose the field */
  refs?: {
    /** Ref for the description element */
    descriptionRef?: Ref<HTMLParagraphElement>;

    /** Ref for the hint element */
    hintRef?: Ref<HTMLParagraphElement>;

    /** Ref for the label element */
    labelRef?: Ref<HTMLLabelElement>;

    /** Ref for the message element */
    messageRef?: Ref<HTMLDivElement>;
  };
}
