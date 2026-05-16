import { describe, it, expect, afterEach, beforeEach, mock } from 'bun:test';

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

  it('renders 4 category headings (excluding home) when opened', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    const dialog = screen.getByRole('dialog');
    const headings = within(dialog).getAllByRole('heading', { level: 2 });
    expect(headings.map((h) => h.textContent)).toEqual([
      '基礎テスト手法',
      'ISTQB Foundation Extension',
      'ISTQB Advanced',
      'ISTQB Specialist',
    ]);
  });

  it('renders 20 navigation links inside the dialog', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getAllByRole('link')).toHaveLength(20);
  });

  it('includes a link to /istqb-ct-ai-complete-guide in the dialog', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    const dialog = screen.getByRole('dialog');
    const link = within(dialog).getByRole('link', { name: 'AIテスト(CT-AI)ガイド' });
    expect(link.getAttribute('href')).toBe('/istqb-ct-ai-complete-guide');
  });
});

describe('Header drawer close behavior', () => {
  const openDrawer = () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    return screen.getByRole('dialog');
  };

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
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    const dialog = screen.getByRole('dialog');
    const active = within(dialog).getByRole('link', { name: 'AIテスト(CT-AI)ガイド' });
    expect(active.getAttribute('aria-current')).toBe('page');
  });

  it('does not mark non-matching drawer links with aria-current', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    const dialog = screen.getByRole('dialog');
    const home = within(dialog).getByRole('link', { name: 'ホーム' });
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
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    const dialog = screen.getByRole('dialog');
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

  it('focuses the first link inside the drawer when it opens', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    const dialog = screen.getByRole('dialog');
    const firstLink = within(dialog).getAllByRole('link')[0];
    expect(document.activeElement).toBe(firstLink);
  });
});
