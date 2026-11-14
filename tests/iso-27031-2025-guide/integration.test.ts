import { expect, it } from 'bun:test';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { load } from 'cheerio';
import { sourceModule } from '../helpers/source-module';
import { NAV_ITEMS } from '../../lib/navigation';
import { PAGES, EXPECTED_PAGE_COUNT } from '../../e2e/pages';
import inventory from '../../docs/migration-inventory/iso-27031-2025-guide.json';

it('registers the IRBC guide once and synchronizes all 132 routes', () => {
  const href = '/iso-27031-2025-guide';
  const items = NAV_ITEMS.filter((i) => i.href === href);
  expect(items).toHaveLength(1);
  expect(items[0]).toMatchObject({ category: 'iso', label: 'ISO/IEC 27031:2025 初学者ガイド' });
  expect(items[0]!.description.length).toBeLessThanOrEqual(80);
  const pages = PAGES.filter((p) => p.path === href);
  expect(pages).toHaveLength(1);
  const Page = sourceModule('app/iso-27031-2025-guide/page.tsx').default as React.ComponentType;
  const h1 = load(renderToStaticMarkup(React.createElement(Page)))('h1').first().text().replace(/\s+/g, ' ').trim();
  expect(h1).not.toBe('');
  expect(pages[0]!.h1.test(h1)).toBe(true);
  expect(NAV_ITEMS).toHaveLength(132);
  expect(PAGES).toHaveLength(132);
  expect(EXPECTED_PAGE_COUNT).toBe(132);
});

for (const ext of ['html', 'md'] as const) {
  it(`archives original ${ext} out of the root and preserves tracked bytes`, () => {
    const base = 'Iso-27031-2025-guide';
    expect(existsSync(`${base}.${ext}`)).toBe(false);
    expect(
      createHash('sha256')
        .update(readFileSync(`archive/${ext}-archive/iso/${base}.${ext}`))
        .digest('hex')
    ).toBe(inventory.hashes[ext]);
  });
}
