import './istqb-ctfl-v4-chapter2-sdlc-and-testing.css';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';

const DIAGRAM_D1 = `flowchart TD
A["Chapter 2<br />SDLC to Test"] --> B["2.1 SDLC Context"]
A --> C["2.2 Levels and Types"]
A --> D["2.3 Maintenance"]
B --> B1["2.1.1 SDLC Model Impact"]
B --> B2["2.1.2 Good Practices"]
B --> B3["2.1.3 TDD / ATDD / BDD"]
B --> B4["2.1.4 DevOps"]
B --> B5["2.1.5 Shift Left"]
B --> B6["2.1.6 Retrospective"]
C --> C1["2.2.1 Test Levels x5"]
C --> C2["2.2.2 Test Types x4"]
C --> C3["2.2.3 Confirmation + Regression"]
D --> D1["Change Triggers"]
D --> D2["Impact Analysis"]`;

const DIAGRAM_D2 = `flowchart LR
subgraph seq["Sequential"]
W["Waterfall"]
V["V-model"]
end
subgraph iter["Iterative / Incremental"]
AG["Agile: Scrum / XP / Kanban"]
SP["Spiral"]
end
subgraph hyb["Hybrid"]
HB["Wagile etc."]
end
seq -- "Static testing first<br />Dynamic testing later" --> e1["Risk of late testing"]
iter -- "Static + Dynamic<br />in each iteration" --> e2["Continuous testing"]
hyb --> e3["Adjust per combination"]`;

const DIAGRAM_D3 = `flowchart LR
subgraph dev["Development Phase"]
R["Requirements"] --> SA["System Design"] --> AD["Architecture Design"] --> DD["Detailed Design"] --> CD["Coding"]
end
subgraph tst["Test Phase"]
AT["Acceptance Test"] --> ST["System Test"] --> SIT["System Integration Test"] --> CIT["Component Integration Test"] --> CT["Component Test"]
end
R -.->|"Test Basis"| AT
SA -.->|"Test Basis"| ST
AD -.->|"Test Basis"| SIT
DD -.->|"Test Basis"| CIT
CD --> CT`;

const DIAGRAM_D4 = `flowchart TD
GP["Good Testing Practices"] --> P1["1. Map test goals<br />to development activities"]
GP --> P2["2. Apply test types<br />to each test level"]
GP --> P3["3. Align test goals<br />to SDLC process"]
GP --> P4["4. Involve testers early<br />in reviews and design"]`;

const DIAGRAM_D5 = `flowchart LR
A["1. Write Failing Test<br />Red"] --> B["2. Write Minimal Code<br />to Pass Test<br />Green"]
B --> C["3. Refactor Code<br />Refactor"]
C --> A`;

const DIAGRAM_D6 = `flowchart LR
commit["Code Commit"] --> build["CI Build"]
build --> ct["Component Test<br />auto"]
ct --> integ["Integration Test<br />auto"]
integ --> sa["Static Analysis<br />Lint / SAST"]
sa --> stage["Deploy to<br />Staging"]
stage --> sys["System Test<br />auto"]
sys --> manual["Exploratory Test<br />manual"]
manual --> prod["Deploy to<br />Production"]
ct -- "FAIL" --> notify["Notify Developer<br />immediately"]
integ -- "FAIL" --> notify
sys -- "FAIL" --> notify`;

const DIAGRAM_D7 = `flowchart LR
subgraph trad["Traditional: testing deferred"]
t1["Requirements"] --> t2["Design"] --> t3["Implementation"] --> t4["Testing"]
end
subgraph sl["Shift Left: testing starts early"]
s1["Test Design<br />at Requirements"] --> s2["Spec Review<br />at Design"] --> s3["TDD / ATDD<br />at Implementation"] --> s4["Test Execution<br />as usual"]
end`;

const DIAGRAM_D8 = `flowchart TD
retro["レトロスペクティブ<br />Retrospective"] --> r1["成功プロセスの確認<br />Keep doing"]
retro --> r2["改善点の特定<br />Change this"]
retro --> r3["教訓の文書化<br />次プロジェクトへの継承"]
r1 --> out["テスト有効性・効率性・品質の向上<br />チームコラボレーションの改善"]
r2 --> out
r3 --> out`;

const DIAGRAM_D9 = `flowchart BT
L1["コンポーネントテスト<br />Component Testing"] --> L2["コンポーネント統合テスト<br />Component Integration Testing"]
L2 --> L3["システムテスト<br />System Testing"]
L3 --> L4["システム統合テスト<br />System Integration Testing"]
L4 --> L5["受入テスト<br />Acceptance Testing"]`;

const DIAGRAM_D10 = `flowchart TD
AT["受入テスト<br />Acceptance Testing"] --> UAT["ユーザー受入テスト<br />UAT<br />実際のユーザーが実シナリオで検証"]
AT --> OAT["運用受入テスト<br />OAT<br />システム管理者が運用面を検証"]
AT --> CRT["契約・規制受入テスト<br />契約条件・法規制への準拠検証"]
AT --> ABT["アルファ/ベータテスト<br />限定ユーザーによる実環境テスト"]`;

const DIAGRAM_D11 = `flowchart TD
TT["テストタイプ<br />Test Types"] --> FT["機能テスト<br />Functional Testing<br />「何をするか」を検証"]
TT --> NFT["非機能テスト<br />Non-Functional Testing<br />「どのようにするか」を検証"]
TT --> BBT["ブラックボックステスト<br />Black-Box Testing<br />仕様・外部仕様ベース"]
TT --> WBT["ホワイトボックステスト<br />White-Box Testing<br />内部構造ベース"]`;

const DIAGRAM_D12 = `flowchart TD
NF["非機能テストの主要対象<br />ISO/IEC 25010 品質特性"] --> P1["性能効率性<br />Performance Efficiency<br />応答時間・スループット"]
NF --> P2["互換性<br />Compatibility<br />共存性・相互運用性"]
NF --> P3["使用性<br />Usability<br />認識可能性・学習容易性"]
NF --> P4["信頼性<br />Reliability<br />成熟性・可用性"]
NF --> P5["セキュリティ<br />Security<br />機密性・完全性"]
NF --> P6["保守性<br />Maintainability<br />変更可能性・テスト容易性"]
NF --> P7["移植性<br />Portability<br />適応性・設置性"]`;

