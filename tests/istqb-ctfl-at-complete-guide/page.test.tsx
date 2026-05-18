import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/istqb-ctfl-at-complete-guide/page';

afterEach(() => {
  cleanup();
});

describe('ISTQB CTFL-AT Complete Guide Page', () => {
  it('renders the main heading for Foundation Level Agile Tester', () => {
    const h1 = render(<Page />).container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toMatch(/Foundation Level Agile Tester/);
    expect(h1?.textContent).toMatch(/CTFL-AT/);
  });

  it('renders the core chapter headings', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /Chapter 0: CTFL-AT 概要と資格ロードマップ/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Chapter 1: アジャイルソフトウェア開発/,
      }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Chapter 3: アジャイルテスト技法とツール/,
      }),
    ).toBeDefined();
  });
});
