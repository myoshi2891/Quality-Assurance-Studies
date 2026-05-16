import './istqb-ct-tas-complete-guide.css';
import NavBar from './NavBar';

export default function IstqbCtTasCompleteGuide() {
  return (
    <>

        <NavBar />

        {/*  HERO  */}
        <div className="hero">
            <div className="hero-bg"></div>
            <div className="container">
                <div className="hero-badge">ISTQB® Specialist Certification · 2025 Edition</div>
                <h1 className="hero-title">
                    <span className="dim">ISTQB® CT-TAS</span>
                    Test Automation <span className="accent">Strategy</span>
                </h1>
                <p className="hero-description">
                    組織全体でテスト自動化をどう展開するか—ツールや技術だけでなく、コスト・リスク・ROI・役割・戦略を体系的に学ぶ完全ガイド。初学者からテスト管理者まで、ステップバイステップで解説します。
                </p>
                <div className="hero-meta">
                    <div className="hero-meta-item"><span className="label">問題数</span> 40問</div>
                    <div className="hero-meta-item">
                        <span className="label">合格点</span> 32/49点 (65.3%)
                    </div>
                    <div className="hero-meta-item">
                        <span className="label">試験時間</span> 60分 (+25%)
                    </div>
                    <div className="hero-meta-item"><span className="label">前提資格</span> CTFL必須</div>
                    <div className="hero-meta-item">
                        <span className="label">バージョン</span> CT-TAS v1.0
                    </div>
                </div>
            </div>
            <div className="hero-glow"></div>
        </div>

        {/*  TABLE OF CONTENTS  */}
        <section id="toc">
            <div className="container">
                <div className="section-header">
                    <div className="section-title">
                        <span className="chapter-num">◎</span>目次・学習ロードマップ
                    </div>
                    <p className="section-desc">CT-TASシラバスの全章を体系的に学ぶためのガイドマップ</p>
                </div>
                <div className="toc-grid">
                    <a href="#ch1" className="toc-card"
                        ><div className="toc-card-num">CHAPTER 01</div>
                        <div className="toc-card-title">テスト自動化戦略の概念と全体像</div></a
                    >
                    <a href="#ch2" className="toc-card"
                        ><div className="toc-card-num">CHAPTER 02</div>
                        <div className="toc-card-title">自動化リソース・コスト・役割</div></a
                    >
                    <a href="#ch3" className="toc-card"
                        ><div className="toc-card-num">CHAPTER 03</div>
                        <div className="toc-card-title">テスト自動化の準備・SDLC統合</div></a
                    >
                    <a href="#ch4" className="toc-card"
                        ><div className="toc-card-num">CHAPTER 04</div>
                        <div className="toc-card-title">デプロイ戦略・環境管理</div></a
                    >
                    <a href="#ch5" className="toc-card"
                        ><div className="toc-card-num">CHAPTER 05</div>
                        <div className="toc-card-title">ROI・メトリクス・ビジネス価値</div></a
                    >
                    <a href="#ch6" className="toc-card"
                        ><div className="toc-card-num">CHAPTER 06</div>
                        <div className="toc-card-title">実装・改善・組織展開戦略</div></a
                    >
                    <a href="#ai" className="toc-card"
                        ><div className="toc-card-num">BONUS</div>
                        <div className="toc-card-title">AI・2025〜2026年最新トレンド</div></a
                    >
                    <a href="#exam" className="toc-card"
                        ><div className="toc-card-num">EXAM</div>
                        <div className="toc-card-title">試験対策・サンプル問題</div></a
                    >
                </div>

                <div className="callout info">
                    <div className="callout-title">⚡ CT-TAS と CTAL-TAE の重要な違い</div>
                    <p style={{"margin":"0","color":"var(--text-secondary)"}}>
                        CT-TASは<strong>「なぜ・いつ・どこで」</strong>自動化するかの戦略・計画・価値を学びます。CTAL-TAEは<strong>「どのように」</strong>実装するかの技術的詳細を学びます。試験問題もこの視点の違いを常に意識する必要があります。
                    </p>
                </div>
            </div>
        </section>

        {/*  CHAPTER 1  */}
        <section id="ch1">
            <div className="container">
                <div className="section-header">
                    <div className="section-title">
                        <span className="chapter-num">1</span>
                        テスト自動化戦略とは？—概念と全体像
                        <span className="k-level">K1・K2</span>
                    </div>
                    <p className="section-desc">テスト自動化戦略の定義・目的・成功要因を理解する</p>
                </div>

                {/*  1.1 定義  */}
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    1.1 テスト自動化戦略の定義
                </h3>
                <div className="definition-box">
                    <div className="definition-label">📖 ISTQB CT-TAS v1.0 公式定義</div>
                    <div className="definition-text">
                        「テスト自動化戦略（Test Automation
                        Strategy）とは、テクニカルなツール実装や統合の課題を超えた、組織内のテスト自動化ニーズに取り組む、<strong>体系的かつ一貫したアプローチ</strong>である。」
                    </div>
                    <div className="definition-source">
                        出典: ISTQB CT-TAS Syllabus v1.0 —
                        <a
                            href="https://istqb.org/certifications/certified-tester-test-automation-strategy-ct-tas/"
                            target="_blank"
                            >公式ページ</a
                        >
                    </div>
                </div>

                <p>
                    テスト自動化戦略は単なる「ツール選定」ではなく、<strong>組織全体でどのように自動化を展開・維持・改善するか</strong>を定義するものです。
                </p>

                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ CT-TAS（戦略）が扱うもの</div>
                        <div className="compare-item">
                            <span className="compare-icon">📊</span><span>ROI・コスト・リスク分析</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">👥</span><span>役割・責任・スキル定義</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🗺️</span><span>段階的ロードマップ策定</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🏢</span><span>組織全体への展開計画</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">📈</span><span>メトリクスと継続的改善</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🎯</span><span>ビジネス目標との整合性</span>
                        </div>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ CT-TASが扱わないもの (CTAL-TAE の範囲)</div>
                        <div className="compare-item">
                            <span className="compare-icon">🔧</span
                            ><span>フレームワーク実装コード</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">💻</span
                            ><span>テストスクリプトのコーディング</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">⚙️</span
                            ><span>ツールの設定・統合の詳細</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔨</span><span>Page Object Modelの実装</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🧪</span><span>個別テストケースの設計</span>
                        </div>
                    </div>
                </div>

                {/*  1.2 全体マップ  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    1.2 テスト自動化戦略の全体構造
                </h3>
                <p>
                    CT-TASシラバスは以下の6章で構成されています。各章は互いに連携し、組織レベルの自動化戦略を構築します。
                </p>

                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-layer-title">Ch.1 ビジョンと成功要因</div>
                        <div className="arch-layer-desc">
                            ビジネス目標に整合した自動化戦略のゴールを定義。「なぜ自動化するか」を明確にする。
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-layer-title">
                            Ch.2 リソース計画（コスト・役割・ツール）
                        </div>
                        <div className="arch-layer-desc">
                            TAE（Test Automation
                            Engineer）の役割、TCO（総所有コスト）分析、構築アプローチ選択。
                        </div>
                    </div>
                    <div className="arch-layer blue">
                        <div className="arch-layer-title">
                            Ch.3 準備（テストレベル統合・SDLC別戦略）
                        </div>
                        <div className="arch-layer-desc">
                            テストピラミッドの最適化、ウォーターフォール/アジャイル/DevOps別の自動化戦略立案。
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-layer-title">Ch.4 デプロイ・リリース戦略</div>
                        <div className="arch-layer-desc">
                            段階的展開計画、テスト環境の依存関係管理、品質ゲートの設計。
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-layer-title">
                            Ch.5 影響分析（ROI・メトリクス・価値・レポート）
                        </div>
                        <div className="arch-layer-desc">
                            ROI計算、KPI設定、ステークホルダー別レポート、ビジネス価値の測定・証明。
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-layer-title">Ch.6 実装・改善・組織展開戦略</div>
                        <div className="arch-layer-desc">
                            手動→自動化移行、TCoE設立、継続的改善サイクルで組織全体を底上げ。
                        </div>
                    </div>
                </div>

                {/*  1.3 市場規模  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    1.3 なぜ今、自動化戦略が重要か
                </h3>
                <p>最新の業界データが示すテスト自動化の実態と必要性：</p>

                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-value">518B</div>
                        <div className="metric-label">
                            ドル・世界テスト市場規模<br />2023年 (CAGR 7%↑)
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">30%</div>
                        <div className="metric-label">テストコスト削減<br />(Gartner調査)</div>
                        <div className="metric-sub">↑ 自動化導入後</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">80%</div>
                        <div className="metric-label">
                            テストサイクル時間短縮<br />(World Quality Report)
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">85%</div>
                        <div className="metric-label">カバレッジ向上率<br />(Gartner)</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">44%</div>
                        <div className="metric-label">IT責任者が「スキル不足」<br />を課題と回答</div>
                        <div className="metric-sub">→ 戦略が必要な証拠</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">1/5</div>
                        <div className="metric-label">本番欠陥を削減<br />自動化率70%超で</div>
                        <div className="metric-sub">(McKinsey)</div>
                    </div>
                </div>

                {/*  1.4 成功要因  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    1.4 自動化戦略の成功要因（5原則）
                </h3>

                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">ビジネス目標との整合性（Alignment）</div>
                            <div className="step-desc">
                                自動化の目標を組織のKPIと紐付ける。「リリース頻度を月1→週1に上げる」等、具体的なビジネス成果で語る。
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">段階的な実装（Phased Approach）</div>
                            <div className="step-desc">
                                パイロット（3ヶ月）→ 拡大（6ヶ月）→
                                組織展開（12ヶ月）と段階を踏む。リスクを最小化しながら成果を実証する。
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">保守性の確保（Maintainability）</div>
                            <div className="step-desc">
                                Page Object
                                Model等の設計パターンでスクリプトを長寿命化。「スクリプト疲弊」を防ぐアーキテクチャ設計が必須。
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">継続的な測定（Measurement）</div>
                            <div className="step-desc">
                                カバレッジ率・欠陥検出率・ROIを週次・スプリント毎に計測し、データドリブンな改善を継続する。
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <div className="step-title">ナレッジの共有（Knowledge Sharing）</div>
                            <div className="step-desc">
                                共通フレームワーク・共有ライブラリ・TCoE（テストセンターオブエクセレンス）で組織全体の能力を底上げする。
                            </div>
                        </div>
                    </li>
                </ul>

                {/*  1.5 失敗パターン  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-red)"}}>
                    1.5 よくある失敗パターン（試験頻出）
                </h3>

                <div className="arch-layers">
                    <div className="arch-layer red">
                        <div className="arch-layer-title">❌ 失敗1: 戦略なしで始める</div>
                        <div className="arch-layer-desc">
                            方向性なく自動化を進めると重複・非効率が蔓延。「何を、なぜ自動化するか」を先に定義すること。
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-layer-title">❌ 失敗2: ツール先行の意思決定</div>
                        <div className="arch-layer-desc">
                            「Seleniumを使おう」から始まるプロジェクトは失敗しやすい。まず目的・スコープを定め、それに合ったツールを選ぶ。
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-layer-title">❌ 失敗3: 経営陣のサポートがない</div>
                        <div className="arch-layer-desc">
                            C-suiteのスポンサーシップなしに予算・人材は確保できない。ビジネスケースの作成がTASの最初のタスク。
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-layer-title">❌ 失敗4: 保守コストを過小評価</div>
                        <div className="arch-layer-desc">
                            テストスクリプトの維持コストが最大の継続コスト。アプリ変更のたびにスクリプト修正が必要になる「スクリプト疲弊」を計画に含める。
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-layer-title">
                            ❌ 失敗5: 「100%自動化」という非現実的な目標
                        </div>
                        <div className="arch-layer-desc">
                            探索的テスト・ユーザビリティ確認は人間が担う。70:20:10ピラミッド比率を守り、高価値テストに絞る。
                        </div>
                    </div>
                </div>

                <div className="callout warning">
                    <div className="callout-title">⚠️ 試験のポイント：CT-TAS vs CTAL-TAE</div>
                    <p style={{"margin":"0","color":"var(--text-secondary)"}}>
                        試験問題で「実装の詳細」を問うものはCTAL-TAEの範囲です。CT-TASは常に<strong>「戦略・計画・ビジネス視点」</strong>で回答してください。
                    </p>
                </div>
            </div>
        </section>

        {/*  CHAPTER 2  */}
        <section id="ch2">
            <div className="container">
                <div className="section-header">
                    <div className="section-title">
                        <span className="chapter-num">2</span>
                        テスト自動化のリソース—コスト・役割・構築方法
                        <span className="k-level">K2・K3</span>
                    </div>
                    <p className="section-desc">
                        TCO分析、主要ロールの定義、自動化ソリューション構築のアプローチを学ぶ
                    </p>
                </div>

                {/*  2.1 TCO  */}
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    2.1 総所有コスト（TCO）の全体像
                </h3>
                <p>
                    テスト自動化の導入判断にはTCO（Total Cost of
                    Ownership）の正確な把握が不可欠です。「ツールが無料だから安い」は大きな誤解です。
                </p>

                <div className="arch-layers">
                    <div className="arch-layer amber">
                        <div className="arch-layer-title">初期投資コスト（Initial Investment）</div>
                        <div className="arch-layer-desc">
                            ツール・ライセンス費用 ／ インフラ・ハードウェア ／ TAE採用・教育費 ／
                            初期フレームワーク構築工数
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-layer-title">
                            継続コスト（Ongoing Costs）— 最大の見落としポイント
                        </div>
                        <div className="arch-layer-desc">
                            テストスクリプト保守費用（UI変更のたびに必要）／ ツール更新費用 ／
                            インフラ維持費 ／ 継続トレーニング費
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-layer-title">隠れたコスト（Hidden Costs）</div>
                        <div className="arch-layer-desc">
                            フレーキーテスト調査・対応工数 ／ テスト環境の整備 ／ テストデータ管理
                            ／ チームの学習曲線（Learning Curve）
                        </div>
                    </div>
                </div>

                <h4 style={{"margin":"1.5rem 0 1rem","color":"var(--neon-amber)"}}>
                    📊 実際のコスト計算例（中規模プロジェクト）
                </h4>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>コスト項目</th>
                                <th>単価</th>
                                <th>数量/期間</th>
                                <th>合計</th>
                                <th>区分</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>TAE 採用・育成</td>
                                <td>—</td>
                                <td>1回</td>
                                <td>120万円</td>
                                <td><span className="tag tag-amber">初期</span></td>
                            </tr>
                            <tr>
                                <td>ツールライセンス（年間）</td>
                                <td>60万円/年</td>
                                <td>1年</td>
                                <td>60万円</td>
                                <td><span className="tag tag-amber">初期+継続</span></td>
                            </tr>
                            <tr>
                                <td>フレームワーク構築工数</td>
                                <td>—</td>
                                <td>1回</td>
                                <td>80万円</td>
                                <td><span className="tag tag-amber">初期</span></td>
                            </tr>
                            <tr>
                                <td>インフラ初期構築</td>
                                <td>—</td>
                                <td>1回</td>
                                <td>30万円</td>
                                <td><span className="tag tag-amber">初期</span></td>
                            </tr>
                            <tr>
                                <td>TAE 人件費</td>
                                <td>40万円/月</td>
                                <td>18ヶ月</td>
                                <td>720万円</td>
                                <td><span className="tag tag-red">継続</span></td>
                            </tr>
                            <tr>
                                <td>スクリプト保守工数</td>
                                <td>10万円/月</td>
                                <td>18ヶ月</td>
                                <td>180万円</td>
                                <td><span className="tag tag-red">継続</span></td>
                            </tr>
                            <tr style={{"background":"rgba(0, 229, 255, 0.05)"}}>
                                <td><strong>18ヶ月間の総コスト</strong></td>
                                <td>—</td>
                                <td>—</td>
                                <td><strong style={{"color":"var(--neon-cyan)"}}>1,190万円</strong></td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>手動テスト（比較）</td>
                                <td>40万円/月×3名</td>
                                <td>18ヶ月</td>
                                <td>2,160万円</td>
                                <td><span className="tag tag-green">削減比較</span></td>
                            </tr>
                            <tr style={{"background":"rgba(0, 255, 159, 0.05)"}}>
                                <td><strong>削減額</strong></td>
                                <td>—</td>
                                <td>—</td>
                                <td>
                                    <strong style={{"color":"var(--neon-green)"}}
                                        >970万円 (45%削減)</strong
                                    >
                                </td>
                                <td>—</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/*  2.2 リスク  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    2.2 テスト自動化の主要リスクと対策
                </h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>リスク</th>
                                <th>発生原因</th>
                                <th>対策</th>
                                <th>優先度</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>ROIが期待を下回る</strong></td>
                                <td>自動化範囲の選定ミス、保守コスト過小評価</td>
                                <td>リスクベースで対象選定、TCOモデルを事前作成</td>
                                <td><span className="tag tag-red">高</span></td>
                            </tr>
                            <tr>
                                <td><strong>フレーキーテスト増加</strong></td>
                                <td>UIの頻繁な変更、非安定なロケーター使用</td>
                                <td>Page Object Model採用、安定した要素識別</td>
                                <td><span className="tag tag-red">高</span></td>
                            </tr>
                            <tr>
                                <td><strong>人材・スキル不足</strong></td>
                                <td>採用難・育成コスト</td>
                                <td>段階的スキルアップ、外部TAEの活用</td>
                                <td><span className="tag tag-red">高</span></td>
                            </tr>
                            <tr>
                                <td><strong>ツール選定ミス</strong></td>
                                <td>要件分析不足、ベンダーロックイン</td>
                                <td>PoC実施、オープンソース優先検討</td>
                                <td><span className="tag tag-amber">中</span></td>
                            </tr>
                            <tr>
                                <td><strong>変更管理の失敗</strong></td>
                                <td>組織文化への考慮不足、現場の抵抗</td>
                                <td>チェンジマネジメント計画の立案</td>
                                <td><span className="tag tag-amber">中</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/*  2.3 Roles  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    2.3 主要ロールと責任（試験頻出！）
                </h3>

                <div className="info-grid">
                    <div className="info-card">
                        <div className="info-card-icon">🎯</div>
                        <div className="info-card-title" style={{"color":"var(--neon-green)"}}>
                            テストアーキテクト
                        </div>
                        <div className="info-card-desc">
                            自動化フレームワークの設計・選定。テストレベル間の統合設計。技術標準・ガイドラインの策定。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">📊</div>
                        <div className="info-card-title" style={{"color":"var(--neon-cyan)"}}>
                            テストマネージャー
                        </div>
                        <div className="info-card-desc">
                            テスト自動化計画の承認・監督。リスク管理・メトリクス評価。ステークホルダーへの報告。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">💻</div>
                        <div className="info-card-title" style={{"color":"var(--neon-blue)"}}>
                            TAE (Test Automation Engineer)
                        </div>
                        <div className="info-card-desc">
                            自動化スクリプトの開発・保守。CI/CDパイプラインへの統合。テストフレームワークの実装。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">📋</div>
                        <div className="info-card-title" style={{"color":"var(--neon-amber)"}}>
                            テストアナリスト
                        </div>
                        <div className="info-card-desc">
                            自動化すべきテストケースの特定・設計。ビジネスドメイン知識によるテスト要件の整理。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">🔬</div>
                        <div className="info-card-title" style={{"color":"var(--neon-purple)"}}>
                            SME（ドメイン専門家）
                        </div>
                        <div className="info-card-desc">
                            ビジネスドメイン知識の提供。テスト目標の策定。受入基準の定義。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">⚙️</div>
                        <div className="info-card-title" style={{"color":"var(--neon-red)"}}>開発者</div>
                        <div className="info-card-desc">
                            テスタビリティの確保。ユニットテストの作成。TDD/BDDの実践。CI/CDパイプラインの維持。
                        </div>
                    </div>
                </div>

                <h4 style={{"margin":"1.5rem 0 1rem","color":"var(--neon-cyan)"}}>
                    TAEに必要なスキルセット
                </h4>

                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-label">プログラミング言語 (Java/Python/JS)</span
                        ><span className="progress-pct">必須</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar" style={{ [""]: "" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-label"
                            >テスト自動化フレームワーク (Selenium/Playwright)</span
                        ><span className="progress-pct">必須</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar" style={{ [""]: "" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-label">CI/CDツール (Jenkins/GitHub Actions)</span
                        ><span className="progress-pct">必須</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar" style={{ [""]: "" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-label">バージョン管理 (Git)</span
                        ><span className="progress-pct">必須</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar" style={{ [""]: "" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-label">クラウドプラットフォーム (AWS/Azure)</span
                        ><span className="progress-pct">推奨</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar" style={{ [""]: "" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-header">
                        <span className="progress-label">コミュニケーション・問題解決力</span
                        ><span className="progress-pct">必須</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar" style={{ [""]: "" } as React.CSSProperties}></div>
                    </div>
                </div>

                {/*  2.4 建築アプローチ  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    2.4 自動化ソリューション構築アプローチの選択
                </h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>アプローチ</th>
                                <th>✅ メリット</th>
                                <th>❌ デメリット</th>
                                <th>適用場面</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>内製（In-house）</strong></td>
                                <td>コスト・ガバナンスが内部に収まる。カスタマイズ自由。</td>
                                <td>初期構築に時間・スキルが必要。</td>
                                <td>長期プロジェクト、社内スキルがある組織</td>
                            </tr>
                            <tr>
                                <td><strong>商用ツール（非カスタム）</strong></td>
                                <td>導入が早い。サポートが充実。</td>
                                <td>ライセンス費用高。ベンダーロックイン。</td>
                                <td>中小組織、短期間で効果を出したい</td>
                            </tr>
                            <tr>
                                <td><strong>商用ツール（カスタム可）</strong></td>
                                <td>柔軟性と専門サポートの両立。</td>
                                <td>費用が高い。</td>
                                <td>大規模組織、複雑な要件</td>
                            </tr>
                            <tr>
                                <td><strong>アウトソーシング</strong></td>
                                <td>専門TAEチームを即時確保。</td>
                                <td>組織内ナレッジが蓄積しにくい。</td>
                                <td>スキル不足の急ぎプロジェクト</td>
                            </tr>
                            <tr>
                                <td><strong>クラウドSaaS型</strong></td>
                                <td>インフラコスト削減。多デバイス対応。</td>
                                <td>データセキュリティ考慮が必要。</td>
                                <td>モバイル・クロスブラウザテスト</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout info">
                    <div className="callout-title">💡 ツール評価のポイント（試験頻出）</div>
                    <p style={{"margin":"0","color":"var(--text-secondary)"}}>
                        ツール選定は「技術適合性・チームスキル・コスト・CI/CD統合・スケーラビリティ・コミュニティ」の6軸で評価します。必ずPoC（概念実証）を実施してから本格導入を決定してください。
                    </p>
                </div>
            </div>
        </section>

        {/*  CHAPTER 3  */}
        <section id="ch3">
            <div className="container">
                <div className="section-header">
                    <div className="section-title">
                        <span className="chapter-num">3</span>
                        テスト自動化の準備—テストレベル統合・SDLC別戦略
                        <span className="k-level">K2・K3</span>
                    </div>
                    <p className="section-desc">
                        テストピラミッドの最適化と、各SDLCモデル別の自動化戦略
                    </p>
                </div>

                {/*  3.1 テストピラミッド  */}
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    3.1 テストピラミッドと戦略的配分
                </h3>
                <p>
                    テスト自動化の最重要アーキテクチャ原則。各レベルの比率を守ることがコストと品質のバランスを最適化します。
                </p>

                <div className="pyramid">
                    <div className="pyramid-level p-e2e">
                        <div className="pl-title">E2E / UIテスト</div>
                        <div className="pl-pct">~10% ／ ゆっくり・高コスト</div>
                    </div>
                    <div className="pyramid-level p-intg">
                        <div className="pl-title">統合テスト（APIテスト）</div>
                        <div className="pl-pct">~20% ／ 中程度の速さ</div>
                    </div>
                    <div className="pyramid-level p-unit">
                        <div className="pl-title">ユニットテスト</div>
                        <div className="pl-pct">~70% ／ 超高速・低コスト・安定</div>
                    </div>
                    <div className="pyramid-label">↑ 推奨比率: ユニット70% : 統合20% : E2E 10% ↑</div>
                </div>

                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ ピラミッド型（理想）</div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>ユニットテストが豊富（高速・安定）</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔵</span><span>APIテストで統合確認</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔴</span><span>E2Eは最重要フローのみ</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">⚡</span><span>CI実行時間: 10〜30分</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">💰</span><span>保守コストが低い</span>
                        </div>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ アイスクリームコーン型（アンチパターン）</div>
                        <div className="compare-item">
                            <span className="compare-icon">🔴</span><span>E2Eテストが多すぎる</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔵</span><span>統合テストが中程度</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span><span>ユニットテストが少ない</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🐢</span><span>CI実行時間: 2〜6時間</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">💸</span
                            ><span>保守コストが爆発的に高い</span>
                        </div>
                    </div>
                </div>

                {/*  3.2 各テストレベル  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    3.2 各テストレベルの自動化戦略
                </h3>

                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-layer-title">ユニットテスト（70%）</div>
                        <div className="arch-layer-desc">
                            開発者が作成・維持（Shift-Left）。TDDとの相性が最高。<br />
                            <strong>ツール:</strong> JUnit
                            5（Java）、pytest（Python）、Jest（JS/TS）、NUnit（C#）<br />
                            <strong>目標:</strong> コードカバレッジ &gt; 80%、実行時間 &lt; 2分
                        </div>
                    </div>
                    <div className="arch-layer blue">
                        <div className="arch-layer-title">統合テスト / APIテスト（20%）</div>
                        <div className="arch-layer-desc">
                            UIなしでバックエンドを直接テスト →
                            安定性が高い。マイクロサービスで特に重要。<br />
                            <strong>ツール:</strong> REST
                            Assured（Java）、requests（Python）、Postman/Newman<br />
                            <strong>目標:</strong> 主要APIの全エンドポイントカバレッジ、実行時間
                            &lt; 10分
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-layer-title">E2Eテスト / UIテスト（10%）</div>
                        <div className="arch-layer-desc">
                            クリティカルユーザーパス（ログイン・購入等）のみに絞る。Page Object
                            Model必須。<br />
                            <strong>ツール:</strong>
                            Playwright、Cypress（Web）、Appium（Mobile）<br />
                            <strong>目標:</strong> フレーキー率 &lt; 5%、実行時間 &lt; 30分
                        </div>
                    </div>
                </div>

                {/*  3.3 SDLC  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    3.3 SDLCモデル別の自動化戦略（試験頻出！）
                </h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>SDLCモデル</th>
                                <th>特性</th>
                                <th>課題</th>
                                <th>推奨自動化戦略</th>
                                <th>ROI回収</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="tag tag-cyan">ウォーターフォール</span></td>
                                <td>テストフェーズが後半に集中</td>
                                <td>投資回収が次プロジェクトまで</td>
                                <td>回帰テスト中心・再利用設計</td>
                                <td>遅い</td>
                            </tr>
                            <tr>
                                <td><span className="tag tag-green">アジャイル</span></td>
                                <td>2〜4週スプリント・頻繁リリース</td>
                                <td>毎スプリント回帰テスト増加</td>
                                <td>BDD+TDD・DoD に自動化要件含める</td>
                                <td>速い</td>
                            </tr>
                            <tr>
                                <td><span className="tag tag-amber">DevOps/継続的CD</span></td>
                                <td>全コミットでデプロイ可能</td>
                                <td>テスト実行時間がボトルネック</td>
                                <td>全レベル統合・並列実行・品質ゲート</td>
                                <td>最速</td>
                            </tr>
                            <tr>
                                <td><span className="tag tag-purple">ハイブリッド</span></td>
                                <td>WF+アジャイルの混在</td>
                                <td>プロセスの統一が困難</td>
                                <td>マスター計画+スプリント計画の二層化</td>
                                <td>中</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 style={{"margin":"1.5rem 0 0.75rem","color":"var(--neon-green)"}}>
                    アジャイルでの自動化ポイント
                </h4>
                <div className="code-block" data-lang="Gherkin / BDD">
                    <pre><div className="code-line"><span className="code-comment"># 仕様をGherkin記法で記述し、テストコードに自動変換</span></div>
<div className="code-line"><span className="code-keyword">Feature:</span> <span className="code-cyan">ショッピングカートへの商品追加</span></div>
<div className="code-line">{""}</div>
<div className="code-line">  <span className="code-keyword">Scenario:</span> <span className="code-cyan">正常系 - 在庫ある商品をカートに追加</span></div>
<div className="code-line">    <span className="code-keyword">Given</span> ユーザーが商品詳細ページ「ノートPC X1」にいる</div>
<div className="code-line">    <span className="code-keyword">And</span>   商品の在庫が <span className="code-num">5</span> 個以上ある</div>
<div className="code-line">    <span className="code-keyword">When</span>  「カートに追加」ボタンをクリックする</div>
<div className="code-line">    <span className="code-keyword">Then</span>  カートに商品が追加される</div>
<div className="code-line">    <span className="code-keyword">And</span>   カートのアイコンに「<span className="code-num">1</span>」と表示される</div>
<div className="code-line">{""}</div>
<div className="code-line">  <span className="code-keyword">Scenario:</span> <span className="code-red">異常系 - 在庫切れ商品はカートに追加できない</span></div>
<div className="code-line">    <span className="code-keyword">Given</span> 商品「限定版モデル」の在庫が <span className="code-num">0</span> 個</div>
<div className="code-line">    <span className="code-keyword">When</span>  「カートに追加」ボタンをクリックしようとする</div>
<div className="code-line">    <span className="code-keyword">Then</span>  「在庫切れ」の警告が表示される</div>
<div className="code-line">    <span className="code-keyword">And</span>   カートに商品は追加されない</div></pre>
                </div>

                <h4 style={{"margin":"1.5rem 0 0.75rem","color":"var(--neon-amber)"}}>
                    DevOpsパイプラインでの自動化フロー
                </h4>
                <div className="flow">
                    <div className="flow-item">
                        <div className="flow-arrow">①</div>
                        <div className="flow-body">
                            <div className="flow-title">
                                コードコミット → ユニットテスト（即時・&lt;2分）
                            </div>
                            <div className="flow-desc">
                                全コミットで実行。失敗したら開発者に即時フィードバック。マージは禁止。
                            </div>
                        </div>
                    </div>
                    <div className="flow-item">
                        <div className="flow-arrow">②</div>
                        <div className="flow-body">
                            <div className="flow-title">
                                プルリクエスト → 統合・APIテスト（&lt;10分）
                            </div>
                            <div className="flow-desc">
                                マージ前に実行。失敗=マージ禁止+チームへ通知。
                            </div>
                        </div>
                    </div>
                    <div className="flow-item">
                        <div className="flow-arrow">③</div>
                        <div className="flow-body">
                            <div className="flow-title">
                                デイリービルド → E2Eスモークテスト（&lt;30分）
                            </div>
                            <div className="flow-desc">
                                クリティカルフローのみ確認。失敗時はテスト担当者へ通知、バグ登録。
                            </div>
                        </div>
                    </div>
                    <div className="flow-item">
                        <div className="flow-arrow">④</div>
                        <div className="flow-body">
                            <div className="flow-title">
                                リリース前 → フルリグレッション（&lt;2時間）
                            </div>
                            <div className="flow-desc">
                                全自動化テスト実行。品質ゲート判定 → リリース可否の最終決定。
                            </div>
                        </div>
                    </div>
                </div>

                {/*  3.4 自動化対象選定  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    3.4 「何を自動化すべきか」の判断基準
                </h3>

                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 自動化に向いているテスト</div>
                        <div className="compare-item">
                            <span className="compare-icon">🔄</span
                            ><span>回帰テスト（繰り返し実行するもの）</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">💨</span
                            ><span>スモークテスト・サニティチェック</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">📊</span
                            ><span>データ駆動テスト（多数の入力パターン）</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">⚡</span
                            ><span>パフォーマンス・負荷テスト</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🌐</span
                            ><span>クロスブラウザ・クロスデバイステスト</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔁</span
                            ><span>単純なEnd-to-Endフロー（ログイン→購入）</span>
                        </div>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 手動テストが向いているテスト</div>
                        <div className="compare-item">
                            <span className="compare-icon">🔍</span
                            ><span>探索的テスト（創造性・直感が必要）</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🎨</span
                            ><span>ユーザビリティテスト（UX評価）</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">1️⃣</span
                            ><span>初回テスト（最初の仕様確認）</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔀</span
                            ><span>頻繁に変わる機能のテスト</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🎲</span><span>アドホックテスト</span>
                        </div>
                    </div>
                </div>

                <div className="callout warning">
                    <div className="callout-title">⚠️ 自動化実現可能性チェックリスト（試験頻出）</div>
                    <p style={{"color":"var(--text-secondary)","marginBottom":"0.5rem"}}>技術的観点：</p>
                    <ul style={{"color":"var(--text-secondary)","margin":"0 0 0.5rem 1.5rem"}}>
                        <li>SUTはテスタビリティが確保されているか？（ID・ロケーター等）</li>
                        <li>ツールが技術スタックをサポートしているか？</li>
                        <li>テスト実行環境が安定しているか？</li>
                    </ul>
                    <p style={{"color":"var(--text-secondary)","marginBottom":"0.5rem"}}>組織的観点：</p>
                    <ul style={{"color":"var(--text-secondary)","margin":"0 0 0 1.5rem"}}>
                        <li>必要なスキルを持つTAEが確保できるか？</li>
                        <li>経営陣のサポート・予算は確保されているか？</li>
                        <li>長期的なメンテナンス体制が構築できるか？</li>
                    </ul>
                </div>
            </div>
        </section>

        {/*  CHAPTER 4  */}
        <section id="ch4">
            <div className="container">
                <div className="section-header">
                    <div className="section-title">
                        <span className="chapter-num">4</span>
                        テスト自動化のデプロイ戦略・環境管理
                        <span className="k-level">K2・K3</span>
                    </div>
                    <p className="section-desc">
                        段階的展開計画、テスト環境の依存関係管理、品質ゲートの設計
                    </p>
                </div>

                {/*  4.1 デプロイ戦略  */}
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    4.1 デプロイ戦略の3パターン
                </h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>パターン</th>
                                <th>✅ メリット</th>
                                <th>❌ デメリット</th>
                                <th>推奨場面</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>段階的展開 (推奨)</strong></td>
                                <td>リスク最小・成果実証後に拡大</td>
                                <td>展開まで時間がかかる</td>
                                <td>ほぼすべての組織（初回導入）</td>
                            </tr>
                            <tr>
                                <td><strong>ビッグバン展開</strong></td>
                                <td>早期に統一アプローチが確立</td>
                                <td>失敗時の影響が大きい</td>
                                <td>小規模組織・経験豊富チーム</td>
                            </tr>
                            <tr>
                                <td><strong>フィーチャーベース展開</strong></td>
                                <td>既存システムへの影響が小さい</td>
                                <td>旧機能の自動化が遅れる</td>
                                <td>レガシーシステムがある組織</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 style={{"margin":"1.5rem 0 1rem","color":"var(--neon-green)"}}>
                    段階的展開のロードマップ（推奨パターン）
                </h4>
                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">フェーズ1: パイロット（0〜3ヶ月）</div>
                            <div className="step-desc">
                                対象：1〜2機能・1チームのみ。ツール検証・プロセス確立・ROI実証。成功基準：選定機能の回帰テスト実行時間50%短縮。
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">フェーズ2: 拡大（4〜9ヶ月）</div>
                            <div className="step-desc">
                                対象：複数機能・複数チームへ展開。共通フレームワーク確立・ナレッジ共有。成功基準：主要機能の回帰テスト80%自動化。
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">フェーズ3: 組織展開（10〜18ヶ月）</div>
                            <div className="step-desc">
                                対象：全プロジェクト・全テストレベル。継続的テストの実現・CI/CD完全統合。成功基準：テスト実行サイクル時間を手動比80%削減。
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">フェーズ4: 最適化（継続）</div>
                            <div className="step-desc">
                                AI活用（セルフヒーリング）、高度な分析・予測、組織ナレッジライブラリの充実。
                            </div>
                        </div>
                    </li>
                </ul>

                {/*  4.2 環境管理  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    4.2 テスト環境の種類と役割
                </h3>

                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-layer-title">開発環境（Development）</div>
                        <div className="arch-layer-desc">
                            用途：ユニットテスト・コンポーネントテスト実行。開発者のローカル環境＋CI/CD連携。
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-layer-title">統合環境（Integration / QA）</div>
                        <div className="arch-layer-desc">
                            用途：統合テスト・APIテスト・機能テスト実行。複数コンポーネントの連携を確認する共有環境。
                        </div>
                    </div>
                    <div className="arch-layer blue">
                        <div className="arch-layer-title">
                            ステージング環境（Staging / Pre-Production）
                        </div>
                        <div className="arch-layer-desc">
                            用途：E2Eテスト・回帰テスト・パフォーマンステスト。本番と同等の構成で実施。
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-layer-title">本番環境（Production）</div>
                        <div className="arch-layer-desc">
                            用途：本番監視テスト（Synthetic
                            Monitoring）。本番環境でのスモークテスト・継続的監視。
                        </div>
                    </div>
                </div>

                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    4.3 テスト環境の依存関係と解決策
                </h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>依存関係の問題</th>
                                <th>解決策</th>
                                <th>ツール例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>外部サービスへの依存（決済API等）</td>
                                <td>サービス仮想化・モック化</td>
                                <td>WireMock、MockServer</td>
                            </tr>
                            <tr>
                                <td>データベースの状態依存</td>
                                <td>テスト前後のデータリセット・ファクトリ</td>
                                <td>Flyway、Liquibase</td>
                            </tr>
                            <tr>
                                <td>環境間の差異（Dev≠Staging≠Prod）</td>
                                <td>Infrastructure as Code (IaC)、コンテナ化</td>
                                <td>Docker、Kubernetes、Terraform</td>
                            </tr>
                            <tr>
                                <td>テスト環境共有によるコンフリクト</td>
                                <td>テスト専用環境・並列実行の独立化</td>
                                <td>Kubernetes Namespace</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/*  4.4 テストデータ  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    4.4 テストデータ管理の4アプローチ
                </h3>

                <div className="info-grid">
                    <div className="info-card">
                        <div className="info-card-icon">📌</div>
                        <div className="info-card-title">静的テストデータ</div>
                        <div className="info-card-desc">
                            事前にDBへ投入した固定データ。シンプルだが、テスト間で状態が汚染されやすい。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">⚡</div>
                        <div className="info-card-title">動的テストデータ生成</div>
                        <div className="info-card-desc">
                            実行時にAPIやファクトリで作成。独立性が高いが、実装コストがかかる。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">🎭</div>
                        <div className="info-card-title">データモック・スタブ</div>
                        <div className="info-card-desc">
                            APIレスポンスを模倣。外部依存なし・高速だが本番との乖離リスクがある。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">🔒</div>
                        <div className="info-card-title">本番データのサニタイズ</div>
                        <div className="info-card-desc">
                            本番データを匿名化してテスト使用。リアルなデータだがGDPR等プライバシー法令対応が必要。
                        </div>
                    </div>
                </div>

                {/*  4.5 品質ゲート  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    4.5 品質ゲート（Quality Gate）の設計
                </h3>

                <div className="arch-layers">
                    <div className="arch-layer red">
                        <div className="arch-layer-title">
                            🚫 必須条件（1つでも失敗でリリースブロック）
                        </div>
                        <div className="arch-layer-desc">
                            ✅ ユニットテスト合格率: 100%<br />
                            ✅ スモークテスト: 全件PASS<br />
                            ✅ セキュリティスキャン: 重大・高リスク 0件<br />
                            ✅ パフォーマンス: 応答時間 &lt; 2秒（99パーセンタイル）
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-layer-title">⚠️ 推奨条件（警告のみ・リリース可）</div>
                        <div className="arch-layer-desc">
                            ⚠️ E2E回帰テスト合格率: &gt; 95%<br />
                            ⚠️ コードカバレッジ: &gt; 80%<br />
                            ⚠️ 技術的負債スコア: 前回比 -5%以内
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  CHAPTER 5  */}
        <section id="ch5">
            <div className="container">
                <div className="section-header">
                    <div className="section-title">
                        <span className="chapter-num">5</span>
                        ROI・メトリクス・ビジネス価値・レポート
                        <span className="k-level">K2・K3・K4</span>
                    </div>
                    <p className="section-desc">テスト自動化の投資対効果の計算・証明・報告方法を学ぶ</p>
                </div>

                {/*  5.1 ROI  */}
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    5.1 ROI計算の基本式と実例
                </h3>

                <div className="definition-box">
                    <div className="definition-label">📐 ROI計算式</div>
                    <div
                        className="definition-text"
                        style={{"fontStyle":"normal","fontFamily":"var(--font-mono)","fontSize":"1rem"}}
                    >
                        ROI (%) = (年間便益 − 年間コスト) ÷ 年間コスト × 100<br /><br />
                        年間便益 = 人件費削減額 + 品質改善効果 + リリース速度向上効果 +
                        リスク低減価値<br />
                        年間コスト = ライセンス + 保守 + サポート + トレーニング<br />
                        回収期間 = 総初期投資額 ÷ 月次便益発生額
                    </div>
                </div>

                <h4 style={{"margin":"1.5rem 0 1rem","color":"var(--neon-amber)"}}>
                    📊 実例計算：ECサイトの回帰テスト自動化（18ヶ月）
                </h4>
                <div className="code-block" data-lang="ROI計算">
                    <pre><div className="code-line"><span className="code-comment">【現状：手動テスト】</span></div>
<div className="code-line">テスター 3名 × 月40万円 × 18ヶ月 = <span className="code-amber">2,160万円</span></div>
<div className="code-line">1回の回帰テスト: 5日間 × 3名 = 15人日</div>
<div className="code-line">年間リリース: 12回 → 年間工数: 180人日/年 = 576万円</div>
<div className="code-line">{""}</div>
<div className="code-line"><span className="code-comment">【自動化導入後のコスト】</span></div>
<div className="code-line">初期投資（フレームワーク構築）: <span className="code-red">200万円</span></div>
<div className="code-line">ツールライセンス（年間）:        <span className="code-red"> 60万円</span></div>
<div className="code-line">TAE 1名（維持・開発）:          <span className="code-red">480万円/年</span></div>
<div className="code-line">自動化後の回帰テスト工数:         32万円/年</div>
<div className="code-line">{""}</div>
<div className="code-line"><span className="code-comment">【便益計算】</span></div>
<div className="code-line">手動テスト削減: 180人日 → 10人日 = <span className="code-green">170人日削減</span></div>
<div className="code-line">削減コスト: 170 × 3.2万円/人日 = <span className="code-green">544万円/年</span></div>
<div className="code-line">{""}</div>
<div className="code-line"><span className="code-comment">【ROI（18ヶ月）】</span></div>
<div className="code-line">総便益: 544万円 × 1.5年 = <span className="code-green">816万円</span></div>
<div className="code-line">総コスト: 200万円 + (60+480+32)万円 × 1.5年 = <span className="code-red">1,076万円</span></div>
<div className="code-line">ROI = (816 - 1,076) ÷ 1,076 × 100 = <span className="code-amber">-24%（2年目以降黒字化）</span></div>
<div className="code-line">{""}</div>
<div className="code-line"><span className="code-comment">※ 品質改善・リリース速度向上効果を含めると3年累計ROIは150〜300%に</span></div></pre>
                </div>

                <div className="callout warning">
                    <div className="callout-title">⚠️ ROI計算の重要注意点</div>
                    <p style={{"margin":"0","color":"var(--text-secondary)"}}>
                        初年度はTAE人件費・初期投資が重く、多くの場合マイナスになります。<strong>2〜3年の累計で評価</strong>することが正確なROI計算のポイントです。経営層への説明では「回収期間（Payback
                        Period）」を明示してください。
                    </p>
                </div>

                {/*  5.2 メトリクス  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    5.2 テスト自動化メトリクス 5カテゴリ（試験頻出！）
                </h3>

                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-layer-title">カテゴリ1: カバレッジメトリクス</div>
                        <div className="arch-layer-desc">
                            テストカバレッジ率 = 自動化テスト数 / 総テストケース数 × 100%<br />
                            要件カバレッジ（自動化でカバーされた要件 / 全要件）<br />
                            コードカバレッジ（テストが実行したコード行 / 全コード行）
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-layer-title">カテゴリ2: 効率性メトリクス</div>
                        <div className="arch-layer-desc">
                            テスト実行時間（自動 vs 手動の比較）<br />
                            テスト実行頻度（1日あたり / 1スプリントあたり）<br />
                            フレーキーテスト率（不安定テスト数 / 総自動化テスト数）<br />
                            テスト保守工数（スクリプト修正にかけた時間）
                        </div>
                    </div>
                    <div className="arch-layer blue">
                        <div className="arch-layer-title">カテゴリ3: 品質メトリクス</div>
                        <div className="arch-layer-desc">
                            欠陥検出率（自動化で検出した欠陥 / 全欠陥）<br />
                            欠陥漏洩率 Defect Leakage（本番に漏れた欠陥 / 全欠陥）<br />
                            偽陽性率（誤ってFAILしたテスト / 全FAILテスト）
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-layer-title">カテゴリ4: コスト・ROIメトリクス</div>
                        <div className="arch-layer-desc">
                            自動化ROI（削減コスト − 投資コスト）/ 投資コスト × 100%<br />
                            テスト1件あたりのコスト<br />
                            投資回収期間（Break-even Point）
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-layer-title">カテゴリ5: デリバリーメトリクス</div>
                        <div className="arch-layer-desc">
                            デプロイ頻度（自動化前後のリリース頻度比較）<br />
                            フィードバックループ時間（コミットからテスト結果取得まで）<br />
                            リードタイム（開発着手からリリースまで）<br />
                            変更失敗率（デプロイ後の障害発生率）
                        </div>
                    </div>
                </div>

                {/*  5.3 ステークホルダー別レポート  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    5.3 ステークホルダー別レポート設計（試験頻出！）
                </h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ステークホルダー</th>
                                <th>頻度</th>
                                <th>形式</th>
                                <th>主要指標</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>経営層・CTO</strong></td>
                                <td>月1回</td>
                                <td>エグゼクティブサマリー（1ページ）</td>
                                <td>ROI（%）、リリース頻度、本番障害数、投資継続判断材料</td>
                            </tr>
                            <tr>
                                <td><strong>テストマネージャー</strong></td>
                                <td>週1回</td>
                                <td>管理ダッシュボード</td>
                                <td>カバレッジ推移、フレーキーテスト一覧、欠陥傾向分析</td>
                            </tr>
                            <tr>
                                <td><strong>開発者</strong></td>
                                <td>即時（CI/CD）</td>
                                <td>コミットフィードバック</td>
                                <td>失敗テストのスタックトレース、スクリーンショット、ログ</td>
                            </tr>
                            <tr>
                                <td><strong>QAチーム</strong></td>
                                <td>スプリント毎</td>
                                <td>詳細分析レポート</td>
                                <td>実行時間内訳、環境別比較、新規自動化候補</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout info">
                    <div className="callout-title">💡 経営層への説明で失敗しないポイント</div>
                    <ul style={{"margin":"0","color":"var(--text-secondary)"}}>
                        <li>
                            <strong>❌「テストカバレッジを80%に上げます」</strong> → 技術用語すぎる
                        </li>
                        <li>
                            <strong
                                >✅「毎月1回のリリースを週1回に増やし、競合より3倍速く機能を届けます」</strong
                            >
                        </li>
                        <li>
                            定量的データ（「40%のテスト時間削減」）と投資回収期間を必ずセットで提示
                        </li>
                        <li>失敗した場合の撤退基準と損失見込みも明示することで信頼感が増す</li>
                    </ul>
                </div>

                {/*  5.4 ビジネス価値  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    5.4 テスト自動化がもたらすビジネス価値
                </h3>

                <div className="info-grid">
                    <div className="info-card">
                        <div className="info-card-icon">🚀</div>
                        <div className="info-card-title" style={{"color":"var(--neon-green)"}}>
                            市場投入時間の短縮
                        </div>
                        <div className="info-card-desc">
                            回帰テスト時間80%削減により、月1リリース→週1〜日次リリースが実現可能。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">💰</div>
                        <div className="info-card-title" style={{"color":"var(--neon-cyan)"}}>
                            コスト削減
                        </div>
                        <div className="info-card-desc">
                            手動テスト工数を最大30%削減（Gartner）。本番バグの早期発見でコストを1/10〜1/100に。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">🎯</div>
                        <div className="info-card-title" style={{"color":"var(--neon-amber)"}}>品質向上</div>
                        <div className="info-card-desc">
                            24時間365日のテスト実行。人為的ミスの排除による一貫した品質確保。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">😊</div>
                        <div className="info-card-title" style={{"color":"var(--neon-purple)"}}>
                            エンジニア満足度向上
                        </div>
                        <div className="info-card-desc">
                            単純反復作業からの解放。高付加価値な探索的テスト・アーキテクチャ改善への時間を確保。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">🔒</div>
                        <div className="info-card-title" style={{"color":"var(--neon-red)"}}>
                            コンプライアンス対応
                        </div>
                        <div className="info-card-desc">
                            テスト実行ログの自動記録によるGDPR/HIPAA等の規制要件へのトレーサビリティ確保。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">⚡</div>
                        <div className="info-card-title" style={{"color":"var(--neon-blue)"}}>
                            組織のアジリティ向上
                        </div>
                        <div className="info-card-desc">
                            変更への恐怖が減少し、新機能実験が容易に。イノベーションを加速させる安全網として機能。
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  CHAPTER 6  */}
        <section id="ch6">
            <div className="container">
                <div className="section-header">
                    <div className="section-title">
                        <span className="chapter-num">6</span>
                        実装・改善・組織全体への展開戦略
                        <span className="k-level">K2・K3</span>
                    </div>
                    <p className="section-desc">
                        手動→自動化への移行計画、TCoE設立、継続的改善サイクル
                    </p>
                </div>

                {/*  6.1 移行  */}
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    6.1 手動テストから継続的テストへの移行
                </h3>

                <div className="flow">
                    <div className="flow-item">
                        <div className="flow-arrow">A</div>
                        <div className="flow-body">
                            <div className="flow-title">現状評価（Assessment）</div>
                            <div className="flow-desc">
                                既存手動テストのインベントリ作成。自動化候補を「自動化ROI ×
                                実行可能性」でスコアリング。
                            </div>
                        </div>
                    </div>
                    <div className="flow-item">
                        <div className="flow-arrow">B</div>
                        <div className="flow-body">
                            <div className="flow-title">パイロット（Pilot）</div>
                            <div className="flow-desc">
                                最もROIが高いテスト10〜20件を自動化。ツール・フレームワークの実証。チームの学習。
                            </div>
                        </div>
                    </div>
                    <div className="flow-item">
                        <div className="flow-arrow">C</div>
                        <div className="flow-body">
                            <div className="flow-title">拡大（Scale）</div>
                            <div className="flow-desc">
                                パイロット結果でフレームワーク標準化。手動テストを順次自動化。CI/CDパイプラインへの完全組み込み。
                            </div>
                        </div>
                    </div>
                    <div className="flow-item">
                        <div className="flow-arrow">D</div>
                        <div className="flow-body">
                            <div className="flow-title">最適化（Optimize）</div>
                            <div className="flow-desc">
                                自動化カバレッジ最大化。フレーキーテストの根絶。AI/MLの活用開始。
                            </div>
                        </div>
                    </div>
                </div>

                <h4 style={{"margin":"1.5rem 0 1rem","color":"var(--neon-red)"}}>
                    ⚠️ 移行時のよくある落とし穴
                </h4>
                <div className="arch-layers">
                    <div className="arch-layer red">
                        <div className="arch-layer-title">
                            ❌ 落とし穴1: 「まず100%自動化する」という目標設定
                        </div>
                        <div className="arch-layer-desc">
                            非現実的で維持コストが爆発する。解決策：高価値・高頻度テストに絞り、70:20:10ピラミッドを守る。
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-layer-title">❌ 落とし穴2: 手動テストを即座に廃止する</div>
                        <div className="arch-layer-desc">
                            探索的テスト等の価値が失われる。解決策：手動と自動のハイブリッドを維持し、段階的移行する。
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-layer-title">
                            ❌ 落とし穴3: テストコードをプロダクションコードより粗末に扱う
                        </div>
                        <div className="arch-layer-desc">
                            保守不能なスパゲッティコードになる。解決策：コードレビュー必須化、設計パターン（POM等）適用。
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-layer-title">
                            ❌ 落とし穴4: スキルトレーニングを後回しにする
                        </div>
                        <div className="arch-layer-desc">
                            自動化投資が無駄になる。解決策：導入と並行してトレーニング計画を実行。
                        </div>
                    </div>
                </div>

                {/*  6.2 TCoE  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    6.2 テストセンターオブエクセレンス（TCoE）
                </h3>
                <p>
                    組織横断的なテスト自動化の品質・効率・ナレッジを管理する専門チーム。大規模組織では特に重要です。
                </p>

                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ TCoEの主な役割</div>
                        <div className="compare-item">
                            <span className="compare-icon">📐</span
                            ><span>組織全体の自動化標準・ガイドライン策定</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔧</span
                            ><span>共通フレームワーク・ライブラリの維持・発展</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">📚</span
                            ><span>ベストプラクティスの収集・普及</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🎓</span
                            ><span>新入メンバーのトレーニング</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">📊</span
                            ><span>自動化成熟度の評価と改善推進</span>
                        </div>
                    </div>
                    <div className="compare-box good">
                        <div className="compare-label">✅ TCoEが提供するビジネス価値</div>
                        <div className="compare-item">
                            <span className="compare-icon">♻️</span
                            ><span>重複作業の排除（各チームが同じものを作らない）</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">📈</span
                            ><span>品質の底上げ（ベストプラクティスを全チームへ）</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">💰</span
                            ><span>コスト削減（共通ライブラリの再利用）</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🏆</span
                            ><span>スキル向上（組織全体の自動化能力）</span>
                        </div>
                    </div>
                </div>

                <h4 style={{"margin":"1.5rem 0 0.75rem","color":"var(--neon-cyan)"}}>
                    組織横断で共有すべき自動化アセット
                </h4>
                <div className="arch-layers">
                    <div className="arch-layer cyan">
                        <div className="arch-layer-title">共有ライブラリ（Shared Libraries）</div>
                        <div className="arch-layer-desc">
                            共通テストユーティリティ（ログイン処理・待機関数等）、標準アサーション関数、テストデータファクトリ、レポーティング共通モジュール
                        </div>
                    </div>
                    <div className="arch-layer blue">
                        <div className="arch-layer-title">共通フレームワーク（Framework）</div>
                        <div className="arch-layer-desc">
                            ページオブジェクトの基底クラス、CI/CD統合テンプレート、設定管理（環境変数の一元管理）、テスト実行スクリプト
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-layer-title">ドキュメント・標準</div>
                        <div className="arch-layer-desc">
                            テストコーディング規約、ネーミングコンベンション、テストケース設計ガイドライン、オンボーディングガイド
                        </div>
                    </div>
                </div>

                {/*  6.3 継続的改善  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    6.3 継続的改善（PDCA）サイクル
                </h3>

                <div className="info-grid">
                    <div className="info-card">
                        <div className="info-card-icon">📋</div>
                        <div className="info-card-title" style={{"color":"var(--neon-blue)"}}>
                            Plan（計画）
                        </div>
                        <div className="info-card-desc">
                            メトリクス目標設定、改善施策立案。フレーキーテスト削減目標、カバレッジ拡大計画など。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">⚙️</div>
                        <div className="info-card-title" style={{"color":"var(--neon-green)"}}>
                            Do（実行）
                        </div>
                        <div className="info-card-desc">
                            フレームワーク改善、新ツール導入、スキルアップ研修の実施。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">📊</div>
                        <div className="info-card-title" style={{"color":"var(--neon-cyan)"}}>
                            Check（評価）
                        </div>
                        <div className="info-card-desc">
                            KPI測定、ステークホルダーフィードバック収集。改善前後のメトリクス比較。
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-icon">🔄</div>
                        <div className="info-card-title" style={{"color":"var(--neon-amber)"}}>
                            Act（改善）
                        </div>
                        <div className="info-card-desc">
                            成功施策の標準化。失敗施策の廃棄・修正。次のPDCAサイクルへ。
                        </div>
                    </div>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>頻度</th>
                                <th>レビュー内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>週次</td>
                                <td>メトリクスレビュー、フレーキーテスト対応</td>
                            </tr>
                            <tr>
                                <td>スプリント毎</td>
                                <td>自動化カバレッジ確認、保守工数評価</td>
                            </tr>
                            <tr>
                                <td>四半期毎</td>
                                <td>戦略レビュー、ツール評価、ROI報告</td>
                            </tr>
                            <tr>
                                <td>年次</td>
                                <td>長期ロードマップ見直し、組織成熟度評価</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/*  AI & TRENDS  */}
        <section id="ai">
            <div className="container">
                <div className="section-header">
                    <div className="section-title">
                        <span className="chapter-num">AI</span>
                        AIと最新トレンド（2025〜2026年）
                        <span className="k-level">参考情報</span>
                    </div>
                    <p className="section-desc">
                        AI/MLがテスト自動化をどう変えているか — 最新動向と実践的活用法
                    </p>
                </div>

                <div className="trend-grid">
                    <div className="trend-card">
                        <div className="trend-num">01</div>
                        <div className="trend-title">セルフヒーリングテスト</div>
                        <div className="trend-desc">
                            UIが変更されてもテストスクリプトが自動修正。従来の「スクリプト疲弊」問題を80〜90%削減。<br /><br /><strong
                                >ツール例:</strong
                            >
                            Testim、Mabl、Tricentis Vision AI
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-num">02</div>
                        <div className="trend-title">AIによるテストケース自動生成</div>
                        <div className="trend-desc">
                            LLM（GPT-4等）に仕様書を入力してテストコードを生成。エッジケース・境界値を自動発見。作成時間を60〜70%削減。
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-num">03</div>
                        <div className="trend-title">予測的品質分析</div>
                        <div className="trend-desc">
                            過去データからバグ発生箇所を予測。テスト優先順位を動的に最適化。リスクの高い変更に自動でテストリソースを集中。
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-num">04</div>
                        <div className="trend-title">ビジュアルAIテスト</div>
                        <div className="trend-desc">
                            スクリーンショット比較をAIで実施。UI崩れを自動検出。<br /><br /><strong
                                >ツール例:</strong
                            >
                            Applitools Eyes、Percy
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-num">05</div>
                        <div className="trend-title">ローコード/ノーコード自動化</div>
                        <div className="trend-desc">
                            非技術者もテストを作成できるプラットフォームが台頭。テスト民主化（Testing
                            Democratization）が加速。<br /><br /><strong>ツール例:</strong>
                            Leapwork、BugBug
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-num">06</div>
                        <div className="trend-title">自律テストモデルへの移行</div>
                        <div className="trend-desc">
                            「AIが要件→モデル生成→テスト実行→結果分析」を完全自動化するサイクルへ。銀行・金融業界を中心に加速中（QA
                            Financial 2026）。
                        </div>
                    </div>
                </div>

                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-amber)"}}>
                    AIツール活用のベストプラクティス（試験外・実務向け）
                </h3>

                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ AIを正しく使う</div>
                        <div className="compare-item">
                            <span className="compare-icon">🔍</span
                            ><span>PoCで実用性を必ず検証する</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">👁️</span
                            ><span>AIが生成したテストは人間がレビューする</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🎯</span
                            ><span>「何をテストするか」の戦略は人間が決定</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">📊</span
                            ><span>False Positiveに常に注意する</span>
                        </div>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ AIの過信は禁物</div>
                        <div className="compare-item">
                            <span className="compare-icon">🤖</span
                            ><span>AIを「魔法のソリューション」と思わない</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">📚</span
                            ><span>テスト設計・品質思考の知識は依然必要</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">💰</span
                            ><span>ツールコストを過小評価しない</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔄</span
                            ><span>テスト戦略をAIに丸投げしない</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  EXAM TIPS  */}
        <section id="exam">
            <div className="container">
                <div className="section-header">
                    <div className="section-title">
                        <span className="chapter-num">試</span>
                        ISTQB CT-TAS 試験対策・サンプル問題
                        <span className="k-level">試験情報</span>
                    </div>
                    <p className="section-desc">
                        試験の特殊性、配点、頻出パターンと6週間学習ロードマップ
                    </p>
                </div>

                {/*  試験スペック  */}
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    試験スペック（他ISTQB試験と異なる点）
                </h3>

                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-value">40</div>
                        <div className="metric-label">問題数</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">49</div>
                        <div className="metric-label">総得点（重み付きあり！）</div>
                        <div className="metric-sub">1点・2点・3点問題が混在</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">32</div>
                        <div className="metric-label">合格点（65.3%）</div>
                        <div className="metric-sub">難しい問題ほど高得点</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">60</div>
                        <div className="metric-label">試験時間（分）</div>
                        <div className="metric-sub">非英語圏 +25%=75分</div>
                    </div>
                </div>

                <div className="alert amber">
                    ⚠️
                    重要：CT-TASは問題に重み付け（1・2・3点）があります。難しい問題を確実に取ることが合格の鍵です。全40問必ず解答（未回答=0点）。
                </div>
                <div className="alert cyan">
                    受験資格：CTFL v4.0の認定 +
                    実務経験の証明が必要。受験前に必ず公式サイトで要件を確認してください。
                </div>

                {/*  章別配点  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>章別ウェイトと重要度</h3>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.1 目標・成功要因</div>
                        <div className="exam-card-pct">~15%</div>
                        <div className="star-rating">★★★☆☆</div>
                        <div className="exam-card-desc">
                            CT-TASの定義、CTAL-TAEとの違い、成功要因の特定
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.2 自動化リソース</div>
                        <div className="exam-card-pct">~20%</div>
                        <div className="star-rating">★★★★☆</div>
                        <div className="exam-card-desc">
                            TCOの構成要素、TAEの役割、構築アプローチの選択
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.3 準備・SDLC統合</div>
                        <div className="exam-card-pct">~20%</div>
                        <div className="star-rating">★★★★☆</div>
                        <div className="exam-card-desc">
                            テストピラミッド、SDLC別戦略、実現可能性評価
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.4 デプロイ・環境</div>
                        <div className="exam-card-pct">~20%</div>
                        <div className="star-rating">★★★★☆</div>
                        <div className="exam-card-desc">段階的展開、環境依存管理、品質ゲート設計</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.5 影響分析</div>
                        <div className="exam-card-pct">~15%</div>
                        <div className="star-rating">★★★★★</div>
                        <div className="exam-card-desc">
                            ROI計算、メトリクス5カテゴリ、ステークホルダー別レポート
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.6 実装・改善</div>
                        <div className="exam-card-pct">~10%</div>
                        <div className="star-rating">★★★☆☆</div>
                        <div className="exam-card-desc">移行ステップ、TCoE、継続的改善サイクル</div>
                    </div>
                </div>

                {/*  頻出パターン  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>
                    頻出問題パターンと解答アプローチ
                </h3>

                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">
                                「このシナリオで最適な自動化アプローチは？」
                            </div>
                            <div className="step-desc">
                                → スコープ・リスク・コスト・スキルを確認 → 段階的展開 vs ビッグバン
                                →
                                <strong>通常は段階的が正解</strong
                                >。SUTの特性（Web/API/組み込み）でツールを選ぶ。
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">「ROIを最大化するには？」</div>
                            <div className="step-desc">
                                → <strong>高頻度・繰り返し・安定したテストを優先</strong>自動化 →
                                保守コストを最小化するフレームワーク設計 →
                                CI/CDへの統合でフィードバックループを短縮。
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">
                                「どのメトリクスをどのステークホルダーに提示する？」
                            </div>
                            <div className="step-desc">
                                → 経営層: ROI・リリース頻度・コスト / テストマネージャー:
                                カバレッジ・欠陥検出率 / 開発者: 失敗詳細・実行時間
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">
                                「なぜこの自動化プロジェクトは失敗したか？」
                            </div>
                            <div className="step-desc">
                                → 経営陣サポートなし=戦略的コミットメント不足 /
                                ROI実証できない=メトリクス不足 / スクリプト保守コスト増大=設計問題 /
                                スキル不足=トレーニング不足
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <div className="step-title">「CT-TASとCTAL-TAEの違いは？」</div>
                            <div className="step-desc">
                                → CT-TAS:
                                戦略・計画・価値・組織展開（<strong>WHY・WHEN・WHERE</strong>）/
                                CTAL-TAE: 技術実装・ツール・フレームワーク（<strong>HOW</strong>）
                            </div>
                        </div>
                    </li>
                </ul>

                {/*  サンプル問題  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>サンプル問題と解説</h3>

                <div className="card" style={{"marginBottom":"1rem"}}>
                    <div
                        style={{"fontFamily":"var(--font-mono)","fontSize":"0.78rem","color":"var(--neon-amber)","marginBottom":"0.75rem"}}
                    >
                        Q1 — K2 レベル
                    </div>
                    <p style={{"fontWeight":"600","marginBottom":"0.75rem"}}>
                        テスト自動化戦略（CT-TAS）とテスト自動化エンジニアリング（CTAL-TAE）の最も重要な違いはどれか？
                    </p>
                    <div
                        style={{"display":"flex","flexDirection":"column","gap":"0.5rem","marginBottom":"1rem"}}
                    >
                        <div
                            style={{"padding":"0.6rem 1rem","border":"1px solid var(--border)","borderRadius":"var(--radius)","fontSize":"0.9rem"}}
                        >
                            A. TAEはSeleniumを使い、TASはPlaywrightを使う
                        </div>
                        <div
                            style={{"padding":"0.6rem 1rem","border":"1px solid rgba(0, 255, 159, 0.4)","borderRadius":"var(--radius)","fontSize":"0.9rem","background":"rgba(0, 255, 159, 0.05)","color":"var(--neon-green)"}}
                        >
                            B.
                            TASは組織レベルの戦略・コスト・ROI・展開計画に焦点を当て、TAEは技術的な実装詳細に焦点を当てる
                            ✅
                        </div>
                        <div
                            style={{"padding":"0.6rem 1rem","border":"1px solid var(--border)","borderRadius":"var(--radius)","fontSize":"0.9rem"}}
                        >
                            C. TASはアジャイル専用で、TAEはウォーターフォール専用である
                        </div>
                        <div
                            style={{"padding":"0.6rem 1rem","border":"1px solid var(--border)","borderRadius":"var(--radius)","fontSize":"0.9rem"}}
                        >
                            D. TAEのほうがTASより上位の資格である
                        </div>
                    </div>
                    <div className="alert green">
                        解説：CT-TASは「なぜ・いつ・どこで」自動化するかの戦略を扱い、CTAL-TAEは「どのように」実装するかを扱います。両者は補完関係にあり、どちらが上位という関係ではありません。
                    </div>
                </div>

                <div className="card" style={{"marginBottom":"1rem"}}>
                    <div
                        style={{"fontFamily":"var(--font-mono)","fontSize":"0.78rem","color":"var(--neon-amber)","marginBottom":"0.75rem"}}
                    >
                        Q2 — K3 レベル（2点問題）
                    </div>
                    <p style={{"fontWeight":"600","marginBottom":"0.75rem"}}>
                        新規プロジェクトでテスト自動化を導入する際、最初にすべきことはどれか？
                    </p>
                    <div
                        style={{"display":"flex","flexDirection":"column","gap":"0.5rem","marginBottom":"1rem"}}
                    >
                        <div
                            style={{"padding":"0.6rem 1rem","border":"1px solid var(--border)","borderRadius":"var(--radius)","fontSize":"0.9rem"}}
                        >
                            A. まずSeleniumのPoCを実施してスクリプトを書き始める
                        </div>
                        <div
                            style={{"padding":"0.6rem 1rem","border":"1px solid var(--border)","borderRadius":"var(--radius)","fontSize":"0.9rem"}}
                        >
                            B. 自動化フレームワークのアーキテクチャを設計する
                        </div>
                        <div
                            style={{"padding":"0.6rem 1rem","border":"1px solid rgba(0, 255, 159, 0.4)","borderRadius":"var(--radius)","fontSize":"0.9rem","background":"rgba(0, 255, 159, 0.05)","color":"var(--neon-green)"}}
                        >
                            C.
                            ビジネス目標・スコープ・TCO・ROI期待値を明確にし、ステークホルダーのコミットメントを得る
                            ✅
                        </div>
                        <div
                            style={{"padding":"0.6rem 1rem","border":"1px solid var(--border)","borderRadius":"var(--radius)","fontSize":"0.9rem"}}
                        >
                            D. 最も多くのテストケースを自動化できるツールを選定する
                        </div>
                    </div>
                    <div className="alert green">
                        解説：CT-TASの最優先事項は「戦略と目標の明確化」です。ツール選定・実装より前に、ビジネス目標との整合性・TCO分析・経営陣のスポンサーシップが必要です。
                    </div>
                </div>

                <div className="card">
                    <div
                        style={{"fontFamily":"var(--font-mono)","fontSize":"0.78rem","color":"var(--neon-amber)","marginBottom":"0.75rem"}}
                    >
                        Q3 — K3 レベル（2点問題）
                    </div>
                    <p style={{"fontWeight":"600","marginBottom":"0.75rem"}}>
                        テスト自動化のROI計算において、しばしば見落とされる「最大の継続コスト」はどれか？
                    </p>
                    <div
                        style={{"display":"flex","flexDirection":"column","gap":"0.5rem","marginBottom":"1rem"}}
                    >
                        <div
                            style={{"padding":"0.6rem 1rem","border":"1px solid var(--border)","borderRadius":"var(--radius)","fontSize":"0.9rem"}}
                        >
                            A. ツールのライセンス更新費用
                        </div>
                        <div
                            style={{"padding":"0.6rem 1rem","border":"1px solid rgba(0, 255, 159, 0.4)","borderRadius":"var(--radius)","fontSize":"0.9rem","background":"rgba(0, 255, 159, 0.05)","color":"var(--neon-green)"}}
                        >
                            B.
                            アプリケーション変更のたびに発生するテストスクリプトの保守費用（スクリプト疲弊）
                            ✅
                        </div>
                        <div
                            style={{"padding":"0.6rem 1rem","border":"1px solid var(--border)","borderRadius":"var(--radius)","fontSize":"0.9rem"}}
                        >
                            C. テスト実行環境のクラウド利用料
                        </div>
                        <div
                            style={{"padding":"0.6rem 1rem","border":"1px solid var(--border)","borderRadius":"var(--radius)","fontSize":"0.9rem"}}
                        >
                            D. 初期フレームワーク構築の工数
                        </div>
                    </div>
                    <div className="alert green">
                        解説：テストスクリプトの保守費用はTCOの中で最大の継続コストです。UIの変更・機能追加のたびにスクリプト修正が必要になる「スクリプト疲弊」を計画に含めないとROI計算が大きくずれます。
                    </div>
                </div>

                {/*  6週間学習ロードマップ  */}
                <div className="divider"></div>
                <h3 style={{"marginBottom":"1rem","color":"var(--neon-cyan)"}}>6週間学習ロードマップ</h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>週</th>
                                <th>学習内容</th>
                                <th>成果物・目標</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="tag tag-cyan">Week 1</span></td>
                                <td>
                                    全体像の把握：CT-TAS Syllabus v1.0
                                    を1周読む。CTFLの復習。CT-TASとCTAL-TAEの違いを明確化。
                                </td>
                                <td>シラバス構造の把握と全6章の概要理解</td>
                            </tr>
                            <tr>
                                <td><span className="tag tag-cyan">Week 2</span></td>
                                <td>
                                    コアコンセプト深掘り（Ch.1〜3）：成功要因・TCO・役割・テストピラミッド・SDLC別戦略
                                </td>
                                <td>テストピラミッドと各SDLCの戦略を図解でまとめる</td>
                            </tr>
                            <tr>
                                <td><span className="tag tag-cyan">Week 3</span></td>
                                <td>
                                    計画・デプロイ戦略（Ch.4〜5）：自動化ソリューション計画のステップ暗記、ROI計算実践
                                </td>
                                <td>ROI計算を手を動かして3パターン練習</td>
                            </tr>
                            <tr>
                                <td><span className="tag tag-cyan">Week 4</span></td>
                                <td>
                                    影響分析・改善戦略（Ch.5〜6）：ステークホルダー別レポート設計、TCoEの役割、移行の落とし穴
                                </td>
                                <td>メトリクス5カテゴリを全暗記</td>
                            </tr>
                            <tr>
                                <td><span className="tag tag-amber">Week 5</span></td>
                                <td>
                                    模擬試験と弱点補強：ISTQB公式 Sample Exam v1.2
                                    を解く。間違えた問題をシラバスに戻って確認。
                                </td>
                                <td>模擬試験で32/49点以上を安定して取れる状態</td>
                            </tr>
                            <tr>
                                <td><span className="tag tag-amber">Week 6</span></td>
                                <td>
                                    最終仕上げ：全シラバスのポイントを要約ノート整理。重要用語の定義確認。時間配分を意識した模擬試験。
                                </td>
                                <td>1.5分/問のペースで全40問解答できる</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout info">
                    <div className="callout-title">📥 公式学習資料のダウンロードリンク</div>
                    <ul style={{"margin":"0","color":"var(--text-secondary)"}}>
                        <li>
                            <a
                                href="https://istqb.org/?sdm_process_download=1&download_id=3571"
                                target="_blank"
                                >CT-TAS Syllabus v1.0（PDF）</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://istqb.org/?sdm_process_download=1&download_id=3572"
                                target="_blank"
                                >Sample Exam Questions v1.2（PDF）</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://istqb.org/?sdm_process_download=1&download_id=3573"
                                target="_blank"
                                >Sample Exam Answers v1.2（PDF）</a
                            >
                        </li>
                        <li>
                            <a href="https://glossary.istqb.org/en_US/search?term=" target="_blank"
                                >ISTQB グロッサリー（用語集）</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/*  REFERENCES  */}
        <section id="refs">
            <div className="container">
                <div className="section-header">
                    <div className="section-title">
                        <span className="chapter-num">📚</span>
                        参考文献・参照URL一覧
                    </div>
                    <p className="section-desc">本ガイドで参照した全リソース（カテゴリ付き）</p>
                </div>

                <h4 style={{"marginBottom":"1rem","color":"var(--neon-amber)"}}>🏛️ ISTQB 公式リソース</h4>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-cat">公式認定ページ</div>
                        <div className="ref-title">CT-TAS 公式認定ページ</div>
                        <a
                            href="https://istqb.org/certifications/certified-tester-test-automation-strategy-ct-tas/"
                            target="_blank"
                            className="ref-url"
                            >istqb.org/certifications/ct-tas</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">公式シラバス</div>
                        <div className="ref-title">CT-TAS Syllabus v1.0 PDF</div>
                        <a
                            href="https://istqb.org/?sdm_process_download=1&download_id=3571"
                            target="_blank"
                            className="ref-url"
                            >istqb.org download_id=3571</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">模擬試験</div>
                        <div className="ref-title">Sample Exam Questions v1.2</div>
                        <a
                            href="https://istqb.org/?sdm_process_download=1&download_id=3572"
                            target="_blank"
                            className="ref-url"
                            >istqb.org download_id=3572</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">模擬試験</div>
                        <div className="ref-title">Sample Exam Answers v1.2</div>
                        <a
                            href="https://istqb.org/?sdm_process_download=1&download_id=3573"
                            target="_blank"
                            className="ref-url"
                            >istqb.org download_id=3573</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">用語集</div>
                        <div className="ref-title">ISTQB グロッサリー</div>
                        <a
                            href="https://glossary.istqb.org/en_US/search?term="
                            target="_blank"
                            className="ref-url"
                            >glossary.istqb.org</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">試験プロバイダー</div>
                        <div className="ref-title">CT-TAS 試験情報（ISQI）</div>
                        <a
                            href="https://isqi.org/ISTQB-Certified-Tester-Test-Automation-Strategy-CT-TAS/CT-TAS.331"
                            target="_blank"
                            className="ref-url"
                            >isqi.org CT-TAS.331</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">公式シラバス（BCS経由）</div>
                        <div className="ref-title">CT-TAS シラバスPDF（BCS）</div>
                        <a
                            href="https://www.bcs.org/media/xiqglmbk/istqb-test-automation-strategy-syllabus.pdf"
                            target="_blank"
                            className="ref-url"
                            >bcs.org / ct-tas-syllabus.pdf</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">試験プロバイダー検索</div>
                        <div className="ref-title">ISTQB 試験プロバイダー一覧</div>
                        <a
                            href="https://istqb.org/exam-providers/?directory_type=exam-providers"
                            target="_blank"
                            className="ref-url"
                            >istqb.org/exam-providers</a
                        >
                    </div>
                </div>

                <h4 style={{"margin":"2rem 0 1rem","color":"var(--neon-amber)"}}>💰 ROI・コスト分析</h4>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-cat">ROI最大化 (2025)</div>
                        <div className="ref-title">Boosting ROI in Test Automation</div>
                        <a
                            href="https://www.itconvergence.com/blog/boosting-roi-in-test-automation-optimization-ci-cd-and-test-reuse-strategies/"
                            target="_blank"
                            className="ref-url"
                            >itconvergence.com/blog</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ROI計算ガイド (2025)</div>
                        <div className="ref-title">Calculate Test Automation ROI</div>
                        <a
                            href="https://www.browserstack.com/guide/calculate-test-automation-roi"
                            target="_blank"
                            className="ref-url"
                            >browserstack.com/guide</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ROI詳細計算 (2025)</div>
                        <div className="ref-title">ROI on Test Automation</div>
                        <a
                            href="https://testgrid.io/blog/roi-on-test-automation/"
                            target="_blank"
                            className="ref-url"
                            >testgrid.io/blog</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ステークホルダー説明</div>
                        <div className="ref-title">Justify Automation Investment</div>
                        <a
                            href="https://www.itconvergence.com/blog/the-roi-of-test-automation-how-to-justify-investment-to-stakeholders/"
                            target="_blank"
                            className="ref-url"
                            >itconvergence.com/roi</a
                        >
                    </div>
                </div>

                <h4 style={{"margin":"2rem 0 1rem","color":"var(--neon-amber)"}}>
                    📋 戦略・ベストプラクティス
                </h4>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-cat">戦略ガイド (2025)</div>
                        <div className="ref-title">Test Automation Strategy Guide</div>
                        <a
                            href="https://www.testrail.com/blog/test-automation-strategy-guide/"
                            target="_blank"
                            className="ref-url"
                            >testrail.com/blog</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">戦略実践 (2025)</div>
                        <div className="ref-title">Automation Testing Strategy</div>
                        <a
                            href="https://www.ranorex.com/blog/test-automation-strategy/"
                            target="_blank"
                            className="ref-url"
                            >ranorex.com/blog</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">完全ガイド (2026)</div>
                        <div className="ref-title">Automation Strategy Complete Guide</div>
                        <a
                            href="https://www.theknowledgeacademy.com/blog/automation-testing-strategy/"
                            target="_blank"
                            className="ref-url"
                            >theknowledgeacademy.com/blog</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ベストプラクティス (2025)</div>
                        <div className="ref-title">Test Automation Best Practices</div>
                        <a
                            href="https://medium.com/@sancharini.panda/test-automation-strategy-best-practices-a-complete-guide-ddf0f7a530d3"
                            target="_blank"
                            className="ref-url"
                            >medium.com/@sancharini.panda</a
                        >
                    </div>
                </div>

                <h4 style={{"margin":"2rem 0 1rem","color":"var(--neon-amber)"}}>🤖 AI・最新トレンド</h4>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-cat">QAトレンド (2025)</div>
                        <div className="ref-title">QA Automation Trends 2025</div>
                        <a
                            href="https://www.browserstack.com/guide/automation-testing-trends"
                            target="_blank"
                            className="ref-url"
                            >browserstack.com/trends</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">AI×QA自動化 (2025)</div>
                        <div className="ref-title">How QA Automation is Evolving</div>
                        <a
                            href="https://www.frugaltesting.com/blog/how-qa-automation-is-evolving-trends-defining-2025-and-the-future"
                            target="_blank"
                            className="ref-url"
                            >frugaltesting.com/blog</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">自律テスト (2026)</div>
                        <div className="ref-title">Banks Shift to Autonomous Testing</div>
                        <a
                            href="https://qa-financial.com/banks-face-script-fatigue-as-qa-teams-shift-toward-autonomous-testing-models/"
                            target="_blank"
                            className="ref-url"
                            >qa-financial.com</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ツール比較 (2025)</div>
                        <div className="ref-title">Automated Testing Tools Guide 2025</div>
                        <a
                            href="https://momentic.ai/resources/the-definitive-guide-to-automated-testing-tools-2025-edition"
                            target="_blank"
                            className="ref-url"
                            >momentic.ai/resources</a
                        >
                    </div>
                </div>

                <h4 style={{"margin":"2rem 0 1rem","color":"var(--neon-amber)"}}>
                    🔄 移行・CI/CD・継続的テスト
                </h4>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-cat">移行戦略</div>
                        <div className="ref-title">Manual to Test Automation (5 strategies)</div>
                        <a
                            href="https://www.qable.io/blog/manual-testing-to-test-automation"
                            target="_blank"
                            className="ref-url"
                            >qable.io/blog</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">移行実例 (2024)</div>
                        <div className="ref-title">Transition to Automation Testing</div>
                        <a
                            href="https://research.aimultiple.com/transition-from-manual-to-automation-testing/"
                            target="_blank"
                            className="ref-url"
                            >research.aimultiple.com</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">テスト戦略 (2026)</div>
                        <div className="ref-title">Testing Strategies 2026</div>
                        <a
                            href="https://bugbug.io/blog/software-testing/testing-strategies/"
                            target="_blank"
                            className="ref-url"
                            >bugbug.io/blog</a
                        >
                    </div>
                </div>

                <div className="alert cyan" style={{"marginTop":"2rem"}}>
                    ※ 本ガイドは ISTQB CT-TAS Syllabus v1.0、Gartner・IDC・World Quality
                    Report等の業界レポート、および2025〜2026年の最新研究・実践データを基に作成されています。試験情報・受験資格は変更される可能性があるため、受験前に必ず
                    <a href="https://istqb.org" target="_blank">istqb.org</a>
                    で最新情報を確認してください。
                </div>
            </div>
        </section>

        {/*  FOOTER  */}
        <footer
            style={{"background":"var(--bg-mid)","borderTop":"1px solid var(--border)","padding":"3rem 0"}}
        >
            <div className="container" style={{"textAlign":"center"}}>
                <div
                    style={{"fontFamily":"var(--font-mono)","fontSize":"0.85rem","color":"var(--neon-green)","marginBottom":"1rem"}}
                >
                    CT-TAS 完全ガイド 2025
                </div>
                <p
                    style={{"color":"var(--text-muted)","fontSize":"0.85rem","maxWidth":"600px","margin":"0 auto"}}
                >
                    ISTQB® CT-TAS
                    v1.0準拠。本ガイドはISTQB®が公認したトレーニング資料ではありません。公式シラバス・サンプル問題と合わせてご使用ください。
                </p>
                <div style={{"marginTop":"1.5rem"}}>
                    <a
                        href="https://istqb.org/certifications/certified-tester-test-automation-strategy-ct-tas/"
                        target="_blank"
                        style={{"fontFamily":"var(--font-mono)","fontSize":"0.82rem","color":"var(--neon-cyan)"}}
                        >🔗 ISTQB CT-TAS 公式ページ</a
                    >
                </div>
            </div>
        </footer>
    
    </>
  );
}
