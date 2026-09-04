import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/secure-by-design-guide/page';
import NavBar from '../../app/secure-by-design-guide/NavBar';

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

describe('Secure by Design Guide Page - Comprehensive Test Suite', () => {
  describe('Hero Header & Title Block', () => {
    it('renders the cover header with eyebrow, title, subtitle, thesis, and titleblock items', () => {
      const { container } = render(<Page />);

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeDefined();
      expect(h1.textContent).toContain('セキュア・バイ・デザイン');

      const eyebrow = container.querySelector('.cover .eyebrow');
      expect(eyebrow).not.toBeNull();
      expect(eyebrow?.textContent).toContain('Book Guide · 初学者向け解説');

      const subtitle = container.querySelector('.cover .subtitle');
      expect(subtitle).not.toBeNull();
      expect(subtitle?.textContent).toContain('安全なソフトウェア設計 完全ガイド');

      const thesis = container.querySelector('.cover .thesis');
      expect(thesis).not.toBeNull();
      expect(thesis?.textContent).toContain('セキュリティは「機能」ではなく「関心事」である');

      const titleblock = container.querySelector('.cover .titleblock');
      expect(titleblock).not.toBeNull();
      expect(titleblock?.textContent).toContain('Secure by Design');
      expect(titleblock?.textContent).toContain('Bergh Johnsson / Deogun / Sawano');
      expect(titleblock?.textContent).toContain('Manning Publications');
      expect(titleblock?.textContent).toContain('マイナビ出版');
      expect(titleblock?.textContent).toContain('978-1-61729-435-8');

      const foot = container.querySelector('.cover .cover-foot');
      expect(foot).not.toBeNull();
      expect(foot?.textContent).toContain('SHEET 01 / 13');
    });
  });

  describe('NavBar (Sidebar TOC)', () => {
    it('renders sidebar TOC with title kicker, all section links, and subsection links', () => {
      const { container } = render(<NavBar />);

      const panel = container.querySelector('.toc-panel');
      expect(panel).not.toBeNull();

      const kicker = container.querySelector('.toc-kicker');
      expect(kicker?.textContent).toContain('目次 / Index');

      const expectedMainLinks = [
        { href: '#sec1', num: '01', label: 'この本は何を解決するのか' },
        { href: '#sec2', num: '02', label: '書籍情報と著者' },
        { href: '#sec3', num: '03', label: '世界の開発者からの評価' },
        { href: '#sec4', num: '04', label: '本書全体のマップ' },
        { href: '#sec5', num: '05', label: 'Part 1: 導入編' },
        { href: '#sec6', num: '06', label: 'Part 2: 基礎編' },
        { href: '#sec7', num: '07', label: 'Part 3: 応用編' },
        { href: '#sec8', num: '08', label: '実践ロードマップ' },
        { href: '#sec9', num: '09', label: '本書の限界' },
        { href: '#sec10', num: '10', label: 'さらに学ぶリソース' },
        { href: '#sec11', num: '11', label: '参考文献・出典' },
      ];

      expectedMainLinks.forEach((link) => {
        const a = container.querySelector(`.toc-panel a[href="${link.href}"]`);
        expect(a).not.toBeNull();
        expect(a?.textContent).toContain(link.num);
        expect(a?.textContent).toContain(link.label);
      });

      const expectedSubLinks = [
        { href: '#sec5-1', label: '5.1 設計とセキュリティ' },
        { href: '#sec5-2', label: '5.2 アンチ・ハムレット' },
        { href: '#sec6-1', label: '6.1 DDDの中心概念' },
        { href: '#sec6-2', label: '6.2 セキュアなコード構造' },
        { href: '#sec6-3', label: '6.3 ドメイン・プリミティブ' },
        { href: '#sec6-4', label: '6.4 状態の整合性' },
        { href: '#sec6-5', label: '6.5 パイプライン活用' },
        { href: '#sec6-6', label: '6.6 安全な障害処理' },
        { href: '#sec6-7', label: '6.7 クラウド思考' },
        { href: '#sec6-8', label: '6.8 幕間：保険' },
        { href: '#sec7-1', label: '7.1 レガシーコード' },
        { href: '#sec7-2', label: '7.2 マイクロサービス' },
        { href: '#sec7-3', label: '7.3 まとめ' },
      ];

      expectedSubLinks.forEach((sub) => {
        const a = container.querySelector(`.toc-sub a[href="${sub.href}"]`);
        expect(a).not.toBeNull();
        expect(a?.textContent).toContain(sub.label);
      });
    });
  });

  describe('Sections Content Integrity', () => {
    it('renders all 11 main sections with correct IDs and headings', () => {
      const { container } = render(<Page />);

      const sections = [
        { id: 'sec1', num: '01', title: 'この本は何を解決するのか' },
        { id: 'sec2', num: '02', title: '書籍情報と著者' },
        { id: 'sec3', num: '03', title: '世界の開発者からの評価' },
        { id: 'sec4', num: '04', title: '本書全体のマップ' },
        { id: 'sec5', num: '05', title: 'Part 1: 導入編' },
        { id: 'sec6', num: '06', title: 'Part 2: 基礎編' },
        { id: 'sec7', num: '07', title: 'Part 3: 応用編' },
        { id: 'sec8', num: '08', title: '初学者向け ステップバイステップ実践ロードマップ' },
        { id: 'sec9', num: '09', title: '批判的な視点（本書の限界）' },
        { id: 'sec10', num: '10', title: 'さらに学ぶためのリソース' },
        { id: 'sec11', num: '11', title: '参考文献・出典' },
      ];

      sections.forEach((sec) => {
        const el = container.querySelector(`section#${sec.id}`);
        expect(el).not.toBeNull();
        const num = el?.querySelector('h2 .num');
        expect(num?.textContent?.trim()).toBe(sec.num);
        const h2 = el?.querySelector('h2');
        expect(h2?.textContent).toContain(sec.title);
      });
    });

    it('renders subsections in Part 1, Part 2, and Part 3 with correct IDs and headings', () => {
      const { container } = render(<Page />);

      const subsections = [
        { id: 'sec5-1', title: '第1章：なぜ設計がセキュリティを左右するのか' },
        { id: 'sec5-2', title: '第2章（幕間）：アンチ・ハムレット' },
        { id: 'sec6-1', title: '第3章：DDDの中心概念' },
        { id: 'sec6-2', title: '第4章：セキュリティを促進するコード構造を支える3つの柱' },
        { id: 'sec6-3', title: '第5章：ドメイン・プリミティブ' },
        { id: 'sec6-4', title: '第6章・第7章：状態の整合性と複雑さの軽減' },
        { id: 'sec6-5', title: '第8章：デリバリーパイプラインの活用' },
        { id: 'sec6-6', title: '第9章：安全な障害処理' },
        { id: 'sec6-7', title: '第10章：クラウド思考によるメリット' },
        { id: 'sec6-8', title: '第11章（幕間）：ただで手に入る保険' },
        { id: 'sec7-1', title: '第12章：レガシーコードへの適用' },
        { id: 'sec7-2', title: '第13章：マイクロサービスへの適用' },
        { id: 'sec7-3', title: '第14章：まとめ' },
      ];

      subsections.forEach((sub) => {
        const el = container.querySelector(`h3#${sub.id}`);
        expect(el).not.toBeNull();
        expect(el?.textContent).toContain(sub.title);
      });
    });
  });

  describe('Mermaid Diagrams Integration', () => {
    it('renders all 13 Mermaid diagram plates with correct figcaptions and diagram wrappers', () => {
      const { container } = render(<Page />);

      const plates = container.querySelectorAll('figure.plate');
      expect(plates.length).toBe(13);

      const expectedCaptions = [
        'FIG. 01 — 本書の全体構成と読み進め方',
        'FIG. 02 — 機能として捉える場合 vs 関心事として捉える場合',
        'FIG. 03 — 従来型アプローチが構造的に抱える3つの限界',
        'FIG. 04 — XML入力に対する多層防御の3つの層',
        'FIG. 05 — 浅いモデリング と 深いモデリング の対比',
        'FIG. 06 — DDDの基本語彙とその関係',
        'FIG. 07 — バリデーションの推奨順序',
        'FIG. 08 — ドメイン・プリミティブの生成フロー',
        'FIG. 09 — エンティティの状態遷移をモデル化する例',
        'FIG. 10 — クラウド思考の3つのR',
        'FIG. 11 — レガシーコードへの3つの移行戦略',
        'FIG. 12 — マイクロサービス間の検証境界とログの扱い',
        'FIG. 13 — 導入ロードマップ（Step 1〜9）',
      ];

      plates.forEach((plate, idx) => {
        const figcaption = plate.querySelector('figcaption');
        expect(figcaption).not.toBeNull();
        expect(figcaption?.textContent).toContain(expectedCaptions[idx]);

        const mermaidWrapper = plate.querySelector('.mermaid');
        expect(mermaidWrapper).not.toBeNull();
      });
    });
  });

  describe('Tables Integration', () => {
    it('renders all 5 table-wrap blocks with correct structure and key contents', () => {
      const { container } = render(<Page />);

      const tableWraps = container.querySelectorAll('.table-wrap');
      expect(tableWraps.length).toBe(5);

      // 1. 書籍情報テーブル
      const t1 = tableWraps[0]?.querySelector('table');
      expect(t1?.textContent).toContain('原題');
      expect(t1?.textContent).toContain('Secure by Design');
      expect(t1?.textContent).toContain('ISBN');
      expect(t1?.textContent).toContain('978-1-61729-435-8');

      // 2. 世界の開発者からの評価テーブル
      const t2 = tableWraps[1]?.querySelector('table');
      expect(t2?.textContent).toContain('評者');
      expect(t2?.textContent).toContain('Daniel Terhorst-North');
      expect(t2?.textContent).toContain('Matt Raible');
      expect(t2?.textContent).toContain('Manning公式ページ');

      // 3. 機能 vs 関心事の対比テーブル
      const t3 = tableWraps[2]?.querySelector('table');
      expect(t3?.textContent).toContain('観点');
      expect(t3?.textContent).toContain('機能として捉えた場合');
      expect(t3?.textContent).toContain('関心事（設計）として捉えた場合');
      expect(t3?.textContent).toContain('優先順位の競合');

      // 4. バリデーション順序テーブル
      const t4 = tableWraps[3]?.querySelector('table');
      expect(t4?.textContent).toContain('検査の種類');
      expect(t4?.textContent).toContain('① 出所チェック');
      expect(t4?.textContent).toContain('⑤ 意味チェック');

      // 5. ロードマップテーブル
      const t5 = tableWraps[4]?.querySelector('table');
      expect(t5?.textContent).toContain('Step 1');
      expect(t5?.textContent).toContain('Step 9');
      expect(t5?.textContent).toContain('主な成果物');
    });
  });

  describe('Code Block & Syntax Highlighting', () => {
    it('renders Java code block for Username domain primitive with code-line formatting', () => {
      const { container } = render(<Page />);

      const codeBlock = container.querySelector('pre.code');
      expect(codeBlock).not.toBeNull();
      expect(codeBlock?.textContent).toContain('public final class Username');
      expect(codeBlock?.textContent).toContain('IllegalArgumentException');
      expect(codeBlock?.textContent).toContain('ALLOWED');

      const lines = codeBlock?.querySelectorAll('.code-line');
      expect(lines && lines.length).toBeGreaterThan(15);
    });
  });

  describe('Callouts & Limitation Cards', () => {
    it('renders caveat and quote callouts with icons', () => {
      const { container } = render(<Page />);

      const caveat = container.querySelector('.callout.callout--caveat');
      expect(caveat).not.toBeNull();
      expect(caveat?.textContent).toContain('入力バリデーションは、文脈に応じた出力エンコーディングの代替にはなりません');

      const quote = container.querySelector('.callout.callout--quote');
      expect(quote).not.toBeNull();
      expect(quote?.textContent).toContain('Good design is the best form of security');
    });

    it('renders limitation cards in card-grid', () => {
      const { container } = render(<Page />);

      const cardGrid = container.querySelector('.card-grid');
      expect(cardGrid).not.toBeNull();

      const cards = cardGrid?.querySelectorAll('.lim-card');
      expect(cards?.length).toBe(4);
      expect(cards?.[0]?.textContent).toContain('限界 1');
      expect(cards?.[1]?.textContent).toContain('限界 2');
      expect(cards?.[2]?.textContent).toContain('限界 3');
      expect(cards?.[3]?.textContent).toContain('限界 4');
    });
  });

  describe('References List & Footer', () => {
    it('renders references list with 11 items and footer', () => {
      const { container } = render(<Page />);

      const refList = container.querySelector('.ref-list');
      expect(refList).not.toBeNull();

      const items = refList?.querySelectorAll('li');
      expect(items?.length).toBe(11);

      const footer = container.querySelector('footer');
      expect(footer).not.toBeNull();
      expect(footer?.textContent).toContain('Secure by Design');
    });
  });
});
