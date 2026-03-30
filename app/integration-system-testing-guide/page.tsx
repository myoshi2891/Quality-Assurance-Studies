import '../integration-system-testing-guide.css';

export default function IntegrationSystemTestingGuide() {
    return (
        <>
            
            <section className="hero" id="top">
                <div className="hero-content">
                    <div className="hero-rule">
                        <span>ISTQB CTFL v4.0 — INTEGRATION & SYSTEM TESTING 2025</span>
                    </div>
                    <h1>
                        <em>Integration</em> &amp;<br />
                        System Testing
                        <small>ISTQB CTFL v4.0 準拠 | 初学者から実践者まで完全網羅</small>
                    </h1>
                    <p className="hero-desc">
                        コンポーネント統合テスト・システム統合テストから、スモーク・サニティ・リグレッション・
                        パフォーマンス・セキュリティ・ユーザビリティテストまで。
                        2025年最新の実務知識とISTQB標準を融合したステップバイステップガイドです。
                    </p>

                    <div className="hero-stats">
                        <div className="stat-gem">
                            <span className="stat-num">Level 2–3</span
                            ><span className="stat-label">ISTQBテストレベル</span>
                        </div>
                        <div className="stat-gem">
                            <span className="stat-num">7+</span
                            ><span className="stat-label">主要システムテスト種別</span>
                        </div>
                        <div className="stat-gem">
                            <span className="stat-num">v4.0.1</span
                            ><span className="stat-label">ISTQB CTFL最新シラバス</span>
                        </div>
                        <div className="stat-gem">
                            <span className="stat-num">60%</span
                            ><span className="stat-label">欠陥の結合フェーズ発見率</span>
                        </div>
                    </div>

                    {/* Test Level Ladder */}
                    <div className="level-ladder">
                        <div className="level-row">
                            <div className="level-num">L1</div>
                            <div className="level-name">コンポーネントテスト（ユニット）</div>
                            <div className="level-scope">個々の関数・クラス・モジュール</div>
                            <span className="badge b-muted">前工程</span>
                        </div>
                        <div className="level-row active">
                            <div className="level-num">L2</div>
                            <div className="level-name">インテグレーションテスト</div>
                            <div className="level-scope">
                                コンポーネント間・システム間のインターフェース検証
                            </div>
                            <span className="badge b-gold">← ここ</span>
                        </div>
                        <div className="level-row active">
                            <div className="level-num">L3</div>
                            <div className="level-name">システムテスト</div>
                            <div className="level-scope">
                                システム全体の機能・非機能要件を統合環境で検証
                            </div>
                            <span className="badge b-gold">← ここ</span>
                        </div>
                        <div className="level-row">
                            <div className="level-num">L4</div>
                            <div className="level-name">受入テスト（UAT）</div>
                            <div className="level-scope">ユーザーがビジネス要件の充足を確認</div>
                            <span className="badge b-muted">後工程</span>
                        </div>
                    </div>

                    <div className="callout c-gold mt-2">
                        <strong>ISTQB CTFL v4.0 Section 2.2 の定義：</strong>
                        統合テストは「複数のコンポーネント間のインターフェースと相互作用を検証する」テストレベル。
                        システムテストは「完全に統合されたシステムが指定された要件を満たしているかを検証する」テストレベル。
                        両者は連続した防衛線として機能し、ユニットテストでは発見できない欠陥を捕捉します。
                        <br /><a
                            href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                            className="ulink"
                            target="_blank"
                            >istqb.org — CTFL v4.0 公式ページ</a
                        >
                        <a
                            href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                            className="ulink"
                            target="_blank"
                            >シラバス v4.0.1 PDF (公式)</a
                        >
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 1: INTEGRATION TESTING
════════════════════════════════════════ */}
            <section id="integration">
                <div className="section-header">
                    <span className="section-header-num"
                        >STEP 01 — ISTQB CTFL SECTION 2.2.2: INTEGRATION TESTING</span
                    >
                    <h2>インテグレーションテスト（統合テスト）</h2>
                    <div className="gold-rule"></div>
                    <p>
                        ユニットテストで個々のコンポーネントの品質を確認した後、それらを「組み合わせた時に正しく動くか」を検証するフェーズです。インターフェース・データフロー・通信プロトコルが主な検証対象です。
                    </p>
                </div>

                {/* CIT vs SIT */}
                <h3
                    style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.85rem", color: "var(--color-text-primary)"}}
                >
                    2種類の統合テスト
                </h3>
                <div className="grid-2">
                    <div className="card" style={{borderLeft: "3px solid var(--color-accent-yellow)"}}>
                        <div
                            style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem"}}
                        >
                            <h3 style={{fontSize: "1rem", margin: "0"}}>
                                コンポーネント統合テスト（CIT）
                            </h3>
                            <span className="badge b-gold">Level 2a</span>
                        </div>
                        <p>
                            ユニットテスト後に実施。同一システム内の複数コンポーネント間のインターフェース・呼び出し・データフローを検証。開発者またはテスターが実施。
                        </p>
                        <hr className="div" />
                        <div style={{fontSize: "12.5px", color: "var(--color-text-secondary)"}}>
                            <div>✦ 対象：モジュール間API・関数呼び出し・ライブラリ連携</div>
                            <div className="mt-1">✦ 環境：インメモリDB・テスト用コンテナ</div>
                            <div className="mt-1">✦ 主な欠陥：型の不一致・NULLハンドリングの誤り</div>
                        </div>
                    </div>
                    <div className="card" style={{borderLeft: "3px solid var(--color-accent-green)"}}>
                        <div
                            style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem"}}
                        >
                            <h3 style={{fontSize: "1rem", margin: "0"}}>システム統合テスト（SIT）</h3>
                            <span className="badge b-sage">Level 2b</span>
                        </div>
                        <p>
                            異なるシステム・外部API・マイクロサービス・サードパーティサービス間の連携を検証。テスターまたはQAチームが実施。本番に近い環境が必要。
                        </p>
                        <hr className="div" />
                        <div style={{fontSize: "12.5px", color: "var(--color-text-secondary)"}}>
                            <div>✦ 対象：外部API・決済ゲートウェイ・メッセージキュー</div>
                            <div className="mt-1">✦ 環境：ステージング・Docker Compose</div>
                            <div className="mt-1">✦ 主な欠陥：通信プロトコルの不一致・タイムアウト</div>
                        </div>
                    </div>
                </div>

                {/* Defect types */}
                <h3
                    className="mt-4"
                    style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.85rem", color: "var(--color-text-primary)"}}
                >
                    統合テストで発見される代表的な欠陥
                </h3>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>欠陥カテゴリ</th>
                                <th>具体例</th>
                                <th>影響度</th>
                                <th>発見手法</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>インターフェース不一致</strong></td>
                                <td>API シグネチャの引数の型・順序が異なる</td>
                                <td className="r">高</td>
                                <td>コントラクトテスト・API統合テスト</td>
                            </tr>
                            <tr>
                                <td><strong>データ変換エラー</strong></td>
                                <td>int → string の暗黙変換・日付フォーマット差異</td>
                                <td className="w">中〜高</td>
                                <td>データフロー検証・境界値テスト</td>
                            </tr>
                            <tr>
                                <td><strong>NULL・例外伝播</strong></td>
                                <td>下位サービスの例外が上位で適切にハンドリングされない</td>
                                <td className="r">高</td>
                                <td>エラーケーステスト</td>
                            </tr>
                            <tr>
                                <td><strong>タイミング問題</strong></td>
                                <td>非同期処理の競合・タイムアウト設定の不整合</td>
                                <td className="w">中〜高</td>
                                <td>並行実行テスト・ストレステスト</td>
                            </tr>
                            <tr>
                                <td><strong>認証・権限エラー</strong></td>
                                <td>サービス間のAPIキー未送信・JWT期限切れ</td>
                                <td className="r">高</td>
                                <td>セキュリティ統合テスト</td>
                            </tr>
                            <tr>
                                <td><strong>エンコーディング差異</strong></td>
                                <td>文字コード（UTF-8 vs Shift-JIS）の不一致による文字化け</td>
                                <td className="w">中</td>
                                <td>国際化テスト</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Code example */}
                <div className="code-block mt-3">
                    <div className="code-header">
                        <div className="code-dots"><span></span><span></span><span></span></div>
                        <span className="code-lang"
                            >PYTHON / pytest + FastAPI — コンポーネント統合テスト</span
                        >
                    </div>
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"cm\">\"\"\"\n【統合テストの核心】\n- 実際のHTTPリクエストを送信（TestClient経由）\n- テスト専用DBに実際に接続・書き込みを行う\n- モックは使わない（ユニットテストとの違い）\n\"\"\"</span>\n<span class=\"kw\">import</span> pytest\n<span class=\"kw\">from</span> fastapi.testclient <span class=\"kw\">import</span> TestClient\n<span class=\"kw\">from</span> sqlalchemy <span class=\"kw\">import</span> create_engine\n<span class=\"kw\">from</span> app.main <span class=\"kw\">import</span> app\n<span class=\"kw\">from</span> app.models <span class=\"kw\">import</span> Base, Order\n\n<span class=\"dec\">@pytest.fixture</span>(scope=<span class=\"str\">\"function\"</span>)\n<span class=\"kw\">def</span> <span class=\"fn\">test_client</span>():\n    <span class=\"cm\"># テスト用インメモリDBに接続</span>\n    engine = <span class=\"fn\">create_engine</span>(<span class=\"str\">\"sqlite:///:memory:\"</span>)\n    Base.metadata.<span class=\"fn\">create_all</span>(engine)\n    app.state.db = engine\n    <span class=\"kw\">with</span> <span class=\"cls\">TestClient</span>(app) <span class=\"kw\">as</span> client:\n        <span class=\"kw\">yield</span> client, engine\n    Base.metadata.<span class=\"fn\">drop_all</span>(engine)\n\n<span class=\"kw\">class</span> <span class=\"cls\">TestOrderIntegration</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">test_注文作成_DBに保存され正しいレスポンスを返す</span>(<span class=\"dec\">self</span>, test_client):\n        client, engine = test_client\n\n        <span class=\"cm\"># Act: 実際のAPIエンドポイントを呼ぶ</span>\n        res = client.<span class=\"fn\">post</span>(<span class=\"str\">\"/api/v1/orders\"</span>, json={\n            <span class=\"str\">\"product_id\"</span>: <span class=\"num\">1</span>,\n            <span class=\"str\">\"quantity\"</span>: <span class=\"num\">3</span>,\n            <span class=\"str\">\"user_id\"</span>: <span class=\"num\">42</span>\n        }, headers={<span class=\"str\">\"Authorization\"</span>: <span class=\"str\">\"Bearer test-token\"</span>})\n\n        <span class=\"cm\"># Assert 1: HTTPレスポンスの検証</span>\n        <span class=\"kw\">assert</span> res.status_code == <span class=\"num\">201</span>\n        body = res.<span class=\"fn\">json</span>()\n        <span class=\"kw\">assert</span> body[<span class=\"str\">\"status\"</span>] == <span class=\"str\">\"pending\"</span>\n\n        <span class=\"cm\"># Assert 2: DBの実際のデータを検証（統合テストの核心）</span>\n        <span class=\"kw\">with</span> engine.<span class=\"fn\">connect</span>() <span class=\"kw\">as</span> conn:\n            db_order = conn.<span class=\"fn\">execute</span>(\n                <span class=\"str\">\"SELECT * FROM orders WHERE id = ?\"</span>, (body[<span class=\"str\">\"id\"</span>],)\n            ).<span class=\"fn\">fetchone</span>()\n        <span class=\"kw\">assert</span> db_order <span class=\"kw\">is not</span> <span class=\"cls\">None</span>\n        <span class=\"kw\">assert</span> db_order.quantity == <span class=\"num\">3</span>\n        <span class=\"kw\">assert</span> db_order.user_id == <span class=\"num\">42</span>" }} />
                </div>
                <p className="text-sm mt-1">
                    参照:
                    <a
                        href="https://mastersoftwaretesting.com/certification-guides/istqb/ctfl/ctfl-complete-guide"
                        className="ulink"
                        target="_blank"
                        >mastersoftwaretesting.com — ISTQB CTFL Complete Guide 2025</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 2: INTEGRATION STRATEGIES
