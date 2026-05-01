import NavBar from './NavBar';
import './istqb-ct-genai-complete-guide.css';

export const metadata = {
    title: 'ISTQB® CT-GenAI – Testing with Generative AI 完全ガイド 2025',
    description: '生成AI・LLMをテストの手段として活用するためのISTQBスペシャリスト資格(CT-GenAI)の完全学習ガイドです。',
};

export default function GenAICompleteGuidePage() {
    return (
        <div className="istqb-ct-genai-page page-wrapper">
            <NavBar />
            <section className="hero" id="top">
                <div className="hero-glow"></div>
                <div className="hero-badge">ISTQB® SPECIALIST · 2025年7月25日 GA リリース</div>
                <h1 className="hero-title">
                    Testing with Generative AI
                </h1>
                <p className="hero-subtitle">CT-GenAI v1.0 完全学習ガイド — 初学者から実践者まで</p>
            </section>

            {/* ============================
     HERO
     ============================ */}
            

            {/* ============================
     TABLE OF CONTENTS
     ============================ */}
            <section id="toc" className="chapter">
                <div className="chapter-header">
                    <span className="chapter-num green">TOC</span>
                    <h2 className="chapter-title">目次 — Chapter Overview</h2>
                </div>

                <div className="toc-grid">
                    <a className="toc-card" href="#ch0">
                        <div className="toc-card-num">Chapter 0</div>
                        <div className="toc-card-title">概要・資格ロードマップ</div>
                        <div className="toc-card-time">BO1〜BO5 | 試験メタ情報</div>
                    </a>
                    <a className="toc-card" href="#ch1">
                        <div className="toc-card-num">Chapter 1</div>
                        <div className="toc-card-title">生成AI入門</div>
                        <div className="toc-card-time">100分 · 12.2%</div>
                    </a>
                    <a className="toc-card" href="#ch2">
                        <div className="toc-card-num">Chapter 2 ★最重要</div>
                        <div className="toc-card-title">プロンプトエンジニアリング</div>
                        <div className="toc-card-time">365分 · 44.7%</div>
                    </a>
                    <a className="toc-card" href="#ch3">
                        <div className="toc-card-num">Chapter 3</div>
                        <div className="toc-card-title">リスク管理</div>
                        <div className="toc-card-time">160分 · 19.6%</div>
                    </a>
                    <a className="toc-card" href="#ch4">
                        <div className="toc-card-num">Chapter 4</div>
                        <div className="toc-card-title">LLMパワードインフラ</div>
                        <div className="toc-card-time">110分 · 13.4%</div>
                    </a>
                    <a className="toc-card" href="#ch5">
                        <div className="toc-card-num">Chapter 5</div>
                        <div className="toc-card-title">組織への導入・統合</div>
                        <div className="toc-card-time">80分 · 9.8%</div>
                    </a>
                </div>

                {/* 学習時間配分 */}
                <div className="section-title">章別学習時間配分</div>
                <div className="progress-list">
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name"
                                >Ch.2 プロンプトエンジニアリング（最重要）</span
                            >
                            <span className="progress-pct">44.7%</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div className="progress-bar-fill" style={{ width: '44.7%' }}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Ch.3 リスク管理</span>
                            <span className="progress-pct">19.6%</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div className="progress-bar-fill purple" style={{ width: '19.6%' }}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Ch.4 LLMインフラ</span>
                            <span className="progress-pct">13.4%</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div className="progress-bar-fill amber" style={{ width: '13.4%' }}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Ch.1 生成AI入門</span>
                            <span className="progress-pct">12.2%</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div className="progress-bar-fill" style={{ width: '12.2%' }}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-name">Ch.5 組織への導入</span>
                            <span className="progress-pct">9.8%</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div className="progress-bar-fill" style={{ width: '9.8%' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            {/* ============================
     CHAPTER 0: OVERVIEW
     ============================ */}
            <section id="ch0" className="chapter">
                <div className="chapter-header">
                    <span className="chapter-num">Ch.0</span>
                    <h2 className="chapter-title">概要・資格ロードマップ</h2>
                </div>

                <div className="callout info">
                    <div className="callout-title">CT-GenAI とは？</div>
                    <p>
                        2025年7月25日に正式リリースされた、生成AI（LLM）を「テストの手段」として活用するための
                        ISTQB® スペシャリスト資格。<strong
                            >AIシステムをテストする CT-AI（2021年）</strong
                        >とは根本的に目的が異なる。
                    </p>
                </div>

                <div className="section-title">資格ロードマップ</div>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-icon">🎯</div>
                        <div>
                            <div className="arch-label">本資格 NEW 2025</div>
                            <div className="arch-name">CT-GenAI — Testing with Generative AI</div>
                            <div className="arch-desc">
                                生成AI・LLMを「使って」テストを行う。プロンプトエンジニアリング・RAG・リスク管理を習得
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-icon">🤖</div>
                        <div>
                            <div className="arch-label">兄弟資格 2021</div>
                            <div className="arch-name">CT-AI — AIシステムをテストする</div>
                            <div className="arch-desc">
                                AI・MLシステムの品質保証。混同行列・メタモルフィックテスト・バイアス検出
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-icon">🧪</div>
                        <div>
                            <div className="arch-label">Advanced Level</div>
                            <div className="arch-name">
                                CTAL-TA / CTAL-TTA / CTAL-TM / CTAL-TAE v2.0
                            </div>
                            <div className="arch-desc">
                                次のキャリアステップ。テスト分析・技術・管理・自動化の専門化
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer">
                        <div className="arch-icon">📚</div>
                        <div>
                            <div className="arch-label">前提資格（必須）</div>
                            <div className="arch-name">CTFL v4.0 — Foundation Level</div>
                            <div className="arch-desc">
                                CT-GenAI 受験に必須。テストの基本概念・プロセス・技法の基礎
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title">CT-GenAI vs CT-AI の決定的な違い</div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>観点</th>
                                <th>CT-GenAI（本資格）</th>
                                <th>CT-AI（2021年）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>主題</strong></td>
                                <td>テストプロセスでAIを<strong>使う</strong></td>
                                <td>AIシステムを<strong>テストする</strong></td>
                            </tr>
                            <tr>
                                <td><strong>AIの位置づけ</strong></td>
                                <td>テストの<strong>手段（ツール）</strong></td>
                                <td>テストの<strong>対象（SUT）</strong></td>
                            </tr>
                            <tr>
                                <td><strong>中心トピック</strong></td>
                                <td>プロンプトエンジニアリング・RAG・LLMOps</td>
                                <td>混同行列・メタモルフィックテスト・バイアス</td>
                            </tr>
                            <tr>
                                <td><strong>問題数 / 配点</strong></td>
                                <td>40問 / 46点満点</td>
                                <td>40問 / 47点満点</td>
                            </tr>
                            <tr>
                                <td><strong>最高K-Level</strong></td>
                                <td>K3（K4なし）</td>
                                <td>K4あり</td>
                            </tr>
                            <tr>
                                <td><strong>学習時間</strong></td>
                                <td>13.6時間</td>
                                <td>25.1時間</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-title">5つのビジネスアウトカム（Business Outcomes）</div>
                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">BO1</div>
                        <div className="step-body">
                            <div className="step-title">生成AIの基本概念・能力・限界を理解できる</div>
                            <div className="step-desc">
                                LLMの仕組み・コンテキストウィンドウ・ハルシネーション等の基礎知識
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num green">BO2</div>
                        <div className="step-body">
                            <div className="step-title">
                                ソフトウェアテストのためのLLMプロンプト作成スキルを習得できる
                            </div>
                            <div className="step-desc">
                                ゼロショット・フューショット・CoT・プロンプトチェイニング等の実践スキル
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num purple">BO3</div>
                        <div className="step-body">
                            <div className="step-title">生成AIを使用するリスクと緩和策を理解できる</div>
                            <div className="step-desc">
                                ハルシネーション・データ漏洩・プロンプトインジェクション・倫理リスクの管理
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num amber">BO4</div>
                        <div className="step-body">
                            <div className="step-title">
                                テストのための生成AIソリューションの活用法を理解できる
                            </div>
                            <div className="step-desc">
                                RAG・LLMエージェント・LLMOps・ファインチューニングのアーキテクチャ
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">BO5</div>
                        <div className="step-body">
                            <div className="step-title">
                                組織内でのGenAI戦略とロードマップの策定・実装に貢献できる
                            </div>
                            <div className="step-desc">
                                シャドーAI対策・LLM vs SLM選定・採用4段階ロードマップ
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

            <div className="divider"></div>

            {/* ============================
     CHAPTER 1: GenAI INTRO
     ============================ */}
            <section id="ch1" className="chapter">
                <div className="chapter-header">
                    <span className="chapter-num green">Ch.1</span>
                    <h2 className="chapter-title">ソフトウェアテストのための生成AI入門</h2>
                    <span className="k-level">K1〜K2 · 100分</span>
                </div>

                <div className="section-title">1.1 AIの進化スペクトラム（試験頻出）</div>

                <div className="arch-layers">
                    <div className="arch-layer">
                        <div className="arch-icon">🔵</div>
                        <div>
                            <div className="arch-label">第1世代 · Classical</div>
                            <div className="arch-name">シンボリックAI（Symbolic AI）</div>
                            <div className="arch-desc">
                                ルールベース・記号と論理規則。専門家システム・チェスエンジン（Deep
                                Blue等）
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-icon">🟢</div>
                        <div>
                            <div className="arch-label">第2世代</div>
                            <div className="arch-name">古典的機械学習（Classical ML）</div>
                            <div className="arch-desc">
                                データ駆動・特徴選択が必要。欠陥分類・バグ予測に活用
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-icon">🟡</div>
                        <div>
                            <div className="arch-label">第3世代</div>
                            <div className="arch-name">深層学習（Deep Learning）</div>
                            <div className="arch-desc">
                                ニューラルネット・特徴を自動学習。画像・音声・テキスト処理
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer pink">
                        <div className="arch-icon">🤖</div>
                        <div>
                            <div className="arch-label">第4世代 · 現在</div>
                            <div className="arch-name">生成AI（Generative AI）★ 本資格の対象</div>
                            <div className="arch-desc">
                                深層学習で新コンテンツを生成。追加トレーニングなしでテストタスクに直接適用可能
                            </div>
                        </div>
                    </div>
                </div>

                <div className="callout info">
                    <div className="callout-title">Key Insight: なぜ生成AIがテストを変えるか</div>
                    <p>
                        従来のMLツールと異なり、生成AIは<strong>追加のトレーニングフェーズなし</strong>で、事前学習済みモデルをテストタスクに直接適用できる。これがプロンプトエンジニアリングが最重要スキルとなる理由。
                    </p>
                </div>

                <div className="section-title">1.2 LLMの3種類（試験頻出）</div>

                <div className="arch-layers">
                    <div className="arch-layer">
                        <div className="arch-icon">🏗️</div>
                        <div>
                            <div className="arch-label">種類1</div>
                            <div className="arch-name">ファンデーションLLM（Foundation LLM）</div>
                            <div className="arch-desc">
                                大量テキストで事前学習された基盤モデル。特定タスクに最適化されていない。例：GPT-3
                                Base、LLaMA Base
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-icon">💬</div>
                        <div>
                            <div className="arch-label">種類2 ← テスト作業で最も多用</div>
                            <div className="arch-name">インストラクション・チューニング済みLLM</div>
                            <div className="arch-desc">
                                人間の指示に従うようファインチューニング済み。例：ChatGPT（GPT-4
                                Instruct）、Claude 3、Gemini
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-icon">🧠</div>
                        <div>
                            <div className="arch-label">種類3 ← 複雑な分析向け</div>
                            <div className="arch-name">推論LLM（Reasoning LLM）</div>
                            <div className="arch-desc">
                                複雑な問題に段階的に取り組むよう最適化。例：OpenAI o1/o3、DeepSeek
                                R1。リスク分析・欠陥根本原因分析に適している
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title">1.3 必須用語集（試験頻出）</div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>用語</th>
                                <th>定義</th>
                                <th>テストへの影響</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>トークン化</strong><br /><code>Tokenization</code></td>
                                <td>
                                    テキストを処理可能な最小単位（トークン）に分割。「testing」→
                                    ['test','ing']（2トークン）
                                </td>
                                <td>プロンプトのトークン数を意識してコスト・速度を管理する</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>コンテキストウィンドウ</strong><br /><code
                                        >Context Window</code
                                    >
                                </td>
                                <td>
                                    LLMが1回の推論で考慮できる最大トークン数の上限。GPT-4:
                                    ~128K、Claude: ~200K
                                </td>
                                <td>長い仕様書をそのまま渡せない場合がある → RAGで解決</td>
                            </tr>
                            <tr>
                                <td><strong>埋め込み</strong><br /><code>Embedding</code></td>
                                <td>
                                    テキスト・概念を数値ベクトルとして表現。「テスト」→ [0.23,
                                    -0.45, ...]
                                </td>
                                <td>RAGでの類似テストケース検索・意味的類似度判断に使用</td>
                            </tr>
                            <tr>
                                <td><strong>マルチモーダルLLM</strong></td>
                                <td>
                                    テキスト・画像・音声など複数のモダリティを処理できるLLM。例：GPT-4V、Claude
                                    3
                                </td>
                                <td>
                                    UIスクリーンショットからテストケース生成。ワイヤーフレームからテスト設計
                                </td>
                            </tr>
                            <tr>
                                <td><strong>推論LLM</strong></td>
                                <td>
                                    回答前にステップバイステップで思考するよう最適化されたLLM。例：OpenAI
                                    o1、o3
                                </td>
                                <td>複雑なテストシナリオの分析・リスク評価に適している</td>
                            </tr>
                            <tr>
                                <td><strong>SLM</strong></td>
                                <td>
                                    Small Language
                                    Model。LLMより小さくデバイス上で動作可能。例：Phi-3、Mistral 7B
                                </td>
                                <td>オンプレミスで動作可能 → PII含むデータを安全に処理</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-title">1.4 GenAIをテストプロセス全体に適用する</div>

                <div className="arch-layers">
                    <div className="arch-layer">
                        <div className="arch-icon">🔍</div>
                        <div>
                            <div className="arch-label">テスト分析フェーズ</div>
                            <div className="arch-name">受入基準のレビュー・テスト条件の抽出</div>
                            <div className="arch-desc">
                                仕様書の曖昧さ・矛盾を自動特定。要件からテスト条件を高速に抽出
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-icon">✏️</div>
                        <div>
                            <div className="arch-label">テスト設計フェーズ</div>
                            <div className="arch-name">テストケース・テストデータの生成</div>
                            <div className="arch-desc">
                                境界値・等価分割の自動識別。合成テストデータの生成（PII不含）
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-icon">⚙️</div>
                        <div>
                            <div className="arch-label">テスト実装フェーズ</div>
                            <div className="arch-name">自動化スクリプトの生成</div>
                            <div className="arch-desc">
                                Playwright/Selenium
                                スクリプトのドラフト生成。APIテストリクエストの自動作成
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-icon">📊</div>
                        <div>
                            <div className="arch-label">テスト監視フェーズ</div>
                            <div className="arch-name">レポート・欠陥分析の自動化</div>
                            <div className="arch-desc">
                                テスト結果レポートの自動生成。欠陥パターンのサマリー・根本原因仮説の提示
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title">
                    1.5 GenAI利用の3つのインタラクションモデル（試験頻出）
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>モデル</th>
                                <th>特徴</th>
                                <th>テスト用途</th>
                                <th>注意点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>AIチャットボット</strong><br />ChatGPT, Claude.ai</td>
                                <td>チャットUIで対話。手軽・会話履歴あり</td>
                                <td>アドホックなテストケース生成・要件分析</td>
                                <td>セッション間で状態が保持されない</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>LLMパワードテストアプリ</strong><br />GitHub Copilot,
                                    Testim AI
                                </td>
                                <td>LLM APIを使ったテスト専用ツール。CI/CDと統合可能</td>
                                <td>自動化テスト生成・コードレビュー</td>
                                <td>ツール固有の制約・コスト管理が必要</td>
                            </tr>
                            <tr>
                                <td><strong>カスタムLLMパイプライン</strong><br />RAG + Agent</td>
                                <td>組織固有の要件に対応。最高の柔軟性</td>
                                <td>大規模テスト自動化・継続的テスト生成</td>
                                <td>構築・保守コストが高い</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="divider"></div>

            {/* ============================
     CHAPTER 2: PROMPT ENGINEERING
     ============================ */}
            <section id="ch2" className="chapter">
                <div className="chapter-header">
                    <span className="chapter-num pink">Ch.2</span>
                    <h2 className="chapter-title">プロンプトエンジニアリング</h2>
                    <span className="k-level">K2〜K3 · 365分 · 44.7%</span>
                </div>

                <div className="callout warning">
                    <div className="callout-title">最重要章 — 試験の約45%を占める</div>
                    <p>
                        この章から最も多くの問題が出題される。プロンプト技法・評価メトリクス・反復改善サイクルを完全に習得すること。
                    </p>
                </div>

                <div className="section-title">2.1 効果的なプロンプトの構成要素</div>

                <div className="arch-layers">
                    <div className="arch-layer pink">
                        <div className="arch-icon">🎭</div>
                        <div>
                            <div className="arch-label">Context（文脈）</div>
                            <div className="arch-name">背景・状況を設定</div>
                            <div className="arch-desc">
                                例：「銀行の決済システムをテストする QAエンジニアとして」
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer">
                        <div className="arch-icon">👔</div>
                        <div>
                            <div className="arch-label">Role（役割）</div>
                            <div className="arch-name">AIの役割を指定</div>
                            <div className="arch-desc">
                                例：「ISTQB の知識を持つシニアテスト専門家として振る舞え」
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-icon">📋</div>
                        <div>
                            <div className="arch-label">Instruction（指示）</div>
                            <div className="arch-name">具体的なタスクを明示</div>
                            <div className="arch-desc">
                                例：「境界値分析を使って Gherkin 形式でテストケースを生成せよ」
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-icon">🔢</div>
                        <div>
                            <div className="arch-label">Specifics（詳細・制約）</div>
                            <div className="arch-name">形式・数・制限を指定</div>
                            <div className="arch-desc">
                                例：「正常系3件・異常系5件・PII不含・Gherkin 形式で出力」
                            </div>
                        </div>
                    </div>
                </div>

                <div className="subsection-title">システムプロンプト vs ユーザープロンプト</div>

                <div className="compare-grid">
                    <div className="compare-card good">
                        <div className="compare-header">⚙️ システムプロンプト（組織レベルで管理）</div>
                        <div className="compare-content">
                            <p>
                                LLMの基本的な振る舞いを設定する。ユーザーには見えない場合が多い。<strong>プロンプトカタログに格納</strong>。
                            </p>
                            <span className="code-snippet"
                                ><span className="ln-cmt"
                                    ># system_prompt.txt（プロンプトカタログで管理）</span
                                >
                                <span className="ln-hi"
                                    >あなたはISTQBの知識を持つシニアQAエンジニアです。</span
                                >
                                <span className="ln-kw">常に以下のルールに従ってください：</span>
                                <span className="ln-ok">- テストケースはGherkin形式で生成</span>
                                <span className="ln-ok">- PII含むテストデータを生成しない</span>
                                <span className="ln-warn">- 不確実な場合は「要確認」と明示</span></span
                            >
                        </div>
                    </div>
                    <div className="compare-card bad">
                        <div className="compare-header">✏️ ユーザープロンプト（タスクごとに入力）</div>
                        <div className="compare-content">
                            <p>各タスクで入力する具体的な指示。テスターが毎回入力する内容。</p>
                            <span className="code-snippet"
                                ><span className="ln-cmt"># user_prompt（毎回テスターが入力）</span>
                                <span className="ln-hi">以下のユーザーストーリーに対して、</span>
                                <span className="ln-hi">等価分割法と境界値分析を使って</span>
                                <span className="ln-hi">テストケースを生成してください：</span>

                                <span className="ln-str"
                                    >「ユーザーは1〜120の整数で年齢を入力できる」</span
                                ></span
                            >
                        </div>
                    </div>
                </div>

                <div className="section-title">2.2 コアプロンプト技法 6種（試験頻出）</div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>技法名</th>
                                <th>定義</th>
                                <th>使用場面</th>
                                <th>優先度</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>ゼロショット</strong><br /><code>Zero-Shot</code></td>
                                <td>例を提供せずに直接タスクを指示</td>
                                <td>シンプルで明確なタスク</td>
                                <td>基本</td>
                            </tr>
                            <tr>
                                <td><strong>フューショット</strong><br /><code>Few-Shot</code></td>
                                <td>1〜3件の例を提供してから指示</td>
                                <td>特定の形式・スタイルを強制したい場合</td>
                                <td>★★★★★ 最重要</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>チェーン・オブ・ソート</strong><br /><code>CoT</code>
                                </td>
                                <td>「ステップバイステップで考えてください」と指示</td>
                                <td>複雑な分析・推論が必要なタスク</td>
                                <td>★★★★</td>
                            </tr>
                            <tr>
                                <td><strong>メタプロンプティング</strong></td>
                                <td>LLMに「最良のプロンプト」を聞く</td>
                                <td>最適なプロンプトが不明な場合</td>
                                <td>★★★</td>
                            </tr>
                            <tr>
                                <td><strong>プロンプトチェイニング</strong></td>
                                <td>複雑なタスクを複数ステップに分解して連鎖実行</td>
                                <td>要件分析→テスト設計→データ生成など複合作業</td>
                                <td>★★★★</td>
                            </tr>
                            <tr>
                                <td><strong>セルフリフレクション</strong></td>
                                <td>「上記の回答を見直して改善点を示せ」</td>
                                <td>出力品質の向上・精度確認</td>
                                <td>★★★</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-title">2.3 プロンプト技法の良い例 vs 悪い例</div>

                {/* Zero-Shot vs Few-Shot */}
                <div className="subsection-title">
                    パターン①：形式が重要な場合 → フューショットを使え
                </div>
                <div className="compare-grid">
                    <div className="compare-card bad">
                        <div className="compare-header">❌ ゼロショット（形式が不安定）</div>
                        <div className="compare-content">
                            <p>例を提供しないため、出力形式が毎回バラバラになる可能性が高い。</p>
                            <span className="code-snippet"
                                ><span className="ln-warn">テストケースを作ってください。</span>
                                <span className="ln-cmt"
                                    ># → 形式が毎回変わる。Gherkin？箇条書き？表？</span
                                ></span
                            >
                        </div>
                    </div>
                    <div className="compare-card good">
                        <div className="compare-header">✅ フューショット（形式が安定）</div>
                        <div className="compare-content">
                            <p>1〜3件の例を提示することで、期待する形式が確実に得られる。</p>
                            <span className="code-snippet"
                                ><span className="ln-cmt"># ① まず例を見せる（Few-Shot）</span>
                                <span className="ln-ok">例（この形式で出力してください）：</span>
                                <span className="ln-hi">TC001: 有効メール → 成功</span>
                                <span className="ln-hi">TC002: @なし → エラーメッセージ</span>

                                <span className="ln-cmt"># ② 同じ形式で次のUSを処理させる</span>
                                <span className="ln-str"
                                    >「8〜20文字パスワード」を同形式で処理してください</span
                                ></span
                            >
                        </div>
                    </div>
                </div>

                {/* パターン②：曖昧な指示 */}
                <div className="subsection-title">パターン②：指示の明確化</div>
                <div className="compare-grid">
                    <div className="compare-card bad">
                        <div className="compare-header">❌ 曖昧なプロンプト</div>
                        <div className="compare-content">
                            <p>LLMがどんな形式でも出力してしまい、結果が使い物にならない。</p>
                            <span className="code-snippet"
                                ><span className="ln-warn">このシステムをテストしてください。</span>
                                <span className="ln-cmt"># → 件数・形式・制約が全て不明</span>
                                <span className="ln-cmt"># → 毎回バラバラの出力になる</span></span
                            >
                        </div>
                    </div>
                    <div className="compare-card good">
                        <div className="compare-header">✅ 明確なプロンプト</div>
                        <div className="compare-content">
                            <p>形式・件数・制約を全て指定することで一貫した出力が得られる。</p>
                            <span className="code-snippet"
                                ><span className="ln-kw">等価分割法を使って、Gherkin形式で</span>
                                <span className="ln-ok">正常系3件・異常系5件を生成してください。</span>

                                <span className="ln-warn">【制約】</span>
                                <span className="ln-hi">- PII不含</span>
                                <span className="ln-hi">- 実在の名前は使用しないこと</span>
                                <span className="ln-cmt"
                                    ># → 形式・数・制約が明確 → 安定した出力</span
                                ></span
                            >
                        </div>
                    </div>
                </div>

                <div className="section-title">2.4 実践プロンプトテンプレート集</div>

                {/* テスト分析プロンプト */}
                <div className="subsection-title">
                    ① テスト分析プロンプト（要件 → テスト条件の抽出）
                </div>
                <div className="code-block" data-lang="Prompt Template">
                    <pre><span className="code-comment"># システムプロンプト（プロンプトカタログに格納）</span>
<span className="code-green">あなたは10年の経験を持つシニアQAエンジニアです。</span>
<span className="code-dim">常に以下のルールに従ってください：</span>
<span className="code-dim">- テストケースはGherkin形式で生成してください</span>
<span className="code-dim">- 個人情報（PII）を含むテストデータを生成しないでください</span>
<span className="code-dim">- 不確実な場合は「要確認」と明示してください</span>

<span className="code-comment"># ユーザープロンプト（タスクごとに入力）</span>
<span className="code-cyan">以下のユーザーストーリーを分析し、テスト分析を実施してください。</span>

<span className="code-keyword">## ユーザーストーリー</span>
<span className="code-string">{'{'}ユーザーストーリーのテキストをここに貼り付け{'}'}</span>

<span className="code-keyword">## 依頼内容</span>
<span className="code-white">1. テスト条件を列挙してください</span>
<span className="code-white">2. 曖昧さ・矛盾点を特定してください</span>
<span className="code-white">3. 非機能要件のテスト観点を提案してください</span>
<span className="code-white">4. 関連するリスクを特定してください</span>

<span className="code-keyword">## 出力形式</span>
<span className="code-white">マークダウン形式で各セクションを明確に区切って回答してください。</span></pre>
                </div>

                {/* テストケース生成プロンプト */}
                <div className="subsection-title">
                    ② テストケース生成プロンプト（Few-Shot + 制約付き）
                </div>
                <div className="code-block" data-lang="Prompt - Test Case Gen">
                    <pre><span className="code-comment"># Few-Shot の例を提供してから指示する</span>
<span className="code-cyan">あなたはISTQBの知識を持つQAエンジニアです。</span>

<span className="code-keyword">## 出力形式の例（Few-Shot）</span>
<span className="code-green">Feature: ログイン機能

  Scenario: 有効な認証情報でログインできる
    Given ユーザーが登録済みである
    When 有効なメール "user@example.com" とパスワードを入力する
    Then ダッシュボードにリダイレクトされる</span>

<span className="code-keyword">## タスク</span>
<span className="code-white">以下の受入基準に対してGherkin形式でテストケースを生成してください。</span>
<span className="code-white">等価分割法と境界値分析の両方を適用してください。</span>

<span className="code-keyword">## 受入基準</span>
<span className="code-string">パスワードは8〜20文字で、大文字・小文字・数字・特殊文字を各1文字以上含む</span>

<span className="code-keyword">## 制約（必ず守ること）</span>
<span className="code-amber">- 正常系2件、異常系5件（各条件違反1件ずつ）を生成すること</span>
<span className="code-amber">- PII（個人情報）を一切含まないこと</span>
<span className="code-amber">- 実在する名前・メールアドレスは使用しないこと</span></pre>
                </div>

                {/* プロンプトチェイニング例 */}
                <div className="subsection-title">③ プロンプトチェイニング（複合タスクを段階分解）</div>
                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-body">
                            <div className="step-title">Step 1: 要件からテスト条件を抽出</div>
                            <div className="step-desc">
                                「以下の仕様からテスト可能な条件をリストアップしてください」→
                                テスト条件リストを取得
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num green">2</div>
                        <div className="step-body">
                            <div className="step-title">Step 2: テスト条件から受入基準を生成</div>
                            <div className="step-desc">
                                前ステップの出力を入力として「各条件の受入基準をGherkin形式で作成してください」
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num purple">3</div>
                        <div className="step-body">
                            <div className="step-title">Step 3: 受入基準をレビューして改善提案</div>
                            <div className="step-desc">
                                「上記の受入基準を批判的にレビューし、見落とされているエッジケースを提案してください」
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num amber">4</div>
                        <div className="step-body">
                            <div className="step-title">Step 4: 最終受入基準の出力</div>
                            <div className="step-desc">
                                「改善提案を反映した最終版の受入基準を出力してください」→
                                使用可能な成果物
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="section-title">2.5 GenAI出力の評価メトリクス（試験頻出）</div>

                <div className="metric-grid">
                    <div className="metric-card">
                        <span className="metric-value">①</span>
                        <div className="metric-label">
                            正確性<br /><em>Accuracy</em><br />事実・要件と一致しているか
                        </div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value green">②</span>
                        <div className="metric-label">
                            完全性<br /><em>Completeness</em><br />全要素が含まれているか
                        </div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value purple">③</span>
                        <div className="metric-label">
                            関連性<br /><em>Relevance</em><br />テスト目的に役立つか
                        </div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value amber">④</span>
                        <div className="metric-label">
                            整合性<br /><em>Consistency</em><br />同プロンプトで一貫した出力か
                        </div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value">⑤</span>
                        <div className="metric-label">
                            使用可能性<br /><em>Usability</em><br />修正なしまたは最小限で使えるか
                        </div>
                    </div>
                </div>

                <div className="section-title">2.6 プロンプト改善のイテレーション・サイクル</div>

                <div className="arch-layers">
                    <div className="arch-layer">
                        <div className="arch-icon">📝</div>
                        <div>
                            <div className="arch-label">Step 1</div>
                            <div className="arch-name">プロンプト作成</div>
                            <div className="arch-desc">
                                コンテキスト・役割・指示・制約を含む初期プロンプトを作成
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-icon">▶️</div>
                        <div>
                            <div className="arch-label">Step 2</div>
                            <div className="arch-name">LLMで実行</div>
                            <div className="arch-desc">
                                Temperature を低く（0.1〜0.3）設定して実行。出力を取得
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-icon">🔍</div>
                        <div>
                            <div className="arch-label">Step 3</div>
                            <div className="arch-name">出力を評価</div>
                            <div className="arch-desc">
                                5つのメトリクス（正確性・完全性・関連性・整合性・使用可能性）で評価
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-icon">🔧</div>
                        <div>
                            <div className="arch-label">Step 4</div>
                            <div className="arch-name">問題を特定・プロンプト修正</div>
                            <div className="arch-desc">
                                指示の明確化・ネガティブプロンプト追加・例示の追加
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer pink">
                        <div className="arch-icon">💾</div>
                        <div>
                            <div className="arch-label">Step 5（終了条件）</div>
                            <div className="arch-name">品質基準を満たしたらカタログに保存</div>
                            <div className="arch-desc">
                                「ゴールデンセット」として保存。バージョン管理でチーム共有
                            </div>
                        </div>
                    </div>
                </div>

                <div className="callout success">
                    <div className="callout-title">LLM-as-Judge（LLMで出力を評価する）</div>
                    <p>
                        別のLLMを使って出力を評価する手法。コスト効率が高く人間レビューの補完として有効。<br />プロンプト例：<code
                            >「以下のテストケースの品質を1-5で評価し、改善点を示してください」</code
                        >
                    </p>
                </div>

                <div className="section-title">2.7 ゴールデンセット（Golden Set）とは</div>

                <div className="trend-card">
                    <div className="trend-tag green">Quality Assurance</div>
                    <div className="trend-title">ゴールデンセット — プロンプト品質の基準</div>
                    <div className="trend-desc">
                        <strong>定義：</strong
                        >期待する高品質な出力例のセット。プロンプトの品質評価・回帰テストに使用。<br /><br />
                        <strong>活用方法：</strong>
                        <ol
                            style={{ marginTop: '0.5rem', color: 'var(--text-secondary)', fontSize: '1rem' }}
                        >
                            <li>優れたプロンプト出力を「ゴールデンセット」として保存</li>
                            <li>プロンプト変更時に新しい出力とゴールデンセットを比較</li>
                            <li>BLEU・ROUGEスコアなどの類似度指標で定量評価</li>
                            <li>モデル変更時の品質回帰テストにも使用</li>
                        </ol>
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            {/* ============================
     CHAPTER 3: RISK MANAGEMENT
     ============================ */}
            <section id="ch3" className="chapter">
                <div className="chapter-header">
                    <span className="chapter-num red">Ch.3</span>
                    <h2 className="chapter-title">生成AIのリスク管理</h2>
                    <span className="k-level">K2〜K3 · 160分 · 19.6%</span>
                </div>

                <div className="section-title">3.1 ハルシネーション（Hallucination）— 最重要リスク</div>

                <div className="callout danger">
                    <div className="callout-title">ハルシネーションとは？</div>
                    <p>
                        LLMが「もっともらしいが、事実と異なる情報」を自信を持って生成してしまう現象。テストへの重大なリスク：存在しないAPIエンドポイント・誤った仕様を「正しい」として生成する可能性がある。
                    </p>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>種類</th>
                                <th>定義</th>
                                <th>テスト上の具体例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>事実的ハルシネーション</strong></td>
                                <td>存在しない機能・APIエンドポイントを生成</td>
                                <td>
                                    「POST /api/v2/cart/special-discount はこの動作をします」←
                                    実際に存在しない
                                </td>
                            </tr>
                            <tr>
                                <td><strong>文脈的ハルシネーション</strong></td>
                                <td>提供された仕様書と矛盾する内容を生成</td>
                                <td>
                                    仕様「上限5件」なのにテストケースが「上限10件」を前提に生成される
                                </td>
                            </tr>
                            <tr>
                                <td><strong>確信を持ったエラー</strong></td>
                                <td>誤りを高い確信度で免責なしに述べる</td>
                                <td>「このコードは正しく動作します」← 実際は重大なバグを含む</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subsection-title">ハルシネーション緩和策 6種（試験頻出）</div>

                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-body">
                            <div className="step-title">グラウンディング（Grounding）</div>
                            <div className="step-desc">
                                LLMに具体的なソース（仕様書・ドキュメント）を参照させる。「以下の仕様書のみを根拠として生成してください。仕様書に記載のない内容は生成しないでください」
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num green">2</div>
                        <div className="step-body">
                            <div className="step-title">RAG（検索拡張生成）</div>
                            <div className="step-desc">
                                ベクターDBから関連文書を自動取得してプロンプトに追加。ハルシネーションを劇的に削減
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num amber">3</div>
                        <div className="step-body">
                            <div className="step-title">Temperature の調整</div>
                            <div className="step-desc">
                                低い値（0.0〜0.3）で決定論的な出力を促す。テストケース生成では
                                Temperature=0.1 を推奨
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num purple">4</div>
                        <div className="step-body">
                            <div className="step-title">人間によるレビュー（Human Review）★必須★</div>
                            <div className="step-desc">
                                LLMが生成した全テスト成果物を人間が仕様書と照合して検証する。CT-GenAI
                                では省略不可
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">5</div>
                        <div className="step-body">
                            <div className="step-title">自己一貫性チェック（Self-Consistency）</div>
                            <div className="step-desc">
                                同じ質問を複数回実行し、一致する回答を採用する統計的アプローチ
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num red">6</div>
                        <div className="step-body">
                            <div className="step-title">根拠の要求（Ask for Sources）</div>
                            <div className="step-desc">
                                「上記の回答の根拠を示してください。確信が持てない場合は明示してください」と付け加える
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="section-title">3.2 LLMの非決定論的動作</div>

                <div className="callout warning">
                    <div className="callout-title">非決定論的動作とは</div>
                    <p>
                        同じプロンプトを実行しても、毎回異なる出力が生成される現象。テストの再現性に影響する。
                    </p>
                </div>

                <div className="compare-grid">
                    <div className="compare-card bad">
                        <div className="compare-header">❌ 対策なし（再現性がない）</div>
                        <div className="compare-content">
                            <p>同じプロンプトを実行するたびに異なる出力。品質が一定しない。</p>
                            <span className="code-snippet"
                                ><span className="ln-cmt"># 1回目の実行</span>
                                <span className="ln-warn">TC001: 年齢が負の場合はエラー</span>
                                <span className="ln-cmt"># 2回目の実行（別の出力）</span>
                                <span className="ln-warn">Scenario: 無効年齢の入力</span>
                                <span className="ln-cmt"># → 形式・内容が毎回バラバラ</span></span
                            >
                        </div>
                    </div>
                    <div className="compare-card good">
                        <div className="compare-header">✅ 対策あり（再現性を確保）</div>
                        <div className="compare-content">
                            <p>Temperature を下げ、ゴールデンセットで定量的に評価する。</p>
                            <span className="code-snippet"
                                ><span className="ln-ok">temperature = 0.1 # 低く設定</span>
                                <span className="ln-ok">seed = 42 # 固定（対応モデルのみ）</span>

                                <span className="ln-cmt"># ゴールデンセットと照合して品質判定</span>
                                <span className="ln-hi">BLEU score ≥ 0.85 → ✅ 合格</span>
                                <span className="ln-warn">BLEU score &lt; 0.85 → ⚠️ 再生成</span></span
                            >
                        </div>
                    </div>
                </div>

                <div className="section-title">
                    3.3 データプライバシー・セキュリティリスク（試験頻出）
                </div>

                <div className="arch-layers">
                    <div className="arch-layer red">
                        <div className="arch-icon">🔓</div>
                        <div>
                            <div className="arch-label">最重大リスク</div>
                            <div className="arch-name">データ漏洩（Data Leakage）</div>
                            <div className="arch-desc">
                                本番データ・PII
                                をクラウドLLMに送信すると外部サービスに漏洩する。対策：合成テストデータを使用
                                / プライベートLLM・SLM の活用 / データマスキング
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-icon">💉</div>
                        <div>
                            <div className="arch-label">重要リスク</div>
                            <div className="arch-name">
                                プロンプトインジェクション（Prompt Injection）
                            </div>
                            <div className="arch-desc">
                                <strong>直接インジェクション：</strong
                                >ユーザーが悪意あるプロンプトを入力<br />
                                <strong>間接インジェクション：</strong
                                >処理するドキュメント内に埋め込まれた指示<br />
                                → テスト対象のAIシステムがこれらに対して適切に防御しているか確認する
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-icon">©️</div>
                        <div>
                            <div className="arch-label">法的リスク</div>
                            <div className="arch-name">著作権・IPリスク</div>
                            <div className="arch-desc">
                                LLMが生成したコード・文書に著作権問題がある可能性。生成コードのオリジナリティ確認とライセンスポリシーの明確化が必要
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer">
                        <div className="arch-icon">☠️</div>
                        <div>
                            <div className="arch-label">高度なリスク</div>
                            <div className="arch-name">モデルポイズニング（Model Poisoning）</div>
                            <div className="arch-desc">
                                ファインチューニングデータに悪意あるデータが混入する攻撃。対策：学習データのソース検証・出力の継続的モニタリング
                            </div>
                        </div>
                    </div>
                </div>

                <div className="callout danger">
                    <div className="callout-title">
                        絶対に守るべきルール：PIIをクラウドLLMに送らない
                    </div>
                    <p>
                        本番データベースの顧客情報（名前・住所・クレジットカード番号）をクラウドLLMに送信することは<strong>GDPR違反</strong>につながる可能性がある。必ず<strong>合成テストデータ</strong>（架空データ）を生成して使用すること。
                    </p>
                </div>

                <div className="section-title">3.4 合成テストデータの生成</div>

                <div className="code-block" data-lang="Prompt - Synthetic Data">
                    <pre><span className="code-comment"># 合成テストデータ生成プロンプトの良い例</span>
<span className="code-cyan">以下の条件で合成テストデータを100件生成してください：</span>

<span className="code-keyword">- 架空の日本人の名前（実在する人物は使用しないこと）</span>
<span className="code-keyword">- 架空の住所（実在する正確な番地は使用しないこと）</span>
<span className="code-keyword">- 架空のメールアドレス（example.com ドメインを使用）</span>
<span className="code-keyword">- 架空の電話番号（000-から始める）</span>
<span className="code-keyword">- 架空のクレジットカード番号（4111-1111-1111-1111 形式）</span>

<span className="code-amber">出力形式：CSV（UTF-8）</span>
<span className="code-amber">ヘッダー：name, address, email, phone, card_number</span></pre>
                </div>

                <div className="section-title">3.5 エネルギー消費・環境影響</div>

                <div className="trend-card">
                    <div className="trend-tag amber">Sustainability</div>
                    <div className="trend-title">GenAI のCO₂排出を最小化する</div>
                    <div className="trend-desc">
                        <ul
                            style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '0.5rem' }}
                        >
                            <li>
                                <strong>モデルサイズの最適化：</strong>シンプルなタスクにはSLMで十分
                            </li>
                            <li>
                                <strong>バッチ処理の活用：</strong
                                >リアルタイム不要なテストタスクはまとめて実行
                            </li>
                            <li>
                                <strong>プロンプトの効率化：</strong
                                >不必要に長いプロンプトを避ける（トークン削減）
                            </li>
                            <li>
                                <strong>ローカルモデルの検討：</strong
                                >Ollama等でSLMをローカルに動かす
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="section-title">3.6 AI規制・標準フレームワーク</div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>規制・標準</th>
                                <th>概要</th>
                                <th>テストへの影響</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>EU AI Act（2024年〜）</strong></td>
                                <td>高リスクAIへの厳格な要件。段階的に施行開始</td>
                                <td>
                                    高リスク分類のシステムのテストプロセスを文書化・検証する義務
                                </td>
                            </tr>
                            <tr>
                                <td><strong>GDPR</strong></td>
                                <td>EU市民のPIIに関する規制</td>
                                <td>テストデータの匿名化・仮名化が必須要件</td>
                            </tr>
                            <tr>
                                <td><strong>NIST AI RMF</strong></td>
                                <td>AIシステムのリスク管理フレームワーク</td>
                                <td>テスト計画にリスク管理の観点を組み込む</td>
                            </tr>
                            <tr>
                                <td><strong>ISO/IEC 42001</strong></td>
                                <td>AI管理システムの国際標準</td>
                                <td>AIシステムのガバナンスとコンプライアンス対応</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="divider"></div>

            {/* ============================
     CHAPTER 4: LLM INFRASTRUCTURE
     ============================ */}
            <section id="ch4" className="chapter">
                <div className="chapter-header">
                    <span className="chapter-num amber">Ch.4</span>
                    <h2 className="chapter-title">LLMパワードテストインフラ</h2>
                    <span className="k-level">K2〜K3 · 110分 · 13.4%</span>
                </div>

                <div className="section-title">4.1 LLMパワードテストインフラの全体アーキテクチャ</div>

                <div className="arch-layers">
                    <div className="arch-layer pink">
                        <div className="arch-icon">👤</div>
                        <div>
                            <div className="arch-label">Layer 5 · User</div>
                            <div className="arch-name">テスター（ユーザー）</div>
                            <div className="arch-desc">プロンプトを入力して成果物を受け取る</div>
                        </div>
                    </div>
                    <div className="arch-layer">
                        <div className="arch-icon">⚙️</div>
                        <div>
                            <div className="arch-label">Layer 4 · Orchestration</div>
                            <div className="arch-name">
                                オーケストレーション層（LangChain / LlamaIndex）
                            </div>
                            <div className="arch-desc">
                                LLM・ベクターDB・テストツールを統合管理。プロンプトチェイニング・RAGパイプラインを制御
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-icon">🤖</div>
                        <div>
                            <div className="arch-label">Layer 3 · AI Engine</div>
                            <div className="arch-name">LLM / SLM（GPT-4, Claude, Llama 等）</div>
                            <div className="arch-desc">
                                テキスト生成の中核。クラウドAPI または オンプレミス SLM
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-icon">🗄️</div>
                        <div>
                            <div className="arch-label">Layer 2 · Knowledge</div>
                            <div className="arch-name">ベクターDB（Chroma / Weaviate / Pinecone）</div>
                            <div className="arch-desc">
                                仕様書・テストケース・ドキュメントを埋め込みとして格納。意味的検索でRAGを実現
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-icon">📁</div>
                        <div>
                            <div className="arch-label">Layer 1 · Data</div>
                            <div className="arch-name">ドキュメントストア（仕様書・テスト資産）</div>
                            <div className="arch-desc">RAGのソースとなる組織のナレッジベース</div>
                        </div>
                    </div>
                </div>

                <div className="section-title">
                    4.2 RAG（検索拡張生成）— ハルシネーション対策の切り札（試験頻出）
                </div>

                <div className="callout info">
                    <div className="callout-title">RAGとは？</div>
                    <p>
                        <strong>Retrieval-Augmented Generation：</strong
                        >LLMの回答生成時に、関連する外部文書をリアルタイムで検索してプロンプトに追加する技術。ハルシネーションを削減し、最新情報・組織固有情報を参照可能にする。
                    </p>
                </div>

                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">①</div>
                        <div className="step-body">
                            <div className="step-title">ドキュメント準備フェーズ（オフライン）</div>
                            <div className="step-desc">
                                仕様書・テストケース・ドキュメントをチャンクに分割 →
                                埋め込みモデルでベクター化 → ベクターDBに格納
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num green">②</div>
                        <div className="step-body">
                            <div className="step-title">クエリ実行フェーズ（オンライン）</div>
                            <div className="step-desc">
                                ユーザーの質問をベクター化 → ベクターDBでコサイン類似度検索 →
                                関連チャンク（上位5件）を取得
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num amber">③</div>
                        <div className="step-body">
                            <div className="step-title">プロンプト構築</div>
                            <div className="step-desc">
                                「以下の仕様を参照してください：{'{'}関連チャンク{'}'}」として取得した文書をプロンプトに組み込む
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num purple">④</div>
                        <div className="step-body">
                            <div className="step-title">LLMによる根拠ある回答生成</div>
                            <div className="step-desc">
                                文書に根拠を持った、ハルシネーションの少ない出力を生成
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="subsection-title">RAG vs ファインチューニング の選択基準</div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>比較観点</th>
                                <th>RAG</th>
                                <th>ファインチューニング</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>更新容易性</strong></td>
                                <td>✅ ベクターDBを更新するだけ</td>
                                <td>❌ 再トレーニングが必要（高コスト）</td>
                            </tr>
                            <tr>
                                <td><strong>最新情報への対応</strong></td>
                                <td>✅ リアルタイムで最新情報を参照</td>
                                <td>❌ 学習データの時点に限定</td>
                            </tr>
                            <tr>
                                <td><strong>プロンプト複雑さ</strong></td>
                                <td>❌ コンテキストに文書を追加するため長くなる</td>
                                <td>✅ 学習済みなのでプロンプトが短くなる</td>
                            </tr>
                            <tr>
                                <td><strong>初期コスト</strong></td>
                                <td>✅ 比較的低い</td>
                                <td>❌ 高い（GPU・データ準備コスト）</td>
                            </tr>
                            <tr>
                                <td><strong>推奨場面</strong></td>
                                <td>月次更新の仕様書・変化するドキュメント</td>
                                <td>組織固有の深い専門知識の埋め込み</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-title">4.3 LLMパワードエージェント（試験頻出）</div>

                <div className="callout info">
                    <div className="callout-title">LLMエージェントとは？</div>
                    <p>
                        LLMを「脳」として、ツール・アクションを自律的に実行するシステム。「思考 →
                        アクション決定 → 実行 → 観察」のループで動作。
                    </p>
                </div>

                <div className="arch-layers">
                    <div className="arch-layer">
                        <div className="arch-icon">🔍</div>
                        <div>
                            <div className="arch-label">エージェントの活用例①</div>
                            <div className="arch-name">テスト分析エージェント</div>
                            <div className="arch-desc">
                                Jiraの新ユーザーストーリーを自動監視 → 影響テストケースを自動特定 →
                                テスト条件を自動生成
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-icon">▶️</div>
                        <div>
                            <div className="arch-label">エージェントの活用例②</div>
                            <div className="arch-name">テスト実行エージェント</div>
                            <div className="arch-desc">
                                CIパイプラインの失敗を自動解析 → ログ収集・再実行 →
                                根本原因の特定と報告
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-icon">🔧</div>
                        <div>
                            <div className="arch-label">エージェントの活用例③</div>
                            <div className="arch-name">
                                テストメンテナンスエージェント（セルフヒーリング）
                            </div>
                            <div className="arch-desc">
                                UI変更を検出 → テストスクリプトの更新を自動提案 →
                                セルフヒーリングテストの実現
                            </div>
                        </div>
                    </div>
                </div>

                <div className="alert red">
                    <strong>⚠️ エージェントのリスク：</strong
                    >自律的なアクションが予期しない副作用を生む可能性がある。必ず「ヒューマン・イン・ザ・ループ」（重要な判断は人間が確認）を設計に組み込むこと。
                </div>

                <div className="section-title">
                    4.4 LLMOps（Large Language Model Operations）— 試験頻出
                </div>

                <div className="callout info">
                    <div className="callout-title">LLMOpsとは？</div>
                    <p>
                        LLMを本番環境でデプロイ・管理・改善するためのオペレーション・プラクティスのセット。MLOpsのLLM版。<strong>「プロンプトをコードと同様に扱う」</strong>が基本思想。
                    </p>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>LLMOpsコンポーネント</th>
                                <th>内容</th>
                                <th>実践例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>プロンプトバージョン管理</strong></td>
                                <td>GitによるプロンプトのPR・レビュー・マージ管理</td>
                                <td>プロンプトカタログをGitリポジトリで管理</td>
                            </tr>
                            <tr>
                                <td><strong>アクセス制御</strong></td>
                                <td>誰がどのLLMを・どの目的で使えるかの権限管理</td>
                                <td>APIキーのローテーション・Secrets管理</td>
                            </tr>
                            <tr>
                                <td><strong>評価セット（Eval Set）</strong></td>
                                <td>出力品質の継続的測定基準。回帰評価（モデル更新時）</td>
                                <td>ゴールデンセットとの自動比較CI</td>
                            </tr>
                            <tr>
                                <td><strong>実行ログ（Run Logs）</strong></td>
                                <td>
                                    全プロンプト・出力の追跡。コスト・レイテンシーのモニタリング
                                </td>
                                <td>MLflow / Langfuse でのトレース記録</td>
                            </tr>
                            <tr>
                                <td><strong>ガードレール</strong></td>
                                <td>出力フィルタリング（PII検出等）。コンテンツポリシーの強制</td>
                                <td>出力から PII を自動検出して除去するポストプロセッサ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="divider"></div>

            {/* ============================
     CHAPTER 5: DEPLOYMENT
     ============================ */}
            <section id="ch5" className="chapter">
                <div className="chapter-header">
                    <span className="chapter-num purple">Ch.5</span>
                    <h2 className="chapter-title">テスト組織への生成AIの導入と統合</h2>
                    <span className="k-level">K2〜K3 · 80分 · 9.8%</span>
                </div>

                <div className="section-title">5.1 シャドーAI — 最大の組織リスク（試験頻出）</div>

                <div className="callout danger">
                    <div className="callout-title">シャドーAI（Shadow AI）とは？</div>
                    <p>
                        組織の公式承認・管理なしに、個人または部門が<strong>勝手にGenAIツールを使用する現象</strong>。禁止するだけでは解決しない。
                    </p>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>シャドーAIのリスク</th>
                                <th>具体的な問題</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>🔓 データ漏洩</td>
                                <td>機密仕様書・PIIがクラウドLLMに送信される</td>
                            </tr>
                            <tr>
                                <td>🎭 品質の不一致</td>
                                <td>ハルシネーションによる誤ったテスト成果物の使用</td>
                            </tr>
                            <tr>
                                <td>⚖️ コンプライアンス違反</td>
                                <td>GDPR・EU AI Act への違反</td>
                            </tr>
                            <tr>
                                <td>©️ 著作権問題</td>
                                <td>生成コードのライセンス問題</td>
                            </tr>
                            <tr>
                                <td>🔒 セキュリティ脆弱性</td>
                                <td>プロンプトインジェクション脆弱性の導入</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="alert green">
                    <strong>✅ 対策：</strong
                    >「禁止」より「誘導」が効果的。組織公式のGenAIポリシー策定 +
                    承認済みツールリスト +
                    安全なプロンプトカタログを提供して、安全な使い方を積極的に教育する。
                </div>

                <div className="section-title">5.2 LLM vs SLM — 適切なモデル選定基準</div>

                <div className="compare-grid">
                    <div className="compare-card good">
                        <div className="compare-header">
                            🏢 大規模LLM（GPT-4, Claude 3, Gemini Ultra）
                        </div>
                        <div className="compare-content">
                            ✅ 複雑なテスト分析・設計に適している<br />
                            ✅ 高い創造性・多様性<br />
                            ❌ コストが高い・レイテンシが大きい<br />
                            ❌ クラウドへのデータ送信リスク<br /><br />
                            <strong>推奨場面：</strong>高度な分析・設計・一般機密情報を扱わない場合
                        </div>
                    </div>
                    <div className="compare-card good">
                        <div className="compare-header">
                            📱 小規模SLM（Phi-3, Mistral 7B, Llama 3.2）
                        </div>
                        <div className="compare-content">
                            ✅ オンプレミス / デバイス上で動作（プライバシー保護）<br />
                            ✅ コストが低い・低レイテンシ<br />
                            ❌ 複雑なタスクには能力が不足<br /><br />
                            <strong>推奨場面：</strong
                            >シンプルなテストタスク・PII含む機密データを扱う場合
                        </div>
                    </div>
                </div>

                <div className="section-title">5.3 GenAI採用の4段階ロードマップ（試験頻出）</div>

                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-body">
                            <div className="step-title">探索・実験（Exploration）</div>
                            <div className="step-desc">
                                小規模パイロット・PoC
                                の実施。チームのAIリテラシー向上。リスクと機会の初期評価。まず「やってみる」フェーズ
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num green">2</div>
                        <div className="step-body">
                            <div className="step-title">定着・スケール（Adoption &amp; Scaling）</div>
                            <div className="step-desc">
                                効果的なユースケースの特定・標準化。プロンプトカタログの構築。評価フレームワークの確立。段階的なロールアウト
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num amber">3</div>
                        <div className="step-body">
                            <div className="step-title">
                                統合・最適化（Integration &amp; Optimization）
                            </div>
                            <div className="step-desc">
                                CI/CDパイプラインへの組み込み。LLMOpsの本格運用。ROIの測定・最適化。高度なアーキテクチャ（RAG・エージェント）の導入
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num purple">4</div>
                        <div className="step-body">
                            <div className="step-title">変革・革新（Transformation）</div>
                            <div className="step-desc">
                                GenAI前提のテストプロセス再設計。新しいテストロール（プロンプトエンジニア等）の確立。継続的改善サイクルの確立
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="section-title">5.4 GenAI時代のテスター必須スキル</div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>スキルカテゴリ</th>
                                <th>具体的なスキル</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>技術スキル</strong></td>
                                <td>
                                    プロンプトエンジニアリングの基礎 / LLM出力の評価・検証能力 /
                                    ハルシネーション検出 / テストデータの合成・管理 /
                                    RAG・エージェントシステムの基本理解
                                </td>
                            </tr>
                            <tr>
                                <td><strong>批判的思考スキル</strong></td>
                                <td>
                                    LLM出力を盲信しない姿勢 / オートメーションバイアスの認識と回避 /
                                    GenAIが適切・不適切なユースケースの区別
                                </td>
                            </tr>
                            <tr>
                                <td><strong>新しいロール</strong></td>
                                <td>
                                    テストアナリスト → AIアシステッドテストアナリスト /
                                    自動化エンジニア → プロンプトエンジニア + 自動化エンジニア /
                                    テスト管理者 → GenAI戦略責任者
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-title">5.5 テストプロセスの Before / After GenAI</div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>テスト活動</th>
                                <th>Before GenAI</th>
                                <th>After GenAI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>テスト分析</strong></td>
                                <td>人間が仕様書を手動でレビューして条件を抽出（数時間）</td>
                                <td>LLMが仕様書を解析し条件を提案 → 人間が検証（数十分）</td>
                            </tr>
                            <tr>
                                <td><strong>テストケース設計</strong></td>
                                <td>テスターが全テストケースを手動で作成</td>
                                <td>LLMがドラフト生成 → テスターが修正・承認</td>
                            </tr>
                            <tr>
                                <td><strong>自動化スクリプト</strong></td>
                                <td>全スクリプトをゼロから手動コーディング</td>
                                <td>LLMがテストケースからスクリプトドラフトを生成</td>
                            </tr>
                            <tr>
                                <td><strong>欠陥分析・レポート</strong></td>
                                <td>手動でログを解析・レポートを作成</td>
                                <td>LLMがログを解析してサマリー・根本原因仮説を生成</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout warning">
                    <div className="callout-title">不変の原則：人間のレビューは絶対に省略できない</div>
                    <p>
                        GenAIは「アシスタント」として機能する。最終的な品質判断・承認は<strong>常に人間が行う</strong>。「AI生成
                        = 正確」ではなく「AI生成 = ドラフト」の意識を持つこと。
                    </p>
                </div>
            </section>

            <div className="divider"></div>

            {/* ============================
     EXAM SECTION
     ============================ */}
            <section id="exam" className="chapter">
                <div className="chapter-header">
                    <span className="chapter-num green">試験</span>
                    <h2 className="chapter-title">試験対策・サンプル問題</h2>
                </div>

                <div className="section-title">章別重要度・出題配分</div>

                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-ch">Chapter 1 · 生成AI入門</div>
                        <div className="exam-name">基礎概念・LLM種類</div>
                        <div className="exam-stars">★★★☆☆</div>
                        <div className="exam-pts">推定 6〜8問</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-ch">Chapter 2 · プロンプト設計</div>
                        <div className="exam-name">プロンプト技法・評価</div>
                        <div className="exam-stars">★★★★★</div>
                        <div className="exam-pts">推定 16〜18問（最多）</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-ch">Chapter 3 · リスク管理</div>
                        <div className="exam-name">ハルシネーション・PII</div>
                        <div className="exam-stars">★★★★★</div>
                        <div className="exam-pts">推定 8〜10問</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-ch">Chapter 4 · LLMインフラ</div>
                        <div className="exam-name">RAG・エージェント・LLMOps</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-pts">推定 6〜8問</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-ch">Chapter 5 · 組織導入</div>
                        <div className="exam-name">シャドーAI・戦略・ロードマップ</div>
                        <div className="exam-stars">★★★☆☆</div>
                        <div className="exam-pts">推定 4〜6問</div>
                    </div>
                </div>

                <div className="section-title">必ず覚える重要概念チェックリスト</div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>カテゴリ</th>
                                <th>必須暗記事項</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>LLMの3種類</strong></td>
                                <td>
                                    ① ファンデーション ② インストラクション・チューニング済み ③
                                    推論LLM（o1等）
                                </td>
                            </tr>
                            <tr>
                                <td><strong>プロンプト技法6種</strong></td>
                                <td>
                                    ゼロショット / フューショット / CoT / メタプロンプティング /
                                    プロンプトチェイニング / セルフリフレクション
                                </td>
                            </tr>
                            <tr>
                                <td><strong>ハルシネーション3種</strong></td>
                                <td>
                                    事実的ハルシネーション / 文脈的ハルシネーション /
                                    確信を持ったエラー
                                </td>
                            </tr>
                            <tr>
                                <td><strong>緩和策6種</strong></td>
                                <td>
                                    グラウンディング / RAG / Temperature調整 / 人間レビュー（必須）
                                    / 自己一貫性 / 根拠の要求
                                </td>
                            </tr>
                            <tr>
                                <td><strong>出力評価5メトリクス</strong></td>
                                <td>正確性 / 完全性 / 関連性 / 整合性 / 使用可能性</td>
                            </tr>
                            <tr>
                                <td><strong>プロンプトインジェクション</strong></td>
                                <td>
                                    直接インジェクション（ユーザー入力）/
                                    間接インジェクション（ドキュメント内）
                                </td>
                            </tr>
                            <tr>
                                <td><strong>採用4段階</strong></td>
                                <td>探索 → 定着・スケール → 統合・最適化 → 変革・革新</td>
                            </tr>
                            <tr>
                                <td><strong>LLMOps要素</strong></td>
                                <td>
                                    プロンプトver管理 / アクセス制御 / 評価セット / 実行ログ /
                                    ガードレール
                                </td>
                            </tr>
                            <tr>
                                <td><strong>RAG vs ファインチューニング</strong></td>
                                <td>
                                    RAG = 更新容易・低コスト / ファインチューニング =
                                    深い知識・プロンプト簡素化
                                </td>
                            </tr>
                            <tr>
                                <td><strong>CT-AI vs CT-GenAI</strong></td>
                                <td>
                                    CT-AI = AIをテストする（SUT=AI） / CT-GenAI =
                                    テストにAIを使う（AI=手段）
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-title">サンプル問題 6題と解説</div>

                {/* Q1 */}
                <div className="trend-card">
                    <div className="trend-tag">問題1 · K2 · Ch.1 基礎</div>
                    <div className="trend-title">コンテキストウィンドウがテストに与える影響</div>
                    <div className="trend-desc">
                        <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                            Q.
                            「コンテキストウィンドウ」がソフトウェアテストに与える影響として最も適切なものはどれか？
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>A) LLMが生成できるコードの複雑さを制限する</p>
                        <p>
                            B)
                            LLMが一度に処理できる情報量の上限があり、長い仕様書を直接扱えない場合がある
                        </p>
                        <p>C) プロンプトのレスポンス速度を決定する</p>
                        <p>D) LLMのトレーニングデータの品質を示す</p>
                        <div className="alert cyan" style={{ marginTop: '1rem' }}>
                            <strong>✅ 正解：B</strong><br />
                            コンテキストウィンドウ＝LLMが1回の推論で考慮できる最大トークン数の上限。長い仕様書をそのまま渡せない場合があり、RAGを使って関連情報のみを選択的に提供する動機になる。
                        </div>
                    </div>
                </div>

                {/* Q2 */}
                <div className="trend-card">
                    <div className="trend-tag green">問題2 · K3 · Ch.2 プロンプト</div>
                    <div className="trend-title">出力形式の制御に最適なプロンプト技法</div>
                    <div className="trend-desc">
                        <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                            Q.
                            テスターがGherkin形式でテストケースを生成しようとしたが、LLMは毎回異なる形式で出力した。最も効果的な改善策はどれか？
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            A) より詳細な指示を追加したゼロショットプロンプト
                        </p>
                        <p>B) 望ましい形式の例を1〜3件示すフューショットプロンプト</p>
                        <p>C) LLMにステップバイステップで考えさせるCoT</p>
                        <p>D) より長いシステムプロンプトを作成する</p>
                        <div className="alert cyan" style={{ marginTop: '1rem' }}>
                            <strong>✅ 正解：B（フューショットプロンプト）</strong><br />
                            特定の出力形式を確実に得たい場合、フューショットが最も効果的。1〜3件の期待する出力例を提供することで、LLMは形式を学習して同様の形式で出力する。
                        </div>
                    </div>
                </div>

                {/* Q3 */}
                <div className="trend-card">
                    <div className="trend-tag red">問題3 · K2 · Ch.3 リスク</div>
                    <div className="trend-title">ハルシネーションの種類と緩和策</div>
                    <div className="trend-desc">
                        <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                            Q.
                            LLMが「存在しないAPIエンドポイントのテストケースを生成」した。これは何か？最も効果的な緩和策はどれか？
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>A) バイアス / Temperature を 0 にする</p>
                        <p>
                            B) 事実的ハルシネーション /
                            RAGまたはグラウンディングで実際のAPI仕様を参照させる
                        </p>
                        <p>C) 推論エラー / フューショットプロンプトを使う</p>
                        <p>D) コンテキストドリフト / コンテキストウィンドウを拡大する</p>
                        <div className="alert cyan" style={{ marginTop: '1rem' }}>
                            <strong>✅ 正解：B</strong><br />
                            「存在しないものを正しいとして生成」＝事実的ハルシネーション。緩和策：RAGでAPI仕様書をプロンプトに参照させる（グラウンディング）。「仕様書に存在するエンドポイントのみ使用」と明示する。
                        </div>
                    </div>
                </div>

                {/* Q4 */}
                <div className="trend-card">
                    <div className="trend-tag amber">問題4 · K2 · Ch.4 インフラ</div>
                    <div className="trend-title">RAG vs ファインチューニングの選択</div>
                    <div className="trend-desc">
                        <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                            Q.
                            テスト仕様書が毎月更新される組織で、LLMに仕様書を参照させたい。最適なアーキテクチャはどれか？
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            A) 毎月LLMをファインチューニングして最新仕様を学習させる
                        </p>
                        <p>B) 仕様書をベクターDBに格納してRAGを使用する</p>
                        <p>C) コンテキストウィンドウに全仕様書を含める</p>
                        <p>D) 汎用LLMをそのまま使用する</p>
                        <div className="alert cyan" style={{ marginTop: '1rem' }}>
                            <strong>✅ 正解：B（RAG）</strong><br />
                            ファインチューニング（A）は毎月の再トレーニングが莫大なコスト。RAGなら仕様書更新時にベクターDBを更新するだけ。コンテキストウィンドウ（C）は大量文書を収められない。汎用LLM（D）は組織固有仕様を知らない。
                        </div>
                    </div>
                </div>

                {/* Q5 */}
                <div className="trend-card">
                    <div className="trend-tag red">問題5 · K3 · Ch.3 プライバシー</div>
                    <div className="trend-title">本番データをLLMに送る危険性</div>
                    <div className="trend-desc">
                        <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                            Q.
                            テスターが本番DBの顧客の実名・電話番号・住所をクラウドLLMに渡してテストケース生成を試みた。最大リスクと対策はどれか？
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>A) ハルシネーションリスク / RAGを使用する</p>
                        <p>B) データ漏洩リスク / 合成テストデータを生成して代わりに使用する</p>
                        <p>C) パフォーマンスリスク / より大きいモデルを使用する</p>
                        <p>D) バイアスリスク / Temperature を低くする</p>
                        <div className="alert cyan" style={{ marginTop: '1rem' }}>
                            <strong>✅ 正解：B</strong><br />
                            本番顧客データをクラウドLLMに送信＝データ漏洩リスク（GDPR違反の可能性）。対策：架空の名前・住所だけを含む合成テストデータをLLMで生成して使用する。または既存のデータマスキングツールで仮名化する。
                        </div>
                    </div>
                </div>

                {/* Q6 */}
                <div className="trend-card">
                    <div className="trend-tag purple">問題6 · K2 · Ch.5 組織</div>
                    <div className="trend-title">シャドーAIの最大リスク</div>
                    <div className="trend-desc">
                        <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                            Q.
                            テストチームのメンバーが各自で外部LLMを承認なしに使い始めた。最も深刻なリスクはどれか？
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            A) テストケースの質が向上しすぎてコストが増加する
                        </p>
                        <p>
                            B)
                            機密データがクラウドLLMプロバイダーに送信されるプライバシーリスクと組織コンプライアンス違反
                        </p>
                        <p>C) テスターが新ツールを学ぶことで本来業務時間が減少する</p>
                        <p>D) LLMが常に正しいテストケースを生成するため人間レビューが減少する</p>
                        <div className="alert cyan" style={{ marginTop: '1rem' }}>
                            <strong>✅ 正解：B（シャドーAI）</strong><br />
                            シャドーAI最大リスク：機密仕様書・個人データのクラウドへの漏洩、GDPR等の規制違反。対策：組織公式のGenAIポリシー策定、承認済みツールリスト提供、プロンプトカタログ公開で「安全な使い方へ誘導」。
                        </div>
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            {/* ============================
     REFERENCES
     ============================ */}
            <section id="refs" className="chapter">
                <div className="chapter-header">
                    <span className="chapter-num">REF</span>
                    <h2 className="chapter-title">参考文献・公式リソース</h2>
                </div>

                <div className="section-title">🏛️ ISTQB® 公式リソース</div>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/gen-ai/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">公式 · 一次情報源</div>
                        <div className="ref-title">CT-GenAI 認定ページ（公式）</div>
                        <div className="ref-url">https://istqb.org/certifications/gen-ai/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/?sdm_process_download=1&download_id=6295"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">公式 · シラバス</div>
                        <div className="ref-title">CT-GenAI シラバス v1.0（公式PDF）</div>
                        <div className="ref-url">
                            https://istqb.org/?sdm_process_download=1&download_id=6295
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/?sdm_process_download=1&download_id=6309"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">公式 · 試験問題</div>
                        <div className="ref-title">サンプル試験問題 A v1.0</div>
                        <div className="ref-url">
                            https://istqb.org/?sdm_process_download=1&download_id=6309
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/?sdm_process_download=1&download_id=6301"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">公式 · 試験解答</div>
                        <div className="ref-title">サンプル試験解答 A v1.0</div>
                        <div className="ref-url">
                            https://istqb.org/?sdm_process_download=1&download_id=6301
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/?sdm_process_download=1&download_id=6305"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">公式 · ガイドライン</div>
                        <div className="ref-title">認定ガイドライン v1.0</div>
                        <div className="ref-url">
                            https://istqb.org/?sdm_process_download=1&download_id=6305
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://glossary.istqb.org/en_US/search?term="
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">公式 · 用語集</div>
                        <div className="ref-title">ISTQB グロッサリー（用語検索）</div>
                        <div className="ref-url">https://glossary.istqb.org/en_US/search?term=</div>
                    </a>
                </div>

                <div className="section-title">📢 試験プロバイダー・学習リソース</div>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://isqi.org/ISTQB-Certified-Tester-Testing-with-Generative-AI-CT-GenAI/CT-GenAI.101"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">試験 · プロバイダー</div>
                        <div className="ref-title">iSQI 試験情報（CT-GenAI）</div>
                        <div className="ref-url">https://isqi.org/...CT-GenAI.101</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://www.istqb.guru/certified-tester-generative-ai/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">学習 · ガイド</div>
                        <div className="ref-title">ISTQB.Guru CT-GenAI 解説ガイド</div>
                        <div className="ref-url">
                            https://www.istqb.guru/certified-tester-generative-ai/
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://isqi.org/media/ce/63/da/1753702121/CT-GenAI%20-%20Syllabus%20v1.0_all_.pdf"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">学習 · シラバスPDF</div>
                        <div className="ref-title">iSQI シラバス PDF（直接リンク）</div>
                        <div className="ref-url">https://isqi.org/...CT-GenAI-Syllabus-v1.0.pdf</div>
                    </a>
                </div>

                <div className="section-title">🔧 関連ツール・フレームワーク</div>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://python.langchain.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">ツール · LLMオーケストレーション</div>
                        <div className="ref-title">LangChain 公式ドキュメント</div>
                        <div className="ref-url">https://python.langchain.com/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.llamaindex.ai/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">ツール · LLMオーケストレーション</div>
                        <div className="ref-title">LlamaIndex 公式ドキュメント</div>
                        <div className="ref-url">https://docs.llamaindex.ai/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.trychroma.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">ツール · ベクターDB</div>
                        <div className="ref-title">Chroma（ベクターDB）</div>
                        <div className="ref-url">https://docs.trychroma.com/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://mlflow.org/docs/latest/llms/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">ツール · LLMOps</div>
                        <div className="ref-title">MLflow LLM Tracking</div>
                        <div className="ref-url">https://mlflow.org/docs/latest/llms/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.confident-ai.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">ツール · LLM評価</div>
                        <div className="ref-title">DeepEval（LLM評価フレームワーク）</div>
                        <div className="ref-url">https://docs.confident-ai.com/</div>
                    </a>
                    <a className="ref-card" href="https://ollama.com/" target="_blank" rel="noopener">
                        <div className="ref-category">ツール · ローカルLLM</div>
                        <div className="ref-title">Ollama（ローカルSLM実行）</div>
                        <div className="ref-url">https://ollama.com/</div>
                    </a>
                </div>

                <div className="section-title">📋 AI規制・セキュリティ・プロンプト標準</div>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://artificialintelligenceact.eu/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">規制 · EU AI法</div>
                        <div className="ref-title">EU AI Act 公式ポータル</div>
                        <div className="ref-url">https://artificialintelligenceact.eu/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://owasp.org/www-project-top-10-for-large-language-model-applications/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">セキュリティ · LLMリスク</div>
                        <div className="ref-title">OWASP LLM Top 10</div>
                        <div className="ref-url">https://owasp.org/...llm-applications/</div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">プロンプト · ガイド</div>
                        <div className="ref-title">Anthropic プロンプトエンジニアリング公式</div>
                        <div className="ref-url">
                            https://docs.anthropic.com/...prompt-engineering/overview
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">規制 · リスク管理</div>
                        <div className="ref-title">NIST AI RMF（AIリスク管理フレームワーク）</div>
                        <div className="ref-url">https://www.nist.gov/...AI%20RMF%201.0.pdf</div>
                    </a>
                </div>

                <div className="section-title">📖 関連ISTQB資格</div>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-foundation-level/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">前提資格</div>
                        <div className="ref-title">CTFL v4.0（Foundation Level）</div>
                        <div className="ref-url">
                            https://istqb.org/certifications/certified-tester-foundation-level/
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">関連資格</div>
                        <div className="ref-title">CT-AI（AIシステムをテストする）</div>
                        <div className="ref-url">
                            https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"
                        target="_blank"
                        rel="noopener"
                    >
                        <div className="ref-category">関連資格</div>
                        <div className="ref-title">CTAL-TAE v2.0（テスト自動化エンジニアリング）</div>
                        <div className="ref-url">https://istqb.org/...ctal-tae-v2-0/</div>
                    </a>
                </div>
            </section>

            {/* ============================
     FOOTER
     ============================ */}
            <footer className="footer">
                <p>ISTQB® CT-GenAI v1.0 完全学習ガイド — 2025年最新版</p>
                <p style={{ marginTop: '0.5rem' }}>
                    GA正式リリース：2025年7月25日 | 一次情報源：<a
                        href="https://istqb.org/certifications/gen-ai/"
                        target="_blank"
                        rel="noopener"
                        >istqb.org/certifications/gen-ai/</a
                    >
                </p>
                <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                    ⚠️
                    本資料はISTQB®が公認したトレーニング資料ではありません。公式シラバス・サンプル問題と合わせて使用してください。
                </p>
            </footer>
        
        </div>
    );
}
