import { defineConfig } from "vitest/config";
import tsConfigPaths from "vite-tsconfig-paths";
import packageJson from "../package.json";

export default defineConfig({
  test: {
    globals: true,
    passWithNoTests: true,
    testTimeout: 120 * 1000,
    printConsoleTrace: true,
    setupFiles: ["./tests/setup.examples.ts"],
    deps: {
      interopDefault: false,
    },
    maxConcurrency: 10,
  },
  define: {
    __LIBRARY_VERSION: JSON.stringify(packageJson.version),
  },
  plugins: [
    tsConfigPaths({
      projects: ["tsconfig.json"],
    }),
  ],
});