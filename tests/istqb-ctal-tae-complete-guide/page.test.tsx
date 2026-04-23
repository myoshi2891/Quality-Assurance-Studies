import { render, screen } from '@testing-library/react';
import Page from '@/app/istqb-ctal-tae-complete-guide/page';
import { describe, it, expect } from 'vitest';

describe('ISTQB CTAL-TAE Complete Guide Page', () => {
  it('renders the hero section with correct title', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('テスト自動化完全ガイド');
  });

  it('renders the overview section', () => {
    render(<Page />);
    expect(screen.getByText('学習ロードマップ')).toBeInTheDocument();
  });

  it('renders the gTAA section', () => {
    render(<Page />);
    expect(screen.getByText('汎用テスト自動化アーキテクチャ（gTAA）')).toBeInTheDocument();
  });

  it('renders the tools section', () => {
    render(<Page />);
    expect(screen.getByText('主要ツール・フレームワーク 2025年版')).toBeInTheDocument();
  });
});
