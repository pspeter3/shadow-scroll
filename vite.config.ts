/// <reference types="vitest/config" />
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { coverageConfigDefaults } from "vitest/config";

export default defineConfig({
  plugins: [
    !process.env.VITEST && reactRouter(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  test: {
    coverage: {
      enabled: true,
      exclude: coverageConfigDefaults.exclude.concat([
        "*.config.ts",
        "build/**/*.js",
        "app/routes.ts",
        "app/root.tsx",
      ]),
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
    environment: "happy-dom",
    setupFiles: ["./app/utils/setup.ts"],
  },
});
