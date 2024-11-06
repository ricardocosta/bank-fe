import * as Ariakit from "@ariakit/react";
import * as React from "react";

import { cn } from "~/styles/classname.ts";

import type { IconName } from "@/icon-name";
import type { Dispatch, SetStateAction } from "react";
import type { Routes } from "remix-routes";

import type { SidebarState } from "#app/components/sidebar/types";

// These contexts allow us to set the props on the parent menu component from a
// child component.
const SetShiftContext = React.createContext<Dispatch<SetStateAction<number>>>(
  () => {
    // No content
  },
);
const SetPlacementContext = React.createContext<
  Dispatch<SetStateAction<Ariakit.MenuProviderProps["placement"]>>
>(() => {
  // No content
});

export type MenubarProps = Ariakit.MenubarProps;

export const Menubar = React.forwardRef<HTMLDivElement, MenubarProps>(
  function Menubar(props, ref) {
    const [shift, setShift] = React.useState(0);
    const [placement, setPlacement] =
      React.useState<Ariakit.MenuProviderProps["placement"]>("bottom");

    return (
      <Ariakit.Menubar
        ref={ref}
        {...props}
        className={cn("menubar", props.className)}
      >
        <SetShiftContext.Provider value={setShift}>
          <SetPlacementContext.Provider value={setPlacement}>
            <Ariakit.MenuProvider
              hideTimeout={250}
              placement={placement}
              showTimeout={100}
            >
              {props.children}
              <Ariakit.Menu
                className={cn("menu", props.className)}
                // This menu component is shared across all menus in the
                // menubar. This enables us to animate the menu position when
                // the user hovers over a menu item.
                portal
                shift={shift}
                tabIndex={-1}
                unmountOnHide
                // The menu position styles are applied to the menu wrapper, so
                // we need to add a class name to the wrapper for animation.
                wrapperProps={{ className: "menu-wrapper" }}
              >
                <Ariakit.MenuArrow className="menu-arrow" />
              </Ariakit.Menu>
            </Ariakit.MenuProvider>
          </SetPlacementContext.Provider>
        </SetShiftContext.Provider>
      </Ariakit.Menubar>
    );
  },
);

export type MenuProps = {
  label?: string;
  placement?: Ariakit.MenuStoreProps["placement"];
  shift?: number;
  href?: string;
} & Ariakit.MenuItemProps;

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { shift = 0, placement = "bottom", label, href, children, ...props },
  ref,
) {
  const [menuButton, setMenuButton] = React.useState<HTMLDivElement | null>(
    null,
  );

  const setShift = React.useContext(SetShiftContext);
  const setPlacement = React.useContext(SetPlacementContext);
  // By passing the menu context from the MenuProvider component, which is
  // rendered in the Menubar component above, to our menu store, they'll share
  // the same state. In this way, we can control the parent menu store from
  // within this component.
  const context = Ariakit.useMenuContext();
  const menu = Ariakit.useMenuStore({ store: context });
  // Get the menu element rendered by the parent component (contentElement) and
  // use it as the portal element for this menu's contents.
  const parentMenu = menu.useState("contentElement");
  // Compare the menu button element with the current anchor element set when
  // the menu opens to ascertain whether the menu is open.
  const open = menu.useState(
    (state) => state.mounted && state.anchorElement === menuButton,
  );

  React.useLayoutEffect(() => {
    if (!open) {
      return;
    }

    setShift(shift);
    setPlacement(placement);
  }, [open, setShift, shift, setPlacement, placement]);

  const item = (
    <Ariakit.MenuItem
      ref={ref}
      blurOnHoverEnd={false}
      store={menu.menubar ?? undefined}
      tabbable
      {...props}
      className={cn("menubar-item", props.className)}
      render={
        href ? <a aria-label={props["aria-label"]} href={href} /> : undefined
      }
    >
      {label}
      {!!children && <Ariakit.MenuButtonArrow className="menubar-arrow" />}
    </Ariakit.MenuItem>
  );

  // If there are no children, this means that this menu item is a leaf node in
  // the menubar, and we can render it as a simple menu item.
  if (!children) {
    return item;
  }

  return (
    // By default, nested menu providers will automatically assign the parent
    // menu store. We need to manually set the parent to null in this case
    // because the parent menu provider isn't really a parent menu, but rather
    // an aggregator.
    <Ariakit.MenuProvider parent={null} store={menu}>
      <Ariakit.MenuButton
        ref={setMenuButton}
        // Always show the menu when the menu button gets keyboard focus. Also,
        // it's necessary to define the disclosure and anchor elements as this
        // menu can have various potential anchor elements.
        render={item}
        showOnHover
        // Ensure the menu is always shown, not toggled, when the menu button is
        // clicked. If the menu button is a link, we don't want to show the menu
        // upon clicking, only on hovering or using arrow keys.
        toggleOnClick={() => {
          if (href) {
            return false;
          }
          menu.show();
          return false;
        }}
        onFocusVisible={(event) => {
          menu.setDisclosureElement(event.currentTarget);
          menu.setAnchorElement(event.currentTarget);
          menu.show();
        }}
      />
      {open ? (
        // Render this menu's contents into the parent menu.
        <Ariakit.Portal className="menu-contents" portalElement={parentMenu}>
          {children}
        </Ariakit.Portal>
      ) : null}
    </Ariakit.MenuProvider>
  );
});

export type MenuItemProps = {
  label: string;
  href?: keyof Routes;
  description?: string;
  iconName: IconName;
  mode: SidebarState;
} & Ariakit.MenuItemProps;

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  function MenuItem({ ...props }, ref) {
    const menu = Ariakit.useMenuContext();
    const id = React.useId();
    const labelId = `${id}-label`;
    const descriptionId = `${id}-description`;

    return (
      <Ariakit.MenuItem
        ref={ref}
        aria-describedby={props.description ? descriptionId : undefined}
        aria-labelledby={labelId}
        focusOnHover={false}
        store={menu}
        tabbable
        {...props}
        className={cn("menu-item", props.className)}
        render={
          props.href ? (
            <a aria-label={props["aria-label"]} href={props.href} />
          ) : undefined
        }
      >
        <div className="menu-item-label" id={labelId}>
          {props.label}
        </div>
        {props.description ? (
          <div className="menu-item-description" id={descriptionId}>
            {props.description}
          </div>
        ) : null}
      </Ariakit.MenuItem>
    );
  },
);

export type MenuGroupProps = {
  label: string;
} & Ariakit.MenuGroupProps;

export const MenuGroup = React.forwardRef<HTMLDivElement, MenuGroupProps>(
  function MenuGroup({ label, ...props }, ref) {
    return (
      <Ariakit.MenuGroup
        ref={ref}
        {...props}
        className={cn("group", props.className)}
      >
        <Ariakit.MenuGroupLabel className="group-label">
          {label}
        </Ariakit.MenuGroupLabel>
        {props.children}
      </Ariakit.MenuGroup>
    );
  },
);
