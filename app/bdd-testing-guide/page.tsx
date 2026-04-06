import '../bdd-testing-guide.css';

export default function BddTestingGuidePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-content">
          <span className="hero-eyebrow">ISTQB CTFL v4.0 Section 4.5 準拠 | 初学者から実践者まで完全網羅</span>
          <h1>BDD（ビヘイビア駆動開発）<br /><span>完全ガイド 2025</span></h1>
        </div>
      </section>

      <main>
        <section id="toc" className="mt-4">
          <div className="card">
            <h2 className="text-xl font-bold mb-4">目次</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#1-bddとは何か" className="text-accent hover:underline">1. BDDとは何か？</a></li>
              <li><a href="#2-bddの歴史と背景" className="text-accent hover:underline">2. BDDの歴史と背景</a></li>
              <li><a href="#3-bdd-vs-tdd-vs-atdd" className="text-accent hover:underline">3. BDD vs TDD vs ATDD</a></li>
              <li><a href="#4-istqbにおけるbddの位置づけ" className="text-accent hover:underline">4. ISTQBにおけるBDDの位置づけ</a></li>
              <li><a href="#5-bddの3つのフェーズ" className="text-accent hover:underline">5. BDDの3つのフェーズ</a></li>
              <li><a href="#6-スリーアミーゴスthree-amigos" className="text-accent hover:underline">6. スリーアミーゴス（Three Amigos）</a></li>
              <li><a href="#7-gherkin言語の完全解説" className="text-accent hover:underline">7. Gherkin言語の完全解説</a></li>
              <li><a href="#8-実装ステップバイステップ" className="text-accent hover:underline">8. 実装ステップバイステップ</a></li>
              <li><a href="#9-主要bddツール比較-2025年" className="text-accent hover:underline">9. 主要BDDツール比較 2025年</a></li>
              <li><a href="#10-cicdパイプラインへの統合" className="text-accent hover:underline">10. CI/CDパイプラインへの統合</a></li>
              <li><a href="#11-ベストプラクティスとアンチパターン" className="text-accent hover:underline">11. ベストプラクティスとアンチパターン</a></li>
              <li><a href="#12-bdd導入のロードマップ" className="text-accent hover:underline">12. BDD導入のロードマップ</a></li>
              <li><a href="#13-2025年のbddトレンドと統計" className="text-accent hover:underline">13. 2025年のBDDトレンドと統計</a></li>
              <li><a href="#14-全参照url一覧" className="text-accent hover:underline">14. 全参照URL一覧</a></li>
            </ul>
          </div>
        </section>

        <section id="1-bddとは何か">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2>1. BDDとは何か？</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">定義</h3>
          <p>
            <strong>BDD（Behavior-Driven Development / ビヘイビア駆動開発）</strong> は、ソフトウェア開発において技術者と非技術者の間のコミュニケーションギャップを埋めるための <strong>アジャイル開発手法</strong>です。
          </p>
          <div className="callout callout-info mt-4">
            <p>BDDは、ビジネス側と技術側の全員が「ユーザーの視点からシステムがどのように振る舞うべきか」について、<strong>共通の自然言語</strong>で合意形成しながら開発を進めるアプローチです。</p>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">BDDが解決する問題</h3>
          <p>ソフトウェアプロジェクト失敗の <strong>56%はコミュニケーション不足</strong> が原因です (PMI Pulse of the Profession, 2013)。</p>
          
          <div className="code-block mt-4">
            <pre><code>{`従来の問題:
  ビジネス担当者 → 「機能Xが欲しい」
  開発者        → (仕様を誤解して実装)
  テスター      → (要件を知らずにテスト設計)
  ← バグ・手戻り・コスト増大 →

BDD導入後:
  全員が同じ「シナリオ」を読み、理解し、合意する
  ← 共通言語で早期に要件を明確化 →`}</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">BDDの3つの核心原則</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>原則</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>コミュニケーション</strong></td>
                  <td>技術者・非技術者が同じ言語で対話する</td>
                </tr>
                <tr>
                  <td><strong>具体例による仕様化</strong></td>
                  <td>抽象的な要件を具体的なシナリオで表現する</td>
                </tr>
                <tr>
                  <td><strong>自動化</strong></td>
                  <td>シナリオがそのまま実行可能なテストになる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="2-bddの歴史と背景">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2>2. BDDの歴史と背景</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">誕生の経緯</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>年</th>
                  <th>出来事</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>2003年</strong></td>
                  <td>Dan North が TDD（テスト駆動開発）の限界を感じ始める [1]</td>
                </tr>
                <tr>
                  <td><strong>2004年</strong></td>
                  <td>Dan North と Chris Matts が <strong>Given/When/Then 形式</strong> を考案 [2]</td>
                </tr>
                <tr>
                  <td><strong>2006年</strong></td>
                  <td>Dan North が "Introducing BDD" を執筆し、BDD を公に定式化 [3]</td>
                </tr>
                <tr>
                  <td><strong>2008年</strong></td>
                  <td>Aslak Hellesøy が <strong>Gherkin言語</strong> と Cucumber を公開 [4]</td>
                </tr>
                <tr>
                  <td><strong>2010年</strong></td>
                  <td>SpecFlow（.NET向け）がリリース [5]</td>
                </tr>
                <tr>
                  <td><strong>2024年</strong></td>
                  <td>BDDテストツール市場が <strong>11億ドル</strong> に到達 [6]</td>
                </tr>
                <tr>
                  <td><strong>2025年</strong></td>
                  <td>AIによるGherkinシナリオ生成が普及し、採用がさらに加速</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <ul className="list-none mt-4 text-sm text-muted space-y-1">
            <li>[1] Dan North - The History of BDD</li>
            <li>[2] Origin of Given/When/Then (JBehave)</li>
            <li>[3] Dan North - "Introducing BDD", Better Software Magazine, March 2006</li>
            <li>[4] Cucumber Release History</li>
            <li>[5] SpecFlow History</li>
            <li>[6] Verified Market Reports - BDD Testing Tool Market Size (2024)</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">BDDを生み出した背景</h3>
          <p>Dan Northは次の問題を観察しました：</p>
          <ul className="list-disc pl-5 space-y-1 mt-2 mb-4">
            <li>開発者が「何を」テストすべきかではなく「どのように」テストするかに集中していた</li>
            <li>ビジネスの要件が技術的な実装に翻訳される過程で意味が失われていた</li>
            <li>テストケースの名前が「testCalculation」のような意味のないものばかりだった</li>
          </ul>
          <p><strong>解決策</strong>: テストを「システムがすべき振る舞い」として表現する</p>
        </section>

        <section id="3-bdd-vs-tdd-vs-atdd">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2>3. BDD vs TDD vs ATDD</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">3つの手法の比較</h3>
          <div className="table-wrapper">
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
                  <td><strong>主な参加者</strong></td>
                  <td>開発者</td>
                  <td>開発者 + テスター + ビジネス</td>
                  <td>開発者 + テスター + 顧客</td>
                </tr>
                <tr>
                  <td><strong>テストの粒度</strong></td>
                  <td>ユニット（関数レベル）</td>
                  <td>ビヘイビア（振る舞いレベル）</td>
                  <td>受入基準（ビジネスレベル）</td>
                </tr>
                <tr>
                  <td><strong>言語</strong></td>
                  <td>プログラミング言語</td>
                  <td>Gherkin（自然言語）</td>
                  <td>自然言語</td>
                </tr>
                <tr>
                  <td><strong>焦点</strong></td>
                  <td>実装の正確性</td>
                  <td>ビジネス価値の実現</td>
                  <td>ユーザー受入基準の充足</td>
                </tr>
                <tr>
                  <td><strong>ドキュメント</strong></td>
                  <td>コードのみ</td>
                  <td>リビングドキュメント</td>
                  <td>受入テスト仕様書</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">関係性の図</h3>
          <div className="code-block">
            <pre><code>{`ATDD (最も広い)
  ↳ BDD (中間)
       ↳ TDD (最も細かい)

例:
  ATDD: 「ユーザーは商品を購入できる」
  BDD:  「Given カートに商品が入っている
          When  支払いを確定する
          Then  注文確認メールが送られる」
  TDD:  「test_calculateOrderTotal_withDiscount_returns900()」`}</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">どれを使うべきか？</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>TDD</strong>: 実装の品質保証、ユニットテストの充実</li>
            <li><strong>BDD</strong>: チーム間のコミュニケーション改善、仕様の明確化</li>
            <li><strong>ATDD</strong>: ビジネス要件の厳密な充足確認</li>
            <li><strong>推奨</strong>: 3つを組み合わせて使う（相互補完的）</li>
          </ul>
        </section>

        <section id="4-istqbにおけるbddの位置づけ">
          <div className="section-header">
            <span className="section-num">04</span>
            <h2>4. ISTQBにおけるBDDの位置づけ</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">ISTQB CTFL v4.0 Section 4.5: コラボレーションベースのテストアプローチ</h3>
          <p>ISTQBはCTFL v4.0.1 Section 4.5において、BDDを <strong>「コラボレーションベースのテストアプローチ」</strong> の具体的な代表例として説明しています。</p>
          <div className="code-block mt-4">
            <pre><code>{`ISTQB CTFL v4.0 の構成（BDD関連）:
  Section 4.5 — Collaboration-based Test Approaches
    ├── 4.5.1 Collaborative User Story Writing
    └── 4.5.2 Acceptance Criteria`}</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">ISTQBが定義するBDDの価値</h3>
          <p>ISTQB CTFL v4.0 では、コラボレーションベースのテストアプローチとして以下を強調しています：</p>
          <ol className="list-decimal pl-5 space-y-1 mt-2 mb-4">
            <li><strong>ユーザーストーリーの共同作成</strong>: PO・開発者・テスターが協議してシナリオを定義</li>
            <li><strong>受入基準の定量化</strong>: 「何をもって完了とするか」を事前に明確化</li>
            <li><strong>早期テスト（シフトレフト）</strong>: 実装前から受入テストシナリオを準備</li>
          </ol>

          <h3 className="text-lg font-bold mt-6 mb-2">ISTQBの7原則とBDDの対応</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ISTQB原則</th>
                  <th>BDDでの実現方法</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>① 欠陥の早期発見</td>
                  <td>スリーアミーゴスで要件の曖昧さを早期排除</td>
                </tr>
                <tr>
                  <td>③ 早期テスト</td>
                  <td>シナリオを開発開始前に設計</td>
                </tr>
                <tr>
                  <td>⑤ 殺虫剤のパラドックス</td>
                  <td>シナリオを継続的に更新・追加</td>
                </tr>
                <tr>
                  <td>⑦ 欠陥ゼロの誤謬</td>
                  <td>ビジネス価値（ユーザーの振る舞い）を中心に据える</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="5-bddの3つのフェーズ">
          <div className="section-header">
            <span className="section-num">05</span>
            <h2>5. BDDの3つのフェーズ</h2>
            <p>BDDには明確に定義された3つの反復サイクルがあります。</p>
          </div>

          <div className="card-grid mt-4">
            <div className="card">
              <h3 className="text-lg font-bold text-accent-blue">フェーズ1: 発見（Discovery）</h3>
              <p className="italic text-sm mb-2">「What」を定義する段階</p>
              <p>スリーアミーゴス（ビジネス担当者・開発者・テスター）が集まり、具体的な例を使って機能の振る舞いを議論します。</p>
              <p className="mt-2 font-bold">実施内容:</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>ユーザーストーリーの精査</li>
                <li>「もし〜なら」という具体的な例の洗い出し</li>
                <li>境界条件・エッジケースの特定</li>
                <li>曖昧な要件の排除</li>
              </ul>
              <p className="mt-2 text-sm"><strong>アウトプット</strong>: 具体的なシナリオの候補リスト</p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-accent-purple">フェーズ2: 定式化（Formulation）</h3>
              <p className="italic text-sm mb-2">「What」をGherkin形式に変換する段階</p>
              <p>発見されたシナリオを、誰もが読める <strong>Gherkin言語（Given/When/Then）</strong> で文書化します。</p>
              <p className="mt-2 font-bold">実施内容:</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>シナリオのGherkin記述</li>
                <li>フィーチャーファイル（.feature）の作成</li>
                <li>全ステークホルダーによるレビュー・合意</li>
              </ul>
              <p className="mt-2 text-sm"><strong>アウトプット</strong>: .featureファイル（リビングドキュメント）</p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-accent-green">フェーズ3: 自動化（Automation）</h3>
              <p className="italic text-sm mb-2">「How」を実装する段階</p>
              <p>GherkinシナリオをCI/CDパイプラインで実行可能な自動テストコードに変換します。</p>
              <p className="mt-2 font-bold">実施内容:</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>ステップ定義（Step Definitions）のコーディング</li>
                <li>テスト実行・CI/CD統合</li>
                <li>失敗したシナリオの修正</li>
              </ul>
              <p className="mt-2 text-sm"><strong>アウトプット</strong>: 実行可能なBDDテストスイート</p>
            </div>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2">3フェーズのサイクル</h3>
          <div className="code-block">
            <pre><code>{`[発見] → [定式化] → [自動化]
   ↑                      |
   └──────────────────────┘
        継続的に反復`}</code></pre>
          </div>
        </section>

        <section id="6-スリーアミーゴスthree-amigos">
          <div className="section-header">
            <span className="section-num">06</span>
            <h2>6. スリーアミーゴス（Three Amigos）</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">概要</h3>
          <p>スリーアミーゴスとは、BDDにおける <strong>「3つの異なる視点からの対話」</strong> を象徴するプラクティスです。</p>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>アミーゴ</th>
                  <th>役割</th>
                  <th>視点</th>
                  <th>主な関心事</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ビジネス（PO/BA）</strong></td>
                  <td>要件の代表者</td>
                  <td>なぜ・何を</td>
                  <td>ビジネス価値、ユーザーニーズ</td>
                </tr>
                <tr>
                  <td><strong>開発者</strong></td>
                  <td>実装の担当者</td>
                  <td>どのように</td>
                  <td>実装可能性、技術的制約</td>
                </tr>
                <tr>
                  <td><strong>テスター（QA）</strong></td>
                  <td>品質の守護者</td>
                  <td>もし〜なら</td>
                  <td>エッジケース、失敗シナリオ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">スリーアミーゴスセッションの進め方</h3>
          <div className="step-list mt-4">
            <div className="step-item">
              <div className="step-num-circle">1</div>
              <div className="step-content">
                <h4>準備（Before）</h4>
                <p>ユーザーストーリーを事前共有、各自が疑問・懸念事項を書き出す、時間：15〜45分が理想</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-num-circle">2</div>
              <div className="step-content">
                <h4>セッション中（During）</h4>
                <div className="code-block mt-2">
                  <pre><code>{`PO:      「ユーザーがログイン失敗したらどうなりますか？」
テスター: 「3回失敗したらロックアウトすべきでは？」
開発者:   「セッションの保持時間はどうしますか？」
全員:     →「Given/When/Then」でシナリオに変換`}</code></pre>
                </div>
              </div>
            </div>
            <div className="step-item">
              <div className="step-num-circle">3</div>
              <div className="step-content">
                <h4>アウトプット（After）</h4>
                <p>合意されたGherkinシナリオ、残課題リスト、技術的なTODO</p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">スリーアミーゴスの例</h3>
          <p><strong>ユーザーストーリー</strong>: 「ユーザーとして、安全にログインしたい」</p>
          <p className="mt-2 font-bold">発見された具体例:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>✅ 正しいID/パスワードでログイン成功</li>
            <li>❌ 間違ったパスワードでログイン失敗</li>
            <li>🔒 5回失敗後にアカウントロック</li>
            <li>⏰ 30分後に自動ロック解除</li>
          </ol>
          <p className="mt-4 font-bold">テスターが追加した視点:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>SQLインジェクション攻撃への耐性は？</li>
            <li>特殊文字を含むパスワードは？</li>
            <li>同時に2台からログインしたら？</li>
          </ul>
        </section>

        <section id="7-gherkin言語の完全解説">
          <div className="section-header">
            <span className="section-num">07</span>
            <h2>7. Gherkin言語の完全解説</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">Gherkinとは</h3>
          <p>Gherkin（ガーキン）は、BDDシナリオを記述するための <strong>ドメイン固有言語（DSL）</strong> です。</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>70以上の言語</strong>に対応（日本語も含む）</li>
            <li>人間が読める形式 + 機械が実行できる形式</li>
            <li>ファイル拡張子: <strong>.feature</strong></li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">Gherkinキーワード完全一覧</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>キーワード</th>
                  <th>役割</th>
                  <th>日本語対応</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>Feature</code></td><td>機能・フィーチャーの説明</td><td><code>フィーチャー</code></td></tr>
                <tr><td><code>Scenario</code></td><td>単一のテストシナリオ</td><td><code>シナリオ</code></td></tr>
                <tr><td><code>Scenario Outline</code></td><td>データ駆動シナリオ</td><td><code>シナリオアウトライン</code></td></tr>
                <tr><td><code>Given</code></td><td>前提条件（コンテキスト）</td><td><code>前提</code></td></tr>
                <tr><td><code>When</code></td><td>操作・アクション</td><td><code>もし</code></td></tr>
                <tr><td><code>Then</code></td><td>期待結果</td><td><code>ならば</code></td></tr>
                <tr><td><code>And</code></td><td>前のキーワードの継続</td><td><code>かつ</code></td></tr>
                <tr><td><code>But</code></td><td>例外・否定の追加</td><td><code>しかし</code></td></tr>
                <tr><td><code>Background</code></td><td>シナリオ共通の前提</td><td><code>背景</code></td></tr>
                <tr><td><code>Examples</code></td><td>データ表</td><td><code>例</code></td></tr>
                <tr><td><code>#</code></td><td>コメント</td><td><code>#</code></td></tr>
                <tr><td><code>@</code></td><td>タグ</td><td><code>@</code></td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2">7.1 Feature（フィーチャー）</h3>
          <p>機能全体の説明を記述するブロックです。</p>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
            <pre><code><span className="kw-feat">Feature:</span> ユーザーログイン機能
  ユーザーとして
  アカウントに安全にアクセスしたい
  そうすることで個人データを保護できる

  <span className="cm"># 以下にScenarioが続く</span></code></pre>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2">7.2 Scenario（シナリオ）</h3>
          <p>1つの具体的な振る舞いを記述します。</p>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
            <pre><code><span className="kw-feat">Feature:</span> ショッピングカート

  <span className="kw-scen">Scenario:</span> 商品をカートに追加する
    <span className="kw-given">Given</span> ユーザーがログイン済みである
    <span className="kw-given">And</span>   商品一覧ページを開いている
    <span className="kw-when">When</span>  「ワイヤレスイヤホン」の「カートに追加」をクリックする
    <span className="kw-then">Then</span>  カートの商品数が <span className="str">"1"</span> 増える
    <span className="kw-then">And</span>   「カートに追加しました」の通知が表示される</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2">7.3 Given / When / Then 詳細</h3>
          <div className="code-block mt-2">
            <pre><code>{`Given（前提）: テストの初期状態を設定する
  ├── システムの状態を記述する
  ├── 「〜の状態で」「〜がある」
  └── 例: "Given ユーザーが管理者権限を持っている"

When（操作）: テスト対象のアクションを記述する
  ├── ユーザーが取る行動を1つだけ記述する
  ├── 「〜したとき」「〜を実行したとき」
  └── 例: "When ユーザーが「削除」ボタンをクリックする"

Then（期待結果）: 期待される出力・結果を記述する
  ├── 観測可能な結果を記述する
  ├── 「〜になるはずだ」「〜が表示される」
  └── 例: "Then 削除確認のダイアログが表示される"`}</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2">7.4 Background（バックグラウンド）</h3>
          <p>全シナリオに共通する前提条件をまとめます。</p>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
            <pre><code><span className="kw-feat">Feature:</span> 商品管理

  <span className="kw-scen">Background:</span>
    <span className="kw-given">Given</span> 管理者がログイン済みである
    <span className="kw-given">And</span>   「商品管理」ページを開いている

  <span className="kw-scen">Scenario:</span> 商品を追加する
    <span className="kw-when">When</span>  「新規追加」をクリックして商品情報を入力する
    <span className="kw-then">Then</span>  新しい商品が一覧に表示される

  <span className="kw-scen">Scenario:</span> 商品を削除する
    <span className="kw-when">When</span>  商品を選択して「削除」をクリックする
    <span className="kw-then">Then</span>  商品が一覧から消える</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2">7.5 Scenario Outline（シナリオアウトライン）</h3>
          <p>同じシナリオを複数のデータで繰り返すデータ駆動テストです。</p>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
            <pre><code><span className="kw-feat">Feature:</span> 年齢バリデーション

  <span className="kw-scen">Scenario Outline:</span> 年齢入力の境界値テスト
    <span className="kw-given">Given</span> ユーザー登録フォームを開いている
    <span className="kw-when">When</span>  年齢フィールドに <span className="str">"&lt;年齢&gt;"</span> を入力する
    <span className="kw-then">Then</span>  結果は <span className="str">"&lt;期待結果&gt;"</span> になる

    <span className="kw-scen">Examples:</span>
      | 年齢 | 期待結果     |
      | -1   | エラー表示   |
      | 0    | 登録成功     |
      | 17   | 登録成功     |
      | 18   | 登録成功     |
      | 120  | 登録成功     |
      | 121  | エラー表示   |</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2">7.6 タグ（Tags）</h3>
          <p>シナリオをグループ化・フィルタリングするためのラベルです。</p>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
            <pre><code><span className="kw">@smoke @login</span>
