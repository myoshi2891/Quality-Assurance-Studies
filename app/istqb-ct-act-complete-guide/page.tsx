import './istqb-ct-act-complete-guide.css';
import NavBar from './NavBar';

export default function IstqbCtActCompleteGuide() {
    return (
        <div className="istqb-ct-act-page">
            <NavBar />

        {/* HERO */}
        <div id="top" className="hero">
            <div className="hero-badge">ISTQB® SPECIALIST STREAM</div>
            <h1 className="hero-title">CT-AcT<br />Acceptance Testing</h1>
            <p className="hero-sub">
                受け入れテスト 完全学習ガイド 2025 —
                ビジネスアナリスト・プロダクトオーナー・テスター向けの体系的解説
            </p>
            <div className="hero-meta">
                <div className="meta-chip">問題数 <span>40問</span></div>
                <div className="meta-chip">合格基準 <span>26/40点 (65%)</span></div>
                <div className="meta-chip">試験時間 <span>60分</span></div>
                <div className="meta-chip">前提資格 <span>CTFL 必須</span></div>
                <div className="meta-chip">シラバス <span>v1.0 (2019)</span></div>
            </div>
        </div>

        {/* OVERVIEW */}
        <section id="overview" className="section">
            <div className="container">
                <div className="chapter-num">OVERVIEW</div>
                <h1 className="section-title">CT-AcT とは何か？</h1>
                <p className="section-desc">
                    受け入れテスト（Acceptance Testing）の専門知識を認定する ISTQB
                    スペシャリスト資格。ビジネスゴールからテストまでの変換フローを体系的に習得します。
                </p>

                {/* TOC */}
                <div className="toc-grid">
                    <a href="#ch1" className="toc-card"
                        ><div className="toc-num">CHAPTER 01</div>
                        <div className="toc-label">導入と基礎</div></a
                    >
                    <a href="#ch2" className="toc-card"
                        ><div className="toc-num">CHAPTER 02</div>
                        <div className="toc-label">受け入れ基準・テスト設計</div></a
                    >
                    <a href="#ch3" className="toc-card"
                        ><div className="toc-num">CHAPTER 03</div>
                        <div className="toc-label">ビジネスプロセスモデリング</div></a
                    >
                    <a href="#ch4" className="toc-card"
                        ><div className="toc-num">CHAPTER 04</div>
                        <div className="toc-label">非機能要件テスト</div></a
                    >
                    <a href="#ch5" className="toc-card"
                        ><div className="toc-num">CHAPTER 05</div>
                        <div className="toc-label">協調的受け入れテスト</div></a
                    >
                    <a href="#exam" className="toc-card"
                        ><div className="toc-num">EXAM TIPS</div>
                        <div className="toc-label">試験対策・Q&amp;A</div></a
                    >
                </div>

                {/* 試験メトリクス */}
                <h2>試験スペック</h2>
                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-val">40</div>
                        <div className="metric-label">問題数</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val green">65%</div>
                        <div className="metric-label">合格ライン</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">60<span style={{fontSize: "1rem"}}>分</span></div>
                        <div className="metric-label">試験時間</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val amber">26</div>
                        <div className="metric-label">合格点（40点満点）</div>
                    </div>
                </div>

                {/* 受け入れテスト種類 */}
                <h2>CT-AcT がカバーする受け入れテストの種類</h2>
                <div className="arch-layers">
                    <div className="arch-layer l1">
                        <div className="arch-label">UAT — ユーザー受け入れテスト</div>
                        <div>
                            実際のエンドユーザーが参加し、ビジネス要件を満たすかを検証するテスト。最も一般的な受け入れテスト形式。
                        </div>
                    </div>
                    <div className="arch-layer l2">
                        <div className="arch-label">契約受け入れテスト（Contractual AT）</div>
                        <div>契約書に記載されたSLA・品質要件への準拠を第三者視点で検証。</div>
                    </div>
                    <div className="arch-layer l3">
                        <div className="arch-label">規制受け入れテスト（Regulatory AT）</div>
                        <div>法律・業界標準（GDPR, PCI DSS, HIPAA等）への準拠を検証。</div>
                    </div>
                    <div className="arch-layer l4">
                        <div className="arch-label">アルファ・ベータテスト</div>
                        <div>
                            アルファ：社内開発者監視下。ベータ：社外の実際のユーザー環境で実施。
                        </div>
                    </div>
                </div>

                <div className="callout danger">
                    <div className="callout-title">⚠ 試験の落とし穴</div>
                    <p>
                        OAT（Operational Acceptance Testing：運用受け入れテスト）は
                        <strong>CT-AcT の対象外</strong>です。OAT
                        は運用チームが担当するため、本資格のスコープに含まれません。試験で必ず確認される重要な区別です。
                    </p>
                </div>

                {/* ビジネスアウトカム */}
                <h2>6つのビジネスアウトカム</h2>
                <div className="two-col">
                    <div className="info-card">
                        <h4>ビジネスアナリスト・PO向け</h4>
                        <ul>
                            <li>テスト設計フェーズに参加し製品とビジネス要件の整合性を支援</li>
                            <li>受け入れテストプロセスの組織化に貢献</li>
                            <li>品質フレームワークで生成された成果物の検証に貢献</li>
                        </ul>
                    </div>
                    <div className="info-card">
                        <h4>テスター向け</h4>
                        <ul>
                            <li>要件定義フェーズでの受け入れ基準定義に貢献</li>
                            <li>BA・ステークホルダーと効率的に協力</li>
                            <li>ビジネス目標を理解し共通の品質目標を共有</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* CHAPTER 1 */}
        <section id="ch1" className="section">
            <div className="container">
                <div className="chapter-num">CHAPTER 01 <span className="klevel">K2</span></div>
                <h1 className="section-title">導入と基礎</h1>
                <p className="section-desc">
                    ビジネスゴールから受け入れテストまでの変換フロー、BA
                    とテスターの役割分担、要件品質の重要性を理解します。
                </p>

                {/* ビジネスゴール→テストの変換フロー */}
                <h2>ビジネスゴール → 受け入れテストへの変換フロー</h2>
                <p>
                    受け入れテストの最大の目的は「ソフトウェアがビジネスニーズを満たしているか」を検証することです。そのためには以下の変換フローを理解することが不可欠です。
                </p>

                <div className="flow">
                    <div className="flow-node">
                        <strong>① ビジネスゴール（Business Goals）</strong
                        ><br />「ECサイトの年間売上を30%向上させたい」
                    </div>
                    <div className="flow-arrow">↓ ゴールを実現するための具体的なニーズに分解</div>
                    <div className="flow-node">
                        <strong>② ビジネスニーズ（Business Needs）</strong
                        ><br />「チェックアウト完了率を85%以上にしたい」
                    </div>
                    <div className="flow-arrow">↓ ユーザーストーリーとして要件を定義</div>
                    <div className="flow-node">
                        <strong>③ 要件 / ユーザーストーリー（Requirements）</strong
                        ><br />「ユーザーとして、3ステップ以内でチェックアウトを完了できる」
                    </div>
                    <div className="flow-arrow">↓ テスト可能な条件として具体化</div>
                    <div className="flow-node">
                        <strong>④ 受け入れ基準（Acceptance Criteria）</strong
                        ><br />「支払いページがカートページから2クリック以内でアクセスできること」
                    </div>
                    <div className="flow-arrow">↓ 具体的なテストシナリオとして設計</div>
                    <div className="flow-node">
                        <strong>⑤ 受け入れテスト（Acceptance Tests）</strong
                        ><br />「カートに商品を追加→住所入力→支払い→注文完了のE2Eフロー確認」
                    </div>
                </div>

                {/* 欠陥コスト */}
                <h2>要件品質とバグ修正コストの関係</h2>
                <p>
                    要件の品質が低いと、後工程での修正コストが指数関数的に増大します。受け入れ基準を早期に明確化することが最も効果的なコスト削減策です。
                </p>

                <div className="progress-item">
                    <div className="progress-meta">
                        <span>要件定義フェーズで発見</span><span>×1倍</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill fill-green" style={{width: "10%"}}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-meta">
                        <span>設計フェーズで発見</span><span>×5倍</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill fill-green" style={{width: "25%"}}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-meta">
                        <span>実装フェーズで発見</span><span>×10倍</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill fill-cyan" style={{width: "45%"}}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-meta">
                        <span>テストフェーズで発見</span><span>×50倍</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill fill-amber" style={{width: "70%"}}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-meta">
                        <span>本番環境（ユーザー発見）</span><span>×100倍</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill fill-amber" style={{width: "100%"}}></div>
                    </div>
                </div>

                {/* 要件・AC・テストの関係 */}
                <h2>要件・受け入れ基準・受け入れテストの関係</h2>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>概念</th>
                                <th>定義</th>
                                <th>具体例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>要件（Requirement）</strong></td>
                                <td>システムが持つべき機能や性質の記述</td>
                                <td>「ユーザーはメールアドレスで登録できる」</td>
                            </tr>
                            <tr>
                                <td><strong>ユーザーストーリー</strong></td>
                                <td>As a / I want / So that 形式の要件記述</td>
                                <td>
                                    「会員として、メールでサインアップしたい。購入履歴を管理したいから」
                                </td>
                            </tr>
                            <tr>
                                <td><strong>受け入れ基準（AC）</strong></td>
                                <td>ストーリーが「完了」と判断できる条件の列挙</td>
                                <td>
                                    「有効なメール形式のみ受け付ける」「重複メールはエラーを表示する」
                                </td>
                            </tr>
                            <tr>
                                <td><strong>受け入れテスト</strong></td>
                                <td>受け入れ基準が満たされているかを確認するテスト</td>
                                <td>
                                    「test@example.com で登録できることを確認。test@test@com
                                    でエラーが出ることを確認」
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 要件の品質 良い・悪い例 */}
                <h2>良い受け入れ基準 vs 悪い受け入れ基準</h2>
                <div className="compare-grid">
                    <div className="compare-card good">
                        <div className="compare-header">✅ 良い受け入れ基準（テスト可能）</div>
                        <div className="compare-item">検索結果が3秒以内に表示されること</div>
                        <div className="compare-item">
                            パスワードは8文字以上64文字以下で英数字を含むこと
                        </div>
                        <div className="compare-item">
                            ログイン失敗5回でアカウントを30分ロックし通知メールを送信すること
                        </div>
                        <div className="compare-item">SUSスコアが80点以上であること</div>
                    </div>
                    <div className="compare-card bad">
                        <div className="compare-header">❌ 悪い受け入れ基準（テスト不可能）</div>
                        <div className="compare-item">
                            システムは高速に動作すること（数値基準がない）
                        </div>
                        <div className="compare-item">パスワードは安全であること（基準が主観的）</div>
                        <div className="compare-item">
                            ログイン失敗時に適切なエラーを表示すること（「適切」が不明確）
                        </div>
                        <div className="compare-item">
                            使いやすいインターフェースであること（測定できない）
                        </div>
                    </div>
                </div>

                {/* BA vs テスターの役割 */}
                <h2>ビジネスアナリストとテスターの役割分担</h2>
                <div className="two-col">
                    <div className="info-card">
                        <h4>ビジネスアナリスト（BA）の責任</h4>
                        <ul>
                            <li>ビジネス要件の収集・文書化</li>
                            <li>ユーザーストーリーの作成</li>
                            <li>ステークホルダーとのコミュニケーション</li>
                            <li>受け入れ基準の定義（テスターと協力）</li>
                            <li>要件変更の管理</li>
                        </ul>
                    </div>
                    <div className="info-card">
                        <h4>テスターの責任</h4>
                        <ul>
                            <li>受け入れ基準のレビュー（テスト可能性の確認）</li>
                            <li>受け入れテストの設計・実行</li>
                            <li>欠陥の報告・追跡</li>
                            <li>テスト結果のビジネス側への説明</li>
                            <li>リリース判断のための品質情報の提供</li>
                        </ul>
                    </div>
                </div>

                <div className="callout info">
                    <div className="callout-title">💡 サイロ効果（Silo Effect）に注意</div>
                    <p>
                        BAチームとテストチームが分断されると、曖昧な要件がテスト開始後に発覚し修正コストが激増します。CT-AcT
                        は3 Amigos ミーティングなどを通じてこのサイロを壊すことを重視しています。
                    </p>
                </div>
            </div>
        </section>

        {/* CHAPTER 2 */}
        <section id="ch2" className="section">
            <div className="container">
                <div className="chapter-num">CHAPTER 02 <span className="klevel">K3</span></div>
                <h1 className="section-title">受け入れ基準・テスト設計・BDD/ATDD</h1>
                <p className="section-desc">
                    受け入れ基準の記述方法、ATDD サイクル、Gherkin
                    構文、探索的テストを体系的に習得します。
                </p>

                {/* 受け入れ基準の記述形式 */}
                <h2>受け入れ基準の記述形式</h2>

                <h3>形式1: チェックリスト形式</h3>
                <div className="code-block" data-lang="acceptance criteria">
                    <div className="code-line">
                        <span className="code-comment"># ユーザーストーリー：</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"
                            ># 「登録ユーザーとして、パスワードをリセットしたい。</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-white"
                            ># アカウントにアクセスできなくなった場合でも復元できるから」</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-cyan">受け入れ基準（チェックリスト形式）：</span>
                    </div>
                    <div className="code-line">
                        <span className="code-green">□ </span
                        ><span className="code-white"
                            >メールアドレスを入力してリセットリンクを要求できること</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-green">□ </span
                        ><span className="code-white">リセットリンクは</span
                        ><span className="code-keyword">30分間</span
                        ><span className="code-white">有効であること</span>
                    </div>
                    <div className="code-line">
                        <span className="code-green">□ </span
                        ><span className="code-white"
                            >リンクの有効期限切れ後にアクセスするとエラーが表示されること</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-green">□ </span
                        ><span className="code-white"
                            >新しいパスワードは現在のパスワードと同じにできないこと</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-green">□ </span
                        ><span className="code-white"
                            >パスワード変更後、他のデバイスのセッションが無効になること</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-green">□ </span
                        ><span className="code-white"
                            >未登録メールアドレスを入力した場合、セキュリティのため「メールを送信しました」と表示されること</span
                        >
                    </div>
                </div>

                <h3>形式2: Given-When-Then（Gherkin）形式</h3>
                <div className="code-block" data-lang="gherkin">
                    <div className="code-line">
                        <span className="code-keyword">Feature:</span
                        ><span className="code-string"> パスワードリセット機能</span>
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-keyword">Scenario:</span
                        ><span className="code-string">
                            有効なメールアドレスでリセットリンクを要求する</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> Given</span
                        ><span className="code-white">
                            ユーザーが "user@example.com" で登録されている</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> When</span
                        ><span className="code-white">
                            ユーザーがリセットページで "user@example.com" を入力する</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> And</span
                        ><span className="code-white"> 「送信」ボタンをクリックする</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> Then</span
                        ><span className="code-white"> "user@example.com" にリセットリンクが届く</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> And</span
                        ><span className="code-white">
                            画面に「メールをご確認ください」が表示される</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-keyword">Scenario:</span
                        ><span className="code-string"> リセットリンクの有効期限切れ</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> Given</span
                        ><span className="code-white"> ユーザーが31分前にリセットリンクを要求した</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> When</span
                        ><span className="code-white"> ユーザーがそのリセットリンクをクリックする</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> Then</span
                        ><span className="code-white">
                            「リンクの有効期限が切れています」エラーが表示される</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> And</span
                        ><span className="code-white">
                            「新しいリンクを要求する」ボタンが表示される</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-keyword">Scenario:</span
                        ><span className="code-string">
                            登録されていないメールアドレスを入力した場合</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> Given</span
                        ><span className="code-white">
                            ユーザーが "notregistered@example.com" を入力する</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> When</span
                        ><span className="code-white"> 「送信」ボタンをクリックする</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> Then</span
                        ><span className="code-white"> 「メールをご確認ください」が表示される</span>
                    </div>
                    <div className="code-line">
                        <span className="code-comment">
                            # セキュリティのため「そのメールは登録されていません」は表示しない</span
                        >
                    </div>
                </div>

                {/* INVEST 基準 */}
                <h2>良い受け入れ基準の INVEST 基準</h2>
                <div className="arch-layers">
                    <div className="arch-layer l1">
                        <div className="arch-label">I — Independent（独立性）</div>
                        他の基準に不必要に依存しない。各ACが単独で検証できる形で定義する。
                    </div>
                    <div className="arch-layer l2">
                        <div className="arch-label">N — Negotiable（交渉可能性）</div>
                        チームで議論・調整できる余地がある。実装詳細より意図を記述する。
                    </div>
                    <div className="arch-layer l3">
                        <div className="arch-label">V — Valuable（価値）</div>
                        ビジネス価値につながっている。「なぜ必要か」が明確である。
                    </div>
                    <div className="arch-layer l2">
                        <div className="arch-label">E — Estimable（見積もり可能性）</div>
                        実装・テストの工数を見積もれる程度に具体的。
                    </div>
                    <div className="arch-layer l3">
                        <div className="arch-label">S — Small（小ささ）</div>
                        1スプリントで対応できる粒度。大きすぎる場合は分割する。
                    </div>
                    <div className="arch-layer l1">
                        <div className="arch-label">T — Testable（テスト可能性）★最重要★</div>
                        <strong>Yes/No で判定できる</strong
                        >具体的な条件。受け入れ基準の最も重要な特性。
                    </div>
                </div>

                {/* ATDD */}
                <h2>ATDD（受け入れテスト駆動開発）のワークフロー</h2>
                <div className="callout info">
                    <div className="callout-title">定義</div>
                    <p>
                        ATDD（Acceptance Test-Driven
                        Development）とは、受け入れテストを<strong>開発開始前に</strong>定義し、そのテストを実装のゴールとする手法。BDD
                        の基礎でもある。
                    </p>
                </div>

                <ol className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <strong>話し合い（Discuss）</strong> — BA・PO・テスターが「3 Amigos
                            ミーティング」で集まり、ユーザーストーリーのビジネス意図と受け入れ基準を議論する
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <strong>受け入れ基準の定義（Define AC）</strong> — Gherkin
                            または他の形式で受け入れ基準を全員が理解できる言語で記述する
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <strong>受け入れテストの作成（Create Tests）</strong> —
                            受け入れ基準から具体的なテストシナリオを設計する（正常系・異常系・境界値）
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <strong>実装（Implement）</strong> —
                            開発者は受け入れテストを「ゴール」としてコードを書く（テストファースト）
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <strong>テスト実行・確認（Execute &amp; Verify）</strong> —
                            受け入れテストが全てパスしたら「完了（Done）」。継続的なフィードバックループへ
                        </div>
                    </li>
                </ol>

                {/* Gherkin 構文詳解 */}
                <h2>Gherkin 構文の完全解説</h2>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>キーワード</th>
                                <th>役割</th>
                                <th>例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>Feature</code></td>
                                <td>機能・ユーザーストーリーのタイトル</td>
                                <td><code>Feature: 商品注文機能</code></td>
                            </tr>
                            <tr>
                                <td><code>Background</code></td>
                                <td>全シナリオの共通前提条件（一度だけ実行）</td>
                                <td><code>Background: Given ユーザーがログインしている</code></td>
                            </tr>
                            <tr>
                                <td><code>Scenario</code></td>
                                <td>1つのテストシナリオ</td>
                                <td><code>Scenario: 在庫がある商品を注文する</code></td>
                            </tr>
                            <tr>
                                <td><code>Scenario Outline</code></td>
                                <td>データ駆動テスト（Examples テーブルと組み合わせ）</td>
                                <td>複数データセットで同じシナリオを繰り返し実行</td>
                            </tr>
                            <tr>
                                <td><code>Given</code></td>
                                <td>前提条件・初期状態の設定（ARRANGE）</td>
                                <td><code>Given カートが空の状態である</code></td>
                            </tr>
                            <tr>
                                <td><code>When</code></td>
                                <td>ユーザーのアクション（ACT）</td>
                                <td><code>When 「購入する」ボタンをクリックする</code></td>
                            </tr>
                            <tr>
                                <td><code>Then</code></td>
                                <td>期待結果の確認（ASSERT）</td>
                                <td><code>Then 注文確認メールが届く</code></td>
                            </tr>
                            <tr>
                                <td><code>And</code> / <code>But</code></td>
                                <td>前のステップの継続（複数の Given/When/Then）</td>
                                <td><code>And 在庫が1個減る</code></td>
                            </tr>
                            <tr>
                                <td><code>Examples</code></td>
                                <td>Scenario Outline のデータテーブル</td>
                                <td>数量・価格・期待値のデータセット</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 実践的なGherkin例 */}
                <h2>実践的な Gherkin シナリオ（ECサイト注文）</h2>
                <div className="code-block" data-lang="gherkin">
                    <div className="code-line">
                        <span className="code-keyword">Feature:</span
                        ><span className="code-string"> 商品の注文機能</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> 登録ユーザーが商品を検索して購入できる</span>
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-keyword">Background:</span></div>
                    <div className="code-line">
                        <span className="code-cyan"> Given</span
                        ><span className="code-white">
                            ユーザー "tanaka@example.com" がログインしている</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> And</span
                        ><span className="code-white"> ショッピングカートが空の状態である</span>
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-keyword">Scenario:</span
                        ><span className="code-string"> 在庫がある商品を1点注文する</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> Given</span
                        ><span className="code-white"> 商品 "ワイヤレスイヤホン" の在庫が5個ある</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> When</span
                        ><span className="code-white"> ユーザーが "ワイヤレスイヤホン" を検索する</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> And</span
                        ><span className="code-white"> 商品ページで「カートに追加」をクリックする</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> And</span
                        ><span className="code-white"> チェックアウトを完了する</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> Then</span
                        ><span className="code-white"> 「ご注文を承りました」画面が表示される</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> And</span
                        ><span className="code-white">
                            注文確認メールが "tanaka@example.com" に届く</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> And</span
                        ><span className="code-white">
                            商品 "ワイヤレスイヤホン" の在庫が4個になる</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-keyword">Scenario:</span
                        ><span className="code-string"> 在庫切れの商品を注文しようとする</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> Given</span
                        ><span className="code-white"> 商品 "限定スニーカー" の在庫が0個である</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> When</span
                        ><span className="code-white">
                            ユーザーが "限定スニーカー" の商品ページを開く</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> Then</span
                        ><span className="code-white"> 「在庫切れ」と表示される</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> But</span
                        ><span className="code-white"> 「カートに追加」ボタンが非活性化されている</span>
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-keyword">Scenario Outline:</span
                        ><span className="code-string"> 数量別の合計金額テスト</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> Given</span
                        ><span className="code-white"> 商品 "Tシャツ" の単価は2,500円である</span>
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> When</span
                        ><span className="code-white">
                            ユーザーが &lt;数量&gt; 枚をカートに追加する</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-cyan"> Then</span
                        ><span className="code-white">
                            カートの合計金額は &lt;合計金額&gt; 円と表示される</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-keyword">Examples:</span></div>
                    <div className="code-line">
                        <span className="code-white"> | 数量 | 合計金額 |</span>
                    </div>
                    <div className="code-line"><span className="code-green"> | 1 | 2,500 |</span></div>
                    <div className="code-line"><span className="code-green"> | 3 | 7,500 |</span></div>
                    <div className="code-line"><span className="code-green"> | 5 | 12,500 |</span></div>
                </div>

                {/* BDDステップ実装例 */}
                <h2>Behave（Python）でのステップ定義実装</h2>
                <div className="code-block" data-lang="python">
                    <div className="code-line">
                        <span className="code-comment"># steps/order_steps.py</span>
                    </div>
                    <div className="code-line">
                        <span className="code-keyword">from</span
                        ><span className="code-white"> behave </span
                        ><span className="code-keyword">import</span
                        ><span className="code-white"> given, when, then</span>
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-keyword">@given</span><span className="code-white">(</span
                        ><span className="code-string">'ユーザー "&#123;email&#125;" がログインしている'</span
                        ><span className="code-white">)</span>
                    </div>
                    <div className="code-line">
                        <span className="code-keyword">def</span
                        ><span className="code-green"> step_user_logged_in</span
                        ><span className="code-white">(context, email):</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> context.browser.navigate_to(</span
                        ><span className="code-string">"/login"</span><span className="code-white">)</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> context.browser.fill(</span
                        ><span className="code-string">"#email"</span
                        ><span className="code-white">, email)</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> context.browser.click(</span
                        ><span className="code-string">"#login-btn"</span
                        ><span className="code-white">)</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> </span><span className="code-keyword">assert</span
                        ><span className="code-white"> context.browser.current_url == </span
                        ><span className="code-string">"/dashboard"</span>
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-keyword">@when</span><span className="code-white">(</span
                        ><span className="code-string">'ユーザーが "&#123;product_name&#125;" を検索する'</span
                        ><span className="code-white">)</span>
                    </div>
                    <div className="code-line">
                        <span className="code-keyword">def</span
                        ><span className="code-green"> step_search_product</span
                        ><span className="code-white">(context, product_name):</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> context.browser.fill(</span
                        ><span className="code-string">"#search-input"</span
                        ><span className="code-white">, product_name)</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> context.browser.click(</span
                        ><span className="code-string">"#search-btn"</span
                        ><span className="code-white">)</span>
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-keyword">@then</span><span className="code-white">(</span
                        ><span className="code-string">'「ご注文を承りました」画面が表示される'</span
                        ><span className="code-white">)</span>
                    </div>
                    <div className="code-line">
                        <span className="code-keyword">def</span
                        ><span className="code-green"> step_order_confirmed</span
                        ><span className="code-white">(context):</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> success_msg = context.browser.get_text(</span
                        ><span className="code-string">"[data-testid='success']"</span
                        ><span className="code-white">)</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> </span><span className="code-keyword">assert</span
                        ><span className="code-white"> </span
                        ><span className="code-string">"ご注文を承りました"</span
                        ><span className="code-white"> </span><span className="code-keyword">in</span
                        ><span className="code-white"> success_msg, </span
                        ><span className="code-string"
                            >f"期待: '注文承りました', 実際: '&#123;success_msg&#125;'"</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-keyword">@then</span><span className="code-white">(</span
                        ><span className="code-string">'注文確認メールが "&#123;email&#125;" に届く'</span
                        ><span className="code-white">)</span>
                    </div>
                    <div className="code-line">
                        <span className="code-keyword">def</span
                        ><span className="code-green"> step_confirm_email</span
                        ><span className="code-white">(context, email):</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> email_client = context.email_client</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> </span><span className="code-keyword">assert</span
                        ><span className="code-white">
                            email_client.has_email(to=email, subject_contains=</span
                        ><span className="code-string">"ご注文を承りました"</span
                        ><span className="code-white">)</span>
                    </div>
                </div>

                {/* 探索的テスト */}
                <h2>探索的テスト（Exploratory Testing）in 受け入れテスト</h2>
                <div className="def-box">
                    <div className="def-term">探索的テストとは？</div>
                    テスト設計・実行・学習を同時並行で行う動的テスト手法。テスターの経験・知識・直感を活用し、事前に詳細なテストケースを書かない。
                </div>

                <div className="code-block" data-lang="test charter">
                    <div className="code-line">
                        <span className="code-cyan"
                            >テストチャーター（Session-Based Test Management）:</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-keyword">EXPLORE</span
                        ><span className="code-string"> パスワードリセット機能</span>
                    </div>
                    <div className="code-line">
                        <span className="code-keyword">TO DISCOVER</span
                        ><span className="code-string"> セキュリティと使いやすさの問題</span>
                    </div>
                    <div className="code-line">
                        <span className="code-keyword">USING</span
                        ><span className="code-string">
                            実際のメールクライアント・各種ブラウザ・60分間</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-comment"># セッション中に記録すること：</span>
                    </div>
                    <div className="code-line">
                        <span className="code-green">✓ </span
                        ><span className="code-white">発見した問題（バグ・仕様の疑問点）</span>
                    </div>
                    <div className="code-line">
                        <span className="code-green">✓ </span
                        ><span className="code-white">テストした内容・使ったデータ</span>
                    </div>
                    <div className="code-line">
                        <span className="code-green">✓ </span
                        ><span className="code-white">テストしていない領域（次回のチャーターへ）</span>
                    </div>
                    <div className="code-line">
                        <span className="code-green">✓ </span
                        ><span className="code-white">推奨事項・気づき</span>
                    </div>
                </div>

                {/* アルファ・ベータテスト比較 */}
                <h2>アルファテスト vs ベータテスト</h2>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>観点</th>
                                <th>アルファテスト</th>
                                <th>ベータテスト</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>実施者</strong></td>
                                <td>社内（開発者の監視下）</td>
                                <td>社外の一般ユーザー・特定顧客</td>
                            </tr>
                            <tr>
                                <td><strong>環境</strong></td>
                                <td>開発者の用意した環境</td>
                                <td>ユーザー自身の実環境</td>
                            </tr>
                            <tr>
                                <td><strong>開発者の立会</strong></td>
                                <td>あり（観察・サポート）</td>
                                <td>通常なし</td>
                            </tr>
                            <tr>
                                <td><strong>テスト形式</strong></td>
                                <td>構造化テスト（シナリオあり）</td>
                                <td>非構造化・実際の使い方</td>
                            </tr>
                            <tr>
                                <td><strong>目的</strong></td>
                                <td>リリース前の基本品質確認</td>
                                <td>実環境での問題発見・フィードバック収集</td>
                            </tr>
                            <tr>
                                <td><strong>ソフトウェア状態</strong></td>
                                <td>機能実装後・リリース前</td>
                                <td>ほぼ完成（一般公開直前）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* CHAPTER 3 */}
        <section id="ch3" className="section">
            <div className="container">
                <div className="chapter-num">CHAPTER 03 <span className="klevel">K3</span></div>
                <h1 className="section-title">ビジネスプロセスとビジネスルールのモデリング</h1>
                <p className="section-desc">
                    BPMN・状態遷移テスト・デシジョンテーブルを使ってビジネスプロセスから受け入れテストを導出します。
                </p>

                {/* ビジネスプロセス vs ビジネスルール */}
                <h2>ビジネスプロセスとビジネスルールの違い</h2>
                <div className="two-col">
                    <div className="info-card">
                        <h4>ビジネスプロセス（Business Process）</h4>
                        <p>
                            特定のビジネスゴールを達成するための<strong
                                >活動・タスク・意思決定の流れ</strong
                            >
                        </p>
                        <p>
                            例：オンライン購入プロセス<br />
                            ①検索 → ②詳細確認 → ③カート追加 → ④配送情報入力 → ⑤支払い → ⑥確認メール
                            → ⑦受け取り
                        </p>
                    </div>
                    <div className="info-card">
                        <h4>ビジネスルール（Business Rules）</h4>
                        <p>プロセス内の<strong>制約・条件・計算規則</strong></p>
                        <ul>
                            <li>
                                <strong>制約ルール</strong>：「同メールで複数アカウント作成不可」
                            </li>
                            <li>
                                <strong>計算ルール</strong>：「消費税 = 価格 × 10%（切り捨て）」
                            </li>
                            <li><strong>条件ルール</strong>：「5,000円以上で送料無料」</li>
                            <li>
                                <strong>トリガールール</strong>：「在庫10個以下で購買担当者に通知」
                            </li>
                        </ul>
                    </div>
                </div>

                {/* デシジョンテーブル */}
                <h2>デシジョンテーブルテスト（Decision Table Testing）</h2>
                <p>
                    複数のビジネスルールが組み合わさる場合に有効な技法。条件の全ての組み合わせに対するシステムの振る舞いをテーブルで整理します。
                </p>

                {/* Decision Table SVG Visual */}
                <div style={{overflowX: "auto", margin: "1.5rem 0"}}>
                    <svg
                        viewBox="0 0 780 320"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{width: "100%", maxWidth: "780px", height: "auto", display: "block", background: "#010b14", border: "1px solid rgba(0, 229, 255, 0.18)", borderRadius: "10px", fontFamily: "'Space Mono', monospace"}}
                        role="img"
                        aria-label="サブスクリプション料金計算のデシジョンテーブル"
                    >
                        <defs>
                            <marker
                                id="ah"
                                markerWidth="6"
                                markerHeight="6"
                                refX="3"
                                refY="3"
                                orient="auto"
                            >
                                <path d="M0,0 L6,3 L0,6 Z" fill="#00e5ff" />
                            </marker>
                        </defs>
                        {/* Title */}
                        <text
                            x="390"
                            y="26"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00e5ff"
                            fontWeight="700"
                            letterSpacing="1"
                        >
                            サブスクリプション料金計算　デシジョンテーブル
                        </text>

                        {/* Column headers row */}
                        <rect
                            x="10"
                            y="38"
                            width="260"
                            height="34"
                            rx="4"
                            fill="#0d1117"
                            stroke="rgba(0,229,255,0.3)"
                            strokeWidth="1"
                        />
                        <text
                            x="140"
                            y="59"
                            textAnchor="middle"
                            fontSize="11"
                            fill="#94a3b8"
                            fontWeight="700"
                        >
                            条件 / アクション
                        </text>

                        {/* Rule headers */}
                        <rect
                            x="272"
                            y="38"
                            width="76"
                            height="34"
                            rx="4"
                            fill="#0d2233"
                            stroke="rgba(0,229,255,0.4)"
                            strokeWidth="1"
                        />
                        <text
                            x="310"
                            y="59"
                            textAnchor="middle"
                            fontSize="12"
                            fill="#00e5ff"
                            fontWeight="700"
                        >
                            R1
                        </text>

                        <rect
                            x="350"
                            y="38"
                            width="76"
                            height="34"
                            rx="4"
                            fill="#0d2233"
                            stroke="rgba(0,229,255,0.4)"
                            strokeWidth="1"
                        />
                        <text
                            x="388"
                            y="59"
                            textAnchor="middle"
                            fontSize="12"
                            fill="#00e5ff"
                            fontWeight="700"
                        >
                            R2
                        </text>

                        <rect
                            x="428"
                            y="38"
                            width="76"
                            height="34"
                            rx="4"
                            fill="#0d2233"
                            stroke="rgba(0,229,255,0.4)"
                            strokeWidth="1"
                        />
                        <text
                            x="466"
                            y="59"
                            textAnchor="middle"
                            fontSize="12"
                            fill="#00e5ff"
                            fontWeight="700"
                        >
                            R3
                        </text>

                        <rect
                            x="506"
                            y="38"
                            width="76"
                            height="34"
                            rx="4"
                            fill="#0d2233"
                            stroke="rgba(0,229,255,0.4)"
                            strokeWidth="1"
                        />
                        <text
                            x="544"
                            y="59"
                            textAnchor="middle"
                            fontSize="12"
                            fill="#00e5ff"
                            fontWeight="700"
                        >
                            R4
                        </text>

                        <rect
                            x="584"
                            y="38"
                            width="76"
                            height="34"
                            rx="4"
                            fill="#0d2233"
                            stroke="rgba(0,229,255,0.4)"
                            strokeWidth="1"
                        />
                        <text
                            x="622"
                            y="59"
                            textAnchor="middle"
                            fontSize="12"
                            fill="#00e5ff"
                            fontWeight="700"
                        >
                            R5
                        </text>

                        <rect
                            x="662"
                            y="38"
                            width="76"
                            height="34"
                            rx="4"
                            fill="#0d2233"
                            stroke="rgba(0,229,255,0.4)"
                            strokeWidth="1"
                        />
                        <text
                            x="700"
                            y="59"
                            textAnchor="middle"
                            fontSize="12"
                            fill="#00e5ff"
                            fontWeight="700"
                        >
                            R6
                        </text>

                        {/* CONDITION section label */}
                        <rect
                            x="2"
                            y="74"
                            width="6"
                            height="98"
                            rx="3"
                            fill="#00e5ff"
                            opacity="0.7"
                        />
                        <text
                            x="8"
                            y="130"
                            fontSize="9"
                            fill="#00e5ff"
                            transform="rotate(-90,8,130)"
                            textAnchor="middle"
                            letterSpacing="2"
                        >
                            CONDITIONS
                        </text>

                        {/* Condition row 1 */}
                        <rect
                            x="10"
                            y="74"
                            width="260"
                            height="32"
                            rx="2"
                            fill="#0d1117"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="1"
                        />
                        <text x="20" y="94" fontSize="11" fill="#e2e8f0">会員種別 = 一般</text>
                        {/* R1=T R2=T R3=T R4=F R5=F R6=F */}
                        <rect
                            x="272"
                            y="74"
                            width="76"
                            height="32"
                            fill="rgba(0,255,157,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="310"
                            y="94"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00ff9d"
                            fontWeight="700"
                        >
                            T
                        </text>
                        <rect
                            x="350"
                            y="74"
                            width="76"
                            height="32"
                            fill="rgba(0,255,157,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="388"
                            y="94"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00ff9d"
                            fontWeight="700"
                        >
                            T
                        </text>
                        <rect
                            x="428"
                            y="74"
                            width="76"
                            height="32"
                            fill="rgba(0,255,157,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="466"
                            y="94"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00ff9d"
                            fontWeight="700"
                        >
                            T
                        </text>
                        <rect
                            x="506"
                            y="74"
                            width="76"
                            height="32"
                            fill="rgba(255,59,92,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="544"
                            y="94"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#ff3b5c"
                            fontWeight="700"
                        >
                            F
                        </text>
                        <rect
                            x="584"
                            y="74"
                            width="76"
                            height="32"
                            fill="rgba(255,59,92,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="622"
                            y="94"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#ff3b5c"
                            fontWeight="700"
                        >
                            F
                        </text>
                        <rect
                            x="662"
                            y="74"
                            width="76"
                            height="32"
                            fill="rgba(255,59,92,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="700"
                            y="94"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#ff3b5c"
                            fontWeight="700"
                        >
                            F
                        </text>

                        {/* Condition row 2 */}
                        <rect
                            x="10"
                            y="106"
                            width="260"
                            height="32"
                            rx="2"
                            fill="rgba(13,17,23,0.6)"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="1"
                        />
                        <text x="20" y="126" fontSize="11" fill="#e2e8f0">支払い = 月払い</text>
                        <rect
                            x="272"
                            y="106"
                            width="76"
                            height="32"
                            fill="rgba(0,255,157,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="310"
                            y="126"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00ff9d"
                            fontWeight="700"
                        >
                            T
                        </text>
                        <rect
                            x="350"
                            y="106"
                            width="76"
                            height="32"
                            fill="rgba(0,255,157,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="388"
                            y="126"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00ff9d"
                            fontWeight="700"
                        >
                            T
                        </text>
                        <rect
                            x="428"
                            y="106"
                            width="76"
                            height="32"
                            fill="rgba(255,59,92,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="466"
                            y="126"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#ff3b5c"
                            fontWeight="700"
                        >
                            F
                        </text>
                        <rect
                            x="506"
                            y="106"
                            width="76"
                            height="32"
                            fill="rgba(0,255,157,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="544"
                            y="126"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00ff9d"
                            fontWeight="700"
                        >
                            T
                        </text>
                        <rect
                            x="584"
                            y="106"
                            width="76"
                            height="32"
                            fill="rgba(0,255,157,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="622"
                            y="126"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00ff9d"
                            fontWeight="700"
                        >
                            T
                        </text>
                        <rect
                            x="662"
                            y="106"
                            width="76"
                            height="32"
                            fill="rgba(255,59,92,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="700"
                            y="126"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#ff3b5c"
                            fontWeight="700"
                        >
                            F
                        </text>

                        {/* Condition row 3 */}
                        <rect
                            x="10"
                            y="138"
                            width="260"
                            height="32"
                            rx="2"
                            fill="#0d1117"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="1"
                        />
                        <text x="20" y="158" fontSize="11" fill="#e2e8f0">初回登録</text>
                        <rect
                            x="272"
                            y="138"
                            width="76"
                            height="32"
                            fill="rgba(0,255,157,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="310"
                            y="158"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00ff9d"
                            fontWeight="700"
                        >
                            T
                        </text>
                        <rect
                            x="350"
                            y="138"
                            width="76"
                            height="32"
                            fill="rgba(255,59,92,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="388"
                            y="158"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#ff3b5c"
                            fontWeight="700"
                        >
                            F
                        </text>
                        <rect
                            x="428"
                            y="138"
                            width="76"
                            height="32"
                            fill="rgba(255,59,92,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="466"
                            y="158"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#ff3b5c"
                            fontWeight="700"
                        >
                            F
                        </text>
                        <rect
                            x="506"
                            y="138"
                            width="76"
                            height="32"
                            fill="rgba(0,255,157,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="544"
                            y="158"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00ff9d"
                            fontWeight="700"
                        >
                            T
                        </text>
                        <rect
                            x="584"
                            y="138"
                            width="76"
                            height="32"
                            fill="rgba(255,59,92,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="622"
                            y="158"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#ff3b5c"
                            fontWeight="700"
                        >
                            F
                        </text>
                        <rect
                            x="662"
                            y="138"
                            width="76"
                            height="32"
                            fill="rgba(255,59,92,0.08)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text
                            x="700"
                            y="158"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#ff3b5c"
                            fontWeight="700"
                        >
                            F
                        </text>

                        {/* Divider */}
                        <line
                            x1="10"
                            y1="172"
                            x2="738"
                            y2="172"
                            stroke="rgba(0,229,255,0.35)"
                            strokeWidth="1.5"
                        />

                        {/* ACTIONS section label */}
                        <rect
                            x="2"
                            y="174"
                            width="6"
                            height="136"
                            rx="3"
                            fill="#ffab00"
                            opacity="0.7"
                        />
                        <text
                            x="8"
                            y="242"
                            fontSize="9"
                            fill="#ffab00"
                            transform="rotate(-90,8,242)"
                            textAnchor="middle"
                            letterSpacing="2"
                        >
                            ACTIONS
                        </text>

                        {/* Action rows */}
                        {/* Row A1: 月額 980円 */}
                        <rect
                            x="10"
                            y="174"
                            width="260"
                            height="32"
                            rx="2"
                            fill="rgba(13,17,23,0.6)"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="1"
                        />
                        <text x="20" y="194" fontSize="11" fill="#00ff9d">月額 980円</text>
                        <rect
                            x="272"
                            y="174"
                            width="76"
                            height="32"
                            fill="rgba(0,255,157,0.14)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text x="310" y="194" textAnchor="middle" fontSize="16" fill="#00ff9d">
                            ✓
                        </text>
                        <rect
                            x="350"
                            y="174"
                            width="76"
                            height="32"
                            fill="rgba(0,255,157,0.14)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text x="388" y="194" textAnchor="middle" fontSize="16" fill="#00ff9d">
                            ✓
                        </text>
                        <rect
                            x="428"
                            y="174"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="506"
                            y="174"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="584"
                            y="174"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="662"
                            y="174"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />

                        {/* Row A2: 年額 9,800円 */}
                        <rect
                            x="10"
                            y="206"
                            width="260"
                            height="32"
                            rx="2"
                            fill="#0d1117"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="1"
                        />
                        <text x="20" y="226" fontSize="11" fill="#00ff9d">年額 9,800円</text>
                        <rect
                            x="272"
                            y="206"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="350"
                            y="206"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="428"
                            y="206"
                            width="76"
                            height="32"
                            fill="rgba(0,255,157,0.14)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text x="466" y="226" textAnchor="middle" fontSize="16" fill="#00ff9d">
                            ✓
                        </text>
                        <rect
                            x="506"
                            y="206"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="584"
                            y="206"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="662"
                            y="206"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />

                        {/* Row A3: 初回30日無料 */}
                        <rect
                            x="10"
                            y="238"
                            width="260"
                            height="32"
                            rx="2"
                            fill="rgba(13,17,23,0.6)"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="1"
                        />
                        <text x="20" y="258" fontSize="11" fill="#00e5ff">＋ 初回30日無料</text>
                        <rect
                            x="272"
                            y="238"
                            width="76"
                            height="32"
                            fill="rgba(0,229,255,0.12)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text x="310" y="258" textAnchor="middle" fontSize="16" fill="#00e5ff">
                            ✓
                        </text>
                        <rect
                            x="350"
                            y="238"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="428"
                            y="238"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="506"
                            y="238"
                            width="76"
                            height="32"
                            fill="rgba(0,229,255,0.12)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text x="544" y="258" textAnchor="middle" fontSize="16" fill="#00e5ff">
                            ✓
                        </text>
                        <rect
                            x="584"
                            y="238"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="662"
                            y="238"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />

                        {/* Row A4: 月額 1,980円 */}
                        <rect
                            x="10"
                            y="270"
                            width="260"
                            height="32"
                            rx="2"
                            fill="#0d1117"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="1"
                        />
                        <text x="20" y="290" fontSize="11" fill="#c084fc">月額 1,980円</text>
                        <rect
                            x="272"
                            y="270"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="350"
                            y="270"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="428"
                            y="270"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="506"
                            y="270"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <rect
                            x="584"
                            y="270"
                            width="76"
                            height="32"
                            fill="rgba(192,132,252,0.14)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                        <text x="622" y="290" textAnchor="middle" fontSize="16" fill="#c084fc">
                            ✓
                        </text>
                        <rect
                            x="662"
                            y="270"
                            width="76"
                            height="32"
                            fill="rgba(13,17,23,0.3)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                    </svg>
                </div>
                <div className="alert cyan" style={{marginTop: "0.5rem"}}>
                    各ルール列（R1〜R6）に対して受け入れテストを最低1件ずつ設計します。6列 =
                    最低6テストケースが必要です。
                </div>

                {/* 状態遷移テスト */}
                <h2>状態遷移テスト（State Transition Testing）</h2>
                <p>システムの状態変化を図示し、全ての正常遷移と無効遷移をテストします。</p>

                {/* State Transition SVG Diagram */}
                <div style={{overflowX: "auto", margin: "1.5rem 0"}}>
                    <svg
                        viewBox="0 0 760 430"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{width: "100%", maxWidth: "760px", height: "auto", display: "block", background: "#010b14", border: "1px solid rgba(0, 229, 255, 0.18)", borderRadius: "10px", fontFamily: "'IBM Plex Sans JP', sans-serif"}}
                        role="img"
                        aria-label="注文管理システムの状態遷移ダイアグラム"
                    >
                        <defs>
                            {/* arrow heads */}
                            <marker
                                id="arr-cyan"
                                markerWidth="9"
                                markerHeight="9"
                                refX="8"
                                refY="4.5"
                                orient="auto"
                            >
                                <path d="M0,0 L9,4.5 L0,9 Z" fill="#00e5ff" />
                            </marker>
                            <marker
                                id="arr-red"
                                markerWidth="9"
                                markerHeight="9"
                                refX="8"
                                refY="4.5"
                                orient="auto"
                            >
                                <path d="M0,0 L9,4.5 L0,9 Z" fill="#ff3b5c" />
                            </marker>
                            <marker
                                id="arr-amber"
                                markerWidth="9"
                                markerHeight="9"
                                refX="8"
                                refY="4.5"
                                orient="auto"
                            >
                                <path d="M0,0 L9,4.5 L0,9 Z" fill="#ffab00" />
                            </marker>
                            {/* node glows */}
                            <filter id="glow-green">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <filter id="glow-amber">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Title */}
                        <text
                            x="380"
                            y="26"
                            textAnchor="middle"
                            fontSize="14"
                            fill="#00e5ff"
                            fontWeight="700"
                            letterSpacing="1"
                        >
                            注文管理システム　状態遷移ダイアグラム
                        </text>

                        {/* ── START NODE: 新規注文 ── */}
                        <circle cx="380" cy="66" r="14" fill="#00e5ff" opacity="0.9" />
                        <circle cx="380" cy="66" r="10" fill="#030712" />
                        <circle cx="380" cy="66" r="5" fill="#00e5ff" />
                        <text x="380" y="54" textAnchor="middle" fontSize="11" fill="#00e5ff">
                            新規注文
                        </text>

                        {/* Arrow: 新規注文 → 支払済み (vertical down) */}
                        <line
                            x1="380"
                            y1="80"
                            x2="380"
                            y2="128"
                            stroke="#00e5ff"
                            strokeWidth="1.8"
                            markerEnd="url(#arr-cyan)"
                            strokeDasharray="5,3"
                        />
                        <text x="390" y="108" fontSize="10" fill="#94a3b8">支払い完了</text>

                        {/* ── STATE: 支払済み (center-left) ── */}
                        <rect
                            x="280"
                            y="130"
                            width="140"
                            height="44"
                            rx="8"
                            fill="rgba(0,255,157,0.08)"
                            stroke="#00ff9d"
                            strokeWidth="1.8"
                            filter="url(#glow-green)"
                        />
                        <text
                            x="350"
                            y="148"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00ff9d"
                            fontWeight="700"
                        >
                            支払済み
                        </text>
                        <text x="350" y="163" textAnchor="middle" fontSize="10" fill="#4b5563">
                            Paid
                        </text>

                        {/* Arrow: 支払済み → 発送済み (horizontal right) */}
                        <line
                            x1="420"
                            y1="152"
                            x2="518"
                            y2="152"
                            stroke="#00e5ff"
                            strokeWidth="1.8"
                            markerEnd="url(#arr-cyan)"
                        />
                        <text x="465" y="146" textAnchor="middle" fontSize="10" fill="#94a3b8">
                            発送
                        </text>

                        {/* ── STATE: 発送済み (right) ── */}
                        <rect
                            x="520"
                            y="130"
                            width="140"
                            height="44"
                            rx="8"
                            fill="rgba(0,255,157,0.08)"
                            stroke="#00ff9d"
                            strokeWidth="1.8"
                            filter="url(#glow-green)"
                        />
                        <text
                            x="590"
                            y="148"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00ff9d"
                            fontWeight="700"
                        >
                            発送済み
                        </text>
                        <text x="590" y="163" textAnchor="middle" fontSize="10" fill="#4b5563">
                            Shipped
                        </text>

                        {/* Arrow: 支払済み → キャンセル済 (vertical down-left) */}
                        <path
                            d="M 310 174 L 310 250 L 200 250 L 200 280"
                            fill="none"
                            stroke="#ff3b5c"
                            strokeWidth="1.8"
                            markerEnd="url(#arr-red)"
                            strokeDasharray="5,3"
                        />
                        <text x="238" y="244" fontSize="10" fill="#ff3b5c">キャンセル</text>

                        {/* Arrow: 発送済み → 完了 (vertical down) */}
                        <line
                            x1="590"
                            y1="174"
                            x2="590"
                            y2="280"
                            stroke="#00e5ff"
                            strokeWidth="1.8"
                            markerEnd="url(#arr-cyan)"
                        />
                        <text x="600" y="232" fontSize="10" fill="#94a3b8">配達完了</text>

                        {/* ── STATE: キャンセル済 (bottom-left) ── */}
                        <rect
                            x="100"
                            y="282"
                            width="140"
                            height="44"
                            rx="8"
                            fill="rgba(255,59,92,0.08)"
                            stroke="#ff3b5c"
                            strokeWidth="1.8"
                            filter="url(#glow-amber)"
                        />
                        <text
                            x="170"
                            y="300"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#ff3b5c"
                            fontWeight="700"
                        >
                            キャンセル済
                        </text>
                        <text x="170" y="315" textAnchor="middle" fontSize="10" fill="#4b5563">
                            Cancelled
                        </text>

                        {/* ── STATE: 完了 (bottom-right) ── */}
                        <rect
                            x="520"
                            y="282"
                            width="140"
                            height="44"
                            rx="8"
                            fill="rgba(0,255,157,0.08)"
                            stroke="#00ff9d"
                            strokeWidth="1.8"
                            filter="url(#glow-green)"
                        />
                        <text
                            x="590"
                            y="300"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#00ff9d"
                            fontWeight="700"
                        >
                            完了
                        </text>
                        <text x="590" y="315" textAnchor="middle" fontSize="10" fill="#4b5563">
                            Completed
                        </text>

                        {/* Arrow: 完了 → 返品処理 (vertical down) */}
                        <line
                            x1="590"
                            y1="326"
                            x2="590"
                            y2="370"
                            stroke="#ffab00"
                            strokeWidth="1.8"
                            markerEnd="url(#arr-amber)"
                            strokeDasharray="5,3"
                        />
                        <text x="600" y="352" fontSize="10" fill="#ffab00">返品要求</text>

                        {/* ── STATE: 返品処理 (bottom-center-right) ── */}
                        <rect
                            x="520"
                            y="372"
                            width="140"
                            height="44"
                            rx="8"
                            fill="rgba(255,171,0,0.08)"
                            stroke="#ffab00"
                            strokeWidth="1.8"
                        />
                        <text
                            x="590"
                            y="390"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#ffab00"
                            fontWeight="700"
                        >
                            返品処理
                        </text>
                        <text x="590" y="405" textAnchor="middle" fontSize="10" fill="#4b5563">
                            Returned
                        </text>

                        {/* ── INVALID TRANSITIONS (red dashed X lines) ── */}
                        {/* 完了 → キャンセル INVALID */}
                        <path
                            d="M 520 304 C 420 304 420 304 240 304"
                            fill="none"
                            stroke="#ff3b5c"
                            strokeWidth="1.2"
                            strokeDasharray="3,4"
                            opacity="0.45"
                            markerEnd="url(#arr-red)"
                        />
                        <rect
                            x="358"
                            y="290"
                            width="68"
                            height="18"
                            rx="4"
                            fill="#030712"
                            opacity="0.85"
                        />
                        <text x="392" y="302" textAnchor="middle" fontSize="9" fill="#ff3b5c">
                            無効 ✗
                        </text>

                        {/* 発送済み → 支払取消 INVALID */}
                        <path
                            d="M 520 142 C 470 118 430 118 420 130"
                            fill="none"
                            stroke="#ff3b5c"
                            strokeWidth="1.2"
                            strokeDasharray="3,4"
                            opacity="0.45"
                            markerEnd="url(#arr-red)"
                        />
                        <rect
                            x="452"
                            y="107"
                            width="56"
                            height="18"
                            rx="4"
                            fill="#030712"
                            opacity="0.85"
                        />
                        <text x="480" y="119" textAnchor="middle" fontSize="9" fill="#ff3b5c">
                            無効 ✗
                        </text>

                        {/* Legend */}
                        <rect
                            x="22"
                            y="370"
                            width="200"
                            height="50"
                            rx="8"
                            fill="rgba(13,17,23,0.85)"
                            stroke="rgba(0,229,255,0.15)"
                            strokeWidth="1"
                        />
                        <text x="34" y="388" fontSize="10" fill="#00e5ff">━━</text>
                        <text x="54" y="388" fontSize="10" fill="#94a3b8">正常遷移</text>
                        <text x="34" y="403" fontSize="10" fill="#00e5ff" opacity="0.6">╌╌</text>
                        <text x="54" y="403" fontSize="10" fill="#94a3b8">条件付き遷移</text>
                        <text x="115" y="388" fontSize="10" fill="#ff3b5c" opacity="0.7">╌╌</text>
                        <text x="136" y="388" fontSize="10" fill="#ff3b5c">無効遷移</text>
                        <text x="115" y="403" fontSize="10" fill="#ffab00" opacity="0.8">╌╌</text>
                        <text x="136" y="403" fontSize="10" fill="#ffab00">返品フロー</text>
                    </svg>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>テストID</th>
                                <th>種類</th>
                                <th>遷移内容</th>
                                <th>期待結果</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>TC-01</td>
                                <td>正常遷移</td>
                                <td>新規注文 → 支払い完了で「支払済み」になること</td>
                                <td>ステータス: 支払済み</td>
                            </tr>
                            <tr>
                                <td>TC-02</td>
                                <td>正常遷移</td>
                                <td>支払済み → 発送で「発送済み」になること</td>
                                <td>ステータス: 発送済み</td>
                            </tr>
                            <tr>
                                <td>TC-03</td>
                                <td>正常遷移</td>
                                <td>支払済み → キャンセルで「キャンセル済」になること</td>
                                <td>ステータス: キャンセル済</td>
                            </tr>
                            <tr>
                                <td>TC-04</td>
                                <td>正常遷移</td>
                                <td>発送済み → 配達完了で「完了」になること</td>
                                <td>ステータス: 完了</td>
                            </tr>
                            <tr>
                                <td>TC-05</td>
                                <td>正常遷移</td>
                                <td>完了 → 返品要求で「返品処理」になること</td>
                                <td>ステータス: 返品処理中</td>
                            </tr>
                            <tr>
                                <td>TC-06</td>
                                <td><span style={{color: "var(--color-accent-red)"}}>無効遷移</span></td>
                                <td>完了状態からキャンセルできないこと</td>
                                <td>エラーメッセージ表示</td>
                            </tr>
                            <tr>
                                <td>TC-07</td>
                                <td><span style={{color: "var(--color-accent-red)"}}>無効遷移</span></td>
                                <td>発送済み状態から支払い取り消しできないこと</td>
                                <td>エラーメッセージ表示</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* テスト設計技法まとめ */}
                <h2>受け入れテスト設計で使用する主な技法</h2>
                <div className="arch-layers">
                    <div className="arch-layer l1">
                        <div className="arch-label">同値分割法（Equivalence Partitioning）</div>
                        同じ扱いを受けるデータをグループ化。各グループから1つをテスト。<br />
                        例：パスワード長 → 7文字以下(NG) / 8〜64文字(OK) / 65文字以上(NG)
                    </div>
                    <div className="arch-layer l2">
                        <div className="arch-label">境界値分析（Boundary Value Analysis）</div>
                        境界付近の値をテスト。8文字が最小値なら7・8・9文字をテスト。
                    </div>
                    <div className="arch-layer l3">
                        <div className="arch-label">デシジョンテーブル（Decision Table）</div>
                        複数条件の組み合わせをテーブルで整理。全ルールに対してテストを設計。
                    </div>
                    <div className="arch-layer l2">
                        <div className="arch-label">状態遷移テスト（State Transition Testing）</div>
                        システムの状態変化をダイアグラムで表現し、全遷移パスをテスト。
                    </div>
                    <div className="arch-layer l1">
                        <div className="arch-label">ユースケーステスト（Use Case Testing）</div>
                        実際のユーザー利用シナリオをE2Eでテスト。主シナリオ・代替シナリオ・例外シナリオを網羅。
                    </div>
                </div>
            </div>
        </section>

        {/* CHAPTER 4 */}
        <section id="ch4" className="section">
            <div className="container">
                <div className="chapter-num">CHAPTER 04 <span className="klevel">K2</span></div>
                <h1 className="section-title">非機能要件の受け入れテスト</h1>
                <p className="section-desc">
                    ユーザビリティ・パフォーマンス・セキュリティの受け入れ基準の設定と検証方法を学びます。
                </p>

                {/* ユーザビリティ */}
                <h2>ユーザビリティの受け入れテスト（ISO 9241-11）</h2>
                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-val green">有効性</div>
                        <div className="metric-label">
                            Effectiveness<br />目標を正確に達成できるか<br /><span
                                style={{color: "var(--color-accent-cyan)"}}
                                >タスク完了率(%)</span
                            >
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">効率性</div>
                        <div className="metric-label">
                            Efficiency<br />達成にかかる時間・労力<br /><span
                                style={{color: "var(--color-accent-cyan)"}}
                                >完了時間・クリック数</span
                            >
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val amber">満足度</div>
                        <div className="metric-label">
                            Satisfaction<br />主観的な使いやすさの評価<br /><span
                                style={{color: "var(--color-accent-cyan)"}}
                                >SUSスコア</span
                            >
                        </div>
                    </div>
                </div>

                {/* SUSスコア */}
                <h2>SUSスコアの評価基準</h2>
                <div className="pyramid">
                    <div className="pyramid-level pyr-1">0〜51点 — Awful（非常に問題あり）</div>
                    <div className="pyramid-level pyr-2">52〜67点 — Poor（要改善）</div>
                    <div className="pyramid-level pyr-3">68〜79点 — OK（業界平均）</div>
                    <div className="pyramid-level pyr-4" style={{width: "100%"}}>
                        80〜100点 — Good / Excellent（受け入れ基準の目標）
                    </div>
                </div>

                <div className="callout success">
                    <div className="callout-title">✅ 受け入れ基準の例</div>
                    <p>
                        「SUSスコアが80点以上であること」—
                        これは明確で測定可能なユーザビリティの受け入れ基準。「使いやすいこと」という曖昧な記述とは異なり、Yes/No
                        で判定できます。
                    </p>
                </div>

                {/* パフォーマンステスト */}
                <h2>パフォーマンス受け入れ基準の設定</h2>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>テスト種類</th>
                                <th>受け入れ基準の例</th>
                                <th>測定方法</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>応答時間テスト</strong></td>
                                <td>通常操作：2秒以内、検索：3秒以内、レポート生成：10秒以内</td>
                                <td>k6, JMeter, ブラウザ DevTools</td>
                            </tr>
                            <tr>
                                <td><strong>負荷テスト</strong></td>
                                <td>同時100ユーザーで正常動作し、500ユーザー時も3秒以内の応答</td>
                                <td>JMeter, Gatling, Locust</td>
                            </tr>
                            <tr>
                                <td><strong>ストレステスト</strong></td>
                                <td>
                                    同時1,000ユーザーの高負荷でもクラッシュせず適切なエラーを表示
                                </td>
                                <td>JMeter, k6</td>
                            </tr>
                            <tr>
                                <td><strong>可用性</strong></td>
                                <td>稼働率99.9%（年間ダウンタイム8.76時間以内）</td>
                                <td>Uptime監視ツール（Datadog等）</td>
                            </tr>
                            <tr>
                                <td><strong>スループット</strong></td>
                                <td>100リクエスト/秒を処理できること</td>
                                <td>JMeter, Gatling</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* セキュリティ受け入れテスト */}
                <h2>セキュリティ受け入れ基準</h2>
                <div className="arch-layers">
                    <div className="arch-layer l1">
                        <div className="arch-label">認証・認可</div>
                        <ul>
                            <li>パスワードポリシー（最低8文字・英数字混在）が適用されること</li>
                            <li>多要素認証（MFA）が機能すること</li>
                            <li>セッションタイムアウト（15分）が機能すること</li>
                            <li>一般ユーザーが管理者機能にアクセスできないこと</li>
                        </ul>
                    </div>
                    <div className="arch-layer l2">
                        <div className="arch-label">データ保護</div>
                        <ul>
                            <li>パスワードがハッシュ化して保存されること（平文保存禁止）</li>
                            <li>全通信が HTTPS で暗号化されていること</li>
                            <li>クレジットカード情報が PCI DSS に準拠して処理されること</li>
                            <li>個人情報が GDPR / 個人情報保護法に準拠して扱われること</li>
                        </ul>
                    </div>
                    <div className="arch-layer l3">
                        <div className="arch-label">脆弱性対策（OWASP Top 10）</div>
                        <ul>
                            <li>SQLインジェクションに対して防御されていること</li>
                            <li>XSS（クロスサイトスクリプティング）に対して防御されていること</li>
                            <li>CSRF対策が実装されていること</li>
                            <li>OWASP ZAP スキャンで重大な問題がゼロであること</li>
                        </ul>
                    </div>
                </div>

                <div className="chip-list">
                    <div className="chip cyan">OWASP ZAP</div>
                    <div className="chip green">Burp Suite</div>
                    <div className="chip amber">Snyk</div>
                    <div className="chip cyan">PCI DSS</div>
                    <div className="chip purple">GDPR</div>
                    <div className="chip red">WCAG 2.1 AA</div>
                    <div className="chip green">ISO 27001</div>
                </div>
            </div>
        </section>

        {/* CHAPTER 5 */}
        <section id="ch5" className="section">
            <div className="container">
                <div className="chapter-num">CHAPTER 05 <span className="klevel">K3</span></div>
                <h1 className="section-title">協調的な受け入れテスト（Collaborative AT）</h1>
                <p className="section-desc">
                    3 Amigos ミーティング、UAT のフルプロセス、入口・出口基準、BDD
                    ツールを網羅します。
                </p>

                {/* ステークホルダー */}
                <h2>主要ステークホルダーと役割</h2>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ステークホルダー</th>
                                <th>受け入れテストでの役割</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>プロダクトオーナー（PO）</strong></td>
                                <td>受け入れ基準の最終決定・承認。ビジネス要件の代表者。</td>
                            </tr>
                            <tr>
                                <td><strong>ビジネスアナリスト（BA）</strong></td>
                                <td>
                                    要件の詳細化・受け入れ基準の作成。ステークホルダー間の橋渡し。
                                </td>
                            </tr>
                            <tr>
                                <td><strong>テスター / QA</strong></td>
                                <td>
                                    テスト設計・実行・結果報告。テスト可能性の確認・品質の守護。
                                </td>
                            </tr>
                            <tr>
                                <td><strong>開発者</strong></td>
                                <td>
                                    技術的な実現可能性の確認。ATDD
                                    の実装（テストをパスするコードの実装）。
                                </td>
                            </tr>
                            <tr>
                                <td><strong>エンドユーザー / UAT担当</strong></td>
                                <td>
                                    実際の使い方でのテスト実行。ユーザビリティ・実務適合性の評価。
                                </td>
                            </tr>
                            <tr>
                                <td><strong>プロジェクトマネージャー</strong></td>
                                <td>スケジュール・リソース管理。リリース判断の調整。</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 3 Amigos */}
                <h2>3 Amigos ミーティング（スリー・アミーゴ）</h2>
                <div className="def-box">
                    <div className="def-term">3 Amigos ミーティングとは？</div>
                    PO（ビジネス視点）+ 開発者（技術視点）+
                    テスター（品質視点）の3者が集まり、受け入れ基準を共同で定義するセッション。「3者の視点の交差点」がテストケースの品質を高める。
                </div>

                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-val green" style={{fontSize: "1.5rem"}}>👤 PO</div>
                        <div className="metric-label">
                            "これで<strong>何を達成したいか</strong>"<br />ビジネス視点
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val" style={{fontSize: "1.5rem"}}>👤 Dev</div>
                        <div className="metric-label">
                            "どのように<strong>実装するか</strong>"<br />技術視点
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val amber" style={{fontSize: "1.5rem"}}>👤 QA</div>
                        <div className="metric-label">
                            "何が<strong>失敗し得るか</strong>"<br />品質・リスク視点
                        </div>
                    </div>
                </div>

                <h3>ミーティングの流れ（30〜60分）</h3>
                <ol className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            PO がユーザーストーリーのビジネス意図を説明する
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-content">各参加者が質問・懸念・エッジケースを共有する</div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            受け入れ基準をホワイトボード/ドキュメントに記述する
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            エッジケース・例外ケース・非機能要件を洗い出す
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">5</div>
                        <div className="step-content">Gherkin シナリオを共同で作成する</div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            全員が内容に合意し、Definition of Done に追加する
                        </div>
                    </li>
                </ol>

                {/* UAT プロセス */}
                <h2>UAT（ユーザー受け入れテスト）の全体プロセス</h2>
                <div className="arch-layers">
                    <div className="arch-layer l1">
                        <div className="arch-label">Phase 1: 計画（Planning）</div>
                        UAT 範囲の定義 → テスト参加者の選定 → テスト環境の準備 → テストデータの準備
                        → スケジュール決定 → 入口・出口基準の設定
                    </div>
                    <div className="arch-layer l2">
                        <div className="arch-label">Phase 2: 準備（Preparation）</div>
                        テストシナリオ・テストケースの作成 → テスト参加者へのオリエンテーション →
                        テスト環境の最終確認・動作検証
                    </div>
                    <div className="arch-layer l3">
                        <div className="arch-label">Phase 3: 実行（Execution）</div>
                        エンドユーザーによるテスト実行 → 欠陥の記録・報告 →
                        テスト進捗のモニタリングと制御
                    </div>
                    <div className="arch-layer l2">
                        <div className="arch-label">Phase 4: 評価（Evaluation）</div>
                        テスト結果の集計 → 出口基準の達成確認 → 残存リスクの評価 → Go/No-Go の判断
                    </div>
                    <div className="arch-layer l1">
                        <div className="arch-label">Phase 5: 完了（Closure）</div>
                        UAT 完了レポートの作成 → ステークホルダーのサインオフ（承認取得） →
                        教訓・改善点の記録
                    </div>
                </div>

                {/* 入口・出口基準 */}
                <h2>UAT の入口基準・出口基準</h2>
                <div className="compare-grid">
                    <div className="compare-card good">
                        <div className="compare-header">✅ 入口基準（UAT を開始できる条件）</div>
                        <div className="compare-item">システムテスト・統合テストが完了していること</div>
                        <div className="compare-item">Critical / High 欠陥が全て修正されていること</div>
                        <div className="compare-item">
                            テスト環境がセットアップ済みで安定していること
                        </div>
                        <div className="compare-item">テストデータが本番同等で準備されていること</div>
                        <div className="compare-item">
                            ユーザーマニュアル・トレーニング資料が準備済みであること
                        </div>
                    </div>
                    <div className="compare-card good">
                        <div className="compare-header">✅ 出口基準（UAT を完了できる条件）</div>
                        <div className="compare-item">
                            計画したテストケースの95%以上が実行されていること
                        </div>
                        <div className="compare-item">Critical 欠陥が0件であること</div>
                        <div className="compare-item">
                            High 欠陥が3件以下（全件修正計画あり）であること
                        </div>
                        <div className="compare-item">
                            ステークホルダーが承認（サインオフ）していること
                        </div>
                        <div className="compare-item">
                            SUSスコアが80点以上であること（ユーザビリティ要件）
                        </div>
                    </div>
                </div>

                {/* 契約・規制受け入れテスト */}
                <h2>契約・規制受け入れテスト</h2>
                <div className="two-col">
                    <div className="info-card">
                        <h4>契約受け入れテスト（Contractual AT）</h4>
                        <p>契約書に記載された要件・SLA への準拠を検証する。</p>
                        <p>例：「システムは99.9%の可用性を保証する」という契約条件のテスト</p>
                    </div>
                    <div className="info-card">
                        <h4>規制受け入れテスト（Regulatory AT）</h4>
                        <p>法律・業界標準への準拠を検証する。</p>
                        <ul>
                            <li>医療：ISO 13485, FDA 21 CFR Part 11, HIPAA</li>
                            <li>金融：PCI DSS, SOX法, 金融庁ガイドライン</li>
                            <li>一般：GDPR, 個人情報保護法, WCAG 2.1</li>
                        </ul>
                    </div>
                </div>

                {/* BDDツール */}
                <h2>BDD / ATDD ツール比較</h2>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ツール</th>
                                <th>言語</th>
                                <th>特徴</th>
                                <th>公式サイト</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Cucumber</strong></td>
                                <td>Java/JS/Ruby/Python</td>
                                <td>Gherkin 標準対応・最も広く普及</td>
                                <td>
                                    <a href="https://cucumber.io/" style={{color: "var(--color-accent-cyan)"}}
                                        >cucumber.io</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>SpecFlow</strong></td>
                                <td>C# / .NET</td>
                                <td>Visual Studio 統合・.NET 向け</td>
                                <td>
                                    <a href="https://specflow.org/" style={{color: "var(--color-accent-cyan)"}}
                                        >specflow.org</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Behave</strong></td>
                                <td>Python</td>
                                <td>Python の BDD フレームワーク</td>
                                <td>
                                    <a
                                        href="https://behave.readthedocs.io/"
                                        style={{color: "var(--color-accent-cyan)"}}
                                        >behave.readthedocs.io</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>JBehave</strong></td>
                                <td>Java</td>
                                <td>Java の BDD フレームワーク</td>
                                <td>
                                    <a href="https://jbehave.org/" style={{color: "var(--color-accent-cyan)"}}
                                        >jbehave.org</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Robot Framework</strong></td>
                                <td>Python</td>
                                <td>キーワード駆動・豊富なライブラリ</td>
                                <td>
                                    <a
                                        href="https://robotframework.org/"
                                        style={{color: "var(--color-accent-cyan)"}}
                                        >robotframework.org</a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* EXAM TIPS */}
        <section id="exam" className="section">
            <div className="container">
                <div className="chapter-num">EXAM TIPS</div>
                <h1 className="section-title">試験対策・サンプル問題</h1>
                <p className="section-desc">
                    CT-AcT v1.0 の試験配点・必須概念・サンプル問題で総仕上げをします。
                </p>

                {/* 試験配点 */}
                <h2>章別配点と重要度</h2>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-chapter">CHAPTER 01</div>
                        <div className="exam-topic">導入・基礎</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-points">推定 ~8問</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">CHAPTER 02</div>
                        <div className="exam-topic">AC・BDD・ATDD</div>
                        <div className="exam-stars">★★★★★</div>
                        <div className="exam-points">推定 ~12問（最重要）</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">CHAPTER 03</div>
                        <div className="exam-topic">プロセスモデリング</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-points">推定 ~8問</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">CHAPTER 04</div>
                        <div className="exam-topic">非機能要件テスト</div>
                        <div className="exam-stars">★★★☆☆</div>
                        <div className="exam-points">推定 ~6問</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">CHAPTER 05</div>
                        <div className="exam-topic">協調的AT・UAT</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-points">推定 ~6問</div>
                    </div>
                </div>

                {/* 必須概念 */}
                <h2>必ず覚える重要概念チェックリスト</h2>
                <div className="code-block" data-lang="checklist">
                    <div className="code-line">
                        <span className="code-cyan">✅ 受け入れテストの種類と CT-AcT の対象範囲：</span>
                    </div>
                    <div className="code-line">
                        <span className="code-green">対象</span
                        ><span className="code-white">
                            UAT / 契約AT / 規制AT / アルファテスト / ベータテスト</span
                        >
                    </div>
                    <div className="code-line">
                        <span className="code-red">対象外</span
                        ><span className="code-white">
                            OAT（運用受け入れテスト）← 試験頻出の落とし穴！</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-cyan">✅ ビジネスゴール変換フロー（5ステップ）：</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white">
                            ビジネスゴール → ビジネスニーズ → 要件 → AC → テスト</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-cyan">✅ 受け入れ基準の最重要特性：</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white">
                            Testable（テスト可能）= Yes/No で判定できること</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-cyan">✅ ATDD のワークフロー（5ステップ）：</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white">
                            話し合い → AC定義 → テスト作成 → 実装 → 実行・確認</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-cyan">✅ Gherkin の正しい順序：</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white"> </span><span className="code-keyword">Given</span
                        ><span className="code-white">（前提条件）→ </span
                        ><span className="code-keyword">When</span
                        ><span className="code-white">（アクション）→ </span
                        ><span className="code-keyword">Then</span
                        ><span className="code-white">（期待結果）</span>
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-cyan">✅ 3 Amigos の3つの視点：</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white">
                            PO（ビジネス）/ 開発者（技術）/ テスター（品質・リスク）</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-cyan">✅ アルファ vs ベータの違い：</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white">
                            アルファ：社内・監視下 ／ ベータ：社外・実環境・非監視</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-cyan">✅ ユーザビリティの3要素（ISO 9241-11）：</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white">
                            有効性（Effectiveness）/ 効率性（Efficiency）/
                            満足度（Satisfaction）</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-cyan">✅ SUSスコアの評価：</span></div>
                    <div className="code-line">
                        <span className="code-white">
                            68点 = 業界平均 ／ 80点以上 = Good ／ 90点以上 = Excellent</span
                        >
                    </div>
                    <div className="code-line"></div>
                    <div className="code-line">
                        <span className="code-cyan">✅ UAT の入口基準と出口基準の区別：</span>
                    </div>
                    <div className="code-line">
                        <span className="code-white">
                            入口 = 開始できる前提条件 ／ 出口 = 完了できる達成条件</span
                        >
                    </div>
                </div>

                {/* サンプル問題 */}
                <h2>サンプル問題 Q&amp;A</h2>

                <div className="trend-card">
                    <div className="trend-label">Q1 — K2 / Chapter 1</div>
                    <p>
                        CT-AcT において OAT（Operational Acceptance
                        Testing）が対象外とされている最大の理由はどれか？
                    </p>
                    <p
                        style={{marginTop: "0.75rem", paddingLeft: "1rem", borderLeft: "2px solid var(--color-accent-green)"}}
                    >
                        <strong style={{color: "var(--color-accent-green)"}}
                            >正解:
                            OATは一般的に「システムを運用するチーム」によって実施されるから</strong
                        ><br />
                        <span style={{color: "var(--text-secondary)", fontSize: "0.9rem"}}
                            >CT-AcT はビジネスアナリスト・PO・テスター向けの資格。OAT
                            は運用チームの担当であり本資格のスコープ外。</span
                        >
                    </p>
                </div>

                <div className="trend-card">
                    <div className="trend-label">Q2 — K3 / Chapter 2</div>
                    <p>
                        次の受け入れ基準のうち最もテスト可能なものはどれか？<br />
                        A) システムは使いやすくあること<br />
                        B) 検索結果が高速に表示されること<br />
                        C)
                        ログイン失敗が5回連続した場合、アカウントを30分間ロックしメールで通知すること<br />
                        D) エラーメッセージが適切に表示されること
                    </p>
                    <p
                        style={{marginTop: "0.75rem", paddingLeft: "1rem", borderLeft: "2px solid var(--color-accent-green)"}}
                    >
                        <strong style={{color: "var(--color-accent-green)"}}>正解: C</strong><br />
                        <span style={{color: "var(--text-secondary)", fontSize: "0.9rem"}}
                            >Cのみが「5回・30分・メール通知」という具体的な数値基準を持ち、Yes/No
                            で判定できる。A・B・D は主観的または数値基準がなくテスト不可能。</span
                        >
                    </p>
                </div>

                <div className="trend-card">
                    <div className="trend-label">Q3 — K3 / Chapter 2</div>
                    <p>
                        次の Gherkin シナリオの問題点はどれか？<br />
                        <code
                            >When ユーザーが登録フォームを開く → Given "test@bad" を入力する → Then
                            エラーが表示される</code
                        >
                    </p>
                    <p
                        style={{marginTop: "0.75rem", paddingLeft: "1rem", borderLeft: "2px solid var(--color-accent-green)"}}
                    >
                        <strong style={{color: "var(--color-accent-green)"}}
                            >正解: Given と When の順序が逆</strong
                        ><br />
                        <span style={{color: "var(--text-secondary)", fontSize: "0.9rem"}}
                            >正しい順序は Given（前提条件）→ When（アクション）→
                            Then（結果）。フォームを開くのは前提条件なので Given に属する。</span
                        >
                    </p>
                </div>

                <div className="trend-card">
                    <div className="trend-label">Q4 — K2 / Chapter 5</div>
                    <p>
                        UAT の「入口基準」として最も不適切なものはどれか？<br />
                        A) システムテストが完了していること<br />
                        B) Critical 欠陥が全て修正されていること<br />
                        C) UAT 完了後に全ての欠陥が修正されること<br />
                        D) テスト環境がセットアップ済みであること
                    </p>
                    <p
                        style={{marginTop: "0.75rem", paddingLeft: "1rem", borderLeft: "2px solid var(--color-accent-green)"}}
                    >
                        <strong style={{color: "var(--color-accent-green)"}}>正解: C</strong><br />
                        <span style={{color: "var(--text-secondary)", fontSize: "0.9rem"}}
                            >C は UAT 完了後の活動であり入口基準ではない。入口基準とは UAT
                            を「開始するための前提条件」。出口基準や後続活動と混同しないこと。</span
                        >
                    </p>
                </div>

                <div className="trend-card">
                    <div className="trend-label">Q5 — K2 / Chapter 4</div>
                    <p>
                        パフォーマンスの受け入れ基準として最もテスト可能なものはどれか？<br />
                        A) システムは快適に使えること<br />
                        B) システムは高速であること<br />
                        C) トップページのロード時間は95パーセンタイルで3秒以内であること<br />
                        D) ユーザーにとって使いやすいシステムであること
                    </p>
                    <p
                        style={{marginTop: "0.75rem", paddingLeft: "1rem", borderLeft: "2px solid var(--color-accent-green)"}}
                    >
                        <strong style={{color: "var(--color-accent-green)"}}>正解: C</strong><br />
                        <span style={{color: "var(--text-secondary)", fontSize: "0.9rem"}}
                            >「95パーセンタイルで3秒以内」は測定対象・測定方法・数値基準が全て明確でYes/No判定が可能。A・B・D
                            は全て主観的または測定基準がない。</span
                        >
                    </p>
                </div>
            </div>
        </section>

        {/* REFERENCES */}
        <section id="refs" className="section">
            <div className="container">
                <div className="chapter-num">REFERENCES</div>
                <h1 className="section-title">参考文献・公式リソース</h1>
                <p className="section-desc">
                    本ガイドで参照した一次情報源・公式ドキュメント・学習リソースの一覧です。
                </p>

                <h2>🏛️ 公式 ISTQB® リソース</h2>
                <div className="ref-grid">
                    <a
                        href="https://istqb.org/certifications/certified-tester-acceptance-testing/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">公式 / 認定ページ</div>
                        <div className="ref-title">CT-AcT 認定ページ（公式）</div>
                        <div className="ref-url">istqb.org/certifications/…</div>
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&download_id=3585"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">公式 / シラバス</div>
                        <div className="ref-title">CT-AcT シラバス v1.0 PDF</div>
                        <div className="ref-url">istqb.org/?sdm_process_download…</div>
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&download_id=3586"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">公式 / サンプル問題</div>
                        <div className="ref-title">サンプル試験問題 v1.3</div>
                        <div className="ref-url">istqb.org/?sdm_process_download…</div>
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&download_id=3587"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">公式 / サンプル解答</div>
                        <div className="ref-title">サンプル試験解答 v1.3</div>
                        <div className="ref-url">istqb.org/?sdm_process_download…</div>
                    </a>
                    <a
                        href="https://glossary.istqb.org/en_US/search?term="
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">公式 / グロッサリー</div>
                        <div className="ref-title">ISTQB グロッサリー（用語集）</div>
                        <div className="ref-url">glossary.istqb.org/…</div>
                    </a>
                    <a
                        href="https://istqb.org/certifications/certified-tester-foundation-level/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">公式 / 前提資格</div>
                        <div className="ref-title">CTFL v4.0（前提資格）</div>
                        <div className="ref-url">istqb.org/certifications/ctfl…</div>
                    </a>
                </div>

                <h2>📢 試験プロバイダー</h2>
                <div className="ref-grid">
                    <a
                        href="https://isqi.org/ISTQB-Certified-Tester-Acceptance-Testing-CT-AcT/CT-AcT.502"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">試験プロバイダー / iSQI</div>
                        <div className="ref-title">iSQI 試験情報（CT-AcT）</div>
                        <div className="ref-url">isqi.org/…CT-AcT.502</div>
                    </a>
                    <a
                        href="https://astqb.org/certifications/acceptance-testing-certification/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">試験プロバイダー / ASTQB</div>
                        <div className="ref-title">ASTQB（米国）CT-AcT ページ</div>
                        <div className="ref-url">astqb.org/certifications/…</div>
                    </a>
                    <a
                        href="https://istqb.org/exam-providers/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">公式 / プロバイダー検索</div>
                        <div className="ref-title">試験プロバイダー検索</div>
                        <div className="ref-url">istqb.org/exam-providers/</div>
                    </a>
                </div>

                <h2>📖 BDD / ATDD 関連リソース</h2>
                <div className="ref-grid">
                    <a
                        href="https://cucumber.io/docs/gherkin/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">ツール / BDD</div>
                        <div className="ref-title">Cucumber / Gherkin 公式ドキュメント</div>
                        <div className="ref-url">cucumber.io/docs/gherkin/</div>
                    </a>
                    <a
                        href="https://specflow.org/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">ツール / BDD .NET</div>
                        <div className="ref-title">SpecFlow 公式（C#/.NET）</div>
                        <div className="ref-url">specflow.org</div>
                    </a>
                    <a
                        href="https://behave.readthedocs.io/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">ツール / BDD Python</div>
                        <div className="ref-title">Behave 公式（Python BDD）</div>
                        <div className="ref-url">behave.readthedocs.io</div>
                    </a>
                    <a
                        href="https://robotframework.org/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">ツール / キーワード駆動</div>
                        <div className="ref-title">Robot Framework 公式</div>
                        <div className="ref-url">robotframework.org</div>
                    </a>
                </div>

                <h2>📋 関連標準・規制</h2>
                <div className="ref-grid">
                    <a
                        href="https://www.iso.org/standard/63500.html"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">標準 / ユーザビリティ</div>
                        <div className="ref-title">ISO 9241-11:2018（ユーザビリティ定義）</div>
                        <div className="ref-url">iso.org/standard/63500.html</div>
                    </a>
                    <a
                        href="https://owasp.org/www-project-top-ten/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">標準 / セキュリティ</div>
                        <div className="ref-title">OWASP Top 10（Webセキュリティリスク）</div>
                        <div className="ref-url">owasp.org/www-project-top-ten/</div>
                    </a>
                    <a
                        href="https://www.pcisecuritystandards.org/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">標準 / 決済セキュリティ</div>
                        <div className="ref-title">PCI DSS（決済カードセキュリティ）</div>
                        <div className="ref-url">pcisecuritystandards.org</div>
                    </a>
                    <a
                        href="https://www.w3.org/WAI/WCAG21/quickref/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">標準 / アクセシビリティ</div>
                        <div className="ref-title">WCAG 2.1（ウェブアクセシビリティ）</div>
                        <div className="ref-url">w3.org/WAI/WCAG21/quickref/</div>
                    </a>
                    <a
                        href="https://www.omg.org/spec/BPMN/2.0/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">標準 / プロセスモデリング</div>
                        <div className="ref-title">BPMN 2.0 仕様（OMG公式）</div>
                        <div className="ref-url">omg.org/spec/BPMN/2.0/</div>
                    </a>
                    <a
                        href="https://www.iso.org/standard/78176.html"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">標準 / 品質モデル</div>
                        <div className="ref-title">ISO/IEC 25010:2023（SQuaRE）</div>
                        <div className="ref-url">iso.org/standard/78176.html</div>
                    </a>
                </div>

                <h2>🔧 テストツール</h2>
                <div className="ref-grid">
                    <a
                        href="https://jmeter.apache.org/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">ツール / パフォーマンス</div>
                        <div className="ref-title">Apache JMeter（負荷テスト）</div>
                        <div className="ref-url">jmeter.apache.org</div>
                    </a>
                    <a
                        href="https://grafana.com/docs/k6/latest/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">ツール / パフォーマンス</div>
                        <div className="ref-title">k6（Grafana社・CI/CD統合）</div>
                        <div className="ref-url">grafana.com/docs/k6/latest/</div>
                    </a>
                    <a
                        href="https://www.zaproxy.org/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">ツール / セキュリティ</div>
                        <div className="ref-title">OWASP ZAP（脆弱性スキャン）</div>
                        <div className="ref-url">zaproxy.org</div>
                    </a>
                    <a
                        href="https://www.testrail.com/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">ツール / テスト管理</div>
                        <div className="ref-title">TestRail（テスト管理）</div>
                        <div className="ref-url">testrail.com</div>
                    </a>
                    <a
                        href="https://docs.getxray.app/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">ツール / テスト管理</div>
                        <div className="ref-title">Xray（Jira連携テスト管理）</div>
                        <div className="ref-url">docs.getxray.app</div>
                    </a>
                    <a
                        href="https://www.hotjar.com/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">ツール / UXテスト</div>
                        <div className="ref-title">Hotjar（ヒートマップ・セッション録画）</div>
                        <div className="ref-url">hotjar.com</div>
                    </a>
                </div>

                <h2>🎓 学習リソース</h2>
                <div className="ref-grid">
                    <a
                        href="https://www.istqb.guru/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">学習 / ガイド</div>
                        <div className="ref-title">ISTQB.Guru CT-AcT ガイド</div>
                        <div className="ref-url">istqb.guru</div>
                    </a>
                    <a
                        href="https://www.udemy.com/course/istqb-acceptance-testing-sample-exams-2024-l/"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">学習 / 模擬試験</div>
                        <div className="ref-title">Udemy CT-AcT 模擬試験</div>
                        <div className="ref-url">udemy.com/course/…</div>
                    </a>
                    <a
                        href="https://www.processexam.com/istqb/istqb-ct-act-certification-exam-syllabus"
                        className="ref-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="ref-cat">学習 / シラバス解説</div>
                        <div className="ref-title">ProcessExam CT-AcT 学習ガイド</div>
                        <div className="ref-url">processexam.com/istqb/…</div>
                    </a>
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
            <div className="footer-brand">ISTQB® CT-AcT Acceptance Testing Guide 2025</div>
            <div className="footer-note">
                本ガイドは ISTQB® CT-AcT v1.0 シラバス（2019年リリース）に準拠しています。<br />
                本資料は ISTQB®
                が公認したトレーニング資料ではありません。公式シラバスと合わせてご使用ください。<br />
                最終確認は必ず公式サイト
                <a href="https://istqb.org" style={{color: "var(--color-accent-cyan)"}}>istqb.org</a>
                で行ってください。<br />
                &copy; 2025 — 情報は執筆時点のものです。
            </div>
        </footer>
    
        </div>
    );
}
