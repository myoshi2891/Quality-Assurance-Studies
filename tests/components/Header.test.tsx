import { describe, it, expect, afterEach, beforeEach, mock } from 'bun:test';
import { NAV_ITEMS } from '../../lib/navigation';

let mockPathname = '/';
mock.module('next/navigation', () => ({
  usePathname: () => mockPathname,
}));

import { render, screen, cleanup, fireEvent, within } from '@testing-library/react';
import Header from '../../components/Header';

afterEach(() => {
  cleanup();
  mockPathname = '/';
});

const openDrawer = () => {
  render(<Header />);
  fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
  return screen.getByRole('dialog');
};

const searchInput = () => screen.getByRole('searchbox', { name: 'ガイドを検索' });

const sectionFor = (category: string) =>
  document.querySelector<HTMLDetailsElement>(`details[data-category="${category}"]`);

describe('Header hamburger button', () => {
  it('renders a button with aria-label "メニューを開く"', () => {
    render(<Header />);
    const btn = screen.getByRole('button', { name: 'メニューを開く' });
    expect(btn).toBeDefined();
    expect(btn.getAttribute('aria-expanded')).toBe('false');
  });

  it('exposes aria-controls pointing to the drawer panel id', () => {
    render(<Header />);
    const btn = screen.getByRole('button', { name: 'メニューを開く' });
    expect(btn.getAttribute('aria-controls')).toBe('global-nav-panel');
  });

  it('flips aria-expanded to true after a click', () => {
    render(<Header />);
    const btn = screen.getByRole('button', { name: /メニュー/ });
    fireEvent.click(btn);
    expect(btn.getAttribute('aria-expanded')).toBe('true');
  });

  it('updates the aria-label to "メニューを閉じる" when open', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    expect(screen.getByRole('button', { name: 'メニューを閉じる' })).toBeDefined();
  });
});

