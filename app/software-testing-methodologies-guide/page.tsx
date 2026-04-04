import Header from '../../components/Header';
import '../software-testing-methodologies-guide.css';

export default function SoftwareTestingMethodologiesGuide() {
    return (
        <>
            <Header />
            <main>
<section className="hero" id="top">
  <div className="hero-content">
    <span className="hero-label">ソフトウェアテスト手法 完全ガイド 2025</span>
    <h1>
      <em>Test</em><br />
      Methodologies
      <span className="sub">ISTQB CTFL v4.0 準拠 ｜ 初学者から実践者まで ｜ 設計技法・SDLC統合・AI活用を完全網羅</span>
    </h1>
    <p className="hero-desc">
      「どんなテストを、どの順番で、どの技法で設計するか」——これがテスト手法の本質です。
      ISTQB の7原則を土台に、静的/動的テスト・ブラック/ホワイトボックス技法・
      各テストレベルの戦略・SDLC統合・最新のAI活用まで、
      体系的にステップバイステップで完全解説します。
    </p>
    <div className="hero-stats">
      <div className="stat"><span className="stat-num">7</span><span className="stat-k">テストの基本原則（CTFL 1.3）</span></div>
      <div className="stat"><span className="stat-num">12+</span><span className="stat-k">テスト設計技法の種類</span></div>
      <div className="stat"><span className="stat-num">4</span><span className="stat-k">主要テストレベル</span></div>
      <div className="stat"><span className="stat-num">6+</span><span className="stat-k">SDLC適合モデル</span></div>
      <div className="stat"><span className="stat-num">2025</span><span className="stat-k">ISTQB CTFL v4.0.1対応</span></div>
    </div>

    {/* Methodology Overview Map */}
    <div className="method-map">
      <div className="mm-cell mm-c1">
        <span className="mm-icon">📐</span>
        <div className="mm-title text-[var(--teal2)]">静的テスト</div>
        <div className="mm-sub">レビュー・静的解析<br />コード実行なし</div>
      </div>
      <div className="mm-cell mm-c2">
        <span className="mm-icon">⚡</span>
        <div className="mm-title text-[var(--color-accent-yellow)]">動的テスト</div>
        <div className="mm-sub">実行ベースの検証<br />入出力を確認</div>
      </div>
      <div className="mm-cell mm-c3">
        <span className="mm-icon">🔲</span>
        <div className="mm-title text-[var(--violet2)]">ブラックボックス</div>
        <div className="mm-sub">外部視点<br />仕様ベース</div>
      </div>
      <div className="mm-cell mm-c4">
        <span className="mm-icon">⬜</span>
        <div className="mm-title text-[var(--coral2)]">ホワイトボックス</div>
        <div className="mm-sub">内部構造<br />コードベース</div>
      </div>
      <div className="mm-cell mm-r2c1">
        <span className="mm-icon">🎯</span>
        <div className="mm-title text-[var(--color-accent-green)]">設計技法</div>
        <div className="mm-sub">同値/境界値/デシジョン<br />状態遷移/ユースケース</div>
      </div>
      <div className="mm-cell mm-r2c2">
        <span className="mm-icon">🏗️</span>
        <div className="mm-title text-[var(--teal2)]">テストレベル</div>
        <div className="mm-sub">ユニット→統合<br />→システム→受入</div>
      </div>
      <div className="mm-cell mm-r2c3">
        <span className="mm-icon">🔄</span>
        <div className="mm-title text-[var(--color-accent-yellow)]">SDLC統合</div>
        <div className="mm-sub">ウォーターフォール<br />アジャイル/DevOps</div>
      </div>
      <div className="mm-cell">
        <span className="mm-icon">🤖</span>
        <div className="mm-title text-[var(--violet2)]">AI × テスト</div>
        <div className="mm-sub">GenAI活用<br />自動生成/分析</div>
      </div>
    </div>

    <div className="callout callout-warn">
      <strong>このガイドの使い方：</strong>
      ISTQB CTFL v4.0.1 シラバスの章構成に沿って、Section 1（テストの基礎）→ Section 3（静的テスト）→ Section 4（テスト設計技法）→ Section 2（SDLC統合）の順に構成されています。
      試験対策にも、実務の参考書としても活用できます。
      <br />
      <a href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" className="ulink" target="_blank" rel="noopener noreferrer">istqb.org — CTFL v4.0 公式</a>
      <a href="https://glossary.istqb.org/en_US/search?term=" className="ulink" target="_blank" rel="noopener noreferrer">ISTQBグロッサリー</a>
    </div>
  </div>
</section>

{/* ══════════════════════════════════════
     SECTION 1: 7 TESTING PRINCIPLES
══════════════════════════════════════ */}
<section id="principles">
  <div className="section-header">
    <span className="section-header-num">SECTION 01 — ISTQB CTFL 1.3: TESTING PRINCIPLES</span>
    <h2>テストの7基本原則</h2>
    <div className="amber-rule"></div>
    <p>
      ISTQB が定義する7原則は、あらゆるテスト手法の土台となる普遍的な真理です。
      2025年においても、AIが台頭する中でこれらの原則は変わらない堅牢な基盤を提供しています。
    </p>
  </div>

  <div className="card-grid" style={{gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))"}}>
    <div className="principle-card">
      <div className="p-num">01</div>
      <div className="p-body">
        <h4>テストは欠陥の存在を示す</h4>
        <p>テストは欠陥の<em>存在を証明</em>できるが、<em>欠陥がないことは証明できない</em>。
        テストの目的はリスクを減らすことであり、完璧な証明ではない。</p>
      </div>
    </div>
    <div className="principle-card">
      <div className="p-num">02</div>
      <div className="p-body">
        <h4>全数テストは不可能</h4>
        <p>全ての入力・条件・パスをテストすることは現実的に不可能。
        <strong>リスクと優先度</strong>に基づいたテストの選択が不可欠。</p>
      </div>
    </div>
    <div className="principle-card">
      <div className="p-num">03</div>
      <div className="p-body">
        <h4>早期テスト（シフトレフト）</h4>
        <p>テストは可能な限り<strong>早い段階から</strong>開始すべき。要件定義・設計フェーズからの品質保証が欠陥修正コストを劇的に削減する。</p>
      </div>
    </div>
    <div className="principle-card">
      <div className="p-num">04</div>
      <div className="p-body">
        <h4>欠陥の集中（80/20の法則）</h4>
        <p>バグは<strong>少数の特定モジュール</strong>に集中して発生する傾向がある。
        リスク分析でそれらを特定し重点的にテストするパレートの法則の応用。</p>
      </div>
    </div>
    <div className="principle-card">
      <div className="p-num">05</div>
      <div className="p-body">
        <h4>殺虫剤のパラドックス</h4>
        <p>同じテストを繰り返すと<strong>新しいバグを見つけられなくなる</strong>。
        テストケースを定期的に見直し・更新・多様化する「殺虫剤の交換」が必要。</p>
      </div>
    </div>
    <div className="principle-card">
      <div className="p-num">06</div>
      <div className="p-body">
        <h4>テストはコンテキスト依存</h4>
        <p>組込み系・Webアプリ・AIシステムではテスト手法が根本的に異なる。
        <strong>状況に合わせた最適なアプローチ</strong>を選択することが重要。</p>
      </div>
    </div>
    <div className="principle-card" style={{gridColumn: "1/-1"}}>
      <div className="p-num">07</div>
      <div className="p-body">
        <h4>欠陥ゼロの誤謬（Absence-of-defects Fallacy）</h4>
        <p>バグをゼロにしても、ユーザーが求める価値を提供しないシステムでは意味がない。
        <strong>テストの本質</strong>は「動くこと」の証明ではなく、「ユーザーへのビジネス価値を安全・迅速・公平に届けること」にある。
        ISTQB CTFLの最も重要な原則の一つ。</p>
      </div>
    </div>
  </div>
  <p className="text-sm mt-2">参照:
    <a href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" className="ulink" target="_blank" rel="noopener noreferrer">istqb.org — CTFL v4.0</a>
    <a href="https://www.softwaretestinghelp.com/principles-of-software-testing/" className="ulink" target="_blank" rel="noopener noreferrer">softwaretestinghelp.com — 7 Testing Principles</a>
    <a href="https://glossary.istqb.org/en_US/search?term=pesticide+paradox" className="ulink" target="_blank" rel="noopener noreferrer">ISTQB Glossary — Pesticide Paradox</a>
  </p>
</section>

{/* ══════════════════════════════════════
     SECTION 2: STATIC vs DYNAMIC
══════════════════════════════════════ */}
<section id="static-dynamic">
  <div className="section-header">
    <span className="section-header-num">SECTION 02 — ISTQB CTFL 3.1: STATIC TESTING</span>
    <h2>静的テスト vs 動的テスト</h2>
    <div className="amber-rule"></div>
    <p>
      テストは「コードを実行するかどうか」で大きく2つに分類されます。
      静的テストは実行前に欠陥を発見する最も費用対効果の高い手法です。
    </p>
  </div>

  <div className="vs-grid">
    <div className="vs-col" style={{borderColor: "rgba(58,184,168,.3)"}}>
      <h3 className="text-[var(--teal2)]">📐 静的テスト（Static Testing）</h3>
      <p style={{fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: ".85rem"}}>
        ソフトウェアを<strong>実行せずに</strong>欠陥を検出する。コード・ドキュメント・設計書・要件仕様書を直接分析する。
      </p>
      <ul className="checklist" style={{fontSize: "12.5px"}}>
        <li>要件・設計・コードのレビュー</li>
        <li>ウォークスルー・インスペクション</li>
        <li>静的解析ツール（SAST）</li>
        <li>モデルベース検証</li>
        <li>コーディング規約チェック</li>
      </ul>
      <div className="callout callout-info mt-2" style={{fontSize: "12px"}}>
        <strong>コスト優位性：</strong>開発フェーズで発見した欠陥の修正コストは、本番の1/100。
        静的テストが最も高い投資対効果を持つ。
      </div>
    </div>
    <div className="vs-mid">⟷</div>
    <div className="vs-col" style={{borderColor: "var(--border2)"}}>
      <h3 className="text-[var(--color-accent-yellow)]">⚡ 動的テスト（Dynamic Testing）</h3>
      <p style={{fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: ".85rem"}}>
        ソフトウェアを<strong>実際に実行して</strong>、入力に対する出力・挙動を検証する。テストケースに基づいて実行し結果を評価する。
      </p>
      <ul className="checklist" style={{fontSize: "12.5px"}}>
        <li>ユニットテスト・統合テスト</li>
        <li>システムテスト・受入テスト</li>
        <li>機能テスト・非機能テスト</li>
        <li>回帰テスト・スモークテスト</li>
        <li>E2Eテスト・パフォーマンステスト</li>
      </ul>
      <div className="callout callout-warn mt-2" style={{fontSize: "12px"}}>
        <strong>実行環境必須：</strong>テスト環境・テストデータ・実際の動作確認が必要。
        静的テストで見つからない動作・タイミング・パフォーマンス問題を検出。
      </div>
    </div>
  </div>

  {/* Static Testing Techniques Detail */}
  <h3 className="mt-4" style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "400", marginBottom: "1rem", color: "var(--text)"}}>静的テストの主要技法（ISTQB CTFL Section 3）</h3>
  <div className="table-wrapper">
    <table>
      <thead><tr><th>技法</th><th>別名</th><th>説明</th><th>参加人数</th><th>形式度</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>インフォーマルレビュー</strong></td>
          <td>ペアレビュー</td>
          <td>明確な手順なしに行う非公式なレビュー。バディチェックやペアプログラミングが典型例。</td>
          <td>1〜2名</td>
          <td className="g">低（柔軟）</td>
        </tr>
        <tr>
          <td><strong>ウォークスルー</strong></td>
          <td>Walkthrough</td>
          <td>作成者がチームにドキュメントやコードを案内・説明する。フィードバック収集が目的。議事録は任意。</td>
          <td>2〜5名</td>
          <td className="w">中</td>
        </tr>
        <tr>
          <td><strong>テクニカルレビュー</strong></td>
          <td>Technical Review</td>
          <td>技術専門家グループによる成果物の評価。技術的な問題・標準との乖離を検出。モデレーター不要な場合もある。</td>
          <td>3〜6名</td>
          <td className="w">中〜高</td>
        </tr>
        <tr>
          <td><strong>インスペクション</strong></td>
          <td>Fagan Inspection</td>
          <td>最も形式的なレビュー。事前準備→会議→修正→フォローアップの厳格なプロセス。欠陥を正式に記録・追跡する。</td>
          <td>4〜6名</td>
          <td className="r">高（厳格）</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="grid-2 mt-2">
    <div>
      <h4 style={{fontSize: ".9rem", fontWeight: "700", color: "var(--teal2)", marginBottom: ".5rem"}}>静的解析ツール（SAST）の役割</h4>
      <div className="tool-grid" style={{gridTemplateColumns: "1fr 1fr"}}>
        <div className="tool-card">
          <div className="tool-name">SonarQube</div>
          <div className="tool-desc">コード品質・セキュリティ脆弱性・技術的負債を継続監視。CI/CD統合が強力。</div>
          <span className="badge badge-int" style={{marginTop: "4px"}}>最推奨</span>
        </div>
        <div className="tool-card">
          <div className="tool-name">ESLint / Pylint</div>
          <div className="tool-desc">JS/TS・Python向け。コーディング規約・潜在的エラーを開発中にリアルタイム検出。</div>
          <span className="badge badge-e2e" style={{marginTop: "4px"}}>開発標準</span>
        </div>
        <div className="tool-card">
          <div className="tool-name">Checkmarx</div>
          <div className="tool-desc">エンタープライズSASTの代表。OWASP脆弱性を静的解析で網羅的に検出する。</div>
          <span className="badge b-coral" style={{marginTop: "4px"}}>セキュリティ特化</span>
        </div>
        <div className="tool-card">
          <div className="tool-name">Semgrep</div>
          <div className="tool-desc">OSS・高速・多言語対応のSASTエンジン。カスタムルール作成が容易で2025年急速普及中。</div>
          <span className="badge badge-func" style={{marginTop: "4px"}}>2025新潮流</span>
        </div>
      </div>
    </div>
    <div>
      <div className="code-block">
        <div className="code-header"><div className="code-dots"><span></span><span></span><span></span></div><span className="code-lang">静的解析 — ESLint設定例 (.eslintrc.js)</span></div>
        <pre>
          <span className="cm">// 静的テストの自動化：ESLintでコード品質を担保</span>{'\n'}
          module.<span className="fn">exports</span> = {'{'}{'\n'}
          {'  '}<span className="str">"extends"</span>: [{'\n'}
          {'    '}<span className="str">"eslint:recommended"</span>,{'\n'}
          {'    '}<span className="str">"plugin:security/recommended"</span>  <span className="cm">// セキュリティルール</span>{'\n'}
          {'  '}],{'\n'}
          {'  '}<span className="str">"rules"</span>: {'{'}{'\n'}
          {'    '}<span className="str">"no-unused-vars"</span>: <span className="str">"error"</span>,       <span className="cm">// 未使用変数</span>{'\n'}
          {'    '}<span className="str">"no-eval"</span>: <span className="str">"error"</span>,              <span className="cm">// eval()の禁止</span>{'\n'}
          {'    '}<span className="str">"eqeqeq"</span>: <span className="str">"error"</span>,              <span className="cm">// === の強制</span>{'\n'}
          {'    '}<span className="str">"complexity"</span>: [<span className="str">"warn"</span>, <span className="num">10</span>],    <span className="cm">// 循環的複雑度</span>{'\n'}
          {'    '}<span className="str">"max-lines"</span>: [<span className="str">"warn"</span>, <span className="num">300</span>],    <span className="cm">// 1ファイル300行制限</span>{'\n'}
          {'  '}{'}'}{'\n'}
          {'}'};{'\n'}
          {'\n'}
          <span className="cm">// CI/CDでの自動実行（GitHub Actions）</span>{'\n'}
          <span className="cm"># .github/workflows/static-analysis.yml</span>{'\n'}
          steps:{'\n'}
          {'  '}- <span className="dec">run</span>: <span className="str">npm run lint</span>       <span className="cm"># ESLint</span>{'\n'}
          {'  '}- <span className="dec">run</span>: <span className="str">npx sonarcloud-scan</span> <span className="cm"># SonarQube</span>
        </pre>
      </div>
    </div>
  </div>
  <p className="text-sm mt-1">参照:
    <a href="https://www.browserstack.com/guide/static-testing" className="ulink" target="_blank" rel="noopener noreferrer">browserstack.com — Static Testing Guide</a>
    <a href="https://www.testdevlab.com/blog/static-testing-vs-dynamic-testing" className="ulink" target="_blank" rel="noopener noreferrer">testdevlab.com — Static vs Dynamic Testing</a>
  </p>
