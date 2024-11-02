/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  css: { postcss: { plugins: [] } },
  plugins: [react()],
  test: {
    coverage: {
      include: ["app/**/*.{ts,tsx}"],
      reporter: [
        // Save to a text file so that we can use it in Github action summary
        ["text", { file: "coverage.txt" }],
      ],
    },
    environment: "jsdom",
    globalSetup: ["./tests/setup/global-setup.ts"],
    globals: true,
    include: ["./app/**/*.test.{ts,tsx}"],
    restoreMocks: true,
    setupFiles: ["./tests/setup/setup-test-env.ts"],
  },
});
