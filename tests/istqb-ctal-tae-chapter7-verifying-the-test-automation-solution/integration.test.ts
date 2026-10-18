import { describe, expect, it } from 'bun:test';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { NAV_ITEMS } from '../../lib/navigation';
import { EXPECTED_PAGE_COUNT, PAGES } from '../../e2e/pages';
import inventory from '../../docs/migration-inventory/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution.json';
const href = '/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution';
describe('chapter 7 registration and source archives', () => {
    it('registers exactly once in Advanced immediately after chapter 6', () => {
        expect(NAV_ITEMS.filter(item => item.href === href)).toHaveLength(1);
        const index = NAV_ITEMS.findIndex(item => item.href === href);
        expect(NAV_ITEMS[index]?.category).toBe('istqb-advanced');
        expect(NAV_ITEMS[index - 1]?.href).toBe('/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics');
    });
    it('synchronizes all routes and the real chapter heading with smoke expectations', () => {
        expect(NAV_ITEMS).toHaveLength(EXPECTED_PAGE_COUNT);
        expect(PAGES).toHaveLength(EXPECTED_PAGE_COUNT);
        const pages = PAGES.filter(page => page.path === href);
        expect(pages).toHaveLength(1);
        expect(pages[0]?.h1.test('CTAL-TAE v2.0 第7章 ｜ Verifying the Test Automation Solution 初学者向けガイド')).toBe(true);
    });
    for (const ext of ['html', 'md'] as const) {
        const archivePath = `archive/${ext}-archive/ctal/${inventory.source}.${ext}`;
        it(`removes the original ${ext} from the project root`, () => {
            expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
        });
        // archive/ は .gitignore 対象のため CI には存在しない。実体がある環境でのみ原本の同一性を検証する
        it.skipIf(!existsSync(archivePath))(`archives the original ${ext} unchanged`, () => {
            const content = readFileSync(archivePath);
            expect(createHash('sha256').update(content).digest('hex')).toBe(inventory.hashes[ext]);
        });
    }
});
