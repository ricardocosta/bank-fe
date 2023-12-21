import { forwardRef } from "react";

import { Flex } from ".";

import type { FlexProps } from ".";

// Need to use interface here: https://github.com/shadcn-ui/ui/issues/120
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
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
