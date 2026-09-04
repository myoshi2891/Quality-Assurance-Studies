import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './the-way-of-the-web-tester-guide.css';

export const metadata: Metadata = {
  title: 'The Way of the Web Tester 実践ガイド ― 初学者のためのステップバイステップ・ベストプラクティス | QA Studies',
  description:
    'Jonathan Rasmusson著『The Way of the Web Tester』をベースに、テストピラミッドの基礎からUI/API/単体テストの実践、テスティングトロフィー、Playwrightの最新ベストプラクティスまでを網羅した初学者向け実践ガイド。',
};

const DIAGRAM_TEST_PYRAMID = `flowchart TB
    UI["UIテスト<br/>ブラウザ全体を通して検証<br/>数は少なく・実行は遅く・壊れやすい"]
    INT["統合テスト<br/>サービス層やHTTP経由で検証<br/>UIより高速・比較的安定"]
    UNIT["単体テスト<br/>関数・クラス単位で検証<br/>数は多く・実行は高速・安定"]
    UI --- INT --- UNIT`;

const DIAGRAM_HTTP_COMM = `flowchart LR
    Client["テストコード<br/>(クライアント)"] -->|"HTTPリクエスト<br/>例: GET /permits/1"| Server["Webサーバー / API"]
    Server -->|"HTTPレスポンス<br/>例: 200 OK + JSON"| Client`;

const DIAGRAM_PYRAMID_FLOW = `flowchart TB
    Start["単体テストから始める<br/>(ロジックの正しさを保証)"] --> Step2["統合テストを足す<br/>(サービス間連携を保証)"]
    Step2 --> Step3["UIテストで仕上げる<br/>(重要なユーザーフローのみ)"]
    Step3 --> Result["バランスの取れた<br/>自動テストスイート"]
    Result -. "フィードバックを受けて再調整" .-> Start`;

const DIAGRAM_PORTS_ADAPTERS = `flowchart LR
    Core["アプリケーションの<br/>コアロジック"]
    Port["ポート<br/>(インターフェース)"]
    RealAdapter["本番用アダプター<br/>(本物のDB/APIに接続)"]
    MockAdapter["テスト用アダプター<br/>(モック/スタブ)"]
    Core --- Port
    Port --- RealAdapter
    Port -. "テスト時に差し替え" .- MockAdapter`;

const DIAGRAM_TDD_CYCLE = `flowchart LR
    Red["🔴 Red<br/>失敗するテストを書く"] --> Green["🟢 Green<br/>テストを通す最小限の実装をする"]
    Green --> Refactor["🔵 Refactor<br/>コードを整理する"]
    Refactor --> Red`;

const DIAGRAM_TESTING_TROPHY = `flowchart BT
    Static["静的解析<br/>ESLint / TypeScript"]
    Unit["単体テスト"]
    Integration["統合テスト<br/>(この文脈でROIが高いとされる層)"]
    E2E["E2Eテスト<br/>(重要フローのみ・少数)"]
    Static --- Unit --- Integration --- E2E`;

