import { expect, it } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { NAV_ITEMS } from '../../lib/navigation';
import { EXPECTED_PAGE_COUNT, PAGES } from '../../e2e/pages';
import inventory from '../../docs/migration-inventory/specification-by-example-guide.json';
it('registers SbE once under books-practices with a short description', () => {
    const items = NAV_ITEMS.filter((i) => i.href === `/${inventory.slug}`);
    expect(items).toHaveLength(1);
    expect(items[0]?.category).toBe('books-practices');
    expect(items[0]?.description.length).toBeLessThanOrEqual(80);
});
it('synchronizes 111 routes and the source H1', () => {
    expect(NAV_ITEMS).toHaveLength(113);
    expect(PAGES).toHaveLength(113);
    expect(EXPECTED_PAGE_COUNT).toBe(113);
    const items = PAGES.filter((i) => i.path === `/${inventory.slug}`);
    expect(items).toHaveLength(1);
    expect(items[0]?.h1.test('Specification by Example 実践ガイド')).toBe(true);
});
for (const ext of ['html', 'md'] as const)
    it(`archives and tracks byte-identical original ${ext}`, () => {
        const path = `archive/${ext}-archive/books/${inventory.source}.${ext}`;
        expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
        expect(createHash('sha256').update(readFileSync(path)).digest('hex')).toBe(
            inventory.hashes[ext],
        );
        expect(execFileSync('git', ['ls-files', path], { encoding: 'utf8' }).trim()).toBe(path);
    });