════════════════════════════════════════ */}
            <section id="strategies">
                <div className="section-header">
                    <span className="section-header-num">STEP 02 — INTEGRATION STRATEGIES</span>
                    <h2>結合テスト戦略の選択</h2>
                    <div className="gold-rule"></div>
                    <p>
                        どの順序でコンポーネントを結合してテストするかは、プロジェクトの性質・リスク・チームの規模によって決まります。ISTQB
                        は増分的（インクリメンタル）アプローチを推奨しています。
                    </p>
                </div>

                <div className="strat-grid">
                    <div className="strat-card" style={{borderTop: "2px solid var(--color-accent-red)"}}>
                        <span className="strat-icon">💥</span>
                        <div className="strat-title">ビッグバン統合</div>
                        <span className="strat-tag b-danger">Big Bang</span>
                        <div className="strat-body">
                            全コンポーネントを一度に結合してテスト。最もシンプルだが、欠陥の原因特定が困難。
                        </div>
                        <div className="strat-pros-cons">
                            <div className="pro">✓ セットアップが簡単・小規模向け</div>
                            <div className="con">✗ 欠陥の原因箇所が特定しにくい</div>
                            <div className="con">✗ 大規模では非常にリスクが高い</div>
                        </div>
                    </div>
                    <div className="strat-card" style={{borderTop: "2px solid var(--color-accent-blue)"}}>
                        <span className="strat-icon">⬇</span>
                        <div className="strat-title">トップダウン統合</div>
                        <span className="strat-tag b-info">Top-Down</span>
                        <div className="strat-body">
                            最上位コンポーネントから順に下位へ。未実装の下位コンポーネントには<strong
                                style={{color: "var(--color-text-primary)"}}
                                >スタブ（Stub）</strong
                            >を使用。
                        </div>
                        <div className="strat-pros-cons">
                            <div className="pro">✓ 主要ビジネスフローを早期確認</div>
                            <div className="pro">✓ UI・アーキテクチャ問題を早期発見</div>
                            <div className="con">✗ スタブ作成コストが高い</div>
                        </div>
                    </div>
                    <div className="strat-card" style={{borderTop: "2px solid var(--color-accent-green)"}}>
                        <span className="strat-icon">⬆</span>
                        <div className="strat-title">ボトムアップ統合</div>
                        <span className="strat-tag b-ok">Bottom-Up</span>
                        <div className="strat-body">
                            最下位コンポーネントから順に上位へ。未実装の上位コンポーネントには<strong
                                style={{color: "var(--color-text-primary)"}}
                                >ドライバ（Driver）</strong
                            >を使用。
                        </div>
                        <div className="strat-pros-cons">
                            <div className="pro">✓ 低レベルの動作を早期に確認</div>
                            <div className="pro">✓ コア機能の安定性を確立しやすい</div>
                            <div className="con">✗ UI検証が後回しになる</div>
                        </div>
                    </div>
                    <div className="strat-card" style={{borderTop: "2px solid var(--color-accent-yellow)"}}>
                        <span className="strat-icon">🔄</span>
                        <div className="strat-title">継続的統合（CI）</div>
                        <span className="strat-tag b-gold">Continuous Integration</span>
                        <div className="strat-body">
                            コードプッシュごとに自動で統合・テスト。2025年の現代的プロジェクトにおける標準アプローチ。
                        </div>
                        <div className="strat-pros-cons">
                            <div className="pro">✓ 最短で欠陥を検出・修正</div>
                            <div className="pro">✓ チーム全体の品質意識が向上</div>
                            <div className="con">✗ CI/CD環境整備のコストが必要</div>
                        </div>
                    </div>
                </div>

                {/* Driver vs Stub */}
                <div className="callout c-gold mt-3">
                    <strong>スタブ（Stub）vs ドライバ（Driver）の違い：</strong><br />
                    <strong>スタブ：</strong
                    >まだ実装されていない<em>下位</em>コンポーネントの代替品。固定値を返すだけの簡易実装。トップダウン統合で使用。<br />
                    <strong>ドライバ：</strong
                    >まだ実装されていない<em>上位</em>コンポーネントの代替品。テスト対象を呼び出す呼び出し元のシミュレーター。ボトムアップ統合で使用。
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 3: SYSTEM TESTING OVERVIEW
════════════════════════════════════════ */}
            <section id="system">
                <div className="section-header">
                    <span className="section-header-num">STEP 03 — ISTQB CTFL SECTION 2.2.3: SYSTEM TESTING</span>
                    <h2>システムテスト（System Testing）</h2>
                    <div className="gold-rule"></div>
                    <p>
                        統合が完了したシステム全体に対して、機能要件（何をするか）と非機能要件（どのようにするか）の両方を検証する最も包括的なテストレベルです。独立したテストチームが実施します。
                    </p>
                </div>

                <div className="card-grid">
                    <div className="card">
                        <span className="card-icon">🎯</span>
                        <h3>目的と対象</h3>
                        <p>
                            完全統合されたシステムが「仕様通りに動くか」を、ユーザーの視点から機能・非機能の両面で検証。本番に近い環境（ステージング）での実施が必須。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🏗️</span>
                        <h3>テスト環境</h3>
                        <p>
                            本番環境と可能な限り同等の環境。同じOS・ミドルウェア・ネットワーク構成。本番データに近い量のテストデータを用意することが重要。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">👤</span>
                        <h3>実施者と独立性</h3>
                        <p>
                            独立したテストチーム（QA）が実施。開発者からの独立性が高いほど客観性と欠陥発見率が向上。ISTQBはテストの独立性を品質確保の重要要素と位置付ける。
                        </p>
                    </div>
                </div>

                {/* Functional vs Non-functional */}
                <h3
                    className="mt-4"
                    style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.85rem", color: "var(--color-text-primary)"}}
                >
                    機能テスト vs 非機能テスト
                </h3>
                <div
                    style={{background: "var(--color-bg-secondary)", border: "1px solid var(--border)", borderRadius: "var(--radius-DEFAULT, 12px)", overflow: "hidden"}}
                >
                    <div className="comp-row" style={{background: "rgba(201, 168, 76, 0.07)"}}>
                        <div className="comp-cell">観点</div>
                        <div className="comp-cell">機能テスト（Functional）</div>
                        <div className="comp-cell">非機能テスト（Non-Functional）</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>問いかけ</strong></div>
                        <div className="comp-cell">「正しく動くか？」（What）</div>
                        <div className="comp-cell">「うまく動くか？」（How Well）</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>検証内容</strong></div>
                        <div className="comp-cell">機能要件・ビジネスロジック・データ処理</div>
                        <div className="comp-cell">性能・セキュリティ・ユーザビリティ・信頼性</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>判定基準</strong></div>
                        <div className="comp-cell">PASS / FAIL（二択）</div>
                        <div className="comp-cell">数値基準との比較（例: 応答 &lt; 2秒）</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>代表ツール</strong></div>
                        <div className="comp-cell">Selenium・Playwright・Postman</div>
                        <div className="comp-cell">JMeter・k6・OWASP ZAP・Lighthouse</div>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://mastersoftwaretesting.com/testing-fundamentals/types-of-testing/functional-testing/system-testing"
                        className="ulink"
                        target="_blank"
                        >mastersoftwaretesting.com — System Testing Complete Guide (Jan 2026)</a
                    >
                    <a
                        href="https://www.virtuosoqa.com/post/functional-vs-non-functional-testing"
                        className="ulink"
                        target="_blank"
                        >virtuosoqa.com — Functional vs Non-Functional Testing</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 4: SMOKE TESTING
