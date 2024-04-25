import { getFormProps, useForm } from "@conform-to/react";
import { Link, useFetcher, useRouteLoaderData } from "@remix-run/react";
import { forwardRef } from "react";

import { NavMenu } from "#app/components/nav";
import { useOptimisticSidebarState } from "#app/components/sidebar/useOptimisticSidebarState";
import { Icon } from "#app/components/ui/icon";
import { Inline, Stack } from "#app/components/ui/layout";
import { UserDropdown } from "#app/components/user-dropdown";
import { ThemeSwitch } from "#app/theme/theme-switch";
import { cn } from "#app/utils/misc";

import type { HTMLAttributes } from "react";

import type { SidebarState } from "#app/components/sidebar/types";
import type { action as rootAction, loader as rootLoader } from "#app/root.tsx";
import type { SubAction } from "#types/named-actions";

// Need to use interface here: https://github.com/shadcn-ui/ui/issues/120
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  userPreference?: SidebarState | null;
}

type SidebarStateFetcher = SubAction<typeof rootAction, "sidebar-toggle">;

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children, userPreference }, ref) => {
    const fetcher = useFetcher<SidebarStateFetcher>();
    const data = useRouteLoaderData<typeof rootLoader>("root");
    const optimisticMode = useOptimisticSidebarState();
    const [form] = useForm({
      id: "sidebar-toggle",
      lastResult: fetcher.data?.result,
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
        className={cn(
          "group/sidebar relative h-full gap-6 bg-sky-900 px-3 py-4 transition-all duration-200 ease-in-out",
          mode === "expanded" ? "max-w-48" : "max-w-20",
        )}
      >
        <Stack as="header" className="w-full" grow={0} wrap="nowrap">
          <Inline className="w-full" justify="between">
            <Link to="/">
              <p>Logo</p>
            </Link>
            <fetcher.Form method="POST" {...getFormProps(form)}>
              <input name="sidebarState" type="hidden" value={nextMode} />
              <button
                className="ml-3 flex rounded-sm border border-slate-300 bg-sky-950 p-1 opacity-0 transition-all duration-200 hover:border-slate-200 group-hover/sidebar:opacity-100"
                name="intent"
                type="submit"
                value="toggleSidebar"
              >
                <Icon
                  className="text-slate-300 group-hover/sidebar:text-slate-200"
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
        <NavMenu mode={mode} />
        {children}
        <UserDropdown isSidebarOpen={userPreference === "expanded"} />
        <ThemeSwitch userPreference={data?.requestInfo.userPrefs.theme} />
      </Stack>
    );
  },
);

Sidebar.displayName = "Sidebar";
