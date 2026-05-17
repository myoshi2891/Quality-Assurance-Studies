import './istqb-ct-sec-complete-guide.css';
import NavBar from './NavBar';

export default function CTSECCompleteGuide() {
  return (
    <>
      <NavBar />
      <div className="layout-content">
        
        {/* ═══ NAV ═══ */}
        

        {/* ═══ HERO ═══ */}
            <section className="hero" id="chapter-0">
                <div className="hero-glow"></div>
                <div className="hero-badge">ISTQB® Specialist — Security Tester</div>
                <h1>
                    🔐 <span className="hl-g">CT-SEC</span> Security Tester<br /><span className="hl-r"
                        >完全学習ガイド 2025</span
                    >
                </h1>
                <p className="hero-sub">
                    ISTQB® CT-SEC v1.0 準拠 ＋ OWASP Top 10:2025 対応 ／
                    初学者から実践スペシャリストまで対応した体系的解説
                </p>
                <div className="hero-meta">
                    <div className="meta-card">
                        <div className="mv">45問</div>
                        <div className="ml">問題数</div>
                    </div>
                    <div className="meta-card">
                        <div className="mv">65%</div>
                        <div className="ml">合格基準</div>
                    </div>
                    <div className="meta-card">
                        <div className="mv">120分</div>
                        <div className="ml">試験時間</div>
                    </div>
                    <div className="meta-card">
                        <div className="mv">9章</div>
                        <div className="ml">シラバス</div>
                    </div>
                    <div className="meta-card">
                        <div className="mv">K2-K4</div>
                        <div className="ml">認知レベル</div>
                    </div>
                    <div className="meta-card">
                        <div className="mv">3年</div>
                        <div className="ml">実務経験 推奨</div>
                    </div>
                </div>
                <div className="notice-banner">
                    ⚠️ <strong>重要な最新情報（2025年2月）</strong>：ISTQB® は2025年2月に新資格
                    <strong>CT-STE（Certified Tester Security Test Engineer）</strong>
                    をリリースしました。CT-SEC（2016年版）は継続有効ですが、将来的には CT-STE
                    へ移行する見込みです。本ガイドは CT-SEC v1.0（現行試験対応）として解説します。
                    <br />🔗 CT-STE 情報:
                    <a
                        href="https://istqb.org/certifications/certified-tester-security-test-engineer/"
                        style={{'color': 'var(--neon-amber)'} as React.CSSProperties}
                        target="_blank"
                        >istqb.org/certifications/certified-tester-security-test-engineer/</a
                    >
                </div>
            </section>
            {/* ═══ TOC ═══ */}
            <hr className="divider"  />
            <section className="section">
                <div className="section-header">
                    <span className="chapter-num cyan">INDEX</span>
                    <div>
                        <h2 className="section-title">
                            📚 目次<span className="st-sub">Table of Contents</span>
                        </h2>
                    </div>
                </div>
                <div className="toc-grid">
                    <a href="#chapter-0" className="toc-card"
                        ><span className="toc-num">Ch.0</span>
                        <div className="toc-label">
                            <strong>概要・資格ロードマップ</strong>試験仕様・ビジネスアウトカム
                        </div></a
                    >
                    <a href="#chapter-1" className="toc-card"
                        ><span className="toc-num">Ch.1</span>
                        <div className="toc-label">
                            <strong>セキュリティテストの基礎</strong>CIA・リスク・監査 / 105分
                        </div></a
                    >
                    <a href="#chapter-2" className="toc-card"
                        ><span className="toc-num">Ch.2</span>
                        <div className="toc-label">
                            <strong>目的・ゴール・戦略</strong>5アプローチ・テスト種別 / 130分
                        </div></a
                    >
                    <a href="#chapter-3" className="toc-card"
                        ><span className="toc-num">Ch.3</span>
                        <div className="toc-label">
                            <strong>セキュリティテストプロセス</strong>6ステージ・脅威モデリング /
                            140分
                        </div></a
                    >
                    <a href="#chapter-4" className="toc-card"
                        ><span className="toc-num">Ch.4</span>
                        <div className="toc-label">
                            <strong>ソフトウェアライフサイクル</strong>DevSecOps・シフトレフト /
                            225分
                        </div></a
                    >
                    <a href="#chapter-5" className="toc-card"
                        ><span className="toc-num">Ch.5</span>
                        <div className="toc-label">
                            <strong>セキュリティメカニズム</strong>認証・暗号・FW・IDS / 240分
                        </div></a
                    >
                    <a href="#chapter-6" className="toc-card"
                        ><span className="toc-num">Ch.6</span>
                        <div className="toc-label">
                            <strong>人的要因</strong>攻撃者・ソーシャルエンジニアリング / 105分
                        </div></a
                    >
                    <a href="#chapter-7" className="toc-card"
                        ><span className="toc-num">Ch.7</span>
                        <div className="toc-label">
                            <strong>評価・報告</strong>CVSS・レポート構成 / 70分
                        </div></a
                    >
                    <a href="#chapter-8" className="toc-card"
                        ><span className="toc-num">Ch.8</span>
                        <div className="toc-label">
                            <strong>セキュリティテストツール</strong>種類・選定基準 / 55分
                        </div></a
                    >
                    <a href="#chapter-9" className="toc-card"
                        ><span className="toc-num">Ch.9</span>
                        <div className="toc-label">
                            <strong>標準・OWASP Top 10:2025</strong>業界トレンド / 40分
                        </div></a
                    >
                    <a href="#exam-tips" className="toc-card"
                        ><span className="toc-num" style={{'background': 'var(--neon-amber)'} as React.CSSProperties}
                            >試験</span
                        >
                        <div className="toc-label">
                            <strong>試験対策・サンプル問題</strong>チェックリスト・問題解説
                        </div></a
                    >
                    <a href="#references" className="toc-card"
                        ><span className="toc-num" style={{'background': 'var(--neon-purple)'} as React.CSSProperties}
                            >URL</span
                        >
                        <div className="toc-label">
                            <strong>参照URL一覧</strong>公式・OWASP・ツール・標準
                        </div></a
                    >
                </div>
            </section>

            {/* ═══ Chapter 0: Overview ═══ */}
            <hr className="divider"  />
            <section className="section" id="chapter-0-detail">
                <div className="section-header">
                    <span className="chapter-num">Ch.0</span>
                    <div>
                        <h2 className="section-title">
                            🌟 CT-SEC 概要と資格ロードマップ<span className="st-sub"
                                >Overview &amp; Certification Roadmap</span
                            >
                        </h2>
                    </div>
                </div>

                <h3>0.1 なぜセキュリティテストが重要なのか？</h3>
                <div className="metric-grid">
                    <div className="metric-card g">
                        <div className="metric-val">$4.88M</div>
                        <div className="metric-label">データ侵害1件の平均コスト（IBM 2024）</div>
                    </div>
                    <div className="metric-card c">
                        <div className="metric-val">277日</div>
                        <div className="metric-label">侵害の検出・封じ込め平均日数（IBM 2024）</div>
                    </div>
                    <div className="metric-card a">
                        <div className="metric-val">68%+</div>
                        <div className="metric-label">人的要因が関与する侵害の割合（DBIR 2024）</div>
                    </div>
                    <div className="metric-card r">
                        <div className="metric-val">100x</div>
                        <div className="metric-label">本番vs開発フェーズの修正コスト比（NIST）</div>
                    </div>
                </div>

                <h3>0.2 試験スペック</h3>
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
                                <td>問題数</td>
                                <td>45問（多肢選択問題）</td>
                            </tr>
                            <tr>
                                <td>配点</td>
                                <td>合計80点満点（一部2点配点あり）</td>
                            </tr>
                            <tr>
                                <td>合格点</td>
                                <td>52点（65%）</td>
                            </tr>
                            <tr>
                                <td>試験時間</td>
                                <td>120分（英語非母語者：+25% = 150分）</td>
                            </tr>
                            <tr>
                                <td>前提条件</td>
                                <td>CTFL（Foundation Level）必須 ＋ 実務経験3年以上推奨</td>
                            </tr>
                            <tr>
                                <td>認知レベル</td>
                                <td>K2（理解）・K3（適用）・K4（分析）</td>
                            </tr>
                            <tr>
                                <td>シラバス</td>
                                <td>v1.0（2016年リリース）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>0.3 章別学習時間と重要度</h3>
                <div className="progress-wrap">
                    <div className="progress-item">
                        <div className="pi-header">
                            <span className="pi-label">Ch.1 セキュリティテストの基礎</span
                            ><span className="pi-val">105分 / ★★★★</span>
                        </div>
                        <div className="pi-track"><div className="pi-bar g" ></div></div>
                    </div>
                    <div className="progress-item">
                        <div className="pi-header">
                            <span className="pi-label">Ch.2 目的・ゴール・戦略</span
                            ><span className="pi-val">130分 / ★★★★★</span>
                        </div>
                        <div className="pi-track"><div className="pi-bar c" ></div></div>
                    </div>
                    <div className="progress-item">
                        <div className="pi-header">
                            <span className="pi-label">Ch.3 セキュリティテストプロセス</span
                            ><span className="pi-val">140分 / ★★★★★</span>
                        </div>
                        <div className="pi-track"><div className="pi-bar g" ></div></div>
                    </div>
                    <div className="progress-item">
                        <div className="pi-header">
                            <span className="pi-label">Ch.4 ソフトウェアライフサイクル</span
                            ><span className="pi-val">225分 / ★★★★</span>
                        </div>
                        <div className="pi-track"><div className="pi-bar a" ></div></div>
                    </div>
                    <div className="progress-item">
                        <div className="pi-header">
                            <span className="pi-label">Ch.5 セキュリティメカニズムのテスト</span
                            ><span className="pi-val">240分 / ★★★★★</span>
                        </div>
                        <div className="pi-track"><div className="pi-bar r" ></div></div>
                    </div>
                    <div className="progress-item">
                        <div className="pi-header">
                            <span className="pi-label">Ch.6 人的要因</span
                            ><span className="pi-val">105分 / ★★★★</span>
                        </div>
                        <div className="pi-track"><div className="pi-bar p" ></div></div>
                    </div>
                    <div className="progress-item">
                        <div className="pi-header">
                            <span className="pi-label">Ch.7 評価・報告</span
                            ><span className="pi-val">70分 / ★★★★</span>
                        </div>
                        <div className="pi-track"><div className="pi-bar c" ></div></div>
                    </div>
                    <div className="progress-item">
                        <div className="pi-header">
                            <span className="pi-label">Ch.8 セキュリティテストツール</span
                            ><span className="pi-val">55分 / ★★★</span>
                        </div>
                        <div className="pi-track"><div className="pi-bar g" ></div></div>
                    </div>
                    <div className="progress-item">
                        <div className="pi-header">
                            <span className="pi-label">Ch.9 標準・業界トレンド</span
                            ><span className="pi-val">40分 / ★★★★★</span>
                        </div>
                        <div className="pi-track"><div className="pi-bar a" ></div></div>
                    </div>
                </div>
            </section>

            {/* ═══ Chapter 1 ═══ */}
            <hr className="divider"  />
            <section className="section" id="chapter-1">
                <div className="section-header">
                    <span className="chapter-num">Ch.1</span>
                    <div>
                        <h2 className="section-title">
                            🛡️ セキュリティテストの基礎<span className="st-sub"
                                >The Basis of Security Testing — 105分</span
                            >
                        </h2>
                    </div>
                </div>

                <h3>
                    1.1 CIA トライアド — 情報セキュリティの3本柱 <span className="pill pill-g">K2</span>
                </h3>
                <p>
                    情報セキュリティはCIAトライアドと呼ばれる3つの基本特性を中心に構成されます。セキュリティテストはこの3特性が適切に保護されているかを検証します。
                </p>

                <div className="arch-layers">
                    <div className="arch-row c1">
                        <span className="arch-icon">🔐</span>
                        <span className="arch-label">機密性 (C)</span>
                        <span className="arch-desc"
                            ><strong>Confidentiality</strong> —
                            許可された者だけが情報にアクセスできること。違反例：データ漏洩・不正アクセス・盗聴。対策：暗号化・アクセス制御・認証</span
                        >
                    </div>
                    <div className="arch-row c3">
                        <span className="arch-icon">🔒</span>
                        <span className="arch-label">完全性 (I)</span>
                        <span className="arch-desc"
                            ><strong>Integrity</strong> —
                            情報が正確・完全で不正に変更されていないこと。違反例：データ改ざん・中間者攻撃(MITM)。対策：デジタル署名・ハッシュ検証・バージョン管理</span
                        >
                    </div>
                    <div className="arch-row c2">
                        <span className="arch-icon">⚡</span>
                        <span className="arch-label">可用性 (A)</span>
                        <span className="arch-desc"
                            ><strong>Availability</strong> —
                            許可されたユーザーが必要な時にシステムを使えること。違反例：DDoS攻撃・ランサムウェア。対策：冗長化・バックアップ・DDoS対策</span
                        >
                    </div>
                    <div className="arch-row c4">
                        <span className="arch-icon">🔑</span>
                        <span className="arch-label">否認防止性 (+)</span>
                        <span className="arch-desc"
                            ><strong>Non-repudiation</strong> —
                            行動や通信の否認を防ぐ能力。例：デジタル署名・監査ログによる行為の証明</span
                        >
                    </div>
                    <div className="arch-row c6">
                        <span className="arch-icon">✅</span>
                        <span className="arch-label">認証 (+)</span>
                        <span className="arch-desc"
                            ><strong>Authentication</strong> —
                            ユーザー・システムのアイデンティティを確認する能力。例：パスワード・MFA・デジタル証明書</span
                        >
                    </div>
                </div>

                <h3>1.2 セキュリティリスクの評価 <span className="pill pill-g">K4</span></h3>
                <div className="callout info">
                    <div className="callout-title">📐 リスク計算式</div>
                    <strong style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                        >リスク = 脅威の発生可能性（Likelihood） × 影響度（Impact）</strong
                    >
                    <p style={{'margin': '0.6rem 0 0'} as React.CSSProperties}>
                        リスク評価は現時点のスナップショットに過ぎません。新たな脅威が日々出現するため、定期的な再評価（3〜6ヶ月ごと）が不可欠です。
                    </p>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>リスク対応戦略</th>
                                <th>別名</th>
                                <th>説明</th>
                                <th>例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-red)'} as React.CSSProperties}>Transfer（転嫁）</strong>
                                </td>
                                <td>移転</td>
                                <td>リスクを第三者に移す</td>
                                <td>サイバー保険・アウトソーシング</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-amber)'} as React.CSSProperties}>Accept（受容）</strong>
                                </td>
                                <td>容認</td>
                                <td>許容範囲内として受け入れる</td>
                                <td>低リスク機能のリスク受容</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >Mitigate（軽減）</strong
                                    >
                                </td>
                                <td>緩和</td>
                                <td>セキュリティ対策を実施してリスクを低下させる</td>
                                <td>パッチ適用・WAF導入</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-green)'} as React.CSSProperties}
                                        >Terminate（回避）</strong
                                    >
                                </td>
                                <td>排除</td>
                                <td>リスクを生む機能・活動を削除する</td>
                                <td>不要な機能の廃止</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>1.3 情報セキュリティポリシーの階層構造 <span className="pill pill-c">K2</span></h3>
                <div className="pyramid">
                    <div className="pyr-level pyr-1" style={{'width': '40%'} as React.CSSProperties}>
                        手続き（Procedures）<br /><span style={{'fontSize': '0.65rem'} as React.CSSProperties}
                            >具体的な操作手順</span
                        >
                    </div>
                    <div className="pyr-level pyr-2" style={{'width': '58%'} as React.CSSProperties}>
                        ガイドライン（Guidelines）<br /><span
                            style={{'fontSize': '0.65rem'} as React.CSSProperties}
                            >推奨される実践方法（強制ではない）</span
                        >
                    </div>
                    <div className="pyr-level pyr-3" style={{'width': '76%'} as React.CSSProperties}>
                        標準（Standards）<br /><span style={{'fontSize': '0.65rem'} as React.CSSProperties}
                            >ポリシーを実現する具体的要件</span
                        >
                    </div>
                    <div className="pyr-level pyr-4" style={{'width': '94%'} as React.CSSProperties}>
                        組織セキュリティポリシー（最上位）<br /><span
                            style={{'fontSize': '0.65rem'} as React.CSSProperties}
                            >組織全体のセキュリティ方針・原則を定義</span
                        >
                    </div>
                </div>

                <h3>
                    1.4 セキュリティ監査 vs セキュリティテスト <span className="pill pill-c">K2</span>
                </h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>比較項目</th>
                                <th>🔍 セキュリティ監査</th>
                                <th>⚔️ セキュリティテスト</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>焦点</strong></td>
                                <td>コントロールの存在・文書化を確認</td>
                                <td>コントロールが実際に機能するか検証</td>
                            </tr>
                            <tr>
                                <td><strong>問いかけ</strong></td>
                                <td>「パスワードポリシーが存在するか？」</td>
                                <td>「弱いパスワードで実際にログインできるか？」</td>
                            </tr>
                            <tr>
                                <td><strong>主な手法</strong></td>
                                <td>チェックリスト・ドキュメントレビュー</td>
                                <td>動的テスト・侵入テスト・脆弱性スキャン</td>
                            </tr>
                            <tr>
                                <td><strong>実施者</strong></td>
                                <td>独立した第三者監査人</td>
                                <td>テスターまたは外部ペンテスト会社</td>
                            </tr>
                            <tr>
                                <td><strong>頻度</strong></td>
                                <td>定期的（年1〜2回）</td>
                                <td>SDLCに組み込んで継続的に実施</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout success">
                    <div className="callout-title">
                        ✅ 重要概念：アセット識別（Asset Identification）
                    </div>
                    <p style={{'margin': '0'} as React.CSSProperties}>
                        保護すべき「アセット（資産）」には
                        <strong>デジタル資産</strong
                        >（顧客データ・ビジネス計画・ソースコード・知的財産）と<strong>非デジタル資産</strong>（物理プロトタイプ・サービス提供能力・企業の信頼・評判）が含まれます。各アセットの「価値」「所在場所」「アクセス方法」を明確化することがリスク評価の出発点です。
                    </p>
                </div>
            </section>
            {/* ═══ Chapter 2 ═══ */}
            <hr className="divider"  />
            <section className="section" id="chapter-2">
                <div className="section-header">
                    <span className="chapter-num cyan">Ch.2</span>
                    <div>
                        <h2 className="section-title">
                            🎯 セキュリティテストの目的・ゴール・戦略<span className="st-sub"
                                >Purpose, Goals &amp; Approaches — 130分</span
                            >
                        </h2>
                    </div>
                </div>

                <h3>2.1 セキュリティテストの6つの主要目的 <span className="pill pill-c">K2</span></h3>
                <ul className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div className="step-content">
                            <strong>脆弱性の発見</strong> —
                            攻撃者に悪用される前に弱点を特定する。例：SQLインジェクション・XSS・認証バイパスの発見
                        </div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div className="step-content">
                            <strong>セキュリティ要件の検証</strong> —
                            NFR（非機能要件）として定義されたセキュリティ要件への準拠確認。例：「全通信はHTTPSで暗号化されること」の検証
                        </div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div className="step-content">
                            <strong>コンプライアンスの確認</strong> — PCI DSS・GDPR・ISO
                            27001・個人情報保護法等の法的・規制的要件への準拠確認
                        </div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div className="step-content">
                            <strong>リスクの評価</strong> —
                            セキュリティ上のリスクを定量的に評価し、対処の優先順位を決定する
                        </div>
                    </li>
                    <li>
                        <span className="step-num">5</span>
                        <div className="step-content">
                            <strong>セキュリティメカニズムの検証</strong> —
                            実装された暗号化・認証・ファイアウォール等が有効に機能しているかを確認する
                        </div>
                    </li>
                    <li>
                        <span className="step-num">6</span>
                        <div className="step-content">
                            <strong>認識向上</strong> —
                            テスト結果を教育材料として活用し、組織内のセキュリティ意識を高める
                        </div>
                    </li>
                </ul>

                <h3>2.2 セキュリティテストの5つのアプローチ <span className="pill pill-g">K3</span></h3>
                <div className="callout info">
                    <div className="callout-title">💡 試験頻出ポイント</div>
                    5つのアプローチはそれぞれ独立ではなく、実際のプロジェクトでは状況に応じて組み合わせて使用します。どのアプローチを選択すべきかを問う
                    K3 レベルの問題が頻出です。
                </div>
                <div className="arch-layers">
                    <div className="arch-row c1">
                        <span className="arch-icon">📋</span>
                        <span className="arch-label">ポリシーベース</span>
                        <span className="arch-desc"
                            ><strong>Policy-Based Testing</strong> —
                            組織のセキュリティポリシーへの準拠をテスト。主な技法：チェックリスト・設定レビュー・ドキュメントレビュー</span
                        >
                    </div>
                    <div className="arch-row c4">
                        <span className="arch-icon">⚖️</span>
                        <span className="arch-label">リスクベース</span>
                        <span className="arch-desc"
                            ><strong>Risk-Based Testing</strong> —
                            識別されたリスクを優先してテスト。主な技法：脅威モデリング・リスク評価マトリクス。例：「顧客支払い情報を扱う機能を最優先でテスト」</span
                        >
                    </div>
                    <div className="arch-row c2">
                        <span className="arch-icon">📐</span>
                        <span className="arch-label">標準ベース</span>
                        <span className="arch-desc"
                            ><strong>Standards-Based Testing</strong> — ISO
                            27001・NIST・OWASP等の標準に準拠したテスト。例：「OWASP Testing Guide
                            に基づいたWebアプリテスト」</span
                        >
                    </div>
                    <div className="arch-row c3">
                        <span className="arch-icon">📝</span>
                        <span className="arch-label">要件ベース</span>
                        <span className="arch-desc"
                            ><strong>Requirements-Based Testing</strong> —
                            セキュリティ要件・ユーザーストーリーに基づくテスト。主な技法：境界値テスト・ブラックボックステスト</span
                        >
                    </div>
                    <div className="arch-row c5">
                        <span className="arch-icon">🔍</span>
                        <span className="arch-label">脆弱性ベース</span>
                        <span className="arch-desc"
                            ><strong>Vulnerability-Based Testing</strong> —
                            CVE・CWE等の既知脆弱性パターンを基にテスト。主な技法：脆弱性スキャン・侵入テスト・ファジング</span
                        >
                    </div>
                </div>

                <h3>
                    2.3 セキュリティテストの種類（SAST / DAST / IAST / SCA / Pen Test）
                    <span className="pill pill-g">K3</span>
                </h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>手法</th>
                                <th>フェーズ</th>
                                <th>コスト</th>
                                <th>主な発見対象</th>
                                <th>代表ツール</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-green)'} as React.CSSProperties}>SAST</strong
                                    ><br /><small>静的アプリケーションセキュリティテスト</small>
                                </td>
                                <td>実装中</td>
                                <td>低〜中</td>
                                <td>コード上の欠陥・インジェクション・ハードコード認証情報</td>
                                <td>Checkmarx, SonarQube, Fortify, Semgrep</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}>SCA</strong><br /><small
                                        >ソフトウェアコンポジション分析</small
                                    >
                                </td>
                                <td>実装中</td>
                                <td>低</td>
                                <td>既知の脆弱なOSSライブラリ・SBOM管理</td>
                                <td>Snyk, OWASP Dependency-Check, Dependabot</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-amber)'} as React.CSSProperties}>DAST</strong
                                    ><br /><small>動的アプリケーションセキュリティテスト</small>
                                </td>
                                <td>テスト</td>
                                <td>中</td>
                                <td>実行時の脆弱性（XSS・SQLi・認証等）</td>
                                <td>OWASP ZAP, Burp Suite, Nikto</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-purple)'} as React.CSSProperties}>IAST</strong
                                    ><br /><small>インタラクティブ AST</small>
                                </td>
                                <td>テスト</td>
                                <td>高</td>
                                <td>コード＋実行時の組み合わせ（SAST+DASTの効果）</td>
                                <td>Contrast Security, Seeker</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-red)'} as React.CSSProperties}>Pen Test</strong
                                    ><br /><small>侵入テスト</small>
                                </td>
                                <td>テスト前</td>
                                <td>高</td>
                                <td>実際の攻撃シナリオ・連鎖的脆弱性・ビジネスロジック</td>
                                <td>Metasploit, Burp Suite Pro, Kali Linux</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>
                    2.4 ブラック / ホワイト / グレーボックステスト
                    <span className="pill pill-c">K2</span>
                </h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>種別</th>
                                <th>入手できる情報</th>
                                <th>メリット</th>
                                <th>デメリット</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>ブラックボックス</strong></td>
                                <td>内部情報なし（外部視点）</td>
                                <td>実際の攻撃者視点でテスト可能</td>
                                <td>内部の脆弱性を見逃す可能性がある</td>
                            </tr>
                            <tr>
                                <td><strong>ホワイトボックス</strong></td>
                                <td>ソースコード・設計・インフラ全情報</td>
                                <td>詳細な脆弱性発見・カバレッジ最大</td>
                                <td>実際の攻撃者視点を失う</td>
                            </tr>
                            <tr>
                                <td><strong>グレーボックス</strong></td>
                                <td>部分的な情報（認証済みユーザー等）</td>
                                <td>内部・外部の両視点のバランス</td>
                                <td>時間とスキルが必要</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ═══ Chapter 3 ═══ */}
            <hr className="divider"  />
            <section className="section" id="chapter-3">
                <div className="section-header">
                    <span className="chapter-num amber">Ch.3</span>
                    <div>
                        <h2 className="section-title">
                            🔄 セキュリティテストプロセス<span className="st-sub"
                                >Security Test Process — 140分</span
                            >
                        </h2>
                    </div>
                </div>

                <h3>
                    3.1 セキュリティテストの6ステージプロセス <span className="pill pill-g">K3</span>
                </h3>
                <ul className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div className="step-content">
                            <strong>計画（Planning）</strong> —
                            セキュリティテスト計画書の作成：スコープ・脅威プロファイル・リスク評価・テストアプローチ・法的要件・承認書の準備
                        </div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div className="step-content">
                            <strong>設計（Design）</strong> —
                            脅威モデリング（STRIDEなど）を用いたテストケース・シナリオの設計
                        </div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div className="step-content">
                            <strong>実装（Implementation）</strong> —
                            テストスクリプト・ツールの準備、テスト環境の整備
                        </div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div className="step-content">
                            <strong>実行（Execution）</strong> —
                            偵察→スキャン→列挙→エクスプロイト→後処理の5フェーズでテストを実施・証拠を収集
                        </div>
                    </li>
                    <li>
                        <span className="step-num">5</span>
                        <div className="step-content">
                            <strong>評価（Evaluation）</strong> — 結果の分析・CVSS
                            によるリスクスコアリング・誤検知(False Positive)の除去・優先順位付け
                        </div>
                    </li>
                    <li>
                        <span className="step-num">6</span>
                        <div className="step-content">
                            <strong>メンテナンス（Maintenance）</strong> —
                            テストスイートの継続的な更新・新たな脅威への対応・回帰テストの実施
                        </div>
                    </li>
                </ul>

                <h3>3.2 脅威モデリング：STRIDE モデル <span className="pill pill-g">K3</span></h3>
                <div className="callout info">
                    <div className="callout-title">🔑 STRIDE の記憶法</div>
                    <strong>S</strong>poofing（なりすまし） → <strong>T</strong>ampering（改ざん） →
                    <strong>R</strong>epudiation（否認） → <strong>I</strong>nformation
                    Disclosure（情報漏洩） → <strong>D</strong>enial of Service（サービス拒否） →
                    <strong>E</strong>levation of Privilege（権限昇格）
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>STRIDE</th>
                                <th>脅威カテゴリ</th>
                                <th>対応するCIA特性</th>
                                <th>攻撃例</th>
                                <th>テスト技法</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong style={{'color': 'var(--neon-green)'} as React.CSSProperties}>S</strong></td>
                                <td>Spoofing（なりすまし）</td>
                                <td>認証</td>
                                <td>フィッシング・ARP Spoofing</td>
                                <td>認証バイパステスト・セッション固定テスト</td>
                            </tr>
                            <tr>
                                <td><strong style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}>T</strong></td>
                                <td>Tampering（改ざん）</td>
                                <td>完全性</td>
                                <td>パラメータ改ざん・SQLインジェクション</td>
                                <td>入力バリデーションテスト・署名検証テスト</td>
                            </tr>
                            <tr>
                                <td><strong style={{'color': 'var(--neon-purple)'} as React.CSSProperties}>R</strong></td>
                                <td>Repudiation（否認）</td>
                                <td>否認防止性</td>
                                <td>ログ改ざん・監査証跡の削除</td>
                                <td>ログ完全性テスト・デジタル署名テスト</td>
                            </tr>
                            <tr>
                                <td><strong style={{'color': 'var(--neon-amber)'} as React.CSSProperties}>I</strong></td>
                                <td>Information Disclosure（情報漏洩）</td>
                                <td>機密性</td>
                                <td>XSS・パストラバーサル・過剰情報開示</td>
                                <td>DAST・情報漏洩スキャン</td>
                            </tr>
                            <tr>
                                <td><strong style={{'color': 'var(--neon-red)'} as React.CSSProperties}>D</strong></td>
                                <td>Denial of Service（サービス拒否）</td>
                                <td>可用性</td>
                                <td>DDoS・リソース枯渇攻撃</td>
                                <td>負荷テスト・レート制限テスト</td>
                            </tr>
                            <tr>
                                <td><strong style={{'color': 'var(--neon-blue)'} as React.CSSProperties}>E</strong></td>
                                <td>Elevation of Privilege（権限昇格）</td>
                                <td>認可</td>
                                <td>IDOR・水平/垂直権限昇格</td>
                                <td>アクセス制御テスト・権限昇格テスト</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>3.3 ペネトレーションテストの5フェーズ <span className="pill pill-g">K3</span></h3>
                <div className="arch-layers">
                    <div className="arch-row c2">
                        <span className="arch-icon">🕵️</span
                        ><span className="arch-label">Phase 1: 偵察</span
                        ><span className="arch-desc"
                            ><strong>Reconnaissance</strong> —
                            OSINT・DNS情報・WHOIS・サブドメイン列挙による公開情報収集</span
                        >
                    </div>
                    <div className="arch-row c1">
                        <span className="arch-icon">🔎</span
                        ><span className="arch-label">Phase 2: スキャン</span
                        ><span className="arch-desc"
                            ><strong>Scanning</strong> —
                            ポートスキャン・サービス/バージョン特定・脆弱性スキャン（Nmap・Nessus等）</span
                        >
                    </div>
                    <div className="arch-row c4">
                        <span className="arch-icon">📋</span
                        ><span className="arch-label">Phase 3: 列挙</span
                        ><span className="arch-desc"
                            ><strong>Enumeration</strong> —
                            具体的な脆弱性の特定・CVE/CWEマッピング・誤検知の排除・CVSSスコアによる優先度付け</span
                        >
                    </div>
                    <div className="arch-row c5">
                        <span className="arch-icon">⚔️</span
                        ><span className="arch-label">Phase 4: エクスプロイト</span
                        ><span className="arch-desc"
                            ><strong>Exploitation</strong> —
                            許可された環境での脆弱性有効性確認・PoC作成・実際の影響範囲の文書化</span
                        >
                    </div>
                    <div className="arch-row c3">
                        <span className="arch-icon">📊</span
                        ><span className="arch-label">Phase 5: 後処理</span
                        ><span className="arch-desc"
                            ><strong>Post-Exploitation</strong> —
                            侵害後の影響範囲調査・横断移動の可能性確認・証拠の保全と報告書作成</span
                        >
                    </div>
                </div>
                <div className="callout danger">
                    <div className="callout-title">⚠️ 倫理的ペンテストの必須条件</div>
                    全てのテストは
                    <strong>事前の書面による承認（Authorization Letter）</strong>
                    が必須。スコープ外のシステムへのアクセス・本番データの取得・永続的な変更は禁止。テスト中に発見した情報は依頼者以外に開示しないこと。
                </div>
            </section>

            {/* ═══ Chapter 4 ═══ */}
            <hr className="divider"  />
            <section className="section" id="chapter-4">
                <div className="section-header">
                    <span className="chapter-num purple">Ch.4</span>
                    <div>
                        <h2 className="section-title">
                            🔩 ソフトウェアライフサイクルにおけるセキュリティテスト<span
                                className="st-sub"
                                >Security Testing in the SDLC — 225分</span
                            >
                        </h2>
                    </div>
                </div>

                <h3>
                    4.1 DevSecOps とシフトレフトセキュリティ <span className="pill pill-g">K3</span>
                </h3>
                <div className="callout warning">
                    <div className="callout-title">📊 シフトレフトのコスト効果</div>
                    NIST
                    の試算によると、本番環境で発見されたセキュリティ欠陥の修正コストは設計フェーズで発見した場合の
                    <strong>30〜100倍</strong>
                    です。シフトレフトは最も費用対効果の高いセキュリティ投資です。
                </div>

                <h4>DevSecOps パイプライン統合フロー</h4>
                <div className="arch-layers">
                    <div className="arch-row c1">
                        <span className="arch-icon">📝</span><span className="arch-label">コードPush</span
                        ><span className="arch-desc"
                            >開発者がコードをリポジトリへコミット・プッシュ（秘密情報スキャンも自動実行）</span
                        >
                    </div>
                    <div className="arch-row c2">
                        <span className="arch-icon">🔬</span><span className="arch-label">SAST + SCA</span
                        ><span className="arch-desc"
                            >静的解析（Checkmarx・SonarQube）＋
                            ライブラリ脆弱性スキャン（Snyk・OWASP Dependency-Check）を自動実行</span
                        >
                    </div>
                    <div className="arch-row c4">
                        <span className="arch-icon">🐳</span
                        ><span className="arch-label">コンテナスキャン</span
                        ><span className="arch-desc"
                            >Dockerイメージの脆弱性スキャン（Trivy・Aqua Security）＋ IaC
                            セキュリティチェック（Checkov・tfsec）</span
                        >
                    </div>
                    <div className="arch-row c3">
                        <span className="arch-icon">🌐</span><span className="arch-label">DAST</span
                        ><span className="arch-desc"
                            >ステージング環境への自動 DAST（OWASP ZAP）＋ 定期的な侵入テスト</span
                        >
                    </div>
                    <div className="arch-row c5">
                        <span className="arch-icon">🚀</span><span className="arch-label">本番デプロイ</span
                        ><span className="arch-desc"
                            >承認後デプロイ → 継続的モニタリング（SIEM・WAF・IDS）＋
                            本番スモークテスト</span
                        >
                    </div>
                </div>

                <h3>4.2 各SDLCフェーズでのセキュリティ活動 <span className="pill pill-c">K3</span></h3>

                <h4>🟦 要件フェーズ — 乱用ケース（Misuse Cases）</h4>
                <p>
                    通常のユースケースに対して「攻撃者はどう悪用するか」という視点で乱用ケースを作成し、セキュリティ要件に落とし込みます。
                </p>
                <div
                    className="code-block"
                    data-lang="Example"
                >
