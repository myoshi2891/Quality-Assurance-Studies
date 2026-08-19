import React from 'react';
import type { Metadata } from 'next';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './istqb-ctfl-v4-chapter5-test-management.css';

export const metadata: Metadata = {
    title: 'ISTQB CTFL v4.0 Chapter 5 | テスト活動の管理 (Managing the Test Activities)',
    description: 'ISTQB CTFL v4.0.1 Chapter 5 テスト活動の管理 完全解説ガイド。テスト計画、見積り技法、リスクマネジメント、モニタリングとコントロール、構成管理、欠陥管理を徹底網羅。',
};

const DIAGRAM_0 = `flowchart LR
subgraph MGMT["Chapter 5 管理系アクティビティ"]
direction TB
A["5.1 テスト計画"]
B["5.2 リスクマネジメント"]
C["5.3 モニタリング・コントロール・完了"]
end
subgraph CORE["Chapter 4 実行系アクティビティ"]
direction TB
D["テスト分析"]
E["テスト設計"]
F["テスト実装"]
G["テスト実行"]
end
subgraph SUPPORT["Chapter 5 横断的な支援活動"]
direction TB
H["5.4 構成管理"]
I["5.5 欠陥管理"]
end
A --> D
B -. "リスクベースの優先順位付け" .-> D
D --> E --> F --> G
C -. "進捗を監視し指示を出す" .-> D
C -. "進捗を監視し指示を出す" .-> G
G -. "欠陥を記録" .-> I
D -. "成果物を版管理" .-> H
E -. "成果物を版管理" .-> H
F -. "成果物を版管理" .-> H
G -. "成果物を版管理" .-> H
G --> C`;

const DIAGRAM_1 = `flowchart TD
A["テストポリシー<br/>Test Policy<br/>組織全体の基本方針"] --> B["テスト戦略<br/>Test Strategy<br/>製品や組織レベルの一般的アプローチ"]
B --> C["テスト計画<br/>Test Plan<br/>プロジェクトやリリース、<br/>イテレーション固有の具体計画"]
C --> D["日々のテスト実行<br/>Daily Test Execution"]`;

const DIAGRAM_2 = `flowchart LR
A(["前工程が完了"]) --> B{"エントリー基準<br/>Definition of Ready<br/>を満たすか?"}
B -- "No" --> A
B -- "Yes" --> C["テスト活動を開始"]
C --> D["テスト分析・設計・実装・実行"]
D --> E{"終了基準<br/>Definition of Done<br/>を満たすか?"}
E -- "No" --> D
E -- "Yesまたは時間や予算切れで<br/>ステークホルダー承認" --> F(["テスト活動を終了"])`;

const DIAGRAM_3 = `flowchart TB
subgraph PYRAMID["テストピラミッド"]
direction TB
UI["UIテスト・E2Eテスト<br/>少数・低速・高コスト<br/>大きな機能のまとまりを検証"]
SVC["サービステスト・結合テスト<br/>中程度の数・中速度<br/>コンポーネント間の連携を検証"]
UNIT["ユニットテスト・コンポーネントテスト<br/>多数・高速・低コスト<br/>個々の関数やクラスを検証"]
end
UNIT --> SVC --> UI`;

const DIAGRAM_4 = `flowchart TB
subgraph Q["テスト象限 Testing Quadrants"]
direction TB
subgraph ROW1[" "]
direction LR
Q2["Q2 ビジネス志向・チーム支援<br/>機能テスト・ユーザーストーリーテスト・<br/>UXプロトタイプ・APIテスト<br/>手動と自動の両方で受入基準を検証"]
Q1["Q1 テクノロジー志向・チーム支援<br/>コンポーネントテスト・<br/>コンポーネント結合テスト<br/>自動化しCIに組み込む"]
end
subgraph ROW2[" "]
direction LR
Q3["Q3 ビジネス志向・プロダクト批評<br/>探索的テスト・ユーザビリティテスト・<br/>受入テスト<br/>ユーザー志向で多くは手動"]
Q4["Q4 テクノロジー志向・プロダクト批評<br/>性能・負荷・ストレス・スケーラビリティ・<br/>セキュリティ・互換性テスト"]
end
end`;

const DIAGRAM_5 = `flowchart LR
subgraph ANALYSIS["リスク分析 Risk Analysis"]
A1["リスク識別<br/>Risk Identification"] --> A2["リスクアセスメント<br/>Risk Assessment<br/>発生確率×影響度"]
end
subgraph CONTROL["リスク制御 Risk Control"]
C1["リスク軽減<br/>Risk Mitigation"]
C2["リスクモニタリング<br/>Risk Monitoring"]
end
ANALYSIS --> CONTROL
C2 -. "新たなリスクの発見・再評価" .-> ANALYSIS
CONTROL --> RBT(["リスクベーステスト<br/>Risk-based Testing"])`;

const DIAGRAM_6 = `flowchart LR
A["テスト実行"] --> B["テストモニタリング<br/>メトリクス収集"]
B --> C{"終了基準や目標に<br/>対して十分か?"}
C -- "不十分" --> D["テストコントロール<br/>是正指示の発行"]
D --> E["優先順位の見直し・<br/>リソース再配分・<br/>スケジュール調整・<br/>基準の見直し"]
E --> A
C -- "十分" --> F["テスト完了<br/>Test Completion"]`;

const DIAGRAM_7 = `flowchart TD
subgraph CM["構成管理 Configuration Management"]
direction TB
R["バージョン管理システム<br/>例えばGit"] --> B1["ベースライン1<br/>リリース1.0時点"]
R --> B2["ベースライン2<br/>リリース1.1時点"]
end
subgraph ITEMS["構成アイテム Configuration Items"]
direction LR
P["テスト計画"]
S["テスト条件・テストケース"]
L["テストログ"]
DR["欠陥レポート"]
RP["テストレポート"]
end
ITEMS --> CM
CM -. "版と対応関係を追跡" .-> TRACE["テストベースと<br/>テスト対象の<br/>トレーサビリティ"]`;

const DIAGRAM_8 = `stateDiagram-v2
[*] --> New: 欠陥を記録しログ登録
New --> Analyzing: トリアージ開始
Analyzing --> Rejected: 再現しない・仕様通り
Analyzing --> Duplicate: 既存の欠陥と重複
Analyzing --> Deferred: 対応を先送り・優先度低のため
Analyzing --> Assigned: 修正対象として承認
Assigned --> Fixed: 開発者が修正完了
Fixed --> ConfirmationTesting: 確認テスト実施
ConfirmationTesting --> Reopened: 再現する・修正が不十分
Reopened --> Assigned
ConfirmationTesting --> Closed: 修正確認OK
Rejected --> [*]
Duplicate --> [*]
Deferred --> Assigned: 後日、優先度が上がり着手
Closed --> [*]`;

