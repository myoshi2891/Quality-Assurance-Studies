import type { Metadata } from 'next';
import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './istqb-ctfl-at-chapter3-agile-testing-techniques-tools.css';

export const metadata: Metadata = {
    title: 'Chapter 3: アジャイルテスト技法とツール | CTFL-AT 実践解説ガイド',
    description: 'ISTQB CTFL-AT Chapter 3 アジャイルテスト技法とツールの実践解説ガイド。TDD/ATDD/BDD、テスティングクアドラント、探索的テスト、アジャイルツールチェーンを図解付きで解説。',
};

const DIAGRAM_0 = `flowchart TD
A["Chapter 3<br/>Agile Testing Methods, Techniques and Tools"] --> B["3.1 アジャイルテスト手法<br/>TDD / ATDD / BDD"]
A --> C["3.2 品質リスク評価と<br/>テスト工数見積り"]
A --> D["3.3 アジャイルプロジェクトの<br/>技法"]
A --> E["3.4 アジャイルにおける<br/>ツール"]
B --> B1["3.1.1 TDD<br/>Red-Green-Refactor"]
B --> B2["3.1.2 ATDD<br/>受け入れ基準の事前合意"]
B --> B3["3.1.3 BDD<br/>Given-When-Then"]
C --> C1["3.2.1 品質リスク評価<br/>Product Risk Workshop"]
C --> C2["3.2.2 内容とリスクに基づく<br/>工数見積り"]
D --> D1["3.3.1 テスティング<br/>クアドラント"]
D --> D2["3.3.2 非機能テスト /<br/>技術的負債の考慮"]
D --> D3["3.3.3 リグレッションテストと<br/>テスト自動化ピラミッド"]
D --> D4["3.3.4 探索的テスト<br/>Exploratory Testing"]
E --> E1["3.4.1 タスク管理・<br/>追跡ツール"]
E --> E2["3.4.2 コミュニケーション・<br/>情報共有ツール"]
E --> E3["3.4.3 ソフトウェアビルド・<br/>配布ツール"]
E --> E4["3.4.4 構成管理ツール"]
E --> E5["3.4.5 テスト設計・実装・<br/>実行ツール"]
E --> E6["3.4.6 クラウド・<br/>仮想化ツール"]
style A fill:#1a2744,stroke:#4a9eff,color:#fff
style B fill:#1e3a5f,stroke:#4a9eff,color:#fff
style C fill:#1e3a5f,stroke:#4a9eff,color:#fff
style D fill:#1e3a5f,stroke:#4a9eff,color:#fff
style E fill:#1e3a5f,stroke:#4a9eff,color:#fff`;

const DIAGRAM_1 = `flowchart LR
R["Red<br/>失敗するテストを書く"] --> G["Green<br/>テストを通す最小限の<br/>実装を書く"]
G --> F["Refactor<br/>テストを通したまま<br/>コードを整理する"]
F --> R
style R fill:#5c1a1a,stroke:#ff6b6b,color:#fff
style G fill:#1a5c2e,stroke:#4ade80,color:#fff
style F fill:#1a3a5c,stroke:#4a9eff,color:#fff`;

const DIAGRAM_2 = `sequenceDiagram
participant PO as プロダクトオーナー<br/>(ビジネス視点)
participant Dev as 開発者<br/>(実装視点)
participant QA as テスター<br/>(品質視点)
Note over PO,QA: Three Amigos セッション(ストーリー着手前)
PO->>Dev: ユーザーストーリーと背景を共有
PO->>QA: 期待するビジネス価値を共有
Dev->>QA: 技術的な実現可能性・制約を共有
QA->>PO: エッジケース・例外条件を質問
Note over PO,QA: 受け入れ基準に合意
PO->>Dev: 合意した受け入れ基準を確定
Dev->>Dev: 受け入れテストを自動化しながら実装
QA->>QA: 受け入れテストで検証`;

const DIAGRAM_3 = `flowchart TD
subgraph Scenario["シナリオ: ATMからの引き出し"]
Given["Given: 前提条件<br/>口座残高が10,000円である"]
When["When: 実行するアクション<br/>3,000円を引き出す"]
Then["Then: 期待する結果<br/>残高は7,000円になる"]
Given --> When --> Then
end
style Given fill:#1a3a5c,stroke:#4a9eff,color:#fff
style When fill:#5c4a1a,stroke:#ffb84a,color:#fff
style Then fill:#1a5c2e,stroke:#4ade80,color:#fff`;

const DIAGRAM_4 = `flowchart TD
subgraph Outer["ビジネス視点の粒度(粗い)"]
ATDD["ATDD<br/>ユーザーストーリー単位の<br/>受け入れ基準"]
BDD["BDD<br/>振る舞いシナリオ単位<br/>Given-When-Then"]
end
subgraph Inner["技術視点の粒度(細かい)"]
TDD["TDD<br/>関数・クラス単位の<br/>単体テスト"]
end
ATDD -->|"受け入れ基準を<br/>実装に落とし込む"| TDD
BDD -->|"シナリオ内の各ステップを<br/>実装する際に併用"| TDD
style ATDD fill:#1e3a5f,stroke:#4a9eff,color:#fff
style BDD fill:#1e3a5f,stroke:#4a9eff,color:#fff
style TDD fill:#1a5c2e,stroke:#4ade80,color:#fff`;

const DIAGRAM_5 = `flowchart LR
A["リリース計画<br/>Release Planning"] --> B["プロダクトリスク<br/>ワークショップ"]
B --> C["リスクレベルの<br/>合意(高/中/低)"]
C --> D["イテレーション計画<br/>Iteration Planning"]
D --> E["リスクに応じた<br/>テスト工数配分"]
E --> F["ストーリーポイント/<br/>プランニングポーカー"]
F --> G["スプリントバックログ<br/>確定"]
style A fill:#1a2744,stroke:#4a9eff,color:#fff
style B fill:#1e3a5f,stroke:#4a9eff,color:#fff
style C fill:#5c4a1a,stroke:#ffb84a,color:#fff
style D fill:#1a2744,stroke:#4a9eff,color:#fff
style E fill:#1e3a5f,stroke:#4a9eff,color:#fff
style F fill:#1e3a5f,stroke:#4a9eff,color:#fff
style G fill:#1a5c2e,stroke:#4ade80,color:#fff`;

const DIAGRAM_6 = `sequenceDiagram
participant PO as プロダクトオーナー
participant Team as 開発チーム(開発者+テスター)
PO->>Team: 対象ストーリーを提示し、受け入れ基準を説明
Team->>Team: 各メンバーが非公開でカードを選ぶ<br/>(フィボナッチ数列: 1,2,3,5,8,13...)
Team->>Team: 一斉にカードを公開
alt 見積りが一致 or 近い
Team->>PO: 見積り値を確定
else 見積りが大きく乖離
Team->>Team: 最大値・最小値の担当者が根拠を説明<br/>(テスト観点の見落としが判明することが多い)
Team->>Team: 再度カードを選び直す
end`;

const DIAGRAM_7 = `flowchart TB
subgraph Top["チームを支援 (Supporting the Team)"]
direction LR
Q1["Q1: 技術視点 x チーム支援<br/>単体テスト<br/>コンポーネントテスト (TDD)"]
Q2["Q2: ビジネス視点 x チーム支援<br/>機能テスト<br/>ストーリーテスト<br/>プロトタイプ検証"]
Q1 --- Q2
end
subgraph Bottom["プロダクトを批評 (Critiquing the Product)"]
direction LR
Q4["Q4: 技術視点 x プロダクト批評<br/>性能テスト<br/>セキュリティテスト<br/>負荷・信頼性テスト"]
Q3["Q3: ビジネス視点 x プロダクト批評<br/>探索的テスト<br/>ユーザビリティテスト<br/>受け入れテスト (UAT)"]
Q4 --- Q3
end
Top ~~~ Bottom
style Q1 fill:#1a5c2e,stroke:#4ade80,color:#fff
style Q2 fill:#1e3a5f,stroke:#4a9eff,color:#fff
style Q3 fill:#5c4a1a,stroke:#ffb84a,color:#fff
style Q4 fill:#5c1a1a,stroke:#ff6b6b,color:#fff`;

const DIAGRAM_8 = `flowchart TD
A["スプリント内で<br/>機能を素早く実装"] --> B{"非機能要件・<br/>設計品質を<br/>継続的に検証しているか?"}
B -->|"Yes"| C["持続可能なペースで<br/>開発を継続できる"]
B -->|"No"| D["技術的負債が蓄積"]
D --> E["将来のベロシティ低下・<br/>障害リスク増大"]
E --> F["負債返済のための<br/>専用スプリントが必要に"]
style A fill:#1a2744,stroke:#4a9eff,color:#fff
style C fill:#1a5c2e,stroke:#4ade80,color:#fff
style D fill:#5c1a1a,stroke:#ff6b6b,color:#fff
style E fill:#5c1a1a,stroke:#ff6b6b,color:#fff
style F fill:#5c4a1a,stroke:#ffb84a,color:#fff`;

const DIAGRAM_9 = `flowchart TD
subgraph Pyramid["テスト自動化ピラミッド"]
direction TB
E2E["E2E/UIテスト<br/>少数・低速・高コスト<br/>(Playwright, Cypress, Selenium)"]
Integration["統合/APIテスト<br/>中程度の数・中速度<br/>(REST Assured, Postman/Newman)"]
Unit["単体テスト<br/>多数・高速・低コスト<br/>(Jest, JUnit, pytest)"]
end
Unit --> Integration --> E2E
style Unit fill:#1a5c2e,stroke:#4ade80,color:#fff
style Integration fill:#5c4a1a,stroke:#ffb84a,color:#fff
style E2E fill:#5c1a1a,stroke:#ff6b6b,color:#fff`;

const DIAGRAM_10 = `flowchart LR
A["学習<br/>Learning"] <--> B["テスト設計<br/>Test Design"]
B <--> C["テスト実行<br/>Test Execution"]
C <--> A
style A fill:#1a3a5c,stroke:#4a9eff,color:#fff
style B fill:#5c4a1a,stroke:#ffb84a,color:#fff
style C fill:#1a5c2e,stroke:#4ade80,color:#fff`;

const DIAGRAM_11 = `flowchart TD
Center["アジャイル<br/>ツールチェーン"] --> T1["3.4.1 タスク管理・追跡"]
Center --> T2["3.4.2 コミュニケーション・<br/>情報共有"]
Center --> T3["3.4.3 ビルド・配布<br/>(CI/CD)"]
Center --> T4["3.4.4 構成管理<br/>(バージョン管理)"]
Center --> T5["3.4.5 テスト設計・実装・<br/>実行"]
Center --> T6["3.4.6 クラウド・<br/>仮想化"]
T1 -.->|"タスクとコードを<br/>紐付け"| T4
T4 -->|"コミット/PRを<br/>トリガーに実行"| T3
T3 -->|"ビルド成果物を<br/>テスト環境へ配置"| T6
T6 -->|"テスト対象環境で<br/>実行"| T5
T5 -.->|"結果をチームに<br/>通知"| T2
T2 -.->|"議論内容を<br/>タスク化"| T1
style Center fill:#1a2744,stroke:#4a9eff,color:#fff
style T1 fill:#1e3a5f,stroke:#4a9eff,color:#fff
style T2 fill:#1e3a5f,stroke:#4a9eff,color:#fff
style T3 fill:#1e3a5f,stroke:#4a9eff,color:#fff
style T4 fill:#1e3a5f,stroke:#4a9eff,color:#fff
style T5 fill:#1e3a5f,stroke:#4a9eff,color:#fff
style T6 fill:#1e3a5f,stroke:#4a9eff,color:#fff`;

const DIAGRAM_12 = `flowchart TD
subgraph Sync["同期コミュニケーション"]
Video["ビデオ会議<br/>(Zoom, Microsoft Teams)"]
Chat["チャット<br/>(Slack, Teams)"]
end
subgraph Async["非同期コミュニケーション"]
Wiki["Wiki/ドキュメント<br/>(Confluence, Notion)"]
Board["ホワイトボード<br/>(Miro, FigJam)"]
end
Sync -.->|"議論の結果を"| Async
Async -.->|"事前情報の共有として"| Sync
style Sync fill:#1a3a5c,stroke:#4a9eff,color:#fff
style Async fill:#1a5c2e,stroke:#4ade80,color:#fff`;