<div className="code-line"><span className="code-comment">// 乱用ケース → セキュリティ要件への変換例</span></div>
<div className="code-line">ユースケース：<span className="code-green">「ユーザーはログインできる」</span></div>
<div className="code-line">乱用ケース：<span className="code-red">「攻撃者は辞書攻撃でアカウントを乗っ取れる」</span></div>
<div className="code-line">導き出すセキュリティ要件：</div>
<div className="code-line">✅ <span className="code-green">「5回連続失敗でアカウントを30分ロックする」</span></div>
<div className="code-line">✅ <span className="code-green">「多要素認証（MFA）を必須とする」</span></div>
<div className="code-line">✅ <span className="code-green">「ログイン試行を全てログに記録してアラートを設定する」</span></div>
<div className="code-line">テスト可能な要件の例：</div>
<div className="code-line"><span className="code-cyan">「パスワードは bcrypt（コスト12以上）でハッシュ化されること」</span></div>
<div className="code-line"><span className="code-cyan">「CSRF トークンが全フォームに実装されること」</span></div>
<div className="code-line"><span className="code-cyan">「全 SQL クエリはパラメータ化クエリで実装されること」</span></div>
</div>

                <h4>🟦 設計フェーズ — セキュアデザイン原則</h4>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>原則</th>
                                <th>説明</th>
                                <th>具体例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>最小権限の原則</strong></td>
                                <td>必要最小限の権限のみを付与</td>
                                <td>「一般ユーザーはDB読取のみ・管理者は書込可」</td>
                            </tr>
                            <tr>
                                <td><strong>多層防御</strong></td>
                                <td>複数のセキュリティ層を実装</td>
                                <td>WAF + 認証 + DB暗号化 + ネットワーク分離</td>
                            </tr>
                            <tr>
                                <td><strong>フェイルセーフ</strong></td>
                                <td>失敗時は安全な状態にデフォルト</td>
                                <td>「エラー時はアクセス拒否がデフォルト」</td>
                            </tr>
                            <tr>
                                <td><strong>開放的設計</strong></td>
                                <td>セキュリティはアルゴリズムに依存（秘密鍵ではなく）</td>
                                <td>暗号アルゴリズムは公開・鍵は秘密</td>
                            </tr>
                            <tr>
                                <td><strong>職務の分離</strong></td>
                                <td>重要処理は複数人の確認が必要</td>
                                <td>「大口送金は2名承認必須」</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>🟦 実装フェーズ — セキュアコーディング</h4>
                <div
                    className="code-block"
                    data-lang="Python"
                >
