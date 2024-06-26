import { createCookieSessionStorage } from "@remix-run/node";

import type {
  rememberKey,
  unverifiedSessionIdKey,
} from "#app/routes/_auth+/login.tsx";
import type { onboardingEmailSessionKey } from "#app/routes/_auth+/onboarding.tsx";
import type { resetPasswordUsernameSessionKey } from "#app/routes/_auth+/reset-password.tsx";
import type { newEmailAddressSessionKey } from "#app/routes/settings+/profile.change-email.tsx";

export const verifySessionStorage = createCookieSessionStorage<{
  [newEmailAddressSessionKey]: string;
  [resetPasswordUsernameSessionKey]: string;
  [onboardingEmailSessionKey]: string;
  [unverifiedSessionIdKey]: string;
  [rememberKey]: boolean;
}>({
  cookie: {
    name: "en_verification",
    sameSite: "lax", // CSRF protection is advised if changing to 'none'
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10, // 10 minutes
    secrets: process.env.SESSION_SECRET.split(","),
    secure: process.env.NODE_ENV === "production",
  },
});
