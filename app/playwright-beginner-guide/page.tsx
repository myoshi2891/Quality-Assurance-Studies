import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './playwright-beginner-guide.css';

const DIAGRAM_01 = `flowchart TB
subgraph Test["テストコード"]
A[".spec.ts テストファイル"]
end
subgraph Runner["Playwright Test ランナー"]
B["test() / expect()"]
C["Fixtures（page, context, browser）"]
D["Reporter / HTML Report"]
end
subgraph Driver["Playwright ドライバー"]
E["Node.js プロセス"]
end
subgraph Engines["ブラウザエンジン"]
F["Chromium"]
G["Firefox"]
H["WebKit"]
end
A --> B
B --> C
C --> E
E -- "専用プロトコル通信" --> F
E -- "専用プロトコル通信" --> G
E -- "専用プロトコル通信" --> H
B --> D`;

const DIAGRAM_02 = `sequenceDiagram
participant T as テストコード
participant P as page (Locator API)
participant B as ブラウザ
T->>P: page.goto(URL)
P->>B: ページ読み込み要求
B-->>P: load状態まで待機
T->>P: locator = page.getByRole(...)
T->>P: locator.click()
P->>B: 要素が操作可能か自動チェック
Note over P,B: 表示・有効・アニメーション終了などを自動待機
B-->>P: クリック実行
T->>P: expect(locator).toHaveText(...)
P->>B: 条件が満たされるまで再試行
B-->>P: 条件成立 or タイムアウト
P-->>T: 成功 / 失敗を報告`;

const DIAGRAM_03 = `flowchart TD
A["npm init playwright@latest 実行"] --> B["設定ファイル・サンプルの自動生成"]
A --> C["ブラウザバイナリの自動ダウンロード"]
subgraph Files["生成される主要ファイル群"]
B1["playwright.config.ts（設定ファイル）"]
B2["package.json / package-lock.json"]
B3["tests/example.spec.ts（サンプルテスト）"]
B4[".github/workflows/playwright.yml（CIワークフロー）"]
end
subgraph Browsers["ダウンロード対象ブラウザ"]
C1["Chromium"]
C2["Firefox"]
C3["WebKit"]
end
B --> Files
C --> Browsers`;

const DIAGRAM_04 = `flowchart TB
root["プロジェクトルート"]
root --> cfg["playwright.config.ts"]
root --> pkg["package.json"]
root --> lock["package-lock.json"]
root --> tests["tests/"]
root --> examples["tests-examples/"]
root --> gh[".github/workflows/playwright.yml"]
tests --> spec1["example.spec.ts"]
examples --> spec2["todo-page 実践例"]`;

const DIAGRAM_05 = `flowchart TD
A["1. page.goto()<br/>指定URLへアクセスしてページ読み込み"] --> B["2. ロケーター（page.getByRole等）<br/>操作対象の要素を特定"]
B --> C["3. アクション（click, fill等）<br/>要素の自動待機後に操作を実行"]
C --> D["4. expect(locator).to*()<br/>Web-Firstアサーションで状態を検証"]
D --> E{"さらに操作を<br/>続ける？"}
E -- "はい（次の操作へ）" --> B
E -- "いいえ（完了）" --> F["テスト成功（パス）"]`;

const DIAGRAM_06 = `flowchart TD
Start["要素を特定したい"] --> Q1{"ボタン・リンク・見出し等<br/>明確なARIAロールを持つ？"}
Q1 -- はい --> Role["getByRole() を使用<br/>（最優先）"]
Q1 -- いいえ --> Q2{"フォームの入力欄で<br/>labelがある？"}
Q2 -- はい --> Label["getByLabel() を使用"]
Q2 -- いいえ --> Q3{"placeholderがある？"}
Q3 -- はい --> Placeholder["getByPlaceholder() を使用"]
Q3 -- いいえ --> Q4{"一意のテキストがある？"}
Q4 -- はい --> Text["getByText() を使用<br/>（非インタラクティブ要素向け）"]
Q4 -- いいえ --> Q5{"data-testid が<br/>設定されている？"}
Q5 -- はい --> TestId["getByTestId() を使用"]
Q5 -- いいえ --> CSS["やむを得ずCSS/XPathを使用<br/>（非推奨・最終手段）"]`;

const DIAGRAM_07 = `flowchart TD
A["click() 呼び出し"] --> B["要素がDOMに存在するか待機"]
B --> C["表示されているか<br/>（display:none等でない）"]
C --> D["CSSトランジション等の<br/>アニメーション終了を待機"]
D --> E["要素が画面内に<br/>スクロールされているか"]
E --> F["他の要素に覆われておらず<br/>ポインターイベントを受け取れるか"]
F --> G["実際のクリックを実行"]
B -.要素が外れたら再試行.-> B`;

const DIAGRAM_08 = `flowchart TD
Start["テストが失敗した／<br/>デバッグしたい"] --> Q1{"ローカルで<br/>開発中？"}
Q1 -- はい --> UI["UIモード（--ui）<br/>ステップ実行・時間旅行デバッグ"]
Q1 -- いいえ（CI環境） --> Trace["トレースビューアーで<br/>trace.zip を確認"]
UI --> Q2{"1行ずつ丁寧に<br/>ブレークポイントで<br/>止めたい？"}
Q2 -- はい --> Inspector["Playwright Inspector<br/>（--debug フラグ）"]
Q2 -- いいえ --> VSC["VS Code拡張機能で<br/>ブレークポイントデバッグ"]`;

const DIAGRAM_09 = `flowchart TD
A["npx playwright codegen URL<br/>Codegenツール起動"] --> B["ブラウザ上で人間が通常通り操作"]
subgraph Capture["自動記録・解析"]
C1["クリック・入力・選択などの操作"]
C2["UI上のテキスト・表示の検証アサーション"]
end
B --> Capture
Capture --> D["最適なロケーターを用いた<br/>テストコードをリアルタイム生成"]
D --> E["生成コードをコピーして<br/>テストファイルへ保存・活用"]`;

const DIAGRAM_10 = `flowchart TD
A["trace.zip"] --> B["タイムライン表示"]
A --> C["各アクション前後の<br/>DOMスナップショット"]
A --> D["ネットワークリクエスト<br/>一覧"]
A --> E["コンソールログ・<br/>エラー内容"]
C --> F["DevToolsでHTML/CSSを<br/>直接検査可能"]`;

const DIAGRAM_11 = `flowchart TD
subgraph Worker["ワーカー単位（プロセス起動時に1回）"]
W1["browser 起動"]
W2["worker スコープの<br/>自動フィクスチャ"]
end
subgraph EachTest["各テストごと"]
T1["test スコープの<br/>自動フィクスチャ"]
T2["page 生成"]
T3["beforeEach 実行"]
T4["テスト本体を実行<br/>（必要なフィクスチャを遅延構築）"]
T5["afterEach 実行"]
T6["page 破棄"]
T7["自動フィクスチャの<br/>後片付け"]
end
W1 --> W2 --> T1
T1 --> T2 --> T3 --> T4 --> T5 --> T6 --> T7
T7 -.次のテストへ.-> T1`;

const DIAGRAM_12 = `flowchart TD
subgraph Before["POM導入前: テストコード内にロケーターが散在"]
A1["test1.spec.ts<br/>（ロケーター直書き）"]
A2["test2.spec.ts<br/>（ロケーター直書き）"]
A3["test3.spec.ts<br/>（ロケーター直書き）"]
end
subgraph After["POM導入後: Pageクラスに集約し保守性を向上"]
B1["LoginPage.ts<br/>（ログイン画面のロケーター・操作）"]
B2["DashboardPage.ts<br/>（ダッシュボードのロケーター・操作）"]
C1["test1.spec.ts"]
C2["test2.spec.ts"]
C3["test3.spec.ts"]
C1 --> B1
C2 --> B1
C3 --> B2
end
Before -. "リファクタリング" .-> After`;