<div className="code-line"><span className="code-comment"># ❌ 悪い例：SQLインジェクション脆弱コード</span></div>
<div className="code-line"><span className="code-keyword">def</span> <span className="code-cyan">get_user_bad</span>(user_input):</div>
<div className="code-line">    query = <span className="code-string">f"SELECT * FROM users WHERE name = '{"{"}user_input{"}"}'"</span></div>
<div className="code-line">    <span className="code-comment"># 入力: ' OR '1'='1 → 全ユーザー情報漏洩！</span></div>
<div className="code-line">    <span className="code-keyword">return</span> cursor.execute(query)</div>
<div className="code-line"><span className="code-comment"># ✅ 良い例：パラメータ化クエリ（プリペアドステートメント）</span></div>
<div className="code-line"><span className="code-keyword">def</span> <span className="code-green">get_user_good</span>(user_input):</div>
<div className="code-line">    query = <span className="code-string">"SELECT * FROM users WHERE name = ?"</span></div>
<div className="code-line">    <span className="code-comment"># ユーザー入力はパラメータとして渡す → インジェクション不可能</span></div>
<div className="code-line">    <span className="code-keyword">return</span> cursor.execute(query, (user_input,))</div>
<div className="code-line"><span className="code-comment"># ❌ 悪い例：ハードコードされた認証情報</span></div>
<div className="code-line">API_KEY = <span className="code-string">"sk-abc123xyz789"</span></div>
<div className="code-line"><span className="code-comment"># ← コードに直接記載（NG!）</span></div>
<div className="code-line"><span className="code-comment"># ✅ 良い例：環境変数での管理</span></div>
<div className="code-line"><span className="code-keyword">import</span> os</div>
<div className="code-line">API_KEY = os.getenv(<span className="code-string">"API_KEY"</span>) <span className="code-comment"># ← 環境変数から取得（OK）</span></div>
</div>
            </section>
            {/* ═══ Chapter 5 ═══ */}
            <hr className="divider"  />
            <section className="section" id="chapter-5">
                <div className="section-header">
                    <span className="chapter-num red">Ch.5</span>
                    <div>
                        <h2 className="section-title">
                            ⚙️ セキュリティメカニズムのテスト<span className="st-sub"
                                >Testing Security Mechanisms — 240分</span
                            >
                        </h2>
                    </div>
                </div>

                <h3>5.1 システムハードニング <span className="pill pill-g">K3</span></h3>
                <p>
                    ハードニングとはシステムの攻撃表面積（Attack Surface）を最小化する作業です。CIS
                    Benchmark が業界標準のチェックリストとして広く使われています。
                </p>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>レイヤー</th>
                                <th>確認項目</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>OS レベル</strong></td>
                                <td>
                                    不要なサービス・デーモンの無効化 / 未適用パッチの解消 /
                                    ファイルシステム権限設定 / 不要なポートのクローズ
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Web サーバー</strong></td>
                                <td>
                                    デフォルトページの削除 / バージョン情報の非表示 /
                                    ディレクトリリスティングの無効化 / セキュリティヘッダーの設定
                                </td>
                            </tr>
                            <tr>
                                <td><strong>セキュリティヘッダー</strong></td>
                                <td>
                                    HSTS / Content-Security-Policy (CSP) / X-Frame-Options /
                                    X-Content-Type-Options / Referrer-Policy / Permissions-Policy
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>
                    5.2 認証テスト（Authentication Testing） <span className="pill pill-g">K4</span>
                </h3>

                <h4>ブルートフォース攻撃耐性テスト</h4>
                <div
                    className="code-block"
                    data-lang="Test Steps"
                >
