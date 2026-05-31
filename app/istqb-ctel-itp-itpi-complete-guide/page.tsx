
import './istqb-ctel-itp-itpi-complete-guide.css';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';

export default function IstqbCtelItpItpiCompleteGuide() {
    return (
        <>
            <NavBar />
            {/* ─── HERO ─── */}
            <section className="hero" id="top">
                <div className="hero-glow" aria-hidden="true"></div>
                <div className="hero-badge">ISTQB® Expert Level Certification</div>
                <h1 className="hero-title">
                    <span>CTEL-ITP-ITPI</span><br />テストプロセス改善<br />実装 完全ガイド
                </h1>
                <p className="hero-sub">
                    Implementing Test Process Improvement —
                    テストプロセスを組織で実装・推進するエキスパートレベル認定資格（シラバス v2011
                    準拠）の初学者向けステップバイステップ解説
                </p>
                <div className="hero-meta">
                    <div className="hm">
                        <span className="label">試験形式</span><span className="val">MCQ（多肢選択）</span>
                    </div>
                    <div className="hm">
                        <span className="label">認知レベル</span><span className="val">K5 / K6 中心</span>
                    </div>
                    <div className="hm">
                        <span className="label">前提資格</span><span className="val">CTFL + CTAL-TM</span>
                    </div>
                    <div className="hm">
                        <span className="label">実務経験</span
                        ><span className="val">テスト5年 / PI 2年</span>
                    </div>
                    <div className="hm">
                        <span className="label">有効期間</span><span className="val">7年（更新要）</span>
                    </div>
                    <div className="hm">
                        <span className="label">Part 構成</span
                        ><span className="val">ATP (Part1) + ITPI (Part2)</span>
                    </div>
                </div>
            </section>

            {/* ─── TOC ─── */}
            <section className="sec" id="toc">
                <div className="chapter-num">目次</div>
                <h2>学習ロードマップ</h2>
                <p style={{color: "var(--text-muted)"}}>
                    全10章。Part 1（ATP）は Ch.2〜5、Part 2（ITPI）は Ch.6〜10 が中心です。★★★ が
                    ITPI 試験の最重要章です。
                </p>

                {/* SVG Roadmap */}
                <svg
                    viewBox="0 0 900 110"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="学習ロードマップ"
                    style={{width: "100%", margin: "1.5rem 0", borderRadius: "8px", background: "#0a1628", border: "1px solid #1a3050"}}
                >
                    <defs>
                        <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: "#00ff88"}} />
                            <stop offset="100%" style={{stopColor: "#00e5ff"}} />
                        </linearGradient>
                    </defs>
                    <line x1="40" y1="52" x2="860" y2="52" stroke="#1a3050" strokeWidth="2" />
                    <line x1="40" y1="52" x2="440" y2="52" stroke="url(#rg1)" strokeWidth="3" />
                    <text
                        x="220"
                        y="16"
                        fill="#00ff88"
                        fontSize="9"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        Part 1: ATP (Ch.2-5)
                    </text>
                    <text
                        x="680"
                        y="16"
                        fill="#00e5ff"
                        fontSize="9"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        Part 2: ITPI (Ch.6-10) — 本ガイドの中核
                    </text>
                    {/* Nodes */}
                    <circle cx="40" cy="52" r="9" fill="#00ff88" />
                    <text
                        x="40"
                        y="56"
                        fill="#030712"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        2
                    </text>
                    <text
                        x="40"
                        y="74"
                        fill="#7a9abf"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        Context
                    </text>
                    <circle cx="175" cy="52" r="9" fill="#00ff88" />
                    <text
                        x="175"
                        y="56"
                        fill="#030712"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        3
                    </text>
                    <text
                        x="175"
                        y="74"
                        fill="#7a9abf"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        Model
                    </text>
                    <circle cx="310" cy="52" r="9" fill="#00e5aa" />
                    <text
                        x="310"
                        y="56"
                        fill="#030712"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        4
                    </text>
                    <text
                        x="310"
                        y="74"
                        fill="#7a9abf"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        Analysis
                    </text>
                    <circle cx="440" cy="52" r="9" fill="#00e5ff" />
                    <text
                        x="440"
                        y="56"
                        fill="#030712"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        5
                    </text>
                    <text
                        x="440"
                        y="74"
                        fill="#7a9abf"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        Select
                    </text>
                    <circle cx="560" cy="52" r="13" fill="#00e5ff" />
                    <text
                        x="560"
                        y="56"
                        fill="#030712"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        6
                    </text>
                    <text
                        x="560"
                        y="80"
                        fill="#00e5ff"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        Implement
                    </text>
                    <circle cx="672" cy="52" r="13" fill="#ffe600" />
                    <text
                        x="672"
                        y="56"
                        fill="#030712"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        7
                    </text>
                    <text
                        x="672"
                        y="80"
                        fill="#ffe600"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        Org/Roles
                    </text>
                    <circle cx="772" cy="52" r="13" fill="#ff3c78" />
                    <text
                        x="772"
                        y="56"
                        fill="#fff"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        8
                    </text>
                    <text
                        x="772"
                        y="80"
                        fill="#ff3c78"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        Change
                    </text>
                    <circle cx="860" cy="52" r="13" fill="#bf00ff" />
                    <text
                        x="860"
                        y="56"
                        fill="#fff"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        9+
                    </text>
                    <text
                        x="860"
                        y="80"
                        fill="#bf00ff"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        CSF/Adapt
                    </text>
                </svg>

                <div className="toc-grid">
                    <a href="#ch2" className="toc-card"
                        ><span className="ch">Chapter 2 | 285分 | K2-K4</span
                        ><span className="ti">改善のコンテキスト</span
                        ><span className="tm">品質ビュー・PDCA・IDEAL・EFQMの基礎</span></a
                    >
                    <a href="#ch3" className="toc-card"
                        ><span className="ch">Chapter 3 | 570分 | K3-K4</span
                        ><span className="ti">モデルベース改善</span
                        ><span className="tm">TMMi・TPI Next・CMMI・STEP・CTP</span></a
                    >
                    <a href="#ch4" className="toc-card"
                        ><span className="ch">Chapter 4 | 555分 | K3-K4</span
                        ><span className="ti">分析ベース改善</span
                        ><span className="tm">GQM・原因分析・フィッシュボーン・DDP</span></a
                    >
                    <a href="#ch5" className="toc-card"
                        ><span className="ch">Chapter 5 | 105分 | K5</span
                        ><span className="ti">アプローチの選択</span
                        ><span className="tm">コンテキストに応じた最適アプローチ</span></a
                    >
                    <a href="#ch6" className="toc-card"
                        ><span className="ch">Chapter 6 | 900分 | K5-K6 ★★★</span
                        ><span className="ti">改善プロセス（ITPI核心）</span
                        ><span className="tm">IDEAL全フェーズ・アセスメント・改善計画</span></a
                    >
                    <a href="#ch7" className="toc-card"
                        ><span className="ch">Chapter 7 | 465分 | K4-K6 ★★★</span
                        ><span className="ti">組織・役割・スキル</span
                        ><span className="tm">TPG・アセッサー・インタビュー技法</span></a
                    >
                    <a href="#ch8" className="toc-card"
                        ><span className="ch">Chapter 8 | 285分 | K5-K6 ★★★</span
                        ><span className="ti">変更管理</span
                        ><span className="tm">Lewin・Kotter・抵抗管理・ステークホルダー</span></a
                    >
                    <a href="#ch9" className="toc-card"
                        ><span className="ch">Chapter 9 | 300分 | K5-K6 ★★★</span
                        ><span className="ti">重要成功因子（CSF）</span
                        ><span className="tm">9つのCSF・改善文化の醸成</span></a
                    >
                    <a href="#ch10" className="toc-card"
                        ><span className="ch">Chapter 10 | 60分 | K4</span
                        ><span className="ti">ライフサイクルへの適応</span
                        ><span className="tm">アジャイル・DevOps・ウォーターフォール</span></a
                    >
                </div>
            </section>

            {/* ─── CH0 ─── */}
            <section className="sec" id="ch0">
                <div className="chapter-num">Chapter 0 | 資格概要</div>
                <h2>CTEL-ITP-ITPI とは何か？</h2>

                <h3>0.1 定義 — この資格の位置づけ</h3>
                <p>
                    <strong>CTEL-ITP-ITPI</strong>（Certified Tester Expert Level — Implementing
                    Test Process Improvement）は、ISTQB®
                    が認定するエキスパートレベル資格の一つです。テストプロセス改善プログラムを<strong>組織内で実装・推進・持続させる能力</strong>を証明します。
                </p>

                <div className="mermaid-wrap">
