import '../e2e-testing-guide.css';

export default function E2eTestingGuide() {
    return (
        <>
            
            <section className="hero" id="top">
                <div className="hero-content">
                    <span className="hero-kicker"
                        >E2Eテスト（エンドツーエンドテスト）完全ガイド 2025</span
                    >
                    <h1>
                        <span className="accent">End-to-End</span><br />
                        <span className="accent2">Testing</span><br />
                        <span style={{color: "var(--text)"}}>完全解説</span>
                        <small
                            >ISTQB CTFL v4.0 Section 2.2.3 準拠 ｜ Playwright / Cypress / Selenium
                            ｜ AI自動化 ｜ CI/CD統合</small
                        >
                    </h1>
                    <p className="hero-desc">
                        E2Eテストは、実際のユーザーがブラウザを通じてアプリケーションを操作するプロセスを完全にシミュレートし、
                        フロントエンドのUIからバックエンドのデータベース・サードパーティ連携まで、
                        <strong style={{color: "var(--text)"}}>システム全体が結合された状態</strong
                        >で正しく機能するかを検証します。
                        初学者からシニアエンジニアまで、最新の実践知識をステップバイステップで解説します。
                    </p>

                    {/* Stats */}
                    <div className="hero-stats">
                        <div className="stat-tile">
                            <span className="stat-num">Level 3</span>
                            <span className="stat-label">ISTQBシステムテストレベル相当</span>
                        </div>
                        <div className="stat-tile">
                            <span className="stat-num">10%</span>
                            <span className="stat-label">テストスイート中の理想比率（70/20/10則）</span>
                        </div>
                        <div className="stat-tile">
                            <span className="stat-num">40%↓</span>
                            <span className="stat-label">Playwright移行後のCI Flaky失敗率</span>
                        </div>
                        <div className="stat-tile">
                            <span className="stat-num">72%</span>
                            <span className="stat-label">QA担当者がAIをテスト生成に活用（2025年）</span>
                        </div>
                    </div>

                    {/* Test Pyramid Visual */}
                    <div className="level-visual">
                        <div className="lv-row lv-e2e">
                            <span className="lv-label">🚀 E2Eテスト ← ここを完全解説</span>
                            <span className="lv-sub">少数・低速・最高信頼性</span>
                        </div>
                        <div className="lv-row lv-int">
                            <span className="lv-label">インテグレーション / 機能テスト</span>
                            <span className="lv-sub">中程度</span>
                        </div>
                        <div className="lv-row lv-unit">
                            <span className="lv-label">ユニットテスト（単体テスト）</span>
                            <span className="lv-sub">多数・高速・低コスト</span>
                        </div>
                        <div className="lv-axis">
                            <span>⬅ 高速・低コスト</span>
                            <span>テストピラミッド（70 / 20 / 10 の法則）</span>
                            <span>高信頼・低速 ➡</span>
                        </div>
                    </div>

                    <div className="callout c-cyan mt-2">
                        <strong
                            >ISTQBにおけるE2Eテストの位置づけ（CTFL v4.0 Section 2.2.3）：</strong
                        >
                        ISTQBはE2Eテストを「システムテスト」の中心的な活動として定義しています。
                        システムテストは、システム全体としての機能的・非機能的振る舞いを検証し、
                        本番環境に近い条件でエンドツーエンドのタスクフローを実行します。
                        テストはビジネス代表者の立場で設計・実施されます。
                        <br />
                        <a
                            href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                            className="ulink"
                            target="_blank"
                            >istqb.org — CTFL v4.0 公式ページ</a
                        >
                        &nbsp;
                        <a href="https://istqb.org/" className="ulink" target="_blank"
                            >istqb.org — 公式サイト</a
                        >
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 1: WHAT IS E2E
════════════════════════════════════════ */}
            <section id="overview">
                <div className="section-header">
                    <span className="section-header-num">STEP 01 — WHAT IS E2E TESTING</span>
                    <h2>E2Eテストとは何か？</h2>
                    <div className="cyber-rule"></div>
                    <p>
                        End-to-End
                        テストとは、実際のユーザーのブラウザ操作を自動ロボット（テストスクリプト）で完全に再現し、
                        アプリケーションの「入口から出口まで」を一気通貫で検証するテスト手法です。
                        単独部品の品質を検証するユニットテストとは異なり、
                        <strong style={{color: "var(--text)"}}
                            >全コンポーネントが結合した状態での動作</strong
                        >を確かめます。
                    </p>
                </div>

                {/* Definition Box */}
                <div className="grid-2">
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.85rem", color: "var(--text)"}}
                        >
                            E2Eテストが検証する3層
                        </h3>
                        <div className="step-list">
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{background: "var(--cyan4)", color: "var(--cyan)"}}
                                >
                                    UI
                                </div>
                                <div className="step-content">
                                    <h4>フロントエンド（ブラウザ）</h4>
                                    <p>
                                        ボタンのクリック・フォーム入力・画面遷移・レンダリング結果など、ユーザーが直接触れるすべてのUI要素を検証します。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{background: "var(--color-accent-yellow)", color: "var(--color-accent-orange)"}}
                                >
                                    API
                                </div>
                                <div className="step-content">
                                    <h4>ミドルレイヤー（API・ビジネスロジック）</h4>
                                    <p>
                                        フロントエンドからバックエンドへのリクエスト・レスポンス、ビジネスロジックの正確な実行を検証します。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{background: "var(--purple3)", color: "var(--color-accent-purple)"}}
                                >
                                    DB
                                </div>
                                <div className="step-content">
                                    <h4>バックエンド（データベース・外部サービス）</h4>
                                    <p>
                                        データが正しくDBに保存・更新・削除されるか、サードパーティサービスとの連携が意図通りかを検証します。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.85rem", color: "var(--text)"}}
                        >
                            テストレベルの比較
                        </h3>
                        <div className="comp-box">
                            <div className="comp-row header">
                                <div className="comp-cell">観点</div>
                                <div className="comp-cell">ユニット</div>
                                <div className="comp-cell">統合</div>
                                <div className="comp-cell">E2E</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>スコープ</strong></div>
                                <div className="comp-cell">関数1つ</div>
                                <div className="comp-cell">モジュール間</div>
                                <div className="comp-cell">システム全体</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>実行速度</strong></div>
                                <div className="comp-cell" style={{color: "var(--color-accent-green)"}}>ミリ秒</div>
                                <div className="comp-cell" style={{color: "var(--color-accent-orange)"}}>秒</div>
                                <div className="comp-cell" style={{color: "var(--color-accent-red)"}}>分</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>信頼性</strong></div>
                                <div className="comp-cell">ロジック検証</div>
                                <div className="comp-cell">連携検証</div>
                                <div className="comp-cell" style={{color: "var(--cyan)"}}>最高信頼性</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>脆さ</strong></div>
                                <div className="comp-cell" style={{color: "var(--color-accent-green)"}}>低い</div>
                                <div className="comp-cell" style={{color: "var(--color-accent-orange)"}}>中程度</div>
                                <div className="comp-cell" style={{color: "var(--color-accent-red)"}}>高い</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>コスト</strong></div>
                                <div className="comp-cell" style={{color: "var(--color-accent-green)"}}>最安</div>
                                <div className="comp-cell" style={{color: "var(--color-accent-orange)"}}>中程度</div>
                                <div className="comp-cell" style={{color: "var(--color-accent-red)"}}>最高</div>
                            </div>
                        </div>
                        <p className="text-sm mt-1">
                            参照:
                            <a
                                href="https://www.bunnyshell.com/blog/best-practices-for-end-to-end-testing-in-2025/"
                                className="ulink"
                                target="_blank"
                                >bunnyshell.com — E2E Best Practices 2025</a
                            >
                        </p>
                    </div>
                </div>

                {/* Typical E2E flows */}
                <h3
                    className="mt-4"
                    style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.85rem", color: "var(--text)"}}
                >
                    E2Eテストが検証する典型的なユーザーフロー
                </h3>
                <div className="card-grid">
                    <div className="card">
                        <span className="card-icon">🛒</span>
                        <h3>ECサイト 購入フロー</h3>
                        <p>
                            検索 → 商品詳細 → カートに追加 → ログイン → 住所入力 → 決済 →
                            注文完了メール受信 →
                            注文履歴確認。最も複雑で重要なビジネスフローの一つ。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🔐</span>
                        <h3>認証・認可フロー</h3>
                        <p>
                            新規登録 → メール認証 → ログイン → パスワードリセット →
                            多要素認証（MFA） →
                            ロールベースのページアクセス制御。セキュリティクリティカルなフロー。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">📊</span>
                        <h3>ダッシュボード操作フロー</h3>
                        <p>
                            データ入力 → リアルタイム更新 → フィルタリング → CSV/PDF出力 →
                            共有リンク生成。複数APIコールと状態管理が絡む複合フロー。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">📝</span>
                        <h3>フォーム送信・バリデーション</h3>
                        <p>
                            多ステップフォームの入力 → バリデーションエラー表示 → 正常送信 →
                            DBへの保存確認 →
                            確認メール送信。ユーザーの日常業務で頻繁に実行されるフロー。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">💳</span>
                        <h3>SaaS オンボーディング</h3>
                        <p>
                            アカウント作成 → プラン選択 → 支払い情報登録 → 初期設定ウィザード →
                            最初の機能利用 →
                            チームメンバー招待。ユーザー獲得に直結する最重要フロー。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🔄</span>
                        <h3>バックエンド連携フロー</h3>
                        <p>
                            外部API（決済・SMS・地図など）との連携確認。Webhookの受信・処理。非同期ジョブの完了確認。マイクロサービス間のデータ整合性検証。
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 2: WHY
════════════════════════════════════════ */}
            <section id="why">
                <div className="section-header">
                    <span className="section-header-num">STEP 02 — WHY E2E TESTING IS NECESSARY</span>
                    <h2>なぜE2Eテストが必要なのか？</h2>
                    <div className="cyber-rule"></div>
                    <p>
                        ユニットテストと統合テストが充実していても、E2Eテストが捕捉する問題は存在します。システムは「部品の集合」ではなく「ユーザー体験の連続」だからです。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <div className="callout callout-danger">
                            <strong>🚨 ユニットテスト・統合テストでは発見できない問題の例</strong
                            ><br /><br />
                            ・フロントエンドとバックエンドのAPI契約の不一致（フィールド名の齟齬など）<br />
                            ・ルーティング・リダイレクトの誤設定<br />
                            ・認証トークンの受け渡しエラー<br />
                            ・複数のマイクロサービスをまたぐデータ不整合<br />
                            ・ブラウザ固有の描画バグ（CSS/JSの互換性問題）<br />
                            ・ステートフルなフロー（カートに追加→決済→在庫更新の連鎖）の破綻<br />
                            ・サードパーティ連携（Stripe・Salesforce・SendGrid等）の実際の挙動
                        </div>

                        <div className="callout c-cyan mt-2">
                            <strong>ISTQB が示すシステムテストの典型的な欠陥（CTFL v4.0）：</strong
                            ><br />
                            計算の誤り・画面の不正な動作・データフローの失敗・予期しないエラーメッセージ・
                            パフォーマンスの劣化・セキュリティ上の脆弱性・ユーザビリティの問題。
                            これらはE2Eレベルでのみ確実に発見できます。
                            <br /><a
                                href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                className="ulink"
                                target="_blank"
                                >istqb.org — CTFL v4.0</a
                            >
                        </div>
                    </div>
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.85rem", color: "var(--text)"}}
                        >
                            E2Eテストがもたらす5つの価値
                        </h3>
                        <div className="step-list">
                            <div className="step-item">
                                <div className="step-num-circle">①</div>
                                <div className="step-content">
                                    <h4>ユーザー視点の品質保証</h4>
                                    <p>
                                        実際のユーザー操作を再現するため「技術的には正しいが使えない」問題を発見できる唯一の手段。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">②</div>
                                <div className="step-content">
                                    <h4>リグレッション（回帰）防止</h4>
                                    <p>
                                        新機能追加・リファクタリング後に既存機能が壊れていないかを自動で継続検証する安全網。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">③</div>
                                <div className="step-content">
                                    <h4>本番障害の未然防止</h4>
                                    <p>
                                        CI/CDに組み込むことで、本番に到達するバグを大幅削減。本番障害の修正コストは開発段階の最大100倍。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">④</div>
                                <div className="step-content">
                                    <h4>リリース速度の向上</h4>
                                    <p>
                                        手動での回帰テストを自動化することで、人手を介さず毎日・毎時間のリリースが可能になる。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">⑤</div>
                                <div className="step-content">
                                    <h4>実行可能なシステム仕様書</h4>
                                    <p>
                                        E2Eテストシナリオ自体が「このシステムがどう動くべきか」の最も正確で常に最新のドキュメントになる。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://www.bunnyshell.com/blog/best-practices-for-end-to-end-testing-in-2025/"
                        className="ulink"
                        target="_blank"
                        >bunnyshell.com — E2E Best Practices 2025</a
                    >
                    <a
                        href="https://ardura.consulting/blog/e2e-testing-strategy-implementation-guide/"
                        className="ulink"
                        target="_blank"
                        >ardura.consulting — E2E Implementation Guide</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 3: WHEN
