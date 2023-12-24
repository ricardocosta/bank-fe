import { useForm } from "@conform-to/react";
import { Link, useFetcher, useRouteLoaderData } from "@remix-run/react";
import { forwardRef } from "react";

import { useOptimisticSidebarState } from "#app/components/sidebar/useOptimisticSidebarState";
import { Icon } from "#app/components/ui/icon";
import { Inline, Stack } from "#app/components/ui/layout";
import { ThemeSwitch } from "#app/theme/theme-switch";
import { cn } from "#app/utils/misc";

import type { Submission } from "@conform-to/react";
import type { HTMLAttributes } from "react";

import type { SidebarState } from "#app/components/sidebar/types";
import type { loader as rootLoader } from "#app/root.tsx";

// Need to use interface here: https://github.com/shadcn-ui/ui/issues/120
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  userPreference?: SidebarState | null;
}

type SidebarStateFetcher = {
  submission: Submission<{
    sidebarState: SidebarState;
  }>;
};

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children, userPreference }, ref) => {
    const fetcher = useFetcher<SidebarStateFetcher>();
    const data = useRouteLoaderData<typeof rootLoader>("root");
    const optimisticMode = useOptimisticSidebarState();
    const [form] = useForm({
      id: "sidebar-toggle",
      lastSubmission: fetcher.data?.submission,
    });

    const mode = optimisticMode ?? userPreference ?? "collapsed";
    let nextMode: SidebarState;
    switch (mode) {
      case "expanded":
        nextMode = "collapsed";
        break;
      case "collapsed":
        nextMode = "expanded";
        break;
    }

    return (
      <Stack
        ref={ref}
        as="nav"
        className={cn(
          // eslint-disable-next-line tailwindcss/classnames-order
          "group relative h-full bg-sidebar px-3 py-4 transition-all duration-300 animate-in",
          mode === "expanded" ? "max-w-56" : "max-w-20",
        )}
        justify="between"
      >
        <Stack as="header" className="w-full" grow={0} wrap="nowrap">
          <Inline className="w-full" justify="between">
            <Link to="/">
              <p>Logo</p>
            </Link>
            <fetcher.Form method="POST" {...form.props}>
              <input name="sidebarState" type="hidden" value={nextMode} />
              <button
                // eslint-disable-next-line tailwindcss/classnames-order
                className="ml-4 flex rounded-sm border border-sidebar-item bg-sidebar p-1 opacity-0 transition-all duration-200 group-hover:opacity-100"
                name="intent"
                type="submit"
                value="toggleSidebar"
              >
                <Icon
                  className="text-sidebar-item"
                  name={
                    mode === "expanded" ? "rail-right-open" : "rail-right-close"
                  }
                >
                  <span className="sr-only">
                    {mode === "expanded"
                      ? "Collapse sidebar"
                      : "Expand sidebar"}
                  </span>
                </Icon>
              </button>
            </fetcher.Form>
          </Inline>
        </Stack>
        {children}
        <ThemeSwitch userPreference={data?.requestInfo.userPrefs.theme} />
      </Stack>
    );
  },
);

Sidebar.displayName = "Sidebar";
