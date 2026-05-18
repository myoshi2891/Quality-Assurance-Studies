import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/istqb-ct-mbt-complete-guide/page';

afterEach(() => {
  cleanup();
});

describe('ISTQB CT-MBT Complete Guide Page', () => {
  it('renders the main heading for モデルベーステスト', () => {
    const h1 = render(<Page />).container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toMatch(/CT-MBT/);
    expect(h1?.textContent).toMatch(/モデルベーステスト/);
  });

  it('renders the chapter headings', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /目次・学習ロードマップ/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /MBTの概要・動機・統合/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /MBT テスト実装・実行・適応/ }),
    ).toBeDefined();
  });
});
