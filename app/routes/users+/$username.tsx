import { invariantResponse } from "@epic-web/invariant";
import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

import { GeneralErrorBoundary } from "#app/components/error-boundary.tsx";
import { Spacer } from "#app/components/spacer.tsx";
import { Button } from "#app/components/ui/button.tsx";
import { Icon } from "#app/components/ui/icon.tsx";
import { prisma } from "#app/utils/db/db.server";
import { getUserImgSrc } from "#app/utils/misc.tsx";
import { useOptionalUser } from "#app/utils/user.ts";

import type { LoaderFunctionArgs } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const user = await prisma.user.findFirst({
    select: {
      id: true,
      name: true,
      username: true,
      createdAt: true,
      image: { select: { id: true } },
    },
    where: {
      username: params.username,
    },
  });

  invariantResponse(user, "User not found", { status: 404 });

  return json({ user, userJoinedDisplay: user.createdAt.toLocaleDateString() });
}

export default function ProfileRoute() {
  const data = useLoaderData<typeof loader>();
  const user = data.user;
  const userDisplayName = user.name ?? user.username;
  const loggedInUser = useOptionalUser();
  const isLoggedInUser = data.user.id === loggedInUser?.id;

  return (
    <div className="container mb-48 mt-36 flex flex-col items-center justify-center">
      <Spacer size="4xs" />

      <div className="container flex flex-col items-center rounded-3xl bg-muted p-12">
        <div className="relative w-52">
          <div className="absolute -top-40">
            <div className="relative">
              <img
                alt={userDisplayName}
                className="h-52 w-52 rounded-full object-cover"
                src={getUserImgSrc(data.user.image?.id)}
              />
            </div>
          </div>
        </div>

        <Spacer size="sm" />

        <div className="flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <h1 className="text-center text-h2">{userDisplayName}</h1>
          </div>
          <p className="mt-2 text-center text-muted-foreground">
            Joined {data.userJoinedDisplay}
          </p>
          {isLoggedInUser ? (
            <Form action="/logout" className="mt-3" method="POST">
              <Button size="pill" type="submit" variant="link">
                <Icon className="scale-125 max-md:scale-150" name="exit">
                  Logout
                </Icon>
              </Button>
            </Form>
          ) : null}
          <div className="mt-10 flex gap-4">
            {isLoggedInUser ? (
              <>
                <Button
                  render={
                    <Link prefetch="intent" to="notes">
                      My notes
                    </Link>
                  }
                />
                <Button
                  render={
                    <Link prefetch="intent" to="/settings/profile">
                      Edit profile
                    </Link>
                  }
                />
              </>
            ) : (
              <Button
                render={
                  <Link prefetch="intent" to="notes">
                    {`${userDisplayName}'s notes`}
                  </Link>
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  const displayName = data?.user.name ?? params.username;
  return [
    { title: `${displayName} | Epic Notes` },
    {
      name: "description",
      content: `Profile of ${displayName} on Epic Notes`,
    },
  ];
};

export function ErrorBoundary() {
  return (
    <GeneralErrorBoundary
      statusHandlers={{
        404: ({ params }) => (
          <p>{`No user with the username "${params.username}" exists`}</p>
        ),
      }}
    />
  );
}
