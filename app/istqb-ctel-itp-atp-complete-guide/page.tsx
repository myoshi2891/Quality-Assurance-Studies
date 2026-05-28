import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './istqb-ctel-itp-atp-complete-guide.css';

export const metadata: Metadata = {
    title: 'CTEL-ITP-ATP Expert Level Guide 2025',
    description: 'テストプロセスを評価・診断し、組織に最適な改善戦略を設計・提言するための Expert Level 完全学習ガイド',
};

export default function CTELITPATPPage() {
    return (
        <div className="ctel-atp-page">
            <NavBar />

            <section className="hero">
                <div className="hero-glow"></div>
                <div className="container">
                    <div className="hero-label">ISTQB&reg; Expert Level Certification 2025</div>
                    <h1>CTEL-ITP-ATP<br />テストプロセス評価 完全ガイド</h1>
                    <p className="hero-sub">
                        Assessing Test Processes &mdash;
                        テストプロセスを評価・診断し、組織に最適な改善戦略を設計・提言するための Expert
                        Level 完全学習ガイド
                    </p>
                    <div className="hero-meta">
                        <span className="meta-tag meta-cyan">&#128274; 有効期限 7年</span>
                        <span className="meta-tag meta-green">&#127891; 前提: CTFL + CTAL-TM</span>
                        <span className="meta-tag meta-purple">&#128198; 実務経験 5年+</span>
                        <span className="meta-tag meta-amber">&#9733; K1〜K6 全レベル対応</span>
                    </div>
                </div>
            </section>

            {/* CH0 */}
            <section className="section" id="ch0">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-0">CHAPTER 0</span>
                        <h2>概要・資格ロードマップ</h2>
                    </div>
                    <div className="metric-grid">
                        <div className="metric-card">
                            <div className="metric-value">7年</div>
                            <div className="metric-label">有効期限</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value">MCQ</div>
                            <div className="metric-label">試験形式（2022年〜）</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value">5年+</div>
                            <div className="metric-label">実務経験要件</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value">2部</div>
                            <div className="metric-label">ATP+ITPI で完全認定</div>
                        </div>
                    </div>
                    <div className="callout info">
                        <div className="callout-icon">&#128161;</div>
                        <div className="callout-body">
                            <div className="callout-title">CTEL-ITP は2部構成</div>
                            <div className="callout-text">
                                <strong>Part 1 (ATP)</strong>: テストプロセスの評価・診断・推奨
                                &nbsp;|&nbsp; <strong>Part 2 (ITPI)</strong>:
                                テストプロセス改善の実装。両方に合格して初めて
                                <code>CTEL-ITP</code> 正式認定。各パートは独立して受験可能。
                            </div>
                        </div>
                    </div>
                    <div className="section-divider">
                        <h3>認定ロードマップ</h3>
                        <div className="section-line"></div>
                    </div>
                    <Mermaid chart={`graph TD
                            A["CTFL v4.0 Foundation Level"] --> B["CTAL-TM v3.0 Advanced Test Manager"]
                            B --> C["CTEL-ITP-ATP Part 1:<br/>Assessing"]
                            B --> D["CTEL-ITP-ITPI Part 2:<br/>Implementing"]
                            C --> E["CTEL-ITP<br/>完全認定 ✓"]
                            D --> E

                            style A fill:#1a2234,stroke:#3b82f6,color:#f0f4f8
                            style B fill:#1a2234,stroke:#06b6d4,color:#f0f4f8
                            style C fill:#0d2818,stroke:#22c55e,color:#f0f4f8
                            style D fill:#1a1228,stroke:#a855f7,color:#f0f4f8
                            style E fill:#1a2008,stroke:#22c55e,color:#f0f4f8`} />
                    <div className="section-divider">
                        <h3>全認定要件</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>カテゴリ</th>
                                    <th>要件</th>
                                    <th>詳細</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className="pill pill-cyan">資格</span></td>
                                    <td>CTFL（必須）</td>
                                    <td>Foundation Level 取得済み</td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-cyan">資格</span></td>
                                    <td>CTAL-TM（必須）</td>
                                    <td>Advanced Level Test Manager 取得済み</td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-green">経験</span></td>
                                    <td>ソフトウェアテスト 5年以上</td>
                                    <td>CV + 参照者2名を提出</td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-green">経験</span></td>
                                    <td>テストプロセス改善 2年以上</td>
                                    <td>本モジュール固有の実務経験</td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-amber">貢献</span></td>
                                    <td>論文・発表 1件以上</td>
                                    <td>テスト関連カンファレンス発表または論文</td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-amber">試験</span></td>
                                    <td>ATP + ITPI 両方合格</td>
                                    <td>各パートに独立した MCQ 試験</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="section-divider">
                        <h3>目次</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="toc-grid">
                        <a href="#ch1" className="toc-card">
                            <div className="toc-card-num">Chapter 1</div>
                            <div className="toc-card-title">イントロダクション・K-Level 体系</div>
                        </a>
                        <a href="#ch2" className="toc-card">
                            <div className="toc-card-num">Chapter 2</div>
                            <div className="toc-card-title">改善のコンテキスト</div>
                        </a>
                        <a href="#ch3" className="toc-card">
                            <div className="toc-card-num">Chapter 3</div>
                            <div className="toc-card-title">モデルベース改善</div>
                        </a>
                        <a href="#ch4" className="toc-card">
                            <div className="toc-card-num">Chapter 4</div>
                            <div className="toc-card-title">分析ベース改善</div>
                        </a>
                        <a href="#ch5" className="toc-card">
                            <div className="toc-card-num">Chapter 5</div>
                            <div className="toc-card-title">アプローチの選択</div>
                        </a>
                        <a href="#ch6" className="toc-card">
                            <div className="toc-card-num">Chapter 6</div>
                            <div className="toc-card-title">改善プロセス（IDEAL）</div>
                        </a>
                        <a href="#ch7" className="toc-card">
                            <div className="toc-card-num">Chapter 7</div>
                            <div className="toc-card-title">組織・役割・スキル</div>
                        </a>
                        <a href="#ch8" className="toc-card">
                            <div className="toc-card-num">Chapter 8</div>
                            <div className="toc-card-title">変更管理</div>
                        </a>
                        <a href="#ch9" className="toc-card">
                            <div className="toc-card-num">Chapter 9</div>
                            <div className="toc-card-title">重要成功要因</div>
                        </a>
                        <a href="#ch10" className="toc-card">
                            <div className="toc-card-num">Chapter 10</div>
                            <div className="toc-card-title">ライフサイクル適応</div>
                        </a>
                    </div>
                </div>
            </section>

            {/* CH1 */}
            <section className="section" id="ch1">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-1">CHAPTER 1</span>
                        <h2>イントロダクション・知識レベル体系</h2>
                    </div>
                    <p>
                        Expert Level では認知レベル K1〜K6
                        の全階層が使用される。K4〜K6（分析・評価・創造）の割合が特に高く、単純な暗記ではなく「実際のシナリオへの適用・判断力」が問われる。
                    </p>
                    <div className="section-divider">
                        <h3>K-Level（認知レベル）体系</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="pyramid">
                        <div className="pyramid-row">
                            <div
                                className="pyramid-cell"
                                style={{
                                    width: '200px',
                                    background: 'rgba(239, 68, 68, 0.2)',
                                    color: '#f87171',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                }}
                            >
                                K6 Create 創造
                            </div>
                        </div>
                        <div className="pyramid-row">
                            <div
                                className="pyramid-cell"
                                style={{
                                    width: '260px',
                                    background: 'rgba(245, 158, 11, 0.2)',
                                    color: '#fbbf24',
                                    border: '1px solid rgba(245, 158, 11, 0.3)',
                                }}
                            >
                                K5 Evaluate 評価
                            </div>
                        </div>
                        <div className="pyramid-row">
                            <div
                                className="pyramid-cell"
                                style={{
                                    width: '320px',
                                    background: 'rgba(168, 85, 247, 0.2)',
                                    color: '#c084fc',
                                    border: '1px solid rgba(168, 85, 247, 0.3)',
                                }}
                            >
                                K4 Analyze 分析
                            </div>
                        </div>
                        <div className="pyramid-row">
                            <div
                                className="pyramid-cell"
                                style={{
                                    width: '380px',
                                    background: 'rgba(59, 130, 246, 0.2)',
                                    color: '#60a5fa',
                                    border: '1px solid rgba(59, 130, 246, 0.3)',
                                }}
                            >
                                K3 Apply 適用
                            </div>
                        </div>
                        <div className="pyramid-row">
                            <div
                                className="pyramid-cell"
                                style={{
                                    width: '440px',
                                    background: 'rgba(6, 182, 212, 0.2)',
                                    color: '#22d3ee',
                                    border: '1px solid rgba(6, 182, 212, 0.3)',
                                }}
                            >
                                K2 Understand 理解
                            </div>
                        </div>
                        <div className="pyramid-row">
                            <div
                                className="pyramid-cell"
                                style={{
                                    width: '500px',
                                    background: 'rgba(34, 197, 94, 0.2)',
                                    color: '#4ade80',
                                    border: '1px solid rgba(34, 197, 94, 0.3)',
                                }}
                            >
                                K1 Remember 記憶
                            </div>
                        </div>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>K-Level</th>
                                    <th>名称</th>
                                    <th>問われ方</th>
                                    <th>例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className="k1">K1</span></td>
                                    <td>Remember 記憶</td>
                                    <td>用語・定義の想起</td>
                                    <td>「TMMiとは何か定義せよ」</td>
                                </tr>
                                <tr>
                                    <td><span className="k2">K2</span></td>
                                    <td>Understand 理解</td>
                                    <td>概念の説明・分類・比較</td>
                                    <td>「段階的 vs 継続的表現の違いを説明せよ」</td>
                                </tr>
                                <tr>
                                    <td><span className="k3">K3</span></td>
                                    <td>Apply 適用</td>
                                    <td>技法を実際の状況に適用</td>
                                    <td>「DDP を計算せよ」</td>
                                </tr>
                                <tr>
                                    <td><span className="k4">K4</span></td>
                                    <td>Analyze 分析</td>
                                    <td>情報を分解し問題を分析</td>
                                    <td>「このシナリオの根本原因を特定せよ」</td>
                                </tr>
                                <tr>
                                    <td><span className="k5">K5</span></td>
                                    <td>Evaluate 評価</td>
                                    <td>基準に基づいて判断</td>
                                    <td>「最適なアプローチを選び理由を述べよ」</td>
                                </tr>
                                <tr>
                                    <td><span className="k6">K6</span></td>
                                    <td>Create 創造</td>
                                    <td>要素を組み合わせて新設計</td>
                                    <td>「改善計画を策定せよ」</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout warning">
                        <div className="callout-icon">&#9888;</div>
                        <div className="callout-body">
                            <div className="callout-title">Expert Level の期待値</div>
                            <div className="callout-text">
                                合格者は「世界レベルの専門家」を即座に意味するわけではない。「組織・プロジェクト内で専門的サポートを提供できる」レベルを指す。テストプロセス改善について助言し、改善を主導・実施し、成功の可能性を最大化できることが求められる。
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CH2 */}
            <section className="section" id="ch2">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-2">CHAPTER 2</span>
                        <h2>改善のコンテキスト <span className="k2">K2</span></h2>
                    </div>
                    <div className="section-divider">
                        <h3>2.1 なぜテストを改善するのか？</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="grid-2">
                        <div className="info-card">
                            <h4>&#128200; ビジネスドライバー</h4>
                            <ul>
                                <li>タイムトゥマーケットの短縮</li>
                                <li>製品品質・信頼性の向上</li>
                                <li>テストコストの削減（ROI改善）</li>
                                <li>予測可能性・報告能力の向上</li>
                                <li>サプライヤー要件への対応</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h4>&#127970; 組織的ドライバー</h4>
                            <ul>
                                <li>ソフトウェア障害によるビジネス損失の経験</li>
                                <li>第三者機関へのアウトソーシング展開</li>
                                <li>規制・コンプライアンス要件（FDA・SOX）</li>
                                <li>TMMi Level 3以上をサプライヤーから要求</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-divider">
                        <h3>2.3 品質の5つのビュー（Garvin 1984）</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="arch-layers">
                        <div className="arch-layer cyan">
                            <div className="arch-layer-title">1. 製品ベース（Product-based）</div>
                            <div className="arch-layer-desc">
                                測定可能な製品属性で品質を定義。例：欠陥密度、コードカバレッジ
                            </div>
                        </div>
                        <div className="arch-layer green">
                            <div className="arch-layer-title">2. 製造ベース（Manufacturing-based）</div>
                            <div className="arch-layer-desc">
                                規格・仕様への準拠度で品質を定義。例：ISO
                                9001準拠、繰り返し可能なプロセス
                            </div>
                        </div>
                        <div className="arch-layer blue">
                            <div className="arch-layer-title">3. ユーザーベース（User-based）</div>
                            <div className="arch-layer-desc">
                                ユーザーのニーズ充足度で定義。例：ユーザビリティ、顧客満足度
                            </div>
                        </div>
                        <div className="arch-layer amber">
                            <div className="arch-layer-title">4. 価値ベース（Value-based）</div>
                            <div className="arch-layer-desc">
                                コスト対効果で品質を定義。例：ROI、コスト・パフォーマンス比
                            </div>
                        </div>
                        <div className="arch-layer purple">
                            <div className="arch-layer-title">5. 超越的（Transcendent-based）</div>
                            <div className="arch-layer-desc">
                                明確に定義できないが経験でわかる卓越性。例：「一流のソフトウェア」という評判
                            </div>
                        </div>
                    </div>
                    <div className="section-divider">
                        <h3>2.4.1 デミングサイクル（PDCA）</h3>
                        <div className="section-line"></div>
                    </div>
                    <Mermaid chart={`graph LR
                            P["Plan 計画<br />品質目標設定・現状分析"] --> D["Do 実施<br />計画に基づく活動実行"]
                            D --> C["Check 確認<br />メトリクス追跡・比較"]
                            C --> A["Act 改善<br />パフォーマンス向上機会特定"]
                            A --> P

                            style P fill:#0d2818,stroke:#22c55e,color:#f0f4f8
                            style D fill:#0d1a2e,stroke:#3b82f6,color:#f0f4f8
                            style C fill:#1a1228,stroke:#a855f7,color:#f0f4f8
                            style A fill:#1a1200,stroke:#f59e0b,color:#f0f4f8`} />
                    <div className="section-divider">
                        <h3>2.4.2 IDEALフレームワーク <span className="k3">K3</span>（試験最頻出！）</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="step-list">
                        <div className="step-item">
                            <div className="step-num">I</div>
                            <div className="step-content">
                                <div className="step-title">Initiating（開始）</div>
                                <div className="step-desc">
                                    改善の動機・理由を特定。コンテキストの設定・スポンサーシップの確立。改善インフラの構築。
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">D</div>
                            <div className="step-content">
                                <div className="step-title">Diagnosing（診断）</div>
                                <div className="step-desc">
                                    現行プラクティスの評価・特性把握。推奨事項の策定・フェーズ結果の文書化。
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">E</div>
                            <div className="step-content">
                                <div className="step-title">Establishing（確立）</div>
                                <div className="step-desc">
                                    戦略と優先順位の設定。テストプロセスグループ（TPG）の設立。アクションプランの策定。
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">A</div>
                            <div className="step-content">
                                <div className="step-title">Acting（実施）</div>
                                <div className="step-desc">
                                    プロセスと測定基準の定義。パイロットの計画・実行。インストール・追跡の計画・実行。
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">L</div>
                            <div className="step-content">
                                <div className="step-title">Learning（学習）</div>
                                <div className="step-desc">
                                    教訓の文書化・分析。組織アプローチの見直し。次の改善サイクルへのインプット。
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-divider">
                        <h3>2.5 改善アプローチの概観</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>アプローチ</th>
                                    <th>特徴</th>
                                    <th>適用例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>モデルベース</strong></td>
                                    <td>
                                        TMMi・TPI Next
                                        などの定義されたモデルに沿って改善。ベストプラクティスを段階的に適用
                                    </td>
                                    <td>TMMi Level 3 達成を組織目標とする</td>
                                </tr>
                                <tr>
                                    <td><strong>分析ベース</strong></td>
                                    <td>
                                        実際の問題・データ分析から改善点を導き出す。GQM・根本原因分析などを活用
                                    </td>
                                    <td>欠陥原因分析でテスト手順を見直す</td>
                                </tr>
                                <tr>
                                    <td><strong>ハイブリッド</strong></td>
                                    <td>上記2つの組み合わせ。モデル内で分析技法を活用</td>
                                    <td>TMMi を採用しつつ根本原因分析を活用</td>
                                </tr>
                                <tr>
                                    <td><strong>スキル向上</strong></td>
                                    <td>トレーニング・コーチング・メンタリングによる改善</td>
                                    <td>SFIA フレームワークの活用</td>
                                </tr>
                                <tr>
                                    <td><strong>ツール導入</strong></td>
                                    <td>CAST ツール・テスト管理ツール等の活用</td>
                                    <td>コードカバレッジツールの導入</td>
                                </tr>
                                <tr>
                                    <td><strong>標準・規制対応</strong></td>
                                    <td>FDA・SOX・ISO 9001 等への準拠</td>
                                    <td>ISO 9001:2015 認証取得</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CH3 */}
            <section className="section" id="ch3">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-3">CHAPTER 3</span>
                        <h2>モデルベース改善 <span className="k3">K3</span></h2>
                    </div>
                    <div className="section-divider">
                        <h3>3.1 段階的 vs 継続的表現（試験頻出！）</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="compare-grid">
                        <div className="compare-box good">
                            <div className="compare-label">&#10003; 段階的表現（Staged）= TMMi 採用</div>
                            <ul
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    marginTop: '0.5rem',
                                }}
                            >
                                <li>定義された成熟度レベル（L1〜L5）で段階的に進む</li>
                                <li>概念がシンプルで理解しやすい</li>
                                <li>外部コミュニケーションに有利</li>
                                <li>管理コミットメントへの強いフォーカス</li>
                            </ul>
                        </div>
                        <div className="compare-box blue">
                            <div className="compare-label" style={{ color: 'var(--neon-blue)' }}>
                                &#10003; 継続的表現（Continuous）= TPI Next 採用
                            </div>
                            <ul
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    marginTop: '0.5rem',
                                }}
                            >
                                <li>処方された成熟度レベルなし。任意の領域から開始できる</li>
                                <li>異なる速度で複数領域を改善可能</li>
                                <li>「全か無か」問題を回避</li>
                                <li>特定の問題領域に集中できる</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-divider">
                        <h3>3.3.2 TMMi&reg; 5段階成熟度レベル</h3>
                        <div className="section-line"></div>
                    </div>
                    <Mermaid chart={`graph LR
                            L1["L1 Initial<br />アドホック・カオス"] --> L2["L2 Managed<br />テストがデバッグから分離"]
                            L2 --> L3["L3 Defined<br />組織全体で標準化"]
                            L3 --> L4["L4 Measured<br />定量的管理・測定プログラム"]
                            L4 --> L5["L5 Optimization<br />継続的最適化・欠陥防止"]

                            style L1 fill:#1a0d0d,stroke:#ef4444,color:#f0f4f8
                            style L2 fill:#1a1200,stroke:#f59e0b,color:#f0f4f8
                            style L3 fill:#0d1a00,stroke:#22c55e,color:#f0f4f8
                            style L4 fill:#0d1a2e,stroke:#3b82f6,color:#f0f4f8
                            style L5 fill:#1a1228,stroke:#a855f7,color:#f0f4f8`} />
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>レベル</th>
                                    <th>概要</th>
                                    <th>主要プロセスエリア</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className="pill pill-red">L1 Initial</span></td>
                                    <td>テスト＝デバッグ。アドホック・非構造化</td>
                                    <td>なし</td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-amber">L2 Managed</span></td>
                                    <td>テストがデバッグから分離される</td>
                                    <td>
                                        Test Policy &amp; Strategy / Test Planning / Test Monitoring
                                        &amp; Control / Test Design &amp; Execution / Test Environment
                                    </td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-green">L3 Defined</span></td>
                                    <td>テストプロセスが組織全体で標準化</td>
                                    <td>
                                        Test Organization / Test Training Program / Test Lifecycle &amp;
                                        Integration / Non-functional Testing / Peer Reviews
                                    </td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-cyan">L4 Measured</span></td>
                                    <td>定量的管理・測定プログラム</td>
                                    <td>
                                        Test Measurement / Software Quality Evaluation / Advanced Peer
                                        Reviews
                                    </td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-blue">L5 Optimization</span></td>
                                    <td>継続的最適化・欠陥防止</td>
                                    <td>
                                        Defect Prevention / Quality Control / Test Process Optimization
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="alert amber">
                        &#9650; TMMi Level 達成の目安：各レベルのゴールが 85% 以上達成されていること
                    </div>
                    <div className="section-divider">
                        <h3>3.3.1 TPI Next&reg; の16キーエリア</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="svg-wrap">
                        <svg
                            viewBox="0 0 800 360"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ maxWidth: '800px', width: '100%' }}
                        >
                            <rect width="800" height="360" fill="#0d1117" rx="8" />
                            <text
                                x="400"
                                y="26"
                                fill="#06b6d4"
                                fontFamily="Syne,sans-serif"
                                fontSize="13"
                                fontWeight="700"
                                textAnchor="middle"
                            >
                                TPI Next 16 キーエリア（継続的表現）
                            </text>
                            <rect
                                x="10"
                                y="38"
                                width="180"
                                height="24"
                                rx="4"
                                fill="rgba(6,182,212,0.15)"
                                stroke="rgba(6,182,212,0.4)"
                                strokeWidth="1"
                            />
                            <text
                                x="100"
                                y="55"
                                fill="#22d3ee"
                                fontFamily="Space Mono,monospace"
                                fontSize="9.5"
                                textAnchor="middle"
                                fontWeight="700"
                            >
                                キーエリア
                            </text>
                            <rect
                                x="200"
                                y="38"
                                width="130"
                                height="24"
                                rx="4"
                                fill="rgba(34,197,94,0.15)"
                                stroke="rgba(34,197,94,0.3)"
                                strokeWidth="1"
                            />
                            <text
                                x="265"
                                y="55"
                                fill="#4ade80"
                                fontFamily="Space Mono,monospace"
                                fontSize="9.5"
                                textAnchor="middle"
                                fontWeight="700"
                            >
                                Initial
                            </text>
                            <rect
                                x="340"
                                y="38"
                                width="130"
                                height="24"
                                rx="4"
                                fill="rgba(59,130,246,0.15)"
                                stroke="rgba(59,130,246,0.3)"
                                strokeWidth="1"
                            />
                            <text
                                x="405"
                                y="55"
                                fill="#60a5fa"
                                fontFamily="Space Mono,monospace"
                                fontSize="9.5"
                                textAnchor="middle"
                                fontWeight="700"
                            >
                                Controlled
                            </text>
                            <rect
                                x="480"
                                y="38"
                                width="130"
                                height="24"
                                rx="4"
                                fill="rgba(168,85,247,0.15)"
                                stroke="rgba(168,85,247,0.3)"
                                strokeWidth="1"
                            />
                            <text
                                x="545"
                                y="55"
                                fill="#c084fc"
                                fontFamily="Space Mono,monospace"
                                fontSize="9.5"
                                textAnchor="middle"
                                fontWeight="700"
                            >
                                Efficient
                            </text>
                            <rect
                                x="620"
                                y="38"
                                width="160"
                                height="24"
                                rx="4"
                                fill="rgba(245,158,11,0.15)"
                                stroke="rgba(245,158,11,0.3)"
                                strokeWidth="1"
                            />
                            <text
                                x="700"
                                y="55"
                                fill="#fbbf24"
                                fontFamily="Space Mono,monospace"
                                fontSize="9.5"
                                textAnchor="middle"
                                fontWeight="700"
                            >
                                Optimizing
                            </text>
                            <g fontFamily="IBM Plex Sans JP,sans-serif" fontSize="9" fill="#94a3b8">
                                <text x="100" y="82" textAnchor="middle">1. Test Strategy</text>
                                <text x="100" y="102" textAnchor="middle">2. Life Cycle Model</text>
                                <text x="100" y="122" textAnchor="middle">
                                    3. Moment of Involvement
                                </text>
                                <text x="100" y="142" textAnchor="middle">
                                    4. Estimating &amp; Planning
                                </text>
                                <text x="100" y="162" textAnchor="middle">
                                    5. Test Specification Techniques
                                </text>
                                <text x="100" y="182" textAnchor="middle">
                                    6. Static Test Techniques
                                </text>
                                <text x="100" y="202" textAnchor="middle">7. Metrics</text>
                                <text x="100" y="222" textAnchor="middle">8. Test Tools</text>
                                <text x="100" y="242" textAnchor="middle">9. Test Environment</text>
                                <text x="100" y="262" textAnchor="middle">10. Office Environment</text>
                                <text x="100" y="282" textAnchor="middle">
                                    11. Commitment &amp; Motivation
                                </text>
                                <text x="100" y="302" textAnchor="middle">
                                    12. Test Functions &amp; Training
                                </text>
                                <text x="100" y="322" textAnchor="middle">
                                    13. Scope of Methodology
                                </text>
                                <text x="100" y="342" textAnchor="middle">
                                    14-16. Communication / Reporting / Defect Mgmt
                                </text>
                            </g>
                            <g>
                                <rect
                                    x="205"
                                    y="74"
                                    width="80"
                                    height="10"
                                    rx="5"
                                    fill="rgba(34,197,94,0.5)"
                                />
                                <rect
                                    x="205"
                                    y="94"
                                    width="65"
                                    height="10"
                                    rx="5"
                                    fill="rgba(34,197,94,0.5)"
                                />
                                <rect
                                    x="205"
                                    y="114"
                                    width="95"
                                    height="10"
                                    rx="5"
                                    fill="rgba(34,197,94,0.5)"
                                />
                                <rect
                                    x="205"
                                    y="134"
                                    width="70"
                                    height="10"
                                    rx="5"
                                    fill="rgba(34,197,94,0.5)"
                                />
                                <rect
                                    x="345"
                                    y="74"
                                    width="90"
                                    height="10"
                                    rx="5"
                                    fill="rgba(59,130,246,0.5)"
                                />
                                <rect
                                    x="345"
                                    y="94"
                                    width="110"
                                    height="10"
                                    rx="5"
                                    fill="rgba(59,130,246,0.5)"
                                />
                                <rect
                                    x="345"
                                    y="154"
                                    width="85"
                                    height="10"
                                    rx="5"
                                    fill="rgba(59,130,246,0.5)"
                                />
                                <rect
                                    x="485"
                                    y="74"
                                    width="85"
                                    height="10"
                                    rx="5"
                                    fill="rgba(168,85,247,0.5)"
                                />
                                <rect
                                    x="485"
                                    y="114"
                                    width="100"
                                    height="10"
                                    rx="5"
                                    fill="rgba(168,85,247,0.5)"
                                />
                                <rect
                                    x="625"
                                    y="74"
                                    width="110"
                                    height="10"
                                    rx="5"
                                    fill="rgba(245,158,11,0.5)"
                                />
                                <rect
                                    x="625"
                                    y="134"
                                    width="120"
                                    height="10"
                                    rx="5"
                                    fill="rgba(245,158,11,0.5)"
                                />
                            </g>
                            <text
                                x="400"
                                y="356"
                                fill="#475569"
                                fontFamily="Space Mono,monospace"
                                fontSize="8"
                                textAnchor="middle"
                            >
                                各キーエリアは独立して改善可能（継続的表現の強み）
                            </text>
                        </svg>
                    </div>
                    <div className="section-divider">
                        <h3>TPI Next&reg; vs TMMi&reg; 詳細比較</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>観点</th>
                                    <th>TPI Next&reg;</th>
                                    <th>TMMi&reg;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>表現タイプ</td>
                                    <td><span className="pill pill-cyan">継続的表現</span></td>
                                    <td><span className="pill pill-amber">段階的表現</span></td>
                                </tr>
                                <tr>
                                    <td>テスト手法</td>
                                    <td>TMap&reg; Next を参照</td>
                                    <td>テスト手法独立</td>
                                </tr>
                                <tr>
                                    <td>SPI との関係</td>
                                    <td>正式な SPI モデルとの関係なし（マッピング可）</td>
                                    <td>CMMI と高度に相関</td>
                                </tr>
                                <tr>
                                    <td>強み</td>
                                    <td>ビジネス主導・テストエンジニアリングの両方をカバー</td>
                                    <td>管理コミットメントへの強いフォーカス</td>
                                </tr>
                                <tr>
                                    <td>フォーカス</td>
                                    <td>16 のキーエリアを独立して改善</td>
                                    <td>成熟度レベルごとのプロセスエリア達成</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CH4 */}
            <section className="section" id="ch4">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-4">CHAPTER 4</span>
                        <h2>分析ベース改善 <span className="k4">K4</span></h2>
                    </div>
                    <div className="callout info">
                        <div className="callout-icon">&#128300;</div>
                        <div className="callout-body">
                            <div className="callout-title">分析ベースアプローチの本質</div>
                            <div className="callout-text">
                                「ベストプラクティス」の汎用モデルではなく、<strong>実際の問題・ゴールに基づいて</strong>改善を決定する。客観的なデータ分析が本質であり、定性的評価だけでは不精確な推奨につながるリスクがある。
                            </div>
                        </div>
                    </div>
                    <div className="section-divider">
                        <h3>4.2 因果分析 — フィッシュボーン図の適用手順</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="step-list">
                        <div className="step-item">
                            <div className="step-num">1</div>
                            <div className="step-content">
                                <div className="step-title">効果（問題）を図の右側に記載</div>
                                <div className="step-desc">例：「本番環境での欠陥率が高い」</div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">2</div>
                            <div className="step-content">
                                <div className="step-title">リブ（骨）にカテゴリをラベル付け</div>
                                <div className="step-desc">
                                    People / Process / Technology / Method / Environment
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">3</div>
                            <div className="step-content">
                                <div className="step-title">ブレインストーミングのルール周知</div>
                                <div className="step-desc">批判なし・自由連想・量重視・全てを記録</div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">4</div>
                            <div className="step-content">
                                <div className="step-title">可能な原因をリブに追加</div>
                                <div className="step-desc">チェックリストを使用してルート原因を特定</div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">5</div>
                            <div className="step-content">
                                <div className="step-title">アイデアを一定期間熟成させる</div>
                                <div className="step-desc">
                                    熟成後に再度レビューすることで新たな洞察が生まれる
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">6</div>
                            <div className="step-content">
                                <div className="step-title">パレート分析で優先クラスターを特定</div>
                                <div className="step-desc">
                                    20%の努力で80%の改善を達成するクラスターを特定する
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="svg-wrap">
                        <svg
                            viewBox="0 0 680 260"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ maxWidth: '680px', width: '100%' }}
                        >
                            <rect width="680" height="260" fill="#0a0f1a" rx="8" />
                            <text
                                x="340"
                                y="22"
                                fill="#06b6d4"
                                fontFamily="Syne,sans-serif"
                                fontSize="12"
                                fontWeight="700"
                                textAnchor="middle"
                            >
                                フィッシュボーン図（因果ダイアグラム）
                            </text>
                            <line
                                x1="90"
                                y1="130"
                                x2="560"
                                y2="130"
                                stroke="#475569"
                                strokeWidth="2"
                            />
                            <polygon points="560,112 605,130 560,148" fill="#ef4444" opacity="0.8" />
                            <text
                                x="618"
                                y="126"
                                fill="#f87171"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="8.5"
                                textAnchor="start"
                            >
                                本番
                            </text>
                            <text
                                x="618"
                                y="138"
                                fill="#f87171"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="8.5"
                                textAnchor="start"
                            >
                                欠陥率高
                            </text>
                            <line
                                x1="175"
                                y1="130"
                                x2="130"
                                y2="68"
                                stroke="#22c55e"
                                strokeWidth="1.5"
                            />
                            <text
                                x="90"
                                y="62"
                                fill="#4ade80"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="9.5"
                                textAnchor="middle"
                                fontWeight="600"
                            >
                                People
                            </text>
                            <text
                                x="90"
                                y="76"
                                fill="#94a3b8"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="8.5"
                                textAnchor="middle"
                            >
                                スキル不足
                            </text>
                            <line
                                x1="300"
                                y1="130"
                                x2="255"
                                y2="68"
                                stroke="#3b82f6"
                                strokeWidth="1.5"
                            />
                            <text
                                x="220"
                                y="62"
                                fill="#60a5fa"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="9.5"
                                textAnchor="middle"
                                fontWeight="600"
                            >
                                Process
                            </text>
                            <text
                                x="220"
                                y="76"
                                fill="#94a3b8"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="8.5"
                                textAnchor="middle"
                            >
                                テスト設計不足
                            </text>
                            <line
                                x1="425"
                                y1="130"
                                x2="380"
                                y2="68"
                                stroke="#a855f7"
                                strokeWidth="1.5"
                            />
                            <text
                                x="345"
                                y="62"
                                fill="#c084fc"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="9.5"
                                textAnchor="middle"
                                fontWeight="600"
                            >
                                Technology
                            </text>
                            <text
                                x="345"
                                y="76"
                                fill="#94a3b8"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="8.5"
                                textAnchor="middle"
                            >
                                テストツールなし
                            </text>
                            <line
                                x1="200"
                                y1="130"
                                x2="155"
                                y2="192"
                                stroke="#f59e0b"
                                strokeWidth="1.5"
                            />
                            <text
                                x="115"
                                y="208"
                                fill="#fbbf24"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="9.5"
                                textAnchor="middle"
                                fontWeight="600"
                            >
                                Method
                            </text>
                            <text
                                x="115"
                                y="222"
                                fill="#94a3b8"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="8.5"
                                textAnchor="middle"
                            >
                                回帰テスト未実施
                            </text>
                            <line
                                x1="360"
                                y1="130"
                                x2="315"
                                y2="192"
                                stroke="#06b6d4"
                                strokeWidth="1.5"
                            />
                            <text
                                x="278"
                                y="208"
                                fill="#22d3ee"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="9.5"
                                textAnchor="middle"
                                fontWeight="600"
                            >
                                Environment
                            </text>
                            <text
                                x="278"
                                y="222"
                                fill="#94a3b8"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="8.5"
                                textAnchor="middle"
                            >
                                環境が不安定
                            </text>
                            <line
                                x1="480"
                                y1="130"
                                x2="435"
                                y2="192"
                                stroke="#22c55e"
                                strokeWidth="1.5"
                            />
                            <text
                                x="435"
                                y="208"
                                fill="#4ade80"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="9.5"
                                textAnchor="middle"
                                fontWeight="600"
                            >
                                Material
                            </text>
                            <text
                                x="435"
                                y="222"
                                fill="#94a3b8"
                                fontFamily="IBM Plex Sans JP"
                                fontSize="8.5"
                                textAnchor="middle"
                            >
                                テストデータ不足
                            </text>
                        </svg>
                    </div>
                    <div className="section-divider">
                        <h3>4.3 GQM（Goal-Question-Metric）アプローチ</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="arch-layers">
                        <div className="arch-layer amber">
                            <div className="arch-layer-title">Level 1: Goal（ゴール）— 概念レベル</div>
                            <div className="arch-layer-desc">
                                製品・プロセス・リソースへの組織の品質ゴール。例：「テスト有効性を向上させる」
                            </div>
                        </div>
                        <div className="arch-layer cyan">
                            <div className="arch-layer-title">Level 2: Question（質問）— 運用レベル</div>
                            <div className="arch-layer-desc">
                                品質に関してオブジェクトを特性付けする質問。例：「本番でどれだけの欠陥が発見されているか？」
                            </div>
                        </div>
                        <div className="arch-layer green">
                            <div className="arch-layer-title">
                                Level 3: Metric（メトリクス）— 定量的レベル
                            </div>
                            <div className="arch-layer-desc">
                                客観的（定量・事実）または主観的（定性・視点）。例：DDP = テスト検出欠陥
                                ÷ 全既知欠陥 × 100%
                            </div>
                        </div>
                    </div>
                    <div className="code-block" data-lang="GQM例">
                        <div className="code-line"><span className="code-keyword">Goal</span><span className="code-dim">:</span> テスト有効性の向上</div>
                        <div className="code-line"><span className="code-keyword">Question</span><span className="code-dim">:</span> 本番でどれだけの欠陥が発見されているか？</div>
                        <div className="code-line"><span className="code-keyword">Metric</span><span className="code-dim">:</span> DDP = <span className="code-cyan">テスト検出欠陥数</span> / (<span className="code-cyan">テスト検出</span> + <span className="code-red">リリース後発見</span>) × <span className="code-amber">100%</span></div>
                        <div className="code-line"><span className="code-comment">-- DDP 計算例 --</span></div>
                        <div className="code-line">テスト中に発見: <span className="code-green">90件</span> 本番で発見: <span className="code-red">10件</span></div>
                        <div className="code-line">DDP = <span className="code-green">90</span> / (90 + 10) × 100 = <span className="code-amber">90%</span></div>
                    </div>
                    <div className="section-divider">
                        <h3>4.4 主要テストメトリクス一覧</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>メトリクス</th>
                                    <th>計算式</th>
                                    <th>測定対象</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>DDP</strong>（欠陥検出率）</td>
                                    <td>テスト検出欠陥 ÷ 全既知欠陥 × 100%</td>
                                    <td>テスト有効性</td>
                                </tr>
                                <tr>
                                    <td><strong>Post-release Defect Rate</strong></td>
                                    <td>リリース後欠陥数 ÷ KLOC</td>
                                    <td>製品品質（顧客視点）</td>
                                </tr>
                                <tr>
                                    <td><strong>品質コスト比率</strong></td>
                                    <td>静的テスト工数 ÷ 動的テスト工数</td>
                                    <td>テスト効率</td>
                                </tr>
                                <tr>
                                    <td><strong>早期欠陥検出率</strong></td>
                                    <td>UT+IT 欠陥数 ÷ 全動的テスト欠陥数</td>
                                    <td>シフトレフト効果</td>
                                </tr>
                                <tr>
                                    <td><strong>相対テスト工数</strong></td>
                                    <td>総テスト工数 ÷ 総プロジェクト工数</td>
                                    <td>テストへの投資割合</td>
                                </tr>
                                <tr>
                                    <td><strong>自動化レベル</strong></td>
                                    <td>自動実行TC数 ÷ 全実行TC数</td>
                                    <td>自動化率</td>
                                </tr>
                                <tr>
                                    <td><strong>テスト工数スリップ</strong></td>
                                    <td>（実績 - 見積）÷ 見積 × 100%</td>
                                    <td>予測可能性</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">テスト中に検出（90件）</span>
                            <span className="progress-value">90% — DDP</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{ width: '90%', background: 'linear-gradient(90deg, #22c55e, #4ade80)' }}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">リリース後漏洩（10件）</span>
                            <span className="progress-value">10%</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{
                                    width: '10%',
                                    background: 'linear-gradient(90deg, #ef4444, #f87171)',
                                    animationDelay: '0.3s',
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CH5 */}
            <section className="section" id="ch5">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-5">CHAPTER 5</span>
                        <h2>テストプロセス改善アプローチの選択 <span className="k5">K5</span></h2>
                    </div>
                    <Mermaid chart={`flowchart TD
                            START["改善アプローチを選択"] --> Q1{"外部へ成熟度を証明する<br />必要がある？"}
                            Q1 -- "Yes" --> M["モデルベース<br />TMMi / TPI Next"]
                            Q1 -- "No" --> Q2{"特定の問題の根本原因を<br />特定したい？"}
                            Q2 -- "Yes" --> A["分析ベース<br />GQM / 因果分析"]
                            Q2 -- "No" --> Q3{"新しいテストプロセスを<br />ゼロから構築したい？"}
                            Q3 -- "Yes" --> C["コンテンツベース<br />CTP / STEP"]
                            Q3 -- "No（既存改善）" --> M

                            style START fill:#1a2234,stroke:#06b6d4,color:#f0f4f8
                            style Q1 fill:#1a1228,stroke:#a855f7,color:#f0f4f8
                            style Q2 fill:#1a1228,stroke:#a855f7,color:#f0f4f8
                            style Q3 fill:#1a1228,stroke:#a855f7,color:#f0f4f8
                            style M fill:#1a1228,stroke:#a855f7,color:#f0f4f8
                            style C fill:#0d2818,stroke:#22c55e,color:#f0f4f8
                            style A fill:#0d1a2e,stroke:#3b82f6,color:#f0f4f8`} />
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>アプローチ</th>
                                    <th>最適な状況</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>モデルベース</strong><br /><span className="pill pill-amber">TMMi / TPI Next</span>
                                    </td>
                                    <td>
                                        &#10003; テストプロセスが既に存在する &nbsp; &#10003;
                                        類似プロジェクト間での比較が必要 &nbsp; &#10003;
                                        SPIモデルとの互換性が必要 &nbsp; &#10003;
                                        特定成熟度レベル達成が会社ポリシー &nbsp; &#10003;
                                        外部へ成熟度をコミュニケーションしたい
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>コンテンツベース</strong><br /><span
                                            className="pill pill-cyan"
                                        >CTP / STEP</span>
                                    </td>
                                    <td>
                                        &#10003; テストプロセスを新規構築したい &nbsp; &#10003;
                                        現行テストコスト・リスクの評価が必要 &nbsp; &#10003;
                                        ビジネスニーズ順に改善したい &nbsp; &#10003;
                                        会社固有コンテキストへのテーラリングが必要 &nbsp; &#10003;
                                        非連続的・急速な改善が必要
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>分析ベース</strong><br /><span className="pill pill-green"
                                        >GQM / 因果分析</span>
                                    </td>
                                    <td>
                                        &#10003; 特定の問題を対象にする &nbsp; &#10003;
                                        測定値・メトリクスが利用可能 &nbsp; &#10003;
                                        変更の理由について合意が必要 &nbsp; &#10003;
                                        組織文化が内部分析による証拠を信頼する &nbsp; &#10003;
                                        問題の根本原因がプロセスオーナーの管理外
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CH6 */}
            <section className="section" id="ch6">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-6">CHAPTER 6</span>
                        <h2>改善プロセス（IDEALフレームワーク詳細） <span className="k6">K6</span></h2>
                    </div>
                    <div className="alert amber">
                        &#9733; 最重要章 — 試験配点の約26%。IDEALの各フェーズと活動を深く理解すること。
                    </div>
                    <div className="section-divider">
                        <h3>6.2 Initiating（開始）フェーズ</h3>
                        <div className="section-line"></div>
                    </div>
                    <Mermaid chart={`graph TD
                            I1["1. 改善の動機を特定<br />（ROI・ビジネス価値の明確化）"] --> I2["2. コンテキスト設定<br />スポンサーシップの確立"]
                            I2 --> I3["3. 改善インフラの構築<br />（TPGの組織化）"]
                            I3 --> I4["4. 改善スコープの設定<br />（全般的・テスト・プロジェクト範囲）"]
                            I4 --> I5["5. 改善戦略の選択<br />（Chapter 5 参照）"]

                            style I1 fill:#0d1a2e,stroke:#3b82f6,color:#f0f4f8
                            style I2 fill:#0d1a2e,stroke:#3b82f6,color:#f0f4f8
                            style I3 fill:#0d1a2e,stroke:#3b82f6,color:#f0f4f8
                            style I4 fill:#0d1a2e,stroke:#3b82f6,color:#f0f4f8
                            style I5 fill:#0d1a2e,stroke:#3b82f6,color:#f0f4f8`} />
                    <div className="grid-2">
                        <div className="info-card">
                            <h4>&#127963; プロジェクト中心（Program-centric）</h4>
                            <ul style={{ fontSize: '0.85rem' }}>
                                <li>特定プロジェクトに集中</li>
                                <li>比較的素早い結果が得られる</li>
                                <li style={{ color: 'var(--neon-amber)' }}>
                                    組織レベルの問題を解決できない可能性
                                </li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h4>&#127970; 組織中心（Organization-centric）</h4>
                            <ul style={{ fontSize: '0.85rem' }}>
                                <li>組織全体の改善</li>
                                <li>長期的・広範な効果が期待できる</li>
                                <li style={{ color: 'var(--neon-amber)' }}>時間・コストがかかる</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-divider">
                        <h3>6.3 Diagnosing（診断）フェーズ</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="trend-card">
                        <h4>評価計画（Assessment Plan）に含める内容</h4>
                        <div className="arch-layers" style={{ marginTop: '1rem' }}>
                            <div className="arch-layer cyan">
                                <div className="arch-layer-title">評価準備</div>
                                <div className="arch-layer-desc">
                                    予備分析・インタビュー資料（チェックリスト）の準備・既存テスト成果物の収集（テスト計画・仕様・報告書等）
                                </div>
                            </div>
                            <div className="arch-layer green">
                                <div className="arch-layer-title">インタビュー計画</div>
                                <div className="arch-layer-desc">
                                    対象役割の特定（テスター・TM・開発者・PM・BA・ドメイン専門家等）・各インタビューのカバー領域の定義
                                </div>
                            </div>
                            <div className="arch-layer blue">
                                <div className="arch-layer-title">フィードバック計画</div>
                                <div className="arch-layer-desc">
                                    初期フィードバックの提供方法・日程の設定
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="compare-grid">
                        <div className="compare-box good">
                            <div className="compare-label">&#10003; 良い例（インタビュー）</div>
                            <ul
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    marginTop: '0.5rem',
                                }}
                            >
                                <li>個別インタビューを実施する</li>
                                <li>機密保持を保証する</li>
                                <li>上司のいない場所でインタビューする</li>
                                <li>情報の使い方を明確に説明する</li>
                                <li>改善アイデアを評価・認識する</li>
                            </ul>
                        </div>
                        <div className="compare-box bad">
                            <div className="compare-label">&#10007; 悪い例（避けるべき）</div>
                            <ul
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    marginTop: '0.5rem',
                                }}
                            >
                                <li>グループインタビューで実施する</li>
                                <li>特定問題への責任追及（blame）をする</li>
                                <li>罰則への恐怖を与える</li>
                                <li>匿名性を保証しない</li>
                                <li>上司の前でインタビューする</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-divider">
                        <h3>6.4 Establishing（確立）フェーズ — 優先順位付け基準</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>基準</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className="pill pill-red">重要性</span></td>
                                    <td>ビジネスへの影響度</td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-green">実現可能性</span></td>
                                    <td>実装の容易さ・リソースの利用可能性</td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-amber">コスト効果</span></td>
                                    <td>ROI — 投資に対する効果の比率</td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-cyan">緊急性</span></td>
                                    <td>タイムライン要件・外部制約</td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-blue">リスク</span></td>
                                    <td>実施・未実施それぞれのリスク</td>
                                </tr>
                                <tr>
                                    <td><span className="pill pill-red">依存性</span></td>
                                    <td>他の改善アイテムへの依存関係</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="section-divider">
                        <h3>6.5 Acting（実施）フェーズ — パイロット選定基準</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="step-list">
                        <div className="step-item">
                            <div className="step-num">&#10003;</div>
                            <div className="step-content">
                                <div className="step-title">組織の典型例となるプロジェクト</div>
                                <div className="step-desc">
                                    極端に特殊なプロジェクトではなく、平均的なプロジェクトを選ぶ
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">&#10003;</div>
                            <div className="step-content">
                                <div className="step-title">変更に前向きなチームメンバー</div>
                                <div className="step-desc">
                                    「チャンピオン」となるメンバーがいることが重要
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">&#10003;</div>
                            <div className="step-content">
                                <div className="step-title">明確な成功基準が定義できる</div>
                                <div className="step-desc">
                                    改善前後の比較ができるメトリクスを事前に定義する
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">&#10003;</div>
                            <div className="step-content">
                                <div className="step-title">マネジメントのサポートがある</div>
                                <div className="step-desc">
                                    リソース（時間・予算）の確保を上位層が確約している
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CH7 */}
            <section className="section" id="ch7">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-7">CHAPTER 7</span>
                        <h2>組織・役割・スキル <span className="k3">K3</span></h2>
                    </div>
                    <div className="section-divider">
                        <h3>7.1 テストプロセスグループ（TPG）</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="info-card">
                        <h4>TPG（Test Process Group）の主な活動</h4>
                        <ul style={{ marginTop: '0.5rem' }}>
                            <li>テストプロセスの標準化と文書化</li>
                            <li>テストプロセスの評価と改善</li>
                            <li>テストプロセスの組織展開支援</li>
                            <li>トレーニング・コーチングの調整</li>
                            <li>改善効果の測定・報告</li>
                        </ul>
                    </div>
                    <div className="section-divider">
                        <h3>7.3 テストプロセス改善者の必須スキルセット</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>スキル領域</th>
                                    <th>内容</th>
                                    <th>具体的な技法</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>インタビュースキル</strong></td>
                                    <td>対象者から効果的に情報を引き出す</td>
                                    <td>開放型・閉鎖型・深掘り・仮定型質問</td>
                                </tr>
                                <tr>
                                    <td><strong>傾聴スキル</strong></td>
                                    <td>アクティブリスニング・非言語サインの観察</td>
                                    <td>確認・要約・判断保留</td>
                                </tr>
                                <tr>
                                    <td><strong>プレゼンテーション</strong></td>
                                    <td>複雑な結果を明確・簡潔に伝える</td>
                                    <td>オーディエンス別の適応</td>
                                </tr>
                                <tr>
                                    <td><strong>分析スキル</strong></td>
                                    <td>複雑な問題の構造化と分解</td>
                                    <td>パターン特定・推論・結論導出</td>
                                </tr>
                                <tr>
                                    <td><strong>説得スキル</strong></td>
                                    <td>ステークホルダーの買い込みを得る</td>
                                    <td>ROI 提示・抵抗への対処</td>
                                </tr>
                                <tr>
                                    <td><strong>管理スキル</strong></td>
                                    <td>プロジェクト・リソース・ステークホルダー管理</td>
                                    <td>進捗追跡・リスク管理</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="section-divider">
                        <h3>インタビュー質問タイプの使い分け</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="exam-grid">
                        <div className="exam-card">
                            <div className="exam-card-title">&#128172; 開放型質問</div>
                            <div className="exam-card-desc">
                                幅広い回答を引き出す。全体像の把握に有効。<br />
                                <em>「テスト計画プロセスはどのように機能していますか？」</em>
                            </div>
                            <div className="star-rating">
                                <span className="star filled">&#9733;</span>
                                <span className="star filled">&#9733;</span>
                                <span className="star filled">&#9733;</span>
                                <span className="star filled">&#9733;</span>
                                <span className="star filled">&#9733;</span>
                            </div>
                        </div>
                        <div className="exam-card">
                            <div className="exam-card-title">&#128196; 閉鎖型質問</div>
                            <div className="exam-card-desc">
                                Yes/No または短い回答。特定事実の確認に有効。<br />
                                <em>「テストケースはレビューされていますか？」</em>
                            </div>
                            <div className="star-rating">
                                <span className="star filled">&#9733;</span>
                                <span className="star filled">&#9733;</span>
                                <span className="star filled">&#9733;</span>
                                <span className="star empty">&#9733;</span>
                                <span className="star empty">&#9733;</span>
                            </div>
                        </div>
                        <div className="exam-card">
                            <div className="exam-card-title">&#128270; 深掘り質問</div>
                            <div className="exam-card-desc">
                                詳細を引き出す。開放型の次のステップとして使用。<br />
                                <em>「どのようなツールを使用していますか？」</em>
                            </div>
                            <div className="star-rating">
                                <span className="star filled">&#9733;</span>
                                <span className="star filled">&#9733;</span>
                                <span className="star filled">&#9733;</span>
                                <span className="star filled">&#9733;</span>
                                <span className="star empty">&#9733;</span>
                            </div>
                        </div>
                        <div className="exam-card">
                            <div className="exam-card-title">&#129300; 仮定型質問</div>
                            <div className="exam-card-desc">
                                シナリオを探る。変化への対応力を測るのに有効。<br />
                                <em>「もし優先度が変わったらどうしますか？」</em>
                            </div>
                            <div className="star-rating">
                                <span className="star filled">&#9733;</span>
                                <span className="star filled">&#9733;</span>
                                <span className="star filled">&#9733;</span>
                                <span className="star empty">&#9733;</span>
                                <span className="star empty">&#9733;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CH8 */}
            <section className="section" id="ch8">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-8">CHAPTER 8</span>
                        <h2>変更管理（Managing Change） <span className="k4">K4</span></h2>
                    </div>
                    <div className="callout danger">
                        <div className="callout-icon">&#9888;</div>
                        <div className="callout-body">
                            <div className="callout-title">変更管理なしの改善は失敗する</div>
                            <div className="callout-text">
                                テストプロセス改善 =
                                変更の実施。人は変化に抵抗する傾向があり、技術的な変更だけでなく、人・文化・プロセスの変更管理が不可欠。変更管理を欠いた改善の多くは実施後に元に戻る。
                            </div>
                        </div>
                    </div>
                    <div className="section-divider">
                        <h3>人間の変化への感情的反応フロー</h3>
                        <div className="section-line"></div>
                    </div>
                    <Mermaid chart={`graph LR
                            S1["衝撃・否定<br />Shock/Denial"] --> S2["抵抗<br />Resistance"]
                            S2 --> S3["探索<br />Explore"]
                            S3 --> S4["コミットメント<br />Commitment"]

                            style S1 fill:#1a0d0d,stroke:#ef4444,color:#f0f4f8
                            style S2 fill:#1a1200,stroke:#f59e0b,color:#f0f4f8
                            style S3 fill:#0d1a2e,stroke:#3b82f6,color:#f0f4f8
                            style S4 fill:#0d2818,stroke:#22c55e,color:#f0f4f8`} />
                    <div className="section-divider">
                        <h3>コッターの8段階変革プロセス</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="step-list">
                        <div className="step-item">
                            <div className="step-num">1</div>
                            <div className="step-content">
                                <div className="step-title">緊急性の確立</div>
                                <div className="step-desc">
                                    「なぜ今変わる必要があるのか」を明確に伝え、変化への緊迫感を醸成する
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">2</div>
                            <div className="step-content">
                                <div className="step-title">強力な連携チームの形成</div>
                                <div className="step-desc">
                                    変化を推進できる強力なスポンサー・チャンピオンを集める
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">3</div>
                            <div className="step-content">
                                <div className="step-title">ビジョンの創造</div>
                                <div className="step-desc">改善後の姿を明確なビジョンとして定義する</div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">4</div>
                            <div className="step-content">
                                <div className="step-title">ビジョンのコミュニケーション</div>
                                <div className="step-desc">
                                    全ステークホルダーにビジョンを繰り返し伝える
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">5</div>
                            <div className="step-content">
                                <div className="step-title">行動できる環境の整備</div>
                                <div className="step-desc">
                                    障害を取り除き、変化に沿った行動を可能にする
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">6</div>
                            <div className="step-content">
                                <div className="step-title">短期的成果の計画・達成</div>
                                <div className="step-desc">
                                    早期に可視化できる改善成果を計画し達成する（Quick Win）
                                </div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">7</div>
                            <div className="step-content">
                                <div className="step-title">改善の統合・変化の促進</div>
                                <div className="step-desc">初期成功を基盤に変化を加速させる</div>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-num">8</div>
                            <div className="step-content">
                                <div className="step-title">新しいアプローチの組織定着</div>
                                <div className="step-desc">
                                    変化を組織文化・プロセスの一部として固定化する
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-divider">
                        <h3>抵抗の原因と対処策</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>抵抗の原因</th>
                                    <th>対処策</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>利益がわからない（「なぜ変わる必要があるのか？」）</td>
                                    <td>ROI・具体的な利益を数値で示す</td>
                                </tr>
                                <tr>
                                    <td>能力・スキルへの不安</td>
                                    <td>トレーニング・コーチング・サポートを提供する</td>
                                </tr>
                                <tr>
                                    <td>現行の作業方法への慣れ</td>
                                    <td>設計プロセスに関係者を巻き込む（参加型アプローチ）</td>
                                </tr>
                                <tr>
                                    <td>信頼の欠如（上位管理層・変更エージェントへの）</td>
                                    <td>透明性のあるコミュニケーション・早期の成功事例を共有</td>
                                </tr>
                                <tr>
                                    <td>過去の失敗した改善経験</td>
                                    <td>今回の改善の違いと対策を明確に伝える</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CH9 */}
            <section className="section" id="ch9">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-9">CHAPTER 9</span>
                        <h2>重要成功要因（Critical Success Factors） <span className="k4">K4</span></h2>
                    </div>
                    <div className="arch-layers">
                        <div className="arch-layer amber">
                            <div className="arch-layer-title">
                                &#127882; 1. マネジメントのコミットメントとサポート（最重要）
                            </div>
                            <div className="arch-layer-desc">
                                上位管理層のスポンサーシップ、リソース（時間・予算・人材）の提供、変更へのコミットメントの可視化
                            </div>
                        </div>
                        <div className="arch-layer cyan">
                            <div className="arch-layer-title">&#127919; 2. 明確なビジョンと目標</div>
                            <div className="arch-layer-desc">
                                なぜ改善するのかの明確な理由、測定可能な成功基準、ビジネスゴールとの整合
                            </div>
                        </div>
                        <div className="arch-layer green">
                            <div className="arch-layer-title">&#128200; 3. 適切なリソースの確保</div>
                            <div className="arch-layer-desc">
                                専任の改善チーム（TPG）、十分な予算、必要なツール・インフラ
                            </div>
                        </div>
                        <div className="arch-layer blue">
                            <div className="arch-layer-title">
                                &#129489; 4. ステークホルダーの関与・参加
                            </div>
                            <div className="arch-layer-desc">
                                関係者全員の早期参加、コミュニケーションの透明性、定期的なフィードバック
                            </div>
                        </div>
                        <div className="arch-layer purple">
                            <div className="arch-layer-title">
                                &#128640; 5. 段階的・管理されたアプローチ
                            </div>
                            <div className="arch-layer-desc">
                                小さく始めてスケールアップ（パイロット活用）、継続的なモニタリング
                            </div>
                        </div>
                        <div className="arch-layer red">
                            <div className="arch-layer-title">&#127891; 6. 知識・スキルの構築</div>
                            <div className="arch-layer-desc">
                                適切なトレーニング、コーチング・メンタリング、専門知識の活用
                            </div>
                        </div>
                    </div>
                    <div className="section-divider">
                        <h3>バランスドスコアカード（BSC）との整合</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>BSC 観点</th>
                                    <th>テスト改善目標の例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>&#128200; 財務</td>
                                    <td>テストコストの削減、生産性向上、ROI改善</td>
                                </tr>
                                <tr>
                                    <td>&#128101; 顧客</td>
                                    <td>市場シェア向上、顧客満足度向上</td>
                                </tr>
                                <tr>
                                    <td>&#9881; 内部プロセス</td>
                                    <td>プロジェクト予測可能性の向上、欠陥削減</td>
                                </tr>
                                <tr>
                                    <td>&#127891; 学習・成長</td>
                                    <td>新技術の習得、TMMi 認定取得</td>
                                </tr>
                                <tr>
                                    <td>&#129489; 人材</td>
                                    <td>職務満足向上、離職率削減</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CH10 */}
            <section className="section" id="ch10">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-10">CHAPTER 10</span>
                        <h2>異なるライフサイクルモデルへの適応 <span className="k2">K2</span></h2>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>SDLCモデル</th>
                                    <th>テスト改善の適応方法</th>
                                    <th>改善サイクルのタイミング</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>ウォーターフォール / V字</strong></td>
                                    <td>フェーズ間ゲートレビュー, フェーズ終了時レトロスペクティブ</td>
                                    <td>フェーズ終了時・プロジェクト完了後</td>
                                </tr>
                                <tr>
                                    <td><strong>アジャイル（Scrum）</strong></td>
                                    <td>
                                        スプリントレトロスペクティブが継続的改善ループ。TMMi / TPI Next
                                        はアジャイルでも適用可
                                    </td>
                                    <td>毎スプリント（2週間ごと）</td>
                                </tr>
                                <tr>
                                    <td><strong>ハイブリッド</strong></td>
                                    <td>各部分に適した改善サイクルを適用</td>
                                    <td>
                                        ウォーターフォール部：フェーズ後 / アジャイル部：スプリント後
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>DevOps / CI/CD</strong></td>
                                    <td>
                                        継続的テストと継続的改善を統合。自動化されたメトリクス収集・フィードバックループ
                                    </td>
                                    <td>コードプッシュのたびに自動評価</td>
                                </tr>
                                <tr>
                                    <td><strong>探索的テスト</strong></td>
                                    <td>
                                        各テストセッション後の評価。セッションベーステスト管理での継続改善
                                    </td>
                                    <td>各セッション後（60〜90分ごと）</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout success">
                        <div className="callout-icon">&#10004;</div>
                        <div className="callout-body">
                            <div className="callout-title">アジャイルにおける TMMi / TPI Next の適用</div>
                            <div className="callout-text">
                                TMMi と TPI Next
                                はウォーターフォール専用ではない。アジャイルコンテキストでも適用可能。スプリントレトロスペクティブが
                                IDEAL フレームワークの「Learning」フェーズの役割を担う。
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXAM TIPS */}
            <section className="section" id="exam">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-0">試験対策</span>
                        <h2>サンプル問題・試験頻出ポイント</h2>
                    </div>
                    <div className="trend-card">
                        <h4>問1 <span className="k5">K5</span> — TMMi vs TPI Next の選択</h4>
                        <p>
                            大規模な金融機関でサプライヤーから「TMMi Level
                            3以上の認定が必要」と要求されており、CMMI
                            を既に導入している。最適なアプローチはどれか？
                        </p>
                        <div className="alert amber">
                            &#9733; A) TPI Next　B) <strong>TMMi &#10003;</strong>　C) STEP　D)
                            分析ベースのみ
                        </div>
                        <p style={{ fontSize: '0.85rem' }}>
                            <strong>理由：</strong>サプライヤーが「TMMi Level 3」という特定レベルを要求
                            → 段階的表現が有利。CMMI と高度に相関 →
                            統合しやすい。外部へ成熟度をコミュニケーションする必要がある。
                        </p>
                    </div>
                    <div className="trend-card">
                        <h4>問2 <span className="k3">K3</span> — DDP の計算</h4>
                        <p>
                            テスト中に75件の欠陥が発見され、リリース後3ヶ月間に25件の欠陥がユーザーに発見された。DDP
                            を計算せよ。
                        </p>
                        <div className="code-block" data-lang="計算">
                            <div className="code-line">DDP = <span className="code-cyan">75</span> / (<span className="code-cyan">75</span> + <span className="code-red">25</span>) × 100 = <span className="code-amber">75%</span> ← 正解</div>
                            <div className="code-line">全既知欠陥数 = テスト検出75 + リリース後25 = <span className="code-amber">100件</span></div>
                        </div>
                        <div className="alert amber">
                            DDP 75% — 業界目標 90% 以上には達していない → さらなる改善が必要
                        </div>
                    </div>
                    <div className="trend-card">
                        <h4>問3 <span className="k4">K4</span> — アプローチの選択</h4>
                        <p>
                            テスト中に同種の欠陥が繰り返し発生。根本原因を特定したい。データは収集できる環境にある。
                        </p>
                        <div className="alert green">
                            &#10003; C) <strong>分析的アプローチ（因果分析・GQM等）</strong> が正解
                        </div>
                        <p style={{ fontSize: '0.85rem' }}>
                            <strong>理由：</strong>特定問題を対象にしている &#10003; /
                            メトリクスが利用可能 &#10003; / 変更の理由について合意が必要 &#10003; →
                            分析ベースの3条件に合致
                        </p>
                    </div>
                    <div className="section-divider">
                        <h3>試験頻出トピック 重要度ランキング</h3>
                        <div className="section-line"></div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">IDEAL フレームワーク（全フェーズ）</span>
                            <span className="progress-value">★★★ 最重要</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{
                                    width: '100%',
                                    background: 'linear-gradient(90deg, #ef4444, #f87171)',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">TMMi 成熟度レベル + プロセスエリア</span>
                            <span className="progress-value">★★★</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{
                                    width: '100%',
                                    background: 'linear-gradient(90deg, #ef4444, #f87171)',
                                    animationDelay: '0.15s',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">TPI Next 16キーエリア + 成熟度</span>
                            <span className="progress-value">★★★</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{
                                    width: '95%',
                                    background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                                    animationDelay: '0.3s',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">TMMi vs TPI Next 比較・適用判断</span>
                            <span className="progress-value">★★★</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{
                                    width: '95%',
                                    background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                                    animationDelay: '0.45s',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">GQM アプローチの適用</span>
                            <span className="progress-value">★★★</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{
                                    width: '90%',
                                    background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                                    animationDelay: '0.6s',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">DDP 等メトリクスの計算・解釈</span>
                            <span className="progress-value">★★</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{
                                    width: '72%',
                                    background: 'linear-gradient(90deg, #22c55e, #4ade80)',
                                    animationDelay: '0.75s',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">変更管理・コッターの8段階</span>
                            <span className="progress-value">★★</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{
                                    width: '65%',
                                    background: 'linear-gradient(90deg, #22c55e, #4ade80)',
                                    animationDelay: '0.9s',
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REFS */}
            <section className="section" id="refs">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num ch-0">参考文献</span>
                        <h2>参照URL一覧（全件）</h2>
                    </div>
                    <div className="ref-grid">
                        <a
                            href="https://istqb.org/certifications/certified-tester-expert-level-assessing-test-processes-ctel-itp-atp/"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#127960; ISTQB 公式</div>
                            <div className="ref-title">CTEL-ITP-ATP 公式認定ページ</div>
                            <div className="ref-url">istqb.org/certifications/ctel-itp-atp/</div>
                        </a>
                        <a
                            href="https://istqb.org/wp-content/uploads/2024/11/ISTQB-CTEL-ITP_Syllabus_v1.0_2011.pdf"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#128196; シラバス</div>
                            <div className="ref-title">CTEL-ITP シラバス PDF（v2011）</div>
                            <div className="ref-url">
                                istqb.org/.../ISTQB-CTEL-ITP_Syllabus_v1.0_2011.pdf
                            </div>
                        </a>
                        <a
                            href="https://isqi.org/ISTQB-CTEL-ITP-Part-1-Assessing-the-Test-Process/CT-EL-ITP-MCQ-P1.122"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#128203; 試験予約</div>
                            <div className="ref-title">iSQI — CTEL-ITP-ATP Part 1 試験</div>
                            <div className="ref-url">isqi.org/.../CT-EL-ITP-MCQ-P1.122</div>
                        </a>
                        <a
                            href="https://isqi.org/ISTQB-CTEL-ITP-Part-2-Implementing-Test-Process-Improvement/CT-EL-ITP-MCQ-P2.26"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#128203; 試験予約</div>
                            <div className="ref-title">iSQI — CTEL-ITP-ITPI Part 2 試験</div>
                            <div className="ref-url">isqi.org/.../CT-EL-ITP-MCQ-P2.26</div>
                        </a>
                        <a href="https://www.tmmi.org/" className="ref-card" target="_blank" rel="noopener">
                            <div className="ref-category">&#127970; TMMi 公式</div>
                            <div className="ref-title">TMMi Foundation 公式サイト</div>
                            <div className="ref-url">tmmi.org</div>
                        </a>
                        <a
                            href="https://www.tmmi.org/tmmi-model/"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#127970; TMMi 公式</div>
                            <div className="ref-title">TMMi Model（無料ダウンロード）</div>
                            <div className="ref-url">tmmi.org/tmmi-model/</div>
                        </a>
                        <a
                            href="https://www.sogeti.com/explore/books/tpi-next/"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#128218; TPI Next</div>
                            <div className="ref-title">TPI Next 公式書籍（Sogeti）</div>
                            <div className="ref-url">sogeti.com/explore/books/tpi-next/</div>
                        </a>
                        <a
                            href="https://cmmiinstitute.com/"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#128736; プロセス改善</div>
                            <div className="ref-title">CMMI Institute</div>
                            <div className="ref-url">cmmiinstitute.com</div>
                        </a>
                        <a
                            href="https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#127891; 前提資格</div>
                            <div className="ref-title">CTAL-TM v3.0（必須前提）</div>
                            <div className="ref-url">istqb.org/.../ctal-tm-v3-0/</div>
                        </a>
                        <a
                            href="https://istqb.org/certifications/certified-tester-expert-level-implementing-test-process-improvement-ctel-itp-itpi/"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#127960; ISTQB 公式</div>
                            <div className="ref-title">CTEL-ITP-ITPI（Part 2）</div>
                            <div className="ref-url">istqb.org/.../ctel-itp-itpi/</div>
                        </a>
                        <a
                            href="https://isqi.org/TMMi-Test-Process-Improver-TMMi-TPI/SP-138.210"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#127882; 認定</div>
                            <div className="ref-title">TMMi-TPI Test Process Improver 認定</div>
                            <div className="ref-url">isqi.org/.../TMMi-TPI/SP-138.210</div>
                        </a>
                        <a
                            href="https://acumenph.com/courses/certified-tester-expert-level-assessing-test-processes-ctel-itp-atp/"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#127979; トレーニング</div>
                            <div className="ref-title">Acumen IT — CTEL-ITP-ATP コース詳細</div>
                            <div className="ref-url">acumenph.com/.../ctel-itp-atp/</div>
                        </a>
                        <a
                            href="https://testmocks.com/exams/istqb-ctel-itp-atp/"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#128221; 模擬試験</div>
                            <div className="ref-title">TestMocks — CTEL-ITP-ATP 模擬試験</div>
                            <div className="ref-url">testmocks.com/exams/istqb-ctel-itp-atp/</div>
                        </a>
                        <a href="https://www.efqm.org/" className="ref-card" target="_blank" rel="noopener">
                            <div className="ref-category">&#128736; 品質標準</div>
                            <div className="ref-title">EFQM Excellence Model</div>
                            <div className="ref-url">efqm.org</div>
                        </a>
                        <a
                            href="https://glossary.istqb.org/en_US/search?term="
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#127960; ISTQB 公式</div>
                            <div className="ref-title">ISTQB グロッサリー</div>
                            <div className="ref-url">glossary.istqb.org</div>
                        </a>
                        <a
                            href="https://istqb.org/certifications/certified-tester-foundation-level/"
                            className="ref-card"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="ref-category">&#127891; 前提資格</div>
                            <div className="ref-title">CTFL v4.0（Foundation Level）</div>
                            <div className="ref-url">istqb.org/.../ctfl/</div>
                        </a>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>
                        &#128274; CTEL-ITP-ATP Expert Level Guide 2025 | ISTQB&reg; 公式シラバス v2011
                        準拠
                    </p>
                    <p style={{ marginTop: '0.3rem' }}>
                        本ガイドはISTQB&reg;が公認したトレーニング資料ではありません。公式シラバス・サンプル試験問題と合わせてご使用ください。最終確認は必ず
                        <a href="https://istqb.org" target="_blank" rel="noopener">istqb.org</a>
                        で行ってください。
                    </p>
                </div>
            </footer>
        </div>
    );
}