════════════════════════════════════════ */}
            <section id="smoke">
                <div className="section-header">
                    <span className="section-header-num">STEP 04 — SMOKE TESTING（スモークテスト）</span>
                    <h2>スモークテスト — ビルドの「通過証」</h2>
                    <div className="gold-rule"></div>
                    <p>
                        新しいビルドが届いた際に最初に実施する「ゲートキーパー」テスト。基本機能が動作するかを素早く確認し、詳細テストを行う価値があるかを判断します。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <div className="callout c-gold">
                            <strong>名前の由来：</strong>
                            電子機器の製造現場で「電源を入れてスモーク（煙）が出なければOK」と判断したことが語源。
                            ソフトウェアでは「壊れていない最低限の動作確認」を意味します。
                        </div>

                        <div className="step-list mt-3">
                            <div className="step-item">
                                <div className="step-num-circle">1</div>
                                <div className="step-content">
                                    <h4>何をテストするか</h4>
                                    <p>
                                        アプリが起動できるか・ログインできるか・主要ページが表示されるか。全機能ではなく<strong
                                            style={{color: "var(--color-text-primary)"}}
                                            >クリティカルパス</strong
                                        >のみ対象。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">2</div>
                                <div className="step-content">
                                    <h4>いつ実施するか</h4>
                                    <p>
                                        新しいビルドがデリバリーされた直後。CI/CDパイプラインでのコミット後に自動実行するのが理想的。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">3</div>
                                <div className="step-content">
                                    <h4>失敗した場合の対処</h4>
                                    <p>
                                        スモークテストが失敗したらビルドをすぐに差し戻す。詳細テストに進まない。開発チームに即時フィードバック。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--color-text-primary)"}}
                        >
                            スモークテストの典型的なチェックリスト
                        </h3>
                        <div
                            style={{background: "var(--color-bg-secondary)", border: "1px solid var(--border)", borderRadius: "var(--radius-DEFAULT, 12px)", padding: "1rem"}}
                        >
                            <div className="step-list" style={{gap: "0"}}>
                                <div className="step-item" style={{padding: "0.6rem 0"}}>
                                    <div
                                        className="step-num-circle"
                                        style={{width: "22px", height: "22px", fontSize: "10px", borderRadius: "3px"}}
                                    >
                                        ✓
                                    </div>
                                    <div className="step-content">
                                        <h4 style={{fontSize: "12px"}}>アプリケーション起動確認</h4>
                                        <p style={{fontSize: "11.5px"}}>
                                            サービスが正常に起動し、エラーログが出ていない
                                        </p>
                                    </div>
                                </div>
                                <div className="step-item" style={{padding: "0.6rem 0"}}>
                                    <div
                                        className="step-num-circle"
                                        style={{width: "22px", height: "22px", fontSize: "10px", borderRadius: "3px"}}
                                    >
                                        ✓
                                    </div>
                                    <div className="step-content">
                                        <h4 style={{fontSize: "12px"}}>認証機能</h4>
                                        <p style={{fontSize: "11.5px"}}>
                                            正常なログイン・ログアウトが機能する
                                        </p>
                                    </div>
                                </div>
                                <div className="step-item" style={{padding: "0.6rem 0"}}>
                                    <div
                                        className="step-num-circle"
                                        style={{width: "22px", height: "22px", fontSize: "10px", borderRadius: "3px"}}
                                    >
                                        ✓
                                    </div>
                                    <div className="step-content">
                                        <h4 style={{fontSize: "12px"}}>主要ページの表示</h4>
                                        <p style={{fontSize: "11.5px"}}>
                                            ホーム・一覧・詳細画面が正常に表示される
                                        </p>
                                    </div>
                                </div>
                                <div className="step-item" style={{padding: "0.6rem 0"}}>
                                    <div
                                        className="step-num-circle"
                                        style={{width: "22px", height: "22px", fontSize: "10px", borderRadius: "3px"}}
                                    >
                                        ✓
                                    </div>
                                    <div className="step-content">
                                        <h4 style={{fontSize: "12px"}}>主要API稼働確認</h4>
                                        <p style={{fontSize: "11.5px"}}>
                                            コア機能のAPIが200/201を返す
                                        </p>
                                    </div>
                                </div>
                                <div className="step-item" style={{padding: "0.6rem 0", border: "none"}}>
                                    <div
                                        className="step-num-circle"
                                        style={{width: "22px", height: "22px", fontSize: "10px", borderRadius: "3px"}}
                                    >
                                        ✓
                                    </div>
                                    <div className="step-content">
                                        <h4 style={{fontSize: "12px"}}>DB接続確認</h4>
                                        <p style={{fontSize: "11.5px"}}>
                                            データベースへの接続が成功している
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="code-block mt-2">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang">スモークテスト自動化例 (Playwright)</span>
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"cm\">// smoke.spec.ts — CI/CDで毎コミット実行</span>\n<span class=\"fn\">test</span>.<span class=\"fn\">describe</span>(<span class=\"str\">\"スモークテスト\"</span>, () => {\n  <span class=\"fn\">test</span>(<span class=\"str\">\"ホームページが表示される\"</span>, <span class=\"kw\">async</span>({page}) => {\n    <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"str\">\"/\"</span>);\n    <span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page).toHaveTitle(<span class=\"str\">/My App/</span>);\n  });\n\n  <span class=\"fn\">test</span>(<span class=\"str\">\"ログインが成功する\"</span>, <span class=\"kw\">async</span>({page}) => {\n    <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"str\">\"/login\"</span>);\n    <span class=\"kw\">await</span> page.<span class=\"fn\">fill</span>(<span class=\"str\">\"#email\"</span>, <span class=\"str\">\"test@example.com\"</span>);\n    <span class=\"kw\">await</span> page.<span class=\"fn\">fill</span>(<span class=\"str\">\"#password\"</span>, <span class=\"str\">\"test123\"</span>);\n    <span class=\"kw\">await</span> page.<span class=\"fn\">click</span>(<span class=\"str\">\"[type=submit]\"</span>);\n    <span class=\"kw\">await</span> <span class=\"fn\">expect</span>(page).toHaveURL(<span class=\"str\">\"/dashboard\"</span>);\n  });\n\n  <span class=\"fn\">test</span>(<span class=\"str\">\"ヘルスチェックAPIが応答する\"</span>, <span class=\"kw\">async</span>({request}) => {\n    <span class=\"kw\">const</span> res = <span class=\"kw\">await</span> request.<span class=\"fn\">get</span>(<span class=\"str\">\"/api/health\"</span>);\n    <span class=\"fn\">expect</span>(res.status()).<span class=\"fn\">toBe</span>(<span class=\"num\">200</span>);\n  });\n});" }} />
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://www.cloudbees.com/blog/the-smoke-sanity-and-regression-testing-triad"
                        className="ulink"
                        target="_blank"
                        >cloudbees.com — Smoke, Sanity, Regression Testing Triad</a
                    >
                    <a
                        href="https://katalon.com/resources-center/blog/sanity-testing-vs-smoke-testing"
                        className="ulink"
                        target="_blank"
                        >katalon.com — Sanity vs Smoke Testing Guide</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 5: SANITY TESTING
