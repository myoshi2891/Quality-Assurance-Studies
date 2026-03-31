import Header from '../../components/Header';
import '../integration-functional-testing-guide.css';

/**
 * Renders the "Integration & Functional Testing Complete Guide 2025" single-page layout in Japanese.
 *
 * The component is purely presentational and returns the complete JSX structure for the guide,
 * including hero, numbered sections (overview, techniques, examples, tools, references) and embedded code samples.
 *
 * @returns The JSX element representing the full guide page
 */
export default function IntegrationFunctionalTestingGuide() {
    return (
        <>
            <Header />
            <section className="hero" id="top">
                <div className="hero-content">
                    <span className="hero-eyebrow"
                        >インテグレーション & 機能テスト 完全ガイド 2025</span
                    >
                    <h1>
                        <span className="accent">INTEGRATION</span><br />
                        &amp; FUNCTIONAL<br />
                        <span className="dim">TESTING</span>
                    </h1>
                    <p className="hero-sub">
                        ISTQB CTFL v4.0 Section 2.2「Test Levels」に準拠。
                        コンポーネント結合テスト・システム結合テスト・機能テスト設計技法
                        （同値クラス分析・境界値分析・デシジョンテーブル・状態遷移テスト）・
                        APIコントラクトテストまで、2025年最新の実務知識をステップバイステップで解説します。
                    </p>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-num">Level 2</span
                            ><span className="stat-label">ISTQBテストレベル（統合）</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">4</span
                            ><span className="stat-label">主要ブラックボックス技法</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">93%</span
                            ><span className="stat-label">APIチームのコラボ課題比率（Postman 2025）</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">v4.0</span
                            ><span className="stat-label">ISTQB CTFL 最新シラバス</span>
                        </div>
                    </div>

                    {/* Test Level Flow */}
                    <div className="flow-diagram">
                        <div className="flow-box">
                            <strong>ユニットテスト</strong>
                            <span className="flow-label">Level 1 / 単体</span>
                        </div>
                        <span className="flow-arrow">→</span>
                        <div className="flow-box active">
                            <strong>コンポーネント統合</strong>
                            <span className="flow-label">Level 2a ← ここ</span>
                        </div>
                        <span className="flow-arrow">→</span>
                        <div className="flow-box active">
                            <strong>システム統合</strong>
                            <span className="flow-label">Level 2b ← ここ</span>
                        </div>
                        <span className="flow-arrow">→</span>
                        <div className="flow-box">
                            <strong>システムテスト</strong>
                            <span className="flow-label">Level 3</span>
                        </div>
                        <span className="flow-arrow">→</span>
                        <div className="flow-box">
                            <strong>受入テスト</strong>
                            <span className="flow-label">Level 4</span>
                        </div>
                    </div>

                    <div className="callout callout-info mt-2">
                        <strong>ISTQB CTFL v4.0 における定義（Section 2.2）：</strong>
                        コンポーネント統合テスト（Component Integration
                        Testing）はユニットテスト後に実施し、
                        コンポーネント間のインターフェースと相互作用を検証します。
                        システム統合テスト（System Integration
                        Testing）はシステム間・外部サービス・マイクロサービスとの
                        インターフェースを検証します。
                        <br />
                        <a
                            href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                            className="ulink"
                            target="_blank"
                            >istqb.org — CTFL v4.0 公式ページ</a
                        >
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 0: OVERVIEW & DIFFERENCE
════════════════════════════════════════ */}
            <section id="overview">
                <div className="section-header">
                    <span className="section-num">SECTION 00 — TEST LEVELS OVERVIEW</span>
                    <h2>テストレベルの全体像</h2>
                    <div className="accent-line"></div>
                    <p>
                        インテグレーションテストと機能テストは混同されやすいですが、ISTQBでは明確に区別されています。両方を正確に理解することがテスト戦略の出発点です。
                    </p>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>テストレベル</th>
                                <th>ISTQB区分</th>
                                <th>テスト対象</th>
                                <th>実施者</th>
                                <th>主な欠陥</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>コンポーネントテスト</strong><br /><span
                                        className="badge badge-unit"
                                        >Unit / Level 1</span
                                    >
                                </td>
                                <td>個別コンポーネント</td>
                                <td>関数・クラス・モジュール（単体）</td>
                                <td>開発者</td>
                                <td>ロジックエラー・演算誤り</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>コンポーネント統合テスト</strong><br /><span
                                        className="badge badge-int"
                                        >Integration / Level 2a</span
                                    >
                                </td>
                                <td>コンポーネント間インターフェース</td>
                                <td>モジュール同士の連携・データフロー</td>
                                <td>開発者・テスター</td>
                                <td>インターフェースの不一致・データ変換エラー</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>システム統合テスト</strong><br /><span
                                        className="badge badge-int"
                                        >Integration / Level 2b</span
                                    >
                                </td>
                                <td>システム間インターフェース</td>
                                <td>外部API・DB・マイクロサービス間連携</td>
                                <td>テスター・QA</td>
                                <td>通信プロトコルの不一致・タイムアウト</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>システムテスト</strong><br /><span className="badge badge-int"
                                        >System / Level 3</span
                                    >
                                </td>
                                <td>システム全体</td>
                                <td>機能要件・非機能要件の充足性</td>
                                <td>テスター・QA</td>
                                <td>仕様と実装の乖離・性能問題</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>受入テスト</strong><br /><span className="badge badge-func"
                                        >Acceptance / Level 4</span
                                    >
                                </td>
                                <td>ビジネス要件</td>
                                <td>ユーザーストーリー・業務フローの充足</td>
                                <td>ユーザー・顧客</td>
                                <td>要件解釈の齟齬・ユーザビリティ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 1: DIFFERENCE
════════════════════════════════════════ */}
            <section id="difference">
                <div className="section-header">
                    <span className="section-num">STEP 01 — FUNCTIONAL vs INTEGRATION: KEY DIFFERENCES</span>
                    <h2>機能テスト vs 統合テスト — 核心的な違い</h2>
                    <div className="accent-line"></div>
                    <p>
                        初学者が最も混乱するポイント。「何をテストするか」の視点が根本的に異なります。
                    </p>
                </div>

                <div className="grid-2">
                    <div className="card" style={{borderColor: "rgba(129, 140, 248, 0.3)"}}>
                        <div
                            style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem"}}
                        >
                            <h3 style={{fontSize: "1rem", margin: "0"}}>
                                ⬜ 機能テスト（Functional Testing）
                            </h3>
                            <span className="badge badge-func">Black Box</span>
                        </div>
                        <p>
                            システムがビジネス要件・仕様書（SRS）に従って<strong
                                style={{color: "var(--color-text-primary)"}}
                                >正しく動作するか</strong
                            >を、エンドユーザーの視点から検証する。内部実装を知らずに入力と出力のみに着目。
                        </p>
                        <hr className="div" />
                        <div style={{fontSize: "13px", color: "var(--color-text-secondary)"}}>
                            <div>✓ 何が返るかをテスト（What）</div>
                            <div>✓ 内部構造は気にしない</div>
                            <div>✓ 仕様書から直接テストケースを設計</div>
                            <div>✓ モックで高速化可能</div>
                        </div>
                    </div>
                    <div className="card" style={{borderColor: "rgba(56, 189, 248, 0.3)"}}>
                        <div
                            style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem"}}
                        >
                            <h3 style={{fontSize: "1rem", margin: "0"}}>
                                ◈ 統合テスト（Integration Testing）
                            </h3>
                            <span className="badge badge-int">Grey Box</span>
                        </div>
                        <p>
                            個別コンポーネントを結合した際に<strong style={{color: "var(--color-text-primary)"}}
                                >シームレスに連携するか</strong
                            >を検証する。インターフェース・データフロー・通信プロトコルが中心。
                        </p>
                        <hr className="div" />
                        <div style={{fontSize: "13px", color: "var(--color-text-secondary)"}}>
                            <div>✓ どのように連携するかをテスト（How）</div>
                            <div>✓ コンポーネント間の境界に着目</div>
                            <div>✓ 実際のDB・API接続を使用</div>
                            <div>✓ 環境構築コストが高い</div>
                        </div>
                    </div>
                </div>

                {/* Comparison details */}
                <h3
                    className="mt4"
                    style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem"}}
                >
                    API開発における境界線
                </h3>
                <div
                    style={{background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-DEFAULT, 12px)", padding: "1.2rem"}}
                >
                    <div className="comp-row">
                        <div className="comp-label">検証内容</div>
                        <div className="comp-a">
                            <strong>機能テスト：</strong>
                            HTTPステータスコードが正しいか・レスポンスボディのスキーマが仕様通りか
                        </div>
                        <div className="comp-b">
                            <strong>統合テスト：</strong>
                            そのリクエストでDBに正しいデータが保存されたか・メッセージキューにイベントが発行されたか
                        </div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-label">依存関係</div>
                        <div className="comp-a">
                            <strong>機能テスト：</strong> モックを使って外部依存を切り離す
                        </div>
                        <div className="comp-b">
                            <strong>統合テスト：</strong>
                            実際のDB・キャッシュ・メッセージブローカーに接続
                        </div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-label">実行速度</div>
                        <div className="comp-a">
                            <strong style={{color: "var(--color-accent-green)"}}>高速</strong>（モックのため）
                        </div>
                        <div className="comp-b">
                            <strong style={{color: "var(--color-accent-orange)"}}>低速</strong
                            >（実コンポーネント接続のため）
                        </div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-label">発見できる<br />欠陥</div>
                        <div className="comp-a">
                            <strong>機能テスト：</strong>
                            ロジックの誤り・バリデーションの抜け・エラーメッセージの不正確さ
                        </div>
                        <div className="comp-b">
                            <strong>統合テスト：</strong>
                            データ型の不一致・トランザクション管理の欠陥・マイクロサービス間の通信エラー
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://totalshiftleft.ai/blog/functional-testing-vs-integration-testing"
                        className="ulink"
                        target="_blank"
                        >totalshiftleft.ai — Functional vs Integration Testing 2026</a
                    >
                    <a
                        href="https://www.testim.io/blog/integration-testing-vs-functional-testing/"
                        className="ulink"
                        target="_blank"
                        >testim.io — Integration Testing vs Functional Testing</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 2: FUNCTIONAL TESTING
════════════════════════════════════════ */}
            <section id="functional">
                <div className="section-header">
                    <span className="section-num">STEP 02 — ISTQB CTFL SECTION 2.3: FUNCTIONAL TESTING</span>
                    <h2>機能テスト（Functional Testing）</h2>
                    <div className="accent-line"></div>
                    <p>
                        ISTQBでは機能テストを「コンポーネントまたはシステムが指定された機能要件を満たしているかを評価するテスト」と定義します。すべてのテストレベルで実施可能です。
                    </p>
                </div>

                <div className="card-grid">
                    <div className="card">
                        <span className="card-icon">🎯</span>
                        <h3>機能テストの目的</h3>
                        <p>
                            入力に対して期待通りの出力が返るかを確認。仕様書・ユーザーストーリー・ユースケースを元にテストを設計する。「システムがすべきことをするか」の検証。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">📊</span>
                        <h3>機能適合性（ISO/IEC 25010）</h3>
                        <p>
                            機能テストは機能適合性（Functional
                            Suitability）品質特性に対応。機能完全性・機能正確性・機能適切性の3つのサブ特性を検証する。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">⚡</span>
                        <h3>非機能テストとの違い</h3>
                        <p>
                            機能テスト：「何を」するか（Correctness）<br />非機能テスト：「どのように」するか（Performance・Security・Usability）。両方が品質を決定する。
                        </p>
                    </div>
                </div>

                <div className="callout callout-info mt-3">
                    <strong>機能テストで検証する3つの観点：</strong><br />
                    <strong>1. 機能完全性（Completeness）</strong> —
                    仕様に記述された全機能が実装されているか<br />
                    <strong>2. 機能正確性（Correctness）</strong> —
                    各機能が仕様通りの結果を返すか<br />
                    <strong>3. 機能適切性（Appropriateness）</strong> —
                    機能がユーザーの目標達成に適切に貢献するか<br />
                    <a
                        href="https://www.istqb.com/certified-tester-foundation-level/"
                        className="ulink"
                        target="_blank"
                        >istqb.com — CTFL v4.0 詳細</a
                    >
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 3: BLACK BOX TECHNIQUES OVERVIEW
════════════════════════════════════════ */}
            <section id="blackbox">
                <div className="section-header">
                    <span className="section-num"
                        >STEP 03 — ISTQB CTFL CHAPTER 4: BLACK-BOX TEST TECHNIQUES</span
                    >
                    <h2>ブラックボックステスト設計技法</h2>
                    <div className="accent-line"></div>
                    <p>
                        ISTQBが定義する主要な4つのブラックボックス技法。機能テストの「テストケース設計」を体系化する核心スキルです。すべてを組み合わせることで高いカバレッジを効率的に達成できます。
                    </p>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>技法</th>
                                <th>ISTQB定義</th>
                                <th>最適なケース</th>
                                <th>テストケース数</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>同値クラス分析（EP）</strong></td>
                                <td>入力/出力を同一の動作を引き起こすグループに分割</td>
                                <td>値の範囲・カテゴリによる入力検証</td>
                                <td>クラス数 × 代表値1つ</td>
                            </tr>
                            <tr>
                                <td><strong>境界値分析（BVA）</strong></td>
                                <td>同値クラスの境界付近の値に着目</td>
                                <td>数値範囲・日付・文字数制限</td>
                                <td>境界値 × 2〜3（境界の内外）</td>
                            </tr>
                            <tr>
                                <td><strong>デシジョンテーブルテスト</strong></td>
                                <td>条件の組み合わせとアクションを表で管理</td>
                                <td>複数条件が絡む複雑なビジネスルール</td>
                                <td>条件数により2^n（縮小可能）</td>
                            </tr>
                            <tr>
                                <td><strong>状態遷移テスト</strong></td>
                                <td>システムの状態とイベントによる遷移を検証</td>
                                <td>ステータス管理・セッション・ワークフロー</td>
                                <td>状態数 × 遷移数（全パス/有効パス）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm mt-1">
                    参照:
                    <a
                        href="https://mastersoftwaretesting.com/testing-fundamentals/testing-techniques/black-box-testing"
                        className="ulink"
                        target="_blank"
                        >mastersoftwaretesting.com — Black-Box Testing Complete Guide (Jan 2026)</a
                    >
                    <a
                        href="https://www.testdevlab.com/blog/types-of-black-box-testing-techniques"
                        className="ulink"
                        target="_blank"
                        >testdevlab.com — Black Box Testing Techniques</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 4: EQUIVALENCE PARTITIONING
