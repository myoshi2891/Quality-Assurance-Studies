import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/istqb-ct-mat-complete-guide/page';

afterEach(() => {
  cleanup();
});

describe('ISTQB CT-MAT Complete Guide Page', () => {
  it('renders the hero heading for Mobile Application Testing', () => {
    const h1 = render(<Page />).container.querySelector('h1.hero-title');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toMatch(/Mobile Application/);
    expect(h1?.textContent).toMatch(/Testing/);
  });

  it('renders the table of contents and outcome sections', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /目次 — チャプター構成/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /7つのビジネスアウトカム/,
      }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /認知レベル（K-Level）の定義/ }),
    ).toBeDefined();
  });
});
