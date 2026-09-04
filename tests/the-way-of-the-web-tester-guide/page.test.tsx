import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/the-way-of-the-web-tester-guide/page';
import NavBar from '../../app/the-way-of-the-web-tester-guide/NavBar';

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

describe('The Way of the Web Tester Guide Page - Comprehensive Test Suite', () => {
  describe('Hero Section & Metadata', () => {
    it('renders the main hero header with eyebrow, title, subtitle, note, and stat cards', () => {
      const { container } = render(<Page />);

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeDefined();
      expect(h1.textContent).toContain('The Way of the Web Tester 実践ガイド');

      const eyebrow = container.querySelector('.hero .eyebrow');
      expect(eyebrow).not.toBeNull();
      expect(eyebrow?.textContent).toContain('初学者向け実践ガイド');

      const subtitle = container.querySelector('.hero .subtitle');
      expect(subtitle).not.toBeNull();
      expect(subtitle?.textContent).toContain('初学者のためのステップバイステップ・ベストプラクティス');

      const heroNote = container.querySelector('.hero .hero-note');
      expect(heroNote).not.toBeNull();
      expect(heroNote?.textContent).toContain('Jonathan Rasmusson');
      expect(heroNote?.textContent).toContain('The Way of the Web Tester');
      expect(heroNote?.textContent).toContain('Pragmatic Bookshelf');

      const statCards = container.querySelectorAll('.hero .stat-card');
      expect(statCards.length).toBe(4);
      expect(statCards[0]?.textContent).toContain('2016');
      expect(statCards[0]?.textContent).toContain('原著出版年');
      expect(statCards[1]?.textContent).toContain('256');
      expect(statCards[1]?.textContent).toContain('原著ページ数');
      expect(statCards[2]?.textContent).toContain('18');
      expect(statCards[2]?.textContent).toContain('本ガイドの章立て');
      expect(statCards[3]?.textContent).toContain('6');
      expect(statCards[3]?.textContent).toContain('Mermaid図解');
    });
  });

  describe('NavBar (Sidebar)', () => {
    it('renders sidebar title, subtitle, mobile toggle button, and all 18 navigation links', () => {
      const { container } = render(<NavBar />);

      const toggle = container.querySelector('#navToggle');
      expect(toggle).not.toBeNull();
      expect(toggle?.getAttribute('aria-controls')).toBe('sidebar');

      const sidebarTitle = container.querySelector('.sidebar-title');
      expect(sidebarTitle).not.toBeNull();
      expect(sidebarTitle?.textContent).toContain('The Way of');
      expect(sidebarTitle?.textContent).toContain('the Web Tester');

      const sidebarSub = container.querySelector('.sidebar-sub');
      expect(sidebarSub).not.toBeNull();
      expect(sidebarSub?.textContent).toContain('実践ガイド 目次');

      const navLinks = container.querySelectorAll('.side-nav .nav-link');
      expect(navLinks.length).toBe(18);

      const expectedLinks = [
        { href: '#sec-1', label: '1. 本書について' },
        { href: '#sec-2', label: '2. テストピラミッドとは何か' },
        { href: '#sec-3', label: '3. Step1: UIテストを書く' },
        { href: '#sec-4', label: '4. Step2: レガシーへのUIテスト追加' },
        { href: '#sec-5', label: '5. Step3: 統合テストでつなぐ' },
        { href: '#sec-6', label: '6. Step4: RESTful APIの統合テスト' },
        { href: '#sec-7', label: '7. Step5: 単体テストで土台を固める' },
        { href: '#sec-8', label: '8. Step6: JSの単体テスト' },
        { href: '#sec-9', label: '9. Step7: ピラミッドを登る実践フロー' },
        { href: '#sec-10', label: '10. テストコードのスタイル' },
        { href: '#sec-11', label: '11. テストの整理法' },
        { href: '#sec-12', label: '12. 効果的なモックの使い方' },
        { href: '#sec-13', label: '13. テスト駆動開発（TDD）' },
        { href: '#sec-14', label: '14. テスティングトロフィー' },
        { href: '#sec-15', label: '15. Playwrightのベストプラクティス' },
        { href: '#sec-16', label: '16. チェックリスト' },
        { href: '#sec-17', label: '17. まとめ' },
        { href: '#sec-18', label: '18. 参考文献' },
      ];

      expectedLinks.forEach((expected, index) => {
        expect(navLinks[index]?.getAttribute('href')).toBe(expected.href);
        expect(navLinks[index]?.textContent).toContain(expected.label);
      });
    });
  });

  describe('Sections Content Coverage (Sections 1 to 18)', () => {
    it('renders all 18 sections with correct IDs and headings', () => {
      const { container } = render(<Page />);

      for (let i = 1; i <= 18; i++) {
        const section = container.querySelector(`#sec-${i}`);
        expect(section).not.toBeNull();
        const h2 = section?.querySelector('h2');
        expect(h2).not.toBeNull();
        expect(h2?.textContent).toContain(`${i}.`);
      }
    });

    it('renders key content for Sections 1 to 6', () => {
      const { container } = render(<Page />);

      // Section 1
      const sec1 = container.querySelector('#sec-1');
      expect(sec1?.textContent).toContain('Jonathan Rasmusson');
      expect(sec1?.textContent).toContain('The Agile Samurai');
      expect(sec1?.textContent).toContain('Spotify');

      // Section 2
      const sec2 = container.querySelector('#sec-2');
      expect(sec2?.textContent).toContain('Mike Cohn');
      expect(sec2?.textContent).toContain('Succeeding with Agile');
      expect(sec2?.textContent).toContain('Martin Fowler');
      expect(sec2?.querySelector('table')).not.toBeNull();

      // Section 3
      const sec3 = container.querySelector('#sec-3');
      expect(sec3?.textContent).toContain('HTMLは「アサーション（検証）」のためにある');
      expect(sec3?.textContent).toContain('CSSは「セレクション（要素の特定）」のためにある');
      expect(sec3?.querySelector('table')).not.toBeNull();

      // Section 4
      const sec4 = container.querySelector('#sec-4');
      expect(sec4?.textContent).toContain('レガシーシステム');
      expect(sec4?.querySelector('table')).not.toBeNull();

      // Section 5
      const sec5 = container.querySelector('#sec-5');
      expect(sec5?.textContent).toContain('統合テストとは');
      expect(sec5?.textContent).toContain('REST（Representational State Transfer）');
      expect(sec5?.querySelector('table')).not.toBeNull();

      // Section 6
      const sec6 = container.querySelector('#sec-6');
      expect(sec6?.textContent).toContain('RESTful Web API');
      expect(sec6?.querySelector('table')).not.toBeNull();
      expect(sec6?.textContent).toContain('GET');
      expect(sec6?.textContent).toContain('POST');
      expect(sec6?.textContent).toContain('PUT');
      expect(sec6?.textContent).toContain('DELETE');
    });

    it('renders key content for Sections 7 to 12', () => {
      const { container } = render(<Page />);

      // Section 7
      const sec7 = container.querySelector('#sec-7');
      expect(sec7?.textContent).toContain('単体テストで土台を固める');
      expect(sec7?.textContent).toContain('Arrange → Act → Assert');
      expect(sec7?.querySelector('table')).not.toBeNull();

      // Section 8
      const sec8 = container.querySelector('#sec-8');
      expect(sec8?.textContent).toContain('Bug Hunt');
      expect(sec8?.querySelector('table')).not.toBeNull();

      // Section 9
      const sec9 = container.querySelector('#sec-9');
      expect(sec9?.textContent).toContain('フレーキー（不安定）なテストへの対処');
      expect(sec9?.textContent).toContain('契約テスト（Contract Testing）');

      // Section 10
      const sec10 = container.querySelector('#sec-10');
      expect(sec10?.textContent).toContain('Programming 101');
      expect(sec10?.querySelector('table')).not.toBeNull();

      // Section 11
      const sec11 = container.querySelector('#sec-11');
      expect(sec11?.textContent).toContain('混沌の国（The Land of Confusion）');
      expect(sec11?.textContent).toContain('隔離（Isolation）');

      // Section 12
      const sec12 = container.querySelector('#sec-12');
      expect(sec12?.textContent).toContain('効果的なモックの使い方');
      expect(sec12?.textContent).toContain('ポート・アンド・アダプター');
      expect(sec12?.querySelector('table')).not.toBeNull();
    });

    it('renders key content for Sections 13 to 18', () => {
      const { container } = render(<Page />);

      // Section 13
      const sec13 = container.querySelector('#sec-13');
      expect(sec13?.textContent).toContain('テスト駆動開発（TDD）');
      expect(sec13?.textContent).toContain('Red');
      expect(sec13?.textContent).toContain('Green');
      expect(sec13?.textContent).toContain('Refactor');

      // Section 14
      const sec14 = container.querySelector('#sec-14');
      expect(sec14?.textContent).toContain('テスティングトロフィー');
      expect(sec14?.textContent).toContain('Kent C. Dodds');
      expect(sec14?.textContent).toContain('Guillermo Rauch');
      expect(sec14?.querySelector('table')).not.toBeNull();

      // Section 15
      const sec15 = container.querySelector('#sec-15');
      expect(sec15?.textContent).toContain('Playwrightのベストプラクティス');
      expect(sec15?.querySelector('table')).not.toBeNull();

      // Section 16
      const sec16 = container.querySelector('#sec-16');
      expect(sec16?.textContent).toContain('ベストプラクティス総まとめチェックリスト');
      const checklistTable = sec16?.querySelector('table');
      expect(checklistTable).not.toBeNull();
      const rows = checklistTable?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(11);

      // Section 17
      const sec17 = container.querySelector('#sec-17');
      expect(sec17?.textContent).toContain('まとめ');
      expect(sec17?.textContent).toContain('初学者がまず押さえるべきステップ');

      // Section 18
      const sec18 = container.querySelector('#sec-18');
      expect(sec18?.textContent).toContain('参考文献');
      const refGroups = sec18?.querySelectorAll('.ref-group');
      expect(refGroups?.length).toBe(5);
    });
  });

  describe('Mermaid Diagrams Integration', () => {
    it('renders all 6 Mermaid diagrams across the guide', async () => {
      // 先行テストの render で積み上がった呼び出し履歴を捨て、この render 分だけを数える
      mermaidRenderMock.mockClear();

      const { container } = render(<Page />);

      const mermaidElements = container.querySelectorAll('.mermaid-wrapper');
      expect(mermaidElements.length).toBe(6);

      // Mermaid は useEffect 内で非同期に描画される。ラッパー数だけを見ると
      // 未描画・描画失敗・空 SVG でもテストが通ってしまうため、注入完了を待って実 SVG を数える。
      await waitFor(() => {
        expect(container.querySelectorAll('[data-testid="mock-mermaid"]').length).toBe(6);
      });
      expect(mermaidRenderMock).toHaveBeenCalledTimes(6);

      // sec-2 (Test Pyramid)
      expect(container.querySelector('#sec-2 .mermaid-wrapper')).not.toBeNull();

      // sec-5 (HTTP Client Server)
      expect(container.querySelector('#sec-5 .mermaid-wrapper')).not.toBeNull();

      // sec-9 (Pyramid Flow)
      expect(container.querySelector('#sec-9 .mermaid-wrapper')).not.toBeNull();

      // sec-12 (Ports and Adapters)
      expect(container.querySelector('#sec-12 .mermaid-wrapper')).not.toBeNull();

      // sec-13 (TDD Cycle)
      expect(container.querySelector('#sec-13 .mermaid-wrapper')).not.toBeNull();

      // sec-14 (Testing Trophy)
      expect(container.querySelector('#sec-14 .mermaid-wrapper')).not.toBeNull();
    });
  });

  describe('External References & Security Attributes', () => {
    it('ensures external links have rel="noopener noreferrer" and target="_blank"', () => {
      const { container } = render(<Page />);

      const externalLinks = Array.from(container.querySelectorAll('a[href^="http"]'));
      expect(externalLinks.length).toBeGreaterThanOrEqual(10);

      for (const link of externalLinks) {
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toContain('noopener');
        expect(link.getAttribute('rel')).toContain('noreferrer');
      }
    });
  });

  describe('Callouts & Tables Count', () => {
    it('renders all 6 callouts and all 12 tables throughout the page', () => {
      const { container } = render(<Page />);

      // 総数だけでは配置ミス（同一セクションへの重複や欠落）を検出できないため、
      // callout を持つべきセクションごとに存在を検証する
      const calloutSectionIds = ['sec-2', 'sec-3', 'sec-6', 'sec-7', 'sec-14', 'sec-15'];
      calloutSectionIds.forEach((id) => {
        const section = container.querySelector(`section#${id}`);
        expect(section).not.toBeNull();
        expect(section?.querySelector('.callout')).not.toBeNull();
      });

      const callouts = container.querySelectorAll('.callout');
      expect(callouts.length).toBe(calloutSectionIds.length);

      const tables = container.querySelectorAll('.table-wrap table');
      expect(tables.length).toBe(12);
    });
  });
});
