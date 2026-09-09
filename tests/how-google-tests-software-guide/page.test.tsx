import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/how-google-tests-software-guide/page';
import NavBar, { NAV_ITEMS } from '../../app/how-google-tests-software-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
let mermaidRenderMock: ReturnType<typeof mock>;

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaidRenderMock = mock(async () => {
    return {
      svg: '<svg data-testid="mock-mermaid"></svg>',
      diagramType: 'flowchart',
    };
  });
  mermaid.render = mermaidRenderMock as unknown as typeof mermaid.render;

  const mockIntersectionObserver = mock(() => {
    return {
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    };
  });
  window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterAll(() => {
  mermaid.render = originalMermaidRender;
  window.IntersectionObserver = originalIntersectionObserver;
});

describe('How Google Tests Software Guide - Category A (Foundation, Hero, NavBar & Sections 0-2)', () => {
  it('renders within the scoped root container', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.how-google-tests-page');
    expect(root).not.toBeNull();
  });

  it('renders the hero section with h1, kicker, subtitle, and meta chips', () => {
    render(<Page />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toBe('『How Google Tests Software』完全ガイド');

    expect(screen.getByText('書籍ガイド・QAエンジニア向け')).not.toBeNull();
    expect(
      screen.getByText(/Googleのソフトウェアテスト文化を、初学者にもわかるようにステップバイステップで解説します/)
    ).not.toBeNull();

    expect(screen.getByText(/James Whittaker・Jason Arbon・Jeff Carollo/)).not.toBeNull();
    expect(screen.getByText(/Addison-Wesley Professional・2012年刊/)).not.toBeNull();
    
    const googleBooksLink = screen.getByRole('link', { name: /Google Booksで見る/i });
    expect(googleBooksLink.getAttribute('href')).toBe(
      'https://books.google.co.jp/books/about/How_Google_Tests_Software.html?id=vHlTOVTKHeUC&redir_esc=y'
    );
    expect(googleBooksLink.getAttribute('target')).toBe('_blank');
    expect(googleBooksLink.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('renders all 16 TOC navigation items in NavBar', () => {
    render(<NavBar />);
    expect(NAV_ITEMS).toHaveLength(16);
    expect(NAV_ITEMS[0]).toEqual({ href: '#about', label: 'この記事について', icon: 'ti ti-info-circle' });
    expect(NAV_ITEMS[1]).toEqual({ href: '#s1', label: '1. 歴史的背景', icon: 'ti ti-history' });
    expect(NAV_ITEMS[2]).toEqual({ href: '#s2', label: '2. Googleのテスト思想', icon: 'ti ti-bulb' });
    expect(NAV_ITEMS[3]).toEqual({ href: '#s3', label: '3. 3つの役割', icon: 'ti ti-users' });
    expect(NAV_ITEMS[4]).toEqual({ href: '#s4', label: '4. テストサイズ', icon: 'ti ti-ruler-2' });
    expect(NAV_ITEMS[5]).toEqual({ href: '#s5', label: '5. ACC分析', icon: 'ti ti-target-arrow' });
    expect(NAV_ITEMS[6]).toEqual({ href: '#s6', label: '6. Test Certified', icon: 'ti ti-stairs-up' });
    expect(NAV_ITEMS[7]).toEqual({ href: '#s7', label: '7. フレーキーテスト', icon: 'ti ti-alert-triangle' });
    expect(NAV_ITEMS[8]).toEqual({ href: '#s8', label: '8. クラウドソーシング', icon: 'ti ti-cloud' });
    expect(NAV_ITEMS[9]).toEqual({ href: '#s9', label: '9. CIとTotT文化', icon: 'ti ti-git-branch' });
    expect(NAV_ITEMS[10]).toEqual({ href: '#s10', label: '10. 導入ステップ', icon: 'ti ti-checklist' });
    expect(NAV_ITEMS[11]).toEqual({ href: '#s11', label: '11. 2026年への進化', icon: 'ti ti-timeline' });
    expect(NAV_ITEMS[12]).toEqual({ href: '#s12', label: '12. 批判的視点', icon: 'ti ti-alert-circle' });
    expect(NAV_ITEMS[13]).toEqual({ href: '#s13', label: '13. 原著の章立て', icon: 'ti ti-book-2' });
    expect(NAV_ITEMS[14]).toEqual({ href: '#s14', label: '14. まとめ', icon: 'ti ti-list-details' });
    expect(NAV_ITEMS[15]).toEqual({ href: '#s15', label: '15. 参考文献', icon: 'ti ti-link' });
  });

  it('renders section #about with correct heading and explanatory text', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#about');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('この記事について');
    expect(section?.textContent).toContain('当時Googleのエンジニアリングディレクター');
    expect(section?.textContent).toContain('Testing Grouplet創設メンバーである Mike Bland 氏');
  });

  it('renders section #s1 with heading, content, and Mermaid diagram dg-history', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s1');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('なぜGoogleは独自のテスト文化を築いたのか');
    expect(section?.textContent).toContain('Testing on the Toilet（TotT）');
    
    const mermaidEl = section?.querySelector('#dg-history');
    expect(mermaidEl).not.toBeNull();
    expect(section?.textContent).toContain('図1: Googleのテスト文化が形成された歴史的な流れ');
  });

  it('renders section #s2 with heading, quote, and callout', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#s2');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Googleのテスト思想：「品質」と「テスト」は別物');

    const quote = section?.querySelector('blockquote');
    expect(quote?.textContent).toContain('Scarcity brings clarity（乏しさは明確さをもたらす）');

    const callout = section?.querySelector('.callout.indigo');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('初学者へのポイント');
    expect(callout?.textContent).toContain('テストを「専門のテスターだけの仕事」と捉えず');
  });
});
