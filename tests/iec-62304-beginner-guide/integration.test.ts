import { describe, expect, it } from 'bun:test';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { NAV_ITEMS, groupByCategory } from '../../lib/navigation';
import { EXPECTED_PAGE_COUNT, PAGES } from '../../e2e/pages';
import inventory from '../../docs/migration-inventory/iec-62304-beginner-guide.json';
const href = '/iec-62304-beginner-guide';
describe('IEC 62304 registration and original archives', () => {
    it('registers once in the international standards category after ISO 29119', () => {
        const entries = NAV_ITEMS.filter(item => item.href === href); expect(entries).toHaveLength(1);
        expect(entries[0]?.category).toBe('iso'); expect(entries[0]?.description.length).toBeLessThanOrEqual(80);
        expect(groupByCategory(NAV_ITEMS).find(g => g.category === 'iso')?.items.map(i => i.href)).toEqual(['/iso-29119-1-2022-guide', href, '/iso-9075-1-guide', '/iso-11179-1-2023-guide','/iso-14496-22-guide','/iso-19770-5-guide','/iso-23009-1-2026-guide','/iso-27799-2025-guide','/iso-30130-guide','/iso-iec-5338-guide']);
    });
    it('synchronizes 115 registered routes and the source H1', () => {
        expect(EXPECTED_PAGE_COUNT).toBe(115); expect(NAV_ITEMS).toHaveLength(115); expect(PAGES).toHaveLength(115);
        const entries = PAGES.filter(p => p.path === href); expect(entries).toHaveLength(1); expect(entries[0]?.h1.test('IEC 62304:2006 初学者向けステップバイステップ解説ガイド')).toBe(true);
    });
    for (const ext of ['html', 'md'] as const) {
        const path = `tests/fixtures/source-html/${inventory.source}.${ext}`;
        it(`moves original ${ext} out of the project root`, () => expect(existsSync(`${inventory.source}.${ext}`)).toBe(false));
        // 原本は Git 追跡下の fixtures に置き、クリーンなチェックアウトでも常にハッシュを検証する
        it(`preserves tracked original ${ext} SHA-256`, () => expect(createHash('sha256').update(readFileSync(path)).digest('hex')).toBe(inventory.hashes[ext]));
    }
});
