import { json } from "@remix-run/node";

import { requireUserId } from "#app/utils/auth.server.ts";

import { action, NoteEditor } from "./__note-editor.tsx";

import type { LoaderFunctionArgs } from "@remix-run/server-runtime";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserId(request);
  return json({});
}

export { action };
export default NoteEditor;
