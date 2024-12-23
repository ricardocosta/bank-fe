import { Form, Link } from "@remix-run/react";
import { formatISO9075, parseISO } from "date-fns";

import { Spacer } from "#app/components/spacer.tsx";
import { Button } from "#app/components/ui/button.tsx";
import { Icon } from "#app/components/ui/icon.tsx";
import { requireUserId } from "#app/utils/auth.server";
import { routeLoaderData } from "#app/utils/meta";
import { getUserImgSrc } from "#app/utils/misc.tsx";
import { useUser } from "#app/utils/user.ts";

import type { LoaderFunctionArgs } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction<typeof loader> = ({ matches }) => {
  const rootData = routeLoaderData(matches, "root");
  const displayName = rootData.user?.name;
  return [
    { title: `Profile | ${displayName}` },
    {
      content: `Profile of ${displayName}`,
      name: "description",
    },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserId(request);

  return null;
}

export default function ProfileRoute() {
  const user = useUser();
  const userDisplayName = user.name ?? user.username;

  return (
    <div className="container mb-48 mt-36 flex flex-col items-center justify-center">
      <Spacer size="4xs" />

      <div className="bg-muted container flex flex-col items-center rounded-3xl p-12">
        <div className="relative w-52">
          <div className="absolute -top-40">
            <div className="relative">
              <img
                alt={userDisplayName}
                className="size-52 rounded-full object-cover"
                src={getUserImgSrc(user.image?.id)}
              />
            </div>
          </div>
        </div>

        <Spacer size="sm" />

        <div className="flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <h1 className="text-h2 text-center">{userDisplayName}</h1>
          </div>
          <p className="text-muted-foreground mt-2 text-center">
            Joined {formatISO9075(parseISO(user.createdAt))}
          </p>

          <Form action="/logout" className="mt-3" method="POST">
            <Button size="pill" type="submit" variant="link">
              <Icon className="scale-125 max-md:scale-150" name="exit">
                Logout
              </Icon>
            </Button>
          </Form>

          <div className="mt-10 flex gap-4">
            <Button
              render={
                <Link prefetch="intent" to="/settings/profile">
                  Edit profile
                </Link>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
