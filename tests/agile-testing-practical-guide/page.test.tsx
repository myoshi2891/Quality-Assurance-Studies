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

  describe('Category B (Steps 2 to 4)', () => {
    it('renders section #step2 with 10 principles table and source callout', () => {
      const { container } = render(<Page />);
      const step2 = container.querySelector('section#step2');
      expect(step2).not.toBeNull();

      const h2 = step2?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ2: アジャイルテスターの10の原則');

      const table = step2?.querySelector('table');
      expect(table).not.toBeNull();
      const rows = table?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(10);
      expect(rows?.[0].textContent).toContain('継続的にフィードバックを提供する');
      expect(rows?.[9].textContent).toContain('楽しむ');

      const callout = step2?.querySelector('.callout.source');
      expect(callout).not.toBeNull();
      expect(callout?.textContent).toContain('出典');
      expect(callout?.textContent).toContain('Crispin, L. & Gregory, J.');
    });

    it('renders section #step3 with organizational challenges table and whole-team diagram', () => {
      const { container } = render(<Page />);
      const step3 = container.querySelector('section#step3');
      expect(step3).not.toBeNull();

      const h2 = step3?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ3: 組織的な課題とホールチームアプローチ');

      const table = step3?.querySelector('table');
      expect(table).not.toBeNull();
      const rows = table?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(4);
      expect(rows?.[0].textContent).toContain('組織構造');
      expect(rows?.[1].textContent).toContain('物理配置 / コミュニケーション');
      expect(rows?.[2].textContent).toContain('役割意識');
      expect(rows?.[3].textContent).toContain('プロセス');

      const caption = step3?.querySelector('.mmd-caption');
      expect(caption?.textContent).toContain('図3: ホールチームアプローチの構造');
    });

    it('renders section #step4 with 4 quadrants matrix table and key takeaways list', () => {
      const { container } = render(<Page />);
      const step4 = container.querySelector('section#step4');
      expect(step4).not.toBeNull();

      const h2 = step4?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ4: アジャイルテストの4象限(Agile Testing Quadrants)');

      const table = step4?.querySelector('table');
      expect(table).not.toBeNull();
      expect(table?.textContent).toContain('ビジネス視点で捉える(Business-Facing)');
      expect(table?.textContent).toContain('技術視点で捉える(Technology-Facing)');

      const qTags = step4?.querySelectorAll('.q-tag');
      expect(qTags?.length).toBe(4);
      expect(Array.from(qTags || []).map((t) => t.textContent)).toEqual(['Q2', 'Q1', 'Q3', 'Q4']);

      const listItems = step4?.querySelectorAll('ul li');
      expect(listItems?.length).toBe(3);
      expect(listItems?.[0].textContent).toContain('4象限に「実施順序」はない');
    });
  });

  describe('Category C (Steps 5 to 8)', () => {
    it('renders section #step5 with test pyramid diagram, step-list of 3 layers, and note callout', () => {
      const { container } = render(<Page />);
      const step5 = container.querySelector('section#step5');
      expect(step5).not.toBeNull();

      const h2 = step5?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ5: テスト自動化戦略とテストピラミッド');

      const caption = step5?.querySelector('.mmd-caption');
      expect(caption?.textContent).toContain('図4: テスト自動化戦略における3つのレイヤー');

      const stepList = step5?.querySelectorAll('ol.step-list li');
      expect(stepList?.length).toBe(3);
      expect(stepList?.[0].textContent).toContain('まずユニットテストの土台を作る');
      expect(stepList?.[1].textContent).toContain('サービス / APIレベルの統合テストを追加する');
      expect(stepList?.[2].textContent).toContain('UI / E2Eテストは最小限に絞る');

      const note = step5?.querySelector('.callout.note');
      expect(note).not.toBeNull();
      expect(note?.textContent).toContain('補足');
      expect(note?.textContent).toContain('Martin Fowler');
    });

    it('renders section #step6 with Power of Three diagram', () => {
      const { container } = render(<Page />);
      const step6 = container.querySelector('section#step6');
      expect(step6).not.toBeNull();

      const h2 = step6?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ6: Power of Three(Three Amigos)と受け入れテスト');

      const caption = step6?.querySelector('.mmd-caption');
      expect(caption?.textContent).toContain('図5: Power of Three による共通理解の形成');
    });

    it('renders section #step7 with iteration cycle diagram and 6-step activity table', () => {
      const { container } = render(<Page />);
      const step7 = container.querySelector('section#step7');
      expect(step7).not.toBeNull();

      const h2 = step7?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ7: テスターのイテレーションサイクル');

      const caption = step7?.querySelector('.mmd-caption');
      expect(caption?.textContent).toContain('図6: テスターのイテレーションサイクル');

      const table = step7?.querySelector('table');
      expect(table).not.toBeNull();
      const rows = table?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(6);
      expect(rows?.[0].textContent).toContain('リリース / テーマ計画');
      expect(rows?.[5].textContent).toContain('確実なリリース');
    });

    it('renders section #step8 with exploratory testing points list and source callout', () => {
      const { container } = render(<Page />);
      const step8 = container.querySelector('section#step8');
      expect(step8).not.toBeNull();

      const h2 = step8?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ8: 探索的テストという技法');

      const listItems = step8?.querySelectorAll('ul li');
      expect(listItems?.length).toBe(3);
      expect(listItems?.[0].textContent).toContain('同時並行で行う');
      expect(listItems?.[1].textContent).toContain('でたらめに触ることではない');
      expect(listItems?.[2].textContent).toContain('タイムボックスで管理する');

      const callout = step8?.querySelector('.callout.source');
      expect(callout).not.toBeNull();
      expect(callout?.textContent).toContain('Hendrickson');
      expect(step8?.textContent).toContain('Elisabeth Hendrickson');
    });
  });
});
