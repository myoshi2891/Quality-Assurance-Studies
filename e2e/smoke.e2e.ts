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

      if (p.uniqueText) {
        await expect(page.getByRole('heading', { level: 2, name: p.uniqueText })).toBeVisible();
      }

      await page.waitForLoadState('networkidle');

      expect(pageErrors, `pageerror events on ${p.path}`).toEqual([]);
      expect(consoleErrors, `console errors on ${p.path}`).toEqual([]);
    });
  }
});

test('ISO 2382 mobile drawer cycles focus and restores scrolling and interaction after TOC navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/iso-iec-2382-15-guide');

  const drawer = page.locator('.iso2382-page #sidebar');
  const toggle = page.locator('.iso2382-page #sidebarToggle');
  const main = page.locator('.iso2382-page main');
  // The responsive effect runs after hydration; wait before opening the drawer.
  await expect(drawer).toHaveAttribute('inert', '');
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(main).toHaveAttribute('inert', '');
  await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');

  await expect(page.getByRole('dialog', { name: '目次' })).toBeVisible();
  await expect(drawer).not.toHaveAttribute('aria-modal');
  const closeButton = drawer.getByRole('button', { name: '目次を閉じる' });
  await expect(closeButton).toBeInViewport();
  const links = drawer.getByRole('link');
  await expect(links.first()).toBeFocused();
  for (let i = 1; i < await links.count(); i++) {
    await page.keyboard.press('Tab');
    await expect(links.nth(i)).toBeFocused();
  }
  await page.keyboard.press('Tab');
  await expect(closeButton).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(links.first()).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(closeButton).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(links.last()).toBeFocused();

  await drawer.locator('a[href="#sec-36"]').click();
  await expect(page).toHaveURL(/#sec-36$/);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(drawer).toHaveAttribute('inert', '');
  await expect(main).not.toHaveAttribute('inert', '');
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
  await expect(main.locator('#sec-36')).toBeInViewport();
  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);

  await toggle.click();
  await drawer.getByRole('button', { name: '目次を閉じる' }).click();
  await expect(toggle).toBeFocused();
  await expect(drawer).not.toHaveAttribute('role');

  // Real wheel input must move the document after the drawer releases its lock.
  await main.locator('#sec-36').hover();
  const scrollY = await page.evaluate(() => window.scrollY);
  await page.mouse.wheel(0, 300);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(scrollY + 100);

  const checkbox = main.getByRole('checkbox').first();
  await checkbox.check();
  await expect(checkbox).toBeChecked();
  await expect(main.getByRole('status')).toHaveText('1 / 5');
  await page.keyboard.press('Space');
  await expect(checkbox).not.toBeChecked();
  await expect(main.getByRole('status')).toHaveText('0 / 5');
});
