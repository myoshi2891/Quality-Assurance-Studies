import { defineConfig, devices } from '@playwright/test';

/**
 * QA_Studies 全ページのスモーク E2E 用設定。
 * - testDir は ./e2e に限定し、bun test の対象 (tests/, scripts/) と分離する。
 * - webServer は本番ビルド (`bun run build && bun run start`) を自動起動し、
 *   Next.js dev overlay や Fast Refresh のコンソールノイズを排除する。
 * - ローカル反復は reuseExistingServer で既存サーバーを再利用する。
 */
export default defineConfig({
  testDir: './e2e',
  // .e2e.ts 拡張子に揃えることで `bun test` の自動検出 (*.test.ts / *.spec.ts) から確実に除外する。
  testMatch: /.*\.e2e\.ts$/,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'bun run build && bun run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
