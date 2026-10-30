import { expect, it } from 'bun:test';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { NAV_ITEMS } from '../../lib/navigation';
import { EXPECTED_PAGE_COUNT, PAGES } from '../../e2e/pages';
import inventory from '../../docs/migration-inventory/iso-11179-1-2023-guide.json';
const href = '/iso-11179-1-2023-guide';
it('registers the Metadata Registry guide in the ISO category once', () => {
    const entries = NAV_ITEMS.filter(i => i.href === href); expect(entries).toHaveLength(1); expect(entries[0]?.category).toBe('iso'); expect(entries[0]?.description.length).toBeLessThanOrEqual(80);
    expect(NAV_ITEMS.filter(i => i.category === 'iso').map(i => i.href)).toEqual(['/iso-29119-1-2022-guide','/iec-62304-beginner-guide','/iso-9075-1-guide',href,'/iso-14496-22-guide','/iso-19770-5-guide','/iso-23009-1-2026-guide','/iso-27799-2025-guide','/iso-30130-guide']);
});
it('registers exactly 114 routes and the original H1 in E2E', () => {
    expect(EXPECTED_PAGE_COUNT).toBe(114); expect(PAGES).toHaveLength(114); expect(NAV_ITEMS).toHaveLength(114);
    const entry = PAGES.filter(i => i.path === href); expect(entry).toHaveLength(1); expect(entry[0]?.h1.test(inventory.groups.headings.items[0]!.children[0] as string)).toBe(true);
});
for (const ext of ['html', 'md'] as const) {
    it(`archives original ${ext} out of the root and preserves tracked bytes`, () => {
        expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
        expect(createHash('sha256').update(readFileSync(`archive/${ext}-archive/iso/${inventory.source}.${ext}`)).digest('hex')).toBe(inventory.hashes[ext]);
    });
}
