import { describe, it, expect, afterEach, mock } from 'bun:test';

mock.module('next/navigation', () => ({
  usePathname: () => '/',
}));

import { render, screen, cleanup, fireEvent, within } from '@testing-library/react';
import Page from '../../app/page';
import { NAV_ITEMS, CATEGORY_TITLES, CATEGORY_CODES, groupByCategory } from '../../lib/navigation';

afterEach(() => {
  cleanup();
});

const GUIDE_ITEMS = NAV_ITEMS.filter((item) => item.category !== 'home');

const searchInput = () => screen.getByRole('searchbox', { name: 'ガイドを検索' });

describe('Guide index page', () => {
  it('renders the library heading', () => {
    const heading = render(<Page />).container.querySelector('h1');
    expect(heading).not.toBeNull();
    expect(heading?.textContent).toMatch(/ガイドライブラリ/);
  });

  it('renders one section heading per non-empty category', () => {
    render(<Page />);
    const expected = groupByCategory(NAV_ITEMS)
      .filter((g) => g.category !== 'home')
      .map((g) => g.title);
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings.map((h) => h.textContent)).toEqual(expected);
  });

  it('anchors each category section with its category slug', () => {
    render(<Page />);
    for (const group of groupByCategory(NAV_ITEMS)) {
      if (group.category === 'home') continue;
      expect(document.querySelector(`section#${group.category}`)).not.toBeNull();
    }
  });

  it('renders a card link for every guide', () => {
    render(<Page />);
    const cards = document.querySelectorAll('a.guide-card');
    expect(cards).toHaveLength(GUIDE_ITEMS.length);
  });

  it('shows the label and description on each card', () => {
    render(<Page />);
    const card = document.querySelector('a.guide-card[href="/playwright-beginner-guide"]');
    expect(card).not.toBeNull();
    const pw = GUIDE_ITEMS.find((i) => i.href === '/playwright-beginner-guide');
    expect(card?.querySelector('h3')?.textContent).toBe(pw?.label);
    expect(card?.querySelector('p')?.textContent).toBe(pw?.description);
  });

  it('links the relocated 羅針盤 guide from the foundation section', () => {
    render(<Page />);
    const section = document.querySelector('section#foundation');
    expect(section).not.toBeNull();
    expect(
      section?.querySelector('a[href="/modern-software-testing-complete-guide-2025"]'),
    ).not.toBeNull();
  });

  it('does not render a card that links back to the index itself', () => {
    render(<Page />);
    expect(document.querySelector('a.guide-card[href="/"]')).toBeNull();
  });

  it('reports the total guide count in a dedicated element', () => {
    render(<Page />);
    const total = document.querySelector('[data-total-guides]');
    expect(total?.textContent).toContain(String(GUIDE_ITEMS.length));
  });
});

describe('Guide index level ladder (hero signature)', () => {
  const LEVELS = groupByCategory(NAV_ITEMS).filter((g) => g.category !== 'home');

  it('renders one ladder rung per level, in curriculum order', () => {
    render(<Page />);
    const rungs = document.querySelectorAll('[data-ladder-rung]');
    expect(Array.from(rungs).map((r) => r.getAttribute('data-category'))).toEqual(
      LEVELS.map((g) => g.category),
    );
  });

  it('links each rung to its section so the ladder is navigation, not decoration', () => {
    render(<Page />);
    for (const level of LEVELS) {
      const rung = document.querySelector(`[data-ladder-rung][data-category="${level.category}"]`);
      expect(rung?.getAttribute('href')).toBe(`#${level.category}`);
    }
  });

  it('shows the ISTQB code and guide count on every rung', () => {
    render(<Page />);
    for (const level of LEVELS) {
      const rung = document.querySelector(`[data-ladder-rung][data-category="${level.category}"]`);
      expect(rung?.textContent).toContain(CATEGORY_CODES[level.category]);
      expect(rung?.textContent).toContain(String(level.items.length));
    }
  });

  it('scales each bar to the level size so the shape of the library is visible', () => {
    render(<Page />);
    const max = Math.max(...LEVELS.map((g) => g.items.length));
    for (const level of LEVELS) {
      const fill = document.querySelector<HTMLElement>(
        `[data-ladder-rung][data-category="${level.category}"] .ladder-fill`,
      );
      const expected = Math.round((level.items.length / max) * 100);
      expect(fill?.style.width).toBe(`${expected}%`);
    }
  });

  it('gives the widest bar to the largest level (istqb-specialist)', () => {
    render(<Page />);
    const widest = document.querySelector<HTMLElement>(
      '[data-ladder-rung][data-category="istqb-specialist"] .ladder-fill',
    );
    expect(widest?.style.width).toBe('100%');
  });
});