</section>

{/* ══════════════════════════════════════
     SECTION 3: BLACK / WHITE / GREY BOX
══════════════════════════════════════ */}
<section id="blackwhite">
  <div className="section-header">
    <span className="section-header-num">SECTION 03 — TEST PERSPECTIVES</span>
    <h2>ブラックボックス / ホワイトボックス / グレーボックス</h2>
    <div className="amber-rule"></div>
    <p>
      テスト実施者が「内部構造をどれだけ知っているか」で3つのパラダイムに分類されます。
      現代のWebアプリケーション開発では戦略的に組み合わせて使用します。
    </p>
  </div>

  <div className="card-grid">
    <div className="card border-[rgba(58,184,168,.3)]">
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".85rem"}}>
        <h3 style={{fontSize: "1.1rem", color: "var(--teal2)"}}>🔲 ブラックボックステスト</h3>
        <span className="badge badge-int">外部視点</span>
      </div>
      <p>内部コードを<strong>一切知らずに</strong>、外部の振る舞いのみを検証。ユーザー視点でビジネス仕様に対するテストを設計。</p>
      <hr className="divider" />
      <div style={{fontSize: "12.5px", color: "var(--color-text-secondary)"}}>
        <strong className="text-[var(--text)]">使用場面：</strong>機能テスト・受入テスト・UAT<br />
        <strong className="text-[var(--text)]">設計根拠：</strong>要件仕様書・ユーザーストーリー<br />
        <strong className="text-[var(--text)]">主な技法：</strong>同値クラス・境界値・デシジョンテーブル・状態遷移
      </div>
    </div>
    <div className="card border-[rgba(224,92,92,.3)]">
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".85rem"}}>
        <h3 style={{fontSize: "1.1rem", color: "var(--coral2)"}}>⬜ ホワイトボックステスト</h3>
        <span className="badge b-coral">内部視点</span>
      </div>
      <p>ソースコード・アーキテクチャ・実装詳細を<strong>完全に把握した上で</strong>テストを設計。全実行パス・論理フロー・条件分岐を網羅的に検査。</p>
      <hr className="divider" />
      <div style={{fontSize: "12.5px", color: "var(--color-text-secondary)"}}>
        <strong className="text-[var(--text)]">使用場面：</strong>ユニットテスト・コンポーネントテスト・静的解析<br />
        <strong className="text-[var(--text)]">設計根拠：</strong>ソースコード・設計書<br />
        <strong className="text-[var(--text)]">主な技法：</strong>命令網羅・分岐網羅・条件網羅・パス網羅
      </div>
    </div>
    <div className="card border-[rgba(139,110,221,.3)]">
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".85rem"}}>
        <h3 style={{fontSize: "1.1rem", color: "var(--violet2)"}}>🔳 グレーボックステスト</h3>
        <span className="badge badge-func">部分的知識</span>
      </div>
      <p>内部構造の<strong>「部分的な知識」</strong>を持ってテストケースを設計し、実行は外部インターフェース（UI・API）から行う。黒と白の中間的アプローチ。</p>
      <hr className="divider" />
      <div style={{fontSize: "12.5px", color: "var(--color-text-secondary)"}}>
        <strong className="text-[var(--text)]">使用場面：</strong>E2Eテスト・インテグレーションテスト・ペネトレーションテスト<br />
        <strong className="text-[var(--text)]">特徴：</strong>IASTツール・セキュリティテストとの相性が良い
      </div>
    </div>
  </div>

  <div className="callout callout-info mt-3">
    <strong>2025年の実証データ：</strong>
    セキュリティとAPI検証にグレーボックス、UI検証にブラックボックス、クリティカルなビジネスロジックにホワイトボックスを
    バランスよく組み合わせた組織は、本番デプロイ前にクリティカルな欠陥を<strong>35%多く特定</strong>できることが実証されています。
    <br />
    <a href="https://testlio.com/blog/black-box-vs-white-vs-gray-box-testing/" className="ulink" target="_blank" rel="noopener noreferrer">testlio.com — Black/White/Grey Box Testing</a>
    <a href="https://www.testdevlab.com/blog/white-box-vs-black-box-vs-gray-box-testing" className="ulink" target="_blank" rel="noopener noreferrer">testdevlab.com</a>
  </div>
</section>

