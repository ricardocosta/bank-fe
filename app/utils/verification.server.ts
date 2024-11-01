import { createCookieSessionStorage } from "@remix-run/node";

import type {
  rememberKey,
  unverifiedSessionIdKey,
} from "#app/routes/_auth+/login.tsx";
import type { onboardingEmailSessionKey } from "#app/routes/_auth+/onboarding.tsx";
import type { resetPasswordUsernameSessionKey } from "#app/routes/_auth+/reset-password.tsx";
import type { newEmailAddressSessionKey } from "#app/routes/settings+/profile.change-email.server.tsx";

export const verifySessionStorage = createCookieSessionStorage<{
  [newEmailAddressSessionKey]: string;
  [resetPasswordUsernameSessionKey]: string;
  [onboardingEmailSessionKey]: string;
  [unverifiedSessionIdKey]: string;
  [rememberKey]: boolean;
}>({
  cookie: {
    httpOnly: true,
    maxAge: 60 * 10, // 10 minutes
    name: "en_verification",
    path: "/",
    sameSite: "lax", // CSRF protection is advised if changing to 'none'
    secrets: process.env.SESSION_SECRET.split(","),
    secure: process.env.NODE_ENV === "production",
  },
});