describe('Guide index level spine', () => {
  it('labels every section with its ISTQB code', () => {
    render(<Page />);
    for (const group of groupByCategory(NAV_ITEMS)) {
      if (group.category === 'home') continue;
      const spine = document.querySelector(`section#${group.category} .spine-code`);
      expect(spine?.textContent).toBe(CATEGORY_CODES[group.category]);
    }
  });

  it('tags each section with its category so CSS can colour-code the level', () => {
    render(<Page />);
    for (const group of groupByCategory(NAV_ITEMS)) {
      if (group.category === 'home') continue;
      const section = document.querySelector(`section#${group.category}`);
      expect(section?.getAttribute('data-category')).toBe(group.category);
    }
  });

  it('shows the guide count beside each section title', () => {
    render(<Page />);
    const specialist = groupByCategory(NAV_ITEMS).find((g) => g.category === 'istqb-specialist');
    const count = document.querySelector('section#istqb-specialist .spine-count');
    expect(count?.textContent).toContain(String(specialist?.items.length));
  });
});

describe('Guide index search', () => {
  it('filters the cards down to the matching guides', () => {
    render(<Page />);
    fireEvent.change(searchInput(), { target: { value: 'cypress' } });
    const cards = document.querySelectorAll('a.guide-card');
    expect(cards).toHaveLength(1);
    expect(cards[0]?.getAttribute('href')).toBe('/cypress-beginner-guide');
  });

  it('hides category sections that have no match', () => {
    render(<Page />);
    fireEvent.change(searchInput(), { target: { value: 'cypress' } });
    expect(document.querySelector('section#istqb-specialist')).toBeNull();
    expect(document.querySelector('section#tools-frameworks')).not.toBeNull();
  });

  it('matches on the description as well as the label', () => {
    render(<Page />);
    const target = GUIDE_ITEMS.find((i) => i.href === '/github-actions');
    if (!target) throw new Error('expected /github-actions in NAV_ITEMS');
    const token = target.description.slice(0, 4);
    fireEvent.change(searchInput(), { target: { value: token } });
    expect(document.querySelectorAll('a.guide-card').length).toBeGreaterThan(0);
  });

  it('shows an empty state when nothing matches', () => {
    render(<Page />);
    fireEvent.change(searchInput(), { target: { value: 'zzzz-no-such-guide' } });
    expect(document.querySelectorAll('a.guide-card')).toHaveLength(0);
    expect(screen.getByText('該当するガイドがありません')).toBeDefined();
  });

  it('restores every card when the query is cleared', () => {
    render(<Page />);
    fireEvent.change(searchInput(), { target: { value: 'cypress' } });
    fireEvent.change(searchInput(), { target: { value: '' } });
    expect(document.querySelectorAll('a.guide-card')).toHaveLength(GUIDE_ITEMS.length);
  });
});

describe('Guide index category coverage', () => {
  it('groups every guide under the title declared in CATEGORY_TITLES', () => {
    render(<Page />);
    for (const group of groupByCategory(NAV_ITEMS)) {
      if (group.category === 'home') continue;
      const section = document.querySelector(`section#${group.category}`);
      expect(section).not.toBeNull();
      if (!section) continue;
      expect(within(section as HTMLElement).getByRole('heading', { level: 2 }).textContent).toBe(
        CATEGORY_TITLES[group.category],
      );
      expect(section.querySelectorAll('a.guide-card')).toHaveLength(group.items.length);
    }
  });
});
