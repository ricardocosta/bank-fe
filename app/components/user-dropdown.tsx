import { Form, Link, NavLink, useSubmit } from "@remix-run/react";
import { useRef } from "react";
import { $path } from "remix-routes";

import { Button } from "#app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "#app/components/ui/dropdown-menu";
import { Icon } from "#app/components/ui/icon";
import { getUserImgSrc } from "#app/utils/misc";
import { useUser } from "#app/utils/user";

type UserDropdownProps = {
  isSidebarOpen: boolean;
};

export function UserDropdown({ isSidebarOpen }: UserDropdownProps) {
  const user = useUser();
  const submit = useSubmit();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="self-center">
        <Button
          asChild
          className="rounded-e-sm rounded-s-none border-l-2 border-l-transparent ring-0 ring-offset-0 focus-within:ring-0 hover:border-l-cyan-600 focus-visible:ring-0 data-[state=open]:border-l-cyan-600"
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
              className="h-6 w-6 rounded-full object-cover"
              src={getUserImgSrc(user.image?.id)}
            />
            {isSidebarOpen ? user.name : null}
          </NavLink>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="bg-slate-50 p-0.5 text-slate-800 shadow-sm"
        sideOffset={8}
      >
        <DropdownMenuItem
          asChild
          className="focus:bg-slate-200 focus:text-slate-800"
        >
          <Link prefetch="intent" to={$path("/profile")}>
            <Icon className="text-body-md" name="avatar">
              Profile
            </Icon>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="cursor-pointer focus:bg-slate-200 focus:text-slate-800"
          // this prevents the menu from closing before the form submission is completed
          onSelect={(event) => {
            event.preventDefault();
            submit(formRef.current);
          }}
        >
          <Form ref={formRef} action={$path("/logout")} method="POST">
            <Icon className="text-body-md" name="exit">
              <button type="submit">Logout</button>
            </Icon>
          </Form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
