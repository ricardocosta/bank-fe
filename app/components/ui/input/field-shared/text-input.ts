import { tv } from "tailwind-variants";

import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";

import type {
  FieldBaseProps,
  InputBaseProps,
} from "#app/components/ui/input/field-shared/types.ts";

export interface TextInputBaseProps<T extends HTMLElement>
  extends AriaTextFieldProps,
    FieldBaseProps,
    InputBaseProps<T> {}

export const textInputBaseStyles = tv({
  base: [
    "w-full",
    "flex",
    "text-gray-900",
    "border",
    "rounded",
    "transition-colors",
    "duration-150",
    "placeholder:text-gray-400",
    "focus:outline-none",
  ],
  variants: {
    variant: {
      ghost: "bg-transparent border-transparent",
      outline: "bg-gray-50 border-gray-300",
    },
    size: {
      // oxlint-disable-next-line eslint/sort-keys
      sm: "h-6 px-2 text-sm",
      md: "h-8 px-2 text-md",
      lg: "h-10 px-3 text-md",
    },
    isHovered: {
      true: "border-gray-900",
    },
    isFocused: {
      true: "border-gray-600",
    },
    isValid: {
      true: "border-green-600",
    },
    isInvalid: {
      true: "border-red-600",
    },
    isReadOnly: {
      true: "bg-gray-100",
    },
    isDisabled: {
      true: [
        "bg-gray-100",
        "text-gray-500",
        "placeholder:text-gray-500",
        "cursor-not-allowed",
      ],
    },
  },
  compoundVariants: [
    {
      className: "border-gray-300",
      isFocused: false,
      isReadOnly: true,
      variant: "outline",
    },
    {
      className: "border-transparent",
      isFocused: false,
      isReadOnly: true,
      variant: "ghost",
    },
    {
      className: "border-gray-300",
      isDisabled: true,
      variant: "outline",
    },
    {
      className: "border-transparent",
      isDisabled: true,
      variant: "ghost",
    },
  ],
});