════════════════════════════════════════ */}
            <section id="when">
                <div className="section-header">
                    <span className="section-header-num">STEP 03 — WHEN TO WRITE E2E TESTS</span>
                    <h2>何をE2Eテストすべきか？</h2>
                    <div className="cyber-rule"></div>
                    <p>
                        E2Eテストは書くのが難しく、実行が遅く、メンテナンスコストが高い。
                        だからこそ「何をテストすべきか」の選択が最も重要です。
                        <strong style={{color: "var(--text)"}}
                            >テストすべきは「クリティカルなユーザージャーニー」に絞ること</strong
                        >が鉄則です。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem", color: "var(--text)"}}
                        >
                            ✅ E2Eテストが最も適しているケース
                        </h3>
                        <ul className="checklist">
                            <li>
                                複数のサービス・UIコンポーネントをまたぐ重要なユーザーフロー（登録・購入・オンボーディング）
                            </li>
                            <li>
                                フロントエンドとバックエンドの統合部分が主なリスクとなるシナリオ
                            </li>
                            <li>
                                ユニットテスト・APIテストだけでは再現できないブラウザ固有の動作確認
                            </li>
                            <li>
                                リグレッションが直接的なビジネス損失（売上・UXの破壊）に直結するフロー
                            </li>
                            <li>
                                複数タブ・複数ウィンドウにまたがるOAuthリダイレクトや決済フローの確認
                            </li>
                        </ul>

                        <h3
                            className="mt-3"
                            style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem", color: "var(--text)"}}
                        >
                            ❌ E2Eテストを書かないほうがよいケース
                        </h3>
                        <ul className="checklist">
                            <li className="x">単純なCRUD操作（APIテストや統合テストでカバーできる）</li>
                            <li className="x">個別のUI部品の動作確認（コンポーネントテストで十分）</li>
                            <li className="x">
                                すでにユニットテストで網羅されているビジネスロジックの再確認
                            </li>
                            <li className="x">
                                UIが頻繁に変わる開発初期のエリア（メンテナンスコストが爆発する）
                            </li>
                            <li className="x">エッジケースの全網羅（ユニットテストに任せる）</li>
                        </ul>
                    </div>
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem", color: "var(--text)"}}
                        >
                            テスト種別の理想的な分布（70/20/10則）
                        </h3>

                        <div className="flaky-bar-wrap">
                            <div className="flaky-row">
                                <span className="flaky-label">ユニットテスト</span>
                                <div className="flaky-track">
                                    <div
                                        className="flaky-fill"
                                        style={{width: "70%", background: "var(--color-accent-green)"}}
                                    ></div>
                                </div>
                                <span className="flaky-pct" style={{color: "var(--color-accent-green)"}}>70%</span>
                            </div>
                            <div className="flaky-row">
                                <span className="flaky-label">インテグレーション</span>
                                <div className="flaky-track">
                                    <div
                                        className="flaky-fill"
                                        style={{width: "20%", background: "var(--color-accent-orange)"}}
                                    ></div>
                                </div>
                                <span className="flaky-pct" style={{color: "var(--color-accent-orange)"}}>20%</span>
                            </div>
                            <div className="flaky-row">
                                <span className="flaky-label">E2Eテスト</span>
                                <div className="flaky-track">
                                    <div
                                        className="flaky-fill"
                                        style={{width: "10%", background: "var(--cyan)"}}
                                    ></div>
                                </div>
                                <span className="flaky-pct" style={{color: "var(--cyan)"}}>10%</span>
                            </div>
                        </div>

                        <div className="callout c-gold mt-2">
                            <strong>「少ないが確実なE2Eテスト」が黄金法則：</strong><br />
                            1,400名のQAプロ調査では、回帰テストの自動化を優先する組織が45%に上ります。
                            しかし「フレイキー（不安定）なE2Eテスト100本」より
                            「安定したE2Eテスト10本」の方がチームの信頼を維持できます。
                            <br /><a
                                href="https://katalon.com/resources-center/blog/test-automation-statistics-for-2025"
                                className="ulink"
                                target="_blank"
                                >katalon.com — Test Automation Statistics 2025</a
                            >
                        </div>
                    </div>
                </div>

                <div className="callout c-purple mt-3">
                    <strong>ARDURA Consulting の実践的アドバイス（2025年）：</strong>
                    PRごとにスモークE2Eスイート（10〜20本）を実行し、<strong
                        style={{color: "var(--text)"}}
                        >10分以内</strong
                    >に完了させること。 30分を超えると開発者はフィードバックを待たなくなる。
                    mainへのマージ後にフルスイートを実行（20〜40分許容）し、
                    本番デプロイ前にスモークスイートをステージング環境で再実行するのが推奨パターン。
                    <br /><a
                        href="https://ardura.consulting/blog/e2e-testing-strategy-implementation-guide/"
                        className="ulink"
                        target="_blank"
                        >ardura.consulting — E2E Testing Strategy Implementation Guide</a
                    >
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 4: E2E TEST DESIGN
════════════════════════════════════════ */}
            <section id="design">
                <div className="section-header">
                    <span className="section-header-num">STEP 04 — E2E TEST DESIGN: STEP BY STEP</span>
                    <h2>E2Eテストの設計と実装手順</h2>
                    <div className="cyber-rule"></div>
                    <p>
                        良いE2Eテストは「とりあえず録画して再生」ではなく、意図的な設計から始まります。以下の6ステップでプロ品質のE2Eテストを構築しましょう。
                    </p>
                </div>

                {/* Process Flow */}
                <div className="flow-track">
                    <div className="flow-step">
                        <span className="flow-num">PHASE 1</span>
                        <div className="flow-title">ユーザージャーニー特定</div>
                        <div className="flow-desc">
                            ビジネス上クリティカルなフローをステークホルダーと合意して特定する
                        </div>
                    </div>
                    <div className="flow-step">
                        <span className="flow-num">PHASE 2</span>
                        <div className="flow-title">シナリオ設計</div>
                        <div className="flow-desc">
                            正常系・異常系・エッジケースのテストシナリオを具体的に設計する
                        </div>
                    </div>
                    <div className="flow-step">
                        <span className="flow-num">PHASE 3</span>
                        <div className="flow-title">テストデータ準備</div>
                        <div className="flow-desc">
                            再現可能で独立したテストデータを準備し、クリーンアップも設計する
                        </div>
                    </div>
                    <div className="flow-step">
                        <span className="flow-num">PHASE 4</span>
                        <div className="flow-title">実装</div>
                        <div className="flow-desc">
                            Page Object Modelなどのパターンを使って保守性の高いコードを書く
                        </div>
                    </div>
                    <div className="flow-step">
                        <span className="flow-num">PHASE 5</span>
                        <div className="flow-title">CI/CD統合</div>
                        <div className="flow-desc">
                            パイプラインに組み込み、全PRで自動実行できる状態にする
                        </div>
                    </div>
                    <div className="flow-step">
                        <span className="flow-num">PHASE 6</span>
                        <div className="flow-title">継続的改善</div>
                        <div className="flow-desc">
                            Flakyテストを修正し、新しいフローを追加し、不要なテストを削除する
                        </div>
                    </div>
                </div>

                {/* Code Examples */}
                <h3
                    className="mt-4"
                    style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.85rem", color: "var(--text)"}}
                >
                    実装例：ECサイト購入フロー E2E（Playwright / TypeScript）
                </h3>

                <div className="code-block">
                    <div className="code-header">
                        <div className="code-dots"><span></span><span></span><span></span></div>
                        <span className="code-lang"
                            >TYPESCRIPT / Playwright — ECサイト購入フロー E2E テスト</span
                        >
                    </div>
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"kw\">import</span> { test, expect } <span class=\"kw\">from</span> <span class=\"str\">'@playwright/test'</span>;\n\n<span class=\"cm\">// ─── テストシナリオ: 通常ユーザーが商品を購入できる ───────────────</span>\ntest.<span class=\"fn\">describe</span>(<span class=\"str\">'ECサイト購入フロー'</span>, () => {\n\n  test.<span class=\"fn\">beforeEach</span>(<span class=\"kw\">async</span> ({ page }) => {\n    <span class=\"cm\">// セットアップ: テスト用ユーザーでログイン（UIではなくAPIで高速化）</span>\n    <span class=\"kw\">const</span> res = <span class=\"kw\">await</span> page.<span class=\"fn\">request</span>.<span class=\"fn\">post</span>(<span class=\"str\">'/api/auth/login'</span>, {\n      data: { email: <span class=\"str\">'test@example.com'</span>, password: <span class=\"str\">'TestPass123!'</span> }\n    });\n    <span class=\"kw\">await</span> page.context().<span class=\"fn\">addCookies</span>([{\n      name: <span class=\"str\">'session'</span>, value: (<span class=\"kw\">await</span> res.<span class=\"fn\">json</span>()).token,\n      domain: <span class=\"str\">'localhost'</span>, path: <span class=\"str\">'/'</span>\n    }]);\n  });\n\n  <span class=\"cm\">// ─── 正常系: 購入完了まで ──────────────────────────────────────────</span>\n  test(<span class=\"str\">'在庫ありの商品を購入して注文完了画面が表示される'</span>, <span class=\"kw\">async</span> ({ page }) => {\n    <span class=\"cm\">// 1. 商品ページへ</span>\n    <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"str\">'/products/wireless-earphone-001'</span>);\n    <span class=\"kw\">await</span> expect(page.<span class=\"fn\">locator</span>(<span class=\"str\">'h1'</span>)).<span class=\"fn\">toContainText</span>(<span class=\"str\">'ワイヤレスイヤホン Pro'</span>);\n\n    <span class=\"cm\">// 2. カートに追加（data-testid で安定したセレクタを使用）</span>\n    <span class=\"kw\">await</span> page.<span class=\"fn\">click</span>(<span class=\"str\">'[data-testid=\"add-to-cart-btn\"]'</span>);\n    <span class=\"kw\">await</span> expect(page.<span class=\"fn\">locator</span>(<span class=\"str\">'[data-testid=\"cart-count\"]'</span>)).<span class=\"fn\">toHaveText</span>(<span class=\"str\">'1'</span>);\n\n    <span class=\"cm\">// 3. カートページへ</span>\n    <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"str\">'/cart'</span>);\n    <span class=\"kw\">await</span> expect(page.<span class=\"fn\">locator</span>(<span class=\"str\">'[data-testid=\"cart-item\"]'</span>)).<span class=\"fn\">toHaveCount</span>(<span class=\"num\">1</span>);\n\n    <span class=\"cm\">// 4. チェックアウト</span>\n    <span class=\"kw\">await</span> page.<span class=\"fn\">click</span>(<span class=\"str\">'[data-testid=\"checkout-btn\"]'</span>);\n    <span class=\"kw\">await</span> page.<span class=\"fn\">fill</span>(<span class=\"str\">'[data-testid=\"card-number\"]'</span>, <span class=\"str\">'4242 4242 4242 4242'</span>);\n    <span class=\"kw\">await</span> page.<span class=\"fn\">fill</span>(<span class=\"str\">'[data-testid=\"card-expiry\"]'</span>, <span class=\"str\">'12/28'</span>);\n    <span class=\"kw\">await</span> page.<span class=\"fn\">fill</span>(<span class=\"str\">'[data-testid=\"card-cvc\"]'</span>,    <span class=\"str\">'123'</span>);\n    <span class=\"kw\">await</span> page.<span class=\"fn\">click</span>(<span class=\"str\">'[data-testid=\"pay-btn\"]'</span>);\n\n    <span class=\"cm\">// 5. 完了確認（注文IDが生成されていることも確認）</span>\n    <span class=\"kw\">await</span> expect(page).<span class=\"fn\">toHaveURL</span>(<span class=\"str\">/\\/order\\/confirmation/</span>);\n    <span class=\"kw\">await</span> expect(page.<span class=\"fn\">locator</span>(<span class=\"str\">'h1'</span>)).<span class=\"fn\">toContainText</span>(<span class=\"str\">'ご注文ありがとうございます'</span>);\n    <span class=\"kw\">await</span> expect(page.<span class=\"fn\">locator</span>(<span class=\"str\">'[data-testid=\"order-id\"]'</span>)).<span class=\"fn\">toBeVisible</span>();\n  });\n\n  <span class=\"cm\">// ─── 異常系: 在庫切れの場合 ───────────────────────────────────────</span>\n  test(<span class=\"str\">'在庫切れ商品はカートに追加できない'</span>, <span class=\"kw\">async</span> ({ page }) => {\n    <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"str\">'/products/limited-edition-999'</span>);\n\n    <span class=\"cm\">// 在庫切れラベルが表示され、ボタンが無効化されていることを確認</span>\n    <span class=\"kw\">await</span> expect(page.<span class=\"fn\">locator</span>(<span class=\"str\">'[data-testid=\"stock-badge\"]'</span>)).<span class=\"fn\">toHaveText</span>(<span class=\"str\">'在庫切れ'</span>);\n    <span class=\"kw\">await</span> expect(page.<span class=\"fn\">locator</span>(<span class=\"str\">'[data-testid=\"add-to-cart-btn\"]'</span>)).<span class=\"fn\">toBeDisabled</span>();\n  });\n\n});" }} />
                </div>

                <div className="callout c-cyan">
                    <strong
                        >重要：<code style={{fontFamily: "var(--font-mono)"}}>data-testid</code>
                        属性を使え</strong
                    ><br />
                    CSSクラス（例：<code style={{fontFamily: "var(--font-mono)"}}
                        >.btn-primary &gt; span</code
                    >）はUIリファクタリングで簡単に壊れます。 HTML要素に
                    <code style={{fontFamily: "var(--font-mono)"}}>data-testid="add-to-cart-btn"</code>
                    のようなテスト専用属性を付与することで、
                    デザイン変更の影響を受けない安定したセレクタを実現できます。 <br /><a
                        href="https://medium.com/@iamprovidence/e2e-tests-83cf86e35a48"
                        className="ulink"
                        target="_blank"
                        >medium.com — E2E Tests Best Practices</a
                    >
                </div>

                {/* Python example */}
                <h3
                    className="mt-4"
                    style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.85rem", color: "var(--text)"}}
                >
                    実装例：認証フロー（Playwright / Python）
                </h3>
                <div className="code-block">
                    <div className="code-header">
                        <div className="code-dots"><span></span><span></span><span></span></div>
                        <span className="code-lang">PYTHON / Playwright — ログイン E2E テスト</span>
                    </div>
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"kw\">import</span> pytest\n<span class=\"kw\">from</span> playwright.sync_api <span class=\"kw\">import</span> Page, expect\n\n<span class=\"kw\">def</span> <span class=\"fn\">test_正規ユーザーがログインしてダッシュボードに遷移できる</span>(page: <span class=\"cls\">Page</span>):\n    <span class=\"cm\"># ─── Arrange ──────────────────────────────────────────────────</span>\n    page.<span class=\"fn\">goto</span>(<span class=\"str\">\"https://staging.example.com/login\"</span>)\n\n    <span class=\"cm\"># ─── Act ──────────────────────────────────────────────────────</span>\n    page.<span class=\"fn\">fill</span>(<span class=\"str\">'[data-testid=\"email-input\"]'</span>, <span class=\"str\">\"user@example.com\"</span>)\n    page.<span class=\"fn\">fill</span>(<span class=\"str\">'[data-testid=\"password-input\"]'</span>, <span class=\"str\">\"Password123!\"</span>)\n    page.<span class=\"fn\">click</span>(<span class=\"str\">'[data-testid=\"login-btn\"]'</span>)\n\n    <span class=\"cm\"># ─── Assert ───────────────────────────────────────────────────</span>\n    <span class=\"fn\">expect</span>(page).<span class=\"fn\">to_have_url</span>(<span class=\"str\">\"https://staging.example.com/dashboard\"</span>)\n    <span class=\"fn\">expect</span>(page.<span class=\"fn\">locator</span>(<span class=\"str\">'[data-testid=\"welcome-msg\"]'</span>)).\\\n        <span class=\"fn\">to_contain_text</span>(<span class=\"str\">\"ようこそ\"</span>)\n\n<span class=\"kw\">def</span> <span class=\"fn\">test_誤パスワードでログイン失敗しエラーが表示される</span>(page: <span class=\"cls\">Page</span>):\n    page.<span class=\"fn\">goto</span>(<span class=\"str\">\"https://staging.example.com/login\"</span>)\n    page.<span class=\"fn\">fill</span>(<span class=\"str\">'[data-testid=\"email-input\"]'</span>, <span class=\"str\">\"user@example.com\"</span>)\n    page.<span class=\"fn\">fill</span>(<span class=\"str\">'[data-testid=\"password-input\"]'</span>, <span class=\"str\">\"WrongPassword\"</span>)\n    page.<span class=\"fn\">click</span>(<span class=\"str\">'[data-testid=\"login-btn\"]'</span>)\n\n    <span class=\"cm\"># URLはログインページのまま、エラーメッセージが表示される</span>\n    <span class=\"fn\">expect</span>(page).<span class=\"fn\">to_have_url</span>(<span class=\"str\">\"https://staging.example.com/login\"</span>)\n    <span class=\"fn\">expect</span>(page.<span class=\"fn\">locator</span>(<span class=\"str\">'[data-testid=\"error-alert\"]'</span>)).\\\n        <span class=\"fn\">to_be_visible</span>()\n    <span class=\"fn\">expect</span>(page.<span class=\"fn\">locator</span>(<span class=\"str\">'[data-testid=\"error-alert\"]'</span>)).\\\n        <span class=\"fn\">to_contain_text</span>(<span class=\"str\">\"パスワードが正しくありません\"</span>)" }} />
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 5: TOOLS
════════════════════════════════════════ */}
            <section id="tools">
                <div className="section-header">
                    <span className="section-header-num"
                        >STEP 05 — E2E TESTING TOOLS 2025: THE ULTIMATE COMPARISON</span
                    >
                    <h2>2025年 E2Eツール完全比較</h2>
                    <div className="cyber-rule"></div>
                    <p>
                        2025〜2026年のE2E自動化市場は
                        <strong style={{color: "var(--cyan)"}}>Playwright（Microsoft）</strong>、
                        <strong style={{color: "var(--color-accent-purple)"}}>Cypress（Cypress.io）</strong>、
                        <strong style={{color: "var(--color-accent-orange)"}}>Selenium（OpenJS Foundation）</strong
                        >の三強が主流です。
                        それぞれのアーキテクチャの違いが、テストの安定性・速度・保守性に直結します。
                    </p>
                </div>

                {/* Architecture Comparison */}
                <h3
                    style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.85rem", color: "var(--text)"}}
                >
                    アーキテクチャの根本的な違い
                </h3>
                <div className="card-grid">
                    <div className="card" style={{borderTop: "3px solid var(--cyan)"}}>
                        <div
                            style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem"}}
                        >
                            <h3 style={{fontSize: "1.05rem", margin: "0", color: "var(--cyan)"}}>
                                🎭 Playwright
                            </h3>
                            <span className="badge b-cyan">2025年最推奨</span>
                        </div>
                        <p>
                            Microsoftが開発。Chrome DevTools Protocol（CDP）経由でブラウザの<strong
                                style={{color: "var(--text)"}}
                                >外部プロセス</strong
                            >から制御。Chromium・Firefox・WebKit（Safari）の全てをネイティブサポート。
                        </p>
                        <hr className="div" />
                        <ul className="checklist" style={{fontSize: "12.5px"}}>
                            <li>ネイティブ並列実行（完全無料）</li>
                            <li>平均失敗率2%（高安定性）</li>
                            <li>JS/TS/Python/Java/C# に対応</li>
                            <li>強力なTrace Viewerによる事後デバッグ</li>
                            <li>Multi-tab・iframeを完全サポート</li>
                        </ul>
                    </div>
                    <div className="card" style={{borderTop: "3px solid var(--color-accent-purple)"}}>
                        <div
                            style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem"}}
                        >
                            <h3 style={{fontSize: "1.05rem", margin: "0", color: "var(--color-accent-purple)"}}>
                                🌲 Cypress
                            </h3>
                            <span className="badge b-purple">フロントエンドDX最高</span>
                        </div>
                        <p>
                            ブラウザの<strong style={{color: "var(--text)"}}>内部プロセス</strong
                            >で動作し、DOMを直接操作。フロントエンド開発者にとってタイムトラベルデバッグなど比類のないローカル開発体験を提供。
                        </p>
                        <hr className="div" />
                        <ul className="checklist" style={{fontSize: "12.5px"}}>
                            <li>タイムトラベルデバッグ（視覚的に最強）</li>
                            <li>リアルタイムリロード・即時フィードバック</li>
                            <li>SPAとコンポーネントテストに最適</li>
                            <li className="w">並列実行はCypress Cloud（有料）が必要</li>
                            <li className="w">WebKit未サポート（失敗率9〜15%）</li>
                        </ul>
                    </div>
                    <div className="card" style={{borderTop: "3px solid var(--color-accent-orange)"}}>
                        <div
                            style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem"}}
                        >
                            <h3 style={{fontSize: "1.05rem", margin: "0", color: "var(--color-accent-orange)"}}>
                                🔬 Selenium
                            </h3>
                            <span className="badge b-gold">エンタープライズ実績</span>
                        </div>
                        <p>
                            20年の歴史を持つWebDriverプロトコルベースの老舗。Java・Python・C#・Ruby・Javascriptなど最多言語サポート。Appiumと連携したモバイル自動化も可能。
                        </p>
                        <hr className="div" />
                        <ul className="checklist" style={{fontSize: "12.5px"}}>
                            <li>最多言語サポート（レガシー資産を活用可能）</li>
                            <li>Selenium Gridによる大規模並列実行</li>
                            <li>Appiumでモバイル自動化まで統合</li>
                            <li className="x">実行速度が最も遅い（WebDriverの中間層）</li>
                            <li className="x">メンテナンスに80%の時間が取られるケースも</li>
                        </ul>
                    </div>
                </div>

                {/* Full Comparison Table */}
                <h3
                    className="mt-4"
                    style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem", color: "var(--text)"}}
                >
                    詳細比較テーブル（2025年実測データ）
                </h3>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>比較項目</th>
                                <th>Playwright</th>
                                <th>Cypress</th>
                                <th>Selenium 4</th>
                                <th>Puppeteer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>アーキテクチャ</strong></td>
                                <td>ブラウザ外部（CDP）</td>
                                <td>ブラウザ内部（DOM直接）</td>
                                <td>WebDriverプロトコル</td>
                                <td>HeadlessChrome専用（CDP）</td>
                            </tr>
                            <tr>
                                <td><strong>平均実行速度</strong></td>
                                <td className="g">4.5秒（最速）</td>
                                <td className="y">9.4秒</td>
                                <td className="y">4.6秒</td>
                                <td className="g">4.8秒</td>
                            </tr>
                            <tr>
                                <td><strong>ブラウザサポート</strong></td>
                                <td className="g">Chromium・Firefox・WebKit</td>
                                <td className="y">Chrome/Edge (Firefox限定的)</td>
                                <td className="g">全主要ブラウザ</td>
                                <td className="r">Chrome/Chromiumのみ</td>
                            </tr>
                            <tr>
                                <td><strong>並列実行</strong></td>
                                <td className="g">ネイティブ・無料</td>
                                <td className="y">Cypress Cloud（有料）</td>
                                <td className="y">Selenium Grid（設定が複雑）</td>
                                <td className="y">別途設定が必要</td>
                            </tr>
                            <tr>
                                <td><strong>言語サポート</strong></td>
                                <td className="g">JS/TS・Python・Java・C#</td>
                                <td className="y">JavaScript のみ</td>
                                <td className="g">Java・Python・C#・Ruby・JS等</td>
                                <td className="y">JavaScript のみ</td>
                            </tr>
                            <tr>
                                <td><strong>自動待機</strong></td>
                                <td className="g">ネイティブ auto-wait</td>
                                <td className="g">自動リトライ</td>
                                <td className="r">明示的waitが必要</td>
                                <td className="y">部分的</td>
                            </tr>
                            <tr>
                                <td><strong>デバッグ体験</strong></td>
                                <td className="g">Trace Viewer（CI事後分析）</td>
                                <td className="g">タイムトラベル（最高のDX）</td>
                                <td className="r">ログベース</td>
                                <td className="y">DevTools統合</td>
                            </tr>
                            <tr>
                                <td><strong>モバイルテスト</strong></td>
                                <td className="g">デバイスエミュレーション</td>
                                <td className="r">非対応</td>
                                <td className="g">Appium連携</td>
                                <td className="y">エミュレーションのみ</td>
                            </tr>
                            <tr>
                                <td><strong>推奨ユースケース</strong></td>
                                <td className="g">大規模CI/CD・クロスブラウザ・エンタープライズ</td>
                                <td>フロントエンド小〜中規模・ローカル開発重視</td>
                                <td className="y">レガシー資産・モバイル統合・多言語チーム</td>
                                <td>Chrome専用スクレイピング・PDF生成</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm mt-1">
                    実測データ出典:
                    <a
                        href="https://betterstack.com/community/comparisons/playwright-cypress-puppeteer-selenium-comparison/"
                        className="ulink"
                        target="_blank"
                        >betterstack.com — E2E Tools Comparison (Hyperfine 20回測定)</a
                    >
                    <a
                        href="https://testdino.com/blog/selenium-vs-cypress-vs-playwright/"
                        className="ulink"
                        target="_blank"
                        >testdino.com — Selenium vs Cypress vs Playwright 2025</a
                    >
                    <a
                        href="https://vizproof.com/en/blog/the-state-of-regression-testing-in-2026-tools-methods-and-trends"
                        className="ulink"
                        target="_blank"
                        >vizproof.com — State of Regression Testing 2026</a
                    >
                </p>

                {/* Selection Guide */}
                <div className="callout c-cyan mt-3">
                    <strong>2025年の結論：どのツールを選ぶか？</strong><br />
                    <strong style={{color: "var(--text)"}}>Playwright を選ぶ場合：</strong
                    >クロスブラウザ必須・大規模スイート・CI/CDコスト最小化・Python/Javaチームが参加する場合。2025〜2026年のデファクトスタンダード。<br />
                    <strong style={{color: "var(--text)"}}>Cypress を選ぶ場合：</strong
                    >JavaScript専業チーム・ローカルデバッグ体験重視・Chrome専用SPA・小〜中規模プロジェクト。<br />
                    <strong style={{color: "var(--text)"}}>Selenium を選ぶ場合：</strong
                    >既存の大規模Seleniumスイート資産・Appiumによるモバイル統合・多言語チーム・レガシーブラウザが必要なエンタープライズ。<br />
                    <a
                        href="https://ardura.consulting/blog/e2e-testing-strategy-implementation-guide/"
                        className="ulink"
                        target="_blank"
                        >ardura.consulting — ツール選定ガイド 2025</a
                    >
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 6: PAGE OBJECT MODEL
════════════════════════════════════════ */}
            <section id="pom">
                <div className="section-header">
                    <span className="section-header-num">STEP 06 — PAGE OBJECT MODEL (POM)</span>
                    <h2>Page Object Model — 保守性を10倍にするパターン</h2>
                    <div className="cyber-rule"></div>
                    <p>
                        Page Object
                        Model（POM）は、UIの要素と操作を「ページオブジェクト」というクラスに閉じ込め、
                        テストコードからUIの詳細を分離するデザインパターンです。
                        セレクタが変更されたとき、<strong style={{color: "var(--text)"}}
                            >修正箇所が1か所のみ</strong
                        >になるため保守性が劇的に向上します。
                    </p>
                </div>

                {/* POM Structure */}
                <h3
                    style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem", color: "var(--text)"}}
                >
                    POMの3層構造
                </h3>
                <div className="pom-grid">
                    <div className="pom-col">
                        <span className="pom-title" style={{color: "var(--cyan)"}}>📄 PAGE OBJECTS</span>
                        <div className="pom-item">LoginPage.ts</div>
                        <div className="pom-item">CartPage.ts</div>
                        <div className="pom-item">CheckoutPage.ts</div>
                        <div className="pom-item">OrderConfirmPage.ts</div>
                        <div style={{fontSize: "11px", color: "var(--color-text-muted)", marginTop: "0.5rem"}}>
                            UIの操作とセレクタを<br />ここに集約する
                        </div>
                    </div>
                    <div className="pom-col pom-arrow">→</div>
                    <div className="pom-col">
                        <span className="pom-title" style={{color: "var(--color-accent-purple)"}}>🧪 TEST SPECS</span>
                        <div className="pom-item">purchase.spec.ts</div>
                        <div className="pom-item">auth.spec.ts</div>
                        <div className="pom-item">checkout.spec.ts</div>
                        <div className="pom-item">search.spec.ts</div>
                        <div style={{fontSize: "11px", color: "var(--color-text-muted)", marginTop: "0.5rem"}}>
                            ビジネスロジックのみ<br />記述する場所
                        </div>
                    </div>
                </div>

                {/* POM Code Example */}
                <div className="grid-2 mt-3">
                    <div>
                        <div className="code-block">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang"
                                    >TYPESCRIPT — ログインページ オブジェクト</span
                                >
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"cm\">// pages/LoginPage.ts</span>\n<span class=\"kw\">import</span> { Page, Locator } <span class=\"kw\">from</span> <span class=\"str\">'@playwright/test'</span>;\n\n<span class=\"kw\">export class</span> <span class=\"cls\">LoginPage</span> {\n  <span class=\"kw\">private readonly</span> emailInput:    <span class=\"cls\">Locator</span>;\n  <span class=\"kw\">private readonly</span> passwordInput: <span class=\"cls\">Locator</span>;\n  <span class=\"kw\">private readonly</span> loginButton:   <span class=\"cls\">Locator</span>;\n  <span class=\"kw\">private readonly</span> errorAlert:    <span class=\"cls\">Locator</span>;\n\n  <span class=\"fn\">constructor</span>(<span class=\"kw\">private</span> page: <span class=\"cls\">Page</span>) {\n    <span class=\"cm\">// セレクタはここに集約する（テストコードに書かない！）</span>\n    <span class=\"kw\">this</span>.emailInput    = page.<span class=\"fn\">locator</span>(<span class=\"str\">'[data-testid=\"email-input\"]'</span>);\n    <span class=\"kw\">this</span>.passwordInput = page.<span class=\"fn\">locator</span>(<span class=\"str\">'[data-testid=\"password-input\"]'</span>);\n    <span class=\"kw\">this</span>.loginButton   = page.<span class=\"fn\">locator</span>(<span class=\"str\">'[data-testid=\"login-btn\"]'</span>);\n    <span class=\"kw\">this</span>.errorAlert    = page.<span class=\"fn\">locator</span>(<span class=\"str\">'[data-testid=\"error-alert\"]'</span>);\n  }\n\n  <span class=\"cm\">// 操作をメソッドとして公開する</span>\n  <span class=\"kw\">async</span> <span class=\"fn\">goto</span>() {\n    <span class=\"kw\">await</span> <span class=\"kw\">this</span>.page.<span class=\"fn\">goto</span>(<span class=\"str\">'/login'</span>);\n  }\n\n  <span class=\"kw\">async</span> <span class=\"fn\">login</span>(email: <span class=\"cls\">string</span>, password: <span class=\"cls\">string</span>) {\n    <span class=\"kw\">await</span> <span class=\"kw\">this</span>.emailInput.<span class=\"fn\">fill</span>(email);\n    <span class=\"kw\">await</span> <span class=\"kw\">this</span>.passwordInput.<span class=\"fn\">fill</span>(password);\n    <span class=\"kw\">await</span> <span class=\"kw\">this</span>.loginButton.<span class=\"fn\">click</span>();\n  }\n\n  <span class=\"cm\">// 検証用のゲッターメソッド</span>\n  <span class=\"fn\">getErrorMessage</span>() { <span class=\"kw\">return</span> <span class=\"kw\">this</span>.errorAlert; }\n}" }} />
                        </div>
                    </div>
                    <div>
                        <div className="code-block">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang"
                                    >TYPESCRIPT — POMを使ったテストスペック</span
                                >
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"cm\">// tests/auth.spec.ts</span>\n<span class=\"kw\">import</span> { test, expect } <span class=\"kw\">from</span> <span class=\"str\">'@playwright/test'</span>;\n<span class=\"kw\">import</span> { <span class=\"cls\">LoginPage</span> } <span class=\"kw\">from</span> <span class=\"str\">'../pages/LoginPage'</span>;\n\ntest.<span class=\"fn\">describe</span>(<span class=\"str\">'認証フロー'</span>, () => {\n  <span class=\"kw\">let</span> loginPage: <span class=\"cls\">LoginPage</span>;\n\n  test.<span class=\"fn\">beforeEach</span>(<span class=\"kw\">async</span> ({ page }) => {\n    loginPage = <span class=\"kw\">new</span> <span class=\"cls\">LoginPage</span>(page);\n    <span class=\"kw\">await</span> loginPage.<span class=\"fn\">goto</span>();\n  });\n\n  test(<span class=\"str\">'正規ユーザーがログインできる'</span>, <span class=\"kw\">async</span> ({ page }) => {\n    <span class=\"cm\">// セレクタは一切書かない！ビジネスロジックだけを記述</span>\n    <span class=\"kw\">await</span> loginPage.<span class=\"fn\">login</span>(<span class=\"str\">'user@example.com'</span>, <span class=\"str\">'Pass123!'</span>);\n\n    <span class=\"kw\">await</span> expect(page).<span class=\"fn\">toHaveURL</span>(<span class=\"str\">'/dashboard'</span>);\n  });\n\n  test(<span class=\"str\">'誤パスワードでエラーが表示される'</span>, <span class=\"kw\">async</span> () => {\n    <span class=\"kw\">await</span> loginPage.<span class=\"fn\">login</span>(<span class=\"str\">'user@example.com'</span>, <span class=\"str\">'WrongPass'</span>);\n\n    <span class=\"kw\">await</span> expect(\n      loginPage.<span class=\"fn\">getErrorMessage</span>()\n    ).<span class=\"fn\">toContainText</span>(<span class=\"str\">'パスワードが正しくありません'</span>);\n  });\n});\n\n<span class=\"cm\">// ← セレクタが変更されたときは LoginPage.ts の\n//   1か所を直すだけで全テストが修正される！</span>" }} />
                        </div>
                    </div>
                </div>

                <div className="callout callout-good">
                    <strong>POMがもたらす効果：</strong>
                    Seleniumを使い続けるチームの研究では、メンテナンスに80%・テスト作成に20%の時間を費やしている実態が明らかになっています。
                    POMを導入することで、UIが変更されても修正箇所が1か所に集約され、
                    メンテナンスコストを大幅に削減できます。
                    <br /><a
                        href="https://www.thunders.ai/articles/modern-e2e-test-architecture-patterns-and-anti-patterns-for-a-maintainable-test-suite"
                        className="ulink"
                        target="_blank"
                        >thunders.ai — Modern E2E Test Architecture Patterns</a
                    >
                    <a
                        href="https://www.virtuosoqa.com/post/best-end-to-end-testing-tools"
                        className="ulink"
                        target="_blank"
                        >virtuosoqa.com — E2E Testing Tools 2026</a
                    >
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 7: FLAKY TESTS
════════════════════════════════════════ */}
            <section id="flaky">
                <div className="section-header">
                    <span className="section-header-num">STEP 07 — FLAKY TESTS: THE #1 ENEMY OF E2E TESTING</span>
                    <h2>Flaky Tests（不安定テスト）の原因と解決法</h2>
                    <div className="cyber-rule"></div>
                    <p>
                        Flakyテストは「コードを変えていないのに時々失敗するテスト」です。
                        チームはこれを「またFlakyか」と無視するようになり、
                        <strong style={{color: "var(--text)"}}>やがて本物のバグも見逃す</strong
                        >という最悪の結果を招きます。
                    </p>
                </div>

                <div className="callout callout-danger">
                    <strong>⚠ Flakyテストの複利計算（恐ろしい現実）：</strong><br />
                    テスト1本の失敗率が5%の場合 → 20回に1回ビルドをブロック（まだ許容範囲）<br />
                    <strong style={{color: "var(--text)"}}
                        >各テストの失敗率が1%で100本ある場合 → 63%のビルドが失敗する</strong
                    >（チームが機能不全に）<br />
                    確率は乗算される。Flakyテストを放置するということは「CI/CDを破壊する」に等しい。
                    <br /><a
                        href="https://www.webstackbuilders.com/articles/flaky-test-diagnosis-race-conditions-e2e-stabilization"
                        className="ulink"
                        target="_blank"
                        >webstackbuilders.com — Why Your E2E Tests Are Flaky</a
                    >
                </div>

                {/* Flaky causes and fixes */}
                <h3
                    className="mt-3"
                    style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.85rem", color: "var(--text)"}}
                >
                    Flakyテストの根本原因 TOP 4 と解決策
                </h3>

                {/* Race conditions */}
                <div className="card mt-2">
                    <div className="flex items-center gap-2" style={{marginBottom: "0.75rem"}}>
                        <span style={{fontSize: "1.3rem"}}>⚡</span>
                        <h3 style={{margin: "0", fontSize: "1rem"}}>
                            原因① レースコンディション（タイミング問題）
                        </h3>
                        <span className="badge badge-sec">最多85%の原因</span>
                    </div>
                    <p>
                        非同期処理（API応答待ち・アニメーション終了・DOM更新）のタイミングがテスト実行より遅れると失敗する。
                    </p>
                    <div className="anti-grid mt-2">
                        <div className="anti-card anti-bad">
                            <div className="anti-ttl">✗ 悪い実装（固定sleep）</div>
                            <pre
                                style={{background: "transparent", padding: "0", fontSize: "11px", color: "var(--color-accent-red)"}}
                            dangerouslySetInnerHTML={{ __html: `// ❌ 500ms待つが遅い環境では不十分\nawait page.waitForTimeout(500);\nawait page.click('[data-testid="result"]');` }} />
                        </div>
                        <div className="anti-card anti-good">
                            <div className="anti-ttl">✓ 良い実装（条件待機）</div>
                            <pre
                                style={{background: "transparent", padding: "0", fontSize: "11px", color: "var(--color-accent-green)"}}
                            dangerouslySetInnerHTML={{ __html: `// ✅ 要素が現れるまでauto-wait\nawait page.waitForSelector(\n  '[data-testid="result"]',\n  { state: 'visible' }\n);\nawait page.click('[data-testid="result"]');` }} />
                        </div>
                    </div>
                </div>

                {/* Environment issues */}
                <div className="card mt-2">
                    <div className="flex items-center gap-2" style={{marginBottom: "0.75rem"}}>
                        <span style={{fontSize: "1.3rem"}}>🌐</span>
                        <h3 style={{margin: "0", fontSize: "1rem"}}>原因② テスト環境の不安定性</h3>
                        <span className="badge b-gold">CI環境で頻発</span>
                    </div>
                    <p>
                        ネットワーク遅延・テスト用サーバーのメモリ不足・別テストとのデータ競合・CI環境とローカルの差異。
                    </p>
                    <div className="code-block mt-2">
                        <div className="code-header">
                            <div className="code-dots"><span></span><span></span><span></span></div>
                            <span className="code-lang"
                                >解決策: Playwright の retry 設定 + test isolation</span
                            >
                        </div>
                        <pre dangerouslySetInnerHTML={{ __html: `<span class="cm">// playwright.config.ts</span>\n<span class="kw">export default</span> <span class="fn">defineConfig</span>({\n  fullyParallel: <span class="cls">true</span>,   <span class="cm">// テストを並列実行</span>\n  retries: process.env.CI ? <span class="num">2</span> : <span class="num">0</span>,  <span class="cm">// CIのみリトライ</span>\n  workers: process.env.CI ? <span class="num">4</span> : undefined,\n\n  use: {\n    baseURL: <span class="str">'http://localhost:3000'</span>,\n    <span class="cm">// 各テストを独立したブラウザコンテキストで実行</span>\n    <span class="cm">// → テスト間のCookie/セッション汚染を完全排除</span>\n    contextOptions: { storageState: undefined },\n  },\n});` }} />
                    </div>
                </div>

                {/* Test data conflicts */}
                <div className="card mt-2">
                    <div className="flex items-center gap-2" style={{marginBottom: "0.75rem"}}>
                        <span style={{fontSize: "1.3rem"}}>🗃️</span>
                        <h3 style={{margin: "0", fontSize: "1rem"}}>原因③ テストデータの競合</h3>
                        <span className="badge b-purple">並列実行で特に危険</span>
                    </div>
                    <p>
                        複数のテストが同じユーザーデータを使い回すと、並列実行時に互いに干渉して失敗する。
                    </p>
                    <div className="code-block mt-2">
                        <div className="code-header">
                            <div className="code-dots"><span></span><span></span><span></span></div>
                            <span className="code-lang">解決策: テストごとに一意なデータを生成</span>
                        </div>
                        <pre dangerouslySetInnerHTML={{ __html: "<span class=\"kw\">import</span> { v4 <span class=\"kw\">as</span> uuidv4 } <span class=\"kw\">from</span> <span class=\"str\">'uuid'</span>;\n\ntest(<span class=\"str\">'ユーザー登録フロー'</span>, <span class=\"kw\">async</span> ({ page }) => {\n  <span class=\"cm\">// ✅ UUID で一意なメールを生成 → テスト間の競合なし</span>\n  <span class=\"kw\">const</span> uniqueEmail = <span class=\"str\">`test-<span class=\"hl-c\">${uuidv4()}</span>@example.com`</span>;\n\n  <span class=\"kw\">await</span> page.<span class=\"fn\">fill</span>(<span class=\"str\">'[data-testid=\"email\"]'</span>, uniqueEmail);\n  <span class=\"cm\">// ... テスト後にAPIでデータを削除（クリーンアップ）</span>\n});\n\n<span class=\"cm\">// または: テストのbeforeEach/afterEachで状態をリセット</span>\ntest.<span class=\"fn\">afterEach</span>(<span class=\"kw\">async</span> ({ request }) => {\n  <span class=\"kw\">await</span> request.<span class=\"fn\">delete</span>(<span class=\"str\">'/api/test/cleanup'</span>);\n});" }} />
                    </div>
                </div>

                {/* Quarantine strategy */}
                <div className="callout c-purple mt-3">
                    <strong>Flakyテストの3ステップ対処法（業界推奨）：</strong><br />
                    <strong style={{color: "var(--text)"}}>1. 隔離（Quarantine）：</strong
                    >Flakyテストを別スイートに移動し、メインパイプラインをブロックしないようにする<br />
                    <strong style={{color: "var(--text)"}}>2. 診断：</strong
                    >直近10回の失敗を分析してパターンを特定する（タイミング？データ？環境？）<br />
                    <strong style={{color: "var(--text)"}}>3. 修正：</strong
                    >根本原因を取り除く。リトライで誤魔化すのは最後の手段<br />
                    <a
                        href="https://ardura.consulting/blog/e2e-testing-strategy-implementation-guide/"
                        className="ulink"
                        target="_blank"
                        >ardura.consulting — Flaky Test Strategy</a
                    >
                    <a
                        href="https://www.webstackbuilders.com/articles/flaky-test-diagnosis-race-conditions-e2e-stabilization"
                        className="ulink"
                        target="_blank"
                        >webstackbuilders.com — Flaky Test Diagnosis</a
                    >
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 8: CI/CD
════════════════════════════════════════ */}
            <section id="cicd">
                <div className="section-header">
                    <span className="section-header-num">STEP 08 — E2E TESTING IN CI/CD PIPELINES</span>
                    <h2>CI/CDパイプラインへのE2E統合</h2>
                    <div className="cyber-rule"></div>
                    <p>
                        E2Eテストは「ローカルで手動実行」では価値を最大化できません。すべてのコードプッシュで自動実行されることで、初めて「バグの早期発見装置」として機能します。
                    </p>
                </div>

                {/* Pipeline Visual */}
                <h3
                    style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem", color: "var(--text)"}}
                >
                    推奨パイプライン構成
                </h3>
                <div className="pipeline">
                    <div className="pipe-stage">
                        <span className="pipe-icon">📝</span>
                        <span className="pipe-name">コードプッシュ</span>
                        <span className="pipe-sub">PR作成・push</span>
                    </div>
                    <div className="pipe-stage">
                        <span className="pipe-icon">🔨</span>
                        <span className="pipe-name">ビルド</span>
                        <span className="pipe-sub">lint・unit test</span>
                    </div>
                    <div className="pipe-stage">
                        <span className="pipe-icon">🔗</span>
                        <span className="pipe-name">統合テスト</span>
                        <span className="pipe-sub">API・DB連携</span>
                    </div>
                    <div
                        className="pipe-stage"
                        style={{background: "var(--cyan5)", borderLeft: "2px solid var(--cyan)"}}
                    >
                        <span className="pipe-icon">🚀</span>
                        <span className="pipe-name" style={{color: "var(--cyan)"}}>E2Eスモーク</span>
                        <span className="pipe-sub">10〜20本・10分以内</span>
                    </div>
                    <div className="pipe-stage">
                        <span className="pipe-icon">✅</span>
                        <span className="pipe-name">PRマージ</span>
                        <span className="pipe-sub">Gateチェック通過</span>
                    </div>
                    <div className="pipe-stage" style={{background: "var(--purple4)"}}>
                        <span className="pipe-icon">🌐</span>
                        <span className="pipe-name" style={{color: "var(--color-accent-purple)"}}>E2Eフルスイート</span>
                        <span className="pipe-sub">全シナリオ・20〜40分</span>
                    </div>
                    <div className="pipe-stage">
                        <span className="pipe-icon">🎯</span>
                        <span className="pipe-name">本番デプロイ</span>
                        <span className="pipe-sub">Go/No-Go</span>
                    </div>
                </div>

                {/* GitHub Actions Code */}
                <div className="code-block mt-3">
                    <div className="code-header">
                        <div className="code-dots"><span></span><span></span><span></span></div>
                        <span className="code-lang"
                            >GitHub Actions — Playwright E2E CI/CD パイプライン</span
                        >
                    </div>
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"cm\"># .github/workflows/e2e.yml</span>\n<span class=\"dec\">name</span>: E2E Tests\n\n<span class=\"dec\">on</span>:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\n<span class=\"dec\">jobs</span>:\n  <span class=\"fn\">e2e-smoke</span>:\n    <span class=\"dec\">runs-on</span>: ubuntu-latest\n    <span class=\"dec\">name</span>: E2E Smoke Suite (PR Gate)\n\n    <span class=\"dec\">steps</span>:\n      - <span class=\"dec\">uses</span>: actions/checkout@v4\n      - <span class=\"dec\">uses</span>: actions/setup-node@v4\n        <span class=\"dec\">with</span>: { node-version: <span class=\"num\">22</span>, cache: <span class=\"str\">'npm'</span> }\n      - <span class=\"dec\">run</span>: npm ci\n      - <span class=\"dec\">run</span>: npx playwright install --with-deps chromium\n\n      <span class=\"cm\"># アプリを起動してE2Eテストを実行</span>\n      - <span class=\"dec\">run</span>: npx playwright test --project=chromium --grep @smoke\n        <span class=\"dec\">env</span>:\n          BASE_URL: ${{ secrets.STAGING_URL }}\n          CI: <span class=\"cls\">true</span>\n\n      <span class=\"cm\"># 失敗時のTrace / Screenshot / Video を保存</span>\n      - <span class=\"dec\">uses</span>: actions/upload-artifact@v4\n        <span class=\"dec\">if</span>: failure()\n        <span class=\"dec\">with</span>:\n          name: playwright-report\n          path: playwright-report/\n          retention-days: <span class=\"num\">7</span>\n\n  <span class=\"fn\">e2e-full</span>:\n    <span class=\"dec\">runs-on</span>: ubuntu-latest\n    <span class=\"dec\">needs</span>: [e2e-smoke]          <span class=\"cm\"># smokeを通過した場合のみ実行</span>\n    <span class=\"dec\">if</span>: github.ref == <span class=\"str\">'refs/heads/main'</span>\n\n    <span class=\"dec\">strategy</span>:\n      <span class=\"dec\">matrix</span>:\n        <span class=\"cm\"># 3ブラウザ × 並列で最大スピードを実現</span>\n        browser: [chromium, firefox, webkit]\n\n    <span class=\"dec\">steps</span>:\n      - <span class=\"dec\">uses</span>: actions/checkout@v4\n      - <span class=\"dec\">uses</span>: actions/setup-node@v4\n        <span class=\"dec\">with</span>: { node-version: <span class=\"num\">22</span>, cache: <span class=\"str\">'npm'</span> }\n      - <span class=\"dec\">run</span>: npm ci\n      - <span class=\"dec\">run</span>: npx playwright install --with-deps ${{ matrix.browser }}\n      - <span class=\"dec\">run</span>: npx playwright test --project=${{ matrix.browser }}\n        <span class=\"dec\">env</span>:\n          BASE_URL: ${{ secrets.STAGING_URL }}\n          CI: <span class=\"cls\">true</span>" }} />
                </div>

                <div className="callout c-gold">
                    <strong>CI/CD統合の3原則：</strong><br />
                    <strong style={{color: "var(--text)"}}>①速く：</strong
                    >スモークスイートは10分以内。30分を超えると誰も待たなくなる。<br />
                    <strong style={{color: "var(--text)"}}>②確実に：</strong
                    >ゲートを設ける。E2Eが落ちたらPRはマージ不可にする（ブランチプロテクション）。<br />
                    <strong style={{color: "var(--text)"}}>③可視化：</strong
                    >失敗時のTrace・スクリーンショット・ビデオを必ずアーティファクトとして保存する。
                    <br /><a
                        href="https://www.ranger.net/post/ultimate-guide-to-e2e-testing-in-ci-cd"
                        className="ulink"
                        target="_blank"
                        >ranger.net — Ultimate Guide to E2E Testing in CI/CD</a
                    >
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 9: VISUAL REGRESSION
════════════════════════════════════════ */}
            <section id="visual">
                <div className="section-header">
                    <span className="section-header-num">STEP 09 — VISUAL REGRESSION TESTING</span>
                    <h2>ビジュアル回帰テスト — UIの見た目を自動検証</h2>
                    <div className="cyber-rule"></div>
                    <p>
                        機能テストは「動くか」を確認しますが、ビジュアル回帰テストは「見た目が崩れていないか」を確認します。
                        E2Eテストとビジュアルテストを組み合わせることで、
                        <strong style={{color: "var(--text)"}}
                            >機能的な正確性とビジュアル品質の両方</strong
                        >を保証できます。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem", color: "var(--text)"}}
                        >
                            ビジュアル回帰テストの仕組み
                        </h3>
                        <div className="timeline">
                            <div className="tl-item">
                                <div className="tl-dot"></div>
                                <div className="tl-title">① ベースラインスクリーンショットを撮影</div>
                                <div className="tl-desc">
                                    正常な状態のUIをスクリーンショットとして保存。これがすべての比較の基準となる。
                                </div>
                            </div>
                            <div className="tl-item">
                                <div className="tl-dot"></div>
                                <div className="tl-title">② 新しいスクリーンショットと比較</div>
                                <div className="tl-desc">
                                    コード変更後に同じ画面を撮影し、ピクセルレベルまたはAIを使って差分を検出する。
                                </div>
                            </div>
                            <div className="tl-item">
                                <div className="tl-dot"></div>
                                <div className="tl-title">③ 差分をレポート</div>
                                <div className="tl-desc">
                                    レイアウトの崩れ・色の変化・テキストの重なりなどを視覚的にハイライトして通知する。
                                </div>
                            </div>
                            <div className="tl-item">
                                <div className="tl-dot"></div>
                                <div className="tl-title">④ 承認 or 修正</div>
                                <div className="tl-desc">
                                    意図した変更は承認してベースラインを更新。意図しない変更はバグとして修正する。
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem", color: "var(--text)"}}
                        >
                            主要ビジュアル回帰テストツール（2025年）
                        </h3>
                        <div className="tool-grid">
                            <div className="tool-card">
                                <div className="tool-name">Percy by BrowserStack</div>
                                <span className="ai-pill">AI Visual Review</span>
                                <div className="tool-desc">
                                    2025年末に「Visual Review
                                    Agent」を搭載。誤検知を40%削減し、レビュー時間を3倍高速化。
                                </div>
                                <span className="badge b-cyan">業界最多採用</span>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Applitools Eyes</div>
                                <span className="ai-pill">Visual AI</span>
                                <div className="tool-desc">
                                    アンチエイリアシング・フォントレンダリングの差異を無視してリアルな問題のみを検出するVisual
                                    AI。
                                </div>
                                <span className="badge b-purple">高精度AI比較</span>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Playwright built-in</div>
                                <div className="tool-desc">
                                    追加費用なしで使えるスクリーンショット比較。Playwrightのテストに1行追加するだけで動作する。
                                </div>
                                <span className="badge bg-accent-green/10 text-[var(--color-accent-green)] border-[rgba(104,211,145,0.3)]">無料・OSS</span>
                            </div>
                            <div className="tool-card">
                                <div className="tool-name">Chromatic</div>
                                <div className="tool-desc">
                                    Storybookと深く統合。コンポーネントレベルのビジュアルテストに最適。PRチェックとして自動実行。
                                </div>
                                <span className="badge b-gold">Storybook連携</span>
                            </div>
                        </div>
                        <div className="callout c-purple mt-2" style={{fontSize: "12.5px"}}>
                            <strong>2025年のトレンド：</strong
                            >ビジュアル回帰テストはもはや「別プロセス」ではなく、
                            E2EテストのCI/CDパイプラインに組み込まれた標準工程になりつつある。
                            percySnapshot()を1行追加するだけで機能テスト＋ビジュアル検証が同時実行できる。
                            <br /><a
                                href="https://bug0.com/knowledge-base/visual-regression-testing-tools"
                                className="ulink"
                                target="_blank"
                                >bug0.com — Best Visual Regression Testing Tools 2026</a
                            >
                        </div>
                    </div>
                </div>

                {/* Playwright Visual Example */}
                <div className="code-block mt-3">
                    <div className="code-header">
                        <div className="code-dots"><span></span><span></span><span></span></div>
                        <span className="code-lang"
                            >TYPESCRIPT / Playwright — ビジュアル回帰テストの実装</span
                        >
                    </div>
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"cm\">// visual-regression.spec.ts</span>\n<span class=\"kw\">import</span> { test, expect } <span class=\"kw\">from</span> <span class=\"str\">'@playwright/test'</span>;\n\ntest(<span class=\"str\">'ダッシュボード画面がビジュアル変化なし'</span>, <span class=\"kw\">async</span> ({ page }) => {\n  <span class=\"kw\">await</span> page.<span class=\"fn\">goto</span>(<span class=\"str\">'/dashboard'</span>);\n\n  <span class=\"cm\">// 動的なコンテンツ（タイムスタンプ・広告等）をマスク</span>\n  <span class=\"kw\">await</span> page.<span class=\"fn\">evaluate</span>(() => {\n    document.<span class=\"fn\">querySelectorAll</span>(<span class=\"str\">'[data-dynamic]'</span>).<span class=\"fn\">forEach</span>(el => {\n      (<span class=\"kw\">el as</span> <span class=\"cls\">HTMLElement</span>).style.visibility = <span class=\"str\">'hidden'</span>;\n    });\n  });\n\n  <span class=\"cm\">// スクリーンショットをベースラインと比較（初回実行時に保存）</span>\n  <span class=\"kw\">await</span> expect(page).<span class=\"fn\">toHaveScreenshot</span>(<span class=\"str\">'dashboard.png'</span>, {\n    maxDiffPixels: <span class=\"num\">100</span>,         <span class=\"cm\">// 許容ピクセル差</span>\n    threshold: <span class=\"num\">0.1</span>,             <span class=\"cm\">// 10%以内の差異を許容</span>\n    fullPage: <span class=\"cls\">true</span>,             <span class=\"cm\">// ページ全体をキャプチャ</span>\n  });\n});" }} />
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 10: AI IN E2E TESTING
════════════════════════════════════════ */}
            <section id="ai">
                <div className="section-header">
                    <span className="section-header-num">STEP 10 — AI IN E2E TESTING: 2025 REVOLUTION</span>
                    <h2>AIがE2Eテストを変える — 2025年の最前線</h2>
                    <div className="cyber-rule"></div>
                    <p>
                        2025年のState of Quality Report（1,400名調査）によると、
                        <strong style={{color: "var(--text)"}}
                            >72%のQA担当者がAIをテスト生成・最適化に活用</strong
                        >しており、 82%が「AIはテストの未来において重要」と回答しています。
                    </p>
                </div>

                <div className="card-grid">
                    <div className="card" style={{borderLeft: "3px solid var(--cyan)"}}>
                        <span className="card-icon">🤖</span>
                        <h3>セルフヒーリング（自己修復）テスト</h3>
                        <p>
                            UIのDOM構造が変わりセレクタが無効になったとき、AIが周辺のDOM解析から代替セレクタを自動提案・適用する。Testsigma・Mabl・Functionizeが本番実装中。
                        </p>
                        <span className="badge bg-accent-green/10 text-[var(--color-accent-green)] border-[rgba(104,211,145,0.3)] mt-1">最も成熟したAI機能</span>
                    </div>
                    <div className="card" style={{borderLeft: "3px solid var(--color-accent-purple)"}}>
                        <span className="card-icon">✍️</span>
                        <h3>自然言語からのテスト自動生成</h3>
                        <p>
                            「カートに商品を追加して決済まで完了させるテストを書いて」という自然言語の指示から実行可能なE2Eテストスクリプトを生成する。LLMベースのツールが急速に進化中。
                        </p>
                        <span className="badge b-purple mt-1">品質は向上中</span>
                    </div>
                    <div className="card" style={{borderLeft: "3px solid var(--color-accent-yellow)"}}>
                        <span className="card-icon">🎯</span>
                        <h3>AI駆動テスト優先化（Risk-based）</h3>
                        <p>
                            PRで変更されたファイルに基づき、どのE2Eテストが失敗しやすいかをMLモデルが予測し、最も重要なテストを先に実行する「スマートスイート」を構築する。
                        </p>
                        <span className="badge b-gold mt-1">実用段階</span>
                    </div>
                    <div className="card" style={{borderLeft: "3px solid var(--color-accent-green)"}}>
                        <span className="card-icon">👁️</span>
                        <h3>AI視覚回帰テスト</h3>
                        <p>
                            ピクセル差分ではなく、視覚的な意味（ボタンが隠れている・テキストが重なっている等）をAIが理解して判断する。Applitools・Percyが先行している。
                        </p>
                        <span className="badge bg-accent-green/10 text-[var(--color-accent-green)] border-[rgba(104,211,145,0.3)] mt-1">産業利用可能</span>
                    </div>
                    <div className="card" style={{borderLeft: "3px solid var(--color-accent-red)"}}>
                        <span className="card-icon">⚠️</span>
                        <h3>AI活用の限界と注意点</h3>
                        <p>
                            2026年現在も「完全自動化されたテスト生成」は部分的な達成に留まる。AIは繰り返しの実装作業を担当し、テスト戦略の設計・判断は引き続き人間が行う必要がある。
                        </p>
                        <span className="badge badge-sec mt-1">人間の監督が必須</span>
                    </div>
                    <div className="card" style={{borderLeft: "3px solid var(--cyan)"}}>
                        <span className="card-icon">📊</span>
                        <h3>AIによる欠陥予測</h3>
                        <p>
                            コードの変更履歴・欠陥パターン・テスト結果のトレンドをMLが分析し、どのモジュールにバグが潜みやすいかを開発前に予測する予防的QA。
                        </p>
                        <span className="badge b-cyan mt-1">次世代QA</span>
                    </div>
                </div>

                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://katalon.com/resources-center/blog/test-automation-statistics-for-2025"
                        className="ulink"
                        target="_blank"
                        >katalon.com — Test Automation Statistics 2025（1,400名調査）</a
                    >
                    <a
                        href="https://www.tricentis.com/learn/ai-end-to-end-testing"
                        className="ulink"
                        target="_blank"
                        >tricentis.com — AI in E2E Testing</a
                    >
                    <a
                        href="https://vizproof.com/en/blog/the-state-of-regression-testing-in-2026-tools-methods-and-trends"
                        className="ulink"
                        target="_blank"
                        >vizproof.com — State of Regression Testing 2026</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 11: ANTI-PATTERNS