const DIAGRAM_13 = `flowchart LR
Commit["コード<br/>コミット/PR"] --> Build["ビルド"]
Build --> UnitTest["単体テスト実行"]
UnitTest --> IntTest["統合/APIテスト実行"]
IntTest --> Package["パッケージング<br/>(コンテナイメージ等)"]
Package --> Deploy["ステージング環境へ<br/>デプロイ"]
Deploy --> E2ETest["E2Eテスト実行"]
E2ETest -->|"合格"| Prod["本番環境へ<br/>デプロイ"]
E2ETest -->|"不合格"| Notify["失敗を<br/>チームに通知"]
UnitTest -->|"不合格"| Notify
Notify --> Commit
style Commit fill:#1a2744,stroke:#4a9eff,color:#fff
style Prod fill:#1a5c2e,stroke:#4ade80,color:#fff
style Notify fill:#5c1a1a,stroke:#ff6b6b,color:#fff`;

const DIAGRAM_14 = `flowchart TD
Q1{"コードは<br/>どこでホストされているか?"}
Q1 -->|"GitHub"| A1["GitHub Actionsが<br/>最短経路"]
Q1 -->|"GitLab"| A2["GitLab CI/CDが<br/>摩擦なし"]
Q1 -->|"オンプレミス/<br/>エアギャップ環境"| A3["Jenkinsが<br/>唯一の現実解になりやすい"]
A1 --> Q2{"厳格な<br/>コンプライアンス要件は?"}
A2 --> Q2
Q2 -->|"あり"| B1["GitLab Ultimate や<br/>TeamCity/Harnessを検討"]
Q2 -->|"なし"| B2["選定したツールで<br/>そのまま運用"]
style Q1 fill:#5c4a1a,stroke:#ffb84a,color:#fff
style Q2 fill:#5c4a1a,stroke:#ffb84a,color:#fff`;

const DIAGRAM_15 = `gitGraph
commit id: "main初期状態"
branch feature/checkout
checkout feature/checkout
commit id: "受け入れテスト追加(ATDD)"
commit id: "実装(TDD)"
checkout main
merge feature/checkout id: "PRレビュー後マージ"
commit id: "CI/CDでビルド・自動テスト"
branch hotfix/payment-bug
checkout hotfix/payment-bug
commit id: "緊急バグ修正"
checkout main
merge hotfix/payment-bug id: "即時デプロイ"`;

const DIAGRAM_16 = `flowchart TD
Q1{"チームの主要言語は?"}
Q1 -->|"JavaScript/TypeScript中心"| Q2{"クロスブラウザ<br/>(Safari/Firefox)が必須か?"}
Q1 -->|"Java/Python/C#等<br/>多言語混在"| A3["Selenium<br/>(既存資産・言語多様性を活かす)"]
Q2 -->|"はい"| A1["Playwright"]
Q2 -->|"いいえ<br/>(Chrome/Edgeのみで良い)"| A2["Cypress<br/>(DXを優先)"]
A3 --> Q3{"レガシーブラウザ/<br/>ネイティブモバイル対応が必要か?"}
Q3 -->|"はい"| A4["Selenium + Appium"]
style Q1 fill:#5c4a1a,stroke:#ffb84a,color:#fff
style Q2 fill:#5c4a1a,stroke:#ffb84a,color:#fff
style Q3 fill:#5c4a1a,stroke:#ffb84a,color:#fff`;

const DIAGRAM_17 = `flowchart TD
subgraph Layer1["仮想化レイヤー"]
VM["仮想マシン<br/>(重量級、OS丸ごと仮想化)"]
Container["コンテナ<br/>(軽量級、OSカーネルを共有)"]
end
subgraph Layer2["オーケストレーション"]
Docker["Docker<br/>単一コンテナの構築・実行"]
K8s["Kubernetes<br/>複数コンテナの<br/>自動デプロイ・スケーリング"]
end
subgraph Layer3["クラウドプラットフォーム"]
AWS["AWS"]
Azure["Azure"]
GCP["Google Cloud"]
end
VM --> Docker
Container --> Docker
Docker --> K8s
K8s --> AWS
K8s --> Azure
K8s --> GCP
style Container fill:#1a5c2e,stroke:#4ade80,color:#fff
style Docker fill:#1e3a5f,stroke:#4a9eff,color:#fff
style K8s fill:#1e3a5f,stroke:#4a9eff,color:#fff`;

const DIAGRAM_18 = `flowchart TD
Start(["イテレーション開始"]) --> Plan["3.2 品質リスク評価<br/>+ 内容/リスクベースの見積り"]
Plan --> Method["3.1 実装アプローチを選択<br/>TDD / ATDD / BDD"]
Method --> Build["3.4.3+3.4.4<br/>構成管理+CI/CDで<br/>継続的に統合"]
Build --> Technique["3.3 適切な技法を適用<br/>クアドラント全体を<br/>カバーしているか確認"]
Technique --> Explore["3.3.4 探索的テストで<br/>想定外の欠陥を発見"]
Explore --> Tooling["3.4.1/3.4.2/3.4.5/3.4.6<br/>ツールチェーンで<br/>実行・共有・環境提供"]
Tooling --> Review["スプリントレビュー/<br/>レトロスペクティブ"]
Review --> Start
style Start fill:#1a2744,stroke:#4a9eff,color:#fff
style Review fill:#1a5c2e,stroke:#4ade80,color:#fff`;

/**
 * Renders the CTFL-AT Chapter 3 learning page on agile testing methods, techniques, and tools.
 */
