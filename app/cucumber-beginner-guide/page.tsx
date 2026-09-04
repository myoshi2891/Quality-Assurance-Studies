import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './cucumber-beginner-guide.css';

const DIAGRAM_01 = `flowchart LR
A["Gherkinのステップ(自然言語)"] -->|"マッチング"| B["Step Definition(コード)"]
B -->|"操作・呼び出し"| C["テスト対象システム"]
C -->|"結果を返す"| B
B -->|"成功/失敗を報告"| D["テストレポート"]`;

const DIAGRAM_02 = `flowchart LR
A["Discovery:何を作るべきか会話する"] --> B["Formulation:Gherkinで文書化する"]
B --> C["Automation:テストとして実装し開発を進める"]
C -->|"次のUser Storyへ"| A`;

const DIAGRAM_03 = `flowchart TD
A["Scenario Outline(テンプレート)"] --> B["Examplesテーブル 1行目"]
A --> C["Examplesテーブル 2行目"]
A --> D["Examplesテーブル 3行目"]
B --> E["具体的なScenarioとして実行1"]
C --> F["具体的なScenarioとして実行2"]
D --> G["具体的なScenarioとして実行3"]`;

const DIAGRAM_04 = `flowchart TD
A["BeforeAll:全シナリオの前に一度"] --> B["Before:各シナリオの前"]
B --> C["Background:各シナリオの前"]
C --> D["BeforeStep:各ステップの前"]
D --> E["ステップ実行 Given/When/Then"]
E --> F["AfterStep:各ステップの後"]
F --> G{"次のステップはあるか"}
G -->|"あり"| D
G -->|"なし"| H["After:各シナリオの後"]
H --> I["AfterAll:全シナリオの後に一度"]`;

const DIAGRAM_05 = `flowchart TD
A["ステップを実行"] --> B{"一致するステップ定義は?"}
B -->|"見つからない"| C["Undefined:未定義"]
B -->|"複数見つかる"| D["Ambiguous:曖昧"]
B -->|"1つ見つかる"| E["ステップ定義を実行"]
E --> F{"実行結果は?"}
F -->|"エラーなし"| G["Success:成功"]
F -->|"pendingを呼ぶ"| H["Pending:保留"]
F -->|"エラー発生"| I["Failed:失敗"]
C --> J["以降のステップはSkipped扱い"]
D --> J
H --> J
I --> J`;

const DIAGRAM_06 = `flowchart LR
A["Featureファイルにシナリオを書く"] --> B["Cucumberを実行:Undefined"]
B --> C["スニペットからステップ定義を作成:Pending"]
C --> D["ステップ定義に最低限の実装を追加:Failing"]
D --> E["プロダクションコードを実装:Passing"]
E --> F["リファクタリング"]
F -->|"次のシナリオへ"| A`;

const DIAGRAM_07 = `flowchart LR
A["コードをコミット"] --> B["CIサーバーがビルドを開始"]
B --> C["ビルドツール経由でCucumberを実行"]
C --> D{"終了ステータスは0か"}
D -->|"はい:全シナリオ成功"| E["ビルド成功として扱う"]
D -->|"いいえ:1つ以上失敗"| F["ビルド失敗として扱う"]
C --> G["JUnit/HTMLレポートを出力"]
G --> H["CIダッシュボードでレポートを閲覧"]`;

