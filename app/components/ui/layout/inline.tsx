import { forwardRef } from "react";

import { Flex } from "./flex";

import type { FlexProps } from "./flex";

export interface InlineProps extends Omit<FlexProps, "direction"> {}

export const Inline = forwardRef<HTMLDivElement, InlineProps>(
  ({ children, ...props }, ref) => {
    return (
      <Flex ref={ref} direction="row" gap="small" {...props}>
        {children}
      </Flex>
    );
  },
);

Inline.displayName = "Inline";