const DIAGRAM_13 = `flowchart TD
A["page.route() でリクエストを捕捉"] --> B{"どう処理する？"}
B -- "モックデータで即応答" --> C["route.fulfill()<br/>実サーバーには到達しない"]
B -- "実リクエストを許可しつつ改変" --> D["route.continue()<br/>ヘッダー追加など"]
B -- "リクエストを失敗させる" --> E["route.abort()<br/>ネットワーク断のシミュレーション"]`;

const DIAGRAM_14 = `flowchart TD
A["Git Push / Pull Request 作成"] --> B["GitHub Actions ワークフロー起動"]

subgraph Setup["1. 環境準備"]
C1["リポジトリをチェックアウト<br/>actions/checkout"]
C2["Node.js セットアップ<br/>actions/setup-node"]
C3["依存関係インストール<br/>npm ci"]
C4["ブラウザバイナリ取得<br/>npx playwright install --with-deps"]
C1 --> C2 --> C3 --> C4
end

subgraph Exec["2. テスト実行"]
D["npx playwright test<br/>全ブラウザで並列実行"]
end

subgraph Report["3. 結果判定 & レポート"]
E{"テスト合否"}
E -- "成功（Pass）" --> F["ワークフロー完了（Green ✅）"]
E -- "失敗（Fail）" --> G["HTMLレポート & トレースを保存<br/>actions/upload-artifact"]
G --> H["開発者がArtifactsをDLして<br/>Trace Viewerで原因調査"]
end

B --> Setup
Setup --> Exec
Exec --> Report`;

const DIAGRAM_15 = `flowchart TD
ROOT["Playwright ベストプラクティス"]

subgraph TopRow["設計 & 実装原則"]
subgraph LOC["1. ロケーター設計"]
L1["getByRole等ユーザー視点の特定"]
L2["実装依存のCSS/XPathを避ける"]
L3["filterやチェインで絞り込む"]
end
subgraph ASSERT["2. アサーション設計"]
A1["Web-Firstアサーションで自動待機"]
A2["すべての非同期処理に await を徹底"]
A3["複数項目の検証には soft を活用"]
end
end

subgraph BottomRow["デバッグ & CI/CD運用原則"]
subgraph DEBUG["3. デバッグ手法"]
D1["ローカル開発は UI Mode を標準活用"]
D2["CI失敗は Trace Viewer で時間旅行調査"]
D3["Playwright Inspector でステップ実行"]
end
subgraph OPS["4. CI/CD & 運用"]
O1["多ブラウザ（Chromium/Firefox/WebKit）検証"]
O2["storageState でログイン状態を再利用"]
O3["並列実行とシャーディングで高速化"]
end
end

ROOT --> TopRow
ROOT --> BottomRow`;

const DIAGRAM_16 = `flowchart TD
subgraph Phase1["フェーズ 1: 基礎固め（環境構築 〜 基本テスト）"]
S0["Step 0: Node.js 環境を用意する"]
S1["Step 1: npm init playwright@latest で初期化"]
S2["Step 2: example.spec.ts で goto / getByRole / expect の基本を理解"]
S0 --> S1 --> S2
end

subgraph Phase2["フェーズ 2: 実践力向上（ロケーター & デバッグ）"]
S3["Step 3: Codegen でブラウザ操作からコードを自動生成"]
S4["Step 4: getByRole, getByLabel 等のユーザー視点ロケーターを使いこなす"]
S5["Step 5: UI Mode & Inspector でステップ実行・デバッグに慣れる"]
S2 --> S3
S3 --> S4 --> S5
end

subgraph Phase3["フェーズ 3: 構造化 & CI/CD運用"]
S6["Step 6: Fixture と Page Object Model（POM）で保守性の高い構造化"]
S7["Step 7: page.route を用いた API モック・通信制御"]
S8["Step 8: GitHub Actions への組み込み & Trace Viewer 活用"]
S9["Step 9: 複数ブラウザ並列実行・シャーディングでスケール"]
S5 --> S6
S6 --> S7 --> S8 --> S9
end`;

