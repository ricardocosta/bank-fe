import { forwardRef } from "react";

import { Flex } from ".";

import type { FlexProps } from ".";

// Need to use interface here: https://github.com/shadcn-ui/ui/issues/120
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
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
