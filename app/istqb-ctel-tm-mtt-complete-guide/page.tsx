import '../istqb-ctel-tm-mtt-complete-guide.css';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';

export default function IstqbCtelTmMttCompleteGuide() {
    return (
        <div className="istqb-ctel-tm-mtt-page">
            <NavBar />
            
        {/* ═══ NAVIGATION ═══ */}
        

        {/* ═══ HERO ═══ */}
        <section className="hero" id="top">
            <div className="hero-glow"></div>
            <div className="hero-badge">ISTQB® EXPERT LEVEL</div>
            <h1>CTEL-TM-MTT<br /><span>Managing the Test Team</span></h1>
            <p className="hero-sub">
                Expert Level Test Management Part 3 —
                テストチームの採用・育成・リードから倫理まで完全解説。初学者から実践者まで対応。
            </p>
            <div className="hero-meta">
                <div className="meta-card">
                    <span className="label">試験形式</span>
                    <span className="value">選択16問 + 記述2問/3問</span>
                </div>
                <div className="meta-card">
                    <span className="label">合格基準</span>
                    <span className="value">65%以上</span>
                </div>
                <div className="meta-card">
                    <span className="label">試験時間</span>
                    <span className="value">135分（+25%対応）</span>
                </div>
                <div className="meta-card">
                    <span className="label">有効期間</span>
                    <span className="value">7年（更新制）</span>
                </div>
                <div className="meta-card">
                    <span className="label">前提資格</span>
                    <span className="value">CTFL + CTAL-TM</span>
                </div>
                <div className="meta-card">
                    <span className="label">実務経験</span>
                    <span className="value">5年以上 + 専門2年</span>
                </div>
            </div>
        </section>

        {/* ═══ TABLE OF CONTENTS ═══ */}
        <section className="section-wrap" id="toc">
            <div className="container">
                <h2
                    style={{fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--color-text-secondary)", letterSpacing: "0.05em"}}
                >
                    📚 目次
                </h2>
                <div className="toc-grid">
                    <a href="#ch0" className="toc-card">
                        <div className="toc-num">CHAPTER 0</div>
                        <div className="toc-title">概要・資格ロードマップ</div>
                        <div className="toc-sub">試験仕様・BO・認知レベル</div>
                    </a>
                    <a href="#ch1" className="toc-card">
                        <div className="toc-num">CHAPTER 1</div>
                        <div className="toc-title">テストチームのビルディング</div>
                        <div className="toc-sub">採用・JD・面接・オンボーディング</div>
                    </a>
                    <a href="#ch2" className="toc-card">
                        <div className="toc-num">CHAPTER 2</div>
                        <div className="toc-title">テストチームの開発</div>
                        <div className="toc-sub">IDP・SMART・Belbin・70:20:10</div>
                    </a>
                    <a href="#ch3" className="toc-card">
                        <div className="toc-num">CHAPTER 3</div>
                        <div className="toc-title">テストチームのリーディング</div>
                        <div className="toc-sub">信頼・モチベーション・分散チーム</div>
                    </a>
                    <a href="#ch4" className="toc-card">
                        <div className="toc-num">CHAPTER 4</div>
                        <div className="toc-title">組織横断マネジメント</div>
                        <div className="toc-sub">チーム配置モデル・権限</div>
                    </a>
                    <a href="#ch5" className="toc-card">
                        <div className="toc-num">CHAPTER 5</div>
                        <div className="toc-title">テストチームのアドボカシー</div>
                        <div className="toc-sub">価値の可視化・防衛可能なチーム</div>
                    </a>
                    <a href="#ch6" className="toc-card">
                        <div className="toc-num">CHAPTER 6</div>
                        <div className="toc-title">ステークホルダーコミュニケーション</div>
                        <div className="toc-sub">Power-Interest・品質文化</div>
                    </a>
                    <a href="#ch7" className="toc-card">
                        <div className="toc-num">CHAPTER 7</div>
                        <div className="toc-title">倫理的問題の対処</div>
                        <div className="toc-sub">ジレンマ・意思決定フレームワーク</div>
                    </a>
                    <a href="#exam" className="toc-card">
                        <div className="toc-num">試験対策</div>
                        <div className="toc-title">サンプル問題・配点分析</div>
                        <div className="toc-sub">記述式対策・チェックリスト</div>
                    </a>
                    <a href="#refs" className="toc-card">
                        <div className="toc-num">参考資料</div>
                        <div className="toc-title">公式リソース・参考文献</div>
                        <div className="toc-sub">全URLカテゴリ付き</div>
                    </a>
                </div>
            </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══ CHAPTER 0: OVERVIEW ═══ */}
        <section className="section-wrap" id="ch0">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">0</span>
                    <h2>CTAL-TM-MTT 概要・資格ロードマップ <span className="k-level">K3–K6</span></h2>
                </div>

                <h3 className="sub-title">認定資格の全体構造</h3>
                <p>
                    CTEL-TM（Expert Level Test
                    Management）は3つのパートで構成される最上位資格です。本ガイドが扱う
                    <strong>MTT（Managing the Test Team）</strong> はPart 3に位置します。
                </p>

                <div className="mermaid-wrap">
                    <Mermaid chart={`graph TD
CTFL["🎓 CTFL<br />Foundation Level"] --> CTAL
CTAL["📘 CTAL-TM<br />Advanced Level Test Manager"] --> STM
CTAL --> OTM
CTAL --> MTT
subgraph ExpertLevel["⭐ Expert Level - CTEL-TM"]
STM["Part 1: CTEL-TM-STM<br />Strategic Test Management"]
OTM["Part 2: CTEL-TM-OTM<br />Operational Test Management"]
MTT["Part 3: CTEL-TM-MTT<br />Managing the Test Team ★"]
end
STM --> FULL
OTM --> FULL
MTT --> FULL
FULL["🏆 CTEL-TM フル認定<br />(7年間有効)"]
style MTT fill:#003322,stroke:#00ff88,stroke-width:3px,color:#00ff88
style FULL fill:#002233,stroke:#00d4ff,color:#00d4ff
style ExpertLevel fill:#0a0e1a,stroke:#21262d`} />
                </div>

                <h3 className="sub-title">試験仕様</h3>
                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-val">16</div>
                        <div className="metric-label">選択式問題数</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">2/3</div>
                        <div className="metric-label">記述式（3問中2問選択）</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">65%</div>
                        <div className="metric-label">合格基準スコア</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">135分</div>
                        <div className="metric-label">試験時間（非英語+25%）</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">7年</div>
                        <div className="metric-label">認定有効期間</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">3–4週</div>
                        <div className="metric-label">記述採点期間</div>
                    </div>
                </div>

                <div className="callout warning">
                    <div className="callout-title">⚠️ 記述式採点について</div>
                    <p>
                        記述式問題は専門家が手作業で採点します。結果通知まで3〜4週間かかります。単純な知識の羅列ではなく、<strong>分析・評価・具体的な提案</strong>が求められます。
                    </p>
                </div>

                <h3 className="sub-title">認知レベル（K-Level）の分布</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>K-Level</th>
                                <th>意味</th>
                                <th>問題の特徴</th>
                                <th>例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>K3</td>
                                <td>Apply（適用）</td>
                                <td>状況にスキル・技法を適用する</td>
                                <td>IDP を特定シナリオに作成する</td>
                            </tr>
                            <tr>
                                <td>K4</td>
                                <td>Analyze（分析）</td>
                                <td>複雑な状況を構造的に分析する</td>
                                <td>チームの問題の根本原因を分析する</td>
                            </tr>
                            <tr>
                                <td>K5</td>
                                <td>Evaluate（評価）</td>
                                <td>複数の選択肢を評価・判断する</td>
                                <td>採用候補者のアプローチを評価する</td>
                            </tr>
                            <tr>
                                <td>K6</td>
                                <td>Create（創造）</td>
                                <td>独自の解決策・文書を作成する</td>
                                <td>チームビルディング戦略を設計する</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="sub-title">10のビジネスアウトカム（BO）</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="layer-title">BO1 — 組織全体のリーダーシップ</div>
                        <div className="layer-desc">
                            CEO/取締役会レベルのコミットメントのもと、テスト管理をリードし重要成功要因を識別・管理する
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="layer-title">BO2 — ビジネス主導の意思決定</div>
                        <div className="layer-desc">
                            品質KPIに基づきテスト管理戦略を決定し、組織全体へのコミットメントと準拠を実装する
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="layer-title">BO3 — 現状評価と段階的改善</div>
                        <div className="layer-desc">
                            テスト管理の現状を評価し、ビジネス目標達成に連動した段階的改善を提案する
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="layer-title">BO4 — 戦略的ポリシーの策定と実装</div>
                        <div className="layer-desc">
                            テスト管理とテスト改善のための戦略的ポリシーを策定し、組織全体に実装する
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="layer-title">BO5 — 問題分析と効果的解決策</div>
                        <div className="layer-desc">
                            テスト管理と他役割・管理領域との連携問題を分析し、効果的な解決策を提案する
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="layer-title">BO6 — マスターテスト計画の作成</div>
                        <div className="layer-desc">
                            ガバナンスダッシュボードを伴うマスターテスト計画を作成し、ビジネス目標を達成・超過する
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="layer-title">BO7 — 革新的なテスト管理コンセプト開発</div>
                        <div className="layer-desc">
                            役割・スキル・手法・組織構造を含む革新的なテスト管理組織コンセプトを策定する
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="layer-title">BO8 — 標準プロセスの確立</div>
                        <div className="layer-desc">
                            品質KPIに基づく標準化デリバリーを含む、テスト管理実装の標準プロセスを確立する
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="layer-title">BO9 — プロセス改善リードと変更管理</div>
                        <div className="layer-desc">
                            テスト管理プロセス改善活動をリードし、変更の導入を管理する
                        </div>
                    </div>
                    <div className="arch-layer red" style={{borderLeftColor: "var(--color-accent-green)"}}>
                        <div className="layer-title" style={{color: "var(--color-accent-green)"}}>
                            BO10 — 人的問題の理解と効果的管理 ★ MTT核心
                        </div>
                        <div className="layer-desc">
                            テストプロジェクト管理に関連する人的問題を理解・効果的に管理し、必要な変更を実装する
                        </div>
                    </div>
                </div>

                <h3 className="sub-title">シラバスの章別学習時間</h3>
                <div style={{margin: "1.5rem 0"}}>
                    <div className="progress-item">
                        <div className="progress-label">
                            <span>Chapter 3: Managing the Test Team</span><span style={{color: "var(--color-accent-green)"}}>855分</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill green" style={{ '--w': '100%' } as React.CSSProperties}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-label">
                            <span>Chapter 5: Managing Across the Org（一部）</span><span style={{color: "var(--color-accent-cyan)"}}>780分</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill cyan" style={{ '--w': '91%' } as React.CSSProperties}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-label">
                            <span>Chapter 2: Test Missions &amp; Strategies</span><span style={{color: "var(--color-accent-orange)"}}>555分</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill amber" style={{ '--w': '65%' } as React.CSSProperties}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-label">
                            <span>Chapter 6: Project Management</span><span style={{color: "var(--color-accent-purple)"}}>615分</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill purple" style={{ '--w': '72%' } as React.CSSProperties}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══ CHAPTER 1: BUILDING THE TEST TEAM ═══ */}
        <section className="section-wrap" id="ch1">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">1</span>
                    <h2>テストチームのビルディング <span className="k-level">K3 / K4 / K5</span></h2>
                </div>
                <p>
                    テストチームを構築するためには、戦略的な採用プロセス全体を管理する必要があります。シラバスSection
                    3.2 が対象範囲です。
                </p>

                <h3 className="sub-title">採用プロセスの全体フロー</h3>
                <div className="mermaid-wrap">
                    <Mermaid chart={`flowchart LR
A["📋 JD作成<br />3.2.1"] --> B["📄 レジュメ評価<br />3.2.2"]
B --> C["🎤 面接実施<br />3.2.3"]
C --> D["🚀 オンボーディング<br />3.2.4"]
D --> E{"継続評価"}
E -->|良好| F["✅ 正式採用"]
E -->|不適合| G["終了プロセス<br />3.2.5/3.2.6"]
style A fill:#003322,stroke:#00ff88,color:#00ff88
style B fill:#002233,stroke:#00d4ff,color:#00d4ff
style C fill:#003322,stroke:#00ff88,color:#00ff88
style D fill:#330022,stroke:#bf91f3,color:#bf91f3
style F fill:#002200,stroke:#00ff88,color:#00ff88
style G fill:#220011,stroke:#ff4466,color:#ff4466`} />
                </div>

                {/* 1.1 JD */}
                <h3 className="sub-title">1.1 ジョブディスクリプション（JD）の作成 — Section 3.2.1</h3>
                <p>
                    <strong>定義：</strong>
                    JD（職務記述書）は、採用するポジションの目的・職責・必要スキル・成功指標を明文化した文書です。
                </p>
                <p>
                    <strong>なぜ重要か：</strong>
                    不明確なJDは適切でない候補者の応募を招き、採用後のミスマッチによる高い退職率を引き起こします。
                </p>

                <div className="code-block">
                    <div className="code-header">YAML</div>
                    <pre dangerouslySetInnerHTML={{ __html: `job_description:
  title: "シニアQAエンジニア / テストリード"
  
  purpose: |
    「テスト自動化フレームワークの設計・実装を主導し、
     品質保証プロセス全体を改善する」
  
  responsibilities:
    - テスト戦略の策定と実行
    - テスト自動化フレームワークのアーキテクチャ設計
    - ジュニアテスターのメンタリング
    - ステークホルダーへのテスト結果報告
    - テスト計画書・テストケースの作成

  required_skills:
    technical:
      - テスト自動化（Selenium / Playwright / Cypress）
      - API テスト（Postman / REST Assured）
      - CI/CD パイプライン（GitHub Actions / Jenkins）
      - SQL / データベーステスト
    soft_skills:
      - コミュニケーション能力
      - 問題解決スキル
      - チームワーク
      - アダプタビリティ

  qualifications:
    - ISTQB CTFL または CTAL-TA（推奨）
    - 5年以上のソフトウェアテスト経験
    - アジャイル開発環境での経験

  reporting_line: "テストマネージャー直属"
  
  success_metrics:
    - 自動化テストのカバレッジ80%以上を達成
    - 欠陥漏洩率を現在比50%削減
    - テスト実行時間を30%短縮` }} />
                </div>

                <div className="compare-wrap">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 良いJDの特徴</div>
                        <ul className="compare-list">
                            <li>職種の明確な目的・使命を記述する</li>
                            <li>具体的・測定可能な成功基準を含める</li>
                            <li>必須スキルと歓迎スキルを明確に分ける</li>
                            <li>チームカルチャーを反映した記述にする</li>
                            <li>経験年数より「できること」にフォーカスする</li>
                        </ul>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 悪いJDの特徴</div>
                        <ul className="compare-list">
                            <li>実際には使わないスキルを必須にする</li>
                            <li>「なんでもできる人材」を求める</li>
                            <li>給与・待遇を曖昧にする</li>
                            <li>成功基準が定量化されていない</li>
                            <li>既存メンバーを傷つける記述を含む</li>
                        </ul>
                    </div>
                </div>

                {/* 1.2 Resume */}
                <h3 className="sub-title">1.2 レジュメ（履歴書）の評価 — Section 3.2.2</h3>
                <p>
                    <strong>定義：</strong>
                    候補者のレジュメを事前定義した評価基準に基づき体系的にスクリーニングするプロセスです。
                </p>

                <ol className="step-list">
                    <li>
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">スクリーニング基準の事前定義（重み付け）</div>
                            <div className="step-desc">
                                必須スキル充足度(40%)・テスト経験年数(20%)・認定資格(15%)・ドメイン知識(15%)・コミュニケーション(10%)
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">赤旗（Red Flags）の識別</div>
                            <div className="step-desc">
                                頻繁な転職（1年未満）・期間の空白・具体的実績の欠如・スキルリストの過度な詳細
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">ポジティブシグナルの確認</div>
                            <div className="step-desc">
                                定量的実績（「自動化で30%削減」）・ISTQB資格保有・問題解決ストーリーが具体的・自己研鑽の証拠
                            </div>
                        </div>
                    </li>
                </ol>

                {/* 1.3 Interview */}
                <h3 className="sub-title">1.3 面接の実施 — Section 3.2.3</h3>
                <p>
                    <strong>定義：</strong> 候補者を体系的に評価するための構造化面接プロセスです。
                </p>

                <h4 className="sub-sub">STAR 面接技法（行動面接法）</h4>
                <p>
                    <strong>なぜSTARを使うか：</strong>
                    過去の具体的な行動が将来の行動を最もよく予測するという前提に基づき、候補者の実際の経験から問題解決能力・コミュニケーション力を評価します。
                </p>

                <div className="mermaid-wrap">
                    <Mermaid chart={`flowchart LR
S["🎬 Situation<br />状況を設定する<br />「当時、UIが毎週変更される<br />アジャイルプロジェクトで…」"] --> T["📋 Task<br />課題を明確にする<br />「E2Eのフレイキー率が<br />40%に達し…」"]
T --> A["⚡ Action<br />自分がとった行動<br />「POMを導入し<br />data-testidを標準化して…」"]
A --> R["🏆 Result<br />結果・インパクト<br />「6週間でフレイキー率を<br />5%以下に削減」"]
style S fill:#002233,stroke:#00d4ff,color:#e6edf3
style T fill:#003322,stroke:#00ff88,color:#e6edf3
style A fill:#220033,stroke:#bf91f3,color:#e6edf3
style R fill:#003300,stroke:#00ff88,color:#00ff88`} />
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>質問カテゴリ</th>
                                <th>サンプル質問</th>
                                <th>評価ポイント</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>技術スキル</td>
                                <td>「テスト自動化を始める際、最初に何を評価しますか？」</td>
                                <td>ROI分析・SUTの種類・チームスキル・既存インフラへの言及</td>
                            </tr>
                            <tr>
                                <td>問題解決</td>
                                <td>「リリース直前に重大な欠陥を発見しました。どうしますか？」</td>
                                <td>リスク評価プロセス・ステークホルダー報告姿勢・判断力</td>
                            </tr>
                            <tr>
                                <td>リーダーシップ</td>
                                <td>
                                    「ジュニアテスターがなかなか成長しない場合、どうアプローチしますか？」
                                </td>
                                <td>コーチング・メンタリングスキル・共感力</td>
                            </tr>
                            <tr>
                                <td>チームワーク</td>
                                <td>
                                    「開発チームとテストチームの間で衝突が起きた場合、どうしますか？」
                                </td>
                                <td>コンフリクト解決スキル・交渉力・外交性</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 1.4 Onboarding */}
                <h3 className="sub-title">1.4 新メンバーのオンボーディング — Section 3.2.4</h3>
                <p>
                    <strong>定義：</strong>
                    新入社員を組織・チームに統合し、早期に自立して貢献できるよう支援するプロセスです。
                </p>

                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="layer-title">最初の30日間 — 理解と適応（Day 1-30）</div>
                        <div className="layer-desc">
                            会社・チーム文化の理解 / ツール・環境セットアップ /
                            既存テスト資料のレビュー / チームメンバー全員との1on1 /
                            バディシステム（先輩テスターがサポート）
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="layer-title">次の30日間 — 貢献の開始（Day 31-60）</div>
                        <div className="layer-desc">
                            独立したタスクを担当し始める / テストケース設計・レビューへの参加 /
                            チームミーティングでの積極的な貢献 / 改善提案の奨励
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="layer-title">最後の30日間 — 自立（Day 61-90）</div>
                        <div className="layer-desc">
                            フルパフォーマンスでの業務遂行 / 90日レビューミーティング /
                            今後の目標・キャリアパスの設定 / パフォーマンス評価の開始
                        </div>
                    </div>
                </div>

                <div className="callout info">
                    <div className="callout-title">💡 オンボーディングの重要ポイント</div>
                    <p>
                        最初の週は「情報収集モード」に徹する（急かさない）。明確な期待値を設定し、小さな成功体験を早期に作る。心理的安全性を確保し、質問しやすい環境を整える。
                    </p>
                </div>

                {/* 1.5 Termination */}
                <h3 className="sub-title">1.5 雇用・契約の終了 — Section 3.2.5/3.2.6</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="layer-title">① 自発的退職（Voluntary Resignation）</div>
                        <div className="layer-desc">
                            知識移転計画の策定が最優先。引継ぎ書類の作成を依頼。前向きな出口面接（Exit
                            Interview）の実施。
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="layer-title">② 解雇（Involuntary Termination）</div>
                        <div className="layer-desc">
                            適切な文書化（PIP の記録）が必須。段階的アプローチ：口頭警告 → 書面警告
                            → PIP → 解雇。人事・法務との連携必須。
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="layer-title">③ 契約終了（Contract End）</div>
                        <div className="layer-desc">
                            契約書に明記された条件に従う。契約延長か終了かの事前通知。知識移転の計画。
                        </div>
                    </div>
                </div>

                <div className="alert red">
                    <strong>⚠️ 倫理的注意事項</strong>
                    個人の尊厳を傷つけない対応、プライバシーの保護（他メンバーへの不必要な開示なし）、会社のポリシー・法律への厳格な準拠が必要です。
                </div>
            </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══ CHAPTER 2: DEVELOPING THE TEST TEAM ═══ */}
        <section className="section-wrap" id="ch2">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">2</span>
                    <h2>テストチームの開発 <span className="k-level">K3 / K4 / K5</span></h2>
                </div>
                <p>
                    チームメンバーの継続的な成長と発展をサポートすることは、Expert Test Manager
                    の最重要責務のひとつです。シラバスSection 3.3 が対象範囲です。
                </p>

                <div className="trend-grid">
                    <div className="trend-card">
                        <div className="trend-icon">🗺️</div>
                        <div className="trend-title">個人開発計画（IDP）</div>
                        <div className="trend-desc">
                            各メンバーの成長目標を文書化し定期的にフォローする
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-icon">🎯</div>
                        <div className="trend-title">SMART 目標設定</div>
                        <div className="trend-desc">測定可能で達成可能な目標を組織目標と整合させる</div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-icon">🧩</div>
                        <div className="trend-title">Belbin チームロール</div>
                        <div className="trend-desc">9つのロールを理解しチームバランスを最適化する</div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-icon">📚</div>
                        <div className="trend-title">70:20:10 学習モデル</div>
                        <div className="trend-desc">実務・社会学習・研修を最適比率で組み合わせる</div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-icon">🤝</div>
                        <div className="trend-title">メンタリング</div>
                        <div className="trend-desc">フォーマル・インフォーマル・ピアの3種類を活用</div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-icon">📊</div>
                        <div className="trend-title">パフォーマンスレビュー</div>
                        <div className="trend-desc">
                            360°フィードバック + SBI フレームワークで評価の質を高める
                        </div>
                    </div>
                </div>

                {/* 2.1 IDP */}
                <h3 className="sub-title">2.1 個人の発展計画（IDP）— Section 3.3.1</h3>
                <p>
                    <strong>定義：</strong> 個人開発計画（Individual Development
                    Plan）は、各チームメンバーの現状スキル・成長目標・アクションプランを文書化したロードマップです。
                </p>

                <div className="code-block">
                    <div className="code-header">Python</div>
                    <pre dangerouslySetInnerHTML={{ __html: `individual_development_plan = {
    "employee": "田中花子",
    "manager": "鈴木テストマネージャー",
    "review_date": "2025-04-01",
    "next_review": "2025-10-01",
    
    # 現状スキル評価（1-4スケール）
    "current_skills": {
        "test_design":        3,  # ⭐⭐⭐（実践レベル）
        "test_automation":    2,  # ⭐⭐（基礎レベル）
        "api_testing":        2,  # ⭐⭐
        "leadership":         1,  # ⭐（初心者）
        "domain_knowledge":   3,  # ⭐⭐⭐
    },
    
    # 目標スキルレベル（6ヶ月後）
    "target_skills": {
        "test_automation":    3,  # 重点強化
        "leadership":         2,  # 段階的成長
    },
    
    # 具体的なアクションプラン
    "actions": [
        {
            "skill": "テスト自動化",
            "action": "Playwright 認定トレーニング受講",
            "due_date": "2025-06-30",
            "support": "費用会社負担・学習時間確保",
            "measurement": "20件の自動化テストを独立して作成",
        },
        {
            "skill": "リーダーシップ",
            "action": "ジュニアメンバー2名のメンター担当",
            "due_date": "継続",
            "support": "週1回のメンタリング面談時間確保",
            "measurement": "メンティーの満足度評価・成長確認",
        },
    ],
    
    # 成功指標
    "success_metrics": {
        "short_term": "3ヶ月以内に基本的な自動化テストを独立実装",
        "mid_term": "6ヶ月以内に自動化テストの設計レビューを担当",
        "long_term": "1年以内に自動化テストリードとして機能",
    }
}` }} />
                </div>

                {/* 2.2 SMART */}
                <h3 className="sub-title">2.2 SMART 目標設定 — Section 3.3.2</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="layer-title">S — Specific（具体的）</div>
                        <div className="layer-desc">
                            ✅「テスト自動化カバレッジを60%に引き上げる」　❌「もっとうまくやれ」
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="layer-title">M — Measurable（測定可能）</div>
                        <div className="layer-desc">
                            ✅「カバレッジを現在の30%から60%に」　❌「できる限り多くを自動化する」
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="layer-title">A — Achievable（達成可能）</div>
                        <div className="layer-desc">
                            ✅「チームのスキルとリソースを考慮した現実的な目標」　❌「3ヶ月で全テストを自動化する」
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="layer-title">R — Relevant（関連性）</div>
                        <div className="layer-desc">
                            ✅「ビジネスゴール（リリース速度向上）に直結する目標」　❌「個人の興味だけで選んだ目標」
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="layer-title">T — Time-bound（期限付き）</div>
                        <div className="layer-desc">
                            ✅「2025年9月30日までに達成する」　❌「いつかやります」
                        </div>
                    </div>
                </div>

                {/* 2.3 Belbin */}
                <h3 className="sub-title">2.3 ベルビンのチームロール — Section 3.3.4</h3>
                <p>
                    <strong>定義：</strong> Meredith Belbin
                    が提唱した、チーム内で人が担う9つの役割分類モデルです。チームのバランス分析と採用判断に活用します。
                </p>

                <h4 className="sub-sub">🧠 思考指向（Thought-Oriented Roles）</h4>
                <div className="role-grid">
                    <div className="role-card">
                        <div className="role-abbr">PL</div>
                        <div className="role-name">プラント（Plant）</div>
                        <div className="role-strong">強み：創造性・革新的アイデア</div>
                        <div className="role-weak">弱み：細部への注意が不足</div>
                    </div>
                    <div className="role-card">
                        <div className="role-abbr">ME</div>
                        <div className="role-name">モニター・エバリュエーター</div>
                        <div className="role-strong">強み：客観性・判断力・分析力</div>
                        <div className="role-weak">弱み：熱意・インスピレーション不足</div>
                    </div>
                    <div className="role-card">
                        <div className="role-abbr">SP</div>
                        <div className="role-name">スペシャリスト（Specialist）</div>
                        <div className="role-strong">強み：専門知識・自己主導</div>
                        <div className="role-weak">弱み：狭い視野・自分の分野に固執</div>
                    </div>
                </div>

                <h4 className="sub-sub">⚡ 行動指向（Action-Oriented Roles）</h4>
                <div className="role-grid">
                    <div className="role-card">
                        <div className="role-abbr">SH</div>
                        <div className="role-name">シェーパー（Shaper）</div>
                        <div className="role-strong">強み：ダイナミズム・困難への耐性</div>
                        <div className="role-weak">弱み：感情的になりやすい</div>
                    </div>
                    <div className="role-card">
                        <div className="role-abbr">IMP</div>
                        <div className="role-name">インプレメンター</div>
                        <div className="role-strong">強み：規律・信頼性・効率性</div>
                        <div className="role-weak">弱み：柔軟性が低い</div>
                    </div>
                    <div className="role-card">
                        <div className="role-abbr">CF</div>
                        <div className="role-name">コンプリーター・フィニッシャー</div>
                        <div className="role-strong">強み：完璧主義・注意力・品質重視</div>
                        <div className="role-weak">弱み：委任が苦手・過度な心配</div>
                    </div>
                </div>

                <h4 className="sub-sub">🤝 対人指向（People-Oriented Roles）</h4>
                <div className="role-grid">
                    <div className="role-card">
                        <div className="role-abbr">CO</div>
                        <div className="role-name">コーディネーター</div>
                        <div className="role-strong">強み：成熟度・自信・委任能力</div>
                        <div className="role-weak">弱み：仕事を他に丸投げしがち</div>
                    </div>
                    <div className="role-card">
                        <div className="role-abbr">TW</div>
                        <div className="role-name">チームワーカー</div>
                        <div className="role-strong">強み：協力的・外交的・共感力</div>
                        <div className="role-weak">弱み：困難な状況での優柔不断</div>
                    </div>
                    <div className="role-card">
                        <div className="role-abbr">RI</div>
                        <div className="role-name">リソース・インベスティゲーター</div>
                        <div className="role-strong">強み：熱意・外交性・コネクション</div>
                        <div className="role-weak">弱み：楽観的すぎて詳細を見落とす</div>
                    </div>
                </div>

                <div className="callout info">
                    <div className="callout-title">💡 テストチームでの役割マッピング例</div>
                    <p>
                        テストマネージャー → <strong>CO + SH</strong> 　シニアテスター →
                        <strong>SP + ME</strong> 　自動化エンジニア →
                        <strong>SP + CF</strong> 　QAコーディネーター → <strong>TW + RI</strong>
                    </p>
                </div>

                {/* 2.4 70:20:10 */}
                <h3 className="sub-title">2.4 スキル開発・70:20:10 学習モデル — Section 3.3.5/3.3.6</h3>

                <div className="pyramid-wrap">
                    <div className="pyr-item">10% — 形式的トレーニング（ISTQB研修・外部講座）</div>
                    <div className="pyr-item">
                        20% — 社会的学習（ペアテスト・コードレビュー・勉強会）
                    </div>
                    <div className="pyr-item">
                        70% — 実務経験（挑戦的プロジェクト・ローテーション・実問題解決）
                    </div>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>割合</th>
                                <th>種類</th>
                                <th>具体的な活動例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>70%</td>
                                <td>実務経験（On-the-Job）</td>
                                <td>
                                    挑戦的プロジェクトへのアサイン / ローテーション / 実際の問題解決
                                </td>
                            </tr>
                            <tr>
                                <td>20%</td>
                                <td>社会的学習（Social Learning）</td>
                                <td>
                                    ペアプログラミング / コードレビュー / テクニカル勉強会 /
                                    コミュニティ参加
                                </td>
                            </tr>
                            <tr>
                                <td>10%</td>
                                <td>形式的トレーニング（Formal）</td>
                                <td>ISTQB認定研修 / 外部研修 / カンファレンス / オンライン学習</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 2.5 Mentoring */}
                <h3 className="sub-title">2.5 メンタリング — Section 3.3.7</h3>

                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="layer-title">フォーマルメンタリング（公式）</div>
                        <div className="layer-desc">
                            組織が公式に設定するペアリング。月1〜2回の定期面談。明確な目標・期間の設定。
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="layer-title">インフォーマルメンタリング（非公式）</div>
                        <div className="layer-desc">
                            自然発生的な関係。都度アドバイス・フィードバックを求める形式。
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="layer-title">ピアメンタリング（同僚間）</div>
                        <div className="layer-desc">
                            同じレベルのメンバー同士による相互学習・サポート。
                        </div>
                    </div>
                </div>

                <h4 className="sub-sub">60分メンタリングセッションの進め方</h4>
                <ol className="step-list">
                    <li>
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">準備（メンティーが議題を事前準備）</div>
                            <div className="step-desc">
                                当日の5分前に議題メモを共有。前回のアクション確認リストを持参する。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">チェックイン（5分）</div>
                            <div className="step-desc">
                                前回のアクション確認。達成・未達成の振り返り。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">現在の課題（20分）</div>
                            <div className="step-desc">
                                メンティーが主役で話す。メンターは傾聴・質問に徹する。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">指導・フィードバック（20分）</div>
                            <div className="step-desc">
                                メンターが経験・知見を共有。答えを直接教えず「どう思う？」と問いかける。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <div className="step-title">アクションプラン（10分）</div>
                            <div className="step-desc">
                                次回までの具体的・測定可能なアクションを合意。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <div className="step-title">まとめ（5分）</div>
                            <div className="step-desc">
                                感謝・次回日程確認。アクション記録を共有ドキュメントに記入。
                            </div>
                        </div>
                    </li>
                </ol>

                {/* 2.6 Performance Reviews */}
                <h3 className="sub-title">
                    2.6 パフォーマンスレビューとフィードバック — Section 3.3.8
                </h3>

                <h4 className="sub-sub">360度フィードバック</h4>
                <div className="mermaid-wrap" style={{maxWidth: "500px", margin: "0 auto"}}>
                    <Mermaid chart={`flowchart TD
Self["👤 本人<br />(自己評価)"]
Manager["👔 上位者<br />(マネージャー評価)"]
Peer1["👥 同僚A<br />(ピア評価)"]
Peer2["👥 同僚B<br />(ピア評価)"]
Report["⬇️ 部下<br />(リーダー職の場合)"]
Self --> Manager
Manager --> Self
Peer1 --> Self
Peer2 --> Self
Report --> Self
style Self fill:#003322,stroke:#00ff88,color:#00ff88,stroke-width:3px
style Manager fill:#002233,stroke:#00d4ff,color:#e6edf3
style Peer1 fill:#002233,stroke:#00d4ff,color:#e6edf3
style Peer2 fill:#002233,stroke:#00d4ff,color:#e6edf3
style Report fill:#002233,stroke:#00d4ff,color:#e6edf3`} />
                </div>

                <h4 className="sub-sub">SBI フィードバックフレームワーク</h4>
                <div className="code-block">
                    <div className="code-header">例</div>
                    <pre dangerouslySetInnerHTML={{ __html: `## SBI = Situation（状況）→ Behavior（行動）→ Impact（影響）

S - Situation（状況）:
"先週の〇〇プロジェクトのスプリントレビューで…"

B - Behavior（具体的な行動）:
"ステークホルダーからの質問に対して、データなしで
自信を持って回答し、その場で調査することを約束した"

I - Impact（影響）:
"チームの信頼性が向上し、POがテストチームへの
依頼を増やした。次のスプリントで予算も確保された。"` }} />
                </div>

                <div className="compare-wrap">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 効果的なフィードバック</div>
                        <ul className="compare-list">
                            <li>具体的な行動・状況を示す</li>
                            <li>24〜48時間以内のタイムリーな提供</li>
                            <li>肯定的・改善点をバランスよく伝える</li>
                            <li>行動に焦点（人格ではなく）を当てる</li>
                            <li>改善のための具体的な提案を含める</li>
                        </ul>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 効果を下げるフィードバック</div>
                        <ul className="compare-list">
                            <li>「いつも」「絶対に」の一般化表現</li>
                            <li>数週間・数ヶ月後に遅れて伝える</li>
                            <li>人格・性格を批判する</li>
                            <li>改善策を提示せず批判のみ</li>
                            <li>他人と比較するフィードバック</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══ CHAPTER 3: LEADING THE TEST TEAM ═══ */}
        <section className="section-wrap" id="ch3">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">3</span>
                    <h2>テストチームのリーディング <span className="k-level">K4 / K5</span></h2>
                </div>
                <p>
                    チームをリードするには、情報共有・信頼構築・モチベーション管理・分散チーム対応の4つの柱が必要です。シラバスSection
                    3.4 が対象範囲です。
                </p>

                {/* 3.1 Communication */}
                <h3 className="sub-title">3.1 情報共有とコミュニケーション — Section 3.4.1</h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ミーティング種別</th>
                                <th>頻度</th>
                                <th>時間</th>
                                <th>主な内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>デイリースタンドアップ</td>
                                <td>毎日</td>
                                <td>15分</td>
                                <td>昨日・今日・ブロッカーを共有。詳細議論は別途。</td>
                            </tr>
                            <tr>
                                <td>週次チームミーティング</td>
                                <td>週1回</td>
                                <td>60分</td>
                                <td>テスト進捗レビュー・欠陥/リスク共有・改善提案</td>
                            </tr>
                            <tr>
                                <td>スプリントレトロ</td>
                                <td>スプリント毎</td>
                                <td>90分</td>
                                <td>うまくいったこと・改善点・アクションアイテム</td>
                            </tr>
                            <tr>
                                <td>1on1ミーティング</td>
                                <td>週1回</td>
                                <td>30〜45分</td>
                                <td>キャリア・個人的課題・心理的安全性の確保</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 3.2 Trust */}
                <h3 className="sub-title">3.2 ロイヤリティと信頼の醸成 — Section 3.4.2</h3>
                <p><strong>信頼の方程式（Trust Equation）：</strong></p>

                <div className="code-block">
                    <div className="code-header">Formula</div>
                    <pre dangerouslySetInnerHTML={{ __html: `Trust = (Credibility + Reliability + Intimacy) / Self-Orientation

Credibility（信用性）: 専門知識を持ち、約束を守る
Reliability（信頼性）: 言ったことを確実に実行し、一貫した行動をとる
Intimacy（親密さ）: 感情・懸念を理解し、心理的安全性を提供する
Self-Orientation（自己本位・低いほど良い）: チームの利益を個人の利益より優先する` }} />
                </div>

                <div className="compare-wrap">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 信頼を構築する行動</div>
                        <ul className="compare-list">
                            <li>失敗を責めずに学びの機会にする</li>
                            <li>公正・一貫した対応（えこひいきなし）</li>
                            <li>チームの成果を組織内で積極的に宣伝する</li>
                            <li>困難な状況でもチームを守る（盾になる）</li>
                            <li>誤りを素直に認めて謝罪する</li>
                        </ul>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 信頼を壊す行動</div>
                        <ul className="compare-list">
                            <li>プレッシャーでメンバーを批判する</li>
                            <li>約束を守らない・後出しで要求を変える</li>
                            <li>チームの成果を自分の手柄にする</li>
                            <li>特定メンバーをえこひいきする</li>
                            <li>重要情報を意図的に隠す</li>
                        </ul>
                    </div>
                </div>

                {/* 3.3 Motivation */}
                <h3 className="sub-title">3.3 モチベーションとチャレンジ — Section 3.4.4</h3>

                <h4 className="sub-sub">マズローの欲求階層（テストチームへの適用）</h4>
                <div className="pyramid-wrap">
                    <div className="pyr-item">
                        自己実現：キャリア最高目標・Expert認定・イノベーションリード
                    </div>
                    <div className="pyr-item">承認：表彰・昇進・責任ある役割・成果の可視化</div>
                    <div className="pyr-item">所属・愛情：チームの一員感・良好な人間関係・協働文化</div>
                    <div className="pyr-item">
                        安全：雇用の安定・明確なプロセス・心理的安全性・公平な評価
                    </div>
                </div>

                <h4 className="sub-sub">ハーツバーグの二要因理論</h4>
                <div className="mermaid-wrap">
                    <Mermaid chart={`flowchart LR
subgraph H["衛生要因 (Hygiene Factors) - 不満足を防ぐが動機づけにならない"]
H1["💰 給与・報酬"]
H2["🏢 職場環境・設備"]
H3["📋 会社のポリシー"]
H4["👔 上司の管理スタイル"]
end
subgraph M["動機づけ要因 (Motivators) - 真の満足と動機を生む"]
M1["🏆 達成感"]
M2["🙌 承認・称賛"]
M3["📈 成長・昇進の機会"]
M4["💡 挑戦的な責任"]
end
H --> |"不足 → 不満"| Note1["❌ 不満状態"]
M --> |"充実 → 高モチベーション"| Note2["✅ 動機づけ状態"]
style H fill:#0a0e1a,stroke:#ffaa00
style M fill:#0a0e1a,stroke:#00ff88
style Note1 fill:#220011,stroke:#ff4466,color:#ff4466
style Note2 fill:#002200,stroke:#00ff88,color:#00ff88`} />
                </div>

                <div className="callout warning">
                    <div className="callout-title">⚠️ 重要：二要因理論の実践的含意</div>
                    <p>
                        「給与・環境に不満はないがやりがいがない」という状態は<strong>衛生要因は満たされているが動機づけ要因が不足</strong>しています。この場合、給与増額（衛生要因）では解決しません。<strong>責任・挑戦・成長の機会（動機づけ要因）</strong>を提供することが正解です。
                    </p>
                </div>

                {/* 3.4 Distributed Teams */}
                <h3 className="sub-title">3.4 分散チームの管理 — Section 3.4.5</h3>

                <div className="ethics-grid">
                    <div className="ethics-card" style={{borderLeftColor: "var(--color-accent-cyan)"}}>
                        <div className="ethics-title" style={{color: "var(--color-accent-cyan)"}}>
                            課題1：タイムゾーンの差異
                        </div>
                        <div className="ethics-body">複数タイムゾーンにまたがるチームの協働が困難</div>
                        <div className="ethics-good">
                            ✅ 対策：コアコラボレーション時間（オーバーラップ時間）の設定 /
                            非同期コミュニケーションの標準化 /
                            重要ミーティングの時間帯ローテーション
                        </div>
                    </div>
                    <div className="ethics-card" style={{borderLeftColor: "var(--color-accent-orange)"}}>
                        <div className="ethics-title" style={{color: "var(--color-accent-orange)"}}>
                            課題2：文化的・言語的差異
                        </div>
                        <div className="ethics-body">誤解・コミュニケーション障壁が生じやすい</div>
                        <div className="ethics-good">
                            ✅ 対策：共通言語での文書化を標準化 / 文化的感受性トレーニング /
                            直接的な表現を奨励（誤解を防ぐ）
                        </div>
                    </div>
                    <div className="ethics-card" style={{borderLeftColor: "var(--color-accent-green)"}}>
                        <div className="ethics-title" style={{color: "var(--color-accent-green)"}}>
                            課題3：コミュニケーションの質の低下
                        </div>
                        <div className="ethics-body">テキストのみでは意図・感情が伝わりにくい</div>
                        <div className="ethics-good">
                            ✅ 対策：ビデオ会議はカメラONを奨励 /
                            専用チャンネルの設計（雑談・緊急・プロジェクト別）/
                            AI翻訳補助ツールの活用
                        </div>
                    </div>
                    <div className="ethics-card" style={{borderLeftColor: "var(--color-accent-purple)"}}>
                        <div className="ethics-title" style={{color: "var(--color-accent-purple)"}}>
                            課題4：チームの一体感の欠如
                        </div>
                        <div className="ethics-body">孤立感・帰属意識の低下</div>
                        <div className="ethics-good">
                            ✅ 対策：バーチャルチームビルディング活動 /
                            定期的なオフサイトミーティング（年1〜2回）/ バーチャルコーヒーチャット
                        </div>
                    </div>
                    <div className="ethics-card" style={{borderLeftColor: "var(--color-accent-red)"}}>
                        <div className="ethics-title" style={{color: "var(--color-accent-red)"}}>
                            課題5：成果の可視性の低下
                        </div>
                        <div className="ethics-body">リモートメンバーの貢献が見えにくい</div>
                        <div className="ethics-good">
                            ✅ 対策：透明性の高い進捗ダッシュボード /
                            成果ベースの評価（時間でなく結果で評価）/ 公平なパフォーマンス評価制度
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══ CHAPTER 4: MANAGING ACROSS THE ORGANIZATION ═══ */}
        <section className="section-wrap" id="ch4">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">4</span>
                    <h2>組織横断マネジメント <span className="k-level">K4 / K5</span></h2>
                </div>
                <p>
                    テストチームを組織内でどのように配置するかは、効果性と効率性に大きく影響します。シラバスSection
                    5（一部）が対象範囲です。
                </p>

                <h3 className="sub-title">4.1 テストチームの組織内配置モデル</h3>

                <div className="mermaid-wrap">
                    <Mermaid chart={`flowchart TD
subgraph M1["モデル1: 中央集権型 (Centralized)"]
C_QA["🏢 テスト部門"] --> C_P1["プロジェクトA"]
C_QA --> C_P2["プロジェクトB"]
C_QA --> C_P3["プロジェクトC"]
end
subgraph M2["モデル2: 分散型 (Embedded)"]
E_P1["プロジェクトA<br />QAチーム内包"]
E_P2["プロジェクトB<br />QAチーム内包"]
E_P3["プロジェクトC<br />QAチーム内包"]
end
subgraph M3["モデル3: ハイブリッド型 (CoE + Embedded)"]
H_CoE["⭐ テストCoE<br />戦略・標準・ツール管理"]
H_P1["プロジェクトA<br />エンベッドQA"]
H_P2["プロジェクトB<br />エンベッドQA"]
H_CoE -.->|"ガイダンス提供"| H_P1
H_CoE -.->|"ガイダンス提供"| H_P2
end
style H_CoE fill:#002200,stroke:#00ff88,color:#00ff88
style M1 fill:#0a0e1a,stroke:#21262d
style M2 fill:#0a0e1a,stroke:#21262d
style M3 fill:#0a0e1a,stroke:#00ff88`} />
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>モデル</th>
                                <th>メリット</th>
                                <th>デメリット</th>
                                <th>適したケース</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>中央集権型</td>
                                <td>専門性集中・スキル共有容易・コスト効率</td>
                                <td>プロジェクト固有知識が薄い・連携に時間かかる</td>
                                <td>小〜中規模組織・標準化重視</td>
                            </tr>
                            <tr>
                                <td>分散型</td>
                                <td>プロジェクト密着・即時フィードバック</td>
                                <td>スキルサイロ化・標準化が難しい</td>
                                <td>大規模アジャイル組織・製品ライン別チーム</td>
                            </tr>
                            <tr>
                                <td>ハイブリッド型</td>
                                <td>柔軟性・専門性・プロジェクト適応性のバランス</td>
                                <td>管理の複雑さ・報告ラインの曖昧さ</td>
                                <td>中〜大規模組織・品質文化醸成中</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══ CHAPTER 5: ADVOCATING THE TEST TEAM ═══ */}
        <section className="section-wrap" id="ch5">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">5</span>
                    <h2>テストチームのアドボカシー <span className="k-level">K4 / K5</span></h2>
                </div>
                <p>
                    テストの価値を組織全体に積極的に伝え、チームを守ることがExpert Test
                    Managerの重要な役割です。シラバスSection 5.2 が対象範囲です。
                </p>

                <h3 className="sub-title">5.1 テストの価値の可視化（Selling the Value of Testing）</h3>
                <p>
                    <strong>なぜ必要か：</strong>
                    テストは目に見えにくいコストとして削減対象になりやすいため、ビジネス言語で価値を証明する必要があります。
                </p>

                <div className="code-block">
                    <div className="code-header">Python</div>
                    <pre dangerouslySetInnerHTML={{ __html: `executive_dashboard = {
    "品質KPI": {
        "欠陥漏洩率": "2.3% (目標: <5%)",  # ✅ 良好
        "本番障害数": "3件 (前月比 -2件)", # ✅ 改善中
        "重大欠陥率": "0% (目標: 0%)",     # ✅ 達成
        "顧客クレーム": "1件 (前月比 -4件)", # ✅ 改善中
    },
    "効率KPI": {
        "テストカバレッジ": "78% (目標: 75%)", # ✅ 目標超過
        "自動化率": "65% (目標: 60%)",       # ✅ 目標超過
        "テスト実行時間": "4.5時間 (前月比 -30%)", # ✅ 改善
    },
    "コストKPI": {
        "テスト工数削減": "月200時間 (自動化効果)",
        "テスト環境コスト": "25%削減 (クラウド最適化)",
    }
}` }} />
                </div>

                <h3 className="sub-title">5.2 ROI 計算によるテスト価値の証明</h3>

                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-val">2000万</div>
                        <div className="metric-label">本番障害回避（推定）</div>
                        <div className="metric-trend up">▲ 重大欠陥3件を発見・修正</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">800万</div>
                        <div className="metric-label">手動テスト工数削減/年</div>
                        <div className="metric-trend up">▲ 自動化1000時間×8000円</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">500万</div>
                        <div className="metric-label">テスト投資コスト/年</div>
                        <div className="metric-trend down">▼ フレームワーク・研修含む</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">460%</div>
                        <div className="metric-label">テスト投資ROI</div>
                        <div className="metric-trend up">▲ (2800万-500万)/500万</div>
                    </div>
                </div>

                <h3 className="sub-title">5.3 防衛可能なチームの構築（Creating a Defensible Team）</h3>
                <p>予算削減・チーム縮小の圧力に対抗するための戦略的アプローチです。</p>

                <ol className="step-list">
                    <li>
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">予算削減提案への反論準備</div>
                            <div className="step-desc">
                                コスト削減の数値的根拠を常に準備。「もしテストを削減したら何が起きるか」シナリオを提示。類似プロジェクトの失敗事例データを活用。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">テストのビジネス価値を常に可視化する</div>
                            <div className="step-desc">
                                毎月のテスト効果報告書を経営層に提出。重要な欠陥発見ごとに「価値ストーリー」を作成。テストなしで発生したであろうコストを試算。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">組織内の味方を増やす（アライアンス構築）</div>
                            <div className="step-desc">
                                製品オーナー・開発リードとの良好な関係構築。QA文化の組織全体への普及。「テストは全員の責任」という考え方の浸透。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">チームの専門性を高め、代替不可能にする</div>
                            <div className="step-desc">
                                独自の知識・ツール・プロセスの構築。ISTQB認定資格の取得奨励。ドメイン固有の専門テスターの育成。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <div className="step-title">
                                チームを保護・支援する（Protecting the Team）
                            </div>
                            <div className="step-desc">
                                不合理な要求（無理なスケジュール等）から守る。問題が起きたとき個人を責めずシステムを改善する。チームが成長できる「安全な実験環境」を提供する。
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══ CHAPTER 6: STAKEHOLDER COMMUNICATION ═══ */}
        <section className="section-wrap" id="ch6">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">6</span>
                    <h2>
                        ステークホルダーコミュニケーション <span className="k-level">K4 / K5 / K6</span>
                    </h2>
                </div>
                <p>
                    対象者ごとに適切な情報・形式・頻度でコミュニケーションを設計することが、Expert
                    Test Managerの核心スキルです。シラバスSection 5.4 が対象範囲です。
                </p>

                <h3 className="sub-title">6.1 ステークホルダーマッピング（Power-Interest Grid）</h3>

                <div className="mermaid-wrap" style={{maxWidth: "750px", margin: "0 auto"}}>
                    <Mermaid chart={`quadrantChart
title "Power-Interest Grid (テストチームの観点)"
x-axis "低関心 (Interest: Low)" --> "高関心 (Interest: High)"
y-axis "低権力 (Power: Low)" --> "高権力 (Power: High)"
quadrant-1 "Manage Closely (密接に管理)"
quadrant-2 "Keep Satisfied (満足させ続ける)"
quadrant-3 "Minimal Effort (最小限の対応)"
quadrant-4 "Keep Informed (情報を定期提供)"
"CEO/CTO": [0.8, 0.9]
"製品オーナー": [0.85, 0.75]
"CFO": [0.3, 0.85]
"開発チームリード": [0.9, 0.4]
"QAアナリスト": [0.95, 0.25]
"他部門管理職": [0.2, 0.3]`} />
                </div>

                <h3 className="sub-title">6.2 対象者別コミュニケーション戦略</h3>

                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="layer-title">👔 経営層（CEO/CTO/CFO）向け</div>
                        <div className="layer-desc">
                            頻度: 月1回 or 主要マイルストーン時　｜　形式:
                            エグゼクティブサマリー（1ページ以内）<br />
                            内容: 品質リスク・コスト・ROI・ビジネス影響　｜　言語:
                            ビジネス用語（技術用語を避ける）<br />
                            例：「先月のテストで発見した3件の重大欠陥を修正し、本番リリースでの推定損害2,000万円を回避しました」
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="layer-title">📋 製品オーナー（PO）向け</div>
                        <div className="layer-desc">
                            頻度: スプリント毎　｜　形式: スプリントレビュー・テスト結果レポート<br />
                            内容: テスト進捗・発見欠陥・リリース判断への示唆　｜　言語:
                            機能単位・ユーザーストーリーベース<br />
                            例：「認証ストーリーの欠陥2件を発見。Critical:1件（ログインできないケース）はリリースブロッカーとして対応が必要です」
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="layer-title">💻 開発チーム向け</div>
                        <div className="layer-desc">
                            頻度: デイリー（デイリースタンドアップ）　｜　形式:
                            欠陥チケット・テスト結果・Slack通知<br />
                            内容: 具体的な欠陥詳細・再現手順・優先度　｜　言語:
                            技術的詳細・コードレベルの情報<br />
                            例：「BUG-2025-042: ログインAPIがnullメールで500エラー。再現手順:
                            email=nullでPOST /api/auth/login」
                        </div>
                    </div>
                </div>

                <h3 className="sub-title">6.3 組織内での品質文化の推進</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>成熟度レベル</th>
                                <th>状態</th>
                                <th>特徴</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>レベル1 — 初期</td>
                                <td>品質は偶発的</td>
                                <td>テストは後付け・プロセス未定義</td>
                            </tr>
                            <tr>
                                <td>レベル2 — 管理</td>
                                <td>基本的なプロセス存在</td>
                                <td>チームベースのQA・個別プロジェクト対応</td>
                            </tr>
                            <tr>
                                <td>レベル3 — 定義</td>
                                <td>標準化されたプロセス</td>
                                <td>組織全体でのQA標準・シフトレフト開始</td>
                            </tr>
                            <tr>
                                <td>レベル4 — 測定</td>
                                <td>定量的管理</td>
                                <td>メトリクスドリブン・品質ゲート自動化</td>
                            </tr>
                            <tr>
                                <td>レベル5 — 最適化</td>
                                <td>継続的改善</td>
                                <td>品質文化が根付いている・全員が品質に責任</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout info">
                    <div className="callout-title">💡 品質文化を向上させる5つの活動</div>
                    <p>
                        ① テスト早期関与（シフトレフト）の推進　② 品質ゲート（Quality
                        Gates）の設定　③ 品質KPIの組織全体での共有　④
                        「品質は全員の責任」文化の醸成　⑤ 成功体験の組織内共有
                    </p>
                </div>
            </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══ CHAPTER 7: ETHICAL ISSUES ═══ */}
        <section className="section-wrap" id="ch7">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">7</span>
                    <h2>倫理的問題の対処 <span className="k-level">K4 / K5 / K6</span></h2>
                </div>
                <p>
                    テストマネージャーは、ビジネス圧力と品質・誠実性のバランスを保つ倫理的リーダーシップが求められます。シラバスSection
                    5.8 が対象範囲です。
                </p>

                <h3 className="sub-title">7.1 倫理的問題の4カテゴリ</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="layer-title">① チームの倫理（Section 5.8.1）</div>
                        <div className="layer-desc">
                            メンバーの不正行為への対処 /
                            不適切なショートカット（テスト省略等）への対応 / 機密情報の取り扱い
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="layer-title">
                            ② テストステークホルダーとの関係（Section 5.8.2）
                        </div>
                        <div className="layer-desc">
                            利益相反の回避 / 開発チームとの適切な独立性の維持 /
                            外部プレッシャーへの抵抗
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="layer-title">③ 結果の報告（Section 5.8.3）</div>
                        <div className="layer-desc">
                            「聞きたい答え」でなく「真実」を報告する /
                            悪い知らせを伝える勇気（Courage to report）
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="layer-title">④ テスト管理倫理の全体（Section 5.8.4）</div>
                        <div className="layer-desc">
                            組織全体での倫理文化の醸成 / IEEE/ACM 倫理規定への準拠 /
                            倫理的意思決定プロセスの確立
                        </div>
                    </div>
                </div>

                <h3 className="sub-title">7.2 典型的な倫理的ジレンマと対処法</h3>

                <div className="ethics-grid">
                    <div className="ethics-card">
                        <div className="ethics-title">🚨 ジレンマ1：リリース圧力 vs 品質</div>
                        <div className="ethics-body">
                            状況：上位管理者が重大欠陥を抱えたままリリースを強行しようとする
                        </div>
                        <div className="ethics-good">
                            ✅
                            倫理的な対処法：リスクを文書化して書面で報告（証拠を残す）。リリースの承認を求め、リスクの所有者を明確にする。代替案（スコープ削減・リスク緩和策）を提案する。必要であれば上位の管理者にエスカレーションする。
                        </div>
                        <div className="ethics-bad">
                            ❌ 避けるべき：無言の同意・虚偽の品質報告・圧力に黙従する
                        </div>
                    </div>
                    <div className="ethics-card">
                        <div className="ethics-title">📊 ジレンマ2：テスト結果の改ざん圧力</div>
                        <div className="ethics-body">
                            状況：経営層の期待に沿うためテスト結果を「良く見せるよう」求められる
                        </div>
                        <div className="ethics-good">
                            ✅
                            倫理的な対処法：正確な報告を維持することが最重要であると説明する。なぜ正確な報告が組織に利益をもたらすかを議論する。改ざんの要求自体を記録し、人事・コンプライアンスに相談する。
                        </div>
                        <div className="ethics-bad">
                            ❌
                            避けるべき：テスト結果の改ざん・虚偽のメトリクス報告・数値の恣意的な選別
                        </div>
                    </div>
                    <div className="ethics-card">
                        <div className="ethics-title">👤 ジレンマ3：チームメンバーの不正行為</div>
                        <div className="ethics-body">
                            状況：テストメンバーが実際には実行していないテストを「実行済み」と報告している
                        </div>
                        <div className="ethics-good">
                            ✅
                            倫理的な対処法：事実を確認した上でプライベートに本人と話し合う。なぜ問題なのかを明確に説明する。必要に応じて懲戒プロセスを踏む。
                        </div>
                        <div className="ethics-bad">
                            ❌ 避けるべき：見て見ぬふり・連帯責任・公開での叱責・記録なしの対応
                        </div>
                    </div>
                    <div className="ethics-card">
                        <div className="ethics-title">🔒 ジレンマ4：機密情報の漏洩リスク</div>
                        <div className="ethics-body">
                            状況：テスト中に企業の機密情報（個人情報・財務データ等）に触れる機会がある
                        </div>
                        <div className="ethics-good">
                            ✅
                            倫理的な対処法：機密情報取り扱いポリシーの徹底。テストデータの匿名化・マスキングの推進。データアクセスの最小権限原則の遵守。セキュリティインシデント発生時の即時報告。
                        </div>
                        <div className="ethics-bad">
                            ❌
                            避けるべき：本番データをそのままテストデータとして使用・適切な承認なしのデータアクセス
                        </div>
                    </div>
                </div>

                <h3 className="sub-title">7.3 倫理的意思決定フレームワーク</h3>

                <div className="mermaid-wrap" style={{maxWidth: "550px", margin: "0 auto"}}>
                    <Mermaid chart={`flowchart TD
A["📌 Step 1<br />倫理的問題かどうかを識別する"] --> B["👥 Step 2<br />関係するステークホルダーを特定する"]
B --> C["💡 Step 3<br />選択肢を列挙する (2-5案)"]
C --> D["⚖️ Step 4<br />各選択肢の倫理的影響を評価する"]
D --> E["✅ Step 5<br />最善の選択肢を選び、行動する"]
E --> F["📊 Step 6<br />結果をモニタリングし、学習する"]
F --> |"新たな問題発生"| A
style A fill:#002233,stroke:#00d4ff,color:#e6edf3
style B fill:#002233,stroke:#00d4ff,color:#e6edf3
style C fill:#003322,stroke:#00ff88,color:#e6edf3
style D fill:#330022,stroke:#bf91f3,color:#e6edf3
style E fill:#002200,stroke:#00ff88,color:#00ff88
style F fill:#222200,stroke:#ffaa00,color:#ffaa00`} />
                </div>

                <h3 className="sub-title">7.4 IEEE/ACM ソフトウェアエンジニアリング倫理規定</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>原則</th>
                                <th>内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1. 公共（Public）</td>
                                <td>公共の利益に合致した行動をとる</td>
                            </tr>
                            <tr>
                                <td>2. 顧客・雇用者</td>
                                <td>クライアント・雇用者の最善の利益を追求する</td>
                            </tr>
                            <tr>
                                <td>3. 製品</td>
                                <td>最高の専門的水準で製品を提供する</td>
                            </tr>
                            <tr>
                                <td>4. 判断</td>
                                <td>誠実で独立した専門的判断を維持する</td>
                            </tr>
                            <tr>
                                <td>5. 経営</td>
                                <td>倫理的なアプローチでマネジメントを促進する</td>
                            </tr>
                            <tr>
                                <td>6. 職業</td>
                                <td>誠実性を持って職業の評判を維持する</td>
                            </tr>
                            <tr>
                                <td>7. 同僚</td>
                                <td>同僚に対して公平で支援的であること</td>
                            </tr>
                            <tr>
                                <td>8. 自己</td>
                                <td>職業の実践において継続的に学習する</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══ EXAM TIPS ═══ */}
        <section className="section-wrap" id="exam">
            <div className="container">
                <div className="chapter-header">
                    <span
                        className="chapter-num"
                        style={{background: "var(--color-accent-orange)", color: "var(--color-bg-primary)"}}
                        >★</span
                    >
                    <h2>試験対策・サンプル問題</h2>
                </div>

                <h3 className="sub-title">章別重要度と配点分析</h3>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-topic">採用・面接（JD・STAR）</div>
                        <div className="exam-section">Section 3.2 | K3–K5</div>
                        <div className="star-row">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star">★</span
                            ><span className="star empty">★</span>
                        </div>
                        <div style={{fontSize: "0.8rem", color: "var(--color-text-secondary)"}}>
                            JD作成・レジュメ評価・STAR面接技法
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-topic">個人開発・スキル開発</div>
                        <div className="exam-section">Section 3.3.1–3.3.6 | K3–K5</div>
                        <div className="star-row">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span>
                        </div>
                        <div style={{fontSize: "0.8rem", color: "var(--color-text-secondary)"}}>
                            IDP・SMART・70:20:10
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-topic">パフォーマンスレビュー</div>
                        <div className="exam-section">Section 3.3.8 | K4–K5</div>
                        <div className="star-row">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span>
                        </div>
                        <div style={{fontSize: "0.8rem", color: "var(--color-text-secondary)"}}>
                            360°フィードバック・SBI・PIP
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-topic">Belbin ＋ MBTI</div>
                        <div className="exam-section">Section 3.3.4 | K4–K5</div>
                        <div className="star-row">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span>
                        </div>
                        <div style={{fontSize: "0.8rem", color: "var(--color-text-secondary)"}}>
                            9ロール・役割バランス分析
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-topic">モチベーション理論</div>
                        <div className="exam-section">Section 3.4.4 | K4–K5</div>
                        <div className="star-row">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span>
                        </div>
                        <div style={{fontSize: "0.8rem", color: "var(--color-text-secondary)"}}>
                            マズロー・ハーツバーグ適用
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-topic">分散チーム管理</div>
                        <div className="exam-section">Section 3.4.5 | K4</div>
                        <div className="star-row">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star">★</span
                            ><span className="star empty">★</span>
                        </div>
                        <div style={{fontSize: "0.8rem", color: "var(--color-text-secondary)"}}>
                            5課題と対策
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-topic">テスト価値のアドボカシー</div>
                        <div className="exam-section">Section 5.2 | K4–K5</div>
                        <div className="star-row">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span>
                        </div>
                        <div style={{fontSize: "0.8rem", color: "var(--color-text-secondary)"}}>
                            KPI・ROI計算・防衛戦略
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-topic">ステークホルダーコミュニ<br />ケーション</div>
                        <div className="exam-section">Section 5.4 | K4–K6</div>
                        <div className="star-row">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span>
                        </div>
                        <div style={{fontSize: "0.8rem", color: "var(--color-text-secondary)"}}>
                            Power-Interest Grid・対象者別戦略
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-topic">倫理的問題への対処</div>
                        <div className="exam-section">Section 5.8 | K4–K6</div>
                        <div className="star-row">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star">★</span
                            ><span className="star empty">★</span>
                        </div>
                        <div style={{fontSize: "0.8rem", color: "var(--color-text-secondary)"}}>
                            4ジレンマ・意思決定フレームワーク
                        </div>
                    </div>
                </div>

                <h3 className="sub-title">📝 サンプル問題と解説</h3>

                {/* Q1 */}
                <div className="trend-card">
                    <div className="trend-icon">❓</div>
                    <div className="trend-title">問1（K5 / Belbin）— 試験頻出パターン</div>
                    <div className="trend-desc" style={{marginBottom: "1rem"}}>
                        「常に新しい革新的なテストアプローチを提案するが、細部の詳細や締め切りを守ることが苦手」なメンバーはベルビンのどのロールを示しているか？<br /><br />
                        A) シェーパー（Shaper）　B) コンプリーター・フィニッシャー　C)
                        <strong>プラント（Plant）</strong>　D) インプレメンター
                    </div>
                    <div className="alert green">
                        <strong>✅ 正解：C) プラント（Plant）</strong>
                        プラントの特徴：強み＝創造性・革新的アイデア／弱み＝細部への注意不足・締め切り管理が苦手。シェーパーは「チームを動かす原動力」。コンプリーター・フィニッシャーは「細部・締め切りに強い」（正反対）。インプレメンターは「計画を実行に変える人」。
                    </div>
                </div>

                {/* Q2 */}
                <div className="trend-card">
                    <div className="trend-icon">❓</div>
                    <div className="trend-title">問2（K5 / モチベーション理論）— 試験頻出パターン</div>
                    <div className="trend-desc" style={{marginBottom: "1rem"}}>
                        中堅テスターが「給与・環境に不満はないが、やりがいを感じない」と述べています。ハーツバーグの二要因理論に基づいた最適な対応はどれか？<br /><br />
                        A) 給与を20%増額する　B) 勤務環境をさらに改善する　C)
                        <strong>挑戦的な役割とタスクを割り当て、成長の機会を提供する</strong>　D)
                        福利厚生を充実させる
                    </div>
                    <div className="alert green">
                        <strong>✅ 正解：C) 挑戦的な役割・成長の機会</strong>
                        「給与・環境に不満はない」＝衛生要因は満たされている。「やりがいがない」＝動機づけ要因が不足。A・B・Dはいずれも衛生要因の改善であり、既に満たされている要素をさらに充実させても動機づけには直結しない。正解は達成感・責任・成長という動機づけ要因の提供。
                    </div>
                </div>

                {/* Q3 */}
                <div className="trend-card">
                    <div className="trend-icon">❓</div>
                    <div className="trend-title">問3（K6 / 倫理的問題）— 記述式頻出パターン</div>
                    <div className="trend-desc" style={{marginBottom: "1rem"}}>
                        製品オーナーから「重大な欠陥が残っているが、競合他社に先を越されないためにリリースを強行したい。テスト結果レポートでその欠陥を軽微なものとして記載してほしい」という依頼を受けました。どのように対処すべきか？<br /><br />
                        A) 製品オーナーの要求に応じてレポートを修正する　B)
                        <strong
                            >リスクを文書化した上で正確なテスト結果を維持し、リスク所有者を書面で明確にする</strong
                        >　C) チームに黙って従う　D) 欠陥を「検討中」ステータスに変更する
                    </div>
                    <div className="alert green">
                        <strong>✅ 正解：B) 正確な結果維持 ＋ リスク文書化 ＋ 書面での合意</strong>
                        テスト結果の正確性は絶対に維持する。リスクを明確に文書化し、意思決定者がリスクを理解した上で判断できるよう情報を提供する。リスクの「所有者」を明確にする（テストマネージャーではなくビジネス側が決定すべき）。書面での確認を残す（後から責任を問われる場合に備えて）。A・C・Dはいずれも倫理規定違反。
                    </div>
                </div>

                <h3 className="sub-title">記述式問題で高得点を獲得する5つの原則</h3>
                <ol className="step-list">
                    <li>
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">構造化された回答を書く</div>
                            <div className="step-desc">
                                問題の認識 → 分析 → 解決策 →
                                期待効果。番号付きリストや段落分けで読みやすくする。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">具体的な事例・数値を使う</div>
                            <div className="step-desc">
                                「月1回の1on1で個人の目標達成度を評価します」のように具体化する。「モチベーションを高めます」のような抽象的表現は避ける。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">複数の選択肢を提示し最適解の理由を説明する</div>
                            <div className="step-desc">
                                Expert Level
                                では「なぜそれを選んだか」の評価能力が重要。代替案との比較を示す。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">トレードオフを認識する</div>
                            <div className="step-desc">
                                「AとBのトレードオフを考慮した上で...」という視点を示す。完璧な解決策はないことを認識した上で最善を選ぶ。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <div className="step-title">時間配分を守る（135分）</div>
                            <div className="step-desc">
                                選択式16問：約40分　記述式2問：約70分（各35分）　見直し：約25分
                            </div>
                        </div>
                    </li>
                </ol>

                <h3 className="sub-title">試験直前チェックリスト</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="layer-title">採用プロセス</div>
                        <div className="layer-desc">
                            ✅ 5ステップ（JD→レジュメ→面接→オンボーディング→終了） / STAR
                            面接技法（S=状況・T=課題・A=行動・R=結果）
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="layer-title">Belbin のチームロール</div>
                        <div className="layer-desc">
                            ✅ 9種類全て言える（PL・ME・SP / SH・IMP・CF / CO・TW・RI） /
                            テストチームでの役割マッピング
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="layer-title">SMART 目標設定</div>
                        <div className="layer-desc">
                            ✅ Specific/Measurable/Achievable/Relevant/Time-bound /
                            組織目標との整合（Alignment）
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="layer-title">モチベーション理論</div>
                        <div className="layer-desc">
                            ✅ マズロー：5段階欲求 / ハーツバーグ：衛生要因 vs 動機づけ要因の違い /
                            どちらをどの状況で使うか
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="layer-title">倫理・コミュニケーション</div>
                        <div className="layer-desc">
                            ✅ 4ジレンマ × 倫理的対処法 / Power-Interest Grid / SBI フィードバック /
                            テスト価値のROI計算
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="layer-title">分散チーム管理</div>
                        <div className="layer-desc">
                            ✅ 5課題（タイムゾーン/文化差/コミュニケーション/一体感/可視性） /
                            70:20:10 学習モデル
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══ REFERENCES ═══ */}
        <section className="section-wrap" id="refs">
            <div className="container">
                <div className="chapter-header">
                    <span
                        className="chapter-num"
                        style={{background: "var(--color-accent-cyan)", color: "var(--color-bg-primary)"}}
                        >📚</span
                    >
                    <h2>参考資料・公式リソース</h2>
                </div>

                <h3 className="sub-title">🏛️ ISTQB® 公式リソース</h3>
                <div className="ref-grid">
                    <a
                        href="https://istqb.org/certifications/certified-tester-expert-level-test-management-managing-the-test-team-ctel-tm-mtt/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">公式 ISTQB®</div>
                        <div className="ref-title">CTEL-TM-MTT 公式認定ページ</div>
                        <span className="ref-url">istqb.org/certifications/ctel-tm-mtt/</span>
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&download_id=3709"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">公式 ISTQB® / シラバス</div>
                        <div className="ref-title">CTEL-TM シラバス v1.0（2011年）ダウンロード</div>
                        <span className="ref-url"
                            >istqb.org/?sdm_process_download=1&amp;download_id=3709</span
                        >
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&download_id=3718"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">公式 ISTQB® / サンプル試験</div>
                        <div className="ref-title">CTEL-TM サンプル試験A 問題 v1.0.1</div>
                        <span className="ref-url"
                            >istqb.org/?sdm_process_download=1&amp;download_id=3718</span
                        >
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&download_id=3720"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">公式 ISTQB® / サンプル試験</div>
                        <div className="ref-title">CTEL-TM サンプル試験A 解答 v1.0.1</div>
                        <span className="ref-url"
                            >istqb.org/?sdm_process_download=1&amp;download_id=3720</span
                        >
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&download_id=3834"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">公式 ISTQB® / 試験規則</div>
                        <div className="ref-title">CTEL Expert Level 試験構造とルール v2.32</div>
                        <span className="ref-url"
                            >istqb.org/?sdm_process_download=1&amp;download_id=3834</span
                        >
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&download_id=3730"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">公式 ISTQB® / 認定ポリシー</div>
                        <div className="ref-title">ISTQB Expert Level 認定延長ポリシー v1.1</div>
                        <span className="ref-url"
                            >istqb.org/?sdm_process_download=1&amp;download_id=3730</span
                        >
                    </a>
                    <a
                        href="https://istqb.org/certifications/certified-tester-expert-level-test-management-strategic-test-management-ctel-tm-sm/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">公式 ISTQB® / 関連資格</div>
                        <div className="ref-title">
                            CTEL-TM-STM（Part 1: Strategic Test Management）
                        </div>
                        <span className="ref-url">istqb.org/certifications/ctel-tm-sm/</span>
                    </a>
                    <a
                        href="https://istqb.org/certifications/certified-tester-expert-level-test-management-operational-test-management-ctel-tm-otm/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">公式 ISTQB® / 関連資格</div>
                        <div className="ref-title">
                            CTEL-TM-OTM（Part 2: Operational Test Management）
                        </div>
                        <span className="ref-url">istqb.org/certifications/ctel-tm-otm/</span>
                    </a>
                    <a
                        href="https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">公式 ISTQB® / 前提資格</div>
                        <div className="ref-title">
                            CTAL-TM v3.0（前提資格：Advanced Level Test Manager）
                        </div>
                        <span className="ref-url">istqb.org/certifications/ctal-tm-v3-0/</span>
                    </a>
                    <a
                        href="https://glossary.istqb.org/en_US/search?term="
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">公式 ISTQB® / グロッサリー</div>
                        <div className="ref-title">ISTQB グロッサリー（用語検索）</div>
                        <span className="ref-url">glossary.istqb.org/en_US/search</span>
                    </a>
                </div>

                <h3 className="sub-title">📢 試験プロバイダー</h3>
                <div className="ref-grid">
                    <a
                        href="https://isqi.org/ISTQB-CTEL-TM-Part-3-Managing-the-Test-Team/CT-EL-TM-MCQ-P3.82"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">試験プロバイダー / iSQI</div>
                        <div className="ref-title">iSQI — CTEL-TM-MTT 試験登録ページ</div>
                        <span className="ref-url">isqi.org/...CT-EL-TM-MCQ-P3.82</span>
                    </a>
                    <a
                        href="https://astqb.org/certifications/expert-level-test-management-certification/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">試験プロバイダー / ASTQB（米国）</div>
                        <div className="ref-title">
                            ASTQB — Expert Level Test Management（試験詳細）
                        </div>
                        <span className="ref-url"
                            >astqb.org/certifications/expert-level-test-management/</span
                        >
                    </a>
                    <a
                        href="https://www.brightest.org/en/certifications/ISTQB-r-CTEL-Test-Management-Managing-the-Test-Team/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">試験プロバイダー / Brightest</div>
                        <div className="ref-title">Brightest — CTEL-TM-MTT 試験・バッジ情報</div>
                        <span className="ref-url"
                            >brightest.org/en/certifications/ISTQB-r-CTEL-MTT/</span
                        >
                    </a>
                    <a
                        href="https://istqb.org/exam-providers/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">試験プロバイダー検索</div>
                        <div className="ref-title">ISTQB 試験プロバイダー検索</div>
                        <span className="ref-url">istqb.org/exam-providers/</span>
                    </a>
                    <a
                        href="https://istqb.org/training-providers/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">研修プロバイダー検索</div>
                        <div className="ref-title">ISTQB 研修プロバイダー検索</div>
                        <span className="ref-url">istqb.org/training-providers/</span>
                    </a>
                </div>

                <h3 className="sub-title">📖 チームロール・人材管理の参考資料</h3>
                <div className="ref-grid">
                    <a
                        href="https://www.belbin.com/about/belbin-team-roles/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">チームロール / Belbin 公式</div>
                        <div className="ref-title">Belbin Team Roles — 公式サイト（9ロール詳細）</div>
                        <span className="ref-url">belbin.com/about/belbin-team-roles/</span>
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/Team_Role_Inventories"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">チームロール / Wikipedia</div>
                        <div className="ref-title">
                            Team Role Inventories — Belbin モデルの学術的解説
                        </div>
                        <span className="ref-url">en.wikipedia.org/wiki/Team_Role_Inventories</span>
                    </a>
                    <a
                        href="https://www.myersbriggs.org/my-mbti-personality-type/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">MBTI / 公式サイト</div>
                        <div className="ref-title">Myers-Briggs Type Indicator — 公式サイト</div>
                        <span className="ref-url">myersbriggs.org/my-mbti-personality-type/</span>
                    </a>
                    <a
                        href="https://www.simplypsychology.org/maslow.html"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">モチベーション理論 / 学術資料</div>
                        <div className="ref-title">マズローの欲求階層 — SimplyPsychology 解説</div>
                        <span className="ref-url">simplypsychology.org/maslow.html</span>
                    </a>
                    <a
                        href="https://www.netmba.com/mgmt/ob/motivation/herzberg/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">モチベーション理論 / 学術資料</div>
                        <div className="ref-title">ハーツバーグの二要因理論 — NetMBA 解説</div>
                        <span className="ref-url">netmba.com/mgmt/ob/motivation/herzberg/</span>
                    </a>
                    <a
                        href="https://702010institute.com/70-20-10-model/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">学習モデル</div>
                        <div className="ref-title">70:20:10 学習モデル — 公式 Institute</div>
                        <span className="ref-url">702010institute.com/70-20-10-model/</span>
                    </a>
                    <a
                        href="https://www.ccl.org/articles/leading-effectively-articles/closing-the-gap-between-intent-vs-impact-3-steps-to-better-feedback/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">フィードバック / CCL</div>
                        <div className="ref-title">
                            SBI フィードバックフレームワーク — Center for Creative Leadership
                        </div>
                        <span className="ref-url"
                            >ccl.org/articles/.../3-steps-to-better-feedback/</span
                        >
                    </a>
                    <a
                        href="https://www.teamdynamics.io/blog/maximizing-team-performance-a-deep-dive-into-mbti-for-team-building"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">MBTI / チームビルディング</div>
                        <div className="ref-title">
                            MBTI とチームビルディング — チームパフォーマンス向上の実践
                        </div>
                        <span className="ref-url">teamdynamics.io/blog/mbti-for-team-building</span>
                    </a>
                </div>

                <h3 className="sub-title">⚖️ 倫理・専門職規定</h3>
                <div className="ref-grid">
                    <a
                        href="https://ethics.acm.org/code-of-ethics/software-engineering-code/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">倫理規定 / IEEE/ACM</div>
                        <div className="ref-title">
                            IEEE/ACM ソフトウェアエンジニアリング倫理規定（8原則）
                        </div>
                        <span className="ref-url"
                            >ethics.acm.org/code-of-ethics/software-engineering-code/</span
                        >
                    </a>
                    <a
                        href="https://www.acm.org/code-of-ethics"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">倫理規定 / ACM</div>
                        <div className="ref-title">ACM 倫理規定（2018年改訂版）</div>
                        <span className="ref-url">acm.org/code-of-ethics</span>
                    </a>
                </div>

                <h3 className="sub-title">🎓 学習リソース・トレーニング</h3>
                <div className="ref-grid">
                    <a
                        href="https://www.istqb.guru/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">学習リソース</div>
                        <div className="ref-title">ISTQB.guru — CTEL-TM 学習ガイド</div>
                        <span className="ref-url">istqb.guru/</span>
                    </a>
                    <a
                        href="https://www.globalknowledge.com/en-ae/courses/istqb/software_testing/istqbe-tm3"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">研修プロバイダー</div>
                        <div className="ref-title">Global Knowledge — CTEL-TM 公認研修</div>
                        <span className="ref-url">globalknowledge.com/...istqbe-tm3</span>
                    </a>
                    <a
                        href="https://atsqa.org/certifications/expert-level-test-management"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">認定情報</div>
                        <div className="ref-title">ATSQA — CTEL-TM 詳細情報（前提・学習時間）</div>
                        <span className="ref-url"
                            >atsqa.org/certifications/expert-level-test-management</span
                        >
                    </a>
                    <a
                        href="https://www.koenig-solutions.com/istqb-certified-tester-expert-level-test-management-training-course"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <div className="ref-cat">研修プロバイダー</div>
                        <div className="ref-title">Koenig Solutions — CTEL-TM トレーニングコース</div>
                        <span className="ref-url">koenig-solutions.com/...ctel-tm-training/</span>
                    </a>
                </div>

                <h3 className="sub-title">📋 推奨参考書籍</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>タイトル</th>
                                <th>著者</th>
                                <th>カテゴリ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Managing the Testing Process (4th Ed.)</td>
                                <td>Rex Black</td>
                                <td>テスト管理</td>
                            </tr>
                            <tr>
                                <td>Agile Testing: A Practical Guide</td>
                                <td>Crispin &amp; Gregory</td>
                                <td>アジャイルテスト</td>
                            </tr>
                            <tr>
                                <td>Drive: The Surprising Truth About What Motivates Us</td>
                                <td>Daniel H. Pink</td>
                                <td>モチベーション</td>
                            </tr>
                            <tr>
                                <td>Team of Teams</td>
                                <td>Gen. Stanley McChrystal</td>
                                <td>チームリーダーシップ</td>
                            </tr>
                            <tr>
                                <td>The People Side of Agile</td>
                                <td>John Gillam</td>
                                <td>アジャイル人材管理</td>
                            </tr>
                            <tr>
                                <td>Radical Candor</td>
                                <td>Kim Scott</td>
                                <td>フィードバック・マネジメント</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <div className="section-divider"></div>

        {/* ═══ FOOTER ═══ */}
        <footer
            style={{padding: "2.5rem 0", borderTop: "1px solid var(--border)", background: "var(--color-bg-card)", position: "relative", zIndex: "2"}}
        >
            <div className="container" style={{textAlign: "center"}}>
                <div
                    style={{fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-accent-green)", letterSpacing: "0.15em", marginBottom: "0.8rem"}}
                >
                    CTEL-TM-MTT COMPLETE GUIDE 2025
                </div>
                <p
                    style={{fontSize: "0.85rem", color: "var(--color-text-muted)", maxWidth: "600px", margin: "0 auto 0.8rem"}}
                >
                    本ガイドはISTQB®が公認したトレーニング資料ではありません。
                    公式シラバス・サンプル問題と合わせてご使用ください。 試験情報の最終確認は必ず
                    <a
                        href="https://istqb.org"
                        target="_blank"
                        rel="noopener"
                        style={{color: "var(--color-accent-cyan)"}}
                        >istqb.org</a
                    >
                    で行ってください。
                </p>
                <p
                    style={{fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-text-muted)"}}
                >
                    準拠: ISTQB® CTEL-TM Syllabus v1.0（2011年11月1日リリース）| 最終更新: 2025年
                </p>
            </div>
        </footer>

        </div>
    );
}
