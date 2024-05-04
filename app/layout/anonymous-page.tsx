import { Link, Outlet } from "@remix-run/react";

import { Button } from "#app/components/ui/button";
import { Flex, Stack } from "#app/components/ui/layout";

export const AnonymousPage = () => {
  return (
    <Stack align="center" className="w-full" gap="none">
      <header className="container py-6">
        <Flex
          align="center"
          as="nav"
          gap="xlarge"
          justify="between"
          wrap="wrap"
        >
          <Link to="/">
            <p>Logo</p>
          </Link>
          <Button
            render={<Link to="/login">Log In</Link>}
            size="sm"
            variant="default"
          />
        </Flex>
      </header>
      <Outlet />
    </Stack>
  );
};
