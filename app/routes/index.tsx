import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Epic Notes" }];

export default function Index() {
  return (
    <main className="flex w-full items-center justify-center font-heading">
      <p>Landing page</p>
    </main>
  );
}