describe('Header drawer panel', () => {
  it('does not render the dialog when closed', () => {
    render(<Header />);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('renders 8 category headings (excluding home) when opened', () => {
    const dialog = openDrawer();
    const headings = within(dialog).getAllByRole('heading', { level: 2 });
    expect(headings.map((h) => h.textContent)).toEqual([
      '基礎テスト手法',
      'ISTQB Foundation Extension',
      'ISTQB Advanced',
      'ISTQB Specialist',
      'ISTQB Expert',
      'CI/CD & DevOps',
      'テストツール & フレームワーク',
      '名著・実践ガイド',
    ]);
  });

  it(`renders ${NAV_ITEMS.length} navigation links inside the dialog`, () => {
    const dialog = openDrawer();
    expect(within(dialog).getAllByRole('link')).toHaveLength(NAV_ITEMS.length);
  });

  it('includes a link to /istqb-ct-ai-complete-guide in the dialog', () => {
    const dialog = openDrawer();
    const link = within(dialog).getByRole('link', { name: 'AIテスト(CT-AI)ガイド' });
    expect(link.getAttribute('href')).toBe('/istqb-ct-ai-complete-guide');
  });

  it('pins the guide index link above the category sections', () => {
    const dialog = openDrawer();
    const pinned = within(dialog).getByRole('link', { name: '全ガイド一覧' });
    expect(pinned.getAttribute('href')).toBe('/');
  });
});

describe('Header drawer accordion', () => {
  it('renders each category as a collapsible details element', () => {
    openDrawer();
    const sections = document.querySelectorAll('details[data-category]');
    expect(sections).toHaveLength(8);
  });

  it('collapses every category by default on the index route', () => {
    openDrawer();
    const sections = document.querySelectorAll<HTMLDetailsElement>('details[data-category]');
    for (const section of sections) {
      expect(section.open).toBe(false);
    }
  });

  it('auto-expands only the category containing the current path', () => {
    mockPathname = '/istqb-ct-ai-complete-guide';
    openDrawer();
    expect(sectionFor('istqb-specialist')?.open).toBe(true);
    expect(sectionFor('foundation')?.open).toBe(false);
  });

  it('toggles a category open when its summary is clicked', () => {
    const dialog = openDrawer();
    const summary = within(dialog).getByRole('heading', { level: 2, name: '基礎テスト手法' })
      .closest('summary');
    if (!summary) throw new Error('expected the heading to be wrapped in a summary');
    expect(sectionFor('foundation')?.open).toBe(false);
    fireEvent.click(summary);
    expect(sectionFor('foundation')?.open).toBe(true);
    fireEvent.click(summary);
    expect(sectionFor('foundation')?.open).toBe(false);
  });

  it('exposes the item count on the summary for the CSS badge', () => {
    const dialog = openDrawer();
    const summary = within(dialog).getByRole('heading', { level: 2, name: 'ISTQB Specialist' })
      .closest('summary');
    expect(summary?.getAttribute('data-count')).toBe('14');
  });
});

describe('Header drawer search', () => {
  it('renders a search box inside the drawer', () => {
    openDrawer();
    expect(searchInput()).toBeDefined();
  });

  it('filters the drawer links down to the matching guides', () => {
    const dialog = openDrawer();
    fireEvent.change(searchInput(), { target: { value: 'cypress' } });
    const links = within(dialog).getAllByRole('link');
    const hrefs = links.map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('/cypress-beginner-guide');
    expect(hrefs).not.toContain('/istqb-ct-ai-complete-guide');
  });

  it('expands every remaining category while a query is active', () => {
    openDrawer();
    fireEvent.change(searchInput(), { target: { value: 'テスト' } });
    const sections = document.querySelectorAll<HTMLDetailsElement>('details[data-category]');
    expect(sections.length).toBeGreaterThan(0);
    for (const section of sections) {
      expect(section.open).toBe(true);
    }
  });

  it('hides categories with no matching guide', () => {
    openDrawer();
    fireEvent.change(searchInput(), { target: { value: 'cypress' } });
    expect(sectionFor('istqb-specialist')).toBeNull();
    expect(sectionFor('tools-frameworks')).not.toBeNull();
  });

  it('shows an empty state when nothing matches', () => {
    const dialog = openDrawer();
    fireEvent.change(searchInput(), { target: { value: 'zzzz-no-such-guide' } });
    expect(within(dialog).getByText('該当するガイドがありません')).toBeDefined();
  });

  it('keeps the pinned guide index link visible while filtering', () => {
    const dialog = openDrawer();
    fireEvent.change(searchInput(), { target: { value: 'zzzz-no-such-guide' } });
    expect(within(dialog).getByRole('link', { name: '全ガイド一覧' })).toBeDefined();
  });

  it('resets the query when the drawer is reopened', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    fireEvent.change(searchInput(), { target: { value: 'cypress' } });
    fireEvent.keyDown(document, { key: 'Escape' });
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    expect((searchInput() as HTMLInputElement).value).toBe('');
  });
});

describe('Header drawer close behavior', () => {
  it('closes when Escape key is pressed', () => {
    openDrawer();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('closes when a link inside the drawer is clicked', () => {
    const dialog = openDrawer();
    const firstLink = within(dialog).getAllByRole('link')[0];
    if (!firstLink) throw new Error('expected at least one link in drawer');
    fireEvent.click(firstLink);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('closes when the overlay is clicked', () => {
    openDrawer();
    const overlay = document.querySelector('.nav-overlay');
    if (!overlay) throw new Error('expected nav-overlay element');
    fireEvent.click(overlay);
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});

describe('Header active link (aria-current)', () => {
  beforeEach(() => {
    mockPathname = '/istqb-ct-ai-complete-guide';
  });

  it('marks the matching drawer link with aria-current="page"', () => {
    const dialog = openDrawer();
    const active = within(dialog).getByRole('link', { name: 'AIテスト(CT-AI)ガイド' });
    expect(active.getAttribute('aria-current')).toBe('page');
  });

  it('does not mark non-matching drawer links with aria-current', () => {
    const dialog = openDrawer();
    const home = within(dialog).getByRole('link', { name: '全ガイド一覧' });
    expect(home.getAttribute('aria-current')).toBeNull();
  });
});

describe('Header legacy cleanup', () => {
  it('no longer renders the legacy .nav-links container', () => {
    render(<Header />);
    expect(document.querySelector('.nav-links')).toBeNull();
  });

  it('no longer renders the "Next.js SPA" badge', () => {
    render(<Header />);
    expect(screen.queryByText('Next.js SPA')).toBeNull();
  });
});

describe('Header CSS class hooks', () => {
  it('hamburger button carries the nav-hamburger class', () => {
    render(<Header />);
    const btn = screen.getByRole('button', { name: 'メニューを開く' });
    expect(btn.classList.contains('nav-hamburger')).toBe(true);
  });

  it('drawer carries the nav-drawer class when open', () => {
    const dialog = openDrawer();
    expect(dialog.classList.contains('nav-drawer')).toBe(true);
  });
});

describe('Header body scroll lock and focus', () => {
  afterEach(() => {
    document.body.style.overflow = '';
  });

  it('locks body scroll while the drawer is open', () => {
    render(<Header />);
    expect(document.body.style.overflow).toBe('');
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body scroll after the drawer is closed', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(document.body.style.overflow).toBe('');
  });

  it('focuses the search box when the drawer opens', () => {
    openDrawer();
    expect(document.activeElement).toBe(searchInput());
  });
});
