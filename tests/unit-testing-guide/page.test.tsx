import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/unit-testing-guide/page';

afterEach(() => {
  cleanup();
});

describe('Unit Testing Guide Page', () => {
  it('renders the main heading mentioning 良いテスト', () => {
    const h1 = render(<Page />).container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toMatch(/良いテスト/);
  });

  it('renders the foundational unit-testing sections', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /なぜユニットテストが必要なのか？/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /AAAパターン/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /TDD（テスト駆動開発）/ }),
    ).toBeDefined();
  });
});
