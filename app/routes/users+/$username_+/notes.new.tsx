import { json } from "@remix-run/node";

import { requireUserId } from "#app/utils/auth.server.ts";

import { action, NoteEditor } from "./__note-editor.tsx";

import type { DataFunctionArgs } from "@remix-run/server-runtime";

export async function loader({ request }: DataFunctionArgs) {
  await requireUserId(request);
  return json({});
}

export { action };
export default NoteEditor;