<span className="kw-feat">Feature:</span> ユーザー認証

  <span className="kw">@positive @fast</span>
  <span className="kw-scen">Scenario:</span> 正常ログイン
    <span className="kw-given">Given</span> 有効なアカウントがある
    <span className="kw-when">When</span>  正しいパスワードでログインする
    <span className="kw-then">Then</span>  ダッシュボードに遷移する

  <span className="kw">@negative @security</span>
  <span className="kw-scen">Scenario:</span> 無効パスワードでのログイン
    <span className="kw-given">Given</span> 有効なアカウントがある
    <span className="kw-when">When</span>  間違ったパスワードでログインを試みる
    <span className="kw-then">Then</span>  エラーメッセージが表示される</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2">7.7 Data Tables（データテーブル）</h3>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
            <pre><code><span className="kw-scen">Scenario:</span> 複数商品を一度にカートに追加する
  <span className="kw-given">Given</span> カートが空の状態である
  <span className="kw-when">When</span>  以下の商品をカートに追加する:
    | 商品名             | 数量 | 単価   |
    | ワイヤレスイヤホン | 1    | 15000  |
    | スマートウォッチ   | 2    | 25000  |
    | 充電ケーブル       | 3    | 2000   |
  <span className="kw-then">Then</span>  カートの合計金額は <span className="str">"71000"</span> 円になる</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2">7.8 実際のシナリオ設計のベストプラクティス</h3>
          <p className="mt-4 font-bold text-accent-green">✅ 良いシナリオ:</p>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
            <pre><code><span className="kw-scen">Scenario:</span> 在庫切れ商品の注文
  <span className="kw-given">Given</span> ユーザーが商品「A」のページを開いている
  <span className="kw-given">And</span>   商品「A」の在庫が <span className="str">"0"</span> 個である
  <span className="kw-when">When</span>  「カートに追加」ボタンをクリックする
  <span className="kw-then">Then</span>  「在庫切れ」のメッセージが表示される
  <span className="kw-then">And</span>   カートに商品は追加されない</code></pre>
          </div>
          
          <p className="mt-4 font-bold text-accent-red">❌ 悪いシナリオ（技術的すぎる）:</p>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
            <pre><code><span className="cm"># NG例: 実装の詳細を含めてはいけない</span>