════════════════════════════════════════ */}
            <section id="sanity">
                <div className="section-header">
                    <span className="section-header-num">STEP 05 — SANITY TESTING（サニティテスト）</span>
                    <h2>サニティテスト — ピンポイントの健全性確認</h2>
                    <div className="gold-rule"></div>
                    <p>
                        バグ修正や小規模な変更後に、その変更が正しく機能し、他の部分に悪影響がないかを素早く確認するテストです。リグレッションテストのサブセットとして位置付けられます。
                    </p>
                </div>

                {/* Smoke vs Sanity comparison */}
                <h3
                    style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.85rem", color: "var(--color-text-primary)"}}
                >
                    スモークテスト vs サニティテスト — 決定的な違い
                </h3>
                <div
                    style={{background: "var(--color-bg-secondary)", border: "1px solid var(--border)", borderRadius: "var(--radius-DEFAULT, 12px)", overflow: "hidden"}}
                >
                    <div className="comp-row" style={{background: "rgba(201, 168, 76, 0.07)"}}>
                        <div className="comp-cell">観点</div>
                        <div className="comp-cell">🔥 スモークテスト</div>
                        <div className="comp-cell">🧪 サニティテスト</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>目的</strong></div>
                        <div className="comp-cell">ビルドが詳細テストに値するか判断</div>
                        <div className="comp-cell">特定の変更が意図通り動作するか確認</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>実施タイミング</strong></div>
                        <div className="comp-cell">新ビルド受領直後（最初のステップ）</div>
                        <div className="comp-cell">バグ修正・小変更後</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>スコープ</strong></div>
                        <div className="comp-cell">幅広く・浅く（Broad & Shallow）</div>
                        <div className="comp-cell">狭く・深く（Narrow & Deep）</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>ドキュメント</strong></div>
                        <div className="comp-cell">スクリプト化（事前定義）</div>
                        <div className="comp-cell">多くは非スクリプト（テスターの判断）</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>実施者</strong></div>
                        <div className="comp-cell">開発者・テスター両方</div>
                        <div className="comp-cell">テスター・QAチーム</div>
                    </div>
                </div>
                <p className="text-sm mt-1">
                    参照:
                    <a
                        href="https://www.browserstack.com/guide/sanity-testing-vs-smoke-testing"
                        className="ulink"
                        target="_blank"
                        >browserstack.com — Sanity vs Smoke Testing (Dec 2025)</a
                    >
                    <a
                        href="https://www.softwaretestinghelp.com/smoke-testing-and-sanity-testing-difference/"
                        className="ulink"
                        target="_blank"
                        >softwaretestinghelp.com — Smoke vs Sanity Difference (May 2025)</a
                    >
                </p>

                <div className="callout c-sage mt-3">
                    <strong>サニティテストが「時間がない時」の戦略的選択：</strong>
                    サニティテストは「時間制約がある状況での合理的な妥協点」として位置付けられます。
                    フルリグレッションを実行する時間がない場合に、変更の影響範囲に限定して深くテストすることで
                    リスクを最小化します。ただし、サニティテストはリグレッションテストの代替ではなく補完です。
                    <br /><a
                        href="https://www.blazemeter.com/blog/functional-testing-types"
                        className="ulink"
                        target="_blank"
                        >blazemeter.com — Functional Testing Types Guide</a
                    >
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 6: REGRESSION TESTING
════════════════════════════════════════ */}
            <section id="regression">
                <div className="section-header">
                    <span className="section-header-num">STEP 06 — REGRESSION TESTING（リグレッションテスト）</span>
                    <h2>リグレッションテスト — 「壊していない」の証明</h2>
                    <div className="gold-rule"></div>
                    <p>
                        コード変更・バグ修正・新機能追加後に、既存の機能が意図せず壊れていないことを確認するテストです。現代のCI/CDにおいて自動化の最優先対象です。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--color-text-primary)"}}
                        >
                            リグレッションテストの3つの手法
                        </h3>
                        <div className="step-list">
                            <div className="step-item">
                                <div className="step-num-circle">1</div>
                                <div className="step-content">
                                    <h4>再テスト全体（Retest All）</h4>
                                    <p>
                                        全テストケースを再実行。最も網羅的だが時間・コストが最大。大規模プロジェクトでは現実的でない。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">2</div>
                                <div className="step-content">
                                    <h4>リグレッションテスト選択（Test Selection）</h4>
                                    <p>
                                        変更の影響範囲を分析し、関連するテストケースのみ選択。影響分析の精度がカギ。最もバランスが良い。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">3</div>
                                <div className="step-content">
                                    <h4>テスト優先度付け（Prioritization）</h4>
                                    <p>
                                        ビジネス上の重要度・最近変更されたコード・過去の欠陥集中領域を元に優先度を付けて実行。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="callout c-warn mt-2">
                            <strong>自動化が最優先：</strong>
                            リグレッションテストはCI/CDパイプラインへの自動化が最も費用対効果の高い投資です。
                            一度作成したテストスイートは毎コミット・毎リリースで繰り返し実行できます。
                            <br /><a
                                href="https://qentelli.com/thought-leadership/insights/explained-smoke-testing-vs-sanity-testing-vs-regression-testing"
                                className="ulink"
                                target="_blank"
                                >qentelli.com — Smoke/Sanity/Regression Comparison</a
                            >
                        </div>
                    </div>
                    <div>
                        <div className="code-block mt-1">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang"
                                    >GitHub Actions — リグレッション自動化パイプライン</span
                                >
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"cm\"># .github/workflows/regression.yml</span>\n<span class=\"dec\">name</span>: Regression Tests\n\n<span class=\"dec\">on</span>:\n  push:    { branches: [main, release/*] }\n  schedule: [{ cron: <span class=\"str\">'0 2 * * *'</span> }]  <span class=\"cm\"># 毎日深夜に実行</span>\n\n<span class=\"dec\">jobs</span>:\n  <span class=\"fn\">regression</span>:\n    <span class=\"dec\">runs-on</span>: ubuntu-latest\n    <span class=\"dec\">services</span>:\n      <span class=\"fn\">postgres</span>:\n        <span class=\"dec\">image</span>: postgres:16\n        <span class=\"dec\">env</span>: { POSTGRES_PASSWORD: test }\n      <span class=\"fn\">redis</span>:\n        <span class=\"dec\">image</span>: redis:7\n\n    <span class=\"dec\">steps</span>:\n      - <span class=\"dec\">uses</span>: actions/checkout@v4\n      - <span class=\"dec\">run</span>: pip install -r requirements.txt\n      - <span class=\"dec\">name</span>: Run full regression suite\n        <span class=\"dec\">run</span>: |\n          pytest tests/regression/ \\\n            --cov=app \\\n            --cov-fail-under=<span class=\"num\">85</span> \\\n            --html=report.html \\\n            -v\n      - <span class=\"dec\">name</span>: Upload regression report\n        <span class=\"dec\">uses</span>: actions/upload-artifact@v4\n        <span class=\"dec\">with</span>:\n          <span class=\"dec\">name</span>: regression-report\n          <span class=\"dec\">path</span>: report.html" }} />
                        </div>
                    </div>
                </div>

                {/* Regression vs Retesting */}
                <div className="callout c-info mt-3">
                    <strong
                        >リグレッションテスト vs
                        再テスト（Retesting）の違い（ISTQB重要ポイント）：</strong
                    ><br />
                    <strong>再テスト（Retesting）：</strong
                    >修正されたと報告された特定の欠陥が実際に修正されているかを確認。<br />
                    <strong>リグレッションテスト：</strong
                    >その修正が他の既存機能に悪影響を与えていないかを確認。<br />
                    ISTQBでは両者を明確に区別して定義しています。
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 7: NON-FUNCTIONAL TESTING
════════════════════════════════════════ */}
            <section id="nonfunctional">
                <div className="section-header">
                    <span className="section-header-num">STEP 07 — NON-FUNCTIONAL TESTING（非機能テスト）</span>
                    <h2>非機能テスト — 品質の「深さ」を測る</h2>
                    <div className="gold-rule"></div>
                    <p>
                        機能が「正しく動くか」（What）に加え、「うまく動くか」（How
                        Well）を検証する。2025年においてユーザー期待は急速に高まっており、非機能テストはリリース品質の決定的な要因になっています。
                    </p>
                </div>

                <div className="callout c-gold">
                    <strong>ISOソフトウェア品質モデル（ISO/IEC 25010）— 非機能品質特性：</strong>
                    パフォーマンス効率・互換性・ユーザビリティ・信頼性・セキュリティ・保守性・移植性。
                    これらは機能要件（仕様通りに動くか）とは独立した品質の軸であり、システムテストで集中的に検証します。
                    <br /><a
                        href="https://www.testrail.com/blog/non-functional-testing/"
                        className="ulink"
                        target="_blank"
                        >testrail.com — Complete Guide to Non-Functional Testing (Jul 2025)</a
                    >
                </div>

                <div style={{marginTop: "1.5rem"}}>
                    {/* Performance */}
                    <div className="nf-row">
                        <div className="nf-icon">⚡</div>
                        <div className="nf-body">
                            <div className="nf-title">パフォーマンステスト（Performance Testing）</div>
                            <div className="nf-desc">
                                システムが特定の条件下でどの程度の速度・安定性・リソース効率で動作するかを測定。応答時間・スループット・エラー率が主な指標。
                            </div>
                            <div className="nf-tools">
                                <span className="badge b-gold">Apache JMeter</span>
                                <span className="badge b-gold">k6</span>
                                <span className="badge b-gold">Gatling</span>
                                <span className="badge b-gold">LoadRunner</span>
                            </div>
                        </div>
                    </div>
                    {/* Security */}
                    <div className="nf-row">
                        <div className="nf-icon">🔒</div>
                        <div className="nf-body">
                            <div className="nf-title">セキュリティテスト（Security Testing）</div>
                            <div className="nf-desc">
                                脆弱性・脅威・リスクを特定し、データとシステムが不正アクセスから保護されているかを検証。OWASP
                                Top 10に基づく体系的なテストが標準。
                            </div>
                            <div className="nf-tools">
                                <span className="badge b-danger">OWASP ZAP</span>
                                <span className="badge b-danger">Burp Suite</span>
                                <span className="badge b-danger">Nessus</span>
                                <span className="badge b-danger">Snyk</span>
                            </div>
                        </div>
                    </div>
                    {/* Usability */}
                    <div className="nf-row">
                        <div className="nf-icon">👁️</div>
                        <div className="nf-body">
                            <div className="nf-title">ユーザビリティテスト（Usability Testing）</div>
                            <div className="nf-desc">
                                実際のユーザーがソフトウェアをどれほど直感的・効率的に使用できるかを評価。アクセシビリティ（WCAG）への対応も含む。定量・定性の両方で測定。
                            </div>
                            <div className="nf-tools">
                                <span className="badge b-info">Lighthouse</span>
                                <span className="badge b-info">Hotjar</span>
                                <span className="badge b-info">axe DevTools</span>
                                <span className="badge b-info">UserTesting</span>
                            </div>
                        </div>
                    </div>
                    {/* Compatibility */}
                    <div className="nf-row">
                        <div className="nf-icon">🌐</div>
                        <div className="nf-body">
                            <div className="nf-title">互換性テスト（Compatibility Testing）</div>
                            <div className="nf-desc">
                                異なるブラウザ・OS・デバイス・画面解像度での一貫した動作を確認。クロスブラウザ・クロスプラットフォームテストが中心。
                            </div>
                            <div className="nf-tools">
                                <span className="badge b-sage">BrowserStack</span>
                                <span className="badge b-sage">Sauce Labs</span>
                                <span className="badge b-sage">LambdaTest</span>
                            </div>
                        </div>
                    </div>
                    {/* Reliability */}
                    <div className="nf-row">
                        <div className="nf-icon">🔄</div>
                        <div className="nf-body">
                            <div className="nf-title">
                                信頼性・回復性テスト（Reliability / Recovery Testing）
                            </div>
                            <div className="nf-desc">
                                長期間安定して動作できるか・障害からどれほど迅速に回復できるかを検証。カオスエンジニアリングも含む現代的なアプローチ。
                            </div>
                            <div className="nf-tools">
                                <span className="badge b-purple">Chaos Monkey</span>
                                <span className="badge b-purple">Gremlin</span>
                                <span className="badge b-purple">Grafana k6</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://aqua-cloud.io/non-functional-testing/"
                        className="ulink"
                        target="_blank"
                        >aqua-cloud.io — Non-Functional Testing (Jan 2026)</a
                    >
                    <a
                        href="https://www.accelq.com/blog/non-functional-testing/"
                        className="ulink"
                        target="_blank"
                        >accelq.com — Non-Functional Testing Guide (Dec 2025)</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 8: PERFORMANCE TESTING