{/* ══════════════════════════════════════
     SECTION 4: BLACK BOX TECHNIQUES
══════════════════════════════════════ */}
<section id="blackbox-tech">
  <div className="section-header">
    <span className="section-header-num">SECTION 04 — ISTQB CTFL 4.2: BLACK-BOX TEST DESIGN TECHNIQUES</span>
    <h2>ブラックボックス テスト設計技法</h2>
    <div className="amber-rule"></div>
    <p>ISTQB CTFL v4.0 Section 4.2 で定義された、仕様・要件に基づくテストケース設計の核心技法。初学者が最初に習得すべき実践的スキルです。</p>
  </div>

  <div className="card-grid" style={{gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))"}}>

    {/* EP */}
    <div className="tech-card border-t-[var(--color-accent-cyan)]">
      <span className="tech-tag text-[var(--teal2)]">技法①  EQUIVALENCE PARTITIONING</span>
      <div className="tech-title">同値クラス分析（同値分割）</div>
      <div className="tech-desc">
        入力データを「有効クラス」と「無効クラス」のグループに分類し、
        各クラスから代表値を1つ選んでテストする技法。
        クラス内の任意の値は同じ挙動をすると仮定し、テスト数を最小化する。
      </div>
      <div className="tech-ex">年齢フィールド（有効:0〜120）→有効クラス代表「60」、無効クラス代表「-1」「121」</div>
      <div className="code-block mt-2">
        <div className="code-header"><div className="code-dots"><span></span><span></span><span></span></div><span className="code-lang">Python例</span></div>
        <pre>
          <span className="cm"># 年齢バリデーション関数のEP設計</span>{'\n'}
          <span className="cm"># 有効クラス: 0 ≤ age ≤ 120 → 代表値: 60</span>{'\n'}
          <span className="cm"># 無効クラス1: age &lt; 0     → 代表値: -1</span>{'\n'}
          <span className="cm"># 無効クラス2: age &gt; 120   → 代表値: 121</span>{'\n'}
          <span className="kw">def</span> <span className="fn">test_年齢_有効クラス</span>():{'\n'}
          {'    '}<span className="kw">assert</span> <span className="fn">validate_age</span>(<span className="num">60</span>) == <span className="cls">True</span>{'\n'}
          {'\n'}
          <span className="kw">def</span> <span className="fn">test_年齢_無効クラス_負の数</span>():{'\n'}
          {'    '}<span className="kw">assert</span> <span className="fn">validate_age</span>(<span className="num">-1</span>) == <span className="cls">False</span>{'\n'}
          {'\n'}
          <span className="kw">def</span> <span className="fn">test_年齢_無効クラス_121超</span>():{'\n'}
          {'    '}<span className="kw">assert</span> <span className="fn">validate_age</span>(<span className="num">121</span>) == <span className="cls">False</span>
        </pre>
      </div>
      <span className="badge badge-int">CTFL 4.2.1</span>
    </div>

    {/* BVA */}
    <div className="tech-card border-t-[var(--color-accent-orange)]">
      <span className="tech-tag text-[var(--color-accent-yellow)]">技法②  BOUNDARY VALUE ANALYSIS</span>
      <div className="tech-title">境界値分析（BVA）</div>
      <div className="tech-desc">
        バグが最も発生しやすい<strong>境界の前後の値</strong>を重点的にテストする技法。
        同値クラス分析と組み合わせて使用するのが定石。
        2値境界（最小・最大）と3値境界（最小-1・最小・最大・最大+1）の2種類がある。
      </div>
      <div className="tech-ex">年齢フィールド（0〜120）→ -1, 0, 1, 119, 120, 121 の6つの境界値をテスト</div>
      <div className="table-wrapper mt-2">
        <table>
          <thead><tr><th>入力値</th><th>クラス</th><th>期待結果</th></tr></thead>
          <tbody>
            <tr><td><strong>-1</strong></td><td>境界外（無効）</td><td className="r">エラー</td></tr>
            <tr><td><strong>0</strong></td><td>最小値（有効）</td><td className="g">OK</td></tr>
            <tr><td><strong>1</strong></td><td>最小値+1（有効）</td><td className="g">OK</td></tr>
            <tr><td><strong>119</strong></td><td>最大値-1（有効）</td><td className="g">OK</td></tr>
            <tr><td><strong>120</strong></td><td>最大値（有効）</td><td className="g">OK</td></tr>
            <tr><td><strong>121</strong></td><td>境界外（無効）</td><td className="r">エラー</td></tr>
          </tbody>
        </table>
      </div>
      <span className="badge badge-e2e">CTFL 4.2.2</span>
    </div>

    {/* DT */}
    <div className="tech-card border-t-[var(--color-accent-purple)]">
      <span className="tech-tag text-[var(--violet2)]">技法③  DECISION TABLE TESTING</span>
      <div className="tech-title">デシジョンテーブルテスト</div>
      <div className="tech-desc">
        複数の入力条件の<strong>全ての組み合わせ</strong>をマトリクス形式で表現し、
        それぞれのアクションを定義するテスト設計技法。
        3〜4つの条件を持つ複雑なビジネスロジックに特に有効。
      </div>
      <div className="tech-ex">「会員か？」×「¥5000以上か？」→ 4通りの組み合わせ全てをテスト</div>
      <div className="table-wrapper mt-2">
        <table>
          <thead><tr><th>ルール</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th></tr></thead>
          <tbody>
            <tr><td><strong>会員か？</strong></td><td>Y</td><td>Y</td><td>N</td><td>N</td></tr>
            <tr><td><strong>¥5000以上？</strong></td><td>Y</td><td>N</td><td>Y</td><td>N</td></tr>
            <tr><td><strong>→ 割引率</strong></td><td className="g">20%</td><td className="g">10%</td><td className="w">5%</td><td>0%</td></tr>
          </tbody>
        </table>
      </div>
      <span className="badge badge-func">CTFL 4.2.3</span>
    </div>

    {/* State Transition */}
    <div className="tech-card border-t-[var(--coral)]">
      <span className="tech-tag text-[var(--coral2)]">技法④  STATE TRANSITION TESTING</span>
      <div className="tech-title">状態遷移テスト</div>
      <div className="tech-desc">
        システムが取り得る<strong>「状態」</strong>と、状態を変化させる<strong>「イベント/トリガー」</strong>の組み合わせを体系的にテストする技法。
        注文ステータス・ログインセッション・有限状態機械を持つシステムに特に有効。
      </div>
      <div className="tech-ex">注文システム：[新規]→支払い→[承認待ち]→承認→[処理中]→発送→[配送中]→受取→[完了]</div>
      <div className="code-block mt-2">
        <div className="code-header"><div className="code-dots"><span></span><span></span><span></span></div><span className="code-lang">状態遷移テスト設計</span></div>
        <pre>
          <span className="hl-t">状態:</span> 新規 / 承認待ち / 処理中 / 配送中 / 完了 / キャンセル済{'\n'}
          <span className="hl-t">トリガー:</span> 支払い / 承認 / 発送 / 受取確認 / キャンセル{'\n'}
          {'\n'}
          <span className="cm"># テストケース1: 正常フロー（全状態を通過）</span>{'\n'}
          新規 → <span className="fn">支払い</span> → 承認待ち → <span className="fn">承認</span> → 処理中{'\n'}
          {'     '}→ <span className="fn">発送</span> → 配送中 → <span className="fn">受取確認</span> → 完了{'\n'}
          {'\n'}
          <span className="cm"># テストケース2: 処理中状態からのキャンセル（無効遷移）</span>{'\n'}
          処理中 → <span className="fn">キャンセル</span> → <span className="hl-r">エラー（不可能な遷移）</span>{'\n'}
          {'\n'}
          <span className="cm"># テストケース3: 承認待ちからのキャンセル（有効）</span>{'\n'}
          承認待ち → <span className="fn">キャンセル</span> → キャンセル済 ✓
        </pre>
      </div>
      <span className="badge b-coral">CTFL 4.2.4</span>
    </div>

    {/* Use Case */}
    <div className="tech-card border-t-[var(--color-accent-green)]">
      <span className="tech-tag text-[var(--color-accent-green)]">技法⑤  USE CASE TESTING</span>
      <div className="tech-title">ユースケーステスト</div>
      <div className="tech-desc">
        ユーザーとシステムの相互作用（ユースケース）を単位として、
        <strong>正常フロー（基本フロー）</strong>と<strong>代替フロー（例外フロー）</strong>を体系的にテストする技法。
        システムテスト・統合テストで特に効果的。
      </div>
      <div className="tech-ex">UC01「商品購入」→基本フロー(5ステップ)・代替フロー(在庫切れ/決済失敗/キャンセル)をテスト</div>
      <span className="badge b-sage">CTFL 4.2.5</span>
    </div>

    {/* Fuzz Testing */}
    <div className="tech-card border-t-[var(--color-accent-orange)]">
      <span className="tech-tag text-[var(--color-accent-yellow)]">技法⑥  FUZZ TESTING</span>
      <div className="tech-title">ファジングテスト</div>
      <div className="tech-desc">
        予測不可能な<strong>ランダムデータ・異常値・不正入力</strong>をシステムに大量注入し、
        クラッシュや脆弱性を意図的に引き起こす技法。
        セキュリティテストで攻撃ベクトルの発見に極めて有効。2025年はAI駆動ファジングが台頭中。
      </div>
      <div className="tech-ex">APIエンドポイントに1万種類のランダム入力を送信し、クラッシュ・メモリリーク・インジェクション脆弱性を発見</div>
      <span className="badge b-coral">セキュリティ特化</span>
    </div>

  </div>

  <p className="text-sm mt-3">参照:
    <a href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" className="ulink" target="_blank" rel="noopener noreferrer">ISTQB CTFL v4.0 Section 4.2</a>
    <a href="https://www.guru99.com/equivalence-partitioning-boundary-value-analysis.html" className="ulink" target="_blank" rel="noopener noreferrer">guru99.com — EP & BVA Guide</a>
    <a href="https://www.softwaretestinghelp.com/decision-table-testing-technique/" className="ulink" target="_blank" rel="noopener noreferrer">softwaretestinghelp.com — Decision Table Testing</a>
    <a href="https://www.lambdatest.com/blog/state-transition-testing/" className="ulink" target="_blank" rel="noopener noreferrer">lambdatest.com — State Transition Testing</a>
  </p>
</section>

