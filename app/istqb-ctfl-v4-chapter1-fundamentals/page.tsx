import './istqb-ctfl-v4-chapter1-fundamentals.css';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';

export default function Page() {
    return (
        <div className="istqb-ctfl-v4-chapter1-page">
            <NavBar />
            
            <main className="main">
                {/* HERO */}
                <section className="hero">
                    <div className="hero-eyebrow">ISTQB CTFL v4.0.1 — Chapter 1 完全解説</div>
                    <h1 className="hero-title">
                        テストの基礎<br />
                        <span style={{ fontSize: '18px', color: 'var(--color-text-secondary)', fontWeight: 400 }}>
                            Fundamentals of Testing
                        </span>
                    </h1>
                    <p className="hero-sub">
                        本ガイドは ISTQB Certified Tester Foundation Level Syllabus <strong>v4.0.1</strong>（2024年9月15日付）に準拠した、中級者〜上級者向けの体系的解説です。試験で問われる LO 全 14 項目を網羅し、各概念の実務的な意味まで掘り下げます。
                    </p>
                    <div className="hero-meta">
                        <div className="meta-chip"><span className="dot"></span>試験問題: 40問中 8問</div>
                        <div className="meta-chip"><span class="dot"></span>K1×2 + K2×6</div>
                        <div className="meta-chip"><span class="dot"></span>学習目安: 180分</div>
                        <div className="meta-chip"><span class="dot"></span>合格基準: 65% (26/40)</div>
                    </div>
                </section>

                {/* SECTION: OVERVIEW */}
                <section className="section" id="overview">
                    <div className="section-header">
                        <div className="section-number">Section 0</div>
                        <h2 className="section-title">Chapter 1 の全体像と学習目標</h2>
                        <div className="section-title-en">Overview &amp; Learning Objectives</div>
                    </div>

                    <div className="subsection">
                        <h3 className="subsection-title">シラバスにおける位置づけ</h3>
                        <p>
                            Chapter 1 は CTFL v4.0 全体の<strong>語彙と思考モデル</strong>を提供する章です。ここで定義される用語は Chapter 2〜6 全体で繰り返し使用されるため、理解の甘さが後続章の習得に直接影響します。
                        </p>
                        <div className="diagram-wrap">
                            <Mermaid chart={`flowchart TD
C1["Chapter 1: テストの基礎<br/>語彙・思考モデルの確立"]
C2["Chapter 2: SDLCとテスト<br/>130分 / 6問"]
C3["Chapter 3: 静的テスト<br/>80分 / 4問"]
C4["Chapter 4: テスト分析と設計<br/>390分 / 12問"]
C5["Chapter 5: テスト活動の管理<br/>335分 / 10問"]
C6["Chapter 6: テストツール<br/>20分 / 2問"]
C1 --> C2
C1 --> C3
C1 --> C4
C1 --> C5
C1 --> C6
style C1 fill:#2e1065,stroke:#8b5cf6,color:#e9d5ff
style C4 fill:#134e4a,stroke:#14b8a6,color:#ccfbf1
style C5 fill:#134e4a,stroke:#14b8a6,color:#ccfbf1`} />
                            <div className="diagram-label">図 0-1 各 Chapter の依存関係と試験配点</div>
                        </div>
                        <div className="callout callout-warning">
                            <div className="callout-title">試験戦略</div>
                            Chapter 4（390分・12問）と Chapter 5（335分・10問）で試験の 55% を占めます。Chapter 1 の用語を固めておかないと、これらの章の問題文を正確に解釈できません。
                        </div>
                    </div>

                    <div className="subsection">
                        <h3 className="subsection-title">学習目標 (Learning Objectives) 一覧</h3>
                        <p>
                            Chapter 1 には全 14 の LO があります。K1（記憶）= 2件、K2（理解）= 12件 が試験の出題レベルです。
                        </p>
                        <div className="lo-grid">
                            <div className="lo-card">
                                <div className="lo-id">FL-1.1.1</div>
                                <span className="lo-level lo-k1">K1 記憶</span>
                                <div className="lo-text">典型的なテスト目標を識別する</div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.1.2</div>
                                <span className="lo-level lo-k2">K2 理解</span>
                                <div className="lo-text">テストとデバッグを区別する</div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.2.1</div>
                                <span className="lo-level lo-k2">K2 理解</span>
                                <div className="lo-text">テストが必要な理由を例示する</div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.2.2</div>
                                <span className="lo-level lo-k1">K1 記憶</span>
                                <div className="lo-text">テストと品質保証の関係を説明する</div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.2.3</div>
                                <span className="lo-level lo-k2">K2 理解</span>
                                <div className="lo-text">根本原因・エラー・欠陥・故障を区別する</div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.3.1</div>
                                <span className="lo-level lo-k2">K2 理解</span>
                                <div className="lo-text">7つのテスト原則を説明する</div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.4.1</div>
                                <span className="lo-level lo-k2">K2 理解</span>
                                <div className="lo-text">各テスト活動と関連タスクを説明する</div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.4.2</div>
                                <span className="lo-level lo-k2">K2 理解</span>
                                <div className="lo-text">
                                    コンテキストがテストプロセスに与える影響を説明する
                                </div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.4.3</div>
                                <span className="lo-level lo-k2">K2 理解</span>
                                <div className="lo-text">テスト活動を支えるテストウェアを区別する</div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.4.4</div>
                                <span className="lo-level lo-k2">K2 理解</span>
                                <div className="lo-text">トレーサビリティ維持の価値を説明する</div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.4.5</div>
                                <span className="lo-level lo-k2">K2 理解</span>
                                <div className="lo-text">テストにおける異なるロールを比較する</div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.5.1</div>
                                <span className="lo-level lo-k2">K2 理解</span>
                                <div className="lo-text">テストに必要な汎用スキルの例を示す</div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.5.2</div>
                                <span className="lo-level lo-k1">K1 記憶</span>
                                <div className="lo-text">ホールチームアプローチの利点を説明する</div>
                            </div>
                            <div className="lo-card">
                                <div className="lo-id">FL-1.5.3</div>
                                <span className="lo-level lo-k2">K2 理解</span>
                                <div className="lo-text">
                                    テストの独立性のメリット・デメリットを区別する
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 1.1 */}
                <section className="section" id="s11">
                    <div className="section-header">
                        <div className="section-number">Section 1.1</div>
                        <h2 className="section-title">テストとは何か</h2>
                        <div className="section-title-en">What is Testing?</div>
                    </div>

                    <div className="subsection">
                        <h3 className="subsection-title">テストの定義</h3>
                        <p>CTFL v4.0 では、ソフトウェアテストを次のように定義しています。</p>
                        <div className="callout callout-info">
                            <div className="callout-title">公式定義 (CTFL v4.0.1 §1.1)</div>
                            ソフトウェアテストとは、<strong>欠陥を発見し、ソフトウェア作業成果物の品質を評価するための一連の活動</strong>である。テストはソフトウェア品質を評価し、運用におけるソフトウェア故障のリスクを低減する。
                        </div>
                        <p>
                            従来の「テスト = ソフトウェアを実行して結果を確認する」という認識は<strong>誤解</strong>です。v4.0 ではテストを以下の2次元で捉えます。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>次元</th>
                                        <th>種別</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>実行有無</td>
                                        <td><strong>動的テスト (Dynamic Testing)</strong></td>
                                        <td>ソフトウェアを実際に実行して行うテスト</td>
                                    </tr>
                                    <tr>
                                        <td>実行有無</td>
                                        <td><strong>静的テスト (Static Testing)</strong></td>
                                        <td>
                                            ソフトウェアを実行せずに行うテスト（レビュー・静的解析）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>目的</td>
                                        <td><strong>検証 (Verification)</strong></td>
                                        <td>
                                            システムが仕様を満たすか確認する — &quot;Are we building the product right?&quot;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>目的</td>
                                        <td><strong>妥当性確認 (Validation)</strong></td>
                                        <td>
                                            システムがユーザーのニーズを満たすか確認する — &quot;Are we building the right product?&quot;
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="diagram-wrap">
                            <Mermaid chart={`flowchart LR
subgraph 実行形態
DT["動的テスト<br/>Dynamic Testing<br/>ソフトウェアを実行"]
ST["静的テスト<br/>Static Testing<br/>レビュー・静的解析"]
end
subgraph 目的
VE["検証<br/>Verification<br/>仕様通りに作られているか"]
VA["妥当性確認<br/>Validation<br/>正しいものを作っているか"]
end
DT --> VE
DT --> VA
ST --> VE
style DT fill:#2e1065,stroke:#8b5cf6,color:#e9d5ff
style ST fill:#134e4a,stroke:#14b8a6,color:#ccfbf1
style VE fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style VA fill:#3b1a1a,stroke:#f43f5e,color:#fecdd3`} />
                            <div className="diagram-label">図 1.1-1 テストの2次元分類</div>
                        </div>
                    </div>

                    <div className="subsection" id="s11-objectives">
                        <h3 class="subsection-title">テスト目標 (Test Objectives) — FL-1.1.1</h3>
                        <p>
                            v4.0 で定義される典型的なテスト目標は以下の9つです。試験では「どのシナリオがどの目標に該当するか」を問う問題が出調されます。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>テスト目標</th>
                                        <th>実務例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            要件・ユーザーストーリー・設計・コードなどの<strong>作業成果物の評価</strong>
                                        </td>
                                        <td>要件レビューで曖昧な仕様を検出する</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><strong>故障を引き起こし欠陥を発見</strong>する</td>
                                        <td>境界値テストでクラッシュを再現する</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            テスト対象の必要な<strong>カバレッジを確保</strong>する
                                        </td>
                                        <td>命令カバレッジ 100% を達成する</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            不十分なソフトウェア品質の<strong>リスクレベルを低減</strong>する
                                        </td>
                                        <td>リスクベーステストで重要機能を優先する</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>
                                            指定要件が満たされているかを<strong>検証</strong>する
                                        </td>
                                        <td>受け入れ基準に対するシステムテスト</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>
                                            契約・法的・規制上の要件への<strong>準拠を検証</strong>する
                                        </td>
                                        <td>医療機器の FDA 規制適合確認</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>
                                            意思決定に必要な<strong>情報をステークホルダーに提供</strong>する
                                        </td>
                                        <td>テスト進捗レポートでリリース可否を判断</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>テスト対象の品質への<strong>信頼を構築</strong>する</td>
                                        <td>本番リリース前の回帰テスト合格</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>
                                            テスト対象が完全で期待通りに動作するかを<strong>妥当性確認</strong>する
                                        </td>
                                        <td>UAT（ユーザー受け入れテスト）実施</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout callout-warning">
                            <div className="callout-title">コンテキスト依存</div>
                            テスト目標はコンテキストによって変わります。テスト対象、テストレベル、リスク、SDLC、ビジネスコンテキストが影響します。
                        </div>
                    </div>

                    <div className="subsection" id="s11-debug">
                        <h3 className="subsection-title">テストとデバッグの違い — FL-1.1.2</h3>
                        <p>
                            試験最頻出の区別です。テストとデバッグは<strong>別の活動であり、通常別の担当者</strong>が行います。
                        </p>
                        <div className="diagram-wrap">
                            <Mermaid chart={`flowchart TD
T1["テスト実行<br/>Testing"]
F["故障を観察<br/>Failure observed"]
DB1["デバッグ開始<br/>Debugging"]
DB2["欠陥の特定<br/>Defect found"]
DB3["欠陥の修正<br/>Defect fixed"]
CT["確認テスト<br/>Confirmation Testing"]
RT["回帰テスト<br/>Regression Testing"]
T1 --> F
F --> DB1
DB1 --> DB2
DB2 --> DB3
DB3 --> CT
CT --> RT
style T1 fill:#2e1065,stroke:#8b5cf6,color:#e9d5ff
style F fill:#3b1a1a,stroke:#f43f5e,color:#fecdd3
style DB1 fill:#134e4a,stroke:#14b8a6,color:#ccfbf1
style DB2 fill:#134e4a,stroke:#14b8a6,color:#ccfbf1
style DB3 fill:#134e4a,stroke:#14b8a6,color:#ccfbf1
style CT fill:#2e1065,stroke:#8b5cf6,color:#e9d5ff
style RT fill:#2e1065,stroke:#8b5cf6,color:#e9d5ff`} />
                            <div className="diagram-label">
                                図 1.1-2 テスト → デバッグ → 確認テスト → 回帰テストのフロー
                            </div>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>活動</th>
                                        <th>担当</th>
                                        <th>目的</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>テスト (Testing)</strong></td>
                                        <td>テスター</td>
                                        <td>故障を引き起こす / 欠陥を直接発見する</td>
                                    </tr>
                                    <tr>
                                        <td><strong>デバッグ (Debugging)</strong></td>
                                        <td>開発者</td>
                                        <td>故障の原因（欠陥）を見つけて修正する</td>
                                    </tr>
                                    <tr>
                                        <td><strong>確認テスト (Confirmation Testing)</strong></td>
                                        <td>テスター（初回テストと同じ人が望ましい）</td>
                                        <td>修正が効いたかを確認する</td>
                                    </tr>
                                    <tr>
                                        <td><strong>回帰テスト (Regression Testing)</strong></td>
                                        <td>テスター</td>
                                        <td>修正が他の箇所に悪影響を与えていないかを確認する</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout callout-danger">
                            <div className="callout-title">試験の罠</div>
                            「テストが欠陥を見つけた」は日常語として正しいですが、ISTQB 的には不正確です。正確には「テストが<strong>故障を観察し</strong>、そこから欠陥を<strong>推定</strong>した」です。テストは出力（故障）を見るのであって、コード（欠陥）を直接見ているわけではありません。
                        </div>
                    </div>
                </section>

                {/* SECTION 1.2 */}
                <section className="section" id="s12">
                    <div className="section-header">
                        <div className="section-number">Section 1.2</div>
                        <h2 className="section-title">テストはなぜ必要か</h2>
                        <div className="section-title-en">Why is Testing Necessary?</div>
                    </div>

                    <div className="subsection">
                        <h3 className="subsection-title">テストの貢献 — FL-1.2.1</h3>
                        <p>
                            ソフトウェアは現代社会に深く組み込まれており、障害が発生すると金銭的損失・時間損失・ブランド毀損、最悪の場合は人命に関わる問題が生じます。テストは以下の観点でプロジェクト成功に貢献します。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>貢献領域</th>
                                        <th>具体的価値</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>欠陥の早期発見</strong></td>
                                        <td>
                                            後工程で発見するよりも修正コストが大幅に低い（詳細は原則 3 参照）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>リスク低減</strong></td>
                                        <td>
                                            本番障害の発生確率を下げ、事業継続リスクを最小化する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>意思決定支援</strong></td>
                                        <td>
                                            リリース可否判断のための客観的データをステークホルダーに提供する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>品質評価</strong></td>
                                        <td>
                                            現状の品質レベルを定量的に示し、改善活動の優先付けを支援する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>コンプライアンス</strong></td>
                                        <td>
                                            規制・契約要件への適合を証明し、法的リスクを回避する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>欠陥予防</strong></td>
                                        <td>
                                            根本原因分析により、類似欠陥の将来的な発生を防止する
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="subsection" id="s12-qa">
                        <h3 className="subsection-title">テストと品質保証 (QA) の関係 — FL-1.2.2</h3>
                        <p>
                            v4.0 で最もよく混同される概念の一つです。QA とテストは<strong>異なるレベルで機能</strong>します。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>品質保証 (QA)</th>
                                        <th>テスト (Testing)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>定義</td>
                                        <td>
                                            品質要件が満たされるという信頼を提供するプロセス指向の活動
                                        </td>
                                        <td>品質を評価し欠陥を発見するための活動</td>
                                    </tr>
                                    <tr>
                                        <td>種別</td>
                                        <td>プロアクティブ（予防的）</td>
                                        <td>リアクティブ（検出的）</td>
                                    </tr>
                                    <tr>
                                        <td>対象</td>
                                        <td>プロセス全体</td>
                                        <td>特定の作業成果物・製品</td>
                                    </tr>
                                    <tr>
                                        <td>位置づけ</td>
                                        <td>品質管理 (QM) の一部</td>
                                        <td>品質コントロール (QC) の一形態</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="diagram-wrap">
                            <Mermaid chart={`flowchart TD
QM["品質管理<br/>Quality Management"]
QA["品質保証<br/>Quality Assurance<br/>プロセス指向・予防的"]
QC["品質コントロール<br/>Quality Control<br/>製品指向・検出的"]
T["テスト<br/>Testing<br/>QCの一形態"]
QM --> QA
QM --> QC
QC --> T
style QM fill:#2e1065,stroke:#8b5cf6,color:#e9d5ff
style QA fill:#134e4a,stroke:#14b8a6,color:#ccfbf1
style QC fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style T fill:#3b1a1a,stroke:#f43f5e,color:#fecdd3`} />
                            <div className="diagram-label">図 1.2-1 品質管理の階層構造</div>
                        </div>
                    </div>

                    <div className="subsection" id="s12-chain">
                        <h3 className="subsection-title">エラー・欠陥・故障・根本原因 — FL-1.2.3</h3>
                        <p>
                            CTFL v4.0 試験で<strong>最も頻繁に問われる概念の連鎖</strong>です。ISO/IEC/IEEE 29119 標準と整合した定義を使用します。
                        </p>
                        <div className="diagram-wrap">
                            <Mermaid chart={`flowchart LR
RC["根本原因<br/>Root Cause<br/>問題の根本的理由<br/>例: コードレビュー不足"]
E["エラー<br/>Error / Mistake<br/>人間のミス<br/>例: 仕様を誤解して実装"]
D["欠陥<br/>Defect / Bug / Fault<br/>コード・ドキュメントの不備<br/>例: 誤った計算式"]
F["故障<br/>Failure<br/>観察可能な不具合<br/>例: 金額の表示が間違う"]
RC -->|根本的に引き起こす| E
E -->|引き起こす| D
D -->|引き起こす| F
style RC fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style E fill:#3b2800,stroke:#f59e0b,color:#fef3c7
style D fill:#3b1a1a,stroke:#f43f5e,color:#fecdd3
style F fill:#3b1a1a,stroke:#f43f5e,color:#fecdd3`} />
                            <div className="diagram-label">
                                図 1.2-2 根本原因 → エラー → 欠陥 → 故障の連鎖
                            </div>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>用語</th>
                                        <th>英語</th>
                                        <th>定義</th>
                                        <th>実例（ECサイト購入処理）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>根本原因</strong></td>
                                        <td>Root Cause</td>
                                        <td>問題発生の根本的な理由</td>
                                        <td>
                                            要件定義書に税率の取り扱い仕様が記載されていなかった
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>エラー</strong></td>
                                        <td>Error / Mistake</td>
                                        <td>誤った結果を生み出す人間の行為</td>
                                        <td>開発者が税率の計算ロジックを逆に実装</td>
                                    </tr>
                                    <tr>
                                        <td><strong>欠陥</strong></td>
                                        <td>Defect / Bug / Fault</td>
                                        <td>コンポーネントや成果物の不備</td>
                                        <td>
                                            コード中の <code>tax * price</code> が <code>price / tax</code> になっている
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>故障</strong></td>
                                        <td>Failure</td>
                                        <td>テスト対象が期待した範囲で動作しないこと</td>
                                        <td>決済確認画面で表示金額が正しくない</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout callout-success">
                            <div className="callout-title">根本原因分析の重要性</div>
                            根本原因分析 (Root Cause Analysis) を実施することで、類似した故障・欠陥の将来的な発生を<strong>防止</strong>できます。これはテストの「欠陥予防」という目標に直結します。
                        </div>
                        <div className="callout callout-warning">
                            <div className="callout-title">v4.0 用語の注意</div>
                            旧来の ISTQB 資料では <code>fault</code> が <code>defect</code> の同義語として使われていました。v4.0 では <strong>defect</strong> が優先用語ですが、試験では両方が使われる可能性があります。また日常語の &quot;bug&quot; は ISTQB 用語では defect の同義語であり、failure（故障）ではありません。
                        </div>
                    </div>
                </section>

                {/* SECTION 1.3 */}
                <section className="section" id="s13">
                    <div className="section-header">
                        <div className="section-number">Section 1.3</div>
                        <h2 className="section-title">テストの7原則</h2>
                        <div className="section-title-en">Testing Principles — FL-1.3.1</div>
                    </div>

                    <p>
                        v4.0 で定義される7つのテスト原則は、すべてのテスト活動に適用される汎用ガイドラインです。試験では<strong>「このシナリオはどの原則に該当するか」</strong>という適用問題が出ます。暗記だけでなく、シナリオへの適用練習が必須です。
                    </p>

                    <div className="diagram-wrap">
                        <Mermaid chart={`flowchart LR
P1["P1<br/>欠陥の存在を示す<br/>不在は証明できない"]
P2["P2<br/>網羅的テスト<br/>は不可能"]
P3["P3<br/>早期テストが<br/>時間とコストを節約"]
P4["P4<br/>欠陥は<br/>クラスタリングする"]
P5["P5<br/>テストは<br/>劣化する"]
P6["P6<br/>テストは<br/>コンテキスト依存"]
P7["P7<br/>欠陥不在<br/>の誤謬"]
P1 --- P2
P2 --- P3
P3 --- P4
P4 --- P5
P5 --- P6
P6 --- P7
style P1 fill:#2e1065,stroke:#8b5cf6,color:#e9d5ff
style P2 fill:#134e4a,stroke:#14b8a6,color:#ccfbf1
style P3 fill:#14532d,stroke:#22c55e,color:#bbf7d0
style P4 fill:#3b2800,stroke:#f59e0b,color:#fef3c7
style P5 fill:#3b1a1a,stroke:#f43f5e,color:#fecdd3
style P6 fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style P7 fill:#2e1065,stroke:#a855f7,color:#e9d5ff`} />
                        <div className="diagram-label">図 1.3-1 7つのテスト原則の概要</div>
                    </div>

                    <div className="principle-list">
                        <div className="principle-card">
                            <div className="principle-num p1">1</div>
                            <div>
                                <div className="principle-name">
                                    テストは欠陥の存在を示すが、欠陥の不在は証明できない
                                </div>
                                <div className="principle-name-en">
                                    Testing shows the presence, not the absence of defects
                                </div>
                                <p className="principle-desc">
                                    テストで欠陥が見つかったとしても、すべての欠陥が発見されたとは言えない。テストに合格しても「欠陥ゼロ」の証明にはならない。<br />
                                    <strong>実務的意味:</strong> リリース判断はテスト結果 + リスク評価の総合判断が必要。
                                </p>
                                <span className="principle-tag">参照: Buxton 1970</span>
                            </div>
                        </div>
                        <div className="principle-card">
                            <div className="principle-num p2">2</div>
                            <div>
                                <div className="principle-name">網羅的なテストは不可能</div>
                                <div className="principle-name-en">
                                    Exhaustive testing is impossible
                                </div>
                                <p className="principle-desc">
                                    境界値・入力値の組み合わせ・実行パスをすべてテストすることは（小規模なケースを除き）現実的でない。<br />
                                    <strong>対策:</strong> リスクと優先度に基づいてテスト範囲を絞り込む（リスクベーステスト）。
                                </p>
                                <span className="principle-tag">→ リスクベーステスト (Ch.5) に直結</span>
                            </div>
                        </div>
                        <div className="principle-card">
                            <div className="principle-num p3">3</div>
                            <div>
                                <div className="principle-name">早期テストが時間とコストを節約する</div>
                                <div className="principle-name-en">
                                    Early testing saves time and money
                                </div>
                                <p className="principle-desc">
                                    欠陥の発見が遅れるほど修正コストは指数的に増大する。
                                </p>
                                <div className="table-wrap" style={{ margin: '10px 0' }}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>フェーズ</th>
                                                <th>修正コストの相対値</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>要件定義</td>
                                                <td>1×</td>
                                            </tr>
                                            <tr>
                                                <td>設計</td>
                                                <td>3〜6×</td>
                                            </tr>
                                            <tr>
                                                <td>実装</td>
                                                <td>10×</td>
                                            </tr>
                                            <tr>
                                                <td>テスト</td>
                                                <td>15〜40×</td>
                                            </tr>
                                            <tr>
                                                <td>本番リリース後</td>
                                                <td>40〜1000×</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <span className="principle-tag">→ Shift-Left アプローチ (Ch.2) に直結</span>
                            </div>
                        </div>
                        <div className="principle-card">
                            <div className="principle-num p4">4</div>
                            <div>
                                <div className="principle-name">欠陥はクラスタリングする</div>
                                <div className="principle-name-en">Defects cluster together</div>
                                <p className="principle-desc">
                                    少数のモジュールやコンポーネントに欠陥が集中する傾向がある（パレートの法則: 80% の欠陥は 20% のモジュールに存在）。予測された欠陥クラスターと実際のクラスターは、リスクベーステストの重要な入力となる。<br />
                                    <strong>実務的意味:</strong> 過去に欠陥が多く見つかった箇所を重点的にテストする。
                                </p>
                                <span className="principle-tag">→ リスクベーステスト (Ch.5) に直結</span>
                            </div>
                        </div>
                        <div className="principle-card">
                            <div className="principle-num p5">5</div>
                            <div>
                                <div className="principle-name">
                                    テストは劣化する（農薬のパラドックス）
                                </div>
                                <div className="principle-name-en">
                                    Tests wear out (Pesticide Paradox)
                                </div>
                                <p className="principle-desc">
                                    同じテストを繰り返すと、新たな欠陥を発見する能力が低下する（Beizer 1990）。農薬を同じ方法で使い続けると害虫が耐性を持つのと同じ構造。<br />
                                    <strong>対策:</strong> テストケースを定期的に見直し、新しいテストを追加する。<br />
                                    <strong>例外:</strong> 自動化された回帰テストは「既知の動作確認」が目的なので、繰り返しても有効。
                                </p>
                                <span className="principle-tag">参照: Beizer 1990</span>
                            </div>
                        </div>
                        <div className="principle-card">
                            <div className="principle-num p6">6</div>
                            <div>
                                <div className="principle-name">テストはコンテキスト依存</div>
                                <div className="principle-name-en">Testing is context dependent</div>
                                <p className="principle-desc">
                                    普遍的に通用するテストアプローチは存在しない（Kaner 2011）。
                                </p>
                                <div className="table-wrap" style={{ margin: '10px 0' }}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>コンテキスト例</th>
                                                <th>テストの特徴</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>医療機器（安全クリティカル）</td>
                                                <td>Respective documentation・高い独立性・規制準拠</td>
                                            </tr>
                                            <tr>
                                                <td>スタートアップのWebアプリ</td>
                                                <td>探索的テスト・CI/CD統合・スピード優先</td>
                                            </tr>
                                            <tr>
                                                <td>金融システム</td>
                                                <td>
                                                    セキュリティ・パフォーマンス・コンプライアンス重視
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>組み込みシステム</td>
                                                <td>リアルタイム制約・ハードウェア連携テスト</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <span className="principle-tag">参照: Kaner 2011</span>
                            </div>
                        </div>
                        <div className="principle-card">
                            <div className="principle-num p7">7</div>
                            <div>
                                <div className="principle-name">欠陥不在の誤謬</div>
                                <div className="principle-name-en">Absence-of-defects fallacy</div>
                                <p className="principle-desc">
                                    テストに全合格しても、ユーザーのニーズを満たすシステムが出来上がるとは限らない。<br />
                                    <strong>具体例:</strong> バグのない給与計算システムが、実際のビジネスルールと合っていない。<br />
                                    これは検証 (Verification) だけでなく、妥当性確認 (Validation) も必要であることを示す。
                                </p>
                                <span className="principle-tag">→ 原則1 との組み合わせで頻出</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 1.4 */}
                <section className="section" id="s14">
                    <div className="section-header">
                        <div className="section-number">Section 1.4</div>
                        <h2 className="section-title">テスト活動・テストウェア・テストの役割</h2>
                        <div className="section-title-en">Test Activities, Testware and Test Roles</div>
                    </div>

                    <div className="subsection" id="s14-activities">
                        <h3 className="subsection-title">7つのテスト活動とタスク — FL-1.4.1</h3>
                        <p>
                            v4.0 のテストプロセスは7つの主要活動で構成されます。順次実行される場合もあれば、反復・並行実行される場合もあります。
                        </p>
                        <div className="diagram-wrap">
                            <Mermaid chart={`flowchart LR
TP["テスト計画<br/>Test Planning"]
TM["モニタリング<br/>と制御<br/>Monitoring<br/>& Control"]
TA["テスト分析<br/>Test Analysis"]
TD["テスト設計<br/>Test Design"]
TI["テスト実装<br/>Test Implementation"]
TE["テスト実行<br/>Test Execution"]
TC["テスト完了<br/>Test Completion"]
TP --> TA
TM -.-> TP
TM -.-> TA
TM -.-> TD
TM -.-> TI
TM -.-> TE
TM -.-> TC
TA --> TD
TD --> TI
TI --> TE
TE --> TC
style TM fill:#2e1065,stroke:#8b5cf6,color:#e9d5ff
style TP fill:#134e4a,stroke:#14b8a6,color:#ccfbf1
style TA fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style TD fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style TI fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style TE fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style TC fill:#3b2800,stroke:#f59e0b,color:#fef3c7`} />
                            <div className="diagram-label">
                                図 1.4-1 テストプロセスの7活動（点線 = モニタリングと制御が全活動を横断）
                            </div>
                        </div>
                        <div className="activity-flow">
                            <div className="activity-card">
                                <div className="activity-num">
                                    <span className="activity-step">step</span>
                                    <span className="activity-n">1</span>
                                </div>
                                <div className="activity-body">
                                    <div className="activity-name">テスト計画 (Test Planning)</div>
                                    <div className="activity-desc">
                                        テストの目的・アプローチ・リソース・スケジュールを定義する。リスク分析を行い、テスト範囲を決定する。
                                    </div>
                                    <div className="activity-output">
                                        主な成果物: テスト計画書、リスク登録簿
                                    </div>
                                </div>
                            </div>
                            <div className="activity-card">
                                <div className="activity-num">
                                    <span className="activity-step">cross</span>
                                    <span className="activity-n">↕</span>
                                </div>
                                <div className="activity-body">
                                    <div className="activity-name">
                                        テストのモニタリングと制御 (Test Monitoring &amp; Control)
                                    </div>
                                    <div className="activity-desc">
                                        計画との乖離を継続的に追跡（モニタリング）し、是正措置を取る（制御）。全活動を横断して実施される。
                                    </div>
                                    <div className="activity-output">
                                        主な成果物: テスト進捗レポート、是正アクション
                                    </div>
                                </div>
                            </div>
                            <div className="activity-card">
                                <div className="activity-num">
                                    <span className="activity-step">step</span>
                                    <span className="activity-n">2</span>
                                </div>
                                <div className="activity-body">
                                    <div className="activity-name">テスト分析 (Test Analysis)</div>
                                    <div className="activity-desc">
                                        テストベース（要件・設計書等）を分析し、テスト条件（何をテストするか）を特定する。テストベース内の欠陥もここで発見できる。
                                    </div>
                                    <div className="activity-output">
                                        主な成果物: テスト条件、欠陥レポート（テストベース内の不備）
                                    </div>
                                </div>
                            </div>
                            <div className="activity-card">
                                <div className="activity-num">
                                    <span className="activity-step">step</span>
                                    <span className="activity-n">3</span>
                                </div>
                                <div className="activity-body">
                                    <div className="activity-name">テスト設計 (Test Design)</div>
                                    <div className="activity-desc">
                                        テスト条件をテストケースとテストデータに変換する。テスト技法（ブラックボックス・ホワイトボックス等）を適用する。
                                    </div>
                                    <div className="activity-output">
                                        主な成果物: テストケース、テストデータ、テストチャーター
                                    </div>
                                </div>
                            </div>
                            <div className="activity-card">
                                <div className="activity-num">
                                    <span className="activity-step">step</span>
                                    <span className="activity-n">4</span>
                                </div>
                                <div className="activity-body">
                                    <div className="activity-name">
                                        テスト実装 (Test Implementation)
                                    </div>
                                    <div className="activity-desc">
                                        テストケースをテスト手順・テストスクリプト・テストスイートに整理する。テスト環境の準備も含む。
                                    </div>
                                    <div className="activity-output">
                                        主な成果物: テスト手順（スクリプト）、テストスイート、テスト実行スケジュール
                                    </div>
                                </div>
                            </div>
                            <div className="activity-card">
                                <div className="activity-num">
                                    <span className="activity-step">step</span>
                                    <span className="activity-n">5</span>
                                </div>
                                <div className="activity-body">
                                    <div className="activity-name">テスト実行 (Test Execution)</div>
                                    <div className="activity-desc">
                                        テスト手順を実際に実行し、期待結果と実際の結果を記録する。欠陥が見つかれば報告する。
                                    </div>
                                    <div className="activity-output">
                                        主な成果物: テストログ、欠陥レポート（実行時の欠陥）
                                    </div>
                                </div>
                            </div>
                            <div className="activity-card">
                                <div className="activity-num">
                                    <span className="activity-step">step</span>
                                    <span className="activity-n">6</span>
                                </div>
                                <div className="activity-body">
                                    <div className="activity-name">テスト完了 (Test Completion)</div>
                                    <div className="activity-desc">
                                        テスト活動を終了し、テストウェアを引き渡す。教訓・改善提案を文書化する。アーカイブ・廃棄の決定を行う。
                                    </div>
                                    <div className="activity-output">
                                        主な成果物: テスト完了レポート、改善提案、教訓
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="subsubsection-title" id="s14-context">
                            コンテキストがテストプロセスに与える影響 — FL-1.4.2
                        </div>
                        <p>テストプロセスはプロジェクトのコンテキストによって大きく異なります。</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>影響要因</th>
                                        <th>具体例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>SDLC モデル</td>
                                        <td>
                                            ウォーターフォール（順次）/ アジャイル（反復）/ DevOps（継続的）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>テスト対象の種類</td>
                                        <td>Webアプリ・組み込みシステム・モバイルアプリ</td>
                                    </tr>
                                    <tr>
                                        <td>リスクレベル</td>
                                        <td>安全クリティカル（航空・医療）vs 一般業務システム</td>
                                    </tr>
                                    <tr>
                                        <td>ビジネスコンテキスト</td>
                                        <td>
                                            スピード重視（スタートアップ）vs 規制準拠重視（金融・医療）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>チーム規模・スキル</td>
                                        <td>専任テスターあり vs 開発者がテストも兼任</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="subsection" id="s14-testware">
                        <h3 className="subsection-title">テストウェア (Testware) — FL-1.4.3</h3>
                        <p>
                            テストウェアとは、<strong>テスト活動の成果として生成・維持されるあらゆる作業成果物</strong>の総称です。構成管理の対象となります。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>テスト活動</th>
                                        <th>生成されるテストウェア</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>テスト計画</td>
                                        <td>テスト計画書、リスク登録簿</td>
                                    </tr>
                                    <tr>
                                        <td>テスト分析</td>
                                        <td>テスト条件、欠陥レポート（テストベースの不備）</td>
                                    </tr>
                                    <tr>
                                        <td>テスト設計</td>
                                        <td>テストケース、テストデータ、テストチャーター</td>
                                    </tr>
                                    <tr>
                                        <td>テスト実装</td>
                                        <td>
                                            テスト手順（テストスクリプト）、テストスイート、テスト実行スケジュール
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>テスト実行</td>
                                        <td>テストログ、欠陥レポート（実行時の欠陥）</td>
                                    </tr>
                                    <tr>
                                        <td>テスト完了</td>
                                        <td>テスト完了レポート、改善アクションアイテム、教訓</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout callout-info">
                            <div className="callout-title">テストウェアの管理</div>
                            テストウェアは<strong>構成管理 (Configuration Management)</strong> の対象であり、バージョン管理と変更追跡が必要です。Chapter 5（§5.4）で詳述。
                        </div>
                    </div>

                    <div className="subsection" id="s14-trace">
                        <h3 className="subsection-title">
                            テストベースとテストウェア間のトレーサビリティ — FL-1.4.4
                        </h3>
                        <p>
                            <strong>テストベース (Test Basis)</strong> とは、テスト分析を行う際に参照するすべての情報（要件、ユーザーストーリー、設計書、コードなど）の総称です。
                        </p>
                        <div className="diagram-wrap">
                            <Mermaid chart={`flowchart TD
TB["テストベース<br/>Test Basis<br/>要件・設計書・ユーザーストーリー・コード"]
TC2["テスト条件<br/>Test Conditions"]
TCS["テストケース<br/>Test Cases"]
TR["テスト結果<br/>Test Results"]
TB -->|"テスト分析"| TC2
TC2 -->|"テスト設計"| TCS
TCS -->|"テスト実行"| TR
TR -.->|"トレーサビリティ"| TB
style TB fill:#2e1065,stroke:#8b5cf6,color:#e9d5ff
style TC2 fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style TCS fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style TR fill:#134e4a,stroke:#14b8a6,color:#ccfbf1`} />
                            <div className="diagram-label">
                                図 1.4-2 テストベースからテスト結果へのトレーサビリティチェーン
                            </div>
                        </div>
                        <p>トレーサビリティを維持する価値:</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>価値</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>影響分析</strong></td>
                                        <td>
                                            要件変更時に影響を受けるテストケースを即座に特定できる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>カバレッジ評価</strong></td>
                                        <td>どの要件が十分にテストされているかを把握できる</td>
                                    </tr>
                                    <tr>
                                        <td><strong>進捗報告</strong></td>
                                        <td>
                                            テスト結果を要件にひも付けてステークホルダーに報告できる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>監査対応</strong></td>
                                        <td>テストの根拠を規制当局や顧客に証明できる</td>
                                    </tr>
                                    <tr>
                                        <td><strong>リスク管理</strong></td>
                                        <td>リスクとテスト対応状況のひも付けが明確になる</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="subsection" id="s14-roles">
                        <h3 className="subsection-title">テストにおけるロール — FL-1.4.5</h3>
                        <p>
                            v4.0 ではテストの主要なロールを2つに整理しています。プロジェクト形態によって責務の分担が変わります。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ロール</th>
                                        <th>主な責務</th>
                                        <th>代表的な活動</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>テスト管理ロール</strong><br />
                                            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                                Test Management Role
                                            </span>
                                        </td>
                                        <td>テスト全体の計画・統制・完了</td>
                                        <td>
                                            テスト計画・テストのモニタリングと制御・テスト完了・リソース管理・ステークホルダーへの報告
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>テストロール</strong><br />
                                            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                                Testing Role
                                            </span>
                                        </td>
                                        <td>具体的なテスト活動の実施</td>
                                        <td>
                                            テスト分析・テスト設計・テスト実装・テスト実行・欠陥報告
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="diagram-wrap">
                            <Mermaid chart={`flowchart LR
subgraph "従来型プロジェクト (Waterfall)"
TM2["テストマネージャー<br/>（専任）"]
TR2["テスター<br/>（専任または外部）"]
end
subgraph "アジャイルプロジェクト"
TM3["チームメンバー全員<br/>でテスト管理を分担"]
TR3["開発者・テスター・PO<br/>が協力してテストを実施"]
end
style TM2 fill:#2e1065,stroke:#8b5cf6,color:#e9d5ff
style TR2 fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style TM3 fill:#134e4a,stroke:#14b8a6,color:#ccfbf1
style TR3 fill:#3b2800,stroke:#f59e0b,color:#fef3c7`} />
                            <div className="diagram-label">
                                図 1.4-3 プロジェクト形態によるロールの違い
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 1.5 */}
                <section className="section" id="s15">
                    <div className="section-header">
                        <div className="section-number">Section 1.5</div>
                        <h2 className="section-title">テストに必要な本質的スキルと良い実践</h2>
                        <div className="section-title-en">
                            Essential Skills and Good Practices in Testing
                        </div>
                    </div>

                    <div className="subsection" id="s15-skills">
                        <h3 className="subsection-title">汎用スキル — FL-1.5.1</h3>
                        <p>テスターには技術スキルだけでなく、幅広い汎用スキルが求められます。</p>
                        <div className="skill-grid">
                            <div className="skill-badge">
                                <span className="skill-icon">🔬</span>
                                <div className="skill-name">分析的思考</div>
                                <div className="skill-desc">
                                    複雑な状況を分解し、欠陥の原因を推論する能力
                                </div>
                            </div>
                            <div className="skill-badge">
                                <span className="skill-icon">🎯</span>
                                <div className="skill-name">批判的思考</div>
                                <div className="skill-desc">
                                    前提を疑い、要件や設計の問題点を発見する能力
                                </div>
                            </div>
                            <div className="skill-badge">
                                <span className="skill-icon">💬</span>
                                <div className="skill-name">コミュニケーション</div>
                                <div className="skill-desc">
                                    欠陥報告の明確な記述・ステークホルダーとの対話
                                </div>
                            </div>
                            <div className="skill-badge">
                                <span className="skill-icon">🔍</span>
                                <div className="skill-name">好奇心と注意深さ</div>
                                <div className="skill-desc">
                                    「この部分はどう動くのか」を常に問いかける姿勢
                                </div>
                            </div>
                            <div className="skill-badge">
                                <span className="skill-icon">🤝</span>
                                <div className="skill-name">協調性</div>
                                <div className="skill-desc">
                                    開発者・PO・ユーザーとの建設的な関係構築
                                </div>
                            </div>
                            <div className="skill-badge">
                                <span className="skill-icon">📐</span>
                                <div className="skill-name">系統性</div>
                                <div className="skill-desc">
                                    網羅的で体系的なアプローチによるテスト実施
                                </div>
                            </div>
                            <div className="skill-badge">
                                <span className="skill-icon">🛠</span>
                                <div className="skill-name">テスト固有知識</div>
                                <div className="skill-desc">
                                    テスト技法・プロセス・SDLC・ツール・欠陥分類
                                </div>
                            </div>
                            <div className="skill-badge">
                                <span className="skill-icon">🏢</span>
                                <div className="skill-name">ドメイン知識</div>
                                <div className="skill-desc">
                                    テスト対象のビジネス・技術領域の深い理解
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="subsection" id="s15-whole">
                        <h3 className="subsection-title">ホールチームアプローチ — FL-1.5.2</h3>
                        <p>
                            アジャイル開発から来た概念で、CTFL v4.0 では特に重要視されています。品質保証を特定のロールだけの仕事にしない考え方です。
                        </p>
                        <div className="diagram-wrap">
                            <Mermaid chart={`flowchart TD
subgraph "ホールチームアプローチ (Whole Team Approach)"
DE["開発者<br/>Developer"]
TE2["テスター<br/>Tester"]
PO["プロダクトオーナー<br/>Product Owner"]
BA["ビジネスアナリスト"]
OP["運用<br/>Ops"]
end
Q["品質は全員の責務<br/>Quality = Everyone's Responsibility"]
DE --> Q
TE2 --> Q
PO --> Q
BA --> Q
OP --> Q
style Q fill:#134e4a,stroke:#14b8a6,color:#ccfbf1
style DE fill:#2e1065,stroke:#8b5cf6,color:#e9d5ff
style TE2 fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style PO fill:#3b2800,stroke:#f59e0b,color:#fef3c7
style BA fill:#3b1a1a,stroke:#f43f5e,color:#fecdd3
style OP fill:#14532d,stroke:#22c55e,color:#bbf7d0`} />
                            <div className="diagram-label">図 1.5-1 ホールチームアプローチの全体像</div>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>利点</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>品質の共同責任</strong></td>
                                        <td>品質保証が特定の部門・ロールだけの仕事でなくなる</td>
                                    </tr>
                                    <tr>
                                        <td><strong>チームの効率向上</strong></td>
                                        <td>
                                            必要なスキルを持つメンバーが状況に応じてテスト活動に参加できる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>早期フィードバック</strong></td>
                                        <td>
                                            ビジネス代表者がアクセプタンス基準定義に早期から参加する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>コラボレーション促進</strong></td>
                                        <td>テスターと開発者が共同でテスト自動化を構築する</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout callout-warning">
                            <div className="callout-title">重要な例外</div>
                            ホールチームアプローチが<strong>常に適切とは限りません</strong>。安全クリティカルな領域など、高い独立性が必要な場合は例外です。FL-1.5.2 は K1（記憶）レベルですが、「利点を述べよ」と「例外を述べよ」の両方が問われます。
                        </div>
                    </div>

                    <div className="subsection" id="s15-independence">
                        <h3 className="subsection-title">テストの独立性 — FL-1.5.3</h3>
                        <p>
                            独立性とは、テスターが<strong>作業成果物の作者から切り離されている度合い</strong>です。独立性が高いほど、認知バイアスの影響が少なくなります。
                        </p>
                        <div className="diagram-wrap">
                            <Mermaid chart={`flowchart LR
L0["独立性なし<br/>作者自身がテスト"]
L1["一部独立<br/>同一チームのピアがテスト"]
L2["高い独立性<br/>組織内の別チームがテスト"]
L3["非常に高い独立性<br/>組織外部のテスターがテスト"]
L0 --> L1
L1 --> L2
L2 --> L3
style L0 fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe
style L1 fill:#134e4a,stroke:#14b8a6,color:#ccfbf1
style L2 fill:#2e1065,stroke:#8b5cf6,color:#e9d5ff
style L3 fill:#3b2800,stroke:#f59e0b,color:#fef3c7`} />
                            <div className="diagram-label">図 1.5-2 独立性の4段階</div>
                        </div>
                        <div className="independence-levels">
                            <div className="indep-level">
                                <div className="indep-bar" style={{ background: 'var(--color-accent-blue, #63b3ed)' }}></div>
                                <div className="indep-title">独立性なし</div>
                                <div className="indep-actor">作者自身がテスト</div>
                                <div className="indep-merit">+ コードへの深い理解</div>
                                <div className="indep-merit">+ スピードが速い</div>
                                <div className="indep-demerit">- 認知バイアスが最も強い</div>
                                <div className="indep-demerit">- 見落としが多い</div>
                            </div>
                            <div className="indep-level">
                                <div className="indep-bar" style={{ background: 'var(--color-accent-cyan, #4fd1c5)' }}></div>
                                <div className="indep-title">一部独立</div>
                                <div className="indep-actor">同一チームのピア</div>
                                <div className="indep-merit">+ バランスの取れた知識</div>
                                <div className="indep-merit">+ コンテキスト共有済み</div>
                                <div className="indep-demerit">- 部分的なバイアスが残る</div>
                                <div className="indep-demerit">- チーム内の忖度リスク</div>
                            </div>
                            <div className="indep-level">
                                <div className="indep-bar" style={{ background: 'var(--color-accent-purple, #b794f4)' }}></div>
                                <div className="indep-title">高い独立性</div>
                                <div className="indep-actor">組織内の別チーム</div>
                                <div className="indep-merit">+ 外部視点・客観的評価</div>
                                <div className="indep-merit">+ 認知バイアス小</div>
                                <div className="indep-demerit">- コンテキスト習得に時間</div>
                                <div className="indep-demerit">- チーム間サイロ化リスク</div>
                            </div>
                            <div className="indep-level">
                                <div className="indep-bar" style={{ background: 'var(--color-accent-orange, #f6ad55)' }}></div>
                                <div className="indep-title">非常に高い独立性</div>
                                <div className="indep-actor">組織外部のテスター</div>
                                <div className="indep-merit">+ 完全な客観性</div>
                                <div className="indep-merit">+ 専門知識</div>
                                <div className="indep-demerit">- コスト高</div>
                                <div className="indep-demerit">- コンテキスト習得困難</div>
                            </div>
                        </div>
                        <div className="callout callout-success">
                            <div className="callout-title">実務的結論</div>
                            多くのプロジェクトでは<strong>複数の独立性レベルを組み合わせる</strong>のが最善です。例: 開発者が単体テストを実施（独立性なし）し、独立した QA チームがシステムテストを実施（高い独立性）する。
                        </div>
                    </div>
                </section>

                {/* GLOSSARY */}
                <section className="section" id="glossary">
                    <div className="section-header">
                        <div className="section-number">Appendix A</div>
                        <h2 className="section-title">用語集</h2>
                        <div className="section-title-en">Glossary — Chapter 1 Keywords</div>
                    </div>
                    <p>
                        CTFL v4.0.1 Chapter 1 のキーワードは<strong>すべて K1 レベル（記憶）</strong>の試験対象です。以下の定義を確実に記憶してください。
                    </p>
                    <div className="glossary-grid">
                        <div className="glossary-item">
                            <div className="glossary-en">Coverage</div>
                            <div className="glossary-ja">カバレッジ</div>
                            <div className="glossary-def">テスト対象がどの程度テストされたかの割合</div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Debugging</div>
                            <div className="glossary-ja">デバッグ</div>
                            <div className="glossary-def">欠陥の原因を特定・分析・除去するプロセス</div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Defect / Bug / Fault</div>
                            <div className="glossary-ja">欠陥</div>
                            <div className="glossary-def">
                                コンポーネントや成果物の不備。v4.0 では defect が優先語
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Error / Mistake</div>
                            <div className="glossary-ja">エラー</div>
                            <div className="glossary-def">誤った結果を生み出す人間の行為</div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Failure</div>
                            <div className="glossary-ja">故障</div>
                            <div className="glossary-def">
                                テスト対象が期待した範囲で実行されないこと（観察可能な症状）
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Quality</div>
                            <div className="glossary-ja">品質</div>
                            <div className="glossary-def">
                                製品・サービスが明示的・暗黙的なニーズを満たす度合い
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Quality Assurance (QA)</div>
                            <div className="glossary-ja">品質保証</div>
                            <div className="glossary-def">
                                品質要件が満たされるという信頼を提供するプロセス指向の活動
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Root Cause</div>
                            <div className="glossary-ja">根本原因</div>
                            <div className="glossary-def">
                                問題発生の根本的な理由。根本原因分析で特定する
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Analysis</div>
                            <div className="glossary-ja">テスト分析</div>
                            <div className="glossary-def">
                                テストベースを評価し、テスト条件を特定する活動
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Basis</div>
                            <div className="glossary-ja">テストベース</div>
                            <div className="glossary-def">
                                テストベースの根拠となる情報（要件・設計書・ユーザーストーリー等）
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Case</div>
                            <div className="glossary-ja">テストケース</div>
                            <div className="glossary-def">
                                事前条件・入力値・期待結果・事後条件のセット
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Completion</div>
                            <div className="glossary-ja">テスト完了</div>
                            <div className="glossary-def">
                                テスト活動を終了しテスト成果物を引き渡す活動
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Condition</div>
                            <div className="glossary-ja">テスト条件</div>
                            <div className="glossary-def">
                                テストの根拠となる、テスト対象の測定可能な側面
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Control</div>
                            <div className="glossary-ja">テスト制御</div>
                            <div className="glossary-def">テスト計画との乖離を是正するための行動</div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Data</div>
                            <div className="glossary-ja">テストデータ</div>
                            <div className="glossary-def">テスト実行時に使用する入力データ</div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Design</div>
                            <div className="glossary-ja">テスト設計</div>
                            <div className="glossary-def">
                                テスト条件をテストケース・手順に変換する活動
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Execution</div>
                            <div className="glossary-ja">テスト実行</div>
                            <div className="glossary-def">
                                テストケースを実際に動作させ結果を記録する活動
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Implementation</div>
                            <div className="glossary-ja">テスト実装</div>
                            <div className="glossary-def">
                                テストケースをテスト手順にまとめ実行可能な状態にする活動
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Monitoring</div>
                            <div className="glossary-ja">テストのモニタリング</div>
                            <div className="glossary-def">テスト活動の進捗を継続的に確認する活動</div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Object</div>
                            <div className="glossary-ja">テスト対象</div>
                            <div className="glossary-def">
                                テストの対象となるコンポーネント・システム・成果物
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Objective</div>
                            <div className="glossary-ja">テスト目標</div>
                            <div className="glossary-def">テスト活動の目的・目標</div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Planning</div>
                            <div className="glossary-ja">テスト計画</div>
                            <div className="glossary-def">
                                テストの目的・アプローチ・リソース等を定義する活動
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Procedure</div>
                            <div className="glossary-ja">テスト手順</div>
                            <div className="glossary-def">
                                テストケースを実行順に並べた手順書（テストスクリプト）
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Process</div>
                            <div className="glossary-ja">テストプロセス</div>
                            <div className="glossary-def">テスト計画〜テスト完了までの一連の活動</div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Test Result</div>
                            <div className="glossary-ja">テスト結果</div>
                            <div className="glossary-def">テストケース実行後の実際の出力</div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Testing</div>
                            <div className="glossary-ja">テスト</div>
                            <div className="glossary-def">欠陥発見と品質評価のための一連の活動</div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Testware</div>
                            <div className="glossary-ja">テストウェア</div>
                            <div className="glossary-def">
                                テスト活動の成果として生成・維持される作業成果物
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Traceability</div>
                            <div className="glossary-ja">トレーサビリティ</div>
                            <div className="glossary-def">
                                テストベースと他の成果物の関係を追跡できる性質
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Validation</div>
                            <div className="glossary-ja">妥当性確認</div>
                            <div className="glossary-def">
                                システムがユーザーニーズを満たすかを確認すること
                            </div>
                        </div>
                        <div className="glossary-item">
                            <div className="glossary-en">Verification</div>
                            <div className="glossary-ja">検証</div>
                            <div className="glossary-def">
                                システムが仕様要件を満たすかを確認すること
                            </div>
                        </div>
                    </div>
                </section>

                {/* CHECKLIST */}
                <section className="section" id="checklist">
                    <div className="section-header">
                        <div className="section-number">Appendix B</div>
                        <h2 className="section-title">試験対策チェックリスト</h2>
                        <div className="section-title-en">Exam Preparation Checklist</div>
                    </div>
                    <p>
                        以下の項目をすべて説明できるかを確認してください。試験本番前に全項目にチェックを入れることを目標にしてください。
                    </p>

                    <div className="subsubsection-title">1.1 テストとは何か</div>
                    <ul className="checklist">
                        <li>テスト目標を9つすべて列挙・説明できる</li>
                        <li>動的テストと静的テストの違いを説明できる</li>
                        <li>
                            検証 (Verification) と妥当性確認 (Validation) の違いを、&quot;build it right&quot; / &quot;right thing&quot; で説明できる
                        </li>
                        <li>テストとデバッグのプロセスの違いをフロー形式で説明できる</li>
                        <li>確認テストと回帰テストの役割の違いを区別できる</li>
                    </ul>

                    <div className="subsubsection-title">1.2 テストはなぜ必要か</div>
                    <ul className="checklist">
                        <li>エラー・欠陥・故障・根本原因の連鎖を具体例を使って説明できる</li>
                        <li>
                            品質保証 (QA) とテストの違いをプロセス指向・製品指向の観点で説明できる
                        </li>
                        <li>テストが成功に貢献する方法を4つ以上挙げられる</li>
                        <li>根本原因分析がなぜ欠陥予防につながるかを説明できる</li>
                    </ul>

                    <div className="subsubsection-title">1.3 テストの7原則</div>
                    <ul className="checklist">
                        <li>7つのテスト原則を名称（英語名含む）と説明をセットで言える</li>
                        <li>
                            各原則を具体的なシナリオに適用できる（例: 農薬パラドックス → 回帰テストの見直し）
                        </li>
                        <li>「欠陥不在の誤謬」が妥当性確認の重要性とどう繋がるかを説明できる</li>
                        <li>
                            「早期テスト（原則3）」が Shift-Left アプローチとどう繋がるかを説明できる
                        </li>
                    </ul>

                    <div className="subsubsection-title">
                        1.4 テスト活動・テストウェア・テストのロール
                    </div>
                    <ul className="checklist">
                        <li>7つのテスト活動を順番通りに挙げ、各活動の主な成果物を言える</li>
                        <li>テストベースとテストウェアを区別できる</li>
                        <li>トレーサビリティ維持の5つの価値を説明できる</li>
                        <li>テスト管理ロールとテストロールの責務を区別できる</li>
                        <li>コンテキストがテストプロセスに与える影響の例を3つ以上挙げられる</li>
                    </ul>

                    <div className="subsubsection-title">1.5 本質的スキルと良い実践</div>
                    <ul className="checklist">
                        <li>ホールチームアプローチの利点を4つ以上説明できる</li>
                        <li>
                            ホールチームアプローチが適切でない場合（安全クリティカル等）を説明できる
                        </li>
                        <li>4段階の独立性レベルを各メリット・デメリットとともに説明できる</li>
                        <li>「独立性は高いほどよい」が誤りである理由を説明できる</li>
                    </ul>
                </section>

                {/* REFERENCES */}
                <section className="section" id="references">
                    <div className="section-header">
                        <div className="section-number">Appendix C</div>
                        <h2 className="section-title">参照リソース</h2>
                        <div className="section-title-en">References &amp; Sources</div>
                    </div>
                    <p>本ガイドの作成に使用した一次・二次情報源のすべてを以下に示します。</p>
                    <div className="ref-list">
                        <div className="ref-item">
                            <div className="ref-icon">📄</div>
                            <div>
                                <div className="ref-title">
                                    ISTQB CTFL Syllabus v4.0.1（公式シラバス PDF）
                                </div>
                                <a
                                    className="ref-url"
                                    href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                                </a>
                                <div className="ref-note">
                                    シラバスの原文。用語・LO の定義はすべてこの文書に準拠（2024年9月15日版）。
                                </div>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-icon">🌐</div>
                            <div>
                                <div className="ref-title">
                                    ISTQB CTFL v4.0 公式概要ページ
                                </div>
                                <a
                                    className="ref-url"
                                    href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/
                                </a>
                                <div className="ref-note">
                                    シラバスの改訂アナウンス、学習計画、および公式認定概要。
                                </div>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-icon">📢</div>
                            <div>
                                <div className="ref-title">
                                    ISTQB CTFL v4.0 リリースアナウンス
                                </div>
                                <a
                                    className="ref-url"
                                    href="https://istqb.org/istqb-releases-certified-tester-foundation-level-v4-0-ctfl/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    https://istqb.org/istqb-releases-certified-tester-foundation-level-v4-0-ctfl/
                                </a>
                                <div className="ref-note">
                                    v4.0 シラバスの公式リリース発表と主な改定方針の説明。
                                </div>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-icon">🔍</div>
                            <div>
                                <div className="ref-title">
                                    ISTQB Glossary（公式用語集）
                                </div>
                                <a
                                    className="ref-url"
                                    href="https://glossary.istqb.org/en_US/search?term="
                                    target="_blank"
                                    rel="noopener"
                                >
                                    https://glossary.istqb.org/en_US/search?term=
                                </a>
                                <div className="ref-note">
                                    全 ISTQB 用語の公式定義検索ツール。キーワードのゆらぎ検証に使用。
                                </div>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-icon">🎓</div>
                            <div>
                                <div className="ref-title">
                                    CTFL v4.0 Syllabus Chapter Deep Dive (istqb.guru)
                                </div>
                                <a
                                    className="ref-url"
                                    href="https://www.istqb.guru/ctfl-v4-syllabus-chapter-by-chapter-deep-dive/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    https://www.istqb.guru/ctfl-v4-syllabus-chapter-by-chapter-deep-dive/
                                </a>
                                <div className="ref-note">
                                    各章の頻出キーワード、合格点に達するための解説（2026年）。
                                </div>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-icon">❓</div>
                            <div>
                                <div className="ref-title">
                                    Defect vs Failure vs Error vs Mistake in ISTQB
                                </div>
                                <a
                                    className="ref-url"
                                    href="https://www.istqb.guru/defect-vs-failure-vs-error-vs-mistake-istqb/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    https://www.istqb.guru/defect-vs-failure-vs-error-vs-mistake-istqb/
                                </a>
                                <div className="ref-note">
                                    エラー・欠陥・故障の定義差分と実例による解説記事（2026年）。
                                </div>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-icon">📋</div>
                            <div>
                                <div className="ref-title">
                                    ISTQB CTFL v4.0 Certification Guide 2026
                                </div>
                                <a
                                    className="ref-url"
                                    href="https://www.istqb.com/ctfl-v4-0/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    https://www.istqb.com/ctfl-v4-0/
                                </a>
                                <div className="ref-note">
                                    試験ガイド・章別学習時間・受験情報（2026年5月21日確認）。
                                </div>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-icon">📑</div>
                            <div>
                                <div className="ref-title">
                                    Overview of ISTQB CTFL v4.0 (testing101.net)
                                </div>
                                <a
                                    className="ref-url"
                                    href="https://www.testing101.net/post/overview-of-the-istqb-certified-tester-foundation-level-ctfl-v4-0-new"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    https://www.testing101.net/post/overview-of-the-istqb-certified-tester-foundation-level-ctfl-v4-0-new
                                </a>
                                <div className="ref-note">
                                    v3.1 から v4.0 への変更点・章別問題数の詳細解説（2025年）。
                                </div>
                            </div>
                        </div>
                        <div className="ref-item">
                            <div className="ref-icon">📚</div>
                            <div>
                                <div className="ref-title">
                                    ISTQB Glossary 2026: 200+ Testing Terms Explained
                                </div>
                                <a
                                    className="ref-url"
                                    href="https://www.istqb.guru/istqb-glossary/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    https://www.istqb.guru/istqb-glossary/
                                </a>
                                <div className="ref-note">
                                    用語の波別学習アドバイスと効率的な暗記法（2026年）。
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="callout callout-info" style={{ marginTop: '24px' }}>
                        <div className="callout-title">バージョン情報</div>
                        本ガイドは ISTQB CTFL Syllabus <strong>v4.0.1</strong>（2024-09-15）に準拠しています。v4.0.1 は v4.0 の著作権・ロゴ更新のみで、試験出題内容に変更はありません。v3.1 シラバスは英語試験について <strong>2024年5月9日</strong> をもって終了しています。
                    </div>
                </section>
            </main>
        </div>
    );
}
