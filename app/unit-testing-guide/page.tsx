import '../unit-testing.css';

export default function UnitTestingGuide() {
    return (
        <main>
            {/* ══════ HERO ══════ */}
            <section className="hero" id="top">
                <div className="hero-content">
                    <span className="hero-eyebrow">
                        ユニットテスト（単体テスト）完全ガイド 2025
                    </span>
                    <h1>
                        良いコードの証明は、
                        <br />
                        <em>良いテスト</em>から始まる。
                        <span className="line2">ISTQB CTFL v4.0 準拠 | 初学者から実践者まで</span>
                    </h1>
                    <p className="hero-sub">
                        ユニットテストは、ソフトウェアの最小単位である関数・クラス・メソッドを
                        外部依存から切り離して独立検証する、開発サイクルの最初かつ最も重要な防衛線です。
                        ISTQB
                        の7つのテスト原則を土台に、AAAパターン・FIRST原則・TDD・テストダブルまで
                        ステップバイステップで完全解説します。
                    </p>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-num">×100</span>
                            <span className="stat-label">本番バグのユニットテスト比コスト</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">60-70%</span>
                            <span className="stat-label">AI活用によるテスト作成時間削減率</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">80%+</span>
                            <span className="stat-label">目標コードカバレッジ（業界標準）</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">Level 1</span>
                            <span className="stat-label">
                                ISTQBテストレベル（コンポーネントテスト）
                            </span>
                        </div>
                    </div>

                    {/* テストピラミッド */}
                    <div className="pyramid-wrap">
                        <div className="pyr-layer p-e2e">
                            <span>E2E テスト</span>
                            <span className="sub">少数・低速・高コスト</span>
                        </div>
                        <div className="pyr-layer p-int">
                            <span>インテグレーション / 機能テスト</span>
                            <span className="sub">中程度</span>
                        </div>
                        <div className="pyr-layer p-unit">
                            <span>🔬 ユニットテスト（単体テスト）← ここを徹底解説</span>
                            <span className="sub">多数・高速・低コスト</span>
                        </div>
                        <div className="pyr-axis">
                            <span>⬅ 高速・低コスト・多く書く</span>
                            <span>テストピラミッド</span>
                            <span>低速・高コスト・少なくする ➡</span>
                        </div>
                    </div>

                    <div className="callout callout-good mt-2">
                        <strong>ISTQB CTFL v4.0 における定義：</strong>
                        ユニットテストは「コンポーネントテスト（Component Testing）」とも呼ばれ、
                        個々のソフトウェアコンポーネントが独立して期待通りに機能するかを検証します。
                        SDLC（ソフトウェア開発ライフサイクル）の最初期フェーズで実施し、
                        欠陥修正コストを最小化する最重要テストレベルです（Section 2.2）。
                        <br />
                        <a
                            href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                            className="ulink"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            istqb.org — CTFL v4.0 詳細ページ
                        </a>
                    </div>
                </div>
            </section>

            {/* ══════ STEP 1: WHY UNIT TESTING ══════ */}
            <section id="why">
                <div className="section-header">
                    <span className="section-num">
                        STEP 01 — ISTQB CTFL: TESTING PRINCIPLES &amp; WHY TESTING IS NECESSARY
                    </span>
                    <h2>なぜユニットテストが必要なのか？</h2>
                    <div className="accent-line"></div>
                    <p>
                        ISTQB
                        の7原則のうち「早期テスト（Shift-Left）」は、テストを可能な限り早い段階から始めることを求めます。ユニットテストはその最前線です。
                    </p>
                </div>

                {/* バグコストグラフ */}
                <h3
                    className="mt-2"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    バグ発見フェーズとコストの関係
                </h3>
                <div className="cov-bar-wrap">
                    <div className="cov-bar-row">
                        <span className="cov-bar-label">ユニットテスト</span>
                        <div className="cov-bar-track">
                            <div
                                className="cov-bar-fill"
                                style={{ width: '5%', background: 'var(--color-accent-green)' }}
                            ></div>
                        </div>
                        <span
                            className="cov-bar-pct"
                            style={{ color: 'var(--color-accent-green)' }}
                        >
                            ×1
                        </span>
                    </div>
                    <div className="cov-bar-row">
                        <span className="cov-bar-label">インテグレーション</span>
                        <div className="cov-bar-track">
                            <div
                                className="cov-bar-fill"
                                style={{ width: '15%', background: 'var(--color-accent-green)' }}
                            ></div>
                        </div>
                        <span
                            className="cov-bar-pct"
                            style={{ color: 'var(--color-accent-green)' }}
                        >
                            ×3
                        </span>
                    </div>
                    <div className="cov-bar-row">
                        <span className="cov-bar-label">システムテスト</span>
                        <div className="cov-bar-track">
                            <div
                                className="cov-bar-fill"
                                style={{ width: '40%', background: 'var(--color-accent-orange)' }}
                            ></div>
                        </div>
                        <span
                            className="cov-bar-pct"
                            style={{ color: 'var(--color-accent-orange)' }}
                        >
                            ×8
                        </span>
                    </div>
                    <div className="cov-bar-row">
                        <span className="cov-bar-label">受入テスト</span>
                        <div className="cov-bar-track">
                            <div
                                className="cov-bar-fill"
                                style={{ width: '65%', background: 'var(--color-accent-orange)' }}
                            ></div>
                        </div>
                        <span
                            className="cov-bar-pct"
                            style={{ color: 'var(--color-accent-orange)' }}
                        >
                            ×25
                        </span>
                    </div>
                    <div className="cov-bar-row">
                        <span className="cov-bar-label">本番環境</span>
                        <div className="cov-bar-track">
                            <div
                                className="cov-bar-fill"
                                style={{ width: '100%', background: 'var(--color-accent-red)' }}
                            ></div>
                        </div>
                        <span className="cov-bar-pct" style={{ color: 'var(--color-accent-red)' }}>
                            ×100
                        </span>
                    </div>
                </div>
                <p className="text-sm">
                    出典: IBM研究 —
                    本番環境のバグ修正コストはユニットテスト段階の最大100倍。早期テスト（シフトレフト）が投資対効果を最大化します。
                    <br />
                    <a
                        href="https://www.ibm.com/think/insights/unit-testing-best-practices"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ibm.com — Unit Testing Best Practices
                    </a>
                </p>

                {/* 7つの価値 */}
                <h3
                    className="mt-4"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    ユニットテストがもたらす7つの価値
                </h3>
                <div className="card-grid">
                    <div className="card">
                        <span className="card-icon">🐛</span>
                        <h3>早期バグ検出</h3>
                        <p>
                            コードを書いた直後に検証するため、バグの発見が最も速く、修正コストが最小。記憶が新鮮なうちに修正できる。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🔁</span>
                        <h3>安全なリファクタリング</h3>
                        <p>
                            テストがあれば、既存の動作を壊さずにコードを改善できる。テストが「安全ネット」として機能する。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">📝</span>
                        <h3>生きたドキュメント</h3>
                        <p>
                            ユニットテストはコードの「使い方」と「期待動作」を示す実行可能なドキュメント。仕様書より常に最新の状態を保てる。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🏗️</span>
                        <h3>設計品質の向上</h3>
                        <p>
                            テストしにくいコードは設計が悪い証拠。テストを書く行為が、疎結合・単一責任原則に沿った良い設計を自然と促す。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🚀</span>
                        <h3>CI/CDパイプラインの基盤</h3>
                        <p>
                            自動化されたユニットテストはCI/CDの心臓部。プッシュのたびに品質を自動検証し、デプロイの安心感を提供する。
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🤝</span>
                        <h3>チームの自信とスピード</h3>
                        <p>
                            テストスイートが充実しているチームは、金曜日にリリースできる。変更への恐怖が消え、開発速度が向上する。
                        </p>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://meetzest.com/blog/unit-testing-best-practice"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        meetzest.com — Unit Testing Best Practices 2025
                    </a>{' '}
                    <a
                        href="https://jsschools.com/programming/unit-testing-best-practices-principles-and-patter/"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        jsschools.com — Unit Testing Best Practices (Jul 2025)
                    </a>
                </p>
            </section>

            {/* ══════ STEP 2: BASICS ══════ */}
            <section id="basics">
                <div className="section-header">
                    <span className="section-num">
                        STEP 02 — ISTQB CTFL SECTION 2.2: TEST LEVELS
                    </span>
                    <h2>ユニットテストの基本概念</h2>
                    <div className="accent-line"></div>
                    <p>
                        「テスト対象は何か」「どこまでがユニットか」を正確に理解することが、効果的なユニットテスト設計の出発点です。
                    </p>
                </div>

                <div className="grid-2 mt-2">
                    <div>
                        <h3
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                marginBottom: '0.75rem',
                            }}
                        >
                            テスト対象（SUT: System Under Test）
                        </h3>
                        <div className="step-list">
                            <div className="step-item">
                                <div className="step-num-circle">①</div>
                                <div className="step-content">
                                    <h4>関数・メソッド</h4>
                                    <p>
                                        最も基本的なユニット。1つの入力に対して1つの出力を返す純粋関数が理想的なテスト対象。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">②</div>
                                <div className="step-content">
                                    <h4>クラス・モジュール</h4>
                                    <p>
                                        複数のメソッドを持つクラス単体。メソッド間の状態管理も含めてテストする。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">③</div>
                                <div className="step-content">
                                    <h4>コンポーネント（ISTQB用語）</h4>
                                    <p>
                                        UIコンポーネント（React/Vue等）。レンダリング結果・イベント処理・状態変化をテストする。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                marginBottom: '0.75rem',
                            }}
                        >
                            ユニットテストの「単体」とは何か？
                        </h3>
                        <div className="callout callout-warn">
                            <strong>「ユニット」の定義は2つの流派がある</strong>
                            <br />
                            <br />
                            <strong>古典派（Classical School）：</strong>
                            可能な限りリアルオブジェクトを使用。本当に必要な場合のみテストダブルを使う。ユニット
                            = 動作・ビヘイビア。
                            <br />
                            <br />
                            <strong>ロンドン派（London School）：</strong>
                            テスト対象以外の全依存をモックに置き換える。ユニット =
                            クラス単体。各クラスを完全に分離してテスト。
                        </div>
                        <div className="callout callout-info mt-2">
                            <strong>2025年の推奨：</strong>
                            どちらが正解というわけではなく、プロジェクトによって使い分ける。
                            複雑なビジネスロジックには古典派、外部依存が多いシステムにはロンドン派が向いている。
                            重要なのは「テストが価値ある回帰に対してどれだけ保護してくれるか」。
                        </div>
                    </div>
                </div>

                {/* テストすべきこと / 不要なこと */}
                <h3
                    className="mt-4"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    テストすべきこと / テスト不要なこと
                </h3>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>カテゴリ</th>
                                <th>テストすべき ✓</th>
                                <th>テスト不要 ✗</th>
                                <th>理由</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>ビジネスロジック</strong>
                                </td>
                                <td className="good">必ずテストする</td>
                                <td>—</td>
                                <td>バグが最も多く、影響が最大</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>境界値・エッジケース</strong>
                                </td>
                                <td className="good">必ずテストする</td>
                                <td>—</td>
                                <td>バグが集中しやすいポイント</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>エラーハンドリング</strong>
                                </td>
                                <td className="good">テストする</td>
                                <td>—</td>
                                <td>異常系は本番で頻出する</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>単純なゲッター/セッター</strong>
                                </td>
                                <td>—</td>
                                <td className="bad">通常不要</td>
                                <td>ロジックがなければテスト価値が低い</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>サードパーティライブラリ</strong>
                                </td>
                                <td>—</td>
                                <td className="bad">不要</td>
                                <td>ライブラリ側がテスト済み</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>自動生成コード</strong>
                                </td>
                                <td>—</td>
                                <td className="bad">基本不要</td>
                                <td>生成ツール側がテスト済み</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ══════ STEP 3: AAA PATTERN ══════ */}
            <section id="aaa">
                <div className="section-header">
                    <span className="section-num">STEP 03 — ARRANGE-ACT-ASSERT PATTERN</span>
                    <h2>AAAパターン — テストの黄金構造</h2>
                    <div className="accent-line"></div>
                    <p>
                        Arrange-Act-Assert（AAA / 3Aパターン）は業界標準のテスト構造で、Bill Wake
                        が提唱し Vladimir Khorikov
                        の著書で広まりました。全てのユニットテストはこの3段階で書くべきです。
                    </p>
                </div>

                <div className="card-grid mt-2">
                    <div
                        className="card"
                        style={{ borderTop: '3px solid var(--color-accent-blue)' }}
                    >
                        <div className="flex items-center gap-1" style={{ marginBottom: '0.6rem' }}>
                            <span
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '1.6rem',
                                    fontWeight: 900,
                                    color: 'var(--color-accent-blue)',
                                }}
                            >
                                A
                            </span>
                            <h3 style={{ fontSize: '1rem', margin: 0 }}>Arrange（準備）</h3>
                        </div>
                        <p>
                            テストデータ・依存オブジェクト・モック・初期状態を全てセットアップする。テスト対象が動作するための前提条件を構築するフェーズ。
                        </p>
                        <div className="callout callout-info mt-2" style={{ fontSize: '12px' }}>
                            ここが最も長くなることが多い。複雑すぎる場合は設計の問題（依存が多すぎる）のサイン。
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{ borderTop: '3px solid var(--color-accent-green)' }}
                    >
                        <div className="flex items-center gap-1" style={{ marginBottom: '0.6rem' }}>
                            <span
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '1.6rem',
                                    fontWeight: 900,
                                    color: 'var(--color-accent-green)',
                                }}
                            >
                                A
                            </span>
                            <h3 style={{ fontSize: '1rem', margin: 0 }}>Act（実行）</h3>
                        </div>
                        <p>
                            テスト対象の関数・メソッドを<strong>1回だけ</strong>
                            呼び出す。1テストにつき1つのアクションが原則。通常は1行のコードのみ。
                        </p>
                        <div className="callout callout-good mt-2" style={{ fontSize: '12px' }}>
                            複数の動作をまとめてテストしたくなったら、テストを分割するサイン。
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{ borderTop: '3px solid var(--color-accent-orange)' }}
                    >
                        <div className="flex items-center gap-1" style={{ marginBottom: '0.6rem' }}>
                            <span
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '1.6rem',
                                    fontWeight: 900,
                                    color: 'var(--color-accent-orange)',
                                }}
                            >
                                A
                            </span>
                            <h3 style={{ fontSize: '1rem', margin: 0 }}>Assert（検証）</h3>
                        </div>
                        <p>
                            期待値と実際の結果を比較・アサートする。
                            <strong>1つのテストで1つの概念</strong>を検証するのが理想。BDDの
                            Given/When/Then と同義の構造。
                        </p>
                        <div className="callout callout-warn mt-2" style={{ fontSize: '12px' }}>
                            複数の assert
                            は許容されるが、それぞれが同一の「概念」を検証している必要がある。
                        </div>
                    </div>
                </div>

                {/* コード例 */}
                <h3
                    className="mt-4"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    各言語でのAAA実装例
                </h3>
                <div className="grid-2">
                    <div>
                        <div className="code-block">
                            <div className="code-header">
                                <div className="code-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="code-lang">PYTHON / pytest</span>
                            </div>
                            <pre
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm"># ── テスト対象 (calculator.py) ──</span>
<span class="kw">def</span> <span class="fn">divide</span>(a: <span class="cls">float</span>, b: <span class="cls">float</span>) -> <span class="cls">float</span>:
    <span class="kw">if</span> b == <span class="num">0</span>:
        <span class="kw">raise</span> <span class="cls">ValueError</span>(<span class="str">"ゼロ除算エラー"</span>)
    <span class="kw">return</span> a / b

