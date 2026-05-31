import React from 'react';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './istqb-ctel-tm-sm-complete-guide.css';

export default function IstqbCtelTmSmCompleteGuide() {
    return (
        <div className="istqb-ctel-tm-sm-page">
            <NavBar />
            
            <main>
                {/* HERO */}
                <section className="hero" id="intro">
                    <div className="hero-badge">ISTQB® EXPERT LEVEL · 2025</div>
                    <h1>CTEL-TM-SM<br />完全ガイド</h1>
                    <p className="hero-sub">Expert Level Test Management — Strategic Test Management<br />初学者から実践者まで対応するステップバイステップ解説</p>
                    <div className="hero-meta">
                        <span className="meta-chip"><span className="dot"></span> 試験: 14問 / 45分</span>
                        <span className="meta-chip"><span className="dot"></span> 合格: 23/35点（65.7%）</span>
                        <span className="meta-chip"><span className="dot"></span> 有効期限: 7年間</span>
                        <span className="meta-chip"><span className="dot"></span> 前提: CTFL + CTAL-TM</span>
                    </div>
                </section>

                {/* TOC */}
                <section>
                    <h3>📋 目次</h3>
                    <div className="toc-grid">
                        <a className="toc-card" href="#ch1">
                            <div className="toc-card-num">CHAPTER 01</div>
                            <div className="toc-card-title">テストのミッション・ポリシー・戦略・目標</div>
                        </a>
                        <a className="toc-card" href="#ch2">
                            <div className="toc-card-num">CHAPTER 02</div>
                            <div className="toc-card-title">外部関係の管理</div>
                        </a>
                        <a className="toc-card" href="#ch3">
                            <div className="toc-card-num">CHAPTER 03</div>
                            <div className="toc-card-title">組織全体にわたるテスト管理</div>
                        </a>
                        <a className="toc-card" href="#ch4">
                            <div className="toc-card-num">CHAPTER 04</div>
                            <div className="toc-card-title">ドメイン・プロジェクト要因の考慮事項</div>
                        </a>
                        <a className="toc-card" href="#ch5">
                            <div className="toc-card-num">CHAPTER 05</div>
                            <div className="toc-card-title">有効性・効率性・満足度の評価</div>
                        </a>
                        <a className="toc-card" href="#exam">
                            <div className="toc-card-num">EXAM</div>
                            <div className="toc-card-title">試験対策・サンプル問題</div>
                        </a>
                    </div>
                </section>

                {/* OVERVIEW */}
                <div className="callout info">
                    <div className="callout-title">📌 CTEL-TM-SM とは？</div>
                    <p style={{ margin: "0" }}>ISTQB® Expert Level Test Management の Part 1（Strategic Test Management）は、テスト管理をCEO・取締役会レベルで推進するための戦略的スキルを認定します。組織全体のテストミッション設定・テストポリシー策定・外部関係管理・組織横断的な品質推進が学習の中心です。</p>
                </div>

                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-value">14</div>
                        <div className="metric-label">試験問題数</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value" style={{ color: "var(--neon-cyan)" }}>35</div>
                        <div className="metric-label">総点数</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value" style={{ color: "var(--neon-purple)" }}>23</div>
                        <div className="metric-label">合格最低点</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value" style={{ color: "var(--neon-amber)" }}>7年</div>
                        <div className="metric-label">証明書有効期限</div>
                    </div>
                </div>

                <h3>🎯 資格体系におけるCTEL-TM-SMの位置づけ</h3>
                <div className="mermaid-wrap">
                    <Mermaid chart={`graph TD
    FL["🟢 FOUNDATION LEVEL<br/>CTFL v4.0<br/>前提資格①"]
    AL["🔵 ADVANCED LEVEL<br/>CTAL-TM v3.0<br/>前提資格②"]
    P1["⭐ PART 1: SM<br/>Strategic Test Management<br/>本ガイド対象"]
    P2["PART 2: OTM<br/>Operational Test Management"]
    P3["PART 3: MTT<br/>Managing the Test Team"]
    CERT["🏆 CTEL-TM フル認定<br/>3パート全て合格"]

    FL --> AL
    AL --> P1
    AL --> P2
    AL --> P3
    P1 --> CERT
    P2 --> CERT
    P3 --> CERT

    style P1 fill:#00ff88,color:#030712,stroke:#00ff88
    style CERT fill:#bf5af2,color:#fff,stroke:#bf5af2
    style FL fill:#0a84ff,color:#fff,stroke:#0a84ff
    style AL fill:#00d4ff,color:#030712,stroke:#00d4ff`} />
                </div>

                <h3>📊 10のビジネスアウトカム</h3>
                <div className="arch-layers">
                    <div className="arch-layer">
                        <div className="arch-layer-title">BO1 · CEO/取締役会レベルのリーダーシップ</div>
                        <div className="arch-layer-desc">組織・プロジェクト内のテスト管理をCEO・取締役会レベルのコミットメントでリードし、重要成功要因を特定・管理できる</div>
                    </div>
                    <div className="arch-layer">
                        <div className="arch-layer-title">BO2 · 品質KPIに基づくビジネス意思決定</div>
                        <div className="arch-layer-desc">テスト管理戦略においてビジネス主導の意思決定を行い、品質KPIに基づいて組織全体のコンプライアンスを実施できる</div>
                    </div>
                    <div className="arch-layer">
                        <div className="arch-layer-title">BO3 · テスト成熟度の評価と改善提案</div>
                        <div className="arch-layer-desc">テスト管理の現状を評価し、段階的な改善を提案し、それらがビジネス目標達成にどう連動するかを示せる</div>
                    </div>
                    <div className="arch-layer">
                        <div className="arch-layer-title">BO4 · 戦略的テストポリシーの策定・実施</div>
                        <div className="arch-layer-desc">テスト管理とテスティングを改善するための戦略的ポリシーを策定し、組織内でそのポリシーを実施できる</div>
                    </div>
                    <div className="arch-layer">
                        <div className="arch-layer-title">BO5 〜 BO10 · その他のアウトカム</div>
                        <div className="arch-layer-desc">マスターテスト計画の作成、ツール統合、標準プロセスの確立、変更管理のリード、人的問題の管理など</div>
                    </div>
                </div>

                <hr />

                {/* CHAPTER 1 */}
                <section id="ch1">
                    <div className="section-header">
                        <div className="chapter-num">CH1</div>
                        <h2 className="section-title">テストのミッション・ポリシー・戦略・目標</h2>
                        <span className="k-level-badge">K2 / K3 / K4</span>
                    </div>

                    <h3>1.1 テストミッション（Test Mission）</h3>

                    <div className="def-block">
                        <h4>📖 定義</h4>
                        <p>テストミッション（Test Mission）とは、組織がテストを実施する根本的な目的・使命のことです。すべてのテスト活動の方向性を決定づける最上位の概念であり、ビジネス戦略と直接連動します。</p>
                    </div>

                    <p>Expert Test Manager は、テストミッションを単なる「バグを見つける」レベルを超えて、組織のビジネス価値に貢献する戦略的使命として定義します。</p>

                    <div className="mermaid-wrap">
                        <Mermaid chart={`flowchart TD
    V["🏢 組織の戦略・ビジョン"]
    M["🎯 テストミッション<br/>なぜテストするのか？"]
    P["📋 テストポリシー<br/>何をどのようにテストするか？"]
    S["🗺️ テスト戦略<br/>どのようなアプローチでテストするか？"]
    G["✅ テスト目標<br/>具体的に何を達成するか？"]
    PL["📅 テスト計画<br/>いつ・誰が・どのリソースで実行するか？"]

    V --> M
    M --> P
    P --> S
    S --> G
    G --> PL

    style V fill:#0d1117,stroke:#00ff88,color:#e6edf3
    style M fill:#0d1117,stroke:#00d4ff,color:#e6edf3
    style P fill:#0d1117,stroke:#bf5af2,color:#e6edf3
    style S fill:#0d1117,stroke:#ffcc00,color:#e6edf3
    style G fill:#0d1117,stroke:#ff453a,color:#e6edf3
    style PL fill:#0d1117,stroke:#0a84ff,color:#e6edf3`} />
                    </div>

                    <h4>テストミッションの4つのパターン</h4>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>ミッションタイプ</th>
                                    <th>説明</th>
                                    <th>適用業界</th>
                                    <th>KPI例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td-green">バグ検出型</td>
                                    <td>できるだけ多くの欠陥を発見し本番流出を防ぐ</td>
                                    <td>金融・医療・航空宇宙</td>
                                    <td>DRE &ge;95%、本番流出ゼロ</td>
                                </tr>
                                <tr>
                                    <td className="td-cyan">リスク軽減型</td>
                                    <td>最重要リスクをコントロールしビジネスインパクトを最小化</td>
                                    <td>eコマース・SaaS</td>
                                    <td>Critical欠陥漏洩ゼロ</td>
                                </tr>
                                <tr>
                                    <td className="td-purple">信頼構築型</td>
                                    <td>製品・サービスの品質をステークホルダーに証明する</td>
                                    <td>政府・規制業界</td>
                                    <td>監査合格率100%</td>
                                </tr>
                                <tr>
                                    <td className="td-amber">品質改善型</td>
                                    <td>テストを通じてプロセス全体の品質文化を向上</td>
                                    <td>製品開発・DevOps企業</td>
                                    <td>欠陥密度の四半期改善率15%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>1.2 テストポリシー（Test Policy）</h3>

                    <div className="def-block">
                        <h4>📖 定義</h4>
                        <p>テストポリシーは組織の上位レベルのドキュメントで、テスト原則・アプローチ・測定基準を組織全体で定義します。経営レベル（CTO/CEO/Board）の承認を必要とし、通常1〜3年の有効期間で定期見直しされます。</p>
                    </div>

                    <div className="callout warning">
                        <div className="callout-title">⚠️ テストポリシー vs テスト戦略 vs テスト計画の混同に注意！</div>
                        これらは別レベルのドキュメントです。Expert試験では区別が厳密に問われます。
                    </div>

                    <div className="svg-wrap">
                        <svg viewBox="0 0 860 260" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: "#00ff88", stopOpacity: "0.3" }} />
                                    <stop offset="100%" style={{ stopColor: "#00ff88", stopOpacity: "0.05" }} />
                                </linearGradient>
                                <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: "#00d4ff", stopOpacity: "0.3" }} />
                                    <stop offset="100%" style={{ stopColor: "#00d4ff", stopOpacity: "0.05" }} />
                                </linearGradient>
                                <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: "#bf5af2", stopOpacity: "0.3" }} />
                                    <stop offset="100%" style={{ stopColor: "#bf5af2", stopOpacity: "0.05" }} />
                                </linearGradient>
                            </defs>

                            {/* Policy Row */}
                            <rect x="10" y="10" width="840" height="70" rx="10" fill="url(#g1)" stroke="#00ff88" strokeWidth="1.5" />
                            <rect x="10" y="10" width="6" height="70" rx="3" fill="#00ff88" />
                            <text x="30" y="38" fill="#00ff88" fontSize="11" fontWeight="700" fontFamily="'Space Mono', monospace">テストポリシー（Test Policy）</text>
                            <text x="30" y="58" fill="#8b949e" fontSize="10" fontFamily="'IBM Plex Sans JP', sans-serif">レベル: 組織全体 ｜ 作成: Expert Test Manager ｜ 承認: CEO/CTO/Board ｜ 有効: 1〜3年 ｜ 内容: 「なぜ」「何を」テストするかの方針</text>
                            <text x="820" y="50" fill="#00ff88" fontSize="9" textAnchor="end" fontFamily="'Space Mono', monospace">ORGANIZATIONAL</text>

                            {/* Strategy Row */}
                            <rect x="10" y="95" width="840" height="70" rx="10" fill="url(#g2)" stroke="#00d4ff" strokeWidth="1.5" />
                            <rect x="10" y="95" width="6" height="70" rx="3" fill="#00d4ff" />
                            <text x="30" y="123" fill="#00d4ff" fontSize="11" fontWeight="700" fontFamily="'Space Mono', monospace">テスト戦略（Test Strategy）</text>
                            <text x="30" y="143" fill="#8b949e" fontSize="10" fontFamily="'IBM Plex Sans JP', sans-serif">レベル: プロジェクト/プログラム ｜ 作成: Test Manager ｜ 承認: スポンサー ｜ 有効: PJ期間 ｜ 内容: 「どのように」テストするかのアプローチ</text>
                            <text x="820" y="135" fill="#00d4ff" fontSize="9" textAnchor="end" fontFamily="'Space Mono', monospace">PROJECT</text>

                            {/* Plan Row */}
                            <rect x="10" y="180" width="840" height="70" rx="10" fill="url(#g3)" stroke="#bf5af2" strokeWidth="1.5" />
                            <rect x="10" y="180" width="6" height="70" rx="3" fill="#bf5af2" />
                            <text x="30" y="208" fill="#bf5af2" fontSize="11" fontWeight="700" fontFamily="'Space Mono', monospace">テスト計画（Test Plan）</text>
                            <text x="30" y="228" fill="#8b949e" fontSize="10" fontFamily="'IBM Plex Sans JP', sans-serif">レベル: テストフェーズ/スプリント ｜ 作成: テストリード ｜ 承認: TM/PM ｜ 有効: フェーズ期間 ｜ 内容: 「いつ」「誰が」「何を」実行するかの詳細</text>
                            <text x="820" y="220" fill="#bf5af2" fontSize="9" textAnchor="end" fontFamily="'Space Mono', monospace">PHASE</text>
                        </svg>
                    </div>

                    <h4>テストポリシーの作成ステップ（ステップバイステップ）</h4>
                    <ol className="step-list">
                        <li>
                            <span className="step-num">1</span>
                            <div className="step-content">
                                <div className="step-title">組織のビジネス目標を理解する</div>
                                <div className="step-desc">経営戦略・中期計画・品質目標の把握。CEO・CFO・CTO・ビジネスオーナーとのヒアリング。業界規制・コンプライアンス要件の調査。</div>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">2</span>
                            <div className="step-content">
                                <div className="step-title">現状のテストプロセスを評価する</div>
                                <div className="step-desc">TMMi・TPI Nextなどのフレームワークで成熟度を評価。現行ポリシーの有効性分析と欠陥データ・インシデント履歴の分析。</div>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">3</span>
                            <div className="step-content">
                                <div className="step-title">ステークホルダーの要求を収集する</div>
                                <div className="step-desc">開発・運用・セキュリティ各部門との協議。顧客要件・SLA要件・規制要件・コンプライアンス要件を確認。</div>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">4</span>
                            <div className="step-content">
                                <div className="step-title">ポリシードラフトの作成</div>
                                <div className="step-desc">SMART原則に基づく目標設定。関係部門との合意形成と法務・コンプライアンス部門のレビュー。</div>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">5</span>
                            <div className="step-content">
                                <div className="step-title">承認と展開</div>
                                <div className="step-desc">経営レベル（CTO/CEO）の承認取得。組織全体への周知・教育とポリシー遵守の監視メカニズムの設定。</div>
                            </div>
                        </li>
                    </ol>

                    <h3>1.3 テスト戦略アプローチ（7種類）</h3>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>アプローチ名</th>
                                    <th>説明</th>
                                    <th>適合シナリオ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td-green">1</td>
                                    <td><strong>分析的</strong><br /><span className="tag">Analytical</span></td>
                                    <td>リスクベーステスト・要件ベーステスト。「どこに最も重大な欠陥があるか」を分析して優先順位付け</td>
                                    <td>リスクが明確に識別できる複雑なシステム</td>
                                </tr>
                                <tr>
                                    <td className="td-cyan">2</td>
                                    <td><strong>モデルベース</strong><br /><span className="tag">Model-Based</span></td>
                                    <td>状態遷移・BDD・ユースケース等のモデルからテストを生成</td>
                                    <td>形式仕様・複雑なワークフローが存在する</td>
                                </tr>
                                <tr>
                                    <td className="td-purple">3</td>
                                    <td><strong>方法論的</strong><br /><span className="tag">Methodical</span></td>
                                    <td>チェックリスト・過去の欠陥データ・経験則に基づく繰り返し実績のあるアプローチ</td>
                                    <td>類似プロジェクトの実績がある安定した環境</td>
                                </tr>
                                <tr>
                                    <td className="td-amber">4</td>
                                    <td><strong>プロセス準拠</strong><br /><span className="tag">Process-Compliant</span></td>
                                    <td>ISO 26262・DO-178C等の業界標準に準拠。規制遵守が法的要件</td>
                                    <td>自動車・航空・医療機器などの規制業界</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><strong>指示的</strong><br /><span className="tag">Directed</span></td>
                                    <td>探索的テスト・経験ベーステスト。テスターの経験・直感・創造性を活用</td>
                                    <td>要件が不明確、革新的な製品の初期評価</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><strong>回帰回避</strong><br /><span className="tag">Regression-Averse</span></td>
                                    <td>自動化回帰テスト・変更影響分析。CI/CDパイプラインへの統合</td>
                                    <td>頻繁なリリース、DevOps環境</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><strong>反応的</strong><br /><span className="tag">Reactive</span></td>
                                    <td>アドホックテスト・探索的テスト。最大の柔軟性を持つが予測しにくい</td>
                                    <td>予算・時間の制約が厳しい緊急対応</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>1.4 戦略的アライメント（Strategic Alignment）</h3>

                    <div className="mermaid-wrap">
                        <Mermaid chart={`flowchart LR
    BS["🏢 ビジネス戦略<br/>市場シェア30%拡大<br/>品質損失を50%削減"]
    QG["📈 品質マネジメント目標<br/>本番障害を前年比40%削減<br/>顧客満足度スコア4.5以上"]
    TP["📋 テストポリシー目標<br/>Critical欠陥の本番流出ゼロ<br/>テストカバレッジ90%以上"]
    TS["⚙️ テスト戦略・計画<br/>リスクベーステスト<br/>自動化70%目標"]

    BS --> QG
    QG --> TP
    TP --> TS

    style BS fill:#0d1117,stroke:#00ff88,color:#e6edf3
    style QG fill:#0d1117,stroke:#00d4ff,color:#e6edf3
    style TP fill:#0d1117,stroke:#bf5af2,color:#e6edf3
    style TS fill:#0d1117,stroke:#ffcc00,color:#e6edf3`} />
                    </div>

                    <h3>1.5 成功メトリクス — DRE（欠陥除去効率）</h3>

                    <div className="def-block">
                        <h4>📐 DRE（Defect Removal Efficiency）計算式</h4>
                        <p>DRE = テスト中の欠陥数 ÷ （テスト中 + 本番後）× 100</p>
                    </div>

                    <div className="code-block" data-lang="Python">
                        <div className="code-line"><span className="code-keyword">def</span> <span className="code-green">calculate_dre</span>(defects_in_test: <span className="code-cyan">int</span>, defects_in_production: <span className="code-cyan">int</span>) -&gt; <span className="code-cyan">dict</span>:</div>
                        <div className="code-line">    <span className="code-string">"""</span></div>
                        <div className="code-line"><span className="code-string">    欠陥除去効率（DRE）を計算し解釈を返す</span></div>
                        <div className="code-line"><span className="code-string">    理想値: 95%以上（セーフティクリティカルシステムでは99%以上）</span></div>
                        <div className="code-line"><span className="code-string">    業界平均: 85〜90%</span></div>
                        <div className="code-line"><span className="code-string">    """</span></div>
                        <div className="code-line">    total = defects_in_test + defects_in_production</div>
                        <div className="code-line">    dre = (defects_in_test / total) * <span className="code-number">100</span></div>
                        <div className="code-line"></div>
                        <div className="code-line">    interpretation = (</div>
                        <div className="code-line">        <span className="code-string">"✅ 優秀（世界クラス）"</span>   <span className="code-keyword">if</span> dre &gt;= <span className="code-number">95</span></div>
                        <div className="code-line">        <span className="code-keyword">else</span> <span className="code-string">"🟢 良好"</span>             <span className="code-keyword">if</span> dre &gt;= <span className="code-number">90</span></div>
                        <div className="code-line">        <span className="code-keyword">else</span> <span className="code-string">"🟡 平均的"</span>           <span className="code-keyword">if</span> dre &gt;= <span className="code-number">85</span></div>
                        <div className="code-line">        <span className="code-keyword">else</span> <span className="code-string">"🔴 改善が必要"</span></div>
                        <div className="code-line">    )</div>
                        <div className="code-line">    <span className="code-keyword">return</span> &#123;</div>
                        <div className="code-line">        <span className="code-string">"dre"</span>: <span className="code-cyan">f</span><span className="code-string">"&#123;dre:.1f&#125;%"</span>,</div>
                        <div className="code-line">        <span className="code-string">"interpretation"</span>: interpretation</div>
                        <div className="code-line">    &#125;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="code-comment"># 実践例</span></div>
                        <div className="code-line">result = calculate_dre(<span className="code-number">450</span>, <span className="code-number">50</span>)</div>
                        <div className="code-line"><span className="code-comment"># → dre: 90.0%、interpretation: 🟢 良好</span></div>
                    </div>

                    <div className="metric-grid">
                        <div className="metric-card">
                            <div className="metric-value">≥95%</div>
                            <div className="metric-label">優秀（世界クラス）</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value" style={{ color: "var(--neon-cyan)" }}>≥90%</div>
                            <div className="metric-label">良好（業界ベスト）</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value" style={{ color: "var(--neon-amber)" }}>≥85%</div>
                            <div className="metric-label">平均的（要改善）</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value" style={{ color: "var(--neon-red)" }}>&lt;85%</div>
                            <div className="metric-label">重大問題あり</div>
                        </div>
                    </div>

                    <h4>KPI の3カテゴリ</h4>
                    <div className="table-wrap">
                        <table>
                            <thead><tr><th>カテゴリ</th><th>KPI例</th></tr></thead>
                            <tbody>
                                <tr>
                                    <td className="td-green"><strong>製品品質KPI</strong></td>
                                    <td>欠陥密度（件/KLOC）、本番障害率、DRE、顧客報告欠陥数</td>
                                </tr>
                                <tr>
                                    <td className="td-cyan"><strong>プロセス品質KPI</strong></td>
                                    <td>テストカバレッジ率（機能/リスク/コード）、自動化率、フレイキーテスト率</td>
                                </tr>
                                <tr>
                                    <td className="td-amber"><strong>ビジネス価値KPI</strong></td>
                                    <td>テストROI（節約額/コスト）、市場投入時間短縮、品質コスト（CoQ）</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout info">
                        <div className="callout-title">💡 Chapter 1 Summary — Reference URL</div>
                        <ul>
                            <li><a href="https://istqb.org/certifications/certified-tester-expert-level-test-management-strategic-test-management-ctel-tm-sm/" style={{ color: "var(--neon-cyan)" }} target="_blank">ISTQB® CTEL-TM-SM 公式ページ</a></li>
                            <li><a href="https://www.tmmifoundation.org/" style={{ color: "var(--neon-cyan)" }} target="_blank">TMMi Foundation — テスト成熟度モデル</a></li>
                            <li><a href="https://astqb.org/assets/documents/ISTQB_CTEL-TM_Syllabus_v1.0.pdf" style={{ color: "var(--neon-cyan)" }} target="_blank">CTAL-TM シラバスv3.0（参考）</a></li>
                        </ul>
                    </div>
                </section>

                <hr />

                {/* CHAPTER 2 */}
                <section id="ch2">
                    <div className="section-header">
                        <div className="chapter-num">CH2</div>
                        <h2 className="section-title">外部関係の管理</h2>
                        <span className="k-level-badge">K3 / K4</span>
                    </div>

                    <h3>2.1 テスト戦略の統合（Merging Test Strategies）</h3>

                    <div className="def-block">
                        <h4>📖 なぜ戦略統合が必要か？</h4>
                        <p>現代のソフトウェア開発では複数ベンダー・パートナーが関与するマルチベンダー環境が標準です。Expert Test Manager は、異なる組織 of テスト戦略を統合・調整する能力が求められます。</p>
                    </div>

                    <div className="mermaid-wrap">
                        <Mermaid chart={`graph TD
    Prime["🏛️ 発注者（Prime Contractor）<br/>テストポリシー・品質基準・全体テスト戦略を定義"]
    VendorA["📱 サードパーティA<br/>モバイルアプリ<br/>独自テスト戦略"]
    VendorB["⚙️ サードパーティB<br/>バックエンドAPI<br/>独自テスト戦略"]
    VendorC["💳 サードパーティC<br/>決済プロバイダー<br/>独自テスト戦略"]
    IT["🔗 統合テスト<br/>発注者主導<br/>ベンダー支援"]

    Prime --> VendorA
    Prime --> VendorB
    Prime --> VendorC
    VendorA --> IT
    VendorB --> IT
    VendorC --> IT

    style Prime fill:#00ff88,color:#030712,stroke:#00ff88
    style IT fill:#bf5af2,color:#fff,stroke:#bf5af2`} />
                    </div>

                    <h4>統合の課題と対策</h4>
                    <div className="compare-grid">
                        <div className="compare-card bad">
                            <div className="compare-card-header">❌ 統合なしの場合の問題</div>
                            <div className="compare-item">
                                <ul>
                                    <li>各ベンダーが異なるツール・品質基準を使用</li>
                                    <li>テスト結果の形式が統一されていない</li>
                                    <li>欠陥の責任範囲が曖昧</li>
                                    <li>統合テストで大量の不整合が発覚</li>
                                    <li>品質ゲートの基準が各社バラバラ</li>
                                </ul>
                            </div>
                        </div>
                        <div className="compare-card good">
                            <div className="compare-card-header">✅ 正解の改善</div>
                            <div className="compare-item">
                                <ul>
                                    <li>統一品質ゲート基準・レポートフォーマット</li>
                                    <li>欠陥分類・優先度定義 of 統一</li>
                                    <li>RACIマトリクスで責任範囲を明確化</li>
                                    <li>コントラクトテストで早期検証</li>
                                    <li>契約にテスト要件を明記</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h4>テスト戦略統合のフレームワーク</h4>
                    <ol className="step-list">
                        <li>
                            <span className="step-num">1</span>
                            <div className="step-content">
                                <div className="step-title">各ベンダーのテスト能力の評価</div>
                                <div className="step-desc">使用ツール・自動化レベルの把握。テストプロセス成熟度（TMMi等）の評価。テストドキュメントの品質確認。</div>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">2</span>
                            <div className="step-content">
                                <div className="step-title">統一品質基準の策定</div>
                                <div className="step-desc">合格基準（品質ゲート）の合意。テストレポート標準フォーマットの策定。欠陥分類・優先度定義の統一。</div>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">3</span>
                            <div className="step-content">
                                <div className="step-title">テスト責任範囲の明確化（RACI）</div>
                                <div className="step-desc">コンポーネントテスト：各ベンダー。統合テスト：発注者主導・ベンダー支援。E2Eテスト：発注者または専任チーム。</div>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">4</span>
                            <div className="step-content">
                                <div className="step-title">コミュニケーションプロトコルの確立</div>
                                <div className="step-desc">定期的なテスト進捗レポートサイクル。欠陥エスカレーション手順と品質ゲートレビューのタイミング定義。</div>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">5</span>
                            <div className="step-content">
                                <div className="step-title">継続的なモニタリングと調整</div>
                                <div className="step-desc">統合ダッシュボードの構築。品質KPIの共有・トレンド分析。定期的な戦略レビューと改善。</div>
                            </div>
                        </li>
                    </ol>

                    <h3>2.2 品質の検証（Verifying Quality）— 多層品質ゲート</h3>

                    <div className="mermaid-wrap">
                        <Mermaid chart={`flowchart TD
    L1["Level 1: コンポーネントテスト品質ゲート（ベンダー側）<br/>ユニットカバレッジ≥80%<br/>静的解析の重大違反ゼロ<br/>セキュリティスキャンで重大脆弱性ゼロ"]
    L2["Level 2: 統合テスト品質ゲート（共同実施）<br/>APIコントラクトテスト全件合格<br/>性能テスト基準値クリア<br/>データ整合性テスト合格"]
    L3["Level 3: システム受入テスト品質ゲート（発注者）<br/>機能要件の受入基準を全て満足<br/>Critical/High欠陥0件<br/>ユーザビリティ基準クリア"]
    L4["Level 4: 本番デプロイ品質ゲート<br/>ステージングでのスモークテスト全件合格<br/>セキュリティ最終審査通過<br/>ロールバック手順の確認・承認"]
    DEPLOY["🚀 本番デプロイ"]

    L1 --> L2
    L2 --> L3
    L3 --> L4
    L4 --> DEPLOY

    style L1 fill:#0d1117,stroke:#00ff88,color:#e6edf3
    style L2 fill:#0d1117,stroke:#00d4ff,color:#e6edf3
    style L3 fill:#0d1117,stroke:#bf5af2,color:#e6edf3
    style L4 fill:#0d1117,stroke:#ffcc00,color:#e6edf3
    style DEPLOY fill:#00ff88,color:#030712,stroke:#00ff88`} />
                    </div>

                    <h4>契約ベースのテスト要件（YAML例）</h4>
                    <div className="code-block" data-lang="YAML">
                        <div className="code-line"><span className="code-green">contractual_test_requirements</span>:</div>
                        <div className="code-line">  <span className="code-cyan">quality_gates</span>:</div>
                        <div className="code-line">    unit_test_coverage: <span className="code-string">"&gt;= 80%"</span></div>
                        <div className="code-line">    integration_test_pass_rate: <span className="code-string">"&gt;= 95%"</span></div>
                        <div className="code-line">    critical_defects_at_delivery: <span className="code-number">0</span></div>
                        <div className="code-line">    high_defects_at_delivery: <span className="code-string">"&lt;= 5"</span></div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="code-cyan">test_documentation</span>:</div>
                        <div className="code-line">    - テスト計画書（Test Plan）</div>
                        <div className="code-line">    - テストケース仕様書（Test Case Specification）</div>
                        <div className="code-line">    - テスト実行レポート（Test Execution Report）</div>
                        <div className="code-line">    - テスト完了レポート（Test Completion Report）</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="code-cyan">reporting</span>:</div>
                        <div className="code-line">    frequency: <span className="code-string">週次</span></div>
                        <div className="code-line">    escalation_sla: <span className="code-string">"Critical欠陥は24時間以内に報告"</span></div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="code-cyan">audit_rights</span>:</div>
                        <div className="code-line">    - <span className="code-string">"発注者はベンダーのテストプロセスを監査する権利を有する"</span></div>
                        <div className="code-line">    - <span className="code-string">"監査は事前通知14日で実施"</span></div>
                    </div>

                    <div className="callout info">
                        <div className="callout-title">💡 Chapter 2 Reference URL</div>
                        <ul>
                            <li><a href="https://docs.pact.io/" style={{ color: "var(--neon-cyan)" }} target="_blank">Pact — コントラクトテストフレームワーク</a></li>
                            <li><a href="https://istqb.org/certifications/certified-tester-expert-level-test-management-strategic-test-management-ctel-tm-sm/" style={{ color: "var(--neon-cyan)" }} target="_blank">ISTQB® CTEL-TM-SM 公式</a></li>
                        </ul>
                    </div>
                </section>

                <hr />

                {/* CHAPTER 3 */}
                <section id="ch3">
                    <div className="section-header">
                        <div className="chapter-num">CH3</div>
                        <h2 className="section-title">組織全体にわたるテスト管理</h2>
                        <span className="k-level-badge">K3 / K4</span>
                    </div>

                    <h3>3.1 ステークホルダーとの関係構築</h3>

                    <div className="def-block">
                        <h4>📖 Expert Test Manager のユニークな要件</h4>
                        <p>CTEL-TM-SMのユニークな要件の一つは、<strong>CEO・取締役会レベルとのコミュニケーション能力</strong>です。技術的なメトリクスをビジネスインパクトに変換して経営陣に訴求します。</p>
                    </div>

                    <h4>技術メトリクス → ビジネス言語への変換（試験頻出）</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>技術的視点（テスター目線）</th>
                                    <th>経営レベルの言葉（ビジネス目線）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td-amber">欠陥密度が3.2件/KLOC</td>
                                    <td>開発の品質問題によりサポートコストが年間5,000万円増大しています</td>
                                </tr>
                                <tr>
                                    <td className="td-amber">テストカバレッジ65%</td>
                                    <td>現在のテストでは機能の35%が検証されておらず、本番障害リスクが高い状態です</td>
                                </tr>
                                <tr>
                                    <td className="td-amber">フレイキーテスト率20%</td>
                                    <td>テスト環境の不安定さにより、リリースサイクルが週あたり2日遅延しています</td>
                                </tr>
                                <tr>
                                    <td className="td-amber">DRE 82%</td>
                                    <td>品質管理の不備により、本番後の障害対応に年間2,000万円を費やしています</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>ステークホルダーマップ（権限 × 関心度）</h4>
                    <div className="svg-wrap">
                        <svg viewBox="0 0 800 320" width="100%" xmlns="http://www.w3.org/2000/svg">
                            {/* Background quadrants */}
                            <rect x="20" y="20" width="380" height="280" rx="8" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.2)" strokeWidth="1" />
                            <rect x="420" y="20" width="360" height="280" rx="8" fill="rgba(0,212,255,0.04)" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
                            <rect x="20" y="160" width="380" height="140" rx="8" fill="rgba(191,90,242,0.04)" stroke="rgba(191,90,242,0.2)" strokeWidth="1" />
                            <rect x="420" y="160" width="360" height="140" rx="8" fill="rgba(255,69,58,0.04)" stroke="rgba(255,69,58,0.2)" strokeWidth="1" />

                            {/* Labels */}
                            <text x="210" y="45" textAnchor="middle" fill="#00ff88" fontSize="11" fontWeight="700" fontFamily="'Space Mono', monospace">高権限・高関心 → 緊密に協力</text>
                            <text x="210" y="60" textAnchor="middle" fill="#8b949e" fontSize="10" fontFamily="'IBM Plex Sans JP', sans-serif">CTO / リリース管理者 / セキュリティ責任者</text>

                            <text x="600" y="45" textAnchor="middle" fill="#00d4ff" fontSize="11" fontWeight="700" fontFamily="'Space Mono', monospace">高権限・低関心 → 管理する</text>
                            <text x="600" y="60" textAnchor="middle" fill="#8b949e" fontSize="10" fontFamily="'IBM Plex Sans JP', sans-serif">開発PM / QA部門長</text>

                            <text x="210" y="185" textAnchor="middle" fill="#bf5af2" fontSize="11" fontWeight="700" fontFamily="'Space Mono', monospace">低権限・高関心 → 情報提供</text>
                            <text x="210" y="200" textAnchor="middle" fill="#8b949e" fontSize="10" fontFamily="'IBM Plex Sans JP', sans-serif">エンドユーザー / カスタマーサポート</text>

                            <text x="600" y="185" textAnchor="middle" fill="#ff453a" fontSize="11" fontWeight="700" fontFamily="'Space Mono', monospace">低権限・低関心 → 最小限のコミュニケーション</text>
                            <text x="600" y="200" textAnchor="middle" fill="#8b949e" fontSize="10" fontFamily="'IBM Plex Sans JP', sans-serif">外部監査人</text>

                            {/* Axis Labels */}
                            <text x="9" y="165" fill="#e6edf3" fontSize="10" transform="rotate(-90,9,165)" textAnchor="middle" fontFamily="'Space Mono', monospace">権 限 度 →</text>
                            <text x="400" y="315" fill="#e6edf3" fontSize="10" textAnchor="middle" fontFamily="'Space Mono', monospace">← 関心度 →</text>
                        </svg>
                    </div>

                    <h3>3.2 品質文化の醸成（Quality Culture）</h3>

                    <p>Expert Test Managerは、テストチームを超えて組織全体に品質文化を浸透させる責任を持ちます。</p>

                    <div className="arch-layers">
                        <div className="arch-layer">
                            <div className="arch-layer-title">レベル1（初期）「バグを見つけるのはテスターの仕事」</div>
                            <div className="arch-layer-desc">テストは開発後の後工程として認識。品質は「テスト部門だけの責任」と見なされている。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">レベル2（発展中）「品質は全員の責任」（意識はあるが実践が弱い）</div>
                            <div className="arch-layer-desc">シフトレフトの概念は理解されている。TDDやコードレビューが一部で実践されている。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">レベル3（定義済）「品質を組み込む（Build Quality In）」</div>
                            <div className="arch-layer-desc">開発者もテストを書く（TDD/BDD）。CI/CDパイプラインにテストが統合。欠陥防止プラクティスが標準化。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">レベル4（管理済）「データ駆動の品質判断」</div>
                            <div className="arch-layer-desc">品質KPIに基づいてリリース判断を自動化。予測分析（欠陥予測・リスク予測）を活用。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">レベル5（最適化）「継続的品質革新」</div>
                            <div className="arch-layer-desc">AI/MLを活用したテスト最適化。業界ベストプラクティスを組織が創出・共有。品質がビジネス競争優位の源泉。</div>
                        </div>
                    </div>

                    <div className="alert cyan">
                        <strong>🎯 Expert Test Manager の目標</strong>
                        組織をレベル3以上に引き上げ、レベル4・5を目指す。これが戦略的テスト管理の根本的な使命です。
                    </div>

                    <h3>3.3 シフトレフト×シフトライト統合戦略</h3>

                    <div className="mermaid-wrap">
                        <Mermaid chart={`flowchart LR
    subgraph SL ["シフトレフト（早期検証）"]
        Req["要件レビュー<br/>ATDD"]
        Des["設計レビュー<br/>アーキテクチャ評価"]
        Code["実装<br/>TDD/静的解析"]
    end

    subgraph CICD ["CI/CDパイプライン"]
        Build["ビルド<br/>ユニットテスト"]
        Int["統合テスト<br/>APIテスト"]
        E2E["E2Eテスト<br/>回帰テスト"]
    end

    subgraph SR ["シフトライト（本番監視）"]
        Canary["カナリア<br/>リリース"]
        Mon["本番<br/>モニタリング"]
        Chaos["カオス<br/>エンジニアリング"]
    end

    Req --> Des
    Des --> Code
    Code --> Build
    Build --> Int
    Int --> E2E
    E2E --> Canary
    Canary --> Mon
    Mon --> Chaos`} />
                    </div>

                    <h3>3.4 組織全体でのツール統合アーキテクチャ</h3>

                    <div className="mermaid-wrap">
                        <Mermaid chart={`graph TD
    Gov["📊 ガバナンス・レポーティング層<br/>Grafana / Power BI / Allure TestOps"]
    CI["⚙️ CI/CDオーケストレーション層<br/>GitHub Actions / Jenkins / GitLab CI"]
    UT["🧪 ユニットテスト<br/>JUnit / pytest / Jest"]
    IT["🔗 統合テスト<br/>Postman / REST Assured"]
    E2E["🌐 E2Eテスト<br/>Playwright / Selenium / Cypress"]
    NFT["📈 非機能テスト<br/>k6 (性能) / OWASP ZAP (セキュリティ)"]
    Mgmt["📋 テスト管理・品質分析層<br/>TestRail / Jira / Xray / Azure DevOps"]

    Gov --> CI
    CI --> UT
    CI --> IT
    CI --> E2E
    CI --> NFT
    UT --> Mgmt
    IT --> Mgmt
    E2E --> Mgmt
    NFT --> Mgmt

    style Gov fill:#00ff88,color:#030712
    style CI fill:#00d4ff,color:#030712
    style Mgmt fill:#bf5af2,color:#fff`} />
                    </div>

                    <h4>ツール統合ROI計算</h4>
                    <div className="code-block" data-lang="Python">
                        <div className="code-line"><span className="code-keyword">def</span> <span className="code-green">calculate_tool_roi</span>(</div>
                        <div className="code-line">    manual_hours: <span className="code-cyan">int</span>,</div>
                        <div className="code-line">    hourly_cost: <span className="code-cyan">float</span>,</div>
                        <div className="code-line">    automation_current: <span className="code-cyan">float</span>,</div>
                        <div className="code-line">    automation_target: <span className="code-cyan">float</span>,</div>
                        <div className="code-line">    integration_cost: <span className="code-cyan">float</span>,</div>
                        <div className="code-line">) -&gt; <span className="code-cyan">dict</span>:</div>
                        <div className="code-line">    <span className="code-comment"># 現状の手動テストコスト</span></div>
                        <div className="code-line">    current_cost = manual_hours * (<span className="code-number">1</span> - automation_current) * hourly_cost</div>
                        <div className="code-line">    <span className="code-comment"># 目標達成後のコスト</span></div>
                        <div className="code-line">    target_cost  = manual_hours * (<span className="code-number">1</span> - automation_target)  * hourly_cost</div>
                        <div className="code-line"></div>
                        <div className="code-line">    annual_savings = current_cost - target_cost</div>
                        <div className="code-line">    payback_months = (integration_cost / annual_savings) * <span className="code-number">12</span></div>
                        <div className="code-line">    roi = ((annual_savings - integration_cost) / integration_cost) * <span className="code-number">100</span></div>
                        <div className="code-line"></div>
                        <div className="code-line">    return &#123;</div>
                        <div className="code-line">        <span className="code-string">"annual_savings"</span>:  <span className="code-cyan">f</span><span className="code-string">"¥&#123;annual_savings:,.0f&#125;"</span>,</div>
                        <div className="code-line">        <span className="code-string">"payback_months"</span>: <span className="code-cyan">f</span><span className="code-string">"&#123;payback_months:.1f&#125;ヶ月"</span>,</div>
                        <div className="code-line">        <span className="code-string">"roi_pct"</span>:       <span className="code-cyan">f</span><span className="code-string">"&#123;roi:.0f&#125;%"</span>,</div>
                        <div className="code-line">    &#125;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="code-comment"># 実践例: 20,000時間/年, 8,000円/h, 30%→70%自動化, 500万円投資</span></div>
                        <div className="code-line">result = calculate_tool_roi(<span className="code-number">20000</span>, <span className="code-number">8000</span>, <span className="code-number">0.30</span>, <span className="code-number">0.70</span>, <span className="code-number">5000000</span>)</div>
                        <div className="code-line"><span className="code-comment"># → annual_savings: ¥44,800,000 / payback: 1.3ヶ月 / ROI: 796%</span></div>
                    </div>

                    <div className="callout info">
                        <div className="callout-title">💡 Chapter 3 Reference URL</div>
                        <ul>
                            <li><a href="https://testing.googleblog.com/" style={{ color: "var(--neon-cyan)" }} target="_blank">Google Testing Blog — 品質文化のベストプラクティス</a></li>
                            <li><a href="https://martinfowler.com/articles/practical-test-pyramid.html" style={{ color: "var(--neon-cyan)" }} target="_blank">Martin Fowler — テストピラミッド</a></li>
                            <li><a href="https://grafana.com/docs/k6/latest/" style={{ color: "var(--neon-cyan)" }} target="_blank">k6 — 性能テストツール</a></li>
                        </ul>
                    </div>
                </section>

                <hr />

                {/* CHAPTER 4 */}
                <section id="ch4">
                    <div className="section-header">
                        <div className="chapter-num">CH4</div>
                        <h2 className="section-title">ドメイン・プロジェクト要因の考慮事項</h2>
                        <span className="k-level-badge">K3 / K4</span>
                    </div>

                    <h3>4.1 ライフサイクルモデル別テスト管理</h3>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>SDLCモデル</th>
                                    <th>テスト管理のポイント</th>
                                    <th>主なリスク</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td-green"><strong>ウォーターフォール</strong></td>
                                    <td>V字モデルに基づく各フェーズのテスト計画。フォーマルなエントリ・イグジット基準の設定。独立したテスト組織が有効。</td>
                                    <td>テストが後半に集中→欠陥の発見が遅れる。要件変更への対応が困難・高コスト。</td>
                                </tr>
                                <tr>
                                    <td className="td-cyan"><strong>アジャイル（Scrum）</strong></td>
                                    <td>各スプリントでのテスト活動（シフトレフト）。Definition of Done（DoD）にテスト基準を組み込む。回帰テストの自動化が必須。</td>
                                    <td>テスト負債（Test Debt）の蓄積。回帰テストの急増。スプリントごとの品質一貫性確保。</td>
                                </tr>
                                <tr>
                                    <td className="td-purple"><strong>DevOps / CD</strong></td>
                                    <td>テスト自動化率の最大化（目標70〜80%以上）。テストピラミッドに基づく設計。品質ゲートの自動化。</td>
                                    <td>フレイキーテストによるパイプラインの不安定化。本番デプロイの品質担保。</td>
                                </tr>
                                <tr>
                                    <td className="td-amber"><strong>ハイブリッド（最多）</strong></td>
                                    <td>フォーマルなマスターテスト計画（ウォーターフォール要素）+スプリントレベルの適応的テスト計画（アジャイル要素）。</td>
                                    <td>ステークホルダーごとに異なる報告形式の対応。欠陥管理ワークフローの統一。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>4.2 テストピラミッド（DevOps環境での指針）</h3>
                    <div className="pyramid-wrap">
                        <div className="pyramid-tier">E2E / UI テスト（10%）</div>
                        <div className="pyramid-tier">統合 / API テスト（20%）</div>
                        <div className="pyramid-tier">コンポーネント / サービステスト（30%）</div>
                        <div className="pyramid-tier">ユニットテスト（40%）</div>
                        <div className="pyramid-tier">静的解析 / コードレビュー（基盤）</div>
                    </div>
                    <p className="pyramid-label">⬆ 上に行くほど遅く・コスト高 ｜ 下に行くほど速く・安定 ｜ ホバーで強調表示</p>

                    <h3>4.3 マスターテスト計画の構成</h3>
                    <div className="code-block" data-lang="YAML">
                        <div className="code-line"><span className="code-green">master_test_plan</span>:</div>
                        <div className="code-line">  <span className="code-cyan">section_1_introduction</span>:</div>
                        <div className="code-line">    - プロジェクト概要</div>
                        <div className="code-line">    - テストスコープ（対象・対象外）</div>
                        <div className="code-line">    - テスト目標と成功基準</div>
                        <div className="code-line">    - リスクと前提条件</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="code-cyan">section_2_test_strategy</span>:</div>
                        <div className="code-line">    - テストアプローチ（リスクベース/モデルベース等）</div>
                        <div className="code-line">    - テストレベルと責任分担</div>
                        <div className="code-line">    - 自動化戦略</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="code-cyan">section_3_test_organization</span>:</div>
                        <div className="code-line">    - テストチーム構成（ロール・責任・スキル）</div>
                        <div className="code-line">    - 外部リソース（ベンダー・専門家）</div>
                        <div className="code-line">    - コミュニケーション計画</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="code-cyan">section_4_infrastructure</span>:</div>
                        <div className="code-line">    - テスト環境仕様</div>
                        <div className="code-line">    - テストツール（ライセンス・バージョン）</div>
                        <div className="code-line">    - テストデータ戦略</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="code-cyan">section_5_schedule_estimation</span>:</div>
                        <div className="code-line">    - マイルストーン</div>
                        <div className="code-line">    - テスト工数見積もり（根拠込み）</div>
                        <div className="code-line">    - 依存関係</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="code-cyan">section_6_entry_exit_criteria</span>:</div>
                        <div className="code-line">    - 各フェーズのエントリ/イグジット基準</div>
                        <div className="code-line">    - 一時停止/再開基準</div>
                        <div className="code-line">    - リリース基準（品質ゲート）</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="code-cyan">section_7_risk_management</span>:</div>
                        <div className="code-line">    - テストリスクレジスター</div>
                        <div className="code-line">    - リスク軽減策・コンティンジェンシー計画</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="code-cyan">section_8_metrics_reporting</span>:</div>
                        <div className="code-line">    - 収集するメトリクス（定義・測定方法）</div>
                        <div className="code-line">    - 報告スケジュール・フォーマット</div>
                        <div className="code-line">    - ガバナンスダッシュボード設計</div>
                    </div>

                    <h3>4.4 部分的なライフサイクルプロジェクト</h3>

                    <div className="arch-layers">
                        <div className="arch-layer">
                            <div className="arch-layer-title">シナリオ1: レガシーシステムのモダナイゼーション</div>
                            <div className="arch-layer-desc">課題: テスト資産が存在しない・古い。対策: 現行動作のキャラクタリゼーションテストを実施し、段階的移行テスト戦略を策定する。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">シナリオ2: マイクロサービス移行</div>
                            <div className="arch-layer-desc">課題: モノリスからマイクロサービスへの段階的移行。対策: ストラングラーフィグパターン + コントラクトテスト（Pact）の導入。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">シナリオ3: サードパーティパッケージの統合</div>
                            <div className="arch-layer-desc">課題: 外部コンポーネントはブラックボックス。対策: インターフェーステストに集中。ベンダーのテスト証跡を確認する。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">シナリオ4: 緊急パッチ/ホットフィックス</div>
                            <div className="arch-layer-desc">課題: 時間的制約の中でリグレッションを防ぐ。対策: リスクベースのスモークテスト実施 + 変更影響分析の自動化 + カナリアリリース。</div>
                        </div>
                    </div>

                    <div className="callout info">
                        <div className="callout-title">💡 Chapter 4 Reference URL</div>
                        <ul>
                            <li><a href="https://www.iso.org/standard/81291.html" style={{ color: "var(--neon-cyan)" }} target="_blank">ISO/IEC 29119 — ソフトウェアテスト国際標準</a></li>
                            <li><a href="https://www.istqb.guru/" style={{ color: "var(--neon-cyan)" }} target="_blank">ISTQB.Guru — 試験対策・解説サイト</a></li>
                        </ul>
                    </div>
                </section>

                <hr />

                {/* CHAPTER 5 */}
                <section id="ch5">
                    <div className="section-header">
                        <div className="chapter-num">CH5</div>
                        <h2 className="section-title">有効性・効率性・満足度の評価</h2>
                        <span className="k-level-badge">K2 / K3</span>
                    </div>

                    <h3>5.1 GQM（Goal-Question-Metric）アプローチ</h3>

                    <div className="def-block">
                        <h4>📖 定義</h4>
                        <p>GQMアプローチは、単にメトリクスを収集するのではなく、<strong>目標から逆算してメトリクスを設計</strong>する方法論です。Expert Levelでは特に重要な概念です。</p>
                    </div>

                    <div className="mermaid-wrap">
                        <Mermaid chart={`flowchart TD
    G["🎯 Goal（目標）<br/>テスト品質を改善し<br/>本番障害を50%削減する"]
    Q1["❓ Q1: 現在のテストで欠陥をどの程度発見しているか？"]
    Q2["❓ Q2: どのコンポーネントで本番障害が多発しているか？"]
    Q3["❓ Q3: テスト後、本番にどのくらい欠陥が漏洩しているか？"]
    Q4["❓ Q4: テストで最も多くの時間を消費しているのはどこか？"]
    M1["📊 M1: DRE（欠陥除去効率）→ Q1, Q3"]
    M2["📊 M2: コンポーネント別欠陥密度 → Q2"]
    M3["📊 M3: 欠陥漏洩率 → Q3"]
    M4["📊 M4: テストフェーズ別工数内訳 → Q4"]

    G --> Q1
    G --> Q2
    G --> Q3
    G --> Q4
    Q1 --> M1
    Q3 --> M1
    Q2 --> M2
    Q3 --> M3
    Q4 --> M4

    style G fill:#00ff88,color:#030712`} />
                    </div>

                    <h3>5.2 三大評価軸メトリクス</h3>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>評価軸</th>
                                    <th>定義</th>
                                    <th>主要KPI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td-green"><strong>有効性</strong><br />Effectiveness</td>
                                    <td>テストは目標を達成しているか？</td>
                                    <td>DRE、要件カバレッジ率、リスクカバレッジ率、テスト合格率</td>
                                </tr>
                                <tr>
                                    <td className="td-cyan"><strong>効率性</strong><br />Efficiency</td>
                                    <td>テストはリソースを効率的に使っているか？</td>
                                    <td>コストパーテストケース、自動化率、テストサイクルタイム、欠陥発見コスト</td>
                                </tr>
                                <tr>
                                    <td className="td-purple"><strong>満足度</strong><br />Satisfaction</td>
                                    <td>ステークホルダーを満足させているか？</td>
                                    <td>チーム満足度スコア、ステークホルダー信頼度、報告書の明確性評価</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>プロセスメトリクス進捗バー（サンプルダッシュボード）</h4>
                    <div className="trend-card">
                        <div className="trend-title">📊 Q3 2025 テスト品質ガバナンスダッシュボード</div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">DRE（欠陥除去効率）</span>
                                <span className="progress-value">91% ✅ 目標90%達成</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-bar" style={{ width: "91%" }}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">テスト自動化率</span>
                                <span className="progress-value">62% 🟡 目標70%</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-bar" style={{ width: "62%", background: "linear-gradient(90deg, #ffcc00, #ff9500)" }}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">リスクカバレッジ</span>
                                <span className="progress-value">78% 🟡 目標85%</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-bar" style={{ width: "78%", background: "linear-gradient(90deg, #00d4ff, #0a84ff)" }}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">テスト合格率（最新リリース）</span>
                                <span className="progress-value">96.3% ✅ 目標95%達成</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-bar" style={{ width: "96%" }}></div>
                            </div>
                        </div>
                    </div>

                    <h3>5.3 品質のコスト（Cost of Quality）</h3>

                    <div className="svg-wrap">
                        <svg viewBox="0 0 800 200" width="100%" xmlns="http://www.w3.org/2000/svg">
                            {/* Legend */}
                            <rect x="20" y="20" width="180" height="160" rx="8" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.3)" strokeWidth="1.5" />
                            <text x="110" y="42" textAnchor="middle" fill="#00ff88" fontSize="10" fontWeight="700" fontFamily="'Space Mono', monospace">予防コスト</text>
                            <text x="110" y="58" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">15-20%が理想</text>
                            <text x="110" y="74" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">テスト計画・設計</text>
                            <text x="110" y="89" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">研修・プロセス改善</text>

                            <rect x="220" y="20" width="170" height="160" rx="8" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.3)" strokeWidth="1.5" />
                            <text x="305" y="42" textAnchor="middle" fill="#00d4ff" fontSize="10" fontWeight="700" fontFamily="'Space Mono', monospace">評価コスト</text>
                            <text x="305" y="58" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">25-35%が理想</text>
                            <text x="305" y="74" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">テスト実行・環境</text>
                            <text x="305" y="89" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">ツールライセンス</text>

                            <rect x="410" y="20" width="170" height="160" rx="8" fill="rgba(255,204,0,0.06)" stroke="rgba(255,204,0,0.3)" strokeWidth="1.5" />
                            <text x="495" y="42" textAnchor="middle" fill="#ffcc00" fontSize="10" fontWeight="700" fontFamily="'Space Mono', monospace">内部失敗コスト</text>
                            <text x="495" y="58" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">30-40%が理想</text>
                            <text x="495" y="74" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">バグ修正・再テスト</text>
                            <text x="495" y="89" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">リリース遅延コスト</text>

                            <rect x="600" y="20" width="180" height="160" rx="8" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.4)" strokeWidth="1.5" />
                            <text x="690" y="42" textAnchor="middle" fill="#ff453a" fontSize="10" fontWeight="700" fontFamily="'Space Mono', monospace">外部失敗コスト 🚨</text>
                            <text x="690" y="58" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">10-20%（低いほどよい）</text>
                            <text x="690" y="74" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">本番障害・サポート</text>
                            <text x="690" y="89" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">賠償・ペナルティ</text>

                            {/* Bottom note */}
                            <text x="400" y="195" textAnchor="middle" fill="#484f58" fontSize="9" fontFamily="'IBM Plex Sans JP', sans-serif">予防コストへの投資増加 → 評価・失敗コストの削減 → 総品質コストの最適化</text>
                        </svg>
                    </div>

                    <div className="alert red">
                        <strong>⚠️ 外部失敗コストの危険性</strong>
                        外部失敗コスト（本番障害・顧客影響）は内部コストの最大100倍に達することがあります。予防コストへの投資は最も効率的な品質投資です。
                    </div>

                    <h3>5.4 年間評価サイクル</h3>
                    <div className="mermaid-wrap">
                        <Mermaid chart={`flowchart LR
    Q1["Q1（1〜3月）<br/>🎯 目標設定・ベースライン計測<br/>前年データをベースライン設定<br/>当年改善目標をSMART原則で設定"]
    Q2["Q2（4〜6月）<br/>📊 中間評価・軌道修正<br/>Q1メトリクスデータ収集・分析<br/>目標との乖離分析・アプローチ修正"]
    Q3["Q3（7〜9月）<br/>🚀 加速・改善施策の実施<br/>重点施策の実行・阻害要因除去<br/>チームへのフィードバック"]
    Q4["Q4（10〜12月）<br/>✅ 年間評価・次年度計画<br/>年間KPI達成状況の総括<br/>教訓文書化・次年度ポリシー見直し"]

    Q1 --> Q2
    Q2 --> Q3
    Q3 --> Q4
    Q4 -.->|次年度へ| Q1

    style Q1 fill:#0d1117,stroke:#00ff88,color:#e6edf3
    style Q2 fill:#0d1117,stroke:#00d4ff,color:#e6edf3
    style Q3 fill:#0d1117,stroke:#ffcc00,color:#e6edf3
    style Q4 fill:#0d1117,stroke:#bf5af2,color:#e6edf3`} />
                    </div>

                    <div className="callout info">
                        <div className="callout-title">💡 Chapter 5 Reference URL</div>
                        <ul>
                            <li><a href="https://istqb.org/" style={{ color: "var(--neon-cyan)" }} target="_blank">ISTQB® 公式サイト</a></li>
                            <li><a href="https://glossary.istqb.org/" style={{ color: "var(--neon-cyan)" }} target="_blank">ISTQB® グロッサリー</a></li>
                        </ul>
                    </div>
                </section>

                <hr />

                {/* EXAM TIPS */}
                <section id="exam">
                    <div className="section-header">
                        <div className="chapter-num">EXAM</div>
                        <h2 className="section-title">試験対策・サンプル問題</h2>
                        <span className="k-level-badge">K4 分析レベル</span>
                    </div>

                    <h3>章別重要度</h3>
                    <div className="exam-grid">
                        <div className="exam-card">
                            <div className="exam-card-chapter">CHAPTER 1</div>
                            <div className="exam-card-title">テストミッション・ポリシー・戦略・目標</div>
                            <div className="stars">★★★★★</div>
                            <p style={{ fontSize: "0.82rem", marginTop: "0.5rem" }}>DRE計算、7種類の戦略アプローチ、ポリシー vs 戦略 vs 計画の区別が頻出</p>
                        </div>
                        <div className="exam-card">
                            <div className="exam-card-chapter">CHAPTER 2</div>
                            <div className="exam-card-title">外部関係の管理</div>
                            <div className="stars">★★★★☆</div>
                            <p style={{ fontSize: "0.82rem", marginTop: "0.5rem" }}>マルチベンダー環境での統合アプローチ、品質ゲートの設計が出題</p>
                        </div>
                        <div className="exam-card">
                            <div className="exam-card-chapter">CHAPTER 3</div>
                            <div className="exam-card-title">組織全体の管理</div>
                            <div className="stars">★★★★☆</div>
                            <p style={{ fontSize: "0.82rem", marginTop: "0.5rem" }}>CEO/Board コミュニケーション、品質文化の成熟度レベルが頻出</p>
                        </div>
                        <div className="exam-card">
                            <div className="exam-card-chapter">CHAPTER 4</div>
                            <div className="exam-card-title">ドメイン・プロジェクト要因の考慮事項</div>
                            <div className="stars">★★★★☆</div>
                            <p style={{ fontSize: "0.82rem", marginTop: "0.5rem" }}>SDLCモデル別テスト管理アプローチの選択判断が問われる</p>
                        </div>
                        <div className="exam-card">
                            <div className="exam-card-chapter">CHAPTER 5</div>
                            <div className="exam-card-title">有効性・効率性・満足度</div>
                            <div className="stars">★★★☆☆</div>
                            <p style={{ fontSize: "0.82rem", marginTop: "0.5rem" }}>GQMアプローチ、CoQ の 4 分類が出題。計算問題も含む。</p>
                        </div>
                    </div>

                    <h3>必ず覚える重要概念</h3>
                    <div className="alert green">
                        <strong>✅ テストポリシー vs テスト戦略 vs テスト計画の3層構造</strong>
                        組織（ポリシー）→ プロジェクト（戦略）→ フェーズ（計画）の階層関係と各ドキュメントの作成者・承認者・有効期間を明確に区別できること。
                    </div>
                    <div className="alert cyan">
                        <strong>✅ DRE計算式と解釈</strong>
                        DRE = テスト中欠陥 ÷ (テスト中 + 本番後) × 100。95%以上が優秀、90%以上が良好、85%以上が平均的。業界・リスクレベルで目標値が変わる。
                    </div>
                    <div className="alert green">
                        <strong>✅ 7種類のテスト戦略アプローチ</strong>
                        分析的・モデルベース・方法論的・プロセス準拠・指示的・回帰回避・反応的。各状況での最適な選択と組み合わせを理解する。
                    </div>
                    <div className="alert cyan">
                        <strong>✅ CEO/Boardレベルのコミュニケーション</strong>
                        技術メトリクス→ビジネスインパクトへの変換が必須スキル。「欠陥密度3.2件/KLOC」→「年間5,000万円のサポートコスト増大」の変換能力。
                    </div>
                    <div className="alert amber">
                        <strong>⚠️ GQMアプローチ（Goal-Question-Metric）</strong>
                        目標→質問→メトリクスの順に逆算して設計する。メトリクスのためのメトリクス収集を避け、常にビジネス目標との連動を確認する。
                    </div>

                    <h3>サンプル問題（K4レベル）</h3>

                    <div className="trend-card">
                        <div className="trend-title">問1：テストポリシーの作成</div>
                        <p style={{ fontSize: "0.9rem" }}>あなたは大手金融機関のExpert Test Managerとして採用されました。CEO から「本番障害を1年以内に50%削減してほしい」という指示がありました。<strong>最初に実施すべき行動として最も適切なものはどれか？</strong></p>
                        <div className="compare-grid" style={{ marginTop: "1rem" }}>
                            <div className="compare-card bad">
                                <div className="compare-card-header">❌ 誤り</div>
                                <div className="compare-item">A. 即座に全プロジェクトに自動化テストを義務付けるポリシーを発行する<br /><br />C. 競合他社のテストポリシーを入手してコピーして導入する</div>
                            </div>
                            <div className="compare-card good">
                                <div className="compare-card-header">✅ 正解: B</div>
                                <div className="compare-item">現状のテスト成熟度・本番障害の原因・組織の品質目標を評価・分析してからポリシーを策定する。<br /><br />理由: Expert Test Manager は現状評価（As-Is分析）を先行させ、データに基づいた戦略を立案します。</div>
                            </div>
                        </div>
                    </div>

                    <div className="trend-card">
                        <div className="trend-title">問2：DRE計算と解釈</div>
                        <p style={{ fontSize: "0.9rem" }}>テスト中に450件の欠陥を発見し、リリース後の本番環境で50件の欠陥が発見されました。DREを計算し適切な解釈を選びなさい。</p>
                        <div className="code-block" data-lang="計算">
                            <div className="code-line">DRE = <span className="code-number">450</span> / (<span className="code-number">450</span> + <span className="code-number">50</span>) × <span className="code-number">100</span> = <span className="code-green">90%</span></div>
                            <div className="code-line"></div>
                            <div className="code-line"><span className="code-comment">解釈: 「良好（Good）な水準だが、金融・医療等の</span></div>
                            <div className="code-line"><span className="code-comment">高信頼性システムでは95%以上を目指す必要がある」</span></div>
                            <div className="code-line"></div>
                            <div className="code-line"><span className="code-comment">→ 業界・リスクレベルで目標値が変わる点が Expert Level の視点</span></div>
                        </div>
                    </div>

                    <div className="trend-card">
                        <div className="trend-title">問3：マルチベンダー環境での対応</div>
                        <p style={{ fontSize: "0.9rem" }}>3社のベンダーを使用しているECサイトで統合テストに多数の不整合が発生しています。最も効果的な対応策はどれか？</p>
                        <div className="compare-grid" style={{ marginTop: "1rem" }}>
                            <div className="compare-card bad">
                                <div className="compare-card-header">❌ 誤り</div>
                                <div className="compare-item">A. 全ベンダーに同一ツール（Playwright）の使用を義務付ける<br /><br />C. 発注者側テストチームを3倍に増員して統合テスト全担当</div>
                            </div>
                            <div className="compare-card good">
                                <div className="compare-card-header">✅ 正解: B</div>
                                <div className="compare-item">統一された品質ゲート基準・テストレポートフォーマット・欠陥分類を合意し、契約に明記した上でコントラクトテストを導入する。<br /><br />包括的解決策が正解。ツール統一のみや増員は根本解決にならない。</div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr />

                {/* REFERENCES */}
                <section id="refs">
                    <div className="section-header">
                        <div className="chapter-num">REF</div>
                        <h2 className="section-title">参考文献・参照URL一覧</h2>
                    </div>

                    <h3>🏛️ ISTQB® 公式リソース</h3>
                    <div className="ref-grid">
                        <a className="ref-card" href="https://istqb.org/certifications/certified-tester-expert-level-test-management-strategic-test-management-ctel-tm-sm/" target="_blank">
                            <div className="ref-cat official">OFFICIAL</div>
                            <div className="ref-title">CTEL-TM-SM 公式認定ページ</div>
                            <div className="ref-url">istqb.org/certifications/ctel-tm-sm</div>
                        </a>
                        <a className="ref-card" href="https://istqb.org/certifications/certified-tester-expert-level-test-management-operational-test-management-ctel-tm-otm/" target="_blank">
                            <div className="ref-cat official">OFFICIAL</div>
                            <div className="ref-title">CTEL-TM-OTM（Part 2）公式ページ</div>
                            <div className="ref-url">istqb.org/certifications/ctel-tm-otm</div>
                        </a>
                        <a className="ref-card" href="https://istqb.org/" target="_blank">
                            <div className="ref-cat official">OFFICIAL</div>
                            <div className="ref-title">ISTQB® 公式サイト</div>
                            <div className="ref-url">istqb.org</div>
                        </a>
                        <a className="ref-card" href="https://glossary.istqb.org/en_US/search?term=" target="_blank">
                            <div className="ref-cat official">OFFICIAL</div>
                            <div className="ref-title">ISTQB® 公式グロッサリー</div>
                            <div className="ref-url">glossary.istqb.org</div>
                        </a>
                        <a className="ref-card" href="https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/" target="_blank">
                            <div className="ref-cat official">OFFICIAL</div>
                            <div className="ref-title">CTAL-TM v3.0（前提資格②）</div>
                            <div className="ref-url">istqb.org/certifications/ctal-tm-v3-0</div>
                        </a>
                        <a className="ref-card" href="https://istqb.org/certifications/certified-tester-foundation-level/" target="_blank">
                            <div className="ref-cat official">OFFICIAL</div>
                            <div className="ref-title">CTFL v4.0（前提資格①）</div>
                            <div className="ref-url">istqb.org/certifications/ctfl</div>
                        </a>
                    </div>

                    <h3>📢 試験プロバイダー</h3>
                    <div className="ref-grid">
                        <a className="ref-card" href="https://isqi.org/ISTQB-CTEL-TM-Part-1-Strategic-Test-Management/CT-EL-TM-MCQ-P1.82" target="_blank">
                            <div className="ref-cat exam">EXAM</div>
                            <div className="ref-title">iSQI — CTEL-TM Part 1（SM）試験情報</div>
                            <div className="ref-url">isqi.org/CT-EL-TM-MCQ-P1</div>
                        </a>
                        <a className="ref-card" href="https://www.brightest.org/en/certifications/ISTQB-r-CTEL-Test-Management-Strategic-Test-Management/" target="_blank">
                            <div className="ref-cat exam">EXAM</div>
                            <div className="ref-title">Brightest — CTEL-TM-SM 試験情報</div>
                            <div className="ref-url">brightest.org/ctel-tm-sm</div>
                        </a>
                        <a className="ref-card" href="https://istqb.org/exam-providers/" target="_blank">
                            <div className="ref-cat exam">EXAM</div>
                            <div className="ref-title">ISTQB® 試験プロバイダー検索</div>
                            <div className="ref-url">istqb.org/exam-providers</div>
                        </a>
                    </div>

                    <h3>📋 品質・テスト管理 標準・フレームワーク</h3>
                    <div className="ref-grid">
                        <a className="ref-card" href="https://www.tmmifoundation.org/" target="_blank">
                            <div className="ref-cat standard">STANDARD</div>
                            <div className="ref-title">TMMi Foundation — テスト成熟度モデル</div>
                            <div className="ref-url">tmmifoundation.org</div>
                        </a>
                        <a className="ref-card" href="https://www.iso.org/standard/81291.html" target="_blank">
                            <div className="ref-cat standard">STANDARD</div>
                            <div className="ref-title">ISO/IEC 29119 — ソフトウェアテスト国際標準</div>
                            <div className="ref-url">iso.org/standard/81291.html</div>
                        </a>
                        <a className="ref-card" href="https://www.iso.org/standard/78176.html" target="_blank">
                            <div className="ref-cat standard">STANDARD</div>
                            <div className="ref-title">ISO/IEC 25010:2023 — ソフトウェア品質モデル</div>
                            <div className="ref-url">iso.org/standard/78176.html</div>
                        </a>
                    </div>

                    <h3>🔧 関連ツール・フレームワーク</h3>
                    <div className="ref-grid">
                        <a className="ref-card" href="https://docs.pact.io/" target="_blank">
                            <div className="ref-cat tool">TOOL</div>
                            <div className="ref-title">Pact — コントラクトテスト</div>
                            <div className="ref-url">docs.pact.io</div>
                        </a>
                        <a className="ref-card" href="https://grafana.com/docs/k6/latest/" target="_blank">
                            <div className="ref-cat tool">TOOL</div>
                            <div className="ref-title">k6 by Grafana — 性能テスト</div>
                            <div className="ref-url">grafana.com/docs/k6</div>
                        </a>
                        <a className="ref-card" href="https://www.zaproxy.org/" target="_blank">
                            <div className="ref-cat tool">TOOL</div>
                            <div className="ref-title">OWASP ZAP — セキュリティテスト</div>
                            <div className="ref-url">zaproxy.org</div>
                        </a>
                        <a className="ref-card" href="https://docs.github.com/en/actions" target="_blank">
                            <div className="ref-cat tool">TOOL</div>
                            <div className="ref-title">GitHub Actions — CI/CDパイプライン</div>
                            <div className="ref-url">docs.github.com/en/actions</div>
                        </a>
                        <a className="ref-card" href="https://docs.sonarqube.org/" target="_blank">
                            <div className="ref-cat tool">TOOL</div>
                            <div className="ref-title">SonarQube — コード品質分析</div>
                            <div className="ref-url">docs.sonarqube.org</div>
                        </a>
                        <a className="ref-card" href="https://allurereport.org/" target="_blank">
                            <div className="ref-cat tool">TOOL</div>
                            <div className="ref-title">Allure TestOps — テストレポーティング</div>
                            <div className="ref-url">allurereport.org</div>
                        </a>
                    </div>

                    <h3>📚 学習リソース</h3>
                    <div className="ref-grid">
                        <a className="ref-card" href="https://testing.googleblog.com/" target="_blank">
                            <div className="ref-cat resource">RESOURCE</div>
                            <div className="ref-title">Google Testing Blog — ベストプラクティス</div>
                            <div className="ref-url">testing.googleblog.com</div>
                        </a>
                        <a className="ref-card" href="https://martinfowler.com/articles/practical-test-pyramid.html" target="_blank">
                            <div className="ref-cat resource">RESOURCE</div>
                            <div className="ref-title">Martin Fowler — テストピラミッド</div>
                            <div className="ref-url">martinfowler.com/practical-test-pyramid</div>
                        </a>
                        <a className="ref-card" href="https://www.istqb.guru/" target="_blank">
                            <div className="ref-cat resource">RESOURCE</div>
                            <div className="ref-title">ISTQB.Guru — 試験対策・解説</div>
                            <div className="ref-url">istqb.guru</div>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
