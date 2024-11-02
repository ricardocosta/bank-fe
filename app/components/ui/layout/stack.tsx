import { forwardRef } from "react";

import { Flex } from "./flex";

import type { FlexProps } from ".";

export interface StackProps extends Omit<FlexProps, "direction"> {}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ children, ...props }, ref) => {
    return (
      <Flex ref={ref} direction="column" gap="medium" {...props}>
        {children}
      </Flex>
    );
  },
);

Stack.displayName = "Stack";