════════════════════════════════════════ */}
            <section id="performance">
                <div className="section-header">
                    <span className="section-header-num"
                        >STEP 08 — PERFORMANCE TESTING（パフォーマンステスト）</span
                    >
                    <h2>パフォーマンステスト — 負荷への耐性を数値で証明</h2>
                    <div className="gold-rule"></div>
                    <p>
                        システムが様々な負荷条件下でどのように動作するかを測定・評価します。種類によって目的と手法が大きく異なります。
                    </p>
                </div>

                {/* Performance test types */}
                <div className="card-grid">
                    <div className="card" style={{borderTop: "2px solid var(--color-accent-green)"}}>
                        <span className="card-icon">📊</span>
                        <h3>ロードテスト（Load Testing）</h3>
                        <p>
                            想定される最大ユーザー数・トランザクション数を同時にシミュレート。システムが仕様通りのパフォーマンスを維持できるかを確認。
                        </p>
                        <div className="callout c-sage mt-2" style={{fontSize: "12px"}}>
                            例：ECサイトのセール時に5000人の同時アクセスに耐えられるか
                        </div>
                    </div>
                    <div className="card" style={{borderTop: "2px solid var(--color-accent-yellow)"}}>
                        <span className="card-icon">💥</span>
                        <h3>ストレステスト（Stress Testing）</h3>
                        <p>
                            通常の限界を超えた負荷をかけ、システムの「破綻点」を特定。どのように失敗し、回復できるかを確認する。
                        </p>
                        <div className="callout c-warn mt-2" style={{fontSize: "12px"}}>
                            例：10,000人の同時アクセスでシステムはどう振る舞うか
                        </div>
                    </div>
                    <div className="card" style={{borderTop: "2px solid var(--color-accent-red)"}}>
                        <span className="card-icon">⚡</span>
                        <h3>スパイクテスト（Spike Testing）</h3>
                        <p>
                            急激なトラフィック増加（スパイク）に対するシステムの応答を検証。短時間での大幅な負荷変動への対応力を測定。
                        </p>
                        <div className="callout c-danger mt-2" style={{fontSize: "12px"}}>
                            例：人気アーティストのチケット発売開始直後の瞬間的アクセス集中
                        </div>
                    </div>
                    <div className="card" style={{borderTop: "2px solid var(--color-accent-blue)"}}>
                        <span className="card-icon">⏱️</span>
                        <h3>エンデュランステスト（Soak Testing）</h3>
                        <p>
                            長時間（12〜72時間）にわたって負荷をかけ続け、メモリリーク・パフォーマンス劣化などを検出する。
                        </p>
                        <div className="callout c-info mt-2" style={{fontSize: "12px"}}>
                            例：24時間連続稼働でメモリ使用量が増加し続けないか
                        </div>
                    </div>
                </div>

                {/* Key metrics */}
                <h3
                    className="mt-4"
                    style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.85rem", color: "var(--color-text-primary)"}}
                >
                    測定すべきパフォーマンス指標
                </h3>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>指標</th>
                                <th>定義</th>
                                <th>一般的な目標値</th>
                                <th>ツール</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>応答時間（Response Time）</strong></td>
                                <td>ユーザーのリクエストから最初のバイトが返るまでの時間</td>
                                <td className="g">&lt; 2秒（Webアプリ標準）</td>
                                <td>JMeter・k6</td>
                            </tr>
                            <tr>
                                <td><strong>スループット（Throughput）</strong></td>
                                <td>単位時間あたりに処理できるリクエスト数（RPS/TPS）</td>
                                <td>要件による</td>
                                <td>Gatling・k6</td>
                            </tr>
                            <tr>
                                <td><strong>エラー率（Error Rate）</strong></td>
                                <td>全リクエスト中のエラーレスポンスの割合</td>
                                <td className="g">&lt; 1%</td>
                                <td>JMeter・Grafana</td>
                            </tr>
                            <tr>
                                <td><strong>パーセンタイル（P95・P99）</strong></td>
                                <td>95%・99%のリクエストが完了する時間</td>
                                <td className="w">P95 &lt; 3秒</td>
                                <td>k6・DataDog</td>
                            </tr>
                            <tr>
                                <td><strong>同時接続数（Concurrent Users）</strong></td>
                                <td>同時にシステムにアクセスしているユーザー数</td>
                                <td>要件による</td>
                                <td>LoadRunner・k6</td>
                            </tr>
                            <tr>
                                <td><strong>CPU/メモリ使用率</strong></td>
                                <td>負荷時のサーバーリソース消費量</td>
                                <td className="g">CPU &lt; 80%</td>
                                <td>Prometheus・Grafana</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="code-block mt-3">
                    <div className="code-header">
                        <div className="code-dots"><span></span><span></span><span></span></div>
                        <span className="code-lang">k6 — ロードテストスクリプト（JavaScript）</span>
                    </div>
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"cm\">// load_test.js — k6でECサイトのロードテスト</span>\n<span class=\"kw\">import</span> http <span class=\"kw\">from</span> <span class=\"str\">'k6/http'</span>;\n<span class=\"kw\">import</span> { sleep, check } <span class=\"kw\">from</span> <span class=\"str\">'k6'</span>;\n<span class=\"kw\">import</span> { Rate } <span class=\"kw\">from</span> <span class=\"str\">'k6/metrics'</span>;\n\n<span class=\"kw\">const</span> errorRate = <span class=\"kw\">new</span> <span class=\"cls\">Rate</span>(<span class=\"str\">'error_rate'</span>);\n\n<span class=\"kw\">export const</span> options = {\n  stages: [\n    { duration: <span class=\"str\">'2m'</span>, target: <span class=\"num\">100</span> },  <span class=\"cm\">// 2分で100ユーザーに増加</span>\n    { duration: <span class=\"str\">'5m'</span>, target: <span class=\"num\">500</span> },  <span class=\"cm\">// 5分で500ユーザーへ</span>\n    { duration: <span class=\"str\">'3m'</span>, target: <span class=\"num\">500</span> },  <span class=\"cm\">// 3分間維持（ピーク負荷）</span>\n    { duration: <span class=\"str\">'2m'</span>, target: <span class=\"num\">0</span> },    <span class=\"cm\">// 2分でランプダウン</span>\n  ],\n  thresholds: {\n    http_req_duration: [<span class=\"str\">'p(95) < 2000'</span>], <span class=\"cm\">// P95は2秒以内</span>\n    error_rate:        [<span class=\"str\">'rate < 0.01'</span>],  <span class=\"cm\">// エラー率1%未満</span>\n    http_req_failed:   [<span class=\"str\">'rate < 0.01'</span>],\n  },\n};\n\n<span class=\"kw\">export default function</span> () {\n  <span class=\"cm\">// シナリオ: 商品一覧 → 詳細 → カート追加</span>\n  <span class=\"kw\">const</span> listRes = http.<span class=\"fn\">get</span>(<span class=\"str\">'https://staging.shop.com/products'</span>);\n  errorRate.<span class=\"fn\">add</span>(!<span class=\"fn\">check</span>(listRes, {\n    <span class=\"str\">'一覧: status 200'</span>: r => r.status === <span class=\"num\">200</span>,\n    <span class=\"str\">'一覧: 2秒以内'</span>: r => r.timings.duration < <span class=\"num\">2000</span>,\n  }));\n  <span class=\"fn\">sleep</span>(<span class=\"num\">1</span>);\n}" }} />
                </div>
                <p className="text-sm mt-1">
                    参照:
                    <a
                        href="https://www.frugaltesting.com/blog/what-is-non-functional-testing-types-importance-and-best-practices"
                        className="ulink"
                        target="_blank"
                        >frugaltesting.com — Non-Functional Testing Guide</a
                    >
                    <a
                        href="https://www.testrail.com/blog/non-functional-testing/"
                        className="ulink"
                        target="_blank"
                        >testrail.com — 51 Types of Non-Functional Testing (Jul 2025)</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 9: SECURITY TESTING
