import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';
import Page from '../../app/istqb-ct-game-complete-guide/page';

describe('CT-GaMe Guide Page', () => {
  it('renders the page and includes the correct H1 heading', () => {
    render(<Page />);

    // H1 headings with line breaks are often split, or we just check the main text
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toMatch(/ゲームテスト/i);
    expect(heading.textContent).toMatch(/完全学習ガイド/i);
  });
});
