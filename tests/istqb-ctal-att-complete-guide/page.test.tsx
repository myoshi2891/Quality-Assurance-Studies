import { describe, it, expect, afterEach, mock, beforeAll, afterAll } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/istqb-ctal-att-complete-guide/page';

afterEach(() => {
  cleanup();
});

let originalIntersectionObserver: typeof IntersectionObserver;

beforeAll(() => {
  if (typeof window !== 'undefined') {
    originalIntersectionObserver = window.IntersectionObserver;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    window.IntersectionObserver = mock((callback) => ({
      observe: mock(),
      unobserve: mock(),
      disconnect: mock(),
      root: null,
      rootMargin: '',
      thresholds: [0],
      takeRecords: () => []
    })) as unknown as typeof IntersectionObserver;
  }
});

afterAll(() => {
  if (typeof window !== 'undefined') {
    window.IntersectionObserver = originalIntersectionObserver;
  }
});

describe('ISTQB CTAL-ATT Complete Guide Page', () => {
  it('renders the hero section with correct title', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('CTAL-ATT');
    expect(heading.textContent).toContain('Agile Technical Tester');
  });

  it('renders the overview section', () => {
    render(<Page />);
    expect(screen.getByText('概要 & 資格ロードマップ')).toBeDefined();
  });

  it('renders the requirements engineering section', () => {
    render(<Page />);
    expect(screen.getByText('要件エンジニアリング')).toBeDefined();
  });

  it('renders the TDD/BDD/ATDD sections', () => {
    render(<Page />);
    expect(screen.getByText('TDD — テスト駆動開発')).toBeDefined();
    expect(screen.getByText('BDD — 振る舞い駆動開発')).toBeDefined();
    expect(screen.getByText('ATDD — 受入テスト駆動開発')).toBeDefined();
  });

  it('renders the CI/CD and service virtualization sections', () => {
    render(<Page />);
    expect(screen.getByText('CI / CT / CD')).toBeDefined();
    expect(screen.getAllByText('サービス仮想化').length).toBeGreaterThan(0);
  });

  it('renders the NavBar with sticky links', () => {
    render(<Page />);
    // Check if the NavBar is rendered
    expect(screen.getAllByText('CTAL-ATT').length).toBeGreaterThan(0); // Brand
    expect(screen.getByText('概要')).toBeDefined();
    expect(screen.getByText('Ch.1 要件')).toBeDefined();
    expect(screen.getByText('Ch.2 TDD')).toBeDefined();
    expect(screen.getAllByText('仮想化').length).toBeGreaterThan(0);
  });
});
