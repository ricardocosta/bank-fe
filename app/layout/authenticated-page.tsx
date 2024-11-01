import { Outlet } from "@remix-run/react";

import { Sidebar } from "#app/components/sidebar/sidebar";
import { Flex, Inline } from "#app/components/ui/layout";

export const AuthenticatedPage = () => {
  return (
    <Inline className="h-screen w-full bg-frame pr-3" gap="none">
      <Sidebar />
      <Flex className="size-full py-7" gap="none">
        <Flex
          className="size-full overflow-auto rounded-md bg-background"
          gap="none"
        >
          <Outlet />
        </Flex>
      </Flex>
    </Inline>
  );
};