<span className="kw-scen">Scenario:</span> 在庫切れ
  <span className="kw-given">Given</span> データベースのproduct_inventoryテーブルに quantity=0 のレコードがある
  <span className="kw-when">When</span>  GET /api/products/123/add-to-cart へリクエストを送信する
  <span className="kw-then">Then</span>  HTTPレスポンスが 409 Conflict で返る</code></pre>
          </div>
        </section>

        <section id="8-実装ステップバイステップ">
          <div className="section-header">
            <span className="section-num">08</span>
            <h2>8. 実装ステップバイステップ</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">Step 1: プロジェクトセットアップ（Python + Behave の例）</h3>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">bash</span></div>
            <pre><code>{`# 1. インストール
pip install behave

# 2. ディレクトリ構造を作成
mkdir bdd_sample
cd bdd_sample
mkdir features
mkdir features/steps

# 最終的なディレクトリ構造:
# bdd_sample/
# ├── features/
# │   ├── login.feature        ← Gherkinシナリオ
# │   └── steps/
# │       └── login_steps.py   ← ステップ定義
# └── environment.py           ← フック設定`}</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">Step 2: フィーチャーファイルの作成</h3>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
            <pre><code><span className="cm"># features/login.feature</span>

<span className="kw-feat">Feature:</span> ユーザーログイン
  Webアプリケーションのユーザーとして
  安全にログインしたい
  そうすることで個人アカウントにアクセスできる

  <span className="kw-scen">Background:</span>
    <span className="kw-given">Given</span> ログインページを開いている

  <span className="kw">@smoke @positive</span>
  <span className="kw-scen">Scenario:</span> 正常なログイン
    <span className="kw-when">When</span>  有効なメールアドレス <span className="str">"user@example.com"</span> を入力する
    <span className="kw-given">And</span>   正しいパスワード <span className="str">"Password123!"</span> を入力する
    <span className="kw-given">And</span>   「ログイン」ボタンをクリックする
    <span className="kw-then">Then</span>  ダッシュボードページに遷移する
    <span className="kw-given">And</span>   「ようこそ、田中さん」と表示される

  <span className="kw">@negative</span>
  <span className="kw-scen">Scenario:</span> 誤ったパスワードでのログイン失敗
    <span className="kw-when">When</span>  有効なメールアドレス <span className="str">"user@example.com"</span> を入力する
    <span className="kw-given">And</span>   誤ったパスワード <span className="str">"WrongPassword"</span> を入力する
    <span className="kw-given">And</span>   「ログイン」ボタンをクリックする
    <span className="kw-then">Then</span>  エラーメッセージ「パスワードが正しくありません」が表示される
    <span className="kw-given">And</span>   ログインページに留まる

  <span className="kw">@security</span>
  <span className="kw-scen">Scenario Outline:</span> 連続失敗によるロックアウト
    <span className="kw-when">When</span>  <span className="str">"&lt;回数&gt;"</span> 回連続してログインに失敗する
    <span className="kw-then">Then</span>  <span className="str">"&lt;結果&gt;"</span> となる

    <span className="kw-scen">Examples:</span>
      | 回数 | 結果                               |
      | 3    | 警告メッセージが表示される         |
      | 5    | アカウントが15分ロックされる       |
      | 6    | ロック状態のエラーメッセージが出る |</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">Step 3: ステップ定義の実装（Python）</h3>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">python</span></div>
            <pre><code>{`# features/steps/login_steps.py

from behave import given, when, then
from selenium.webdriver.common.by import By

# ─── Given ステップ ──────────────────────────────
@given('ログインページを開いている')
def step_open_login_page(context):
    """
    ブラウザでログインページを開く
    context: Behaveが提供するコンテキストオブジェクト
    """
    context.browser.get("https://example.com/login")
    assert "ログイン" in context.browser.title

# ─── When ステップ ──────────────────────────────
@when('有効なメールアドレス "{email}" を入力する')
def step_input_email(context, email):
    email_field = context.browser.find_element(By.ID, "email")
    email_field.clear()
    email_field.send_keys(email)

@when('正しいパスワード "{password}" を入力する')
def step_input_password(context, password):
    password_field = context.browser.find_element(By.ID, "password")
    password_field.clear()
    password_field.send_keys(password)

@when('「ログイン」ボタンをクリックする')
def step_click_login(context):
    login_btn = context.browser.find_element(By.ID, "login-btn")
    login_btn.click()

# ─── Then ステップ ──────────────────────────────
@then('ダッシュボードページに遷移する')
def step_navigate_to_dashboard(context):
    assert "dashboard" in context.browser.current_url

@then('「ようこそ、{name}さん」と表示される')
def step_show_welcome_message(context, name):
    welcome_msg = context.browser.find_element(By.CLASS_NAME, "welcome-message")
    assert f"ようこそ、{name}さん" in welcome_msg.text

@then('エラーメッセージ「{message}」が表示される')
def step_show_error_message(context, message):
    error_div = context.browser.find_element(By.CLASS_NAME, "error-message")
    assert message in error_div.text

@then('ログインページに留まる')
def step_stay_on_login_page(context):
    assert "login" in context.browser.current_url`}</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">Step 4: フックの設定（environment.py）</h3>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">python</span></div>
            <pre><code>{`# environment.py

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def before_all(context):
    """全テスト開始前に一度だけ実行"""
    print("テストスイート開始")

def before_scenario(context, scenario):
    """各シナリオ開始前に実行"""
    options = Options()
    options.add_argument("--headless")  # CIでヘッドレス実行
    options.add_argument("--no-sandbox")
    context.browser = webdriver.Chrome(options=options)
    context.browser.implicitly_wait(10)

def after_scenario(context, scenario):
    """各シナリオ終了後に実行"""
    if scenario.status == "failed":
        # スクリーンショットを保存
        context.browser.save_screenshot(
            f"screenshots/{scenario.name}.png"
        )
    context.browser.quit()

def after_all(context):
    """全テスト終了後に一度だけ実行"""
    print("テストスイート完了")`}</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">Step 5: テストの実行</h3>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">bash</span></div>
            <pre><code>{`# 全テスト実行
behave

# スモークテストのみ実行
behave --tags @smoke

# 特定のフィーチャーファイルのみ実行
behave features/login.feature

# HTML形式のレポートを生成
behave -f html -o reports/report.html

# JSON形式のレポートを生成
behave -f json -o reports/report.json

# 詳細出力
behave --verbose

# ドライラン（実行せずにステップを確認）
behave --dry-run`}</code></pre>
          </div>
          
          <h3 className="text-lg font-bold mt-8 mb-2">TypeScript / JavaScript（Cucumber + Playwright）での実装</h3>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">typescript</span></div>
            <pre><code>{`// features/login.feature と同じ内容を使用

// step_definitions/login.steps.ts
import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Before(async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});

Given('ログインページを開いている', async () => {
  await page.goto('https://example.com/login');
  await expect(page).toHaveTitle(/ログイン/);
});

When('有効なメールアドレス {string} を入力する', async (email: string) => {
  await page.fill('[data-testid="email-input"]', email);
});

When('正しいパスワード {string} を入力する', async (password: string) => {
  await page.fill('[data-testid="password-input"]', password);
});

When('「ログイン」ボタンをクリックする', async () => {
  await page.click('[data-testid="login-btn"]');
});

Then('ダッシュボードページに遷移する', async () => {
  await expect(page).toHaveURL(/dashboard/);
});

Then('「ようこそ、{string}さん」と表示される', async (name: string) => {
  await expect(page.locator('[data-testid="welcome-msg"]'))
    .toContainText(\`ようこそ、\${name}さん\`);
});`}</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2">Java / Cucumber + Selenium での実装</h3>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">java</span></div>
            <pre><code>{`// features/login.feature と同じ内容を使用

// src/test/java/steps/LoginSteps.java
import io.cucumber.java.ja.*;
import io.cucumber.java.Before;
import io.cucumber.java.After;
import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import static org.junit.Assert.*;

public class LoginSteps {
    private WebDriver driver;

    @Before
    public void setUp() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        driver = new ChromeDriver(options);
        driver.manage().timeouts()
              .implicitlyWait(Duration.ofSeconds(10));
    }

    @After
    public void tearDown() {
        if (driver != null) driver.quit();
    }

    @前提("ログインページを開いている")
    public void ログインページを開いている() {
        driver.get("https://example.com/login");
        assertTrue(driver.getTitle().contains("ログイン"));
    }

    @もし("有効なメールアドレス {string} を入力する")
    public void 有効なメールアドレスを入力する(String email) {
        driver.findElement(By.id("email")).sendKeys(email);
    }

    @ならば("ダッシュボードページに遷移する")
    public void ダッシュボードページに遷移する() {
        assertTrue(driver.getCurrentUrl().contains("dashboard"));
    }
}`}</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2">C# / SpecFlow での実装</h3>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">csharp</span></div>
            <pre><code>{`// features/login.feature と同じ内容を使用

// StepDefinitions/LoginSteps.cs
using TechTalk.SpecFlow;
using Microsoft.Playwright;
using FluentAssertions;

[Binding]
public class LoginSteps
{
    private IPage _page = null!;
    private IBrowser _browser = null!;

    [BeforeScenario]
    public async Task SetUp()
    {
        var playwright = await Playwright.CreateAsync();
        _browser = await playwright.Chromium.LaunchAsync(
            new() { Headless = true });
        _page = await _browser.NewPageAsync();
    }

    [AfterScenario]
    public async Task TearDown()
    {
        await _browser.CloseAsync();
    }

    [Given(@"ログインページを開いている")]
    public async Task ログインページを開いている()
    {
        await _page.GotoAsync("https://example.com/login");
    }

    [When(@"有効なメールアドレス ""(.*)"" を入力する")]
    public async Task 有効なメールアドレスを入力する(string email)
    {
        await _page.FillAsync("[data-testid='email-input']", email);
    }

    [Then(@"ダッシュボードページに遷移する")]
    public async Task ダッシュボードページに遷移する()
    {
        _page.Url.Should().Contain("dashboard");
    }
}`}</code></pre>
          </div>
        </section>

        <section id="9-主要bddツール比較-2025年">
          <div className="section-header">
            <span className="section-num">09</span>
            <h2>9. 主要BDDツール比較 2025年</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">ツール一覧</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ツール</th>
                  <th>言語</th>
                  <th>構文</th>
                  <th>特徴</th>
                  <th>推奨場面</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Cucumber</strong></td>
                  <td>Java, JS/TS, Ruby, Python, Go</td>
                  <td>Gherkin</td>
                  <td>最多採用・最大コミュニティ</td>
                  <td>多言語チーム・汎用</td>
                </tr>
                <tr>
                  <td><strong>SpecFlow</strong></td>
                  <td>C# (.NET)</td>
                  <td>Gherkin</td>
                  <td>Visual Studio統合が優秀</td>
                  <td>.NET/Microsoftスタック</td>
                </tr>
                <tr>
                  <td><strong>Behave</strong></td>
                  <td>Python</td>
                  <td>Gherkin</td>
                  <td>シンプル・Pythonネイティブ</td>
                  <td>Pythonチーム</td>
                </tr>
                <tr>
                  <td><strong>JBehave</strong></td>
                  <td>Java</td>
                  <td>BDD narrative</td>
                  <td>Java特化・高カスタマイズ性</td>
                  <td>Javaエンタープライズ</td>
                </tr>
                <tr>
                  <td><strong>Behat</strong></td>
                  <td>PHP</td>
                  <td>Gherkin</td>
                  <td>Symfony/Laravel対応</td>
                  <td>PHPプロジェクト</td>
                </tr>
                <tr>
                  <td><strong>Pytest-BDD</strong></td>
                  <td>Python</td>
                  <td>Gherkin</td>
                  <td>pytestと統合</td>
                  <td>Python + pytest使用中</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">詳細比較</h3>
          
          <div className="mt-4">
            <p><strong>Cucumber（最推奨・汎用）</strong></p>
            <div className="code-block mt-2">
              <pre><code>{`長所:
  ✅ 最大のコミュニティ・豊富なプラグイン
  ✅ Java, JS/TS, Ruby, Python等多言語対応
  ✅ Gherkin構文で統一されている
  ✅ CI/CDツールとの統合が容易
  ✅ Cucumber Reportsで優れた可視化

短所:
  ❌ セットアップに時間がかかる
  ❌ 大規模スイートでメンテナンスが複雑化
  ❌ 並列実行にはCucumber Cloud（有料）が必要

採用実績: Booking.com, Dell, ASOS`}</code></pre>
            </div>
          </div>

          <div className="mt-4">
            <p><strong>SpecFlow（.NETのデファクト）</strong></p>
            <div className="code-block mt-2">
              <pre><code>{`長所:
  ✅ Visual Studio・Azure DevOpsとシームレスに統合
  ✅ .NETエコシステムに特化した最適化
  ✅ NUnit/xUnit/MSTestと連携
  ✅ Living Documentation生成機能

短所:
  ❌ .NET以外のプロジェクトには不向き
  ❌ 高度な機能はSpecFlow+（有料）が必要

採用実績: 金融・医療系の.NETプロジェクト多数`}</code></pre>
            </div>
          </div>

          <div className="mt-4">
            <p><strong>Behave（Pythonの最適解）</strong></p>
            <div className="code-block mt-2">
              <pre><code>{`長所:
  ✅ セットアップが最もシンプル
  ✅ pytestなどPythonエコシステムと親和性高
  ✅ Gherkin構文をそのまま使用
  ✅ Seleniumとの組み合わせが容易

短所:
  ❌ Cucumber比でコミュニティが小さい
  ❌ 並列実行サポートが限定的

採用実績: Django, Flask, FastAPIプロジェクト`}</code></pre>
            </div>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">2025年のBDDツール市場動向</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>BDDツール市場規模（2024年）: <strong>11億ドル</strong></li>
            <li>予測市場規模（2033年）: <strong>25億ドル</strong>（CAGR ~12.5%）</li>
            <li>最も人気のツール（2025年）: <strong>Cucumber</strong> がシェア1位</li>
            <li>新興トレンド: <strong>AI支援BDDシナリオ生成</strong>（GitHub Copilot等）</li>
          </ul>
        </section>

        <section id="10-cicdパイプラインへの統合">
          <div className="section-header">
            <span className="section-num">10</span>
            <h2>10. CI/CDパイプラインへの統合</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">GitHub Actions（Python / Behave の例）</h3>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">yaml</span></div>
            <pre><code>{`# .github/workflows/bdd_tests.yml

name: BDD Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  bdd-tests:
    runs-on: ubuntu-latest

    steps:
      - name: コードをチェックアウト
        uses: actions/checkout@v4

      - name: Python のセットアップ
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
          cache: 'pip'

      - name: 依存関係のインストール
        run: |
          pip install behave selenium
          pip install webdriver-manager

      - name: Chrome のセットアップ
        uses: browser-actions/setup-chrome@v1

      - name: BDDテストの実行
        run: |
          behave --tags @smoke \\
                 -f json -o reports/report.json \\
                 -f html -o reports/report.html
        env:
          BASE_URL: \${{ secrets.STAGING_URL }}

      - name: テストレポートのアップロード
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: bdd-reports
          path: reports/
          retention-days: 30

      - name: テスト失敗時のスクリーンショット
        uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: failure-screenshots
          path: screenshots/`}</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">GitHub Actions（TypeScript / Cucumber + Playwright の例）</h3>
          <div className="code-block mt-2">
            <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">yaml</span></div>
            <pre><code>{`# .github/workflows/bdd_playwright.yml

name: BDD E2E Tests

on: [push, pull_request]

jobs:
  bdd-e2e:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'npm'

      - name: 依存関係のインストール
        run: npm ci

      - name: Playwright のインストール
        run: npx playwright install --with-deps chromium

      - name: BDDテストの実行（スモークテストのみ）
        run: npx cucumber-js --tags "@smoke" --format json:reports/results.json

      - name: フルBDDスイート（mainブランチのみ）
        if: github.ref == 'refs/heads/main'
        run: npx cucumber-js --parallel 4

      - name: レポートのアップロード
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: cucumber-report
          path: reports/`}</code></pre>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">パイプライン構成の推奨パターン</h3>
          <div className="code-block mt-2">
            <pre><code>{`コードプッシュ
    ↓
[Stage 1] ユニットテスト（< 2分）
    ↓
[Stage 2] BDDスモークテスト（< 10分）@smoke タグ
    ↓  PRがブロックされる
PRマージ
    ↓
[Stage 3] BDDフルスイート（< 30分）全タグ
    ↓
[Stage 4] 本番デプロイ`}</code></pre>
          </div>
        </section>

        <section id="11-ベストプラクティスとアンチパターン">
          <div className="section-header">
            <span className="section-num">11</span>
            <h2>11. ベストプラクティスとアンチパターン</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">✅ ベストプラクティス</h3>
          
          <div className="mt-4">
            <p><strong>1. ユーザーの言葉でシナリオを書く</strong></p>
            <div className="code-block mt-2">
              <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
              <pre><code><span className="cm"># ✅ ビジネス言語で記述</span>
