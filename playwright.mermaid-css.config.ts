import { defineConfig } from '@playwright/test';

// Layout regression tests load the repository CSS with setContent; no server or build.
export default defineConfig({
  testDir: './e2e',
  testMatch: ['ct-genai-study-mermaid-css.e2e.ts', 'ctal-tae-ch6-mermaid-colors.e2e.ts', 'ctal-tae-ch7-mermaid-colors.e2e.ts','ctal-tae-ch7-learning-ui.e2e.ts', 'ctal-tae-code-layout.e2e.ts', 'quality-is-free-layout.e2e.ts'],
  workers: 1,
  reporter: 'list',
  use: {
    browserName: 'chromium',
    headless: true,
    launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE },
  },
});
