import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
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

// 元 HTML の参考文献インベントリ。表示名（= URL 文字列）と href を出現順で固定する。
const EXPECTED_REFERENCES: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'https://www.oreilly.com/library/view/testing-web-apis/9781617299537/', href: 'https://www.oreilly.com/library/view/testing-web-apis/9781617299537/' },
  { label: 'https://martinfowler.com/articles/practical-test-pyramid.html', href: 'https://martinfowler.com/articles/practical-test-pyramid.html' },
  { label: 'https://martinfowler.com/articles/2021-test-shapes.html', href: 'https://martinfowler.com/articles/2021-test-shapes.html' },
  { label: 'https://kentcdodds.com/blog/write-tests', href: 'https://kentcdodds.com/blog/write-tests' },
  { label: 'https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications', href: 'https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications' },
  { label: 'https://owasp.org/API-Security/editions/2023/en/0x11-t10/', href: 'https://owasp.org/API-Security/editions/2023/en/0x11-t10/' },
  { label: 'https://owasp.org/blog/2023/07/03/owasp-api-top10-2023', href: 'https://owasp.org/blog/2023/07/03/owasp-api-top10-2023' },
  { label: 'https://docs.pact.io/', href: 'https://docs.pact.io/' },
  { label: 'https://docs.pact.io/consumer', href: 'https://docs.pact.io/consumer' },
  { label: 'https://pactflow.io/what-is-consumer-driven-contract-testing/', href: 'https://pactflow.io/what-is-consumer-driven-contract-testing/' },
  { label: 'https://www.postman.com/postman-best-practices/api-test-automation/', href: 'https://www.postman.com/postman-best-practices/api-test-automation/' },
  { label: 'https://grafana.com/docs/k6/latest/get-started/', href: 'https://grafana.com/docs/k6/latest/get-started/' },
  { label: 'https://grafana.com/docs/k6/latest/testing-guides/api-load-testing/', href: 'https://grafana.com/docs/k6/latest/testing-guides/api-load-testing/' },
  { label: 'https://schemathesis.io/', href: 'https://schemathesis.io/' },
  { label: 'https://www.ministryoftesting.com/courses/let-s-build-an-api-checking-framework-mark-winteringham', href: 'https://www.ministryoftesting.com/courses/let-s-build-an-api-checking-framework-mark-winteringham' },
];

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
    it('renders all 10 Mermaid diagrams across the guide', async () => {
      mermaidRenderMock.mockClear();
      const { container } = render(<Page />);

      // Mermaid の描画は非同期のため、SVG が注入されるまで待つ
      await waitFor(() => {
        expect(container.querySelectorAll('[data-testid="mock-mermaid"]').length).toBe(10);
      });
      expect(mermaidRenderMock).toHaveBeenCalledTimes(10);

      // mermaid.render(id, chart) の第2引数が各図のチャート定義であることを文書順に検証する
      const charts = mermaidRenderMock.mock.calls.map((call) => String(call[1]));
      const expectedCharts: ReadonlyArray<{ type: string; marker: string }> = [
        { type: 'flowchart TB', marker: '少数: E2Eテスト（画面を含む一連のユーザーシナリオ）' },
        { type: 'flowchart TB', marker: '最も厚い: 統合テスト' },
        { type: 'flowchart TD', marker: '品質特性を定義する' },
        { type: 'flowchart TD', marker: 'テスト対象のリクエストを組み立てる' },
        { type: 'flowchart TD', marker: 'チャーターを決める' },
        { type: 'sequenceDiagram', marker: 'can-i-deploy でデプロイ可否を確認' },
        { type: 'flowchart TD', marker: 'ソークテスト' },
        { type: 'flowchart TD', marker: '脅威モデリング' },
        { type: 'flowchart TD', marker: '本番環境への段階的デプロイ' },
        { type: 'flowchart TD', marker: 'SLI（サービスレベル指標）を決める' },
      ];
      expect(charts.length).toBe(expectedCharts.length);
      expectedCharts.forEach((expected, idx) => {
        expect(charts[idx]?.startsWith(expected.type)).toBe(true);
        expect(charts[idx]).toContain(expected.marker);
      });

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

    it('applies syntax highlighting classes and code-line elements in code blocks', () => {
      const { container } = render(<Page />);

      const codeBlocks = container.querySelectorAll('.code-block');
      const pyCode = codeBlocks[0];
      const jsCode = codeBlocks[1];

      // Code line wrappers
      const pyLines = pyCode.querySelectorAll('.code-line');
      expect(pyLines.length).toBeGreaterThan(10);
      const jsLines = jsCode.querySelectorAll('.code-line');
      expect(jsLines.length).toBeGreaterThan(10);

      // Syntax highlighting spans
      const pyKeywords = pyCode.querySelectorAll('.hljs-keyword');
      expect(pyKeywords.length).toBeGreaterThan(0);
      const pyStrings = pyCode.querySelectorAll('.hljs-string');
      expect(pyStrings.length).toBeGreaterThan(0);
      const pyComments = pyCode.querySelectorAll('.hljs-comment');
      expect(pyComments.length).toBeGreaterThan(0);

      const jsKeywords = jsCode.querySelectorAll('.hljs-keyword');
      expect(jsKeywords.length).toBeGreaterThan(0);
      const jsStrings = jsCode.querySelectorAll('.hljs-string');
      expect(jsStrings.length).toBeGreaterThan(0);
    });
  });

  describe('Tables Integration', () => {
    it('renders the complete inventory of 8 tables with section, caption, headers and first row', () => {
      const { container } = render(<Page />);

      // 元 HTML の表インベントリ。所属セクション・caption・見出し行・先頭行・行数を 1 対 1 で固定する。
      const expectedTables: ReadonlyArray<{
        sectionId: string;
        caption: string;
        head: readonly string[];
        firstRow: readonly string[];
        rowCount: number;
      }> = [
        {
          sectionId: 'section-2',
          caption: 'テストピラミッドとテスティング・トロフィーの比較',
          head: ['モデル', '最重要視する層', '向いている状況', '注意点'],
          firstRow: [
            'ピラミッド型',
            '単体テスト',
            '複雑なビジネスロジック・計算処理が多いサービス',
            'API結合部分の不具合を見落としやすい',
          ],
          rowCount: 2,
        },
        {
          sectionId: 'section-5',
          caption: '代表的なHTTPステータスコードとテスト観点',
          head: ['コード帯', '意味', 'テストで確認すべきこと'],
          firstRow: ['200 OK', 'リクエスト成功', 'レスポンスボディのデータ構造・型・値が仕様通りか'],
          rowCount: 9,
        },
        {
          sectionId: 'section-5',
          caption: '初学者が最初に書くべき基本テストセット',
          head: ['テスト観点', '目的', 'リクエスト例', '期待される結果'],
          firstRow: [
            'ハッピーパス（正常系）',
            '最も基本的なユースケースが動作することを確認',
            '全必須パラメータを含む正しいPOST',
            '201 Created + 作成されたリソースのJSON',
          ],
          rowCount: 5,
        },
        {
          sectionId: 'section-7',
          caption: '代表的なAPIテストツールの比較',
          head: ['ツール', '主な用途', '特徴', '学習コスト（目安）'],
          firstRow: [
            'Postman / Newman',
            '手動確認〜CI組み込みまで幅広く対応',
            'GUIで直感的、JavaScriptでアサーション記述、コレクション共有が容易',
            '低',
          ],
          rowCount: 7,
        },
        {
          sectionId: 'section-8',
          caption: '契約テストとスキーマ検証の違い',
          head: ['観点', 'スキーマ検証（Schemathesis/Dreddなど）', '契約テスト（Pactなど）'],
          firstRow: [
            '検証対象',
            '「仕様書通りに実装されているか」',
            '「特定のコンシューマーが実際に使う形と一致するか」',
          ],
          rowCount: 3,
        },
        {
          sectionId: 'section-9',
          caption: 'APIのパフォーマンスで測定すべき指標',
          head: ['指標', '内容'],
          firstRow: ['レイテンシ（p95 / p99）', 'リクエストの95%・99%が何ミリ秒以内に返るか'],
          rowCount: 4,
        },
        {
          sectionId: 'section-10',
          caption: 'OWASP API Security Top 10（2023年版）',
          head: ['順位', '名称（2023年版）', '概要'],
          firstRow: [
            'API1',
            'Broken Object Level Authorization',
            '他人のリソースIDを指定するだけでアクセスできてしまう不備',
          ],
          rowCount: 10,
        },
        {
          sectionId: 'section-13',
          caption: 'よくある落とし穴とアンチパターンおよび改善策',
          head: ['アンチパターン', 'なぜ問題か', '改善策'],
          firstRow: [
            'ハッピーパスしかテストしない',
            '実際の障害の多くは異常系・境界値から生まれる',
            '5章の基本テストセット表を必ずチェックリスト化する',
          ],
          rowCount: 7,
        },
      ];

      const normalize = (value: string | null | undefined): string =>
        (value ?? '').replace(/\s+/g, ' ').trim();

      const tables = container.querySelectorAll('.table-wrap table');
      expect(tables.length).toBe(expectedTables.length);

      expectedTables.forEach((expectedTable, idx) => {
        const table = tables[idx];
        expect(table).toBeDefined();
        if (!table) return;

        expect(table.closest('section')?.getAttribute('id')).toBe(expectedTable.sectionId);
        expect(normalize(table.querySelector('caption')?.textContent)).toBe(expectedTable.caption);

        const head = Array.from(table.querySelectorAll('thead th')).map((cell) =>
          normalize(cell.textContent),
        );
        expect(head).toEqual([...expectedTable.head]);

        const bodyRows = table.querySelectorAll('tbody tr');
        expect(bodyRows.length).toBe(expectedTable.rowCount);

        const firstRow = Array.from(bodyRows[0]?.querySelectorAll('th, td') ?? []).map((cell) =>
          normalize(cell.textContent),
        );
        expect(firstRow).toEqual([...expectedTable.firstRow]);
      });
    });
  });

  describe('Checklist Component', () => {
    it('renders 10 checklist items and updates progress label on toggle', () => {
      const { container } = render(<Checklist />);

      // 元 HTML のチェック項目インベントリ。id / label[for] / 表示文言を 1 対 1 で固定する。
      const expectedItems: ReadonlyArray<{ id: string; text: string }> = [
        { id: 'chk-1', text: '対象APIの仕様（OpenAPIなど）を確認・整備したか' },
        { id: 'chk-2', text: '品質特性とリスクを洗い出し、優先度を付けたか' },
        { id: 'chk-3', text: '各エンドポイントで正常系・異常系・境界値のテストケースを設計したか' },
        { id: 'chk-4', text: '探索的テストのチャーターを用意し、実際に手を動かして触ったか' },
        { id: 'chk-5', text: '自動テストが独立して実行でき、記述的な名前を持っているか' },
        { id: 'chk-6', text: 'サービス間連携がある場合、契約テストの導入を検討したか' },
        { id: 'chk-7', text: '性能テストのしきい値（レイテンシ・エラー率など）を事前に決めたか' },
        { id: 'chk-8', text: 'OWASP API Security Top 10の代表的な観点を自動テストに含めたか' },
        { id: 'chk-9', text: 'CI/CDパイプラインで、速いテストから遅いテストへ段階的に実行されているか' },
        { id: 'chk-10', text: '本番環境のSLI/SLOを定義し、継続的に監視しているか' },
      ];

      const checkboxes = container.querySelectorAll('input[type="checkbox"]');
      expect(checkboxes.length).toBe(expectedItems.length);

      const items = container.querySelectorAll('li');
      expect(items.length).toBe(expectedItems.length);

      expectedItems.forEach((expectedItem, idx) => {
        const item = items[idx];
        expect(item).toBeDefined();
        if (!item) return;

        const input = item.querySelector('input[type="checkbox"]');
        const label = item.querySelector('label');
        expect(input?.getAttribute('id')).toBe(expectedItem.id);
        expect(label?.getAttribute('for')).toBe(expectedItem.id);
        expect((label?.textContent ?? '').replace(/\s+/g, ' ').trim()).toBe(expectedItem.text);
      });

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
      expect(refItems.length).toBe(EXPECTED_REFERENCES.length);

      // 参考文献は出現順の固定インベントリと 1 対 1 で照合する。
      // 件数の下限確認では並び替え・差し替え・欠落を検出できないため。
      const refLinks = Array.from(container.querySelectorAll('.ref-list a'));
      expect(refLinks.length).toBe(EXPECTED_REFERENCES.length);

      refLinks.forEach((link, index) => {
        const expected = EXPECTED_REFERENCES[index];
        expect(link.textContent?.trim()).toBe(expected.label);
        expect(link.getAttribute('href')).toBe(expected.href);
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toBe('noopener noreferrer');
      });
    });

    it('renders ref-list items without literal numbering so the CSS counter is the sole source', () => {
      const { container } = render(<Page />);
      const refList = container.querySelector('ol.ref-list');
      expect(refList).not.toBeNull();

      // 採番は .ref-list li::before の CSS カウンタが担う。
      // インライン style ではなく、カウンタが前提とする DOM 構造
      // （li 直下が .ref-title / .ref-url で、本文に手書きの連番を持たない）を検証する。
      const items = Array.from(refList?.querySelectorAll(':scope > li') ?? []);
      expect(items.length).toBe(EXPECTED_REFERENCES.length);

      items.forEach((item) => {
        expect(item.querySelector('.ref-title')).not.toBeNull();
        expect(item.querySelector('.ref-url')).not.toBeNull();
        expect(item.textContent?.trimStart() ?? '').not.toMatch(/^\d+\s*[.)]/);
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
