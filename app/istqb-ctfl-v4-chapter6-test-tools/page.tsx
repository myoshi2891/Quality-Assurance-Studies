import React from 'react';
import type { Metadata } from 'next';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './istqb-ctfl-v4-chapter6.css';

export const metadata: Metadata = {
    title: 'Chapter 6: テストツール（Test Tools）— ISTQB CTFL v4.0 学習ガイド',
    description:
        'ISTQB Certified Tester Foundation Level (CTFL) v4.0 Chapter 6 テストツールの完全解説ガイド。テストツールの分類、自動化の利点とリスク、テスト実行・静的解析・テスト管理ツールの特別な考慮事項を網羅。',
};

const DIAGRAM_0 = `flowchart TB
subgraph PROC["基本テストプロセス Chapter1"]
direction LR
P1["テスト計画"] --> P2["監視とコントロール"]
P2 --> P3["テスト分析"]
P3 --> P4["テスト設計"]
P4 --> P5["テスト実装"]
P5 --> P6["テスト実行"]
P6 --> P7["テスト完了"]
end
T2["テスト管理ツール"] -.支援.-> P1
T2 -.支援.-> P2
T2 -.支援.-> P7
T3["静的テストツール"] -.支援.-> P3
T4["テスト設計・実装ツール"] -.支援.-> P4
T4 -.支援.-> P5
T5["テスト実行・カバレッジツール"] -.支援.-> P5
T5 -.支援.-> P6
T6["非機能テストツール"] -.支援.-> P6
T7["DevOpsツール"] -.支援.-> P1
T7 -.支援.-> P6
T8["コラボレーションツール"] -.支援.-> P3
T9["スケーラビリティ支援ツール"] -.支援.-> P5`;

const DIAGRAM_1 = `quadrantChart
title E2Eテスト自動化ツールの傾向 2026年時点
x-axis "レガシー環境向け" --> "モダンWeb向け"
y-axis "学習コスト高" --> "学習コスト低"
quadrant-1 "モダンチームに最適"
quadrant-2 "学習容易だが対象限定"
quadrant-3 "エンタープライズ向け高機能"
quadrant-4 "汎用性と学習容易さの両立"
"Playwright": [0.8, 0.75]
"Selenium": [0.35, 0.3]
"Cypress": [0.7, 0.65]`;

