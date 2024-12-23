import { vitePlugin as remix } from "@remix-run/dev";
import { flatRoutes } from "remix-flat-routes";
import { remixRoutes } from "remix-routes/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const MODE = process.env.NODE_ENV;

export default defineConfig({
  build: {
    cssMinify: MODE === "production",
    rollupOptions: {
      external: [/node:.*/, "stream", "crypto", "fsevents"],
    },
    sourcemap: true,
  },
  plugins: [
    tsconfigPaths(),
    remix({
      ignoredRouteFiles: ["**/*"],
      routes: (defineRoutes) => {
        return flatRoutes("routes", defineRoutes, {
          ignoredRouteFiles: [
            ".*",
            "**/*.css",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__*.*",
            // This is for server-side utilities you want to colocate next to
            // your routes without making an additional directory.
            // If you need a route that includes "server" or "client" in the
            // filename, use the escape brackets like: my-route.[server].tsx
            "**/*.server.*",
            "**/*.client.*",
          ],
        });
      },
      serverModuleFormat: "esm",
    }),
    remixRoutes(),
  ],
});