════════════════════════════════════════ */}
            <section id="security">
                <div className="section-header">
                    <span className="section-header-num">STEP 09 — SECURITY TESTING（セキュリティテスト）</span>
                    <h2>セキュリティテスト — 脅威からシステムを守る</h2>
                    <div className="gold-rule"></div>
                    <p>
                        システムの脆弱性・脅威・リスクを特定し、データとシステムが不正アクセスや攻撃から保護されているかを検証します。現代のシステムテストにおいて最も重要性が高まっている領域です。
                    </p>
                </div>

                {/* OWASP Top 10 excerpt */}
                <h3
                    style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.85rem", color: "var(--color-text-primary)"}}
                >
                    OWASP Top 10 (2025) — 主要な脆弱性カテゴリ
                </h3>
                <div className="type-grid">
                    <div className="type-card" style={{borderLeft: "3px solid var(--color-accent-red)"}}>
                        <div className="type-name">A01 — アクセス制御の破壊</div>
                        <div className="type-when">Broken Access Control</div>
                        <div className="type-desc">
                            認証されていないユーザーが制限されたリソースにアクセスできる欠陥。
                        </div>
                    </div>
                    <div className="type-card" style={{borderLeft: "3px solid var(--color-accent-red)"}}>
                        <div className="type-name">A02 — 暗号化の失敗</div>
                        <div className="type-when">Cryptographic Failures</div>
                        <div className="type-desc">
                            機密データの平文保存・弱い暗号化アルゴリズムの使用。
                        </div>
                    </div>
                    <div className="type-card" style={{borderLeft: "3px solid var(--color-accent-red)"}}>
                        <div className="type-name">A03 — インジェクション</div>
                        <div className="type-when">Injection (SQL, NoSQL, OS)</div>
                        <div className="type-desc">
                            信頼できないデータがインタープリタに送信される脆弱性。SQLインジェクション等。
                        </div>
                    </div>
                    <div className="type-card" style={{borderLeft: "3px solid var(--color-accent-yellow)"}}>
                        <div className="type-name">A05 — セキュリティの設定ミス</div>
                        <div className="type-when">Security Misconfiguration</div>
                        <div className="type-desc">
                            デフォルト設定の使用・不要な機能の有効化・エラーメッセージの情報漏洩。
                        </div>
                    </div>
                    <div className="type-card" style={{borderLeft: "3px solid var(--color-accent-yellow)"}}>
                        <div className="type-name">A07 — 認証の失敗</div>
                        <div className="type-when">Identification & Auth Failures</div>
                        <div className="type-desc">
                            認証・セッション管理の実装ミスによる不正アクセスの可能性。
                        </div>
                    </div>
                    <div className="type-card" style={{borderLeft: "3px solid var(--color-accent-blue)"}}>
                        <div className="type-name">A09 — ログと監視の失敗</div>
                        <div className="type-when">Security Logging Failures</div>
                        <div className="type-desc">
                            セキュリティイベントのログ不足により攻撃の検知・対応が遅延する。
                        </div>
                    </div>
                </div>

                {/* Security test types */}
                <h3
                    className="mt-4"
                    style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.85rem", color: "var(--color-text-primary)"}}
                >
                    主要なセキュリティテスト手法
                </h3>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>手法</th>
                                <th>説明</th>
                                <th>実施タイミング</th>
                                <th>代表ツール</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>SAST（静的解析）</strong></td>
                                <td>コードを実行せずにソースコードを解析して脆弱性を検出</td>
                                <td className="g">開発中（シフトレフト）</td>
                                <td>SonarQube・Snyk・Semgrep</td>
                            </tr>
                            <tr>
                                <td><strong>DAST（動的解析）</strong></td>
                                <td>実行中のアプリケーションに対して擬似的な攻撃を行う</td>
                                <td className="w">システムテスト段階</td>
                                <td>OWASP ZAP・Burp Suite</td>
                            </tr>
                            <tr>
                                <td><strong>ペネトレーションテスト</strong></td>
                                <td>倫理的なハッカーが実際の攻撃をシミュレート</td>
                                <td className="w">リリース前・定期的</td>
                                <td>Metasploit・Kali Linux</td>
                            </tr>
                            <tr>
                                <td><strong>脆弱性スキャン</strong></td>
                                <td>既知の脆弱性を自動的にスキャン・検出</td>
                                <td className="g">継続的（CI/CD統合）</td>
                                <td>Nessus・OpenVAS・Trivy</td>
                            </tr>
                            <tr>
                                <td><strong>依存関係スキャン</strong></td>
                                <td>使用するライブラリ・パッケージの既知脆弱性を検出</td>
                                <td className="g">継続的（PR時）</td>
                                <td>Dependabot・Snyk・OWASP DC</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm mt-1">
                    参照:
                    <a
                        href="https://www.frugaltesting.com/blog/what-is-non-functional-testing-types-importance-and-best-practices"
                        className="ulink"
                        target="_blank"
                        >frugaltesting.com — Security Testing in Non-Functional Testing</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 10: USABILITY TESTING
════════════════════════════════════════ */}
            <section id="usability">
                <div className="section-header">
                    <span className="section-header-num">STEP 10 — USABILITY TESTING（ユーザビリティテスト）</span>
                    <h2>ユーザビリティテスト — 「使いやすさ」の科学</h2>
                    <div className="gold-rule"></div>
                    <p>
                        実際のユーザーがアプリケーションをどれほど簡単・効率的・満足度高く使用できるかを評価します。機能テストでは検出できない「使いにくさ」を発見するための不可欠なテストです。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <div className="step-list">
                            <div className="step-item">
                                <div className="step-num-circle">①</div>
                                <div className="step-content">
                                    <h4>効果性（Effectiveness）</h4>
                                    <p>
                                        ユーザーが目標を正確に達成できるか。タスク完了率・エラー率を測定。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">②</div>
                                <div className="step-content">
                                    <h4>効率性（Efficiency）</h4>
                                    <p>
                                        目標達成にかかる時間・手数を測定。クリック数・タスク完了時間が指標。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">③</div>
                                <div className="step-content">
                                    <h4>満足度（Satisfaction）</h4>
                                    <p>
                                        ユーザーの主観的な使い心地を測定。SUS（System Usability
                                        Scale）スコアが標準指標。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">④</div>
                                <div className="step-content">
                                    <h4>アクセシビリティ（Accessibility）</h4>
                                    <p>
                                        障害を持つユーザーも含めた全ユーザーへの対応。WCAG 2.1
                                        AA準拠が現在の標準。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="callout c-sage">
                            <strong>ユーザビリティテストの実施方法：</strong><br />
                            <strong>1. モデレートテスト：</strong
                            >テスターの見守りの中でユーザーがタスクを実行。即時フィードバックが可能。<br />
                            <strong>2. アンモデレートテスト：</strong
                            >ユーザーが独自にテストを実施。大規模・コスト効率が高い。<br />
                            <strong>3. A/Bテスト：</strong
                            >2つの異なるUI/UXを比較して優劣を判定。数値で客観的に評価。
                        </div>

                        <h3
                            className="mt-3"
                            style={{fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: "600", marginBottom: "0.65rem", color: "var(--color-text-primary)"}}
                        >
                            アクセシビリティ自動チェックの例
                        </h3>
                        <div className="code-block">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang">Playwright + axe-core — WCAG自動検証</span>
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"kw\">const</span> { checkA11y } = <span class=\"kw\">require</span>(<span class=\"str\">'axe-playwright'</span>);\n\n<span class=\"fn\">test</span>(<span class=\"str\">'ホームページがWCAG 2.1 AAに準拠している'</span>,\n  <span class=\"kw\">async</span> ({page}) => {\n    <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"str\">'https://staging.example.com'</span>);\n    <span class=\"kw\">await</span> <span class=\"fn\">checkA11y</span>(page, <span class=\"cls\">null</span>, {\n      runOnly: {\n        type: <span class=\"str\">'tag'</span>,\n        values: [<span class=\"str\">'wcag2a'</span>, <span class=\"str\">'wcag2aa'</span>]\n      },\n      <span class=\"cm\">// カラーコントラスト・ARIAラベル・見出し構造等を自動検証</span>\n    });\n  }\n);" }} />
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://www.globalapptesting.com/blog/qa-testing-methodologies-and-techniques"
                        className="ulink"
                        target="_blank"
                        >globalapptesting.com — QA Testing Methodologies 2025</a
                    >
                    <a
                        href="https://aqua-cloud.io/software-testing-strategies/"
                        className="ulink"
                        target="_blank"
                        >aqua-cloud.io — Software Testing Strategies 2025</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 11: TOOLS
