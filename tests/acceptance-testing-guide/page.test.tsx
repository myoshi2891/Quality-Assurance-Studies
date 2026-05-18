import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/acceptance-testing-guide/page';

afterEach(() => {
  cleanup();
});

describe('Acceptance Testing Guide Page', () => {
  it('renders the main heading containing Acceptance Testing', () => {
    const h1 = render(<Page />).container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toMatch(/Acceptance/);
    expect(h1?.textContent).toMatch(/Testing/);
  });

  it('renders the core sections', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /受入テストとは何か/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /受入テストの6種類/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /受入基準（Acceptance Criteria）/ }),
    ).toBeDefined();
  });
});
