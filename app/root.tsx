import { parseWithZod } from "@conform-to/zod";
import { invariantResponse } from "@epic-web/invariant";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { HoneypotProvider } from "remix-utils/honeypot/react";
import { namedAction } from "remix-utils/named-action";

import { SidebarStateFormSchema } from "#app/components/sidebar/schema.ts";
import {
  getSidebarState,
  setSidebarState,
} from "#app/components/sidebar/sidebar.server.ts";
import { Sidebar } from "#app/components/sidebar/sidebar.tsx";
import { useToast } from "#app/components/toaster.tsx";
import { Flex, Inline, Stack } from "#app/components/ui/layout";
import { EpicToaster } from "#app/components/ui/sonner.tsx";
import { TooltipProvider } from "#app/components/ui/tooltip.tsx";
import { Document } from "#app/layout/document.tsx";
import { ThemeFormSchema } from "#app/theme/schema.ts";
import { getTheme, setTheme } from "#app/theme/theme.server.ts";
import { useTheme } from "#app/theme/useTheme.ts";

import { GeneralErrorBoundary } from "./components/error-boundary.tsx";
import { EpicProgress } from "./components/progress-bar.tsx";
import { Button } from "./components/ui/button.tsx";
import { href as iconsHref } from "./components/ui/icon.tsx";
import tailwindStyleSheetUrl from "./styles/tailwind.css?url";
import { getUserId, logout } from "./utils/auth.server.ts";
import { getHints } from "./utils/client-hints.tsx";
import { prisma } from "./utils/db/db.server.ts";
import { getEnv } from "./utils/env.server.ts";
import { honeypot } from "./utils/honeypot.server.ts";
import { combineHeaders, getDomainUrl } from "./utils/misc.tsx";
import { useNonce } from "./utils/nonce-provider.ts";
import { makeTimings, time } from "./utils/timing.server.ts";
import { getToast } from "./utils/toast.server.ts";
import { useOptionalUser } from "./utils/user.ts";

import type {
  ActionFunctionArgs,
  HeadersFunction,
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    // Preload svg sprite as a resource to avoid render blocking
    { rel: "preload", href: iconsHref, as: "image" },
    { rel: "mask-icon", href: "/favicons/mask-icon.svg" },
    {
      rel: "alternate icon",
      type: "image/png",
      href: "/favicons/favicon-32x32.png",
    },
    { rel: "apple-touch-icon", href: "/favicons/apple-touch-icon.png" },
    {
      rel: "manifest",
      href: "/site.webmanifest",
      crossOrigin: "use-credentials",
    } as const, // necessary to make typescript happy
    //These should match the css preloads above to avoid css as render blocking resource
    { rel: "icon", type: "image/svg+xml", href: "/favicons/favicon.svg" },
    { rel: "stylesheet", href: tailwindStyleSheetUrl },
  ].filter(Boolean);
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data ? "Epic Notes" : "Error | Epic Notes" },
    { name: "description", content: `Your own captain's log` },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const timings = makeTimings("root loader");
  const userId = await time(() => getUserId(request), {
    timings,
    type: "getUserId",
    desc: "getUserId in root",
  });

  const user = userId
    ? await time(
        () =>
          prisma.user.findUniqueOrThrow({
            select: {
              id: true,
              name: true,
              username: true,
              createdAt: true,
              image: { select: { id: true } },
              roles: {
                select: {
                  name: true,
                  permissions: {
                    select: { entity: true, action: true, access: true },
                  },
                },
              },
            },
            where: { id: userId },
          }),
        { timings, type: "find user", desc: "find user in root" },
      )
    : null;
  if (userId && !user) {
    console.info("something weird happened");
    // something weird happened... The user is authenticated but we can't find
    // them in the database. Maybe they were deleted? Let's log them out.
    await logout({ request, redirectTo: "/" });
  }
  const { toast, headers: toastHeaders } = await getToast(request);
  const honeyProps = honeypot.getInputProps();

  return json(
    {
      user,
      requestInfo: {
        hints: getHints(request),
        origin: getDomainUrl(request),
        path: new URL(request.url).pathname,
        userPrefs: {
          theme: getTheme(request),
          sidebarState: getSidebarState(request),
        },
      },
      ENV: getEnv(),
      toast,
      honeyProps,
    },
    {
      headers: combineHeaders(
        { "Server-Timing": JSON.stringify(timings) },
        toastHeaders,
      ),
    },
  );
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const headers = {
    "Server-Timing": loaderHeaders.get("Server-Timing") ?? "",
  };
  return headers;
};

export async function action({ request }: ActionFunctionArgs) {
  return namedAction(request, {
    async switchTheme() {
      const formData = await request.formData();
      const submission = parseWithZod(formData, {
        schema: ThemeFormSchema,
      });

      invariantResponse(
        submission.status === "success",
        "Invalid theme received",
      );

      const { theme } = submission.value;

      return json(
        { result: submission.reply(), type: "theme-switch" as const },
        { headers: { "set-cookie": setTheme(theme) } },
      );
    },
    async toggleSidebar() {
      const formData = await request.formData();
      const submission = parseWithZod(formData, {
        schema: SidebarStateFormSchema,
      });

      invariantResponse(
        submission.status === "success",
        "Invalid sidebar state received",
      );

      const { sidebarState } = submission.value;

      return json(
        { result: submission.reply(), type: "sidebar-toggle" as const },
        {
          headers: { "set-cookie": setSidebarState(sidebarState) },
        },
      );
    },
  });
}

function App() {
  const data = useLoaderData<typeof loader>();
  const nonce = useNonce();
  const user = useOptionalUser();
  const theme = useTheme();

  useToast(data.toast);

  return (
    <Document env={data.ENV} nonce={nonce} theme={theme}>
      <Stack className="h-screen" gap="none">
        {user ? (
          <Inline className="h-screen w-full" gap="none">
            <Sidebar userPreference={data.requestInfo.userPrefs.sidebarState} />
            <Flex className="h-screen w-full overflow-auto" gap="none">
              <Outlet />
            </Flex>
          </Inline>
        ) : (
          <Stack align="center" className="w-full" gap="none">
            <header className="container py-6">
              <Flex
                align="center"
                as="nav"
                gap="xlarge"
                justify="between"
                wrap="wrap"
              >
                <Link to="/">
                  <p>Logo</p>
                </Link>

                <Button asChild size="sm" variant="default">
                  <Link to="/login">Log In</Link>
                </Button>
              </Flex>
            </header>
            <Outlet />
          </Stack>
        )}
      </Stack>
      <EpicToaster closeButton position="top-center" theme={theme} />
      <EpicProgress />
    </Document>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <HoneypotProvider {...data.honeyProps}>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </HoneypotProvider>
  );
}

export function ErrorBoundary() {
  // the nonce doesn't rely on the loader so we can access that
  const nonce = useNonce();

  // NOTE: you cannot use useLoaderData in an ErrorBoundary because the loader
  // likely failed to run so we have to do the best we can.
  // We could probably do better than this (it's possible the loader did run).
  // This would require a change in Remix.

  // Just make sure your root route never errors out and you'll always be able
  // to give the user a better UX.

  return (
    <Document nonce={nonce}>
      <GeneralErrorBoundary />
    </Document>
  );
}
