import { invariantResponse } from "@epic-web/invariant";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";

import { GeneralErrorBoundary } from "#app/components/error-boundary";
import { Field } from "#app/components/forms.tsx";
import { Spacer } from "#app/components/spacer.tsx";
import { Button } from "#app/components/ui/button.tsx";
import {
  cache,
  getAllCacheKeys,
  lruCache,
  searchCacheKeys,
} from "#app/utils/cache.server.ts";
import { useDebounce, useDoubleCheck } from "#app/utils/misc.tsx";
import { requireUserWithRole } from "#app/utils/permissions.ts";

import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserWithRole(request, "admin");
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get("query");
  if (query === "") {
    searchParams.delete("query");
    return redirect(`/admin/cache?${searchParams.toString()}`);
  }
  const limit = Number(searchParams.get("limit") ?? 100);

  let cacheKeys: { sqlite: string[]; lru: string[] };
  if (typeof query === "string") {
    cacheKeys = searchCacheKeys(query, limit);
  } else {
    cacheKeys = getAllCacheKeys(limit);
  }
  return json({ cacheKeys });
}

export async function action({ request }: ActionFunctionArgs) {
  await requireUserWithRole(request, "admin");
  const formData = await request.formData();
  const key = formData.get("cacheKey");
  const type = formData.get("type");

  invariantResponse(typeof key === "string", "cacheKey must be a string");
  invariantResponse(typeof type === "string", "type must be a string");

  switch (type) {
    case "sqlite": {
      await cache.delete(key);
      break;
    }
    case "lru": {
      lruCache.delete(key);
      break;
    }
    default: {
      throw new Error(`Unknown cache type: ${type}`);
    }
  }
  return json({ success: true });
}

export default function CacheAdminRoute() {
  const data = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const query = searchParams.get("query") ?? "";
  const limit = searchParams.get("limit") ?? "100";

  const handleFormChange = useDebounce((form: HTMLFormElement) => {
    submit(form);
  }, 400);

  return (
    <div className="container">
      <h1 className="text-h1">Cache Admin</h1>
      <Spacer size="2xs" />
      <Form
        className="flex flex-col gap-4"
        method="get"
        onChange={(e) => handleFormChange(e.currentTarget)}
      >
        <div className="flex-1">
          <div className="flex flex-1 gap-4">
            <button
              className="flex h-16 items-center justify-center"
              type="submit"
            >
              🔎
            </button>
            <Field
              className="flex-1"
              inputProps={{
                type: "search",
                name: "query",
                defaultValue: query,
              }}
              labelProps={{ children: "Search" }}
            />
            <div className="flex h-16 w-14 items-center text-lg font-medium text-muted-foreground">
              <span title="Total results shown">
                {data.cacheKeys.sqlite.length + data.cacheKeys.lru.length}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Field
            inputProps={{
              name: "limit",
              defaultValue: limit,
              type: "number",
              step: "1",
              min: "1",
              max: "10000",
              placeholder: "results limit",
            }}
            labelProps={{
              children: "Limit",
            }}
          />
        </div>
      </Form>
      <Spacer size="2xs" />
      <div className="flex flex-col gap-4">
        <h2 className="text-h2">LRU Cache:</h2>
        {data.cacheKeys.lru.map((key) => (
          <CacheKeyRow key={key} cacheKey={key} type="lru" />
        ))}
      </div>
      <Spacer size="3xs" />
      <div className="flex flex-col gap-4">
        <h2 className="text-h2">SQLite Cache:</h2>
        {data.cacheKeys.sqlite.map((key) => (
          <CacheKeyRow key={key} cacheKey={key} type="sqlite" />
        ))}
      </div>
    </div>
  );
}

function CacheKeyRow({
  cacheKey,
  type,
}: {
  cacheKey: string;
  type: "sqlite" | "lru";
}) {
  const fetcher = useFetcher<typeof action>();
  const dc = useDoubleCheck();
  const encodedKey = encodeURIComponent(cacheKey);
  const valuePage = `/admin/cache/${type}/${encodedKey}`;
  return (
    <div className="flex items-center gap-2 font-mono">
      <fetcher.Form method="POST">
        <input name="cacheKey" type="hidden" value={cacheKey} />
        <input name="type" type="hidden" value={type} />
        <Button
          size="sm"
          variant="secondary"
          {...dc.getButtonProps({ type: "submit" })}
        >
          {fetcher.state === "idle"
            ? dc.doubleCheck
              ? "You sure?"
              : "Delete"
            : "Deleting..."}
        </Button>
      </fetcher.Form>
      <Link reloadDocument to={valuePage}>
        {cacheKey}
      </Link>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <GeneralErrorBoundary
      statusHandlers={{
        403: ({ error }) => (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          <p>You are not allowed to do that: {error?.data.message}</p>
        ),
      }}
    />
  );
}
