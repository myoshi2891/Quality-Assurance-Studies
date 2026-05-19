import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/integration-functional-testing-guide/page';

afterEach(() => {
  cleanup();
});

describe('Integration & Functional Testing Guide Page', () => {
  it('renders the main heading containing INTEGRATION and FUNCTIONAL', () => {
    const h1 = render(<Page />).container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toMatch(/INTEGRATION/);
    expect(h1?.textContent).toMatch(/FUNCTIONAL/);
  });

  it('renders the core technique sections', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /テストレベルの全体像/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /境界値分析（Boundary Value Analysis）/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /デシジョンテーブルテスト/ }),
    ).toBeDefined();
  });
});
