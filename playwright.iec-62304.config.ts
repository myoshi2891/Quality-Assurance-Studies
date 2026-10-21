import { defineConfig } from '@playwright/test';
// Source/CSS regression checks only; no webServer and no production build.
export default defineConfig({
    testDir: './e2e', testMatch: 'iec-62304-layout.e2e.ts', workers: 1, reporter: 'list',
    use: { browserName: 'chromium', headless: true, launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE } },
});
