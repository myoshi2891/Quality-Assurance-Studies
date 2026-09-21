import './istqb-ctal-ta-chapter1-test-process.css';
import NavBar from './NavBar';
import { Checklist } from './Checklist';
import Mermaid from '../../components/Mermaid';

const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#ffffff",
    "primaryColor": "#eff6ff",
    "primaryBorderColor": "#2563eb",
    "primaryTextColor": "#1e293b",
    "lineColor": "#94a3b8",
    "secondaryColor": "#f1f5f9",
    "secondaryTextColor": "#1e293b",
    "tertiaryColor": "#f8fafc",
    "tertiaryTextColor": "#1e293b",
    "mainBkg": "#eff6ff",
    "nodeBorder": "#2563eb",
    "nodeTextColor": "#1e293b",
    "textColor": "#1e293b",
    "titleColor": "#1e40af",
    "edgeLabelBackground": "#ffffff",
    "clusterBkg": "#f8fafc",
    "clusterBorder": "#e2e8f0",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "flowchart": {
    "curve": "basis",
    "htmlLabels": true
  }
}}%%`;

export const DIAGRAM_OVERVIEW = `${MERMAID_CONFIG}
flowchart LR
    subgraph CH1["第1章の3本柱"]
        direction TB
        P1["1.1 SDLCにおけるテスト<br/>開発モデルごとの関わり方"]
        P2["1.2 テスト活動への関与<br/>分析・設計・実装・実行"]
        P3["1.3 成果物に関するタスク<br/>5つの成果物と管理ツール"]
    end
    P1 --> P2 --> P3

    classDef pillar fill:#dbeafe,stroke:#2563eb,color:#1e3a5f,stroke-width:2px
    class P1,P2,P3 pillar`;

export const DIAGRAM_SDLC = `${MERMAID_CONFIG}
flowchart TB
    subgraph SEQ["① 順次開発モデル(ウォーターフォール型)"]
        direction LR
        S1["初期フェーズ:<br/>テスト計画を支援"] --> S2["テストベース確定時:<br/>テスト分析を開始"]
        S2 --> S3["設計・実装と並行:<br/>テスト設計/実装"]
        S3 --> S4["終盤フェーズ:<br/>テスト実行・完了支援"]
    end
    subgraph INC["② インクリメンタル開発モデル"]
        direction LR
        I1["増分(インクリメント)1<br/>分析→設計→実装→実行"] --> I2["増分2<br/>同じ活動を独立して再実施"]
        I2 --> I3["増分N<br/>新機能+回帰テスト強化"]
    end
    subgraph ITE["③ イテレーティブ開発モデル"]
        direction LR
        T1["反復1<br/>プロトタイプを検証"] --> T2["反復2<br/>フィードバックを反映し<br/>テスト条件を修正"]
        T2 --> T3["反復N<br/>回帰テストの継続的保守"]
    end

    classDef seqFill fill:#dbeafe,stroke:#2563eb,color:#1e3a5f
    classDef incFill fill:#dcfce7,stroke:#16a34a,color:#14532d
    classDef iteFill fill:#fef3c7,stroke:#d97706,color:#78350f
    class S1,S2,S3,S4 seqFill
    class I1,I2,I3 incFill
    class T1,T2,T3 iteFill`;

export const DIAGRAM_PROCESS = `${MERMAID_CONFIG}
flowchart LR
    TP["テスト計画"] --> A["テスト分析<br/>(1.2.1)"]
    A --> D["テスト設計<br/>(1.2.2)"]
    D --> I["テスト実装<br/>(1.2.3)"]
    I --> E["テスト実行<br/>(1.2.4)"]
    E --> TC["テスト完了"]
    MC["テストモニタリング&コントロール"] -. 継続的に関与 .-> A
    MC -. 継続的に関与 .-> D
    MC -. 継続的に関与 .-> I
    MC -. 継続的に関与 .-> E

    classDef taFocus fill:#dbeafe,stroke:#2563eb,color:#1e3a5f,stroke-width:2px
    classDef other fill:#f1f5f9,stroke:#94a3b8,color:#334155
    class A,D,I,E taFocus
    class TP,TC,MC other`;

export const DIAGRAM_ENTRY = `${MERMAID_CONFIG}
flowchart TD
    Entry{"テスト分析のエントリ基準"} --> C1["✔ テスト計画が完了し、<br/>スコープ・目的・アプローチが明確"]
    Entry --> C2["✔ テストベースが定義済み"]
    Entry --> C3["✔ 既知のプロダクトリスクが<br/>評価・文書化済み"]

    classDef cond fill:#eff6ff,stroke:#2563eb,color:#1e3a5f
    class C1,C2,C3 cond`;

export const DIAGRAM_ANALYSIS_FLOW = `${MERMAID_CONFIG}
flowchart TD
    Eval["テストベースを評価し<br/>欠陥を検出・テスト容易性を評価"] --> Model["必要に応じてシステム挙動をモデル化<br/>+ レビュー技法を適用"]
    Model --> Oracle["テストオラクルを決定<br/>(→1.3.4)"]
    Model --> Cond["テスト条件を定義・優先順位付け<br/>(プロダクトリスクを考慮)"]
    Cond --> Stage1["段階1: 高レベルの条件<br/>例:「画面Xの機能」"]
    Stage1 --> Stage2["段階2: 詳細な条件<br/>例:「画面Xは1桁短い口座番号を拒否する」"]
    Stage2 --> Review["ステークホルダーと<br/>テスト条件をレビュー"]

    classDef step fill:#dbeafe,stroke:#2563eb,color:#1e3a5f
    class Eval,Model,Oracle,Cond,Stage1,Stage2,Review step`;

export const DIAGRAM_ENV3 = `${MERMAID_CONFIG}
flowchart LR
    E1["① テスト対象の欠陥を<br/>正しく検出できる"] --- E2["② 障害が無いときは<br/>正常に動作する"] --- E3["③ 必要に応じて本番/<br/>エンドユーザー環境を<br/>十分に模倣する"]

    classDef envFill fill:#dbeafe,stroke:#2563eb,color:#1e3a5f
    class E1,E2,E3 envFill`;

export const DIAGRAM_HLLL = `${MERMAID_CONFIG}
flowchart TD
    HL["ハイレベルテストケース<br/>(抽象的)<br/>1冊以上の注文で割引を適用"] --> LL1["ローレベル①<br/>B1($10)+B2($20)=$30<br/>→10%割引、合計$27"]
    HL --> LL2["ローレベル②<br/>C1($5)+C2($5)=$10<br/>→10%割引、合計$9"]
    HL --> LL3["ローレベル③<br/>…(他のデータパターン)"]

    classDef hlFill fill:#dbeafe,stroke:#2563eb,color:#1e3a5f,stroke-width:2px
    classDef llFill fill:#dcfce7,stroke:#16a34a,color:#14532d
    class HL hlFill
    class LL1,LL2,LL3 llFill`;

export const DIAGRAM_ENVREQ = `${MERMAID_CONFIG}
flowchart TD
    A1["テスト条件・テストケース・<br/>テストデータ要件の分析<br/>→環境構築・維持に必要な条件を導出"]
    A2["テストレベル・テストタイプの分析<br/>→柔軟性 と 本番類似度 のトレードオフを決定"]
    A3["コンポーネント/システムの<br/>可用性・独立性の分析<br/>→テストダブル(スタブ/ドライバ)の要否を判断"]

    classDef anaFill fill:#dbeafe,stroke:#2563eb,color:#1e3a5f
    class A1,A2,A3 anaFill`;

export const DIAGRAM_ORACLE = `${MERMAID_CONFIG}
flowchart TD
    Problem(["テストオラクル問題<br/>費用対効果の高いオラクルが<br/>得られない状況"]) --> Cause1["データに関する複雑性"]
    Problem --> Cause2["非決定性<br/>(例:AIベースシステム)"]
    Problem --> Cause3["確率的な振る舞い"]
    Problem --> Cause4["要件の欠落・曖昧さ"]

    classDef causeFill fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
    class Cause1,Cause2,Cause3,Cause4 causeFill`;

export const DIAGRAM_KEYWORD = `${MERMAID_CONFIG}
flowchart TD
    UserStory["ユーザーストーリー例:<br/>「会員として認証し、施設にアクセスしたい」<br/>受け入れ基準:「有効な会員カードで認証可能」"] --> Domain["ドメイン層キーワード<br/>ビジネス用語を反映、技術詳細から独立"]
    Domain --> DK1["Authenticate Member<br/>(アクションキーワード)<br/>パラメータ:会員カード"]
    Domain --> DK2["Verify Access<br/>(検証キーワード)"]
    DK1 --> Interface["テストインタフェース層キーワード<br/>最下層、テスト対象/環境と直接通信"]
    DK2 --> Interface
    Interface --> SUT[["テスト対象システム<br/>(SUT)"]]

    classDef domainFill fill:#dbeafe,stroke:#2563eb,color:#1e3a5f
    classDef ifFill fill:#fef3c7,stroke:#d97706,color:#78350f
    class Domain,DK1,DK2 domainFill
    class Interface ifFill`;

export const DIAGRAM_TOOLS = `${MERMAID_CONFIG}
flowchart TD
    TA(("テストアナリスト")) --> T1["テスト管理ツール<br/>条件/ケース/スクリプト/<br/>スイート/実行結果のリポジトリ<br/>トレーサビリティマトリクス"]
    TA --> T2["欠陥管理ツール<br/>記録・優先順位付け・<br/>解決プロセスの監視"]
    TA --> T3["テストデータ管理ツール<br/>機密データの保護含む"]
    TA --> T4["構成管理ツール<br/>テスト環境の構成・<br/>可用性の管理"]
    TA --> T5["要件管理ツール<br/>高レベル要件の定義・<br/>バージョン管理・追跡"]

    classDef toolFill fill:#dbeafe,stroke:#2563eb,color:#1e3a5f
    class T1,T2,T3,T4,T5 toolFill`;

export default function Page() {
    return (
        <div className="ctal-ta-ch1-page">
            <NavBar />

            <main className="main">
                {/* HERO */}
                <header className="hero">
                    <div className="kicker">
                        ISTQB® Certified Tester Advanced Level Test Analyst (CTAL-TA) v4.0
                    </div>
                    <h1>
                        第1章:テストプロセスにおけるテストアナリストのタスク<br />
                        The Tasks of the Test Analyst in the Test Process
                    </h1>
                    <div className="subtitle">
                        初学者向け完全ガイド — 定義・理由・具体例・図解・ベストプラクティスを1本にまとめました
                    </div>
                    <div className="pill-row">
                        <span className="pill">配点時間 225分 / 全1215分</span>
                        <span className="pill">前提: ISTQB Foundation Level</span>
                        <span className="pill">図解11点(Mermaid)</span>
                        <span className="pill">出典明記</span>
                    </div>
                </header>

                {/* 0. この章の全体像 */}
                <section id="overview">
                    <h2>0. この章の全体像</h2>
                    <p>
                        CTAL-TA は「テストアナリスト(TA)」という役割にフォーカスした資格です。TAとは、<strong>技術面よりもビジネス要件・顧客価値を重視し、システムテストや受け入れテストを中心に、ブラックボックス技法と経験ベーステストを使いこなす人材</strong>と定義されています。第1章は、その TA が標準的なテストプロセスの各段階で「具体的に何をするか」を定義する、いわば試験全体の土台となる章です。
                    </p>

                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_OVERVIEW} />
                    </div>

                    <div className="callout-source">
                        出典:ISTQB® CTAL-TA Syllabus v4.0, Section 1 (Introduction), p.13–14 —{' '}
                        <a
                            href="https://astqb.org/assets/documents/ISTQB-CTAL-TA-Syllabus-v4.0-EN-4.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            astqb.org (PDF)
                        </a>
                    </div>

                    <h3 id="keywords">0.1 キーワード(K1レベルで暗記必須)</h3>
                    <p>
                        ハイレベルテストケース、キーワード、キーワード駆動テスト、ローレベルテストケース、ソフトウェア開発ライフサイクル(SDLC)、テスト分析、テストアナリスト、テストケース、テスト条件、テストデータ、テスト設計、テスト環境、テスト実行、テスト実装、テストオラクル、テストスクリプト、テストウェア
                    </p>
                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            これらの用語は ISTQB® Glossary の定義と一言一句違わずに覚えること。K1レベルの用語は学習目標に明記されていなくても出題対象になります。用語の定義は{' '}
                            <a href="https://glossary.istqb.org/" target="_blank" rel="noopener noreferrer">
                                glossary.istqb.org
                            </a>{' '}
                            で検索可能です。
                        </p>
                    </div>

                    <h3 id="lo">0.2 学習目標(Learning Objectives)と認知レベル</h3>
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
                                    <td>TA-1.1.1</td>
                                    <td><strong>K2</strong></td>
                                    <td>
                                        様々なソフトウェア開発ライフサイクルにおけるテストアナリストの関与を要約できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.2.1</td>
                                    <td><strong>K2</strong></td>
                                    <td>
                                        テスト分析の一環としてテストアナリストが行うタスクを要約できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.2.2</td>
                                    <td><strong>K2</strong></td>
                                    <td>
                                        テスト設計の一環としてテストアナリストが行うタスクを要約できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.2.3</td>
                                    <td><strong>K2</strong></td>
                                    <td>
                                        テスト実装の一環としてテストアナリストが行うタスクを要約できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.2.4</td>
                                    <td><strong>K2</strong></td>
                                    <td>
                                        テスト実行の一環としてテストアナリストが行うタスクを要約できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.1</td>
                                    <td><strong>K2</strong></td>
                                    <td>
                                        ハイレベルテストケースとローレベルテストケースを区別できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.2</td>
                                    <td><strong>K2</strong></td>
                                    <td>テストケースの品質基準を説明できる</td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.3</td>
                                    <td><strong>K2</strong></td>
                                    <td>テスト環境要件の例を挙げられる</td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.4</td>
                                    <td><strong>K2</strong></td>
                                    <td>テストオラクル問題と潜在的な解決策を説明できる</td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.5</td>
                                    <td><strong>K2</strong></td>
                                    <td>テストデータ要件の例を挙げられる</td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.6</td>
                                    <td><strong>K3</strong></td>
                                    <td>
                                        キーワード駆動テストを用いてテストスクリプトを作成できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.7</td>
                                    <td><strong>K2</strong></td>
                                    <td>テストウェアを管理するツールの種類を要約できる</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        K2(理解)が大半を占めますが、<strong>TA-1.3.6 のみ K3(適用)</strong>である点に注意してください。単なる暗記ではなく、実際にキーワードを設計する演習問題が出題される可能性があります。
                    </p>
                </section>

                {/* 1.1 SDLCにおけるテスト */}
                <section id="sec11">
                    <h2>
                        1.1 ソフトウェア開発ライフサイクル(SDLC)におけるテスト
                        <span className="badge-k">K2</span>
                    </h2>

                    <h3 className="h4-visual">定義</h3>
                    <p>
                        SDLC(ソフトウェア開発ライフサイクル)の型によって、開発活動の組み立て方が異なるため、<strong>TAがテストプロセスの中でいつ・何を担当するかも変化します</strong>。CTAL-TAでは、SDLCを大きく3種類に分類し、それぞれにおけるTAの関わり方を整理しています。
                    </p>

                    <h3 className="h4-visual">なぜ重要か(理由)</h3>
                    <p>
                        同じ「テスト分析」というタスクでも、ウォーターフォール型では一度きりの大きな塊として発生するのに対し、アジャイル型では毎スプリント短いサイクルで繰り返し発生します。この違いを理解していないと、プロジェクトに応じた適切なテスト計画・見積もり・体制を提案できません。
                    </p>

                    <h3 className="h4-visual">3つのSDLCモデルの比較</h3>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_SDLC} />
                    </div>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>SDLCモデル</th>
                                    <th>開発活動の特徴</th>
                                    <th>TAのタスクの変化パターン</th>
                                    <th>回帰テストへの意識</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>順次(ウォーターフォール型)</strong></td>
                                    <td>
                                        フェーズ間の重複が少なく、前フェーズ完了後に次フェーズが開始
                                    </td>
                                    <td>
                                        時間の経過とともにタスクの種類が変わる(計画支援→分析→設計/実装→実行)
                                    </td>
                                    <td>変更の影響範囲に応じて要否・範囲を判断する</td>
                                </tr>
                                <tr>
                                    <td><strong>インクリメンタル</strong></td>
                                    <td>
                                        ソフトウェアを小さな増分に分割し、各増分を独立して開発・テスト
                                    </td>
                                    <td>
                                        各増分で<strong>同じ5活動</strong>(分析・設計・実装・実行・マネジメント支援)を繰り返す
                                    </td>
                                    <td>
                                        <strong>高い</strong>。リファクタリングや回帰スイート構築に特に注意
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>イテレーティブ</strong></td>
                                    <td>
                                        プロトタイピング→テスト→改善→デプロイのサイクルを反復
                                    </td>
                                    <td>
                                        動的・適応的。開発者やビジネス代表と密に協働し、都度テスト条件・ケースを見直す
                                    </td>
                                    <td>反復頻度が高いほど回帰テストの継続的な保守が重要</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        <strong>備考:</strong>
                        実際のプロジェクトでは複数モデルの要素が混在することが多く(例:アジャイル開発はイテレーティブ+インクリメンタルの複合)、その場合TAの関わり方はSDLCの具体的な組み合わせ方次第で変わります。
                    </p>

                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            どのSDLCモデルであっても、TAは<strong>SDLCの初期段階から関与する</strong>。要件が固まる前から参加することで、テスト容易性の観点から早期にフィードバックできる。
                        </p>
                    </div>
                    <div className="callout callout-anti">
                        <span className="callout-label">❌ アンチパターン</span>
                        <p>
                            「テストは実装が終わってから」という発想でTAの参加を後工程まで遅らせること。特にインクリメンタル/イテレーティブ開発では手戻りが増え、回帰テストの負債が蓄積する。
                        </p>
                    </div>
                </section>

                {/* 1.2 テスト活動への関与 */}
                <section id="sec12">
                    <h2>1.2 テスト活動への関与 <span className="badge-k">K2</span></h2>
                    <p>
                        Foundation Levelでは7つのテスト活動が定義されていますが、TAは主に<strong>テスト分析・テスト設計・テスト実装・テスト実行</strong>の4つに集中して関与します。
                    </p>

                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_PROCESS} />
                    </div>

                    <h3 id="sec121">1.2.1 テスト分析</h3>
                    <p>
                        <strong>定義:</strong>
                        テストベース(要件、ユーザーストーリー等)の完全性を確認し、テストに関連する追加情報(ドキュメントだけでなく口頭でのやり取りも含む)を収集する活動です。
                    </p>

                    <p><strong>エントリ基準</strong>(この活動を効果的に始めるための前提条件):</p>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_ENTRY} />
                    </div>

                    <p><strong>主なタスクの流れ:</strong></p>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_ANALYSIS_FLOW} />
                    </div>

                    <ul>
                        <li>
                            テスト条件は必ず<strong>テストベースの要素までトレーサブル</strong>でなければならない。
                        </li>
                        <li>
                            インクリメンタル/イテレーティブ開発では、影響分析(インパクトアナリシス)に基づき回帰テストの範囲を決定する作業もここに含まれる。
                        </li>
                        <li>
                            アジャイル開発では、テスト条件は<strong>受け入れ基準(Acceptance Criteria)</strong>として表現されることが多い。
                        </li>
                    </ul>

                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            高レベル→詳細レベルという段階的アプローチを取ることで、まだ詳細化されていないユーザーストーリーに対しても早期にテスト設計を開始できる。
                        </p>
                    </div>
                    <div className="callout callout-anti">
                        <span className="callout-label">❌ アンチパターン</span>
                        <p>
                            テストベースの欠陥(曖昧な要件など)を発見してもTA自身の判断で握りつぶし、文書化せずに次工程に進めてしまうこと。
                        </p>
                    </div>

                    <h3 id="sec122">1.2.2 テスト設計</h3>
                    <p>
                        <strong>定義:</strong>
                        定められたテスト目標を達成するために、どのようにテストを実施するかを記述する活動。多くの場合テストケースという形で表現されます。
                    </p>

                    <p><strong>主なタスク:</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>タスク</th>
                                    <th>説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>テストケースの粒度決定</td>
                                    <td>
                                        高レベル/低レベルどちらのテストケースが適切かを領域ごとに判断(→1.3.1)
                                    </td>
                                </tr>
                                <tr>
                                    <td>合否判定基準の明確化</td>
                                    <td>
                                        すべてのテストケースについて明確なpass/fail基準を定義する
                                    </td>
                                </tr>
                                <tr>
                                    <td>テストケース設計</td>
                                    <td>
                                        新規・変更されたテスト条件に対し、品質基準(→1.3.2)に沿って設計
                                    </td>
                                </tr>
                                <tr>
                                    <td>回帰テストの選定</td>
                                    <td>
                                        既存の高レベルテストケースの選択、または低レベルテストケースの優先度に基づく適応
                                    </td>
                                </tr>
                                <tr>
                                    <td>トレーサビリティの記録</td>
                                    <td>テストベース・テスト条件・テストケース間の関連を記録</td>
                                </tr>
                                <tr>
                                    <td>テスト環境要件の定義</td>
                                    <td>→1.3.3</td>
                                </tr>
                                <tr>
                                    <td>テストデータ要件の特定</td>
                                    <td>→1.3.5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        <strong>終了基準:</strong>
                        テスト計画で定めた終了基準の他、残存リスクレベルやプロジェクト制約(予算・時間)も設計終了の判断材料になります。
                    </p>
                    <p>
                        <strong>テストケースが果たすコミュニケーション上の役割:</strong>
                        テストケースは設計者以外(他のテスター、開発者、監査者)が実行・理解できる必要があります。複雑なテストケースは分割・簡素化すべきです。
                    </p>

                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            テスト設計はツールに支援されつつも「ツール・技術に依存しない(agnostic)」形で行い、体系的な技法(→第3章)またはアドホックな手法を明示的に選択する。
                        </p>
                    </div>
                    <div className="callout callout-anti">
                        <span className="callout-label">❌ アンチパターン</span>
                        <p>
                            「自分さえ分かればよい」という発想で暗黙の前提を書かないテストケースを作ること。後任者や監査者が実行不能になる。
                        </p>
                    </div>

                    <h3 id="sec123">1.2.3 テスト実装</h3>
                    <p>
                        <strong>定義:</strong>
                        テスト実行に必要な<strong>テストウェア</strong>(テスト手順・テストスクリプト等)を準備する活動。
                    </p>

                    <p><strong>主なタスク:</strong></p>
                    <ol>
                        <li>
                            テスト手順・テストスクリプトをテストスイートに整理、または自動化候補として提案
                        </li>
                        <li>
                            テスト手順の定義 — 前提条件の設定手順、期待結果・事後条件の検証手順、実行後のリセット手順(DB初期化等)を含める
                        </li>
                        <li>
                            リスク分析・テスト計画で決定した優先順位に基づき、テスト手順/スクリプトの実行順を決定
                        </li>
                        <li>テストベースとテストウェア間のトレーサビリティを更新</li>
                        <li>
                            テストマネージャ(TM)を支援し、リソース配分を含むテスト実行スケジュールの策定を補助
                        </li>
                        <li>入力データ・環境データを作成しDB等にロード(→1.3.5)</li>
                        <li>
                            <strong>テスト環境の準備完了を検証</strong>(スモークテストの設計・実行が最も一般的な手法)
                        </li>
                    </ol>

                    <p><strong>テスト環境が満たすべき3条件:</strong></p>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_ENV3} />
                    </div>

                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            テスト実行前には、必要に応じてスモークテストを設計・実行しテスト環境の健全性を確認する。規制業界(例:RTCA DO-178C)ではテストウェア自体が標準準拠のエビデンスとなるため、証跡管理も忘れずに行う。
                        </p>
                    </div>

                    <h3 id="sec124">1.2.4 テスト実行</h3>
                    <p>
                        <strong>定義:</strong>
                        テスト実行スケジュールに従い、実際にテストケース/手順を実行し、実測結果と期待結果を比較して結果を記録する活動。
                    </p>

                    <p><strong>典型的なタスク:</strong></p>
                    <ul>
                        <li>
                            手動でのテスト実行(探索的テスト、テスト手順の実行、回帰テスト、確認テストを含む)
                        </li>
                        <li>
                            探索的テストでは<strong>セッションベーステスト</strong>とテストチャーターを活用(→3.4.1)
                        </li>
                        <li>
                            自動テストスクリプトの実行(実行自体は開発者・TAE・TTAが担当することもある)
                        </li>
                        <li>
                            異常(アノマリー)の分析による原因特定 — 欠陥そのものだけでなく、前提条件の欠落、テストデータの誤り、テストスクリプト/環境の欠陥、仕様の誤解なども原因になり得る
                        </li>
                        <li>実測結果のログ記録、欠陥のコミュニケーション、報告</li>
                    </ul>

                    <p><strong>テスト結果評価における追加タスク:</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>タスク</th>
                                    <th>目的</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>欠陥クラスタの認識</td>
                                    <td>特定領域への追加テストの必要性を判断(→5.3.1)</td>
                                </tr>
                                <tr>
                                    <td>失敗した自動テストの手動再実行</td>
                                    <td>
                                        自動化による<strong>偽陽性(false positive)</strong>でないことを確認
                                    </td>
                                </tr>
                                <tr>
                                    <td>追加テストの提案</td>
                                    <td>それまでのテストで得た知見を活用</td>
                                </tr>
                                <tr>
                                    <td>新たなリスクの特定</td>
                                    <td>テスト実行中に得られた情報から</td>
                                </tr>
                                <tr>
                                    <td>テスト設計/実装の改善提案</td>
                                    <td>テスト手順やシステム自体への改善提案を含む</td>
                                </tr>
                                <tr>
                                    <td>回帰テストスイートの改善提案</td>
                                    <td>
                                        リファクタリング、スコープ調整、自動化の提案(→第2章)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            自動テストが失敗した際は、まず失敗の原因を分析し、必要に応じて手動または別経路での再現確認を行ったうえで欠陥として報告する。これにより自動化基盤自体の不具合(偽陽性)を欠陥として誤登録するリスクを防げる。
                        </p>
                    </div>
                    <div className="callout callout-anti">
                        <span className="callout-label">❌ アンチパターン</span>
                        <p>
                            実測結果と期待結果の単純比較だけで終わらせ、異常の「根本原因」を分析せずに全てをそのまま欠陥として起票すること。テストデータ不備や環境要因を見逃す。
                        </p>
                    </div>
                </section>

                {/* 1.3 成果物(work products)に関するタスク */}
                <section id="sec13">
                    <h2>
                        1.3 成果物(work products)に関するタスク <span className="badge-k">K2 / K3</span>
                    </h2>
                    <p>
                        TAは、自身が責任を持つ成果物 — テストケース、テスト環境、テストデータ、テストオラクル、テストスクリプト — の品質を保証する責任があります。
                    </p>

                    <h3 id="sec131">
                        1.3.1 ハイレベルテストケースとローレベルテストケース
                        <span className="badge-k">K2</span>
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>項目</th>
                                    <th>ハイレベルテストケース(抽象的/論理的)</th>
                                    <th>ローレベルテストケース(具体的/物理的)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>別名</td>
                                    <td>abstract test case, logical test case</td>
                                    <td>concrete test case, physical test case</td>
                                </tr>
                                <tr>
                                    <td>内容</td>
                                    <td>
                                        どのテスト条件をカバーするかを<strong>抽象的に</strong>記述
                                    </td>
                                    <td>
                                        前提条件・入力データ・期待結果・事後条件を<strong>具体的に</strong>記述
                                    </td>
                                </tr>
                                <tr>
                                    <td>例</td>
                                    <td>
                                        「1冊以上の本を注文し、割引が適用される価格になる場合。期待結果:割引が付与される」
                                    </td>
                                    <td>
                                        「本B1($10)とB2($20)を注文、合計$30。期待結果:10%割引が適用され合計$27」
                                    </td>
                                </tr>
                                <tr>
                                    <td>用途</td>
                                    <td>
                                        すべての関連テスト条件を確実にカバーしていることの確認に適する
                                    </td>
                                    <td>実際の実行・自動化に適する</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_HLLL} />
                    </div>

                    <ul>
                        <li>
                            通常、TAは<strong>まずハイレベルを設計し、それを基にローレベルへ詳細化</strong>する。1つのハイレベルテストケースは複数のローレベルテストケースに展開されうる。
                        </li>
                        <li>
                            高レベルのまま残し、<strong>テスト実行時に具体的な値を決める</strong>ケースもある(例:探索的テストのテストチャーター内の目標記述)。
                        </li>
                        <li>
                            ハイレベル→ローレベルへの移行は単なる値の穴埋めではなく、<strong>概念(conceptual)から技術(technical)への変換</strong>でもある。多くの場合、この変換はテスト設計ではなくテスト実装の段階まで遅延される。
                        </li>
                        <li>
                            実務では「一部は具体的、一部は抽象的」という<strong>ハイブリッド型</strong>のテストケースも多く、これは保守性と理解しやすさのトレードオフに起因する。
                        </li>
                    </ul>

                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            保守性を重視するならハイレベルテストケースを基準にトレーサビリティを管理し、実行時にローレベルへ展開する。テストデータが頻繁に変わるプロジェクトでは特に有効。
                        </p>
                    </div>

                    <h3 id="sec132">
                        1.3.2 テストケースの品質基準 <span className="badge-k">K2</span>
                    </h3>
                    <p>
                        テストケースの品質を軽視すると、高い保守コスト・理解しづらさ・実行遅延を招きます。以下の9つの基準が「保守しやすいテストケース」への第一歩です。
                    </p>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>基準</th>
                                    <th>説明</th>
                                    <th>❌ 悪い例</th>
                                    <th>✅ 良い例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><strong>正確性 (Correctness)</strong></td>
                                    <td>対象のテスト条件を正確に検証できること</td>
                                    <td>検証すべき条件と無関係な手順が混入</td>
                                    <td>テスト条件と1対1で対応する検証手順</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><strong>実行可能性 (Feasibility)</strong></td>
                                    <td>実際に実行可能であること</td>
                                    <td>存在しない画面遷移を前提にした手順</td>
                                    <td>実環境で再現可能な手順のみで構成</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><strong>必要性 (Necessity)</strong></td>
                                    <td>明確なテスト目標を持ち、重複や不要なテストを避ける</td>
                                    <td>同じ条件を検証する重複テストケースが複数存在</td>
                                    <td>タイトル/要約だけで目的が分かり、重複が排除されている</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><strong>理解容易性 (Understandability)</strong></td>
                                    <td>作成者以外も理解できる言語・書式で記述</td>
                                    <td>専門用語や暗黙の前提を説明なく使用</td>
                                    <td>平易な言葉で、複雑なケースは分割して記述</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><strong>トレーサビリティ (Traceability)</strong></td>
                                    <td>テスト条件・要件・リスクへ追跡可能であること</td>
                                    <td>どの要件の検証かが不明</td>
                                    <td>要件ID・リスクIDが明記されている</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><strong>一貫性 (Consistency)</strong></td>
                                    <td>用語・書式・構造が統一されている</td>
                                    <td>同じ概念に異なる用語を使う</td>
                                    <td>プロジェクト共通の用語集(グロッサリー)に準拠</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><strong>精度 (Precision)</strong></td>
                                    <td>解釈が一意であること</td>
                                    <td>「適切に」「必要に応じて」「いくつか」等の曖昧語を使用</td>
                                    <td>具体的な数値・条件で記述(誤検出/検出漏れの防止)</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td><strong>完全性 (Completeness)</strong></td>
                                    <td>必要な属性(テストデータ含む)と明確な期待結果を含む</td>
                                    <td>期待結果の記載が無い、または曖昧</td>
                                    <td>ISO/IEC/IEEE 29119-3 に沿った属性一式+明確な期待結果</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td><strong>簡潔性 (Conciseness)</strong></td>
                                    <td>粒度がテスト条件と対応しており、過不足がない</td>
                                    <td>1つの巨大なテストケースに多数の検証を詰め込む</td>
                                    <td>小さく焦点を絞ったテストケースに分割(原因特定が容易)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout-source">
                        出典:ISTQB® CTAL-TA Syllabus v4.0, Section 1.3.2, p.18 —{' '}
                        <a
                            href="https://astqb.org/assets/documents/ISTQB-CTAL-TA-Syllabus-v4.0-EN-4.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            astqb.org (PDF)
                        </a>
                    </div>

                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            テストケースの粒度は「小さく・単一目的」に保つ。1つの失敗が他の検証をブロックしない設計にすることで、原因特定と保守が容易になる。
                        </p>
                    </div>
                    <div className="callout callout-anti">
                        <span className="callout-label">❌ アンチパターン</span>
                        <p>
                            「効率がいいから」という理由で1つのテストケースに多数の検証項目を詰め込むこと。1箇所の失敗で後続の検証が全滅し、原因の切り分けが困難になる。
                        </p>
                    </div>

                    <h3 id="sec133">1.3.3 テスト環境要件 <span className="badge-k">K2</span></h3>
                    <p>
                        <strong>なぜ重要か:</strong>
                        テスト環境の実装品質は、テスト容易性・欠陥検出力・総テストコスト・<strong>テスト結果の信頼性</strong>に直接影響します。理想的なテスト環境は「テスト環境で合格/不合格になった結果が本番でも同じ結果になる」ことを目指す理想像であり、実際にはテストレベル・テストタイプごとに本番環境との類似度と柔軟性のトレードオフを分析し、各テスト環境項目の忠実度と残存する差異を管理していくことが求められます。
                    </p>

                    <p><strong>テスト環境要件を導出する際にTAが分析すべき3つの観点:</strong></p>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_ENVREQ} />
                    </div>

                    <p>
                        <strong>テスト環境項目のカテゴリ:</strong>
                        ハードウェア、ミドルウェア、ソフトウェア、仮想化サービス、ネットワーク、インタフェース、ツール、セキュリティ、構成、会場(venue)
                    </p>

                    <p>
                        <strong>各テスト環境項目が満たすべき5属性(ISO/IEC/IEEE 29119-3準拠):</strong>
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>属性</th>
                                    <th>説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>一意識別子 (unique identifier)</strong></td>
                                    <td>トレーサビリティ確保のため</td>
                                </tr>
                                <tr>
                                    <td><strong>説明 (description)</strong></td>
                                    <td>実装に必要十分な詳細度で記述</td>
                                </tr>
                                <tr>
                                    <td><strong>責任 (responsibility)</strong></td>
                                    <td>誰が用意する責任を持つか</td>
                                </tr>
                                <tr>
                                    <td><strong>必要な期間 (period needed)</strong></td>
                                    <td>いつから・どれくらいの期間必要か</td>
                                </tr>
                                <tr>
                                    <td><strong>忠実度 (fidelity)</strong></td>
                                    <td>本番環境をどの程度再現しているか、または乖離しているか</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        さらに、環境全体としての<strong>セットアップ、バックアップ/リストア、セキュリティ要件、変更可能性、権限・役割</strong>についても要件化が必要です。
                    </p>

                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            冗長な文書化を避けるため、既存のテスト環境を参照(リンク)しつつ、そのテストレベル固有の差分要件のみを追加記述する。図や表で視覚的に整理し、開発者・TTA・ビジネスアナリスト・スポンサー等の関連ステークホルダーにレビュー・承認・更新してもらう。
                        </p>
                    </div>

                    <h3 id="sec134">1.3.4 テストオラクルの決定 <span className="badge-k">K2</span></h3>
                    <p>
                        <strong>定義:</strong>
                        テストオラクルとは、動的テストにおいて「期待結果を判定するための拠り所」です。理想的にはテストベース自体(仕様書等)がオラクルを提供しますが、それが難しい場合は他の手段が必要になります。
                    </p>

                    <p>
                        <strong>テストオラクル問題:</strong>
                        テストベースの品質・完全性やシステム特性によっては、費用対効果の高いオラクルが得られないことがあります。これを「テストオラクル問題」と呼び、主な要因は以下の通りです。
                    </p>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_ORACLE} />
                    </div>

                    <p><strong>5つの解決策:</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>解決策</th>
                                    <th>概要</th>
                                    <th>適した場面</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>① 疑似オラクル (pseudo-oracle)</strong></td>
                                    <td>
                                        同じ仕様を満たす独立開発システム(レガシーシステムや簡易版など)で結果を照合
                                    </td>
                                    <td>クリティカルシステムでのコスト許容時</td>
                                </tr>
                                <tr>
                                    <td><strong>② モデルベーステスト</strong></td>
                                    <td>
                                        テストモデルの一部としてオラクルを形式化し、期待結果の生成とテスト導出を両立
                                    </td>
                                    <td>
                                        状態遷移など振る舞いベース技法との相性が良い(→3.2.2, 3.2.3)
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>③ プロパティベーステスト</strong></td>
                                    <td>
                                        入力と期待結果の「関係性(プロパティ)」を検証。関係が破られたら失敗
                                    </td>
                                    <td>
                                        自動化と相性が良いが、有効な関係の特定が難しい場合がある
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>④ メタモルフィックテスト</strong></td>
                                    <td>
                                        入力の変化が結果にどう反映されるべきかという関係(MR)を使う(→3.3.2)
                                    </td>
                                    <td>
                                        AIベースシステム等、費用対効果の高いオラクルを得にくい場合に有効
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>⑤ 人間オラクル</strong></td>
                                    <td>人の経験・知識で期待結果を判定</td>
                                    <td>
                                        探索的テストなど。コストが高く希少なリソースである点に注意
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        <strong>アサーション(assertions):</strong>
                        テスト自動化コードやテスト対象自体に組み込まれる実行可能な検証文で、自動化されたオラクルの実装手段の一つです。テスト対象に組み込む場合は通常、タスク続行に必要な最小限の検証にとどめます。
                    </p>

                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            AIベースシステムや非決定的なシステムをテストする場合、従来型の「厳密な期待値との一致」オラクルに固執せず、メタモルフィックテストやプロパティベーステストのような「関係性」でオラクル問題を回避する設計を検討する。
                        </p>
                    </div>

                    <h3 id="sec135">1.3.5 テストデータ要件 <span className="badge-k">K2</span></h3>
                    <p>
                        <strong>定義:</strong>
                        テスト設計時にTAが特定・要求するデータで、その目的・形式・利用文脈まで考慮する必要があります(ISO/IEC/IEEE 29119-3, 8.5節も参照)。
                    </p>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>考慮事項</th>
                                    <th>ポイント</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><strong>本番データとの類似性</strong></td>
                                    <td>
                                        本番データは現実性が高いが多様性に欠けることがある。合成(シンセティック)データは変動性を制御しやすいが、本番データパターン・分布・外れ値を反映する必要がある。ペルソナの活用で現実的なユーザーシナリオを反映しやすくなる
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><strong>機密性</strong></td>
                                    <td>
                                        個人情報等の機密データは保護が必要。<strong>仮名化(pseudonymization)</strong>は識別子を人工的なものに置換、<strong>匿名化(anonymization)</strong>は識別情報自体を除去する。GDPR(EU)、HIPAA(米国)等の規制順守が必要な場合がある
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><strong>目的</strong></td>
                                    <td>
                                        前提条件・期待結果に影響するデータ(システム日時、ユーザー権限、製品/部門/カテゴリ間の関係など)
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><strong>カバレッジ基準</strong></td>
                                    <td>
                                        選択した技法のカバレッジ基準に整合させる。有効データだけでなく、ネガティブテスト用の無効データも必要
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><strong>データ形式</strong></td>
                                    <td>
                                        API テストなどでは CSV, JSON, XML, DB など構造化データが必要になることがある
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><strong>トレーサビリティ</strong></td>
                                    <td>テストケース変更時にテストデータの保守性を確保するため</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><strong>保守性</strong></td>
                                    <td>
                                        ローレベルテストケースへのハードコードは避け、テストロジックとテストデータを分離する(→1.3.2)
                                    </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td><strong>依存関係</strong></td>
                                    <td>依存データの作成には一連の手順が必要になる</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td><strong>可用性</strong></td>
                                    <td>
                                        サービス仮想化により、欠落/アクセス不能な外部サービスをシミュレートできる
                                    </td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td><strong>時間的感度・データの経年変化</strong></td>
                                    <td>
                                        古い/時間依存のデータがシステム挙動に予期せぬ影響を与える可能性がある
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout-source">
                        出典:ISTQB® CTAL-TA Syllabus v4.0, Section 1.3.5, p.20–21 —{' '}
                        <a
                            href="https://astqb.org/assets/documents/ISTQB-CTAL-TA-Syllabus-v4.0-EN-4.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            astqb.org (PDF)
                        </a>
                    </div>

                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            テストロジック(テストケースの手順)とテストデータを分離して管理する。データをテストケース本体にハードコードすると、データ変更のたびに多数のテストケースを修正する必要が生じ、保守コストが跳ね上がる。
                        </p>
                    </div>
                    <div className="callout callout-anti">
                        <span className="callout-label">❌ アンチパターン</span>
                        <p>
                            機密データを匿名化・仮名化せずにそのままテスト環境へコピーすること。GDPR/HIPAA等の規制違反リスクを負う。
                        </p>
                    </div>

                    <h3 id="sec136">
                        1.3.6 キーワード駆動テストによるテストスクリプト開発
                        <span className="badge-k">K3</span>
                    </h3>
                    <p>
                        <strong>定義:</strong>
                        キーワード駆動テストでは、TAが<strong>キーワード</strong>を用いてテストスクリプトを作成します(実装自体はTTA・TAE・開発者の役割)。
                    </p>

                    <p><strong>キーワードの2分類:</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>種別</th>
                                    <th>説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>アクションキーワード</strong></td>
                                    <td>
                                        テスト対象との対話(機能実行、データ送信、画面遷移)、テスト環境の操作(設定、シミュレータ起動)、他システムとの連携(インタフェース呼び出し)を行う
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>検証キーワード</strong></td>
                                    <td>
                                        テスト対象の実測結果が期待結果と一致するかを評価するアサーションを表す
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p><strong>キーワードの抽象化レイヤー:</strong></p>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_KEYWORD} />
                    </div>

                    <ul>
                        <li>
                            キーワードは<strong>アトミック(単一動作)</strong>または<strong>コンポジット(他のキーワードの組み合わせ)</strong>になり得る。構造(atomic/composite)と抽象化レイヤーは独立した属性だが、実務上コンポジットは上位レイヤーに、アトミックはインタフェース層に位置する傾向がある。
                        </li>
                        <li>中間レイヤーを追加することで保守性を高められる。</li>
                    </ul>

                    <p><strong>キーワード設計時にTAが行うタスク:</strong></p>
                    <ol>
                        <li>キーワードとそのパラメータの仕様化</li>
                        <li>キーワードテストケース(キーワードを使ったテストスクリプト)の仕様化</li>
                        <li>
                            前提条件・検証アクション・環境クリーンアップ等の追加ステップの仕様化
                        </li>
                        <li>テスト対象の変更を反映したキーワードテストケースの保守</li>
                        <li>キーワードテストスクリプトの実行(自動・手動問わず)</li>
                        <li>失敗したキーワードテストケースの原因分析</li>
                    </ol>

                    <p><strong>良いキーワードの6条件:</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>条件</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>動詞(+名詞)を含む</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>動詞(+名詞)は命令形を使う</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>意味が一意である</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>適切に文書化されている</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>アプリケーションドメインの語彙を反映している</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>再利用可能である</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            キーワードはプロジェクトを通じて変化しやすく、冗長に定義されがちである。命名規則(上記6条件)を徹底し、既存キーワードの棚卸しを定期的に行うことで、重複キーワードの氾濫と保守コスト増大を防ぐ。
                        </p>
                    </div>
                    <div className="callout callout-anti">
                        <span className="callout-label">❌ アンチパターン</span>
                        <p>
                            名詞のみ、または技術用語のみのキーワード(例:<code>ClickButton3</code>)を作ること。ドメイン語彙を反映しておらず、非技術者のレビューアが理解できない。
                        </p>
                    </div>

                    <h3 id="sec137">
                        1.3.7 テストウェア管理に使うツール <span className="badge-k">K2</span>
                    </h3>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_TOOLS} />
                    </div>

                    <p><strong>TAがテストウェア管理を支援するための具体的な活動:</strong></p>
                    <ul>
                        <li>
                            プロジェクト/リリースを分析し、SUTのバージョンに対応する正しいテストウェアの部分集合を選定する
                        </li>
                        <li>
                            機能別(featureやモジュール単位)または技術別(テストタイプや環境単位)の構造をテスト管理ツール内に定義する
                        </li>
                        <li>
                            テストケースにメタデータを付与する(実行工数、必要な特定のテスト環境など)
                        </li>
                        <li>
                            要件・テスト条件・テスト・テスト実行・欠陥間のトレーサビリティを確保する
                        </li>
                        <li>回帰テスト用の正しいテストスイートを選定する(手動/自動問わず)</li>
                        <li>テストケースの構成管理(陳腐化したテストケースの識別を含む)を行う</li>
                    </ul>

                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            テスト管理ツールの構造は「機能別」と「技術別」のどちらか一方に固定せず、プロジェクトの性質に応じて選択・併用する。陳腐化したテストケースを定期的に棚卸しし、構成管理の一部として除外/更新する仕組みを運用に組み込む。
                        </p>
                    </div>
                </section>

                {/* 章末チェックリスト */}
                <section id="checklist">
                    <h2>章末チェックリスト</h2>
                    <Checklist />
                </section>

                {/* 参考文献・出典 */}
                <section id="references">
                    <h2>参考文献・出典(References)</h2>

                    <h3 style={{ marginTop: '20px' }}>公式一次情報</h3>
                    <div className="ref-grid">
                        <div className="ref-card">
                            <div className="ref-cat">公式試験ページ</div>
                            <a
                                href="https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ISTQB&reg; Certified Tester Advanced Level &ndash; Test Analyst (CTAL-TA) v4.0
                            </a>
                        </div>
                        <div className="ref-card">
                            <div className="ref-cat">シラバス本体(第1章の一次ソース)</div>
                            <a
                                href="https://astqb.org/assets/documents/ISTQB-CTAL-TA-Syllabus-v4.0-EN-4.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ISTQB&reg; CTAL-TA Syllabus v4.0(PDF、全77ページ)
                            </a>
                        </div>
                        <div className="ref-card">
                            <div className="ref-cat">用語集</div>
                            <a href="https://glossary.istqb.org/" target="_blank" rel="noopener noreferrer">
                                ISTQB&reg; Glossary(公式オンライン用語集)
                            </a>
                        </div>
                        <div className="ref-card">
                            <div className="ref-cat">よくある質問</div>
                            <a
                                href="https://istqb.org/help/test-analyst/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Advanced Level Test Analyst v4.0 &mdash; 移行に関するFAQ
                            </a>
                        </div>
                    </div>

                    <h3>シラバス内で参照されている規格・関連文書</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>規格/文書</th>
                                    <th>関連箇所</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ISO/IEC/IEEE 29119-3:2021(テストドキュメンテーション)</td>
                                    <td>
                                        1.3.2(テストケース属性)、1.3.3(テスト環境要件)、1.3.5(テストデータ要件)
                                    </td>
                                </tr>
                                <tr>
                                    <td>ISTQB&reg; Foundation Level Syllabus v4.0.1 (ISTQB-CTFL)</td>
                                    <td>
                                        1.2(7つのテスト活動の定義の前提)、2.1/2.2(リスクベーステストの前提)
                                    </td>
                                </tr>
                                <tr>
                                    <td>GDPR(EU一般データ保護規則, 2016)</td>
                                    <td>1.3.5(機密データの取り扱い)</td>
                                </tr>
                                <tr>
                                    <td>HIPAA(米国医療保険の携行性と責任に関する法律)</td>
                                    <td>1.3.5(機密データの取り扱い、米国基準)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="footer-note">
                        <strong>免責事項:</strong> 本ガイドはISTQB&reg; CTAL-TA
                        v4.0シラバスの内容を、学習者の理解を助ける目的で独自に要約・再構成・翻訳し、図解(Mermaid)や表形式を追加したものです。正確な出題範囲・正式な定義は必ず上記の公式シラバスPDFおよびISTQB&reg;
                        Glossaryで確認してください。シラバスの著作権は International Software Testing
                        Qualifications Board (ISTQB&reg;) に帰属します。
                    </div>
                </section>
            </main>
        </div>
    );
}
