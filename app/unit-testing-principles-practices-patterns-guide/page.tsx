import React from 'react';
import Mermaid from '../../components/Mermaid';
import Checklist from './Checklist';
import NavBar from './NavBar';
import './unit-testing-guide.css';

export const metadata = {
  title: 'Unit Testing Principles, Practices, and Patterns 完全ガイド ― 初学者のためのステップバイステップ ベストプラクティス',
  description: 'Vladimir Khorikov著『Unit Testing Principles, Practices, and Patterns』に基づく単体テスト実践ガイド。4本柱、AAAパターン、古典派vsロンドン派、モックの正しい使い方まで。',
};

const MERMAID_CONFIG = `%%{init: { "theme": "base", "themeVariables": { "fontFamily": "Inter, sans-serif", "fontSize": "16px", "primaryColor": "#eef0fb", "primaryBorderColor": "#34419e", "primaryTextColor": "#2b2318", "lineColor": "#8a8170", "secondaryColor": "#f8ecd3", "tertiaryColor": "#fffdf7", "clusterBkg": "#f3ecd8", "clusterBorder": "#c9b98a", "edgeLabelBackground": "#fffdf7" }, "flowchart": { "htmlLabels": true, "curve": "basis", "subGraphTitleMargin": { "top": 15, "bottom": 70 } } }}%%`;

const DIAGRAM_0 = `${MERMAID_CONFIG}
flowchart TB
A["テストがない、または壊れやすい"] --> B["リファクタリングが怖くなる"]
B --> C["技術的負債が蓄積し、コードが腐敗する"]
C --> D["変更コストが増大し開発速度が低下する"]
D --> A

E["価値あるテストスイートを持つ"] --> F["安心してリファクタリングできる"]
F --> G["設計を継続的に改善できる"]
G --> H["開発速度が長期にわたり維持される"]
H --> E

D ~~~ E`;

const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart LR
A["Arrange<br/>テスト対象と入力データを準備する"] --> B["Act<br/>テスト対象のメソッドを実行する"]
B --> C["Assert<br/>結果を検証する"]`;

const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TB
Start["あるテストを4本柱で評価する"] --> E2E["End-to-Endテスト"]
Start --> Trivial["些末(trivial)なテスト<br/>例: 単純なgetter/setterのテスト"]
Start --> Brittle["壊れやすい(brittle)テスト<br/>例: 実装の内部呼び出し順序を検証するテスト"]

E2E --> E2ERes["回帰への保護◎ / リファクタリング耐性◎<br/>速いフィードバック×"]
Trivial --> TrivialRes["リファクタリング耐性◎ / 速いフィードバック◎<br/>回帰への保護×"]
Brittle --> BrittleRes["回帰への保護◎ / 速いフィードバック◎<br/>リファクタリング耐性×"]`;

const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart TB
Q1["このテストで何を確認したいか？"] --> Q2{"外部への副作用そのものが<br/>重要な結果か？<br/>例: メール送信, 決済API呼び出し"}
Q2 -- "はい(振る舞い検証)" --> Mock["Mock を使う<br/>(呼び出しの有無・内容を検証)"]
Q2 -- "いいえ(状態検証で十分)" --> Q3{"戻り値を制御したいだけか？"}
Q3 -- "はい" --> Stub["Stub を使う"]
Q3 -- "いいえ、呼ばれた記録も見たい" --> Spy["Spy を使う"]`;

const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart TB
subgraph Shell["Imperative Shell(副作用を扱う薄い層)"]
    In["入力の取得<br/>(DB読み込み・HTTPリクエストなど)"]
    Out["出力の反映<br/>(DB書き込み・メール送信など)"]
end
subgraph Core["Functional Core(純粋な計算ロジック)"]
    Logic["ビジネスルールの計算<br/>(入力→出力の純粋関数)"]
end
In --> Logic
Logic --> Out`;

const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart TB
subgraph Before["リファクタリング前"]
    B1["Controller<br/>（ロジック + DB呼び出し + HTTP処理が混在）"]
end
subgraph After["リファクタリング後"]
    A1["Humble Controller<br/>（外部との協調のみ・薄い）"]
    A2["Domain Logic<br/>（複雑な判断ロジックのみ・純粋）"]
    A1 --> A2
end
B1 -.->|"責務を分離する"| A1`;

const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart TB
    D["外部依存を洗い出す"] --> Q1{"自チームがスキーマと挙動を<br/>制御できるか？"}
    Q1 -- "いいえ（他チーム/外部が所有）" --> Unmanaged["Unmanaged Dependency<br/>制御できない、または外部から観測される<br/>境界でモックに置き換える<br/>（例: 決済API, メール送信, 外部公開テーブル）"]
    Q1 -- "はい（自チームが所有）" --> Q2{"その依存の状態は外部の<br/>第三者から直接観測されるか？"}
    Q2 -- "はい（外部にも見える/共有）" --> Unmanaged
    Q2 -- "いいえ（自チームだけが見る）" --> Managed["Managed Dependency<br/>制御でき、かつ外部から観測されない<br/>実物を使ってテストする<br/>（例: 自チーム専用DB）"]`;

