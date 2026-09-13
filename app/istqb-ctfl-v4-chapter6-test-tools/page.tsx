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
quadrant-4 "モダンWeb向けだが学習コスト高"
"Playwright": [0.8, 0.75]
"Selenium": [0.35, 0.3]
"Cypress": [0.7, 0.65]`;

const DIAGRAM_2 = `flowchart LR
A["ツール導入の意思決定"] --> B{"継続的に投資対効果を評価しているか"}
B -->|"Yes"| C["利点が実現: 効率と品質が向上"]
B -->|"No"| D["リスクが顕在化: 過度な依存や相互運用性の問題"]
C --> E["テストプロセス全体が改善する"]
D --> F["ツール利用が形骸化する"]`;

const DIAGRAM_3 = `flowchart TD
S1["キャプチャ・リプレイ方式"] --> S2["データ駆動テスト"]
S2 --> S3["キーワード駆動テスト"]
S1 -.欠点.-> N1["変更に弱くスケールしない"]
S2 -.利点.-> N2["データ追加だけでテスト拡張が可能"]
S3 -.利点.-> N3["非技術者もテスト定義に参加可能"]`;

const DIAGRAM_4 = `flowchart TD
TM["テスト管理ツール"]
RM["要求管理ツール"]
CM["構成管理・バージョン管理ツール"]
DM["欠陥管理ツール"]
CI["CI・CDツール"]
RM <--> TM
CM <--> TM
DM <--> TM
CI <--> TM
TM --> REPORT["トレーサビリティ・進捗レポート"]`;

const DIAGRAM_5 = `flowchart TD
A["組織の成熟度・強み弱みを評価"] --> B["ツール導入の目的・要件を明確化"]
B --> C["候補ツールを機能・サポート・コストで評価"]
C --> D["パイロットプロジェクトで試行"]
D --> E{"パイロットの結果は目的に合致するか"}
E -->|"Yes"| F["ガイドラインを策定し段階的に組織展開"]
E -->|"No"| G["要件を見直すか別ツールを再評価"]
F --> H["継続的なトレーニングと教訓収集"]`;

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
                            、全6章（1,135分）に占める割合はわずか約1.8%ですが、試験では実務的な理解を問う問題が出題されます。
                        </p>

                        <div className="table-wrap">
                            <table>
                                <caption className="sr-only">Chapter 6 の位置づけ（学習時間・出題比率などの基本情報）</caption>
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
                                            2問（5%）
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
                                            test automation（テスト自動化）
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
                                <caption className="sr-only">Chapter 6 の学習目標一覧（ID・K-level・目標内容）</caption>
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
                                            さまざまな種類のテストツールがテストをどのように支援するかを説明できる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">FL-6.2.1</td>
                                        <td>
                                            <span className="badge k1">K1</span>
                                        </td>
                                        <td>
                                            テスト自動化の利点とリスクを想起できる
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
                                    <caption className="sr-only">テスト実行・カバレッジツールの比較（Playwright・Selenium・Cypress）</caption>
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

                    {/* 3. 6.2 */}
                    <section id="s62">
                        <h2>
                            <span>⚖️</span>3. 6.2 テスト自動化の利点とリスク（Benefits and Risks of Test Automation）
                        </h2>

                        <div id="s62-1">
                            <h3>3.1 導入の大前提</h3>
                            <p>
                                シラバスが強調する最も重要なポイントは、<strong>「ツールを導入するだけでは成功は保証されない」</strong>という点です。ツールの導入・維持・トレーニングには継続的な投資が必要であり、リスクの分析と対策（mitigation）が不可欠です。
                            </p>
                            <div className="callout info">
                                <span className="callout-icon">💬</span>
                                <p>
                                    出典を要約:
                                    単にツールを取得しただけでは効果は得られず、ツール導入・保守・教育に継続的な工数が必要であり、そこにはリスクも伴うため分析と緩和策が求められる。
                                </p>
                            </div>
                            <ul className="ref-list">
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://astqb.org/6-2-benefits-and-risks-of-test-automation/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ISTQB Foundation Level Syllabus - 6.2 Benefits and Risks of
                                        Test Automation（ASTQB）
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div id="s62-2">
                            <h3>3.2 テスト自動化・ツール活用の利点</h3>
                            <div className="table-wrap">
                                <table>
                                    <caption className="sr-only">テスト自動化・ツール活用の利点と具体例</caption>
                                    <thead>
                                        <tr>
                                            <th>利点</th>
                                            <th>説明</th>
                                            <th>具体例</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="hl">🔁 反復作業の削減</td>
                                            <td>人手による繰り返し作業を減らす</td>
                                            <td>
                                                回帰テストの再実行、同一テストデータの再入力、コーディング規約チェック
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hl">📋 一貫性・再現性の向上</td>
                                            <td>同じ手順・頻度でテストを実行できる</td>
                                            <td>要求から導出したテストを常に同一順序で実行</td>
                                        </tr>
                                        <tr>
                                            <td className="hl">📊 客観的な評価</td>
                                            <td>人的バイアスを排した測定が可能</td>
                                            <td>静的コード指標、カバレッジ測定値</td>
                                        </tr>
                                        <tr>
                                            <td className="hl">📈 情報アクセスの容易化</td>
                                            <td>テスト状況に関する情報を素早く得られる</td>
                                            <td>進捗統計、欠陥発生率、性能グラフ</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div id="s62-3">
                            <h3>3.3 テスト自動化・ツール活用のリスク</h3>
                            <div className="table-wrap">
                                <table>
                                    <caption className="sr-only">テスト自動化・ツール活用のリスクと説明</caption>
                                    <thead>
                                        <tr>
                                            <th>リスク</th>
                                            <th>説明</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="hl">非現実的な期待</td>
                                            <td>
                                                ツールが「すべての欠陥を防いでくれる」といった過大な期待を持ってしまう
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hl">導入コスト・工数の過小評価</td>
                                            <td>初期導入にかかる時間・費用・労力を見誤る</td>
                                        </tr>
                                        <tr>
                                            <td className="hl">継続的便益達成コストの過小評価</td>
                                            <td>
                                                プロセス変更や継続的改善を伴わなければ、真の便益は得られない
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hl">テスト資産保守コストの過小評価</td>
                                            <td>
                                                自動化によって生成されたテストスクリプト・データの保守負荷を軽視しがち
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hl">ツールへの過度な依存</td>
                                            <td>
                                                テスト設計そのものを軽視し、手動テストが適切な場面でも自動化に固執する
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hl">バージョン管理の軽視</td>
                                            <td>
                                                テスト資産（スクリプト・データ）の構成管理（Chapter
                                                5, 5.4節）を怠る
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hl">他ツールとの相互運用性の欠如</td>
                                            <td>
                                                要求管理・構成管理・欠陥管理ツール等、複数ベンダーのツール間連携の問題
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hl">ベンダー・プロジェクトリスク</td>
                                            <td>
                                                ツールベンダーの廃業・ツール廃止・買収、OSSプロジェクトの停止によるサポート断絶
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hl">ベンダーサポートの質</td>
                                            <td>
                                                サポート・アップグレード・不具合修正への対応が不十分な場合がある
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div id="s62-4">
                            <h3>3.4 利点とリスクの構造的理解</h3>
                            <div className="diagram-card">
                                <div className="diagram-target">
                                    <Mermaid chart={DIAGRAM_2} />
                                </div>
                                <div className="diagram-caption">
                                    図3: 継続投資の有無が利点実現とリスク顕在化を分岐させる
                                </div>
                            </div>
                            <ul className="ref-list">
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://astqb.org/6-2-benefits-and-risks-of-test-automation/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ISTQB Foundation Level Syllabus - 6.2 Benefits and Risks of
                                        Test Automation（ASTQB）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://istqbfoundation.wordpress.com/2017/09/18/potential-benefits-and-risks-of-tool-support-for-testing-for-all-tools/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Potential Benefits and Risks of Tool Support for
                                        Testing（一般解説）
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 4. 実務補足: ツール種別ごとの考慮事項（試験範囲外） */}
                    <section id="s623">
                        <h2>
                            <span>⚙️</span>4. シラバス範囲外の実務補足: 特定ツール種別に関する考慮事項
                        </h2>
                        <div className="callout warning">
                            <span className="callout-icon">⚠️</span>
                            <p>
                                <strong>注意:</strong> 以下は v4.0.1 シラバスの examinable content
                                には含まれません。Chapter 6 の公式キーワードは
                                <strong>test automation（テスト自動化）</strong>
                                のみで、
                                <strong>data-driven testing（データ駆動テスト）</strong>、
                                <strong>keyword-driven testing（キーワード駆動テスト）</strong>、
                                <strong>scripting language（スクリプト言語）</strong>
                                は v3.1 以前のキーワードであり v4.0 で削除されています。試験対策としては不要ですが、実務でテスト実行ツールを扱う際の基礎概念として紹介します。
                            </p>
                        </div>

                        <div id="s623-1">
                            <h3>4.1 テスト実行ツール: スクリプティング手法の進化</h3>
                            <p>
                                テスト実行の自動化アプローチは、成熟度に応じて次のように整理できます。
                            </p>

                            <div className="diagram-card">
                                <div className="diagram-target">
                                    <Mermaid chart={DIAGRAM_3} />
                                </div>
                                <div className="diagram-caption">
                                    図4: テスト実行自動化における成熟度モデル
                                </div>
                            </div>

                            <ul className="plain">
                                <li>
                                    <b>データ駆動テスト（data-driven testing）:</b>
                                    汎用の制御スクリプトが、表形式のデータ（入力値・期待結果）を読み込みながら同じ操作を繰り返す手法。スクリプト作成という技術的に難しい作業は一度で済み、以降はテストデータの追加だけでテストケースを拡張できる。
                                </li>
                                <li>
                                    <b>キーワード駆動テスト（keyword-driven testing）:</b>
                                    データ駆動テストをさらに発展させ、データファイルに「アクションワード（操作を表すキーワード）」を含める手法。スクリプト言語に不慣れなテスト担当者でも、キーワードを組み合わせることでテストを定義できる。
                                </li>
                                <li>
                                    <b>スクリプト言語（scripting language）:</b>
                                    実行可能なテストスクリプトを記述するためのプログラミング言語。どの手法を採用しても、スクリプト自体の実装には専門知識（テスト担当者自身、または自動化専門の開発者）が必要になる。
                                </li>
                            </ul>
                            <p>
                                いずれの手法でも、実際の結果と期待結果の比較（動的な比較、またはテスト実行後のバッチ比較）が必要になる点は共通しています。
                            </p>

                            <div className="code-label">
                                キーワード駆動テストのデータ表現イメージ（CSV）
                            </div>
                            <div className="code-block">
                                <div className="code-line">keyword,target,value</div>
                                <div className="code-line">open_browser,https://example.com/login,</div>
                                <div className="code-line">input_text,#username,tanaka_taro</div>
                                <div className="code-line">input_text,#password,P@ssw0rd</div>
                                <div className="code-line">click,#login-button,</div>
                                <div className="code-line">assert_text,#welcome-message,ようこそ、田中太郎さん</div>
                            </div>

                            <ul className="ref-list">
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://istqbfoundation.wordpress.com/2017/09/18/special-considerations-for-some-types-of-tools/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Special Considerations for Some Types of Tools（一般解説,
                                        データ駆動/キーワード駆動）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://glossary.istqb.org/en_US/term/keyword-driven-testing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        keyword-driven testing — ISTQB公式用語集
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://medium.com/@mehmetbarannakipoglu/test-tools-chapter-vi-of-istqb-ctfl-5b0a93a79b93"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Test Tools - Chapter VI of ISTQB（データ駆動/キーワード駆動の実務解説）
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div id="s623-2">
                            <h3>4.2 静的解析ツールに関する考慮事項</h3>
                            <p>
                                静的解析ツールは、コード実行を伴わずに欠陥候補を検出できるため、<strong>コンポーネントテストより前、あるいは開発者自身がコミット前に実行する</strong>ことで最大の効果を発揮します（Chapter
                                3,
                                3.1.2節「静的テストの価値」を参照）。アーキテクトが設計標準への準拠を確認する目的で使うこともあります。CIパイプラインに組み込むことで、シフトレフト（Chapter
                                2, 2.1.5節）を実践する代表的な手段となります。
                            </p>
                        </div>

                        <div id="s623-3">
                            <h3>4.3 テスト管理ツールに関する考慮事項</h3>
                            <p>
                                テスト管理ツールは単体で機能するのではなく、<strong>要求管理ツール、構成管理（バージョン管理）ツール、欠陥管理ツール、CI/CDツールなど多数のツールと連携する</strong>ことで真価を発揮します。組織にとって有用なレポート（Chapter
                                5,
                                5.3.2節）を生成するには、これらのツール間でデータが一貫して流通する必要があります。
                            </p>

                            <div className="diagram-card">
                                <div className="diagram-target">
                                    <Mermaid chart={DIAGRAM_4} />
                                </div>
                                <div className="diagram-caption">
                                    図5: テスト管理ツールを中心とした他ツールとの相互運用
                                </div>
                            </div>

                            <ul className="ref-list">
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://astqb.org/6-2-benefits-and-risks-of-test-automation/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ISTQB Foundation Level Syllabus - 6.2 Benefits and Risks of
                                        Test Automation（ASTQB）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ISTQB CTFL v4.0.1 公式シラバス PDF（Chapter 5, 3 関連節）
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 5. 実務補足 */}
                    <section id="s5">
                        <h2>
                            <span>🗺️</span>5. シラバス範囲外の実務補足: ツール導入の意思決定プロセス
                        </h2>
                        <div className="callout warning">
                            <span className="callout-icon">⚠️</span>
                            <p>
                                <strong>注意:</strong> 以下は v4.0 シラバスの examinable content
                                には含まれません（v3.1 以前には「6.2.1 主要なツール選定の原則」「6.2.2
                                組織へのツール導入（パイロットプロジェクト）」「6.2.3
                                ツール成功要因」という節が存在しましたが、v4.0
                                では削除されています）。試験対策としては不要ですが、実務でツール導入を検討する際の一般的な流れとして紹介します。
                            </p>
                        </div>

                        <div className="diagram-card">
                            <div className="diagram-target">
                                <Mermaid chart={DIAGRAM_5} />
                            </div>
                            <div className="diagram-caption">
                                図6: 実務でのツール導入意思決定フロー（シラバス範囲外・参考情報）
                            </div>
                        </div>

                        <ul className="ref-list">
                            <li>
                                <span className="ref-icon">🔗</span>
                                <a
                                    href="https://www.testing101.net/post/overview-of-the-istqb-certified-tester-foundation-level-ctfl-v4-0-new"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB CTFL v4.0 Overview（旧版との章構成比較、削除内容の明記）
                                </a>
                            </li>
                            <li>
                                <span className="ref-icon">🔗</span>
                                <a
                                    href="https://astqb.org/assets/documents/CTFL-2018-Syllabus.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Certified Tester Foundation Level Syllabus
                                    v3.1.1（旧シラバス、参考比較用）
                                </a>
                            </li>
                        </ul>
                    </section>

                    {/* 6. まとめ */}
                    <section id="summary">
                        <h2>
                            <span>✅</span>6. 章のまとめ
                        </h2>
                        <div className="table-wrap">
                            <table>
                                <caption className="sr-only">Chapter 6 章のまとめ（ポイントと要約）</caption>
                                <thead>
                                    <tr>
                                        <th>ポイント</th>
                                        <th>要約</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="hl">ツールの範囲</td>
                                        <td>
                                            専用自動化ツールに限らず、テスト活動を支援するあらゆるツールを含む広い概念
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">分類軸</td>
                                        <td>
                                            テストプロセスの活動（Chapter
                                            1）に対応させて分類するのがシラバスの立場
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">9カテゴリ</td>
                                        <td>
                                            汎用／テスト管理／静的テスト／設計・実装／実行・カバレッジ／非機能／DevOps／コラボレーション／スケーラビリティ支援
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">導入の大原則</td>
                                        <td>
                                            ツール取得だけでは成功は保証されない。継続的な投資（保守・教育・プロセス改善）が前提
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">利点</td>
                                        <td>
                                            反復作業削減、一貫性・再現性向上、客観的評価、情報アクセスの容易化
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">主要リスク</td>
                                        <td>
                                            過大な期待、コスト過小評価、過度な依存、相互運用性・ベンダーリスク
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">
                                            テスト実行ツールの発展{' '}
                                            <span className="badge scope-out">試験範囲外の実務補足</span>
                                        </td>
                                        <td>
                                            キャプチャ・リプレイ → データ駆動 →
                                            キーワード駆動という成熟度の流れ
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">
                                            静的解析ツール{' '}
                                            <span className="badge scope-out">試験範囲外の実務補足</span>
                                        </td>
                                        <td>
                                            コンポーネントテスト以前・コミット前に使うことで最大効果。シフトレフトを支える
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">
                                            テスト管理ツール{' '}
                                            <span className="badge scope-out">試験範囲外の実務補足</span>
                                        </td>
                                        <td>
                                            単体では機能せず、要求管理・構成管理・欠陥管理・CI/CDとの連携が鍵
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 7. 演習 */}
                    <section id="quiz">
                        <h2>
                            <span>📝</span>7. 演習問題（自己チェック用）
                        </h2>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                <span className="badge k1">Q1 K1</span> &nbsp;次のうち、v4.0.1
                                シラバスの Chapter 6 のキーワードとして明記されているものはどれか。
                            </div>
                            <div className="quiz-options">
                                A. probe effect　B. test automation　C. pilot project　D. data-driven testing
                            </div>
                            <details>
                                <summary>解答を見る</summary>
                                B. test automation（Chapter 6 の公式キーワードはこの 1 語のみ。他の 3
                                つは v3.1 以前のキーワードで v4.0 では削除されている）
                            </details>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                <span className="badge k2">Q2 K2</span>
                                &nbsp;あるチームが「テスト自動化ツールを導入すればテスト担当者の専門知識が不要になる」と考えている。これはシラバスのどの原則に反するか説明せよ。
                            </div>
                            <details>
                                <summary>解答例を見る</summary>
                                「非現実的な期待（unrealistic
                                expectations）」というリスクに該当する。ツールはテスト活動を支援するものであり、テストは本質的に知的活動（Chapter
                                1, 1.1節）であるため、専門知識の代替にはならない。
                            </details>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                <span className="badge k2">Q3 K2</span>
                                &nbsp;静的解析ツールを開発者のコミット前に実行することの利点を、シフトレフトの観点から説明せよ。
                            </div>
                            <details>
                                <summary>解答例を見る</summary>
                                コード実行を伴わずに早期に欠陥を検出できるため、Chapter 3
                                で学んだ「早期テストの原則」およびシフトレフト（Chapter 2,
                                2.1.5節）を実践でき、後工程での修正コストを抑制できる。
                            </details>
                        </div>
                    </section>

                    {/* 8. 参照URL */}
                    <section id="refs">
                        <h2>
                            <span>🔗</span>8. 参照URL一覧（全節共通）
                        </h2>

                        <div className="ref-group">
                            <div className="ref-group-title">公式一次情報源</div>
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
                                        href="https://istqb.org/istqb-releases-certified-tester-foundation-level-v4-0-ctfl/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ISTQB CTFL v4.0 リリース発表
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://istqb.org/help/ctfl-v40/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ISTQB CTFL v4.0 FAQ
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://glossary.istqb.org/en_US/term/keyword-driven-testing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        keyword-driven testing — ISTQB公式用語集
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="ref-group">
                            <div className="ref-group-title">
                                公式内容のミラー・要約（ASTQB＝米国ISTQB加盟団体）
                            </div>
                            <ul className="ref-list">
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://astqb.org/6-1-tool-support-for-testing/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        6.1 Tool Support for Testing（ASTQB）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://astqb.org/6-2-benefits-and-risks-of-test-automation/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        6.2 Benefits and Risks of Test Automation（ASTQB）
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="ref-group">
                            <div className="ref-group-title">学習補助・比較解説</div>
                            <ul className="ref-list">
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
                                        ISTQB CTFL v4.0 Overview（章構成の新旧比較）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://medium.com/@mehmetbarannakipoglu/test-tools-chapter-vi-of-istqb-ctfl-5b0a93a79b93"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Test Tools - Chapter VI of ISTQB — CTFL
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://istqbfoundation.wordpress.com/2017/09/18/test-tool-classification/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Test Tool Classification（一般解説）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://istqbfoundation.wordpress.com/2017/09/18/potential-benefits-and-risks-of-tool-support-for-testing-for-all-tools/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Potential Benefits and Risks of Tool Support for Testing（一般解説）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://istqbfoundation.wordpress.com/2017/09/18/special-considerations-for-some-types-of-tools/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Special Considerations for Some Types of Tools（一般解説）
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="ref-group">
                            <div className="ref-group-title">
                                2026年時点の実務ツール市場動向（発展知識・シラバス範囲外）
                            </div>
                            <ul className="ref-list">
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://www.vervali.com/blog/web-services-testing-automation-tools-comparison-2026-selenium-vs-playwright-vs-cypress-and-beyond/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Selenium vs Playwright vs Cypress 2026（Vervali Systems）
                                    </a>
                                </li>
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://tech-insider.org/playwright-vs-cypress-vs-selenium-2026/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Playwright vs Cypress vs Selenium: 2026 比較（Tech Insider）
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
                                        Selenium vs Cypress vs Playwright（Stack Overflow Blog, 2026）
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="ref-group">
                            <div className="ref-group-title">旧シラバス（比較参考用）</div>
                            <ul className="ref-list">
                                <li>
                                    <span className="ref-icon">🔗</span>
                                    <a
                                        href="https://astqb.org/assets/documents/CTFL-2018-Syllabus.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Certified Tester Foundation Level Syllabus v3.1.1（GASQ, PDF）
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <footer>
                        本ガイドは学習補助を目的とした二次資料です。試験対策の最終確認には、必ず{' '}
                        <a
                            href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ISTQB® 公式シラバス
                        </a>{' '}
                        の原文をご確認ください。ISTQB® は International Software Testing
                        Qualifications Board の登録商標です。
                    </footer>
                </div>
            </main>
        </div>
    );
}
