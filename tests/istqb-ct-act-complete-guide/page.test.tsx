import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/istqb-ct-act-complete-guide/page';

afterEach(() => {
  cleanup();
});

describe('ISTQB CT-AcT Complete Guide Page', () => {
  it('renders the hero heading for Acceptance Testing', () => {
    const h1 = render(<Page />).container.querySelector('h1.hero-title');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toMatch(/CT-AcT/);
    expect(h1?.textContent).toMatch(/Acceptance Testing/);
  });

  it('renders the section title headings', () => {
    render(<Page />);
    expect(screen.getByRole('heading', { name: /CT-AcT とは何か？/ })).toBeDefined();
    expect(
      screen.getByRole('heading', { name: /受け入れ基準・テスト設計・BDD\/ATDD/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { name: /協調的な受け入れテスト（Collaborative AT）/ }),
    ).toBeDefined();
  });
});