<Mermaid chart={`flowchart TD
    FL["Foundation Level<br/>CTFL v4.0 — 必須前提"]
    AL["Advanced Level<br/>CTAL-TM — 必須前提"]
    subgraph EL["Expert Level: CTEL-ITP"]
        ATP["Part 1: CTEL-ITP-ATP<br/>Assessing Test Processes<br/>テストプロセスの評価・診断"]
        ITPI["Part 2: CTEL-ITP-ITPI ← 本資格<br/>Implementing TPI<br/>改善の実装・組織・変更管理・成功因子"]
        ATP --> ITPI
    end
    FL --> AL --> EL
    style ITPI fill:#00e5ff,color:#030712,stroke:none
    style ATP fill:#00ff88,color:#030712,stroke:none
    style FL fill:#1a3050,color:#e8f4fd,stroke:#00ff88
    style AL fill:#1a3050,color:#e8f4fd,stroke:#00ff88`} />
                </div>

                <h3>0.2 試験スペック</h3>
                <div className="table-wrap">
                    <table><tbody><tr>
                            <th>項目</th>
                            <th>内容</th>
                        </tr>
                        <tr>
                            <td>試験形式</td>
                            <td>多肢選択問題（MCQ）のみ</td>
                        </tr>
                        <tr>
                            <td>認知レベル</td>
                            <td>
                                <strong>K5（評価）・K6（創造）中心</strong> — 単純暗記では不合格
                            </td>
                        </tr>
                        <tr>
                            <td>有効期間</td>
                            <td>7年間（更新要）</td>
                        </tr>
                        <tr>
                            <td>前提資格</td>
                            <td>CTFL + CTAL-TM（両方必須）</td>
                        </tr>
                        <tr>
                            <td>実務経験</td>
                            <td>テスト経験5年以上 / プロセス改善経験2年以上</td>
                        </tr>
                        <tr>
                            <td>追加要件</td>
                            <td>カンファレンス発表 or 論文 + 推薦状2通</td>
                        </tr></tbody></table>
                </div>

                <div className="alert alert-red">
                    <strong>⚡ 重要</strong>
                    エキスパートレベルは<strong>試験合格だけでは取得できません</strong>。①
                    テスト経験5年以上のCV（推薦状2通含む）、② プロセス改善経験2年以上、③
                    カンファレンス発表または論文が追加で必要です。
                </div>

                <h3>0.3 認知レベル（K-Level）とは？</h3>
                <div className="table-wrap">
                    <table><tbody><tr>
                            <th>レベル</th>
                            <th>意味</th>
                            <th>キーワード</th>
                            <th>設問例</th>
                        </tr>
                        <tr>
                            <td><strong style={{color: "#0ef"}}>K5</strong></td>
                            <td>Evaluate（評価）</td>
                            <td>評価・判定・モニタリング</td>
                            <td>「この改善計画の効果を評価せよ」</td>
                        </tr>
                        <tr>
                            <td><strong style={{color: "#c0f"}}>K6</strong></td>
                            <td>Create（創造）</td>
                            <td>設計・構築・策定</td>
                            <td>「テスト改善計画を作成せよ」</td>
                        </tr></tbody></table>
                </div>

                <h3>0.4 ビジネスアウトカム（なぜこの資格が必要か）</h3>
                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-num">①</span>
                        <div className="arch-content">
                            <div className="t">改善プログラムのリード</div>
                            <div className="d">
                                テストプロセス改善プログラムをリードし、重要成功因子を識別・管理できる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">②</span>
                        <div className="arch-content">
                            <div className="t">ビジネス主導の意思決定</div>
                            <div className="d">
                                改善アプローチについてビジネス主導の適切な意思決定ができる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">③</span>
                        <div className="arch-content">
                            <div className="t">現状評価と段階的改善提案</div>
                            <div className="d">
                                テストプロセスの現状を評価し、段階的改善を提案し、ビジネス目標との関連を示せる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">④</span>
                        <div className="arch-content">
                            <div className="t">戦略的ポリシーの策定</div>
                            <div className="d">
                                テストプロセス改善の戦略的ポリシーを策定・実施できる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">⑤</span>
                        <div className="arch-content">
                            <div className="t">問題の根本原因分析</div>
                            <div className="d">
                                テストプロセスの特定問題を分析し、原因・症状・影響を評価できる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">⑥</span>
                        <div className="arch-content">
                            <div className="t">変更管理の実行</div>
                            <div className="d">改善を実施するために必要な変更管理を実行できる。</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CH2 ─── */}
            <section className="sec" id="ch2">
                <div className="chapter-num">Chapter 2 | K2-K4 | ATP + ITPI 共通基礎</div>
                <h2>改善のコンテキスト <span className="kl">285分</span></h2>
                <p style={{color: "var(--text-muted)"}}>
                    なぜ・何を・どう改善するかの基盤となる概念。ITPI 試験でも背景知識として必須。
                </p>

                <h3>2.1 なぜテストを改善するのか？ <span className="kl">K2</span></h3>
                <p>
                    <strong>定義：</strong
                    >テストプロセス改善（TPI）は、組織のビジネス目標達成を支援するために実施されます。改善の動機を理解することが出発点です。
                </p>

                <div className="metric-grid">
                    <div className="metric-card">
                        <span className="metric-val">100×</span
                        ><span className="metric-label">本番障害コストは開発中修正の約100倍</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val">DDP</span
                        ><span className="metric-label">欠陥検出率が改善の核心的指標</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val">6+</span
                        ><span className="metric-label">改善を推進する主要ビジネス理由</span>
                    </div>
                </div>

                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-num">01</span>
                        <div className="arch-content">
                            <div className="t">品質向上（Quality Improvement）</div>
                            <div className="d">
                                市場出荷ソフトウェアの欠陥削減。品質は今や市場参入の必須条件。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">02</span>
                        <div className="arch-content">
                            <div className="t">コスト削減（Cost Reduction）</div>
                            <div className="d">
                                テスト効率向上で工数を削減。早期発見が後工程のリワークコストを劇的に下げる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">03</span>
                        <div className="arch-content">
                            <div className="t">タイム・トゥ・マーケット短縮</div>
                            <div className="d">
                                早期フィードバックで手戻り削減。CI/CD・DevOps対応への必要性が高まっている。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">04</span>
                        <div className="arch-content">
                            <div className="t">予測可能性の向上</div>
                            <div className="d">
                                プロジェクトの見積もり精度向上。ステークホルダーへの報告品質向上。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">05</span>
                        <div className="arch-content">
                            <div className="t">規制・標準への準拠</div>
                            <div className="d">
                                FDA（医療機器）、Sarbanes-Oxley（金融）、ISO
                                9001、CMMIなどへの対応。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">06</span>
                        <div className="arch-content">
                            <div className="t">サードパーティへの能力証明</div>
                            <div className="d">
                                顧客から特定の成熟度レベルが要求される場合（例：TMMi Level 3以上）。
                            </div>
                        </div>
                    </div>
                </div>

                <h3>2.3 品質の5つのビュー（ガービン） <span className="kl">K2</span></h3>
                <p>
                    <strong>定義：</strong
                    >品質には5つの視点があり、どの視点から改善を捉えるかで目標と指標が変わります。
                </p>

                <svg
                    viewBox="0 0 750 140"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="品質の5つのビュー"
                    style={{width: "100%", maxWidth: "750px", display: "block", margin: "1.3rem 0", borderRadius: "8px", background: "#040c1a", border: "1px solid #1a3050"}}
                >
                    <rect
                        x="10"
                        y="15"
                        width="130"
                        height="105"
                        rx="6"
                        fill="#00ff8812"
                        stroke="#00ff88"
                        strokeWidth="1.2"
                    />
                    <text
                        x="75"
                        y="44"
                        fill="#00ff88"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        製品ベース
                    </text>
                    <text x="75" y="64" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        製品属性・特性
                    </text>
                    <text x="75" y="80" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        で品質を定義
                    </text>
                    <text
                        x="75"
                        y="104"
                        fill="#4a6080"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        要件適合性
                    </text>
                    <rect
                        x="152"
                        y="15"
                        width="130"
                        height="105"
                        rx="6"
                        fill="#00e5ff12"
                        stroke="#00e5ff"
                        strokeWidth="1.2"
                    />
                    <text
                        x="217"
                        y="44"
                        fill="#00e5ff"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        製造ベース
                    </text>
                    <text x="217" y="64" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        プロセス・仕様
                    </text>
                    <text x="217" y="80" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        への適合
                    </text>
                    <text
                        x="217"
                        y="104"
                        fill="#4a6080"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        欠陥数・遵守率
                    </text>
                    <rect
                        x="294"
                        y="15"
                        width="155"
                        height="105"
                        rx="6"
                        fill="#ffe60012"
                        stroke="#ffe600"
                        strokeWidth="1.2"
                    />
                    <text
                        x="371"
                        y="44"
                        fill="#ffe600"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        ユーザーベース
                    </text>
                    <text x="371" y="64" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        ニーズ充足度
                    </text>
                    <text x="371" y="80" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        で品質を定義
                    </text>
                    <text
                        x="371"
                        y="104"
                        fill="#4a6080"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        顧客満足度
                    </text>
                    <rect
                        x="461"
                        y="15"
                        width="130"
                        height="105"
                        rx="6"
                        fill="#ff3c7812"
                        stroke="#ff3c78"
                        strokeWidth="1.2"
                    />
                    <text
                        x="526"
                        y="44"
                        fill="#ff3c78"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        価値ベース
                    </text>
                    <text x="526" y="64" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        コストと品質
                    </text>
                    <text x="526" y="80" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        のバランス
                    </text>
                    <text
                        x="526"
                        y="104"
                        fill="#4a6080"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        ROI・効果比率
                    </text>
                    <rect
                        x="603"
                        y="15"
                        width="137"
                        height="105"
                        rx="6"
                        fill="#bf00ff12"
                        stroke="#bf00ff"
                        strokeWidth="1.2"
                    />
                    <text
                        x="671"
                        y="44"
                        fill="#bf00ff"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        超越ベース
                    </text>
                    <text x="671" y="64" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        経験で認識される
                    </text>
                    <text x="671" y="80" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        卓越性
                    </text>
                    <text
                        x="671"
                        y="104"
                        fill="#4a6080"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        信頼・ブランド
                    </text>
                </svg>

                <h3>2.4 PDCAサイクル（デミングサイクル） <span className="kl">K3</span></h3>
                <p>
                    <strong>定義：</strong>Plan（計画）→ Do（実行）→ Check（確認）→
                    Act（改善）の4段階で継続的改善を回すサイクル。全ての改善活動の基盤です。
                </p>

                <div className="mermaid-wrap">
