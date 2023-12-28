import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "#app/components/ui/navigation-menu";

import type { SidebarState } from "#app/components/sidebar/types";

type NavMenuProps = {
  mode: SidebarState;
};

export const NavMenu = ({ mode }: NavMenuProps) => {
  return (
    <NavigationMenu orientation="vertical">
      <NavigationMenuList>
        <NavigationMenuItem
          entryName="Dashboard"
          iconName="dashboard"
          mode={mode}
          to="/dashboard"
        />
        <NavigationMenuItem
          entryName="Accounts"
          iconName="government"
          mode={mode}
          to="/accounts"
        />
        <NavigationMenuItem
          entryName="Transactions"
          iconName="sync"
          mode={mode}
          to="/transactions"
        />
        <NavigationMenuItem
          entryName="Insights"
          iconName="histogram"
          mode={mode}
          to="/insights"
        />
        <NavigationMenuItem
          entryName="Configuration"
          iconName="settings"
          mode={mode}
          to="/configuration"
        />
      </NavigationMenuList>
    </NavigationMenu>
  );
};
