import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { NAV_ITEMS } from '../lib/navigation';

const total = NAV_ITEMS.length - 1;
for (const width of [320, 390, 768, 1440]) {
  test.describe(`Library at ${width}px`, () => {
    test.use({ viewport: { width, height: 900 } });

    test('filters, recovers empty results and follows the learning map', async ({ page }) => {
      await page.goto('/', { waitUntil: 'networkidle' });
      await expect(page.locator('a.guide-card')).toHaveCount(total);
      await expect(page.locator('.ladder-label').first()).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.getByRole('button', { name: /ISO 国際規格/ }).click();
      await expect(page.locator('a.guide-card')).toHaveCount(NAV_ITEMS.filter(i => i.category === 'iso').length);
      await page.getByRole('searchbox', { name: 'ガイドを検索' }).fill('cypress');
      await expect(page.locator('a.guide-card')).toHaveCount(0);
      await page.getByRole('button', { name: '絞り込みをリセット' }).click();
      await expect(page.locator('a.guide-card')).toHaveCount(total);
      await page.getByRole('searchbox', { name: 'ガイドを検索' }).fill('cypress');
      await page.locator('[data-ladder-rung][data-category="foundation"]').click();
      await expect(page.locator('#foundation')).toBeVisible();
      await expect.poll(async () => (await page.locator('#foundation').boundingBox())?.y ?? Infinity).toBeLessThan(300);
      await expect(page.getByRole('searchbox', { name: 'ガイドを検索' })).toHaveValue('');
      await page.screenshot({ path: `test-results/library-${width}.png`, fullPage: false });
    });

    test('searches the modal, traps keyboard focus, closes and navigates', async ({ page }) => {
      await page.goto('/', { waitUntil: 'networkidle' });
      const open = page.getByRole('button', { name: 'メニューを開く' });
      await open.click();
      const dialog = page.getByRole('dialog');
      const search = dialog.getByRole('searchbox');
      await expect(search).toBeFocused();
      await expect(dialog).toHaveCSS('opacity', '1');
      const close = dialog.getByRole('button', { name: 'ナビゲーションを閉じる' });
      await close.focus();
      await page.keyboard.press('Shift+Tab');
      await expect(dialog.locator('summary').last()).toBeFocused();
      await page.keyboard.press('Tab');
      await expect(close).toBeFocused();
      await search.fill('cypress');
      await expect(dialog.getByRole('status')).toContainText('1 件');
      await expect(dialog.locator('.nav-guide-description')).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(open).toBeFocused();
      await open.click();
      await search.fill('cypress');
      await expect(dialog).toHaveCSS('opacity', '1');
      await page.screenshot({ path: `test-results/library-menu-${width}.png` });
      await dialog.getByRole('link', { name: 'Cypress 入門ガイド' }).click();
      await expect(page).toHaveURL(/\/cypress-beginner-guide$/);
      await expect(dialog).toHaveCount(0);
      expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden');
    });

    test('passes accessibility checks on home and the open menu', async ({ page }) => {
      await page.goto('/', { waitUntil: 'networkidle' });
      const home = await new AxeBuilder({ page }).include('.index-page').analyze();
      expect(home.violations).toEqual([]);
      await page.getByRole('button', { name: 'メニューを開く' }).click();
      await expect(page.getByRole('dialog')).toHaveCSS('opacity', '1');
      const menu = await new AxeBuilder({ page }).include('.nav-header').analyze();
      expect(menu.violations).toEqual([]);
    });
  });
}
