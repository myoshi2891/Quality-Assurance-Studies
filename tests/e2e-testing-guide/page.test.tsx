import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/e2e-testing-guide/page';

afterEach(() => {
  cleanup();
});

describe('E2E Testing Guide Page', () => {
  it('renders the main heading containing End-to-End Testing', () => {
    const h1 = render(<Page />).container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toMatch(/End-to-End/);
    expect(h1?.textContent).toMatch(/Testing/);
  });

  it('renders the foundational E2E sections', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /E2Eテストとは何か？/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /Page Object Model/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /Flaky Tests/ }),
    ).toBeDefined();
  });
});
