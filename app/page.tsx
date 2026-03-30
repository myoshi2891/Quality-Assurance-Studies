import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>

            <section
                className="hero min-h-screen flex flex-col justify-center pt-[60px] relative overflow-hidden hero-bg-glow"
                id="top"
            >
                <div className="hero-content animate-[fadeUp_0.7s_ease_forwards]">
                    <span
                        className="hero-eyebrow inline-flex items-center gap-2 font-mono text-[12px] font-medium text-accent-cyan tracking-[0.15em] bg-accent-cyan/10 border border-accent-cyan/25 py-[6px] px-[14px] rounded-[20px] mb-6 animate-[fadeUp_0.5s_ease_forwards] before:content-[&quot;▶&quot;] before:text-[9px]"
                        >現代ソフトウェアテスト完全ガイド 2025</span
                    >
                    <h1>
                        テストは、<span>品質を</span><br />
                        届けるための<br />
                        <span>羅針盤</span>である。
                    </h1>
                    <p
                        className="hero-sub text-[1.05rem] text-text-secondary max-w-[680px] leading-[1.9] mb-10"
                    >
                        ユニットテストからE2Eテストまで、ISTQB CTFL v4.0 シラバス準拠。
                        2025年最新のツール動向・アーキテクチャ戦略・セキュリティ要件を網羅した、
                        初学者から上級者まで対応するステップバイステップのリファレンスガイドです。
                    </p>
                    <div className="hero-stats flex flex-wrap gap-6 mb-12">
                        <div
                            className="stat flex flex-col py-4 px-6 bg-bg-card border border-border rounded-sm"
                        >
                            <span className="stat-num font-mono text-2xl font-bold text-accent-cyan"
                                >1.4M+</span
                            >
                            <span className="stat-label text-[12px] text-text-secondary mt-[2px]"
                                >ISTQB認定者数（130カ国）</span
                            >
                        </div>
                        <div
                            className="stat flex flex-col py-4 px-6 bg-bg-card border border-border rounded-sm"
                        >
                            <span className="stat-num font-mono text-2xl font-bold text-accent-cyan"
                                >6</span
                            >
                            <span className="stat-label text-[12px] text-text-secondary mt-[2px]"
                                >テストプロセスステップ</span
                            >
                        </div>
                        <div
                            className="stat flex flex-col py-4 px-6 bg-bg-card border border-border rounded-sm"
                        >
                            <span className="stat-num font-mono text-2xl font-bold text-accent-cyan"
                                >7</span
                            >
                            <span className="stat-label text-[12px] text-text-secondary mt-[2px]"
                                >テストの基本原則</span
                            >
                        </div>
                        <div
                            className="stat flex flex-col py-4 px-6 bg-bg-card border border-border rounded-sm"
                        >
                            <span className="stat-num font-mono text-2xl font-bold text-accent-cyan"
                                >4</span
                            >
                            <span className="stat-label text-[12px] text-text-secondary mt-[2px]"
                                >主要テストレベル</span
                            >
                        </div>
                    </div>

                    {/*  Pyramid  */}
                    <div className="pyramid-container">
                        <div className="pyramid-layer py-e2e">
                            <span className="py-label">E2Eテスト</span>
                            <span className="py-sub">少数・低速・高信頼</span>
                        </div>
                        <div className="pyramid-layer py-func">
                            <span className="py-label">機能テスト / 結合テスト</span>
                            <span className="py-sub">中程度</span>
                        </div>
                        <div className="pyramid-layer py-int">
                            <span className="py-label">インテグレーションテスト</span>
                            <span className="py-sub">コンポーネント間の連携</span>
                        </div>
                        <div className="pyramid-layer py-unit">
                            <span className="py-label">ユニットテスト（単体テスト）</span>
                            <span className="py-sub">多数・高速・低コスト</span>
                        </div>
                        <div className="py-axis">
                            <span>⬅ 高速・低コスト</span>
                            <span>テストの形状（Test Pyramid）</span>
                            <span>高信頼・低速 ➡</span>
                        </div>
                    </div>

                    <div
                        className="callout callout-info border-l-[3px] py-4 px-5 rounded-r-sm my-4 mt-6 text-[13.5px] leading-[1.75] border-accent-blue bg-accent-blue/5"
                    >
                        <strong>シフトレフト × シフトライト</strong>
                        &nbsp;—
                        2025年の業界標準は、要件定義段階からテストを組み込む「シフトレフト」と、
                        本番環境での継続的監視を行う「シフトライト」を<strong>融合させたアプローチ</strong>です。
                        これにより欠陥の早期発見・修正コストの削減・システムの高回復力（レジリエンス）が同時に実現されます。
                        <br /><a
                            rel="noopener"
                            href="https://blog.qasource.com/shift-left-testing-a-beginners-guide-to-advancing-automation-with-generative-ai"
                            className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                            target="_blank"
                            >blog.qasource.com — Shift-Left Testing 2025</a
                        >
                        &nbsp;
                        <a
                            rel="noopener"
                            href="https://trendig.com/en/blog/software-testing-trends-2025/"
                            className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                            target="_blank"
                            >trendig.com — Software Testing Trends 2025</a
                        >
                    </div>
                </div>
            </section>

            {/*  ════════════════════════════════════════
     SECTION 0: TEST SHAPES OVERVIEW
════════════════════════════════════════  */}
            <section id="overview">
                <div className="section-header mb-8">
                    <span
                        className="section-num font-mono text-[11px] font-bold text-accent-cyan tracking-[0.2em] block mb-2"
                        >SECTION 00 — TEST STRATEGY</span
                    >
                    <h2>テスト戦略の「形状」を理解する</h2>
                    <div
                        className="accent-line w-[48px] h-[3px] rounded-[2px] bg-accent-cyan my-4"
                    ></div>
                    <p>
                        どの種類のテストにどれだけリソースを投資するかを視覚的に表した「テストの形状（Test
                        Shapes）」は、
                        単なるメタファーではなく、投資対効果（ROI）を左右する重要な戦略指針です。
                    </p>
                </div>

                <div className="table-wrapper overflow-x-auto my-6">
                    <table>
                        <thead>
                            <tr>
                                <th>形状モデル</th>
                                <th>推奨コンテキスト</th>
                                <th>特徴</th>
                                <th>参照</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>テストピラミッド</strong><br /><span
                                        className="badge badge-unit inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-cyan/12 text-unit border border-accent-cyan/30"
                                        >Test Pyramid</span
                                    >
                                </td>
                                <td>バックエンド・モノリシックシステム</td>
                                <td>
                                    ユニットテストを土台に、少数のE2Eを頂点とする伝統的アプローチ
                                </td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://www.design-master.com/pyramid-diamond-honeycomb-or-trophy-find-a-testing-strategy-that-fits.html"
                                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                                        target="_blank"
                                        >design-master.com</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>テストトロフィー</strong><br /><span
                                        className="badge badge-int inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-blue/12 text-integration border border-accent-blue/30"
                                        >Test Trophy</span
                                    >
                                </td>
                                <td>モダンなフロントエンド（React, SPA）</td>
                                <td>
                                    Kent C.
                                    Dodds提唱。静的解析を土台に結合テストを最大化。モックを最小限に
                                </td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications"
                                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                                        target="_blank"
                                        >kentcdodds.com</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>テストハニカム</strong><br /><span
                                        className="badge badge-func inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-purple/12 text-functional border border-accent-purple/30"
                                        >Test Honeycomb</span
                                    >
                                </td>
                                <td>マイクロサービスアーキテクチャ</td>
                                <td>
                                    Spotify提唱。サービス間の連携テストに最大投資。個別関数より統合を重視
                                </td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://premiersoft.net/en/blog/an-analysis-of-the-different-test-shapes"
                                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                                        target="_blank"
                                        >premiersoft.net</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>テストダイヤモンド</strong><br /><span
                                        className="badge badge-e2e inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-orange/12 text-e2e border border-accent-orange/30"
                                        >Test Diamond</span
                                    >
                                </td>
                                <td>過渡期のアーキテクチャ</td>
                                <td>
                                    ピラミッドの適応形。統合テストの比重を拡大し、E2Eと単体の中間に位置
                                </td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://www.design-master.com/pyramid-diamond-honeycomb-or-trophy-find-a-testing-strategy-that-fits.html"
                                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                                        target="_blank"
                                        >design-master.com</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>アイスクリームコーン</strong><br /><span
                                        className="badge badge-sec inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-red/12 text-accent-red border border-accent-red/30"
                                        >Anti-Pattern</span
                                    >
                                </td>
                                <td>🚫 アンチパターン（避けるべき）</td>
                                <td>
                                    E2E・手動テストに過度依存し、ユニットテストが極端に少ない状態。メンテナンスコスト極大
                                </td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://www.design-master.com/pyramid-diamond-honeycomb-or-trophy-find-a-testing-strategy-that-fits.html"
                                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                                        target="_blank"
                                        >design-master.com</a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/*  ════════════════════════════════════════
     STEP 1: UNIT TEST
════════════════════════════════════════  */}
            <section id="step1">
                <div className="section-header mb-8">
                    <span
                        className="section-num font-mono text-[11px] font-bold text-accent-cyan tracking-[0.2em] block mb-2"
                        >STEP 01 — UNIT TESTING</span
                    >
                    <h2>ユニットテスト（単体テスト）</h2>
                    <div
                        className="accent-line w-[48px] h-[3px] rounded-[2px] bg-accent-cyan my-4"
                    ></div>
                    <p>
                        ソフトウェアの最小単位（関数・クラス・メソッド）を、
                        <strong>外部依存なしに単独で</strong>検証するプロセス。 ISTQB
                        では「コンポーネントテスト」と呼ばれます（CTFL v4.0 Section 2.2）。
                    </p>
                    <div className="flex gap-2 flex-wrap mt-4">
                        <span
                            className="badge badge-unit inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-cyan/12 text-unit border border-accent-cyan/30"
                            >ISTQB Level 1</span
                        >
                        <span
                            className="badge badge-unit inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-cyan/12 text-unit border border-accent-cyan/30"
                            >最速実行</span
                        >
                        <span
                            className="badge badge-unit inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-cyan/12 text-unit border border-accent-cyan/30"
                            >開発者が実施</span
                        >
                        <span
                            className="badge badge-unit inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-cyan/12 text-unit border border-accent-cyan/30"
                            >モック・スタブを活用</span
                        >
                    </div>
                </div>

                {/*  Why Unit Tests  */}
                <div
                    className="callout callout-info border-l-[3px] py-4 px-5 rounded-r-sm my-4 text-[13.5px] leading-[1.75] border-accent-blue bg-accent-blue/5"
                >
                    <strong>なぜユニットテストが最重要か？</strong>　IBM研究によれば、
                    本番で発見したバグの修正コストはユニットテスト段階の<strong>約100倍</strong>になります。
                    早期発見 = コスト最小化のための最も費用対効果の高い投資です。 <br /><a
                        rel="noopener"
                        href="https://www.ibm.com/think/insights/unit-testing-best-practices"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >ibm.com — Unit Testing Best Practices</a
                    >
                    &nbsp;
                    <a
                        rel="noopener"
                        href="https://www.testdevlab.com/blog/the-ultimate-guide-to-unit-testing"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >testdevlab.com — Ultimate Guide to Unit Testing</a
                    >
                </div>

                {/*  FIRST Principles  */}
                <h3
                    className="mt-8"
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.1rem","fontWeight":"600","marginBottom":"1rem"}}
                >
                    FIRST原則 — 優れたユニットテストの5条件
                </h3>
                <div className="card-grid grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                    <div
                        className="card-sm bg-bg-card border border-border rounded-sm py-4 px-5 transition-all duration-200 hover:bg-bg-card-hover hover:border-border-bright"
                    >
                        <span
                            style={{"fontFamily":"var(--font-mono)","fontSize":"1.2rem","color":"var(--unit-color)","fontWeight":"700"}}
                            >F</span
                        >ast
                        <p style={{"fontSize":"13px","color":"var(--text-secondary)","marginTop":"4px"}}>
                            ミリ秒単位で実行完了。ファイルI/O・ネットワーク・DB接続を含めない。
                            テストスイート全体が1〜2分以内に終わることが理想。
                        </p>
                    </div>
                    <div
                        className="card-sm bg-bg-card border border-border rounded-sm py-4 px-5 transition-all duration-200 hover:bg-bg-card-hover hover:border-border-bright"
                    >
                        <span
                            style={{"fontFamily":"var(--font-mono)","fontSize":"1.2rem","color":"var(--unit-color)","fontWeight":"700"}}
                            >I</span
                        >solated
                        <p style={{"fontSize":"13px","color":"var(--text-secondary)","marginTop":"4px"}}>
                            他テストへの依存なし・順序不依存。
                            外部リソースはモック（Mock）・スタブ（Stub）・フェイク（Fake）で代替。
                        </p>
                    </div>
                    <div
                        className="card-sm bg-bg-card border border-border rounded-sm py-4 px-5 transition-all duration-200 hover:bg-bg-card-hover hover:border-border-bright"
                    >
                        <span
                            style={{"fontFamily":"var(--font-mono)","fontSize":"1.2rem","color":"var(--unit-color)","fontWeight":"700"}}
                            >R</span
                        >epeatable
                        <p style={{"fontSize":"13px","color":"var(--text-secondary)","marginTop":"4px"}}>
                            何度実行しても同じ結果（決定論的）。
                            現在時刻・乱数・環境変数への依存を排除する。
                        </p>
                    </div>
                    <div
                        className="card-sm bg-bg-card border border-border rounded-sm py-4 px-5 transition-all duration-200 hover:bg-bg-card-hover hover:border-border-bright"
                    >
                        <span
                            style={{"fontFamily":"var(--font-mono)","fontSize":"1.2rem","color":"var(--unit-color)","fontWeight":"700"}}
                            >S</span
                        >elf-validating
                        <p style={{"fontSize":"13px","color":"var(--text-secondary)","marginTop":"4px"}}>
                            PASS/FAILを自動で判断。
                            人間がログを見て合否を判断するテストは自己検証的でない。
                        </p>
                    </div>
                    <div
                        className="card-sm bg-bg-card border border-border rounded-sm py-4 px-5 transition-all duration-200 hover:bg-bg-card-hover hover:border-border-bright"
                    >
                        <span
                            style={{"fontFamily":"var(--font-mono)","fontSize":"1.2rem","color":"var(--unit-color)","fontWeight":"700"}}
                            >T</span
                        >imely
                        <p style={{"fontSize":"13px","color":"var(--text-secondary)","marginTop":"4px"}}>
                            プロダクションコードの直前・直後に記述（TDDなら先に書く）。
                            後から書くテストは設計が後付けになりやすい。
                        </p>
                    </div>
                </div>

                {/*  AAA Pattern  */}
                <h3
                    className="mt-8"
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.1rem","fontWeight":"600","marginBottom":"1rem"}}
                >
                    AAAパターン — テストの標準構造
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <div className="step-list flex flex-col gap-0">
                            <div
                                className="step-item flex gap-5 py-5 border-b border-border last:border-b-0"
                            >
                                <div
                                    className="step-num-circle shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-[12px] font-bold bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan mt-[2px]"
                                >
                                    A
                                </div>
                                <div className="step-content">
                                    <h4>Arrange（準備）</h4>
                                    <p>
                                        テストデータ・モック・初期状態をセットアップする。テスト対象が動作するための前提条件を構築。
                                    </p>
                                </div>
                            </div>
                            <div
                                className="step-item flex gap-5 py-5 border-b border-border last:border-b-0"
                            >
                                <div
                                    className="step-num-circle shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-[12px] font-bold bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan mt-[2px]"
                                >
                                    A
                                </div>
                                <div className="step-content">
                                    <h4>Act（実行）</h4>
                                    <p>
                                        テスト対象の関数・メソッドを1回だけ呼び出す。1テストにつき1アクションが原則。
                                    </p>
                                </div>
                            </div>
                            <div
                                className="step-item flex gap-5 py-5 border-b border-border last:border-b-0"
                            >
                                <div
                                    className="step-num-circle shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-[12px] font-bold bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan mt-[2px]"
                                >
                                    A
                                </div>
                                <div className="step-content">
                                    <h4>Assert（検証）</h4>
                                    <p>
                                        期待値と実際の結果を比較・アサートする。BDDの
                                        Given/When/Then と同義の構造。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="code-block bg-[#080c18] border border-border rounded-sm overflow-hidden my-4"
                        >
                            <div
                                className="code-header flex items-center justify-between py-2 px-[14px] bg-white/5 border-b border-border"
                            >
                                <div className="code-dots flex gap-[5px]">
                                    <span></span><span></span><span></span>
                                </div>
                                <span
                                    className="code-lang font-mono text-[11px] text-text-muted tracking-[0.1em]"
                                    >PYTHON / pytest</span
                                >
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># テスト対象 (src/calculator.py)</span>
<span class="kw">def</span> <span class="fn">divide</span>(a: <span class="cls">float</span>, b: <span class="cls">float</span>) -&gt; <span class="cls">float</span>:
    <span class="kw">if</span> b == <span class="num">0</span>:
        <span class="kw">raise</span> <span class="cls">ValueError</span>(<span class="str">"0で割ることはできません"</span>)
    <span class="kw">return</span> a / b

