import '../istqb-ct-ste-complete-guide.css';
import NavBar from './NavBar';

export const metadata = {
  title: 'ISTQB CT-STE Security Test Engineer 完全ガイド 2025',
  description: 'ISTQB CT-STE Security Test Engineer 完全ガイド 2025',
};

export default function ISTQB_CT_STE_Page() {
  return (
    <div className="ct-ste-wrapper" id="top">
      <NavBar />
      

{/* STICKY NAV */}


<div className="page-wrapper">

{/* HERO */}
<section className="hero">
  <div className="hero-glow"></div>
  <div className="hero-badge">ISTQB® SPECIALIST STREAM • 2025年1月リリース</div>
  <h1 className="hero-title">CT-STE Security Test Engineer</h1>
  <p className="hero-sub">完全学習ガイド 2025 — v1.0.1 最新シラバス準拠<br />初学者から実務エンジニアまでのステップバイステップ解説</p>

  <div className="meta-grid">
    <div className="meta-card">
      <div className="meta-label">試験問題数</div>
      <div className="meta-value">40問</div>
    </div>
    <div className="meta-card">
      <div className="meta-label">合格点</div>
      <div className="meta-value">28/43点</div>
    </div>
    <div className="meta-card">
      <div className="meta-label">試験時間</div>
      <div className="meta-value">75分</div>
    </div>
    <div className="meta-card">
      <div className="meta-label">前提資格</div>
      <div className="meta-value">CTFL のみ</div>
    </div>
    <div className="meta-card">
      <div className="meta-label">合格基準</div>
      <div className="meta-value">65%</div>
    </div>
    <div className="meta-card">
      <div className="meta-label">最新バージョン</div>
      <div className="meta-value">v1.0.1</div>
    </div>
  </div>
</section>

{/* TOC */}
<div className="section-header">
  <span className="chapter-num">TOC</span>
  <h2 className="section-title">目次</h2>
</div>
<div className="toc-grid">
  <a href="#ch0" className="toc-item"><span className="toc-num">Ch.0</span><span className="toc-text">概要・資格ロードマップ・ビジネスアウトカム</span></a>
  <a href="#ch1" className="toc-item"><span className="toc-num">Ch.1</span><span className="toc-text">セキュリティパラダイム（K1-K3）</span></a>
  <a href="#ch2" className="toc-item"><span className="toc-num">Ch.2</span><span className="toc-text">セキュリティテスト技法（K2-K3）</span></a>
  <a href="#ch3" className="toc-item"><span className="toc-num">Ch.3</span><span className="toc-text">セキュリティテストプロセス（K3）</span></a>
  <a href="#ch4" className="toc-item"><span className="toc-num">Ch.4</span><span className="toc-text">標準・ベストプラクティス（K2）</span></a>
  <a href="#ch5" className="toc-item"><span className="toc-num">Ch.5</span><span className="toc-text">組織コンテキストへの適応（K3）</span></a>
  <a href="#ch6" className="toc-item"><span className="toc-num">Ch.6</span><span className="toc-text">SDLCモデルへの適応（K3）</span></a>
  <a href="#ch7" className="toc-item"><span className="toc-num">Ch.7</span><span className="toc-text">ISMSとセキュリティテスト（K2-K3）</span></a>
  <a href="#ch8" className="toc-item"><span className="toc-num">Ch.8</span><span className="toc-text">テスト結果の報告（K3）</span></a>
  <a href="#ch9" className="toc-item"><span className="toc-num">Ch.9</span><span className="toc-text">セキュリティテストツール（K2-K3）</span></a>
  <a href="#exam" className="toc-item"><span className="toc-num">試験</span><span className="toc-text">サンプル問題・直前チェックリスト</span></a>
  <a href="#refs" className="toc-item"><span className="toc-num">参考</span><span className="toc-text">公式・ツール・標準URL一覧</span></a>
</div>

<div className="callout danger">
  <div className="callout-title">⚠️ 重要：CT-STE vs CT-SEC</div>
  <p>CT-STE（2025年1月リリース）は旧来の CT-SEC（2016年）の後継資格です。CT-SEC 取得者の自動移行（Grandfathering）はありません。CT-STE を取得するには新たに試験を受ける必要があります。</p>
</div>

{/* CHAPTER 0 */}
<section id="ch0">
  <div className="section-header">
    <span className="chapter-num">Ch.0</span>
    <span className="k-badge">K2</span>
    <h2 className="section-title">概要・資格ロードマップ</h2>
  </div>

  <p>CT-STE（Certified Tester – Security Test Engineer）は、セキュリティテストの<strong>実践的実行</strong>に特化したスペシャリスト資格です。旧 CT-SEC の課題だった「役割の複合性」を解消するため、2つの資格に分離されました。</p>

  <h3 className="sub-title">資格ロードマップ</h3>
  <div className="arch-layers">
    <div className="arch-layer green">
      <span className="arch-icon">🎯</span>
      <div className="arch-content">
        <div className="arch-title">CT-STE — Security Test Engineer（2025年1月リリース）</div>
        <div className="arch-desc">実践的セキュリティテストの実行。技術的なテストスキル・ツール活用・プロセス実装に焦点。前提資格：CTFL のみ（実務経験不要）。</div>
      </div>
    </div>
    <div className="arch-layer cyan">
      <span className="arch-icon">📊</span>
      <div className="arch-content">
        <div className="arch-title">CT-STA — Security Test Analyst（2026年リリース予定）</div>
        <div className="arch-desc">ビジネスセキュリティリスクの分析・戦略定義に焦点。CT-STE の上位／補完資格として位置付けられる予定。</div>
      </div>
    </div>
    <div className="arch-layer amber">
      <span className="arch-icon">📋</span>
      <div className="arch-content">
        <div className="arch-title">CT-SEC（旧版・廃止予定）</div>
        <div className="arch-desc">役割が複合的すぎた旧資格。CT-STE / CT-STA の2資格に機能分離された。自動移行なし。</div>
      </div>
    </div>
    <div className="arch-layer purple">
      <span className="arch-icon">🏁</span>
      <div className="arch-content">
        <div className="arch-title">CTFL v4.0（前提資格）</div>
        <div className="arch-desc">CT-STE の唯一の前提条件。実務経験は不要。</div>
      </div>
    </div>
  </div>

  <h3 className="sub-title">9つのビジネスアウトカム（BO）</h3>
  <div className="card">
    <ul className="step-list">
      <li><span className="step-num">1</span><div className="step-content"><div className="step-title">BO1：セキュリティパラダイムの理解</div>セキュリティパラダイムとセキュリティテストへの影響を理解できる</div></li>
      <li><span className="step-num">2</span><div className="step-content"><div className="step-title">BO2：テスト技法の適用</div>適切なセキュリティテスト技法を使用・適用し、強みと限界を把握できる</div></li>
      <li><span className="step-num">3</span><div className="step-content"><div className="step-title">BO3：テストプロセスへの貢献</div>セキュリティテストの計画・設計・実行に貢献できる</div></li>
      <li><span className="step-num">4</span><div className="step-content"><div className="step-title">BO4：標準の活用</div>セキュリティテスト標準とベストプラクティスを活用できる</div></li>
      <li><span className="step-num">5</span><div className="step-content"><div className="step-title">BO5：組織コンテキストへの適応</div>特定の組織コンテキストに応じてセキュリティテスト活動を調整・実行できる</div></li>
      <li><span className="step-num">6</span><div className="step-content"><div className="step-title">BO6：SDLCへの適応</div>特定の開発手法とSDLCに応じてセキュリティテスト活動を調整・実行できる</div></li>
      <li><span className="step-num">7</span><div className="step-content"><div className="step-title">BO7：ISMSへの統合</div>セキュリティテスト結果をISMSに組み込み、アクティブなリスク管理に貢献できる</div></li>
      <li><span className="step-num">8</span><div className="step-content"><div className="step-title">BO8：テスト結果の報告</div>全証拠と調査結果を含む詳細なセキュリティテストレポートを作成できる</div></li>
      <li><span className="step-num">9</span><div className="step-content"><div className="step-title">BO9：ツール選定の支援</div>必要なセキュリティテストアプローチに基づきツール要件を特定し、ツール選定を支援できる</div></li>
    </ul>
  </div>

  <h3 className="sub-title">試験配点（各章の重要度）</h3>
  <div className="exam-grid">
    <div className="exam-card">
      <div className="exam-chapter">CH.1</div>
      <div className="exam-name">セキュリティパラダイム</div>
      <div className="exam-stars">★★★★★</div>
      <div className="exam-points">ゼロトラスト・OSS・CIA</div>
    </div>
    <div className="exam-card">
      <div className="exam-chapter">CH.2</div>
      <div className="exam-name">セキュリティテスト技法</div>
      <div className="exam-stars">★★★★★</div>
      <div className="exam-points">BB/WB/GB・SAST/DAST</div>
    </div>
    <div className="exam-card">
      <div className="exam-chapter">CH.3</div>
      <div className="exam-name">セキュリティテストプロセス</div>
      <div className="exam-stars">★★★★☆</div>
      <div className="exam-points">7ステージ・AAA</div>
    </div>
    <div className="exam-card">
      <div className="exam-chapter">CH.4</div>
      <div className="exam-name">標準・ベストプラクティス</div>
      <div className="exam-stars">★★★★★</div>
      <div className="exam-points">OWASP・CVE・CVSS</div>
    </div>
    <div className="exam-card">
      <div className="exam-chapter">CH.5</div>
      <div className="exam-name">組織コンテキスト</div>
      <div className="exam-stars">★★★★☆</div>
      <div className="exam-points">規制・攻撃シナリオ</div>
    </div>
    <div className="exam-card">
      <div className="exam-chapter">CH.6</div>
      <div className="exam-name">SDLC適応</div>
      <div className="exam-stars">★★★★☆</div>
      <div className="exam-points">DevSecOps・保守</div>
    </div>
    <div className="exam-card">
      <div className="exam-chapter">CH.7</div>
      <div className="exam-name">ISMS統合</div>
      <div className="exam-stars">★★★★☆</div>
      <div className="exam-points">受入基準・PDCA</div>
    </div>
    <div className="exam-card">
      <div className="exam-chapter">CH.8</div>
      <div className="exam-name">テスト結果報告</div>
      <div className="exam-stars">★★★★☆</div>
      <div className="exam-points">レポート・クローズ</div>
    </div>
    <div className="exam-card">
      <div className="exam-chapter">CH.9</div>
      <div className="exam-name">セキュリティテストツール</div>
      <div className="exam-stars">★★★☆☆</div>
      <div className="exam-points">10カテゴリ・選定</div>
    </div>
  </div>
</section>

{/* CHAPTER 1 */}
<section id="ch1">
  <div className="section-header">
    <span className="chapter-num">Ch.1</span>
    <span className="k-badge">K1–K3</span>
    <h2 className="section-title">セキュリティパラダイム</h2>
  </div>

  <h3 className="sub-title">1.1 資産セキュリティレベル</h3>
  <p><strong>定義：</strong> 資産（Asset）とは、組織にとって価値があり保護が必要な情報・システム・プロセス・人員のことです。資産の感度レベルによってセキュリティテストの必要性と深度が決まります。</p>

  <div className="table-wrap">
    <table>
      <thead><tr><th>感度レベル</th><th>保護レベル</th><th>主な CIA 特性</th><th>テスト要否</th><th>具体例</th></tr></thead>
      <tbody>
        <tr><td><span className="tag amber">低 (Low)</span></td><td>低</td><td>可用性（Availability）</td><td>基本確認のみ</td><td>公開マーケティング資料・製品カタログ</td></tr>
        <tr><td><span className="tag cyan">中 (Medium)</span></td><td>中</td><td>完全性（Integrity）</td><td>必要</td><td>内部業務手順書・取引先非公開契約書</td></tr>
        <tr><td><span className="tag red">高 (High)</span></td><td>高</td><td>機密性（Confidentiality）</td><td>必須（詳細テスト）</td><td>従業員個人情報・顧客支払い情報・知的財産</td></tr>
      </tbody>
    </table>
  </div>

  <div className="callout info">
    <div className="callout-title">💡 記憶のコツ</div>
    <p>資産感度が<strong>高い</strong>ほど → CIA のうち「<strong>機密性（C）</strong>」が優先される。感度が<strong>低い</strong>ほど → 「<strong>可用性（A）</strong>」が重要。中間は「<strong>完全性（I）</strong>」。試験でよく問われます。</p>
  </div>

  <h3 className="sub-title">1.2 セキュリティ監査とセキュリティテストの違い</h3>
  <div className="compare-grid">
    <div className="compare-box good">
      <div className="compare-label">✅ セキュリティ監査（Audit）</div>
      <p>セキュリティコントロールが「<strong>存在し・文書化され・定義されているか</strong>」を確認。コンプライアンス適合確認に有効。「ポリシーが存在するか」を検証。</p>
    </div>
    <div className="compare-box bad">
      <div className="compare-label">🔬 セキュリティテスト（Testing）</div>
      <p>実装されたコントロールが「<strong>実際に機能しているか</strong>」を動的に検証。「暗号化が実際に機能しているか」「認証が突破できないか」を確認。</p>
    </div>
  </div>

  <div className="card">
    <p>✅ <strong>良い例（連携の流れ）：</strong></p>
    <ul className="checklist">
      <li className="ok"><span className="check-icon">⑴</span>監査：「パスワードポリシーが文書化されているか確認」→ 存在確認</li>
      <li className="warn"><span className="check-icon">⑵</span>発見：「ポリシーは存在するが実施状況不明」</li>
      <li className="ok"><span className="check-icon">⑶</span>テスト：「実際に弱いパスワードが拒否されるか動的テスト」→ 実装検証</li>
      <li className="fail"><span className="check-icon">⑷</span>発見：「12文字以下のパスワードが受け入れられる」→ 修正が必要</li>
    </ul>
  </div>

  <h3 className="sub-title">1.3 ゼロトラスト（Zero Trust）— 試験最重要！</h3>
  <p><strong>定義（NIST SP 800-207）：</strong> 「ネットワーク上の位置に関わらず、ユーザー・デバイス・サービスのいずれも暗黙的に信頼しない」セキュリティモデル。</p>

  <div className="callout danger">
    <div className="callout-title">🔑 核心原則</div>
    <p><strong>「Never Trust, Always Verify（決して信頼せず、常に検証せよ）」</strong></p>
  </div>

  <div className="compare-grid">
    <div className="compare-box bad">
      <div className="compare-label">❌ 従来のペリメーターモデル</div>
      <p>ファイアウォールで外部を遮断し、内部ネットワークを信頼。侵入した攻撃者が自由に横移動できる。リモートワーク・クラウド化で「内側」の概念が崩壊。</p>
    </div>
    <div className="compare-box good">
      <div className="compare-label">✅ ゼロトラストモデル</div>
      <p>全アクセスを動的に検証・認可。内部ネットワーク ≠ 信頼できる。全通信を暗号化。全アクセスをログ記録。最小権限の原則を厳守。</p>
    </div>
  </div>

  <h3 className="sub-title">NIST SP 800-207 ゼロトラストの7原則</h3>
  <div className="arch-layers">
    <div className="arch-layer green"><span className="arch-icon">①</span><div className="arch-content"><div className="arch-title">全リソースを保護対象とする</div><div className="arch-desc">データ・アプリ・サービス・ネットワーク全て。「内側だから安全」を排除</div></div></div>
    <div className="arch-layer cyan"><span className="arch-icon">②</span><div className="arch-content"><div className="arch-title">場所に関わらず通信を保護する</div><div className="arch-desc">社内通信も外部通信も同等に暗号化。ネットワーク位置で信頼レベルを決めない</div></div></div>
    <div className="arch-layer amber"><span className="arch-icon">③</span><div className="arch-content"><div className="arch-title">セッション単位でアクセスを許可する</div><div className="arch-desc">一度ログインしても永続的に信頼しない。各セッション・各リクエストで再検証</div></div></div>
    <div className="arch-layer purple"><span className="arch-icon">④</span><div className="arch-content"><div className="arch-title">アクセス決定は動的・コンテキスト考慮</div><div className="arch-desc">アイデンティティ・デバイスの健全性・時刻・場所を考慮した動的ポリシー評価</div></div></div>
    <div className="arch-layer red"><span className="arch-icon">⑤</span><div className="arch-content"><div className="arch-title">全デバイス・ユーザーを認証・認可</div><div className="arch-desc">MFA・証明書ベース認証を厳格に実施。明示的な検証なしにアクセス不可</div></div></div>
    <div className="arch-layer cyan"><span className="arch-icon">⑥</span><div className="arch-content"><div className="arch-title">資産のセキュリティ状態を継続的監視</div><div className="arch-desc">リアルタイムでデバイスの健全性を確認。侵害検知時は即座にセッション切断</div></div></div>
    <div className="arch-layer amber"><span className="arch-icon">⑦</span><div className="arch-content"><div className="arch-title">セキュリティ状態の継続的改善</div><div className="arch-desc">テレメトリを収集してポリシーを最適化。全操作を記録・監査証跡を維持</div></div></div>
  </div>

  <h3 className="sub-title">ゼロトラスト 3大コンポーネント</h3>
  <div className="metric-grid">
    <div className="metric-card">
      <div className="metric-value" style={{ fontSize: '1.1rem' }}>PEP</div>
      <div className="metric-label" style={{ fontSize: '1rem' }}>Policy Enforcement Point<br />「アクセス決定を実施する門番」<br />ユーザーとリソースの間に配置</div>
    </div>
    <div className="metric-card">
      <div className="metric-value" style={{ fontSize: '1.1rem' }}>PDP</div>
      <div className="metric-label" style={{ fontSize: '1rem' }}>Policy Decision Point<br />「許可・拒否を決定する脳」<br />ポリシーエンジン＋ポリシーアドミニストレーター</div>
    </div>
    <div className="metric-card">
      <div className="metric-value" style={{ fontSize: '1.1rem' }}>Infra</div>
      <div className="metric-label" style={{ fontSize: '1rem' }}>Infrastructure<br />IDプロバイダー・PKI・SIEM<br />エンドポイント検出等</div>
    </div>
  </div>

  <h3 className="sub-title">セキュリティテストへのゼロトラスト適用</h3>
  <div className="table-wrap">
    <table>
      <thead><tr><th>ゼロトラスト原則</th><th>セキュリティテストの検証観点</th></tr></thead>
      <tbody>
        <tr><td>常に認証・認可する</td><td>認証バイパス・認可フロービテスト</td></tr>
        <tr><td>最小権限の原則</td><td>水平 / 垂直権限昇格テスト</td></tr>
        <tr><td>継続的監視</td><td>監査ログの記録・アラート機能テスト</td></tr>
        <tr><td>全通信の暗号化</td><td>TLS / 暗号化設定テスト</td></tr>
        <tr><td>デバイス健全性確認</td><td>不正デバイスからのアクセステスト</td></tr>
        <tr><td>セグメント分離</td><td>ネットワーク分離・横移動防止テスト</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="sub-title">1.4 オープンソースソフトウェア（OSS）とセキュリティリスク</h3>
  <p>OSS は開発の効率化に不可欠ですが、セキュリティリスクも内包しています。</p>

  <div className="trend-card">
    <div className="trend-title">⚡ Log4Shell（CVE-2021-44228）— 史上最大級の OSS 脆弱性</div>
    <p>Java の Log4j ライブラリに発見された脆弱性。CVSS スコア <strong>10.0（最大値 = Critical）</strong>。世界中の何百万もの Java アプリケーションが影響を受けた。JNDI インジェクションを悪用して任意のコードをリモートで実行可能。</p>
    <div className="tags">
      <span className="tag red">CVSS 10.0</span>
      <span className="tag amber">リモートコード実行</span>
      <span className="tag cyan">サプライチェーン攻撃</span>
    </div>
  </div>

  <div className="compare-grid">
    <div className="compare-box good">
      <div className="compare-label">✅ OSS のメリット</div>
      <p>コスト削減・開発速度向上。コードが公開されており透明性が高い。大規模コミュニティによる脆弱性発見と修正。</p>
    </div>
    <div className="compare-box bad">
      <div className="compare-label">❌ OSS のセキュリティリスク</div>
      <p>既知の CVE を持つバージョン使用リスク。悪意あるコードを含むライブラリ（サプライチェーン攻撃）。メンテナンスが止まった廃棄ライブラリの使用。推移的依存関係にある脆弱なライブラリ。</p>
    </div>
  </div>

  <p><strong>OSS セキュリティテストの実践：</strong></p>
  <ul className="checklist">
    <li className="ok"><span className="check-icon">①</span><strong>SCA（ソフトウェアコンポジション分析）：</strong>OWASP Dependency-Check・Snyk・Dependabot で既知 CVE を確認</li>
    <li className="ok"><span className="check-icon">②</span><strong>SBOM（Software Bill of Materials）作成：</strong>全 OSS コンポーネントの目録。脆弱性発見時に影響範囲を即座に把握</li>
    <li className="ok"><span className="check-icon">③</span><strong>推移的依存関係のチェック：</strong>直接依存だけでなく間接依存ライブラリも確認</li>
  </ul>

  <div className="code-block" data-lang="bash">
<div className="code-line"><span className="code-comment"># ① OWASP Dependency-Check でのスキャン例</span></div>
<div className="code-line">dependency-check.sh <span className="code-keyword">--project</span> MyApp \</div>
<div className="code-line">  <span className="code-keyword">--scan</span> ./target/myapp.jar \</div>
<div className="code-line">  <span className="code-keyword">--format</span> HTML \</div>
<div className="code-line">  <span className="code-keyword">--out</span> ./reports/</div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-comment"># ② Snyk でのスキャン</span></div>
<div className="code-line">snyk test --json &gt; sca-results.json</div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-comment"># ③ bun audit（Node.js の推移的依存関係チェック）</span></div>
<div className="code-line">bun audit --audit-level=high</div>
  </div>
</section>

{/* CHAPTER 2 */}
<section id="ch2">
  <div className="section-header">
    <span className="chapter-num">Ch.2</span>
    <span className="k-badge">K2–K3</span>
    <h2 className="section-title">セキュリティテスト技法</h2>
  </div>

  <h3 className="sub-title">2.1 知識レベル別テスト分類（試験頻出！）</h3>
  <div className="table-wrap">
    <table>
      <thead><tr><th>テスト種別</th><th>知識レベル</th><th>視点</th><th>主な手法</th><th>長所</th><th>短所</th></tr></thead>
      <tbody>
        <tr>
          <td><span className="tag red">ブラックボックス</span></td>
          <td>情報なし</td>
          <td>外部攻撃者</td>
          <td>ペンテスト・DAST</td>
          <td>実際の攻撃をシミュレート</td>
          <td>内部の問題を見逃す可能性</td>
        </tr>
        <tr>
          <td><span className="tag amber">グレーボックス</span></td>
          <td>部分的な情報</td>
          <td>認証済みユーザー</td>
          <td>IDOR テスト・認可テスト</td>
          <td>内外の視点バランス良く</td>
          <td>BBよりやや時間かかる</td>
        </tr>
        <tr>
          <td><span className="tag green">ホワイトボックス</span></td>
          <td>完全な内部情報</td>
          <td>開発者・監査人</td>
          <td>SAST・コードレビュー</td>
          <td>コードレベルの問題を徹底的に発見</td>
          <td>実際の攻撃者視点を反映しにくい</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 className="sub-title">2.2 静的テスト vs 動的テスト</h3>
  <div className="pyramid">
    <div className="pyramid-level l1">🔴 DAST / ペンテスト / ファジング（動的テスト - 実行時）</div>
    <div className="pyramid-level l2">🟡 IAST（インタラクティブ - 動的+静的の融合）</div>
    <div className="pyramid-level l3">🔵 SAST（ソースコード静的解析）</div>
    <div className="pyramid-level l4">🟢 SCA（依存関係・OSS 脆弱性スキャン）</div>
    <div className="pyramid-level l5">🟣 設定レビュー / セキュアコードレビュー</div>
  </div>

  <div className="table-wrap">
    <table>
      <thead><tr><th>種類</th><th>略称</th><th>説明</th><th>代表ツール</th><th>フェーズ</th></tr></thead>
      <tbody>
        <tr><td><strong>静的アプリケーションセキュリティテスト</strong></td><td><span className="tag green">SAST</span></td><td>ソースコードを解析してセキュリティ欠陥を発見。実行不要。</td><td>Checkmarx・SonarQube・Semgrep・Bandit</td><td>開発中</td></tr>
        <tr><td><strong>ソフトウェアコンポジション分析</strong></td><td><span className="tag cyan">SCA</span></td><td>使用 OSS ライブラリの既知脆弱性（CVE）を確認。</td><td>Snyk・Dependency-Check・Dependabot</td><td>ビルド時</td></tr>
        <tr><td><strong>動的アプリケーションセキュリティテスト</strong></td><td><span className="tag amber">DAST</span></td><td>稼働中アプリに外部から攻撃をシミュレート。実行時脆弱性を発見。</td><td>OWASP ZAP・Burp Suite・Acunetix</td><td>テスト・運用</td></tr>
        <tr><td><strong>インタラクティブAST</strong></td><td><span className="tag purple">IAST</span></td><td>アプリ内部にエージェントを組み込んで動的分析。SAST+DAST の融合。</td><td>Seeker・Contrast Security</td><td>テスト</td></tr>
        <tr><td><strong>ペネトレーションテスト</strong></td><td><span className="tag red">PenTest</span></td><td>倫理的ハッカーが実際の攻撃をシミュレート。手動+自動ツールの組み合わせ。</td><td>Metasploit・Burp Suite・Nmap</td><td>リリース前</td></tr>
        <tr><td><strong>ファジング</strong></td><td><span className="tag amber">Fuzzing</span></td><td>ランダム・無効・予期しないデータを入力してクラッシュや脆弱性を発見。</td><td>AFL++・Peach Fuzzer・OWASP ZAP Fuzzer</td><td>テスト</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="sub-title">2.3 AAA フレームワーク — 認証・認可・アカウンティング</h3>
  <div className="arch-layers">
    <div className="arch-layer green">
      <span className="arch-icon">🔑</span>
      <div className="arch-content">
        <div className="arch-title">Authentication（認証）— 「あなたは誰ですか？」</div>
        <div className="arch-desc">テスト観点：ブルートフォース攻撃への耐性 / 弱いパスワードの拒否 / MFAの動作確認 / セッション固定攻撃への対策 / 認証情報の安全な保存（bcrypt等）</div>
      </div>
    </div>
    <div className="arch-layer cyan">
      <span className="arch-icon">🛡️</span>
      <div className="arch-content">
        <div className="arch-title">Authorization（認可）— 「あなたは何をする権限がありますか？」</div>
        <div className="arch-desc">テスト観点：水平権限昇格（IDOR）— 他ユーザーのデータへのアクセス / 垂直権限昇格 — 一般ユーザーが管理者機能にアクセス / 最小権限の原則の遵守 / RBAC の正確な実装</div>
      </div>
    </div>
    <div className="arch-layer amber">
      <span className="arch-icon">📋</span>
      <div className="arch-content">
        <div className="arch-title">Accounting（アカウンティング）— 「あなたは何をしましたか？」</div>
        <div className="arch-desc">テスト観点：全認証試行（成功・失敗）のログ記録 / 重要な操作の監査ログ記録 / ログの改ざん防止 / ログ保存期間の適切さ</div>
      </div>
    </div>
  </div>

  <h3 className="sub-title">IDOR（Insecure Direct Object Reference）テスト例</h3>
  <div className="code-block" data-lang="http">
<div className="code-line"><span className="code-comment"># テストシナリオ：ユーザーA としてログイン後、ユーザーB のデータへアクセスを試みる</span></div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-comment"># Step 1: 自分の注文を確認（成功するはず）</span></div>
<div className="code-line">GET /api/orders/<span className="code-green">1001</span> HTTP/1.1</div>
<div className="code-line">Authorization: Bearer <span className="code-amber">userA_token</span></div>
<div className="code-line">→ 200 OK (自分の注文情報)</div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-comment"># Step 2: 別ユーザーの注文ID を試す（失敗するべき）</span></div>
<div className="code-line">GET /api/orders/<span className="code-red">1002</span> HTTP/1.1</div>
<div className="code-line">Authorization: Bearer <span className="code-amber">userA_token</span></div>
<div className="code-line">→ 期待: <span className="code-green">403 Forbidden</span></div>
<div className="code-line">→ 脆弱: <span className="code-red">200 OK (ユーザーBの情報が返る！)</span></div>
  </div>

  <h3 className="sub-title">テストオラクルのプロとコン</h3>
  <div className="compare-grid">
    <div className="compare-box good">
      <div className="compare-label">✅ テストオラクルの利点</div>
      <p>客観的な判定基準を提供。標準化された評価が可能（OWASP・NIST・PCI DSS）。規制コンプライアンスの証明に使える。CVE・CWE データベースを判定基準として活用できる。</p>
    </div>
    <div className="compare-box bad">
      <div className="compare-label">❌ テストオラクルの限界</div>
      <p>新しい・未知の脆弱性（ゼロデイ）には対応できない。ビジネスロジックの問題は標準オラクルで見逃す可能性。コンテキストに依存する判断は自動化できない。過度な標準依存は創造的攻撃視点を失う。</p>
    </div>
  </div>
</section>

{/* CHAPTER 3 */}
<section id="ch3">
  <div className="section-header">
    <span className="chapter-num">Ch.3</span>
    <span className="k-badge">K3</span>
    <h2 className="section-title">セキュリティテストプロセス</h2>
  </div>

  <h3 className="sub-title">3.1 セキュリティテストプロセス 7ステージ</h3>
  <ol className="step-list">
    <li><span className="step-num">1</span><div className="step-content"><div className="step-title">計画（Planning）</div>テスト目標・スコープ・リソース・スケジュールの定義。リスクベースでのアプローチ選択。</div></li>
    <li><span className="step-num">2</span><div className="step-content"><div className="step-title">分析（Analysis）</div>脅威モデリング・リスク評価・テスト条件の特定。OWASP Top 10 や CVE データベースを参照してリスクを洗い出す。</div></li>
    <li><span className="step-num">3</span><div className="step-content"><div className="step-title">設計（Design）</div>テストケース設計・テストデータ準備。機能的・構造的セキュリティリスクごとにテストケースを設計。</div></li>
    <li><span className="step-num">4</span><div className="step-content"><div className="step-title">実装（Implementation）</div>テストスクリプト作成・ツール設定。CI/CD パイプラインへの統合設定。</div></li>
    <li><span className="step-num">5</span><div className="step-content"><div className="step-title">実行（Execution）</div>テスト実施・結果記録・証拠収集。スクリーンショット・ログ・HAR ファイル等のエビデンス取得。</div></li>
    <li><span className="step-num">6</span><div className="step-content"><div className="step-title">評価（Evaluation）</div>発見した脆弱性の評価・CVSS スコア算出。優先度付け（Critical → High → Medium → Low）。</div></li>
    <li><span className="step-num">7</span><div className="step-content"><div className="step-title">クロージャー（Closure）</div>レポート作成・脆弱性クローズ・教訓の記録。次のテストサイクルへのフィードバック。</div></li>
  </ol>

  <h3 className="sub-title">3.2 データ保護テスト（暗号化・鍵管理）</h3>
  <div className="code-block" data-lang="bash">
<div className="code-line"><span className="code-comment"># TLS 設定テスト（弱い暗号の確認）</span></div>
<div className="code-line"><span className="code-comment"># TLS 1.0 が無効であれば接続エラーになる（これが正しい状態）</span></div>
<div className="code-line">openssl s_client <span className="code-keyword">-connect</span> example.com:443 <span className="code-keyword">-tls1</span></div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-comment"># Qualys SSL Labs での評価（Grade A 以上が目標）</span></div>
<div className="code-line"><span className="code-comment"># https://www.ssllabs.com/ssltest/analyze.html?d=example.com</span></div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-comment"># ハードコードされた秘密情報の検索（Gitleaks）</span></div>
<div className="code-line">gitleaks detect --source=. --report-format=json <span className="code-keyword">--report-path</span>=gitleaks-report.json</div>
  </div>

  <div className="compare-grid">
    <div className="compare-box bad">
      <div className="compare-label">❌ 不適切なパスワードハッシュ</div>
      <p><code>MD5</code>、<code>SHA-1</code>、<code>SHA-256</code> をパスワード用途に使用（レインボーテーブル攻撃に脆弱）</p>
    </div>
    <div className="compare-box good">
      <div className="compare-label">✅ 適切なパスワードハッシュ</div>
      <p><code>bcrypt</code>、<code>Argon2</code>、<code>scrypt</code> を使用（コスト因数付きハッシュで耐性を確保）</p>
    </div>
  </div>
</section>

{/* CHAPTER 4 */}
<section id="ch4">
  <div className="section-header">
    <span className="chapter-num">Ch.4</span>
    <span className="k-badge">K2</span>
    <h2 className="section-title">標準・ベストプラクティス</h2>
  </div>

  <h3 className="sub-title">4.1 主要セキュリティ標準・フレームワーク</h3>
  <div className="arch-layers">
    <div className="arch-layer green"><span className="arch-icon">🏛️</span><div className="arch-content"><div className="arch-title">ISO/IEC 27001:2022 — ISMS</div><div className="arch-desc">情報セキュリティ管理システムの国際標準。セキュリティコントロールの計画・実装・運用・改善のフレームワーク。</div></div></div>
    <div className="arch-layer cyan"><span className="arch-icon">🇺🇸</span><div className="arch-content"><div className="arch-title">NIST SP 800-207 — Zero Trust Architecture</div><div className="arch-desc">ゼロトラストの公式定義と実装ガイドライン。PEP・PDP・インフラストラクチャの3コンポーネントを定義。</div></div></div>
    <div className="arch-layer amber"><span className="arch-icon">🔓</span><div className="arch-content"><div className="arch-title">OWASP Top 10:2025 — Webセキュリティリスク</div><div className="arch-desc">最重要 Web セキュリティリスク Top 10。定期的に更新される業界標準。テストケース設計の基準として活用。</div></div></div>
    <div className="arch-layer purple"><span className="arch-icon">💳</span><div className="arch-content"><div className="arch-title">PCI DSS v4.0 — 支払いカードセキュリティ</div><div className="arch-desc">カードデータを処理する組織向け。四半期ごとの外部脆弱性スキャン・年次ペンテストを義務化。</div></div></div>
    <div className="arch-layer red"><span className="arch-icon">🔬</span><div className="arch-content"><div className="arch-title">OWASP ASVS — アプリセキュリティ検証標準</div><div className="arch-desc">Webアプリのセキュリティテスト要件を3つのレベル（L1-L3）で定義。テスト設計の詳細な拠り所。</div></div></div>
  </div>

  <h3 className="sub-title">4.2 CVE と CVSS（試験頻出！）</h3>
  <p><strong>CVE（Common Vulnerabilities and Exposures）：</strong> 公知の脆弱性に一意の識別子を付与する国際標準。命名規則：<code>CVE-[年度]-[通番]</code>（例：<code>CVE-2021-44228</code>）</p>

  <h3 className="sub-title">CVSS v3.1 スコアと対応アクション</h3>
  <div className="pyramid">
    <div className="pyramid-level l1">🔴 Critical（9.0〜10.0）— 即時修正（48時間以内）</div>
    <div className="pyramid-level l2">🟡 High（7.0〜8.9）— 優先修正（1週間以内）</div>
    <div className="pyramid-level l3">🔵 Medium（4.0〜6.9）— 計画的修正（1ヶ月以内）</div>
    <div className="pyramid-level l4">🟢 Low（0.1〜3.9）— スケジュール修正</div>
    <div className="pyramid-level l5">⬛ None（0.0）— 対応不要</div>
  </div>

  <div className="card">
    <p><strong>CVSS v3.1 スコア計算要素：</strong></p>
    <div className="table-wrap">
      <table>
        <thead><tr><th>評価軸</th><th>値の選択肢</th><th>スコアへの影響</th></tr></thead>
        <tbody>
          <tr><td>攻撃経路（AV）</td><td>Network / Adjacent / Local / Physical</td><td>Network = 最高リスク</td></tr>
          <tr><td>攻撃の複雑さ（AC）</td><td>Low / High</td><td>Low = 攻撃が容易</td></tr>
          <tr><td>必要な権限（PR）</td><td>None / Low / High</td><td>None = 権限不要</td></tr>
          <tr><td>ユーザー操作（UI）</td><td>None / Required</td><td>None = 操作不要</td></tr>
          <tr><td>機密性（C）</td><td>None / Low / High</td><td>High = 深刻な影響</td></tr>
          <tr><td>完全性（I）</td><td>None / Low / High</td><td>High = 深刻な影響</td></tr>
          <tr><td>可用性（A）</td><td>None / Low / High</td><td>High = 深刻な影響</td></tr>
        </tbody>
      </table>
    </div>
    <div className="alert red">
      <strong>Log4Shell（CVE-2021-44228）の例：</strong> AV:Network + AC:Low + PR:None + UI:None + C:High + I:High + A:High → CVSS <strong>10.0（Critical 最大値）</strong>
    </div>
  </div>

  <h3 className="sub-title">4.3 標準・ベストプラクティスの限界</h3>
  <div className="compare-grid">
    <div className="compare-box good">
      <div className="compare-label">✅ 標準活用の利点</div>
      <p>業界で認められた判断基準の提供。コンプライアンス要件の証明が容易。見落としの防止（体系的なカバレッジ）。ステークホルダーへの説明が容易。</p>
    </div>
    <div className="compare-box bad">
      <div className="compare-label">❌ 標準の限界</div>
      <p>最新の脅威に追いつけない場合がある。組織・プロジェクト固有のリスクを見逃す可能性。ゼロデイ脆弱性は標準に含まれない。過度な依存でクリエイティブな攻撃視点を失う。</p>
    </div>
  </div>
</section>

{/* CHAPTER 5 */}
<section id="ch5">
  <div className="section-header">
    <span className="chapter-num">Ch.5</span>
    <span className="k-badge">K3</span>
    <h2 className="section-title">組織コンテキストへの適応</h2>
  </div>

  <h3 className="sub-title">5.1 組織構造とセキュリティテスト</h3>
  <div className="arch-layers">
    <div className="arch-layer green"><span className="arch-icon">🏢</span><div className="arch-content"><div className="arch-title">中央集権型（Centralized）</div><div className="arch-desc">統一された標準でテストを実施。組織全体コンプライアンスを一元管理。ただし各ビジネスユニットの特殊なリスクを見逃す可能性あり。</div></div></div>
    <div className="arch-layer cyan"><span className="arch-icon">🌐</span><div className="arch-content"><div className="arch-title">分散型（Decentralized）</div><div className="arch-desc">部門固有のリスクに対応したテストが可能。ただし組織全体の一貫性が取りにくく、テスト基準・ツールの統一が難しい。</div></div></div>
    <div className="arch-layer amber"><span className="arch-icon">⚡</span><div className="arch-content"><div className="arch-title">アジャイル / DevSecOps</div><div className="arch-desc">CI/CD パイプラインへのセキュリティテスト統合。シフトレフトアプローチの実践。高速なリリースに合わせたテスト設計が必要。</div></div></div>
  </div>

  <h3 className="sub-title">5.2 主要規制とセキュリティテスト要件</h3>
  <div className="table-wrap">
    <table>
      <thead><tr><th>規制</th><th>適用範囲</th><th>セキュリティテスト要件</th><th>違反時の制裁</th></tr></thead>
      <tbody>
        <tr>
          <td><span className="tag cyan">GDPR</span></td>
          <td>EUの個人データを処理する全組織</td>
          <td>個人データの暗号化テスト・データアクセス制御・データ削除機能・データ侵害通知フロー（72時間以内報告）</td>
          <td>最大 2,000万ユーロ または年間売上高の4%</td>
        </tr>
        <tr>
          <td><span className="tag amber">PCI DSS v4.0</span></td>
          <td>カードデータを保存・処理・送信する組織</td>
          <td>四半期ごとの外部脆弱性スキャン・年次ペンテスト・ネットワーク分離テスト</td>
          <td>フランチャイズ停止・多額の罰金</td>
        </tr>
        <tr>
          <td><span className="tag green">個人情報保護法（日本）</span></td>
          <td>個人情報を取り扱う事業者</td>
          <td>アクセス制御（目的外利用防止）・安全管理措置・漏洩報告体制</td>
          <td>懲役または罰金</td>
        </tr>
        <tr>
          <td><span className="tag purple">ISO 27001</span></td>
          <td>ISO 27001 認証組織</td>
          <td>定期的な内部監査・外部監査・リスク評価に基づくテスト計画</td>
          <td>認証剥奪</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 className="sub-title">5.3 攻撃シナリオ分析（フィッシング攻撃の例）</h3>
  <div className="code-block" data-lang="scenario">
<div className="code-line"><span className="code-green">== 攻撃シナリオ分析：スピアフィッシング攻撃 ==</span></div>
<div className="code-line">&nbsp;</div>
<div className="code-line">脅威アクター：外部サイバー犯罪者</div>
<div className="code-line">攻撃ベクトル：偽の VPN ログインページ</div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-amber">攻撃フロー（MITRE ATT&amp;CK ベース）：</span></div>
<div className="code-line">① <span className="code-cyan">Reconnaissance</span>  ：OSINT で標的の名前・メール・役職を SNS から収集</div>
<div className="code-line">② <span className="code-cyan">Phishing</span>        ：VPN ログインページを模したフィッシングサイトへ誘導</div>
<div className="code-line">③ <span className="code-cyan">Credential Access</span>：入力された ID/パスワードを攻撃者サーバーへ送信</div>
<div className="code-line">④ <span className="code-cyan">Initial Access</span>  ：収集した認証情報で VPN にログイン</div>
<div className="code-line">⑤ <span className="code-cyan">Lateral Movement</span>：内部ネットワークで権限昇格・データ窃取</div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-green">== 導出されるセキュリティテスト ==</span></div>
<div className="code-line">✓ フィッシングメールの訓練テスト</div>
<div className="code-line">✓ 多要素認証（MFA）の有効性テスト</div>
<div className="code-line">✓ 異常なアクセス（通常と異なる場所・時刻）の検知テスト</div>
<div className="code-line">✓ 内部ネットワークの横移動防止テスト（ゼロトラスト）</div>
  </div>
</section>

{/* CHAPTER 6 */}
<section id="ch6">
  <div className="section-header">
    <span className="chapter-num">Ch.6</span>
    <span className="k-badge">K3</span>
    <h2 className="section-title">SDLCモデルへの適応</h2>
  </div>

  <h3 className="sub-title">6.1 各 SDLC モデルとセキュリティテスト統合</h3>
  <div className="table-wrap">
    <table>
      <thead><tr><th>SDLCモデル</th><th>セキュリティテストの位置</th><th>推奨ツール/技法</th><th>主な特徴</th></tr></thead>
      <tbody>
        <tr><td><span className="tag amber">ウォーターフォール</span></td><td>テストフェーズ（後期）</td><td>DAST・ペンテスト（テストフェーズ）<br />脅威モデリング（要件フェーズ）</td><td>遅すぎる発見 = 高い修正コスト</td></tr>
        <tr><td><span className="tag cyan">アジャイル（Scrum）</span></td><td>各スプリント内</td><td>SAST・SCA（スプリント中）<br />Definition of Done にセキュリティを含める</td><td>早期発見・早期修正が可能</td></tr>
        <tr><td><span className="tag green">DevOps / DevSecOps</span></td><td>CI/CD パイプライン全体</td><td>SAST → SCA → ビルド → DAST → デプロイ</td><td>最もシフトレフトされたアプローチ</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="sub-title">DevSecOps: CI/CD パイプライン統合例</h3>
  <div className="code-block" data-lang="yaml">
<div className="code-line">name: Security Testing Pipeline</div>
<div className="code-line">on: [push, pull_request]</div>
<div className="code-line">&nbsp;</div>
<div className="code-line">jobs:</div>
<div className="code-line">  security:</div>
<div className="code-line">    runs-on: ubuntu-latest</div>
<div className="code-line">    steps:</div>
<div className="code-line">      - uses: <span className="code-string">actions/checkout@v4</span></div>
<div className="code-line">&nbsp;</div>
<div className="code-line">      <span className="code-comment"># ① SAST — ソースコード静的解析</span></div>
<div className="code-line">      - name: SAST (Semgrep)</div>
<div className="code-line">        run: semgrep <span className="code-keyword">--config=auto</span> <span className="code-keyword">--json</span> <span className="code-keyword">-o</span> sast-results.json .</div>
<div className="code-line">&nbsp;</div>
<div className="code-line">      <span className="code-comment"># ② SCA — 依存関係脆弱性スキャン</span></div>
<div className="code-line">      - name: SCA (Snyk)</div>
<div className="code-line">        run: snyk test <span className="code-keyword">--json</span> &gt; sca-results.json</div>
<div className="code-line">&nbsp;</div>
<div className="code-line">      <span className="code-comment"># ③ コンテナスキャン</span></div>
<div className="code-line">      - name: Container Scan (Trivy)</div>
<div className="code-line">        run: trivy image myapp:latest <span className="code-keyword">--format</span> json &gt; container-scan.json</div>
<div className="code-line">&nbsp;</div>
<div className="code-line">      <span className="code-comment"># ④ DAST — 動的アプリケーションスキャン</span></div>
<div className="code-line">      - name: DAST (OWASP ZAP)</div>
<div className="code-line">        run: docker run owasp/zap2docker-stable <span className="code-green">zap-baseline.py</span></div>
<div className="code-line">             <span className="code-keyword">-t</span> http://app-staging-url</div>
<div className="code-line">&nbsp;</div>
<div className="code-line">      <span className="code-comment"># セキュリティゲート: Critical 脆弱性でビルドを止める</span></div>
<div className="code-line">      - name: Security Gate</div>
<div className="code-line">        run: <span className="code-keyword">if</span> jq <span className="code-string">{`'.vulnerabilities[] | select(.severity=="CRITICAL")'`}</span></div>
<div className="code-line">             sca-results.json | grep -q .; <span className="code-keyword">then</span> exit 1; <span className="code-keyword">fi</span></div>
  </div>
</section>

{/* CHAPTER 7 */}
<section id="ch7">
  <div className="section-header">
    <span className="chapter-num">Ch.7</span>
    <span className="k-badge">K2–K3</span>
    <h2 className="section-title">ISMSの一部としてのセキュリティテスト</h2>
  </div>

  <h3 className="sub-title">7.1 ISMS における PDCA と セキュリティテスト</h3>
  <div className="pyramid">
    <div className="pyramid-level l1" style={{ width: '100%' }}>📋 Plan — リスク評価に基づくセキュリティテスト計画・スコープ・目標・基準の定義</div>
    <div className="pyramid-level l2" style={{ width: '95%' }}>🔬 Do — セキュリティテストの実行・脆弱性の発見・記録・証拠収集</div>
    <div className="pyramid-level l3" style={{ width: '85%' }}>📊 Check — テスト結果の分析・CVSS スコアによる優先度付け・評価</div>
    <div className="pyramid-level l4" style={{ width: '75%' }}>✅ Act — 脆弱性の修正・コントロール強化・ISMS の継続的改善・次サイクルへの反映</div>
  </div>

  <h3 className="sub-title">7.2 セキュリティテストの受け入れ基準（リリース前）</h3>
  <div className="card">
    <ul className="checklist">
      <li className="ok"><span className="check-icon">✅</span><strong>Critical（CVSS 9.0+）：0 件</strong>（リリースブロッカー — 必ず修正）</li>
      <li className="ok"><span className="check-icon">✅</span><strong>High（CVSS 7.0〜8.9）：0 件</strong>（または修正計画必須）</li>
      <li className="warn"><span className="check-icon">⚠️</span><strong>Medium（CVSS 4.0〜6.9）：3 件以下</strong>（修正計画あり）</li>
      <li className="ok"><span className="check-icon">✅</span>全認証エンドポイントの MFA 動作確認：<strong>100%</strong></li>
      <li className="ok"><span className="check-icon">✅</span>SSL/TLS 設定スキャン：<strong>Grade A 以上</strong></li>
      <li className="ok"><span className="check-icon">✅</span>既知 CVE を持つ依存ライブラリ：<strong>0 件</strong></li>
      <li className="ok"><span className="check-icon">✅</span>OWASP Top 10 の自動スキャン：<strong>全テスト通過</strong></li>
    </ul>
  </div>

  <h3 className="sub-title">7.3 ISMS 継続的改善の具体例</h3>
  <div className="arch-layers">
    <div className="arch-layer green"><span className="arch-icon">🔑</span><div className="arch-content"><div className="arch-title">例1：認証テストで弱点発見 → ISMS改善</div><div className="arch-desc">発見：ブルートフォースに対するアカウントロックなし → リスクレジスター更新 → セキュリティポリシー更新（ロックアウトポリシー追加） → アカウントロックアウト機能実装 → 次サイクルで再テスト</div></div></div>
    <div className="arch-layer cyan"><span className="arch-icon">🔐</span><div className="arch-content"><div className="arch-title">例2：暗号化テストで弱点発見 → ISMS改善</div><div className="arch-desc">発見：一部の API が HTTPS を強制していない → HSTS ポリシーを全エンドポイントに適用する要件を追加 → セキュリティ設定レビューのチェックリスト更新 → 開発ガイドラインに HTTPS 強制を明記</div></div></div>
    <div className="arch-layer amber"><span className="arch-icon">📋</span><div className="arch-content"><div className="arch-title">例3：ログ監査テストで弱点発見 → ISMS改善</div><div className="arch-desc">発見：失敗したログイン試行が記録されていない → 監査ログ要件を更新（全認証イベントの記録を義務化） → SIEM のアラートルールを追加 → セキュリティ意識向上トレーニングに追加</div></div></div>
  </div>
</section>

{/* CHAPTER 8 */}
<section id="ch8">
  <div className="section-header">
    <span className="chapter-num">Ch.8</span>
    <span className="k-badge">K3</span>
    <h2 className="section-title">テスト結果の報告</h2>
  </div>

  <h3 className="sub-title">8.1 セキュリティテストレポートの構成</h3>
  <div className="arch-layers">
    <div className="arch-layer green"><span className="arch-icon">①</span><div className="arch-content"><div className="arch-title">エグゼクティブサマリー（1〜2ページ）</div><div className="arch-desc">非技術者向け。ビジネスインパクトを重点説明。総合リスク評価・主要な発見事項（Top3〜5問題）・推奨アクション。</div></div></div>
    <div className="arch-layer cyan"><span className="arch-icon">②</span><div className="arch-content"><div className="arch-title">テストスコープと方法論</div><div className="arch-desc">テスト対象・実施期間・使用ツール・アプローチ（BB/WB/GB）・テストチームの概要。</div></div></div>
    <div className="arch-layer amber"><span className="arch-icon">③</span><div className="arch-content"><div className="arch-title">重要な発見事項（Executive Findings）</div><div className="arch-desc">発見した脆弱性の分布グラフ（重大度別）。最重要リスクのサマリー。ビジネス影響の説明。</div></div></div>
    <div className="arch-layer purple"><span className="arch-icon">④</span><div className="arch-content"><div className="arch-title">技術的詳細レポート（脆弱性ごとの詳細）</div><div className="arch-desc">発見した全脆弱性の詳細情報。再現手順・CVSS スコア・CWE・OWASP カテゴリ・影響・推奨対策。証拠（スクリーンショット・ログ）。</div></div></div>
    <div className="arch-layer red"><span className="arch-icon">⑤</span><div className="arch-content"><div className="arch-title">推奨アクションと修正ロードマップ</div><div className="arch-desc">優先度順（Critical → High → Medium → Low）の修正計画。担当者・期限・対策内容を明記。</div></div></div>
  </div>

  <h3 className="sub-title">個別脆弱性レポート — 必須要素</h3>
  <div className="code-block" data-lang="template">
<div className="code-line"><span className="code-green">脆弱性ID:</span>     VULN-2025-042</div>
<div className="code-line"><span className="code-green">タイトル:</span>     注文 API の IDOR（Insecure Direct Object Reference）</div>
<div className="code-line"><span className="code-green">発見日:</span>       2025/04/02</div>
<div className="code-line"><span className="code-green">重大度:</span>       <span className="code-amber">High（CVSS v3.1: 7.5）</span></div>
<div className="code-line"><span className="code-green">CWE:</span>          CWE-639（Authorization Bypass Through User-Ctrl Key）</div>
<div className="code-line"><span className="code-green">OWASP:</span>        A01:2025 — Broken Access Control</div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-cyan">【詳細説明】</span></div>
<div className="code-line">注文取得 API（GET /api/orders/{'{'}orderId{'}'}）において、orderId パラメータに</div>
<div className="code-line">任意の値を設定することで、他のユーザーの注文情報にアクセスできる状態。</div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-cyan">【再現手順】</span></div>
<div className="code-line">1. ユーザーA でログイン</div>
<div className="code-line">2. GET /api/orders/<span className="code-green">1001</span> → 200 OK（自分の注文情報）</div>
<div className="code-line">3. GET /api/orders/<span className="code-red">1002</span> → 200 OK（ユーザーBの注文情報！）</div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-cyan">【影響】</span></div>
<div className="code-line">顧客の個人情報（住所・電話番号）・購入履歴・支払い方法の漏洩</div>
<div className="code-line">GDPR・個人情報保護法違反のリスク</div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-cyan">【推奨対策】</span></div>
<div className="code-line">注文取得 API に認可チェックを追加。</div>
<div className="code-line">リクエストユーザーが注文の所有者であることを確認。</div>
<div className="code-line">&nbsp;</div>
<div className="code-line"><span className="code-cyan">【証拠】</span></div>
<div className="code-line">[スクリーンショット: screenshot_vuln042_idor.png]</div>
<div className="code-line">[Burp Suite リクエスト: request_vuln042.xml]</div>
  </div>

  <h3 className="sub-title">8.2 脆弱性ライフサイクル（クローズまでの流れ）</h3>
  <div className="arch-layers">
    <div className="arch-layer green"><span className="arch-icon">🆕</span><div className="arch-content"><div className="arch-title">Open（新規）→ Assigned（割り当て済み）</div><div className="arch-desc">テスターが脆弱性を発見・報告。開発者にアサイン。CVSS スコアに基づき優先度を設定。</div></div></div>
    <div className="arch-layer amber"><span className="arch-icon">🔧</span><div className="arch-content"><div className="arch-title">In Progress（修正中）→ Ready for Verification（確認待ち）</div><div className="arch-desc">開発者が原因分析・修正実施。修正完了後にテスターへ確認テストを依頼。</div></div></div>
    <div className="arch-layer cyan"><span className="arch-icon">✅</span><div className="arch-content"><div className="arch-title">Verified / Closed（クローズ）または Reopened（再オープン）</div><div className="arch-desc">テスターが修正確認テストを実施。修正 OK → クローズ。修正不十分・新たな問題発生 → 再オープン。</div></div></div>
    <div className="arch-layer purple"><span className="arch-icon">📌</span><div className="arch-content"><div className="arch-title">特殊ステータス</div><div className="arch-desc">Accepted Risk（リスク受容）/ Deferred（延期）/ False Positive（誤検知）— それぞれ理由と承認者を記録が必要。</div></div></div>
  </div>

  <div className="callout danger">
    <div className="callout-title">⚠️ リスク受容（Risk Acceptance）の注意</div>
    <p>Critical / High 脆弱性の受容は<strong>経営層の明示的な承認が必要</strong>。PCI DSS 等の規制要件がある場合は受容自体が不可能。セキュリティテストエンジニアは「ビジネスが受け入れるリスク」であっても適切なエスカレーションを行う責任がある。</p>
  </div>
</section>

{/* CHAPTER 9 */}
<section id="ch9">
  <div className="section-header">
    <span className="chapter-num">Ch.9</span>
    <span className="k-badge">K2–K3</span>
    <h2 className="section-title">セキュリティテストツール</h2>
  </div>

  <h3 className="sub-title">9.1 セキュリティテストツール 10カテゴリ</h3>
  <div className="table-wrap">
    <table>
      <thead><tr><th>#</th><th>カテゴリ</th><th>代表ツール</th><th>主な用途</th></tr></thead>
      <tbody>
        <tr><td><span className="tag green">1</span></td><td>脆弱性スキャナー</td><td>OpenVAS・Nessus・Qualys</td><td>定期的スキャン・コンプライアンス確認</td></tr>
        <tr><td><span className="tag cyan">2</span></td><td>Webアプリスキャナー</td><td>OWASP ZAP・Burp Suite・Nikto</td><td>OWASP Top 10 脆弱性の自動検出</td></tr>
        <tr><td><span className="tag amber">3</span></td><td>SAST ツール</td><td>Checkmarx・SonarQube・Semgrep・Bandit</td><td>CI/CD 統合・コードレビュー</td></tr>
        <tr><td><span className="tag purple">4</span></td><td>SCA ツール</td><td>Snyk・OWASP Dependency-Check・Dependabot</td><td>OSS 依存関係の CVE チェック</td></tr>
        <tr><td><span className="tag red">5</span></td><td>ペンテストフレームワーク</td><td>Metasploit・Cobalt Strike</td><td>手動ペンテスト・Red Team</td></tr>
        <tr><td><span className="tag cyan">6</span></td><td>プロキシ・インターセプト</td><td>Burp Suite（プロキシモード）・OWASP ZAP</td><td>手動 Web アプリテスト・HTTP 傍受</td></tr>
        <tr><td><span className="tag green">7</span></td><td>ネットワークスキャナー</td><td>Nmap・Masscan</td><td>ポートスキャン・サービス検出</td></tr>
        <tr><td><span className="tag amber">8</span></td><td>パスワードテストツール</td><td>John the Ripper・Hashcat・Hydra</td><td>認証強度テスト（許可された環境のみ！）</td></tr>
        <tr><td><span className="tag purple">9</span></td><td>フォレンジック・ログ分析</td><td>Wireshark・Splunk・Elastic SIEM</td><td>インシデント調査・証拠収集</td></tr>
        <tr><td><span className="tag red">10</span></td><td>クラウドセキュリティスキャナー</td><td>Scout Suite・Prowler・Checkov</td><td>AWS/Azure/GCP 設定監査・IaC スキャン</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="sub-title">9.2 ツール選定フレームワーク</h3>
  <ol className="step-list">
    <li><span className="step-num">1</span><div className="step-content"><div className="step-title">ニーズの特定</div>何をテストしたいか（Web アプリ・ネットワーク・コード等）。テストの目的（コンプライアンス・脆弱性発見・定期監視）。どのフェーズで使用するか（開発中・テスト時・本番後）。</div></li>
    <li><span className="step-num">2</span><div className="step-content"><div className="step-title">ツール要件の定義</div>対応する技術スタック（Python / Java / .NET・REST / GraphQL 等）。CI/CD 統合要件（GitHub Actions・Jenkins 等との互換性）。レポート形式（SARIF・HTML・JSON 等）。ライセンス要件（OSS vs 商用・予算）。</div></li>
    <li><span className="step-num">3</span><div className="step-content"><div className="step-title">ツール評価（POC）</div>既知の脆弱性環境（DVWA・WebGoat 等）で検知率・誤検知率を評価。使用難易度・学習コストの評価。チームのスキルレベルとの適合性確認。</div></li>
    <li><span className="step-num">4</span><div className="step-content"><div className="step-title">ツールの適用・維持</div>CI/CD パイプラインへの統合（自動化）。セキュリティゲート（Security Gate）の設定。脆弱性シグネチャの定期更新。誤検知（False Positive）のホワイトリスト化による管理。</div></li>
  </ol>

  <div className="callout warning">
    <div className="callout-title">⚠️ 誤検知（False Positive）管理の重要性</div>
    <p>自動ツール（特に SAST）は誤検知が多い。誤検知を精査してホワイトリスト化しないと、「ノイズの多いアラートは無視されるようになる」というアラート疲れが発生し、実際の脆弱性を見逃すリスクがある。<strong>手動テスト・専門家のレビューと組み合わせることが必須。</strong></p>
  </div>
</section>

{/* EXAM TIPS */}
<section id="exam">
  <div className="section-header">
    <span className="chapter-num">試験</span>
    <h2 className="section-title">試験対策・サンプル問題</h2>
  </div>

  <h3 className="sub-title">必ず覚える重要概念チェックリスト</h3>
  <div className="card">
    <ul className="checklist">
      <li className="ok"><span className="check-icon">✅</span><strong>CT-STE vs CT-SEC の違い：</strong>CT-STE（2025年1月）は実践的実行・CTFL のみ・最新内容。CT-SEC（2016年）は役割複合的・3年実務経験要・廃止予定。自動移行なし。</li>
      <li className="ok"><span className="check-icon">✅</span><strong>資産感度と CIA の対応：</strong>低感度→可用性 / 中感度→完全性 / 高感度→機密性</li>
      <li className="ok"><span className="check-icon">✅</span><strong>ゼロトラストの核心：</strong>「Never Trust, Always Verify」。PEP・PDP・インフラストラクチャの3コンポーネント。NIST SP 800-207 の7原則。</li>
      <li className="ok"><span className="check-icon">✅</span><strong>OSS のセキュリティリスクとテスト：</strong>SCA ツール・SBOM・推移的依存関係のチェック。Log4Shell（CVSS 10.0）は典型例。</li>
      <li className="ok"><span className="check-icon">✅</span><strong>セキュリティテストの知識レベル別分類：</strong>ブラックボックス（外部・情報なし）/ グレーボックス（部分的情報・認証済み） / ホワイトボックス（完全情報・内部視点）</li>
      <li className="ok"><span className="check-icon">✅</span><strong>静的 vs 動的テスト：</strong>静的：SAST・SCA・設定レビュー / 動的：DAST・IAST・ペンテスト・ファジング</li>
      <li className="ok"><span className="check-icon">✅</span><strong>AAA フレームワーク：</strong>Authentication（認証）・Authorization（認可）・Accounting（記録）</li>
      <li className="ok"><span className="check-icon">✅</span><strong>CVSS スコアの4段階：</strong>Critical（9.0+）→ 48h以内 / High（7.0-8.9）→ 1週間 / Medium（4.0-6.9）→ 1ヶ月 / Low（0.1-3.9）→ スケジュール</li>
      <li className="ok"><span className="check-icon">✅</span><strong>ISMS の PDCA：</strong>Plan（テスト計画）→ Do（実行）→ Check（評価）→ Act（改善）</li>
      <li className="ok"><span className="check-icon">✅</span><strong>テストオラクルの限界：</strong>ゼロデイ・ビジネスロジック問題は対応困難。手動テストと組み合わせが必須。</li>
      <li className="ok"><span className="check-icon">✅</span><strong>セキュリティテストツール10カテゴリ：</strong>脆弱性スキャナー・Webアプリスキャナー・SAST・SCA・ペンテストFW・プロキシ・ネットワーク・パスワード・フォレンジック・クラウド</li>
      <li className="ok"><span className="check-icon">✅</span><strong>脆弱性ライフサイクル：</strong>Open → Assigned → In Progress → Ready for Verification → Closed / Reopened</li>
    </ul>
  </div>

  <h3 className="sub-title">進捗確認（章別学習度）</h3>
  <div className="progress-item">
    <div className="progress-header"><span className="progress-label">Ch.1 セキュリティパラダイム</span><span className="progress-val">★★★★★</span></div>
    <div className="progress-track"><div className="progress-fill"></div></div>
  </div>
  <div className="progress-item">
    <div className="progress-header"><span className="progress-label">Ch.2 セキュリティテスト技法</span><span className="progress-val">★★★★★</span></div>
    <div className="progress-track"><div className="progress-fill"></div></div>
  </div>
  <div className="progress-item">
    <div className="progress-header"><span className="progress-label">Ch.3 セキュリティテストプロセス</span><span className="progress-val">★★★★☆</span></div>
    <div className="progress-track"><div className="progress-fill"></div></div>
  </div>
  <div className="progress-item">
    <div className="progress-header"><span className="progress-label">Ch.4 標準・ベストプラクティス（CVSS）</span><span className="progress-val">★★★★★</span></div>
    <div className="progress-track"><div className="progress-fill"></div></div>
  </div>
  <div className="progress-item">
    <div className="progress-header"><span className="progress-label">Ch.5–6 組織・SDLC</span><span className="progress-val">★★★★☆</span></div>
    <div className="progress-track"><div className="progress-fill"></div></div>
  </div>
  <div className="progress-item">
    <div className="progress-header"><span className="progress-label">Ch.7–8 ISMS・報告</span><span className="progress-val">★★★★☆</span></div>
    <div className="progress-track"><div className="progress-fill"></div></div>
  </div>
  <div className="progress-item">
    <div className="progress-header"><span className="progress-label">Ch.9 ツール</span><span className="progress-val">★★★☆☆</span></div>
    <div className="progress-track"><div className="progress-fill"></div></div>
  </div>

  <h3 className="sub-title">サンプル問題 Q1</h3>
  <div className="sample-q">
    <div className="q-meta">K2 / Chapter 1 — ゼロトラスト</div>
    <div className="q-stem">ゼロトラストアーキテクチャの核心原則として最も適切なものはどれか？</div>
    <ul className="q-options">
      <li><span className="opt-letter">A</span>社内ネットワーク内のユーザーは信頼できるため、認証チェックを省略できる</li>
      <li className="correct"><span className="opt-letter">B</span>ネットワーク上の位置や所有権に関係なく、全アクセスを継続的に検証・認可する</li>
      <li><span className="opt-letter">C</span>ファイアウォールで外部を遮断することで内部は安全が保証される</li>
      <li><span className="opt-letter">D</span>一度認証されたユーザーはセッション中は常に信頼される</li>
    </ul>
    <div className="q-explanation">✅ <strong>正解: B</strong> — ゼロトラストの核心は「Never Trust, Always Verify」。NIST SP 800-207 は「物理的またはネットワーク上の位置のみに基づいた暗黙の信頼を与えない」と定義。A・C は従来の境界モデルであり、D はセッション中の継続的信頼もゼロトラストに反する。</div>
  </div>

  <div className="sample-q">
    <div className="q-meta">K3 / Chapter 1 — 資産セキュリティレベル</div>
    <div className="q-stem">医療システムのアーキテクトから、以下のデータ種別に対するセキュリティテストの優先度について助言を求められた。正しい対応はどれか？<br />・データA：公開されている医療施設の住所・電話番号<br />・データB：患者の診療記録・病歴情報<br />・データC：院内の診療スケジュール（内部用）</div>
    <ul className="q-options">
      <li><span className="opt-letter">A</span>全て同等のセキュリティテストを実施する</li>
      <li><span className="opt-letter">B</span>データA（高感度）、データB（中感度）、データC（低感度）の順で優先</li>
      <li className="correct"><span className="opt-letter">C</span>データB（高感度）を最優先、データC（中感度）を次、データA（低感度）はテスト最小限</li>
      <li><span className="opt-letter">D</span>データC（高感度）を最優先、データB（中感度）、データA（低感度）の順で優先</li>
    </ul>
    <div className="q-explanation">✅ <strong>正解: C</strong> — 患者の診療記録（データB）は個人の機密医療情報 → 高感度 → 最優先テスト（HIPAA・個人情報保護法の対象）。院内スケジュール（データC）は内部限定 → 中感度。公開施設情報（データA）は公開情報 → 低感度。</div>
  </div>

  <div className="sample-q">
    <div className="q-meta">K2 / Chapter 2 — テスト種別</div>
    <div className="q-stem">テストチームが、認証システムのテストを実施している。テスターはログインユーザーとして認証された状態で、自分のアカウント以外の他ユーザーのデータへのアクセスを試みている。このテストアプローチはどれか？</div>
    <ul className="q-options">
      <li><span className="opt-letter">A</span>ブラックボックステスト</li>
      <li><span className="opt-letter">B</span>ホワイトボックステスト</li>
      <li className="correct"><span className="opt-letter">C</span>グレーボックステスト</li>
      <li><span className="opt-letter">D</span>静的セキュリティテスト</li>
    </ul>
    <div className="q-explanation">✅ <strong>正解: C</strong> — グレーボックステストは部分的な情報（認証情報・ユーザー権限レベル）を持った状態でテストする。この例では「認証済みユーザー」という部分的な情報を持って他ユーザーデータへのアクセス（IDOR）を試みている。ブラックボックスは認証情報なし、ホワイトボックスはソースコード等の完全な内部情報あり、静的テストは実行せずにコードを分析する（この例は動的）。</div>
  </div>

  <div className="sample-q">
    <div className="q-meta">K3 / Chapter 4 — CVSS</div>
    <div className="q-stem">脆弱性スキャンで以下の脆弱性が発見された。深刻度の分類として最も適切なものはどれか？<br />攻撃経路:Network / 攻撃の複雑さ:Low / 必要な権限:None / ユーザー操作:None / 機密性:High / 完全性:None / 可用性:None</div>
    <ul className="q-options">
      <li><span className="opt-letter">A</span>Low（0.1〜3.9）</li>
      <li><span className="opt-letter">B</span>Medium（4.0〜6.9）</li>
      <li className="correct"><span className="opt-letter">C</span>High（7.0〜8.9）</li>
      <li><span className="opt-letter">D</span>Critical（9.0〜10.0）</li>
    </ul>
    <div className="q-explanation">✅ <strong>正解: C</strong> — AV:N・AC:L・PR:N・UI:N は攻撃の容易さを示す（高リスク）。しかし機密性のみ High で完全性・可用性は None のため、CVSS スコアは約 7.5 となり High 範囲。Critical（9.0+）には通常 C:H・I:H・A:H の組み合わせが必要。</div>
  </div>

  <div className="sample-q">
    <div className="q-meta">K3 / Chapter 7 — ISMS・リスク受容</div>
    <div className="q-stem">セキュリティテストで Critical（CVSS 9.5）の脆弱性が発見された。プロダクトマネージャーから「リリースの遅延を避けるために、この脆弱性をリスク受容として処理したい」という要求があった。セキュリティテストエンジニアとして最も適切な対応はどれか？</div>
    <ul className="q-options">
      <li><span className="opt-letter">A</span>要求に従い、リスク受容として処理してリリースを進める</li>
      <li className="correct"><span className="opt-letter">B</span>Critical 脆弱性はリスク受容が許容されないため、修正が完了するまでリリースを阻止し、経営層に状況を報告する</li>
      <li><span className="opt-letter">C</span>修正は次のバージョンで行うとして、今回はリスクを文書化して延期にする</li>
      <li><span className="opt-letter">D</span>リスク受容の承認権限はプロダクトマネージャーにあるため、要求に従う</li>
    </ul>
    <div className="q-explanation">✅ <strong>正解: B</strong> — Critical（9.0+）脆弱性の受容は通常 ISMS ポリシーで禁止か、少なくとも経営層の明示的な承認が必要。プロダクトマネージャーはセキュリティ上の最終決定権限を持たない。データ侵害・法的責任・評判損失のリスクを経営層に報告し、最短での修正計画を支援することが正しい対応。</div>
  </div>
</section>

{/* REFERENCES */}
<section id="refs">
  <div className="section-header">
    <span className="chapter-num">参考</span>
    <h2 className="section-title">参考文献・URL一覧</h2>
  </div>

  <h3 className="sub-title">🏛️ 公式 ISTQB® リソース</h3>
  <div className="ref-grid">
    <a href="https://istqb.org/certifications/certified-tester-security-test-engineer/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ISTQB 公式</div>
      <div className="ref-title">CT-STE 認定ページ（公式）</div>
      <div className="ref-url">istqb.org/certifications/certified-tester-security-test-engineer/</div>
    </a>
    <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5103" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ISTQB 公式</div>
      <div className="ref-title">CT-STE シラバス v1.0.1 ダウンロード</div>
      <div className="ref-url">istqb.org — シラバス PDF（公式）</div>
    </a>
    <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5109" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ISTQB 公式</div>
      <div className="ref-title">サンプル試験問題 v1.0.1</div>
      <div className="ref-url">istqb.org — サンプル問題 PDF</div>
    </a>
    <a href="https://istqb.org/help/security-test-engineer-ste/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ISTQB 公式</div>
      <div className="ref-title">CT-STE FAQ（公式）</div>
      <div className="ref-url">istqb.org/help/security-test-engineer-ste/</div>
    </a>
    <a href="https://glossary.istqb.org/en_US/search?term=" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ISTQB 公式</div>
      <div className="ref-title">ISTQB グロッサリー</div>
      <div className="ref-url">glossary.istqb.org</div>
    </a>
    <a href="https://astqb.org/assets/documents/ISTQB_STE_v1.0.1-Syllabus.pdf" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ASTQB（米国）</div>
      <div className="ref-title">CT-STE シラバス PDF（ASTQB）</div>
      <div className="ref-url">astqb.org — STE_v1.0.1-Syllabus.pdf</div>
    </a>
  </div>

  <h3 className="sub-title">🏛️ OWASP 公式リソース</h3>
  <div className="ref-grid">
    <a href="https://owasp.org/Top10/2025/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">OWASP</div>
      <div className="ref-title">OWASP Top 10:2025（最新版）</div>
      <div className="ref-url">owasp.org/Top10/2025/</div>
    </a>
    <a href="https://owasp.org/www-project-web-security-testing-guide/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">OWASP</div>
      <div className="ref-title">OWASP Testing Guide v4.2（WSTG）</div>
      <div className="ref-url">owasp.org/www-project-web-security-testing-guide/</div>
    </a>
    <a href="https://owasp.org/www-project-application-security-verification-standard/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">OWASP</div>
      <div className="ref-title">OWASP ASVS（アプリセキュリティ検証標準）</div>
      <div className="ref-url">owasp.org/www-project-application-security-verification-standard/</div>
    </a>
    <a href="https://owasp.org/www-project-api-security/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">OWASP</div>
      <div className="ref-title">OWASP API Security Top 10:2023</div>
      <div className="ref-url">owasp.org/www-project-api-security/</div>
    </a>
    <a href="https://www.zaproxy.org/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">OWASP ツール</div>
      <div className="ref-title">OWASP ZAP（Webアプリセキュリティスキャナー）</div>
      <div className="ref-url">zaproxy.org</div>
    </a>
    <a href="https://owasp.org/www-project-dependency-check/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">OWASP ツール</div>
      <div className="ref-title">OWASP Dependency-Check（SCA）</div>
      <div className="ref-url">owasp.org/www-project-dependency-check/</div>
    </a>
  </div>

  <h3 className="sub-title">📋 セキュリティ標準・フレームワーク</h3>
  <div className="ref-grid">
    <a href="https://csrc.nist.gov/pubs/sp/800/207/final" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">NIST 標準</div>
      <div className="ref-title">NIST SP 800-207 — Zero Trust Architecture</div>
      <div className="ref-url">csrc.nist.gov/pubs/sp/800/207/final</div>
    </a>
    <a href="https://csrc.nist.gov/pubs/sp/800/115/final" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">NIST 標準</div>
      <div className="ref-title">NIST SP 800-115 — IT セキュリティテストと評価</div>
      <div className="ref-url">csrc.nist.gov/pubs/sp/800/115/final</div>
    </a>
    <a href="https://www.nist.gov/cyberframework" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">NIST 標準</div>
      <div className="ref-title">NIST CSF 2.0 — Cybersecurity Framework</div>
      <div className="ref-url">nist.gov/cyberframework</div>
    </a>
    <a href="https://attack.mitre.org/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">MITRE</div>
      <div className="ref-title">MITRE ATT&amp;CK — 攻撃者戦術・技術データベース</div>
      <div className="ref-url">attack.mitre.org</div>
    </a>
    <a href="https://nvd.nist.gov/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">CVE/CVSS</div>
      <div className="ref-title">NVD（国立脆弱性データベース・CVSS スコア付き）</div>
      <div className="ref-url">nvd.nist.gov</div>
    </a>
    <a href="https://cve.mitre.org/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">CVE</div>
      <div className="ref-title">CVE — 共通脆弱性識別子データベース</div>
      <div className="ref-url">cve.mitre.org</div>
    </a>
    <a href="https://www.pcisecuritystandards.org/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">規制</div>
      <div className="ref-title">PCI DSS v4.0 — 支払いカードセキュリティ標準</div>
      <div className="ref-url">pcisecuritystandards.org</div>
    </a>
    <a href="https://www.cisecurity.org/cis-benchmarks" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">CIS</div>
      <div className="ref-title">CIS Benchmarks — OS・ソフトウェアハードニング標準</div>
      <div className="ref-url">cisecurity.org/cis-benchmarks</div>
    </a>
  </div>

  <h3 className="sub-title">🔧 主要セキュリティテストツール</h3>
  <div className="ref-grid">
    <a href="https://portswigger.net/burp" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ツール</div>
      <div className="ref-title">Burp Suite — プロキシ・Webアプリテスト</div>
      <div className="ref-url">portswigger.net/burp</div>
    </a>
    <a href="https://nmap.org/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ツール</div>
      <div className="ref-title">Nmap — ネットワークスキャナー（標準ツール）</div>
      <div className="ref-url">nmap.org</div>
    </a>
    <a href="https://www.metasploit.com/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ツール</div>
      <div className="ref-title">Metasploit — ペネトレーションテストフレームワーク</div>
      <div className="ref-url">metasploit.com</div>
    </a>
    <a href="https://snyk.io/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ツール</div>
      <div className="ref-title">Snyk — SCA・SAST（OSS 脆弱性スキャン）</div>
      <div className="ref-url">snyk.io</div>
    </a>
    <a href="https://semgrep.dev/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ツール</div>
      <div className="ref-title">Semgrep — SAST（多言語・無料OSS）</div>
      <div className="ref-url">semgrep.dev</div>
    </a>
    <a href="https://trivy.dev/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ツール</div>
      <div className="ref-title">Trivy — コンテナ・IaC セキュリティスキャン</div>
      <div className="ref-url">trivy.dev</div>
    </a>
    <a href="https://www.ssllabs.com/ssltest/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ツール</div>
      <div className="ref-title">Qualys SSL Labs — TLS 設定評価（Grade A 目標）</div>
      <div className="ref-url">ssllabs.com/ssltest/</div>
    </a>
    <a href="https://www.sonarsource.com/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">ツール</div>
      <div className="ref-title">SonarQube — SAST + コード品質（Community 版無料）</div>
      <div className="ref-url">sonarsource.com</div>
    </a>
  </div>

  <h3 className="sub-title">📖 最新レポート・参考データ</h3>
  <div className="ref-grid">
    <a href="https://www.ibm.com/reports/data-breach" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">業界レポート</div>
      <div className="ref-title">IBM Cost of a Data Breach Report 2024</div>
      <div className="ref-url">ibm.com/reports/data-breach</div>
    </a>
    <a href="https://www.verizon.com/business/resources/reports/dbir/" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">業界レポート</div>
      <div className="ref-title">Verizon DBIR 2024 — データ侵害調査レポート</div>
      <div className="ref-url">verizon.com/business/resources/reports/dbir/</div>
    </a>
    <a href="https://www.cisa.gov/zero-trust-maturity-model" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">CISA</div>
      <div className="ref-title">CISA Zero Trust Maturity Model</div>
      <div className="ref-url">cisa.gov/zero-trust-maturity-model</div>
    </a>
    <a href="https://isqi.org/ISTQB-Certified-Tester-Security-Test-Engineer-CT-STE/CT-STE.101" className="ref-card" target="_blank" rel="noopener noreferrer">
      <div className="ref-cat">試験プロバイダー</div>
      <div className="ref-title">iSQI 試験情報（CT-STE）</div>
      <div className="ref-url">isqi.org — CT-STE.101</div>
    </a>
  </div>

  <div className="alert amber">
    <strong>⚠️ 免責事項：</strong>本ガイドは ISTQB® が公認したトレーニング資料ではありません。公式シラバス・サンプル問題と合わせて使用してください。試験情報の最終確認は必ず公式サイト（<a href="https://istqb.org/" target="_blank" rel="noopener noreferrer">istqb.org</a>）で行ってください。
  </div>

  <div className="alert red">
    <strong>🚨 倫理的注意：</strong>本ガイドに記載されたセキュリティテスト技法は、<strong>必ず事前に書面による許可を得た上で、許可されたシステムのみに</strong>適用してください。無許可でのセキュリティテストは違法行為となります。
  </div>

  <div style={{ textAlign: 'center', padding: '2rem 0 1rem' }}>
    <a href="#top" className="back-top">↑ ページトップへ戻る</a>
    <p style={{ marginTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--text-muted)' }}>
      CT-STE Complete Guide 2025 • v1.0.1 準拠 • ISTQB® Specialist Stream
    </p>
  </div>
</section>

</div>{/* /page-wrapper */}

    </div>
  );
}
