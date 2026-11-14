import { expect, it } from 'bun:test';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { NAV_ITEMS } from '../../lib/navigation';
import { PAGES, EXPECTED_PAGE_COUNT } from '../../e2e/pages';
import inventory from '../../docs/migration-inventory/iso-iec-29110-5-1-2-2025-beginner-guide.json';

it('registers the Basic profile guide once and synchronizes 133 routes', () => {
  const href = '/iso-iec-29110-5-1-2-2025-beginner-guide';
  expect(NAV_ITEMS.filter(i=>i.href === href)).toHaveLength(1);
  expect(NAV_ITEMS.find(i=>i.href === href)).toMatchObject({ category:'iso', label:'ISO/IEC 29110-5-1-2:2025 Basicプロファイルガイド' });
  expect(NAV_ITEMS.find(i=>i.href === href)!.description.length).toBeLessThanOrEqual(80);
  expect(PAGES.filter(p=>p.path === href)).toHaveLength(1);
  expect(PAGES.find(p=>p.path === href)!.h1.test(inventory.title)).toBe(true);
  expect(NAV_ITEMS).toHaveLength(133); expect(PAGES).toHaveLength(133); expect(EXPECTED_PAGE_COUNT).toBe(133);
});
for (const ext of ['html','md'] as const) it(`archives original ${ext} with tracked identical bytes`, () => {
  const stem = 'Iso-iec-29110-5-1-2-2025-beginner-guide';
  const path = `archive/${ext}-archive/iso/${stem}.${ext}`;
  expect(existsSync(`${stem}.${ext}`)).toBe(false);
  expect(createHash('sha256').update(readFileSync(path)).digest('hex')).toBe(inventory.hashes[ext]);
  expect(execFileSync('git',['ls-files','--error-unmatch',path], { encoding:'utf8' }).trim()).toBe(path);
});
