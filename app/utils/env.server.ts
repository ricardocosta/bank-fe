import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["production", "development", "test"] as const),
  DATABASE_URL: z.string(),
  CACHE_DATABASE_PATH: z.string(),
  SESSION_SECRET: z.string(),
  INTERNAL_COMMAND_TOKEN: z.string(),
  HONEYPOT_SECRET: z.string(),
  // If you plan to use Resend, uncomment this line
  // RESEND_API_KEY: z.string(),
  ADMIN_EMAIL: z.string().optional(),
  ADMIN_NAME: z.string().optional(),
  ADMIN_PASSWORD: z.string().optional(),
  ADMIN_USERNAME: z.string().optional(),
});

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/no-empty-interface
    interface ProcessEnv extends z.infer<typeof schema> {}
  }
}

export function init() {
  const parsed = schema.safeParse(process.env);

  if (parsed.success === false) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors,
    );

    throw new Error("Invalid environment variables");
  }
}

/**
 * This is used in both `entry.server.ts` and `root.tsx` to ensure that
 * the environment variables are set and globally available before the app is
 * started.
 *
 * NOTE: Do *not* add any environment variables in here that you do not wish to
 * be included in the client.
 * @returns all public ENV variables
 */
export function getEnv() {
  return {
    MODE: process.env.NODE_ENV,
  };
}

type ENV = ReturnType<typeof getEnv>;

declare global {
  // eslint-disable-next-line no-var
  var ENV: ENV;
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    ENV: ENV;
  }
}
