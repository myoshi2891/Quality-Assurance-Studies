import { afterAll, afterEach, beforeAll, beforeEach, describe, it, expect, mock } from 'bun:test';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page, {
  DIAGRAM_STRUCTURE,
  DIAGRAM_CAPABILITIES,
  DIAGRAM_TIMELINE,
  DIAGRAM_SDLC_STLC,
  DIAGRAM_PYRAMID,
  DIAGRAM_LIFECYCLE,
  DIAGRAM_CASE_DEV_PILLARS,
  DIAGRAM_SELF_HEALING,
  DIAGRAM_DEFECT_LOOP,
  DIAGRAM_GAP_APPROACHES,
  DIAGRAM_CICD,
  DIAGRAM_PREDICTIVE,
  DIAGRAM_ROADMAP_ADOPTION,
  DIAGRAM_ROADMAP_LEARNING,
} from '../../app/ai-driven-software-testing-guide/page';
import NavBar, { TOC_ITEMS, TOC_GROUPS } from '../../app/ai-driven-software-testing-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
let mermaidRenderMock: ReturnType<typeof mock>;
const renderedCharts: string[] = [];

beforeEach(() => {
  renderedCharts.length = 0;
});

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaidRenderMock = mock(async (_id: string, text: string) => {
    renderedCharts.push(text);
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

describe('AI-Driven Software Testing Guide - Comprehensive Test Suite', () => {
  it('renders hero header with title, subtitle, and 3 meta tags', () => {
    const { container } = render(<Page />);
    const h1 = container.querySelector('h1');
    expect(h1?.textContent?.trim()).toBe('AI駆動ソフトウェアテスト入門ガイド');

    const kicker = container.querySelector('.hero-kicker');
    expect(kicker?.textContent?.trim()).toBe('初学者向け解説ガイド');

    const lead = container.querySelector('.hero-lead');
    expect(lead?.textContent).toContain('Srinivasa Rao Bittla著『AI-Driven Software Testing');

    const tags = container.querySelectorAll('.hero-tag');
    expect(tags.length).toBe(3);
    expect(tags[0]?.textContent).toContain('全3部 全18章');
    expect(tags[1]?.textContent).toContain('図解14点 Mermaid');
    expect(tags[2]?.textContent).toContain('参考文献12件');
  });

  it('renders sidebar navigation with all 29 TOC items across 5 groups', () => {
    expect(TOC_ITEMS.length).toBe(29);
    expect(TOC_GROUPS.length).toBe(5);

    const { container } = render(<NavBar />);
    const links = container.querySelectorAll('.sidebar .nav-a');
    expect(links.length).toBe(29);

    expect(links[0]?.getAttribute('data-target')).toBe('intro');
    expect(links[0]?.textContent).toContain('この記事の読み方');
    expect(links[1]?.getAttribute('data-target')).toBe('glossary');
    expect(links[1]?.textContent).toContain('用語ミニ辞典');
    expect(links[2]?.getAttribute('data-target')).toBe('book-info');
    expect(links[2]?.textContent).toContain('書籍情報');
    expect(links[3]?.getAttribute('data-target')).toBe('structure');
    expect(links[3]?.textContent).toContain('全体構成をつかむ');
    expect(links[28]?.getAttribute('data-target')).toBe('references');
    expect(links[28]?.textContent).toContain('参考文献');

    const groups = container.querySelectorAll('.sidebar .nav-group-label');
    expect(groups.length).toBe(5);
    expect(groups[0]?.textContent).toBe('はじめに');
    expect(groups[1]?.textContent).toBe('Part I 基礎編');
    expect(groups[2]?.textContent).toBe('Part II 実践編');
    expect(groups[3]?.textContent).toBe('Part III 発展編');
    expect(groups[4]?.textContent).toBe('まとめと参考情報');
  });

  it('renders all 29 section IDs in Page DOM', () => {
    const { container } = render(<Page />);
    for (const item of TOC_ITEMS) {
      const el = container.querySelector(`#${item.id}`);
      expect(el).not.toBeNull();
    }
  });

  it('renders all 14 Mermaid diagrams with correct diagram sources and captions', async () => {
    const { container } = render(<Page />);

    const diagrams = [
      { id: '#structure', caption: '図1 書籍全体の3部構成', source: DIAGRAM_STRUCTURE },
      { id: '#step1', caption: '図2 AIとMLがもたらす5つの変化', source: DIAGRAM_CAPABILITIES },
      { id: '#step2', caption: '図3 テスト実務の進化タイムライン', source: DIAGRAM_TIMELINE },
      { id: '#step5', caption: '図4 SDLCとSTLCの並走関係', source: DIAGRAM_SDLC_STLC },
      { id: '#step6', caption: '図5 AIが強化するテストピラミッドの各層', source: DIAGRAM_PYRAMID },
      { id: '#step7', caption: '図6 AI駆動テストライフサイクルの全体像', source: DIAGRAM_LIFECYCLE },
      { id: '#step8', caption: '図7 インテリジェントなテストケース開発の5本柱', source: DIAGRAM_CASE_DEV_PILLARS },
      { id: '#step9', caption: '図8 環境レベルのセルフヒーリングループ', source: DIAGRAM_SELF_HEALING },
      { id: '#step10', caption: '図9 不具合対応のインテリジェンス強化ループ', source: DIAGRAM_DEFECT_LOOP },
      { id: '#step12', caption: '図10 テストギャップを排除する4つのアプローチ', source: DIAGRAM_GAP_APPROACHES },
      { id: '#step14', caption: '図11 AI強化CI/CDパイプライン', source: DIAGRAM_CICD },
      { id: '#step16', caption: '図12 予測分析による障害予防のサイクル', source: DIAGRAM_PREDICTIVE },
      { id: '#step18', caption: '図13 組織導入の3フェーズロードマップ', source: DIAGRAM_ROADMAP_ADOPTION },
      { id: '#roadmap', caption: '図14 学習ロードマップ', source: DIAGRAM_ROADMAP_LEARNING },
    ];

    for (const d of diagrams) {
      const sec = container.querySelector(d.id);
      expect(sec).not.toBeNull();
      const cap = sec?.querySelector('.diagram-caption');
      expect(cap?.textContent?.trim()).toBe(d.caption);
    }

    await waitFor(() => {
      expect(renderedCharts.length).toBe(14);
    });

    for (const d of diagrams) {
      expect(renderedCharts).toContain(d.source);
    }
  });

  it('renders all 8 data tables with expected structure and row counts', () => {
    const { container } = render(<Page />);

    const tables = [
      { id: '#glossary', expectedRows: 7 },
      { id: '#book-info', expectedRows: 7 },
      { id: '#step2', expectedRows: 5 },
      { id: '#step4', expectedRows: 6 },
      { id: '#step11', expectedRows: 4 },
      { id: '#step13', expectedRows: 4 },
      { id: '#step15', expectedRows: 5 },
      { id: '#chapter-list', expectedRows: 18 },
    ];

    for (const t of tables) {
      const sec = container.querySelector(t.id);
      expect(sec).not.toBeNull();
      const rows = sec?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(t.expectedRows);
    }
  });

  it('renders all callouts (info, warn, critical) properly', () => {
    const { container } = render(<Page />);
    const callouts = container.querySelectorAll('.callout');
    expect(callouts.length).toBe(5);

    const warnCallouts = container.querySelectorAll('.callout.warn');
    expect(warnCallouts.length).toBe(1);

    const critCallouts = container.querySelectorAll('.callout.critical');
    expect(critCallouts.length).toBe(3);

    const infoCallouts = container.querySelectorAll('.callout.info');
    expect(infoCallouts.length).toBe(1);
  });

  it('renders interactive checklist with 10 items and dynamic completion counter', () => {
    const { container } = render(<Page />);
    const checklist = container.querySelector('#checklist');
    expect(checklist).not.toBeNull();

    const items = checklist?.querySelectorAll('#checklistItems li');
    expect(items?.length).toBe(10);

    const countText = checklist?.querySelector('#checklistCounter');
    expect(countText?.textContent?.trim()).toBe('0 / 10 完了');

    const firstCheckbox = items?.[0]?.querySelector('input[type="checkbox"]');
    expect(firstCheckbox).not.toBeNull();
    if (firstCheckbox) {
      fireEvent.click(firstCheckbox);
      expect(countText?.textContent?.trim()).toBe('1 / 10 完了');
    }
  });

  it('renders all 18 chapters in section #chapter-list', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#chapter-list');
    expect(section).not.toBeNull();

    const rows = section?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(18);

    expect(rows?.[0]?.textContent).toContain('AIとMLが現代のソフトウェアテストで果たす役割');
    expect(rows?.[17]?.textContent).toContain('AI駆動QE実装への次のステップ');
  });

  it('renders all 12 reference items with external links in section #references', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#references');
    expect(section).not.toBeNull();

    const refCards = section?.querySelectorAll('.ref-card');
    expect(refCards?.length).toBe(12);

    const links = section?.querySelectorAll('.ref-url');
    expect(links?.length).toBe(12);
    links?.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
      expect(link.getAttribute('href')).toMatch(/^https?:\/\//);
    });
  });
});
