import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/istqb-ct-tas-complete-guide/page';

afterEach(() => {
  cleanup();
});

describe('ISTQB CT-TAS Complete Guide Page', () => {
  it('renders the hero heading for Test Automation Strategy', () => {
    const h1 = render(<Page />).container.querySelector('h1.hero-title');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toMatch(/CT-TAS/);
    expect(h1?.textContent).toMatch(/Test Automation/);
    expect(h1?.textContent).toMatch(/Strategy/);
  });

  it('renders the chapter section titles', () => {
    render(<Page />);
    // このページは <div className="section-title"> で章見出しを表現しているため、
    // 役割クエリではなくテキストで存在を検証する
    expect(screen.getByText(/目次・学習ロードマップ/)).toBeDefined();
    expect(screen.getByText(/テスト自動化戦略とは？/)).toBeDefined();
    expect(
      screen.getByText(/CT-TAS と CTAL-TAE の重要な違い/),
    ).toBeDefined();
  });
});