export default function Chapter6Page() {
    return (
        <div className="ctfl-v4-ch6-page">
            <NavBar />
            <main className="main">
                <div className="content">
                    <header className="page-header">
                        <span className="eyebrow">
                            <span>📖</span> ISTQB Certified Tester Foundation Level v4.0
                        </span>
                        <h1>Chapter 6: テストツール（Test Tools）</h1>
                        <p className="subtitle lead">
                            中級〜上級者向けに、公式シラバスの範囲を明確にしながらステップバイステップで解説します。試験範囲（examinable
                            content）と実務補足を明確に区別しています。
                        </p>
                        <div className="notice-box">
                            <span className="notice-icon">ℹ️</span>
                            <div>
                                本ガイドは{' '}
                                <a
                                    href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB® CTFL v4.0.1 公式シラバス
                                </a>{' '}
                                の Chapter 6
                                を範囲とし、公式資料および信頼できる二次情報源（ASTQB、ISTQB Guru
                                等）を参照しています。各節末に参照URLを掲載し、全URLは末尾の「参照URL一覧」にも集約しています。
                            </div>
                        </div>
                    </header>

                    {/* 0. 位置づけ */}
                    <section id="pos">
                        <h2>
                            <span>📍</span>0. この章の位置づけ
                        </h2>
                        <p>
                            Chapter 6 は CTFL v4.0
                            シラバスの中で<strong>最も短い章</strong>です。学習時間の目安は
                            <strong>20分</strong>
                            、6章全体（1,135分）に占める割合はわずか約1.8%ですが、試験では実務的な理解を問う問題が出題されます。
                        </p>

                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>項目</th>
                                        <th>内容</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="hl">学習時間目安</td>
                                        <td>20分</td>
                                    </tr>
                                    <tr>
                                        <td className="hl">節構成</td>
                                        <td>
                                            6.1 テストツールによる支援 ／ 6.2
                                            テスト自動化の利点とリスク
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">出題数目安</td>
                                        <td>
                                            40問中
                                            約2〜3問（chapter配点は出典により変動、目安として7.5%程度）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">学習到達レベル</td>
                                        <td>
                                            <span className="badge k1">K1 記憶</span>{' '}
                                            <span className="badge k2">K2 理解</span>
                                            中心。K3（適用）は無し
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">キーワード</td>
                                        <td>
                                            data-driven testing（データ駆動テスト）, keyword-driven
                                            testing（キーワード駆動テスト）, scripting
                                            language（スクリプト言語）
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout warning">
                            <span className="callout-icon">⚠️</span>
                            <p>
                                CTFL v3.1
                                以前は「ツール選定の主要原則」「組織へのツール導入（パイロットプロジェクト）」「ツール導入の成功要因」といった節が存在しましたが、v4.0
                                では基礎知識のみに絞られ、これらの実務寄りの節は削除されています。本ガイドでは
                                v4.0
                                シラバスの範囲を明確にしたうえで、実務上有用な発展知識も<b>「シラバス範囲外の実務補足」</b>として区別して提供します。
                            </p>
                        </div>

                        <ul className="ref-list">
                            <li>
                                <span className="ref-icon">🔗</span>
                                <a
                                    href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB CTFL v4.0.1 公式シラバス PDF
                                </a>
                            </li>
                            <li>
                                <span className="ref-icon">🔗</span>
                                <a
                                    href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB CTFL v4.0 公式ページ
                                </a>
                            </li>
                            <li>
                                <span className="ref-icon">🔗</span>
                                <a
                                    href="https://www.istqb.guru/ctfl-v4-syllabus-chapter-by-chapter-deep-dive/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB CTFL v4.0 Syllabus Explained: Chapter-by-Chapter（ISTQB Guru）
                                </a>
                            </li>
                            <li>
                                <span className="ref-icon">🔗</span>
                                <a
                                    href="https://www.testing101.net/post/overview-of-the-istqb-certified-tester-foundation-level-ctfl-v4-0-new"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB CTFL v4.0 Overview（旧版との章構成比較）
                                </a>
                            </li>
                        </ul>
                    </section>

                    {/* 1. 学習目標 */}
                    <section id="lo">
                        <h2>
                            <span>🎯</span>1. 学習目標（Learning Objectives）
                        </h2>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>K-level</th>
                                        <th>学習目標</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="hl">FL-6.1.1</td>
                                        <td>
                                            <span className="badge k2">K2</span>
                                        </td>
                                        <td>
                                            テストプロセスの活動やソフトウェアライフサイクルに応じて、さまざまな種類のテストツールを分類できる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">FL-6.2.1</td>
                                        <td>
                                            <span className="badge k2">K2</span>
                                        </td>
                                        <td>
                                            テスト自動化とツールサポートの潜在的な利点とリスクを要約できる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">FL-6.2.2</td>
                                        <td>
                                            <span className="badge k1">K1</span>
                                        </td>
                                        <td>
                                            テスト実行ツール、静的解析ツール、テスト管理ツールに関する特別な考慮事項を記憶している
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <ul className="ref-list">
                            <li>
                                <span className="ref-icon">🔗</span>
                                <a
                                    href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB CTFL v4.0.1 公式シラバス PDF
                                </a>
                            </li>
                        </ul>
                    </section>

                    {/* 2. 6.1 */}
                    <section id="s61">
                        <h2>
                            <span>🛠️</span>2. 6.1 テストツールによる支援（Tool Support for Testing）
                        </h2>

                        <div id="s61-1">
                            <h3>2.1 テストツールとは何か</h3>
                            <p>
                                シラバスは「テストツール」を非常に広く定義しています。専用の商用/OSS自動化ツールだけでなく、<strong>テスト活動を支援する任意のツール</strong>（極端な例では、テストデータやチェックリストを管理するためのスプレッドシートでさえも、テストの文脈で使われればテストツールとみなされる）が含まれます。
                            </p>
                            <p>
                                これは Chapter 1 で学んだ「テストプロセス（test planning →
                                monitoring/control → analysis → design → implementation → execution
                                → completion）」の各活動に対して、ツールが横断的に支援を提供しうるという考え方につながります。
                            </p>
                        </div>

                        <div id="s61-2">
                            <h3>2.2 v4.0 シラバスにおけるツール分類（9カテゴリ）</h3>
                            <p>
                                v4.0
                                シラバスは、テストツールを以下のカテゴリに分類しています（網羅的リストではなく代表例）。
                            </p>

                            <div className="cat-grid">
                                <div className="cat-card">
                                    <span className="num">1</span>
                                    <h4>汎用ツール</h4>
                                    <p>テストの文脈で利用されるあらゆる補助ツール</p>
                                    <div className="examples">
                                        <b>例：</b>スプレッドシート
                                    </div>
                                </div>
                                <div className="cat-card">
                                    <span className="num">2</span>
                                    <h4>テスト管理ツール</h4>
                                    <p>SDLC・要求・テスト・欠陥・構成管理の効率を高める</p>
                                    <div className="examples">
                                        <b>主活動：</b>計画／監視・コントロール／完了
                                    </div>
                                </div>
                                <div className="cat-card">
                                    <span className="num">3</span>
                                    <h4>静的テストツール</h4>
                                    <p>レビューと静的解析を支援する</p>
                                    <div className="examples">
                                        <b>関連：</b>Chapter 3 静的テスト
                                    </div>
                                </div>
                                <div className="cat-card">
                                    <span className="num">4</span>
                                    <h4>テスト設計・実装ツール</h4>
                                    <p>テストケース、テストデータ、テスト手順の生成を支援する</p>
                                    <div className="examples">
                                        <b>主活動：</b>分析・設計・実装
                                    </div>
                                </div>
                                <div className="cat-card">
                                    <span className="num">5</span>
                                    <h4>テスト実行・カバレッジツール</h4>
                                    <p>自動テスト実行とカバレッジ計測を支援する</p>
                                    <div className="examples">
                                        <b>主活動：</b>実装・実行
                                    </div>
                                </div>
                                <div className="cat-card">
                                    <span className="num">6</span>
                                    <h4>非機能テストツール</h4>
                                    <p>手動では困難・不可能な非機能テストを実施可能にする</p>
                                    <div className="examples">
                                        <b>主活動：</b>実行（非機能）
                                    </div>
                                </div>
                                <div className="cat-card">
                                    <span className="num">7</span>
                                    <h4>DevOpsツール</h4>
                                    <p>
                                        デリバリーパイプライン、ワークフロー追跡、ビルド自動化、CI/CDを支援する
                                    </p>
                                    <div className="examples">
                                        <b>関連：</b>Chapter 2 DevOps
                                    </div>
                                </div>
                                <div className="cat-card">
                                    <span className="num">8</span>
                                    <h4>コラボレーションツール</h4>
                                    <p>コミュニケーションを促進する</p>
                                    <div className="examples">
                                        <b>関連：</b>Whole Team Approach
                                    </div>
                                </div>
                                <div className="cat-card">
                                    <span className="num">9</span>
                                    <h4>スケーラビリティ・デプロイ標準化支援ツール</h4>
                                    <p>仮想マシン、コンテナ化技術など</p>
                                    <div className="examples">
                                        <b>主活動：</b>テスト環境構築
                                    </div>
                                </div>
                            </div>

                            <div className="callout info">
                                <span className="callout-icon">💬</span>
                                <p>
                                    出典: ASTQB
                                    による公式シラバス該当箇所の掲載ページを参照し、日本語で要約・再構成しています。原文の逐語引用は行っていません。
                                </p>
                            </div>

                            <ul className="ref-list">
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://astqb.org/6-1-tool-support-for-testing/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ISTQB Foundation Level Syllabus - 6.1 Tool Support for
                                        Testing（ASTQB公式ミラー）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ISTQB CTFL v4.0.1 公式シラバス PDF
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div id="s61-3">
                            <h3>2.3 テストプロセスとツール分類の関係図</h3>
                            <p>
                                以下は、Chapter 1 で学んだ基本テストプロセスの各活動に、Chapter 6
                                で扱う9つのツールカテゴリがどのように対応するかを示したフローチャートです。
                            </p>
                            <div className="diagram-card">
                                <div className="diagram-target">
                                    <Mermaid chart={DIAGRAM_0} />
                                </div>
                                <div className="diagram-caption">
                                    図1: テストプロセス活動とツールカテゴリの対応関係
                                </div>
                            </div>
                        </div>

                        <div id="s61-4">
                            <h3>2.4 各カテゴリの詳細と現在（2026年）の代表的ツール例</h3>
                            <p>
                                シラバスは特定の商用ツール名を挙げませんが、実務理解を深めるため、2026年時点で広く使われているツール群を例示します（
                                <span className="badge scope-out">試験範囲外の実務補足</span>）。
                            </p>

                            <h4>テスト管理ツール</h4>
                            <p>
                                要求・テストケース・実行結果・欠陥の間のトレーサビリティ（1.4.4節参照）を確立し、進捗レポート（5.3.2節）の作成を支援します。要求管理ツール、構成管理ツール、欠陥管理ツールなど<strong>他ツールとの相互運用性</strong>が重要な選定基準になります。
                            </p>
                            <p>
                                代表例（2026年時点）: <code>Jira + Xray/Zephyr</code>、
                                <code>TestRail</code>、<code>qTest</code>、<code>Azure Test Plans</code>
                            </p>

                            <h4>静的テストツール</h4>
                            <p>
                                レビュー支援ツール（コメント・チェックリスト管理）と静的解析ツール（コーディング規約違反や潜在的な欠陥の自動検出）に大別されます。開発者がコンポーネントテスト前・コミット前に用いることが多く、CIパイプラインに統合されることが一般的です（Chapter
                                3, 2.1.4節参照）。
                            </p>
                            <p>
                                代表例: <code>SonarQube</code>、<code>ESLint</code>、
                                <code>Pylint</code>、<code>CodeQL</code>
                            </p>

                            <div className="code-label">
                                CI パイプラインへの静的解析統合例（GitHub Actions）
                            </div>
                            <div className="code-block">
                                <div className="code-line"><span className="token-key">name</span>: <span className="token-string">static-analysis</span></div>
                                <div className="code-line"><span className="token-key">on</span>: [pull_request]</div>
                                <div className="code-line"><span className="token-key">jobs</span>:</div>
                                <div className="code-line">  <span className="token-key">sonar-scan</span>:</div>
                                <div className="code-line">    <span className="token-key">runs-on</span>: ubuntu-latest</div>
                                <div className="code-line">    <span className="token-key">steps</span>:</div>
                                <div className="code-line">      - <span className="token-key">uses</span>: actions/checkout@v4</div>
                                <div className="code-line">      - <span className="token-key">name</span>: <span className="token-string">Run SonarQube analysis</span></div>
                                <div className="code-line">        <span className="token-key">uses</span>: SonarSource/sonarqube-scan-action@v3</div>
                                <div className="code-line">        <span className="token-key">env</span>:</div>
                                <div className="code-line">          <span className="token-key">SONAR_TOKEN</span>: {'${{ secrets.SONAR_TOKEN }}'}</div>
                                <div className="code-line">      - <span className="token-key">name</span>: <span className="token-string">Quality gate check</span></div>
                                <div className="code-line">        <span className="token-key">uses</span>: SonarSource/sonarqube-quality-gate-action@v1</div>
                                <div className="code-line">        <span className="token-key">timeout-minutes</span>: 5</div>
                            </div>

                            <h4>テスト設計・実装ツール</h4>
                            <p>
                                要求仕様、モデル（状態遷移図など）、コードからテストケースやテスト入力を生成する支援を行います。近年は生成AIを活用したテストケース生成支援も普及しています。
                            </p>

                            <h4>テスト実行・カバレッジツール</h4>
                            <p>
                                自動テストスクリプトを用いてテスト対象を実行し、カバレッジ（Chapter
                                4
                                のステートメントカバレッジ・ブランチカバレッジ等）を計測します。この分野は技術トレンドの変化が特に速く、次の比較が参考になります。
                            </p>

                            <div className="table-wrap">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>項目</th>
                                            <th>Playwright</th>
                                            <th>Selenium</th>
                                            <th>Cypress</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="hl">開発元</td>
                                            <td>Microsoft</td>
                                            <td>オープンソースコミュニティ</td>
                                            <td>Cypress.io</td>
                                        </tr>
                                        <tr>
                                            <td className="hl">対応言語</td>
                                            <td>TypeScript/JavaScript, Python, Java, .NET</td>
                                            <td>Java, Python, C#, Ruby, JavaScript 等多数</td>
                                            <td>JavaScript/TypeScript</td>
                                        </tr>
                                        <tr>
                                            <td className="hl">対応ブラウザエンジン</td>
                                            <td>
                                                Chromium, Firefox, WebKitを単一APIでネイティブ対応
                                            </td>
                                            <td>最も幅広い（レガシー含む）</td>
                                            <td>主にChromium系、Firefoxも対応</td>
                                        </tr>
                                        <tr>
                                            <td className="hl">並列実行</td>
                                            <td>追加インフラなしでネイティブ対応</td>
                                            <td>Selenium Grid等が必要</td>
                                            <td>
                                                基本はシングルスレッド、拡張は有償クラウドで強化
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hl">2026年時点の傾向</td>
                                            <td>QA実務者採用率が上昇し主流化</td>
                                            <td>
                                                大規模エンタープライズ・多言語チームで根強い採用
                                            </td>
                                            <td>フロントエンド専業チームで安定した採用</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="diagram-card">
                                <div className="diagram-target">
                                    <Mermaid chart={DIAGRAM_1} />
                                </div>
                                <div className="diagram-caption">
                                    図2:
                                    E2Eテスト自動化ツールの一般的傾向（2026年時点、市場調査記事に基づく相対的な位置づけ）
                                </div>
                            </div>

                            <div className="callout warning">
                                <span className="callout-icon">⚠️</span>
                                <p>
                                    上記は市場調査記事に基づく傾向であり、Claudeの学習データのカットオフ以降の情報を含むため、最新動向は必ず一次情報でご確認ください。
                                </p>
                            </div>

                            <ul className="ref-list">
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://www.vervali.com/blog/web-services-testing-automation-tools-comparison-2026-selenium-vs-playwright-vs-cypress-and-beyond/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Selenium vs Playwright vs Cypress 2026 比較（Vervali
                                        Systems）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://tech-insider.org/playwright-vs-cypress-vs-selenium-2026/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Playwright vs Cypress vs Selenium 2026 比較（Tech
                                        Insider）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://testdino.com/blog/best-test-automation-tools"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Best Test Automation Tools in 2026（TestDino）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://stackoverflow.blog/2026/06/15/selenium-vs-cypress-vs-playwright-choosing-your-test-automation-framework/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Selenium vs Cypress vs Playwright（Stack Overflow Blog,
                                        2026）
                                    </a>
                                </li>
                            </ul>

                            <h4>非機能テストツール</h4>
                            <p>
                                パフォーマンス（負荷・ストレス）、セキュリティ、ユーザビリティなど、手動での再現・測定が困難な非機能特性（Chapter
                                2, 2.2.2節の ISO/IEC 25010 品質特性参照）を検証します。
                            </p>
                            <p>
                                代表例: <code>JMeter</code>、<code>k6</code>、<code>Gatling</code>
                                （性能）、<code>OWASP ZAP</code>、<code>Burp Suite</code>
                                （セキュリティ）
                            </p>

                            <h4>DevOpsツール</h4>
                            <p>
                                継続的インテグレーション/継続的デリバリー（CI/CD）パイプライン、ワークフロー追跡、自動ビルドを支援します（Chapter
                                2, 2.1.4節「DevOpsとテスト」と直結）。
                            </p>
                            <p>
                                代表例: <code>Jenkins</code>、<code>GitHub Actions</code>、
                                <code>GitLab CI/CD</code>、<code>CircleCI</code>
                            </p>

                            <h4>コラボレーションツール</h4>
                            <p>Whole Team Approach（Chapter 1, 1.5.2節）を支える情報共有基盤です。</p>
                            <p>
                                代表例: <code>Slack</code>、<code>Microsoft Teams</code>、
                                <code>Confluence</code>
                            </p>

                            <h4>スケーラビリティ・デプロイ標準化支援ツール</h4>
                            <p>テスト環境の再現性・拡張性を高めます。</p>
                            <p>
                                代表例: <code>Docker</code>、<code>Kubernetes</code>、
                                <code>Testcontainers</code>（テスト用の使い捨てコンテナ環境）
                            </p>

                            <ul className="ref-list">
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://astqb.org/6-1-tool-support-for-testing/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ISTQB Foundation Level Syllabus - 6.1 Tool Support for
                                        Testing（ASTQB）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ISO/IEC 25010 品質特性の参照（ISTQB CTFL v4.0.1
                                        公式シラバス PDF, Chapter 2関連）
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div id="s61-5">
                            <h3>2.5 侵入的ツールと「プローブ効果」（発展知識）</h3>
                            <p>
                                一部のツール（特に性能計測ツールやカバレッジ計測ツール）は、計測のための追加命令をテスト対象に組み込むため、<strong>測定行為そのものがテスト対象の挙動（実行タイミングやメモリ使用量）に影響を与える</strong>ことがあります。この現象は一般に「プローブ効果（probe
                                effect）」と呼ばれ、非侵入型（non-intrusive）の計測手法が可能であれば優先的に検討すべきとされています。
                            </p>
                            <div className="callout info">
                                <span className="callout-icon">ℹ️</span>
                                <p>
                                    補足: 「プローブ効果」という用語自体は v3.1
                                    以前のシラバスで明示的なキーワードでしたが、v4.0
                                    では簡略化されキーワードとしては明記されていません。ただし概念としては実務上重要であるため、発展知識として記載しています。
                                </p>
                            </div>
                            <ul className="ref-list">
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://istqbfoundation.wordpress.com/2017/09/18/test-tool-classification/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Test Tool Classification（ISTQB Foundation, 一般解説）
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
