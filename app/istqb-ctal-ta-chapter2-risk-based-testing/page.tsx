import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './istqb-ctal-ta-chapter2-risk-based-testing.css';

const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#ffffff",
    "primaryColor": "#eff6ff",
    "primaryBorderColor": "#2563eb",
    "primaryTextColor": "#1e293b",
    "lineColor": "#94a3b8",
    "mainBkg": "#eff6ff",
    "nodeBorder": "#2563eb",
    "secondaryColor": "#f1f5f9",
    "tertiaryColor": "#ffffff",
    "clusterBkg": "#f8fafc",
    "clusterBorder": "#cbd5e1",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "flowchart": {
    "curve": "basis",
    "htmlLabels": true,
    "useMaxWidth": false,
    "nodeSpacing": 60,
    "rankSpacing": 70,
    "subGraphTitleMargin": { "top": 12, "bottom": 18 }
  }
}}%%`;

export const DIAGRAM_CHAPTER_POSITION = `${MERMAID_CONFIG}
flowchart LR
    classDef current fill:#dbeafe,stroke:#2563eb,color:#1e3a8a,stroke-width:2px
    classDef normal fill:#f1f5f9,stroke:#94a3b8,color:#1e293b

    C1["第1章<br/>テストプロセスにおける<br/>TAの役務(225分)"]
    C2["第2章<br/>リスクベースドテストに<br/>おけるTAの役務(90分)<br/>【本ガイドの対象】"]
    C3["第3章<br/>テスト分析と<br/>テスト設計(615分)"]
    C4["第4章<br/>品質特性の<br/>テスト(60分)"]
    C5["第5章<br/>ソフトウェア<br/>欠陥予防(225分)"]

    C1 --> C2 --> C3 --> C4 --> C5

    class C1,C3,C4,C5 normal
    class C2 current`;

export const DIAGRAM_RBT_CYCLE = `${MERMAID_CONFIG}
flowchart LR
    classDef analysisNode fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
    classDef controlNode fill:#fee2e2,stroke:#b91c1c,color:#7f1d1d

    subgraph SG2["2.2 リスクコントロール Risk Control"]
        direction LR
        RM["リスク軽減<br/>Risk Mitigation"]
        RMo["リスクモニタリング<br/>Risk Monitoring"]
        RM --> RMo
    end

    subgraph SG1["2.1 リスク分析 Risk Analysis"]
        direction LR
        RI["リスク識別<br/>Risk Identification"]
        RA["リスクアセスメント<br/>Risk Assessment"]
        RI --> RA
    end

    RA -- "軽減策を提案" --> RM
    RMo -- "リスクレジスタ更新/軽減策を再調整" --> RI

    class RI,RA analysisNode
    class RM,RMo controlNode`;

export const DIAGRAM_RISK_FACTORS = `${MERMAID_CONFIG}
flowchart TD
    A1["機能の使用頻度・重要度"] --> F{"リスクレベルを判定<br/>発生可能性 x 影響度"}
    A2["ビジネス目標への影響度"] --> F
    A3["金銭的・環境的・信用面の損害"] --> F
    A4["テストベースの品質"] --> F
    A5["法的・安全上の要求"] --> F

    F -- "高リスク" --> G1["厳密なテスト<br/>複数テストレベル/高い独立性/網羅的な技法"]
    F -- "中リスク" --> G2["標準的なテスト<br/>標準的な技法とカバレッジ"]
    F -- "低リスク" --> G3["軽量なテスト<br/>探索的テスト/経験ベーステスト"]

    classDef high fill:#fee2e2,stroke:#b91c1c,color:#7f1d1d
    classDef mid fill:#fef3c7,stroke:#b45309,color:#78350f
    classDef low fill:#dcfce7,stroke:#15803d,color:#14532d

    class G1 high
    class G2 mid
    class G3 low`;

export const DIAGRAM_REGRESSION_SELECTION = `${MERMAID_CONFIG}
flowchart TD
    Start(["変更が発生した"]) --> Q1{"テスト実行方式は？"}
    Q1 -- "自動実行" --> IA["インパクト分析<br/>構成管理ツールで追跡"]
    Q1 -- "手動実行/混在" --> Combo["状況に応じて技法を選択・組み合わせ"]

    Combo --> RB["リスクベース選択"]
    Combo --> HB["履歴ベーステスト"]
    Combo --> CB["カバレッジベーステスト"]
    Combo --> RTM["要求トレーサビリティ<br/>マトリクス"]
    Combo --> OP["運用プロファイル<br/>ベーステスト"]

    IA --> Suite["回帰テストスイートの確定"]
    RB --> Suite
    HB --> Suite
    CB --> Suite
    RTM --> Suite
    OP --> Suite

    Suite --> Exec["テスト実行"]
    Exec --> Eval["有効性を分析"]
    Eval -.->|"有効な技法は継続/非有効な技法は入替"| Combo`;

export const DIAGRAM_IMPACT_ANALYSIS_STEPS = `${MERMAID_CONFIG}
flowchart TD
    S1["1.変更要求を受領<br/>クーポン同時使用数を1から2に変更"] --> S2["2.変更対象の構成管理項目を特定<br/>DiscountCalculatorモジュール/決定テーブル"]
    S2 --> S3["3.影響を受ける機能・コンポーネントを分析"]
    S3 --> S4["4.トレーサビリティマトリクスで関連テストを抽出"]
    S4 --> S5["5.リスクレジスタと照合し優先度を再評価"]
    S5 --> S6["6.回帰テストの対象範囲を確定"]
    S6 --> S7["7.回帰テストを実行"]
    S7 --> S8["8.結果を分析し選定技法の有効性を評価"]
    S8 -.->|"次回サイクルへフィードバック"| S2`;

export default function CtalTaChapter2Page() {
    return (
        <div className="ctal-ta-ch2-page">
            <NavBar />

            <main className="main">
                <div className="main-inner">
                    <header className="hero">
                        <p className="eyebrow">
                            ISTQB® Certified Tester Advanced Level Test Analyst（CTAL-TA）v4.0
                        </p>
                        <h1>第2章：リスクベースドテストにおけるテストアナリストの役割</h1>
                        <p className="hero-desc">
                            初学者〜中級QAエンジニア向け。図解・具体例・ベストプラクティス付きで、ステップバイステップに解説します。
                        </p>
                        <div className="hero-pills">
                            <span className="pill">⏱ 学習時間 90分 / 全1215分</span>
                            <span className="pill">🎯 学習目標 2件（K2・K4）</span>
                            <span className="pill">🖼 Mermaid図解 5点</span>
                            <span className="pill">🔗 参考文献 12件</span>
                            <span className="pill">🚫 ASCIIアート不使用</span>
                        </div>
                        <div className="meta-grid">
                            <div className="meta-item">
                                <span className="label">対象範囲</span>
                                <span className="value">
                                    Chapter 2 “The Tasks of the Test Analyst in Risk-Based
                                    Testing”（公式シラバス学習時間目安：<strong>90分</strong> /
                                    全5章1215分中）
                                </span>
                            </div>
                            <div className="meta-item">
                                <span className="label">前提資格</span>
                                <span className="value">
                                    ISTQB® Foundation
                                    Level（CTFL）認定書の取得が受験の必須条件（バージョンは問わず、CTFL
                                    v4.0が推奨・旧バージョンも有効。該当性はISTQB® Member
                                    BoardまたはExam
                                    Providerに要確認）。ソフトウェア開発/テストの実務経験（目安6か月）や認定トレーニングコースの受講は、証明書取得の代替にはならないが強く推奨される。
                                </span>
                            </div>
                            <div className="meta-item">
                                <span className="label">想定読者</span>
                                <span className="value">
                                    ソフトウェアテスト初学者〜中級のQAエンジニア（CTFLの基礎用語は既知として解説します）
                                </span>
                            </div>
                            <div className="meta-item">
                                <span className="label">本ガイドの立ち位置</span>
                                <span className="value">
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ISTQB®公式CTAL-TA認定ページ
                                    </a>
                                    {' '}と{' '}
                                    <a
                                        href="https://istqb.org/wp-content/uploads/sdm-uploads/ISTQB-CTAL-TA-Syllabus-v4.0-EN-4.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        公式シラバスv4.0 PDF
                                    </a>
                                    {' '}の内容を、初学者向けに図解・具体例・ベストプラクティスを加えて再構成した学習補助教材です。試験の正答は必ず公式シラバスを参照してください。
                                </span>
                            </div>
                        </div>
                    </header>

                    {/* ============ SECTION 1 ============ */}
                    <section id="sec1">
                        <h2>1. このガイドの使い方と第2章の全体像</h2>

                        <h3 id="sec1-1">1.1 CTAL-TA試験全体における第2章の位置づけ</h3>
                        <p>
                            CTAL-TA
                            v4.0のシラバスは、examinable（試験範囲）な章が5つあります。第2章の学習時間は90分で、第4章（60分）に次いで短い章ですが、<strong>「リスクに基づいてテストの濃淡をつける」という考え方は、第3章のテスト技法選択や第4章の品質特性テストなど、後続のすべての章の土台になる</strong>ため、分量以上に重要度の高い章です。
                        </p>

                        <div className="mermaid-card">
                            <div className="mermaid-wrap">
                                <Mermaid chart={DIAGRAM_CHAPTER_POSITION} />
                            </div>
                        </div>

                        <h4>この章と他の章のつながり</h4>
                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>章</th>
                                        <th>第2章との関係</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>第1章（テストプロセス）</td>
                                        <td>
                                            1.2.1のテスト分析で「プロダクトリスクをすでに評価済みであること」が入場基準になっており、第2章の内容を前提にしている
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>第3章（テスト分析・設計）</td>
                                        <td>
                                            3.5.1「リスクを緩和するテスト技法の選定」は第2章のリスクアセスメントの結果を直接使う
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>第4章（品質特性テスト）</td>
                                        <td>
                                            リスク軽減アクションとして「適切なテストタイプの適用」を選ぶ判断材料になる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>第5章（欠陥予防）</td>
                                        <td>
                                            回帰テストの有効性分析（5.3.1）は、第2章で選定した回帰テスト技法の改善サイクルと連動する
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 id="sec1-2">
                            1.2 学習目標（Learning Objectives）とコグニティブレベル（K-Level）
                        </h3>
                        <p>
                            CTAL-TAのシラバスでは、各学習項目に「どのレベルまで理解・応用できればよいか」を示す<strong>K-Level（認知レベル）</strong>が明記されています。K-Levelを意識することは、単なる暗記で終わらせず「どこまで深く学べばよいか」を判断する上で非常に重要です。
                        </p>

                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>レベル</th>
                                        <th>意味</th>
                                        <th>求められる行動の例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="center"><span className="klevel k1">K1</span>（記憶）</td>
                                        <td>用語の定義や基本事実を思い出すことができる</td>
                                        <td>用語集の定義と一致するものを選択する</td>
                                    </tr>
                                    <tr>
                                        <td className="center"><span className="klevel k2">K2</span>（理解）</td>
                                        <td>概念の理由や意味を説明・要約・比較できる</td>
                                        <td>「なぜTAがその活動に貢献するのか」を自分の言葉で説明できる</td>
                                    </tr>
                                    <tr>
                                        <td className="center"><span className="klevel k3">K3</span>（適用）</td>
                                        <td>手順や技法を具体的な状況に適用できる</td>
                                        <td>具体的な仕様に対してテスト設計技法を適用する（3章など）</td>
                                    </tr>
                                    <tr>
                                        <td className="center"><span className="klevel k4">K4</span>（分析）</td>
                                        <td>状況を分解し、根拠を持って最善の判断・選択ができる</td>
                                        <td>変更内容から影響範囲を分析し、回帰テストの範囲を決定する（2章のK4）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>第2章に含まれる学習目標は以下の2点のみです。</p>

                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>コード</th>
                                        <th>K-Level</th>
                                        <th>学習目標</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code>TA-2.1.1</code></td>
                                        <td className="center"><span className="klevel k2">K2</span></td>
                                        <td>
                                            テストアナリストがプロダクトリスク分析にどう貢献するかを要約できる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code>TA-2.2.1</code></td>
                                        <td className="center"><span className="klevel k4">K4</span></td>
                                        <td>
                                            変更の影響を分析し、回帰テストの対象範囲を決定できる
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="tip">
                            💡 <strong>ポイント</strong>：TA-2.2.1がK4であることから、本試験ではおそらく「あるシステム変更のシナリオが与えられ、どの回帰テスト技法をどう組み合わせるべきかを判断させる」応用問題が出題されます。単なる用語暗記では対応できないため、本ガイドでは<a href="#sec5">5章の実践演習</a>でこの分析プロセスを丁寧に扱います。
                        </div>

                        <h3 id="sec1-3">1.3 覚えるべきキーワード（K1）</h3>
                        <p>
                            シラバスの各章冒頭にはキーワード一覧が示され、これらは学習目標に明記がなくても<strong>K1（用語の正確な名称と定義の記憶）</strong>として試験範囲に含まれます。
                        </p>

                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>キーワード</th>
                                        <th>定義（要約）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>product risk（プロダクトリスク）</strong></td>
                                        <td>
                                            テスト対象そのものに直接関係するリスク（例：機能が仕様通りに動かない）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>risk（リスク）</strong></td>
                                        <td>将来ネガティブな結果を招く可能性のある要因</td>
                                    </tr>
                                    <tr>
                                        <td><strong>risk analysis（リスク分析）</strong></td>
                                        <td>
                                            識別したリスクの発生可能性と影響度を見積もり、リスクレベルを判定するプロセス。リスク識別とリスクアセスメントから成る
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>risk identification（リスク識別）</strong></td>
                                        <td>どのようなリスクが存在するかを洗い出すプロセス</td>
                                    </tr>
                                    <tr>
                                        <td><strong>risk assessment（リスクアセスメント）</strong></td>
                                        <td>
                                            識別されたリスクに対して、発生可能性と影響度を見積もり、リスクレベルを判定するプロセス
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>risk control（リスクコントロール）</strong></td>
                                        <td>
                                            リスク軽減とリスクモニタリングから成る、リスクへの対応プロセス全体
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>risk mitigation（リスク軽減）</strong></td>
                                        <td>
                                            リスクを許容水準まで下げる、または維持するための対策を決定・実施するプロセス
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>risk monitoring（リスクモニタリング）</strong></td>
                                        <td>
                                            リスクとリスクレベルは時間とともに変化するため、継続的にリスク状況を監視し直すプロセス
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>risk-based testing（リスクベースドテスト）</strong></td>
                                        <td>
                                            プロダクトリスクのレベルに基づいてテスト活動の優先順位・濃淡を決め、プロジェクト初期段階からステークホルダーにリスク状況を伝えるテストアプローチ
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>regression testing（回帰テスト）</strong></td>
                                        <td>
                                            変更（不具合修正を含む）によって、既存の正しく動いていた部分に悪影響が出ていないことを確認するテスト
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>impact analysis（インパクト分析）</strong></td>
                                        <td>
                                            ある変更によってシステムのどの部分が影響を受ける可能性があるかを分析し、回帰テストの対象範囲を最適化するための分析活動
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ============ SECTION 2 ============ */}
                    <section id="sec2">
                        <h2>2. イントロダクション：リスクベースドテストとは何か</h2>

                        <h3>2.1 定義と基本的な考え方</h3>
                        <p>
                            <strong>リスクベースドテスト（Risk-Based Testing）</strong>
                            とは、「テスト対象のすべての部分を均等にテストする」のではなく、<strong>プロダクトリスクのレベルが高い部分により多くのテスト労力を投じる</strong>というテストアプローチです。CTFL（Foundation Level）のSection 5.2で基礎が説明されており、CTAL-TAの第2章はその発展として「テストアナリスト（TA）が具体的に何をするか」にフォーカスしています。
                        </p>

                        <p><strong>なぜこの考え方が必要なのか（理由）</strong></p>
                        <ul>
                            <li>
                                現実のプロジェクトでは、時間・予算・人員は常に有限であり、「全機能を100%網羅的にテストする」ことは不可能に近い
                            </li>
                            <li>
                                一方で、機能ごとに「壊れたときの被害の大きさ」と「壊れる可能性の高さ」は均一ではない
                            </li>
                            <li>
                                そこで、限られたリソースを<strong>最もリスクの高い部分に優先的に配分</strong>することで、テストの投資対効果（ROI）を最大化する
                            </li>
                        </ul>

                        <h3>2.2 テストマネージャとテストアナリストの役割分担</h3>
                        <p>
                            リスクベースドテストという「アプローチを採用するかどうか」自体は<strong>テストマネージャ（TM）</strong>が決定します。テストアナリスト（TA）は、その方針のもとで<strong>実際にリスク分析・リスクコントロールの実務を遂行する</strong>という役割分担です。より体系的な内容は<a
                                href="https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ISTQB® Advanced Level Test Management（CTAL-TM）v3.0
                            </a>で扱われます。
                        </p>

                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>役割</th>
                                        <th>主な責務</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>テストマネージャ（TM）</td>
                                        <td>
                                            リスクベースドテストを採用するかの意思決定、全体のリスク管理プロセスの設計
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>テストアナリスト（TA）</td>
                                        <td>
                                            リスク識別・リスクアセスメントへの実務的な参加、リスクレジスタの更新、回帰テスト範囲の分析・決定
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>
                            2.3 リスクベースドテストの3本柱：分析・コントロール・モニタリングのサイクル
                        </h3>
                        <p>
                            リスクベースドテストは、一度リスクを洗い出したら終わりではありません。<strong>リスクとリスクレベルは時間とともに変化する</strong>ため、継続的なモニタリングが不可欠です。この関係を図解すると次のようになります。
                        </p>

                        <div className="mermaid-card">
                            <div className="mermaid-wrap">
                                <Mermaid chart={DIAGRAM_RBT_CYCLE} />
                            </div>
                        </div>

                        <p>
                            <strong>モニタリングの頻度</strong>は開発ライフサイクルによって異なります。
                        </p>
                        <ul>
                            <li>
                                <strong>反復型（イテレーティブ）開発</strong>：チームが決めた頻度（多くの場合イテレーションごとに1回）
                            </li>
                            <li>
                                <strong>その他の開発モデル</strong>：プロダクトリスク管理の責任者（多くの場合テストマネージャ）が設定する頻度
                            </li>
                        </ul>
                        <p>
                            TAは、変更内容に基づいてリスクレジスタを更新し、必要であればリスク軽減アクションを調整するという形でこのサイクルに貢献します。
                        </p>

                        <h3>2.4 本ガイドで使う統一シナリオ</h3>
                        <p>
                            抽象的な説明だけでは定着しにくいため、本ガイドでは以降すべてのセクションで<strong>同じ具体例（ECサイトの「クーポン割引計算」機能）</strong>を使って解説します。
                        </p>

                        <div className="scenario">
                            <strong>シナリオ</strong>：あなたはECサイトのカート・決済機能を担当するテストアナリストです。開発中の新機能は「複数のクーポンコードを同時に適用できるようにする、割引金額の自動計算ロジック」です。この機能は、商品の数量・会員ランク・クーポンの組み合わせによって最終価格が変わるため、計算ミスが起きると売上への直接的な損害や、顧客からの信頼低下につながります。
                        </div>
                    </section>

                    {/* ============ SECTION 3 ============ */}
                    <section id="sec3">
                        <h2 id="sec3-h">
                            3. 2.1 リスク分析（Risk Analysis）<span className="klevel k2">K2</span>
                        </h2>

                        <div className="lo-box">
                            <strong>学習目標</strong>：TA-2.1.1 (K2)
                            テストアナリストのプロダクトリスク分析への貢献を要約できる
                        </div>

                        <p>
                            リスク分析は「<strong>リスク識別</strong>」と「<strong>リスクアセスメント</strong>」の2つの活動から構成されます。ここでのポイントは、<strong>リスク分析の「意思決定」自体はTAの役割ではなく、TAは自分の持つ深い技術知識・経験を武器に、他のステークホルダーと協働してリスク分析に「貢献」する</strong>という立ち位置です。
                        </p>

                        <h3 id="sec3-1">3.1 リスク識別（Risk Identification）</h3>

                        <h4>定義</h4>
                        <p>
                            システムやプロジェクトにどのようなプロダクトリスクが存在するかを洗い出すプロセスです。
                        </p>

                        <h4>なぜTAが重要な貢献者になれるのか（理由）</h4>
                        <p>
                            TAは通常、システムに関する深い知識に加えて、「過去にどこでよく問題が起きるか」「その問題がどんな影響を及ぼすか」についての経験と直感を持っています。これは机上の仕様書だけでは得られない、実務経験に裏打ちされた情報であり、プロダクトリスク分析において非常に価値の高いインプットになります。
                        </p>

                        <h4>TAが参加する具体的な活動</h4>
                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>活動</th>
                                        <th>TAの貢献の仕方</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>レトロスペクティブ（振り返り会）</strong></td>
                                        <td>過去のイテレーションで発生した不具合傾向を共有する</td>
                                    </tr>
                                    <tr>
                                        <td><strong>リスクワークショップ</strong></td>
                                        <td>
                                            自分の経験・知識をもとに、想定されるリスクをその場で提案する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>ブレインストーミング</strong></td>
                                        <td>
                                            制約を設けずに「何が起こりうるか」を自由に発想して出し合う
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>チェックリストの作成</strong></td>
                                        <td>
                                            過去の欠陥パターンをチェックリスト化し、リスクの洗い出し漏れを防ぐ（詳細は第3章 3.4.2）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>ステークホルダーへのインタビュー</strong></td>
                                        <td>
                                            開発者・プロダクトオーナー・ビジネス側それぞれの視点から「最も重大だと考えるリスク」を聞き出す
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4>具体例（シナリオ適用）</h4>
                        <p>クーポン割引機能について、TAは以下のようにリスク識別に貢献します。</p>
                        <ul>
                            <li>
                                過去のレトロスペクティブから「割引ロジックの改修は過去にも計算誤りのバグが多かった」という傾向を共有する
                            </li>
                            <li>
                                プロダクトオーナーへのインタビューで「値引きしすぎて赤字になること」と「割引が適用されず顧客からクレームが来ること」の両方が重大リスクと判明する
                            </li>
                            <li>
                                開発者へのインタビューで「クーポンの組み合わせパターンが将来的に増える設計になっており、テストの組み合わせ爆発が起きやすい」という技術的リスクが判明する
                            </li>
                        </ul>

                        <div className="callout-practice">
                            <div className="practice-label">✅ ベストプラクティス</div>
                            <ul>
                                <li>
                                    <span className="tag-good">✅ 受け身にならず、自ら発言する</span>：TAは「リスクを教えてもらう側」ではなく「リスクを提案する側」として積極的にワークショップに参加する
                                </li>
                                <li>
                                    <span className="tag-good">✅ 定量的な過去データと定性的な経験の両方を使う</span>：過去の欠陥密度データだけでなく、「あの機能はいつも危ない」という現場感覚も貴重な情報として提示する
                                </li>
                                <li>
                                    <span className="tag-good">✅ 多様なステークホルダーの視点を集める</span>：ビジネス側・開発側・運用側など、視点が異なる人にインタビューすることで見落としを減らす
                                </li>
                                <li>
                                    <span className="tag-bad">❌ 避けるべきこと</span>：一人のTAの主観だけでリスクを確定させてしまうこと。リスク識別は必ず複数のステークホルダーとの協働で行う
                                </li>
                            </ul>
                        </div>

                        <h3 id="sec3-2">3.2 リスクアセスメント（Risk Assessment）</h3>

                        <h4>定義</h4>
                        <p>
                            識別されたリスクについて、<strong>発生可能性（Likelihood）</strong>と<strong>影響度（Impact）</strong>を見積もり、総合的な<strong>リスクレベル</strong>を判定するプロセスです。TAは他のステークホルダーと共同でこの判定に貢献します。
                        </p>

                        <h4>リスクレベルを判定するための5つの評価要因</h4>
                        <p>
                            シラバスでは、リスクレベルを見積もる際に考慮すべき要因として次を挙げています。
                        </p>
                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>評価要因</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="center">1</td>
                                        <td><strong>機能の使用頻度・重要度</strong></td>
                                        <td>
                                            その機能がどれだけ頻繁に使われ、業務上どれだけ重要か
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="center">2</td>
                                        <td><strong>ビジネス目標への影響度</strong></td>
                                        <td>
                                            不具合が発生した場合、会社の目標達成にどれだけ悪影響を与えるか
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="center">3</td>
                                        <td><strong>金銭的・環境的・信用面の損害</strong></td>
                                        <td>
                                            不具合による直接的な金銭損失、環境影響、ブランドイメージの毀損
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="center">4</td>
                                        <td><strong>テストベース（仕様書等）の品質</strong></td>
                                        <td>
                                            仕様があいまい・不完全であるほど実装ミスの可能性が高まる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="center">5</td>
                                        <td><strong>法的・安全上の要求</strong></td>
                                        <td>法規制や安全基準への抵触リスク</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="tip">
                            上記に加えて、TAは<strong>ISO/IEC 25010の品質特性モデル</strong>などを用いて、リスクが「どの品質特性（機能適合性、セキュリティ、信頼性など）に影響するか」で分類することにも貢献します。分類しておくことで、後の第4章（品質特性テスト）でどのテストタイプを重点的に行うべきかの判断材料になります。
                        </div>

                        <h4>具体例：発生可能性 × 影響度によるリスクレベルの判定（シナリオ適用）</h4>
                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>リスクID</th>
                                        <th>リスクの内容</th>
                                        <th>発生可能性</th>
                                        <th>影響度</th>
                                        <th>リスクレベル</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>R-01</td>
                                        <td>クーポン併用時の割引額計算ミスによる過剰値引き</td>
                                        <td className="center">高</td>
                                        <td className="center">高</td>
                                        <td className="center risk-high">高</td>
                                    </tr>
                                    <tr>
                                        <td>R-02</td>
                                        <td>
                                            クーポン併用時に割引が正しく適用されず顧客がクレーム
                                        </td>
                                        <td className="center">中</td>
                                        <td className="center">中</td>
                                        <td className="center risk-mid">中</td>
                                    </tr>
                                    <tr>
                                        <td>R-03</td>
                                        <td>クーポン入力欄のUIラベルの表記ゆれ</td>
                                        <td className="center">低</td>
                                        <td className="center">低</td>
                                        <td className="center risk-low">低</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            このように、リスクを一覧化して優先順位を可視化することで、後述するテスト活動の濃淡（どこに厚く、どこに薄くテストを配分するか）の根拠が明確になります。
                        </p>

                        <h4>リスクレベルとテスト活動の対応関係</h4>
                        <div className="mermaid-card">
                            <div className="mermaid-wrap">
                                <Mermaid chart={DIAGRAM_RISK_FACTORS} />
                            </div>
                        </div>

                        <p>
                            リスクレベルが決まったら、TAは<strong>そのリスクを軽減する具体的なテスト活動</strong>を提案します。考慮すべき観点は以下の通りです。
                        </p>
                        <ul>
                            <li>
                                どの<strong>テストレベル</strong>（コンポーネント/統合/システム/受け入れ）で対応すべきか
                            </li>
                            <li>どの<strong>テストタイプ</strong>（機能/非機能）で対応すべきか</li>
                            <li>
                                どの<strong>テスト技法</strong>（第3章で扱うデータベース・振る舞いベース・ルールベース・経験ベース技法）が適切か
                            </li>
                            <li>
                                どの程度の<strong>テストの独立性</strong>（別チームによるレビューが必要か等）が必要か
                            </li>
                            <li>どの程度の<strong>テストの網羅性（厳密さ）</strong>が必要か</li>
                        </ul>

                        <h4>シフトレフトの原則</h4>
                        <p>
                            TAは、<strong>できるだけ早い段階でリスクを軽減できるテスト活動</strong>を提案することが推奨されています（シフトレフトの精神）。例えば、コードが書かれる前の仕様レビューの段階で欠陥を発見できれば、実装後にテストで発見するよりもはるかに低コストで修正できます。
                        </p>

                        <h4>具体例（シナリオ適用）</h4>
                        <p>先ほどのリスク一覧に対して、TAは次のようなテスト活動を提案します。</p>
                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>リスクID</th>
                                        <th>リスクレベル</th>
                                        <th>提案するテスト活動</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>R-01（過剰値引き）</td>
                                        <td className="center risk-high">高</td>
                                        <td>
                                            実装前に決定テーブルのレビュー（静的テスト）を実施。実装後は決定テーブルテストとコンビナトリアルテスト（第3章）で組み合わせを網羅的に検証。テスト実行はレビュー担当者以外の高い独立性を持つTAが担当
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>R-02（割引未適用）</td>
                                        <td className="center risk-mid">中</td>
                                        <td>
                                            シナリオベーステストでチェックアウトの代表的なユースケースを検証。標準的なEP/BVAで境界値も確認
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>R-03（UI表記ゆれ）</td>
                                        <td className="center risk-low">低</td>
                                        <td>
                                            探索的テストの中で軽くチェック。専用のテストケースは作成しない
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout-practice">
                            <div className="practice-label">✅ ベストプラクティス</div>
                            <ul>
                                <li>
                                    <span className="tag-good">✅ リスクを均一に扱わない</span>：テスト対象全体を1つのリスクとして扱うのではなく、コンポーネント・インターフェース・機能単位（テストアイテム）に分解し、それぞれ個別にリスクレベルを評価する
                                </li>
                                <li>
                                    <span className="tag-good">✅ 品質特性で分類する</span>：ISO/IEC 25010のような標準的なモデルを使ってリスクを分類し、テストタイプの選定（第4章）につなげる
                                </li>
                                <li>
                                    <span className="tag-good">✅ シフトレフトを意識する</span>：可能な限り早い工程（レビュー等の静的テスト）でリスクを低減できないか検討する
                                </li>
                                <li>
                                    <span className="tag-bad">❌ 避けるべきこと</span>：仕様書の記載の有無だけでリスクレベルを判断すること。仕様が書かれていても「その仕様自体があいまいで解釈が割れる」場合はテストベースの品質という観点でリスクが上がる点を見落とさない
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/* ============ SECTION 4 ============ */}
                    <section id="sec4">
                        <h2>
                            4. 2.2 リスクコントロール（Risk Control）<span className="klevel k4">K4</span>
                        </h2>

                        <div className="lo-box">
                            <strong>学習目標</strong>：TA-2.2.1 (K4)
                            変更の影響を分析し、回帰テストの対象範囲を決定できる
                        </div>

                        <p>
                            リスクコントロールは「<strong>リスク軽減（Risk Mitigation）</strong>」と「<strong>リスクモニタリング（Risk Monitoring）</strong>」の2つの活動から構成されます。
                        </p>

                        <h3 id="sec4-1">
                            4.1 リスク軽減（Risk Mitigation）を構成する4つのアクション
                        </h3>
                        <p>
                            CTFL（Section 5.2.4）で紹介されているリスク軽減アクションのうち、TAが特に重要な役割を担う4つは以下の通りです。それぞれ本シラバスの別の章・節で詳しく扱われます。
                        </p>
                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>アクション</th>
                                        <th>詳細を扱う箇所</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="center">1</td>
                                        <td>レビューの実施</td>
                                        <td>本シラバス 5.2.2「レビュー技法の適用」</td>
                                    </tr>
                                    <tr>
                                        <td className="center">2</td>
                                        <td>適切なテスト技法・カバレッジレベルの適用</td>
                                        <td>本シラバス 3.5「最も適切なテスト技法の適用」</td>
                                    </tr>
                                    <tr>
                                        <td className="center">3</td>
                                        <td>適切なテストタイプの適用</td>
                                        <td>本シラバス 第4章「品質特性のテスト」</td>
                                    </tr>
                                    <tr>
                                        <td className="center">4</td>
                                        <td><strong>回帰テストの実施</strong></td>
                                        <td>本章（2.2）で詳しく解説</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            このガイドでは、第2章の学習目標がK4（分析）に設定されている<strong>回帰テスト</strong>に焦点を当てて深掘りします。
                        </p>

                        <h3 id="sec4-2">
                            4.2 回帰テスト（Regression Testing）の目的と現実的な制約
                        </h3>
                        <h4>定義</h4>
                        <p>
                            回帰テストとは、<strong>変更（不具合修正を含む）を加えた後も、既存の正しく動いていた部分に悪影響（デグレード）が出ていないことを確認するテスト</strong>です。
                        </p>

                        <h4>なぜ「全部」再実行できないのか（理由）</h4>
                        <p>
                            理想を言えば、変更のたびに既存のテストをすべて再実行できれば安心です。しかし現実には、以下のような制約から<strong>すべての回帰テストを毎回実行することは不可能</strong>な場合がほとんどです。
                        </p>
                        <ul>
                            <li>時間の制約（リリースサイクルが短い）</li>
                            <li>予算の制約</li>
                            <li>テスト環境の制約</li>
                            <li>テストデータの制約</li>
                            <li>
                                （自動テストであっても）テストサイクルが短く、実行に時間のかかる自動テストが大量にある場合は同様の問題が起きる
                            </li>
                        </ul>
                        <p>
                            したがって、TAは<strong>「どの回帰テストを実行すべきか」を、限られたリソースの中で合理的に選定する</strong>という重要な役割を担います。また、<strong>回帰テストの対象範囲は毎テストサイクルごとに見直すべき</strong>であり、一度決めたら固定という考え方は誤りです。
                        </p>

                        <h3 id="sec4-3">4.3 回帰テスト選択技法：6つのアプローチを徹底解説</h3>
                        <p>
                            シラバスでは、状況に応じて使い分けるべき回帰テスト選択技法が紹介されています。<strong>手動実行では、どれか1つが常に優れているという決定的な証拠はなく</strong>、TAは状況に応じて技法を選択・組み合わせる必要があります。
                        </p>

                        <h4>技法①：インパクト分析（Impact Analysis）</h4>
                        <ul>
                            <li>
                                <strong>定義</strong>：構成管理システムと連携したツールを使い、各テストケースの実行時にどの構成アイテム（モジュール・ファイル等）が使われたかを記録しておき、変更が入った際にその変更に関わる構成アイテムを使うテストだけを自動的に選び出す技法
                            </li>
                            <li>
                                <strong>理由</strong>：自動テストの選定において<strong>最も信頼性が高い</strong>とされる技法。変更箇所と実際に紐づくテストだけを機械的に特定できるため、人手による見落としが起きにくい
                            </li>
                            <li>
                                <strong>具体例</strong>：<code>DiscountCalculator.js</code> が変更されたら、過去の実行ログから「このファイルを経由したテストケース」を自動抽出し、それらだけを回帰テスト対象とする
                            </li>
                            <li>
                                <strong>適用しやすい場面</strong>：自動テストが充実しており、構成管理ツールとテスト管理ツールが連携している環境
                            </li>
                        </ul>

                        <h4>技法②：リスクベース選択（Risk-Based Test Selection）</h4>
                        <ul>
                            <li>
                                <strong>定義</strong>：回帰テストスイートとリスクレジスタのトレーサビリティを維持しておき、リスクレジスタが更新されたタイミングで、最もリスクレベルの高い部分をカバーするように回帰テストスイートを調整する技法
                            </li>
                            <li>
                                <strong>理由</strong>：第2章2.1で行ったリスク分析の成果をそのまま回帰テストの優先順位付けに再利用できる、一貫性のあるアプローチ
                            </li>
                            <li>
                                <strong>具体例</strong>：クーポン併用ロジックの変更が入った際、R-01（過剰値引きリスク：高）に紐づく決定テーブルテスト・コンビナトリアルテストを最優先で回帰テスト対象にする
                            </li>
                        </ul>

                        <h4>技法③：履歴ベーステスト（History-Based Testing）</h4>
                        <ul>
                            <li>
                                <strong>定義</strong>：過去のテスト実行結果を振り返り、「過去に欠陥を検出した」または「似た変更に敏感に反応した」テストケースを重点的に再実行する技法。また、長期間実行されていないテストをあえて含めることで、それらが依然としてパスすることも確認する
                            </li>
                            <li>
                                <strong>理由</strong>：過去に問題が起きた箇所は、将来も同様の問題を起こしやすい傾向がある（欠陥の再発・類似欠陥の傾向）という経験則に基づく
                            </li>
                            <li>
                                <strong>具体例</strong>：過去に「クーポン+会員ランク割引の重複適用」でバグが見つかったテストケースを、今回の変更でも優先的に再実行する
                            </li>
                        </ul>

                        <h4>技法④：カバレッジベーステスト（Coverage-Based Testing）</h4>
                        <ul>
                            <li>
                                <strong>定義</strong>：選択したテスト技法のカバレッジ基準に基づき、できるだけ少ないテスト数でできるだけ高いカバレッジを達成するテストの小集合を選ぶ技法
                            </li>
                            <li>
                                <strong>理由</strong>：テスト数とカバレッジ増加量のバランスを取ることで、効率的な回帰テストスイートを構築できる
                            </li>
                            <li>
                                <strong>具体例</strong>：決定テーブルの全ルールをカバーする最小限のテストケースの組み合わせを選び、回帰テストとして実行する
                            </li>
                        </ul>

                        <h4>
                            技法⑤：要求トレーサビリティマトリクス（Requirement Traceability Matrix）
                        </h4>
                        <ul>
                            <li>
                                <strong>定義</strong>：要求（アクセプタンス基準を含む）と、それに関連するテストとの対応関係を一覧化した表を使い、変更された要求に対応するテストだけでなく、<strong>間接的に影響を受ける可能性がある関連機能のテストも合わせて選定する</strong>技法
                            </li>
                            <li>
                                <strong>理由</strong>：新規・変更された要求が、直接関係のなさそうな別の既存機能に予期しない副作用を与えるケースを捉えられる
                            </li>
                            <li>
                                <strong>具体例</strong>：クーポン適用ロジックの変更が「送料無料条件の判定ロジック」にも間接的に影響する場合、トレーサビリティマトリクスをたどることでこの関連機能のテストも回帰対象に含める
                            </li>
                        </ul>

                        <h4>
                            技法⑥：運用プロファイルベーステスト（Testing Based on Operational Profiles）
                        </h4>
                        <ul>
                            <li>
                                <strong>定義</strong>：実際のユーザーの利用パターン（操作の頻度・順序）に基づいて回帰テストケースを選定する技法。システムに大きな変更が入った際、システム全体の機能性を素早く俯瞰する目的で有効
                            </li>
                            <li>
                                <strong>理由</strong>：実際のユーザーがよく通る道筋（ログイン→検索→カート追加→注文、など）を優先的に確認することで、実利用への影響を効率よく検証できる
                            </li>
                            <li>
                                <strong>具体例</strong>：「ログイン→商品検索→カート追加→クーポン適用→注文確定」という一連の操作パターンをE2Eテストとして回帰テスト対象にする。もし対象パターンが多すぎる場合は、頻度が高く重要な業務プロセスをカバーするパターンを優先する
                            </li>
                        </ul>

                        <h4>6技法の比較表</h4>
                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>技法</th>
                                        <th>主な適用場面</th>
                                        <th>長所</th>
                                        <th>短所・留意点</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>インパクト分析</td>
                                        <td>自動テスト・構成管理連携がある環境</td>
                                        <td>最も信頼性が高い、機械的に選定可能</td>
                                        <td>ツール導入・構成管理の整備が前提</td>
                                    </tr>
                                    <tr>
                                        <td>リスクベース選択</td>
                                        <td>リスク分析の成果を活用したい場合</td>
                                        <td>リスク管理と一貫性を保てる</td>
                                        <td>リスクレジスタの継続的な更新が前提</td>
                                    </tr>
                                    <tr>
                                        <td>履歴ベーステスト</td>
                                        <td>過去データが蓄積されている場合</td>
                                        <td>実績に基づく高い検出力が期待できる</td>
                                        <td>未経験の新しい欠陥パターンは捉えにくい</td>
                                    </tr>
                                    <tr>
                                        <td>カバレッジベーステスト</td>
                                        <td>効率的な小規模スイートを作りたい場合</td>
                                        <td>テスト数とカバレッジのバランスが良い</td>
                                        <td>技法選定・カバレッジ基準の理解が必要</td>
                                    </tr>
                                    <tr>
                                        <td>要求トレーサビリティマトリクス</td>
                                        <td>要求変更の間接的影響が懸念される場合</td>
                                        <td>関連機能への副作用を捕捉しやすい</td>
                                        <td>マトリクスの維持コストがかかる</td>
                                    </tr>
                                    <tr>
                                        <td>運用プロファイルベーステスト</td>
                                        <td>大規模変更時の全体俯瞰</td>
                                        <td>実利用への影響を効率的に確認できる</td>
                                        <td>パターンが多すぎると絞り込みが必要</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 id="sec4-4">4.4 複数技法の組み合わせと継続的な改善</h3>
                        <p>
                            シラバスは明確に「<strong>多くの場合、複数の選択技法を組み合わせる必要がある</strong>」としています。TAは、カバレッジの十分性と、テストスイートの管理可能なサイズとのバランスを常に取る必要があります。
                        </p>

                        <div className="mermaid-card">
                            <div className="mermaid-wrap">
                                <Mermaid chart={DIAGRAM_REGRESSION_SELECTION} />
                            </div>
                        </div>

                        <p>
                            <strong>継続的改善のポイント</strong>：各テストサイクルの後、TAは「今回選んだ技法・テストケースは実際に欠陥を検出できたか」を分析します（この分析手法は本シラバス5.3.1で扱われます）。効果的だった技法は次回も継続し、効果が薄かった技法は別の技法に置き換える、というサイクルを繰り返すことで、回帰テスト選定の精度は時間とともに向上していきます。この継続的改善は、変更が頻繁に発生する<strong>反復型・インクリメンタル型の開発モデルにおいて特に重要</strong>です。
                        </p>

                        <h3 id="sec4-5">4.5 リスクモニタリング（Risk Monitoring）</h3>
                        <h4>定義</h4>
                        <p>
                            リスクとリスクレベルは静的なものではなく、プロジェクトの進行とともに変化します。リスクモニタリングは、この変化を継続的に把握し直すプロセスです。
                        </p>

                        <h4>TAの貢献</h4>
                        <ul>
                            <li>
                                変更が加えられるたびに、その変更内容に基づいてリスクレジスタを更新する
                            </li>
                            <li>
                                リスクレベルの変化に応じて、リスク軽減アクション（テスト技法・カバレッジ・テストタイプの選定など）を調整する
                            </li>
                            <li>
                                モニタリングの頻度は、反復型開発では「イテレーションごとに1回程度」が目安。それ以外の開発モデルでは、プロダクトリスク管理の責任者（多くの場合テストマネージャ）が定める頻度に従う
                            </li>
                        </ul>

                        <div className="callout-practice">
                            <div className="practice-label">✅ ベストプラクティス</div>
                            <ul>
                                <li>
                                    <span className="tag-good">✅ リスクレジスタを"生きたドキュメント"として扱う</span>：プロジェクト開始時に一度作って終わりにせず、変更のたびに更新する運用を定着させる
                                </li>
                                <li>
                                    <span className="tag-good">✅ 技法の組み合わせを前提にする</span>：単一の回帰テスト選択技法に固執せず、状況に応じて複数技法を併用する
                                </li>
                                <li>
                                    <span className="tag-good">✅ 選定結果を毎サイクル振り返る</span>：欠陥検出につながったか否かを分析し、次サイクルの選定精度を上げる
                                </li>
                                <li>
                                    <span className="tag-bad">❌ 避けるべきこと</span>：「前回と同じテストセットだから今回もそのまま実行すればよい」という思考停止。変更内容とリスクの状況は毎回異なるため、都度見直しが必要
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/* ============ SECTION 5 ============ */}
                    <section id="sec5">
                        <h2>5. 実践演習：インパクト分析をステップバイステップで行う</h2>
                        <p>
                            TA-2.2.1（K4：分析）の学習目標を体感するために、統一シナリオを使った実践演習を行います。
                        </p>

                        <div className="scenario">
                            <strong>状況設定</strong>：クーポン割引機能の仕様変更が決定しました。「同時に適用できるクーポンの数を、これまでの<strong>最大1枚</strong>から<strong>最大2枚</strong>に緩和する」という変更です。この変更に対して、TAとしてどのように回帰テストの対象範囲を決定すればよいでしょうか。
                        </div>

                        <div className="mermaid-card">
                            <div className="mermaid-wrap">
                                <Mermaid chart={DIAGRAM_IMPACT_ANALYSIS_STEPS} />
                            </div>
                        </div>

                        <h3>ステップ①：変更要求を受領する</h3>
                        <p>
                            「クーポン同時使用数を1→2枚に変更」という要求内容を正確に把握します。この時点でTAは、単に「言われた通りにテストする」のではなく、<strong>この変更がどこまで波及しうるか</strong>を意識し始めます。
                        </p>

                        <h3>ステップ②：変更対象の構成管理項目を特定する</h3>
                        <p>開発者と連携し、実際にコード変更が入る構成アイテムを特定します。</p>
                        <ul>
                            <li>
                                <code>DiscountCalculator</code>モジュール（割引金額の計算ロジック本体）
                            </li>
                            <li>
                                「割引ルール」決定テーブル（クーポン種別×会員ランク×数量の組み合わせルール）
                            </li>
                            <li>カートUIのクーポン入力欄（2枚目の入力欄追加が必要な場合）</li>
                        </ul>

                        <h3>ステップ③：影響を受ける機能・コンポーネントを分析する</h3>
                        <p>
                            直接変更されたモジュールだけでなく、<strong>間接的に影響を受けうる機能</strong>まで視野を広げます。
                        </p>
                        <ul>
                            <li>
                                送料無料判定ロジック（割引後の合計金額を参照している場合、影響を受ける可能性がある）
                            </li>
                            <li>
                                ポイント付与ロジック（割引後金額を基準にポイントを計算している場合、影響を受ける可能性がある）
                            </li>
                            <li>注文確認メールに表示される割引内訳の表示ロジック</li>
                        </ul>

                        <h3>ステップ④：トレーサビリティマトリクスで関連テストを抽出する</h3>
                        <p>
                            要求トレーサビリティマトリクス（技法⑤）を使い、「クーポン適用」「送料無料判定」「ポイント付与」といった要求・機能に紐づく既存のテストケース群を洗い出します。
                        </p>

                        <h3>ステップ⑤：リスクレジスタと照合し優先度を再評価する</h3>
                        <p>
                            洗い出されたテストケースを、<a href="#sec3-2">2.1で作成したリスクレベル表</a>と突き合わせます。「過剰値引き（R-01：高リスク）」に直結する決定テーブルテストとコンビナトリアルテストは最優先、UIの表記レベルのテスト（R-03：低リスク）は優先度を下げる、といった判断を行います。
                        </p>

                        <h3>ステップ⑥：回帰テストの対象範囲を確定する</h3>
                        <p>
                            ここまでの分析結果を統合し、複数の技法を組み合わせて最終的な回帰テストスイートを決定します。
                        </p>
                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>選定技法</th>
                                        <th>この変更における適用例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>インパクト分析</td>
                                        <td>
                                            <code>DiscountCalculator</code>と決定テーブルを経由する既存の自動テストを機械的に抽出
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>リスクベース選択</td>
                                        <td>R-01（高リスク）に紐づくテストを最優先</td>
                                    </tr>
                                    <tr>
                                        <td>要求トレーサビリティマトリクス</td>
                                        <td>送料無料判定・ポイント付与への間接影響テストを追加</td>
                                    </tr>
                                    <tr>
                                        <td>運用プロファイルベーステスト</td>
                                        <td>
                                            「クーポン2枚適用→注文確定」という新しい主要利用パターンをE2Eで1本追加
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>ステップ⑦・⑧：実行と振り返り</h3>
                        <p>
                            回帰テストを実行し、結果を記録します。テスト実行後は、「今回選んだテストの中で実際に欠陥を検出できたものはどれか」を分析し（5.3.1の欠陥分析手法と連動）、次回同様の変更が入った際の選定精度向上につなげます。
                        </p>

                        <div className="tip">
                            💡 <strong>学習ポイント</strong>：このように、インパクト分析は「1つの技法」であると同時に、<strong>複数の選択技法を組み合わせるプロセス全体の起点</strong>にもなります。K4レベルの試験問題では、こうした「複数ステップを順序立てて分析し、根拠を持って回帰範囲を決定する」思考プロセスそのものが問われると考えられます。
                        </div>
                    </section>

                    {/* ============ SECTION 6 ============ */}
                    <section id="sec6">
                        <h2>6. ベストプラクティス総まとめ（✅/❌）</h2>
                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>✅ 良いプラクティス</th>
                                        <th>❌ 避けるべきアンチパターン</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>リスク識別</td>
                                        <td>
                                            複数のステークホルダー（開発・ビジネス・運用）を巻き込み、経験に基づく知見を積極的に提案する
                                        </td>
                                        <td>一人のTAの主観だけでリスク一覧を確定させる</td>
                                    </tr>
                                    <tr>
                                        <td>リスクの粒度</td>
                                        <td>
                                            リスクが均一に分布しないことを前提に、テスト対象をテストアイテム単位に分解して評価する
                                        </td>
                                        <td>システム全体を1つの塊として単一のリスクレベルで扱う</td>
                                    </tr>
                                    <tr>
                                        <td>テスト活動の選定</td>
                                        <td>
                                            シフトレフトを意識し、可能な限り早い工程（レビュー等）でリスクを軽減する方法を検討する
                                        </td>
                                        <td>実装が終わってから初めてテスト計画を考え始める</td>
                                    </tr>
                                    <tr>
                                        <td>回帰テスト選定</td>
                                        <td>
                                            複数の選択技法（インパクト分析・リスクベース・履歴ベース等）を状況に応じて組み合わせる
                                        </td>
                                        <td>
                                            常に「全件再実行」または「毎回同じ固定セット」で済ませる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>リスクモニタリング</td>
                                        <td>
                                            変更のたびにリスクレジスタを更新し、軽減アクションを見直す「生きた運用」にする
                                        </td>
                                        <td>
                                            プロジェクト開始時に一度リスクを決めたら、以後見直さない
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>継続的改善</td>
                                        <td>
                                            各テストサイクル後に選定技法の有効性（欠陥検出につながったか）を振り返り、次回に活かす
                                        </td>
                                        <td>テスト結果を分析せず、同じ方法をただ繰り返す</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ============ SECTION 7 ============ */}
                    <section id="sec7">
                        <h2>7. 第2章のまとめ表</h2>
                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>セクション</th>
                                        <th>K-Level</th>
                                        <th>一言まとめ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2.1 リスク分析（リスク識別）</td>
                                        <td className="center"><span className="klevel k2">K2</span></td>
                                        <td>
                                            TAは経験と知識を武器に、ワークショップ・インタビュー等を通じてリスク識別に積極的に貢献する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2.1 リスク分析（リスクアセスメント）</td>
                                        <td className="center"><span className="klevel k2">K2</span></td>
                                        <td>
                                            使用頻度・重要度・損害規模・テストベースの品質・法的要求などからリスクレベルを判定し、品質特性で分類し、テスト活動を提案する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2.2 リスクコントロール（リスク軽減）</td>
                                        <td className="center">—</td>
                                        <td>
                                            レビュー、テスト技法・カバレッジの選定、テストタイプの選定、回帰テストという4つのアクションでリスクを低減する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2.2 リスクコントロール（回帰テスト選択）</td>
                                        <td className="center"><span className="klevel k4">K4</span></td>
                                        <td>
                                            インパクト分析・リスクベース選択・履歴ベース・カバレッジベース・トレーサビリティマトリクス・運用プロファイルの6技法を、状況に応じて組み合わせて回帰テストの範囲を分析・決定する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2.2 リスクコントロール（リスクモニタリング）</td>
                                        <td className="center">—</td>
                                        <td>
                                            リスクは変化し続けるものとして、継続的にリスクレジスタを更新し軽減策を調整する
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ============ SECTION 8 ============ */}
                    <section id="sec8">
                        <h2>8. 理解度チェック問題</h2>
                        <p>
                            以下の問題で、本章の理解度を確認しましょう（クリックで解答・解説が開きます）。
                        </p>

                        <details>
                            <summary>
                                Q1. リスクベースドテストのアプローチを「採用するかどうか」を決定するのは誰の役割か。
                            </summary>
                            <div className="q-answer">
                                <strong>解答</strong>：テストマネージャ（TM）。テストアナリスト（TA）は、その方針のもとで実際にリスク分析・リスクコントロールを実行する役割を担う。
                            </div>
                        </details>

                        <details>
                            <summary>
                                Q2. リスクアセスメントにおいて、リスクレベルを見積もる際に考慮すべき要因を3つ以上挙げよ。
                            </summary>
                            <div className="q-answer">
                                <strong>解答例</strong>：機能の使用頻度・重要度／ビジネス目標への影響度／金銭的・環境的・信用面の損害／テストベースの品質／法的・安全上の要求（このうち3つ以上を挙げられればOK）
                            </div>
                        </details>

                        <details>
                            <summary>
                                Q3. 「変更が入った構成アイテムを構成管理ツールで自動追跡し、それに紐づくテストのみを機械的に選定する」回帰テスト選択技法の名称は何か。
                            </summary>
                            <div className="q-answer">
                                <strong>解答</strong>：インパクト分析（Impact Analysis）。自動テストの選定において最も信頼性が高いとされる技法。
                            </div>
                        </details>

                        <details>
                            <summary>
                                Q4. 手動実行の回帰テストにおいて、「唯一絶対に優れている」選択技法は存在するか。
                            </summary>
                            <div className="q-answer">
                                <strong>解答</strong>：存在しない。結果は様々な要因に依存するため、TAは状況に応じてどの技法を使うかを判断し、多くの場合は複数の技法を組み合わせる必要がある。
                            </div>
                        </details>

                        <details>
                            <summary>
                                Q5. リスクモニタリングの頻度は、開発ライフサイクルによってどう異なるか。
                            </summary>
                            <div className="q-answer">
                                <strong>解答</strong>：反復型（イテレーティブ）開発では、チームが決めた頻度（多くの場合イテレーションごとに1回）で実施される。それ以外の開発モデルでは、プロダクトリスク管理の責任者（多くの場合テストマネージャ）が設定する頻度に従う。
                            </div>
                        </details>
                    </section>

                    {/* ============ SECTION 9 ============ */}
                    <section id="sec9">
                        <h2>9. 参考文献</h2>
                        <div className="ref-grid">
                            <div className="ref-card">
                                <h4>公式ISTQBシラバス・認定情報</h4>
                                <ul>
                                    <li>
                                        ISTQB®. <em>Certified Tester Advanced Level Test Analyst（CTAL-TA）v4.0</em> 認定ページ<br />
                                        <a
                                            href="https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            istqb.org/certifications/certified-tester-advanced-level-test-analyst
                                        </a>
                                    </li>
                                    <li>
                                        ISTQB®. <em>Certified Tester Advanced Level Test Analyst（CTAL-TA）Syllabus v4.0</em>（2025年5月2日 GA版）Chapter 2「The Tasks of the Test Analyst in Risk-Based Testing」<br />
                                        <a
                                            href="https://istqb.org/wp-content/uploads/sdm-uploads/ISTQB-CTAL-TA-Syllabus-v4.0-EN-4.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            istqb.org – CTAL-TA Syllabus v4.0 PDF
                                        </a>
                                    </li>
                                    <li>
                                        ISTQB®. <em>Certified Tester Foundation Level（CTFL）Syllabus v4.0.1</em>（Section 5.2「リスクベースドテスト」— CTAL-TA第2章の基礎となる章）<br />
                                        <a
                                            href="https://astqb.org/assets/documents/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            astqb.org – CTFL Syllabus v4.0.1 PDF
                                        </a>
                                    </li>
                                    <li>
                                        ISTQB®. <em>Certified Tester Advanced Level Test Management（CTAL-TM）v3.0</em> 認定ページ（リスクベースドテストのより詳細な内容を扱う）<br />
                                        <a
                                            href="https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            istqb.org – CTAL-TM v3.0
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="ref-card">
                                <h4>ISTQB用語集（Glossary）</h4>
                                <ul>
                                    <li>
                                        ISTQB® Glossary（公式）<br />
                                        <a
                                            href="https://glossary.istqb.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            glossary.istqb.org
                                        </a>
                                    </li>
                                    <li>
                                        Risk-Based Testing —{' '}
                                        <a
                                            href="https://istqb-glossary.page/risk-based-testing/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            istqb-glossary.page/risk-based-testing
                                        </a>
                                    </li>
                                    <li>
                                        Risk Analysis —{' '}
                                        <a
                                            href="https://istqb-glossary.page/risk-analysis/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            istqb-glossary.page/risk-analysis
                                        </a>
                                    </li>
                                    <li>
                                        Risk Assessment —{' '}
                                        <a
                                            href="https://istqb-glossary.page/risk-assessment/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            istqb-glossary.page/risk-assessment
                                        </a>
                                    </li>
                                    <li>
                                        Risk Mitigation —{' '}
                                        <a
                                            href="https://istqb-glossary.page/risk-mitigation/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            istqb-glossary.page/risk-mitigation
                                        </a>
                                    </li>
                                    <li>
                                        Product Risk —{' '}
                                        <a
                                            href="https://istqb-glossary.page/product-risk/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            istqb-glossary.page/product-risk
                                        </a>
                                    </li>
                                    <li>
                                        Risk Management —{' '}
                                        <a
                                            href="https://istqb-glossary.page/risk-management/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            istqb-glossary.page/risk-management
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="ref-card">
                                <h4>関連国際規格</h4>
                                <ul>
                                    <li>
                                        ISO/IEC 25010:2023. <em>Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model</em>（リスクを品質特性で分類する際の参照モデル）<br />
                                        <a
                                            href="https://www.iso.org/standard/78176.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            iso.org/standard/78176.html
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ============ SECTION 10 ============ */}
                    <section id="sec10">
                        <h2>10. 次のステップ</h2>
                        <div className="next-box">
                            <p>
                                第2章で学んだ「リスクに基づいて優先順位をつける」という考え方は、次の<strong>第3章「テスト分析とテスト設計」</strong>、特に<strong>3.5.1「プロダクトリスクを緩和するテスト技法の選定」</strong>で直接活用されます。データベース技法・振る舞いベース技法・ルールベース技法・経験ベース技法という具体的な武器を学ぶ前に、本章の内容（特にリスクレベルとテスト活動のマッピング、回帰テスト選択技法の使い分け）を確実に自分の言葉で説明できる状態にしておくことを推奨します。
                            </p>
                            <p style={{ marginBottom: 0 }}>
                                また、リスクベースドテストをより実務的・戦略的なレベル（プロジェクト全体のリスク管理体制の構築など）で深めたい場合は、<a
                                    href="https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB® Advanced Level Test Management（CTAL-TM）v3.0
                                </a>の学習もあわせて推奨します。
                            </p>
                        </div>
                    </section>

                    <footer>
                        本ガイドはISTQB®公式シラバス・認定情報をもとに作成した学習補助教材です。試験の正答・最新情報は必ず公式シラバス（istqb.org）をご確認ください。
                    </footer>
                </div>
            </main>
        </div>
    );
}