<Mermaid chart={`flowchart LR
    P["Plan（計画）<br/>目標設定・現状分析<br/>改善計画策定"] --> D["Do（実行）<br/>研修・コーチング<br/>活動実施"]
    D --> C["Check（確認）<br/>メトリクスで<br/>進捗追跡"]
    C --> A["Act（改善）<br/>機会識別<br/>優先順位付け"]
    A --> P
    style P fill:#00ff88,color:#030712,stroke:none
    style D fill:#00e5ff,color:#030712,stroke:none
    style C fill:#ffe600,color:#030712,stroke:none
    style A fill:#ff3c78,color:#ffffff,stroke:none`} />
                </div>

                <h3>2.4.2 IDEALフレームワーク <span className="kl">K3</span> — 試験最頻出！</h3>
                <p>
                    <strong>定義：</strong>IDEAL は
                    PDCAの具体的実装です。<strong>I</strong>nitiating → <strong>D</strong>iagnosing
                    → <strong>E</strong>stablishing → <strong>A</strong>cting →
                    <strong>L</strong>earning の5フェーズで改善を推進します。
                </p>

                <div className="mermaid-wrap">
<Mermaid chart={`flowchart TD
    I["I: Initiating（開始）<br/>改善の理由を明確化<br/>スポンサー確保<br/>改善インフラ確立"]
    D2["D: Diagnosing（診断）<br/>現状の実践を評価・特性化<br/>推奨事項を作成<br/>フェーズ結果を文書化"]
    E["E: Establishing（確立）<br/>戦略と優先順位を設定<br/>TPGを確立<br/>アクションを計画"]
    A["A: Acting（実行）<br/>プロセスと測定を定義<br/>パイロットを計画・実行<br/>本格展開を追跡"]
    L["L: Learning（学習）<br/>教訓を文書化・分析<br/>組織アプローチを改訂"]
    I --> D2 --> E --> A --> L --> I
    style I fill:#00ff88,color:#030712,stroke:none
    style D2 fill:#00e5ff,color:#030712,stroke:none
    style E fill:#ffe600,color:#030712,stroke:none
    style A fill:#ff3c78,color:#ffffff,stroke:none
    style L fill:#bf00ff,color:#ffffff,stroke:none`} />
                </div>

                <div className="callout callout-warning">
                    <div className="callout-title">⚠️ 重要ポイント</div>
                    <strong>Initiating（開始）フェーズが最も重要</strong
                    >です。初期段階のアクションが最終結果を直接左右します。スポンサーの確保なしに大規模な改善は成功しません。
                </div>

                <h4>2.4.3 EFQM 卓越性の8つの基本概念</h4>
                <div className="table-wrap">
                    <table><tbody><tr>
                            <th>#</th>
                            <th>概念</th>
                            <th>テストへの適用</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>結果指向</td>
                            <td>DDP・本番欠陥数などの成果指標を重視</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>顧客フォーカス</td>
                            <td>エンドユーザーの品質ニーズを最優先</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>リーダーシップと目的の一貫性</td>
                            <td>経営層のスポンサーシップが不可欠</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>プロセスと事実による管理</td>
                            <td>メトリクスに基づく意思決定</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>人材の育成と関与</td>
                            <td>テスターのスキル向上・エンゲージメント</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>継続的学習・革新・改善</td>
                            <td>レトロスペクティブ・改善サイクルの定常化</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>パートナーシップの発展</td>
                            <td>開発・PMとの連携強化</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>企業の社会的責任</td>
                            <td>規制・標準への準拠（FDA等）</td>
                        </tr></tbody></table>
                </div>
            </section>

            {/* ─── CH3 ─── */}
            <section className="sec" id="ch3">
                <div className="chapter-num">Chapter 3 | K3-K4 | ATP中心 / ITPI背景知識</div>
                <h2>モデルベース改善 <span className="kl">570分</span></h2>

                <h3>3.1 ステージド vs 継続 表現形式 <span className="kl">K3</span></h3>
                <div className="compare-grid">
                    <div className="compare-card compare-good">
                        <span className="compare-head">✅ ステージド表現（例：TMMi）</span>
                        <ul>
                            <li>決められたレベルを順に上がる</li>
                            <li>「成熟度レベル」でコミュニケーションしやすい</li>
                            <li>外部認定に使いやすい</li>
                            <li>明確な進捗基準がある</li>
                            <li>全段階達成が必要（柔軟性やや低）</li>
                        </ul>
                    </div>
                    <div className="compare-card compare-bad">
                        <span className="compare-head">⚡ 継続表現（例：TPI Next）</span>
                        <ul>
                            <li>レベルに縛られず改善エリアを選べる</li>
                            <li>特定の問題点に集中できる</li>
                            <li>柔軟性が高い</li>
                            <li>全体比較・ベンチマークには適さない</li>
                        </ul>
                    </div>
                </div>

                <h4>TMMi® 成熟度レベル（5段階）</h4>
                <div className="pyramid">
                    <div className="pyr-level">Level 5: Optimization（最適化）</div>
                    <div className="pyr-level">Level 4: Measurement &amp; Management</div>
                    <div className="pyr-level">Level 3: Defined（定義）</div>
                    <div className="pyr-level">Level 2: Managed（管理）</div>
                    <div className="pyr-level">Level 1: Initial（初期）</div>
                </div>

                <h4>TPI Next® vs TMMi® — 試験頻出比較</h4>
                <div className="table-wrap">
                    <table><tbody><tr>
                            <th>観点</th>
                            <th>TPI Next®</th>
                            <th>TMMi®</th>
                        </tr>
                        <tr>
                            <td>表現形式</td>
                            <td style={{color: "var(--neon-cyan)"}}>継続モデル（Continuous）</td>
                            <td style={{color: "var(--neon-green)"}}>ステージドモデル（Staged）</td>
                        </tr>
                        <tr>
                            <td>テスト手法</td>
                            <td>TMap Next を参照</td>
                            <td>テスト手法非依存</td>
                        </tr>
                        <tr>
                            <td>SPI との関係</td>
                            <td>特定SPIモデルとの公式関係なし</td>
                            <td>CMMIと高い相関</td>
                        </tr>
                        <tr>
                            <td>詳細度</td>
                            <td>16のキーエリアで詳細な視点</td>
                            <td>成熟度レベルごとの構造化PA</td>
                        </tr>
                        <tr>
                            <td>外部認定</td>
                            <td>使いにくい</td>
                            <td>使いやすい</td>
                        </tr>
                        <tr>
                            <td>柔軟性</td>
                            <td>高い（任意エリア選択可）</td>
                            <td>低い（順序が決まっている）</td>
                        </tr></tbody></table>
                </div>

                <h3>3.4 コンテンツベースモデル（STEP・CTP）</h3>
                <div className="compare-grid">
                    <div className="compare-card compare-good">
                        <span className="compare-head"
                            >STEP（Systematic Test and Evaluation Process）</span
                        >
                        <ul>
                            <li>テストはライフサイクル全体を通じた活動</li>
                            <li>要件定義から廃止まで継続</li>
                            <li>改善は特定の順序を要求しない</li>
                            <li>TPI Nextと組み合わせ可能</li>
                        </ul>
                    </div>
                    <div className="compare-card compare-good">
                        <span className="compare-head">CTP（Critical Testing Process）</span>
                        <ul>
                            <li>12の「重要テストプロセス」を定義</li>
                            <li>強みと弱みを識別し優先順位を付ける</li>
                            <li>汎用計画を組織にカスタマイズ</li>
                            <li>定量・定性メトリクスを収集・分析</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ─── CH4 ─── */}
            <section className="sec" id="ch4">
                <div className="chapter-num">Chapter 4 | K3-K4 | ATP中心 / ITPI基礎</div>
                <h2>分析ベース改善 <span className="kl">555分</span></h2>

                <h3>4.3 GQM アプローチ <span className="kl">K3</span></h3>
                <p>
                    <strong>定義：</strong>Goal（目標）→ Question（質問）→
                    Metric（メトリクス）の3層で改善を体系的に計測するアプローチです。
                </p>

                <div className="mermaid-wrap">
