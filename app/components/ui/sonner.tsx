import { Toaster as Sonner } from "sonner";

import { useTheme } from "#app/theme/useTheme";

type ToasterProps = React.ComponentProps<typeof Sonner>;

function EpicToaster({ ...props }: ToasterProps) {
  const theme = useTheme();

  return (
    <Sonner
      className="toaster group"
      theme={theme}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
}

export { EpicToaster };
