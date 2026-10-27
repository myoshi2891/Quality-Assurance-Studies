import { expect, it } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { NAV_ITEMS } from '../../lib/navigation';
import { EXPECTED_PAGE_COUNT, PAGES } from '../../e2e/pages';
import inventory from '../../docs/migration-inventory/software-testing-craftsmans-approach-guide.json';
it('registers Craftsman once in books-practices with a short description', () => {
    const items=NAV_ITEMS.filter(i=>i.href===`/${inventory.slug}`);expect(items).toHaveLength(1);expect(items[0]?.category).toBe('books-practices');expect(items[0]?.description.length).toBeLessThanOrEqual(80);
});
it('synchronizes navigation and smoke registry at 108 routes with original H1', () => {
    expect(NAV_ITEMS).toHaveLength(108);expect(PAGES).toHaveLength(108);expect(EXPECTED_PAGE_COUNT).toBe(108);
    const items=PAGES.filter(i=>i.path===`/${inventory.slug}`);expect(items).toHaveLength(1);expect(items[0]?.h1.test("Software Testing: A Craftsman's Approach 入門ガイド")).toBe(true);
});
for(const ext of ['html','md'] as const) it(`archives original ${ext} with byte-for-byte fidelity`, () => {
    expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
    expect(createHash('sha256').update(readFileSync(`archive/${ext}-archive/books/${inventory.source}.${ext}`)).digest('hex')).toBe(inventory.hashes[ext]);
});
