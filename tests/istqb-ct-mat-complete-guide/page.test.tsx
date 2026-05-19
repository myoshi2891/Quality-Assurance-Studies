import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ct-mat-complete-guide/page';

afterEach(() => {
  cleanup();
});

describe('ISTQB CT-MAT Complete Guide Page', () => {
  it('renders the hero heading for Mobile Application Testing', () => {
    render(<Page />);
    const h1 = screen.getByRole('heading', {
      level: 1,
      name: /Mobile Application.*Testing/,
    });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/Mobile Application/);
    expect(h1).toHaveTextContent(/Testing/);
  });

  it('renders the table of contents and outcome sections', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /目次 — チャプター構成/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /7つのビジネスアウトカム/,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /認知レベル（K-Level）の定義/ }),
    ).toBeInTheDocument();
  });
});
