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
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "flowchart": { "curve": "basis", "htmlLabels": true }
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

    subgraph SG1["2.1 リスク分析 Risk Analysis"]
        direction LR
        RI["リスク識別<br/>Risk Identification"]
        RA["リスクアセスメント<br/>Risk Assessment"]
        RI --> RA
    end

    subgraph SG2["2.2 リスクコントロール Risk Control"]
        direction LR
        RM["リスク軽減<br/>Risk Mitigation"]
        RMo["リスクモニタリング<br/>Risk Monitoring"]
        RM --> RMo
    end

    RA -- "軽減策を提案" --> RM
    RMo -- "リスクレジスタ更新/軽減策を再調整" --> RI

    class RI,RA analysisNode
    class RM,RMo controlNode`;

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

                    {/* Section 3〜10 は後続カテゴリで順次実装 */}
                    <section id="sec3"></section>
                    <section id="sec4"></section>
                    <section id="sec5"></section>
                    <section id="sec6"></section>
                    <section id="sec7"></section>
                    <section id="sec8"></section>
                    <section id="sec9"></section>
                    <section id="sec10"></section>
                </div>
            </main>
        </div>
    );
}
