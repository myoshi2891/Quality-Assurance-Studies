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

export const DIAGRAM_DOMAIN_POINTS = `${MERMAID_CONFIG}
flowchart LR
    subgraph OUTSIDE["同値パーティションの外側"]
        OUT["OUT点<br/>境界から十分離れた外側の点"]
        OFF["OFF点<br/>境界に最も近い外側の点(閉じた境界)"]
    end

    subgraph BORDER["境界線 (Border)"]
        B_LINE["境界値"]
    end

    subgraph INSIDE["同値パーティションの内側"]
        ON["ON点<br/>境界そのものの点(閉じた境界)"]
        IN["IN点<br/>境界から十分離れた内側の点"]
    end

    OUT --> OFF --> BORDER --> ON --> IN

    classDef outsideFill fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
    classDef insideFill fill:#dcfce7,stroke:#16a34a,color:#14532d
    classDef borderFill fill:#fef3c7,stroke:#d97706,color:#78350f

    class OUT,OFF outsideFill
    class ON,IN insideFill
    class BORDER borderFill`;

export const DIAGRAM_BASE_CHOICE = `${MERMAID_CONFIG}
flowchart LR
    BASE["基準カバレッジ項目<br/>色=赤 / サイズ=M / 会員=一般"] --> V1["色だけ変更<br/>色=青 / サイズ=M / 会員=一般"]
    BASE --> V2["色だけ変更<br/>色=緑 / サイズ=M / 会員=一般"]
    BASE --> V3["サイズだけ変更<br/>色=赤 / サイズ=L / 会員=一般"]
    BASE --> V4["会員種別だけ変更<br/>色=赤 / サイズ=M / 会員=プレミアム"]

    classDef baseFill fill:#fef3c7,stroke:#d97706,color:#78350f
    classDef varFill fill:#dbeafe,stroke:#2563eb,color:#1e3a5f
    class BASE baseFill
    class V1,V2,V3,V4 varFill`;

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

                    {/* Section 2: 3.1 データベースドテスト技法 */}
                    <h2 id="2-31-データベースドテスト技法data-based-test-techniques">
                        2. 3.1 データベースドテスト技法(Data-Based Test Techniques)
                    </h2>
                    <p>
                        Foundation Levelで学んだ<strong>同値分割法(EP)</strong>や<strong>境界値分析(BVA)</strong>を基礎としつつ、Advanced Levelではより複雑・高度な3つのデータベースド技法を習得します。
                    </p>
                    <ul>
                        <li><strong>ドメインテスト</strong> — EP/BVAを複数変数の関係性・相互作用へ拡張し、幾何学的な境界線(border)として捉える技法</li>
                        <li><strong>組み合わせテスト</strong> — パラメータ間の相互作用を直交表やペアワイズ法などで効率的に絞り込む技法</li>
                        <li><strong>ランダムテスト</strong> — 確率分布に従ってランダムに入力値を生成・投入し、想定外の欠陥や回復性を探る技法</li>
                    </ul>

                    {/* 2.1 ドメインテスト */}
                    <h3 id="21-311-ドメインテストdomain-testing-k3-適用">
                        2.1 3.1.1 ドメインテスト(Domain Testing) <code>K3: 適用</code>
                    </h3>

                    <h4 id="定義">定義</h4>
                    <p>
                        ドメインテストとは、テスト対象が同値パーティションの<strong>境界(border)</strong>付近でどのように振る舞うかを評価する技法です。境界値分析(BVA)を<strong>2つ以上の入力パラメータが相互に関連するドメイン(領域)</strong>へと拡張した概念と位置づけられます。
                    </p>
                    <p>境界には2種類あります。</p>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>境界の種類</th>
                                    <th>演算子</th>
                                    <th>例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><strong>閉じた境界(Closed border)</strong></td>
                                    <td><code>≤</code> <code>≥</code> <code>=</code></td>
                                    <td>「年齢が18歳以上」(18歳はそのパーティションに含まれる)</td>
                                </tr>
                                <tr className="even">
                                    <td><strong>開いた境界(Open border)</strong></td>
                                    <td><code>&lt;</code> <code>&gt;</code> <code>≠</code></td>
                                    <td>「年齢が18歳未満」(18歳はそのパーティションに含まれない)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 id="なぜ必要か">なぜ必要か</h4>
                    <p>
                        同値分割やBVAは1つの変数を前提としていますが、実務のシステムでは「複数の入力パラメータの組み合わせによって境界線が斜めや曲線になる」「条件同士が排他・従属している」といった複雑なドメイン境界が頻出します。これらを幾何学的な領域(ドメイン)として捉え、境界の歪みや誤った不等号の適用による欠陥を確実に検出するためにドメインテストが必要です。
                    </p>

                    <h4 id="4種類の点onoffinout">4種類の点:ON・OFF・IN・OUT</h4>
                    <p>境界に対して、テストデータは以下の4種類に分類されます。</p>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>点の種類</th>
                                    <th>閉じた境界の場合</th>
                                    <th>開いた境界の場合</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><strong>ON点</strong></td>
                                    <td>境界線上の点(パーティション<strong>内側</strong>)</td>
                                    <td>境界線に最も近い、パーティション<strong>内側</strong>の点</td>
                                </tr>
                                <tr className="even">
                                    <td><strong>OFF点</strong></td>
                                    <td>境界に最も近い、パーティション<strong>外側</strong>の点</td>
                                    <td>境界線上の点(パーティション<strong>外側</strong>)</td>
                                </tr>
                                <tr className="odd">
                                    <td><strong>IN点</strong></td>
                                    <td>パーティションに属し、ON点ではない点</td>
                                    <td>パーティションに属し、ON点ではない点</td>
                                </tr>
                                <tr className="even">
                                    <td><strong>OUT点</strong></td>
                                    <td>パーティションに属さず、OFF点ではない点</td>
                                    <td>パーティションに属さず、OFF点ではない点</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_DOMAIN_POINTS} />
                    </div>

                    <h4 id="具体例">具体例</h4>
                    <p>条件: 「注文数量が5個以上、かつ、合計金額が10,000円を超える場合に送料無料」</p>
                    <ul>
                        <li>数量条件: <code>数量 ≥ 5</code>(閉じた境界)</li>
                        <li>金額条件: <code>合計金額 &gt; 10000</code>(開いた境界)</li>
                    </ul>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>境界</th>
                                    <th>ON点</th>
                                    <th>OFF点</th>
                                    <th>IN点</th>
                                    <th>OUT点</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><code>数量 ≥ 5</code>(閉)</td>
                                    <td>数量=5</td>
                                    <td>数量=4</td>
                                    <td>数量=10</td>
                                    <td>数量=1</td>
                                </tr>
                                <tr className="even">
                                    <td><code>合計金額 &gt; 10000</code>(開)</td>
                                    <td>合計金額=10001</td>
                                    <td>合計金額=10000</td>
                                    <td>合計金額=50000</td>
                                    <td>合計金額=3000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 id="カバレッジ基準">カバレッジ基準</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>基準</th>
                                    <th>必要なカバレッジ項目</th>
                                    <th>特徴</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>
                                        <strong>簡略化ドメインカバレッジ</strong><br />(Simplified domain coverage)
                                    </td>
                                    <td>
                                        各境界(<code>&lt;</code> <code>≤</code> <code>&gt;</code> <code>≥</code>)につきON点1つ+OFF点1つ。<code>=</code>演算子の境界はON点1つ+反対側のOFF点2つ。<code>≠</code>演算子の境界はOFF点1つ+反対側のON点2つ
                                    </td>
                                    <td>
                                        項目数が少なく効率的。1つのIN/OUT点を複数の境界で使い回すなど最適化も可能
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>
                                        <strong>信頼性ドメインカバレッジ</strong><br />(Reliable domain coverage)
                                    </td>
                                    <td>上記に加え、各境界についてIN点・OUT点も追加で取得</td>
                                    <td>
                                        項目数はやや増えるが、検出できるドメイン欠陥の数は大きく向上する
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout callout-practice">
                        <div className="callout-head">
                            <span className="callout-icon">💡</span><span className="callout-title">ベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    境界が多いドメインでは、1つのON/OFF点のペアを隣接するパーティションのOFF/ON点として<strong>使い回す</strong>ことで、テストケース数を最適化できます。
                                </li>
                                <li>
                                    リスクが高い機能(決済金額の計算など)には信頼性ドメインカバレッジを、リスクが低い補助的な入力には簡略化ドメインカバレッジを、というように<strong>リスクベースでカバレッジ基準を使い分ける</strong>のが実務的です。
                                </li>
                                <li>
                                    境界条件は要件定義書の「以上・より・未満・以下」といった表現の揺れが原因で誤って実装されやすいため、<strong>要件レビューの段階で境界の演算子を明示的に確認する</strong>ことが上流での欠陥予防につながります。
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="compare-grid">
                        <div className="compare-item compare-good">
                            <h4><span className="compare-icon">✅</span>良い例</h4>
                            <div className="compare-text">
                                「<code>≥</code>と<code>&gt;</code>を混同していないか」を検証するため、ON点とOFF点を必ずペアで用意する
                            </div>
                        </div>
                        <div className="compare-item compare-bad">
                            <h4><span className="compare-icon">❌</span>悪い例</h4>
                            <div className="compare-text">
                                IN点だけをテストし、境界そのもの(ON点)をテストしない → 演算子の実装ミスを見逃す典型的な失敗パターン
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* 2.2 組み合わせテスト */}
                    <h3 id="22-312-組み合わせテストcombinatorial-testing-k3-適用">
                        2.2 3.1.2 組み合わせテスト(Combinatorial Testing) <code>K3: 適用</code>
                    </h3>

                    <h4 id="定義-1">定義</h4>
                    <p>
                        組み合わせテストは、複数のパラメータの値が組み合わさったときにのみ発生する不具合(相互作用障害)を効率的に検出するための技法です。
                    </p>

                    <h4 id="なぜ必要か-1">なぜ必要か</h4>
                    <p>
                        すべてのパラメータの全組み合わせをテストするのは、パラメータ数が増えると指数関数的に爆発し現実的ではありません(組み合わせ爆発)。米国国立標準技術研究所(NIST)の研究によると、<strong>ソフトウェア障害の約70%〜90%以上は、2つ以下のパラメータの相互作用によって引き起こされる</strong>と報告されています。したがって、全組み合わせを網羅しなくても、2因子(ペアワイズ)の相互作用を網羅するだけで大半の不具合を発見できます。
                    </p>

                    <h4 id="カバレッジ基準-1">カバレッジ基準</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>カバレッジ基準</th>
                                    <th>説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><strong>全組み合わせカバレッジ(All-combinations coverage)</strong></td>
                                    <td>全パラメータのすべての組み合わせを網羅する。テストケース数が爆発するため小規模・高リスク領域に限定される</td>
                                </tr>
                                <tr className="even">
                                    <td><strong>各チョイスカバレッジ(Each choice coverage / 1-wise)</strong></td>
                                    <td>すべてのパラメータの各値が、少なくとも1つのテストケースで出現することを保証する</td>
                                </tr>
                                <tr className="odd">
                                    <td><strong>ペアワイズカバレッジ(Pairwise coverage / 2-wise)</strong></td>
                                    <td>任意の2つのパラメータの値のすべての組み合わせが、少なくとも1つのテストケースで出現することを保証する</td>
                                </tr>
                                <tr className="even">
                                    <td><strong>ベースチョイスカバレッジ(Base choice coverage)</strong></td>
                                    <td>「最も一般的・代表的な値の組み合わせ(ベースチョイス)」を1つ定義し、他のパラメータの値を1つずつ変化させたテストケースを網羅する</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_BASE_CHOICE} />
                    </div>

                    <h4 id="具体例ペアワイズカバレッジ">具体例(ペアワイズカバレッジ)</h4>
                    <p>
                        3つのパラメータ「OS(Windows/Mac/Linux)」「ブラウザ(Chrome/Firefox/Safari)」「言語(日本語/英語)」を全組み合わせでテストすると
                        <code>3 × 3 × 2 = 18</code>
                        パターンになりますが、ペアワイズ法を使えばそれぞれのペア(OS×ブラウザ、OS×言語、ブラウザ×言語)をすべて1回以上カバーする<strong>わずか数パターン</strong>まで削減できます。パラメータの値が多い場合は、先に同値分割で値の数自体を絞り込み、分類ツリーやフィーチャーモデルで整理してから組み合わせを生成すると効率的です。
                    </p>

                    <div className="callout callout-practice">
                        <div className="callout-head">
                            <span className="callout-icon">💡</span><span className="callout-title">ベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    パラメータ数が多い場合は、専用ツールでペアワイズの組み合わせを自動生成する(手作業での最小集合の算出は一般に困難)。
                                </li>
                                <li>
                                    「無効な組み合わせ」(例: OSがiOSなのにブラウザがInternet Explorer)は制約条件として除外し、実行不可能な組み合わせを生成しないようにする。
                                </li>
                                <li>
                                    リスクが非常に高い機能には、ペアワイズではなく<strong>全組み合わせ</strong>、あるいは3パラメータ以上の相互作用も見るn-wiseテストを検討する。
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr />

                    {/* 2.3 ランダムテスト */}
                    <h3 id="23-313-ランダムテストrandom-testing-k2-理解">
                        2.3 3.1.3 ランダムテスト(Random Testing) <code>K2: 理解</code>
                    </h3>

                    <h4 id="定義-2">定義</h4>
                    <p>
                        ランダムテストは、<strong>指定された確率分布に基づき、入力ドメインからテストデータをランダムに選択する</strong>技法です。ガイド付き(guided)とガイドなし(unguided)の2種類があります。
                    </p>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>種類</th>
                                    <th>説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>ガイドなしランダムテスト</td>
                                    <td>確率分布はプロセス全体を通じて固定(一様分布など)</td>
                                </tr>
                                <tr className="even">
                                    <td>ガイド付きランダムテスト(例: 適応的ランダムテスト)</td>
                                    <td>過去に選択した値に基づいて分布を調整し、ドメイン全体をより効果的にカバーしようとする</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 id="利点と限界">利点と限界</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>利点</th>
                                    <th>限界</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>ドメイン知識が少なくても実施できる</td>
                                    <td>データの意味(セマンティクス)を考慮しないため、意味に関連する欠陥を見逃す可能性がある</td>
                                </tr>
                                <tr className="even">
                                    <td>大量のテストデータが必要な場合にコスト効率が良い</td>
                                    <td>冗長なテストが生成されやすい</td>
                                </tr>
                                <tr className="odd">
                                    <td>テスト対象の信頼性を確率論的に把握できる</td>
                                    <td>自動テストオラクルへの依存度が高い</td>
                                </tr>
                                <tr className="even">
                                    <td>人手によるテストで生じがちな「思い込みによる見落とし」を回避できる</td>
                                    <td>出力自体がランダムなため、テスト結果の一貫性が損なわれることがある</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        ランダムテストには決まったカバレッジ基準がないため、終了基準は「実行したテスト数」や「テスト時間」など、完了度合いを示す代替指標に頼らざるを得ません。近年の実証研究では、条件が整えば他のデータベースドテスト技法よりも効果的・効率的な場合があることも分かってきています。<strong>ファジング</strong>はこのランダムテストに関連する手法の一つです。一方、<strong>カオスエンジニアリング</strong>はランダムテストの応用形ではなく、本番環境やそれに近い環境へ制御された障害(サーバー停止・レイテンシ注入など)を意図的に注入し、システムの回復性(レジリエンス)を検証する別のテスト手法です。
                    </p>

                    <div className="callout callout-practice">
                        <div className="callout-head">
                            <span className="callout-icon">💡</span><span className="callout-title">ベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    妥当性確認(validation)目的では実際の使われ方に基づく分布(運用プロファイル)を、検証(verification)目的では使用状況に偏らない分布を選ぶ。
                                </li>
                                <li>
                                    自動化された結果比較(自動テストオラクル)を用意できない場合、ランダムテストの効果は大きく制限されるため、事前にオラクルの確保を検討する。
                                </li>
                                <li>
                                    探索的テストや他の系統的技法と組み合わせることで、「見落としがちな領域」を補完する位置づけで使うと効果的。
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr />
                </main>
            </div>
        </div>
    );
}
