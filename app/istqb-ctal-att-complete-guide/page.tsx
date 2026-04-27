import React from 'react';
import NavBar from './NavBar';
import './istqb-ctal-att-complete-guide.css';


export default function IstqbCtalAttCompleteGuide() {
    return (
        <div className="istqb-ctal-att">
            
        <NavBar />

        {/* HERO */}
        <section className="hero" id="top">
            <div className="container">
                <div className="hero-badge">ISTQB® ADVANCED LEVEL — 2025 EDITION</div>
                <h1>CTAL-ATT<br /><span>Agile Technical Tester</span></h1>
                <p className="hero-sub">
                    アジャイル開発における技術的テストスキルの完全ガイド<br />TDD / BDD / ATDD /
                    CI・CD / サービス仮想化
                </p>
                <div className="hero-meta">
                    <div className="hero-chip"><span className="dot"></span>40問 / 90分</div>
                    <div className="hero-chip"><span className="dot"></span>合格点 42/64点（65%）</div>
                    <div className="hero-chip"><span className="dot"></span>前提：CTFL v4.0</div>
                    <div className="hero-chip"><span className="dot"></span>シラバス v1.1（2020）</div>
                    <div className="hero-chip"><span className="dot"></span>学習時間 約16時間</div>
                </div>
            </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">00</span>
                    <h2 className="chapter-title">概要 &amp; 資格ロードマップ</h2>
                </div>

                <p>
                    <strong
                        >CTAL-ATT（Certified Tester Advanced Level – Agile Technical
                        Tester）</strong
                    >は、アジャイル開発チームで技術的なテストを主導できる専門家を認定するISTQB国際資格です。TDD・BDD・ATDD・CI/CD・サービス仮想化といった現代のアジャイル現場で必須の技術を網羅しています。
                </p>

                {/* Metric cards */}
                <div className="metric-grid">
                    <div className="metric-card">
                        <span className="metric-val">40</span>
                        <div className="metric-label">試験問題数</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val">42</span>
                        <div className="metric-label">合格点（64点満点）</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val">90<small style={{fontSize: "1rem"}}>分</small></span>
                        <div className="metric-label">試験時間（+25%対応）</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val">16<small style={{fontSize: "1rem"}}>h</small></span>
                        <div className="metric-label">推奨学習時間</div>
                    </div>
                </div>

                <h3 className="section-title">8つのビジネスアウトカム</h3>
                <ol className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div className="step-content">
                            <strong
                                >適切なカバレッジを提供するテストのためにアジャイル技法を適用</strong
                            >できる
                        </div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div className="step-content">
                            <strong>アジャイルチーム内でテスト可能な要件</strong>を定義できる
                        </div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div className="step-content">
                            適切な技法を使用して様々な<strong>アジャイルテストアプローチ</strong>を作成・実装できる
                        </div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div className="step-content">
                            アジャイルプロジェクトでの<strong>テスト自動化活動</strong>を支援・貢献できる
                        </div>
                    </li>
                    <li>
                        <span className="step-num">5</span>
                        <div className="step-content">
                            アジャイルチームでの<strong>継続的インテグレーション（CI）</strong>を支援できる
                        </div>
                    </li>
                    <li>
                        <span className="step-num">6</span>
                        <div className="step-content">
                            <strong>継続的デリバリー・デプロイメント</strong
                            >においてアジャイルチームを支援できる
                        </div>
                    </li>
                    <li>
                        <span className="step-num">7</span>
                        <div className="step-content">
                            <strong>サービス仮想化</strong>のコンセプトを習得できる
                        </div>
                    </li>
                    <li>
                        <span className="step-num">8</span>
                        <div className="step-content">
                            効果的なコミュニケーションスタイルとチャネルを使用して<strong>チームと協力</strong>できる
                        </div>
                    </li>
                </ol>

                <h3 className="section-title">学習時間配分</h3>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>Chapter 1: 要件エンジニアリング</span><span>90分</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill bar-cyan" style={{ '--bar-width': "9.4%" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>Chapter 2: アジャイルにおけるテスト</span><span>360分 ← 最重要</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill bar-green" style={{ '--bar-width': "37.5%" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>Chapter 3: テスト自動化</span><span>270分</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill bar-amber" style={{ '--bar-width': "28.1%" } as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>Chapter 4: デプロイメントとデリバリー</span><span>240分</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill bar-purple" style={{ '--bar-width': "25%" } as React.CSSProperties}></div>
                    </div>
                </div>

                <h3 className="section-title">認知レベル（K-Level）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>レベル</th>
                                <th>意味</th>
                                <th>問題の特徴</th>
                                <th>例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>K1</strong></td>
                                <td>Remember（記憶）</td>
                                <td>用語・概念の記憶</td>
                                <td>ユーザーストーリー、エピック、TDDの定義</td>
                            </tr>
                            <tr>
                                <td><strong>K2</strong></td>
                                <td>Understand（理解）</td>
                                <td>概念を説明・分類</td>
                                <td>FIRSTの意味、BDDシナリオのガイドライン</td>
                            </tr>
                            <tr>
                                <td><strong>K3</strong></td>
                                <td>Apply（適用）</td>
                                <td>実際の状況に技法を適用</td>
                                <td>TDD/BDDの実装、CIパイプライン設計</td>
                            </tr>
                            <tr>
                                <td><strong>K4</strong></td>
                                <td>Analyze（分析）</td>
                                <td>複雑なシナリオを分析・評価</td>
                                <td>ユーザーストーリーの分析、テストチャーターの解釈</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="section-title">目次</h3>
                <div className="toc-grid">
                    <a className="toc-card" href="#ch1"
                        ><span className="toc-card-num">01</span
                        ><span className="toc-card-text"
                            >要件エンジニアリング<br />INVEST・受入基準</span
                        ></a
                    >
                    <a className="toc-card" href="#ch2-tdd"
                        ><span className="toc-card-num">02</span
                        ><span className="toc-card-text">TDD<br />Red-Green-Refactor</span></a
                    >
                    <a className="toc-card" href="#ch2-bdd"
                        ><span className="toc-card-num">03</span
                        ><span className="toc-card-text">BDD / Gherkin<br />振る舞い駆動開発</span></a
                    >
                    <a className="toc-card" href="#ch2-atdd"
                        ><span className="toc-card-num">04</span
                        ><span className="toc-card-text">ATDD<br />3 Amigos・受入テスト</span></a
                    >
                    <a className="toc-card" href="#ch2-exp"
                        ><span className="toc-card-num">05</span
                        ><span className="toc-card-text"
                            >経験ベーステスト<br />テストチャーター</span
                        ></a
                    >
                    <a className="toc-card" href="#ch2-quality"
                        ><span className="toc-card-num">06</span
                        ><span className="toc-card-text">コード品質<br />技術的負債</span></a
                    >
                    <a className="toc-card" href="#ch3"
                        ><span className="toc-card-num">07</span
                        ><span className="toc-card-text">テスト自動化<br />ピラミッド・課題</span></a
                    >
                    <a className="toc-card" href="#ch4-ci"
                        ><span className="toc-card-num">08</span
                        ><span className="toc-card-text">CI / CT / CD<br />パイプライン設計</span></a
                    >
                    <a className="toc-card" href="#ch4-sv"
                        ><span className="toc-card-num">09</span
                        ><span className="toc-card-text"
                            >サービス仮想化<br />スタブ・モック・SV</span
                        ></a
                    >
                    <a className="toc-card" href="#exam"
                        ><span className="toc-card-num">10</span
                        ><span className="toc-card-text">試験対策<br />サンプル問題</span></a
                    >
                </div>
            </div>
        </section>

        {/* CHAPTER 1: REQUIREMENTS ENGINEERING */}
        <section id="ch1">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">CH.1</span>
                    <h2 className="chapter-title">
                        要件エンジニアリング <span className="k-level">K2-K4</span>
                    </h2>
                </div>

                <p>
                    アジャイル開発では「ユーザーストーリー」が要件の中心です。しかし曖昧なストーリーはテスト不可能な要件となり、スプリント終盤で大量の不明点が発覚します。ATTとして、<strong>テスト可能な要件を開発前に定義する</strong>スキルが求められます。
                </p>

                <h3 className="section-title">1.1 ユーザーストーリーの構造</h3>

                <div className="def-box">
                    <div className="def-term">ユーザーストーリーの基本形式</div>
                    <div className="def-text">
                        <strong>As a</strong> [役割/ユーザータイプ]<br />
                        <strong>I want to</strong> [行動・機能]<br />
                        <strong>So that</strong> [得られるビジネス価値]
                    </div>
                </div>

                <div className="code-block" data-lang="USER STORY EXAMPLE">
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-cyan\">As a</span> registered customer\n<span class=\"code-green\">I want to</span> add items to my shopping cart\n<span class=\"code-amber\">So that</span> I can purchase multiple items at once\n\n<span class=\"code-comment\">// 日本語版</span>\n<span class=\"code-cyan\">登録済みユーザーとして、</span>\n<span class=\"code-green\">ショッピングカートに商品を追加したい</span>\n<span class=\"code-amber\">複数の商品を一度に購入できるようにするため</span>\n\n<span class=\"code-comment\">// エピック（Epic）とは — 複数ストーリーに分割できる大きな機能</span>\nエピック「ユーザー管理」\n├── 「登録ユーザーとして、メールでサインアップしたい」\n├── 「登録ユーザーとして、ソーシャルログインしたい」\n└── 「管理者として、ユーザーを無効化したい」" }} />
                </div>

                <h3 className="section-title">
                    1.2 INVEST 基準 — 良いユーザーストーリーの条件
                    <span className="k-level">K2 頻出</span>
                </h3>

                <div className="arch-layers">
                    <div className="arch-layer cyan">
                        <div className="arch-label">I — Independent</div>
                        <div className="arch-desc">
                            他のストーリーへの依存が最小限。単独でスプリントに含められる。<br />✅
                            「ユーザーはGoogleでログインできる」　❌
                            「ユーザーはFBでもログインできる（Google実装後に）」
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-label">N — Negotiable</div>
                        <div className="arch-desc">
                            詳細は開発者・テスター・POで交渉可能。実装方法はチームで議論できる余地がある。
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-label">V — Valuable</div>
                        <div className="arch-desc">
                            ビジネスまたはユーザーに明確な価値がある。<br />❌
                            「DBをPostgreSQLに移行する」（技術的実装のみ）　✅
                            「検索結果を3秒以内に受け取れる」
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-label">E — Estimable</div>
                        <div className="arch-desc">
                            チームがストーリーポイントを付けられる程度に明確に記述されている。
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-label">S — Small</div>
                        <div className="arch-desc">
                            1〜2スプリントで完了できるサイズ。大きすぎるストーリーはエピックに分割する。
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-label">T — Testable ⭐</div>
                        <div className="arch-desc">
                            ATTにとって最重要！受入基準が明確に定義でき、合格/不合格を判定できる。<br />❌
                            「システムはユーザーフレンドリーであること」　✅
                            「チェックアウトは4ステップ以下で完了できること」
                        </div>
                    </div>
                </div>

                <h3 className="section-title">1.3 受入基準の特定と引き出し技法</h3>

                <div className="callout info">
                    <span className="callout-icon">💡</span>
                    <div className="callout-body">
                        <strong>受入基準（Acceptance Criteria）とは？</strong>
                        ユーザーストーリーが「完了」したと判断するための具体的な条件。テストケース設計の直接的な基礎となる。Yes/No
                        で判定できることが必須。
                    </div>
                </div>

                <div className="code-block" data-lang="GHERKIN — ACCEPTANCE CRITERIA">
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\"># 形式1：Gherkin（BDD / Given-When-Then）</span>\n<span class=\"code-keyword\">Feature:</span> <span class=\"code-white\">ユーザー認証</span>\n\n  <span class=\"code-keyword\">Scenario:</span> <span class=\"code-white\">有効な認証情報でのログイン</span>\n    <span class=\"code-cyan\">Given</span> <span class=\"code-white\">ユーザーが登録されている</span>\n    <span class=\"code-green\">When</span>  <span class=\"code-white\">有効なメールアドレスとパスワードを入力する</span>\n    <span class=\"code-amber\">Then</span>  <span class=\"code-white\">ホーム画面にリダイレクトされる</span>\n    <span class=\"code-amber\">And</span>   <span class=\"code-white\">「ようこそ [ユーザー名]」が表示される</span>\n\n  <span class=\"code-keyword\">Scenario:</span> <span class=\"code-white\">無効なパスワードでのログイン失敗</span>\n    <span class=\"code-cyan\">Given</span> <span class=\"code-white\">ユーザーが登録されている</span>\n    <span class=\"code-green\">When</span>  <span class=\"code-white\">正しいメールアドレスと誤ったパスワードを入力する</span>\n    <span class=\"code-amber\">Then</span>  <span class=\"code-white\">「パスワードが正しくありません」エラーが表示される</span>\n    <span class=\"code-amber\">And</span>   <span class=\"code-white\">ホームページにリダイレクトされない</span>" }} />
                </div>

                <h3 className="section-title">受入基準の引き出し技法</h3>
                <div className="arch-layers">
                    <div className="arch-layer cyan">
                        <div className="arch-label">ブレインストーミング</div>
                        <div className="arch-desc">
                            チーム全員でWhat-ifシナリオを発想。「もし空のパスワードを入力したら？」「メールが未検証の場合は？」
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-label">インタビュー</div>
                        <div className="arch-desc">
                            PO・BA・エンドユーザーへの開放型質問。「このログイン機能で最も重要なことは何ですか？」
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-label">3 Amigos</div>
                        <div className="arch-desc">
                            開発者・テスター・POの3者で受入基準を議論。開発者「どう実装するか」、テスター「どうテストするか」、PO「何を達成したいか」
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-label">Specification by Example</div>
                        <div className="arch-desc">
                            抽象的な要件を具体的な例で仕様化。「割引は正しく計算される」→「100円×10%OFFで90円になること」
                        </div>
                    </div>
                </div>

                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-advanced-level-agile-technical-tester-ctal-att/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">公式</span>
                        <div className="ref-info">
                            <span className="ref-title">ISTQB CTAL-ATT 公式認定ページ</span
                            ><span className="ref-url">istqb.org/certifications/…ctal-att/</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://cucumber.io/docs/gherkin/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">BDD</span>
                        <div className="ref-info">
                            <span className="ref-title">Cucumber Gherkin 公式ドキュメント</span
                            ><span className="ref-url">cucumber.io/docs/gherkin/</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        {/* CHAPTER 2: TDD */}
        <section id="ch2-tdd">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num green">CH.2</span>
                    <h2 className="chapter-title">
                        TDD — テスト駆動開発 <span className="k-level">K3</span>
                    </h2>
                </div>

                <div className="def-box">
                    <div className="def-term">TDD（Test-Driven Development）</div>
                    <div className="def-text">
                        「まずテストを書き、そのテストを通るコードを書く」開発手法。Kent Beck が
                        Extreme
                        Programming（XP）の一環として普及させた。コード品質と設計の改善を主目的とし、主にユニットレベルで適用される。
                    </div>
                </div>

                <h3 className="section-title">
                    Red-Green-Refactor サイクル <span className="k-level">K2 最頻出</span>
                </h3>

                <div className="arch-layers">
                    <div className="arch-layer red">
                        <div className="arch-label">🔴 RED</div>
                        <div className="arch-desc">
                            まず<strong>失敗するテスト</strong>を書く。まだ実装コードが存在しないため必ず失敗する。テストを書くことで「何を実装すべきか」が明確になる。
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-label">🟢 GREEN</div>
                        <div className="arch-desc">
                            テストが通る<strong>最小限のコード</strong>を書く。クリーンでなくてよい。「動けばOK」の状態を作ることに集中する。
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-label">🔵 REFACTOR</div>
                        <div className="arch-desc">
                            テストが引き続き通ることを確認しながら<strong>コードを整理</strong>する。重複を排除し、可読性を向上させる。このサイクルを繰り返す。
                        </div>
                    </div>
                </div>

                <h3 className="section-title">
                    FIRST 原則 — 良いユニットテストの5条件 <span className="k-level">K2 最頻出</span>
                </h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>文字</th>
                                <th>原則</th>
                                <th>意味</th>
                                <th>違反例 ❌</th>
                                <th>良い例 ✅</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong
                                        style={{color: "var(--neon-cyan)", fontFamily: "var(--font-mono)"}}
                                        >F</strong
                                    >
                                </td>
                                <td>Fast</td>
                                <td>ミリ秒で完了</td>
                                <td>外部APIを実際に呼ぶテスト</td>
                                <td>モックAPIを使うテスト</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong
                                        style={{color: "var(--neon-cyan)", fontFamily: "var(--font-mono)"}}
                                        >I</strong
                                    >
                                </td>
                                <td>Independent</td>
                                <td>実行順序に依存しない</td>
                                <td>テストAのデータをテストBが使う</td>
                                <td>各テストが独立してデータを準備</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong
                                        style={{color: "var(--neon-cyan)", fontFamily: "var(--font-mono)"}}
                                        >R</strong
                                    >
                                </td>
                                <td>Repeatable</td>
                                <td>何度実行しても同じ結果</td>
                                <td>現在時刻に依存するテスト</td>
                                <td>時刻をモックして固定</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong
                                        style={{color: "var(--neon-cyan)", fontFamily: "var(--font-mono)"}}
                                        >S</strong
                                    >
                                </td>
                                <td>Self-Validating</td>
                                <td>人間の判断不要</td>
                                <td>ログを目視確認してOKと判定</td>
                                <td>assert文で自動的に合否判定</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong
                                        style={{color: "var(--neon-cyan)", fontFamily: "var(--font-mono)"}}
                                        >T</strong
                                    >
                                </td>
                                <td>Timely</td>
                                <td>本番コード直前に書く</td>
                                <td>コード完成後にテストを書く</td>
                                <td>Red-Green-Refactorに従う</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="section-title">TDDの実践例（Python / pytest）</h3>

                <div className="compare-grid">
                    <div className="compare-box bad">
                        <div className="compare-header">❌ 従来アプローチ（コードファースト）</div>
                        <div className="code-block" data-lang="ANTI-PATTERN">
                                                            <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\"># ❌ 実装コードを先に書く</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">class</span> <span class=\"code-cyan\">Calculator</span>:" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-keyword\">def</span> <span class=\"code-green\">add</span>(<span class=\"code-white\">self, a, b</span>):" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "        <span class=\"code-keyword\">return</span> <span class=\"code-white\">a + b</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\"># 後からテストを書く...</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\"># テストが設計を改善しない</span>" }} />
                        </div>
                    </div>
                    <div className="compare-box good">
                        <div className="compare-header">✅ TDDアプローチ（テストファースト）</div>
                        <div className="code-block" data-lang="TDD PATTERN">
                                                            <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\"># ✅ Step 1: RED — 失敗するテストを書く</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">import</span> <span class=\"code-white\">pytest</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">from</span> <span class=\"code-white\">calculator</span> <span class=\"code-keyword\">import</span> <span class=\"code-white\">Calculator</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">def</span> <span class=\"code-green\">test_add_two_positive_numbers</span>():" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">calc = Calculator()  </span><span class=\"code-comment\"># まだ存在しない！</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-keyword\">assert</span> <span class=\"code-white\">calc.add(3, 5) == 8</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">def</span> <span class=\"code-green\">test_divide_by_zero_raises</span>():" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">calc = Calculator()</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-keyword\">with</span> <span class=\"code-white\">pytest.raises(ValueError):</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "        <span class=\"code-white\">calc.divide(10, 0)</span>" }} />
                        </div>
                    </div>
                </div>

                <div className="code-block" data-lang="PYTHON — TDD STEP 2: GREEN">
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\"># ✅ Step 2: GREEN — 最小限の実装（汚くてOK）</span>\n<span class=\"code-keyword\">class</span> <span class=\"code-cyan\">Calculator</span>:\n    <span class=\"code-keyword\">def</span> <span class=\"code-green\">add</span>(<span class=\"code-white\">self, a, b</span>):\n        <span class=\"code-keyword\">return</span> <span class=\"code-white\">a + b</span>\n\n    <span class=\"code-keyword\">def</span> <span class=\"code-green\">divide</span>(<span class=\"code-white\">self, a, b</span>):\n        <span class=\"code-keyword\">if</span> <span class=\"code-white\">b == 0:</span>\n            <span class=\"code-keyword\">raise</span> <span class=\"code-red\">ValueError</span>(<span class=\"code-string\">\"Cannot divide by zero\"</span>)\n        <span class=\"code-keyword\">return</span> <span class=\"code-white\">a / b</span>\n\n<span class=\"code-comment\"># $ pytest -v</span>\n<span class=\"code-comment\"># test_add_two_positive_numbers PASSED ✅</span>\n<span class=\"code-comment\"># test_divide_by_zero_raises    PASSED ✅</span>" }} />
                </div>

                <div className="code-block" data-lang="PYTHON — TDD STEP 3: REFACTOR">
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\"># ✅ Step 3: REFACTOR — 型ヒント・バリデーション追加（テストは引き続き通る）</span>\n<span class=\"code-keyword\">from</span> <span class=\"code-white\">typing</span> <span class=\"code-keyword\">import</span> <span class=\"code-white\">Union</span>\n\n<span class=\"code-white\">Number = Union[int, float]</span>\n\n<span class=\"code-keyword\">class</span> <span class=\"code-cyan\">Calculator</span>:\n    <span class=\"code-string\">\"\"\"基本的な算術演算を提供するクラス\"\"\"</span>\n\n    <span class=\"code-keyword\">def</span> <span class=\"code-green\">_validate</span>(<span class=\"code-white\">self, *args: Number</span>) <span class=\"code-keyword\">-&gt;</span> <span class=\"code-white\">None:</span>\n        <span class=\"code-keyword\">for</span> <span class=\"code-white\">arg</span> <span class=\"code-keyword\">in</span> <span class=\"code-white\">args:</span>\n            <span class=\"code-keyword\">if not</span> <span class=\"code-white\">isinstance(arg, (int, float)):</span>\n                <span class=\"code-keyword\">raise</span> <span class=\"code-red\">TypeError</span>(<span class=\"code-string\">f\"Expected number, got {type(arg).__name__}\"</span>)\n\n    <span class=\"code-keyword\">def</span> <span class=\"code-green\">add</span>(<span class=\"code-white\">self, a: Number, b: Number</span>) <span class=\"code-keyword\">-&gt;</span> <span class=\"code-white\">Number:</span>\n        <span class=\"code-white\">self._validate(a, b)</span>\n        <span class=\"code-keyword\">return</span> <span class=\"code-white\">a + b</span>\n\n    <span class=\"code-keyword\">def</span> <span class=\"code-green\">divide</span>(<span class=\"code-white\">self, a: Number, b: Number</span>) <span class=\"code-keyword\">-&gt;</span> <span class=\"code-white\">float:</span>\n        <span class=\"code-white\">self._validate(a, b)</span>\n        <span class=\"code-keyword\">if</span> <span class=\"code-white\">b == 0:</span>\n            <span class=\"code-keyword\">raise</span> <span class=\"code-red\">ValueError</span>(<span class=\"code-string\">\"Cannot divide by zero\"</span>)\n        <span class=\"code-keyword\">return</span> <span class=\"code-white\">a / b</span>" }} />
                </div>

                <div className="callout warning">
                    <span className="callout-icon">⚠️</span>
                    <div className="callout-body">
                        <strong>TDD でよくある誤解</strong>
                        「コードを書いた後にテストを書けばTDD」は間違いです。TDDの本質は<strong>テストファースト</strong>にあります。RED（失敗するテスト）から始めることで、設計が改善される効果があります。
                    </div>
                </div>
            </div>
        </section>

        {/* BDD */}
        <section id="ch2-bdd">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num green">CH.2</span>
                    <h2 className="chapter-title">
                        BDD — 振る舞い駆動開発 <span className="k-level">K3</span>
                    </h2>
                </div>

                <div className="def-box">
                    <div className="def-term">BDD（Behavior-Driven Development）</div>
                    <div className="def-text">
                        「システムの振る舞いを共通言語（Gherkin）で記述し、ビジネスサイドと開発チームで共有する」手法。Dan
                        Northが2006年にTDDを拡張して提唱。ビジネス要件とテストの橋渡しとなる「生きたドキュメント」を作ることが目的。
                    </div>
                </div>

                <h3 className="section-title">
                    TDD / BDD / ATDD の比較 <span className="k-level">K2 最頻出</span>
                </h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>観点</th>
                                <th>TDD</th>
                                <th>BDD</th>
                                <th>ATDD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>主目的</td>
                                <td>コード品質向上</td>
                                <td>振る舞いの仕様化</td>
                                <td>受入基準の事前定義</td>
                            </tr>
                            <tr>
                                <td>主体</td>
                                <td>開発者中心</td>
                                <td>チーム全員</td>
                                <td>ビジネス/テスト中心</td>
                            </tr>
                            <tr>
                                <td>レベル</td>
                                <td>ユニットテスト</td>
                                <td>受入/機能テスト</td>
                                <td>システム受入テスト</td>
                            </tr>
                            <tr>
                                <td>言語</td>
                                <td>コード（テストコード）</td>
                                <td>Gherkin（自然言語）</td>
                                <td>受入テストファースト</td>
                            </tr>
                            <tr>
                                <td>サイクル</td>
                                <td>Red-Green-Refactor</td>
                                <td>Gherkin/Cucumber</td>
                                <td>3 Amigos → 受入TC → 実装</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="section-title">Gherkin 記法 — キーワード一覧</h3>

                <div className="tag-list">
                    <span className="tag cyan">Feature</span>
                    <span className="tag cyan">Background</span>
                    <span className="tag cyan">Scenario</span>
                    <span className="tag cyan">Scenario Outline</span>
                    <span className="tag green">Given</span>
                    <span className="tag green">When</span>
                    <span className="tag amber">Then</span>
                    <span className="tag amber">And</span>
                    <span className="tag amber">But</span>
                    <span className="tag purple">Examples</span>
                </div>

                <div className="code-block" data-lang="GHERKIN">
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">Feature:</span> <span class=\"code-white\">ショッピングカート機能</span>\n  <span class=\"code-comment\">登録ユーザーが商品をカートに追加し、チェックアウトできる</span>\n\n  <span class=\"code-keyword\">Background:</span>\n    <span class=\"code-cyan\">Given</span> <span class=\"code-white\">ユーザーが \"user@example.com\" で登録されている</span>\n    <span class=\"code-cyan\">And</span>   <span class=\"code-white\">ユーザーがログインしている</span>\n\n  <span class=\"code-comment\"># 正常系シナリオ</span>\n  <span class=\"code-keyword\">Scenario:</span> <span class=\"code-white\">カートに新しい商品を追加する</span>\n    <span class=\"code-cyan\">Given</span> <span class=\"code-white\">カートが空である</span>\n    <span class=\"code-green\">When</span>  <span class=\"code-white\">ユーザーが \"ノートPC\" を1台カートに追加する</span>\n    <span class=\"code-amber\">Then</span>  <span class=\"code-white\">カートに1件の商品がある</span>\n    <span class=\"code-amber\">And</span>   <span class=\"code-white\">カートの合計金額は 150000円 である</span>\n\n  <span class=\"code-comment\"># データ駆動シナリオ（Scenario Outline）</span>\n  <span class=\"code-keyword\">Scenario Outline:</span> <span class=\"code-white\">数量割引の適用</span>\n    <span class=\"code-cyan\">Given</span> <span class=\"code-white\">&lt;商品名&gt; の単価は &lt;単価&gt;円 である</span>\n    <span class=\"code-green\">When</span>  <span class=\"code-white\">&lt;数量&gt;個 カートに追加する</span>\n    <span class=\"code-amber\">Then</span>  <span class=\"code-white\">カートの合計は &lt;合計&gt;円 である</span>\n\n    <span class=\"code-keyword\">Examples:</span>\n      <span class=\"code-white\">| 商品名  | 単価  | 数量 | 合計  |</span>\n      <span class=\"code-white\">| りんご  | 100   |  5   |  500  |</span>\n      <span class=\"code-white\">| りんご  | 100   | 10   |  900  |</span>\n      <span class=\"code-white\">| りんご  | 100   | 20   | 1600  |</span>" }} />
                </div>

                <h3 className="section-title">
                    BDD シナリオのガイドライン <span className="k-level">K2 頻出</span>
                </h3>

                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-header">✅ DO — すべきこと</div>
                        <p>
                            ✅ ビジネスの観点で書く（実装詳細は書かない）<br /><code
                                style={{color: "var(--neon-green)", fontSize: "0.78rem"}}
                                >When ユーザーが「購入」ボタンをクリックする</code
                            >
                        </p>
                        <p>
                            ✅ 1ステップに1つのことだけ書く<br /><code
                                style={{color: "var(--neon-green)", fontSize: "0.78rem"}}
                                >Then 注文確認メールが送信される</code
                            >
                        </p>
                        <p>
                            ✅ 宣言的（Declarative）に書く<br /><code
                                style={{color: "var(--neon-green)", fontSize: "0.78rem"}}
                                >Given ユーザーがカートページにいる</code
                            >
                        </p>
                        <p>✅ ステップを再利用可能にする</p>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-header">❌ DON'T — 避けること</div>
                        <p>
                            ❌ UI固有の詳細を書く<br /><code
                                style={{color: "var(--neon-red)", fontSize: "0.78rem"}}
                                >When POST /api/v1/orders がコールされる</code
                            >
                        </p>
                        <p>
                            ❌ 1ステップに複数アクションを書く<br /><code
                                style={{color: "var(--neon-red)", fontSize: "0.78rem"}}
                                >Then メール送信・在庫更新・請求書発行</code
                            >
                        </p>
                        <p>
                            ❌ UI操作の詳細を手順で記述する<br /><code
                                style={{color: "var(--neon-red)", fontSize: "0.78rem"}}
                                >Given ユーザーがサイトに行き、ログインし...</code
                            >
                        </p>
                        <p>❌ シナリオを7ステップ以上にする</p>
                    </div>
                </div>

                <h3 className="section-title">BDD の実装（Python / pytest-bdd）</h3>

                <div className="code-block" data-lang="PYTHON — PYTEST-BDD">
                                                    <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\"># step_definitions/cart_steps.py</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">from</span> <span class=\"code-white\">pytest_bdd</span> <span class=\"code-keyword\">import</span> <span class=\"code-white\">given, when, then, parsers</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-cyan\">@given(</span><span class=\"code-string\">\"カートが空である\"</span><span class=\"code-cyan\">)</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">def</span> <span class=\"code-green\">empty_cart</span>(<span class=\"code-white\">cart_context</span>):" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">cart_context.cart = CartService.create_empty_cart()</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-cyan\">@when(</span><span class=\"code-white\">parsers.parse(</span><span class=\"code-string\">'ユーザーが \"{product_name}\" を{quantity:d}台カートに追加する'</span><span class=\"code-white\">)</span><span class=\"code-cyan\">)</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">def</span> <span class=\"code-green\">add_to_cart</span>(<span class=\"code-white\">cart_context, product_name: str, quantity: int</span>):" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">product = ProductService.find_by_name(product_name)</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">cart_context.response = CartService.add_item(</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "        <span class=\"code-white\">cart_id=cart_context.cart.id,</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "        <span class=\"code-white\">product_id=product.id,</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "        <span class=\"code-white\">quantity=quantity</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">)</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-cyan\">@then(</span><span class=\"code-white\">parsers.parse(</span><span class=\"code-string\">\"カートに{count:d}件の商品がある\"</span><span class=\"code-white\">)</span><span class=\"code-cyan\">)</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">def</span> <span class=\"code-green\">verify_cart_count</span>(<span class=\"code-white\">cart_context, count: int</span>):" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">cart = CartService.get_cart(cart_context.cart.id)</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-keyword\">assert</span> <span class=\"code-white\">len(cart.items) == count</span>" }} />
                </div>
            </div>
        </section>

        {/* ATDD */}
        <section id="ch2-atdd">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num green">CH.2</span>
                    <h2 className="chapter-title">
                        ATDD — 受入テスト駆動開発 <span className="k-level">K3</span>
                    </h2>
                </div>

                <div className="def-box">
                    <div className="def-term">ATDD（Acceptance Test-Driven Development）</div>
                    <div className="def-text">
                        ユーザーストーリーの受入基準を具体的なテストとして<strong>開発開始前に</strong>定義する手法。TDD・BDDと密接に関連するが焦点が異なる。ビジネス/テスト中心でシステム受入レベルに適用される。
                    </div>
                </div>

                <h3 className="section-title">
                    3 Amigos — ATDDの心臓部 <span className="k-level">K2 頻出</span>
                </h3>

                <div className="trend-grid">
                    <div className="trend-card">
                        <div className="trend-icon">👤</div>
                        <div className="trend-title">Product Owner</div>
                        <div className="trend-desc">
                            「何が必要か」を定義する。ビジネス価値・受入基準の源泉となる。
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-icon">👨‍💻</div>
                        <div className="trend-title">Developer</div>
                        <div className="trend-desc">
                            「どのように作るか」を提案する。技術的制約・実装コストを共有する。
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-icon">🧪</div>
                        <div className="trend-title">Tester（ATT）</div>
                        <div className="trend-desc">
                            「どのようにテストするか」を設計する。曖昧な要件を発見し、テスト可能な基準を定義する。
                        </div>
                    </div>
                </div>

                <h3 className="section-title">ATDDのワークフロー</h3>
                <ol className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div className="step-content">
                            <strong>受入テストを先に書く</strong> —
                            ユーザーストーリーの「完了条件」を Gherkin
                            シナリオとして定義する（開発前）
                        </div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div className="step-content">
                            <strong>受入テストを開発の目標にする</strong> —
                            「このテストが全て通れば完了」という合意を形成する
                        </div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div className="step-content">
                            <strong>TDD でコードを書く</strong> — 開発者が Red-Green-Refactor
                            サイクルで受入テストをパスさせるコードを実装する
                        </div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div className="step-content">
                            <strong>受入テストが全て通ったら「完了（Done）」</strong> — CI/CD
                            パイプラインで自動的に確認される
                        </div>
                    </li>
                </ol>

                <div className="code-block" data-lang="GHERKIN — ATDD ACCEPTANCE TEST">
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">Feature:</span> <span class=\"code-white\">注文確認メール送信</span>\n\n  <span class=\"code-comment\"># ← 開発開始前に3 Amigos で合意したシナリオ</span>\n\n  <span class=\"code-keyword\">Scenario:</span> <span class=\"code-white\">注文完了時に確認メールが送信される</span>\n    <span class=\"code-cyan\">Given</span> <span class=\"code-white\">ユーザー \"customer@example.com\" が存在する</span>\n    <span class=\"code-cyan\">And</span>   <span class=\"code-white\">商品 \"ノートPC\" の在庫が十分ある</span>\n    <span class=\"code-green\">When</span>  <span class=\"code-white\">ユーザーが注文を完了する</span>\n    <span class=\"code-amber\">Then</span>  <span class=\"code-white\">\"customer@example.com\" に確認メールが送信される</span>\n    <span class=\"code-amber\">And</span>   <span class=\"code-white\">メール件名は \"ご注文を承りました\" である</span>\n    <span class=\"code-amber\">And</span>   <span class=\"code-white\">メールには注文番号が含まれている</span>\n\n  <span class=\"code-keyword\">Scenario:</span> <span class=\"code-white\">メール送信失敗時にリトライされる</span>\n    <span class=\"code-cyan\">Given</span> <span class=\"code-white\">メールサーバーが一時的に使用不可である</span>\n    <span class=\"code-green\">When</span>  <span class=\"code-white\">ユーザーが注文を完了する</span>\n    <span class=\"code-amber\">Then</span>  <span class=\"code-white\">システムは5分後にメール送信を再試行する</span>\n    <span class=\"code-amber\">And</span>   <span class=\"code-white\">3回リトライしても失敗した場合、管理者に通知される</span>" }} />
                </div>

                <h3 className="section-title">
                    バックログへのATDD導入分析 <span className="k-level">K4</span>
                </h3>

                <div className="callout warning">
                    <span className="callout-icon">⚠️</span>
                    <div className="callout-body">
                        <strong>よくあるバックログの問題パターン</strong>
                        「ログイン機能を実装する」→ 受入基準がなくテスト不可能。<br />「DBをPostgreSQLに移行する」→
                        ビジネス価値が不明確なタスクが混入。<br />「ユーザー管理機能を実装する」→
                        1スプリントで完了不可能なエピックがそのまま残っている。
                    </div>
                </div>

                <ol className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div className="step-content">
                            既存バックログアイテムを見直し、<strong>受入基準のないものを特定</strong>する
                        </div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div className="step-content">
                            PO・Dev・QA の<strong>3 Amigos ミーティング</strong
                            >を定期開催（スプリント開始前）
                        </div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div className="step-content">
                            各スプリント開始前に受入テストを<strong>Gherkin で事前定義</strong>する
                        </div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div className="step-content">
                            Definition of Done
                            に<strong>「受入テストが自動化されている」</strong>を追加する
                        </div>
                    </li>
                    <li>
                        <span className="step-num">5</span>
                        <div className="step-content">
                            受入テストを<strong>CI/CD パイプラインに組み込み</strong
                            >、プッシュごとに自動実行する
                        </div>
                    </li>
                </ol>
            </div>
        </section>

        {/* Experience-Based Testing */}
        <section id="ch2-exp">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num green">CH.2</span>
                    <h2 className="chapter-title">
                        経験ベーステスト &amp; テストチャーター <span className="k-level">K3-K4</span>
                    </h2>
                </div>

                <h3 className="section-title">アジャイルにおけるテストの4象限</h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>象限</th>
                                <th>視点</th>
                                <th>内容</th>
                                <th>技術</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Q1</strong></td>
                                <td>技術 × チームサポート</td>
                                <td>ユニットテスト、コンポーネントテスト</td>
                                <td>TDD、xUnit、モック</td>
                            </tr>
                            <tr>
                                <td><strong>Q2</strong></td>
                                <td>ビジネス × チームサポート</td>
                                <td>受入テスト、BDDシナリオ、プロトタイプ</td>
                                <td>BDD、ATDD、Gherkin</td>
                            </tr>
                            <tr>
                                <td><strong>Q3</strong></td>
                                <td>ビジネス × 製品批評</td>
                                <td>探索的テスト、ユーザビリティテスト、性能テスト</td>
                                <td>テストチャーター、セッションベーステスト</td>
                            </tr>
                            <tr>
                                <td><strong>Q4</strong></td>
                                <td>技術 × 製品批評</td>
                                <td>性能テスト、セキュリティテスト、静的解析</td>
                                <td>OWASP ZAP、JMeter、SonarQube</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="section-title">テストチャーター（Test Charter）</h3>

                <div className="def-box">
                    <div className="def-term">テストチャーターのテンプレート</div>
                    <div className="def-text">
                        <strong>EXPLORE</strong> [テスト対象]<br />
                        <strong>TO DISCOVER</strong> [何を発見したいか]<br />
                        <strong>USING</strong> [使用するリソース・ツール・技法・時間]
                    </div>
                </div>

                <div className="trend-grid">
                    <div className="trend-card">
                        <div className="trend-icon">🔐</div>
                        <div className="trend-title">Charter 1: セキュリティ探索</div>
                        <div className="trend-desc">
                            <strong>EXPLORE</strong> ログイン画面のパスワード入力フィールド<br />
                            <strong>TO DISCOVER</strong>
                            セキュリティ上の脆弱性（ブルートフォース、SQLインジェクション等）<br />
                            <strong>USING</strong> OWASP ZAP、手動ペネトレーションテスト、60分間
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-icon">🔄</div>
                        <div className="trend-title">Charter 2: 同時実行テスト</div>
                        <div className="trend-desc">
                            <strong>EXPLORE</strong>
                            複数ユーザーが同じ商品をカートに追加する動作<br />
                            <strong>TO DISCOVER</strong>
                            在庫管理の競合状態・データ整合性の問題<br />
                            <strong>USING</strong> 2つのブラウザタブ + Playwright並列実行、45分間
                        </div>
                    </div>
                    <div className="trend-card">
                        <div className="trend-icon">📱</div>
                        <div className="trend-title">Charter 3: モバイル境界値</div>
                        <div className="trend-desc">
                            <strong>EXPLORE</strong> モバイルブラウザでのフォーム入力<br />
                            <strong>TO DISCOVER</strong>
                            入力制限・特殊文字・絵文字・長い文字列の処理<br />
                            <strong>USING</strong> Android Chrome / iOS Safari、実機、30分間
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Code Quality */}
        <section id="ch2-quality">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num amber">CH.2</span>
                    <h2 className="chapter-title">
                        コード品質 &amp; 技術的負債 <span className="k-level">K2-K3</span>
                    </h2>
                </div>

                <h3 className="section-title">テストコードのリファクタリング</h3>

                <div className="callout danger">
                    <span className="callout-icon">🚨</span>
                    <div className="callout-body">
                        <strong
                            >テストコードの技術的負債はアジャイルチームで最も見落とされやすい</strong
                        >
                        テストが遅くなる（CIパイプラインの遅延）、テストの意図が不明確（メンテナンスコスト増大）、フレイキーテスト（不安定なテスト）の増加につながります。
                    </div>
                </div>

                <div className="compare-grid">
                    <div className="compare-box bad">
                        <div className="compare-header">❌ リファクタリング前</div>
                        <div className="code-block" data-lang="ANTI-PATTERN">
                                                            <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">def</span> <span class=\"code-red\">test1</span>():" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">d = webdriver.Chrome()</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">d.get(</span><span class=\"code-string\">\"https://example.com/login\"</span><span class=\"code-white\">)</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">d.find_element(</span><span class=\"code-string\">\"id\"</span><span class=\"code-white\">, </span><span class=\"code-string\">\"email\"</span><span class=\"code-white\">).send_keys(</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "      <span class=\"code-string\">\"test@example.com\"</span><span class=\"code-white\">)</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">time.sleep(3)  </span><span class=\"code-red\"># ← 固定sleep！</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-keyword\">assert</span> <span class=\"code-string\">\"Dashboard\"</span> <span class=\"code-keyword\">in</span> <span class=\"code-white\">d.title</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">d.quit()</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">def</span> <span class=\"code-red\">test2</span>():" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">d = webdriver.Chrome()</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-red\"># ← 重複セットアップ！</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">time.sleep(3)  </span><span class=\"code-red\"># ← 固定sleep！</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-keyword\">assert</span> <span class=\"code-string\">\"Admin\"</span> <span class=\"code-keyword\">in</span> <span class=\"code-white\">d.title</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">d.quit()</span>" }} />
                        </div>
                    </div>
                    <div className="compare-box good">
                        <div className="compare-header">✅ リファクタリング後</div>
                        <div className="code-block" data-lang="BEST PRACTICE">
                                                            <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-cyan\">@pytest.fixture</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">def</span> <span class=\"code-green\">driver</span>():" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">d = webdriver.Chrome()</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-keyword\">yield</span> <span class=\"code-white\">d</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">d.quit()  </span><span class=\"code-comment\"># 確実なクリーンアップ</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">class</span> <span class=\"code-cyan\">LoginPage</span>:" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-keyword\">def</span> <span class=\"code-green\">login</span>(<span class=\"code-white\">self, email, password</span>):" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "        <span class=\"code-comment\"># 条件ベース待機（固定sleep排除）</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "        <span class=\"code-white\">WebDriverWait(self._driver, 10).until(</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "            <span class=\"code-white\">EC.url_changes(</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "              <span class=\"code-string\">\"https://example.com/login\"</span><span class=\"code-white\">)</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "        <span class=\"code-white\">)</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\"># 命名規則: test_[対象]_[条件]_[期待動作]</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">def</span> <span class=\"code-green\">test_user_login_redirect_to_dashboard</span>(" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "  <span class=\"code-white\">login_page</span>):" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-white\">login_page.login(</span><span class=\"code-string\">\"test@example.com\"</span><span class=\"code-white\">, </span><span class=\"code-string\">\"pass\"</span><span class=\"code-white\">)</span>" }} />
                                <div className="code-line" dangerouslySetInnerHTML={{ __html: "    <span class=\"code-keyword\">assert</span> <span class=\"code-string\">\"dashboard\"</span> <span class=\"code-keyword\">in</span> <span class=\"code-white\">login_page._driver.current_url</span>" }} />
                        </div>
                    </div>
                </div>

                <h3 className="section-title">技術的負債の2種類</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-label">意図的な負債</div>
                        <div className="arch-desc">
                            計画的な判断（問題なし）。「今は手動テストでいく。次のスプリントで自動化する」
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-label">非意図的な負債</div>
                        <div className="arch-desc">
                            無意識の蓄積（問題あり）。テストコードなしのコミット、コピペコード、TODOコメントの放置。
                        </div>
                    </div>
                </div>

                <h3 className="section-title">リファクタリング タスクリスト</h3>
                <div className="alert cyan">
                    □ 重複したテストデータのセットアップをフィクスチャに抽出
                </div>
                <div className="alert cyan">□ 魔法の数字を名前付き定数に置き換え</div>
                <div className="alert green">□ 固定sleep()を条件ベースの待機に置き換え（最重要）</div>
                <div className="alert green">□ テスト名を「test_[状況]_[期待結果]」形式に統一</div>
                <div className="alert amber">□ 長いテストメソッドを複数の小さなテストに分割</div>
                <div className="alert amber">□ データ駆動テストでパラメータ化できる部分を統合</div>
            </div>
        </section>

        {/* CHAPTER 3: TEST AUTOMATION */}
        <section id="ch3">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num amber">CH.3</span>
                    <h2 className="chapter-title">テスト自動化 <span className="k-level">K2-K3</span></h2>
                </div>

                <h3 className="section-title">テスト自動化ピラミッド</h3>

                <div className="pyramid">
                    <div className="pyramid-level pyr-1" style={{width: "22%"}}>
                        <span style={{color: "var(--neon-red)"}}>E2E</span
                        ><small>10% — 遅い・高コスト</small>
                    </div>
                    <div className="pyramid-level pyr-2" style={{width: "48%"}}>
                        <span style={{color: "var(--neon-amber)"}}>統合テスト</span
                        ><small>20% — 中速</small>
                    </div>
                    <div className="pyramid-level pyr-3" style={{width: "78%"}}>
                        <span style={{color: "var(--neon-green)"}}>ユニットテスト</span
                        ><small>70% — 高速・低コスト</small>
                    </div>
                    <div className="pyramid-label">↑ テスト自動化ピラミッド（理想形）</div>
                </div>

                <div className="callout danger">
                    <span className="callout-icon">🍦</span>
                    <div className="callout-body">
                        <strong>アイスクリームコーン（アンチパターン）に注意</strong>
                        E2Eテストが最も多く、ユニットテストが最も少ない逆三角形の状態。テストが遅くなり、フレイキーテストが増加し、CIパイプラインが機能しなくなります。
                    </div>
                </div>

                <h3 className="section-title">データ駆動テスト vs キーワード駆動テスト</h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>技法</th>
                                <th>特徴</th>
                                <th>利点</th>
                                <th>ツール例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>データ駆動テスト</strong></td>
                                <td>
                                    同じテストロジックを異なるデータセットで実行。テストデータはCSV/DB等で管理。
                                </td>
                                <td>新ビジネスケースをデータ追加だけで対応可能</td>
                                <td>pytest parametrize、JUnit @ParameterizedTest</td>
                            </tr>
                            <tr>
                                <td><strong>キーワード駆動テスト</strong></td>
                                <td>
                                    テスト操作を「キーワード」として定義。テーブル形式でテストを記述。
                                </td>
                                <td>非エンジニア（PO・BA）もテストを読み書き可能</td>
                                <td>Robot Framework、Keyword-Driven Selenium</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="code-block" data-lang="PYTHON — DATA-DRIVEN TESTING">
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\"># データ駆動テストの実装例（pytest parametrize）</span>\n<span class=\"code-keyword\">import</span> <span class=\"code-white\">pytest</span>\n<span class=\"code-keyword\">from</span> <span class=\"code-white\">decimal</span> <span class=\"code-keyword\">import</span> <span class=\"code-white\">Decimal</span>\n\n<span class=\"code-cyan\">@pytest.mark.parametrize</span>(<span class=\"code-string\">\"price, customer_type, expected_total\"</span>, [\n    (<span class=\"code-white\">Decimal(</span><span class=\"code-string\">\"1000\"</span><span class=\"code-white\">),</span> <span class=\"code-string\">\"premium\"</span><span class=\"code-white\">, Decimal(</span><span class=\"code-string\">\"800\"</span><span class=\"code-white\">)</span>),   <span class=\"code-comment\"># 20%割引</span>\n    (<span class=\"code-white\">Decimal(</span><span class=\"code-string\">\"1000\"</span><span class=\"code-white\">),</span> <span class=\"code-string\">\"regular\"</span><span class=\"code-white\">, Decimal(</span><span class=\"code-string\">\"900\"</span><span class=\"code-white\">)</span>),   <span class=\"code-comment\"># 10%割引</span>\n    (<span class=\"code-white\">Decimal(</span><span class=\"code-string\">\"1000\"</span><span class=\"code-white\">),</span> <span class=\"code-string\">\"guest\"</span><span class=\"code-white\">,   Decimal(</span><span class=\"code-string\">\"1000\"</span><span class=\"code-white\">)</span>),  <span class=\"code-comment\"># 割引なし</span>\n])\n<span class=\"code-keyword\">def</span> <span class=\"code-green\">test_discount_calculation</span>(\n  <span class=\"code-white\">price, customer_type, expected_total</span>):\n    <span class=\"code-white\">service = DiscountService()</span>\n    <span class=\"code-white\">actual = service.apply_discount(price, customer_type)</span>\n    <span class=\"code-keyword\">assert</span> <span class=\"code-white\">actual == expected_total</span>" }} />
                </div>

                <h3 className="section-title">アジャイル特有のテスト自動化課題と対策</h3>

                <div className="arch-layers">
                    <div className="arch-layer red">
                        <div className="arch-label">課題1: スプリント速度</div>
                        <div className="arch-desc">
                            2週間スプリントで毎回新機能がリリースされ、自動化が追いつかない。<br /><strong
                                >対策：</strong
                            >
                            Definition of Done
                            に「自動テストが書かれている」を含める。TDDの精神で先にテストを書く。
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-label">課題2: UI変更によるテスト破損</div>
                        <div className="arch-desc">
                            スプリントごとにUI変更 → E2Eテストが毎回壊れる。<br /><strong
                                >対策：</strong
                            >
                            <code>data-testid</code>
                            属性を使った安定したセレクタ。POMパターンで変更箇所を1か所に集約。UIよりAPIレイヤーのテストを優先。
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-label">課題3: フレイキーテスト蓄積</div>
                        <div className="arch-desc">
                            時々失敗するテストが増えてCIの信頼性が低下する。<br /><strong
                                >対策：</strong
                            >
                            固定
                            <code>sleep()</code>
                            を条件ベースの待機に置き換える。テストの独立性を確保。フレイキーテストを特定して最優先で修正。
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-label">課題4: CI実行時間の増大</div>
                        <div className="arch-desc">
                            テストスイートが増えるとCIが遅くなりフィードバックが遅れる。<br /><strong
                                >対策：</strong
                            >
                            並列実行（pytest -n auto）。テストタグで選択的実行（@smoke /
                            @regression）。変更影響分析で関連テストのみ実行。
                        </div>
                    </div>
                </div>

                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://docs.pytest.org/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">TDD</span>
                        <div className="ref-info">
                            <span className="ref-title">pytest 公式ドキュメント</span
                            ><span className="ref-url">docs.pytest.org</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://playwright.dev/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">E2E</span>
                        <div className="ref-info">
                            <span className="ref-title">Playwright 公式ドキュメント</span
                            ><span className="ref-url">playwright.dev</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://robotframework.org/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">キーワード駆動</span>
                        <div className="ref-info">
                            <span className="ref-title">Robot Framework 公式サイト</span
                            ><span className="ref-url">robotframework.org</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        {/* CHAPTER 4: CI/CD */}
        <section id="ch4-ci">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num purple">CH.4</span>
                    <h2 className="chapter-title">CI / CT / CD <span className="k-level">K2-K3</span></h2>
                </div>

                <h3 className="section-title">
                    CI・CT・CD の定義と違い <span className="k-level">K2 最頻出</span>
                </h3>

                <div className="arch-layers">
                    <div className="arch-layer cyan">
                        <div className="arch-label">CI — 継続的インテグレーション</div>
                        <div className="arch-desc">
                            開発者が頻繁に（少なくとも1日1回）コードをメインブランチに統合し、<strong>自動ビルド・自動テストを実行</strong>するプラクティス。
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-label">CT — 継続的テスト</div>
                        <div className="arch-desc">
                            CI/CDパイプラインの<strong>全フェーズにわたってテストを継続的に実行</strong>するプラクティス。デプロイ前後を含む全段階でテストが実行される。
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-label">継続的デリバリー（Delivery）</div>
                        <div className="arch-desc">
                            本番デプロイの準備が常に整っている状態を維持。<strong>本番デプロイは「人間の承認」が必要</strong>。毎日デプロイできるが、しないこともある。
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-label">継続的デプロイメント（Deployment）</div>
                        <div className="arch-desc">
                            テストが全て通れば本番へ<strong>「自動的に」デプロイ</strong>される。人間の承認が不要。Netflix・Amazon等が採用。
                        </div>
                    </div>
                </div>

                <div className="callout warning">
                    <span className="callout-icon">⚠️</span>
                    <div className="callout-body">
                        <strong>試験頻出：Delivery と Deployment の違い</strong>
                        「Continuous Delivery = 人間の承認が必要」「Continuous Deployment =
                        自動でデプロイ」。どちらも「CD」と略されるため混同に注意。
                    </div>
                </div>

                <h3 className="section-title">CIの8つの基本原則</h3>
                <ol className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div className="step-content">単一のソースリポジトリを使用する</div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div className="step-content">ビルドを自動化する</div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div className="step-content">ビルドにテストを含める</div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div className="step-content">毎日コミットする（少なくとも）</div>
                    </li>
                    <li>
                        <span className="step-num">5</span>
                        <div className="step-content">ビルドを素早く保つ（&lt; 10分が目標）</div>
                    </li>
                    <li>
                        <span className="step-num">6</span>
                        <div className="step-content">本番環境のクローンでテストする</div>
                    </li>
                    <li>
                        <span className="step-num">7</span>
                        <div className="step-content">最新ビルドの状態を誰もが見えるようにする</div>
                    </li>
                    <li>
                        <span className="step-num">8</span>
                        <div className="step-content">壊れたビルドを即座に修正する</div>
                    </li>
                </ol>

                <h3 className="section-title">推奨 CI パイプライン構成</h3>

                <div className="code-block" data-lang="YAML — GITHUB ACTIONS CI PIPELINE">
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\"># .github/workflows/ci.yml</span>\n<span class=\"code-keyword\">name:</span> <span class=\"code-white\">CI パイプライン</span>\n\n<span class=\"code-keyword\">on:</span>\n  <span class=\"code-keyword\">push:</span>\n    <span class=\"code-keyword\">branches:</span> <span class=\"code-white\">[main, develop]</span>\n  <span class=\"code-keyword\">pull_request:</span>\n    <span class=\"code-keyword\">branches:</span> <span class=\"code-white\">[main]</span>\n\n<span class=\"code-keyword\">jobs:</span>\n  <span class=\"code-comment\"># Stage 1: ユニットテスト（&lt; 5分）</span>\n  <span class=\"code-keyword\">fast-tests:</span>\n    <span class=\"code-keyword\">runs-on:</span> <span class=\"code-white\">ubuntu-latest</span>\n    <span class=\"code-keyword\">steps:</span>\n      <span class=\"code-white\">- uses: actions/checkout@v4</span>\n      <span class=\"code-white\">- run: pip install -r requirements.txt</span>\n      <span class=\"code-keyword\">- name:</span> <span class=\"code-white\">ユニットテスト実行</span>\n        <span class=\"code-keyword\">run:</span> <span class=\"code-white\">|</span>\n          <span class=\"code-white\">pytest tests/unit/ -n auto</span>\n          <span class=\"code-white\">  --cov=src --cov-fail-under=80</span>\n\n  <span class=\"code-comment\"># Stage 2: 統合テスト（&lt; 15分）</span>\n  <span class=\"code-keyword\">integration-tests:</span>\n    <span class=\"code-keyword\">needs:</span> <span class=\"code-white\">fast-tests</span>  <span class=\"code-comment\"># ユニット成功後に実行</span>\n    <span class=\"code-keyword\">runs-on:</span> <span class=\"code-white\">ubuntu-latest</span>\n    <span class=\"code-keyword\">services:</span>\n      <span class=\"code-keyword\">postgres:</span>\n        <span class=\"code-keyword\">image:</span> <span class=\"code-white\">postgres:16</span>\n\n  <span class=\"code-comment\"># Stage 3: E2Eスモークテスト（&lt; 15分）</span>\n  <span class=\"code-keyword\">e2e-smoke:</span>\n    <span class=\"code-keyword\">needs:</span> <span class=\"code-white\">integration-tests</span>\n    <span class=\"code-keyword\">steps:</span>\n      <span class=\"code-white\">- run: npx playwright install --with-deps chromium</span>\n      <span class=\"code-keyword\">- name:</span> <span class=\"code-white\">E2Eスモーク（@smokeタグのみ）</span>\n        <span class=\"code-keyword\">run:</span> <span class=\"code-white\">npx playwright test --grep @smoke</span>\n\n  <span class=\"code-comment\"># Stage 4: デプロイ（全テスト通過後）</span>\n  <span class=\"code-keyword\">deploy-staging:</span>\n    <span class=\"code-keyword\">needs:</span> <span class=\"code-white\">e2e-smoke</span>\n    <span class=\"code-keyword\">if:</span> <span class=\"code-white\">github.ref == 'refs/heads/main'</span>" }} />
                </div>

                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://docs.github.com/en/actions"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">CI/CD</span>
                        <div className="ref-info">
                            <span className="ref-title">GitHub Actions 公式ドキュメント</span
                            ><span className="ref-url">docs.github.com/en/actions</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.gitlab.com/ee/ci/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">CI/CD</span>
                        <div className="ref-info">
                            <span className="ref-title">GitLab CI/CD 公式ドキュメント</span
                            ><span className="ref-url">docs.gitlab.com/ee/ci/</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        {/* SERVICE VIRTUALIZATION */}
        <section id="ch4-sv">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num purple">CH.4</span>
                    <h2 className="chapter-title">サービス仮想化 <span className="k-level">K2-K3</span></h2>
                </div>

                <div className="def-box">
                    <div className="def-term">サービス仮想化（Service Virtualization）</div>
                    <div className="def-text">
                        テスト対象システムが依存する外部サービス・コンポーネントを「模倣（仮想化）」することで、実際のサービスなしでテストできる技法。外部サービスが不安定・コスト高・開発中・エラー再現困難な場合に有効。
                    </div>
                </div>

                <h3 className="section-title">
                    テストダブルの種類と比較 <span className="k-level">K2 頻出</span>
                </h3>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>種類</th>
                                <th>複雑さ</th>
                                <th>状態</th>
                                <th>検証</th>
                                <th>使用場面</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Stub（スタブ）</strong></td>
                                <td>低</td>
                                <td>なし</td>
                                <td>なし</td>
                                <td>
                                    固定レスポンスを返す。シンプルだが複雑な状態は模倣できない。
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Mock（モック）</strong></td>
                                <td>中</td>
                                <td>なし</td>
                                <td>あり</td>
                                <td>
                                    呼び出し検証が必要な場合。<code>email_service.send()</code>が呼ばれたか検証。
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Fake（フェイク）</strong></td>
                                <td>中</td>
                                <td>あり</td>
                                <td>なし</td>
                                <td>インメモリDBなど実際の実装の簡略版。</td>
                            </tr>
                            <tr>
                                <td><strong>Spy（スパイ）</strong></td>
                                <td>中</td>
                                <td>あり</td>
                                <td>あり</td>
                                <td>実装の一部を使用しながら呼び出しを記録する。</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong style={{color: "var(--neon-cyan)"}}>サービス仮想化</strong>
                                </td>
                                <td>高</td>
                                <td>あり</td>
                                <td>あり</td>
                                <td>
                                    複数のシナリオ（成功・失敗・遅延）を動的に返せる。E2E・統合テストに最適。
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="section-title">サービス仮想化が必要な場面</h3>

                <div className="arch-layers">
                    <div className="arch-layer red">
                        <div className="arch-label">外部サービスが不安定</div>
                        <div className="arch-desc">
                            外部の決済API・天気API等がダウン/遅延するとテストが失敗してCIが止まる。仮想化でテストを安定させる。
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-label">外部サービスがコスト発生</div>
                        <div className="arch-desc">
                            毎回の統合テストで実際の外部APIを呼ぶと費用がかかる。仮想化でコストを削減する。
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-label">外部サービスが開発中</div>
                        <div className="arch-desc">
                            フロントエンドとバックエンドを並行開発する際、バックエンドAPIがまだ存在しない。仮想化でフロントのテストを先行させる。
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-label">エラーシナリオを再現できない</div>
                        <div className="arch-desc">
                            本番で発生した「タイムアウト」「429
                            レート制限」をテスト環境で再現するのが難しい。仮想化でエラーを意図的に注入する。
                        </div>
                    </div>
                </div>

                <h3 className="section-title">
                    サービス仮想化の6つのメリット <span className="k-level">K2 頻出</span>
                </h3>

                <div className="metric-grid">
                    <div className="metric-card">
                        <span className="metric-val" style={{fontSize: "1.4rem"}}>🔀</span>
                        <div className="metric-label">並列開発促進（シフトレフト）</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val" style={{fontSize: "1.4rem"}}>🛡️</span>
                        <div className="metric-label">テスト安定性向上</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val" style={{fontSize: "1.4rem"}}>💥</span>
                        <div className="metric-label">エラーシナリオのテスト</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val" style={{fontSize: "1.4rem"}}>💰</span>
                        <div className="metric-label">外部API呼び出しコスト削減</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val" style={{fontSize: "1.4rem"}}>⚡</span>
                        <div className="metric-label">テスト速度向上</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-val" style={{fontSize: "1.4rem"}}>🔒</span>
                        <div className="metric-label">環境の独立性</div>
                    </div>
                </div>

                <div className="code-block" data-lang="PYTHON — WIREMOCK SERVICE VIRTUALIZATION">
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-keyword\">from</span> <span class=\"code-white\">wiremock.client</span> <span class=\"code-keyword\">import</span> <span class=\"code-white\">WireMock, Mapping, Request, Response</span>\n\n<span class=\"code-keyword\">class</span> <span class=\"code-cyan\">PaymentServiceVirtualization</span>:\n    <span class=\"code-string\">\"\"\"外部決済サービスの仮想化\"\"\"</span>\n\n    <span class=\"code-keyword\">def</span> <span class=\"code-green\">setup_success_scenario</span>(<span class=\"code-white\">self</span>):\n        <span class=\"code-comment\"># ✅ 正常な決済処理のシナリオ</span>\n        <span class=\"code-white\">self.wm.add_mapping(Mapping(</span>\n            <span class=\"code-white\">request=Request(method=</span><span class=\"code-string\">\"POST\"</span><span class=\"code-white\">, url=</span><span class=\"code-string\">\"/api/v1/payments\"</span><span class=\"code-white\">),</span>\n            <span class=\"code-white\">response=Response(status=200, json_body={</span>\n                <span class=\"code-string\">\"transaction_id\"</span><span class=\"code-white\">: </span><span class=\"code-string\">\"TXN-12345\"</span><span class=\"code-white\">,</span>\n                <span class=\"code-string\">\"status\"</span><span class=\"code-white\">: </span><span class=\"code-string\">\"success\"</span>\n            <span class=\"code-white\">})</span>\n        <span class=\"code-white\">))</span>\n\n    <span class=\"code-keyword\">def</span> <span class=\"code-green\">setup_timeout_scenario</span>(<span class=\"code-white\">self</span>):\n        <span class=\"code-comment\"># ⏳ タイムアウトシナリオ（リトライロジックのテスト）</span>\n        <span class=\"code-white\">self.wm.add_mapping(Mapping(</span>\n            <span class=\"code-white\">request=Request(method=</span><span class=\"code-string\">\"POST\"</span><span class=\"code-white\">, url=</span><span class=\"code-string\">\"/api/v1/payments\"</span><span class=\"code-white\">),</span>\n            <span class=\"code-white\">response=Response(</span>\n              <span class=\"code-white\">fixed_delay_milliseconds=30000</span>  <span class=\"code-comment\"># 30秒遅延</span>\n            <span class=\"code-white\">)</span>\n        <span class=\"code-white\">))</span>\n\n    <span class=\"code-keyword\">def</span> <span class=\"code-green\">setup_rate_limit_scenario</span>(<span class=\"code-white\">self</span>):\n        <span class=\"code-comment\"># 🚫 レート制限シナリオ（エラーハンドリングのテスト）</span>\n        <span class=\"code-white\">self.wm.add_mapping(Mapping(</span>\n            <span class=\"code-white\">request=Request(method=</span><span class=\"code-string\">\"POST\"</span><span class=\"code-white\">, url=</span><span class=\"code-string\">\"/api/v1/payments\"</span><span class=\"code-white\">),</span>\n            <span class=\"code-white\">response=Response(</span>\n                <span class=\"code-white\">status=429,</span>\n                <span class=\"code-white\">headers={</span><span class=\"code-string\">\"Retry-After\"</span><span class=\"code-white\">: </span><span class=\"code-string\">\"60\"</span><span class=\"code-white\">},</span>\n                <span class=\"code-white\">json_body={</span><span class=\"code-string\">\"error\"</span><span class=\"code-white\">: </span><span class=\"code-string\">\"rate_limit_exceeded\"</span><span class=\"code-white\">}</span>\n            <span class=\"code-white\">)</span>\n        <span class=\"code-white\">))</span>\n\n<span class=\"code-comment\"># テストでの使用例</span>\n<span class=\"code-keyword\">def</span> <span class=\"code-green\">test_payment_timeout_triggers_retry</span>(<span class=\"code-white\">payment_vs, order_service</span>):\n    <span class=\"code-white\">payment_vs.setup_timeout_scenario()</span>\n    <span class=\"code-keyword\">with</span> <span class=\"code-white\">pytest.raises(PaymentTimeoutError):</span>\n        <span class=\"code-white\">order_service.complete_order(amount=10000)</span>" }} />
                </div>

                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://wiremock.org/docs/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">仮想化</span>
                        <div className="ref-info">
                            <span className="ref-title">WireMock 公式ドキュメント</span
                            ><span className="ref-url">wiremock.org/docs/</span>
                        </div>
                    </a>
                    <a className="ref-card" href="https://docs.pact.io/" target="_blank" rel="noopener">
                        <span className="ref-cat">契約テスト</span>
                        <div className="ref-info">
                            <span className="ref-title">Pact コントラクトテスト</span
                            ><span className="ref-url">docs.pact.io</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://www.mock-server.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">仮想化</span>
                        <div className="ref-info">
                            <span className="ref-title">MockServer 公式サイト</span
                            ><span className="ref-url">mock-server.com</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        {/* EXAM TIPS */}
        <section id="exam">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num red">EXAM</span>
                    <h2 className="chapter-title">試験対策 &amp; サンプル問題</h2>
                </div>

                <h3 className="section-title">章別配点と重要度</h3>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.1 要件エンジニアリング</div>
                        <div className="exam-card-pts">〜8問</div>
                        <div className="stars">★★★★☆</div>
                        <p style={{fontSize: "0.8rem", marginTop: "0.5rem", color: "var(--text-muted)"}}>
                            INVEST・受入基準・3 Amigos
                        </p>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.2 アジャイルテスト（TDD/BDD/ATDD）</div>
                        <div className="exam-card-pts" style={{color: "var(--neon-red)"}}>〜18問</div>
                        <div className="stars">★★★★★</div>
                        <p style={{fontSize: "0.8rem", marginTop: "0.5rem", color: "var(--text-muted)"}}>
                            最重要章。FIRST原則・Gherkin必須
                        </p>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.3 テスト自動化</div>
                        <div className="exam-card-pts">〜10問</div>
                        <div className="stars">★★★★☆</div>
                        <p style={{fontSize: "0.8rem", marginTop: "0.5rem", color: "var(--text-muted)"}}>
                            ピラミッド・フレイキー対策
                        </p>
                    </div>
                    <div className="exam-card">
                        <div className="exam-card-title">Ch.4 デプロイメント</div>
                        <div className="exam-card-pts">〜9問</div>
                        <div className="stars">★★★★☆</div>
                        <p style={{fontSize: "0.8rem", marginTop: "0.5rem", color: "var(--text-muted)"}}>
                            CD の2つの意味・サービス仮想化
                        </p>
                    </div>
                </div>

                <h3 className="section-title">必ず覚える重要概念</h3>

                <div className="highlight-box">
                    <div className="tag-list" style={{marginBottom: "1rem"}}>
                        <span className="tag green">INVEST（6要素）</span>
                        <span className="tag cyan">FIRST（5要素）</span>
                        <span className="tag amber">Red-Green-Refactor</span>
                        <span className="tag purple">TDD vs BDD vs ATDD</span>
                        <span className="tag green">3 Amigos</span>
                        <span className="tag cyan">Gherkinキーワード</span>
                        <span className="tag amber">CD の2つの意味</span>
                        <span className="tag green">サービス仮想化6メリット</span>
                        <span className="tag cyan">テストピラミッド比率</span>
                        <span className="tag purple">テストダブルの種類</span>
                    </div>
                    <div className="code-block" data-lang="MUST-MEMORIZE">
                        <pre dangerouslySetInnerHTML={{ __html: "<span class=\"code-comment\">// INVEST = Independent / Negotiable / Valuable / Estimable / Small / Testable</span>\n<span class=\"code-comment\">// FIRST  = Fast / Independent / Repeatable / Self-Validating / Timely</span>\n\n<span class=\"code-comment\">// TDD vs BDD vs ATDD の違い（最頻出）</span>\n<span class=\"code-green\">TDD</span>:  コード品質 / 開発者中心 / ユニットレベル / Red-Green-Refactor\n<span class=\"code-cyan\">BDD</span>:  振る舞い仕様 / チーム全員 / 受入レベル / Gherkin・Cucumber\n<span class=\"code-amber\">ATDD</span>: 受入基準先行 / ビジネス/テスト中心 / システム受入 / 受入TCファースト\n\n<span class=\"code-comment\">// CD の2つの意味（頻出）</span>\n<span class=\"code-cyan\">Continuous Delivery</span>    = 人間の承認が必要（準備は整っている）\n<span class=\"code-green\">Continuous Deployment</span>  = 自動でデプロイ（人間の承認不要）\n\n<span class=\"code-comment\">// テストピラミッド比率</span>\n<span class=\"code-red\">E2E</span>: 10% / <span class=\"code-amber\">統合</span>: 20% / <span class=\"code-green\">ユニット</span>: 70%" }} />
                    </div>
                </div>

                <h3 className="section-title">サンプル問題 Q&amp;A</h3>

                <div className="callout info">
                    <span className="callout-icon">❓</span>
                    <div className="callout-body">
                        <strong>Q1（K3）TDDで割り算機能を実装する場合、最初のステップは？</strong
                        ><br />
                        A) 実装コードを書く　B) ドキュメントを書く　<strong
                            >C) 失敗するテストを書く ✅</strong
                        >　D) リファクタリングを行う<br /><br />
                        <strong>解説：</strong> TDDの Red-Green-Refactor の「Red」=
                        まず失敗するテストを書く。実装コードを先に書くのは従来アプローチ。
                    </div>
                </div>

                <div className="callout info">
                    <span className="callout-icon">❓</span>
                    <div className="callout-body">
                        <strong>Q2（K2）FIRST の「I（Independent）」の意味は？</strong><br />
                        A) テストはすぐに実行できる必要がある　B)
                        コードから独立して書かれる　<strong
                            >C) テストは他のテストの実行に依存せず任意の順序で実行できる ✅</strong
                        >　D) 独立したツールで実行できる<br /><br />
                        <strong>解説：</strong>
                        Independentは「テスト間の依存なし」＝並列実行可能、実行順序不問を意味する。
                    </div>
                </div>

                <div className="callout info">
                    <span className="callout-icon">❓</span>
                    <div className="callout-body">
                        <strong
                            >Q3（K4）次のGherkinシナリオでBDDベストプラクティスに最も適合するものは？</strong
                        ><br />
                        A) When ユーザーがURL "https://…" に遷移しid="btn"をクリックする<br />
                        <strong>B) When ユーザーが注文を確定する ✅</strong><br />
                        C) When 購入・確認・遷移・メール確認する<br />
                        D) When POST /api/v1/orders が201を返す<br /><br />
                        <strong>解説：</strong>
                        BDDはビジネスの振る舞いを簡潔に記述。URL/セレクタ（実装詳細）はNG。1ステップ1アクション。
                    </div>
                </div>

                <div className="callout info">
                    <span className="callout-icon">❓</span>
                    <div className="callout-body">
                        <strong>Q4（K3）CI パイプラインでのテスト実行推奨順序は？</strong><br />
                        A) E2E → 統合 → ユニット　<strong
                            >B) ユニット → 統合 → E2Eスモーク ✅</strong
                        >　C) 統合 → ユニット → E2E　D) E2E → ユニット → 統合<br /><br />
                        <strong>解説：</strong>
                        フェイルファスト原則。高速・安定なユニットテストを最初に実行。遅い・コスト高のE2Eは最後。
                    </div>
                </div>

                <div className="callout info">
                    <span className="callout-icon">❓</span>
                    <div className="callout-body">
                        <strong>Q5（K2）サービス仮想化のメリットとして最も不適切なものは？</strong
                        ><br />
                        A) 外部サービスが使用不可でもテスト実行可能<br />
                        <strong
                            >B) 本番環境の外部サービスを直接テストできる ✅（これが不適切）</strong
                        ><br />
                        C) タイムアウトやエラーなどの異常シナリオを再現できる<br />
                        D) フロントエンドとバックエンドの並行開発が可能になる<br /><br />
                        <strong>解説：</strong>
                        サービス仮想化は「本番サービスを回避」するもの。直接テストするのは目的の逆。
                    </div>
                </div>

                <div className="callout info">
                    <span className="callout-icon">❓</span>
                    <div className="callout-body">
                        <strong
                            >Q6（K4）「オンライン顧客として、高速に商品を注文したい」の問題点は？</strong
                        ><br />
                        A) ストーリーが小さすぎる<br />
                        <strong>B) 受入基準が測定可能でない（テスト不可能）✅</strong><br />
                        C) ビジネス価値が含まれていない<br />
                        D) ユーザーの役割が不明確<br /><br />
                        <strong>解説：</strong> INVEST の T（Testable）違反。「高速に」は主観的で
                        Yes/No 判定不可能。「5ステップ以内」「3秒以内」のように数値化が必要。
                    </div>
                </div>

                <h3 className="section-title">試験直前チェックリスト</h3>
                <div className="alert green">
                    ☑ ユーザーストーリーの "As a / I want / So that" 形式を説明できる
                </div>
                <div className="alert green">☑ INVEST 基準の6要素を全て言える（I-N-V-E-S-T）</div>
                <div className="alert cyan">☑ TDD の Red-Green-Refactor サイクルを順番に説明できる</div>
                <div className="alert cyan">☑ FIRST の5要素を全て説明できる（F-I-R-S-T）</div>
                <div className="alert cyan">☑ TDD・BDD・ATDD の違いを表で比較できる</div>
                <div className="alert cyan">
                    ☑ Gherkin のキーワードを全て言える（Feature, Scenario, Given, When, Then...）
                </div>
                <div className="alert amber">☑ BDD の良いシナリオの書き方のルールを3つ以上言える</div>
                <div className="alert amber">☑ 3 Amigos の3つのロールと役割を説明できる</div>
                <div className="alert amber">
                    ☑ テストチャーターの EXPLORE/TO DISCOVER/USING 形式を説明できる
                </div>
                <div className="alert amber">
                    ☑ テスト自動化ピラミッドの3層（ユニット70%/統合20%/E2E10%）を説明できる
                </div>
                <div className="alert red">
                    ☑ CI・CT・CD（継続的デリバリー）・CD（継続的デプロイメント）の違いを説明できる
                </div>
                <div className="alert red">☑ CIの8つの基本原則を説明できる</div>
                <div className="alert red">☑ サービス仮想化の定義とメリット（6つ）を説明できる</div>
                <div className="alert red">☑ スタブ・モック・サービス仮想化の違いを説明できる</div>
            </div>
        </section>

        {/* REFERENCES */}
        <section id="refs">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">REF</span>
                    <h2 className="chapter-title">参考文献・URL一覧</h2>
                </div>

                <h3 className="section-title">🏛️ 公式ISTQBリソース</h3>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-advanced-level-agile-technical-tester-ctal-att/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">公式</span>
                        <div className="ref-info">
                            <span className="ref-title">ISTQB CTAL-ATT 公式認定ページ</span
                            ><span className="ref-url">istqb.org/certifications/…ctal-att/</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/?sdm_process_download=1&download_id=3658"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">公式</span>
                        <div className="ref-info">
                            <span className="ref-title">CTAL-ATT シラバス v1.1 PDF</span
                            ><span className="ref-url">istqb.org download_id=3658</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/?sdm_process_download=1&download_id=3659"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">公式</span>
                        <div className="ref-info">
                            <span className="ref-title">サンプル試験問題 v1.3</span
                            ><span className="ref-url">istqb.org download_id=3659</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/?sdm_process_download=1&download_id=3660"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">公式</span>
                        <div className="ref-info">
                            <span className="ref-title">サンプル試験解答 v1.3</span
                            ><span className="ref-url">istqb.org download_id=3660</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://glossary.istqb.org/en_US/search?term="
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">公式</span>
                        <div className="ref-info">
                            <span className="ref-title">ISTQB グロッサリー（用語集）</span
                            ><span className="ref-url">glossary.istqb.org</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/certifications/certified-tester-foundation-level/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">前提資格</span>
                        <div className="ref-info">
                            <span className="ref-title">CTFL v4.0 — 前提資格公式ページ</span
                            ><span className="ref-url">istqb.org/certifications/…ctfl/</span>
                        </div>
                    </a>
                </div>

                <h3 className="section-title">🎓 試験プロバイダー</h3>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://isqi.org/ISTQB-Certified-Tester-Agile-Technical-Tester-CTAL-ATT/CT-AL-ATT"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">試験</span>
                        <div className="ref-info">
                            <span className="ref-title">iSQI 試験情報（CTAL-ATT）</span
                            ><span className="ref-url">isqi.org/…CTAL-ATT/CT-AL-ATT</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://istqb.org/exam-providers/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">試験</span>
                        <div className="ref-info">
                            <span className="ref-title">試験プロバイダー検索</span
                            ><span className="ref-url">istqb.org/exam-providers/</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://www.istqb.guru/agile-technical-tester/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">学習</span>
                        <div className="ref-info">
                            <span className="ref-title">ISTQB.Guru CTAL-ATT ガイド</span
                            ><span className="ref-url">istqb.guru/agile-technical-tester/</span>
                        </div>
                    </a>
                </div>

                <h3 className="section-title">🔧 主要ツール・フレームワーク</h3>
                <div className="ref-grid">
                    <a
                        className="ref-card"
                        href="https://cucumber.io/docs/gherkin/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">BDD</span>
                        <div className="ref-info">
                            <span className="ref-title">Cucumber / Gherkin 公式</span
                            ><span className="ref-url">cucumber.io/docs/gherkin/</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://behave.readthedocs.io/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">BDD</span>
                        <div className="ref-info">
                            <span className="ref-title">Behave（Python BDD）</span
                            ><span className="ref-url">behave.readthedocs.io</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://pytest-bdd.readthedocs.io/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">BDD</span>
                        <div className="ref-info">
                            <span className="ref-title">pytest-bdd 公式ドキュメント</span
                            ><span className="ref-url">pytest-bdd.readthedocs.io</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.pytest.org/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">TDD</span>
                        <div className="ref-info">
                            <span className="ref-title">pytest 公式ドキュメント</span
                            ><span className="ref-url">docs.pytest.org</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://junit.org/junit5/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">TDD</span>
                        <div className="ref-info">
                            <span className="ref-title">JUnit 5（Java）公式</span
                            ><span className="ref-url">junit.org/junit5/</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://playwright.dev/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">E2E</span>
                        <div className="ref-info">
                            <span className="ref-title">Playwright 公式ドキュメント</span
                            ><span className="ref-url">playwright.dev</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://robotframework.org/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">キーワード駆動</span>
                        <div className="ref-info">
                            <span className="ref-title">Robot Framework 公式</span
                            ><span className="ref-url">robotframework.org</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://wiremock.org/docs/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">仮想化</span>
                        <div className="ref-info">
                            <span className="ref-title">WireMock 公式ドキュメント</span
                            ><span className="ref-url">wiremock.org/docs/</span>
                        </div>
                    </a>
                    <a className="ref-card" href="https://docs.pact.io/" target="_blank" rel="noopener">
                        <span className="ref-cat">契約テスト</span>
                        <div className="ref-info">
                            <span className="ref-title">Pact コントラクトテスト</span
                            ><span className="ref-url">docs.pact.io</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://www.mock-server.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">仮想化</span>
                        <div className="ref-info">
                            <span className="ref-title">MockServer 公式</span
                            ><span className="ref-url">mock-server.com</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.github.com/en/actions"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">CI/CD</span>
                        <div className="ref-info">
                            <span className="ref-title">GitHub Actions 公式ドキュメント</span
                            ><span className="ref-url">docs.github.com/en/actions</span>
                        </div>
                    </a>
                    <a
                        className="ref-card"
                        href="https://docs.sonarqube.org/"
                        target="_blank"
                        rel="noopener"
                    >
                        <span className="ref-cat">コード品質</span>
                        <div className="ref-info">
                            <span className="ref-title">SonarQube 公式ドキュメント</span
                            ><span className="ref-url">docs.sonarqube.org</span>
                        </div>
                    </a>
                </div>

                <h3 className="section-title">📚 参考書籍</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <span className="ref-cat">書籍</span>
                        <div className="ref-info">
                            <span className="ref-title">Test Driven Development: By Example</span
                            ><span className="ref-url">Kent Beck（2002）— TDDの原典</span>
                        </div>
                    </div>
                    <div className="ref-card">
                        <span className="ref-cat">書籍</span>
                        <div className="ref-info">
                            <span className="ref-title">BDD in Action</span
                            ><span className="ref-url">John Ferguson Smart（2015）</span>
                        </div>
                    </div>
                    <div className="ref-card">
                        <span className="ref-cat">書籍</span>
                        <div className="ref-info">
                            <span className="ref-title">Specification by Example</span
                            ><span className="ref-url">Gojko Adzic（2011）</span>
                        </div>
                    </div>
                    <div className="ref-card">
                        <span className="ref-cat">書籍</span>
                        <div className="ref-info">
                            <span className="ref-title">Agile Testing: A Practical Guide</span
                            ><span className="ref-url">Crispin &amp; Gregory（2008）</span>
                        </div>
                    </div>
                    <div className="ref-card">
                        <span className="ref-cat">書籍</span>
                        <div className="ref-info">
                            <span className="ref-title">Explore It!</span
                            ><span className="ref-url">Elisabeth Hendrickson（2013）</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div className="container">
                <p>
                    CTAL-ATT Complete Guide 2025 — Based on
                    <a
                        href="https://istqb.org/certifications/certified-tester-advanced-level-agile-technical-tester-ctal-att/"
                        target="_blank"
                        rel="noopener"
                        >ISTQB® CTAL-ATT Syllabus v1.1</a
                    >
                    (2020-01-28)
                </p>
                <p style={{marginTop: "0.5rem", fontSize: "0.7rem", color: "var(--text-muted)"}}>
                    ⚠️
                    本ガイドはISTQB®が公認したトレーニング資料ではありません。公式シラバス・サンプル問題と合わせて使用してください。
                </p>
            </div>
        </footer>
    
        </div>
    );
}
