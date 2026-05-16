import { describe, it, expect } from 'bun:test';
import { NAV_ITEMS, type NavItem } from '../../lib/navigation';

describe('NAV_ITEMS', () => {
  it('contains 20 entries (home + 8 foundation + 1 fdn-ext + 5 advanced + 5 specialist)', () => {
    expect(NAV_ITEMS).toHaveLength(20);
  });

  it('every item has a unique href', () => {
    const hrefs = NAV_ITEMS.map((item: NavItem) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it('every item has a non-empty Japanese label', () => {
    for (const item of NAV_ITEMS) {
      expect(item.label.length).toBeGreaterThan(0);
    }
  });

  it('classifies /istqb-ct-ai-complete-guide as istqb-specialist', () => {
    const ai = NAV_ITEMS.find((item: NavItem) => item.href === '/istqb-ct-ai-complete-guide');
    expect(ai?.category).toBe('istqb-specialist');
  });

  it('classifies /istqb-ctfl-at-complete-guide as istqb-foundation-ext', () => {
    const ctflAt = NAV_ITEMS.find((item: NavItem) => item.href === '/istqb-ctfl-at-complete-guide');
    expect(ctflAt?.category).toBe('istqb-foundation-ext');
  });

  it('classifies home "/" as home category', () => {
    const home = NAV_ITEMS.find((item: NavItem) => item.href === '/');
    expect(home?.category).toBe('home');
  });
});
