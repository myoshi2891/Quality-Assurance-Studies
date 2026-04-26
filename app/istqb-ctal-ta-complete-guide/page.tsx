import React from 'react';
import './istqb-ctal-ta-complete-guide.css';
import NavBar from './NavBar';

export default function IstqbCtalTaCompleteGuide() {
    return (
        <div className="ctal-ta-guide">
            <NavBar />
            {/* ══════════════════════════════════════════════════
     CHAPTER 0: 概要
══════════════════════════════════════════════════ */}
            {/* ─────────────────── HERO ─────────────────── */}
            <section className="hero">
                <div className="hero-bg-glow"></div>
                <div className="hero-glow-pulse"></div>
                <div className="hero-badge">ISTQB® 公式最新版 &nbsp;·&nbsp; 2025年5月2日 GA リリース</div>
                <h1 className="hero-title">
                    <span className="accent-green">ISTQB® CTAL-TA</span><br />
                    <span className="accent-cyan">v4.0</span> 完全学習ガイド
                </h1>
                <p className="hero-subtitle">
                    Advanced Level – Test Analyst &nbsp;|&nbsp; ステップバイステップ解説
                </p>
                <div className="hero-meta">
                    <div className="hero-stat">
                        <span className="hero-stat-num">45</span>
                        <span className="hero-stat-label">問題数</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-num">78</span>
                        <span className="hero-stat-label">満点</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-num">51</span>
                        <span className="hero-stat-label">合格点</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-num">120</span>
                        <span className="hero-stat-label">試験時間(分)</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-num">5</span>
                        <span className="hero-stat-label">チャプター</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-num">20h</span>
                        <span className="hero-stat-label">公認研修時間</span>
                    </div>
                </div>
            </section>

            <section id="ch0">
                <div className="chapter-header ch0">
                    <div className="chapter-num">CH.0</div>
                    <div className="chapter-title-wrap">
                        <h2 className="chapter-title">CTAL-TA v4.0 概要</h2>
                        <div className="chapter-meta">
                            OVERVIEW &nbsp;·&nbsp; 資格の全体像を把握する
                        </div>
                    </div>
                </div>

                <p>
                    CTAL-TA（Certified Tester Advanced Level – Test
                    Analyst）は、ソフトウェアテスト分析・設計の専門家を国際的に認定する資格です。CTFL（Foundation
                    Level）の上位に位置し、ビジネス視点のテスト設計力を証明します。
                </p>

                {/* 資格ロードマップ */}
                <div className="section-title ch0" style={{ "--accent-color": "var(--neon-cyan)"} as React.CSSProperties}>
                    資格ロードマップ
                </div>
                <div className="pyramid">
                    <div className="pyramid-level pyramid-level-4">
                        Expert Level: Test Management / Improving Test Process
                    </div>
                    <div className="pyramid-level pyramid-level-3">
                        Advanced Level: ★ CTAL-TA &nbsp;|&nbsp; CTAL-TTA &nbsp;|&nbsp; CTAL-TM
                        &nbsp;|&nbsp; CTAL-TAE
                    </div>
                    <div className="pyramid-level pyramid-level-2">
                        Foundation Level: CTFL v4.0（前提条件・必須）
                    </div>
                    <div className="pyramid-level pyramid-level-1">実務経験 18ヶ月以上（推奨）</div>
                    <div className="pyramid-level pyramid-level-0">
                        Practitioner: 現場での実践が理解を深める
                    </div>
                </div>

                {/* TAとTTAの違い */}
                <div className="section-title ch0" style={{ "--accent-color": "var(--neon-cyan)"} as React.CSSProperties}>
                    Test Analyst vs Technical Test Analyst
                </div>
                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ テストアナリスト (TA)</div>
                        <ul>
                            <li>ビジネス視点・顧客ニーズにフォーカス</li>
                            <li>主に機能テスト + ユーザー視点の非機能テスト</li>
                            <li>ブラックボックス技法・経験ベース技法</li>
                            <li>ユーザビリティ・適応性・相互運用性テスト</li>
                            <li>欠陥防止技法による効果性向上</li>
                        </ul>
                    </div>
                    <div className="compare-box bad" style={{borderColor: "rgba(0, 212, 255, 0.3)"}}>
                        <div className="compare-label" style={{color: "var(--neon-cyan)"}}>
                            🔧 テクニカルテストアナリスト (TTA)
                        </div>
                        <ul>
                            <li>技術視点・アーキテクチャにフォーカス</li>
                            <li>ホワイトボックス中心・パフォーマンス/セキュリティ</li>
                            <li>コードベースのテスト技法</li>
                            <li>静的解析・コードカバレッジ</li>
                            <li>テスト自動化の深い技術的実装</li>
                        </ul>
                    </div>
                </div>

                {/* 試験概要 */}
                <div className="section-title ch0" style={{ "--accent-color": "var(--neon-cyan)"} as React.CSSProperties}>
                    試験スペック（v4.0 公式）
                </div>
                <div className="metric-grid">
                    <div className="metric-card" style={{ "--metric-color": "var(--neon-cyan)"} as React.CSSProperties}>
                        <div className="metric-value">45</div>
                        <div className="metric-label">問題数</div>
                    </div>
                    <div className="metric-card" style={{ "--metric-color": "var(--neon-green)"} as React.CSSProperties}>
                        <div className="metric-value">78</div>
                        <div className="metric-label">満点</div>
                    </div>
                    <div className="metric-card" style={{ "--metric-color": "var(--neon-amber)"} as React.CSSProperties}>
                        <div className="metric-value">51</div>
                        <div className="metric-label">合格点</div>
                    </div>
                    <div className="metric-card" style={{ "--metric-color": "var(--neon-purple)"} as React.CSSProperties}>
                        <div className="metric-value">120</div>
                        <div className="metric-label">試験時間(分)</div>
                    </div>
                    <div className="metric-card" style={{ "--metric-color": "var(--neon-red)"} as React.CSSProperties}>
                        <div className="metric-value">+25%</div>
                        <div className="metric-label">英語非母語者</div>
                    </div>
                    <div className="metric-card" style={{ "--metric-color": "var(--neon-cyan)"} as React.CSSProperties}>
                        <div className="metric-value">65%</div>
                        <div className="metric-label">合格ライン</div>
                    </div>
                </div>

                {/* K-Level */}
                <div className="section-title ch0" style={{ "--accent-color": "var(--neon-cyan)"} as React.CSSProperties}>
                    認知レベル（K-Level）
                </div>
                <div className="arch-layers">
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-green)"} as React.CSSProperties}>
                        <div className="arch-layer-label">K1 – Remember</div>
                        <div className="arch-layer-desc">
                            用語・定義の記憶。「〇〇とは何か」を答える問題。試験では少数。
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-amber)"} as React.CSSProperties}>
                        <div className="arch-layer-label">K2 – Understand</div>
                        <div className="arch-layer-desc">
                            概念の理解・分類・比較。「〇〇と△△の違いを説明せよ」タイプ。中程度出題。
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-cyan)"} as React.CSSProperties}>
                        <div className="arch-layer-label">K3 – Apply</div>
                        <div className="arch-layer-desc">
                            実際のシナリオへの技法適用。「この要件にBVAを適用するとテスト値は何か」タイプ。<strong
                                >最頻出・高配点。</strong
                            >
                        </div>
                    </div>
                </div>

                <div className="callout info">
                    <span className="callout-icon">💡</span>
                    <div className="callout-body">
                        <div className="callout-title">試験対策ポイント</div>
                        K3レベルが最も出題が多く点数も高い。単純暗記ではなく「実際のシナリオに技法を適用できるか」を問われる。Chapter
                        3（テスト分析・設計）が全体の50%超を占める最重要章。
                    </div>
                </div>

                {/* シラバス配分 */}
                <div className="section-title ch0" style={{ "--accent-color": "var(--neon-cyan)"} as React.CSSProperties}>
                    シラバス配分（学習時間）
                </div>
                <div className="card" style={{padding: "1.5rem 2rem"}}>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Ch.1 テストプロセス</span>
                            <span className="progress-val" style={{ "--bar-color": "var(--ch1-color)"} as React.CSSProperties}
                                >225分 (18.5%)</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "18.5%", "--bar-color": "var(--ch1-color)"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Ch.2 リスクベーステスト</span>
                            <span className="progress-val" style={{ "--bar-color": "var(--ch2-color)"} as React.CSSProperties}
                                >90分 (7.4%)</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "7.4%", "--bar-color": "var(--ch2-color)"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Ch.3 テスト分析・設計 ⭐ 最重要</span>
                            <span className="progress-val" style={{ "--bar-color": "var(--ch3-color)"} as React.CSSProperties}
                                >615分 (50.6%)</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "50.6%", "--bar-color": "var(--ch3-color)"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Ch.4 品質特性のテスト</span>
                            <span className="progress-val" style={{ "--bar-color": "var(--ch4-color)"} as React.CSSProperties}
                                >60分 (4.9%)</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "4.9%", "--bar-color": "var(--ch4-color)"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Ch.5 ソフトウェア欠陥防止</span>
                            <span className="progress-val" style={{ "--bar-color": "var(--ch5-color)"} as React.CSSProperties}
                                >225分 (18.5%)</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "18.5%", "--bar-color": "var(--ch5-color)"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* TOC */}
                <div className="section-title ch0" style={{ "--accent-color": "var(--neon-cyan)"} as React.CSSProperties}>
                    目次ナビゲーション
                </div>
                <div className="toc-grid">
                    <a href="#ch1" className="toc-card" style={{ "--toc-color": "var(--ch1-color)"} as React.CSSProperties}>
                        <div className="toc-num">CHAPTER 1</div>
                        <div className="toc-title">テストプロセスにおけるテストアナリストのタスク</div>
                        <div className="toc-mins">⏱ 225分</div>
                    </a>
                    <a href="#ch2" className="toc-card" style={{ "--toc-color": "var(--ch2-color)"} as React.CSSProperties}>
                        <div className="toc-num">CHAPTER 2</div>
                        <div className="toc-title">
                            リスクベーステストにおけるテストアナリストのタスク
                        </div>
                        <div className="toc-mins">⏱ 90分</div>
                    </a>
                    <a href="#ch3" className="toc-card" style={{ "--toc-color": "var(--ch3-color)"} as React.CSSProperties}>
                        <div className="toc-num">CHAPTER 3 ⭐</div>
                        <div className="toc-title">テスト分析とテスト設計（最重要・全体の50%超）</div>
                        <div className="toc-mins">⏱ 615分</div>
                    </a>
                    <a href="#ch4" className="toc-card" style={{ "--toc-color": "var(--ch4-color)"} as React.CSSProperties}>
                        <div className="toc-num">CHAPTER 4</div>
                        <div className="toc-title">品質特性のテスト</div>
                        <div className="toc-mins">⏱ 60分</div>
                    </a>
                    <a href="#ch5" className="toc-card" style={{ "--toc-color": "var(--ch5-color)"} as React.CSSProperties}>
                        <div className="toc-num">CHAPTER 5</div>
                        <div className="toc-title">ソフトウェア欠陥防止</div>
                        <div className="toc-mins">⏱ 225分</div>
                    </a>
                    <a href="#exam" className="toc-card" style={{ "--toc-color": "var(--neon-amber)"} as React.CSSProperties}>
                        <div className="toc-num">APPENDIX</div>
                        <div className="toc-title">試験対策・サンプル問題・参考文献</div>
                        <div className="toc-mins">📝 練習問題 5問収録</div>
                    </a>
                </div>
            </section>

            <hr className="divider" />

            {/* ══════════════════════════════════════════════════
     CHAPTER 1
══════════════════════════════════════════════════ */}
            <section id="ch1">
                <div className="chapter-header ch1">
                    <div
                        className="chapter-num"
                        style={{borderColor: "var(--ch1-color)", color: "var(--ch1-color)"}}
                    >
                        CH.1
                    </div>
                    <div className="chapter-title-wrap">
                        <h2 className="chapter-title">
                            テストプロセスにおけるテストアナリストのタスク
                        </h2>
                        <div className="chapter-meta">
                            THE TASKS OF THE TEST ANALYST IN THE TEST PROCESS &nbsp;·&nbsp; 225分
                        </div>
                    </div>
                </div>

                {/* 1.1 */}
                <div className="section-title ch1">
                    1.1 SDLCにおけるテスト <span className="badge badge-k2">K2</span>
                </div>
                <p>
                    テストアナリストはソフトウェア開発ライフサイクル（SDLC）の全フェーズに関与します。開発モデルが何であれ、テスト活動はプロジェクト開始時から計画・実施されます。
                </p>

                <div className="arch-layers">
                    <div className="arch-layer" style={{ "--layer-color": "var(--ch1-color)"} as React.CSSProperties}>
                        <div className="arch-layer-label">ウォーターフォール</div>
                        <div className="arch-layer-desc">
                            各フェーズ（要件定義→設計→実装→テスト→保守）で順次テスト活動を実施。テスト計画は早期に策定し、各フェーズで承認を得る。
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-cyan)"} as React.CSSProperties}>
                        <div className="arch-layer-label">V字モデル</div>
                        <div className="arch-layer-desc">
                            左辺（開発フェーズ）の各活動に対応する右辺（テストフェーズ）を準備。要求定義
                            ↔ 受入テスト、設計 ↔ システムテスト など対応関係が明確。
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-amber)"} as React.CSSProperties}>
                        <div className="arch-layer-label">アジャイル/スクラム</div>
                        <div className="arch-layer-desc">
                            各スプリント（通常2週間）内でテスト分析・設計・実装・実行を繰り返す。継続的テストが基本。TAはスプリント計画・レビュー・レトロスペクティブにも参加。
                        </div>
                    </div>
                </div>

                <div className="callout info">
                    <span className="callout-icon">📌</span>
                    <div className="callout-body">
                        <div className="callout-title">学習目標 TA-1.1.1 (K2)</div>
                        さまざまなSDLCモデルでのテストアナリストの役割を説明できる。ウォーターフォール・アジャイル・V字モデルそれぞれでの違いを把握しておくこと。
                    </div>
                </div>

                {/* 1.2 */}
                <div className="section-title ch1">
                    1.2 テスト活動への関与 <span className="badge badge-k2">K2</span>
                </div>
                <p>
                    テストアナリストの4つのコア活動について、「定義→理由→具体例」の順で解説します。
                </p>

                {/* 分析 */}
                <div className="subsection-title">
                    🔍 1.2.1 テスト分析（Test Analysis）— 「何をテストするか」
                </div>
                <p>
                    <strong>定義：</strong
                    >テストベース（要求仕様・ユーザーストーリー・ユースケース等）を分析し、テスト条件（Test
                    Conditions）を定義する活動。
                </p>
                <p>
                    <strong>理由：</strong
                    >「何をテストすべきか」が不明確なままテストを実施すると、重要な機能の検証漏れや無駄なテストが発生する。
                </p>

                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 良い例：テスト分析</div>
                        <div className="code-block" data-lang="ANALYSIS">
                            <div className="code-line"><span className="code-comment">// テスト条件の明確な定義</span></div>
                            <div className="code-line"><span className="code-green">テスト条件 TC-001:</span></div>
                            <div className="code-line"><span className="code-white"> 機能: ユーザーログイン</span></div>
                            <div className="code-line"><span className="code-white"> 条件: 有効な認証情報での</span></div>
                            <div className="code-line"><span className="code-white"> ログイン成功ケース</span></div>
                            <div className="code-line"><span className="code-white"> 参照: REQ-AUTH-001</span></div>
                            <div className="code-line"><span className="code-white"> リスクレベル: 高</span></div>
                        </div>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 悪い例：テスト分析</div>
                        <div className="code-block" data-lang="ANALYSIS">
                            <div className="code-line"><span className="code-comment">// 曖昧なテスト条件</span></div>
                            <div className="code-line"><span className="code-red">テスト条件:</span></div>
                            <div className="code-line"><span className="code-red"> ログインをテストする</span></div>
                            <div className="code-line"><span className="code-red"> ※ テスト可能な基準なし</span></div>
                            <div className="code-line"><span className="code-red"> ※ 仕様への追跡不可</span></div>
                            <div className="code-line"><span className="code-red"> ※ リスク評価なし</span></div>
                        </div>
                    </div>
                </div>

                {/* 設計 */}
                <div className="subsection-title">
                    ✏️ 1.2.2 テスト設計（Test Design）— 「どのようにテストするか」
                </div>
                <p>
                    <strong>定義：</strong
                    >テスト条件を具体的なテストケース（High-Level）に変換する活動。適切なテスト技法を選択し適用する。
                </p>

                <div className="arch-layers">
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-amber)"} as React.CSSProperties}>
                        <div className="arch-layer-label">入力</div>
                        <div className="arch-layer-desc">
                            テスト条件（Test Conditions）・リスク分析結果・テストベース
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-cyan)"} as React.CSSProperties}>
                        <div className="arch-layer-label">処理</div>
                        <div className="arch-layer-desc">
                            EP/BVA/デシジョンテーブル等のテスト技法を適用してテストケースを作成
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-green)"} as React.CSSProperties}>
                        <div className="arch-layer-label">出力</div>
                        <div className="arch-layer-desc">
                            High-Level テストケース（概念的なテスト意図と期待結果）
                        </div>
                    </div>
                </div>

                {/* 実装 */}
                <div className="subsection-title">
                    🔧 1.2.3 テスト実装 — 「実行可能な形にする」
                </div>
                <p>
                    <strong>定義：</strong>High-Level テストケースをLow-Level
                    テストケース（具体的な手順・データ付き）に詳細化し、テスト環境とテストデータを準備する活動。
                </p>

                <div className="code-block" data-lang="TEST CASE">
                    <div className="code-line">
                        <span className="code-comment"># High-Level → Low-Level テストケースへの変換</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.4rem"}}>
                        <span className="code-cyan">High-Level TC-001:</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> 条件: 有効な認証情報でログイン成功</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> 期待: ダッシュボードが表示される</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.4rem"}}>
                        <span className="code-amber"> ↓ テスト実装フェーズで詳細化</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.4rem"}}>
                        <span className="code-green">Low-Level TC-001-001:</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white">
                            前提: user@test.com がDBに存在、パスワードは "Pass123!"</span>
                    </div>
                    <div className="code-line"><span className="code-white"> 手順:</span></div>
                    <div className="code-line">
                        <span className="code-white"> 1. https://app.example.com/login を開く</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> 2. Email欄に "user@test.com" を入力</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> 3. Password欄に "Pass123!" を入力</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> 4. [ログイン]ボタンをクリック</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white">
                            期待: "/dashboard" にリダイレクト、"ようこそ" メッセージが表示</span>
                    </div>
                </div>

                {/* キーワード駆動テスト */}
                <div className="subsection-title">
                    ⌨️ キーワード駆動テスト（Keyword-Driven Testing）
                    <span className="fix-badge">✓ FIX</span>
                </div>
                <p>
                    <strong>定義：</strong
                    >テスト操作を「キーワード」として抽象化し、プログラミング知識なしでテストを記述できるフレームワーク。
                </p>

                <div className="code-block" data-lang="KEYWORD-DRIVEN">
                    <div className="code-line">
                        <span className="code-comment"># キーワード駆動テストの例（非エンジニアも記述可能）</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.5rem"}}>
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "170px", fontWeight: 700}}>Keyword（操作）</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "190px", fontWeight: 700}}>Object（対象）</span>
                        <span className="code-green" style={{fontWeight: 700}}>Data / Action（値）</span>
                    </div>
                    <div className="code-line">
                        <span style={{color: "#243c5a", display: "inline-block", minWidth: "170px"}}>────────────────</span>
                        <span style={{color: "#243c5a", display: "inline-block", minWidth: "190px"}}>──────────────────</span>
                        <span style={{color: "#243c5a"}}>───────────────────────</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "170px"}}>OpenBrowser</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "190px"}}>-</span>
                        <span className="code-green">Chrome</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "170px"}}>Navigate</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "190px"}}>URL</span>
                        <span className="code-green">https://app.example.com</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "170px"}}>EnterText</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "190px"}}>EmailField</span>
                        <span className="code-green">user@test.com</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "170px"}}>EnterText</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "190px"}}>PasswordField</span>
                        <span className="code-green">Pass123!</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "170px"}}>ClickButton</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "190px"}}>LoginButton</span>
                        <span className="code-white">-</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "170px"}}>VerifyText</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "190px"}}>PageTitle</span>
                        <span className="code-green">ダッシュボード</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.6rem"}}>
                        <span className="code-comment"># ✅ 利点: ビジネスアナリスト・テスターが直接記述できる</span>
                    </div>
                    <div className="code-line">
                        <span className="code-comment"># ✅ プログラミング知識不要でテスト設計が可能</span>
                    </div>
                </div>

                {/* 実行 */}
                <div className="subsection-title">
                    ▶️ 1.2.4 テスト実行（Test Execution）— 「実際に実行して結果を記録する」
                </div>
                <p>
                    <strong>定義：</strong
                    >実装済みのテストケースを実行し、実際の結果と期待結果を比較してインシデントを報告する活動。
                </p>

                <div className="step-list">
                    <li>テスト環境・テストデータのセットアップ確認</li>
                    <li>テストケースの実行（手動またはツール経由）</li>
                    <li>実際の結果と期待結果の比較（テストオラクルの適用）</li>
                    <li>テストログの正確な記録</li>
                    <li>不一致が発生した場合のインシデント（欠陥）報告</li>
                    <li>環境問題と実際の欠陥の切り分け</li>
                </div>

                {/* 1.3 */}
                <div className="section-title ch1">1.3 成果物（Work Products）に関するタスク</div>

                {/* テストオラクル */}
                <div className="subsection-title">🔮 テストオラクル（Test Oracle）</div>
                <p>
                    <strong>定義：</strong
                    >テスト実行の際に「期待結果」を決定するための情報源または仕組み。
                </p>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>オラクル種別</th>
                                <th>説明</th>
                                <th>具体例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>仕様書オラクル</td>
                                <td>要求仕様書・設計書が基準</td>
                                <td>「画面遷移仕様書に基づき確認」</td>
                            </tr>
                            <tr>
                                <td>ヒューリスティックオラクル</td>
                                <td>経験・常識・業界慣行が基準</td>
                                <td>「エラー時は赤色でメッセージ表示するのが一般的」</td>
                            </tr>
                            <tr>
                                <td>一貫性オラクル</td>
                                <td>過去バージョンや類似システムとの比較</td>
                                <td>「v2.0と同じ動作をするはず」</td>
                            </tr>
                            <tr>
                                <td>統計的オラクル</td>
                                <td>確率的な正解範囲を許容</td>
                                <td>「誤差±0.01%以内なら正解」</td>
                            </tr>
                            <tr>
                                <td>人間オラクル</td>
                                <td>専門家や熟練ユーザーの判断</td>
                                <td>「医師が結果を評価する」</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout warning">
                    <span className="callout-icon">⚠️</span>
                    <div className="callout-body">
                        <div className="callout-title">オラクル問題（Oracle Problem）</div>
                        AIシステムや科学計算系では「正しい期待結果」を事前に決定することが本質的に困難。これを「オラクル問題」と呼ぶ。解決策としてメタモルフィックテスト（Chapter
                        3で詳述）が有効。
                    </div>
                </div>

                {/* テストデータ */}
                <div className="subsection-title">💾 テストデータ要件</div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>分類</th>
                                <th>用途</th>
                                <th>注意点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>有効データ</td>
                                <td>正常系テスト</td>
                                <td>実際の使用パターンを反映</td>
                            </tr>
                            <tr>
                                <td>無効データ</td>
                                <td>異常系テスト</td>
                                <td>エラー処理の確認</td>
                            </tr>
                            <tr>
                                <td>境界値データ</td>
                                <td>EP/BVAテスト用</td>
                                <td>ON点・OFF点を含む</td>
                            </tr>
                            <tr>
                                <td>マスクデータ</td>
                                <td>本番データの匿名化</td>
                                <td>GDPR等規制対応が必須</td>
                            </tr>
                            <tr>
                                <td>合成データ</td>
                                <td>ツールで自動生成</td>
                                <td>実際のパターンと乖離しないよう注意</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="alert green">
                    <strong>学習目標（LO）まとめ</strong>
                    TA-1.1.1 (K2) SDLCモデルでのTAの役割 | TA-1.2.1 (K2) テスト分析・設計の違い |
                    TA-1.2.2 (K2) テスト実装・実行の活動
                </div>
            </section>

            <hr className="divider" />

            {/* ══════════════════════════════════════════════════
     CHAPTER 2: リスクベーステスト
══════════════════════════════════════════════════ */}
            <section id="ch2">
                <div className="chapter-header ch2">
                    <div
                        className="chapter-num"
                        style={{borderColor: "var(--ch2-color)", color: "var(--ch2-color)"}}
                    >
                        CH.2
                    </div>
                    <div className="chapter-title-wrap">
                        <h2 className="chapter-title">
                            リスクベーステストにおけるテストアナリストのタスク
                        </h2>
                        <div className="chapter-meta">
                            THE TASKS OF THE TEST ANALYST IN RISK-BASED TESTING &nbsp;·&nbsp; 90分
                        </div>
                    </div>
                </div>

                {/* 2.1 リスク分析 */}
                <div className="section-title ch2">
                    2.1 リスク分析（Risk Analysis） <span className="badge badge-k3">K3</span>
                </div>

                <p>
                    <strong>定義：</strong
                    >リスクとは「ネガティブな結果をもたらす可能性のある将来の事象や状況の可能性」。テストにおいては、<code
                        >リスクレベル = 発生確率 × 影響度</code
                    >
                    で評価する。
                </p>

                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">製品リスク（TA担当）</div>
                        <p style={{fontSize: "1rem", marginBottom: "0"}}>
                            ソフトウェアが欠陥を持つことによる品質リスク。例：決済機能のバグで売上損失。テストアナリストが<strong>識別・評価・テスト優先順位付け</strong>を担当。
                        </p>
                    </div>
                    <div className="compare-box bad" style={{borderColor: "rgba(255, 179, 0, 0.3)"}}>
                        <div className="compare-label" style={{color: "var(--neon-amber)"}}>
                            プロジェクトリスク（TM担当）
                        </div>
                        <p style={{fontSize: "1rem", marginBottom: "0"}}>
                            スケジュール遅延・リソース不足・チームメンバーの離脱等。テストマネージャーと協力して管理。TAは直接担当しない。
                        </p>
                    </div>
                </div>

                {/* リスクマトリクス */}
                <div className="subsection-title">リスクマトリクス</div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>発生確率 ＼ 影響度</th>
                                <th>低（1）</th>
                                <th>中（2）</th>
                                <th>高（3）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{color: "var(--neon-green)"}}>低（1）</td>
                                <td>1 – 低リスク</td>
                                <td>2 – 低リスク</td>
                                <td>3 – 中リスク</td>
                            </tr>
                            <tr>
                                <td style={{color: "var(--neon-amber)"}}>中（2）</td>
                                <td>2 – 低リスク</td>
                                <td>4 – 中リスク</td>
                                <td>6 – 高リスク</td>
                            </tr>
                            <tr>
                                <td style={{color: "var(--neon-red)"}}>高（3）</td>
                                <td>3 – 中リスク</td>
                                <td>6 – 高リスク</td>
                                <td>9 – 最高リスク</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* リスク識別手法 */}
                <div className="subsection-title">リスク識別の手法</div>
                <div className="arch-layers">
                    <div className="arch-layer" style={{ "--layer-color": "var(--ch2-color)"} as React.CSSProperties}>
                        <div className="arch-layer-label">ブレインストーミング</div>
                        <div className="arch-layer-desc">
                            全ステークホルダーで参加。「何が失敗し得るか」を自由に発想。ファシリテーターがリストを収集・整理する。
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-cyan)"} as React.CSSProperties}>
                        <div className="arch-layer-label">過去の欠陥分析</div>
                        <div className="arch-layer-desc">
                            過去プロジェクトの欠陥データベースを参照し、頻出欠陥パターンをリスクとして登録する。
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-green)"} as React.CSSProperties}>
                        <div className="arch-layer-label">チェックリスト</div>
                        <div className="arch-layer-desc">
                            業界標準のリスクチェックリストを活用。セキュリティ・パフォーマンス・可用性等の観点で網羅的に確認。
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-purple)"} as React.CSSProperties}>
                        <div className="arch-layer-label">ステークホルダーインタビュー</div>
                        <div className="arch-layer-desc">
                            ビジネスオーナー・開発者・運用担当者に直接インタビュー。各視点から重要リスクを収集。
                        </div>
                    </div>
                </div>

                {/* 2.2 リスクコントロール */}
                <div className="section-title ch2">
                    2.2 リスクコントロール（Risk Control） <span className="badge badge-k3">K3</span>
                </div>
                <p>
                    <strong>定義：</strong
                    >識別されたリスクを評価し、適切な緩和策を実施・モニタリングするサイクル。
                </p>

                <div className="code-block" data-lang="RISK CONTROL">
                    <div className="code-line">
                        <span className="code-comment"># リスクベーステスト 優先順位付けの例</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.4rem"}}>
                        <span className="code-white" style={{display: "inline-block", minWidth: "200px", fontWeight: 700}}>機能</span>
                        <span className="code-white" style={{display: "inline-block", minWidth: "160px", fontWeight: 700}}>リスクレベル</span>
                        <span className="code-white" style={{display: "inline-block", minWidth: "110px", fontWeight: 700}}>テスト工数</span>
                        <span className="code-white" style={{fontWeight: 700}}>優先度</span>
                    </div>
                    <div className="code-line">
                        <span style={{color: "#243c5a", display: "inline-block", minWidth: "200px"}}>──────────────</span>
                        <span style={{color: "#243c5a", display: "inline-block", minWidth: "160px"}}>────────────</span>
                        <span style={{color: "#243c5a", display: "inline-block", minWidth: "110px"}}>──────────</span>
                        <span style={{color: "#243c5a"}}>──────</span>
                    </div>
                    <div className="code-line">
                        <span className="code-red" style={{display: "inline-block", minWidth: "200px"}}>決済処理</span>
                        <span className="code-red" style={{display: "inline-block", minWidth: "160px"}}>9（高×高）🔴</span>
                        <span className="code-red" style={{display: "inline-block", minWidth: "110px"}}>多め</span>
                        <span className="code-red" style={{fontWeight: 700}}>1st 最優先</span>
                    </div>
                    <div className="code-line">
                        <span className="code-amber" style={{display: "inline-block", minWidth: "200px"}}>ユーザー認証</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "160px"}}>6（高×中）🟡</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "110px"}}>多め</span>
                        <span className="code-amber" style={{fontWeight: 700}}>2nd</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "200px"}}>商品検索</span>
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "160px"}}>4（中×中）🟢</span>
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "110px"}}>普通</span>
                        <span className="code-cyan" style={{fontWeight: 700}}>3rd</span>
                    </div>
                    <div className="code-line">
                        <span className="code-green" style={{display: "inline-block", minWidth: "200px"}}>プロフィール編集</span>
                        <span className="code-green" style={{display: "inline-block", minWidth: "160px"}}>2（低×中）⚪</span>
                        <span className="code-green" style={{display: "inline-block", minWidth: "110px"}}>少なめ</span>
                        <span className="code-green" style={{fontWeight: 700}}>4th</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.6rem"}}>
                        <span className="code-comment"># 🔺 リスクが高い領域 → テストカバレッジを増やす</span>
                    </div>
                    <div className="code-line">
                        <span className="code-comment"># 🔻 リスクが低い領域 → テストを軽量化してコスト削減</span>
                    </div>
                </div>

                <div className="callout info">
                    <span className="callout-icon">📌</span>
                    <div className="callout-body">
                        <div className="callout-title">学習目標（LO）</div>
                        TA-2.1.1 (K2) リスクレベルに基づいてリスクを分類できる ｜ TA-2.1.2 (K3)
                        製品リスクの識別と評価に貢献できる
                    </div>
                </div>

                <div className="alert amber">
                    <strong>試験ポイント</strong>
                    プロジェクトリスクとプロダクトリスクの区別は頻出。テストアナリストが担当するのは<strong>プロダクトリスク</strong>。プロジェクトリスクはテストマネージャーの管轄。
                </div>
            </section>

            <hr className="divider" />

            {/* ═══════════ CHAPTER 3 ═══════════ */}
            <section id="ch3">
                <div className="chapter-header ch3">
                    <div
                        className="chapter-num"
                        style={{borderColor: "var(--ch3-color)", color: "var(--ch3-color)"}}
                    >
                        CH.3
                    </div>
                    <div className="chapter-title-wrap">
                        <h2 className="chapter-title">テスト分析とテスト設計 ⭐</h2>
                        <div className="chapter-meta">
                            TEST ANALYSIS AND TEST DESIGN &nbsp;·&nbsp; 615分 &nbsp;·&nbsp;
                            試験全体の50%超
                        </div>
                    </div>
                </div>

                <div className="section-title ch3">テスト技法の全体像</div>
                <div className="arch-layers">
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-cyan)"} as React.CSSProperties}>
                        <div className="arch-layer-label">データベース技法</div>
                        <div className="arch-layer-desc">
                            ドメインテスト（EP+BVA）・組み合わせテスト・ランダムテスト —
                            入力「値」に着目
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-green)"} as React.CSSProperties}>
                        <div className="arch-layer-label">振る舞いベース技法</div>
                        <div className="arch-layer-desc">
                            CRUDテスト・状態遷移テスト・シナリオベーステスト —
                            システムの「振る舞い」に着目
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-amber)"} as React.CSSProperties}>
                        <div className="arch-layer-label">ルールベース技法</div>
                        <div className="arch-layer-desc">
                            デシジョンテーブルテスト・メタモルフィックテスト —
                            ビジネスルールと関係性に着目
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-purple)"} as React.CSSProperties}>
                        <div className="arch-layer-label">経験ベース技法</div>
                        <div className="arch-layer-desc">
                            テストチャーター・チェックリストベース・クラウドテスト —
                            経験と直感に着目
                        </div>
                    </div>
                </div>

                {/* 3.1 データベース技法 */}
                <div className="section-title ch3">
                    3.1 データベース技法（Data-Based Test Techniques）
                </div>
                <div className="subsection-title">
                    3.1.1 ドメインテスト（Domain Testing） <span className="badge badge-k3">K3</span>
                </div>
                <p>
                    同値分割法（EP）と境界値分析（BVA）を組み合わせた高度な技法。入力値を「同じ処理を受ける集合（パーティション）」に分割し、境界に着目してテスト値を設計します。
                </p>

                <div className="subsection-title">同値分割法（EP）の概念図</div>
                <div style={{background: "#070e1c", border: "1px solid #1a2e4a", borderRadius: "8px", padding: "1.5rem 1rem", margin: "1rem 0", overflowX: "auto"}}>
                    <div style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#546e7a", fontStyle: "italic", marginBottom: "1rem"}}>
                        # 年齢入力フィールド (0〜120が有効) — 同値分割法（EP）
                    </div>
                    <svg role="img" viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg" style={{width: "100%", maxWidth: "680px", display: "block", margin: "0 auto"}} fontFamily="Space Mono, monospace" fontSize="13">
                        <title>同値分割法（EP）の概念図</title>
                        <rect x="8" y="10" width="148" height="60" rx="6" fill="rgba(255,69,96,0.1)" stroke="#ff4560" strokeWidth="1.5" />
                        <text x="82" y="36" fill="#ff4560" textAnchor="middle" fontWeight="700" fontSize="14">無効EP</text>
                        <text x="82" y="57" fill="#ff4560" textAnchor="middle" fontSize="12">{"（< 0）"}</text>
                        <rect x="162" y="10" width="356" height="60" rx="6" fill="rgba(0,255,135,0.1)" stroke="#00ff87" strokeWidth="1.5" />
                        <text x="340" y="36" fill="#00ff87" textAnchor="middle" fontWeight="700" fontSize="14">有効EP</text>
                        <text x="340" y="57" fill="#00ff87" textAnchor="middle" fontSize="12">（0 〜 120）</text>
                        <rect x="524" y="10" width="148" height="60" rx="6" fill="rgba(255,69,96,0.1)" stroke="#ff4560" strokeWidth="1.5" />
                        <text x="598" y="36" fill="#ff4560" textAnchor="middle" fontWeight="700" fontSize="14">無効EP</text>
                        <text x="598" y="57" fill="#ff4560" textAnchor="middle" fontSize="12">{"（> 120）"}</text>
                        <line x1="158" y1="5" x2="158" y2="80" stroke="#e8f4fd" strokeWidth="1.5" strokeDasharray="4,3" />
                        <line x1="522" y1="5" x2="522" y2="80" stroke="#e8f4fd" strokeWidth="1.5" strokeDasharray="4,3" />
                        <line x1="20" y1="105" x2="660" y2="105" stroke="#4a6080" strokeWidth="2" />
                        <polygon points="660,100 672,105 660,110" fill="#4a6080" />
                        <line x1="158" y1="95" x2="158" y2="118" stroke="#e8f4fd" strokeWidth="1.5" />
                        <text x="158" y="133" fill="#e8f4fd" textAnchor="middle" fontSize="12">0</text>
                        <text x="158" y="147" fill="#4a6080" textAnchor="middle" fontSize="11">下限境界</text>
                        <line x1="522" y1="95" x2="522" y2="118" stroke="#e8f4fd" strokeWidth="1.5" />
                        <text x="522" y="133" fill="#e8f4fd" textAnchor="middle" fontSize="12">120</text>
                        <text x="522" y="147" fill="#4a6080" textAnchor="middle" fontSize="11">上限境界</text>
                        <circle cx="82" cy="105" r="5" fill="#ff4560" />
                        <text x="82" y="165" fill="#ff4560" textAnchor="middle" fontSize="12">代表値: -1</text>
                        <circle cx="340" cy="105" r="5" fill="#00ff87" />
                        <text x="340" y="165" fill="#00ff87" textAnchor="middle" fontSize="12">代表値: 60</text>
                        <circle cx="598" cy="105" r="5" fill="#ff4560" />
                        <text x="598" y="165" fill="#ff4560" textAnchor="middle" fontSize="12">代表値: 121</text>
                    </svg>
                </div>

                <div className="subsection-title">ON点・OFF点・IN点・OUT点（v4.0重要！）</div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ポイント種別</th>
                                <th>定義</th>
                                <th>例（x ≥ 18 の境界）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span style={{color: "var(--neon-green)"}}>ON点</span></td>
                                <td>境界値そのもの（境界上）</td>
                                <td>x = 18</td>
                            </tr>
                            <tr>
                                <td><span style={{color: "var(--neon-red)"}}>OFF点</span></td>
                                <td>境界の外側の最近傍値</td>
                                <td>x = 17（境界の「オフ」側）</td>
                            </tr>
                            <tr>
                                <td><span style={{color: "var(--neon-cyan)"}}>IN点</span></td>
                                <td>同値パーティション内の代表値</td>
                                <td>x = 25（有効EP内）</td>
                            </tr>
                            <tr>
                                <td><span style={{color: "var(--neon-amber)"}}>OUT点</span></td>
                                <td>同値パーティション外の代表値</td>
                                <td>x = 10（無効EP内）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subsection-title">
                    閉じた境界 vs 開いた境界
                    <span className="fix-badge">✓ FIX</span>
                </div>

                <div className="code-block" data-lang="BOUNDARY TYPES">
                    <div className="code-line">
                        <span className="code-amber" style={{fontWeight: 700}}>① 閉じた境界（Closed Border）— ≤ または ≥ を含む</span>
                    </div>
                    <div className="code-line">
                        <span className="code-comment"> 例: L ≤ 235（長さが235以下）</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.3rem"}}>
                        <span className="code-green" style={{display: "inline-block", minWidth: "200px"}}> ON点 : 235</span>
                        <span className="code-comment">← 境界値そのもの（✅ 有効側）</span>
                    </div>
                    <div className="code-line">
                        <span className="code-red" style={{display: "inline-block", minWidth: "200px"}}> OFF点 : 236</span>
                        <span className="code-comment">← 境界外の最近傍値（❌ 無効側）</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.6rem"}}>
                        <span style={{color: "#1e3350"}}> ──────────────────────────────────────</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.6rem"}}>
                        <span className="code-amber" style={{fontWeight: 700}}>② 開いた境界（Open Border）— {"<"} または {">"} のみ</span>
                    </div>
                    <div className="code-line">
                        <span className="code-comment"> 例: T {">"} 96（温度が96より大きい）</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.3rem"}}>
                        <span className="code-green" style={{display: "inline-block", minWidth: "200px"}}> ON点 : 97</span>
                        <span className="code-comment">← 有効側の最初の値（✅ 有効側）</span>
                    </div>
                    <div className="code-line">
                        <span className="code-red" style={{display: "inline-block", minWidth: "200px"}}> OFF点 : 96</span>
                        <span className="code-comment">← 境界値の外側（❌ 無効側）</span>
                    </div>
                </div>

                <div className="subsection-title">
                    境界値分析（BVA）— 2値 vs 3値
                    <span className="fix-badge">✓ FIX</span>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "1rem", margin: "1.2rem 0"}}>
                    <div style={{background: "var(--bg-card)", border: "1px solid rgba(0, 255, 135, 0.35)", borderRadius: "var(--radius)", padding: "1.2rem", borderLeft: "4px solid var(--neon-green)"}}>
                        <div style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 700, color: "var(--neon-green)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem"}}>
                            ✅ 2値BVA（2-value BVA）
                            <span style={{fontWeight: 400, color: "var(--text-muted)"}}>— ON点 + OFF点 のみ / 計4値</span>
                        </div>
                        <div style={{background: "#070e1c", border: "1px solid var(--color-border)", borderRadius: "var(--radius)", padding: "1rem 1.2rem", fontFamily: "var(--font-mono)", fontSize: "0.88rem", position: "relative"}}>
                            <span style={{position: "absolute", top: "0.4rem", right: "0.8rem", fontSize: "0.68rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em"}}>2-VALUE BVA</span>
                            <div style={{color: "#546e7a", fontStyle: "italic", marginBottom: "0.8rem", fontSize: "0.82rem"}}># パスワード文字数（8〜20文字）</div>
                            <div style={{display: "grid", gridTemplateColumns: "72px repeat(4, 1fr)", gap: "2px 0", lineHeight: 2}}>
                                <span style={{color: "#e8f4fd", fontSize: "0.82rem", alignSelf: "center"}}>テスト値:</span>
                                <span style={{color: "#ff4560", textAlign: "center", fontWeight: 700, fontSize: "1rem"}}>7</span>
                                <span style={{color: "#00ff87", textAlign: "center", fontWeight: 700, fontSize: "1rem"}}>8</span>
                                <span style={{color: "#00ff87", textAlign: "center", fontWeight: 700, fontSize: "1rem"}}>20</span>
                                <span style={{color: "#ff4560", textAlign: "center", fontWeight: 700, fontSize: "1rem"}}>21</span>
                                <span style={{color: "#e8f4fd", fontSize: "0.72rem", alignSelf: "center"}}>ラベル :</span>
                                <span style={{color: "#ff4560", textAlign: "center", fontSize: "0.72rem", letterSpacing: "0.04em"}}>OFF</span>
                                <span style={{color: "#00ff87", textAlign: "center", fontSize: "0.72rem", letterSpacing: "0.04em"}}>ON</span>
                                <span style={{color: "#00ff87", textAlign: "center", fontSize: "0.72rem", letterSpacing: "0.04em"}}>ON</span>
                                <span style={{color: "#ff4560", textAlign: "center", fontSize: "0.72rem", letterSpacing: "0.04em"}}>OFF</span>
                                <span style={{color: "#546e7a", fontSize: "0.72rem", alignSelf: "center"}}>区分 :</span>
                                <span style={{color: "#ff4560", textAlign: "center", fontSize: "0.68rem", opacity: 0.7}}>無効</span>
                                <span style={{color: "#00ff87", textAlign: "center", fontSize: "0.68rem", opacity: 0.7}}>有効</span>
                                <span style={{color: "#00ff87", textAlign: "center", fontSize: "0.68rem", opacity: 0.7}}>有効</span>
                                <span style={{color: "#ff4560", textAlign: "center", fontSize: "0.68rem", opacity: 0.7}}>無効</span>
                            </div>
                            <div style={{color: "#546e7a", fontStyle: "italic", marginTop: "0.8rem", fontSize: "0.78rem"}}># 各境界にON点（境界値）+ OFF点（境界外最近傍値）= 計4テスト値</div>
                        </div>
                    </div>
                    <div style={{background: "var(--bg-card)", border: "1px solid rgba(0, 212, 255, 0.35)", borderRadius: "var(--radius)", padding: "1.2rem", borderLeft: "4px solid var(--neon-cyan)"}}>
                        <div style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 700, color: "var(--neon-cyan)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem"}}>
                            ✅ 3値BVA（3-value BVA）
                            <span style={{fontWeight: 400, color: "var(--text-muted)"}}>— ON点 + IN点 + OFF点 / 計6値</span>
                        </div>
                        <div style={{background: "#070e1c", border: "1px solid var(--color-border)", borderRadius: "var(--radius)", padding: "1rem 1.2rem", fontFamily: "var(--font-mono)", fontSize: "0.88rem", position: "relative"}}>
                            <span style={{position: "absolute", top: "0.4rem", right: "0.8rem", fontSize: "0.68rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em"}}>3-VALUE BVA</span>
                            <div style={{color: "#546e7a", fontStyle: "italic", marginBottom: "0.8rem", fontSize: "0.82rem"}}># パスワード文字数（8〜20文字）</div>
                            <div style={{display: "grid", gridTemplateColumns: "72px repeat(6, 1fr)", gap: "2px 0", lineHeight: 2}}>
                                <span style={{color: "#e8f4fd", fontSize: "0.82rem", alignSelf: "center"}}>テスト値:</span>
                                <span style={{color: "#ff4560", textAlign: "center", fontWeight: 700, fontSize: "1rem"}}>7</span>
                                <span style={{color: "#00ff87", textAlign: "center", fontWeight: 700, fontSize: "1rem"}}>8</span>
                                <span style={{color: "#00d4ff", textAlign: "center", fontWeight: 700, fontSize: "1rem"}}>9</span>
                                <span style={{color: "#00d4ff", textAlign: "center", fontWeight: 700, fontSize: "1rem"}}>19</span>
                                <span style={{color: "#00ff87", textAlign: "center", fontWeight: 700, fontSize: "1rem"}}>20</span>
                                <span style={{color: "#ff4560", textAlign: "center", fontWeight: 700, fontSize: "1rem"}}>21</span>
                                <span style={{color: "#e8f4fd", fontSize: "0.72rem", alignSelf: "center"}}>ラベル :</span>
                                <span style={{color: "#ff4560", textAlign: "center", fontSize: "0.72rem", letterSpacing: "0.04em"}}>OUT</span>
                                <span style={{color: "#00ff87", textAlign: "center", fontSize: "0.72rem", letterSpacing: "0.04em"}}>ON</span>
                                <span style={{color: "#00d4ff", textAlign: "center", fontSize: "0.72rem", letterSpacing: "0.04em"}}>IN</span>
                                <span style={{color: "#00d4ff", textAlign: "center", fontSize: "0.72rem", letterSpacing: "0.04em"}}>IN</span>
                                <span style={{color: "#00ff87", textAlign: "center", fontSize: "0.72rem", letterSpacing: "0.04em"}}>ON</span>
                                <span style={{color: "#ff4560", textAlign: "center", fontSize: "0.72rem", letterSpacing: "0.04em"}}>OUT</span>
                                <span style={{color: "#546e7a", fontSize: "0.72rem", alignSelf: "center"}}>区分 :</span>
                                <span style={{color: "#ff4560", textAlign: "center", fontSize: "0.68rem", opacity: 0.7}}>無効</span>
                                <span style={{color: "#00ff87", textAlign: "center", fontSize: "0.68rem", opacity: 0.7}}>有効</span>
                                <span style={{color: "#00d4ff", textAlign: "center", fontSize: "0.68rem", opacity: 0.7}}>有効</span>
                                <span style={{color: "#00d4ff", textAlign: "center", fontSize: "0.68rem", opacity: 0.7}}>有効</span>
                                <span style={{color: "#00ff87", textAlign: "center", fontSize: "0.68rem", opacity: 0.7}}>有効</span>
                                <span style={{color: "#ff4560", textAlign: "center", fontSize: "0.68rem", opacity: 0.7}}>無効</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="callout info">
                    <span className="callout-icon">💡</span>
                    <div className="callout-body">
                        <div className="callout-title">多次元境界（v4.0重要ポイント）</div>
                        複数変数の組み合わせ境界も扱う。例：圧力P≥9 AND
                        温度90≤T≤96。各変数の境界に対してON点・OFF点を個別に設計し、組み合わせてテストケースを作成する。
                    </div>
                </div>

                <div className="subsection-title">
                    3.1.2 組み合わせテスト <span className="badge badge-k3">K3</span>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>技法</th>
                                <th>カバレッジ</th>
                                <th>テスト数</th>
                                <th>用途</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>全組み合わせ</td>
                                <td>100%</td>
                                <td>最多</td>
                                <td>クリティカルシステム</td>
                            </tr>
                            <tr>
                                <td><strong>ペアワイズ（2因子）</strong></td>
                                <td>全2変数ペア</td>
                                <td>大幅削減</td>
                                <td>一般的Webアプリ（頻出）</td>
                            </tr>
                            <tr>
                                <td>3因子組み合わせ</td>
                                <td>全3変数組み合わせ</td>
                                <td>中程度</td>
                                <td>高信頼性システム</td>
                            </tr>
                            <tr>
                                <td>直交配列</td>
                                <td>統計的カバレッジ</td>
                                <td>最少</td>
                                <td>大規模組み込みシステム</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="code-block" data-lang="PAIRWISE TESTING">
                    <div className="code-line">
                        <span className="code-comment"># OS(3)×Browser(3)×Lang(2) = 18通り → ペアワイズで6件に削減！</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.4rem"}}>
                        <span className="code-white" style={{display: "inline-block", minWidth: "50px", fontWeight: 700}}>No</span>
                        <span className="code-white" style={{display: "inline-block", minWidth: "100px", fontWeight: 700}}>OS</span>
                        <span className="code-white" style={{display: "inline-block", minWidth: "110px", fontWeight: 700}}>Browser</span>
                        <span className="code-white" style={{fontWeight: 700}}>Lang</span>
                    </div>
                    <div className="code-line">
                        <span className="code-green" style={{display: "inline-block", minWidth: "50px"}}>TC1</span>
                        <span className="code-green" style={{display: "inline-block", minWidth: "100px"}}>Windows</span>
                        <span className="code-green" style={{display: "inline-block", minWidth: "110px"}}>Chrome</span>
                        <span className="code-green" style={{display: "inline-block", minWidth: "40px"}}>EN</span>
                        <span className="code-comment">← Win-Chrome, Win-EN, Chrome-EN</span>
                    </div>
                    <div className="code-line">
                        <span className="code-green" style={{display: "inline-block", minWidth: "50px"}}>TC2</span>
                        <span className="code-green" style={{display: "inline-block", minWidth: "100px"}}>Windows</span>
                        <span className="code-green" style={{display: "inline-block", minWidth: "110px"}}>Firefox</span>
                        <span className="code-green" style={{display: "inline-block", minWidth: "40px"}}>JP</span>
                        <span className="code-comment">← Win-Firefox, Win-JP, Firefox-JP</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "50px"}}>TC3</span>
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "100px"}}>Mac</span>
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "110px"}}>Safari</span>
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "40px"}}>EN</span>
                        <span className="code-comment">← Mac-Safari, Mac-EN, Safari-EN</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "50px"}}>TC4</span>
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "100px"}}>Mac</span>
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "110px"}}>Chrome</span>
                        <span className="code-cyan" style={{display: "inline-block", minWidth: "40px"}}>JP</span>
                        <span className="code-comment">← Mac-Chrome, Mac-JP, Chrome-JP</span>
                    </div>
                    <div className="code-line">
                        <span className="code-amber" style={{display: "inline-block", minWidth: "50px"}}>TC5</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "100px"}}>Linux</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "110px"}}>Firefox</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "40px"}}>EN</span>
                        <span className="code-comment">← Linux-Firefox, Linux-EN</span>
                    </div>
                    <div className="code-line">
                        <span className="code-amber" style={{display: "inline-block", minWidth: "50px"}}>TC6</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "100px"}}>Linux</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "110px"}}>Safari</span>
                        <span className="code-amber" style={{display: "inline-block", minWidth: "40px"}}>JP</span>
                        <span className="code-comment">← Linux-Safari, Linux-JP, Safari-JP</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.5rem"}}>
                        <span className="code-comment"># 全ペア（OS-Browser, OS-Lang, Browser-Lang）を6件でカバー！</span>
                    </div>
                </div>

                <div className="subsection-title">
                    3.1.3 ランダムテスト（Random Testing） <span className="badge badge-k2">K2</span>
                </div>
                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 利点</div>
                        <ul>
                            <li>予測不可能な入力パターンを発見</li>
                            <li>テスト設計の偏りを自動排除</li>
                            <li>ファジングで大量テスト生成</li>
                        </ul>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 制限</div>
                        <ul>
                            <li>重要な境界値を見逃す可能性</li>
                            <li>欠陥発見効率が低い場合あり</li>
                            <li>再現性確保のためシード管理必要</li>
                        </ul>
                    </div>
                </div>

                {/* 3.2 振る舞いベース技法 */}
                <div className="section-title ch3">
                    3.2 振る舞いベース技法（Behavior-Based Test Techniques）
                </div>

                <div className="subsection-title">
                    3.2.1 CRUDテスト <span className="badge badge-k3">K3</span>
                    <span className="badge badge-new">v4.0 新出</span>
                </div>
                <p>
                    <strong>定義：</strong>Create・Read・Update・Delete
                    の4操作とその相互依存関係をテストする技法。
                </p>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>操作</th>
                                <th>確認内容</th>
                                <th>相互依存テスト</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span style={{color: "var(--neon-green)"}}>Create</span></td>
                                <td>データが正しく作成されるか</td>
                                <td>Create → Read（作成後に正しく読める？）</td>
                            </tr>
                            <tr>
                                <td><span style={{color: "var(--neon-cyan)"}}>Read</span></td>
                                <td>データが正確に取得・表示されるか</td>
                                <td>Update → Read（更新後に正しく読める？）</td>
                            </tr>
                            <tr>
                                <td><span style={{color: "var(--neon-amber)"}}>Update</span></td>
                                <td>変更が正しく保存されるか</td>
                                <td>Delete → Read（削除後に存在しない？）</td>
                            </tr>
                            <tr>
                                <td><span style={{color: "var(--neon-red)"}}>Delete</span></td>
                                <td>削除後にデータが消えるか</td>
                                <td>Delete → Create（同一キーで再作成できる？）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="code-block" data-lang="GHERKIN / BDD">
                    <div className="code-line"><span className="code-keyword">Scenario: </span><span className="code-green">ユーザーの作成（Create）→ 読み取り確認（Read）</span></div>
                    <div className="code-line"><span className="code-cyan">Given </span><span className="code-white">管理者がユーザー管理画面を開いている</span></div>
                    <div className="code-line"><span className="code-cyan">When  </span><span className="code-white">名前 "田中太郎", メール "tanaka@test.com" を入力して保存</span></div>
                    <div className="code-line"><span className="code-cyan">Then  </span><span className="code-white">"田中太郎" がユーザー一覧に表示される（Read確認）</span></div>
                    <div className="code-line">&nbsp;</div>
                    <div className="code-line"><span className="code-keyword">Scenario: </span><span className="code-red">ユーザーの削除（Delete）→ 不在確認（Read）</span></div>
                    <div className="code-line"><span className="code-cyan">Given </span><span className="code-white">"田中太郎" がシステムに存在する</span></div>
                    <div className="code-line"><span className="code-cyan">When  </span><span className="code-white">"田中太郎" を削除する</span></div>
                    <div className="code-line"><span className="code-cyan">Then  </span><span className="code-white">"田中太郎" がユーザー一覧に表示されない</span></div>
                </div>

                <div className="subsection-title">
                    3.2.2 状態遷移テスト <span className="badge badge-k3">K3</span>
                </div>
                <div style={{background: "#070e1c", border: "1px solid #1a2e4a", borderRadius: "8px", padding: "1.5rem 1rem", margin: "1rem 0", overflowX: "auto"}}>
                    <div style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#546e7a", fontStyle: "italic", marginBottom: "1rem"}}>
                        # 注文システムの状態遷移ダイアグラム
                    </div>
                    <svg role="img" viewBox="0 0 860 200" xmlns="http://www.w3.org/2000/svg" style={{width: "100%", maxWidth: "860px", display: "block", margin: "0 auto"}} fontFamily="Space Mono, monospace" fontSize="13">
                        <title>注文システムの状態遷移ダイアグラム</title>
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#4a6080" />
                            </marker>
                        </defs>
                        <rect x="10" y="30" width="100" height="44" rx="8" fill="rgba(0,255,135,0.1)" stroke="#00ff87" strokeWidth="1.5" />
                        <text x="60" y="56" fill="#00ff87" textAnchor="middle" fontWeight="700">注文中</text>
                        <line x1="110" y1="52" x2="185" y2="52" stroke="#4a6080" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                        <text x="147" y="46" fill="#4a6080" textAnchor="middle" fontSize="11">支払い完了</text>
                        <rect x="186" y="30" width="110" height="44" rx="8" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1.5" />
                        <text x="241" y="56" fill="#00d4ff" textAnchor="middle" fontWeight="700">決済済み</text>
                        <line x1="296" y1="52" x2="371" y2="52" stroke="#4a6080" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                        <text x="333" y="46" fill="#4a6080" textAnchor="middle" fontSize="11">発送</text>
                        <rect x="372" y="30" width="100" height="44" rx="8" fill="rgba(255,179,0,0.1)" stroke="#ffb300" strokeWidth="1.5" />
                        <text x="422" y="56" fill="#ffb300" textAnchor="middle" fontWeight="700">配送中</text>
                        <line x1="472" y1="52" x2="547" y2="52" stroke="#4a6080" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                        <text x="509" y="46" fill="#4a6080" textAnchor="middle" fontSize="11">到着確認</text>
                        <rect x="548" y="30" width="90" height="44" rx="8" fill="rgba(179,107,255,0.1)" stroke="#b36bff" strokeWidth="1.5" />
                        <text x="593" y="56" fill="#b36bff" textAnchor="middle" fontWeight="700">完了</text>
                        <rect x="552" y="34" width="82" height="36" rx="6" fill="none" stroke="#b36bff" strokeWidth="0.5" opacity="0.5" />
                        <line x1="60" y1="74" x2="60" y2="130" stroke="#4a6080" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                        <text x="68" y="108" fill="#4a6080" fontSize="11">キャンセル</text>
                        <rect x="10" y="131" width="100" height="44" rx="8" fill="rgba(255,69,96,0.1)" stroke="#ff4560" strokeWidth="1.5" />
                        <text x="60" y="157" fill="#ff4560" textAnchor="middle" fontWeight="700">キャンセル</text>
                        <text x="680" y="50" fill="#4a6080" fontSize="11">■ 状態（State）</text>
                        <text x="680" y="70" fill="#4a6080" fontSize="11">→ 遷移（Transition）</text>
                        <text x="680" y="90" fill="#4a6080" fontSize="11">　ラベル＝イベント</text>
                        <rect x="672" y="38" width="175" height="62" rx="4" fill="none" stroke="#1a2e4a" strokeWidth="1" />
                    </svg>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>カバレッジレベル</th>
                                <th>内容</th>
                                <th>テスト数</th>
                                <th>適用場面</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0スイッチ</td>
                                <td>全状態をカバー</td>
                                <td>最少</td>
                                <td>基本動作確認</td>
                            </tr>
                            <tr>
                                <td><strong>1スイッチ</strong></td>
                                <td>全遷移をカバー</td>
                                <td>中程度</td>
                                <td><strong>標準的な要件（試験頻出）</strong></td>
                            </tr>
                            <tr>
                                <td>2スイッチ</td>
                                <td>連続2遷移シーケンス</td>
                                <td>多め</td>
                                <td>高信頼性システム</td>
                            </tr>
                            <tr>
                                <td>Nスイッチ</td>
                                <td>N回連続遷移</td>
                                <td>最多</td>
                                <td>クリティカルシステム</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subsection-title">
                    3.2.3 シナリオベーステスト <span className="badge badge-k2">K2</span>
                </div>
                <p>
                    <strong>定義：</strong
                    >実際のユーザーのワークフロー（E2Eシナリオ）をテストする技法。ユーザーストーリーやユースケースから導出する。
                </p>
                <div className="code-block" data-lang="E2E SCENARIO">
                    <div className="code-line"><span className="code-comment"># ECサイト購入シナリオ（E2Eフロー）</span></div>
                    <div className="code-line"><span className="code-white">1. 商品を検索 → 2. 詳細ページ確認 → 3. カート追加(数量:2)</span></div>
                    <div className="code-line"><span className="code-white">4. カート確認 → 5. チェックアウト → 6. 配送先入力</span></div>
                    <div className="code-line"><span className="code-white">7. 支払い入力 → 8. 注文確定</span></div>
                    <div className="code-line"><span className="code-green">9. 注文確認画面表示 ✓  10. 確認メール受信 ✓</span></div>
                </div>

                {/* 3.3 ルールベース技法 */}
                <div className="section-title ch3">
                    3.3 ルールベース技法（Rule-Based Test Techniques）
                </div>

                <div className="subsection-title">
                    3.3.1 デシジョンテーブルテスト <span className="badge badge-k3">K3</span>
                </div>
                <p>
                    <strong>定義：</strong
                    >複数の条件の組み合わせとシステム動作（アクション）を表形式で整理し、全ルールをテストする技法。
                </p>
                <p>
                    <strong>最大ルール数：</strong>n個の条件（True/False）の場合、<code>2ⁿ</code>
                    ルール。4条件 = 16ルール。
                </p>

                <p className="code-comment" style={{fontSize: "0.9rem", marginBottom: "0.5rem"}}># ローン審査（3条件 = 2³ = 8ルール）</p>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>条件 / アクション</th>
                                <th>R1</th><th>R2</th><th>R3</th><th>R4</th>
                                <th>R5</th><th>R6</th><th>R7</th><th>R8</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>年収 ≥ 300万</td>
                                <td><span style={{color: "var(--neon-green)"}}>T</span></td>
                                <td><span style={{color: "var(--neon-green)"}}>T</span></td>
                                <td><span style={{color: "var(--neon-green)"}}>T</span></td>
                                <td><span style={{color: "var(--neon-green)"}}>T</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>F</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>F</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>F</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>F</span></td>
                            </tr>
                            <tr>
                                <td>信用スコア ≥ 700</td>
                                <td><span style={{color: "var(--neon-green)"}}>T</span></td>
                                <td><span style={{color: "var(--neon-green)"}}>T</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>F</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>F</span></td>
                                <td><span style={{color: "var(--neon-green)"}}>T</span></td>
                                <td><span style={{color: "var(--neon-green)"}}>T</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>F</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>F</span></td>
                            </tr>
                            <tr>
                                <td>勤続年数 ≥ 3年</td>
                                <td><span style={{color: "var(--neon-green)"}}>T</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>F</span></td>
                                <td><span style={{color: "var(--neon-green)"}}>T</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>F</span></td>
                                <td><span style={{color: "var(--neon-green)"}}>T</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>F</span></td>
                                <td><span style={{color: "var(--neon-green)"}}>T</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>F</span></td>
                            </tr>
                            <tr style={{borderTop: "2px solid var(--color-border)"}}>
                                <td><span style={{color: "#00ff87", fontWeight: 600}}>審査通過</span></td>
                                <td><span style={{color: "#00ff87"}}>✓</span></td>
                                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td><span style={{color: "var(--neon-amber)", fontWeight: 600}}>保証人要求</span></td>
                                <td></td>
                                <td><span style={{color: "var(--neon-amber)"}}>✓</span></td>
                                <td><span style={{color: "var(--neon-amber)"}}>✓</span></td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td><span style={{color: "var(--neon-red)", fontWeight: 600}}>申請却下</span></td>
                                <td></td><td></td><td></td>
                                <td><span style={{color: "var(--neon-red)"}}>✓</span></td>
                                <td></td>
                                <td><span style={{color: "var(--neon-red)"}}>✓</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>✓</span></td>
                                <td><span style={{color: "var(--neon-red)"}}>✓</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 良い例</div>
                        <ul>
                            <li>全ルール（列）を網羅してテストケース作成</li>
                            <li>2ⁿ通りの組み合わせに漏れなし</li>
                            <li>アクション（期待結果）が明確</li>
                        </ul>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 悪い例</div>
                        <ul>
                            <li>一部ルールのみテスト（例：R1とR8だけ）</li>
                            <li>条件の組み合わせが不完全で欠陥見逃し</li>
                            <li>アクションの定義が曖昧</li>
                        </ul>
                    </div>
                </div>

                <div className="subsection-title">
                    3.3.2 メタモルフィックテスト <span className="badge badge-k2">K2</span>
                    <span className="badge badge-new">v4.0 重要新出</span>
                </div>
                <div className="callout warning">
                    <span className="callout-icon">⚠️</span>
                    <div className="callout-body">
                        <div className="callout-title">オラクル問題とは？</div>
                        AI/ML・科学計算等では「正しい出力」を事前に定義することが困難。メタモルフィックテストはこの問題を「入出力の関係性」で解決する。
                    </div>
                </div>

                <div className="code-block" data-lang="METAMORPHIC TESTING">
                    <div className="code-line">
                        <span className="code-comment"># MR1: 検索 — クエリ拡張で結果は減らないはず（単調性）</span>
                    </div>
                    <div className="code-line">
                        <span className="code-keyword">assert</span>
                        <span className="code-white">len(search("Python tutorial programming")) &gt;=</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> len(search("Python tutorial")) * 0.9</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.5rem"}}>
                        <span className="code-comment"># MR2: 経路探索 — 往路と復路の距離は等しいはず（対称性）</span>
                    </div>
                    <div className="code-line">
                        <span className="code-keyword">assert</span>
                        <span className="code-white">abs(shortest_path("Tokyo","Osaka") -</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> shortest_path("Osaka","Tokyo")) &lt; 0.01</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.5rem"}}>
                        <span className="code-comment"># MR3: ML — 訓練データ増加で精度は下がらないはず</span>
                    </div>
                    <div className="code-line">
                        <span className="code-keyword">assert</span>
                        <span className="code-white">accuracy(samples=2000) &gt;= accuracy(samples=1000) - 0.05</span>
                    </div>
                </div>

                <div className="arch-layers">
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-purple)"} as React.CSSProperties}>
                        <div className="arch-layer-label">AI/MLシステム</div>
                        <div className="arch-layer-desc">
                            訓練データ追加・ノイズ除去等の変換に対する出力の単調性・頑健性を検証
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-cyan)"} as React.CSSProperties}>
                        <div className="arch-layer-label">科学計算</div>
                        <div className="arch-layer-desc">
                            スケーリング・対称性・線形性等の物理法則が数値計算でも成立するか検証
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-green)"} as React.CSSProperties}>
                        <div className="arch-layer-label">コンパイラ</div>
                        <div className="arch-layer-desc">
                            等価なコードの最適化前後で実行結果が同一であることを検証
                        </div>
                    </div>
                </div>

                {/* 3.4 経験ベーステスト */}
                <div className="section-title ch3">
                    3.4 経験ベーステスト（Experience-Based Testing）
                </div>

                <div className="subsection-title">
                    3.4.1 テストチャーター（セッションベーステスト）
                    <span className="badge badge-k3">K3</span>
                </div>
                <p>
                    <strong>定義：</strong
                    >探索的テストセッションの目的・範囲・リソースを定義した文書。構造化された探索を実現する。
                </p>

                <div className="code-block" data-lang="TEST CHARTER">
                    <div className="code-line">
                        <span className="code-cyan" style={{fontWeight: 700}}>EXPLORE</span>
                        <span className="code-white" style={{marginLeft: "0.5rem"}}>【テスト対象】</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white" style={{paddingLeft: "1.6rem"}}>ユーザー登録フォーム（名前・メール・パスワード・電話）</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.5rem"}}>
                        <span className="code-cyan" style={{fontWeight: 700}}>TO DISCOVER</span>
                        <span className="code-white" style={{marginLeft: "0.5rem"}}>【発見したいもの】</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white" style={{paddingLeft: "1.6rem"}}>入力バリデーションの不備・セキュリティ上の脆弱性</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.5rem"}}>
                        <span className="code-cyan" style={{fontWeight: 700}}>USING</span>
                        <span className="code-white" style={{marginLeft: "0.5rem"}}>【使用するリソース】</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white" style={{paddingLeft: "1.6rem"}}>時間: 60分 | ツール: Chrome DevTools | データ: 特殊文字セット</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.8rem", borderTop: "1px solid #1e3350", paddingTop: "0.6rem"}}>
                        <span className="code-white" style={{fontWeight: 700}}>時間配分:</span>
                    </div>
                    <div className="code-line">
                        <span className="code-amber" style={{display: "inline-block", minWidth: "150px"}}> 設定・準備</span>
                        <span className="code-white" style={{display: "inline-block", minWidth: "55px"}}>5 分</span>
                        <span style={{color: "#3a2800"}}>█</span>
                    </div>
                    <div className="code-line">
                        <span className="code-green" style={{display: "inline-block", minWidth: "150px"}}> テスト実行</span>
                        <span className="code-white" style={{display: "inline-block", minWidth: "55px"}}>45 分</span>
                        <span style={{color: "#00ff87"}}>█████████</span>
                    </div>
                    <div className="code-line">
                        <span className="code-purple" style={{display: "inline-block", minWidth: "150px"}}> レポート作成</span>
                        <span className="code-white" style={{display: "inline-block", minWidth: "55px"}}>10 分</span>
                        <span style={{color: "#b36bff"}}>██</span>
                    </div>
                </div>

                <div className="subsection-title">
                    3.4.2 チェックリストベーステスト <span className="badge badge-k2">K2</span>
                    <span className="fix-badge">✓ FIX</span>
                </div>
                <div className="code-block" data-lang="CHECKLIST">
                    <div className="code-line">
                        <span className="code-red" style={{fontWeight: 700}}>▌ セキュリティテスト用チェックリスト</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> □ </span>
                        <span className="code-amber">SQLインジェクション</span>
                        <span className="code-white"> — 入力: </span>
                        <span className="code-green">{"' OR '1'='1"}</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> □ </span>
                        <span className="code-amber">XSS</span>
                        <span className="code-white"> — 入力: </span>
                        <span className="code-green">{"<script>alert(1)</script>"}</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> □ </span>
                        <span className="code-amber">CSRF</span>
                        <span className="code-white"> — トークン検証の有無を確認</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> □ </span>
                        <span className="code-amber">ディレクトリトラバーサル</span>
                        <span className="code-white"> — 入力: </span>
                        <span className="code-green">../../etc/passwd</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.8rem", borderTop: "1px solid #1e3350", paddingTop: "0.6rem"}}>
                        <span className="code-cyan" style={{fontWeight: 700}}>▌ ユーザビリティチェックリスト</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> □ エラーメッセージは</span>
                        <span className="code-green">修正方法</span>
                        <span className="code-white">を示しているか</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> □ レスポンス時間は</span>
                        <span className="code-green">3秒以内</span>
                        <span className="code-white">か（ISO 9241-11 効率性）</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> □ </span>
                        <span className="code-green">WCAG 2.1 AA レベル</span>
                        <span className="code-white">を満たすか（アクセシビリティ）</span>
                    </div>
                </div>

                <div className="subsection-title">
                    3.4.3 クラウドテスト（Crowd Testing） <span className="badge badge-k2">K2</span>
                    <span className="badge badge-new">v4.0 新出</span>
                </div>
                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ クラウドテストの利点</div>
                        <ul>
                            <li>多様な実機・実環境（数百〜数千デバイス）でテスト</li>
                            <li>グローバルユーザー環境を再現</li>
                            <li>大量テスターによる高カバレッジ</li>
                            <li>従来の社内テストより低コスト</li>
                        </ul>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ クラウドテストの課題</div>
                        <ul>
                            <li>管理コストが高く重複バグ報告が多い</li>
                            <li>テスター間スキル差が大きい</li>
                            <li>機密情報の扱いに注意が必要</li>
                            <li>テスト品質の均一性を保つのが難しい</li>
                        </ul>
                    </div>
                </div>

                {/* 3.5 技法選択 */}
                <div className="section-title ch3">
                    3.5 最適なテスト技法の選択 <span className="badge badge-k3">K3</span>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>リスク・状況</th>
                                <th>推奨テスト技法</th>
                                <th>理由</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>データ入力の誤り処理</td>
                                <td>ドメインテスト（EP+BVA）</td>
                                <td>入力値の境界と異常値を効率的にカバー</td>
                            </tr>
                            <tr>
                                <td>ビジネスルールの実装</td>
                                <td>デシジョンテーブル</td>
                                <td>条件の組み合わせを網羅的に整理</td>
                            </tr>
                            <tr>
                                <td>画面遷移・状態管理</td>
                                <td>状態遷移テスト</td>
                                <td>遷移パスと未定義遷移を体系的にカバー</td>
                            </tr>
                            <tr>
                                <td>ユーザーワークフロー</td>
                                <td>シナリオベーステスト</td>
                                <td>E2Eでユーザー視点の欠陥を発見</td>
                            </tr>
                            <tr>
                                <td>AIシステム・オラクル問題</td>
                                <td>メタモルフィックテスト</td>
                                <td>期待値なしで関係性から検証</td>
                            </tr>
                            <tr>
                                <td>未知の欠陥・探索</td>
                                <td>テストチャーター</td>
                                <td>経験と創造性で見落としを発見</td>
                            </tr>
                            <tr>
                                <td>多パラメータの組み合わせ</td>
                                <td>組み合わせテスト（ペアワイズ）</td>
                                <td>組み合わせ爆発を効率的に削減</td>
                            </tr>
                            <tr>
                                <td>CRUD整合性</td>
                                <td>CRUDテスト</td>
                                <td>4操作と相互依存を体系的にカバー</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subsection-title">
                    3.5.2 テスト設計の自動化 <span className="badge badge-k2">K2</span>
                </div>
                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 自動テスト設計のメリット</div>
                        <ul>
                            <li>組み合わせテストの効率的な生成</li>
                            <li>大量テストケースの素早い生成</li>
                            <li>人的ミスの削減</li>
                        </ul>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 自動テスト設計のリスク</div>
                        <ul>
                            <li>過剰なテスト数生成（実行コスト増大）</li>
                            <li>ビジネス文脈・意図の欠如</li>
                            <li>メンテナンスコストの増大</li>
                        </ul>
                    </div>
                </div>

                <div className="alert cyan">
                    <strong>学習目標（LO）まとめ Ch.3</strong>
                    TA-3.1.1(K3) ドメインテスト ｜ TA-3.1.2(K3) 組み合わせテスト ｜ TA-3.2.1(K3)
                    CRUDテスト ｜ TA-3.2.2(K3) 状態遷移テスト ｜ TA-3.3.1(K3) デシジョンテーブル ｜
                    TA-3.3.2(K2) メタモルフィックテスト ｜ TA-3.4.1(K3) テストチャーター ｜
                    TA-3.5.1(K3) 技法選択
                </div>
            </section>

            <hr className="divider" />

            {/* ═══════════ CHAPTER 4 ═══════════ */}
            <section id="ch4">
                <div className="chapter-header ch4">
                    <div
                        className="chapter-num"
                        style={{borderColor: "var(--ch4-color)", color: "var(--ch4-color)"}}
                    >
                        CH.4
                    </div>
                    <div className="chapter-title-wrap">
                        <h2 className="chapter-title">品質特性のテスト</h2>
                        <div className="chapter-meta">
                            TEST QUALITY CHARACTERISTICS &nbsp;·&nbsp; 60分
                        </div>
                    </div>
                </div>

                <p>
                    ISO/IEC
                    25010（SQuaRE）に基づく品質特性のテスト。CTAL-TAがカバーするのは<strong>機能適合性・ユーザビリティ・柔軟性・互換性</strong>の4つ。
                </p>

                <div className="section-title ch4">ISO/IEC 25010 — TAのスコープ</div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>品質特性</th>
                                <th>TA担当</th>
                                <th>TTA担当</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>機能適合性（Functional Suitability）</td>
                                <td style={{color: "var(--neon-green)"}}>✅ 主担当</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>ユーザビリティ（Usability）</td>
                                <td style={{color: "var(--neon-green)"}}>✅ 主担当</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>柔軟性（Flexibility）</td>
                                <td style={{color: "var(--neon-green)"}}>✅ v4.0新出</td>
                                <td>一部関与</td>
                            </tr>
                            <tr>
                                <td>互換性（Compatibility）</td>
                                <td style={{color: "var(--neon-amber)"}}>一部担当</td>
                                <td>一部担当</td>
                            </tr>
                            <tr>
                                <td>性能効率性（Performance Efficiency）</td>
                                <td>—</td>
                                <td style={{color: "var(--neon-cyan)"}}>✅ 主担当</td>
                            </tr>
                            <tr>
                                <td>信頼性・セキュリティ・保守性</td>
                                <td>—</td>
                                <td style={{color: "var(--neon-cyan)"}}>✅ 主担当</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-title ch4">
                    4.1 機能テスト（Functional Testing） <span className="badge badge-k2">K2</span>
                </div>
                <div className="arch-layers">
                    <div className="arch-layer" style={{ "--layer-color": "var(--ch4-color)"} as React.CSSProperties}>
                        <div className="arch-layer-label">機能的完全性</div>
                        <div className="arch-layer-desc">
                            指定された全機能がカバーされているか。要求仕様の全機能が実装されている。
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-cyan)"} as React.CSSProperties}>
                        <div className="arch-layer-label">機能的正確性</div>
                        <div className="arch-layer-desc">
                            機能が仕様通りに正しく動作するか。計算結果・データ変換等が正確か。
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-green)"} as React.CSSProperties}>
                        <div className="arch-layer-label">機能的適切性</div>
                        <div className="arch-layer-desc">
                            機能がユーザーの目的・タスクに適しているか。余分な機能が目的達成を妨げていないか。
                        </div>
                    </div>
                </div>

                <div className="section-title ch4">
                    4.2 ユーザビリティテスト（Usability Testing）
                    <span className="badge badge-k2">K2</span>
                </div>
                <p>ISO 9241-11 に基づくユーザビリティの3要素。</p>
                <div className="metric-grid">
                    <div className="metric-card" style={{ "--metric-color": "var(--neon-green)"} as React.CSSProperties}>
                        <div className="metric-value" style={{fontSize: "1.2rem"}}>有効性</div>
                        <div className="metric-label">Effectiveness</div>
                        <div
                            style={{fontSize: "1rem", color: "var(--text-secondary)", marginTop: "0.5rem"}}
                        >
                            タスク完了率・エラー数で測定
                        </div>
                    </div>
                    <div className="metric-card" style={{ "--metric-color": "var(--neon-cyan)"} as React.CSSProperties}>
                        <div className="metric-value" style={{fontSize: "1.2rem"}}>効率性</div>
                        <div className="metric-label">Efficiency</div>
                        <div
                            style={{fontSize: "1rem", color: "var(--text-secondary)", marginTop: "0.5rem"}}
                        >
                            完了時間・クリック数で測定
                        </div>
                    </div>
                    <div className="metric-card" style={{ "--metric-color": "var(--neon-amber)"} as React.CSSProperties}>
                        <div className="metric-value" style={{fontSize: "1.2rem"}}>満足度</div>
                        <div className="metric-label">Satisfaction</div>
                        <div
                            style={{fontSize: "1rem", color: "var(--text-secondary)", marginTop: "0.5rem"}}
                        >
                            SUSスコア・アンケートで測定
                        </div>
                    </div>
                </div>

                <div className="subsection-title">SUS（System Usability Scale）スコアの目安</div>
                <div className="card">
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Excellent (90〜100)</span
                            ><span className="progress-val" style={{ "--bar-color": "var(--neon-green)"} as React.CSSProperties}
                                >最優秀</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "100%", "--bar-color": "var(--neon-green)"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Good (80〜89)</span
                            ><span className="progress-val" style={{ "--bar-color": "#7fc97f"} as React.CSSProperties}>良好</span>
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "89%", "--bar-color": "#7fc97f"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">OK — ≥68 目標ライン (68〜79)</span
                            ><span className="progress-val" style={{ "--bar-color": "var(--neon-amber)"} as React.CSSProperties}
                                >許容範囲</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "79%", "--bar-color": "var(--neon-amber)"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Poor (60〜67)</span
                            ><span className="progress-val" style={{ "--bar-color": "var(--neon-red)"} as React.CSSProperties}
                                >要改善</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "67%", "--bar-color": "var(--neon-red)"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Awful (&lt; 60)</span
                            ><span className="progress-val" style={{ "--bar-color": "#cc0000"} as React.CSSProperties}>深刻</span>
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "50%", "--bar-color": "#cc0000"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="section-title ch4">
                    4.3 柔軟性テスト（Flexibility Testing） <span className="badge badge-k2">K2</span>
                    <span className="badge badge-new">v4.0 新出</span>
                </div>
                <div className="trend-card">
                    <div className="trend-tag">✨ v4.0 新規追加</div>
                    <p style={{marginBottom: "1rem"}}>
                        柔軟性 = <strong>適応性</strong>（Adaptability）＋
                        <strong>インストール可能性</strong>（Installability）＋
                        <strong>スケーラビリティ</strong>（Scalability）
                    </p>
                </div>
                <div className="arch-layers">
                    <div className="arch-layer" style={{ "--layer-color": "var(--ch4-color)"} as React.CSSProperties}>
                        <div className="arch-layer-label">適応性テスト</div>
                        <div className="arch-layer-desc">
                            異なるOS・解像度・言語設定・ネットワーク帯域への適応をテスト。クロスプラットフォーム動作確認。
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-cyan)"} as React.CSSProperties}>
                        <div className="arch-layer-label">インストール可能性テスト</div>
                        <div className="arch-layer-desc">
                            インストール・アップグレード・アンインストール・ロールバックが正常動作するか確認。残留ファイルの有無もチェック。
                        </div>
                    </div>
                    <div className="arch-layer" style={{ "--layer-color": "var(--neon-green)"} as React.CSSProperties}>
                        <div className="arch-layer-label">スケーラビリティテスト</div>
                        <div className="arch-layer-desc">
                            ユーザー数・データ量増加に対してシステムが適切にスケールするか確認。
                        </div>
                    </div>
                </div>

                <div className="section-title ch4">
                    4.4 互換性テスト（Compatibility Testing） <span className="badge badge-k2">K2</span>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>種別</th>
                                <th>内容</th>
                                <th>例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>共存テスト</td>
                                <td>他ソフトウェアとの共存動作</td>
                                <td>アンチウイルスとの競合確認</td>
                            </tr>
                            <tr>
                                <td>相互運用性テスト</td>
                                <td>他システムとのデータ交換</td>
                                <td>REST API・XMLフォーマット変換</td>
                            </tr>
                            <tr>
                                <td>ブラウザ互換性テスト</td>
                                <td>複数ブラウザでの表示・動作</td>
                                <td>Chrome/Firefox/Safari/Edge + モバイル</td>
                            </tr>
                            <tr>
                                <td>後方互換性テスト</td>
                                <td>旧バージョンのデータ・形式</td>
                                <td>v2.0ファイルをv3.0で開けるか</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="alert green">
                    <strong>学習目標（LO）まとめ Ch.4</strong>
                    TA-4.1.1(K2) 機能テスト ｜ TA-4.2.1(K2) ユーザビリティテスト ｜ TA-4.3.1(K2)
                    柔軟性テスト（v4.0新出） ｜ TA-4.4.1(K2) 互換性テスト
                </div>
            </section>

            <hr className="divider" />

            {/* ═══════════ CHAPTER 5 ═══════════ */}
            <section id="ch5">
                <div className="chapter-header ch5">
                    <div
                        className="chapter-num"
                        style={{borderColor: "var(--ch5-color)", color: "var(--ch5-color)"}}
                    >
                        CH.5
                    </div>
                    <div className="chapter-title-wrap">
                        <h2 className="chapter-title">ソフトウェア欠陥防止</h2>
                        <div className="chapter-meta">
                            SOFTWARE DEFECT PREVENTION &nbsp;·&nbsp; 225分
                        </div>
                    </div>
                </div>

                <div className="section-title ch5">欠陥修正コストの原則</div>
                <p>欠陥の発見・修正コストはフェーズが進むほど指数的に増大します。</p>
                <div className="card">
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">要求定義フェーズで発見</span
                            ><span className="progress-val" style={{ "--bar-color": "var(--neon-green)"} as React.CSSProperties}
                                >コスト: 1倍</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "5%", "--bar-color": "var(--neon-green)"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">設計フェーズで発見</span
                            ><span className="progress-val" style={{ "--bar-color": "#7fc97f"} as React.CSSProperties}
                                >コスト: 5倍</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "15%", "--bar-color": "#7fc97f"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">実装フェーズで発見</span
                            ><span className="progress-val" style={{ "--bar-color": "var(--neon-amber)"} as React.CSSProperties}
                                >コスト: 10倍</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "30%", "--bar-color": "var(--neon-amber)"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">テストフェーズで発見</span
                            ><span className="progress-val" style={{ "--bar-color": "var(--neon-red)"} as React.CSSProperties}
                                >コスト: 50倍</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "65%", "--bar-color": "var(--neon-red)"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">本番環境で発見（最悪）</span
                            ><span className="progress-val" style={{ "--bar-color": "#cc0000"} as React.CSSProperties}
                                >コスト: 100倍</span
                            >
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ "--bar-width": "100%", "--bar-color": "#cc0000"} as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="section-title ch5">
                    5.1 欠陥防止プラクティス <span className="badge badge-k2">K2</span>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>プラクティス</th>
                                <th>説明</th>
                                <th>効果</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>レビュー（静的テスト）</strong></td>
                                <td>要求・設計ドキュメントの事前検査</td>
                                <td>欠陥の最早期発見</td>
                            </tr>
                            <tr>
                                <td>シフトレフトテスト</td>
                                <td>テストを開発の早期フェーズで実施</td>
                                <td>手戻りコスト削減</td>
                            </tr>
                            <tr>
                                <td>TDD（テスト駆動開発）</td>
                                <td>テストを先に書いてから実装</td>
                                <td>実装品質向上</td>
                            </tr>
                            <tr>
                                <td>BDD（振る舞い駆動開発）</td>
                                <td>業務ルールをGherkinで記述</td>
                                <td>要求の誤解防止</td>
                            </tr>
                            <tr>
                                <td>ペアプログラミング</td>
                                <td>2人で実装をレビューしながら進める</td>
                                <td>バグ混入防止</td>
                            </tr>
                            <tr>
                                <td>コードレビュー</td>
                                <td>実装コードのピアレビュー</td>
                                <td>実装欠陥削減</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-title ch5">
                    5.2 フェーズ封じ込めの支援（Phase Containment）
                    <span className="badge badge-k2">K2</span>
                </div>
                <p>
                    <strong>定義：</strong
                    >各フェーズで生まれた欠陥をそのフェーズ内で検出・修正すること。後のフェーズへの欠陥の「漏れ」を防ぐ。
                </p>

                <div className="subsection-title">
                    要求レビューにおけるテストアナリストのチェックリスト
                </div>
                <div className="code-block" data-lang="REVIEW CHECKLIST">
                    <div className="code-line"><span className="code-cyan">要求レビューチェックリスト（テストアナリスト視点）:</span></div>
                    <div className="code-line"><span className="code-white"> □ 要求は明確で曖昧でないか？</span></div>
                    <div className="code-line"><span className="code-red">   ❌「システムは高速に動作すること」</span></div>
                    <div className="code-line"><span className="code-green">   ✅「ページロード時間は 3秒以内であること」</span></div>
                    <div className="code-line"><span className="code-white"> □ テスト可能な形で記述されているか？</span></div>
                    <div className="code-line"><span className="code-red">   ❌「ユーザーフレンドリーであること」</span></div>
                    <div className="code-line"><span className="code-green">   ✅「SUSスコアが 68 以上であること」</span></div>
                    <div className="code-line"><span className="code-white"> □ 定量的な基準があるか？</span></div>
                    <div className="code-line"><span className="code-white"> □ 矛盾する要求がないか？</span></div>
                    <div className="code-line"><span className="code-white"> □ 境界条件が明示されているか？</span></div>
                    <div className="code-line"><span className="code-white"> □ 依存関係が文書化されているか？</span></div>
                </div>

                <div className="subsection-title">
                    レビュー技法の比較 <span className="badge badge-k3">K3</span>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>レビュー技法</th>
                                <th>形式度</th>
                                <th>コスト</th>
                                <th>効果</th>
                                <th>TAの役割</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>インスペクション</strong></td>
                                <td>最高</td>
                                <td>高</td>
                                <td style={{color: "var(--neon-green)"}}>非常に高い</td>
                                <td>レビュアー（欠陥を記録・分類）</td>
                            </tr>
                            <tr>
                                <td>構造化ウォークスルー</td>
                                <td>中〜高</td>
                                <td>中</td>
                                <td style={{color: "var(--neon-green)"}}>高い</td>
                                <td>作者・レビュアー</td>
                            </tr>
                            <tr>
                                <td>ウォークスルー</td>
                                <td>低〜中</td>
                                <td>低</td>
                                <td style={{color: "var(--neon-amber)"}}>中程度</td>
                                <td>参加者</td>
                            </tr>
                            <tr>
                                <td>アドホックレビュー</td>
                                <td>なし</td>
                                <td>最低</td>
                                <td style={{color: "var(--neon-red)"}}>低め</td>
                                <td>依頼時のみ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-title ch5">5.3 欠陥再発防止</div>

                <div className="subsection-title">
                    ODC（直交欠陥分類） <span className="badge badge-k3">K3</span>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>欠陥タイプ</th>
                                <th>説明</th>
                                <th>示唆する根本原因</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>機能欠陥</td>
                                <td>仕様と異なる動作</td>
                                <td>要求定義の誤りまたは誤解</td>
                            </tr>
                            <tr>
                                <td>論理欠陥</td>
                                <td>条件分岐・計算の誤り</td>
                                <td>設計・実装の誤り</td>
                            </tr>
                            <tr>
                                <td>インターフェース欠陥</td>
                                <td>I/O・APIの処理誤り</td>
                                <td>設計段階での検討不足</td>
                            </tr>
                            <tr>
                                <td>タイミング欠陥</td>
                                <td>並行処理・同期の問題</td>
                                <td>アーキテクチャ設計の誤り</td>
                            </tr>
                            <tr>
                                <td>データ欠陥</td>
                                <td>データ管理・変換の誤り</td>
                                <td>データ設計の問題</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subsection-title">5-Why分析（根本原因分析）</div>
                <div className="code-block" data-lang="ROOT CAUSE ANALYSIS">
                    <div className="code-line">
                        <span className="code-red">問題: ユーザーログインが時々失敗する</span>
                    </div>
                    <div className="code-line" style={{marginTop: "0.4rem"}}>
                        <span className="code-amber">Why1: セッションタイムアウトが早すぎる</span>
                    </div>
                    <div className="code-line"><span className="code-white"> ↓</span></div>
                    <div className="code-line">
                        <span className="code-amber">Why2: タイムアウト値が短く設定されている（60秒）</span>
                    </div>
                    <div className="code-line"><span className="code-white"> ↓</span></div>
                    <div className="code-line">
                        <span className="code-amber">Why3: デフォルト値が変更されずにそのまま使われていた</span>
                    </div>
                    <div className="code-line"><span className="code-white"> ↓</span></div>
                    <div className="code-line">
                        <span className="code-amber">Why4: 設定値を確認するプロセスがなかった</span>
                    </div>
                    <div className="code-line"><span className="code-white"> ↓</span></div>
                    <div className="code-line">
                        <span className="code-amber">Why5: リリース前の設定確認チェックリストが存在しなかった</span>
                    </div>
                    <div className="code-line"><span className="code-white"> ↓</span></div>
                    <div className="code-line" style={{marginTop: "0.3rem"}}>
                        <span className="code-green">根本原因: リリースプロセスに設定確認チェックリストがない</span>
                    </div>
                    <div className="code-line">
                        <span className="code-green">対策: 設定確認チェックリストをリリースプロセスに組み込む → 再発防止！</span>
                    </div>
                </div>

                <div className="alert green">
                    <strong>学習目標（LO）まとめ Ch.5</strong>
                    TA-5.1.1(K2) 欠陥防止プラクティス ｜ TA-5.2.1(K2) モデル活用による欠陥防止 ｜
                    TA-5.2.2(K3) レビュー技法の適用 ｜ TA-5.3.1(K3) テスト結果分析 ｜ TA-5.3.2(K3)
                    欠陥分類で根本原因分析
                </div>
            </section>

            <hr className="divider" />

            {/* ═══════════ EXAM ═══════════ */}
            <section id="exam">
                <div className="chapter-header" style={{ "--accent-color": "var(--neon-amber)"} as React.CSSProperties}>
                    <div
                        className="chapter-num"
                        style={{borderColor: "var(--neon-amber)", color: "var(--neon-amber)"}}
                    >
                        EX
                    </div>
                    <div className="chapter-title-wrap">
                        <h2 className="chapter-title">試験対策・サンプル問題</h2>
                        <div className="chapter-meta">EXAM PREPARATION &nbsp;·&nbsp; 5問収録</div>
                    </div>
                </div>

                <div className="section-title" style={{borderLeftColor: "var(--neon-amber)"}}>
                    試験配点（推定）
                </div>
                <div className="exam-grid">
                    <div className="exam-card" style={{ "--exam-color": "var(--ch1-color)"} as React.CSSProperties}>
                        <div className="exam-chapter">Chapter 1</div>
                        <div className="exam-name">テストプロセス</div>
                        <div className="stars">★★☆☆☆</div>
                        <div className="exam-stats">
                            <div className="exam-stat">
                                <div className="exam-stat-num">~7</div>
                                <div className="exam-stat-lbl">問題数</div>
                            </div>
                            <div className="exam-stat">
                                <div className="exam-stat-num">~12pt</div>
                                <div className="exam-stat-lbl">配点</div>
                            </div>
                            <div className="exam-stat">
                                <div className="exam-stat-num">15%</div>
                                <div className="exam-stat-lbl">割合</div>
                            </div>
                        </div>
                    </div>
                    <div className="exam-card" style={{ "--exam-color": "var(--ch2-color)"} as React.CSSProperties}>
                        <div className="exam-chapter">Chapter 2</div>
                        <div className="exam-name">リスクベーステスト</div>
                        <div className="stars">★☆☆☆☆</div>
                        <div className="exam-stats">
                            <div className="exam-stat">
                                <div className="exam-stat-num">~4</div>
                                <div className="exam-stat-lbl">問題数</div>
                            </div>
                            <div className="exam-stat">
                                <div className="exam-stat-num">~7pt</div>
                                <div className="exam-stat-lbl">配点</div>
                            </div>
                            <div className="exam-stat">
                                <div className="exam-stat-num">9%</div>
                                <div className="exam-stat-lbl">割合</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="exam-card"
                        style={{ "--exam-color": "var(--ch3-color)", borderColor: "rgba(0, 212, 255, 0.4)"} as React.CSSProperties}
                    >
                        <div className="exam-chapter">Chapter 3 ⭐</div>
                        <div className="exam-name">テスト分析・設計</div>
                        <div className="stars">★★★★★</div>
                        <div className="exam-stats">
                            <div className="exam-stat">
                                <div className="exam-stat-num">~22</div>
                                <div className="exam-stat-lbl">問題数</div>
                            </div>
                            <div className="exam-stat">
                                <div className="exam-stat-num">~39pt</div>
                                <div className="exam-stat-lbl">配点</div>
                            </div>
                            <div className="exam-stat">
                                <div className="exam-stat-num">50%</div>
                                <div className="exam-stat-lbl">割合</div>
                            </div>
                        </div>
                    </div>
                    <div className="exam-card" style={{ "--exam-color": "var(--ch4-color)"} as React.CSSProperties}>
                        <div className="exam-chapter">Chapter 4</div>
                        <div className="exam-name">品質特性</div>
                        <div className="stars">★☆☆☆☆</div>
                        <div className="exam-stats">
                            <div className="exam-stat">
                                <div className="exam-stat-num">~3</div>
                                <div className="exam-stat-lbl">問題数</div>
                            </div>
                            <div className="exam-stat">
                                <div className="exam-stat-num">~5pt</div>
                                <div className="exam-stat-lbl">配点</div>
                            </div>
                            <div className="exam-stat">
                                <div className="exam-stat-num">6%</div>
                                <div className="exam-stat-lbl">割合</div>
                            </div>
                        </div>
                    </div>
                    <div className="exam-card" style={{ "--exam-color": "var(--ch5-color)"} as React.CSSProperties}>
                        <div className="exam-chapter">Chapter 5</div>
                        <div className="exam-name">欠陥防止</div>
                        <div className="stars">★★★☆☆</div>
                        <div className="exam-stats">
                            <div className="exam-stat">
                                <div className="exam-stat-num">~9</div>
                                <div className="exam-stat-lbl">問題数</div>
                            </div>
                            <div className="exam-stat">
                                <div className="exam-stat-num">~15pt</div>
                                <div className="exam-stat-lbl">配点</div>
                            </div>
                            <div className="exam-stat">
                                <div className="exam-stat-num">19%</div>
                                <div className="exam-stat-lbl">割合</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title" style={{borderLeftColor: "var(--neon-amber)"}}>
                    サンプル問題と解説（5問）
                </div>

                <div className="card" style={{ "--accent-color": "var(--neon-cyan)"} as React.CSSProperties}>
                    <div
                        style={{display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.8rem"}}
                    >
                        <span className="badge badge-k3">K3</span>
                        <span
                            style={{fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--text-muted)"}}
                            >Ch.3.1 境界値分析</span
                        >
                    </div>
                    <p style={{color: "var(--text-primary)", fontWeight: "600", marginBottom: "0.6rem"}}>
                        問1:
                        <code>10 ≤ x ≤ 100</code>
                        の範囲が有効。2値BVAを適用した正しいテスト値セットはどれか？
                    </p>
                    <div
                        style={{display: "flex", flexDirection: "column", gap: "0.4rem", margin: "0.8rem 0"}}
                    >
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "rgba(0, 255, 135, 0.06)", borderRadius: "4px", fontSize: "1rem", border: "1px solid rgba(0, 255, 135, 0.2)"}}
                        >
                            A) 9, 10, 100, 101 ← ✅ 正解
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            B) 10, 100
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            C) 9, 11, 99, 101
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            D) 0, 10, 50, 100, 200
                        </div>
                    </div>
                    <div className="alert green">
                        <strong>解説</strong>
                        2値BVAは各境界にON点（境界値）とOFF点（境界外最近傍値）を使う。下限: ON=10,
                        OFF=9。上限: ON=100, OFF=101。∴ &#123;9,10,100,101&#125;。B はEPの代表値のみ。
                    </div>
                </div>

                <div className="card" style={{ "--accent-color": "var(--neon-amber)"} as React.CSSProperties}>
                    <div
                        style={{display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.8rem"}}
                    >
                        <span className="badge badge-k3">K3</span>
                        <span
                            style={{fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--text-muted)"}}
                            >Ch.3.3 デシジョンテーブル</span
                        >
                    </div>
                    <p style={{color: "var(--text-primary)", fontWeight: "600", marginBottom: "0.6rem"}}>
                        問2: 4つの条件（各T/F）を持つシステムのデシジョンテーブルの最大ルール数は？
                    </p>
                    <div
                        style={{display: "flex", flexDirection: "column", gap: "0.4rem", margin: "0.8rem 0"}}
                    >
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            A) 4 &nbsp;&nbsp; B) 8 &nbsp;&nbsp; C) 12
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "rgba(0, 255, 135, 0.06)", borderRadius: "4px", fontSize: "1rem", border: "1px solid rgba(0, 255, 135, 0.2)"}}
                        >
                            D) 16 ← ✅ 正解
                        </div>
                    </div>
                    <div className="alert green">
                        <strong>解説</strong> n個の条件（各T/F）の最大ルール数 = 2ⁿ = 2⁴ =
                        <strong>16</strong>。頻出公式。
                    </div>
                </div>

                <div className="card" style={{ "--accent-color": "var(--neon-purple)"} as React.CSSProperties}>
                    <div
                        style={{display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.8rem"}}
                    >
                        <span className="badge badge-k2">K2</span
                        ><span className="badge badge-new">v4.0 新出</span>
                        <span
                            style={{fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--text-muted)"}}
                            >Ch.3.3 メタモルフィックテスト</span
                        >
                    </div>
                    <p style={{color: "var(--text-primary)", fontWeight: "600", marginBottom: "0.6rem"}}>
                        問3: メタモルフィックテストが特に有効なケースはどれか？
                    </p>
                    <div
                        style={{display: "flex", flexDirection: "column", gap: "0.4rem", margin: "0.8rem 0"}}
                    >
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            A) テストオラクルが明確に定義されているシステム
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "rgba(0, 255, 135, 0.06)", borderRadius: "4px", fontSize: "1rem", border: "1px solid rgba(0, 255, 135, 0.2)"}}
                        >
                            B) 期待する出力を事前に特定することが難しいシステム ← ✅ 正解
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            C) ブラックボックステストが不可能なシステム
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            D) ホワイトボックス技法のみが適用可能なシステム
                        </div>
                    </div>
                    <div className="alert green">
                        <strong>解説</strong>
                        メタモルフィックテストは「テストオラクル問題」を解決するための技法。AI/ML・科学計算等、正しい期待値を事前決定が困難なシステムで特に有効。
                    </div>
                </div>

                <div className="card" style={{ "--accent-color": "var(--ch2-color)"} as React.CSSProperties}>
                    <div
                        style={{display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.8rem"}}
                    >
                        <span className="badge badge-k2">K2</span>
                        <span
                            style={{fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--text-muted)"}}
                            >Ch.2 リスクベーステスト</span
                        >
                    </div>
                    <p style={{color: "var(--text-primary)", fontWeight: "600", marginBottom: "0.6rem"}}>
                        問4: リスクベーステストにおけるテストアナリストの主な責任はどれか？
                    </p>
                    <div
                        style={{display: "flex", flexDirection: "column", gap: "0.4rem", margin: "0.8rem 0"}}
                    >
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            A) プロジェクトリスクを管理し、スケジュールを調整する
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "rgba(0, 255, 135, 0.06)", borderRadius: "4px", fontSize: "1rem", border: "1px solid rgba(0, 255, 135, 0.2)"}}
                        >
                            B) 製品リスクを識別・評価し、テストの優先順位付けに貢献する ← ✅ 正解
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            C) テストオートメーションの戦略を策定する
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            D) テスト環境の性能テストを実施する
                        </div>
                    </div>
                    <div className="alert green">
                        <strong>解説</strong>
                        TAは<strong>製品リスク</strong>（ソフトウェアの欠陥による品質リスク）を担当。プロジェクトリスク管理はテストマネージャーの責任。
                    </div>
                </div>

                <div className="card" style={{ "--accent-color": "var(--ch5-color)"} as React.CSSProperties}>
                    <div
                        style={{display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.8rem"}}
                    >
                        <span className="badge badge-k3">K3</span>
                        <span
                            style={{fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--text-muted)"}}
                            >Ch.5 欠陥防止</span
                        >
                    </div>
                    <p style={{color: "var(--text-primary)", fontWeight: "600", marginBottom: "0.6rem"}}>
                        問5:
                        要求仕様書のレビューでテストアナリストが発見すべき問題として最も適切なものはどれか？
                    </p>
                    <div
                        style={{display: "flex", flexDirection: "column", gap: "0.4rem", margin: "0.8rem 0"}}
                    >
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            A) コードの実装ミス
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "rgba(0, 255, 135, 0.06)", borderRadius: "4px", fontSize: "1rem", border: "1px solid rgba(0, 255, 135, 0.2)"}}
                        >
                            B) テスト可能な形式で記述されていない要求 ← ✅ 正解
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            C) パフォーマンス最適化の機会
                        </div>
                        <div
                            style={{padding: "0.5rem 0.8rem", background: "var(--bg-surface)", borderRadius: "4px", fontSize: "1rem", border: "1px solid var(--color-border)"}}
                        >
                            D) CI/CDパイプラインの設定ミス
                        </div>
                    </div>
                    <div className="alert green">
                        <strong>解説</strong>
                        テストアナリストは要求レビューで「テスト可能性（Testability）」を確認する。「高速に動作すること」等の曖昧な要求はテストケースを作成できず問題となる。
                    </div>
                </div>

                <div className="section-title" style={{borderLeftColor: "var(--neon-amber)"}}>
                    試験直前チェックリスト
                </div>
                <div className="code-block" data-lang="FINAL CHECKLIST">
                    <div className="code-line"><span className="code-cyan">Ch.1:</span></div>
                    <div className="code-line"><span className="code-white"> □ テスト分析/設計/実装/実行の違い</span></div>
                    <div className="code-line"><span className="code-white"> □ High/Low-Level TC</span></div>
                    <div className="code-line"><span className="code-white"> □ テストオラクルの種類</span></div>
                    <div className="code-line"><span className="code-cyan">Ch.2:</span></div>
                    <div className="code-line"><span className="code-white"> □ 製品リスク vs プロジェクトリスク</span></div>
                    <div className="code-line"><span className="code-white"> □ リスク=確率×影響度</span></div>
                    <div className="code-line"><span className="code-white"> □ 優先順位付け</span></div>
                    <div className="code-line"><span className="code-cyan">Ch.3:</span></div>
                    <div className="code-line"><span className="code-white"> □ EP/BVA(ON/OFF/IN/OUT点)</span></div>
                    <div className="code-line"><span className="code-white"> □ 2値/3値BVA</span></div>
                    <div className="code-line"><span className="code-white"> □ ペアワイズ</span></div>
                    <div className="code-line"><span className="code-white"> □ 2ⁿルール</span></div>
                    <div className="code-line"><span className="code-white"> □ 状態遷移(0/1/Nスイッチ)</span></div>
                    <div className="code-line"><span className="code-white"> □ メタモルフィック(オラクル問題)</span></div>
                    <div className="code-line"><span className="code-white"> □ CRUD</span></div>
                    <div className="code-line"><span className="code-white"> □ テストチャーター構成</span></div>
                    <div className="code-line"><span className="code-white"> □ リスクと技法の対応</span></div>
                    <div className="code-line"><span className="code-cyan">Ch.4:</span></div>
                    <div className="code-line"><span className="code-white"> □ ISO 25010 主要特性5つ以上</span></div>
                    <div className="code-line"><span className="code-white"> □ SUS≥68</span></div>
                    <div className="code-line"><span className="code-white"> □ 柔軟性テスト3要素(v4.0新出)</span></div>
                    <div className="code-line"><span className="code-cyan">Ch.5:</span></div>
                    <div className="code-line"><span className="code-white"> □ 欠陥修正コスト増加の法則</span></div>
                    <div className="code-line"><span className="code-white"> □ TDD/BDD/レビュー</span></div>
                    <div className="code-line"><span className="code-white"> □ 5-Why分析</span></div>
                    <div className="code-line"><span className="code-white"> □ ODC分類</span></div>
                </div>
            </section>

            <hr className="divider" />

            {/* ═══════════ v3.1→v4.0 変更点 ═══════════ */}
            <section id="changes">
                <div className="chapter-header" style={{ "--accent-color": "var(--neon-purple)"} as React.CSSProperties}>
                    <div
                        className="chapter-num"
                        style={{borderColor: "var(--neon-purple)", color: "var(--neon-purple)"}}
                    >
                        Δ
                    </div>
                    <div className="chapter-title-wrap">
                        <h2 className="chapter-title">v3.1 → v4.0 主な変更点</h2>
                        <div className="chapter-meta">WHAT'S NEW IN v4.0</div>
                    </div>
                </div>
                <div className="trend-card">
                    <div className="trend-tag">✨ 新規追加</div>
                    <ul>
                        <li>
                            <strong>メタモルフィックテスト</strong>（3.3.2）—
                            AI/MLシステムのオラクル問題を解決する技法
                        </li>
                        <li><strong>CRUDテスト</strong>（3.2.1）— データ操作の整合性テスト</li>
                        <li>
                            <strong>クラウドテスト</strong>（3.4.3）—
                            不特定多数テスターによる実機テスト
                        </li>
                        <li>
                            <strong>柔軟性テスト</strong>（4.3）—
                            適応性・インストール可能性・スケーラビリティ
                        </li>
                        <li><strong>ON点/OFF点/IN点/OUT点</strong>の詳細定義</li>
                    </ul>
                </div>
                <div className="card" style={{marginTop: "1rem"}}>
                    <div
                        style={{fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--neon-amber)", marginBottom: "0.7rem"}}
                    >
                        🔄 大幅改訂
                    </div>
                    <ul>
                        <li>
                            テスト技法の再分類：v3.1「仕様ベース/経験ベース」→
                            v4.0「データベース/振る舞いベース/ルールベース/経験ベース」
                        </li>
                        <li>章構成の全面見直し（ゼロから書き直し）</li>
                        <li>欠陥防止の独立章化（Chapter 5）</li>
                    </ul>
                </div>
                <div className="alert amber">
                    <strong>注意</strong>
                    v3.1英語版サンセット:
                    2026年5月16日。これから受験するならv4.0一択。最新サンプル問題は
                    ISTQB-CTAL-TA-Sample-Exam-Questions-v4.1.pdf を使用すること。
                </div>
            </section>

            <hr className="divider" />

            {/* ═══════════ REFS ═══════════ */}
            <section id="refs">
                <div className="chapter-header" style={{ "--accent-color": "var(--neon-purple)"} as React.CSSProperties}>
                    <div
                        className="chapter-num"
                        style={{borderColor: "var(--neon-purple)", color: "var(--neon-purple)"}}
                    >
                        REF
                    </div>
                    <div className="chapter-title-wrap">
                        <h2 className="chapter-title">参考文献・参照URL一覧</h2>
                        <div className="chapter-meta">
                            REFERENCES &amp; RESOURCES &nbsp;·&nbsp; カテゴリ別
                        </div>
                    </div>
                </div>

                <div className="subsection-title">🏛️ 公式 ISTQB® リソース</div>
                <div className="ref-grid">
                    <a
                        href="https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">📋</span>
                        <div>
                            <div className="ref-title">CTAL-TA v4.0 認定ページ（一次情報源）</div>
                            <div className="ref-cat">公式 – 認定情報</div>
                            <div className="ref-url">
                                istqb.org/certifications/certified-tester-advanced-level-test-analyst/
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&amp;download_id=5745"
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">📄</span>
                        <div>
                            <div className="ref-title">CTAL-TA v4.0 シラバス PDF</div>
                            <div className="ref-cat">公式 – シラバス</div>
                            <div className="ref-url">
                                istqb.org/?sdm_process_download=1&amp;download_id=5745
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&amp;download_id=5749"
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">❓</span>
                        <div>
                            <div className="ref-title">サンプル試験問題 v4.1</div>
                            <div className="ref-cat">公式 – 練習問題</div>
                            <div className="ref-url">
                                istqb.org/?sdm_process_download=1&amp;download_id=5749
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&amp;download_id=5759"
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">✅</span>
                        <div>
                            <div className="ref-title">サンプル試験解答 v4.1</div>
                            <div className="ref-cat">公式 – 解答</div>
                            <div className="ref-url">
                                istqb.org/?sdm_process_download=1&amp;download_id=5759
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&amp;download_id=5762"
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">📝</span>
                        <div>
                            <div className="ref-title">v4.0 リリースノート</div>
                            <div className="ref-cat">公式 – 変更点</div>
                            <div className="ref-url">
                                istqb.org/?sdm_process_download=1&amp;download_id=5762
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://glossary.istqb.org/en_US/search?term="
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">📖</span>
                        <div>
                            <div className="ref-title">ISTQB® 公式グロッサリー</div>
                            <div className="ref-cat">公式 – 用語辞典</div>
                            <div className="ref-url">glossary.istqb.org/en_US/search</div>
                        </div>
                    </a>
                    <a
                        href="https://istqb.org/exam-providers/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">🏢</span>
                        <div>
                            <div className="ref-title">試験プロバイダー検索</div>
                            <div className="ref-cat">公式 – 試験申込</div>
                            <div className="ref-url">istqb.org/exam-providers/</div>
                        </div>
                    </a>
                    <a
                        href="https://istqb.org/training-providers/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">🎓</span>
                        <div>
                            <div className="ref-title">研修プロバイダー検索</div>
                            <div className="ref-cat">公式 – 研修申込</div>
                            <div className="ref-url">istqb.org/training-providers/</div>
                        </div>
                    </a>
                </div>

                <div className="subsection-title">📚 関連資格リンク</div>
                <div className="ref-grid">
                    <a
                        href="https://istqb.org/certifications/certified-tester-foundation-level/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">🏗️</span>
                        <div>
                            <div className="ref-title">CTFL v4.0（前提条件資格）</div>
                            <div className="ref-cat">関連資格 – Foundation Level</div>
                            <div className="ref-url">
                                istqb.org/certifications/certified-tester-foundation-level/
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://istqb.org/certifications/certified-tester-advanced-level-technical-test-analyst-ctal-tta/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">🔧</span>
                        <div>
                            <div className="ref-title">CTAL-TTA（Technical Test Analyst）</div>
                            <div className="ref-cat">関連資格 – Advanced Level</div>
                            <div className="ref-url">istqb.org/.../ctal-tta/</div>
                        </div>
                    </a>
                    <a
                        href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">🤖</span>
                        <div>
                            <div className="ref-title">CTAL-TAE v2.0（Test Automation Engineer）</div>
                            <div className="ref-cat">関連資格 – Advanced Level</div>
                            <div className="ref-url">istqb.org/.../ctal-tae-v2-0/</div>
                        </div>
                    </a>
                </div>

                <div className="subsection-title">📋 ISO標準</div>
                <div className="ref-grid">
                    <a
                        href="https://www.iso.org/standard/78176.html"
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">📊</span>
                        <div>
                            <div className="ref-title">ISO/IEC 25010:2023 – SQuaRE 品質モデル</div>
                            <div className="ref-cat">ISO標準 – ソフトウェア品質特性</div>
                            <div className="ref-url">iso.org/standard/78176.html</div>
                        </div>
                    </a>
                    <a
                        href="https://www.iso.org/standard/63500.html"
                        className="ref-card"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-icon">👤</span>
                        <div>
                            <div className="ref-title">ISO 9241-11 – ユーザビリティの定義・測定</div>
                            <div className="ref-cat">ISO標準 – ユーザビリティ</div>
                            <div className="ref-url">iso.org/standard/63500.html</div>
                        </div>
                    </a>
                </div>
            </section>

            <hr className="divider" />

            <footer className="footer">
                <div style={{marginBottom: "0.5rem", fontSize: "1rem", color: "var(--neon-cyan)"}}>
                    ISTQB® CTAL-TA v4.0 完全学習ガイド
                </div>
                <div>
                    基準: ISTQB® CTAL-TA Syllabus v4.0 (GA 2025/05/02) &nbsp;|&nbsp; 一次情報源:
                    <a
                        href="https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/"
                        target="_blank"
                        rel="noopener"
                        >istqb.org</a
                    >
                </div>
                <div style={{marginTop: "0.4rem"}}>
                    ⚠️
                    本ガイドはISTQB®が公認したトレーニング資料ではありません。公式シラバス・サンプル問題と合わせて使用してください。
                </div>
                <div style={{marginTop: "0.8rem", color: "var(--text-muted)", fontSize: "1rem"}}>
                    © 2025 Study Guide — Exam specs sourced from official ISTQB® materials
                </div>
            </footer>
        </div>
    );
}
