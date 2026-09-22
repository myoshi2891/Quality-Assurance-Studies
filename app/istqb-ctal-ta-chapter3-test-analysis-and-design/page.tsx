import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './istqb-ctal-ta-chapter3-test-analysis-and-design.css';

export const metadata: Metadata = {
    title: 'CTAL-TA v4.0 学習ガイド — 第3章「テスト分析・設計」 | QA Studies',
    description: 'ISTQB Advanced Level Test Analyst (CTAL-TA) v4.0 シラバス第3章「テスト分析・設計」の完全解説。データベースド、ビヘイビアベース、ルールベース、経験ベースの4大テスト技法から技法選定・自動化まで網羅。',
};

const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#ffffff",
    "primaryColor": "#eff6ff",
    "primaryBorderColor": "#2563eb",
    "primaryTextColor": "#1e293b",
    "lineColor": "#94a3b8",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "flowchart": { "curve": "basis", "htmlLabels": true }
}}%%`;

export const DIAGRAM_GUIDE_STEPS = `${MERMAID_CONFIG}
flowchart LR
    A["① 定義<br/>(この技法は何か)"] --> B["② なぜ必要か<br/>(どんな欠陥を防ぐか)"]
    B --> C["③ 具体例<br/>(実際のデータで手を動かす)"]
    C --> D["④ 図解・表<br/>(視覚的に整理)"]
    D --> E["⑤ ベストプラクティス<br/>(現場での注意点)"]`;

export const DIAGRAM_CHAPTER_STRUCTURE = `${MERMAID_CONFIG}
flowchart TD
    ROOT["第3章: テスト分析・設計<br/>(615分/全体の約50.6%)"]

    ROOT --> DB["3.1 データベースド<br/>テスト技法"]
    ROOT --> BB["3.2 ビヘイビアベース<br/>テスト技法"]
    ROOT --> RB["3.3 ルールベース<br/>テスト技法"]
    ROOT --> EB["3.4 経験ベーステスト"]
    ROOT --> AP["3.5 最適な技法の適用"]

    DB --> DB1["3.1.1 ドメインテスト<br/>[K3]"]
    DB --> DB2["3.1.2 組み合わせテスト<br/>[K3]"]
    DB --> DB3["3.1.3 ランダムテスト<br/>[K2]"]

    BB --> BB1["3.2.1 CRUDテスト<br/>[K2]"]
    BB --> BB2["3.2.2 状態遷移テスト<br/>[K3]"]
    BB --> BB3["3.2.3 シナリオベーステスト<br/>[K3]"]

    RB --> RB1["3.3.1 デシジョンテーブル<br/>[K3]"]
    RB --> RB2["3.3.2 メタモルフィック<br/>[K3]"]

    EB --> EB1["3.4.1 テストチャーター<br/>[K3]"]
    EB --> EB2["3.4.2 チェックリスト<br/>[K3]"]
    EB --> EB3["3.4.3 クラウドテスト<br/>[K2]"]

    AP --> AP1["3.5.1 リスク軽減選定<br/>[K4]"]
    AP --> AP2["3.5.2 設計自動化<br/>[K2]"]

    classDef rootFill fill:#eff6ff,stroke:#2563eb,color:#1e3a8a,stroke-width:2px
    classDef catFill fill:#f8fafc,stroke:#64748b,color:#1e293b
    classDef k2Fill fill:#f0fdf4,stroke:#16a34a,color:#14532d
    classDef k3Fill fill:#fffbeb,stroke:#d97706,color:#78350f
    classDef k4Fill fill:#fef2f2,stroke:#dc2626,color:#7f1d1d

    class ROOT rootFill
    class DB,BB,RB,EB,AP catFill
    class DB3,BB1,EB3,AP2 k2Fill
    class DB1,DB2,BB2,BB3,RB1,RB2,EB1,EB2 k3Fill
    class AP1 k4Fill`;

export default function CtalTaChapter3Page() {
    return (
        <div className="ctal-ta-ch3-page">
            <div className="layout">
                <NavBar />
                <main className="main" id="main-content">
                    {/* Hero Header */}
                    <header className="hero">
                        <span className="eyebrow">ISTQB Advanced Level Test Analyst v4.0</span>
                        <h1>CTAL-TA v4.0 学習ガイド — 第3章「テスト分析・設計(Test Analysis and Test Design)」</h1>
                        <p className="subtitle">
                            テストアナリストの中核スキルである4分類のテスト技法（データ／ビヘイビア／ルール／経験ベース）を完全網羅。境界値・ドメイン・組み合わせ・CRUD・状態遷移・シナリオ・デシジョンテーブル・メタモルフィック・チャーター・チェックリスト・クラウド・自動化まで、実践例と図解で徹底解説します。
                        </p>
                        <div className="pill-row">
                            <span className="pill"><span className="pill-label">所要時間:</span><span className="pill-value">615分 (約10.25時間)</span></span>
                            <span className="pill"><span className="pill-label">配分:</span><span className="pill-value">全体の約50.6%</span></span>
                            <span className="pill"><span className="pill-label">対象Kレベル:</span><span className="pill-value">K1 / K2 / K3 / K4</span></span>
                            <span className="pill"><span className="pill-label">シラバス:</span><span className="pill-value">v4.0 (2024年リリース)</span></span>
                        </div>
                    </header>

                    {/* Section 0: このガイドについて */}
                    <h2 id="0-このガイドについて">0. このガイドについて</h2>

                    <h3 id="01-なぜ第3章が重要なのか">0.1 なぜ第3章が重要なのか</h3>
                    <p>
                        CTAL-TA v4.0シラバスは全5章・合計1,215分(20.25時間)の学習時間で構成されていますが、<strong>第3章「テスト分析・設計」だけで615分(全体の約50.6%)</strong>を占めています。CTAL-TA合格の鍵は第3章の理解度にあると言っても過言ではありません。
                    </p>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>章</th>
                                    <th>タイトル</th>
                                    <th>学習時間</th>
                                    <th>全体に占める割合</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>第1章</td>
                                    <td>テストプロセスにおけるテストアナリストのタスク</td>
                                    <td>225分</td>
                                    <td>約18.5%</td>
                                </tr>
                                <tr className="even">
                                    <td>第2章</td>
                                    <td>リスクベーステストにおけるテストアナリストのタスク</td>
                                    <td>90分</td>
                                    <td>約7.4%</td>
                                </tr>
                                <tr className="odd">
                                    <td><strong>第3章</strong></td>
                                    <td><strong>テスト分析・設計</strong></td>
                                    <td><strong>615分</strong></td>
                                    <td><strong>約50.6%</strong></td>
                                </tr>
                                <tr className="even">
                                    <td>第4章</td>
                                    <td>品質特性のテスト</td>
                                    <td>60分</td>
                                    <td>約4.9%</td>
                                </tr>
                                <tr className="odd">
                                    <td>第5章</td>
                                    <td>ソフトウェア欠陥予防</td>
                                    <td>225分</td>
                                    <td>約18.5%</td>
                                </tr>
                                <tr className="even">
                                    <td>合計</td>
                                    <td>—</td>
                                    <td>1,215分</td>
                                    <td>100%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        出典: ISTQB® CTAL-TA Syllabus v4.0, Section 0.10「How this Syllabus is Organized」
                    </p>

                    <h3 id="02-試験の全体像">0.2 試験の全体像</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>項目</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>問題数</td>
                                    <td>40問</td>
                                </tr>
                                <tr className="even">
                                    <td>配点合計</td>
                                    <td>78点</td>
                                </tr>
                                <tr className="odd">
                                    <td>合格ライン</td>
                                    <td>51点(約65%)</td>
                                </tr>
                                <tr className="even">
                                    <td>試験時間</td>
                                    <td>120分(母国語以外で受験する場合は+25%)</td>
                                </tr>
                                <tr className="odd">
                                    <td>前提資格</td>
                                    <td>ISTQB® Certified Tester Foundation Level(CTFL)必須</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>出典: ISTQB®公式サイト CTAL-TA v4.0 認定ページ「Exam Structure」</p>

                    <h3 id="03-本ガイドの読み方">0.3 本ガイドの読み方</h3>
                    <p>
                        第3章の各テスト技法は、以下の一貫した流れで解説します。初学者がつまずきやすい「用語は知っているが使い方が分からない」という状態を避けるため、必ず<strong>具体例</strong>と<strong>図解</strong>をセットで提示します。
                    </p>
                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_GUIDE_STEPS} />
                    </div>

                    <h3 id="04-kレベル認知レベルバッジの見方">0.4 Kレベル(認知レベル)バッジの見方</h3>
                    <p>
                        CTAL-TA シラバスの学習目標には、以下の3段階の認知レベル(Bloom&apos;s Taxonomyに基づく)が付与されています。試験問題の難易度に直結するため、各節の冒頭で必ず確認してください。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>バッジ</th>
                                    <th>意味</th>
                                    <th>試験での出され方</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><code>K2: 理解</code></td>
                                    <td>概念を要約・説明できる</td>
                                    <td>定義や特徴を問う選択式問題</td>
                                </tr>
                                <tr className="even">
                                    <td><code>K3: 適用</code></td>
                                    <td>与えられた状況に技法を適用できる</td>
                                    <td>シナリオに基づき、テストケースやカバレッジ項目を実際に導出させる問題</td>
                                </tr>
                                <tr className="odd">
                                    <td><code>K4: 分析</code></td>
                                    <td>状況を分析し、最適な選択をくだせる</td>
                                    <td>複数の技法・アプローチから、状況に最も適したものを選ばせる問題</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        第3章は特に<code>K3</code>と<code>K4</code>の学習目標が多く、<strong>「知っている」だけでは合格できない章</strong>です。手を動かしてカバレッジ項目やテストケースを実際に導出する演習が不可欠です。
                    </p>

                    <hr />

                    {/* Section 1: 第3章の全体構造 */}
                    <h2 id="1-第3章の全体構造--4分類のテスト技法">1. 第3章の全体構造 — 4分類のテスト技法</h2>
                    <p>
                        CTAL-TAシラバスは、ブラックボックステスト技法を「<strong>何をモデル化するか</strong>」という観点で3つに分類し、これに経験ベーステストを加えた4系統で第3章を構成しています。
                    </p>
                    <ul>
                        <li><strong>データベースド(data-based)</strong>: データの要素をモデル化する</li>
                        <li><strong>ビヘイビアベースド(behavior-based)</strong>: 動的な振る舞いの要素をモデル化する</li>
                        <li><strong>ルールベースド(rule-based)</strong>: 静的な振る舞いのルール(ビジネスルールなど)をモデル化する</li>
                        <li><strong>経験ベースド(experience-based)</strong>: テスト担当者の経験・知識を活用する</li>
                    </ul>

                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_CHAPTER_STRUCTURE} />
                    </div>

                    <div className="callout callout-practice">
                        <div className="callout-head">
                            <span className="callout-icon">💡</span><span className="callout-title">ベストプラクティス — 分類の軸を覚える</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                試験では「この技法はどのカテゴリに属するか」を問う問題が頻出します。迷ったら次の質問で切り分けましょう。
                            </p>
                            <ul>
                                <li>データの「値」に注目している → <strong>データベースド</strong></li>
                                <li>システムの「状態遷移」や「時間の流れ」に注目している → <strong>ビヘイビアベースド</strong></li>
                                <li>状態に依存しない「条件と結果のルール」に注目している → <strong>ルールベースド</strong></li>
                                <li>明文化された網羅基準がなく、担当者の経験や探索に頼る → <strong>経験ベースド</strong></li>
                            </ul>
                        </div>
                    </div>

                    <h3 id="11-用語集キーワードk1レベル">1.1 用語集(キーワード・K1レベル)</h3>
                    <p>
                        シラバスの章見出し直下に列挙されている用語は、明示的な学習目標がなくても定義を暗記すべき<code>K1</code>レベルの必須キーワードです。
                    </p>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>英語キーワード</th>
                                    <th>日本語訳</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>checklist-based testing</td>
                                    <td>チェックリストベーステスト</td>
                                </tr>
                                <tr className="even">
                                    <td>behavior-based test technique</td>
                                    <td>ビヘイビアベーステスト技法</td>
                                </tr>
                                <tr className="odd">
                                    <td>combinatorial testing</td>
                                    <td>組み合わせテスト</td>
                                </tr>
                                <tr className="even">
                                    <td>crowd testing</td>
                                    <td>クラウドテスト</td>
                                </tr>
                                <tr className="odd">
                                    <td>CRUD testing</td>
                                    <td>CRUDテスト</td>
                                </tr>
                                <tr className="even">
                                    <td>data-based test technique</td>
                                    <td>データベースドテスト技法</td>
                                </tr>
                                <tr className="odd">
                                    <td>decision table testing</td>
                                    <td>デシジョンテーブルテスト</td>
                                </tr>
                                <tr className="even">
                                    <td>domain testing</td>
                                    <td>ドメインテスト</td>
                                </tr>
                                <tr className="odd">
                                    <td>equivalence partition</td>
                                    <td>同値パーティション</td>
                                </tr>
                                <tr className="even">
                                    <td>experience-based testing</td>
                                    <td>経験ベーステスト</td>
                                </tr>
                                <tr className="odd">
                                    <td>metamorphic relation</td>
                                    <td>メタモルフィック関係</td>
                                </tr>
                                <tr className="even">
                                    <td>metamorphic testing</td>
                                    <td>メタモルフィックテスト</td>
                                </tr>
                                <tr className="odd">
                                    <td>random testing</td>
                                    <td>ランダムテスト</td>
                                </tr>
                                <tr className="even">
                                    <td>rule-based test technique</td>
                                    <td>ルールベーステスト技法</td>
                                </tr>
                                <tr className="odd">
                                    <td>scenario-based testing</td>
                                    <td>シナリオベーステスト</td>
                                </tr>
                                <tr className="even">
                                    <td>session-based testing</td>
                                    <td>セッションベーステスト</td>
                                </tr>
                                <tr className="odd">
                                    <td>state transition testing</td>
                                    <td>状態遷移テスト</td>
                                </tr>
                                <tr className="even">
                                    <td>test charter</td>
                                    <td>テストチャーター</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>出典: ISTQB® CTAL-TA Syllabus v4.0, Chapter 3 “Keywords”</p>

                    <hr />
                </main>
            </div>
        </div>
    );
}
