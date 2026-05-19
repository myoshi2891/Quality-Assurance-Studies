import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/page';

afterEach(() => {
  cleanup();
});

describe('Home Page', () => {
  it('renders the main heading containing 羅針盤', () => {
    const heading = render(<Page />).container.querySelector('h1');
    expect(heading).not.toBeNull();
    expect(heading?.textContent).toMatch(/羅針盤/);
  });

  it('renders key strategic sections', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /テスト戦略の「形状」を理解する/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /ユニットテスト（単体テスト）/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /BDD — ビヘイビア駆動開発/ }),
    ).toBeDefined();
  });
});