<span className="kw-scen">Scenario:</span> 会員割引の適用
  <span className="kw-given">Given</span> ユーザーがプレミアム会員である
  <span className="kw-when">When</span>  ¥10,000の商品を購入する
  <span className="kw-then">Then</span>  合計金額が ¥9,000 になる（10%割引）</code></pre>
            </div>
          </div>

          <div className="mt-4">
            <p><strong>2. 1シナリオ = 1つの振る舞いに限定する</strong></p>
            <div className="code-block mt-2">
              <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
              <pre><code><span className="cm"># ✅ 1つの振る舞いのみ</span>
<span className="kw-scen">Scenario:</span> パスワードリセットメールの送信
  <span className="kw-given">Given</span> 登録済みのメールアドレスがある
  <span className="kw-when">When</span>  「パスワードを忘れた」からメールアドレスを入力する
  <span className="kw-then">Then</span>  リセット用メールが5分以内に届く

<span className="cm"># ❌ 複数の振る舞いを混在させない</span>
<span className="kw-scen">Scenario:</span> ログインとプロフィール更新と注文
  <span className="kw-given">Given</span> ユーザーがいる
  <span className="kw-when">When</span>  ログインしてプロフィールを変更して商品を注文する
  <span className="kw-then">Then</span>  全部うまくいく</code></pre>
            </div>
          </div>

          <div className="mt-4">
            <p><strong>3. 宣言的に書く（実装詳細を排除）</strong></p>
            <div className="code-block mt-2">
              <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
              <pre><code><span className="cm"># ✅ 宣言的（ビジネスの言葉）</span>