{/* ══════════════════════════════════════
     SECTION 5: WHITE BOX TECHNIQUES
══════════════════════════════════════ */}
<section id="whitebox-tech">
  <div className="section-header">
    <span className="section-header-num">SECTION 05 — ISTQB CTFL 4.3: WHITE-BOX TEST DESIGN TECHNIQUES</span>
    <h2>ホワイトボックス テスト設計技法</h2>
    <div className="amber-rule"></div>
    <p>コードの内部構造を分析してテストケースを設計する技法。ユニットテストで開発者が使用し、カバレッジの測定指標として重要です。</p>
  </div>

  <div className="table-wrapper">
    <table>
      <thead>
        <tr><th>技法</th><th>測定対象</th><th>テスト条件</th><th>検出可能な欠陥</th><th>難易度</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>命令網羅</strong><br /><span style={{fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-text-muted)"}}>Statement Coverage</span></td>
          <td>全命令文の実行率</td>
          <td>全命令を最低1回実行</td>
          <td>実行されないデッドコード</td>
          <td className="g">最低レベル（C0）</td>
        </tr>
        <tr>
          <td><strong>分岐網羅</strong><br /><span style={{fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-text-muted)"}}>Branch Coverage</span></td>
          <td>if/else各分岐の通過率</td>
          <td>全分岐のTrue/Falseを実行</td>
          <td>分岐ロジックの欠陥</td>
          <td className="w">推奨（C1）</td>
        </tr>
        <tr>
          <td><strong>条件網羅</strong><br /><span style={{fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-text-muted)"}}>Condition Coverage</span></td>
          <td>各条件式のT/F網羅率</td>
          <td>各条件のTrue/Falseを全パターン実行</td>
          <td>複合条件式の論理欠陥</td>
          <td className="w">やや難しい（C2）</td>
        </tr>
        <tr>
          <td><strong>パス網羅</strong><br /><span style={{fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-text-muted)"}}>Path Coverage</span></td>
          <td>全実行パスの網羅率</td>
          <td>全ての独立パスを実行</td>
          <td>経路依存のタイミング・状態欠陥</td>
          <td className="r">非常に難しい（C3）</td>
        </tr>
        <tr>
          <td><strong>ミューテーション網羅</strong><br /><span style={{fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-text-muted)"}}>Mutation Coverage</span></td>
          <td>変異体の検出率</td>
          <td>コードの小変更をテストが検出できるか</td>
          <td>テスト自体の品質・アサートの妥当性</td>
          <td className="r">最高度（テスト品質の真の指標）</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="grid-2 mt-3">
    <div>
      <div className="code-block">
        <div className="code-header"><div className="code-dots"><span></span><span></span><span></span></div><span className="code-lang">Python — カバレッジ例示コード</span></div>
        <pre>
          <span className="kw">def</span> <span className="fn">classify_bmi</span>(weight: <span className="cls">float</span>, height: <span className="cls">float</span>) -&gt; <span className="cls">str</span>:{'\n'}
          {'    '}<span className="kw">if</span> height &lt;= <span className="num">0</span>:{'\n'}
          {'        '}<span className="kw">raise</span> <span className="cls">ValueError</span>(<span className="str">"身長は正の値必須"</span>){'\n'}
          {'    '}bmi = weight / (height ** <span className="num">2</span>){'\n'}
          {'    '}<span className="kw">if</span> bmi &lt; <span className="num">18.5</span>:{'\n'}
          {'        '}<span className="kw">return</span> <span className="str">"低体重"</span>{'\n'}
          {'    '}<span className="kw">elif</span> bmi &lt; <span className="num">25.0</span>:{'\n'}
          {'        '}<span className="kw">return</span> <span className="str">"普通体重"</span>{'\n'}
          {'    '}<span className="kw">elif</span> bmi &lt; <span className="num">30.0</span>:{'\n'}
          {'        '}<span className="kw">return</span> <span className="str">"過体重"</span>{'\n'}
          {'    '}<span className="kw">else</span>:{'\n'}
          {'        '}<span className="kw">return</span> <span className="str">"肥満"</span>{'\n'}
          {'\n'}
          <span className="cm"># ── 分岐網羅（C1）テストケース ──────────────</span>{'\n'}
          <span className="kw">def</span> <span className="fn">test_bmi_branch_coverage</span>():{'\n'}
          {'    '}<span className="cm"># 分岐1: height &lt;= 0 → True</span>{'\n'}
          {'    '}<span className="kw">with</span> pytest.raises(<span className="cls">ValueError</span>): <span className="fn">classify_bmi</span>(<span className="num">60</span>, <span className="num">0</span>){'\n'}
          {'    '}<span className="cm"># 分岐2〜5: bmiの各範囲 → False (4パターン)</span>{'\n'}
          {'    '}<span className="kw">assert</span> <span className="fn">classify_bmi</span>(<span className="num">45</span>, <span className="num">1.7</span>) == <span className="str">"低体重"</span>    <span className="cm"># bmi≈15.6</span>{'\n'}
          {'    '}<span className="kw">assert</span> <span className="fn">classify_bmi</span>(<span className="num">60</span>, <span className="num">1.7</span>) == <span className="str">"普通体重"</span>  <span className="cm"># bmi≈20.8</span>{'\n'}
          {'    '}<span className="kw">assert</span> <span className="fn">classify_bmi</span>(<span className="num">75</span>, <span className="num">1.7</span>) == <span className="str">"過体重"</span>    <span className="cm"># bmi≈26.0</span>{'\n'}
          {'    '}<span className="kw">assert</span> <span className="fn">classify_bmi</span>(<span className="num">90</span>, <span className="num">1.7</span>) == <span className="str">"肥満"</span>      <span className="cm"># bmi≈31.1</span>{'\n'}
          <span className="cm"># → 分岐網羅率 100% 達成！</span>
        </pre>
      </div>
    </div>
    <div>
      <h4 style={{fontSize: ".9rem", fontWeight: "700", color: "var(--coral2)", marginBottom: ".65rem"}}>コードカバレッジ計測ツール（2025年）</h4>
      <div className="tool-grid" style={{gridTemplateColumns: "1fr"}}>
        <div className="tool-card">
          <div className="tool-name">pytest-cov (Python)</div>
          <div className="tool-desc">pytest統合のカバレッジ計測ツール。HTMLレポート・XML出力・CI閾値設定が簡単。</div>
          <span className="badge badge-int">Python標準</span>
        </div>
        <div className="tool-card">
          <div className="tool-name">Istanbul / NYC (JavaScript)</div>
          <div className="tool-desc">Jest/Vitestに内蔵。命令・分岐・関数・行カバレッジを詳細レポート。</div>
          <span className="badge badge-e2e">JS/TS標準</span>
        </div>
        <div className="tool-card">
          <div className="tool-name">JaCoCo (Java)</div>
          <div className="tool-desc">Java最強のカバレッジツール。Maven/Gradleと統合。SonarQubeと連携可能。</div>
          <span className="badge b-coral">Java標準</span>
        </div>
        <div className="tool-card">
          <div className="tool-name">Stryker (Mutation Testing)</div>
          <div className="tool-desc">JS/TS向けミューテーションテストツール。テスト品質の真の指標を測定する。</div>
          <span className="badge badge-func">テスト品質測定</span>
        </div>
      </div>
      <div className="callout callout-warn mt-2" style={{fontSize: "12.5px"}}>
        <strong>カバレッジの目標値（業界標準 2025年）：</strong><br />
        命令/行カバレッジ ≥ 80% が一般的な目標。100%は追わない。
        重要なビジネスロジックは分岐網羅 90%+ を義務化。
        <strong>数値ではなく「重要なロジックが網羅されているか」を優先すること。</strong>
      </div>
    </div>
  </div>
  <p className="text-sm mt-2">参照:
    <a href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" className="ulink" target="_blank" rel="noopener noreferrer">ISTQB CTFL v4.0 Section 4.3</a>
    <a href="https://www.guru99.com/code-coverage.html" className="ulink" target="_blank" rel="noopener noreferrer">guru99.com — Code Coverage Complete Guide</a>
    <a href="https://martinfowler.com/bliki/TestCoverage.html" className="ulink" target="_blank" rel="noopener noreferrer">martinfowler.com — Test Coverage</a>
  </p>
</section>

{/* ══════════════════════════════════════
     SECTION 6: EXPERIENCE-BASED
══════════════════════════════════════ */}
<section id="experience">
  <div className="section-header">
    <span className="section-header-num">SECTION 06 — ISTQB CTFL 4.4: EXPERIENCE-BASED TECHNIQUES</span>
    <h2>経験ベーステスト設計技法</h2>
    <div className="amber-rule"></div>
    <p>仕様書や構造ではなく、テスト担当者の<strong>スキル・直感・過去経験</strong>に基づいてテストを設計する技法。形式的技法を補完するために使用。</p>
  </div>

  <div className="card-grid">
    <div className="card" style={{borderLeft: "3px solid var(--color-accent-orange)"}}>
      <span className="card-icon">🔍</span>
      <h3>エラー推測（Error Guessing）</h3>
      <p>過去の欠陥経験・問題の発生しやすいパターンの知識に基づいて、発生しそうな欠陥を「推測」してテストケースを設計する技法。</p>
      <div className="callout callout-warn mt-2" style={{fontSize: "12px"}}>
        典型的な推測ポイント：<br />
        ・空文字列/null/0入力時<br />
        ・特殊文字（&lt; &gt; ' " ; \）入力<br />
        ・データ型の境界（INT_MAX等）<br />
        ・ファイルパスのスラッシュ・パス区切り文字
      </div>
    </div>
    <div className="card" style={{borderLeft: "3px solid var(--color-accent-cyan)"}}>
      <span className="card-icon">🗺️</span>
      <h3>探索的テスト（Exploratory Testing）</h3>
      <p>テスト設計と実行を<strong>同時並行で行う</strong>手法。事前に詳細なテストケースを書かず、学習しながら探索的にテストする。James Bach・Michael Boltonが提唱。</p>
      <div className="callout callout-info mt-2" style={{fontSize: "12px"}}>
        <strong>タイムボックス型セッション（SBTM）</strong>：90〜120分の集中セッションで、テストチャーター（テスト目標）に沿って自由に探索する構造化アプローチ。
      </div>
    </div>
    <div className="card" style={{borderLeft: "3px solid var(--color-accent-purple)"}}>
      <span className="card-icon">📋</span>
      <h3>チェックリストベーステスト</h3>
      <p>テスト担当者の経験から作成された<strong>チェックリスト</strong>に基づいてテスト項目を網羅する技法。標準的な確認事項を漏れなく実施するために有効。</p>
      <div className="callout callout-info mt-2" style={{fontSize: "12px"}}>
        チェックリスト例：<br />
        ✦ 全フォームの入力バリデーション<br />
        ✦ 全ボタンのクリックイベント<br />
        ✦ レスポンシブデザイン（3ブレイクポイント）<br />
        ✦ エラーメッセージの表示確認
      </div>
    </div>
  </div>

  <div className="callout c-sage mt-3">
    <strong>経験ベース技法のベストプラクティス（2025年）：</strong>
    機械的なテスト設計技法（EP・BVA等）では発見しにくい<strong>「想定外の動作」「UXの違和感」「ビジネスシナリオ特有の問題」</strong>を発見するのに最も効果的。
    探索的テストと自動化テストの組み合わせが2025年の最もROIの高いアプローチとして業界標準になっています。
    <br />
    <a href="https://www.satisfice.com/exploratory-testing" className="ulink" target="_blank" rel="noopener noreferrer">satisfice.com — Exploratory Testing (James Bach)</a>
    <a href="https://www.testingexcellence.com/exploratory-testing-charter/" className="ulink" target="_blank" rel="noopener noreferrer">testingexcellence.com — Testing Charter</a>
  </div>
</section>

{/* ══════════════════════════════════════
     SECTION 7: TEST LEVELS
══════════════════════════════════════ */}
<section id="levels">
  <div className="section-header">
    <span className="section-header-num">SECTION 07 — ISTQB CTFL 2.2: TEST LEVELS</span>
    <h2>4つのテストレベル</h2>
    <div className="amber-rule"></div>
    <p>ISTQB は開発成果物の種類と粒度に応じてテストを4つのレベルに分類。各レベルは異なる目的・対象・担当者・環境を持ちます。</p>
  </div>

  <div className="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>レベル</th><th>ISTQBの別名</th><th>テスト対象</th>
          <th>主な担当者</th><th>技法</th><th>環境</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong className="text-[var(--teal2)]">L1 ユニットテスト</strong><br /><span className="badge badge-int" style={{marginTop: "3px"}}>Component Testing</span></td>
          <td>コンポーネントテスト</td>
          <td>関数・クラス・メソッド</td>
          <td>開発者</td>
          <td>WB技法・EP・BVA</td>
          <td className="g">開発環境（高速）</td>
        </tr>
        <tr>
          <td><strong className="text-[var(--violet2)]">L2 統合テスト</strong><br /><span className="badge badge-func" style={{marginTop: "3px"}}>Integration Testing</span></td>
          <td>コンポーネント統合テスト</td>
          <td>モジュール間インターフェース</td>
          <td>開発者・QA</td>
          <td>EP・ユースケース</td>
          <td className="w">統合テスト環境</td>
        </tr>
        <tr>
          <td><strong className="text-[var(--color-accent-yellow)]">L3 システムテスト</strong><br /><span className="badge badge-e2e" style={{marginTop: "3px"}}>System Testing</span></td>
          <td>システムテスト</td>
          <td>システム全体の機能/非機能</td>
          <td>独立QAチーム</td>
          <td>BB技法・状態遷移・デシジョン</td>
          <td className="w">ステージング環境</td>
        </tr>
        <tr>
          <td><strong className="text-[var(--coral2)]">L4 受入テスト</strong><br /><span className="badge b-coral" style={{marginTop: "3px"}}>Acceptance Testing</span></td>
          <td>受入テスト</td>
          <td>ユーザーニーズ・ビジネス要件</td>
          <td>ユーザー・顧客・PO</td>
          <td>ユースケース・探索的・BDD</td>
          <td className="r">本番同等環境</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Test Level Deep Dive */}
  <div className="grid-2 mt-3">
    <div>
      <h4 style={{fontSize: ".9rem", fontWeight: "700", marginBottom: ".65rem", color: "var(--text)"}}>テストレベル別の重点確認事項</h4>
      <div className="step-list">
        <div className="step-item">
          <div className="step-num-circle" style={{background: "var(--teal3)", borderColor: "rgba(58,184,168,.4)", color: "var(--teal2)"}}>L1</div>
          <div className="step-content">
            <h4>ユニットテスト（コンポーネントテスト）</h4>
            <p>関数の戻り値・例外処理・境界値・エラーハンドリング。
            FIRST原則（Fast/Isolated/Repeatable/Self-validating/Timely）を満たすことが必須。</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-num-circle" style={{background: "var(--violet3)", borderColor: "rgba(139,110,221,.4)", color: "var(--violet2)"}}>L2</div>
          <div className="step-content">
            <h4>統合テスト（インテグレーションテスト）</h4>
            <p>API/DB間のデータフロー・インターフェースの互換性・認証/認可の連携・
            外部サービス（メール/SMS/決済）との統合点。</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-num-circle" style={{background: "var(--amber4)", borderColor: "var(--border2)", color: "var(--color-accent-yellow)"}}>L3</div>
          <div className="step-content">
            <h4>システムテスト</h4>
            <p>機能要件の完全性・非機能要件（パフォーマンス/セキュリティ/アクセシビリティ）・
            ビジネスフロー全体・クロスブラウザ/デバイス動作。</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-num-circle" style={{background: "var(--coral3)", borderColor: "rgba(224,92,92,.4)", color: "var(--coral2)"}}>L4</div>
          <div className="step-content">
            <h4>受入テスト（UAT/OAT/Alpha/Beta）</h4>
            <p>ユーザーの業務フローとの適合・受入基準の達成確認・
            本番運用可能性・Go/No-Go の正式決定。</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="code-block mt-1">
        <div className="code-header"><div className="code-dots"><span></span><span></span><span></span></div><span className="code-lang">テストレベルの実例（ECサイト）</span></div>
        <pre>
          <span className="hl-t">// L1 ユニットテスト</span>{'\n'}
          <span className="cm">// 「割引計算関数」単体を検証</span>{'\n'}
          <span className="kw">function</span> <span className="fn">test_会員割引10%の計算が正しい</span>() {'{'}{'\n'}
          {'    '}<span className="kw">const</span> result = <span className="fn">applyDiscount</span>(<span className="num">1000</span>, <span className="str">"member"</span>);{'\n'}
          {'    '}<span className="fn">expect</span>(result).<span className="fn">toBe</span>(<span className="num">900</span>);{'\n'}
          {'}'}{'\n'}
          {'\n'}
          <span className="hl-v">// L2 統合テスト</span>{'\n'}
          <span className="cm">// 「注文API」がDBに正しく保存するか検証</span>{'\n'}
          <span className="kw">async function</span> <span className="fn">test_注文作成API_DBに正常保存</span>() {'{'}{'\n'}
          {'    '}<span className="kw">const</span> res = <span className="kw">await</span> <span className="fn">POST</span>(<span className="str">'/api/orders'</span>, cartData);{'\n'}
          {'    '}<span className="fn">expect</span>(res.status).<span className="fn">toBe</span>(<span className="num">201</span>);{'\n'}
          {'    '}<span className="kw">const</span> order = <span className="kw">await</span> db.orders.<span className="fn">findById</span>(res.body.id);{'\n'}
          {'    '}<span className="fn">expect</span>(order.status).<span className="fn">toBe</span>(<span className="str">'pending'</span>);{'\n'}
          {'}'}{'\n'}
          {'\n'}
          <span className="hl-a">// L3 システムテスト（Playwright）</span>{'\n'}
          <span className="cm">// 「購入フロー全体」をE2Eで検証</span>{'\n'}
          <span className="kw">async function</span> <span className="fn">test_ユーザーが商品を購入できる</span>() {'{'}{'\n'}
          {'    '}<span className="kw">await</span> page.<span className="fn">goto</span>(<span className="str">'/products/item-001'</span>);{'\n'}
          {'    '}<span className="kw">await</span> page.<span className="fn">click</span>(<span className="str">'[data-testid=add-to-cart]'</span>);{'\n'}
          {'    '}<span className="kw">await</span> page.<span className="fn">goto</span>(<span className="str">'/checkout'</span>);{'\n'}
          {'    '}<span className="kw">await</span> page.<span className="fn">fill</span>(<span className="str">'[data-testid=card]'</span>, <span className="str">'4242...'</span>);{'\n'}
          {'    '}<span className="kw">await</span> page.<span className="fn">click</span>(<span className="str">'[data-testid=pay-btn]'</span>);{'\n'}
          {'    '}<span className="kw">await</span> <span className="fn">expect</span>(page.<span className="fn">locator</span>(<span className="str">'h1'</span>)){'\n'}
          {'        '}.<span className="fn">toContainText</span>(<span className="str">'注文完了'</span>);{'\n'}
          {'}'}{'\n'}
          {'\n'}
          <span className="hl-g">// L4 受入テスト（UAT）</span>{'\n'}
          <span className="cm">// 実際の購買担当者が業務フローを検証</span>{'\n'}
          <span className="cm">// → Given-When-Then Gherkinシナリオで定義</span>{'\n'}
          <span className="cm">// → Go/No-Goの承認を正式に記録・サインオフ</span>
        </pre>
      </div>
    </div>
  </div>
  <p className="text-sm mt-2">参照:
    <a href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" className="ulink" target="_blank" rel="noopener noreferrer">ISTQB CTFL v4.0 Section 2.2</a>
    <a href="https://www.browserstack.com/guide/test-levels-in-software-testing" className="ulink" target="_blank" rel="noopener noreferrer">browserstack.com — Test Levels Guide</a>
  </p>
</section>

{/* ══════════════════════════════════════
     SECTION 8: TEST TYPES
══════════════════════════════════════ */}
<section id="types">
  <div className="section-header">
    <span className="section-header-num">SECTION 08 — ISTQB CTFL 2.3: TEST TYPES</span>
    <h2>テストタイプ — 何を目的としてテストするか</h2>
    <div className="amber-rule"></div>
    <p>テストレベル（どの段階か）とは独立して、テストの目的（何を確認するか）でテストタイプが分類されます。</p>
  </div>

  <div className="card-grid">
    <div className="card" style={{borderTop: "3px solid var(--color-accent-cyan)"}}>
      <span className="card-icon">⚙️</span>
      <h3>機能テスト（Functional Testing）</h3>
      <p>システムが仕様書・要件通りに<strong>機能として正しく動作するか</strong>を検証。
      主にブラックボックス技法を使用。「何をするか（WHAT）」を確認する。</p>
      <div style={{display: "flex", flexWrap: "wrap", gap: "5px", marginTop: ".65rem"}}>
        <span className="badge badge-int">CRUD操作</span>
        <span className="badge badge-int">業務ルール</span>
        <span className="badge badge-int">API動作</span>
        <span className="badge badge-int">エラー処理</span>
      </div>
    </div>
    <div className="card" style={{borderTop: "3px solid var(--color-accent-orange)"}}>
      <span className="card-icon">📊</span>
      <h3>非機能テスト（Non-functional Testing）</h3>
      <p>システムが<strong>「どのように動作するか（HOW）」</strong>を検証。
      機能要件では定義されない品質特性を測定・評価する。</p>
      <div style={{display: "flex", flexWrap: "wrap", gap: "5px", marginTop: ".65rem"}}>
        <span className="badge badge-e2e">パフォーマンス</span>
        <span className="badge badge-e2e">セキュリティ</span>
        <span className="badge badge-e2e">アクセシビリティ</span>
        <span className="badge badge-e2e">互換性</span>
        <span className="badge badge-e2e">信頼性</span>
        <span className="badge badge-e2e">保守性</span>
      </div>
    </div>
    <div className="card" style={{borderTop: "3px solid var(--coral)"}}>
      <span className="card-icon">🏗️</span>
      <h3>構造テスト（Structural Testing）</h3>
      <p>ソフトウェアの<strong>内部構造・実装</strong>に基づいてテストを設計・評価する。
      コードカバレッジの達成度を測定する。ホワイトボックス技法と強く結びついている。</p>
      <div style={{display: "flex", flexWrap: "wrap", gap: "5px", marginTop: ".65rem"}}>
        <span className="badge b-coral">命令網羅</span>
        <span className="badge b-coral">分岐網羅</span>
        <span className="badge b-coral">パス網羅</span>
      </div>
    </div>
    <div className="card" style={{borderTop: "3px solid var(--color-accent-purple)"}}>
      <span className="card-icon">🔄</span>
      <h3>変更関連テスト（Change-related Testing）</h3>
      <p>コード変更・バグ修正・新機能追加後に、<strong>既存機能が壊れていないか</strong>を確認する。
      CI/CDパイプラインに統合して自動化することが必須。</p>
      <div style={{display: "flex", flexWrap: "wrap", gap: "5px", marginTop: ".65rem"}}>
        <span className="badge badge-func">確認テスト（再テスト）</span>
        <span className="badge badge-func">回帰テスト</span>
        <span className="badge badge-func">スモークテスト</span>
      </div>
    </div>
  </div>

  {/* Non-functional subtypes */}
  <h3 className="mt-4" style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "400", marginBottom: "1rem", color: "var(--text)"}}>非機能テストの主要サブカテゴリ</h3>
  <div className="table-wrapper">
    <table>
      <thead><tr><th>テスト種別</th><th>確認する品質特性</th><th>主要ツール（2025年）</th><th>基準例</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>パフォーマンステスト</strong></td>
          <td>応答時間・スループット・エラー率・レイテンシ</td>
          <td>k6・Gatling・JMeter・LoadRunner</td>
          <td className="g">P95応答時間 ≤ 2秒</td>
        </tr>
        <tr>
          <td><strong>セキュリティテスト</strong></td>
          <td>OWASP Top 10準拠・脆弱性・認証/認可</td>
          <td>OWASP ZAP・Burp Suite・Checkmarx</td>
          <td className="g">Critical脆弱性 = 0件</td>
        </tr>
        <tr>
          <td><strong>アクセシビリティテスト</strong></td>
          <td>WCAG 2.1/2.2準拠・ADA対応</td>
          <td>axe DevTools・Lighthouse・Pa11y</td>
          <td className="g">WCAG AA準拠 100%</td>
        </tr>
        <tr>
          <td><strong>互換性テスト</strong></td>
          <td>ブラウザ・OS・デバイス・解像度</td>
          <td>BrowserStack・Sauce Labs・Playwright</td>
          <td className="w">主要3ブラウザ × 2解像度</td>
        </tr>
        <tr>
          <td><strong>信頼性テスト</strong></td>
          <td>稼働率・MTBF・MTTR・障害回復</td>
          <td>Chaos Monkey・Gremlin・k6</td>
          <td className="g">可用性 99.9%（月間8.7時間以内）</td>
        </tr>
        <tr>
          <td><strong>国際化テスト（i18n）</strong></td>
          <td>多言語対応・文字エンコーディング・タイムゾーン</td>
          <td>i18n-ally・Lokalise</td>
          <td>全対象ロケールでUI崩れなし</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="text-sm mt-1">参照:
    <a href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" className="ulink" target="_blank" rel="noopener noreferrer">ISTQB CTFL v4.0 Section 2.3</a>
    <a href="https://www.softwaretestinghelp.com/types-of-software-testing/" className="ulink" target="_blank" rel="noopener noreferrer">softwaretestinghelp.com — 100+ Types of Software Testing</a>
  </p>
</section>

{/* ══════════════════════════════════════
     SECTION 9: SDLC INTEGRATION
══════════════════════════════════════ */}
<section id="sdlc">
  <div className="section-header">
    <span className="section-header-num">SECTION 09 — ISTQB CTFL 2.1: TESTING IN SDLC</span>
    <h2>SDLC（ソフトウェア開発ライフサイクル）とテストの統合</h2>
    <div className="amber-rule"></div>
    <p>
      ISTQB CTFL v4.0 の大原則：<strong>「テストはすべての開発モデルに統合できる」</strong>。
      どのSDLCモデルを採用していても、早期テストの原則（シフトレフト）は変わらない。
    </p>
  </div>

  <div className="sdlc-grid">
    <div className="sdlc-card">
      <div className="sdlc-header" style={{background: "var(--teal3)"}}>
        <div className="sdlc-name text-[var(--teal2)]">🔃 ウォーターフォール</div>
        <span className="badge badge-int">Sequential</span>
      </div>
      <div className="sdlc-body">
        フェーズが順番に進行する古典的モデル。テストは主に開発完了後に実施。
        ただし要件・設計フェーズでの静的テスト（レビュー）は早期から実施する。
        <div className="sdlc-tags">
          <span className="badge b-dim">テスト = 後工程</span>
          <span className="badge b-dim">長いリリースサイクル</span>
          <span className="badge b-coral">リスク：変更コスト高</span>
        </div>
      </div>
    </div>
    <div className="sdlc-card">
      <div className="sdlc-header" style={{background: "rgba(232,163,74,.1)"}}>
        <div className="sdlc-name text-[var(--color-accent-yellow)]">📐 Vモデル</div>
        <span className="badge badge-e2e">V-Model</span>
      </div>
      <div className="sdlc-body">
        開発フェーズとテストフェーズを対応させた構造化モデル。
        要件定義に受入テスト、設計にシステムテストを対応付けることで早期テスト計画を実現。
        <div className="sdlc-tags">
          <span className="badge badge-e2e">開発↔テスト対応</span>
          <span className="badge badge-e2e">早期テスト計画</span>
          <span className="badge b-sage">欠陥早期発見</span>
        </div>
      </div>
    </div>
    <div className="sdlc-card">
      <div className="sdlc-header" style={{background: "var(--violet3)"}}>
        <div className="sdlc-name text-[var(--violet2)]">🔁 アジャイル（Scrum/Kanban）</div>
        <span className="badge badge-func">Iterative</span>
      </div>
      <div className="sdlc-body">
        2週間スプリントで動くソフトウェアを継続的にデリバリー。
        テストはスプリント内に組み込まれ、QAエンジニアが開発チームと一体化。
        DoD（完了の定義）に受入基準が含まれる。
        <div className="sdlc-tags">
          <span className="badge badge-func">スプリント内テスト</span>
          <span className="badge badge-func">TDD/BDD活用</span>
          <span className="badge b-sage">継続的フィードバック</span>
        </div>
      </div>
    </div>
    <div className="sdlc-card">
      <div className="sdlc-header" style={{background: "var(--sage3)"}}>
        <div className="sdlc-name text-[var(--color-accent-green)]">⚡ DevOps / CI/CD</div>
        <span className="badge b-sage">Continuous</span>
      </div>
      <div className="sdlc-body">
        全テストをCI/CDパイプラインに統合し、毎回のコードプッシュで自動実行。
        「継続的テスト（Continuous Testing）」が品質の担保手段となる。
        <div className="sdlc-tags">
          <span className="badge b-sage">全自動テスト</span>
          <span className="badge b-sage">毎コミットで実行</span>
          <span className="badge badge-int">最速フィードバック</span>
        </div>
      </div>
    </div>
    <div className="sdlc-card">
      <div className="sdlc-header" style={{background: "var(--coral3)"}}>
        <div className="sdlc-name text-[var(--coral2)]">🌀 スパイラルモデル</div>
        <span className="badge b-coral">Risk-driven</span>
      </div>
      <div className="sdlc-body">
        リスク評価を中心に繰り返し（スパイラル）開発するモデル。
        各スパイラルにリスク分析・テスト計画・評価が組み込まれる。
        大規模・複雑なシステムに適合。
        <div className="sdlc-tags">
          <span className="badge b-coral">リスクベース</span>
          <span className="badge b-coral">繰り返し改善</span>
          <span className="badge b-dim">大規模向け</span>
        </div>
      </div>
    </div>
    <div className="sdlc-card">
      <div className="sdlc-header" style={{background: "rgba(139,110,221,.1)"}}>
        <div className="sdlc-name text-[var(--violet2)]">🎯 RAD（Rapid Application Development）</div>
        <span className="badge badge-func">Prototype-based</span>
      </div>
      <div className="sdlc-body">
        プロトタイプを素早く作成・評価するモデル。
        ユーザーフィードバックを早期に取り込みながら開発を進める。
        テストはプロトタイプの評価段階から開始。
        <div className="sdlc-tags">
          <span className="badge badge-func">プロトタイプ評価</span>
          <span className="badge badge-func">ユーザー参加型</span>
          <span className="badge b-dim">探索的テスト活用</span>
        </div>
      </div>
    </div>
  </div>

  <div className="callout callout-warn mt-3">
    <strong>ISTQB 共通原則：</strong>
    開発モデルに関係なく、以下の原則は全てに適用されます。<br />
    ① 全開発活動に対応するテスト活動がある　② テストの計画・設計は対応する開発活動が完了する前から開始できる　
    ③ テスターは開発成果物のレビューに関与することで欠陥を早期発見できる　④ 各テストレベルにはそのレベル固有の目標がある
    <br />
    <a href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" className="ulink" target="_blank" rel="noopener noreferrer">ISTQB CTFL v4.0 Section 2.1</a>
  </div>
</section>

{/* ══════════════════════════════════════
     SECTION 10: V-MODEL
══════════════════════════════════════ */}
<section id="vmodel">
  <div className="section-header">
    <span className="section-header-num">SECTION 10 — THE V-MODEL IN DETAIL</span>
    <h2>Vモデル — 開発とテストの対応図</h2>
    <div className="amber-rule"></div>
    <p>Vモデルは開発の各フェーズとテストの各レベルを「V字型」に対応付けたモデルです。ISTQB がテストレベルを定義する上で最も参照されるフレームワークです。</p>
  </div>

  <div className="vmodel">
    {/* Row 1: Requirements ↔ Acceptance Test */}
    <div className="vrow r1">
      <div className="vcell vcell-left">
        📋 要件定義・ビジネス要件
        <div style={{fontSize: "11px", opacity: ".7", marginTop: "3px"}}>ユーザーストーリー / ユースケース</div>
      </div>
      <div className="vcell-mid">⟵ 対応 ⟶</div>
      <div className="vcell vcell-right">
        ✅ 受入テスト（L4）
        <div style={{fontSize: "11px", opacity: ".7", marginTop: "3px"}}>UAT / OAT / Alpha / Beta</div>
      </div>
    </div>
    {/* Row 2: System Design ↔ System Test */}
    <div className="vrow r2">
      <div className="vcell vcell-left">
        🏛️ システム設計・機能設計
        <div style={{fontSize: "11px", opacity: ".7", marginTop: "3px"}}>機能仕様書 / アーキテクチャ設計</div>
      </div>
      <div className="vcell-mid">⟵ 対応 ⟶</div>
      <div className="vcell vcell-right">
        🌐 システムテスト（L3）
        <div style={{fontSize: "11px", opacity: ".7", marginTop: "3px"}}>機能/非機能/E2Eテスト</div>
      </div>
    </div>
    {/* Row 3: Technical Design ↔ Integration Test */}
    <div className="vrow r3">
      <div className="vcell vcell-left">
        🔧 技術設計・詳細設計
        <div style={{fontSize: "11px", opacity: ".7", marginTop: "3px"}}>API設計 / DB設計 / コンポーネント設計</div>
      </div>
      <div className="vcell-mid">⟵ 対応 ⟶</div>
      <div className="vcell vcell-right">
        🔗 統合テスト（L2）
        <div style={{fontSize: "11px", opacity: ".7", marginTop: "3px"}}>API/DB/サービス間の統合検証</div>
      </div>
    </div>
    {/* Row 4: Component Design ↔ Unit Test */}
    <div className="vrow r4">
      <div className="vcell vcell-left">
        🧩 コンポーネント設計
        <div style={{fontSize: "11px", opacity: ".7", marginTop: "3px"}}>クラス設計 / インターフェース定義</div>
      </div>
      <div className="vcell-mid">⟵ 対応 ⟶</div>
      <div className="vcell vcell-right">
        🔬 ユニットテスト（L1）
        <div style={{fontSize: "11px", opacity: ".7", marginTop: "3px"}}>関数/クラス/メソッドの単体検証</div>
      </div>
    </div>
    {/* Row 5: Implementation (bottom of V) */}
    <div className="vrow r5">
      <div className="vcell" style={{background: "rgba(232,163,74,.18)", border: "1px solid var(--border3)", color: "var(--color-accent-yellow)", textAlign: "center", gridColumn: "1/-1", fontWeight: "700"}}>
        💻 実装（コーディング）— V字の底辺 — テスト実行フェーズへ移行
      </div>
    </div>
  </div>

  <div className="callout callout-info mt-2" style={{fontSize: "13px"}}>
    <strong>Vモデルの重要な教訓：</strong>
    テストケースの<strong>設計は、対応する開発フェーズと並行して実施できる</strong>。
    例えば「受入テストのシナリオ」は、実装が始まる前の要件定義フェーズから作成を開始することで、
    要件の曖昧さを早期に排除し、シフトレフトを実現できる。
  </div>
</section>

{/* ══════════════════════════════════════
     SECTION 11: SHIFT LEFT / RIGHT
══════════════════════════════════════ */}
<section id="shift">
  <div className="section-header">
    <span className="section-header-num">SECTION 11 — SHIFT-LEFT & SHIFT-RIGHT TESTING</span>
    <h2>シフトレフト × シフトライト — 2025年の業界標準</h2>
    <div className="amber-rule"></div>
    <p>
      2025年の業界標準は、テストをできるだけ早く始める「シフトレフト」と、本番環境での継続的監視を行う「シフトライト」の<strong>両方向の融合</strong>です。
    </p>
  </div>

  {/* Shift Bar */}
  <div className="shift-bar">
    <div className="shift-seg shift-left">
      <span className="shift-phase">← SHIFT LEFT</span>
      <div className="shift-title text-[var(--teal2)]">要件定義</div>
      <div style={{fontSize: "11px", color: "var(--color-text-muted)"}}>受入基準定義<br />スリーアミーゴス</div>
    </div>
    <div className="shift-seg shift-left">
      <span className="shift-phase">← SHIFT LEFT</span>
      <div className="shift-title text-[var(--teal2)]">設計</div>
      <div style={{fontSize: "11px", color: "var(--color-text-muted)"}}>静的レビュー<br />SAST設定</div>
    </div>
    <div className="shift-seg">
      <span className="shift-phase">DEVELOPMENT</span>
      <div className="shift-title">開発</div>
      <div style={{fontSize: "11px", color: "var(--color-text-muted)"}}>TDD/BDD<br />ユニットテスト</div>
    </div>
    <div className="shift-seg">
      <span className="shift-phase">CI/CD</span>
      <div className="shift-title text-[var(--color-accent-yellow)]">ビルド/テスト</div>
      <div style={{fontSize: "11px", color: "var(--color-text-muted)"}}>自動化テスト<br />全レベル実行</div>
    </div>
    <div className="shift-seg">
      <span className="shift-phase">STAGING</span>
      <div className="shift-title text-[var(--color-accent-yellow)]">ステージング</div>
      <div style={{fontSize: "11px", color: "var(--color-text-muted)"}}>パフォーマンス<br />セキュリティ</div>
    </div>
    <div className="shift-seg shift-right">
      <span className="shift-phase">SHIFT RIGHT →</span>
      <div className="shift-title text-[var(--violet2)]">本番デプロイ</div>
      <div style={{fontSize: "11px", color: "var(--color-text-muted)"}}>A/Bテスト<br />フィーチャーフラグ</div>
    </div>
    <div className="shift-seg shift-right">
      <span className="shift-phase">SHIFT RIGHT →</span>
      <div className="shift-title text-[var(--violet2)]">本番監視</div>
      <div style={{fontSize: "11px", color: "var(--color-text-muted)"}}>オブザーバビリティ<br />カオスエンジニアリング</div>
    </div>
  </div>

  <div className="grid-2 mt-3">
    <div>
      <div className="callout callout-info">
        <strong>シフトレフトの実践（ISTQB: Shift-Left Approach）：</strong><br />
        ✦ 要件定義段階からBDDシナリオを作成（スリーアミーゴス）<br />
        ✦ TDD — テストを先に書いてから実装する<br />
        ✦ プルリクエストにコードレビュー + 自動テストを必須化<br />
        ✦ SAST（静的解析）をCIに統合してコミット時に即検出<br />
        ✦ 設計ドキュメントの早期レビューで要件の齟齬を解消
      </div>
      <p className="text-sm mt-1">
        <a href="https://blog.qasource.com/shift-left-testing-a-beginners-guide-to-advancing-automation-with-generative-ai" className="ulink" target="_blank" rel="noopener noreferrer">blog.qasource.com — Shift-Left Testing 2025</a>
      </p>
    </div>
    <div>
      <div className="callout callout-info">
        <strong>シフトライトの実践：</strong><br />
        ✦ フィーチャーフラグで段階的ロールアウト<br />
        ✦ A/Bテストで実際のユーザー反応を測定<br />
        ✦ 本番ログ・APM（Datadog/New Relic）で継続監視<br />
        ✦ カオスエンジニアリング（Chaos Monkey）で耐障害性を検証<br />
        ✦ AIによる異常検知とアラート自動化
      </div>
      <p className="text-sm mt-1">
        <a href="https://trendig.com/en/blog/software-testing-trends-2025/" className="ulink" target="_blank" rel="noopener noreferrer">trendig.com — Software Testing Trends 2025</a>
        <a href="https://www.getxray.app/blog/top-2025-software-testing-trends" className="ulink" target="_blank" rel="noopener noreferrer">getxray.app — Top Testing Trends 2025</a>
      </p>
    </div>
  </div>
</section>

{/* ══════════════════════════════════════
     SECTION 12: AI × TESTING
══════════════════════════════════════ */}
<section id="ai">
  <div className="section-header">
    <span className="section-header-num">SECTION 12 — AI & GENERATIVE AI IN TESTING (2025)</span>
    <h2>AI × テスト — 2025年の革命的変化</h2>
    <div className="amber-rule"></div>
    <p>
      ISTQBは2025年に<strong>CT-GenAI</strong>（生成AIテスト資格）を新設。90%の組織がAI/GenAIを品質エンジニアリングに活用中（World Quality Report 2025）。テストはAIで根本的に変わっています。
    </p>
  </div>

  <div className="card-grid">
    <div className="card" style={{borderLeft: "3px solid var(--color-accent-orange)"}}>
      <span className="card-icon">📝</span>
      <h3>テストケース自動生成</h3>
      <p>ユーザーストーリー・要件定義書・APIスキーマからGitHub Copilot・ChatGPT・Claude等のLLMがテストケースを自動生成。<strong>作成時間を60〜70%削減</strong>する効果が報告されています。</p>
    </div>
    <div className="card" style={{borderLeft: "3px solid var(--color-accent-cyan)"}}>
      <span className="card-icon">🔧</span>
      <h3>セルフヒーリングテスト</h3>
      <p>UIの変更でテストが壊れた際に、AIが自動的にセレクターを修正・更新する「自己修復テスト」。Testsigma・Healenium・mabl等のツールが実用化済み。</p>
    </div>
    <div className="card" style={{borderLeft: "3px solid var(--color-accent-purple)"}}>
      <span className="card-icon">🐛</span>
      <h3>AIによる欠陥予測</h3>
      <p>過去の欠陥データ・コードの変更頻度・複雑度を機械学習で分析し、<strong>バグが発生しやすいモジュールを事前に予測</strong>。テストリソースの最適配分を実現。</p>
    </div>
    <div className="card" style={{borderLeft: "3px solid var(--coral)"}}>
      <span className="card-icon">🔍</span>
      <h3>視覚的AIテスト</h3>
      <p>Applitools・Percy等のAI視覚テストツールが、人間の目のようにUIの視覚的退行（レイアウト崩れ・色変化）を自動検出。ピクセルレベルの比較からAI意味理解へ進化。</p>
    </div>
    <div className="card" style={{borderLeft: "3px solid var(--color-accent-green)"}}>
      <span className="card-icon">🤖</span>
      <h3>AIシステム自体のテスト</h3>
      <p>LLM・AIエージェントが組み込まれたアプリケーションに対する新たなテスト課題。<strong>プロンプトインジェクション・データポイズニング・ハルシネーション</strong>への耐性テストが必須化。</p>
    </div>
    <div className="card" style={{borderLeft: "3px solid var(--color-accent-orange)"}}>
      <span className="card-icon">📊</span>
      <h3>AIによるログ分析・根本原因分析</h3>
      <p>膨大な本番ログ・テスト結果をAIがリアルタイムで分析し、障害の根本原因を自動特定（RCA: Root Cause Analysis）。<strong>平均障害解決時間（MTTR）を大幅短縮</strong>。</p>
    </div>
  </div>

  <div className="callout callout-warn mt-3">
    <strong>ISTQB CT-GenAI（2025年新設資格）：</strong>
    Foundation Levelの延長として、LLMや生成AIをテストプロセス全体（要件分析・テスト設計・自動化・レポーティング・継続改善）に適用するスキルを認定する新しい専門資格です。
    90分・40問の試験で、GenAI活用の実践スキルを体系的に学べます。
    <br />
    <a href="https://istqb.org/certifications/gen-ai/" className="ulink" target="_blank" rel="noopener noreferrer">istqb.org — CT-GenAI 公式ページ</a>
    <a href="https://www.mend.io/blog/security-testing-in-2025-testing-apps-ai-cloud-native-and-more/" className="ulink" target="_blank" rel="noopener noreferrer">mend.io — Security Testing 2025</a>
  </div>

  {/* OWASP LLM Top 10 */}
  <h3 className="mt-4" style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "400", marginBottom: "1rem", color: "var(--text)"}}>AIシステムのセキュリティテスト重点項目（OWASP LLM Top 10）</h3>
  <div className="table-wrapper">
    <table>
      <thead><tr><th>順位</th><th>リスク</th><th>テストアプローチ</th></tr></thead>
      <tbody>
        <tr><td><strong className="text-[var(--coral2)]">LLM01</strong></td><td><strong>プロンプトインジェクション</strong></td><td>悪意ある指示を注入してAIを誤動作させる試みをストレステスト</td></tr>
        <tr><td><strong className="text-[var(--coral2)]">LLM02</strong></td><td><strong>安全でない出力処理</strong></td><td>LLMの出力をサニタイズせずに実行・表示する脆弱性の検出</td></tr>
        <tr><td><strong className="text-[var(--color-accent-yellow)]">LLM03</strong></td><td><strong>トレーニングデータポイズニング</strong></td><td>学習データの汚染による偏った・有害な出力の検証</td></tr>
        <tr><td><strong className="text-[var(--color-accent-yellow)]">LLM06</strong></td><td><strong>機密情報の漏洩</strong></td><td>プロンプトからPII・APIキー等の機密情報が露出しないかを検証</td></tr>
        <tr><td><strong style={{color: "var(--color-text-secondary)"}}>LLM09</strong></td><td><strong>過度な依存</strong></td><td>AIが誤った情報を生成（ハルシネーション）した際のフォールバック確認</td></tr>
      </tbody>
    </table>
  </div>
  <p className="text-sm mt-1">参照: <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/" className="ulink" target="_blank" rel="noopener noreferrer">OWASP LLM Top 10</a></p>
