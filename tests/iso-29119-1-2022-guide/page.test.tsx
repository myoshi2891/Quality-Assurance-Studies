import { describe, expect, it } from 'bun:test';
import React from 'react';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { render } from '@testing-library/react';
import Iso29119_1_GuidePage from '../../app/iso-29119-1-2022-guide/page';
import * as diagrams from '../../app/iso-29119-1-2022-guide/diagrams';

const SOURCE_HTML_PATH = join(import.meta.dir, '../../archive/html-archive/iso/Iso-29119-1-2022-guide.html');

interface Inventory {
  headings: string[];
  toc: string[];
  diagrams: string[];
  tables: string[];
  code: string[];
  callouts: string[];
  refs: string[];
}

/** 連続する空白を 1 つにまとめ、ソース整形由来の改行・字下げ差を無視する */
function normalize(text: string | null | undefined): string {
  return (text ?? '').replace(/\s+/g, ' ').trim();
}

/** 原本の目次と本文（ヒーロー・フッターを除く）を解析する。描画済み SVG は happy-dom が解析しきれないため空要素に置き換える */
function loadSourceRoot(): DocumentFragment {
  const html = readFileSync(SOURCE_HTML_PATH, 'utf8');
  const start = html.indexOf('<nav class="sidebar"');
  const end = html.indexOf('<footer class="page-footer"');
  if (start < 0 || end < 0) {
    throw new Error('source HTML landmarks (nav.sidebar / footer.page-footer) not found');
  }
  const template = document.createElement('template');
  template.innerHTML = html.slice(start, end).replace(/<svg[\s\S]*?<\/svg>/g, '<svg></svg>');
  return template.content;
}

function extractInventory(root: ParentNode): Inventory {
  const article = root.querySelector('article.content');
  const nav = root.querySelector('nav.sidebar');
  if (!article || !nav) {
    throw new Error('article.content or nav.sidebar not found');
  }
  return {
    headings: Array.from(article.querySelectorAll('h2, h3, h4')).map(
      (h) => `${h.tagName}|${h.id}|${normalize(h.textContent)}`
    ),
    toc: Array.from(nav.querySelectorAll('a')).map(
      (a) => `${a.getAttribute('href') ?? ''}|${normalize(a.textContent)}`
    ),
    diagrams: Array.from(article.querySelectorAll('.mermaid-diagram')).map(
      (d) => `${d.id}|${d.getAttribute('aria-label') ?? ''}`
    ),
    tables: Array.from(article.querySelectorAll('table')).map((table) =>
      Array.from(table.querySelectorAll('tr'))
        .map((row) =>
          Array.from(row.children)
            .map((cell) => `${cell.tagName}:${normalize(cell.textContent)}`)
            .join(' ¦ ')
        )
        .join(' ⏎ ')
    ),
    code: Array.from(article.querySelectorAll('pre')).map((pre) => pre.textContent ?? ''),
    callouts: Array.from(article.querySelectorAll('.callout')).map(
      (c) => `${c.className}|${Array.from(c.children).map((part) => normalize(part.textContent)).join(' / ')}`
    ),
    refs: Array.from(article.querySelectorAll('a[href^="http"]')).map(
      (a) =>
        `${a.getAttribute('href') ?? ''}|${normalize(a.textContent)}|${a.getAttribute('target') ?? ''}|${a.getAttribute('rel') ?? ''}`
    ),
  };
}

