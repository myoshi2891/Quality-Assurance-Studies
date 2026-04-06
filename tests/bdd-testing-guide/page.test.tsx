import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/bdd-testing-guide/page';

afterEach(() => {
  cleanup();
});

describe('BDD Testing Guide Page', () => {
  it('renders the main heading', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 1, name: /BDD（ビヘイビア駆動開発）/i });
    expect(heading).toBeDefined();
  });

  it('renders key sections', () => {
    render(<Page />);
    const section1 = screen.getByRole('heading', { level: 2, name: /1. BDDとは何か？/i });
    expect(section1).toBeDefined();
    
    const section6 = screen.getByRole('heading', { level: 2, name: /6. スリーアミーゴス（Three Amigos）/i });
    expect(section6).toBeDefined();

    const section7 = screen.getByRole('heading', { level: 2, name: /7. Gherkin言語の完全解説/i });
    expect(section7).toBeDefined();
  });

  it('renders code blocks properly (check for some syntax keywords)', () => {
    render(<Page />);
    const codeBlock = screen.getAllByText(/Feature:/);
    expect(codeBlock.length).toBeGreaterThan(0);
  });
});
