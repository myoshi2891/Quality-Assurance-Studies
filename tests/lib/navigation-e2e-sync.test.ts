import { describe, it, expect } from 'bun:test';
import { NAV_ITEMS } from '../../lib/navigation';
import { PAGES, EXPECTED_PAGE_COUNT } from '../../e2e/pages';

/**
 * lib/navigation.ts（グローバルナビ）と e2e/pages.ts（スモーク E2E 対象）は
 * どちらもルートの単一情報源であり、手動同期されている。
 * 片方だけ更新された場合に E2E を回さずとも `bun test` で検知できるようにする。
 */
describe('navigation registry ↔ e2e page registry', () => {
  const navHrefs = NAV_ITEMS.map((item) => item.href);
  const e2ePaths = PAGES.map((page) => page.path);

  it('keeps EXPECTED_PAGE_COUNT in sync with the PAGES array', () => {
    expect(PAGES).toHaveLength(EXPECTED_PAGE_COUNT);
  });

  it('registers every navigation href as a smoke-tested page', () => {
    const missing = navHrefs.filter((href) => !e2ePaths.includes(href));
    expect(missing).toEqual([]);
  });

  it('registers every smoke-tested page in the global navigation', () => {
    const missing = e2ePaths.filter((path) => !navHrefs.includes(path));
    expect(missing).toEqual([]);
  });

  it('covers the same number of routes in both registries', () => {
    expect(navHrefs).toHaveLength(EXPECTED_PAGE_COUNT);
  });
});