<span class="cm"># ── ユニットテスト (test_calculator.py) ──</span>
<span class="kw">import</span> pytest
<span class="kw">from</span> calculator <span class="kw">import</span> divide

<span class="kw">class</span> <span class="cls">TestDivide</span>:
    <span class="kw">def</span> <span class="fn">test_通常の除算_正しい結果を返す</span>(<span class="dec">self</span>):
        <span class="cm"># ── Arrange ─────────────────</span>
        a, b = <span class="num">10</span>, <span class="num">2</span>

        <span class="cm"># ── Act ──────────────────────</span>
        result = <span class="fn">divide</span>(a, b)

        <span class="cm"># ── Assert ───────────────────</span>
        <span class="kw">assert</span> result == <span class="num">5.0</span>

    <span class="kw">def</span> <span class="fn">test_ゼロ除算_ValueErrorを送出する</span>(<span class="dec">self</span>):
        <span class="cm"># Arrange</span>
        a, b = <span class="num">10</span>, <span class="num">0</span>

        <span class="cm"># Act & Assert（例外の確認）</span>
        <span class="kw">with</span> pytest.raises(<span class="cls">ValueError</span>,
                match=<span class="str">"ゼロ除算エラー"</span>):
            <span class="fn">divide</span>(a, b)`,
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="code-block">
                            <div className="code-header">
                                <div className="code-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="code-lang">TYPESCRIPT / Jest</span>
                            </div>
                            <pre
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm">// ── テスト対象 (cart.ts) ──</span>
<span class="kw">export function</span> <span class="fn">calculateTotal</span>(
  items: <span class="cls">CartItem</span>[]
): <span class="cls">number</span> {
  <span class="kw">return</span> items.<span class="fn">reduce</span>(
    (sum, item) => sum + item.price * item.qty,
    <span class="num">0</span>
  );
}

<span class="cm">// ── ユニットテスト (cart.test.ts) ──</span>
<span class="kw">import</span> { calculateTotal } <span class="kw">from</span> <span class="str">'./cart'</span>;

<span class="fn">describe</span>(<span class="str">'calculateTotal'</span>, () => {
  <span class="fn">it</span>(<span class="str">'複数アイテムの合計金額を正しく計算する'</span>,
  () => {
    <span class="cm">// Arrange</span>
    <span class="kw">const</span> items = [
      { price: <span class="num">100</span>, qty: <span class="num">2</span> },
      { price: <span class="num">300</span>, qty: <span class="num">1</span> },
    ];

    <span class="cm">// Act</span>
    <span class="kw">const</span> result = <span class="fn">calculateTotal</span>(items);

    <span class="cm">// Assert</span>
    <span class="fn">expect</span>(result).<span class="fn">toBe</span>(<span class="num">500</span>);
  });

  <span class="fn">it</span>(<span class="str">'空のカートは0を返す'</span>, () => {
    <span class="fn">expect</span>(<span class="fn">calculateTotal</span>([])).<span class="fn">toBe</span>(<span class="num">0</span>);
  });
});`,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid-2 mt-2">
                    <div>
                        <div className="code-block">
                            <div className="code-header">
                                <div className="code-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="code-lang">JAVA / JUnit 5</span>
                            </div>
                            <pre
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm">// ── ユニットテスト (BankAccountTest.java) ──</span>
<span class="kw">import</span> org.junit.jupiter.api.*;
<span class="kw">import static</span> org.junit.jupiter.api.Assertions.*;