════════════════════════════════════════ */}
            <section id="ep">
                <div className="section-header">
                    <span className="section-num">STEP 04 — EQUIVALENCE PARTITIONING (EP)</span>
                    <h2>同値クラス分析（Equivalence Partitioning）</h2>
                    <div className="accent-line"></div>
                    <p>
                        入力データを「同じ動作を引き起こすグループ（クラス）」に分割し、各クラスの代表値1つでテストする手法。全入力を検証する代わりに最小限のテストケースで効率的にカバーできます。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <h3
                            style={{fontSize: "0.95rem", fontWeight: "700", fontFamily: "var(--font-display)", marginBottom: "0.75rem"}}
                        >
                            EP の2つのクラス
                        </h3>
                        <div className="step-list">
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{background: "rgba(74, 222, 128, 0.1)", borderColor: "rgba(74, 222, 128, 0.3)", color: "var(--color-accent-green)"}}
                                >
                                    ✓
                                </div>
                                <div className="step-content">
                                    <h4>有効クラス（Valid Equivalence Class）</h4>
                                    <p>
                                        システムが受け入れる正常な入力のグループ。このクラスの代表値でシステムが正しく動作するかを確認する。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{background: "rgba(248, 113, 113, 0.1)", borderColor: "rgba(248, 113, 113, 0.3)", color: "var(--color-accent-red)"}}
                                >
                                    ✗
                                </div>
                                <div className="step-content">
                                    <h4>無効クラス（Invalid Equivalence Class）</h4>
                                    <p>
                                        システムが拒否すべき不正な入力のグループ。適切なエラー処理（バリデーション）が行われるかを確認する。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="callout callout-warn mt-2">
                            <strong>重要な原則：</strong>
                            同じ有効クラス内の全ての値はシステムが同様に処理する。
                            1つの代表値でテストすれば、クラス全体を網羅したと見なせる（この前提が成立しない場合はリスクを別途評価）。
                        </div>
                    </div>
                    <div>
                        <h3
                            style={{fontSize: "0.95rem", fontWeight: "700", fontFamily: "var(--font-display)", marginBottom: "0.75rem"}}
                        >
                            実例：パスワード文字数（8〜20文字）
                        </h3>
                        <div className="table-wrapper">
                            <table className="ep-table">
                                <thead>
                                    <tr>
                                        <th>クラス</th>
                                        <th>範囲</th>
                                        <th>代表値</th>
                                        <th>期待動作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="invalid">無効クラス1</td>
                                        <td>&lt; 8文字</td>
                                        <td className="invalid">5</td>
                                        <td>エラー表示</td>
                                    </tr>
                                    <tr>
                                        <td className="valid">有効クラス</td>
                                        <td>8〜20文字</td>
                                        <td className="valid">12</td>
                                        <td>正常受付</td>
                                    </tr>
                                    <tr>
                                        <td className="invalid">無効クラス2</td>
                                        <td>&gt; 20文字</td>
                                        <td className="invalid">25</td>
                                        <td>エラー表示</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="code-block mt-2">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang">PYTHON / pytest — EP テストケース</span>
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"kw\">import</span> pytest\n<span class=\"kw\">from</span> app.validators <span class=\"kw\">import</span> validate_password\n\n<span class=\"dec\">@pytest.mark.parametrize</span>(<span class=\"str\">\"pw,expected\"</span>, [\n    <span class=\"cm\"># 無効クラス1: 短すぎる</span>\n    (<span class=\"str\">\"abc12\"</span>, <span class=\"cls\">False</span>),   <span class=\"cm\"># 5文字 → 無効</span>\n    <span class=\"cm\"># 有効クラス</span>\n    (<span class=\"str\">\"Secure123!\"</span>, <span class=\"cls\">True</span>),  <span class=\"cm\"># 10文字 → 有効</span>\n    <span class=\"cm\"># 無効クラス2: 長すぎる</span>\n    (<span class=\"str\">\"a\"</span> * <span class=\"num\">25</span>, <span class=\"cls\">False</span>),       <span class=\"cm\"># 25文字 → 無効</span>\n])\n<span class=\"kw\">def</span> <span class=\"fn\">test_password_ep</span>(pw, expected):\n    <span class=\"kw\">assert</span> <span class=\"fn\">validate_password</span>(pw) == expected" }} />
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://www.softwaretestinghelp.com/what-is-boundary-value-analysis-and-equivalence-partitioning/"
                        className="ulink"
                        target="_blank"
                        >softwaretestinghelp.com — EP & BVA (May 2025)</a
                    >
                    <a
                        href="https://www.geeksforgeeks.org/software-testing/software-testing-boundary-value-analysis-vs-equivalence-partitioning/"
                        className="ulink"
                        target="_blank"
                        >geeksforgeeks.org — BVA vs EP (Jul 2025)</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 5: BOUNDARY VALUE ANALYSIS
