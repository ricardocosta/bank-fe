import { defineConfig, devices } from "@playwright/test";

import "dotenv/config";

const PORT = process.env.PORT ?? "3000";

export default defineConfig({
  expect: {
    timeout: 5 * 1000,
  },
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
  reporter: "html",
  retries: process.env.CI ? 2 : 0,
  testDir: "./tests/e2e",
  timeout: 15 * 1000,
  use: {
    baseURL: `http://localhost:${PORT}/`,
    trace: "on-first-retry",
  },
  webServer: {
    command: process.env.CI ? "pnpm run start:mocks" : "pnpm run dev",
    env: {
      PORT,
    },
    port: Number(PORT),
    reuseExistingServer: !process.env.CI,
    stderr: "pipe",
    stdout: "pipe",
  },
  workers: process.env.CI ? 1 : undefined,
});
