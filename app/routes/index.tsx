import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Epic Notes" }];

export default function Index() {
  return (
    <main className="font-heading flex w-full items-center justify-center">
      <p>Landing page</p>
    </main>
  );
}
