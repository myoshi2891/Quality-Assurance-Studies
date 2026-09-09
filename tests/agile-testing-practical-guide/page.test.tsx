import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/agile-testing-practical-guide/page';
import NavBar, { NAV_ITEMS } from '../../app/agile-testing-practical-guide/NavBar';

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

describe('Agile Testing Practical Guide - Category A (Hero, About, Step 1, Navigation)', () => {
  it('renders within the scoped root container .agile-testing-practical-page', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.agile-testing-practical-page');
    expect(root).not.toBeNull();
  });

  it('renders hero section with eyebrow, h1, lead, and 4 meta chips', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('.hero');
    expect(hero).not.toBeNull();

    const eyebrow = container.querySelector('.hero .eyebrow');
    expect(eyebrow?.textContent).toContain('名著解説');

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('初学者のための実践ガイド');
    expect(h1.textContent).toContain('Agile Testing: A Practical Guide for Testers and Agile Teams');

    const lead = container.querySelector('.hero .lead');
    expect(lead?.textContent).toContain('アジャイルテストのバイブル');

    const chips = container.querySelectorAll('.hero .chip');
    expect(chips.length).toBe(4);
    expect(chips[0].textContent).toContain('Lisa Crispin, Janet Gregory');
    expect(chips[1].textContent).toContain('Addison-Wesley Professional');
    expect(chips[2].textContent).toContain('初版 2009年');
    expect(chips[3].textContent).toContain("O'Reilly掲載ページ");
  });

  it('renders NavBar with 14 TOC links matching exact href and labels', () => {
    const { container } = render(<NavBar />);
    expect(NAV_ITEMS.length).toBe(14);

    const expectedNav = [
      { href: '#about', label: 'この本について' },
      { href: '#step1', label: 'ステップ1: アジャイルテストとは' },
      { href: '#step2', label: 'ステップ2: 10の原則' },
      { href: '#step3', label: 'ステップ3: 組織課題とホールチーム' },
      { href: '#step4', label: 'ステップ4: アジャイルテストの4象限' },
      { href: '#step5', label: 'ステップ5: 自動化とテストピラミッド' },
      { href: '#step6', label: 'ステップ6: Power of Three' },
      { href: '#step7', label: 'ステップ7: イテレーションサイクル' },
      { href: '#step8', label: 'ステップ8: 探索的テスト' },
      { href: '#step9', label: 'ステップ9: 7つの成功要因' },
      { href: '#step10', label: 'ステップ10: 思想の進化' },
      { href: '#checklist', label: '実践チェックリスト' },
      { href: '#pitfalls', label: 'よくある落とし穴' },
      { href: '#references', label: '参考文献・出典URL' },
    ];

    expectedNav.forEach((item, idx) => {
      expect(NAV_ITEMS[idx].href).toBe(item.href);
      expect(NAV_ITEMS[idx].label).toBe(item.label);
    });

    const links = container.querySelectorAll('.side-nav a');
    expect(links.length).toBe(14);
  });

  it('renders section #about with 2 tables: bibliographic KV table and book structure map table', () => {
    const { container } = render(<Page />);
    const aboutSection = container.querySelector('section#about');
    expect(aboutSection).not.toBeNull();

    const h2 = aboutSection?.querySelector('h2');
    expect(h2?.textContent).toContain('この本について');

    const tables = aboutSection?.querySelectorAll('table');
    expect(tables?.length).toBe(2);

    // Table 1: KV table with bibliographic data
    const kvTable = tables?.[0];
    expect(kvTable?.classList.contains('kv-table')).toBe(true);
    expect(kvTable?.textContent).toContain('Agile Testing: A Practical Guide for Testers and Agile Teams');
    expect(kvTable?.textContent).toContain('Lisa Crispin, Janet Gregory');
    expect(kvTable?.textContent).toContain('Addison-Wesley Professional');
    expect(kvTable?.textContent).toContain('2009年1月 (初版)');

    // Table 2: Book structure map
    const structTable = tables?.[1];
    expect(structTable?.textContent).toContain('Part I: はじめに');
    expect(structTable?.textContent).toContain('Part II: 組織的な課題への対処');
    expect(structTable?.textContent).toContain('Part III: アジャイルテストの4象限');
    expect(structTable?.textContent).toContain('Part IV: 自動化');
    expect(structTable?.textContent).toContain('Part V: テスターのイテレーションライフ');
    expect(structTable?.textContent).toContain('Part VI: 成功への鍵');
  });

  it('renders section #step1 with traditional vs agile flow diagrams', () => {
    const { container } = render(<Page />);
    const step1 = container.querySelector('section#step1');
    expect(step1).not.toBeNull();

    const h2 = step1?.querySelector('h2');
    expect(h2?.textContent).toContain('ステップ1: アジャイルテストとは何か');

    const kicker = step1?.querySelector('.kicker');
    expect(kicker?.textContent).toContain('原著 第1〜2章');

    const captions = step1?.querySelectorAll('.mmd-caption');
    expect(captions?.length).toBe(2);
    expect(captions?.[0].textContent).toContain('図1: 従来型(テスト後工程型)の開発フロー');
    expect(captions?.[1].textContent).toContain('図2: アジャイルにおける継続的テストフロー');
  });
});
