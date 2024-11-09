import { NavLink } from "@remix-run/react";
import { $path } from "remix-routes";

import { cn } from "~/styles/classname.ts";

import { Icon } from "#app/components/ui/icon";

import type { SidebarState } from "#app/components/sidebar/types";

interface NavMenuProps {
  mode: SidebarState;
}

const NAVLINK_CLASSNAME =
  "group/menu-item hover:text-sky flex flex-row items-center gap-1 rounded-e-sm border-l-2 border-l-transparent px-2 py-0.5 text-slate-300 transition-colors duration-200 ease-in-out hover:border-l-cyan-600 hover:bg-sky-950";

export const NavMenu = ({ mode }: NavMenuProps) => {
  return (
    <nav className="flex flex-1">
      <ol className="flex flex-1 list-none flex-col gap-3">
        <li>
          <NavLink
            className={({ isActive }) =>
              cn(NAVLINK_CLASSNAME, isActive && "border-l-cyan-600 bg-sky-800")
            }
            to={$path("/dashboard")}
          >
            <Icon
              className={cn(
                "h-7 w-7 rounded-sm p-1 group-hover/menu-item:text-slate-200",
              )}
              name="dashboard"
            />
            <span>{mode === "expanded" ? "Dashboard" : null}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              cn(NAVLINK_CLASSNAME, isActive && "border-l-cyan-600 bg-sky-800")
            }
            to={$path("/accounts")}
          >
            <Icon
              className={cn(
                "h-7 w-7 rounded-sm p-1 group-hover/menu-item:text-slate-200",
              )}
              name="government"
            />
            <span>{mode === "expanded" ? "Accounts" : null}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              cn(NAVLINK_CLASSNAME, isActive && "border-l-cyan-600 bg-sky-800")
            }
            to={$path("/transactions")}
          >
            <Icon
              className={cn(
                "h-7 w-7 rounded-sm p-1 group-hover/menu-item:text-slate-200",
              )}
              name="sync"
            />
            <span>{mode === "expanded" ? "Transactions" : null}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              cn(NAVLINK_CLASSNAME, isActive && "border-l-cyan-600 bg-sky-800")
            }
            to={$path("/insights")}
          >
            <Icon
              className={cn(
                "h-7 w-7 rounded-sm p-1 group-hover/menu-item:text-slate-200",
              )}
              name="histogram"
            />
            <span>{mode === "expanded" ? "Insights" : null}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              cn(NAVLINK_CLASSNAME, isActive && "border-l-cyan-600 bg-sky-800")
            }
            to={$path("/configuration")}
          >
            <Icon
              className={cn(
                "h-7 w-7 rounded-sm p-1 group-hover/menu-item:text-slate-200",
              )}
              name="settings"
            />
            <span>{mode === "expanded" ? "Settings" : null}</span>
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};