<span className="kw-when">When</span>  ユーザーが商品を購入する

<span className="cm"># ❌ 命令的（技術の言葉）</span>
<span className="kw-when">When</span>  ユーザーが /api/orders POST リクエストを送信し
      ステータスコード 201 が返る</code></pre>
            </div>
          </div>

          <div className="mt-4">
            <p><strong>4. Background を適切に使う</strong></p>
            <div className="code-block mt-2">
              <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
              <pre><code><span className="cm"># ✅ 共通前提はBackgroundに</span>
<span className="kw-scen">Background:</span>
  <span className="kw-given">Given</span> システムに以下の商品がある:
    | 商品ID | 商品名       | 価格  |
    | P001   | ノートPC     | 80000 |
    | P002   | マウス       | 3000  |</code></pre>
            </div>
          </div>

          <div className="mt-4">
            <p><strong>5. タグで整理する</strong></p>
            <div className="code-block mt-2">
              <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
              <pre><code><span className="kw">@smoke</span>       <span className="cm"># 毎コミットで実行</span>
<span className="kw">@regression</span>  <span className="cm"># PRマージ後に実行</span>
<span className="kw">@slow</span>        <span className="cm"># 週次で実行</span>
<span className="kw">@wip</span>         <span className="cm"># 開発中（CIでは除外）</span></code></pre>
            </div>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2">❌ アンチパターン</h3>
          
          <div className="mt-4">
            <p><strong>1. 実装の詳細をGherkinに書かない</strong></p>
            <div className="code-block mt-2">
              <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
              <pre><code><span className="cm"># ❌ NG: SQLクエリをシナリオに含める</span>
