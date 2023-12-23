import { Link, useRouteLoaderData } from "@remix-run/react";
import { forwardRef, useCallback, useState } from "react";
import { ToggleButton } from "react-aria-components";

import { Icon } from "#app/components/ui/icon";
import { Inline, Stack } from "#app/components/ui/layout";
import { ThemeSwitch } from "#app/theme/theme-switch";
import { cn } from "#app/utils/misc";

import type { HTMLAttributes } from "react";

import type { loader as rootLoader } from "#app/root.tsx";

// Need to use interface here: https://github.com/shadcn-ui/ui/issues/120
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children }, ref) => {
    const data = useRouteLoaderData<typeof rootLoader>("root");
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = useCallback(() => {
      setIsOpen((isOpen) => !isOpen);
    }, []);

    return (
      <Stack
        ref={ref}
        as="nav"
        className={cn(
          // eslint-disable-next-line tailwindcss/classnames-order
          "group relative h-full bg-sidebar px-3 py-4 transition-all duration-300 animate-in",
          isOpen ? "max-w-56" : "max-w-20",
        )}
        justify="between"
      >
        <Stack as="header" className="w-full" grow={0} wrap="nowrap">
          <Inline className="w-full" justify="between">
            <Link to="/">
              <p>Logo</p>
            </Link>
            <ToggleButton
              // eslint-disable-next-line tailwindcss/classnames-order
              className="ml-4 flex rounded-sm border border-sidebar-item bg-sidebar p-1 opacity-0 transition-all duration-200 group-hover:opacity-100"
              isSelected={isOpen}
              onChange={toggleSidebar}
            >
              <Icon
                className="text-sidebar-item"
                name={isOpen ? "rail-right-open" : "rail-right-close"}
              >
                <span className="sr-only">
                  {isOpen ? "Collapse sidebar" : "Expand sidebar"}
                </span>
              </Icon>
            </ToggleButton>
          </Inline>
        </Stack>
        {children}
        <ThemeSwitch userPreference={data?.requestInfo.userPrefs.theme} />
      </Stack>
    );
  },
);

Sidebar.displayName = "Sidebar";
