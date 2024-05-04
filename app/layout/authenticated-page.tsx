import { invariant } from "@epic-web/invariant";
import { Outlet, useRouteLoaderData } from "@remix-run/react";
import { $routeId } from "remix-routes";

import { Sidebar } from "#app/components/sidebar/sidebar";
import { Flex, Inline } from "#app/components/ui/layout";

import type { loader as rootLoader } from "#app/root.tsx";

export const AuthenticatedPage = () => {
  const data = useRouteLoaderData<typeof rootLoader>($routeId("root"));

  invariant(data, "No data found for root loader");

  return (
    <Inline className="h-screen w-full" gap="none">
      <Sidebar userPreference={data.requestInfo.userPrefs.sidebarState} />
      <Flex className="h-screen w-full overflow-auto" gap="none">
        <Outlet />
      </Flex>
    </Inline>
  );
};
