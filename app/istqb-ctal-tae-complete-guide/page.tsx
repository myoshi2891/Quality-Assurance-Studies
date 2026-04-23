import '../istqb-ctal-tae-complete-guide.css';
import Header from '../../components/Header';

export default function IstqbCtalTaeCompleteGuide() {
    return (
        <>
            <Header />
            
        {/* HERO */}
        <section className="hero">
            <div className="hero-glow"></div>
            <div className="hero-content">
                <div className="badge">ISTQB CTAL-TAE v2.0 | 2025-2026 EDITION</div>
                <h1>
                    <span className="accent-green">テスト自動化</span><br />
                    <span className="accent-cyan">完全ガイド</span>
                </h1>
                <p className="hero-sub">
                    初学者からエキスパートまで —
                    ステップバイステップで学ぶテスト自動化の設計・実装・運用
                </p>
                <div className="hero-meta">
                    <span className="meta-chip">試験: <strong>40問 / 90分</strong></span>
                    <span className="meta-chip">合格点: <strong>43/66点（65%）</strong></span>
                    <span className="meta-chip">前提: <strong>ISTQB CTFL 必須</strong></span>
                    <span className="meta-chip">最終更新: <strong>2026年4月</strong></span>
                </div>
            </div>
        </section>

        {/* NAV */}
        <nav className="sticky-nav">
            <div className="nav-inner">
                <a className="nav-item" href="#intro">OVERVIEW</a>
                <a className="nav-item" href="#ch1">CH.1 基礎</a>
                <a className="nav-item" href="#ch2">CH.2 準備・ROI</a>
                <a className="nav-item" href="#ch3">CH.3 gTAA</a>
                <a className="nav-item" href="#ch4">CH.4 実装</a>
                <a className="nav-item" href="#ch5">CH.5 CI/CD</a>
                <a className="nav-item" href="#ch6">CH.6 メトリクス</a>
                <a className="nav-item" href="#ch7">CH.7 TAS検証</a>
                <a className="nav-item" href="#ch8">CH.8 改善・AI</a>
                <a className="nav-item" href="#tools">TOOLS</a>
                <a className="nav-item" href="#exam">試験対策</a>
                <a className="nav-item" href="#refs">参考文献</a>
            </div>
        </nav>

        {/* OVERVIEW */}
        <section id="intro" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="chapter-num">OVERVIEW</span>
                    <h2>学習ロードマップ</h2>
                </div>

                <div className="callout info">
                    <div className="callout-icon">🎯</div>
                    <div className="callout-body">
                        <strong>このガイドについて：</strong>
                        ISTQB CTAL-TAE v2.0（Certified Tester Advanced Level - Test Automation
                        Engineering）の全8章を網羅し、初学者でも体系的にテスト自動化を習得できるよう設計されています。コード例・図解・最新ツール情報を含む実践的な内容です。
                    </div>
                </div>

                <div className="toc-grid">
                    <a className="toc-item" href="#ch1">
                        <span className="toc-num">01</span>
                        <span className="toc-text">テスト自動化の基礎と目的</span>
                        <span className="toc-tag">K2</span>
                    </a>
                    <a className="toc-item" href="#ch2">
                        <span className="toc-num">02</span>
                        <span className="toc-text">準備・ROI・ツール選定</span>
                        <span className="toc-tag">K3</span>
                    </a>
                    <a className="toc-item" href="#ch3">
                        <span className="toc-num">03</span>
                        <span className="toc-text">gTAA アーキテクチャ</span>
                        <span className="toc-tag">K3 ★★★</span>
                    </a>
                    <a className="toc-item" href="#ch4">
                        <span className="toc-num">04</span>
                        <span className="toc-text">フレームワーク実装</span>
                        <span className="toc-tag">K4 ★★★</span>
                    </a>
                    <a className="toc-item" href="#ch5">
                        <span className="toc-num">05</span>
                        <span className="toc-text">CI/CDパイプライン統合</span>
                        <span className="toc-tag">K3</span>
                    </a>
                    <a className="toc-item" href="#ch6">
                        <span className="toc-num">06</span>
                        <span className="toc-text">レポート・メトリクス</span>
                        <span className="toc-tag">K3</span>
                    </a>
                    <a className="toc-item" href="#ch7">
                        <span className="toc-num">07</span>
                        <span className="toc-text">TASソリューション検証</span>
                        <span className="toc-tag">K3</span>
                    </a>
                    <a className="toc-item" href="#ch8">
                        <span className="toc-num">08</span>
                        <span className="toc-text">継続的改善・AIトレンド</span>
                        <span className="toc-tag">K2</span>
                    </a>
                </div>

                <div className="metric-grid">
                    <div className="metric-card">
                        <span className="metric-value">8</span>
                        <span className="metric-label">CHAPTERS</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value cyan">40</span>
                        <span className="metric-label">試験問題数</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value amber">65%</span>
                        <span className="metric-label">合格基準</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value purple">90</span>
                        <span className="metric-label">試験時間（分）</span>
                    </div>
                </div>
            </div>
        </section>

        {/* CHAPTER 1 */}
        <section id="ch1" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="chapter-num">CHAPTER 01</span>
                    <h2>テスト自動化の基礎と目的</h2>
                </div>

                <p>
                    テスト自動化とは、ソフトウェアや専用ツールを使って、テストの実行・比較・報告などの作業を自動的に行うことです。手動テストが「人間→テストケース実行→結果を目視確認→バグ報告」というフローであるのに対し、自動化は「スクリプト→SUT実行→結果を自動比較→レポート自動生成」というフローになります。
                </p>

                <h3>メリットとデメリット</h3>
                <div className="grid-2">
                    <div className="card">
                        <div className="card-icon">✅</div>
                        <h4 style={{color: "var(--color-accent-green)"}}>自動化のメリット</h4>
                        <ul className="checklist">
                            <li>
                                <strong>繰り返し実行の効率化：</strong>同じテストを何度でも高速実行
                            </li>
                            <li><strong>人的ミスの排除：</strong>疲労による見落としがなくなる</li>
                            <li>
                                <strong>カバレッジ拡大：</strong>100万件の入力パターンも検証可能
                            </li>
                            <li><strong>早期フィードバック：</strong>コードPR後5分で結果確認</li>
                            <li>
                                <strong>長期コスト削減：</strong>初期投資後は繰り返しコストが低い
                            </li>
                            <li><strong>並列実行：</strong>複数環境で同時テスト実行</li>
                        </ul>
                    </div>
                    <div className="card cyan">
                        <div className="card-icon">⚠️</div>
                        <h4 style={{color: "var(--color-accent-yellow)"}}>自動化のデメリット</h4>
                        <ul className="checklist">
                            <li>
                                <strong>初期コストが高い：</strong>フレームワーク構築・学習コスト
                            </li>
                            <li><strong>メンテナンスコスト：</strong>SUT変更のたびに修正が必要</li>
                            <li><strong>適用限界：</strong>探索的テストは自動化が困難</li>
                            <li>
                                <strong>品質保証ではない：</strong>「テストが通る」≠「バグなし」
                            </li>
                            <li>
                                <strong>技術スキルが必要：</strong>プログラミング・設計スキル必須
                            </li>
                            <li><strong>フレイキーテスト：</strong>チームの信頼を損なうリスク</li>
                        </ul>
                    </div>
                </div>

                <div className="callout warning">
                    <div className="callout-icon">⚠️</div>
                    <div className="callout-body">
                        <strong>銀の弾丸ではない：</strong
                        >全テストを自動化しようとすること、探索的テストを自動化しようとすること、ROIを計算しないまま導入することは、失敗パターンとして最もよく見られます。
                    </div>
                </div>

                <h3>テスト自動化ピラミッド</h3>
                <p>
                    テスト自動化の構造的基盤として、「テスト自動化ピラミッド」モデルが広く採用されています。実行速度・コスト・フィードバック粒度に基づいてテストを階層化します。
                </p>

                <div className="pyramid">
                    <div className="pyramid-label">
                        <span>← 少ない</span><span>テスト数</span><span>多い →</span>
                    </div>
                    <div className="pyramid-level l1">E2E テスト（少量）</div>
                    <div className="pyramid-level l2">統合テスト（中程度）</div>
                    <div className="pyramid-level l3">APIテスト（多め）</div>
                    <div className="pyramid-level l4">ユニットテスト（大量）</div>
                </div>

                <div className="table-wrap">
                    <table>
                    <tbody></tbody>
                </table>
                </div>

                <h3>SDLCモデル別の自動化戦略</h3>
                <div className="table-wrap">
                    <table>
                    <tbody></tbody>
                </table>
                </div>

                <h3>シフトレフト / シフトライトアプローチ</h3>
                <div className="grid-2">
                    <div className="card">
                        <h4>← シフトレフト (Shift-Left)</h4>
                        <p>
                            開発の初期段階（要件定義・コーディングフェーズ）からテスト活動を開始する手法です。コードを記述するのと並行して単体テストやAPIテストを自動化することで、欠陥がシステム全体に波及する前に最もコストが低い段階でバグを捕捉します。
                        </p>
                        <div className="code-block">
                            <span className="line"
                                ><span className="code-comment"
                                    ># 修正コスト比較（業界標準）</span
                                ></span
                            >
                            <span className="line"
                                ><span className="code-green">要件定義段階</span>:
                                1x（最低コスト）</span
                            >
                            <span className="line"><span className="code-cyan">設計段階</span> : 5x</span>
                            <span className="line"
                                ><span className="code-amber">コーディング</span> : 10x</span
                            >
                            <span className="line"><span className="code-red">テスト段階</span> : 20x</span>
                            <span className="line"
                                ><span className="code-red">本番環境</span> : 100x（最高コスト）</span
                            >
                        </div>
                    </div>
                    <div className="card cyan">
                        <h4>→ シフトライト (Shift-Right)</h4>
                        <p>
                            リリース後の本番環境でのモニタリングやパフォーマンス計測を行い、実際のユーザー行動から得られたデータをテスト戦略にフィードバックする手法です。テスト環境では再現が困難なエッジケースや実際の運用負荷を評価します。
                        </p>
                        <div className="code-block cyan">
                            <span className="line"
                                ><span className="code-comment"># 本番環境での監視例</span></span
                            >
                            <span className="line"
                                ><span className="code-green">- カナリアデプロイメント</span></span
                            >
                            <span className="line"><span className="code-cyan">- A/Bテスト</span></span>
                            <span className="line"
                                ><span className="code-amber">- 本番環境スモークテスト</span></span
                            >
                            <span className="line"
                                ><span className="code-purple">- 分散トレーシング</span></span
                            >
                            <span className="line"
                                ><span className="code-green">- ユーザー行動分析</span></span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CHAPTER 2 */}
        <section id="ch2" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="chapter-num cyan">CHAPTER 02</span>
                    <h2>テスト自動化の準備・ROI・ツール選定</h2>
                </div>

                <h3>テスト容易性（Testability）の確保</h3>
                <p>
                    テスト対象システム（SUT）が自動化しやすい構造を持っていることが重要です。これを「テストのための設計（Design
                    for Testability）」と呼び、主に以下の2つの側面から評価します。
                </p>

                <div className="grid-2">
                    <div className="card">
                        <h4>👁️ 観測可能性（Observability）</h4>
                        <p>
                            テストがSUTの状態や出力を<strong>観察・確認できる</strong>度合いです。UI要素に一意のID（data-testid）が付与されていること、エラーログが構造化されて出力されていることが重要です。
                        </p>
                        <div className="code-block">
                            <span className="line"
                                ><span className="code-comment"># ❌ 観測不可能な設計</span></span
                            >
                            <span className="line"
                                ><span className="code-keyword">def</span>
                                <span className="code-green">create_user</span>(name, email):</span
                            >
                            <span className="line">
                                db.insert(&#123;<span className="code-string">"name"</span>: name&#125;)
                                <span className="code-comment"># 戻り値なし・確認手段なし</span></span
                            >
                            <span className="line"></span>
                            <span className="line"
                                ><span className="code-comment"># ✅ 観測可能な設計</span></span
                            >
                            <span className="line"
                                ><span className="code-keyword">def</span>
                                <span className="code-green">create_user</span>(name, email) -&gt;
                                User:</span
                            >
                            <span className="line"> user = User(id=uuid4(), ...)</span>
                            <span className="line">
                                logger.info(<span className="code-string">f"Created: &#123;user.id&#125;"</span
                                >)</span
                            >
                            <span className="line">
                                <span className="code-keyword">return</span> user
                                <span className="code-comment"># テストで確認可能</span></span
                            >
                        </div>
                    </div>
                    <div className="card cyan">
                        <h4>🎛️ 制御可能性（Controllability）</h4>
                        <p>
                            テストがSUTの状態を<strong>制御・操作できる</strong>度合いです。依存性注入（DI）でモックに差し替えられること、テスト用APIが存在することが求められます。
                        </p>
                        <div className="code-block cyan">
                            <span className="line"
                                ><span className="code-comment"># ❌ 制御不能な設計</span></span
                            >
                            <span className="line"
                                ><span className="code-keyword">def</span>
                                <span className="code-green">process_payment</span>(amount):</span
                            >
                            <span className="line">
                                <span className="code-keyword">return</span>
                                real_stripe_api.charge(amount)</span
                            >
                            <span className="line"></span>
                            <span className="line"
                                ><span className="code-comment"># ✅ 依存性注入で制御可能</span></span
                            >
                            <span className="line"
                                ><span className="code-keyword">def</span>
                                <span className="code-green">__init__</span>(self, gateway):</span
                            >
                            <span className="line">
                                self._gateway = gateway
                                <span className="code-comment"># 差し替え可</span></span
                            >
                            <span className="line"></span>
                            <span className="line"
                                ><span className="code-comment"># テストでモックを注入</span></span
                            >
                            <span className="line">mock = MockGateway(always_success=True)</span>
                            <span className="line">service = PaymentService(gateway=mock)</span>
                        </div>
                    </div>
                </div>

                <h3>ROI（投資対効果）の計算</h3>
                <div className="formula-box">
                    <div className="formula">ROI (%) = ((節約額 − コスト) ÷ コスト) × 100</div>
                    <div className="formula-note">
                        自動化の価値を定量化して経営層の承認を得るための指標
                    </div>
                </div>

                <div className="grid-2">
                    <div className="card">
                        <h4 style={{color: "var(--color-accent-red)"}}>📊 コスト項目</h4>
                        <ul className="checklist">
                            <li>
                                <strong>フレームワーク構築：</strong>200時間 × 8,000円 = 160万円
                            </li>
                            <li>
                                <strong>テスト作成（100件）：</strong>100時間 × 8,000円 = 80万円
                            </li>
                            <li><strong>年間メンテナンス：</strong>50時間 × 8,000円 = 40万円</li>
                            <li><strong>保守時間：</strong>UI変更・スクリプト修正コスト</li>
                            <li><strong>分析時間：</strong>失敗原因調査のトリアージ</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h4 style={{color: "var(--color-accent-green)"}}>📈 利益項目</h4>
                        <ul className="checklist">
                            <li>
                                <strong>手動テスト削減：</strong>1,300時間 × 8,000円 = 1,040万円/年
                            </li>
                            <li><strong>早期バグ発見：</strong>本番修正コスト削減 約200万円</li>
                            <li><strong>欠陥流出防止：</strong>致命的ビジネス損失の回避</li>
                            <li><strong>QA解放効果：</strong>探索的テストへの集中</li>
                            <li><strong>品質向上：</strong>顧客満足度向上による収益貢献</li>
                        </ul>
                    </div>
                </div>

                <div className="alert alert-green">
                    <div className="alert-title">💡 ROI計算例</div>
                    1年間のROI = ((1,040万 + 200万 − 280万) ÷ 280万) × 100 =
                    <strong style={{color: "var(--color-accent-green)"}}>342%</strong>
                </div>

                <h3>ツール評価プロセス（6ステップ）</h3>
                <div className="step-list">
                    <div className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-body">
                            <strong>要件定義</strong>
                            <p>
                                SUTのタイプ（Web/モバイル/API）、チームスキル、予算、既存環境との統合要件を明確化します。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-body">
                            <strong>候補のリストアップ</strong>
                            <p>
                                オープンソース vs 商用、クラウド vs
                                オンプレミスなど選択肢を幅広く収集します。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-body">
                            <strong>評価基準の重み付け</strong>
                            <p>
                                SUT適合性・学習コスト・既存環境統合・メンテナンス性・TCOなどの基準を定め、重みを付けます。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">4</div>
                        <div className="step-body">
                            <strong>POC（概念実証）の実施</strong>
                            <p>
                                実際のSUTで候補ツールを試験的に動かし（パイロット）、実用性を検証します。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">5</div>
                        <div className="step-body">
                            <strong>評価結果の比較</strong>
                            <p>スコアマトリクスを用いて客観的に比較検討します。</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">6</div>
                        <div className="step-body">
                            <strong>最終決定・承認</strong>
                            <p>ステークホルダーへの報告と経営層の承認を得てツールを確定します。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CHAPTER 3 */}
        <section id="ch3" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="chapter-num amber">CHAPTER 03 ★★★★★</span>
                    <h2>汎用テスト自動化アーキテクチャ（gTAA）</h2>
                </div>

                <div className="callout warning">
                    <div className="callout-icon">⭐</div>
                    <div className="callout-body">
                        <strong>試験最重要章！</strong> gTAA（Generic Test Automation
                        Architecture）は試験に必ず出題されます。4つの層を完全に理解してください。配点12点（全体の約18%）。
                    </div>
                </div>

                <p>
                    gTAAは、CTAL-TAE
                    v2.0で定義されるテスト自動化ソリューションの設計指針となるリファレンスモデルです。ソフトウェア工学のSOLID原則に基づき、システムを4つの水平な論理レイヤーに分割します。
                </p>

                <h3>gTAA 4層アーキテクチャ</h3>
                <div className="arch-layers">
                    <div className="arch-layer l1">
                        <span className="arch-num">L1</span>
                        <span className="arch-title"
                            >Test Management Layer<br /><small
                                style={{color: "var(--color-text-muted)", fontWeight: "400"}}
                                >テスト管理層</small
                            ></span
                        >
                        <span className="arch-desc"
                            >テスト計画・実行・レポートの管理。外部のテスト管理ツールと統合します。</span
                        >
                        <div className="arch-tools">
                            <span className="tool-tag">TestRail</span>
                            <span className="tool-tag">Jira / Zephyr</span>
                            <span className="tool-tag">Azure DevOps</span>
                        </div>
                    </div>
                    <div className="arch-layer l2">
                        <span className="arch-num">L2</span>
                        <span className="arch-title"
                            >Test Definition Layer<br /><small
                                style={{color: "var(--color-text-muted)", fontWeight: "400"}}
                                >テスト定義層</small
                            ></span
                        >
                        <span className="arch-desc"
                            >テストケース・テストデータの定義。ビジネスロジックのみを記述し、技術的実装詳細から切り離されます。</span
                        >
                        <div className="arch-tools">
                            <span className="tool-tag">Gherkin</span>
                            <span className="tool-tag">YAML/JSON</span>
                            <span className="tool-tag">CSV</span>
                        </div>
                    </div>
                    <div className="arch-layer l3">
                        <span className="arch-num">L3</span>
                        <span className="arch-title"
                            >Test Execution Layer<br /><small
                                style={{color: "var(--color-text-muted)", fontWeight: "400"}}
                                >テスト実行層</small
                            ></span
                        >
                        <span className="arch-desc"
                            >テストの実行・スケジューリング・結果制御。CI/CDパイプラインとの連携もこの層が担います。</span
                        >
                        <div className="arch-tools">
                            <span className="tool-tag">pytest</span>
                            <span className="tool-tag">JUnit</span>
                            <span className="tool-tag">TestNG</span>
                            <span className="tool-tag">Playwright</span>
                        </div>
                    </div>
                    <div className="arch-layer l4">
                        <span className="arch-num">L4</span>
                        <span className="arch-title"
                            >Test Adaptation Layer<br /><small
                                style={{color: "var(--color-text-muted)", fontWeight: "400"}}
                                >テスト適合層</small
                            ></span
                        >
                        <span className="arch-desc"
                            >SUTとのインターフェース。各種アダプター（UIドライバー・APIクライアント）がここに実装されます。</span
                        >
                        <div className="arch-tools">
                            <span className="tool-tag">Selenium</span>
                            <span className="tool-tag">requests</span>
                            <span className="tool-tag">WireMock</span>
                        </div>
                    </div>
                </div>

                <div className="alert alert-cyan">
                    <div className="alert-title">🔑 gTAA の最大メリット</div>
                    例えばSUTのUIデザインが変わってログインボタンのHTML構造が変わった場合、影響を受けるのは<strong
                        >Test Adaptation Layer（L4）のロケーターのみ</strong
                    >です。テストケースの論理構造（L2）や実行順序（L3）には一切変更不要。これが長期的な保守性とROIを担保するメカニズムです。
                </div>

                <h3>テスト自動化フレームワークアプローチ</h3>
                <div className="grid-2">
                    <div className="card">
                        <h4>🎬 Capture &amp; Playback</h4>
                        <p>
                            手動操作を記録して再生。技術スキル不要で素早く作成できる反面、メンテナンス性が最悪で大規模プロジェクトには不向き。
                        </p>
                        <div
                            className="alert alert-red"
                            style={{fontSize: "1rem", margin: "12px 0", padding: "10px 14px"}}
                        >
                            <strong>⚠️ 非推奨：</strong>
                            UI変更のたびに全スクリプト再作成が必要になります。
                        </div>
                    </div>
                    <div className="card">
                        <h4>📊 Data-Driven Testing</h4>
                        <p>
                            テストロジックとデータを分離。CSV/JSON/DBからデータを動的に読み込み、同一スクリプトで多様なデータパターンを検証可能。
                        </p>
                        <div className="code-block" style={{fontSize: "1rem"}}>
                            <span className="line"
                                ><span className="code-green">@pytest.mark.parametrize</span>(<span
                                    className="code-string"
                                    >"email,pw,expected"</span
                                >, [</span
                            >
                            <span className="line">
                                (<span className="code-string">"ok@ex.com"</span>,
                                <span className="code-string">"pass"</span>,
                                <span className="code-string">"Dashboard"</span>),</span
                            >
                            <span className="line">
                                (<span className="code-string">"ng@ex.com"</span>,
                                <span className="code-string">"wrong"</span>,
                                <span className="code-string">"Error"</span>),</span
                            >
                            <span className="line">])</span>
                        </div>
                    </div>
                    <div className="card cyan">
                        <h4>🔑 Keyword-Driven Testing</h4>
                        <p>
                            操作を「Login_User」「Add_To_Cart」のような人間が読めるキーワードに抽象化。非エンジニアもテストケースを構築可能になります。
                        </p>
                        <div className="code-block cyan" style={{fontSize: "1rem"}}>
                            <span className="line"
                                ><span className="code-cyan">| Action | Target | Value |</span></span
                            >
                            <span className="line">| Open Browser | example.com| |</span>
                            <span className="line">| Input Text | id:email | test@example.com |</span>
                            <span className="line">| Click Element| id:login | |</span>
                        </div>
                    </div>
                    <div className="card">
                        <h4>🥒 BDD（振る舞い駆動開発）</h4>
                        <p>
                            Gherkin記法でビジネス担当者も読める仕様書兼テストを作成。Given-When-Thenの構造で要件との整合性を保ちます。
                        </p>
                        <div className="code-block" style={{fontSize: "1rem"}}>
                            <span className="line"
                                ><span className="code-green">Given</span>
                                ユーザーがログインページにいる</span
                            >
                            <span className="line"
                                ><span className="code-cyan">When</span> 有効な資格情報を入力する</span
                            >
                            <span className="line"
                                ><span className="code-amber">Then</span> ダッシュボードに遷移する</span
                            >
                            <span className="line"
                                ><span className="code-purple">And</span>
                                ウェルカムメッセージが表示される</span
                            >
                        </div>
                    </div>
                </div>

                <h3>Page Object Model（POM）パターン</h3>
                <p>
                    Webおよびモバイルテストにおいて事実上の標準となっているデザインパターンです。各画面を1つのクラスとして定義し、要素とアクションをカプセル化します。
                </p>

                <div className="code-block">
                    <span className="code-label">Python / Selenium</span>
                    <span className="line"
                        ><span className="code-comment"
                            ># pages/login_page.py — ロケーターとアクションをカプセル化</span
                        ></span
                    >
                    <span className="line"
                        ><span className="code-keyword">class</span>
                        <span className="code-cyan">LoginPage</span>:</span
                    >
                    <span className="line">
                        <span className="code-keyword">def</span>
                        <span className="code-green">__init__</span>(self, driver):</span
                    >
                    <span className="line"> self.driver = driver</span>
                    <span className="line">
                        self.EMAIL_INPUT = (<span className="code-string">"id"</span>,
                        <span className="code-string">"email"</span>)</span
                    >
                    <span className="line">
                        self.PASSWORD_INPUT = (<span className="code-string">"id"</span>,
                        <span className="code-string">"password"</span>)</span
                    >
                    <span className="line">
                        self.LOGIN_BUTTON = (<span className="code-string">"id"</span>,
                        <span className="code-string">"login-btn"</span>)</span
                    >
                    <span className="line"></span>
                    <span className="line">
                        <span className="code-keyword">def</span>
                        <span className="code-green">login</span>(self, email, password):</span
                    >
                    <span className="line">
                        self.driver.find_element(*self.EMAIL_INPUT).send_keys(email)</span
                    >
                    <span className="line">
                        self.driver.find_element(*self.PASSWORD_INPUT).send_keys(password)</span
                    >
                    <span className="line"> self.driver.find_element(*self.LOGIN_BUTTON).click()</span>
                    <span className="line">
                        <span className="code-keyword">return</span> DashboardPage(self.driver)
                        <span className="code-comment"># 次ページを返す</span></span
                    >
                    <span className="line"></span>
                    <span className="line"
                        ><span className="code-comment"
                            ># test_login.py — クリーンで読みやすいテストコード</span
                        ></span
                    >
                    <span className="line"
                        ><span className="code-keyword">def</span>
                        <span className="code-green">test_valid_login</span>(driver):</span
                    >
                    <span className="line"> dashboard = LoginPage(driver).navigate().login(</span>
                    <span className="line">
                        email=<span className="code-string">"test@example.com"</span>,</span
                    >
                    <span className="line">
                        password=<span className="code-string">"password123"</span></span
                    >
                    <span className="line"> )</span>
                    <span className="line">
                        <span className="code-keyword">assert</span> dashboard.is_loaded()
                        <span className="code-comment"># ✅ 明確なアサーション</span></span
                    >
                </div>
            </div>
        </section>

        {/* CHAPTER 4 */}
        <section id="ch4" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="chapter-num amber">CHAPTER 04 ★★★★★</span>
                    <h2>テスト自動化の実装（最大配点章）</h2>
                </div>

                <h3>パイロットプロジェクトの進め方</h3>
                <p>
                    本格導入前にパイロット（試験的）プロジェクトを実施して、フレームワークの実現可能性を評価します。
                </p>

                <div className="step-list">
                    <div className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-body">
                            <strong>スコープ定義（Phase 1：2週間）</strong>
                            <p>
                                自動化する機能の選定（中程度の複雑さを選ぶ）、成功基準の設定（テスト実行時間・安定性・メンテナンス容易性）。<strong>要件が頻繁に変更される機能はスコープから除外</strong>することが重要です。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-body">
                            <strong>SUT安定性の確認（Phase 2：1週間）</strong>
                            <p>
                                開発途中の機能に対してスクリプトを作成すると継続的な修正に追われます。事前の徹底した手動テストとバグトリアージの完了を確認してください。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-body">
                            <strong>実装（Phase 3：3〜4週間）</strong>
                            <p>
                                テストケースの自動化（10〜20件）とフレームワーク基盤の構築を行います。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">4</div>
                        <div className="step-body">
                            <strong>評価（Phase 4：1週間）</strong>
                            <p>実行安定性の確認・メンテナンスコスト見積もり・ROI試算を行います。</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">5</div>
                        <div className="step-body">
                            <strong>Go/No-Go 決定</strong>
                            <p>ステークホルダーに結果を報告し、本格展開か見直しかを決定します。</p>
                        </div>
                    </div>
                </div>

                <h3>テストコード品質のベストプラクティス</h3>
                <div className="grid-2">
                    <div className="card">
                        <h4>🏷️ 良い命名規則</h4>
                        <div className="code-block">
                            <span className="line"><span className="code-comment"># ❌ 悪い例</span></span>
                            <span className="line"
                                ><span className="code-keyword">def</span>
                                <span className="code-red">test1</span>():</span
                            >
                            <span className="line"> ...</span>
                            <span className="line"></span>
                            <span className="line"
                                ><span className="code-comment"
                                    ># ✅ 良い例：対象_条件_期待結果</span
                                ></span
                            >
                            <span className="line"
                                ><span className="code-keyword">def</span>
                                <span className="code-green"
                                    >test_login_with_valid_credentials</span
                                ></span
                            >
                            <span className="line"
                                ><span className="code-green">_should_redirect_to_dashboard</span
                                >():</span
                            >
                            <span className="line"> <span className="code-string">"""</span></span>
                            <span className="line">
                                <span className="code-string"
                                    >Given: 有効な資格情報を持っている</span
                                ></span
                            >
                            <span className="line">
                                <span className="code-string"
                                    >When: ログインフォームを送信する</span
                                ></span
                            >
                            <span className="line">
                                <span className="code-string"
                                    >Then: ダッシュボードへリダイレクト</span
                                ></span
                            >
                            <span className="line"> <span className="code-string">"""</span></span>
                        </div>
                    </div>
                    <div className="card cyan">
                        <h4>🔒 テストの独立性</h4>
                        <div className="code-block cyan">
                            <span className="line"
                                ><span className="code-green">@pytest.fixture(autouse=True)</span></span
                            >
                            <span className="line"
                                ><span className="code-keyword">def</span>
                                <span className="code-cyan">setup_and_teardown</span>(self, db):</span
                            >
                            <span className="line">
                                <span className="code-comment"># Setup: テストデータ作成</span></span
                            >
                            <span className="line"> self.user = user_factory.create()</span>
                            <span className="line"></span>
                            <span className="line">
                                <span className="code-keyword">yield</span>
                                <span className="code-comment"># テスト実行</span></span
                            >
                            <span className="line"></span>
                            <span className="line">
                                <span className="code-comment"
                                    ># Teardown: 必ずクリーンアップ</span
                                ></span
                            >
                            <span className="line"> db.delete_user(self.user.id)</span>
                        </div>
                    </div>
                </div>

                <h3>リスク管理マトリクス</h3>
                <div className="table-wrap">
                    <table>
                    <tbody></tbody>
                </table>
                </div>

                <h3>フレイキーテスト撲滅</h3>
                <div className="code-block">
                    <span className="code-label">Python</span>
                    <span className="line"
                        ><span className="code-comment"
                            ># ❌ 悪い例：固定 sleep（フレイキーの主原因）</span
                        ></span
                    >
                    <span className="line"
                        ><span className="code-keyword">def</span>
                        <span className="code-red">bad_test</span>(page):</span
                    >
                    <span className="line">
                        page.click(<span className="code-string">"#load-button"</span>)</span
                    >
                    <span className="line">
                        time.sleep(3)
                        <span className="code-comment"># ← 環境によって足りないことがある！</span></span
                    >
                    <span className="line">
                        <span className="code-keyword">assert</span> page.find(<span className="code-string"
                            >"#result"</span
                        >).is_visible()</span
                    >
                    <span className="line"></span>
                    <span className="line"
                        ><span className="code-comment"># ✅ 良い例：条件ベースの明示的待機</span></span
                    >
                    <span className="line"
                        ><span className="code-keyword">def</span>
                        <span className="code-green">good_test</span>(page):</span
                    >
                    <span className="line">
                        page.click(<span className="code-string">"#load-button"</span>)</span
                    >
                    <span className="line">
                        page.wait_for_selector(<span className="code-string">"#result"</span>,
                        state=<span className="code-string">"visible"</span>)
                        <span className="code-comment"># 要素が現れるまで待つ</span></span
                    >
                    <span className="line">
                        <span className="code-keyword">assert</span> page.find(<span className="code-string"
                            >"#result"</span
                        >).is_visible()</span
                    >
                    <span className="line"></span>
                    <span className="line"
                        ><span className="code-comment"
                            ># ✅ 外部サービス依存のテストにはリトライを活用</span
                        ></span
                    >
                    <span className="line"
                        ><span className="code-green">@pytest.mark.flaky</span>(reruns=3,
                        reruns_delay=2)</span
                    >
                    <span className="line"
                        ><span className="code-keyword">def</span>
                        <span className="code-green">test_external_api</span>(api_client):</span
                    >
                    <span className="line"> response = api_client.ping_external_service()</span>
                    <span className="line">
                        <span className="code-keyword">assert</span> response.status_code == 200</span
                    >
                </div>
            </div>
        </section>

        {/* CHAPTER 5 */}
        <section id="ch5" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="chapter-num cyan">CHAPTER 05</span>
                    <h2>CI/CDパイプラインへの統合</h2>
                </div>

                <p>
                    テスト自動化の最大の価値は、<strong>CI/CDパイプラインに組み込んで継続的に実行すること</strong>にあります。コードPushのたびに自動実行されることで真の「継続的テスト」が実現します。
                </p>

                <h3>推奨パイプライン構成</h3>
                <div className="code-block amber">
                    <span className="code-label">Pipeline Flow</span>
                    <span className="line"><span className="code-green">① コードPush / PR作成</span></span>
                    <span className="line">↓</span>
                    <span className="line"
                        ><span className="code-cyan">② Lint / Static Analysis</span> ← ESLint, flake8,
                        SonarQube</span
                    >
                    <span className="line">↓</span>
                    <span className="line"
                        ><span className="code-green">③ Unit Tests</span> ← 高速（&lt; 2分） | Jest,
                        pytest, JUnit</span
                    >
                    <span className="line">↓</span>
                    <span className="line"
                        ><span className="code-cyan">④ Integration Tests</span> ← 中速（&lt; 10分） |
                        API Tests, DB Tests</span
                    >
                    <span className="line">↓</span>
                    <span className="line"
                        ><span className="code-amber">⑤ E2E Smoke Tests</span> ← スモーク（&lt; 15分） |
                        Playwright @smoke</span
                    >
                    <span className="line">↓</span>
                    <span className="line"
                        ><span className="code-purple">⑥ Security Scan</span> ← OWASP ZAP, Snyk</span
                    >
                    <span className="line">↓</span>
                    <span className="line"><span className="code-cyan">⑦ Deploy to Staging</span></span>
                    <span className="line">↓</span>
                    <span className="line"
                        ><span className="code-amber">⑧ Full E2E Regression</span> ←
                        夜間バッチ実行（全件）</span
                    >
                    <span className="line">↓</span>
                    <span className="line"
                        ><span className="code-green">⑨ Deploy to Production</span> ← 人間の承認後</span
                    >
                    <span className="line">↓</span>
                    <span className="line"
                        ><span className="code-green">⑩ Production Smoke Test</span> ←
                        デプロイ後確認</span
                    >
                </div>

                <h3>GitHub Actions 実装例</h3>
                <div className="code-block">
                    <span className="code-label">YAML / GitHub Actions</span>
                    <span className="line"
                        ><span className="code-keyword">name</span>: テスト自動化パイプライン</span
                    >
                    <span className="line"></span>
                    <span className="line"><span className="code-keyword">on</span>:</span>
                    <span className="line"> <span className="code-green">push</span>:</span>
                    <span className="line"> branches: [main, develop]</span>
                    <span className="line"> <span className="code-cyan">schedule</span>:</span>
                    <span className="line">
                        - cron: <span className="code-string">'0 2 * * *'</span>
                        <span className="code-comment"># 毎日深夜2時にフルリグレッション</span></span
                    >
                    <span className="line"></span>
                    <span className="line"><span className="code-keyword">jobs</span>:</span>
                    <span className="line"> <span className="code-cyan">unit-tests</span>:</span>
                    <span className="line"> runs-on: ubuntu-latest</span>
                    <span className="line"> timeout-minutes: 10</span>
                    <span className="line"> steps:</span>
                    <span className="line">
                        - run: pytest tests/unit/ --cov=src --cov-fail-under=80</span
                    >
                    <span className="line"></span>
                    <span className="line"> <span className="code-cyan">integration-tests</span>:</span>
                    <span className="line">
                        needs: unit-tests
                        <span className="code-comment"># ユニットテスト成功後に実行</span></span
                    >
                    <span className="line"> services:</span>
                    <span className="line"> postgres:</span>
                    <span className="line"> image: postgres:16</span>
                    <span className="line"></span>
                    <span className="line"> <span className="code-cyan">e2e-regression</span>:</span>
                    <span className="line">
                        <span className="code-keyword">if</span>: github.event_name ==
                        <span className="code-string">'schedule'</span></span
                    >
                    <span className="line"> strategy:</span>
                    <span className="line"> matrix:</span>
                    <span className="line">
                        browser: [chromium, firefox, webkit]
                        <span className="code-comment"># クロスブラウザ並列</span></span
                    >
                </div>

                <h3>クロスブラウザ / クロスプラットフォーム戦略</h3>
                <div className="grid-3">
                    <div className="card">
                        <h4>🌐 クラウドデバイスファーム</h4>
                        <p>
                            BrowserStack・Sauce Labsを活用。Windows ChromeからiOS
                            Safariまで数百種類の組み合わせを同時テスト可能。物理デバイス管理コストを削減。
                        </p>
                    </div>
                    <div className="card cyan">
                        <h4>🐳 コンテナ化戦略</h4>
                        <p>
                            DockerとSelenium
                            Gridを組み合わせて環境を標準化。「自分の環境では動いた」問題を根絶。環境の差異をコード（Infrastructure
                            as Code）で管理します。
                        </p>
                    </div>
                    <div className="card">
                        <h4>⚡ テスト並列化</h4>
                        <p>
                            pytest -n
                            autoまたはplaywrightの--workersオプションで複数CPU/コンテナを活用した並列実行を実現。E2E実行時間を1/4〜1/8に短縮できます。
                        </p>
                    </div>
                </div>

                <h3>コントラクトテスト（Pact）</h3>
                <p>
                    マイクロサービス間のAPIの期待値を事前に合意するコンシューマー駆動型コントラクトテストです。サービス間の結合テストを大幅に削減できます。
                </p>
                <div className="code-block cyan">
                    <span className="code-label">Python / Pact</span>
                    <span className="line"
                        ><span className="code-comment"
                            ># コンシューマーが期待するAPIのレスポンスを定義</span
                        ></span
                    >
                    <span className="line">(pact</span>
                    <span className="line">
                        .given(<span className="code-string">"ユーザーID=1が存在する"</span>)</span
                    >
                    <span className="line">
                        .upon_receiving(<span className="code-string">"GET /users/1"</span>)</span
                    >
                    <span className="line">
                        .with_request(<span className="code-string">"GET"</span>,
                        <span className="code-string">"/users/1"</span>)</span
                    >
                    <span className="line"> .will_respond_with(200, body=&#123;</span>
                    <span className="line"> <span className="code-string">"id"</span>: 1,</span>
                    <span className="line">
                        <span className="code-string">"name"</span>: like(<span className="code-string"
                            >"string型"</span
                        >), <span className="code-comment"># 型のみ検証</span></span
                    >
                    <span className="line">
                        <span className="code-string">"role"</span>: term(<span className="code-string"
                            >r"admin|user"</span
                        >, <span className="code-string">"user"</span>),
                        <span className="code-comment"># パターン検証</span></span
                    >
                    <span className="line"> &#125;)</span>
                    <span className="line">)</span>
                </div>
            </div>
        </section>

        {/* CHAPTER 6 */}
        <section id="ch6" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="chapter-num purple">CHAPTER 06</span>
                    <h2>レポーティングとメトリクス</h2>
                </div>

                <h3>収集すべきKPIカテゴリ</h3>
                <div className="grid-2">
                    <div className="card">
                        <h4>📊 ビジネス指標（経営層向け）</h4>
                        <ul className="checklist">
                            <li>
                                <strong>本番欠陥流出率：</strong
                                >本番に到達したバグの割合。継続的低下で価値を証明
                            </li>
                            <li>
                                <strong>リリースサイクル短縮：</strong>コミットから本番までの時間
                            </li>
                            <li><strong>自動化ROI：</strong>コスト対節約額の比率</li>
                            <li><strong>テストカバレッジ率：</strong>コード・機能のカバレッジ</li>
                        </ul>
                    </div>
                    <div className="card cyan">
                        <h4>🔧 技術指標（開発チーム向け）</h4>
                        <ul className="checklist">
                            <li>
                                <strong>Pass/Failトレンド：</strong>複数ビルドにまたがる安定性推移
                            </li>
                            <li>
                                <strong>MTTD（平均検出時間）：</strong>変更から問題検出までの時間
                            </li>
                            <li>
                                <strong>フレイキーテスト率：</strong
                                >5%以下が目標（これが多いと信頼崩壊）
                            </li>
                            <li><strong>テスト実行時間：</strong>パイプライン効率の指標</li>
                        </ul>
                    </div>
                </div>

                <h3>目標値と評価基準</h3>
                <div className="metric-grid">
                    <div className="metric-card">
                        <span className="metric-value">&lt;5%</span>
                        <span className="metric-label">フレイキー率目標</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value cyan">80%</span>
                        <span className="metric-label">コードカバレッジ目標</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value amber">&lt;15min</span>
                        <span className="metric-label">E2Eスモーク目標</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value purple">&lt;2min</span>
                        <span className="metric-label">ユニットテスト目標</span>
                    </div>
                </div>

                <h3>テスト実行速度のトレンド管理</h3>
                <div className="card" style={{margin: "20px 0"}}>
                    <h4>テストスイート実行時間モニタリング</h4>
                    <div className="progress-item">
                        <div className="progress-label">
                            <span>Unit Tests</span>
                            <span style={{color: "var(--color-accent-green)"}}>2.1分 ✅ 目標3分以内</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{width: "70%", background: "var(--color-accent-green)"}}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-label">
                            <span>Integration Tests</span>
                            <span style={{color: "var(--color-accent-green)"}}>8.5分 ✅ 目標10分以内</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{width: "85%", background: "var(--color-accent-cyan)"}}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-label">
                            <span>E2E Smoke Tests</span>
                            <span style={{color: "var(--color-accent-green)"}}>24.3分 ✅ 目標30分以内</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{width: "81%", background: "var(--color-accent-yellow)"}}
                            ></div>
                        </div>
                    </div>
                </div>

                <h3>Allure レポート（高品質なレポート生成）</h3>
                <div className="code-block">
                    <span className="code-label">Python / Allure</span>
                    <span className="line"
                        ><span className="code-green">@allure.feature</span>(<span className="code-string"
                            >"ユーザー管理"</span
                        >)</span
                    >
                    <span className="line"
                        ><span className="code-green">@allure.story</span>(<span className="code-string"
                            >"ログイン"</span
                        >)</span
                    >
                    <span className="line"
                        ><span className="code-green">@allure.severity</span
                        >(allure.severity_level.CRITICAL)</span
                    >
                    <span className="line"
                        ><span className="code-keyword">class</span>
                        <span className="code-cyan">TestLogin</span>:</span
                    >
                    <span className="line">
                        <span className="code-green">@allure.title</span>(<span className="code-string"
                            >"有効な資格情報でログイン成功"</span
                        >)</span
                    >
                    <span className="line">
                        <span className="code-keyword">def</span>
                        <span className="code-green">test_successful_login</span>(self, driver,
                        login_page):</span
                    >
                    <span className="line">
                        <span className="code-keyword">with</span> allure.step(<span className="code-string"
                            >"ログインページを開く"</span
                        >):</span
                    >
                    <span className="line"> login_page.navigate()</span>
                    <span className="line">
                        <span className="code-keyword">with</span> allure.step(<span className="code-string"
                            >"資格情報を入力してログイン"</span
                        >):</span
                    >
                    <span className="line">
                        dashboard = login_page.login(<span className="code-string">"test@ex.com"</span>,
                        <span className="code-string">"pass"</span>)</span
                    >
                    <span className="line">
                        <span className="code-comment"
                            ># スクリーンショットをレポートに自動添付</span
                        ></span
                    >
                    <span className="line"> allure.attach(driver.get_screenshot_as_png(),</span>
                    <span className="line"> attachment_type=allure.attachment_type.PNG)</span>
                </div>
            </div>
        </section>

        {/* CHAPTER 7 */}
        <section id="ch7" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="chapter-num red">CHAPTER 07</span>
                    <h2>テスト自動化ソリューション（TAS）の検証</h2>
                </div>

                <div className="callout danger">
                    <div className="callout-icon">🚨</div>
                    <div className="callout-body">
                        <strong>重要な概念：</strong>
                        TAS（テスト自動化ソリューション）自体にも欠陥がある！テストコードそのものをテストすることが「TASの検証」です。これは試験でよく問われる概念です。
                    </div>
                </div>

                <h3>偽陽性と偽陰性</h3>
                <div className="grid-2">
                    <div className="card">
                        <h4 style={{color: "var(--color-accent-yellow)"}}>⚠️ False Positive（偽陽性）</h4>
                        <p>
                            SUTに問題がないのにテストが失敗する状態です。開発者が無駄なデバッグ時間を費やし、パイプラインを不要に停止させます。
                        </p>
                        <div
                            className="alert alert-amber"
                            style={{fontSize: "1rem", margin: "12px 0", padding: "10px 14px"}}
                        >
                            <strong>結果：</strong> チームがテスト結果を無視するようになる
                        </div>
                    </div>
                    <div className="card">
                        <h4 style={{color: "var(--color-accent-red)"}}>🚨 False Negative（偽陰性）</h4>
                        <p>
                            SUTに問題があるのにテストが成功と報告してしまう危険な状態です。バグが本番環境に流出する直接的な原因になります。
                        </p>
                        <div
                            className="alert alert-red"
                            style={{fontSize: "1rem", margin: "12px 0", padding: "10px 14px"}}
                        >
                            <strong>結果：</strong> 重大な欠陥が本番環境へ流出
                        </div>
                    </div>
                </div>

                <h3>TAS検証の技法</h3>
                <div className="step-list">
                    <div className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-body">
                            <strong>意図的な失敗テスト（Negative Validation）</strong>
                            <p>
                                アプリケーションに意図的にバグを含むコードを注入するか、故意に間違ったデータを流し込みます。テストスイートが「期待通りに失敗し、正確なエラーレポートを生成するか」を確認します。これが機能しなければテストは検証を行っていません。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-body">
                            <strong>環境の信頼性確認</strong>
                            <p>
                                パス/フェイルの比率が既知のテストスイートを複数回連続実行。結果が変動する場合は環境設定（DB状態不整合・キャッシュ残留・セッション干渉）に問題があります。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-body">
                            <strong>コード品質監査</strong>
                            <p>
                                静的解析ツール（リンター）とピアレビューを定期実施。ハードコードされた待機時間（Thread.sleep()）がないか、明示的待機が正しく実装されているかを確認します。
                            </p>
                        </div>
                    </div>
                </div>

                <h3>TASコードレビューチェックリスト</h3>
                <div className="code-block">
                    <span className="code-label">Review Checklist</span>
                    <span className="line"><span className="code-green">□ テストの独立性</span></span>
                    <span className="line"> ✓ テスト間で状態を共有していないか</span>
                    <span className="line"> ✓ テストの実行順序に依存していないか</span>
                    <span className="line"></span>
                    <span className="line"><span className="code-cyan">□ セレクタの安定性</span></span>
                    <span className="line"> ✓ data-testid などの安定した属性を使っているか</span>
                    <span className="line"> ✓ XPathの深いネストや動的クラス名を避けているか</span>
                    <span className="line"></span>
                    <span className="line"><span className="code-amber">□ 待機戦略</span></span>
                    <span className="line"> ✓ 固定 sleep ではなく条件ベースの待機を使っているか</span>
                    <span className="line"> ✓ 適切なタイムアウト設定があるか</span>
                    <span className="line"></span>
                    <span className="line"
                        ><span className="code-purple">□ アサーションの適切性</span></span
                    >
                    <span className="line"> ✓ 意味のあるアサーションメッセージがあるか</span>
                    <span className="line"> ✓ 検証すべき項目を全てアサートしているか</span>
                    <span className="line"></span>
                    <span className="line"><span className="code-green">□ セキュリティ</span></span>
                    <span className="line">
                        ✓ 機密情報（パスワード/APIキー）がコードに書かれていないか</span
                    >
                    <span className="line">
                        ✓ 環境変数またはシークレット管理ツールを使用しているか</span
                    >
                </div>
            </div>
        </section>

        {/* CHAPTER 8 */}
        <section id="ch8" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="chapter-num">CHAPTER 08</span>
                    <h2>継続的改善と2025/2026年の最先端トレンド</h2>
                </div>

                <h3>継続的改善サイクル（PDCA）</h3>
                <div className="grid-4">
                    <div className="card">
                        <div className="card-icon" style={{color: "var(--color-accent-cyan)"}}>📋</div>
                        <h4 style={{color: "var(--color-accent-cyan)"}}>Plan（計画）</h4>
                        <p style={{fontSize: "1rem"}}>
                            現状のメトリクス分析、改善目標の設定、改善施策の計画
                        </p>
                    </div>
                    <div className="card">
                        <div className="card-icon" style={{color: "var(--color-accent-green)"}}>⚙️</div>
                        <h4 style={{color: "var(--color-accent-green)"}}>Do（実行）</h4>
                        <p style={{fontSize: "1rem"}}>
                            フレームワークリファクタリング、新ツール試験導入、テストスイート最適化
                        </p>
                    </div>
                    <div className="card">
                        <div className="card-icon" style={{color: "var(--color-accent-yellow)"}}>📊</div>
                        <h4 style={{color: "var(--color-accent-yellow)"}}>Check（確認）</h4>
                        <p style={{fontSize: "1rem"}}>
                            改善前後のメトリクス比較、フレイキー減少確認、実行時間短縮確認
                        </p>
                    </div>
                    <div className="card">
                        <div className="card-icon" style={{color: "var(--color-accent-purple)"}}>🔄</div>
                        <h4 style={{color: "var(--color-accent-purple)"}}>Act（改善）</h4>
                        <p style={{fontSize: "1rem"}}>
                            成功した改善を標準化、失敗施策の見直し、次のサイクルへ
                        </p>
                    </div>
                </div>

                <h3>テスト資産の最適化（技術的負債の返済）</h3>
                <div className="grid-2">
                    <div className="card">
                        <h4>🗑️ テストの断捨離</h4>
                        <p>
                            不要になったテスト（Obsolete
                            tests）を大胆に削除します。アプリケーション側で使われなくなった機能のテストや、他の統合テストで十分にカバーされている古い単体テストは削除対象です。これにより実行時間を短縮しメンテナンス負担を低下させます。
                        </p>
                    </div>
                    <div className="card cyan">
                        <h4>🔧 継続的リファクタリング</h4>
                        <p>
                            重複するコードを共通関数化し、古いライブラリを最新バージョンへ更新。テスト実行速度の最適化も定期的に実施します。依存関係はバージョン固定（pinning）して再現性を確保します。
                        </p>
                    </div>
                </div>

                <h3>2025-2026年のAI最前線トレンド</h3>
                <div className="divider"></div>

                <div className="callout info">
                    <div className="callout-icon">🚀</div>
                    <div className="callout-body">
                        <strong>パラダイムシフト：Agentic AI の台頭</strong><br />
                        2025〜2026年は、AIがアシスト（Copilot）から自律的なオーケストレーター（Agentic
                        AI）へと移行する歴史的転換期です。Google、Salesforce、UiPathの最新レポートが示す通り、AIが人間の介入なしに目標を受け取りE2Eワークフローを自律実行するフェーズに突入しています。
                    </div>
                </div>

                <div className="grid-2">
                    <div className="trend-card green">
                        <div className="trend-icon">🤖</div>
                        <h4>マルチエージェントシステム</h4>
                        <p>
                            専門特化型AIエージェントが連携してテストプロセス全体を担います。「要件分析エージェント→テスト設計エージェント→実行エージェント→分析エージェント」の自律的な連携が実用化されています。
                        </p>
                    </div>
                    <div className="trend-card cyan">
                        <div className="trend-icon">🔧</div>
                        <h4>Self-Healing（自己修復）テスト</h4>
                        <p>
                            UIのDOM構造変更時にAIが機械学習で新しい要素の位置を推論し、ロケーターを実行時に自動修正。フレイキーテストの大部分を根絶。Testsigma、Mabl、Functionizeが代表ツール。
                        </p>
                    </div>
                    <div className="trend-card amber">
                        <div className="trend-icon">✨</div>
                        <h4>AIによるテストコード生成</h4>
                        <p>
                            GitHub Copilot・Claude
                            API等を使い、ユーザーストーリーから自動でテストコードを生成。作成時間を60〜70%削減できます。生成物の品質確認・ガバナンスが新たなスキルとして重要に。
                        </p>
                    </div>
                    <div className="trend-card purple">
                        <div className="trend-icon">👁️</div>
                        <h4>AIビジュアルテスト・オブザーバビリティ</h4>
                        <p>
                            失敗した瞬間のビデオ録画・DOMスナップショット・ネットワークペイロードをAIが自動分類し根本原因を特定。デバッグ時間を最大95%削減。BrowserStack
                            Test Observabilityが先行。
                        </p>
                    </div>
                </div>

                <h3>QAエンジニアの役割進化</h3>
                <div className="alert alert-cyan">
                    <div className="alert-title">🔮 2026年のQAエンジニア像</div>
                    AIファーストの時代において、QAエンジニアは「コードを一行ずつ記述する実行者」から、<strong>自律型AIシステムを監視・制御し、品質目標を設計する「オーケストレーター（Orchestrator）」</strong>へと進化しています。AIが生成するテストがビジネス要件を満たすかのガバナンス構築と、AIでは検知が難しい「人間的直感に基づく探索的テスト（Human-in-the-loop）」の価値が一層高まっています。
                </div>
            </div>
        </section>

        {/* TOOLS */}
        <section id="tools" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="chapter-num">TOOLS</span>
                    <h2>主要ツール・フレームワーク 2025年版</h2>
                </div>

                <h3>Web UIテスト</h3>
                <div className="table-wrap">
                    <table>
                    <tbody></tbody>
                </table>
                </div>

                <h3>APIテスト</h3>
                <div className="table-wrap">
                    <table>
                    <tbody></tbody>
                </table>
                </div>

                <h3>パフォーマンステスト</h3>
                <div className="grid-4">
                    <div className="card">
                        <h4>⚡ k6</h4>
                        <p style={{fontSize: "1rem"}}>
                            Grafana製。JavaScript。CI/CD統合が最も容易。スクリプトがシンプルで習得しやすい。
                        </p>
                    </div>
                    <div className="card cyan">
                        <h4>🔨 JMeter</h4>
                        <p style={{fontSize: "1rem"}}>
                            Apache製。老舗。GUIで作成可能。豊富なプラグイン。エンタープライズで広く採用。
                        </p>
                    </div>
                    <div className="card">
                        <h4>🐝 Locust</h4>
                        <p style={{fontSize: "1rem"}}>
                            Python製。分散負荷テスト。シナリオをPythonコードで記述。
                        </p>
                    </div>
                    <div className="card">
                        <h4>⚙️ Gatling</h4>
                        <p style={{fontSize: "1rem"}}>
                            Scala/Java。高スループットシナリオ向け。詳細なHTMLレポート自動生成。
                        </p>
                    </div>
                </div>

                <h3>モック・スタブ・レポート</h3>
                <div className="grid-2">
                    <div className="card">
                        <h4>🎭 モック・スタブツール</h4>
                        <ul className="checklist">
                            <li><strong>unittest.mock：</strong>Python標準モックライブラリ</li>
                            <li><strong>Mockito：</strong>Javaモッキングフレームワーク</li>
                            <li><strong>WireMock：</strong>HTTPモックサーバー（多言語）</li>
                            <li>
                                <strong>MSW (Mock Service Worker)：</strong
                                >フロントエンド向けAPIモック
                            </li>
                        </ul>
                    </div>
                    <div className="card cyan">
                        <h4>📊 レポート・分析ツール</h4>
                        <ul className="checklist">
                            <li>
                                <strong>Allure：</strong>リッチHTMLレポート・ステップ表示・動画添付
                            </li>
                            <li><strong>pytest-html：</strong>シンプルなHTMLレポート生成</li>
                            <li>
                                <strong>Grafana + Prometheus：</strong
                                >リアルタイム監視ダッシュボード
                            </li>
                            <li><strong>Codecov：</strong>コードカバレッジ管理・PR連携</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* EXAM TIPS */}
        <section id="exam" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="chapter-num amber">EXAM</span>
                    <h2>CTAL-TAE v2.0 試験対策チェックリスト</h2>
                </div>

                <div className="metric-grid" style={{marginBottom: "32px"}}>
                    <div className="metric-card">
                        <span className="metric-value">40</span>
                        <span className="metric-label">問題数</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value cyan">90</span>
                        <span className="metric-label">試験時間（分）</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value amber">65%</span>
                        <span className="metric-label">合格ライン</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value purple">K4</span>
                        <span className="metric-label">最高認知レベル</span>
                    </div>
                </div>

                <h3>章別配点と重要度</h3>
                <div className="exam-grid">
                    <div className="exam-chapter">
                        <span className="chapter-score" style={{color: "var(--color-accent-yellow)"}}>12</span>
                        <div className="chapter-info">
                            <h5>Chapter 3: gTAA アーキテクチャ</h5>
                            <p>K3 レベル</p>
                            <div className="star-row">★★★★★</div>
                        </div>
                    </div>
                    <div className="exam-chapter">
                        <span className="chapter-score" style={{color: "var(--color-accent-yellow)"}}>16</span>
                        <div className="chapter-info">
                            <h5>Chapter 4: テスト自動化の実装</h5>
                            <p>K4 レベル（最大配点）</p>
                            <div className="star-row">★★★★★</div>
                        </div>
                    </div>
                    <div className="exam-chapter">
                        <span className="chapter-score" style={{color: "var(--color-accent-cyan)"}}>10</span>
                        <div className="chapter-info">
                            <h5>Chapter 5: CI/CD 統合</h5>
                            <p>K3 レベル</p>
                            <div className="star-row">★★★★</div>
                        </div>
                    </div>
                    <div className="exam-chapter">
                        <span className="chapter-score" style={{color: "var(--color-accent-cyan)"}}>8</span>
                        <div className="chapter-info">
                            <h5>Chapter 2: 準備・ROI</h5>
                            <p>K3 レベル</p>
                            <div className="star-row">★★★★</div>
                        </div>
                    </div>
                    <div className="exam-chapter">
                        <span className="chapter-score" style={{color: "var(--color-accent-green)"}}>6</span>
                        <div className="chapter-info">
                            <h5>Chapter 1, 6, 7</h5>
                            <p>K2〜K3 レベル</p>
                            <div className="star-row">★★★</div>
                        </div>
                    </div>
                    <div className="exam-chapter">
                        <span className="chapter-score" style={{color: "var(--color-text-muted)"}}>2</span>
                        <div className="chapter-info">
                            <h5>Chapter 8: 継続的改善</h5>
                            <p>K2 レベル</p>
                            <div className="star-row">★★</div>
                        </div>
                    </div>
                </div>

                <h3>必ず覚える重要概念</h3>
                <div className="code-block amber">
                    <span className="code-label">EXAM ESSENTIALS</span>
                    <span className="line"
                        ><span className="code-green">✅ gTAA の4層（必須暗記！）</span></span
                    >
                    <span className="line"> 1. Test Management Layer （テスト管理層）</span>
                    <span className="line"> 2. Test Definition Layer （テスト定義層）</span>
                    <span className="line"> 3. Test Execution Layer （テスト実行層）</span>
                    <span className="line"> 4. Test Adaptation Layer （テスト適合層）</span>
                    <span className="line"></span>
                    <span className="line"
                        ><span className="code-cyan">✅ テスト自動化アプローチ6種</span></span
                    >
                    <span className="line"> - Capture &amp; Playback</span>
                    <span className="line"> - Linear Scripting</span>
                    <span className="line"> - Structured Scripting</span>
                    <span className="line"> - Data-Driven Testing</span>
                    <span className="line"> - Keyword-Driven Testing</span>
                    <span className="line"> - BDD</span>
                    <span className="line"></span>
                    <span className="line"><span className="code-amber">✅ テスト容易性の2要素</span></span>
                    <span className="line">
                        - Observability（観測可能性） ← SUTの状態を確認できるか</span
                    >
                    <span className="line">
                        - Controllability（制御可能性）← SUTの状態を制御できるか</span
                    >
                    <span className="line"></span>
                    <span className="line"><span className="code-purple">✅ TAS vs SUT の違い</span></span>
                    <span className="line">
                        - TAS: テスト自動化ソリューション（テストを実行するもの）</span
                    >
                    <span className="line"> - SUT: テスト対象システム（テストされるもの）</span>
                    <span className="line"></span>
                    <span className="line"><span className="code-red">✅ 偽陽性 / 偽陰性</span></span>
                    <span className="line">
                        - False Positive（偽陽性）: バグがないのにテストが失敗</span
                    >
                    <span className="line">
                        - False Negative（偽陰性）: バグがあるのにテストが成功 ← より危険！</span
                    >
                    <span className="line"></span>
                    <span className="line"><span className="code-green">✅ ROI計算式</span></span>
                    <span className="line"> ROI (%) = (節約額 - コスト) ÷ コスト × 100</span>
                </div>

                <h3>頻出問題パターン</h3>
                <div className="grid-2">
                    <div className="card">
                        <h4>💡 よく出る問題①</h4>
                        <p style={{fontSize: "1rem", marginBottom: "12px"}}>
                            「次の状況でどの自動化アプローチが最適か？」
                        </p>
                        <ul className="checklist">
                            <li>非エンジニアがメンテ → <strong>キーワード駆動</strong></li>
                            <li>データパターンが多い → <strong>データ駆動</strong></li>
                            <li>BDD/受入基準がある → <strong>BDD</strong></li>
                        </ul>
                    </div>
                    <div className="card cyan">
                        <h4>💡 よく出る問題②</h4>
                        <p style={{fontSize: "1rem", marginBottom: "12px"}}>
                            「gTAA のどの層に属するか？」
                        </p>
                        <ul className="checklist">
                            <li>GUI操作 → <strong>Test Adaptation Layer</strong></li>
                            <li>テストケース定義 → <strong>Test Definition Layer</strong></li>
                            <li>テスト実行エンジン → <strong>Test Execution Layer</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* REFERENCES */}
        <section id="refs" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="chapter-num cyan">REFS</span>
                    <h2>参考文献・公式URL一覧</h2>
                </div>

                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-category">ISTQB 公式</div>
                        <div className="ref-title">CTAL-TAE v2.0 公式ページ</div>
                        <a
                            className="ref-url"
                            href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"
                            target="_blank"
                        >
                            istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/
                        </a>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">ISTQB 公式</div>
                        <div className="ref-title">ISTQB グロッサリー</div>
                        <a
                            className="ref-url"
                            href="https://glossary.istqb.org/en_US/search"
                            target="_blank"
                        >
                            glossary.istqb.org/en_US/search
                        </a>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">ISTQB 公式</div>
                        <div className="ref-title">CTAL-TAE v2.0 シラバス PDF (GASQ)</div>
                        <a
                            className="ref-url"
                            href="https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf"
                            target="_blank"
                        >
                            gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf
                        </a>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">ISTQB 試験学習</div>
                        <div className="ref-title">CTAL-TAE モック試験（無料）</div>
                        <a
                            className="ref-url"
                            href="https://mockexamnetwork.com/exams/istqb-automation/"
                            target="_blank"
                        >
                            mockexamnetwork.com/exams/istqb-automation/
                        </a>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">学習リソース</div>
                        <div className="ref-title">ISTQB.Guru — CTAL-TAE ガイド</div>
                        <a className="ref-url" href="https://www.istqb.guru/ctal-tae/" target="_blank">
                            istqb.guru/ctal-tae/
                        </a>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">学習リソース</div>
                        <div className="ref-title">Brightest — CTAL-TAE v2.0</div>
                        <a
                            className="ref-url"
                            href="https://brightest.org/en/certifications/ISTQB-CTAL-Test-Automation-Engineering/"
                            target="_blank"
                        >
                            brightest.org/en/certifications/ISTQB-CTAL-Test-Automation-Engineering/
                        </a>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">Web UIテスト</div>
                        <div className="ref-title">Playwright 公式ドキュメント</div>
                        <a className="ref-url" href="https://playwright.dev/" target="_blank"
                            >playwright.dev/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">Web UIテスト</div>
                        <div className="ref-title">Cypress 公式ドキュメント</div>
                        <a className="ref-url" href="https://docs.cypress.io/" target="_blank"
                            >docs.cypress.io/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">Web UIテスト</div>
                        <div className="ref-title">Selenium 公式ドキュメント</div>
                        <a
                            className="ref-url"
                            href="https://www.selenium.dev/documentation/"
                            target="_blank"
                            >selenium.dev/documentation/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">テストフレームワーク</div>
                        <div className="ref-title">pytest 公式ドキュメント</div>
                        <a className="ref-url" href="https://docs.pytest.org/" target="_blank"
                            >docs.pytest.org/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">コントラクトテスト</div>
                        <div className="ref-title">Pact — コントラクトテスト</div>
                        <a className="ref-url" href="https://docs.pact.io/" target="_blank"
                            >docs.pact.io/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">パフォーマンステスト</div>
                        <div className="ref-title">k6 公式ドキュメント</div>
                        <a
                            className="ref-url"
                            href="https://grafana.com/docs/k6/latest/"
                            target="_blank"
                            >grafana.com/docs/k6/latest/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">レポート</div>
                        <div className="ref-title">Allure レポートフレームワーク</div>
                        <a className="ref-url" href="https://allurereport.org/" target="_blank"
                            >allurereport.org/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">モック</div>
                        <div className="ref-title">WireMock モックサーバー</div>
                        <a className="ref-url" href="https://wiremock.org/docs/" target="_blank"
                            >wiremock.org/docs/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">CI/CD</div>
                        <div className="ref-title">GitHub Actions ドキュメント</div>
                        <a className="ref-url" href="https://docs.github.com/en/actions" target="_blank"
                            >docs.github.com/en/actions</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">BDD</div>
                        <div className="ref-title">Cucumber / Gherkin 公式</div>
                        <a className="ref-url" href="https://cucumber.io/docs/gherkin/" target="_blank"
                            >cucumber.io/docs/gherkin/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">ベストプラクティス</div>
                        <div className="ref-title">Google Testing Blog</div>
                        <a className="ref-url" href="https://testing.googleblog.com/" target="_blank"
                            >testing.googleblog.com/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">ベストプラクティス</div>
                        <div className="ref-title">Martin Fowler — Test Automation Pyramid</div>
                        <a
                            className="ref-url"
                            href="https://martinfowler.com/articles/practical-test-pyramid.html"
                            target="_blank"
                            >martinfowler.com/articles/practical-test-pyramid.html</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">ベストプラクティス</div>
                        <div className="ref-title">BrowserStack — 16 Best Practices 2025</div>
                        <a
                            className="ref-url"
                            href="https://www.browserstack.com/guide/10-test-automation-best-practices"
                            target="_blank"
                            >browserstack.com/guide/10-test-automation-best-practices</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">ROI 計算</div>
                        <div className="ref-title">Ranorex — Automation ROI Guide</div>
                        <a
                            className="ref-url"
                            href="https://www.ranorex.com/blog/automation-roi/"
                            target="_blank"
                            >ranorex.com/blog/automation-roi/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">ROI 計算</div>
                        <div className="ref-title">BrowserStack — ROI 計算方法</div>
                        <a
                            className="ref-url"
                            href="https://www.browserstack.com/guide/calculate-test-automation-roi"
                            target="_blank"
                            >browserstack.com/guide/calculate-test-automation-roi</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">デザインパターン</div>
                        <div className="ref-title">Selenium — Page Object Models</div>
                        <a
                            className="ref-url"
                            href="https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/"
                            target="_blank"
                            >selenium.dev/documentation/test_practices/encouraged/page_object_models/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">AI トレンド</div>
                        <div className="ref-title">Google Cloud — AI Agent Trends 2026</div>
                        <a
                            className="ref-url"
                            href="https://cloud.google.com/resources/content/ai-agent-trends-2026"
                            target="_blank"
                            >cloud.google.com/resources/content/ai-agent-trends-2026</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">AI トレンド</div>
                        <div className="ref-title">UiPath — Agentic Automation Trends 2026</div>
                        <a
                            className="ref-url"
                            href="https://www.uipath.com/resources/automation-whitepapers/automation-trends-report"
                            target="_blank"
                            >uipath.com/resources/automation-whitepapers/automation-trends-report</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">AI トレンド</div>
                        <div className="ref-title">Salesforce — Future of AI Agents 2026</div>
                        <a
                            className="ref-url"
                            href="https://www.salesforce.com/uk/news/stories/the-future-of-ai-agents-top-predictions-trends-to-watch-in-2026/"
                            target="_blank"
                            >salesforce.com/uk/news/stories/the-future-of-ai-agents-top-predictions-trends-to-watch-in-2026/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">メトリクス</div>
                        <div className="ref-title">Virtuoso QA — Test Automation KPIs</div>
                        <a
                            className="ref-url"
                            href="https://www.virtuosoqa.com/post/test-automation-kpis"
                            target="_blank"
                            >virtuosoqa.com/post/test-automation-kpis</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">統計データ</div>
                        <div className="ref-title">Testlio — Top 30 Automation Statistics 2025</div>
                        <a
                            className="ref-url"
                            href="https://testlio.com/blog/test-automation-statistics"
                            target="_blank"
                            >testlio.com/blog/test-automation-statistics</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">統計データ</div>
                        <div className="ref-title">PractiTest — State of Testing 2025</div>
                        <a
                            className="ref-url"
                            href="https://www.practitest.com/assets/pdf/stot-2025.pdf"
                            target="_blank"
                            >practitest.com/assets/pdf/stot-2025.pdf</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">gTAA</div>
                        <div className="ref-title">adesso SE — gTAA in Practice</div>
                        <a
                            className="ref-url"
                            href="https://www.adesso.de/en/news/blog/test-automation-architecture-taa-based-on-a-generic-test-automation-architecture-gtaa-according-to-istqb-in-practice.jsp"
                            target="_blank"
                            >adesso.de — gTAA in Practice</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">AI × テスト</div>
                        <div className="ref-title">ISTQB CT-GenAI（AIテスト資格）</div>
                        <a
                            className="ref-url"
                            href="https://istqb.org/certifications/gen-ai/"
                            target="_blank"
                            >istqb.org/certifications/gen-ai/</a
                        >
                    </div>
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <footer>
            <div className="container">
                <p
                    style={{color: "var(--color-accent-green)", fontSize: "1rem", marginBottom: "8px", fontFamily: "var(--font-display)", fontWeight: "700"}}
                >
                    テスト自動化 完全ガイド 2025-2026
                </p>
                <p>ISTQB CTAL-TAE v2.0 準拠 | 最終更新: 2026年4月 | 初学者から実践者まで対応</p>
                <p style={{marginTop: "8px"}}>
                    <a
                        href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"
                        target="_blank"
                        style={{color: "var(--color-accent-cyan)"}}
                        >公式ISTQB CTAL-TAE v2.0ページ</a
                    >
                </p>
            </div>
        </footer>
    
        </>
    );
}
