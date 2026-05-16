import { describe, it, expect, afterEach, mock } from 'bun:test';

mock.module('next/navigation', () => ({
  usePathname: () => '/',
}));

import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Header from '../../components/Header';

afterEach(() => cleanup());

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
