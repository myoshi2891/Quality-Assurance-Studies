import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/software-testing-methodologies-guide/page';

afterEach(() => {
  cleanup();
});

describe('Software Testing Methodologies Guide Page', () => {
  it('renders the main heading containing Test Methodologies', () => {
    const h1 = render(<Page />).container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toMatch(/Test/);
    expect(h1?.textContent).toMatch(/Methodologies/);
  });

  it('renders the methodology overview sections', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /テストの7基本原則/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /ブラックボックス \/ ホワイトボックス \/ グレーボックス/,
      }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /4つのテストレベル/ }),
    ).toBeDefined();
  });
});
