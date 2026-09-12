import React from 'react';
import { describe, it, expect, mock, beforeAll, beforeEach, afterAll, afterEach } from 'bun:test';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import Chapter6Page from '../../app/istqb-ctfl-v4-chapter6-test-tools/page';

// ⚠️ vi.mock / mock.module は components/Mermaid をプロセス全体で恒久的に差し替えるため、
//    後続の全テストファイルがスタブを掴んでしまい `mock-mermaid` 待ちが必ずタイムアウトする。
//    happydom-setup.ts が用意した共有 mermaid モックの render だけを一時的に差し替え、
//    描画に渡された chart 定義を収集する方式に統一する（他ページテストと同じ流儀）。
let renderedCharts: string[] = [];
let originalMermaidRender: typeof mermaid.render;

beforeAll(() => {
    originalMermaidRender = mermaid.render;
    mermaid.render = mock(async (_id: string, chart: string) => {
        renderedCharts.push(chart);
        return { svg: '<svg data-testid="mock-mermaid"></svg>', diagramType: 'flowchart' };
    }) as unknown as typeof mermaid.render;
});

afterAll(() => {
    mermaid.render = originalMermaidRender;
});

beforeEach(() => {
    renderedCharts = [];
});

/** ページ内の Mermaid 図の総数。全件の描画完了を待つ基準に使う。 */
const MERMAID_CHART_COUNT = 6;

/**
 * ページを描画し、Mermaid へ渡された全 chart 定義が揃うまで待つ。
 * findAllByTestId は 1 件見つかった時点で解決するため、件数で待ち切る。
 */
async function renderAndCollectCharts(): Promise<string[]> {
    render(<Chapter6Page />);
    await waitFor(() => {
        expect(screen.getAllByTestId('mock-mermaid').length).toBe(MERMAID_CHART_COUNT);
    });
    return renderedCharts;
}

