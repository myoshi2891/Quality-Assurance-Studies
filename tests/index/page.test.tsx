import { describe, it, expect, afterEach, mock } from 'bun:test';

mock.module('next/navigation', () => ({
  usePathname: () => '/',
}));

import { render, screen, cleanup, fireEvent, within } from '@testing-library/react';
import Page from '../../app/page';
import { NAV_ITEMS, CATEGORY_TITLES, groupByCategory } from '../../lib/navigation';

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

  it('reports the total guide count', () => {
    render(<Page />);
    expect(screen.getByText(String(GUIDE_ITEMS.length))).toBeDefined();
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