════════════════════════════════════════ */}
            <section id="bva">
                <div className="section-header">
                    <span className="section-num">STEP 05 — BOUNDARY VALUE ANALYSIS (BVA)</span>
                    <h2>境界値分析（Boundary Value Analysis）</h2>
                    <div className="accent-line"></div>
                    <p>
                        バグは境界付近に集中する。開発者が
                        <code style={{fontFamily: "var(--font-mono)", fontSize: "0.9em"}}>&gt; 10</code>
                        を
                        <code style={{fontFamily: "var(--font-mono)", fontSize: "0.9em"}}
                            >&gt;= 10</code
                        >
                        と書き間違えるなど、境界の内外で誤りが生じやすい。同値クラス分析の拡張として使用します。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <h3
                            style={{fontSize: "0.95rem", fontWeight: "700", fontFamily: "var(--font-display)", marginBottom: "0.75rem"}}
                        >
                            2値 vs 3値 境界値分析
                        </h3>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>種類</th>
                                        <th>テストする値</th>
                                        <th>推奨場面</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>2値BVA</strong></td>
                                        <td>最小値・最大値（境界上の値）</td>
                                        <td>リスクが低いケース</td>
                                    </tr>
                                    <tr>
                                        <td><strong>3値BVA</strong></td>
                                        <td>境界-1・境界・境界+1</td>
                                        <td>リスクが高いケース（推奨）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3
                            className="mt3"
                            style={{fontSize: "0.95rem", fontWeight: "700", fontFamily: "var(--font-display)", marginBottom: "0.75rem"}}
                        >
                            実例：年齢入力（16〜60歳）
                        </h3>
                        <div className="table-wrapper">
                            <table className="ep-table">
                                <thead>
                                    <tr>
                                        <th>値</th>
                                        <th>種類</th>
                                        <th>期待動作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="invalid">15</td>
                                        <td>境界-1（無効）</td>
                                        <td>エラー</td>
                                    </tr>
                                    <tr>
                                        <td className="boundary">16</td>
                                        <td>最小境界値（有効）</td>
                                        <td>受付</td>
                                    </tr>
                                    <tr>
                                        <td className="valid">17</td>
                                        <td>境界+1（有効）</td>
                                        <td>受付</td>
                                    </tr>
                                    <tr>
                                        <td className="valid">30</td>
                                        <td>中央値（有効）</td>
                                        <td>受付</td>
                                    </tr>
                                    <tr>
                                        <td className="valid">59</td>
                                        <td>境界-1（有効）</td>
                                        <td>受付</td>
                                    </tr>
                                    <tr>
                                        <td className="boundary">60</td>
                                        <td>最大境界値（有効）</td>
                                        <td>受付</td>
                                    </tr>
                                    <tr>
                                        <td className="invalid">61</td>
                                        <td>境界+1（無効）</td>
                                        <td>エラー</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <div className="code-block mt-1">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang">TYPESCRIPT / Jest — 境界値テスト</span>
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"cm\">// テスト対象: calculateDiscount(amount: number)</span>\n<span class=\"cm\">// ルール: amount &lt; 100 → 0%, 100〜499 → 10%, 500以上 → 20%</span>\n\n<span class=\"fn\">describe</span>(<span class=\"str\">'calculateDiscount — 境界値分析'</span>, () => {\n  <span class=\"cm\">// ── 境界①: 100 ──────────────────</span>\n  <span class=\"fn\">it</span>(<span class=\"str\">'99円 → 0%割引（境界-1）'</span>, () =>\n    <span class=\"fn\">expect</span>(<span class=\"fn\">calculateDiscount</span>(<span class=\"num\">99</span>)).<span class=\"fn\">toBe</span>(<span class=\"num\">0</span>)\n  );\n  <span class=\"fn\">it</span>(<span class=\"str\">'100円 → 10%割引（境界値）'</span>, () =>\n    <span class=\"fn\">expect</span>(<span class=\"fn\">calculateDiscount</span>(<span class=\"num\">100</span>)).<span class=\"fn\">toBe</span>(<span class=\"num\">10</span>)\n  );\n  <span class=\"fn\">it</span>(<span class=\"str\">'101円 → 10%割引（境界+1）'</span>, () =>\n    <span class=\"fn\">expect</span>(<span class=\"fn\">calculateDiscount</span>(<span class=\"num\">101</span>)).<span class=\"fn\">toBe</span>(<span class=\"num\">10.1</span>)\n  );\n\n  <span class=\"cm\">// ── 境界②: 500 ──────────────────</span>\n  <span class=\"fn\">it</span>(<span class=\"str\">'499円 → 10%割引（境界-1）'</span>, () =>\n    <span class=\"fn\">expect</span>(<span class=\"fn\">calculateDiscount</span>(<span class=\"num\">499</span>)).<span class=\"fn\">toBe</span>(<span class=\"num\">49.9</span>)\n  );\n  <span class=\"fn\">it</span>(<span class=\"str\">'500円 → 20%割引（境界値）'</span>, () =>\n    <span class=\"fn\">expect</span>(<span class=\"fn\">calculateDiscount</span>(<span class=\"num\">500</span>)).<span class=\"fn\">toBe</span>(<span class=\"num\">100</span>)\n  );\n  <span class=\"fn\">it</span>(<span class=\"str\">'501円 → 20%割引（境界+1）'</span>, () =>\n    <span class=\"fn\">expect</span>(<span class=\"fn\">calculateDiscount</span>(<span class=\"num\">501</span>)).<span class=\"fn\">toBe</span>(<span class=\"num\">100.2</span>)\n  );\n});" }} />
                        </div>
                        <div className="callout callout-info mt-2" style={{fontSize: "12px"}}>
                            <strong>EP + BVA の黄金の組み合わせ：</strong>
                            EP で有効・無効クラスを特定 → BVA で各クラスの境界値を追加。
                            この2つを組み合わせることで、最小のテストケースで最大のカバレッジを達成できます。
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://toolsqa.com/software-testing/istqb/boundary-value-analysis/"
                        className="ulink"
                        target="_blank"
                        >toolsqa.com — BVA ISTQB Guide</a
                    >
                    <a
                        href="https://www.geeksforgeeks.org/software-testing/software-testing-boundary-value-analysis/"
                        className="ulink"
                        target="_blank"
                        >geeksforgeeks.org — BVA (Jul 2025)</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 6: DECISION TABLE