describe('ISTQB CTFL v4.0 Chapter 6: Test Tools Page Suite', () => {
    afterEach(() => {
        cleanup();
    });
    describe('Category 2: Hero & Overview & Learning Objectives (Sections 0-1)', () => {
        it('renders the header with eyebrow, h1, subtitle, and official notice box', () => {
            render(<Chapter6Page />);
            expect(screen.getByText(/ISTQB Certified Tester Foundation Level v4\.0/)).toBeDefined();
            const heading = screen.getByRole('heading', { level: 1 });
            expect(heading.textContent).toContain('Chapter 6: テストツール');
            expect(screen.getByText(/中級〜上級者向けに、公式シラバスの範囲を明確にしながら/)).toBeDefined();
            expect(screen.getByText(/ISTQB® CTFL v4\.0\.1 公式シラバス/)).toBeDefined();
        });

        it('renders Section 0 (この章の位置づけ) with table and warning callout', () => {
            render(<Chapter6Page />);
            const sec0 = document.getElementById('pos');
            expect(sec0).not.toBeNull();
            expect(sec0?.textContent).toContain('0. この章の位置づけ');
            expect(sec0?.textContent).toContain('最も短い章');
            expect(sec0?.textContent).toContain('20分');

            // Table in section 0
            expect(sec0?.textContent).toContain('学習時間目安');
            expect(sec0?.textContent).toContain('出題数目安');
            expect(sec0?.textContent).toContain('2問（5%）');
            expect(sec0?.textContent).toContain('data-driven testing');
            expect(sec0?.textContent).toContain('keyword-driven testing');

            // Callout in section 0
            expect(sec0?.textContent).toContain('v4.0 では基礎知識のみに絞られ');
        });

        it('renders Section 1 (学習目標) with learning objectives table', () => {
            render(<Chapter6Page />);
            const sec1 = document.getElementById('lo');
            expect(sec1).not.toBeNull();
            expect(sec1?.textContent).toContain('1. 学習目標（Learning Objectives）');
            expect(sec1?.textContent).toContain('FL-6.1.1');
            expect(sec1?.textContent).toContain('FL-6.2.1');
            expect(sec1?.textContent).toContain('FL-6.2.2');
            expect(sec1?.textContent).toContain('さまざまな種類のテストツールを分類できる');
            expect(sec1?.textContent).toContain('潜在的な利点とリスクを要約できる');
            expect(sec1?.textContent).toContain('特別な考慮事項を記憶している');
        });
    });

    describe('Category 3: Section 2: 6.1 テストツールによる支援 (Tool Support for Testing)', () => {
        it('renders Section 2 with all subsections (2.1 to 2.5)', () => {
            render(<Chapter6Page />);
            const sec2 = document.getElementById('s61');
            expect(sec2).not.toBeNull();
            expect(sec2?.textContent).toContain('2. 6.1 テストツールによる支援');

            expect(document.getElementById('s61-1')).not.toBeNull();
            expect(document.getElementById('s61-1')?.textContent).toContain('2.1 テストツールとは何か');
            expect(document.getElementById('s61-1')?.textContent).toContain('スプレッドシートでさえも');

            expect(document.getElementById('s61-2')).not.toBeNull();
            expect(document.getElementById('s61-2')?.textContent).toContain('2.2 v4.0 シラバスにおけるツール分類（9カテゴリ）');

            expect(document.getElementById('s61-3')).not.toBeNull();
            expect(document.getElementById('s61-3')?.textContent).toContain('2.3 テストプロセスとツール分類の関係図');

            expect(document.getElementById('s61-4')).not.toBeNull();
            expect(document.getElementById('s61-4')?.textContent).toContain('2.4 各カテゴリの詳細と現在（2026年）の代表的ツール例');

            expect(document.getElementById('s61-5')).not.toBeNull();
            expect(document.getElementById('s61-5')?.textContent).toContain('2.5 侵入的ツールと「プローブ効果」');
            expect(document.getElementById('s61-5')?.textContent).toContain('プローブ効果（probe effect）');
        });

        it('renders all 9 category cards in section 2.2', () => {
            render(<Chapter6Page />);
            const cards = document.querySelectorAll('.cat-card');
            expect(cards.length).toBe(9);
            const cardTitles = Array.from(cards).map((c) => c.querySelector('h4')?.textContent);
            expect(cardTitles).toEqual([
                '汎用ツール',
                'テスト管理ツール',
                '静的テストツール',
                'テスト設計・実装ツール',
                'テスト実行・カバレッジツール',
                '非機能テストツール',
                'DevOpsツール',
                'コラボレーションツール',
                'スケーラビリティ・デプロイ標準化支援ツール',
            ]);
        });

        it('renders the GitHub Actions CI code block with .code-line wrappers in section 2.4', () => {
            render(<Chapter6Page />);
            const codeBlock = document.querySelector('#s61-4 .code-block');
            expect(codeBlock).not.toBeNull();
            expect(codeBlock?.textContent).toContain('name: static-analysis');
            expect(codeBlock?.textContent).toContain('on: [pull_request]');
            expect(codeBlock?.textContent).toContain('SonarSource/sonarqube-scan-action@v3');
            const lines = codeBlock?.querySelectorAll('.code-line');
            expect(lines && lines.length).toBeGreaterThan(5);
        });

        it('renders the E2E tools comparison table (Playwright vs Selenium vs Cypress) in section 2.4', () => {
            render(<Chapter6Page />);
            const table = document.querySelector('#s61-4 table');
            expect(table).not.toBeNull();
            expect(table?.textContent).toContain('Playwright');
            expect(table?.textContent).toContain('Selenium');
            expect(table?.textContent).toContain('Cypress');
            expect(table?.textContent).toContain('Microsoft');
            expect(table?.textContent).toContain('オープンソースコミュニティ');
        });

        it('renders Mermaid diagrams diag-0 and diag-1 in section 2', async () => {
            const charts = await renderAndCollectCharts();
            const hasDiag0 = charts.some((c) => c.includes('基本テストプロセス') && c.includes('テスト管理ツール'));
            const hasDiag1 = charts.some((c) => c.includes('quadrantChart') && c.includes('Playwright'));
            expect(hasDiag0).toBe(true);
            expect(hasDiag1).toBe(true);
        });
    });

    describe('Category 4: Sections 3 & 4: 6.2 利点とリスク & FL-6.2.2 特別な考慮事項', () => {
        it('renders Section 3 with all subsections (3.1 to 3.4)', () => {
            render(<Chapter6Page />);
            const sec3 = document.getElementById('s62');
            expect(sec3).not.toBeNull();
            expect(sec3?.textContent).toContain('3. 6.2 テスト自動化の利点とリスク');

            expect(document.getElementById('s62-1')).not.toBeNull();
            expect(document.getElementById('s62-1')?.textContent).toContain('3.1 導入の大前提');
            expect(document.getElementById('s62-1')?.textContent).toContain('ツールを導入するだけでは成功は保証されない');

            expect(document.getElementById('s62-2')).not.toBeNull();
            expect(document.getElementById('s62-2')?.textContent).toContain('3.2 テスト自動化・ツール活用の利点');

            expect(document.getElementById('s62-3')).not.toBeNull();
            expect(document.getElementById('s62-3')?.textContent).toContain('3.3 テスト自動化・ツール活用のリスク');

            expect(document.getElementById('s62-4')).not.toBeNull();
            expect(document.getElementById('s62-4')?.textContent).toContain('3.4 利点とリスクの構造的理解');
        });

        it('renders the benefits table in section 3.2 and risks table in section 3.3', () => {
            render(<Chapter6Page />);
            // Benefits table
            const benTable = document.querySelector('#s62-2 table');
            expect(benTable).not.toBeNull();
            expect(benTable?.textContent).toContain('反復作業の削減');
            expect(benTable?.textContent).toContain('一貫性・再現性の向上');
            expect(benTable?.textContent).toContain('客観的な評価');
            expect(benTable?.textContent).toContain('情報アクセスの容易化');

            // Risks table
            const riskTable = document.querySelector('#s62-3 table');
            expect(riskTable).not.toBeNull();
            expect(riskTable?.textContent).toContain('非現実的な期待');
            expect(riskTable?.textContent).toContain('導入コスト・工数の過小評価');
            expect(riskTable?.textContent).toContain('ツールへの過度な依存');
            expect(riskTable?.textContent).toContain('他ツールとの相互運用性の欠如');
            expect(riskTable?.textContent).toContain('ベンダー・プロジェクトリスク');
        });

        it('renders Section 4 (FL-6.2.2 特定ツール種別に関する特別な考慮事項) with subsections (4.1 to 4.3)', () => {
            render(<Chapter6Page />);
            const sec4 = document.getElementById('s623');
            expect(sec4).not.toBeNull();
            expect(sec4?.textContent).toContain('4. FL-6.2.2: 特定ツール種別に関する特別な考慮事項');

            expect(document.getElementById('s623-1')).not.toBeNull();
            expect(document.getElementById('s623-1')?.textContent).toContain('4.1 テスト実行ツール: スクリプティング手法の進化');
            expect(document.getElementById('s623-1')?.textContent).toContain('データ駆動テスト（data-driven testing）');
            expect(document.getElementById('s623-1')?.textContent).toContain('キーワード駆動テスト（keyword-driven testing）');
            expect(document.getElementById('s623-1')?.textContent).toContain('スクリプト言語（scripting language）');

            expect(document.getElementById('s623-2')).not.toBeNull();
            expect(document.getElementById('s623-2')?.textContent).toContain('4.2 静的解析ツールに関する考慮事項');

            expect(document.getElementById('s623-3')).not.toBeNull();
            expect(document.getElementById('s623-3')?.textContent).toContain('4.3 テスト管理ツールに関する考慮事項');
        });

        it('renders the keyword-driven CSV code block with .code-line wrappers in section 4.1', () => {
            render(<Chapter6Page />);
            const codeBlock = document.querySelector('#s623-1 .code-block');
            expect(codeBlock).not.toBeNull();
            expect(codeBlock?.textContent).toContain('keyword,target,value');
            expect(codeBlock?.textContent).toContain('open_browser,https://example.com/login,');
            expect(codeBlock?.textContent).toContain('input_text,#username,tanaka_taro');
            const lines = codeBlock?.querySelectorAll('.code-line');
            expect(lines && lines.length).toBeGreaterThanOrEqual(5);
        });

        it('renders Mermaid diagrams diag-2, diag-3, and diag-4 across sections 3 and 4', async () => {
            const charts = await renderAndCollectCharts();
            const hasDiag2 = charts.some((c) => c.includes('ツール導入の意思決定') && c.includes('継続的に投資対効果を評価しているか'));
            const hasDiag3 = charts.some((c) => c.includes('キャプチャ・リプレイ方式') && c.includes('データ駆動テスト'));
            const hasDiag4 = charts.some((c) => c.includes('テスト管理ツール') && c.includes('要求管理ツール'));
            expect(hasDiag2).toBe(true);
            expect(hasDiag3).toBe(true);
            expect(hasDiag4).toBe(true);
        });
    });

    describe('Category 5: Sections 5 to 8: Practical Workflow, Summary, Quiz, and References', () => {
        it('renders Section 5 (実務補足：ツール導入の意思決定プロセス) with Mermaid diag-5 and warning callout', async () => {
            const charts = await renderAndCollectCharts();
            const sec5 = document.getElementById('s5');
            expect(sec5).not.toBeNull();
            expect(sec5?.textContent).toContain('5. シラバス範囲外の実務補足: ツール導入の意思決定プロセス');
            expect(sec5?.textContent).toContain('examinable content には含まれません');

            const hasDiag5 = charts.some((c) => c.includes('組織の成熟度・強み弱みを評価') && c.includes('パイロットプロジェクトで試行'));
            expect(hasDiag5).toBe(true);
        });

        it('renders Section 6 (章のまとめ) with summary table', () => {
            render(<Chapter6Page />);
            const sec6 = document.getElementById('summary');
            expect(sec6).not.toBeNull();
            expect(sec6?.textContent).toContain('6. 章のまとめ');
            const table = sec6?.querySelector('table');
            expect(table).not.toBeNull();
            expect(table?.textContent).toContain('ツールの範囲');
            expect(table?.textContent).toContain('分類軸');
            expect(table?.textContent).toContain('9カテゴリ');
            expect(table?.textContent).toContain('導入の大原則');
            expect(table?.textContent).toContain('主要リスク');
            expect(table?.textContent).toContain('テスト実行ツールの発展');
        });

        it('renders Section 7 (演習問題) with 3 quiz cards and details/summary elements', () => {
            render(<Chapter6Page />);
            const sec7 = document.getElementById('quiz');
            expect(sec7).not.toBeNull();
            expect(sec7?.textContent).toContain('7. 演習問題（自己チェック用）');
            const cards = sec7?.querySelectorAll('.quiz-card');
            expect(cards && cards.length).toBe(3);

            // Q1
            expect(sec7?.textContent).toContain('Q1 K1');
            expect(sec7?.textContent).toContain('data-driven testing');

            // Q2
            expect(sec7?.textContent).toContain('Q2 K2');
            expect(sec7?.textContent).toContain('非現実的な期待（unrealistic expectations）');

            // Q3
            expect(sec7?.textContent).toContain('Q3 K2');
            expect(sec7?.textContent).toContain('静的解析ツールを開発者のコミット前に実行することの利点');
        });

        it('renders Section 8 (参照URL一覧) with grouped external references having target="_blank" and rel="noopener noreferrer"', () => {
            render(<Chapter6Page />);
            const sec8 = document.getElementById('refs');
            expect(sec8).not.toBeNull();
            expect(sec8?.textContent).toContain('8. 参照URL一覧（全節共通）');
            expect(sec8?.textContent).toContain('公式一次情報源');
            expect(sec8?.textContent).toContain('公式内容のミラー・要約');
            expect(sec8?.textContent).toContain('学習補助・比較解説');
            expect(sec8?.textContent).toContain('2026年時点の実務ツール市場動向');
            expect(sec8?.textContent).toContain('旧シラバス（比較参考用）');

            const links = sec8?.querySelectorAll('a');
            expect(links && links.length).toBeGreaterThanOrEqual(15);
            links?.forEach((link) => {
                expect(link.getAttribute('target')).toBe('_blank');
                expect(link.getAttribute('rel')).toContain('noopener');
            });
        });

        it('renders page footer with ISTQB trademark notice', () => {
            render(<Chapter6Page />);
            const footer = document.querySelector('footer');
            expect(footer).not.toBeNull();
            expect(footer?.textContent).toContain('本ガイドは学習補助を目的とした二次資料です');
            expect(footer?.textContent).toContain('International Software Testing Qualifications Board の登録商標です');
        });
    });
});
