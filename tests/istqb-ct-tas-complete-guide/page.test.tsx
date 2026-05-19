import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ct-tas-complete-guide/page';

afterEach(() => {
  cleanup();
});

describe('ISTQB CT-TAS Complete Guide Page', () => {
  it('renders the hero heading for Test Automation Strategy', () => {
    render(<Page />);
    const h1 = screen.getByRole('heading', {
      level: 1,
      name: /CT-TAS.*Test Automation.*Strategy/,
    });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/CT-TAS/);
    expect(h1).toHaveTextContent(/Test Automation/);
    expect(h1).toHaveTextContent(/Strategy/);
  });

  it('renders the chapter section titles', () => {
    render(<Page />);
    expect(screen.getByText(/目次・学習ロードマップ/)).toBeInTheDocument();
    expect(screen.getByText(/テスト自動化戦略とは？/)).toBeInTheDocument();
    expect(
      screen.getByText(/CT-TAS と CTAL-TAE の重要な違い/),
    ).toBeInTheDocument();
  });
});
