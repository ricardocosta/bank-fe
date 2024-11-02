type Size =
  | "4xs"
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

const options: Record<Size, string> = {
  // oxlint-disable-next-line eslint/sort-keys
  "4xs": "h-4",
  "3xs": "h-8",
  "2xs": "h-12",
  xs: "h-16",
  sm: "h-20",
  md: "h-24",
  lg: "h-28",
  xl: "h-32",
  "2xl": "h-36",
  "3xl": "h-40",
  "4xl": "h-44",
};

interface SpacerProps {
  size: Size;
}

export function Spacer({ size }: SpacerProps) {
  return <div className={options[size]} />;
}
