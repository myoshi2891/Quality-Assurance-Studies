import NavBar from './NavBar';
import './istqb-ct-mbt-complete-guide.css';

export const metadata = {
    title: 'ISTQB® CT-MBT 完全ガイド 2025 | Model-Based Tester',
    description: 'ISTQB® Certified Tester – Model-Based Tester (CT-MBT) の完全学習ガイド。モデル設計からテスト自動化まで解説します。',
};

export default function ISTQBCtMbtCompleteGuidePage() {
    return (
        <div className="istqb-ct-mbt-page">
            <NavBar />
            <div className="mbt-main">

            {/* ===== HERO ===== */}
            <section id="hero" style={{ padding: '6rem 0 5rem', borderBottom: '1px solid var(--color-border)' }}>
                <div className="container">
                    <div className="hero">
                        <div className="hero-badge">ISTQB® SPECIALIST STREAM</div>
                        <h1>CT-MBT<br />モデルベーステスト</h1>
                        <p className="hero-subtitle">
                            ISTQB® Certified Tester – Model-Based Tester (CT-MBT)
                            の完全学習ガイド。<br />
                            モデル設計からテスト自動化まで、ステップバイステップで解説します。
                        </p>
                        <div className="hero-meta">
                            <div className="hero-meta-item">
                                <span className="val">40</span>
                                <span className="lbl">問題数</span>
                            </div>
                            <div className="hero-divider"></div>
                            <div className="hero-meta-item">
                                <span className="val">26</span>
                                <span className="lbl">合格点</span>
                            </div>
                            <div className="hero-divider"></div>
                            <div className="hero-meta-item">
                                <span className="val">65%</span>
                                <span className="lbl">合格ライン</span>
                            </div>
                            <div className="hero-divider"></div>
                            <div className="hero-meta-item">
                                <span className="val">60</span>
                                <span className="lbl">試験時間(分)</span>
                            </div>
                            <div className="hero-divider"></div>
                            <div className="hero-meta-item">
                                <span className="val">v1.1</span>
                                <span className="lbl">シラバス</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== OVERVIEW / TOC ===== */}
            <section id="overview">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num">INDEX</span>
                        <h2 className="chapter-title">目次・学習ロードマップ</h2>
                    </div>

                    <div className="mbt-callout info">
                        <div className="mbt-callout-icon">💡</div>
                        <div className="mbt-callout-body">
                            <h4>前提資格</h4>
                            <p>
                                CT-MBT を受験するには
                                <strong>ISTQB CTFL（Foundation Level）</strong>
                                の認定が必須です。本資格はスペシャリストストリームに属し、テスト設計を自動化・体系化したい中上級者に適しています。
                            </p>
                        </div>
                    </div>

                    <div className="toc-grid">
                        <a href="#ch1" className="toc-item"><span className="toc-num">01</span><span className="toc-label">MBTの概要と動機</span></a>
                        <a href="#ch1-artifacts" className="toc-item"><span className="toc-num">01</span><span className="toc-label">MBTの成果物とプロセス</span></a>
                        <a href="#ch1-sdlc" className="toc-item"><span className="toc-num">01</span><span className="toc-label">SDLCへのMBT統合</span></a>
                        <a href="#ch2" className="toc-item"><span className="toc-num">02</span><span className="toc-label">MBTモデリングの基礎</span></a>
                        <a href="#ch2-lang" className="toc-item"><span className="toc-num">02</span><span className="toc-label">モデリング言語・記法</span></a>
                        <a href="#ch2-practice" className="toc-item"><span className="toc-num">02</span><span className="toc-label">グッドプラクティス</span></a>
                        <a href="#ch3" className="toc-item"><span className="toc-num">03</span><span className="toc-label">テスト選択基準6ファミリー</span></a>
                        <a href="#ch3-apply" className="toc-item"><span className="toc-num">03</span><span className="toc-label">選択基準の適用</span></a>
                        <a href="#ch4" className="toc-item"><span className="toc-num">04</span><span className="toc-label">MBT実装・実行</span></a>
                        <a href="#ch4-adapt" className="toc-item"><span className="toc-num">04</span><span className="toc-label">テスト適応活動</span></a>
                        <a href="#ch5" className="toc-item"><span className="toc-num">05</span><span className="toc-label">MBT展開の評価</span></a>
                        <a href="#tools" className="toc-item"><span className="toc-num">+</span><span className="toc-label">MBTツール比較</span></a>
                        <a href="#exam" className="toc-item"><span className="toc-num">✓</span><span className="toc-label">試験対策・頻出パターン</span></a>
                        <a href="#trends" className="toc-item"><span className="toc-num">AI</span><span className="toc-label">AI×MBT最新動向</span></a>
                    </div>

                    <div className="metric-grid">
                        <div className="metric-card">
                            <div className="metric-val">50<span style={{ fontSize: '1rem' }}>%</span></div>
                            <div className="metric-label">テスト設計時間削減</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-val">64<span style={{ fontSize: '1rem' }}>%</span></div>
                            <div className="metric-label">コスト削減ポテンシャル</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-val">14x</div>
                            <div className="metric-label">ステップ数比（自動/手動）</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-val">5</div>
                            <div className="metric-label">主要ビジネスアウトカム</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CHAPTER 1 ===== */}
            <section id="ch1">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num">CHAPTER 01</span>
                        <h2 className="chapter-title">MBTの概要・動機・統合</h2>
                    </div>

                    <h3 id="ch1-intro">1.1 MBTとは何か？ <span className="klevel k2">K2</span></h3>

                    <div className="def-box">
                        <p>
                            「モデルベーステスト（MBT）とは、モデルに基づく、またはモデルを含む、あらゆる種類のテストである。」<br />
                            — ISTQB CT-MBT Syllabus v1.1
                        </p>
                    </div>

                    <p>
                        より実践的に言うと、MBT は
                        <strong>SUT（System Under Test）の期待振る舞いを形式的なモデルとして定義し、そのモデルからテストケースをツールで自動生成する</strong>
                        ブラックボックステスト技法です。従来の手動テスト設計と比べ、体系的・再現可能・保守容易なテストが実現できます。
                    </p>

                    <p>
                        MBT は同値分割、境界値分析、デシジョンテーブルテスト、状態遷移テスト、ユースケーステストなどの<strong>従来のテスト設計技法を拡張・強化</strong>するものであり、置き換えるものではありません。
                    </p>

                    <div className="compare-grid">
                        <div className="compare-card bad">
                            <div className="compare-header">❌ 従来の手動テスト設計</div>
                            <div className="compare-body">
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)', fontSize: '0.87rem', lineHeight: 2 }}>
                                    <li>設計者の経験・スキルに強く依存</li>
                                    <li>再現性・一貫性が確保しにくい</li>
                                    <li>要件変更時の保守コストが高い</li>
                                    <li>エッジケースの見落としが起きやすい</li>
                                    <li>カバレッジの客観的計測が困難</li>
                                </ul>
                            </div>
                        </div>
                        <div className="compare-card good">
                            <div className="compare-header">✅ MBT（モデルベーステスト）</div>
                            <div className="compare-body">
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)', fontSize: '0.87rem', lineHeight: 2 }}>
                                    <li>ツールが体系的にテストケースを自動生成</li>
                                    <li>高い再現性と一貫性を保証</li>
                                    <li>モデル更新→テスト自動再生成で保守容易</li>
                                    <li>カバレッジ基準に基づく網羅的なテスト</li>
                                    <li>客観的なカバレッジレポートが得られる</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h3>1.2 MBT の7つのメリット <span className="klevel k2">K2</span></h3>

                    <div className="arch-layers">
                        <div className="arch-layer">
                            <div className="arch-layer-title">🔍 早期欠陥検出（Early Defect Detection）</div>
                            <div className="arch-layer-desc">モデル構築時点で要件の矛盾・不整合が発覚。実装前にバグを発見 → 修正コストを劇的削減。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">📊 高いテストカバレッジ（Comprehensive Coverage）</div>
                            <div className="arch-layer-desc">状態・遷移・パス等を体系的に網羅。手動テストが見落としがちなエッジケースも自動検出。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">🔄 高い再現性（Reproducibility）</div>
                            <div className="arch-layer-desc">モデルから常に一貫したテストケースを生成。回帰テストの信頼性が向上する。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">🔧 保守コスト削減（Reduced Maintenance）</div>
                            <div className="arch-layer-desc">要件変更時はモデル更新 → テストケース自動再生成。静的なテストスクリプト管理が不要に。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">🤝 コミュニケーション改善（Better Communication）</div>
                            <div className="arch-layer-desc">モデルが開発者・テスター・ビジネス側の共通言語になる。視覚的なモデルで要件理解が深まる。</div>
                        </div>
                    </div>

                    <h3 id="ch1-artifacts">1.3 MBTの成果物（Artifacts）<span className="klevel k2">K2</span></h3>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>成果物名</th>
                                    <th>説明</th>
                                    <th>具体例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-accent-green)' }}>MBTモデル</strong></td>
                                    <td>システムの期待振る舞いを表現</td>
                                    <td>状態遷移図、UMLダイアグラム</td>
                                </tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-accent-cyan)' }}>テスト選択基準</strong></td>
                                    <td>どこまでテストするかの基準</td>
                                    <td>遷移カバレッジ、パスカバレッジ</td>
                                </tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-accent-purple)' }}>抽象テストケース</strong></td>
                                    <td>モデルから生成された高レベルなテスト</td>
                                    <td>「状態A→Bへの遷移を実行」</td>
                                </tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-accent-yellow)' }}>具体テストケース</strong></td>
                                    <td>実際のSUTで実行可能な形式</td>
                                    <td>Seleniumスクリプト、Appiumスクリプト</td>
                                </tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-text-primary)' }}>テストアダプター</strong></td>
                                    <td>抽象と具体を橋渡しするコード</td>
                                    <td>Java/Python アダプタークラス</td>
                                </tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-text-primary)' }}>テストオラクル</strong></td>
                                    <td>期待結果の定義</td>
                                    <td>モデルから自動導出 or 手動定義</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>1.4 MBTの全体プロセス <span className="klevel k3">K3</span></h3>

                    <ul className="mbt-step-list">
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">1</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">モデリング（Modeling）</div>
                                <div className="mbt-step-desc">モデル言語を選択し、システムの振る舞い・状態・遷移を表現したMBTモデルを作成する。成果物：MBTモデル（状態遷移図等）</div>
                            </div>
                        </li>
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">2</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">テストケース生成（Test Case Generation）</div>
                                <div className="mbt-step-desc">テスト選択基準を定義し、ツールがカバレッジ基準に従ってテストケースを自動生成する。成果物：抽象テストケース</div>
                            </div>
                        </li>
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">3</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">テスト適応（Test Adaptation）</div>
                                <div className="mbt-step-desc">抽象テストケースを具体的・実行可能なテストスクリプトへ変換する。テストアダプターを実装（ブリッジコード）。</div>
                            </div>
                        </li>
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">4</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">テスト実行（Test Execution）</div>
                                <div className="mbt-step-desc">SUT（テスト対象）に対してテストを実行。結果の記録・ログ収集を行う。</div>
                            </div>
                        </li>
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">5</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">評価（Evaluation）</div>
                                <div className="mbt-step-desc">テスト結果の評価とモデル・アプローチの振り返りを実施。知見をモデルにフィードバックする。</div>
                            </div>
                        </li>
                    </ul>

                    <h3 id="ch1-sdlc">1.5 SDLCへのMBT統合 <span className="klevel k2">K2</span></h3>

                    <div className="mbt-callout info">
                        <div className="mbt-callout-icon">ℹ️</div>
                        <div className="mbt-callout-body">
                            <h4>ウォーターフォールとアジャイル両方に統合可能</h4>
                            <p>
                                MBT はウォーターフォール型では要件定義フェーズから開始し、アジャイルではスプリントごとにモデルを更新してCI/CDへ組み込みます。どちらのモデルでも早期テスト設計（シフトレフト）の恩恵が得られます。
                            </p>
                        </div>
                    </div>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>SDLCモデル</th>
                                    <th>MBT統合フェーズ</th>
                                    <th>主なメリット</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>ウォーターフォール</strong></td>
                                    <td>要件定義〜設計フェーズ</td>
                                    <td>早期モデル化で要件の矛盾を発見</td>
                                </tr>
                                <tr>
                                    <td><strong>アジャイル/スクラム</strong></td>
                                    <td>スプリント計画〜レビュー</td>
                                    <td>スプリントごとのモデル更新と自動テスト再生成</td>
                                </tr>
                                <tr>
                                    <td><strong>DevOps/CI-CD</strong></td>
                                    <td>CI パイプラインに統合</td>
                                    <td>コミットごとの自動MBT実行・カバレッジ計測</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ===== CHAPTER 2 ===== */}
            <section id="ch2">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num cyan">CHAPTER 02</span>
                        <h2 className="chapter-title">MBT モデリング</h2>
                    </div>

                    <h3>2.1 モデルとは何か <span className="klevel k2">K2</span></h3>

                    <p>
                        MBT におけるモデルは「<strong>テストの視点から見たシステムの期待振る舞いの抽象化表現</strong>」です。実装の詳細は含まず、テスト目的に必要な状態・遷移・データ・条件のみを表現します。
                    </p>

                    <div className="mbt-pyramid">
                        <div className="pyramid-level">機能モデル (Functional)</div>
                        <div className="pyramid-level">振る舞いモデル (Behavioral)</div>
                        <div className="pyramid-level">構造モデル (Structural)</div>
                        <div className="pyramid-level">シナリオ/ユースケースモデル</div>
                        <div className="pyramid-level">確率的モデル (Stochastic)</div>
                    </div>

                    <h3>2.2 有限状態機械（FSM）の詳細 <span className="klevel k3">K3</span></h3>

                    <p>
                        FSM（Finite State Machine）は MBT で最もよく使われるモデルです。システムが取りうる状態・状態間の遷移・遷移を引き起こすイベントを定義します。
                    </p>

                    <div className="def-box">
                        <p>FSM = {'{'} 状態の集合 S, 初期状態 s₀, イベントの集合 E, 遷移関数 δ(s,e)→s&apos;, アクション A {'}'}</p>
                    </div>

                    <h4>具体例：ログイン機能のFSM</h4>

                    <div className="fsm-diagram">
                        <div className="fsm-nodes">
                            <div className="fsm-node initial">S0<br /><small>初期画面</small></div>
                            <div className="fsm-node state">S1<br /><small>ログイン成功</small></div>
                            <div className="fsm-node error">S2<br /><small>エラー表示</small></div>
                            <div className="fsm-node final">S3<br /><small>アカウントロック</small></div>
                        </div>
                        <div className="fsm-arrows">
                            <span className="fsm-arrow">S0 ──[PW正]──&gt; S1</span> &nbsp;&nbsp;
                            <span className="fsm-arrow">S0 ──[PW誤1〜2回]──&gt; S2</span> &nbsp;&nbsp;
                            <span className="fsm-arrow">S0 ──[PW誤3回目]──&gt; S3</span><br />
                            <span className="fsm-arrow">S1 ──[ログアウト]──&gt; S0</span> &nbsp;&nbsp;
                            <span className="fsm-arrow">S2 ──[再入力]──&gt; S0</span> &nbsp;&nbsp;
                            <span className="fsm-arrow">S3 ──[管理者リセット]──&gt; S0</span>
                        </div>
                    </div>

                    <h4>状態遷移表（State Transition Table）</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>現在状態</th><th>イベント</th><th>ガード条件</th><th>次の状態</th><th>アクション</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>S0 初期画面</td><td>ログインボタン</td><td>パスワード正</td><td>S1 ログイン成功</td><td>セッション開始</td></tr>
                                <tr><td>S0 初期画面</td><td>ログインボタン</td><td>PW誤（1〜2回）</td><td>S2 エラー表示</td><td>失敗回数++</td></tr>
                                <tr><td>S0 初期画面</td><td>ログインボタン</td><td>PW誤（3回目）</td><td>S3 アカウントロック</td><td>アカウント凍結</td></tr>
                                <tr><td>S1 成功</td><td>ログアウト</td><td>—</td><td>S0 初期画面</td><td>セッション終了</td></tr>
                                <tr><td>S2 エラー</td><td>再入力</td><td>—</td><td>S0 初期画面</td><td>—</td></tr>
                                <tr><td>S3 ロック</td><td>管理者リセット</td><td>—</td><td>S0 初期画面</td><td>失敗回数リセット</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="ch2-lang">2.3 モデリング言語一覧 <span className="klevel k2">K2</span></h3>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr><th>言語/記法</th><th>適用シナリオ</th><th>ツール例</th><th>難易度</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-accent-green)' }}>有限状態機械（FSM）</strong></td>
                                    <td>組み込み・プロトコル・ログインフロー</td>
                                    <td>GraphWalker, Conformiq</td>
                                    <td>★★☆☆☆</td>
                                </tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-accent-cyan)' }}>状態チャート（Statecharts）</strong></td>
                                    <td>車載システム・複雑UI・階層/並行処理あり</td>
                                    <td>MATLAB/Simulink, Yakindu</td>
                                    <td>★★★☆☆</td>
                                </tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-accent-purple)' }}>UMLアクティビティ図</strong></td>
                                    <td>ワークフロー・業務プロセス</td>
                                    <td>MBTsuite, IBM RTW</td>
                                    <td>★★☆☆☆</td>
                                </tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-accent-yellow)' }}>デシジョンテーブル</strong></td>
                                    <td>金融ロジック・保険料計算・複雑条件</td>
                                    <td>TOSCA, TestComplete</td>
                                    <td>★★★☆☆</td>
                                </tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-accent-red)' }}>BPMN</strong></td>
                                    <td>企業の業務プロセス</td>
                                    <td>BPM-X</td>
                                    <td>★★★★☆</td>
                                </tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-text-primary)' }}>マルコフ連鎖</strong></td>
                                    <td>統計的使用テスト・信頼性テスト</td>
                                    <td>SMC</td>
                                    <td>★★★★★</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>デシジョンテーブルの例（割引ロジック）</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr><th>条件/アクション</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>会員ランク = ゴールド</td><td>Y</td><td>Y</td><td>N</td><td>N</td><td>N</td></tr>
                                <tr><td>購入金額 ≥ 10,000円</td><td>Y</td><td>N</td><td>Y</td><td>N</td><td>N</td></tr>
                                <tr><td>クーポン保有</td><td>Y</td><td>Y</td><td>N</td><td>Y</td><td>N</td></tr>
                                <tr style={{ borderTop: '2px solid var(--color-border-bright)' }}>
                                    <td><strong>割引率 30%</strong></td>
                                    <td style={{ color: 'var(--color-accent-green)' }}>✓</td>
                                    <td></td><td></td><td></td><td></td>
                                </tr>
                                <tr>
                                    <td><strong>割引率 20%</strong></td>
                                    <td></td>
                                    <td style={{ color: 'var(--color-accent-green)' }}>✓</td>
                                    <td style={{ color: 'var(--color-accent-green)' }}>✓</td>
                                    <td></td><td></td>
                                </tr>
                                <tr>
                                    <td><strong>割引率 10%</strong></td>
                                    <td></td><td></td><td></td>
                                    <td style={{ color: 'var(--color-accent-green)' }}>✓</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><strong>割引なし</strong></td>
                                    <td></td><td></td><td></td><td></td>
                                    <td style={{ color: 'var(--color-accent-green)' }}>✓</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                        👆 R1〜R5の各列がそれぞれ1つのテストケースになります。5条件の組み合わせが完全網羅されます。
                    </p>

                    <h3 id="ch2-practice">2.4 モデリングのグッドプラクティス <span className="klevel k3">K3</span></h3>

                    <h4>✅ 良いMBTモデルの6特性</h4>
                    <div className="tag-list">
                        <span className="tag green">正確性 Correctness</span>
                        <span className="tag cyan">完全性 Completeness</span>
                        <span className="tag purple">一貫性 Consistency</span>
                        <span className="tag amber">理解可能性 Understandability</span>
                        <span className="tag green">保守性 Maintainability</span>
                        <span className="tag cyan">テスト適合性 Testability</span>
                    </div>

                    <h4>❌ よくあるアンチパターン</h4>
                    <div className="mbt-callout danger">
                        <div className="mbt-callout-icon">⚠️</div>
                        <div className="mbt-callout-body">
                            <h4>アンチパターン1：過剰詳細化</h4>
                            <p>実装の詳細（DBクエリ、APIパラメータ等）をモデルに入れすぎると、変更のたびに大幅修正が必要になります。テスト目的に必要な抽象度を維持してください。</p>
                        </div>
                    </div>
                    <div className="mbt-callout danger">
                        <div className="mbt-callout-icon">⚠️</div>
                        <div className="mbt-callout-body">
                            <h4>アンチパターン2：状態爆発（State Explosion）</h4>
                            <p>変数の組み合わせで状態数が爆発的に増加します。状態チャートの階層化・直交コンポーネント分割で対策してください。</p>
                        </div>
                    </div>
                    <div className="mbt-callout warning">
                        <div className="mbt-callout-icon">⚠️</div>
                        <div className="mbt-callout-body">
                            <h4>アンチパターン3：要件とモデルの乖離</h4>
                            <p>モデルが要件から独立して進化し同期が取れなくなります。トレーサビリティ管理ツールで要件⇔モデルを紐付けてください。</p>
                        </div>
                    </div>

                    <h4>反復的モデル開発の推奨フロー</h4>
                    <ul className="mbt-step-list">
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">1</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">Phase 1：初期モデル（Happy Path のみ）</div>
                                <div className="mbt-step-desc">主要な状態と主フローのみ記述。まずは正常系だけでシンプルに始める。</div>
                            </div>
                        </li>
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">2</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">Phase 2：エラー処理・代替フロー追加</div>
                                <div className="mbt-step-desc">異常系・例外ケースをモデルに追加していく。</div>
                            </div>
                        </li>
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">3</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">Phase 3：ガード条件・データの詳細化</div>
                                <div className="mbt-step-desc">条件分岐・入力データ範囲・境界値を具体化する。</div>
                            </div>
                        </li>
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">4</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">Phase 4：モデル検証・レビュー</div>
                                <div className="mbt-step-desc">ツールによる形式的検証（到達可能性チェック等）と人によるピアレビュー。</div>
                            </div>
                        </li>
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">5</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">Phase 5：テスト生成・フィードバック</div>
                                <div className="mbt-step-desc">テストケース生成 → 実行 → 結果をモデルにフィードバックして改善。</div>
                            </div>
                        </li>
                    </ul>

                    <div className="mbt-alert cyan">
                        参考：ISTQB CT-MBT Syllabus v1.1 – Chapter 2: MBT Modeling / GraphWalker 公式ドキュメント
                    </div>
                </div>
            </section>

            {/* ===== CHAPTER 3 ===== */}
            <section id="ch3">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num purple">CHAPTER 03</span>
                        <h2 className="chapter-title">テストケース生成の選択基準</h2>
                    </div>

                    <h3>3.1 6つの選択基準ファミリー（必須暗記） <span className="klevel k2">K2</span></h3>

                    <div className="mbt-callout info">
                        <div className="mbt-callout-icon">📌</div>
                        <div className="mbt-callout-body">
                            <h4>試験頻出：6ファミリーを完全暗記</h4>
                            <p>CT-MBT 試験では「この状況に最適な選択基準はどれか？」という問題が頻出です。6つのファミリーと各適用場面を確実に覚えてください。</p>
                        </div>
                    </div>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr><th>#</th><th>ファミリー名</th><th>説明</th><th>適用場面</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span style={{ color: 'var(--color-accent-green)', fontFamily: 'var(--font-mono)' }}>01</span></td>
                                    <td><strong>構造ベース（Structural-based）</strong></td>
                                    <td>モデルの構造要素を網羅</td>
                                    <td>状態/遷移/パスカバレッジが必要な場合</td>
                                </tr>
                                <tr>
                                    <td><span style={{ color: 'var(--color-accent-cyan)', fontFamily: 'var(--font-mono)' }}>02</span></td>
                                    <td><strong>データベース（Data-based）</strong></td>
                                    <td>入力データの組み合わせを網羅</td>
                                    <td>同値分割・境界値を適用したい場合</td>
                                </tr>
                                <tr>
                                    <td><span style={{ color: 'var(--color-accent-purple)', fontFamily: 'var(--font-mono)' }}>03</span></td>
                                    <td><strong>要件ベース（Requirements-based）</strong></td>
                                    <td>要件ごとのカバレッジを確保</td>
                                    <td>要件トレーサビリティが重要な場合</td>
                                </tr>
                                <tr>
                                    <td><span style={{ color: 'var(--color-accent-yellow)', fontFamily: 'var(--font-mono)' }}>04</span></td>
                                    <td><strong>ランダム（Random）</strong></td>
                                    <td>モデルをランダムに探索</td>
                                    <td>探索的テスト・コスト制約が厳しい場合</td>
                                </tr>
                                <tr>
                                    <td><span style={{ color: 'var(--color-accent-red)', fontFamily: 'var(--font-mono)' }}>05</span></td>
                                    <td><strong>フォールトベース（Fault-based）</strong></td>
                                    <td>想定される欠陥の検出を優先</td>
                                    <td>ミューテーションテスト・高品質要求</td>
                                </tr>
                                <tr>
                                    <td><span style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)' }}>06</span></td>
                                    <td><strong>シナリオ/ユースケースベース</strong></td>
                                    <td>実際の使用シナリオを優先</td>
                                    <td>ユーザーストーリーカバレッジ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>3.2 構造ベース基準の詳細（最重要） <span className="klevel k3">K3</span></h3>

                    <h4>① 状態カバレッジ（State Coverage）= 0-switch Coverage</h4>
                    <div className="def-box">
                        <p>モデル内のすべての状態を少なくとも1回訪問すること。最も弱いカバレッジ基準。</p>
                    </div>

                    <div className="code-block">
                        <div className="code-header">
                            <span className="code-lang">例：ログインFSMの状態カバレッジ計算</span>
                            <div className="code-dots">
                                <div className="code-dot"></div>
                                <div className="code-dot"></div>
                                <div className="code-dot"></div>
                            </div>
                        </div>
                        <pre><span className="code-comment">{"// FSM 状態: S0（初期）, S1（成功）, S2（エラー）, S3（ロック）"}</span>{"\n"}
{"\n"}
{"テストケース設計:"}{"\n"}
{"  TC-1: "}<span className="code-green">{"S0 → S1"}</span>{"   "}<span className="code-comment">{"（正常ログイン）"}</span>{"          ✅ S0, S1 カバー"}{"\n"}
{"  TC-2: "}<span className="code-cyan">{"S0 → S2 → S0"}</span>{" "}<span className="code-comment">{"（1回失敗）"}</span>{"          ✅ S2 カバー"}{"\n"}
{"  TC-3: "}<span className="code-purple">{"S0 → S2 → S2 → S3"}</span>{" "}<span className="code-comment">{"（3回失敗）"}</span>{"   ✅ S3 カバー"}{"\n"}
{"\n"}
{"状態カバレッジ = 4/4 = "}<span className="code-green">{"100%"}</span></pre>
                    </div>

                    <h4>② 遷移カバレッジ（Transition Coverage）= 1-switch Coverage</h4>
                    <div className="def-box">
                        <p>モデル内のすべての遷移を少なくとも1回実行すること。実務で最もよく使われる基準。</p>
                    </div>

                    <div className="progress-list">
                        {[
                            { label: 'T1: S0→S1 [PW正]', pct: '✓', w: '100%' },
                            { label: 'T2: S0→S2 [PW誤1〜2回]', pct: '✓', w: '100%' },
                            { label: 'T3: S0→S3 [PW誤3回目]', pct: '✓', w: '100%' },
                            { label: 'T4: S1→S0 [ログアウト]', pct: '✓', w: '100%' },
                            { label: 'T5: S2→S0 [再入力]', pct: '✓', w: '100%' },
                            { label: 'T6: S3→S0 [管理者リセット]', pct: '✓', w: '100%' },
                        ].map(({ label, pct, w }) => (
                            <div className="progress-item" key={label}>
                                <div className="progress-header">
                                    <span className="progress-label">{label}</span>
                                    <span className="progress-pct">{pct}</span>
                                </div>
                                <div className="progress-track">
                                    <div className="progress-bar" style={{ ['--bar-width' as string]: w, width: w } as React.CSSProperties}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                        遷移カバレッジ = 6/6 = <strong style={{ color: 'var(--color-accent-green)' }}>100%</strong>（全遷移を網羅）
                    </p>

                    <h4>カバレッジ強度の比較（低→高）</h4>
                    <div className="arch-layers">
                        <div className="arch-layer">
                            <div className="arch-layer-title">0スイッチカバレッジ（状態カバレッジ）</div>
                            <div className="arch-layer-desc">すべての状態を少なくとも1回訪問。最も少ないテストケース数。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">1スイッチカバレッジ（遷移カバレッジ）</div>
                            <div className="arch-layer-desc">すべての遷移を少なくとも1回実行。実務で最もバランスが良い。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">2スイッチカバレッジ</div>
                            <div className="arch-layer-desc">すべての長さ2の遷移シーケンスを実行。テスト数は増えるが欠陥検出力向上。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">Nスイッチカバレッジ</div>
                            <div className="arch-layer-desc">すべての長さNの遷移シーケンスを実行。安全クリティカルシステムに適用。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">全パスカバレッジ（All-Path Coverage）</div>
                            <div className="arch-layer-desc">可能な全経路を実行。循環があると無限になりうるため通常は非現実的。</div>
                        </div>
                    </div>

                    <h3 id="ch3-apply">3.3 選択基準の選び方ガイド <span className="klevel k3">K3</span></h3>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr><th>状況・目的</th><th>推奨選択基準</th><th>理由</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>航空・医療等の安全クリティカル</td><td>Nスイッチ + フォールトベース</td><td>高カバレッジと欠陥検出が必須</td></tr>
                                <tr><td>一般的なWebアプリ</td><td>遷移カバレッジ + データベース</td><td>コストバランスが良い</td></tr>
                                <tr><td>時間・コスト制約が厳しい</td><td>ランダム or シナリオベース</td><td>少ないリソースで価値あるテスト</td></tr>
                                <tr><td>複雑な金融・保険ロジック</td><td>データベース基準</td><td>入力値の組み合わせ網羅が重要</td></tr>
                                <tr><td>ユーザーストーリー中心のアジャイル</td><td>シナリオ/ユースケースベース</td><td>ビジネス価値と一致したテスト</td></tr>
                                <tr><td>要件トレーサビリティが必要</td><td>要件ベース</td><td>要件ごとのカバレッジを確保</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mbt-alert cyan">
                        参考：ISTQB CT-MBT Syllabus v1.1 – Chapter 3: Selection Criteria for Test Case Generation
                    </div>
                </div>
            </section>

            {/* ===== CHAPTER 4 ===== */}
            <section id="ch4">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num amber">CHAPTER 04</span>
                        <h2 className="chapter-title">MBT テスト実装・実行・適応</h2>
                    </div>

                    <h3>4.1 オフラインMBT vs オンラインMBT <span className="klevel k2">K2</span></h3>

                    <div className="compare-grid">
                        <div className="compare-card bad" style={{ borderColor: 'rgba(79, 209, 197, 0.3)' }}>
                            <div className="compare-header" style={{ background: 'rgba(79, 209, 197, 0.1)', color: 'var(--color-accent-cyan)' }}>
                                📥 オフラインMBT (Offline)
                            </div>
                            <div className="compare-body">
                                <p><strong style={{ color: 'var(--color-text-primary)' }}>仕組み：</strong>MBTツールでテストケースを事前に一括生成 → ファイルに保存 → 別途フレームワーク（Selenium等）で実行</p>
                                <p><strong style={{ color: 'var(--color-accent-green)' }}>メリット：</strong>既存フレームワークと統合しやすい。CI/CDに組み込みやすい。</p>
                                <p><strong style={{ color: 'var(--color-accent-red)' }}>デメリット：</strong>モデルとSUTの同期が静的。実行時のSUT状態を考慮できない。</p>
                            </div>
                        </div>
                        <div className="compare-card good" style={{ borderColor: 'rgba(104, 211, 145, 0.3)' }}>
                            <div className="compare-header" style={{ background: 'rgba(104, 211, 145, 0.1)', color: 'var(--color-accent-green)' }}>
                                🔄 オンラインMBT (Online)
                            </div>
                            <div className="compare-body">
                                <p><strong style={{ color: 'var(--color-text-primary)' }}>仕組み：</strong>MBTツールがSUTをリアルタイム観察 → 観察結果に応じて次のアクションを動的決定（適応型テスト）</p>
                                <p><strong style={{ color: 'var(--color-accent-green)' }}>メリット：</strong>SUTの実際の動作に適応。ランダム探索が有効。探索的テストに最適。</p>
                                <p><strong style={{ color: 'var(--color-accent-red)' }}>デメリット：</strong>ツールとSUTのリアルタイム連携が必要。実装コストが高い。</p>
                            </div>
                        </div>
                    </div>

                    <h3>4.2 GraphWalkerを使った実装例 <span className="klevel k3">K3</span></h3>

                    <p>GraphWalker は最も普及しているオープンソースMBTツールです（Apache License, Java製）。有向グラフ形式のモデルを読み込み、テストパスを自動生成します。</p>

                    <h4>Step 1: Maven 依存関係の設定</h4>
                    <div className="code-block">
                        <div className="code-header">
                            <span className="code-lang">XML (pom.xml)</span>
                            <div className="code-dots">
                                <div className="code-dot"></div>
                                <div className="code-dot"></div>
                                <div className="code-dot"></div>
                            </div>
                        </div>
                        <pre><span className="code-comment">{"<!-- pom.xml の依存関係 -->"}</span>{"\n"}
<span className="code-keyword">{"<dependencies>"}</span>{"\n"}
{"  "}<span className="code-comment">{"<!-- GraphWalker Core -->"}</span>{"\n"}
{"  <dependency>"}{"\n"}
{"    <groupId>"}<span className="code-cyan">{"org.graphwalker"}</span>{"</groupId>"}{"\n"}
{"    <artifactId>"}<span className="code-green">{"graphwalker-core"}</span>{"</artifactId>"}{"\n"}
{"    <version>"}<span className="code-amber">{"4.3.2"}</span>{"</version>"}{"\n"}
{"  </dependency>"}{"\n"}
{"  "}<span className="code-comment">{"<!-- GraphWalker Java (テストランナー) -->"}</span>{"\n"}
{"  <dependency>"}{"\n"}
{"    <groupId>"}<span className="code-cyan">{"org.graphwalker"}</span>{"</groupId>"}{"\n"}
{"    <artifactId>"}<span className="code-green">{"graphwalker-java"}</span>{"</artifactId>"}{"\n"}
{"    <version>"}<span className="code-amber">{"4.3.2"}</span>{"</version>"}{"\n"}
{"  </dependency>"}{"\n"}
{"  "}<span className="code-comment">{"<!-- Selenium WebDriver (アダプター用) -->"}</span>{"\n"}
{"  <dependency>"}{"\n"}
{"    <groupId>"}<span className="code-cyan">{"org.seleniumhq.selenium"}</span>{"</groupId>"}{"\n"}
{"    <artifactId>"}<span className="code-green">{"selenium-java"}</span>{"</artifactId>"}{"\n"}
{"    <version>"}<span className="code-amber">{"4.18.1"}</span>{"</version>"}{"\n"}
{"  </dependency>"}{"\n"}
<span className="code-keyword">{"</dependencies>"}</span></pre>
                    </div>

                    <h4>Step 2: モデルインターフェースの定義</h4>
                    <div className="code-block">
                        <div className="code-header">
                            <span className="code-lang">JAVA (LoginModel.java)</span>
                            <div className="code-dots">
                                <div className="code-dot"></div>
                                <div className="code-dot"></div>
                                <div className="code-dot"></div>
                            </div>
                        </div>
                        <pre><span className="code-keyword">{"package"}</span>{" "}<span className="code-cyan">{"com.example"}</span>{";"}{"\n"}
{"\n"}
<span className="code-keyword">{"import"}</span>{" org.graphwalker.java.annotation.GraphWalker;"}{"\n"}
<span className="code-keyword">{"import"}</span>{" org.graphwalker.java.annotation.Vertex;"}{"\n"}
<span className="code-keyword">{"import"}</span>{" org.graphwalker.java.annotation.Edge;"}{"\n"}
{"\n"}
<span className="code-comment">{"// ✅ @GraphWalker：どのモデルを使うか & 停止条件を定義"}</span>{"\n"}
<span className="code-amber">{"@GraphWalker"}</span>{"("}{"\n"}
{"  value = "}<span className="code-string">{'"random(edge_coverage(100))"'}</span>{","}{"\n"}
{"  "}<span className="code-comment">{"// ↑ ランダム探索して全エッジカバレッジ100%を達成したら停止"}</span>{"\n"}
{"  start = "}<span className="code-string">{'"e_アプリ起動"'}</span>{"\n"}
{")"}{"\n"}
<span className="code-keyword">{"public interface"}</span>{" "}<span className="code-green">{"LoginModel"}</span>{" {"}{"\n"}
{"\n"}
{"  "}<span className="code-comment">{"// ★ 頂点（Vertex）= アサーション（検証）メソッド"}</span>{"\n"}
{"  "}<span className="code-amber">{"@Vertex"}</span>{"\n"}
{"  "}<span className="code-keyword">{"void"}</span>{" "}<span className="code-cyan">{"v_初期画面"}</span>{"();"}{"\n"}
{"\n"}
{"  "}<span className="code-amber">{"@Vertex"}</span>{"\n"}
{"  "}<span className="code-keyword">{"void"}</span>{" "}<span className="code-cyan">{"v_ログイン成功"}</span>{"();"}{"\n"}
{"\n"}
{"  "}<span className="code-amber">{"@Vertex"}</span>{"\n"}
{"  "}<span className="code-keyword">{"void"}</span>{" "}<span className="code-cyan">{"v_エラー表示"}</span>{"();"}{"\n"}
{"\n"}
{"  "}<span className="code-comment">{"// ★ 辺（Edge）= アクション（操作）メソッド"}</span>{"\n"}
{"  "}<span className="code-amber">{"@Edge"}</span>{"\n"}
{"  "}<span className="code-keyword">{"void"}</span>{" "}<span className="code-green">{"e_アプリ起動"}</span>{"();"}{"\n"}
{"\n"}
{"  "}<span className="code-amber">{"@Edge"}</span>{"\n"}
{"  "}<span className="code-keyword">{"void"}</span>{" "}<span className="code-green">{"e_正常ログイン"}</span>{"();"}{"\n"}
{"\n"}
{"  "}<span className="code-amber">{"@Edge"}</span>{"\n"}
{"  "}<span className="code-keyword">{"void"}</span>{" "}<span className="code-green">{"e_ログイン失敗"}</span>{"();"}{"\n"}
{"\n"}
{"  "}<span className="code-amber">{"@Edge"}</span>{"\n"}
{"  "}<span className="code-keyword">{"void"}</span>{" "}<span className="code-green">{"e_ログアウト"}</span>{"();"}{"\n"}
{"}"}</pre>
                    </div>

                    <h4>Step 3: テストアダプター（実装クラス）</h4>
                    <div className="code-block">
                        <div className="code-header">
                            <span className="code-lang">JAVA (LoginTest.java – テストアダプター)</span>
                            <div className="code-dots">
                                <div className="code-dot"></div>
                                <div className="code-dot"></div>
                                <div className="code-dot"></div>
                            </div>
                        </div>
                        <pre><span className="code-keyword">{"public class"}</span>{" "}<span className="code-green">{"LoginTest"}</span>{"\n"}
{"    "}<span className="code-keyword">{"extends"}</span>{" ExecutionContext"}{"\n"}
{"    "}<span className="code-keyword">{"implements"}</span>{" "}<span className="code-cyan">{"LoginModel"}</span>{" {"}{"\n"}
{"\n"}
{"  "}<span className="code-keyword">{"private"}</span>{" WebDriver driver;"}{"\n"}
{"\n"}
{"  "}<span className="code-comment">{"// ===== 頂点（Vertex）= 検証（アサーション）====="}</span>{"\n"}
{"\n"}
{"  "}<span className="code-amber">{"@Override"}</span>{"\n"}
{"  "}<span className="code-keyword">{"public void"}</span>{" "}<span className="code-cyan">{"v_初期画面"}</span>{"() {"}{"\n"}
{"    "}<span className="code-comment">{"// ✅ ログイン画面が表示されているか確認"}</span>{"\n"}
{"    assertTrue("}{"\n"}
{"      driver.findElement("}<span className="code-purple">{"By.id"}</span>{"("}<span className="code-string">{'"loginForm"'}</span>{")).isDisplayed(),"}{"\n"}
{"      "}<span className="code-string">{'"ログインフォームが未表示"'}</span>{"\n"}
{"    );"}{"\n"}
{"  }"}{"\n"}
{"\n"}
{"  "}<span className="code-amber">{"@Override"}</span>{"\n"}
{"  "}<span className="code-keyword">{"public void"}</span>{" "}<span className="code-cyan">{"v_ログイン成功"}</span>{"() {"}{"\n"}
{"    "}<span className="code-comment">{"// ✅ ウェルカムメッセージの確認"}</span>{"\n"}
{"    assertTrue("}{"\n"}
{"      driver.findElement("}<span className="code-purple">{"By.id"}</span>{"("}<span className="code-string">{'"welcomeMessage"'}</span>{")).isDisplayed()"}{"\n"}
{"    );"}{"\n"}
{"    assertTrue(driver.getCurrentUrl().contains("}<span className="code-string">{'"\/dashboard"'}</span>{"));"}{"\n"}
{"  }"}{"\n"}
{"\n"}
{"  "}<span className="code-comment">{"// ===== 辺（Edge）= アクション（SUTへの操作）====="}</span>{"\n"}
{"\n"}
{"  "}<span className="code-amber">{"@Override"}</span>{"\n"}
{"  "}<span className="code-keyword">{"public void"}</span>{" "}<span className="code-green">{"e_正常ログイン"}</span>{"() {"}{"\n"}
{"    "}<span className="code-comment">{"// ✅ 正しい認証情報でログイン"}</span>{"\n"}
{"    driver.findElement("}<span className="code-purple">{"By.id"}</span>{"("}<span className="code-string">{'"username"'}</span>{"))"}{"\n"}
{"          .sendKeys("}<span className="code-string">{'"testuser@example.com"'}</span>{");"}{"\n"}
{"    driver.findElement("}<span className="code-purple">{"By.id"}</span>{"("}<span className="code-string">{'"password"'}</span>{"))"}{"\n"}
{"          .sendKeys("}<span className="code-string">{'"correctPassword"'}</span>{");"}{"\n"}
{"    driver.findElement("}<span className="code-purple">{"By.id"}</span>{"("}<span className="code-string">{'"loginBtn"'}</span>{")).click();"}{"\n"}
{"  }"}{"\n"}
{"\n"}
{"  "}<span className="code-amber">{"@Override"}</span>{"\n"}
{"  "}<span className="code-keyword">{"public void"}</span>{" "}<span className="code-green">{"e_ログイン失敗"}</span>{"() {"}{"\n"}
{"    "}<span className="code-comment">{"// ✅ 誤ったパスワードでログイン試行"}</span>{"\n"}
{"    driver.findElement("}<span className="code-purple">{"By.id"}</span>{"("}<span className="code-string">{'"username"'}</span>{"))"}{"\n"}
{"          .sendKeys("}<span className="code-string">{'"testuser@example.com"'}</span>{");"}{"\n"}
{"    driver.findElement("}<span className="code-purple">{"By.id"}</span>{"("}<span className="code-string">{'"password"'}</span>{"))"}{"\n"}
{"          .sendKeys("}<span className="code-string">{'"wrongPassword"'}</span>{");"}{"\n"}
{"    driver.findElement("}<span className="code-purple">{"By.id"}</span>{"("}<span className="code-string">{'"loginBtn"'}</span>{")).click();"}{"\n"}
{"  }"}{"\n"}
{"}"}</pre>
                    </div>

                    <h4>Step 4: パス生成アルゴリズムの選択</h4>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr><th>アルゴリズム</th><th>構文例</th><th>用途</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>ランダムウォーク</strong></td>
                                    <td><code style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent-green)' }}>random(edge_coverage(100))</code></td>
                                    <td>探索的テスト・広範なカバレッジ</td>
                                </tr>
                                <tr>
                                    <td><strong>最短パス (A*)</strong></td>
                                    <td><code style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent-cyan)' }}>a_star(reached_vertex(v_成功))</code></td>
                                    <td>特定シナリオの最小ケース</td>
                                </tr>
                                <tr>
                                    <td><strong>時間ベース</strong></td>
                                    <td><code style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent-purple)' }}>random(time_duration(30))</code></td>
                                    <td>30秒間のソークテスト</td>
                                </tr>
                                <tr>
                                    <td><strong>全頂点カバレッジ</strong></td>
                                    <td><code style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent-yellow)' }}>random(vertex_coverage(100))</code></td>
                                    <td>状態カバレッジ100%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="ch4-adapt">4.3 テスト適応（Test Adaptation）活動 <span className="klevel k3">K3</span></h3>

                    <p>テスト適応とは、ツールが生成した<strong>抽象テストケース</strong>（SUTに依存しない高レベルテスト）を、実際のSUTで実行できる<strong>具体テストケース</strong>に変換するプロセスです。</p>

                    <div className="arch-layers">
                        <div className="arch-layer">
                            <div className="arch-layer-title">手動実装アダプター</div>
                            <div className="arch-layer-desc">テスターがコードで直接実装。最大の柔軟性・最もコスト高。小規模または複雑なSUTに適する。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">コード生成アダプター（Semi-Automatic）</div>
                            <div className="arch-layer-desc">MBTツールがアダプタースケルトンを自動生成 → テスターが詳細を埋める。中規模プロジェクトに最適。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">キーワード駆動アダプター</div>
                            <div className="arch-layer-desc">キーワード辞書を使って抽象アクションをマッピング。Robot Framework等と組み合わせ有効。</div>
                        </div>
                    </div>

                    <div className="mbt-alert green">
                        参考：ISTQB CT-MBT Syllabus v1.1 – Chapter 4: MBT Test Implementation and Execution / GraphWalker 公式 GitHub
                    </div>
                </div>
            </section>

            {/* ===== CHAPTER 5 ===== */}
            <section id="ch5">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num red">CHAPTER 05</span>
                        <h2 className="chapter-title">MBTアプローチの評価と展開</h2>
                    </div>

                    <h3>5.1 MBT導入前の評価 <span className="klevel k2">K2</span></h3>

                    <div className="mbt-callout warning">
                        <div className="mbt-callout-icon">⚡</div>
                        <div className="mbt-callout-body">
                            <h4>小さく始めて効果を測定する</h4>
                            <p>MBTは初期投資が必要です。いきなり全社展開せず、1機能・1チームのパイロット導入から始め、ROI（投資対効果）を確認してから段階的に拡大してください。</p>
                        </div>
                    </div>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr><th>評価観点</th><th>確認ポイント</th><th>判断基準</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>システムの複雑性</strong></td><td>状態遷移・条件分岐が多いか</td><td>YES → MBT 有効</td></tr>
                                <tr><td><strong>チームのスキル</strong></td><td>モデリング経験者の有無</td><td>なければトレーニング計画が必要</td></tr>
                                <tr><td><strong>ツールの準備</strong></td><td>CI/CDとの統合可能性</td><td>既存パイプラインとの互換性確認</td></tr>
                                <tr><td><strong>要件の安定性</strong></td><td>要件が明確かつモデル化可能か</td><td>曖昧な要件では先にBDD等で明確化</td></tr>
                                <tr><td><strong>ROI見込み</strong></td><td>長期プロジェクトで再利用可能か</td><td>短期1回限りプロジェクトは注意</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>5.2 MBT展開の成熟度モデル <span className="klevel k2">K2</span></h3>

                    <div className="arch-layers">
                        <div className="arch-layer">
                            <div className="arch-layer-title">レベル1：試験的導入（Pilot）</div>
                            <div className="arch-layer-desc">単一機能・単一チームでの試験運用。簡単なFSMモデルから開始し、効果測定・教訓収集を行う。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">レベル2：部分的展開（Partial Deployment）</div>
                            <div className="arch-layer-desc">複数機能・チームへの展開。モデリングガイドライン整備。CI/CDへの統合を開始する。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">レベル3：組織的展開（Organizational Deployment）</div>
                            <div className="arch-layer-desc">全プロジェクトへの標準化。モデル・テストケースのライブラリ整備。継続的な効果測定。</div>
                        </div>
                        <div className="arch-layer">
                            <div className="arch-layer-title">レベル4：最適化（Optimized）</div>
                            <div className="arch-layer-desc">AIを活用した自動モデル生成。リスクベース選択基準の高度化。組織全体でのナレッジ共有。</div>
                        </div>
                    </div>

                    <h3>5.3 KPIと効果測定 <span className="klevel k2">K2</span></h3>

                    <div className="metric-grid">
                        <div className="metric-card">
                            <div className="metric-val">50<span style={{ fontSize: '1rem' }}>%</span></div>
                            <div className="metric-label">テスト設計時間削減（実績）</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-val">14x</div>
                            <div className="metric-label">ステップ数比（自動/手動）</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-val">64<span style={{ fontSize: '1rem' }}>%</span></div>
                            <div className="metric-label">コスト削減ポテンシャル</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-val">↓</div>
                            <div className="metric-label">欠陥漏洩率の低下</div>
                        </div>
                    </div>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr><th>KPI</th><th>測定方法</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>テストカバレッジ（%）</td><td>遷移/状態カバレッジ率（ツールレポート）</td></tr>
                                <tr><td>テスト設計時間</td><td>MBT導入前後の比較（人月）</td></tr>
                                <tr><td>欠陥検出率</td><td>テストで発見した欠陥数 / 総欠陥数</td></tr>
                                <tr><td>回帰テスト実行時間</td><td>モデル更新→テスト再実行までの時間</td></tr>
                                <tr><td>テスト保守コスト</td><td>要件変更あたりのテスト修正工数</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>5.4 MBTと従来テスト設計技法の関係 <span className="klevel k2">K2</span></h3>

                    <p>MBT は従来のテスト設計技法を「置き換える」のではなく「<strong>拡張・強化する</strong>」ものです。これは CT-MBT シラバスが強調する重要概念です。</p>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr><th>従来技法</th><th>MBTでの活用方法</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>同値分割（EP）</strong></td>
                                    <td>モデルのガード条件として定義 → ツールが自動的に各クラスからデータを選択</td>
                                </tr>
                                <tr>
                                    <td><strong>境界値分析（BVA）</strong></td>
                                    <td>モデルのデータ仕様に境界値を定義 → 自動的にテストデータに反映</td>
                                </tr>
                                <tr>
                                    <td><strong>デシジョンテーブル</strong></td>
                                    <td>デシジョンテーブル自体がMBTモデルとなり、テストケースを自動生成</td>
                                </tr>
                                <tr>
                                    <td><strong>状態遷移テスト</strong></td>
                                    <td>FSM/状態遷移図がモデルとなり、カバレッジ基準に従って自動生成</td>
                                </tr>
                                <tr>
                                    <td><strong>ユースケーステスト</strong></td>
                                    <td>ユースケース図をシナリオモデルとして活用。シナリオ基準で生成</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ===== TOOLS ===== */}
            <section id="tools">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num">TOOLS</span>
                        <h2 className="chapter-title">MBT ツール詳細比較</h2>
                    </div>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr><th>ツール名</th><th>ライセンス</th><th>モデル形式</th><th>主な用途</th><th>難易度</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-accent-green)' }}>GraphWalker</strong></td>
                                    <td>OSS（無料）</td><td>有向グラフ (graphML/JSON)</td><td>Web/APIテスト・Selenium統合</td><td>★★☆☆☆</td>
                                </tr>
                                <tr><td><strong>fMBT</strong></td><td>OSS（無料）</td><td>独自 DSL</td><td>システムテスト（Linux向け）</td><td>★★★☆☆</td></tr>
                                <tr><td><strong>MBTsuite</strong></td><td>OSS</td><td>UMLダイアグラム</td><td>UMLモデルから多彩なテスト生成</td><td>★★★★☆</td></tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--color-accent-cyan)' }}>Conformiq Designer</strong></td>
                                    <td>商用</td><td>独自 + Java/UML</td><td>大規模商用プロジェクト</td><td>★★★★☆</td>
                                </tr>
                                <tr><td><strong>Tricentis TOSCA</strong></td><td>商用</td><td>GUI/モデル</td><td>ビジネスロジック回帰テスト</td><td>★★★☆☆</td></tr>
                                <tr><td><strong>IBM RTW</strong></td><td>商用</td><td>UML</td><td>エンタープライズ統合テスト</td><td>★★★★★</td></tr>
                                <tr><td><strong>Yakindu SCT</strong></td><td>商用/OSS</td><td>状態チャート</td><td>車載・組み込み</td><td>★★★☆☆</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mbt-callout info">
                        <div className="mbt-callout-icon">🚀</div>
                        <div className="mbt-callout-body">
                            <h4>初学者には GraphWalker を強く推奨</h4>
                            <p>
                                無料・設定簡単・Javaエコシステムと親和性が高く、Seleniumとの統合も容易です。公式チュートリアルが充実しており、
                                <a href="https://graphwalker.github.io/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-cyan)' }}>graphwalker.github.io</a>
                                からすぐ始められます。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== EXAM ===== */}
            <section id="exam">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num purple">EXAM</span>
                        <h2 className="chapter-title">試験対策・頻出パターン</h2>
                    </div>

                    <h3>試験スペック</h3>
                    <div className="exam-grid">
                        <div className="exam-card">
                            <div className="exam-chapter">問題数</div>
                            <div className="exam-title">40問</div>
                            <div className="exam-stars">
                                <span className="star filled">★</span><span className="star filled">★</span>
                                <span className="star filled">★</span><span className="star filled">★</span>
                                <span className="star filled">★</span>
                            </div>
                            <div className="exam-pct">40</div>
                            <div className="exam-pct-label">total questions</div>
                        </div>
                        <div className="exam-card">
                            <div className="exam-chapter">合格基準</div>
                            <div className="exam-title">26点以上</div>
                            <div className="exam-stars">
                                <span className="star filled">★</span><span className="star filled">★</span>
                                <span className="star filled">★</span><span className="star empty">★</span>
                                <span className="star empty">★</span>
                            </div>
                            <div className="exam-pct">65<span style={{ fontSize: '1rem' }}>%</span></div>
                            <div className="exam-pct-label">minimum score</div>
                        </div>
                        <div className="exam-card">
                            <div className="exam-chapter">試験時間</div>
                            <div className="exam-title">60分（+25%）</div>
                            <div className="exam-stars">
                                <span className="star filled">★</span><span className="star filled">★</span>
                                <span className="star empty">★</span><span className="star empty">★</span>
                                <span className="star empty">★</span>
                            </div>
                            <div className="exam-pct">75</div>
                            <div className="exam-pct-label">mins (non-native)</div>
                        </div>
                        <div className="exam-card">
                            <div className="exam-chapter">前提資格</div>
                            <div className="exam-title">CTFL 必須</div>
                            <div className="exam-stars">
                                <span className="star filled">★</span><span className="star filled">★</span>
                                <span className="star filled">★</span><span className="star filled">★</span>
                                <span className="star empty">★</span>
                            </div>
                            <div className="exam-pct">v1.1</div>
                            <div className="exam-pct-label">syllabus version</div>
                        </div>
                    </div>

                    <h3>章別配点と重要度</h3>
                    <div className="progress-list">
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">Ch.1 MBTの概要・動機・統合（約15%）</span>
                                <span className="progress-pct">★★★</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-bar" style={{ ['--bar-width' as string]: '15%', width: '15%', background: 'linear-gradient(90deg, var(--color-accent-green), #10b981)' } as React.CSSProperties}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">Ch.2 MBTモデリング（約25%）</span>
                                <span className="progress-pct">★★★★</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-bar" style={{ ['--bar-width' as string]: '25%', width: '25%' } as React.CSSProperties}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">Ch.3 テスト選択基準（約25%）⬅ 最重要</span>
                                <span className="progress-pct">★★★★★</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-bar" style={{ ['--bar-width' as string]: '25%', width: '25%', background: 'linear-gradient(90deg, var(--color-accent-cyan), var(--color-accent-green))' } as React.CSSProperties}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">Ch.4 MBT実装・実行・適応（約20%）</span>
                                <span className="progress-pct">★★★★</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-bar" style={{ ['--bar-width' as string]: '20%', width: '20%', background: 'linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-cyan))' } as React.CSSProperties}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span className="progress-label">Ch.5 評価・展開（約15%）</span>
                                <span className="progress-pct">★★★</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-bar" style={{ ['--bar-width' as string]: '15%', width: '15%', background: 'linear-gradient(90deg, var(--color-accent-yellow), var(--color-accent-purple))' } as React.CSSProperties}></div>
                            </div>
                        </div>
                    </div>

                    <h3>頻出問題パターン</h3>

                    <div className="trend-card">
                        <div className="trend-tag">パターン1</div>
                        <div className="trend-title">「このシステムに最適なモデル記法は？」</div>
                        <div className="trend-desc">システムの特性（状態重視/データ重視/フロー重視）から判断。例：「並行処理・階層構造がある組み込みシステム」→ 状態チャート（Statecharts）</div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-tag">パターン2</div>
                        <div className="trend-title">「このカバレッジ基準で何テストケースが必要か？」</div>
                        <div className="trend-desc">対象の状態数・遷移数を数えてから計算。例：「遷移カバレッジ100%：FSMの遷移が6本なら最低6ケース必要」</div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-tag">パターン3</div>
                        <div className="trend-title">「オフラインMBTとオンラインMBTの違いは？」</div>
                        <div className="trend-desc">生成タイミング（事前 vs リアルタイム）で区別。「SUTの実際の動作に適応する」→ オンラインMBT</div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-tag">パターン4</div>
                        <div className="trend-title">「このシナリオに適した選択基準は？」</div>
                        <div className="trend-desc">6ファミリーを覚えて状況から選択。「ユーザーストーリーをもとに選択」→ シナリオ/ユースケースベース基準</div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-tag">パターン5</div>
                        <div className="trend-title">「MBT と従来テスト設計技法の関係は？」</div>
                        <div className="trend-desc">MBT は従来技法を「置き換える」のではなく「拡張する」。同値分割・BVA・デシジョンテーブルの知識がモデルのガード条件・データ基準として活きる。</div>
                    </div>

                    <h3>6週間学習ロードマップ</h3>
                    <ul className="mbt-step-list">
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">W1</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">Week 1-2：基礎固め</div>
                                <div className="mbt-step-desc">CTFL（テストプロセス・テスト技法）の復習 → CT-MBT Syllabus v1.1 を精読 → 用語集の重要語を暗記</div>
                            </div>
                        </li>
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">W3</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">Week 3：モデリングの実践</div>
                                <div className="mbt-step-desc">FSMとデシジョンテーブルを実際に書く → UMLステートマシン記法を習得 → GraphWalker をインストールして動かす（ハンズオン）</div>
                            </div>
                        </li>
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">W4</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">Week 4：選択基準の深掘り</div>
                                <div className="mbt-step-desc">6ファミリーをノートに整理 → 状態/遷移/パスカバレッジを計算練習 → デシジョンテーブルからのテストケース導出練習</div>
                            </div>
                        </li>
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">W5</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">Week 5：模擬試験と弱点補強</div>
                                <div className="mbt-step-desc">ISTQB公式 Sample Exam A を時間計測して解く → 間違えた問題のシラバス箇所を再読 → ASTQB Sample Exam も挑戦</div>
                            </div>
                        </li>
                        <li className="mbt-step-item">
                            <div className="mbt-step-num">W6</div>
                            <div className="mbt-step-content">
                                <div className="mbt-step-title">Week 6：最終確認</div>
                                <div className="mbt-step-desc">章ごとのまとめノートを作成 → 主要用語の定義を音読で暗記 → 全体を通した最終確認</div>
                            </div>
                        </li>
                    </ul>

                    <div className="mbt-alert amber">
                        ⚠️ 試験はクローズドブック（持ち込み不可）。モデル図の読み取り力が必要です。1問平均1.5分（60分÷40問）を意識して練習してください。
                    </div>
                </div>
            </section>

            {/* ===== TRENDS ===== */}
            <section id="trends">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num cyan">AI</span>
                        <h2 className="chapter-title">AI × MBT 最新動向（2025-2026）</h2>
                    </div>

                    <div className="trend-card">
                        <div className="trend-tag">LLM × MBT — 2025年最注目</div>
                        <div className="trend-title">LLMによる自動モデル推論（Automated Model Inference）</div>
                        <div className="trend-desc">GPT-4・Claude等のLLMに仕様書を与えると、FSM/UMLモデルのドラフトを自動生成できます。EU AIDOaRt プロジェクト（2021〜2024）ではAI統合の継続的テストが実証されました。モデル作成の初期コストを50〜70%削減できる可能性があります。</div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-tag">IEEE AIIoT 2025</div>
                        <div className="trend-title">ネットワークプロトコルへのLLM-MBT自動化</div>
                        <div className="trend-desc">LLMを活用した通信プロトコルのMBT自動化が IEEE AIIoT 2025 で報告されました。特に IoT デバイスのプロトコルテストに有効で、状態機械の自動抽出と遷移カバレッジの自動達成が実現されています。</div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-tag">ACM ASE 2024</div>
                        <div className="trend-title">設計ドキュメントからのGUIモデル自動生成</div>
                        <div className="trend-desc">設計ドキュメント・Figmaプロトタイプ等からGUIモデルを自動抽出する手法が ACM ASE 2024 で発表されました。UIテストのMBTモデリング工数を大幅削減します。</div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-tag">実践ヒント</div>
                        <div className="trend-title">LLMでFSMの初期ドラフトを生成するプロンプト例</div>
                        <div className="trend-desc">「以下の仕様書に基づいて、ログイン機能のFSM（有限状態機械）をGraphWalker JSON形式で生成してください。仕様：[仕様書の内容]」—このプロンプトで初期ドラフトを生成し、テスターがレビュー・修正する分業が2026年のベストプラクティスになりつつあります。</div>
                    </div>
                </div>
            </section>

            {/* ===== REFERENCES ===== */}
            <section id="refs">
                <div className="container">
                    <div className="chapter-header">
                        <span className="chapter-num">REFS</span>
                        <h2 className="chapter-title">参考文献・外部リソース</h2>
                    </div>

                    <h3>🏛️ ISTQB 公式資料</h3>
                    <div className="ref-grid">
                        <a href="https://istqb.org/certifications/certified-tester-model-based-tester-ct-mbt/" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">ISTQB 公式</span>
                            <span className="ref-title">CT-MBT 認定ページ（公式）</span>
                            <span className="ref-url">istqb.org/certifications/certified-tester-model-based-tester-ct-mbt/</span>
                        </a>
                        <a href="https://www.istqb.org/?sdm_process_download=1&download_id=3562" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">ISTQB 公式</span>
                            <span className="ref-title">CT-MBT Syllabus v1.1 (PDF ダウンロード)</span>
                            <span className="ref-url">istqb.org → download_id=3562</span>
                        </a>
                        <a href="https://istqb.org/?sdm_process_download=1&download_id=3564" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">ISTQB 公式</span>
                            <span className="ref-title">CT-MBT Sample Exam A – Questions v1.2</span>
                            <span className="ref-url">istqb.org → download_id=3564</span>
                        </a>
                        <a href="https://istqb.org/?sdm_process_download=1&download_id=3565" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">ISTQB 公式</span>
                            <span className="ref-title">CT-MBT Sample Exam A – Answers v1.2</span>
                            <span className="ref-url">istqb.org → download_id=3565</span>
                        </a>
                        <a href="https://astqb.org/assets/documents/MBT-Exam-Sample-with-Model-Diagrams.pdf" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">ASTQB</span>
                            <span className="ref-title">ASTQB MBT Sample Exam（英語・図付き）</span>
                            <span className="ref-url">astqb.org/assets/documents/MBT-Exam-Sample...</span>
                        </a>
                        <a href="https://glossary.istqb.org/en_US/search?term=" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">ISTQB 公式</span>
                            <span className="ref-title">ISTQB グロッサリー（用語集）</span>
                            <span className="ref-url">glossary.istqb.org/en_US/search</span>
                        </a>
                    </div>

                    <h3>🛠️ ツール公式サイト</h3>
                    <div className="ref-grid">
                        <a href="https://graphwalker.github.io/" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">OSS ツール</span>
                            <span className="ref-title">GraphWalker 公式サイト</span>
                            <span className="ref-url">graphwalker.github.io</span>
                        </a>
                        <a href="https://github.com/GraphWalker/graphwalker-project" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">OSS ツール</span>
                            <span className="ref-title">GraphWalker GitHub リポジトリ</span>
                            <span className="ref-url">github.com/GraphWalker/graphwalker-project</span>
                        </a>
                        <a href="https://github.com/intel/fMBT" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">OSS ツール</span>
                            <span className="ref-title">fMBT（Intel 製）GitHub</span>
                            <span className="ref-url">github.com/intel/fMBT</span>
                        </a>
                        <a href="https://www.conformiq.com/" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">商用ツール</span>
                            <span className="ref-title">Conformiq Designer</span>
                            <span className="ref-url">conformiq.com</span>
                        </a>
                        <a href="https://www.tricentis.com/products/automate-continuous-testing-tosca" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">商用ツール</span>
                            <span className="ref-title">Tricentis TOSCA</span>
                            <span className="ref-url">tricentis.com/products/...</span>
                        </a>
                        <a href="https://www.mathworks.com/products/stateflow.html" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">商用ツール</span>
                            <span className="ref-title">MATLAB/Simulink Stateflow</span>
                            <span className="ref-url">mathworks.com/products/stateflow.html</span>
                        </a>
                    </div>

                    <h3>📚 学習リソース・技術記事</h3>
                    <div className="ref-grid">
                        <a href="https://grokipedia.com/page/Model-based_testing" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">技術記事 2026</span>
                            <span className="ref-title">Model-Based Testing 完全概説（Grokipedia/2026）</span>
                            <span className="ref-url">grokipedia.com/page/Model-based_testing</span>
                        </a>
                        <a href="https://testsigma.com/blog/model-based-testing/" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">技術記事</span>
                            <span className="ref-title">MBT 概説（Testsigma）</span>
                            <span className="ref-url">testsigma.com/blog/model-based-testing/</span>
                        </a>
                        <a href="https://www.lambdatest.com/learning-hub/model-based-testing" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">学習リソース</span>
                            <span className="ref-title">MBT ガイド（LambdaTest）</span>
                            <span className="ref-url">lambdatest.com/learning-hub/model-based-testing</span>
                        </a>
                        <a href="https://www.oreilly.com/library/view/model-based-testing-essentials/9781119130017/" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">書籍</span>
                            <span className="ref-title">Model-Based Testing Essentials（O&apos;Reilly 公式参考書）</span>
                            <span className="ref-url">oreilly.com/library/view/...</span>
                        </a>
                        <a href="https://dl.acm.org/doi/10.1145/3452383.3452388" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">学術論文 ACM</span>
                            <span className="ref-title">GraphWalker 産業事例論文（ACM/2021）</span>
                            <span className="ref-url">dl.acm.org/doi/10.1145/3452383.3452388</span>
                        </a>
                        <a href="https://arxiv.org/pdf/2104.02152" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">学術論文 arXiv</span>
                            <span className="ref-title">GraphWalker 産業事例フルテキスト（arXiv/2021）</span>
                            <span className="ref-url">arxiv.org/pdf/2104.02152</span>
                        </a>
                    </div>

                    <h3>🎓 試験・トレーニング</h3>
                    <div className="ref-grid">
                        <a href="https://istqb.org/exam-providers/?directory_type=exam-providers" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">試験</span>
                            <span className="ref-title">ISTQB 試験プロバイダー検索</span>
                            <span className="ref-url">istqb.org/exam-providers/</span>
                        </a>
                        <a href="https://istqb.org/training-providers/?directory_type=training-providers" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">研修</span>
                            <span className="ref-title">ISTQB トレーニングプロバイダー検索</span>
                            <span className="ref-url">istqb.org/training-providers/</span>
                        </a>
                        <a href="http://scr.istqb.org/" className="ref-card" target="_blank" rel="noopener noreferrer">
                            <span className="ref-cat">資格確認</span>
                            <span className="ref-title">ISTQB SCR（資格認定状況確認）</span>
                            <span className="ref-url">scr.istqb.org</span>
                        </a>
                    </div>
                </div>
            </section>

            </div>{/* /.mbt-main */}

            {/* ===== FOOTER ===== */}
            <footer>
                <div className="container footer-inner">
                    <p style={{ color: 'var(--color-accent-green)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>
                        CT-MBT COMPLETE GUIDE 2025<span className="cursor-blink"></span>
                    </p>
                    <p>
                        一次情報源：<a href="https://istqb.org/certifications/certified-tester-model-based-tester-ct-mbt/" target="_blank" rel="noopener noreferrer">ISTQB® CT-MBT 公式ページ</a>
                        {' '}| Syllabus v1.1
                    </p>
                    <p style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                        本資料は学習目的で作成されています。最新情報は必ず公式サイト（istqb.org）でご確認ください。<br />
                        前提資格：ISTQB CTFL（Foundation Level）| 試験：40問 / 26点以上 / 60分
                    </p>
                </div>
            </footer>
        </div>
    );
}
