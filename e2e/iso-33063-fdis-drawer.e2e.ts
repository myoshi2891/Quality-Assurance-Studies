import { test, expect } from '@playwright/test';

test('ISO 33063 mobile drawer traps keyboard focus and restores it on Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/iso-33063-fdis-guide');

  const drawer = page.getByRole('complementary', { name: '目次', includeHidden: true });
  const trigger = page.getByRole('button', { name: 'メニュー', exact: true });
  const main = page.locator('.iso33063-page main');
  // The responsive effect marks the closed drawer inert after hydration.
  await expect(drawer).toHaveAttribute('inert', '');
  await trigger.click();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await expect(main).toHaveAttribute('inert', '');
  const dialog = page.getByRole('dialog', { name: '目次', exact: true });
  await expect(dialog).toHaveAttribute('aria-modal', 'true');
  await expect(dialog.getByRole('button', { name: 'メニュー', exact: true })).toBeVisible();
  const header = page.getByRole('navigation', { name: 'グローバルナビゲーション', includeHidden: true });
  await expect(header).toBeVisible();
  expect(await header.evaluate(element => !!element.closest('[inert]'))).toBe(true);
  const headerControl = header.locator('a[href], button').first();
  await headerControl.evaluate((element: HTMLElement) => element.focus());
  const links = drawer.getByRole('link');
  await expect(links.first()).toBeFocused();

  // Native focus attempts into the background must be blocked by inert.
  const backgroundControl = main.locator('a[href], button, input').first();
  await expect(backgroundControl).toBeAttached();
  await backgroundControl.evaluate((element: HTMLElement) => element.focus());
  await expect(links.first()).toBeFocused();

  const count = await links.count();
  for (let i = 1; i < count; i++) {
    await page.keyboard.press('Tab');
    await expect(links.nth(i)).toBeFocused();
  }
  await page.keyboard.press('Tab');
  await expect(trigger).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(links.first()).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(trigger).toBeFocused();
  for (let i = count - 1; i >= 0; i--) {
    await page.keyboard.press('Shift+Tab');
    await expect(links.nth(i)).toBeFocused();
  }

  await page.keyboard.press('Escape');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(drawer).toHaveAttribute('inert', '');
  await expect(main).not.toHaveAttribute('inert', '');
  await expect(trigger).toBeFocused();
  expect(await header.evaluate(element => !!element.closest('[inert]'))).toBe(false);
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(dialog).toHaveCount(0);
  await expect(drawer).not.toHaveAttribute('inert', '');
});
