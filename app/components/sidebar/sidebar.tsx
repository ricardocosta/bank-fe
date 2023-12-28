import { useForm } from "@conform-to/react";
import { Link, useFetcher, useRouteLoaderData } from "@remix-run/react";
import { forwardRef } from "react";

import { NavMenu } from "#app/components/nav";
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
        className={cn(
          "group relative h-full gap-6 bg-slate-300 px-3 py-4 transition-all duration-300 ease-in-out",
          mode === "expanded" ? "max-w-48" : "max-w-16",
        )}
      >
        <Stack as="header" className="w-full" grow={0} wrap="nowrap">
          <Inline className="w-full" justify="between">
            <Link to="/">
              <p>Logo</p>
            </Link>
            <fetcher.Form method="POST" {...form.props}>
              <input name="sidebarState" type="hidden" value={nextMode} />
              <button
                className="ml-1 flex rounded-sm border border-slate-300 bg-slate-600 p-1 opacity-0 transition-all duration-200 group-hover:opacity-100"
                name="intent"
                type="submit"
                value="toggleSidebar"
              >
                <Icon
                  className="text-slate-300"
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
        <ThemeSwitch userPreference={data?.requestInfo.userPrefs.theme} />
      </Stack>
    );
  },
);

Sidebar.displayName = "Sidebar";