<span class="kw">class</span> <span class="cls">BankAccountTest</span> {

    <span class="dec">@Test</span>
    <span class="kw">void</span> <span class="fn">入金後_残高が増加する</span>() {
        <span class="cm">// Arrange</span>
        <span class="cls">BankAccount</span> account = <span class="kw">new</span> <span class="cls">BankAccount</span>(<span class="num">1000</span>);

        <span class="cm">// Act</span>
        account.<span class="fn">deposit</span>(<span class="num">500</span>);

        <span class="cm">// Assert</span>
        <span class="fn">assertEquals</span>(<span class="num">1500</span>, account.<span class="fn">getBalance</span>());
    }

    <span class="dec">@Test</span>
    <span class="kw">void</span> <span class="fn">残高不足_IllegalArgumentExceptionを送出</span>() {
        <span class="cm">// Arrange</span>
        <span class="cls">BankAccount</span> account = <span class="kw">new</span> <span class="cls">BankAccount</span>(<span class="num">100</span>);

        <span class="cm">// Act & Assert</span>
        <span class="fn">assertThrows</span>(
            <span class="cls">IllegalArgumentException</span>.class,
            () -> account.<span class="fn">withdraw</span>(<span class="num">500</span>)
        );
    }
}`,
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="code-block">
                            <div className="code-header">
                                <div className="code-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="code-lang">C# / NUnit</span>
                            </div>
                            <pre
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm">// ── ユニットテスト (PasswordValidatorTests.cs) ──</span>
<span class="kw">using</span> NUnit.Framework;

[<span class="cls">TestFixture</span>]
<span class="kw">public class</span> <span class="cls">PasswordValidatorTests</span>
{
    <span class="kw">private</span> <span class="cls">PasswordValidator</span> _sut;

    [<span class="cls">SetUp</span>]
    <span class="kw">public void</span> <span class="fn">SetUp</span>() =>
        _sut = <span class="kw">new</span> <span class="cls">PasswordValidator</span>();

    [<span class="cls">Test</span>]
    <span class="kw">public void</span>
    <span class="fn">Validate_8文字以上の英数字混在_Trueを返す</span>()
    {
        <span class="cm">// Arrange</span>
        <span class="kw">var</span> password = <span class="str">"Secure123"</span>;

        <span class="cm">// Act</span>
        <span class="kw">var</span> result = _sut.<span class="fn">Validate</span>(password);

        <span class="cm">// Assert</span>
        Assert.<span class="fn">IsTrue</span>(result);
    }
}`,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-1">
                    参照:
                    <a
                        href="https://semaphore.io/blog/aaa-pattern-test-automation"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        semaphore.io — AAA Pattern (Jan 2025)
                    </a>{' '}
                    <a
                        href="https://freecontent.manning.com/making-better-unit-tests-part-1-the-aaa-pattern/"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        manning.com — Making Better Unit Tests (AAA)
                    </a>{' '}
                    <a
                        href="https://quashbugs.com/blog/aaa-pattern-unit-testing-automation"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        quashbugs.com — AAA Pattern Guide
                    </a>
                </p>
            </section>

            {/* ══════ STEP 4: FIRST PRINCIPLES ══════ */}
            <section id="first">
                <div className="section-header">
                    <span className="section-num">STEP 04 — FIRST PRINCIPLES</span>
                    <h2>FIRST原則 — 優れたユニットテストの5条件</h2>
                    <div className="accent-line"></div>
                    <p>
                        FIRST原則は、優れたユニットテストが備えるべき5つの特性を定義した業界標準ガイドラインです。全てを満たすテストが、長期的に価値を発揮します。
                    </p>
                </div>

                <div className="card-grid mt-2">
                    <div
                        className="card"
                        style={{ borderLeft: '4px solid var(--color-accent-green)' }}
                    >
                        <div
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '2rem',
                                fontWeight: 900,
                                color: 'var(--color-accent-green)',
                                lineHeight: 1,
                            }}
                        >
                            F
                        </div>
                        <h3>Fast（高速）</h3>
                        <p>
                            ミリ秒単位で完了すること。ファイルI/O・ネットワーク・DB接続・sleep()
                            を含めてはいけない。テストスイート全体が数秒〜2分以内に完了するのが理想。
                        </p>
                        <div className="callout callout-good mt-2" style={{ fontSize: '12px' }}>
                            遅いテストは実行を避けるようになる。速さこそが継続的フィードバックの鍵。
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{ borderLeft: '4px solid var(--color-accent-blue)' }}
                    >
                        <div
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '2rem',
                                fontWeight: 900,
                                color: 'var(--color-accent-blue)',
                                lineHeight: 1,
                            }}
                        >
                            I
                        </div>
                        <h3>Isolated（独立）</h3>
                        <p>
                            他のテストに依存せず、任意の順序で実行できること。共有状態・グローバル変数を避け、各テストが完全に自己完結している。外部依存はモック・スタブで代替。
                        </p>
                        <div className="callout callout-info mt-2" style={{ fontSize: '12px' }}>
                            テストが失敗したとき、原因が明確に特定できる状態が理想。
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{ borderLeft: '4px solid var(--color-accent-orange)' }}
                    >
                        <div
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '2rem',
                                fontWeight: 900,
                                color: 'var(--color-accent-orange)',
                                lineHeight: 1,
                            }}
                        >
                            R
                        </div>
                        <h3>Repeatable（再現性）</h3>
                        <p>
                            何度実行しても同じ結果を返すこと（決定論的）。現在時刻・乱数・環境変数・外部サービスの状態に依存するテストは避ける。
                        </p>
                        <div className="callout callout-warn mt-2" style={{ fontSize: '12px' }}>
                            時々失敗するテスト（Flaky Test）はチームの信頼を破壊する最悪のパターン。
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{ borderLeft: '4px solid var(--color-accent-purple)' }}
                    >
                        <div
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '2rem',
                                fontWeight: 900,
                                color: 'var(--color-accent-purple)',
                                lineHeight: 1,
                            }}
                        >
                            S
                        </div>
                        <h3>Self-validating（自己検証）</h3>
                        <p>
                            PASS/FAILを自動で判断すること。テスト結果を確認するために人間がログを目視する必要があってはいけない。assertでプログラマチックに検証する。
                        </p>
                    </div>
                    <div
                        className="card"
                        style={{ borderLeft: '4px solid var(--color-accent-red)' }}
                    >
                        <div
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '2rem',
                                fontWeight: 900,
                                color: 'var(--color-accent-red)',
                                lineHeight: 1,
                            }}
                        >
                            T
                        </div>
                        <h3>Timely（適時性）</h3>
                        <p>
                            プロダクションコードと同時期に書くこと。TDDではコードより先に書く。後から書くテストは設計の歪みを吸収できず、メンテしにくいテストになりやすい。
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════ STEP 5: TDD ══════ */}
            <section id="tdd">
                <div className="section-header">
                    <span className="section-num">STEP 05 — TEST-DRIVEN DEVELOPMENT</span>
                    <h2>TDD（テスト駆動開発）— Red-Green-Refactor</h2>
                    <div className="accent-line"></div>
                    <p>
                        TDD は Kent Beck が提唱した開発手法で、<strong>テストを先に書く</strong>
                        ことで設計品質を向上させます。「レッド→グリーン→リファクタリング」の繰り返しが基本サイクルです。
                    </p>
                </div>

                {/* TDD サイクル図 */}
                <div className="tdd-cycle mt-3">
                    <div className="tdd-step tdd-red">
                        <span className="step-title">🔴</span>
                        <strong>RED</strong>
                        <span className="step-sub">
                            失敗するテストを書く
                            <br />
                            （実装はまだない）
                        </span>
                    </div>
                    <div className="tdd-arrow">→</div>
                    <div className="tdd-step tdd-green">
                        <span className="step-title">🟢</span>
                        <strong>GREEN</strong>
                        <span className="step-sub">
                            テストが通る最小限の
                            <br />
                            コードを実装する
                        </span>
                    </div>
                    <div className="tdd-arrow">→</div>
                    <div className="tdd-step tdd-blue">
                        <span className="step-title">🔵</span>
                        <strong>REFACTOR</strong>
                        <span className="step-sub">
                            テストを通したまま
                            <br />
                            コードを改善する
                        </span>
                    </div>
                    <div className="tdd-arrow">↩</div>
                </div>
                <p className="text-sm" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                    このサイクルを短い周期（5〜15分）で繰り返す。
                    <a
                        href="https://en.wikipedia.org/wiki/Test-driven_development"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Wikipedia — Test-driven development
                    </a>
                </p>

                <div className="grid-2 mt-3">
                    <div>
                        <h3
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                marginBottom: '0.75rem',
                            }}
                        >
                            TDDの実践ウォークスルー
                        </h3>
                        <div className="step-list">
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{
                                        background: 'rgba(252, 129, 129, 0.12)',
                                        borderColor: 'var(--color-accent-red)',
                                        color: 'var(--color-accent-red)',
                                    }}
                                >
                                    1
                                </div>
                                <div className="step-content">
                                    <h4>🔴 失敗するテストを書く</h4>
                                    <p>
                                        仕様を明確にするためにまずテストを書く。この時点でコードは存在せず、テストは必ずFAILする。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{
                                        background: 'rgba(104, 211, 145, 0.12)',
                                        borderColor: 'var(--color-accent-green)',
                                        color: 'var(--color-accent-green)',
                                    }}
                                >
                                    2
                                </div>
                                <div className="step-content">
                                    <h4>🟢 最小限の実装でテストを通す</h4>
                                    <p>
                                        「ハードコード」や「汚いコード」でも構わない。テストをGREENにすることだけを目指す。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{
                                        background: 'rgba(99, 179, 237, 0.12)',
                                        borderColor: 'var(--color-accent-blue)',
                                        color: 'var(--color-accent-blue)',
                                    }}
                                >
                                    3
                                </div>
                                <div className="step-content">
                                    <h4>🔵 テストを通したままリファクタリング</h4>
                                    <p>
                                        重複排除・命名改善・設計改善を行う。テストが安全ネットとして機能する。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">4</div>
                                <div className="step-content">
                                    <h4>繰り返す</h4>
                                    <p>
                                        次の小さな機能のテストを書き、同じサイクルを繰り返す。機能は常に動作する状態を保つ。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="code-block mt-1">
                            <div className="code-header">
                                <div className="code-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="code-lang">TDD実践例: Python / pytest</span>
                            </div>
                            <pre
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 STEP 1: 先にテストを書く
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
<span class="kw">def</span> <span class="fn">test_残高不足_送金失敗する</span>():
    account = <span class="cls">Account</span>(balance=<span class="num">100</span>)
    <span class="kw">with</span> pytest.raises(<span class="cls">InsufficientFundsError</span>):
        account.<span class="fn">transfer</span>(to=other, amount=<span class="num">200</span>)