<Mermaid chart={`flowchart TD
    G["Goals（目標 / 概念レベル）<br/>例：本番欠陥を50%削減する"]
    Q["Questions（質問 / 運用レベル）<br/>例：現在のDDPはどのくらいか？"]
    M["Metrics（メトリクス / 定量レベル）<br/>例：DDP = テスト検出欠陥数 ÷ 全既知欠陥数 × 100"]
    G --> Q --> M
    style G fill:#00ff88,color:#030712,stroke:none
    style Q fill:#00e5ff,color:#030712,stroke:none
    style M fill:#ffe600,color:#030712,stroke:none`} />
                </div>

                <h3>4.2 フィッシュボーン図（石川ダイアグラム） <span className="kl">K3</span></h3>
                <p>
                    <strong>定義：</strong
                    >問題（効果）の根本原因を「6M」カテゴリに分類して視覚化する原因分析ツール。
                </p>

                <svg
                    viewBox="0 0 760 280"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="フィッシュボーン図：テスト実行遅延の根本原因分析"
                    style={{width: "100%", maxWidth: "760px", display: "block", margin: "1.4rem auto", border: "1px solid #1a3050", borderRadius: "8px", background: "#040c1a"}}
                >
                    {/* Main arrow */}
                    <line x1="50" y1="140" x2="660" y2="140" stroke="#00e5ff" strokeWidth="3" />
                    <polygon points="660,140 642,132 642,148" fill="#00e5ff" />
                    {/* Effect box */}
                    <rect
                        x="664"
                        y="110"
                        width="86"
                        height="60"
                        rx="6"
                        fill="#ff3c78"
                        opacity="0.9"
                    />
                    <text
                        x="707"
                        y="134"
                        fill="#fff"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        テスト実行
                    </text>
                    <text
                        x="707"
                        y="150"
                        fill="#fff"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        の遅延
                    </text>
                    {/* Top ribs */}
                    <line x1="160" y1="140" x2="110" y2="68" stroke="#00ff88" strokeWidth="1.5" />
                    <text
                        x="94"
                        y="60"
                        fill="#00ff88"
                        fontSize="10"
                        fontFamily="Space Mono"
                        fontWeight="bold"
                    >
                        Method
                    </text>
                    <text x="82" y="78" fill="#7a9abf" fontSize="9">自動化率が低い</text>
                    <line x1="320" y1="140" x2="270" y2="68" stroke="#00ff88" strokeWidth="1.5" />
                    <text
                        x="252"
                        y="60"
                        fill="#00ff88"
                        fontSize="10"
                        fontFamily="Space Mono"
                        fontWeight="bold"
                    >
                        Machine
                    </text>
                    <text x="240" y="78" fill="#7a9abf" fontSize="9">テスト環境が不安定</text>
                    <line x1="490" y1="140" x2="440" y2="68" stroke="#00ff88" strokeWidth="1.5" />
                    <text
                        x="422"
                        y="60"
                        fill="#00ff88"
                        fontSize="10"
                        fontFamily="Space Mono"
                        fontWeight="bold"
                    >
                        Material
                    </text>
                    <text x="412" y="78" fill="#7a9abf" fontSize="9">テストデータ不足</text>
                    {/* Bottom ribs */}
                    <line x1="160" y1="140" x2="110" y2="212" stroke="#ffe600" strokeWidth="1.5" />
                    <text
                        x="72"
                        y="226"
                        fill="#ffe600"
                        fontSize="10"
                        fontFamily="Space Mono"
                        fontWeight="bold"
                    >
                        Man
                    </text>
                    <text x="60" y="244" fill="#7a9abf" fontSize="9">スキル不足</text>
                    <line x1="320" y1="140" x2="270" y2="212" stroke="#ffe600" strokeWidth="1.5" />
                    <text
                        x="218"
                        y="226"
                        fill="#ffe600"
                        fontSize="10"
                        fontFamily="Space Mono"
                        fontWeight="bold"
                    >
                        Measurement
                    </text>
                    <text x="228" y="244" fill="#7a9abf" fontSize="9">進捗可視化なし</text>
                    <line x1="490" y1="140" x2="440" y2="212" stroke="#ffe600" strokeWidth="1.5" />
                    <text
                        x="390"
                        y="226"
                        fill="#ffe600"
                        fontSize="10"
                        fontFamily="Space Mono"
                        fontWeight="bold"
                    >
                        Environment
                    </text>
                    <text x="402" y="244" fill="#7a9abf" fontSize="9">CI/CD 未整備</text>
                    <text x="50" y="270" fill="#4a6080" fontSize="9" fontFamily="Space Mono">
                        フィッシュボーン図（石川ダイアグラム）— テスト実行遅延の根本原因分析
                    </text>
                </svg>

                <h3>4.4 主要メトリクス体系 <span className="kl">K4</span></h3>
                <div className="table-wrap">
                    <table><tbody><tr>
                            <th>カテゴリ</th>
                            <th>メトリクス名</th>
                            <th>計算式 / 説明</th>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <strong style={{color: "var(--neon-green)"}}>有効性</strong>
                            </td>
                            <td>DDP（欠陥検出率）</td>
                            <td>テスト検出欠陥数 ÷ 全既知欠陥数 × 100</td>
                        </tr>
                        <tr>
                            <td>本番後欠陥率</td>
                            <td>顧客発見欠陥数 ÷ KLOC（一定期間）</td>
                        </tr>
                        <tr>
                            <td rowSpan={3}>
                                <strong style={{color: "var(--neon-cyan)"}}>効率性</strong>
                            </td>
                            <td>相対テスト工数</td>
                            <td>テスト工数 ÷ 総プロジェクト工数</td>
                        </tr>
                        <tr>
                            <td>テスト効率</td>
                            <td>欠陥数 ÷ テスト工数</td>
                        </tr>
                        <tr>
                            <td>自動化レベル</td>
                            <td>自動化TC数 ÷ 全TC数 × 100</td>
                        </tr>
                        <tr>
                            <td><strong style={{color: "var(--neon-yellow)"}}>予測可能性</strong></td>
                            <td>工数乖離</td>
                            <td>実績工数 ÷ 計画工数 × 100</td>
                        </tr></tbody></table>
                </div>

                <div className="callout callout-info">
                    <div className="callout-title">💡 DDP 計算例</div>
                    テストで90件発見し、本番後に10件追加発見：<br />
                    <strong>DDP = 90 ÷ (90+10) × 100 = 90%</strong><br />
                    一般的な目標は 85〜95% 以上です。
                </div>
            </section>

            {/* ─── CH5 ─── */}
            <section className="sec" id="ch5">
                <div className="chapter-num">Chapter 5 | K5 | ATP・ITPI共通</div>
                <h2>テストプロセス改善アプローチの選択 <span className="kl">105分</span></h2>
                <p style={{color: "var(--text-muted)"}}>
                    コンテキストに応じた最適なアプローチを評価・選択できるようになる（K5：評価レベル）。
                </p>

                <div className="mermaid-wrap">
