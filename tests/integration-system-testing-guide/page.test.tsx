import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/integration-system-testing-guide/page';

afterEach(() => {
  cleanup();
});

describe('Integration & System Testing Guide Page', () => {
  it('renders the main heading containing Integration and System Testing', () => {
    const h1 = render(<Page />).container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toMatch(/Integration/);
    expect(h1?.textContent).toMatch(/System Testing/);
  });

  it('renders the core testing-strategy sections', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /インテグレーションテスト（統合テスト）/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /スモークテスト/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /リグレッションテスト/ }),
    ).toBeDefined();
  });
});
