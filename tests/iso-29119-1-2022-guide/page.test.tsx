import { describe, expect, it } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';
import Iso29119_1_GuidePage from '../../app/iso-29119-1-2022-guide/page';
import * as diagrams from '../../app/iso-29119-1-2022-guide/diagrams';

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

  it('renders all 44 tables across the full document', () => {
    const { container } = render(<Iso29119_1_GuidePage />);
    const tables = Array.from(container.querySelectorAll('.table-scroll table'));
    expect(tables.length).toBe(44);
  });

  it('preserves all 67 navigation links in the sidebar', () => {
    const { container } = render(<Iso29119_1_GuidePage />);
    const sidebarLinks = Array.from(container.querySelectorAll('nav.sidebar a'));
    expect(sidebarLinks.length).toBe(67);
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
