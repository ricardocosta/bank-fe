import type { SerializeFrom } from "@remix-run/node";

export type ActionType<A extends { type: string }> = SerializeFrom<A>["type"];
export type SubAction<A, T> = Extract<SerializeFrom<A>, { type: T }>;