<span className="kw-given">Given</span> SQLで "SELECT * FROM users WHERE id=1" を実行する

<span className="cm"># ✅ OK: ビジネスロジックを書く</span>
<span className="kw-given">Given</span> ユーザーID「1」のアカウントが存在する</code></pre>
            </div>
          </div>

          <div className="mt-4">
            <p><strong>2. 過度に技術的なアサーション</strong></p>
            <div className="code-block mt-2">
              <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
              <pre><code><span className="cm"># ❌ NG: HTTPステータスを検証</span>
<span className="kw-then">Then</span> HTTPレスポンスコードが 200 である

<span className="cm"># ✅ OK: ユーザーが見る結果を検証</span>
<span className="kw-then">Then</span> 注文完了画面が表示される</code></pre>
            </div>
          </div>

          <div className="mt-4">
            <p><strong>3. シナリオ間の依存</strong></p>
            <div className="code-block mt-2">
              <div className="code-header"><div className="code-dots"><span/><span/><span/></div><span className="code-lang">gherkin</span></div>
              <pre><code><span className="cm"># ❌ NG: シナリオAの後でしか動かない</span>
<span className="kw-scen">Scenario:</span> 2. 商品をカートから削除する
  <span className="cm"># ← シナリオ1「カートに追加」が先に実行されている前提</span>