export default function CtflV4Chapter5Page() {
    return (
        <div className="ctfl-v4-ch5-page">
            <NavBar />

            <main className="content main">
                <div className="doc-header hero">
                    <div className="kicker">ISTQB® Certified Tester Foundation Level (CTFL) v4.0.1</div>
                    <h1>
                        Chapter 5: テスト活動の管理<br />
                        <span style={{ color: 'var(--text-2)', fontSize: '20px', fontWeight: 400 }}>
                            Managing the Test Activities
                        </span>
                    </h1>
                    <div className="meta-box">
                        <div>
                            <b>対象読者:</b> 中級〜上級のテストエンジニア・テストマネージャー志望者
                        </div>
                        <div>
                            <b>前提知識:</b> Chapter 1(テストの基礎)、Chapter 2(SDLCとテスト)、Chapter 4(テスト分析・設計)の内容
                        </div>
                        <div>
                            <b>学習時間目安:</b> シラバス上 335分
                        </div>
                    </div>
                </div>

                <section id="sec-0">
                    <h2>0. この章の位置づけ</h2>
                    <p>
                        Chapter 5 は CTFL v4.0.1 シラバスの中でも Chapter 4
                        と並んで最大のボリュームを持つ章であり、シラバス上の学習時間は<strong>335分</strong>が割り当てられている。内容は「テストをどう計画し、どう見積もり、どうリスクに基づいて優先順位づけし、どう監視・制御し、どう終了させるか」という、テストという知的活動をプロジェクトとして運営するための実務知識に集中している。
                    </p>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>節</th>
                                    <th>タイトル</th>
                                    <th>中心となる問い</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5.1</td>
                                    <td>
                                        テスト計画<br />
                                        <span style={{ color: 'var(--text-3)' }}>Test Planning</span>
                                    </td>
                                    <td>何を・いつ・誰が・どこまでテストするか</td>
                                </tr>
                                <tr>
                                    <td>5.2</td>
                                    <td>
                                        リスクマネジメント<br />
                                        <span style={{ color: 'var(--text-3)' }}>Risk Management</span>
                                    </td>
                                    <td>どこに、どれだけのテスト労力を割くべきか</td>
                                </tr>
                                <tr>
                                    <td>5.3</td>
                                    <td>テストのモニタリング・コントロール・終了</td>
                                    <td>テストは順調か、いつ終えてよいか</td>
                                </tr>
                                <tr>
                                    <td>5.4</td>
                                    <td>
                                        構成管理<br />
                                        <span style={{ color: 'var(--text-3)' }}>Configuration Management</span>
                                    </td>
                                    <td>テスト成果物をどう版管理し追跡可能にするか</td>
                                </tr>
                                <tr>
                                    <td>5.5</td>
                                    <td>
                                        欠陥管理<br />
                                        <span style={{ color: 'var(--text-3)' }}>Defect Management</span>
                                    </td>
                                    <td>見つかった不具合をどう記録し、収束させるか</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        シラバスの構成は Chapter 1
                        で説明される「テストプロセス」の7つの活動(テスト計画、テストのモニタリングとコントロール、テスト分析、テスト設計、テスト実装、テスト実行、テスト完了)のうち、<strong>テスト分析・設計・実装・実行を除いた「管理系」の活動</strong>を深掘りする章である、という位置づけで読むと理解しやすい。
                    </p>

                    <div className="diagram-card">
                        <div className="diagram-wrap" id="diag-0">
                            <Mermaid chart={DIAGRAM_0} />
                        </div>
                    </div>

                    <div className="source-note">
                        <b>出典:</b>{' '}
                        <a
                            href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ISTQB CTFL Syllabus v4.0.1 公式PDF
                        </a>{' '}
                        /{' '}
                        <a
                            href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ISTQB CTFL v4.0 概要ページ
                        </a>
                    </div>
                </section>

                <hr />

                <section id="sec-1">
                    <h2>
                        1. 5.1 テスト計画{' '}
                        <span style={{ color: 'var(--text-3)', fontWeight: 400, fontSize: '16px' }}>
                            Test Planning
                        </span>
                    </h2>

                    <div id="sec-1-1">
                        <h3>
                            1.1 テスト計画書の目的と内容 <span className="badge badge-purple">5.1.1</span>
                        </h3>
                        <p>
                            テスト計画(test plan)とは、あるテストプロジェクトにおける<strong>目的・リソース・プロセス</strong>を記述したものである。単なる「やることリスト」ではなく、以下の4つの役割を持つ文書として理解するとよい。
                        </p>
                        <ol>
                            <li>
                                <strong>整合性の証明</strong> — テストがテストポリシー(test policy)やテスト戦略(test strategy)にどう準拠するか、あるいは意図的に逸脱する場合はその理由を示す
                            </li>
                            <li>
                                <strong>手段とスケジュールの文書化</strong> — テスト目的をどう・いつ達成するかを明文化する
                            </li>
                            <li>
                                <strong>達成基準の担保</strong> — 実施されたテスト活動が定められた基準(entry / exit criteria)を満たすことを確認する手段となる
                            </li>
                            <li>
                                <strong>コミュニケーション手段</strong> — チームメンバーや他のステークホルダーとの合意形成のベースになる
                            </li>
                        </ol>
                        <p>
                            実務上重要なのは、<strong>テストポリシー → テスト戦略 → テスト計画</strong>という抽象度のヒエラルキーである。テストポリシーは組織全体のテストに対する方針(なぜテストするか)、テスト戦略は製品・組織レベルでの一般的なアプローチ(どう戦略的にテストするか)、テスト計画はプロジェクトや任意のレベルに合わせて具体化したもの(何を・誰が・いつ)である。
                        </p>

                        <div className="diagram-card">
                            <div className="diagram-wrap" id="diag-1">
                                <Mermaid chart={DIAGRAM_1} />
                            </div>
                        </div>

                        <p>一般的にテスト計画には次のような要素が含まれる。</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>構成要素</th>
                                        <th>内容の例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>テストの対象範囲・目的</td>
                                        <td>何を、なぜテストするか</td>
                                    </tr>
                                    <tr>
                                        <td>テストアイテムとテスト対象外の範囲</td>
                                        <td>in-scope / out-of-scope</td>
                                    </tr>
                                    <tr>
                                        <td>テストスケジュール・マイルストーン</td>
                                        <td>いつ、どのテストレベルを実施するか</td>
                                    </tr>
                                    <tr>
                                        <td>エントリー基準・終了基準</td>
                                        <td>1.3節を参照</td>
                                    </tr>
                                    <tr>
                                        <td>リスクレジスタ</td>
                                        <td>2節を参照。テスト計画の一部として持たれることが多い</td>
                                    </tr>
                                    <tr>
                                        <td>役割と責任</td>
                                        <td>誰がテストマネージャーで誰がテスト担当者か</td>
                                    </tr>
                                    <tr>
                                        <td>見積り結果</td>
                                        <td>1.4節を参照</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a
                                href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ISTQB CTFL Syllabus v4.0.1
                            </a>{' '}
                            /{' '}
                            <a href="https://astqb.org/5-1-test-planning/" target="_blank" rel="noopener noreferrer">
                                ASTQB: 5.1 Test Planning
                            </a>
                        </div>
                    </div>

                    <div id="sec-1-2">
                        <h3>
                            1.2 イテレーション計画とリリース計画へのテスト担当者の貢献{' '}
                            <span className="badge badge-purple">5.1.2</span>
                        </h3>
                        <p>
                            反復型のSDLC(Agileなど)では、計画は「リリース計画」と「イテレーション計画」の2階層で行われる。
                        </p>
                        <ul>
                            <li>
                                <strong>リリース計画</strong>(release planning): 複数イテレーションにまたがる大きな単位で、プロダクトの方向性や大まかなリリース内容を扱う
                            </li>
                            <li>
                                <strong>イテレーション計画</strong>(iteration planning): 1回のスプリントに閉じた、より詳細な計画
                            </li>
                        </ul>
                        <p>
                            テスト担当者はここで受け身の実行者ではなく、<strong>能動的な計画への参加者</strong>として価値を発揮する。具体的な貢献は以下の通り。
                        </p>
                        <ul>
                            <li>ユーザーストーリーのリスク識別・リスクアセスメントに参加する</li>
                            <li>ストーリーの優先順位付けに、テスト観点(テスト容易性・リスク)からの意見を提供する</li>
                            <li>タスクの分解と、そのタスクに対するテスト工数の見積りを行う</li>
                            <li>何をテストすべきかについて、詳細化・明確化を支援する</li>
                        </ul>
                        <p>
                            たとえばあるISTQB公式サンプル問題では「テスト担当者はどのようにイテレーション計画やリリース計画に価値を加えるか」という設問に対し、正解は「ユーザーストーリーの詳細なリスク識別とリスクアセスメントに参加すること」とされている。テスト担当者は機能面だけに集中するのではなく、非機能要件や品質特性全般に目を配ることが期待される点に注意したい。
                        </p>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a href="https://astqb.org/5-1-test-planning/" target="_blank" rel="noopener noreferrer">
                                ASTQB: 5.1 Test Planning
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.slideshare.net/slideshow/chapter-5-managing-test-activities-v4-0/269918691"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SlideShare: Chapter 5 - Managing Test Activities V4.0
                            </a>
                        </div>
                    </div>

                    <div id="sec-1-3">
                        <h3>
                            1.3 エントリー基準と終了基準 <span className="badge badge-purple">5.1.3</span>
                        </h3>
                        <p>
                            エントリー基準(entry criteria)と終了基準(exit criteria)は、あるテスト活動やテストレベルの「開始してよい条件」と「終えてよい条件」を明確にするためのゲートである。Agileの文脈では、それぞれ<strong>Definition of Ready (DoR)</strong>と<strong>Definition of Done (DoD)</strong>と呼ばれる。
                        </p>

                        <div className="diagram-card">
                            <div className="diagram-wrap" id="diag-2">
                                <Mermaid chart={DIAGRAM_2} />
                            </div>
                        </div>

                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>エントリー基準(Entry Criteria / DoR)</th>
                                        <th>終了基準(Exit Criteria / DoD)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>目的</td>
                                        <td>開始してよいかの判断材料</td>
                                        <td>完了・十分と言えるかの判断材料</td>
                                    </tr>
                                    <tr>
                                        <td>典型例</td>
                                        <td>
                                            リソース・テスト対象・テスト環境が準備できている、テストデータが利用可能、初期品質レベルが一定水準に達している
                                        </td>
                                        <td>
                                            計画したテストがすべて実行済み、未解決の重大欠陥がない、コード網羅率が目標値に到達、リスクベースの目標が達成されている
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>満たされない場合</td>
                                        <td>該当タスクの難易度・コスト・リスクが増大する</td>
                                        <td>
                                            時間や予算の制約により、ステークホルダーの承認を得た上でテストを終了する場合がある
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            重要なポイントは、終了基準を厳密に「100%満たさなければ絶対に終了できない」ものと誤解しないことである。シラバスは、時間や予算が尽きた場合にステークホルダーの承認を得て妥当な理由でテストを終了することも許容している。これは Chapter 1 の「全数テストは不可能」という原則とも整合する考え方である。
                        </p>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a href="https://astqb.org/5-1-test-planning/" target="_blank" rel="noopener noreferrer">
                                ASTQB: 5.1 Test Planning
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://mam16muk.medium.com/istqb-ctfl-syllabus-uncovered-your-ultimate-guide-vol4-6d23b638e1ca"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Medium: ISTQB CTFL Syllabus Uncovered Vol4
                            </a>
                        </div>
                    </div>

                    <div id="sec-1-4">
                        <h3>
                            1.4 テスト見積り技法 <span className="badge badge-purple">5.1.4</span>
                        </h3>
                        <p>
                            テスト工数の見積り(test estimation)は「このテスト活動を完遂するのにどれだけの作業が必要か」を予測する行為である。シラバスは大きく2つの技法を対比させている。
                        </p>

                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>技法</th>
                                        <th>概要</th>
                                        <th>具体例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>メトリクスベース技法</strong><br />
                                            <span style={{ color: 'var(--text-3)' }}>metrics-based technique</span>
                                        </td>
                                        <td>
                                            過去の類似プロジェクトのメトリクス、または一般的な典型値をもとに見積る
                                        </td>
                                        <td>
                                            Agileにおけるベロシティ・バーンダウンチャート、シーケンシャル開発における欠陥除去モデル
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>エキスパートベース技法</strong><br />
                                            <span style={{ color: 'var(--text-3)' }}>expert-based technique</span>
                                        </td>
                                        <td>タスクの担当者や有識者の経験に基づいて見積る</td>
                                        <td>
                                            Wideband Delphi法、プランニングポーカー、三点見積り(楽観値・悲観値・最頻値)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            また、テスト工数に影響を与える要因(factors influencing the test effort)として、シラバスでは主に以下の3カテゴリが挙げられている。
                        </p>
                        <ul>
                            <li>
                                <strong>プロダクト特性</strong>: 要求仕様の品質、プロダクトサイズ、必要な品質特性の非機能要求の複雑さ、必要なテストデータやテスト環境の複雑さ
                            </li>
                            <li>
                                <strong>プロセス特性</strong>: 採用するテスト戦略、SDLCモデルの成熟度、必要なテストのやり直し(リテスト・回帰テスト)の頻度
                            </li>
                            <li>
                                <strong>人・組織特性</strong>: チームメンバーのスキルレベル、テストツールの習熟度、テスト対象領域に関するドメイン知識
                            </li>
                        </ul>

                        <p>
                            以下は、エキスパートベース技法のひとつである三点見積り(PERT式)を Python で実装した簡単な例である。楽観値・最頻値・悲観値の3点から加重平均で見積り工数を算出する、実務でもよく使われる手法である。
                        </p>

                        <div className="code-block">
                            <div className="code-label">Python — 三点見積り(PERT式)</div>
                            <div className="code-content">
                                <div className="code-line"><span className="code-string">&quot;&quot;&quot;三点見積り(PERT式)によるテスト工数見積りの例。</span></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="code-string">expert-based technique の代表的な実装のひとつ。</span></div>
                                <div className="code-line"><span className="code-string">楽観値(optimistic)・最頻値(most likely)・悲観値(pessimistic)</span></div>
                                <div className="code-line"><span className="code-string">の3値から、ベータ分布を仮定した期待値と標準偏差を算出する。</span></div>
                                <div className="code-line"><span className="code-string">&quot;&quot;&quot;</span></div>
                                <div className="code-line"><span className="code-keyword">from</span> <span className="code-type">dataclasses</span> <span className="code-keyword">import</span> <span className="code-type">dataclass</span></div>
                                <div className="code-line"></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="code-decorator">@dataclass</span></div>
                                <div className="code-line"><span className="code-keyword">class</span> <span className="code-type">ThreePointEstimate</span>:</div>
                                <div className="code-line">    <span className="code-variable">optimistic</span>: <span className="code-type">float</span>       <span className="code-comment"># 楽観値(順調に進んだ場合の工数[人日])</span></div>
                                <div className="code-line">    <span className="code-variable">most_likely</span>: <span className="code-type">float</span>      <span className="code-comment"># 最頻値(最も起こりうる工数[人日])</span></div>
                                <div className="code-line">    <span className="code-variable">pessimistic</span>: <span className="code-type">float</span>      <span className="code-comment"># 悲観値(問題が発生した場合の工数[人日])</span></div>
                                <div className="code-line"></div>
                                <div className="code-line">    <span className="code-keyword">def</span> <span className="code-func">expected_effort</span>(<span className="code-variable">self</span>) -&gt; <span className="code-type">float</span>:</div>
                                <div className="code-line">        <span className="code-string">&quot;&quot;&quot;PERT式の期待値: (楽観 + 4*最頻 + 悲観) / 6&quot;&quot;&quot;</span></div>
                                <div className="code-line">        <span className="code-keyword">return</span> (<span className="code-variable">self</span>.<span className="code-variable">optimistic</span> <span className="code-op">+</span> <span className="code-number">4</span> <span className="code-op">*</span> <span className="code-variable">self</span>.<span className="code-variable">most_likely</span> <span className="code-op">+</span> <span className="code-variable">self</span>.<span className="code-variable">pessimistic</span>) <span className="code-op">/</span> <span className="code-number">6</span></div>
                                <div className="code-line"></div>
                                <div className="code-line">    <span className="code-keyword">def</span> <span className="code-func">standard_deviation</span>(<span className="code-variable">self</span>) -&gt; <span className="code-type">float</span>:</div>
                                <div className="code-line">        <span className="code-string">&quot;&quot;&quot;ばらつきの目安: (悲観 - 楽観) / 6&quot;&quot;&quot;</span></div>
                                <div className="code-line">        <span className="code-keyword">return</span> (<span className="code-variable">self</span>.<span className="code-variable">pessimistic</span> <span className="code-op">-</span> <span className="code-variable">self</span>.<span className="code-variable">optimistic</span>) <span className="code-op">/</span> <span className="code-number">6</span></div>
                                <div className="code-line"></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="code-keyword">def</span> <span className="code-func">test_expected_effort_matches_pert_formula</span>():</div>
                                <div className="code-line">    <span className="code-string">&quot;&quot;&quot;回帰テストAPIの見積り: 楽観3日、最頻5日、悲観9日のケース&quot;&quot;&quot;</span></div>
                                <div className="code-line">    <span className="code-variable">estimate</span> <span className="code-op">=</span> <span className="code-type">ThreePointEstimate</span>(<span className="code-variable">optimistic</span><span className="code-op">=</span><span className="code-number">3</span>, <span className="code-variable">most_likely</span><span className="code-op">=</span><span className="code-number">5</span>, <span className="code-variable">pessimistic</span><span className="code-op">=</span><span className="code-number">9</span>)</div>
                                <div className="code-line"></div>
                                <div className="code-line">    <span className="code-variable">expected</span> <span className="code-op">=</span> <span className="code-variable">estimate</span>.<span className="code-func">expected_effort</span>()</div>
                                <div className="code-line">    <span className="code-variable">stddev</span> <span className="code-op">=</span> <span className="code-variable">estimate</span>.<span className="code-func">standard_deviation</span>()</div>
                                <div className="code-line"></div>
                                <div className="code-line">    <span className="code-keyword">assert</span> <span className="code-variable">expected</span> <span className="code-op">==</span> <span className="code-number">5.333333333333333</span>  <span className="code-comment"># (3 + 20 + 9) / 6</span></div>
                                <div className="code-line">    <span className="code-keyword">assert</span> <span className="code-func">round</span>(<span className="code-variable">stddev</span>, <span className="code-number">2</span>) <span className="code-op">==</span> <span className="code-number">1.0</span></div>
                            </div>
                        </div>

                        <p>
                            この例のように、エキスパートベースの見積りであっても計算ロジック自体は定量的に再現可能な形で実装しておくと、見積り根拠をレビュー・トレーサビリティの対象にできる点が実務上のメリットである。
                        </p>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a
                                href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ISTQB CTFL Syllabus v4.0.1
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.ultra.guide/bin/view/Testing/LearningObjectivesISTQB"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ultra.guide: ISTQB Foundation Learning Objectives
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://cania-consulting.com/2019/10/12/a-test-manager-guide-to-estimating-the-test-effort/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Cania Consulting: A Test Manager Guide to Estimating the Test Effort
                            </a>
                        </div>
                    </div>

                    <div id="sec-1-5">
                        <h3>
                            1.5 テストケースの優先順位付け <span className="badge badge-purple">5.1.5</span>
                        </h3>
                        <p>
                            テストケース・テスト手順は、テストスイートにまとめられ、実行順序を定めた<strong>テスト実行スケジュール</strong>として組まれる。優先順位付けの代表的な戦略は以下の3つである。
                        </p>

                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>戦略</th>
                                        <th>優先順位の基準</th>
                                        <th>想定される利用場面</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            リスクベース<br />
                                            <span style={{ color: 'var(--text-3)' }}>Risk-based</span>
                                        </td>
                                        <td>特定されたリスクの高いものから実行</td>
                                        <td>限られた時間で最も重大な欠陥を早期に検出したい場合</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            カバレッジベース<br />
                                            <span style={{ color: 'var(--text-3)' }}>Coverage-based</span>
                                        </td>
                                        <td>
                                            高いカバレッジ(例: ステートメントカバレッジ)を達成するテストから実行
                                        </td>
                                        <td>網羅率の目標達成を優先したい場合</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            要求ベース<br />
                                            <span style={{ color: 'var(--text-3)' }}>Requirements-based</span>
                                        </td>
                                        <td>ステークホルダーが定義した要求の優先度順に実行</td>
                                        <td>ビジネス上重要な機能から確認したい場合</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            理想的には優先度順に実行するが、<strong>依存関係</strong>(高優先度のテストが低優先度のテストの前提条件になっている場合は先に低優先度のテストを実行する必要がある)や<strong>リソースの制約</strong>も加味しなければならない、という点が実務・試験の両方で問われやすいポイントである。
                        </p>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a href="https://astqb.org/5-1-test-planning/" target="_blank" rel="noopener noreferrer">
                                ASTQB: 5.1 Test Planning
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://mam16muk.medium.com/istqb-ctfl-syllabus-uncovered-your-ultimate-guide-vol4-6d23b638e1ca"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Medium: ISTQB CTFL Syllabus Uncovered Vol4
                            </a>
                        </div>
                    </div>

                    <div id="sec-1-6">
                        <h3>
                            1.6 テストピラミッド <span className="badge badge-purple">5.1.6</span>
                        </h3>
                        <p>
                            テストピラミッド(test pyramid)は、テストの粒度(granularity)によって異なる層があることを示すモデルであり、<strong>下層ほどテスト数が多く・高速・安価</strong>、<strong>上層ほどテスト数が少なく・低速・高価</strong>という関係を表す。このモデルはテスト自動化やテスト工数配分の指針として使われる。
                        </p>

                        <div className="diagram-card">
                            <div className="diagram-wrap" id="diag-3">
                                <Mermaid chart={DIAGRAM_3} />
                            </div>
                        </div>

                        <p>
                            シラバスでは、層の名称や数はモデルによって異なることが明示されている。原型となったモデルでは「unit tests」「service tests」「UI tests」の3層だが、「unit(component)tests」「integration(component integration)tests」「end-to-end tests」とする別モデルも一般的であり、他のテストレベルを使う場合もある。<strong>「決まった名前を暗記する」よりも「下ほど多く・速く・安く、上ほど少なく・遅く・高い」という構造原理を理解する</strong>ことが重要である。
                        </p>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a href="https://astqb.org/5-1-test-planning/" target="_blank" rel="noopener noreferrer">
                                ASTQB: 5.1 Test Planning
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.slideshare.net/slideshow/chapter-5-managing-test-activities-v4-0/269918691"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SlideShare: Chapter 5 - Managing Test Activities V4.0
                            </a>
                        </div>
                    </div>

                    <div id="sec-1-7">
                        <h3>
                            1.7 テスト象限(Testing Quadrants) <span className="badge badge-purple">5.1.7</span>
                        </h3>
                        <p>
                            テスト象限(testing quadrants、Brian Marick が提唱)は、Agile開発における<strong>テストレベル・テストタイプ・活動・技法・成果物</strong>を、2つの軸で整理するモデルである。
                        </p>
                        <ul>
                            <li>
                                縦軸: <strong>テクノロジー志向</strong>(technology-facing)か<strong>ビジネス志向</strong>(business-facing)か
                            </li>
                            <li>
                                横軸: <strong>チームを支援する</strong>(support the team)か<strong>プロダクトを批評する</strong>(critique the product)か
                            </li>
                        </ul>

                        <div className="diagram-card">
                            <div className="diagram-wrap" id="diag-4">
                                <Mermaid chart={DIAGRAM_4} />
                            </div>
                        </div>

                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>象限</th>
                                        <th>志向</th>
                                        <th>目的</th>
                                        <th>代表的なテストタイプ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Q1</td>
                                        <td>テクノロジー志向・チーム支援</td>
                                        <td>開発を導く</td>
                                        <td>
                                            コンポーネントテスト、コンポーネント結合テスト(CIで自動実行)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Q2</td>
                                        <td>ビジネス志向・チーム支援</td>
                                        <td>開発を導く</td>
                                        <td>
                                            機能テスト、ユーザーストーリーテスト、APIテスト、UXプロトタイプ
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Q3</td>
                                        <td>ビジネス志向・プロダクト批評</td>
                                        <td>完成品を検証する</td>
                                        <td>探索的テスト、ユーザビリティテスト、受入テスト</td>
                                    </tr>
                                    <tr>
                                        <td>Q4</td>
                                        <td>テクノロジー志向・プロダクト批評</td>
                                        <td>完成品を検証する</td>
                                        <td>
                                            性能・負荷・ストレス・セキュリティ・互換性・データ移行テスト
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            象限は実行順序を示すものではなく、あくまで<strong>分類のための地図</strong>である点に注意したい。プロジェクトによっては Q4(性能テスト)から着手することもあれば、要求が固まっていない場合に Q3(探索的テスト)のスパイクから始めることもある。
                        </p>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a href="https://astqb.org/5-1-test-planning/" target="_blank" rel="noopener noreferrer">
                                ASTQB: 5.1 Test Planning
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.slideshare.net/slideshow/chapter-5-managing-test-activities-v4-0/269918691"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SlideShare: Chapter 5
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Lisa Crispin: Using the Agile Testing Quadrants
                            </a>
                        </div>
                    </div>
                </section>

                <hr />

                <section id="sec-2">
                    <h2>
                        2. 5.2 リスクマネジメント{' '}
                        <span style={{ color: 'var(--text-3)', fontWeight: 400, fontSize: '16px' }}>
                            Risk Management
                        </span>
                    </h2>

                    <div id="sec-2-1">
                        <h3>
                            2.1 リスクの定義とリスク属性 <span className="badge badge-teal">5.2.1</span>
                        </h3>
                        <p>
                            ISO 31000 の考え方に基づき、シラバスはリスクを「発生すると好ましくない影響をもたらす可能性のある事象・脅威・状況」と定義する。リスクは次の2つの属性の組み合わせで特徴づけられる。
                        </p>
                        <ul>
                            <li>
                                <strong>リスク発生確率</strong>(risk likelihood): そのリスクが実際に発生する確率
                            </li>
                            <li>
                                <strong>リスク影響度</strong>(risk impact): そのリスクが発生した場合の被害の大きさ(損害)
                            </li>
                        </ul>
                        <p>
                            リスクレベルは、この2つを組み合わせて算出される。一般的には次のような簡易マトリクスで表現される。
                        </p>

                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>発生確率 ＼ 影響度</th>
                                        <th>低</th>
                                        <th>中</th>
                                        <th>高</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>高</strong></td>
                                        <td>中リスク</td>
                                        <td>高リスク</td>
                                        <td>最高リスク</td>
                                    </tr>
                                    <tr>
                                        <td><strong>中</strong></td>
                                        <td>低リスク</td>
                                        <td>中リスク</td>
                                        <td>高リスク</td>
                                    </tr>
                                    <tr>
                                        <td><strong>低</strong></td>
                                        <td>最低リスク</td>
                                        <td>低リスク</td>
                                        <td>中リスク</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>リスクマネジメントの活動は大きく2つに分類される。</p>
                        <ul>
                            <li>
                                <strong>リスク分析</strong>(risk analysis): リスク識別(risk identification) + リスクアセスメント(risk assessment)
                            </li>
                            <li>
                                <strong>リスク制御</strong>(risk control): リスク軽減(risk mitigation) + リスクモニタリング(risk monitoring)
                            </li>
                        </ul>
                        <p>
                            このリスク分析とリスク制御に基づいてテスト活動を選択・優先順位付け・管理するアプローチを<strong>リスクベーステスト</strong>(risk-based testing)と呼ぶ。
                        </p>

                        <div className="diagram-card">
                            <div className="diagram-wrap" id="diag-5">
                                <Mermaid chart={DIAGRAM_5} />
                            </div>
                        </div>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a href="https://astqb.org/5-2-risk-management/" target="_blank" rel="noopener noreferrer">
                                ASTQB: 5.2 Risk Management
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.slideshare.net/slideshow/chapter-5-managing-test-activities-v4-0/269918691"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SlideShare: Chapter 5
                            </a>
                        </div>
                    </div>

                    <div id="sec-2-2">
                        <h3>
                            2.2 プロジェクトリスクとプロダクトリスク{' '}
                            <span className="badge badge-teal">5.2.2</span>
                        </h3>
                        <p>
                            CTFLでは、リスクは大きく2種類に分類される。この区別は試験でも頻出であり、実務上も「誰が」「何に対して」対応すべきかを判断する基準になる。
                        </p>

                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>種類</th>
                                        <th>定義</th>
                                        <th>具体例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>プロジェクトリスク</strong><br />
                                            <span style={{ color: 'var(--text-3)' }}>project risk</span>
                                        </td>
                                        <td>プロジェクトが目標を達成する能力に影響を与えるリスク</td>
                                        <td>
                                            組織要因(スキル・人員不足、トレーニング不足)、技術的問題(要求の曖昧さ、環境の未整備)、サプライヤーの問題(第三者製品の遅延、契約上の問題)、スケジュールや予算の逼迫
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>プロダクトリスク</strong><br />
                                            <span style={{ color: 'var(--text-3)' }}>product risk</span>
                                        </td>
                                        <td>プロダクトの品質そのものに影響を与えるリスク</td>
                                        <td>
                                            機能不全(不十分・不正確な機能)、非機能面の問題(性能不足・セキュリティ脆弱性・信頼性の低さ・ユーザビリティの悪さ)、データの完全性・移行の問題
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            プロジェクトリスクは主にテストマネージャーやプロジェクトマネージャーが対処し、プロダクトリスクはテスト活動そのものによって軽減される、という役割分担のイメージを持つと理解しやすい。
                        </p>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a href="https://astqb.org/5-2-risk-management/" target="_blank" rel="noopener noreferrer">
                                ASTQB: 5.2 Risk Management
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://mam16muk.medium.com/istqb-ctfl-syllabus-uncovered-your-ultimate-guide-vol4-6d23b638e1ca"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Medium: ISTQB CTFL Syllabus Uncovered Vol4
                            </a>
                        </div>
                    </div>

                    <div id="sec-2-3">
                        <h3>
                            2.3 プロダクトリスク分析 <span className="badge badge-teal">5.2.3</span>
                        </h3>
                        <p>
                            プロダクトリスク分析(product risk analysis)は、テストの深さと範囲を決定する上での基礎となる。分析結果は以下のような意思決定に使われる。
                        </p>
                        <ul>
                            <li>テストの範囲(スコープ)を決定する</li>
                            <li>実施する具体的なテストレベルとテストタイプを提案する</li>
                            <li>用いるべきテスト技法とテストで達成すべきカバレッジを決定する</li>
                            <li>各タスクに必要なテスト工数を見積る</li>
                            <li>重大な欠陥を早期に発見できるよう、テストの優先順位を付ける</li>
                            <li>
                                テスト以外にリスクを低減できる活動(レビュー、静的解析など)がないか検討する
                            </li>
                        </ul>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a
                                href="https://www.slideshare.net/slideshow/chapter-5-managing-test-activities-v4-0/269918691"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SlideShare: Chapter 5
                            </a>{' '}
                            /{' '}
                            <a href="https://astqb.org/5-2-risk-management/" target="_blank" rel="noopener noreferrer">
                                ASTQB: 5.2 Risk Management
                            </a>
                        </div>
                    </div>

                    <div id="sec-2-4">
                        <h3>
                            2.4 プロダクトリスク制御 <span className="badge badge-teal">5.2.4</span>
                        </h3>
                        <p>
                            プロダクトリスク制御(product risk control)は、識別・評価されたリスクに対して実際に取る対応であり、次の2つで構成される。
                        </p>
                        <ul>
                            <li>
                                <strong>リスク軽減</strong>(risk mitigation): リスクアセスメントで提案されたアクションを実施し、リスクレベルそのものを下げる(例: 該当領域のテストを厚くする、レビューを追加する)
                            </li>
                            <li>
                                <strong>リスクモニタリング</strong>(risk monitoring): 軽減策が有効に機能しているかを確認し、リスクアセスメントの精度向上に必要な情報を得て、新たに生じたリスクを検知する
                            </li>
                        </ul>
                        <p>
                            リスクへの一般的な対応選択肢としては、<strong>軽減するためにテストする・受容する・移転する・バックアッププランを用意する</strong>などがある。
                        </p>

                        <p>
                            以下は、リスクレジスタ(risk register)をシンプルに実装し、発生確率と影響度からリスクレベルを算出してテスト優先順位を導出する例である。
                        </p>

                        <div className="code-block">
                            <div className="code-label">Python — リスクレジスタとリスクベース優先順位付け</div>
                            <div className="code-content">
                                <div className="code-line"><span className="code-string">&quot;&quot;&quot;リスクベーステストのための簡易リスクレジスタ実装例。</span></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="code-string">risk level = likelihood(1-5) x impact(1-5) という単純な乗算モデルで</span></div>
                                <div className="code-line"><span className="code-string">優先順位付けを行う。実務ではより精緻なマトリクスを使うこともあるが、</span></div>
                                <div className="code-line"><span className="code-string">考え方の骨子はこのモデルで説明できる。</span></div>
                                <div className="code-line"><span className="code-string">&quot;&quot;&quot;</span></div>
                                <div className="code-line"><span className="code-keyword">from</span> <span className="code-type">dataclasses</span> <span className="code-keyword">import</span> <span className="code-type">dataclass</span>, <span className="code-func">field</span></div>
                                <div className="code-line"></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="code-decorator">@dataclass</span></div>
                                <div className="code-line"><span className="code-keyword">class</span> <span className="code-type">RiskItem</span>:</div>
                                <div className="code-line">    <span className="code-variable">risk_id</span>: <span className="code-type">str</span></div>
                                <div className="code-line">    <span className="code-variable">description</span>: <span className="code-type">str</span></div>
                                <div className="code-line">    <span className="code-variable">likelihood</span>: <span className="code-type">int</span>  <span className="code-comment"># 1(低い) 〜 5(高い)</span></div>
                                <div className="code-line">    <span className="code-variable">impact</span>: <span className="code-type">int</span>       <span className="code-comment"># 1(軽微) 〜 5(重大)</span></div>
                                <div className="code-line">    <span className="code-variable">mitigation</span>: <span className="code-type">str</span> <span className="code-op">=</span> <span className="code-string">&quot;&quot;</span></div>
                                <div className="code-line"></div>
                                <div className="code-line">    <span className="code-keyword">def</span> <span className="code-func">risk_level</span>(<span className="code-variable">self</span>) -&gt; <span className="code-type">int</span>:</div>
                                <div className="code-line">        <span className="code-keyword">return</span> <span className="code-variable">self</span>.<span className="code-variable">likelihood</span> <span className="code-op">*</span> <span className="code-variable">self</span>.<span className="code-variable">impact</span></div>
                                <div className="code-line"></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="code-decorator">@dataclass</span></div>
                                <div className="code-line"><span className="code-keyword">class</span> <span className="code-type">RiskRegister</span>:</div>
                                <div className="code-line">    <span className="code-variable">items</span>: <span className="code-type">list</span> <span className="code-op">=</span> <span className="code-func">field</span>(<span className="code-variable">default_factory</span><span className="code-op">=</span><span className="code-type">list</span>)</div>
                                <div className="code-line"></div>
                                <div className="code-line">    <span className="code-keyword">def</span> <span className="code-func">add</span>(<span className="code-variable">self</span>, <span className="code-variable">risk</span>: <span className="code-type">RiskItem</span>) -&gt; <span className="code-type">None</span>:</div>
                                <div className="code-line">        <span className="code-variable">self</span>.<span className="code-variable">items</span>.<span className="code-func">append</span>(<span className="code-variable">risk</span>)</div>
                                <div className="code-line"></div>
                                <div className="code-line">    <span className="code-keyword">def</span> <span className="code-func">prioritized</span>(<span className="code-variable">self</span>) -&gt; <span className="code-type">list</span>:</div>
                                <div className="code-line">        <span className="code-string">&quot;&quot;&quot;リスクレベルの高い順にソートして返す(risk-based testingの基礎)&quot;&quot;&quot;</span></div>
                                <div className="code-line">        <span className="code-keyword">return</span> <span className="code-func">sorted</span>(<span className="code-variable">self</span>.<span className="code-variable">items</span>, <span className="code-variable">key</span><span className="code-op">=</span><span className="code-keyword">lambda</span> <span className="code-variable">r</span>: <span className="code-variable">r</span>.<span className="code-func">risk_level</span>(), <span className="code-variable">reverse</span><span className="code-op">=</span><span className="code-keyword">True</span>)</div>
                                <div className="code-line"></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="code-keyword">def</span> <span className="code-func">test_high_risk_items_are_prioritized_first</span>():</div>
                                <div className="code-line">    <span className="code-variable">register</span> <span className="code-op">=</span> <span className="code-type">RiskRegister</span>()</div>
                                <div className="code-line">    <span className="code-variable">register</span>.<span className="code-func">add</span>(<span className="code-type">RiskItem</span>(<span className="code-string">&quot;R-01&quot;</span>, <span className="code-string">&quot;決済APIのタイムアウト処理不備&quot;</span>,</div>
                                <div className="code-line">                           <span className="code-variable">likelihood</span><span className="code-op">=</span><span className="code-number">4</span>, <span className="code-variable">impact</span><span className="code-op">=</span><span className="code-number">5</span>,</div>
                                <div className="code-line">                           <span className="code-variable">mitigation</span><span className="code-op">=</span><span className="code-string">&quot;決済系の異常系テストを重点的に実施&quot;</span>))</div>
                                <div className="code-line">    <span className="code-variable">register</span>.<span className="code-func">add</span>(<span className="code-type">RiskItem</span>(<span className="code-string">&quot;R-02&quot;</span>, <span className="code-string">&quot;フッターのリンク切れ&quot;</span>,</div>
                                <div className="code-line">                           <span className="code-variable">likelihood</span><span className="code-op">=</span><span className="code-number">3</span>, <span className="code-variable">impact</span><span className="code-op">=</span><span className="code-number">1</span>))</div>
                                <div className="code-line">    <span className="code-variable">register</span>.<span className="code-func">add</span>(<span className="code-type">RiskItem</span>(<span className="code-string">&quot;R-03&quot;</span>, <span className="code-string">&quot;個人情報のログ出力漏洩&quot;</span>,</div>
                                <div className="code-line">                           <span className="code-variable">likelihood</span><span className="code-op">=</span><span className="code-number">2</span>, <span className="code-variable">impact</span><span className="code-op">=</span><span className="code-number">5</span>,</div>
                                <div className="code-line">                           <span className="code-variable">mitigation</span><span className="code-op">=</span><span className="code-string">&quot;セキュリティレビューとログ出力の静的解析&quot;</span>))</div>
                                <div className="code-line"></div>
                                <div className="code-line">    <span className="code-variable">ranked</span> <span className="code-op">=</span> <span className="code-variable">register</span>.<span className="code-func">prioritized</span>()</div>
                                <div className="code-line"></div>
                                <div className="code-line">    <span className="code-keyword">assert</span> [<span className="code-variable">r</span>.<span className="code-variable">risk_id</span> <span className="code-keyword">for</span> <span className="code-variable">r</span> <span className="code-keyword">in</span> <span className="code-variable">ranked</span>] <span className="code-op">==</span> [<span className="code-string">&quot;R-01&quot;</span>, <span className="code-string">&quot;R-03&quot;</span>, <span className="code-string">&quot;R-02&quot;</span>]</div>
                                <div className="code-line">    <span className="code-keyword">assert</span> <span className="code-variable">ranked</span>[<span className="code-number">0</span>].<span className="code-func">risk_level</span>() <span className="code-op">==</span> <span className="code-number">20</span></div>
                            </div>
                        </div>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a href="https://astqb.org/5-2-risk-management/" target="_blank" rel="noopener noreferrer">
                                ASTQB: 5.2 Risk Management
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ISTQB CTFL Syllabus v4.0.1
                            </a>
                        </div>
                    </div>
                </section>

                <hr />

                <section id="sec-3">
                    <h2>3. 5.3 テストのモニタリング、コントロール、およびテスト完了</h2>

                    <div id="sec-3-1">
                        <h3>
                            3.1 テストで使われるメトリクス <span className="badge badge-teal">5.3.1</span>
                        </h3>
                        <p>
                            <strong>テストモニタリング</strong>(test monitoring)は、テストに関する情報を収集し、テストの進捗を評価するとともに、終了基準やそれに紐づくタスク(プロダクトリスクのカバレッジ目標、要求カバレッジ、受入基準の達成など)が満たされているかを測定する活動である。
                        </p>
                        <p>
                            <strong>テストコントロール</strong>(test control)は、テストモニタリングで得られた情報をもとに、コントロールディレクティブ(是正指示)という形でガイダンスや是正措置を提供し、最も効果的・効率的なテストを実現する活動である。
                        </p>
                        <p>
                            モニタリングとコントロールは対になって機能するが、<strong>「観察する」行為と「判断して行動する」行為は明確に別の活動である</strong>という点を混同しないことが重要である。
                        </p>

                        <div className="diagram-card">
                            <div className="diagram-wrap" id="diag-6">
                                <Mermaid chart={DIAGRAM_6} />
                            </div>
                        </div>

                        <p>代表的なテストメトリクスは以下のように分類できる。</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>カテゴリ</th>
                                        <th>メトリクス例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>プロジェクト・テスト進捗</td>
                                        <td>計画に対する完了率、実行済みテストケース数、残タスク工数</td>
                                    </tr>
                                    <tr>
                                        <td>プロダクト品質</td>
                                        <td>検出された欠陥数、欠陥密度、欠陥の重大度分布</td>
                                    </tr>
                                    <tr>
                                        <td>リスク</td>
                                        <td>カバーされたリスクの割合、未対応の高リスク項目数</td>
                                    </tr>
                                    <tr>
                                        <td>カバレッジ</td>
                                        <td>要求カバレッジ、コードカバレッジ、リスクカバレッジ</td>
                                    </tr>
                                    <tr>
                                        <td>コスト</td>
                                        <td>消化予算、残予算</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a
                                href="https://astqb.org/5-3-test-monitoring-test-control-and-test-completion/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ASTQB: 5.3 Test Monitoring, Test Control and Test Completion
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ISTQB CTFL Syllabus v4.0.1
                            </a>
                        </div>
                    </div>

                    <div id="sec-3-2">
                        <h3>
                            3.2 テストレポートの目的、内容、および対象読者 <span className="badge badge-teal">5.3.2</span>
                        </h3>
                        <p>
                            テストレポートには大きく分けて2種類ある。継続的に発行される<strong>テスト進捗レポート</strong>(test progress report)と、あるテストレベルや工程の終了時に作成される<strong>テスト完了レポート</strong>(test completion report)である。
                        </p>

                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>テスト進捗レポート</th>
                                        <th>テスト完了レポート</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>タイミング</td>
                                        <td>テスト活動中、定期的に</td>
                                        <td>テストレベルやプロジェクトの終了時</td>
                                    </tr>
                                    <tr>
                                        <td>主な内容</td>
                                        <td>現在の進捗、直近の課題、リスク状況、今後の見通し</td>
                                        <td>テストサマリ、達成したカバレッジ、未解決の欠陥、学んだ教訓</td>
                                    </tr>
                                    <tr>
                                        <td>主な読者</td>
                                        <td>テストマネージャー、プロジェクトマネージャー、開発チーム</td>
                                        <td>ステークホルダー全般(経営層、プロダクトオーナーを含む)</td>
                                    </tr>
                                    <tr>
                                        <td>主目的</td>
                                        <td>状況把握と早期の意思決定支援</td>
                                        <td>品質評価に基づくリリース可否判断、プロセス改善への示唆</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a
                                href="https://astqb.org/5-3-test-monitoring-test-control-and-test-completion/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ASTQB: 5.3 Test Monitoring, Test Control and Test Completion
                            </a>
                        </div>
                    </div>

                    <div id="sec-3-3">
                        <h3>
                            3.3 テスト状況の伝達 <span className="badge badge-teal">5.3.3</span>
                        </h3>
                        <p>
                            テスト状況をどのように伝達するかは、組織構造や規制要件、チームの自己組織化の度合いによって変わる。シラバスが挙げる主な影響要因は以下の通り。
                        </p>
                        <ul>
                            <li>組織構造(階層型か、フラットで自己組織化されたチームか)</li>
                            <li>規制・コンプライアンス要件(監査証跡が必要な業界か)</li>
                            <li>ステークホルダーの情報ニーズと関与度</li>
                            <li>使用している開発手法(ウォーターフォールかAgileか、デイリースタンドアップの有無)</li>
                        </ul>
                        <p>
                            Agile開発ではカンバンボードやバーンダウンチャートなど視覚的でリアルタイムなコミュニケーション手段が使われることが多く、伝統的なウォーターフォール開発では文書化されたフォーマルなレポートが重視される傾向がある。
                        </p>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a
                                href="https://astqb.org/5-3-test-monitoring-test-control-and-test-completion/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ASTQB: 5.3 Test Monitoring, Test Control and Test Completion
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ISTQB CTFL Syllabus v4.0.1
                            </a>
                        </div>
                    </div>
                </section>

                <hr />

                <section id="sec-4">
                    <h2>
                        4. 5.4 構成管理{' '}
                        <span style={{ color: 'var(--text-3)', fontWeight: 400, fontSize: '16px' }}>
                            Configuration Management
                        </span>
                    </h2>
                    <p>
                        テストにおける構成管理(Configuration Management, CM)とは、テスト計画・テスト戦略・テスト条件・テストケース・テストスクリプト・テスト結果・テストログ・テストレポートなどの成果物を<strong>構成アイテム</strong>(configuration item)として識別し、制御し、追跡するための規律である。
                    </p>
                    <p>構成管理がテストにおいて重要な理由は以下の通り。</p>
                    <ul>
                        <li>
                            <strong>一貫性の担保</strong>: どのバージョンのテスト対象に対して、どのバージョンのテストケースを実行したかを明確にできる
                        </li>
                        <li>
                            <strong>再現性の確保</strong>: 過去のテスト結果を正確に再現・検証できる
                        </li>
                        <li>
                            <strong>トレーサビリティの実現</strong>: 要求 → テスト条件 → テストケース → テスト結果 → 欠陥、という一連の連鎖を追跡可能にする
                        </li>
                        <li>
                            <strong>監査・コンプライアンス対応</strong>: 規制産業などで求められる監査証跡を残せる
                        </li>
                    </ul>

                    <div className="diagram-card">
                        <div className="diagram-wrap" id="diag-7">
                            <Mermaid chart={DIAGRAM_7} />
                        </div>
                    </div>

                    <p>
                        構成管理はテスト成果物単体の版管理だけでなく、<strong>テスト対象</strong>(test object)<strong>とテストウェアのバージョンの対応関係</strong>を明確にする役割も持つ。たとえば、あるビルドに対してどのテストスイートが実行されたかを一意に特定できなければ、欠陥の再現や回帰テストの範囲決定が困難になる。
                    </p>

                    <div className="source-note">
                        <b>出典:</b>{' '}
                        <a
                            href="https://astqb.org/5-4-configuration-management/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ASTQB: 5.4 Configuration Management
                        </a>{' '}
                        /{' '}
                        <a
                            href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ISTQB CTFL Syllabus v4.0.1
                        </a>
                    </div>
                </section>

                <hr />

                <section id="sec-5">
                    <h2>
                        5. 5.5 欠陥管理{' '}
                        <span style={{ color: 'var(--text-3)', fontWeight: 400, fontSize: '16px' }}>
                            Defect Management
                        </span>
                    </h2>
                    <p>
                        テストの主要な目的の一つが欠陥の発見である以上、確立された欠陥管理プロセスは不可欠である。なお、報告された「異常」(anomaly)がすべて実際の欠陥であるとは限らず、テスト実行時のネットワーク切断のような<strong>偽陽性</strong>(false positive)である場合もある点に留意する必要がある。テスト担当者はこうした偽陽性の報告を最小化するよう努めるべきとされている。
                    </p>
                    <p>
                        欠陥は、コーディング中・静的解析中・レビュー中・動的テスト中など、SDLCのあらゆる局面で、コードだけでなく要求やユーザーストーリー、各種ドキュメントに対しても報告されうる。
                    </p>

                    <div id="sec-5-1">
                        <h3>5.1 欠陥のライフサイクルと状態管理</h3>
                        <p>
                            欠陥管理プロセスは、最低限、個々の欠陥・異常を発見から終結(closure)まで扱うワークフローと、分類のためのルールを含む。典型的な流れは「記録 → 分析・分類 → 対応の決定(修正するか現状維持するか等) → 終結」である。
                        </p>

                        <div className="diagram-card">
                            <div className="diagram-wrap" id="diag-8">
                                <Mermaid chart={DIAGRAM_8} />
                            </div>
                        </div>

                        <p>
                            確認テスト(confirmation testing)は、可能な限り最初にその欠陥を検出したテスト担当者本人が行うことが望ましいとされる。これは、修正内容や元の再現手順に対する文脈理解が最も深いためである。
                        </p>
                    </div>

                    <div id="sec-5-2">
                        <h3>5.2 欠陥報告の目的と価値</h3>
                        <p>シラバスは、典型的な欠陥報告(defect report)の目的として以下を挙げている。</p>
                        <ol>
                            <li>
                                開発者やその他の関係者に、発生した事象についての情報を提供し、影響の特定・最小再現手順への切り分け・欠陥の修正を可能にする
                            </li>
                            <li>
                                テストマネージャーに、プロダクトの品質やテストへの影響を追跡する手段を提供する(たとえば欠陥が多く報告されるほど、報告作業に時間が割かれ、確認テストの必要性も増える)
                            </li>
                            <li>開発プロセス・テストプロセスの改善に向けたアイデアを提供する</li>
                        </ol>
                    </div>

                    <div id="sec-5-3">
                        <h3>5.3 欠陥レポートに必要な記載項目</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>項目</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>一意の識別子(ID)</td>
                                        <td>欠陥を一意に特定するためのID</td>
                                    </tr>
                                    <tr>
                                        <td>タイトル</td>
                                        <td>異常内容を要約した短い見出し</td>
                                    </tr>
                                    <tr>
                                        <td>発見日・報告組織・報告者(役割を含む)</td>
                                        <td>いつ・どこの・誰が報告したか</td>
                                    </tr>
                                    <tr>
                                        <td>テスト対象・テスト環境の識別情報</td>
                                        <td>何に対して、どの環境で発生したか</td>
                                    </tr>
                                    <tr>
                                        <td>発生時のコンテキスト</td>
                                        <td>
                                            実行していたテストケース、テスト活動、SDLCフェーズ、使用していたテスト技法・チェックリスト・テストデータなど
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>再現・解決のための説明</td>
                                        <td>
                                            発見に至った手順、テストログ、DBダンプ、スクリーンショット、録画など
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>期待結果と実際の結果</td>
                                        <td>Expected result / Actual result</td>
                                    </tr>
                                    <tr>
                                        <td>重大度(Severity)</td>
                                        <td>ステークホルダーの利害や要求への影響度</td>
                                    </tr>
                                    <tr>
                                        <td>修正の優先度(Priority)</td>
                                        <td>どれだけ早く対応すべきか</td>
                                    </tr>
                                    <tr>
                                        <td>ステータス</td>
                                        <td>
                                            open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, reopened, closed, rejected など
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>参照情報</td>
                                        <td>関連するテストケースや要求へのリンクなど</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            以下は、この欠陥報告の必須項目を Python のデータクラスとしてモデル化し、必須フィールドが揃っているかを検証する簡易バリデータの例である。実務では欠陥管理ツール(Jira等)がこの構造をGUIとして提供するが、内部的なデータモデルの理解に役立つ。
                        </p>

                        <div className="code-block">
                            <div className="code-label">Python — 欠陥報告のデータモデルとバリデーション</div>
                            <div className="code-content">
                                <div className="code-line"><span className="code-string">&quot;&quot;&quot;動的テストにおける欠陥報告(defect report)のデータモデル例。</span></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="code-string">ISTQB CTFL v4.0.1 5.5節で挙げられている典型的な記載項目を</span></div>
                                <div className="code-line"><span className="code-string">dataclassとしてモデル化し、必須項目の充足チェックを行う。</span></div>
                                <div className="code-line"><span className="code-string">&quot;&quot;&quot;</span></div>
                                <div className="code-line"><span className="code-keyword">from</span> <span className="code-type">dataclasses</span> <span className="code-keyword">import</span> <span className="code-type">dataclass</span></div>
                                <div className="code-line"><span className="code-keyword">from</span> <span className="code-type">enum</span> <span className="code-keyword">import</span> <span className="code-type">Enum</span></div>
                                <div className="code-line"></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="code-keyword">class</span> <span className="code-type">DefectStatus</span>(<span className="code-type">str</span>, <span className="code-type">Enum</span>):</div>
                                <div className="code-line">    <span className="code-variable">OPEN</span> <span className="code-op">=</span> <span className="code-string">&quot;open&quot;</span></div>
                                <div className="code-line">    <span className="code-variable">DEFERRED</span> <span className="code-op">=</span> <span className="code-string">&quot;deferred&quot;</span></div>
                                <div className="code-line">    <span className="code-variable">DUPLICATE</span> <span className="code-op">=</span> <span className="code-string">&quot;duplicate&quot;</span></div>
                                <div className="code-line">    <span className="code-variable">WAITING_TO_BE_FIXED</span> <span className="code-op">=</span> <span className="code-string">&quot;waiting_to_be_fixed&quot;</span></div>
                                <div className="code-line">    <span className="code-variable">AWAITING_CONFIRMATION</span> <span className="code-op">=</span> <span className="code-string">&quot;awaiting_confirmation_testing&quot;</span></div>
                                <div className="code-line">    <span className="code-variable">REOPENED</span> <span className="code-op">=</span> <span className="code-string">&quot;reopened&quot;</span></div>
                                <div className="code-line">    <span className="code-variable">CLOSED</span> <span className="code-op">=</span> <span className="code-string">&quot;closed&quot;</span></div>
                                <div className="code-line">    <span className="code-variable">REJECTED</span> <span className="code-op">=</span> <span className="code-string">&quot;rejected&quot;</span></div>
                                <div className="code-line"></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="code-decorator">@dataclass</span></div>
                                <div className="code-line"><span className="code-keyword">class</span> <span className="code-type">DefectReport</span>:</div>
                                <div className="code-line">    <span className="code-variable">defect_id</span>: <span className="code-type">str</span></div>
                                <div className="code-line">    <span className="code-variable">title</span>: <span className="code-type">str</span></div>
                                <div className="code-line">    <span className="code-variable">reported_by</span>: <span className="code-type">str</span></div>
                                <div className="code-line">    <span className="code-variable">test_object</span>: <span className="code-type">str</span></div>
                                <div className="code-line">    <span className="code-variable">test_environment</span>: <span className="code-type">str</span></div>
                                <div className="code-line">    <span className="code-variable">steps_to_reproduce</span>: <span className="code-type">str</span></div>
                                <div className="code-line">    <span className="code-variable">expected_result</span>: <span className="code-type">str</span></div>
                                <div className="code-line">    <span className="code-variable">actual_result</span>: <span className="code-type">str</span></div>
                                <div className="code-line">    <span className="code-variable">severity</span>: <span className="code-type">str</span>        <span className="code-comment"># 例: &quot;Critical&quot;, &quot;Major&quot;, &quot;Minor&quot;</span></div>
                                <div className="code-line">    <span className="code-variable">priority</span>: <span className="code-type">str</span>         <span className="code-comment"># 例: &quot;P1&quot;, &quot;P2&quot;, &quot;P3&quot;</span></div>
                                <div className="code-line">    <span className="code-variable">status</span>: <span className="code-type">DefectStatus</span> <span className="code-op">=</span> <span className="code-type">DefectStatus</span>.<span className="code-variable">OPEN</span></div>
                                <div className="code-line"></div>
                                <div className="code-line">    <span className="code-keyword">def</span> <span className="code-func">is_complete</span>(<span className="code-variable">self</span>) -&gt; <span className="code-type">bool</span>:</div>
                                <div className="code-line">        <span className="code-string">&quot;&quot;&quot;必須項目がすべて空でないかを検証する簡易バリデーション&quot;&quot;&quot;</span></div>
                                <div className="code-line">        <span className="code-variable">required_fields</span> <span className="code-op">=</span> [</div>
                                <div className="code-line">            <span className="code-variable">self</span>.<span className="code-variable">title</span>, <span className="code-variable">self</span>.<span className="code-variable">reported_by</span>, <span className="code-variable">self</span>.<span className="code-variable">test_object</span>,</div>
                                <div className="code-line">            <span className="code-variable">self</span>.<span className="code-variable">test_environment</span>, <span className="code-variable">self</span>.<span className="code-variable">steps_to_reproduce</span>,</div>
                                <div className="code-line">            <span className="code-variable">self</span>.<span className="code-variable">expected_result</span>, <span className="code-variable">self</span>.<span className="code-variable">actual_result</span>,</div>
                                <div className="code-line">            <span className="code-variable">self</span>.<span className="code-variable">severity</span>, <span className="code-variable">self</span>.<span className="code-variable">priority</span>,</div>
                                <div className="code-line">        ]</div>
                                <div className="code-line">        <span className="code-keyword">return</span> <span className="code-func">all</span>(<span className="code-variable">field</span>.<span className="code-func">strip</span>() <span className="code-keyword">for</span> <span className="code-variable">field</span> <span className="code-keyword">in</span> <span className="code-variable">required_fields</span>)</div>
                                <div className="code-line"></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="code-keyword">def</span> <span className="code-func">test_defect_report_with_all_fields_is_complete</span>():</div>
                                <div className="code-line">    <span className="code-variable">report</span> <span className="code-op">=</span> <span className="code-type">DefectReport</span>(</div>
                                <div className="code-line">        <span className="code-variable">defect_id</span><span className="code-op">=</span><span className="code-string">&quot;DEF-1042&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">title</span><span className="code-string">&quot;決済確定後にタイムアウトすると二重課金が発生する&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">reported_by</span><span className="code-op">=</span><span className="code-string">&quot;山田太郎(QAエンジニア)&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">test_object</span><span className="code-op">=</span><span className="code-string">&quot;決済API v2.3.0&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">test_environment</span><span className="code-op">=</span><span className="code-string">&quot;Staging / Chrome 126&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">steps_to_reproduce</span><span className="code-op">=</span><span className="code-string">&quot;1) カート合計10,000円で決済確定\n&quot;</span></div>
                                <div className="code-line">                            <span className="code-string">&quot;2) 決済処理中に強制的にAPIタイムアウトを発生させる\n&quot;</span></div>
                                <div className="code-line">                            <span className="code-string">&quot;3) 決済履歴を確認する&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">expected_result</span><span className="code-op">=</span><span className="code-string">&quot;決済は1回のみ確定し、タイムアウト時は自動的にロールバックされる&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">actual_result</span><span className="code-op">=</span><span className="code-string">&quot;同一注文に対し決済が2回確定している&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">severity</span><span className="code-op">=</span><span className="code-string">&quot;Critical&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">priority</span><span className="code-op">=</span><span className="code-string">&quot;P1&quot;</span>,</div>
                                <div className="code-line">    )</div>
                                <div className="code-line"></div>
                                <div className="code-line">    <span className="code-keyword">assert</span> <span className="code-variable">report</span>.<span className="code-func">is_complete</span>() <span className="code-keyword">is</span> <span className="code-keyword">True</span></div>
                                <div className="code-line">    <span className="code-keyword">assert</span> <span className="code-variable">report</span>.<span className="code-variable">status</span> <span className="code-op">==</span> <span className="code-type">DefectStatus</span>.<span className="code-variable">OPEN</span></div>
                                <div className="code-line"></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="code-keyword">def</span> <span className="code-func">test_defect_report_missing_actual_result_is_incomplete</span>():</div>
                                <div className="code-line">    <span className="code-variable">incomplete_report</span> <span className="code-op">=</span> <span className="code-type">DefectReport</span>(</div>
                                <div className="code-line">        <span className="code-variable">defect_id</span><span className="code-op">=</span><span className="code-string">&quot;DEF-1043&quot;</span>, <span className="code-variable">title</span><span className="code-op">=</span><span className="code-string">&quot;ログイン画面のラベル崩れ&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">reported_by</span><span className="code-op">=</span><span className="code-string">&quot;佐藤花子&quot;</span>, <span className="code-variable">test_object</span><span className="code-op">=</span><span className="code-string">&quot;Webフロントエンド&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">test_environment</span><span className="code-op">=</span><span className="code-string">&quot;Production&quot;</span>, <span className="code-variable">steps_to_reproduce</span><span className="code-op">=</span><span className="code-string">&quot;ログイン画面を開く&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">expected_result</span><span className="code-op">=</span><span className="code-string">&quot;ラベルが正しく表示される&quot;</span>,</div>
                                <div className="code-line">        <span className="code-variable">actual_result</span><span className="code-op">=</span><span className="code-string">&quot;&quot;</span>,  <span className="code-comment"># 未記入</span></div>
                                <div className="code-line">        <span className="code-variable">severity</span><span className="code-op">=</span><span className="code-string">&quot;Minor&quot;</span>, <span className="code-variable">priority</span><span className="code-op">=</span><span className="code-string">&quot;P3&quot;</span>,</div>
                                <div className="code-line">    )</div>
                                <div className="code-line"></div>
                                <div className="code-line">    <span className="code-keyword">assert</span> <span className="code-variable">incomplete_report</span>.<span className="code-func">is_complete</span>() <span className="code-keyword">is</span> <span className="code-keyword">False</span></div>
                            </div>
                        </div>

                        <div className="source-note">
                            <b>出典:</b>{' '}
                            <a href="https://astqb.org/5-5-defect-management/" target="_blank" rel="noopener noreferrer">
                                ASTQB: 5.5 Defect Management
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.slideshare.net/slideshow/chapter-5-managing-test-activities-v4-0/269918691"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SlideShare: Chapter 5
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://magdalenaolak.gitbook.io/istqb-foundation-level/5-test-management/5.6-defect-management"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                magdalenaolak.gitbook.io: 5.6 Defect Management
                            </a>
                        </div>
                    </div>
                </section>

                <hr />

                <section id="sec-6">
                    <h2>6. 重要用語とチェックリスト</h2>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>用語(英語)</th>
                                    <th>日本語</th>
                                    <th>要点</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="term-key">Test Plan</td>
                                    <td>テスト計画</td>
                                    <td>
                                        目的・リソース・プロセスを記述、ポリシーや戦略との整合を示す
                                    </td>
                                </tr>
                                <tr>
                                    <td className="term-key">Entry / Exit Criteria</td>
                                    <td>エントリー基準・終了基準</td>
                                    <td>DoR / DoDに相当。開始・終了の可否判断基準</td>
                                </tr>
                                <tr>
                                    <td className="term-key">Metrics-based / Expert-based</td>
                                    <td>メトリクスベース・エキスパートベース見積り</td>
                                    <td>過去データ活用 vs 経験者判断</td>
                                </tr>
                                <tr>
                                    <td className="term-key">Test Pyramid</td>
                                    <td>テストピラミッド</td>
                                    <td>下ほど多く高速安価、上ほど少なく低速高価</td>
                                </tr>
                                <tr>
                                    <td className="term-key">Testing Quadrants</td>
                                    <td>テスト象限</td>
                                    <td>
                                        テクノロジー・ビジネス軸 × チーム支援・プロダクト批評軸のQ1〜Q4
                                    </td>
                                </tr>
                                <tr>
                                    <td className="term-key">Risk Likelihood / Impact</td>
                                    <td>リスク発生確率・影響度</td>
                                    <td>リスクレベル算出の2要素</td>
                                </tr>
                                <tr>
                                    <td className="term-key">Project / Product Risk</td>
                                    <td>プロジェクトリスク・プロダクトリスク</td>
                                    <td>プロジェクト運営 vs プロダクト品質</td>
                                </tr>
                                <tr>
                                    <td className="term-key">Test Monitoring / Control</td>
                                    <td>テストモニタリング・コントロール</td>
                                    <td>観察 vs 是正指示、明確に別の活動</td>
                                </tr>
                                <tr>
                                    <td className="term-key">Configuration Management</td>
                                    <td>構成管理</td>
                                    <td>成果物のバージョン管理とトレーサビリティ確保</td>
                                </tr>
                                <tr>
                                    <td className="term-key">Defect Report</td>
                                    <td>欠陥報告</td>
                                    <td>再現性・重大度・優先度・ステータスを含む標準化された記録</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>章末チェックリスト(自己診断)</h3>
                    <ul className="checklist">
                        <li>
                            <span className="chk-box"></span>
                            テストポリシー・テスト戦略・テスト計画の三層構造を説明できるか
                        </li>
                        <li>
                            <span className="chk-box"></span>
                            エントリー基準と終了基準の違いと、両者を満たさない場合の対応を説明できるか
                        </li>
                        <li>
                            <span className="chk-box"></span>
                            メトリクスベース見積りとエキスパートベース見積りを具体例とともに区別できるか
                        </li>
                        <li>
                            <span className="chk-box"></span>
                            テストケースの3つの優先順位付け戦略と、依存関係・リソース制約による調整の必要性を説明できるか
                        </li>
                        <li>
                            <span className="chk-box"></span>
                            テストピラミッドとテスト象限の違い(粒度の話か、性質分類の話か)を説明できるか
                        </li>
                        <li>
                            <span className="chk-box"></span>
                            プロジェクトリスクとプロダクトリスクを具体例つきで区別できるか
                        </li>
                        <li>
                            <span className="chk-box"></span>
                            リスク分析(識別とアセスメント)とリスク制御(軽減とモニタリング)を区別できるか
                        </li>
                        <li>
                            <span className="chk-box"></span>
                            テストモニタリングとテストコントロールの違いを、シナリオ問題で判定できるか
                        </li>
                        <li>
                            <span className="chk-box"></span>
                            テスト進捗レポートとテスト完了レポートの違い(タイミング・読者・内容)を説明できるか
                        </li>
                        <li>
                            <span className="chk-box"></span>
                            構成管理がテストのトレーサビリティにどう寄与するかを説明できるか
                        </li>
                        <li>
                            <span className="chk-box"></span>
                            欠陥報告に含めるべき典型項目を、実際に記述できるか
                        </li>
                    </ul>
                </section>

                <hr />

                <section id="sec-7">
                    <h2>7. 参考文献・参照URL一覧</h2>
                    <p>
                        本章の作成にあたり、以下の一次情報源および信頼できる二次情報源を参照した(2026年7月時点でアクセス可能な最新版)。
                    </p>

                    <div className="ref-group">
                        <div className="ref-title">一次情報源(ISTQB公式)</div>
                        <ul className="ref-list">
                            <li>
                                <span className="ref-name">ISTQB CTFL Syllabus v4.0.1(公式シラバスPDF)</span>
                                <a
                                    href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">ISTQB CTFL v4.0 概要ページ</span>
                                <a
                                    href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">ISTQB CTFL Syllabus v4.0.1 ダウンロードページ</span>
                                <a
                                    href="https://istqb.org/sdm_downloads/istqb-certified-tester-foundation-level-syllabus-v4-0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://istqb.org/sdm_downloads/istqb-certified-tester-foundation-level-syllabus-v4-0/
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="ref-group">
                        <div className="ref-title">セクション別の解説(ASTQB公式サイト)</div>
                        <ul className="ref-list">
                            <li>
                                <span className="ref-name">5.1 Test Planning</span>
                                <a
                                    href="https://astqb.org/5-1-test-planning/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://astqb.org/5-1-test-planning/
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">5.2 Risk Management</span>
                                <a
                                    href="https://astqb.org/5-2-risk-management/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://astqb.org/5-2-risk-management/
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">5.3 Test Monitoring, Test Control and Test Completion</span>
                                <a
                                    href="https://astqb.org/5-3-test-monitoring-test-control-and-test-completion/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://astqb.org/5-3-test-monitoring-test-control-and-test-completion/
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">5.4 Configuration Management</span>
                                <a
                                    href="https://astqb.org/5-4-configuration-management/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://astqb.org/5-4-configuration-management/
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">5.5 Defect Management</span>
                                <a
                                    href="https://astqb.org/5-5-defect-management/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://astqb.org/5-5-defect-management/
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="ref-group">
                        <div className="ref-title">補足・実務解説(信頼できる二次情報源)</div>
                        <ul className="ref-list">
                            <li>
                                <span className="ref-name">SlideShare: Chapter 5 - Managing Test Activities V4.0</span>
                                <a
                                    href="https://www.slideshare.net/slideshow/chapter-5-managing-test-activities-v4-0/269918691"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://www.slideshare.net/slideshow/chapter-5-managing-test-activities-v4-0/269918691
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">ISTQB.guru: CTFL v4 Syllabus Chapter-by-Chapter Deep Dive</span>
                                <a
                                    href="https://www.istqb.guru/ctfl-v4-syllabus-chapter-by-chapter-deep-dive/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://www.istqb.guru/ctfl-v4-syllabus-chapter-by-chapter-deep-dive/
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">Medium (Mohamed Yaseen): ISTQB CTFL Syllabus Uncovered Vol4</span>
                                <a
                                    href="https://mam16muk.medium.com/istqb-ctfl-syllabus-uncovered-your-ultimate-guide-vol4-6d23b638e1ca"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://mam16muk.medium.com/istqb-ctfl-syllabus-uncovered-your-ultimate-guide-vol4-6d23b638e1ca
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">
                                    tryqa.com: What are Test Pyramid and Testing Quadrants in Agile Testing Methodology?
                                </span>
                                <a
                                    href="https://tryqa.com/what-are-test-pyramid-and-testing-quadrants-in-agile-testing-methodology/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://tryqa.com/what-are-test-pyramid-and-testing-quadrants-in-agile-testing-methodology/
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">Lisa Crispin: Using the Agile Testing Quadrants</span>
                                <a
                                    href="https://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">Cania Consulting: A Test Manager Guide to Estimating the Test Effort</span>
                                <a
                                    href="https://cania-consulting.com/2019/10/12/a-test-manager-guide-to-estimating-the-test-effort/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://cania-consulting.com/2019/10/12/a-test-manager-guide-to-estimating-the-test-effort/
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">magdalenaolak.gitbook.io: 5.6 Defect Management</span>
                                <a
                                    href="https://magdalenaolak.gitbook.io/istqb-foundation-level/5-test-management/5.6-defect-management"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://magdalenaolak.gitbook.io/istqb-foundation-level/5-test-management/5.6-defect-management
                                </a>
                            </li>
                            <li>
                                <span className="ref-name">ISTQB CTFL v4.0 Certification: 2026 Exam &amp; Syllabus Guide</span>
                                <a
                                    href="https://www.istqb.com/ctfl-v4-0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://www.istqb.com/ctfl-v4-0/
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="ref-group">
                        <div className="ref-title">関連する業界標準(シラバス内で言及)</div>
                        <ul className="ref-list">
                            <li><span className="ref-name">ISO 31000</span>リスクマネジメント</li>
                            <li>
                                <span className="ref-name">ISO / IEC / IEEE 29119-2</span>テストプロセス
                            </li>
                            <li>
                                <span className="ref-name">ISO / IEC / IEEE 29119-3</span>テストドキュメント(欠陥報告のフォーマットを含む)
                            </li>
                        </ul>
                    </div>

                    <div className="footer-note">
                        本ドキュメントは ISTQB® CTFL v4.0.1 シラバスの内容を教育目的で要約・翻訳・再構成したものであり、シラバス原文の逐語的な転載ではありません。正式な試験対策には必ず公式シラバスおよび公式サンプル問題を参照してください。
                    </div>
                </section>
            </main>
        </div>
    );
}
