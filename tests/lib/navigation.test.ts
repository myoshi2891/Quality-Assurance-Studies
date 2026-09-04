import { describe, it, expect } from 'bun:test';
import {
  NAV_ITEMS,
  groupByCategory,
  matchesQuery,
  CATEGORY_ORDER,
  CATEGORY_TITLES,
  CATEGORY_CODES,
  type NavItem,
} from '../../lib/navigation';

describe('NAV_ITEMS', () => {
  it('contains 52 entries (home + 9 foundation + 10 fdn-ext + 6 advanced + 14 specialist + 5 expert + 2 cicd-devops + 4 tools-frameworks + 1 books-practices)', () => {
    expect(NAV_ITEMS).toHaveLength(52);
  });

  it('every item has a unique href', () => {
    const hrefs = NAV_ITEMS.map((item: NavItem) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it('every item has a non-empty Japanese label with no leading/trailing whitespace', () => {
    for (const item of NAV_ITEMS) {
      expect(item.label.trim().length).toBeGreaterThan(0);
      expect(item.label).toBe(item.label.trim());
    }
  });

  it('every item has a non-empty description with no leading/trailing whitespace', () => {
    for (const item of NAV_ITEMS) {
      expect(item.description.trim().length).toBeGreaterThan(0);
      expect(item.description).toBe(item.description.trim());
    }
  });

  it('keeps every description short enough for a card (<= 80 chars)', () => {
    for (const item of NAV_ITEMS) {
      expect(item.description.length).toBeLessThanOrEqual(80);
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

  it('pins /istqb-ctfl-complete-guide under istqb-foundation-ext (catches reorder/misclassification)', () => {
    const ctfl = NAV_ITEMS.find((item: NavItem) => item.href === '/istqb-ctfl-complete-guide');
    expect(ctfl).toBeDefined();
    expect(ctfl?.category).toBe('istqb-foundation-ext');
  });

  it('classifies /github-actions as cicd-devops', () => {
    const gha = NAV_ITEMS.find((item: NavItem) => item.href === '/github-actions');
    expect(gha).toBeDefined();
    expect(gha?.category).toBe('cicd-devops');
  });

  it('classifies /github-actions-guide as cicd-devops', () => {
    const gha = NAV_ITEMS.find((item: NavItem) => item.href === '/github-actions-guide');
    expect(gha).toBeDefined();
    expect(gha?.category).toBe('cicd-devops');
  });

  it('classifies /playwright-beginner-guide as tools-frameworks', () => {
    const pw = NAV_ITEMS.find((item: NavItem) => item.href === '/playwright-beginner-guide');
    expect(pw).toBeDefined();
    expect(pw?.category).toBe('tools-frameworks');
  });

  it('classifies /cucumber-beginner-guide as tools-frameworks', () => {
    const cuc = NAV_ITEMS.find((item: NavItem) => item.href === '/cucumber-beginner-guide');
    expect(cuc).toBeDefined();
    expect(cuc?.category).toBe('tools-frameworks');
  });

  it('classifies /cypress-beginner-guide as tools-frameworks', () => {
    const cyp = NAV_ITEMS.find((item: NavItem) => item.href === '/cypress-beginner-guide');
    expect(cyp).toBeDefined();
    expect(cyp?.category).toBe('tools-frameworks');
  });

  it('classifies /selenium-beginner-guide as tools-frameworks', () => {
    const sel = NAV_ITEMS.find((item: NavItem) => item.href === '/selenium-beginner-guide');
    expect(sel).toBeDefined();
    expect(sel?.category).toBe('tools-frameworks');
  });

  it('classifies /clean-code-cookbook-guide as books-practices', () => {
    const book = NAV_ITEMS.find((item: NavItem) => item.href === '/clean-code-cookbook-guide');
    expect(book).toBeDefined();
    expect(book?.category).toBe('books-practices');
  });

  it('classifies home "/" as home category and labels it as the guide index', () => {
    const home = NAV_ITEMS.find((item: NavItem) => item.href === '/');
    expect(home?.category).toBe('home');
    expect(home?.label).toBe('全ガイド一覧');
  });

  it('registers the relocated 羅針盤 guide under foundation', () => {
    const moved = NAV_ITEMS.find(
      (item: NavItem) => item.href === '/modern-software-testing-complete-guide-2025',
    );
    expect(moved).toBeDefined();
    expect(moved?.category).toBe('foundation');
  });

  it('contains exactly one item in the home category', () => {
    const homeItems = NAV_ITEMS.filter((item: NavItem) => item.category === 'home');
    expect(homeItems).toHaveLength(1);
  });
});

describe('CATEGORY_ORDER / CATEGORY_TITLES', () => {
  it('exposes the display order including the reserved books-practices category', () => {
    expect(CATEGORY_ORDER).toEqual([
      'home',
      'foundation',
      'istqb-foundation-ext',
      'istqb-advanced',
      'istqb-specialist',
      'istqb-expert',
      'cicd-devops',
      'tools-frameworks',
      'books-practices',
    ]);
  });

  it('provides a non-empty title for every ordered category', () => {
    for (const category of CATEGORY_ORDER) {
      expect(CATEGORY_TITLES[category].length).toBeGreaterThan(0);
    }
  });

  it('assigns every NAV_ITEMS category a slot in CATEGORY_ORDER', () => {
    for (const item of NAV_ITEMS) {
      expect(CATEGORY_ORDER).toContain(item.category);
    }
  });
});

describe('CATEGORY_CODES', () => {
  it('provides a short code for every ordered category', () => {
    for (const category of CATEGORY_ORDER) {
      expect(CATEGORY_CODES[category].trim().length).toBeGreaterThan(0);
    }
  });

  it('uses the real ISTQB abbreviations so the code carries information', () => {
    expect(CATEGORY_CODES['istqb-foundation-ext']).toBe('CTFL');
    expect(CATEGORY_CODES['istqb-advanced']).toBe('CTAL');
    expect(CATEGORY_CODES['istqb-specialist']).toBe('CT-*');
    expect(CATEGORY_CODES['istqb-expert']).toBe('CTEL');
  });

  it('keeps every code short enough for the level spine (<= 6 chars)', () => {
    for (const category of CATEGORY_ORDER) {
      expect(CATEGORY_CODES[category].length).toBeLessThanOrEqual(6);
    }
  });

  it('assigns a distinct code to every category', () => {
    const codes = CATEGORY_ORDER.map((c) => CATEGORY_CODES[c]);
    expect(new Set(codes).size).toBe(codes.length);
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
      'istqb-expert',
      'cicd-devops',
      'tools-frameworks',
      'books-practices',
    ]);
  });

  it('places 9 items in the foundation group', () => {
    const foundation = groupByCategory(NAV_ITEMS).find((g) => g.category === 'foundation');
    expect(foundation?.items).toHaveLength(9);
  });

  it('places 2 items in the cicd-devops group', () => {
    const cicd = groupByCategory(NAV_ITEMS).find((g) => g.category === 'cicd-devops');
    expect(cicd?.items).toHaveLength(2);
  });

  it('places 4 items in the tools-frameworks group', () => {
    const tools = groupByCategory(NAV_ITEMS).find((g) => g.category === 'tools-frameworks');
    expect(tools?.items).toHaveLength(4);
  });

  it('places 1 item in the books-practices group', () => {
    const books = groupByCategory(NAV_ITEMS).find((g) => g.category === 'books-practices');
    expect(books?.items).toHaveLength(1);
    expect(books?.title).toBe('Recommended Books');
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
      '/istqb-ctal-tta-complete-guide',
      '/istqb-ctal-att-complete-guide',
      '/istqb-ctal-atlas-complete-guide',
    ]);
  });

  it('omits empty categories from the result', () => {
    const onlyHome: NavItem[] = [
      { href: '/', label: 'Home', description: 'index', category: 'home' },
    ];
    const groups = groupByCategory(onlyHome);
    expect(groups).toHaveLength(1);
    expect(groups[0]?.category).toBe('home');
  });
});

describe('groupByCategory extensibility', () => {
  it('absorbs a new specialist guide without code changes', () => {
    const originalCount = groupByCategory(NAV_ITEMS).find(
      (g) => g.category === 'istqb-specialist',
    )?.items.length ?? 0;
    const futureGuide: NavItem = {
      href: '/istqb-ct-future-complete-guide',
      label: '将来のスペシャリストガイド',
      description: '将来追加されるスペシャリストレベルのガイド。',
      category: 'istqb-specialist',
    };
    const extended: readonly NavItem[] = [...NAV_ITEMS, futureGuide];
    const specialist = groupByCategory(extended).find((g) => g.category === 'istqb-specialist');
    expect(specialist?.items).toHaveLength(originalCount + 1);
    expect(specialist?.items.at(-1)?.href).toBe('/istqb-ct-future-complete-guide');
  });

  it('surfaces the reserved books-practices category once it receives an item', () => {
    const withoutBooks = NAV_ITEMS.filter((i) => i.category !== 'books-practices');
    expect(groupByCategory(withoutBooks).some((g) => g.category === 'books-practices')).toBe(false);

    const book: NavItem = {
      href: '/leading-quality-guide',
      label: 'Leading Quality ガイド',
      description: '品質文化とリーダーシップを扱う名著ガイド。',
      category: 'books-practices',
    };
    const groups = groupByCategory([...withoutBooks, book]);
    expect(groups.map((g) => g.category)).toEqual([
      'home',
      'foundation',
      'istqb-foundation-ext',
      'istqb-advanced',
      'istqb-specialist',
      'istqb-expert',
      'cicd-devops',
      'tools-frameworks',
      'books-practices',
    ]);
  });
});

describe('matchesQuery', () => {
  const item: NavItem = {
    href: '/playwright-beginner-guide',
    label: 'Playwright 入門ガイド',
    description: 'ブラウザ自動化フレームワーク Playwright の基礎。',
    category: 'tools-frameworks',
  };

  it('matches every item when the query is empty or whitespace only', () => {
    expect(matchesQuery(item, '')).toBe(true);
    expect(matchesQuery(item, '   ')).toBe(true);
  });

  it('matches on the label', () => {
    expect(matchesQuery(item, '入門')).toBe(true);
  });

  it('matches on the description', () => {
    expect(matchesQuery(item, 'ブラウザ自動化')).toBe(true);
  });

  it('matches on the href slug', () => {
    expect(matchesQuery(item, 'beginner-guide')).toBe(true);
  });

  it('is case-insensitive for ASCII queries', () => {
    expect(matchesQuery(item, 'PLAYWRIGHT')).toBe(true);
    expect(matchesQuery(item, 'playwright')).toBe(true);
  });

  it('ignores surrounding whitespace in the query', () => {
    expect(matchesQuery(item, '  Playwright  ')).toBe(true);
  });

  it('returns false when nothing matches', () => {
    expect(matchesQuery(item, 'zzzz-no-such-guide')).toBe(false);
  });

  it('narrows NAV_ITEMS to the CTFL chapter guides for the query "ctfl v4"', () => {
    const hits = NAV_ITEMS.filter((i) => matchesQuery(i, 'ctfl-v4'));
    expect(hits.length).toBeGreaterThan(0);
    for (const hit of hits) {
      expect(hit.href).toContain('ctfl-v4');
    }
  });
});
