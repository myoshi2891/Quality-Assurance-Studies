import './istqb-ct-gt-complete-guide.css';
import NavBar from './NavBar';

export default function IstqbCtGtCompleteGuide() {
    return (
        <div className="istqb-ct-gt-page">
            <NavBar />

            {/* ===== HERO ===== */}
            <section id="hero" className="hero">
                <div className="container">
                    <div className="hero-eyebrow">ISTQB® SPECIALIST STREAM ● 2025年版</div>
                <h1>🎰 CT-GT<br />ギャンブル産業テスター<br />完全ガイド</h1>
                <p className="hero-sub">
                    Gambling Industry Tester — ゼロから試験合格まで<br />全Chapter・全K-Level・全テスト技法を網羅
                </p>
                <div className="hero-meta">
                    <span className="meta-chip green">40問 / 60分</span>
                    <span className="meta-chip amber">合格: 26/40点 (65%)</span>
                    <span className="meta-chip cyan">前提: CTFL</span>
                    <span className="meta-chip purple">シラバス v1.0</span>
                </div>
                </div>
            </section>
            
            {/* ===== TOC ===== */}
            <section id="toc" style={{marginBottom: "3rem"}}>
                <div className="container">
                    <h2
                    style={{fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-accent-green)", marginBottom: "1rem", fontWeight: "700"}}
                >
                    📚 目次
                </h2>
                <div className="toc-grid">
                    <a href="#ch0" className="toc-card">
                        <span className="toc-card-num">Chapter 0</span>
                        <span className="toc-card-title">資格概要</span>
                        <span className="toc-card-desc"
                            >試験仕様・ビジネスアウトカム・ロードマップ</span
                        >
                    </a>
                    <a href="#ch1" className="toc-card">
                        <span className="toc-card-num">Chapter 1</span>
                        <span className="toc-card-title">ギャンブル産業入門</span>
                        <span className="toc-card-desc">種類・RNG・RTP・GSDLC・ITL・規制</span>
                    </a>
                    <a href="#ch2" className="toc-card">
                        <span className="toc-card-num">Chapter 2</span>
                        <span className="toc-card-title">エコシステム</span>
                        <span className="toc-card-desc">VLT・EGM・宝くじ・オンラインの仕組み</span>
                    </a>
                    <a href="#ch3" className="toc-card">
                        <span className="toc-card-num">Chapter 3</span>
                        <span className="toc-card-title">テスト技法</span>
                        <span className="toc-card-desc"
                            >数学・コンプライアンス・ハード・プロトコル他</span
                        >
                    </a>
                    <a href="#exam" className="toc-card">
                        <span className="toc-card-num">付録</span>
                        <span className="toc-card-title">試験対策</span>
                        <span className="toc-card-desc">サンプル問題・チェックリスト・配点表</span>
                    </a>
                    <a href="#references" className="toc-card">
                        <span className="toc-card-num">参照</span>
                        <span className="toc-card-title">参照 URL</span>
                        <span className="toc-card-desc">公式・学習・規制・業界リソース</span>
                    </a>
                </div>
                </div>
            </section>

            {/* ===== CHAPTER 0: OVERVIEW ===== */}
            <section id="ch0" className="chapter">
                <div className="container">
                    <div className="chapter-header">
                    <span className="chapter-num">Chapter 0</span>
                    <span className="k-badge">概要</span>
                    <h2>資格概要・ロードマップ</h2>
                </div>

                <div className="callout info">
                    <span className="callout-icon">ℹ️</span>
                    <div className="callout-body">
                        <strong>CT-GT とは？</strong>
                        <p>
                            ISTQB® CT-GT（Certified Tester – Gambling Industry
                            Tester）は、ギャンブルソフトウェアのテストに必要な専門知識を認定するスペシャリスト資格です。コンプライアンス認証・数学検証・RNG・EGMハードウェアなど、一般的なソフトウェアテストとは大きく異なる分野を対象とします。
                        </p>
                    </div>
                </div>

                <h3 className="section-title">試験仕様</h3>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-card-header">
                            <span className="exam-card-title">問題数</span
                            ><span className="exam-stars">★★★</span>
                        </div>
                        <div className="exam-card-val">40問</div>
                        <div className="exam-card-desc">多肢選択式 (K1/K2/K3)</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-header">
                            <span className="exam-card-title">合格点</span
                            ><span className="exam-stars">★★★★</span>
                        </div>
                        <div className="exam-card-val">26 / 40</div>
                        <div className="exam-card-desc">65%以上で合格</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-header">
                            <span className="exam-card-title">試験時間</span
                            ><span className="exam-stars">★★★</span>
                        </div>
                        <div className="exam-card-val">60分</div>
                        <div className="exam-card-desc">非英語母語者 +25% (75分)</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-header">
                            <span className="exam-card-title">前提資格</span
                            ><span className="exam-stars">★★★★★</span>
                        </div>
                        <div className="exam-card-val">CTFL</div>
                        <div className="exam-card-desc">Foundation Level 必須</div>
                    </div>
                </div>

                <h3 className="section-title">章別学習配分</h3>
                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-name">Chapter 1: ギャンブル産業入門</span
                        ><span className="progress-pct">25%</span>
                    </div>
                    <div className="progress-track">
                        <div className="progress-bar" style={{'--bar-width': '25%'} as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-name">Chapter 2: エコシステム</span
                        ><span className="progress-pct">25%</span>
                    </div>
                    <div className="progress-track">
                        <div className="progress-bar" style={{'--bar-width': '25%'} as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-name">Chapter 3: テスト技法 (最重要)</span
                        ><span className="progress-pct">50%</span>
                    </div>
                    <div className="progress-track">
                        <div className="progress-bar" style={{'--bar-width': '50%'} as React.CSSProperties}></div>
                    </div>
                </div>

                <h3 className="section-title">6つのビジネスアウトカム</h3>
                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-label">BO1 共通語彙</span>
                        <span className="arch-desc"
                            >ギャンブル産業内での効果的なコミュニケーションを共通語彙によって促進する</span
                        >
                    </div>
                    <div className="arch-row cyan">
                        <span className="arch-label">BO2 品質特性</span>
                        <span className="arch-desc"
                            >ギャンブル産業固有のテストが必要な品質属性を理解する</span
                        >
                    </div>
                    <div className="arch-row amber">
                        <span className="arch-label">BO3 開発手法</span>
                        <span className="arch-desc"
                            >標準的なソフトウェア開発・テスト方法論を説明できる</span
                        >
                    </div>
                    <div className="arch-row purple">
                        <span className="arch-label">BO4 ハード認証</span>
                        <span className="arch-desc"
                            >他産業との最大の違いであるギャンブルハード・ソフト認証プロセスを理解する</span
                        >
                    </div>
                    <div className="arch-row red">
                        <span className="arch-label">BO5 技法適用</span>
                        <span className="arch-desc"
                            >ギャンブル固有ニーズに沿ったテスト設計技法を適用できる</span
                        >
                    </div>
                    <div className="arch-row pink">
                        <span className="arch-label">BO6 規制重要性</span>
                        <span className="arch-desc"
                            >管轄・規制機関・コンプライアンスの重要性を認識する</span
                        >
                    </div>
                </div>

                <h3 className="section-title">ISTQB® 資格ロードマップ</h3>
                <div className="mermaid-wrap">
                    <div id="mermaid-0" className="mermaid"></div>
                </div>
                </div>
            </section>

            {/* ===== CHAPTER 1: INTRODUCTION ===== */}
            <section id="ch1" className="chapter">
                <div className="container">
                    <div className="chapter-header">
                    <span className="chapter-num">Chapter 1</span>
                    <span className="k-badge">K1 / K2 / K3</span>
                    <h2>ギャンブル産業入門</h2>
                </div>

                <div className="callout info">
                    <span className="callout-icon">📌</span>
                    <div className="callout-body">
                        <strong>なぜ専門シラバスが必要か？</strong>
                        <p>
                            ギャンブルソフトウェアは一般システムと根本的に異なります。欠陥のあるRNGや不正なペイアウト計算はプレイヤーへの直接的な金銭損害・法的ペナルティ・ライセンス剥奪につながります。2024年の世界オンラインギャンブル市場は約780億ドル、2030年までに約1,535億ドルへ成長予測です。
                        </p>
                    </div>
                </div>

                {/* 1.1 Gambling Activities and Artifacts */}
                <h3 className="section-title">
                    1.1 ギャンブルの定義と成果物 <span className="k-badge">K1</span>
                </h3>
                <p>
                    <strong>定義：</strong
                    >金銭・物品などの価値あるものをリスクにさらし、不確実な結果によって多くを得るか失うかを決める行為（CT-GT
                    シラバスより）
                </p>

                <div className="compare">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 一般ソフトウェアテスト</div>
                        <p>
                            機能テスト・性能テスト・UIテスト・セキュリティテストが主軸。期待結果が仕様書から明確に定義できる。
                        </p>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">🎰 ギャンブルソフトウェアテスト（追加要素）</div>
                        <p>
                            コンプライアンステスト・RNG数学検証・ITL認証・管轄別規制対応・ジャックポット制御・ハードウェア統合テストが必須。
                        </p>
                    </div>
                </div>

                {/* 1.2 Types of Gambling */}
                <h3 className="section-title">1.2 ギャンブルの種類 <span className="k-badge">K1</span></h3>
                <div className="mermaid-wrap">
                    <div id="mermaid-1" className="mermaid"></div>
                </div>

                {/* 1.3 Key Concepts */}
                <h3 className="section-title">
                    1.3 ギャンブル産業の重要概念 <span className="k-badge">K2</span>
                </h3>

                <h4 className="sub-title">🔢 RNG（Random Number Generator：乱数生成器）</h4>
                <p>
                    <strong>定義：</strong
                    >ゲームの結果をランダムに決定するアルゴリズムまたは物理デバイス。ギャンブルソフトウェアの心臓部であり、公平性保証の根拠となります。
                </p>
                <p>
                    <strong>なぜ重要か：</strong
                    >RNGが予測可能・偏りがある場合、プレイヤーや悪意あるオペレーターが悪用でき、規制違反と重大な財務損失をもたらします。すべての管轄でRNGは独立したコンプライアンステストの対象です。
                </p>

                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-label">PRNG</span>
                        <span className="arch-desc"
                            ><strong>擬似乱数生成器</strong> —
                            アルゴリズムベース。高速だがシードが漏洩すると予測可能。多くのEGMで採用。</span
                        >
                    </div>
                    <div className="arch-row cyan">
                        <span className="arch-label">TRNG</span>
                        <span className="arch-desc"
                            ><strong>真の乱数生成器</strong> —
                            物理ノイズ（熱雑音・放射線）ベース。完全予測不可能だがコスト高。高セキュリティ用途に使用。</span
                        >
                    </div>
                    <div className="arch-row purple">
                        <span className="arch-label">CSPRNG</span>
                        <span className="arch-desc"
                            ><strong>暗号学的安全PRNG</strong> —
                            セキュリティ重視型。オンラインカジノやモバイルギャンブルに多用される。</span
                        >
                    </div>
                </div>

                <div className="compare">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 良いRNG実装</div>
                        <p>
                            カイ二乗検定・モノビットテスト・ランダムウォーク検定をすべて通過。シード管理が厳密で外部から観測不可能。GLI
                            / BMM 等のITL認証済み。
                        </p>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 悪いRNG実装</div>
                        <p>
                            時刻ベースのシードを使用し外部から予測可能。統計的偏りがある分布を持つ。認証なしで本番デプロイされ規制違反となる。
                        </p>
                    </div>
                </div>

                <h4 className="sub-title">💰 RTP・ハウスエッジ・ボラティリティ</h4>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>指標</th>
                                <th>定義</th>
                                <th>計算式</th>
                                <th>典型値</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RTP</td>
                                <td>Return To Player：プレイヤーへの理論的な支払い率</td>
                                <td>総支払い ÷ 総ベット × 100</td>
                                <td>92%〜97%</td>
                            </tr>
                            <tr>
                                <td>ハウスエッジ</td>
                                <td>カジノが理論上保持する割合</td>
                                <td>100% − RTP</td>
                                <td>3%〜8%</td>
                            </tr>
                            <tr>
                                <td>ボラティリティ</td>
                                <td>払い出しの頻度と金額の分散</td>
                                <td>—（数学シミュレーションで算出）</td>
                                <td>低/中/高</td>
                            </tr>
                            <tr>
                                <td>ヒット率</td>
                                <td>勝利ゲームの発生確率</td>
                                <td>勝利ゲーム数 ÷ 総ゲーム数</td>
                                <td>20%〜40%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* prettier-ignore */}
                <div className="code-block" data-lang="Python">
                    <code><span className="code-comment"># RTP計算の概念例（数学テストで実際に実施する検証）</span>
<span className="code-keyword">class</span> <span className="code-cyan">MathVerifier</span>:
    <span className="code-keyword">def</span> <span className="code-green">simulate_rtp</span>(<span className="code-white">self</span>, <span className="code-white">game_engine</span>, <span className="code-white">iterations</span>=<span className="code-num">10_000_000</span>) -&gt; <span className="code-cyan">dict</span>:
        <span className="code-string">""" 数百万〜数十億回のシミュレーションで実際RTPを算出し
        理論値との誤差が許容範囲内か検証する """</span>
        <span className="code-white">total_bet</span>, <span className="code-white">total_win</span> = <span className="code-num">0</span>, <span className="code-num">0</span>

        <span className="code-keyword">for</span> <span className="code-white">_</span> <span className="code-keyword">in</span> <span className="code-cyan">range</span>(<span className="code-white">iterations</span>):
            <span className="code-white">bet</span> = <span className="code-num">1.0</span>
            <span className="code-white">result</span> = <span className="code-white">game_engine</span>.<span className="code-green">spin</span>(<span className="code-white">bet</span>)
            <span className="code-white">total_bet</span> += <span className="code-white">bet</span>
            <span className="code-white">total_win</span> += <span className="code-white">result</span>.<span className="code-white">payout</span>

        <span className="code-white">actual_rtp</span> = (<span className="code-white">total_win</span> / <span className="code-white">total_bet</span>) * <span className="code-num">100</span>
        <span className="code-white">deviation</span> = <span className="code-cyan">abs</span>(<span className="code-white">actual_rtp</span> - <span className="code-white">game_engine</span>.<span className="code-white">theoretical_rtp</span>)

        <span className="code-keyword">return</span> &#123;
            <span className="code-string">"theoretical_rtp"</span>: <span className="code-white">game_engine</span>.<span className="code-white">theoretical_rtp</span>,
            <span className="code-string">"simulated_rtp"</span>: <span className="code-white">actual_rtp</span>,
            <span className="code-string">"deviation"</span>: <span className="code-white">deviation</span>,
            <span className="code-string">"passes"</span>: <span className="code-white">deviation</span> &lt; <span className="code-num">0.5</span> <span className="code-comment"># 0.5%以内が許容誤差</span>
        &#125;</code>
                </div>

                <h4 className="sub-title">🎰 プログレッシブジャックポット（Progressive Jackpots）</h4>
                <p>
                    <strong>定義：</strong
                    >複数台のEGM（または複数カジノ）からのベットの一定割合を累積プールに加算し、特定の条件達成時に累積額を全額払い出す仕組み。
                </p>
                <div className="mermaid-wrap">
                    <div id="mermaid-2" className="mermaid"></div>
                </div>

                {/* 1.4 Metrics */}
                <h3 className="section-title">
                    1.4 ギャンブル産業メトリクス <span className="k-badge amber">K2</span>
                </h3>
                <div className="metric-grid">
                    <div className="metric-card">
                        <span className="metric-val">FPP</span>
                        <span className="metric-label"
                            >First Pass Percentage<br />初回ITL申請合格率</span
                        >
                    </div>
                    <div className="metric-card">
                        <span className="metric-val cyan">ECD</span>
                        <span className="metric-label"
                            >Escape Compliance Defects<br />逸失コンプライアンス欠陥数</span
                        >
                    </div>
                    <div className="metric-card">
                        <span className="metric-val amber">RTP</span>
                        <span className="metric-label">Return To Player<br />プレイヤー還元率</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val red">0</span>
                        <span className="metric-label">目標ECD<br />本番流出コンプライアンス欠陥</span>
                    </div>
                </div>

                <div className="alert amber">
                    <strong>⚠️ ECD（Escape Compliance Defects）とは</strong>
                    ITLや規制機関に発見される前に「逸失した」コンプライアンス欠陥の数。ゼロが理想値。発見されると罰金・製品回収・ライセンス剥奪のリスクがあります。
                </div>

                {/* 1.5 GSDLC */}
                <h3 className="section-title">
                    1.5 ギャンブルソフトウェア開発ライフサイクル（GSDLC）
                    <span className="k-badge">K2</span>
                </h3>
                <div className="mermaid-wrap">
                    <div id="mermaid-3" className="mermaid"></div>
                </div>

                <h4 className="sub-title">独立テストラボ（ITL: Independent Test Lab）</h4>
                <p>
                    <strong>定義：</strong
                    >ギャンブル機器・ソフトウェアが特定管轄の規制要件に準拠しているかを、第三者（独立した立場）で検証・認証する機関。
                </p>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ITL機関</th>
                                <th>特徴</th>
                                <th>主な認定管轄</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GLI（Gaming Labs International）</td>
                                <td>世界最大のITL、480以上の管轄に対応</td>
                                <td>世界全域</td>
                            </tr>
                            <tr>
                                <td>BMM Testlabs</td>
                                <td>アジア・欧州に強み</td>
                                <td>マカオ・シンガポール・欧州</td>
                            </tr>
                            <tr>
                                <td>NMi</td>
                                <td>欧州特化</td>
                                <td>オランダ・欧州各国</td>
                            </tr>
                            <tr>
                                <td>eCOGRA</td>
                                <td>オンラインカジノ特化</td>
                                <td>英国・マルタ</td>
                            </tr>
                            <tr>
                                <td>iTech Labs</td>
                                <td>オーストラリア拠点</td>
                                <td>APAC・欧州</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 className="sub-title">規制管轄と規制機関</h4>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>規制機関</th>
                                <th>地域</th>
                                <th>主な要件</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>UK Gambling Commission (UKGC)</td>
                                <td>英国</td>
                                <td>Gambling Act 2005改正、広告・責任ある賭博</td>
                            </tr>
                            <tr>
                                <td>Malta Gaming Authority (MGA)</td>
                                <td>マルタ</td>
                                <td>EU向けオンラインライセンスの中心地</td>
                            </tr>
                            <tr>
                                <td>NJDGE (New Jersey Division)</td>
                                <td>米国NJ州</td>
                                <td>EGM技術標準、RNG要件が詳細</td>
                            </tr>
                            <tr>
                                <td>PAGCOR</td>
                                <td>フィリピン</td>
                                <td>アジア向けオンラインゲーミングライセンス</td>
                            </tr>
                            <tr>
                                <td>Kansspelautoriteit (KSA)</td>
                                <td>オランダ</td>
                                <td>オンラインカジノ合法化(2021年〜)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="alert green">
                    <strong>✅ 管轄（Jurisdiction）の重要性</strong>
                    同じゲームでも管轄によってRTPの最低値・最大ペイアウト・ギャンブル年齢・許可されるゲーム種別が異なります。テスターは常に「どの管轄向けか」を確認してからテストを設計する必要があります。
                </div>
                </div>
            </section>

            {/* ===== CHAPTER 2: ECOSYSTEMS ===== */}
            <section id="ch2" className="chapter">
                <div className="container">
                    <div className="chapter-header">
                    <span className="chapter-num">Chapter 2</span>
                    <span className="k-badge">K1 / K2 / K3</span>
                    <h2>ギャンブル産業エコシステム</h2>
                </div>

                <div className="callout info">
                    <span className="callout-icon">🏗️</span>
                    <div className="callout-body">
                        <strong>エコシステムとは？</strong>
                        <p>
                            ギャンブル産業は複数の相互接続されたシステムから構成されます。テスターはVLT・EGM・宝くじ・オンラインという主要エコシステムの構造を理解し、各コンポーネント間のインターフェースと依存関係を把握することが必須です。
                        </p>
                    </div>
                </div>

                {/* 2.1 Testing Phases */}
                <h3 className="section-title">
                    2.1 ギャンブルソフトウェアのテストフェーズ <span className="k-badge">K2</span>
                </h3>
                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-label">ゲーム開発</span>
                        <span className="arch-desc"
                            >ゲームロジック・RNG・ペイテーブル・ボーナス機能の実装と内部テスト</span
                        >
                    </div>
                    <div className="arch-row cyan">
                        <span className="arch-label">プラットフォーム統合</span>
                        <span className="arch-desc"
                            >ゲームコンテンツをカジノプラットフォームへ統合。API・ウォレット・認証システムとの接続テスト</span
                        >
                    </div>
                    <div className="arch-row amber">
                        <span className="arch-label">ITL認証</span>
                        <span className="arch-desc"
                            >独立テストラボによるコンプライアンステスト。管轄ごとの規制要件への準拠を検証</span
                        >
                    </div>
                    <div className="arch-row purple">
                        <span className="arch-label">規制機関承認</span>
                        <span className="arch-desc"
                            >各管轄の規制機関への申請とファイナル承認。ITL証明書を提出</span
                        >
                    </div>
                    <div className="arch-row red">
                        <span className="arch-label">本番モニタリング</span>
                        <span className="arch-desc"
                            >デプロイ後の継続的な性能・コンプライアンス・不正行為モニタリング</span
                        >
                    </div>
                </div>

                {/* 2.2 VLT Ecosystem */}
                <h3 className="section-title">
                    2.2 VLT（Video Lottery Terminal）エコシステム <span className="k-badge">K2</span>
                </h3>
                <p>
                    <strong>定義：</strong
                    >政府または州機関が管理するセントラルシステムに接続された電子端末。RNGはセントラルシステム側で動作することが最大の特徴です。
                </p>

                <div className="alert cyan">
                    <strong>🔑 試験頻出：VLT vs スロットマシンの根本的違い</strong>
                    VLT の RNG はセントラルシステム（政府管理）に存在します。スロットマシン（EGM）の
                    RNG
                    は各端末内に搭載されます。この違いはコンプライアンステストの対象範囲を決定します。
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>観点</th>
                                <th>VLT</th>
                                <th>スロットマシン（EGM）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RNG所在</td>
                                <td>セントラルシステム側（政府管理）</td>
                                <td>各端末内（EGM搭載）</td>
                            </tr>
                            <tr>
                                <td>管理者</td>
                                <td>政府・州当局</td>
                                <td>カジノオペレーター</td>
                            </tr>
                            <tr>
                                <td>結果決定</td>
                                <td>中央サーバーで決定し端末に送信</td>
                                <td>端末のRNGが独立して決定</td>
                            </tr>
                            <tr>
                                <td>設置場所</td>
                                <td>バー・コンビニ・飲食店等</td>
                                <td>カジノ専用施設</td>
                            </tr>
                            <tr>
                                <td>認証対象</td>
                                <td>セントラルシステムが主な認証対象</td>
                                <td>各EGMが個別に認証対象</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mermaid-wrap">
                    <div id="mermaid-4" className="mermaid"></div>
                </div>

                {/* 2.3 EGM / Slot Machine Ecosystem */}
                <h3 className="section-title">
                    2.3 EGM（Electronic Gaming Machine）/ スロットエコシステム
                    <span className="k-badge">K2</span>
                </h3>
                <p>
                    <strong>定義：</strong
                    >電子的なゲームを実行する独立したゲーミング端末。内部に独自のRNGを搭載し、カジノ管理システム（CMS）と通信します。
                </p>

                <h4 className="sub-title">EGM ハードウェア構成</h4>
                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-label">メインCPU</span>
                        <span className="arch-desc"
                            >ゲームロジック・RNG処理の中核。セキュアメモリ(EPROM)と連携してゲーム状態を保持</span
                        >
                    </div>
                    <div className="arch-row cyan">
                        <span className="arch-label">ディスプレイ</span>
                        <span className="arch-desc"
                            >メインディスプレイ（リール表示）＋トップボックス（ボーナス演出・ジャックポット表示）</span
                        >
                    </div>
                    <div className="arch-row amber">
                        <span className="arch-label">BNA（紙幣識別機）</span>
                        <span className="arch-desc"
                            >Bill Note
                            Acceptor。紙幣の真偽判定・デノミネーション認識。テスト対象：認識精度・偽札検出率</span
                        >
                    </div>
                    <div className="arch-row purple">
                        <span className="arch-label">チケットプリンター</span>
                        <span className="arch-desc"
                            >TITO（Ticket-In /
                            Ticket-Out）システム。バーコード印刷精度・可読性・紙切れ検出がテスト対象</span
                        >
                    </div>
                    <div className="arch-row red">
                        <span className="arch-label">カードリーダー</span>
                        <span className="arch-desc"
                            >プレイヤーズカード読み取り。ポイント管理・プレイヤー識別に使用</span
                        >
                    </div>
                    <div className="arch-row pink">
                        <span className="arch-label">通信モジュール</span>
                        <span className="arch-desc"
                            >SAS / G2S プロトコルによりCMS・JPコントローラーと通信</span
                        >
                    </div>
                </div>

                <div className="mermaid-wrap">
                    <div id="mermaid-5" className="mermaid"></div>
                </div>

                {/* 2.4 Lottery Ecosystem */}
                <h3 className="section-title">
                    2.4 宝くじシステムエコシステム <span className="k-badge">K2</span>
                </h3>
                <p>
                    <strong>特徴：</strong
                    >宝くじはVLTと同様に集中管理型のシステムです。販売端末・キオスク・オンラインチャネルが単一のセントラルシステムに接続し、抽選結果を共有します。
                </p>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>コンポーネント</th>
                                <th>役割</th>
                                <th>主なテスト観点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>セントラルシステム</td>
                                <td>チケット管理・当選判定・支払い処理</td>
                                <td>データ整合性・当選判定ロジック・耐障害性</td>
                            </tr>
                            <tr>
                                <td>販売端末（POS）</td>
                                <td>チケット販売・バーコード印刷</td>
                                <td>印刷精度・通信断時の処理・二重販売防止</td>
                            </tr>
                            <tr>
                                <td>セルフ端末（Kiosk）</td>
                                <td>自動販売・当選確認・払い出し</td>
                                <td>現金処理・ネットワーク断時の動作</td>
                            </tr>
                            <tr>
                                <td>抽選システム</td>
                                <td>ランダムな当選番号の生成・配信</td>
                                <td>RNG認証・抽選結果の改ざん防止</td>
                            </tr>
                            <tr>
                                <td>VLT（宝くじ型）</td>
                                <td>電子的なインスタントくじを提供</td>
                                <td>RTPの検証・セントラル接続の安定性</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 2.5 Online Gambling Ecosystem */}
                <h3 className="section-title">
                    2.5 オンラインギャンブルエコシステム <span className="k-badge">K3</span>
                </h3>
                <p>
                    <strong>特徴：</strong
                    >オンラインエコシステムは複数のレイヤーにまたがる分散システムです。プレイヤー保護（KYC・AML・責任ある賭博）・ジオロケーション・セキュリティが追加テスト領域となります。
                </p>

                <div className="mermaid-wrap">
                    <div id="mermaid-6" className="mermaid"></div>
                </div>

                <div className="compare">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 適切なオンライン統合テスト</div>
                        <p>
                            ジオロケーション・KYC・AML・自己排除機能・ウォレット整合性をすべて組み合わせた
                            End-to-End テストを実施し、全管轄要件への準拠を確認する。
                        </p>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 不十分な統合テスト</div>
                        <p>
                            ゲームロジックのみをテストし、ジオロケーションバイパス・AML検知・自己排除バイパス等のコンプライアンス要件をテストしない。規制機関による摘発リスク。
                        </p>
                    </div>
                </div>

                <h3 className="section-title">参照 URL (Chapter 2)</h3>
                <div className="ref-grid">
                    <a href="https://www.gaminglabs.com/" target="_blank" className="ref-card">
                        <span className="ref-cat">🏛️ ITL公式</span>
                        <span className="ref-title">GLI – Gaming Labs International</span>
                        <span className="ref-url">https://www.gaminglabs.com/</span>
                    </a>
                    <a href="https://www.bmm.com/" target="_blank" className="ref-card">
                        <span className="ref-cat">🏛️ ITL公式</span>
                        <span className="ref-title">BMM Testlabs</span>
                        <span className="ref-url">https://www.bmm.com/</span>
                    </a>
                    <a href="https://www.gamingstandards.com/" target="_blank" className="ref-card">
                        <span className="ref-cat">📋 プロトコル標準</span>
                        <span className="ref-title">Gaming Standards Association (GSA)</span>
                        <span className="ref-url">https://www.gamingstandards.com/</span>
                    </a>
                    <a href="https://ecogra.org/" target="_blank" className="ref-card">
                        <span className="ref-cat">🌐 オンライン認証</span>
                        <span className="ref-title">eCOGRA</span>
                        <span className="ref-url">https://ecogra.org/</span>
                    </a>
                </div>
                </div>
            </section>

            {/* ===== CHAPTER 3: TESTING TECHNIQUES ===== */}
            <section id="ch3" className="chapter">
                <div className="container">
                    <div className="chapter-header">
                    <span className="chapter-num">Chapter 3</span>
                    <span className="k-badge">K1 / K2 / K3</span>
                    <h2>ギャンブル産業テスト技法</h2>
                </div>

                <div className="callout warning">
                    <span className="callout-icon">⚠️</span>
                    <div className="callout-body">
                        <strong>Chapter 3 は試験配点 50%！</strong>
                        <p>
                            最も重要な章です。コンプライアンステスト・数学テスト・ハードウェアテスト・プロトコルテスト・オンラインテスト・セキュリティテストをすべて習得してください。
                        </p>
                    </div>
                </div>

                {/* Testing Categories Overview */}
                <h3 className="section-title">テスト種別マップ</h3>
                <div className="pyramid">
                    <div className="pyramid-layer">
                        <span>セキュリティ・コンプライアンス</span>
                        <small>最高優先度・ITL必須</small>
                    </div>
                    <div className="pyramid-layer">
                        <span>数学テスト・プロトコルテスト</span>
                        <small>RTP・SAS/G2S検証</small>
                    </div>
                    <div className="pyramid-layer">
                        <span>ハードウェア・統合テスト</span>
                        <small>BNA・TITO・CMS接続</small>
                    </div>
                    <div className="pyramid-layer">
                        <span>機能・プレイヤー体験テスト</span>
                        <small>ゲームロジック・Fun Factor</small>
                    </div>
                </div>

                {/* 3.1 Compliance Testing */}
                <h3 className="section-title">
                    3.1 コンプライアンステスト <span className="k-badge">K3</span>
                </h3>
                <p>
                    <strong>定義：</strong
                    >ギャンブルソフトウェア・ハードウェアが特定管轄の法規制要件に準拠していることを検証するテスト。ITLへの提出が前提となります。
                </p>
                <p>
                    <strong>一般的な機能テストとの違い：</strong
                    >機能テストは「仕様通りに動作するか」を検証しますが、コンプライアンステストは「法規制・管轄要件を満たしているか」を検証します。
                </p>

                <div className="mermaid-wrap">
                    <div id="mermaid-7" className="mermaid"></div>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>コンプライアンステストの種類</th>
                                <th>内容</th>
                                <th>対象</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ゲームコンプライアンステスト</td>
                                <td>ゲームロジック・RTP・RNGが管轄要件に準拠しているか検証</td>
                                <td>すべてのゲームタイトル</td>
                            </tr>
                            <tr>
                                <td>プラットフォームコンプライアンステスト</td>
                                <td>プラットフォーム抽象化レイヤーが管轄仕様を満たすか検証</td>
                                <td>カジノプラットフォーム</td>
                            </tr>
                            <tr>
                                <td>ハードウェアコンプライアンステスト</td>
                                <td>EGMの物理コンポーネントが管轄技術標準に準拠しているか</td>
                                <td>EGM・VLT端末</td>
                            </tr>
                            <tr>
                                <td>ネットワークコンプライアンステスト</td>
                                <td>通信プロトコル・暗号化・ログ保全が規制要件を満たすか</td>
                                <td>全通信レイヤー</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 3.2 Math Testing */}
                <h3 className="section-title">
                    3.2 数学テスト（Math Testing） <span className="k-badge">K3</span>
                </h3>
                <p>
                    <strong>定義：</strong
                    >ゲームの数学的特性（RTP・ボラティリティ・ヒット率・ジャックポット頻度）が設計通りであることを、統計的シミュレーションによって検証するテスト。
                </p>
                <p>
                    <strong>なぜ重要か：</strong
                    >RTPが設計値より低いと「不正なゲーム」として規制違反となります。逆に高すぎるとカジノが損失を被ります。管轄によってはRTP最低値が法律で定められています。
                </p>

                <div className="trend-card">
                    <div className="trend-title">📊 RTP 許容誤差の管轄例</div>
                    <div className="trend-desc">
                        英国UKGC：スロット最低RTP
                        規定なし（表示義務あり）。ニュージャージー州：最低RTP
                        83%以上。ネバダ州：75%以上。日本のパチスロ：設定別に定義されたRT範囲内。
                    </div>
                </div>

                {/* prettier-ignore */}
                <div className="code-block" data-lang="Python">
                    <code><span className="code-comment"># 数学検証：RTP・ボラティリティ・ヒット率を同時検証する例</span>
<span className="code-keyword">import</span> <span className="code-cyan">statistics</span>

<span className="code-keyword">class</span> <span className="code-cyan">MathValidator</span>:
    <span className="code-keyword">def</span> <span className="code-green">run_simulation</span>(<span className="code-white">self</span>, <span className="code-white">engine</span>, <span className="code-white">itr</span>=<span className="code-num">10_000_000</span>):
        <span className="code-white">bets</span>, <span className="code-white">wins_list</span>, <span className="code-white">win_count</span> = [], [], <span className="code-num">0</span>

        <span className="code-keyword">for</span> <span className="code-white">_</span> <span className="code-keyword">in</span> <span className="code-cyan">range</span>(<span className="code-white">itr</span>):
            <span className="code-white">result</span> = <span className="code-white">engine</span>.<span className="code-green">spin</span>(<span className="code-num">1.0</span>)
            <span className="code-white">bets</span>.<span className="code-green">append</span>(<span className="code-num">1.0</span>)
            <span className="code-white">wins_list</span>.<span className="code-green">append</span>(<span className="code-white">result</span>.<span className="code-white">payout</span>)
            <span className="code-keyword">if</span> <span className="code-white">result</span>.<span className="code-white">payout</span> &gt; <span className="code-num">0</span>:
                <span className="code-white">win_count</span> += <span className="code-num">1</span>

        <span className="code-white">actual_rtp</span> = <span className="code-cyan">sum</span>(<span className="code-white">wins_list</span>) / <span className="code-cyan">sum</span>(<span className="code-white">bets</span>) * <span className="code-num">100</span>
        <span className="code-white">hit_rate</span> = <span className="code-white">win_count</span> / <span className="code-white">itr</span> * <span className="code-num">100</span>
        <span className="code-white">variance</span> = <span className="code-cyan">statistics</span>.<span className="code-green">variance</span>(<span className="code-white">wins_list</span>)

        <span className="code-keyword">return</span> &#123;
            <span className="code-string">"rtp_actual"</span>: <span className="code-cyan">round</span>(<span className="code-white">actual_rtp</span>, <span className="code-num">4</span>),
            <span className="code-string">"rtp_target"</span>: <span className="code-white">engine</span>.<span className="code-white">theoretical_rtp</span>,
            <span className="code-string">"rtp_ok"</span>: <span className="code-cyan">abs</span>(<span className="code-white">actual_rtp</span> - <span className="code-white">engine</span>.<span className="code-white">theoretical_rtp</span>) &lt; <span className="code-num">0.5</span>,
            <span className="code-string">"hit_rate_pct"</span>: <span className="code-cyan">round</span>(<span className="code-white">hit_rate</span>, <span className="code-num">2</span>),
            <span className="code-string">"variance"</span>: <span className="code-cyan">round</span>(<span className="code-white">variance</span>, <span className="code-num">4</span>),
        &#125;</code>
                </div>

                <div className="compare">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 適切な数学テスト</div>
                        <p>
                            1,000万〜100億回のシミュレーションを実施し、RTP偏差が±0.5%以内であることを確認。ボラティリティ・ヒット率・最大ペイアウト発生頻度も検証。管轄の最低RTP要件と照合する。
                        </p>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 不十分な数学テスト</div>
                        <p>
                            1,000回程度の小規模テストでRTPを推定する。統計的に不十分でありコンプライアンス上の欠陥を見逃す。ボラティリティや境界条件のテストが欠如している。
                        </p>
                    </div>
                </div>

                {/* 3.3 Hardware Testing */}
                <h3 className="section-title">
                    3.3 ハードウェアテスト <span className="k-badge">K3</span>
                </h3>
                <p>
                    <strong>定義：</strong
                    >EGMの物理コンポーネントが仕様通りに動作し、管轄のハードウェア技術標準を満たしていることを検証するテスト。
                </p>

                <div className="step-list">
                    <div className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <strong>BNA（紙幣識別機）テスト</strong>
                            <p>
                                対応紙幣種類・真偽判定精度・リジェクト率・偽造紙幣検出率を検証。管轄ごとに対応紙幣（ドル・ユーロ・ポンド等）が異なる点に注意。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <strong>チケットプリンター（TITO）テスト</strong>
                            <p>
                                バーコードの印刷精度・可読性・紙切れ検出・二重発行防止・バーコードスキャン再現性を検証。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <strong>扉開閉・セキュリティテスト</strong>
                            <p>
                                扉開放時のゲーム中断・ログ記録・アラート発報を検証。コンプライアンス要件として必須。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <strong>電源障害テスト（Power Failure Recovery）</strong>
                            <p>
                                停電後にゲーム状態が正確に復元されることを確認。ベット額・クレジット残高・進行中のゲーム状態がすべて保持される必要あり。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <strong>計量学テスト（Metrology Testing）</strong>
                            <p>
                                メトロロジーデータ（収益・支払い累計）の保全性・改ざん不可能性を検証。規制機関が監査データとして使用。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>よくあるハードウェア欠陥</th>
                                <th>説明</th>
                                <th>影響</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>通信切断欠陥</td>
                                <td>EGM と CMS の接続が突発的に切断</td>
                                <td>ゲーム中断・データロス</td>
                            </tr>
                            <tr>
                                <td>JP 計算欠陥</td>
                                <td>累積 JP の加算エラー</td>
                                <td>不正な JP 額の表示・支払い</td>
                            </tr>
                            <tr>
                                <td>状態回復欠陥</td>
                                <td>停電後のゲーム状態が正しく復元されない</td>
                                <td>プレイヤー損失・コンプライアンス違反</td>
                            </tr>
                            <tr>
                                <td>BNA 偽札検出漏れ</td>
                                <td>偽造紙幣を正規と誤認識</td>
                                <td>金融リスク・規制違反</td>
                            </tr>
                            <tr>
                                <td>タイムアウト欠陥</td>
                                <td>ネットワーク障害時の処理が不適切</td>
                                <td>デッドロック・不正なゲーム結果</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 3.4 Protocol Testing */}
                <h3 className="section-title">
                    3.4 プロトコルテスト（SAS / G2S） <span className="k-badge">K3</span>
                </h3>
                <p>
                    <strong>定義：</strong
                    >EGMとCMSの間で交わされる標準通信プロトコルが仕様通りに実装されていることを検証するテスト。
                </p>

                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-label">SAS プロトコル</span>
                        <span className="arch-desc"
                            ><strong>Slot Accounting System</strong> —
                            IGTが開発したEGM〜CMS間の従来型プロトコル。ポーリングベースで定期的にゲームデータを収集する。RS-232シリアル通信ベース。</span
                        >
                    </div>
                    <div className="arch-row cyan">
                        <span className="arch-label">G2S プロトコル</span>
                        <span className="arch-desc"
                            ><strong>Game to System</strong> — Gaming Standards Association (GSA)
                            が策定した次世代プロトコル。XML/TCP/IPベースでイベント駆動型。ボーナス・プレイヤートラッキング・設定変更等に対応。</span
                        >
                    </div>
                    <div className="arch-row amber">
                        <span className="arch-label">S2S プロトコル</span>
                        <span className="arch-desc"
                            ><strong>System to System</strong> —
                            カジノシステム間（CMS〜CMS）の通信プロトコル。複数プロパティ・複数ベンダー間の相互運用性に使用。</span
                        >
                    </div>
                </div>

                <div className="mermaid-wrap">
                    <div id="mermaid-8" className="mermaid"></div>
                </div>

                {/* 3.5 Online Gambling Testing */}
                <h3 className="section-title">
                    3.5 オンラインギャンブルテスト <span className="k-badge">K3</span>
                </h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>テスト領域</th>
                                <th>主な検証内容</th>
                                <th>関連規制</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ジオロケーションテスト</td>
                                <td>VPN検出・プロキシ検出・IPブラックリスト適用の正確性</td>
                                <td>管轄別ライセンス要件</td>
                            </tr>
                            <tr>
                                <td>KYC（本人確認）テスト</td>
                                <td>年齢確認・ID検証フロー・バイパス試行への耐性</td>
                                <td>AML規制・Gambling Act</td>
                            </tr>
                            <tr>
                                <td>AMLテスト</td>
                                <td>大額取引検出・不審パターン検知・疑わしい取引レポート</td>
                                <td>FATF・各国AML法</td>
                            </tr>
                            <tr>
                                <td>責任ある賭博テスト</td>
                                <td>賭け金制限設定・自己排除機能・冷却期間（Cooling-off）</td>
                                <td>UKGC・MGA要件</td>
                            </tr>
                            <tr>
                                <td>決済セキュリティテスト</td>
                                <td>PCI-DSS準拠・不正取引検出・チャージバック処理</td>
                                <td>PCI-DSS・GDPR</td>
                            </tr>
                            <tr>
                                <td>クロスプラットフォームテスト</td>
                                <td>PC/モバイル/タブレット・iOS/Android・クロスブラウザ動作</td>
                                <td>WAI-ARIA・プラットフォーム要件</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 3.6 Fun Factor Testing */}
                <h3 className="section-title">
                    3.6 Fun Factor（プレイヤー体験）テスト <span className="k-badge">K2</span>
                </h3>
                <p>
                    <strong>定義：</strong
                    >ゲームがプレイヤーにとって楽しく、期待感を生み出し、長時間プレイしたいと思わせる体験を提供しているかを評価するテスト。ギャンブルテスト固有のアプローチです。
                </p>

                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-label">ゲームフロー</span>
                        <span className="arch-desc"
                            >プレイの流れがスムーズか・ボタン操作の反応速度・アニメーションの滑らかさを評価</span
                        >
                    </div>
                    <div className="arch-row cyan">
                        <span className="arch-label">ビジュアル演出</span>
                        <span className="arch-desc"
                            >勝利時のアニメーション品質・シンボルの視認性・カラーコントラスト・ゲームテーマの一貫性</span
                        >
                    </div>
                    <div className="arch-row amber">
                        <span className="arch-label">期待感（Anticipation）</span>
                        <span className="arch-desc"
                            >当選直前の盛り上がり演出（ニアミス）・ボーナストリガー直前の緊張感</span
                        >
                    </div>
                    <div className="arch-row purple">
                        <span className="arch-label">機能発見可能性</span>
                        <span className="arch-desc"
                            >ボーナスゲームの入り方・ペイテーブルへのアクセス・ゲームルールの分かりやすさ</span
                        >
                    </div>
                </div>

                {/* 3.7 Audio Testing */}
                <h3 className="section-title">3.7 オーディオテスト <span className="k-badge">K2</span></h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>テスト観点</th>
                                <th>検証内容</th>
                                <th>よくある欠陥</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>音量レベルテスト</td>
                                <td>最大・最小音量・フェードイン/アウト</td>
                                <td>管轄の騒音規制超過・無音バグ</td>
                            </tr>
                            <tr>
                                <td>同期テスト</td>
                                <td>ビジュアルとの同期・遅延50ms以内</td>
                                <td>勝利アニメーションと効果音のズレ</td>
                            </tr>
                            <tr>
                                <td>ループテスト</td>
                                <td>BGMのシームレスループ・切り替えの滑らかさ</td>
                                <td>ループ継ぎ目のノイズ・無音区間</td>
                            </tr>
                            <tr>
                                <td>多言語テスト</td>
                                <td>ボイスの言語設定・地域ごとの適切さ</td>
                                <td>言語切り替え後も旧言語で再生</td>
                            </tr>
                            <tr>
                                <td>版権コンプライアンス</td>
                                <td>使用楽曲・効果音の権利確認</td>
                                <td>無断使用の著作権違反</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 3.8 Multiplayer Testing */}
                <h3 className="section-title">
                    3.8 マルチプレイヤーテスト <span className="k-badge">K2</span>
                </h3>
                <div className="mermaid-wrap">
                    <div id="mermaid-9" className="mermaid"></div>
                </div>

                {/* 3.9 Interoperability Testing */}
                <h3 className="section-title">3.9 相互運用性テスト <span className="k-badge">K2</span></h3>

                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-label">プロトコル間</span>
                        <span className="arch-desc"
                            >SAS ↔ G2S プロトコル変換テスト・OpenAPI 標準化への準拠確認</span
                        >
                    </div>
                    <div className="arch-row cyan">
                        <span className="arch-label">プラットフォーム間</span>
                        <span className="arch-desc"
                            >PC ↔ モバイルのセッション継続性テスト。iOS ↔ Android
                            同一ゲームの動作一致確認</span
                        >
                    </div>
                    <div className="arch-row amber">
                        <span className="arch-label">管轄間</span>
                        <span className="arch-desc"
                            >管轄Aの設定から管轄Bでの動作確認（RTP・言語・通貨・年齢制限の自動切り替え）</span
                        >
                    </div>
                    <div className="arch-row purple">
                        <span className="arch-label">ベンダー間</span>
                        <span className="arch-desc"
                            >複数ベンダーのCMSとEGM間の互換性・サードパーティゲームコンテンツの統合テスト</span
                        >
                    </div>
                </div>

                {/* 3.10 Security Testing */}
                <h3 className="section-title">
                    3.10 セキュリティテスト <span className="k-badge">K3</span>
                </h3>
                <p>
                    <strong>定義：</strong
                    >ギャンブルシステムが不正アクセス・改ざん・マネーロンダリング・不正行為から保護されていることを検証するテスト。
                </p>

                <div className="mermaid-wrap">
                    <div id="mermaid-10" className="mermaid"></div>
                </div>

                <div className="compare">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 適切なセキュリティテスト</div>
                        <p>
                            ジオロケーション・VPN検出・AMLフィルタ・KYCバイパス試行テストを組み合わせる。ペネトレーションテストでRNG・ペイアウト系への外部攻撃耐性を検証。PCI-DSS要件を全項目チェック。
                        </p>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 不十分なセキュリティテスト</div>
                        <p>
                            認証・認可テストのみ実施し、AML・ジオブロッキング・RNG改ざん防止テストを省略。規制機関監査でコンプライアンス違反が発覚し、ライセンス剥奪リスクを招く。
                        </p>
                    </div>
                </div>

                <h3 className="section-title">参照 URL (Chapter 3)</h3>
                <div className="ref-grid">
                    <a
                        href="https://www.gamblingcommission.gov.uk/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">🏛️ 規制機関</span>
                        <span className="ref-title">UK Gambling Commission</span>
                        <span className="ref-url">https://www.gamblingcommission.gov.uk/</span>
                    </a>
                    <a href="https://www.mga.org.mt/" target="_blank" className="ref-card">
                        <span className="ref-cat">🏛️ 規制機関</span>
                        <span className="ref-title">Malta Gaming Authority (MGA)</span>
                        <span className="ref-url">https://www.mga.org.mt/</span>
                    </a>
                    <a
                        href="https://www.gamingstandards.com/g2s-protocol/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">📋 プロトコル</span>
                        <span className="ref-title">G2S Protocol – Gaming Standards Association</span>
                        <span className="ref-url">https://www.gamingstandards.com/g2s-protocol/</span>
                    </a>
                    <a
                        href="https://www.pcisecuritystandards.org/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">🔒 セキュリティ</span>
                        <span className="ref-title">PCI Security Standards Council</span>
                        <span className="ref-url">https://www.pcisecuritystandards.org/</span>
                    </a>
                </div>
                </div>
            </section>

            {/* ===== EXAM TIPS ===== */}
            <section id="exam" className="chapter">
                <div className="container">
                    <div className="chapter-header">
                    <span className="chapter-num">付録</span>
                    <span className="k-badge amber">試験対策</span>
                    <h2>試験対策・サンプル問題</h2>
                </div>

                <h3 className="section-title">章別配点・重要度</h3>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-card-header">
                            <span className="exam-card-title">Chapter 1</span
                            ><span className="exam-stars">★★★★</span>
                        </div>
                        <div className="exam-card-val">~10問</div>
                        <div className="exam-card-desc">産業入門・RNG・RTP・GSDLC・ITL・規制機関</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-header">
                            <span className="exam-card-title">Chapter 2</span
                            ><span className="exam-stars">★★★★★</span>
                        </div>
                        <div className="exam-card-val">~10問</div>
                        <div className="exam-card-desc">
                            VLT vs EGM の違い・エコシステム構成・プロトコル
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-header">
                            <span className="exam-card-title">Chapter 3</span
                            ><span className="exam-stars">★★★★★</span>
                        </div>
                        <div className="exam-card-val">~20問</div>
                        <div className="exam-card-desc">
                            コンプライアンス・数学・ハード・セキュリティ等テスト技法
                        </div>
                    </div>
                </div>

                {/* Must-know concepts */}
                <h3 className="section-title">必ず覚える重要概念チェックリスト</h3>
                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-label">RNG の種類と役割</span>
                        <span className="arch-desc"
                            >PRNG（擬似）/ TRNG（真の）/ CSPRNG（暗号的安全）—
                            各特徴とテスト方法を説明できる</span
                        >
                    </div>
                    <div className="arch-row cyan">
                        <span className="arch-label">VLT vs EGM の違い</span>
                        <span className="arch-desc"
                            >VLT は RNG がセントラル側 / EGM は RNG が端末内 —
                            この違いがコンプライアンス対象範囲を決定する</span
                        >
                    </div>
                    <div className="arch-row amber">
                        <span className="arch-label">First Pass Percentage</span>
                        <span className="arch-desc"
                            >初回 ITL 申請で合格する製品の割合。高いほど内部品質が高い</span
                        >
                    </div>
                    <div className="arch-row purple">
                        <span className="arch-label">Escape Compliance Defects</span>
                        <span className="arch-desc"
                            >ITL
                            や規制機関に発見される前に逸失したコンプライアンス欠陥数。目標値はゼロ</span
                        >
                    </div>
                    <div className="arch-row red">
                        <span className="arch-label">SAS / G2S プロトコル</span>
                        <span className="arch-desc"
                            >SAS = ポーリング型シリアル通信 / G2S =
                            XML/TCP/IPベースのイベント駆動型次世代プロトコル</span
                        >
                    </div>
                    <div className="arch-row pink">
                        <span className="arch-label">コンプライアンス vs 機能テスト</span>
                        <span className="arch-desc"
                            >機能テスト = 仕様通りに動作するか / コンプライアンステスト =
                            法規制・管轄要件を満たすか</span
                        >
                    </div>
                </div>

                {/* Sample Questions */}
                <h3 className="section-title">サンプル問題と解説</h3>

                <div className="trend-card">
                    <div className="trend-title">
                        問1（K2 / Chapter 1）RNGに関する正しい記述はどれか？
                    </div>
                    <div className="trend-desc">
                        A) VLT では RNG は各端末内に搭載される<br />
                        B) スロットマシンの RNG はセントラルシステムで動作する<br />
                        <strong style={{color: "var(--color-accent-green)"}}
                            >C) VLT の RNG はセントラルシステムで動作し、スロットマシンの RNG は各
                            EGM 内に搭載される ✅</strong
                        ><br />
                        D) すべてのギャンブル機器の RNG は独立テストラボで管理される<br />
                        <br /><span style={{color: "var(--color-text-secondary)", fontSize: "1rem"}}
                            >解説：VLT と EGM の根本的な違いは RNG の所在場所です。VLT の RNG
                            はセントラルシステム（政府管理）に存在し、各端末は結果を受信するだけです。スロットマシン（EGM）は各端末内に
                            RNG を搭載しています。</span
                        >
                    </div>
                </div>

                <div className="trend-card">
                    <div className="trend-title">
                        問2（K2 / Chapter 1）「First Pass
                        Percentage」の定義として正しいものはどれか？
                    </div>
                    <div className="trend-desc">
                        A) ゲームが最初のプレイで当選する確率<br />
                        <strong style={{color: "var(--color-accent-green)"}}
                            >B) ITL への最初の認証申請で合格する製品の割合 ✅</strong
                        ><br />
                        C) プレイヤーが初回ログインに成功する割合<br />
                        D) 独立テストラボが最初の審査で欠陥を発見する割合<br />
                        <br /><span style={{color: "var(--color-text-secondary)", fontSize: "1rem"}}
                            >解説：First Pass Percentage
                            は、ITL（独立テストラボ）への最初の提出で合格する製品の割合を示すギャンブル産業固有のメトリクスです。高いほど内部QAの品質が高いことを意味します。</span
                        >
                    </div>
                </div>

                <div className="trend-card">
                    <div className="trend-title">
                        問3（K3 / Chapter 2）ニュージャージー州向け EGM
                        のハードウェアコンプライアンステストで最適なものはどれか？
                    </div>
                    <div className="trend-desc">
                        A) 紙幣識別機が US 紙幣とスロットバウチャーを受け入れることを検証する<br />
                        <strong style={{color: "var(--color-accent-green)"}}
                            >B)
                            プレイヤー識別デバイスがニュージャージー州用に設定されたカードのみを受け入れることを確認する
                            ✅</strong
                        ><br />
                        C) ベット上限が RNG 上限（最大 $500）と一致することを確認する<br />
                        D) メカニカルリールがゲーム仕様通りの速度で回転することを確認する<br />
                        <br /><span style={{color: "var(--color-text-secondary)", fontSize: "1rem"}}
                            >解説：ハードウェアコンプライアンステストでは管轄固有の要件に焦点を当てます。NJ
                            州用設定のカードのみを受け付けることは、その管轄のコンプライアンス要件への準拠確認として最も適切です。</span
                        >
                    </div>
                </div>

                <div className="trend-card">
                    <div className="trend-title">
                        問4（K2 / Chapter
                        3）プラットフォームコンプライアンステストの主目的はどれか？
                    </div>
                    <div className="trend-desc">
                        <strong style={{color: "var(--color-accent-green)"}}
                            >A) プラットフォームが管轄規格を満たしているか確認する ✅</strong
                        ><br />
                        B) プラットフォームが管轄国で利用可能かどうか確認する<br />
                        C) ゲームが管轄国で合法かどうか確認する<br />
                        D) プラットフォームが最高のゲーム体験を提供するか確認する<br />
                        <br /><span style={{color: "var(--color-text-secondary)", fontSize: "1rem"}}
                            >解説：プラットフォームコンプライアンステストの目的は「プラットフォーム抽象化レイヤーが管轄の仕様要件を満たしているか」を検証することです。</span
                        >
                    </div>
                </div>

                {/* Key metrics summary */}
                <h3 className="section-title">重要メトリクス早見表</h3>
                <div className="metric-grid">
                    <div className="metric-card">
                        <span className="metric-val">96%</span>
                        <span className="metric-label"
                            >典型的スロット RTP<br />（管轄により最低値が異なる）</span
                        >
                    </div>
                    <div className="metric-card">
                        <span className="metric-val cyan">10M+</span>
                        <span className="metric-label">数学テストの<br />最低シミュレーション回数</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val amber">480+</span>
                        <span className="metric-label">GLI が対応する<br />世界の管轄数</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val red">0</span>
                        <span className="metric-label">目標 ECD<br />（逸失コンプライアンス欠陥）</span>
                    </div>
                </div>

                <div className="alert green">
                    <strong>✅ 試験直前 最終チェックリスト</strong>
                    □ VLT の RNG はセントラル / EGM の RNG は端末内 — を即答できる<br />
                    □ First Pass Percentage と Escape Compliance Defects の違いを説明できる<br />
                    □ ITL の役割と代表機関（GLI・BMM・NMi・eCOGRA）を3つ以上言える<br />
                    □ SAS（ポーリング型）と G2S（イベント駆動型）の違いを説明できる<br />
                    □ コンプライアンステストと機能テストの目的の違いを明確に言える<br />
                    □ RTP・ハウスエッジ・ボラティリティ・ヒット率の定義と関係を説明できる<br />
                    □ 管轄（Jurisdiction）がテストに与える影響を具体例で説明できる
                </div>
                </div>
            </section>

            {/* ===== REFERENCES ===== */}
            <section id="references" className="chapter">
                <div className="container">
                    <div className="chapter-header">
                    <span className="chapter-num">参照</span>
                    <span className="k-badge cyan">URL一覧</span>
                    <h2>参照 URL 一覧（カテゴリ付き）</h2>
                </div>

                <h3 className="section-title">🏛️ ISTQB® 公式リソース</h3>
                <div className="ref-grid">
                    <a
                        href="https://istqb.org/certifications/certified-tester-gambling-industry-tester-ct-gt/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">🏛️ ISTQB公式</span>
                        <span className="ref-title">CT-GT 公式認定ページ</span>
                        <span className="ref-url"
                            >https://istqb.org/certifications/certified-tester-gambling-industry-tester-ct-gt/</span
                        >
                    </a>
                    <a
                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CT-GT_Sample-Exam-A-Questions_v1.0.1.pdf"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">📄 ISTQB公式</span>
                        <span className="ref-title">CT-GT サンプル試験問題 PDF</span>
                        <span className="ref-url"
                            >https://istqb.org/wp-content/.../CT-GT_Sample-Exam-A-Questions_v1.0.1.pdf</span
                        >
                    </a>
                    <a href="https://istqb.org/exam-providers/" target="_blank" className="ref-card">
                        <span className="ref-cat">🏛️ ISTQB公式</span>
                        <span className="ref-title">ISTQB 試験プロバイダー検索</span>
                        <span className="ref-url">https://istqb.org/exam-providers/</span>
                    </a>
                    <a href="https://glossary.istqb.org/" target="_blank" className="ref-card">
                        <span className="ref-cat">📚 ISTQB公式</span>
                        <span className="ref-title">ISTQB グロッサリー</span>
                        <span className="ref-url">https://glossary.istqb.org/</span>
                    </a>
                </div>

                <h3 className="section-title">🎓 試験プロバイダー・学習リソース</h3>
                <div className="ref-grid">
                    <a
                        href="https://isqi.org/ISTQB-Certified-Tester-Gambling-Industry-Tester-CT-GT/CT-GT.82"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">🎓 試験申込</span>
                        <span className="ref-title">iSQI CT-GT 試験情報</span>
                        <span className="ref-url">https://isqi.org/...CT-GT.82</span>
                    </a>
                    <a
                        href="https://www.anztb.org/certification/ctfl-gt/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">🎓 試験プロバイダー</span>
                        <span className="ref-title">ANZTB CT-GT 情報（豪州・NZ）</span>
                        <span className="ref-url">https://www.anztb.org/certification/ctfl-gt/</span>
                    </a>
                    <a
                        href="https://www.istqb.guru/gambling-tester/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">📖 学習リソース</span>
                        <span className="ref-title">ISTQB.Guru CT-GT ガイド</span>
                        <span className="ref-url">https://www.istqb.guru/gambling-tester/</span>
                    </a>
                    <a
                        href="https://www.processexam.com/istqb/istqb-ct-gt-certification-exam-sample-questions"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">📖 問題集</span>
                        <span className="ref-title">ProcessExam CT-GT サンプル問題</span>
                        <span className="ref-url">https://www.processexam.com/istqb/...ct-gt...</span>
                    </a>
                    <a
                        href="https://www.udemy.com/course/istqb-gambling-industry-tester-ct-gt-mock-exam-set-a/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">🎥 動画学習</span>
                        <span className="ref-title">Udemy CT-GT 模擬試験（200問）</span>
                        <span className="ref-url"
                            >https://www.udemy.com/course/istqb-gambling-industry-tester-ct-gt...</span
                        >
                    </a>
                    <a
                        href="https://www.brightest.org/en/certifications/ISTQB-r-CT-Gambling-Industry-Tester/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">🏅 バッジ認定</span>
                        <span className="ref-title">Brightest CT-GT 情報・バッジ</span>
                        <span className="ref-url">https://www.brightest.org/en/certifications/...</span>
                    </a>
                </div>

                <h3 className="section-title">🎰 独立テストラボ（ITL）</h3>
                <div className="ref-grid">
                    <a href="https://www.gaminglabs.com/" target="_blank" className="ref-card">
                        <span className="ref-cat">🏛️ ITL</span>
                        <span className="ref-title">GLI – Gaming Labs International</span>
                        <span className="ref-url">https://www.gaminglabs.com/</span>
                    </a>
                    <a href="https://www.bmm.com/" target="_blank" className="ref-card">
                        <span className="ref-cat">🏛️ ITL</span>
                        <span className="ref-title">BMM Testlabs</span>
                        <span className="ref-url">https://www.bmm.com/</span>
                    </a>
                    <a href="https://ecogra.org/" target="_blank" className="ref-card">
                        <span className="ref-cat">🌐 ITL（オンライン）</span>
                        <span className="ref-title">eCOGRA</span>
                        <span className="ref-url">https://ecogra.org/</span>
                    </a>
                    <a href="https://www.itechlabs.com/" target="_blank" className="ref-card">
                        <span className="ref-cat">🏛️ ITL（APAC）</span>
                        <span className="ref-title">iTech Labs</span>
                        <span className="ref-url">https://www.itechlabs.com/</span>
                    </a>
                </div>

                <h3 className="section-title">🏛️ 規制機関</h3>
                <div className="ref-grid">
                    <a
                        href="https://www.gamblingcommission.gov.uk/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">⚖️ 規制機関（英国）</span>
                        <span className="ref-title">UK Gambling Commission (UKGC)</span>
                        <span className="ref-url">https://www.gamblingcommission.gov.uk/</span>
                    </a>
                    <a href="https://www.mga.org.mt/" target="_blank" className="ref-card">
                        <span className="ref-cat">⚖️ 規制機関（マルタ）</span>
                        <span className="ref-title">Malta Gaming Authority (MGA)</span>
                        <span className="ref-url">https://www.mga.org.mt/</span>
                    </a>
                    <a
                        href="https://www.njconsumeraffairs.gov/dgge/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">⚖️ 規制機関（米国NJ）</span>
                        <span className="ref-title">NJ Division of Gaming Enforcement</span>
                        <span className="ref-url">https://www.njconsumeraffairs.gov/dgge/</span>
                    </a>
                    <a href="https://www.pagcor.ph/" target="_blank" className="ref-card">
                        <span className="ref-cat">⚖️ 規制機関（フィリピン）</span>
                        <span className="ref-title">PAGCOR</span>
                        <span className="ref-url">https://www.pagcor.ph/</span>
                    </a>
                </div>

                <h3 className="section-title">📋 標準・プロトコル</h3>
                <div className="ref-grid">
                    <a href="https://www.gamingstandards.com/" target="_blank" className="ref-card">
                        <span className="ref-cat">📋 業界標準</span>
                        <span className="ref-title">Gaming Standards Association (GSA)</span>
                        <span className="ref-url">https://www.gamingstandards.com/</span>
                    </a>
                    <a
                        href="https://www.gamingstandards.com/g2s-protocol/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">📋 プロトコル</span>
                        <span className="ref-title">G2S Protocol ドキュメント</span>
                        <span className="ref-url">https://www.gamingstandards.com/g2s-protocol/</span>
                    </a>
                    <a href="https://www.gaminglabs.com/standards" target="_blank" className="ref-card">
                        <span className="ref-cat">📋 技術標準</span>
                        <span className="ref-title">GLI Standards（技術要件）</span>
                        <span className="ref-url">https://www.gaminglabs.com/standards</span>
                    </a>
                    <a
                        href="https://www.pcisecuritystandards.org/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">🔒 セキュリティ標準</span>
                        <span className="ref-title">PCI Security Standards Council</span>
                        <span className="ref-url">https://www.pcisecuritystandards.org/</span>
                    </a>
                </div>

                <h3 className="section-title">📊 市場データ・業界情報</h3>
                <div className="ref-grid">
                    <a
                        href="https://www.grandviewresearch.com/industry-analysis/online-gambling-market"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">📊 市場データ</span>
                        <span className="ref-title">Grand View Research – Online Gambling Market</span>
                        <span className="ref-url"
                            >https://www.grandviewresearch.com/industry-analysis/online-gambling-market</span
                        >
                    </a>
                    <a
                        href="https://gamblingindustrynews.com/global-gambling-statistics/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">📊 統計</span>
                        <span className="ref-title">Gambling Industry News – Global Statistics</span>
                        <span className="ref-url"
                            >https://gamblingindustrynews.com/global-gambling-statistics/</span
                        >
                    </a>
                </div>
                </div>
            </section>

            <footer
                style={{borderTop: "1px solid var(--border-dim)", padding: "2.5rem 0 1.5rem", textAlign: "center"}}
            >
                <div className="container">
                <p style={{fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--text-muted)"}}>
                    🎰 CT-GT ギャンブル産業テスター完全ガイド 2025 | ISTQB® Specialist Stream<br />
                    <span style={{color: "var(--color-accent-orange)"}}
                        >本ガイドはISTQB®が公認したトレーニング資料ではありません。</span
                    ><br />
                    公式シラバス・サンプル問題と合わせてご使用ください。<br />
                    最終確認は
                    <a href="https://istqb.org" target="_blank" style={{color: "var(--color-accent-cyan)"}}
                        >istqb.org</a
                    >
                    の公式サイトで行ってください。
                </p>
                </div>
            </footer>
        
        </div>
    );
}
