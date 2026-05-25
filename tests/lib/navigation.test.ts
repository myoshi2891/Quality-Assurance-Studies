import { describe, it, expect } from 'bun:test';
import { NAV_ITEMS, groupByCategory, type NavItem } from '../../lib/navigation';

describe('NAV_ITEMS', () => {
  it('contains 25 entries (home + 8 foundation + 1 fdn-ext + 5 advanced + 10 specialist)', () => {
    expect(NAV_ITEMS).toHaveLength(25);
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

describe('groupByCategory', () => {
  it('returns groups in fixed display order', () => {
    const groups = groupByCategory(NAV_ITEMS);
    expect(groups.map((g) => g.category)).toEqual([
      'home',
      'foundation',
      'istqb-foundation-ext',
      'istqb-advanced',
      'istqb-specialist',
    ]);
  });

  it('places 8 items in the foundation group', () => {
    const foundation = groupByCategory(NAV_ITEMS).find((g) => g.category === 'foundation');
    expect(foundation?.items).toHaveLength(8);
  });

  it('assigns a non-empty display title to every group', () => {
    for (const group of groupByCategory(NAV_ITEMS)) {
      expect(group.title.length).toBeGreaterThan(0);
    }
  });

  it('preserves the original item order within each group', () => {
    const advanced = groupByCategory(NAV_ITEMS).find((g) => g.category === 'istqb-advanced');
    expect(advanced?.items.map((i) => i.href)).toEqual([
      '/istqb-ctal-tae-complete-guide',
      '/istqb-ctal-ta-complete-guide',
      '/istqb-ctal-tm-complete-guide',
      '/istqb-ctal-att-complete-guide',
      '/istqb-ctal-atlas-complete-guide',
    ]);
  });

  it('omits empty categories from the result', () => {
    const onlyHome: NavItem[] = [{ href: '/', label: 'Home', category: 'home' }];
    const groups = groupByCategory(onlyHome);
    expect(groups).toHaveLength(1);
    expect(groups[0]?.category).toBe('home');
  });
});

describe('groupByCategory extensibility', () => {
  it('absorbs a new specialist guide (e.g. future CT-SEC) without code changes', () => {
    const originalCount = groupByCategory(NAV_ITEMS).find(
      (g) => g.category === 'istqb-specialist',
    )?.items.length ?? 0;
    const futureSec: NavItem = {
      href: '/istqb-ct-sec-complete-guide',
      label: 'セキュリティテスト(CT-SEC)ガイド',
      category: 'istqb-specialist',
    };
    const extended: readonly NavItem[] = [...NAV_ITEMS, futureSec];
    const specialist = groupByCategory(extended).find(
      (g) => g.category === 'istqb-specialist',
    );
    expect(specialist?.items).toHaveLength(originalCount + 1);
    expect(specialist?.items.at(-1)?.href).toBe('/istqb-ct-sec-complete-guide');
  });

  it('keeps the category order stable when a new specialist item is appended', () => {
    const futureTas: NavItem = {
      href: '/istqb-ct-sec-complete-guide',
      label: 'CT-SEC',
      category: 'istqb-specialist',
    };
    const groups = groupByCategory([...NAV_ITEMS, futureTas]);
    expect(groups.map((g) => g.category)).toEqual([
      'home',
      'foundation',
      'istqb-foundation-ext',
      'istqb-advanced',
      'istqb-specialist',
    ]);
  });
});
