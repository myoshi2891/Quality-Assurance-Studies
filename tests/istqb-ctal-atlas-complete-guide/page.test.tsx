import { describe, it, expect, afterEach, beforeAll, afterAll } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/istqb-ctal-atlas-complete-guide/page';

class MockIntersectionObserver {
  constructor(_callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {}
  observe(_element: Element) {}
  unobserve(_element: Element) {}
  disconnect() {}
}
let _originalIntersectionObserver: typeof IntersectionObserver;

beforeAll(() => {
  _originalIntersectionObserver = global.IntersectionObserver;
  global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterAll(() => {
  global.IntersectionObserver = _originalIntersectionObserver;
});

afterEach(() => {
  cleanup();
});

describe('ISTQB CT-ATLaS Complete Guide Page', () => {
  it('renders the hero section with correct title', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('CT-ATLaS');
    expect(heading.textContent).toContain('完全学習ガイド');
  });

  it('renders Overview section', () => {
    render(<Page />);
    expect(screen.getAllByText(/資格概要と学習ロードマップ/).length).toBeGreaterThan(0);
  });

  it('renders Chapter 1 Quality Assistance section', () => {
    render(<Page />);
    expect(screen.getAllByText(/クオリティアシスタンス/).length).toBeGreaterThan(0);
  });

  it('renders Chapter 2 Value Stream section', () => {
    render(<Page />);
    expect(screen.getAllByText(/バリュードリブン組織における品質とフローの改善/).length).toBeGreaterThan(0);
  });

  it('renders Chapter 3 Continuous Improvement section', () => {
    render(<Page />);
    expect(screen.getAllByText(/品質とテストの継続的改善/).length).toBeGreaterThan(0);
  });

  it('renders Chapter 4 Organizational Test Strategy section', () => {
    render(<Page />);
    expect(screen.getAllByText(/バリュードリブン組織における組織的テスト戦略/).length).toBeGreaterThan(0);
  });

  it('renders Chapter 5 Test Processes section', () => {
    render(<Page />);
    expect(screen.getAllByText(/バリュードリブン組織におけるテストプロセス/).length).toBeGreaterThan(0);
  });
});
