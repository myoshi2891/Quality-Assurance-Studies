import { describe, expect, it } from 'bun:test';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { NAV_ITEMS } from '../../lib/navigation';
import { EXPECTED_PAGE_COUNT, PAGES } from '../../e2e/pages';
import inventory from '../../docs/migration-inventory/istqb-ctal-tae-chapter5-implementation-deployment-strategies.json';
const href = '/istqb-ctal-tae-chapter5-implementation-deployment-strategies';
describe('chapter 5 integration and original preservation', () => {
  it('registers exactly once immediately after chapter 4 in Advanced', () => {
    expect(NAV_ITEMS.filter(item => item.href === href)).toHaveLength(1);
    const index = NAV_ITEMS.findIndex(item => item.href === href);
    expect(NAV_ITEMS[index - 1]?.href).toBe('/istqb-ctal-tae-chapter4-implementing-test-automation');
    expect(NAV_ITEMS[index]?.category).toBe('istqb-advanced');
  });
  it('registers the matching smoke heading and synchronizes all page counts', () => {
    const page = PAGES.filter(page => page.path === href);
    expect(page).toHaveLength(1);
    expect(page[0]?.h1.test('CTAL‑TAE v2.0 Ch.5「Implementation and Deployment Strategies for Test Automation」')).toBe(true);
    expect(EXPECTED_PAGE_COUNT).toBe(100);
    expect(PAGES).toHaveLength(EXPECTED_PAGE_COUNT);
    expect(NAV_ITEMS).toHaveLength(EXPECTED_PAGE_COUNT);
  });
  for (const ext of ['html', 'md'] as const) {
    it(`moves the original ${ext} to its archive byte-for-byte`, () => {
      expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
      const archived = readFileSync(`archive/${ext}-archive/ctal/${inventory.source}.${ext}`);
      expect(createHash('sha256').update(archived).digest('hex')).toBe(inventory.hashes[ext]);
    });
  }
});
