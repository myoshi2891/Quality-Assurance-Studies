
import React from 'react';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './istqb-ctel-tm-otm-complete-guide.css';

export default function IstqbCtelTmOtmCompleteGuide() {
    return (
        <div className="istqb-ctel-tm-otm-page">
            <NavBar />
            <div className="wrapper">
            <section id="overview">
                <div className="section-header">
                    <span className="chapter-num">目次</span>
                    <h2 className="section-title">コンテンツ全体像</h2>
                </div>
                <div className="toc-grid">
                    <a className="toc-card" href="#ch1"
                        ><div className="toc-num">CHAPTER 1 | K3-K6</div>
                        <div className="toc-title">外部関係の管理</div></a
                    >
                    <a className="toc-card" href="#ch2"
                        ><div className="toc-num">CHAPTER 2 | K2-K5</div>
                        <div className="toc-title">組織横断的管理</div></a
                    >
                    <a className="toc-card" href="#ch3"
                        ><div className="toc-num">CHAPTER 3 | K3-K5</div>
                        <div className="toc-title">プロジェクト管理の基礎</div></a
                    >
                    <a className="toc-card" href="#ch4"
                        ><div className="toc-num">CHAPTER 4 | K3-K4</div>
                        <div className="toc-title">テストプロジェクトの評価と報告</div></a
                    >
                    <a className="toc-card" href="#ch5"
                        ><div className="toc-num">CHAPTER 5 | K2-K4</div>
                        <div className="toc-title">ドメインとプロジェクト要因</div></a
                    >
                    <a className="toc-card" href="#ch6"
                        ><div className="toc-num">CHAPTER 6 | K2-K4</div>
                        <div className="toc-title">有効性と効率性の評価</div></a
                    >
                </div>

                <h2>資格ロードマップ</h2>
                <div className="mermaid-wrap" id="diag-roadmap">
                    <Mermaid chart={`flowchart TD
FL["Foundation Level<br/>CTFL v4.0 — 必須前提資格"]
AL["Advanced Level<br/>CTAL-TM v3.0 — 必須前提資格<br/>実務経験 5年以上"]
STM["Part 1:<br/>CTEL-TM-STM<br/>Strategic Test Management"]
OTM["Part 2:<br/>CTEL-TM-OTM<br/>Operational Test Management<br/>本ガイドが対象"]
MTT["Part 3:<br/>CTEL-TM-MTT<br/>Managing the Test Team"]
FULL["CTEL-TM<br/>完全資格取得<br/>3パートすべて合格 | 有効期間: 7年"]
FL -->|必須| AL
AL -->|必須| STM
STM --> OTM
OTM --> MTT
STM & OTM & MTT --> FULL`} />
                </div>

                <h2>試験概要と前提条件</h2>
                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-value">5+</div>
                        <div className="metric-label">年以上の実務経験</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">7年</div>
                        <div className="metric-label">資格の有効期間</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">K6</div>
                        <div className="metric-label">最高認知レベル（創造）</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">3部</div>
                        <div className="metric-label">構成（STM/OTM/MTT）</div>
                    </div>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>項目</th>
                                <th>内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>正式名称</strong></td>
                                <td>
                                    CTEL-TM-OTM — Expert Level Test Management: Operational Test
                                    Management
                                </td>
                            </tr>
                            <tr>
                                <td><strong>前提資格</strong></td>
                                <td>CTFL（必須）＋ CTAL-TM v3.0（必須）</td>
                            </tr>
                            <tr>
                                <td><strong>推奨実務経験</strong></td>
                                <td>テスト業務 5年以上 ／ 専門分野（Expert Level）2年以上</td>
                            </tr>
                            <tr>
                                <td><strong>問題形式</strong></td>
                                <td>多肢選択式（Multiple Choice）</td>
                            </tr>
                            <tr>
                                <td><strong>有効期間</strong></td>
                                <td>7年間</td>
                            </tr>
                            <tr>
                                <td><strong>試験プロバイダー</strong></td>
                                <td>iSQI / Brightest / GASQ</td>
                            </tr>
                            <tr>
                                <td><strong>完全資格取得</strong></td>
                                <td>Part 1（STM）+ Part 2（OTM）+ Part 3（MTT）すべて合格</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>10のビジネスアウトカム</h2>
                <ol className="step-list">
                    <li className="step-item">
                        <span className="step-icon">1</span>
                        <div className="step-content">
                            <strong>組織・プロジェクト管理リード</strong>
                            <p>
                                CEO/取締役会レベルのマネジメントコミットメントで重要な成功要因を特定・管理できる
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">2</span>
                        <div className="step-content">
                            <strong>品質KPIに基づく意思決定</strong>
                            <p>
                                組織全体のコミットメントとコンプライアンスを実装したテスト管理戦略についてビジネス主導の意思決定を行える
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">3</span>
                        <div className="step-content">
                            <strong>テスト管理現状評価と改善提案</strong>
                            <p>
                                現状を評価し、段階的な改善を提案し、ビジネス目標の達成にどう結びつくかを示せる
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">4</span>
                        <div className="step-content">
                            <strong>戦略的ポリシーの設定と実装</strong>
                            <p>
                                テスト管理と試験の改善のための戦略的ポリシーを設定し、組織内に実装できる
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">5</span>
                        <div className="step-content">
                            <strong>組織整合の問題分析と解決</strong>
                            <p>
                                テスト管理と組織内の他の役割・管理領域との整合に関する問題を分析し、実践的な解決策を提案できる
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">6</span>
                        <div className="step-content">
                            <strong>ガバナンスダッシュボード付きマスターテスト計画作成</strong>
                            <p>
                                ビジネス目標を達成・超過するためのガバナンスダッシュボード付きマスターテスト計画を作成できる
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">7</span>
                        <div className="step-content">
                            <strong>テスト管理組織の革新的概念開発</strong>
                            <p>
                                必要な役割・スキル・方法論・組織構造を含むテスト管理組織の革新的な概念を開発できる
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">8</span>
                        <div className="step-content">
                            <strong>標準プロセスの確立</strong>
                            <p>
                                品質KPIに基づく標準化された提供物を伴う組織へのテスト管理実装のための標準プロセスを確立できる
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">9</span>
                        <div className="step-content">
                            <strong>テストプロセス改善リード</strong>
                            <p>
                                テストプロセスを改善し、変革の導入を管理するよう組織をリードできる
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">10</span>
                        <div className="step-content">
                            <strong>人的問題の管理と変更実施</strong>
                            <p>
                                テストプロジェクト管理に関連する人的問題を理解し、効果的に管理し、必要な変更を実施できる
                            </p>
                        </div>
                    </li>
                </ol>
            </section>
            <section id="ch1">
                <div className="section-header">
                    <span className="chapter-num">Chapter 1</span>
                    <span className="k-badge">K3〜K6</span>
                    <h2 className="section-title">外部関係の管理（Managing External Relationships）</h2>
                </div>
                <div className="callout info">
                    <div className="callout-label">📌 シラバス Chapter 4 対応 | 学習時間: 約330分</div>
                    <p>
                        サードパーティとのテスト責任・SLA・コミュニケーション・品質ゲート・テスト戦略マージを扱うOTMの核心テーマです。
                    </p>
                </div>

                <h3>1.1 なぜ外部関係管理が重要か？</h3>
                <p>
                    現代のソフトウェア開発は、オフショア開発、テスト外注、パッケージ製品の統合など、複数の組織が関与するケースが増えています。テストマネージャーはこうした外部関係を適切に管理することで品質を維持しつつプロジェクトを成功に導く責任があります。
                </p>

                <div className="mermaid-wrap" id="diag-external">
                    <Mermaid chart={`flowchart LR
TM["テストマネージャー"]
V1["海外開発ベンダー"]
V2["自動化テストパートナー"]
V3["品質保証コンサル"]
V4["エンドユーザー代表"]
TM -- "SLA・品質ゲート" --- V1
TM -- "ツール・フレームワーク統合" --- V2
TM -- "テスト戦略レビュー" --- V3
TM -- "受入基準の定義" --- V4`} />
                </div>

                <h3>1.2 サードパーティ関係の5パターン <span className="lo-tag">LO 4.2.1 K3</span></h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-label">パターン1: ターンキー方式</div>
                        <div className="arch-desc">
                            サードパーティが完成品を納品（開発+テスト済み）。内部チームの役割：受入テスト・システム統合テスト。
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-label">パターン2: 開発外注・テスト内製</div>
                        <div className="arch-desc">
                            サードパーティが開発、テストは受注側が担当。内部チームの役割：統合テスト〜システムテスト全般。
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-label">パターン3: 部分コード外注</div>
                        <div className="arch-desc">
                            サードパーティが一部のコードを開発・内部コードに統合。内部チームの役割：統合テスト・システムテスト。
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-label">パターン4: テスト全面外注</div>
                        <div className="arch-desc">
                            内部開発・テストはサードパーティが全て担当。内部チームの役割：テスト管理・品質監視・受入テスト。
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-label">パターン5: テスト責任共有</div>
                        <div className="arch-desc">
                            内部テストチームとサードパーティが役割分担。最も複雑な管理が必要。責任の明確化が重要。
                        </div>
                    </div>
                </div>

                <h3>1.3 SLA（サービスレベル合意）の設計 <span className="lo-tag">LO 4.3.1 K4</span></h3>
                <div className="definition-box">
                    <div className="def-label">定義</div>
                    <p>
                        SLA（Service Level
                        Agreement）とは、テストマネージャーとサードパーティ間で合意された、サービス品質・納品物・対応時間などの客観的基準を定める契約条件です。
                    </p>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>カテゴリ</th>
                                <th>SLA項目</th>
                                <th>具体例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>ターンアラウンドタイム</strong></td>
                                <td>欠陥修正の対応時間</td>
                                <td>Critical: 4h以内、High: 8h以内、Medium: 24h以内</td>
                            </tr>
                            <tr>
                                <td><strong>成果物（Deliverables）</strong></td>
                                <td>ドキュメント・ビルド・欠陥情報</td>
                                <td>ユーザーガイド・リリースノート・既知欠陥リスト</td>
                            </tr>
                            <tr>
                                <td><strong>品質レベル</strong></td>
                                <td>コードカバレッジ・許容欠陥数</td>
                                <td>ステートメントカバレッジ ≥ 85%、Critical欠陥 = 0件</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>SLA欠陥対応時間の設計例</h4>
                <div className="code-block" data-lang="Python">
                    <div className="code-line"><span className="code-keyword">def</span> <span className="code-green">define_defect_sla</span>() -&gt; dict:</div>
                    <div className="code-line">    <span className="code-string">"""欠陥解決のSLAを定義する"""</span></div>
                    <div className="code-line">    <span className="code-keyword">return</span> &#123;</div>
                    <div className="code-line">        <span className="code-string">"Critical"</span>: &#123;</div>
                    <div className="code-line">            <span className="code-string">"response"</span>: <span className="code-string">"4時間以内"</span>,</div>
                    <div className="code-line">            <span className="code-string">"resolution"</span>: <span className="code-string">"24時間以内"</span>,</div>
                    <div className="code-line">            <span className="code-string">"escalation"</span>: <span className="code-string">"即時"</span></div>
                    <div className="code-line">        &#125;,</div>
                    <div className="code-line">        <span className="code-string">"High"</span>: &#123;</div>
                    <div className="code-line">            <span className="code-string">"response"</span>: <span className="code-string">"8時間以内"</span>,</div>
                    <div className="code-line">            <span className="code-string">"resolution"</span>: <span className="code-string">"72時間以内"</span>,</div>
                    <div className="code-line">            <span className="code-string">"escalation"</span>: <span className="code-string">"24時間後"</span></div>
                    <div className="code-line">        &#125;,</div>
                    <div className="code-line">        <span className="code-string">"Medium"</span>: &#123;</div>
                    <div className="code-line">            <span className="code-string">"response"</span>: <span className="code-string">"24時間以内"</span>,</div>
                    <div className="code-line">            <span className="code-string">"resolution"</span>: <span className="code-string">"1週間以内"</span>,</div>
                    <div className="code-line">            <span className="code-string">"escalation"</span>: <span className="code-string">"5営業日後"</span></div>
                    <div className="code-line">        &#125;,</div>
                    <div className="code-line">        <span className="code-string">"Low"</span>: &#123;</div>
                    <div className="code-line">            <span className="code-string">"response"</span>: <span className="code-string">"5営業日以内"</span>,</div>
                    <div className="code-line">            <span className="code-string">"resolution"</span>: <span className="code-string">"次リリースまで"</span>,</div>
                    <div className="code-line">            <span className="code-string">"escalation"</span>: <span className="code-string">"月次レビュー"</span></div>
                    <div className="code-line">        &#125;</div>
                    <div className="code-line">    &#125;</div>
                </div>

                <div className="alert green">
                    <div className="alert-icon">✅</div>
                    <div className="alert-body">
                        <strong>SLA設計の重要原則</strong
                        >基準は「客観的に測定可能」で、プロジェクト開始時に「合意」が取れており、「強制力」があること。曖昧な表現（「高品質であること」）は避け、数値目標で定義する。
                    </div>
                </div>

                <h3>
                    1.4 品質ゲート（エントリ・エグジット基準）
                    <span className="lo-tag">LO 4.7.1 K6</span>
                </h3>
                <div className="mermaid-wrap" id="diag-gates">
                    <Mermaid chart={`flowchart LR
UT["ユニットテスト完了<br/>カバレッジ 85%以上<br/>Critical/High欠陥 = 0"]
IT["統合テスト<br/>静的解析エラー = 0<br/>全I/F確認済み"]
ST["システムテスト<br/>ブロッキング欠陥 = 0<br/>全既知欠陥記録済み"]
AT["受入テスト<br/>全計画テスト完了<br/>ステークホルダーサインオフ"]
UT -->|"入口:コードレビュー証明書"| IT
IT -->|"入口:ブロッキング欠陥0件"| ST
ST -->|"入口:全既知欠陥の合意"| AT`} />
                </div>

                <h3>1.5 コミュニケーション戦略 <span className="lo-tag">LO 4.4.1 K2</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>要素</th>
                                <th>考慮すべき要因</th>
                                <th>オフショア開発の例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>量（Amount）</strong></td>
                                <td>プロジェクトの複雑さ・重要度</td>
                                <td>週次詳細レポート + 日次欠陥サマリー</td>
                            </tr>
                            <tr>
                                <td><strong>詳細度（Detail）</strong></td>
                                <td>技術的複雑さ・スキルレベル</td>
                                <td>欠陥再現手順を日英両語で記述</td>
                            </tr>
                            <tr>
                                <td><strong>頻度（Frequency）</strong></td>
                                <td>プロジェクトの緊急度・リスク</td>
                                <td>週2回のテレビ会議 + 必要に応じて随時</td>
                            </tr>
                            <tr>
                                <td><strong>スタイル（Style）</strong></td>
                                <td>文化的違い・組織文化</td>
                                <td>直接的・簡潔・英語で書面コミュニケーション</td>
                            </tr>
                            <tr>
                                <td><strong>形式（Format）</strong></td>
                                <td>ドキュメント要件・規制</td>
                                <td>Jira + TestRail を共通ツールとして使用</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>
                    1.6 外部ソース統合時の内部チームの役割 <span className="lo-tag">LO 4.5.1 K4</span>
                </h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-label">① ターンキー（開発+テスト済み）</div>
                        <div className="arch-desc">
                            コードカバレッジメトリクスを確認 → 受入テストのみ実施 →
                            SIT（システム統合テスト）の計画立案
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-label">② 部分テスト済み（ユニットテスト済み）</div>
                        <div className="arch-desc">
                            カバレッジメトリクスをレビュー → 完全な統合テスト・システムテストを実施
                            → 受入テストも実施
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-label">③ テスト未実施（開発のみ）</div>
                        <div className="arch-desc">
                            ユニットテストなしと仮定して統合テストから開始 →
                            品質コストのメトリクスを追跡 → バイパスコストを記録
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-label">④ テスト全面委託（テストを外注）</div>
                        <div className="arch-desc">
                            テスト戦略を定義・合意 → テストアプローチ・ドキュメント・ツールを規定 →
                            進捗の密接な管理
                        </div>
                    </div>
                </div>

                <h3>1.7 テスト戦略のマージ <span className="lo-tag">LO 4.6.1 K2</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>考慮事項</th>
                                <th>具体的な確認内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><strong>欠陥管理ツール統合</strong></td>
                                <td>Jira / Azure DevOps の共通利用・データ移行計画</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><strong>テスト管理ツール統合</strong></td>
                                <td>TestRail / TestLink の共通化・アクセス権設定</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><strong>自動化戦略・ツールの統一</strong></td>
                                <td>Playwright / Selenium のフレームワーク・標準合意</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><strong>テストレベルと責任範囲</strong></td>
                                <td>誰がどのテストレベルを担当するか明確化（RACI）</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><strong>共通のテスト・品質目標</strong></td>
                                <td>KPIと合格基準の共通化・合意</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td><strong>各チームのテストアプローチ理解</strong></td>
                                <td>方法論・技法・プロセスの相互理解ワークショップ</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td><strong>受入・完了基準の定義</strong></td>
                                <td>エントリ/エグジットクライテリアの共同策定</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td><strong>共通用語集の作成</strong></td>
                                <td>ISTQB用語集を基盤とした共通定義書の作成</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td><strong>共通メトリクスと報告頻度</strong></td>
                                <td>ダッシュボード・KPIの標準化・報告サイクルの合意</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td><strong>セキュリティ・機密性問題</strong></td>
                                <td>データ保護・情報共有の範囲規定・NDA確認</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td><strong>責任範囲とタッチポイント</strong></td>
                                <td>ギャップ（重複なし）と効率性（過剰重複なし）のバランス</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="ch2">
                <div className="section-header">
                    <span className="chapter-num">Chapter 2</span>
                    <span className="k-badge">K2〜K5</span>
                    <h2 className="section-title">
                        組織横断的管理（Managing Across the Organization）
                    </h2>
                </div>
                <div className="callout info">
                    <div className="callout-label">
                        📌 シラバス Chapter 5 対応 | 学習時間: 約780分（最大規模の章）
                    </div>
                    <p>
                        テストチームの擁護・配置・ステークホルダーコミュニケーション・関係構築・ツール統合・倫理を扱います。
                    </p>
                </div>

                <h3>
                    2.1 テストチームのアドボカシー（擁護） <span className="lo-tag">LO 5.2.1 K4</span>
                </h3>
                <div className="definition-box">
                    <div className="def-label">定義</div>
                    <p>
                        テストマネージャーにとって最も重要な役割の一つが、テストチームを<strong>擁護・推進・防御（Advocating）</strong>することです。テストチームが直面する脅威を認識し、積極的に対応する責任があります。
                    </p>
                </div>

                <div className="compare">
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 脅威パターン（4種類）</div>
                        <div className="compare-item">
                            <span className="compare-icon">⚠️</span
                            ><span
                                ><strong>外部干渉</strong
                                >：開発チームがテスト範囲・深さを指示しようとする（テスト戦略の管理権喪失リスク）</span
                            >
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">⚠️</span
                            ><span
                                ><strong>マイクロマネジメント</strong
                                >：信頼の欠如の表れ。テスト活動への不当な細部管理</span
                            >
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">⚠️</span
                            ><span
                                ><strong>不尊重</strong
                                >：テストの価値・テスターのスキルへの過小評価</span
                            >
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">⚠️</span
                            ><span
                                ><strong>再編成</strong
                                >：テストチームが不均衡に影響を受けるリスク</span
                            >
                        </div>
                    </div>
                    <div className="compare-box good">
                        <div className="compare-label">✅ 防衛の3柱</div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span
                                ><strong>オープンなコミュニケーション</strong
                                >：問題の早期共有・透明性の確保</span
                            >
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span
                                ><strong>良質なドキュメンテーション</strong
                                >：テスト計画・アプローチ・役割と責任マトリクス</span
                            >
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span
                                ><strong>強固なプロセス</strong
                                >：ISTQBの基本テストプロセスなど体系的アプローチ</span
                            >
                        </div>
                    </div>
                </div>

                <h4>テストのROI（費用対効果）計算 <span className="lo-tag">LO 5.2.2 K6</span></h4>
                <div className="code-block" data-lang="Python">
                    <div className="code-line"><span className="code-keyword">def</span> <span className="code-green">calculate_cost_of_quality</span>(</div>
                    <div className="code-line">    prevention: <span className="code-cyan">float</span>,</div>
                    <div className="code-line">    appraisal: <span className="code-cyan">float</span>,</div>
                    <div className="code-line">    internal_failure: <span className="code-cyan">float</span>,</div>
                    <div className="code-line">    external_failure: <span className="code-cyan">float</span></div>
                    <div className="code-line">) -&gt; dict:</div>
                    <div className="code-line">    <span className="code-string">"""Cost of Quality = 予防 + 評価 + 内部失敗 + 外部失敗"""</span></div>
                    <div className="code-line">    total = prevention + appraisal + internal_failure + external_failure</div>
                    <div className="code-line">    <span className="code-keyword">return</span> &#123;</div>
                    <div className="code-line">        <span className="code-string">"合計CoQ"</span>: total,</div>
                    <div className="code-line">        <span className="code-string">"最大削減対象"</span>: <span className="code-string">"外部失敗コスト"</span></div>
                    <div className="code-line">    &#125;</div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="code-comment"># フェーズ別欠陥修正コスト乗数（Boehm研究より）</span></div>
                    <div className="code-line">    phase_multipliers = &#123;</div>
                    <div className="code-line">        <span className="code-string">"要件定義"</span>: <span className="code-num">1</span>,</div>
                    <div className="code-line">        <span className="code-string">"設計"</span>: <span className="code-num">5</span>,</div>
                    <div className="code-line">        <span className="code-string">"実装"</span>: <span className="code-num">10</span>,</div>
                    <div className="code-line">        <span className="code-string">"テスト"</span>: <span className="code-num">50</span>,</div>
                    <div className="code-line">        <span className="code-string">"本番"</span>: <span className="code-num">100</span>, <span className="code-comment"># 最高コスト！</span></div>
                    <div className="code-line">    &#125;</div>
                </div>

                <div className="callout warning">
                    <div className="callout-label">⚠️ 重要ポイント</div>
                    <p>
                        テストへの投資を「コスト」としてではなく「リスク軽減への投資」として経営層に提示することが、テストマネージャーの重要なスキルです。データと事実で定量的に示してください。
                    </p>
                </div>

                <h3>2.2 テストチームの配置 <span className="lo-tag">LO 5.3.1 K5</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>考慮要素</th>
                                <th>詳細</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>品質フォーカス</strong></td>
                                <td>品質重視の経営チェーンへの報告ライン確保</td>
                            </tr>
                            <tr>
                                <td><strong>情報アクセス</strong></td>
                                <td>開発・BA・ビジネスステークホルダーへの適切なアクセス確保</td>
                            </tr>
                            <tr>
                                <td><strong>スキルミックス</strong></td>
                                <td>
                                    ドメイン知識・テスト知識・技術スキルのバランス（プロジェクト要件に合わせる）
                                </td>
                            </tr>
                            <tr>
                                <td><strong>アジャイル環境</strong></td>
                                <td>
                                    開発チームの一員として統合される形式。プログラミングスキルが必要な場合あり
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>
                    2.3 ステークホルダーコミュニケーション <span className="lo-tag">LO 5.4.1 K3</span>
                </h3>
                <div className="definition-box">
                    <div className="def-label">効果的なコミュニケーションの定義</div>
                    <p>
                        コミュニケーションが効果的であるとは、<strong>送信者が意図したメッセージが受信者に正しく受け取られ・理解された</strong>時、または、<strong>コミュニケーションによって期待した行動が実際に行われた</strong>時です。
                    </p>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ステークホルダー</th>
                                <th>頻度・形式</th>
                                <th>内容の焦点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>経営層</strong></td>
                                <td>月次・要約レポート（1ページ）</td>
                                <td>コスト・リスク・ROI</td>
                            </tr>
                            <tr>
                                <td><strong>プロジェクト管理者</strong></td>
                                <td>週次・詳細レポート</td>
                                <td>スケジュール・コスト・リスク</td>
                            </tr>
                            <tr>
                                <td><strong>開発チーム</strong></td>
                                <td>日次・インフォーマル</td>
                                <td>欠陥・テスト状況・依存関係</td>
                            </tr>
                            <tr>
                                <td><strong>製品オーナー</strong></td>
                                <td>スプリント毎・レビュー</td>
                                <td>品質状況・受入基準の達成度</td>
                            </tr>
                            <tr>
                                <td><strong>サードパーティ</strong></td>
                                <td>合意した頻度</td>
                                <td>欠陥・SLA達成・統合問題</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>2.4 関係の構築と維持 <span className="lo-tag">LO 5.5.1 K3</span></h3>
                <div className="compare">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 推奨される行動</div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>開発マネージャーとランチを共にして率直な情報交換を行う</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>成功したプロジェクトを認め合う・お互いの成果を称え合う</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>プログラムTMと定期的に確認し責任範囲を明確にする</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>人員変更・組織変更があっても関係を継続する</span>
                        </div>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 不適切な行動</div>
                        <div className="compare-item">
                            <span className="compare-icon">🔴</span
                            ><span
                                >クライアントとの個人的な友情を利用して欠陥の重大度評価を下げてもらう（倫理違反！）</span
                            >
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔴</span
                            ><span
                                >オフショアTMとの関係構築を他人任せにする（マネジメント責任の放棄）</span
                            >
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔴</span
                            ><span>必要な時だけ連絡する（関係は日頃から維持するもの）</span>
                        </div>
                    </div>
                </div>

                <h3>2.5 マルチユースツールのライフサイクル管理</h3>
                <div className="mermaid-wrap" id="diag-tools">
                    <Mermaid chart={`flowchart LR
P["フェーズ1: 購入・選定<br/>選定委員会設置<br/>統合ポイント定義<br/>所有権明確化"]
M["フェーズ2: 保守・サポート<br/>変更管理プロセス合意<br/>ヘルプデスク責任者<br/>カスタマイズルール"]
C["フェーズ3: 変換<br/>データ整合性確保<br/>サービス継続性<br/>慎重な計画立案"]
R["フェーズ4: 廃止<br/>代替ツール準備完了後<br/>アーカイブデータ保護<br/>アクセス維持"]
P --> M
M --> C
C --> R`} />
                </div>

                <h3>2.6 倫理的問題の取り扱い</h3>
                <div className="alert cyan">
                    <div className="alert-icon">⚖️</div>
                    <div className="alert-body">
                        <strong>ISTQB倫理規定に基づく4つの原則</strong>
                        <ol style={{marginTop: "0.4rem"}}>
                            <li>倫理的行動の模範：チームメンバーへの模範となる行動を取る</li>
                            <li>
                                ステークホルダーとの誠実な対応：プロフェッショナルで事実に基づく報告
                            </li>
                            <li>結果の正確な報告：不都合な情報も含む中立・客観的な報告</li>
                            <li>個人の評価・感情から切り離した公平な判断</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section id="ch3">
                <div className="section-header">
                    <span className="chapter-num">Chapter 3</span>
                    <span className="k-badge">K3〜K5</span>
                    <h2 className="section-title">
                        プロジェクト管理の基礎（Project Management Essentials）
                    </h2>
                </div>
                <div className="callout info">
                    <div className="callout-label">📌 シラバス Chapter 6 対応 | 学習時間: 約615分</div>
                    <p>
                        テスト見積もり・スケジュール・予算・変更管理・プロジェクトリスク管理を扱います。
                    </p>
                </div>

                <h3>3.1 テスト見積もり（Test Estimation）</h3>
                <h4>技法1：広帯域デルファイ法（Wideband Delphi）</h4>
                <ol className="step-list">
                    <li className="step-item">
                        <span className="step-icon">1</span>
                        <div className="step-content">
                            <strong>要件シートの配布</strong>
                            <p>
                                ファシリテーターが見積もり対象の要件・タスクシートを各専門家に配布する
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">2</span>
                        <div className="step-content">
                            <strong>個別見積もり（匿名）</strong>
                            <p>
                                各専門家が独立して見積もりを記入。他者の意見に影響されないよう匿名で実施
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">3</span>
                        <div className="step-content">
                            <strong>公開と議論</strong>
                            <p>
                                全員の見積もりを公開して比較・議論。特に極端な値を出した人が根拠を説明
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">4</span>
                        <div className="step-content">
                            <strong>再見積もりと収束</strong>
                            <p>
                                議論を踏まえて再度見積もり。合意が取れるまで繰り返す（通常3〜5ラウンド）
                            </p>
                        </div>
                    </li>
                </ol>

                <h4>技法2：三点見積もり（Three-Point Estimation / PERT）</h4>
                <div className="definition-box">
                    <div className="def-label">計算式</div>
                    <p>
                        <strong>期待値 = (楽観値 + 4×最頻値 + 悲観値) / 6</strong><br /><strong
                            >標準偏差 = (悲観値 - 楽観値) / 6</strong
                        >
                    </p>
                </div>
                <div className="code-block" data-lang="Python">
                    <div className="code-line"><span className="code-keyword">def</span> <span className="code-green">three_point_estimate</span>(</div>
                    <div className="code-line">    optimistic: <span className="code-cyan">float</span>,</div>
                    <div className="code-line">    most_likely: <span className="code-cyan">float</span>,</div>
                    <div className="code-line">    pessimistic: <span className="code-cyan">float</span></div>
                    <div className="code-line">) -&gt; dict:</div>
                    <div className="code-line">    <span className="code-string">"""PERT三点見積もりの計算"""</span></div>
                    <div className="code-line">    expected = (optimistic + <span className="code-num">4</span> * most_likely + pessimistic) / <span className="code-num">6</span></div>
                    <div className="code-line">    std_dev = (pessimistic - optimistic) / <span className="code-num">6</span></div>
                    <div className="code-line">    <span className="code-keyword">return</span> &#123;</div>
                    <div className="code-line">        <span className="code-string">"期待値"</span>: round(expected, <span className="code-num">1</span>),</div>
                    <div className="code-line">        <span className="code-string">"標準偏差"</span>: round(std_dev, <span className="code-num">1</span>),</div>
                    <div className="code-line">        <span className="code-string">"68%信頼区間"</span>: <span className="code-cyan">f</span><span className="code-string">"&#123;expected - std_dev:.1f&#125; ～ &#123;expected + std_dev:.1f&#125;時間"</span>,</div>
                    <div className="code-line">        <span className="code-string">"90%信頼区間"</span>: <span className="code-cyan">f</span><span className="code-string">"&#123;expected - 1.65*std_dev:.1f&#125; ～ &#123;expected + 1.65*std_dev:.1f&#125;時間"</span>,</div>
                    <div className="code-line">    &#125;</div>
                </div>

                <h3>3.2 プロジェクトリスク管理</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>リスク</th>
                                <th>発生確率</th>
                                <th>影響度</th>
                                <th>スコア</th>
                                <th>対策</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>テスト環境の不安定性</strong></td>
                                <td>高</td>
                                <td>高</td>
                                <td>9</td>
                                <td>コンテナ化（Docker）・環境の事前検証・バックアップ環境</td>
                            </tr>
                            <tr>
                                <td><strong>サードパーティの品質未達</strong></td>
                                <td>高</td>
                                <td>高</td>
                                <td>9</td>
                                <td>厳格な入口基準・定期的な品質レビュー・SLAの強化</td>
                            </tr>
                            <tr>
                                <td><strong>テスト自動化の技術的問題</strong></td>
                                <td>中</td>
                                <td>高</td>
                                <td>6</td>
                                <td>パイロット評価・段階的導入・代替手動テスト計画</td>
                            </tr>
                            <tr>
                                <td><strong>スキル不足</strong></td>
                                <td>中</td>
                                <td>高</td>
                                <td>6</td>
                                <td>事前スキル評価・トレーニング・メンタリング</td>
                            </tr>
                            <tr>
                                <td><strong>スケジュール遅延</strong></td>
                                <td>中</td>
                                <td>中</td>
                                <td>4</td>
                                <td>バッファ設定・早期警告の仕組み・スコープ調整</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mermaid-wrap" id="diag-risk">
                    <Mermaid chart={`quadrantChart
title プロジェクトリスクマトリクス
x-axis "発生確率: 低" --> "発生確率: 高"
y-axis "影響度: 低" --> "影響度: 高"
quadrant-1 "最優先対応"
quadrant-2 "高優先度"
quadrant-3 "低優先度"
quadrant-4 "注意監視"
"テスト環境不安定": [0.85, 0.9]
"SLA品質未達": [0.75, 0.85]
"スキル不足": [0.55, 0.75]
"自動化技術問題": [0.5, 0.7]
"スケジュール遅延": [0.6, 0.5]`} />
                </div>

                <h3>3.3 変更管理（Change Management） <span className="lo-tag">LO 6.2.6</span></h3>
                <div className="alert amber">
                    <div className="alert-icon">⚠️</div>
                    <div className="alert-body">
                        <strong>試験頻出ポイント</strong>
                        テストマネージャーは「変更がスケジュールに影響しないと予想される場合でも影響分析に関与すべき」。テストマネージャーの役割は「テストの側面だけに限らない」ことを忘れずに。
                    </div>
                </div>
                <div className="compare">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 推奨される変更管理への関与</div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>変更がスケジュールに影響しない場合でも影響分析に参加する</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>テスト以外の側面にも変更管理の役割が及ぶことを理解する</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>変更の影響をテスト計画・テストケースへ反映する</span>
                        </div>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 避けるべき姿勢</div>
                        <div className="compare-item">
                            <span className="compare-icon">🔴</span
                            ><span>「テスト専門家のみの役割」と限定的に考える</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔴</span
                            ><span>変更管理セッションへの参加を避ける</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔴</span
                            ><span>ドキュメント化された変更のみに対応する</span>
                        </div>
                    </div>
                </div>

                <h3>3.4 テスト予算の主要コスト要素</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-label">人件費（通常最大の割合）</div>
                        <div className="arch-desc">
                            テストアナリスト工数 / テストマネージャー工数 /
                            スペシャリスト（性能・セキュリティ等）工数
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-label">ツール・環境費用</div>
                        <div className="arch-desc">
                            テスト管理ツールライセンス / テスト自動化ツールライセンス /
                            テスト環境（サーバー・クラウド）費用
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-label">教育・トレーニング費用</div>
                        <div className="arch-desc">
                            ISTQB認定研修 / ツール・技術研修 / コーチング・メンタリング
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-label">サードパーティ費用</div>
                        <div className="arch-desc">
                            外部テストベンダー費用 / コンサルタント費用 / 外部レビュアー費用
                        </div>
                    </div>
                </div>
            </section>

            <section id="ch4">
                <div className="section-header">
                    <span className="chapter-num">Chapter 4</span>
                    <span className="k-badge">K3〜K4</span>
                    <h2 className="section-title">
                        テストプロジェクトの評価と報告（Test Project Evaluation and Reporting）
                    </h2>
                </div>
                <div className="callout info">
                    <div className="callout-label">📌 シラバス Chapter 7 対応 | 学習時間: 約510分</div>
                    <p>
                        テスト進捗の追跡・内部/外部報告・終了基準評価・統計的品質管理技法を扱います。
                    </p>
                </div>

                <h3>4.1 追跡すべき主要テスト情報</h3>
                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-value">97%</div>
                        <div className="metric-label">テスト実行率（目標≥95%）</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">87%</div>
                        <div className="metric-label">テスト合格率（要分析）</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">0件</div>
                        <div className="metric-label">Critical欠陥 残存</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">94%</div>
                        <div className="metric-label">欠陥封じ込め効率（DCE）</div>
                    </div>
                </div>

                <h4>テスト実行率の進捗可視化</h4>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>テスト実行率</span><span>97% (194/200)</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ "--w": "97%" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>テスト合格率</span><span>87% (169/194)</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ "--w": "87%" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>欠陥解決率</span><span>60% (31/52)</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ "--w": "60%" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>リスクカバレッジ</span><span>78% (39/50)</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ "--w": "78%" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>コードカバレッジ</span><span>82% (目標≥80%)</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ "--w": "82%" } as React.CSSProperties}></div>
                    </div>
                </div>

                <h3>4.2 内部報告 vs 外部報告</h3>
                <div className="compare">
                    <div className="compare-box good">
                        <div className="compare-label">📄 内部報告（開発チーム・PM向け）</div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span
                                >詳細な技術情報を含む（欠陥の再現手順・ログ・スクリーンショット）</span
                            >
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>テスト自動化の状況・フレイキーテスト情報</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>ブロッカーと依存関係の明示</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>頻繁な更新（日次または週次）</span>
                        </div>
                    </div>
                    <div className="compare-box good" style={{borderTopColor: "var(--neon-cyan)"}}>
                        <div className="compare-label" style={{color: "var(--neon-cyan)"}}>
                            📊 外部報告（経営層・顧客向け）
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔵</span
                            ><span>サマリー形式（1ページ以内が理想）</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔵</span
                            ><span>技術用語を避けビジネス言語で記述</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔵</span
                            ><span>リスクと推奨アクションをセットで提示</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔵</span
                            ><span>週次またはマイルストーン単位</span>
                        </div>
                    </div>
                </div>

                <h3>4.3 テスト段階別の報告内容</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-label">段階1: テスト計画・監視・制御</div>
                        <div className="arch-desc">
                            テスト計画書のステータス / テスト環境の準備状況 / リスク登録簿の更新 /
                            リソース配分の状況
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-label">段階2: テスト分析・設計</div>
                        <div className="arch-desc">
                            テストケース設計の進捗 / テスト条件のカバレッジ /
                            要件トレーサビリティのギャップ / テストデータの準備状況
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-label">段階3: テスト実装・実行</div>
                        <div className="arch-desc">
                            テスト実行進捗（日次・週次） / 欠陥状況サマリー /
                            リスクカバレッジ達成状況 / テスト環境の問題
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-label">段階4: 終了基準評価と報告</div>
                        <div className="arch-desc">
                            全終了基準の達成状況（バイナリ判定） / 未達成基準のリスク評価 /
                            テスト完了レポートの発行 / 残余リスクの明示
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-label">段階5: テスト終了活動</div>
                        <div className="arch-desc">
                            テスト成果物のアーカイブ / 教訓（Lessons Learned）の記録 /
                            テスト環境のクリーンアップ / チームへのフィードバック
                        </div>
                    </div>
                </div>

                <h3>4.4 終了基準の評価</h3>
                <div className="callout warning">
                    <div className="callout-label">⚠️ 試験頻出ポイント</div>
                    <p>
                        終了基準の未達成は自動的にリリース拒否ではありません。テストマネージャーの役割は「残余リスクを明確に提示し、ステークホルダーが情報に基づいたリリース判断を行えるよう支援すること」です。
                    </p>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>終了基準</th>
                                <th>目標値</th>
                                <th>現在値</th>
                                <th>判定</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>テスト実行率</strong></td>
                                <td>≥ 95%</td>
                                <td>97%</td>
                                <td style={{color: "var(--neon-green)"}}>✅ 達成</td>
                            </tr>
                            <tr>
                                <td><strong>テスト合格率</strong></td>
                                <td>≥ 90%</td>
                                <td>87%</td>
                                <td style={{color: "var(--neon-amber)"}}>⚠️ 要分析</td>
                            </tr>
                            <tr>
                                <td><strong>Critical欠陥残存</strong></td>
                                <td>0件</td>
                                <td>0件</td>
                                <td style={{color: "var(--neon-green)"}}>✅ 達成</td>
                            </tr>
                            <tr>
                                <td><strong>High欠陥残存</strong></td>
                                <td>≤ 5件</td>
                                <td>3件</td>
                                <td style={{color: "var(--neon-green)"}}>✅ 達成</td>
                            </tr>
                            <tr>
                                <td><strong>コードカバレッジ</strong></td>
                                <td>≥ 80%</td>
                                <td>82%</td>
                                <td style={{color: "var(--neon-green)"}}>✅ 達成</td>
                            </tr>
                            <tr>
                                <td><strong>性能要件（応答3秒以内）</strong></td>
                                <td>100%達成</td>
                                <td>95%</td>
                                <td style={{color: "var(--neon-amber)"}}>⚠️ 要分析</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>4.5 統計的品質管理技法</h3>
                <div className="trend-card">
                    <div className="trend-tag">統計的技法1</div>
                    <div className="trend-title">コントロールチャート（Control Chart）</div>
                    <div className="trend-desc">
                        テストプロセスが管理状態にあるかを判断するツール。欠陥数の推移・テスト実行率の推移を可視化し、管理限界外の点（特殊要因）を特定する。UCL（上限）とLCL（下限）の管理限界を設定し、外れた点は即座に原因調査を行う。
                    </div>
                </div>
                <div className="trend-card">
                    <div className="trend-tag">統計的技法2</div>
                    <div className="trend-title">パレート分析（Pareto Analysis）</div>
                    <div className="trend-desc">
                        最も影響の大きい欠陥タイプを特定する「80:20の法則」。欠陥分類・根本原因分析に活用し、限られたリソースを最大効果の領域に集中させる。全欠陥の80%は全欠陥種別の20%から発生するという経験則を活用する。
                    </div>
                </div>
                <div className="trend-card">
                    <div className="trend-tag">統計的技法3</div>
                    <div className="trend-title">
                        欠陥封じ込め効率（DCE: Defect Containment Efficiency）
                    </div>
                    <div className="trend-desc">
                        <strong
                            >計算式：DCE = テスト検出欠陥数 / (テスト検出 + 本番流出) × 100</strong
                        ><br />目標値：DCE ≥ 95%（本番流出欠陥を5%以内に抑える）
                    </div>
                </div>

                <div className="code-block" data-lang="Python">
                    <div className="code-line"><span className="code-keyword">def</span> <span className="code-green">defect_containment_efficiency</span>(</div>
                    <div className="code-line">    pre_prod: <span className="code-cyan">int</span>,</div>
                    <div className="code-line">    post_prod: <span className="code-cyan">int</span></div>
                    <div className="code-line">) -&gt; <span className="code-cyan">float</span>:</div>
                    <div className="code-line">    <span className="code-string">"""欠陥封じ込め効率 (DCE) = テストで検出 / (テスト検出 + 本番流出) x 100"""</span></div>
                    <div className="code-line">    <span className="code-string">"""目標: &gt;= 95%"""</span></div>
                    <div className="code-line">    total = pre_prod + post_prod</div>
                    <div className="code-line">    <span className="code-keyword">return</span> (pre_prod / total) * <span className="code-num">100</span></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-comment"># 例: テスト検出47件, 本番流出3件</span></div>
                    <div className="code-line">dce = defect_containment_efficiency(<span className="code-num">47</span>, <span className="code-num">3</span>)</div>
                    <div className="code-line"><span className="code-comment"># → 94.0%（目標95%未達 → テストカバレッジ強化が必要）</span></div>
                </div>
            </section>
            <section id="ch5">
                <div className="section-header">
                    <span className="chapter-num">Chapter 5</span>
                    <span className="k-badge">K2〜K4</span>
                    <h2 className="section-title">
                        ドメインとプロジェクト要因のテスト考慮事項（Domain and Project Factors）
                    </h2>
                </div>
                <div className="callout info">
                    <div className="callout-label">📌 シラバス Chapter 8 対応 | 学習時間: 約270分</div>
                    <p>
                        ライフサイクルモデル別の考慮事項、部分的ライフサイクルプロジェクト、安全クリティカルシステム、リリース考慮事項を扱います。
                    </p>
                </div>

                <h3>5.1 ライフサイクルモデル別のテスト管理考慮事項</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ライフサイクルモデル</th>
                                <th>テスト管理の特徴</th>
                                <th>主な課題</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>ウォーターフォール</strong></td>
                                <td>
                                    要件確定後にテスト計画。フォーマルなレビューと承認プロセス。大規模テストフェーズ。
                                </td>
                                <td>変更対応コスト高・フィードバックが遅い</td>
                            </tr>
                            <tr>
                                <td><strong>V字モデル</strong></td>
                                <td>
                                    各開発フェーズに対応するテストフェーズ。早期からテスト設計を並行実施。
                                </td>
                                <td>完全な要件定義が前提</td>
                            </tr>
                            <tr>
                                <td><strong>アジャイル・Scrum</strong></td>
                                <td>
                                    スプリントごとのテスト計画。継続的な回帰テスト自動化。テスターが開発チームの一員。TDD・BDD・ATDD
                                    の適用。
                                </td>
                                <td>テスト負債の蓄積リスク</td>
                            </tr>
                            <tr>
                                <td><strong>DevOps</strong></td>
                                <td>
                                    CI/CDパイプラインへのテスト統合。本番環境でのモニタリング。テスト自動化が不可欠。
                                </td>
                                <td>高度な自動化スキルが必要</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>アジャイルにおけるテストマネージャーの役割変化</h4>
                <div className="mermaid-wrap" id="diag-agile">
                    <Mermaid chart={`flowchart LR
subgraph Traditional["従来型テスト管理"]
T1["独立したテストフェーズ"]
T2["フォーマルな欠陥票"]
T3["専任テストチーム"]
T4["最終的なテスト報告"]
end
subgraph Agile["アジャイルでの役割"]
A1["各スプリントへの組み込み"]
A2["バックログアイテム化"]
A3["開発チームの一員"]
A4["スプリントレビューで共有"]
end
Traditional --> Agile`} />
                </div>

                <h3>5.2 部分的ライフサイクルプロジェクトの管理</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-label">統合プロジェクト（Integration Projects）</div>
                        <div className="arch-desc">
                            複数の既存システム・コンポーネントを結合。インターフェース（I/F）問題が多発しやすい。ビッグバン統合
                            vs インクリメンタル統合の選択、スタブ・ドライバの準備が重要。
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-label">保守プロジェクト（Maintenance Projects）</div>
                        <div className="arch-desc">
                            既存システムへの変更・修正が対象。回帰テスト（既存機能への影響確認）が重要。変更影響分析（Change
                            Impact Analysis）と回帰テストスイートの維持・更新が必須。
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-label">組込みシステム（Embedded Systems）</div>
                        <div className="arch-desc">
                            ハードウェアとソフトウェアの密結合。リアルタイム要件・信頼性要件が厳格。HIL（Hardware-in-the-Loop）テストの活用とシミュレーション環境が有効。
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-label">
                            安全クリティカルシステム（Safety-Critical Systems）
                        </div>
                        <div className="arch-desc">
                            欠陥が人命・財産・環境に重大な影響を与えるシステム（医療機器・自動車・航空）。ISO
                            26262 / DO-178C / IEC 62304 / IEC 61508 などの規制標準への準拠が必須。
                        </div>
                    </div>
                </div>

                <h3>5.3 安全クリティカルシステムの主要規制標準</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>標準</th>
                                <th>適用領域</th>
                                <th>主な要件</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>ISO 26262</strong></td>
                                <td>自動車機能安全</td>
                                <td>
                                    ASIL（自動車安全水準）別のテスト要件。ASIL D が最高安全水準。
                                </td>
                            </tr>
                            <tr>
                                <td><strong>DO-178C</strong></td>
                                <td>航空ソフトウェア</td>
                                <td>
                                    DAL（開発保証水準）別のカバレッジ要件。DAL A でMC/DC
                                    カバレッジが必須。
                                </td>
                            </tr>
                            <tr>
                                <td><strong>IEC 62304</strong></td>
                                <td>医療機器ソフトウェア</td>
                                <td>ソフトウェア安全クラス別のリスク管理（クラスA/B/C）。</td>
                            </tr>
                            <tr>
                                <td><strong>IEC 61508</strong></td>
                                <td>機能安全（全産業）</td>
                                <td>
                                    SIL（安全整合水準）別のテスト技法要件。SIL 1〜4 の段階的要求。
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>5.4 リリース考慮事項（Release Considerations）</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-label">1. 市場需要（Market Demand）</div>
                        <div className="arch-desc">
                            市場・規制上のデッドラインによるリリース圧力、競合製品・顧客コミットメントへの対応。テストマネージャーの役割：残余リスクを明確に提示してビジネス判断をサポートする。
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-label">2. 保守容易性（Ease of Maintenance）</div>
                        <div className="arch-desc">
                            リリース後の保守・更新の容易さ。テストドキュメントの完全性（次のリリースサイクルへの入力）。自動化テストスイートの引き継ぎ可能性。
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-label">3. インストール容易性（Ease of Installation）</div>
                        <div className="arch-desc">
                            エンドユーザーまたは運用チームによるインストールのテスト。アップグレードパスのテスト。アンインストール・ロールバックのテスト。
                        </div>
                    </div>
                </div>
            </section>

            <section id="ch6">
                <div className="section-header">
                    <span className="chapter-num">Chapter 6</span>
                    <span className="k-badge">K2〜K4</span>
                    <h2 className="section-title">
                        有効性と効率性の評価（Evaluating Effectiveness and Efficiency）
                    </h2>
                </div>
                <div className="callout info">
                    <div className="callout-label">📌 シラバス Chapter 9 対応 | 学習時間: 約195分</div>
                    <p>
                        テストプロセスの有効性・効率性・満足度のメトリクス、テストポリシー目標のKPI、レトロスペクティブを扱います。
                    </p>
                </div>

                <h3>6.1 有効性・効率性・満足度のメトリクス</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>分類</th>
                                <th>意味</th>
                                <th>例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>有効性（Effectiveness）</strong></td>
                                <td>テストが目標を正確・完全に達成しているか</td>
                                <td>欠陥検出率・重要リスクのカバレッジ率・要件カバレッジ</td>
                            </tr>
                            <tr>
                                <td><strong>効率性（Efficiency）</strong></td>
                                <td>テストが目標を達成するのに必要なリソース</td>
                                <td>1欠陥あたりのテストコスト・テスト実行時間・自動化ROI</td>
                            </tr>
                            <tr>
                                <td><strong>満足度（Satisfaction）</strong></td>
                                <td>テストステークホルダーの主観的な満足感</td>
                                <td>テスト報告書の有用性・チームの士気・ステークホルダー評価</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="code-block" data-lang="Python">
                    <div className="code-line"><span className="code-keyword">class</span> <span className="code-cyan">TestProcessMetrics</span>:</div>
                    <div className="code-line">    <span className="code-string">"""テストプロセスの有効性・効率性メトリクス計算"""</span></div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="code-keyword">def</span> <span className="code-green">defect_detection_effectiveness</span>(</div>
                    <div className="code-line">        <span className="code-cyan">self</span>, found: <span className="code-cyan">int</span>, total: <span className="code-cyan">int</span></div>
                    <div className="code-line">    ) -&gt; <span className="code-cyan">float</span>:</div>
                    <div className="code-line">        <span className="code-string">"""欠陥検出有効性 = テストで検出 / 全欠陥数 x 100"""</span></div>
                    <div className="code-line">        <span className="code-keyword">return</span> (found / total) * <span className="code-num">100</span></div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="code-keyword">def</span> <span className="code-green">cost_per_defect</span>(</div>
                    <div className="code-line">        <span className="code-cyan">self</span>, cost: <span className="code-cyan">float</span>, defects: <span className="code-cyan">int</span></div>
                    <div className="code-line">    ) -&gt; <span className="code-cyan">float</span>:</div>
                    <div className="code-line">        <span className="code-string">"""欠陥あたりのテストコスト = 総テストコスト / 検出欠陥数"""</span></div>
                    <div className="code-line">        <span className="code-keyword">return</span> cost / defects</div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="code-keyword">def</span> <span className="code-green">automation_roi</span>(</div>
                    <div className="code-line">        <span className="code-cyan">self</span>, manual_cost: <span className="code-cyan">float</span>, auto_cost: <span className="code-cyan">float</span></div>
                    <div className="code-line">    ) -&gt; <span className="code-cyan">float</span>:</div>
                    <div className="code-line">        <span className="code-string">"""自動化ROI = (削減コスト - 自動化コスト) / 自動化コスト x 100"""</span></div>
                    <div className="code-line">        <span className="code-keyword">return</span> ((manual_cost - auto_cost) / auto_cost) * <span className="code-num">100</span></div>
                </div>

                <h3>6.2 テストポリシー目標のKPI例</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>目標</th>
                                <th>メトリクス</th>
                                <th>目標値</th>
                                <th>現在値</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>リリース前に重要欠陥をゼロにする</strong></td>
                                <td>未解決Critical/High欠陥数</td>
                                <td>= 0件</td>
                                <td style={{color: "var(--neon-green)"}}>0件 ✅</td>
                            </tr>
                            <tr>
                                <td><strong>テスト自動化率80%以上</strong></td>
                                <td>自動化TC数 / 全TC数 × 100</td>
                                <td>≥ 80%</td>
                                <td style={{color: "var(--neon-amber)"}}>65% ⚠️</td>
                            </tr>
                            <tr>
                                <td><strong>欠陥漏洩率5%以内</strong></td>
                                <td>本番流出 / (テスト+本番) × 100</td>
                                <td>≤ 5%</td>
                                <td style={{color: "var(--neon-red)"}}>6.0% ❌</td>
                            </tr>
                            <tr>
                                <td><strong>テスト実行率95%以上</strong></td>
                                <td>実行済みTC / 全TC × 100</td>
                                <td>≥ 95%</td>
                                <td style={{color: "var(--neon-green)"}}>97% ✅</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>6.3 プロジェクトレトロスペクティブ</h3>
                <div className="definition-box">
                    <div className="def-label">目的</div>
                    <p>
                        プロセスの継続的改善（PDCA）・成功した取り組みの特定と共有・問題点と改善機会の特定・チームの結束と学習文化の醸成
                    </p>
                </div>

                <h4>レトロスペクティブの標準アジェンダ（60〜90分）</h4>
                <ol className="step-list">
                    <li className="step-item">
                        <span className="step-icon">1</span>
                        <div className="step-content">
                            <strong>場の設定（5分）</strong>
                            <p>安心・安全な発言環境を確保。目的と進め方を全員に共有する</p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">2</span>
                        <div className="step-content">
                            <strong>データ収集（15分）</strong>
                            <p>
                                「うまくいったこと」と「改善が必要なこと」を付箋等で収集。全員が参加する
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">3</span>
                        <div className="step-content">
                            <strong>インサイト生成（20分）</strong>
                            <p>「なぜ？」の深堀り（5-Why分析）。パターンの発見と根本原因の特定</p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">4</span>
                        <div className="step-content">
                            <strong>アクションアイテム決定（30分）</strong>
                            <p>
                                担当者・期限・成功基準を明確にしたアクションを設定。次回レトロスペクティブで必ず確認
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">5</span>
                        <div className="step-content">
                            <strong>クローズ（10分）</strong>
                            <p>
                                次回への橋渡し。セッション自体の振り返り（メタレトロスペクティブ）
                            </p>
                        </div>
                    </li>
                </ol>

                <h4>サンプル：Sprint 5レトロスペクティブ</h4>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>区分</th>
                                <th>内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{color: "var(--neon-green)"}}>
                                    <strong>うまくいったこと</strong>
                                </td>
                                <td>
                                    自動回帰テストで手動工数を40%削減 / 欠陥報告の品質が向上 /
                                    新メンバーの早期戦力化に成功
                                </td>
                            </tr>
                            <tr>
                                <td style={{color: "var(--neon-red)"}}><strong>改善が必要</strong></td>
                                <td>
                                    テスト環境の不安定さで2日間遅延 /
                                    テストデータ準備が予想以上に時間を要した
                                </td>
                            </tr>
                            <tr>
                                <td style={{color: "var(--neon-amber)"}}>
                                    <strong>アクションアイテム</strong>
                                </td>
                                <td>
                                    ①環境をDockerに移行（田中：来週完了）<br />②テストデータファクトリー構築（鈴木：2週間後）<br />③変更管理プロセス改善（TM：次スプリント）
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="alert red">
                    <div className="alert-icon">🚨</div>
                    <div className="alert-body">
                        <strong>試験頻出：アクションアイテムのNGパターン</strong>
                        アクションアイテムに担当者・期限・成功基準が設定されなければ意味がありません。「環境問題を解決する」だけでは不十分。「田中が来週木曜日までにDockerfileを作成し、全テストが環境依存エラーなしで実行できること」のように具体的に定義する。
                    </div>
                </div>

                <div className="compare">
                    <div className="compare-box good">
                        <div className="compare-label">✅ ファシリテーターとして</div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>安心・安全な発言環境の確保</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>個人への批判ではなくプロセスへの批判を促進</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🟢</span
                            ><span>全員が発言できるよう促す</span>
                        </div>
                    </div>
                    <div className="compare-box good" style={{borderTopColor: "var(--neon-cyan)"}}>
                        <div className="compare-label" style={{color: "var(--neon-cyan)"}}>
                            ✅ 変革推進者として
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔵</span
                            ><span>アクションアイテムに担当者・期限を設定</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔵</span
                            ><span>次のレトロで前回アクションを必ず確認</span>
                        </div>
                        <div className="compare-item">
                            <span className="compare-icon">🔵</span
                            ><span>改善をチームの習慣にする文化づくり</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="exam">
                <div className="section-header">
                    <span className="chapter-num">試験対策</span>
                    <h2 className="section-title">サンプル問題と必須チェックリスト</h2>
                </div>

                <h3>章別重要度と学習時間</h3>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 1 | シラバスCh4</div>
                        <div className="exam-name">外部関係の管理</div>
                        <div className="exam-stars">★★★★★</div>
                        <div className="exam-desc">SLA設計・テスト戦略マージ・品質ゲート | 330分</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 2 | シラバスCh5</div>
                        <div className="exam-name">組織横断的管理</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-desc">テストチーム擁護・ステークホルダー関係 | 780分</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 3 | シラバスCh6</div>
                        <div className="exam-name">プロジェクト管理の基礎</div>
                        <div className="exam-stars">★★★★★</div>
                        <div className="exam-desc">
                            三点見積もり・リスクマトリクス・変更管理 | 615分
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 4 | シラバスCh7</div>
                        <div className="exam-name">テストプロジェクト評価と報告</div>
                        <div className="exam-stars">★★★★★</div>
                        <div className="exam-desc">終了基準評価・残余リスク・DCE | 510分</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 5 | シラバスCh8</div>
                        <div className="exam-name">ドメインとプロジェクト要因</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-desc">安全クリティカル・アジャイル対応 | 270分</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 6 | シラバスCh9</div>
                        <div className="exam-name">有効性と効率性の評価</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-desc">メトリクス・レトロスペクティブ | 195分</div>
                    </div>
                </div>

                <h3>サンプル問題と解説</h3>
                <div className="trend-card">
                    <div className="trend-tag">問1 | K4 | 外部関係管理</div>
                    <div className="trend-title">SLAと品質ゲートの適用</div>
                    <div className="trend-desc">
                        <p>
                            <strong>状況：</strong
                            >オフショア開発ベンダーが提供するコンポーネントのユニットテストカバレッジが60%で、コードレビューが実施されていない。
                        </p>
                        <p style={{marginTop: "0.7rem"}}><strong>最も適切な対応は？</strong></p>
                        <ul style={{marginTop: "0.4rem"}}>
                            <li>A) ベンダーへの支払いを停止し、新しいベンダーを探す</li>
                            <li>
                                B)
                                内部チームがユニットテストを実施し、ベンダー側のテストをスキップする
                            </li>
                            <li style={{color: "var(--neon-green)"}}>
                                <strong
                                    >C)
                                    契約上の品質基準（SLA）を適用し是正措置を要求。並行して入口基準を強化する
                                    ✅</strong
                                >
                            </li>
                            <li>
                                D)
                                スケジュールが遅れているため品質問題を無視して統合テストを開始する
                            </li>
                        </ul>
                        <p style={{marginTop: "0.7rem", color: "var(--neon-cyan)"}}>
                            <strong>解説：</strong
                            >SLAに品質基準が定義されているはずであり、まずその契約上の権利を行使する。同時に入口基準を強化し、品質未達コンポーネントが次フェーズに持ち込まれないよう管理する。A
                            は早計、B は非効率、D は最も危険。
                        </p>
                    </div>
                </div>

                <div className="trend-card">
                    <div className="trend-tag">問2 | K3 | プロジェクト管理</div>
                    <div className="trend-title">変更管理への参加</div>
                    <div className="trend-desc">
                        <p>
                            <strong>状況：</strong
                            >アジャイルプロジェクトで変更要求が発生。開発マネージャーは「この変更はスケジュールに影響しないはずだからテストマネージャーの参加は不要」と言っている。
                        </p>
                        <p style={{marginTop: "0.7rem"}}>
                            <strong>テストマネージャーの適切な行動は？</strong>
                        </p>
                        <ul style={{marginTop: "0.4rem"}}>
                            <li>A) 開発マネージャーの判断を信頼し、影響分析に参加しない</li>
                            <li style={{color: "var(--neon-green)"}}>
                                <strong
                                    >B)
                                    変更がスケジュールに影響しないと予想される場合でも影響分析に参加する
                                    ✅</strong
                                >
                            </li>
                            <li>
                                C) 変更要求に関するドキュメントのみを受け取り、自分で影響を評価する
                            </li>
                            <li>D) 変更管理はPMの責任であるためテストマネージャーは関与しない</li>
                        </ul>
                        <p style={{marginTop: "0.7rem", color: "var(--neon-cyan)"}}>
                            <strong>解説：</strong>シラバス LO 6.2.6
                            より、テストマネージャーは「変更がスケジュールに影響しないと予想される場合でも影響分析に関与すべき」。テストマネージャーの役割は「テストの側面だけに限らない」。
                        </p>
                    </div>
                </div>

                <div className="trend-card">
                    <div className="trend-tag">問3 | K4 | テスト報告</div>
                    <div className="trend-title">終了基準評価とリリース判断</div>
                    <div className="trend-desc">
                        <p>
                            <strong>状況：</strong>実行率97%✅ / 合格率87%❌（目標90%）/
                            Critical欠陥0件✅ / High欠陥3件✅ / コードカバレッジ82%✅
                        </p>
                        <p style={{marginTop: "0.7rem"}}>
                            <strong>テストマネージャーの最も適切な行動は？</strong>
                        </p>
                        <ul style={{marginTop: "0.4rem"}}>
                            <li>A) 3つの基準が達成されているためリリースを推奨する</li>
                            <li>B) 全ての基準が達成されていないためリリースを拒否する</li>
                            <li style={{color: "var(--neon-green)"}}>
                                <strong
                                    >C)
                                    合格率未達の内訳を分析し残余リスクを定量化してステークホルダーに提示しリリース判断を求める
                                    ✅</strong
                                >
                            </li>
                            <li>D) テスト合格率の目標を87%に下方修正してリリースを承認する</li>
                        </ul>
                        <p style={{marginTop: "0.7rem", color: "var(--neon-cyan)"}}>
                            <strong>解説：</strong
                            >終了基準の未達成は自動的にリリース拒否ではない。テストマネージャーの役割は「残余リスクを明確に提示し、ステークホルダーが情報に基づいたリリース判断を行えるよう支援すること」。
                        </p>
                    </div>
                </div>

                <div className="trend-card">
                    <div className="trend-tag">問4 | K2 | レトロスペクティブ</div>
                    <div className="trend-title">繰り返し発生する問題への対応</div>
                    <div className="trend-desc">
                        <p>
                            <strong>状況：</strong
                            >「テスト環境の不安定性」が前回・今回のレトロで繰り返し問題として挙がっているが、アクションアイテムとして記録されただけで改善されていない。
                        </p>
                        <p style={{marginTop: "0.7rem"}}>
                            <strong>テストマネージャーの最も適切な対応は？</strong>
                        </p>
                        <ul style={{marginTop: "0.4rem"}}>
                            <li>A) 毎回のレトロで同じ問題を議論しチームの意識を高める</li>
                            <li>
                                B)
                                この問題はテストマネージャーの管轄外であるためインフラチームに委ねる
                            </li>
                            <li style={{color: "var(--neon-green)"}}>
                                <strong
                                    >C)
                                    担当者・期限・成功基準を明確にしたアクションアイテムを設定し次回で必ず進捗を確認する仕組みを作る
                                    ✅</strong
                                >
                            </li>
                            <li>
                                D)
                                環境問題はテストプロセスに影響するのでテスト見積もりを増やして対応する
                            </li>
                        </ul>
                        <p style={{marginTop: "0.7rem", color: "var(--neon-cyan)"}}>
                            <strong>解説：</strong
                            >レトロスペクティブの目的は「改善を実現すること」。アクションアイテムに担当者・期限・成功基準が設定されなければ意味がない。テストマネージャーは改善を「チームの習慣」にすることが求められる。
                        </p>
                    </div>
                </div>

                <h3>試験直前チェックリスト</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>章</th>
                                <th>必須確認項目</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Ch.1 外部関係</strong></td>
                                <td>
                                    5パターンのサードパーティ関係 /
                                    SLA3カテゴリ（ターンアラウンド・成果物・品質） /
                                    テスト戦略マージの11項目 / 段階別エントリ・エグジット基準
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Ch.2 組織横断</strong></td>
                                <td>
                                    テストチーム4種類の脅威 / 防衛の3柱 / テストのROI定量化 /
                                    マルチユースツール4フェーズ /
                                    ステークホルダー別コミュニケーション
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Ch.3 PJ管理</strong></td>
                                <td>
                                    広帯域デルファイ法の手順 / 三点見積もり計算式（PERT） /
                                    リスクマトリクス（9スコア） / 変更管理への必須参加
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Ch.4 評価・報告</strong></td>
                                <td>
                                    内部vs外部報告の違い / テスト段階別報告内容（5段階） /
                                    終了基準評価と残余リスク提示 / DCE計算式（目標≥95%）
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Ch.5 ドメイン</strong></td>
                                <td>
                                    ライフサイクルモデル別特徴 / 安全クリティカル標準（ISO 26262 /
                                    DO-178C / IEC 62304） / リリース3考慮事項
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Ch.6 有効性</strong></td>
                                <td>
                                    有効性・効率性・満足度の違い / テストポリシー目標KPI /
                                    レトロ5ステップ /
                                    アクションアイテムの3要素（担当者・期限・成功基準）
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="refs">
                <div className="section-header">
                    <span className="chapter-num">参考文献</span>
                    <h2 className="section-title">参照URL一覧（カテゴリ別）</h2>
                </div>

                <h3>🏛️ 公式ISTQB®リソース</h3>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-expert-level-test-management-operational-test-management-ctel-tm-otm/"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">公式認定ページ</div>
                        <div className="ref-title">CTEL-TM-OTM 公式認定ページ</div>
                        <div className="ref-url">istqb.org/.../ctel-tm-otm/</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-expert-level-test-management-strategic-test-management-ctel-tm-sm/"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">公式認定ページ</div>
                        <div className="ref-title">CTEL-TM-STM（Part 1）公式ページ</div>
                        <div className="ref-url">istqb.org/.../ctel-tm-sm/</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-expert-level-test-management-managing-the-test-team-ctel-tm-mtt/"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">公式認定ページ</div>
                        <div className="ref-title">CTEL-TM-MTT（Part 3）公式ページ</div>
                        <div className="ref-url">istqb.org/.../ctel-tm-mtt/</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB-CTEL-TM_Syllabus_v1.0_2011.pdf"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">公式シラバス PDF</div>
                        <div className="ref-title">CTEL-TM シラバス v1.0（2011年）</div>
                        <div className="ref-url">istqb.org/.../CTEL-TM_Syllabus_v1.0_2011.pdf</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://glossary.istqb.org/en_US/search?term="
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">公式ツール</div>
                        <div className="ref-title">ISTQB グロッサリー（用語集）</div>
                        <div className="ref-url">glossary.istqb.org/en_US/search</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/expert-level/"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">公式情報</div>
                        <div className="ref-title">Expert Level 認定概要</div>
                        <div className="ref-url">istqb.org/certifications/expert-level/</div></a
                    >
                </div>

                <h3>📢 試験プロバイダー</h3>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://isqi.org/ISTQB-CTEL-TM-Part-2-Operational-Test-Management/CT-EL-TM-MCQ-P2.82"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">試験プロバイダー</div>
                        <div className="ref-title">iSQI — CTEL-TM-OTM 試験情報</div>
                        <div className="ref-url">isqi.org/.../CT-EL-TM-MCQ-P2.82</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://www.brightest.org/en/certifications/ISTQB-r-CTEL-Test-Management-Operational-Test-Management/"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">試験プロバイダー</div>
                        <div className="ref-title">Brightest — CTEL-TM-OTM 情報</div>
                        <div className="ref-url">brightest.org/en/certifications/.../</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://www.processexam.com/istqb/istqb-ctel-tm-certification-exam-sample-questions"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">学習リソース</div>
                        <div className="ref-title">ProcessExam — 無料サンプル問題</div>
                        <div className="ref-url">processexam.com/.../sample-questions</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://istqb.org/exam-providers/"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">公式ツール</div>
                        <div className="ref-title">試験プロバイダー検索</div>
                        <div className="ref-url">istqb.org/exam-providers/</div></a
                    >
                </div>

                <h3>📖 関連資格・参考標準</h3>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-foundation-level/"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">前提資格</div>
                        <div className="ref-title">CTFL v4.0（Foundation Level）</div>
                        <div className="ref-url">
                            istqb.org/certifications/certified-tester-foundation-level/
                        </div></a
                    >
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">前提資格</div>
                        <div className="ref-title">CTAL-TM v3.0（Advanced Level）</div>
                        <div className="ref-url">istqb.org/certifications/...ctal-tm-v3-0/</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://www.iso.org/standard/68383.html"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">安全規格</div>
                        <div className="ref-title">ISO 26262 — 自動車機能安全</div>
                        <div className="ref-url">iso.org/standard/68383.html</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://www.iso.org/standard/38421.html"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">医療機器規格</div>
                        <div className="ref-title">IEC 62304 — 医療機器ソフトウェア</div>
                        <div className="ref-url">iso.org/standard/38421.html</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://www.tmmifoundation.org/"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">テストプロセス</div>
                        <div className="ref-title">TMMi Foundation — テスト成熟度モデル</div>
                        <div className="ref-url">tmmifoundation.org/</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://istqb.org/about/code-of-ethics/"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">倫理規定</div>
                        <div className="ref-title">ISTQB 倫理規定 (Code of Ethics)</div>
                        <div className="ref-url">istqb.org/about/code-of-ethics/</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://testing.googleblog.com/"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">ベストプラクティス</div>
                        <div className="ref-title">Google Testing Blog</div>
                        <div className="ref-url">testing.googleblog.com/</div></a
                    >
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-expert-level-improving-the-test-process-assessing-test-processes-ctel-itp-atp/"
                        target="_blank"
                        rel="noopener"
                        ><div className="ref-category">関連資格</div>
                        <div className="ref-title">CTEL-ITP-ATP（テストプロセス改善）</div>
                        <div className="ref-url">istqb.org/certifications/...ctel-itp-atp/</div></a
                    >
                </div>
            </section>

            <section>
                <hr />
                <h2>Expert Level Test Manager（OTM）成功の10原則</h2>
                <ol className="step-list">
                    <li className="step-item">
                        <span className="step-icon">1</span>
                        <div className="step-content">
                            <strong>サードパーティ関係は「信頼+契約」で管理する</strong>
                            <p>
                                SLAと品質ゲートで客観的な基準を設ける。良好なコミュニケーション関係を構築した上で、契約上の権利を行使する勇気を持つ
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">2</span>
                        <div className="step-content">
                            <strong>SLAは「測定可能」で「強制力がある」ことが前提</strong>
                            <p>
                                曖昧な表現（「高品質であること」）は避け、数値目標（カバレッジ≥85%・Critical欠陥=0件等）で定義する
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">3</span>
                        <div className="step-content">
                            <strong>テストの価値を「ビジネス言語」で常に発信する</strong>
                            <p>
                                ROI・リスク削減・コスト回避の観点で説明する。感情的な訴えではなくデータと事実で示す
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">4</span>
                        <div className="step-content">
                            <strong>組織横断の関係づくりは「投資」である</strong>
                            <p>
                                必要な時だけ連絡するのではなく、日頃から関係を維持する。開発・PM・ビジネスとの相互理解が品質向上につながる
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">5</span>
                        <div className="step-content">
                            <strong>メトリクスは「目的」ではなく「手段」として使う</strong>
                            <p>
                                測定すること自体が目的になってはいけない。ステークホルダーが意思決定できる情報を提供する
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">6</span>
                        <div className="step-content">
                            <strong>終了基準は「達成or不達成」だけでなく残余リスクを考える</strong>
                            <p>
                                未達成の基準のリスクを定量化してステークホルダーに提示する。リリース判断の最終権限はビジネスステークホルダーにある
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">7</span>
                        <div className="step-content">
                            <strong>レトロスペクティブは「担当者+期限+成功基準」がセット</strong>
                            <p>
                                アクションなきレトロスペクティブは時間の無駄。次回のレトロスペクティブで必ず前回アクションを確認する
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">8</span>
                        <div className="step-content">
                            <strong>変更管理には常に関与する（スコープに関わらず）</strong>
                            <p>
                                「スケジュールに影響しない変更」でも影響分析に参加する。テスト観点の変更影響を組織全体のリスク管理に貢献する
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">9</span>
                        <div className="step-content">
                            <strong>ライフサイクルモデルによってアプローチを変える</strong>
                            <p>
                                ウォーターフォール・アジャイル・安全クリティカルではテスト管理の方法が根本的に異なる。コンテキストに適応する
                            </p>
                        </div>
                    </li>
                    <li className="step-item">
                        <span className="step-icon">10</span>
                        <div className="step-content">
                            <strong>倫理的・誠実な報告を最優先にする</strong>
                            <p>
                                悪いニュースも素早く・正確に・客観的に伝える。政治的圧力に屈せず、品質の実態を正しく報告する。テストマネージャーの信頼性がチーム全体の信頼性を決める
                            </p>
                        </div>
                    </li>
                </ol>

                <div className="callout info" style={{marginTop: "2rem"}}>
                    <div className="callout-label">
                        📌 最終更新日: 2025年 | 準拠シラバス: ISTQB® CTEL-TM Syllabus
                        v1.0（2011年11月1日正式リリース）
                    </div>
                    <p>
                        ⚠️
                        本ガイドはISTQB®が公認したトレーニング資料ではありません。公式シラバス・サンプル問題と合わせてご使用ください。試験情報の最終確認は必ず公式サイト（<a
                            href="https://istqb.org"
                            target="_blank"
                            rel="noopener"
                            >istqb.org</a
                        >）で行ってください。
                    </p>
                </div>
            </section>
        </div>
        {/* /wrapper */}
        </div>
    );
}