export default function TheWayOfTheWebTesterGuidePage() {
  return (
    <div className="the-way-of-the-web-tester-page">
      <div className="layout">
        <NavBar />

        <main className="main">
          <header className="hero">
            <p className="eyebrow">初学者向け実践ガイド</p>
            <h1>The Way of the Web Tester 実践ガイド</h1>
            <p className="subtitle">初学者のためのステップバイステップ・ベストプラクティス</p>
            <p className="hero-note">
              本ガイドは、Jonathan Rasmusson 著『
              <em>The Way of the Web Tester: A Beginner&apos;s Guide to Automating Tests</em>
              』（Pragmatic Bookshelf,
              2016年）の考え方をベースに、2026年8月時点の業界動向（テストピラミッドの現代的な解釈、Playwright等モダンツールのベストプラクティス）を交えて再構成した学習ガイドです。原著情報・出典URLは
              <a href="#sec-18">「18. 参考文献」</a>
              を参照してください。原著の公式ページは
              <a
                href="https://pragprog.com/titles/jrtest/the-way-of-the-web-tester/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pragmatic Bookshelf
              </a>
              および
              <a
                href="https://www.oreilly.com/library/view/the-way-of/9781680502251/"
                target="_blank"
                rel="noopener noreferrer"
              >
                O&apos;Reilly
              </a>
              で確認できます。
            </p>
            <div className="stat-grid">
              <div className="stat-card">
                <span className="stat-num">2016</span>
                <span className="stat-label">原著出版年</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">256</span>
                <span className="stat-label">原著ページ数</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">18</span>
                <span className="stat-label">本ガイドの章立て</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">6</span>
                <span className="stat-label">Mermaid図解</span>
              </div>
            </div>
          </header>

          {/* 1. 本書について */}
          <section id="sec-1" className="section prose">
            <h2>1. 本書について</h2>
            <p>
              『The Way of the Web
              Tester』は、自動テストを書いたことがないテスターや、テストをあまり意識してこなかった開発者に向けて書かれた入門書です。著者の
              Jonathan Rasmusson は『The Agile Samurai』の著者でもあり、Spotify
              でチームコーチングをしていた経験を持つエンジニアです。
            </p>
            <p>本書のゴールは大きく3つです。</p>
            <ul>
              <li>Webのための「本当に良い」自動テストの書き方を学ぶこと</li>
              <li>どのテストを、どれだけ書くべきかを判断できるようになること</li>
              <li>
                テスターと開発者がテスト戦略について同じ語彙で会話できるようになること
              </li>
            </ul>
            <p>
              原著は UI テスト、統合テスト、単体テストという各層を行き来しながら「テストピラミッド」を解説する構成になっています。本ガイドもこの流れに沿って、ステップバイステップで解説します。
            </p>
          </section>

          {/* 2. テストピラミッドとは何か */}
          <section id="sec-2" className="section prose">
            <h2>2. テストピラミッドとは何か</h2>
            <p>
              テストピラミッドは、自動テストを「粒度（テストが検証する範囲の広さ）」によって3層に分類する考え方です。この概念は
              Mike Cohn の著書『Succeeding with Agile』（2009年）で紹介され、Martin Fowler
              が2012年に自身のブログ記事「Test
              Pyramid」で整理・普及させたことで広く知られるようになりました。
            </p>

            <Mermaid chart={DIAGRAM_TEST_PYRAMID} />

            <h3>3層の役割</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>層</th>
                    <th>検証対象</th>
                    <th>実行速度</th>
                    <th>実行コスト</th>
                    <th>壊れやすさ</th>
                    <th>主な担当ツール例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>UIテスト</td>
                    <td>ブラウザに表示されたHTML/CSS/操作結果</td>
                    <td>遅い</td>
                    <td>高い</td>
                    <td>高い（UI変更の影響を受けやすい）</td>
                    <td>Selenium, Playwright, Cypress</td>
                  </tr>
                  <tr>
                    <td>統合テスト</td>
                    <td>サービス間の連携、HTTP通信、REST API</td>
                    <td>中程度</td>
                    <td>中程度</td>
                    <td>中程度</td>
                    <td>REST Assured, Postman, requests</td>
                  </tr>
                  <tr>
                    <td>単体テスト</td>
                    <td>個々の関数・メソッド・クラス</td>
                    <td>速い</td>
                    <td>低い</td>
                    <td>低い</td>
                    <td>JUnit, pytest, Jest</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>なぜピラミッド型が良いとされるのか</h3>
            <ul>
              <li>
                単体テストは実行が速く、失敗した場所を特定しやすいため、<strong>土台を厚くする</strong>ことでフィードバックループを短くできる
              </li>
              <li>
                UIテストは「本当にユーザーが使う流れが動くか」を保証する最終防衛ラインとして、
                <strong>あえて数を絞る</strong>
              </li>
              <li>統合テストはその中間として、外部連携やAPI契約の破壊を早期に検知する</li>
            </ul>

            <div className="callout">
              <p className="callout-label">補足</p>
              <p>
                原著ではこの原則を「誰が何を書くべきか（Who&apos;s Writing These
                Things）」という観点でも整理しており、テスターと開発者の役割分担の議論に使えるフレームワークとして紹介されています。
              </p>
            </div>
          </section>

          {/* 3. Step1: UIテストを書く */}
          <section id="sec-3" className="section prose">
            <h2>3. Step 1: UIテストを書く</h2>
            <p>
              UIテストは、実際にブラウザを操作してユーザー体験を検証するテストです。原著では次の2つの原則が繰り返し強調されます。
            </p>
            <ul>
              <li>
                <strong>HTMLは「アサーション（検証）」のためにある</strong> —
                何が表示されているかを確認する材料
              </li>
              <li>
                <strong>CSSは「セレクション（要素の特定）」のためにある</strong> —
                どの要素を操作・検証するかを指定する手段
              </li>
            </ul>

            <h3>基本的なCSSセレクタ早見表</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>セレクタ</th>
                    <th>意味</th>
                    <th>例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>#id</code></td>
                    <td>idで要素を1つ特定</td>
                    <td><code>#submit-button</code></td>
                  </tr>
                  <tr>
                    <td><code>.class</code></td>
                    <td>classで要素を特定（複数該当あり）</td>
                    <td><code>.error-message</code></td>
                  </tr>
                  <tr>
                    <td><code>element</code></td>
                    <td>タグ名で特定</td>
                    <td><code>input</code>, <code>button</code></td>
                  </tr>
                  <tr>
                    <td><code>[attr=&quot;value&quot;]</code></td>
                    <td>属性値で特定</td>
                    <td><code>[type=&quot;email&quot;]</code></td>
                  </tr>
                  <tr>
                    <td><code>parent child</code></td>
                    <td>子孫要素を特定</td>
                    <td><code>.form .error</code></td>
                  </tr>
                  <tr>
                    <td><code>parent &gt; child</code></td>
                    <td>直接の子要素を特定</td>
                    <td><code>ul &gt; li</code></td>
                  </tr>
                  <tr>
                    <td><code>:nth-child(n)</code></td>
                    <td>n番目の子要素を特定</td>
                    <td><code>li:nth-child(2)</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>ステップバイステップの流れ</h3>
            <ol>
              <li>
                <strong>テスト対象のページを開く</strong> —
                ブラウザ自動化ツールで対象URLへ遷移する
              </li>
              <li>
                <strong>要素を特定する</strong> — まずは <code>getByRole</code>・
                <code>getByLabel</code>
                のようなユーザー向けロケーター（画面上の役割やラベルなど、利用者が要素を認識する手がかりに基づく指定）を使う。適切なロケーターが見つからない場合の代替として、id・class・属性を組み合わせたCSSセレクタを選ぶ（アクセシビリティ属性やラベルが整備されていないレガシーシステムでは、CSSセレクタが現実的な選択肢になる）
              </li>
              <li>
                <strong>操作を行う</strong> —
                クリック、入力、送信などユーザーの行動を再現する
              </li>
              <li>
                <strong>結果をアサートする</strong> —
                表示されたHTML（テキスト・要素の有無・属性値）を検証する
              </li>
            </ol>

            <div className="callout">
              <p className="callout-label">補足</p>
              <p>
                2026年時点の補足: Playwright など最新ツールでは、CSSセレクタよりも
                <code>role</code>（アクセシビリティロール）や
                <code>label</code>
                を使ったセレクタが推奨される傾向が強まっています。詳細は「15.
                Playwrightのベストプラクティス」で解説します。
              </p>
            </div>
          </section>

          {/* 4. Step2: レガシーへのUIテスト追加 */}
          <section id="sec-4" className="section prose">
            <h2>4. Step 2: レガシーシステムにUIテストを追加する</h2>
            <p>
              自動テストが存在しない既存システム（レガシーシステム）に、後から安全にUIテストを追加していく手順です。原著では次の3ステップで整理されています。
            </p>
            <ol>
              <li>
                <strong>正しいテスト対象ページにいることを確認する</strong> —
                タイトルタグやURL、目印となる要素の存在を確認し、意図しないページで誤ったテストを実行しないようにする。
              </li>
              <li>
                <strong>CSSセレクタを見極める</strong> —
                ブラウザの開発者ツールでDOM構造を調査し、変更に強い（IDや意味のあるdata属性を優先する）セレクタを選定する。
              </li>
              <li>
                <strong>アサーションを行う</strong> —
                期待する文言・状態が正しく表示されているかを検証する。
              </li>
            </ol>

            <h3>レガシーシステムでよくある落とし穴</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>落とし穴</th>
                    <th>内容</th>
                    <th>対策</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CSSクラス名が頻繁に変わる</td>
                    <td>デザイン変更のたびにテストが壊れる</td>
                    <td>
                      <code>data-testid</code> のような専用属性を追加してもらう
                    </td>
                  </tr>
                  <tr>
                    <td>ページの読み込みタイミングがずれる</td>
                    <td>要素がまだ描画されていない状態でアサートしてしまう</td>
                    <td>明示的な待機（Explicit Wait）を使う</td>
                  </tr>
                  <tr>
                    <td>テストごとにデータが汚染される</td>
                    <td>前のテストの残留データで結果が変わる</td>
                    <td>テストごとにデータをリセット・独立させる</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Step3: 統合テストでつなぐ */}
          <section id="sec-5" className="section prose">
            <h2>5. Step 3: 統合テストで点と点をつなぐ</h2>
            <p>
              統合テストとは、<strong>複数のユニットやコンポーネントが組み合わさったときの相互作用が期待どおりかを検証するテスト</strong>です。対象はバックエンドに限らず、モジュール間の連携、外部サービスとの結合、UIを含むコンポーネント同士の結合など、境界をまたぐ箇所すべてが候補になります。
            </p>
            <p>
              そのうえで原著は、その具体例としてバックエンド／REST
              APIのテストを取り上げ、「Webの仕組み（How the Web
              Works）」から丁寧に解き明かして、HTTP通信の基本を学んだ上でREST
              APIのテストへとつなげています。
            </p>

            <Mermaid chart={DIAGRAM_HTTP_COMM} />

            <h3>HTTPの基本用語</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>用語</th>
                    <th>意味</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>リクエスト（Request）</td>
                    <td>クライアントからサーバーへ送る要求</td>
                  </tr>
                  <tr>
                    <td>レスポンス（Response）</td>
                    <td>サーバーからクライアントへ返す応答</td>
                  </tr>
                  <tr>
                    <td>ステータスコード</td>
                    <td>処理結果を表す3桁の数値（例: 200, 404, 500）</td>
                  </tr>
                  <tr>
                    <td>ヘッダー</td>
                    <td>メタ情報（コンテンツ種別、認証情報など）</td>
                  </tr>
                  <tr>
                    <td>ボディ</td>
                    <td>実際に送受信されるデータ本体（JSONなど）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>REST（Representational State Transfer）とは</h3>
            <p>
              REST
              は、リソース（データ）をURLで表現し、HTTPメソッドで操作する設計思想です。統合テストではこのREST
              APIに対して直接リクエストを送り、レスポンスを検証します。
            </p>
          </section>

          {/* 6. Step4: RESTful APIの統合テスト */}
          <section id="sec-6" className="section prose">
            <h2>6. Step 4: RESTful Web APIを統合テストする</h2>
            <p>
              原著では許可証（Permit）を管理するRESTful
              APIを題材に、代表的な4つのHTTPメソッドのテストを解説しています。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>メソッド</th>
                    <th>目的</th>
                    <th>意図されたべき等性（実際の保証はAPI契約次第）</th>
                    <th>テストで確認すべきこと</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GET</td>
                    <td>リソースの取得</td>
                    <td>
                      <strong>安全かつべき等</strong>（サーバー状態の変更を要求しない）であることが期待される。ログ記録やアクセス計測など、クライアントが要求していない副次的な状態変化まで禁じるものではない
                    </td>
                    <td>
                      正しいデータが正しい形式で返るか、存在しない場合は適切なステータスコードか
                    </td>
                  </tr>
                  <tr>
                    <td>POST</td>
                    <td>新規リソースの作成</td>
                    <td>
                      一般にべき等ではないが、冪等キー等で重複排除を保証する契約もある
                    </td>
                    <td>
                      作成が成功したか、同じリクエストを再送・重複送信したときの挙動が契約どおりか、必須項目のバリデーション
                    </td>
                  </tr>
                  <tr>
                    <td>PUT</td>
                    <td>指定したURIのリソースの作成、または全体置換</td>
                    <td>同じ内容を再送しても同じ状態になることが期待される</td>
                    <td>
                      置換内容が反映されているか、再送しても状態が変わらないか、存在しないリソースへのPUTで新規作成する契約なら
                      <code>201 Created</code>
                      が返るか
                    </td>
                  </tr>
                  <tr>
                    <td>DELETE</td>
                    <td>リソースの削除</td>
                    <td>削除後に再送しても状態が変わらないことが期待される</td>
                    <td>
                      削除後に該当リソースが取得できなくなっているか、再送時のステータスコードが契約どおりか
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>ステップバイステップの流れ</h3>
            <ol>
              <li>テスト対象のエンドポイントとメソッドを決める</li>
              <li>リクエストに必要なパラメータ・ボディを準備する</li>
              <li>リクエストを送信する</li>
              <li>レスポンスのステータスコードとボディ内容をアサートする</li>
              <li>
                <strong>同じリクエストを再送・重複送信したときの挙動が、対象APIの仕様・契約どおりかを確認する</strong>
              </li>
              <li>必要に応じて、テスト後に作成・変更したデータをクリーンアップする</li>
            </ol>

            <div className="callout">
              <p className="callout-label">補足</p>
              <p>
                べき等性（Idempotency）とは「同じリクエストを複数回送っても、サーバーに対して意図される効果が1回だけ送った場合と同じになる」性質のことです。アクセスログの記録やアクセス数の計測といった、クライアントが要求していない副次的な状態変化が起きても、それだけでべき等性が失われるわけではありません。GET
                が安全かつべき等であること、PUT・DELETE
                がべき等であることは一般に<strong>意図された効果</strong>として期待されますが、<strong>実際にそう振る舞うかどうかはメソッド名ではなく対象APIの仕様・契約で決まります</strong>。POST
                も冪等キーを用いれば重複送信を排除する契約になり得ます。したがってテスト設計では「このメソッドだからべき等」と決め打ちせず、リトライや重複送信時の期待挙動をAPI契約で確認し、そのとおりに振る舞うかをテストで検証してください。
              </p>
            </div>
          </section>

          {/* 7. Step5: 単体テストで土台を固める */}
          <section id="sec-7" className="section prose">
            <h2>7. Step 5: 単体テストで土台を固める</h2>
            <p>
              単体テストはピラミッドの土台であり、最も数多く書かれるべきテストです。原著では「UIテストの課題（The
              Challenge with UI
              Tests）」を振り返りながら、より小さい単位でロジックを検証する単体テストの意義を説明しています。
            </p>

            <h3>単体テストが優れている理由</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>観点</th>
                    <th>UIテスト</th>
                    <th>単体テスト</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>実行速度</td>
                    <td>相対的に遅い（目安として秒単位のオーダー）</td>
                    <td>相対的に速い（目安としてミリ秒単位のオーダー）</td>
                  </tr>
                  <tr>
                    <td>失敗原因の特定</td>
                    <td>難しい（どこで壊れたか分かりにくい）</td>
                    <td>容易（対象範囲が狭い）</td>
                  </tr>
                  <tr>
                    <td>外部依存</td>
                    <td>ブラウザ・ネットワークに依存</td>
                    <td>基本的に依存なし</td>
                  </tr>
                  <tr>
                    <td>保守コスト</td>
                    <td>高い</td>
                    <td>低い</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout">
              <p className="callout-label">補足</p>
              <p>
                表の「実行速度」に挙げた時間はあくまで桁感をつかむための一般的な目安であり、固定値でも達成すべき性能目標でもありません。実際の実行時間は、テストの対象範囲、フィクスチャやセットアップの重さ、ブラウザやCI環境の性能によって大きく変わります。ここで押さえてほしいのは具体的な数値ではなく、<strong>UIテストは単体テストに比べて桁違いに遅くなりやすい</strong>という相対的な性質のほうです。
              </p>
            </div>

            <h3>ステップバイステップの流れ</h3>
            <ol>
              <li>テストしたい関数・メソッドを1つ選ぶ</li>
              <li>入力値（Arrange）を準備する</li>
              <li>対象を実行する（Act）</li>
              <li>出力結果を期待値と比較する（Assert）</li>
            </ol>
            <p>
              この「Arrange → Act →
              Assert（AAA）」パターンは、単体テストを読みやすく保つための基本形として広く使われています。
            </p>
          </section>

          {/* 8. Step6: JSの単体テスト */}
          <section id="sec-8" className="section prose">
            <h2>8. Step 6: ブラウザ上のJavaScriptを単体テストする</h2>
            <p>
              原著の「Bug
              Hunt」という演習では、実際のバグをHTML・JavaScriptの両面から追跡し、テストを書きながら修正する流れを体験します。手順は次の3ステップです。
            </p>
            <ol>
              <li>
                <strong>HTMLをスキャンする</strong> —
                バグの症状に関係しそうなDOM構造を確認する
              </li>
              <li>
                <strong>JavaScriptを確認する</strong> —
                イベントハンドラやロジックのコードを読む
              </li>
              <li>
                <strong>テストを書く</strong> —
                バグを再現するテストを先に書き、修正後にパスすることを確認する
              </li>
            </ol>

            <h3>静的型付け vs 動的型付け（テスト設計への影響）</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>観点</th>
                    <th>静的型付け（例: TypeScript）</th>
                    <th>動的型付け（例: 素のJavaScript）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>型エラーの検出タイミング</td>
                    <td>コンパイル時</td>
                    <td>実行時</td>
                  </tr>
                  <tr>
                    <td>単体テストの役割</td>
                    <td>ロジックの正しさの検証が中心</td>
                    <td>型の妥当性も含めた検証が必要</td>
                  </tr>
                  <tr>
                    <td>IDEの補完・安全性</td>
                    <td>高い</td>
                    <td>低い〜中程度</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 9. Step7: ピラミッドを登る実践フロー */}
          <section id="sec-9" className="section prose">
            <h2>9. Step 7: ピラミッドを登る実践フロー</h2>
            <p>
              テストピラミッドは「下から積み上げる」だけでなく、実際の開発では単体テスト・統合テスト・UIテストを行き来しながら組み立てていきます。
            </p>

            <Mermaid chart={DIAGRAM_PYRAMID_FLOW} />

            <h3>フレーキー（不安定）なテストへの対処</h3>
            <p>
              「フレーキーテスト」とは、コードを変更していないのに成功したり失敗したりする不安定なテストのことです。原著では次のような対処法が紹介されています。
            </p>
            <ul>
              <li>
                待機処理をタイマー（sleep）ではなく、条件が満たされるまで待つ「明示的な待機」に置き換える
              </li>
              <li>
                テスト同士が共有状態（データベースの行、グローバル変数など）に依存しないようにする
              </li>
              <li>
                単体テストでは外部サービスへの依存をモックやスタブに置き換え、ネットワークの不安定さを排除する
              </li>
              <li>原因が特定できないテストは「隔離」して可視化し、放置しない</li>
            </ul>

            <h4>［本ガイドによる補足：モック化で失う検証範囲をどう埋めるか］</h4>
            <p>
              以下は原著の記述ではなく、現在の実務を踏まえた補足です。上記3点目のモック化は不安定さを取り除く一方で、<strong>その外部連携そのものを検証対象から外す</strong>ことでもあります。モックは自分が書いた期待どおりに応答するため、相手側の実装が変わっても単体テストは緑のままになります。そこで、モックで隠れてしまう次の境界は別のレイヤーで検証しておきます。
            </p>
            <ul>
              <li>HTTPのやり取り（ステータスコード、ヘッダー、エラー応答の扱い）</li>
              <li>認証・認可（トークンの期限切れや権限不足時の挙動）</li>
              <li>
                シリアライズ／デシリアライズ（フィールド名や型、日付フォーマットの不一致）
              </li>
              <li>タイムアウトとリトライの挙動</li>
              <li>
                相手サービスとのインターフェース契約 —
                契約テスト（Contract
                Testing）で、モックの想定と実サービスの実装がずれていないことを継続的に検証する
              </li>
            </ul>
          </section>

          {/* 10. テストコードのスタイル */}
          <section id="sec-10" className="section prose">
            <h2>10. テストコードのスタイルと書き方の基礎</h2>
            <p>
              テストコードも本番コードと同じくらい丁寧に書く必要がある、というのが原著「Programming
              101」章の主張です。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>観点</th>
                    <th>悪い例の特徴</th>
                    <th>改善のポイント</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>命名</td>
                    <td>
                      <code>test1</code>, <code>data</code>,
                      <code>tmp</code> のような曖昧な名前
                    </td>
                    <td>「何を検証しているか」が分かる名前にする</td>
                  </tr>
                  <tr>
                    <td>スペーシング</td>
                    <td>インデントや空行が不揃い</td>
                    <td>一貫したフォーマッタ・リンターを使う</td>
                  </tr>
                  <tr>
                    <td>重複</td>
                    <td>同じセットアップコードがテストごとにコピペされている</td>
                    <td>ヘルパー関数・フィクスチャに抽出する</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>ステップバイステップ（原著の演習フロー）</h3>
            <ol>
              <li>スペーシングを直す</li>
              <li>良い名前を選ぶ</li>
              <li>クラス内の重複に対処する</li>
              <li>テストコード自体の重複に対処する</li>
            </ol>
          </section>

          {/* 11. テストの整理法 */}
          <section id="sec-11" className="section prose">
            <h2>11. テストの整理法</h2>
            <p>
              テストが増えてくると、どこに何のテストがあるのか分からなくなる「混沌の国（The
              Land of
              Confusion）」に陥りがちです。原著では次の考え方で整理することを推奨しています。
            </p>
            <ul>
              <li>
                <strong>隔離（Isolation）</strong> —
                各テストは他のテストの結果に依存せず、単独で実行しても同じ結果になるようにする
              </li>
              <li>
                <strong>文脈の明確化（Context）</strong> —
                「何の状態のときに」「何をしたら」「どうなるか」が読んだだけで分かるようにテストをグループ化する
              </li>
              <li>
                <strong>割り込み検知（Intruder Alert）</strong> —
                テストが意図しない副作用（他のテストへの影響）を起こしていないかに注意する
              </li>
            </ul>
          </section>

          {/* 12. 効果的なモックの使い方 */}
          <section id="sec-12" className="section prose">
            <h2>12. 効果的なモックの使い方</h2>
            <p>
              モック（Mock）は、外部依存（データベース・API・時刻など）をテストのために置き換える技術です。原著では次の手順で紹介されています。
            </p>
            <ol>
              <li>
                <strong>モックを準備する</strong> —
                本物の代わりとなるオブジェクトを用意する
              </li>
              <li>
                <strong>期待値を設定する</strong> —
                モックがどう呼ばれるべきかを事前に定義する
              </li>
            </ol>

            <h3>モックの功罪</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>メリット</th>
                    <th>デメリット（原著でいう「モックの沼」）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>外部依存なしに高速にテストできる</td>
                    <td>実装の詳細に強く結合してしまいがち</td>
                  </tr>
                  <tr>
                    <td>異常系（エラー発生時など）を再現しやすい</td>
                    <td>モックだらけのテストは可読性が下がる</td>
                  </tr>
                  <tr>
                    <td>ネットワークやDBの不安定さを排除できる</td>
                    <td>本物との挙動の差異に気づきにくい</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>ポート・アンド・アダプター（Ports and Adapters）</h3>
            <p>
              原著では、外部依存を抽象化するアーキテクチャパターンとして「ポート・アンド・アダプター（ヘキサゴナルアーキテクチャ）」の考え方が紹介されています。
            </p>

            <Mermaid chart={DIAGRAM_PORTS_ADAPTERS} />

            <p>
              この構造にすることで、テスト時だけモックアダプターに差し替えることができ、コアロジックを外部依存から守ることができます。
            </p>
          </section>

          {/* 13. TDD */}
          <section id="sec-13" className="section prose">
            <h2>13. テスト駆動開発（TDD）</h2>
            <p>
              TDD（Test-Driven
              Development）は、実装コードよりも先にテストを書く開発手法です。原著では次の3ステップサイクルとして紹介されています。
            </p>

            <Mermaid chart={DIAGRAM_TDD_CYCLE} />

            <h3>TDDのメリット（原著より）</h3>
            <ul>
              <li>実装前に「何を作るべきか」が明確になる</li>
              <li>
                Green・Refactorの各フェーズではテストが通っている状態を保てるため、いつでも安全に手を止められる（Redフェーズでは、意図的に失敗するテストが存在する）
              </li>
              <li>
                リファクタリングを安心して行える（壊れたらすぐテストが教えてくれる）
              </li>
            </ul>

            <h3>ステップバイステップ</h3>
            <ol>
              <li>
                <strong>失敗するテストを書く（Red）</strong> —
                まだ存在しない機能に対するテストを先に書く
              </li>
              <li>
                <strong>テストを通す（Green）</strong> —
                テストが通る最小限のコードを書く（きれいさは後回し）
              </li>
              <li>
                <strong>リファクタリングする（Refactor）</strong> —
                テストが通ったままコードを整理する
              </li>
              <li>このサイクルを繰り返す（Cycle, Rinse, Repeat）</li>
            </ol>
          </section>

          {/* 14. テスティングトロフィー */}
          <section id="sec-14" className="section prose">
            <h2>14. 2026年現在の視点：テスティングトロフィーという「もう一つの配分案」</h2>
            <p>
              原著出版（2016年）以降、フロントエンド開発ではテストツールの性能が大きく向上し、統合テストをより速く・より高い信頼性で実行できる場面が増えてきました。一方でUIテストは、実ブラウザと実際の描画・遷移を伴う性質上、依然として相対的に遅く壊れやすいままです。この差を踏まえ、ピラミッドの前提そのものを見直し、統合テストへの投資を厚くしてよいのではないかという議論が活発になりました。ここで紹介するテスティングトロフィーは、<strong>すべてのプロジェクトが従うべき標準的なテスト配分ではなく、フロントエンドという特定の文脈で「投資対効果（ROI）が最も高い層はどこか」を考えるためのヒューリスティック</strong>として読んでください。
            </p>

            <p>
              Martin Fowler は自身の「Test
              Pyramid」記事の中で、ピラミッドは「広範囲テストは遅く高コストで壊れやすい」という前提の上に成り立っており、もしその前提が崩れるなら低レベルテストへの依存度を下げてよいという趣旨の注記を残しています。この指摘を踏まえ、JavaScriptエンジニアの
              Kent C. Dodds は、Guillermo
              Rauch（Vercel創業者）の「テストを書こう。数はほどほどに。中心は統合テストで」という趣旨の発言を出発点に、「テスティングトロフィー」というモデルを提唱しました。
            </p>

            <p>
              ただし、「統合テストを厚くする」という結論がそのまま当てはまるとは限らない点に注意してください。何を「統合テスト」と呼ぶか（テスト境界の引き方）は文脈によって大きく異なります。トロフィー型は、どの層にテストを投資すべきかをROIの観点から考えるための一般的なガイドとして位置づけ、実際の配分はプロジェクトの性質、各層のテストの実行速度と信頼性、テスト境界の引き方、そして保守コストといった要素を突き合わせて判断してください。
            </p>

            <Mermaid chart={DIAGRAM_TESTING_TROPHY} />

            <h3>テストピラミッド と テスティングトロフィーの比較</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>観点</th>
                    <th>テストピラミッド（2012年〜）</th>
                    <th>テスティングトロフィー（2018年〜）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>厚くすることを推す層</td>
                    <td>単体テスト</td>
                    <td>統合テスト（速く安定して書ける場合）</td>
                  </tr>
                  <tr>
                    <td>前提</td>
                    <td>広範囲テストは遅く不安定</td>
                    <td>ツールの進化で統合テストが速く安定した</td>
                  </tr>
                  <tr>
                    <td>静的解析の扱い</td>
                    <td>明示的に含まれない</td>
                    <td>最下層として明示的に含む</td>
                  </tr>
                  <tr>
                    <td>主な提唱者</td>
                    <td>Mike Cohn / Martin Fowler</td>
                    <td>Kent C. Dodds（Guillermo Rauchの発言が着想元）</td>
                  </tr>
                  <tr>
                    <td>向いている領域</td>
                    <td>サーバーサイド・広範な言語</td>
                    <td>
                      フロントエンドJavaScript/TypeScript（かつ統合テストが安価に書ける環境）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout">
              <p className="callout-label">重要な注意点</p>
              <p>
                これはピラミッドが「間違っていた」という話ではなく、<strong>「どの層を厚くすべきかはツールとプロジェクトの性質によって変わる」</strong>という前提の違いです。原著が伝える「粒度の異なるテストをバランス良く組み合わせる」という核心的な考え方自体は、ピラミッドでもトロフィーでも共通しています。
              </p>
            </div>
          </section>

          {/* 15. Playwrightのベストプラクティス */}
          <section id="sec-15" className="section prose">
            <h2>15. モダンツール実践編：Playwrightのベストプラクティス</h2>
            <p>
              2016年当時の主流はSeleniumでしたが、2026年現在はMicrosoft製の Playwright
              がモダンなUI/E2Eテストツールとして広く使われています。原著の「CSSで要素を選択する」という考え方は現在も有効ですが、実務ではさらに一歩進んだプラクティスが推奨されています。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>プラクティス</th>
                    <th>内容</th>
                    <th>原著の考え方との関係</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ユーザー向けロケーターを優先する</td>
                    <td>
                      <code>getByRole</code> を第一候補にし、次点で
                      <code>getByLabel</code> / <code>getByPlaceholder</code> /
                      <code>getByText</code>
                      を使う。適切なユーザー向けロケーターが存在しない場合に限り
                      <code>getByTestId</code> を用いる
                    </td>
                    <td>
                      「CSSは選択のため」という原則を、アクセシビリティ属性ベースに発展させたもの
                    </td>
                  </tr>
                  <tr>
                    <td>自動待機を活用する</td>
                    <td>
                      要素が操作可能になるまで自動で待つ機能を使い、固定時間の
                      <code>sleep</code> を避ける
                    </td>
                    <td>フレーキーテスト対策の発展形</td>
                  </tr>
                  <tr>
                    <td>テストを独立させる</td>
                    <td>各テストが他のテストの状態に依存しないようにする</td>
                    <td>「隔離（Isolation）」の原則そのもの</td>
                  </tr>
                  <tr>
                    <td>Web-firstアサーションを使う</td>
                    <td>
                      状態が安定するまで自動的にリトライするアサーションを使う
                    </td>
                    <td>アサーションの信頼性向上</td>
                  </tr>
                  <tr>
                    <td>CIでは並列実行・シャーディングを行う</td>
                    <td>
                      共有データや共有状態に依存するテストは、まず独立させてから並列実行する。その上でワーカー並列化を行い、CIの実行時間が問題になった段階でシャーディング（マシン分割）を検討する
                    </td>
                    <td>ピラミッドの「高速なフィードバック」という目的の延長</td>
                  </tr>
                  <tr>
                    <td>トレースビューアでデバッグする</td>
                    <td>
                      失敗時のスクリーンショット・操作ログを記録し再生できるようにする
                    </td>
                    <td>壊れたテストの原因特定を容易にする仕組み</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout">
              <p className="callout-label">補足</p>
              <p>
                上記は BrowserStack や Autonoma
                などが2026年に公開したPlaywright運用ガイド、および
                Playwright公式ドキュメントの推奨事項を要約したものです（出典は「18.
                参考文献」を参照）。
              </p>
            </div>
          </section>

          {/* 16. チェックリスト */}
          <section id="sec-16" className="section prose">
            <h2>16. ベストプラクティス総まとめチェックリスト</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>チェック項目</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      テストの大部分を単体テストが占めているか（あるいは、統合テストを厚くする合理的な理由があるか）
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      UIテスト・E2Eテストは「重要なユーザーフロー」に絞られているか
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      テストは他のテストの実行順序・状態に依存せず独立しているか
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      固定時間の
                      <code>sleep</code> ではなく、条件ベースの待機を使っているか
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      テストコードにも命名・重複排除などの品質基準を適用しているか
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      モックは「外部依存の置き換え」に留め、実装の詳細まで検証していないか
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      フレーキーなテストを放置せず、原因を特定・隔離できているか
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>
                      REST
                      APIテストでは正常系だけでなく異常系（存在しないリソースへのアクセスなど）も検証しているか
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>
                      CIパイプラインでテストが自動実行され、失敗時に原因を追いやすい記録（スクリーンショット・トレース等）が残っているか
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>
                      Playwrightのスクリーンショット・トレース・動画などの成果物について、機密情報（認証情報・個人情報・トークン）がマスキングされているか、アーティファクトへのアクセスが制限されているか、保存期間（retention）が適切に設定されているか
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>
                      テスターと開発者が同じ語彙（ピラミッド/トロフィーなどの共通モデル）でテスト戦略を議論できているか
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 17. まとめ */}
          <section id="sec-17" className="section prose">
            <h2>17. まとめ</h2>
            <p>
              『The Way of the Web
              Tester』は2016年出版の書籍ですが、その核心にある「テストには粒度があり、粒度に応じて数・速度・役割のバランスを取るべき」という考え方は、テストピラミッドであれテスティングトロフィーであれ、2026年現在も変わらず通用する原則です。
            </p>
            <p>初学者がまず押さえるべきステップは次の通りです。</p>
            <ol>
              <li>
                <strong>単体テストから始める</strong> —
                最も書きやすく、土台として最初に着手しやすいテスト
              </li>
              <li><strong>統合テストでつなぐ</strong> — サービス間・API連携を検証する</li>
              <li>
                <strong>UIテストで仕上げる</strong> —
                重要なユーザーフローだけを、少数精鋭で検証する
              </li>
              <li><strong>フレーキーさと戦う</strong> — 不安定なテストを放置しない</li>
              <li>
                <strong>モダンツールの推奨事項を取り入れる</strong> —
                ロールベースセレクタや自動待機など、当時なかったベストプラクティスも積極的に採用する
              </li>
            </ol>
            <p>
              ただし、最終的にどの層をどれだけ厚くするかは一律には決まりません。
              <a href="#sec-14">第14章</a>
              で見たとおり、配分はプロジェクトの性質、各層の実行速度と信頼性、そして投資対効果（ROI）を突き合わせて判断してください。
            </p>
            <p>
              テストは「書いて終わり」ではなく、チームの共通言語として育てていくものだ、というのが本書と本ガイドを通じての一貫したメッセージです。
            </p>
          </section>

          {/* 18. 参考文献 */}
          <section id="sec-18" className="section prose">
            <h2>18. 参考文献</h2>
            <p>
              本ガイド作成にあたり、以下の情報源を参照しました（2026年8月26日時点でアクセス確認）。出典の性格が異なるため、公式資料・開発者資料・実務ガイドに分けて示します。
            </p>

            <div className="ref-group">
              <h3>書籍情報</h3>
              <ul className="ref-list">
                <li>
                  <a
                    href="https://pragprog.com/titles/jrtest/the-way-of-the-web-tester/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    pragprog.com — The Way of the Web Tester（公式ページ）
                  </a>
                  <span className="ref-desc">
                    Jonathan Rasmusson,
                    <em>
                      The Way of the Web Tester: A Beginner&apos;s Guide to Automating Tests
                    </em>
                    , Pragmatic Bookshelf, 2016年9月刊。目次・著者情報を掲載。
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.oreilly.com/library/view/the-way-of/9781680502251/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    oreilly.com — The Way of the Web Tester（O&apos;Reilly掲載ページ）
                  </a>
                  <span className="ref-desc">
                    本書のO&apos;Reilly Online Learning上の閲覧ページ。
                  </span>
                </li>
              </ul>
            </div>

            <div className="ref-group">
              <h3>テストピラミッド関連（開発者資料）</h3>
              <ul className="ref-list">
                <li>
                  <a
                    href="https://martinfowler.com/bliki/TestPyramid.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    martinfowler.com — TestPyramid（bliki）
                  </a>
                  <span className="ref-desc">
                    Martin Fowler によるテストピラミッドの原典的な整理記事。
                  </span>
                </li>
                <li>
                  <a
                    href="https://martinfowler.com/articles/practical-test-pyramid.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    martinfowler.com — The Practical Test Pyramid
                  </a>
                  <span className="ref-desc">
                    Ham Vocke による、実践的なテストピラミッドの適用例（Java/Spring Boot）。
                  </span>
                </li>
                <li>
                  <a
                    href="https://martinfowler.com/bliki/BroadStackTest.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    martinfowler.com — Broad Stack Test（bliki）
                  </a>
                  <span className="ref-desc">UIなど広範囲を通すテストの定義と特徴。</span>
                </li>
                <li>
                  <a
                    href="https://martinfowler.com/bliki/ComponentTest.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    martinfowler.com — Component Test（bliki）
                  </a>
                  <span className="ref-desc">対象範囲を限定したコンポーネントテストの定義。</span>
                </li>
                <li>
                  <a
                    href="https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    testing.googleblog.com — Just Say No to More End-to-End Tests
                  </a>
                  <span className="ref-desc">
                    Google Testing Blog による、E2Eテスト過多への警鐘記事。
                  </span>
                </li>
              </ul>
            </div>

            <div className="ref-group">
              <h3>テスティングトロフィー関連（開発者資料）</h3>
              <ul className="ref-list">
                <li>
                  <a
                    href="https://kentcdodds.com/blog/write-tests"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kentcdodds.com — Write tests. Not too many. Mostly integration.
                  </a>
                  <span className="ref-desc">
                    Kent C. Dodds による、テスティングトロフィー提唱の起点となった記事。
                  </span>
                </li>
                <li>
                  <a
                    href="https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kentcdodds.com — The Testing Trophy and Testing Classifications
                  </a>
                  <span className="ref-desc">
                    Kent C. Dodds による、テスト分類とトロフィーモデルの整理記事。
                  </span>
                </li>
              </ul>
            </div>

            <div className="ref-group">
              <h3>ツールの公式資料</h3>
              <ul className="ref-list">
                <li>
                  <a
                    href="https://playwright.dev/docs/best-practices"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    playwright.dev — Best Practices
                  </a>
                  <span className="ref-desc">
                    Playwright 公式ドキュメントのベストプラクティスページ。
                  </span>
                </li>
              </ul>
            </div>

            <div className="ref-group">
              <h3>実務ガイド・ベンダー記事（2026年）</h3>
              <ul className="ref-list">
                <li>
                  <a
                    href="https://www.browserstack.com/guide/playwright-best-practices"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    browserstack.com — Playwright Best Practices in 2026 (With Code Examples)
                  </a>
                  <span className="ref-desc">
                    2026年公開のPlaywright運用ベストプラクティスガイド。
                  </span>
                </li>
                <li>
                  <a
                    href="https://getautonoma.com/blog/playwright-best-practices-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    getautonoma.com — Playwright Best Practices: 8 Patterns for Stable E2E (2026)
                  </a>
                  <span className="ref-desc">
                    2026年版、安定したE2Eテストのための8つのパターン紹介記事。
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <footer className="footer">
            <p>
              本ガイドは教育目的の要約・再構成であり、原著の文章をそのまま転載したものではありません。詳細な内容は上記の公式ソースをご参照ください。
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
