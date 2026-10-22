import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  testMatch: 'library.e2e.ts',
  workers: 1,
  reporter: 'list',
  use: { baseURL: 'http://localhost:3001', browserName: 'chromium' },
  webServer: {
    command: 'bun run dev --hostname 127.0.0.1 --port 3001',
    url: 'http://localhost:3001',
    reuseExistingServer: !process.env.CI,
  },
});
