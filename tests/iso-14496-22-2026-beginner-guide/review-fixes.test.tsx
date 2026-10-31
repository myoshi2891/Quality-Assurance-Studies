import { describe, it, expect, afterEach } from 'bun:test';
import React from 'react';
import { render, fireEvent, cleanup, within } from '@testing-library/react';
import NavBar from '../../app/iso-14496-22-2026-beginner-guide/NavBar';

const ORIGINAL_INNER_WIDTH = window.innerWidth;

/** 画面幅を差し替える（モバイル／デスクトップの分岐検証用） */
function setInnerWidth(width: number): void {
  Object.defineProperty(window, 'innerWidth', { value: width, configurable: true, writable: true });
}

afterEach(() => {
  cleanup();
  setInnerWidth(ORIGINAL_INNER_WIDTH);
});

describe('ISO 14496-22:2026 review fixes: NavBar disclosure & focus', () => {
  it('exposes aria-expanded bound to open state and aria-controls="sidebar"', () => {
    // Arrange
    const { container } = render(<NavBar />);
    const toggle = within(container).getByRole('button', { name: '目次を開閉' });

    // Assert（初期状態）
    expect(toggle.getAttribute('aria-controls')).toBe('sidebar');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(container.querySelector('#sidebar')).not.toBeNull();

    // Act
    fireEvent.click(toggle);

    // Assert（開いた状態）
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
  });

  it('returns focus to the toggle after closing the sidebar from a link on mobile', () => {
    // Arrange
    setInnerWidth(375);
    const { container } = render(<NavBar />);
    const toggle = within(container).getByRole('button', { name: '目次を開閉' });
    fireEvent.click(toggle);
    const link = container.querySelector<HTMLAnchorElement>('#sidebar a[href="#ch5"]');
    expect(link).not.toBeNull();
    link?.focus();

    // Act
    if (link) fireEvent.click(link);

    // Assert
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(toggle);
  });

  it('leaves focus on the link on desktop', () => {
    // Arrange
    setInnerWidth(1280);
    const { container } = render(<NavBar />);
    const toggle = within(container).getByRole('button', { name: '目次を開閉' });
    const link = container.querySelector<HTMLAnchorElement>('#sidebar a[href="#ch5"]');
    expect(link).not.toBeNull();
    link?.focus();

    // Act
    if (link) fireEvent.click(link);

    // Assert
    expect(document.activeElement).toBe(link);
    expect(document.activeElement).not.toBe(toggle);
  });
});
