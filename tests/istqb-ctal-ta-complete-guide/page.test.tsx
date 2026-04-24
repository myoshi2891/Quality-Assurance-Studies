import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/istqb-ctal-ta-complete-guide/page';

afterEach(() => {
  cleanup();
});

describe('ISTQB CTAL-TA Complete Guide Page', () => {
  it('renders the hero section with correct title', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('ISTQB® CTAL-TA');
    expect(heading.textContent).toContain('完全学習ガイド');
  });

  it('renders the CTAL-TA overview section', () => {
    render(<Page />);
    expect(screen.getByText('CTAL-TA v4.0 概要')).toBeDefined();
  });

  it('renders the test analysis and design section', () => {
    render(<Page />);
    expect(screen.getByText('テスト分析とテスト設計 ⭐')).toBeDefined();
  });

  it('renders the quality characteristics testing section', () => {
    render(<Page />);
    expect(screen.getByRole('heading', { name: '品質特性のテスト' })).toBeDefined();
  });
});