════════════════════════════════════════ */}
            <section id="decision">
                <div className="section-header">
                    <span className="section-num">STEP 06 — DECISION TABLE TESTING</span>
                    <h2>デシジョンテーブルテスト（Decision Table Testing）</h2>
                    <div className="accent-line"></div>
                    <p>
                        複数の条件の組み合わせとそれに対応するアクションを表で管理する技法。ビジネスルールが複雑で複数の条件が絡む場合に特に有効です。ISTQBでは「仕様ベースのテスト技法」として位置付けられています。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <h3
                            style={{fontSize: "0.95rem", fontWeight: "700", fontFamily: "var(--font-display)", marginBottom: "0.75rem"}}
                        >
                            デシジョンテーブルの構造
                        </h3>
                        <div className="step-list">
                            <div className="step-item">
                                <div className="step-num-circle">①</div>
                                <div className="step-content">
                                    <h4>条件（Conditions）</h4>
                                    <p>
                                        テスト対象に影響する入力・状態。各条件はTrue/Falseまたは具体値を取る。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">②</div>
                                <div className="step-content">
                                    <h4>アクション（Actions）</h4>
                                    <p>
                                        条件の組み合わせに対応するシステムの動作・出力。テストの期待値となる。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">③</div>
                                <div className="step-content">
                                    <h4>ルール（Rules）</h4>
                                    <p>
                                        条件の特定の組み合わせとそれに対応するアクションのセット。n条件で最大2^nルール。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="callout callout-warn mt-2" style={{fontSize: "12px"}}>
                            <strong>縮小テクニック：</strong>
                            n=5 条件で 2^5=32 ルール → 不可能な組み合わせを排除 →
                            同一結果の行をマージ →
                            リスクベースで高優先度ルールを選択することで実用的なテストケース数に縮小する。
                        </div>
                    </div>
                    <div>
                        <h3
                            style={{fontSize: "0.95rem", fontWeight: "700", fontFamily: "var(--font-display)", marginBottom: "0.75rem"}}
                        >
                            実例：ECサイトの割引判定
                        </h3>
                        <div className="dt-wrap">
                            <table className="dt">
                                <thead>
                                    <tr>
                                        <th className="dt-section" colSpan={1}>条件 / アクション</th>
                                        <th>R1</th>
                                        <th>R2</th>
                                        <th>R3</th>
                                        <th>R4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="cond-label">会員か？</td>
                                        <td className="yes">Y</td>
                                        <td className="yes">Y</td>
                                        <td className="no">N</td>
                                        <td className="no">N</td>
                                    </tr>
                                    <tr>
                                        <td className="cond-label">¥5,000以上か？</td>
                                        <td className="yes">Y</td>
                                        <td className="no">N</td>
                                        <td className="yes">Y</td>
                                        <td className="no">N</td>
                                    </tr>
                                    <tr style={{borderTop: "1px solid rgba(56, 189, 248, 0.3)"}}>
                                        <td className="act-label">→ 割引率</td>
                                        <td className="action-yes">20%</td>
                                        <td className="action-yes">10%</td>
                                        <td className="action-yes">5%</td>
                                        <td className="action-no">0%</td>
                                    </tr>
                                    <tr>
                                        <td className="act-label">→ 送料無料</td>
                                        <td className="action-yes">✓</td>
                                        <td className="action-no">✗</td>
                                        <td className="action-yes">✓</td>
                                        <td className="action-no">✗</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="code-block mt-2">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang"
                                    >PYTHON — デシジョンテーブルのパラメータ化テスト</span
                                >
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"dec\">@pytest.mark.parametrize</span>(\n  <span class=\"str\">\"is_member,amount,expected_discount,free_ship\"</span>, [\n    (<span class=\"cls\">True</span>,  <span class=\"num\">5000</span>, <span class=\"num\">0.20</span>, <span class=\"cls\">True</span>),  <span class=\"cm\"># R1</span>\n    (<span class=\"cls\">True</span>,  <span class=\"num\">3000</span>, <span class=\"num\">0.10</span>, <span class=\"cls\">False</span>), <span class=\"cm\"># R2</span>\n    (<span class=\"cls\">False</span>, <span class=\"num\">5000</span>, <span class=\"num\">0.05</span>, <span class=\"cls\">True</span>),  <span class=\"cm\"># R3</span>\n    (<span class=\"cls\">False</span>, <span class=\"num\">3000</span>, <span class=\"num\">0.00</span>, <span class=\"cls\">False</span>), <span class=\"cm\"># R4</span>\n])\n<span class=\"kw\">def</span> <span class=\"fn\">test_discount_rules</span>(is_member, amount,\n                         expected_discount, free_ship):\n    result = <span class=\"fn\">calculate_order</span>(is_member, amount)\n    <span class=\"kw\">assert</span> result.discount == expected_discount\n    <span class=\"kw\">assert</span> result.free_shipping == free_ship" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 7: STATE TRANSITION
════════════════════════════════════════ */}
            <section id="state">
                <div className="section-header">
                    <span className="section-num">STEP 07 — STATE TRANSITION TESTING</span>
                    <h2>状態遷移テスト（State Transition Testing）</h2>
                    <div className="accent-line"></div>
                    <p>
                        システムが取り得る「状態」と「イベント」による遷移を図で表現し、テストケースを設計する技法。注文ステータス・ログインセッション・ワークフローなどに有効です。
                    </p>
                </div>

                <h3
                    style={{fontSize: "0.95rem", fontWeight: "700", fontFamily: "var(--font-display)", marginBottom: "0.75rem"}}
                >
                    実例：ECサイト注文ステータスの状態遷移
                </h3>
                <div className="state-diagram">
                    <div className="state-node">新規注文</div>
                    <span className="state-arrow">──</span>
                    <div style={{textAlign: "center"}}>
                        <div className="state-label">支払完了</div>
                        <span className="state-arrow">→</span>
                    </div>
                    <div className="state-node">承認待ち</div>
                    <span className="state-arrow">──</span>
                    <div style={{textAlign: "center"}}>
                        <div className="state-label">承認</div>
                        <span className="state-arrow">→</span>
                    </div>
                    <div className="state-node">処理中</div>
                    <span className="state-arrow">──</span>
                    <div style={{textAlign: "center"}}>
                        <div className="state-label">発送</div>
                        <span className="state-arrow">→</span>
                    </div>
                    <div className="state-node">配送中</div>
                    <span className="state-arrow">──</span>
                    <div style={{textAlign: "center"}}>
                        <div className="state-label">受取</div>
                        <span className="state-arrow">→</span>
                    </div>
                    <div
                        className="state-node"
                        style={{borderColor: "rgba(74, 222, 128, 0.4)", color: "var(--color-accent-green)"}}
                    >
                        完了
                    </div>
                </div>

                <div className="table-wrapper mt-3">
                    <table>
                        <thead>
                            <tr>
                                <th>現在の状態</th>
                                <th>イベント（トリガー）</th>
                                <th>次の状態</th>
                                <th>テストケース</th>
                                <th>有効？</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>新規注文</strong></td>
                                <td>支払完了</td>
                                <td>承認待ち</td>
                                <td>有効な遷移を確認</td>
                                <td className="g">✓ 有効</td>
                            </tr>
                            <tr>
                                <td><strong>新規注文</strong></td>
                                <td>キャンセル</td>
                                <td>キャンセル済</td>
                                <td>キャンセル遷移を確認</td>
                                <td className="g">✓ 有効</td>
                            </tr>
                            <tr>
                                <td><strong>新規注文</strong></td>
                                <td>発送（スキップ）</td>
                                <td>—</td>
                                <td>不正遷移のエラーを確認</td>
                                <td style={{color: "var(--color-accent-red)"}}>✗ 無効</td>
                            </tr>
                            <tr>
                                <td><strong>承認待ち</strong></td>
                                <td>承認</td>
                                <td>処理中</td>
                                <td>正常承認フローを確認</td>
                                <td className="g">✓ 有効</td>
                            </tr>
                            <tr>
                                <td><strong>承認待ち</strong></td>
                                <td>拒否</td>
                                <td>キャンセル済</td>
                                <td>拒否フローを確認</td>
                                <td className="g">✓ 有効</td>
                            </tr>
                            <tr>
                                <td><strong>完了</strong></td>
                                <td>支払（再実行）</td>
                                <td>—</td>
                                <td>完了後の操作不可を確認</td>
                                <td style={{color: "var(--color-accent-red)"}}>✗ 無効</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid-2 mt-3">
                    <div>
                        <div className="callout callout-info">
                            <strong>ISTQB 2つのカバレッジ基準：</strong><br />
                            <strong>① 全状態カバレッジ：</strong
                            >全ての状態を最低1回通過する（最小限）<br />
                            <strong>② 全遷移カバレッジ：</strong
                            >全ての有効遷移を実行する（推奨）<br />
                            高リスクシステムでは無効遷移（ガード条件）のテストも必須。
                        </div>
                    </div>
                    <div>
                        <div className="code-block">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang">PYTHON — 状態遷移テスト</span>
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"kw\">def</span> <span class=\"fn\">test_注文完了後_再支払不可</span>(order_service):\n    <span class=\"cm\"># 注文を完了状態まで遷移</span>\n    order = order_service.<span class=\"fn\">create_order</span>(items=[...])\n    order_service.<span class=\"fn\">pay</span>(order.id)\n    order_service.<span class=\"fn\">approve</span>(order.id)\n    order_service.<span class=\"fn\">ship</span>(order.id)\n    order_service.<span class=\"fn\">deliver</span>(order.id)\n\n    <span class=\"cm\"># 完了状態からの不正遷移を確認</span>\n    <span class=\"kw\">with</span> pytest.raises(<span class=\"cls\">InvalidStateTransition</span>):\n        order_service.<span class=\"fn\">pay</span>(order.id)  <span class=\"cm\"># 無効遷移</span>" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 8: INTEGRATION TESTING
════════════════════════════════════════ */}
            <section id="integration">
                <div className="section-header">
                    <span className="section-num">STEP 08 — ISTQB CTFL: INTEGRATION TESTING</span>
                    <h2>インテグレーションテスト（Integration Testing）</h2>
                    <div className="accent-line"></div>
                    <p>
                        コンポーネント統合テスト（Component Integration
                        Testing）とシステム統合テスト（System Integration
                        Testing）の2種類をISTQBは定義します。それぞれの目的と対象を明確に理解することが重要です。
                    </p>
                </div>

                <div className="grid-2">
                    <div className="card" style={{borderLeft: "3px solid var(--color-accent-blue)"}}>
                        <h3>コンポーネント統合テスト (CIT)</h3>
                        <p>
                            ユニットテスト後に実施。個別モジュール間のインターフェース・データフロー・関数呼び出しを検証。開発者が主に実施。
                        </p>
                        <hr className="div" />
                        <div style={{fontSize: "12.5px", color: "var(--color-text-secondary)"}}>
                            <div className="flex items-center gap-1 mt-1">
                                ⚡ <span>主な欠陥：データ型の不一致・APIシグネチャの誤り</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                                🔧 <span>ツール：pytest + TestClient, Spring Boot Test</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                                📈 <span>環境：テスト用DB（インメモリ / コンテナ）</span>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{borderLeft: "3px solid var(--color-accent-cyan)"}}>
                        <h3>システム統合テスト (SIT)</h3>
                        <p>
                            複数システム・外部API・マイクロサービス間の連携を検証。テスターが主に実施。本番に近い環境で実施する。
                        </p>
                        <hr className="div" />
                        <div style={{fontSize: "12.5px", color: "var(--color-text-secondary)"}}>
                            <div className="flex items-center gap-1 mt-1">
                                🌐 <span>主な欠陥：通信プロトコルの不一致・認証エラー</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                                🔧 <span>ツール：Postman, REST Assured, Pact</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                                📈 <span>環境：ステージング環境・Docker Compose</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Common Defects */}
                <h3
                    className="mt4"
                    style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem"}}
                >
                    統合テストで発見できる典型的な欠陥（ISTQB参照）
                </h3>
                <div className="card-grid">
                    <div className="card-sm">
                        <div
                            style={{fontSize: "12px", fontWeight: "700", color: "var(--color-accent-red)", marginBottom: "4px"}}
                        >
                            データ問題
                        </div>
                        <div style={{fontSize: "12px", color: "var(--color-text-secondary)"}}>
                            型の不一致（int vs
                            string）・NULL値の扱い・エンコーディング差異・日付フォーマットの違い
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{fontSize: "12px", fontWeight: "700", color: "var(--color-accent-orange)", marginBottom: "4px"}}
                        >
                            インターフェース問題
                        </div>
                        <div style={{fontSize: "12px", color: "var(--color-text-secondary)"}}>
                            APIシグネチャの不一致・HTTPメソッドの誤り・必須フィールドの欠落・スキーマの非互換性
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{fontSize: "12px", fontWeight: "700", color: "var(--color-accent-purple)", marginBottom: "4px"}}
                        >
                            タイミング問題
                        </div>
                        <div style={{fontSize: "12px", color: "var(--color-text-secondary)"}}>
                            タイムアウト・レースコンディション・非同期処理の結果が揃う前のアクセス
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{fontSize: "12px", fontWeight: "700", color: "var(--color-accent-blue)", marginBottom: "4px"}}
                        >
                            セキュリティ問題
                        </div>
                        <div style={{fontSize: "12px", color: "var(--color-text-secondary)"}}>
                            認証トークンの未送信・権限の誤り・クロスサービスのデータ漏洩
                        </div>
                    </div>
                </div>

                {/* Code example */}
                <div className="code-block mt-3">
                    <div className="code-header">
                        <div className="code-dots"><span></span><span></span><span></span></div>
                        <span className="code-lang"
                            >PYTHON / pytest + FastAPI — コンポーネント統合テスト実例</span
                        >
                    </div>
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"cm\">\"\"\"\nコンポーネント統合テスト: APIエンドポイント + DB の連携検証\n- HTTPリクエストを実際に送信（TestClient経由）\n- テスト専用DBに実際に書き込む（インメモリSQLite）\n- ユニットテストとは違い、モックは使わない\n\"\"\"</span>\n<span class=\"kw\">import</span> pytest\n<span class=\"kw\">from</span> fastapi.testclient <span class=\"kw\">import</span> TestClient\n<span class=\"kw\">from</span> sqlalchemy <span class=\"kw\">import</span> create_engine\n<span class=\"kw\">from</span> app.main <span class=\"kw\">import</span> app\n<span class=\"kw\">from</span> app.database <span class=\"kw\">import</span> Base, get_db\n\n<span class=\"cm\"># ── テスト用 DB セットアップ ──</span>\n<span class=\"dec\">@pytest.fixture</span>(scope=<span class=\"str\">\"function\"</span>)\n<span class=\"kw\">def</span> <span class=\"fn\">test_db</span>():\n    engine = <span class=\"fn\">create_engine</span>(<span class=\"str\">\"sqlite:///:memory:\"</span>)\n    Base.metadata.<span class=\"fn\">create_all</span>(engine)\n    <span class=\"kw\">yield</span> engine\n    Base.metadata.<span class=\"fn\">drop_all</span>(engine)\n\n<span class=\"dec\">@pytest.fixture</span>\n<span class=\"kw\">def</span> <span class=\"fn\">client</span>(test_db):\n    app.dependency_overrides[get_db] = <span class=\"kw\">lambda</span>: test_db\n    <span class=\"kw\">with</span> <span class=\"cls\">TestClient</span>(app) <span class=\"kw\">as</span> c:\n        <span class=\"kw\">yield</span> c\n    app.dependency_overrides = {}\n\n<span class=\"cm\"># ── 統合テスト: POST /orders ──</span>\n<span class=\"kw\">class</span> <span class=\"cls\">TestOrderIntegration</span>:\n    <span class=\"kw\">def</span> <span class=\"fn\">test_注文作成_DBに正しく保存される</span>(<span class=\"dec\">self</span>, client, test_db):\n        <span class=\"cm\"># Act: HTTPリクエスト送信（実際のAPIを呼ぶ）</span>\n        res = client.<span class=\"fn\">post</span>(<span class=\"str\">\"/api/orders\"</span>, json={\n            <span class=\"str\">\"product_id\"</span>: <span class=\"num\">1</span>, <span class=\"str\">\"quantity\"</span>: <span class=\"num\">2</span>, <span class=\"str\">\"user_id\"</span>: <span class=\"num\">42</span>\n        })\n\n        <span class=\"cm\"># Assert: HTTPレスポンス</span>\n        <span class=\"kw\">assert</span> res.status_code == <span class=\"num\">201</span>\n        data = res.<span class=\"fn\">json</span>()\n        <span class=\"kw\">assert</span> data[<span class=\"str\">\"status\"</span>] == <span class=\"str\">\"pending\"</span>\n        <span class=\"kw\">assert</span> data[<span class=\"str\">\"total_price\"</span>] > <span class=\"num\">0</span>\n\n        <span class=\"cm\"># Assert: DB実際のデータを確認（統合テストの核心）</span>\n        order_in_db = test_db.<span class=\"fn\">query</span>(<span class=\"cls\">Order</span>).<span class=\"fn\">get</span>(data[<span class=\"str\">\"id\"</span>])\n        <span class=\"kw\">assert</span> order_in_db <span class=\"kw\">is not</span> <span class=\"cls\">None</span>\n        <span class=\"kw\">assert</span> order_in_db.quantity == <span class=\"num\">2</span>\n\n    <span class=\"kw\">def</span> <span class=\"fn\">test_在庫不足_409を返しDBは更新されない</span>(<span class=\"dec\">self</span>, client, test_db):\n        res = client.<span class=\"fn\">post</span>(<span class=\"str\">\"/api/orders\"</span>, json={\n            <span class=\"str\">\"product_id\"</span>: <span class=\"num\">1</span>, <span class=\"str\">\"quantity\"</span>: <span class=\"num\">99999</span>\n        })\n        <span class=\"kw\">assert</span> res.status_code == <span class=\"num\">409</span>\n        <span class=\"cm\"># DBは変更されていないことを確認</span>\n        <span class=\"kw\">assert</span> test_db.<span class=\"fn\">query</span>(<span class=\"cls\">Order</span>).<span class=\"fn\">count</span>() == <span class=\"num\">0</span>" }} />
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 9: INTEGRATION STRATEGIES
════════════════════════════════════════ */}
            <section id="strategies">
                <div className="section-header">
                    <span className="section-num">STEP 09 — INTEGRATION STRATEGIES</span>
                    <h2>結合テスト戦略 — 4つのアプローチ</h2>
                    <div className="accent-line"></div>
                    <p>
                        どの順序でコンポーネントを結合してテストするか。ISTQB
                        は増分的（インクリメンタル）なアプローチを推奨しています。各戦略には特有のトレードオフがあります。
                    </p>
                </div>

                <div className="strategy-wrap">
                    <div className="strategy-card">
                        <div className="flex items-center gap-1" style={{marginBottom: "0.6rem"}}>
                            <span className="badge bg-accent-green\/10 text-\[var\(--color-accent-green\)\] border-\[rgba\(104\,211\,145\,0\.3\)\]">推奨</span>
                            <div className="strategy-title">⬇ トップダウン統合</div>
                        </div>
                        <span className="strategy-tag" style={{color: "var(--color-accent-green)"}}
                            >Top-Down Integration</span
                        >
                        <div style={{fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: "1.7"}}>
                            最上位コンポーネントから順に下位へ結合。下位未実装部分には<strong
                                style={{color: "var(--color-text-primary)"}}
                                >スタブ（Stub）</strong
                            >を使用。<br />
                            <div className="flex items-center gap-1 mt-1" style={{fontSize: "12px"}}>
                                <span style={{color: "var(--color-accent-green)"}}>✓</span
                                ><span>主要なビジネスフローを早期に確認できる</span>
                            </div>
                            <div className="flex items-center gap-1" style={{fontSize: "12px"}}>
                                <span style={{color: "var(--color-accent-red)"}}>✗</span
                                ><span>スタブの作成コストが高い</span>
                            </div>
                        </div>
                    </div>
                    <div className="strategy-card">
                        <div className="flex items-center gap-1" style={{marginBottom: "0.6rem"}}>
                            <span className="badge badge-int">実践向き</span>
                            <div className="strategy-title">⬆ ボトムアップ統合</div>
                        </div>
                        <span className="strategy-tag" style={{color: "var(--color-accent-blue)"}}
                            >Bottom-Up Integration</span
                        >
                        <div style={{fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: "1.7"}}>
                            最下位コンポーネントから順に上位へ結合。上位未実装部分には<strong
                                style={{color: "var(--color-text-primary)"}}
                                >ドライバ（Driver）</strong
                            >を使用。<br />
                            <div className="flex items-center gap-1 mt-1" style={{fontSize: "12px"}}>
                                <span style={{color: "var(--color-accent-green)"}}>✓</span
                                ><span>低レベルの動作を早期に確認できる</span>
                            </div>
                            <div className="flex items-center gap-1" style={{fontSize: "12px"}}>
                                <span style={{color: "var(--color-accent-red)"}}>✗</span
                                ><span>UIなどの高レベル検証が後回しになる</span>
                            </div>
                        </div>
                    </div>
                    <div className="strategy-card">
                        <div className="flex items-center gap-1" style={{marginBottom: "0.6rem"}}>
                            <span className="badge badge-e2e">注意</span>
                            <div className="strategy-title">💥 ビッグバン統合</div>
                        </div>
                        <span className="strategy-tag" style={{color: "var(--color-accent-orange)"}}
                            >Big Bang Integration</span
                        >
                        <div style={{fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: "1.7"}}>
                            全コンポーネントを一度に結合してテスト。<br />
                            <div className="flex items-center gap-1 mt-1" style={{fontSize: "12px"}}>
                                <span style={{color: "var(--color-accent-green)"}}>✓</span
                                ><span>小規模プロジェクトでは迅速</span>
                            </div>
                            <div className="flex items-center gap-1" style={{fontSize: "12px"}}>
                                <span style={{color: "var(--color-accent-red)"}}>✗</span
                                ><span>欠陥の原因特定が困難・リスク大</span>
                            </div>
                        </div>
                    </div>
                    <div className="strategy-card">
                        <div className="flex items-center gap-1" style={{marginBottom: "0.6rem"}}>
                            <span className="badge badge-int">現代的</span>
                            <div className="strategy-title">🔄 継続的統合（CI）</div>
                        </div>
                        <span className="strategy-tag" style={{color: "var(--color-accent-cyan)"}}
                            >Continuous Integration</span
                        >
                        <div style={{fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: "1.7"}}>
                            コードプッシュごとに自動的に統合・テスト。DevOpsの中核。<br />
                            <div className="flex items-center gap-1 mt-1" style={{fontSize: "12px"}}>
                                <span style={{color: "var(--color-accent-green)"}}>✓</span
                                ><span>問題の早期発見・自動化による効率化</span>
                            </div>
                            <div className="flex items-center gap-1" style={{fontSize: "12px"}}>
                                <span style={{color: "var(--color-accent-red)"}}>✗</span
                                ><span>CI環境整備・テスト実行時間の最適化が必要</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 10: API TESTING
