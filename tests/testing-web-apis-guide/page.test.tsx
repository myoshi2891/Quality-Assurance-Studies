import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/testing-web-apis-guide/page';
import NavBar from '../../app/testing-web-apis-guide/NavBar';
import Checklist from '../../app/testing-web-apis-guide/Checklist';

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

describe('Testing Web APIs Guide Page - Comprehensive Test Suite', () => {
  describe('Hero Section & Metadata', () => {
    it('renders the main hero header with eyebrow, title, lede, and chips', () => {
      const { container } = render(<Page />);

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeDefined();
      expect(h1.textContent).toContain('Web APIテスト実践ガイド');
      expect(h1.textContent).toContain('初学者のためのステップバイステップ・ベストプラクティス');

      const eyebrow = container.querySelector('.hero .eyebrow');
      expect(eyebrow).not.toBeNull();
      expect(eyebrow?.textContent).toContain('Beginner Guide · Web API Testing');

      const lede = container.querySelector('.hero .lede');
      expect(lede).not.toBeNull();
      expect(lede?.textContent).toContain('Mark Winteringham');
      expect(lede?.textContent).toContain('Testing Web APIs');
      expect(lede?.textContent).toContain('Martin Fowler');

      const chips = container.querySelectorAll('.hero .chip');
      expect(chips.length).toBe(3);
      expect(chips[0]?.textContent).toContain('全15章 · 10個のMermaid図解');
      expect(chips[1]?.textContent).toContain('調査基準日: 2026年8月28日');
      expect(chips[2]?.textContent).toContain('対象: API テスト初学者');
    });
  });

  describe('NavBar (Sidebar)', () => {
    it('renders sidebar title, subtitle, mobile toggle button, and all 15 navigation links', () => {
      const { container } = render(<NavBar />);

      const toggle = container.querySelector('#navToggle');
      expect(toggle).not.toBeNull();
      expect(toggle?.getAttribute('aria-controls')).toBe('sidebar');

      const brand = container.querySelector('.sidebar .brand');
      expect(brand).not.toBeNull();
      expect(brand?.textContent).toContain('Web APIテスト実践ガイド');

      const brandSub = container.querySelector('.sidebar .brand-sub');
      expect(brandSub).not.toBeNull();
      expect(brandSub?.textContent).toContain('初学者向けステップバイステップ');

      const navLinks = container.querySelectorAll('.sidebar nav a');
      expect(navLinks.length).toBe(15);

      const expectedLinks = [
        { href: '#section-1', label: '1. なぜAPIテストが重要か' },
        { href: '#section-2', label: '2. テストピラミッドとトロフィー' },
        { href: '#section-3', label: 'Step 0: リスクベースの準備' },
        { href: '#section-4', label: 'Step 1: 仕様を理解する' },
        { href: '#section-5', label: 'Step 2: 基本HTTPテスト設計' },
        { href: '#section-6', label: 'Step 3: 探索的テスト' },
        { href: '#section-7', label: 'Step 4: 自動化とツール' },
        { href: '#section-8', label: 'Step 5: 契約テスト(Pact)' },
        { href: '#section-9', label: 'Step 6: 性能・負荷テスト' },
        { href: '#section-10', label: 'Step 7: セキュリティテスト' },
        { href: '#section-11', label: 'Step 8: CI/CD統合' },
        { href: '#section-12', label: 'Step 9: 本番環境でのテスト' },
        { href: '#section-13', label: 'よくある落とし穴' },
        { href: '#section-14', label: '初学者向けチェックリスト' },
        { href: '#section-15', label: '参考文献・出典' },
      ];

      expectedLinks.forEach((expected, index) => {
        const link = navLinks[index];
        expect(link.getAttribute('href')).toBe(expected.href);
        expect(link.textContent).toContain(expected.label);
      });

      const tocLabels = container.querySelectorAll('.sidebar .toc-group-label');
      expect(tocLabels.length).toBe(4);
      expect(tocLabels[0]?.textContent).toContain('Step 0-3 基礎');
      expect(tocLabels[1]?.textContent).toContain('Step 4-7 仕組み化');
      expect(tocLabels[2]?.textContent).toContain('Step 8-9 運用');
      expect(tocLabels[3]?.textContent).toContain('まとめ');
    });
  });

  describe('Sections Content Coverage (Sections 1 to 15)', () => {
    it('renders all 15 sections with correct IDs and numbered tags', () => {
      const { container } = render(<Page />);

      for (let i = 1; i <= 15; i++) {
        const section = container.querySelector(`#section-${i}`);
        expect(section).not.toBeNull();
        const numTag = section?.querySelector('h2 .num');
        expect(numTag).not.toBeNull();
      }
    });

    it('renders key content for Sections 1 to 5', () => {
      const { container } = render(<Page />);

      const sec1 = container.querySelector('#section-1');
      expect(sec1?.textContent).toContain('なぜWeb APIのテストが重要なのか');
      expect(sec1?.textContent).toContain('サイレントヒーロー');

      const sec2 = container.querySelector('#section-2');
      expect(sec2?.textContent).toContain('テストピラミッドとテスティング・トロフィー');
      expect(sec2?.textContent).toContain('The Practical Test Pyramid');
      expect(sec2?.textContent).toContain('Kent C. Dodds');

      const sec3 = container.querySelector('#section-3');
      expect(sec3?.textContent).toContain('テスト計画とリスクベース思考');
      expect(sec3?.textContent).toContain('品質特性');

      const sec4 = container.querySelector('#section-4');
      expect(sec4?.textContent).toContain('APIの仕様を理解する（OpenAPI/Swagger）');
      expect(sec4?.textContent).toContain('Schemathesis');

      const sec5 = container.querySelector('#section-5');
      expect(sec5?.textContent).toContain('基本のHTTPテスト設計');
      expect(sec5?.textContent).toContain('代表的なHTTPステータスコード');
    });

    it('renders key content for Sections 6 to 10', () => {
      const { container } = render(<Page />);

      const sec6 = container.querySelector('#section-6');
      expect(sec6?.textContent).toContain('探索的テスト（Exploratory Testing）');
      expect(sec6?.textContent).toContain('チャーター');

      const sec7 = container.querySelector('#section-7');
      expect(sec7?.textContent).toContain('テストの自動化とツール選定');
      expect(sec7?.textContent).toContain('Postman / Newman');
      expect(sec7?.textContent).toContain('REST Assured');
      expect(sec7?.textContent).toContain('Supertest');
      expect(sec7?.textContent).toContain('pytest + requests');

      const sec8 = container.querySelector('#section-8');
      expect(sec8?.textContent).toContain('契約テスト（Contract Testing with Pact）');
      expect(sec8?.textContent).toContain('コンシューマー');
      expect(sec8?.textContent).toContain('プロバイダー');

      const sec9 = container.querySelector('#section-9');
      expect(sec9?.textContent).toContain('パフォーマンス・負荷テスト');
      expect(sec9?.textContent).toContain('Grafana Labs');
      expect(sec9?.textContent).toContain('k6');

      const sec10 = container.querySelector('#section-10');
      expect(sec10?.textContent).toContain('セキュリティテスト（OWASP API Security Top 10）');
      expect(sec10?.textContent).toContain('Broken Object Level Authorization');
    });

    it('renders key content for Sections 11 to 15', () => {
      const { container } = render(<Page />);

      const sec11 = container.querySelector('#section-11');
      expect(sec11?.textContent).toContain('CI/CDへの統合');
      expect(sec11?.textContent).toContain('フレーキー');

      const sec12 = container.querySelector('#section-12');
      expect(sec12?.textContent).toContain('本番環境でのテスト（Testing in Production）');
      expect(sec12?.textContent).toContain('SLI');
      expect(sec12?.textContent).toContain('SLO');
      expect(sec12?.textContent).toContain('シンセティックモニタリング');

      const sec13 = container.querySelector('#section-13');
      expect(sec13?.textContent).toContain('よくある落とし穴とアンチパターン');
      expect(sec13?.textContent).toContain('ハッピーパスしかテストしない');

      const sec14 = container.querySelector('#section-14');
      expect(sec14?.textContent).toContain('まとめ：初学者向けチェックリスト');

      const sec15 = container.querySelector('#section-15');
      expect(sec15?.textContent).toContain('参考文献・出典');
      expect(sec15?.textContent).toContain('Mark Winteringham');
      expect(sec15?.textContent).toContain('免責事項');
    });
  });

  describe('Mermaid Diagrams Integration', () => {
    it('renders all 10 Mermaid diagrams across the guide', () => {
      const { container } = render(<Page />);

      const captions = container.querySelectorAll('figcaption.fig-cap');
      expect(captions.length).toBe(10);
      expect(captions[0]?.textContent).toContain('図1: テストピラミッド');
      expect(captions[1]?.textContent).toContain('図2: テスティング・トロフィー');
      expect(captions[2]?.textContent).toContain('図3: リスクベースでテスト活動を選ぶ流れ');
      expect(captions[3]?.textContent).toContain('図4: 基本的なAPIテストの流れ');
      expect(captions[4]?.textContent).toContain('図5: 探索的テストのセッションサイクル');
      expect(captions[5]?.textContent).toContain('図6: Pactによる契約テストの流れ');
      expect(captions[6]?.textContent).toContain('図7: 目的別に見る負荷テストの種類');
      expect(captions[7]?.textContent).toContain('図8: セキュリティテストの組み込み方');
      expect(captions[8]?.textContent).toContain('図9: CI/CDパイプラインにおけるテストの位置づけ');
      expect(captions[9]?.textContent).toContain('図10: 本番環境の継続的な観測サイクル');
    });
  });

  describe('Code Blocks Integration', () => {
    it('renders Python and JavaScript code blocks with code-line formatting', () => {
      const { container } = render(<Page />);

      const codeBlocks = container.querySelectorAll('.code-block');
      expect(codeBlocks.length).toBe(2);

      const pyLabel = codeBlocks[0]?.querySelector('.code-label');
      expect(pyLabel?.textContent).toContain('Python · pytest + requests');
      const pyCode = codeBlocks[0]?.querySelector('pre code');
      expect(pyCode?.textContent).toContain('BASE_URL = os.environ["API_BASE_URL"]');
      expect(pyCode?.textContent).toContain('def _resolve_user_url');
      expect(pyCode?.textContent).toContain('def test_get_user_returns_200_and_expected_fields');

      const jsLabel = codeBlocks[1]?.querySelector('.code-label');
      expect(jsLabel?.textContent).toContain('JavaScript · k6');
      const jsCode = codeBlocks[1]?.querySelector('pre code');
      expect(jsCode?.textContent).toContain("import http from 'k6/http'");
      expect(jsCode?.textContent).toContain('http_req_duration:');
      expect(jsCode?.textContent).toContain('export default function ()');
    });
  });

  describe('Tables Integration', () => {
    it('renders all tables with proper wrappers and headers', () => {
      const { container } = render(<Page />);

      const tables = container.querySelectorAll('.table-wrap table');
      expect(tables.length).toBeGreaterThanOrEqual(7);

      const tableText = container.textContent || '';
      expect(tableText).toContain('ピラミッド型');
      expect(tableText).toContain('トロフィー型');
      expect(tableText).toContain('200 OK');
      expect(tableText).toContain('400 Bad Request');
      expect(tableText).toContain('Postman / Newman');
      expect(tableText).toContain('Schemathesis');
      expect(tableText).toContain('レイテンシ（p95 / p99）');
      expect(tableText).toContain('Broken Object Level Authorization');
      expect(tableText).toContain('ハッピーパスしかテストしない');
    });
  });

  describe('Checklist Component', () => {
    it('renders 10 checklist items and updates progress label on toggle', () => {
      const { container } = render(<Checklist />);

      const checkboxes = container.querySelectorAll('input[type="checkbox"]');
      expect(checkboxes.length).toBe(10);

      const progress = container.querySelector('.checklist-progress');
      expect(progress?.textContent).toContain('0 / 10 完了');

      // Check first item
      fireEvent.click(checkboxes[0]);
      expect(progress?.textContent).toContain('1 / 10 完了');
      const firstLi = checkboxes[0].closest('li');
      expect(firstLi?.classList.contains('done')).toBe(true);

      // Check second item
      fireEvent.click(checkboxes[1]);
      expect(progress?.textContent).toContain('2 / 10 完了');

      // Uncheck first item
      fireEvent.click(checkboxes[0]);
      expect(progress?.textContent).toContain('1 / 10 完了');
      expect(firstLi?.classList.contains('done')).toBe(false);
    });
  });

  describe('References & External Links', () => {
    it('renders all 15 reference items with rel="noopener noreferrer" and target="_blank"', () => {
      const { container } = render(<Page />);

      const refItems = container.querySelectorAll('.ref-list li');
      expect(refItems.length).toBe(15);

      const refLinks = container.querySelectorAll('.ref-list a');
      expect(refLinks.length).toBe(15);

      refLinks.forEach((link) => {
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toBe('noopener noreferrer');
        expect(link.getAttribute('href')).toMatch(/^https?:\/\//);
      });
    });
  });

  describe('Footer Section', () => {
    it('renders the footer with proper text', () => {
      const { container } = render(<Page />);

      const footer = container.querySelector('footer.footer');
      expect(footer).not.toBeNull();
      expect(footer?.textContent).toContain('Web APIテスト実践ガイド');
    });
  });
});
