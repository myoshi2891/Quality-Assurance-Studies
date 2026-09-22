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

export const DIAGRAM_CRUD_APPROACH = `${MERMAID_CONFIG}
flowchart TD
    A["CRUDマトリクスの作成<br/>(機能 × エンティティ)"] --> B["網羅性テスト<br/>(Completeness Testing / 静的テスト)"]
    A --> C["一貫性テスト<br/>(Consistency Testing / 動的テスト)"]
    B --> B1["各エンティティについて<br/>C・R・U・Dの全操作が<br/>実装されているかを確認"]
    C --> C1["エンティティのライフサイクル全体を<br/>通して機能同士の連携を実行し<br/>整合性を確認"]
    C --> C2["異常系も含める<br/>(例: 未作成のデータをRead/Update/Deleteしようとする)"]

    classDef staticFill fill:#dbeafe,stroke:#2563eb,color:#1e3a5f
    classDef dynamicFill fill:#dcfce7,stroke:#16a34a,color:#14532d
    class B,B1 staticFill
    class C,C1,C2 dynamicFill`;

export const DIAGRAM_STATE_ORDER = `${MERMAID_CONFIG}
stateDiagram-v2
    direction LR
    [*] --> 下書き
    下書き --> 提出済み : 注文確定
    提出済み --> 審査中 : 審査開始
    審査中 --> 差し戻し中 : 不備あり
    差し戻し中 --> 審査中 : 再提出
    審査中 --> 承認済み : 承認
    審査中 --> 却下 : 却下
    承認済み --> 出荷済み : 出荷
    出荷済み --> 完了 : 受領確認
    却下 --> [*]
    完了 --> [*]`;