════════════════════════════════════════ */}
            <section id="api">
                <div className="section-header">
                    <span className="section-num">STEP 10 — API INTEGRATION TESTING</span>
                    <h2>APIテスト — 統合テストの現代的な中心</h2>
                    <div className="accent-line"></div>
                    <p>
                        マイクロサービス・API-first
                        開発が主流の2025年、APIテストは統合テストの最重要領域です。機能テスト（仕様の検証）と統合テスト（サービス間連携の検証）の両方の性質を持ちます。
                    </p>
                </div>

                {/* API Testing Framework */}
                <h3
                    style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem"}}
                >
                    APIテストの4段階フレームワーク（2025年）
                </h3>
                <div className="step-list">
                    <div className="step-item">
                        <div
                            className="step-num-circle"
                            style={{background: "rgba(74, 222, 128, 0.1)", borderColor: "rgba(74, 222, 128, 0.3)", color: "var(--color-accent-green)"}}
                        >
                            1
                        </div>
                        <div className="step-content">
                            <h4>コントラクトテスト（Pre-Build）</h4>
                            <p>
                                APIのプロバイダーとコンシューマー間の「契約」を検証。ビルド前に実行することで最も早い段階で不整合を検出できる。Pact・Specmaticが代表ツール。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div
                            className="step-num-circle"
                            style={{background: "rgba(56, 189, 248, 0.1)", borderColor: "rgba(56, 189, 248, 0.3)", color: "var(--color-accent-blue)"}}
                        >
                            2
                        </div>
                        <div className="step-content">
                            <h4>統合テスト（Post-Commit）</h4>
                            <p>
                                コミット後に複数のエンドポイントを組み合わせたフローを検証。5分以内に完了する軽量な統合テストを実行。Postman
                                Collections・REST Assuredが最適。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div
                            className="step-num-circle"
                            style={{background: "rgba(245, 158, 11, 0.1)", borderColor: "rgba(245, 158, 11, 0.3)", color: "var(--color-accent-orange)"}}
                        >
                            3
                        </div>
                        <div className="step-content">
                            <h4>パフォーマンステスト（Pre-Release）</h4>
                            <p>
                                リリース前に応答時間・スループット・エラー率のベースラインを計測・検証。k6・Gatling・JMeterを使用。
                            </p>
                        </div>
                    </div>
                    <div className="step-item">
                        <div
                            className="step-num-circle"
                            style={{background: "rgba(248, 113, 113, 0.1)", borderColor: "rgba(248, 113, 113, 0.3)", color: "var(--color-accent-red)"}}
                        >
                            4
                        </div>
                        <div className="step-content">
                            <h4>セキュリティテスト（継続的）</h4>
                            <p>
                                認証・認可・インジェクション・データ漏洩を継続的に検証。OWASP
                                ZAP・Burp Suiteを使用。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Postman / REST Assured example */}
                <div className="grid-2 mt-3">
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: "700", marginBottom: "0.75rem"}}
                        >
                            Postman — フロー統合テスト例
                        </h3>
                        <div className="code-block">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang">JavaScript / Postman Test Script</span>
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"cm\">// Postman Tests タブ（Pre-requestで変数設定）</span>\n<span class=\"cm\">// Step 1: ユーザー登録</span>\n<span class=\"kw\">const</span> res = pm.response.<span class=\"fn\">json</span>();\npm.test(<span class=\"str\">\"登録成功: 201\"</span>, () => {\n  pm.response.<span class=\"fn\">to</span>.<span class=\"fn\">have</span>.<span class=\"fn\">status</span>(<span class=\"num\">201</span>);\n});\npm.test(<span class=\"str\">\"レスポンスにuserIdが含まれる\"</span>, () => {\n  pm.<span class=\"fn\">expect</span>(res).to.<span class=\"fn\">have</span>.<span class=\"fn\">property</span>(<span class=\"str\">\"userId\"</span>);\n});\n<span class=\"cm\">// 次のリクエスト（ログイン）に userId を渡す</span>\npm.collectionVariables.<span class=\"fn\">set</span>(<span class=\"str\">\"userId\"</span>, res.userId);\n\n<span class=\"cm\">// Step 2: ログイン → トークン取得</span>\n<span class=\"cm\">// Step 3: 認証済みAPIでデータ取得</span>\npm.test(<span class=\"str\">\"認証APIが正しいデータを返す\"</span>, () => {\n  <span class=\"kw\">const</span> data = pm.response.<span class=\"fn\">json</span>();\n  pm.<span class=\"fn\">expect</span>(data.userId).<span class=\"fn\">to</span>.<span class=\"fn\">equal</span>(\n    pm.collectionVariables.<span class=\"fn\">get</span>(<span class=\"str\">\"userId\"</span>)\n  );\n});" }} />
                        </div>
                    </div>
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: "700", marginBottom: "0.75rem"}}
                        >
                            REST Assured — Java BDD スタイル
                        </h3>
                        <div className="code-block">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang">JAVA / REST Assured</span>
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"kw\">import static</span> io.restassured.RestAssured.*;\n<span class=\"kw\">import static</span> org.hamcrest.Matchers.*;\n\n<span class=\"dec\">@Test</span>\n<span class=\"kw\">public void</span> <span class=\"fn\">test注文作成API_正常系</span>() {\n  <span class=\"cm\">// Given: テストデータの準備</span>\n  String payload = <span class=\"str\">\"\"\"\n    {\"product_id\": 1, \"quantity\": 2}\n  \"\"\"</span>;\n\n  <span class=\"cm\">// When + Then: BDDスタイルで検証</span>\n  <span class=\"fn\">given</span>()\n    .header(<span class=\"str\">\"Authorization\"</span>, <span class=\"str\">\"Bearer \"</span> + token)\n    .contentType(<span class=\"str\">\"application/json\"</span>)\n    .body(payload)\n  .<span class=\"fn\">when</span>()\n    .<span class=\"fn\">post</span>(<span class=\"str\">\"/api/orders\"</span>)\n  .<span class=\"fn\">then</span>()\n    .statusCode(<span class=\"num\">201</span>)\n    .body(<span class=\"str\">\"status\"</span>, equalTo(<span class=\"str\">\"pending\"</span>))\n    .body(<span class=\"str\">\"total_price\"</span>, greaterThan(<span class=\"num\">0</span>))\n    .body(<span class=\"str\">\"order_id\"</span>, notNullValue());\n}" }} />
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://www.thirstysprout.com/post/restful-api-testing"
                        className="ulink"
                        target="_blank"
                        >thirstysprout.com — RESTful API Testing Guide 2025</a
                    >
                    <a
                        href="https://www.postman.com/templates/collections/integration-testing/"
                        className="ulink"
                        target="_blank"
                        >postman.com — Integration Testing Template</a
                    >
                    <a
                        href="https://blog.testunity.com/choosing-the-right-api-testing-tool-postman-vs-rest-assured/"
                        className="ulink"
                        target="_blank"
                        >testunity.com — Postman vs REST Assured (Oct 2025)</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 11: CONTRACT TESTING