<span class="cm"># ユニットテスト (tests/test_calculator.py)</span>
<span class="kw">import</span> pytest
<span class="kw">from</span> src.calculator <span class="kw">import</span> divide

<span class="kw">class</span> <span class="cls">TestDivide</span>:
    <span class="kw">def</span> <span class="fn">test_通常の除算</span>(<span class="dec">self</span>):
        <span class="cm"># Arrange</span>
        a, b = <span class="num">10</span>, <span class="num">2</span>
        <span class="cm"># Act</span>
        result = divide(a, b)
        <span class="cm"># Assert</span>
        <span class="kw">assert</span> result == <span class="num">5.0</span>

    <span class="kw">def</span> <span class="fn">test_ゼロ除算は例外を発生</span>(<span class="dec">self</span>):
        <span class="kw">with</span> pytest.raises(<span class="cls">ValueError</span>,
                match=<span class="str">"0で割ることはできません"</span>):
            divide(<span class="num">10</span>, <span class="num">0</span>)` }} />
                        </div>
                    </div>
                </div>

                {/*  Anti-patterns  */}
                <div
                    className="callout callout-danger border-l-[3px] py-4 px-5 rounded-r-sm my-4 mt-6 text-[13.5px] leading-[1.75] border-accent-red bg-accent-red/5"
                >
                    <strong>⚠ 「実装の詳細」をテストすることの危険性</strong><br />
                    内部状態変数名・プライベートメソッドをテストすると、
                    リファクタリング時にアプリは正常でもテストが落ちる「偽陰性（False
                    Negative）」が頻発します。 さらに内部が破綻していてもテストが通る「偽陽性（False
                    Positive）」のリスクも生じます。
                    <strong
                        >ユーザーが観測できる振る舞い（アウトプット・副作用）だけをテストしてください。</strong
                    >
                    <br /><a
                        rel="noopener"
                        href="https://kentcdodds.com/blog/testing-implementation-details"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >kentcdodds.com — Testing Implementation Details</a
                    >
                </div>

                {/*  2025 Frameworks  */}
                <h3
                    className="mt-8"
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.1rem","fontWeight":"600","marginBottom":"1rem"}}
                >
                    2025年の主要ユニットテストフレームワーク
                </h3>
                <div className="tool-grid grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="flex gap-2 items-start">
                            <span style={{"fontSize":"1.1rem"}}>🟡</span
                            ><span className="tool-name font-semibold text-[13.5px] text-text-primary"
                                >Jest</span
                            >
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            JS/TypeScript標準。React・Node.jsプロジェクト。ゼロコンフィグ・スナップショット・モック内蔵
                        </div>
                        <span
                            className="badge badge-unit inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-cyan/12 text-unit border border-accent-cyan/30"
                            >JavaScript</span
                        >
                    </div>
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="flex gap-2 items-start">
                            <span style={{"fontSize":"1.1rem"}}>⚡</span
                            ><span className="tool-name font-semibold text-[13.5px] text-text-primary"
                                >Vitest</span
                            >
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            Viteネイティブ。Jestと互換APIを持ちながら超高速実行。モダンESMに最適化
                        </div>
                        <span
                            className="badge badge-unit inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-cyan/12 text-unit border border-accent-cyan/30"
                            >JavaScript</span
                        >
                    </div>
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="flex gap-2 items-start">
                            <span style={{"fontSize":"1.1rem"}}>🐍</span
                            ><span className="tool-name font-semibold text-[13.5px] text-text-primary"
                                >pytest</span
                            >
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            Pythonの事実上の標準。強力なフィクスチャモデル・パラメータ化テスト・豊富なプラグイン
                        </div>
                        <span
                            className="badge badge-unit inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-cyan/12 text-unit border border-accent-cyan/30"
                            >Python</span
                        >
                    </div>
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="flex gap-2 items-start">
                            <span style={{"fontSize":"1.1rem"}}>☕</span
                            ><span className="tool-name font-semibold text-[13.5px] text-text-primary"
                                >JUnit 5</span
                            >
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            Javaの絶対標準。アノテーション駆動・拡張モデル・JVM系言語に対応
                        </div>
                        <span
                            className="badge badge-unit inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-cyan/12 text-unit border border-accent-cyan/30"
                            >Java</span
                        >
                    </div>
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="flex gap-2 items-start">
                            <span style={{"fontSize":"1.1rem"}}>🦀</span
                            ><span className="tool-name font-semibold text-[13.5px] text-text-primary"
                                >Rust built-in</span
                            >
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            Rustのビルトインテストフレームワーク。#[test]アトリビュートで簡潔に記述
                        </div>
                        <span
                            className="badge badge-unit inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-cyan/12 text-unit border border-accent-cyan/30"
                            >Rust</span
                        >
                    </div>
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="flex gap-2 items-start">
                            <span style={{"fontSize":"1.1rem"}}>🤖</span
                            ><span className="tool-name font-semibold text-[13.5px] text-text-primary"
                                >Testomat.io</span
                            >
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            AI駆動テスト管理。複数FWを一元管理・自動テスト生成・Flaky test自動検出
                        </div>
                        <span
                            className="badge badge-int inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-blue/12 text-integration border border-accent-blue/30"
                            >AI-powered</span
                        >
                    </div>
                </div>
                <div className="mt-2 text-sm text-muted">
                    参照:
                    <a
                        rel="noopener"
                        href="https://testomat.io/blog/unit-testing-tools/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >testomat.io</a
                    >
                    <a
                        rel="noopener"
                        href="https://www.practitest.com/resource-center/blog/best-unit-testing-tools/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >practitest.com</a
                    >
                    <a
                        rel="noopener"
                        href="https://www.testmuai.com/blog/unit-testing-frameworks/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >testmuai.com</a
                    >
                </div>
            </section>

            {/*  ════════════════════════════════════════
     STEP 2: FUNCTIONAL TEST
════════════════════════════════════════  */}
            <section id="step2">
                <div className="section-header mb-8">
                    <span
                        className="section-num font-mono text-[11px] font-bold text-accent-cyan tracking-[0.2em] block mb-2"
                        >STEP 02 — FUNCTIONAL TESTING</span
                    >
                    <h2>機能テスト</h2>
                    <div
                        className="accent-line w-[48px] h-[3px] rounded-[2px] bg-accent-cyan my-4"
                    ></div>
                    <p>
                        システムがビジネス要件・仕様書（SRS）に従って正しく動作するかを、
                        <strong>エンドユーザーの視点から（ブラックボックスで）</strong
                        >検証するアプローチ。
                        内部実装には関知せず、入力に対して正しい出力・アラートが返るかを確認します。
                    </p>
                </div>

                {/*  Blackbox Techniques  */}
                <h3
                    className="mt-6"
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.1rem","fontWeight":"600","marginBottom":"1rem"}}
                >
                    ブラックボックステスト設計技法（ISTQB CTFL Chapter 4）
                </h3>
                <div className="card-grid grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                    <div
                        className="card bg-bg-card border border-border rounded-DEFAULT p-6 transition-all duration-250 hover:bg-bg-card-hover hover:border-border-bright hover:shadow-DEFAULT"
                    >
                        <span className="card-icon text-[1.4rem] mb-3 block">🎯</span>
                        <h3>同値クラス分析</h3>
                        <p>
                            入力データを「有効クラス」「無効クラス」に分類し、各クラスの代表値1つでテストする技法。全入力を検証する代わりに代表的なケースで効率よくカバー。
                        </p>
                        <div
                            className="code-block bg-[#080c18] border border-border rounded-sm overflow-hidden my-4 mt-4"
                        >
                            <div
                                className="code-header flex items-center justify-between py-2 px-[14px] bg-white/5 border-b border-border"
                            >
                                <div className="code-dots flex gap-[5px]">
                                    <span></span><span></span><span></span>
                                </div>
                                <span
                                    className="code-lang font-mono text-[11px] text-text-muted tracking-[0.1em]"
                                    >例: 年齢入力 (0-120)</span
                                >
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># 有効クラス: 0 ≤ age ≤ 120</span>
<span class="cm"># 無効クラス: age &lt; 0 または age &gt; 120</span>
有効クラスの代表値: <span class="num">60</span>  <span class="cm"># → 正常</span>
無効クラス1の代表値: <span class="num">-1</span> <span class="cm"># → エラー</span>
無効クラス2の代表値: <span class="num">121</span><span class="cm"># → エラー</span>` }} />
                        </div>
                    </div>
                    <div
                        className="card bg-bg-card border border-border rounded-DEFAULT p-6 transition-all duration-250 hover:bg-bg-card-hover hover:border-border-bright hover:shadow-DEFAULT"
                    >
                        <span className="card-icon text-[1.4rem] mb-3 block">🎢</span>
                        <h3>境界値分析</h3>
                        <p>
                            バグが最も発生しやすい境界付近の値（最小値-1、最小値、最大値、最大値+1）を重点的にテスト。同値クラス分析と組み合わせて使用するのが定石。
                        </p>
                        <div
                            className="code-block bg-[#080c18] border border-border rounded-sm overflow-hidden my-4 mt-4"
                        >
                            <div
                                className="code-header flex items-center justify-between py-2 px-[14px] bg-white/5 border-b border-border"
                            >
                                <div className="code-dots flex gap-[5px]">
                                    <span></span><span></span><span></span>
                                </div>
                                <span
                                    className="code-lang font-mono text-[11px] text-text-muted tracking-[0.1em]"
                                    >例: 年齢入力 (0-120)</span
                                >
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: `境界値テストケース:
  <span class="num">-1</span>  → 無効（境界の外）
  <span class="num">0</span>   → <span class="kw">有効</span>（最小値）
  <span class="num">1</span>   → <span class="kw">有効</span>（最小値+1）
  <span class="num">119</span> → <span class="kw">有効</span>（最大値-1）
  <span class="num">120</span> → <span class="kw">有効</span>（最大値）
  <span class="num">121</span> → 無効（境界の外）` }} />
                        </div>
                    </div>
                    <div
                        className="card bg-bg-card border border-border rounded-DEFAULT p-6 transition-all duration-250 hover:bg-bg-card-hover hover:border-border-bright hover:shadow-DEFAULT"
                    >
                        <span className="card-icon text-[1.4rem] mb-3 block">📋</span>
                        <h3>デシジョンテーブルテスト</h3>
                        <p>
                            複数の条件の組み合わせをマトリクス化し、全ビジネスルールを網羅的に検証する技法。条件が3〜4つある複雑なビジネスロジックに特に有効。
                        </p>
                        <div className="table-wrapper overflow-x-auto my-6 mt-4">
                            <table style={{"fontSize":"12px"}}>
                                <thead>
                                    <tr>
                                        <th>条件/アクション</th>
                                        <th>R1</th>
                                        <th>R2</th>
                                        <th>R3</th>
                                        <th>R4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>会員か？</td>
                                        <td>Y</td>
                                        <td>Y</td>
                                        <td>N</td>
                                        <td>N</td>
                                    </tr>
                                    <tr>
                                        <td>¥5000以上？</td>
                                        <td>Y</td>
                                        <td>N</td>
                                        <td>Y</td>
                                        <td>N</td>
                                    </tr>
                                    <tr>
                                        <td>→ 割引率</td>
                                        <td className="good">20%</td>
                                        <td className="good">10%</td>
                                        <td className="warn">5%</td>
                                        <td>0%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div
                        className="card bg-bg-card border border-border rounded-DEFAULT p-6 transition-all duration-250 hover:bg-bg-card-hover hover:border-border-bright hover:shadow-DEFAULT"
                    >
                        <span className="card-icon text-[1.4rem] mb-3 block">🔄</span>
                        <h3>状態遷移テスト</h3>
                        <p>
                            システムが取り得る「状態」と「イベント」の組み合わせを検証。注文ステータスやログインセッションなど、有限状態を持つシステムに有効。
                        </p>
                        <div
                            className="code-block bg-[#080c18] border border-border rounded-sm overflow-hidden my-4 mt-4"
                        >
                            <div
                                className="code-header flex items-center justify-between py-2 px-[14px] bg-white/5 border-b border-border"
                            >
                                <div className="code-dots flex gap-[5px]">
                                    <span></span><span></span><span></span>
                                </div>
                                <span
                                    className="code-lang font-mono text-[11px] text-text-muted tracking-[0.1em]"
                                    >注文状態遷移</span
                                >
                            </div>
                            <pre>{`[新規] --支払い--> [承認待ち]
[承認待ち] --承認--> [処理中]
[処理中] --発送--> [配送中]
[配送中] --受取確認--> [完了]
[*] --キャンセル--> [キャンセル済]`}</pre>
                        </div>
                    </div>
                </div>
                <div
                    className="callout callout-info border-l-[3px] py-4 px-5 rounded-r-sm my-4 mt-6 text-[13.5px] leading-[1.75] border-accent-blue bg-accent-blue/5"
                >
                    <strong>ファジングテスト（Fuzz Testing）</strong> —
                    予測不可能なランダムデータ・異常値をシステムに注入し、クラッシュや脆弱性を意図的に引き起こす手法。セキュリティ攻撃ベクトルの発見に極めて有効です。
                    <br /><a
                        rel="noopener"
                        href="https://buzzclan.com/quality-assurance/black-box-testing/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >buzzclan.com — Black Box Testing 2025</a
                    >
                </div>
            </section>

            {/*  ════════════════════════════════════════
     STEP 3: INTEGRATION TEST
════════════════════════════════════════  */}
            <section id="step3">
                <div className="section-header mb-8">
                    <span
                        className="section-num font-mono text-[11px] font-bold text-accent-cyan tracking-[0.2em] block mb-2"
                        >STEP 03 — INTEGRATION TESTING</span
                    >
                    <h2>インテグレーションテスト（結合テスト）</h2>
                    <div
                        className="accent-line w-[48px] h-[3px] rounded-[2px] bg-accent-cyan my-4"
                    ></div>
                    <p>
                        個別に開発された複数のモジュールが結合された際に、
                        シームレスに通信し、データフローが正確に機能するかを検証する。
                        ホワイトボックスとブラックボックスを組み合わせた「グレーボックス」テストです。
                    </p>
                    <div className="flex gap-2 flex-wrap mt-4">
                        <span
                            className="badge badge-int inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-blue/12 text-integration border border-accent-blue/30"
                            >ISTQB Level 2</span
                        >
                        <span
                            className="badge badge-int inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-blue/12 text-integration border border-accent-blue/30"
                            >実際のDB・API使用</span
                        >
                        <span
                            className="badge badge-int inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-blue/12 text-integration border border-accent-blue/30"
                            >グレーボックス</span
                        >
                        <span
                            className="badge badge-int inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-blue/12 text-integration border border-accent-blue/30"
                            >中速実行</span
                        >
                    </div>
                </div>

                <h3
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.05rem","fontWeight":"600","marginBottom":"0.75rem"}}
                >
                    機能テスト vs 結合テスト — 混同しやすいポイント
                </h3>
                <div className="table-wrapper overflow-x-auto my-6">
                    <table>
                        <thead>
                            <tr>
                                <th>観点</th>
                                <th>機能テスト</th>
                                <th>結合テスト</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>視点</strong></td>
                                <td>エンドユーザーの視点（外から）</td>
                                <td>コンポーネント間の接続（内部も意識）</td>
                            </tr>
                            <tr>
                                <td><strong>手法</strong></td>
                                <td>ブラックボックス</td>
                                <td>グレーボックス</td>
                            </tr>
                            <tr>
                                <td><strong>DB接続</strong></td>
                                <td className="warn">モックで代替可</td>
                                <td className="good">実際のDBを使用</td>
                            </tr>
                            <tr>
                                <td><strong>検証内容</strong></td>
                                <td>入力→出力が仕様通りか</td>
                                <td>データがコンポーネント間を正しく流れるか</td>
                            </tr>
                            <tr>
                                <td><strong>API例</strong></td>
                                <td>HTTPステータス・レスポンスのスキーマ検証</td>
                                <td>リクエストでDBにデータが正しく保存されたか</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-[13px] text-text-muted mt-2">
                    参照:
                    <a
                        rel="noopener"
                        href="https://totalshiftleft.ai/blog/functional-testing-vs-integration-testing"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >totalshiftleft.ai</a
                    >
                    <a
                        rel="noopener"
                        href="https://www.testim.io/blog/integration-testing-vs-functional-testing/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >testim.io</a
                    >
                    <a
                        rel="noopener"
                        href="https://www.qatouch.com/blog/functional-test-vs-integration-test/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >qatouch.com</a
                    >
                </div>

                <div
                    className="code-block bg-[#080c18] border border-border rounded-sm overflow-hidden my-4 mt-8"
                >
                    <div
                        className="code-header flex items-center justify-between py-2 px-[14px] bg-white/5 border-b border-border"
                    >
                        <div className="code-dots flex gap-[5px]">
                            <span></span><span></span><span></span>
                        </div>
                        <span
                            className="code-lang font-mono text-[11px] text-text-muted tracking-[0.1em]"
                            >PYTHON / pytest + FastAPI — API結合テスト</span
                        >
                    </div>
                    <pre dangerouslySetInnerHTML={{ __html: `<span class="kw">import</span> pytest
<span class="kw">from</span> fastapi.testclient <span class="kw">import</span> TestClient
<span class="kw">from</span> app.main <span class="kw">import</span> app

client = <span class="cls">TestClient</span>(app)

<span class="kw">class</span> <span class="cls">TestOrderAPI</span>:
    <span class="kw">def</span> <span class="fn">test_注文作成_正常系</span>(<span class="dec">self</span>, test_db):
        <span class="cm"># Arrange — テスト用DBへ接続済み</span>
        payload = {<span class="str">"product_id"</span>: <span class="num">1</span>, <span class="str">"quantity"</span>: <span class="num">2</span>, <span class="str">"user_id"</span>: <span class="num">42</span>}

        <span class="cm"># Act — 実際のHTTPリクエスト送信（DBにも書き込む）</span>
        response = client.post(<span class="str">"/api/orders"</span>, json=payload)

        <span class="cm"># Assert</span>
        <span class="kw">assert</span> response.status_code == <span class="num">201</span>
        data = response.json()
        <span class="kw">assert</span> data[<span class="str">"status"</span>] == <span class="str">"pending"</span>
        <span class="kw">assert</span> data[<span class="str">"total_price"</span>] > <span class="num">0</span>

    <span class="kw">def</span> <span class="fn">test_在庫不足_409エラー</span>(<span class="dec">self</span>, test_db):
        payload = {<span class="str">"product_id"</span>: <span class="num">999</span>, <span class="str">"quantity"</span>: <span class="num">9999</span>}
        response = client.post(<span class="str">"/api/orders"</span>, json=payload)
        <span class="kw">assert</span> response.status_code == <span class="num">409</span>
        <span class="kw">assert</span> <span class="str">"在庫不足"</span> <span class="kw">in</span> response.json()[<span class="str">"detail"</span>]` }} />
                </div>
                <div className="text-[13px] text-text-muted mt-2">
                    参照:
                    <a
                        rel="noopener"
                        href="https://learning.postman.com/docs/tests-and-scripts/test-apis/test-apis"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >Postman API Testing Docs</a
                    >
                </div>
            </section>

            {/*  ════════════════════════════════════════
     STEP 4: E2E TEST
════════════════════════════════════════  */}
            <section id="step4">
                <div className="section-header mb-8">
                    <span
                        className="section-num font-mono text-[11px] font-bold text-accent-cyan tracking-[0.2em] block mb-2"
                        >STEP 04 — END-TO-END TESTING</span
                    >
                    <h2>E2Eテスト（エンドツーエンドテスト）</h2>
                    <div
                        className="accent-line w-[48px] h-[3px] rounded-[2px] bg-accent-cyan my-4"
                    ></div>
                    <p>
                        実際のユーザーがブラウザを通じてアプリケーションを操作するプロセスを完全にシミュレート。
                        フロントエンドのUIからバックエンドDB・サードパーティ連携まで、
                        <strong>システム全体が結合された状態</strong
                        >で正しく機能するかを検証します。
                    </p>
                    <div className="flex gap-2 flex-wrap mt-4">
                        <span
                            className="badge badge-e2e inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-orange/12 text-e2e border border-accent-orange/30"
                            >ISTQB Level 3/4</span
                        >
                        <span
                            className="badge badge-e2e inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-orange/12 text-e2e border border-accent-orange/30"
                            >最高信頼性</span
                        >
                        <span
                            className="badge badge-e2e inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-orange/12 text-e2e border border-accent-orange/30"
                            >低速・高メンテナンス</span
                        >
                        <span
                            className="badge badge-e2e inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-orange/12 text-e2e border border-accent-orange/30"
                            >限定数に留める</span
                        >
                    </div>
                </div>

                {/*  Playwright vs Cypress  */}
                <h3
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.1rem","fontWeight":"600","marginBottom":"0.75rem"}}
                >
                    2025年のE2Eツール覇権：Playwright vs Cypress vs Selenium
                </h3>

                <div
                    className="callout callout-good border-l-[3px] py-4 px-5 rounded-r-sm my-4 text-[13.5px] leading-[1.75] border-accent-green bg-accent-green/5"
                >
                    <strong>2025年の結論：</strong>
                    Playwright
                    がエンタープライズ・CI/CDにおいて主流。大規模並列実行・クロスブラウザ安定性が決定的優位性。
                    Cypress はフロントエンド開発者のローカルデバッグで依然として最高のDX。 Selenium
                    はモバイル自動化（Appium連携）とレガシー環境で不滅の存在感。
                </div>

                <div className="table-wrapper overflow-x-auto my-6 mt-6">
                    <table>
                        <thead>
                            <tr>
                                <th>比較指標</th>
                                <th>Playwright</th>
                                <th>Cypress</th>
                                <th>Selenium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>アーキテクチャ</strong></td>
                                <td>ブラウザ外部プロセス（CDP）</td>
                                <td>ブラウザ内部プロセス（DOM直接操作）</td>
                                <td>WebDriver プロトコル</td>
                            </tr>
                            <tr>
                                <td><strong>実行速度（コールドスタート）</strong></td>
                                <td className="good">2〜4秒（最速）</td>
                                <td className="warn">3〜6秒（高速）</td>
                                <td className="bad">5〜10秒（低速）</td>
                            </tr>
                            <tr>
                                <td><strong>並列実行</strong></td>
                                <td className="good">ネイティブ・完全無料</td>
                                <td className="warn">Cypress Cloud（有料）が必要</td>
                                <td className="warn">Grid設定が複雑</td>
                            </tr>
                            <tr>
                                <td><strong>ブラウザ安定性</strong></td>
                                <td className="good">Chromium/Firefox/WebKit（平均失敗率2%）</td>
                                <td className="warn">Chrome/Edgeに最適化（WebKitで9-15%失敗率）</td>
                                <td className="warn">全ブラウザ対応・設定複雑</td>
                            </tr>
                            <tr>
                                <td><strong>デバッグ体験</strong></td>
                                <td className="good">強力なTrace Viewer（CI事後分析）</td>
                                <td className="good">タイムトラベルデバッグ（最高のDX）</td>
                                <td>ログベースデバッグ</td>
                            </tr>
                            <tr>
                                <td><strong>推奨ユースケース</strong></td>
                                <td className="good">エンタープライズ・大規模CI/CD・クロスブラウザ</td>
                                <td>フロントエンド小〜中規模・ローカル開発</td>
                                <td className="warn">モバイル自動化・レガシーシステム</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-[13px] text-text-muted mt-2">
                    参照:
                    <a
                        rel="noopener"
                        href="https://javascript.plainenglish.io/playwright-vs-cypress-performance-benchmarks-the-2025-report-c2db402c7a55"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >plainenglish.io — 2025 Benchmarks</a
                    >
                    <a
                        rel="noopener"
                        href="https://testdino.com/blog/playwright-vs-cypress/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >testdino.com</a
                    >
                    <a
                        rel="noopener"
                        href="https://devin-rosario.medium.com/cypress-vs-playwright-the-essential-2025-comparison-for-developers-d2e40f20f450"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >medium.com (Rosario)</a
                    >
                    <a
                        rel="noopener"
                        href="https://thinksys.com/qa-testing/playwright-vs-selenium-vs-cypress/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >thinksys.com</a
                    >
                </div>

                {/*  Playwright Code Example  */}
                <div
                    className="code-block bg-[#080c18] border border-border rounded-sm overflow-hidden my-4 mt-8"
                >
                    <div
                        className="code-header flex items-center justify-between py-2 px-[14px] bg-white/5 border-b border-border"
                    >
                        <div className="code-dots flex gap-[5px]">
                            <span></span><span></span><span></span>
                        </div>
                        <span
                            className="code-lang font-mono text-[11px] text-text-muted tracking-[0.1em]"
                            >TYPESCRIPT / Playwright — ECサイト購入フロー E2E</span
                        >
                    </div>
                    <pre dangerouslySetInnerHTML={{ __html: `<span class="kw">import</span> { test, expect } <span class="kw">from</span> <span class="str">'@playwright/test'</span>;

test(<span class="str">'ユーザーが商品を購入できる'</span>, <span class="kw">async</span> ({ page }) => {
  <span class="cm">// 1. ログイン</span>
  <span class="kw">await</span> page.goto(<span class="str">'https://staging.example.com/login'</span>);
  <span class="kw">await</span> page.fill(<span class="str">'[data-testid="email"]'</span>, <span class="str">'user@example.com'</span>);
  <span class="kw">await</span> page.fill(<span class="str">'[data-testid="password"]'</span>, <span class="str">'password123'</span>);
  <span class="kw">await</span> page.click(<span class="str">'[data-testid="login-btn"]'</span>);
  <span class="kw">await</span> expect(page).toHaveURL(<span class="str">'/dashboard'</span>);

  <span class="cm">// 2. 商品選択</span>
  <span class="kw">await</span> page.goto(<span class="str">'/products/laptop-001'</span>);
  <span class="kw">await</span> page.click(<span class="str">'[data-testid="add-to-cart"]'</span>);

  <span class="cm">// 3. カート確認</span>
  <span class="kw">await</span> page.goto(<span class="str">'/cart'</span>);
  <span class="kw">await</span> expect(page.locator(<span class="str">'[data-testid="cart-item"]'</span>)).toHaveCount(<span class="num">1</span>);

  <span class="cm">// 4. 決済（テスト用カード）</span>
  <span class="kw">await</span> page.click(<span class="str">'[data-testid="checkout-btn"]'</span>);
  <span class="kw">await</span> page.fill(<span class="str">'[data-testid="card-number"]'</span>, <span class="str">'4242 4242 4242 4242'</span>);
  <span class="kw">await</span> page.click(<span class="str">'[data-testid="pay-btn"]'</span>);

  <span class="cm">// 5. 完了確認</span>
  <span class="kw">await</span> expect(page.locator(<span class="str">'h1'</span>)).toContainText(<span class="str">'注文完了'</span>);
  <span class="kw">await</span> expect(page.locator(<span class="str">'[data-testid="order-id"]'</span>)).toBeVisible();
});` }} />
                </div>
            </section>

            {/*  ════════════════════════════════════════
     STEP 5: TEST METHODOLOGIES
════════════════════════════════════════  */}
            <section id="methodologies">
                <div className="section-header mb-8">
                    <span
                        className="section-num font-mono text-[11px] font-bold text-accent-cyan tracking-[0.2em] block mb-2"
                        >STEP 05 — TEST METHODOLOGIES</span
                    >
                    <h2>テスト手法の3パラダイム</h2>
                    <div
                        className="accent-line w-[48px] h-[3px] rounded-[2px] bg-accent-cyan my-4"
                    ></div>
                    <p>
                        テスターが「内部構造をどれだけ知っているか」によって3つのパラダイムに分類されます。
                        現代のWebアプリ開発では、これらを<strong>戦略的に組み合わせることが最適解</strong>です。
                    </p>
                </div>

                <div className="card-grid grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                    <div
                        className="card bg-bg-card border border-border rounded-DEFAULT p-6 transition-all duration-250 hover:bg-bg-card-hover hover:border-border-bright hover:shadow-DEFAULT"
                        style={{"borderColor":"rgba(99, 179, 237, 0.25)"}}
                    >
                        <div
                            style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem"}}
                        >
                            <h3 style={{"fontSize":"1.1rem"}}>🔲 ブラックボックステスト</h3>
                            <span
                                className="badge badge-int inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-blue/12 text-integration border border-accent-blue/30"
                                >外部視点</span
                            >
                        </div>
                        <p>
                            内部コードを一切知らずに外部の振る舞いのみを検証。ユーザー視点でビジネス仕様に対するテストを設計。
                        </p>
                        <hr className="divider" />
                        <div style={{"fontSize":"13px","color":"var(--text-secondary)"}}>
                            <strong style={{"color":"var(--text-primary)"}}>使用場面：</strong
                            >機能テスト・受入テスト・UAT<br />
                            <strong style={{"color":"var(--text-primary)"}}>設計技法：</strong
                            >同値クラス分析・境界値分析・デシジョンテーブル・状態遷移・ファジング
                        </div>
                    </div>
                    <div
                        className="card bg-bg-card border border-border rounded-DEFAULT p-6 transition-all duration-250 hover:bg-bg-card-hover hover:border-border-bright hover:shadow-DEFAULT"
                        style={{"borderColor":"rgba(183, 148, 244, 0.25)"}}
                    >
                        <div
                            style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem"}}
                        >
                            <h3 style={{"fontSize":"1.1rem"}}>⬜ ホワイトボックステスト</h3>
                            <span
                                className="badge badge-func inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-purple/12 text-functional border border-accent-purple/30"
                                >内部視点</span
                            >
                        </div>
                        <p>
                            ソースコード・アーキテクチャ・実装詳細を完全に理解した上で行うテスト。全実行パス・論理フロー・条件分岐を網羅的に検査。
                        </p>
                        <hr className="divider" />
                        <div style={{"fontSize":"13px","color":"var(--text-secondary)"}}>
                            <strong style={{"color":"var(--text-primary)"}}>使用場面：</strong
                            >ユニットテスト・静的解析（SAST）<br />
                            <strong style={{"color":"var(--text-primary)"}}>設計技法：</strong
                            >命令網羅・分岐網羅・条件網羅・パス網羅
                        </div>
                    </div>
                    <div
                        className="card bg-bg-card border border-border rounded-DEFAULT p-6 transition-all duration-250 hover:bg-bg-card-hover hover:border-border-bright hover:shadow-DEFAULT"
                        style={{"borderColor":"rgba(246, 173, 85, 0.25)"}}
                    >
                        <div
                            style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem"}}
                        >
                            <h3 style={{"fontSize":"1.1rem"}}>🔳 グレーボックステスト</h3>
                            <span
                                className="badge badge-e2e inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-orange/12 text-e2e border border-accent-orange/30"
                                >部分的知識</span
                            >
                        </div>
                        <p>
                            内部構造の「部分的な知識」を持ってテストを設計し、実行は外部インターフェース（UI・API）から行う。両者の妥協点でセキュリティテストに頻用。
                        </p>
                        <hr className="divider" />
                        <div style={{"fontSize":"13px","color":"var(--text-secondary)"}}>
                            <strong style={{"color":"var(--text-primary)"}}>使用場面：</strong
                            >E2Eテスト・結合テスト・ペネトレーションテスト<br />
                            <strong style={{"color":"var(--text-primary)"}}>特徴：</strong
                            >IASTツールとの相性が良い
                        </div>
                    </div>
                </div>

                <div className="callout callout-good mt-3">
                    <strong>データで示す組み合わせ効果：</strong>
                    セキュリティとAPI検証にグレーボックス、UI検証にブラックボックス、クリティカルなビジネスロジックにホワイトボックスを
                    バランスよく組み合わせた組織は、本番デプロイ前にクリティカルな欠陥を<strong>35%多く特定</strong>できることが実証されています。
                    <br /><a
                        rel="noopener"
                        href="https://dev.to/matt_calder_e620d84cf0c14/black-box-vs-white-box-vs-grey-box-testing-a-practical-guide-i9d"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >dev.to — Practical Guide</a
                    >
                    <a
                        rel="noopener"
                        href="https://testlio.com/blog/black-box-vs-white-vs-gray-box-testing/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >testlio.com</a
                    >
                    <a
                        rel="noopener"
                        href="https://www.testdevlab.com/blog/white-box-vs-black-box-vs-gray-box-testing"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >testdevlab.com</a
                    >
                </div>
            </section>

            {/*  ════════════════════════════════════════
     STEP 6: BDD
════════════════════════════════════════  */}
            <section id="bdd">
                <div className="section-header mb-8">
                    <span
                        className="section-num font-mono text-[11px] font-bold text-accent-cyan tracking-[0.2em] block mb-2"
                        >STEP 06 — BEHAVIOR-DRIVEN DEVELOPMENT</span
                    >
                    <h2>BDD — ビヘイビア駆動開発</h2>
                    <div
                        className="accent-line w-[48px] h-[3px] rounded-[2px] bg-accent-cyan my-4"
                    ></div>
                    <p>
                        ビジネス側と技術側のコミュニケーションの断絶を埋め、
                        <strong>テストを「生きたドキュメント（Living Documentation）」</strong
                        >として機能させる手法。 ツールではなく「対話のプロセス」が核心です。
                    </p>
                </div>

                <h3
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.05rem","fontWeight":"600","marginBottom":"1rem"}}
                >
                    BDDの3ステップ
                </h3>
                <div className="step-list flex flex-col gap-0">
                    <div className="step-item flex gap-5 py-5 border-b border-border last:border-b-0">
                        <div
                            className="step-num-circle shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-[12px] font-bold bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan mt-[2px]"
                        >
                            1
                        </div>
                        <div className="step-content">
                            <h4>発見（Discovery） — スリーアミーゴス</h4>
                            <p>
                                ビジネス担当者・開発者・QAエンジニアが一堂に会し、期待される振る舞いの具体例について構造化された対話を行う。要件の曖昧さを早期に排除するフェーズ。
                            </p>
                        </div>
                    </div>
                    <div className="step-item flex gap-5 py-5 border-b border-border last:border-b-0">
                        <div
                            className="step-num-circle shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-[12px] font-bold bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan mt-[2px]"
                        >
                            2
                        </div>
                        <div className="step-content">
                            <h4>定式化（Formulation） — Gherkin記法</h4>
                            <p>
                                発見された具体例を、人間にも機械にも読めるプレーンな言語フォーマット（Gherkin記法）で文書化。Given
                                / When / Then の明確な構文を使用。
                            </p>
                        </div>
                    </div>
                    <div className="step-item flex gap-5 py-5 border-b border-border last:border-b-0">
                        <div
                            className="step-num-circle shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-[12px] font-bold bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan mt-[2px]"
                        >
                            3
                        </div>
                        <div className="step-content">
                            <h4>自動化（Automation） — Cucumber / SpecFlow</h4>
                            <p>
                                GherkinシナリオにCI/CDパイプライン上で自動実行される「ステップ定義コード」を紐付け、継続的にシステム挙動を検証する。
                            </p>
                        </div>
                    </div>
                </div>

                <h3
                    className="mt-8"
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.05rem","fontWeight":"600","marginBottom":"1rem"}}
                >
                    Gherkin記法 — 記述例
                </h3>
                <div
                    className="gherkin bg-[#0a0f1e] border border-border rounded-sm py-5 px-6 font-mono text-[13px] leading-[1.8]"
                >
                    <span className="kw-feat">Feature:</span> ユーザーログイン<br />
                    &nbsp;&nbsp;ユーザーがシステムに安全にログインできることを確認する<br />
                    <br />
                    &nbsp;&nbsp;<span className="kw-scen">Scenario:</span>
                    正しいパスワードでログイン成功<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw-given">Given</span>
                    ユーザーが登録済みメールアドレス
                    <span className="param">"user@example.com"</span> を持っている<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw-when">When</span>
                    ログインフォームに正しいパスワード
                    <span className="param">"Password123!"</span> を入力する<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw-then">Then</span>
                    ダッシュボードページに遷移する<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw-then">And</span> 歓迎メッセージ
                    <span className="param">"ようこそ、田中さん"</span> が表示される<br />
                    <br />
                    &nbsp;&nbsp;<span className="kw-scen">Scenario:</span>
                    誤ったパスワードでログイン失敗<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw-given">Given</span>
                    ユーザーが登録済みメールアドレス
                    <span className="param">"user@example.com"</span> を持っている<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw-when">When</span>
                    ログインフォームに誤ったパスワード
                    <span className="param">"WrongPass"</span> を入力する<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw-then">Then</span> エラーメッセージ
                    <span className="param">"パスワードが正しくありません"</span> が表示される
                </div>
                <div className="text-[13px] text-text-muted mt-2">
                    参照:
                    <a
                        rel="noopener"
                        href="https://cucumber.io/docs/bdd/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >cucumber.io — BDD Official</a
                    >
                    <a
                        rel="noopener"
                        href="https://monday.com/blog/rnd/behavior-driven-development/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >monday.com — BDD Essential Guide</a
                    >
                    <a
                        rel="noopener"
                        href="https://automationpanda.com/2025/03/06/is-bdd-dying/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >automationpanda.com — Is BDD Dying? (2025)</a
                    >
                </div>

                <div className="callout callout-warn mt-3">
                    <strong>「BDDは死んだのか？」2025年の議論</strong><br />
                    アプリが成長するとGherkinのメンテナンスコストが膨大になりアジャイルのスピードを阻害するケースがあります。
                    しかし BDD の<em>思想自体は陳腐化していません</em>。2025年は
                    LLMを活用したシナリオ自動生成・リファクタリング支援が普及し、
                    導入コストを劇的に下げる試みが進行中です。組織文化に合わせた<strong>ハイブリッドBDDアプローチ</strong>が推奨されます。
                    <br /><a
                        rel="noopener"
                        href="https://303software.com/behavior-driven-testing-a-cucumber-test-automation-framework"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >303software.com — BDD Reality Check 2025</a
                    >
                </div>
            </section>

            {/*  ════════════════════════════════════════
     NON-FUNCTIONAL TESTING
════════════════════════════════════════  */}
            <section id="nonfunctional">
                <div className="section-header mb-8">
                    <span
                        className="section-num font-mono text-[11px] font-bold text-accent-cyan tracking-[0.2em] block mb-2"
                        >STEP 07 — NON-FUNCTIONAL TESTING</span
                    >
                    <h2>非機能テスト：パフォーマンス・負荷テスト</h2>
                    <div
                        className="accent-line w-[48px] h-[3px] rounded-[2px] bg-accent-cyan my-4"
                    ></div>
                    <p>
                        機能が正しく動作するだけでは不十分です。
                        システムが「どのように」動作するか——極限の負荷に耐えうるか——を検証する非機能テストが、
                        プロダクトの成否を分けます。
                    </p>
                </div>

                <h3
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.05rem","fontWeight":"600","marginBottom":"0.75rem"}}
                >
                    コアパフォーマンス指標（2025年）
                </h3>
                <div
                    className="metrics-grid grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3"
                >
                    <div className="metric-card bg-bg-card border border-border rounded-sm p-4">
                        <span
                            className="metric-tag font-mono text-[11px] text-accent-yellow block mb-[6px]"
                            >Response Time</span
                        >
                        <div
                            className="metric-title text-[12px] font-semibold text-text-secondary mb-1"
                        >
                            応答時間
                        </div>
                        <div className="metric-desc text-[12.5px] text-text-secondary leading-[1.65]">
                            リクエストから最終レスポンスまでの時間。平均値ではなくP90・P95・P99パーセンタイルで監視するのが必須。
                        </div>
                    </div>
                    <div className="metric-card bg-bg-card border border-border rounded-sm p-4">
                        <span
                            className="metric-tag font-mono text-[11px] text-accent-yellow block mb-[6px]"
                            >Throughput</span
                        >
                        <div
                            className="metric-title text-[12px] font-semibold text-text-secondary mb-1"
                        >
                            スループット
                        </div>
                        <div className="metric-desc text-[12.5px] text-text-secondary leading-[1.65]">
                            1秒あたりに処理できるリクエスト数（RPS）。バッファリングなしに処理できる限界容量を示す。
                        </div>
                    </div>
                    <div className="metric-card bg-bg-card border border-border rounded-sm p-4">
                        <span
                            className="metric-tag font-mono text-[11px] text-accent-yellow block mb-[6px]"
                            >Error Rate</span
                        >
                        <div
                            className="metric-title text-[12px] font-semibold text-text-secondary mb-1"
                        >
                            エラー率
                        </div>
                        <div className="metric-desc text-[12.5px] text-text-secondary leading-[1.65]">
                            負荷増大時のHTTP
                            5xx/4xxエラー・タイムアウト割合。雪だるま式障害の前兆を早期捕捉。
                        </div>
                    </div>
                    <div className="metric-card bg-bg-card border border-border rounded-sm p-4">
                        <span
                            className="metric-tag font-mono text-[11px] text-accent-yellow block mb-[6px]"
                            >Latency</span
                        >
                        <div
                            className="metric-title text-[12px] font-semibold text-text-secondary mb-1"
                        >
                            レイテンシ
                        </div>
                        <div className="metric-desc text-[12.5px] text-text-secondary leading-[1.65]">
                            ネットワーク上の特定ポイント間のデータ転送時間。TTFB（ファーストバイト到達時間）が重要指標。
                        </div>
                    </div>
                </div>
                <div className="text-[13px] text-text-muted mt-2">
                    参照:
                    <a
                        rel="noopener"
                        href="https://medium.com/@priti_9991/performance-testing-metrics-that-matter-in-2025-fc4d4d7a68fe"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >medium.com — Metrics 2025</a
                    >
                    <a
                        rel="noopener"
                        href="https://pflb.us/blog/performance-testing-metrics/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >pflb.us</a
                    >
                    <a
                        rel="noopener"
                        href="https://solutionshub.epam.com/blog/post/types-of-performance-testing"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >epam.com — Types of Performance Testing</a
                    >
                </div>

                <h3
                    className="mt-8"
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.05rem","fontWeight":"600","marginBottom":"0.75rem"}}
                >
                    パフォーマンステストの種類
                </h3>
                <div className="table-wrapper overflow-x-auto my-6">
                    <table>
                        <thead>
                            <tr>
                                <th>テスト種別</th>
                                <th>目的</th>
                                <th>特徴</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>ベースラインテスト</strong></td>
                                <td>初期基準値を設定</td>
                                <td>管理された条件下での通常負荷で測定</td>
                            </tr>
                            <tr>
                                <td><strong>ロードテスト</strong></td>
                                <td>想定最大トラフィックへの耐性確認</td>
                                <td>同時ユーザー数を段階的に増加</td>
                            </tr>
                            <tr>
                                <td><strong>ストレステスト</strong></td>
                                <td>破壊点・回復力の特定</td>
                                <td>許容量を超えた負荷でシステム限界を探る</td>
                            </tr>
                            <tr>
                                <td><strong>スパイクテスト</strong></td>
                                <td>突発的トラフィック急増への耐性</td>
                                <td>短時間で極端なユーザー増加をシミュレート</td>
                            </tr>
                            <tr>
                                <td><strong>エンデュランステスト（Soak Testing）</strong></td>
                                <td>長期間のメモリリーク・劣化検出</td>
                                <td>12〜72時間の継続負荷をかける</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3
                    className="mt-8"
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.05rem","fontWeight":"600","marginBottom":"0.75rem"}}
                >
                    2025年の主要パフォーマンステストツール
                </h3>
                <div className="tool-grid grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="tool-name font-semibold text-[13.5px] text-text-primary">
                            k6
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            Grafana製。JavaScriptでシナリオ記述。CI/CD統合が最も容易。モダンSRE/SDETチームで急速普及中
                        </div>
                        <span className="badge badge-perf">2025年最推奨</span>
                    </div>
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="tool-name font-semibold text-[13.5px] text-text-primary">
                            Apache JMeter
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            オープンソースの老舗。GUI設計・GUIなしCLI実行の両方に対応。豊富なプラグイン
                        </div>
                        <span className="badge badge-perf">実績豊富</span>
                    </div>
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="tool-name font-semibold text-[13.5px] text-text-primary">
                            Gatling
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            Scala/Java/Kotlin
                            DSL。コードとしてシナリオ管理。高スループット・リアルタイムレポート
                        </div>
                        <span className="badge badge-perf">Enterprise</span>
                    </div>
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="tool-name font-semibold text-[13.5px] text-text-primary">
                            LoadRunner
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            Micro Focus製エンタープライズ標準。数千の仮想ユーザーをシミュレート可能
                        </div>
                        <span className="badge badge-perf">大規模向け</span>
                    </div>
                </div>
                <div className="text-[13px] text-text-muted mt-2">
                    参照:
                    <a
                        rel="noopener"
                        href="https://medium.com/@abhishekpurohit444/modern-sdet-toolkit-performance-security-accessibility-chaos-testing-tools-explained-410298d045aa"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >medium.com — Modern SDET Toolkit 2026</a
                    >
                </div>
            </section>

            {/*  ════════════════════════════════════════
     SECURITY TESTING
════════════════════════════════════════  */}
            <section id="security">
                <div className="section-header mb-8">
                    <span
                        className="section-num font-mono text-[11px] font-bold text-accent-cyan tracking-[0.2em] block mb-2"
                        >STEP 08 — SECURITY TESTING</span
                    >
                    <h2>セキュリティテスト &amp; OWASP Top 10:2025</h2>
                    <div
                        className="accent-line w-[48px] h-[3px] rounded-[2px] bg-accent-cyan my-4"
                        style={{"background":"var(--accent-red)"}}
                    ></div>
                    <p>
                        クラウドネイティブ技術とAIの普及でサイバー脅威は巧妙化。
                        セキュリティテストは製品完成後の監査から<strong>設計段階へ完全シフトレフト</strong>しています。
                    </p>
                </div>

                <div
                    className="callout callout-danger border-l-[3px] py-4 px-5 rounded-r-sm my-4 text-[13.5px] leading-[1.75] border-accent-red bg-accent-red/5"
                >
                    <strong>2025年の新重要課題：AIシステムのセキュリティテスト</strong><br />
                    LLMを組み込んだアプリケーションへの「プロンプトインジェクション」や「データポイズニング」への耐性テストが
                    次世代セキュリティQAの最重要課題になっています。
                    <br /><a
                        rel="noopener"
                        href="https://www.mend.io/blog/security-testing-in-2025-testing-apps-ai-cloud-native-and-more/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >mend.io — Security Testing 2025</a
                    >
                </div>

                <h3
                    className="mt-8"
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.05rem","fontWeight":"600","marginBottom":"1rem"}}
                >
                    OWASP Top 10: 2025 — Webアプリケーション脆弱性リスク
                </h3>
                <div style={{"display":"flex","flexDirection":"column","gap":"8px"}}>
                    <div className="card-sm owasp-row">
                        <div className="owasp-rank">A01</div>
                        <div>
                            <strong style={{"fontSize":"13.5px"}}
                                >Broken Access Control（アクセス制御の欠陥）</strong
                            >
                            <div
                                style={{"fontSize":"12.5px","color":"var(--text-secondary)","marginTop":"2px"}}
                            >
                                権限のないユーザーが他ユーザーのデータや管理者機能にアクセス・実行できるロジックの迂回
                            </div>
                        </div>
                    </div>
                    <div className="card-sm owasp-row">
                        <div className="owasp-rank">A02</div>
                        <div>
                            <strong style={{"fontSize":"13.5px"}}
                                >Security Misconfiguration（セキュリティ設定のミス）</strong
                            >
                            <div
                                style={{"fontSize":"12.5px","color":"var(--text-secondary)","marginTop":"2px"}}
                            >
                                デフォルトパスワードの使用・不要機能の有効化・クラウドストレージの不適切な権限設定
                            </div>
                        </div>
                    </div>
                    <div className="card-sm owasp-row">
                        <div className="owasp-rank">A03</div>
                        <div>
                            <strong style={{"fontSize":"13.5px"}}
                                >Software Supply Chain Failures（サプライチェーン障害）</strong
                            >
                            <div
                                style={{"fontSize":"12.5px","color":"var(--text-secondary)","marginTop":"2px"}}
                            >
                                サードパーティ製ライブラリの既知脆弱性や、CI/CDパイプラインを標的とした攻撃の連鎖
                            </div>
                        </div>
                    </div>
                    <div className="card-sm owasp-row">
                        <div className="owasp-rank">A04</div>
                        <div>
                            <strong style={{"fontSize":"13.5px"}}
                                >Cryptographic Failures（暗号化の失敗）</strong
                            >
                            <div
                                style={{"fontSize":"12.5px","color":"var(--text-secondary)","marginTop":"2px"}}
                            >
                                機密データの平文保存・時代遅れの暗号化アルゴリズム（MD5,
                                SHA1）の使用
                            </div>
                        </div>
                    </div>
                    <div className="card-sm owasp-row">
                        <div className="owasp-rank">A05</div>
                        <div>
                            <strong style={{"fontSize":"13.5px"}}>Injection（インジェクション）</strong>
                            <div
                                style={{"fontSize":"12.5px","color":"var(--text-secondary)","marginTop":"2px"}}
                            >
                                サニタイズされていない入力データによるSQL・NoSQL・OSコマンドインジェクション
                            </div>
                        </div>
                    </div>
                    <div className="card-sm owasp-row">
                        <div className="owasp-rank">A06</div>
                        <div>
                            <strong style={{"fontSize":"13.5px"}}
                                >Insecure Design（安全でない設計）</strong
                            >
                            <div
                                style={{"fontSize":"12.5px","color":"var(--text-secondary)","marginTop":"2px"}}
                            >
                                実装バグではなく、設計段階での脅威モデリング欠如による構造的欠陥
                            </div>
                        </div>
                    </div>
                    <div className="card-sm owasp-row">
                        <div className="owasp-rank">A07</div>
                        <div>
                            <strong style={{"fontSize":"13.5px"}}
                                >Authentication Failures（認証の失敗）</strong
                            >
                            <div
                                style={{"fontSize":"12.5px","color":"var(--text-secondary)","marginTop":"2px"}}
                            >
                                クレデンシャルスタッフィング・ブルートフォース攻撃への脆弱性・不適切なセッション管理
                            </div>
                        </div>
                    </div>
                    <div className="card-sm owasp-row">
                        <div className="owasp-rank">A08</div>
                        <div>
                            <strong style={{"fontSize":"13.5px"}}
                                >Software or Data Integrity Failures（完全性の欠如）</strong
                            >
                            <div
                                style={{"fontSize":"12.5px","color":"var(--text-secondary)","marginTop":"2px"}}
                            >
                                デジタル署名なしのファームウェア更新・信頼できないソースからの無検証デシリアライズ
                            </div>
                        </div>
                    </div>
                    <div className="card-sm owasp-row">
                        <div className="owasp-rank">A09</div>
                        <div>
                            <strong style={{"fontSize":"13.5px"}}
                                >Security Logging and Alerting Failures（ログ・監視の失敗）</strong
                            >
                            <div
                                style={{"fontSize":"12.5px","color":"var(--text-secondary)","marginTop":"2px"}}
                            >
                                攻撃の検知・記録ができないロギング不備により被害が拡大・事後調査が困難になる
                            </div>
                        </div>
                    </div>
                    <div className="card-sm owasp-row">
                        <div className="owasp-rank">A10</div>
                        <div>
                            <strong style={{"fontSize":"13.5px"}}
                                >Mishandling of Exceptional Conditions（例外処理の不備）</strong
                            >
                            <div
                                style={{"fontSize":"12.5px","color":"var(--text-secondary)","marginTop":"2px"}}
                            >
                                エラー時にスタックトレース等の内部情報を漏洩させる安全でないフォールバック
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-muted mt-2">
                    参照:
                    <a
                        rel="noopener"
                        href="https://owasp.org/Top10/2025/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >owasp.org — OWASP Top 10:2025</a
                    >
                    <a
                        rel="noopener"
                        href="https://owasp.org/Top10/2025/0x00_2025-Introduction/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >owasp.org — Introduction</a
                    >
                </div>
            </section>

            {/*  ════════════════════════════════════════
     ACCESSIBILITY
════════════════════════════════════════  */}
            <section id="accessibility">
                <div className="section-header mb-8">
                    <span
                        className="section-num font-mono text-[11px] font-bold text-accent-cyan tracking-[0.2em] block mb-2"
                        >STEP 09 — ACCESSIBILITY TESTING</span
                    >
                    <h2>アクセシビリティ（a11y）テスト</h2>
                    <div
                        className="accent-line w-[48px] h-[3px] rounded-[2px] bg-accent-cyan my-4"
                        style={{"background":"var(--accent-pink)"}}
                    ></div>
                    <p>
                        WCAG・ADA・日本の「障害者差別解消法」など法的コンプライアンスの観点から
                        <strong>全てのユーザーが利用できるシステムの構築</strong>は必須要件です。
                    </p>
                </div>

                <div
                    className="callout callout-warn border-l-[3px] py-4 px-5 rounded-r-sm my-4 text-[13.5px] leading-[1.75] border-accent-yellow bg-accent-yellow/5"
                >
                    <strong>自動化ツールの限界を理解する：</strong>
                    自動ツールが検出できるのは全問題の約<strong>30〜40%</strong>のみです（明らかなカラーコントラスト違反・空の見出し等）。
                    スクリーンリーダーの文脈的意味・キーボードナビゲーションの直感性には人間による手動監査が不可欠です。
                    <br /><a
                        rel="noopener"
                        href="https://dev.to/maria_bueno/2025-guide-best-10-accessibility-testing-tools-automated-41"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >dev.to — Best a11y Testing Tools 2025</a
                    >
                </div>

                <h3
                    className="mt-8"
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.05rem","fontWeight":"600","marginBottom":"0.75rem"}}
                >
                    主要アクセシビリティテストツール（2025年）
                </h3>
                <div className="tool-grid grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="tool-name font-semibold text-[13.5px] text-text-primary">
                            axe DevTools (axe-core)
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            Deque Systems製。業界最信頼エンジン。Cypress・Jest統合。WCAG
                            A/AA/AAAをCI上で自動検出・修正提案まで
                        </div>
                        <span className="badge badge-a11y">業界標準</span>
                    </div>
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="tool-name font-semibold text-[13.5px] text-text-primary">
                            Lighthouse
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            Google Chrome
                            DevTools組み込み。カラーコントラスト・ARIAラベル欠落をスコアリング形式で評価
                        </div>
                        <span className="badge badge-a11y">無料</span>
                    </div>
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="tool-name font-semibold text-[13.5px] text-text-primary">
                            Pa11y
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            CLI + Headless
                            Chrome。複数URLのバッチ監査。CIツール向けの柔軟なソリューション
                        </div>
                        <span className="badge badge-a11y">CI向け</span>
                    </div>
                    <div
                        className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                    >
                        <div className="tool-name font-semibold text-[13.5px] text-text-primary">
                            TestEvolve
                        </div>
                        <div className="tool-desc text-[12px] text-text-secondary leading-[1.6]">
                            機能テスト自動化とアクセシビリティ視覚分析を単一プラットフォームで融合。リアルタイムダッシュボード
                        </div>
                        <span className="badge badge-a11y">統合型</span>
                    </div>
                </div>
                <div className="text-[13px] text-text-muted mt-2">
                    参照:
                    <a
                        rel="noopener"
                        href="https://www.deque.com/axe/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >deque.com — Axe Platform</a
                    >
                    <a
                        rel="noopener"
                        href="https://testguild.com/accessibility-testing-tools-automation/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >testguild.com — Top 18 Tools 2025</a
                    >
                </div>
            </section>

            {/*  ════════════════════════════════════════
     ISTQB CERTIFICATION ROADMAP
════════════════════════════════════════  */}
            <section id="istqb">
                <div className="section-header mb-8">
                    <span
                        className="section-num font-mono text-[11px] font-bold text-accent-cyan tracking-[0.2em] block mb-2"
                        >STEP 10 — ISTQB CERTIFICATION ROADMAP</span
                    >
                    <h2>ISTQB 資格ロードマップ</h2>
                    <div
                        className="accent-line w-[48px] h-[3px] rounded-[2px] bg-accent-cyan my-4"
                    ></div>
                    <p>
                        世界最大のソフトウェアテスト技術者認定組織 ISTQB（International Software
                        Testing Qualifications Board）は
                        130カ国以上で140万件以上の試験を実施しています。
                        定義された用語と概念は業界のデファクト言語として世界中のプロフェッショナルを繋いでいます。
                    </p>
                </div>

                {/*  CTFL  */}
                <div
                    className="cert-row flex gap-4 items-stretch py-6 border-b border-border last:border-b-0 max-md:flex-col"
                >
                    <div
                        className="cert-level-badge shrink-0 w-[60px] text-center flex flex-col items-center justify-start gap-[6px] pt-1 max-md:flex-row max-md:w-auto"
                    >
                        <div
                            className="cert-level-dot w-[14px] h-[14px] rounded-full mb-1"
                            style={{"background":"var(--accent-blue)","boxShadow":"0 0 8px rgba(99, 179, 237, 0.4)"}}
                        ></div>
                        <span className="cert-level-label">FOUNDATION</span>
                    </div>
                    <div className="cert-info">
                        <div
                            style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-start","gap":"1rem"}}
                        >
                            <div>
                                <h4>CTFL v4.0 — Certified Tester Foundation Level</h4>
                                <p>
                                    全ISTQB資格の前提条件。テストの基礎知識・用語・プロセスを体系的に習得。Waterfall・Agile・DevOps・CI/CDの全開発アプローチに対応。前提条件なしで受験可能。
                                </p>
                            </div>
                            <div
                                className="card-sm bg-bg-card border border-border rounded-sm py-4 px-5 transition-all duration-200 hover:bg-bg-card-hover hover:border-border-bright"
                                style={{"minWidth":"180px"}}
                            >
                                <div style={{"fontSize":"12px","color":"var(--text-secondary)"}}>
                                    問題数：<strong style={{"color":"var(--text-primary)"}}>40問</strong>
                                </div>
                                <div style={{"fontSize":"12px","color":"var(--text-secondary)"}}>
                                    合格点：<strong style={{"color":"var(--text-primary)"}}
                                        >26問（65%）</strong
                                    >
                                </div>
                                <div style={{"fontSize":"12px","color":"var(--text-secondary)"}}>
                                    試験時間：<strong style={{"color":"var(--text-primary)"}}
                                        >60分</strong
                                    >
                                </div>
                                <div style={{"fontSize":"12px","color":"var(--text-secondary)"}}>
                                    推奨学習：<strong style={{"color":"var(--text-primary)"}}
                                        >40〜60時間</strong
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="cert-tags">
                            <span className="badge badge-istqb">前提条件なし</span>
                            <span className="badge badge-istqb">全資格への登竜門</span>
                            <span className="badge badge-istqb">シラバス無料DL可</span>
                        </div>
                        <div className="mt-8">
                            <a
                                rel="noopener"
                                href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                                target="_blank"
                                >istqb.org — CTFL v4.0 詳細ページ</a
                            >
                            &nbsp;
                            <a
                                rel="noopener"
                                href="https://jstqb.jp/"
                                className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                                target="_blank"
                                >jstqb.jp — 日本語版</a
                            >
                        </div>
                    </div>
                </div>

                {/*  CTFL-AT  */}
                <div
                    className="cert-row flex gap-4 items-stretch py-6 border-b border-border last:border-b-0 max-md:flex-col"
                >
                    <div
                        className="cert-level-badge shrink-0 w-[60px] text-center flex flex-col items-center justify-start gap-[6px] pt-1 max-md:flex-row max-md:w-auto"
                    >
                        <div
                            className="cert-level-dot w-[14px] h-[14px] rounded-full mb-1"
                            style={{"background":"var(--accent-cyan)","boxShadow":"0 0 8px rgba(79, 209, 197, 0.4)"}}
                        ></div>
                        <span className="cert-level-label">FOUNDATION+</span>
                    </div>
                    <div className="cert-info">
                        <h4>CTFL-AT — Certified Tester Foundation Level Agile Tester</h4>
                        <p>
                            アジャイルプロジェクトでのテスト特化。アジャイルマニフェストの原則に基づくテスト手法・チーム全体でのアプローチを習得。CTFLが前提条件。
                        </p>
                        <div className="cert-tags">
                            <span
                                className="badge badge-unit inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-cyan/12 text-unit border border-accent-cyan/30"
                                >CTFL必須</span
                            >
                            <span
                                className="badge badge-unit inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-cyan/12 text-unit border border-accent-cyan/30"
                                >アジャイル専門</span
                            >
                        </div>
                        <a
                            rel="noopener"
                            href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/"
                            className="url-ref mt-2 d-block"
                            target="_blank"
                            >istqb.org — CTFL-AT</a
                        >
                    </div>
                </div>

                {/*  CTAL  */}
                <div
                    className="cert-row flex gap-4 items-stretch py-6 border-b border-border last:border-b-0 max-md:flex-col"
                >
                    <div
                        className="cert-level-badge shrink-0 w-[60px] text-center flex flex-col items-center justify-start gap-[6px] pt-1 max-md:flex-row max-md:w-auto"
                    >
                        <div
                            className="cert-level-dot w-[14px] h-[14px] rounded-full mb-1"
                            style={{"background":"var(--accent-purple)","boxShadow":"0 0 8px rgba(183, 148, 244, 0.4)"}}
                        ></div>
                        <span className="cert-level-label">ADVANCED</span>
                    </div>
                    <div className="cert-info">
                        <h4>CTAL — Advanced Level（上級）3コース</h4>
                        <div className="grid-2 mt-2">
                            <div
                                className="card-sm bg-bg-card border border-border rounded-sm py-4 px-5 transition-all duration-200 hover:bg-bg-card-hover hover:border-border-bright"
                            >
                                <div style={{"fontWeight":"600","fontSize":"13px","marginBottom":"4px"}}>
                                    Test Analyst (CTAL-TA)
                                </div>
                                <div style={{"fontSize":"12px","color":"var(--text-secondary)"}}>
                                    ブラックボックス技法・機能テスト・リスクベーステストに特化
                                </div>
                            </div>
                            <div
                                className="card-sm bg-bg-card border border-border rounded-sm py-4 px-5 transition-all duration-200 hover:bg-bg-card-hover hover:border-border-bright"
                            >
                                <div style={{"fontWeight":"600","fontSize":"13px","marginBottom":"4px"}}>
                                    Technical Test Analyst (CTAL-TTA)
                                </div>
                                <div style={{"fontSize":"12px","color":"var(--text-secondary)"}}>
                                    ホワイトボックス・非機能テスト・自動化・セキュリティに特化
                                </div>
                            </div>
                            <div
                                className="card-sm bg-bg-card border border-border rounded-sm py-4 px-5 transition-all duration-200 hover:bg-bg-card-hover hover:border-border-bright"
                            >
                                <div style={{"fontWeight":"600","fontSize":"13px","marginBottom":"4px"}}>
                                    Test Management (CTAL-TM)
                                </div>
                                <div style={{"fontSize":"12px","color":"var(--text-secondary)"}}>
                                    テスト計画・プロセス管理・チームリードに特化
                                </div>
                            </div>
                            <div
                                className="card-sm bg-bg-card border border-border rounded-sm py-4 px-5 transition-all duration-200 hover:bg-bg-card-hover hover:border-border-bright"
                            >
                                <div style={{"fontWeight":"600","fontSize":"13px","marginBottom":"4px"}}>
                                    Agile Technical Tester (CTAL-ATT)
                                </div>
                                <div style={{"fontSize":"12px","color":"var(--text-secondary)"}}>
                                    アジャイル環境での技術的テストスキル・CI/CD統合
                                </div>
                            </div>
                        </div>
                        <a
                            rel="noopener"
                            href="https://istqb.org/certifications/certified-tester-advanced-level-agile-technical-tester-ctal-att/"
                            className="url-ref mt-2 d-block"
                            target="_blank"
                            >istqb.org — CTAL-ATT</a
                        >
                    </div>
                </div>

                {/*  Specialist  */}
                <div
                    className="cert-row flex gap-4 items-stretch py-6 border-b border-border last:border-b-0 max-md:flex-col"
                >
                    <div
                        className="cert-level-badge shrink-0 w-[60px] text-center flex flex-col items-center justify-start gap-[6px] pt-1 max-md:flex-row max-md:w-auto"
                    >
                        <div
                            className="cert-level-dot w-[14px] h-[14px] rounded-full mb-1"
                            style={{"background":"var(--accent-green)","boxShadow":"0 0 8px rgba(104, 211, 145, 0.4)"}}
                        ></div>
                        <span className="cert-level-label">SPECIALIST</span>
                    </div>
                    <div className="cert-info">
                        <h4>Specialist &amp; Expert — 専門分野特化資格</h4>
                        <div className="tool-grid mt-2">
                            <div
                                className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                            >
                                <div
                                    className="tool-name font-semibold text-[13.5px] text-text-primary"
                                >
                                    CT-AI
                                </div>
                                <div
                                    className="tool-desc text-[12px] text-text-secondary leading-[1.6]"
                                >
                                    AIシステムのテスト・AIを使ったテスト支援
                                </div>
                                <a
                                    rel="noopener"
                                    href="https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/"
                                    className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                                    target="_blank"
                                    >詳細</a
                                >
                            </div>
                            <div
                                className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                            >
                                <div
                                    className="tool-name font-semibold text-[13.5px] text-text-primary"
                                >
                                    CT-GenAI
                                    <span
                                        className="badge badge-int inline-block py-[3px] px-[10px] rounded-[20px] text-[11px] font-semibold font-mono tracking-[0.05em] bg-accent-blue/12 text-integration border border-accent-blue/30"
                                        style={{"fontSize":"10px","padding":"1px 6px"}}
                                        >NEW 2025</span
                                    >
                                </div>
                                <div
                                    className="tool-desc text-[12px] text-text-secondary leading-[1.6]"
                                >
                                    生成AIを活用したテストプロセス全体の最適化
                                </div>
                                <a
                                    rel="noopener"
                                    href="https://istqb.org/certifications/gen-ai/"
                                    className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                                    target="_blank"
                                    >詳細</a
                                >
                            </div>
                            <div
                                className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                            >
                                <div
                                    className="tool-name font-semibold text-[13.5px] text-text-primary"
                                >
                                    CT-MAT
                                </div>
                                <div
                                    className="tool-desc text-[12px] text-text-secondary leading-[1.6]"
                                >
                                    モバイルアプリケーションテスト専門
                                </div>
                                <a
                                    rel="noopener"
                                    href="https://istqb.org/certifications/certified-tester-mobile-application-testing-ct-mat/"
                                    className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                                    target="_blank"
                                    >詳細</a
                                >
                            </div>
                            <div
                                className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                            >
                                <div
                                    className="tool-name font-semibold text-[13.5px] text-text-primary"
                                >
                                    CT-MBT
                                </div>
                                <div
                                    className="tool-desc text-[12px] text-text-secondary leading-[1.6]"
                                >
                                    モデルベーステスト。高度なテスト設計技法
                                </div>
                            </div>
                            <div
                                className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                            >
                                <div
                                    className="tool-name font-semibold text-[13.5px] text-text-primary"
                                >
                                    CT-ATLaS
                                </div>
                                <div
                                    className="tool-desc text-[12px] text-text-secondary leading-[1.6]"
                                >
                                    大規模アジャイル組織でのテスト品質管理
                                </div>
                                <a
                                    rel="noopener"
                                    href="https://istqb.org/certifications/certified-tester-agile-test-leadership-at-scale-ct-atlas/"
                                    className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                                    target="_blank"
                                    >詳細</a
                                >
                            </div>
                            <div
                                className="tool-card bg-bg-card border border-border rounded-sm p-4 transition-all duration-200 cursor-default flex flex-col gap-[6px] hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-[1px]"
                            >
                                <div
                                    className="tool-name font-semibold text-[13.5px] text-text-primary"
                                >
                                    CT-PT / CT-SEC
                                </div>
                                <div
                                    className="tool-desc text-[12px] text-text-secondary leading-[1.6]"
                                >
                                    パフォーマンステスト・セキュリティテスト専門
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  7 Principles  */}
                <h3
                    className="mt-8"
                    style={{"fontFamily":"var(--font-display)","fontSize":"1.1rem","fontWeight":"600","marginBottom":"1rem"}}
                >
                    テストの7基本原則（ISTQB CTFL v4.0 Section 1.3）
                </h3>
                <div className="card-grid grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                    <div
                        className="principle-card bg-bg-card border border-border rounded-sm py-4 px-5 flex gap-4 items-start transition-all duration-200 hover:border-border-bright"
                    >
                        <div
                            className="principle-num font-mono text-[1.4rem] font-bold text-accent-blue/25 shrink-0 leading-none mt-[3px]"
                        >
                            01
                        </div>
                        <div className="principle-text">
                            <h4>テストは欠陥の存在を示す</h4>
                            <p>
                                テストは欠陥があることを証明できるが、欠陥がないことは証明できない。完璧なシステムの証明は不可能。
                            </p>
                        </div>
                    </div>
                    <div
                        className="principle-card bg-bg-card border border-border rounded-sm py-4 px-5 flex gap-4 items-start transition-all duration-200 hover:border-border-bright"
                    >
                        <div
                            className="principle-num font-mono text-[1.4rem] font-bold text-accent-blue/25 shrink-0 leading-none mt-[3px]"
                        >
                            02
                        </div>
                        <div className="principle-text">
                            <h4>全数テストは不可能</h4>
                            <p>
                                あらゆる入力と前提条件の組み合わせを全てテストすることは不可能。リスクと優先度に基づいてテストを選択する。
                            </p>
                        </div>
                    </div>
                    <div
                        className="principle-card bg-bg-card border border-border rounded-sm py-4 px-5 flex gap-4 items-start transition-all duration-200 hover:border-border-bright"
                    >
                        <div
                            className="principle-num font-mono text-[1.4rem] font-bold text-accent-blue/25 shrink-0 leading-none mt-[3px]"
                        >
                            03
                        </div>
                        <div className="principle-text">
                            <h4>早期テスト（シフトレフト）</h4>
                            <p>
                                テストは可能な限り早い段階から開始すべき。要件定義フェーズでの欠陥発見は本番の100分の1のコストで修正できる。
                            </p>
                        </div>
                    </div>
                    <div
                        className="principle-card bg-bg-card border border-border rounded-sm py-4 px-5 flex gap-4 items-start transition-all duration-200 hover:border-border-bright"
                    >
                        <div
                            className="principle-num font-mono text-[1.4rem] font-bold text-accent-blue/25 shrink-0 leading-none mt-[3px]"
                        >
                            04
                        </div>
                        <div className="principle-text">
                            <h4>欠陥の集中（80/20の法則）</h4>
                            <p>
                                バグは特定の少数のモジュールに集中して発生する傾向がある。リスク分析でそれらを特定して重点的にテストする。
                            </p>
                        </div>
                    </div>
                    <div
                        className="principle-card bg-bg-card border border-border rounded-sm py-4 px-5 flex gap-4 items-start transition-all duration-200 hover:border-border-bright"
                    >
                        <div
                            className="principle-num font-mono text-[1.4rem] font-bold text-accent-blue/25 shrink-0 leading-none mt-[3px]"
                        >
                            05
                        </div>
                        <div className="principle-text">
                            <h4>殺虫剤のパラドックス</h4>
                            <p>
                                同じテストを繰り返すと新しいバグを見つけられなくなる。テストケースを定期的に見直し・更新・多様化する必要がある。
                            </p>
                        </div>
                    </div>
                    <div
                        className="principle-card bg-bg-card border border-border rounded-sm py-4 px-5 flex gap-4 items-start transition-all duration-200 hover:border-border-bright"
                    >
                        <div
                            className="principle-num font-mono text-[1.4rem] font-bold text-accent-blue/25 shrink-0 leading-none mt-[3px]"
                        >
                            06
                        </div>
                        <div className="principle-text">
                            <h4>テストはコンテキスト依存</h4>
                            <p>
                                組込み系・Webアプリ・AIシステムではテスト手法が異なる。状況に合わせた最適なアプローチを選択すること。
                            </p>
                        </div>
                    </div>
                    <div
                        className="principle-card bg-bg-card border border-border rounded-sm py-4 px-5 flex gap-4 items-start transition-all duration-200 hover:border-border-bright"
                        style={{"gridColumn":"1 / -1"}}
                    >
                        <div
                            className="principle-num font-mono text-[1.4rem] font-bold text-accent-blue/25 shrink-0 leading-none mt-[3px]"
                        >
                            07
                        </div>
                        <div className="principle-text">
                            <h4>欠陥ゼロの誤謬（Absence-of-defects Fallacy）</h4>
                            <p>
                                バグをゼロにしても、ユーザーニーズを満たさないシステムでは意味がない。テストの本質的な目的は「動くこと」ではなく「ユーザーへのビジネス価値を安全・迅速・公平に届けること」。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-muted mt-2">
                    参照:
                    <a
                        rel="noopener"
                        href="https://istqb.org/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >istqb.org — 公式サイト</a
                    >
                    <a
                        rel="noopener"
                        href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >CTFL v4.0 詳細</a
                    >
                    <a
                        rel="noopener"
                        href="https://istqb.org/certifications/"
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >全資格一覧</a
                    >
                    <a
                        rel="noopener"
                        href="https://glossary.istqb.org/en_US/search?term="
                        className="url-ref inline-flex items-center gap-[5px] font-mono text-[11px] text-accent-blue opacity-70 no-underline border-b border-dashed border-accent-blue/30 pb-[1px] transition-opacity duration-200 hover:opacity-100 before:content-[&quot;🔗&quot;] before:text-[10px]"
                        target="_blank"
                        >ISTQBグロッサリー</a
                    >
                </div>
            </section>

            {/*  ════════════════════════════════════════
     REFERENCE URLS
════════════════════════════════════════  */}
            <section id="references">
                <div className="section-header mb-8">
                    <span
                        className="section-num font-mono text-[11px] font-bold text-accent-cyan tracking-[0.2em] block mb-2"
                        >APPENDIX — REFERENCES</span
                    >
                    <h2>全参照URL一覧</h2>
                    <div
                        className="accent-line w-[48px] h-[3px] rounded-[2px] bg-accent-cyan my-4"
                    ></div>
                    <p>
                        本ガイドで引用した全ての参照元。最新データ・詳細情報はこれらの公式ソースから確認してください。
                    </p>
                </div>

                <div className="table-wrapper overflow-x-auto my-6">
                    <table className="ref-table">
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
                                        rel="noopener"
                                        href="https://istqb.org/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>CTFL v4.0 詳細ページ</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>全資格一覧</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://istqb.org/certifications/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/certifications/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>CT-AI（AIテスト）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>CT-GenAI（生成AIテスト）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://istqb.org/certifications/gen-ai/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/certifications/gen-ai/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>CT-MAT（モバイルテスト）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://istqb.org/certifications/certified-tester-mobile-application-testing-ct-mat/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/certifications/certified-tester-mobile-application-testing-ct-mat/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>CT-ATLaS（大規模アジャイル）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://istqb.org/certifications/certified-tester-agile-test-leadership-at-scale-ct-atlas/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/certifications/certified-tester-agile-test-leadership-at-scale-ct-atlas/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>CTAL-ATT（アジャイル技術）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://istqb.org/certifications/certified-tester-advanced-level-agile-technical-tester-ctal-att/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/certifications/certified-tester-advanced-level-agile-technical-tester-ctal-att/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>ISTQBグロッサリー</td>
                                <td>
                                    <a
                                        rel="noopener"
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
                                    <a
                                        rel="noopener"
                                        href="https://jstqb.jp/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://jstqb.jp/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テスト戦略</td>
                                <td>Test Shapes（Pyramid/Diamond/Honeycomb/Trophy）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://www.design-master.com/pyramid-diamond-honeycomb-or-trophy-find-a-testing-strategy-that-fits.html"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.design-master.com/pyramid-diamond-honeycomb-or-trophy-find-a-testing-strategy-that-fits.html</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テスト戦略</td>
                                <td>Test Trophy（Kent C. Dodds）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications"
                                        className="ref-url"
                                        target="_blank"
                                        >https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テスト戦略</td>
                                <td>Test Honeycomb（Premiersoft）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://premiersoft.net/en/blog/an-analysis-of-the-different-test-shapes"
                                        className="ref-url"
                                        target="_blank"
                                        >https://premiersoft.net/en/blog/an-analysis-of-the-different-test-shapes</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ユニットテスト</td>
                                <td>Unit Testing Best Practices（IBM）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://www.ibm.com/think/insights/unit-testing-best-practices"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.ibm.com/think/insights/unit-testing-best-practices</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ユニットテスト</td>
                                <td>Ultimate Guide to Unit Testing（TestDevLab）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://www.testdevlab.com/blog/the-ultimate-guide-to-unit-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.testdevlab.com/blog/the-ultimate-guide-to-unit-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ユニットテスト</td>
                                <td>Testing Implementation Details（Kent C. Dodds）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://kentcdodds.com/blog/testing-implementation-details"
                                        className="ref-url"
                                        target="_blank"
                                        >https://kentcdodds.com/blog/testing-implementation-details</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ユニットテスト</td>
                                <td>Best Unit Testing Tools 2025（Testomat.io）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://testomat.io/blog/unit-testing-tools/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://testomat.io/blog/unit-testing-tools/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ユニットテスト</td>
                                <td>Best Unit Testing Tools 2026（PractiTest）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://www.practitest.com/resource-center/blog/best-unit-testing-tools/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.practitest.com/resource-center/blog/best-unit-testing-tools/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ユニットテスト</td>
                                <td>17 Best Unit Testing Frameworks（LambdaTest）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://www.testmuai.com/blog/unit-testing-frameworks/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.testmuai.com/blog/unit-testing-frameworks/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>機能/結合テスト</td>
                                <td>Functional vs Integration Testing（TotalShiftLeft）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://totalshiftleft.ai/blog/functional-testing-vs-integration-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://totalshiftleft.ai/blog/functional-testing-vs-integration-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>機能/結合テスト</td>
                                <td>Integration vs Functional Testing（Testim）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://www.testim.io/blog/integration-testing-vs-functional-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.testim.io/blog/integration-testing-vs-functional-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>機能/結合テスト</td>
                                <td>Postman API Testing Docs</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://learning.postman.com/docs/tests-and-scripts/test-apis/test-apis"
                                        className="ref-url"
                                        target="_blank"
                                        >https://learning.postman.com/docs/tests-and-scripts/test-apis/test-apis</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>E2Eテスト</td>
                                <td>Playwright vs Cypress 2025 Benchmarks</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://javascript.plainenglish.io/playwright-vs-cypress-performance-benchmarks-the-2025-report-c2db402c7a55"
                                        className="ref-url"
                                        target="_blank"
                                        >https://javascript.plainenglish.io/playwright-vs-cypress-performance-benchmarks-the-2025-report-c2db402c7a55</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>E2Eテスト</td>
                                <td>Playwright vs Cypress（TestDino）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://testdino.com/blog/playwright-vs-cypress/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://testdino.com/blog/playwright-vs-cypress/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>E2Eテスト</td>
                                <td>Playwright vs Selenium vs Cypress（ThinkSys）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://thinksys.com/qa-testing/playwright-vs-selenium-vs-cypress/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://thinksys.com/qa-testing/playwright-vs-selenium-vs-cypress/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テスト手法</td>
                                <td>Black/White/Grey Box Testing（Testlio）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://testlio.com/blog/black-box-vs-white-vs-gray-box-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://testlio.com/blog/black-box-vs-white-vs-gray-box-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テスト手法</td>
                                <td>Practical Guide（DEV Community）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://dev.to/matt_calder_e620d84cf0c14/black-box-vs-white-box-vs-grey-box-testing-a-practical-guide-i9d"
                                        className="ref-url"
                                        target="_blank"
                                        >https://dev.to/matt_calder_e620d84cf0c14/black-box-vs-white-box-vs-grey-box-testing-a-practical-guide-i9d</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>BDD</td>
                                <td>Cucumber BDD Official</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://cucumber.io/docs/bdd/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://cucumber.io/docs/bdd/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>BDD</td>
                                <td>BDD Essential Guide 2026（Monday.com）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://monday.com/blog/rnd/behavior-driven-development/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://monday.com/blog/rnd/behavior-driven-development/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>BDD</td>
                                <td>Is BDD Dying? 2025（Automation Panda）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://automationpanda.com/2025/03/06/is-bdd-dying/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://automationpanda.com/2025/03/06/is-bdd-dying/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>BDD</td>
                                <td>BDD Reality Check 2025（303 Software）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://303software.com/behavior-driven-testing-a-cucumber-test-automation-framework"
                                        className="ref-url"
                                        target="_blank"
                                        >https://303software.com/behavior-driven-testing-a-cucumber-test-automation-framework</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>パフォーマンス</td>
                                <td>Performance Testing Metrics 2025（Medium）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://medium.com/@priti_9991/performance-testing-metrics-that-matter-in-2025-fc4d4d7a68fe"
                                        className="ref-url"
                                        target="_blank"
                                        >https://medium.com/@priti_9991/performance-testing-metrics-that-matter-in-2025-fc4d4d7a68fe</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>パフォーマンス</td>
                                <td>8 Types of Performance Testing（EPAM）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://solutionshub.epam.com/blog/post/types-of-performance-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://solutionshub.epam.com/blog/post/types-of-performance-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>パフォーマンス</td>
                                <td>Modern SDET Toolkit 2026（Medium）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://medium.com/@abhishekpurohit444/modern-sdet-toolkit-performance-security-accessibility-chaos-testing-tools-explained-410298d045aa"
                                        className="ref-url"
                                        target="_blank"
                                        >https://medium.com/@abhishekpurohit444/modern-sdet-toolkit-performance-security-accessibility-chaos-testing-tools-explained-410298d045aa</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>セキュリティ</td>
                                <td>OWASP Top 10:2025</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://owasp.org/Top10/2025/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://owasp.org/Top10/2025/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>セキュリティ</td>
                                <td>OWASP Introduction 2025</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://owasp.org/Top10/2025/0x00_2025-Introduction/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://owasp.org/Top10/2025/0x00_2025-Introduction/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>セキュリティ</td>
                                <td>Security Testing 2025（Mend.io）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://www.mend.io/blog/security-testing-in-2025-testing-apps-ai-cloud-native-and-more/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.mend.io/blog/security-testing-in-2025-testing-apps-ai-cloud-native-and-more/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>アクセシビリティ</td>
                                <td>Best a11y Testing Tools 2025（DEV）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://dev.to/maria_bueno/2025-guide-best-10-accessibility-testing-tools-automated-41"
                                        className="ref-url"
                                        target="_blank"
                                        >https://dev.to/maria_bueno/2025-guide-best-10-accessibility-testing-tools-automated-41</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>アクセシビリティ</td>
                                <td>Axe Platform（Deque Systems）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://www.deque.com/axe/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.deque.com/axe/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>アクセシビリティ</td>
                                <td>Top 18 Accessibility Tools 2025（TestGuild）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://testguild.com/accessibility-testing-tools-automation/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://testguild.com/accessibility-testing-tools-automation/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テストトレンド</td>
                                <td>Shift-Left Testing 2025（QASource）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://blog.qasource.com/shift-left-testing-a-beginners-guide-to-advancing-automation-with-generative-ai"
                                        className="ref-url"
                                        target="_blank"
                                        >https://blog.qasource.com/shift-left-testing-a-beginners-guide-to-advancing-automation-with-generative-ai</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テストトレンド</td>
                                <td>Software Testing Trends 2025（Trendig）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://trendig.com/en/blog/software-testing-trends-2025/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://trendig.com/en/blog/software-testing-trends-2025/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>テストトレンド</td>
                                <td>Top 5 Testing Trends 2025（Xray）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://www.getxray.app/blog/top-2025-software-testing-trends"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.getxray.app/blog/top-2025-software-testing-trends</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ブラックボックス</td>
                                <td>Future of Black Box Testing 2025（BuzzClan）</td>
                                <td>
                                    <a
                                        rel="noopener"
                                        href="https://buzzclan.com/quality-assurance/black-box-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://buzzclan.com/quality-assurance/black-box-testing/</a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        
</main>
<footer>
            <p>
                現代ソフトウェアテスト完全ガイド 2025 &nbsp;|&nbsp;
                <a rel="noopener" href="https://istqb.org/" target="_blank">ISTQB CTFL v4.0</a> 準拠
                &nbsp;|&nbsp;
                <a rel="noopener" href="https://owasp.org/Top10/2025/" target="_blank"
                    >OWASP Top 10:2025</a
                >
                対応
            </p>
            <p style={{"marginTop":"0.5rem","fontSize":"11px","color":"var(--text-muted)"}}>
                © 2025 — Built with precision. Test early, test often, test right.
            </p>
        </footer>

    </>
  );
}
