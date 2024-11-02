import { Toaster as Sonner } from "sonner";

import { useTheme } from "#app/theme/use-theme.ts";

type ToasterProps = React.ComponentProps<typeof Sonner>;

function EpicToaster({ ...props }: ToasterProps) {
  const theme = useTheme();

  return (
    <Sonner
      className="toaster group"
      theme={theme}
      toastOptions={{
        classNames: {
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          description: "group-[.toast]:text-muted-foreground",
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        },
      }}
      {...props}
    />
  );
}

export { EpicToaster };