════════════════════════════════════════ */}
            <section id="contract">
                <div className="section-header">
                    <span className="section-num">STEP 11 — CONTRACT TESTING (CONSUMER-DRIVEN)</span>
                    <h2>コントラクトテスト — マイクロサービス時代の統合検証</h2>
                    <div className="accent-line"></div>
                    <p>
                        マイクロサービス・分散アーキテクチャでは、フル統合環境なしでサービス間の互換性を検証する「コントラクトテスト」が2025年の標準プラクティスになっています。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: "700", marginBottom: "0.75rem"}}
                        >
                            コントラクトテストとは？
                        </h3>
                        <div className="callout callout-info">
                            <strong>定義：</strong
                            >APIプロバイダーとコンシューマーの間で「契約（Contract）」を定義し、
                            それぞれが独立して契約に準拠しているかを検証するテスト手法。
                            フル統合環境が不要なため、CI/CDパイプラインに統合しやすい。
                        </div>
                        <div className="step-list mt-2">
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{background: "rgba(45, 212, 191, 0.1)", borderColor: "rgba(45, 212, 191, 0.3)", color: "var(--color-accent-cyan)"}}
                                >
                                    C
                                </div>
                                <div className="step-content">
                                    <h4>コンシューマー側（Consumer-Driven）</h4>
                                    <p>
                                        フロントエンドやAPIクライアントが「こういうレスポンスが必要」という契約を定義・テストする。期待するレスポンス形式を明示的に宣言。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{background: "rgba(45, 212, 191, 0.1)", borderColor: "rgba(45, 212, 191, 0.3)", color: "var(--color-accent-cyan)"}}
                                >
                                    P
                                </div>
                                <div className="step-content">
                                    <h4>プロバイダー側（Provider Verification）</h4>
                                    <p>
                                        バックエンドAPIがコンシューマーの契約通りのレスポンスを返せるかを検証。APIの変更時に既存コンシューマーへの影響を事前に検出できる。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="code-block mt-1">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang">PYTHON / Pact — コントラクトテスト</span>
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"kw\">from</span> pact <span class=\"kw\">import</span> Consumer, Provider\n\n<span class=\"cm\"># ── コンシューマー（フロントエンド）側 ──</span>\npact = <span class=\"cls\">Consumer</span>(<span class=\"str\">'Frontend'</span>).<span class=\"fn\">has_pact_with</span>(\n    <span class=\"cls\">Provider</span>(<span class=\"str\">'UserAPI'</span>)\n)\n\n<span class=\"kw\">def</span> <span class=\"fn\">test_get_user_returns_expected_format</span>():\n    <span class=\"cm\"># コンシューマーが期待する契約を定義</span>\n    (<span class=\"kw\">pact</span>\n     .<span class=\"fn\">given</span>(<span class=\"str\">\"ユーザーID=1が存在する\"</span>)\n     .<span class=\"fn\">upon_receiving</span>(<span class=\"str\">\"GET /users/1 リクエスト\"</span>)\n     .<span class=\"fn\">with_request</span>(<span class=\"str\">\"GET\"</span>, <span class=\"str\">\"/users/1\"</span>)\n     .<span class=\"fn\">will_respond_with</span>(<span class=\"num\">200</span>, body={\n         <span class=\"str\">\"id\"</span>: <span class=\"num\">1</span>,\n         <span class=\"str\">\"name\"</span>: like(<span class=\"str\">\"string\"</span>),  <span class=\"cm\"># 型のみ検証</span>\n         <span class=\"str\">\"email\"</span>: like(<span class=\"str\">\"string\"</span>),\n     })\n    )\n\n    <span class=\"cm\"># Pactが生成するモックサーバーでテスト</span>\n    <span class=\"kw\">with</span> pact:\n        result = <span class=\"fn\">get_user</span>(<span class=\"num\">1</span>)\n        <span class=\"kw\">assert</span> result[<span class=\"str\">\"id\"</span>] == <span class=\"num\">1</span>\n\n<span class=\"cm\"># Pact ファイルが自動生成 → プロバイダーが検証に使用</span>" }} />
                        </div>
                    </div>
                </div>

                <div className="callout callout-info mt-3">
                    <strong>従来の統合テスト vs コントラクトテスト：</strong><br />
                    従来の統合テスト：全サービスを起動する大規模な環境が必要 →
                    遅い・不安定・コストが高い<br />
                    コントラクトテスト：各サービスが独立して実行可能 →
                    高速・安定・CIに組み込みやすい<br />
                    コントラクトテストは統合テストを<strong>置き換えるものではなく、補完</strong>するもの。両方が必要です。
                    <br /><a
                        href="https://www.testingmind.com/contract-testing-an-introduction-and-guide/"
                        className="ulink"
                        target="_blank"
                        >testingmind.com — Contract Testing Complete Guide 2026</a
                    >
                    <a
                        href="https://knowledge.businesscompassllc.com/api-test-automation-with-rest-assured-postman-and-pact/"
                        className="ulink"
                        target="_blank"
                        >businesscompassllc.com — Pact Contract Testing (Jan 2026)</a
                    >
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 12: TOOLS
════════════════════════════════════════ */}
            <section id="tools">
                <div className="section-header">
                    <span className="section-num">STEP 12 — TOOLS & FRAMEWORKS 2025</span>
                    <h2>2025年の主要テストツール</h2>
                    <div className="accent-line"></div>
                    <p>
                        機能テスト・統合テスト・APIテストの各フェーズに最適なツールを目的別に整理します。
                    </p>
                </div>

                <h3
                    style={{fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: "700", marginBottom: "0.75rem"}}
                >
                    APIテスト・統合テストツール
                </h3>
                <div className="tool-grid">
                    <div className="tool-card">
                        <div className="tool-name">📮 Postman</div>
                        <div className="tool-desc">
                            GUI操作でAPI探索・テスト。Collections でフロー統合テストを実現。Newman
                            でCI/CD統合が容易。チームコラボレーションに最適。
                        </div>
                        <span className="badge badge-int">2025年最普及</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">☕ REST Assured</div>
                        <div className="tool-desc">
                            Java DSL。BDD Given/When/Then
                            で可読性が高い。JUnit・TestNG・Maven/Gradle との統合がシームレス。Java
                            チームの定番。
                        </div>
                        <span className="badge badge-e2e">Java必携</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🤝 Pact</div>
                        <div className="tool-desc">
                            コンシューマー駆動コントラクトテスト専門ツール。マイクロサービスの互換性を早期に検出。Pact
                            Broker で管理。
                        </div>
                        <span className="badge badge-int">契約テスト</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🥋 Karate DSL</div>
                        <div className="tool-desc">
                            API・モック・パフォーマンスを1つで。低コードで非技術者も使用可。Gatling統合でパフォーマンステストも可能。
                        </div>
                        <span className="badge badge-func">オールインワン</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🐍 pytest + httpx</div>
                        <div className="tool-desc">
                            Pythonエコシステム。httpxで非同期APIテスト。フィクスチャで複雑な統合テスト環境をクリーンに管理。
                        </div>
                        <span className="badge badge-int">Python</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🧪 Supertest</div>
                        <div className="tool-desc">
                            Node.js向け。Express/Fastifyとの統合テストに特化。Jestと組み合わせてサーバーを起動せずにAPIをテスト。
                        </div>
                        <span className="badge badge-e2e">Node.js</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🔬 WireMock</div>
                        <div className="tool-desc">
                            外部APIのモックサーバー。統合テスト中に不安定な外部依存を安定したモックに置き換えられる。Java・Standalone版あり。
                        </div>
                        <span className="badge bg-accent-green\/10 text-\[var\(--color-accent-green\)\] border-\[rgba\(104\,211\,145\,0\.3\)\]">モックサーバー</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🟣 Specmatic</div>
                        <div className="tool-desc">
                            OpenAPI仕様からコントラクトテストを自動生成。APIファーストチームで急速に普及。コード不要でテスト生成可能。
                        </div>
                        <span className="badge badge-int">NEW 2025</span>
                    </div>
                </div>

                <h3
                    className="mt4"
                    style={{fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: "700", marginBottom: "0.75rem"}}
                >
                    ツール選定ガイド
                </h3>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>状況</th>
                                <th>推奨ツール</th>
                                <th>理由</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>チーム内に非エンジニアがいる</strong></td>
                                <td>Postman / Katalon</td>
                                <td>GUIで操作でき、技術知識不要</td>
                            </tr>
                            <tr>
                                <td><strong>Javaチームのコード駆動テスト</strong></td>
                                <td>REST Assured + JUnit 5</td>
                                <td>BDDスタイル・既存ビルドに統合容易</td>
                            </tr>
                            <tr>
                                <td><strong>マイクロサービスの互換性保証</strong></td>
                                <td>Pact / Specmatic</td>
                                <td>コントラクトベースで早期検出</td>
                            </tr>
                            <tr>
                                <td><strong>API・パフォーマンス・モックを一元化</strong></td>
                                <td>Karate DSL</td>
                                <td>1ツールで全てカバー</td>
                            </tr>
                            <tr>
                                <td><strong>Pythonエコシステム</strong></td>
                                <td>pytest + httpx / requests</td>
                                <td>フィクスチャで複雑な環境管理が容易</td>
                            </tr>
                            <tr>
                                <td><strong>外部APIの不安定性を排除したい</strong></td>
                                <td>WireMock / Mockoon</td>
                                <td>外部依存をモック化して安定したテスト</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm mt-1">
                    参照:
                    <a
                        href="https://www.stackhawk.com/blog/top-api-testing-tools/"
                        className="ulink"
                        target="_blank"
                        >stackhawk.com — 11 Best API Testing Tools 2026</a
                    >
                    <a
                        href="https://www.baserock.ai/blog/api-integration-testing-tool"
                        className="ulink"
                        target="_blank"
                        >baserock.ai — Best API Integration Testing Tools 2025</a
                    >
                    <a
                        href="https://nordicapis.com/10-tools-for-api-contract-testing/"
                        className="ulink"
                        target="_blank"
                        >nordicapis.com — 10 Contract Testing Tools</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     REFERENCES
