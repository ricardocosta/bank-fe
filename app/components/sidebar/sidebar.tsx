import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { invariant } from "@epic-web/invariant";
import {
  NavLink,
  useActionData,
  useFetcher,
  useRouteLoaderData,
} from "@remix-run/react";
import { forwardRef } from "react";
import { $path, $routeId } from "remix-routes";

import { NavMenu } from "#app/components/nav";
import { SidebarToggleSchema } from "#app/components/sidebar/schema";
import { useOptimisticSidebarState } from "#app/components/sidebar/use-optimistic-sidebar-state.ts";
import { Button } from "#app/components/ui/button";
import { Icon } from "#app/components/ui/icon";
import { Input } from "#app/components/ui/input";
import { Flex, Stack } from "#app/components/ui/layout";
import { UserDropdown } from "#app/components/user-dropdown";
import { ThemeSwitch } from "#app/theme/theme-switch";
import { cn } from "#app/utils/misc";

import type { HTMLAttributes } from "react";

import type { SidebarState } from "#app/components/sidebar/types";
import type { action as rootAction, loader as rootLoader } from "#app/root.tsx";
import type { SubAction } from "#types/named-actions";

export type SidebarProps = HTMLAttributes<HTMLDivElement>;

type SidebarStateFetcher = SubAction<typeof rootAction, "sidebar-toggle">;

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children }, ref) => {
    const actionData = useActionData<SidebarStateFetcher>();
    const fetcher = useFetcher();
    const data = useRouteLoaderData<typeof rootLoader>($routeId("root"));
    invariant(data, "No data found for root loader");

    const optimisticMode = useOptimisticSidebarState();

    const mode =
      optimisticMode ?? data.requestInfo.userPrefs.sidebarState ?? "collapsed";

    const nextMode: SidebarState =
      mode === "expanded" ? "collapsed" : "expanded";

    const [form, fields] = useForm({
      constraint: getZodConstraint(SidebarToggleSchema),
      id: "sidebar-toggle",
      lastResult: actionData?.result,

      onValidate({ formData }) {
        return parseWithZod(formData, { schema: SidebarToggleSchema });
      },
    });

    return (
      <Stack
        ref={ref}
        className={cn(
          "group/sidebar relative h-full gap-3 px-3 pb-7 pt-1 transition-all duration-200 ease-in-out",
          mode === "expanded" ? "max-w-48" : "max-w-20",
        )}
      >
        <Flex className="w-full" gap="medium" grow={0} justify="end">
          <ThemeSwitch />
          <fetcher.Form
            method="POST"
            {...getFormProps(form)}
            className="opacity-0 transition-opacity duration-200 ease-in-out focus-within:opacity-100 group-hover/sidebar:opacity-100 group-focus-visible/sidebar:opacity-100"
          >
            <Input
              {...getInputProps(fields.sidebarState, {
                type: "hidden",
                value: false,
              })}
              value={nextMode}
            />
            <Button
              aria-label={
                mode === "expanded" ? "Collapse sidebar" : "Expand sidebar"
              }
              className="size-5 p-0.5 hover:bg-slate-100 focus-visible:ring-offset-0"
              name="intent"
              size="icon"
              type="submit"
              value="toggleSidebar"
              variant="ghost"
            >
              <Icon
                className={cn(
                  "ring-0 ring-offset-frame",
                  mode === "expanded" ? "fill-slate-800" : "fill-slate-400",
                )}
                name="margin-left"
              />
            </Button>
          </fetcher.Form>
        </Flex>
        <NavLink to={$path("/")}>
          <div className="flex size-12 items-center justify-center bg-blue-400">
            B
          </div>
        </NavLink>
        <NavMenu mode={mode} />
        {children}
        <UserDropdown mode={mode} />
      </Stack>
    );
  },
);

Sidebar.displayName = "Sidebar";
