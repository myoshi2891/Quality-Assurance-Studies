import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/istqb-ctal-tm-complete-guide/page';




afterEach(() => {
  cleanup();
});

describe('ISTQB CTAL-TM Complete Guide Page', () => {
  it('renders the hero section with correct title', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('CTAL-TM v3.0');
    expect(heading.textContent).toContain('完全学習ガイド');
  });

  it('renders Chapter 0 Overview section', () => {
    render(<Page />);
    expect(screen.getAllByText('試験概要と資格ロードマップ').length).toBeGreaterThan(0);
  });

  it('renders Chapter 1 Managing Test Activities section', () => {
    render(<Page />);
    expect(screen.getByText('テスト活動の管理（Managing the Test Activities）')).toBeDefined();
  });

  it('renders Chapter 2 Product Management section', () => {
    render(<Page />);
    expect(screen.getAllByText(/製品の管理/).length).toBeGreaterThan(0);
  });
  
  it('renders Chapter 3 Team Management section', () => {
    render(<Page />);
    expect(screen.getAllByText(/チームの管理/).length).toBeGreaterThan(0);
  });
});