</section>

{/* ══════════════════════════════════════
     SECTION 13: TOOLS LANDSCAPE
══════════════════════════════════════ */}
<section id="tools">
  <div className="section-header">
    <span className="section-header-num">SECTION 13 — TOOLS LANDSCAPE 2025</span>
    <h2>2025年 テストツール全景</h2>
    <div className="amber-rule"></div>
    <p>目的・技法・テストレベルに応じたツール選定の指針。「絶対的な正解」はなく、プロジェクトの特性・チームスキルに合わせた選択が重要です。</p>
  </div>

  <div className="grid-2">
    <div>
      <h4 style={{fontSize: ".85rem", fontWeight: "700", color: "var(--teal2)", letterSpacing: ".1em", marginBottom: ".65rem"}}>🔬 ユニット/コンポーネントテスト</h4>
      <div className="tool-grid">
        <div className="tool-card"><div className="tool-name">Jest</div><div className="tool-desc">JS/TS標準。ゼロコンフィグ・スナップショット・モック内蔵</div><span className="badge badge-int">React/Node</span></div>
        <div className="tool-card"><div className="tool-name">Vitest</div><div className="tool-desc">Viteネイティブ。30〜70%高速・ESMネイティブ</div><span className="badge badge-int">Vite推奨</span></div>
        <div className="tool-card"><div className="tool-name">pytest</div><div className="tool-desc">Python最強。フィクスチャ・パラメータ化・800+プラグイン</div><span className="badge badge-int">Python標準</span></div>
        <div className="tool-card"><div className="tool-name">JUnit 5</div><div className="tool-desc">Javaの絶対標準。アノテーション駆動・JVM言語全般</div><span className="badge badge-int">Java標準</span></div>
      </div>
    </div>
    <div>
      <h4 style={{fontSize: ".85rem", fontWeight: "700", color: "var(--color-accent-yellow)", letterSpacing: ".1em", marginBottom: ".65rem"}}>🌐 E2E / システムテスト</h4>
      <div className="tool-grid">
        <div className="tool-card"><div className="tool-name">Playwright</div><div className="tool-desc">Microsoft製。ネイティブ並列実行・クロスブラウザ安定性2%失敗率</div><span className="badge badge-e2e">2025最推奨</span></div>
        <div className="tool-card"><div className="tool-name">Cypress</div><div className="tool-desc">タイムトラベルデバッグ・SPAに最適なDX</div><span className="badge badge-e2e">フロントエンド</span></div>
        <div className="tool-card"><div className="tool-name">Selenium</div><div className="tool-desc">20年の実績。Appiumでモバイル自動化・レガシー環境</div><span className="badge b-dim">レガシー対応</span></div>
        <div className="tool-card"><div className="tool-name">Postman/Newman</div><div className="tool-desc">API機能テスト・統合テスト。Collection Runner・CI連携</div><span className="badge badge-e2e">API特化</span></div>
      </div>
    </div>
  </div>

  <div className="grid-2 mt-2">
    <div>
      <h4 style={{fontSize: ".85rem", fontWeight: "700", color: "var(--violet2)", letterSpacing: ".1em", marginBottom: ".65rem"}}>⚡ パフォーマンステスト</h4>
      <div className="tool-grid">
        <div className="tool-card"><div className="tool-name">k6</div><div className="tool-desc">Grafana製。JSでシナリオ。CI/CD統合が最も容易。SRE/SDET急速普及</div><span className="badge badge-func">モダン推奨</span></div>
        <div className="tool-card"><div className="tool-name">Apache JMeter</div><div className="tool-desc">OSS老舗。GUI設計・CLI実行。豊富なプラグイン</div><span className="badge b-dim">実績豊富</span></div>
        <div className="tool-card"><div className="tool-name">Gatling</div><div className="tool-desc">Scala/Java DSL。高スループット・リアルタイムレポート</div><span className="badge badge-func">Enterprise</span></div>
        <div className="tool-card"><div className="tool-name">Locust</div><div className="tool-desc">PythonでシナリオをコーディングするOSSツール。分散負荷テスト</div><span className="badge badge-func">Python向け</span></div>
      </div>
    </div>
    <div>
      <h4 style={{fontSize: ".85rem", fontWeight: "700", color: "var(--coral2)", letterSpacing: ".1em", marginBottom: ".65rem"}}>🔒 セキュリティ/BDD/管理</h4>
      <div className="tool-grid">
        <div className="tool-card"><div className="tool-name">OWASP ZAP</div><div className="tool-desc">OSS DAST代表。WebアプリのセキュリティテストをCI自動化</div><span className="badge b-coral">DAST標準</span></div>
        <div className="tool-card"><div className="tool-name">Cucumber</div><div className="tool-desc">Gherkin記法のBDD/ATDD標準。JS/Java/Python/Ruby対応</div><span className="badge b-sage">BDD標準</span></div>
        <div className="tool-card"><div className="tool-name">TestRail</div><div className="tool-desc">テストケース・実行・結果の一元管理。Jira統合・UAT記録</div><span className="badge b-dim">テスト管理</span></div>
        <div className="tool-card"><div className="tool-name">axe DevTools</div><div className="tool-desc">Deque製アクセシビリティ標準エンジン。WCAG自動検出・修正提案</div><span className="badge b-sage">a11y標準</span></div>
      </div>
    </div>
  </div>
  <p className="text-sm mt-2">参照:
    <a href="https://testomat.io/blog/unit-testing-tools/" className="ulink" target="_blank" rel="noopener noreferrer">testomat.io — Unit Testing Tools 2025</a>
    <a href="https://javascript.plainenglish.io/playwright-vs-cypress-performance-benchmarks-the-2025-report-c2db402c7a55" className="ulink" target="_blank" rel="noopener noreferrer">plainenglish.io — Playwright vs Cypress 2025</a>
    <a href="https://medium.com/@abhishekpurohit444/modern-sdet-toolkit-performance-security-accessibility-chaos-testing-tools-explained-410298d045aa" className="ulink" target="_blank" rel="noopener noreferrer">medium.com — Modern SDET Toolkit 2026</a>
  </p>