════════════════════════════════════════ */}
            <section id="tools">
                <div className="section-header">
                    <span className="section-header-num">STEP 11 — TOOLS & FRAMEWORKS 2025</span>
                    <h2>2025年の主要テストツール</h2>
                    <div className="gold-rule"></div>
                    <p>
                        統合テスト・システムテストの各フェーズと目的に応じた最適なツールを目的別に分類します。
                    </p>
                </div>

                <h3
                    style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--color-text-primary)"}}
                >
                    E2E・UIシステムテスト
                </h3>
                <div className="tool-grid">
                    <div className="tool-card">
                        <div className="tool-name">🎭 Playwright</div>
                        <div className="tool-desc">
                            Microsoft製。Chromium/Firefox/WebKit対応。並列実行・Trace
                            Viewer・AIコード生成。2025年のE2EトップピックでCypressを超える採用率。
                        </div>
                        <span className="badge b-gold">2025年最推奨</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🌲 Cypress</div>
                        <div className="tool-desc">
                            フロントエンド開発者向け。タイムトラベルデバッグ・リアルタイムリロード。中小規模プロジェクトのE2Eに最適。
                        </div>
                        <span className="badge b-sage">フロントエンド向け</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🤖 Selenium</div>
                        <div className="tool-desc">
                            老舗の定番。全ブラウザ対応。Appium連携でモバイルも対応。レガシーシステム・エンタープライズで現役。
                        </div>
                        <span className="badge b-muted">エンタープライズ</span>
                    </div>
                </div>

                <h3
                    className="mt-3"
                    style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--color-text-primary)"}}
                >
                    API・統合テスト
                </h3>
                <div className="tool-grid">
                    <div className="tool-card">
                        <div className="tool-name">📮 Postman</div>
                        <div className="tool-desc">
                            API探索・テスト・ドキュメントをGUIで統合。Collections・Newman・CI統合が容易。世界No.1
                            APIツール。
                        </div>
                        <span className="badge b-gold">No.1 API ツール</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">☕ REST Assured</div>
                        <div className="tool-desc">
                            Java DSLでAPIテストをBDDスタイルで記述。JUnit・TestNGと統合。Java
                            チームの定番。
                        </div>
                        <span className="badge b-sage">Java標準</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🤝 Pact</div>
                        <div className="tool-desc">
                            コンシューマー駆動コントラクトテスト。マイクロサービスの互換性を早期保証。
                        </div>
                        <span className="badge b-info">契約テスト</span>
                    </div>
                </div>

                <h3
                    className="mt-3"
                    style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--color-text-primary)"}}
                >
                    パフォーマンス・負荷テスト
                </h3>
                <div className="tool-grid">
                    <div className="tool-card">
                        <div className="tool-name">🏃 k6</div>
                        <div className="tool-desc">
                            Grafana製。JavaScriptでシナリオ記述。CI/CD統合が最も容易。モダンSRE/SDETチームで急速普及中。
                        </div>
                        <span className="badge b-gold">モダン推奨</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">⚡ Apache JMeter</div>
                        <div className="tool-desc">
                            オープンソースの定番。GUI設計・豊富なプラグイン。GUIなしCLI実行でCI統合も可能。
                        </div>
                        <span className="badge b-sage">実績豊富</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🎯 Gatling</div>
                        <div className="tool-desc">
                            Scala/Java/Kotlin
                            DSL。高スループット・リアルタイムレポート。大規模エンタープライズ向け。
                        </div>
                        <span className="badge b-info">エンタープライズ</span>
                    </div>
                </div>

                <h3
                    className="mt-3"
                    style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--color-text-primary)"}}
                >
                    セキュリティ・品質管理
                </h3>
                <div className="tool-grid">
                    <div className="tool-card">
                        <div className="tool-name">🔒 OWASP ZAP</div>
                        <div className="tool-desc">
                            無料のペネトレーションテストツール。Webアプリの脆弱性を動的に検出。CI/CDへの統合が容易。
                        </div>
                        <span className="badge b-danger">セキュリティ</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🐛 SonarQube</div>
                        <div className="tool-desc">
                            静的コード解析。セキュリティホットスポット・コード品質・テストカバレッジを一元管理。
                        </div>
                        <span className="badge b-warn">静的解析</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">♿ axe DevTools</div>
                        <div className="tool-desc">
                            Deque
                            Systems製。WCAG準拠の自動アクセシビリティテスト。Jest・Cypress・Playwrightと統合可能。
                        </div>
                        <span className="badge b-info">アクセシビリティ</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 12: BEST PRACTICES
