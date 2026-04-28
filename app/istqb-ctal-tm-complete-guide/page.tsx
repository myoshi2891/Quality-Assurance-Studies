import './istqb-ctal-tm-complete-guide.css';
import NavBar from './NavBar';

export default function IstqbCtalTmCompleteGuide() {
    return (
    <main className="istqb-ctal-tm-page">
      <NavBar />
            

        {/* ============================================================
     HERO
     ============================================================ */}
        <section className="hero">
            <div className="hero-glow"></div>
            <div className="container">
                <div className="hero-badge">ISTQB® Advanced Level · 2025最新版</div>
                <h1 className="hero-title">CTAL-TM v3.0<br />完全学習ガイド</h1>
                <p className="hero-subtitle">Certified Tester Advanced Level – Test Management</p>
                <p className="hero-desc">
                    テスト管理の専門家を認定するISTQB国際資格。2024年5月リリースの最新v3.0に完全対応。
                    テスト活動の管理・製品管理・チーム管理の3章構成で、初学者からプロまで体系的に学べます。
                </p>
                <div className="hero-meta">
                    <div className="meta-card">
                        <span className="meta-val">50問</span>
                        <span className="meta-key">問題数</span>
                    </div>
                    <div className="meta-card">
                        <span className="meta-val">58/88</span>
                        <span className="meta-key">合格点</span>
                    </div>
                    <div className="meta-card">
                        <span className="meta-val">120分</span>
                        <span className="meta-key">試験時間</span>
                    </div>
                    <div className="meta-card">
                        <span className="meta-val">65%</span>
                        <span className="meta-key">合格ライン</span>
                    </div>
                    <div className="meta-card">
                        <span className="meta-val">K2~K4</span>
                        <span className="meta-key">認知レベル</span>
                    </div>
                    <div className="meta-card">
                        <span className="meta-val">CTFL</span>
                        <span className="meta-key">前提資格</span>
                    </div>
                </div>
            </div>
        </section>

        {/* ============================================================
     TABLE OF CONTENTS
     ============================================================ */}
        <div className="section" id="toc">
            <div className="container">
                <h2>📚 目次</h2>
                <div className="toc-grid">
                    <a href="#chapter-0" className="toc-card">
                        <span className="toc-num">Chapter 0</span>
                        <span className="toc-title">試験概要と資格ロードマップ</span>
                        <span className="toc-time">試験メタ情報・BO一覧</span>
                    </a>
                    <a href="#chapter-1" className="toc-card">
                        <span className="toc-num">Chapter 1</span>
                        <span className="toc-title">テスト活動の管理</span>
                        <span className="toc-time">750分 ｜ 配点 ~52%</span>
                    </a>
                    <a href="#section-1-1" className="toc-card">
                        <span className="toc-num">Section 1.1</span>
                        <span className="toc-title">テストプロセス</span>
                        <span className="toc-time">計画・監視・完了</span>
                    </a>
                    <a href="#section-1-2" className="toc-card">
                        <span className="toc-num">Section 1.2</span>
                        <span className="toc-title">テストのコンテキスト</span>
                        <span className="toc-time">ステークホルダー・SDLC</span>
                    </a>
                    <a href="#section-1-3" className="toc-card">
                        <span className="toc-num">Section 1.3</span>
                        <span className="toc-title">リスクベーステスト</span>
                        <span className="toc-time">識別・評価・緩和</span>
                    </a>
                    <a href="#section-1-4" className="toc-card">
                        <span className="toc-num">Section 1.4</span>
                        <span className="toc-title">プロジェクトテスト戦略</span>
                        <span className="toc-time">7種アプローチ</span>
                    </a>
                    <a href="#section-1-5" className="toc-card">
                        <span className="toc-num">Section 1.5</span>
                        <span className="toc-title">テストプロセス改善</span>
                        <span className="toc-time">IDEALモデル・TMMi</span>
                    </a>
                    <a href="#section-1-6" className="toc-card">
                        <span className="toc-num">Section 1.6</span>
                        <span className="toc-title">テストツール</span>
                        <span className="toc-time">選定・ROI・ライフサイクル</span>
                    </a>
                    <a href="#chapter-2" className="toc-card">
                        <span className="toc-num">Chapter 2</span>
                        <span className="toc-title">製品の管理</span>
                        <span className="toc-time">390分 ｜ 配点 ~30%</span>
                    </a>
                    <a href="#section-2-1" className="toc-card">
                        <span className="toc-num">Section 2.1</span>
                        <span className="toc-title">テストメトリクス</span>
                        <span className="toc-time">KPI・報告・バーンダウン</span>
                    </a>
                    <a href="#section-2-2" className="toc-card">
                        <span className="toc-num">Section 2.2</span>
                        <span className="toc-title">テスト見積もり</span>
                        <span className="toc-time">デルファイ・PERT・類推法</span>
                    </a>
                    <a href="#section-2-3" className="toc-card">
                        <span className="toc-num">Section 2.3</span>
                        <span className="toc-title">欠陥管理</span>
                        <span className="toc-time">ライフサイクル・報告</span>
                    </a>
                    <a href="#chapter-3" className="toc-card">
                        <span className="toc-num">Chapter 3</span>
                        <span className="toc-title">チームの管理</span>
                        <span className="toc-time">225分 ｜ 配点 ~18%</span>
                    </a>
                    <a href="#exam-tips" className="toc-card">
                        <span className="toc-num">付録</span>
                        <span className="toc-title">試験対策・サンプル問題</span>
                        <span className="toc-time">チェックリスト・解説</span>
                    </a>
                    <a href="#references" className="toc-card">
                        <span className="toc-num">参照</span>
                        <span className="toc-title">参考URL一覧</span>
                        <span className="toc-time">公式・学習・ツール</span>
                    </a>
                </div>

                {/* Chapter distribution bars */}
                <div className="trend-card">
                    <h3>📊 チャプター別学習時間配分</h3>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">Chapter 1: テスト活動の管理</span>
                            <span className="progress-val">750分 (54.9%)</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{width: "54.9%", background: "linear-gradient(\n                                        90deg,\n                                        var(--neon-cyan),\n                                        var(--neon-green)\n                                    )"}}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">Chapter 2: 製品の管理</span>
                            <span className="progress-val">390分 (28.6%)</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{width: "28.6%", background: "linear-gradient(90deg, var(--neon-amber), #ff6b35)"}}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">Chapter 3: チームの管理</span>
                            <span className="progress-val">225分 (16.5%)</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{width: "16.5%", background: "linear-gradient(90deg, var(--neon-purple), #ec4899)"}}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================================
     CHAPTER 0: OVERVIEW
     ============================================================ */}
        <section className="section" id="chapter-0">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num green">Ch.0</span>
                    <div>
                        <h2>試験概要と資格ロードマップ</h2>
                        <p style={{margin: "0", color: "var(--text-muted)", fontSize: "0.9rem"}}>
                            CTAL-TM v3.0の全体像・試験仕様・11のビジネスアウトカムを理解する
                        </p>
                    </div>
                </div>

                <h3>0.1 ISTQB® 資格ロードマップにおける位置づけ</h3>
                <div className="arch-layers">
                    <div className="arch-layer" style={{borderLeftColor: "#a855f7"}}>
                        <div className="arch-layer-title" style={{color: "#a855f7"}}>Expert Level</div>
                        <div className="arch-layer-desc">
                            Test Management Expert / Improving Test Process Expert
                        </div>
                    </div>
                    <div className="arch-layer" style={{borderLeftColor: "var(--neon-cyan)"}}>
                        <div className="arch-layer-title" style={{color: "var(--neon-cyan)"}}>
                            Advanced Level Core ← ★ あなたはここ！
                        </div>
                        <div className="arch-layer-desc">
                            CTAL-TM v3.0 ／ CTAL-TA v4.0 ／ CTAL-TTA ／ CTAL-TAE v2.0
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-layer-title" style={{color: "var(--neon-green)"}}>
                            Foundation Level（前提条件：必須）
                        </div>
                        <div className="arch-layer-desc">CTFL v4.0 ／ 推奨実務経験：6ヶ月以上</div>
                    </div>
                </div>

                <h3 style={{marginTop: "2rem"}}>0.2 試験スペック（v3.0 詳細）</h3>
                <div className="metric-grid">
                    <div className="metric-card">
                        <span className="metric-val">50問</span>
                        <span className="metric-label">問題数</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val">88pt</span>
                        <span className="metric-label">満点（配点合計）</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val">58pt</span>
                        <span className="metric-label">合格点（65.9%）</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val">120分</span>
                        <span className="metric-label">試験時間</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val">150分</span>
                        <span className="metric-label">非英語話者（+25%）</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val">40 LO</span>
                        <span className="metric-label">学習目標数</span>
                    </div>
                </div>

                <h3>0.3 認知レベル（K-Level）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>K-Level</th>
                                <th>意味</th>
                                <th>問題の特徴</th>
                                <th>配点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="klevel-badge klevel-k2">K2</span></td>
                                <td>Understand（理解）</td>
                                <td>概念を説明・分類・解釈する</td>
                                <td>1点</td>
                            </tr>
                            <tr>
                                <td><span className="klevel-badge klevel-k3">K3</span></td>
                                <td>Apply（適用）</td>
                                <td>実際の状況にプロセスや技法を適用する</td>
                                <td>2点</td>
                            </tr>
                            <tr>
                                <td><span className="klevel-badge klevel-k4">K4</span></td>
                                <td>Analyze（分析）</td>
                                <td>複雑なシナリオを分析・評価する</td>
                                <td>2点</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout warning">
                    <span className="callout-icon">⚠️</span>
                    <div>
                        <strong>試験対策ポイント：</strong
                        >K3・K4レベルが最多配点。シナリオ形式の問題が多く、実際の状況でどう判断するかを問われます。単純な暗記だけでは不十分です。
                    </div>
                </div>

                <h3 style={{marginTop: "2rem"}}>0.4 11のビジネスアウトカム（Business Outcomes）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>ビジネスアウトカム</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>TM_01</td>
                                <td>
                                    確立されたテスト管理プロセスを適用し、様々なプロジェクトのテストを管理できる
                                </td>
                            </tr>
                            <tr>
                                <td>TM_02</td>
                                <td>
                                    特定のコンテキストで関連するテストステークホルダーとSDLCモデルを識別できる
                                </td>
                            </tr>
                            <tr>
                                <td>TM_03</td>
                                <td>
                                    品質リスクの識別・評価セッションを組織化し、テスト目標を達成できる
                                </td>
                            </tr>
                            <tr>
                                <td>TM_04</td>
                                <td>
                                    組織のテスト戦略とプロジェクトコンテキストに一致したプロジェクトテスト戦略を定義できる
                                </td>
                            </tr>
                            <tr>
                                <td>TM_05</td>
                                <td>
                                    テストを継続的に監視・コントロールし、プロジェクト目標を達成できる
                                </td>
                            </tr>
                            <tr>
                                <td>TM_06</td>
                                <td>ステークホルダーへテスト進捗を評価・報告できる</td>
                            </tr>
                            <tr>
                                <td>TM_07</td>
                                <td>チームに必要なスキルを特定し、それらのスキルを開発できる</td>
                            </tr>
                            <tr>
                                <td>TM_08</td>
                                <td>
                                    コストと期待効果を概説したテストのビジネスケースを作成・提示できる
                                </td>
                            </tr>
                            <tr>
                                <td>TM_09</td>
                                <td>
                                    テストプロセス改善活動をリードし、組織のテストプロセス改善に貢献できる
                                </td>
                            </tr>
                            <tr>
                                <td>TM_10</td>
                                <td>
                                    テストインフラを含むテスト活動を計画し、テスト工数を見積もれる
                                </td>
                            </tr>
                            <tr>
                                <td>TM_11</td>
                                <td>SDLCに適した欠陥レポートと欠陥ワークフローを作成できる</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style={{marginTop: "2rem"}}>0.5 v2012 → v3.0 主な変更点</h3>
                <div className="compare-grid">
                    <div className="compare-box good">
                        <span className="compare-box-title">✅ v3.0 新機能・強化</span>
                        <p>✅ ハイブリッドSDLCのテスト管理（新規追加）</p>
                        <p>✅ アジャイルチームの欠陥管理（新規追加）</p>
                        <p>✅ レトロスペクティブの独立セクション化</p>
                        <p>✅ ホールチームアプローチの強化</p>
                        <p>✅ 試験時間 180分 → 120分に短縮</p>
                        <p>✅ 問題数 65問 → 50問に削減</p>
                    </div>
                    <div className="compare-box bad">
                        <span className="compare-box-title">❌ v3.0 で削除・縮小</span>
                        <p>❌ 多数のプロセス改善モデルの詳細削除</p>
                        <p>❌ TPI Nextの詳細削除</p>
                        <p>❌ テストレポートの詳細フォーマット規定削除</p>
                        <p>❌ 7章構成 → 3大章に統合</p>
                        <p>❌ "Test Manager" → "Test Management" に名称変更</p>
                    </div>
                </div>
            </div>
        </section>

        {/* ============================================================
     CHAPTER 1: MANAGING TEST ACTIVITIES
     ============================================================ */}
        <section className="section" id="chapter-1">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">Ch.1</span>
                    <div>
                        <h2>テスト活動の管理（Managing the Test Activities）</h2>
                        <p style={{margin: "0", color: "var(--text-muted)", fontSize: "0.9rem"}}>
                            750分 ｜ 試験配点の約52% ｜ 最重要章
                        </p>
                    </div>
                </div>

                {/* 1.1 TEST PROCESS */}
                <div id="section-1-1">
                    <h3>
                        1.1 テストプロセス <span className="klevel-badge klevel-k2">K2</span
                        ><span className="klevel-badge klevel-k3">K3</span>
                    </h3>

                    <h4>定義</h4>
                    <p>
                        テストプロセスは「テスト計画」「テスト監視と制御」「テスト完了」の3つの主要フェーズで構成され、プロジェクト全体を通じて継続的に実行されます。
                    </p>

                    <div className="arch-layers">
                        <div className="arch-layer" style={{borderLeftColor: "var(--neon-cyan)"}}>
                            <div className="arch-layer-title" style={{color: "var(--neon-cyan)"}}>
                                ① テスト計画（Test Planning）
                            </div>
                            <div className="arch-layer-desc">
                                スコープ定義 → リソース配分 → スケジュール →
                                リスク分析。「何を・いつ・どのように・誰が」を決める
                            </div>
                        </div>
                        <div className="arch-layer amber">
                            <div className="arch-layer-title" style={{color: "var(--neon-amber)"}}>
                                ② テスト監視と制御（Test Monitoring &amp; Control）
                            </div>
                            <div className="arch-layer-desc">
                                進捗追跡 → メトリクス測定 → 偏差への対応 →
                                再計画。監視=現状把握、制御=是正措置
                            </div>
                        </div>
                        <div className="arch-layer green">
                            <div className="arch-layer-title" style={{color: "var(--neon-green)"}}>
                                ③ テスト完了（Test Completion）
                            </div>
                            <div className="arch-layer-desc">
                                完了基準確認 → 成果物アーカイブ →
                                教訓の記録。次プロジェクトへの知識移転
                            </div>
                        </div>
                    </div>

                    <h4 style={{marginTop: "1.5rem"}}>テスト計画の7要素（試験頻出！）</h4>
                    <ol className="step-list">
                        <li>
                            <span className="step-num">1</span>
                            <div className="step-content">
                                <strong>テストスコープ（Test Scope）</strong>
                                <p>
                                    テスト対象と対象外の明確な定義。機能・非機能・特定コンポーネントの範囲を明示
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">2</span>
                            <div className="step-content">
                                <strong>テスト目標（Test Objectives）</strong>
                                <p>
                                    欠陥検出 / リスク低減 / 品質評価 /
                                    コンプライアンス確認。SMART原則で設定
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">3</span>
                            <div className="step-content">
                                <strong>テストアプローチ（Test Approach）</strong>
                                <p>
                                    リスクベース / 反応的 / 分析的 / モデルベースなど7種類から選択
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">4</span>
                            <div className="step-content">
                                <strong>入出口基準（Entry/Exit Criteria）</strong>
                                <p>
                                    Entry: テスト開始条件（例：ビルド完了）。Exit:
                                    テスト終了条件（例：重大欠陥0件）
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">5</span>
                            <div className="step-content">
                                <strong>リソース計画（Resource Planning）</strong>
                                <p>人員配置 / ツール / 環境 / 予算を確保する</p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">6</span>
                            <div className="step-content">
                                <strong>テストスケジュール（Test Schedule）</strong>
                                <p>マイルストーン / 依存関係 / バッファを設定</p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">7</span>
                            <div className="step-content">
                                <strong>リスクと軽減策（Risks &amp; Mitigations）</strong>
                                <p>プロジェクトリスク / 製品リスク / 対応策を事前に特定</p>
                            </div>
                        </li>
                    </ol>

                    <h4>良い例 vs 悪い例：テスト計画</h4>
                    <div className="compare-grid">
                        <div className="compare-box good">
                            <span className="compare-box-title">✅ 良いテスト計画（SMART）</span>
                            <p>「リリース日までにCritical欠陥をゼロにする」</p>
                            <p>「機能要件の85%以上をカバーする」</p>
                            <p>「同時100ユーザーで応答3秒以内」</p>
                            <p>→ 具体的・測定可能・期限付き</p>
                        </div>
                        <div className="compare-box bad">
                            <span className="compare-box-title">❌ 悪いテスト計画</span>
                            <p>「品質を高める」</p>
                            <p>「できる限り多くのバグを見つける」</p>
                            <p>「全コードカバレッジ100%」</p>
                            <p>→ 曖昧・測定不能・非現実的</p>
                        </div>
                    </div>

                    <h4 style={{marginTop: "1.5rem"}}>テスト計画書サンプル（YAML構成）</h4>
                    <div className="code-block">
                        <span className="code-label">YAML</span>
                        <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\"># Master Test Plan サンプル構成</span>\n<span class=\"code-keyword\">Project</span>: ECサイト リニューアル v2.0\n<span class=\"code-keyword\">テスト期間</span>: 2025-04-01 〜 2025-06-30\n\n<span class=\"code-keyword\">テストスコープ</span>:\n  <span class=\"code-green\">対象</span>:\n    - ユーザー認証機能\n    - 商品検索・表示機能\n    - カート・決済フロー\n  <span class=\"code-amber\">対象外</span>:\n    - 管理者画面（別プロジェクト）\n    - レガシー決済I/F（凍結中）\n\n<span class=\"code-keyword\">入口基準</span>:\n  - コードレビュー完了\n  - ユニットテスト通過率 &gt;= 80%\n  - テスト環境の準備完了\n\n<span class=\"code-keyword\">出口基準</span>:\n  - Critical/High 欠陥: 0件\n  - テスト実行率: &gt;= 95%\n  - テスト合格率: &gt;= 90%" }} />
                    </div>

                    <h4 style={{marginTop: "1.5rem"}}>テスト監視の種類</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>監視タイプ</th>
                                    <th>頻度</th>
                                    <th>目的</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>日次監視</td>
                                    <td>毎日</td>
                                    <td>短期的な進捗把握・即時対応</td>
                                </tr>
                                <tr>
                                    <td>週次監視</td>
                                    <td>週1回</td>
                                    <td>トレンド分析・調整</td>
                                </tr>
                                <tr>
                                    <td>マイルストーン監視</td>
                                    <td>フェーズ終了時</td>
                                    <td>Go/No-Go判断</td>
                                </tr>
                                <tr>
                                    <td>定期報告</td>
                                    <td>ステークホルダー要求に応じて</td>
                                    <td>経営報告・意思決定支援</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>テスト完了アクティビティ チェックリスト</h4>
                    <div className="alert cyan">
                        <strong>テスト完了時に必ず実施すること：</strong><br />
                        ✅ 完了基準（Exit Criteria）の達成確認<br />
                        ✅ テスト完了レポートの作成（実行数・合格・失敗・カバレッジ・残存リスク）<br />
                        ✅ テスト成果物のアーカイブ（計画書・ケース・結果・欠陥レポート）<br />
                        ✅ テスト環境のクリーンアップ<br />
                        ✅ 未解決欠陥の本番監視チームへの引き継ぎ<br />
                        ✅ 教訓（Lessons Learned）の記録
                    </div>
                </div>

                <hr className="section-divider" />

                {/* 1.2 CONTEXT */}
                <div id="section-1-2">
                    <h3>
                        1.2 テストのコンテキスト <span className="klevel-badge klevel-k2">K2</span
                        ><span className="klevel-badge klevel-k3">K3</span>
                    </h3>

                    <h4>定義：コンテキストとは何か？</h4>
                    <p>
                        コンテキスト（背景・制約・環境）を深く理解し、テスト計画に反映することがテスト管理者の重要な責務です。
                    </p>

                    <h4>1.2.1 主要ステークホルダーと各ニーズ</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>ステークホルダー</th>
                                    <th>主なニーズ</th>
                                    <th>報告頻度</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>経営者 / CTO</td>
                                    <td>品質保証のコスト vs 効果・ROI</td>
                                    <td>月1回</td>
                                </tr>
                                <tr>
                                    <td>プロジェクト管理者（PM）</td>
                                    <td>スケジュール・コスト・スコープ</td>
                                    <td>週1回</td>
                                </tr>
                                <tr>
                                    <td>製品オーナー（PO）</td>
                                    <td>ビジネス価値の実現確認</td>
                                    <td>スプリントごと</td>
                                </tr>
                                <tr>
                                    <td>開発者</td>
                                    <td>バグの早期フィードバック</td>
                                    <td>毎日</td>
                                </tr>
                                <tr>
                                    <td>テスト管理者</td>
                                    <td>テスト活動の効果的な実行</td>
                                    <td>継続的</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>1.2.3 ハイブリッドSDLCでのテスト管理（v3.0新出！）</h4>
                    <div className="callout info">
                        <span className="callout-icon">ℹ️</span>
                        <div>
                            現代の多くの組織は、純粋なウォーターフォールでも純粋なアジャイルでもない<strong>ハイブリッドモデル</strong>を採用。v3.0ではこの混在環境でのテスト管理が新たに追加されました。
                        </div>
                    </div>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>課題</th>
                                    <th>対策</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>テスト計画の柔軟性と構造性のバランス</td>
                                    <td>
                                        マスターテスト計画（大局）+
                                        スプリントテスト計画（詳細）の2層構造
                                    </td>
                                </tr>
                                <tr>
                                    <td>進捗報告の形式の違い</td>
                                    <td>
                                        アジャイルチームにはバーンダウンチャート、上位管理層にはマイルストーン報告書
                                    </td>
                                </tr>
                                <tr>
                                    <td>欠陥管理のワークフロー差異</td>
                                    <td>
                                        バックログアイテム（アジャイル）と正式欠陥票（ウォーターフォール）を橋渡し
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>1.2.4 SDLCモデル別テスト管理</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>SDLCモデル</th>
                                    <th>テスト計画</th>
                                    <th>実行タイミング</th>
                                    <th>特徴</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ウォーターフォール</td>
                                    <td>初期に一括</td>
                                    <td>テストフェーズ</td>
                                    <td>文書重視・変更コスト高</td>
                                </tr>
                                <tr>
                                    <td>V字モデル</td>
                                    <td>各フェーズに対応</td>
                                    <td>各テストレベル</td>
                                    <td>早期テスト設計</td>
                                </tr>
                                <tr>
                                    <td>アジャイル（Scrum）</td>
                                    <td>スプリントごと</td>
                                    <td>各スプリント</td>
                                    <td>継続的・適応的</td>
                                </tr>
                                <tr>
                                    <td>DevOps</td>
                                    <td>継続的</td>
                                    <td>CI/CDパイプライン</td>
                                    <td>完全自動化</td>
                                </tr>
                                <tr>
                                    <td>ハイブリッド</td>
                                    <td>階層的</td>
                                    <td>組み合わせ</td>
                                    <td>柔軟性重視</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr className="section-divider" />

                {/* 1.3 RISK-BASED TESTING */}
                <div id="section-1-3">
                    <h3>
                        1.3 リスクベーステスト <span className="klevel-badge klevel-k3">K3</span
                        ><span className="klevel-badge klevel-k4">K4</span>
                    </h3>

                    <h4>定義</h4>
                    <p>
                        テストリソースを最も重要な（リスクの高い）領域に集中させるテスト戦略。<strong
                            >リスク = 発生確率 × 影響度</strong
                        >で評価します。
                    </p>

                    <h4>リスク管理の4つの対応策（試験頻出！）</h4>
                    <div className="arch-layers">
                        <div className="arch-layer red">
                            <div className="arch-layer-title" style={{color: "var(--neon-red)"}}>
                                🚫 回避（Avoid）
                            </div>
                            <div className="arch-layer-desc">
                                リスクを引き起こす機能を削除・延期。例：リスクの高い外部API統合をスコープから除外
                            </div>
                        </div>
                        <div className="arch-layer amber">
                            <div className="arch-layer-title" style={{color: "var(--neon-amber)"}}>
                                🔧 軽減（Mitigate）
                            </div>
                            <div className="arch-layer-desc">
                                テストを重点的に実施してリスクを低減。最も一般的な対応策
                            </div>
                        </div>
                        <div className="arch-layer" style={{borderLeftColor: "var(--neon-purple)"}}>
                            <div className="arch-layer-title" style={{color: "var(--neon-purple)"}}>
                                🔄 転嫁（Transfer）
                            </div>
                            <div className="arch-layer-desc">
                                保険・外部委託でリスクを移転。例：外部ベンダーに責任を移す
                            </div>
                        </div>
                        <div className="arch-layer green">
                            <div className="arch-layer-title" style={{color: "var(--neon-green)"}}>
                                ✅ 受容（Accept）
                            </div>
                            <div className="arch-layer-desc">
                                リスクを認識した上で意識的に受け入れる。残存リスクとして記録
                            </div>
                        </div>
                    </div>

                    <h4 style={{marginTop: "1.5rem"}}>リスクマトリクス（視覚化）</h4>
                    <div className="risk-matrix">
                        <div className="rm-cell rm-header">↑発生確率</div>
                        <div className="rm-cell rm-header">低(1)</div>
                        <div className="rm-cell rm-header">中(3)</div>
                        <div className="rm-cell rm-header">高(5)</div>
                        <div className="rm-cell rm-header">低(1)</div>
                        <div className="rm-cell rm-low">1</div>
                        <div className="rm-cell rm-low">3</div>
                        <div className="rm-cell rm-mid">5</div>
                        <div className="rm-cell rm-header">中(3)</div>
                        <div className="rm-cell rm-low">3</div>
                        <div className="rm-cell rm-mid">9</div>
                        <div className="rm-cell rm-high">15</div>
                        <div className="rm-cell rm-header">高(5)</div>
                        <div className="rm-cell rm-mid">5</div>
                        <div className="rm-cell rm-high">15</div>
                        <div className="rm-cell rm-high">25</div>
                    </div>
                    <p style={{fontSize: "0.8rem", color: "var(--text-muted)"}}>
                        ← 影響度（Impact）→ ｜ 🟢 1-4:低リスク ｜ 🟡 5-14:中リスク ｜ 🔴
                        15-25:高リスク
                    </p>

                    <h4 style={{marginTop: "1.5rem"}}>リスクレベル別テスト戦略</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>リスクレベル</th>
                                    <th>テスト強度</th>
                                    <th>具体例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>🔴 高（15-25）</td>
                                    <td>
                                        詳細テスト設計 + 自動化 + セキュリティ/性能テスト +
                                        コードレビュー
                                    </td>
                                    <td>決済処理・認証機能</td>
                                </tr>
                                <tr>
                                    <td>🟡 中（5-14）</td>
                                    <td>標準的なテスト設計 + 主要パスの自動化 + 境界値チェック</td>
                                    <td>検索機能・商品一覧</td>
                                </tr>
                                <tr>
                                    <td>🟢 低（1-4）</td>
                                    <td>基本的な確認テスト + 探索的テストで補完</td>
                                    <td>プロフィール表示・ヘルプページ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>リスク識別のアプローチ</h4>
                    <div className="code-block">
                        <span className="code-label">概念図</span>
                        <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-cyan\">1. ブレインストーミング</span>\n   参加者: TM・Dev・BA・SM・PM\n   手法: 「何が失敗する可能性があるか？」を自由に発想\n\n<span class=\"code-cyan\">2. チェックリスト活用</span>\n   過去の欠陥リスト / OWASP Top 10 / 業界標準\n\n<span class=\"code-cyan\">3. 過去の欠陥分析</span>\n   同様プロジェクトの欠陥データを参照\n\n<span class=\"code-cyan\">4. 専門家インタビュー</span>\n   ドメイン専門家・ベテランテスターの知見活用\n\n<span class=\"code-cyan\">5. ユーザーストーリー分析</span>\n   受入基準から隠れたリスクを識別" }} />
                    </div>

                    <h4>リスクカテゴリ別テストタイプ</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>カテゴリ</th>
                                    <th>リスク例</th>
                                    <th>対応テストタイプ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>機能性</td>
                                    <td>計算ロジックの誤り</td>
                                    <td>機能テスト・単体テスト</td>
                                </tr>
                                <tr>
                                    <td>性能</td>
                                    <td>高負荷時のタイムアウト</td>
                                    <td>性能テスト・負荷テスト</td>
                                </tr>
                                <tr>
                                    <td>セキュリティ</td>
                                    <td>SQLインジェクション脆弱性</td>
                                    <td>セキュリティテスト（OWASP ZAP）</td>
                                </tr>
                                <tr>
                                    <td>互換性</td>
                                    <td>特定ブラウザでの表示崩れ</td>
                                    <td>互換性テスト</td>
                                </tr>
                                <tr>
                                    <td>ユーザビリティ</td>
                                    <td>操作が直感的でない</td>
                                    <td>ユーザビリティテスト</td>
                                </tr>
                                <tr>
                                    <td>データ整合性</td>
                                    <td>同時更新での競合</td>
                                    <td>統合テスト</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout warning">
                        <span className="callout-icon">⚠️</span>
                        <div>
                            <strong>よくある困難：</strong
                            >リスク識別の主観性（人によって評価が異なる）・リスクの動的変化・「全てがリスク」になる膨張問題。対策として構造化リスクワークショップと定期的なリスク再評価（スプリントごと）を実施しましょう。
                        </div>
                    </div>
                </div>

                <hr className="section-divider" />

                {/* 1.4 PROJECT TEST STRATEGY */}
                <div id="section-1-4">
                    <h3>
                        1.4 プロジェクトテスト戦略 <span className="klevel-badge klevel-k3">K3</span>
                    </h3>

                    <h4>テストアプローチの7種類（試験頻出！）</h4>
                    <div className="arch-layers">
                        <div className="arch-layer" style={{borderLeftColor: "var(--neon-cyan)"}}>
                            <div className="arch-layer-title" style={{color: "var(--neon-cyan)"}}>
                                ① 分析的アプローチ（Analytical）
                            </div>
                            <div className="arch-layer-desc">
                                リスクベーステスト・要件ベーステスト・仕様ベーステスト。最も広く使われる
                            </div>
                        </div>
                        <div className="arch-layer" style={{borderLeftColor: "var(--neon-green)"}}>
                            <div className="arch-layer-title" style={{color: "var(--neon-green)"}}>
                                ② モデルベースアプローチ（Model-Based）
                            </div>
                            <div className="arch-layer-desc">
                                状態遷移テスト・BDD（Gherkin）・ユースケースベーステスト
                            </div>
                        </div>
                        <div className="arch-layer amber">
                            <div className="arch-layer-title" style={{color: "var(--neon-amber)"}}>
                                ③ 方法論的アプローチ（Methodical）
                            </div>
                            <div className="arch-layer-desc">
                                チェックリストベーステスト・欠陥ベーステスト（過去データ活用）
                            </div>
                        </div>
                        <div className="arch-layer" style={{borderLeftColor: "var(--neon-purple)"}}>
                            <div className="arch-layer-title" style={{color: "var(--neon-purple)"}}>
                                ④ プロセス準拠アプローチ（Process-Compliant）
                            </div>
                            <div className="arch-layer-desc">
                                業界標準（ISO 26262・IEC 61508）・規制要件（FDA・航空宇宙等）
                            </div>
                        </div>
                        <div className="arch-layer" style={{borderLeftColor: "#f97316"}}>
                            <div className="arch-layer-title" style={{color: "#f97316"}}>
                                ⑤ 指示的アプローチ（Directed）
                            </div>
                            <div className="arch-layer-desc">経験ベーステスト・専門家主導テスト</div>
                        </div>
                        <div className="arch-layer" style={{borderLeftColor: "var(--neon-red)"}}>
                            <div className="arch-layer-title" style={{color: "var(--neon-red)"}}>
                                ⑥ 回帰回避アプローチ（Regression-Averse）
                            </div>
                            <div className="arch-layer-desc">
                                自動化回帰テスト・リグレッションスイート管理
                            </div>
                        </div>
                        <div className="arch-layer" style={{borderLeftColor: "#06b6d4"}}>
                            <div className="arch-layer-title" style={{color: "#06b6d4"}}>
                                ⑦ 反応的アプローチ（Reactive）
                            </div>
                            <div className="arch-layer-desc">
                                探索的テスト・アドホックテスト。変化に柔軟に対応
                            </div>
                        </div>
                    </div>

                    <h4 style={{marginTop: "1.5rem"}}>組織テスト戦略 vs プロジェクトテスト戦略</h4>
                    <div className="compare-grid">
                        <div className="compare-box good">
                            <span className="compare-box-title">🏢 組織テスト戦略（上位）</span>
                            <p>会社全体のテスト方針・標準・プロセス</p>
                            <p>変更は稀（年1回程度のレビュー）</p>
                            <p>例：「全システムにリスクベーステストを採用」</p>
                        </div>
                        <div className="compare-box bad">
                            <span className="compare-box-title" style={{color: "var(--neon-cyan)"}}
                                >📋 プロジェクトテスト戦略（下位・派生）</span
                            >
                            <p>特定プロジェクトへの具体的な適用</p>
                            <p>プロジェクト固有の調整を含む</p>
                            <p>例：「このアジャイルPJではスプリント単位でリスク評価」</p>
                        </div>
                    </div>

                    <h4>テスト目標のSMART原則</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>原則</th>
                                    <th>意味</th>
                                    <th>悪い例</th>
                                    <th>良い例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>S - Specific</td>
                                    <td>具体的</td>
                                    <td>「品質を高める」</td>
                                    <td>「重要機能の欠陥検出」</td>
                                </tr>
                                <tr>
                                    <td>M - Measurable</td>
                                    <td>測定可能</td>
                                    <td>「できるだけ多くのバグを」</td>
                                    <td>「欠陥検出率90%以上」</td>
                                </tr>
                                <tr>
                                    <td>A - Achievable</td>
                                    <td>達成可能</td>
                                    <td>「1週間で全機能テスト」</td>
                                    <td>「3週間で200TC実行」</td>
                                </tr>
                                <tr>
                                    <td>R - Relevant</td>
                                    <td>関連性</td>
                                    <td>「全コードカバレッジ100%」</td>
                                    <td>「高価値機能を優先テスト」</td>
                                </tr>
                                <tr>
                                    <td>T - Time-bound</td>
                                    <td>期限付き</td>
                                    <td>「いつか全テスト合格」</td>
                                    <td>「スプリント終了日までに85%合格」</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr className="section-divider" />

                {/* 1.5 PROCESS IMPROVEMENT */}
                <div id="section-1-5">
                    <h3>
                        1.5 テストプロセスの改善 <span className="klevel-badge klevel-k2">K2</span
                        ><span className="klevel-badge klevel-k3">K3</span>
                    </h3>

                    <h4>1.5.1 IDEALモデルの5フェーズ（試験頻出！）</h4>

                    <div className="ideal-flow">
                        <div className="ideal-step" style={{borderColor: "rgba(0, 229, 255, 0.3)"}}>
                            <span className="ideal-letter" style={{color: "var(--neon-cyan)"}}>I</span>
                            <span className="ideal-name">Initiating<br />（開始）</span>
                        </div>
                        <span className="ideal-arrow">→</span>
                        <div className="ideal-step" style={{borderColor: "rgba(0, 255, 136, 0.3)"}}>
                            <span className="ideal-letter" style={{color: "var(--neon-green)"}}>D</span>
                            <span className="ideal-name">Diagnosing<br />（診断）</span>
                        </div>
                        <span className="ideal-arrow">→</span>
                        <div className="ideal-step" style={{borderColor: "rgba(255, 179, 0, 0.3)"}}>
                            <span className="ideal-letter" style={{color: "var(--neon-amber)"}}>E</span>
                            <span className="ideal-name">Establishing<br />（確立）</span>
                        </div>
                        <span className="ideal-arrow">→</span>
                        <div className="ideal-step" style={{borderColor: "rgba(168, 85, 247, 0.3)"}}>
                            <span className="ideal-letter" style={{color: "var(--neon-purple)"}}>A</span>
                            <span className="ideal-name">Acting<br />（実施）</span>
                        </div>
                        <span className="ideal-arrow">→</span>
                        <div className="ideal-step" style={{borderColor: "rgba(255, 61, 90, 0.3)"}}>
                            <span className="ideal-letter" style={{color: "var(--neon-red)"}}>L</span>
                            <span className="ideal-name">Learning<br />（学習）</span>
                        </div>
                    </div>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>フェーズ</th>
                                    <th>主なアクティビティ</th>
                                    <th>実践例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>I</strong> Initiating</td>
                                    <td>改善の動機付け・スポンサーシップ確立</td>
                                    <td>「テスト実行が遅すぎる問題を改善する」と宣言</td>
                                </tr>
                                <tr>
                                    <td><strong>D</strong> Diagnosing</td>
                                    <td>現状評価・ギャップ分析・課題特定</td>
                                    <td>現在の自動化率は10%。手動テストに500時間/月消費</td>
                                </tr>
                                <tr>
                                    <td><strong>E</strong> Establishing</td>
                                    <td>改善計画の策定・優先順位付け</td>
                                    <td>主要回帰テストの80%を自動化。3ヶ月達成目標</td>
                                </tr>
                                <tr>
                                    <td><strong>A</strong> Acting</td>
                                    <td>パイロット改善の実施・フィードバック収集</td>
                                    <td>まず30件のスモークテストをPlaywrightで自動化</td>
                                </tr>
                                <tr>
                                    <td><strong>L</strong> Learning</td>
                                    <td>改善成果の評価・教訓の文書化</td>
                                    <td>自動化後の実行時間が40分→5分に短縮。次は統合テストへ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 style={{marginTop: "1.5rem"}}>1.5.2 テストプロセス成熟度モデル：TMMi</h4>
                    <div className="pyramid">
                        <div
                            className="pyramid-level"
                            style={{width: "100%", background: "linear-gradient(90deg, #ff3d5a, #ff6b5b)"}}
                        >
                            Lv5: 最適化（Optimization）
                        </div>
                        <div
                            className="pyramid-level"
                            style={{width: "85%", background: "linear-gradient(90deg, #ff9500, #ffb300)"}}
                        >
                            Lv4: 測定（Measured）
                        </div>
                        <div
                            className="pyramid-level"
                            style={{width: "70%", background: "linear-gradient(90deg, #a855f7, #c084fc)"}}
                        >
                            Lv3: 定義（Defined）
                        </div>
                        <div
                            className="pyramid-level"
                            style={{width: "55%", background: "linear-gradient(90deg, #00e5ff, #67e8f9)"}}
                        >
                            Lv2: 管理（Managed）
                        </div>
                        <div
                            className="pyramid-level"
                            style={{width: "40%", background: "linear-gradient(90deg, #475569, #94a3b8)"}}
                        >
                            Lv1: 初期（Initial）
                        </div>
                    </div>

                    <h4>1.5.4 レトロスペクティブ（v3.0新設セクション）</h4>
                    <div className="retro-board">
                        <div className="retro-card well">
                            <span className="retro-card-title">✅ うまくいったこと</span>
                            <ul className="retro-list">
                                <li>自動化でリグレッション確認が30分→5分</li>
                                <li>欠陥の早期発見率が向上した</li>
                            </ul>
                        </div>
                        <div className="retro-card improve">
                            <span className="retro-card-title">⚠️ 改善が必要</span>
                            <ul className="retro-list">
                                <li>テスト環境が不安定で実行が中断した</li>
                                <li>テストデータ準備に時間がかかる</li>
                            </ul>
                        </div>
                        <div className="retro-card action">
                            <span className="retro-card-title">🚀 アクションアイテム</span>
                            <ul className="retro-list">
                                <li>環境をDockerに移行（担当: 田中）</li>
                                <li>データファクトリー構築（担当: 鈴木）</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="section-divider" />

                {/* 1.6 TEST TOOLS */}
                <div id="section-1-6">
                    <h3>
                        1.6 テストツール <span className="klevel-badge klevel-k2">K2</span
                        ><span className="klevel-badge klevel-k3">K3</span>
                    </h3>

                    <h4>ツール導入プロセス（7ステップ）</h4>
                    <ol className="step-list">
                        <li>
                            <span className="step-num">1</span>
                            <div className="step-content">
                                <strong>要件定義</strong>
                                <p>「何のためのツールか」を明確化。ツール先行厳禁！</p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">2</span>
                            <div className="step-content">
                                <strong>候補ツールのリストアップ</strong>
                                <p>オープンソース vs 商用 / クラウド vs オンプレミス</p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">3</span>
                            <div className="step-content">
                                <strong>評価基準の策定</strong>
                                <p>重み付き評価基準を設定（SUT適合性・学習コスト・CI/CD統合等）</p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">4</span>
                            <div className="step-content">
                                <strong>POC実施（2〜4週間）</strong>
                                <p>実際のSUTでツールを試す。技術的課題の早期発見</p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">5</span>
                            <div className="step-content">
                                <strong>Go/No-Go判断</strong>
                                <p>POC結果をもとに導入判断</p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">6</span>
                            <div className="step-content">
                                <strong>本格導入・教育</strong>
                                <p>パイロットプロジェクト（1〜3ヶ月）→ 全展開</p>
                            </div>
                        </li>
                        <li>
                            <span className="step-num">7</span>
                            <div className="step-content">
                                <strong>効果測定</strong>
                                <p>ROIメトリクスで投資効果を定量化</p>
                            </div>
                        </li>
                    </ol>

                    <h4>ツールROI計算式と具体例</h4>
                    <div className="code-block">
                        <span className="code-label">計算式</span>
                        <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-cyan\">ROI (%) = ((節約額 - 総コスト) / 総コスト) × 100</span>\n\n<span class=\"code-comment\"># 例：テスト自動化ツール導入のROI計算</span>\n\n<span class=\"code-green\">コスト（初年度）:</span>\n  ライセンス費用:    50万円\n  環境構築・設定:   100万円\n  チームトレーニング: 50万円\n  年間メンテナンス:   30万円\n  <span class=\"code-keyword\">合計: 230万円</span>\n\n<span class=\"code-green\">節約額:</span>\n  手動回帰テスト削減: 200TC × 30分 × 26スプリント = 2,600時間\n  2,600時間 × 8,000円/時 = <span class=\"code-num\">2,080万円</span>\n  欠陥早期発見効果:  <span class=\"code-num\">300万円</span>（推定）\n  <span class=\"code-keyword\">合計: 2,380万円</span>\n\n<span class=\"code-amber\">ROI = ((2,380万 - 230万) / 230万) × 100 = 935%</span>\n<span class=\"code-green\">BreakEven: 約2ヶ月で投資回収！</span>" }} />
                    </div>

                    <h4>ツール評価基準マトリクス</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>評価観点</th>
                                    <th>技術的側面</th>
                                    <th>ビジネス的側面</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>適合性</td>
                                    <td>SUTタイプとの適合</td>
                                    <td>既存ワークフローとの適合</td>
                                </tr>
                                <tr>
                                    <td>性能</td>
                                    <td>実行速度・スケーラビリティ</td>
                                    <td>チームの生産性向上効果</td>
                                </tr>
                                <tr>
                                    <td>統合</td>
                                    <td>CI/CD・他ツールとの連携</td>
                                    <td>レポート要件の充足</td>
                                </tr>
                                <tr>
                                    <td>保守性</td>
                                    <td>アップグレード容易性</td>
                                    <td>ベンダーサポートの質</td>
                                </tr>
                                <tr>
                                    <td>セキュリティ</td>
                                    <td>データ保護・アクセス制御</td>
                                    <td>コンプライアンス対応</td>
                                </tr>
                                <tr>
                                    <td>コスト（TCO）</td>
                                    <td>インフラコスト</td>
                                    <td>ライセンス・学習コスト</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        {/* ============================================================
     CHAPTER 2: MANAGING THE PRODUCT
     ============================================================ */}
        <section className="section" id="chapter-2">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num amber">Ch.2</span>
                    <div>
                        <h2>製品の管理（Managing the Product）</h2>
                        <p style={{margin: "0", color: "var(--text-muted)", fontSize: "0.9rem"}}>
                            390分 ｜ 試験配点の約30%
                        </p>
                    </div>
                </div>

                {/* 2.1 TEST METRICS */}
                <div id="section-2-1">
                    <h3>
                        2.1 テストメトリクス <span className="klevel-badge klevel-k3">K3</span
                        ><span className="klevel-badge klevel-k4">K4</span>
                    </h3>

                    <h4>定義：なぜメトリクスが重要か</h4>
                    <p>
                        メトリクスはテスト管理の<strong>意思決定の根拠</strong>となります。感覚ではなくデータで判断することが重要です。
                    </p>

                    <h4>4カテゴリのテストメトリクス</h4>
                    <div className="arch-layers">
                        <div className="arch-layer" style={{borderLeftColor: "var(--neon-cyan)"}}>
                            <div className="arch-layer-title" style={{color: "var(--neon-cyan)"}}>
                                進捗メトリクス（Progress）
                            </div>
                            <div className="arch-layer-desc">
                                テスト実行率・テスト完了率・スケジュール消化率・欠陥解決率・テストケース設計完了率
                            </div>
                        </div>
                        <div className="arch-layer green">
                            <div className="arch-layer-title" style={{color: "var(--neon-green)"}}>
                                品質メトリクス（Quality）
                            </div>
                            <div className="arch-layer-desc">
                                欠陥密度・欠陥検出率・欠陥漏洩率・コードカバレッジ・要件カバレッジ
                            </div>
                        </div>
                        <div className="arch-layer amber">
                            <div className="arch-layer-title" style={{color: "var(--neon-amber)"}}>
                                生産性メトリクス（Productivity）
                            </div>
                            <div className="arch-layer-desc">
                                テストケース作成速度・テスト実行速度・自動化率・1テストケースあたりのコスト
                            </div>
                        </div>
                        <div className="arch-layer" style={{borderLeftColor: "var(--neon-purple)"}}>
                            <div className="arch-layer-title" style={{color: "var(--neon-purple)"}}>
                                安定性メトリクス（Stability）
                            </div>
                            <div className="arch-layer-desc">
                                フレイキーテスト率・環境可用性・ビルド成功率・MTBF（平均故障間隔）
                            </div>
                        </div>
                    </div>

                    <h4 style={{marginTop: "1.5rem"}}>主要メトリクスの計算式</h4>
                    <div className="code-block">
                        <span className="code-label">Python</span>
                        <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">class</span> <span class=\"code-cyan\">TestMetrics</span>:\n\n    <span class=\"code-keyword\">def</span> <span class=\"code-green\">test_execution_rate</span>(self, executed: int, total: int) -&gt; float:\n        <span class=\"code-comment\">\"\"\"テスト実行率 = 実行済みTC数 / 全TC数 × 100\"\"\"</span>\n        <span class=\"code-keyword\">return</span> (executed / total) * 100\n\n    <span class=\"code-keyword\">def</span> <span class=\"code-green\">test_pass_rate</span>(self, passed: int, executed: int) -&gt; float:\n        <span class=\"code-comment\">\"\"\"テスト合格率 = 合格TC数 / 実行済みTC数 × 100\"\"\"</span>\n        <span class=\"code-keyword\">return</span> (passed / executed) * 100\n\n    <span class=\"code-keyword\">def</span> <span class=\"code-green\">defect_containment_efficiency</span>(self,\n            pre_prod: int, post_prod: int) -&gt; float:\n        <span class=\"code-comment\">\"\"\"欠陥封じ込め効率 = テスト検出 / (テスト検出 + 本番流出) × 100\"\"\"</span>\n        total = pre_prod + post_prod\n        <span class=\"code-keyword\">return</span> (pre_prod / total) * 100\n\n<span class=\"code-comment\"># 使用例</span>\nm = TestMetrics()\nprint(m.test_execution_rate(<span class=\"code-num\">150</span>, <span class=\"code-num\">200</span>))  <span class=\"code-comment\"># → 75.0%</span>\nprint(m.test_pass_rate(<span class=\"code-num\">132</span>, <span class=\"code-num\">150</span>))       <span class=\"code-comment\"># → 88.0%</span>\nprint(m.defect_containment_efficiency(<span class=\"code-num\">45</span>, <span class=\"code-num\">3</span>))  <span class=\"code-comment\"># → 93.8%</span>" }} />
                    </div>

                    <h4>バーンダウンチャートの読み方（アジャイル）</h4>
                    <div className="code-block">
                        <span className="code-label">概念図</span>
                        <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-cyan\">残存テスト数</span>\n  ↑\n<span class=\"code-num\">200</span>|  理想ライン: ●─────────────────────\n   |              \\\n<span class=\"code-num\">150</span>|               \\●\n   |                 \\    ●\n<span class=\"code-num\">100</span>|                   \\─────●\n   |                           \\  <span class=\"code-amber\">← 現状遅れ</span>\n<span class=\"code-num\"> 50</span>|                             ●\n   |                              \\\n  <span class=\"code-num\">0</span>└─────────────────────────────→ 日数\n\n制御措置の発動基準:\n  <span class=\"code-green\">≥ 20%遅延</span> → 要注意（監視強化）\n  <span class=\"code-amber\">≥ 30%遅延</span> → 軽度対策（残業・並列実行）\n  <span class=\"code-red\"> ≥ 50%遅延</span> → 重大対策（スコープ削減・人員追加）" }} />
                    </div>

                    <h4>ステークホルダー別テスト報告書</h4>
                    <div className="compare-grid">
                        <div className="compare-box good">
                            <span className="compare-box-title">🏢 経営層向け（1ページ）</span>
                            <p>総合ステータス（🟢 予定通り）</p>
                            <p>テスト完了率・合格率・重大欠陥数</p>
                            <p>リリース見通し（日付）</p>
                            <p>→ 数値・グラフを使い視覚的に</p>
                        </div>
                        <div className="compare-box bad">
                            <span className="compare-box-title" style={{color: "var(--neon-cyan)"}}
                                >💻 開発チーム向け（詳細）</span
                            >
                            <p>欠陥リスト（優先度・担当者・期限）</p>
                            <p>テスト失敗の詳細（ログ・スクリーンショット）</p>
                            <p>カバレッジギャップの分析</p>
                            <p>→ 具体的・即時対応可能な情報</p>
                        </div>
                    </div>
                </div>

                <hr className="section-divider" />

                {/* 2.2 TEST ESTIMATION */}
                <div id="section-2-2">
                    <h3>2.2 テスト見積もり <span className="klevel-badge klevel-k3">K3</span></h3>

                    <h4>定義：テスト見積もりとは</h4>
                    <p>
                        テスト見積もりは<strong>テスト管理者の最重要スキルの一つ</strong>。正確な見積もりがプロジェクト成功を左右します。
                    </p>

                    <h4>テスト工数に影響する要因</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>要因種別</th>
                                    <th>工数増加要因 ↑</th>
                                    <th>工数削減要因 ↓</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>製品要因</td>
                                    <td>
                                        複雑なロジック・高品質要件・複数プラットフォーム・規制対応
                                    </td>
                                    <td>シンプルなUI・豊富な自動化・安定アーキテクチャ</td>
                                </tr>
                                <tr>
                                    <td>プロセス要因</td>
                                    <td>頻繁な要件変更・不安定テスト環境・再テスト工数</td>
                                    <td>成熟したプロセス・豊富なテストデータ・CI/CD整備済み</td>
                                </tr>
                                <tr>
                                    <td>人的要因</td>
                                    <td>技術スキル不足・新ツール習得・コミュニケーション問題</td>
                                    <td>
                                        ドメイン知識豊富・経験豊富なチーム・明確なコミュニケーション
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>主要な見積もり技法比較</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>技法</th>
                                    <th>精度</th>
                                    <th>必要データ</th>
                                    <th>適用タイミング</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ワイドバンドデルファイ</td>
                                    <td>中</td>
                                    <td>専門家の経験</td>
                                    <td>早期・新規領域</td>
                                </tr>
                                <tr>
                                    <td>プランニングポーカー</td>
                                    <td>中</td>
                                    <td>チームの経験</td>
                                    <td>アジャイルスプリント計画</td>
                                </tr>
                                <tr>
                                    <td>類推法（Analogical）</td>
                                    <td>中〜高</td>
                                    <td>過去プロジェクトデータ</td>
                                    <td>類似プロジェクト</td>
                                </tr>
                                <tr>
                                    <td>三点見積もり（PERT）</td>
                                    <td>高</td>
                                    <td>楽観値・最頻値・悲観値</td>
                                    <td>不確実性が高い場合</td>
                                </tr>
                                <tr>
                                    <td>テストケース数ベース</td>
                                    <td>高</td>
                                    <td>TC数・単位工数</td>
                                    <td>TC定義完了後</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>三点見積もり（PERT）の計算式</h4>
                    <div className="code-block">
                        <span className="code-label">Python</span>
                        <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">def</span> <span class=\"code-green\">three_point_estimate</span>(\n    optimistic: float,   <span class=\"code-comment\"># 楽観値（O）</span>\n    most_likely: float,  <span class=\"code-comment\"># 最頻値（M）</span>\n    pessimistic: float   <span class=\"code-comment\"># 悲観値（P）</span>\n) -&gt; dict:\n    <span class=\"code-comment\">\"\"\"\n    期待値   = (O + 4M + P) / 6\n    標準偏差 = (P - O) / 6\n    \"\"\"</span>\n    expected = (optimistic + <span class=\"code-num\">4</span> * most_likely + pessimistic) / <span class=\"code-num\">6</span>\n    std_dev  = (pessimistic - optimistic) / <span class=\"code-num\">6</span>\n    <span class=\"code-keyword\">return</span> {\n        <span class=\"code-string\">\"期待値\"</span>:  expected,\n        <span class=\"code-string\">\"標準偏差\"</span>: std_dev,\n        <span class=\"code-string\">\"90%信頼区間\"</span>: f<span class=\"code-string\">\"{expected - 1.65*std_dev:.1f} 〜 {expected + 1.65*std_dev:.1f}時間\"</span>\n    }\n\n<span class=\"code-comment\"># 例：ログイン機能テスト見積もり</span>\nresult = three_point_estimate(\n    optimistic  = <span class=\"code-num\">30</span>,   <span class=\"code-comment\"># 全て順調な場合</span>\n    most_likely = <span class=\"code-num\">50</span>,   <span class=\"code-comment\"># 通常の場合</span>\n    pessimistic = <span class=\"code-num\">100</span>,  <span class=\"code-comment\"># 問題が多い場合</span>\n)\n<span class=\"code-comment\"># 期待値: 53.3時間（90%信頼区間: 37.8〜68.8時間）</span>" }} />
                    </div>
                </div>

                <hr className="section-divider" />

                {/* 2.3 DEFECT MANAGEMENT */}
                <div id="section-2-3">
                    <h3>
                        2.3 欠陥管理 <span className="klevel-badge klevel-k3">K3</span
                        ><span className="klevel-badge klevel-k4">K4</span>
                    </h3>

                    <h4>欠陥ライフサイクル</h4>
                    <div className="lifecycle-flow">
                        <div className="lc-step">
                            <div className="lc-dot" style={{borderColor: "var(--neon-cyan)"}}>NEW</div>
                            <div className="lc-content">
                                <strong>New / Open</strong
                                ><span> — テスターが欠陥を発見・報告</span>
                            </div>
                        </div>
                        <div className="lc-step">
                            <div className="lc-dot" style={{borderColor: "var(--neon-amber)"}}>ASGN</div>
                            <div className="lc-content">
                                <strong>Assigned</strong><span> — 開発者がアサイン。調査開始</span>
                            </div>
                        </div>
                        <div className="lc-step">
                            <div className="lc-dot" style={{borderColor: "var(--neon-purple)"}}>WIP</div>
                            <div className="lc-content">
                                <strong>In Progress</strong><span> — 開発者が原因調査・修正</span>
                            </div>
                        </div>
                        <div className="lc-step">
                            <div className="lc-dot" style={{borderColor: "var(--neon-green)"}}>FIX</div>
                            <div className="lc-content">
                                <strong>Fixed / Resolved</strong
                                ><span> — 修正完了・テスターへ戻す</span>
                            </div>
                        </div>
                        <div className="lc-step">
                            <div className="lc-dot" style={{borderColor: "var(--neon-cyan)"}}>RT</div>
                            <div className="lc-content">
                                <strong>Re-Test</strong><span> — テスターが修正確認テスト実行</span>
                            </div>
                        </div>
                        <div className="lc-step">
                            <div className="lc-dot" style={{borderColor: "var(--neon-green)"}}>✓</div>
                            <div className="lc-content">
                                <strong>Closed ✅</strong
                                ><span>
                                    — 修正OK → クローズ（または Re-Opened → Assigned に戻る）</span
                                >
                            </div>
                        </div>
                    </div>

                    <div className="alert amber">
                        <strong>特殊ステータス：</strong>
                        <code>Deferred</code>（今のリリースでは対応しない）｜
                        <code>Rejected</code>（欠陥でない：設計通り/重複/再現不可）｜
                        <code>Not a Bug</code>（仕様通り動作）
                    </div>

                    <h4 style={{marginTop: "1.5rem"}}>良い欠陥レポートの構成</h4>
                    <div className="code-block">
                        <span className="code-label">欠陥レポートテンプレート</span>
                        <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-cyan\">欠陥ID:     BUG-2025-0042</span>\n<span class=\"code-cyan\">タイトル:   ログイン後にダッシュボードが表示されない</span>\n<span class=\"code-keyword\">重要度:     Critical (P1)  ｜  優先度: High</span>\n<span class=\"code-amber\">ステータス: Open → Assigned to: 田中 健太</span>\n発見日:     2025-04-15     ｜  発見者: 鈴木 花子\n\n<span class=\"code-comment\">■ 環境情報:</span>\n  OS: Windows 11 / macOS 14.2（両方で再現）\n  ブラウザ: Chrome 124.0.0.1\n  テスト環境: Staging v2.1.0\n\n<span class=\"code-comment\">■ 再現手順:</span>\n  1. https://staging.example.com/login にアクセス\n  2. Email/Password を入力\n  3. [ログイン]ボタンをクリック\n  <span class=\"code-amber\">→ スピナーが15秒以上表示される</span>\n\n<span class=\"code-green\">■ 期待結果:</span> /dashboard にリダイレクトされる\n<span class=\"code-red\">■ 実際の結果:</span> 「エラーが発生しました」が表示される\n\n<span class=\"code-comment\">■ 添付資料: スクリーンショット・コンソールログ・HARファイル</span>" }} />
                    </div>

                    <h4>欠陥分析から改善活動へ（5-Why分析）</h4>
                    <div className="code-block">
                        <span className="code-label">根本原因分析</span>
                        <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-cyan\">問題: ログイン欠陥が多い</span>\n\nWhy1: ログイン処理のロジックが複雑\n  ↓\nWhy2: セッション管理の設計が曖昧\n  ↓\nWhy3: 設計レビューが実施されていなかった\n  ↓\nWhy4: レビュープロセスが定義されていなかった\n  ↓\nWhy5: プロセス定義のオーナーが不在\n\n<span class=\"code-green\">根本原因: 認証機能のアーキテクチャレビュープロセスの欠如</span>\n<span class=\"code-amber\">改善策: 設計レビュープロセスを確立 → 認証系欠陥を翌月50%削減</span>" }} />
                    </div>

                    <h4>アジャイル vs ウォーターフォールの欠陥管理</h4>
                    <div className="compare-grid">
                        <div className="compare-box good">
                            <span className="compare-box-title">🔄 アジャイルの欠陥管理</span>
                            <p>欠陥 → バックログアイテム化</p>
                            <p>スプリントプランニングで優先度付け</p>
                            <p>ツール: Jira / GitHub Issues</p>
                            <p>DoD: Critical/High欠陥 = 0件</p>
                        </div>
                        <div className="compare-box bad">
                            <span className="compare-box-title" style={{color: "var(--neon-cyan)"}}
                                >📋 ウォーターフォールの欠陥管理</span
                            >
                            <p>欠陥票 → 承認 → 修正</p>
                            <p>フォーマルな手続きが必要</p>
                            <p>ツール: 専用欠陥管理システム</p>
                            <p>フェーズゲートで品質確認</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ============================================================
     CHAPTER 3: MANAGING THE TEAM
     ============================================================ */}
        <section className="section" id="chapter-3">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num purple">Ch.3</span>
                    <div>
                        <h2>チームの管理（Managing the Team）</h2>
                        <p style={{margin: "0", color: "var(--text-muted)", fontSize: "0.9rem"}}>
                            225分 ｜ 試験配点の約18%
                        </p>
                    </div>
                </div>

                {/* 3.1 TEST TEAM */}
                <div id="section-3-1">
                    <h3>
                        3.1 テストチーム <span className="klevel-badge klevel-k2">K2</span
                        ><span className="klevel-badge klevel-k3">K3</span>
                    </h3>

                    <h4>4つの能力領域（試験頻出！）</h4>
                    <div className="arch-layers">
                        <div className="arch-layer" style={{borderLeftColor: "var(--neon-cyan)"}}>
                            <div className="arch-layer-title" style={{color: "var(--neon-cyan)"}}>
                                1. テストスキル（Testing）
                            </div>
                            <div className="arch-layer-desc">
                                テスト技法（EP/BVA/状態遷移等）・テストプロセスの理解・欠陥分析・報告スキル・テスト自動化の基礎
                            </div>
                        </div>
                        <div className="arch-layer green">
                            <div className="arch-layer-title" style={{color: "var(--neon-green)"}}>
                                2. ドメイン知識（Domain）
                            </div>
                            <div className="arch-layer-desc">
                                業務ドメインの知識（金融/医療/EC等）・業界規制・標準の理解・ビジネスプロセスの理解
                            </div>
                        </div>
                        <div className="arch-layer amber">
                            <div className="arch-layer-title" style={{color: "var(--neon-amber)"}}>
                                3. 技術スキル（Technical）
                            </div>
                            <div className="arch-layer-desc">
                                テスト対象技術（Web/API/DB等）・テストツール（Selenium/Playwright等）・CI/CD・プログラミング
                            </div>
                        </div>
                        <div className="arch-layer" style={{borderLeftColor: "var(--neon-purple)"}}>
                            <div className="arch-layer-title" style={{color: "var(--neon-purple)"}}>
                                4. ソフトスキル（Soft Skills）
                            </div>
                            <div className="arch-layer-desc">
                                コミュニケーション・批判的思考・問題解決能力・チームワーク・ストレス管理・アダプタビリティ
                            </div>
                        </div>
                    </div>

                    <h4 style={{marginTop: "1.5rem"}}>スキル開発戦略：70:20:10モデル</h4>
                    <div className="pyramid">
                        <div
                            className="pyramid-level"
                            style={{width: "100%", background: "linear-gradient(\n                                    90deg,\n                                    var(--neon-cyan),\n                                    var(--neon-green)\n                                )"}}
                        >
                            70% — 実務経験（挑戦的課題・ローテーション・メンター制度）
                        </div>
                        <div
                            className="pyramid-level"
                            style={{width: "75%", background: "linear-gradient(90deg, var(--neon-amber), #ff9500)"}}
                        >
                            20% — 社会的学習（コードレビュー・社内勉強会・コミュニティ）
                        </div>
                        <div
                            className="pyramid-level"
                            style={{width: "45%", background: "linear-gradient(90deg, var(--neon-purple), #c084fc)"}}
                        >
                            10% — 形式的トレーニング（ISTQB研修・Udemy・カンファレンス）
                        </div>
                    </div>

                    <h4>モチベーション向上・低下要因</h4>
                    <div className="compare-grid">
                        <div className="compare-box good">
                            <span className="compare-box-title">✅ モチベーション向上要因</span>
                            <p>🏅 意味のある仕事（品質を通じてユーザーを守る）</p>
                            <p>📈 スキルアップの機会</p>
                            <p>🎯 自律性（テスト戦略の決定権）</p>
                            <p>🎉 達成感（重要な欠陥の発見）</p>
                            <p>💰 適切な評価と報酬</p>
                            <p>🚀 明確なキャリアパス</p>
                        </div>
                        <div className="compare-box bad">
                            <span className="compare-box-title">❌ モチベーション低下要因</span>
                            <p>😤 テストが「障壁」として扱われる文化</p>
                            <p>🏃 品質よりスピードのみ優先</p>
                            <p>🔁 フレイキーテストによる徒労感</p>
                            <p>😶 成果が評価されない</p>
                            <p>⚔️ 開発者との対立・非協力</p>
                            <p>🙊 意見が無視される環境</p>
                        </div>
                    </div>

                    <div className="callout info">
                        <span className="callout-icon">💡</span>
                        <div>
                            <strong>ホールチームアプローチ（Whole Team Approach）：</strong
                            >テストは「テスターだけの仕事」ではない。開発者・BA・デザイナー全員が品質に責任を持つ。テスト管理者はチームの品質文化をリードする役割を担います。
                        </div>
                    </div>
                </div>

                <hr className="section-divider" />

                {/* 3.2 STAKEHOLDER RELATIONSHIPS */}
                <div id="section-3-2">
                    <h3>
                        3.2 ステークホルダー関係 <span className="klevel-badge klevel-k2">K2</span
                        ><span className="klevel-badge klevel-k3">K3</span>
                    </h3>

                    <h4>品質のコスト（Cost of Quality：CoQ）PAFモデル</h4>
                    <div className="arch-layers">
                        <div className="arch-layer green">
                            <div className="arch-layer-title" style={{color: "var(--neon-green)"}}>
                                予防コスト（Prevention）← ここに投資！
                            </div>
                            <div className="arch-layer-desc">
                                要件・設計レビュー・テスト計画・テストケース設計・チームトレーニング・テストプロセス改善
                            </div>
                        </div>
                        <div className="arch-layer" style={{borderLeftColor: "var(--neon-cyan)"}}>
                            <div className="arch-layer-title" style={{color: "var(--neon-cyan)"}}>
                                評価コスト（Appraisal）
                            </div>
                            <div className="arch-layer-desc">
                                テスト実行・テストツール・環境コスト・品質監査
                            </div>
                        </div>
                        <div className="arch-layer amber">
                            <div className="arch-layer-title" style={{color: "var(--neon-amber)"}}>
                                内部失敗コスト（Internal Failure）
                            </div>
                            <div className="arch-layer-desc">
                                開発中・テスト中の欠陥修正・再テスト工数・手戻り（Rework）
                            </div>
                        </div>
                        <div className="arch-layer red">
                            <div className="arch-layer-title" style={{color: "var(--neon-red)"}}>
                                外部失敗コスト（External Failure）← 最も避けるべき！
                            </div>
                            <div className="arch-layer-desc">
                                本番バグ修正（最高コスト）・サポートコスト・ブランド損失・訴訟・賠償リスク
                            </div>
                        </div>
                    </div>

                    <h4 style={{marginTop: "1.5rem"}}>欠陥発見フェーズによるコスト比較</h4>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">要件定義フェーズ</span
                            ><span className="progress-val">1x</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{width: "2%", background: "var(--neon-green)"}}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">設計フェーズ</span
                            ><span className="progress-val">5x</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{width: "10%", background: "var(--neon-cyan)"}}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">実装フェーズ</span
                            ><span className="progress-val">10x</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{width: "20%", background: "var(--neon-amber)"}}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">テストフェーズ</span
                            ><span className="progress-val">50x</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{width: "50%", background: "#f97316"}}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">本番環境</span
                            ><span className="progress-val">100x !!!</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{width: "100%", background: "var(--neon-red)"}}
                            ></div>
                        </div>
                    </div>

                    <h4 style={{marginTop: "1.5rem"}}>テストROIの計算</h4>
                    <div className="code-block">
                        <span className="code-label">ビジネスケース計算例</span>
                        <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\">■ 費用（Costs）:</span>\n  テスト計画・設計:  200時間 × 8,000円/時 = <span class=\"code-num\">160万円</span>\n  テスト実行:        300時間 × 8,000円/時 = <span class=\"code-num\">240万円</span>\n  テストツール:      年間ライセンス        = <span class=\"code-num\"> 30万円</span>\n  環境コスト:                             = <span class=\"code-num\"> 20万円</span>\n  <span class=\"code-keyword\">合計コスト: 450万円</span>\n\n<span class=\"code-comment\">■ 効果（Benefits）:</span>\n  本番欠陥削減: 20件 × 修正コスト200万円   = <span class=\"code-num\">4,000万円</span>\n  ブランド保護（推定）                     = <span class=\"code-num\">  500万円</span>\n  サポートコスト削減                       = <span class=\"code-num\">  200万円</span>\n  早期発見コスト削減                       = <span class=\"code-num\">  300万円</span>\n  <span class=\"code-keyword\">合計効果: 5,000万円</span>\n\n<span class=\"code-amber\">ROI = (5,000万 - 450万) / 450万 × 100 = <span class=\"code-num\">1,011%</span> !!!</span>\n<span class=\"code-green\">→ テストへの投資は1,000%以上のROIを生む可能性がある</span>" }} />
                    </div>

                    <div className="callout info">
                        <span className="callout-icon">💼</span>
                        <div>
                            <strong>ビジネスケースのプレゼンポイント：</strong
                            >①経営層の言葉で話す（コスト・リスク・リターン）②具体的な数字で示す
                            ③競合他社の品質問題事例を引用 ④投資しなかった場合のリスクシナリオも提示
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ============================================================
     EXAM TIPS
     ============================================================ */}
        <section className="section" id="exam-tips">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num red">付録</span>
                    <div>
                        <h2>試験対策・サンプル問題</h2>
                        <p style={{margin: "0", color: "var(--text-muted)", fontSize: "0.9rem"}}>
                            CTAL-TM v3.0 合格への最短ルート
                        </p>
                    </div>
                </div>

                <h3>試験配点カード</h3>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.1 テスト活動の管理</div>
                        <span className="exam-card-pts">~46問</span>
                        <div className="stars">★★★★★</div>
                        <p>試験配点の約52%。リスクベーステストが最重要</p>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-title">1.3 リスクベーステスト</div>
                        <span className="exam-card-pts">~10問</span>
                        <div className="stars">★★★★★</div>
                        <p>4つの対応策・リスクスコア計算は必須</p>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.2 製品の管理</div>
                        <span className="exam-card-pts">~15問</span>
                        <div className="stars">★★★★</div>
                        <p>メトリクス・見積もり・欠陥管理の3軸</p>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.3 チームの管理</div>
                        <span className="exam-card-pts">~9問</span>
                        <div className="stars">★★★</div>
                        <p>4能力領域・CoQモデル・ROI計算</p>
                    </div>
                </div>

                <h3 style={{marginTop: "2rem"}}>必ず覚える重要概念チェックリスト</h3>
                <div className="alert cyan">
                    <strong>Ch.1 必須暗記事項：</strong><br />
                    ✅ リスク管理の4対応策：<strong>回避 / 軽減 / 転嫁 / 受容</strong><br />
                    ✅ IDEALモデル5フェーズ：<strong
                        >Initiating → Diagnosing → Establishing → Acting → Learning</strong
                    ><br />
                    ✅
                    テストアプローチ7種類：分析的・モデルベース・方法論的・プロセス準拠・指示的・回帰回避・反応的<br />
                    ✅ TMMi5段階：初期 → 管理 → 定義 → 測定 → 最適化<br />
                    ✅
                    テスト計画の7要素（スコープ・目標・アプローチ・入出口基準・リソース・スケジュール・リスク）
                </div>
                <div className="alert green">
                    <strong>Ch.2 必須暗記事項：</strong><br />
                    ✅ メトリクスの4カテゴリ：進捗・品質・生産性・安定性<br />
                    ✅ 欠陥封じ込め効率（DCE）= テスト検出 / (テスト検出 + 本番流出) × 100<br />
                    ✅ 欠陥ライフサイクル：New → Assigned → In Progress → Fixed → Re-Test →
                    Closed/Re-Opened<br />
                    ✅ 特殊ステータス：Deferred / Rejected / Not a Bug<br />
                    ✅ PERT期待値 = (O + 4M + P) / 6
                </div>
                <div className="alert amber">
                    <strong>Ch.3 必須暗記事項：</strong><br />
                    ✅ テストチームの4能力領域：テストスキル / ドメイン / 技術 / ソフトスキル<br />
                    ✅ CoQの4分類：予防（Prevention）/ 評価（Appraisal）/ 内部失敗 / 外部失敗<br />
                    ✅ スキル開発70:20:10モデル<br />
                    ✅ 組織テスト戦略 vs プロジェクトテスト戦略の違い
                </div>

                <h3 style={{marginTop: "2rem"}}>📝 サンプル問題と解説</h3>

                <div className="trend-card" style={{marginBottom: "1.5rem"}}>
                    <h4>問1（K3 / Section 1.3 リスクベーステスト）</h4>
                    <p>
                        あなたは新しい決済システムのテスト管理者です。以下のリスクを識別しました：<br />
                        R1: 外部APIとの統合エラー（発生確率:高、影響:高）<br />
                        R2: UI の表示崩れ（発生確率:中、影響:低）<br />
                        R3: DBのデータ不整合（発生確率:低、影響:高）<br />
                        R4: ログイン機能の軽微なバグ（発生確率:低、影響:低）<br />
                        リスクベーステストでテストの優先順位として最も適切なものはどれか？
                    </p>
                    <p style={{color: "var(--text-muted)", fontSize: "0.9rem"}}>
                        A) R1 → R3 → R2 → R4 &nbsp;&nbsp; B) R1 → R2 → R3 → R4 &nbsp;&nbsp; C) R3 →
                        R1 → R2 → R4 &nbsp;&nbsp; D) R1 → R3 → R4 → R2
                    </p>
                    <div className="alert green" style={{marginTop: "1rem"}}>
                        <strong>正解: A）R1 → R3 → R2 → R4</strong><br />
                        リスクスコア（発生確率 × 影響度）で評価：R1（高×高=最高）→
                        R3（低×高=中、影響度優先）→ R2（中×低=中）→
                        R4（低×低=低）。B)はR3よりR2を優先している点で誤り。C)はR3を最初にしている点で誤り。
                    </div>
                </div>

                <div className="trend-card" style={{marginBottom: "1.5rem"}}>
                    <h4>問2（K2 / Section 1.5 テストプロセス改善）</h4>
                    <p>
                        IDEALモデルの「Diagnosing（診断）」フェーズで実施するアクティビティとして最も適切なものはどれか？
                    </p>
                    <p style={{color: "var(--text-muted)", fontSize: "0.9rem"}}>
                        A) テスト改善のビジョンとスポンサーシップを確立する<br />B)
                        現在のテストプロセスを評価し、改善が必要な領域を特定する<br />C)
                        具体的な改善計画とアクションプランを策定する<br />D)
                        パイロット改善を実施してフィードバックを収集する
                    </p>
                    <div className="alert green" style={{marginTop: "1rem"}}>
                        <strong>正解: B）現状評価・ギャップ分析・課題特定</strong><br />
                        I(Initiating)=A, <strong>D(Diagnosing)=B ✅</strong>, E(Establishing)=C,
                        A(Acting)=D, L(Learning)=成果評価・教訓記録
                    </div>
                </div>

                <div className="trend-card" style={{marginBottom: "1.5rem"}}>
                    <h4>問3（K4 / Section 2.1 テストメトリクス）</h4>
                    <p>
                        プロジェクト終盤：テスト実行率95%・合格率82%・重大欠陥残存5件・要件カバレッジ88%。リリース判断で最重要な考慮事項は？
                    </p>
                    <p style={{color: "var(--text-muted)", fontSize: "0.9rem"}}>
                        A) 実行率95%達成のためリリース可能 &nbsp; B) 合格率90%未達のためリリース不可
                        &nbsp; C) 重大欠陥5件の解決またはリスク受容を決定する必要がある &nbsp; D)
                        カバレッジ100%未達のためリリース不可
                    </p>
                    <div className="alert green" style={{marginTop: "1rem"}}>
                        <strong>正解: C）重大欠陥の残存が最重要</strong><br />
                        リリース判断の最重要基準は「重大欠陥の残存数」。A)は欠陥状況を無視。B)は合格率より欠陥の重大度が優先。D)は100%カバレッジは現実的に困難で88%は許容範囲内。
                    </div>
                </div>

                <div className="trend-card" style={{marginBottom: "1.5rem"}}>
                    <h4>問4（K3 / Section 2.2 テスト見積もり）</h4>
                    <p>
                        過去データ：要件1件あたり3TC、1TCの実行に平均2時間。新PJの要件数120件、リスク調整係数1.2。調整後の工数は？
                    </p>
                    <p style={{color: "var(--text-muted)", fontSize: "0.9rem"}}>
                        A) 720時間 &nbsp; B) 864時間 &nbsp; C) 960時間 &nbsp; D) 1,440時間
                    </p>
                    <div className="alert green" style={{marginTop: "1rem"}}>
                        <strong>正解: B）864時間</strong><br />
                        計算：TC数 = 120 × 3 = 360TC → 基本工数 = 360 × 2 = 720時間 → リスク調整後 =
                        720 × 1.2 = <strong>864時間</strong>
                    </div>
                </div>

                <div className="trend-card">
                    <h4>問5（K2 / Section 3.2 品質のコスト）</h4>
                    <p>「本番環境でのバグ修正コスト」はPAFモデルのどのカテゴリに分類されるか？</p>
                    <p style={{color: "var(--text-muted)", fontSize: "0.9rem"}}>
                        A) 予防コスト &nbsp; B) 評価コスト &nbsp; C) 内部失敗コスト &nbsp; D)
                        外部失敗コスト
                    </p>
                    <div className="alert green" style={{marginTop: "1rem"}}>
                        <strong>正解: D）外部失敗コスト</strong><br />
                        本番環境 = ユーザーに届いた後 =
                        外部失敗コスト。内部失敗コストはテスト・開発中に発見された欠陥の修正費用。
                    </div>
                </div>

                <h3 style={{marginTop: "2rem"}}>🏆 テスト管理成功の10の鉄則</h3>
                <ol className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div className="step-content">
                            <strong>リスクで優先順位を決める</strong>
                            <p>
                                感覚ではなくリスクスコア（確率×影響）で判断。高リスク箇所に最大工数を投入
                            </p>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div className="step-content">
                            <strong>テスト計画は早期に・適応的に</strong>
                            <p>
                                プロジェクト開始と同時に計画を開始。コンテキスト変化に合わせて継続的に更新
                            </p>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div className="step-content">
                            <strong>メトリクスで意思決定する</strong>
                            <p>実行率・合格率・欠陥密度のトレンドと単点の両方を見る</p>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div className="step-content">
                            <strong>見積もりは複数技法を組み合わせる</strong>
                            <p>
                                三点見積もり（PERT）で不確実性を考慮。過去データがあれば類推法も活用
                            </p>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">5</span>
                        <div className="step-content">
                            <strong>欠陥管理は透明に・迅速に</strong>
                            <p>
                                欠陥情報を隠さずステークホルダーと共有。根本原因分析でプロセス改善につなげる
                            </p>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">6</span>
                        <div className="step-content">
                            <strong>チームは人材投資が最重要</strong>
                            <p>
                                スキルマトリクスで強み・弱みを可視化。70:20:10モデルで継続的な育成を支援
                            </p>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">7</span>
                        <div className="step-content">
                            <strong>テストの価値をビジネス言語で伝える</strong>
                            <p>
                                ROI・CoQでテストの価値を定量化。「コスト」ではなく「投資」として提示
                            </p>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">8</span>
                        <div className="step-content">
                            <strong>ステークホルダーとの信頼関係を築く</strong>
                            <p>悪いニュースも素早く・透明に伝える。対象別に適切な粒度で報告</p>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">9</span>
                        <div className="step-content">
                            <strong>IDEALサイクルで継続的改善を</strong>
                            <p>レトロスペクティブで教訓を確実に次に活かす。小さな改善を継続</p>
                        </div>
                    </li>
                    <li>
                        <span className="step-num">10</span>
                        <div className="step-content">
                            <strong>コンテキストに合わせてアプローチを適応</strong>
                            <p>
                                ウォーターフォール・アジャイル・ハイブリッドに応じて戦略を変える。「唯一の正解」はない
                            </p>
                        </div>
                    </li>
                </ol>
            </div>
        </section>

        {/* ============================================================
     REFERENCES
     ============================================================ */}
        <section className="section" id="references">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num" style={{background: "var(--neon-green)"}}>REF</span>
                    <div>
                        <h2>参照URL一覧</h2>
                        <p style={{margin: "0", color: "var(--text-muted)", fontSize: "0.9rem"}}>
                            カテゴリ別・全リンク一覧
                        </p>
                    </div>
                </div>

                <h3>🏛️ 公式 ISTQB® リソース</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-category">公式認定ページ</div>
                        <div className="ref-title">CTAL-TM v3.0 認定ページ</div>
                        <div className="ref-url">
                            <a
                                href="https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/"
                                target="_blank"
                                rel="noopener"
                                >istqb.org/certifications/ctal-tm-v3-0</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">公式シラバス PDF</div>
                        <div className="ref-title">CTAL-TM v3.0 シラバス（ASTQB）</div>
                        <div className="ref-url">
                            <a
                                href="https://astqb.org/assets/documents/ISTQB_CTAL-TM_Syllabus_v3.0.pdf"
                                target="_blank"
                                rel="noopener"
                                >astqb.org/assets/…CTAL-TM_Syllabus_v3.0.pdf</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">サンプル試験</div>
                        <div className="ref-title">公式サンプル試験問題</div>
                        <div className="ref-url">
                            <a
                                href="https://istqb.org/?sdm_process_download=1&download_id=3449"
                                target="_blank"
                                rel="noopener"
                                >istqb.org/sample-exam-questions</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">サンプル試験解答</div>
                        <div className="ref-title">公式サンプル試験解答</div>
                        <div className="ref-url">
                            <a
                                href="https://istqb.org/?sdm_process_download=1&download_id=3451"
                                target="_blank"
                                rel="noopener"
                                >istqb.org/sample-exam-answers</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">試験構造</div>
                        <div className="ref-title">試験構造とルール v1.2</div>
                        <div className="ref-url">
                            <a
                                href="https://istqb.org/?sdm_process_download=1&download_id=3829"
                                target="_blank"
                                rel="noopener"
                                >istqb.org/exam-structure-rules</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">認定ガイドライン</div>
                        <div className="ref-title">CTAL-TM v3.0 認定ガイドライン</div>
                        <div className="ref-url">
                            <a
                                href="https://istqb.org/?sdm_process_download=1&download_id=3459"
                                target="_blank"
                                rel="noopener"
                                >istqb.org/accreditation-guidelines</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">グロッサリー</div>
                        <div className="ref-title">ISTQB グロッサリー（全用語検索）</div>
                        <div className="ref-url">
                            <a
                                href="https://glossary.istqb.org/en_US/search?term="
                                target="_blank"
                                rel="noopener"
                                >glossary.istqb.org</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">プレスリリース</div>
                        <div className="ref-title">CTAL-TM v3.0 正式リリース発表</div>
                        <div className="ref-url">
                            <a
                                href="https://istqb.org/istqb-release-the-certified-tester-advanced-level-test-management-version-3-0-ctal-tm-v3-0-certification/"
                                target="_blank"
                                rel="noopener"
                                >istqb.org/ctal-tm-v3-press-release</a
                            >
                        </div>
                    </div>
                </div>

                <h3 style={{marginTop: "2rem"}}>📢 試験プロバイダー</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-category">試験プロバイダー</div>
                        <div className="ref-title">iSQI 試験情報（CTAL-TM v3.0）</div>
                        <div className="ref-url">
                            <a
                                href="https://isqi.org/ISTQB-Certified-Tester-Advanced-Level-Test-Management-CTAL-TM-v3.0/CT-AL-TM-V3.127"
                                target="_blank"
                                rel="noopener"
                                >isqi.org/ctal-tm-v3.0</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">プロバイダー検索</div>
                        <div className="ref-title">試験プロバイダー検索</div>
                        <div className="ref-url">
                            <a
                                href="https://istqb.org/exam-providers/"
                                target="_blank"
                                rel="noopener"
                                >istqb.org/exam-providers</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">研修プロバイダー</div>
                        <div className="ref-title">研修プロバイダー検索</div>
                        <div className="ref-url">
                            <a
                                href="https://istqb.org/training-providers/"
                                target="_blank"
                                rel="noopener"
                                >istqb.org/training-providers</a
                            >
                        </div>
                    </div>
                </div>

                <h3 style={{marginTop: "2rem"}}>🎓 学習リソース</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-category">学習ガイド</div>
                        <div className="ref-title">ISTQB.Guru CTAL-TM v3.0 ガイド</div>
                        <div className="ref-url">
                            <a
                                href="https://www.istqb.guru/test-manager/"
                                target="_blank"
                                rel="noopener"
                                >istqb.guru/test-manager</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">変更点解説</div>
                        <div className="ref-title">Tesena v3.0変更点解説（英語）</div>
                        <div className="ref-url">
                            <a
                                href="https://www.tesena.com/en/what-s-new-in-the-istqb-ctal-test-management-module/a-557/"
                                target="_blank"
                                rel="noopener"
                                >tesena.com/ctal-tm-whats-new</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">オンラインコース</div>
                        <div className="ref-title">Udemy CTAL-TM v3.0 コース</div>
                        <div className="ref-url">
                            <a
                                href="https://www.udemy.com/course/istqb-advanced-level-test-management-v30-sample-exams-2024/"
                                target="_blank"
                                rel="noopener"
                                >udemy.com/istqb-ctal-tm-v3</a
                            >
                        </div>
                    </div>
                </div>

                <h3 style={{marginTop: "2rem"}}>📖 関連資格リンク</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-category">前提資格</div>
                        <div className="ref-title">CTFL v4.0（Foundation Level）</div>
                        <div className="ref-url">
                            <a
                                href="https://istqb.org/certifications/certified-tester-foundation-level/"
                                target="_blank"
                                rel="noopener"
                                >istqb.org/ctfl-v4.0</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">Advanced Level</div>
                        <div className="ref-title">CTAL-TA v4.0（Test Analyst）</div>
                        <div className="ref-url">
                            <a
                                href="https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/"
                                target="_blank"
                                rel="noopener"
                                >istqb.org/ctal-ta-v4.0</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">Advanced Level</div>
                        <div className="ref-title">CTAL-TAE v2.0（Test Automation Eng.）</div>
                        <div className="ref-url">
                            <a
                                href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"
                                target="_blank"
                                rel="noopener"
                                >istqb.org/ctal-tae-v2.0</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">Expert Level</div>
                        <div className="ref-title">Expert Level Test Management</div>
                        <div className="ref-url">
                            <a
                                href="https://istqb.org/certifications/certified-tester-expert-level-test-management/"
                                target="_blank"
                                rel="noopener"
                                >istqb.org/expert-test-management</a
                            >
                        </div>
                    </div>
                </div>

                <h3 style={{marginTop: "2rem"}}>📋 関連標準・参考資料</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-category">成熟度モデル</div>
                        <div className="ref-title">TMMi Foundation（TMMi公式）</div>
                        <div className="ref-url">
                            <a href="https://www.tmmifoundation.org/" target="_blank" rel="noopener"
                                >tmmifoundation.org</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">品質標準</div>
                        <div className="ref-title">ISO/IEC 25010:2023 ソフトウェア品質</div>
                        <div className="ref-url">
                            <a
                                href="https://www.iso.org/standard/35733.html"
                                target="_blank"
                                rel="noopener"
                                >iso.org/standard/25010</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">セキュリティ</div>
                        <div className="ref-title">OWASP Top 10</div>
                        <div className="ref-url">
                            <a
                                href="https://owasp.org/www-project-top-ten/"
                                target="_blank"
                                rel="noopener"
                                >owasp.org/top-ten</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">ベストプラクティス</div>
                        <div className="ref-title">Google Testing Blog</div>
                        <div className="ref-url">
                            <a href="https://testing.googleblog.com/" target="_blank" rel="noopener"
                                >testing.googleblog.com</a
                            >
                        </div>
                    </div>
                    <div className="ref-card">
                        <div className="ref-category">テストピラミッド</div>
                        <div className="ref-title">Martin Fowler – Test Automation</div>
                        <div className="ref-url">
                            <a
                                href="https://martinfowler.com/articles/practical-test-pyramid.html"
                                target="_blank"
                                rel="noopener"
                                >martinfowler.com/practical-test-pyramid</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ============================================================
     FOOTER
     ============================================================ */}
        <footer>
            <div className="container">
                <p>ISTQB® CTAL-TM v3.0 完全学習ガイド | 2025年版</p>
                <p>準拠: ISTQB® CTAL-TM Syllabus v3.0 (GA 2024年5月3日正式リリース)</p>
                <p style={{marginTop: "0.75rem"}}>
                    ⚠️ 本ガイドは ISTQB®
                    が公認したトレーニング資料ではありません。公式シラバス・サンプル問題と合わせて使用してください。
                </p>
                <p>
                    試験情報の最終確認は必ず
                    <a href="https://istqb.org" target="_blank">istqb.org</a> で行ってください。
                </p>
            </div>
        </footer>
        
        </main>
    );
}
