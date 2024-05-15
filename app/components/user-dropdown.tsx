import { Form, Link, NavLink, useSubmit } from "@remix-run/react";
import { useRef } from "react";
import { $path } from "remix-routes";

import { Button } from "#app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "#app/components/ui/dropdown-menu";
import { Icon } from "#app/components/ui/icon";
import { getUserImgSrc } from "#app/utils/misc";
import { useUser } from "#app/utils/user";

import type { SidebarState } from "#app/components/sidebar/types";

type UserDropdownProps = {
  mode: SidebarState;
};

export function UserDropdown({ mode }: UserDropdownProps) {
  const user = useUser();
  const submit = useSubmit();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <DropdownMenu defaultValues={{ sort: "desc" }}>
      <DropdownMenuTrigger
        render={
          <Button
            className="rounded-e-sm rounded-s-none border-l-2 border-l-transparent ring-0 ring-offset-0 focus-within:ring-0 hover:border-l-cyan-600 focus-visible:ring-0 data-[state=open]:border-l-cyan-600"
            tabIndex={-1}
            variant="secondary"
          >
            <NavLink
              className="flex items-center gap-2"
              to={$path("/profile")}
              // this is for progressive enhancement
              onClick={(e) => e.preventDefault()}
            >
              <img
                alt={user.name ?? user.username}
                className="h-8 w-8 rounded-full object-cover"
                src={getUserImgSrc(user.image?.id)}
              />
              {mode === "expanded" ? user.name : null}
            </NavLink>
          </Button>
        }
      />

      <DropdownMenuContent gutter={8}>
        <DropdownMenuItem
          render={
            <Link prefetch="intent" to={$path("/profile")}>
              <Icon className="text-body-md" name="avatar">
                Profile
              </Icon>
            </Link>
          }
        />
        <DropdownMenuSeparator />
        <DropdownMenuItem
          // this prevents the menu from closing before the form submission is completed
          render={
            <Form ref={formRef} action={$path("/logout")} method="POST">
              <Icon className="text-body-md" name="exit">
                <button type="submit">Logout</button>
              </Icon>
            </Form>
          }
          onSelect={(event) => {
            event.preventDefault();
            submit(formRef.current);
          }}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