export default function PlaywrightBeginnerPage() {
  return (
    <div className="playwright-beginner-page">
      <header className="hero">
        <span className="hero-eyebrow">
          <span className="dot"></span>QA ENGINEERING GUIDE ・ 2026年7月版
        </span>
        <h1>
          Playwright <span className="accent-word">完全入門ガイド</span>
          <br />初学者のためのステップバイステップ解説
        </h1>
        <p className="lead">
          Microsoft製のE2Eテスト・ブラウザ自動化フレームワーク「Playwright」を、公式ドキュメントと最新のリリース情報に基づいて基礎から実践まで解説します。
          ロケーター・アサーション・フィクスチャ・CIといった主要トピックを、Mermaidによる図解とともにステップバイステップで学べます。
        </p>
        <div className="hero-badges">
          <span className="badge"><b>18</b>&nbsp;章構成</span>
          <span className="badge"><b>16</b>&nbsp;Mermaid図解</span>
          <span className="badge">対応ブラウザ: Chromium / Firefox / WebKit</span>
          <span className="badge">対応言語: TS / JS / Python / Java / .NET</span>
        </div>
      </header>

      <div className="layout">
        <NavBar />

        <main className="content" id="main-content">
          {/* ========== 01 ========== */}
          <section className="chapter" id="sec-01">
            <p className="chapter-kicker">01 / 18</p>
            <h2>Playwrightとは何か</h2>
            <p>
              Playwrightは、Microsoftが開発しているオープンソースのE2E（End-to-End）テスト・ブラウザ自動化フレームワークです。Chromium・Firefox・WebKitという3大ブラウザエンジンを、単一のAPIでWindows・Linux・macOS上から操作できるのが最大の特徴です。ローカル環境でもCI環境でも、ヘッドレス（画面非表示）・ヘッド付き（画面表示）のどちらのモードでも動作し、Android向けChromeやMobile
              Safari（Safari本体のネイティブ自動化ではなく、WebKitベースのデバイスエミュレーション）のモバイルエミュレーションにも対応しています。
            </p>
            <p>
              Playwright
              Testと呼ばれる公式のテストランナーには、テスト実行エンジン・アサーション（検証）機能・テスト分離の仕組み・並列実行・リッチなデバッグツール一式がバンドルされており、追加のライブラリをほとんど組み合わせることなく本格的なテスト自動化基盤を構築できます。
            </p>

            <h3>なぜPlaywrightが選ばれるのか</h3>
            <div className="table-wrap">
              <table>
                <caption className="sr-only">特徴別に見たPlaywrightの強みの比較</caption>
                <thead>
                  <tr>
                    <th>特徴</th>
                    <th>Playwrightの強み</th>
                    <th>開発者・QAへのメリット</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>クロスブラウザ対応</b></td>
                    <td>Chromium, Firefox, WebKit を公式サポート</td>
                    <td>単一のテストコードで主要3エンジンを一挙にカバー</td>
                  </tr>
                  <tr>
                    <td><b>自動待機（Auto-waiting）</b></td>
                    <td>要素が表示され、クリック可能になるまで自動待機</td>
                    <td><code>sleep(3000)</code> 等の固定待機が不要になり、Flakyテスト激減</td>
                  </tr>
                  <tr>
                    <td><b>テストの完全分離</b></td>
                    <td>BrowserContextによりミリ秒単位で独立環境を作成</td>
                    <td>クッキーやストレージの漏れがなく並列実行も安全</td>
                  </tr>
                  <tr>
                    <td><b>リッチなツール群</b></td>
                    <td>UI Mode, Trace Viewer, Codegen, Inspector</td>
                    <td>GUIでステップ実行・時間旅行デバッグ・コード自動生成が可能</td>
                  </tr>
                  <tr>
                    <td><b>ネットワーク制御</b></td>
                    <td>リクエストの監視・書き換え・モック化が標準APIで可能</td>
                    <td>バックエンド未完成でもフロントのE2Eテストが完結</td>
                  </tr>
                  <tr>
                    <td><b>マルチタブ・マルチオリジン</b></td>
                    <td>複数ページ・複数フレーム（iframe）を自然に操作</td>
                    <td>OAuth認証やポップアップを含む複雑な業務フローも検証可能</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout good">
              <div className="callout-icon">💡</div>
              <div>
                <p>
                  <b>自動待機（Auto-waiting）の威力:</b> Playwrightはクリックなどのアクションを行う前に、対象要素がDOMに存在するか、表示されているか、アニメーションが停止しているか、他の要素に覆われていないかを自動的に確認します。これにより、テストが「タイミング依存でたまに落ちる（Flaky）」現象を大幅に抑えられます。
                </p>
              </div>
            </div>
          </section>

          {/* ========== 02 ========== */}
          <section className="chapter" id="sec-02">
            <p className="chapter-kicker">02 / 18</p>
            <h2>全体アーキテクチャ</h2>
            <p>
              Playwrightのアーキテクチャを理解すると、なぜ高速に動き、かつ安定してブラウザを制御できるのかが分かります。Playwrightは各ブラウザと<b>単一のWebSocket / プロトコル接続</b>を通じて直接やり取りを行います。従来のWebDriverのように「コマンドごとにHTTPリクエストを送る」方式と比べてオーバーヘッドが極めて小さく、ブラウザの内部イベント（ネットワークリクエストやDOM変更）をリアルタイムに検知できます。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_01} />
              <div className="diagram-caption">図1: Playwrightの全体アーキテクチャ（テストランナーからブラウザエンジンまで）</div>
            </div>

            <h3>階層構造: Browser &gt; BrowserContext &gt; Page</h3>
            <p>
              Playwrightの実行モデルは3つのレイヤーで整理されています。
            </p>
            <ul>
              <li>
                <b>Browser（ブラウザ）:</b> Chromium等の実プロセスです。起動には一定のコストがかかるため、Playwrightは1つのワーカープロセスにつき1回だけBrowserを起動し、テスト間で使い回します。
              </li>
              <li>
                <b>BrowserContext（ブラウザコンテキスト）:</b> ブラウザ内の「シークレットウィンドウ / プロファイル」に相当します。Cookie・LocalStorage・キャッシュが完全に独立しており、ミリ秒単位で超高速に生成・破棄されます。各テストは新しいBrowserContextで実行されるため、前のテストのログイン状態やデータが干渉しません。
              </li>
              <li>
                <b>Page（ページ）:</b> コンテキスト内の単一タブまたはポップアップです。テストコード中で最も頻繁に操作するオブジェクトであり、URL遷移・要素クリック・テキスト入力などを行います。
              </li>
            </ul>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_02} />
              <div className="diagram-caption">図2: テスト実行時の自動待機シーケンス（goto → click → assert）</div>
            </div>
          </section>

          {/* ========== 03 ========== */}
          <section className="chapter" id="sec-03">
            <p className="chapter-kicker">03 / 18</p>
            <h2>環境構築とインストール</h2>
            <p>
              PlaywrightはNode.js（メンテナンス中のLTS、バージョン22以上を推奨）環境があれば、1つのコマンドで初期化からブラウザバイナリのダウンロードまで自動で完了します。新規ディレクトリを作成してセットアップする手順を見ていきましょう。
            </p>

            <div className="step-flow">
              <div className="step">
                <span className="step-n">01</span>
                <div>
                  <strong>作業ディレクトリの作成と初期化コマンドの実行</strong>
                  <p>ターミナルで以下のコマンドを実行します。</p>
                </div>
              </div>
            </div>

            <div className="code-block">
              <div className="code-head">
                <span>ターミナル</span>
                <span className="lang">bash</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">mkdir</span> my-playwright-tests</div>
                <div className="code-line"><span className="kw">cd</span> my-playwright-tests</div>
                <div className="code-line"><span className="kw">npm</span> init playwright@latest</div>
              </div>
            </div>

            <p>コマンドを実行すると、対話式のプロンプトがいくつか表示されます。</p>

            <div className="table-wrap">
              <table>
                <caption className="sr-only">Playwright初期化時の質問と推奨の選択肢</caption>
                <thead>
                  <tr>
                    <th>質問内容</th>
                    <th>推奨の選択肢</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TypeScript or JavaScript?</td>
                    <td><b>TypeScript</b></td>
                    <td>型補完とリファクタリングの恩恵が大きく、公式ドキュメントもTSファーストです</td>
                  </tr>
                  <tr>
                    <td>Where to put your end-to-end tests?</td>
                    <td><b>tests</b></td>
                    <td>テストファイルを置くディレクトリ名（デフォルトでOK）</td>
                  </tr>
                  <tr>
                    <td>Add a GitHub Actions workflow?</td>
                    <td><b>true (Yes)</b></td>
                    <td>CI用のワークフロー定義ファイル（.github/workflows/playwright.yml）を自動生成</td>
                  </tr>
                  <tr>
                    <td>Install Playwright browsers?</td>
                    <td><b>true (Yes)</b></td>
                    <td>Chromium, Firefox, WebKit のバイナリを自動ダウンロード</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_03} />
              <div className="diagram-caption">図3: npm init playwright@latest の実行フロー</div>
            </div>

            <div className="callout note">
              <div className="callout-icon">ℹ️</div>
              <div>
                <p>
                  <b>Linux環境での注意点:</b> Ubuntu等のLinuxやDockerコンテナ内で動かす場合は、ブラウザが依存するOSパッケージをインストールするために <code>npx playwright install --with-deps</code> を実行する必要があります。
                </p>
              </div>
            </div>
          </section>

          {/* ========== 04 ========== */}
          <section className="chapter" id="sec-04">
            <p className="chapter-kicker">04 / 18</p>
            <h2>プロジェクト構成</h2>
            <p>
              セットアップが完了すると、プロジェクトルートに以下のようなファイル群が作成されます。それぞれの役割を把握しておきましょう。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_04} />
              <div className="diagram-caption">図4: 標準的なPlaywrightプロジェクトのディレクトリ構成</div>
            </div>

            <h3>主要ファイルと設定の基本（playwright.config.ts）</h3>
            <p>
              <code>playwright.config.ts</code> はテストの実行全体を制御する中心的な設定ファイルです。タイムアウト、並列度、利用ブラウザ、レポート形式などを宣言的に定義します。
            </p>

            <div className="code-block">
              <div className="code-head">
                <span>playwright.config.ts</span>
                <span className="lang">typescript</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">import</span> &#123; <span className="fn">defineConfig</span>, devices &#125; <span className="kw">from</span> <span className="str">&apos;@playwright/test&apos;</span>;</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line"><span className="kw">export default</span> <span className="fn">defineConfig</span>(&#123;</div>
                <div className="code-line">  <span className="prop">testDir</span>: <span className="str">&apos;./tests&apos;</span>,              <span className="cm">// テストファイルを探索するディレクトリ</span></div>
                <div className="code-line">  <span className="prop">fullyParallel</span>: <span className="kw">true</span>,             <span className="cm">// 全テストを並列実行して高速化</span></div>
                <div className="code-line">  <span className="prop">forbidOnly</span>: !!process.env.<span className="val">CI</span>,    <span className="cm">// CI環境では test.only を禁止（誤コミット防止）</span></div>
                <div className="code-line">  <span className="prop">retries</span>: process.env.<span className="val">CI</span> ? <span className="num">2</span> : <span className="num">0</span>, <span className="cm">// CI環境では失敗時に2回まで自動再試行</span></div>
                <div className="code-line">  <span className="prop">workers</span>: process.env.<span className="val">CI</span> ? <span className="num">1</span> : <span className="val">undefined</span>, <span className="cm">// CI環境のワーカー数設定</span></div>
                <div className="code-line">  <span className="prop">reporter</span>: <span className="str">&apos;html&apos;</span>,                <span className="cm">// テスト結果をリッチなHTMLレポートで出力</span></div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">  <span className="prop">use</span>: &#123;</div>
                <div className="code-line">    <span className="prop">baseURL</span>: <span className="str">&apos;https://example.com&apos;</span>, <span className="cm">// 相対パス指定時の基準URL</span></div>
                <div className="code-line">    <span className="prop">trace</span>: <span className="str">&apos;on-first-retry&apos;</span>,        <span className="cm">// 失敗して再試行したテストのトレースを記録</span></div>
                <div className="code-line">    <span className="prop">screenshot</span>: <span className="str">&apos;only-on-failure&apos;</span>,  <span className="cm">// 失敗時のみスクリーンショットを保存</span></div>
                <div className="code-line">    <span className="prop">video</span>: <span className="str">&apos;retain-on-failure&apos;</span>,     <span className="cm">// 失敗時のみ動画を保存</span></div>
                <div className="code-line">  &#125;,</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">  <span className="prop">projects</span>: [</div>
                <div className="code-line">    &#123;</div>
                <div className="code-line">      <span className="prop">name</span>: <span className="str">&apos;chromium&apos;</span>,</div>
                <div className="code-line">      <span className="prop">use</span>: &#123; ...devices[<span className="str">&apos;Desktop Chrome&apos;</span>] &#125;,</div>
                <div className="code-line">    &#125;,</div>
                <div className="code-line">    &#123;</div>
                <div className="code-line">      <span className="prop">name</span>: <span className="str">&apos;firefox&apos;</span>,</div>
                <div className="code-line">      <span className="prop">use</span>: &#123; ...devices[<span className="str">&apos;Desktop Firefox&apos;</span>] &#125;,</div>
                <div className="code-line">    &#125;,</div>
                <div className="code-line">    &#123;</div>
                <div className="code-line">      <span className="prop">name</span>: <span className="str">&apos;webkit&apos;</span>,</div>
                <div className="code-line">      <span className="prop">use</span>: &#123; ...devices[<span className="str">&apos;Desktop Safari&apos;</span>] &#125;,</div>
                <div className="code-line">    &#125;,</div>
                <div className="code-line">  ],</div>
                <div className="code-line">&#125;);</div>
              </div>
            </div>
          </section>

          {/* ========== 05 ========== */}
          <section className="chapter" id="sec-05">
            <p className="chapter-kicker">05 / 18</p>
            <h2>はじめてのテスト</h2>
            <p>
              Playwrightのテストは、<code>test</code> 関数と <code>expect</code> 関数を使って記述します。基本構文は Jest や Vitest に極めて近く、JavaScript/TypeScriptに慣れている方なら直感的に読めるはずです。
            </p>

            <div className="code-block">
              <div className="code-head">
                <span>tests/example.spec.ts</span>
                <span className="lang">typescript</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">import</span> &#123; test, expect &#125; <span className="kw">from</span> <span className="str">&apos;@playwright/test&apos;</span>;</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line"><span className="fn">test</span>(<span className="str">&apos;トップページのタイトルとリンクを確認する&apos;</span>, <span className="kw">async</span> (&#123; <span className="val">page</span> &#125;) =&gt; &#123;</div>
                <div className="code-line">  <span className="cm">// 1. 指定したURLへアクセス</span></div>
                <div className="code-line">  <span className="kw">await</span> page.<span className="fn">goto</span>(<span className="str">&apos;https://playwright.dev/&apos;</span>);</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">  <span className="cm">// 2. ページのタイトルに特定の文字列が含まれているか検証</span></div>
                <div className="code-line">  <span className="kw">await</span> <span className="fn">expect</span>(page).<span className="fn">toHaveTitle</span>(/Playwright/);</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">  <span className="cm">// 3. &quot;Get started&quot; というテキストを持つリンクを取得</span></div>
                <div className="code-line">  <span className="kw">const</span> <span className="val">getStartedLink</span> = page.<span className="fn">getByRole</span>(<span className="str">&apos;link&apos;</span>, &#123; <span className="prop">name</span>: <span className="str">&apos;Get started&apos;</span> &#125;);</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">  <span className="cm">// 4. リンクをクリック</span></div>
                <div className="code-line">  <span className="kw">await</span> getStartedLink.<span className="fn">click</span>();</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">  <span className="cm">// 5. 遷移先URLに &quot;intro&quot; が含まれているか検証</span></div>
                <div className="code-line">  <span className="kw">await</span> <span className="fn">expect</span>(page).<span className="fn">toHaveURL</span>(/.*intro/);</div>
                <div className="code-line">&#125;);</div>
              </div>
            </div>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_05} />
              <div className="diagram-caption">図5: E2Eテストの基本ライフサイクル（遷移 → 操作 → 検証）</div>
            </div>

            <div className="callout note">
              <div className="callout-icon">⚠️</div>
              <div>
                <p>
                  <b><code>async / await</code> を忘れずに:</b> ブラウザ操作（<code>goto</code>, <code>click</code>, <code>fill</code> など）およびWeb-Firstアサーション（<code>expect(...).toHaveText(...)</code> 等）はすべて非同期処理（Promise）です。<code>await</code> を付け忘れるとテストの実行順序が崩れたり、検証を待たずにテストが通過したと誤判定されたりします。
                </p>
              </div>
            </div>
          </section>

          {/* ========== 06 ========== */}
          <section className="chapter" id="sec-06">
            <p className="chapter-kicker">06 / 18</p>
            <h2>ロケーター（Locators）を極める</h2>
            <p>
              ロケーターはPlaywrightにおける<b>最重要の概念</b>です。画面上の要素（ボタン・入力欄・テキストなど）を特定するためのオブジェクトで、<code>page.getByRole()</code> や <code>page.getByLabel()</code> などのAPIを通じて取得します。
            </p>
            <p>
              従来のテストツールのように「要素が見つかった時点のDOMスナップショット」を保持するのではなく、<b>アクション（クリックなど）が実行されるまさにその瞬間にDOMを探索する「遅延評価（Strict Locator）」モデル</b>を採用しています。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_06} />
              <div className="diagram-caption">図6: ロケーターAPIの推奨選定フロー（ユーザー視点アプローチ）</div>
            </div>

            <h3>推奨ロケーターAPI一覧（優先度順）</h3>
            <div className="table-wrap">
              <table>
                <caption className="sr-only">推奨ロケーターAPI一覧（優先度順）</caption>
                <thead>
                  <tr>
                    <th>メソッド</th>
                    <th>用途・特徴</th>
                    <th>具体例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>page.getByRole()</code></td>
                    <td><b>最推奨</b>。ARIAロール（button, link, heading等）とアクセシブル名で特定</td>
                    <td><code>page.getByRole('button', &#123; name: 'ログイン' &#125;)</code></td>
                  </tr>
                  <tr>
                    <td><code>page.getByLabel()</code></td>
                    <td><code>&lt;label&gt;</code> と紐づいた入力フォーム要素を特定</td>
                    <td><code>page.getByLabel('ユーザー名')</code></td>
                  </tr>
                  <tr>
                    <td><code>page.getByPlaceholder()</code></td>
                    <td>プレースホルダー文字列で入力欄を特定</td>
                    <td><code>page.getByPlaceholder('メールアドレスを入力')</code></td>
                  </tr>
                  <tr>
                    <td><code>page.getByText()</code></td>
                    <td>画面に表示されているテキスト内容で特定（見出しや説明文向け）</td>
                    <td><code>page.getByText('ようこそ、ゲストさん')</code></td>
                  </tr>
                  <tr>
                    <td><code>page.getByAltText()</code></td>
                    <td>画像（<code>&lt;img&gt;</code>）のalt属性で特定</td>
                    <td><code>page.getByAltText('企業ロゴ')</code></td>
                  </tr>
                  <tr>
                    <td><code>page.getByTitle()</code></td>
                    <td>title属性を持つ要素を特定</td>
                    <td><code>page.getByTitle('閉じる')</code></td>
                  </tr>
                  <tr>
                    <td><code>page.getByTestId()</code></td>
                    <td><code>data-testid</code> 属性で特定（動的なUIや最後の手段として）</td>
                    <td><code>page.getByTestId('submit-order-btn')</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>ロケーターのフィルタリングとチェイン（絞り込み）</h3>
            <p>
              複数のカードやリスト行の中から「特定のテキストを含むカード内のボタン」を指定したい場合は、<code>filter()</code> やチェインを使います。
            </p>

            <div className="code-block">
              <div className="code-head">
                <span>ロケーターの絞り込み例</span>
                <span className="lang">typescript</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="cm">// &quot;商品A&quot; というテキストを含むリスト項目の中の「購入」ボタンをクリック</span></div>
                <div className="code-line"><span className="kw">const</span> <span className="val">productCard</span> = page.<span className="fn">getByRole</span>(<span className="str">&apos;listitem&apos;</span>).<span className="fn">filter</span>(&#123; <span className="prop">hasText</span>: <span className="str">&apos;商品A&apos;</span> &#125;);</div>
                <div className="code-line"><span className="kw">await</span> productCard.<span className="fn">getByRole</span>(<span className="str">&apos;button&apos;</span>, &#123; <span className="prop">name</span>: <span className="str">&apos;購入&apos;</span> &#125;).<span className="fn">click</span>();</div>
              </div>
            </div>
          </section>

          {/* ========== 07 ========== */}
          <section className="chapter" id="sec-07">
            <p className="chapter-kicker">07 / 18</p>
            <h2>アクションの書き方</h2>
            <p>
              要素を特定したら、ユーザーの操作をシミュレートするアクションを実行します。Playwrightのアクションメソッドは、実行前に自動的に<b>アクション可能性チェック（Actionability checks）</b>を行います。
            </p>

            <div className="table-wrap">
              <table>
                <caption className="sr-only">操作種別ごとのアクションAPI一覧</caption>
                <thead>
                  <tr>
                    <th>操作種別</th>
                    <th>メソッド</th>
                    <th>コード例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>クリック</td>
                    <td><code>locator.click()</code></td>
                    <td><code>await page.getByRole('button', &#123; name: '送信' &#125;).click();</code></td>
                  </tr>
                  <tr>
                    <td>テキスト入力</td>
                    <td><code>locator.fill()</code></td>
                    <td><code>await page.getByLabel('名前').fill('山田太郎');</code></td>
                  </tr>
                  <tr>
                    <td>チェックボックス</td>
                    <td><code>locator.check() / uncheck()</code></td>
                    <td><code>await page.getByLabel('利用規約に同意する').check();</code></td>
                  </tr>
                  <tr>
                    <td>セレクトボックス</td>
                    <td><code>locator.selectOption()</code></td>
                    <td><code>await page.getByLabel('都道府県').selectOption('tokyo');</code></td>
                  </tr>
                  <tr>
                    <td>キーボード操作</td>
                    <td><code>locator.press()</code></td>
                    <td><code>await page.getByPlaceholder('検索').press('Enter');</code></td>
                  </tr>
                  <tr>
                    <td>ホバー（マウス乗せ）</td>
                    <td><code>locator.hover()</code></td>
                    <td><code>await page.getByRole('menuitem', &#123; name: '設定' &#125;).hover();</code></td>
                  </tr>
                  <tr>
                    <td>ファイルアップロード</td>
                    <td><code>locator.setInputFiles()</code></td>
                    <td><code>await page.getByLabel('ファイル選択').setInputFiles('test.pdf');</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_07} />
              <div className="diagram-caption">図7: locator.click() が内部で実行する Actionability Checks の詳細フロー</div>
            </div>
          </section>

          {/* ========== 08 ========== */}
          <section className="chapter" id="sec-08">
            <p className="chapter-kicker">08 / 18</p>
            <h2>アサーションの書き方（Web-First Assertions）</h2>
            <p>
              Playwrightの <code>expect</code> は、<b>Web-Firstアサーション</b>と呼ばれる非同期検証を提供します。これは「期待する条件が満たされるまで自動で再試行（デフォルト5秒）する」機能です。
            </p>

            <div className="table-wrap">
              <table>
                <caption className="sr-only">Web-Firstアサーションの主要メソッド一覧</caption>
                <thead>
                  <tr>
                    <th>検証内容</th>
                    <th>アサーションメソッド</th>
                    <th>コード例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>表示されているか</td>
                    <td><code>toBeVisible()</code></td>
                    <td><code>await expect(locator).toBeVisible();</code></td>
                  </tr>
                  <tr>
                    <td>非表示または存在しないか</td>
                    <td><code>toBeHidden()</code></td>
                    <td><code>await expect(locator).toBeHidden();</code></td>
                  </tr>
                  <tr>
                    <td>有効化されているか</td>
                    <td><code>toBeEnabled() / toBeDisabled()</code></td>
                    <td><code>await expect(button).toBeEnabled();</code></td>
                  </tr>
                  <tr>
                    <td>テキストと一致・含むか</td>
                    <td><code>toHaveText() / toContainText()</code></td>
                    <td><code>await expect(msg).toHaveText('登録が完了しました');</code></td>
                  </tr>
                  <tr>
                    <td>入力欄の値</td>
                    <td><code>toHaveValue()</code></td>
                    <td><code>await expect(input).toHaveValue('yamada@example.com');</code></td>
                  </tr>
                  <tr>
                    <td>要素の個数</td>
                    <td><code>toHaveCount()</code></td>
                    <td><code>await expect(items).toHaveCount(5);</code></td>
                  </tr>
                  <tr>
                    <td>現在のURL</td>
                    <td><code>toHaveURL()</code></td>
                    <td><code>await expect(page).toHaveURL('/dashboard');</code></td>
                  </tr>
                  <tr>
                    <td>ページのタイトル</td>
                    <td><code>toHaveTitle()</code></td>
                    <td><code>await expect(page).toHaveTitle(/ダッシュボード/);</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>ソフトアサーション（Soft Assertions）</h3>
            <p>
              通常のアサーションは1つ失敗した時点でテストが中断されますが、<code>expect.soft()</code> を使うと、失敗を記録しつつテストを最後まで継続できます。1つの画面で複数の表示項目をまとめてチェックしたい場合に便利です。
            </p>

            <div className="code-block">
              <div className="code-head">
                <span>ソフトアサーションの例</span>
                <span className="lang">typescript</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="cm">// 途中で失敗しても次のアサーションを実行し、最後にまとめて合否を判定する</span></div>
                <div className="code-line"><span className="kw">await</span> expect.<span className="fn">soft</span>(page.<span className="fn">getByTestId</span>(<span className="str">&apos;status&apos;</span>)).<span className="fn">toHaveText</span>(<span className="str">&apos;Success&apos;</span>);</div>
                <div className="code-line"><span className="kw">await</span> expect.<span className="fn">soft</span>(page.<span className="fn">getByTestId</span>(<span className="str">&apos;name&apos;</span>)).<span className="fn">toHaveText</span>(<span className="str">&apos;Yamada&apos;</span>);</div>
                <div className="code-line"><span className="kw">await</span> expect.<span className="fn">soft</span>(page.<span className="fn">getByTestId</span>(<span className="str">&apos;role&apos;</span>)).<span className="fn">toHaveText</span>(<span className="str">&apos;Admin&apos;</span>);</div>
              </div>
            </div>
          </section>

          {/* ========== 09 ========== */}
          <section className="chapter" id="sec-09">
            <p className="chapter-kicker">09 / 18</p>
            <h2>実行とデバッグ</h2>
            <p>
              Playwrightは、日常の開発・デバッグを劇的に効率化する多彩な実行モードを備えています。状況に応じて最適なツールを選びましょう。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_08} />
              <div className="diagram-caption">図8: 開発・デバッグシーンに応じたツールの使い分けフロー</div>
            </div>

            <h3>主要な実行コマンド</h3>
            <div className="table-wrap">
              <table>
                <caption className="sr-only">Playwrightの主要な実行コマンド一覧</caption>
                <thead>
                  <tr>
                    <th>実行モード</th>
                    <th>コマンド</th>
                    <th>主な特徴・用途</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>全テスト実行</b></td>
                    <td><code>npx playwright test</code></td>
                    <td>ヘッドレスモードで全テストを並列実行（CI標準）</td>
                  </tr>
                  <tr>
                    <td><b>UIモード（最推奨）</b></td>
                    <td><code>npx playwright test --ui</code></td>
                    <td>GUIが起動。タイムライン、DOMスナップショット、ウォッチモード完備</td>
                  </tr>
                  <tr>
                    <td><b>ヘッド付き実行</b></td>
                    <td><code>npx playwright test --headed</code></td>
                    <td>実際のブラウザ画面を目視しながら実行</td>
                  </tr>
                  <tr>
                    <td><b>デバッグモード</b></td>
                    <td><code>npx playwright test --debug</code></td>
                    <td>Playwright Inspectorが起動し、1行ずつステップ実行可能</td>
                  </tr>
                  <tr>
                    <td><b>単一ファイルの実行</b></td>
                    <td><code>npx playwright test tests/login.spec.ts</code></td>
                    <td>特定のテストファイルだけを絞り込んで実行</td>
                  </tr>
                  <tr>
                    <td><b>レポート表示</b></td>
                    <td><code>npx playwright show-report</code></td>
                    <td>直前のテスト結果をHTMLレポートでブラウザに表示</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ========== 10 ========== */}
          <section className="chapter" id="sec-10">
            <p className="chapter-kicker">10 / 18</p>
            <h2>コード自動生成（Playwright Codegen）</h2>
            <p>
              <code>npx playwright codegen</code> を実行すると、ブラウザと「Playwright Inspector」が同時に立ち上がります。ブラウザ上で人間が普段通りクリックや文字入力をするだけで、最適なロケーターを使ったテストコードがリアルタイムに生成されます。
            </p>

            <div className="code-block">
              <div className="code-head">
                <span>Codegen起動コマンド</span>
                <span className="lang">bash</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="cm"># 対象サイトを開いてコード生成を開始</span></div>
                <div className="code-line"><span className="kw">npx</span> playwright codegen https://example.com</div>
              </div>
            </div>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_09} />
              <div className="diagram-caption">図9: Codegen によるブラウザ操作の記録とコード生成の仕組み</div>
            </div>

            <div className="callout good">
              <div className="callout-icon">✨</div>
              <div>
                <p>
                  <b>Codegenのベストな活用法:</b> Codegenで出力されたコードをそのまま本番テストにするのではなく、「要素のロケーターをどう書けばよいか迷ったときのヒント収集」として使うのがベストプラクティスです。自動生成後にPage Object Model等で整理しましょう。
                </p>
              </div>
            </div>
          </section>

          {/* ========== 11 ========== */}
          <section className="chapter" id="sec-11">
            <p className="chapter-kicker">11 / 18</p>
            <h2>トレースビューアー（Trace Viewer）</h2>
            <p>
              トレースビューアーは、Playwrightの最も強力な診断ツールです。テスト実行中のすべての出来事（DOMスナップショット、アクションの前後状態、コンソールログ、ネットワーク通信）を記録した <code>trace.zip</code> ファイルを、GUI上で「時間を巻き戻しながら」詳細に調査できます。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_10} />
              <div className="diagram-caption">図10: トレースビューアーが提供する情報構造</div>
            </div>

            <div className="code-block">
              <div className="code-head">
                <span>トレースの確認コマンド</span>
                <span className="lang">bash</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="cm"># ローカルで保存された trace.zip を開く</span></div>
                <div className="code-line"><span className="kw">npx</span> playwright show-trace test-results/.../trace.zip</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line"><span className="cm"># または https://trace.playwright.dev にドラッグ&amp;ドロップしてブラウザ上だけで解析可能</span></div>
              </div>
            </div>
          </section>

          {/* ========== 12 ========== */}
          <section className="chapter" id="sec-12">
            <p className="chapter-kicker">12 / 18</p>
            <h2>フィクスチャ（Fixtures）の仕組み</h2>
            <p>
              Playwrightのテスト引数 <code>&#123; page &#125;</code> は「フィクスチャ」と呼ばれる仕組みで提供されています。フィクスチャはテストに必要な環境をオンデマンドで準備し、テスト終了後に自動でクリーンアップします。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_11} />
              <div className="diagram-caption">図11: ワーカー・テストごとのフィクスチャライフサイクル</div>
            </div>

            <h3>カスタムフィクスチャの作成例</h3>
            <p>
              例えば「ログイン済みの管理ユーザー画面」をカスタムフィクスチャとして定義しておくと、各テストコード冒頭のログイン定型処理を完全に排除できます。
            </p>

            <div className="code-block">
              <div className="code-head">
                <span>fixtures.ts</span>
                <span className="lang">typescript</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">import</span> &#123; test <span className="kw">as</span> base, Page &#125; <span className="kw">from</span> <span className="str">&apos;@playwright/test&apos;</span>;</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line"><span className="cm">// カスタムフィクスチャの型定義</span></div>
                <div className="code-line"><span className="kw">type</span> <span className="fn">MyFixtures</span> = &#123;</div>
                <div className="code-line">  <span className="prop">loggedInPage</span>: Page;</div>
                <div className="code-line">&#125;;</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line"><span className="kw">export const</span> <span className="val">test</span> = base.<span className="fn">extend</span>&lt;<span className="fn">MyFixtures</span>&gt;(&#123;</div>
                <div className="code-line">  <span className="prop">loggedInPage</span>: <span className="kw">async</span> (&#123; <span className="val">page</span> &#125;, <span className="val">use</span>) =&gt; &#123;</div>
                <div className="code-line">    <span className="cm">// セットアップ: ログイン処理</span></div>
                <div className="code-line">    <span className="kw">await</span> page.<span className="fn">goto</span>(<span className="str">&apos;/login&apos;</span>);</div>
                <div className="code-line">    <span className="kw">await</span> page.<span className="fn">getByLabel</span>(<span className="str">&apos;メールアドレス&apos;</span>).<span className="fn">fill</span>(<span className="str">&apos;admin@example.com&apos;</span>);</div>
                <div className="code-line">    <span className="kw">await</span> page.<span className="fn">getByLabel</span>(<span className="str">&apos;パスワード&apos;</span>).<span className="fn">fill</span>(<span className="str">&apos;secret123&apos;</span>);</div>
                <div className="code-line">    <span className="kw">await</span> page.<span className="fn">getByRole</span>(<span className="str">&apos;button&apos;</span>, &#123; <span className="prop">name</span>: <span className="str">&apos;ログイン&apos;</span> &#125;).<span className="fn">click</span>();</div>
                <div className="code-line">    <span className="kw">await</span> page.<span className="fn">waitForURL</span>(<span className="str">&apos;/dashboard&apos;</span>);</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">    <span className="cm">// テスト本体に page を渡す</span></div>
                <div className="code-line">    <span className="kw">await</span> <span className="fn">use</span>(page);</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">    <span className="cm">// ティアダウン（テスト後のクリーンアップが必要な場合はここに記述）</span></div>
                <div className="code-line">  &#125;,</div>
                <div className="code-line">&#125;);</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line"><span className="kw">export</span> &#123; expect &#125; <span className="kw">from</span> <span className="str">&apos;@playwright/test&apos;</span>;</div>
              </div>
            </div>
          </section>

          {/* ========== 13 ========== */}
          <section className="chapter" id="sec-13">
            <p className="chapter-kicker">13 / 18</p>
            <h2>ページオブジェクトモデル（Page Object Model）</h2>
            <p>
              Page Object Model（POM）は、画面の構造（ロケーター）や操作ロジックをクラスとしてカプセル化する設計パターンです。UIに変更が入った際もPageクラス側のみを修正すればよいため、テストの保守性が飛躍的に向上します。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_12} />
              <div className="diagram-caption">図12: Page Object Model 導入による依存関係の整理</div>
            </div>

            <div className="code-block">
              <div className="code-head">
                <span>models/LoginPage.ts</span>
                <span className="lang">typescript</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">import</span> &#123; <span className="kw">type</span> Locator, <span className="kw">type</span> Page &#125; <span className="kw">from</span> <span className="str">&apos;@playwright/test&apos;</span>;</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line"><span className="kw">export class</span> <span className="fn">LoginPage</span> &#123;</div>
                <div className="code-line">  <span className="kw">readonly</span> <span className="prop">page</span>: Page;</div>
                <div className="code-line">  <span className="kw">readonly</span> <span className="prop">emailInput</span>: Locator;</div>
                <div className="code-line">  <span className="kw">readonly</span> <span className="prop">passwordInput</span>: Locator;</div>
                <div className="code-line">  <span className="kw">readonly</span> <span className="prop">submitButton</span>: Locator;</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">  <span className="kw">constructor</span>(<span className="val">page</span>: Page) &#123;</div>
                <div className="code-line">    <span className="kw">this</span>.<span className="prop">page</span> = page;</div>
                <div className="code-line">    <span className="kw">this</span>.<span className="prop">emailInput</span> = page.<span className="fn">getByLabel</span>(<span className="str">&apos;メールアドレス&apos;</span>);</div>
                <div className="code-line">    <span className="kw">this</span>.<span className="prop">passwordInput</span> = page.<span className="fn">getByLabel</span>(<span className="str">&apos;パスワード&apos;</span>);</div>
                <div className="code-line">    <span className="kw">this</span>.<span className="prop">submitButton</span> = page.<span className="fn">getByRole</span>(<span className="str">&apos;button&apos;</span>, &#123; <span className="prop">name</span>: <span className="str">&apos;ログイン&apos;</span> &#125;);</div>
                <div className="code-line">  &#125;</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">  <span className="kw">async</span> <span className="fn">goto</span>() &#123;</div>
                <div className="code-line">    <span className="kw">await this</span>.<span className="prop">page</span>.<span className="fn">goto</span>(<span className="str">&apos;/login&apos;</span>);</div>
                <div className="code-line">  &#125;</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">  <span className="kw">async</span> <span className="fn">login</span>(<span className="val">email</span>: <span className="kw">string</span>, <span className="val">pass</span>: <span className="kw">string</span>) &#123;</div>
                <div className="code-line">    <span className="kw">await this</span>.<span className="prop">emailInput</span>.<span className="fn">fill</span>(email);</div>
                <div className="code-line">    <span className="kw">await this</span>.<span className="prop">passwordInput</span>.<span className="fn">fill</span>(pass);</div>
                <div className="code-line">    <span className="kw">await this</span>.<span className="prop">submitButton</span>.<span className="fn">click</span>();</div>
                <div className="code-line">  &#125;</div>
                <div className="code-line">&#125;</div>
              </div>
            </div>

            <div className="code-block">
              <div className="code-head">
                <span>tests/login.spec.ts</span>
                <span className="lang">typescript</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">import</span> &#123; test, expect &#125; <span className="kw">from</span> <span className="str">&apos;@playwright/test&apos;</span>;</div>
                <div className="code-line"><span className="kw">import</span> &#123; LoginPage &#125; <span className="kw">from</span> <span className="str">&apos;../models/LoginPage&apos;</span>;</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line"><span className="fn">test</span>(<span className="str">&apos;正しい資格情報でログインできること&apos;</span>, <span className="kw">async</span> (&#123; <span className="val">page</span> &#125;) =&gt; &#123;</div>
                <div className="code-line">  <span className="kw">const</span> <span className="val">loginPage</span> = <span className="kw">new</span> <span className="fn">LoginPage</span>(page);</div>
                <div className="code-line">  <span className="kw">await</span> loginPage.<span className="fn">goto</span>();</div>
                <div className="code-line">  <span className="kw">await</span> loginPage.<span className="fn">login</span>(<span className="str">&apos;user@example.com&apos;</span>, <span className="str">&apos;password123&apos;</span>);</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">  <span className="kw">await</span> <span className="fn">expect</span>(page).<span className="fn">toHaveURL</span>(<span className="str">&apos;/dashboard&apos;</span>);</div>
                <div className="code-line">&#125;);</div>
              </div>
            </div>
          </section>

          {/* ========== 14 ========== */}
          <section className="chapter" id="sec-14">
            <p className="chapter-kicker">14 / 18</p>
            <h2>APIモックとネットワークインターセプト</h2>
            <p>
              Playwrightは <code>page.route()</code> メソッドを使って、ブラウザが発行するHTTP/HTTPSリクエストを捕捉し、レスポンスを差し替えたり（モック）、通信エラーをシミュレートしたりできます。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_13} />
              <div className="diagram-caption">図13: page.route() によるリクエストのハンドリング分岐</div>
            </div>

            <div className="code-block">
              <div className="code-head">
                <span>APIモックのコード例</span>
                <span className="lang">typescript</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="fn">test</span>(<span className="str">&apos;ユーザー一覧APIをモックして表示を確認する&apos;</span>, <span className="kw">async</span> (&#123; <span className="val">page</span> &#125;) =&gt; &#123;</div>
                <div className="code-line">  <span className="cm">// /api/users へのGETリクエストを捕捉してダミーJSONを返す</span></div>
                <div className="code-line">  <span className="kw">await</span> page.<span className="fn">route</span>(<span className="str">&apos;*/**/api/users&apos;</span>, <span className="kw">async</span> (<span className="val">route</span>) =&gt; &#123;</div>
                <div className="code-line">    <span className="kw">const</span> <span className="val">mockUsers</span> = [</div>
                <div className="code-line">      &#123; <span className="prop">id</span>: <span className="num">1</span>, <span className="prop">name</span>: <span className="str">&apos;テスト太郎&apos;</span>, <span className="prop">role</span>: <span className="str">&apos;開発者&apos;</span> &#125;,</div>
                <div className="code-line">      &#123; <span className="prop">id</span>: <span className="num">2</span>, <span className="prop">name</span>: <span className="str">&apos;テスト花子&apos;</span>, <span className="prop">role</span>: <span className="str">&apos;デザイナー&apos;</span> &#125;,</div>
                <div className="code-line">    ];</div>
                <div className="code-line">    <span className="kw">await</span> route.<span className="fn">fulfill</span>(&#123;</div>
                <div className="code-line">      <span className="prop">status</span>: <span className="num">200</span>,</div>
                <div className="code-line">      <span className="prop">contentType</span>: <span className="str">&apos;application/json&apos;</span>,</div>
                <div className="code-line">      <span className="prop">body</span>: JSON.<span className="fn">stringify</span>(mockUsers),</div>
                <div className="code-line">    &#125;);</div>
                <div className="code-line">  &#125;);</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">  <span className="kw">await</span> page.<span className="fn">goto</span>(<span className="str">&apos;/users&apos;</span>);</div>
                <div className="code-line">  <span className="kw">await</span> <span className="fn">expect</span>(page.<span className="fn">getByText</span>(<span className="str">&apos;テスト太郎&apos;</span>)).<span className="fn">toBeVisible</span>();</div>
                <div className="code-line">  <span className="kw">await</span> <span className="fn">expect</span>(page.<span className="fn">getByText</span>(<span className="str">&apos;テスト花子&apos;</span>)).<span className="fn">toBeVisible</span>();</div>
                <div className="code-line">&#125;);</div>
              </div>
            </div>
          </section>

          {/* ========== 15 ========== */}
          <section className="chapter" id="sec-15">
            <p className="chapter-kicker">15 / 18</p>
            <h2>CI/CD統合（GitHub Actions）</h2>
            <p>
              CI環境（GitHub Actionsなど）でPlaywrightを自動実行することで、Pull Requestごとに画面のデグレを自動検知できます。失敗時にはHTMLレポートやトレースファイルをArtifactとしてアップロードするように設定します。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_14} />
              <div className="diagram-caption">図14: GitHub Actions における Playwright テスト実行パイプライン</div>
            </div>

            <div className="code-block">
              <div className="code-head">
                <span>.github/workflows/playwright.yml</span>
                <span className="lang">yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">name</span>: <span className="str">Playwright Tests</span></div>
                <div className="code-line"><span className="kw">on</span>:</div>
                <div className="code-line">  <span className="prop">push</span>:</div>
                <div className="code-line">    <span className="prop">branches</span>: [ <span className="str">main</span>, <span className="str">master</span> ]</div>
                <div className="code-line">  <span className="prop">pull_request</span>:</div>
                <div className="code-line">    <span className="prop">branches</span>: [ <span className="str">main</span>, <span className="str">master</span> ]</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">test</span>:</div>
                <div className="code-line">    <span className="prop">timeout-minutes</span>: <span className="num">60</span></div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">    - <span className="kw">uses</span>: actions/checkout@11d5960a326750d5838078e36cf38b85af677262 <span className="cm"># v4.4.0</span></div>
                <div className="code-line">    - <span className="kw">uses</span>: actions/setup-node@49933ea5288caeca8642d1e84afbd3f7d6820020 <span className="cm"># v4.4.0</span></div>
                <div className="code-line">      <span className="kw">with</span>:</div>
                <div className="code-line">        <span className="prop">node-version</span>: <span className="num">22</span></div>
                <div className="code-line">        <span className="prop">cache</span>: <span className="str">&apos;npm&apos;</span></div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">    - <span className="prop">name</span>: Install dependencies</div>
                <div className="code-line">      <span className="kw">run</span>: npm ci</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">    - <span className="prop">name</span>: Install Playwright Browsers</div>
                <div className="code-line">      <span className="kw">run</span>: npx playwright install --with-deps</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">    - <span className="prop">name</span>: Run Playwright tests</div>
                <div className="code-line">      <span className="kw">run</span>: npx playwright test</div>
                <div className="code-line">&nbsp;</div>
                <div className="code-line">    - <span className="kw">uses</span>: actions/upload-artifact@ea165f8d65b6e75b540449e92b4886f43607fa02 <span className="cm"># v4.6.2</span></div>
                <div className="code-line">      <span className="kw">if</span>: always()</div>
                <div className="code-line">      <span className="kw">with</span>:</div>
                <div className="code-line">        <span className="prop">name</span>: playwright-report</div>
                <div className="code-line">        <span className="prop">path</span>: playwright-report/</div>
                <div className="code-line">        <span className="prop">retention-days</span>: <span className="num">30</span></div>
              </div>
            </div>
          </section>

          {/* ========== 16 ========== */}
          <section className="chapter" id="sec-16">
            <p className="chapter-kicker">16 / 18</p>
            <h2>ベストプラクティス</h2>
            <p>
              長期間メンテナンスしやすく、高速で信頼性の高いE2Eテストスイートを構築するための黄金律です。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_15} />
              <div className="diagram-caption">図15: Playwright ベストプラクティスの全体像</div>
            </div>

            <div className="table-wrap">
              <table>
                <caption className="sr-only">ベストプラクティスのカテゴリ別 推奨・非推奨一覧</caption>
                <thead>
                  <tr>
                    <th>カテゴリ</th>
                    <th>推奨（DO）</th>
                    <th>非推奨（DON&apos;T）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>ロケーター</b></td>
                    <td><code>getByRole</code> などアクセシビリティに基づくユーザー視点の特定</td>
                    <td><code>#app &gt; div:nth-child(3) &gt; button</code> 等の実装依存CSS/XPath</td>
                  </tr>
                  <tr>
                    <td><b>待機処理</b></td>
                    <td>Playwrightの自動待機とWeb-Firstアサーションに任せる</td>
                    <td><code>page.waitForTimeout(3000)</code> 等の固定秒数スリープ</td>
                  </tr>
                  <tr>
                    <td><b>テストの独立性</b></td>
                    <td>各テストが自分専用のテストデータや状態で自立して動く設計</td>
                    <td>「テストAが作ったデータをテストBが使う」という順序依存</td>
                  </tr>
                  <tr>
                    <td><b>認証フロー</b></td>
                    <td><code>storageState</code> を使ってログイン状態（Cookie/Storage）を再利用</td>
                    <td>全テストの <code>beforeEach</code> で毎回UIからID/PWを入力してログイン</td>
                  </tr>
                  <tr>
                    <td><b>型と静的解析</b></td>
                    <td>TypeScriptを使用し、<code>eslint-plugin-playwright</code> を導入</td>
                    <td><code>await</code> の付け忘れや未解決Promiseを放置すること</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ========== 17 ========== */}
          <section className="chapter" id="sec-17">
            <p className="chapter-kicker">17 / 18</p>
            <h2>学習ロードマップ</h2>
            <p>
              初学者がPlaywrightを実務レベルで使いこなせるようになるまでのステップバイステップの道筋です。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_16} />
              <div className="diagram-caption">図16: 初学者から実務マスターまでの10ステップロードマップ</div>
            </div>
          </section>

          {/* ========== 18 ========== */}
          <section className="chapter" id="sec-18">
            <p className="chapter-kicker">18 / 18</p>
            <h2>参考文献一覧</h2>
            <p>
              本ガイドの内容は、Playwright公式ドキュメントおよび最新のリリース情報を基に構成されています。詳細なAPI仕様や最新のアップデートは以下の公式リソースを参照してください。
            </p>

            <ul className="ref-list">
              <li>
                <span className="ref-label">Playwright 公式ドキュメント（英語版・公式正本）</span>
                <a href="https://playwright.dev/docs/intro" target="_blank" rel="noopener noreferrer">
                  https://playwright.dev/docs/intro
                </a>
              </li>
              <li>
                <span className="ref-label">Playwright Locators API ガイド</span>
                <a href="https://playwright.dev/docs/locators" target="_blank" rel="noopener noreferrer">
                  https://playwright.dev/docs/locators
                </a>
              </li>
              <li>
                <span className="ref-label">Playwright Best Practices</span>
                <a href="https://playwright.dev/docs/best-practices" target="_blank" rel="noopener noreferrer">
                  https://playwright.dev/docs/best-practices
                </a>
              </li>
              <li>
                <span className="ref-label">Playwright Test Runner リファレンス</span>
                <a href="https://playwright.dev/docs/test-runners" target="_blank" rel="noopener noreferrer">
                  https://playwright.dev/docs/test-runners
                </a>
              </li>
              <li>
                <span className="ref-label">Playwright GitHub リポジトリ（Microsoft公式）</span>
                <a href="https://github.com/microsoft/playwright" target="_blank" rel="noopener noreferrer">
                  https://github.com/microsoft/playwright
                </a>
              </li>
            </ul>
          </section>
        </main>
      </div>

      <footer className="page-footer">
        <p>
          Playwright 完全入門ガイド ― 初学者のためのステップバイステップ解説 | Reference:{' '}
          <a href="https://playwright.dev/docs/intro" target="_blank" rel="noopener noreferrer">
            playwright.dev
          </a>{' '}
          ほか公式ドキュメント（詳細は第18章を参照）
        </p>
      </footer>
    </div>
  );
}
