import { describe, it, expect, afterEach } from 'bun:test';
import { render, cleanup } from '@testing-library/react';
import Page from '../../app/istqb-ctal-tae-complete-guide/page';

afterEach(() => {
  cleanup();
});

describe('ISTQB CTAL-TAE Complete Guide Page', () => {
  it('renders the hero section with correct title', () => {
    const { container } = render(<Page />);
    const h1 = container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1!.textContent).toMatch(/テスト自動化[\s\S]*完全ガイド/);
  });

  it('renders the overview section', () => {
    const { getByText } = render(<Page />);
    expect(getByText('学習ロードマップ')).toBeDefined();
  });

  it('renders the gTAA section', () => {
    const { getByText } = render(<Page />);
    expect(getByText('汎用テスト自動化アーキテクチャ（gTAA）')).toBeDefined();
  });

  it('renders the tools section', () => {
    const { getByText } = render(<Page />);
    expect(getByText('主要ツール・フレームワーク 2025年版')).toBeDefined();
  });
});