════════════════════════════════════════ */}
            <section id="antipatterns">
                <div className="section-header">
                    <span className="section-header-num">STEP 11 — E2E TESTING ANTI-PATTERNS</span>
                    <h2>避けるべきアンチパターン</h2>
                    <div className="cyber-rule"></div>
                    <p>
                        E2Eテストが「チームの邪魔者」になる最大の理由はアンチパターンの積み重ねです。以下を認識して設計に活かしましょう。
                    </p>
                </div>

                <div className="card-grid">
                    <div className="card" style={{borderLeft: "4px solid var(--color-accent-red)"}}>
                        <h3>🚫 UIを通じてテストデータを準備する</h3>
                        <p>
                            ログインフォームを経由してテスト用ユーザーを毎回作成するのは遅く、そのUI自体がFlakyの原因になる。<br />
                            <strong style={{color: "var(--cyan)"}}>✅ 代替：</strong
                            >APIやDBシードを使ってテストデータを準備し、UIは核心部分のみテストする。
                        </p>
                    </div>
                    <div className="card" style={{borderLeft: "4px solid var(--color-accent-red)"}}>
                        <h3>🚫 すべてをE2Eテストしようとする</h3>
                        <p>
                            E2Eテストで全バリデーションパターン・全エラーケースをカバーしようとすると維持不可能な数になる。<br />
                            <strong style={{color: "var(--cyan)"}}>✅ 代替：</strong
                            >ユニットテストで網羅し、E2Eは「幸せなパス」と「最重要な不幸なパス」のみに絞る。
                        </p>
                    </div>
                    <div className="card" style={{borderLeft: "4px solid var(--color-accent-red)"}}>
                        <h3>🚫 sleep() / waitForTimeout() を多用する</h3>
                        <p>
                            固定時間待機はテストを不安定にし、不要な時間を消費する最悪のパターン。<br />
                            <strong style={{color: "var(--cyan)"}}>✅ 代替：</strong
                            >waitForSelector・waitForResponse
                            など条件ベースの待機を使う。Playwrightのauto-waitを活用する。
                        </p>
                    </div>
                    <div className="card" style={{borderLeft: "4px solid var(--color-accent-red)"}}>
                        <h3>🚫 テスト間で状態を共有する</h3>
                        <p>
                            テストAが作成したデータをテストBが使う設計は、実行順序依存・並列実行不可の元凶になる。<br />
                            <strong style={{color: "var(--cyan)"}}>✅ 代替：</strong
                            >各テストはarrange（準備）→ act → assert →
                            cleanup（後片付け）で完全に独立させる。
                        </p>
                    </div>
                    <div className="card" style={{borderLeft: "4px solid var(--color-accent-yellow)"}}>
                        <h3>⚠️ Flakyテストを「リトライ」で放置する</h3>
                        <p>
                            リトライ設定はFlakyの症状を隠すが原因は消えない。CI時間の増加と信頼性の低下を招く。<br />
                            <strong style={{color: "var(--cyan)"}}>✅ 代替：</strong
                            >リトライは緊急措置。必ず根本原因を調査して修正する。
                        </p>
                    </div>
                    <div className="card" style={{borderLeft: "4px solid var(--color-accent-yellow)"}}>
                        <h3>⚠️ テストコードをプロダクションコード品質で管理しない</h3>
                        <p>
                            テストコードのレビューをおろそかにすると、重複・読みにくいコード・壊れやすいセレクタが蓄積する。<br />
                            <strong style={{color: "var(--cyan)"}}>✅ 代替：</strong
                            >テストコードもPRレビュー・リファクタリング・ドキュメント化の対象にする。
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 12: BEST PRACTICES
════════════════════════════════════════ */}
            <section id="bestpractices">
                <div className="section-header">
                    <span className="section-header-num">STEP 12 — E2E TESTING BEST PRACTICES 2025</span>
                    <h2>E2Eテストのベストプラクティス まとめ</h2>
                    <div className="cyber-rule"></div>
                    <p>2025年の業界調査と世界トップQAチームの実践から導き出された黄金律です。</p>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>カテゴリ</th>
                                <th>ベストプラクティス</th>
                                <th>理由</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="badge b-cyan">スコープ</span></td>
                                <td>
                                    <strong
                                        >クリティカルなユーザージャーニーのみをE2Eでカバーする</strong
                                    >
                                </td>
                                <td>E2Eは最も高コストなテスト。ROIを最大化するため厳選する</td>
                            </tr>
                            <tr>
                                <td><span className="badge bg-accent-green/10 text-[var(--color-accent-green)] border-[rgba(104,211,145,0.3)]">安定性</span></td>
                                <td>
                                    <strong>data-testid 属性を使い、CSSクラスに依存しない</strong>
                                </td>
                                <td>
                                    UIリファクタリング・デザイン変更の影響を受けない安定したセレクタを確保
                                </td>
                            </tr>
                            <tr>
                                <td><span className="badge bg-accent-green/10 text-[var(--color-accent-green)] border-[rgba(104,211,145,0.3)]">安定性</span></td>
                                <td>
                                    <strong
                                        >固定sleep禁止。条件ベースの待機（waitForSelector等）のみ使用</strong
                                    >
                                </td>
                                <td>
                                    Flakyテストの85%はタイミング問題。条件待機で根本から解決する
                                </td>
                            </tr>
                            <tr>
                                <td><span className="badge b-purple">設計</span></td>
                                <td>
                                    <strong
                                        >Page Object Model でセレクタとロジックを分離する</strong
                                    >
                                </td>
                                <td>UIが変更されたときの修正箇所を1か所に集約できる</td>
                            </tr>
                            <tr>
                                <td><span className="badge b-purple">設計</span></td>
                                <td>
                                    <strong
                                        >各テストは完全に独立させる（beforeEach/afterEachで状態リセット）</strong
                                    >
                                </td>
                                <td>テスト間の依存をなくすことで並列実行が安全になる</td>
                            </tr>
                            <tr>
                                <td><span className="badge b-gold">パフォーマンス</span></td>
                                <td><strong>ログイン等の前提操作はUIではなくAPIで行う</strong></td>
                                <td>テスト速度を大幅短縮し、UIのFlakyリスクを排除する</td>
                            </tr>
                            <tr>
                                <td><span className="badge b-gold">パフォーマンス</span></td>
                                <td><strong>並列実行を必ず有効化する（特にPlaywright）</strong></td>
                                <td>テストスイートの実行時間を劇的に短縮できる</td>
                            </tr>
                            <tr>
                                <td><span className="badge b-cyan">CI/CD</span></td>
                                <td>
                                    <strong
                                        >スモークスイートは10分以内・フルスイートは40分以内に収める</strong
                                    >
                                </td>
                                <td>
                                    開発者が待てる時間には上限がある。遅いとCI結果を無視され始める
                                </td>
                            </tr>
                            <tr>
                                <td><span className="badge b-cyan">CI/CD</span></td>
                                <td>
                                    <strong
                                        >失敗時のスクリーンショット・Trace・ビデオを必ず保存する</strong
                                    >
                                </td>
                                <td>
                                    CI環境での失敗デバッグには証拠が必須。ローカルで再現できないことが多い
                                </td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-sec">保守性</span></td>
                                <td>
                                    <strong
                                        >定期的にテストスイートを監査し、不要なテストを削除する</strong
                                    >
                                </td>
                                <td>
                                    テストのコンテキスト腐敗を防ぐ。少数の確実なテスト &gt;
                                    大量の不安定テスト
                                </td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-sec">保守性</span></td>
                                <td>
                                    <strong
                                        >Flakyテストは隔離→診断→修正の3ステップで対処する</strong
                                    >
                                </td>
                                <td>リトライで隠蔽は禁止。放置するとチームのCI信頼が崩壊する</td>
                            </tr>
                            <tr>
                                <td><span className="ai-pill">AI活用</span></td>
                                <td>
                                    <strong
                                        >AIセルフヒーリングを活用し、メンテナンス工数を削減する</strong
                                    >
                                </td>
                                <td>
                                    2025年のAI機能はE2Eの最大の弱点（保守コスト）を大幅に軽減できる
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="text-sm mt-1">
                    参照:
                    <a
                        href="https://www.bunnyshell.com/blog/best-practices-for-end-to-end-testing-in-2025/"
                        className="ulink"
                        target="_blank"
                        >bunnyshell.com — E2E Best Practices 2025</a
                    >
                    <a
                        href="https://oneuptime.com/blog/post/2026-01-30-e2e-testing-best-practices/view"
                        className="ulink"
                        target="_blank"
                        >oneuptime.com — E2E Best Practices 2026</a
                    >
                    <a
                        href="https://www.deviqa.com/blog/how-to-build-e2e-test-cases/"
                        className="ulink"
                        target="_blank"
                        >deviqa.com — How to Build E2E Test Cases</a
                    >
                </p>

                <div className="callout c-cyan mt-3">
                    <strong>ISTQB CTFL v4.0 — E2Eテストとテストの7原則の関係：</strong><br />
                    ①「テストは欠陥の存在を示す」—E2Eが通過してもシステムが完璧とは言えない。<br />
                    ②「全数テストは不可能」—だからこそクリティカルなフローに絞る戦略が重要。<br />
                    ③「早期テスト」—E2Eは早期に設計・後期に実行のバランスが最適。<br />
                    ⑤「殺虫剤のパラドックス」—同じE2Eを繰り返すだけでは新バグを見つけられない。定期的に探索的テストも実施する。
                    <br /><a
                        href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                        className="ulink"
                        target="_blank"
                        >istqb.org — CTFL v4.0 テスト7原則</a
                    >
                    <a href="https://istqb.org/" className="ulink" target="_blank"
                        >istqb.org — 公式サイト</a
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
                    <div className="cyber-rule"></div>
                    <p>
                        本ガイドで引用・参考にした全ての参照元URLです。最新情報は各公式ソースで確認してください。
                    </p>
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
                                <td>ISTQB公式</td>
                                <td>全資格一覧</td>
                                <td>
                                    <a
                                        href="https://istqb.org/certifications/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/certifications/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール比較</td>
                                <td>Playwright vs Cypress 2025 Showdown (FrugalTesting)</td>
                                <td>
                                    <a
                                        href="https://www.frugaltesting.com/blog/playwright-vs-cypress-the-ultimate-2025-e2e-testing-showdown"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.frugaltesting.com/blog/playwright-vs-cypress-the-ultimate-2025-e2e-testing-showdown</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール比較</td>
                                <td>Playwright vs Cypress (TestingXperts, Nov 2025)</td>
                                <td>
                                    <a
                                        href="https://www.testingxperts.com/blog/playwright-vs-cypress/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.testingxperts.com/blog/playwright-vs-cypress/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール比較</td>
                                <td>
                                    E2E Tools Benchmark: Playwright・Cypress・Puppeteer・Selenium
                                </td>
                                <td>
                                    <a
                                        href="https://betterstack.com/community/comparisons/playwright-cypress-puppeteer-selenium-comparison/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://betterstack.com/community/comparisons/playwright-cypress-puppeteer-selenium-comparison/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール比較</td>
                                <td>Selenium vs Cypress vs Playwright 2025 (TestDino)</td>
                                <td>
                                    <a
                                        href="https://testdino.com/blog/selenium-vs-cypress-vs-playwright/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://testdino.com/blog/selenium-vs-cypress-vs-playwright/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール比較</td>
                                <td>Playwright E2E Guide 2026 (DeviQA)</td>
                                <td>
                                    <a
                                        href="https://www.deviqa.com/blog/guide-to-playwright-end-to-end-testing-in-2025/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.deviqa.com/blog/guide-to-playwright-end-to-end-testing-in-2025/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール比較</td>
                                <td>
                                    E2E Tools Comparison: Cypress/Selenium/Playwright/Puppeteer
                                    (Medium)
                                </td>
                                <td>
                                    <a
                                        href="https://medium.com/@mate.subicz/e2e-web-frontend-testing-selenium-vs-playwright-vs-cypress-vs-puppeteer-d6d174d8000c"
                                        className="ref-url"
                                        target="_blank"
                                        >https://medium.com/@mate.subicz/e2e-web-frontend-testing-selenium-vs-playwright-vs-cypress-vs-puppeteer-d6d174d8000c</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール比較</td>
                                <td>
                                    Choosing Between Selenium/Cypress/Playwright (SHIFT ASIA, Dec
                                    2025)
                                </td>
                                <td>
                                    <a
                                        href="https://shiftasia.com/column/choosing-between-selenium-cypress-playwright-why-automation-framework-matters/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://shiftasia.com/column/choosing-between-selenium-cypress-playwright-why-automation-framework-matters/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール比較</td>
                                <td>Selenium vs Playwright vs Cypress (Sean Coughlin's Blog)</td>
                                <td>
                                    <a
                                        href="https://blog.seancoughlin.me/comparing-javascript-end-to-end-testing-frameworks-cypress-vs-selenium-vs-playwright"
                                        className="ref-url"
                                        target="_blank"
                                        >https://blog.seancoughlin.me/comparing-javascript-end-to-end-testing-frameworks-cypress-vs-selenium-vs-playwright</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール比較</td>
                                <td>Best E2E Testing Tools 2026 (VirtuosoQA)</td>
                                <td>
                                    <a
                                        href="https://www.virtuosoqa.com/post/best-end-to-end-testing-tools"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.virtuosoqa.com/post/best-end-to-end-testing-tools</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ベストプラクティス</td>
                                <td>Best Practices for E2E Testing 2025 (Bunnyshell)</td>
                                <td>
                                    <a
                                        href="https://www.bunnyshell.com/blog/best-practices-for-end-to-end-testing-in-2025/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.bunnyshell.com/blog/best-practices-for-end-to-end-testing-in-2025/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ベストプラクティス</td>
                                <td>
                                    E2E Testing Strategy Implementation Guide (Ardura Consulting)
                                </td>
                                <td>
                                    <a
                                        href="https://ardura.consulting/blog/e2e-testing-strategy-implementation-guide/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://ardura.consulting/blog/e2e-testing-strategy-implementation-guide/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ベストプラクティス</td>
                                <td>E2E Testing Best Practices 2026 (OneUptime)</td>
                                <td>
                                    <a
                                        href="https://oneuptime.com/blog/post/2026-01-30-e2e-testing-best-practices/view"
                                        className="ref-url"
                                        target="_blank"
                                        >https://oneuptime.com/blog/post/2026-01-30-e2e-testing-best-practices/view</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ベストプラクティス</td>
                                <td>How to Build E2E Test Cases (DeviQA, Aug 2025)</td>
                                <td>
                                    <a
                                        href="https://www.deviqa.com/blog/how-to-build-e2e-test-cases/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.deviqa.com/blog/how-to-build-e2e-test-cases/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ベストプラクティス</td>
                                <td>E2E Tests (Medium — Best Practices)</td>
                                <td>
                                    <a
                                        href="https://medium.com/@iamprovidence/e2e-tests-83cf86e35a48"
                                        className="ref-url"
                                        target="_blank"
                                        >https://medium.com/@iamprovidence/e2e-tests-83cf86e35a48</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ベストプラクティス</td>
                                <td>Ultimate Guide to E2E Testing in CI/CD (Ranger)</td>
                                <td>
                                    <a
                                        href="https://www.ranger.net/post/ultimate-guide-to-e2e-testing-in-ci-cd"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.ranger.net/post/ultimate-guide-to-e2e-testing-in-ci-cd</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>アーキテクチャ</td>
                                <td>
                                    Modern E2E Test Architecture Patterns (Thunders AI, Dec 2025)
                                </td>
                                <td>
                                    <a
                                        href="https://www.thunders.ai/articles/modern-e2e-test-architecture-patterns-and-anti-patterns-for-a-maintainable-test-suite"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.thunders.ai/articles/modern-e2e-test-architecture-patterns-and-anti-patterns-for-a-maintainable-test-suite</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>Flakyテスト</td>
                                <td>Why Your E2E Tests Are Flaky (WebstackBuilders, Nov 2025)</td>
                                <td>
                                    <a
                                        href="https://www.webstackbuilders.com/articles/flaky-test-diagnosis-race-conditions-e2e-stabilization"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.webstackbuilders.com/articles/flaky-test-diagnosis-race-conditions-e2e-stabilization</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>Flakyテスト</td>
                                <td>Stable E2E Tests with pytest-bdd (QAHiveLab)</td>
                                <td>
                                    <a
                                        href="https://qahivelab.github.io/2025/01/29/stable-e2e-tests-pytest-bdd.html"
                                        className="ref-url"
                                        target="_blank"
                                        >https://qahivelab.github.io/2025/01/29/stable-e2e-tests-pytest-bdd.html</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>E2E微サービス</td>
                                <td>E2E Testing for Microservices 2026 (Bunnyshell)</td>
                                <td>
                                    <a
                                        href="https://www.bunnyshell.com/blog/end-to-end-testing-for-microservices-a-2025-guide/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.bunnyshell.com/blog/end-to-end-testing-for-microservices-a-2025-guide/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ビジュアル回帰</td>
                                <td>Best Visual Regression Testing Tools 2026 (Bug0)</td>
                                <td>
                                    <a
                                        href="https://bug0.com/knowledge-base/visual-regression-testing-tools"
                                        className="ref-url"
                                        target="_blank"
                                        >https://bug0.com/knowledge-base/visual-regression-testing-tools</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ビジュアル回帰</td>
                                <td>
                                    Automated Visual Regression Testing (BrowserStack, Nov 2025)
                                </td>
                                <td>
                                    <a
                                        href="https://www.browserstack.com/guide/automated-visual-regression-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.browserstack.com/guide/automated-visual-regression-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ビジュアル回帰</td>
                                <td>What is Visual Regression Testing 2026 (Bug0)</td>
                                <td>
                                    <a
                                        href="https://bug0.com/knowledge-base/what-is-visual-regression-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://bug0.com/knowledge-base/what-is-visual-regression-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>AIとE2E</td>
                                <td>State of Regression Testing 2026 (VizProof, Feb 2026)</td>
                                <td>
                                    <a
                                        href="https://vizproof.com/en/blog/the-state-of-regression-testing-in-2026-tools-methods-and-trends"
                                        className="ref-url"
                                        target="_blank"
                                        >https://vizproof.com/en/blog/the-state-of-regression-testing-in-2026-tools-methods-and-trends</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>AIとE2E</td>
                                <td>AI in E2E Testing Complete Guide 2025 (Tricentis)</td>
                                <td>
                                    <a
                                        href="https://www.tricentis.com/learn/ai-end-to-end-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.tricentis.com/learn/ai-end-to-end-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>AIとE2E</td>
                                <td>Regression Testing 2025: AI-Driven (Quash, Nov 2025)</td>
                                <td>
                                    <a
                                        href="https://quashbugs.com/blog/regression-testing-2025-ai"
                                        className="ref-url"
                                        target="_blank"
                                        >https://quashbugs.com/blog/regression-testing-2025-ai</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>統計データ</td>
                                <td>Test Automation Statistics 2025 (Katalon, 1,400名調査)</td>
                                <td>
                                    <a
                                        href="https://katalon.com/resources-center/blog/test-automation-statistics-for-2025"
                                        className="ref-url"
                                        target="_blank"
                                        >https://katalon.com/resources-center/blog/test-automation-statistics-for-2025</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>統計データ</td>
                                <td>How AI Changes QA Expectations 2025 (DeviQA)</td>
                                <td>
                                    <a
                                        href="https://www.deviqa.com/blog/how-ai-changes-qa-expectations-in-2025/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.deviqa.com/blog/how-ai-changes-qa-expectations-in-2025/</a
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