describe('ISO/IEC/IEEE 29119-1:2022 Full Page Integration Test', () => {
  it('renders complete page without crashing', () => {
    const { container } = render(<Iso29119_1_GuidePage />);
    const pageRoot = container.querySelector('.iso-29119-1-page');
    expect(pageRoot).not.toBeNull();
  });

  it('renders all 15 H2 section headings in correct document order', () => {
    const { container } = render(<Iso29119_1_GuidePage />);
    const h2s = Array.from(container.querySelectorAll('article.content h2'));
    const expectedH2s = [
      'STEP 0：このガイドの使い方と前提',
      'STEP 1：規格の全体像',
      'STEP 2：2013年版からの変更点',
      'STEP 3：規格の構成を地図で把握する',
      'STEP 4：ソフトウェアテストの基本概念（4.1節）',
      'STEP 5：テスト計画とテスト戦略（4.2節）',
      'STEP 6：テストフレームワーク（4.3節）',
      'STEP 7：テスト設計と実行（4.4節）',
      'STEP 8：プロジェクト管理・報告・インシデント管理（4.5〜4.7節）',
      'STEP 9：システム特性とテストの役割（附属書A・B）',
      'STEP 10：実務への適用手順',
      'STEP 11：この規格をめぐる議論を知っておく',
      'STEP 12：理解度チェック（10問）',
      '用語集',
      '根拠ソース一覧（URL）'
    ];
    expect(h2s.map(el => el.textContent?.trim())).toEqual(expectedH2s);
  });

  it('wires all 18 mermaid diagrams with Mermaid component', () => {
    const { container } = render(<Iso29119_1_GuidePage />);
    const diagramContainers = Array.from(container.querySelectorAll('.mermaid-diagram'));
    expect(diagramContainers.length).toBe(18);

    const expectedDiagramIds = [
      'mmd01', 'mmd02', 'mmd03', 'mmd04', 'mmd05', 'mmd06',
      'mmd07', 'mmd08', 'mmd09', 'mmd10', 'mmd11', 'mmd12',
      'mmd13', 'mmd14', 'mmd15', 'mmd16', 'mmd17', 'mmd18'
    ];
    expect(diagramContainers.map(el => el.id)).toEqual(expectedDiagramIds);
  });

  describe('matches the refreshed source HTML one-to-one in document order', () => {
    // 期待値は Git 追跡下の刷新版原本（2026-10 版）から毎回抽出する。件数ではなく出現順の全要素を照合し、
    // 欠落・余剰・入れ替え・内容の置換を検出する。
    const source = extractInventory(loadSourceRoot());

    const cases: ReadonlyArray<[string, keyof Inventory, number]> = [
      ['headings (H2〜H4: tag, id, text)', 'headings', 76],
      ['TOC links (href, text)', 'toc', 67],
      ['diagrams (id, aria-label)', 'diagrams', 18],
      ['tables (every cell with header/data kind)', 'tables', 44],
      ['code blocks (exact text)', 'code', 0],
      ['callouts (variant, title, body)', 'callouts', 12],
      ['external references (href, text, target, rel)', 'refs', 20],
    ];

    it.each(cases)('%s', (_label, key, expectedCount) => {
      // Arrange
      const { container } = render(<Iso29119_1_GuidePage />);

      // Act
      const rendered = extractInventory(container);

      // Assert: 原本側の抽出漏れを防ぐため件数も固定し、そのうえで全要素を順序どおり照合する
      expect(source[key].length).toBe(expectedCount);
      expect(rendered[key]).toEqual(source[key]);
    });
  });

  it('preserves all 67 navigation links in the sidebar', () => {
    const { container } = render(<Iso29119_1_GuidePage />);
    const sidebarLinks = Array.from(container.querySelectorAll('nav.sidebar a'));
    expect(sidebarLinks.length).toBe(67);

    // 全フラグメントリンクの遷移先が本文に存在すること
    // （日本語・数字始まりの ID は CSS セレクターで扱いにくく、他テストの DOM も残り得るため本文内の ID 集合で照合）
    const content = container.querySelector('article.content');
    expect(content).not.toBeNull();
    const contentIds = new Set(
      Array.from(content?.querySelectorAll('[id]') ?? []).map((el) => el.id)
    );
    const unresolved = sidebarLinks
      .map((a) => decodeURIComponent((a.getAttribute('href') ?? '').replace(/^#/, '')))
      .filter((id) => id !== '')
      .filter((id) => !contentIds.has(id));
    expect(unresolved).toEqual([]);
  });

  it('validates that every diagram definition in diagrams.ts includes config and accessibility description', () => {
    for (let i = 1; i <= 18; i++) {
      const key = `DIAGRAM_${String(i).padStart(2, '0')}`;
      const chart = (diagrams as Record<string, string>)[key];
      expect(chart).toBeDefined();
      expect(chart).toContain('accTitle:');
      expect(chart).toContain('accDescr:');
    }
  });
});