</section>

{/* ══════════════════════════════════════
     SECTION 14: REFERENCES
══════════════════════════════════════ */}
<section id="references">
  <div className="section-header">
    <span className="section-header-num">APPENDIX — COMPLETE REFERENCE URLS</span>
    <h2>全参照URL一覧</h2>
    <div className="amber-rule"></div>
    <p>本ガイドで引用した全ての参照元URLです。最新情報の確認にご活用ください。</p>
  </div>
  <div className="table-wrapper">
    <table>
      <thead><tr><th>カテゴリ</th><th>タイトル</th><th>URL</th></tr></thead>
      <tbody>
        {/* ISTQB */}
        <tr><td>ISTQB公式</td><td>ISTQB公式サイト（1.4M認定者・130カ国）</td><td><a href="https://istqb.org/" className="ref-url" target="_blank" rel="noopener noreferrer">https://istqb.org/</a></td></tr>
        <tr><td>ISTQB公式</td><td>CTFL v4.0 — 全資格の前提となる基礎資格</td><td><a href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" className="ref-url" target="_blank" rel="noopener noreferrer">https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/</a></td></tr>
        <tr><td>ISTQB公式</td><td>CTFL v4.0.1 シラバスPDF（最新版）</td><td><a href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf" className="ref-url" target="_blank" rel="noopener noreferrer">https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf</a></td></tr>
        <tr><td>ISTQB公式</td><td>全資格一覧</td><td><a href="https://istqb.org/certifications/" className="ref-url" target="_blank" rel="noopener noreferrer">https://istqb.org/certifications/</a></td></tr>
        <tr><td>ISTQB公式</td><td>CT-GenAI — 生成AIテスト資格（2025年新設）</td><td><a href="https://istqb.org/certifications/gen-ai/" className="ref-url" target="_blank" rel="noopener noreferrer">https://istqb.org/certifications/gen-ai/</a></td></tr>
        <tr><td>ISTQB公式</td><td>CT-AI — AIテスト資格</td><td><a href="https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/" className="ref-url" target="_blank" rel="noopener noreferrer">https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/</a></td></tr>
        <tr><td>ISTQB公式</td><td>ISTQBグロッサリー（用語集）</td><td><a href="https://glossary.istqb.org/en_US/search?term=" className="ref-url" target="_blank" rel="noopener noreferrer">https://glossary.istqb.org/en_US/search?term=</a></td></tr>
        <tr><td>ISTQB公式</td><td>JSTQB（日本語版）</td><td><a href="https://jstqb.jp/" className="ref-url" target="_blank" rel="noopener noreferrer">https://jstqb.jp/</a></td></tr>
        {/* 7 Principles */}
        <tr><td>テスト原則</td><td>7 Testing Principles — SoftwareTestingHelp</td><td><a href="https://www.softwaretestinghelp.com/principles-of-software-testing/" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.softwaretestinghelp.com/principles-of-software-testing/</a></td></tr>
        <tr><td>テスト原則</td><td>Pesticide Paradox — ISTQB Glossary</td><td><a href="https://glossary.istqb.org/en_US/search?term=pesticide+paradox" className="ref-url" target="_blank" rel="noopener noreferrer">https://glossary.istqb.org/en_US/search?term=pesticide+paradox</a></td></tr>
        {/* Static Testing */}
        <tr><td>静的テスト</td><td>Static Testing Guide — BrowserStack</td><td><a href="https://www.browserstack.com/guide/static-testing" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.browserstack.com/guide/static-testing</a></td></tr>
        <tr><td>静的テスト</td><td>Static vs Dynamic Testing — TestDevLab</td><td><a href="https://www.testdevlab.com/blog/static-testing-vs-dynamic-testing" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.testdevlab.com/blog/static-testing-vs-dynamic-testing</a></td></tr>
        {/* BB/WB Techniques */}
        <tr><td>設計技法</td><td>Equivalence Partitioning & BVA — Guru99</td><td><a href="https://www.guru99.com/equivalence-partitioning-boundary-value-analysis.html" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.guru99.com/equivalence-partitioning-boundary-value-analysis.html</a></td></tr>
        <tr><td>設計技法</td><td>Decision Table Testing — SoftwareTestingHelp</td><td><a href="https://www.softwaretestinghelp.com/decision-table-testing-technique/" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.softwaretestinghelp.com/decision-table-testing-technique/</a></td></tr>
        <tr><td>設計技法</td><td>State Transition Testing — LambdaTest</td><td><a href="https://www.lambdatest.com/blog/state-transition-testing/" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.lambdatest.com/blog/state-transition-testing/</a></td></tr>
        <tr><td>設計技法</td><td>Code Coverage Guide — Guru99</td><td><a href="https://www.guru99.com/code-coverage.html" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.guru99.com/code-coverage.html</a></td></tr>
        <tr><td>設計技法</td><td>Test Coverage — Martin Fowler</td><td><a href="https://martinfowler.com/bliki/TestCoverage.html" className="ref-url" target="_blank" rel="noopener noreferrer">https://martinfowler.com/bliki/TestCoverage.html</a></td></tr>
        {/* BB/WB/GB */}
        <tr><td>テスト手法</td><td>Black/White/Grey Box Testing — Testlio</td><td><a href="https://testlio.com/blog/black-box-vs-white-vs-gray-box-testing/" className="ref-url" target="_blank" rel="noopener noreferrer">https://testlio.com/blog/black-box-vs-white-vs-gray-box-testing/</a></td></tr>
        <tr><td>テスト手法</td><td>White vs Black vs Grey Box — TestDevLab</td><td><a href="https://www.testdevlab.com/blog/white-box-vs-black-box-vs-gray-box-testing" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.testdevlab.com/blog/white-box-vs-black-box-vs-gray-box-testing</a></td></tr>
        <tr><td>テスト手法</td><td>Practical Guide: BB/WB/GB — DEV Community</td><td><a href="https://dev.to/matt_calder_e620d84cf0c14/black-box-vs-white-box-vs-grey-box-testing-a-practical-guide-i9d" className="ref-url" target="_blank" rel="noopener noreferrer">https://dev.to/matt_calder_e620d84cf0c14/black-box-vs-white-box-vs-grey-box-testing-a-practical-guide-i9d</a></td></tr>
        {/* Test Levels & Types */}
        <tr><td>テストレベル</td><td>Test Levels Guide — BrowserStack</td><td><a href="https://www.browserstack.com/guide/test-levels-in-software-testing" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.browserstack.com/guide/test-levels-in-software-testing</a></td></tr>
        <tr><td>テストタイプ</td><td>100+ Types of Software Testing — SoftwareTestingHelp</td><td><a href="https://www.softwaretestinghelp.com/types-of-software-testing/" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.softwaretestinghelp.com/types-of-software-testing/</a></td></tr>
        {/* Exploratory */}
        <tr><td>経験ベース</td><td>Exploratory Testing — James Bach (Satisfice)</td><td><a href="https://www.satisfice.com/exploratory-testing" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.satisfice.com/exploratory-testing</a></td></tr>
        <tr><td>経験ベース</td><td>Testing Charter Guide — TestingExcellence</td><td><a href="https://www.testingexcellence.com/exploratory-testing-charter/" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.testingexcellence.com/exploratory-testing-charter/</a></td></tr>
        {/* Shift Left/Right */}
        <tr><td>シフト戦略</td><td>Shift-Left Testing with GenAI — QASource Blog</td><td><a href="https://blog.qasource.com/shift-left-testing-a-beginners-guide-to-advancing-automation-with-generative-ai" className="ref-url" target="_blank" rel="noopener noreferrer">https://blog.qasource.com/shift-left-testing-a-beginners-guide-to-advancing-automation-with-generative-ai</a></td></tr>
        <tr><td>シフト戦略</td><td>Software Testing Trends 2025 — Trendig</td><td><a href="https://trendig.com/en/blog/software-testing-trends-2025/" className="ref-url" target="_blank" rel="noopener noreferrer">https://trendig.com/en/blog/software-testing-trends-2025/</a></td></tr>
        <tr><td>シフト戦略</td><td>Top Testing Trends 2025 — Xray Blog</td><td><a href="https://www.getxray.app/blog/top-2025-software-testing-trends" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.getxray.app/blog/top-2025-software-testing-trends</a></td></tr>
        {/* AI Testing */}
        <tr><td>AIテスト</td><td>Security Testing 2025: AI & Cloud-Native — Mend.io</td><td><a href="https://www.mend.io/blog/security-testing-in-2025-testing-apps-ai-cloud-native-and-more/" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.mend.io/blog/security-testing-in-2025-testing-apps-ai-cloud-native-and-more/</a></td></tr>
        <tr><td>AIテスト</td><td>OWASP LLM Top 10</td><td><a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/" className="ref-url" target="_blank" rel="noopener noreferrer">https://owasp.org/www-project-top-10-for-large-language-model-applications/</a></td></tr>
        {/* E2E Tools */}
        <tr><td>ツール</td><td>Playwright vs Cypress 2025 Benchmarks</td><td><a href="https://javascript.plainenglish.io/playwright-vs-cypress-performance-benchmarks-the-2025-report-c2db402c7a55" className="ref-url" target="_blank" rel="noopener noreferrer">https://javascript.plainenglish.io/playwright-vs-cypress-performance-benchmarks-the-2025-report-c2db402c7a55</a></td></tr>
        <tr><td>ツール</td><td>Playwright vs Selenium vs Cypress — ThinkSys</td><td><a href="https://thinksys.com/qa-testing/playwright-vs-selenium-vs-cypress/" className="ref-url" target="_blank" rel="noopener noreferrer">https://thinksys.com/qa-testing/playwright-vs-selenium-vs-cypress/</a></td></tr>
        <tr><td>ツール</td><td>Modern SDET Toolkit 2026 — Medium</td><td><a href="https://medium.com/@abhishekpurohit444/modern-sdet-toolkit-performance-security-accessibility-chaos-testing-tools-explained-410298d045aa" className="ref-url" target="_blank" rel="noopener noreferrer">https://medium.com/@abhishekpurohit444/modern-sdet-toolkit-performance-security-accessibility-chaos-testing-tools-explained-410298d045aa</a></td></tr>
        <tr><td>ツール</td><td>Best Unit Testing Tools 2025 — Testomat.io</td><td><a href="https://testomat.io/blog/unit-testing-tools/" className="ref-url" target="_blank" rel="noopener noreferrer">https://testomat.io/blog/unit-testing-tools/</a></td></tr>
        <tr><td>ツール</td><td>Best a11y Testing Tools 2025 — DEV Community</td><td><a href="https://dev.to/maria_bueno/2025-guide-best-10-accessibility-testing-tools-automated-41" className="ref-url" target="_blank" rel="noopener noreferrer">https://dev.to/maria_bueno/2025-guide-best-10-accessibility-testing-tools-automated-41</a></td></tr>
        <tr><td>ツール</td><td>Axe Platform — Deque Systems</td><td><a href="https://www.deque.com/axe/" className="ref-url" target="_blank" rel="noopener noreferrer">https://www.deque.com/axe/</a></td></tr>
        <tr><td>OWASP</td><td>OWASP Top 10:2025</td><td><a href="https://owasp.org/Top10/2025/" className="ref-url" target="_blank" rel="noopener noreferrer">https://owasp.org/Top10/2025/</a></td></tr>
      </tbody>
    </table>
  </div>
</section>

            </main>
        </>
    );
}