<span class="cm"># → FAILする（Account クラスが未実装）</span>

<span class="cm">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟢 STEP 2: テストを通す最小実装
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
<span class="kw">class</span> <span class="cls">Account</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="dec">self</span>, balance: <span class="cls">int</span>):
        <span class="dec">self</span>.balance = balance

    <span class="kw">def</span> <span class="fn">transfer</span>(<span class="dec">self</span>, to, amount: <span class="cls">int</span>):
        <span class="kw">if</span> <span class="dec">self</span>.balance &lt; amount:
            <span class="kw">raise</span> <span class="cls">InsufficientFundsError</span>()
        <span class="dec">self</span>.balance -= amount
        to.balance += amount

<span class="cm"># → PASSする！</span>

<span class="cm">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔵 STEP 3: リファクタリング
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
<span class="cm"># 型ヒント追加、バリデーション強化、
# ログ追加など — テストは引き続きPASS</span>`,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="callout callout-purple mt-3">
                    <strong>TDDの主なメリット（2025年調査）：</strong>
                    <br />
                    ① 要件が明確になってから実装するため設計品質が向上。 ②
                    100%のコードがテストに裏付けられた状態でデプロイされる。 ③
                    コードの過剰実装（YAGNI違反）を防ぐ。 ④ バグ修正コストが劇的に減少。
                    <br />
                    <a
                        href="https://www.virtuosoqa.com/post/test-driven-development"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        virtuosoqa.com — TDD: Principles, Practices &amp; Benefits
                    </a>
                </div>
            </section>

            {/* ══════ STEP 6: TEST DOUBLES ══════ */}
            <section id="doubles">
                <div className="section-header">
                    <span className="section-num">
                        STEP 06 — TEST DOUBLES: MOCK, STUB, SPY, FAKE, DUMMY
                    </span>
                    <h2>テストダブル — 依存を制御する技術</h2>
                    <div className="accent-line"></div>
                    <p>
                        Gerard Meszaros
                        が定義した「テストダブル」は、テスト中に本物のオブジェクトを置き換えるための総称です。映画の「スタントダブル」が語源。外部DB・APIなどを分離してテストを高速・安定にします。
                    </p>
                </div>

                <div className="doubles-grid mt-2">
                    <div
                        className="double-card"
                        style={{ borderTop: '3px solid var(--color-text-muted)' }}
                    >
                        <div className="double-name">Dummy（ダミー）</div>
                        <span className="double-tag badge-muted">最もシンプル</span>
                        <div className="double-desc">
                            渡されるが一切使われないオブジェクト。パラメータリストを埋めるためだけに存在。
                        </div>
                        <div className="code-block" style={{ margin: '6px 0 0' }}>
                            <pre
                                style={{ padding: '0.6rem 0.8rem', fontSize: '11px' }}
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm"># Python例</span>
<span class="kw">def</span> <span class="fn">test_login</span>():
    dummy_logger = <span class="cls">None</span>  <span class="cm"># 使わない</span>
    user = <span class="cls">User</span>(<span class="str">"bob"</span>, dummy_logger)`,
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="double-card"
                        style={{ borderTop: '3px solid var(--color-accent-blue)' }}
                    >
                        <div className="double-name">Stub（スタブ）</div>
                        <span className="double-tag badge-int">固定値を返す</span>
                        <div className="double-desc">
                            あらかじめ決められた値を返すだけのオブジェクト。状態検証（結果が正しいか）に使う。
                        </div>
                        <div className="code-block" style={{ margin: '6px 0 0' }}>
                            <pre
                                style={{ padding: '0.6rem 0.8rem', fontSize: '11px' }}
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm"># Python例</span>
<span class="kw">class</span> <span class="cls">StubUserRepo</span>:
    <span class="kw">def</span> <span class="fn">get_user</span>(<span class="dec">self</span>, id):
        <span class="kw">return</span> {<span class="str">"id"</span>:<span class="num">1</span>, <span class="str">"name"</span>:<span class="str">"Alice"</span>}`,
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="double-card"
                        style={{ borderTop: '3px solid var(--color-accent-orange)' }}
                    >
                        <div className="double-name">Spy（スパイ）</div>
                        <span className="double-tag badge-e2e">呼び出しを記録</span>
                        <div className="double-desc">
                            実際のオブジェクトをラップし、呼び出し回数・引数を記録する。動作の「証人」。
                        </div>
                        <div className="code-block" style={{ margin: '6px 0 0' }}>
                            <pre
                                style={{ padding: '0.6rem 0.8rem', fontSize: '11px' }}
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm"># Jest例 (TypeScript)</span>
<span class="kw">const</span> spy = jest.<span class="fn">spyOn</span>(emailSvc, <span class="str">'send'</span>);
<span class="fn">sendWelcome</span>(user);
<span class="fn">expect</span>(spy).<span class="fn">toHaveBeenCalledTimes</span>(<span class="num">1</span>);`,
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="double-card"
                        style={{ borderTop: '3px solid var(--color-accent-green)' }}
                    >
                        <div className="double-name">Mock（モック）</div>
                        <span className="double-tag badge-unit">振る舞いを検証</span>
                        <div className="double-desc">
                            期待する呼び出しを事前に設定し、検証フェーズでその通りに呼ばれたか確認する。動作検証。
                        </div>
                        <div className="code-block" style={{ margin: '6px 0 0' }}>
                            <pre
                                style={{ padding: '0.6rem 0.8rem', fontSize: '11px' }}
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm"># Python例 (unittest.mock)</span>
<span class="kw">from</span> unittest.mock <span class="kw">import</span> Mock
mailer = <span class="cls">Mock</span>()
<span class="fn">register_user</span>(<span class="str">"alice"</span>, mailer)
mailer.send.<span class="fn">assert_called_once</span>()`,
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="double-card"
                        style={{ borderTop: '3px solid var(--color-accent-purple)' }}
                    >
                        <div className="double-name">Fake（フェイク）</div>
                        <span className="double-tag badge-func">動作する簡易実装</span>
                        <div className="double-desc">
                            本番には使えない簡易実装。インメモリDBが典型例。実際に動作するが本番同等ではない。
                        </div>
                        <div className="code-block" style={{ margin: '6px 0 0' }}>
                            <pre
                                style={{ padding: '0.6rem 0.8rem', fontSize: '11px' }}
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm"># インメモリDBのFake</span>
<span class="kw">class</span> <span class="cls">InMemoryUserRepo</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="dec">self</span>):
        <span class="dec">self</span>._data: <span class="cls">dict</span> = {}
    <span class="kw">def</span> <span class="fn">save</span>(<span class="dec">self</span>, user): ...
    <span class="kw">def</span> <span class="fn">find</span>(<span class="dec">self</span>, id): ...`,
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Mock vs Stub 比較表 */}
                <h3
                    className="mt-4"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    Mock vs Stub — いつどちらを使うか？
                </h3>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>観点</th>
                                <th>Stub（スタブ）</th>
                                <th>Mock（モック）</th>
                                <th>Spy（スパイ）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>検証の対象</strong>
                                </td>
                                <td>状態検証（何が返ったか）</td>
                                <td>動作検証（何が呼ばれたか）</td>
                                <td>動作の観察（呼ばれ方を記録）</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>設定のタイミング</strong>
                                </td>
                                <td>テスト前に戻り値を設定</td>
                                <td>テスト前に期待呼び出しを設定</td>
                                <td>テスト後に記録を確認</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>使いやすさ</strong>
                                </td>
                                <td className="good">シンプルで脆くない</td>
                                <td className="warn">実装詳細に依存しやすい</td>
                                <td className="good">実際の動作を維持できる</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>推奨ケース</strong>
                                </td>
                                <td>DBからデータ取得・外部API応答のシミュレート</td>
                                <td>メール送信・通知など副作用のある処理の確認</td>
                                <td>一部のメソッドだけ上書きしたいとき</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm mt-1">
                    参照:
                    <a
                        href="https://martinfowler.com/articles/mocksArentStubs.html"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        martinfowler.com — Mocks Aren&apos;t Stubs
                    </a>{' '}
                    <a
                        href="https://martinfowler.com/bliki/TestDouble.html"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        martinfowler.com — Test Double
                    </a>{' '}
                    <a
                        href="https://www.j-labs.pl/en/tech-blog/mocks-stubs-and-spies-in-unit-testing-based-on-mockito/"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        j-labs.pl — Mocks, Stubs and Spies (Dec 2025)
                    </a>
                </p>

                <div className="callout callout-warn mt-2">
                    <strong>モックの使いすぎに注意：</strong>
                    全ての依存をモックに置き換えると、テストが「実装の詳細」に依存しすぎて、
                    リファクタリングの度にテストが壊れる（偽陰性）問題が発生します。
                    <strong>
                        「状態検証（結果が正しいか）」をモックより優先し、
                        モックは副作用の確認など本当に必要な場合のみ使う
                    </strong>
                    のが2025年の推奨スタンスです。
                </div>
            </section>

            {/* ══════ STEP 7: CODE COVERAGE ══════ */}
            <section id="coverage">
                <div className="section-header">
                    <span className="section-num">
                        STEP 07 — CODE COVERAGE &amp; WHITE-BOX TECHNIQUES
                    </span>
                    <h2>コードカバレッジ — 測定と限界を知る</h2>
                    <div className="accent-line"></div>
                    <p>
                        コードカバレッジはテストの「どこをテストしたか」を示しますが、「正しくテストできているか」は保証しません。メトリクスとして活用しつつ、その限界を理解することが重要です。
                    </p>
                </div>

                <h3
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    カバレッジの種類（ISTQB CTFL Chapter 4：ホワイトボックス技法）
                </h3>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>種類</th>
                                <th>測定内容</th>
                                <th>計算式</th>
                                <th>到達難易度</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>
                                        命令カバレッジ
                                        <br />
                                        (Statement Coverage)
                                    </strong>
                                </td>
                                <td>実行された命令文の割合</td>
                                <td style={{ fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                                    実行命令数 / 全命令数
                                </td>
                                <td className="good">易しい（最低限）</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        分岐カバレッジ
                                        <br />
                                        (Branch Coverage)
                                    </strong>
                                </td>
                                <td>if/else の各分岐を通過した割合</td>
                                <td style={{ fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                                    実行分岐数 / 全分岐数
                                </td>
                                <td className="warn">中程度（推奨）</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        条件カバレッジ
                                        <br />
                                        (Condition Coverage)
                                    </strong>
                                </td>
                                <td>各条件式の True/False を網羅した割合</td>
                                <td style={{ fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                                    検証条件数 / 全条件数
                                </td>
                                <td className="warn">やや難しい</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        パスカバレッジ
                                        <br />
                                        (Path Coverage)
                                    </strong>
                                </td>
                                <td>全実行パス（経路）を通過した割合</td>
                                <td style={{ fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                                    実行パス数 / 全パス数
                                </td>
                                <td className="bad">非常に難しい（現実的でない場合も）</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        突然変異カバレッジ
                                        <br />
                                        (Mutation Coverage)
                                    </strong>
                                </td>
                                <td>コードの小変更（変異体）をテストが検出できる割合</td>
                                <td style={{ fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                                    検出変異体数 / 全変異体数
                                </td>
                                <td className="bad">高度（テスト品質の真の指標）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid-2 mt-3">
                    <div>
                        <div className="callout callout-danger">
                            <strong>「100%カバレッジ = 完璧なテスト」は嘘</strong>
                            <br />
                            カバレッジが高くても、アサートが適切でなければ意味がない。 例：
                            <code style={{ fontFamily: 'var(--font-mono)' }}>assert True</code>{' '}
                            を書けばカバレッジは上がるがテストは無価値。
                            <br />
                            <strong>
                                「カバレッジは穴を発見するものであり、品質を証明するものではない」
                            </strong>
                        </div>
                        <div className="callout callout-good mt-2">
                            <strong>推奨される使い方：</strong>
                            <br />
                            ・80〜90%を目標とする（100%は追わない）
                            <br />
                            ・低いカバレッジエリアを発見するツールとして使う
                            <br />
                            ・重要なビジネスロジックは90%+を義務化
                            <br />
                            ・生成コード・設定ファイルは除外する
                        </div>
                    </div>
                    <div>
                        <div className="code-block mt-1">
                            <div className="code-header">
                                <div className="code-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="code-lang">カバレッジ計測コマンド</span>
                            </div>
                            <pre
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm"># Python / pytest-cov</span>
pytest --cov=src --cov-report=html
pytest --cov=src --cov-fail-under=<span class="num">80</span>

<span class="cm"># Node.js / Jest</span>
jest --coverage
jest --coverageThreshold=<span class="str">'{"global":{"lines":80}}'</span>

<span class="cm"># Java / JaCoCo (Maven)</span>
mvn test jacoco:report

<span class="cm"># .NET / Coverlet</span>
dotnet test /p:CollectCoverage=<span class="cls">true</span>
  /p:CoverletOutputFormat=opencover

<span class="cm"># Vitest</span>
vitest run --coverage`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════ STEP 8: NAMING CONVENTIONS ══════ */}
            <section id="naming">
                <div className="section-header">
                    <span className="section-num">STEP 08 — TEST NAMING CONVENTIONS</span>
                    <h2>テストの命名規則 — 自己説明的なテスト名</h2>
                    <div className="accent-line"></div>
                    <p>
                        テスト名は「実行可能なドキュメント」です。誰が読んでも何をテストしているか瞬時に分かる名前をつけることで、テストは仕様書として機能します。
                    </p>
                </div>

                <h3
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    主要な命名パターン
                </h3>
                <div className="card-grid mt-1">
                    <div className="card">
                        <h3>
                            パターン 1：
                            <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em' }}>
                                UnitOfWork_StateUnderTest_ExpectedBehavior
                            </code>
                        </h3>
                        <p>
                            「テスト対象_前提状態_期待結果」の構造。明示的で構造化されている。英語コードベースで最も普及。
                        </p>
                        <div className="naming-box mt-2">
                            <span className="part">Divide</span>
                            <span className="sep">_</span>
                            <span className="part">ByZero</span>
                            <span className="sep">_</span>
                            <span className="part">ThrowsException</span>
                            <br />
                            <span className="eg">→ &quot;割り算_ゼロで割る_例外を投げる&quot;</span>
                        </div>
                    </div>
                    <div className="card">
                        <h3>
                            パターン 2：BDDスタイル{' '}
                            <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em' }}>
                                given_when_then
                            </code>
                        </h3>
                        <p>
                            Given-When-Thenを名前に組み込む。ビジネスロジックの複雑なシナリオに最適。BDDとの親和性が高い。
                        </p>
                        <div className="naming-box mt-2">
                            <span className="part">given_管理者ユーザー</span>
                            <span className="sep">_</span>
                            <br />
                            <span className="part">when_商品を削除する</span>
                            <span className="sep">_</span>
                            <br />
                            <span className="part">then_削除が成功する</span>
                            <br />
                            <span className="eg">→ Given_When_Then構造</span>
                        </div>
                    </div>
                    <div className="card">
                        <h3>パターン 3：日本語テスト名</h3>
                        <p>
                            日本語プロジェクトでは日本語の命名も有効。pytest・JUnit
                            5・Vitestは日本語テスト名をサポート。
                        </p>
                        <div className="naming-box mt-2">
                            <span className="eg">test_残高が足りない時_振込が失敗する</span>
                            <br />
                            <span className="eg">it(&apos;空のカートは合計0を返す&apos;)</span>
                            <br />
                            <span className="eg">@Test void 有効なメールアドレス_trueを返す()</span>
                        </div>
                    </div>
                </div>

                {/* 良い vs 悪い命名 */}
                <h3
                    className="mt-4"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    良いテスト名 vs 悪いテスト名
                </h3>
                <div className="anti-grid">
                    <div className="anti-card anti-bad">
                        <div className="anti-ttl">✗ 悪い命名の例</div>
                        <pre
                            style={{
                                background: 'transparent',
                                padding: 0,
                                fontSize: '11px',
                                color: 'var(--color-accent-red)',
                            }}
                            dangerouslySetInnerHTML={{
                                __html: `test1()
testCalculate()
test_ok()
TestDivideFunction()
should_pass()`,
                            }}
                        />
                    </div>
                    <div className="anti-card anti-good">
                        <div className="anti-ttl">✓ 良い命名の例</div>
                        <pre
                            style={{
                                background: 'transparent',
                                padding: 0,
                                fontSize: '11px',
                                color: 'var(--color-accent-green)',
                            }}
                            dangerouslySetInnerHTML={{
                                __html: `Divide_ByZero_ThrowsException()
test_ゼロ除算_ValueError送出()
getUser_WithInvalidId_ReturnsNone()
calculateTotal_EmptyCart_ReturnsZero()`,
                            }}
                        />
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://meetzest.com/blog/unit-testing-best-practice"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        meetzest.com — Naming Conventions (Nov 2025)
                    </a>
                </p>
            </section>

            {/* ══════ STEP 9: ANTI-PATTERNS ══════ */}
            <section id="antipatterns">
                <div className="section-header">
                    <span className="section-num">STEP 09 — UNIT TESTING ANTI-PATTERNS</span>
                    <h2>避けるべきアンチパターン</h2>
                    <div className="accent-line"></div>
                    <p>
                        悪いユニットテストは「書かないよりマシ」どころか、保守コストを増大させ、開発速度を下げます。代表的なアンチパターンを知って回避しましょう。
                    </p>
                </div>

                <div className="card-grid mt-2">
                    <div
                        className="card"
                        style={{ borderLeft: '4px solid var(--color-accent-red)' }}
                    >
                        <h3>🚫 実装の詳細をテストする</h3>
                        <p>
                            内部変数名・プライベートメソッドをテストすると、リファクタリング時にテストが壊れる「偽陰性」が頻発。ユーザーが観察できる振る舞いのみをテストすること。
                        </p>
                        <div className="anti-grid mt-2" style={{ gap: '0.5rem' }}>
                            <div
                                className="anti-card anti-bad"
                                style={{ padding: '0.7rem 0.9rem' }}
                            >
                                <div className="anti-ttl" style={{ fontSize: '11px' }}>
                                    ✗ 内部状態をテスト
                                </div>
                                <pre
                                    style={{
                                        background: 'transparent',
                                        padding: 0,
                                        fontSize: '10px',
                                        color: 'var(--color-accent-red)',
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: `assert svc._internal_flag == True
assert svc.__cache_size == 3`,
                                    }}
                                />
                            </div>
                            <div
                                className="anti-card anti-good"
                                style={{ padding: '0.7rem 0.9rem' }}
                            >
                                <div className="anti-ttl" style={{ fontSize: '11px' }}>
                                    ✓ 振る舞いをテスト
                                </div>
                                <pre
                                    style={{
                                        background: 'transparent',
                                        padding: 0,
                                        fontSize: '10px',
                                        color: 'var(--color-accent-green)',
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: `assert svc.get_result() == expected
assert svc.is_ready() == True`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{ borderLeft: '4px solid var(--color-accent-red)' }}
                    >
                        <h3>🚫 Flaky テスト（不安定なテスト）</h3>
                        <p>
                            時々PASSしたりFAILしたりするテスト。現在時刻・乱数・外部サービスの状態・実行順序に依存していることが原因。チームのテストへの信頼を破壊する。
                        </p>
                        <div className="callout callout-danger mt-2" style={{ fontSize: '12px' }}>
                            <strong>対処法：</strong>
                            時刻はモックで固定・乱数はシードで固定・外部依存はスタブに置き換え
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{ borderLeft: '4px solid var(--color-accent-orange)' }}
                    >
                        <h3>⚠️ 1テストで複数のことを検証</h3>
                        <p>
                            1つのテストで複数のassertが異なる概念を検証すると、失敗時の原因特定が困難になる。「1テスト1概念」の原則を守ること。
                        </p>
                        <div className="callout callout-warn mt-2" style={{ fontSize: '12px' }}>
                            例外：同一の結果を複数の側面から確認する場合（ステータスコードと返り値を両方確認など）は許容される。
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{ borderLeft: '4px solid var(--color-accent-orange)' }}
                    >
                        <h3>⚠️ テスト間で状態を共有する</h3>
                        <p>
                            グローバル変数・クラス変数・ファイルシステムなど、テスト間で状態が共有されると実行順序に依存したバグが生じる。各テストは完全に独立した状態で開始すること。
                        </p>
                    </div>
                    <div
                        className="card"
                        style={{ borderLeft: '4px solid var(--color-accent-orange)' }}
                    >
                        <h3>⚠️ 過度なモック依存</h3>
                        <p>
                            全ての依存をモックにすると、テストは「実装通りに動くか」ではなく「期待通りのメソッドが呼ばれるか」のチェックになり、実際のバグを見逃す。
                        </p>
                    </div>
                    <div
                        className="card"
                        style={{ borderLeft: '4px solid var(--color-text-muted)' }}
                    >
                        <h3>💡 コードカバレッジ至上主義</h3>
                        <p>
                            100%カバレッジを目指してassertのないテストを書く。カバレッジの数字だけが上がり、実際の品質保証には全く貢献しない「空のテスト」が増殖する。
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════ STEP 10: FRAMEWORKS ══════ */}
            <section id="frameworks">
                <div className="section-header">
                    <span className="section-num">STEP 10 — UNIT TESTING FRAMEWORKS 2025</span>
                    <h2>2025年 主要ユニットテストフレームワーク</h2>
                    <div className="accent-line"></div>
                    <p>
                        言語・プロジェクトの特性に合ったフレームワークの選択が、テストの継続性に直結します。2025年の最新動向を踏まえて解説します。
                    </p>
                </div>

                <h3
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    JavaScript / TypeScript
                </h3>
                <div className="fw-grid">
                    <div className="fw-card">
                        <div className="fw-name">⚡ Jest</div>
                        <span className="fw-lang badge-e2e">Meta / OpenJS Foundation</span>
                        <div className="fw-desc">
                            React・Node.jsの業界標準。ゼロコンフィグ・スナップショット・モック内蔵。Meta・GitHubが使用。Reactには引き続き最適解。
                        </div>
                        <span className="badge badge-unit">最も普及</span>
                    </div>
                    <div className="fw-card">
                        <div className="fw-name">🚀 Vitest</div>
                        <span className="fw-lang badge-e2e">Vite Team</span>
                        <div className="fw-desc">
                            Viteプロジェクトの決定版。Jestとほぼ同一API。テスト実行が30〜70%高速。ESM・TypeScriptをネイティブサポート。
                        </div>
                        <span className="badge badge-int">モダン推奨</span>
                    </div>
                    <div className="fw-card">
                        <div className="fw-name">🔌 Mocha + Chai</div>
                        <span className="fw-lang badge-e2e">OpenJS Foundation</span>
                        <div className="fw-desc">
                            柔軟なNode.js向けフレームワーク。Chai（アサーション）・Sinon（スパイ）と組み合わせて使う。カスタマイズ性が高い。
                        </div>
                        <span className="badge badge-muted">実績豊富</span>
                    </div>
                </div>

                <h3
                    className="mt-3"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    Python
                </h3>
                <div className="fw-grid">
                    <div className="fw-card">
                        <div className="fw-name">🐍 pytest</div>
                        <span className="fw-lang badge-int">Python Community</span>
                        <div className="fw-desc">
                            Pythonの事実上の標準。シンプルな構文・強力なフィクスチャ・800以上のプラグイン。Netflix・Dropboxが使用。
                        </div>
                        <span className="badge badge-unit">最推奨</span>
                    </div>
                    <div className="fw-card">
                        <div className="fw-name">📦 unittest</div>
                        <span className="fw-lang badge-int">Python 標準ライブラリ</span>
                        <div className="fw-desc">
                            Pythonビルトイン。追加インストール不要。JUnit由来のxUnitスタイル。pytestで
                            unittest テストも実行可能。
                        </div>
                        <span className="badge badge-muted">標準内蔵</span>
                    </div>
                </div>

                <h3
                    className="mt-3"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    Java / Kotlin
                </h3>
                <div className="fw-grid">
                    <div className="fw-card">
                        <div className="fw-name">☕ JUnit 5</div>
                        <span className="fw-lang badge-muted">JUnit Team</span>
                        <div className="fw-desc">
                            Javaの絶対標準。アノテーション駆動・拡張モデル・JVM言語全般対応。Google・Amazon・Microsoftが使用。
                        </div>
                        <span className="badge badge-unit">Java標準</span>
                    </div>
                    <div className="fw-card">
                        <div className="fw-name">🎯 Mockito</div>
                        <span className="fw-lang badge-muted">Mockito Team</span>
                        <div className="fw-desc">
                            Java最強のモッキングライブラリ。JUnit
                            5と組み合わせて使用。Kotlin向けにmockk(MockK)も人気。
                        </div>
                        <span className="badge badge-e2e">モック専門</span>
                    </div>
                </div>

                <h3
                    className="mt-3"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    .NET (C#)
                </h3>
                <div className="fw-grid">
                    <div className="fw-card">
                        <div className="fw-name">🔷 xUnit.net</div>
                        <span className="fw-lang badge-int">Microsoft推奨</span>
                        <div className="fw-desc">
                            Microsoftが推奨する最新.NETテストフレームワーク。マイクロサービス・クリーンアーキテクチャとの相性が良い。
                        </div>
                        <span className="badge badge-int">.NET推奨</span>
                    </div>
                    <div className="fw-card">
                        <div className="fw-name">🔶 NUnit</div>
                        <span className="fw-lang badge-int">.NET Foundation</span>
                        <div className="fw-desc">
                            JUnitから移植された老舗フレームワーク。安定性と豊富なドキュメント。エンタープライズでの採用が多い。
                        </div>
                        <span className="badge badge-muted">実績豊富</span>
                    </div>
                </div>

                {/* 比較表 */}
                <h3
                    className="mt-4"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    フレームワーク比較（2025年）
                </h3>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>FW</th>
                                <th>言語</th>
                                <th>実行速度</th>
                                <th>設定の容易さ</th>
                                <th>2025年推奨度</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Jest</strong>
                                </td>
                                <td>JS/TS</td>
                                <td className="warn">普通（大規模で低下）</td>
                                <td className="good">ゼロコンフィグ</td>
                                <td className="good">★★★★★ React必携</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Vitest</strong>
                                </td>
                                <td>JS/TS</td>
                                <td className="good">高速（30〜70%↑）</td>
                                <td className="good">Viteと統合</td>
                                <td className="good">★★★★★ Vite推奨</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>pytest</strong>
                                </td>
                                <td>Python</td>
                                <td className="good">高速</td>
                                <td className="good">最小限の設定</td>
                                <td className="good">★★★★★ Python必携</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>JUnit 5</strong>
                                </td>
                                <td>Java/Kotlin</td>
                                <td className="warn">普通</td>
                                <td className="warn">Maven/Gradle必要</td>
                                <td className="good">★★★★★ Java標準</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>xUnit.net</strong>
                                </td>
                                <td>C#/.NET</td>
                                <td className="good">高速</td>
                                <td className="good">dotnet test統合</td>
                                <td className="good">★★★★☆ .NET推奨</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm mt-1">
                    参照:
                    <a
                        href="https://apidog.com/blog/top10-unit-testing-tools/"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        apidog.com — Top 10 Unit Testing Tools 2026
                    </a>{' '}
                    <a
                        href="https://www.scmgalaxy.com/tutorials/top-10-unit-testing-frameworks-features-pros-cons-comparison/"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        scmgalaxy.com — Top 10 Frameworks Comparison (Dec 2025)
                    </a>{' '}
                    <a
                        href="https://medium.com/@ruverd/jest-vs-vitest-which-test-runner-should-you-use-in-2025-5c85e4f2bda9"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        medium.com — Jest vs Vitest (Nov 2025)
                    </a>{' '}
                    <a
                        href="https://www.practitest.com/resource-center/blog/best-unit-testing-tools/"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        practitest.com — Best Unit Testing Tools 2026
                    </a>{' '}
                    <a
                        href="https://testomat.io/blog/unit-testing-tools/"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        testomat.io — Unit Testing Tools (Oct 2025)
                    </a>
                </p>
            </section>

            {/* ══════ STEP 11: CI/CD INTEGRATION ══════ */}
            <section id="cicd">
                <div className="section-header">
                    <span className="section-num">STEP 11 — CI/CD INTEGRATION</span>
                    <h2>CI/CDパイプラインへの統合</h2>
                    <div className="accent-line"></div>
                    <p>
                        ユニットテストはローカルだけで実行するのでなく、
                        <strong>全てのコードプッシュで自動実行</strong>
                        されることで初めて真価を発揮します。GitHub Actions
                        を例に実装方法を解説します。
                    </p>
                </div>

                <div className="grid-2 mt-2">
                    <div>
                        <div className="code-block">
                            <div className="code-header">
                                <div className="code-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="code-lang">GitHub Actions — Python/pytest</span>
                            </div>
                            <pre
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm"># .github/workflows/test.yml</span>
<span class="dec">name</span>: Unit Tests

<span class="dec">on</span>:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

<span class="dec">jobs</span>:
  <span class="fn">test</span>:
    <span class="dec">runs-on</span>: ubuntu-latest

    <span class="dec">strategy</span>:
      <span class="dec">matrix</span>:
        <span class="dec">python-version</span>: [<span class="str">"3.11"</span>, <span class="str">"3.12"</span>]

    <span class="dec">steps</span>:
      - <span class="dec">uses</span>: actions/checkout@v4
      - <span class="dec">uses</span>: actions/setup-python@v5
        <span class="dec">with</span>:
          <span class="dec">python-version</span>: \${{ matrix.python-version }}
      - <span class="dec">run</span>: pip install -r requirements-dev.txt
      - <span class="dec">run</span>: |
          pytest --cov=src \\
                 --cov-report=xml \\
                 --cov-fail-under=<span class="num">80</span> \\
                 -v
      - <span class="dec">uses</span>: codecov/codecov-action@v4`,
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="code-block">
                            <div className="code-header">
                                <div className="code-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="code-lang">GitHub Actions — Node.js/Jest</span>
                            </div>
                            <pre
                                dangerouslySetInnerHTML={{
                                    __html: `<span class="cm"># .github/workflows/test.yml</span>
<span class="dec">name</span>: Unit Tests

<span class="dec">on</span>: [push, pull_request]

<span class="dec">jobs</span>:
  <span class="fn">test</span>:
    <span class="dec">runs-on</span>: ubuntu-latest

    <span class="dec">strategy</span>:
      <span class="dec">matrix</span>:
        <span class="dec">node-version</span>: [<span class="num">20</span>, <span class="num">22</span>]

    <span class="dec">steps</span>:
      - <span class="dec">uses</span>: actions/checkout@v4
      - <span class="dec">uses</span>: actions/setup-node@v4
        <span class="dec">with</span>:
          <span class="dec">node-version</span>: \${{ matrix.node-version }}
          <span class="dec">cache</span>: <span class="str">'npm'</span>
      - <span class="dec">run</span>: npm ci
      - <span class="dec">run</span>: npm test -- \\
               --coverage \\
               --coverageThreshold='{"global":{"lines":80}}'
      - <span class="dec">uses</span>: codecov/codecov-action@v4`,
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* CI/CD ベストプラクティス */}
                <h3
                    className="mt-4"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                    }}
                >
                    CI/CD統合のベストプラクティス
                </h3>
                <div className="card-grid">
                    <div className="card-sm">
                        <div
                            style={{
                                fontSize: '13px',
                                fontWeight: 700,
                                color: 'var(--color-accent-green)',
                                marginBottom: '5px',
                            }}
                        >
                            プルリクエストをブロック
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                            テストが失敗したらマージを禁止する。Branchプロテクションルールで「テスト通過」を必須条件にする。
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{
                                fontSize: '13px',
                                fontWeight: 700,
                                color: 'var(--color-accent-green)',
                                marginBottom: '5px',
                            }}
                        >
                            並列実行で高速化
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                            大規模テストスイートはシャーディングや並列実行ワーカーを活用して実行時間を短縮する。
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{
                                fontSize: '13px',
                                fontWeight: 700,
                                color: 'var(--color-accent-green)',
                                marginBottom: '5px',
                            }}
                        >
                            カバレッジ閾値の設定
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                            <code style={{ fontFamily: 'var(--font-mono)' }}>
                                --cov-fail-under=80
                            </code>{' '}
                            などで最低カバレッジを強制。下回ったらビルドを失敗させる。
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{
                                fontSize: '13px',
                                fontWeight: 700,
                                color: 'var(--color-accent-green)',
                                marginBottom: '5px',
                            }}
                        >
                            テスト結果の可視化
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                            Codecov・SonarQube・JUnit
                            XMLレポートを活用してカバレッジトレンドと失敗テストを視覚化する。
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{
                                fontSize: '13px',
                                fontWeight: 700,
                                color: 'var(--color-accent-orange)',
                                marginBottom: '5px',
                            }}
                        >
                            Flaky Test の隔離
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                            不安定なテストはタグ付けして別ジョブで実行。メインパイプラインをブロックしないようにする。
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{
                                fontSize: '13px',
                                fontWeight: 700,
                                color: 'var(--color-accent-green)',
                                marginBottom: '5px',
                            }}
                        >
                            ローカルと同じ環境
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                            Dockerを使ってCI環境とローカル環境を揃える。「ローカルでは通るがCIでは落ちる」問題を排除する。
                        </div>
                    </div>
                </div>

                <div className="callout callout-good mt-3">
                    <strong>「金曜日にリリースできるチーム」の秘訣：</strong>
                    ユニットテストをCI/CDパイプラインに組み込み、全プッシュで自動実行することで、
                    コードベースは常に「動作することが証明された状態」に保たれます。
                    テストが充実したチームは、変更への恐怖がなく、高い頻度でリリースできます。
                    <a
                        href="https://jsschools.com/programming/unit-testing-best-practices-principles-and-patter/"
                        className="ulink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        jsschools.com — Unit Testing Best Practices
                    </a>
                </div>
            </section>

            {/* ══════ REFERENCES ══════ */}
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
                                    <a
                                        href="https://istqb.org/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://istqb.org/
                                    </a>
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
                                        rel="noopener noreferrer"
                                    >
                                        https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/
                                    </a>
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
                                        rel="noopener noreferrer"
                                    >
                                        https://istqb.org/certifications/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>ISTQBグロッサリー（用語集）</td>
                                <td>
                                    <a
                                        href="https://glossary.istqb.org/en_US/search?term="
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://glossary.istqb.org/en_US/search?term=
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>JSTQB（日本語版）</td>
                                <td>
                                    <a
                                        href="https://jstqb.jp/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://jstqb.jp/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>ベストプラクティス</td>
                                <td>Unit Testing Best Practices 2025（Zest）</td>
                                <td>
                                    <a
                                        href="https://meetzest.com/blog/unit-testing-best-practice"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://meetzest.com/blog/unit-testing-best-practice
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>ベストプラクティス</td>
                                <td>
                                    Unit Testing Best Practices Principles &amp; Patterns（Jul
                                    2025）
                                </td>
                                <td>
                                    <a
                                        href="https://jsschools.com/programming/unit-testing-best-practices-principles-and-patter/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://jsschools.com/programming/unit-testing-best-practices-principles-and-patter/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>ベストプラクティス</td>
                                <td>IBM — Unit Testing Best Practices</td>
                                <td>
                                    <a
                                        href="https://www.ibm.com/think/insights/unit-testing-best-practices"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.ibm.com/think/insights/unit-testing-best-practices
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>AAAパターン</td>
                                <td>Semaphore — AAA Pattern（Jan 2025）</td>
                                <td>
                                    <a
                                        href="https://semaphore.io/blog/aaa-pattern-test-automation"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://semaphore.io/blog/aaa-pattern-test-automation
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>AAAパターン</td>
                                <td>Quash — AAA Pattern Guide（Aug 2025）</td>
                                <td>
                                    <a
                                        href="https://quashbugs.com/blog/aaa-pattern-unit-testing-automation"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://quashbugs.com/blog/aaa-pattern-unit-testing-automation
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>AAAパターン</td>
                                <td>Manning — Making Better Unit Tests: the AAA Pattern</td>
                                <td>
                                    <a
                                        href="https://freecontent.manning.com/making-better-unit-tests-part-1-the-aaa-pattern/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://freecontent.manning.com/making-better-unit-tests-part-1-the-aaa-pattern/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>TDD</td>
                                <td>Wikipedia — Test-driven development</td>
                                <td>
                                    <a
                                        href="https://en.wikipedia.org/wiki/Test-driven_development"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://en.wikipedia.org/wiki/Test-driven_development
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>TDD</td>
                                <td>Virtuoso QA — TDD: Principles, Practices &amp; Benefits</td>
                                <td>
                                    <a
                                        href="https://www.virtuosoqa.com/post/test-driven-development"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.virtuosoqa.com/post/test-driven-development
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>テストダブル</td>
                                <td>Martin Fowler — Mocks Aren&apos;t Stubs</td>
                                <td>
                                    <a
                                        href="https://martinfowler.com/articles/mocksArentStubs.html"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://martinfowler.com/articles/mocksArentStubs.html
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>テストダブル</td>
                                <td>Martin Fowler — Test Double</td>
                                <td>
                                    <a
                                        href="https://martinfowler.com/bliki/TestDouble.html"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://martinfowler.com/bliki/TestDouble.html
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>テストダブル</td>
                                <td>j-labs.pl — Mocks, Stubs and Spies（Dec 2025）</td>
                                <td>
                                    <a
                                        href="https://www.j-labs.pl/en/tech-blog/mocks-stubs-and-spies-in-unit-testing-based-on-mockito/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.j-labs.pl/en/tech-blog/mocks-stubs-and-spies-in-unit-testing-based-on-mockito/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>テストダブル</td>
                                <td>testRigor — Mocks, Spies, and Stubs</td>
                                <td>
                                    <a
                                        href="https://testrigor.com/blog/mocks-spies-and-stubs/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://testrigor.com/blog/mocks-spies-and-stubs/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>テストダブル</td>
                                <td>Atomic Object — Mocks, Stubs, or Spies?</td>
                                <td>
                                    <a
                                        href="https://spin.atomicobject.com/mocks-stubs-or-spies/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://spin.atomicobject.com/mocks-stubs-or-spies/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>フレームワーク</td>
                                <td>apidog.com — Top 10 Unit Testing Tools 2026</td>
                                <td>
                                    <a
                                        href="https://apidog.com/blog/top10-unit-testing-tools/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://apidog.com/blog/top10-unit-testing-tools/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>フレームワーク</td>
                                <td>scmGalaxy — Top 10 Frameworks Comparison（Dec 2025）</td>
                                <td>
                                    <a
                                        href="https://www.scmgalaxy.com/tutorials/top-10-unit-testing-frameworks-features-pros-cons-comparison/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.scmgalaxy.com/tutorials/top-10-unit-testing-frameworks-features-pros-cons-comparison/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>フレームワーク</td>
                                <td>PractiTest — Best Unit Testing Tools 2026</td>
                                <td>
                                    <a
                                        href="https://www.practitest.com/resource-center/blog/best-unit-testing-tools/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.practitest.com/resource-center/blog/best-unit-testing-tools/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>フレームワーク</td>
                                <td>testomat.io — Unit Testing Tools（Oct 2025）</td>
                                <td>
                                    <a
                                        href="https://testomat.io/blog/unit-testing-tools/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://testomat.io/blog/unit-testing-tools/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>フレームワーク</td>
                                <td>globalapptesting.com — 8 Unit Testing Tools 2025</td>
                                <td>
                                    <a
                                        href="https://www.globalapptesting.com/blog/unit-testing-tools"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.globalapptesting.com/blog/unit-testing-tools
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>フレームワーク</td>
                                <td>Raygun — JavaScript Unit Testing Frameworks</td>
                                <td>
                                    <a
                                        href="https://raygun.com/blog/javascript-unit-testing-frameworks/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://raygun.com/blog/javascript-unit-testing-frameworks/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>フレームワーク</td>
                                <td>Medium — Jest vs Vitest 2025（Nov 2025）</td>
                                <td>
                                    <a
                                        href="https://medium.com/@ruverd/jest-vs-vitest-which-test-runner-should-you-use-in-2025-5c85e4f2bda9"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://medium.com/@ruverd/jest-vs-vitest-which-test-runner-should-you-use-in-2025-5c85e4f2bda9
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>フレームワーク</td>
                                <td>frugaltesting.com — Best Unit Testing Frameworks</td>
                                <td>
                                    <a
                                        href="https://www.frugaltesting.com/blog/best-unit-testing-frameworks-features-benefits-and-how-to-choose"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.frugaltesting.com/blog/best-unit-testing-frameworks-features-benefits-and-how-to-choose
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>フレームワーク</td>
                                <td>startEarly — 22 Unit Testing Frameworks（Apr 2025）</td>
                                <td>
                                    <a
                                        href="https://www.startearly.ai/post/unit-testing-frameworks"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.startearly.ai/post/unit-testing-frameworks
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>CI/CD</td>
                                <td>
                                    contextqa.com — How to Choose Automated Testing Framework 2025
                                </td>
                                <td>
                                    <a
                                        href="https://contextqa.com/blog/automated-testing-framework/"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://contextqa.com/blog/automated-testing-framework/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Kent C. Dodds</td>
                                <td>kentcdodds.com — Testing Implementation Details</td>
                                <td>
                                    <a
                                        href="https://kentcdodds.com/blog/testing-implementation-details"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://kentcdodds.com/blog/testing-implementation-details
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Kent C. Dodds</td>
                                <td>kentcdodds.com — The Testing Trophy</td>
                                <td>
                                    <a
                                        href="https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications"
                                        className="ref-url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ══════ FOOTER ══════ */}
            <footer>
                <p>
                    ユニットテスト完全ガイド 2025 &nbsp;|&nbsp;
                    <a
                        href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ISTQB CTFL v4.0
                    </a>{' '}
                    準拠 &nbsp;|&nbsp;
                    FIRST原則・AAAパターン・TDD・テストダブル・2025年最新フレームワーク対応
                </p>
                <p
                    style={{
                        marginTop: '0.4rem',
                        fontSize: '10px',
                        color: 'var(--color-text-muted)',
                    }}
                >
                    © 2025 — Good code is proven by good tests. Test early, test often.
                </p>
            </footer>
        </main>
    );
}
