import '../istqb-ct-ut-complete-guide.css';
import NavBar from './NavBar';

export const metadata = {
    title: 'Usability Testing 完全ガイド 2025 | ISTQB CT-UT',
    description: 'ISTQB Certified Tester – Usability Testing (CT-UT) の完全学習ガイド。有効性・効率性・満足度、ヒューマンセンタードデザイン(HCD)、アクセシビリティから試験対策まで解説します。',
};

export default function IstqbCtUtCompleteGuide() {
    return (
        <div className="ut-page">
            <NavBar />
            
        {/* HERO */}
        <section className="hero">
            <div className="hero-badge">ISTQB® CT-UT v1.0 | 2025 最新版</div>
            <h1>Usability Testing<br />完全ガイド</h1>
            <p className="hero-sub">
                初学者から実践者まで｜ステップバイステップ図解解説<br />Certified Tester – Usability
                Testing 準拠
            </p>
            <div className="meta-grid">
                <div className="meta-chip"><span>📋</span>40問 / 60分</div>
                <div className="meta-chip"><span>🎯</span>合格基準 65%（26/40点）</div>
                <div className="meta-chip"><span>🔑</span>前提: CTFL 必須</div>
                <div className="meta-chip"><span>⏱️</span>学習目安 ~12.75時間</div>
            </div>
        </section>

        <div className="container">
            {/* TOC */}
            <section id="toc">
                <div className="section-header">
                    <h2>📚 目次</h2>
                </div>
                <div className="toc-grid">
                    <a href="#ch0" className="toc-card"
                        ><div className="toc-num">Ch.0</div>
                        <div className="toc-title">概要 &amp; ロードマップ</div>
                        <div className="toc-min">試験仕様 / 資格体系</div></a
                    >
                    <a href="#ch1" className="toc-card"
                        ><div className="toc-num">Ch.1</div>
                        <div className="toc-title">ユーザビリティの基本概念</div>
                        <div className="toc-min">~135分 | 17%</div></a
                    >
                    <a href="#ch2" className="toc-card"
                        ><div className="toc-num">Ch.2</div>
                        <div className="toc-title">リスク分析</div>
                        <div className="toc-min">~75分 | 10%</div></a
                    >
                    <a href="#ch3" className="toc-card"
                        ><div className="toc-num">Ch.3</div>
                        <div className="toc-title">標準規格</div>
                        <div className="toc-min">~105分 | 14%</div></a
                    >
                    <a href="#ch4" className="toc-card"
                        ><div className="toc-num">Ch.4</div>
                        <div className="toc-title">ユーザビリティレビュー</div>
                        <div className="toc-min">~135分 | 17%</div></a
                    >
                    <a href="#ch5" className="toc-card"
                        ><div className="toc-num">Ch.5</div>
                        <div className="toc-title">ユーザビリティテスト</div>
                        <div className="toc-min">~195分 | 26% ★最重要</div></a
                    >
                    <a href="#ch6" className="toc-card"
                        ><div className="toc-num">Ch.6</div>
                        <div className="toc-title">ユーザー調査</div>
                        <div className="toc-min">~105分 | 14%</div></a
                    >
                    <a href="#ch7" className="toc-card"
                        ><div className="toc-num">Ch.7</div>
                        <div className="toc-title">手法の選択</div>
                        <div className="toc-min">~15分 | 2%</div></a
                    >
                </div>
            </section>

            <hr className="divider" />

            {/* ===== CHAPTER 0 ===== */}
            <section id="ch0">
                <div className="section-header">
                    <span className="chapter-num">Ch.0</span>
                    <h2>CT-UT 概要 &amp; 資格ロードマップ</h2>
                </div>

                <div className="card">
                    <p className="h3">CT-UT とは何か？</p>
                    <p>
                        <strong>ISTQB® CT-UT（Certified Tester – Usability Testing）</strong
                        >は、ソフトウェアのユーザビリティ・UX・アクセシビリティのテスト専門家を認定する国際スペシャリスト資格です。2018年にGA（General
                        Availability）リリースされ、現在も業界標準として活用されています。
                    </p>
                    <p>
                        CT-UT には
                        <strong>3つの評価アプローチ</strong>
                        が含まれます：①ユーザビリティレビュー（専門家評価）、②ユーザビリティテスト（実ユーザーが参加）、③ユーザー調査（アンケートで測定）。
                    </p>
                </div>

                {/* Certification Roadmap SVG */}
                <div className="svg-wrap">
                    <svg
                        viewBox="0 0 780 220"
                        xmlns="http://www.w3.org/2000/svg"
                        fontFamily="Space Mono, monospace"
                    >
                        {/* Background */}
                        <rect width="780" height="220" fill="#0d1117" rx="12" />
                        {/* Foundation */}
                        <rect
                            x="20"
                            y="140"
                            width="740"
                            height="56"
                            rx="8"
                            fill="#111827"
                            stroke="#6b7f96"
                            strokeWidth="1"
                        />
                        <text x="390" y="162" fill="#a8b8cc" fontSize="11" textAnchor="middle">
                            Foundation Level (前提条件：必須)
                        </text>
                        <text
                            x="390"
                            y="182"
                            fill="#e2e8f0"
                            fontSize="14"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            CTFL v4.0
                        </text>
                        {/* Arrow */}
                        <line
                            x1="390"
                            y1="138"
                            x2="390"
                            y2="110"
                            stroke="#00f5ff"
                            strokeWidth="2"
                            markerEnd="url(#arr)"
                        />
                        {/* Specialist Stream */}
                        <rect
                            x="60"
                            y="20"
                            width="660"
                            height="82"
                            rx="8"
                            fill="#1a2332"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                        />
                        <text
                            x="390"
                            y="42"
                            fill="#00f5ff"
                            fontSize="11"
                            textAnchor="middle"
                            letterSpacing="2"
                        >
                            SPECIALIST STREAM
                        </text>
                        <rect
                            x="120"
                            y="50"
                            width="520"
                            height="40"
                            rx="6"
                            fill="#0d1117"
                            stroke="#39ff14"
                            strokeWidth="1.5"
                        />
                        <text x="390" y="65" fill="#a8b8cc" fontSize="10" textAnchor="middle">
                            Specialist: Usability Testing
                        </text>
                        <text
                            x="390"
                            y="82"
                            fill="#39ff14"
                            fontSize="14"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            CT-UT v1.0 ← 本資格
                        </text>
                        <defs>
                            <marker
                                id="arr"
                                markerWidth="8"
                                markerHeight="8"
                                refX="4"
                                refY="4"
                                orient="auto"
                            >
                                <path d="M0,0 L8,4 L0,8 Z" fill="#00f5ff" />
                            </marker>
                        </defs>
                    </svg>
                </div>

                <div className="sub-header">試験仕様</div>
                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-value">40</div>
                        <div className="metric-label">問題数</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value green">65%</div>
                        <div className="metric-label">合格基準（26/40点）</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value amber">60分</div>
                        <div className="metric-label">試験時間</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value pink">+25%</div>
                        <div className="metric-label">非英語話者の追加時間</div>
                    </div>
                </div>

                <div className="sub-header">学習時間配分</div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span>Ch.5 ユーザビリティテスト</span><span>195分 / 26%</span>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar cyan" style={{width: "26%"}}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span>Ch.1 基本概念</span><span>135分 / 17%</span>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar green" style={{width: "17%"}}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span>Ch.4 ユーザビリティレビュー</span><span>135分 / 17%</span>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar amber" style={{width: "17%"}}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span>Ch.3 標準規格</span><span>105分 / 14%</span>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar purple" style={{width: "14%"}}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span>Ch.6 ユーザー調査</span><span>105分 / 14%</span>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar cyan" style={{width: "14%"}}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span>Ch.2 リスク / Ch.7 手法選択</span><span>90分 / 12%</span>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar green" style={{width: "12%"}}></div>
                    </div>
                </div>

                <div className="sub-header">6つのビジネスアウトカム</div>
                <ol className="step-list">
                    <li>
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">
                                ユーザビリティとユーザビリティテストの基本概念を理解できる
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">
                                製品のユーザビリティリスクとアクセシビリティ違反の重大度を識別・分類できる
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">関連標準を引用し、製品への実装を検証できる</div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">
                                ユーザビリティ・UX・アクセシビリティの目標が検証できるよう手順を設定できる
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <div className="step-title">ユーザビリティテスト計画を設計・監視できる</div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <div className="step-title">
                                評価の根拠・プロセス・結果を非専門家ステークホルダーへ説明できる
                            </div>
                        </div>
                    </li>
                </ol>
            </section>

            <hr className="divider" />

            {/* ===== CHAPTER 1 ===== */}
            <section id="ch1">
                <div className="section-header">
                    <span className="chapter-num">Ch.1</span>
                    <span className="klevel">K2 理解</span>
                    <h2>ユーザビリティの基本概念</h2>
                </div>

                <div className="sub-header">1.1 ユーザビリティの定義（ISO 9241-11:2018）</div>

                <div className="callout info">
                    <strong>📖 定義</strong>
                    「特定のユーザーが、特定の利用状況において、特定の目標を達成するために製品を使用する際の
                    <strong>有効性・効率性・満足度</strong> の度合い」
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>要素</th>
                                <th>定義</th>
                                <th>測定方法</th>
                                <th>例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong className="text-cyan">有効性<br />Effectiveness</strong>
                                </td>
                                <td>ユーザーが目標を正確・完全に達成できるか</td>
                                <td>タスク完了率、エラー率</td>
                                <td>ECサイトで商品を購入完了できたか</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong className="text-green">効率性<br />Efficiency</strong>
                                </td>
                                <td>目標達成に必要な時間・労力・コスト</td>
                                <td>完了時間、クリック数</td>
                                <td>注文完了まで何分かかったか</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong className="text-amber">満足度<br />Satisfaction</strong>
                                </td>
                                <td>ユーザーの主観的な快適さ・肯定的な態度</td>
                                <td>SUSスコア、インタビュー</td>
                                <td>サイトを使って気持ちよかったか</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sub-header">1.2 ユーザビリティ・UX・アクセシビリティの違い</div>

                {/* Concentric circle SVG */}
                <div className="svg-wrap">
                    <svg
                        viewBox="0 0 640 280"
                        xmlns="http://www.w3.org/2000/svg"
                        fontFamily="IBM Plex Sans JP, sans-serif"
                    >
                        <rect width="640" height="280" fill="#0d1117" rx="12" />
                        {/* UX outer */}
                        <ellipse
                            cx="320"
                            cy="140"
                            rx="290"
                            ry="120"
                            fill="rgba(0,245,255,0.06)"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                            strokeDasharray="6,3"
                        />
                        <text x="60" y="60" fill="#00f5ff" fontSize="12" fontWeight="bold">
                            UX（ユーザーエクスペリエンス）
                        </text>
                        <text x="60" y="76" fill="#6b7f96" fontSize="10">
                            使用前・使用後の体験 / ブランド感情 / 期待値
                        </text>
                        {/* Usability middle */}
                        <ellipse
                            cx="320"
                            cy="148"
                            rx="200"
                            ry="80"
                            fill="rgba(57,255,20,0.07)"
                            stroke="#39ff14"
                            strokeWidth="1.5"
                        />
                        <text
                            x="200"
                            y="132"
                            fill="#39ff14"
                            fontSize="12"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            ユーザビリティ
                        </text>
                        <text x="200" y="148" fill="#6b7f96" fontSize="10" textAnchor="middle">
                            有効性・効率性・満足度
                        </text>
                        {/* Accessibility badge */}
                        <rect
                            x="420"
                            y="105"
                            width="180"
                            height="70"
                            rx="8"
                            fill="rgba(180,77,255,0.1)"
                            stroke="#b44dff"
                            strokeWidth="1.5"
                        />
                        <text
                            x="510"
                            y="133"
                            fill="#b44dff"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            アクセシビリティ
                        </text>
                        <text x="510" y="150" fill="#6b7f96" fontSize="9" textAnchor="middle">
                            障害者を含む
                        </text>
                        <text x="510" y="163" fill="#6b7f96" fontSize="9" textAnchor="middle">
                            全ユーザーが使えること
                        </text>
                        <line
                            x1="420"
                            y1="140"
                            x2="370"
                            y2="148"
                            stroke="#b44dff"
                            strokeWidth="1"
                            strokeDasharray="4,2"
                        />
                    </svg>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>概念</th>
                                <th>焦点</th>
                                <th>測定方法</th>
                                <th>例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>ユーザビリティ</strong></td>
                                <td>特定タスクの使いやすさ</td>
                                <td>タスク完了率・時間</td>
                                <td>ログイン完了時間</td>
                            </tr>
                            <tr>
                                <td><strong>UX</strong></td>
                                <td>製品との総合的な体験</td>
                                <td>感情・NPS・満足感</td>
                                <td>「また使いたいか」</td>
                            </tr>
                            <tr>
                                <td><strong>アクセシビリティ</strong></td>
                                <td>全ユーザーが使えるか</td>
                                <td>WCAG準拠率</td>
                                <td>視覚障害者でも使えるか</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sub-header">1.3 評価の3アプローチ（試験最頻出！）</div>

                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-label">Ch.4 ▶</span>
                        <span className="arch-title">① ユーザビリティレビュー</span>
                        <span className="arch-desc"
                            >専門家が評価 / ユーザー不要 / 低コスト / 初期から実施可能</span
                        >
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">Ch.5 ▶</span>
                        <span className="arch-title">② ユーザビリティテスト</span>
                        <span className="arch-desc"
                            >実ユーザーが参加 / タスク実行 / 最高信頼性 / Think-Aloud</span
                        >
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">Ch.6 ▶</span>
                        <span className="arch-title">③ ユーザー調査（アンケート）</span>
                        <span className="arch-desc"
                            >SUS / SUMI / WAMMI / 定量データ / ベンチマーク比較</span
                        >
                    </div>
                </div>

                <div className="sub-header">1.4 形成的評価 vs 総括的評価（試験頻出！）</div>

                {/* Timeline SVG */}
                <div className="svg-wrap">
                    <svg
                        viewBox="0 0 740 180"
                        xmlns="http://www.w3.org/2000/svg"
                        fontFamily="Space Mono, monospace"
                    >
                        <rect width="740" height="180" fill="#0d1117" rx="12" />
                        {/* Timeline bar */}
                        <rect x="30" y="88" width="680" height="6" rx="3" fill="#1a2332" />
                        {/* Phases */}
                        <rect
                            x="30"
                            y="88"
                            width="105"
                            height="6"
                            rx="0"
                            fill="#39ff14"
                            opacity="0.7"
                        />
                        <rect
                            x="135"
                            y="88"
                            width="105"
                            height="6"
                            rx="0"
                            fill="#39ff14"
                            opacity="0.7"
                        />
                        <rect
                            x="240"
                            y="88"
                            width="105"
                            height="6"
                            rx="0"
                            fill="#00f5ff"
                            opacity="0.7"
                        />
                        <rect
                            x="345"
                            y="88"
                            width="105"
                            height="6"
                            rx="0"
                            fill="#00f5ff"
                            opacity="0.7"
                        />
                        <rect
                            x="450"
                            y="88"
                            width="120"
                            height="6"
                            rx="0"
                            fill="#ffb700"
                            opacity="0.7"
                        />
                        <rect
                            x="570"
                            y="88"
                            width="80"
                            height="6"
                            rx="0"
                            fill="#ff2d78"
                            opacity="0.7"
                        />
                        <rect
                            x="650"
                            y="88"
                            width="60"
                            height="6"
                            rx="3"
                            fill="#ff2d78"
                            opacity="0.7"
                        />
                        {/* Labels top */}
                        <text x="83" y="76" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            要件定義
                        </text>
                        <text x="188" y="76" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            設計
                        </text>
                        <text x="293" y="76" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            実装
                        </text>
                        <text x="398" y="76" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            テスト
                        </text>
                        <text x="510" y="76" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            リリース
                        </text>
                        <text x="660" y="76" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            本番
                        </text>
                        {/* Dots */}
                        <circle cx="83" cy="91" r="5" fill="#39ff14" />
                        <circle cx="188" cy="91" r="5" fill="#39ff14" />
                        <circle cx="293" cy="91" r="5" fill="#00f5ff" />
                        <circle cx="398" cy="91" r="5" fill="#00f5ff" />
                        <circle cx="510" cy="91" r="5" fill="#ffb700" />
                        <circle cx="660" cy="91" r="5" fill="#ff2d78" />
                        {/* Formative bracket */}
                        <rect
                            x="30"
                            y="108"
                            width="450"
                            height="28"
                            rx="4"
                            fill="rgba(57,255,20,0.08)"
                            stroke="#39ff14"
                            strokeWidth="1"
                        />
                        <text
                            x="255"
                            y="118"
                            fill="#39ff14"
                            fontSize="9"
                            textAnchor="middle"
                            fontWeight="bold"
                        >
                            形成的評価 (Formative)
                        </text>
                        <text x="255" y="130" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            開発中 / 改善目的 / 定性的 / 少人数 (5〜8名)
                        </text>
                        {/* Summative bracket */}
                        <rect
                            x="450"
                            y="108"
                            width="260"
                            height="28"
                            rx="4"
                            fill="rgba(255,45,120,0.08)"
                            stroke="#ff2d78"
                            strokeWidth="1"
                        />
                        <text
                            x="580"
                            y="118"
                            fill="#ff2d78"
                            fontSize="9"
                            textAnchor="middle"
                            fontWeight="bold"
                        >
                            総括的評価 (Summative)
                        </text>
                        <text x="580" y="130" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            開発後 / 検証目的 / 定量的 / 多人数 (12〜30名)
                        </text>
                    </svg>
                </div>

                <div className="compare-grid">
                    <div className="compare-col good">
                        <div className="compare-label">✅ 形成的評価 — 設計中に使う</div>
                        <div className="compare-item">開発「中」に問題を発見して改善</div>
                        <div className="compare-item">少人数（5〜8名）で十分</div>
                        <div className="compare-item">定性的・反復的に実施</div>
                        <div className="compare-item">ペーパープロトタイプでも実施可能</div>
                    </div>
                    <div className="compare-col bad">
                        <div className="compare-label">⚠️ 総括的評価 — リリース前後に使う</div>
                        <div className="compare-item">開発「後」に品質基準の達成を確認</div>
                        <div className="compare-item">多人数（12〜30名以上）を確保</div>
                        <div className="compare-item">定量的データで意思決定を支援</div>
                        <div className="compare-item">SUSスコアによる客観的評価</div>
                    </div>
                </div>

                <div className="sub-header">1.5 ヒューマンセンタードデザイン（HCD）反復サイクル</div>

                {/* HCD Cycle SVG */}
                <div className="svg-wrap">
                    <svg
                        viewBox="0 0 600 280"
                        xmlns="http://www.w3.org/2000/svg"
                        fontFamily="IBM Plex Sans JP, sans-serif"
                    >
                        <rect width="600" height="280" fill="#0d1117" rx="12" />
                        <defs>
                            <marker
                                id="arrowC-green"
                                markerWidth="8"
                                markerHeight="8"
                                refX="6"
                                refY="4"
                                orient="auto"
                            >
                                <path d="M1,1 L7,4 L1,7 Z" fill="#39ff14" />
                            </marker>
                            <marker
                                id="arrowC-cyan"
                                markerWidth="8"
                                markerHeight="8"
                                refX="6"
                                refY="4"
                                orient="auto"
                            >
                                <path d="M1,1 L7,4 L1,7 Z" fill="#00f5ff" />
                            </marker>
                            <marker
                                id="arrowC-amber"
                                markerWidth="8"
                                markerHeight="8"
                                refX="6"
                                refY="4"
                                orient="auto"
                            >
                                <path d="M1,1 L7,4 L1,7 Z" fill="#ffb700" />
                            </marker>
                            <marker
                                id="arrowC-pink"
                                markerWidth="8"
                                markerHeight="8"
                                refX="6"
                                refY="4"
                                orient="auto"
                            >
                                <path d="M1,1 L7,4 L1,7 Z" fill="#ff2d78" />
                            </marker>
                        </defs>
                        {/* Boxes */}
                        <rect
                            x="220"
                            y="20"
                            width="160"
                            height="50"
                            rx="8"
                            fill="#1a2332"
                            stroke="#39ff14"
                            strokeWidth="1.5"
                        />
                        <text
                            x="300"
                            y="42"
                            fill="#39ff14"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            利用状況の理解
                        </text>
                        <text x="300" y="58" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            Context of Use
                        </text>

                        <rect
                            x="420"
                            y="108"
                            width="160"
                            height="50"
                            rx="8"
                            fill="#1a2332"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                        />
                        <text
                            x="500"
                            y="130"
                            fill="#00f5ff"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            ユーザー要求の
                        </text>
                        <text
                            x="500"
                            y="145"
                            fill="#00f5ff"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            明確化
                        </text>

                        <rect
                            x="220"
                            y="196"
                            width="160"
                            height="50"
                            rx="8"
                            fill="#1a2332"
                            stroke="#ffb700"
                            strokeWidth="1.5"
                        />
                        <text
                            x="300"
                            y="218"
                            fill="#ffb700"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            設計解決策の作成
                        </text>
                        <text x="300" y="234" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            プロトタイプ
                        </text>

                        <rect
                            x="20"
                            y="108"
                            width="160"
                            height="50"
                            rx="8"
                            fill="#1a2332"
                            stroke="#ff2d78"
                            strokeWidth="1.5"
                        />
                        <text
                            x="100"
                            y="130"
                            fill="#ff2d78"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            評価・テスト実施
                        </text>
                        <text x="100" y="145" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            ユーザビリティ評価
                        </text>

                        {/* Arrows: line color matches arrowhead color */}
                        <path
                            d="M380,45 Q460,45 460,108"
                            fill="none"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                            markerEnd="url(#arrowC-cyan)"
                        />
                        <path
                            d="M500,158 Q500,230 380,230"
                            fill="none"
                            stroke="#ffb700"
                            strokeWidth="1.5"
                            markerEnd="url(#arrowC-amber)"
                        />
                        <path
                            d="M220,230 Q110,230 100,158"
                            fill="none"
                            stroke="#ff2d78"
                            strokeWidth="1.5"
                            markerEnd="url(#arrowC-pink)"
                        />
                        <path
                            d="M100,108 Q100,45 220,45"
                            fill="none"
                            stroke="#39ff14"
                            strokeWidth="1.5"
                            markerEnd="url(#arrowC-green)"
                        />

                        {/* Center */}
                        <text
                            x="300"
                            y="132"
                            fill="#e2e8f0"
                            fontSize="12"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            HCD
                        </text>
                        <text x="300" y="148" fill="#6b7f96" fontSize="10" textAnchor="middle">
                            ISO 9241-210
                        </text>

                        {/* Release */}
                        <rect
                            x="250"
                            y="255"
                            width="100"
                            height="22"
                            rx="4"
                            fill="rgba(57,255,20,0.15)"
                            stroke="#39ff14"
                            strokeWidth="1"
                        />
                        <text
                            x="300"
                            y="271"
                            fill="#39ff14"
                            fontSize="10"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            リリース ✓
                        </text>
                    </svg>
                </div>

                <div className="callout info">
                    <strong>💡 HCDの6原則（ISO 9241-210）</strong>
                    ①利用状況の理解に基づく設計　②ユーザーが開発全体に関与　③ユーザー中心の評価で推進・改善　④<strong>プロセスは反復的</strong>　⑤UX全体を対象とする　⑥チームは多分野のスキルを持つ
                </div>

                {/* REFERENCES Ch.1 */}
                <div className="sub-header">参照リソース — Chapter 1</div>
                <div className="ref-grid">
                    <a
                        href="https://www.iso.org/standard/63500.html"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISO 標準</div>
                        <div className="ref-title">ISO 9241-11:2018 — ユーザビリティの定義</div>
                        <div className="ref-url">iso.org/standard/63500.html</div>
                    </a>
                    <a
                        href="https://www.iso.org/standard/77520.html"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISO 標準</div>
                        <div className="ref-title">ISO 9241-210:2019 — HCD プロセス</div>
                        <div className="ref-url">iso.org/standard/77520.html</div>
                    </a>
                    <a
                        href="https://istqb.org/certifications/certified-tester-usability-testing-ct-ut/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISTQB 公式</div>
                        <div className="ref-title">CT-UT 公式認定ページ（一次情報源）</div>
                        <div className="ref-url">istqb.org/certifications/...</div>
                    </a>
                </div>
            </section>

            <hr className="divider" />

            {/* ===== CHAPTER 2 ===== */}
            <section id="ch2">
                <div className="section-header">
                    <span className="chapter-num">Ch.2</span>
                    <span className="klevel">K2 理解</span>
                    <h2>ユーザビリティ・UX・アクセシビリティのリスク</h2>
                </div>

                <div className="callout warning">
                    <strong>⚠️ なぜリスク管理が重要か</strong>
                    ユーザビリティ問題を
                    <strong>本番環境で発見するコストは設計段階の100倍</strong>
                    にのぼります。早期にリスクを識別・分類し、優先順位をつけて対処することが品質・コスト両面で不可欠です。
                </div>

                <div className="sub-header">2.1 リスクの影響範囲</div>

                {/* Risk Impact SVG */}
                <div className="svg-wrap">
                    <svg
                        viewBox="0 0 700 160"
                        xmlns="http://www.w3.org/2000/svg"
                        fontFamily="IBM Plex Sans JP, sans-serif"
                    >
                        <rect width="700" height="160" fill="#0d1117" rx="12" />
                        {/* Business */}
                        <rect
                            x="20"
                            y="20"
                            width="200"
                            height="120"
                            rx="8"
                            fill="rgba(0,245,255,0.05)"
                            stroke="#00f5ff"
                            strokeWidth="1"
                        />
                        <text
                            x="120"
                            y="44"
                            fill="#00f5ff"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            💼 ビジネス影響
                        </text>
                        <text x="120" y="63" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            ユーザー離脱・解約
                        </text>
                        <text x="120" y="78" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            サポートコスト増大
                        </text>
                        <text x="120" y="93" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            再設計コスト（100倍）
                        </text>
                        <text x="120" y="108" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            ブランドイメージ低下
                        </text>
                        {/* Safety */}
                        <rect
                            x="250"
                            y="20"
                            width="200"
                            height="120"
                            rx="8"
                            fill="rgba(255,45,120,0.05)"
                            stroke="#ff2d78"
                            strokeWidth="1"
                        />
                        <text
                            x="350"
                            y="44"
                            fill="#ff2d78"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            🏥 安全・人命
                        </text>
                        <text x="350" y="63" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            医療機器UIミス
                        </text>
                        <text x="350" y="78" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            航空管制の操作ミス
                        </text>
                        <text x="350" y="93" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            緊急時システム誤動作
                        </text>
                        {/* Legal */}
                        <rect
                            x="480"
                            y="20"
                            width="200"
                            height="120"
                            rx="8"
                            fill="rgba(255,183,0,0.05)"
                            stroke="#ffb700"
                            strokeWidth="1"
                        />
                        <text
                            x="580"
                            y="44"
                            fill="#ffb700"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            ⚖️ 法的リスク
                        </text>
                        <text x="580" y="63" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            EAA（EU法）違反
                        </text>
                        <text x="580" y="78" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            ADA（米国）訴訟
                        </text>
                        <text x="580" y="93" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            WCAG 非準拠
                        </text>
                    </svg>
                </div>

                <div className="sub-header">2.2 ユーザビリティリスクの6カテゴリ</div>

                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-label">学習性</span>
                        <span className="arch-title">Learnability</span>
                        <span className="arch-desc"
                            >初回使用で操作習得が困難 / 複雑なナビゲーション</span
                        >
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">操作効率</span>
                        <span className="arch-title">Efficiency</span>
                        <span className="arch-desc">タスク完了に時間・労力がかかりすぎる</span>
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">記憶可能性</span>
                        <span className="arch-title">Memorability</span>
                        <span className="arch-desc">しばらく使わないと操作方法を忘れてしまう</span>
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">エラー</span>
                        <span className="arch-title">Errors</span>
                        <span className="arch-desc"
                            >誤りを犯しやすく回復も難しい / 意味不明なエラーメッセージ</span
                        >
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">満足度</span>
                        <span className="arch-title">Satisfaction</span>
                        <span className="arch-desc">製品を不快・不満と感じる / 古臭いデザイン</span>
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">アクセシビリティ</span>
                        <span className="arch-title">Accessibility</span>
                        <span className="arch-desc"
                            >障害を持つユーザーが利用できない / alt属性なし / 低コントラスト</span
                        >
                    </div>
                </div>

                <div className="sub-header">2.3 重大度スケール（0〜4）</div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>レベル</th>
                                <th>名称</th>
                                <th>内容</th>
                                <th>対応</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong className="text-pink">4</strong></td>
                                <td><strong className="text-pink">Catastrophic（致命的）</strong></td>
                                <td>タスクが完了できない / 安全性に関わる</td>
                                <td>リリース前に必ず修正</td>
                            </tr>
                            <tr>
                                <td><strong className="text-amber">3</strong></td>
                                <td><strong className="text-amber">Major（重大）</strong></td>
                                <td>タスク完了が著しく困難 / 大幅な時間ロス</td>
                                <td>次のリリースまでに修正</td>
                            </tr>
                            <tr>
                                <td><strong className="text-cyan">2</strong></td>
                                <td><strong className="text-cyan">Minor（軽微）</strong></td>
                                <td>小さな不便 / 軽微な不満 / 回避策あり</td>
                                <td>バックログに積んで改善</td>
                            </tr>
                            <tr>
                                <td><strong>1</strong></td>
                                <td><strong>Cosmetic（化粧品的）</strong></td>
                                <td>機能に影響しない外観上の問題</td>
                                <td>余裕があれば修正</td>
                            </tr>
                            <tr>
                                <td><strong>0</strong></td>
                                <td>問題なし</td>
                                <td>ユーザビリティ問題ではない</td>
                                <td>対応不要</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="ref-grid">
                    <a
                        href="https://istqb.org/certifications/certified-tester-usability-testing-ct-ut/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISTQB 公式</div>
                        <div className="ref-title">CT-UT シラバス — Chapter 2 リスク分析</div>
                        <div className="ref-url">istqb.org/certifications/...</div>
                    </a>
                    <a
                        href="https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">Nielsen Norman Group</div>
                        <div className="ref-title">ユーザビリティ問題の重大度評価</div>
                        <div className="ref-url">nngroup.com/articles/how-to-rate-the-severity...</div>
                    </a>
                </div>
            </section>

            <hr className="divider" />

            {/* ===== CHAPTER 3 ===== */}
            <section id="ch3">
                <div className="section-header">
                    <span className="chapter-num">Ch.3</span>
                    <span className="klevel">K2 理解</span>
                    <h2>ユーザビリティ・アクセシビリティ標準規格</h2>
                </div>

                <div className="sub-header">3.1 主要標準規格一覧</div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>規格名</th>
                                <th>概要</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>ISO 9241-11:2018</strong></td>
                                <td>
                                    ユーザビリティの定義と測定フレームワーク（有効性・効率性・満足度の3要素）
                                </td>
                            </tr>
                            <tr>
                                <td><strong>ISO 9241-210:2019</strong></td>
                                <td>ヒューマンセンタードデザイン（HCD）— 6原則と反復プロセス</td>
                            </tr>
                            <tr>
                                <td><strong>ISO 9241-110:2020</strong></td>
                                <td>対話原則（7つの対話原則）</td>
                            </tr>
                            <tr>
                                <td><strong>ISO 9241-171:2008</strong></td>
                                <td>ソフトウェアアクセシビリティのガイダンス</td>
                            </tr>
                            <tr>
                                <td><strong>ISO/IEC 25010:2023</strong></td>
                                <td>
                                    ソフトウェア品質モデル（SQuaRE）— 「使用性」を品質特性として定義
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong className="text-green"
                                        >WCAG 2.2 = ISO/IEC 40500:2025 ★NEW</strong
                                    >
                                </td>
                                <td>
                                    Webコンテンツアクセシビリティガイドライン —
                                    2025年10月にISO標準として正式承認
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sub-header">3.2 WCAG 2.2（ISO/IEC 40500:2025）— 4原則 POUR</div>

                <div className="alert cyan">
                    <strong>⚡ 最新情報</strong>2025年10月21日、WCAG 2.2 が
                    <strong>ISO/IEC 40500:2025</strong>
                    として国際標準化機構（ISO）に正式承認されました。
                </div>

                {/* POUR SVG */}
                <div className="svg-wrap">
                    <svg
                        viewBox="0 0 700 200"
                        xmlns="http://www.w3.org/2000/svg"
                        fontFamily="IBM Plex Sans JP, sans-serif"
                    >
                        <rect width="700" height="200" fill="#0d1117" rx="12" />
                        {/* P */}
                        <rect
                            x="20"
                            y="20"
                            width="155"
                            height="160"
                            rx="8"
                            fill="rgba(0,245,255,0.06)"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                        />
                        <text
                            x="98"
                            y="50"
                            fill="#00f5ff"
                            fontSize="22"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            P
                        </text>
                        <text
                            x="98"
                            y="70"
                            fill="#00f5ff"
                            fontSize="10"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            Perceivable
                        </text>
                        <text x="98" y="87" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            知覚可能
                        </text>
                        <text x="98" y="108" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            • alt属性 (代替テキスト)
                        </text>
                        <text x="98" y="123" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            • 字幕・トランスクリプト
                        </text>
                        <text x="98" y="138" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            • コントラスト比の確保
                        </text>
                        {/* O */}
                        <rect
                            x="195"
                            y="20"
                            width="155"
                            height="160"
                            rx="8"
                            fill="rgba(57,255,20,0.06)"
                            stroke="#39ff14"
                            strokeWidth="1.5"
                        />
                        <text
                            x="272"
                            y="50"
                            fill="#39ff14"
                            fontSize="22"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            O
                        </text>
                        <text
                            x="272"
                            y="70"
                            fill="#39ff14"
                            fontSize="10"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            Operable
                        </text>
                        <text x="272" y="87" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            操作可能
                        </text>
                        <text x="272" y="108" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            • キーボードのみで操作
                        </text>
                        <text x="272" y="123" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            • フォーカスの視覚表示
                        </text>
                        <text x="272" y="138" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            • タッチターゲットサイズ
                        </text>
                        {/* U */}
                        <rect
                            x="370"
                            y="20"
                            width="155"
                            height="160"
                            rx="8"
                            fill="rgba(255,183,0,0.06)"
                            stroke="#ffb700"
                            strokeWidth="1.5"
                        />
                        <text
                            x="447"
                            y="50"
                            fill="#ffb700"
                            fontSize="22"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            U
                        </text>
                        <text
                            x="447"
                            y="70"
                            fill="#ffb700"
                            fontSize="10"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            Understandable
                        </text>
                        <text x="447" y="87" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            理解可能
                        </text>
                        <text x="447" y="108" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            • 具体的なエラーメッセージ
                        </text>
                        <text x="447" y="123" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            • 認知負荷を抑えた認証
                        </text>
                        <text x="447" y="138" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            • 平易な言語
                        </text>
                        {/* R */}
                        <rect
                            x="545"
                            y="20"
                            width="140"
                            height="160"
                            rx="8"
                            fill="rgba(180,77,255,0.06)"
                            stroke="#b44dff"
                            strokeWidth="1.5"
                        />
                        <text
                            x="615"
                            y="50"
                            fill="#b44dff"
                            fontSize="22"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            R
                        </text>
                        <text
                            x="615"
                            y="70"
                            fill="#b44dff"
                            fontSize="10"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            Robust
                        </text>
                        <text x="615" y="87" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            堅牢
                        </text>
                        <text x="615" y="108" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            • セマンティックHTML
                        </text>
                        <text x="615" y="123" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            • ARIAランドマーク
                        </text>
                        <text x="615" y="138" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            • 支援技術との互換性
                        </text>
                    </svg>
                </div>

                <div className="sub-header">WCAG 2.2 — 3つの適合レベル</div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>レベル</th>
                                <th>内容</th>
                                <th>法規制での要求</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>A（最低）</strong></td>
                                <td>基本的なアクセシビリティ要件</td>
                                <td>最低限の義務</td>
                            </tr>
                            <tr>
                                <td><strong className="text-cyan">AA（標準）</strong></td>
                                <td>一般的に求められる基準</td>
                                <td>
                                    <strong>EU欧州アクセシビリティ法（EAA）・JIS X 8341-3</strong>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>AAA（最高）</strong></td>
                                <td>最高レベルのサポート</td>
                                <td>達成推奨（全コンテンツでの達成は困難）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sub-header">3.3 ISO 9241-110 — 7つの対話原則（試験頻出！）</div>

                <ol className="step-list">
                    <li>
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">タスク適合性（Task Suitability）</div>
                            <div className="step-desc">
                                システムがユーザーのタスクを適切にサポートする —
                                例：データ入力フォームが業務フローに合っている
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">自己記述性（Self-descriptiveness）</div>
                            <div className="step-desc">
                                追加情報なしに操作方法を理解できる —
                                例：「保存」ボタンに明確なラベルとアイコン
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">
                                一致性（Conformity with User Expectations）
                            </div>
                            <div className="step-desc">
                                ユーザーの期待や慣習に一致 — 例：Ctrl+Z で「元に戻す」
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">学習支援性（Suitability for Learning）</div>
                            <div className="step-desc">
                                使い方の学習を支援する — 例：チュートリアル・コンテキストヘルプ
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <div className="step-title">制御可能性（Controllability）</div>
                            <div className="step-desc">
                                ユーザーが対話の速度・方向を制御できる —
                                例：処理中のキャンセル機能・戻るボタン
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <div className="step-title">エラー耐性（Error Tolerance）</div>
                            <div className="step-desc">
                                ミスしても簡単に回復できる — 例：入力確認ダイアログ・Undo機能
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">7</div>
                        <div className="step-content">
                            <div className="step-title">
                                個人化適合性（Suitability for Individualization）
                            </div>
                            <div className="step-desc">
                                好みや能力に合わせてカスタマイズできる —
                                例：フォントサイズ変更・テーマ切り替え
                            </div>
                        </div>
                    </li>
                </ol>

                <div className="ref-grid">
                    <a href="https://www.w3.org/TR/WCAG22/" target="_blank" className="ref-card">
                        <div className="ref-cat">W3C 公式</div>
                        <div className="ref-title">WCAG 2.2 — Web Content Accessibility Guidelines</div>
                        <div className="ref-url">w3.org/TR/WCAG22/</div>
                    </a>
                    <a
                        href="https://www.w3.org/WAI/news/2025-10-21/wcag22-iso/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">W3C WAI ニュース</div>
                        <div className="ref-title">ISO/IEC 40500:2025 正式承認発表（2025年10月）</div>
                        <div className="ref-url">w3.org/WAI/news/2025-10-21/wcag22-iso/</div>
                    </a>
                    <a
                        href="https://www.iso.org/standard/75258.html"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISO 標準</div>
                        <div className="ref-title">ISO 9241-110:2020 — 対話原則</div>
                        <div className="ref-url">iso.org/standard/75258.html</div>
                    </a>
                </div>
            </section>

            <hr className="divider" />

            {/* ===== CHAPTER 4 ===== */}
            <section id="ch4">
                <div className="section-header">
                    <span className="chapter-num">Ch.4</span>
                    <span className="klevel">K3 適用</span>
                    <h2>ユーザビリティレビュー（専門家評価）</h2>
                </div>

                <div className="card">
                    <p>
                        <strong>ユーザビリティレビュー</strong
                        >とは、実際のユーザーを参加させずに、<strong>専門家がUI/UXを体系的に評価する手法</strong>です。コストが低く、設計の初期段階から実施できる利点があります。
                    </p>
                </div>

                <div className="compare-grid">
                    <div className="compare-col good">
                        <div className="compare-label">✅ メリット</div>
                        <div className="compare-item">実ユーザー不要でコスト低</div>
                        <div className="compare-item">素早く実施できる</div>
                        <div className="compare-item">設計の初期段階から実施可能</div>
                        <div className="compare-item">特定の観点に絞って評価できる</div>
                    </div>
                    <div className="compare-col bad">
                        <div className="compare-label">⚠️ デメリット・限界</div>
                        <div className="compare-item">実際のユーザー行動を観察できない</div>
                        <div className="compare-item">予期しない使い方の問題を見逃す</div>
                        <div className="compare-item">専門家の偏見が入る可能性</div>
                        <div className="compare-item">文脈依存の問題は発見しにくい</div>
                    </div>
                </div>

                <div className="sub-header">
                    4.1 ヒューリスティック評価（Heuristic Evaluation）— 試験最頻出！
                </div>

                <p>
                    ヤコブ・ニールセンが提唱した、<strong>10のユーザビリティ原則（ヒューリスティック）</strong>に基づいて専門家がUIを評価する手法。1994年発表、2024年1月に更新版が公開されました。
                </p>

                <div className="sub-header">実施ステップ（ステップバイステップ）</div>
                <ol className="step-list">
                    <li>
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">評価者の選定（3〜5名推奨）</div>
                            <div className="step-desc">
                                UX専門家・インタラクションデザイナー・経験豊富なテスター。1名では発見率約35%、5名で約75%の問題を発見できる
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">評価スコープとタスクシナリオの設定</div>
                            <div className="step-desc">どの機能・画面を評価するかを明確に定義する</div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">各評価者が独立してUIを評価</div>
                            <div className="step-desc">
                                10のヒューリスティックに基づき、各自が問題を記録。評価者間の相互干渉を防ぐため独立して実施
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">問題のリストアップと重大度評価（0〜4）</div>
                            <div className="step-desc">各問題に重大度スコアを付与</div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <div className="step-title">全評価者の問題を集約・議論</div>
                            <div className="step-desc">デブリーフィングセッションで重複問題を統合</div>
                        </div>
                    </li>
                    <li>
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <div className="step-title">改善提案の作成・報告書の作成</div>
                            <div className="step-desc">重大度順に問題リストと改善提案をまとめる</div>
                        </div>
                    </li>
                </ol>

                <div className="sub-header">ニールセンの10のヒューリスティック（2024年更新版）</div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>原則名</th>
                                <th>定義・良い例</th>
                                <th>悪い例（NG）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong className="text-cyan">1</strong></td>
                                <td>
                                    <strong>システム状態の可視性</strong><br /><span
                                        style={{fontSize: "0.8em", color: "#6b7f96"}}
                                        >Visibility of System Status</span
                                    >
                                </td>
                                <td>
                                    ユーザーは今何が起きているかを知れる<br />✅ プログレスバー /
                                    「保存完了 ✓」
                                </td>
                                <td>❌ 処理中に画面が固まり何も表示されない</td>
                            </tr>
                            <tr>
                                <td><strong className="text-cyan">2</strong></td>
                                <td>
                                    <strong>システムと実世界の一致</strong><br /><span
                                        style={{fontSize: "0.8em", color: "#6b7f96"}}
                                        >Match Between System and Real World</span
                                    >
                                </td>
                                <td>
                                    ユーザーが理解できる言葉・概念・隠喩<br />✅ 「ゴミ箱」アイコン
                                    / 「ショッピングカート」
                                </td>
                                <td>❌ 「エラーコード 0x80070005」のみ表示</td>
                            </tr>
                            <tr>
                                <td><strong className="text-cyan">3</strong></td>
                                <td>
                                    <strong>ユーザーコントロールと自由</strong><br /><span
                                        style={{fontSize: "0.8em", color: "#6b7f96"}}
                                        >User Control and Freedom</span
                                    >
                                </td>
                                <td>
                                    誤った操作から「緊急出口」を提供<br />✅ Undo / Redo /
                                    キャンセルボタン
                                </td>
                                <td>❌ 送信後に取り消せないフォーム</td>
                            </tr>
                            <tr>
                                <td><strong className="text-cyan">4</strong></td>
                                <td>
                                    <strong>一貫性と標準</strong><br /><span
                                        style={{fontSize: "0.8em", color: "#6b7f96"}}
                                        >Consistency and Standards</span
                                    >
                                </td>
                                <td>
                                    同じ言葉・操作が常に同じ意味を持つ<br />✅ Ctrl+S
                                    で保存（プラットフォーム慣習）
                                </td>
                                <td>❌ ある画面は「削除」、別は「消去」</td>
                            </tr>
                            <tr>
                                <td><strong className="text-cyan">5</strong></td>
                                <td>
                                    <strong>エラーの予防</strong><br /><span
                                        style={{fontSize: "0.8em", color: "#6b7f96"}}
                                        >Error Prevention</span
                                    >
                                </td>
                                <td>
                                    エラーが発生しないよう設計する<br />✅ カレンダーピッカー /
                                    削除確認ダイアログ
                                </td>
                                <td>❌ パスワード確認入力がない</td>
                            </tr>
                            <tr>
                                <td><strong className="text-cyan">6</strong></td>
                                <td>
                                    <strong>記憶よりも認識</strong><br /><span
                                        style={{fontSize: "0.8em", color: "#6b7f96"}}
                                        >Recognition Rather Than Recall</span
                                    >
                                </td>
                                <td>
                                    記憶に頼らなくてもいいUIにする<br />✅ オートコンプリート /
                                    ドロップダウン
                                </td>
                                <td>❌ コマンドをすべて暗記が必要なCLI</td>
                            </tr>
                            <tr>
                                <td><strong className="text-cyan">7</strong></td>
                                <td>
                                    <strong>柔軟性と使用効率</strong><br /><span
                                        style={{fontSize: "0.8em", color: "#6b7f96"}}
                                        >Flexibility and Efficiency of Use</span
                                    >
                                </td>
                                <td>
                                    初心者にも上級者にも最適な操作を提供<br />✅
                                    キーボードショートカット / クイックアクセス
                                </td>
                                <td>❌ 全ユーザーに同じウィザード形式を強制</td>
                            </tr>
                            <tr>
                                <td><strong className="text-cyan">8</strong></td>
                                <td>
                                    <strong>美的で最小限のデザイン</strong><br /><span
                                        style={{fontSize: "0.8em", color: "#6b7f96"}}
                                        >Aesthetic and Minimalist Design</span
                                    >
                                </td>
                                <td>
                                    無関係・不必要な情報は表示しない<br />✅
                                    ダイアログに必要な情報のみ表示
                                </td>
                                <td>❌ 一画面に情報を詰め込みすぎる</td>
                            </tr>
                            <tr>
                                <td><strong className="text-cyan">9</strong></td>
                                <td>
                                    <strong>エラーの認識・診断・回復の支援</strong><br /><span
                                        style={{fontSize: "0.8em", color: "#6b7f96"}}
                                        >Help Users Recognize, Diagnose, and Recover from
                                        Errors</span
                                    >
                                </td>
                                <td>
                                    平易な言葉で問題を説明し解決策を提示<br />✅
                                    「メールアドレスの形式が正しくありません。例：user@example.com」
                                </td>
                                <td>❌ 「エラーコード 404」のみ</td>
                            </tr>
                            <tr>
                                <td><strong className="text-cyan">10</strong></td>
                                <td>
                                    <strong>ヘルプとドキュメント</strong><br /><span
                                        style={{fontSize: "0.8em", color: "#6b7f96"}}
                                        >Help and Documentation</span
                                    >
                                </td>
                                <td>
                                    必要な時に助けを提供する<br />✅ コンテキストヘルプ（?） /
                                    検索可能ヘルプ
                                </td>
                                <td>❌ ヘルプが存在しない / 検索できない</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sub-header">4.2 認知的ウォークスルー（Cognitive Walkthrough）</div>
                <div className="card">
                    <p>
                        <strong>認知的ウォークスルー</strong
                        >とは、ユーザーがタスクを実行するステップごとに「<strong>初心者ユーザーの認知プロセス</strong>」を追体験して評価する手法です。「学習性」の問題に特化しています。
                    </p>
                    <p className="h3">各ステップで答える4つの質問</p>
                    <ul>
                        <li><strong>Q1</strong>: ユーザーは目標を達成しようとするか？</li>
                        <li>
                            <strong>Q2</strong>: ユーザーは正しいアクション（ボタン等）に気づくか？
                        </li>
                        <li>
                            <strong>Q3</strong>:
                            ユーザーは正しいアクションとゴールを結びつけられるか？
                        </li>
                        <li>
                            <strong>Q4</strong>:
                            ユーザーはフィードバックから正しく進んだと分かるか？
                        </li>
                    </ul>
                </div>

                <div className="compare-grid">
                    <div className="compare-col good">
                        <div className="compare-label">ヒューリスティック評価 を使う場面</div>
                        <div className="compare-item">広くUIの全体的な問題を発見したい</div>
                        <div className="compare-item">複数の専門家で横断的な評価を行いたい</div>
                        <div className="compare-item">設計初期から比較的速く評価したい</div>
                    </div>
                    <div className="compare-col bad">
                        <div className="compare-label">認知的ウォークスルー を使う場面</div>
                        <div className="compare-item">特定タスクフローの学習性に焦点を当てたい</div>
                        <div className="compare-item">初回利用時の「迷い」を詳細に分析したい</div>
                        <div className="compare-item">設計ドキュメント段階でも実施したい</div>
                    </div>
                </div>

                <div className="ref-grid">
                    <a
                        href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">Nielsen Norman Group</div>
                        <div className="ref-title">
                            ニールセンの10ヒューリスティック（2024年1月更新）
                        </div>
                        <div className="ref-url">nngroup.com/articles/ten-usability-heuristics/</div>
                    </a>
                    <a
                        href="https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">Nielsen Norman Group</div>
                        <div className="ref-title">ヒューリスティック評価の実施方法</div>
                        <div className="ref-url">
                            nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/
                        </div>
                    </a>
                    <a
                        href="https://www.nngroup.com/articles/cognitive-walkthroughs/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">Nielsen Norman Group</div>
                        <div className="ref-title">認知的ウォークスルーの詳細解説</div>
                        <div className="ref-url">nngroup.com/articles/cognitive-walkthroughs/</div>
                    </a>
                </div>
            </section>

            <hr className="divider" />

            {/* ===== CHAPTER 5 ===== */}
            <section id="ch5">
                <div className="section-header">
                    <span className="chapter-num">Ch.5</span>
                    <span className="klevel">K3 適用 — 最重要章</span>
                    <h2>ユーザビリティテスト</h2>
                </div>

                <div className="alert green">
                    <strong>🏆 最重要</strong>
                    試験配点の約26%（195分）を占めるコア章。タスクシナリオ設計・Think-Aloud・SUS計算は必出！
                </div>

                <div className="callout info">
                    <strong>📖 定義</strong>
                    「代表的なユーザーが典型的なタスクを実行する様子を観察者が観察・記録することで、ユーザビリティ問題を特定し、定量データを収集し、製品への満足度を評価する評価手法」
                </div>

                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-value">5人</div>
                        <div className="metric-label">で約85%の問題を発見</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value green">1/100</div>
                        <div className="metric-label">設計段階の修正コスト</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value amber">60〜90分</div>
                        <div className="metric-label">標準セッション長</div>
                    </div>
                </div>

                <div className="sub-header">5.1 ユーザビリティテストの全体フロー（7ステップ）</div>

                {/* 7-step SVG */}
                <div className="svg-wrap">
                    <svg
                        viewBox="0 0 720 300"
                        xmlns="http://www.w3.org/2000/svg"
                        fontFamily="IBM Plex Sans JP, sans-serif"
                    >
                        <rect width="720" height="300" fill="#0d1117" rx="12" />
                        <defs>
                            <marker
                                id="arrD"
                                markerWidth="7"
                                markerHeight="7"
                                refX="5"
                                refY="3.5"
                                orient="auto"
                            >
                                <polygon points="0,0 7,3.5 0,7" fill="#00f5ff" />
                            </marker>
                        </defs>
                        {/* Step boxes */}
                        <rect
                            x="20"
                            y="30"
                            width="90"
                            height="50"
                            rx="6"
                            fill="#1a2332"
                            stroke="#39ff14"
                            strokeWidth="1.5"
                        />
                        <text
                            x="65"
                            y="52"
                            fill="#39ff14"
                            fontSize="10"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            STEP 1
                        </text>
                        <text x="65" y="68" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            目的・スコープ定義
                        </text>

                        <rect
                            x="130"
                            y="30"
                            width="90"
                            height="50"
                            rx="6"
                            fill="#1a2332"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                        />
                        <text
                            x="175"
                            y="52"
                            fill="#00f5ff"
                            fontSize="10"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            STEP 2
                        </text>
                        <text x="175" y="68" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            テスト計画作成
                        </text>

                        <rect
                            x="240"
                            y="30"
                            width="90"
                            height="50"
                            rx="6"
                            fill="#1a2332"
                            stroke="#ffb700"
                            strokeWidth="1.5"
                        />
                        <text
                            x="285"
                            y="52"
                            fill="#ffb700"
                            fontSize="10"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            STEP 3
                        </text>
                        <text x="285" y="68" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            テスト準備
                        </text>

                        <rect
                            x="350"
                            y="30"
                            width="90"
                            height="50"
                            rx="6"
                            fill="#1a2332"
                            stroke="#b44dff"
                            strokeWidth="1.5"
                        />
                        <text
                            x="395"
                            y="52"
                            fill="#b44dff"
                            fontSize="10"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            STEP 4
                        </text>
                        <text x="395" y="68" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            パイロットテスト
                        </text>

                        <rect
                            x="460"
                            y="30"
                            width="90"
                            height="50"
                            rx="6"
                            fill="#1a2332"
                            stroke="#ff2d78"
                            strokeWidth="1.5"
                        />
                        <text
                            x="505"
                            y="52"
                            fill="#ff2d78"
                            fontSize="10"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            STEP 5
                        </text>
                        <text x="505" y="68" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            本番セッション
                        </text>

                        <rect
                            x="570"
                            y="30"
                            width="90"
                            height="50"
                            rx="6"
                            fill="#1a2332"
                            stroke="#39ff14"
                            strokeWidth="1.5"
                        />
                        <text
                            x="615"
                            y="52"
                            fill="#39ff14"
                            fontSize="10"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            STEP 6
                        </text>
                        <text x="615" y="68" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            結果の分析
                        </text>

                        {/* STEP 7 below */}
                        <rect
                            x="285"
                            y="170"
                            width="150"
                            height="50"
                            rx="6"
                            fill="#1a2332"
                            stroke="#00f5ff"
                            strokeWidth="2"
                        />
                        <text
                            x="360"
                            y="192"
                            fill="#00f5ff"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            STEP 7
                        </text>
                        <text x="360" y="208" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            結果・発見の報告
                        </text>

                        {/* Arrows horizontal */}
                        <line
                            x1="110"
                            y1="55"
                            x2="130"
                            y2="55"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                            markerEnd="url(#arrD)"
                        />
                        <line
                            x1="220"
                            y1="55"
                            x2="240"
                            y2="55"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                            markerEnd="url(#arrD)"
                        />
                        <line
                            x1="330"
                            y1="55"
                            x2="350"
                            y2="55"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                            markerEnd="url(#arrD)"
                        />
                        <line
                            x1="440"
                            y1="55"
                            x2="460"
                            y2="55"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                            markerEnd="url(#arrD)"
                        />
                        <line
                            x1="550"
                            y1="55"
                            x2="570"
                            y2="55"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                            markerEnd="url(#arrD)"
                        />
                        {/* Arrow down to step 7 */}
                        <line
                            x1="615"
                            y1="80"
                            x2="615"
                            y2="140"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="615"
                            y1="140"
                            x2="360"
                            y2="140"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="360"
                            y1="140"
                            x2="360"
                            y2="170"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                            markerEnd="url(#arrD)"
                        />
                    </svg>
                </div>

                <div className="sub-header">5.2 テスト計画書の構成要素</div>
                <div className="code-block" data-lang="YAML">
                    <div className="code-line"><span className="code-green">テスト計画書の構成例（ECサイト）:</span></div>
                    <div className="code-line"> </div>
                    <div className="code-line"><span className="code-cyan">1. テストの目的:</span></div>
                    <div className="code-line">  - <span className="code-string">"新しいチェックアウトフローのユーザビリティを評価する"</span></div>
                    <div className="code-line">  - 主要評価観点: <span className="code-amber">有効性・効率性・満足度</span></div>
                    <div className="code-line"> </div>
                    <div className="code-line"><span className="code-cyan">2. テスト対象 (SUT):</span></div>
                    <div className="code-line">  - テストするシステム・バージョン・対象機能・画面範囲</div>
                    <div className="code-line"> </div>
                    <div className="code-line"><span className="code-cyan">3. 参加者プロフィール:</span></div>
                    <div className="code-line">  - 例: <span className="code-string">"週1回以上オンライン購入をする25〜45歳の一般ユーザー"</span></div>
                    <div className="code-line"> </div>
                    <div className="code-line"><span className="code-cyan">4. 参加者数:</span></div>
                    <div className="code-line">  - 形成的テスト（定性・問題発見）: <span className="code-green">5〜8名</span></div>
                    <div className="code-line">  - 総括的テスト（定量・目標確認）: <span className="code-amber">12〜30名以上</span></div>
                    <div className="code-line"> </div>
                    <div className="code-line"><span className="code-cyan">5. 評価指標:</span></div>
                    <div className="code-line">  - タスク完了率: <span className="code-green">≥ 80%</span></div>
                    <div className="code-line">  - SUSスコア: <span className="code-green">≥ 68</span>（業界標準の許容ライン）</div>
                </div>

                <div className="sub-header">5.3 タスクシナリオの設計（試験頻出！）</div>

                <div className="callout info">
                    <strong>✅ 良いタスクシナリオの4条件</strong>
                    ①現実的（Realistic）　②タスクベース（Goal-based,
                    操作指示ではない）　③誘導的でない（Non-leading）　④達成基準が明確（Clear
                    Completion Criteria）
                </div>

                <div className="compare-grid">
                    <div className="compare-col good">
                        <div className="compare-label">✅ 良い例（現実的・ゴールベース）</div>
                        <div className="compare-item">
                            「あなたは最近転職し、会社のメールアドレスが変わりました。このシステムに登録されているメールアドレスを新しいものに更新してください」
                        </div>
                        <div className="compare-item">
                            「友人の誕生日プレゼントに男性用のランニングシューズを探し、サイズ27.5cmを選んで購入してください。予算は1万円以内です」
                        </div>
                    </div>
                    <div className="compare-col bad">
                        <div className="compare-label">❌ 悪い例（操作指示・誘導的）</div>
                        <div className="compare-item">
                            「ナビゲーションメニューから『アカウント』→『プロフィール編集』を選択してください」（答えを教えている！）
                        </div>
                        <div className="compare-item">
                            「プロフィール編集機能はわかりやすいですか？評価してください」（評価的な質問になっている）
                        </div>
                    </div>
                </div>

                <div className="sub-header">5.4 テストセッションの構成（タイムライン）</div>

                {/* Session timeline SVG */}
                <div className="svg-wrap">
                    <svg
                        viewBox="0 0 700 200"
                        xmlns="http://www.w3.org/2000/svg"
                        fontFamily="IBM Plex Sans JP, sans-serif"
                    >
                        <rect width="700" height="200" fill="#0d1117" rx="12" />
                        {/* Timeline */}
                        <rect x="30" y="95" width="640" height="8" rx="4" fill="#1a2332" />
                        {/* Segments */}
                        <rect
                            x="30"
                            y="95"
                            width="70"
                            height="8"
                            rx="2"
                            fill="#00f5ff"
                            opacity="0.8"
                        />
                        <rect
                            x="100"
                            y="95"
                            width="60"
                            height="8"
                            rx="0"
                            fill="#39ff14"
                            opacity="0.8"
                        />
                        <rect
                            x="160"
                            y="95"
                            width="320"
                            height="8"
                            rx="0"
                            fill="#ffb700"
                            opacity="0.9"
                        />
                        <rect
                            x="480"
                            y="95"
                            width="100"
                            height="8"
                            rx="0"
                            fill="#b44dff"
                            opacity="0.8"
                        />
                        <rect
                            x="580"
                            y="95"
                            width="90"
                            height="8"
                            rx="2"
                            fill="#ff2d78"
                            opacity="0.8"
                        />
                        {/* Ticks */}
                        <line x1="30" y1="90" x2="30" y2="108" stroke="#6b7f96" strokeWidth="1" />
                        <line
                            x1="100"
                            y1="90"
                            x2="100"
                            y2="108"
                            stroke="#6b7f96"
                            strokeWidth="1"
                        />
                        <line
                            x1="160"
                            y1="90"
                            x2="160"
                            y2="108"
                            stroke="#6b7f96"
                            strokeWidth="1"
                        />
                        <line
                            x1="480"
                            y1="90"
                            x2="480"
                            y2="108"
                            stroke="#6b7f96"
                            strokeWidth="1"
                        />
                        <line
                            x1="580"
                            y1="90"
                            x2="580"
                            y2="108"
                            stroke="#6b7f96"
                            strokeWidth="1"
                        />
                        <line
                            x1="670"
                            y1="90"
                            x2="670"
                            y2="108"
                            stroke="#6b7f96"
                            strokeWidth="1"
                        />
                        {/* Time labels */}
                        <text x="30" y="80" fill="#6b7f96" fontSize="9" textAnchor="middle">
                            0:00
                        </text>
                        <text x="100" y="80" fill="#6b7f96" fontSize="9" textAnchor="middle">
                            0:10
                        </text>
                        <text x="160" y="80" fill="#6b7f96" fontSize="9" textAnchor="middle">
                            0:20
                        </text>
                        <text x="480" y="80" fill="#6b7f96" fontSize="9" textAnchor="middle">
                            1:10
                        </text>
                        <text x="580" y="80" fill="#6b7f96" fontSize="9" textAnchor="middle">
                            1:25
                        </text>
                        <text x="670" y="80" fill="#6b7f96" fontSize="9" textAnchor="middle">
                            1:30
                        </text>
                        {/* Labels below */}
                        <text
                            x="65"
                            y="122"
                            fill="#00f5ff"
                            fontSize="9"
                            textAnchor="middle"
                            fontWeight="bold"
                        >
                            ① 導入
                        </text>
                        <text
                            x="130"
                            y="122"
                            fill="#39ff14"
                            fontSize="9"
                            textAnchor="middle"
                            fontWeight="bold"
                        >
                            ② 背景
                        </text>
                        <text
                            x="320"
                            y="122"
                            fill="#ffb700"
                            fontSize="9"
                            textAnchor="middle"
                            fontWeight="bold"
                        >
                            ③ メインタスク ★
                        </text>
                        <text
                            x="530"
                            y="122"
                            fill="#b44dff"
                            fontSize="9"
                            textAnchor="middle"
                            fontWeight="bold"
                        >
                            ④ 事後
                        </text>
                        <text
                            x="625"
                            y="122"
                            fill="#ff2d78"
                            fontSize="9"
                            textAnchor="middle"
                            fontWeight="bold"
                        >
                            ⑤ 締め
                        </text>
                        {/* Descriptions */}
                        <text x="65" y="148" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            同意書署名
                        </text>
                        <text x="130" y="148" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            インタビュー
                        </text>
                        <text x="320" y="148" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            Think-Aloud / タスク実行 / 観察記録
                        </text>
                        <text x="530" y="148" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            SUSアンケート
                        </text>
                        <text x="625" y="148" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            謝礼
                        </text>
                        {/* Duration */}
                        <text x="65" y="168" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            5〜10分
                        </text>
                        <text x="130" y="168" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            5〜10分
                        </text>
                        <text x="320" y="168" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            30〜50分
                        </text>
                        <text x="530" y="168" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            10〜15分
                        </text>
                        <text x="625" y="168" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            5分
                        </text>
                    </svg>
                </div>

                <div className="sub-header">5.5 Think-Aloud プロトコル（試験頻出！）</div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>項目</th>
                                <th>同時思考法 (Concurrent TA)</th>
                                <th>追想法 (Retrospective TA)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>タイミング</strong></td>
                                <td>タスク実行「中」に発話</td>
                                <td>タスク完了「後」に録画を見ながら振り返り</td>
                            </tr>
                            <tr>
                                <td><strong>メリット</strong></td>
                                <td>リアルタイムで思考が分かる</td>
                                <td>自然なタスク実行・正確な時間計測が可能</td>
                            </tr>
                            <tr>
                                <td><strong>デメリット</strong></td>
                                <td>認知負荷が増す（不自然）</td>
                                <td>記憶が薄れる・時間がかかる</td>
                            </tr>
                            <tr>
                                <td><strong>用途</strong></td>
                                <td>質的な問題発見</td>
                                <td>定量データ + 補足の質的情報</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="compare-grid">
                    <div className="compare-col good">
                        <div className="compare-label">✅ モデレーターの中立的な促し文句</div>
                        <div className="compare-item">「今何を考えていますか？」</div>
                        <div className="compare-item">「今どう感じましたか？」</div>
                        <div className="compare-item">「今どこを探していますか？」</div>
                    </div>
                    <div className="compare-col bad">
                        <div className="compare-label">❌ モデレーターのNG行動</div>
                        <div className="compare-item">
                            「そのボタンは右にあります」（答えを教えている）
                        </div>
                        <div className="compare-item">
                            「このボタンを見つけにくかったですか？」（誘導的）
                        </div>
                        <div className="compare-item">参加者の前で感情的な反応を示す</div>
                    </div>
                </div>

                <div className="sub-header">5.6 定量メトリクス — SUSスコアの計算</div>

                <div className="code-block" data-lang="Python">
                    <div className="code-line"><span className="code-keyword">def</span> <span className="code-cyan">sus_score</span>(responses: list) -&gt; float:</div>
                    <div className="code-line">    <span className="code-string">""" SUS（System Usability Scale）スコア計算</span></div>
                    <div className="code-line"><span className="code-string">    - 10項目（各1〜5点） → 0〜100点スコアに変換</span></div>
                    <div className="code-line"><span className="code-string">    - 奇数番目（1,3,5,7,9）: スコア = 回答値 - 1</span></div>
                    <div className="code-line"><span className="code-string">    - 偶数番目（2,4,6,8,10）: スコア = 5 - 回答値</span></div>
                    <div className="code-line"><span className="code-string">    - 合計スコア × 2.5 = SUSスコア（0〜100）</span></div>
                    <div className="code-line"><span className="code-string">    """</span></div>
                    <div className="code-line">    <span className="code-keyword">if</span> len(responses) != <span className="code-amber">10</span>:</div>
                    <div className="code-line">        <span className="code-keyword">raise</span> ValueError(<span className="code-string">"SUSは10項目必要です"</span>)</div>
                    <div className="code-line">    </div>
                    <div className="code-line">    total = <span className="code-amber">0</span></div>
                    <div className="code-line">    <span className="code-keyword">for</span> i, r <span className="code-keyword">in</span> enumerate(responses):</div>
                    <div className="code-line">        total += (r - <span className="code-amber">1</span>) <span className="code-keyword">if</span> (i + <span className="code-amber">1</span>) % <span className="code-amber">2</span> == <span className="code-amber">1</span> <span className="code-keyword">else</span> (<span className="code-amber">5</span> - r)</div>
                    <div className="code-line">    </div>
                    <div className="code-line">    <span className="code-keyword">return</span> total * <span className="code-amber">2.5</span></div>
                    <div className="code-line"> </div>
                    <div className="code-line">    <span className="code-green"># 使用例</span></div>
                    <div className="code-line">    responses = [<span className="code-amber">4</span>, <span className="code-amber">2</span>, <span className="code-amber">4</span>, <span className="code-amber">1</span>, <span className="code-amber">4</span>, <span className="code-amber">2</span>, <span className="code-amber">4</span>, <span className="code-amber">2</span>, <span className="code-amber">4</span>, <span className="code-amber">1</span>]</div>
                    <div className="code-line">    <span className="code-keyword">print</span>(sus_score(responses))  <span className="code-gray"># → 85.0 (Good)</span></div>
                </div>

                {/* SUS score scale SVG */}
                <div className="svg-wrap">
                    <svg
                        viewBox="0 0 700 80"
                        xmlns="http://www.w3.org/2000/svg"
                        fontFamily="Space Mono, monospace"
                    >
                        <rect width="700" height="80" fill="#0d1117" rx="8" />
                        {/* Bar background */}
                        <rect x="30" y="25" width="640" height="20" rx="4" fill="#1a2332" />
                        {/* Color segments */}
                        <rect
                            x="30"
                            y="25"
                            width="320"
                            height="20"
                            rx="4"
                            fill="#ff2d78"
                            opacity="0.7"
                        />
                        <rect
                            x="350"
                            y="25"
                            width="60"
                            height="20"
                            rx="0"
                            fill="#ffb700"
                            opacity="0.7"
                        />
                        <rect
                            x="410"
                            y="25"
                            width="70"
                            height="20"
                            rx="0"
                            fill="#39ff14"
                            opacity="0.7"
                        />
                        <rect
                            x="480"
                            y="25"
                            width="90"
                            height="20"
                            rx="0"
                            fill="#00f5ff"
                            opacity="0.7"
                        />
                        <rect
                            x="570"
                            y="25"
                            width="100"
                            height="20"
                            rx="4"
                            fill="#b44dff"
                            opacity="0.7"
                        />
                        {/* Score labels */}
                        <text x="30" y="62" fill="#ff2d78" fontSize="9">0 — Awful</text>
                        <text x="290" y="62" fill="#ffb700" fontSize="9">51 — Poor</text>
                        <text x="345" y="62" fill="#ffb700" fontSize="9">68 — Average ★</text>
                        <text x="425" y="62" fill="#39ff14" fontSize="9">80 — Good</text>
                        <text x="498" y="62" fill="#00f5ff" fontSize="9">90 — Excellent</text>
                        {/* Marker at 68 */}
                        <line x1="350" y1="18" x2="350" y2="52" stroke="#fff" strokeWidth="2" />
                        <text
                            x="350"
                            y="14"
                            fill="#fff"
                            fontSize="9"
                            textAnchor="middle"
                            fontWeight="bold"
                        >
                            ≥68: 許容ライン
                        </text>
                    </svg>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>SUSスコア</th>
                                <th>グレード</th>
                                <th>解釈</th>
                                <th>行動指針</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong className="text-pink">0〜50</strong></td>
                                <td>F — Awful</td>
                                <td>非常に問題がある</td>
                                <td>根本的な再設計が必要</td>
                            </tr>
                            <tr>
                                <td><strong>51〜67</strong></td>
                                <td>D — Poor</td>
                                <td>低品質</td>
                                <td>重大な改善が必要</td>
                            </tr>
                            <tr>
                                <td><strong className="text-amber">68〜79</strong></td>
                                <td>C — Average</td>
                                <td>許容範囲（業界標準のボーダーライン）</td>
                                <td>改善の余地あり</td>
                            </tr>
                            <tr>
                                <td><strong className="text-green">80〜89</strong></td>
                                <td>A/B — Good</td>
                                <td>良好</td>
                                <td>受入可能な品質水準</td>
                            </tr>
                            <tr>
                                <td><strong className="text-cyan">90〜100</strong></td>
                                <td>A+ — Excellent</td>
                                <td>最優秀</td>
                                <td>ユーザーが推薦したい水準</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sub-header">5.7 対面テスト vs リモートテスト</div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>形式</th>
                                <th>メリット</th>
                                <th>デメリット</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>対面ラボテスト<br />(Moderated Lab)</strong>
                                </td>
                                <td>行動観察が詳細 / 非言語情報も収集 / アイトラッキング可能</td>
                                <td>コスト高・時間かかる / 地理的に参加者が制限される</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>リモート有人テスト<br />(Remote Moderated)</strong>
                                </td>
                                <td>地理的制限なし / 自然な環境で実施 / コスト削減</td>
                                <td>技術的問題が起きやすい / 非言語情報が得にくい</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>リモート無人テスト<br />(Remote Unmoderated)</strong>
                                </td>
                                <td>大人数・低コスト / 24時間実施可能 / 速やかに定量データ収集</td>
                                <td>
                                    詳細な観察ができない / Think-Aloudが難しい / 表面的なデータのみ
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sub-header">5.8 報告書の構成とステークホルダーへの伝え方</div>
                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-label">1</span
                        ><span className="arch-title">エグゼクティブサマリー（1ページ）</span
                        ><span className="arch-desc">主要な発見事項TOP 3〜5・推奨改善事項</span>
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">2</span><span className="arch-title">テスト概要</span
                        ><span className="arch-desc"
                            >目的・日時・場所・参加者プロフィール（匿名化）</span
                        >
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">3</span><span className="arch-title">定量的結果</span
                        ><span className="arch-desc">タスク完了率・平均完了時間・SUSスコア</span>
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">4</span
                        ><span className="arch-title">発見した問題リスト（重大度順）</span
                        ><span className="arch-desc">問題ID・証拠・重大度評価・具体的な改善提案</span>
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">5</span
                        ><span className="arch-title"
                            >動画クリップ・スクリーンショット（オプション）</span
                        ><span className="arch-desc">問題を裏付ける具体的な証拠</span>
                    </div>
                </div>

                <div className="callout warning">
                    <strong>📣 非専門家ステークホルダーへの効果的な伝え方</strong>
                    「5人中4人が〇〇でつまずいた」など具体的な数値で示す。参加者の直接発言を引用する。問題の重大度を色で視覚化（赤=致命的、黄=重大、緑=軽微）。<strong>問題だけでなく改善提案もセットで報告する</strong>こと。
                </div>

                <div className="ref-grid">
                    <a
                        href="https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">Nielsen Norman Group</div>
                        <div className="ref-title">なぜ5人のユーザーでテストするだけで十分か</div>
                        <div className="ref-url">
                            nngroup.com/articles/why-you-only-need-to-test-with-5-users/
                        </div>
                    </a>
                    <a
                        href="https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">Usability.gov</div>
                        <div className="ref-title">System Usability Scale（SUS）詳細解説</div>
                        <div className="ref-url">
                            usability.gov/how-to-and-tools/methods/system-usability-scale.html
                        </div>
                    </a>
                    <a href="https://www.usertesting.com/" target="_blank" className="ref-card">
                        <div className="ref-cat">ツール</div>
                        <div className="ref-title">UserTesting — リモートユーザビリティテスト</div>
                        <div className="ref-url">usertesting.com</div>
                    </a>
                    <a href="https://maze.co/" target="_blank" className="ref-card">
                        <div className="ref-cat">ツール</div>
                        <div className="ref-title">Maze — プロトタイプテスト</div>
                        <div className="ref-url">maze.co</div>
                    </a>
                </div>
            </section>

            <hr className="divider" />

            {/* ===== CHAPTER 6 ===== */}
            <section id="ch6">
                <div className="section-header">
                    <span className="chapter-num">Ch.6</span>
                    <span className="klevel">K2 理解</span>
                    <h2>ユーザー調査（標準化アンケート）</h2>
                </div>

                <div className="sub-header">6.1 3つの標準化アンケート比較（試験頻出！）</div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>アンケート</th>
                                <th>項目数</th>
                                <th>費用</th>
                                <th>対象</th>
                                <th>サブスケール</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong className="text-cyan">SUS</strong><br />System Usability
                                    Scale
                                </td>
                                <td>10項目</td>
                                <td>無料</td>
                                <td>汎用（あらゆるシステム）</td>
                                <td>なし（単一スコア 0〜100）</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong className="text-green">SUMI</strong><br />Software Usability
                                    Measurement Inventory
                                </td>
                                <td>50項目</td>
                                <td>有料</td>
                                <td>ソフトウェア全般</td>
                                <td>効率性・情動性・有用性・制御性・学習性</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong className="text-amber">WAMMI</strong><br />Website Analysis
                                    and MeasureMent Inventory
                                </td>
                                <td>20項目</td>
                                <td>有料</td>
                                <td><strong>Webサイト専用</strong></td>
                                <td>魅力性・制御性・効率性・有用性・学習性</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sub-header">6.2 SUSの10設問（計算方法）</div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>設問（和訳）</th>
                                <th>種別</th>
                                <th>計算</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Q1</td>
                                <td>このシステムを頻繁に使いたいと思う</td>
                                <td>肯定</td>
                                <td>回答 - 1</td>
                            </tr>
                            <tr>
                                <td>Q2</td>
                                <td>このシステムは不必要に複雑だと感じた</td>
                                <td>否定</td>
                                <td>5 - 回答</td>
                            </tr>
                            <tr>
                                <td>Q3</td>
                                <td>このシステムは使いやすいと思った</td>
                                <td>肯定</td>
                                <td>回答 - 1</td>
                            </tr>
                            <tr>
                                <td>Q4</td>
                                <td>このシステムを使うには技術サポートが必要だと思う</td>
                                <td>否定</td>
                                <td>5 - 回答</td>
                            </tr>
                            <tr>
                                <td>Q5</td>
                                <td>このシステムの様々な機能はうまく統合されていた</td>
                                <td>肯定</td>
                                <td>回答 - 1</td>
                            </tr>
                            <tr>
                                <td>Q6</td>
                                <td>このシステムには一貫性がなさすぎると感じた</td>
                                <td>否定</td>
                                <td>5 - 回答</td>
                            </tr>
                            <tr>
                                <td>Q7</td>
                                <td>ほとんどの人はすぐにこのシステムの使い方を習得できると思う</td>
                                <td>肯定</td>
                                <td>回答 - 1</td>
                            </tr>
                            <tr>
                                <td>Q8</td>
                                <td>このシステムは非常に使いにくかった</td>
                                <td>否定</td>
                                <td>5 - 回答</td>
                            </tr>
                            <tr>
                                <td>Q9</td>
                                <td>このシステムを使うときは自信を持って操作できた</td>
                                <td>肯定</td>
                                <td>回答 - 1</td>
                            </tr>
                            <tr>
                                <td>Q10</td>
                                <td>このシステムを使い始める前に多くのことを学ぶ必要があった</td>
                                <td>否定</td>
                                <td>5 - 回答</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout info">
                    <strong>📐 計算式</strong>
                    奇数番目（肯定）= 回答値 - 1　｜　偶数番目（否定）= 5 - 回答値<br />
                    <strong>SUSスコア = 全寄与スコアの合計 × 2.5</strong>（0〜100点）
                </div>

                <div className="sub-header">6.3 定量データ vs 定性データ</div>
                <div className="compare-grid">
                    <div className="compare-col good">
                        <div className="compare-label">定量データ — 何がどれだけ悪いか</div>
                        <div className="compare-item">タスク完了率（例: 80%）</div>
                        <div className="compare-item">SUSスコア（例: 72）</div>
                        <div className="compare-item">平均完了時間（例: 45秒）</div>
                        <div className="compare-item">ベンチマーク比較に有効</div>
                    </div>
                    <div className="compare-col bad">
                        <div className="compare-label">定性データ — なぜ悪いか</div>
                        <div className="compare-item">「ボタンの場所が分からなかった」</div>
                        <div className="compare-item">「なぜここに戻るボタンがないの？」</div>
                        <div className="compare-item">ユーザーの感情・思考プロセス</div>
                        <div className="compare-item">問題の根本原因理解に有効</div>
                    </div>
                </div>

                <div className="ref-grid">
                    <a href="http://sumi.ucc.ie/" target="_blank" className="ref-card">
                        <div className="ref-cat">アンケートツール</div>
                        <div className="ref-title">SUMI — Software Usability Measurement Inventory</div>
                        <div className="ref-url">sumi.ucc.ie</div>
                    </a>
                    <a href="https://www.wammi.com/" target="_blank" className="ref-card">
                        <div className="ref-cat">アンケートツール</div>
                        <div className="ref-title">
                            WAMMI — Website Analysis and MeasureMent Inventory
                        </div>
                        <div className="ref-url">wammi.com</div>
                    </a>
                </div>
            </section>

            <hr className="divider" />

            {/* ===== CHAPTER 7 ===== */}
            <section id="ch7">
                <div className="section-header">
                    <span className="chapter-num">Ch.7</span>
                    <span className="klevel">K2 理解</span>
                    <h2>適切な手法の選択</h2>
                </div>

                <div className="sub-header">7.1 手法選択フロー</div>

                {/* Decision flow SVG */}
                <div className="svg-wrap">
                    <svg
                        viewBox="0 0 700 320"
                        xmlns="http://www.w3.org/2000/svg"
                        fontFamily="IBM Plex Sans JP, sans-serif"
                    >
                        <rect width="700" height="320" fill="#0d1117" rx="12" />
                        <defs>
                            <marker
                                id="arrF-green"
                                markerWidth="7"
                                markerHeight="7"
                                refX="5"
                                refY="3.5"
                                orient="auto"
                            >
                                <polygon points="0,0 7,3.5 0,7" fill="#39ff14" />
                            </marker>
                            <marker
                                id="arrF-amber"
                                markerWidth="7"
                                markerHeight="7"
                                refX="5"
                                refY="3.5"
                                orient="auto"
                            >
                                <polygon points="0,0 7,3.5 0,7" fill="#ffb700" />
                            </marker>
                        </defs>
                        {/* Start */}
                        <rect
                            x="260"
                            y="20"
                            width="180"
                            height="38"
                            rx="20"
                            fill="#1a2332"
                            stroke="#00f5ff"
                            strokeWidth="1.5"
                        />
                        <text
                            x="350"
                            y="44"
                            fill="#00f5ff"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            評価の主目的は？
                        </text>
                        {/* Branch arrows: green left, amber right */}
                        <line
                            x1="260"
                            y1="39"
                            x2="140"
                            y2="95"
                            stroke="#39ff14"
                            strokeWidth="1.5"
                            markerEnd="url(#arrF-green)"
                        />
                        <line
                            x1="440"
                            y1="39"
                            x2="560"
                            y2="95"
                            stroke="#ffb700"
                            strokeWidth="1.5"
                            markerEnd="url(#arrF-amber)"
                        />
                        <text x="175" y="75" fill="#39ff14" fontSize="9">問題を発見</text>
                        <text x="470" y="75" fill="#ffb700" fontSize="9">測定・確認</text>
                        {/* Left branch: real users? */}
                        <rect
                            x="40"
                            y="95"
                            width="180"
                            height="38"
                            rx="6"
                            fill="#1a2332"
                            stroke="#39ff14"
                            strokeWidth="1"
                        />
                        <text x="130" y="119" fill="#39ff14" fontSize="10" textAnchor="middle">
                            実ユーザー使えるか？
                        </text>
                        {/* Left-left */}
                        <line
                            x1="80"
                            y1="133"
                            x2="60"
                            y2="185"
                            stroke="#39ff14"
                            strokeWidth="1.5"
                            markerEnd="url(#arrF-green)"
                        />
                        <text x="50" y="168" fill="#a8b8cc" fontSize="9">はい</text>
                        <rect
                            x="10"
                            y="185"
                            width="130"
                            height="40"
                            rx="6"
                            fill="rgba(57,255,20,0.1)"
                            stroke="#39ff14"
                            strokeWidth="1.5"
                        />
                        <text
                            x="75"
                            y="202"
                            fill="#39ff14"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            ユーザビリティ
                        </text>
                        <text
                            x="75"
                            y="216"
                            fill="#39ff14"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            テスト
                        </text>
                        {/* Left-right */}
                        <line
                            x1="180"
                            y1="133"
                            x2="200"
                            y2="185"
                            stroke="#39ff14"
                            strokeWidth="1.5"
                            markerEnd="url(#arrF-green)"
                        />
                        <text x="210" y="168" fill="#a8b8cc" fontSize="9">いいえ</text>
                        <rect
                            x="145"
                            y="185"
                            width="130"
                            height="40"
                            rx="6"
                            fill="rgba(57,255,20,0.08)"
                            stroke="#39ff14"
                            strokeWidth="1"
                        />
                        <text x="210" y="202" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            ヒューリスティック
                        </text>
                        <text x="210" y="216" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            評価 / CW
                        </text>
                        {/* Right branch: need quantitative? */}
                        <rect
                            x="480"
                            y="95"
                            width="180"
                            height="38"
                            rx="6"
                            fill="#1a2332"
                            stroke="#ffb700"
                            strokeWidth="1"
                        />
                        <text x="570" y="119" fill="#ffb700" fontSize="10" textAnchor="middle">
                            定量データが必要か？
                        </text>
                        {/* Right-left */}
                        <line
                            x1="520"
                            y1="133"
                            x2="490"
                            y2="185"
                            stroke="#ffb700"
                            strokeWidth="1.5"
                            markerEnd="url(#arrF-amber)"
                        />
                        <text x="480" y="168" fill="#a8b8cc" fontSize="9">はい</text>
                        <rect
                            x="380"
                            y="185"
                            width="170"
                            height="55"
                            rx="6"
                            fill="rgba(255,183,0,0.08)"
                            stroke="#ffb700"
                            strokeWidth="1"
                        />
                        <text
                            x="465"
                            y="205"
                            fill="#ffb700"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            SUS / SUMI / WAMMI
                        </text>
                        <text x="465" y="220" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            ソフトウェア全般 → SUS/SUMI
                        </text>
                        <text x="465" y="233" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            Webサイト専用 → WAMMI
                        </text>
                        {/* Right-right */}
                        <line
                            x1="620"
                            y1="133"
                            x2="640"
                            y2="185"
                            stroke="#ffb700"
                            strokeWidth="1.5"
                            markerEnd="url(#arrF-amber)"
                        />
                        <text x="640" y="168" fill="#a8b8cc" fontSize="9">いいえ</text>
                        <rect
                            x="575"
                            y="185"
                            width="110"
                            height="40"
                            rx="6"
                            fill="rgba(255,183,0,0.06)"
                            stroke="#ffb700"
                            strokeWidth="1"
                        />
                        <text x="630" y="202" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            専門家評価
                        </text>
                        <text x="630" y="216" fill="#a8b8cc" fontSize="9" textAnchor="middle">
                            / アンケート
                        </text>
                        {/* WCAG note */}
                        <rect
                            x="250"
                            y="255"
                            width="200"
                            height="40"
                            rx="6"
                            fill="rgba(180,77,255,0.08)"
                            stroke="#b44dff"
                            strokeWidth="1"
                        />
                        <text
                            x="350"
                            y="272"
                            fill="#b44dff"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            アクセシビリティが必要
                        </text>
                        <text x="350" y="287" fill="#a8b8cc" fontSize="8" textAnchor="middle">
                            → WCAG 2.2 / ISO/IEC 40500:2025
                        </text>
                    </svg>
                </div>

                <div className="sub-header">7.2 手法選択マトリクス</div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>状況・目的</th>
                                <th>推奨手法</th>
                                <th>理由</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>早期（要件・設計段階）</td>
                                <td>ヒューリスティック評価 / 認知的ウォークスルー</td>
                                <td>実ユーザー不要・低コスト</td>
                            </tr>
                            <tr>
                                <td>中期（プロトタイプ段階）</td>
                                <td>ユーザビリティテスト（形成的）</td>
                                <td>実際の使い方を観察</td>
                            </tr>
                            <tr>
                                <td>後期（リリース前後）</td>
                                <td>総括的テスト + SUS / SUMI</td>
                                <td>目標達成の定量的確認</td>
                            </tr>
                            <tr>
                                <td>時間・予算が限られている</td>
                                <td>ヒューリスティック評価 + SUS</td>
                                <td>コスト低・速い</td>
                            </tr>
                            <tr>
                                <td>Webサイトの満足度測定</td>
                                <td>WAMMI</td>
                                <td>Webサイト専用に最適化</td>
                            </tr>
                            <tr>
                                <td>アクセシビリティ確認</td>
                                <td>WCAG 2.2 評価（ISO/IEC 40500:2025）</td>
                                <td>国際標準に基づく評価</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <hr className="divider" />

            {/* ===== CHAPTER 8 ===== */}
            <section id="ch8">
                <div className="section-header">
                    <span className="chapter-num">Ch.8</span>
                    <span className="klevel">K2 理解</span>
                    <h2>役割と責任</h2>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>役割</th>
                                <th>主な責任</th>
                                <th>NG行動</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong className="text-cyan">モデレーター<br />(Moderator)</strong>
                                </td>
                                <td>
                                    セッションの進行・Think-Aloudの促進 /
                                    中立的な質問・時間管理・事後インタビュー
                                </td>
                                <td>答えを教える / 誘導的な質問をする / 感情的な反応を示す</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong className="text-green"
                                        >ノートテイカー<br />(Note-Taker)</strong
                                    >
                                </td>
                                <td>
                                    参加者の行動・発言の詳細記録 / エラー・詰まった箇所の記録 /
                                    タスク完了時間の計測
                                </td>
                                <td>評価・判断を加えた主観的記録 / 記録を途中でやめる</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong className="text-amber"
                                        >ユーザビリティテスター<br />(Usability Tester)</strong
                                    >
                                </td>
                                <td>
                                    テスト計画書の作成・タスクシナリオ設計 /
                                    参加者リクルート・データ分析・報告書作成 /
                                    ステークホルダーへのプレゼン
                                </td>
                                <td>
                                    参加者リクルートのスクリーニング省略 /
                                    パイロットテストを実施しない
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sub-header">品質のコスト（Cost of Quality）</div>

                {/* Cost escalation SVG */}
                <div className="svg-wrap">
                    <svg
                        viewBox="0 0 700 180"
                        xmlns="http://www.w3.org/2000/svg"
                        fontFamily="IBM Plex Sans JP, sans-serif"
                    >
                        <rect width="700" height="180" fill="#0d1117" rx="12" />
                        <defs>
                            <linearGradient id="costGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#39ff14" stopOpacity="0.7" />
                                <stop offset="100%" stopColor="#ff2d78" stopOpacity="0.9" />
                            </linearGradient>
                        </defs>
                        {/* Baseline */}
                        <line
                            x1="30"
                            y1="145"
                            x2="680"
                            y2="145"
                            stroke="#1a2332"
                            strokeWidth="1"
                        />
                        {/* Bars */}
                        <rect x="50" y="130" width="70" height="15" rx="2" fill="url(#costGrad)" />
                        <rect x="170" y="100" width="70" height="45" rx="2" fill="url(#costGrad)" />
                        <rect x="290" y="65" width="70" height="80" rx="2" fill="url(#costGrad)" />
                        <rect x="410" y="40" width="70" height="105" rx="2" fill="url(#costGrad)" />
                        <rect x="530" y="15" width="70" height="130" rx="2" fill="url(#costGrad)" />
                        {/* Labels */}
                        <text
                            x="85"
                            y="125"
                            fill="#39ff14"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            ×1
                        </text>
                        <text
                            x="205"
                            y="95"
                            fill="#a8b8cc"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            ×5
                        </text>
                        <text
                            x="325"
                            y="60"
                            fill="#ffb700"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            ×10
                        </text>
                        <text
                            x="445"
                            y="35"
                            fill="#ff6d00"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            ×50
                        </text>
                        <text
                            x="565"
                            y="10"
                            fill="#ff2d78"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            ×100
                        </text>
                        {/* Phase names */}
                        <text x="85" y="162" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            要件定義
                        </text>
                        <text x="205" y="162" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            設計
                        </text>
                        <text x="325" y="162" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            実装
                        </text>
                        <text x="445" y="162" fill="#6b7f96" fontSize="8" textAnchor="middle">
                            テスト
                        </text>
                        <text x="565" y="162" fill="#ff2d78" fontSize="8" textAnchor="middle">
                            本番環境
                        </text>
                    </svg>
                </div>

                <div className="callout danger">
                    <strong>🚨 本番環境で発見するコストは設計段階の100倍！</strong>
                    ユーザビリティ評価への早期投資は、本番後の修正コストを劇的に削減する最も効果的な品質保証手段です。
                </div>
            </section>

            <hr className="divider" />

            {/* ===== EXAM SECTION ===== */}
            <section id="exam">
                <div className="section-header">
                    <h2>📝 試験対策 — サンプル問題 &amp; チェックリスト</h2>
                </div>

                <div className="sub-header">章別配点（推定）</div>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-chapter">Ch.1 基本概念</div>
                        <div className="exam-title">
                            ユーザビリティ定義・3アプローチ・形成的vs総括的
                        </div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-pts">~7問 <span>/ 40問</span></div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Ch.2 リスク</div>
                        <div className="exam-title">6カテゴリ・重大度スケール0〜4</div>
                        <div className="exam-stars">★★★☆☆</div>
                        <div className="exam-pts">~4問 <span>/ 40問</span></div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Ch.3 標準規格</div>
                        <div className="exam-title">WCAG POUR / ISO 9241 / 7対話原則</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-pts">~5問 <span>/ 40問</span></div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Ch.4 レビュー</div>
                        <div className="exam-title">10ヒューリスティック・重大度・CW</div>
                        <div className="exam-stars">★★★★★</div>
                        <div className="exam-pts">~7問 <span>/ 40問</span></div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Ch.5 ユーザビリティテスト</div>
                        <div className="exam-title">
                            7ステップ・タスクシナリオ・Think-Aloud・SUS計算
                        </div>
                        <div className="exam-stars">★★★★★</div>
                        <div className="exam-pts">~10問 <span>/ 40問</span></div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Ch.6 アンケート</div>
                        <div className="exam-title">SUS / SUMI / WAMMI の違い</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-pts">~5問 <span>/ 40問</span></div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Ch.7 手法選択</div>
                        <div className="exam-title">デシジョンマトリクス</div>
                        <div className="exam-stars">★★★☆☆</div>
                        <div className="exam-pts">~2問 <span>/ 40問</span></div>
                    </div>
                </div>

                <div className="sub-header">必ず覚えるキーコンセプト</div>
                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-label">必須</span
                        ><span className="arch-title">ユーザビリティの3要素</span
                        ><span className="arch-desc"
                            >有効性（Effectiveness）/ 効率性（Efficiency）/
                            満足度（Satisfaction）</span
                        >
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">必須</span
                        ><span className="arch-title">評価の3アプローチ</span
                        ><span className="arch-desc"
                            >ユーザビリティレビュー / テスト / ユーザー調査（アンケート）</span
                        >
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">必須</span
                        ><span className="arch-title">形成的 vs 総括的の違い</span
                        ><span className="arch-desc"
                            >形成的：開発中・改善・定性・少人数　/　総括的：開発後・検証・定量・多人数</span
                        >
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">必須</span
                        ><span className="arch-title">ニールセンの10ヒューリスティック</span
                        ><span className="arch-desc">全10原則を名称と具体例ともに記憶すること</span>
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">必須</span
                        ><span className="arch-title">WCAG 2.2 4原則（POUR）</span
                        ><span className="arch-desc"
                            >Perceivable / Operable / Understandable / Robust　= ISO/IEC
                            40500:2025</span
                        >
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">必須</span
                        ><span className="arch-title">SUS / SUMI / WAMMI の違い</span
                        ><span className="arch-desc"
                            >SUS:10項目・汎用・無料 / SUMI:50項目・ソフトウェア・有料 /
                            WAMMI:20項目・Web専用・有料</span
                        >
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">必須</span
                        ><span className="arch-title">SUSスコア 68 がボーダーライン</span
                        ><span className="arch-desc">68未満は改善が必要。90以上はExcellent</span>
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">必須</span
                        ><span className="arch-title">Think-Aloud の2種類</span
                        ><span className="arch-desc"
                            >同時思考法（Concurrent）/ 追想法（Retrospective）</span
                        >
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">必須</span
                        ><span className="arch-title">良いタスクシナリオの4条件</span
                        ><span className="arch-desc"
                            >現実的・タスクベース・非誘導的・明確な完了基準</span
                        >
                    </div>
                    <div className="arch-row">
                        <span className="arch-label">必須</span
                        ><span className="arch-title">ISO 9241-110 の7対話原則</span
                        ><span className="arch-desc"
                            >タスク適合性 / 自己記述性 / 一致性 / 学習支援性 / 制御可能性 /
                            エラー耐性 / 個人化適合性</span
                        >
                    </div>
                </div>

                <div className="sub-header">サンプル問題と解説</div>

                <div className="trend-card">
                    <div className="trend-tag">問1 — K2 / Ch.1</div>
                    <div className="trend-title">
                        ISO 9241-11 が定義するユーザビリティの3要素として正しいものはどれか？
                    </div>
                    <p>
                        A) 有効性・効率性・使いやすさ　B)
                        <strong className="text-green">有効性・効率性・満足度</strong>　C)
                        信頼性・有効性・満足度　D) 学習性・効率性・満足度
                    </p>
                    <p style={{color: "#39ff14", marginTop: "0.5rem"}}>
                        <strong>✅ 正解: B</strong> — ISO 9241-11:2018
                        では「有効性（Effectiveness）・効率性（Efficiency）・満足度（Satisfaction）」の3要素で定義されています。
                    </p>
                </div>

                <div className="trend-card">
                    <div className="trend-tag">問2 — K3 / Ch.4</div>
                    <div className="trend-title">
                        ユーザーが「ファイルの削除」を誤操作したが、元に戻す手段がない。これはどのヒューリスティックに違反しているか？
                    </div>
                    <p>
                        A) システム状態の可視性　B)
                        <strong className="text-green">ユーザーコントロールと自由</strong>　C)
                        エラーの予防　D) 一貫性と標準
                    </p>
                    <p style={{color: "#39ff14", marginTop: "0.5rem"}}>
                        <strong>✅ 正解: B</strong> —
                        「ユーザーコントロールと自由」は誤操作した際に「緊急出口（Undo等）」を提供することを要求します。なお、CのエラーPREVENTIONは「削除確認ダイアログがない」場合の違反です（今回は回復の問題）。
                    </p>
                </div>

                <div className="trend-card">
                    <div className="trend-tag">問3 — K2 / Ch.5</div>
                    <div className="trend-title">
                        形成的ユーザビリティテストの主な目的として最も正しいものはどれか？
                    </div>
                    <p>
                        A) 製品が品質基準を達成しているかを確認するため　B)
                        競合製品と自社製品を比較するため<br />C)
                        <strong className="text-green"
                            >開発中に製品を改善するためのユーザビリティ問題を発見するため</strong
                        >　D) 多数ユーザーの全体的な満足度を定量的に測定するため
                    </p>
                    <p style={{color: "#39ff14", marginTop: "0.5rem"}}>
                        <strong>✅ 正解: C</strong> —
                        形成的評価は開発「中」に問題を発見して改善することが目的。A・Dは総括的評価の目的です。
                    </p>
                </div>

                <div className="trend-card">
                    <div className="trend-tag">問4 — K3 / Ch.5</div>
                    <div className="trend-title">タスクシナリオとして最も適切なものはどれか？</div>
                    <p>
                        A) 「ナビゲーションメニューから『プロフィール編集』を選択してください」<br />B)
                        <strong className="text-green"
                            >「あなたは転職し、メールアドレスが変わりました。システムの登録情報を更新してください」</strong
                        ><br />C) 「プロフィール編集機能はわかりやすいですか？評価してください」<br />D)
                        「メールアドレスを変更してください」
                    </p>
                    <p style={{color: "#39ff14", marginTop: "0.5rem"}}>
                        <strong>✅ 正解: B</strong> —
                        現実的・ゴールベース・非誘導的の全条件を満たすのはBのみ。A=操作を直接指示、C=評価的な質問、D=文脈がない。
                    </p>
                </div>

                <div className="trend-card">
                    <div className="trend-tag">問5 — K2 / Ch.6</div>
                    <div className="trend-title">SUSに関して最も正確な説明はどれか？</div>
                    <p>
                        A) SUSスコア68は「良好（Good）」と評価される　B)
                        <strong className="text-green"
                            >SUSスコア68は一般的に「許容範囲」のボーダーラインとされている</strong
                        ><br />C) SUSは100項目からなるユーザビリティアンケートである　D)
                        SUSはWebサイトの評価にのみ使用できる
                    </p>
                    <p style={{color: "#39ff14", marginTop: "0.5rem"}}>
                        <strong>✅ 正解: B</strong> —
                        SUSスコア68はAverage（許容範囲）の下限。SUSは「10項目」で汎用。WebサイトはWAMMI。
                    </p>
                </div>
            </section>

            <hr className="divider" />

            {/* ===== REFERENCES ===== */}
            <section id="refs">
                <div className="section-header">
                    <h2>📚 参考文献・リソース一覧（全件）</h2>
                </div>

                <div className="h3">🏛️ ISTQB® 公式リソース</div>
                <div className="ref-grid">
                    <a
                        href="https://istqb.org/certifications/certified-tester-usability-testing-ct-ut/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISTQB 公式 — 一次情報源</div>
                        <div className="ref-title">CT-UT 公式認定ページ</div>
                        <div className="ref-url">
                            istqb.org/certifications/certified-tester-usability-testing-ct-ut/
                        </div>
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&download_id=3607"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISTQB 公式</div>
                        <div className="ref-title">CT-UT シラバス v1.0 ダウンロード</div>
                        <div className="ref-url">
                            istqb.org/?sdm_process_download=1&amp;download_id=3607
                        </div>
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&download_id=3608"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISTQB 公式</div>
                        <div className="ref-title">サンプル試験問題 v1.2</div>
                        <div className="ref-url">
                            istqb.org/?sdm_process_download=1&amp;download_id=3608
                        </div>
                    </a>
                    <a
                        href="https://isqi.org/ISTQB-Certified-Tester-Usability-Testing-CT-UT/CT-UT.1405"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">試験プロバイダー</div>
                        <div className="ref-title">iSQI — CT-UT 試験情報</div>
                        <div className="ref-url">
                            isqi.org/ISTQB-Certified-Tester-Usability-Testing-CT-UT/CT-UT.1405
                        </div>
                    </a>
                    <a
                        href="https://glossary.istqb.org/en_US/search?term="
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISTQB 公式</div>
                        <div className="ref-title">ISTQB グロッサリー</div>
                        <div className="ref-url">glossary.istqb.org/en_US/search</div>
                    </a>
                    <a
                        href="https://astqb.org/certifications/usability-tester-certification/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">試験プロバイダー</div>
                        <div className="ref-title">ASTQB（米国 CT-UT）</div>
                        <div className="ref-url">
                            astqb.org/certifications/usability-tester-certification/
                        </div>
                    </a>
                </div>

                <div className="h3">📐 ISO 標準規格</div>
                <div className="ref-grid">
                    <a
                        href="https://www.iso.org/standard/63500.html"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISO 標準</div>
                        <div className="ref-title">ISO 9241-11:2018 — ユーザビリティの定義</div>
                        <div className="ref-url">iso.org/standard/63500.html</div>
                    </a>
                    <a
                        href="https://www.iso.org/standard/77520.html"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISO 標準</div>
                        <div className="ref-title">ISO 9241-210:2019 — HCD プロセス</div>
                        <div className="ref-url">iso.org/standard/77520.html</div>
                    </a>
                    <a
                        href="https://www.iso.org/standard/75258.html"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISO 標準</div>
                        <div className="ref-title">ISO 9241-110:2020 — 対話原則（7原則）</div>
                        <div className="ref-url">iso.org/standard/75258.html</div>
                    </a>
                    <a
                        href="https://www.iso.org/standard/78176.html"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">ISO 標準</div>
                        <div className="ref-title">ISO/IEC 25010:2023 — ソフトウェア品質モデル</div>
                        <div className="ref-url">iso.org/standard/78176.html</div>
                    </a>
                </div>

                <div className="h3">♿ WCAG / アクセシビリティ最新情報（2025年）</div>
                <div className="ref-grid">
                    <a href="https://www.w3.org/TR/WCAG22/" target="_blank" className="ref-card">
                        <div className="ref-cat">W3C 公式</div>
                        <div className="ref-title">WCAG 2.2 — Web Content Accessibility Guidelines</div>
                        <div className="ref-url">w3.org/TR/WCAG22/</div>
                    </a>
                    <a
                        href="https://www.w3.org/WAI/news/2025-10-21/wcag22-iso/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">W3C WAI ニュース ★2025年最新</div>
                        <div className="ref-title">
                            ISO/IEC 40500:2025 正式承認発表（2025年10月21日）
                        </div>
                        <div className="ref-url">w3.org/WAI/news/2025-10-21/wcag22-iso/</div>
                    </a>
                    <a
                        href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">W3C WAI</div>
                        <div className="ref-title">WCAG 2 概要（W3C WAI）</div>
                        <div className="ref-url">w3.org/WAI/standards-guidelines/wcag/</div>
                    </a>
                    <a
                        href="https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">W3C WAI</div>
                        <div className="ref-title">WCAG 2.2 新規追加9項目の解説</div>
                        <div className="ref-url">w3.org/WAI/standards-guidelines/wcag/new-in-22/</div>
                    </a>
                </div>

                <div className="h3">🔍 ヒューリスティック評価</div>
                <div className="ref-grid">
                    <a
                        href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">Nielsen Norman Group</div>
                        <div className="ref-title">
                            ニールセンの10ヒューリスティック（2024年1月更新版）
                        </div>
                        <div className="ref-url">nngroup.com/articles/ten-usability-heuristics/</div>
                    </a>
                    <a
                        href="https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">Nielsen Norman Group</div>
                        <div className="ref-title">ヒューリスティック評価の実施方法</div>
                        <div className="ref-url">
                            nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/
                        </div>
                    </a>
                    <a
                        href="https://www.nngroup.com/articles/cognitive-walkthroughs/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">Nielsen Norman Group</div>
                        <div className="ref-title">認知的ウォークスルーの詳細解説</div>
                        <div className="ref-url">nngroup.com/articles/cognitive-walkthroughs/</div>
                    </a>
                    <a
                        href="https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">Nielsen Norman Group</div>
                        <div className="ref-title">ユーザビリティ問題の重大度評価</div>
                        <div className="ref-url">
                            nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/
                        </div>
                    </a>
                </div>

                <div className="h3">📊 標準化アンケート</div>
                <div className="ref-grid">
                    <a
                        href="https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">Usability.gov</div>
                        <div className="ref-title">SUS — System Usability Scale 詳細解説</div>
                        <div className="ref-url">
                            usability.gov/how-to-and-tools/methods/system-usability-scale.html
                        </div>
                    </a>
                    <a href="http://sumi.ucc.ie/" target="_blank" className="ref-card">
                        <div className="ref-cat">アンケートツール</div>
                        <div className="ref-title">SUMI — Software Usability Measurement Inventory</div>
                        <div className="ref-url">sumi.ucc.ie</div>
                    </a>
                    <a href="https://www.wammi.com/" target="_blank" className="ref-card">
                        <div className="ref-cat">アンケートツール</div>
                        <div className="ref-title">
                            WAMMI — Website Analysis and MeasureMent Inventory
                        </div>
                        <div className="ref-url">wammi.com</div>
                    </a>
                </div>

                <div className="h3">🎨 UX・ユーザビリティ学習リソース</div>
                <div className="ref-grid">
                    <a href="https://www.nngroup.com/" target="_blank" className="ref-card">
                        <div className="ref-cat">UX 学習</div>
                        <div className="ref-title">Nielsen Norman Group — 業界最高水準のUX知識</div>
                        <div className="ref-url">nngroup.com</div>
                    </a>
                    <a
                        href="https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">Nielsen Norman Group</div>
                        <div className="ref-title">なぜ5人のユーザーでテストするだけで十分か</div>
                        <div className="ref-url">
                            nngroup.com/articles/why-you-only-need-to-test-with-5-users/
                        </div>
                    </a>
                    <a href="https://www.usability.gov/" target="_blank" className="ref-card">
                        <div className="ref-cat">UX 学習</div>
                        <div className="ref-title">Usability.gov — 米国政府UXガイドライン</div>
                        <div className="ref-url">usability.gov</div>
                    </a>
                    <a href="https://www.interaction-design.org/" target="_blank" className="ref-card">
                        <div className="ref-cat">UX 学習</div>
                        <div className="ref-title">Interaction Design Foundation</div>
                        <div className="ref-url">interaction-design.org</div>
                    </a>
                </div>

                <div className="h3">🔧 ユーザビリティテストツール（2025年）</div>
                <div className="ref-grid">
                    <a href="https://www.usertesting.com/" target="_blank" className="ref-card">
                        <div className="ref-cat">ツール</div>
                        <div className="ref-title">UserTesting — リモートユーザビリティテスト</div>
                        <div className="ref-url">usertesting.com</div>
                    </a>
                    <a href="https://maze.co/" target="_blank" className="ref-card">
                        <div className="ref-cat">ツール</div>
                        <div className="ref-title">Maze — プロトタイプテスト・ユーザー調査</div>
                        <div className="ref-url">maze.co</div>
                    </a>
                    <a href="https://www.lookback.com/" target="_blank" className="ref-card">
                        <div className="ref-cat">ツール</div>
                        <div className="ref-title">Lookback — リモートユーザーインタビュー</div>
                        <div className="ref-url">lookback.com</div>
                    </a>
                    <a href="https://lyssna.com/" target="_blank" className="ref-card">
                        <div className="ref-cat">ツール</div>
                        <div className="ref-title">Lyssna（旧UsabilityHub）— 5秒テスト</div>
                        <div className="ref-url">lyssna.com</div>
                    </a>
                    <a href="https://www.hotjar.com/" target="_blank" className="ref-card">
                        <div className="ref-cat">ツール</div>
                        <div className="ref-title">Hotjar — ヒートマップ・セッション録画</div>
                        <div className="ref-url">hotjar.com</div>
                    </a>
                    <a href="https://www.optimalworkshop.com/" target="_blank" className="ref-card">
                        <div className="ref-cat">ツール</div>
                        <div className="ref-title">Optimal Workshop — カードソーティング</div>
                        <div className="ref-url">optimalworkshop.com</div>
                    </a>
                </div>

                <div className="h3">📖 プラットフォームUIガイドライン</div>
                <div className="ref-grid">
                    <a
                        href="https://developer.apple.com/design/human-interface-guidelines/"
                        target="_blank"
                        className="ref-card"
                    >
                        <div className="ref-cat">メーカーガイドライン</div>
                        <div className="ref-title">Apple Human Interface Guidelines</div>
                        <div className="ref-url">
                            developer.apple.com/design/human-interface-guidelines/
                        </div>
                    </a>
                    <a href="https://m3.material.io/" target="_blank" className="ref-card">
                        <div className="ref-cat">メーカーガイドライン</div>
                        <div className="ref-title">Google Material Design 3</div>
                        <div className="ref-url">m3.material.io</div>
                    </a>
                    <a href="https://fluent2.microsoft.design/" target="_blank" className="ref-card">
                        <div className="ref-cat">メーカーガイドライン</div>
                        <div className="ref-title">Microsoft Fluent Design System</div>
                        <div className="ref-url">fluent2.microsoft.design</div>
                    </a>
                </div>
            </section>

            {/* FOOTER */}
            <div className="card" style={{textAlign: "center", marginTop: "2rem"}}>
                <p
                    style={{fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", color: "var(--text-muted)"}}
                >
                    ISTQB® CT-UT v1.0 完全ガイド 2025<br />
                    情報は執筆時点の最新データに基づきます。最終確認は必ず
                    <a
                        href="https://istqb.org/certifications/certified-tester-usability-testing-ct-ut/"
                        target="_blank"
                        >ISTQB公式サイト</a
                    >で行ってください。<br />
                    本ガイドはISTQB®が公認したトレーニング資料ではありません。
                </p>
            </div>
        </div>
        {/* /container */}
        
        </div>
    );
}
