import { describe, expect, it } from 'bun:test';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { NAV_ITEMS, groupByCategory } from '../../lib/navigation';
import { EXPECTED_PAGE_COUNT, PAGES } from '../../e2e/pages';
import inventory from '../../docs/migration-inventory/quality-is-free-guide.json';
const href = '/quality-is-free-guide';
describe('quality is free registration and source archives', () => {
    it('registers once as the last books-practices item', () => {
        expect(NAV_ITEMS.filter(item => item.href === href)).toHaveLength(1);
        const books = groupByCategory(NAV_ITEMS).find(group => group.category === 'books-practices');
        expect(books?.items.at(-1)?.href).toBe(href);
        expect(books?.items).toHaveLength(23);
    });
    it('synchronizes 104 routes and the real chapter heading', () => {
        expect(EXPECTED_PAGE_COUNT).toBe(104); expect(NAV_ITEMS).toHaveLength(104); expect(PAGES).toHaveLength(104);
        const entry = PAGES.filter(p => p.path === href); expect(entry).toHaveLength(1);
        expect(entry[0]?.h1.test('Quality Is Free 入門ガイド 品質はなぜ「タダ」なのか、ソフトウェアエンジニアのための実践ステップ')).toBe(true);
    });
    for (const ext of ['html','md'] as const) {
        const path = `archive/${ext}-archive/books/${inventory.source}.${ext}`;
        it(`removes source ${ext} from the root`, () => { expect(existsSync(`${inventory.source}.${ext}`)).toBe(false); });
        // Archives are ignored by the repository. Verify bytes whenever locally present.
        it.skipIf(!existsSync(path))(`preserves original archived ${ext} SHA-256`, () => { expect(createHash('sha256').update(readFileSync(path)).digest('hex')).toBe(inventory.hashes[ext]); });
    }
});