<span className="cm"># ✅ OK: 各シナリオが独立している</span>
<span className="kw-scen">Scenario:</span> カートから商品を削除する
  <span className="kw-given">Given</span> カートに「ノートPC」が追加されている
  <span className="kw-when">When</span>  「ノートPC」の「削除」をクリックする
  <span className="kw-then">Then</span>  カートから「ノートPC」が消える</code></pre>
            </div>
          </div>

          <div className="mt-4">
            <p><strong>4. メンテナンスされないシナリオの放置</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>古くなったシナリオは削除または更新する</li>
              <li>@wipタグで開発中のシナリオを管理する</li>
              <li>月次でシナリオを棚卸しする</li>
            </ul>
          </div>
        </section>

        <section id="12-bdd導入のロードマップ">
          <div className="section-header">
            <span className="section-num">12</span>
            <h2>12. BDD導入のロードマップ</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">フェーズ別ロードマップ（3ヶ月計画）</h3>
          
          <div className="mt-4">
            <p><strong>Month 1: 基礎確立</strong></p>
            <div className="code-block mt-2">
              <pre><code>{`Week 1-2:
  □ BDDの概念をチーム全員でトレーニング
  □ スリーアミーゴスのやり方を学ぶ
  □ Gherkin記述の練習（既存機能のシナリオ化）

Week 3-4:
  □ ツール選定・環境構築
  □ パイロットフィーチャーの選定（1機能）
  □ 初めてのスリーアミーゴスセッション`}</code></pre>
            </div>
          </div>

          <div className="mt-4">
            <p><strong>Month 2: 実践導入</strong></p>
            <div className="code-block mt-2">
              <pre><code>{`Week 5-6:
  □ パイロットフィーチャーのシナリオ実装
  □ ステップ定義のコーディング
  □ ローカル環境でのテスト実行確認

Week 7-8:
  □ CI/CDパイプラインへの統合
  □ レポーティングの設定
  □ チームフィードバック収集・改善`}</code></pre>
            </div>
          </div>

          <div className="mt-4">
            <p><strong>Month 3: スケールアップ</strong></p>
            <div className="code-block mt-2">
              <pre><code>{`Week 9-10:
  □ 複数フィーチャーへのBDD拡大
  □ スモーク / リグレッション タグ整理
  □ 並列実行の設定

Week 11-12:
  □ Living Documentation の公開
  □ メトリクスの測定（カバレッジ・実行時間）
  □ 次のクォーターの計画策定`}</code></pre>
            </div>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">成功の測定指標</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>KPI</th>
                  <th>基準値</th>
                  <th>目標値（3ヶ月後）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BDDシナリオ数</td>
                  <td>0</td>
                  <td>50+</td>
                </tr>
                <tr>
                  <td>シナリオの自動化率</td>
                  <td>0%</td>
                  <td>70%以上</td>
                </tr>
                <tr>
                  <td>本番バグ数</td>
                  <td>基準値測定</td>
                  <td>20%削減</td>
                </tr>
                <tr>
                  <td>スリーアミーゴス実施率</td>
                  <td>0%</td>
                  <td>80%以上のストーリーで実施</td>
                </tr>
                <tr>
                  <td>CI実行時間（スモーク）</td>
                  <td>N/A</td>
                  <td>10分以内</td>
                </tr>
                <tr>
                  <td>Living Documentation更新率</td>
                  <td>N/A</td>
                  <td>自動更新</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="13-2025年のbddトレンドと統計">
          <div className="section-header">
            <span className="section-num">13</span>
            <h2>13. 2025年のBDDトレンドと統計</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">採用統計</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>統計</th>
                  <th>数値</th>
                  <th>出典</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BDD採用率（アジャイルチーム）</td>
                  <td><strong>26%</strong></td>
                  <td>State of Testing Report 2024 (PractiTest)</td>
                </tr>
                <tr>
                  <td>TDD/BDDの組み込み率（組織全体）</td>
                  <td><strong>67%</strong></td>
                  <td>World Quality Report 2024-25</td>
                </tr>
                <tr>
                  <td>BDD実践チーム内のTDD併用率</td>
                  <td><strong>58%</strong></td>
                  <td>BDD Practitioner Survey</td>
                </tr>
                <tr>
                  <td>BDDチームのデプロイ頻度</td>
                  <td><strong>一般チームの約2.5倍</strong></td>
                  <td>Cucumber社調査</td>
                </tr>
                <tr>
                  <td>BDDツール市場規模（2024年）</td>
                  <td><strong>11億ドル</strong></td>
                  <td>Verified Market Reports</td>
                </tr>
                <tr>
                  <td>BDDツール市場予測（2033年）</td>
                  <td><strong>25億ドル</strong></td>
                  <td>同上</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">2025年の主要トレンド</h3>
          
          <div className="mt-4">
            <p><strong>1. AI支援BDDシナリオ生成</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>GitHub Copilot、ChatGPT等でGherkinシナリオを自動生成</li>
              <li>要件文書からシナリオを一括変換するツールが登場</li>
              <li>ただし「人間のレビュー」は依然として必須</li>
            </ul>
          </div>

          <div className="mt-4">
            <p><strong>2. ノーコード/ローコードBDD</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>ACCELQ等のプラットフォームでコーディング不要のBDD実装</li>
              <li>ビジネス担当者が直接シナリオを管理できる環境</li>
            </ul>
          </div>

          <div className="mt-4">
            <p><strong>3. Living Documentation の高度化</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pickles、SpecFlow+LivingDoc等でリアルタイム文書化</li>
              <li>テスト結果と仕様書が自動同期</li>
            </ul>
          </div>

          <div className="mt-4">
            <p><strong>4. マイクロサービス対応BDD</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>コントラクトテスト（Pact）とBDDの組み合わせ</li>
              <li>サービス間の振る舞いをGherkinで記述</li>
            </ul>
          </div>
        </section>

        <section id="14-全参照url一覧">
          <div className="section-header">
            <span className="section-num">14</span>
            <h2>14. 全参照URL一覧</h2>
          </div>
          
          <h3 className="text-lg font-bold mt-4 mb-2">ISTQB公式</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>ISTQB公式サイト</td><td><a href="https://istqb.org/" className="ref-url">https://istqb.org/</a></td></tr>
                <tr><td>CTFL v4.0 詳細ページ</td><td><a href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/" className="ref-url">https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/</a></td></tr>
                <tr><td>CTFL v4.0.1 シラバスPDF</td><td><a href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf" className="ref-url">https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf</a></td></tr>
                <tr><td>ISTQBグロッサリー</td><td><a href="https://glossary.istqb.org/en_US/search?term=" className="ref-url">https://glossary.istqb.org/en_US/search?term=</a></td></tr>
                <tr><td>JSTQB（日本語版）</td><td><a href="https://jstqb.jp/" className="ref-url">https://jstqb.jp/</a></td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">BDD 基礎・概念</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Wikipedia — Behavior-driven development</td><td><a href="https://en.wikipedia.org/wiki/Behavior-driven_development" className="ref-url">https://en.wikipedia.org/wiki/Behavior-driven_development</a></td></tr>
                <tr><td>Cucumber公式 — BDD</td><td><a href="https://cucumber.io/docs/bdd/" className="ref-url">https://cucumber.io/docs/bdd/</a></td></tr>
                <tr><td>monday.com — BDD Essential Guide 2026</td><td><a href="https://monday.com/blog/rnd/behavior-driven-development/" className="ref-url">https://monday.com/blog/rnd/behavior-driven-development/</a></td></tr>
                <tr><td>qase.io — A beginner's guide to BDD</td><td><a href="https://qase.io/blog/behavior-driven-development/" className="ref-url">https://qase.io/blog/behavior-driven-development/</a></td></tr>
                <tr><td>Synoverge — What is BDD? Complete Guide</td><td><a href="https://www.synoverge.com/blog/what-is-bdd-complete-guide-to-behavior-driven-development/" className="ref-url">https://www.synoverge.com/blog/what-is-bdd-complete-guide-to-behavior-driven-development/</a></td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">Gherkin 言語</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Cucumber — Gherkin Reference（公式）</td><td><a href="https://cucumber.io/docs/gherkin/reference/" className="ref-url">https://cucumber.io/docs/gherkin/reference/</a></td></tr>
                <tr><td>BrowserStack — Gherkin and its role in BDD</td><td><a href="https://www.browserstack.com/guide/gherkin-and-its-role-bdd-scenarios" className="ref-url">https://www.browserstack.com/guide/gherkin-and-its-role-bdd-scenarios</a></td></tr>
                <tr><td>Testsigma — BDD with Gherkin</td><td><a href="https://testsigma.com/blog/behavior-driven-development-bdd-with-gherkin/" className="ref-url">https://testsigma.com/blog/behavior-driven-development-bdd-with-gherkin/</a></td></tr>
                <tr><td>Tutorialspoint — BDD Gherkin</td><td><a href="https://www.tutorialspoint.com/behavior_driven_development/behavior_driven_development_gherkin.htm" className="ref-url">https://www.tutorialspoint.com/behavior_driven_development/behavior_driven_development_gherkin.htm</a></td></tr>
                <tr><td>Jignect — Understanding BDD & Gherkin</td><td><a href="https://jignect.tech/understanding-the-bdd-gherkin-language-main-rules-for-bdd-ui-scenarios/" className="ref-url">https://jignect.tech/understanding-the-bdd-gherkin-language-main-rules-for-bdd-ui-scenarios/</a></td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">ツール・フレームワーク</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>TestQuality — Gherkin BDD Cucumber Guide</td><td><a href="https://testquality.com/gherkin-bdd-cucumber-guide-to-behavior-driven-development/" className="ref-url">https://testquality.com/gherkin-bdd-cucumber-guide-to-behavior-driven-development/</a></td></tr>
                <tr><td>SoftwareTestingHelp — BDD Framework Tutorial</td><td><a href="https://www.softwaretestinghelp.com/bdd-framework/" className="ref-url">https://www.softwaretestinghelp.com/bdd-framework/</a></td></tr>
                <tr><td>SoftwareTestingHelp — BDD Tools</td><td><a href="https://www.softwaretestinghelp.com/behavior-driven-development-bdd-tools/" className="ref-url">https://www.softwaretestinghelp.com/behavior-driven-development-bdd-tools/</a></td></tr>
                <tr><td>ACCELQ — Top 13 BDD Testing Tools 2026</td><td><a href="https://www.accelq.com/blog/bdd-testing-tools/" className="ref-url">https://www.accelq.com/blog/bdd-testing-tools/</a></td></tr>
                <tr><td>TheCTOClub — 13 Best BDD Tools 2026</td><td><a href="https://thectoclub.com/tools/best-bdd-testing-tools/" className="ref-url">https://thectoclub.com/tools/best-bdd-testing-tools/</a></td></tr>
                <tr><td>Test Automation Tools — Top 5 BDD Tools</td><td><a href="https://testautomationtools.dev/bdd-testing-tools/" className="ref-url">https://testautomationtools.dev/bdd-testing-tools/</a></td></tr>
                <tr><td>Qodex — SpecFlow vs Cucumber</td><td><a href="https://qodex.ai/blog/specflow-vs-cucumber" className="ref-url">https://qodex.ai/blog/specflow-vs-cucumber</a></td></tr>
                <tr><td>Testsigma — SpecFlow vs Cucumber</td><td><a href="https://testsigma.com/blog/specflow-vs-cucumber/" className="ref-url">https://testsigma.com/blog/specflow-vs-cucumber/</a></td></tr>
                <tr><td>Medium — Best BDD Framework 2024</td><td><a href="https://ambahera.medium.com/best-behavior-driven-development-bdd-framework-93089c377700" className="ref-url">https://ambahera.medium.com/best-behavior-driven-development-bdd-framework-93089c377700</a></td></tr>
                <tr><td>QAlified — What is a BDD framework</td><td><a href="https://qalified.com/blog/what-is-bdd-framework/" className="ref-url">https://qalified.com/blog/what-is-bdd-framework/</a></td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">統計・トレンド</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Capgemini — World Quality Report 2024-25</td><td><a href="https://www.capgemini.com/insights/research-library/world-quality-report-2024-25/" className="ref-url">https://www.capgemini.com/insights/research-library/world-quality-report-2024-25/</a></td></tr>
                <tr><td>Test Evolve — BDD Market Size</td><td><a href="https://testevolve.com/" className="ref-url">https://testevolve.com/</a></td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">ベストプラクティス</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>タイトル</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Cucumber — BDD Anti-patterns</td><td><a href="https://cucumber.io/docs/guides/anti-patterns/" className="ref-url">https://cucumber.io/docs/guides/anti-patterns/</a></td></tr>
                <tr><td>Cucumber — Writing Good Gherkin</td><td><a href="https://cucumber.io/docs/bdd/better-gherkin/" className="ref-url">https://cucumber.io/docs/bdd/better-gherkin/</a></td></tr>
                <tr><td>automationpanda.com — Is BDD Dying? (2025)</td><td><a href="https://automationpanda.com/2025/03/06/is-bdd-dying/" className="ref-url">https://automationpanda.com/2025/03/06/is-bdd-dying/</a></td></tr>
                <tr><td>303software.com — BDD Reality Check 2025</td><td><a href="https://303software.com/behavior-driven-testing-a-cucumber-test-automation-framework" className="ref-url">https://303software.com/behavior-driven-testing-a-cucumber-test-automation-framework</a></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="まとめ">
          <div className="section-header">
            <h2>まとめ</h2>
          </div>
          
          <p>BDDは単なるテスト手法ではなく、<strong>チーム全体のコミュニケーションを変革する開発文化</strong>です。</p>
          <div className="code-block mt-4">
            <pre><code>{`BDD成功の方程式:

  スリーアミーゴス（対話）
    × Gherkin（共通言語）
      × 自動化（継続的実行）
        = 高品質なソフトウェアの継続的デリバリー`}</code></pre>
          </div>

          <div className="table-wrapper mt-4">
            <table>
              <thead>
                <tr>
                  <th>段階</th>
                  <th>やること</th>
                  <th>得られるもの</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>今日</td><td>スリーアミーゴスを1回試す</td><td>要件の曖昧さを発見</td></tr>
                <tr><td>今週</td><td>1つのシナリオをGherkinで書く</td><td>共通言語の感覚を掴む</td></tr>
                <tr><td>今月</td><td>1フィーチャーをCI/CDで自動実行</td><td>リビングドキュメントの誕生</td></tr>
                <tr><td>3ヶ月後</td><td>チーム全体でBDDを実践</td><td>デプロイ頻度2倍を目指す</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted">
            <p>本ガイドは ISTQB CTFL v4.0.1 に準拠し、最終更新：2026年4月6日 の時点の情報を反映しています。</p>
            <p className="mt-2">© 2025-2026 — BDD is not just testing. It's a conversation that never stops.</p>
          </div>
        </section>
      </main>
    </>
  );
}
