import { test, expect, type ConsoleMessage } from '@playwright/test';
import { PAGES, EXPECTED_PAGE_COUNT } from './pages';

/**
 * 既知の無害なコンソール出力は失敗扱いにしない。
 * Hydration 警告や React の重大エラーは allowlist に含めず、必ず失敗させる。
 */
const CONSOLE_ERROR_ALLOWLIST: readonly RegExp[] = [
  /favicon\.ico/i,
  /ResizeObserver loop completed/i,
  /Download the React DevTools/i,
];

const isAllowedConsoleError = (msg: ConsoleMessage): boolean => {
  if (msg.type() !== 'error') return true;
  const text = msg.text();
  return CONSOLE_ERROR_ALLOWLIST.some((re) => re.test(text));
};

test.describe('smoke: all pages', () => {
  test('PAGES の件数が app/**/page.tsx と一致する (ドリフト検知)', () => {
    expect(PAGES.length).toBe(EXPECTED_PAGE_COUNT);
  });

  for (const p of PAGES) {
    test(`${p.path} renders without console errors`, async ({ page }) => {
      const consoleErrors: string[] = [];
      const pageErrors: string[] = [];

      page.on('console', (msg) => {
        if (!isAllowedConsoleError(msg)) {
          consoleErrors.push(`[${msg.type()}] ${msg.text()}`);
        }
      });
      page.on('pageerror', (err) => {
        pageErrors.push(err.message);
      });

      const response = await page.goto(p.path);
      expect(response, `goto ${p.path} should return a response`).not.toBeNull();
      expect(response?.status(), `HTTP status for ${p.path}`).toBe(200);

      // ロゴリンクと h1 見出しが一意に存在し、可視であることを検証する (Headerの二重レンダは解消済み)。
      await expect(page.getByRole('link', { name: 'QA_STUDIES' })).toBeVisible();
      await expect(page.getByRole('heading', { level: 1, name: p.h1 })).toBeVisible();

      await page.waitForLoadState('networkidle');

      expect(pageErrors, `pageerror events on ${p.path}`).toEqual([]);
      expect(consoleErrors, `console errors on ${p.path}`).toEqual([]);
    });
  }
});
