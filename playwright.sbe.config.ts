import { defineConfig } from '@playwright/test';
// Source design regression checks; starts no server and performs no build.
export default defineConfig({
    testDir: './e2e',
    testMatch: 'sbe-layout.e2e.ts',
    workers: 1,
    reporter: 'list',
    use: {
        browserName: 'chromium',
        headless: true,
        launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE },
    },
});
