import { forwardRef } from "react";

import type { HTMLAttributes } from "react";

export type BoxProps = HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
};

export type PropsOf<T extends React.ElementType> = React.ComponentProps<T>;

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = "div", ...props }, ref) => {
    return <Component {...props} ref={ref} />;
  },
);

Box.displayName = "Box";
