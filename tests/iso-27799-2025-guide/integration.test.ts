import { expect, it } from 'bun:test';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { NAV_ITEMS } from '../../lib/navigation';
import { EXPECTED_PAGE_COUNT, PAGES } from '../../e2e/pages';
import inventory from '../../docs/migration-inventory/iso-27799-2025-guide.json';
const href = '/iso-27799-2025-guide';
it('registers the health information security guide in the ISO category once', () => {
    const entries = NAV_ITEMS.filter(i => i.href === href); expect(entries).toHaveLength(1); expect(entries[0]?.category).toBe('iso'); expect(entries[0]?.description.length).toBeLessThanOrEqual(80);

});
it('keeps E2E routes in sync with navigation and registers the original H1', () => {
    expect(PAGES).toHaveLength(EXPECTED_PAGE_COUNT); expect(NAV_ITEMS).toHaveLength(EXPECTED_PAGE_COUNT);
    const entry = PAGES.filter(i => i.path === href); expect(entry).toHaveLength(1); expect(entry[0]?.h1.test(inventory.groups.headings.items[0]!.children[0] as string)).toBe(true);
});
for (const ext of ['html', 'md'] as const) {
    it(`archives original ${ext} out of the root and preserves tracked bytes`, () => {
        expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
        const archived = `archive/${ext}-archive/iso/${inventory.source}.${ext}`;
        expect(execFileSync('git', ['ls-files', '--', archived], { encoding: 'utf8' }).trim()).toBe(archived);
        expect(createHash('sha256').update(readFileSync(`archive/${ext}-archive/iso/${inventory.source}.${ext}`)).digest('hex')).toBe(inventory.hashes[ext]);
    });
}
