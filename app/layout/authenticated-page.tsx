import { Outlet } from "@remix-run/react";

import { Sidebar } from "#app/components/sidebar/sidebar";
import { Flex, Inline } from "#app/components/ui/layout";

export const AuthenticatedPage = () => {
  return (
    <Inline className="bg-frame h-screen w-full pr-3" gap="none">
      <Sidebar />
      <Flex className="size-full py-7" gap="none">
        <Flex
          className="bg-background size-full overflow-auto rounded-md"
          gap="none"
        >
          <Outlet />
        </Flex>
      </Flex>
    </Inline>
  );
};
