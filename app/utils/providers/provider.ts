import type { Strategy } from "remix-auth";

import type { Timings } from "../timing.server.ts";

// Define a user type for cleaner typing
export type ProviderUser = {
  id: string;
  email: string;
  username?: string;
  name?: string;
  imageUrl?: string;
};

export type AuthProvider = {
  getAuthStrategy(): Strategy<ProviderUser, never>;
  handleMockAction(request: Request): Promise<void>;
  resolveConnectionData(
    providerId: string,
    options?: { timings?: Timings },
  ): Promise<{
    displayName: string;
    link?: string | null;
  }>;
};