<Mermaid chart={`flowchart TD
    Start(["改善アプローチを選択する"])
    Q1{"比較・ベンチマーク<br/>または成熟度レベル達成<br/>が必要か？"}
    Q2{"特定の問題点に<br/>集中したいか？"}
    Q3{"メトリクスが<br/>利用可能か？"}
    Q4{"新規プロセス<br/>確立が必要か？"}
    M["モデルベース<br/>TMMi / TPI Next"]
    A["分析ベース<br/>GQM / フィッシュボーン"]
    C["コンテンツモデル<br/>CTP / STEP"]
    H["ハイブリッド<br/>状況に応じて組み合わせ"]
    
    Start --> Q1
    Q1 -->|Yes| M
    Q1 -->|No| Q2
    Q2 -->|Yes| Q3
    Q2 -->|No| Q4
    Q3 -->|Yes| A
    Q3 -->|No| H
    Q4 -->|Yes| C
    Q4 -->|No| H
    
    style M fill:#00ff88,color:#030712,stroke:none
    style A fill:#00e5ff,color:#030712,stroke:none
    style C fill:#ffe600,color:#030712,stroke:none
    style H fill:#ff3c78,color:#ffffff,stroke:none`} />
                </div>

                <div className="table-wrap">
                    <table><tbody><tr>
                            <th>アプローチ</th>
                            <th>最適な場面</th>
                        </tr>
                        <tr>
                            <td>
                                <strong style={{color: "var(--neon-green)"}}
                                    >モデルベース（TMMi/TPI Next）</strong
                                >
                            </td>
                            <td>
                                ベンチマーク比較が必要・成熟度レベル達成が会社方針・外部認定が必要
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong style={{color: "var(--neon-cyan)"}}
                                    >コンテンツモデル（CTP/STEP）</strong
                                >
                            </td>
                            <td>テストプロセスを新たに確立・TMMi/TPI Nextの順序に縛られたくない</td>
                        </tr>
                        <tr>
                            <td>
                                <strong style={{color: "var(--neon-yellow)"}}
                                    >分析ベース（GQM/フィッシュボーン）</strong
                                >
                            </td>
                            <td>特定問題に集中・メトリクスが利用可能・根拠が必要</td>
                        </tr>
                        <tr>
                            <td><strong style={{color: "var(--neon-pink)"}}>ハイブリッド</strong></td>
                            <td>多くの実際プロジェクトで採用される組み合わせ</td>
                        </tr></tbody></table>
                </div>
            </section>

            {/* ─── CH6 ─── */}
            <section className="sec" id="ch6">
                <div className="chapter-num">Chapter 6 | K5-K6 | ITPI 核心 ★★★★★</div>
                <h2>改善プロセスの実装（IDEAL 全フェーズ詳解） <span className="kl">900分</span></h2>

                <div className="alert alert-cyan">
                    <strong>LO 6.4.5（K6）最重要</strong
                    >テスト改善計画を<strong>実際に作成できる</strong>レベルが求められます。単なる暗記では不十分で、状況に応じた適切な計画立案能力が試されます。
                </div>

                <h3>6.2 開始フェーズ（Initiating）：スコープの4観点 <span className="kl">K5</span></h3>
                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-num">①</span>
                        <div className="arch-content">
                            <div className="t">汎用プロセススコープ</div>
                            <div className="d">
                                テストプロセス以外のプロセス（PM・要件管理等）が改善範囲に含まれるか？
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">②</span>
                        <div className="arch-content">
                            <div className="t">テストプロセススコープ</div>
                            <div className="d">
                                テストプロセスのどの部分を対象とするか。特定部分のみの改善は「部分最適」のリスクがある。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">③</span>
                        <div className="arch-content">
                            <div className="t">テストレベルスコープ</div>
                            <div className="d">
                                UT・IT・ST・UAT のどのレベルを対象とするか明確にする。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">④</span>
                        <div className="arch-content">
                            <div className="t">プロジェクトスコープ</div>
                            <div className="d">
                                単一プロジェクト（速い・安い）か組織全体（広い・長い）かで規模・期間・コストが変わる。
                            </div>
                        </div>
                    </div>
                </div>

                <h4>バランスドスコアカード（BSC）の4視点</h4>
                <div className="metric-grid">
                    <div className="metric-card">
                        <span
                            className="metric-val"
                            style={{fontSize: "1.25rem", color: "var(--neon-green)"}}
                            >財務</span
                        ><span className="metric-label">生産性向上・収益改善・コスト削減</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val" style={{fontSize: "1.25rem", color: "var(--neon-cyan)"}}
                            >顧客</span
                        ><span className="metric-label">市場シェア・顧客満足度・リスク管理</span>
                    </div>
                    <div className="metric-card">
                        <span
                            className="metric-val"
                            style={{fontSize: "1.25rem", color: "var(--neon-yellow)"}}
                            >内部</span
                        ><span className="metric-label">予測可能性向上・欠陥削減・工期短縮</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val" style={{fontSize: "1.25rem", color: "var(--neon-pink)"}}
                            >学習・成長</span
                        ><span className="metric-label">新市場参入・製品化速度・標準認定</span>
                    </div>
                </div>

                <h3>6.3 診断フェーズ（Diagnosing）— アセスメント <span className="kl">K5</span></h3>

                <div className="alert alert-amber">
                    <strong>インタビュー実施の4原則</strong>
                    ① 個別インタビューが推奨（グループだと発言が制限される）<br />
                    ② 上司の前でインタビューしない（圧力を排除する）<br />
                    ③ 機密性を確保して正直な発言を促す<br />
                    ④ 罰則・失敗への恐れがない環境を作る
                </div>

                <h4>アセスメントレポートの6つの必須内容</h4>
                <ol className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div className="step-content">
                            <div className="t">マネジメントサマリー</div>
                            <div className="d">
                                ビジョンへの言及を含む。経営層が読む1〜2ページの要約。
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div className="step-content">
                            <div className="t">スコープと目標の記述</div>
                            <div className="d">
                                何を評価したか、どんな目標があるかを明確に記述する。
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div className="step-content">
                            <div className="t">分析結果（強み・弱み・未解決課題）</div>
                            <div className="d">
                                肯定的な側面、改善が必要な側面、未解決の課題をバランスよく記述。
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div className="step-content">
                            <div className="t">各観察事項の評価（重大度含む）</div>
                            <div className="d">各問題の重大度とビジネス影響を定量的に評価する。</div>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">5</span>
                        <div className="step-content">
                            <div className="t">提案する改善アクション（優先順位付き）</div>
                            <div className="d">
                                具体的なアクション、担当者候補、期限の目安を含める。
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">6</span>
                        <div className="step-content">
                            <div className="t">評価の根拠</div>
                            <div className="d">
                                どのインタビュー・文書・データから得た情報かを明記する。
                            </div>
                        </div>
                    </li>
                </ol>

                <h3>6.4 確立フェーズ：テスト改善計画（TIP）の策定 <span className="kl">K6</span></h3>
                <div className="callout callout-danger">
                    <div className="callout-title">⚡ K6レベル — 実際に作成できることが必要</div>
                    テスト改善計画（Test Improvement
                    Plan）の10構成要素を全て把握し、シナリオに応じて適切な計画を立案できるようにしてください。
                </div>

                <h4>TIP の10構成要素 — 良い例 vs 悪い例</h4>
                <div className="compare-grid">
                    <div className="compare-card compare-good">
                        <span className="compare-head">✅ 良い TIP の特徴</span>
                        <ul>
                            <li>「DDPを70%→90%（6ヶ月）」など定量目標がある</li>
                            <li>スコープが明確（含む・除外が明示）</li>
                            <li>RACI マトリクスで役割が明確</li>
                            <li>パイロットから段階的に展開する計画がある</li>
                            <li>リスクと軽減策が列挙されている</li>
                            <li>変更管理・コミュニケーション計画が含まれる</li>
                            <li>成功基準とメトリクスが具体的</li>
                        </ul>
                    </div>
                    <div className="compare-card compare-bad">
                        <span className="compare-head">❌ 悪い TIP の特徴</span>
                        <ul>
                            <li>「テスト品質を改善する」などの曖昧な目標のみ</li>
                            <li>スコープが無制限（「全テストを改善する」）</li>
                            <li>役割・責任が不明確</li>
                            <li>パイロットなしで全組織に一気に展開</li>
                            <li>リスクへの言及がない</li>
                            <li>変更管理の考慮がない</li>
                            <li>成功の測定方法が不明</li>
                        </ul>
                    </div>
                </div>

                <div className="code-block" data-lang="TIP構成要素">
                    <div className="code-line"><span className="code-keyword">テスト改善計画書（Test Improvement Plan）の10構成要素</span></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-green">① 改善目標（Goal）</span></div>
                    <div className="code-line">✅ 良い例: <span className="code-string">"DDPを現在の70%から90%に向上させる（6ヶ月以内）"</span></div>
                    <div className="code-line">❌ 悪い例: <span className="code-comment">"テスト品質を改善する"（曖昧・測定不能）</span></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-cyan">② スコープと境界（Scope）</span></div>
                    <div className="code-line">✅ 良い例: <span className="code-string">"STとUATのみ対象。UTは除外。"</span></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-keyword">③ 役割と責任（RACI マトリクス）</span></div>
                    <div className="code-line"><span className="code-green">④ スケジュールとマイルストーン</span></div>
                    <div className="code-line"><span className="code-cyan">⑤ リソース計画（人員・ツール・予算）</span></div>
                    <div className="code-line"><span className="code-keyword">⑥ リスクと軽減策</span></div>
                    <div className="code-line"><span className="code-string">⑦ 成功基準とメトリクス（GQMを活用）</span></div>
                    <div className="code-line"><span className="code-green">⑧ 変更管理の方針（チェンジマネジメント計画）</span></div>
                    <div className="code-line"><span className="code-cyan">⑨ コミュニケーション計画</span></div>
                    <div className="code-line"><span className="code-comment">⑩ 教訓と継続改善の方針（次のIDEALサイクルへ接続）</span></div>
                </div>

                <h3>6.5 実行フェーズ：パイロット選択の5基準 <span className="kl">K5</span></h3>

                <svg
                    viewBox="0 0 640 160"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="パイロット選択の5基準"
                    style={{width: "100%", maxWidth: "850px", display: "block", margin: "1.3rem auto", borderRadius: "8px", background: "#040c1a", border: "1px solid #1a3050"}}
                >
                    <rect
                        x="12"
                        y="18"
                        width="112"
                        height="114"
                        rx="6"
                        fill="#00ff8810"
                        stroke="#00ff88"
                        strokeWidth="1.2"
                    />
                    <text
                        x="68"
                        y="47"
                        fill="#00ff88"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        ① 代表的
                    </text>
                    <text x="68" y="68" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        特殊でない
                    </text>
                    <text x="68" y="84" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        一般的なPJ
                    </text>
                    <rect
                        x="136"
                        y="18"
                        width="112"
                        height="114"
                        rx="6"
                        fill="#00e5ff10"
                        stroke="#00e5ff"
                        strokeWidth="1.2"
                    />
                    <text
                        x="192"
                        y="47"
                        fill="#00e5ff"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        ② 意欲的
                    </text>
                    <text x="192" y="68" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        チームが
                    </text>
                    <text x="192" y="84" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        協力的
                    </text>
                    <rect
                        x="260"
                        y="18"
                        width="112"
                        height="114"
                        rx="6"
                        fill="#ffe60010"
                        stroke="#ffe600"
                        strokeWidth="1.2"
                    />
                    <text
                        x="316"
                        y="47"
                        fill="#ffe600"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        ③ 適切規模
                    </text>
                    <text x="316" y="68" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        小さすぎず
                    </text>
                    <text x="316" y="84" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        大きすぎない
                    </text>
                    <rect
                        x="384"
                        y="18"
                        width="112"
                        height="114"
                        rx="6"
                        fill="#ff3c7810"
                        stroke="#ff3c78"
                        strokeWidth="1.2"
                    />
                    <text
                        x="440"
                        y="47"
                        fill="#ff3c78"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        ④ 短期間
                    </text>
                    <text x="440" y="68" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        速やかに
                    </text>
                    <text x="440" y="84" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        結果が出る
                    </text>
                    <rect
                        x="508"
                        y="18"
                        width="120"
                        height="114"
                        rx="6"
                        fill="#bf00ff10"
                        stroke="#bf00ff"
                        strokeWidth="1.2"
                    />
                    <text
                        x="568"
                        y="47"
                        fill="#bf00ff"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        fontWeight="bold"
                    >
                        ⑤ 可視性
                    </text>
                    <text x="568" y="68" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        ステークホルダー
                    </text>
                    <text x="568" y="84" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        に見えやすい
                    </text>
                    <text
                        x="320"
                        y="148"
                        fill="#4a6080"
                        fontSize="8"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        パイロットプロジェクト選択の5基準
                    </text>
                </svg>

                <h3>6.6 学習フェーズ（Learning） <span className="kl">K4</span></h3>
                <div className="trend-card">
                    <span className="trend-label">IDEAL の最終フェーズ — 継続改善の核心</span>
                    <ul>
                        <li>成功と失敗を文書化・分析する</li>
                        <li>何がうまくいったか・改善できたかを整理する</li>
                        <li>組織的アプローチを改訂し次サイクルに反映する</li>
                        <li>教訓を組織内で共有し、ナレッジリポジトリに蓄積する</li>
                        <li>次の IDEAL サイクルを開始する</li>
                    </ul>
                </div>
            </section>

            {/* ─── CH7 ─── */}
            <section className="sec" id="ch7">
                <div className="chapter-num">Chapter 7 | K4-K6 | ITPI中核 ★★★★★</div>
                <h2>組織・役割・スキル <span className="kl">465分</span></h2>

                <h3>7.1 テストプロセスグループ（TPG）の3組織モデル <span className="kl">K4</span></h3>
                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-num">A</span>
                        <div className="arch-content">
                            <div className="t">中央集権型</div>
                            <div className="d">
                                専任TPGチームが全組織をサポート。専門性が高いがコストが高く現場から乖離するリスクがある。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">B</span>
                        <div className="arch-content">
                            <div className="t">分散型</div>
                            <div className="d">
                                各プロジェクトにTPGメンバーを配置。現場に近いが一貫性の維持が難しい。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">C</span>
                        <div className="arch-content">
                            <div className="t" style={{color: "var(--neon-green)"}}>
                                ハイブリッド型（★実務で最多）
                            </div>
                            <div className="d">
                                中央に小さなコアTPGを持ちつつ、各組織に担当者を配置。最もバランスが良い。
                            </div>
                        </div>
                    </div>
                </div>

                <h3>7.2 内部アセッサー vs 外部アセッサー</h3>
                <div className="compare-grid">
                    <div className="compare-card compare-good">
                        <span className="compare-head">内部アセッサー（Internal Assessor）</span>
                        <ul>
                            <li>✅ 組織文化・コンテキストを理解している</li>
                            <li>✅ コストが低い</li>
                            <li>✅ 内部の信頼関係がある</li>
                            <li>❌ 客観性・独立性が低い可能性</li>
                            <li>❌ 内部政治の影響を受ける</li>
                        </ul>
                    </div>
                    <div className="compare-card compare-bad">
                        <span className="compare-head">外部アセッサー（External Assessor）</span>
                        <ul>
                            <li>✅ 高い客観性・独立性</li>
                            <li>✅ 業界の比較情報を持っている</li>
                            <li>✅ 政治的影響を受けにくい</li>
                            <li>❌ コストが高い</li>
                            <li>❌ 組織文化への理解に時間が必要</li>
                        </ul>
                    </div>
                </div>

                <div className="callout callout-info">
                    <div className="callout-title">💡 推奨アプローチ</div>
                    外部アセッサーがリードし、内部が協力する<strong>ハイブリッドアプローチ</strong>が最もバランスが良いとされています。
                </div>

                <h3>7.3 テストプロセス改善者のスキルセット <span className="kl">K5</span></h3>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="n">インタビュースキル</span><span className="p">重要度：最高</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ "--w": "95%" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="n">傾聴スキル（Active Listening）</span
                        ><span className="p">重要度：最高</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ "--w": "93%" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="n">分析スキル</span><span className="p">重要度：高</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ "--w": "88%"} as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="n">プレゼンテーション・報告スキル</span
                        ><span className="p">重要度：高</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ "--w": "86%" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="n">説得スキル</span><span className="p">重要度：高</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ "--w": "83%" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="n">マネジメントスキル</span
                        ><span className="p">重要度：中〜高</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ "--w": "77%" } as React.CSSProperties}></div>
                    </div>
                </div>

                <h4>オープン質問 vs クローズ質問</h4>
                <div className="compare-grid">
                    <div className="compare-card compare-good">
                        <span className="compare-head">✅ オープン質問（推奨）</span>
                        <ul>
                            <li>「テスト計画について教えてください」</li>
                            <li>「現在、最も困っている課題は何ですか？」</li>
                            <li>「理想的なテストプロセスはどんなイメージですか？」</li>
                            <li>→ より多くの情報・洞察を引き出せる</li>
                        </ul>
                    </div>
                    <div className="compare-card compare-bad">
                        <span className="compare-head">⚡ クローズ質問（確認用に限定）</span>
                        <ul>
                            <li>「テスト計画を文書化していますか？」</li>
                            <li>「自動化率は50%以上ですか？」</li>
                            <li>→ Yes/Noのみで情報量が少ない</li>
                            <li>→ 事実確認には有効</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ─── CH8 ─── */}
            <section className="sec" id="ch8">
                <div className="chapter-num">Chapter 8 | K5-K6 | ITPI中核 ★★★★★</div>
                <h2>変更管理（チェンジマネジメント） <span className="kl">285分</span></h2>

                <div className="alert alert-red">
                    <strong>重要事実</strong>
                    テストプロセス改善プログラムが失敗する主な理由の多くは、技術的な問題ではなく<strong>人的・組織的な問題</strong>（変化への抵抗、スポンサー不在、コミュニケーション不足）です。
                </div>

                <h3>Lewin のアンフリーズモデル（3フェーズ） <span className="kl">K5</span></h3>
                <div className="mermaid-wrap">
