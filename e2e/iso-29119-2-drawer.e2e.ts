import { test, expect } from '@playwright/test';

test('ISO 29119-2 mobile drawer handles native Tab navigation, focus restoration, inert background, and desktop transition', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/iso-29119-2-test-processes-guide');

  const drawer = page.getByRole('navigation', { name: '目次', includeHidden: true });
  const trigger = page.getByRole('button', { name: 'menu', exact: true });
  const main = page.locator('.iso29119-2-page main.main');

  // The responsive effect marks the closed drawer inert after hydration.
  await expect(drawer).toHaveAttribute('inert', '');
  await trigger.click();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await expect(main).toHaveAttribute('inert', '');

  const dialog = page.getByRole('dialog', { name: '目次', exact: true });
  await expect(dialog).toHaveAttribute('aria-modal', 'true');
  await expect(dialog.getByRole('button', { name: 'menu', exact: true })).toBeVisible();

  const header = page.getByRole('navigation', { name: 'グローバルナビゲーション', includeHidden: true });
  await expect(header).toBeVisible();
  expect(await header.evaluate(element => !!element.closest('[inert]'))).toBe(true);

  const links = drawer.getByRole('link');
  const count = await links.count();
  expect(count).toBeGreaterThan(1);
  await expect(links.first()).toBeFocused();

  // Native focus attempts into the inert header and main content must be blocked.
  const headerControl = header.locator('a[href], button').first();
  await headerControl.evaluate((element: HTMLElement) => element.focus());
  await expect(links.first()).toBeFocused();

  const backgroundControl = main.locator('a[href], button, input').first();
  await expect(backgroundControl).toBeAttached();
  await backgroundControl.evaluate((element: HTMLElement) => element.focus());
  await expect(links.first()).toBeFocused();

  // Native Tab / Shift+Tab wraps between the first link, last link, and close trigger.
  await page.keyboard.press('Shift+Tab');
  await expect(trigger).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(links.last()).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(trigger).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(links.first()).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(links.nth(1)).toBeFocused();

  // Escape closes the drawer, restores focus to trigger, and clears inert on background.
  await page.keyboard.press('Escape');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(drawer).toHaveAttribute('inert', '');
  await expect(main).not.toHaveAttribute('inert', '');
  await expect(trigger).toBeFocused();
  expect(await header.evaluate(element => !!element.closest('[inert]'))).toBe(false);

  // Reopen the drawer on mobile, then resize to desktop while open.
  await trigger.click();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await expect(dialog).toHaveAttribute('aria-modal', 'true');
  await expect(drawer).toBeVisible();
  await expect(main).toHaveAttribute('inert', '');

  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(dialog).toHaveCount(0);
  await expect(page.locator('#tgl')).toHaveAttribute('aria-expanded', 'false');
  await expect(drawer).not.toHaveAttribute('inert', '');
  await expect(main).not.toHaveAttribute('inert', '');
  expect(await header.evaluate(element => !!element.closest('[inert]'))).toBe(false);
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('');
});
