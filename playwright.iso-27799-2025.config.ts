import { defineConfig } from '@playwright/test';
// Source/CSS regression checks only; no webServer and no production build.
export default defineConfig({
    testDir: './e2e', testMatch: 'iso-27799-2025-layout.e2e.ts', workers: 1, reporter: 'list',
    use: { browserName: 'chromium', headless: true, launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE } },
});
