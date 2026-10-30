import { defineConfig, type PlaywrightTestConfig } from '@playwright/test';

/**
 * サーバー・ビルド不要のレイアウト回帰テスト用設定（原本CSS/SVGとの比較）。
 * - 新しいページの比較テストは設定ファイルを増やさず、LAYOUT_SUITES に 1 件追加する。
 * - 単独実行: `bun run e2e:layout --project=<suite>`
 * - サーバー必須のテストは playwright.config.ts 側に置く。
 */
const layoutUse: PlaywrightTestConfig['use'] = {
  browserName: 'chromium',
  headless: true,
  launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE },
};

// name はプロジェクト名（--project の値）、testMatch は e2e/ 配下のファイル名
const LAYOUT_SUITES: ReadonlyArray<{ name: string; testMatch: string | string[]; use?: PlaywrightTestConfig['use'] }> = [
  {
    name: 'mermaid-css',
    testMatch: [
      'ct-genai-study-mermaid-css.e2e.ts',
      'ctal-tae-ch6-mermaid-colors.e2e.ts',
      'ctal-tae-ch7-mermaid-colors.e2e.ts',
      'ctal-tae-ch7-learning-ui.e2e.ts',
      'ctal-tae-code-layout.e2e.ts',
      'quality-is-free-layout.e2e.ts',
    ],
  },
  { name: 'iec-62304', testMatch: 'iec-62304-layout.e2e.ts' },
  { name: 'iso-9075', testMatch: 'iso-9075-layout.e2e.ts' },
  { name: 'iso-11179', testMatch: 'iso-11179-layout.e2e.ts' },
  { name: 'wewlc', testMatch: 'wewlc-layout.e2e.ts' },
  { name: 'tcs', testMatch: 'tcs-layout.e2e.ts' },
  { name: 'craftsman', testMatch: 'craftsman-layout.e2e.ts' },
  { name: 'sbe', testMatch: 'sbe-layout.e2e.ts' },
  { name: 'iso-14496-22', testMatch: 'iso-14496-22-layout.e2e.ts' },
  { name: 'iso-19770-5', testMatch: 'iso-19770-5-layout.e2e.ts' },
  { name: 'iso-23009-1-2026', testMatch: 'iso-23009-1-2026-layout.e2e.ts' },
  { name: 'iso-27799-2025', testMatch: 'iso-27799-2025-layout.e2e.ts' },
  { name: 'iso-30130', testMatch: 'iso-30130-layout.e2e.ts' },
  // 移行時の検証環境に合わせ、インストール済み Chrome で実行する
  { name: 'iso-iec-5338', testMatch: 'iso-iec-5338-layout.e2e.ts', use: { channel: 'chrome' } },
];

export default defineConfig({
  testDir: './e2e',
  workers: 1,
  reporter: 'list',
  projects: LAYOUT_SUITES.map(({ name, testMatch, use }) => ({
    name,
    testMatch,
    use: { ...layoutUse, ...use },
  })),
});