export default function CucumberBeginnerGuidePage() {
  return (
    <div className="cucumber-beginner-page">
      <div className="layout">
        {/* ============ SIDEBAR ============ */}
        <NavBar />

        {/* ============ MAIN CONTENT ============ */}
        <div className="content">
          <header className="hero">
            <div className="eyebrow">Beginner Guide / BDD / Testing</div>
            <h1>
              Cucumber 入門ガイド
              <br />
              BDD (振る舞い駆動開発) ではじめる自動テスト
            </h1>
            <p className="lead">
              本ガイドは{' '}
              <a
                href="https://cucumber.io/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                cucumber.io/docs
              </a>{' '}
              を中心とした公式ドキュメント、および関連するGitHubリポジトリの情報をもとに、
              Cucumberを初めて学ぶ方向けにステップバイステップでまとめたものです。各セクションの末尾に参照元URLを明記しています。
            </p>
            <div className="hero-badges">
              <span className="badge accent">対象: BDD/Cucumber初学者</span>
              <span className="badge">前提知識: 不要</span>
              <span className="badge">全16セクション</span>
              <span className="badge">情報取得: 2026年7月</span>
            </div>
          </header>

          {/* ============ 1. Cucumberとは何か ============ */}
          <section className="doc-section" id="sec01">
            <div className="section-kicker">SECTION 01</div>
            <h2>Cucumberとは何か</h2>

            <p>
              Cucumberは{' '}
              <strong>Behaviour-Driven Development (BDD、振る舞い駆動開発)</strong>{' '}
              をサポートするツールです。
              よくある誤解ですが、Cucumberは単体の「テストツール」ではなく、平易な自然言語で書かれた「実行可能な仕様書
              (executable specification)」を読み取り、
              実際のソフトウェアがその仕様通りに動くかを検証するツールです。
            </p>

            <p>
              仕様は複数の <strong>example (例)</strong> または{' '}
              <strong>scenario (シナリオ)</strong>{' '}
              の集まりとして表現されます。次のような形式です。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-keyword">Scenario</span>: Breaker guesses a word</div>
                <div className="code-line">  <span className="gk-step">Given</span> the Maker has chosen a word</div>
                <div className="code-line">  <span className="gk-step">When</span> the Breaker makes a guess</div>
                <div className="code-line">  <span className="gk-step">Then</span> the Maker is asked to score</div>
              </code>
            </pre>

            <p>
              各シナリオは <strong>step (ステップ)</strong>{' '}
              のリストであり、Cucumberはこのステップを順番に実行します。
              そして各シナリオについて成功 (✅) か失敗 (❌) かを示すレポートを生成します。
            </p>

            <h3>Gherkinとの関係</h3>
            <p>
              Cucumberがシナリオを理解するためには、決められた文法ルールに従う必要があります。このルールを{' '}
              <strong>Gherkin</strong> と呼びます。 Gherkinには3つの役割があります。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>役割</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>曖昧さのない実行可能仕様</td>
                    <td>
                      人間にもコンピュータにも読める形式でシステムの振る舞いを定義する
                    </td>
                  </tr>
                  <tr>
                    <td>Cucumberによる自動テスト</td>
                    <td>書かれた仕様がそのまま自動テストとして実行される</td>
                  </tr>
                  <tr>
                    <td>ドキュメント</td>
                    <td>システムが実際にどう振る舞うかを文書化する</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Gherkinの文書は <code>.feature</code>{' '}
              という拡張子のテキストファイルに保存され、通常はソースコードと一緒にバージョン管理されます。
            </p>

            <h3>ステップ定義との関係</h3>
            <p>
              Gherkinのステップとプログラムコードを結びつけるのが{' '}
              <strong>Step Definition (ステップ定義)</strong> です。
              ステップ定義は、ステップによって実行されるべきアクションを実際に処理するコードです。つまり、仕様(Gherkin)と実装(コード)をつなぐ「配線」の役割を果たします。
            </p>

            <p>Cucumberの全体像を図にすると、次のような一方向の流れになります。</p>

            <div className="mermaid-wrap">
              <Mermaid chart={DIAGRAM_01} />
            </div>
            <p className="mermaid-caption">
              図: Gherkinステップ・Step Definition・テスト対象システムの関係
            </p>

            <p>JavaScriptによるステップ定義の例:</p>

            <pre data-lang="javascript">
              <code>
                <div className="code-line"><span className="token function">When</span><span className="token punctuation">(</span><span className="token string">&apos;{'{'}maker{'}'} starts a game&apos;</span><span className="token punctuation">,</span> maker <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">  maker<span className="token punctuation">.</span><span className="token function">startGameWithWord</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span> word<span className="token punctuation">:</span> <span className="token string">&apos;whale&apos;</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span><span className="token punctuation">)</span></div>
              </code>
            </pre>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction | Cucumber
                </a>
                {' ／ '}
                <a
                  href="https://cucumber.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cucumber公式サイト
                </a>
              </p>
            </div>
          </section>

          {/* ============ 2. BDDを理解する ============ */}
          <section className="doc-section" id="sec02">
            <div className="section-kicker">SECTION 02</div>
            <h2>BDD (振る舞い駆動開発) を理解する</h2>

            <p>
              CucumberはBDDというソフトウェア開発プロセスをサポートするために作られました。BDDそのものはCucumberより大きな概念であり、
              ツールの話ではなくチームの「働き方」の話です。
            </p>

            <h3>BDDの3つの目的</h3>
            <p>
              BDDは、ビジネス側の人間と技術側の人間のギャップを埋めるための働き方であり、次の3点を重視します。
            </p>
            <ol>
              <li>
                さまざまな役割の人が協力し、解決すべき問題について共通理解を築くこと
              </li>
              <li>
                小さく素早い反復作業でフィードバックと価値提供のスピードを上げること
              </li>
              <li>
                システムの振る舞いに対して自動的に検証されるドキュメントを生み出すこと
              </li>
            </ol>
            <p>
              BDDは既存のアジャイル手法(スクラムなど)を置き換えるものではなく、その上に乗せる「拡張機能」のようなものだと説明されています。
            </p>

            <h3>Discovery → Formulation → Automation の3ステップ</h3>
            <p>BDDの日々の活動は、次の3段階の反復プロセスとしてまとめられます。</p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>段階</th>
                    <th>英語名</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>発見</td>
                    <td>Discovery</td>
                    <td>
                      User Storyについて、具体的な例を使ってチームで会話し、何を作るべきかを合意する
                    </td>
                  </tr>
                  <tr>
                    <td>定式化</td>
                    <td>Formulation</td>
                    <td>
                      合意した例を、人間にもコンピュータにも読める形式(Gherkin)で文書化する
                    </td>
                  </tr>
                  <tr>
                    <td>自動化</td>
                    <td>Automation</td>
                    <td>
                      文書化した例を1つずつ自動テストとして実装し、プロダクションコードを実装していく
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mermaid-wrap">
              <Mermaid chart={DIAGRAM_02} />
            </div>
            <p className="mermaid-caption">
              図: Discovery → Formulation → Automation の反復サイクル
            </p>

            <ul>
              <li>
                <strong>Discovery</strong> では、「Discovery workshop(発見ワークショップ)」と呼ばれる構造化された会話を通じて、ユーザー視点の具体例からチームの共通理解を深めます。初めてBDDに取り組むなら、まずこのDiscoveryから始めるのが良いとされています。
              </li>
              <li>
                <strong>Formulation</strong> では、合意した例を実行可能な仕様として書き出します。これにより「本当にチーム全員が同じものを作ろうとしているか」を素早く確認できます。
              </li>
              <li>
                <strong>Automation</strong> では、1つの例をテストとして自動化し、そのテストを通すために最小限の実装を行います。実装が完了した自動化例は「ガードレール」として、将来の変更が既存の振る舞いを壊していないかを保証してくれます。
              </li>
            </ul>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/bdd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behaviour-Driven Development | Cucumber
                </a>
              </p>
            </div>
          </section>

          {/* ============ 3. Gherkin構文 ============ */}
          <section className="doc-section" id="sec03">
            <div className="section-kicker">SECTION 03</div>
            <h2>Gherkin構文を理解する</h2>

            <p>
              Gherkinは、平文テキストにCucumberが理解できる構造を与えるための、特別な<strong>キーワード</strong>の集合です。
              ほとんどの行はこれらのキーワードのいずれかで始まります。
            </p>

            <h3>主要キーワード一覧</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>キーワード</th>
                    <th>コロン(:)が必要か</th>
                    <th>役割</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>Feature</code></td>
                    <td>必要</td>
                    <td>機能の概要を説明し、関連するシナリオをグループ化する</td>
                  </tr>
                  <tr>
                    <td><code>Rule</code></td>
                    <td>必要</td>
                    <td>
                      1つのビジネスルールを表し、複数のシナリオをグループ化する(Gherkin 6以降)
                    </td>
                  </tr>
                  <tr>
                    <td><code>Example</code> / <code>Scenario</code></td>
                    <td>必要</td>
                    <td>ビジネスルールを説明する具体的な例。両者は同義語</td>
                  </tr>
                  <tr>
                    <td><code>Given</code></td>
                    <td>不要</td>
                    <td>シナリオの初期状態(過去に起きたこと)を記述する</td>
                  </tr>
                  <tr>
                    <td><code>When</code></td>
                    <td>不要</td>
                    <td>イベントやアクションを記述する</td>
                  </tr>
                  <tr>
                    <td><code>Then</code></td>
                    <td>不要</td>
                    <td>期待される結果を記述する</td>
                  </tr>
                  <tr>
                    <td><code>And</code> / <code>But</code></td>
                    <td>不要</td>
                    <td>直前のステップと同種のステップを読みやすく続ける</td>
                  </tr>
                  <tr>
                    <td><code>*</code></td>
                    <td>不要</td>
                    <td>Given/When/Thenの代わりに使える汎用のステップ記号</td>
                  </tr>
                  <tr>
                    <td><code>Background</code></td>
                    <td>必要</td>
                    <td>
                      すべてのシナリオの前に共通して実行するGivenステップをまとめる
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Scenario Outline</code> / <code>Scenario Template</code>
                    </td>
                    <td>必要</td>
                    <td>同じシナリオを異なる値で複数回実行するテンプレート</td>
                  </tr>
                  <tr>
                    <td><code>Examples</code> / <code>Scenarios</code></td>
                    <td>必要</td>
                    <td>Scenario Outlineに与えるデータ行の一覧</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              補助的なキーワードとして、<code>&quot;&quot;&quot;</code> (Doc Strings)、<code>|</code> (Data Tables)、<code>@</code> (Tags)、<code>#</code> (コメント) があります。
              コメントは行頭に <code>#</code> を書くことで表現し、ブロックコメントはサポートされていません。インデントにはスペースまたはタブが使えますが、推奨はスペース2つです。
            </p>

            <h3>Feature</h3>
            <p>
              <code>Feature</code> はGherkin文書の最初のキーワードで、機能の概要を短い文章で説明します。1つの <code>.feature</code> ファイルには <code>Feature</code> を1つだけ書けます。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-keyword">Feature</span>: Guess the word</div>
                <div className="code-line"></div>
                <div className="code-line">  The word guess game is a turn-based game for two players.</div>
                <div className="code-line">  The Maker makes a word for the Breaker to guess. The game</div>
                <div className="code-line">  is over when the Breaker guesses the Maker&apos;s word.</div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="gk-keyword">Example</span>: Maker starts a game</div>
              </code>
            </pre>

            <p>
              <code>Feature</code> の直下に書ける自由記述の説明文は、Cucumberの実行には影響しませんが、公式HTMLフォーマッタなどのレポートには表示されます。
            </p>

            <h3>Rule (Gherkin 6以降)</h3>
            <p>
              <code>Rule</code> は「1つのビジネスルール」を表すためのオプションのキーワードです。関連する複数のシナリオをまとめる役割を持ちます。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-keyword">Feature</span>: Highlander</div>
                <div className="code-line">  <span className="gk-keyword">Rule</span>: There can be only One</div>
                <div className="code-line"></div>
                <div className="code-line">    <span className="gk-keyword">Example</span>: Only One -- More than one alive</div>
                <div className="code-line">      <span className="gk-step">Given</span> there are <span className="gk-number">3</span> ninjas</div>
                <div className="code-line">      <span className="gk-step">And</span> there are more than one ninja alive</div>
                <div className="code-line">      <span className="gk-step">When</span> <span className="gk-number">2</span> ninjas meet, they will fight</div>
                <div className="code-line">      <span className="gk-step">Then</span> one ninja dies (but not me)</div>
                <div className="code-line">      <span className="gk-step">And</span> there is one ninja less alive</div>
                <div className="code-line"></div>
                <div className="code-line">    <span className="gk-keyword">Example</span>: Only One -- One alive</div>
                <div className="code-line">      <span className="gk-step">Given</span> there is only <span className="gk-number">1</span> ninja alive</div>
                <div className="code-line">      <span className="gk-step">Then</span> they will live forever ;-)</div>
              </code>
            </pre>

            <h3>Example / Scenario とステップ</h3>
            <p>
              <code>Example</code> (<code>Scenario</code> はその同義語) は、あるビジネスルールを説明する具体的な例です。ステップ数は3〜5個程度が推奨されており、
              多すぎると仕様・ドキュメントとしての表現力が失われてしまいます。
            </p>
            <p>シナリオは基本的に次の3部構成に従います。</p>
            <ul>
              <li>初期状態を表す <code>Given</code> ステップ</li>
              <li>イベントを表す <code>When</code> ステップ</li>
              <li>期待される結果を表す <code>Then</code> ステップ</li>
            </ul>

            <p>
              Cucumberはキーワード自体をステップの識別には使いません。つまり、次の2つのステップは(キーワードが違っても)<strong>同じ意味の重複したステップ</strong>とみなされます。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-step">Given</span> there is money in my account</div>
                <div className="code-line"><span className="gk-step">Then</span> there is money in my account</div>
              </code>
            </pre>

            <p>
              これは制約というより、より明確な言葉を使うよう促す仕組みです。次のように書き換えると意図が明確になります。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-step">Given</span> my account has a balance of £430</div>
                <div className="code-line"><span className="gk-step">Then</span> my account should have a balance of £430</div>
              </code>
            </pre>

            <h4>Given</h4>
            <p>
              <code>Given</code> は「シナリオの舞台設定」であり、通常は過去に起きたことを表します。Cucumberがこのステップを実行するときは、
              システムを既知の状態にします(オブジェクトの作成、テストDBへのデータ投入など)。ユーザー操作の話はここに書かず、<code>When</code> に譲ります。
            </p>

            <h4>When</h4>
            <p>
              <code>When</code> はイベントやアクション、つまり人やほかのシステムがシステムと相互作用する場面を表します。実装の詳細(UIのボタン名など)は避け、
              「1922年に(コンピュータがなかった時代に)人が手作業で行える操作」をイメージして書くとよい、とされています。
            </p>

            <h4>Then</h4>
            <p>
              <code>Then</code> は期待される結果を表します。ステップ定義側ではアサーション(実際の結果と期待される結果の比較)を行います。
              検証すべきなのは「外部から観測できる出力」(画面表示やメッセージなど)であり、データベースの中身のような外部から見えないものを直接検証するのは避けるべきとされています。
            </p>

            <h4>And, But, *</h4>
            <p>
              連続する <code>Given</code> や <code>Then</code> は <code>And</code> / <code>But</code> で読みやすく続けられます。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-keyword">Example</span>: Multiple Givens</div>
                <div className="code-line">  <span className="gk-step">Given</span> one thing</div>
                <div className="code-line">  <span className="gk-step">And</span> another thing</div>
                <div className="code-line">  <span className="gk-step">And</span> yet another thing</div>
                <div className="code-line">  <span className="gk-step">When</span> I open my eyes</div>
                <div className="code-line">  <span className="gk-step">Then</span> I should see something</div>
                <div className="code-line">  <span className="gk-step">But</span> I shouldn&apos;t see something else</div>
              </code>
            </pre>

            <p>
              また、箇条書きのように見せたい場合はアスタリスク <code>*</code> も使えます。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-keyword">Scenario</span>: All done</div>
                <div className="code-line">  <span className="gk-step">Given</span> I am out shopping</div>
                <div className="code-line">  <span className="gk-step">*</span> I have eggs</div>
                <div className="code-line">  <span className="gk-step">*</span> I have milk</div>
                <div className="code-line">  <span className="gk-step">*</span> I have butter</div>
                <div className="code-line">  <span className="gk-step">When</span> I check my list</div>
                <div className="code-line">  <span className="gk-step">Then</span> I don&apos;t need anything</div>
              </code>
            </pre>

            <h3>Background</h3>
            <p>
              複数のシナリオで同じ <code>Given</code> ステップが繰り返される場合、それらは「本質的でない前提条件」である可能性が高いので、
              <code>Background</code> としてまとめられます。<code>Background</code> は最初の <code>Scenario</code> より前、同じインデントレベルに配置します。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-keyword">Feature</span>: Multiple site support</div>
                <div className="code-line">  Only blog owners can post to a blog, except administrators,</div>
                <div className="code-line">  who can post to all blogs.</div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="gk-keyword">Background</span>:</div>
                <div className="code-line">    <span className="gk-step">Given</span> a global administrator named &quot;<span className="gk-string">Greg</span>&quot;</div>
                <div className="code-line">    <span className="gk-step">And</span> a blog named &quot;<span className="gk-string">Greg&apos;s anti-tax rants</span>&quot;</div>
                <div className="code-line">    <span className="gk-step">And</span> a customer named &quot;<span className="gk-string">Dr. Bill</span>&quot;</div>
                <div className="code-line">    <span className="gk-step">And</span> a blog named &quot;<span className="gk-string">Expensive Therapy</span>&quot; owned by &quot;<span className="gk-string">Dr. Bill</span>&quot;</div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="gk-keyword">Scenario</span>: Dr. Bill posts to his own blog</div>
                <div className="code-line">    <span className="gk-step">Given</span> I am logged in as Dr. Bill</div>
                <div className="code-line">    <span className="gk-step">When</span> I try to post to &quot;<span className="gk-string">Expensive Therapy</span>&quot;</div>
                <div className="code-line">    <span className="gk-step">Then</span> I should see &quot;<span className="gk-string">Your article was published.</span>&quot;</div>
              </code>
            </pre>

            <p>
              <code>Background</code> は <code>Feature</code> または <code>Rule</code> ごとに1つしか持てません。異なるシナリオ群で異なるBackgroundが必要な場合は、
              <code>Rule</code> や <code>Feature</code> を分割することが推奨されています。
            </p>

            <p><code>Background</code> を使う際のポイント:</p>
            <ul>
              <li>
                複雑な状態設定には使わない(クライアントに関係ない詳細ならより抽象的なステップにする)
              </li>
              <li>短く保つ(4行を超えたら見直しを検討)</li>
              <li>印象的な固有名詞を使い、ストーリーとして記憶しやすくする</li>
              <li>
                シナリオ自体も短く保つ(Backgroundが画面外にスクロールすると全体像が把握しづらくなる)
              </li>
            </ul>

            <h3>Scenario Outline と Examples</h3>
            <p>
              同じシナリオを異なる値の組み合わせで何度も実行したい場合、コピー&amp;ペーストは非効率です。
              <code>Scenario Outline</code> を使うと <code>&lt; &gt;</code> で囲んだパラメータでテンプレート化できます。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-keyword">Scenario Outline</span>: eating</div>
                <div className="code-line">  <span className="gk-step">Given</span> there are <span className="gk-param">&lt;start&gt;</span> cucumbers</div>
                <div className="code-line">  <span className="gk-step">When</span> I eat <span className="gk-param">&lt;eat&gt;</span> cucumbers</div>
                <div className="code-line">  <span className="gk-step">Then</span> I should have <span className="gk-param">&lt;left&gt;</span> cucumbers</div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="gk-keyword">Examples</span>:</div>
                <div className="code-line">    <span className="gk-pipe">|</span> start <span className="gk-pipe">|</span> eat <span className="gk-pipe">|</span> left <span className="gk-pipe">|</span></div>
                <div className="code-line">    <span className="gk-pipe">|</span>    <span className="gk-number">12</span> <span className="gk-pipe">|</span>   <span className="gk-number">5</span> <span className="gk-pipe">|</span>    <span className="gk-number">7</span> <span className="gk-pipe">|</span></div>
                <div className="code-line">    <span className="gk-pipe">|</span>    <span className="gk-number">20</span> <span className="gk-pipe">|</span>   <span className="gk-number">5</span> <span className="gk-pipe">|</span>   <span className="gk-number">15</span> <span className="gk-pipe">|</span></div>
              </code>
            </pre>

            <p>
              <code>Scenario Outline</code> は1つ以上の <code>Examples</code> セクションを必ず持ち、そのテーブルの各行(見出し行を除く)ごとに1回ずつ実行されます。
            </p>

            <div className="mermaid-wrap">
              <Mermaid chart={DIAGRAM_03} />
            </div>
            <p className="mermaid-caption">
              図: Scenario Outlineがexamplesの行数だけ展開される様子
            </p>

            <h3>Step Arguments: Doc StringsとData Tables</h3>
            <p>
              1行に収まらない大きなデータをステップに渡したいとき、GherkinにはDoc StringsとData Tablesという仕組みがあります。
            </p>

            <h4>Doc Strings</h4>
            <p>
              <code>&quot;&quot;&quot;</code> (または3つのバッククォート) で囲むことで、長いテキストをステップ定義に渡せます。ステップ定義側では、このテキストを自動的に最後の引数として受け取ります。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-step">Given</span> a blog post named &quot;<span className="gk-string">Random</span>&quot; with Markdown body</div>
                <div className="code-line">  <span className="gk-string">&quot;&quot;&quot;</span></div>
                <div className="code-line"><span className="gk-string">  Some Title, Eh?</span></div>
                <div className="code-line"><span className="gk-string">  ===============</span></div>
                <div className="code-line"><span className="gk-string">  Here is the first paragraph of my blog post. Lorem ipsum dolor sit amet,</span></div>
                <div className="code-line"><span className="gk-string">  consectetur adipiscing elit.</span></div>
                <div className="code-line">  <span className="gk-string">&quot;&quot;&quot;</span></div>
              </code>
            </pre>

            <p>
              コンテンツタイプ(<code>&quot;&quot;&quot;markdown</code> のように)を明示的に指定することもできます。
            </p>

            <h4>Data Tables</h4>
            <p>
              <code>|</code> で区切ったテーブル形式で、値のリストをステップ定義に渡せます。こちらもDoc Stringsと同様、ステップ定義の最後の引数として渡されます。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-step">Given</span> the following users exist:</div>
                <div className="code-line">  <span className="gk-pipe">|</span> name   <span className="gk-pipe">|</span> email               <span className="gk-pipe">|</span> twitter         <span className="gk-pipe">|</span></div>
                <div className="code-line">  <span className="gk-pipe">|</span> Aslak  <span className="gk-pipe">|</span> aslak@example.com   <span className="gk-pipe">|</span> @aslak_hellesoy <span className="gk-pipe">|</span></div>
                <div className="code-line">  <span className="gk-pipe">|</span> Julien <span className="gk-pipe">|</span> julien@example.com  <span className="gk-pipe">|</span> @jbpros         <span className="gk-pipe">|</span></div>
              </code>
            </pre>

            <p>
              セル内で改行を使いたい場合は <code>\n</code>、<code>|</code> 自体を使いたい場合は <code>\|</code>、<code>\</code> を使いたい場合は <code>\\</code> とエスケープします。
            </p>

            <h3>Spoken Languages (多言語対応)</h3>
            <p>
              Gherkinは70以上の話し言葉にローカライズされています。ファイルの先頭に <code># language: xx</code> ヘッダーを書くことで、
              日本語を含む各国語のキーワードを使うことができます(省略した場合は英語 <code>en</code> が使われます)。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-comment"># language: no</span></div>
                <div className="code-line"><span className="gk-keyword">Funksjonalitet</span>: Gjett et ord</div>
                <div className="code-line">  <span className="gk-keyword">Eksempel</span>: Ordmaker starter et spill</div>
                <div className="code-line">    <span className="gk-step">Når</span> Ordmaker starter et spill</div>
                <div className="code-line">    <span className="gk-step">Så</span> må Ordmaker vente på at Gjetter blir med</div>
              </code>
            </pre>

            <p>
              Gherkinで使う言語は、その分野の専門家(ドメインエキスパート)が普段使っている言語と合わせるべきとされています。翻訳による齟齬を避けるためです。
            </p>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/gherkin/reference"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gherkin Reference | Cucumber
                </a>
                {' ／ '}
                <a
                  href="https://cucumber.io/docs/gherkin/languages"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gherkin Localisation | Cucumber
                </a>
              </p>
            </div>
          </section>

          {/* ============ 4. ステップ定義 ============ */}
          <section className="doc-section" id="sec04">
            <div className="section-kicker">SECTION 04</div>
            <h2>ステップ定義 (Step Definitions) を書く</h2>

            <p>
              <strong>Step Definition</strong> は、1つ以上のGherkinステップと結びつく「式(expression)」を持ったメソッドです。
              Cucumberはシナリオ内のGherkinステップを実行するとき、マッチするステップ定義を探して実行します。
            </p>

            <p>例えば次のシナリオがあるとします。</p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-keyword">Scenario</span>: Some cukes</div>
                <div className="code-line">  <span className="gk-step">Given</span> I have <span className="gk-number">48</span> cukes in my belly</div>
              </code>
            </pre>

            <p>
              <code>Given</code> の後ろのテキスト <code>I have 48 cukes in my belly</code> は、次のようなステップ定義とマッチします(Javaの例)。
            </p>

            <pre data-lang="java">
              <code>
                <div className="code-line"><span className="token keyword">package</span> <span className="token namespace">com<span className="token punctuation">.</span>example</span><span className="token punctuation">;</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="token keyword">import</span> <span className="token import"><span className="token namespace">io<span className="token punctuation">.</span>cucumber<span className="token punctuation">.</span>java<span className="token punctuation">.</span>en<span className="token punctuation">.</span></span><span className="token class-name">Given</span></span><span className="token punctuation">;</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="token keyword">public</span> <span className="token keyword">class</span> <span className="token class-name">StepDefinitions</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line"></div>
                <div className="code-line">    <span className="token annotation punctuation">@Given</span><span className="token punctuation">(</span><span className="token string">&quot;I have {'{'}int{'}'} cukes in my belly&quot;</span><span className="token punctuation">)</span></div>
                <div className="code-line">    <span className="token keyword">public</span> <span className="token keyword">void</span> <span className="token function">i_have_n_cukes_in_my_belly</span><span className="token punctuation">(</span><span className="token keyword">int</span> cukes<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">        <span className="token class-name">System</span><span className="token punctuation">.</span>out<span className="token punctuation">.</span><span className="token function">format</span><span className="token punctuation">(</span><span className="token string">&quot;Cukes: %d\n&quot;</span><span className="token punctuation">,</span> cukes<span className="token punctuation">)</span><span className="token punctuation">;</span></div>
                <div className="code-line">    <span className="token punctuation">{'}'}</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span></div>
              </code>
            </pre>

            <p>JavaScriptでは次のように書きます。</p>

            <pre data-lang="javascript">
              <code>
                <div className="code-line"><span className="token keyword">const</span> <span className="token punctuation">{'{'}</span> Given <span className="token punctuation">{'}'}</span> <span className="token operator">=</span> <span className="token function">require</span><span className="token punctuation">(</span><span className="token string">&apos;@cucumber/cucumber&apos;</span><span className="token punctuation">)</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="token function">Given</span><span className="token punctuation">(</span><span className="token string">&apos;I have {'{'}int{'}'} cukes in my belly&apos;</span><span className="token punctuation">,</span> <span className="token keyword">function</span> <span className="token punctuation">(</span>cukes<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">  console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token template-string"><span className="token template-punctuation string">`</span><span className="token string">Cukes: </span><span className="token interpolation"><span className="token interpolation-punctuation punctuation">${'{'}</span>cukes<span className="token interpolation-punctuation punctuation">{'}'}</span></span><span className="token template-punctuation string">`</span></span><span className="token punctuation">)</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><span className="token punctuation">;</span></div>
              </code>
            </pre>

            <h3>マッチングの仕組み</h3>
            <ol>
              <li>
                Cucumberはステップの文字列をステップ定義の正規表現(またはCucumber Expression)と照合する
              </li>
              <li>一致した場合、キャプチャグループや変数を取り出す</li>
              <li>それらを引数としてステップ定義のメソッドに渡し、実行する</li>
            </ol>

            <p>
              ステップ定義の<strong>先頭のキーワード(Given/When/Then/And/But)自体には意味がなく</strong>、登録・検索の際は無視されます。
              つまり <code>Given</code> で定義したステップを <code>Then</code> として呼び出すこともできます。
            </p>

            <h3>式 (Expressions) の種類</h3>
            <p>
              ステップ定義の式には、<strong>正規表現(Regular Expression)</strong> または <strong>Cucumber Expression</strong> のどちらかを使えます。
              正規表現の場合、キャプチャグループがそのままステップ定義メソッドの引数として渡されます。Cucumber Expressionを使う場合は、
              パラメータタイプの <code>regexp</code> と一致するキャプチャグループが自動的に型変換されます。上の例では
              <code>{'{'}int{'}'}</code> パラメータタイプの正規表現が <code>\d+</code> であるため、<code>cukes</code> 引数は自動的に整数型に変換されます。
            </p>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/cucumber/step-definitions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Step definitions | Cucumber
                </a>
              </p>
            </div>
          </section>

          {/* ============ 5. Cucumber Expressions ============ */}
          <section className="doc-section" id="sec05">
            <div className="section-kicker">SECTION 05</div>
            <h2>Cucumber Expressionsでステップを賢くマッチさせる</h2>

            <p>
              <strong>Cucumber Expressions</strong> は正規表現の代替となる、より直感的な構文です。
              例えば次のGherkinステップ(<code>Given</code> を除く)にマッチさせたいとします。
            </p>

            <pre data-lang="text">
              <code>
                <div className="code-line">I have 42 cucumbers in my belly</div>
              </code>
            </pre>

            <p>
              最もシンプルな方法はテキストそのままを書くことですが、<code>{'{'}int{'}'}</code> という<strong>出力パラメータ</strong>を使えばより汎用的に書けます。
            </p>

            <pre data-lang="text">
              <code>
                <div className="code-line">I have {'{'}int{'}'} cucumbers in my belly</div>
              </code>
            </pre>

            <p>
              このように書くと、テキストとマッチしたときに <code>42</code> という数値が <code>{'{'}int{'}'}</code> パラメータから抽出され、ステップ定義に渡されます。
            </p>

            <h3>組み込みパラメータタイプ</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>パラメータタイプ</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>{'{'}int{'}'}</code></td>
                    <td>
                      整数にマッチ (例: <code>71</code>, <code>-19</code>)。プラットフォームが対応していれば32bit符号付き整数に変換
                    </td>
                  </tr>
                  <tr>
                    <td><code>{'{'}float{'}'}</code></td>
                    <td>
                      浮動小数点数にマッチ (例: <code>3.6</code>, <code>.8</code>, <code>-9.2</code>)。32bit floatに変換
                    </td>
                  </tr>
                  <tr>
                    <td><code>{'{'}word{'}'}</code></td>
                    <td>
                      空白を含まない単語にマッチ (例: <code>banana</code>。<code>banana split</code>にはマッチしない)
                    </td>
                  </tr>
                  <tr>
                    <td><code>{'{'}string{'}'}</code></td>
                    <td>
                      シングルまたはダブルクォートで囲まれた文字列にマッチ (例: <code>&quot;banana split&quot;</code>)
                    </td>
                  </tr>
                  <tr>
                    <td><code>{'{'}{'}'}</code> (匿名)</td>
                    <td>あらゆる文字列にマッチ (<code>/.*/</code> と同等)</td>
                  </tr>
                  <tr>
                    <td><code>{'{'}bigdecimal{'}'}</code></td>
                    <td>
                      <code>{'{'}float{'}'}</code> と同様だが <code>BigDecimal</code> に変換
                    </td>
                  </tr>
                  <tr>
                    <td><code>{'{'}double{'}'}</code></td>
                    <td><code>{'{'}float{'}'}</code> と同様だが64bit floatに変換</td>
                  </tr>
                  <tr>
                    <td><code>{'{'}biginteger{'}'}</code></td>
                    <td>
                      <code>{'{'}int{'}'}</code> と同様だが <code>BigInteger</code> に変換
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>{'{'}byte{'}'}</code> / <code>{'{'}short{'}'}</code> / <code>{'{'}long{'}'}</code>
                    </td>
                    <td>
                      <code>{'{'}int{'}'}</code> と同様だが、それぞれ8/16/64bit整数に変換
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>オプションのテキスト</h3>
            <p>
              「1 cucumbers」は文法的に誤りなので、複数形の <code>s</code> をオプションにしたい場合は括弧で囲みます。
            </p>

            <pre data-lang="text">
              <code>
                <div className="code-line">I have {'{'}int{'}'} cucumber(s) in my belly</div>
              </code>
            </pre>

            <p>
              正規表現では括弧はキャプチャグループを意味しますが、Cucumber Expressionsでは「オプションのテキスト」を意味する点に注意してください。
            </p>

            <h3>代替テキスト</h3>
            <p>
              言い回しの揺らぎを許容したい場合はスラッシュで代替候補を区切ります(間に空白は入れられません)。
            </p>

            <pre data-lang="text">
              <code>
                <div className="code-line">I have {'{'}int{'}'} cucumber(s) in my belly/stomach</div>
              </code>
            </pre>

            <h3>エスケープ</h3>
            <p>
              <code>()</code> や <code>{'{'}{'}'}</code> をリテラルとしてマッチさせたい場合は、バックスラッシュでエスケープします。
            </p>

            <pre data-lang="text">
              <code>
                <div className="code-line">I have {'{'}int{'}'} \{'{'}what{'}'} cucumber(s) in my belly \(amazing!)</div>
              </code>
            </pre>

            <h3>カスタムパラメータタイプ</h3>
            <p>
              独自の型に自動変換したい場合は、カスタムパラメータタイプを定義できます。例えば <code>{'{'}color{'}'}</code> というパラメータを <code>Color</code> オブジェクトに変換する場合(JavaScript/TypeScriptの例):
            </p>

            <pre data-lang="javascript">
              <code>
                <div className="code-line"><span className="token keyword">import</span> <span className="token punctuation">{'{'}</span> defineParameterType <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">&apos;@cucumber/cucumber&apos;</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="token function">defineParameterType</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span></div>
                <div className="code-line">    name<span className="token punctuation">:</span> <span className="token string">&apos;color&apos;</span><span className="token punctuation">,</span></div>
                <div className="code-line">    regexp<span className="token punctuation">:</span> <span className="token regex"><span className="token regex-delimiter">/</span><span className="token regex-source language-regex">red|blue|yellow</span><span className="token regex-delimiter">/</span></span><span className="token punctuation">,</span></div>
                <div className="code-line">    transformer<span className="token punctuation">:</span> s <span className="token operator">=&gt;</span> <span className="token keyword">new</span> <span className="token class-name">Color</span><span className="token punctuation">(</span>s<span className="token punctuation">)</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span><span className="token punctuation">)</span></div>
              </code>
            </pre>

            <p>カスタムパラメータタイプ定義時の主な引数は以下の通りです。</p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>引数</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>name</code></td>
                    <td>出力パラメータとして認識される名前</td>
                  </tr>
                  <tr>
                    <td><code>regexp</code></td>
                    <td>
                      パラメータにマッチする正規表現(キャプチャグループを含んでもよい)
                    </td>
                  </tr>
                  <tr>
                    <td><code>type</code></td>
                    <td>変換後の戻り値の型</td>
                  </tr>
                  <tr>
                    <td><code>transformer</code></td>
                    <td>正規表現のマッチ結果を変換する関数</td>
                  </tr>
                  <tr>
                    <td><code>useForSnippets</code></td>
                    <td>
                      デフォルト <code>true</code>。未定義ステップのスニペット生成に使うかどうか
                    </td>
                  </tr>
                  <tr>
                    <td><code>preferForRegexpMatch</code></td>
                    <td>
                      デフォルト <code>false</code>。正規表現を使うステップ定義でこのパラメータタイプを優先するかどうか
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/cucumber/cucumber-expressions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cucumber Expressions | Cucumber
                </a>
                {' ／ '}
                <a
                  href="https://github.com/cucumber/cucumber-expressions#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cucumber/cucumber-expressions (GitHub README)
                </a>
              </p>
            </div>
          </section>

          {/* ============ 6. Hooks ============ */}
          <section className="doc-section" id="sec06">
            <div className="section-kicker">SECTION 06</div>
            <h2>Hooks (フック) でセットアップ・後片付けを行う</h2>

            <p>
              <strong>Hooks</strong> はCucumberの実行サイクルの様々なタイミングで実行できるコードのブロックで、主に各シナリオの前後の環境セットアップ・後片付けに使われます。
              フックをどこで宣言するかは、どのシナリオ・ステップに適用されるかには影響しません(タグを使えば絞り込めます)。
            </p>

            <h3>フックの種類</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>フック</th>
                    <th>実行タイミング</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>Before</code></td>
                    <td>各シナリオの最初のステップの前</td>
                  </tr>
                  <tr>
                    <td><code>After</code></td>
                    <td>
                      各シナリオの最後のステップの後(結果がfailed/undefined/pending/skippedでも実行される)
                    </td>
                  </tr>
                  <tr>
                    <td><code>Around</code>(Rubyのみ)</td>
                    <td>シナリオの実行を丸ごと囲む</td>
                  </tr>
                  <tr>
                    <td><code>BeforeStep</code></td>
                    <td>各ステップの前</td>
                  </tr>
                  <tr>
                    <td><code>AfterStep</code></td>
                    <td>各ステップの後</td>
                  </tr>
                  <tr>
                    <td><code>BeforeAll</code></td>
                    <td>全シナリオの実行前に一度だけ</td>
                  </tr>
                  <tr>
                    <td><code>AfterAll</code></td>
                    <td>全シナリオの実行後に一度だけ</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <code>Before</code> フックで行ったことは、Featureファイルだけを読む人には見えません。読みやすさを重視するなら、<code>Background</code> を使うことを検討し、
              <code>Before</code> フックはブラウザの起動やDBのクリーンアップのような低レベルな処理に限定するのがよいとされています。
            </p>

            <h3>シナリオ実行のライフサイクル</h3>
            <div className="mermaid-wrap">
              <Mermaid chart={DIAGRAM_04} />
            </div>
            <p className="mermaid-caption">図: フックを含めたシナリオ実行のライフサイクル</p>

            <h3>コード例(JavaScript)</h3>
            <pre data-lang="javascript">
              <code>
                <div className="code-line"><span className="token keyword">const</span> <span className="token punctuation">{'{'}</span> Before<span className="token punctuation">,</span> After <span className="token punctuation">{'}'}</span> <span className="token operator">=</span> <span className="token function">require</span><span className="token punctuation">(</span><span className="token string">&apos;@cucumber/cucumber&apos;</span><span className="token punctuation">)</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="token function">Before</span><span className="token punctuation">(</span><span className="token keyword">async</span> <span className="token keyword">function</span> <span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">  <span className="token comment">// 各シナリオの前に実行する処理</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span><span className="token punctuation">)</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="token function">After</span><span className="token punctuation">(</span><span className="token keyword">async</span> <span className="token keyword">function</span> <span className="token punctuation">(</span>scenario<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">  <span className="token comment">// 各シナリオの後に実行する処理</span></div>
                <div className="code-line">  <span className="token comment">// scenario引数から成功/失敗の状態を取得できる</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span><span className="token punctuation">)</span></div>
              </code>
            </pre>

            <h3>実行順序の指定</h3>
            <p>複数のフックがある場合、明示的な順序を指定できます(Javaの例)。</p>

            <pre data-lang="java">
              <code>
                <div className="code-line"><span className="token annotation punctuation">@Before</span><span className="token punctuation">(</span>order <span className="token operator">=</span> <span className="token number">10</span><span className="token punctuation">)</span></div>
                <div className="code-line"><span className="token keyword">public</span> <span className="token keyword">void</span> <span className="token function">doSomething</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">{'{'}</span></div>
                <div className="code-line">    <span className="token comment">// 各シナリオの前に実行する処理</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span></div>
              </code>
            </pre>

            <h3>条件付きフック (Conditional Hooks)</h3>
            <p>タグ式を使うことで、特定のシナリオにのみフックを適用できます。</p>

            <pre data-lang="java">
              <code>
                <div className="code-line"><span className="token annotation punctuation">@After</span><span className="token punctuation">(</span><span className="token string">&quot;@browser and not @headless&quot;</span><span className="token punctuation">)</span></div>
                <div className="code-line"><span className="token keyword">public</span> <span className="token keyword">void</span> <span className="token function">doSomethingAfter</span><span className="token punctuation">(</span><span className="token class-name">Scenario</span> scenario<span className="token punctuation">)</span><span className="token punctuation">{'{'}</span></div>
                <div className="code-line">    driver<span className="token punctuation">.</span><span className="token function">quit</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span></div>
              </code>
            </pre>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/cucumber/api/#hooks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cucumber reference | Cucumber (Hooksセクション)
                </a>
              </p>
            </div>
          </section>

          {/* ============ 7. Tags ============ */}
          <section className="doc-section" id="sec07">
            <div className="section-kicker">SECTION 07</div>
            <h2>Tags (タグ) でシナリオを整理する</h2>

            <p>
              <strong>Tags</strong> はFeatureやScenarioを整理するための仕組みです。主に次の2つの目的で使われます。
            </p>
            <ul>
              <li>シナリオの一部だけを実行する</li>
              <li>フックを特定のシナリオ群にのみ適用する(条件付きフック)</li>
            </ul>

            <p>
              タグは <code>Feature</code>、<code>Rule</code>、<code>Scenario</code>、<code>Scenario Outline</code>、<code>Examples</code> の上に置くことができます。
              <code>Background</code> やステップ (<code>Given</code>/<code>When</code>/<code>Then</code> など) の上には置けません。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-tag">@billing</span></div>
                <div className="code-line"><span className="gk-keyword">Feature</span>: Verify billing</div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="gk-tag">@important</span></div>
                <div className="code-line">  <span className="gk-keyword">Scenario</span>: Missing product description</div>
                <div className="code-line">    <span className="gk-step">Given</span> hello</div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="gk-keyword">Scenario</span>: Several products</div>
                <div className="code-line">    <span className="gk-step">Given</span> hello</div>
              </code>
            </pre>

            <p>1つの要素に複数のタグを付けることもできます(スペース区切り)。</p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-tag">@billing</span> <span className="gk-tag">@bicker</span> <span className="gk-tag">@annoy</span></div>
                <div className="code-line"><span className="gk-keyword">Feature</span>: Verify billing</div>
              </code>
            </pre>

            <h3>タグの継承</h3>
            <p>
              タグは子要素に継承されます。<code>Feature</code> に付けたタグは <code>Rule</code>、<code>Scenario</code>、<code>Scenario Outline</code>、<code>Examples</code> に継承され、
              同様に <code>Scenario Outline</code> に付けたタグは <code>Examples</code> に継承されます。
            </p>

            <h3>タグ式 (Tag Expressions)</h3>
            <p>タグ式は「中置のブール式」で、次のような書き方ができます。</p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>タグ式</th>
                    <th>意味</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>@fast</code></td>
                    <td><code>@fast</code> タグが付いたシナリオ</td>
                  </tr>
                  <tr>
                    <td><code>@wip and not @slow</code></td>
                    <td>
                      <code>@wip</code> が付いていて、かつ <code>@slow</code> が付いていないシナリオ
                    </td>
                  </tr>
                  <tr>
                    <td><code>@smoke and @fast</code></td>
                    <td>
                      <code>@smoke</code> と <code>@fast</code> の両方が付いたシナリオ
                    </td>
                  </tr>
                  <tr>
                    <td><code>@gui or @database</code></td>
                    <td>
                      <code>@gui</code> または <code>@database</code> のどちらかが付いたシナリオ
                    </td>
                  </tr>
                  <tr>
                    <td><code>(@smoke or @ui) and (not @slow)</code></td>
                    <td>括弧でグループ化した、より複雑な条件式</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>タグを使った一部シナリオの実行</h3>
            <p>Maven(Java)の例:</p>
            <pre data-lang="shell">
              <code>
                <div className="code-line">mvn test -Dcucumber.filter.tags=&quot;@smoke and @fast&quot;</div>
              </code>
            </pre>

            <p>Cucumber-JSの例:</p>
            <pre data-lang="shell">
              <code>
                <div className="code-line">./node_modules/.bin/cucumber.js --tags &quot;@smoke and @fast&quot;</div>
              </code>
            </pre>

            <p>逆に特定のタグを除外して実行したい場合は <code>not</code> を使います。</p>
            <pre data-lang="shell">
              <code>
                <div className="code-line">cucumber --tags &quot;not @smoke&quot;</div>
              </code>
            </pre>

            <h3>タグをドキュメントとして活用する</h3>
            <p>
              タグは外部システム(要件管理ツール、課題管理ツールなど)のIDと紐づけたり、開発プロセス上の状態(<code>@qa_ready</code> など)を表すためにも使えます。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-tag">@BJ-x98.77</span> <span className="gk-tag">@BJ-z12.33</span></div>
                <div className="code-line"><span className="gk-keyword">Feature</span>: Convert transaction</div>
              </code>
            </pre>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/cucumber/api/#tags"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cucumber reference | Cucumber (Tagsセクション)
                </a>
              </p>
            </div>
          </section>

          {/* ============ 8. ステップの実行結果 ============ */}
          <section className="doc-section" id="sec08">
            <div className="section-kicker">SECTION 08</div>
            <h2>ステップの実行結果を理解する</h2>

            <p>Cucumberの各ステップは、実行後に次のいずれかの結果になります。</p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>結果</th>
                    <th>色</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Success(成功)</td>
                    <td>緑</td>
                    <td>マッチするステップ定義が見つかり、エラーなく実行された</td>
                  </tr>
                  <tr>
                    <td>Undefined(未定義)</td>
                    <td>黄</td>
                    <td>
                      マッチするステップ定義が見つからなかった。以降のステップはSkippedになる
                    </td>
                  </tr>
                  <tr>
                    <td>Pending(保留)</td>
                    <td>黄</td>
                    <td>
                      ステップ定義内で <code>pending</code> メソッドが呼ばれた。「まだ実装が必要」という意味
                    </td>
                  </tr>
                  <tr>
                    <td>Failed(失敗)</td>
                    <td>赤</td>
                    <td>
                      ステップ定義の実行中にエラー(アサーション失敗など)が発生した
                    </td>
                  </tr>
                  <tr>
                    <td>Skipped(スキップ)</td>
                    <td>シアン</td>
                    <td>
                      Undefined/Pending/Failedの後に続くステップは実行されない
                    </td>
                  </tr>
                  <tr>
                    <td>Ambiguous(曖昧)</td>
                    <td>―</td>
                    <td>
                      同じステップに複数のステップ定義がマッチしてしまい、Cucumberが解決できない状態
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              ステップ定義から何を <code>return</code> しても、その値自体には意味がありません(<code>null</code> や <code>false</code> を返しても失敗にはなりません)。
              失敗として扱われるのは、あくまでエラー(例外)が発生した場合です。
            </p>

            <div className="mermaid-wrap">
              <Mermaid chart={DIAGRAM_05} />
            </div>
            <p className="mermaid-caption">図: ステップ実行結果の分岐</p>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/cucumber/api/#step-results"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cucumber reference | Cucumber (Step resultsセクション)
                </a>
              </p>
            </div>
          </section>

          {/* ============ 9. インストール ============ */}
          <section className="doc-section" id="sec09">
            <div className="section-kicker">SECTION 09</div>
            <h2>Cucumberをインストールする</h2>

            <p>
              Cucumberはほとんどの主要なプログラミング言語に対応しています。公式は「プロダクションコードと同じプラットフォーム・言語の実装を選ぶこと」を推奨しています。
            </p>

            <p>実装は次の4種類に分類されます。</p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>分類</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>official(公式)</td>
                    <td>
                      <a
                        href="https://github.com/cucumber"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        cucumber
                      </a>{' '}
                      組織でホストされている
                    </td>
                  </tr>
                  <tr>
                    <td>semi-official(準公式)</td>
                    <td>
                      別の場所でホストされているが、cucumberのコンポーネントを利用している
                    </td>
                  </tr>
                  <tr>
                    <td>unofficial(非公式)</td>
                    <td>
                      別の場所でホストされ、cucumberのコンポーネントを使っていない
                    </td>
                  </tr>
                  <tr>
                    <td>unmaintained(メンテナンスされていない)</td>
                    <td>公式だが、メンテナが不在で更新が止まっている</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>主な言語別実装(抜粋)</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>実装</th>
                    <th>言語</th>
                    <th>分類</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cucumber-JS</td>
                    <td>JavaScript</td>
                    <td>official</td>
                  </tr>
                  <tr>
                    <td>Cucumber-JVM</td>
                    <td>Java / Kotlin</td>
                    <td>official</td>
                  </tr>
                  <tr>
                    <td>Cucumber-Ruby</td>
                    <td>Ruby</td>
                    <td>official</td>
                  </tr>
                  <tr>
                    <td>Cucumber-Scala</td>
                    <td>Scala</td>
                    <td>official</td>
                  </tr>
                  <tr>
                    <td>Cucumber.cpp</td>
                    <td>C++</td>
                    <td>official</td>
                  </tr>
                  <tr>
                    <td>Behat</td>
                    <td>PHP</td>
                    <td>semi-official</td>
                  </tr>
                  <tr>
                    <td>Behave</td>
                    <td>Python</td>
                    <td>semi-official</td>
                  </tr>
                  <tr>
                    <td>Pytest-BDD</td>
                    <td>Python</td>
                    <td>semi-official</td>
                  </tr>
                  <tr>
                    <td>Reqnroll</td>
                    <td>.NET (C#, F#, VB)</td>
                    <td>semi-official</td>
                  </tr>
                  <tr>
                    <td>gocuke</td>
                    <td>Go</td>
                    <td>semi-official</td>
                  </tr>
                  <tr>
                    <td>Cucumber-Rust</td>
                    <td>Rust</td>
                    <td>unofficial</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>JavaScriptでのインストール例</h3>
            <p>Cucumber-JSはnpmパッケージとして提供されています。</p>
            <pre data-lang="shell">
              <code>
                <div className="code-line">npm install --save-dev @cucumber/cucumber</div>
              </code>
            </pre>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/installation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Installation | Cucumber
                </a>
                {' ／ '}
                <a
                  href="https://cucumber.io/docs/installation/javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cucumber-JS | Cucumber
                </a>
              </p>
            </div>
          </section>

          {/* ============ 10. 実践チュートリアル ============ */}
          <section className="doc-section" id="sec10">
            <div className="section-kicker">SECTION 10</div>
            <h2>実践: 10分でCucumberを動かしてみる</h2>

            <p>
              ここでは公式の「10-minute tutorial」の流れに沿って、Cucumberを使ったBDDの基本的なワークフローを確認します(例はJavaベースです)。
            </p>

            <h3>BDDのワークフロー全体像</h3>
            <div className="mermaid-wrap">
              <Mermaid chart={DIAGRAM_06} />
            </div>
            <p className="mermaid-caption">
              図: Undefined → Pending → Failing → Passing のBDDサイクル
            </p>

            <h3>ステップ1: プロジェクトを作成する</h3>
            <p>Maven archetypeを使ってプロジェクトを作成します。</p>
            <pre data-lang="shell">
              <code>
                <div className="code-line">mvn archetype:generate \</div>
                <div className="code-line">&quot;-DarchetypeGroupId=io.cucumber&quot; \</div>
                <div className="code-line">&quot;-DarchetypeArtifactId=cucumber-archetype&quot; \</div>
                <div className="code-line">&quot;-DarchetypeVersion=7.34.3&quot; \</div>
                <div className="code-line">&quot;-DgroupId=hellocucumber&quot; \</div>
                <div className="code-line">&quot;-DartifactId=hellocucumber&quot; \</div>
                <div className="code-line">&quot;-Dpackage=hellocucumber&quot; \</div>
                <div className="code-line">&quot;-Dversion=1.0.0-SNAPSHOT&quot; \</div>
                <div className="code-line">&quot;-DinteractiveMode=false&quot;</div>
              </code>
            </pre>

            <h3>ステップ2: インストールを確認する</h3>
            <pre data-lang="shell">
              <code>
                <div className="code-line">mvn test</div>
              </code>
            </pre>
            <p>「0 scenarios」のように、まだ何も実行対象がないことが表示されればOKです。</p>

            <h3>ステップ3: シナリオを書く</h3>
            <p>
              <code>src/test/resources/hellocucumber/is_it_friday_yet.feature</code> を作成します。
            </p>
            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-keyword">Feature</span>: Is it Friday yet?</div>
                <div className="code-line">  Everybody wants to know when it&apos;s Friday</div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="gk-keyword">Scenario</span>: Sunday isn&apos;t Friday</div>
                <div className="code-line">    <span className="gk-step">Given</span> today is Sunday</div>
                <div className="code-line">    <span className="gk-step">When</span> I ask whether it&apos;s Friday yet</div>
                <div className="code-line">    <span className="gk-step">Then</span> I should be told &quot;<span className="gk-string">Nope</span>&quot;</div>
              </code>
            </pre>

            <h3>ステップ4: Undefinedを確認する</h3>
            <p>
              再度 <code>mvn test</code> を実行すると、1つのシナリオと3つのステップが <code>undefined</code> と報告され、実装のスニペットが提案されます。
            </p>
            <pre data-lang="java">
              <code>
                <div className="code-line"><span className="token annotation punctuation">@Given</span><span className="token punctuation">(</span><span className="token string">&quot;today is Sunday&quot;</span><span className="token punctuation">)</span></div>
                <div className="code-line"><span className="token keyword">public</span> <span className="token keyword">void</span> <span className="token function">today_is_Sunday</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">    <span className="token comment">// Write code here that turns the phrase above into concrete actions</span></div>
                <div className="code-line">    <span className="token keyword">throw</span> <span className="token keyword">new</span> <span className="token class-name">io<span className="token punctuation">.</span>cucumber<span className="token punctuation">.</span>java<span className="token punctuation">.</span>PendingException</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span></div>
              </code>
            </pre>
            <p>
              このスニペットを <code>src/test/java/hellocucumber/StepDefinitions.java</code> にコピーします。
            </p>

            <h3>ステップ5: Pendingを確認する</h3>
            <p>
              再実行すると、ステップ定義は見つかったものの <code>PendingException</code> により「保留」として報告されます。まだ実装が必要という意味です。
            </p>

            <h3>ステップ6: Failingにしてみる</h3>
            <p>コメントに書かれている通り、フレーズを具体的な処理に置き換えます。</p>
            <pre data-lang="java">
              <code>
                <div className="code-line"><span className="token keyword">public</span> <span className="token keyword">class</span> <span className="token class-name">StepDefinitions</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">    <span className="token keyword">private</span> <span className="token class-name">String</span> today<span className="token punctuation">;</span></div>
                <div className="code-line">    <span className="token keyword">private</span> <span className="token class-name">String</span> actualAnswer<span className="token punctuation">;</span></div>
                <div className="code-line"></div>
                <div className="code-line">    <span className="token annotation punctuation">@Given</span><span className="token punctuation">(</span><span className="token string">&quot;today is Sunday&quot;</span><span className="token punctuation">)</span></div>
                <div className="code-line">    <span className="token keyword">public</span> <span className="token keyword">void</span> <span className="token function">today_is_Sunday</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">        today <span className="token operator">=</span> <span className="token string">&quot;Sunday&quot;</span><span className="token punctuation">;</span></div>
                <div className="code-line">    <span className="token punctuation">{'}'}</span></div>
                <div className="code-line"></div>
                <div className="code-line">    <span className="token annotation punctuation">@When</span><span className="token punctuation">(</span><span className="token string">&quot;I ask whether it&apos;s Friday yet&quot;</span><span className="token punctuation">)</span></div>
                <div className="code-line">    <span className="token keyword">public</span> <span className="token keyword">void</span> <span className="token function">i_ask_whether_it_s_Friday_yet</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">        actualAnswer <span className="token operator">=</span> <span className="token class-name">IsItFriday</span><span className="token punctuation">.</span><span className="token function">isItFriday</span><span className="token punctuation">(</span>today<span className="token punctuation">)</span><span className="token punctuation">;</span></div>
                <div className="code-line">    <span className="token punctuation">{'}'}</span></div>
                <div className="code-line"></div>
                <div className="code-line">    <span className="token annotation punctuation">@Then</span><span className="token punctuation">(</span><span className="token string">&quot;I should be told {'{'}string{'}'}&quot;</span><span className="token punctuation">)</span></div>
                <div className="code-line">    <span className="token keyword">public</span> <span className="token keyword">void</span> <span className="token function">i_should_be_told</span><span className="token punctuation">(</span><span className="token class-name">String</span> expectedAnswer<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">        <span className="token function">assertThat</span><span className="token punctuation">(</span>actualAnswer<span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">isEqualTo</span><span className="token punctuation">(</span>expectedAnswer<span className="token punctuation">)</span><span className="token punctuation">;</span></div>
                <div className="code-line">    <span className="token punctuation">{'}'}</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span></div>
              </code>
            </pre>
            <p>
              <code>isItFriday</code> メソッドはまだ <code>null</code> を返す仮実装なので、テストは失敗(Failing)します。これは意図した動作です。
            </p>

            <h3>ステップ7: Passingにする</h3>
            <p>最小限の実装でテストを通します。</p>
            <pre data-lang="java">
              <code>
                <div className="code-line"><span className="token keyword">static</span> <span className="token class-name">String</span> <span className="token function">isItFriday</span><span className="token punctuation">(</span><span className="token class-name">String</span> today<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">    <span className="token keyword">return</span> <span className="token string">&quot;Nope&quot;</span><span className="token punctuation">;</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span></div>
              </code>
            </pre>
            <p>これで最初のシナリオがグリーン(Passing)になります。</p>

            <h3>ステップ8: もう1つのシナリオを追加する</h3>
            <p>
              「Friday」の場合も検証するシナリオを追加し、対応するステップ定義も追加します。すると2つ目のシナリオは失敗するので、正しいロジックを実装します。
            </p>
            <pre data-lang="java">
              <code>
                <div className="code-line"><span className="token keyword">static</span> <span className="token class-name">String</span> <span className="token function">isItFriday</span><span className="token punctuation">(</span><span className="token class-name">String</span> today<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">    <span className="token keyword">return</span> <span className="token string">&quot;Friday&quot;</span><span className="token punctuation">.</span><span className="token function">equals</span><span className="token punctuation">(</span>today<span className="token punctuation">)</span> <span className="token operator">?</span> <span className="token string">&quot;TGIF&quot;</span> <span className="token punctuation">:</span> <span className="token string">&quot;Nope&quot;</span><span className="token punctuation">;</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span></div>
              </code>
            </pre>

            <h3>ステップ9: Scenario Outlineでまとめる</h3>
            <p>
              すべての曜日を検証したくなったら、<code>Scenario</code> を <code>Scenario Outline</code> に書き換え、<code>Examples</code> テーブルでまとめます。
            </p>
            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-keyword">Feature</span>: Is it Friday yet?</div>
                <div className="code-line">  Everybody wants to know when it&apos;s Friday</div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="gk-keyword">Scenario Outline</span>: Today is or is not Friday</div>
                <div className="code-line">    <span className="gk-step">Given</span> today is &quot;<span className="gk-param">&lt;day&gt;</span>&quot;</div>
                <div className="code-line">    <span className="gk-step">When</span> I ask whether it&apos;s Friday yet</div>
                <div className="code-line">    <span className="gk-step">Then</span> I should be told &quot;<span className="gk-param">&lt;answer&gt;</span>&quot;</div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="gk-keyword">Examples</span>:</div>
                <div className="code-line">    <span className="gk-pipe">|</span> day             <span className="gk-pipe">|</span> answer <span className="gk-pipe">|</span></div>
                <div className="code-line">    <span className="gk-pipe">|</span> Friday          <span className="gk-pipe">|</span> TGIF   <span className="gk-pipe">|</span></div>
                <div className="code-line">    <span className="gk-pipe">|</span> Sunday          <span className="gk-pipe">|</span> Nope   <span className="gk-pipe">|</span></div>
                <div className="code-line">    <span className="gk-pipe">|</span> anything else!  <span className="gk-pipe">|</span> Nope   <span className="gk-pipe">|</span></div>
              </code>
            </pre>

            <p>ステップ定義側も、文字列をそのまま受け取る形に一本化します。</p>
            <pre data-lang="java">
              <code>
                <div className="code-line"><span className="token annotation punctuation">@Given</span><span className="token punctuation">(</span><span className="token string">&quot;today is {'{'}string{'}'}&quot;</span><span className="token punctuation">)</span></div>
                <div className="code-line"><span className="token keyword">public</span> <span className="token keyword">void</span> <span className="token function">today_is</span><span className="token punctuation">(</span><span className="token class-name">String</span> today<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span></div>
                <div className="code-line">    <span className="token keyword">this</span><span className="token punctuation">.</span>today <span className="token operator">=</span> today<span className="token punctuation">;</span></div>
                <div className="code-line"><span className="token punctuation">{'}'}</span></div>
              </code>
            </pre>
            <p>これで3つのシナリオ(9ステップ)がすべてパスします。</p>

            <h3>ステップ10: リファクタリングする</h3>
            <p>
              テストが通った状態(グリーン)になったら、次のようなリファクタリングを検討します。
            </p>
            <ul>
              <li>
                <code>isItFriday</code> メソッドをテストコードからプロダクションコードへ移動する
              </li>
              <li>複数箇所で使うヘルパーメソッドをステップ定義から抽出する</li>
            </ul>
            <p>
              このように「Given実装→Undefined→Pending→Failing→Passing→リファクタリング」というサイクルを繰り返すことが、CucumberによるBDDの基本ワークフローです。
            </p>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/guides/10-minute-tutorial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  10-minute tutorial | Cucumber
                </a>
              </p>
            </div>
          </section>

          {/* ============ 11. レポーティング ============ */}
          <section className="doc-section" id="sec11">
            <div className="section-kicker">SECTION 11</div>
            <h2>テスト結果をレポートする</h2>

            <p>
              Cucumberは「レポータープラグイン(フォーマッタ)」を使って、シナリオの成功・失敗に関する情報を含むレポートを生成します。
            </p>

            <h3>Cucumber Reportsサービス</h3>
            <p>
              最も手軽に始められる方法は、
              <a
                href="https://reports.cucumber.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cucumber Reports
              </a>{' '}
              というホスティングサービスにレポートを送信することです。
              以下のバージョン以降で対応しています。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>実装</th>
                    <th>対応バージョン</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cucumber-JVM</td>
                    <td>6.7.0以降</td>
                  </tr>
                  <tr>
                    <td>Cucumber-Ruby</td>
                    <td>5.1.1以降</td>
                  </tr>
                  <tr>
                    <td>Cucumber-JS</td>
                    <td>7.0.0以降</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>ビルトインのレポータープラグイン</h3>
            <p>
              外部サービスを使わずローカルでレポートを生成したい場合、次のビルトインフォーマッタが使えます。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>フォーマッタ名</th>
                    <th>概要</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>message</code></td>
                    <td>Cucumber Messages形式の生データを出力</td>
                  </tr>
                  <tr>
                    <td><code>progress</code></td>
                    <td>ドットで進捗を表示するシンプルな形式</td>
                  </tr>
                  <tr>
                    <td><code>pretty</code></td>
                    <td>人が読みやすい形式でコンソールに出力</td>
                  </tr>
                  <tr>
                    <td><code>html</code></td>
                    <td>HTMLレポートを生成</td>
                  </tr>
                  <tr>
                    <td><code>json</code></td>
                    <td>JSON形式でレポートを出力</td>
                  </tr>
                  <tr>
                    <td><code>rerun</code></td>
                    <td>失敗したシナリオだけを再実行するためのファイルを出力</td>
                  </tr>
                  <tr>
                    <td><code>junit</code></td>
                    <td>JUnit形式のXMLレポートを出力(多くのCIツールが解釈可能)</td>
                  </tr>
                  <tr>
                    <td><code>testng</code></td>
                    <td>TestNG形式のレポート(JVMのみ)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>カスタムフォーマッタ</h3>
            <p>
              Cucumberの各実装は拡張可能なため、独自のフォーマッタを作成したり、サードパーティ製のフォーマッタ(Allure、Masterthoughtなど)を利用することもできます。
              フォーマッタはイベントベースのAPIで動作し、Cucumber Messagesという共通の仕様に基づいています。
            </p>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/cucumber/reporting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reporting | Cucumber
                </a>
              </p>
            </div>
          </section>

          {/* ============ 12. ベストプラクティス ============ */}
          <section className="doc-section" id="sec12">
            <div className="section-kicker">SECTION 12</div>
            <h2>ベストプラクティスとアンチパターン</h2>

            <h3>宣言的スタイル vs 命令的スタイル</h3>
            <p>
              Gherkinシナリオは<strong>何が起こるか(What)</strong>を書くべきであり、<strong>どうやって実現するか(How)</strong>を書くべきではありません。
              次の2つの書き方を比較します。
            </p>

            <p><strong>命令的(避けたい)スタイル:</strong></p>
            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-step">Given</span> I visit &quot;<span className="gk-string">/login</span>&quot;</div>
                <div className="code-line"><span className="gk-step">When</span> I enter &quot;<span className="gk-string">Bob</span>&quot; in the &quot;<span className="gk-string">user name</span>&quot; field</div>
                <div className="code-line">  <span className="gk-step">And</span> I enter &quot;<span className="gk-string">tester</span>&quot; in the &quot;<span className="gk-string">password</span>&quot; field</div>
                <div className="code-line">  <span className="gk-step">And</span> I press the &quot;<span className="gk-string">login</span>&quot; button</div>
                <div className="code-line"><span className="gk-step">Then</span> I should see the &quot;<span className="gk-string">welcome</span>&quot; page</div>
              </code>
            </pre>

            <p><strong>宣言的(推奨される)スタイル:</strong></p>
            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-step">When</span> &quot;<span className="gk-string">Bob</span>&quot; logs in</div>
              </code>
            </pre>

            <p>
              命令的スタイルは実装の詳細(URL、フィールド名、ボタン名)に強く依存するため、実装が変わるたびにシナリオも修正が必要になります。
              宣言的スタイルであれば、ログイン方法がパスワード認証から生体認証に変わっても、シナリオ自体は変更せずに済みます。
            </p>

            <p>
              「実装が変わったら、この記述も変える必要があるか?」と自問し、答えが「はい」なら実装依存の記述を見直す、というのが良い目安です。
            </p>

            <h3>
              アンチパターン1: Feature-coupled step definitions(機能に結合したステップ定義)
            </h3>
            <p>
              特定のFeatureやScenarioでしか再利用できないステップ定義は、ステップ定義の爆発的な増加、コードの重複、保守コストの増大を招きます。
            </p>
            <p><strong>対策:</strong></p>
            <ul>
              <li>
                ステップ定義はドメイン概念ごとに整理する(Feature名やScenario名ではなく)
              </li>
              <li>
                例: <code>EmployeeStepDefinitions.java</code>、<code>EducationStepDefinitions.java</code>、<code>AuthenticationStepDefinitions.java</code> のように分割する
              </li>
            </ul>

            <h3>アンチパターン2: Conjunction steps(接続詞的ステップ)</h3>
            <p>
              複数の異なる要素を1つのステップに詰め込むと、そのステップは特殊化しすぎて再利用性が下がります。
            </p>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-comment"># 避けたい書き方</span></div>
                <div className="code-line"><span className="gk-step">Given</span> I have shades and a brand new Mustang</div>
              </code>
            </pre>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-comment"># 望ましい書き方</span></div>
                <div className="code-line"><span className="gk-step">Given</span> I have shades</div>
                <div className="code-line"><span className="gk-step">And</span> I have a brand new Mustang</div>
              </code>
            </pre>

            <p>
              Cucumberが <code>And</code>/<code>But</code> をサポートしているのは、まさにこのようなケースのためです。
            </p>

            <h3>ステップ定義の整理</h3>
            <p>
              プロジェクトが成長するにつれ、ステップ定義は意味のあるグループに分割すべきです。
            </p>
            <ul>
              <li>主要なドメインオブジェクトごとに1ファイルを用意する</li>
              <li>
                実際に使われていないステップ定義は書かない(不要なコードは掃除が必要な「残骸」になる)
              </li>
              <li>似たようなステップ定義の重複を避け、ヘルパーメソッドで抽象化する</li>
            </ul>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-comment"># 重複しがちな例</span></div>
                <div className="code-line"><span className="gk-step">Given</span> I go to the home page</div>
                <div className="code-line"><span className="gk-step">Given</span> I check the about page of the website</div>
                <div className="code-line"><span className="gk-step">Given</span> I get the contact details</div>
              </code>
            </pre>

            <pre data-lang="gherkin">
              <code>
                <div className="code-line"><span className="gk-comment"># ヘルパーメソッドで抽象化した例</span></div>
                <div className="code-line"><span className="gk-step">Given</span> I go to the &quot;<span className="gk-string">{'{'}string{'}'}</span>&quot; page</div>
              </code>
            </pre>

            <p>
              Cucumberは対象のプログラミング言語のDSLラッパーに過ぎないため、ステップ定義ファイルの中では通常のプログラミング言語の機能(ヘルパーメソッドの抽出など)を自由に使えます。
              ただし、Featureファイルの中の記述は必ずGherkin構文に従う必要があります。
            </p>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/bdd/better-gherkin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Writing better Gherkin | Cucumber
                </a>
                {' ／ '}
                <a
                  href="https://cucumber.io/docs/guides/anti-patterns"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anti-patterns | Cucumber
                </a>
                {' ／ '}
                <a
                  href="https://cucumber.io/docs/gherkin/step-organization"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Step organization | Cucumber
                </a>
              </p>
            </div>
          </section>

          {/* ============ 13. CI/CD ============ */}
          <section className="doc-section" id="sec13">
            <div className="section-kicker">SECTION 13</div>
            <h2>CI/CDに組み込む</h2>

            <p>
              CucumberをCI(継続的インテグレーション)環境で使うのは比較的シンプルです。<code>cucumber</code> の実行コマンドは、1つでもシナリオが失敗すると <code>0</code> 以外の終了ステータス(exit status)を返します。CIサーバーはこの終了ステータスだけを見れば、ビルドを成功/失敗として扱えます。
            </p>

            <h3>典型的な構成</h3>
            <p>
              多くのCI構成は何らかのビルドツールを経由してCucumberを実行します。代表的なビルドツールは次の通りです。
            </p>
            <ul>
              <li>Rake(Ruby)</li>
              <li>Ant(Java)</li>
              <li>Maven(Java)</li>
            </ul>

            <h3>JUnit形式の出力を使う</h3>
            <p>
              多くのCIサーバーは、Ant JUnitタスクが生成するXML形式のレポートを解釈してHTML表示できます。中には時系列のレポートを作れるものもあります。
              このようなCIサーバーを使っている場合は、Cucumberの <code>JUnit</code> フォーマッタを使うことが推奨されます。
            </p>
            <p>
              例えばJenkinsでは、ビルドステップとして <code>cucumber -f junit --out WORKSPACE</code> を追加し、「Publish JUnit test result report」を有効化して <code>*.xml</code> をテストレポートのXMLパスに指定することで、Cucumberのレポートを取り込めます。
            </p>

            <h3>Jenkins用プラグイン</h3>
            <p>
              Jenkinsには専用の{' '}
              <a
                href="https://github.com/jenkinsci/cucumber-reports-plugin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cucumber Reports plugin
              </a>{' '}
              が用意されており、見やすいレポートを生成できます。
            </p>

            <div className="mermaid-wrap">
              <Mermaid chart={DIAGRAM_07} />
            </div>
            <p className="mermaid-caption">図: CI環境におけるCucumber実行の流れ</p>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/guides/continuous-integration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Continuous Integration | Cucumber
                </a>
              </p>
            </div>
          </section>

          {/* ============ 14. エディタ・IDE ============ */}
          <section className="doc-section" id="sec14">
            <div className="section-kicker">SECTION 14</div>
            <h2>エディタ・IDEサポート</h2>

            <p>
              主要なテキストエディタの多くは、Gherkin構文のシンタックスハイライトに対応しています。一部のIDEは、IDE内からCucumberを実行したり、結果を表示したり、
              GherkinステップとStep Definitionの間をジャンプしたりする高度な機能も備えています。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>エディタ/IDE</th>
                    <th>サポート内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Visual Studio Code</td>
                    <td>
                      「Cucumber for VSCode」(公式)や「Cucumber (Gherkin) Full Support」などの拡張機能でGherkinをサポート
                    </td>
                  </tr>
                  <tr>
                    <td>Atom</td>
                    <td>Cucumber向けの各種パッケージが利用可能</td>
                  </tr>
                  <tr>
                    <td>TextMate</td>
                    <td><code>Cucumber.tmbundle</code> によるサポート</td>
                  </tr>
                  <tr>
                    <td>Nova</td>
                    <td>Cucumber拡張機能によるGherkin言語サポート</td>
                  </tr>
                  <tr>
                    <td>IntelliJ IDEA / Eclipse</td>
                    <td>
                      Java向けのCucumberプラグインでシナリオの実行・ナビゲーションが可能
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout">
              <span className="icon" aria-hidden="true">ℹ️</span>
              <p>
                <strong>参考: </strong>
                <a
                  href="https://cucumber.io/docs/tools/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tools | Cucumber
                </a>
              </p>
            </div>
          </section>

          {/* ============ 15. まとめ ============ */}
          <section className="doc-section" id="sec15">
            <div className="section-kicker">SECTION 15</div>
            <h2>まとめと次のステップ</h2>

            <p>このガイドで扱った内容を振り返ります。</p>

            <div className="summary-grid">
              <div className="summary-card">
                <div className="n">01</div>
                <p>
                  <strong>Cucumberとは</strong>
                  Gherkinで書かれた実行可能な仕様を検証するBDDツール
                </p>
              </div>
              <div className="summary-card">
                <div className="n">02</div>
                <p>
                  <strong>BDDの本質</strong>
                  Discovery → Formulation → Automation という協働のプロセス
                </p>
              </div>
              <div className="summary-card">
                <div className="n">03</div>
                <p>
                  <strong>Gherkin構文</strong>
                  Feature、Rule、Scenario、Given/When/Then、Background、Scenario Outlineなど
                </p>
              </div>
              <div className="summary-card">
                <div className="n">04</div>
                <p>
                  <strong>Step Definitions</strong>
                  Gherkinのステップと実装コードをつなぐ「配線」
                </p>
              </div>
              <div className="summary-card">
                <div className="n">05</div>
                <p>
                  <strong>Cucumber Expressions</strong>
                  正規表現よりも読みやすいステップのマッチング方法
                </p>
              </div>
              <div className="summary-card">
                <div className="n">06</div>
                <p>
                  <strong>Hooks</strong>
                  シナリオの前後で共通処理を行う仕組み
                </p>
              </div>
              <div className="summary-card">
                <div className="n">07</div>
                <p>
                  <strong>Tags</strong>
                  シナリオを整理し、一部だけ実行するための仕組み
                </p>
              </div>
              <div className="summary-card">
                <div className="n">08</div>
                <p>
                  <strong>ステップの実行結果</strong>
                  Success/Undefined/Pending/Failed/Skipped/Ambiguousの6種類
                </p>
              </div>
              <div className="summary-card">
                <div className="n">09</div>
                <p>
                  <strong>インストール</strong>
                  使用中の言語に応じた公式・準公式の実装を選ぶ
                </p>
              </div>
              <div className="summary-card">
                <div className="n">10</div>
                <p>
                  <strong>10分チュートリアル</strong>
                  Undefined→Pending→Failing→Passingのサイクルを体験
                </p>
              </div>
              <div className="summary-card">
                <div className="n">11</div>
                <p>
                  <strong>レポーティング</strong>
                  ビルトインフォーマッタやCucumber Reportsサービスの活用
                </p>
              </div>
              <div className="summary-card">
                <div className="n">12</div>
                <p>
                  <strong>ベストプラクティス</strong>
                  宣言的スタイル、ステップの整理、アンチパターンの回避
                </p>
              </div>
              <div className="summary-card">
                <div className="n">13</div>
                <p>
                  <strong>CI/CD</strong>
                  終了ステータスとJUnit形式の出力を使ったビルド連携
                </p>
              </div>
            </div>

            <h3>次に学ぶと良いこと</h3>
            <ul>
              <li>
                実際に手を動かして{' '}
                <a
                  href="https://cucumber.io/docs/guides/10-minute-tutorial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  10-minute tutorial
                </a>{' '}
                を自分の使用言語で試す
              </li>
              <li>
                チームで{' '}
                <a
                  href="https://cucumber.io/docs/bdd/example-mapping"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Example Mapping
                </a>{' '}
                ワークショップを行い、Discoveryを体験する
              </li>
              <li>
                <a
                  href="https://cucumber.io/docs/guides/browser-automation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Browser automation
                </a>{' '}
                や{' '}
                <a
                  href="https://cucumber.io/docs/guides/api-automation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API automation
                </a>{' '}
                のガイドを読み、実際のテスト自動化に応用する
              </li>
              <li>
                <a
                  href="https://cucumber.io/docs/guides/parallel-execution"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parallel execution
                </a>{' '}
                を読み、テスト実行時間を短縮する方法を学ぶ
              </li>
            </ul>
          </section>

          {/* ============ 16. 参考文献 ============ */}
          <section className="doc-section" id="sec16">
            <div className="section-kicker">SECTION 16</div>
            <h2>参考文献・出典一覧</h2>

            <p>
              本ガイドの作成にあたり参照した、Cucumber公式ドキュメントおよび関連リポジトリのURL一覧です(2026年7月時点の情報)。
            </p>

            <ul className="ref-list">
              <li>
                <span className="ref-num">01</span>
                <span className="ref-title">Introduction</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">02</span>
                <span className="ref-title">Cucumber公式サイト</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">03</span>
                <span className="ref-title">Behaviour-Driven Development</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/bdd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/bdd/
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">04</span>
                <span className="ref-title">Writing better Gherkin</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/bdd/better-gherkin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/bdd/better-gherkin
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">05</span>
                <span className="ref-title">Gherkin Reference</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/gherkin/reference"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/gherkin/reference
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">06</span>
                <span className="ref-title">Gherkin Localisation</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/gherkin/languages"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/gherkin/languages
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">07</span>
                <span className="ref-title">Step organization</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/gherkin/step-organization"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/gherkin/step-organization
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">08</span>
                <span className="ref-title">Step definitions</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/cucumber/step-definitions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/cucumber/step-definitions
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">09</span>
                <span className="ref-title">
                  Cucumber reference (Hooks / Tags / Steps)
                </span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/cucumber/api/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/cucumber/api/
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">10</span>
                <span className="ref-title">Cucumber Expressions</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/cucumber/cucumber-expressions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/cucumber/cucumber-expressions
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">11</span>
                <span className="ref-title">
                  cucumber/cucumber-expressions (README)
                </span>
                <span className="ref-url">
                  <a
                    href="https://github.com/cucumber/cucumber-expressions#readme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/cucumber/cucumber-expressions#readme
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">12</span>
                <span className="ref-title">Reporting</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/cucumber/reporting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/cucumber/reporting
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">13</span>
                <span className="ref-title">
                  State (sharing state, dependency injection)
                </span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/cucumber/state"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/cucumber/state
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">14</span>
                <span className="ref-title">Installation</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/installation/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/installation/
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">15</span>
                <span className="ref-title">Cucumber-JS Installation</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/installation/javascript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/installation/javascript
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">16</span>
                <span className="ref-title">Guides (index)</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/guides/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/guides/
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">17</span>
                <span className="ref-title">10-minute tutorial</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/guides/10-minute-tutorial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/guides/10-minute-tutorial
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">18</span>
                <span className="ref-title">Anti-patterns</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/guides/anti-patterns"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/guides/anti-patterns
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">19</span>
                <span className="ref-title">Continuous Integration</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/guides/continuous-integration"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/guides/continuous-integration
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">20</span>
                <span className="ref-title">Tools</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/tools/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/tools/
                  </a>
                </span>
              </li>
              <li>
                <span className="ref-num">21</span>
                <span className="ref-title">Terminology</span>
                <span className="ref-url">
                  <a
                    href="https://cucumber.io/docs/terms/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://cucumber.io/docs/terms/
                  </a>
                </span>
              </li>
            </ul>
          </section>

          <div className="footer-note">
            注記:
            Cucumber公式ドキュメントは継続的に更新されています。本ガイド内の情報は取得時点(2026年7月)のものであり、最新の詳細は上記URLから直接ご確認ください。
          </div>
        </div>
      </div>
    </div>
  );
}
