import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { z } from "zod";

import { cn } from "~/styles/classname.ts";

import { GeneralErrorBoundary } from "#app/components/error-boundary.tsx";
import { ErrorList } from "#app/components/forms.tsx";
import { SearchBar } from "#app/components/search-bar.tsx";
import { prisma } from "#app/utils/db/db.server";
import { getUserImgSrc, useDelayedIsPending } from "#app/utils/misc.tsx";

import type { LoaderFunctionArgs } from "@remix-run/node";

const UserSearchResultSchema = z.object({
  id: z.string(),
  imageId: z.string().nullable(),
  name: z.string().nullable(),
  username: z.string(),
});

const UserSearchResultsSchema = z.array(UserSearchResultSchema);

export async function loader({ request }: LoaderFunctionArgs) {
  const searchTerm = new URL(request.url).searchParams.get("search");
  if (searchTerm === "") {
    return redirect("/users");
  }

  const like = `%${searchTerm ?? ""}%`;
  const rawUsers = await prisma.$queryRaw`
		SELECT User.id, User.username, User.name, UserImage.id AS imageId
		FROM User
		LEFT JOIN UserImage ON User.id = UserImage.userId
		WHERE User.username LIKE ${like}
		OR User.name LIKE ${like}
		ORDER BY (
			SELECT Note.updatedAt
			FROM Note
			WHERE Note.ownerId = User.id
			ORDER BY Note.updatedAt DESC
			LIMIT 1
		) DESC
		LIMIT 50
	`;

  const result = UserSearchResultsSchema.safeParse(rawUsers);
  if (!result.success) {
    return json({ error: result.error.message, status: "error" } as const, {
      status: 400,
    });
  }
  return json({ status: "idle", users: result.data } as const);
}

export default function UsersRoute() {
  const data = useLoaderData<typeof loader>();
  const isPending = useDelayedIsPending({
    formAction: "/users",
    formMethod: "GET",
  });

  if (data.status === "error") {
    console.error(data.error);
  }

  return (
    <div className="container mb-48 mt-36 flex flex-col items-center justify-center gap-6">
      <h1 className="text-h1">Epic Notes Users</h1>
      <div className="w-full max-w-[700px] ">
        <SearchBar autoSubmit status={data.status} />
      </div>
      <main>
        {data.status === "idle" ? (
          data.users.length > 0 ? (
            <ul
              className={cn(
                "flex w-full flex-wrap items-center justify-center gap-4 delay-200",
                { "opacity-50": isPending },
              )}
            >
              {data.users.map((user) => (
                <li key={user.id}>
                  <Link
                    className="bg-muted flex h-36 w-44 flex-col items-center justify-center rounded-lg px-5 py-3"
                    to={user.username}
                  >
                    <img
                      alt={user.name ?? user.username}
                      className="size-16 rounded-full"
                      src={getUserImgSrc(user.imageId)}
                    />
                    {user.name ? (
                      <span className="text-body-md w-full truncate text-center">
                        {user.name}
                      </span>
                    ) : null}
                    <span className="text-body-sm text-muted-foreground w-full overflow-hidden text-ellipsis text-center">
                      {user.username}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No users found</p>
          )
        ) : data.status === "error" ? (
          <ErrorList errors={["There was an error parsing the results"]} />
        ) : null}
      </main>
    </div>
  );
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />;
}