export const DIAGRAM_SCENARIO_LOGIN = `${MERMAID_CONFIG}
flowchart TD
    START(["開始: ログイン画面表示"]) --> INPUT["ID・パスワードを入力"]
    INPUT --> CHECK{"認証結果は?"}
    CHECK -->|"メインシナリオ<br/>(ハッピーパス)"| SUCCESS["ホーム画面へ遷移"]
    CHECK -->|"拡張シナリオ<br/>パスワード忘れ"| RESET["パスワード再設定フローへ"]
    RESET --> RETRY["再設定後に再ログイン"]
    RETRY --> CHECK
    CHECK -->|"例外シナリオ<br/>連続失敗でロック"| LOCK["アカウントロック画面を表示"]
    SUCCESS --> ENDNODE(["終了"])
    LOCK --> ENDNODE

    classDef mainFill fill:#dcfce7,stroke:#16a34a,color:#14532d
    classDef altFill fill:#dbeafe,stroke:#2563eb,color:#1e3a5f
    classDef excFill fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
    class SUCCESS mainFill
    class RESET,RETRY altFill
    class LOCK excFill`;

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

                    {/* Section 3: 3.2 ビヘイビアベーステスト技法 */}
                    <h2 id="3-32-ビヘイビアベーステスト技法behavior-based-test-techniques">
                        3. 3.2 ビヘイビアベーステスト技法(Behavior-Based Test Techniques)
                    </h2>
                    <p>
                        ビヘイビアベーステスト技法は、テスト対象の<strong>動的(状態依存的)な振る舞いの仕様</strong>からテストケースを導出する技法群です。Foundation Levelで学んだ状態遷移テストをさらに深掘りするとともに、CRUDテストやシナリオベーステストといった実務で極めて有用な技法を学びます。
                    </p>

                    {/* 3.1 CRUDテスト */}
                    <h3 id="31-321-crudテストcrud-testing-k2-理解">
                        3.1 3.2.1 CRUDテスト(CRUD Testing) <code>K2: 理解</code>
                    </h3>

                    <h4 id="定義-3">定義</h4>
                    <p>
                        CRUDテストは、テスト対象が処理する<strong>データエンティティのライフサイクル</strong>を検証する技法です。Create(作成)、Read(参照)、Update(更新)、Delete(削除)の4つの基本操作が正しく機能するかを評価します。
                    </p>

                    <h4 id="なぜ必要か-2">なぜ必要か</h4>
                    <p>
                        多くの業務システムは「会員」「注文」「商品」のようなエンティティを中心に構築されています。機能単体では正しく動いても、ライフサイクルの順序(例: 削除された会員へのメール送信、注文確定後の在庫未更新など)に不整合が生じる欠陥は後を絶ちません。CRUDテストはこうしたライフサイクルの不整合や欠落を網羅的に暴くために不可欠です。
                    </p>

                    <h4 id="crudマトリクスの作成">CRUDマトリクスの作成</h4>
                    <p>
                        行に機能、列にエンティティを配置し、各機能がどのエンティティに対してどの操作を行うかを整理した表(CRUDマトリクス)を作成します。
                    </p>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>機能</th>
                                    <th>会員</th>
                                    <th>注文</th>
                                    <th>商品</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>会員登録</td>
                                    <td><strong>C</strong></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className="even">
                                    <td>会員情報照会</td>
                                    <td><strong>R</strong></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className="odd">
                                    <td>会員情報変更</td>
                                    <td><strong>U</strong></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className="even">
                                    <td>会員退会</td>
                                    <td><strong>D</strong></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className="odd">
                                    <td>注文作成</td>
                                    <td>R</td>
                                    <td><strong>C</strong></td>
                                    <td>R</td>
                                </tr>
                                <tr className="even">
                                    <td>注文照会</td>
                                    <td></td>
                                    <td><strong>R</strong></td>
                                    <td></td>
                                </tr>
                                <tr className="odd">
                                    <td>注文キャンセル</td>
                                    <td></td>
                                    <td><strong>U</strong></td>
                                    <td></td>
                                </tr>
                                <tr className="even">
                                    <td>商品登録</td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>C</strong></td>
                                </tr>
                                <tr className="odd">
                                    <td>在庫更新</td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>U</strong></td>
                                </tr>
                                <tr className="even">
                                    <td>商品削除</td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>D</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout callout-note">
                        <div className="callout-head">
                            <span className="callout-icon">📝</span><span className="callout-title">注記</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                特に<strong>Read操作</strong>は、C・U・D操作に暗黙的に付随することが多いため(例:注文作成時に商品情報をReadする)、見落としがちです。マトリクス作成時は必ず明示的に確認しましょう。
                            </p>
                        </div>
                    </div>

                    <h4 id="網羅性テストと一貫性テスト">網羅性テストと一貫性テスト</h4>
                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_CRUD_APPROACH} />
                    </div>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>テストの種類</th>
                                    <th>分類</th>
                                    <th>目的</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><strong>網羅性テスト</strong>(Completeness testing)</td>
                                    <td>静的テスト</td>
                                    <td>
                                        すべてのエンティティに対してC・R・U・Dの全操作が実装されているか(ライフサイクル全体が実装されているか)を確認。操作の欠落は要調査の異常
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td><strong>一貫性テスト</strong>(Consistency testing)</td>
                                    <td>動的テスト</td>
                                    <td>
                                        複数機能を組み合わせて実際にエンティティのライフサイクルを通し、機能間の連携の整合性を検証。「未作成のデータを参照する」などの異常系も含める
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        CRUDカバレッジは、CRUDマトリクス上の「エンティティ×C/R/U/D」の組み合わせ(カバレッジ項目)のうち、テストスイートで<strong>少なくとも1回実行して網羅したユニークな項目数</strong>を、マトリクス全体のユニークな項目数で割ることで測定します(同じRead操作などを複数回実行しても重複してカウントしません)。より厳密には「更新(U)の後に、想定されるすべての参照(R)が実行されているか」のように、特定の操作の組み合わせをカバレッジ項目とすることも可能です。CRUDテストは主にシステムレベルで用いられ、ライフサイクルの網羅性・操作の一貫性・データ整合性違反といった欠陥の検出に強みがあります。
                    </p>

                    <div className="callout callout-practice">
                        <div className="callout-head">
                            <span className="callout-icon">💡</span><span className="callout-title">ベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    CRUDマトリクスは、機能一覧・エンティティ一覧が確定した段階で早期に作成し、<strong>実装前のレビュー資料</strong>として使うと、そもそもの設計漏れ(Read操作の実装忘れなど)を上流で防げる。
                                </li>
                                <li>
                                    一貫性テストでは、正常なライフサイクル順序だけでなく、<strong>順序違反</strong>(例: 削除済みエンティティへのUpdate)を意図的にテストケース化する。
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr />

                    {/* 3.2 状態遷移テスト */}
                    <h3 id="32-322-状態遷移テストstate-transition-testing-k3-適用">
                        3.2 3.2.2 状態遷移テスト(State Transition Testing) <code>K3: 適用</code>
                    </h3>

                    <h4 id="定義-4">定義</h4>
                    <p>
                        多くの複雑なシステムは「ステートフル」、つまり現在の状態によってイベントへの反応が異なります。状態遷移テストは、システムが取りうる<strong>状態</strong>、状態間を移動させる<strong>遷移(イベント＋ガード条件)</strong>、および遷移時に発生する<strong>アクション</strong>をモデル化してテストする技法です。
                    </p>

                    <h4 id="具体例注文の状態遷移モデル">具体例:注文の状態遷移モデル</h4>
                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_STATE_ORDER} />
                    </div>

                    <h4 id="追加のカバレッジ基準">追加のカバレッジ基準</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>カバレッジ基準</th>
                                    <th>説明</th>
                                    <th>適用場面</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><strong>0-switchカバレッジ(全遷移カバレッジ)</strong></td>
                                    <td>すべての単一遷移(長さ1の遷移シーケンス)を少なくとも1回実行する</td>
                                    <td>標準的な品質レベルのシステムテスト</td>
                                </tr>
                                <tr className="even">
                                    <td><strong>1-switchカバレッジ</strong></td>
                                    <td>すべての連続する2つの遷移シーケンス(長さ2)を少なくとも1回実行する</td>
                                    <td>状態依存性が強い中リスク機能</td>
                                </tr>
                                <tr className="odd">
                                    <td><strong>N-switchカバレッジ</strong></td>
                                    <td>すべての連続するN+1個の遷移シーケンス(長さN+1)を実行する</td>
                                    <td>高信頼性が要求されるミッションクリティカル領域</td>
                                </tr>
                                <tr className="even">
                                    <td><strong>ラウンドトリップカバレッジ</strong></td>
                                    <td>ある状態から出発し、1つ以上の遷移を経て再び元の状態に戻るループ遷移シーケンスをすべて実行する</td>
                                    <td>業務プロセスやセッション管理などの循環型ライフサイクル</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        状態遷移モデルにはガード条件やアクションを含めることができ、拡張有限状態機械・Harelステートチャート・UMLステートマシン図などが用いられます。単一のテストケースで複数のカバレッジ項目を同時に達成できる場合があり、テストスイートの最小化を図ることもテストアナリストの腕の見せ所です。無効な遷移(ある状態では発生してはならないイベント)をテストする「無効遷移テスト」も堅牢性検証として極めて重要です。
                    </p>

                    <div className="callout callout-practice">
                        <div className="callout-head">
                            <span className="callout-icon">💡</span><span className="callout-title">ベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    状態遷移表(State Table)を作成すると、状態遷移図では見落としがちな「未定義の遷移・無効な遷移」を網羅的に洗い出すことができる。
                                </li>
                                <li>
                                    1-switchカバレッジは0-switchに比べてテストケース数が跳ね上がるため、リスクベースで「どの状態の組み合わせが重要か」を絞り込んで適用する。
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="compare-grid">
                        <div className="compare-item compare-good">
                            <h4><span className="compare-icon">✅</span>良い例</h4>
                            <div className="compare-text">
                                有効な遷移だけでなく、「審査中の注文を再度提出しようとする」などの無効遷移テストを意図的に含める
                            </div>
                        </div>
                        <div className="compare-item compare-bad">
                            <h4><span className="compare-icon">❌</span>悪い例</h4>
                            <div className="compare-text">
                                ハッピーパス(正常な完了フロー)の遷移のみをテストし、異常なイベントや順序不正時のエラーハンドリングを放置する
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* 3.3 シナリオベーステスト */}
                    <h3 id="33-323-シナリオベーステストscenario-based-testing-k3-適用">
                        3.3 3.2.3 シナリオベーステスト(Scenario-Based Testing) <code>K3: 適用</code>
                    </h3>

                    <h4 id="定義-5">定義</h4>
                    <p>
                        シナリオベーステストは、<strong>現実的なシナリオ(利用者が実際にたどるであろう一連の操作の流れ)</strong>でテスト対象の振る舞いを評価する技法です。ユーザーリサーチ、ユーザーストーリー、ユースケース、業務フロー図、アクティビティ図などをテストベースとしてモデルを構築します。
                    </p>

                    <h4 id="アクティビティ図とユースケース">アクティビティ図とユースケース</h4>
                    <ul>
                        <li>
                            <strong>アクティビティ図</strong>: システム内のワークフローを表現する図。開始/終了ノード、アクション、遷移、判断ノード、マージノード、フォークノード、ジョインノード、スイムレーンなどで構成され、フローチャートを拡張して並行処理も表現できる。
                        </li>
                        <li>
                            <strong>ユースケース</strong>: ユーザーとシステム(またはシステム同士)の相互作用をテキストまたは図で記述したもの。以下の3種類のシナリオに分類される。
                        </li>
                    </ul>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>シナリオ種別</th>
                                    <th>説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><strong>メインシナリオ(ハッピーパス)</strong></td>
                                    <td>
                                        ユーザー視点で目標を達成する典型的・期待通りの一連の行動。1つのユースケースにつき<strong>必ず1つだけ</strong>存在する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td><strong>拡張シナリオ(代替シナリオ)</strong></td>
                                    <td>
                                        メインシナリオとは異なる経路をたどるが、最終的には同じ目標を達成する一連の行動
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td><strong>例外シナリオ</strong></td>
                                    <td>
                                        予期しない事象(異常な使い方や無効な入力など)により、目標を達成できない一連の行動
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 id="具体例ログイン機能のシナリオモデル">具体例:ログイン機能のシナリオモデル</h4>
                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_SCENARIO_LOGIN} />
                    </div>

                    <h4 id="カバレッジ">カバレッジ</h4>
                    <p>
                        ループを含まないシナリオモデルであれば、それぞれのシナリオを個別のテストケースでカバーできます(すべてのシナリオ=パスをテストスイートで網羅可能)。しかし上図の「再設定後に再ログイン」のようにループがあると、理論上パスの数が無限になり得ます。この場合は<strong>単純ループカバレッジ(simple loop coverage)</strong>を適用し、以下の4パターンをテストします。
                    </p>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>パターン</th>
                                    <th>説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>0回(スキップ)</td>
                                    <td>ループを一度も実行しない</td>
                                </tr>
                                <tr className="even">
                                    <td>1回</td>
                                    <td>ループをちょうど1回実行する</td>
                                </tr>
                                <tr className="odd">
                                    <td>複数回(典型的な回数)</td>
                                    <td>ループを2回以上、一般的な回数だけ実行する</td>
                                </tr>
                                <tr className="even">
                                    <td>最大回数</td>
                                    <td>可能であれば、ループの上限回数まで実行する</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        シナリオベースカバレッジは「実行したシナリオ数 ÷ 識別された全シナリオ数」で測定します。1つのシナリオに対して、さらにEP/BVAのような追加カバレッジが必要になる場合、1シナリオを複数のテストケースに分けて実装することもあります。
                    </p>
                    <p>
                        主にシステムテストや受け入れテストでエンドツーエンドテストとして使われますが、コンポーネント統合テスト(インターフェースの相互作用プロトコルに基づく)やコンポーネントテスト(ステートフルなオブジェクト指向クラスのメソッド呼び出し)、さらには非機能テスト(信頼性・柔軟性・互換性テストにおける運用プロファイルの構成要素として)にも応用できます。
                    </p>

                    <div className="callout callout-practice">
                        <div className="callout-head">
                            <span className="callout-icon">💡</span><span className="callout-title">ベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    シナリオはリスクベースで優先順位付けする(ビジネス上重要な、または利用頻度の高いシナリオから着手する)。
                                </li>
                                <li>
                                    ループを含むシナリオでは、単純ループカバレッジの4パターン(0回・1回・複数回・最大回数)を意識的にテストケース化しないと、「2回目のリトライで状態が壊れる」といった欠陥を見逃しやすい。
                                </li>
                                <li>
                                    デシジョンカバレッジ(ホワイトボックス技法)やラウンドトリップカバレッジと組み合わせることで、業務プロセス内の分岐や周期的な処理のリスクをより厳密にカバーできる。
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
