import './istqb-ctal-ta-chapter1-test-process.css';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';

export const DIAGRAM_OVERVIEW = `flowchart LR
    subgraph CH1["第1章の3本柱"]
        direction TB
        P1["1.1 SDLCにおけるテスト<br/>開発モデルごとの関わり方"]
        P2["1.2 テスト活動への関与<br/>分析・設計・実装・実行"]
        P3["1.3 成果物に関するタスク<br/>5つの成果物と管理ツール"]
    end
    P1 --> P2 --> P3

    classDef pillar fill:#dbeafe,stroke:#2563eb,color:#1e3a5f,stroke-width:2px
    class P1,P2,P3 pillar`;

export const DIAGRAM_SDLC = `flowchart TB
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

export const DIAGRAM_PROCESS = `flowchart LR
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

export const DIAGRAM_ENTRY = `flowchart TD
    Entry{"テスト分析のエントリ基準"} --> C1["✔ テスト計画が完了し、<br/>スコープ・目的・アプローチが明確"]
    Entry --> C2["✔ テストベースが定義済み"]
    Entry --> C3["✔ 既知のプロダクトリスクが<br/>評価・文書化済み"]

    classDef cond fill:#eff6ff,stroke:#2563eb,color:#1e3a5f
    class C1,C2,C3 cond`;

export const DIAGRAM_ANALYSIS_FLOW = `flowchart TD
    Eval["テストベースを評価し<br/>欠陥を検出・テスト容易性を評価"] --> Model["必要に応じてシステム挙動をモデル化<br/>+ レビュー技法を適用"]
    Model --> Oracle["テストオラクルを決定<br/>(→1.3.4)"]
    Model --> Cond["テスト条件を定義・優先順位付け<br/>(プロダクトリスクを考慮)"]
    Cond --> Stage1["段階1: 高レベルの条件<br/>例:「画面Xの機能」"]
    Stage1 --> Stage2["段階2: 詳細な条件<br/>例:「画面Xは1桁短い口座番号を拒否する」"]
    Stage2 --> Review["ステークホルダーと<br/>テスト条件をレビュー"]

    classDef step fill:#dbeafe,stroke:#2563eb,color:#1e3a5f
    class Eval,Model,Oracle,Cond,Stage1,Stage2,Review step`;

export const DIAGRAM_ENV3 = `flowchart LR
    E1["① テスト対象の欠陥を<br/>正しく検出できる"] --- E2["② 障害が無いときは<br/>正常に動作する"] --- E3["③ 必要に応じて本番/<br/>エンドユーザー環境を<br/>十分に模倣する"]

    classDef envFill fill:#dbeafe,stroke:#2563eb,color:#1e3a5f
    class E1,E2,E3 envFill`;

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

                    <h4>定義</h4>
                    <p>
                        SDLC(ソフトウェア開発ライフサイクル)の型によって、開発活動の組み立て方が異なるため、<strong>TAがテストプロセスの中でいつ・何を担当するかも変化します</strong>。CTAL-TAでは、SDLCを大きく3種類に分類し、それぞれにおけるTAの関わり方を整理しています。
                    </p>

                    <h4>なぜ重要か(理由)</h4>
                    <p>
                        同じ「テスト分析」というタスクでも、ウォーターフォール型では一度きりの大きな塊として発生するのに対し、アジャイル型では毎スプリント短いサイクルで繰り返し発生します。この違いを理解していないと、プロジェクトに応じた適切なテスト計画・見積もり・体制を提案できません。
                    </p>

                    <h4>3つのSDLCモデルの比較</h4>
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
            </main>
        </div>
    );
}
