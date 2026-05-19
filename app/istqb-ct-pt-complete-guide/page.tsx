import '../istqb-ct-pt-complete-guide.css';
import NavBar from './NavBar';

export default function Page() {
    return (
        <>

        {/*  ===== STICKY NAV =====  */}
        <NavBar />

        {/*  ===== HERO =====  */}
        <section className="hero" id="top">
            <div className="hero-glow"></div>
            <div className="container">
                <p className="hero-tag">▸ ISTQB® SPECIALIST CERTIFICATION</p>
                <h1>
                    <span className="accent">Performance</span><br />
                    <span className="accent2">Testing</span> Guide<br />
                    <span style={{ fontSize: `1rem`, color: `var(--color-text-secondary)` }}
                        >CT-PT v1.0 完全学習ガイド 2025</span
                    >
                </h1>
                <p className="hero-desc">
                    パフォーマンステストの基礎から実践まで。ISTQB CT-PT シラバス全章を網羅した
                    初学者対応のステップバイステップ解説。負荷・ストレス・耐久テストの全種類、
                    メトリクス収集・ボトルネック分析・ツール選定まで完全カバー。
                </p>
                <div className="hero-meta">
                    <span className="meta-badge green">▸ 40問 / 60分</span>
                    <span className="meta-badge cyan">▸ 合格基準 65%</span>
                    <span className="meta-badge amber">▸ 前提：CTFL必須</span>
                    <span className="meta-badge purple">▸ 5章構成</span>
                </div>
            </div>
        </section>

        {/*  ===== OVERVIEW =====  */}
        <section id="overview">
            <div className="container">
                <div className="section-header">
                    <span className="section-icon">🗺️</span>
                    <div>
                        <h2>学習ガイド目次</h2>
                        <p>CT-PT シラバスの全章を体系的に学習します。</p>
                    </div>
                </div>

                <div className="toc-grid">
                    <a className="toc-card" href="#ch1">
                        <div className="toc-card-num">Chapter 01 — 約30%</div>
                        <div className="toc-card-title">基本概念<br />テスト種類・負荷生成</div>
                    </a>
                    <a className="toc-card" href="#ch2">
                        <div className="toc-card-num">Chapter 02 — 約25%</div>
                        <div className="toc-card-title">
                            パフォーマンス測定の基礎<br />メトリクス・パーセンタイル
                        </div>
                    </a>
                    <a className="toc-card" href="#ch3">
                        <div className="toc-card-num">Chapter 03 — 約15%</div>
                        <div className="toc-card-title">
                            ソフトウェアライフサイクル<br />シフトレフト・アーキテクチャ
                        </div>
                    </a>
                    <a className="toc-card" href="#ch4">
                        <div className="toc-card-num">Chapter 04 — 約20%</div>
                        <div className="toc-card-title">
                            パフォーマンステストタスク<br />計画・設計・実行・分析
                        </div>
                    </a>
                    <a className="toc-card" href="#ch5">
                        <div className="toc-card-num">Chapter 05 — 約10%</div>
                        <div className="toc-card-title">ツール<br />選定基準・カテゴリ</div>
                    </a>
                    <a className="toc-card" href="#exam">
                        <div className="toc-card-num">試験対策</div>
                        <div className="toc-card-title">サンプル問題 &amp; チェックリスト</div>
                    </a>
                </div>

                <div className="section-divider"></div>

                <h3>なぜパフォーマンステストが重要なのか？</h3>
                <div className="metric-grid">
                    <div className="metric-card green">
                        <div className="metric-value">1%</div>
                        <div className="metric-label">
                            100ms 遅延ごとの Amazon 売上減少（2012年調査）
                        </div>
                    </div>
                    <div className="metric-card amber">
                        <div className="metric-value">53%</div>
                        <div className="metric-label">
                            モバイルページ3秒超で離脱するユーザー割合 (Akamai)
                        </div>
                    </div>
                    <div className="metric-card red">
                        <div className="metric-value">$5.6K</div>
                        <div className="metric-label">
                            ITシステムダウンタイム 1分あたりの平均損失 (Gartner)
                        </div>
                    </div>
                    <div className="metric-card cyan">
                        <div className="metric-value">100x</div>
                        <div className="metric-label">
                            本番後の修正コスト vs 開発フェーズでの修正コスト比
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  ===== CHAPTER 1 =====  */}
        <section
            id="ch1"
            style={{ background: `linear-gradient(
                    180deg,
                    var(--color-bg-primary) 0%,
                    rgba(0, 255, 136, 0.02) 100%
                )` }}
        >
            <div className="container">
                <div className="chapter-num">CHAPTER 01 <span className="klevel">K1 / K2 / K3</span></div>
                <div className="section-header">
                    <span className="section-icon">⚡</span>
                    <div>
                        <h2>基本概念（Basic Concepts）</h2>
                        <p>パフォーマンスの3要素、テスト種類7つ、負荷生成の仕組みを学びます。</p>
                    </div>
                </div>

                {/*  1.1 性能効率性  */}
                <h3>1.1 パフォーマンス効率性（ISO/IEC 25010）</h3>
                <p>
                    ISO/IEC 25010 では
                    <strong>パフォーマンス効率性（Performance Efficiency）</strong>を
                    「リソース量と条件に対して、適切なパフォーマンスを発揮する能力」と定義しています。
                    3つのサブ特性で構成されます。
                </p>

                <div className="arch-layers">
                    <div className="arch-row green">
                        <div className="arch-label">時間効率性</div>
                        <div className="arch-content">
                            応答時間・処理時間・スループットが要件を満たすか。例：「検索ボタン後
                            3秒以内に結果表示」
                        </div>
                    </div>
                    <div className="arch-row cyan">
                        <div className="arch-label">リソース利用性</div>
                        <div className="arch-content">
                            CPU・メモリ・ディスク・ネットワーク等の使用量が許容範囲内か。例：「通常負荷時
                            CPU 70%以下」
                        </div>
                    </div>
                    <div className="arch-row amber">
                        <div className="arch-label">収容性</div>
                        <div className="arch-content">
                            システムが処理できる最大量の要件を満たすか。例：「同時接続
                            1,000ユーザーに対応」
                        </div>
                    </div>
                </div>

                <div className="callout info">
                    <div className="callout-title">ℹ️ DEFINITION</div>
                    パフォーマンステストの目的は①特性の評価②欠陥の発見③要件の検証④ベースラインの確立⑤リスクの低減⑥設計の最適化。この6つを押さえましょう。
                </div>

                <div className="section-divider"></div>

                {/*  1.2 テスト種類  */}
                <h3>1.2 パフォーマンステストの種類（7種類）— 試験最頻出！</h3>
                <p>
                    7種類のテストを<strong>目的・負荷レベル・使用場面</strong>で区別できるようにしましょう。
                </p>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>テスト種類</th>
                                <th>目的</th>
                                <th>負荷レベル</th>
                                <th>使用場面の例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>負荷テスト</strong><br />Load Testing<span
                                        className="tag green"
                                        >最頻出</span
                                    >
                                </td>
                                <td>通常〜最大負荷での動作確認</td>
                                <td>通常〜最大</td>
                                <td>ECピーク時 1,000人同時購入で3秒以内に処理できるか</td>
                            </tr>
                            <tr>
                                <td><strong>ストレステスト</strong><br />Stress Testing</td>
                                <td>許容限界超での動作確認・破壊テスト</td>
                                <td>最大超</td>
                                <td>想定最大の2倍の負荷でも優雅に失敗するか</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>耐久テスト</strong><br />Endurance Testing<span
                                        className="tag cyan"
                                        >ソークテスト</span
                                    >
                                </td>
                                <td>長時間稼働でのメモリリーク等の検出</td>
                                <td>通常（長時間）</td>
                                <td>24時間連続稼働でメモリが増加し続けないか</td>
                            </tr>
                            <tr>
                                <td><strong>スパイクテスト</strong><br />Spike Testing</td>
                                <td>急激な負荷増加への対応力確認</td>
                                <td>急増・急減</td>
                                <td>SNS掲載後に50倍のトラフィックが急増した場合</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>スケーラビリティテスト</strong><br />Scalability Testing
                                </td>
                                <td>リソース追加時のスケール能力確認</td>
                                <td>段階的増加</td>
                                <td>サーバー2台→4台でスループットが2倍になるか</td>
                            </tr>
                            <tr>
                                <td><strong>同時実行テスト</strong><br />Concurrency Testing</td>
                                <td>競合条件・デッドロックの発見</td>
                                <td>多ユーザー同時アクセス</td>
                                <td>在庫1点を100人が同時購入した場合の整合性</td>
                            </tr>
                            <tr>
                                <td><strong>キャパシティテスト</strong><br />Capacity Testing</td>
                                <td>最大処理能力の特定</td>
                                <td>段階的に最大まで増加</td>
                                <td>このシステムが限界を超える前の最大ユーザー数は何人か</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/*  負荷テスト詳細  */}
                <h4>1.2.1 負荷テスト — 負荷プロファイルの図解</h4>
                <p>
                    負荷テストは
                    <strong>ランプアップ → 定常状態 → ランプダウン</strong>
                    の3フェーズで構成されます。
                </p>

                {/*  負荷プロファイル SVG図解  */}
                <figure
                    aria-label="負荷プロファイルの推移（ランプアップ、定常状態、ランプダウンの3フェーズ）"
                    style={{ margin: `1.5rem 0` }}
                >
                    <svg
                        viewBox="0 0 720 260"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        style={{ width: `100%`, maxWidth: `720px`, display: `block`, margin: `0 auto`, fontFamily: `'IBM Plex Sans JP', sans-serif` }}
                    >
                        <title>負荷テスト 負荷プロファイル図</title>
                        <desc>
                            ランプアップ（2分）・定常状態（30分）・ランプダウン（3分）の3フェーズで構成される負荷プロファイルの折れ線グラフ
                        </desc>
                        {/*  背景  */}
                        <rect
                            width="720"
                            height="260"
                            rx="12"
                            fill="#0f1a2e"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                        />
                        {/*  グリッド横線  */}
                        <line
                            x1="60"
                            y1="30"
                            x2="660"
                            y2="30"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                        />
                        <line
                            x1="60"
                            y1="70"
                            x2="660"
                            y2="70"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                        />
                        <line
                            x1="60"
                            y1="110"
                            x2="660"
                            y2="110"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                        />
                        <line
                            x1="60"
                            y1="150"
                            x2="660"
                            y2="150"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                        />
                        <line
                            x1="60"
                            y1="190"
                            x2="660"
                            y2="190"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                        />
                        {/*  軸  */}
                        <line
                            x1="60"
                            y1="190"
                            x2="660"
                            y2="190"
                            stroke="#445577"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="60"
                            y1="30"
                            x2="60"
                            y2="195"
                            stroke="#445577"
                            strokeWidth="1.5"
                        />
                        {/*  Y軸ラベル  */}
                        <text x="55" y="34" textAnchor="end" fill="#8899bb" fontSize="16">
                            1000
                        </text>
                        <text x="55" y="74" textAnchor="end" fill="#8899bb" fontSize="16">
                            750
                        </text>
                        <text x="55" y="114" textAnchor="end" fill="#8899bb" fontSize="16">
                            500
                        </text>
                        <text x="55" y="154" textAnchor="end" fill="#8899bb" fontSize="16">
                            250
                        </text>
                        <text x="55" y="194" textAnchor="end" fill="#8899bb" fontSize="16">
                            0
                        </text>
                        <text
                            x="14"
                            y="120"
                            textAnchor="middle"
                            fill="#8899bb"
                            fontSize="16"
                            transform="rotate(-90,14,120)"
                        >
                            ユーザー数（VU）
                        </text>
                        {/*  フェーズ背景  */}
                        <rect
                            x="60"
                            y="30"
                            width="150"
                            height="160"
                            fill="rgba(0,212,255,0.05)"
                            rx="0"
                        />
                        <rect
                            x="210"
                            y="30"
                            width="330"
                            height="160"
                            fill="rgba(0,255,136,0.05)"
                            rx="0"
                        />
                        <rect
                            x="540"
                            y="30"
                            width="120"
                            height="160"
                            fill="rgba(255,170,0,0.05)"
                            rx="0"
                        />
                        {/*  折れ線（負荷プロファイル）  */}
                        <polyline
                            points="60,190 210,30 540,30 660,190"
                            fill="none"
                            stroke="#00ff88"
                            strokeWidth="3"
                            strokeLinejoin="round"
                        />
                        {/*  塗りつぶし面積  */}
                        <polygon
                            points="60,190 210,30 540,30 660,190"
                            fill="rgba(0,255,136,0.12)"
                        />
                        {/*  フェーズ区切り縦線  */}
                        <line
                            x1="210"
                            y1="30"
                            x2="210"
                            y2="195"
                            stroke="#00d4ff"
                            strokeWidth="1"
                            strokeDasharray="6,3"
                        />
                        <line
                            x1="540"
                            y1="30"
                            x2="540"
                            y2="195"
                            stroke="#ffaa00"
                            strokeWidth="1"
                            strokeDasharray="6,3"
                        />
                        {/*  フェーズラベル  */}
                        <text
                            x="130"
                            y="218"
                            textAnchor="middle"
                            fill="#00d4ff"
                            fontSize="16"
                            fontWeight="600"
                        >
                            ランプアップ
                        </text>
                        <text x="130" y="234" textAnchor="middle" fill="#8899bb" fontSize="16">
                            （2分）
                        </text>
                        <text
                            x="375"
                            y="218"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="600"
                        >
                            定常状態
                        </text>
                        <text x="375" y="234" textAnchor="middle" fill="#8899bb" fontSize="16">
                            （30分）
                        </text>
                        <text
                            x="600"
                            y="218"
                            textAnchor="middle"
                            fill="#ffaa00"
                            fontSize="16"
                            fontWeight="600"
                        >
                            ランプダウン
                        </text>
                        <text x="600" y="234" textAnchor="middle" fill="#8899bb" fontSize="16">
                            （3分）
                        </text>
                        {/*  ピーク注釈  */}
                        <circle cx="210" cy="30" r="5" fill="#00ff88" />
                        <circle cx="540" cy="30" r="5" fill="#00ff88" />
                        <text
                            x="375"
                            y="22"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="600"
                        >
                            1000 VU（ピーク）
                        </text>
                        {/*  タイトル  */}
                        <text x="360" y="255" textAnchor="middle" fill="#445577" fontSize="16">
                            → 時間
                        </text>
                    </svg>
                    <figcaption
                        style={{ textAlign: `center`, fontSize: `1rem`, color: `#8899bb`, marginTop: `0.5rem` }}
                    >
                        図1: 負荷テストの3フェーズ —
                        ランプアップで徐々に負荷を増やし、定常状態で維持、ランプダウンで減らす
                    </figcaption>
                </figure>

                {/*  ストレステスト詳細  */}
                <h4>1.2.2 ストレステスト — 優雅な劣化（Graceful Degradation）</h4>

                <div className="compare-grid">
                    <div className="compare-card good">
                        <div className="compare-label">✅ 良い例 — 優雅な劣化</div>
                        <ul style={{ listStyle: `none`, padding: `0`, fontSize: `1rem` }}>
                            <li style={{ color: `var(--color-text-secondary)`, marginBottom: `0.4rem` }}>
                                🔺 負荷増加 → 応答時間が延びるが機能は維持
                            </li>
                            <li style={{ color: `var(--color-text-secondary)`, marginBottom: `0.4rem` }}>
                                🔺 限界超過でも明確なエラーメッセージ表示
                            </li>
                            <li style={{ color: `var(--color-text-secondary)` }}>
                                🔻 負荷減少後に正常に自動回復
                            </li>
                        </ul>
                    </div>
                    <div className="compare-card bad">
                        <div className="compare-label">❌ 悪い例 — 壊滅的失敗</div>
                        <ul style={{ listStyle: `none`, padding: `0`, fontSize: `1rem` }}>
                            <li style={{ color: `var(--color-text-muted)`, marginBottom: `0.4rem` }}>
                                💥 負荷増加でシステムが突然クラッシュ
                            </li>
                            <li style={{ color: `var(--color-text-muted)`, marginBottom: `0.4rem` }}>
                                💥 データ破損・消失が発生
                            </li>
                            <li style={{ color: `var(--color-text-muted)` }}>
                                💥 手動再起動が必要（自動回復なし）
                            </li>
                        </ul>
                    </div>
                </div>

                {/*  耐久テスト詳細  */}
                <h4>1.2.3 耐久テスト — メモリリーク検出パターン</h4>

                {/*  メモリリーク検出パターン SVG図解  */}
                <figure
                    aria-label="メモリリークの検出パターンと正常パターンの比較グラフ"
                    style={{ margin: `1.5rem 0` }}
                >
                    <svg
                        viewBox="0 0 720 320"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        style={{ width: `100%`, maxWidth: `720px`, display: `block`, margin: `0 auto`, fontFamily: `'IBM Plex Sans JP', sans-serif` }}
                    >
                        <title>メモリリーク検出パターン 比較グラフ</title>
                        <desc>
                            左グラフ: メモリリークのある場合（使用量が右肩上がりに増加）、右グラフ:
                            正常なGC動作（使用量が上下しながら平均値が安定）
                        </desc>
                        {/*  背景  */}
                        <rect
                            width="720"
                            height="320"
                            rx="12"
                            fill="#0f1a2e"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                        />
                        {/*  タイトル  */}
                        <text
                            x="360"
                            y="22"
                            textAnchor="middle"
                            fill="#e8f0fe"
                            fontSize="16"
                            fontWeight="600"
                        >
                            メモリリーク検出パターン（耐久テスト）
                        </text>

                        {/*  ===== 左グラフ: リークあり =====  */}
                        <rect
                            x="16"
                            y="35"
                            width="330"
                            height="200"
                            rx="8"
                            fill="rgba(255,68,102,0.06)"
                            stroke="rgba(255,68,102,0.3)"
                            strokeWidth="1"
                        />
                        <text
                            x="181"
                            y="53"
                            textAnchor="middle"
                            fill="#ff4466"
                            fontSize="16"
                            fontWeight="700"
                        >
                            ❌ メモリリークあり（問題）
                        </text>
                        {/*  左グリッド  */}
                        <line
                            x1="56"
                            y1="63"
                            x2="336"
                            y2="63"
                            stroke="#1e2d4a"
                            strokeDasharray="3,3"
                            strokeWidth="1"
                        />
                        <line
                            x1="56"
                            y1="93"
                            x2="336"
                            y2="93"
                            stroke="#1e2d4a"
                            strokeDasharray="3,3"
                            strokeWidth="1"
                        />
                        <line
                            x1="56"
                            y1="123"
                            x2="336"
                            y2="123"
                            stroke="#1e2d4a"
                            strokeDasharray="3,3"
                            strokeWidth="1"
                        />
                        <line
                            x1="56"
                            y1="153"
                            x2="336"
                            y2="153"
                            stroke="#1e2d4a"
                            strokeDasharray="3,3"
                            strokeWidth="1"
                        />
                        <line
                            x1="56"
                            y1="183"
                            x2="336"
                            y2="183"
                            stroke="#1e2d4a"
                            strokeDasharray="3,3"
                            strokeWidth="1"
                        />
                        {/*  左軸  */}
                        <line
                            x1="56"
                            y1="63"
                            x2="56"
                            y2="218"
                            stroke="#445577"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="56"
                            y1="218"
                            x2="336"
                            y2="218"
                            stroke="#445577"
                            strokeWidth="1.5"
                        />
                        {/*  左Y軸ラベル  */}
                        <text x="52" y="67" textAnchor="end" fill="#8899bb" fontSize="16">
                            2048
                        </text>
                        <text x="52" y="97" textAnchor="end" fill="#8899bb" fontSize="16">
                            1536
                        </text>
                        <text x="52" y="127" textAnchor="end" fill="#8899bb" fontSize="16">
                            1024
                        </text>
                        <text x="52" y="157" textAnchor="end" fill="#8899bb" fontSize="16">
                            512
                        </text>
                        <text x="52" y="187" textAnchor="end" fill="#8899bb" fontSize="16">
                            0
                        </text>
                        {/*  リークライン（右肩上がり）  */}
                        <polyline
                            points="66,213 100,210 150,200 200,183 250,153 300,100 330,63"
                            fill="none"
                            stroke="#ff4466"
                            strokeWidth="2.5"
                            strokeLinejoin="round"
                        />
                        <polygon
                            points="66,218 66,213 100,210 150,200 200,183 250,153 300,100 330,63 330,218"
                            fill="rgba(255,68,102,0.15)"
                        />
                        {/*  ラベル  */}
                        <text x="70" y="210" fill="#8899bb" fontSize="16">テスト開始</text>
                        <text x="290" y="58" fill="#ff4466" fontSize="16" fontWeight="600">
                            ↑ 増加中！
                        </text>
                        <text x="181" y="242" textAnchor="middle" fill="#8899bb" fontSize="16">
                            時間 →（24時間）
                        </text>

                        {/*  ===== 右グラフ: 正常 =====  */}
                        <rect
                            x="374"
                            y="35"
                            width="330"
                            height="200"
                            rx="8"
                            fill="rgba(0,255,136,0.06)"
                            stroke="rgba(0,255,136,0.3)"
                            strokeWidth="1"
                        />
                        <text
                            x="539"
                            y="53"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="700"
                        >
                            ✅ 正常（GCにより安定）
                        </text>
                        {/*  右グリッド  */}
                        <line
                            x1="414"
                            y1="83"
                            x2="694"
                            y2="83"
                            stroke="#1e2d4a"
                            strokeDasharray="3,3"
                            strokeWidth="1"
                        />
                        <line
                            x1="414"
                            y1="113"
                            x2="694"
                            y2="113"
                            stroke="#1e2d4a"
                            strokeDasharray="3,3"
                            strokeWidth="1"
                        />
                        <line
                            x1="414"
                            y1="143"
                            x2="694"
                            y2="143"
                            stroke="#1e2d4a"
                            strokeDasharray="3,3"
                            strokeWidth="1"
                        />
                        <line
                            x1="414"
                            y1="173"
                            x2="694"
                            y2="173"
                            stroke="#1e2d4a"
                            strokeDasharray="3,3"
                            strokeWidth="1"
                        />
                        {/*  右軸  */}
                        <line
                            x1="414"
                            y1="63"
                            x2="414"
                            y2="218"
                            stroke="#445577"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="414"
                            y1="218"
                            x2="694"
                            y2="218"
                            stroke="#445577"
                            strokeWidth="1.5"
                        />
                        {/*  右Y軸ラベル  */}
                        <text x="410" y="87" textAnchor="end" fill="#8899bb" fontSize="16">
                            600
                        </text>
                        <text x="410" y="117" textAnchor="end" fill="#8899bb" fontSize="16">
                            500
                        </text>
                        <text x="410" y="147" textAnchor="end" fill="#8899bb" fontSize="16">
                            400
                        </text>
                        <text x="410" y="177" textAnchor="end" fill="#8899bb" fontSize="16">
                            300
                        </text>
                        {/*  正常ライン（ジグザグで平均安定）  */}
                        <polyline
                            points="424,143 449,103 474,143 499,103 524,143 549,103 574,143 599,103 624,143 649,103 674,143"
                            fill="none"
                            stroke="#00ff88"
                            strokeWidth="2.5"
                            strokeLinejoin="round"
                        />
                        <polygon
                            points="424,218 424,143 449,103 474,143 499,103 524,143 549,103 574,143 599,103 624,143 649,103 674,143 674,218"
                            fill="rgba(0,255,136,0.1)"
                        />
                        {/*  平均ライン  */}
                        <line
                            x1="424"
                            y1="123"
                            x2="674"
                            y2="123"
                            stroke="#00d4ff"
                            strokeWidth="1.5"
                            strokeDasharray="6,3"
                        />
                        <text x="676" y="127" fill="#00d4ff" fontSize="16">平均</text>
                        <text x="539" y="242" textAnchor="middle" fill="#8899bb" fontSize="16">
                            時間 →（24時間）
                        </text>

                        {/*  凡例  */}
                        <text x="360" y="302" textAnchor="middle" fill="#ff4466" fontSize="16">
                            ● リークあり: 使用量が単調増加 → OOMエラーの危険
                        </text>
                        <text x="360" y="316" textAnchor="middle" fill="#00ff88" fontSize="16">
                            ● 正常: GCで解放され、平均値が安定している
                        </text>
                    </svg>
                    <figcaption
                        style={{ textAlign: `center`, fontSize: `1rem`, color: `#8899bb`, marginTop: `0.5rem` }}
                    >
                        図2: 耐久テストでのメモリ使用量パターン比較 —
                        右肩上がりのグラフはメモリリークを示す
                    </figcaption>
                </figure>

                <div className="section-divider"></div>

                {/*  1.3 負荷生成  */}
                <h3>1.3 負荷生成の概念（Load Generation）— 試験頻出！</h3>
                <p>
                    負荷生成は <strong>APIレベル（プロトコルレベル）</strong> と
                    <strong>UIレベル（ブラウザレベル）</strong> の2種類があります。
                </p>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>観点</th>
                                <th>APIレベル（プロトコルレベル）</th>
                                <th>UIレベル（ブラウザレベル）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>処理速度</td>
                                <td><strong>高速・軽量</strong></td>
                                <td>低速・重い</td>
                            </tr>
                            <tr>
                                <td>スケール</td>
                                <td>1台で数百〜数千VU生成可能</td>
                                <td>1台で数十VUが限界</td>
                            </tr>
                            <tr>
                                <td>カバー範囲</td>
                                <td>バックエンド・APIの問題を特定</td>
                                <td>フロントエンド含むE2Eをテスト</td>
                            </tr>
                            <tr>
                                <td>JS実行</td>
                                <td>なし</td>
                                <td>あり（ブラウザが処理）</td>
                            </tr>
                            <tr>
                                <td>代表ツール</td>
                                <td>JMeter・k6・Gatling・Locust</td>
                                <td>Selenium Grid・Playwright（負荷版）</td>
                            </tr>
                            <tr>
                                <td>用途</td>
                                <td>大規模負荷テスト（推奨）</td>
                                <td>リアルなユーザー体験の再現</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/*  思考時間  */}
                <h4>1.3.1 思考時間（Think Time）と仮想ユーザー</h4>

                <div className="alert amber">
                    <div className="alert-label">⚠️ 重要</div>
                    <strong>仮想ユーザー数（VU）≠ 同時接続数</strong
                    >。ページを「読んでいる」VUは接続していない。思考時間を省略すると、実際よりも非現実的に高い負荷がかかり、悲観的な結果になる。
                </div>

                <div className="compare-grid">
                    <div className="compare-card good">
                        <div className="compare-label">✅ 思考時間あり（現実的）</div>
                        <p style={{ fontSize: `1rem`, color: `var(--color-text-secondary)` }}>
                            ユーザーがフォームに30秒かけて入力 → 30秒おきに1リクエスト →
                            <strong>現実に近い負荷</strong>
                        </p>
                    </div>
                    <div className="compare-card bad">
                        <div className="compare-label">❌ 思考時間なし（非現実的）</div>
                        <p style={{ fontSize: `1rem`, color: `var(--color-text-muted)` }}>
                            思考時間0秒 → 0.1秒おきにリクエスト →
                            <strong>実際の300倍の高頻度</strong>で非現実的な高負荷
                        </p>
                    </div>
                </div>

                <div className="section-divider"></div>

                {/*  1.4 オペレーショナルプロファイル  */}
                <h3>1.4 オペレーショナルプロファイル（Operational Profile）</h3>
                <p>
                    実際のユーザーがシステムをどのように使うかの統計的分布。現実に近い負荷シナリオを設計するために使用します。
                </p>

                {/*  オペレーショナルプロファイル SVG横棒グラフ  */}
                <figure
                    aria-label="ECサイトのオペレーショナルプロファイル — ユーザー行動割合の横棒グラフ"
                    style={{ margin: `1.5rem 0` }}
                >
                    <svg
                        viewBox="0 0 720 310"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        style={{ width: `100%`, maxWidth: `720px`, display: `block`, margin: `0 auto`, fontFamily: `'IBM Plex Sans JP', sans-serif` }}
                    >
                        <title>ECサイト オペレーショナルプロファイル 横棒グラフ</title>
                        <desc>
                            トップページ閲覧100%から購入完了10%まで、ユーザー行動の発生割合をファネル形式で示す横棒グラフ
                        </desc>
                        <rect
                            width="720"
                            height="310"
                            rx="12"
                            fill="#0f1a2e"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                        />
                        <text
                            x="360"
                            y="24"
                            textAnchor="middle"
                            fill="#e8f0fe"
                            fontSize="16"
                            fontWeight="600"
                        >
                            ECサイト — オペレーショナルプロファイル（ユーザー行動の現実的な割合）
                        </text>
                        {/*  ヘッダ行  */}
                        <text x="180" y="44" textAnchor="end" fill="#8899bb" fontSize="16">
                            ユーザー行動
                        </text>
                        <text x="480" y="44" textAnchor="middle" fill="#8899bb" fontSize="16">
                            割合（全ユーザーを100%として）
                        </text>
                        <text x="700" y="44" textAnchor="end" fill="#8899bb" fontSize="16">
                            注目メトリクス
                        </text>
                        {/*  行1: トップページ閲覧 100%  */}
                        <rect
                            x="190"
                            y="50"
                            width="480"
                            height="28"
                            rx="4"
                            fill="rgba(0,255,136,0.2)"
                            stroke="rgba(0,255,136,0.5)"
                            strokeWidth="1"
                        />
                        <text x="185" y="69" textAnchor="end" fill="#e8f0fe" fontSize="16">
                            トップページ閲覧
                        </text>
                        <text
                            x="378"
                            y="69"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="700"
                        >
                            100%
                        </text>
                        <text x="676" y="69" textAnchor="end" fill="#8899bb" fontSize="16">
                            ページロード時間
                        </text>
                        {/*  行2: 商品検索 80%  */}
                        <rect
                            x="190"
                            y="86"
                            width="384"
                            height="28"
                            rx="4"
                            fill="rgba(0,212,255,0.18)"
                            stroke="rgba(0,212,255,0.4)"
                            strokeWidth="1"
                        />
                        <text x="185" y="105" textAnchor="end" fill="#e8f0fe" fontSize="16">
                            商品検索
                        </text>
                        <text
                            x="382"
                            y="105"
                            textAnchor="middle"
                            fill="#00d4ff"
                            fontSize="16"
                            fontWeight="700"
                        >
                            80%
                        </text>
                        <text x="676" y="105" textAnchor="end" fill="#8899bb" fontSize="16">
                            検索レスポンス時間
                        </text>
                        {/*  行3: 商品詳細閲覧 60%  */}
                        <rect
                            x="190"
                            y="122"
                            width="288"
                            height="28"
                            rx="4"
                            fill="rgba(0,212,255,0.14)"
                            stroke="rgba(0,212,255,0.3)"
                            strokeWidth="1"
                        />
                        <text x="185" y="141" textAnchor="end" fill="#e8f0fe" fontSize="16">
                            商品詳細閲覧
                        </text>
                        <text
                            x="334"
                            y="141"
                            textAnchor="middle"
                            fill="#00d4ff"
                            fontSize="16"
                            fontWeight="700"
                        >
                            60%
                        </text>
                        <text x="676" y="141" textAnchor="end" fill="#8899bb" fontSize="16">
                            画像ロード時間
                        </text>
                        {/*  行4: カートに追加 30%  */}
                        <rect
                            x="190"
                            y="158"
                            width="144"
                            height="28"
                            rx="4"
                            fill="rgba(255,170,0,0.18)"
                            stroke="rgba(255,170,0,0.4)"
                            strokeWidth="1"
                        />
                        <text x="185" y="177" textAnchor="end" fill="#e8f0fe" fontSize="16">
                            カートに追加
                        </text>
                        <text
                            x="262"
                            y="177"
                            textAnchor="middle"
                            fill="#ffaa00"
                            fontSize="16"
                            fontWeight="700"
                        >
                            30%
                        </text>
                        <text x="676" y="177" textAnchor="end" fill="#8899bb" fontSize="16">
                            DB更新のレスポンス時間
                        </text>
                        {/*  行5: チェックアウト開始 15%  */}
                        <rect
                            x="190"
                            y="194"
                            width="72"
                            height="28"
                            rx="4"
                            fill="rgba(255,170,0,0.12)"
                            stroke="rgba(255,170,0,0.3)"
                            strokeWidth="1"
                        />
                        <text x="185" y="213" textAnchor="end" fill="#e8f0fe" fontSize="16">
                            チェックアウト開始
                        </text>
                        <text
                            x="226"
                            y="213"
                            textAnchor="middle"
                            fill="#ffaa00"
                            fontSize="16"
                            fontWeight="700"
                        >
                            15%
                        </text>
                        <text x="676" y="213" textAnchor="end" fill="#8899bb" fontSize="16">
                            セッション管理の応答
                        </text>
                        {/*  行6: 購入完了 10%  */}
                        <rect
                            x="190"
                            y="230"
                            width="48"
                            height="28"
                            rx="4"
                            fill="rgba(255,68,102,0.15)"
                            stroke="rgba(255,68,102,0.4)"
                            strokeWidth="1"
                        />
                        <text x="185" y="249" textAnchor="end" fill="#e8f0fe" fontSize="16">
                            購入完了
                        </text>
                        <text
                            x="214"
                            y="249"
                            textAnchor="middle"
                            fill="#ff4466"
                            fontSize="16"
                            fontWeight="700"
                        >
                            10%
                        </text>
                        <text x="676" y="249" textAnchor="end" fill="#8899bb" fontSize="16">
                            決済処理の完了時間
                        </text>
                        {/*  注釈  */}
                        <line
                            x1="16"
                            y1="270"
                            x2="704"
                            y2="270"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                        />
                        <text x="360" y="288" textAnchor="middle" fill="#ffaa00" fontSize="16">
                            ⚠️ 購入完了は全体の10%のみ — 決済だけをテストするのは非効率！
                        </text>
                        <text x="360" y="304" textAnchor="middle" fill="#00ff88" fontSize="16">
                            ✅ 現実の比率（オペレーショナルプロファイル）でシナリオを設計しよう
                        </text>
                    </svg>
                    <figcaption
                        style={{ textAlign: `center`, fontSize: `1rem`, color: `#8899bb`, marginTop: `0.5rem` }}
                    >
                        図3: ECサイトのオペレーショナルプロファイル —
                        バーが短いほどそのアクションを実行するユーザーが少ない
                    </figcaption>
                </figure>

                <div className="section-divider"></div>

                {/*  1.5 ボトルネック  */}
                <h3>1.5 パフォーマンス効率性の障害モードと原因</h3>

                <div className="arch-layers">
                    <div className="arch-row red">
                        <div className="arch-label">🌐 ネットワーク</div>
                        <div className="arch-content">
                            症状: 応答遅延・パケットロス。原因: 帯域幅不足・高レイテンシ。対策:
                            CDN・圧縮・Keep-Alive
                        </div>
                    </div>
                    <div className="arch-row amber">
                        <div className="arch-label">🖥️ CPU</div>
                        <div className="arch-content">
                            症状: 使用率90%超・応答時間急増。原因:
                            非効率なアルゴリズム・無限ループ。対策: コード最適化・スケールアウト
                        </div>
                    </div>
                    <div className="arch-row cyan">
                        <div className="arch-label">💾 メモリ</div>
                        <div className="arch-content">
                            症状: 使用量が徐々に増加・スワップ多用。原因:
                            メモリリーク・不適切なキャッシュ。対策: プロファイリングで特定
                        </div>
                    </div>
                    <div className="arch-row purple">
                        <div className="arch-label">🗄️ データベース</div>
                        <div className="arch-content">
                            症状: DBのCPU/IO高負荷・タイムアウト。原因:
                            インデックス不足・N+1問題・ロック競合。対策:
                            クエリ最適化・コネクションプール
                        </div>
                    </div>
                    <div className="arch-row green">
                        <div className="arch-label">💿 ストレージ</div>
                        <div className="arch-content">
                            症状: ディスクI/O高負荷・ファイル操作が遅い。原因:
                            HDDの遅さ・大量ログ書き込み。対策: SSD化・I/Oプロファイリング
                        </div>
                    </div>
                </div>

                <div className="callout warning">
                    <div className="callout-title">⚠️ ボトルネック特定の手順</div>
                    <ol style={{ color: `var(--color-text-secondary)`, fontSize: `1rem` }}>
                        <li><strong>症状確認</strong>: 応答時間遅延・エラー率増加</li>
                        <li>
                            <strong>リソース確認</strong>: CPU・メモリ・ネットワーク・DBの使用率
                        </li>
                        <li><strong>最高使用率リソースを特定</strong></li>
                        <li><strong>詳細分析</strong>: DBなら遅いクエリを特定</li>
                        <li><strong>改善して再テスト</strong>: 改善前後を比較検証</li>
                    </ol>
                </div>
            </div>
        </section>

        {/*  ===== CHAPTER 2 =====  */}
        <section
            id="ch2"
            style={{ background: `linear-gradient(
                    180deg,
                    rgba(0, 212, 255, 0.02) 0%,
                    var(--color-bg-primary) 100%
                )` }}
        >
            <div className="container">
                <div className="chapter-num">CHAPTER 02 <span className="klevel">K1 / K2 / K3</span></div>
                <div className="section-header">
                    <span className="section-icon">📊</span>
                    <div>
                        <h2>パフォーマンス測定の基礎（Measurement Fundamentals）</h2>
                        <p>正しいメトリクスの選択・収集・集計と、パーセンタイルの理解が鍵です。</p>
                    </div>
                </div>

                {/*  2.1 GQM  */}
                <h3>2.1 GQMアプローチ（Goal-Question-Metric）</h3>
                <p>意味のあるメトリクスのみを収集するためのフレームワーク。</p>

                <div className="arch-layers">
                    <div className="arch-row green">
                        <div className="arch-label">G — Goal（目標）</div>
                        <div className="arch-content">
                            「チェックアウト処理のユーザー体験を改善する」— 何を達成したいか
                        </div>
                    </div>
                    <div className="arch-row cyan">
                        <div className="arch-label">Q — Question（質問）</div>
                        <div className="arch-content">
                            「チェックアウトにどれくらい時間がかかっているか？」—
                            目標から導かれる問い
                        </div>
                    </div>
                    <div className="arch-row amber">
                        <div className="arch-label">M — Metric（メトリクス）</div>
                        <div className="arch-content">
                            「チェックアウトのエンドツーエンド応答時間（P90・P99）」— 測定可能な数値
                        </div>
                    </div>
                </div>

                <div className="alert green">
                    <div className="alert-label">✅ GQMのメリット</div>
                    目標と直結したメトリクスのみに集中でき、「データの洪水」を防げる。ステークホルダーへの説明も簡潔になる。
                </div>

                <div className="section-divider"></div>

                {/*  2.2 主要メトリクス  */}
                <h3>2.2 主要なパフォーマンスメトリクス一覧</h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>カテゴリ</th>
                                <th>メトリクス名</th>
                                <th>定義</th>
                                <th>単位・目標例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={4}><strong>応答時間</strong></td>
                                <td><strong>レスポンスタイム</strong></td>
                                <td>リクエスト送信〜全レスポンス受信まで</td>
                                <td>ms / 秒 — 例: P90 &lt; 3秒</td>
                            </tr>
                            <tr>
                                <td><strong>レイテンシ</strong></td>
                                <td>ネットワーク上の遅延時間（往復）</td>
                                <td>ms — 例: &lt; 50ms</td>
                            </tr>
                            <tr>
                                <td><strong>TTFB</strong></td>
                                <td>Time to First Byte — サーバーが最初のバイトを返すまで</td>
                                <td>ms — 例: &lt; 200ms</td>
                            </tr>
                            <tr>
                                <td><strong>ページロード時間</strong></td>
                                <td>全リソース（HTML・CSS・JS・画像）の読み込み完了まで</td>
                                <td>秒 — 例: &lt; 2秒</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}><strong>スループット</strong></td>
                                <td><strong>TPS / RPS</strong></td>
                                <td>1秒あたりに処理できるトランザクション/リクエスト数</td>
                                <td>TPS — 例: &gt; 150 TPS</td>
                            </tr>
                            <tr>
                                <td><strong>ヒット率</strong></td>
                                <td>単位時間のサーバーへのアクセス数</td>
                                <td>req/hour</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}><strong>エラー</strong></td>
                                <td><strong>エラー率</strong></td>
                                <td>全リクエストに対するエラーレスポンスの割合</td>
                                <td>% — 例: &lt; 1%</td>
                            </tr>
                            <tr>
                                <td><strong>HTTPエラー別</strong></td>
                                <td>4xx（クライアントエラー）・5xx（サーバーエラー）の内訳</td>
                                <td>件数・%</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}><strong>リソース</strong></td>
                                <td><strong>CPU使用率</strong></td>
                                <td>サーバーのCPU消費量</td>
                                <td>% — 例: 通常 &lt; 70%・ピーク &lt; 85%</td>
                            </tr>
                            <tr>
                                <td><strong>メモリ使用率</strong></td>
                                <td>RAMの消費量（増加トレンドに注意）</td>
                                <td>GB / % — リークは単調増加</td>
                            </tr>
                            <tr>
                                <td><strong>ネットワーク帯域</strong></td>
                                <td>ネットワーク使用帯域幅</td>
                                <td>Mbps / %</td>
                            </tr>
                            <tr>
                                <td><strong>ディスクI/O</strong></td>
                                <td>ストレージ読み書き速度</td>
                                <td>MB/s — IOPSも重要</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-divider"></div>

                {/*  2.3 パーセンタイル  */}
                <h3>2.3 パーセンタイル（Percentile）— 試験最頻出！</h3>
                <p>
                    <strong>平均値だけでは不十分です。</strong>
                    一部の極端に遅いリクエスト（外れ値）が平均を歪め、実態を隠します。
                    パーセンタイルを使うと全ユーザーの体験を正確に把握できます。
                </p>

                {/*  prettier-ignore  */}
                <pre className="code-block" data-lang="Python" dangerouslySetInnerHTML={{ __html: `<span className="code-comment"># なぜ平均値だけでは不十分か — 実例で理解する</span>

sample_times = [
    <span className="code-number">0.5</span>, <span className="code-number">0.6</span>, <span className="code-number">0.5</span>, <span className="code-number">0.7</span>, <span className="code-number">0.6</span>, <span className="code-comment"># 通常ユーザー</span>
    <span className="code-number">0.5</span>, <span className="code-number">0.6</span>, <span className="code-number">0.5</span>, <span className="code-number">0.7</span>, <span className="code-number">0.5</span>, <span className="code-comment"># 通常ユーザー</span>
    <span className="code-number">0.6</span>, <span className="code-number">0.5</span>, <span className="code-number">0.5</span>, <span className="code-number">0.6</span>, <span className="code-number">0.7</span>, <span className="code-comment"># 通常ユーザー</span>
    <span className="code-number">12.5</span>, <span className="code-number">18.3</span>, <span className="code-number">15.2</span>           <span className="code-comment"># 一部の遅いリクエスト（問題あり！）</span>
]

<span className="code-comment"># 平均値の罠</span>
average = <span className="code-number">2.6</span> <span className="code-comment"># 秒 → 「まあ速い」と誤認してしまう</span>

<span className="code-comment"># パーセンタイルで正確に把握</span>
P50 = <span className="code-number">0.6</span>  <span className="code-comment"># 50%のユーザーは 0.6秒以内</span>
P90 = <span className="code-number">0.7</span>  <span className="code-comment"># 90%のユーザーは 0.7秒以内</span>
P95 = <span className="code-number">12.5</span> <span className="code-comment"># 95%のユーザーは 12.5秒以内 ← 問題発覚！</span>
P99 = <span className="code-number">18.3</span> <span className="code-comment"># 99%のユーザーは 18.3秒以内 ← 深刻な問題！</span>` }}></pre>

                <div className="metric-grid">
                    <div className="metric-card green">
                        <div className="metric-value">P50</div>
                        <div className="metric-label">
                            中央値。外れ値の影響を受けない「典型的」な体験
                        </div>
                    </div>
                    <div className="metric-card cyan">
                        <div className="metric-value">P90</div>
                        <div className="metric-label">SLAで最もよく使われる。90%のユーザーの体験</div>
                    </div>
                    <div className="metric-card amber">
                        <div className="metric-value">P95</div>
                        <div className="metric-label">上位5%の遅いユーザーに対する体験</div>
                    </div>
                    <div className="metric-card red">
                        <div className="metric-value">P99</div>
                        <div className="metric-label">最も遅い1%のユーザー体験。問題の深刻さを示す</div>
                    </div>
                </div>

                <div className="callout info">
                    <div className="callout-title">ℹ️ SLAでの使用例</div>
                    「<strong>P90レスポンスタイムが2秒以内であること</strong>」 =
                    全リクエストの90%が2秒以内に完了すること。P99が悪くてもSLA違反にはならない（SLAの定義による）。
                </div>

                <div className="section-divider"></div>

                {/*  2.4 メトリクス収集源  */}
                <h3>2.4 パフォーマンスメトリクスの主要収集源</h3>

                <div className="arch-layers">
                    <div className="arch-row green">
                        <div className="arch-label">① クライアント</div>
                        <div className="arch-content">
                            ページロード・レンダリング時間・JS実行時間。ツール: Chrome
                            DevTools・Lighthouse・Web Vitals
                        </div>
                    </div>
                    <div className="arch-row cyan">
                        <div className="arch-label">② ロードジェネレーター</div>
                        <div className="arch-content">
                            リクエスト数・レスポンスタイム・エラー率・TPS。ツール:
                            JMeter・k6・Gatling のレポート
                        </div>
                    </div>
                    <div className="arch-row amber">
                        <div className="arch-label">③ APM（アプリ）</div>
                        <div className="arch-content">
                            トランザクション別応答時間・コードレベルのボトルネック。ツール: New
                            Relic・Datadog APM・Dynatrace
                        </div>
                    </div>
                    <div className="arch-row purple">
                        <div className="arch-label">④ データベース</div>
                        <div className="arch-content">
                            クエリ実行時間・接続数・ロック待機。ツール: Slow Query
                            Log・pg_stat_statements・EXPLAIN ANALYZE
                        </div>
                    </div>
                    <div className="arch-row red">
                        <div className="arch-label">⑤ インフラ</div>
                        <div className="arch-content">
                            CPU・メモリ・ネットワーク・ディスクI/O。ツール: Prometheus+Grafana・AWS
                            CloudWatch
                        </div>
                    </div>
                </div>

                <div className="alert cyan">
                    <div className="alert-label">🔑 重要な原則</div>
                    <strong>単一のメトリクスソースだけでは不十分。</strong
                    >エンドツーエンドで複数のソースを組み合わせて、ボトルネックの原因を正確に特定する。
                </div>

                {/*  出口基準レポート例  */}
                <div className="section-divider"></div>
                <h3>2.5 パフォーマンステスト結果の集計例</h3>

                {/*  SLA適合レポート SVG表  */}
                <figure
                    aria-label="SLA適合レポート — 合否判定の視覚的な表"
                    style={{ margin: `1.5rem 0` }}
                >
                    <svg
                        viewBox="0 0 720 260"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        style={{ width: `100%`, maxWidth: `720px`, display: `block`, margin: `0 auto`, fontFamily: `'IBM Plex Sans JP', sans-serif` }}
                    >
                        <title>SLA適合レポート 合否判定表</title>
                        <desc>
                            P90応答時間・P99応答時間・エラー率・同時ユーザー数・CPU使用率の5項目についてSLA要件と測定値を比較した合否判定表
                        </desc>
                        <rect
                            width="720"
                            height="260"
                            rx="12"
                            fill="#0f1a2e"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                        />
                        {/*  タイトル  */}
                        <text
                            x="360"
                            y="24"
                            textAnchor="middle"
                            fill="#e8f0fe"
                            fontSize="16"
                            fontWeight="600"
                        >
                            SLA適合レポート — 合否判定
                        </text>
                        {/*  ヘッダ行  */}
                        <rect x="16" y="34" width="688" height="28" rx="4" fill="#162035" />
                        <text
                            x="220"
                            y="52"
                            textAnchor="middle"
                            fill="#8899bb"
                            fontSize="16"
                            fontWeight="600"
                        >
                            要件（SLA）
                        </text>
                        <text
                            x="500"
                            y="52"
                            textAnchor="middle"
                            fill="#8899bb"
                            fontSize="16"
                            fontWeight="600"
                        >
                            測定値
                        </text>
                        <text
                            x="650"
                            y="52"
                            textAnchor="middle"
                            fill="#8899bb"
                            fontSize="16"
                            fontWeight="600"
                        >
                            合否
                        </text>
                        {/*  行1: P90 合格  */}
                        <rect
                            x="16"
                            y="66"
                            width="688"
                            height="32"
                            rx="0"
                            fill="rgba(0,255,136,0.05)"
                        />
                        <line x1="16" y1="98" x2="704" y2="98" stroke="#1e2d4a" strokeWidth="1" />
                        <text x="30" y="86" fill="#e8f0fe" fontSize="16">P90 応答時間 ≤ 3秒</text>
                        <text
                            x="500"
                            y="86"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="700"
                        >
                            2.3秒
                        </text>
                        <rect
                            x="612"
                            y="70"
                            width="80"
                            height="22"
                            rx="11"
                            fill="rgba(0,255,136,0.2)"
                            stroke="rgba(0,255,136,0.6)"
                            strokeWidth="1"
                        />
                        <text
                            x="652"
                            y="85"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="700"
                        >
                            ✅ 合格
                        </text>
                        {/*  行2: P99 不合格（強調）  */}
                        <rect
                            x="16"
                            y="98"
                            width="688"
                            height="32"
                            rx="0"
                            fill="rgba(255,68,102,0.08)"
                        />
                        <line
                            x1="16"
                            y1="130"
                            x2="704"
                            y2="130"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                        />
                        <text x="30" y="118" fill="#ff4466" fontSize="16" fontWeight="600">
                            P99 応答時間 ≤ 5秒
                        </text>
                        <text
                            x="500"
                            y="118"
                            textAnchor="middle"
                            fill="#ff4466"
                            fontSize="16"
                            fontWeight="700"
                        >
                            5.8秒 ⚠️
                        </text>
                        <rect
                            x="612"
                            y="102"
                            width="80"
                            height="22"
                            rx="11"
                            fill="rgba(255,68,102,0.2)"
                            stroke="rgba(255,68,102,0.6)"
                            strokeWidth="1"
                        />
                        <text
                            x="652"
                            y="117"
                            textAnchor="middle"
                            fill="#ff4466"
                            fontSize="16"
                            fontWeight="700"
                        >
                            ❌ 不合格
                        </text>
                        {/*  行3: エラー率 合格  */}
                        <rect
                            x="16"
                            y="130"
                            width="688"
                            height="32"
                            rx="0"
                            fill="rgba(0,255,136,0.05)"
                        />
                        <line
                            x1="16"
                            y1="162"
                            x2="704"
                            y2="162"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                        />
                        <text x="30" y="150" fill="#e8f0fe" fontSize="16">エラー率 ≤ 0.5%</text>
                        <text
                            x="500"
                            y="150"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="700"
                        >
                            0.3%
                        </text>
                        <rect
                            x="612"
                            y="134"
                            width="80"
                            height="22"
                            rx="11"
                            fill="rgba(0,255,136,0.2)"
                            stroke="rgba(0,255,136,0.6)"
                            strokeWidth="1"
                        />
                        <text
                            x="652"
                            y="149"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="700"
                        >
                            ✅ 合格
                        </text>
                        {/*  行4: 同時ユーザー 合格  */}
                        <rect
                            x="16"
                            y="162"
                            width="688"
                            height="32"
                            rx="0"
                            fill="rgba(0,255,136,0.05)"
                        />
                        <line
                            x1="16"
                            y1="194"
                            x2="704"
                            y2="194"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                        />
                        <text x="30" y="182" fill="#e8f0fe" fontSize="16">
                            同時ユーザー 500人対応
                        </text>
                        <text
                            x="500"
                            y="182"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="700"
                        >
                            500人
                        </text>
                        <rect
                            x="612"
                            y="166"
                            width="80"
                            height="22"
                            rx="11"
                            fill="rgba(0,255,136,0.2)"
                            stroke="rgba(0,255,136,0.6)"
                            strokeWidth="1"
                        />
                        <text
                            x="652"
                            y="181"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="700"
                        >
                            ✅ 合格
                        </text>
                        {/*  行5: CPU 合格  */}
                        <rect
                            x="16"
                            y="194"
                            width="688"
                            height="32"
                            rx="0"
                            fill="rgba(0,255,136,0.05)"
                        />
                        <text x="30" y="214" fill="#e8f0fe" fontSize="16">
                            CPU使用率 ≤ 80%（ピーク時）
                        </text>
                        <text
                            x="500"
                            y="214"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="700"
                        >
                            75%
                        </text>
                        <rect
                            x="612"
                            y="198"
                            width="80"
                            height="22"
                            rx="11"
                            fill="rgba(0,255,136,0.2)"
                            stroke="rgba(0,255,136,0.6)"
                            strokeWidth="1"
                        />
                        <text
                            x="652"
                            y="213"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="700"
                        >
                            ✅ 合格
                        </text>
                        {/*  枠線  */}
                        <rect
                            x="16"
                            y="34"
                            width="688"
                            height="192"
                            rx="0"
                            fill="none"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                        />
                        {/*  縦線  */}
                        <line
                            x1="380"
                            y1="34"
                            x2="380"
                            y2="226"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                        />
                        <line
                            x1="604"
                            y1="34"
                            x2="604"
                            y2="226"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                        />
                        {/*  注釈  */}
                        <text x="360" y="248" textAnchor="middle" fill="#ff4466" fontSize="16">
                            → P99のみ5秒超 — 決済処理のボトルネック調査が必要
                        </text>
                    </svg>
                    <figcaption
                        style={{ textAlign: `center`, fontSize: `1rem`, color: `#8899bb`, marginTop: `0.5rem` }}
                    >
                        図4: SLA適合レポートの合否判定 — 赤色の行（P99）のみ要件未達成
                    </figcaption>
                </figure>

                <h4>テスト種別のサマリー例</h4>
                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-label">ログイン — P90: 1.2s / SLA: 1.0s</span>
                        <span className="progress-val" style={{ color: `var(--color-accent-orange)` }}>SLA超過</span>
                    </div>
                    <div className="progress-track">
                        <div className="progress-bar amber" style={{ width: `85%` }}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-label">商品検索 — P90: 2.3s / SLA: 3.0s</span>
                        <span className="progress-val">✅ 合格</span>
                    </div>
                    <div className="progress-track">
                        <div className="progress-bar green" style={{ width: `60%` }}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-label">決済処理 — P99: 8.2s / SLA: 5.0s</span>
                        <span className="progress-val" style={{ color: `var(--color-accent-red)` }}>❌ 不合格</span>
                    </div>
                    <div className="progress-track">
                        <div className="progress-bar red" style={{ width: `95%` }}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-label">エラー率 — 0.3% / SLA: 1.0%以下</span>
                        <span className="progress-val">✅ 合格</span>
                    </div>
                    <div className="progress-track">
                        <div className="progress-bar cyan" style={{ width: `30%` }}></div>
                    </div>
                </div>
            </div>
        </section>

        {/*  ===== CHAPTER 3 =====  */}
        <section
            id="ch3"
            style={{ background: `linear-gradient(
                    180deg,
                    var(--color-bg-primary) 0%,
                    rgba(187, 102, 255, 0.02) 100%
                )` }}
        >
            <div className="container">
                <div className="chapter-num">CHAPTER 03 <span className="klevel">K2 / K3</span></div>
                <div className="section-header">
                    <span className="section-icon">🔄</span>
                    <div>
                        <h2>ソフトウェアライフサイクルとの統合</h2>
                        <p>
                            シフトレフトの考え方と、アーキテクチャ別のパフォーマンスリスクを理解します。
                        </p>
                    </div>
                </div>

                {/*  3.1 シフトレフト  */}
                <h3>3.1 シフトレフト（Shift Left Performance Testing）</h3>

                <figure
                    aria-label="シフトレフト比較図 — 従来アプローチとシフトレフトアプローチの修正コスト比較"
                    style={{ margin: `1.5rem 0` }}
                >
                    <svg
                        viewBox="0 0 720 340"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        style={{ width: `100%`, maxWidth: `720px`, display: `block`, margin: `0 auto`, fontFamily: `'IBM Plex Sans JP', sans-serif` }}
                    >
                        <title>シフトレフト比較図</title>
                        <desc>
                            左: 従来のアプローチ（テスト工程でのみ問題発見、修正コスト100倍）、右:
                            シフトレフトアプローチ（各工程で早期発見、修正コスト1倍）の比較図
                        </desc>
                        <rect
                            width="720"
                            height="340"
                            rx="12"
                            fill="#0f1a2e"
                            stroke="#1e2d4a"
                            strokeWidth="1"
                        />
                        <text
                            x="360"
                            y="22"
                            textAnchor="middle"
                            fill="#e8f0fe"
                            fontSize="16"
                            fontWeight="600"
                        >
                            シフトレフト（Shift Left）— パフォーマンステストを前工程へ移動
                        </text>

                        {/*  ===== 左パネル: 従来アプローチ =====  */}
                        <rect
                            x="16"
                            y="32"
                            width="330"
                            height="260"
                            rx="8"
                            fill="rgba(255,68,102,0.06)"
                            stroke="rgba(255,68,102,0.35)"
                            strokeWidth="1.5"
                        />
                        <text
                            x="181"
                            y="52"
                            textAnchor="middle"
                            fill="#ff4466"
                            fontSize="16"
                            fontWeight="700"
                        >
                            ❌ 従来アプローチ（問題あり）
                        </text>

                        {/*  フロー: 開発→開発→開発→テスト  */}
                        {/*  ボックス  */}
                        <rect
                            x="30"
                            y="64"
                            width="68"
                            height="36"
                            rx="6"
                            fill="#162035"
                            stroke="#445577"
                            strokeWidth="1"
                        />
                        <text x="64" y="86" textAnchor="middle" fill="#8899bb" fontSize="16">
                            開発
                        </text>
                        <rect
                            x="118"
                            y="64"
                            width="68"
                            height="36"
                            rx="6"
                            fill="#162035"
                            stroke="#445577"
                            strokeWidth="1"
                        />
                        <text x="152" y="86" textAnchor="middle" fill="#8899bb" fontSize="16">
                            開発
                        </text>
                        <rect
                            x="206"
                            y="64"
                            width="68"
                            height="36"
                            rx="6"
                            fill="#162035"
                            stroke="#445577"
                            strokeWidth="1"
                        />
                        <text x="240" y="86" textAnchor="middle" fill="#8899bb" fontSize="16">
                            開発
                        </text>
                        <rect
                            x="294"
                            y="64"
                            width="38"
                            height="36"
                            rx="6"
                            fill="rgba(255,68,102,0.2)"
                            stroke="rgba(255,68,102,0.6)"
                            strokeWidth="1.5"
                        />
                        <text x="313" y="86" textAnchor="middle" fill="#ff4466" fontSize="16">
                            PT
                        </text>
                        {/*  矢印  */}
                        <line
                            x1="98"
                            y1="82"
                            x2="118"
                            y2="82"
                            stroke="#445577"
                            strokeWidth="1.5"
                            markerEnd="url(#arrow-dim)"
                        />
                        <line
                            x1="186"
                            y1="82"
                            x2="206"
                            y2="82"
                            stroke="#445577"
                            strokeWidth="1.5"
                            markerEnd="url(#arrow-dim)"
                        />
                        <line
                            x1="274"
                            y1="82"
                            x2="294"
                            y2="82"
                            stroke="#ff4466"
                            strokeWidth="1.5"
                            markerEnd="url(#arrow-red)"
                        />
                        {/*  問題発生  */}
                        <text x="313" y="118" textAnchor="middle" fill="#ff4466" fontSize="20">
                            💥
                        </text>
                        <text x="313" y="136" textAnchor="middle" fill="#ff4466" fontSize="16">
                            問題発覚！
                        </text>
                        {/*  修正コスト説明  */}
                        <rect
                            x="30"
                            y="148"
                            width="302"
                            height="56"
                            rx="6"
                            fill="rgba(255,68,102,0.1)"
                            stroke="rgba(255,68,102,0.3)"
                            strokeWidth="1"
                        />
                        <text x="181" y="169" textAnchor="middle" fill="#e8f0fe" fontSize="16">
                            後工程（テスト工程）で発見
                        </text>
                        <text x="181" y="185" textAnchor="middle" fill="#ff4466" fontSize="16">
                            大幅な設計・実装の修正が必要
                        </text>
                        <text
                            x="181"
                            y="198"
                            textAnchor="middle"
                            fill="#ff4466"
                            fontSize="16"
                            fontWeight="700"
                        >
                            → 修正の手戻りが最大！
                        </text>
                        {/*  コストバッジ  */}
                        <rect
                            x="116"
                            y="212"
                            width="130"
                            height="40"
                            rx="8"
                            fill="rgba(255,68,102,0.25)"
                            stroke="#ff4466"
                            strokeWidth="2"
                        />
                        <text x="181" y="230" textAnchor="middle" fill="#ff4466" fontSize="16">
                            修正コスト
                        </text>
                        <text
                            x="181"
                            y="248"
                            textAnchor="middle"
                            fill="#ff4466"
                            fontSize="22"
                            fontWeight="800"
                        >
                            100x
                        </text>

                        {/*  ===== 右パネル: シフトレフト =====  */}
                        <rect
                            x="374"
                            y="32"
                            width="330"
                            height="260"
                            rx="8"
                            fill="rgba(0,255,136,0.06)"
                            stroke="rgba(0,255,136,0.35)"
                            strokeWidth="1.5"
                        />
                        <text
                            x="539"
                            y="52"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="700"
                        >
                            ✅ シフトレフト（推奨）
                        </text>

                        {/*  フロー: 要件→設計→開発→テスト（各工程にチェック）  */}
                        <rect
                            x="388"
                            y="64"
                            width="60"
                            height="36"
                            rx="6"
                            fill="rgba(0,255,136,0.15)"
                            stroke="rgba(0,255,136,0.5)"
                            strokeWidth="1.5"
                        />
                        <text x="418" y="83" textAnchor="middle" fill="#00ff88" fontSize="16">
                            要件
                        </text>
                        <text x="418" y="96" textAnchor="middle" fill="#00ff88" fontSize="16">
                            定義
                        </text>
                        <rect
                            x="466"
                            y="64"
                            width="60"
                            height="36"
                            rx="6"
                            fill="rgba(0,255,136,0.12)"
                            stroke="rgba(0,255,136,0.4)"
                            strokeWidth="1.5"
                        />
                        <text x="496" y="83" textAnchor="middle" fill="#00ff88" fontSize="16">
                            設計
                        </text>
                        <text x="496" y="96" textAnchor="middle" fill="#00ff88" fontSize="16">
                            レビュー
                        </text>
                        <rect
                            x="544"
                            y="64"
                            width="60"
                            height="36"
                            rx="6"
                            fill="rgba(0,255,136,0.12)"
                            stroke="rgba(0,255,136,0.4)"
                            strokeWidth="1.5"
                        />
                        <text x="574" y="83" textAnchor="middle" fill="#00ff88" fontSize="16">
                            コンポ
                        </text>
                        <text x="574" y="96" textAnchor="middle" fill="#00ff88" fontSize="16">
                            単体PT
                        </text>
                        <rect
                            x="622"
                            y="64"
                            width="60"
                            height="36"
                            rx="6"
                            fill="rgba(0,212,255,0.15)"
                            stroke="rgba(0,212,255,0.5)"
                            strokeWidth="1.5"
                        />
                        <text x="652" y="83" textAnchor="middle" fill="#00d4ff" fontSize="16">
                            負荷
                        </text>
                        <text x="652" y="96" textAnchor="middle" fill="#00d4ff" fontSize="16">
                            テスト
                        </text>
                        {/*  矢印  */}
                        <line
                            x1="448"
                            y1="82"
                            x2="466"
                            y2="82"
                            stroke="#00ff88"
                            strokeWidth="1.5"
                            markerEnd="url(#arrow-green)"
                        />
                        <line
                            x1="526"
                            y1="82"
                            x2="544"
                            y2="82"
                            stroke="#00ff88"
                            strokeWidth="1.5"
                            markerEnd="url(#arrow-green)"
                        />
                        <line
                            x1="604"
                            y1="82"
                            x2="622"
                            y2="82"
                            stroke="#00ff88"
                            strokeWidth="1.5"
                            markerEnd="url(#arrow-green)"
                        />
                        {/*  各工程の問題検出マーク  */}
                        <text x="418" y="118" textAnchor="middle" fill="#00ff88" fontSize="16">
                            ✅
                        </text>
                        <text x="418" y="133" textAnchor="middle" fill="#8899bb" fontSize="16">
                            NFR定義
                        </text>
                        <text x="496" y="118" textAnchor="middle" fill="#00ff88" fontSize="16">
                            ✅
                        </text>
                        <text x="496" y="133" textAnchor="middle" fill="#8899bb" fontSize="16">
                            設計検証
                        </text>
                        <text x="574" y="118" textAnchor="middle" fill="#00ff88" fontSize="16">
                            ✅
                        </text>
                        <text x="574" y="133" textAnchor="middle" fill="#8899bb" fontSize="16">
                            早期発見
                        </text>
                        <text x="652" y="118" textAnchor="middle" fill="#00d4ff" fontSize="16">
                            ✅
                        </text>
                        <text x="652" y="133" textAnchor="middle" fill="#8899bb" fontSize="16">
                            最終確認
                        </text>
                        {/*  説明  */}
                        <rect
                            x="388"
                            y="148"
                            width="302"
                            height="56"
                            rx="6"
                            fill="rgba(0,255,136,0.08)"
                            stroke="rgba(0,255,136,0.25)"
                            strokeWidth="1"
                        />
                        <text x="539" y="169" textAnchor="middle" fill="#e8f0fe" fontSize="16">
                            各工程で早期にパフォーマンスを検証
                        </text>
                        <text x="539" y="185" textAnchor="middle" fill="#00ff88" fontSize="16">
                            問題を小さいうちに発見・修正
                        </text>
                        <text
                            x="539"
                            y="198"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="16"
                            fontWeight="700"
                        >
                            → 手戻りが最小限！
                        </text>
                        {/*  コストバッジ  */}
                        <rect
                            x="474"
                            y="212"
                            width="130"
                            height="40"
                            rx="8"
                            fill="rgba(0,255,136,0.2)"
                            stroke="#00ff88"
                            strokeWidth="2"
                        />
                        <text x="539" y="230" textAnchor="middle" fill="#00ff88" fontSize="16">
                            修正コスト
                        </text>
                        <text
                            x="539"
                            y="248"
                            textAnchor="middle"
                            fill="#00ff88"
                            fontSize="22"
                            fontWeight="800"
                        >
                            1x
                        </text>

                        {/*  矢印マーカー定義  */}
                        <defs>
                            <marker
                                id="arrow-dim"
                                markerWidth="8"
                                markerHeight="8"
                                refX="6"
                                refY="3"
                                orient="auto"
                            >
                                <path d="M0,0 L0,6 L8,3 z" fill="#445577" />
                            </marker>
                            <marker
                                id="arrow-red"
                                markerWidth="8"
                                markerHeight="8"
                                refX="6"
                                refY="3"
                                orient="auto"
                            >
                                <path d="M0,0 L0,6 L8,3 z" fill="#ff4466" />
                            </marker>
                            <marker
                                id="arrow-green"
                                markerWidth="8"
                                markerHeight="8"
                                refX="6"
                                refY="3"
                                orient="auto"
                            >
                                <path d="M0,0 L0,6 L8,3 z" fill="#00ff88" />
                            </marker>
                        </defs>

                        {/*  底部メッセージ  */}
                        <text x="360" y="314" textAnchor="middle" fill="#ffaa00" fontSize="16">
                            ⚠️ 本番後の修正コストは開発段階の約100倍！早期発見が鍵
                        </text>
                        <text x="360" y="330" textAnchor="middle" fill="#00ff88" fontSize="16">
                            ✅ シフトレフトで全工程にパフォーマンステストを組み込もう
                        </text>
                    </svg>
                    <figcaption
                        style={{ textAlign: `center`, fontSize: `1rem`, color: `#8899bb`, marginTop: `0.5rem` }}
                    >
                        図5: シフトレフト比較 —
                        テストを左（前工程）へ移すほど修正コストは劇的に下がる
                    </figcaption>
                </figure>

                <h4>各開発フェーズでのパフォーマンス活動</h4>

                <div className="arch-layers">
                    <div className="arch-row green">
                        <div className="arch-label">要件定義フェーズ</div>
                        <div className="arch-content">
                            NFR（非機能要件）の定義・SMART
                            なパフォーマンス目標の設定。「速いこと」ではなく「P90 &lt; 3秒」と明記
                        </div>
                    </div>
                    <div className="arch-row cyan">
                        <div className="arch-label">設計フェーズ</div>
                        <div className="arch-content">
                            アーキテクチャレビュー（パフォーマンス観点）・静的コード分析でN+1問題・インデックスなし等を早期発見
                        </div>
                    </div>
                    <div className="arch-row amber">
                        <div className="arch-label">実装フェーズ</div>
                        <div className="arch-content">
                            コンポーネントレベルのパフォーマンステスト・DBクエリのEXPLAIN
                            ANALYZE・コードレビューで非効率パターン検出
                        </div>
                    </div>
                    <div className="arch-row purple">
                        <div className="arch-label">テストフェーズ</div>
                        <div className="arch-content">
                            負荷・ストレス・耐久テスト等の実施。SLA適合の確認。ベースラインの確立
                        </div>
                    </div>
                    <div className="arch-row red">
                        <div className="arch-label">本番・運用フェーズ</div>
                        <div className="arch-content">
                            APM導入・継続的モニタリング・コンセプトドリフトの検出・定期的なパフォーマンス再テスト
                        </div>
                    </div>
                </div>

                <div className="section-divider"></div>

                {/*  3.2 アーキテクチャ別リスク  */}
                <h3>3.2 アーキテクチャ別パフォーマンスリスク</h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>アーキテクチャ</th>
                                <th>主なリスク</th>
                                <th>テストの重点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>モノリシック</strong></td>
                                <td>
                                    単一コンポーネントのボトルネックが全体に影響。垂直スケールに限界
                                </td>
                                <td>垂直スケーリング・単一サーバーの限界特定</td>
                            </tr>
                            <tr>
                                <td><strong>マイクロサービス</strong></td>
                                <td>サービス間通信のレイテンシ累積。分散トレーシングの複雑さ</td>
                                <td>サービス間連携レイテンシ・カスケード障害テスト</td>
                            </tr>
                            <tr>
                                <td><strong>3層Webアプリ</strong></td>
                                <td>各層（プレゼンテーション・アプリ・DB）のボトルネック</td>
                                <td>各層ごとの個別ボトルネック特定</td>
                            </tr>
                            <tr>
                                <td><strong>クラウドネイティブ</strong></td>
                                <td>コールドスタート（サーバーレス）・オートスケーリング遅延</td>
                                <td>オートスケーリング動作・コールドスタートの影響測定</td>
                            </tr>
                            <tr>
                                <td><strong>クライアント・サーバー</strong></td>
                                <td>クライアント・サーバー間の帯域幅不足・DB接続競合</td>
                                <td>同時接続数・DB負荷テスト</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/*  水平vs垂直スケーリング  */}
                <h3>3.3 スケーリング戦略の比較</h3>

                <div className="compare-grid">
                    <div className="compare-card good">
                        <div className="compare-label">📈 垂直スケーリング（Scale Up）</div>
                        <p style={{ fontSize: `1rem`, color: `var(--color-text-secondary)` }}>
                            サーバーのスペックを上げる（CPU・RAM増設）。テスト:
                            スペック変更前後でパフォーマンスを比較。<strong
                                >限界あり・単一障害点</strong
                            >
                        </p>
                    </div>
                    <div className="compare-card good">
                        <div className="compare-label">📈 水平スケーリング（Scale Out）</div>
                        <p style={{ fontSize: `1rem`, color: `var(--color-text-secondary)` }}>
                            サーバーの台数を増やす。テスト:
                            1台→2台→4台でスループットがどう変わるか。<strong
                                >理論上は無限にスケール可能</strong
                            >
                        </p>
                    </div>
                </div>

                <div className="callout info">
                    <div className="callout-title">ℹ️ 線形スケーリングの現実</div>
                    理想: 2台 = 2倍の性能。実際: 2台 =
                    1.7倍程度（オーバーヘッドにより少し劣化）。スケーラビリティテストでこの比率を実測する。
                </div>
            </div>
        </section>

        {/*  ===== CHAPTER 4 =====  */}
        <section
            id="ch4"
            style={{ background: `linear-gradient(
                    180deg,
                    rgba(0, 255, 136, 0.01) 0%,
                    var(--color-bg-primary) 100%
                )` }}
        >
            <div className="container">
                <div className="chapter-num">CHAPTER 04 <span className="klevel">K2 / K3 / K4</span></div>
                <div className="section-header">
                    <span className="section-icon">📋</span>
                    <div>
                        <h2>パフォーマンステストのタスク</h2>
                        <p>
                            計画・分析・設計・実装・実行・分析・報告の全工程をステップで学びます。
                        </p>
                    </div>
                </div>

                {/*  4.1 計画  */}
                <h3>4.1 計画（Planning）</h3>
                <p>パフォーマンステスト計画書の主要要素を把握してください。</p>

                <div className="arch-layers">
                    <div className="arch-row green">
                        <div className="arch-label">1. テスト目標</div>
                        <div className="arch-content">
                            SMART な目標: 「チェックアウトの P90 応答時間を 3秒以内に収めること」
                        </div>
                    </div>
                    <div className="arch-row cyan">
                        <div className="arch-label">2. テストスコープ</div>
                        <div className="arch-content">
                            テストする機能・シナリオの範囲。例:
                            「ログイン・商品検索・カート操作・決済処理」
                        </div>
                    </div>
                    <div className="arch-row amber">
                        <div className="arch-label">3. パフォーマンス要件</div>
                        <div className="arch-content">
                            SLA / NFRの数値整理（P50・P90・P99・エラー率・CPU等）
                        </div>
                    </div>
                    <div className="arch-row purple">
                        <div className="arch-label">4. テスト環境</div>
                        <div className="arch-content">
                            本番環境との差異を文書化。差異がある場合は結果解釈に注記する
                        </div>
                    </div>
                    <div className="arch-row red">
                        <div className="arch-label">5. 入口・出口基準</div>
                        <div className="arch-content">
                            開始条件（ビルド完了・環境準備完了）と終了条件（SLA充足・十分な実行時間）
                        </div>
                    </div>
                </div>

                {/*  クリティカルユーザージャーニー  */}
                <h4>クリティカルユーザージャーニー（CUJ）の特定</h4>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>優先度</th>
                                <th>CUJ</th>
                                <th>優先する理由</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="tag green">最高</span></td>
                                <td>商品検索 → 詳細 → カート → 決済</td>
                                <td>ビジネス収益に直接影響する</td>
                            </tr>
                            <tr>
                                <td><span className="tag cyan">高</span></td>
                                <td>新規ユーザー登録 → ログイン</td>
                                <td>多くのユーザーが使用する頻出フロー</td>
                            </tr>
                            <tr>
                                <td><span className="tag amber">中</span></td>
                                <td>在庫確認 → 通知メール登録</td>
                                <td>失敗時の影響が中程度</td>
                            </tr>
                            <tr>
                                <td><span className="tag red">低</span></td>
                                <td>ユーザープロフィール更新</td>
                                <td>少数ユーザー・影響限定的</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-divider"></div>

                {/*  4.2 設計・実装  */}
                <h3>4.2 分析・設計・実装</h3>
                <h4>k6 を使ったパフォーマンステストスクリプト（実践例）</h4>

                {/*  prettier-ignore  */}
                <pre className="code-block" data-lang="JavaScript" dangerouslySetInnerHTML={{ __html: `<span className="code-comment">// k6 パフォーマンステストスクリプト（ECサイト — ベストプラクティス）</span>
<span className="code-keyword">import</span> http <span className="code-keyword">from</span> <span className="code-string">'k6/http'</span>;
<span className="code-keyword">import</span> { sleep, check } <span className="code-keyword">from</span> <span className="code-string">'k6'</span>;
<span className="code-keyword">import</span> { Rate, Trend } <span className="code-keyword">from</span> <span className="code-string">'k6/metrics'</span>;

<span className="code-comment">// カスタムメトリクスの定義（GQMアプローチ）</span>
<span className="code-keyword">const</span> errorRate = <span className="code-keyword">new</span> <span className="code-func">Rate</span>(<span className="code-string">'error_rate'</span>);
<span className="code-keyword">const</span> checkoutDuration = <span className="code-keyword">new</span> <span className="code-func">Trend</span>(<span className="code-string">'checkout_duration'</span>);

<span className="code-comment">// 負荷プロファイルの設定（ランプアップ → 定常状態 → スパイク → ランプダウン）</span>
<span className="code-keyword">export const</span> options = {
    stages: [
        { duration: <span className="code-string">'2m'</span>, target: <span className="code-number">100</span> }, <span className="code-comment">// ランプアップ: 0 → 100 ユーザー</span>
        { duration: <span className="code-string">'10m'</span>, target: <span className="code-number">100</span> }, <span className="code-comment">// 定常状態: 100ユーザー維持</span>
        { duration: <span className="code-string">'5m'</span>, target: <span className="code-number">200</span> }, <span className="code-comment">// ランプアップ: 100 → 200</span>
        { duration: <span className="code-string">'10m'</span>, target: <span className="code-number">200</span> }, <span className="code-comment">// 定常状態: 200ユーザー維持</span>
        { duration: <span className="code-string">'3m'</span>, target: <span className="code-number">0</span> },   <span className="code-comment">// ランプダウン</span>
    ],
    thresholds: {
        <span className="code-comment">// SLA: P90 応答時間 3秒以内</span>
        http_req_duration: [<span className="code-string">'p(90) &lt; 3000'</span>],
        <span className="code-comment">// エラー率 1%以下</span>
        error_rate: [<span className="code-string">'rate &lt; 0.01'</span>],
        <span className="code-comment">// チェックアウトのP90 5秒以内</span>
        checkout_duration: [<span className="code-string">'p(90) &lt; 5000'</span>],
    },
};

<span className="code-keyword">export default function</span> () {
    <span className="code-keyword">const</span> BASE_URL = <span className="code-string">'https://staging.example.com'</span>;

    <span className="code-comment">// === シナリオ1: ログイン ===</span>
    <span className="code-keyword">const</span> loginRes = http.<span className="code-func">post</span>(\`\${BASE_URL}/api/auth/login\`, JSON.<span className="code-func">stringify</span>({
        email: <span className="code-string">'user@test.com'</span>,
        password: <span className="code-string">'pass'</span>
    }), {
        headers: { <span className="code-string">'Content-Type'</span>: <span className="code-string">'application/json'</span> }
    });

    <span className="code-func">check</span>(loginRes, {
        <span className="code-string">'ログイン成功（200）'</span>: (r) =&gt; r.status === <span className="code-number">200</span>,
        <span className="code-string">'ログイン応答時間 &lt; 2秒'</span>: (r) =&gt; r.timings.duration &lt; <span className="code-number">2000</span>,
    });
    errorRate.<span className="code-func">add</span>(loginRes.status !== <span className="code-number">200</span>);

    <span className="code-func">sleep</span>(<span className="code-number">1</span>); <span className="code-comment">// 思考時間 1秒（ページ読み込み後の待機）</span>

    <span className="code-comment">// === シナリオ2: 商品検索（オペレーショナルプロファイル: 80%のユーザーが実行）</span>
    <span className="code-keyword">const</span> authToken = JSON.<span className="code-func">parse</span>(loginRes.body).token;
    <span className="code-keyword">const</span> headers = { <span className="code-string">'Authorization'</span>: \`Bearer \${authToken}\` };
    <span className="code-keyword">const</span> searchRes = http.<span className="code-func">get</span>(\`\${BASE_URL}/api/products?q=laptop\`, { headers });

    <span className="code-func">check</span>(searchRes, {
        <span className="code-string">'検索成功'</span>: (r) =&gt; r.status === <span className="code-number">200</span>,
    });

    <span className="code-func">sleep</span>(<span className="code-number">2</span>); <span className="code-comment">// 思考時間 2秒（検索結果を読む）</span>

    <span className="code-comment">// === シナリオ3: 決済（10%のユーザーのみ実行）</span>
    <span className="code-keyword">if</span> (Math.<span className="code-func">random</span>() &lt; <span className="code-number">0.1</span>) {
        <span className="code-keyword">const</span> startTime = Date.<span className="code-func">now</span>();
        <span className="code-keyword">const</span> checkoutRes = http.<span className="code-func">post</span>(\`\${BASE_URL}/api/orders\`, JSON.<span className="code-func">stringify</span>({
            productId: <span className="code-string">'prod_001'</span>,
            quantity: <span className="code-number">1</span>
        }), { headers });
        
        checkoutDuration.<span className="code-func">add</span>(Date.<span className="code-func">now</span>() - startTime);
        <span className="code-func">check</span>(checkoutRes, {
            <span className="code-string">'購入成功（201）'</span>: (r) =&gt; r.status === <span className="code-number">201</span>
        });
        errorRate.<span className="code-func">add</span>(checkoutRes.status !== <span className="code-number">201</span>);
    }
}` }}></pre>

                <div className="section-divider"></div>

                {/*  4.3 実行  */}
                <h3>4.3 実行（Execution）</h3>

                <ul className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div className="step-body">
                            <strong>予備テスト（Shakeout）:</strong> 1 VU
                            でシナリオ全体を実行し、スクリプトのエラーがないことと、メトリクスが正しく収集されていることを確認。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div className="step-body">
                            <strong>ベースラインテスト:</strong>
                            通常負荷で実行し、現在のパフォーマンスレベルを記録。将来の比較基準（ベースライン）として保存。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div className="step-body">
                            <strong>本テスト実行:</strong>
                            設計した負荷プロファイルで実行。リアルタイムでメトリクスを監視しながら進める。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div className="step-body">
                            <strong>データ保存・比較:</strong>
                            テスト完了後にデータをエクスポートし、ベースラインと比較してリグレッションがないか確認。
                        </div>
                    </li>
                </ul>

                <div className="callout danger">
                    <div className="callout-title">🚨 テスト中断の基準</div>
                    エラー率が5%超 / サーバーがクラッシュ / データ破損の兆候 /
                    テスト環境が不安定になった場合は即座にテストを中断し、状態を記録する。
                </div>

                <div className="section-divider"></div>

                {/*  4.4 分析・報告  */}
                <h3>4.4 結果の分析とステークホルダーへの報告</h3>

                <ul className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div className="step-body">
                            <strong>データ検証:</strong>
                            収集データが正しいか確認。ツールのバグによる外れ値は除外する。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div className="step-body">
                            <strong>SLAとの比較:</strong>
                            各メトリクスをSLA/NFRと照らし合わせ、合格・不合格を判定する。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div className="step-body">
                            <strong>ボトルネックの特定:</strong>
                            どのコンポーネントが・いつ・どの負荷レベルで問題を起こしたか特定。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div className="step-body">
                            <strong>根本原因分析（RCA）:</strong>
                            なぜボトルネックが発生したか。コード・インフラ・設定のどこに問題があるか。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">5</span>
                        <div className="step-body">
                            <strong>改善提案:</strong> 優先順位付きで具体的な改善策を提案。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">6</span>
                        <div className="step-body">
                            <strong>ステークホルダー別レポート:</strong>
                            経営層・開発チーム・インフラチームで切り口を変えて報告。
                        </div>
                    </li>
                </ul>

                <h4>ステークホルダー別レポーティング例</h4>

                <div className="trend-card">
                    <div className="trend-title">📊 経営層向け エグゼクティブサマリー（1ページ）</div>
                    <p className="sr-only">
                        経営層向けエグゼクティブサマリーのサンプルテキスト。詳細は本文テキストを参照してください。
                    </p>
                    {/*  prettier-ignore  */}
                    <pre className="code-block" style={{ marginTop: `0.75rem` }} data-lang="TEXT" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `総合ステータス: 🟡 一部要件未達成

✅ 合格 (3/4):
  - ログイン・商品検索のレスポンスタイムは要件を満たす
  - エラー率 0.3%（目標 1%以内）✅

❌ 未達成 (1/4):
  - 決済処理の P99 が 8.2秒（目標 5秒以内）
    → 年末セールでの影響: 1%ユーザーが決済放棄リスク

推奨アクション:
  決済APIのキャッシュ導入（1週間・低コスト）` }}></pre>
                </div>
            </div>
        </section>

        {/*  ===== CHAPTER 5 =====  */}
        <section
            id="ch5"
            style={{ background: `linear-gradient(
                    180deg,
                    var(--color-bg-primary) 0%,
                    rgba(0, 212, 255, 0.02) 100%
                )` }}
        >
            <div className="container">
                <div className="chapter-num">CHAPTER 05 <span className="klevel">K1 / K2</span></div>
                <div className="section-header">
                    <span className="section-icon">🔧</span>
                    <div>
                        <h2>ツール（Tools）</h2>
                        <p>ツールのカテゴリ・選定基準・主要ツールを理解します。</p>
                    </div>
                </div>

                {/*  5.1 ツールカテゴリ  */}
                <h3>5.1 パフォーマンステストツールのカテゴリ</h3>

                <div className="arch-layers">
                    <div className="arch-row green">
                        <div className="arch-label">① 負荷生成ツール</div>
                        <div className="arch-content">
                            仮想ユーザーを生成してシステムに負荷をかける。最中心的なカテゴリ。例:
                            JMeter・k6・Gatling・Locust
                        </div>
                    </div>
                    <div className="arch-row cyan">
                        <div className="arch-label">② 負荷管理コンソール</div>
                        <div className="arch-content">
                            複数の負荷生成マシンを管理・制御。分散テスト実行。例: JMeter
                            Distributed・k6 Cloud
                        </div>
                    </div>
                    <div className="arch-row amber">
                        <div className="arch-label">③ モニタリングツール</div>
                        <div className="arch-content">
                            テスト中のシステムリソースを監視・可視化。APMを含む。例:
                            Prometheus・Grafana・New Relic・Datadog
                        </div>
                    </div>
                    <div className="arch-row purple">
                        <div className="arch-label">④ プロファイリングツール</div>
                        <div className="arch-content">
                            コードレベルのボトルネックを特定。メソッド別実行時間。例:
                            JFR・py-spy・.NET Profiler
                        </div>
                    </div>
                    <div className="arch-row red">
                        <div className="arch-label">⑤ データ収集・分析ツール</div>
                        <div className="arch-content">
                            テスト結果の集計・可視化・レポート生成。例: Grafana
                            Dashboard・Kibana・Excel
                        </div>
                    </div>
                    <div className="arch-row green" style={{ borderColor: `#3366ff` }}>
                        <div className="arch-label" style={{ color: `#6699ff` }}>⑥ ネットワーク分析</div>
                        <div className="arch-content">
                            ネットワーク遅延・帯域幅の分析。例: Wireshark・tcpdump
                        </div>
                    </div>
                </div>

                <div className="section-divider"></div>

                {/*  5.2 ツール選定基準  */}
                <h3>5.2 ツール選定基準（Tool Suitability）</h3>

                <div className="metric-grid">
                    <div className="metric-card cyan">
                        <div className="metric-value" style={{ fontSize: `1.3rem` }}>技術的<br />適合性</div>
                        <div className="metric-label">
                            テスト対象プロトコル（HTTP・WS・gRPC・MQTT等）に対応しているか
                        </div>
                    </div>
                    <div className="metric-card green">
                        <div className="metric-value" style={{ fontSize: `1.3rem` }}>CI/CD<br />統合</div>
                        <div className="metric-label">
                            Jenkins・GitHub Actions・GitLab CI 等と統合できるか
                        </div>
                    </div>
                    <div className="metric-card amber">
                        <div className="metric-value" style={{ fontSize: `1.3rem` }}>
                            スケーラ<br />ビリティ
                        </div>
                        <div className="metric-label">
                            必要な仮想ユーザー数を生成できるか。分散テスト対応か
                        </div>
                    </div>
                    <div className="metric-card purple">
                        <div className="metric-value" style={{ fontSize: `1.3rem` }}>TCO<br />コスト</div>
                        <div className="metric-label">
                            ライセンス費・インフラ費・学習コストの総所有コスト
                        </div>
                    </div>
                </div>

                {/*  主要ツール比較表  */}
                <h3>5.3 主要負荷生成ツール比較（2025年版）</h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ツール</th>
                                <th>スクリプト言語</th>
                                <th>対応プロトコル</th>
                                <th>特徴</th>
                                <th>コスト</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Apache JMeter</strong></td>
                                <td>Java / XML</td>
                                <td>HTTP・FTP・JDBC・JMS等</td>
                                <td>老舗・GUI搭載・豊富なプラグイン。多プロトコル対応</td>
                                <td><span className="tag green">無料（OSS）</span></td>
                            </tr>
                            <tr>
                                <td><strong>k6</strong></td>
                                <td>JavaScript</td>
                                <td>HTTP・WebSocket・gRPC</td>
                                <td>コードベース・CI/CD統合が容易・高速実行・Grafana製</td>
                                <td>
                                    <span className="tag green">OSS無料</span
                                    ><span className="tag cyan">Cloud有料</span>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Gatling</strong></td>
                                <td>Scala / Java DSL</td>
                                <td>HTTP・WebSocket</td>
                                <td>高スループット・詳細なHTMLレポート・コードベース</td>
                                <td>
                                    <span className="tag green">OSS無料</span
                                    ><span className="tag amber">Enterprise有料</span>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Locust</strong></td>
                                <td>Python</td>
                                <td>HTTP・カスタム可能</td>
                                <td>Pythonで書ける・WebUI・分散テスト対応</td>
                                <td><span className="tag green">無料（OSS）</span></td>
                            </tr>
                            <tr>
                                <td><strong>Artillery</strong></td>
                                <td>YAML / JavaScript</td>
                                <td>HTTP・WebSocket・Lambda</td>
                                <td>設定が簡単・クラウド対応・サーバーレステスト</td>
                                <td>
                                    <span className="tag green">OSS無料</span
                                    ><span className="tag cyan">Pro有料</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>5.4 APM・モニタリングツール</h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ツール</th>
                                <th>種類</th>
                                <th>主な特徴</th>
                                <th>コスト</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Prometheus + Grafana</strong></td>
                                <td>OSS</td>
                                <td>インフラメトリクス・柔軟なダッシュボード・業界標準</td>
                                <td><span className="tag green">無料</span></td>
                            </tr>
                            <tr>
                                <td><strong>New Relic</strong></td>
                                <td>SaaS APM</td>
                                <td>フルスタックAPM・使いやすいUI・AI異常検知</td>
                                <td><span className="tag cyan">無料枠あり</span></td>
                            </tr>
                            <tr>
                                <td><strong>Datadog</strong></td>
                                <td>SaaS</td>
                                <td>APM・インフラ・ログ統合・300以上の統合</td>
                                <td><span className="tag amber">有料</span></td>
                            </tr>
                            <tr>
                                <td><strong>Dynatrace</strong></td>
                                <td>SaaS APM</td>
                                <td>AI駆動の自動根本原因分析・フルスタック可視化</td>
                                <td><span className="tag amber">有料</span></td>
                            </tr>
                            <tr>
                                <td><strong>OpenTelemetry</strong></td>
                                <td>OSS標準</td>
                                <td>ベンダー中立の計装標準・どのバックエンドにも対応</td>
                                <td><span className="tag green">無料</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>5.5 ブラウザパフォーマンスツール</h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ツール</th>
                                <th>主な用途</th>
                                <th>特徴</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Google Lighthouse</strong></td>
                                <td>Core Web Vitals 測定</td>
                                <td>LCP・FID・CLS・INP を自動評価。Chrome DevToolsに内蔵</td>
                            </tr>
                            <tr>
                                <td><strong>WebPageTest</strong></td>
                                <td>詳細なWaterfallチャート</td>
                                <td>世界各地からのテスト・動画撮影・Filmstrip比較</td>
                            </tr>
                            <tr>
                                <td><strong>Chrome DevTools</strong></td>
                                <td>ブラウザ内リアルタイム分析</td>
                                <td>Performance・Network・Memoryパネルで詳細分析</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/*  ===== EXAM SECTION =====  */}
        <section
            id="exam"
            style={{ background: `linear-gradient(
                    180deg,
                    rgba(255, 170, 0, 0.02) 0%,
                    var(--color-bg-primary) 100%
                )` }}
        >
            <div className="container">
                <div className="section-header">
                    <span className="section-icon">📝</span>
                    <div>
                        <h2>試験対策 — 配点・サンプル問題・チェックリスト</h2>
                        <p>CT-PT v1.0 試験（40問・65%合格・90分）の直前対策です。</p>
                    </div>
                </div>

                {/*  配点  */}
                <h3>章別出題比率と重要度</h3>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 01</div>
                        <div className="exam-title">基本概念・テスト種類</div>
                        <div className="exam-stars">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span>
                        </div>
                        <div className="exam-pct">~30%</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 02</div>
                        <div className="exam-title">メトリクス・パーセンタイル</div>
                        <div className="exam-stars">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star">★</span
                            ><span className="star empty">★</span>
                        </div>
                        <div className="exam-pct">~25%</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 03</div>
                        <div className="exam-title">ライフサイクル・シフトレフト</div>
                        <div className="exam-stars">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star empty">★</span
                            ><span className="star empty">★</span>
                        </div>
                        <div className="exam-pct">~15%</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 04</div>
                        <div className="exam-title">テストタスク・計画・分析</div>
                        <div className="exam-stars">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star">★</span><span className="star">★</span
                            ><span className="star empty">★</span>
                        </div>
                        <div className="exam-pct">~20%</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 05</div>
                        <div className="exam-title">ツール・選定基準</div>
                        <div className="exam-stars">
                            <span className="star">★</span><span className="star">★</span
                            ><span className="star empty">★</span><span className="star empty">★</span
                            ><span className="star empty">★</span>
                        </div>
                        <div className="exam-pct">~10%</div>
                    </div>
                </div>

                <div className="section-divider"></div>

                {/*  サンプル問題  */}
                <h3>サンプル問題（解答解説付き）</h3>

                <div className="quiz-block">
                    <div
                        style={{ fontFamily: `var(--font-mono)`, fontSize: `1rem`, color: `var(--color-accent-green)`, marginBottom: `0.5rem` }}
                    >
                        問1 — K2 / Chapter 1
                    </div>
                    <div className="quiz-q">
                        「SNSで商品情報が拡散し、30分以内に通常の50倍のアクセスが急増した」このシナリオを検証するために実施すべきパフォーマンステストの種類はどれか？
                    </div>
                    <ul className="quiz-options">
                        <li className="wrong">A) 耐久テスト（Endurance Testing）</li>
                        <li className="correct">B) スパイクテスト（Spike Testing）✅</li>
                        <li className="wrong">C) ストレステスト（Stress Testing）</li>
                        <li className="wrong">D) 負荷テスト（Load Testing）</li>
                    </ul>
                    <div className="quiz-ans">
                        <strong>解説:</strong>
                        スパイクテストは「短時間での急激な負荷の増加・減少」を検証するもの。耐久テストはメモリリーク等の長時間問題、ストレステストは許容量超の破壊テスト、負荷テストは通常〜最大負荷の動作確認。
                    </div>
                </div>

                <div className="quiz-block">
                    <div
                        style={{ fontFamily: `var(--font-mono)`, fontSize: `1rem`, color: `var(--color-accent-green)`, marginBottom: `0.5rem` }}
                    >
                        問2 — K3 / Chapter 2
                    </div>
                    <div className="quiz-q">
                        SLA が「P90 レスポンスタイムが 1秒以内」と定められている。実測値が P50 =
                        0.6秒 / P90 = 0.9秒 / P99 = 12.5秒
                        の場合、このシステムのSLA評価として正しいものはどれか？
                    </div>
                    <ul className="quiz-options">
                        <li className="wrong">A) P99が12.5秒と非常に遅いためSLA違反</li>
                        <li className="correct">B) P90が0.9秒（&lt;1秒）のためSLAを満たしている ✅</li>
                        <li className="wrong">C) 平均値が1秒を超えているためSLA違反</li>
                        <li className="wrong">D) 全パーセンタイルが1秒以内でないとSLA不合格</li>
                    </ul>
                    <div className="quiz-ans">
                        <strong>解説:</strong> SLAの評価基準は「P90 ≤ 1秒」。実測 P90 = 0.9秒なので
                        <strong>SLAを満たしている</strong
                        >。P99の12.5秒は問題だが、このSLAの合否に関係しない。平均値はSLA評価基準ではない。
                    </div>
                </div>

                <div className="quiz-block">
                    <div
                        style={{ fontFamily: `var(--font-mono)`, fontSize: `1rem`, color: `var(--color-accent-green)`, marginBottom: `0.5rem` }}
                    >
                        問3 — K2 / Chapter 1
                    </div>
                    <div className="quiz-q">
                        メモリ使用量がテスト開始時 512MB → 2時間後 1,024MB → 4時間後 1,536MB →
                        6時間後 2,048MB と変化した。最も可能性が高い問題はどれか？
                    </div>
                    <ul className="quiz-options">
                        <li className="wrong">A) CPUボトルネック</li>
                        <li className="correct">B) メモリリーク（Memory Leak）✅</li>
                        <li className="wrong">C) ネットワーク帯域不足</li>
                        <li className="wrong">D) データベース接続数不足</li>
                    </ul>
                    <div className="quiz-ans">
                        <strong>解説:</strong>
                        メモリが一定ペース（512MBずつ）で増加し続ける右肩上がりのパターンは<strong>メモリリークの典型</strong>。正常なシステムではGCにより解放される。耐久テストがこの問題を検出するために使用される。
                    </div>
                </div>

                <div className="quiz-block">
                    <div
                        style={{ fontFamily: `var(--font-mono)`, fontSize: `1rem`, color: `var(--color-accent-green)`, marginBottom: `0.5rem` }}
                    >
                        問4 — K3 / Chapter 4
                    </div>
                    <div className="quiz-q">
                        パフォーマンステストスクリプトで「思考時間（Think
                        Time）」を設定しなかった場合、テスト結果にどのような影響があるか？
                    </div>
                    <ul className="quiz-options">
                        <li className="wrong">A) テスト結果はより正確になる</li>
                        <li className="wrong">B) 実際より低い負荷がかかり問題が見つかりにくい</li>
                        <li className="correct">
                            C) 実際より高い負荷がかかり必要以上に悲観的な結果が出る ✅
                        </li>
                        <li className="wrong">D) 思考時間はテスト結果に影響しない</li>
                    </ul>
                    <div className="quiz-ans">
                        <strong>解説:</strong>
                        思考時間を省略すると仮想ユーザーが実際よりも高頻度でリクエストを送信し、<strong>非現実的に高い負荷</strong>をサーバーにかける。例:
                        実際のユーザーがフォーム入力に30秒かかるのに、思考時間0秒では0.1秒おきにリクエスト送信（約300倍の高頻度）。
                    </div>
                </div>

                <div className="quiz-block">
                    <div
                        style={{ fontFamily: `var(--font-mono)`, fontSize: `1rem`, color: `var(--color-accent-green)`, marginBottom: `0.5rem` }}
                    >
                        問5 — K2 / Chapter 5
                    </div>
                    <div className="quiz-q">
                        APM（Application Performance
                        Monitoring）ツールの主な目的として最も適切なものはどれか？
                    </div>
                    <ul className="quiz-options">
                        <li className="wrong">A) ユーザーを模倣した仮想トラフィックを生成する</li>
                        <li className="correct">
                            B)
                            コードレベルのボトルネックとアプリケーションの実行動作を監視・分析する
                            ✅
                        </li>
                        <li className="wrong">C) テストケースを管理してテスト実行を追跡する</li>
                        <li className="wrong">D) ネットワークパケットを解析して遅延を特定する</li>
                    </ul>
                    <div className="quiz-ans">
                        <strong>解説:</strong>
                        APMはアプリケーションのコードレベルの動作を監視するツール。トランザクション別応答時間、遅いメソッド・クエリの特定、エラー追跡等。A)は負荷生成ツール、C)はテスト管理ツール、D)はネットワーク分析ツール（Wireshark等）の説明。
                    </div>
                </div>

                <div className="section-divider"></div>

                {/*  チェックリスト  */}
                <h3>試験直前チェックリスト</h3>

                <div className="arch-layers">
                    <div className="arch-row green">
                        <div className="arch-label">Chapter 1</div>
                        <div className="arch-content">
                            7種類のテスト（目的・負荷・用途）/ ISO 25010の3サブ特性 /
                            APIレベルvsUIレベル負荷生成 / 思考時間の重要性 /
                            5種類のボトルネックと症状
                        </div>
                    </div>
                    <div className="arch-row cyan">
                        <div className="arch-label">Chapter 2</div>
                        <div className="arch-content">
                            GQMアプローチ（Goal-Question-Metric）/ P50・P90・P95・P99の意味 /
                            なぜ平均値が不十分か / メトリクスの5収集源 / SLA適合判定の方法
                        </div>
                    </div>
                    <div className="arch-row amber">
                        <div className="arch-label">Chapter 3</div>
                        <div className="arch-content">
                            シフトレフトの概念 / 各SDLCフェーズでのパフォーマンス活動 /
                            4アーキテクチャのリスク / 垂直vs水平スケーリングの違い
                        </div>
                    </div>
                    <div className="arch-row purple">
                        <div className="arch-label">Chapter 4</div>
                        <div className="arch-content">
                            テスト計画書の5要素 / CUJ特定の基準 /
                            実行の3フェーズ（予備→ベースライン→本テスト）/ テスト中断基準 /
                            ステークホルダー別レポート
                        </div>
                    </div>
                    <div className="arch-row red">
                        <div className="arch-label">Chapter 5</div>
                        <div className="arch-content">
                            ツールの6カテゴリ / 選定基準5項目 /
                            主要ツール（JMeter・k6・Gatling・Locust）/ APMツールの役割 /
                            分散テストの概念
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  ===== REFERENCES =====  */}
        <section id="refs">
            <div className="container">
                <div className="section-header">
                    <span className="section-icon">📚</span>
                    <div>
                        <h2>参考文献・公式リソース</h2>
                        <p>試験準備と実践学習に役立つ一次情報源を網羅しました。</p>
                    </div>
                </div>

                <h3>🏛️ 公式 ISTQB® リソース</h3>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-performance-testing-ct-pt/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🏛️ ISTQB 公式</div>
                        <div className="ref-title">CT-PT 認定ページ（公式）</div>
                        <div className="ref-url">istqb.org/certifications/ct-pt/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/?sdm_process_download=1&download_id=3591"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🏛️ ISTQB 公式</div>
                        <div className="ref-title">CT-PT シラバス v1.0 PDF ダウンロード</div>
                        <div className="ref-url">istqb.org/?sdm_process_download=1&amp;id=3591</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/?sdm_process_download=1&download_id=3592"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🏛️ ISTQB 公式</div>
                        <div className="ref-title">サンプル試験問題 v1.3</div>
                        <div className="ref-url">istqb.org/?sdm_process_download=1&amp;id=3592</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/?sdm_process_download=1&download_id=3593"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🏛️ ISTQB 公式</div>
                        <div className="ref-title">サンプル試験解答 v1.3</div>
                        <div className="ref-url">istqb.org/?sdm_process_download=1&amp;id=3593</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://glossary.istqb.org/en_US/search?term="
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🏛️ ISTQB 公式</div>
                        <div className="ref-title">ISTQB グロッサリー（用語集）</div>
                        <div className="ref-url">glossary.istqb.org/en_US/search</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://isqi.org/ISTQB-Certified-Tester-Performance-Testing-CT-PT/CT-PT.737"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">📢 試験プロバイダー</div>
                        <div className="ref-title">iSQI 試験情報（CT-PT）</div>
                        <div className="ref-url">isqi.org/CT-PT.737</div>
                    </a>
                </div>

                <h3 style={{ marginTop: `2.5rem` }}>🔧 主要ツール 公式ドキュメント</h3>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://jmeter.apache.org/usermanual/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🔧 負荷生成ツール</div>
                        <div className="ref-title">Apache JMeter 公式ドキュメント</div>
                        <div className="ref-url">jmeter.apache.org/usermanual/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://grafana.com/docs/k6/latest/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🔧 負荷生成ツール</div>
                        <div className="ref-title">k6 公式ドキュメント（Grafana Labs）</div>
                        <div className="ref-url">grafana.com/docs/k6/latest/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.gatling.io/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🔧 負荷生成ツール</div>
                        <div className="ref-title">Gatling 公式ドキュメント</div>
                        <div className="ref-url">docs.gatling.io/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.locust.io/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🔧 負荷生成ツール</div>
                        <div className="ref-title">Locust 公式ドキュメント</div>
                        <div className="ref-url">docs.locust.io/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://prometheus.io/docs/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">📊 モニタリング</div>
                        <div className="ref-title">Prometheus 公式ドキュメント</div>
                        <div className="ref-url">prometheus.io/docs/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://grafana.com/docs/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">📊 モニタリング</div>
                        <div className="ref-title">Grafana 公式ドキュメント</div>
                        <div className="ref-url">grafana.com/docs/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.newrelic.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">📊 APM</div>
                        <div className="ref-title">New Relic 公式ドキュメント</div>
                        <div className="ref-url">docs.newrelic.com/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.datadoghq.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">📊 APM</div>
                        <div className="ref-title">Datadog 公式ドキュメント</div>
                        <div className="ref-url">docs.datadoghq.com/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://opentelemetry.io/docs/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">📊 標準規格</div>
                        <div className="ref-title">OpenTelemetry 公式ドキュメント</div>
                        <div className="ref-url">opentelemetry.io/docs/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://developer.chrome.com/docs/lighthouse/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🌐 ブラウザパフォーマンス</div>
                        <div className="ref-title">Google Lighthouse ドキュメント</div>
                        <div className="ref-url">developer.chrome.com/docs/lighthouse/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.webpagetest.org/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🌐 ブラウザパフォーマンス</div>
                        <div className="ref-title">WebPageTest 公式ドキュメント</div>
                        <div className="ref-url">docs.webpagetest.org/</div>
                    </a>
                </div>

                <h3 style={{ marginTop: `2.5rem` }}>📋 関連標準・ベストプラクティス</h3>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://www.iso.org/standard/78176.html"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">📐 ISO標準</div>
                        <div className="ref-title">ISO/IEC 25010:2023 ソフトウェア品質モデル</div>
                        <div className="ref-url">iso.org/standard/78176.html</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://web.dev/vitals/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🌐 Web標準</div>
                        <div className="ref-title">Core Web Vitals (Google) — LCP・INP・CLS</div>
                        <div className="ref-url">web.dev/vitals/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://sre.google/sre-book/table-of-contents/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">📖 ベストプラクティス</div>
                        <div className="ref-title">Google SRE Book — SLI/SLO/SLA の定義</div>
                        <div className="ref-url">sre.google/sre-book/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://martinfowler.com/tags/performance.html"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">📖 ベストプラクティス</div>
                        <div className="ref-title">Martin Fowler — Performance Testing の考え方</div>
                        <div className="ref-url">martinfowler.com/tags/performance.html</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://testing.googleblog.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">📖 ブログ</div>
                        <div className="ref-title">Google Testing Blog — テストベストプラクティス</div>
                        <div className="ref-url">testing.googleblog.com/</div>
                    </a>
                    <a className="ref-card" href="https://dora.dev/" target="_blank" rel="noopener">
                        <div className="ref-cat">📊 DevOpsメトリクス</div>
                        <div className="ref-title">DORA Metrics — デプロイ頻度・変更失敗率等</div>
                        <div className="ref-url">dora.dev/</div>
                    </a>
                </div>

                <h3 style={{ marginTop: `2.5rem` }}>🎓 学習リソース</h3>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://www.istqb.guru/performance-tester/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🎓 学習サイト</div>
                        <div className="ref-title">ISTQB.Guru — CT-PT 学習ガイド</div>
                        <div className="ref-url">istqb.guru/performance-tester/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://www.udemy.com/course/istqb-performance-testing-sample-exams-2024/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">🎓 模擬試験</div>
                        <div className="ref-title">Udemy — CT-PT 模擬試験コース</div>
                        <div className="ref-url">udemy.com/course/istqb-performance-testing/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/exam-providers/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">📢 試験情報</div>
                        <div className="ref-title">ISTQB 試験プロバイダー検索</div>
                        <div className="ref-url">istqb.org/exam-providers/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/training-providers/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-cat">📢 研修情報</div>
                        <div className="ref-title">ISTQB 研修プロバイダー検索</div>
                        <div className="ref-url">istqb.org/training-providers/</div>
                    </a>
                </div>
            </div>
        </section>

        {/*  ===== FOOTER =====  */}
        <footer>
            <div className="container">
                <p
                    style={{ marginBottom: `0.5rem`, color: `var(--color-text-primary)`, fontFamily: `var(--font-mono)`, fontSize: `1rem` }}
                >
                    ISTQB® CT-PT パフォーマンステスト 完全学習ガイド 2025
                </p>
                <p style={{ fontSize: `1rem`, color: `var(--color-text-muted)` }}>
                    本ガイドは ISTQB® が公認したトレーニング資料ではありません。<br />
                    公式シラバス・サンプル問題と合わせてご使用ください。<br />
                    試験情報の最終確認は必ず公式サイト（<a
                        href="https://istqb.org"
                        target="_blank"
                        rel="noopener"
                        >istqb.org</a
                    >）で行ってください。
                </p>
                <p
                    style={{ marginTop: `1rem`, fontFamily: `var(--font-mono)`, fontSize: `1rem`, color: `var(--color-text-muted)` }}
                >
                    Prepared 2025 — Based on ISTQB CT-PT Syllabus v1.0 (2018)
                </p>
            </div>
        </footer>
    
        </>
    );
}
