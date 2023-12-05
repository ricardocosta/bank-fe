import { redirect } from "@remix-run/node";

import { logout } from "#app/utils/auth.server.ts";

import type { DataFunctionArgs } from "@remix-run/node";

// redirect does not return a promise
// eslint-disable-next-line @typescript-eslint/require-await
export async function loader() {
  return redirect("/");
}

export async function action({ request }: DataFunctionArgs) {
  return logout({ request });
}