════════════════════════════════════════ */}
            <section id="references">
                <div className="section-header">
                    <span className="section-num">APPENDIX — COMPLETE REFERENCE URLS</span>
                    <h2>全参照URL一覧</h2>
                    <div className="accent-line"></div>
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
                                <td>CTFL v4.0.1 シラバス（PDF）</td>
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
                                <td>テストレベル</td>
                                <td>mastersoftwaretesting.com — CTFL Complete Study Guide 2025</td>
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
                                <td>テストレベル</td>
                                <td>www.istqb.com — CTFL v4.0 overview</td>
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
                                <td>機能/統合テスト</td>
                                <td>totalshiftleft.ai — Functional vs Integration Testing 2026</td>
                                <td>
                                    <a
                                        href="https://totalshiftleft.ai/blog/functional-testing-vs-integration-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://totalshiftleft.ai/blog/functional-testing-vs-integration-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>機能/統合テスト</td>
                                <td>testim.io — Integration Testing vs Functional Testing</td>
                                <td>
                                    <a
                                        href="https://www.testim.io/blog/integration-testing-vs-functional-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.testim.io/blog/integration-testing-vs-functional-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ブラックボックス技法</td>
                                <td>
                                    mastersoftwaretesting.com — Black-Box Testing Complete Guide
                                    (Jan 2026)
                                </td>
                                <td>
                                    <a
                                        href="https://mastersoftwaretesting.com/testing-fundamentals/testing-techniques/black-box-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://mastersoftwaretesting.com/testing-fundamentals/testing-techniques/black-box-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ブラックボックス技法</td>
                                <td>testdevlab.com — Types of Black Box Testing Techniques</td>
                                <td>
                                    <a
                                        href="https://www.testdevlab.com/blog/types-of-black-box-testing-techniques"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.testdevlab.com/blog/types-of-black-box-testing-techniques</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>EP / BVA</td>
                                <td>softwaretestinghelp.com — BVA & EP (May 2025)</td>
                                <td>
                                    <a
                                        href="https://www.softwaretestinghelp.com/what-is-boundary-value-analysis-and-equivalence-partitioning/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.softwaretestinghelp.com/what-is-boundary-value-analysis-and-equivalence-partitioning/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>EP / BVA</td>
                                <td>geeksforgeeks.org — BVA vs EP (Jul 2025)</td>
                                <td>
                                    <a
                                        href="https://www.geeksforgeeks.org/software-testing/software-testing-boundary-value-analysis-vs-equivalence-partitioning/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.geeksforgeeks.org/software-testing/software-testing-boundary-value-analysis-vs-equivalence-partitioning/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>EP / BVA</td>
                                <td>toolsqa.com — Boundary Value Analysis ISTQB Guide</td>
                                <td>
                                    <a
                                        href="https://toolsqa.com/software-testing/istqb/boundary-value-analysis/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://toolsqa.com/software-testing/istqb/boundary-value-analysis/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>EP / BVA</td>
                                <td>geeksforgeeks.org — Boundary Value Analysis (Jul 2025)</td>
                                <td>
                                    <a
                                        href="https://www.geeksforgeeks.org/software-testing/software-testing-boundary-value-analysis/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.geeksforgeeks.org/software-testing/software-testing-boundary-value-analysis/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>EP / BVA</td>
                                <td>stickyminds.com — EP and BVA in Black Box Testing</td>
                                <td>
                                    <a
                                        href="https://www.stickyminds.com/article/using-equivalence-partitioning-and-boundary-value-analysis-black-box-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.stickyminds.com/article/using-equivalence-partitioning-and-boundary-value-analysis-black-box-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>APIテスト</td>
                                <td>
                                    thirstysprout.com — Mastering RESTful API Testing 2025 (Jan
                                    2026)
                                </td>
                                <td>
                                    <a
                                        href="https://www.thirstysprout.com/post/restful-api-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.thirstysprout.com/post/restful-api-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>APIテスト</td>
                                <td>postman.com — Integration Testing Template</td>
                                <td>
                                    <a
                                        href="https://www.postman.com/templates/collections/integration-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.postman.com/templates/collections/integration-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>APIテスト</td>
                                <td>testunity.com — Postman vs REST Assured (Oct 2025)</td>
                                <td>
                                    <a
                                        href="https://blog.testunity.com/choosing-the-right-api-testing-tool-postman-vs-rest-assured/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://blog.testunity.com/choosing-the-right-api-testing-tool-postman-vs-rest-assured/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>APIテスト</td>
                                <td>speakeasy.com — API Testing Best Practices</td>
                                <td>
                                    <a
                                        href="https://www.speakeasy.com/api-design/testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.speakeasy.com/api-design/testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>コントラクトテスト</td>
                                <td>testingmind.com — Contract Testing Complete Guide 2026</td>
                                <td>
                                    <a
                                        href="https://www.testingmind.com/contract-testing-an-introduction-and-guide/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.testingmind.com/contract-testing-an-introduction-and-guide/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>コントラクトテスト</td>
                                <td>nordicapis.com — 10 Tools for API Contract Testing</td>
                                <td>
                                    <a
                                        href="https://nordicapis.com/10-tools-for-api-contract-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://nordicapis.com/10-tools-for-api-contract-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>コントラクトテスト</td>
                                <td>
                                    businesscompassllc.com — REST Assured + Postman + Pact (Jan
                                    2026)
                                </td>
                                <td>
                                    <a
                                        href="https://knowledge.businesscompassllc.com/api-test-automation-with-rest-assured-postman-and-pact/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://knowledge.businesscompassllc.com/api-test-automation-with-rest-assured-postman-and-pact/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール</td>
                                <td>stackhawk.com — 11 Best API Testing Tools 2026</td>
                                <td>
                                    <a
                                        href="https://www.stackhawk.com/blog/top-api-testing-tools/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.stackhawk.com/blog/top-api-testing-tools/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール</td>
                                <td>baserock.ai — Best API Integration Testing Tools 2025</td>
                                <td>
                                    <a
                                        href="https://www.baserock.ai/blog/api-integration-testing-tool"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.baserock.ai/blog/api-integration-testing-tool</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ベストプラクティス</td>
                                <td>
                                    medium.com — Best Practices for Testing Web Applications 2025
                                </td>
                                <td>
                                    <a
                                        href="https://medium.com/@fulminoussoftwares/best-practices-for-testing-web-applications-in-2025-6d8f7f6460b9"
                                        className="ref-url"
                                        target="_blank"
                                        >https://medium.com/@fulminoussoftwares/best-practices-for-testing-web-applications-in-2025-6d8f7f6460b9</a
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