export default function Page() {
  return (
    <div className="unit-testing-layout">
      <NavBar />

      <main className="content">
        <header className="hero">
          <div className="hero-eyebrow">Book Guide</div>
          <h1>Unit Testing Principles, Practices, and Patterns 完全ガイド</h1>
          <p className="lead">初学者のためのステップバイステップ ベストプラクティス</p>
          <p>
            この記事は、ソフトウェアテスト分野で国際的に高く評価されている書籍<em>Unit Testing Principles, Practices, and Patterns</em>（Vladimir Khorikov 著）の考え方を土台に、初学者でも迷わず実践できるよう「ステップ形式」で再構成した学習ガイドです。あわせて、Martin Fowler・Kent Beck・Kent C. Dodds・Ian Cooper・Gary Bernhardt といった著名な国際的開発者の発信内容、および2025〜2026年にかけての最新の議論（Test Desiderata 2.0、AI生成コードのテストなど）も参照し、現在の実務にそのまま使える形にまとめています。参照したソースのURLはすべて末尾の「参考文献・情報源」にまとめています。
          </p>
          <div className="book-card">
            <div>
              <div className="label"><i className="ti ti-book"></i>書名</div>
              <div className="value">Unit Testing Principles, Practices, and Patterns</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-user"></i>著者</div>
              <div className="value">Vladimir Khorikov</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-building"></i>出版社</div>
              <div className="value">Manning Publications</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-calendar"></i>刊行</div>
              <div className="value">2020年1月 / 304ページ</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-barcode"></i>ISBN</div>
              <div className="value">978-1-61729-627-7</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-external-link"></i>出版社ページ</div>
              <div className="value">
                <a
                  href="https://www.oreilly.com/library/view/unit-testing-principles/9781617296277/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  O&apos;Reilly で見る
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* ===== About ===== */}
        <section className="section" id="about">
          <div className="section-head">
            <span className="section-badge">Guide</span>
            <h2>この記事の対象読者と使い方</h2>
          </div>
          <div className="prose">
            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-info-circle"></i>本ガイドの前提
              </div>
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>対象読者</td>
                    <td>
                      ユニットテストの書き方は知っているが、「何を」「どこまで」「どう」テストすべきか迷っている初〜中級エンジニア
                    </td>
                  </tr>
                  <tr>
                    <td>前提知識</td>
                    <td>
                      任意の言語で xUnit系フレームワーク（JUnit, pytest, Jest, xUnit.net など）を使ったテストを書いたことがある
                    </td>
                  </tr>
                  <tr>
                    <td>使用言語</td>
                    <td>
                      原著はC#だが、考え方自体はどの言語・フレームワークにも応用できるため、本記事のコード例は擬似コード中心で表記する
                    </td>
                  </tr>
                  <tr>
                    <td>ゴール</td>
                    <td>
                      「テストの本数」ではなく「テストの価値」で品質を判断できるようになること
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== Step 01 ===== */}
        <section className="section" id="step1">
          <div className="section-head">
            <span className="section-badge">Step 01</span>
            <h2>ユニットテストの「本当の目的」を理解する</h2>
          </div>
          <div className="prose">
            <p>
              多くのチームは「カバレッジ80%達成」のような数値目標を掲げますが、これは本質的な目的ではありません。Khorikovはこの本の冒頭で、コードカバレッジのような指標は<strong>簡単に操作できてしまう</strong>ため、テストスイートの質を測る指標としては信頼できないと指摘しています。たとえばループや条件分岐を一切検証せずに実行だけする空疎なテストでも、カバレッジ数値は上がってしまいます。
            </p>
            <p>
              ユニットテストの本当の目的は、<strong>「ソフトウェアプロジェクトの持続的成長を可能にすること」</strong>です。テストが無い、またはテストが壊れやすいプロジェクトでは、次のような悪循環に陥ります。
            </p>

            <div className="mermaid-wrap" id="diag-0">
              <Mermaid chart={DIAGRAM_0} />
            </div>
            <p className="diagram-caption">
              図1: 悪循環（左）と良い循環（右）― テストの目的は「持続的成長」
            </p>

            <p>
              ポイントは、<strong>「テストの数を増やすこと」ではなく「後述する4本柱を満たす価値の高いテストを選び取ること」</strong>がゴールだという点です。価値の低いテストは書かない方がまし、というのが本書全体を貫く姿勢です。
            </p>
          </div>
        </section>

        {/* ===== Step 02 ===== */}
        <section className="section" id="step2">
          <div className="section-head">
            <span className="section-badge">Step 02</span>
            <h2>そもそも「ユニットテスト」とは何か</h2>
          </div>
          <div className="prose">
            <p>
              「ユニットテスト」という言葉は現場でかなり曖昧に使われています。Khorikovは次の3つの性質を満たすテストを「ユニットテスト」と定義しています。
            </p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-list-check"></i>ユニットテストの3つの性質
              </div>
              <table>
                <thead>
                  <tr>
                    <th>性質</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>小さな「振る舞いの単位」を検証する</td>
                    <td>
                      「1つのクラス」や「1つのメソッド」という<strong>コードの単位</strong>ではなく、意味のある<strong>振る舞い（behavior）の単位</strong>を検証する
                    </td>
                  </tr>
                  <tr>
                    <td>高速に実行できる</td>
                    <td>
                      ミリ秒〜数十ミリ秒のオーダーで完了し、何百回実行しても苦にならない
                    </td>
                  </tr>
                  <tr>
                    <td>他のテストから隔離されている</td>
                    <td>
                      あるテストの結果が、他のテストの実行順序や実行有無に影響されない
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              ここで重要なのは3つ目の「隔離」の解釈です。「隔離」を<strong>テスト対象のコード（SUT: System Under Test）を他のクラスから隔離すること</strong>だと考えるか、<strong>テスト自体を他のテストから隔離すること</strong>だと考えるかで、後述する2つの流派が分かれます。
            </p>

            <div className="callout">
              <div>
                補足: 「1ユニット = 1メソッド」という誤解は非常によくあるアンチパターンの温床です。振る舞いは複数のクラス・メソッドにまたがって実装されることが多く、テストはその振る舞い単位に対して書くべきだ、という考え方は Ian Cooper氏の講演「TDD, Where Did It All Go Wrong?」でも強調されています（詳細はStep 3・参考文献参照）。
              </div>
            </div>
          </div>
        </section>

        {/* ===== Step 03 ===== */}
        <section className="section" id="step3">
          <div className="section-head">
            <span className="section-badge">Step 03</span>
            <h2>二大流派 ― classical school と London school</h2>
          </div>
          <div className="prose">
            <p>
              ユニットテストの世界には、大きく分けて2つの学派（流派）が存在します。本書はこの対比を軸に構成されており、著者自身は classical school（別名: Detroit school / Chicago school）の立場を取っています。
            </p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-arrows-split"></i>classical school vs London school
              </div>
              <table>
                <thead>
                  <tr>
                    <th>観点</th>
                    <th>classical school（Detroit / Chicago）</th>
                    <th>London school（mockist）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>「隔離」の対象</td>
                    <td>テストケース同士を隔離する</td>
                    <td>SUT（テスト対象）を協働オブジェクトから隔離する</td>
                  </tr>
                  <tr>
                    <td>テスト対象の粒度</td>
                    <td>クラスの集合体（振る舞いの単位）</td>
                    <td>基本的に1クラス単位</td>
                  </tr>
                  <tr>
                    <td>依存への対応</td>
                    <td>
                      <strong>共有され、かつ可変な依存（例: 静的なグローバル状態、外部サービス）のみ</strong>をテストダブルに置き換える
                    </td>
                    <td>
                      不変なオブジェクト以外のほぼ全ての依存をモックに置き換える
                    </td>
                  </tr>
                  <tr>
                    <td>設計への影響</td>
                    <td>
                      大きな依存グラフの塊が悪い設計の兆候として自然に見える
                    </td>
                    <td>
                      依存を全てインターフェース越しに注入する設計（DIコンテナ多用）に誘導しやすい
                    </td>
                  </tr>
                  <tr>
                    <td>代表的な文献</td>
                    <td>Kent Beck『Test-Driven Development: By Example』</td>
                    <td>
                      Steve Freeman &amp; Nat Pryce『Growing Object-Oriented Software, Guided by Tests』
                    </td>
                  </tr>
                  <tr>
                    <td>失敗しやすいテストの特徴</td>
                    <td>大きな結合度の高いクラス群に気づきにくい</td>
                    <td>
                      モックの多用によりテストが実装詳細に強く結合し、壊れやすくなる
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              どちらが「正しい」というより、<strong>モックをどこまで使うか</strong>という判断軸の違いだと理解するのが実務的です。次のStep 5・Step 6で扱う「4本柱」と「observable behavior」の考え方を理解すると、この対立を統一的に説明できるようになります。
            </p>
          </div>
        </section>
        {/* ===== Step 04 ===== */}
        <section className="section" id="step4">
          <div className="section-head">
            <span className="section-badge">Step 04</span>
            <h2>ユニットテストの解剖学 ― AAAパターン</h2>
          </div>
          <div className="prose">
            <p>
              良いユニットテストは、例外なく次の3つのセクションで構成すべきだと本書は説きます。これは<strong>AAAパターン（Arrange-Act-Assert）</strong>と呼ばれ、xUnit系フレームワーク全般で共通する基本構造です。
            </p>

            <div className="mermaid-wrap" id="diag-1">
              <Mermaid chart={DIAGRAM_1} />
            </div>
            <p className="diagram-caption">図2: AAAパターンの流れ</p>

            <p>擬似コードで表すと次のようになります。</p>

            <div className="code-block">
              <div className="code-label"><i className="ti ti-code"></i>pseudocode</div>
              <pre>
                <div className="code-line">テスト名: 残高が不足している場合、出金は失敗する</div>
                <div className="code-line"></div>
                <div className="code-line">// Arrange（準備）</div>
                <div className="code-line">account := 口座を作成する(残高: 100)</div>
                <div className="code-line"></div>
                <div className="code-line">// Act（実行）</div>
                <div className="code-line">result := account.出金する(金額: 200)</div>
                <div className="code-line"></div>
                <div className="code-line">// Assert（検証）</div>
                <div className="code-line">result が失敗であることを確認する</div>
                <div className="code-line">account.残高 が 100 のままであることを確認する</div>
              </pre>
            </div>

            <h3>実践のポイント</h3>
            <ul>
              <li>
                <strong>Actセクションは1行にする</strong>: 複数のメソッド呼び出しがActに並ぶ場合、テスト対象の振る舞いの単位が誤って分割されているサインです。
              </li>
              <li>
                <strong>命名は「非プログラマにも伝わる文章」にする</strong>: 実装の詳細（メソッド名やクラス名）をテスト名に含めるのではなく、「その振る舞いを業務ドメインの言葉でどう説明するか」を意識します。例: <code>Test1_出金_異常系</code> ではなく <code>残高が不足している場合、出金は失敗する</code> のように書きます。
              </li>
              <li>
                <strong><code>should_be</code> のような曖昧な言い回しは避ける</strong>: テストは「事実」を確認するものなので、<code>is</code>（〜である）のような言い切りの文体が推奨されます。
              </li>
              <li>
                <strong>パラメータ化テストは「同じ結論」を導くケースにのみ使う</strong>: 正常系1パターン・異常系1パターンのように出力の種類が同じ場合はパラメータ化してよいですが、出力の意味が異なる場合はテスト名の説明力が落ちるため個別に書きます。
              </li>
              <li>
                <strong>アサーションライブラリで可読性を上げる</strong>: <code>Assert.That(actual, Is.EqualTo(expected))</code> のような流暢なAPIを使うと、Assertセクションの意図がより明確になります。
              </li>
            </ul>
          </div>
        </section>

        {/* ===== Step 05 ===== */}
        <section className="section" id="step5">
          <div className="section-head">
            <span className="section-badge">Step 05</span>
            <h2>良いユニットテストの「4本柱」</h2>
          </div>
          <div className="prose">
            <p>
              本書の核となる概念が、この「4本柱（Four Pillars）」です。あるテストが本当に価値を持つかどうかを、次の4つの観点でスコアリング（0〜1の連続値）して評価します。
            </p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-columns"></i>良いユニットテストの4本柱
              </div>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>柱</th>
                    <th>説明</th>
                    <th>満たさない場合に起こること</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <strong>回帰に対する保護</strong>（Protection against regressions）
                    </td>
                    <td>
                      バグを実際に埋め込んだとき、そのテストが検知できる確率
                    </td>
                    <td>バグが本番まで流出する</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <strong>リファクタリング耐性</strong>（Resistance to refactoring）
                    </td>
                    <td>
                      振る舞いを変えずに内部実装だけを変更したとき、テストが誤って失敗しない度合い
                    </td>
                    <td>
                      「偽陽性（false positive）」が多発し、テストが信頼されなくなる
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <strong>速いフィードバック</strong>（Fast feedback）
                    </td>
                    <td>テストの実行がどれだけ高速か</td>
                    <td>開発者がテストを頻繁に回さなくなる</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td><strong>保守のしやすさ</strong>（Maintainability）</td>
                    <td>テストコード自体がどれだけ理解・保守しやすいか</td>
                    <td>テストのメンテナンスコストが開発速度を圧迫する</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>なぜ「掛け算」で考えるのか</h3>
            <p>
              Khorikovは、この4つのスコアを<strong>足し算ではなく掛け算</strong>でイメージすべきだと述べています。どれか1つでも極端に低い（0に近い）と、他がどれだけ高くても全体の価値はゼロに近づいてしまう、という考え方です。
            </p>

            <h3>理想のテストは存在しない ― 3つの極端な例</h3>
            <p>
              4本柱を同時に完璧に満たすテストは原理的に作れません。本書は次の3つの「極端な例」を挙げて、トレードオフの構造を説明しています。
            </p>

            <div className="mermaid-wrap" id="diag-2">
              <Mermaid chart={DIAGRAM_2} />
            </div>
            <p className="diagram-caption">図3: 4本柱のトレードオフ ― 3つの極端な例</p>

            <p>
              実務上もっとも見落とされがちで、かつもっとも重要なのが2本目の柱「リファクタリング耐性」です。これは、<strong>テストが実装の詳細にどれだけ結合しているか</strong>によって決まります。テストは実装の手順（how）ではなく、コードがもたらす<strong>観測可能な結果（observable behavior）</strong>を検証すべきだ、という原則がここから導かれます（次のStep 6で詳しく扱います）。
            </p>
          </div>
        </section>

        {/* ===== Step 06 ===== */}
        <section className="section" id="step6">
          <div className="section-head">
            <span className="section-badge">Step 06</span>
            <h2>モックとテストの壊れやすさ（fragility）</h2>
          </div>
          <div className="prose">
            <h3>モックとスタブの違い</h3>
            <p>本書では、テストダブル全般を大きく2種類に分けて説明します。</p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-git-compare"></i>モック vs スタブ
              </div>
              <table>
                <thead>
                  <tr>
                    <th>種類</th>
                    <th>検証の方向</th>
                    <th>目的</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>スタブ</strong></td>
                    <td>状態検証（state verification）</td>
                    <td>
                      SUTに「間接的な入力」を与えるための道具。呼ばれ方そのものは検証しない
                    </td>
                  </tr>
                  <tr>
                    <td><strong>モック</strong></td>
                    <td>振る舞い検証（behavior verification）</td>
                    <td>
                      SUTが協働オブジェクトに対して行った「間接的な出力（＝呼び出し）」を検証するための道具
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              この区別はMartin FowlerがGerard Meszarosの分類を紹介した記事「Mocks Aren&apos;t Stubs」で広く知られるようになりました。ポイントは、<strong>スタブへの呼び出しをテストの中でアサーションしてしまうと、それは事実上モックとして使っていることになる</strong>、という点です。この誤用が、次に説明する「壊れやすさ」の主要な原因になります。
            </p>

            <h3>observable behavior と implementation detail</h3>
            <p>
              テストが実装の詳細（例: 内部でどのプライベートメソッドが何回呼ばれたか）に結合していると、リファクタリングのたびにテストが（振る舞いは変わっていないのに）失敗する「偽陽性」が発生します。本書はこれを避けるために、次のルールを提示しています。
            </p>
            <ul>
              <li>
                テストは、SUTが外部に公開している<strong>観測可能な振る舞い（observable behavior）</strong>だけを検証する。
              </li>
              <li>
                あるコードが観測可能な振る舞いの一部と言えるのは、次のいずれかを満たす場合である。
                <ol>
                  <li>
                    クライアントの目的達成を助ける「操作（コマンド or クエリ）」を公開している
                  </li>
                  <li>
                    クライアントが目的達成のために依存する「状態」を公開している
                  </li>
                  <li>
                    アプリケーションの境界を越えて外部システムに影響を与える副作用（side effect）を引き起こす
                  </li>
                </ol>
              </li>
              <li>
                上記に当てはまらない内部実装（プライベートメソッド、内部でのみ使うヘルパークラスなど）は、テストの対象にしてはいけない。
              </li>
            </ul>

            <h3>モックとテスト壊れやすさの関係</h3>
            <p>
              モックを多用するほど、テストは実装の「手順」に強く結合します。したがって本書は次の指針を打ち出します。
            </p>

            <div className="callout plum">
              <div>
                <strong>モックは、アプリケーションの境界を越えた「共有された可変な依存（unmanaged dependency）」に対してのみ使う。</strong>
              </div>
            </div>

            <p>
              これはStep 3の classical/London school の対立を統一的に説明する原則でもあります。境界内部の協働オブジェクト（自分のドメインモデルなど）まで律儀にモック化してしまうと、リファクタリング耐性が大きく損なわれます。
            </p>
          </div>
        </section>
        {/* ===== Step 07 ===== */}
        <section className="section" id="step7">
          <div className="section-head">
            <span className="section-badge">Step 07</span>
            <h2>テストダブルの分類 ― Dummy / Fake / Stub / Spy / Mock</h2>
          </div>
          <div className="prose">
            <p>
              テストダブルという用語自体は、Gerard Meszaros が著書『xUnit Test Patterns』で導入し、Martin Fowlerの記事「Mocks Aren&apos;t Stubs」によって広く普及しました。5種類の分類を整理すると次のようになります。
            </p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-category"></i>テストダブルの5分類
              </div>
              <table>
                <thead>
                  <tr>
                    <th>種類</th>
                    <th>実際に使われるか</th>
                    <th>特徴</th>
                    <th>典型的な用途</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Dummy</strong></td>
                    <td>使われない</td>
                    <td>パラメータの穴埋めのためだけに渡される</td>
                    <td>引数として必須だがテストでは無関係な値</td>
                  </tr>
                  <tr>
                    <td><strong>Fake</strong></td>
                    <td>使われる（簡易実装）</td>
                    <td>動作する実装を持つが、本番用途には向かない近道実装</td>
                    <td>インメモリDB、インメモリキューなど</td>
                  </tr>
                  <tr>
                    <td><strong>Stub</strong></td>
                    <td>使われる</td>
                    <td>
                      あらかじめ決められた回答を返す。呼ばれ方自体は検証しない
                    </td>
                    <td>外部APIのレスポンスを固定して与えたいとき</td>
                  </tr>
                  <tr>
                    <td><strong>Spy</strong></td>
                    <td>使われる</td>
                    <td>Stubに「呼ばれた記録」を残す機能を足したもの</td>
                    <td>呼び出し回数や引数を後から確認したいとき</td>
                  </tr>
                  <tr>
                    <td><strong>Mock</strong></td>
                    <td>使われる</td>
                    <td>事前に「期待する呼ばれ方」を設定し、それを検証する</td>
                    <td>
                      メール送信・決済実行など、副作用の発生自体を確認したいとき
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>どちらを使うべきかの判断フロー</h3>
            <p>
              「状態を確認したいのか」「振る舞い（呼び出し）を確認したいのか」で使い分けます。Martin Fowlerが提唱する「state verification（状態検証） vs behavior verification（振る舞い検証）」の考え方を、意思決定フローチャートにすると次のようになります。
            </p>

            <div className="mermaid-wrap" id="diag-3">
              <Mermaid chart={DIAGRAM_3} />
            </div>
            <p className="diagram-caption">図4: テストダブルの選び方 ― 意思決定フロー</p>

            <p>
              Fowler自身も、<strong>状態検証（Stub/Fakeで十分なケース）を優先し、Mockは本当に副作用の発生自体が仕様であるときだけ使う</strong>ことを推奨しています。これはKhorikovの「モックは境界を越えたunmanaged dependencyにのみ使う」という指針と一致します。
            </p>
          </div>
        </section>

        {/* ===== Step 08 ===== */}
        <section className="section" id="step8">
          <div className="section-head">
            <span className="section-badge">Step 08</span>
            <h2>3つのテストスタイルと関数型アーキテクチャ</h2>
          </div>
          <div className="prose">
            <p>
              本書は、ユニットテストの書き方を3つのスタイルに分類し、優劣を明確に示しています。
            </p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-adjustments"></i>3つのテストスタイル
              </div>
              <table>
                <thead>
                  <tr>
                    <th>スタイル</th>
                    <th>検証方法</th>
                    <th>モックの必要性</th>
                    <th>リファクタリング耐性</th>
                    <th>備考</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Output-based</strong>（出力ベース）</td>
                    <td>戻り値を検証する</td>
                    <td>不要（副作用がないため）</td>
                    <td>最も高い</td>
                    <td>純粋関数に対してのみ適用できる</td>
                  </tr>
                  <tr>
                    <td><strong>State-based</strong>（状態ベース）</td>
                    <td>実行後のオブジェクトやDBの状態を検証する</td>
                    <td>場合による</td>
                    <td>高い</td>
                    <td>もっとも一般的に使えるスタイル</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Communication-based</strong>（コミュニケーションベース）
                    </td>
                    <td>協働オブジェクトへの呼び出しをモックで検証する</td>
                    <td>必須</td>
                    <td>最も低い</td>
                    <td>
                      実装詳細に結合しやすく、乱用すると壊れやすいテストの温床になる
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>関数型アーキテクチャ ― Functional Core, Imperative Shell</h3>
            <p>
              Output-basedスタイルを最大限に活用するための設計指針として、本書はGary Bernhardt氏が講演「Boundaries」で提唱した<strong>Functional Core, Imperative Shell</strong>の考え方を紹介しています。ビジネスロジックを副作用のない純粋な計算（Functional Core）として切り出し、DBアクセスや外部APIといった副作用は薄い外殻（Imperative Shell）に押し出す、という設計です。
            </p>

            <div className="mermaid-wrap" id="diag-4">
              <Mermaid chart={DIAGRAM_4} />
            </div>
            <p className="diagram-caption">図5: Functional Core, Imperative Shell</p>

            <p>
              この構造の利点は明確です。Functional Coreの部分は入力と出力だけを見ればよいため、<strong>モックが一切不要なOutput-basedテスト</strong>を大量に書けます。副作用を伴う統合テストはImperative Shellの薄い部分にだけ集中させればよく、テストピラミッド全体の効率が大きく向上します。
            </p>

            <div className="callout forest">
              <div>
                なお、この設計思想は Hexagonal Architecture（Alistair Cockburn）や Ports and Adapters とも本質的に同じ発想であり、複数の著名開発者が独立に「発見」してきた考え方であることも押さえておくとよいでしょう。
              </div>
            </div>
          </div>
        </section>

        {/* ===== Step 09 ===== */}
        <section className="section" id="step9">
          <div className="section-head">
            <span className="section-badge">Step 09</span>
            <h2>価値あるテストへのリファクタリング ― Humble Objectパターン</h2>
          </div>
          <div className="prose">
            <p>
              「テストしにくいコード」の多くは、<strong>複雑なロジック</strong>と<strong>外部依存との協調</strong>が同じクラスの中に同居していることが原因です。本書は、この2つを分離する手法として<strong>Humble Object パターン</strong>を紹介しています。
            </p>

            <div className="mermaid-wrap" id="diag-5">
              <Mermaid chart={DIAGRAM_5} />
            </div>
            <p className="diagram-caption">
              図6: Humble Objectパターンによるリファクタリング
            </p>

            <p>分離の効果は次の通りです。</p>
            <ul>
              <li>
                <strong>Domain Logic</strong> はFunctional Coreと同様、外部依存を持たないためOutput-basedテストで大量にカバーできる。
              </li>
              <li>
                <strong>Humble Controller</strong> はロジックをほぼ持たず「つなぐだけ」の薄い層になるため、そもそもユニットテストで厳密に検証する必要性が下がる（必要であれば少数の統合テストでカバーする）。
              </li>
              <li>
                結果として、テスト全体の<strong>保守コストを増やさずに回帰保護を最大化</strong>できる。
              </li>
            </ul>
            <p>
              このパターンは、コントローラー層・UIロジック・バッチ処理の入り口など、「テストが書きにくい」と感じるあらゆる場所に応用できます。
            </p>
          </div>
        </section>
        {/* ===== Step 10 ===== */}
        <section className="section" id="step10">
          <div className="section-head">
            <span className="section-badge">Step 10</span>
            <h2>統合テスト（Integration Testing）の実践</h2>
          </div>
          <div className="prose">
            <h3>なぜ統合テストが必要か</h3>
            <p>
              ユニットテストだけでは、実際のデータベースや外部サービスとの接続部分の不具合を検知できません。本書は、<strong>ユニットテストではカバーしきれない「境界」を検証するために統合テストが不可欠</strong>だとしつつ、統合テストをどこまで書くべきかについて明確な指針を示しています。
            </p>

            <h3>「管理された依存」と「管理されていない依存」</h3>
            <p>依存関係を次の2種類に分類するのが最大のポイントです。</p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-network"></i>Managed dependency vs Unmanaged dependency
              </div>
              <table>
                <thead>
                  <tr>
                    <th>依存の種類</th>
                    <th>定義</th>
                    <th>例</th>
                    <th>テストでの扱い</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Managed dependency</strong>（管理された依存）
                    </td>
                    <td>
                      自チームが完全にコントロールできる、かつ他システムから直接観測されない依存
                    </td>
                    <td>自チーム所有のリレーショナルDB</td>
                    <td>
                      <strong>モックにせず、実物（または実物に近いテスト用インスタンス）を使ってテストする</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Unmanaged dependency</strong>（管理されていない依存）
                    </td>
                    <td>
                      外部から観測される、または自チームがスキーマ・挙動を制御できない依存
                    </td>
                    <td>
                      決済API、メール送信サービス、他チームが所有するメッセージキュー
                    </td>
                    <td>
                      <strong>アプリケーションの境界でのみモックに置き換える</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              判定は「制御できるか」と「外部から観測されるか」の2つを<strong>両方</strong>満たすかどうかで行います。Managed dependency は「自チームが制御でき、<strong>かつ</strong>外部から直接観測されない」場合に限られ、いずれか一方でも欠ける（制御できない、<strong>または</strong>外部から観測される）場合は Unmanaged dependency として扱います。
            </p>

            <div className="mermaid-wrap" id="diag-6">
              <Mermaid chart={DIAGRAM_6} />
            </div>
            <p className="diagram-caption">
              図7: Managed / Unmanaged dependency の判定フロー
            </p>

            <p>
              この分類により、「DBはモックすべきか？」という初学者が必ずぶつかる疑問に明確な答えが出ます。<strong>自チームが所有し、かつ外部から直接観測されないDBはmanaged dependencyなので、モックせずに実物（テスト用インスタンス）を使う</strong>のが正解です。
            </p>

            <p>
              ただし「自チーム所有」であることだけでは判定できません。同じDBでも、他システムが直接参照するテーブルやビュー、外部連携用に公開しているスキーマのように<strong>外部から観測される部分は unmanaged dependency として扱います</strong>。この場合、そのテーブルの構造は外部との契約になり、自由に変更できないためです。所有権ではなく「観測可能性」が境界を決める、と覚えてください。
            </p>

            <h3>統合テストのベストプラクティス（本書の要点）</h3>
            <ol>
              <li>
                ドメインロジックのすべてのユースケースをユニットテストで網羅し、統合テストは「正常系1本＋主要な異常系少数」に絞る。
              </li>
              <li>
                統合テストの対象は「自分のコードが管理する部分」までとし、サードパーティのライブラリ自体の中身はテストしない。
              </li>
              <li>
                ログ出力のような横断的関心事は、外部から観測可能な重要なログのみを対象にテストし、すべてのログをテストしようとしない。
              </li>
            </ol>
          </div>
        </section>

        {/* ===== Step 11 ===== */}
        <section className="section" id="step11">
          <div className="section-head">
            <span className="section-badge">Step 11</span>
            <h2>モッキングのベストプラクティス</h2>
          </div>
          <div className="prose">
            <p>
              Step 6・Step 10の内容を踏まえ、本書が示すモッキングの実践的なルールを整理します。
            </p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-checklist"></i>モッキングのベストプラクティス
              </div>
              <table>
                <thead>
                  <tr>
                    <th>ベストプラクティス</th>
                    <th>理由</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>モックは unmanaged dependency に対してのみ使う</td>
                    <td>
                      managed dependencyをモック化すると実装詳細への結合が生まれ、リファクタリング耐性が落ちる
                    </td>
                  </tr>
                  <tr>
                    <td>モックの検証は「アプリケーションの境界」でのみ行う</td>
                    <td>
                      境界の内側（ドメインオブジェクト同士のやり取り）まで検証すると壊れやすいテストになる
                    </td>
                  </tr>
                  <tr>
                    <td>1つの外部依存に対するモックの数を最小限にする</td>
                    <td>
                      サードパーティAPIを直接あちこちでモックせず、自作のアダプター（Facade）でラップしてからそのアダプターだけをモックする
                    </td>
                  </tr>
                  <tr>
                    <td>戻り値のないコマンド呼び出しの検証にモックを使う</td>
                    <td>
                      戻り値があるクエリはStub/Fakeで代替できることが多く、モックは副作用の確認に本質的な役割を持つ場合に限定する
                    </td>
                  </tr>
                  <tr>
                    <td>モックの設定・検証コードは共通化する</td>
                    <td>
                      モックのセットアップが各テストにコピペされると保守性が急激に下がる
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== Step 12 ===== */}
        <section className="section" id="step12">
          <div className="section-head">
            <span className="section-badge">Step 12</span>
            <h2>データベースのテスト</h2>
          </div>
          <div className="prose">
            <p>
              本書はデータベースを含む統合テストについて、次のような具体的な実践方法を紹介しています。
            </p>

            <h3>トランザクション管理</h3>
            <p>
              各テストの実行後にデータベースの状態を確実に元に戻す必要があります。代表的な2つの方式は次の通りです。
            </p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-database"></i>トランザクション管理の方式
              </div>
              <table>
                <thead>
                  <tr>
                    <th>方式</th>
                    <th>概要</th>
                    <th>メリット</th>
                    <th>デメリット</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>トランザクションロールバック方式</td>
                    <td>
                      テスト開始時にトランザクションを開始し、テスト終了時にコミットせずロールバックする
                    </td>
                    <td>高速、後始末が確実</td>
                    <td>
                      DB製品によっては本番コードのトランザクション制御と干渉することがある
                    </td>
                  </tr>
                  <tr>
                    <td>クリーンアップ方式</td>
                    <td>各テスト前後に対象テーブルを明示的に初期化する</td>
                    <td>トランザクション制御に依存しないため汎用的</td>
                    <td>ロールバック方式よりやや低速になりがち</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>テストデータのライフサイクル</h3>
            <ul>
              <li>
                テストデータは各テストの Arrange セクション内で明示的に作成し、他のテストと共有しない。
              </li>
              <li>
                「あらかじめ用意された共有フィクスチャ」に依存すると、テスト同士が意図せず結合し、実行順序に依存する不安定なテスト（flaky test）を生む原因になる。
              </li>
              <li>
                共通のセットアップコードは、共有フィクスチャとしてではなく「ヘルパーメソッド／ファクトリ関数」として抽出し、各テストが自分の意思で呼び出す形にする。
              </li>
            </ul>

            <h3>並列実行時の注意</h3>
            <p>
              複数のテストを並列実行する場合、同じテーブル・同じ行に対する競合が発生しないよう、テストごとに独立したデータ（例: ランダムなIDや専用スキーマ）を使う設計が推奨されます。
            </p>
          </div>
        </section>

        {/* ===== Step 13 ===== */}
        <section className="section" id="step13">
          <div className="section-head">
            <span className="section-badge">Step 13</span>
            <h2>よくあるアンチパターンと対処法</h2>
          </div>
          <div className="prose">
            <p>
              本書の最終章では、現場で頻出する6つのアンチパターンが具体的に列挙されています。
            </p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-alert-triangle"></i>6つのアンチパターン
              </div>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>アンチパターン</th>
                    <th>何が問題か</th>
                    <th>対処法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>プライベートメソッドを直接テストする</td>
                    <td>
                      実装詳細への結合が生まれ、リファクタリング耐性が失われる
                    </td>
                    <td>
                      プライベートメソッドは、それを利用する公開APIを通して間接的にテストする
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>テストのためだけにプライベート状態を公開する</td>
                    <td>カプセル化が崩れ、本番コードの設計が歪む</td>
                    <td>
                      公開すべき状態が「観測可能な振る舞い」の一部なら公開してよいが、テストのためだけの公開は避ける
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>ドメイン知識をテストに漏出させる</td>
                    <td>
                      本番コードと同じ計算ロジックをテストコード内に複製してしまい、バグがあっても両方が同じ間違え方をして検知できない
                    </td>
                    <td>
                      テストでは、事前に計算しておいた「決め打ちの期待値」を使う
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>コード汚染（production code pollution）</td>
                    <td>
                      テストのためだけの分岐やフラグが本番コードに混入し、可読性・安全性が下がる
                    </td>
                    <td>
                      テスト用の分岐はHumble Objectパターンなどで本番コードの外に追い出す
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>モック対象を「具象クラスかどうか」で決める</td>
                    <td>
                      具象クラスをモック化すること自体が誤りなのではなく、アプリケーション内部の実装詳細をモック化してしまうことが問題。逆に「抽象だからモックしてよい」と考えると、内部のインターフェースまでモック化してリファクタリング耐性を失う
                    </td>
                    <td>
                      モック対象は<strong>アプリケーション境界</strong>と<strong>managed / unmanaged の分類</strong>で選ぶ（境界を越える unmanaged dependency のみモック化する）。インターフェースは、実装が複数あるなど本当に抽象として意味がある場合か、上記のモック化に必要な場合にのみ導入し、単一実装のためだけに機械的に作らない
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>時間（現在時刻）の扱い</td>
                    <td>
                      <code>Now()</code> を直接コード内で呼び出すと、実行するたびに結果が変わり再現性がなくなる
                    </td>
                    <td>
                      現在時刻を返す「クロック（Clock）」を抽象化して注入し、テストでは固定値を返すFake Clockに差し替える
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* ===== Checklist ===== */}
        <section className="section" id="checklist">
          <div className="section-head">
            <span className="section-badge"><i className="ti ti-checkbox"></i></span>
            <h2>まとめ: 実践チェックリスト</h2>
          </div>
          <div className="prose">
            <p>
              ここまでの内容を、日々のコードレビューやテスト作成時に使えるチェックリストとして整理します。クリックしてチェックを付けられます。
            </p>
            <Checklist />
          </div>
        </section>

        {/* ===== 2026 Updates ===== */}
        <section className="section" id="update2026">
          <div className="section-head">
            <span className="section-badge"><i className="ti ti-sparkles"></i></span>
            <h2>2026年時点の補足: 議論はどう発展したか</h2>
          </div>
          <div className="prose">
            <p>
              本書が刊行された2020年以降も、著名な国際的開発者たちによって「良いテストとは何か」という議論は活発に続いています。2025年末から2026年にかけての最新動向を補足します。
            </p>

            <h3>Kent Beckの「Composable Tests」（2025年11月）</h3>
            <p>
              Kent Beckは2019年に発表した「Test Desiderata」（良いテストが持つべき12の性質）の続編として、2025年11月に「Composable Tests」という論考を公開しました。ここでは、単に個々のテストを「分離（Isolated）」させるだけでなく、<strong>テストを組み合わせ（Composable）て冗長な検証を削減しながら予測力（Predictive）を落とさない</strong>という考え方が掘り下げられています。重複したテストをただ削除するのではなく、後発のテストから重複部分を取り除いて「合成」することで、同じ検出力をより少ないコードで維持できると説明されています。
            </p>

            <p>Kent Beckが2019年に示した12の性質は次の通りです。</p>
            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-list-numbers"></i>Test Desiderata（Kent Beck, 2019）
              </div>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>性質（英語）</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Isolated</td>
                    <td>他のテストの結果に影響されない</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Composable</td>
                    <td>テストを自由に組み合わせて実行しても結果が変わらない</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Fast</td>
                    <td>高速に実行できる</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Inspiring</td>
                    <td>テストが通ることで自信が持てる</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Writable</td>
                    <td>テスト対象のコストに対して安価に書ける</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Readable</td>
                    <td>読み手にとって理解しやすい</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Behavioral</td>
                    <td>コードの振る舞いが変わればテスト結果も変わる</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Structure-insensitive</td>
                    <td>コードの内部構造が変わってもテスト結果は変わらない</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Automated</td>
                    <td>人手を介さず自動実行できる</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Specific</td>
                    <td>失敗したとき原因が明確にわかる</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Deterministic</td>
                    <td>何も変えなければ結果は常に同じ</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Predictive</td>
                    <td>テストが通れば本番でも成功すると予測できる</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Emily Bacheによる「Test Desiderata 2.0」（2025年12月）</h3>
            <p>
              著名なテストコーチであるEmily Bacheは、2025年12月にBeckの12性質を再整理した「Test Desiderata 2.0」を提案しました。Bacheは、Beckのリストが「個々のテストの性質」と「テストスイート全体の性質」を混在させていた点に着目し、20名以上のテスト専門家（Kent Beck、Kent C. Dodds、Dave Farley、Michael Feathers、Steve Freeman、Kevlin Henneyなど）の知見を分析した上で、次の4つの「メタ目標」の下に各性質を再配置しました。
            </p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-target-arrow"></i>Test Desiderata 2.0（Emily Bache, 2025）
              </div>
              <table>
                <thead>
                  <tr>
                    <th>メタ目標</th>
                    <th>対応する個々の性質（例）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>本番での成功を予測できるか（Predict success）</td>
                    <td>Behavioral、実行品質（性能など）</td>
                  </tr>
                  <tr>
                    <td>速いフィードバックが得られるか（Fast feedback）</td>
                    <td>Isolated、最小限のデータ、並列実行可能性</td>
                  </tr>
                  <tr>
                    <td>継続的な設計変更を支援できるか（Support design change）</td>
                    <td>Composable、設計への圧力（Design Pressure）</td>
                  </tr>
                  <tr>
                    <td>保有コストを最小化できるか（Minimize cost of ownership）</td>
                    <td>Readable、Writable、Deterministic、Diagnosable（失敗原因の特定しやすさ）、Structure-insensitive</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              この再整理は、Khorikovの「4本柱」と非常に近い発想であり、<strong>「予測力」「速さ」「設計変更への耐性（＝リファクタリング耐性）」「保守コスト」</strong>という軸に世界的な議論が収束しつつあることがわかります。
            </p>

            <h3>テストピラミッドとテスティングトロフィー、そして現在地</h3>
            <p>
              Martin Fowlerが提唱した「テストピラミッド」に対し、Kent C. Dodds（React Testing Libraryの作者）は2018年、ツールの進化（Jest、Cypressなど）を背景に「テスティングトロフィー」を提唱しました。これは、ユニットテストの比重を下げ、統合テストの比重を最大化する考え方です。2026年現在も、フロントエンド領域を中心にトロフィーモデルは広く参照されていますが、いずれのモデルも「実装詳細ではなく振る舞いを検証する」という本書の主張と矛盾するものではなく、<strong>「どの粒度のテストに比重を置くか」というチューニングの違い</strong>として理解するのが実務的です。
            </p>

            <h3>AI生成コードのテスト（2026年の新しい論点）</h3>
            <p>
              2026年に入り、AIコーディングアシスタントが生成するコードの割合が急増したことを受け、「AIが書いたコードをどうテストするか」という新しい論点が広がっています。特に強調されているのが以下の点です。
            </p>
            <ul>
              <li>
                <strong>Verification Paradox（検証のパラドックス）</strong>: コードを書いたAIモデル自身にテストも書かせると、同じ思考の偏り（バイアス）がテストにも継承され、欠陥を見逃しやすい。コード生成とテスト生成は独立した情報源（仕様書・スキーマ・実トレースなど）に基づかせるべきだとされています。
              </li>
              <li>
                <strong>振る舞いカバレッジの重視</strong>: 行カバレッジは「実行されたか」しか示さないため、ミューテーションテスト（意図的にロジックを壊してテストが検知できるか確認する手法）やプロパティベーステストを組み合わせ、「本当に正しさを検証できているか」を確認する動きが広がっています。
              </li>
              <li>
                これらの新しい実践も、根底にあるのは本書の4本柱のうち特に「回帰に対する保護」を強化する取り組みであり、Khorikovが2020年に示した原則が土台として今も通用していることがわかります。
              </li>
            </ul>
          </div>
        </section>

        {/* ===== References ===== */}
        <section className="section" id="references">
          <div className="section-head">
            <span className="section-badge"><i className="ti ti-link"></i></span>
            <h2>参考文献・情報源</h2>
          </div>
          <div className="prose">
            <p>
              本記事の作成にあたり、以下の一次情報・著名開発者の発信を参照しました（2026年9月5日時点で確認）。
            </p>

            <div className="ref-group">
              <h3><i className="ti ti-book-2"></i>書籍本体・出版社情報</h3>
              <div className="ref-grid">
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://www.oreilly.com/library/view/unit-testing-principles/9781617296277/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    O&apos;Reilly（書籍ページ・目次）
                  </a>
                  <span className="ref-url">https://www.oreilly.com/library/view/unit-testing-principles/9781617296277/</span>
                </div>
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://www.manning.com/books/unit-testing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Manning Publications（出版社公式ページ）
                  </a>
                  <span className="ref-url">https://www.manning.com/books/unit-testing</span>
                </div>
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://enterprisecraftsmanship.com/files/Unit-Testing-Chapter-1-Excerpt.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    著者Khorikov氏ブログ掲載チャプター抜粋
                  </a>
                  <span className="ref-url">https://enterprisecraftsmanship.com/files/Unit-Testing-Chapter-1-Excerpt.pdf</span>
                </div>
              </div>
            </div>

            <div className="ref-group">
              <h3><i className="ti ti-microphone-2"></i>著者インタビュー</h3>
              <div className="ref-grid">
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://techleadjournal.dev/episodes/58/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tech Lead Journal #58 ― Vladimir Khorikov
                  </a>
                  <span className="ref-url">https://techleadjournal.dev/episodes/58/</span>
                </div>
              </div>
            </div>

            <div className="ref-group">
              <h3>
                <i className="ti ti-user-star"></i>Martin Fowler（著名な国際的ソフトウェアアーキテクト）
              </h3>
              <div className="ref-grid">
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://martinfowler.com/articles/mocksArentStubs.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mocks Aren&apos;t Stubs
                  </a>
                  <span className="ref-url">https://martinfowler.com/articles/mocksArentStubs.html</span>
                </div>
              </div>
            </div>

            <div className="ref-group">
              <h3>
                <i className="ti ti-user-star"></i>Kent Beck（Extreme Programming / TDDの提唱者）
              </h3>
              <div className="ref-grid">
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://medium.com/@kentbeck_7670/test-desiderata-94150638a4b3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Test Desiderata（2019年、原著論考）
                  </a>
                  <span className="ref-url">https://medium.com/@kentbeck_7670/test-desiderata-94150638a4b3</span>
                </div>
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://newsletter.kentbeck.com/p/composable-tests"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Composable Tests（2025年11月、続編）
                  </a>
                  <span className="ref-url">https://newsletter.kentbeck.com/p/composable-tests</span>
                </div>
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://kentbeck.github.io/TestDesiderata/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Test Desiderata 公式まとめページ
                  </a>
                  <span className="ref-url">https://kentbeck.github.io/TestDesiderata/</span>
                </div>
              </div>
            </div>

            <div className="ref-group">
              <h3>
                <i className="ti ti-user-star"></i>Emily Bache（テストコーチ、Test Desiderata 2.0提唱者）
              </h3>
              <div className="ref-grid">
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://coding-is-like-cooking.info/2025/12/test-desiderata-2-0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Test Desiderata 2.0（2025年12月）
                  </a>
                  <span className="ref-url">https://coding-is-like-cooking.info/2025/12/test-desiderata-2-0/</span>
                </div>
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://lidonis.github.io/Test-Desiderata/framework.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Test Desiderata 2.0 フレームワーク解説
                  </a>
                  <span className="ref-url">https://lidonis.github.io/Test-Desiderata/framework.html</span>
                </div>
              </div>
            </div>

            <div className="ref-group">
              <h3>
                <i className="ti ti-user-star"></i>Kent C. Dodds（React Testing Library作者）
              </h3>
              <div className="ref-grid">
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://kentcdodds.com/blog/write-tests"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Write tests. Not too many. Mostly integration.
                  </a>
                  <span className="ref-url">https://kentcdodds.com/blog/write-tests</span>
                </div>
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Testing Trophy and Testing Classifications
                  </a>
                  <span className="ref-url">https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications</span>
                </div>
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Static vs Unit vs Integration vs E2E Testing
                  </a>
                  <span className="ref-url">https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests</span>
                </div>
              </div>
            </div>

            <div className="ref-group">
              <h3>
                <i className="ti ti-user-star"></i>Ian Cooper（.NETコミュニティ、ロンドン.NETユーザーグループ創設者）
              </h3>
              <div className="ref-grid">
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://www.infoq.com/presentations/tdd-original/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TDD, Where Did It All Go Wrong?（InfoQ）
                  </a>
                  <span className="ref-url">https://www.infoq.com/presentations/tdd-original/</span>
                </div>
              </div>
            </div>

            <div className="ref-group">
              <h3>
                <i className="ti ti-user-star"></i>Gary Bernhardt（Destroy All Software創設者）
              </h3>
              <div className="ref-grid">
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://www.destroyallsoftware.com/talks/boundaries"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Boundaries（Functional Core, Imperative Shellの提唱）
                  </a>
                  <span className="ref-url">https://www.destroyallsoftware.com/talks/boundaries</span>
                </div>
              </div>
            </div>

            <div className="ref-group">
              <h3>
                <i className="ti ti-user-star"></i>Oliver Drotbohm（Spring Data等のメンテナ）
              </h3>
              <div className="ref-grid">
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://odrotbohm.de/2025/12/rethinking-spring-application-integration-testing/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rethinking Spring Application Integration Testing（2025年12月）
                  </a>
                  <span className="ref-url">https://odrotbohm.de/2025/12/rethinking-spring-application-integration-testing/</span>
                </div>
              </div>
            </div>

            <div className="ref-group">
              <h3>
                <i className="ti ti-robot"></i>AI生成コードのテスト（2026年の最新動向）
              </h3>
              <div className="ref-grid">
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://skyramp.dev/blog/testing-ai-generated-code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Testing AI-Generated Code: Best Practices for 2026
                  </a>
                  <span className="ref-url">https://skyramp.dev/blog/testing-ai-generated-code</span>
                </div>
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://testdino.com/blog/how-to-test-ai-generated-code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    How to Test AI-Generated Code: Best Practices &amp; Checklist (2026)
                  </a>
                  <span className="ref-url">https://testdino.com/blog/how-to-test-ai-generated-code</span>
                </div>
              </div>
            </div>

            <div className="ref-group">
              <h3><i className="ti ti-notes"></i>その他、書籍の要点整理</h3>
              <div className="ref-grid">
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://notesbylex.com/4-pillars-of-good-unit-tests"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    4 Pillars of Good Unit Tests（要点まとめ）
                  </a>
                  <span className="ref-url">https://notesbylex.com/4-pillars-of-good-unit-tests</span>
                </div>
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://olano.dev/blog/unit-testing-principles/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unit Testing Principles（要点まとめ、2025年1月）
                  </a>
                  <span className="ref-url">https://olano.dev/blog/unit-testing-principles/</span>
                </div>
                <div className="ref-card">
                  <a
                    className="ref-title"
                    href="https://qaskills.sh/blog/stub-mock-spy-fake-test-doubles-explained"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    テストダブルの実務ガイド（2026年）
                  </a>
                  <span className="ref-url">https://qaskills.sh/blog/stub-mock-spy-fake-test-doubles-explained</span>
                </div>
              </div>
            </div>

            <p className="note-final">
              本記事は上記ソースの内容を要約・再構成した学習ガイドであり、原著書籍の文章を逐語的に引用するものではありません。詳細な実装例やC#による具体的なコードサンプルについては、必ず原著書籍（Manning Publications刊）を参照してください。
            </p>
          </div>
        </section>

        <footer className="footer">
          <p>
            Unit Testing Principles, Practices, and Patterns 完全ガイド ― Classic Software Testing Books companion series
          </p>
        </footer>
      </main>
    </div>
  );
}
