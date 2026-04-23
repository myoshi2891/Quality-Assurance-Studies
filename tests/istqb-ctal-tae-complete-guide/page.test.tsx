import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/istqb-ctal-tae-complete-guide/page';

afterEach(() => {
  cleanup();
});

describe('ISTQB CTAL-TAE Complete Guide Page', () => {
  it('renders the hero section with correct title', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('テスト自動化');
    expect(heading.textContent).toContain('完全ガイド');
  });

  it('renders the overview section', () => {
    render(<Page />);
    expect(screen.getByText('学習ロードマップ')).toBeDefined();
  });

  it('renders the gTAA section', () => {
    render(<Page />);
    expect(screen.getByText('汎用テスト自動化アーキテクチャ（gTAA）')).toBeDefined();
  });

  it('renders the tools section', () => {
    render(<Page />);
    expect(screen.getByText('主要ツール・フレームワーク 2025年版')).toBeDefined();
  });
});