════════════════════════════════════════ */}
            <section id="bestpractices">
                <div className="section-header">
                    <span className="section-header-num">STEP 12 — BEST PRACTICES 2025</span>
                    <h2>ベストプラクティスとCI/CD統合</h2>
                    <div className="gold-rule"></div>
                    <p>
                        2025年の業界標準に基づく、インテグレーション・システムテストの効果的な実践方法です。
                    </p>
                </div>

                {/* CI/CD Pipeline */}
                <h3
                    style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.85rem", color: "var(--color-text-primary)"}}
                >
                    CI/CDパイプラインにおけるテスト実行フロー
                </h3>
                <div className="defect-flow">
                    <div className="defect-stage">コードプッシュ</div>
                    <div className="defect-arrow">→</div>
                    <div className="defect-stage">
                        ユニットテスト<br /><span style={{fontSize: "10px", color: "var(--color-text-muted)"}}
                            >&lt;2分</span
                        >
                    </div>
                    <div className="defect-arrow">→</div>
                    <div className="defect-stage">
                        スモークテスト<br /><span style={{fontSize: "10px", color: "var(--color-text-muted)"}}
                            >&lt;5分</span
                        >
                    </div>
                    <div className="defect-arrow">→</div>
                    <div className="defect-stage">
                        統合テスト<br /><span style={{fontSize: "10px", color: "var(--color-text-muted)"}}
                            >&lt;15分</span
                        >
                    </div>
                    <div className="defect-arrow">→</div>
                    <div className="defect-stage">
                        システムテスト<br /><span style={{fontSize: "10px", color: "var(--color-text-muted)"}}
                            >スケジュール実行</span
                        >
                    </div>
                    <div className="defect-arrow">→</div>
                    <div
                        className="defect-stage"
                        style={{borderColor: "rgba(74, 222, 128, 0.5)", color: "var(--color-accent-green)"}}
                    >
                        デプロイ
                    </div>
                </div>

                <div className="card-grid mt-3">
                    <div className="card">
                        <span className="card-icon">🎯</span>
                        <h3>テスト環境の本番同等性</h3>
                        <p>
                            テスト環境は本番環境と可能な限り同等に保つ。Docker
                            Composeやインフラコードで環境差分を最小化。「動作しました（Works on my
                            machine）」問題を排除する。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">📊</span>
                        <h3>メトリクスの継続的追跡</h3>
                        <p>
                            テストパス率・ビルド安定性・本番欠陥漏洩率を継続追跡する。改善トレンドこそが成熟したテスト組織の指標。絶対値よりもトレンドを重視する。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🤝</span>
                        <h3>シフトレフト × シフトライト</h3>
                        <p>
                            セキュリティ・性能テストを開発初期から組み込む（シフトレフト）と同時に、本番監視による継続的検証（シフトライト）を両立させる。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🔄</span>
                        <h3>テストデータ管理</h3>
                        <p>
                            本番データに近い量と品質のテストデータを維持する。個人情報はマスキングする。テストごとに独立したデータを用意してテスト間の干渉を排除する。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">⚡</span>
                        <h3>フレーキーテストの排除</h3>
                        <p>
                            時々失敗する不安定なテスト（Flaky
                            Test）はチームの信頼を破壊する。発見次第即座に修正・隔離する。タイムアウト依存・状態共有が主な原因。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">📝</span>
                        <h3>欠陥報告の標準化</h3>
                        <p>
                            欠陥レポートには「再現手順・期待値・実際の結果・環境情報・スクリーンショット」を必ず含める。ISTQB
                            は明確な欠陥管理を品質プロセスの核として定義している。
                        </p>
                    </div>
                </div>

                <div className="callout c-gold mt-3">
                    <strong>ISTQB CTFL v4.0 の7つのテスト原則（おさらい）：</strong><br />
                    ①テストは欠陥の存在を示すが、欠陥がないことは証明できない　
                    ②全数テストは不可能　 ③早期テストの重要性（シフトレフト）　
                    ④欠陥の集中（80/20の法則）　 ⑤殺虫剤のパラドックス（テストを更新し続ける）　
                    ⑥テストはコンテキスト依存　 ⑦欠陥不在の誤謬（バグゼロ≠品質保証）
                    <br /><a
                        href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                        className="ulink"
                        target="_blank"
                        >istqb.org — CTFL v4.0 公式ページ</a
                    >
                </div>
            </section>

            {/* ════════════════════════════════════════
     REFERENCES
════════════════════════════════════════ */}
            <section id="references">
                <div className="section-header">
                    <span className="section-header-num">APPENDIX — COMPLETE REFERENCE URLS</span>
                    <h2>全参照URL一覧</h2>
                    <div className="gold-rule"></div>
                    <p>本ガイドで引用した全ての参照元URLです。最新情報の確認にご活用ください。</p>
                </div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>カテゴリ</th>
                                <th>タイトル</th>
                                <th>URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>ISTQB公式サイト</td>
                                <td>
                                    <a href="https://istqb.org/" className="ref-url" target="_blank"
                                        >https://istqb.org/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>CTFL v4.0 詳細ページ</td>
                                <td>
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>CTFL v4.0.1 シラバス PDF</td>
                                <td>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>CTFL v4.0 リリースアナウンス</td>
                                <td>
                                    <a
                                        href="https://istqb.org/istqb-releases-certified-tester-foundation-level-v4-0-ctfl/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/istqb-releases-certified-tester-foundation-level-v4-0-ctfl/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>ISTQBグロッサリー</td>
                                <td>
                                    <a
                                        href="https://glossary.istqb.org/en_US/search?term="
                                        className="ref-url"
                                        target="_blank"
                                        >https://glossary.istqb.org/en_US/search?term=</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>JSTQB（日本語版）</td>
                                <td>
                                    <a href="https://jstqb.jp/" className="ref-url" target="_blank"
                                        >https://jstqb.jp/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>CTFL学習</td>
                                <td>
                                    mastersoftwaretesting.com — CTFL Complete Guide 2025 (Jan 2026)
                                </td>
                                <td>
                                    <a
                                        href="https://mastersoftwaretesting.com/certification-guides/istqb/ctfl/ctfl-complete-guide"
                                        className="ref-url"
                                        target="_blank"
                                        >https://mastersoftwaretesting.com/certification-guides/istqb/ctfl/ctfl-complete-guide</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>CTFL学習</td>
                                <td>istqb.com — CTFL v4.0 overview</td>
                                <td>
                                    <a
                                        href="https://www.istqb.com/certified-tester-foundation-level/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.istqb.com/certified-tester-foundation-level/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>CTFL学習</td>
                                <td>casqb.org — ISTQB CTFL v4.0 Syllabus Analysis</td>
                                <td>
                                    <a
                                        href="https://casqb.org/en/blog-eng/istqb-ctfl-v4.0-syllabus-an-exciting-milestone-in-software-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://casqb.org/en/blog-eng/istqb-ctfl-v4.0-syllabus-an-exciting-milestone-in-software-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>システムテスト</td>
                                <td>
                                    mastersoftwaretesting.com — System Testing Complete Guide (Jan
                                    2026)
                                </td>
                                <td>
                                    <a
                                        href="https://mastersoftwaretesting.com/testing-fundamentals/types-of-testing/functional-testing/system-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://mastersoftwaretesting.com/testing-fundamentals/types-of-testing/functional-testing/system-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テスト種別</td>
                                <td>perfecto.io — Complete Guide to Different Types of Testing</td>
                                <td>
                                    <a
                                        href="https://www.perfecto.io/resources/types-of-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.perfecto.io/resources/types-of-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テスト種別</td>
                                <td>browserstack.com — Types of Testing (Jun 2025)</td>
                                <td>
                                    <a
                                        href="https://www.browserstack.com/guide/types-of-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.browserstack.com/guide/types-of-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テスト種別</td>
                                <td>
                                    dev.to — Best Practices for Software Testing 2025 (Jul 2025)
                                </td>
                                <td>
                                    <a
                                        href="https://dev.to/kevinwalker/best-practices-for-software-testing-in-2025-59c2"
                                        className="ref-url"
                                        target="_blank"
                                        >https://dev.to/kevinwalker/best-practices-for-software-testing-in-2025-59c2</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>スモーク・サニティ</td>
                                <td>cloudbees.com — Smoke, Sanity, and Regression Testing Triad</td>
                                <td>
                                    <a
                                        href="https://www.cloudbees.com/blog/the-smoke-sanity-and-regression-testing-triad"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.cloudbees.com/blog/the-smoke-sanity-and-regression-testing-triad</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>スモーク・サニティ</td>
                                <td>katalon.com — Sanity vs Smoke Testing Guide</td>
                                <td>
                                    <a
                                        href="https://katalon.com/resources-center/blog/sanity-testing-vs-smoke-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://katalon.com/resources-center/blog/sanity-testing-vs-smoke-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>スモーク・サニティ</td>
                                <td>browserstack.com — Sanity vs Smoke Testing (Dec 2025)</td>
                                <td>
                                    <a
                                        href="https://www.browserstack.com/guide/sanity-testing-vs-smoke-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.browserstack.com/guide/sanity-testing-vs-smoke-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>スモーク・サニティ</td>
                                <td>
                                    softwaretestinghelp.com — Smoke vs Sanity Testing (May 2025)
                                </td>
                                <td>
                                    <a
                                        href="https://www.softwaretestinghelp.com/smoke-testing-and-sanity-testing-difference/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.softwaretestinghelp.com/smoke-testing-and-sanity-testing-difference/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>スモーク・サニティ</td>
                                <td>qentelli.com — Smoke vs Sanity vs Regression Comparison</td>
                                <td>
                                    <a
                                        href="https://qentelli.com/thought-leadership/insights/explained-smoke-testing-vs-sanity-testing-vs-regression-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://qentelli.com/thought-leadership/insights/explained-smoke-testing-vs-sanity-testing-vs-regression-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>リグレッション</td>
                                <td>blazemeter.com — Functional Testing Types Guide</td>
                                <td>
                                    <a
                                        href="https://www.blazemeter.com/blog/functional-testing-types"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.blazemeter.com/blog/functional-testing-types</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>非機能テスト</td>
                                <td>
                                    testrail.com — 51 Types of Non-Functional Testing (Jul 2025)
                                </td>
                                <td>
                                    <a
                                        href="https://www.testrail.com/blog/non-functional-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.testrail.com/blog/non-functional-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>非機能テスト</td>
                                <td>aqua-cloud.io — Non-Functional Testing (Jan 2026)</td>
                                <td>
                                    <a
                                        href="https://aqua-cloud.io/non-functional-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://aqua-cloud.io/non-functional-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>非機能テスト</td>
                                <td>accelq.com — Non-Functional Testing Guide (Dec 2025)</td>
                                <td>
                                    <a
                                        href="https://www.accelq.com/blog/non-functional-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.accelq.com/blog/non-functional-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>非機能テスト</td>
                                <td>
                                    frugaltesting.com — Non-Functional Testing Types & Best
                                    Practices
                                </td>
                                <td>
                                    <a
                                        href="https://www.frugaltesting.com/blog/what-is-non-functional-testing-types-importance-and-best-practices"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.frugaltesting.com/blog/what-is-non-functional-testing-types-importance-and-best-practices</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>非機能テスト</td>
                                <td>geeksforgeeks.org — Non-Functional Testing (Jul 2025)</td>
                                <td>
                                    <a
                                        href="https://www.geeksforgeeks.org/software-testing/software-testing-non-functional-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.geeksforgeeks.org/software-testing/software-testing-non-functional-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>機能 vs 非機能</td>
                                <td>virtuosoqa.com — Functional vs Non-Functional Testing</td>
                                <td>
                                    <a
                                        href="https://www.virtuosoqa.com/post/functional-vs-non-functional-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.virtuosoqa.com/post/functional-vs-non-functional-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テスト戦略</td>
                                <td>aqua-cloud.io — Software Testing Strategies 2025 (Sep 2025)</td>
                                <td>
                                    <a
                                        href="https://aqua-cloud.io/software-testing-strategies/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://aqua-cloud.io/software-testing-strategies/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テスト戦略</td>
                                <td>globalapptesting.com — QA Testing Methodologies 2025</td>
                                <td>
                                    <a
                                        href="https://www.globalapptesting.com/blog/qa-testing-methodologies-and-techniques"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.globalapptesting.com/blog/qa-testing-methodologies-and-techniques</a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        
        </>
    );
}
