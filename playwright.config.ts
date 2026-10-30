import { defineConfig, devices } from '@playwright/test';

/**
 * QA_Studies 全ページのスモーク E2E 用設定。
 * - testDir は ./e2e に限定し、bun test の対象 (tests/, scripts/) と分離する。
 * - webServer は本番ビルド (`bun run build && bun run start`) を自動起動し、
 *   Next.js dev overlay や Fast Refresh のコンソールノイズを排除する。
 * - ローカル反復は reuseExistingServer で既存サーバーを再利用する。
 * - サーバー不要のレイアウト回帰テストは playwright.layout.config.ts で実行する。
 */
export default defineConfig({
  testDir: './e2e',
  // .e2e.ts 拡張子に揃えることで `bun test` の自動検出 (*.test.ts / *.spec.ts) から確実に除外する。
  // サーバー必須のファイルのみ明示し、レイアウト回帰テストを並列実行に巻き込まない。
  testMatch: ['smoke.e2e.ts', 'a11y.e2e.ts', 'mermaid-layout.e2e.ts'],
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
    {
      // ホーム・メニューの操作検証。旧 library 専用設定と同じく直列で実行する
      name: 'library',
      testMatch: 'library.e2e.ts',
      workers: 1,
      use: { browserName: 'chromium' },
    },
  ],
  webServer: {
    command: 'bun run build && bun run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
