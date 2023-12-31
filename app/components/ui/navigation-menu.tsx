import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { NavLink } from "@remix-run/react";
import { cva } from "class-variance-authority";
import * as React from "react";
import { forwardRef } from "react";

import { Icon } from "#app/components/ui/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "#app/components/ui/tooltip";
import { cn } from "#app/utils/misc.tsx";

import type { IconName } from "@/icon-name";
import type {
  NavigationMenuContentProps,
  NavigationMenuIndicatorProps,
  NavigationMenuListProps,
  NavigationMenuProps,
  NavigationMenuTriggerProps,
  NavigationMenuViewportProps,
  NavigationMenuItemProps as RadixNavigationMenuItemProps,
} from "@radix-ui/react-navigation-menu";
import type { NavLinkProps } from "@remix-run/react";

import type { SidebarState } from "#app/components/sidebar/types";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuProps
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex flex-1", className)}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  NavigationMenuListProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("flex flex-1 list-none flex-col gap-3", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerProps
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <Icon
      aria-hidden="true"
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      name="chevron-down"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  NavigationMenuContentProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  NavigationMenuViewportProps
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  NavigationMenuIndicatorProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

type NavigationMenuItemProps = {
  entryName: string;
  iconName: IconName;
  mode: SidebarState;
  to: string;
} & RadixNavigationMenuItemProps;

const NavigationMenuItem = ({
  entryName,
  iconName,
  mode,
  to,
}: NavigationMenuItemProps) => {
  return (
    <li>
      {mode === "collapsed" ? (
        <Tooltip delayDuration={50}>
          <TooltipTrigger asChild>
            <NavigationMenuNavLink
              className="group/menu-item hover:text-sky flex flex-row items-center gap-1 rounded-e-sm border-l-2 border-l-transparent px-2 py-0.5 text-slate-300 transition-colors duration-200 ease-in-out hover:border-l-cyan-600 hover:bg-sky-950"
              remixClassName={({ isActive }) =>
                cn(isActive && "bg-sky-800 border-l-cyan-600")
              }
              to={to}
            >
              <Icon
                className={cn(
                  "h-7 w-7 rounded-sm p-1 group-hover/menu-item:text-slate-200",
                )}
                name={iconName}
              />
            </NavigationMenuNavLink>
          </TooltipTrigger>
          <TooltipContent
            className="cursor-default rounded-sm bg-slate-50 px-2 py-0.5 font-semibold text-slate-800 shadow-sm"
            side="right"
          >
            {entryName}
          </TooltipContent>
        </Tooltip>
      ) : (
        <NavigationMenuNavLink
          className="group/menu-item hover:text-sky flex flex-row items-center gap-1 rounded-e-sm border-l-2 border-l-transparent px-2 py-0.5 text-slate-300 transition-colors duration-200 ease-in-out hover:border-l-cyan-600 hover:bg-sky-950"
          remixClassName={({ isActive }) =>
            cn(isActive && "bg-sky-800 border-l-cyan-600")
          }
          to={to}
        >
          <Icon
            className={cn(
              "h-7 w-7 rounded-sm p-1 group-hover/menu-item:text-slate-200",
            )}
            name={iconName}
          />
          <span>{entryName}</span>
        </NavigationMenuNavLink>
      )}
    </li>
  );
};

type NavigationMenuNavLinkProps = NavLinkProps & {
  remixClassName: ({ isActive }: { isActive: boolean }) => string;
};

const NavigationMenuNavLink = forwardRef<
  React.ElementRef<typeof NavLink>,
  NavigationMenuNavLinkProps
>(({ className, remixClassName, ...props }, forwardedRef) => {
  return (
    <NavLink
      {...props}
      ref={forwardedRef}
      aria-label={`Navigate to ${
        typeof props.to === "string" ? props.to : JSON.stringify(props.to)
      }`}
      className={({ isActive }) => {
        return cn(className, remixClassName({ isActive }));
      }}
    />
  );
});

NavigationMenuNavLink.displayName = "NavigationMenuNavLink";

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