<div className="code-line"><span className="code-comment">// ブルートフォース対策のテスト手順</span></div>
<div className="code-line">Step 1: 正しいユーザーIDと誤ったパスワードを<span className="code-num">5</span>回連続で入力</div>
<div className="code-line">Step 2: <span className="code-num">6</span>回目にアカウントロックが発動することを確認</div>
<div className="code-line">Step 3: ロック通知メールが送信されることを確認</div>
<div className="code-line">Step 4: ロック解除後の再ログインが可能であることを確認</div>
<div className="code-line">確認チェックリスト：</div>
<div className="code-line">✅ <span className="code-green">セッションIDはランダムで予測不可能か？（十分なエントロピー）</span></div>
<div className="code-line">✅ <span className="code-green">ログアウト後にセッションIDが無効化されるか？</span></div>
<div className="code-line">✅ <span className="code-green">セッションタイムアウトが機能するか？（例：30分）</span></div>
<div className="code-line">✅ <span className="code-green">CookieにHttpOnly・Secureフラグがあるか？</span></div>
<div className="code-line">❌ <span className="code-red">セッションIDがURLに含まれていないか？</span></div>
</div>

                <h3>5.3 認可テスト（IDOR テスト） <span className="pill pill-g">K4</span></h3>
                <div className="callout danger">
                    <div className="callout-title">🚨 IDOR（Insecure Direct Object Reference）</div>
                    OWASP Top 10:2025 A01「Broken Access
                    Control」の最も代表的な脆弱性。他ユーザーのデータへのアクセスを許してしまうアクセス制御の欠陥です。
                </div>
                <div
                    className="code-block"
                    data-lang="Test Procedure"
                >
<div className="code-line"><span className="code-comment">// IDOR テスト手順（水平アクセス制御テスト）</span></div>
<div className="code-line"><span className="code-comment">// Step 1: ユーザーAでログインして自分のプロフィールURLを確認</span></div>
<div className="code-line">GET /api/users/<span className="code-num">12345</span>/profile <span className="code-comment">// ← userA のID</span></div>
<div className="code-line"><span className="code-comment">// Step 2: ユーザーBでログインして ユーザーA のURLにアクセス試行</span></div>
<div className="code-line">GET /api/users/<span className="code-num">12345</span>/profile <span className="code-comment">// ← 他ユーザーのID</span></div>
<div className="code-line"><span className="code-comment">// 期待する結果（安全な実装）：</span></div>
<div className="code-line"><span className="code-green">HTTP 403 Forbidden ← アクセス拒否されること</span></div>
<div className="code-line"><span className="code-comment">// ❌ 脆弱な実装：ユーザーBでIDを変えるだけで他人のデータが取得できる</span></div>
<div className="code-line"><span className="code-comment">// ✅ 安全な実装：</span></div>
<div className="code-line">GET /api/users/<span className="code-string">me</span>/profile <span className="code-comment">// ← セッションからIDを解決</span></div>
<div className="code-line"><span className="code-comment">// 垂直アクセス制御テスト（権限昇格テスト）</span></div>
<div className="code-line"><span className="code-comment">// 一般ユーザーで管理者専用APIへのアクセスを試みる</span></div>
<div className="code-line">POST /api/<span className="code-red">admin</span>/delete-user <span className="code-comment">// ← 一般ユーザーでも実行できないか？</span></div>
<div className="code-line"><span className="code-green">期待: HTTP 403 Forbidden</span></div>
</div>

                <h3>5.4 暗号化テスト <span className="pill pill-c">K3</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>確認項目</th>
                                <th>良い例 ✅</th>
                                <th>悪い例 ❌</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>TLS バージョン</strong></td>
                                <td>TLS 1.2 / 1.3 のみ有効</td>
                                <td>TLS 1.0・1.1・SSL 3.0 が有効</td>
                            </tr>
                            <tr>
                                <td><strong>パスワードハッシュ</strong></td>
                                <td>bcrypt / Argon2 / scrypt（コスト12以上）</td>
                                <td>MD5・SHA-1・SHA-256（ソルトなし）</td>
                            </tr>
                            <tr>
                                <td><strong>暗号鍵の管理</strong></td>
                                <td>KMS（鍵管理システム）で管理</td>
                                <td>ソースコードにハードコード</td>
                            </tr>
                            <tr>
                                <td><strong>通信の暗号化</strong></td>
                                <td>HTTPS強制 + HSTS 設定済み</td>
                                <td>HTTP でのアクセスを許可</td>
                            </tr>
                            <tr>
                                <td><strong>証明書</strong></td>
                                <td>有効な CA 署名証明書・有効期限内</td>
                                <td>自己署名証明書を本番使用</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div
                    className="code-block"
                    data-lang="CLI"
                >
<div className="code-line"><span className="code-comment"># TLS/SSL 設定確認コマンド</span></div>
<div className="code-line"><span className="code-green">openssl s_client -connect example.com:443 2&gt;/dev/null | grep "Protocol"</span></div>
<div className="code-line"><span className="code-comment"># nmap でのSSL/TLS スキャン</span></div>
<div className="code-line"><span className="code-green">nmap --script ssl-enum-ciphers -p 443 example.com</span></div>
<div className="code-line"><span className="code-comment"># セキュリティヘッダーの確認</span></div>
<div className="code-line"><span className="code-green">curl -I https://example.com | grep -i "strict\|content-security\|x-frame"</span></div>
<div className="code-line"><span className="code-comment"># Qualys SSL Labs（オンライン）での確認 → A+ スコアが目標</span></div>
<div className="code-line"><span className="code-comment"># https://www.ssllabs.com/ssltest/</span></div>
</div>

                <h3>5.5 侵入検知テスト（IDS/IPS/SIEM） <span className="pill pill-c">K2</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>システム</th>
                                <th>機能</th>
                                <th>テスト観点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>IDS</strong><br />侵入検知システム</td>
                                <td>不正アクセスを検知・アラート</td>
                                <td>既知攻撃パターンが検知されるか / アラートが担当者に届くか</td>
                            </tr>
                            <tr>
                                <td><strong>IPS</strong><br />侵入防止システム</td>
                                <td>不正アクセスを検知・ブロック</td>
                                <td>攻撃がブロックされるか / 正常トラフィックへの誤検知率</td>
                            </tr>
                            <tr>
                                <td><strong>SIEM</strong><br />セキュリティ情報・イベント管理</td>
                                <td>ログ収集・相関分析・インシデント検知</td>
                                <td>イベント相関ルールの有効性 / MTTD（検知までの平均時間）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>5.6 データ難読化テスト <span className="pill pill-c">K2</span></h3>
                <div className="arch-layers">
                    <div className="arch-row c1">
                        <span className="arch-icon">🎭</span
                        ><span className="arch-label">データマスキング</span
                        ><span className="arch-desc"
                            >本番データを匿名化してテスト環境で使用。例：「田中太郎」→「山田○○」/
                            クレカ番号の下4桁以外をXでマスク</span
                        >
                    </div>
                    <div className="arch-row c2">
                        <span className="arch-icon">🎫</span
                        ><span className="arch-label">トークナイゼーション</span
                        ><span className="arch-desc"
                            >機密データを参照トークンに置換。PCI DSS
                            準拠に多用。クレカ番号「4111-1111-1111-1111」→「tok_abc123xyz」</span
                        >
                    </div>
                    <div className="arch-row c4">
                        <span className="arch-icon">🔐</span><span className="arch-label">暗号化</span
                        ><span className="arch-desc"
                            >数学的変換でデータを読めない形式に。鍵があれば復号可能。AES-256・RSA等を適切に使用する</span
                        >
                    </div>
                </div>
                <div className="callout warning">
                    <div className="callout-title">
                        ⚠️ よくある情報漏洩パターン（テストで確認すること）
                    </div>
                    <ul
                        style={{'margin': '0.4rem 0 0'} as React.CSSProperties}
                    >
                        <li>ログにパスワード・クレカ番号・個人情報が記録されていないか</li>
                        <li>
                            API レスポンスで機密情報が過剰に返されていないか（過剰なデータ公開）
                        </li>
                        <li>エラーメッセージにスタックトレース・DB情報が含まれていないか</li>
                        <li>HTTPヘッダーにサーバーバージョン等の内部情報が含まれていないか</li>
                    </ul>
                </div>
            </section>

            {/* ═══ Chapter 6 ═══ */}
            <hr className="divider"  />
            <section className="section" id="chapter-6">
                <div className="section-header">
                    <span className="chapter-num blue">Ch.6</span>
                    <div>
                        <h2 className="section-title">
                            👥 セキュリティテストにおける人的要因<span className="st-sub"
                                >Human Factors in Security Testing — 105分</span
                            >
                        </h2>
                    </div>
                </div>

                <h3>6.1 脅威アクターの分類（攻撃者の理解） <span className="pill pill-c">K2</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>種類</th>
                                <th>動機</th>
                                <th>スキルレベル</th>
                                <th>典型的な攻撃</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-red)'} as React.CSSProperties}>ハクティビスト</strong>
                                </td>
                                <td>政治・社会的主張</td>
                                <td>中〜高</td>
                                <td>Webサイト改ざん・DDoS・情報公開</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-amber)'} as React.CSSProperties}>サイバー犯罪者</strong>
                                </td>
                                <td>金銭的利益</td>
                                <td>中〜高</td>
                                <td>ランサムウェア・フィッシング・クレカ詐欺</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-purple)'} as React.CSSProperties}
                                        >国家主導アクター (APT)</strong
                                    >
                                </td>
                                <td>スパイ活動・妨害</td>
                                <td>非常に高</td>
                                <td>標的型攻撃・サプライチェーン攻撃</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >インサイダー脅威</strong
                                    >
                                </td>
                                <td>怨恨・金銭・不注意</td>
                                <td>内部知識あり</td>
                                <td>データ持ち出し・システム破壊・フィッシング被害</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--neon-green)'} as React.CSSProperties}
                                        >スクリプトキディ</strong
                                    >
                                </td>
                                <td>好奇心・承認欲求</td>
                                <td>低</td>
                                <td>既存ツール・スクリプトを使った攻撃</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{'color': 'var(--text-secondary)'} as React.CSSProperties}
                                        >倫理的ハッカー</strong
                                    >
                                </td>
                                <td>セキュリティ向上・報奨金</td>
                                <td>高</td>
                                <td>バグバウンティ・ペンテスト（許可あり）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>
                    6.2 ソーシャルエンジニアリング手法と対策 <span className="pill pill-g">K3</span>
                </h3>
                <div className="callout info">
                    <div className="callout-title">📊 重要統計（Verizon DBIR 2024）</div>
                    全セキュリティ侵害の
                    <strong>68%以上</strong>
                    に人的要因が関与。技術的な脆弱性よりも人間の心理を突く攻撃のほうが成功率が高い現実があります。
                </div>

                <div className="trend-grid">
                    <div className="trend-card">
                        <div className="tc-icon">🎣</div>
                        <div className="tc-title">フィッシング (Phishing)</div>
                        <div className="tc-body">
                            偽メール・Webサイトで認証情報を詐取。最も一般的で件数が多い。対策：メールフィルター・DMARC・ユーザー教育
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="tc-icon">🎯</div>
                        <div className="tc-title">スピアフィッシング</div>
                        <div className="tc-body">
                            特定個人・組織を精密にターゲット。BEC（ビジネスメール詐欺）はここに分類。成功率が高く被害額が大きい
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="tc-icon">📞</div>
                        <div className="tc-title">ビッシング (Vishing)</div>
                        <div className="tc-body">
                            電話を使った詐欺。「ITサポートです。パスワードをお聞かせください」等。対策：本人確認ルールの徹底
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="tc-icon">📱</div>
                        <div className="tc-title">スミッシング (Smishing)</div>
                        <div className="tc-body">
                            SMS
                            を使ったフィッシング。「宅配便の不在通知」「銀行からの緊急連絡」等の偽SMS
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="tc-icon">🎭</div>
                        <div className="tc-title">プリテキスティング</div>
                        <div className="tc-body">
                            偽の役職・背景を作り情報を引き出す。「私は監査担当の〇〇です。アクセス権が必要です」
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="tc-icon">💾</div>
                        <div className="tc-title">バイティング</div>
                        <div className="tc-body">
                            マルウェア入りUSBを駐車場に落として好奇心を悪用。「CONFIDENTIAL」というラベルが効果的
                        </div>
                    </div>
                </div>

                <h3>6.3 セキュリティ意識向上プログラム <span className="pill pill-c">K2</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>施策</th>
                                <th>対象</th>
                                <th>測定指標（KPI）</th>
                                <th>目標値</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>フィッシングシミュレーション</strong></td>
                                <td>全従業員</td>
                                <td>クリック率・報告率</td>
                                <td>クリック率5%以下</td>
                            </tr>
                            <tr>
                                <td><strong>セキュリティトレーニング</strong></td>
                                <td>全従業員（年1〜2回）</td>
                                <td>完了率・テストスコア</td>
                                <td>完了率100%・スコア80点以上</td>
                            </tr>
                            <tr>
                                <td><strong>開発者向けセキュアコーディング研修</strong></td>
                                <td>開発者</td>
                                <td>SAST検知数の減少率</td>
                                <td>前四半期比30%削減</td>
                            </tr>
                            <tr>
                                <td><strong>インシデント報告文化の醸成</strong></td>
                                <td>全従業員</td>
                                <td>自己報告件数</td>
                                <td>報告件数の増加（高いほど良い）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="alert green">
                    ✅
                    <strong>重要原則：</strong>
                    フィッシングシミュレーションは「教育目的」であり「懲罰目的」ではありません。失敗した従業員は責めず、追加トレーニングを提供する「Blame-Free
                    Culture」が効果的な意識向上の鍵です。
                </div>
            </section>

            {/* ═══ Chapter 7 ═══ */}
            <hr className="divider"  />
            <section className="section" id="chapter-7">
                <div className="section-header">
                    <span className="chapter-num cyan">Ch.7</span>
                    <div>
                        <h2 className="section-title">
                            📊 セキュリティテストの評価と報告<span className="st-sub"
                                >Security Test Evaluation &amp; Reporting — 70分</span
                            >
                        </h2>
                    </div>
                </div>

                <h3>
                    7.1 CVSS（Common Vulnerability Scoring System）
                    <span className="pill pill-g">K3</span>
                </h3>
                <div className="callout info">
                    <div className="callout-title">🔑 CVSSv3.1 — 業界標準の脆弱性深刻度評価</div>
                    CVSSv3.1は脆弱性を0.0〜10.0のスコアで定量化します。試験では
                    スコアの範囲と対応する優先度・修正期限の組み合わせが頻出です。
                </div>
                <div className="metric-grid">
                    <div className="metric-card" style={{'borderColor': 'rgba(255, 69, 58, 0.3)'} as React.CSSProperties}>
                        <div className="metric-val" style={{'color': 'var(--neon-red)'} as React.CSSProperties}>9.0-10.0</div>
                        <div className="metric-label">Critical — 即時修正<br />（24-48時間以内）</div>
                    </div>
                    <div className="metric-card" style={{'borderColor': 'rgba(255, 183, 64, 0.3)'} as React.CSSProperties}>
                        <div className="metric-val" style={{'color': 'var(--neon-amber)'} as React.CSSProperties}>7.0-8.9</div>
                        <div className="metric-label">High — 優先修正<br />（1週間以内）</div>
                    </div>
                    <div className="metric-card" style={{'borderColor': 'rgba(0, 229, 255, 0.3)'} as React.CSSProperties}>
                        <div className="metric-val" style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}>4.0-6.9</div>
                        <div className="metric-label">Medium — 計画修正<br />（1ヶ月以内）</div>
                    </div>
                    <div className="metric-card" style={{'borderColor': 'rgba(0, 255, 157, 0.3)'} as React.CSSProperties}>
                        <div className="metric-val" style={{'color': 'var(--neon-green)'} as React.CSSProperties}>0.1-3.9</div>
                        <div className="metric-label">Low — スケジュール<br />（四半期内）</div>
                    </div>
                </div>

                <h3>7.2 CVSSv3.1 スコアの構成要素 <span className="pill pill-c">K2</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>メトリクス</th>
                                <th>略号</th>
                                <th>値の選択肢</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>攻撃経路 (Attack Vector)</strong></td>
                                <td>AV</td>
                                <td>Network(N) / Adjacent(A) / Local(L) / Physical(P)</td>
                            </tr>
                            <tr>
                                <td><strong>攻撃の複雑さ (Attack Complexity)</strong></td>
                                <td>AC</td>
                                <td>Low(L) / High(H)</td>
                            </tr>
                            <tr>
                                <td><strong>必要な権限 (Privileges Required)</strong></td>
                                <td>PR</td>
                                <td>None(N) / Low(L) / High(H)</td>
                            </tr>
                            <tr>
                                <td><strong>ユーザー操作 (User Interaction)</strong></td>
                                <td>UI</td>
                                <td>None(N) / Required(R)</td>
                            </tr>
                            <tr>
                                <td><strong>機密性への影響 (Confidentiality Impact)</strong></td>
                                <td>C</td>
                                <td>None(N) / Low(L) / High(H)</td>
                            </tr>
                            <tr>
                                <td><strong>完全性への影響 (Integrity Impact)</strong></td>
                                <td>I</td>
                                <td>None(N) / Low(L) / High(H)</td>
                            </tr>
                            <tr>
                                <td><strong>可用性への影響 (Availability Impact)</strong></td>
                                <td>A</td>
                                <td>None(N) / Low(L) / High(H)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>7.3 セキュリティテストレポートの構成 <span className="pill pill-g">K3</span></h3>
                <div
                    className="code-block"
                    data-lang="Report Structure"
                >