<Mermaid chart={`flowchart LR
    U["Unfreeze（解凍）<br/>変化の必要性を認識させる<br/>緊急感を醸成する<br/>コミットメントを獲得する"]
    C2["Change（変化）<br/>新しいプロセスを実装する<br/>教育・コーチングを提供する<br/>段階的な変化を推進する"]
    F["Freeze（凍結）<br/>新しい状態を安定させる<br/>文化として定着させる<br/>後退防止の仕組みを作る"]
    U --> C2 --> F
    style U fill:#00e5ff33,stroke:#00e5ff,color:#e8f4fd
    style C2 fill:#ffe60033,stroke:#ffe600,color:#e8f4fd
    style F fill:#00ff8833,stroke:#00ff88,color:#e8f4fd`} />
                </div>

                <h4>コッターの8ステップ変革モデル</h4>
                <ol className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div className="step-content">
                            <div className="t">緊急性の確立（Create Urgency）</div>
                            <div className="d">
                                「なぜ今変わらないといけないか」をデータと事例で組織全体に訴える。
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div className="step-content">
                            <div className="t">ガイド連合の形成</div>
                            <div className="d">
                                変革をリードする強力なチームを構築する。多様なスキルと権限を持つメンバーが必要。
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div className="step-content">
                            <div className="t">ビジョンと戦略の策定</div>
                            <div className="d">
                                変革後の姿と実現方法を明確にする。誰もが理解できる言葉で表現する。
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div className="step-content">
                            <div className="t">変革ビジョンの伝達</div>
                            <div className="d">
                                全員がビジョンを理解し、方向性を共有できるよう繰り返し伝える。
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">5</span>
                        <div className="step-content">
                            <div className="t">行動のためのエンパワーメント</div>
                            <div className="d">障壁を取り除き、現場が変革できる権限と環境を作る。</div>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">6</span>
                        <div className="step-content">
                            <div className="t">短期成果（クイックウィン）の創出</div>
                            <div className="d">
                                早期の小さな成功でモメンタムを維持し、懐疑的な人々を説得する。
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">7</span>
                        <div className="step-content">
                            <div className="t">変化の定着と更なる加速</div>
                            <div className="d">成功を積み重ねてより大きな変革へとつなげる。</div>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">8</span>
                        <div className="step-content">
                            <div className="t">文化への変化の定着</div>
                            <div className="d">新しい行動・プロセスを組織文化として根付かせる。</div>
                        </div>
                    </li>
                </ol>

                <h3>ステークホルダーマッピング（4象限） <span className="kl">K5</span></h3>

                <svg
                    viewBox="0 0 520 300"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="ステークホルダーマッピング"
                    style={{width: "100%", maxWidth: "850px", display: "block", margin: "1.4rem auto", borderRadius: "8px", background: "#040c1a", border: "1px solid #1a3050"}}
                >
                    <line x1="58" y1="252" x2="462" y2="252" stroke="#2a5080" strokeWidth="2" />
                    <line x1="58" y1="252" x2="58" y2="32" stroke="#2a5080" strokeWidth="2" />
                    <polygon points="462,252 446,244 446,260" fill="#2a5080" />
                    <polygon points="58,32 50,48 66,48" fill="#2a5080" />
                    <text
                        x="262"
                        y="276"
                        fill="#4a6080"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        影響力（Power） →
                    </text>
                    <text
                        x="22"
                        y="145"
                        fill="#4a6080"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                        transform="rotate(-90,22,145)"
                    >
                        関心（Interest） →
                    </text>
                    <line
                        x1="58"
                        y1="142"
                        x2="462"
                        y2="142"
                        stroke="#1a3050"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                    />
                    <line
                        x1="260"
                        y1="32"
                        x2="260"
                        y2="252"
                        stroke="#1a3050"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                    />
                    {/* Quadrants */}
                    <rect x="58" y="142" width="202" height="110" fill="#00ff8808" />
                    <rect x="260" y="142" width="202" height="110" fill="#00e5ff08" />
                    <rect x="58" y="32" width="202" height="110" fill="#ff3c7808" />
                    <rect x="260" y="32" width="202" height="110" fill="#ffe60008" />
                    <text
                        x="159"
                        y="178"
                        fill="#00ff88"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        最小限の努力
                    </text>
                    <text x="159" y="194" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        （Monitor）
                    </text>
                    <text
                        x="361"
                        y="178"
                        fill="#00e5ff"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        密接に管理
                    </text>
                    <text x="361" y="194" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        （Manage Closely）
                    </text>
                    <text
                        x="159"
                        y="78"
                        fill="#ff3c78"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        情報を提供
                    </text>
                    <text x="159" y="94" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        （Keep Informed）
                    </text>
                    <text
                        x="361"
                        y="78"
                        fill="#ffe600"
                        fontSize="10"
                        fontFamily="Space Mono"
                        textAnchor="middle"
                    >
                        スポンサー重視
                    </text>
                    <text x="361" y="94" fill="#7a9abf" fontSize="9" textAnchor="middle">
                        （Key Players）
                    </text>
                    {/* Sample points */}
                    <circle cx="375" cy="55" r="7" fill="#ffe600" />
                    <text x="390" y="60" fill="#ffe600" fontSize="9">経営スポンサー</text>
                    <circle cx="358" cy="162" r="7" fill="#00e5ff" />
                    <text x="373" y="167" fill="#00e5ff" fontSize="9">テストMgr</text>
                    <circle cx="140" cy="82" r="7" fill="#ff3c78" />
                    <text x="155" y="87" fill="#ff3c78" fontSize="9">開発者</text>
                    <circle cx="128" cy="198" r="7" fill="#00ff88" />
                    <text x="143" y="203" fill="#00ff88" fontSize="9">その他</text>
                </svg>

                <h3>変化への抵抗 — 原因と対処法</h3>
                <div className="table-wrap">
                    <table><tbody><tr>
                            <th>抵抗の原因</th>
                            <th>効果的な対処法</th>
                        </tr>
                        <tr>
                            <td>現状への満足（「現状で十分」）</td>
                            <td>データで問題を可視化し、緊急性を醸成する</td>
                        </tr>
                        <tr>
                            <td>失敗への恐れ</td>
                            <td>心理的安全性を確保し、失敗を学習と位置づける</td>
                        </tr>
                        <tr>
                            <td>スキル・能力への不安</td>
                            <td>必要な研修・コーチングを提供する</td>
                        </tr>
                        <tr>
                            <td>変化の意味が理解できない</td>
                            <td>オープンな対話の場を設け、理由と便益を説明する</td>
                        </tr>
                        <tr>
                            <td>追加作業への不満</td>
                            <td>改善がワークロードを最終的に下げることを示す</td>
                        </tr>
                        <tr>
                            <td>組織の惰性</td>
                            <td>クイックウィンで「変化は可能」を実証する</td>
                        </tr></tbody></table>
                </div>
            </section>

            {/* ─── CH9 ─── */}
            <section className="sec" id="ch9">
                <div className="chapter-num">Chapter 9 | K5-K6 | ITPI中核 ★★★★★</div>
                <h2>重要成功因子（Critical Success Factors） <span className="kl">300分</span></h2>

                <h3>9.1 9つの重要成功因子（CSF） <span className="kl">K5</span></h3>
                <div className="exam-grid">
                    <div className="exam-card">
                        <span className="el">CSF 1</span
                        ><span className="et">経営のコミットメントとスポンサーシップ</span
                        ><span className="es">★★★★★</span
                        ><span className="ei">予算・時間・人員の確保が不可欠。最重要CSF。</span>
                    </div>
                    <div className="exam-card">
                        <span className="el">CSF 2</span
                        ><span className="et">明確なビジネスゴールとの連携</span
                        ><span className="es">★★★★★</span
                        ><span className="ei">「テストのための改善」ではなくビジネス成功のため。</span>
                    </div>
                    <div className="exam-card">
                        <span className="el">CSF 3</span><span className="et">適切なスコープとリソース</span
                        ><span className="es">★★★★</span
                        ><span className="ei">過度に広いスコープは失敗の元。段階的アプローチ。</span>
                    </div>
                    <div className="exam-card">
                        <span className="el">CSF 4</span><span className="et">強力な改善チームとスキル</span
                        ><span className="es">★★★★</span
                        ><span className="ei">内部＋外部の専門家の適切な組み合わせ。</span>
                    </div>
                    <div className="exam-card">
                        <span className="el">CSF 5</span
                        ><span className="et">効果的なチェンジマネジメント</span
                        ><span className="es">★★★★★</span
                        ><span className="ei">変化への抵抗を管理。コミュニケーション計画の徹底。</span>
                    </div>
                    <div className="exam-card">
                        <span className="el">CSF 6</span><span className="et">測定と可視化</span
                        ><span className="es">★★★★</span
                        ><span className="ei">明確な成功基準とメトリクス。定期的な進捗報告。</span>
                    </div>
                    <div className="exam-card">
                        <span className="el">CSF 7</span
                        ><span className="et">継続的なコミュニケーション</span
                        ><span className="es">★★★★</span
                        ><span className="ei">全ステークホルダーへの透明性のある情報提供。</span>
                    </div>
                    <div className="exam-card">
                        <span className="el">CSF 8</span
                        ><span className="et">クイックウィン（早期成果）</span
                        ><span className="es">★★★★</span
                        ><span className="ei">早期の小さな成功でモメンタムを維持する。</span>
                    </div>
                    <div className="exam-card">
                        <span className="el">CSF 9</span><span className="et">改善文化の醸成</span
                        ><span className="es">★★★★★</span
                        ><span className="ei">継続的改善が「標準的な仕事の進め方」になること。</span>
                    </div>
                </div>

                <h3>9.2 改善文化の特性と醸成 <span className="kl">K6</span></h3>
                <div className="compare-grid">
                    <div className="compare-card compare-good">
                        <span className="compare-head">✅ 良い改善文化の特性</span>
                        <ul>
                            <li>継続的改善が「日常の仕事」になっている</li>
                            <li>失敗を学習の機会として捉える（心理的安全性）</li>
                            <li>データと事実に基づく意思決定</li>
                            <li>オープンなコミュニケーションとフィードバック</li>
                            <li>改善の成功を認め・祝う習慣がある</li>
                            <li>テスト・品質が全員の責任という意識</li>
                        </ul>
                    </div>
                    <div className="compare-card compare-bad">
                        <span className="compare-head">❌ アンチパターン（必ず避ける）</span>
                        <ul>
                            <li>問題を隠す文化（失敗を責める雰囲気）</li>
                            <li>改善提案が却下され続ける環境</li>
                            <li>「いつもこうやってきた」という惰性</li>
                            <li>形式的な改善活動（実態が伴わない）</li>
                            <li>改善に時間・リソースが割り当てられない</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ─── CH10 ─── */}
            <section className="sec" id="ch10">
                <div className="chapter-num">Chapter 10 | K4 | ITPI補足</div>
                <h2>異なるライフサイクルモデルへの適応 <span className="kl">60分</span></h2>

                <div className="table-wrap">
                    <table><tbody><tr>
                            <th>ライフサイクル</th>
                            <th>改善の特徴</th>
                            <th>推奨アクション</th>
                        </tr>
                        <tr>
                            <td>
                                <strong style={{color: "var(--neon-green)"}}>ウォーターフォール</strong>
                            </td>
                            <td>
                                フェーズゲートでのアセスメントが自然。フォーマルな文書レビュー可能。
                            </td>
                            <td>フェーズゲートに改善レビューを組み込む</td>
                        </tr>
                        <tr>
                            <td>
                                <strong style={{color: "var(--neon-cyan)"}}>アジャイル（Scrum）</strong>
                            </td>
                            <td>スプリントレトロスペクティブが自然な改善サイクル（2週間ごと）</td>
                            <td>レトロスペクティブの質を高める</td>
                        </tr>
                        <tr>
                            <td>
                                <strong style={{color: "var(--neon-yellow)"}}>DevOps / CI/CD</strong>
                            </td>
                            <td>テスト自動化率の向上が核心。フィードバックの高速化が目標。</td>
                            <td>DORA 4メトリクスで成熟度を計測</td>
                        </tr></tbody></table>
                </div>

                <h4>モデル適用時に解釈が必要な6つの要因</h4>
                <div className="arch-layers">
                    <div className="arch-row">
                        <span className="arch-num">①</span>
                        <div className="arch-content">
                            <div className="t">SDLCモデル</div>
                            <div className="d">
                                V字/アジャイル/DevOpsによってモデルの適用方法が変わる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">②</span>
                        <div className="arch-content">
                            <div className="t">使用技術</div>
                            <div className="d">
                                Web・OO・組み込みシステムでテスト改善の焦点が異なる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">③</span>
                        <div className="arch-content">
                            <div className="t">システムアーキテクチャ</div>
                            <div className="d">
                                分散システム・SOA・組み込みシステムではテスト戦略が大きく異なる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">④</span>
                        <div className="arch-content">
                            <div className="t">リスクレベル</div>
                            <div className="d">
                                安全クリティカルシステムとビジネスシステムでは要求度が異なる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">⑤</span>
                        <div className="arch-content">
                            <div className="t">テストアプローチ</div>
                            <div className="d">
                                スクリプト型テスト vs 探索的テストではプロセス改善の方向性が変わる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <span className="arch-num">⑥</span>
                        <div className="arch-content">
                            <div className="t">組織文化・コンテキスト</div>
                            <div className="d">
                                組織固有の文化・構造・成熟度がモデルの適用方法に影響する。
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── EXAM ─── */}
            <section className="sec" id="exam">
                <div className="chapter-num">試験対策</div>
                <h2>CTEL-ITP-ITPI 試験直前チェックリスト</h2>
                <p style={{color: "var(--text-muted)"}}>
                    K5（評価）・K6（創造）レベルが中心。シナリオへの適用と計画立案能力が問われます。
                </p>

                <h3>Chapter 2-5（背景知識）</h3>
                <ul className="checklist">
                    <li>デミングサイクル（PDCA）の4ステップを順番に説明できる</li>
                    <li>IDEALフレームワークの5フェーズ（I・D・E・A・L）を順番に説明できる</li>
                    <li>EFQMの8つの卓越性の基本概念を説明できる</li>
                    <li>ガービンの5つの品質ビューを全て説明できる</li>
                    <li>3つの主要改善アプローチの使い分け基準を説明できる</li>
                    <li>TMMiとTPI Nextの主な違い（ステージド/継続）を比較できる</li>
                    <li>GQMの3レベル（Goals/Questions/Metrics）を適用できる</li>
                    <li>DDPの計算式を適用できる（DDP = 検出欠陥 ÷ 全既知欠陥 × 100）</li>
                </ul>

                <h3>Chapter 6（改善プロセス）★最重要</h3>
                <ul className="checklist">
                    <li>IDEALの各フェーズで実施する主要活動を説明できる</li>
                    <li>アセスメントレポートの必須6要素を全て言える</li>
                    <li>テスト改善計画の10構成要素を全て言える（K6）</li>
                    <li>ソリューション分析の5アプローチの長短を比較できる</li>
                    <li>パイロット選択の5基準を説明できる</li>
                    <li>トップダウン vs ボトムアップの違いを説明できる</li>
                    <li>スコープの4観点（汎用/テスト/テストレベル/プロジェクト）を説明できる</li>
                    <li>バランスドスコアカードの4視点を説明できる</li>
                </ul>

                <h3>Chapter 7-10（組織・変更管理・CSF）</h3>
                <ul className="checklist">
                    <li>TPGの役割と3つの組織構造（中央/分散/ハイブリッド）を説明できる</li>
                    <li>内部アセッサー vs 外部アセッサーの長短を比較できる</li>
                    <li>Lewinのアンフリーズモデル（Unfreeze/Change/Freeze）を説明できる</li>
                    <li>コッターの8ステップを順番に説明できる</li>
                    <li>変化への抵抗の主な原因と対処法を5つ以上挙げられる</li>
                    <li>ステークホルダーマッピングの4象限を説明できる</li>
                    <li>9つの重要成功因子（CSF 1〜9）を全て説明できる</li>
                    <li>良い改善文化の特性を5つ以上説明できる</li>
                    <li>DevOps環境でのDORA 4メトリクスを説明できる</li>
                </ul>

                <div className="dv"></div>

                <h3>サンプル問題と解説</h3>

                <div className="trend-card">
                    <span className="trend-label">問1（K6 / Chapter 6.4 テスト改善計画）</span>
                    <p>
                        テストプロセス改善プログラムの「確立（Establishing）」フェーズで作成されるテスト改善計画に<strong>必ず含めるべき内容</strong>はどれか？
                    </p>
                    <p>
                        A) 現在のテストプロセスの詳細な問題リスト<br />
                        B) 改善の目標・スコープ・役割・スケジュール・成功基準<br />
                        C) テスト対象システムの技術アーキテクチャ<br />
                        D) インタビューで収集した全発言の記録
                    </p>
                    <p style={{color: "var(--neon-green)"}}>
                        <strong>正解: B</strong> —
                        テスト改善計画（TIP）の典型的内容（10要素）。Aは診断フェーズの成果物、CはTIPに直接含めるものではない、Dは診断フェーズのインプット情報。
                    </p>
                </div>

                <div className="trend-card">
                    <span className="trend-label">問2（K5 / Chapter 9 重要成功因子）</span>
                    <p>
                        テストプロセス改善プログラムが成功するための<strong>最も重要な条件</strong>はどれか？
                    </p>
                    <p>
                        A) 最新のテスト自動化ツールの導入<br />
                        B) 経営層からの明確なコミットメントとスポンサーシップ<br />
                        C) 詳細なテストプロセス文書の整備<br />
                        D) テスト専任チームの大幅な増員
                    </p>
                    <p style={{color: "var(--neon-green)"}}>
                        <strong>正解: B</strong> — CSF
                        1「経営のコミットメントとスポンサーシップ」が最重要。予算・時間・人員の確保と組織的変革には権限ある支持者が不可欠。
                    </p>
                </div>

                <div className="trend-card">
                    <span className="trend-label">問3（K5 / Chapter 8 変更管理）</span>
                    <p>
                        テスターのチームから「なぜ今まで通りのやり方ではダメなのか」という抵抗を受けた。<strong>最も適切な対処法</strong>はどれか？
                    </p>
                    <p>
                        A) 経営層の権限で強制的に新プロセスを導入する<br />
                        B)
                        テスターを改善計画の策定プロセスに参加させ、変化の理由とメリットを明確に説明する<br />
                        C) 抵抗しているテスターを他のプロジェクトに異動させる<br />
                        D) 改善の範囲をそのチームを除外するよう縮小する
                    </p>
                    <p style={{color: "var(--neon-green)"}}>
                        <strong>正解: B</strong> —
                        変化への抵抗への最も効果的な対処は「参加と関与」。当事者意識を生み出し、変化の理由と便益を自然に理解させる。
                    </p>
                </div>
            </section>

            {/* ─── REFS ─── */}
            <section className="sec" id="refs">
                <div className="chapter-num">参考文献・URL一覧</div>
                <h2>カテゴリ別参考リソース</h2>

                <h3>🏛️ ISTQB® 公式リソース（一次情報源）</h3>
                <div className="ref-grid">
                    <a
                        href="https://istqb.org/certifications/certified-tester-expert-level-implementing-test-process-improvement-ctel-itp-itpi/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">公式 / ITPI 一次情報源</span>
                        <span className="ref-title">CTEL-ITP-ITPI 公式認定ページ</span>
                        <span className="ref-url"
                            >istqb.org/certifications/.../implementing-test-process-improvement-ctel-itp-itpi/</span
                        >
                    </a>
                    <a
                        href="https://istqb.org/certifications/certified-tester-expert-level-assessing-test-processes-ctel-itp-atp/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">公式 / ATP（Part 1）</span>
                        <span className="ref-title">CTEL-ITP-ATP 公式認定ページ</span>
                        <span className="ref-url"
                            >istqb.org/certifications/.../assessing-test-processes-ctel-itp-atp/</span
                        >
                    </a>
                    <a
                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB-CTEL-ITP_Syllabus_v1.0_2011.pdf"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">公式 / シラバスPDF</span>
                        <span className="ref-title">CTEL-ITP 公式シラバス v2011</span>
                        <span className="ref-url"
                            >istqb.org/wp-content/uploads/2024/11/ISTQB-CTEL-ITP_Syllabus_v1.0_2011.pdf</span
                        >
                    </a>
                    <a
                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTEL-ITP-Part_2_Sample_Exam-A-Questions_v1.1.pdf"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">公式 / サンプル問題</span>
                        <span className="ref-title">サンプル試験問題 Part 2 v1.1（PDF）</span>
                        <span className="ref-url"
                            >istqb.org/...ISTQB_CTEL-ITP-Part_2_Sample_Exam-A-Questions_v1.1.pdf</span
                        >
                    </a>
                    <a
                        href="https://glossary.istqb.org/en_US/search?term="
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">公式 / 用語集</span>
                        <span className="ref-title">ISTQBグロッサリー（用語検索）</span>
                        <span className="ref-url">glossary.istqb.org/en_US/search</span>
                    </a>
                    <a
                        href="https://isqi.org/ISTQB-CTEL-ITP-Part-2-Implementing-Test-Process-Improvement/CT-EL-ITP-MCQ-P2.92"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">試験プロバイダー / iSQI</span>
                        <span className="ref-title">iSQI – 試験登録・モックテスト（無料）</span>
                        <span className="ref-url"
                            >isqi.org/ISTQB-CTEL-ITP-Part-2-Implementing-Test-Process-Improvement/CT-EL-ITP-MCQ-P2.92</span
                        >
                    </a>
                </div>

                <h3 style={{marginTop: "2rem"}}>📖 テストプロセス改善モデル</h3>
                <div className="ref-grid">
                    <a
                        href="https://www.tmmifoundation.org/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">モデル / TMMi</span>
                        <span className="ref-title">TMMi Foundation 公式サイト</span>
                        <span className="ref-url">tmmifoundation.org</span>
                    </a>
                    <a
                        href="https://www.tmmifoundation.org/certifications"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">モデル / TMMi 認定</span>
                        <span className="ref-title">TMMi Foundation 認定資格一覧</span>
                        <span className="ref-url">tmmifoundation.org/certifications</span>
                    </a>
                    <a
                        href="https://cmmiinstitute.com/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">モデル / CMMI</span>
                        <span className="ref-title">CMMI Institute 公式サイト</span>
                        <span className="ref-url">cmmiinstitute.com</span>
                    </a>
                    <a
                        href="https://www.iso.org/standard/38932.html"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">標準 / ISO/IEC 15504</span>
                        <span className="ref-title">ISO/IEC 15504（SPICE）</span>
                        <span className="ref-url">iso.org/standard/38932.html</span>
                    </a>
                </div>

                <h3 style={{marginTop: "2rem"}}>🔧 改善フレームワーク・変更管理・DevOps</h3>
                <div className="ref-grid">
                    <a href="https://www.efqm.org/" target="_blank" rel="noopener" className="ref-card">
                        <span className="ref-cat">フレームワーク / EFQM</span>
                        <span className="ref-title">EFQM Excellence Model 公式</span>
                        <span className="ref-url">efqm.org</span>
                    </a>
                    <a
                        href="https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=27427"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">フレームワーク / IDEAL</span>
                        <span className="ref-title">IDEALフレームワーク解説（SEI/CMU）</span>
                        <span className="ref-url"
                            >resources.sei.cmu.edu/library/asset-view.cfm?assetid=27427</span
                        >
                    </a>
                    <a
                        href="https://www.kotterinc.com/methodology/8-steps/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">変更管理 / Kotter</span>
                        <span className="ref-title">コッターの8ステップ変革モデル公式</span>
                        <span className="ref-url">kotterinc.com/methodology/8-steps</span>
                    </a>
                    <a
                        href="https://balancedscorecard.org/bsc-basics/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">フレームワーク / BSC</span>
                        <span className="ref-title">バランスドスコアカード解説（公式）</span>
                        <span className="ref-url">balancedscorecard.org/bsc-basics</span>
                    </a>
                    <a
                        href="https://dora.dev/research/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">DevOps / DORA</span>
                        <span className="ref-title">DORAリサーチ（DevOps 4指標）</span>
                        <span className="ref-url">dora.dev/research</span>
                    </a>
                    <a
                        href="https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/"
                        target="_blank"
                        rel="noopener"
                        className="ref-card"
                    >
                        <span className="ref-cat">前提資格 / CTAL-TM</span>
                        <span className="ref-title">CTAL-TM v3.0 公式（必須前提資格）</span>
                        <span className="ref-url"
                            >istqb.org/certifications/...test-management-ctal-tm-v3-0/</span
                        >
                    </a>
                </div>
            </section>
        
        </>
    );
}