const DIAGRAM_D13 = `flowchart LR
defect["欠陥報告<br />Defect Report"] --> fix["開発者が修正"]
fix --> confirm["確認テスト<br />修正箇所が正しく直ったか確認"]
confirm -->|"Pass"| regress["リグレッションテスト<br />修正の副作用がないか確認"]
confirm -->|"Fail"| reopen["欠陥をReopen"]
regress -->|"Pass"| close["テスト完了<br />Deployへ"]
regress -->|"新欠陥検出"| new_defect["新規欠陥報告"]`;

const DIAGRAM_D14 = `flowchart TD
MT["メンテナンステストのトリガー"] --> C1["修正変更<br />Corrective Changes<br />欠陥・障害の修正"]
MT --> C2["適応的変更<br />Adaptive Changes<br />環境変化への対応<br />OS更新 / DBアップグレード"]
MT --> C3["改善的変更<br />Perfective Changes<br />機能追加・性能改善"]
MT --> C4["廃止・退役<br />Retirement<br />システム/コンポーネントの廃止"]`;

const DIAGRAM_D15 = `flowchart TD
IA["インパクト分析<br />Impact Analysis"] --> IA1["変更の影響範囲を特定<br />変更されたコンポーネントと依存関係を調査"]
IA --> IA2["テスト範囲の決定<br />確認テストとリグレッションテストの範囲を決定"]
IA --> IA3["リスクの評価<br />変更による未意図の副作用リスクを評価"]
IA --> IA4["テスト優先順位付け<br />影響度の高い領域から優先的にテスト"]
IA1 --> out["インパクト分析の成果物"]
IA2 --> out
IA3 --> out
IA4 --> out
out --> plan["メンテナンステスト計画の策定"]`;

/**
 * Renders a study guide for ISTQB CTFL v4.0.1 Chapter 2, covering software development life cycles and testing.
 */
