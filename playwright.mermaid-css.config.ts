import { defineConfig } from '@playwright/test';

// Layout regression tests load the repository CSS with setContent; no server or build.
export default defineConfig({
  testDir: './e2e',
  testMatch: 'ct-genai-study-mermaid-css.e2e.ts',
  workers: 1,
  reporter: 'list',
  use: {
    browserName: 'chromium',
    headless: true,
    launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE },
  },
});
