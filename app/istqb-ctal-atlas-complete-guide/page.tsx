
import './istqb-ctal-atlas-complete-guide.css';
import NavBar from './NavBar';

export default function IstqbCtalAtlasCompleteGuide() {
    return (
        <>
            <NavBar />
            <header className="hero" id="top">
            <div className="hero-glow"></div>
            <div className="container" style={{position: "relative", zIndex: "1"}}>
                <div className="hero-badge">ISTQB® 認定資格 &nbsp;·&nbsp; 2025年版</div>
                <h1>CT-ATLaS<br />完全学習ガイド</h1>
                <p className="hero-sub">
                    Agile Test Leadership at Scale —
                    組織全体の品質文化とアジャイルテストリーダーシップを初学者からわかりやすく解説
                </p>
                <div className="hero-meta-grid">
                    <div className="hero-meta-card">
                        <span className="value">40</span>
                        <span className="label">問題数</span>
                    </div>
                    <div className="hero-meta-card">
                        <span className="value">71</span>
                        <span className="label">合計点</span>
                    </div>
                    <div className="hero-meta-card">
                        <span className="value">47</span>
                        <span className="label">合格点（66%）</span>
                    </div>
                    <div className="hero-meta-card">
                        <span className="value">120<span style={{fontSize: "1rem"}}>分</span></span>
                        <span className="label">試験時間</span>
                    </div>
                    <div className="hero-meta-card">
                        <span className="value">v2.0</span>
                        <span className="label">シラバス</span>
                    </div>
                </div>
            </div>
        </header>

        {/* ============================================================
     OVERVIEW
     ============================================================ */}
        
            <div className="container">
                <section className="section" id="overview">
                    <h2>📘 資格概要と学習ロードマップ</h2>
                    <p>
                        CT-ATLaS（Certified Tester Agile Test Leadership at
                        Scale）は、複数のアジャイルチームを横断し、<strong>組織全体の品質文化・テスト戦略・継続的改善</strong>をリードする専門家を認定するISTQB®国際資格です。2023年9月29日に
                        v2.0 がリリースされました。
                    </p>

                    <div className="callout info">
                        <span className="callout-icon">🎯</span>
                        <div className="callout-body">
                            <div className="callout-title">CT-ATLaS が他資格と異なる3つのポイント</div>
                            <p>
                                ①
                                <strong>組織レベル</strong
                                >（CTAL-TMはプロジェクト・CTAL-ATTはチーム技術レベル）&ensp;②
                                <strong>アジャイル専用</strong
                                >（CTAL-TMは従来型/ハイブリッドもカバー）&ensp;③
                                <strong>テスト管理 → クオリティアシスタンス</strong
                                >へのマインドセット転換が核心
                            </p>
                        </div>
                    </div>

                    {/* 前提資格 */}
                    <div className="arch-layers">
                        <div className="arch-layer">
                            <div className="arch-layer-accent" style={{background: "var(--ch5)"}}></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title" style={{color: "var(--ch5)"}}>
                                    CT-ATLaS v2.0 &nbsp;<span className="tag red">本資格</span>
                                </div>
                                <p className="arch-layer-desc">
                                    組織レベル｜複数アジャイルチームの品質文化・テスト戦略・継続的改善をリードする
                                </p>
                            </div>
                            <div
                                className="arch-layer-tag"
                                style={{background: "rgba(255, 64, 96, 0.15)", color: "var(--ch5)", border: "1px solid rgba(255, 64, 96, 0.3)"}}
                            >
                                Org Level
                            </div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-accent" style={{background: "var(--ch4)"}}></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title" style={{color: "var(--ch4)"}}>
                                    CTAL-TM v3.0 &nbsp;/&nbsp; CTAL-ATT
                                </div>
                                <p className="arch-layer-desc">
                                    プロジェクト/チーム技術レベル｜テスト管理（TM）・アジャイル技術実践（ATT）
                                </p>
                            </div>
                            <div
                                className="arch-layer-tag"
                                style={{background: "rgba(168, 85, 247, 0.15)", color: "var(--ch4)", border: "1px solid rgba(168, 85, 247, 0.3)"}}
                            >
                                Project/Team
                            </div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-accent" style={{background: "var(--ch1)"}}></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title" style={{color: "var(--ch1)"}}>
                                    CTFL v4.0 &nbsp;<span className="tag green">前提資格（必須）</span>
                                </div>
                                <p className="arch-layer-desc">
                                    Foundation Level｜または旧CTFL + CTFL-AT の組み合わせ
                                </p>
                            </div>
                            <div
                                className="arch-layer-tag"
                                style={{background: "rgba(0, 255, 136, 0.15)", color: "var(--ch1)", border: "1px solid rgba(0, 255, 136, 0.3)"}}
                            >
                                Foundation
                            </div>
                        </div>
                    </div>

                    {/* 3大ビジネスアウトカム */}
                    <h3 style={{marginTop: "2rem"}}>3つのビジネスアウトカム</h3>
                    <ul className="step-list">
                        <li>
                            <span className="step-num">BO1</span>
                            <div className="step-content">
                                <strong>品質マインドセットと文化の醸成</strong>
                                <p>
                                    バリュードリブンな品質マインドセットを組織全体に広め、品質は全員の責任であるという文化を作る
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">BO2</span>
                            <div className="step-content">
                                <strong>組織的テスト戦略の共創・実装</strong>
                                <p>
                                    品質とテストの能力を開発する組織的テスト戦略を、ステークホルダーと共同で作成・実装する
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">BO3</span>
                            <div className="step-content">
                                <strong>継続的なテストプロセス改善</strong>
                                <p>
                                    スケールアジャイルの文脈で、組織レベルのテストプロセスを継続的に改善する
                                </p>
                            </div>
                        </li>
                    </ul>

                    {/* 目次 */}
                    <h3 style={{marginTop: "2rem"}}>目次</h3>
                    <div className="toc-grid">
                        <a href="#ch1" className="toc-card" style={{borderTop: "3px solid var(--ch1)"}}>
                            <span className="toc-num" style={{color: "var(--ch1)"}}
                                >Chapter 1 &nbsp;·&nbsp; K2</span
                            >
                            <span className="toc-title">クオリティアシスタンス</span>
                            <span className="toc-mins">📖 60分</span>
                        </a>
                        <a href="#ch2" className="toc-card" style={{borderTop: "3px solid var(--ch2)"}}>
                            <span className="toc-num" style={{color: "var(--ch2)"}}
                                >Chapter 2 &nbsp;·&nbsp; K3</span
                            >
                            <span className="toc-title">品質とフローの改善</span>
                            <span className="toc-mins">📖 120分</span>
                        </a>
                        <a href="#ch3" className="toc-card" style={{borderTop: "3px solid var(--ch3)"}}>
                            <span className="toc-num" style={{color: "var(--ch3)"}}
                                >Chapter 3 &nbsp;·&nbsp; K3</span
                            >
                            <span className="toc-title">継続的改善</span>
                            <span className="toc-mins">📖 150分</span>
                        </a>
                        <a href="#ch4" className="toc-card" style={{borderTop: "3px solid var(--ch4)"}}>
                            <span className="toc-num" style={{color: "var(--ch4)"}}
                                >Chapter 4 &nbsp;·&nbsp; K4</span
                            >
                            <span className="toc-title">組織的テスト戦略</span>
                            <span className="toc-mins">📖 165分</span>
                        </a>
                        <a href="#ch5" className="toc-card" style={{borderTop: "3px solid var(--ch5)"}}>
                            <span className="toc-num" style={{color: "var(--ch5)"}}
                                >Chapter 5 &nbsp;·&nbsp; K4</span
                            >
                            <span className="toc-title">テストプロセス</span>
                            <span className="toc-mins">📖 195分</span>
                        </a>
                    </div>

                    {/* 学習時間プログレスバー */}
                    <h3>章別学習時間配分</h3>
                    <div className="progress-list">
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">Ch.1 クオリティアシスタンス</span>
                                <span className="progress-value">60分 (8.7%)</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div
                                    className="progress-bar-fill"
                                    style={{ "--fill-width": "8.7%", background: "var(--ch1)" } as React.CSSProperties}
                                ></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">Ch.2 品質とフローの改善</span>
                                <span className="progress-value">120分 (17.4%)</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div
                                    className="progress-bar-fill"
                                    style={{ "--fill-width": "17.4%", background: "var(--ch2)" } as React.CSSProperties}
                                ></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">Ch.3 継続的改善</span>
                                <span className="progress-value">150分 (21.7%)</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div
                                    className="progress-bar-fill"
                                    style={{ "--fill-width": "21.7%", background: "var(--ch3)" } as React.CSSProperties}
                                ></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">Ch.4 組織的テスト戦略</span>
                                <span className="progress-value">165分 (23.9%)</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div
                                    className="progress-bar-fill"
                                    style={{ "--fill-width": "23.9%", background: "var(--ch4)" } as React.CSSProperties}
                                ></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">Ch.5 テストプロセス</span>
                                <span className="progress-value">195分 (28.3%)</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div
                                    className="progress-bar-fill"
                                    style={{ "--fill-width": "28.3%", background: "var(--ch5)" } as React.CSSProperties}
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
     CHAPTER 1: QUALITY ASSISTANCE
     ============================================================ */}
                <section className="section ch1-theme" id="ch1">
                    <div className="section-header">
                        <div className="chapter-num">1</div>
                        <div className="section-title-wrap">
                            <h2 style={{color: "var(--ch1)"}}>
                                クオリティアシスタンス <span className="section-klevel">K2</span>
                            </h2>
                            <p style={{color: "var(--text-muted)", fontSize: "0.88rem", margin: "0"}}>
                                Quality Assistance — 60分
                            </p>
                        </div>
                    </div>

                    {/* 1.1 定義 */}
                    <h3>1.1 クオリティアシスタンスとは？</h3>
                    <p>
                        <strong>クオリティアシスタンス（Quality Assistance）</strong
                        >とは、アジャイル組織において「テストチームだけが品質に責任を持つ」テストサイロ構造を解体し、<strong>組織全体が品質に責任を持つ文化</strong>を構築するアプローチです。Lean・Agile
                        の原則に基づき、テストリーダーは「制御者」から「支援者・コーチ」へと役割を転換します。
                    </p>

                    <div className="callout warning">
                        <span className="callout-icon">⚠️</span>
                        <div className="callout-body">
                            <div className="callout-title">
                                重要：テスト管理が不要になるわけではない
                            </div>
                            <p>
                                クオリティアシスタンスはテスト管理（規律）を廃止するものではありません。テスト管理の<strong>アプローチと焦点が変わる</strong>のです。品質の規律は引き続き必要で、それをより効果的な方法で実践します。
                            </p>
                        </div>
                    </div>

                    {/* 比較テーブル */}
                    <h3>伝統的テスト管理 vs クオリティアシスタンス</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>観点</th>
                                    <th>伝統的テスト管理</th>
                                    <th>クオリティアシスタンス</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>役割</td>
                                    <td>品質の門番・制御者</td>
                                    <td>サーバントリーダー・支援者</td>
                                </tr>
                                <tr>
                                    <td>テストの位置付け</td>
                                    <td>テストフェーズの管理</td>
                                    <td>継続的な品質活動</td>
                                </tr>
                                <tr>
                                    <td>品質の責任者</td>
                                    <td>テストチーム（サイロ）</td>
                                    <td>組織全員</td>
                                </tr>
                                <tr>
                                    <td>アプローチ</td>
                                    <td>欠陥の検出・報告</td>
                                    <td>予防・自動化・可観測性</td>
                                </tr>
                                <tr>
                                    <td>タイミング</td>
                                    <td>最後にまとめてテスト</td>
                                    <td>Built-in Quality（継続的）</td>
                                </tr>
                                <tr>
                                    <td>コミュニティ活動</td>
                                    <td>個別チームへの指示</td>
                                    <td>CoP（実践コミュニティ）促進</td>
                                </tr>
                                <tr>
                                    <td>リソース</td>
                                    <td>権限による管理</td>
                                    <td>スキル・コーチングによる影響</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* シフトレフト/ライト */}
                    <h3>シフトレフト & シフトライト</h3>
                    <p>
                        クオリティアシスタンスでは、品質活動を開発の<strong>より早い段階</strong>（シフトレフト）にも<strong>本番環境</strong>（シフトライト）にも拡張します。
                    </p>

                    <div className="arch-layers">
                        <div className="arch-layer">
                            <div
                                className="arch-layer-accent"
                                style={{background: "var(--neon-green)"}}
                            ></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title">← シフトレフト（Shift Left）</div>
                                <p className="arch-layer-desc">
                                    要件定義・設計段階での品質活動。TDD、コードレビュー、要件のテスト可能性確認。欠陥を早期発見するほど修正コストが低い（フェーズが進むと100倍になる）
                                </p>
                            </div>
                            <div
                                className="arch-layer-tag"
                                style={{background: "rgba(0, 255, 136, 0.15)", color: "var(--neon-green)", border: "1px solid rgba(0, 255, 136, 0.3)"}}
                            >
                                早期品質
                            </div>
                        </div>
                        <div className="arch-layer">
                            <div
                                className="arch-layer-accent"
                                style={{background: "var(--neon-cyan)"}}
                            ></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title">→ シフトライト（Shift Right）</div>
                                <p className="arch-layer-desc">
                                    本番環境での品質活動。モニタリング・可観測性・A/Bテスト・カナリアリリース・合成トランザクション。実際のユーザー行動から品質を向上させる
                                </p>
                            </div>
                            <div
                                className="arch-layer-tag"
                                style={{background: "rgba(0, 229, 255, 0.15)", color: "var(--neon-cyan)", border: "1px solid rgba(0, 229, 255, 0.3)"}}
                            >
                                本番品質
                            </div>
                        </div>
                    </div>

                    {/* 1.2 4つのスキル */}
                    <h3>1.2 クオリティアシスタンスの4大スキル</h3>
                    <p>
                        アジャイルテストリーダーは以下の4スキルを組み合わせて、組織全体に品質能力を広げます。
                    </p>

                    <ul className="step-list">
                        <li>
                            <span
                                className="step-num"
                                style={{background: "var(--ch1)", color: "var(--bg-deep)"}}
                                >S1</span
                            >
                            <div className="step-content">
                                <strong>チェンジリーダーシップ（Change Leadership）</strong>
                                <p>
                                    組織変革を成功に導くスキル。人々の変化への抵抗に対応し、心理的安全性を構築しながら品質文化の変革を推進する。「押し付け」ではなく「対話と共創」で変革を進める。
                                </p>
                            </div>
                        </li>
                        <li>
                            <span
                                className="step-num"
                                style={{background: "var(--ch1)", color: "var(--bg-deep)"}}
                                >S2</span
                            >
                            <div className="step-content">
                                <strong>クオリティコーチング（Quality Coaching）</strong>
                                <p>
                                    内省を促す協調的な対話スキル。ティーチング（知識提供）・コーチング（気づき促進）・メンタリング（経験共有）を使い分け、チームが自ら品質課題の解決策を見つけるよう支援する。
                                </p>
                            </div>
                        </li>
                        <li>
                            <span
                                className="step-num"
                                style={{background: "var(--ch1)", color: "var(--bg-deep)"}}
                                >S3</span
                            >
                            <div className="step-content">
                                <strong>ファシリテーション（Facilitation）</strong>
                                <p>
                                    人々が共通の目標に向かうプロセスを支援するスキル。World
                                    Café・レトロスペクティブ・Impact
                                    Mappingなどを使い、品質への共有責任を構築する。中立性を保ち全員の参加を促す。
                                </p>
                            </div>
                        </li>
                        <li>
                            <span
                                className="step-num"
                                style={{background: "var(--ch1)", color: "var(--bg-deep)"}}
                                >S4</span
                            >
                            <div className="step-content">
                                <strong>トレーニング（Training）</strong>
                                <p>
                                    組織全体に品質スキルを広げるスキル。形式的トレーニング・実践的学習（Learning
                                    by
                                    Doing）・CoP（コミュニティ・オブ・プラクティス）を組み合わせ、スケールするトレーニング戦略を構築する。
                                </p>
                            </div>
                        </li>
                    </ul>

                    {/* Good/Bad 例 */}
                    <h3>具体例：コーチングの良い例・悪い例</h3>
                    <div className="compare-grid">
                        <div className="compare-card bad">
                            <div className="compare-header">❌ 指示型（悪い例）</div>
                            <ul>
                                <li>「明日からテストを書くようにしてください」</li>
                                <li>「自動化率が低いので改善してください」</li>
                                <li>「なぜこの欠陥が本番に流出したのか報告書を書いてください」</li>
                            </ul>
                        </div>
                        <div className="compare-card good">
                            <div className="compare-header">✅ コーチング型（良い例）</div>
                            <ul>
                                <li>「コードを書く際に最も課題に感じていることは何ですか？」</li>
                                <li>
                                    「テストを書きやすくするために何が変わればよいと思いますか？」
                                </li>
                                <li>
                                    「次のスプリントで小さな実験として試せることはありますか？」
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="alert cyan">
                        📚 <strong>参考文献（Ch.1）</strong>&emsp;
                        <a
                            href="https://istqb.org/certifications/certified-tester-agile-test-leadership-at-scale-ct-atlas/"
                            target="_blank"
                            >ISTQB CT-ATLaS 公式ページ</a
                        >
                        &nbsp;|&nbsp;
                        <a
                            href="https://istqb.org/?sdm_process_download=1&download_id=3532"
                            target="_blank"
                            >CT-ATLaS シラバス v2.0 (PDF)</a
                        >
                    </div>
                </section>

                {/* ============================================================
     CHAPTER 2: VALUE STREAM
     ============================================================ */}
                <section className="section ch2-theme" id="ch2">
                    <div className="section-header">
                        <div className="chapter-num">2</div>
                        <div className="section-title-wrap">
                            <h2 style={{color: "var(--ch2)"}}>
                                バリュードリブン組織における品質とフローの改善
                                <span className="section-klevel">K3</span>
                            </h2>
                            <p style={{color: "var(--text-muted)", fontSize: "0.88rem", margin: "0"}}>
                                Improve Quality and Flow in a Value-Driven Organization — 120分
                            </p>
                        </div>
                    </div>

                    {/* 2.1 バリューストリーム定義 */}
                    <h3>2.1 バリューストリームとは？</h3>
                    <p>
                        <strong>バリューストリーム（Value Stream）</strong
                        >とは、顧客に価値を提供するために必要な<strong>全てのアクション・ステップの流れ</strong>です。リーン（Lean）思想に基づく概念で、CTATLaSではソフトウェア開発組織の改善に適用します。
                    </p>

                    <div className="compare-grid">
                        <div className="compare-card good">
                            <div className="compare-header" style={{color: "var(--neon-cyan)"}}>
                                開発バリューストリーム
                            </div>
                            <ul>
                                <li>新機能・製品を開発して顧客に届けるまでの流れ</li>
                                <li>アイデア → 要件 → 設計 → 開発 → テスト → デプロイ</li>
                                <li>CT-ATLaS が主に対象とするストリーム</li>
                            </ul>
                        </div>
                        <div className="compare-card good">
                            <div className="compare-header" style={{color: "var(--neon-cyan)"}}>
                                運用バリューストリーム
                            </div>
                            <ul>
                                <li>顧客に継続的にサービスを提供するための流れ</li>
                                <li>顧客要求 → サポート → 問題解決 → 回答</li>
                                <li>インシデント対応・監視なども含む</li>
                            </ul>
                        </div>
                    </div>

                    {/* 2.2 VSM */}
                    <h3>2.2 バリューストリームマッピング（VSM）</h3>
                    <p>
                        VSMはリーンの代表的な手法で、現在のバリューストリームを可視化し、<strong>無駄（ムダ）を特定して改善</strong>するための図解技法です。
                    </p>

                    <div className="code-block" data-lang="VSM記号">
                        <pre dangerouslySetInnerHTML={{ __html: "\n<span class=\"code-comment\">// バリューストリームマップの主要記号</span>\n\n<span class=\"code-green\">□ 外部エンティティ</span>    : 顧客・サプライヤー（ストリームの開始/終了）\n<span class=\"code-cyan\">□ プロセスボックス</span>    : 作業ステップ + PT（処理時間）・WT（待機時間）\n<span class=\"code-amber\">△ 在庫/キュー</span>        : 待ち状態の成果物（数量を記載）\n<span class=\"code-keyword\">→ 情報フロー</span>          : 情報の流れ（電子情報は稲妻矢印）\n<span class=\"code-comment\">─ タイムライン</span>        : 処理時間と待機時間を下部に記入\n\n<span class=\"code-comment\">// 主要メトリクス</span>\n<span class=\"code-green\">リードタイム（LT）</span>     = アイデアから顧客提供までの総時間\n<span class=\"code-cyan\">サイクルタイム（CT）</span>   = 実際の作業処理時間\n<span class=\"code-amber\">プロセス効率</span>           = 価値時間（PT合計）/ リードタイム × 100\n" }} />
                    </div>

                    {/* 実例計算 */}
                    <h3>プロセス効率の計算例</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>ステップ</th>
                                    <th>処理時間（PT）</th>
                                    <th>待機時間（WT）</th>
                                    <th>合計</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>要件定義</td>
                                    <td>3日</td>
                                    <td>7日</td>
                                    <td>10日</td>
                                </tr>
                                <tr>
                                    <td>設計</td>
                                    <td>2日</td>
                                    <td>5日</td>
                                    <td>7日</td>
                                </tr>
                                <tr>
                                    <td>開発</td>
                                    <td>10日</td>
                                    <td>7日</td>
                                    <td>17日</td>
                                </tr>
                                <tr>
                                    <td>テスト</td>
                                    <td>5日</td>
                                    <td>3日</td>
                                    <td>8日</td>
                                </tr>
                                <tr>
                                    <td>デプロイ</td>
                                    <td>1日</td>
                                    <td>1日</td>
                                    <td>2日</td>
                                </tr>
                                <tr style={{background: "var(--bg-hover)"}}>
                                    <td><strong>合計</strong></td>
                                    <td><strong>21日（価値時間）</strong></td>
                                    <td><strong>23日（非価値）</strong></td>
                                    <td><strong>44日（リードタイム）</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="metric-grid">
                        <div className="metric-card">
                            <span className="metric-value">44日</span>
                            <span className="metric-label">リードタイム</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value">21日</span>
                            <span className="metric-label">価値時間（PT）</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value" style={{color: "var(--neon-amber)"}}>47.7%</span>
                            <span className="metric-label">プロセス効率</span>
                            <span className="metric-sub">21 / 44 × 100</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value" style={{color: "var(--neon-red)"}}>23日</span>
                            <span className="metric-label">無駄な待機時間</span>
                            <span className="metric-sub">ボトルネック：開発待ち</span>
                        </div>
                    </div>

                    {/* 8つのムダ */}
                    <h3>2.3 リーンの8つのムダ（テスト・品質への適用）</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>ムダの種類</th>
                                    <th>テスト・品質での具体例</th>
                                    <th>改善策</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>①作り過ぎ</td>
                                    <td>使われないテストケースの大量作成</td>
                                    <td>リスクベースでテスト対象を厳選</td>
                                </tr>
                                <tr>
                                    <td>②待ち</td>
                                    <td>レビュー待ち・環境待ち・承認待ち</td>
                                    <td>WIP制限・非同期レビュー導入</td>
                                </tr>
                                <tr>
                                    <td>③運搬</td>
                                    <td>欠陥情報の手動転記・ツール間コピー</td>
                                    <td>ツール統合・自動連携の整備</td>
                                </tr>
                                <tr>
                                    <td>④過剰処理</td>
                                    <td>不要なほど詳細なテストドキュメント</td>
                                    <td>軽量ドキュメント・生きたドキュメント</td>
                                </tr>
                                <tr>
                                    <td>⑤在庫</td>
                                    <td>テストされていない機能の蓄積</td>
                                    <td>継続的テスト・CI/CDパイプライン</td>
                                </tr>
                                <tr>
                                    <td>⑥動作</td>
                                    <td>情報を探すための余計な移動・検索</td>
                                    <td>情報の一元化・可視化ダッシュボード</td>
                                </tr>
                                <tr>
                                    <td>⑦欠陥</td>
                                    <td>本番への欠陥流出・再テスト工数</td>
                                    <td>シフトレフト・TDD・コードレビュー強化</td>
                                </tr>
                                <tr>
                                    <td>⑧未活用の才能</td>
                                    <td>テスターの改善提案が活用されない</td>
                                    <td>CoPの設置・改善提案の仕組み化</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="alert cyan">
                        📚 <strong>参考文献（Ch.2）</strong>&emsp;
                        <a href="https://en.wikipedia.org/wiki/Value_stream_mapping" target="_blank"
                            >Wikipedia: Value Stream Mapping</a
                        >
                        &nbsp;|&nbsp;
                        <a href="https://www.lean.org/explore-lean/what-is-lean/" target="_blank"
                            >Lean Enterprise Institute</a
                        >
                    </div>
                </section>

                {/* ============================================================
     CHAPTER 3: CONTINUOUS IMPROVEMENT
     ============================================================ */}
                <section className="section ch3-theme" id="ch3">
                    <div className="section-header">
                        <div className="chapter-num">3</div>
                        <div className="section-title-wrap">
                            <h2 style={{color: "var(--ch3)"}}>
                                品質とテストの継続的改善 <span className="section-klevel">K3</span>
                            </h2>
                            <p style={{color: "var(--text-muted)", fontSize: "0.88rem", margin: "0"}}>
                                Continuous Improvement of Quality and Testing — 150分
                            </p>
                        </div>
                    </div>

                    {/* PDCA */}
                    <h3>3.1 PDCAサイクル — 継続的改善の基本</h3>
                    <p>
                        <strong>PDCA（Plan-Do-Check-Act）サイクル</strong
                        >は、継続的改善のための反復的フレームワークです。アジャイルではスプリント＝1サイクルとして機能し、レトロスペクティブがCheck+Actに相当します。
                    </p>

                    <div className="callout info">
                        <span className="callout-icon">💡</span>
                        <div className="callout-body">
                            <div className="callout-title">「問題」の正しい定義</div>
                            <p>
                                CT-ATLaSにおける「問題（Problem）」は「<strong>期待パフォーマンス値と現実のギャップ</strong>」として数値で定義します。「欠陥が多い」ではなく「本番欠陥数が月15件（目標5件）→
                                ギャップ＝10件/月」のように具体化することが必須です。
                            </p>
                        </div>
                    </div>

                    <ul className="step-list">
                        <li>
                            <span
                                className="step-num"
                                style={{background: "var(--ch3)", color: "var(--bg-deep)"}}
                                >P</span
                            >
                            <div className="step-content">
                                <strong
                                    >Plan（計画） —
                                    問題を数値ギャップで定義し、仮説と実験計画を立てる</strong
                                >
                                <p>
                                    現状メトリクスの把握 → ギャップ分析 → SMARTな改善目標設定 →
                                    小規模実験計画の策定。「全部変える」のではなく「最小の実験で検証する」が鍵。
                                </p>
                            </div>
                        </li>
                        <li>
                            <span
                                className="step-num"
                                style={{background: "var(--ch3)", color: "var(--bg-deep)"}}
                                >D</span
                            >
                            <div className="step-content">
                                <strong
                                    >Do（実行） — 小さなスコープでパイロット実施、データ収集</strong
                                >
                                <p>
                                    限定スコープで変更を試す。全チームに一度に展開せず、1〜2チームで実験。実施中も結果データを継続収集する。
                                </p>
                            </div>
                        </li>
                        <li>
                            <span
                                className="step-num"
                                style={{background: "var(--ch3)", color: "var(--bg-deep)"}}
                                >C</span
                            >
                            <div className="step-content">
                                <strong
                                    >Check（確認） — 実験結果を評価し、仮説の妥当性を検証</strong
                                >
                                <p>
                                    収集データを分析し「期待した成果が得られたか？」をデータで判断。感覚ではなくメトリクスで評価する。
                                </p>
                            </div>
                        </li>
                        <li>
                            <span
                                className="step-num"
                                style={{background: "var(--ch3)", color: "var(--bg-deep)"}}
                                >A</span
                            >
                            <div className="step-content">
                                <strong
                                    >Act（改善） —
                                    成功を標準化して全体展開、失敗から次の仮説を立てる</strong
                                >
                                <p>
                                    成功した改善をWork
                                    Standard（標準作業）として組み込み組織全体へ展開。失敗の場合は学びを次のPDCAサイクルへ。
                                </p>
                            </div>
                        </li>
                    </ul>

                    {/* PDCA コード例 */}
                    <h3>PDCAサイクル実践コード例</h3>
                    <div className="code-block" data-lang="Python">
                        <pre dangerouslySetInnerHTML={{ __html: "\n<span class=\"code-keyword\">from</span> dataclasses <span class=\"code-keyword\">import</span> dataclass\n<span class=\"code-keyword\">from</span> typing <span class=\"code-keyword\">import</span> Optional\n\n@dataclass\n<span class=\"code-keyword\">class</span> <span class=\"code-cyan\">PDCACycle</span>:\n    <span class=\"code-comment\"># ── PLAN ──────────────────────────────────────────────</span>\n    problem_statement: str    <span class=\"code-comment\"># ギャップとして定義</span>\n    current_metric: float     <span class=\"code-comment\"># 現状値（例: 月15件の本番欠陥）</span>\n    target_metric: float      <span class=\"code-comment\"># 目標値（例: 月5件）</span>\n    hypothesis: str           <span class=\"code-comment\"># 仮説</span>\n    experiment_plan: str      <span class=\"code-comment\"># 小規模実験計画</span>\n\n    <span class=\"code-comment\"># ── DO ────────────────────────────────────────────────</span>\n    actions_taken: list[str]  <span class=\"code-comment\"># 実施したアクション</span>\n\n    <span class=\"code-comment\"># ── CHECK ─────────────────────────────────────────────</span>\n    result_metric: Optional[float] = None\n    learnings: Optional[str] = None\n\n    <span class=\"code-comment\"># ── ACT ───────────────────────────────────────────────</span>\n    standardized: Optional[bool] = None\n    next_cycle_plan: Optional[str] = None\n\n    @property\n    <span class=\"code-keyword\">def</span> <span class=\"code-green\">performance_gap</span>(self) -&gt; float:\n        <span class=\"code-keyword\">return</span> self.target_metric - self.current_metric\n\n<span class=\"code-comment\"># 実践例：本番欠陥削減のPDCAサイクル</span>\ncycle = <span class=\"code-cyan\">PDCACycle</span>(\n    problem_statement=<span class=\"code-string\">\"本番欠陥が月15件（目標5件）。ギャップ=10件/月\"</span>,\n    current_metric=<span class=\"code-number\">15.0</span>,\n    target_metric=<span class=\"code-number\">5.0</span>,\n    hypothesis=<span class=\"code-string\">\"APIテストカバレッジ強化で欠陥を50%削減できる\"</span>,\n    experiment_plan=<span class=\"code-string\">\"2スプリントでAPIテストを60%→85%に向上\"</span>,\n    actions_taken=[\n        <span class=\"code-string\">\"開発者と共同でAPIテストを30件追加\"</span>,\n        <span class=\"code-string\">\"テストレビューをPRの必須チェックに追加\"</span>,\n    ],\n    result_metric=<span class=\"code-number\">8.0</span>,   <span class=\"code-comment\"># 8件に改善（目標届かず）</span>\n    learnings=<span class=\"code-string\">\"API強化有効だがフロントエンドのカバレッジ不足が残存\"</span>,\n    standardized=<span class=\"code-number\">True</span>,    <span class=\"code-comment\"># APIテスト追加を標準プロセスへ</span>\n    next_cycle_plan=<span class=\"code-string\">\"次回はE2Eカバレッジ向上を実験\"</span>,\n)\nprint(f<span class=\"code-string\">\"ギャップ: {cycle.performance_gap:.0f}件/月\"</span>)\nprint(f<span class=\"code-string\">\"改善結果: {cycle.current_metric}件 → {cycle.result_metric}件\"</span>)\n" }} />
                    </div>

                    {/* Systems Thinking */}
                    <h3>3.2 システム思考と根本原因分析</h3>
                    <p>
                        <strong>システム思考（Systems Thinking）</strong
                        >とは、物事を孤立した問題ではなく<strong>相互に影響し合うシステムの一部</strong>として捉える思考法です。
                    </p>

                    <div className="compare-grid">
                        <div className="compare-card bad">
                            <div className="compare-header">❌ 線形思考（表面的）</div>
                            <ul>
                                <li>「欠陥が多い → テストを増やす → 解決！」</li>
                                <li>症状を治療するだけで根本原因に届かない</li>
                                <li>問題が繰り返し発生する（バンドエイド）</li>
                            </ul>
                        </div>
                        <div className="compare-card good">
                            <div className="compare-header">✅ システム思考（根本原因）</div>
                            <ul>
                                <li>「なぜ欠陥が多いのか？」を複数の要因から分析</li>
                                <li>スキル不足・設計の問題・プレッシャー・プロセスを相互に考慮</li>
                                <li>フィードバックループを特定して根本から解決</li>
                            </ul>
                        </div>
                    </div>

                    {/* 5-Why */}
                    <h3>根本原因分析：5-Why分析</h3>
                    <div className="code-block" data-lang="5-Why">
                        <pre dangerouslySetInnerHTML={{ __html: "\n<span class=\"code-green\">問題:</span> テスト環境が頻繁にダウンする\n\n<span class=\"code-cyan\">Why1:</span> Dockerコンテナのメモリが枯渇するため\n   <span class=\"code-amber\">Why2:</span> 並行テストが多すぎてリソースを使い切るため\n      <span class=\"code-cyan\">Why3:</span> テストの並行数を制限する設定がないため\n         <span class=\"code-amber\">Why4:</span> インフラ設定の標準が定められていないため\n            <span class=\"code-green\">Why5:</span> テストインフラの責任者・プロセスが不明確なため\n\n<span class=\"code-comment\">→ 根本原因: テストインフラのガバナンス不在</span>\n<span class=\"code-comment\">→ 解決策: テストインフラオーナーを設置し、設定標準を策定する</span>\n" }} />
                    </div>

                    {/* 因果ループ図 */}
                    <h3>3.3 因果ループ図（Causal Loop Diagram: CLD）</h3>
                    <p>
                        CLDはシステム内の変数間の<strong>因果関係とフィードバックループ</strong>を可視化する図です。
                    </p>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>ループの種類</th>
                                    <th>記号</th>
                                    <th>特性</th>
                                    <th>例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>強化ループ（R）</strong></td>
                                    <td><code>→(+)→ ループ</code></td>
                                    <td>自己強化（スノーボール）</td>
                                    <td>
                                        技術的負債↑ → バグ↑ → 修正時間↑ → テスト省略↑ → さらに負債↑
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>バランスループ（B）</strong></td>
                                    <td><code>→(-)→ ループ</code></td>
                                    <td>目標値へ自己調整</td>
                                    <td>バグ↑ → テスト強化↑ → バグ検出↑ → バグ↓</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="code-block" data-lang="CLD概念">
                        <pre dangerouslySetInnerHTML={{ __html: "\n<span class=\"code-comment\">// 技術的負債の悪循環（強化ループ R1）</span>\n\n<span class=\"code-green\">技術的負債</span> ─(+)→ <span class=\"code-amber\">バグ発生率</span>\n                      │\n                     (+)\n                      ↓\n<span class=\"code-cyan\">テストの省略</span> ←(+)─ <span class=\"code-red\">リリースプレッシャー</span> ←(+)─ <span class=\"code-amber\">バグ修正時間</span>\n    │\n   (+)\n    ↓\n<span class=\"code-green\">技術的負債</span>  ← ループ閉じる（悪循環！）\n\n<span class=\"code-comment\">// 介入ポイント</span>\n<span class=\"code-keyword\">1.</span> DoD にテスト必須化 → テスト省略を防ぐ\n<span class=\"code-keyword\">2.</span> 定期リファクタリング → 技術的負債を減らす\n<span class=\"code-keyword\">3.</span> TDD・コードレビュー → バグ発生率を下げる\n" }} />
                    </div>

                    <div className="alert cyan">
                        📚 <strong>参考文献（Ch.3）</strong>&emsp;
                        <a href="https://www.lean.org/" target="_blank"
                            >Lean Enterprise Institute</a
                        >
                        &nbsp;|&nbsp;
                        <a href="https://thesystemsthinker.com/" target="_blank"
                            >The Systems Thinker</a
                        >
                    </div>
                </section>

                {/* ============================================================
     CHAPTER 4: ORGANIZATIONAL TEST STRATEGY
     ============================================================ */}
                <section className="section ch4-theme" id="ch4">
                    <div className="section-header">
                        <div className="chapter-num">4</div>
                        <div className="section-title-wrap">
                            <h2 style={{color: "var(--ch4)"}}>
                                バリュードリブン組織における組織的テスト戦略
                                <span className="section-klevel">K4</span>
                            </h2>
                            <p style={{color: "var(--text-muted)", fontSize: "0.88rem", margin: "0"}}>
                                Organizational Test Strategy in a Value-Driven Organization — 165分
                            </p>
                        </div>
                    </div>

                    <h3>4.1 組織的テスト戦略 vs プロジェクトテスト戦略</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>観点</th>
                                    <th>プロジェクトテスト戦略（CTAL-TM）</th>
                                    <th>組織的テスト戦略（CT-ATLaS）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>スコープ</td>
                                    <td>単一プロジェクト・特定チーム</td>
                                    <td>組織全体・複数チーム</td>
                                </tr>
                                <tr>
                                    <td>期間</td>
                                    <td>プロジェクト期間中のみ（時限的）</td>
                                    <td>継続的（生きた文書として更新）</td>
                                </tr>
                                <tr>
                                    <td>対象</td>
                                    <td>従来型・ハイブリッド・アジャイル</td>
                                    <td>アジャイル組織専用</td>
                                </tr>
                                <tr>
                                    <td>焦点</td>
                                    <td>テスト計画・欠陥管理・見積もり</td>
                                    <td>品質文化・能力開発・戦略的整合</td>
                                </tr>
                                <tr>
                                    <td>作成者</td>
                                    <td>テスト管理者</td>
                                    <td>アジャイルテストリーダー＋全ステークホルダー共創</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* DevOps Practices */}
                    <h3>4.1.1 重要なDevOpsプラクティス（組織戦略に組み込む項目）</h3>
                    <div className="arch-layers">
                        <div className="arch-layer">
                            <div className="arch-layer-accent" style={{background: "var(--ch4)"}}></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title">継続的インテグレーション（CI）</div>
                                <p className="arch-layer-desc">
                                    コードを頻繁にメインブランチへ統合し、自動ビルド・自動テストで即時フィードバック。「私のマシンでは動く」問題を排除する。
                                </p>
                            </div>
                        </div>
                        <div className="arch-layer">
                            <div
                                className="arch-layer-accent"
                                style={{background: "var(--neon-cyan)"}}
                            ></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title">
                                    継続的テスト（Continuous Testing）
                                </div>
                                <p className="arch-layer-desc">
                                    CI/CDパイプライン全体でテストを実行。本番環境での監視・合成テストも含む。テストが「フェーズ」ではなく「継続活動」になる。
                                </p>
                            </div>
                        </div>
                        <div className="arch-layer">
                            <div
                                className="arch-layer-accent"
                                style={{background: "var(--neon-green)"}}
                            ></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title">可観測性（Observability）</div>
                                <p className="arch-layer-desc">
                                    ログ・メトリクス・トレーシングの3柱で本番環境を監視。問題を早期に発見し、シフトライトテストを実現する。
                                </p>
                            </div>
                        </div>
                        <div className="arch-layer">
                            <div
                                className="arch-layer-accent"
                                style={{background: "var(--neon-amber)"}}
                            ></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title">
                                    フィーチャーフラグ & カナリアリリース
                                </div>
                                <p className="arch-layer-desc">
                                    コード変更なしに機能をオン/オフ制御。一部ユーザーへの段階的展開でリスクを最小化。A/Bテストを実現する。
                                </p>
                            </div>
                        </div>
                        <div className="arch-layer">
                            <div
                                className="arch-layer-accent"
                                style={{background: "var(--neon-red)"}}
                            ></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title">
                                    継続的デリバリー / デプロイメント（CD）
                                </div>
                                <p className="arch-layer-desc">
                                    継続的デリバリー：常にリリース可能な状態を維持（人間承認あり）。継続的デプロイメント：テスト通過で自動デプロイ（承認不要）。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3層構造 */}
                    <h3>4.2 アジャイルテストリーダーシップの3層構造</h3>
                    <div className="pyramid">
                        <div
                            className="pyramid-tier"
                            style={{width: "90%", background: "rgba(255, 64, 96, 0.15)", border: "1px solid rgba(255, 64, 96, 0.35)", color: "var(--ch5)"}}
                        >
                            組織レベル（Organizational Level）<br />
                            <span
                                style={{fontSize: "0.8rem", fontWeight: "400", color: "var(--text-secondary)"}}
                                >品質文化・組織テスト戦略・CoP・全社KPI ←
                                <strong>CT-ATLaS の主役</strong></span
                            >
                        </div>
                        <div
                            className="pyramid-tier"
                            style={{width: "72%", background: "rgba(168, 85, 247, 0.15)", border: "1px solid rgba(168, 85, 247, 0.35)", color: "var(--ch4)"}}
                        >
                            プロダクトレベル（Product Level）<br />
                            <span
                                style={{fontSize: "0.8rem", fontWeight: "400", color: "var(--text-secondary)"}}
                                >E2Eテスト戦略・リリーストレイン品質・製品メトリクス</span
                            >
                        </div>
                        <div
                            className="pyramid-tier"
                            style={{width: "54%", background: "rgba(0, 255, 136, 0.12)", border: "1px solid rgba(0, 255, 136, 0.3)", color: "var(--ch1)"}}
                        >
                            運用レベル（Operational Level）<br />
                            <span
                                style={{fontSize: "0.8rem", fontWeight: "400", color: "var(--text-secondary)"}}
                                >TDD/BDD・スプリントテスト・チームメトリクス</span
                            >
                        </div>
                    </div>

                    {/* 伝統的→アジャイル移行 */}
                    <h3>4.3 伝統的テスト管理からアジャイルテストリーダーシップへの移行</h3>
                    <div className="compare-grid">
                        <div className="compare-card bad">
                            <div className="compare-header">従来型テスト管理者</div>
                            <ul>
                                <li>テストフェーズを計画・管理・制御</li>
                                <li>テストチームのリソースを管理</li>
                                <li>欠陥レポートを承認・制御</li>
                                <li>品質の門番として機能</li>
                                <li>テストサイロを維持・運営</li>
                            </ul>
                        </div>
                        <div className="compare-card good">
                            <div className="compare-header">アジャイルテストリーダー</div>
                            <ul>
                                <li>サーバントリーダーとしてチームを支援</li>
                                <li>組織全体の品質能力開発を支援</li>
                                <li>品質文化の醸成に注力</li>
                                <li>横断的なコラボレーションを促進</li>
                                <li>CoPを通じて知識を組織に広げる</li>
                            </ul>
                        </div>
                    </div>

                    <div className="callout danger">
                        <span className="callout-icon">⚡</span>
                        <div className="callout-body">
                            <div className="callout-title">移行の最大の難所：制御を手放すこと</div>
                            <p>
                                長年「テストの門番」として働いてきたテスト管理者が最も苦労するのは「制御を手放すこと」です。チームが自律的に品質に責任を持てるよう<strong>支援する役割</strong>へのマインドセット転換が核心的なチャレンジです。
                            </p>
                        </div>
                    </div>

                    <div className="alert cyan">
                        📚 <strong>参考文献（Ch.4）</strong>&emsp;
                        <a href="https://scaledagileframework.com/" target="_blank"
                            >SAFe (Scaled Agile Framework)</a
                        >
                        &nbsp;|&nbsp;
                        <a href="https://dora.dev/" target="_blank">DORA Metrics</a> &nbsp;|&nbsp;
                        <a href="https://teamtopologies.com/" target="_blank">Team Topologies</a>
                    </div>
                </section>

                {/* ============================================================
     CHAPTER 5: TEST PROCESSES
     ============================================================ */}
                <section className="section ch5-theme" id="ch5">
                    <div className="section-header">
                        <div className="chapter-num">5</div>
                        <div className="section-title-wrap">
                            <h2 style={{color: "var(--ch5)"}}>
                                バリュードリブン組織におけるテストプロセス
                                <span className="section-klevel">K4</span>
                            </h2>
                            <p style={{color: "var(--text-muted)", fontSize: "0.88rem", margin: "0"}}>
                                Test Processes in a Value-Driven Organization — 195分（最重要章）
                            </p>
                        </div>
                    </div>

                    {/* 5.1 スケールアジャイルの課題 */}
                    <h3>5.1 スケールアジャイルにおけるテスト固有の課題</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>課題</th>
                                    <th>問題</th>
                                    <th>解決策</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>テストレベル → テスト活動への転換</strong></td>
                                    <td>
                                        「コンポーネント→統合→システム」の順序的実行はアジャイルのイテレーションに合わない
                                    </td>
                                    <td>
                                        テストを「フェーズ」ではなく継続的な「活動」として再定義する
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>統合テストがイテレーション内に収まらない</strong>
                                    </td>
                                    <td>環境セットアップに時間がかかりスプリント内完了が困難</td>
                                    <td>
                                        サービス仮想化・コントラクトテスト・コンテナ化（Docker）
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>並列開発による統合の複雑性</strong></td>
                                    <td>
                                        複数チームが同時開発すると統合テストが爆発的に複雑になる
                                    </td>
                                    <td>
                                        Consumer-Driven Contract Testing（Pact等）・APIファースト
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>テスト環境の競合</strong></td>
                                    <td>多数チームが環境を共有すると衝突が発生</td>
                                    <td>Infrastructure as Code（IaC）・Kubernetes・環境の独立化</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* テスト活動の分類 */}
                    <h3>5.1.4 テスト活動をイテレーションに収めるための段階的戦略</h3>

                    <div className="arch-layers">
                        <div className="arch-layer">
                            <div
                                className="arch-layer-accent"
                                style={{background: "var(--neon-green)"}}
                            ></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title">
                                    Layer A — イテレーション内（&lt;10分）
                                </div>
                                <p className="arch-layer-desc">
                                    ユニット/コンポーネントテスト（TDD）、APIテスト、静的コード分析（flake8/SonarQube）、コントラクトテスト（Pact）
                                </p>
                            </div>
                            <div
                                className="arch-layer-tag"
                                style={{background: "rgba(0, 255, 136, 0.15)", color: "var(--neon-green)", border: "1px solid rgba(0, 255, 136, 0.3)"}}
                            >
                                高速
                            </div>
                        </div>
                        <div className="arch-layer">
                            <div
                                className="arch-layer-accent"
                                style={{background: "var(--neon-amber)"}}
                            ></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title">
                                    Layer B — PIレベル / 夜間（30分〜数時間）
                                </div>
                                <p className="arch-layer-desc">
                                    End-to-End
                                    システムテスト（全件）、性能テスト（k6/JMeter）、セキュリティテスト（OWASP
                                    ZAP）、UIアクセシビリティテスト
                                </p>
                            </div>
                            <div
                                className="arch-layer-tag"
                                style={{background: "rgba(255, 184, 0, 0.15)", color: "var(--neon-amber)", border: "1px solid rgba(255, 184, 0, 0.3)"}}
                            >
                                中速
                            </div>
                        </div>
                        <div className="arch-layer">
                            <div
                                className="arch-layer-accent"
                                style={{background: "var(--neon-cyan)"}}
                            ></div>
                            <div className="arch-layer-body">
                                <div className="arch-layer-title">Layer C — 継続的（本番環境含む）</div>
                                <p className="arch-layer-desc">
                                    モニタリング・アラート、合成トランザクション（Synthetic
                                    Monitoring）、A/Bテスト、カナリアリリースによる段階的品質確認
                                </p>
                            </div>
                            <div
                                className="arch-layer-tag"
                                style={{background: "rgba(0, 229, 255, 0.15)", color: "var(--neon-cyan)", border: "1px solid rgba(0, 229, 255, 0.3)"}}
                            >
                                継続的
                            </div>
                        </div>
                    </div>

                    {/* CI/CD パイプライン */}
                    <h3>CI/CDパイプライン — 品質を内蔵した実装例</h3>
                    <div className="code-block" data-lang="YAML (GitHub Actions)">
                        <pre dangerouslySetInnerHTML={{ __html: "\n<span class=\"code-comment\"># .github/workflows/quality_pipeline.yml</span>\nname: <span class=\"code-string\">品質パイプライン（スケールアジャイル対応）</span>\n\n<span class=\"code-keyword\">on:</span> [push, pull_request]\n\n<span class=\"code-keyword\">jobs:</span>\n  <span class=\"code-comment\"># ─── Layer A: 即時フィードバック（&lt;5分）───────────────</span>\n  unit-and-component:\n    <span class=\"code-keyword\">runs-on:</span> ubuntu-latest\n    <span class=\"code-keyword\">steps:</span>\n      - <span class=\"code-keyword\">name:</span> <span class=\"code-string\">ユニットテスト + カバレッジ</span>\n        <span class=\"code-keyword\">run:</span> pytest tests/unit/ -n auto --cov --cov-fail-under=80\n      - <span class=\"code-keyword\">name:</span> <span class=\"code-string\">静的コード解析 + セキュリティスキャン</span>\n        <span class=\"code-keyword\">run:</span> |\n          sonar-scanner\n          bandit -r src/    <span class=\"code-comment\"># セキュリティ静的分析</span>\n\n  <span class=\"code-comment\"># ─── Layer A: コントラクトテスト ──────────────────────</span>\n  contract-tests:\n    <span class=\"code-keyword\">needs:</span> unit-and-component\n    <span class=\"code-keyword\">steps:</span>\n      - <span class=\"code-keyword\">name:</span> <span class=\"code-string\">Pact コントラクト検証</span>\n        <span class=\"code-keyword\">run:</span> pact-provider-verifier --pact-files ./pacts/\n\n  <span class=\"code-comment\"># ─── Layer A: 統合スモークテスト ──────────────────────</span>\n  integration-smoke:\n    <span class=\"code-keyword\">needs:</span> contract-tests\n    <span class=\"code-keyword\">steps:</span>\n      - <span class=\"code-keyword\">name:</span> <span class=\"code-string\">統合スモーク（@smokeタグのみ）</span>\n        <span class=\"code-keyword\">run:</span> pytest tests/integration/ -m smoke\n\n  <span class=\"code-comment\"># ─── Layer B: 夜間バッチ ──────────────────────────────</span>\n  e2e-performance:\n    <span class=\"code-keyword\">if:</span> github.event_name == <span class=\"code-string\">'schedule'</span>\n    <span class=\"code-keyword\">steps:</span>\n      - <span class=\"code-keyword\">name:</span> <span class=\"code-string\">E2Eテスト（全ブラウザ）</span>\n        <span class=\"code-keyword\">run:</span> playwright test --project=all-browsers\n      - <span class=\"code-keyword\">name:</span> <span class=\"code-string\">性能テスト（k6）</span>\n        <span class=\"code-keyword\">run:</span> k6 run --vus 100 --duration 10m load-test.js\n      - <span class=\"code-keyword\">name:</span> <span class=\"code-string\">アクセシビリティテスト（WCAG2.1）</span>\n        <span class=\"code-keyword\">run:</span> axe-core --standard WCAG21 $BASE_URL\n" }} />
                    </div>

                    {/* フロー&品質メトリクス */}
                    <h3>5.1.3 テストとフロー関連メトリクス</h3>
                    <div className="metric-grid">
                        <div className="metric-card">
                            <span className="metric-value" style={{color: "var(--neon-cyan)"}}>LT</span>
                            <span className="metric-label">フロー時間（Flow Time）</span>
                            <span className="metric-sub">要求〜提供までの総時間。短いほど良い</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value" style={{color: "var(--neon-green)"}}>FE%</span>
                            <span className="metric-label">フロー効率（Flow Efficiency）</span>
                            <span className="metric-sub">価値時間/総時間。高いほど無駄が少ない</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value" style={{color: "var(--neon-amber)"}}
                                >&lt;5%</span
                            >
                            <span className="metric-label">欠陥漏洩率</span>
                            <span className="metric-sub">本番流出欠陥/全欠陥</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value" style={{color: "var(--neon-violet)"}}
                                >&gt;80%</span
                            >
                            <span className="metric-label">テスト自動化率</span>
                            <span className="metric-sub">自動テスト/全テスト</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value" style={{color: "var(--neon-cyan)"}}
                                >&lt;10分</span
                            >
                            <span className="metric-label">フィードバックループ時間</span>
                            <span className="metric-sub">コミット→テスト結果</span>
                        </div>
                        <div className="metric-card">
                            <span className="metric-value" style={{color: "var(--neon-green)"}}
                                >&lt;1時間</span
                            >
                            <span className="metric-label">MTTR</span>
                            <span className="metric-sub">本番問題の平均復旧時間</span>
                        </div>
                    </div>

                    {/* Team Topologies */}
                    <h3>5.1.5 ストリームアラインドチーム vs 専門チームのテスト分担</h3>
                    <p>
                        Team Topologies（Skelton &amp;
                        Pais）の概念を適用し、テスト活動の責任を設計します。
                    </p>

                    <div className="compare-grid">
                        <div className="compare-card good">
                            <div className="compare-header" style={{color: "var(--neon-green)"}}>
                                ✅ ストリームアラインドチーム
                            </div>
                            <ul>
                                <li>ユニット・コンポーネントテスト（TDD）</li>
                                <li>APIテスト・コントラクトテスト</li>
                                <li>機能受入テスト（スプリント内）</li>
                                <li>探索的テスト（基本的なもの）</li>
                                <li>基本的な回帰テスト</li>
                                <li>→ <strong>自律的に品質を保証する</strong></li>
                            </ul>
                        </div>
                        <div className="compare-card good">
                            <div className="compare-header" style={{color: "var(--neon-cyan)"}}>
                                ✅ 専門チーム（サービスとして提供）
                            </div>
                            <ul>
                                <li>高度な性能・負荷テスト</li>
                                <li>セキュリティペネトレーションテスト</li>
                                <li>アクセシビリティテスト（専門知識必要）</li>
                                <li>複雑なE2Eシステムテスト</li>
                                <li>テスト自動化フレームワーク整備</li>
                                <li>→ <strong>テストサービスを提供する</strong></li>
                            </ul>
                        </div>
                    </div>

                    <div className="callout danger">
                        <span className="callout-icon">🚨</span>
                        <div className="callout-body">
                            <div className="callout-title">
                                専門チームの罠：テストサイロを再創造してはならない
                            </div>
                            <p>
                                専門チームは「ゲートキーパー（門番）」ではなく「<strong>サービスプロバイダー</strong>」として機能します。ストリームアラインドチームの認知的負荷を下げ、チームの自律性を高める方向で支援することが必須です。専門チームが品質の責任を一手に引き受けると、テストサイロが再創造されます。
                            </p>
                        </div>
                    </div>

                    <div className="code-block" data-lang="Python（組織設計概念）">
                        <pre dangerouslySetInnerHTML={{ __html: "\n<span class=\"code-keyword\">class</span> <span class=\"code-cyan\">TestOrganizationDesign</span>:\n    <span class=\"code-comment\">\"\"\"Team Topologies 準拠のテスト組織設計\"\"\"</span>\n\n    <span class=\"code-comment\"># ストリームアラインドチーム（例：Eコマース機能チーム）</span>\n    stream_aligned = {\n        <span class=\"code-string\">\"unit_tests\"</span>:    <span class=\"code-string\">\"TDD実施・カバレッジ80%以上\"</span>,\n        <span class=\"code-string\">\"api_tests\"</span>:     <span class=\"code-string\">\"CI/CDで自動実行\"</span>,\n        <span class=\"code-string\">\"acceptance\"</span>:    <span class=\"code-string\">\"スプリント内で受入テスト実施\"</span>,\n        <span class=\"code-string\">\"exploratory\"</span>:  <span class=\"code-string\">\"スプリントレビュー前に実施\"</span>,\n        <span class=\"code-string\">\"contract\"</span>:     <span class=\"code-string\">\"他チームAPIとの契約を自動検証\"</span>,\n    }\n\n    <span class=\"code-comment\"># 専門チーム（品質エンジニアリングプラットフォーム）</span>\n    specialized_services = {\n        <span class=\"code-string\">\"perf_testing\"</span>:    <span class=\"code-string\">\"定期的な性能ベースラインテスト提供\"</span>,\n        <span class=\"code-string\">\"sec_testing\"</span>:     <span class=\"code-string\">\"四半期ペネトレーションテスト提供\"</span>,\n        <span class=\"code-string\">\"test_platform\"</span>:   <span class=\"code-string\">\"テスト実行基盤・環境の整備提供\"</span>,\n        <span class=\"code-string\">\"frameworks\"</span>:      <span class=\"code-string\">\"自動化FW・ベストプラクティス共有\"</span>,\n        <span class=\"code-string\">\"observability\"</span>:  <span class=\"code-string\">\"品質メトリクスダッシュボード提供\"</span>,\n    }\n\n    <span class=\"code-comment\"># クオリティコーチ（アジャイルテストリーダー）</span>\n    quality_coach = {\n        <span class=\"code-string\">\"culture\"</span>:     <span class=\"code-string\">\"CoP運営・品質マインドセット教育\"</span>,\n        <span class=\"code-string\">\"strategy\"</span>:    <span class=\"code-string\">\"組織テスト戦略の共創・維持・更新\"</span>,\n        <span class=\"code-string\">\"metrics\"</span>:     <span class=\"code-string\">\"組織レベル品質KPI設定・モニタリング\"</span>,\n        <span class=\"code-string\">\"improvement\"</span>: <span class=\"code-string\">\"PDCAサイクルのファシリテーション\"</span>,\n        <span class=\"code-string\">\"bridge\"</span>:      <span class=\"code-string\">\"ストリームチームと専門チームの橋渡し\"</span>,\n    }\n" }} />
                    </div>

                    <div className="alert cyan">
                        📚 <strong>参考文献（Ch.5）</strong>&emsp;
                        <a href="https://teamtopologies.com/" target="_blank">Team Topologies</a>
                        &nbsp;|&nbsp;
                        <a href="https://scaledagileframework.com/" target="_blank">SAFe</a>
                        &nbsp;|&nbsp;
                        <a href="https://less.works/" target="_blank">LeSS</a> &nbsp;|&nbsp;
                        <a href="https://www.tmmifoundation.org/" target="_blank"
                            >TMMi Foundation</a
                        >
                    </div>
                </section>

                {/* ============================================================
     EXAM SECTION
     ============================================================ */}
                <section className="section" id="exam">
                    <h2>📝 試験対策・サンプル問題</h2>

                    {/* 配点 */}
                    <h3>章別配点と重要度</h3>
                    <div className="exam-grid">
                        <div className="exam-card ch1-theme" style={{ "--accent": "var(--ch1)" } as React.CSSProperties}>
                            <div className="exam-card-chapter">Chapter 1 &nbsp;·&nbsp; K2</div>
                            <div className="exam-card-title" style={{color: "var(--ch1)"}}>
                                クオリティアシスタンス
                            </div>
                            <div className="exam-card-pts" style={{color: "var(--ch1)"}}>
                                ~8 <span style={{fontSize: "0.9rem"}}>点</span>
                            </div>
                            <span className="exam-stars">★★★★☆</span>
                            <span className="exam-klevel">K2: 理解レベル</span>
                        </div>
                        <div className="exam-card ch2-theme" style={{ "--accent": "var(--ch2)" } as React.CSSProperties}>
                            <div className="exam-card-chapter">Chapter 2 &nbsp;·&nbsp; K3</div>
                            <div className="exam-card-title" style={{color: "var(--ch2)"}}>
                                フロー改善（VSM）
                            </div>
                            <div className="exam-card-pts" style={{color: "var(--ch2)"}}>
                                ~12 <span style={{fontSize: "0.9rem"}}>点</span>
                            </div>
                            <span className="exam-stars">★★★★☆</span>
                            <span className="exam-klevel">K3: 適用レベル</span>
                        </div>
                        <div className="exam-card ch3-theme" style={{ "--accent": "var(--ch3)" } as React.CSSProperties}>
                            <div className="exam-card-chapter">Chapter 3 &nbsp;·&nbsp; K3</div>
                            <div className="exam-card-title" style={{color: "var(--ch3)"}}>継続的改善</div>
                            <div className="exam-card-pts" style={{color: "var(--ch3)"}}>
                                ~15 <span style={{fontSize: "0.9rem"}}>点</span>
                            </div>
                            <span className="exam-stars">★★★★★</span>
                            <span className="exam-klevel">K3: 適用レベル</span>
                        </div>
                        <div className="exam-card ch4-theme" style={{ "--accent": "var(--ch4)" } as React.CSSProperties}>
                            <div className="exam-card-chapter">Chapter 4 &nbsp;·&nbsp; K4</div>
                            <div className="exam-card-title" style={{color: "var(--ch4)"}}>
                                組織的テスト戦略
                            </div>
                            <div className="exam-card-pts" style={{color: "var(--ch4)"}}>
                                ~15 <span style={{fontSize: "0.9rem"}}>点</span>
                            </div>
                            <span className="exam-stars">★★★★★</span>
                            <span className="exam-klevel">K4: 分析・評価レベル</span>
                        </div>
                        <div className="exam-card ch5-theme" style={{ "--accent": "var(--ch5)" } as React.CSSProperties}>
                            <div className="exam-card-chapter">Chapter 5 &nbsp;·&nbsp; K4</div>
                            <div className="exam-card-title" style={{color: "var(--ch5)"}}>
                                テストプロセス
                            </div>
                            <div className="exam-card-pts" style={{color: "var(--ch5)"}}>
                                ~21 <span style={{fontSize: "0.9rem"}}>点</span>
                            </div>
                            <span className="exam-stars">★★★★★</span>
                            <span className="exam-klevel">K4: 分析・評価レベル (最重要)</span>
                        </div>
                    </div>

                    {/* 必須暗記 */}
                    <div className="divider"></div>
                    <h3>必ず覚える重要概念チェックリスト</h3>
                    <div className="trend-card">
                        <span className="trend-label">🔑 最重要 必須暗記 7項目</span>
                        <ul style={{fontSize: "0.92rem", color: "var(--text-secondary)"}}>
                            <li>
                                <strong style={{color: "var(--neon-green)"}}
                                    >クオリティアシスタンス vs 伝統的テスト管理</strong
                                >
                                — 7つの違いを言える
                            </li>
                            <li>
                                <strong style={{color: "var(--neon-green)"}}>4つのスキル</strong> —
                                チェンジリーダーシップ / クオリティコーチング / ファシリテーション /
                                トレーニング
                            </li>
                            <li>
                                <strong style={{color: "var(--neon-cyan)"}}
                                    >バリューストリームの主要メトリクス</strong
                                >
                                — リードタイム・サイクルタイム・プロセス効率の計算式
                            </li>
                            <li>
                                <strong style={{color: "var(--neon-cyan)"}}>リーンの8つのムダ</strong> —
                                テスト/品質への適用例を含めて説明できる
                            </li>
                            <li>
                                <strong style={{color: "var(--neon-amber)"}}>PDCAの4フェーズ</strong> —
                                「問題＝ギャップ」の定義・組織に定着させる4要件
                            </li>
                            <li>
                                <strong style={{color: "var(--neon-amber)"}}>CLDの2ループ</strong> —
                                強化ループ（R）とバランスループ（B）の違いと例
                            </li>
                            <li>
                                <strong style={{color: "var(--ch5)"}}
                                    >ストリームアラインドチーム vs 専門チーム</strong
                                >
                                — テスト分担の原則とアンチパターン
                            </li>
                        </ul>
                    </div>

                    {/* サンプル問題 */}
                    <div className="divider"></div>
                    <h3>サンプル問題と解説</h3>

                    {/* Q1 */}
                    <div className="trend-card">
                        <span className="trend-label">問題1 — K2 / Ch.1</span>
                        <p>
                            <strong
                                >クオリティアシスタンスと伝統的テスト管理の違いとして最も適切なものはどれか？</strong
                            >
                        </p>
                        <p>A) クオリティアシスタンスではテスト管理者が品質の門番として機能する</p>
                        <p>B) クオリティアシスタンスではテスト管理という規律は不要になる</p>
                        <p style={{color: "var(--neon-green)"}}>
                            C)
                            クオリティアシスタンスでは自律チームが品質に責任を持つことを支援し、テストサイロをなくす
                            ✅
                        </p>
                        <p>
                            D) クオリティアシスタンスはアジャイルプロジェクトのテスト計画を強化する
                        </p>
                        <div className="alert green" style={{marginTop: "0.75rem"}}>
                            <strong>解説:</strong> C が正解。A は伝統的テスト管理のアプローチ。B
                            は誤り（テスト管理の規律は依然必要）。D はプロジェクトレベルの話であり
                            CT-ATLaS の組織レベルと異なる。
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="trend-card">
                        <span className="trend-label">問題2 — K3 / Ch.2（計算問題）</span>
                        <p>
                            <strong
                                >あるバリューストリームで処理時間合計が18日、リードタイムが37日の場合、プロセス効率として最も近いものはどれか？</strong
                            >
                        </p>
                        <p>A) 約31%</p>
                        <p style={{color: "var(--neon-green)"}}>B) 約49% ✅</p>
                        <p>C) 約67%</p>
                        <p>D) 約82%</p>
                        <div className="alert green" style={{marginTop: "0.75rem"}}>
                            <strong>解説:</strong> プロセス効率 = 価値時間（PT合計）/ リードタイム ×
                            100 = 18 / 37 × 100 ≈ <strong>48.6%</strong>。最も近いのは B の約49%。
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="trend-card">
                        <span className="trend-label">問題3 — K4 / Ch.5</span>
                        <p>
                            <strong
                                >スケールアジャイル組織でセキュリティテストがスプリントに収まらない。最も適切な解決策はどれか？</strong
                            >
                        </p>
                        <p>A) スプリントを4週間に延ばしてテスト時間を確保する</p>
                        <p style={{color: "var(--neon-green)"}}>
                            B)
                            セキュリティテストを専門チームがサービスとして提供し、ストリームアラインドチームは自動化された基本テストをイテレーション内で実施する
                            ✅
                        </p>
                        <p>C) セキュリティテストは非アジャイルプロセスとして別管理にする</p>
                        <p>D) テストを省略してリリース速度を優先する</p>
                        <div className="alert green" style={{marginTop: "0.75rem"}}>
                            <strong>解説:</strong> Team Topologies の観点から B が正解。A
                            はアジャイルの速いフィードバックを失う。C はテストサイロの再創造。D
                            は品質の犠牲。
                        </div>
                    </div>
                </section>

                {/* ============================================================
     REFERENCES
     ============================================================ */}
                <section className="section" id="refs">
                    <h2>📚 参考文献・一次情報源</h2>

                    <h3>🏛️ 公式ISTQB® リソース</h3>
                    <div className="ref-grid">
                        <div className="ref-card">
                            <span className="ref-cat">公式</span>
                            <div className="ref-body">
                                <div className="ref-title">CT-ATLaS 公式認定ページ</div>
                                <div className="ref-url">
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-agile-test-leadership-at-scale-ct-atlas/"
                                        target="_blank"
                                        >istqb.org/certifications/certified-tester-agile-test-leadership-at-scale-ct-atlas/</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">シラバス</span>
                            <div className="ref-body">
                                <div className="ref-title">CT-ATLaS シラバス v2.0 PDF</div>
                                <div className="ref-url">
                                    <a
                                        href="https://istqb.org/?sdm_process_download=1&download_id=3532"
                                        target="_blank"
                                        >istqb.org/?sdm_process_download=1&amp;download_id=3532</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">BoK</span>
                            <div className="ref-body">
                                <div className="ref-title">CT-ATLaS Body of Knowledge v2.0</div>
                                <div className="ref-url">
                                    <a
                                        href="https://istqb.org/?sdm_process_download=1&download_id=3533"
                                        target="_blank"
                                        >istqb.org/?sdm_process_download=1&amp;download_id=3533</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">サンプル試験</span>
                            <div className="ref-body">
                                <div className="ref-title">CT-ATLaS サンプル試験問題 v2.0</div>
                                <div className="ref-url">
                                    <a
                                        href="https://istqb.org/?sdm_process_download=1&download_id=3535"
                                        target="_blank"
                                        >istqb.org/?sdm_process_download=1&amp;download_id=3535</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">演習</span>
                            <div className="ref-body">
                                <div className="ref-title">CT-ATLaS Hands-On Exercise</div>
                                <div className="ref-url">
                                    <a
                                        href="https://istqb.org/?sdm_process_download=1&download_id=3549"
                                        target="_blank"
                                        >istqb.org/?sdm_process_download=1&amp;download_id=3549</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">認定GL</span>
                            <div className="ref-body">
                                <div className="ref-title">CT-ATLaS 認定ガイドライン v2.0</div>
                                <div className="ref-url">
                                    <a
                                        href="https://istqb.org/?sdm_process_download=1&download_id=3544"
                                        target="_blank"
                                        >istqb.org/?sdm_process_download=1&amp;download_id=3544</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">グロッサリー</span>
                            <div className="ref-body">
                                <div className="ref-title">ISTQB® グロッサリー（用語集）</div>
                                <div className="ref-url">
                                    <a
                                        href="https://glossary.istqb.org/en_US/search?term="
                                        target="_blank"
                                        >glossary.istqb.org/en_US/search?term=</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">試験</span>
                            <div className="ref-body">
                                <div className="ref-title">試験プロバイダー検索</div>
                                <div className="ref-url">
                                    <a href="https://istqb.org/exam-providers/" target="_blank"
                                        >istqb.org/exam-providers/</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3>🔧 スケールアジャイル・DevOps フレームワーク</h3>
                    <div className="ref-grid">
                        <div className="ref-card">
                            <span className="ref-cat">Framework</span>
                            <div className="ref-body">
                                <div className="ref-title">SAFe — Scaled Agile Framework</div>
                                <div className="ref-url">
                                    <a href="https://scaledagileframework.com/" target="_blank"
                                        >scaledagileframework.com/</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">Framework</span>
                            <div className="ref-body">
                                <div className="ref-title">LeSS — Large-Scale Scrum</div>
                                <div className="ref-url">
                                    <a href="https://less.works/" target="_blank">less.works/</a>
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">Team Design</span>
                            <div className="ref-body">
                                <div className="ref-title">Team Topologies (Skelton &amp; Pais)</div>
                                <div className="ref-url">
                                    <a href="https://teamtopologies.com/" target="_blank"
                                        >teamtopologies.com/</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">DevOps Metrics</span>
                            <div className="ref-body">
                                <div className="ref-title">DORA Metrics（Google DevOps Research）</div>
                                <div className="ref-url">
                                    <a href="https://dora.dev/" target="_blank">dora.dev/</a>
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">Lean</span>
                            <div className="ref-body">
                                <div className="ref-title">Lean Enterprise Institute</div>
                                <div className="ref-url">
                                    <a
                                        href="https://www.lean.org/explore-lean/what-is-lean/"
                                        target="_blank"
                                        >lean.org/explore-lean/what-is-lean/</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">Systems</span>
                            <div className="ref-body">
                                <div className="ref-title">The Systems Thinker</div>
                                <div className="ref-url">
                                    <a href="https://thesystemsthinker.com/" target="_blank"
                                        >thesystemsthinker.com/</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">TMMi</span>
                            <div className="ref-body">
                                <div className="ref-title">TMMi Foundation</div>
                                <div className="ref-url">
                                    <a href="https://www.tmmifoundation.org/" target="_blank"
                                        >tmmifoundation.org/</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">Agile</span>
                            <div className="ref-body">
                                <div className="ref-title">Agile Alliance</div>
                                <div className="ref-url">
                                    <a href="https://www.agilealliance.org/" target="_blank"
                                        >agilealliance.org/</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3>📖 関連ISTQB® 資格</h3>
                    <div className="ref-grid">
                        <div className="ref-card">
                            <span className="ref-cat">前提資格</span>
                            <div className="ref-body">
                                <div className="ref-title">CTFL v4.0（Foundation Level）</div>
                                <div className="ref-url">
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-foundation-level/"
                                        target="_blank"
                                        >istqb.org/certifications/certified-tester-foundation-level/</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">補完資格</span>
                            <div className="ref-body">
                                <div className="ref-title">CTAL-ATT（Agile Technical Tester）</div>
                                <div className="ref-url">
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-advanced-level-agile-technical-tester-ctal-att/"
                                        target="_blank"
                                        >istqb.org/certifications/.../ctal-att/</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">補完資格</span>
                            <div className="ref-body">
                                <div className="ref-title">CTAL-TM v3.0（Test Management）</div>
                                <div className="ref-url">
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/"
                                        target="_blank"
                                        >istqb.org/certifications/.../ctal-tm-v3-0/</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="ref-card">
                            <span className="ref-cat">補完資格</span>
                            <div className="ref-body">
                                <div className="ref-title">
                                    CTAL-TAE v2.0（Test Automation Engineering）
                                </div>
                                <div className="ref-url">
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"
                                        target="_blank"
                                        >istqb.org/certifications/.../ctal-tae-v2-0/</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* end container */}
        

        </>
    );
}