export default function IstqbCtflV4Chapter2SdlcAndTesting() {
    return (
        <div className="istqb-ctfl-v4-chapter2-page">
            <NavBar />
            <main className="main">
                {/* HERO */}
            <div className="hero" id="top">
                <div className="version-badge"><span>&#9679;</span> CTFL Syllabus v4.0.1</div>
                <div className="hero-eyebrow">ISTQB Certified Tester Foundation Level</div>
                <h1>Chapter 2: SDLCとテスト<br />完全解説ガイド</h1>
                <div className="hero-meta">
                    <span className="hero-meta-item"><strong>対象:</strong> 中級〜上級エンジニア</span>
                    <span className="hero-meta-item"
                        ><strong>参照:</strong> Syllabus v4.0.1 (2024-09-15)</span
                    >
                    <span className="hero-meta-item"><strong>推奨学習時間:</strong> 約80分</span>
                </div>
                <div className="hero-stat-row">
                    <div className="hero-stat">
                        <span className="hero-stat-num">7</span>
                        <span className="hero-stat-label">試験問題数（全40問中）</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-num">5</span>
                        <span className="hero-stat-label">v4.0で新設/変更された項目</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-num">3+4+5</span>
                        <span className="hero-stat-label">アプローチ+タイプ+レベル</span>
                    </div>
                </div>
            </div>

            {/* SECTION: OVERVIEW */}
            <section className="section" id="overview">
                <div className="section-header">
                    <span className="section-num">§ OVERVIEW</span>
                    <h2>Chapter 2 の全体像と試験戦略</h2>
                </div>

                <p>
                    Chapter 2はSDLC（Software Development
                    Lifecycle）の文脈においてテストをどう機能させるかを扱う。v4.0では<strong
                        >DevOps、Shift Left、TDD/BDD/ATDD、レトロスペクティブ</strong
                    >が新設された。さらに「統合テスト」が<strong>コンポーネント統合テスト</strong>と<strong>システム統合テスト</strong>の2段階に分離された。
                </p>

                <div className="mermaid-wrap">
                    <Mermaid chart={DIAGRAM_D1} />
                    <div className="mermaid-caption">図1: Chapter 2 構造マップ</div>
                </div>

                <div className="callout callout-info">
                    <strong>試験戦略:</strong> Chapter
                    2の問題は主にK2（理解）レベル。「定義の丸暗記」ではなく「シナリオを読んでどのレベル/タイプ/アプローチが適切かを判断する」力が問われる。v4.0の新設項目（DevOps
                    / Shift Left / BDD / 統合テストの分離）を重点的に押さえること。
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>セクション</th>
                                <th>問題数</th>
                                <th>K-レベル</th>
                                <th>v4.0変更</th>
                                <th>頻出トピック</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2.1 SDLCのコンテキスト</td>
                                <td>2問</td>
                                <td>
                                    <span className="tag tag-k1">K1</span>
                                    <span className="tag tag-k2">K2</span>
                                </td>
                                <td><span className="tag tag-new">新設多数</span></td>
                                <td>DevOps特性、Shift Left手法</td>
                            </tr>
                            <tr>
                                <td>2.2 テストレベル/タイプ</td>
                                <td>4問</td>
                                <td><span className="tag tag-k2">K2</span></td>
                                <td><span className="tag tag-changed">統合テスト分離</span></td>
                                <td>各レベルの目的・テスト基盤・担当者</td>
                            </tr>
                            <tr>
                                <td>2.3 メンテナンステスト</td>
                                <td>1問</td>
                                <td><span className="tag tag-k2">K2</span></td>
                                <td>—</td>
                                <td>変更の種類、インパクト分析</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* SECTION 2.1 */}
            <section className="section" id="sec-211">
                <div className="section-header">
                    <span className="section-num">§ 2.1.1</span>
                    <h2>SDLCモデルとテスト活動の影響</h2>
                </div>

                <p>
                    SDLCの選択はテストのあらゆる側面に影響する。シラバスはどのSDLCモデルが「優れているか」を問うのではなく、「テストをSDLCに適合させる方法」を問う。
                </p>

                <div className="mermaid-wrap">
                    <Mermaid chart={DIAGRAM_D2} />
                    <div className="mermaid-caption">図2: SDLCモデルの分類とテストへの影響</div>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>側面</th>
                                <th>シーケンシャル（Waterfall/V-model）</th>
                                <th>イテラティブ/インクリメンタル（Agile）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>テストの開始時期</strong></td>
                                <td>後半フェーズが中心</td>
                                <td>各イテレーション内で並行</td>
                            </tr>
                            <tr>
                                <td><strong>静的テスト</strong></td>
                                <td>要件・設計レビューとして前半に実施</td>
                                <td>各スプリントで継続的に実施</td>
                            </tr>
                            <tr>
                                <td><strong>動的テスト</strong></td>
                                <td>コード完成後に集中</td>
                                <td>各スプリント内で完結</td>
                            </tr>
                            <tr>
                                <td><strong>テスト文書</strong></td>
                                <td>詳細・フォーマル</td>
                                <td>軽量・Just Enough</td>
                            </tr>
                            <tr>
                                <td><strong>自動化の位置づけ</strong></td>
                                <td>プロジェクト後半</td>
                                <td>リグレッション防止として初期から</td>
                            </tr>
                            <tr>
                                <td><strong>テスターの関与</strong></td>
                                <td>後半フェーズに集中</td>
                                <td>要件定義から継続的に関与</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subsection">
                    <h3>V-model: テストレベルと開発フェーズの対応</h3>
                    <p>
                        V-modelはシーケンシャルモデルの代表例。左辺の各開発フェーズに右辺のテストレベルが対応し、<strong
                            >テスト基盤（Test Basis）</strong
                        >となる成果物が明示的に結びつく。
                    </p>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_D3} />
                        <div className="mermaid-caption">
                            図3: V-model — 開発フェーズとテストレベルの対応（v4.0の5レベル構成）
                        </div>
                    </div>
                    <div className="callout callout-warn">
                        <strong>v4.0の重要変更:</strong> V-modelの右辺は
                        v3.1の「統合テスト」1段階から、<strong>コンポーネント統合テスト</strong>と<strong>システム統合テスト</strong>の2段階に分離された。これは試験頻出事項。
                    </div>
                </div>
            </section>

            {/* SECTION 2.1.2 */}
            <section className="section" id="sec-212">
                <div className="section-header">
                    <span className="section-num">§ 2.1.2</span>
                    <h2>良いテスト実践とSDLCへの統合</h2>
                </div>
                <p>
                    シラバスは「Good Testing
                    Practices（良いテスト実践）」として、SDLCモデルによらず適用できる4原則を定めている。
                </p>

                <div className="mermaid-wrap">
                    <Mermaid chart={DIAGRAM_D4} />
                    <div className="mermaid-caption">図4: 良いテスト実践の4原則</div>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>開発活動</th>
                                <th>対応するテスト活動</th>
                                <th>根拠</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>要件定義</td>
                                <td>要件レビュー、受入基準作成</td>
                                <td>欠陥の早期発見（Shift Left）</td>
                            </tr>
                            <tr>
                                <td>設計</td>
                                <td>テスト設計（テスト条件の特定）</td>
                                <td>アーキテクチャの問題を設計段階で検出</td>
                            </tr>
                            <tr>
                                <td>コーディング</td>
                                <td>コンポーネントテスト、コードレビュー</td>
                                <td>単体レベルの欠陥除去</td>
                            </tr>
                            <tr>
                                <td>統合</td>
                                <td>統合テスト（コンポーネント統合/システム統合）</td>
                                <td>インターフェース欠陥の検出</td>
                            </tr>
                            <tr>
                                <td>リリース</td>
                                <td>受入テスト、リグレッションテスト</td>
                                <td>デプロイ判断の根拠取得</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* SECTION 2.1.3 */}
            <section className="section" id="sec-213">
                <div className="section-header">
                    <span className="section-num">§ 2.1.3</span>
                    <h2>テストファーストアプローチ <span className="tag tag-new">v4.0 新設</span></h2>
                </div>
                <p>
                    3つのアプローチはすべて「テストが開発を駆動する」という共通原則を持ち、Shift
                    Leftを実践する中核的手法。
                </p>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>アプローチ</th>
                                <th>正式名称</th>
                                <th>テスト記述者</th>
                                <th>テスト形式</th>
                                <th>目的</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>TDD</strong></td>
                                <td>Test-Driven Development</td>
                                <td>開発者</td>
                                <td>プログラミング言語のテストコード</td>
                                <td>コード設計の改善</td>
                            </tr>
                            <tr>
                                <td><strong>ATDD</strong></td>
                                <td>Acceptance Test-Driven Development</td>
                                <td>開発者・テスター・ビジネス</td>
                                <td>自然言語ベースの受入基準</td>
                                <td>全員の共通理解を形成</td>
                            </tr>
                            <tr>
                                <td><strong>BDD</strong></td>
                                <td>Behavior-Driven Development</td>
                                <td>開発者・テスター・ビジネス</td>
                                <td><strong>Given/When/Then</strong> 形式（Gherkin）</td>
                                <td>システムの振る舞いを仕様化</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subsection">
                    <h3>TDD サイクル（Red-Green-Refactor）</h3>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_D5} />
                        <div className="mermaid-caption">図5: TDD の Red-Green-Refactor サイクル</div>
                    </div>
                </div>

                <div className="subsection">
                    <h3>BDD — Given/When/Then 形式（Gherkin）</h3>
                    <div className="code-block">
                        <div className="code-line"><span className="code-keyword">Feature:</span> <span className="code-string">ショッピングカートへの商品追加</span></div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="code-keyword">Scenario:</span> <span className="code-string">在庫ありの商品をカートに追加する</span></div>
                        <div className="code-line">    <span className="code-keyword">Given</span> ユーザーが商品詳細ページを閲覧している</div>
                        <div className="code-line">    <span className="code-keyword">When</span>  ユーザーが「カートに追加」ボタンをクリックする</div>
                        <div className="code-line">    <span className="code-keyword">Then</span>  カート内の商品数が1増加する</div>
                        <div className="code-line">    <span className="code-keyword">And</span>   「カートに追加しました」のメッセージが表示される</div>
                    </div>
                </div>

                <div className="callout callout-warn">
                    <strong>試験の落とし穴:</strong>
                    BDDはGiven/When/Then形式（Gherkin）を使用するが、ATDDは<em>必ずしもこの形式を使わない</em>。ATDDの本質は「受入基準からテストを派生させる」ことであり、フォーマットは問わない。
                </div>
            </section>

            {/* SECTION 2.1.4 */}
            <section className="section" id="sec-214">
                <div className="section-header">
                    <span className="section-num">§ 2.1.4</span>
                    <h2>DevOpsとテスト <span className="tag tag-new">v4.0 新設</span></h2>
                </div>
                <p>
                    DevOpsは開発（テストを含む）とオペレーションが共通目標に向けて協働するための<strong>組織変革</strong>。技術的プラクティスに加え、<strong>文化的変革</strong>が必須であることがシラバスで明示されている。
                </p>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>特性</th>
                                <th>説明</th>
                                <th>テストへの影響</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>チームの自律性</strong></td>
                                <td>各チームがエンドツーエンドの責任を持つ</td>
                                <td>テスターが開発チームに埋め込まれる</td>
                            </tr>
                            <tr>
                                <td><strong>高速フィードバック</strong></td>
                                <td>CIによる自動テスト実行</td>
                                <td>数分以内に品質フィードバックを取得</td>
                            </tr>
                            <tr>
                                <td><strong>統合ツールチェーン</strong></td>
                                <td>CI/CDパイプラインの自動化</td>
                                <td>テスト自動化が必須インフラに</td>
                            </tr>
                            <tr>
                                <td><strong>継続的インテグレーション（CI）</strong></td>
                                <td>コードの頻繁なマージ + 自動ビルド/テスト</td>
                                <td>リグレッション即時検出</td>
                            </tr>
                            <tr>
                                <td><strong>継続的デリバリー（CD）</strong></td>
                                <td>常にリリース可能な状態を維持</td>
                                <td>全テストレベルの高速化が前提</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subsection">
                    <h3>CI/CDパイプラインにおけるテストフロー</h3>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_D6} />
                        <div className="mermaid-caption">
                            図6: DevOps CI/CDパイプラインにおけるテストフロー
                        </div>
                    </div>
                </div>

                <div className="card-grid">
                    <div className="card accent-teal">
                        <div className="card-title">メリット</div>
                        <div className="card-sub">
                            安定した環境（IaC）でのテスト<br />非機能テストのパイプライン組み込み<br />テストカバレッジの継続的可視化
                        </div>
                    </div>
                    <div className="card accent-coral">
                        <div className="card-title">リスク・課題</div>
                        <div className="card-sub">
                            テスト自動化の初期構築コストが高い<br />手動テストの位置づけが不明確になりがち<br />パイプライン維持に専門知識が必要
                        </div>
                    </div>
                </div>

                <div className="callout callout-info">
                    <strong>重要:</strong>
                    DevOpsは<em>手動テストの廃止</em>を意味しない。探索的テストなどの手動テストは依然として重要な役割を持つ。シラバスはこの点を明示的に述べている。
                </div>
            </section>

            {/* SECTION 2.1.5 */}
            <section className="section" id="sec-215">
                <div className="section-header">
                    <span className="section-num">§ 2.1.5</span>
                    <h2>シフトレフト（Shift Left） <span className="tag tag-new">v4.0 新設</span></h2>
                </div>
                <p>
                    「Early Testing saves time and
                    money」（テスト原則3番）の実践的手法。テスト活動をSDLCの早い段階に移動させることで欠陥検出コストを削減する。
                </p>

                <div className="mermaid-wrap">
                    <Mermaid chart={DIAGRAM_D7} />
                    <div className="mermaid-caption">図7: 従来アプローチ vs シフトレフト</div>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>手法</th>
                                <th>タイミング</th>
                                <th>目的</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>仕様・要件のレビュー</td>
                                <td>要件定義フェーズ</td>
                                <td>曖昧さ・矛盾の早期検出</td>
                            </tr>
                            <tr>
                                <td>コード実装前のテスト設計</td>
                                <td>設計フェーズ</td>
                                <td>テスト容易性を設計に反映</td>
                            </tr>
                            <tr>
                                <td>CI/CDでの自動テスト</td>
                                <td>コミット時</td>
                                <td>即時フィードバック</td>
                            </tr>
                            <tr>
                                <td>静的解析（Lint/SAST）</td>
                                <td>コミット/ビルド時</td>
                                <td>コード品質の継続的確認</td>
                            </tr>
                            <tr>
                                <td>TDD / ATDD</td>
                                <td>実装フェーズ</td>
                                <td>テストによる設計駆動</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout callout-good">
                    <strong>正しい理解:</strong>
                    シフトレフトは「後半テストをなくす」ことではなく、「前半にもテスト活動を追加する」ことで全体の品質を向上させる考え方。後半のシステムテストや受入テストは依然として必要。
                </div>
            </section>

            {/* SECTION 2.1.6 */}
            <section className="section" id="sec-216">
                <div className="section-header">
                    <span className="section-num">§ 2.1.6</span>
                    <h2>
                        レトロスペクティブとプロセス改善 <span className="tag tag-new">v4.0 新設</span>
                    </h2>
                </div>
                <p>
                    レトロスペクティブ（振り返り会議）はプロジェクト、フェーズ、リリース、またはイテレーションの終了時に実施し、<strong>テストプロセスの継続的改善</strong>に活用する。
                </p>

                <div className="mermaid-wrap">
                    <Mermaid chart={DIAGRAM_D8} />
                    <div className="mermaid-caption">図8: レトロスペクティブの構造と成果</div>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>議題例</th>
                                <th>テスト観点での改善内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>テストカバレッジ</td>
                                <td>不足していたテスト観点の特定と次回への反映</td>
                            </tr>
                            <tr>
                                <td>欠陥の傾向分析</td>
                                <td>繰り返し発生する欠陥パターンの根本原因分析</td>
                            </tr>
                            <tr>
                                <td>テスト自動化</td>
                                <td>手動で繰り返したテストの自動化候補の洗い出し</td>
                            </tr>
                            <tr>
                                <td>テスト環境の問題</td>
                                <td>環境起因の障害への対策</td>
                            </tr>
                            <tr>
                                <td>テストプロセスの効率化</td>
                                <td>テスト設計・実行の所要時間の見直し</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* SECTION 2.2.1 */}
            <section className="section" id="sec-221">
                <div className="section-header">
                    <span className="section-num">§ 2.2.1</span>
                    <h2>テストレベル（5段階） <span className="tag tag-changed">v4.0 変更</span></h2>
                </div>
                <p>
                    v4.0の重要変更:
                    v3.1では「統合テスト」1段階だったが、v4.0では<strong>コンポーネント統合テスト</strong>と<strong>システム統合テスト</strong>に分離され、計5段階構成になった。
                </p>

                <div className="mermaid-wrap">
                    <Mermaid chart={DIAGRAM_D9} />
                    <div className="mermaid-caption">図9: 5段階テストレベルの階層構造（v4.0）</div>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>属性</th>
                                <th>コンポーネント</th>
                                <th>コンポーネント統合</th>
                                <th>システム</th>
                                <th>システム統合</th>
                                <th>受入</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>目的</strong></td>
                                <td>個別コンポーネントの動作確認</td>
                                <td>コンポーネント間IF確認</td>
                                <td>システム全体の動作確認</td>
                                <td>外部システムとの統合確認</td>
                                <td>ビジネス要件を満たすか確認</td>
                            </tr>
                            <tr>
                                <td><strong>テスト対象</strong></td>
                                <td>1コンポーネント/クラス</td>
                                <td>コンポーネント群のIF</td>
                                <td>システム全体</td>
                                <td>他システム・サードパーティとの結合</td>
                                <td>システム全体（本番同等環境）</td>
                            </tr>
                            <tr>
                                <td><strong>テスト基盤</strong></td>
                                <td>詳細設計、コンポーネント仕様</td>
                                <td>IF設計、アーキテクチャ設計</td>
                                <td>システム要件仕様</td>
                                <td>システムIF設計</td>
                                <td>ユーザー要件、ユースケース、契約</td>
                            </tr>
                            <tr>
                                <td><strong>テスト担当者</strong></td>
                                <td>主に開発者</td>
                                <td>開発者/テスター</td>
                                <td>テスター</td>
                                <td>テスター/統合チーム</td>
                                <td>ユーザー/顧客/テスター</td>
                            </tr>
                            <tr>
                                <td><strong>代表的な欠陥</strong></td>
                                <td>ロジックエラー</td>
                                <td>IF不整合、データ変換エラー</td>
                                <td>機能要件の未達、性能問題</td>
                                <td>外部システムとの通信エラー</td>
                                <td>ビジネス要件の未達</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subsection">
                    <h3>受入テストの4サブタイプ</h3>
                    <p>受入テストはシラバスで特に詳しく定義されており、試験で問われやすい。</p>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_D10} />
                        <div className="mermaid-caption">図10: 受入テストの4サブタイプ</div>
                    </div>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>サブタイプ</th>
                                    <th>略称</th>
                                    <th>実施者</th>
                                    <th>目的</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>ユーザー受入テスト</strong></td>
                                    <td>UAT</td>
                                    <td>実際のユーザー</td>
                                    <td>実際の利用シナリオでの検証</td>
                                </tr>
                                <tr>
                                    <td><strong>運用受入テスト</strong></td>
                                    <td>OAT</td>
                                    <td>システム管理者</td>
                                    <td>バックアップ・リカバリ・メンテナンス性確認</td>
                                </tr>
                                <tr>
                                    <td><strong>契約・規制受入テスト</strong></td>
                                    <td>—</td>
                                    <td>テスター/外部監査</td>
                                    <td>契約条件・法規制・標準への準拠確認</td>
                                </tr>
                                <tr>
                                    <td><strong>アルファ/ベータテスト</strong></td>
                                    <td>—</td>
                                    <td>限定ユーザー</td>
                                    <td>実際の利用環境での問題検出</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* SECTION 2.2.2 */}
            <section className="section" id="sec-222">
                <div className="section-header">
                    <span className="section-num">§ 2.2.2</span>
                    <h2>テストタイプ（4種類）</h2>
                </div>
                <p>
                    テストタイプは「何を評価するか」を定義する。テストレベルとは<strong>独立</strong>しており、すべてのテストレベルで全タイプを適用できる。
                </p>

                <div className="mermaid-wrap">
                    <Mermaid chart={DIAGRAM_D11} />
                    <div className="mermaid-caption">図11: 4つのテストタイプ</div>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>テストタイプ</th>
                                <th>評価対象</th>
                                <th>代表的な技法</th>
                                <th>主なテスト基盤</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>機能テスト</strong></td>
                                <td>機能要件（完全性・正確性・適切性）</td>
                                <td>同値分割、境界値分析、デシジョンテーブル</td>
                                <td>要件仕様、ユースケース、ユーザーストーリー</td>
                            </tr>
                            <tr>
                                <td><strong>非機能テスト</strong></td>
                                <td>品質特性（性能・セキュリティ・信頼性等）</td>
                                <td>性能テスト、セキュリティテスト、ユーザビリティテスト</td>
                                <td>性能要件、セキュリティ基準、UI仕様</td>
                            </tr>
                            <tr>
                                <td><strong>ブラックボックス</strong></td>
                                <td>外部仕様との整合性（内部実装を見ない）</td>
                                <td>同値分割、境界値分析、ユースケーステスト</td>
                                <td>仕様書、要件</td>
                            </tr>
                            <tr>
                                <td><strong>ホワイトボックス</strong></td>
                                <td>内部構造の網羅性</td>
                                <td>ステートメント/ブランチカバレッジ</td>
                                <td>コード、アーキテクチャ図</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subsection">
                    <h3>非機能テストの品質特性（ISO/IEC 25010）</h3>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_D12} />
                        <div className="mermaid-caption">
                            図12: ISO/IEC 25010 品質特性と非機能テストの対応
                        </div>
                    </div>
                </div>

                <div className="callout callout-info">
                    <strong>試験のポイント:</strong>
                    テストタイプはテストレベルとは<em>独立</em>。例えば「コンポーネントレベルで非機能テスト（単体レベルの性能計測）」も「システムレベルでホワイトボックステスト」も理論上は可能。これは試験でひっかけとして使われることがある。
                </div>
            </section>

            {/* SECTION 2.2.3 */}
            <section className="section" id="sec-223">
                <div className="section-header">
                    <span className="section-num">§ 2.2.3</span>
                    <h2>確認テストとリグレッションテスト</h2>
                </div>
                <p>
                    欠陥修正後に実施する2種類のテスト。目的が異なるため、混同しないよう区別して理解する必要がある。
                </p>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>属性</th>
                                <th>確認テスト (Confirmation Testing)</th>
                                <th>リグレッションテスト (Regression Testing)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>別名</strong></td>
                                <td>リテスト (Re-test)</td>
                                <td>回帰テスト</td>
                            </tr>
                            <tr>
                                <td><strong>目的</strong></td>
                                <td>欠陥修正が正しく行われたことを確認</td>
                                <td>修正によって他の部分に影響が出ていないことを確認</td>
                            </tr>
                            <tr>
                                <td><strong>実施タイミング</strong></td>
                                <td>欠陥修正後</td>
                                <td>欠陥修正後、変更後、環境変更後</td>
                            </tr>
                            <tr>
                                <td><strong>テスト範囲</strong></td>
                                <td>修正された欠陥に関連するテストのみ</td>
                                <td>修正の影響範囲全体（場合によってはシステム全体）</td>
                            </tr>
                            <tr>
                                <td><strong>自動化の推奨度</strong></td>
                                <td>低〜中（修正内容に依存）</td>
                                <td><strong>高</strong>（繰り返し実行のため）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subsection">
                    <h3>欠陥修正後のテストフロー</h3>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_D13} />
                        <div className="mermaid-caption">
                            図13: 欠陥修正後の確認テスト・リグレッションテストフロー
                        </div>
                    </div>
                    <div className="callout callout-good">
                        <strong>DevOps/Agile環境での推奨:</strong>
                        リグレッションテストはCI/CDパイプラインで自動実行することが強く推奨される。頻繁な変更に対応するためには手動実行は非効率。
                    </div>
                </div>
            </section>

            {/* SECTION 2.3 */}
            <section className="section" id="sec-23">
                <div className="section-header">
                    <span className="section-num">§ 2.3</span>
                    <h2>メンテナンステスト</h2>
                </div>
                <p>
                    システムのリリース後に行われるテスト活動。リリース前のテストとは異なる特性・課題を持つ。変更の種類とインパクト分析が中心概念。
                </p>

                <div className="mermaid-wrap">
                    <Mermaid chart={DIAGRAM_D14} />
                    <div className="mermaid-caption">
                        図14: メンテナンステストのトリガー（変更の4種類）
                    </div>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>変更の種類</th>
                                <th>例</th>
                                <th>テストの焦点</th>
                                <th>リスクレベル</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>修正変更</strong></td>
                                <td>バグフィックスのパッチ適用</td>
                                <td>確認テスト + 限定的リグレッション</td>
                                <td>中</td>
                            </tr>
                            <tr>
                                <td><strong>適応的変更</strong></td>
                                <td>OSバージョンアップ、クラウド移行</td>
                                <td>互換性テスト + 全体リグレッション</td>
                                <td>高</td>
                            </tr>
                            <tr>
                                <td><strong>改善的変更</strong></td>
                                <td>新機能追加、UI刷新</td>
                                <td>新機能テスト + 影響範囲のリグレッション</td>
                                <td>中〜高</td>
                            </tr>
                            <tr>
                                <td><strong>廃止・退役</strong></td>
                                <td>旧システムの廃止、データ移行</td>
                                <td>データ移行テスト、並行稼働テスト</td>
                                <td>高</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subsection">
                    <h3>インパクト分析（Impact Analysis）</h3>
                    <p>
                        メンテナンステストの計画において中核となるプロセス。変更の影響範囲を体系的に分析し、テスト範囲と優先順位を決定する。
                    </p>
                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_D15} />
                        <div className="mermaid-caption">図15: インパクト分析プロセス</div>
                    </div>
                </div>

                <div className="subsection">
                    <h3>メンテナンステスト固有の課題</h3>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>課題</th>
                                    <th>理由</th>
                                    <th>対策</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>テスト基盤の陳腐化</td>
                                    <td>長年の変更でドキュメントが実装と乖離</td>
                                    <td>変更都度のドキュメント更新、逆エンジニアリング</td>
                                </tr>
                                <tr>
                                    <td>変更範囲の不明確さ</td>
                                    <td>依存関係が複雑化しているシステム</td>
                                    <td>依存関係分析ツールの活用、コードカバレッジ計測</td>
                                </tr>
                                <tr>
                                    <td>本番環境での直接テスト</td>
                                    <td>テスト環境が整備されていない</td>
                                    <td>本番同等環境の整備、フィーチャーフラグの活用</td>
                                </tr>
                                <tr>
                                    <td>開発者知識の喪失</td>
                                    <td>担当者離脱による知識断絶</td>
                                    <td>テスト自動化、テストドキュメントの充実</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* SECTION EXAM PREP */}
            <section className="section" id="exam-prep">
                <div className="section-header">
                    <span className="section-num">§ 試験対策</span>
                    <h2>頻出問題パターンと落とし穴</h2>
                </div>

                <div className="subsection">
                    <h3>v4.0で追加・変更された重要ポイント</h3>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>変更内容</th>
                                    <th>v3.1</th>
                                    <th>v4.0</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>統合テストの分離</strong></td>
                                    <td>統合テスト（1段階）</td>
                                    <td>
                                        コンポーネント統合テスト + システム統合テスト（2段階）<span
                                            className="tag tag-changed"
                                            >変更</span
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>DevOpsセクション</strong></td>
                                    <td>なし</td>
                                    <td>2.1.4として新設<span className="tag tag-new">新設</span></td>
                                </tr>
                                <tr>
                                    <td><strong>Shift Leftセクション</strong></td>
                                    <td>なし</td>
                                    <td>2.1.5として新設<span className="tag tag-new">新設</span></td>
                                </tr>
                                <tr>
                                    <td><strong>テストファーストアプローチ</strong></td>
                                    <td>TDD/ATDDのみ</td>
                                    <td>
                                        TDD / ATDD / BDD（3種類）を明確化<span
                                            className="tag tag-changed"
                                            >変更</span
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>レトロスペクティブ</strong></td>
                                    <td>なし</td>
                                    <td>2.1.6として新設<span className="tag tag-new">新設</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="subsection">
                    <h3>よくある誤解と正しい理解</h3>
                    <div style={{display: "flex", flexDirection: "column", gap: "10px", margin: "16px 0"}}>
                        <div className="mcon-row">
                            <div className="mcon-wrong">
                                <div className="mcon-label">誤解</div>
                                BDD = TDDの発展形・上位互換
                            </div>
                            <div className="mcon-right">
                                <div className="mcon-label">正しい理解</div>
                                BDDとTDDは異なるアプローチ。BDDは振る舞い仕様に焦点、TDDはコード設計に焦点
                            </div>
                        </div>
                        <div className="mcon-row">
                            <div className="mcon-wrong">
                                <div className="mcon-label">誤解</div>
                                シフトレフト = テストを前倒しにするだけ
                            </div>
                            <div className="mcon-right">
                                <div className="mcon-label">正しい理解</div>
                                テスト活動全体の前倒し +
                                後半テストとの組み合わせ。後半テストは依然として必要
                            </div>
                        </div>
                        <div className="mcon-row">
                            <div className="mcon-wrong">
                                <div className="mcon-label">誤解</div>
                                DevOps = 手動テストの廃止
                            </div>
                            <div className="mcon-right">
                                <div className="mcon-label">正しい理解</div>
                                探索的テストなどの手動テストは依然として重要な役割を持つ
                            </div>
                        </div>
                        <div className="mcon-row">
                            <div className="mcon-wrong">
                                <div className="mcon-label">誤解</div>
                                確認テスト = リグレッションテスト
                            </div>
                            <div className="mcon-right">
                                <div className="mcon-label">正しい理解</div>
                                目的が異なる。確認テストは修正確認、リグレッションは副作用確認
                            </div>
                        </div>
                        <div className="mcon-row">
                            <div className="mcon-wrong">
                                <div className="mcon-label">誤解</div>
                                テストタイプはテストレベルに紐付く
                            </div>
                            <div className="mcon-right">
                                <div className="mcon-label">正しい理解</div>
                                テストタイプはすべてのテストレベルで適用可能（独立している）
                            </div>
                        </div>
                        <div className="mcon-row">
                            <div className="mcon-wrong">
                                <div className="mcon-label">誤解</div>
                                ATDDはGiven/When/Then形式を使う
                            </div>
                            <div className="mcon-right">
                                <div className="mcon-label">正しい理解</div>
                                Given/When/Then（Gherkin）はBDDの形式。ATDDは形式を問わない
                            </div>
                        </div>
                    </div>
                </div>

                <div className="subsection">
                    <h3>試験頻出のK2問題パターン例</h3>
                    <div className="exam-q">
                        <div className="exam-q-label">問題タイプ 1 — テストレベルの識別</div>
                        <div className="exam-q-text">
                            開発チームが外部決済APIとの統合後、決済フローに問題が発生した。この問題を検出するために最も適切なテストレベルはどれか？
                        </div>
                        <div className="exam-a">
                            システム統合テスト（外部システムとの結合インターフェースを確認するため）
                        </div>
                    </div>
                    <div className="exam-q">
                        <div className="exam-q-label">
                            問題タイプ 2 — テストファーストアプローチの識別
                        </div>
                        <div className="exam-q-text">
                            テストチームがコードを書く前に、Gherkinを使ってGiven/When/Then形式でテストシナリオを定義している。どのアプローチか？
                        </div>
                        <div className="exam-a">
                            BDD（Given/When/Then形式 + テストファーストの組み合わせがBDDの特徴）
                        </div>
                    </div>
                    <div className="exam-q">
                        <div className="exam-q-label">問題タイプ 3 — DevOpsにおけるテストの役割</div>
                        <div className="exam-q-text">
                            DevOpsチームがCIパイプラインでビルドのたびに自動テストを実行している。このテストの主要な目的は何か？
                        </div>
                        <div className="exam-a">
                            リグレッション防止と即時フィードバック（変更の副作用を最速で検出し開発者に通知する）
                        </div>
                    </div>
                    <div className="exam-q">
                        <div className="exam-q-label">問題タイプ 4 — メンテナンステストの変更種別</div>
                        <div className="exam-q-text">
                            本番稼働中のシステムのデータベースをOracleからPostgreSQLに移行する際のテストは、どの変更種別に該当するか？
                        </div>
                        <div className="exam-a">
                            適応的変更（Adaptive Changes）— 環境変化への対応が目的であるため
                        </div>
                    </div>
                    <div className="exam-q">
                        <div className="exam-q-label">問題タイプ 5 — 受入テストのサブタイプ</div>
                        <div className="exam-q-text">
                            システム管理者がシステムのバックアップ・リストア手順と障害時の自動復旧機能を検証している。これはどのテストか？
                        </div>
                        <div className="exam-a">
                            運用受入テスト（OAT）— システム管理者による運用面の検証が特徴
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION REFERENCES */}
            <section className="section" id="references">
                <div className="section-header">
                    <span className="section-num">§ 参照</span>
                    <h2>参照URL一覧</h2>
                </div>
                <p>本ガイド作成に使用した一次資料・信頼性の高い情報源。最終確認日: 2026-06-29。</p>

                <div style={{margin: "16px 0"}}>
                    <div className="ref-item">
                        <div className="ref-num">01</div>
                        <div>
                            <div className="ref-title">ISTQB CTFL v4.0 公式ページ</div>
                            <div className="ref-url">
                                <a
                                    href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                    target="_blank" rel="noopener noreferrer"
                                    >https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/</a
                                >
                            </div>
                            <div className="ref-date">
                                International Software Testing Qualifications Board — 公式
                            </div>
                        </div>
                    </div>
                    <div className="ref-item">
                        <div className="ref-num">02</div>
                        <div>
                            <div className="ref-title">CTFL Syllabus v4.0.1（PDF）— 一次資料</div>
                            <div className="ref-url">
                                <a
                                    href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                    target="_blank" rel="noopener noreferrer"
                                    >https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf</a
                                >
                            </div>
                            <div className="ref-date">
                                ISTQB, 2024-09-15 改訂 — 本ガイドの主要参照元
                            </div>
                        </div>
                    </div>
                    <div className="ref-item">
                        <div className="ref-num">03</div>
                        <div>
                            <div className="ref-title">ISTQB v4.0 リリースアナウンス</div>
                            <div className="ref-url">
                                <a
                                    href="https://istqb.org/istqb-releases-certified-tester-foundation-level-v4-0-ctfl/"
                                    target="_blank" rel="noopener noreferrer"
                                    >https://istqb.org/istqb-releases-certified-tester-foundation-level-v4-0-ctfl/</a
                                >
                            </div>
                            <div className="ref-date">ISTQB, 2023-05-09 — v4.0リリース時の公式発表</div>
                        </div>
                    </div>
                    <div className="ref-item">
                        <div className="ref-num">04</div>
                        <div>
                            <div className="ref-title">ISTQB 用語集（Glossary）</div>
                            <div className="ref-url">
                                <a href="https://glossary.istqb.org/en_US/search" target="_blank" rel="noopener noreferrer"
                                    >https://glossary.istqb.org/en_US/search</a
                                >
                            </div>
                            <div className="ref-date">ISTQB — テスト用語の公式定義</div>
                        </div>
                    </div>
                    <div className="ref-item">
                        <div className="ref-num">05</div>
                        <div>
                            <div className="ref-title">ASTQB版 CTFL Syllabus v4.0.1（PDF）</div>
                            <div className="ref-url">
                                <a
                                    href="https://astqb.org/assets/documents/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                    target="_blank" rel="noopener noreferrer"
                                    >https://astqb.org/assets/documents/ISTQB_CTFL_Syllabus_v4.0.1.pdf</a
                                >
                            </div>
                            <div className="ref-date">
                                ASTQB（米国ISTQBメンバーボード） — ミラー資料
                            </div>
                        </div>
                    </div>
                    <div className="ref-item">
                        <div className="ref-num">06</div>
                        <div>
                            <div className="ref-title">ISTQB.com — CTFL v4.0 試験・シラバスガイド</div>
                            <div className="ref-url">
                                <a href="https://www.istqb.com/ctfl-v4-0/" target="_blank" rel="noopener noreferrer"
                                    >https://www.istqb.com/ctfl-v4-0/</a
                                >
                            </div>
                            <div className="ref-date">
                                istqb.com (独立教育リソース), 最終更新 2026-05-21
                            </div>
                        </div>
                    </div>
                    <div className="ref-item">
                        <div className="ref-num">07</div>
                        <div>
                            <div className="ref-title">istqb.guru — Chapter別シラバス詳細解説</div>
                            <div className="ref-url">
                                <a
                                    href="https://www.istqb.guru/ctfl-v4-syllabus-chapter-by-chapter-deep-dive/"
                                    target="_blank" rel="noopener noreferrer"
                                    >https://www.istqb.guru/ctfl-v4-syllabus-chapter-by-chapter-deep-dive/</a
                                >
                            </div>
                            <div className="ref-date">istqb.guru, 2026-04-17</div>
                        </div>
                    </div>
                    <div className="ref-item">
                        <div className="ref-num">08</div>
                        <div>
                            <div className="ref-title">
                                testing101.net — CTFL v4.0 概要とChapter別ポイント
                            </div>
                            <div className="ref-url">
                                <a
                                    href="https://www.testing101.net/post/overview-of-the-istqb-certified-tester-foundation-level-ctfl-v4-0-new"
                                    target="_blank" rel="noopener noreferrer"
                                    >https://www.testing101.net/post/overview-of-the-istqb-certified-tester-foundation-level-ctfl-v4-0-new</a
                                >
                            </div>
                            <div className="ref-date">
                                testing101.net, 2025-05-01 — v4.0変更点の詳細解説
                            </div>
                        </div>
                    </div>
                    <div className="ref-item">
                        <div className="ref-num">09</div>
                        <div>
                            <div className="ref-title">
                                ISO/IEC 25010 — Systems and software Quality Requirements and
                                Evaluation
                            </div>
                            <div className="ref-url">
                                <a href="https://www.iso.org/standard/78176.html" target="_blank" rel="noopener noreferrer"
                                    >https://www.iso.org/standard/78176.html</a
                                >
                            </div>
                            <div className="ref-date">ISO/IEC — 非機能テストの品質特性の国際標準</div>
                        </div>
                    </div>
                    <div className="ref-item">
                        <div className="ref-num">10</div>
                        <div>
                            <div className="ref-title">CTFL-AT（Agile Tester）公式ページ</div>
                            <div className="ref-url">
                                <a
                                    href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/"
                                    target="_blank" rel="noopener noreferrer"
                                    >https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/</a
                                >
                            </div>
                            <div className="ref-date">ISTQB — CTFL後の発展資格（Agileストリーム）</div>
                        </div>
                    </div>
                    <div className="ref-item">
                        <div className="ref-num">11</div>
                        <div>
                            <div className="ref-title">
                                mastersoftwaretesting.com — CTFL Complete Study Guide 2025
                            </div>
                            <div className="ref-url">
                                <a
                                    href="https://mastersoftwaretesting.com/certification-guides/istqb/ctfl/ctfl-complete-guide"
                                    target="_blank" rel="noopener noreferrer"
                                    >https://mastersoftwaretesting.com/certification-guides/istqb/ctfl/ctfl-complete-guide</a
                                >
                            </div>
                            <div className="ref-date">mastersoftwaretesting.com, 2026-01-23</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="doc-footer">
                <p>
                    <strong>著作権表示:</strong> 本資料はISTQB CTFL Syllabus
                    v4.0.1の学習用解説資料です。ISTQB®はInternational Software Testing
                    Qualifications
                    Boardの登録商標です。シラバスの著作権は各著者およびISTQBに帰属します。
                </p>
                <p style={{marginTop: "8px"}}>
                    <strong>最終更新:</strong> 2026年6月29日 | <strong>参照シラバス:</strong> ISTQB
                    CTFL v4.0.1 (2024-09-15)
                </p>
            </footer>
            </main>
        </div>
    );
}