<div className="code-line"><span className="code-green">// セキュリティテストレポート 構成例</span></div>
<div className="code-line"><span className="code-cyan">1. エグゼクティブサマリー（1〜2ページ）</span></div>
<div className="code-line">├── テスト期間・対象・種別</div>
<div className="code-line">├── 総合リスク評価（例：🔴 高リスク）</div>
<div className="code-line">├── 発見した脆弱性の件数（Critical/High/Medium/Low/情報）</div>
<div className="code-line">└── 最優先の推奨アクション（TOP 3）</div>
<div className="code-line"><span className="code-cyan">2. 技術詳細レポート（脆弱性ごとの詳細）</span></div>
<div className="code-line">脆弱性ID: <span className="code-string">VULN-001</span></div>
<div className="code-line">タイトル: <span className="code-string">SQLインジェクション（検索機能）</span></div>
<div className="code-line">深刻度: <span className="code-red">Critical（CVSSv3.1: 9.8）</span></div>
<div className="code-line">CWE: <span className="code-string">CWE-89（SQL Injection）</span></div>
<div className="code-line">再現手順: GET /api/products?search=' OR '1'='1</div>
<div className="code-line">影響: 全製品・ユーザーデータの漏洩・改ざん・削除</div>
<div className="code-line">推奨対策: <span className="code-green">パラメータ化クエリを使用する</span></div>
<div className="code-line">証拠: [スクリーンショット・レスポンスログ添付]</div>
<div className="code-line"><span className="code-cyan">3. 参考資料・推奨事項</span></div>
<div className="code-line"><span className="code-comment">// ステークホルダー別の報告ポイント：</span></div>
<div className="code-line">経営層 → ビジネスリスク・コスト・対策の優先順位</div>
<div className="code-line">技術責任者 → 修正の技術的詳細・工数見積もり</div>
<div className="code-line">開発チーム → 再現手順・修正コード例・テスト方法</div>
<div className="code-line">コンプライアンス → 規制違反リスク・対応期限</div>
</div>
            </section>

            {/* ═══ Chapter 8 ═══ */}
            <hr className="divider"  />
            <section className="section" id="chapter-8">
                <div className="section-header">
                    <span className="chapter-num amber">Ch.8</span>
                    <div>
                        <h2 className="section-title">
                            🔧 セキュリティテストツール<span className="st-sub"
                                >Security Testing Tools — 55分</span
                            >
                        </h2>
                    </div>
                </div>

                <h3>8.1 ツールカテゴリと選定基準 <span className="pill pill-c">K3</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>カテゴリ</th>
                                <th>主なツール</th>
                                <th>主な用途</th>
                                <th>コスト</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Webアプリスキャナー</strong></td>
                                <td>OWASP ZAP, Burp Suite, Nikto, Acunetix</td>
                                <td>Webアプリの動的脆弱性スキャン</td>
                                <td>OSS〜商用</td>
                            </tr>
                            <tr>
                                <td><strong>ネットワークスキャナー</strong></td>
                                <td>Nmap, Masscan</td>
                                <td>ポートスキャン・サービス検出</td>
                                <td>無料（OSS）</td>
                            </tr>
                            <tr>
                                <td><strong>脆弱性スキャナー</strong></td>
                                <td>OpenVAS, Nessus, Nexpose, Qualys</td>
                                <td>既知の脆弱性を網羅的にスキャン</td>
                                <td>OSS〜商用</td>
                            </tr>
                            <tr>
                                <td><strong>SAST</strong></td>
                                <td>Checkmarx, SonarQube, Fortify, Semgrep, Bandit</td>
                                <td>静的解析・ソースコードの欠陥検出</td>
                                <td>OSS〜商用</td>
                            </tr>
                            <tr>
                                <td><strong>SCA</strong></td>
                                <td>Snyk, OWASP Dependency-Check, Dependabot, Black Duck</td>
                                <td>ライブラリの既知脆弱性確認</td>
                                <td>OSS〜商用</td>
                            </tr>
                            <tr>
                                <td><strong>侵入テストFW</strong></td>
                                <td>Metasploit, Exploit-DB, Cobalt Strike</td>
                                <td>エクスプロイト・ペンテスト支援</td>
                                <td>OSS〜商用</td>
                            </tr>
                            <tr>
                                <td><strong>ネットワーク解析</strong></td>
                                <td>Wireshark, tcpdump</td>
                                <td>パケットキャプチャ・通信解析</td>
                                <td>無料（OSS）</td>
                            </tr>
                            <tr>
                                <td><strong>パスワードクラッキング</strong></td>
                                <td>John the Ripper, Hashcat</td>
                                <td>弱いパスワード・ハッシュのテスト</td>
                                <td>無料（OSS）</td>
                            </tr>
                            <tr>
                                <td><strong>ファジング</strong></td>
                                <td>AFL++, Peach Fuzzer, OWASP ZAP Fuzzer</td>
                                <td>ランダム入力で処理堅牢性をテスト</td>
                                <td>OSS〜商用</td>
                            </tr>
                            <tr>
                                <td><strong>セキュリティテスト OS</strong></td>
                                <td>Kali Linux, Parrot OS</td>
                                <td>上記ツール群を含む専用ディストリビューション</td>
                                <td>無料</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>8.2 ツール選定の評価基準 <span className="pill pill-c">K3</span></h3>
                <div className="arch-layers">
                    <div className="arch-row c1">
                        <span className="arch-icon">🔧</span><span className="arch-label">技術的適合性</span
                        ><span className="arch-desc"
                            >テスト対象の技術スタック（Java/.NET/Python・Web/Mobile/API）との互換性
                            / 対象脆弱性カテゴリのカバレッジ / CI/CD パイプラインとの統合容易性 /
                            API の提供（自動化のため）</span
                        >
                    </div>
                    <div className="arch-row c4">
                        <span className="arch-icon">💰</span
                        ><span className="arch-label">コスト・組織基準</span
                        ><span className="arch-desc"
                            >ライセンスコスト（OSS vs 商用） / 学習コスト・チームスキルレベル /
                            ベンダーサポートの質 / コミュニティの活発さ（OSS の場合）</span
                        >
                    </div>
                    <div className="arch-row c2">
                        <span className="arch-icon">📋</span
                        ><span className="arch-label">プロジェクト適合性</span
                        ><span className="arch-desc"
                            >誤検知（False Positive）率の低さ / レポートのカスタマイズ性 /
                            コンプライアンス要件への対応 / テストの頻度と規模（継続的 vs
                            定期的）</span
                        >
                    </div>
                </div>
            </section>
            {/* ═══ Chapter 9 ═══ */}
            <hr className="divider"  />
            <section className="section" id="chapter-9">
                <div className="section-header">
                    <span className="chapter-num purple">Ch.9</span>
                    <div>
                        <h2 className="section-title">
                            📋 標準・規制・OWASP Top 10:2025<span className="st-sub"
                                >Standards &amp; Industry Trends — 40分</span
                            >
                        </h2>
                    </div>
                </div>

                <h3>9.1 主要セキュリティ標準と規制 <span className="pill pill-c">K2</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>標準・規制</th>
                                <th>概要</th>
                                <th>テストへの影響</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>ISO/IEC 27001:2022</strong></td>
                                <td>情報セキュリティ管理システムの国際標準</td>
                                <td>定期的な内部監査・脆弱性評価が要求される</td>
                            </tr>
                            <tr>
                                <td><strong>NIST CSF 2.0</strong></td>
                                <td>識別・保護・検知・対応・回復の5機能フレームワーク</td>
                                <td>リスクベースのセキュリティプログラム構築に活用</td>
                            </tr>
                            <tr>
                                <td><strong>PCI DSS v4.0</strong></td>
                                <td>クレジットカード情報を扱う全組織に適用</td>
                                <td>要件11：定期的な脆弱性スキャンと侵入テストが必須</td>
                            </tr>
                            <tr>
                                <td><strong>GDPR（EU）</strong></td>
                                <td>
                                    欧州市民の個人データ保護規制。違反時：最大2,000万ユーロ or
                                    年間売上4%
                                </td>
                                <td>データ保護テスト・プライバシーバイデザインの検証</td>
                            </tr>
                            <tr>
                                <td><strong>OWASP Testing Guide v4.2</strong></td>
                                <td>Webアプリセキュリティテストの包括的ガイド（無償）</td>
                                <td>業界標準として広く採用されるテスト観点の基盤</td>
                            </tr>
                            <tr>
                                <td><strong>PTES</strong></td>
                                <td>Penetration Testing Execution Standard</td>
                                <td>ペンテストの実施標準として参照</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>9.2 🔥 OWASP Top 10:2025（最新版） <span className="pill pill-g">K4</span></h3>
                <div className="callout danger">
                    <div className="callout-title">🎯 試験最頻出！OWASP Top 10:2025</div>
                    CT-SEC 試験では OWASP Top 10
                    の各カテゴリの内容・テスト方法・対策が頻繁に出題されます。2021年版からの変更点も把握しておくことが重要です。
                </div>

                {/* A01 */}
                <div
                    className="arch-row c5"
                    style={{'borderRadius': 'var(--r-sm) var(--r-md) var(--r-md) var(--r-sm)'} as React.CSSProperties}
                >
                    <span className="arch-icon">🏆</span>
                    <div>
                        <div
                            style={{'fontFamily': 'var(--font-mono)'} as React.CSSProperties}
                        >
                            A01:2025 — Broken Access Control
                            <span className="pill pill-r">連続1位</span>
                        </div>
                        <div
                            style={{'fontSize': '0.83rem'} as React.CSSProperties}
                        >
                            認証済みユーザーに適切な制限が実施されない脆弱性。<strong>IDOR・権限昇格・強制ブラウジング</strong>が含まれる。テスト：IDOR
                            テスト・認可バイパステスト・JWT操作テスト。対策：デフォルトでアクセス拒否（ホワイトリスト）・サーバー側での認可チェック
                        </div>
                    </div>
                </div>

                {/* A02 */}
                <div
                    className="arch-row c4"
                    style={{'borderRadius': 'var(--r-sm) var(--r-md) var(--r-md) var(--r-sm)'} as React.CSSProperties}
                >
                    <span className="arch-icon">⚙️</span>
                    <div>
                        <div
                            style={{'fontFamily': 'var(--font-mono)'} as React.CSSProperties}
                        >
                            A02:2025 — Security Misconfiguration
                            <span className="pill pill-a">A05→A02 大幅上昇</span>
                        </div>
                        <div
                            style={{'fontSize': '0.83rem'} as React.CSSProperties}
                        >
                            デフォルト認証情報・デバッグモード有効・エラーメッセージの情報漏洩・不要なポート開放・セキュリティヘッダー未設定。クラウド設定ミス（S3公開等）の増加が順位上昇の主因。テスト：CIS
                            Benchmark・セキュリティヘッダースキャン・デフォルト認証情報テスト
                        </div>
                    </div>
                </div>

                {/* A03 */}
                <div
                    className="arch-row c2"
                    style={{'borderRadius': 'var(--r-sm) var(--r-md) var(--r-md) var(--r-sm)'} as React.CSSProperties}
                >
                    <span className="arch-icon">🔗</span>
                    <div>
                        <div
                            style={{'fontFamily': 'var(--font-mono)'} as React.CSSProperties}
                        >
                            A03:2025 — Software Supply Chain Failures
                            <span className="pill pill-c">2025新強調</span>
                        </div>
                        <div
                            style={{'fontSize': '0.83rem'} as React.CSSProperties}
                        >
                            SolarWinds攻撃・Log4Shell（CVE-2021-44228、CVSS
                            10.0）等を反映。脆弱なOSSライブラリ・悪意あるコード注入・CI/CDパイプライン汚染。テスト：SCA（Snyk・Dependency-Check）・SBOM
                            の作成確認・依存関係更新状況の確認。対策：依存関係の最小化・SCA の CI/CD
                            組み込み
                        </div>
                    </div>
                </div>

                {/* A04 */}
                <div
                    className="arch-row c3"
                    style={{'borderRadius': 'var(--r-sm) var(--r-md) var(--r-md) var(--r-sm)'} as React.CSSProperties}
                >
                    <span className="arch-icon">🔐</span>
                    <div>
                        <div
                            style={{'fontFamily': 'var(--font-mono)'} as React.CSSProperties}
                        >
                            A04:2025 — Cryptographic Failures <span className="pill pill-p">旧A02</span>
                        </div>
                        <div
                            style={{'fontSize': '0.83rem'} as React.CSSProperties}
                        >
                            HTTPでの機密データ送信・MD5/SHA-1でのパスワード保管・ハードコードされた暗号化鍵・TLS
                            1.0/1.1の使用。テスト：SSL Labs
                            スキャン・平文送受信確認・パスワードストレージ確認。対策：TLS
                            1.2以上強制（HSTS）・bcrypt/Argon2 の使用・KMS による鍵管理
                        </div>
                    </div>
                </div>

                {/* A05 */}
                <div
                    className="arch-row c1"
                    style={{'borderRadius': 'var(--r-sm) var(--r-md) var(--r-md) var(--r-sm)'} as React.CSSProperties}
                >
                    <span className="arch-icon">💉</span>
                    <div>
                        <div
                            style={{'fontFamily': 'var(--font-mono)'} as React.CSSProperties}
                        >
                            A05:2025 — Injection <span className="pill pill-g">旧A03 若干低下</span>
                        </div>
                        <div
                            style={{'fontSize': '0.83rem'} as React.CSSProperties}
                        >
                            SQLi・XSS・コマンドインジェクション・LDAP/XMLインジェクション。テスト：入力フィールドへの
                            <code style={{'color': 'var(--neon-amber)'} as React.CSSProperties}>'</code> や
                            <code style={{'color': 'var(--neon-amber)'} as React.CSSProperties}>"</code>
                            入力によるエラー確認・OWASP ZAP/Burp
                            による自動スキャン・手動ペイロードテスト。対策：パラメータ化クエリ・入力バリデーション（ホワイトリスト）・WAF
                        </div>
                    </div>
                </div>

                {/* A06 */}
                <div
                    className="arch-row c6"
                    style={{'borderRadius': 'var(--r-sm) var(--r-md) var(--r-md) var(--r-sm)'} as React.CSSProperties}
                >
                    <span className="arch-icon">🏗️</span>
                    <div>
                        <div
                            style={{'fontFamily': 'var(--font-mono)'} as React.CSSProperties}
                        >
                            A06:2025 — Insecure Design <span className="pill pill-c">旧A04 維持</span>
                        </div>
                        <div
                            style={{'fontSize': '0.83rem'} as React.CSSProperties}
                        >
                            レート制限なしの認証・秘密の質問によるパスワードリセット・ビジネスロジックの欠陥（クーポン複数回適用等）。テスト：脅威モデリングのレビュー・ビジネスロジックテスト・レート制限テスト。対策：設計フェーズでの脅威モデリング・乱用ケースを要件に含める
                        </div>
                    </div>
                </div>

                {/* A07 */}
                <div
                    className="arch-row c1"
                    style={{'borderRadius': 'var(--r-sm) var(--r-md) var(--r-md) var(--r-sm)'} as React.CSSProperties}
                >
                    <span className="arch-icon">🔑</span>
                    <div>
                        <div
                            style={{'fontFamily': 'var(--font-mono)'} as React.CSSProperties}
                        >
                            A07:2025 — Authentication Failures
                            <span className="pill pill-r">旧A07 維持</span>
                        </div>
                        <div
                            style={{'fontSize': '0.83rem'} as React.CSSProperties}
                        >
                            弱いパスワード許容・ブルートフォース対策なし・弱いセッション管理・ログアウト後のセッション無効化なし・MFA
                            未実装。テスト：ブルートフォースシミュレーション・セッション固定テスト・セッション有効期限テスト。対策：MFA
                            実装・アカウントロック・安全なセッション管理（HttpOnly/Secureフラグ）
                        </div>
                    </div>
                </div>

                {/* A08 */}
                <div
                    className="arch-row c4"
                    style={{'borderRadius': 'var(--r-sm) var(--r-md) var(--r-md) var(--r-sm)'} as React.CSSProperties}
                >
                    <span className="arch-icon">🔧</span>
                    <div>
                        <div
                            style={{'fontFamily': 'var(--font-mono)'} as React.CSSProperties}
                        >
                            A08:2025 — Software/Data Integrity Failures
                            <span className="pill pill-a">旧A08 維持</span>
                        </div>
                        <div
                            style={{'fontSize': '0.83rem'} as React.CSSProperties}
                        >
                            デジタル署名検証なしの更新・安全でないデシリアライゼーション・CI/CDパイプラインの保護不足。テスト：デシリアライゼーションテスト（ysoserial等）・CI/CD
                            パイプラインのセキュリティ評価・ソフトウェア更新メカニズムの検証。対策：デジタル署名の使用・パイプラインのアクセス制御強化
                        </div>
                    </div>
                </div>

                {/* A09 */}
                <div
                    className="arch-row c2"
                    style={{'borderRadius': 'var(--r-sm) var(--r-md) var(--r-md) var(--r-sm)'} as React.CSSProperties}
                >
                    <span className="arch-icon">📜</span>
                    <div>
                        <div
                            style={{'fontFamily': 'var(--font-mono)'} as React.CSSProperties}
                        >
                            A09:2025 — Security Logging &amp; Alerting Failures
                            <span className="pill pill-c">旧A09 維持</span>
                        </div>
                        <div
                            style={{'fontSize': '0.83rem'} as React.CSSProperties}
                        >
                            ログイン失敗の未記録・アラート不在・ログ改ざん可能・ログへの機密情報記録・保存期間不足。IBM
                            2024：侵害検知平均
                            277日。テスト：攻撃後のログ確認・アラートトリガーテスト・ログ完全性テスト。対策：全認証試行のログ・SIEM
                            導入・ログ改ざん防止
                        </div>
                    </div>
                </div>

                {/* A10 */}
                <div
                    className="arch-row c3"
                    style={{'borderRadius': 'var(--r-sm) var(--r-md) var(--r-md) var(--r-sm)'} as React.CSSProperties}
                >
                    <span className="arch-icon">⚠️</span>
                    <div>
                        <div
                            style={{'fontFamily': 'var(--font-mono)'} as React.CSSProperties}
                        >
                            A10:2025 — Mishandling of Exceptional Conditions
                            <span className="pill pill-p">2025 新カテゴリ</span>
                        </div>
                        <div
                            style={{'fontSize': '0.83rem'} as React.CSSProperties}
                        >
                            エラー時のスタックトレース公開・Fail
                            Open（エラー時にアクセス許可）・エラー処理の不整合によるビジネスロジックバイパス（2021年版のSSRFを置き換え）。テスト：エラーハンドリングテスト・異常入力への応答確認・例外後のシステム状態確認。対策：汎用エラーメッセージ（詳細はログ）・Fail
                            Secure 実装
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Exam Tips ═══ */}
            <hr className="divider"  />
            <section className="section" id="exam-tips">
                <div className="section-header">
                    <span className="chapter-num amber">試験対策</span>
                    <div>
                        <h2 className="section-title">
                            📝 試験対策・サンプル問題<span className="st-sub"
                                >Exam Preparation &amp; Sample Questions</span
                            >
                        </h2>
                    </div>
                </div>

                <h3>章別配点と重要度 <span className="pill pill-g">重要</span></h3>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="ec-chap">Chapter 1</div>
                        <div className="ec-title">セキュリティテストの基礎（CIA・リスク・監査）</div>
                        <div className="ec-stars">★★★★☆</div>
                        <div className="ec-time">105分 / 推定 ~8問</div>
                    </div>
                    <div className="exam-card">
                        <div className="ec-chap">Chapter 2</div>
                        <div className="ec-title">目的・ゴール・5アプローチ・テスト種別</div>
                        <div className="ec-stars">★★★★★</div>
                        <div className="ec-time">130分 / 推定 ~10問</div>
                    </div>
                    <div className="exam-card">
                        <div className="ec-chap">Chapter 3</div>
                        <div className="ec-title">プロセス・6ステージ・STRIDE・ペンテスト5フェーズ</div>
                        <div className="ec-stars">★★★★★</div>
                        <div className="ec-time">140分 / 推定 ~10問</div>
                    </div>
                    <div className="exam-card">
                        <div className="ec-chap">Chapter 4</div>
                        <div className="ec-title">SDLC・DevSecOps・シフトレフト・各フェーズ活動</div>
                        <div className="ec-stars">★★★★☆</div>
                        <div className="ec-time">225分 / 推定 ~7問</div>
                    </div>
                    <div className="exam-card">
                        <div className="ec-chap">Chapter 5</div>
                        <div className="ec-title">認証・認可・暗号化・FW・データ難読化のテスト</div>
                        <div className="ec-stars">★★★★★</div>
                        <div className="ec-time">240分 / 推定 ~8問</div>
                    </div>
                    <div className="exam-card">
                        <div className="ec-chap">Chapter 6</div>
                        <div className="ec-title">
                            脅威アクター・ソーシャルエンジニアリング・意識向上
                        </div>
                        <div className="ec-stars">★★★★☆</div>
                        <div className="ec-time">105分 / 推定 ~5問</div>
                    </div>
                    <div className="exam-card">
                        <div className="ec-chap">Chapter 7</div>
                        <div className="ec-title">CVSS・レポート構成・ステークホルダー別報告</div>
                        <div className="ec-stars">★★★★☆</div>
                        <div className="ec-time">70分 / 推定 ~5問</div>
                    </div>
                    <div className="exam-card">
                        <div className="ec-chap">Chapter 8</div>
                        <div className="ec-title">ツールの種類・選定基準・POC評価プロセス</div>
                        <div className="ec-stars">★★★☆☆</div>
                        <div className="ec-time">55分 / 推定 ~4問</div>
                    </div>
                    <div className="exam-card">
                        <div className="ec-chap">Chapter 9</div>
                        <div className="ec-title">OWASP Top 10:2025 全カテゴリ・標準・規制</div>
                        <div className="ec-stars">★★★★★</div>
                        <div className="ec-time">40分 / 推定 ~8問</div>
                    </div>
                </div>

                <h3>必ず覚える重要概念チェックリスト</h3>
                <div className="callout success">
                    <div className="callout-title">✅ 試験直前チェックリスト</div>
                    <ul
                        style={{'margin': '0.5rem 0 0'} as React.CSSProperties}
                    >
                        <li>CIA トライアドの各要素と侵害例・対策を説明できる</li>
                        <li>リスク = 脅威 × 影響度の計算式と TAMT リスク対応戦略を説明できる</li>
                        <li>
                            セキュリティテストの5アプローチ（ポリシー・リスク・標準・要件・脆弱性ベース）を説明できる
                        </li>
                        <li>SAST・DAST・IAST・SCA・ペンテストの違いと適用タイミングを説明できる</li>
                        <li>STRIDE の6カテゴリを順番に言える</li>
                        <li>
                            ペンテストの5フェーズ（偵察→スキャン→列挙→エクスプロイト→後処理）を説明できる
                        </li>
                        <li>セキュリティ監査 vs セキュリティテストの違いを説明できる</li>
                        <li>IDOR テストの手順を説明できる</li>
                        <li>
                            CVSSv3.1 の4段階（Critical 9.0+/High 7.0-8.9/Medium 4.0-6.9/Low
                            0.1-3.9）を覚えた
                        </li>
                        <li>
                            ソーシャルエンジニアリングの主要手法（フィッシング・スピアフィッシング・ビッシング・スミッシング・プリテキスティング）を説明できる
                        </li>
                        <li>OWASP Top 10:2025 の全10カテゴリとその内容を説明できる</li>
                        <li>
                            2025年版と2021年版の主な変更点（A02の大幅上昇・A03の供給チェーン・A10の新追加）を説明できる
                        </li>
                        <li>
                            セキュリティヘッダー（HSTS・CSP・X-Frame-Options等）の役割を説明できる
                        </li>
                        <li>DevSecOps パイプラインへのセキュリティ統合の全体フローを説明できる</li>
                    </ul>
                </div>

                <h3>サンプル問題と解説</h3>

                <h4>問 1（K2 / Ch.1）CIA トライアド</h4>
                <div className="callout info">
                    <div className="callout-title">問題</div>
                    ランサムウェアがシステムを暗号化し、業務システムへのアクセスが完全に失われました。これは情報セキュリティの何を侵害していますか？<br /><br />
                    A) 機密性（Confidentiality）<br />B) 完全性（Integrity）<br />C)
                    可用性（Availability）<br />D) 否認防止性（Non-repudiation）
                </div>
                <div className="alert green">
                    ✅ <strong>正解: C（可用性）</strong> —
                    可用性とは「許可されたユーザーが必要な時にシステムを使えること」。ランサムウェアによるアクセス不能はその典型的な侵害。A=不正アクセスで機密情報取得、B=データ改ざん、D=行為の否認に対応する。
                </div>

                <h4>問 2（K3 / Ch.2）テストアプローチの選択</h4>
                <div className="callout info">
                    <div className="callout-title">問題</div>
                    セキュリティテストチームが CVE
                    データベースと組織の過去のインシデント記録を基に、最も発生しやすい脆弱性を優先してテストを計画しています。このアプローチはどれか？<br /><br />
                    A) ポリシーベーステスト　B) リスクベーステスト　C) 脆弱性ベーステスト　D)
                    標準ベーステスト
                </div>
                <div className="alert green">
                    ✅ <strong>正解: C（脆弱性ベーステスト）</strong> —
                    「CVEデータベース」「過去の脆弱性記録」を基にテストするのが脆弱性ベーステストのキーワード。ポリシーベース=組織ポリシーへの準拠確認、リスクベース=リスクスコア（発生確率×影響度）で優先化、標準ベース=ISO・OWASP等の外部標準準拠。
                </div>

                <h4>問 3（K4 / Ch.5）IDOR の識別</h4>
                <div className="callout info">
                    <div className="callout-title">問題</div>
                    API エンドポイント
                    <code style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}>GET /api/users/{"{"}userId{"}"}/profile</code>
                    をテストしています。ユーザーA（userId=1001）でログインして
                    <code style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}>/api/users/1002/profile</code>
                    にアクセスしたところ、ユーザーBのプロフィール情報が返されました。これはどの脆弱性か？<br /><br />
                    A) SQLインジェクション　B) CSRF　C) IDOR（Insecure Direct Object Reference）　D)
                    XSS
                </div>
                <div className="alert green">
                    ✅ <strong>正解: C（IDOR）</strong> —
                    オブジェクト（userId）への直接参照が適切なアクセス制御なしに他ユーザーのデータアクセスを許してしまう脆弱性。OWASP
                    A01:2025「Broken Access
                    Control」に該当。SQLi=SQL文として実行される入力、CSRF=被害者のセッション悪用、XSS=スクリプト注入。
                </div>

                <h4>問 4（K3 / Ch.7）CVSS スコアの解釈</h4>
                <div className="callout info">
                    <div className="callout-title">問題</div>
                    脆弱性スキャンの結果、CVSSv3.1 スコア 8.5
                    の脆弱性が発見されました。修正優先度として最も適切なものはどれか？<br /><br />
                    A) Critical — 即時修正（24時間以内）　B) High — 1週間以内に修正　C) Medium —
                    1ヶ月以内　D) Low — 四半期内
                </div>
                <div className="alert green">
                    ✅ <strong>正解: B（High — 1週間以内）</strong> — CVSSv3.1: 9.0-10.0=Critical,
                    <strong>7.0-8.9=High（スコア8.5はここ）</strong>, 4.0-6.9=Medium,
                    0.1-3.9=Low。スコア9.0以上でないため即時修正は不要だが、高優先度として1週間以内に対応する必要がある。
                </div>

                <h4>問 5（K2 / Ch.6）ソーシャルエンジニアリング</h4>
                <div className="callout info">
                    <div className="callout-title">問題</div>
                    全従業員に「ITサポートからの緊急メール」を装い、パスワード変更リンクを含む模擬フィッシングメールを送信しました。このテストの主な目的として最も適切なものはどれか？<br /><br />
                    A) 脆弱なパスワードを使う従業員を特定して懲戒処分の証拠にする　B)
                    従業員のセキュリティ意識を評価し教育ニーズを特定する　C)
                    フィッシングフィルターの有効性のみを評価する　D)
                    クリックした従業員を解雇する証拠にする
                </div>
                <div className="alert green">
                    ✅ <strong>正解: B（教育ニーズの特定）</strong> —
                    フィッシングシミュレーションは「教育目的」であり「懲罰目的」ではありません。クリック率・報告率を測定し、失敗した従業員に追加トレーニングを提供するBlameFree
                    Culture が重要。A・Dは懲罰目的で不適切。Cは一側面のみで不十分。
                </div>
            </section>

            {/* ═══ Tools Table ═══ */}
            <hr className="divider"  />
            <section className="section" id="tools">
                <div className="section-header">
                    <span className="chapter-num cyan">ツール</span>
                    <div>
                        <h2 className="section-title">
                            🔧 主要セキュリティテストツール比較<span className="st-sub"
                                >Security Testing Tools Reference 2025</span
                            >
                        </h2>
                    </div>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ツール</th>
                                <th>種類</th>
                                <th>特徴</th>
                                <th>コスト</th>
                                <th>公式 URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>OWASP ZAP</strong></td>
                                <td>DAST / Webスキャナー</td>
                                <td>CI/CD統合容易・業界標準OSS</td>
                                <td>無料（OSS）</td>
                                <td>
                                    <a
                                        href="https://www.zaproxy.org/"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >zaproxy.org</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Burp Suite</strong></td>
                                <td>DAST / プロキシ</td>
                                <td>業界標準・プロキシ機能が強力</td>
                                <td>Community無料・Pro有料</td>
                                <td>
                                    <a
                                        href="https://portswigger.net/burp"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >portswigger.net/burp</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Nmap</strong></td>
                                <td>ネットワークスキャナー</td>
                                <td>ポートスキャン・サービス検出の標準</td>
                                <td>無料（OSS）</td>
                                <td>
                                    <a
                                        href="https://nmap.org/"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >nmap.org</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Metasploit</strong></td>
                                <td>侵入テストFW</td>
                                <td>エクスプロイトフレームワーク</td>
                                <td>Community無料・Pro有料</td>
                                <td>
                                    <a
                                        href="https://www.metasploit.com/"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >metasploit.com</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Nessus</strong></td>
                                <td>脆弱性スキャナー</td>
                                <td>高精度の自動スキャン</td>
                                <td>商用（個人版無料）</td>
                                <td>
                                    <a
                                        href="https://www.tenable.com/products/nessus"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >tenable.com</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>OpenVAS</strong></td>
                                <td>脆弱性スキャナー</td>
                                <td>Nessusのオープンソース版</td>
                                <td>無料（OSS）</td>
                                <td>
                                    <a
                                        href="https://www.openvas.org/"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >openvas.org</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>SonarQube</strong></td>
                                <td>SAST</td>
                                <td>多言語対応・CI/CD統合</td>
                                <td>Community無料・商用あり</td>
                                <td>
                                    <a
                                        href="https://www.sonarsource.com/products/sonarqube/"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >sonarsource.com</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Semgrep</strong></td>
                                <td>SAST</td>
                                <td>OSS・カスタムルール・多言語</td>
                                <td>Community無料</td>
                                <td>
                                    <a
                                        href="https://semgrep.dev/"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >semgrep.dev</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Snyk</strong></td>
                                <td>SCA + SAST</td>
                                <td>開発者向け・CI/CD統合容易</td>
                                <td>無料プランあり・商用</td>
                                <td>
                                    <a
                                        href="https://snyk.io/"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >snyk.io</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>OWASP Dep-Check</strong></td>
                                <td>SCA</td>
                                <td>Java・.NET等の依存関係スキャン</td>
                                <td>無料（OSS）</td>
                                <td>
                                    <a
                                        href="https://owasp.org/www-project-dependency-check/"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >owasp.org</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Wireshark</strong></td>
                                <td>ネットワーク解析</td>
                                <td>パケットキャプチャ・プロトコル解析</td>
                                <td>無料（OSS）</td>
                                <td>
                                    <a
                                        href="https://www.wireshark.org/"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >wireshark.org</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Kali Linux</strong></td>
                                <td>セキュリティOS</td>
                                <td>600以上のツールを含む専用ディストリビューション</td>
                                <td>無料</td>
                                <td>
                                    <a
                                        href="https://www.kali.org/"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >kali.org</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Qualys SSL Labs</strong></td>
                                <td>オンラインスキャナー</td>
                                <td>TLS/SSL設定を A〜F でスコアリング</td>
                                <td>無料（オンライン）</td>
                                <td>
                                    <a
                                        href="https://www.ssllabs.com/ssltest/"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >ssllabs.com</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>SecurityHeaders.com</strong></td>
                                <td>オンラインスキャナー</td>
                                <td>セキュリティヘッダーを A〜F でスコアリング</td>
                                <td>無料（オンライン）</td>
                                <td>
                                    <a
                                        href="https://securityheaders.com/"
                                        target="_blank"
                                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                                        >securityheaders.com</a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ═══ References ═══ */}
            <hr className="divider"  />
            <section className="section" id="references">
                <div className="section-header">
                    <span className="chapter-num purple">参照</span>
                    <div>
                        <h2 className="section-title">
                            📚 参照URL一覧<span className="st-sub"
                                >All References — Category Labeled</span
                            >
                        </h2>
                    </div>
                </div>

                <h3>🏛️ 公式 ISTQB® リソース</h3>
                <div className="ref-grid">
                    <a
                        href="https://istqb.org/certifications/certified-tester-security-tester-ct-sec/"
                        target="_blank"
                        className="ref-card"
                        ><div className="ref-cat">公式ISTQB</div>
                        <div className="ref-title">CT-SEC 認定ページ（公式）</div>
                        <div className="ref-url">
                            istqb.org/certifications/certified-tester-security-tester-ct-sec/
                        </div></a
                    >
                    <a
                        href="https://istqb.org/certifications/certified-tester-security-test-engineer/"
                        target="_blank"
                        className="ref-card"
                        ><div className="ref-cat">公式ISTQB — 2025新資格</div>
                        <div className="ref-title">
                            CT-STE（Security Test Engineer）— CT-SEC後継資格
                        </div>
                        <div className="ref-url">
                            istqb.org/certifications/certified-tester-security-test-engineer/
                        </div></a
                    >
                    <a
                        href="https://istqb.org/certifications/certified-tester-foundation-level/"
                        target="_blank"
                        className="ref-card"
                        ><div className="ref-cat">公式ISTQB</div>
                        <div className="ref-title">CTFL v4.0（CT-SEC前提資格）</div>
                        <div className="ref-url">
                            istqb.org/certifications/certified-tester-foundation-level/
                        </div></a
                    >
                    <a
                        href="https://glossary.istqb.org/en_US/search?term="
                        target="_blank"
                        className="ref-card"
                        ><div className="ref-cat">公式ISTQB</div>
                        <div className="ref-title">ISTQB グロッサリー（用語集）</div>
                        <div className="ref-url">glossary.istqb.org/en_US/search?term=</div></a
                    >
                    <a href="https://istqb.org/exam-providers/" target="_blank" className="ref-card"
                        ><div className="ref-cat">公式ISTQB</div>
                        <div className="ref-title">試験プロバイダー検索</div>
                        <div className="ref-url">istqb.org/exam-providers/</div></a
                    >
                    <a href="https://istqb.org/training-providers/" target="_blank" className="ref-card"
                        ><div className="ref-cat">公式ISTQB</div>
                        <div className="ref-title">研修プロバイダー検索</div>
                        <div className="ref-url">istqb.org/training-providers/</div></a
                    >
                </div>

                <h3>🏛️ OWASP 公式リソース</h3>
                <div className="ref-grid">
                    <a href="https://owasp.org/Top10/2025/" target="_blank" className="ref-card"
                        ><div className="ref-cat">OWASP — 最重要</div>
                        <div className="ref-title">OWASP Top 10:2025（最新版）</div>
                        <div className="ref-url">owasp.org/Top10/2025/</div></a
                    >
                    <a
                        href="https://owasp.org/www-project-top-ten/"
                        target="_blank"
                        className="ref-card"
                        ><div className="ref-cat">OWASP</div>
                        <div className="ref-title">OWASP Top 10（プロジェクトページ）</div>
                        <div className="ref-url">owasp.org/www-project-top-ten/</div></a
                    >
                    <a
                        href="https://owasp.org/www-project-web-security-testing-guide/"
                        target="_blank"
                        className="ref-card"
                        ><div className="ref-cat">OWASP</div>
                        <div className="ref-title">OWASP Testing Guide v4.2（Webテスト標準ガイド）</div>
                        <div className="ref-url">
                            owasp.org/www-project-web-security-testing-guide/
                        </div></a
                    >
                    <a
                        href="https://owasp.org/www-project-application-security-verification-standard/"
                        target="_blank"
                        className="ref-card"
                        ><div className="ref-cat">OWASP</div>
                        <div className="ref-title">OWASP ASVS（アプリセキュリティ検証標準）</div>
                        <div className="ref-url">
                            owasp.org/www-project-application-security-verification-standard/
                        </div></a
                    >
                    <a href="https://cheatsheetseries.owasp.org/" target="_blank" className="ref-card"
                        ><div className="ref-cat">OWASP</div>
                        <div className="ref-title">OWASP Cheat Sheet Series（実装ガイド集）</div>
                        <div className="ref-url">cheatsheetseries.owasp.org/</div></a
                    >
                    <a
                        href="https://owasp.org/www-project-api-security/"
                        target="_blank"
                        className="ref-card"
                        ><div className="ref-cat">OWASP</div>
                        <div className="ref-title">OWASP API Security Top 10:2023</div>
                        <div className="ref-url">owasp.org/www-project-api-security/</div></a
                    >
                </div>

                <h3>📋 セキュリティ標準・フレームワーク</h3>
                <div className="ref-grid">
                    <a href="https://www.nist.gov/cyberframework" target="_blank" className="ref-card"
                        ><div className="ref-cat">標準 — 必読</div>
                        <div className="ref-title">NIST Cybersecurity Framework 2.0</div>
                        <div className="ref-url">nist.gov/cyberframework</div></a
                    >
                    <a href="https://www.iso.org/standard/27001" target="_blank" className="ref-card"
                        ><div className="ref-cat">標準</div>
                        <div className="ref-title">ISO/IEC 27001:2022（情報セキュリティ管理）</div>
                        <div className="ref-url">iso.org/standard/27001</div></a
                    >
                    <a href="https://www.pcisecuritystandards.org/" target="_blank" className="ref-card"
                        ><div className="ref-cat">標準</div>
                        <div className="ref-title">PCI DSS v4.0（支払いカードセキュリティ）</div>
                        <div className="ref-url">pcisecuritystandards.org</div></a
                    >
                    <a href="https://attack.mitre.org/" target="_blank" className="ref-card"
                        ><div className="ref-cat">標準 — 必読</div>
                        <div className="ref-title">
                            MITRE ATT&amp;CK（攻撃者戦術・技術データベース）
                        </div>
                        <div className="ref-url">attack.mitre.org/</div></a
                    >
                    <a href="https://nvd.nist.gov/" target="_blank" className="ref-card"
                        ><div className="ref-cat">標準</div>
                        <div className="ref-title">NVD（国立脆弱性データベース・CVSS付き）</div>
                        <div className="ref-url">nvd.nist.gov/</div></a
                    >
                    <a
                        href="https://www.cisecurity.org/cis-benchmarks"
                        target="_blank"
                        className="ref-card"
                        ><div className="ref-cat">標準</div>
                        <div className="ref-title">CIS Benchmarks（OSハードニング標準）</div>
                        <div className="ref-url">cisecurity.org/cis-benchmarks</div></a
                    >
                </div>

                <h3>📊 レポート・調査データ</h3>
                <div className="ref-grid">
                    <a
                        href="https://www.ibm.com/reports/data-breach"
                        target="_blank"
                        className="ref-card"
                        ><div className="ref-cat">業界レポート</div>
                        <div className="ref-title">IBM Cost of a Data Breach Report 2024（$4.88M）</div>
                        <div className="ref-url">ibm.com/reports/data-breach</div></a
                    >
                    <a
                        href="https://www.verizon.com/business/resources/reports/dbir/"
                        target="_blank"
                        className="ref-card"
                        ><div className="ref-cat">業界レポート</div>
                        <div className="ref-title">Verizon DBIR 2024（68%に人的要因が関与）</div>
                        <div className="ref-url">verizon.com/business/resources/reports/dbir/</div></a
                    >
                    <a
                        href="https://www.veracode.com/state-of-software-security-report"
                        target="_blank"
                        className="ref-card"
                        ><div className="ref-cat">業界レポート</div>
                        <div className="ref-title">Veracode State of Software Security 2025</div>
                        <div className="ref-url">veracode.com/state-of-software-security-report</div></a
                    >
                </div>

                <h3>🎓 学習・実践リソース</h3>
                <div className="ref-grid">
                    <a href="https://portswigger.net/web-security" target="_blank" className="ref-card"
                        ><div className="ref-cat">学習 — 強くおすすめ</div>
                        <div className="ref-title">
                            PortSwigger Web Security Academy（無料・実践的）
                        </div>
                        <div className="ref-url">portswigger.net/web-security</div></a
                    >
                    <a href="https://tryhackme.com/" target="_blank" className="ref-card"
                        ><div className="ref-cat">学習 — 実践</div>
                        <div className="ref-title">TryHackMe（ゲーミフィケーション形式の学習）</div>
                        <div className="ref-url">tryhackme.com</div></a
                    >
                    <a href="https://www.hackthebox.com/" target="_blank" className="ref-card"
                        ><div className="ref-cat">学習 — 実践上級</div>
                        <div className="ref-title">Hack The Box（上級者向け侵入テスト練習）</div>
                        <div className="ref-url">hackthebox.com</div></a
                    >
                    <a href="https://dvwa.co.uk/" target="_blank" className="ref-card"
                        ><div className="ref-cat">学習 — 脆弱環境</div>
                        <div className="ref-title">DVWA（Damn Vulnerable Web Application）</div>
                        <div className="ref-url">dvwa.co.uk/</div></a
                    >
                    <a
                        href="https://owasp.org/www-project-webgoat/"
                        target="_blank"
                        className="ref-cat ref-card"
                        ><div className="ref-cat">学習 — 脆弱環境</div>
                        <div className="ref-title">OWASP WebGoat（OWASP提供の学習環境）</div>
                        <div className="ref-url">owasp.org/www-project-webgoat/</div></a
                    >
                    <a href="https://www.kali.org/" target="_blank" className="ref-card"
                        ><div className="ref-cat">ツール</div>
                        <div className="ref-title">Kali Linux（セキュリティテスト専用OS）</div>
                        <div className="ref-url">kali.org/</div></a
                    >
                </div>
            </section>

            {/* ═══ Footer / 10 Rules ═══ */}
            <hr className="divider"  />
            <section className="section">
                <div className="section-header">
                    <span
                        className="chapter-num"
                        style={{'background': 'linear-gradient(                                 135deg,                                 var(--neon-green),                                 var(--neon-cyan)                             )'} as React.CSSProperties}
                        >まとめ</span
                    >
                    <div>
                        <h2 className="section-title">🏁 セキュリティテスター成功の10の鉄則</h2>
                    </div>
                </div>
                <ul className="step-list">
                    <li>
                        <span
                            className="step-num"
                            style={{'background': 'linear-gradient(                                     135deg,                                     var(--neon-red),                                     var(--neon-purple)                                 )'} as React.CSSProperties}
                            >1</span
                        >
                        <div className="step-content">
                            <strong>攻撃者のメンタリティを持つ（Attacker Mindset）</strong> —
                            「何が守られているか」ではなく「何を攻撃できるか」で考える。最新の
                            CVE・OWASP・MITRE ATT&amp;CK を常にフォロー
                        </div>
                    </li>
                    <li>
                        <span
                            className="step-num"
                            style={{'background': 'linear-gradient(135deg, var(--neon-amber), #ff6b6b)'} as React.CSSProperties}
                            >2</span
                        >
                        <div className="step-content">
                            <strong>セキュリティをシフトレフトする</strong> —
                            設計・要件フェーズから脅威モデリングを実施。本番の修正コストは設計時の30〜100倍
                        </div>
                    </li>
                    <li>
                        <span
                            className="step-num"
                            style={{'background': 'linear-gradient(                                     135deg,                                     var(--neon-cyan),                                     var(--neon-blue)                                 )'} as React.CSSProperties}
                            >3</span
                        >
                        <div className="step-content">
                            <strong>複数のアプローチを組み合わせる</strong> — SAST + SCA + DAST +
                            ペンテストで多層的にカバー。単一ツール・単一アプローチでは全脆弱性を発見できない
                        </div>
                    </li>
                    <li>
                        <span
                            className="step-num"
                            style={{'background': 'linear-gradient(135deg, var(--neon-green), #00c896)'} as React.CSSProperties}
                            >4</span
                        >
                        <div className="step-content">
                            <strong>CVSS スコアで優先度付けをする</strong> —
                            Critical（9.0+）は即時・High（7.0+）は1週間以内。ビジネスインパクトとのバランスも考慮する
                        </div>
                    </li>
                    <li>
                        <span
                            className="step-num"
                            style={{'background': 'linear-gradient(                                     135deg,                                     var(--neon-red),                                     var(--neon-amber)                                 )'} as React.CSSProperties}
                            >5</span
                        >
                        <div className="step-content">
                            <strong>OWASP Top 10 を基盤にする</strong> —
                            最も普遍的な脆弱性カテゴリとして常に意識。2025年版の変更点（Security
                            Misconfiguration の大幅上昇・Supply Chain の強調）に注目
                        </div>
                    </li>
                    <li>
                        <span
                            className="step-num"
                            style={{'background': 'linear-gradient(                                     135deg,                                     var(--neon-purple),                                     var(--neon-cyan)                                 )'} as React.CSSProperties}
                            >6</span
                        >
                        <div className="step-content">
                            <strong>証拠を持ったレポートを作成する</strong> —
                            再現手順・スクリーンショット・修正案を明記。経営層には「ビジネスリスクと対策のROI」で、開発者には「修正コード例」で伝える
                        </div>
                    </li>
                    <li>
                        <span
                            className="step-num"
                            style={{'background': 'linear-gradient(135deg, var(--neon-red), #c0392b)'} as React.CSSProperties}
                            >7</span
                        >
                        <div className="step-content">
                            <strong>倫理と法律を絶対に守る</strong> —
                            全テストは書面による事前承認が必須。無許可のセキュリティテストは不正アクセス禁止法違反となる
                        </div>
                    </li>
                    <li>
                        <span
                            className="step-num"
                            style={{'background': 'linear-gradient(                                     135deg,                                     var(--neon-amber),                                     var(--neon-green)                                 )'} as React.CSSProperties}
                            >8</span
                        >
                        <div className="step-content">
                            <strong>人的要因を軽視しない</strong> — Verizon DBIR
                            2024：侵害の68%以上に人的要因が関与。技術的対策だけでなくフィッシング対策・意識向上プログラムも不可欠
                        </div>
                    </li>
                    <li>
                        <span
                            className="step-num"
                            style={{'background': 'linear-gradient(                                     135deg,                                     var(--neon-cyan),                                     var(--neon-green)                                 )'} as React.CSSProperties}
                            >9</span
                        >
                        <div className="step-content">
                            <strong>継続的なセキュリティテストを実施する</strong> —
                            1回のペンテストで終わりではない。CI/CD に SAST・SCA
                            を組み込み継続的にテストし、新たな脅威に対応し続ける
                        </div>
                    </li>
                    <li>
                        <span
                            className="step-num"
                            style={{'background': 'linear-gradient(                                     135deg,                                     var(--neon-green),                                     var(--neon-cyan)                                 )'} as React.CSSProperties}
                            >10</span
                        >
                        <div className="step-content">
                            <strong>最新のセキュリティトレンドをフォローし続ける</strong> — AI/LLM
                            への攻撃・サプライチェーン・クラウド設定ミスなど新たな脅威が日々出現。CVE・OWASP・NIST・Verizon
                            DBIR 等を定期購読する
                        </div>
                    </li>
                </ul>
            </section>

            {/* ─── Footer ─── */}
            <footer
                style={{'marginTop': '4rem'} as React.CSSProperties}
            >
                <p
                    style={{'fontFamily': 'var(--font-mono)'} as React.CSSProperties}
                >
                    📌 作成日：2025年 ／ 準拠資格：ISTQB CT-SEC v1.0（2016年リリース）／
                    OWASP準拠：OWASP Top 10:2025（最新版）<br />
                    🔗 公式：<a
                        href="https://istqb.org/certifications/certified-tester-security-tester-ct-sec/"
                        target="_blank"
                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                        >istqb.org</a
                    >
                    ／
                    <a
                        href="https://owasp.org/Top10/2025/"
                        target="_blank"
                        style={{'color': 'var(--neon-cyan)'} as React.CSSProperties}
                        >owasp.org/Top10/2025/</a
                    ><br /><br />
                    ⚠️
                    本ガイドはISTQB®が公認したトレーニング資料ではありません。公式シラバス・サンプル問題と合わせてご使用ください。<br />
                    🚨
                    倫理的注意：本書に記載されたセキュリティテスト技法は、必ず事前に書面による許可を得た上で、許可されたシステムのみに適用してください。
                </p>
            </footer>
    
      </div>
    </>
  );
}