export default function CtflAtChapter3Page() {
    return (
        <div className="ctfl-at-ch3-page">
            <div className="layout">
                <NavBar />

                <main>
                    <header className="hero">
                        <span className="hero__eyebrow">
                            <span className="dot" />ISTQB® CTFL-AT SYLLABUS v1.0 &middot; CHAPTER 3
                        </span>
                        <h1>
                            アジャイルテスト<span className="accent">技法</span>と<span className="accent">ツール</span>
                        </h1>
                        <p className="hero__sub">
                            TDD・ATDD・BDDからテスティングクアドラント、探索的テスト、CI/CDツールチェーンまで &mdash; 中級〜上級者向け実践解説
                        </p>
                        <div className="hero__meta">
                            <span className="pill">対象: <b>Foundation Level Agile Tester</b></span>
                            <span className="pill">図解: <b>Mermaid &times; 19</b></span>
                            <span className="pill">形式: <b>ステップバイステップ</b></span>
                            <span className="pill">更新: <b>2026年7月</b></span>
                        </div>
                    </header>

                    <div className="content">
                        <blockquote className="intro-card">
                            <p>
                                <strong>対象読者</strong>:
                                すでにCTFLまたは実務でのテスト経験があり、アジャイル開発におけるテスト技法・ツールを体系的かつ実践的に理解したい中級〜上級のテスト・QAエンジニア、開発者、スクラムマスター、プロダクトオーナー。
                            </p>
                            <p>
                                <strong>本ガイドの位置づけ</strong>: 本章は ISTQB® Certified Tester
                                Foundation Level Agile Tester (CTFL-AT) Syllabus v1.0 (2024年11月公開)
                                の
                                <strong>Chapter 3: Agile Testing Methods, Techniques and Tools</strong>
                                を主たる典拠とし、各技法・ツールの解説を最新(2026年)の業界動向・一次情報で補強したものです。シラバス自体は「What」(何を知っておくべきか)を簡潔に定義するにとどまるため、本ガイドでは「Why」(なぜそれが重要か)と「How」(どう実践するか)をMermaid図・比較表・コード例を交えてステップバイステップで掘り下げます。
                            </p>
                            <p>
                                <strong>免責事項</strong>:
                                本ガイドは学習・実務理解を目的とした二次解説であり、公式シラバスの逐語再現ではありません。試験直前の一言一句の確認は、必ず
                                ISTQB® 公式サイトで公開されている最新版シラバスPDFをご参照ください。 -
                                公式シラバス certification page:{' '}
                                <a href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/" target="_blank" rel="noopener noreferrer">
                                    https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/
                                </a>{' '}
                                - シラバスPDF (ダウンロードリンク経由):{' '}
                                <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=3647" target="_blank" rel="noopener noreferrer">
                                    https://istqb.org/?sdm_process_download=1&amp;download_id=3647
                                </a>
                            </p>
                        </blockquote>

                        <hr />

                        <h2 id="0-chapter-3">0. Chapter 3 の全体マップ</h2>
                        <p>
                            CTFL-AT Chapter 3
                            は、アジャイルプロジェクトにおける「テストの手法(Methods)」「見積りとリスク評価」「具体的な技法(Techniques)」「それらを支えるツール(Tools)」という4つの層で構成されています。まず全体像をMermaidで俯瞰します。
                        </p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_0} />
                        </div>
                        <p>
                            <strong>なぜこの構造なのか</strong>:
                            アジャイル開発では「テストを後工程に置く」従来型ではなく、「テストを開発サイクルに織り込む(shift-left)」ことが前提になります。そのため、まず開発と一体化した手法(3.1)を学び、次に限られたイテレーション期間でどこにテスト労力を割くかというリスクベースの判断(3.2)を学び、そのうえで具体的な技法(3.3)とそれを支えるツールチェーン(3.4)を理解する、という積み上げ構造になっています。
                        </p>
                        <p>
                            参考: ISTQB®の資格体系では、本ガイドが扱うFoundation Level Agile Tester
                            (CTFL-AT) の上位に、より高度な実務経験を持つテスターを対象としたAdvanced
                            Level Agile Tester (CTAL-AT)
                            が位置づけられています。本章で学ぶ内容は、その上位資格に進むための土台となる基礎知識です。
                            URL:{' '}
                            <a href="https://istqb.org/" target="_blank" rel="noopener noreferrer">
                                https://istqb.org/
                            </a>
                        </p>

                        <hr />

                        <h2 id="31-tddatddbdd">3.1 アジャイルテスト手法(TDD・ATDD・BDD)</h2>
                        <h3 id="310-3">3.1.0 なぜ3つも「駆動開発」があるのか</h3>
                        <p>
                            アジャイル開発では「テストファースト」という考え方が中心にありますが、<strong>誰が・何を対象に・どのレベルで</strong>テストを先に書くかによって3つの流派に分かれます。この違いを最初に押さえることが理解の近道です。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>手法</th>
                                        <th>主な担当者</th>
                                        <th>対象レベル</th>
                                        <th>記述形式</th>
                                        <th>主目的</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>TDD</strong> (Test-Driven Development)</td>
                                        <td>開発者</td>
                                        <td>単体(コード単位)</td>
                                        <td>テストコード(xUnit等)</td>
                                        <td>内部設計・実装の品質を駆動する</td>
                                    </tr>
                                    <tr>
                                        <td><strong>ATDD</strong> (Acceptance Test-Driven Development)</td>
                                        <td>開発者・テスター・ビジネス代表(Three Amigos)</td>
                                        <td>受け入れ(ユーザーストーリー単位)</td>
                                        <td>受け入れ基準・受け入れテスト</td>
                                        <td>「何を作るべきか」の認識合わせ</td>
                                    </tr>
                                    <tr>
                                        <td><strong>BDD</strong> (Behavior-Driven Development)</td>
                                        <td>開発者・テスター・ビジネス代表</td>
                                        <td>振る舞い(シナリオ単位)</td>
                                        <td>自然言語(Given-When-Then)</td>
                                        <td>ビジネス言語でテストを表現し自動化する</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <blockquote>
                            <p>
                                💡 <strong>ポイント</strong>: TDD/ATDD/BDDは排他的ではなく、実務では
                                <strong>ATDD/BDDで「何を作るか」を合意 &rarr; TDDで「どう作るか」を実装</strong>
                                という形で併用されるのが一般的です。
                            </p>
                        </blockquote>

                        <hr />

                        <h3 id="311-test-driven-development-tdd">
                            3.1.1 Test-Driven Development (TDD)
                        </h3>
                        <p>
                            <strong>定義</strong>:
                            プロダクションコードを書く前に、まず失敗するテストコードを書き、そのテストを通す最小限の実装を行い、その後リファクタリングするという開発サイクル。Kent
                            Beckが体系化したことで知られています。
                        </p>
                        <h4 id="red-green-refactor">Red-Green-Refactorサイクル</h4>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_1} />
                        </div>
                        <p><strong>ステップバイステップの流れ</strong>:</p>
                        <ol>
                            <li>
                                <strong>Red</strong>:
                                これから実装する振る舞いを表す、失敗するテストを1つだけ書く。まだ実装がないのでコンパイルエラーまたはアサーション失敗になる。
                            </li>
                            <li>
                                <strong>Green</strong>:
                                そのテストを通すためだけの、最も単純な実装を書く(ハードコードでもよい)。過剰設計をしない。
                            </li>
                            <li>
                                <strong>Refactor</strong>:
                                テストがGreenのまま、重複除去・命名改善・構造整理を行う。テストが安全網になっているため、大胆なリファクタリングが可能。
                            </li>
                            <li>次の振る舞いについて1に戻る。</li>
                        </ol>
                        <p><strong>コード例(TypeScript / Jest)</strong>:</p>
                        <div className="code-block">
                            <div className="code-block__label">TypeScript</div>
                            <pre>
                                <code>
                                    <div className="code-line"><span className="code-comment">// Step 1: Red - 失敗するテストを先に書く</span></div>
                                    <div className="code-line"><span className="code-func">describe</span>(<span className="code-string">&quot;PriceCalculator&quot;</span>, () =&gt; {'{'}</div>
                                    <div className="code-line">  <span className="code-func">it</span>(<span className="code-string">&quot;税込み価格を計算できる&quot;</span>, () =&gt; {'{'}</div>
                                    <div className="code-line">    <span className="code-keyword">const</span> calculator = <span className="code-keyword">new</span> <span className="code-type">PriceCalculator</span>(<span className="code-number">0.10</span>); <span className="code-comment">// 消費税10%</span></div>
                                    <div className="code-line">    <span className="code-func">expect</span>(calculator.<span className="code-func">withTax</span>(<span className="code-number">1000</span>)).<span className="code-func">toBe</span>(<span className="code-number">1100</span>);</div>
                                    <div className="code-line">  {'}'});</div>
                                    <div className="code-line">{'}'});</div>
                                    <div className="code-line" />
                                    <div className="code-line"><span className="code-comment">// Step 2: Green - 最小限の実装</span></div>
                                    <div className="code-line"><span className="code-keyword">class</span> <span className="code-type">PriceCalculator</span> {'{'}</div>
                                    <div className="code-line">  <span className="code-keyword">constructor</span>(<span className="code-keyword">private</span> taxRate: <span className="code-type">number</span>) {'{}'}</div>
                                    <div className="code-line">  <span className="code-func">withTax</span>(price: <span className="code-type">number</span>): <span className="code-type">number</span> {'{'}</div>
                                    <div className="code-line">    <span className="code-keyword">return</span> price + price * <span className="code-keyword">this</span>.taxRate;</div>
                                    <div className="code-line">  {'}'}</div>
                                    <div className="code-line">{'}'}</div>
                                    <div className="code-line" />
                                    <div className="code-line"><span className="code-comment">// Step 3: Refactor - 端数処理など仕様が明確になった時点で整理</span></div>
                                    <div className="code-line"><span className="code-keyword">class</span> <span className="code-type">PriceCalculator</span> {'{'}</div>
                                    <div className="code-line">  <span className="code-keyword">constructor</span>(<span className="code-keyword">private</span> <span className="code-keyword">readonly</span> taxRate: <span className="code-type">number</span>) {'{}'}</div>
                                    <div className="code-line">  <span className="code-func">withTax</span>(price: <span className="code-type">number</span>): <span className="code-type">number</span> {'{'}</div>
                                    <div className="code-line">    <span className="code-keyword">return</span> Math.<span className="code-func">round</span>(price * (<span className="code-number">1</span> + <span className="code-keyword">this</span>.taxRate));</div>
                                    <div className="code-line">  {'}'}</div>
                                    <div className="code-line">{'}'}</div>
                                </code>
                            </pre>
                        </div>
                        <p>
                            <strong>TDDがアジャイルで重視される理由</strong>: -
                            イテレーションが短いアジャイル開発では、後工程での大規模な手戻りが許容されない。TDDは実装と同時に回帰テストのセーフティネットを構築する。
                            -
                            「動くコード」を頻繁にデモする必要があるため、常にテストが通る状態(Green)を保ちながら進められるTDDのリズムと相性が良い。
                            -
                            設計の副産物として、テスト容易性(testability)の高い疎結合な設計が自然に導かれる。
                        </p>
                        <p>
                            <strong>参考文献</strong>: - Agile Alliance, &quot;TDD&quot; 用語解説:{' '}
                            <a href="https://www.agilealliance.org/glossary/tdd/" target="_blank" rel="noopener noreferrer">
                                https://www.agilealliance.org/glossary/tdd/
                            </a>{' '}
                            - Martin Fowler, &quot;TestDrivenDevelopment&quot;:{' '}
                            <a href="https://martinfowler.com/bliki/TestDrivenDevelopment.html" target="_blank" rel="noopener noreferrer">
                                https://martinfowler.com/bliki/TestDrivenDevelopment.html
                            </a>
                        </p>

                        <hr />

                        <h3 id="312-acceptance-test-driven-development-atdd">
                            3.1.2 Acceptance Test-Driven Development (ATDD)
                        </h3>
                        <p>
                            <strong>定義</strong>:
                            ユーザーストーリーの実装に着手する前に、開発者・テスター・ビジネス代表(プロダクトオーナー等)の三者が協働して受け入れテスト(Acceptance
                            Test)を定義する手法。この三者協働は「Three
                            Amigos」(スリーアミーゴ)と呼ばれます。
                        </p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_2} />
                        </div>
                        <p><strong>ステップバイステップ</strong>:</p>
                        <ol>
                            <li>
                                <strong>ストーリーの選定</strong>:
                                スプリントプランニングや直前のリファインメントで対象ユーザーストーリーを決める。
                            </li>
                            <li>
                                <strong>Three Amigosセッションの実施</strong>:
                                実装着手前に三者が集まり、要求の曖昧さを洗い出す。
                            </li>
                            <li>
                                <strong>受け入れ基準(Acceptance Criteria)の合意</strong>:
                                Given-When-Then形式や箇条書きで、「完了の定義」を明文化する。
                            </li>
                            <li>
                                <strong>受け入れテストの自動化</strong>:
                                合意した基準をそのまま自動テストとして落とし込む(BDDツールと組み合わせることが多い)。
                            </li>
                            <li>
                                <strong>実装</strong>:
                                開発者は受け入れテストをパスすることを目標にTDDサイクルで実装する。
                            </li>
                            <li>
                                <strong>検証</strong>:
                                完成後、自動化された受け入れテストと必要に応じた探索的テストで確認する。
                            </li>
                        </ol>
                        <p>
                            <strong>ATDDの効果</strong>: -
                            「作ってから仕様がずれていたことに気づく」という手戻りを防ぐ(shift-left)。 -
                            テスターが実装後ではなく<strong>要求定義の段階</strong>から品質に関与できる。
                            - 受け入れ基準がそのまま生きたドキュメント(living documentation)になる。
                        </p>
                        <p>
                            <strong>参考文献</strong>: - Agile Alliance, &quot;Acceptance Test-Driven
                            Development (ATDD)&quot;:{' '}
                            <a href="https://www.agilealliance.org/glossary/atdd/" target="_blank" rel="noopener noreferrer">
                                https://www.agilealliance.org/glossary/atdd/
                            </a>{' '}
                            - Ministry of Testing, &quot;Three Amigos&quot; 実践解説:{' '}
                            <a href="https://www.ministryoftesting.com/dojo/lessons/three-amigos" target="_blank" rel="noopener noreferrer">
                                https://www.ministryoftesting.com/dojo/lessons/three-amigos
                            </a>
                        </p>

                        <hr />

                        <h3 id="313-behavior-driven-development-bdd">
                            3.1.3 Behavior-Driven Development (BDD)
                        </h3>
                        <p>
                            <strong>定義</strong>:
                            システムの振る舞いを自然言語に近い構文(Given-When-Then)で記述し、それを自動テストとして直接実行可能にする手法。Dan
                            Northが提唱し、ビジネス・開発・テストの共通言語(Ubiquitous
                            Language)を作ることを目的とします。
                        </p>
                        <h4 id="gherkingiven-when-then">Gherkin構文とGiven-When-Then</h4>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_3} />
                        </div>
                        <p><strong>コード例(Gherkin / Cucumber形式)</strong>:</p>
                        <div className="code-block">
                            <div className="code-block__label">Gherkin</div>
                            <pre>
                                <code>
                                    <div className="code-line"><span className="code-keyword">機能:</span> ATMからの現金引き出し</div>
                                    <div className="code-line">  顧客が正しい残高範囲内で現金を引き出せることを保証する</div>
                                    <div className="code-line" />
                                    <div className="code-line">  <span className="code-keyword">シナリオ:</span> 残高内での引き出し成功</div>
                                    <div className="code-line">    <span className="code-cyan">前提</span> 口座残高が10000円である</div>
                                    <div className="code-line">    <span className="code-amber">もし</span> 3000円の引き出しを要求する</div>
                                    <div className="code-line">    <span className="code-green">ならば</span> 引き出しは成功する</div>
                                    <div className="code-line">    <span className="code-cyan">かつ</span> 口座残高は7000円になる</div>
                                    <div className="code-line" />
                                    <div className="code-line">  <span className="code-keyword">シナリオ:</span> 残高不足時の引き出し失敗</div>
                                    <div className="code-line">    <span className="code-cyan">前提</span> 口座残高が2000円である</div>
                                    <div className="code-line">    <span className="code-amber">もし</span> 3000円の引き出しを要求する</div>
                                    <div className="code-line">    <span className="code-green">ならば</span> 引き出しは失敗する</div>
                                    <div className="code-line">    <span className="code-cyan">かつ</span> エラーメッセージ「残高不足」が表示される</div>
                                </code>
                            </pre>
                        </div>
                        <p><strong>このシナリオをステップ定義に接続する(TypeScript例)</strong>:</p>
                        <div className="code-block">
                            <div className="code-block__label">TypeScript</div>
                            <pre>
                                <code>
                                    <div className="code-line"><span className="code-keyword">import</span> {'{'} <span className="code-func">Given</span>, <span className="code-func">When</span>, <span className="code-func">Then</span> {'}'} <span className="code-keyword">from</span> <span className="code-string">&quot;@cucumber/cucumber&quot;</span>;</div>
                                    <div className="code-line"><span className="code-keyword">import</span> assert <span className="code-keyword">from</span> <span className="code-string">&quot;assert&quot;</span>;</div>
                                    <div className="code-line" />
                                    <div className="code-line"><span className="code-func">Given</span>(<span className="code-string">&quot;口座残高が{'{'}int{'}'}円である&quot;</span>, <span className="code-keyword">function</span> (balance: <span className="code-type">number</span>) {'{'}</div>
                                    <div className="code-line">  <span className="code-keyword">this</span>.account = <span className="code-keyword">new</span> <span className="code-type">Account</span>(balance);</div>
                                    <div className="code-line">{'}'});</div>
                                    <div className="code-line" />
                                    <div className="code-line"><span className="code-func">When</span>(<span className="code-string">&quot;{'{'}int{'}'}円の引き出しを要求する&quot;</span>, <span className="code-keyword">function</span> (amount: <span className="code-type">number</span>) {'{'}</div>
                                    <div className="code-line">  <span className="code-keyword">this</span>.result = <span className="code-keyword">this</span>.account.<span className="code-func">withdraw</span>(amount);</div>
                                    <div className="code-line">{'}'});</div>
                                    <div className="code-line" />
                                    <div className="code-line"><span className="code-func">Then</span>(<span className="code-string">&quot;引き出しは成功する&quot;</span>, <span className="code-keyword">function</span> () {'{'}</div>
                                    <div className="code-line">  assert.<span className="code-func">strictEqual</span>(<span className="code-keyword">this</span>.result.success, <span className="code-keyword">true</span>);</div>
                                    <div className="code-line">{'}'});</div>
                                    <div className="code-line" />
                                    <div className="code-line"><span className="code-func">Then</span>(<span className="code-string">&quot;口座残高は{'{'}int{'}'}円になる&quot;</span>, <span className="code-keyword">function</span> (expected: <span className="code-type">number</span>) {'{'}</div>
                                    <div className="code-line">  assert.<span className="code-func">strictEqual</span>(<span className="code-keyword">this</span>.account.balance, expected);</div>
                                    <div className="code-line">{'}'});</div>
                                </code>
                            </pre>
                        </div>
                        <p><strong>BDDの3つの価値</strong>:</p>
                        <ol>
                            <li>
                                <strong>共通言語</strong>:
                                非エンジニアも読める形式のため、ビジネス代表がテストシナリオを直接レビューできる。
                            </li>
                            <li>
                                <strong>生きた仕様書(Living Documentation)</strong>:
                                <code>.feature</code>ファイル自体が常に最新の振る舞い仕様となる。
                            </li>
                            <li>
                                <strong>自動化との直結</strong>:
                                シナリオがそのまま実行可能なテストになるため、仕様とテストの乖離が起きにくい。
                            </li>
                        </ol>
                        <p>
                            <strong>代表的なBDDツール</strong>:
                            Cucumber(多言語対応)、SpecFlow(.NET)、Behave(Python)、JBehave(Java)。
                        </p>
                        <p>
                            <strong>参考文献</strong>: - Cucumber公式ドキュメント &quot;Gherkin Reference&quot;:{' '}
                            <a href="https://cucumber.io/docs/gherkin/reference/" target="_blank" rel="noopener noreferrer">
                                https://cucumber.io/docs/gherkin/reference/
                            </a>{' '}
                            - Dan North, &quot;What&apos;s in a Story?&quot;:{' '}
                            <a href="https://dannorth.net/whats-in-a-story/" target="_blank" rel="noopener noreferrer">
                                https://dannorth.net/whats-in-a-story/
                            </a>{' '}
                            - Agile Alliance, &quot;Behavior-Driven Development&quot;:{' '}
                            <a href="https://www.agilealliance.org/glossary/bdd/" target="_blank" rel="noopener noreferrer">
                                https://www.agilealliance.org/glossary/bdd/
                            </a>
                        </p>

                        <hr />

                        <h3 id="314-tddatddbdd1">3.1.4 TDD・ATDD・BDDの関係性を1枚で理解する</h3>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_4} />
                        </div>
                        <p><strong>まとめ表</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>TDD</th>
                                        <th>ATDD</th>
                                        <th>BDD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>起点</td>
                                        <td>開発者の設計意図</td>
                                        <td>ビジネス要求(ユーザーストーリー)</td>
                                        <td>ビジネス要求(振る舞い)</td>
                                    </tr>
                                    <tr>
                                        <td>記述言語</td>
                                        <td>プログラミング言語</td>
                                        <td>自然言語 or 表形式</td>
                                        <td>制御された自然言語(Gherkin)</td>
                                    </tr>
                                    <tr>
                                        <td>主な参加者</td>
                                        <td>開発者単独が多い</td>
                                        <td>Three Amigos(3者協働)</td>
                                        <td>Three Amigos(3者協働)</td>
                                    </tr>
                                    <tr>
                                        <td>テストの粒度</td>
                                        <td>単体・コンポーネント</td>
                                        <td>受け入れ(機能単位)</td>
                                        <td>シナリオ(振る舞い単位)</td>
                                    </tr>
                                    <tr>
                                        <td>ドキュメントとしての価値</td>
                                        <td>低い(実装者向け)</td>
                                        <td>中程度</td>
                                        <td>高い(非エンジニアも読める)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <hr />

                        <h2 id="32">3.2 品質リスクの評価とテスト工数の見積り</h2>
                        <p>
                            アジャイル開発では、ウォーターフォールのような包括的なテスト計画書を最初に固定するのではなく、<strong>イテレーションごとに軽量なリスク評価と見積りを繰り返す</strong>アプローチを取ります。ここでは「何を・どれだけ深くテストすべきか」を判断するための2つの実践技法を扱います。
                        </p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_5} />
                        </div>

                        <h3 id="321">3.2.1 アジャイルプロジェクトにおける品質リスク評価</h3>
                        <p>
                            <strong>なぜ従来型のリスク評価と違うのか</strong>:
                            従来のリスクベースドテスト(Risk-Based
                            Testing)では、プロジェクト開始時に詳細なリスク分析を1回実施しますが、アジャイルでは要求(バックログ)自体が継続的に変化するため、<strong>軽量かつ反復的</strong>なリスク評価が求められます。
                        </p>
                        <p>
                            <strong>ステップバイステップ: プロダクトリスクワークショップの進め方</strong>
                        </p>
                        <ol>
                            <li>
                                <strong>参加者を集める</strong>:
                                プロダクトオーナー、開発者、テスター、必要に応じてUX担当者やビジネスアナリストを含む。
                            </li>
                            <li>
                                <strong>対象範囲を決める</strong>:
                                直近のリリース、または着手予定のエピック/ストーリー群を対象とする。
                            </li>
                            <li>
                                <strong>リスク項目を洗い出す</strong>:
                                「もし〇〇が壊れたら、ユーザー・ビジネスにどんな影響があるか」をブレインストーミングする。典型的なリスクカテゴリ:
                                - 機能的リスク(誤った計算結果、業務ロジックの欠陥) -
                                非機能的リスク(性能劣化、セキュリティ脆弱性、可用性低下) -
                                技術的リスク(複雑な外部連携、新技術の採用)
                            </li>
                            <li>
                                <strong>発生確率(Likelihood)と影響度(Impact)を評価する</strong>:
                                通常は「高・中・低」の3段階、またはPoker形式の相対値で評価する。
                            </li>
                            <li>
                                <strong>リスクレベルからテストの深さを決める</strong>:
                                高リスク項目には多くのテスト技法(自動化+探索的テスト+非機能テスト)を割り当て、低リスク項目には最小限のスモークテストのみを割り当てる。
                            </li>
                            <li>
                                <strong>合意事項をバックログに反映する</strong>:
                                リスクの高いストーリーには「受け入れ基準」や「テストタスク」として明示的に追記する。
                            </li>
                        </ol>
                        <p><strong>リスクレベルとテスト深度のマトリクス例</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>発生確率／影響度</th>
                                        <th>低</th>
                                        <th>中</th>
                                        <th>高</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>高</strong></td>
                                        <td>中程度のテスト(主要シナリオ+境界値)</td>
                                        <td>手厚いテスト(自動化+探索的+性能)</td>
                                        <td>最優先・全技法を投入(自動化・探索的・非機能・セキュリティ)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>中</strong></td>
                                        <td>最小限(スモークテストのみ)</td>
                                        <td>標準的なテスト(機能テスト+代表的な異常系)</td>
                                        <td>手厚いテスト(自動化+探索的)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>低</strong></td>
                                        <td>最小限、または省略</td>
                                        <td>最小限(スモークテストのみ)</td>
                                        <td>中程度のテスト</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <strong>参考文献</strong>: - ISTQB Advanced Level Test Analyst Syllabus
                            における product risk analysis の考え方(参考):{' '}
                            <a href="https://istqb.org/" target="_blank" rel="noopener noreferrer">
                                https://istqb.org/
                            </a>{' '}
                            - Rex Black, &quot;Risk-Based Testing&quot; 解説記事(ISTQB系著者による一般解説):{' '}
                            <a href="https://www.rbcs-us.com/resources/articles/risk-based-testing/" target="_blank" rel="noopener noreferrer">
                                https://www.rbcs-us.com/resources/articles/risk-based-testing/
                            </a>{' '}
                            - Agile Alliance, &quot;Risk-Based Testing&quot;:{' '}
                            <a href="https://www.agilealliance.org/glossary/risk-based-testing/" target="_blank" rel="noopener noreferrer">
                                https://www.agilealliance.org/glossary/risk-based-testing/
                            </a>
                        </p>

                        <hr />

                        <h3 id="322">3.2.2 内容とリスクに基づくテスト工数の見積り</h3>
                        <p>
                            アジャイルでは、テスト工数を独立した見積り項目として切り出すのではなく、<strong>ストーリー全体の見積りの中にテスト活動を織り込む</strong>のが一般的です。
                        </p>
                        <p><strong>ステップバイステップ: プランニングポーカーによる見積り</strong></p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_6} />
                        </div>
                        <p>
                            <strong>なぜフィボナッチ数列を使うのか</strong>:
                            数値が大きくなるほど間隔が広がるため、「見積りの精度は規模が大きいほど粗くなる」という現実(不確実性コーン)を自然に表現できます。テストタスク(異常系の網羅、性能検証など)は特に規模が大きくなるほど見落としが発生しやすいため、この粗さが安全側に働きます。
                        </p>
                        <p><strong>見積りに影響する典型的なテスト関連要因</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>要因</th>
                                        <th>テスト工数への影響</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>受け入れ基準の数と複雑さ</td>
                                        <td>基準が多い・曖昧なほど工数増加</td>
                                    </tr>
                                    <tr>
                                        <td>外部システムとの連携有無</td>
                                        <td>スタブ/モック作成や結合テストの工数が追加</td>
                                    </tr>
                                    <tr>
                                        <td>非機能要件(性能・セキュリティ)</td>
                                        <td>専門的なテスト技法・ツール準備が必要</td>
                                    </tr>
                                    <tr>
                                        <td>既存機能への影響範囲</td>
                                        <td>リグレッションテストの範囲が拡大</td>
                                    </tr>
                                    <tr>
                                        <td>テスト自動化の既存資産の有無</td>
                                        <td>ゼロから自動化する場合は工数が大きく増加</td>
                                    </tr>
                                    <tr>
                                        <td>データ準備の複雑さ</td>
                                        <td>テストデータ生成・匿名化などの前処理が必要</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <strong>内容(Content)に基づく見積りのポイント</strong>:
                            「ストーリーポイント」は本質的にはストーリー全体の複雑さ・不確実性・作業量を表す相対値であり、テストだけを別枠で見積もるのではなく、<strong
                            >開発・テスト・レビューを含めた「完了の定義(Definition of
                            Done)」を満たすために必要な全作業</strong>
                            を含めて見積もることが、アジャイルテスト工数見積りの基本原則です。
                        </p>
                        <p>
                            <strong>参考文献</strong>: - Mike Cohn, &quot;Planning Poker&quot; 解説(Mountain Goat
                            Software):{' '}
                            <a href="https://www.mountaingoatsoftware.com/agile/planning-poker" target="_blank" rel="noopener noreferrer">
                                https://www.mountaingoatsoftware.com/agile/planning-poker
                            </a>{' '}
                            - Scrum.org, &quot;What is Definition of Done?&quot;:{' '}
                            <a href="https://www.scrum.org/resources/what-definition-done" target="_blank" rel="noopener noreferrer">
                                https://www.scrum.org/resources/what-definition-done
                            </a>
                        </p>

                        <hr />

                        <h2 id="33">3.3 アジャイルプロジェクトにおける技法</h2>
                        <h3 id="331-testing-quadrants">
                            3.3.1 テスティング・クアドラント(Testing Quadrants)
                        </h3>
                        <p>
                            <strong>なぜ必要か</strong>:
                            アジャイルチームは「どのテストを」「いつ」「誰が」「何のために」実施するかを整理する共通言語を必要とします。Brian
                            MarickのAgile Testing Matrixを基に Lisa Crispin と Janet Gregory
                            が体系化した<strong>テスティング・クアドラント</strong>は、テストを2つの軸で4象限に分類するモデルです。
                        </p>
                        <ul>
                            <li>
                                <strong>横軸</strong>: ビジネス視点(Business-Facing) vs
                                技術視点(Technology-Facing)
                            </li>
                            <li>
                                <strong>縦軸</strong>: チームを支援する(Supporting the Team) vs
                                プロダクトを批評する(Critiquing the Product)
                            </li>
                        </ul>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_7} />
                        </div>
                        <p>
                            <em>
                                凡例: 図の左側(Q1, Q4)が「技術視点(Technology-Facing)」、右側(Q2,
                                Q3)が「ビジネス視点(Business-Facing)」を表し、上段(Q1,
                                Q2)が「チームを支援」、下段(Q4,
                                Q3)が「プロダクトを批評」を表します。
                            </em>
                        </p>
                        <p><strong>各象限の詳細</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>象限</th>
                                        <th>名称</th>
                                        <th>目的</th>
                                        <th>代表的なテスト</th>
                                        <th>主な自動化可否</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Q1</strong></td>
                                        <td>技術視点・チーム支援</td>
                                        <td>開発を内側から支える</td>
                                        <td>単体テスト、コンポーネントテスト、コンポーネント統合テスト</td>
                                        <td>高い自動化が前提(TDD由来)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Q2</strong></td>
                                        <td>ビジネス視点・チーム支援</td>
                                        <td>「作るべきものを正しく作っているか」を確認</td>
                                        <td>
                                            機能テスト、ストーリーテスト、受け入れ基準の検証、プロトタイプ検証
                                        </td>
                                        <td>自動化推奨(ATDD/BDD)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Q3</strong></td>
                                        <td>ビジネス視点・プロダクト批評</td>
                                        <td>実際のユーザー視点で製品を評価</td>
                                        <td>
                                            探索的テスト、ユーザビリティテスト、UAT、シナリオベースのE2Eテスト
                                        </td>
                                        <td>手動が中心(人間の判断が価値を生む)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Q4</strong></td>
                                        <td>技術視点・プロダクト批評</td>
                                        <td>システムの非機能特性を評価</td>
                                        <td>
                                            性能テスト、負荷テスト、セキュリティテスト、信頼性テスト、保守性テスト
                                        </td>
                                        <td>専用ツールによる自動化が中心</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>ステップバイステップ活用法</strong>:</p>
                        <ol>
                            <li>
                                対象ストーリー・リリースについて、4象限それぞれに該当するテストタスクが漏れなく検討されているかチェックリストとして使う。
                            </li>
                            <li>
                                「Q1・Q2に偏っていてQ4(非機能)が手薄」といった<strong>テスト戦略の偏り</strong>を可視化する。
                            </li>
                            <li>
                                スプリントレビューやリリース判定会議で、各象限の消化状況を報告し、意思決定の材料にする。
                            </li>
                        </ol>
                        <p>
                            <strong>参考文献</strong>: - Lisa Crispin, &quot;Using the Agile Testing
                            Quadrants&quot;:{' '}
                            <a href="https://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/" target="_blank" rel="noopener noreferrer">
                                https://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/
                            </a>{' '}
                            - Agile Alliance, &quot;Agile Testing Quadrants&quot;:{' '}
                            <a href="https://www.agilealliance.org/glossary/agile-testing-quadrants/" target="_blank" rel="noopener noreferrer">
                                https://www.agilealliance.org/glossary/agile-testing-quadrants/
                            </a>
                        </p>

                        <hr />

                        <h3 id="332">3.3.2 非機能テストと技術的負債の考慮</h3>
                        <p>
                            アジャイルの短いイテレーションでは、機能要件(Q2/Q3)の実装に意識が向きがちで、性能・セキュリティ・保守性といった<strong>非機能要件(Q4)</strong>や、応急的な実装によって蓄積する<strong
                            >技術的負債(Technical Debt)</strong>
                            が後回しにされるリスクがあります。
                        </p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_8} />
                        </div>
                        <p><strong>実践上の対応策</strong>:</p>
                        <ol>
                            <li>
                                <strong>Definition of Doneに非機能基準を組み込む</strong>:
                                「性能テストに合格」「静的解析ツールの警告ゼロ」などをストーリー完了の条件に含める。
                            </li>
                            <li>
                                <strong>継続的インテグレーション(CI)に自動チェックを組み込む</strong>:
                                単体テストと同様に、性能回帰テストやセキュリティスキャンをCIパイプラインに組み込み、負債を早期発見する(3.4.3で詳述)。
                            </li>
                            <li>
                                <strong>技術的負債を可視化してバックログ管理する</strong>:
                                「負債チケット」として明示的にバックログに登録し、プロダクトオーナーと優先順位を協議する。
                            </li>
                            <li>
                                <strong>リファクタリングを継続的な作業として計画に含める</strong>:
                                TDDのRefactorステップだけでなく、スプリントの一定割合を保守性向上に充てる。
                            </li>
                        </ol>
                        <p>
                            <strong>参考文献</strong>: - Martin Fowler, &quot;TechnicalDebt&quot;:{' '}
                            <a href="https://martinfowler.com/bliki/TechnicalDebt.html" target="_blank" rel="noopener noreferrer">
                                https://martinfowler.com/bliki/TechnicalDebt.html
                            </a>{' '}
                            - Agile Alliance, &quot;Technical Debt&quot;:{' '}
                            <a href="https://www.agilealliance.org/glossary/technical-debt/" target="_blank" rel="noopener noreferrer">
                                https://www.agilealliance.org/glossary/technical-debt/
                            </a>
                        </p>

                        <hr />

                        <h3 id="333">3.3.3 リグレッションテストとテスト自動化ピラミッド</h3>
                        <p>
                            イテレーションのたびに新機能を追加しながら、<strong>既存機能が壊れていないこと</strong>を継続的に確認する必要があります。これがリグレッションテストであり、アジャイルではその大部分を自動化に依存します。自動化戦略のバランスを示す代表的なモデルが<strong>テスト自動化ピラミッド</strong>です。
                        </p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_9} />
                        </div>
                        <p><strong>なぜピラミッド型が推奨されるのか</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>レイヤー</th>
                                        <th>実行速度</th>
                                        <th>保守コスト</th>
                                        <th>フィードバックの速さ</th>
                                        <th>推奨比率(目安)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>単体テスト</td>
                                        <td>非常に速い(ms単位)</td>
                                        <td>低い</td>
                                        <td>即座</td>
                                        <td>全体の約60-70%</td>
                                    </tr>
                                    <tr>
                                        <td>統合/APIテスト</td>
                                        <td>中程度(秒単位)</td>
                                        <td>中程度</td>
                                        <td>数分以内</td>
                                        <td>全体の約20-30%</td>
                                    </tr>
                                    <tr>
                                        <td>E2E/UIテスト</td>
                                        <td>遅い(分単位)</td>
                                        <td>高い(UI変更に弱い)</td>
                                        <td>数十分〜</td>
                                        <td>全体の約5-10%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <blockquote>
                            <p>
                                ⚠️ <strong>アンチパターン「アイスクリームコーン」</strong>:
                                E2Eテストばかりを増やし単体テストが少ない逆三角形の構成は、実行が遅く、壊れやすく(flaky)、失敗原因の特定が困難になるため避けるべきとされています。
                            </p>
                        </blockquote>
                        <p>
                            <strong>リグレッションテストの選択戦略</strong>: 1.
                            <strong>リスクベースの選択</strong>:
                            3.2.1のリスク評価結果を用いて、高リスク領域を優先的に自動化・再実行する。 2.
                            <strong>変更影響分析</strong>:
                            バージョン管理システム(3.4.4)の差分情報から、変更されたモジュールに関連するテストを優先実行する。
                            3. <strong>CI/CDへの統合</strong>:
                            プルリクエストごとに該当レイヤーのテストを自動実行し、マージ前に回帰を検出する(3.4.3で詳述)。
                        </p>
                        <p>
                            <strong>参考文献</strong>: - Martin Fowler, &quot;TestPyramid&quot;:{' '}
                            <a href="https://martinfowler.com/bliki/TestPyramid.html" target="_blank" rel="noopener noreferrer">
                                https://martinfowler.com/bliki/TestPyramid.html
                            </a>{' '}
                            - Google Testing Blog, &quot;Just Say No to More End-to-End Tests&quot;:{' '}
                            <a href="https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html" target="_blank" rel="noopener noreferrer">
                                https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html
                            </a>
                        </p>

                        <hr />

                        <h3 id="334-exploratory-testing">3.3.4 探索的テスト(Exploratory Testing)</h3>
                        <p>
                            <strong>定義</strong>:
                            事前に詳細なテストケースを設計するのではなく、テスターが<strong>学習・テスト設計・テスト実行を同時並行</strong>で行いながら、システムに対する理解を深めつつ欠陥を発見していくアプローチ。自動化では見つけにくい「想定外の使われ方」や「体験としての違和感」を発見するのに優れています。
                        </p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_10} />
                        </div>
                        <p>
                            上図が示すように、探索的テストでは3つの活動が<strong>同時に、双方向に</strong>影響し合いながら進みます。これが事前に全テストケースを固定する「スクリプトテスト」との決定的な違いです。
                        </p>
                        <p>
                            <strong>ステップバイステップ: セッションベーステストマネジメント(SBTM)</strong>
                        </p>
                        <p>
                            アジャイルでは、探索的テストを場当たり的にせず、時間管理・記録・報告を伴う「セッション」単位で構造化する<strong
                            >Session-Based Test Management (SBTM)</strong>
                            がよく用いられます。
                        </p>
                        <ol>
                            <li>
                                <strong>チャーター(Charter)の作成</strong>:
                                そのセッションで探索する目的・範囲・重点を1〜2文で定義する。 - 例:
                                「チェックアウト画面で、クーポン適用と配送先変更を組み合わせた際の価格計算の妥当性を調査する」
                            </li>
                            <li>
                                <strong>タイムボックスの設定</strong>:
                                通常60〜120分の固定時間を設定する。
                            </li>
                            <li>
                                <strong>セッション実行</strong>:
                                チャーターに沿って自由に探索しつつ、気づいた点(発見した欠陥、追加調査が必要な事項、テスト対象の理解)をリアルタイムでメモする。
                            </li>
                            <li>
                                <strong>セッションレポートの作成</strong>: 以下の観点で記録する。 -
                                実施した内容の要約 - 発見した欠陥・懸念事項 -
                                追加で必要なテストチャーター(派生課題) - 実際に探索に使った時間 vs
                                環境準備やバグ報告に使った時間の内訳
                            </li>
                            <li>
                                <strong>デブリーフィング(振り返り)</strong>:
                                テストリードやペアと結果を共有し、次のチャーターを決める。
                            </li>
                        </ol>
                        <p><strong>探索的テストとスクリプトテストの比較</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>スクリプトテスト</th>
                                        <th>探索的テスト</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>テスト設計のタイミング</td>
                                        <td>実行前に事前設計</td>
                                        <td>実行と同時に設計</td>
                                    </tr>
                                    <tr>
                                        <td>再現性</td>
                                        <td>高い(手順が固定)</td>
                                        <td>低い(都度異なる可能性)</td>
                                    </tr>
                                    <tr>
                                        <td>未知の欠陥発見力</td>
                                        <td>限定的(想定内のみ)</td>
                                        <td>高い(想定外の発見に強い)</td>
                                    </tr>
                                    <tr>
                                        <td>必要なスキル</td>
                                        <td>手順に従う能力</td>
                                        <td>ドメイン知識・批判的思考・観察力</td>
                                    </tr>
                                    <tr>
                                        <td>適した場面</td>
                                        <td>回帰確認、規制対応の証跡が必要な場合</td>
                                        <td>新機能の初回検証、UI/UX確認、探索的な脆弱性発見</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <strong>アジャイルで探索的テストが重視される理由</strong>:
                            自動化された回帰テスト(3.3.3)が「既知の振る舞いの維持」を保証する一方、探索的テストは「まだ誰も気づいていない問題」を発見する役割を担います。テスティング・クアドラント(3.3.1)ではQ3(ビジネス視点・プロダクト批評)に位置づけられ、短いイテレーションの中でも<strong>新機能に対する一次検証</strong>として組み込まれることが多い技法です。
                        </p>
                        <p>
                            <strong>参考文献</strong>: - James Bach, &quot;Session-Based Test Management&quot;:{' '}
                            <a href="https://www.satisfice.com/sbtm" target="_blank" rel="noopener noreferrer">
                                https://www.satisfice.com/sbtm
                            </a>{' '}
                            - Ministry of Testing, &quot;What is Exploratory Testing?&quot;:{' '}
                            <a href="https://www.ministryoftesting.com/dojo/lessons/what-is-exploratory-testing" target="_blank" rel="noopener noreferrer">
                                https://www.ministryoftesting.com/dojo/lessons/what-is-exploratory-testing
                            </a>{' '}
                            - Elisabeth Hendrickson, &quot;Explore It!&quot; 概要(著者サイト):{' '}
                            <a href="https://testobsessed.com/exploreit/" target="_blank" rel="noopener noreferrer">
                                https://testobsessed.com/exploreit/
                            </a>
                        </p>

                        <hr />

                        <h2 id="34">3.4 アジャイルにおけるツール</h2>
                        <p>
                            CTFL-ATシラバスでは、アジャイルプロジェクトを支えるツールを6つのカテゴリに分類しています。ここではそれぞれの目的・代表的なツール・選定時の考慮点を、2026年時点の最新動向を交えて解説します。
                        </p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_11} />
                        </div>
                        <p>
                            <strong>このループが表す実践の流れ</strong>:
                            タスク管理ツールで計画されたストーリーが &rarr;
                            構成管理ツール上のコード変更として実装され &rarr;
                            ビルド・配布ツール(CI/CD)によって自動検証・デプロイされ &rarr;
                            クラウド・仮想化環境で稼働し &rarr; テストツールで検証され &rarr;
                            その結果がコミュニケーションツールを通じてチームにフィードバックされ &rarr;
                            次のタスクに反映される、という一連の<strong>ツールチェーン</strong>を理解することが重要です。
                        </p>

                        <hr />

                        <h3 id="341-task-management-and-tracking-tools">
                            3.4.1 タスク管理・追跡ツール(Task Management and Tracking Tools)
                        </h3>
                        <p>
                            <strong>目的</strong>:
                            プロダクトバックログ、スプリントバックログ、タスクボード(カンバン)を可視化し、チームの作業状況・進捗をリアルタイムに共有する。
                        </p>
                        <p><strong>主要ツールと特徴(2026年時点)</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ツール</th>
                                        <th>特徴</th>
                                        <th>適した規模・用途</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Jira</strong></td>
                                        <td>
                                            スクラム/カンバンボード標準搭載、豊富なプラグイン、レポート機能(バーンダウン等)
                                        </td>
                                        <td>中〜大規模、複雑なワークフローが必要なチーム</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Trello</strong></td>
                                        <td>シンプルなカンバンボード、Power-Upsによる拡張</td>
                                        <td>小規模チーム、シンプルな運用を好むチーム</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Azure DevOps Boards</strong></td>
                                        <td>Microsoftエコシステムとの統合、Azure Pipelinesとの連携</td>
                                        <td>.NET/Microsoft中心の開発組織</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Asana / monday.com / ClickUp</strong></td>
                                        <td>タスク管理+コラボレーション機能を統合</td>
                                        <td>開発以外の部門も含む横断的なチーム</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Jiraはアジャイルなソフトウェアチームが利用する代表的なプロジェクト管理ツールであり、スクラムボード、カンバンボード、ロードマップ、レポート機能や他ツールとの連携を提供する。プロジェクト管理ツールを選ぶ際は、チームの連携ニーズ、既存ツールとの統合性、導入のしやすさを評価基準とすることが推奨される。
                        </p>
                        <p>
                            <strong>選定時の考慮点(ステップバイステップ)</strong>: 1.
                            チームの分散度合い(同一拠点か、リモート混在か)を確認する。 2.
                            既存の構成管理・CI/CDツールとの連携可否を確認する(例: Jira &hArr;
                            GitHub/GitLabの課題連携)。 3.
                            必要なレポート(ベロシティ、バーンダウン/バーンアップチャート)が標準搭載されているか確認する。
                            4. チームの成熟度に合わせて過剰な機能によるオーバーヘッドを避ける。
                        </p>
                        <p>
                            <strong>参考文献</strong>: - Atlassian, &quot;9 best agile project management
                            tools for your team&quot;:{' '}
                            <a href="https://www.atlassian.com/agile/project-management/tools" target="_blank" rel="noopener noreferrer">
                                https://www.atlassian.com/agile/project-management/tools
                            </a>{' '}
                            - GeeksforGeeks, &quot;Overview of Agile Project Management Tools&quot;:{' '}
                            <a href="https://www.geeksforgeeks.org/software-engineering/overview-of-agile-project-management-tools/" target="_blank" rel="noopener noreferrer">
                                https://www.geeksforgeeks.org/software-engineering/overview-of-agile-project-management-tools/
                            </a>
                        </p>

                        <hr />

                        <h3 id="342-communication-and-information-sharing-tools">
                            3.4.2 コミュニケーション・情報共有ツール(Communication and Information
                            Sharing Tools)
                        </h3>
                        <p>
                            <strong>目的</strong>:
                            デイリースタンドアップ、リファインメント、レトロスペクティブなどのセレモニーを支え、特にリモート/分散チームにおいて非同期・同期双方のコミュニケーションを円滑にする。ドキュメントやナレッジを蓄積するWikiも含まれる。
                        </p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_12} />
                        </div>
                        <p><strong>主要ツールと特徴(2026年時点)</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>カテゴリ</th>
                                        <th>代表ツール</th>
                                        <th>特徴</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>チャット/インスタントメッセージング</td>
                                        <td>Slack, Microsoft Teams</td>
                                        <td>
                                            チャンネルやダイレクトメッセージ、スレッドによる会話の整理が可能で、コラボレーション機能はメッセージングにとどまらない
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Wiki/ナレッジ共有</td>
                                        <td>Confluence, Notion</td>
                                        <td>
                                            タグ付き・フィルタ可能なデータベースでタスクやリソース、アイデアを柔軟な表示形式で整理できる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ホワイトボード/可視化</td>
                                        <td>Miro, FigJam</td>
                                        <td>
                                            リモートでのブレインストーミング、リファインメント時のストーリーマッピングに活用
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ビデオ会議</td>
                                        <td>Zoom, Microsoft Teams</td>
                                        <td>デイリースタンドアップ、レトロスペクティブの実施</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <strong>なぜこのカテゴリが「テストツール」として扱われるのか</strong>:
                            アジャイルテストは個人作業ではなく<strong>チーム全体での情報共有</strong>が品質に直結します。欠陥情報、テスト観点の議論、探索的テストのチャーター共有などがこれらのツール上で行われるため、CTFL-ATではコミュニケーションツールも重要なテスト支援ツールの一つとして位置づけています。
                        </p>
                        <p>
                            <strong>選定時の考慮点</strong>: 1. タスク管理ツール(3.4.1)との連携(例:
                            Slack上でJiraチケットのステータス変更を通知)を確認する。 2.
                            検索性(過去の議論を後から追跡できるか)を重視する。 3.
                            非同期コミュニケーションを前提とした分散チームでは、タイムゾーンをまたいだ情報の非同期共有(録画、要約)の仕組みを整える。
                        </p>
                        <p>
                            <strong>参考文献</strong>: - Chanty, &quot;10 Communication Tools in Project
                            Management&quot;:{' '}
                            <a href="https://www.chanty.com/blog/project-management-communication-tools/" target="_blank" rel="noopener noreferrer">
                                https://www.chanty.com/blog/project-management-communication-tools/
                            </a>{' '}
                            - Neatro, &quot;The Best Tools for Agile Teams&quot;:{' '}
                            <a href="https://www.neatro.io/blog/agile-team-tools/" target="_blank" rel="noopener noreferrer">
                                https://www.neatro.io/blog/agile-team-tools/
                            </a>
                        </p>

                        <hr />

                        <h3 id="343-software-build-and-distribution-tools">
                            3.4.3 ソフトウェアビルド・配布ツール(Software Build and Distribution Tools)
                        </h3>
                        <p>
                            <strong>目的</strong>:
                            コードのコミットから、ビルド・自動テスト・パッケージング・環境へのデプロイまでを自動化する継続的インテグレーション/継続的デリバリー(CI/CD)のパイプラインを構築する。3.3.3の自動化ピラミッドを実行するための土台となる。
                        </p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_13} />
                        </div>
                        <p><strong>主要ツールと2026年時点の採用動向</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ツール</th>
                                        <th>特徴</th>
                                        <th>2026年時点の位置づけ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>GitHub Actions</strong></td>
                                        <td>
                                            GitHubとのネイティブ統合、YAML定義、豊富なMarketplaceアクション
                                        </td>
                                        <td>
                                            組織利用でのCI/CD採用率トップ(約33%)であり、パイプライン構築の摩擦の低さが評価されている
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Jenkins</strong></td>
                                        <td>老舗のOSS自動化サーバー、1,800以上のプラグインで高い柔軟性</td>
                                        <td>
                                            組織利用で2位(約28%)。複雑なカスタマイズやオンプレミス/エアギャップ環境を要する企業で根強い需要
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>GitLab CI/CD</strong></td>
                                        <td>
                                            SCM・CI/CD・セキュリティスキャンまで含む統合DevOpsプラットフォーム
                                        </td>
                                        <td>
                                            コード管理からCI/CD、セキュリティスキャン、監視、コンプライアンスまでを一つのプラットフォームで提供する「オールインワン」型として2026年時点で評価されている
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>CircleCI</strong></td>
                                        <td>高速な並列実行、モノレポ対応に強み</td>
                                        <td>ビルド時間短縮を優先するチーム向け</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Azure DevOps Pipelines</strong></td>
                                        <td>Microsoftエコシステムとの統合</td>
                                        <td>.NET中心の組織で採用</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>ツール選定の判断フロー</strong>:</p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_14} />
                        </div>
                        <p>
                            <strong>参考文献</strong>: - Let&apos;s Talk DevOps, &quot;Best CI/CD Tools Comparison
                            2026&quot;:{' '}
                            <a href="https://devopstales.com/devops/best-ci-cd-tools-comparison-2026/" target="_blank" rel="noopener noreferrer">
                                https://devopstales.com/devops/best-ci-cd-tools-comparison-2026/
                            </a>{' '}
                            - EITT, &quot;Jenkins vs GitHub Actions vs GitLab CI — 2026 verdict&quot;:{' '}
                            <a href="https://eitt.academy/knowledge-base/jenkins-vs-github-actions-vs-gitlab-ci-cicd-2026/" target="_blank" rel="noopener noreferrer">
                                https://eitt.academy/knowledge-base/jenkins-vs-github-actions-vs-gitlab-ci-cicd-2026/
                            </a>{' '}
                            - JetBrains Blog, &quot;Best CI/CD Tools for 2026&quot;:{' '}
                            <a href="https://blog.jetbrains.com/teamcity/2026/03/best-ci-tools/" target="_blank" rel="noopener noreferrer">
                                https://blog.jetbrains.com/teamcity/2026/03/best-ci-tools/
                            </a>
                        </p>

                        <hr />

                        <h3 id="344-configuration-management-tools">
                            3.4.4 構成管理ツール(Configuration Management Tools)
                        </h3>
                        <p>
                            <strong>目的</strong>:
                            ソースコード、テストウェア、環境設定、ビルド成果物など、変化するあらゆる成果物の<strong>バージョン・変更履歴・依存関係</strong>を管理する。アジャイルの頻繁な変更に耐えるための基盤technology。
                        </p>
                        <p>
                            <strong>中心となるのはバージョン管理システム(Git)であり、ブランチ戦略がチームの開発フローを規定します。</strong>
                        </p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_15} />
                        </div>
                        <p><strong>構成管理が支える3つの領域</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>領域</th>
                                        <th>具体例</th>
                                        <th>アジャイルにおける意味</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ソースコード管理</td>
                                        <td>Git(GitHub, GitLab, Bitbucket)</td>
                                        <td>頻繁なコミット・ブランチ・マージを支える</td>
                                    </tr>
                                    <tr>
                                        <td>テストウェア管理</td>
                                        <td>
                                            テストコード、テストデータ、<code>.feature</code>ファイルもコードと同様にバージョン管理する
                                        </td>
                                        <td>BDDシナリオ(3.1.3)を本体コードと同じリポジトリで履歴管理</td>
                                    </tr>
                                    <tr>
                                        <td>環境構成管理</td>
                                        <td>
                                            Infrastructure as Code(Terraform,
                                            Ansible)、コンテナ定義(Dockerfile)
                                        </td>
                                        <td>環境差異による「私の環境では動く」問題を防止(3.4.6と連携)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>ブランチ戦略の比較(アジャイルでよく使われる代表例)</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>戦略</th>
                                        <th>特徴</th>
                                        <th>適した場面</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>トランクベース開発</strong></td>
                                        <td>短命なブランチのみを許容し、頻繁にmain(トランク)へマージ</td>
                                        <td>高頻度リリース、CI/CDが成熟したチーム</td>
                                    </tr>
                                    <tr>
                                        <td><strong>GitHub Flow</strong></td>
                                        <td>
                                            mainブランチ+フィーチャーブランチ+PRレビューのシンプルな流れ
                                        </td>
                                        <td>継続的デプロイを行うWebサービス開発</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Git Flow</strong></td>
                                        <td>develop/feature/release/hotfixなど役割別ブランチを持つ</td>
                                        <td>リリースサイクルが長い・バージョン管理が厳格な製品</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <strong>参考文献</strong>: - Atlassian, &quot;Git Branching Strategies&quot;:{' '}
                            <a href="https://www.atlassian.com/git/tutorials/comparing-workflows" target="_blank" rel="noopener noreferrer">
                                https://www.atlassian.com/git/tutorials/comparing-workflows
                            </a>{' '}
                            - trunk-based development公式サイト:{' '}
                            <a href="https://trunkbaseddevelopment.com/" target="_blank" rel="noopener noreferrer">
                                https://trunkbaseddevelopment.com/
                            </a>
                        </p>

                        <hr />

                        <h3 id="345-test-design-implementation-and-execution-tools">
                            3.4.5 テスト設計・実装・実行ツール(Test Design, Implementation, and Execution Tools)
                        </h3>
                        <p>
                            <strong>目的</strong>:
                            3.1〜3.3で解説した各種テスト技法(TDD/BDD/自動化ピラミッドの各層/探索的テスト)を実際に実行するための専用ツール群。
                        </p>
                        <p><strong>Webブラウザ自動化ツールの比較(2026年時点)</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ツール</th>
                                        <th>アーキテクチャ</th>
                                        <th>対応言語</th>
                                        <th>強み</th>
                                        <th>弱み</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Playwright</strong></td>
                                        <td>ブラウザへ直接接続(WebSocketベース)</td>
                                        <td>JS/TS, Python, .NET, Java</td>
                                        <td>
                                            週間npmダウンロード数は約3,000万に達し、Cypressの約650万を大きく上回っている。並列実行が標準搭載でコンテナ環境でのコスト効率も高い
                                        </td>
                                        <td>比較的新しく、ブラウザベンダーのAPI変更への追従が必要</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Cypress</strong></td>
                                        <td>ブラウザのJSランタイム内で直接実行</td>
                                        <td>JavaScript/TypeScript</td>
                                        <td>開発者体験(DX)に優れ、デバッグが直感的</td>
                                        <td>
                                            Chromium系ブラウザのみ対応で、FirefoxやSafariは標準サポート外
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Selenium</strong></td>
                                        <td>WebDriverプロトコル経由でブラウザを外部制御</td>
                                        <td>Java, Python, C#, JavaScript, Ruby等</td>
                                        <td>
                                            31,000社以上が利用し約22%の市場シェアを持つなど、最も広い言語・ブラウザ互換性を持つ。Appium連携でネイティブモバイルにも対応
                                        </td>
                                        <td>プロトコルのオーバーヘッドで実行速度がやや劣る</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>選定フローチャート</strong>:</p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_16} />
                        </div>
                        <p><strong>テスト管理・その他関連ツールのカテゴリ</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>カテゴリ</th>
                                        <th>目的</th>
                                        <th>代表例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>テスト管理ツール</td>
                                        <td>テストケース管理、実行結果の追跡、要件とのトレーサビリティ</td>
                                        <td>TestRail, Xray(Jira連携), Zephyr</td>
                                    </tr>
                                    <tr>
                                        <td>APIテストツール</td>
                                        <td>REST/GraphQL APIの機能・契約テスト</td>
                                        <td>Postman, REST Assured, Karate</td>
                                    </tr>
                                    <tr>
                                        <td>モバイル自動化</td>
                                        <td>ネイティブ/ハイブリッドアプリの自動操作</td>
                                        <td>Appium</td>
                                    </tr>
                                    <tr>
                                        <td>静的解析ツール</td>
                                        <td>コード品質・セキュリティ脆弱性の早期発見(3.3.2と連携)</td>
                                        <td>SonarQube, ESLint</td>
                                    </tr>
                                    <tr>
                                        <td>探索的テスト支援</td>
                                        <td>セッション記録、バグ報告の効率化(3.3.4と連携)</td>
                                        <td>qTest Explorer, Session Tester</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <strong>参考文献</strong>: - Tech Insider, &quot;Playwright vs Cypress vs
                            Selenium: 30M vs 6.5M Downloads&quot;:{' '}
                            <a href="https://tech-insider.org/playwright-vs-cypress-vs-selenium-2026/" target="_blank" rel="noopener noreferrer">
                                https://tech-insider.org/playwright-vs-cypress-vs-selenium-2026/
                            </a>{' '}
                            - Quash, &quot;Best Test Automation Tools 2026&quot;:{' '}
                            <a href="https://quashbugs.com/blog/best-test-automation-tools-2026-playwright-vs-selenium-vs-cypress-vs-appium" target="_blank" rel="noopener noreferrer">
                                https://quashbugs.com/blog/best-test-automation-tools-2026-playwright-vs-selenium-vs-cypress-vs-appium
                            </a>{' '}
                            - Master Software Testing, &quot;Selenium vs Playwright vs Cypress: Complete
                            Comparison Guide for 2026&quot;:{' '}
                            <a href="https://mastersoftwaretesting.com/automation-academy/ui-automation/selenium-vs-playwright-vs-cypress" target="_blank" rel="noopener noreferrer">
                                https://mastersoftwaretesting.com/automation-academy/ui-automation/selenium-vs-playwright-vs-cypress
                            </a>
                        </p>

                        <hr />

                        <h3 id="346-cloud-computing-and-virtualization-tools">
                            3.4.6 クラウドコンピューティング・仮想化ツール(Cloud Computing and
                            Virtualization Tools)
                        </h3>
                        <p>
                            <strong>目的</strong>:
                            テスト環境の迅速な構築・破棄、本番同等環境でのテスト実行、スケーラブルなテスト実行基盤の提供。アジャイルの「頻繁なリリース」を支えるインフラ技術。
                        </p>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_17} />
                        </div>
                        <p><strong>アジャイルテストにおける活用場面</strong>:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>活用場面</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>使い捨てテスト環境</strong></td>
                                        <td>
                                            コンテナでテスト対象+依存サービス(DB等)を毎回クリーンな状態で起動し、テスト間の状態汚染を防ぐ
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>並列テスト実行によるスケーリング</strong></td>
                                        <td>
                                            クラウド上で多数のテストランナー(コンテナ/VM)を並列起動し、E2Eテストの実行時間を短縮
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>本番同等環境の再現</strong></td>
                                        <td>
                                            Infrastructure as
                                            Codeでステージング環境を本番と同一構成にし、環境差異に起因する欠陥の見逃しを防ぐ
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>ネットワーク・障害注入テスト</strong></td>
                                        <td>
                                            クラウドの機能やChaos
                                            Engineeringツールを用い、非機能テスト(3.3.2
                                            Q4)の一環として障害耐性を検証
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <strong>CI/CDとの統合(3.4.3との関係)</strong>:
                            現代のCI/CDパイプラインでは、GitHub Actions・GitLab
                            CI・Jenkinsのいずれも、テスト実行時にDockerコンテナを起動し、その中でSelenium/Playwright(3.4.5)を実行するという構成が一般的です。クラウドネイティブなエンジニアリング組織における2026年時点で最も一般的なアーキテクチャは、CIでコンテナイメージをビルド・テストし、ArgoCDのようなCDツールがGitの変更を検知してクラスタに反映するという構成である。
                        </p>
                        <p>
                            <strong>参考文献</strong>: - Opsio, &quot;CI/CD Pipeline Tools Compared&quot;:{' '}
                            <a href="https://opsiocloud.com/blogs/ci-cd-pipeline-tools-jenkins-github-actions-gitlab-argocd/" target="_blank" rel="noopener noreferrer">
                                https://opsiocloud.com/blogs/ci-cd-pipeline-tools-jenkins-github-actions-gitlab-argocd/
                            </a>{' '}
                            - Docker公式ドキュメント:{' '}
                            <a href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer">
                                https://docs.docker.com/
                            </a>{' '}
                            - Kubernetes公式ドキュメント:{' '}
                            <a href="https://kubernetes.io/docs/home/" target="_blank" rel="noopener noreferrer">
                                https://kubernetes.io/docs/home/
                            </a>
                        </p>

                        <hr />

                        <h2 id="4-chapter-3">4. Chapter 3 全体の振り返り</h2>
                        <div className="mermaid-wrap">
                            <Mermaid chart={DIAGRAM_18} />
                        </div>
                        <p>
                            このように、Chapter
                            3の各節は独立した知識ではなく、<strong>1つのイテレーションを回すための一貫したサイクル</strong>として理解することが、CTFL-ATの学習における最大のポイントです。
                        </p>

                        <hr />

                        <h2 id="5-k-">5. 学習チェックリスト(K-レベル別)</h2>
                        <p>
                            ISTQBシラバスは学習目標を認知レベル(K1: 記憶、K2: 理解、K3:
                            適用)で分類しています。以下は本章の内容に対する自己チェック用リストです。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>チェック項目</th>
                                        <th>レベル目安</th>
                                        <th>完了</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>TDD・ATDD・BDDそれぞれの目的と違いを説明できる</td>
                                        <td>K2</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Red-Green-Refactorサイクルを実際のコード例で示せる</td>
                                        <td>K3</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Three Amigosセッションの進め方を説明できる</td>
                                        <td>K2</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Given-When-Then形式でシナリオを自分で書ける</td>
                                        <td>K3</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>アジャイルにおける品質リスク評価の進め方を説明できる</td>
                                        <td>K2</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>リスクレベルに応じたテスト深度の判断ができる</td>
                                        <td>K3</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>プランニングポーカーによる見積りプロセスを説明できる</td>
                                        <td>K2</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>テスティング・クアドラントの4象限を図示し分類できる</td>
                                        <td>K3</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>技術的負債がアジャイル開発に与える影響を説明できる</td>
                                        <td>K2</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>テスト自動化ピラミッドの各層の役割と比率を説明できる</td>
                                        <td>K2</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>探索的テストとスクリプトテストの違いを説明できる</td>
                                        <td>K2</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>セッションベーステストマネジメントの手順を実践できる</td>
                                        <td>K3</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>3.4の6つのツールカテゴリをそれぞれ具体例と共に列挙できる</td>
                                        <td>K1</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>CI/CDパイプラインの一連の流れを図示できる</td>
                                        <td>K2</td>
                                        <td>☐</td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>Git構成管理と自動化ピラミッド・CI/CDの関係を説明できる</td>
                                        <td>K2</td>
                                        <td>☐</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <hr />

                        <h2 id="6">6. 実践演習(サンプル問題)</h2>
                        <p>
                            以下はCTFL-AT試験形式を模した練習問題です(選択式・K2/K3レベル相当)。実際の出題形式・難易度は必ず公式サンプル問題でご確認ください。
                        </p>
                        <p>
                            <strong>Q1.</strong>
                            あるチームが、ユーザーストーリーの実装着手前にプロダクトオーナー・開発者・テスターの三者でセッションを行い、受け入れ基準を明文化してから実装に入っている。この手法の名称として最も適切なものはどれか。
                        </p>
                        <p>
                            A. Test-Driven Development (TDD)<br />
                            B. Acceptance Test-Driven Development (ATDD)<br />
                            C. Session-Based Test Management (SBTM)<br />
                            D. 探索的テスト
                        </p>
                        <details>
                            <summary>解答を見る</summary>
                            <p>
                                <strong>正解: B</strong><br />
                                実装前に三者(Three Amigos)が協働して受け入れ基準を合意するプロセスはATDDの特徴です。TDDは開発者主導で単体テストを先に書く手法であり、SBTMと探索的テストはテスト実行段階の技法です。
                            </p>
                        </details>

                        <hr />

                        <p>
                            <strong>Q2.</strong>
                            テスティング・クアドラントにおいて、性能テストやセキュリティテストが分類される象限はどれか。
                        </p>
                        <p>
                            A. Q1(技術視点・チーム支援)<br />
                            B. Q2(ビジネス視点・チーム支援)<br />
                            C. Q3(ビジネス視点・プロダクト批評)<br />
                            D. Q4(技術視点・プロダクト批評)
                        </p>
                        <details>
                            <summary>解答を見る</summary>
                            <p>
                                <strong>正解: D</strong><br />
                                性能・セキュリティ・負荷・信頼性テストは「技術視点」かつ「プロダクトを批評する」性質を持つため、Q4に分類されます。
                            </p>
                        </details>

                        <hr />

                        <p>
                            <strong>Q3.</strong>
                            テスト自動化ピラミッドにおいて、実行速度が最も速く、最も多くのテストを配置すべき層はどれか。
                        </p>
                        <p>
                            A. E2E/UIテスト層<br />
                            B. 統合/APIテスト層<br />
                            C. 単体テスト層<br />
                            D. 探索的テスト層
                        </p>
                        <details>
                            <summary>解答を見る</summary>
                            <p>
                                <strong>正解: C</strong><br />
                                単体テストは実行速度が最も速く保守コストが低いため、ピラミッドの土台として最も多く配置することが推奨されます。なお探索的テストはピラミッドの構成要素(自動テスト)には含まれません。
                            </p>
                        </details>

                        <hr />

                        <p>
                            <strong>Q4.</strong>
                            チームがコードのコミットからテスト実行・パッケージング・デプロイまでを自動化したいと考えている。このために導入すべきツールカテゴリとして最も適切なものはどれか。
                        </p>
                        <p>
                            A. タスク管理・追跡ツール<br />
                            B. コミュニケーション・情報共有ツール<br />
                            C. ソフトウェアビルド・配布ツール(CI/CDツール)<br />
                            D. クラウドコンピューティング・仮想化ツール
                        </p>
                        <details>
                            <summary>解答を見る</summary>
                            <p>
                                <strong>正解: C</strong><br />
                                コミットからビルド・テスト・デプロイまでの自動化はCI/CDツール(ソフトウェアビルド・配布ツール)の役割です。クラウド・仮想化ツールはその実行基盤を提供しますが、パイプライン自体の自動化機能ではありません。
                            </p>
                        </details>

                        <hr />

                        <h2 id="7-url">7. 参考文献・URL一覧(節ごとの一次情報源)</h2>
                        <p>本ガイド内で言及したすべてのURLを、節ごとに再掲します。</p>

                        <h3 id="_1">公式シラバス・認定資格情報</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>出典</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ISTQB® CTFL-AT certification概要ページ</td>
                                        <td>
                                            <a href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/" target="_blank" rel="noopener noreferrer">
                                                https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ISTQB® CTFL-AT シラバスPDFダウンロード</td>
                                        <td>
                                            <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=3647" target="_blank" rel="noopener noreferrer">
                                                https://istqb.org/?sdm_process_download=1&amp;download_id=3647
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ISTQB®公式サイト(資格体系全体)</td>
                                        <td>
                                            <a href="https://istqb.org/" target="_blank" rel="noopener noreferrer">
                                                https://istqb.org/
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 id="31-tddatddbdd_1">3.1 アジャイルテスト手法(TDD/ATDD/BDD)</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>出典</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Agile Alliance, &quot;TDD&quot; 用語解説</td>
                                        <td>
                                            <a href="https://www.agilealliance.org/glossary/tdd/" target="_blank" rel="noopener noreferrer">
                                                https://www.agilealliance.org/glossary/tdd/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Martin Fowler, &quot;TestDrivenDevelopment&quot;</td>
                                        <td>
                                            <a href="https://martinfowler.com/bliki/TestDrivenDevelopment.html" target="_blank" rel="noopener noreferrer">
                                                https://martinfowler.com/bliki/TestDrivenDevelopment.html
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Agile Alliance, &quot;ATDD&quot; 用語解説</td>
                                        <td>
                                            <a href="https://www.agilealliance.org/glossary/atdd/" target="_blank" rel="noopener noreferrer">
                                                https://www.agilealliance.org/glossary/atdd/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ministry of Testing, &quot;Three Amigos&quot;</td>
                                        <td>
                                            <a href="https://www.ministryoftesting.com/dojo/lessons/three-amigos" target="_blank" rel="noopener noreferrer">
                                                https://www.ministryoftesting.com/dojo/lessons/three-amigos
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cucumber公式ドキュメント, &quot;Gherkin Reference&quot;</td>
                                        <td>
                                            <a href="https://cucumber.io/docs/gherkin/reference/" target="_blank" rel="noopener noreferrer">
                                                https://cucumber.io/docs/gherkin/reference/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dan North, &quot;What&apos;s in a Story?&quot;</td>
                                        <td>
                                            <a href="https://dannorth.net/whats-in-a-story/" target="_blank" rel="noopener noreferrer">
                                                https://dannorth.net/whats-in-a-story/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Agile Alliance, &quot;BDD&quot; 用語解説</td>
                                        <td>
                                            <a href="https://www.agilealliance.org/glossary/bdd/" target="_blank" rel="noopener noreferrer">
                                                https://www.agilealliance.org/glossary/bdd/
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 id="32_1">3.2 品質リスク評価とテスト工数見積り</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>出典</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>RBCS (Rex Black), &quot;Risk-Based Testing&quot;</td>
                                        <td>
                                            <a href="https://www.rbcs-us.com/resources/articles/risk-based-testing/" target="_blank" rel="noopener noreferrer">
                                                https://www.rbcs-us.com/resources/articles/risk-based-testing/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Agile Alliance, &quot;Risk-Based Testing&quot;</td>
                                        <td>
                                            <a href="https://www.agilealliance.org/glossary/risk-based-testing/" target="_blank" rel="noopener noreferrer">
                                                https://www.agilealliance.org/glossary/risk-based-testing/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mountain Goat Software, &quot;Planning Poker&quot;</td>
                                        <td>
                                            <a href="https://www.mountaingoatsoftware.com/agile/planning-poker" target="_blank" rel="noopener noreferrer">
                                                https://www.mountaingoatsoftware.com/agile/planning-poker
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Scrum.org, &quot;What is Definition of Done?&quot;</td>
                                        <td>
                                            <a href="https://www.scrum.org/resources/what-definition-done" target="_blank" rel="noopener noreferrer">
                                                https://www.scrum.org/resources/what-definition-done
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 id="33_1">3.3 アジャイルプロジェクトにおける技法</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>出典</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Lisa Crispin, &quot;Using the Agile Testing Quadrants&quot;</td>
                                        <td>
                                            <a href="https://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/" target="_blank" rel="noopener noreferrer">
                                                https://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Agile Alliance, &quot;Agile Testing Quadrants&quot;</td>
                                        <td>
                                            <a href="https://www.agilealliance.org/glossary/agile-testing-quadrants/" target="_blank" rel="noopener noreferrer">
                                                https://www.agilealliance.org/glossary/agile-testing-quadrants/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Martin Fowler, &quot;TechnicalDebt&quot;</td>
                                        <td>
                                            <a href="https://martinfowler.com/bliki/TechnicalDebt.html" target="_blank" rel="noopener noreferrer">
                                                https://martinfowler.com/bliki/TechnicalDebt.html
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Agile Alliance, &quot;Technical Debt&quot;</td>
                                        <td>
                                            <a href="https://www.agilealliance.org/glossary/technical-debt/" target="_blank" rel="noopener noreferrer">
                                                https://www.agilealliance.org/glossary/technical-debt/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Martin Fowler, &quot;TestPyramid&quot;</td>
                                        <td>
                                            <a href="https://martinfowler.com/bliki/TestPyramid.html" target="_blank" rel="noopener noreferrer">
                                                https://martinfowler.com/bliki/TestPyramid.html
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Google Testing Blog, &quot;Just Say No to More End-to-End Tests&quot;</td>
                                        <td>
                                            <a href="https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html" target="_blank" rel="noopener noreferrer">
                                                https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>James Bach (Satisfice), &quot;Session-Based Test Management&quot;</td>
                                        <td>
                                            <a href="https://www.satisfice.com/sbtm" target="_blank" rel="noopener noreferrer">
                                                https://www.satisfice.com/sbtm
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ministry of Testing, &quot;What is Exploratory Testing?&quot;</td>
                                        <td>
                                            <a href="https://www.ministryoftesting.com/dojo/lessons/what-is-exploratory-testing" target="_blank" rel="noopener noreferrer">
                                                https://www.ministryoftesting.com/dojo/lessons/what-is-exploratory-testing
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Elisabeth Hendrickson, &quot;Explore It!&quot;</td>
                                        <td>
                                            <a href="https://testobsessed.com/exploreit/" target="_blank" rel="noopener noreferrer">
                                                https://testobsessed.com/exploreit/
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 id="34_1">3.4 アジャイルにおけるツール</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>出典</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Atlassian, &quot;9 best agile project management tools&quot;</td>
                                        <td>
                                            <a href="https://www.atlassian.com/agile/project-management/tools" target="_blank" rel="noopener noreferrer">
                                                https://www.atlassian.com/agile/project-management/tools
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>GeeksforGeeks, &quot;Overview of Agile Project Management Tools&quot;</td>
                                        <td>
                                            <a href="https://www.geeksforgeeks.org/software-engineering/overview-of-agile-project-management-tools/" target="_blank" rel="noopener noreferrer">
                                                https://www.geeksforgeeks.org/software-engineering/overview-of-agile-project-management-tools/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Chanty, &quot;10 Communication Tools in Project Management&quot;</td>
                                        <td>
                                            <a href="https://www.chanty.com/blog/project-management-communication-tools/" target="_blank" rel="noopener noreferrer">
                                                https://www.chanty.com/blog/project-management-communication-tools/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Neatro, &quot;The Best Tools for Agile Teams&quot;</td>
                                        <td>
                                            <a href="https://www.neatro.io/blog/agile-team-tools/" target="_blank" rel="noopener noreferrer">
                                                https://www.neatro.io/blog/agile-team-tools/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Let&apos;s Talk DevOps, &quot;Best CI/CD Tools Comparison 2026&quot;</td>
                                        <td>
                                            <a href="https://devopstales.com/devops/best-ci-cd-tools-comparison-2026/" target="_blank" rel="noopener noreferrer">
                                                https://devopstales.com/devops/best-ci-cd-tools-comparison-2026/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>EITT, &quot;Jenkins vs GitHub Actions vs GitLab CI — 2026 verdict&quot;</td>
                                        <td>
                                            <a href="https://eitt.academy/knowledge-base/jenkins-vs-github-actions-vs-gitlab-ci-cicd-2026/" target="_blank" rel="noopener noreferrer">
                                                https://eitt.academy/knowledge-base/jenkins-vs-github-actions-vs-gitlab-ci-cicd-2026/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>JetBrains Blog, &quot;Best CI/CD Tools for 2026&quot;</td>
                                        <td>
                                            <a href="https://blog.jetbrains.com/teamcity/2026/03/best-ci-tools/" target="_blank" rel="noopener noreferrer">
                                                https://blog.jetbrains.com/teamcity/2026/03/best-ci-tools/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Atlassian, &quot;Comparing Workflows&quot;(ブランチ戦略)</td>
                                        <td>
                                            <a href="https://www.atlassian.com/git/tutorials/comparing-workflows" target="_blank" rel="noopener noreferrer">
                                                https://www.atlassian.com/git/tutorials/comparing-workflows
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Trunk Based Development 公式サイト</td>
                                        <td>
                                            <a href="https://trunkbaseddevelopment.com/" target="_blank" rel="noopener noreferrer">
                                                https://trunkbaseddevelopment.com/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tech Insider, &quot;Playwright vs Cypress vs Selenium 2026&quot;</td>
                                        <td>
                                            <a href="https://tech-insider.org/playwright-vs-cypress-vs-selenium-2026/" target="_blank" rel="noopener noreferrer">
                                                https://tech-insider.org/playwright-vs-cypress-vs-selenium-2026/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Quash, &quot;Best Test Automation Tools 2026&quot;</td>
                                        <td>
                                            <a href="https://quashbugs.com/blog/best-test-automation-tools-2026-playwright-vs-selenium-vs-cypress-vs-appium" target="_blank" rel="noopener noreferrer">
                                                https://quashbugs.com/blog/best-test-automation-tools-2026-playwright-vs-selenium-vs-cypress-vs-appium
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Master Software Testing, &quot;Selenium vs Playwright vs Cypress&quot;</td>
                                        <td>
                                            <a href="https://mastersoftwaretesting.com/automation-academy/ui-automation/selenium-vs-playwright-vs-cypress" target="_blank" rel="noopener noreferrer">
                                                https://mastersoftwaretesting.com/automation-academy/ui-automation/selenium-vs-playwright-vs-cypress
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Opsio, &quot;CI/CD Pipeline Tools Compared&quot;</td>
                                        <td>
                                            <a href="https://opsiocloud.com/blogs/ci-cd-pipeline-tools-jenkins-github-actions-gitlab-argocd/" target="_blank" rel="noopener noreferrer">
                                                https://opsiocloud.com/blogs/ci-cd-pipeline-tools-jenkins-github-actions-gitlab-argocd/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Docker 公式ドキュメント</td>
                                        <td>
                                            <a href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer">
                                                https://docs.docker.com/
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kubernetes 公式ドキュメント</td>
                                        <td>
                                            <a href="https://kubernetes.io/docs/home/" target="_blank" rel="noopener noreferrer">
                                                https://kubernetes.io/docs/home/
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <hr />

                        <h2 id="8">8. 次のステップ</h2>
                        <p>本章の内容を実務に定着させるための推奨アクション:</p>
                        <ol>
                            <li>
                                <strong>チームでテスティング・クアドラント(3.3.1)の棚卸しをする</strong>: 直近のリリースで実施したテストを4象限に分類し、偏りがないか確認する。
                            </li>
                            <li>
                                <strong>1つのユーザーストーリーでATDD/BDDを試す</strong>: Three
                                Amigosセッションを実際に開催し、Gherkinシナリオを1本書いてみる。
                            </li>
                            <li>
                                <strong>CI/CDパイプラインの現状を可視化する</strong>:
                                3.4.3のフロー図を自チームのパイプラインに置き換えて描いてみて、ボトルネックを特定する。
                            </li>
                            <li>
                                <strong>探索的テストのチャーターを1つ作成し、60分のセッションを実施してみる</strong>(3.3.4)。
                            </li>
                            <li>
                                <strong>公式サンプル問題で理解度を確認する</strong>:{' '}
                                <a href="https://istqb.org/" target="_blank" rel="noopener noreferrer">
                                    https://istqb.org/
                                </a>{' '}
                                の Exam Resources セクションから最新のサンプル問題を入手する。
                            </li>
                        </ol>
                    </div>

                    <footer className="page-footer">
                        本ガイドは学習・実務理解を目的とした二次解説であり、ISTQB®
                        公式シラバスの逐語再現ではありません。試験直前の確認は必ず
                        <a
                            href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ISTQB® 公式サイト
                        </a>
                        の最新版シラバスPDFをご参照ください。ISTQB® は International Software
                        Testing Qualifications Board の登録商標です。
                    </footer>
                </main>
            </div>
        </div>
    );
}
