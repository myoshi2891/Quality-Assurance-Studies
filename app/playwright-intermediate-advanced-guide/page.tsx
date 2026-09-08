import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './playwright-intermediate-advanced-guide.css';

const DIAGRAM_1 = `graph TB
    subgraph TL["テストコード層"]
        A["Test Runner (playwright/test package)"]
    end
    subgraph EX["実行制御層"]
        B1["Worker Process #1"]
        B2["Worker Process #2"]
        B3["Worker Process #N"]
    end
    subgraph BA["ブラウザ抽象化層"]
        C1["Browser (Chromium)"]
        C2["Browser (Firefox)"]
        C3["Browser (WebKit)"]
    end
    subgraph IS["分離単位"]
        D1["BrowserContext A"]
        D2["BrowserContext B"]
        E1["Page"]
        E2["Page"]
        E3["Page"]
    end
    A -->|テストファイルを分散| B1
    A --> B2
    A --> B3
    B1 -->|CDP / リモートデバッグ| C1
    B2 --> C2
    B3 --> C3
    C1 --> D1
    C1 --> D2
    D1 --> E1
    D1 --> E2
    D2 --> E3`;

const DIAGRAM_2 = `graph LR
    Browser["Browser (1プロセスを複数テストで共有)"]
    Browser --> CTX1["BrowserContext A (テスト1専用)"]
    Browser --> CTX2["BrowserContext B (テスト2専用)"]
    CTX1 --> P1["Page"]
    CTX2 --> P2["Page"]
    CTX1 -.->|"Cookie/Storage/権限は互いに影響しない"| CTX2`;

const DIAGRAM_4 = `sequenceDiagram
    participant W as Worker起動
    participant AutoW as autoWorkerFixture
    participant BA as beforeAll
    participant AutoT as autoTestFixture
    participant Page as pageフィクスチャ
    participant T1 as テスト1
    participant WF as workerFixture
    participant TF as testFixture
    participant T2 as テスト2
    participant AA as afterAll
    W->>AutoW: セットアップ(自動・Worker単位)
    AutoW->>BA: beforeAll実行
    BA->>AutoT: autoTestFixtureセットアップ
    AutoT->>Page: pageセットアップ
    Page->>T1: テスト1実行
    T1-->>Page: ティアダウン(テスト単位)
    Note over T2: 2つ目のテストで初めてworkerFixtureが必要になる
    Page->>WF: workerFixtureを遅延セットアップ
    WF->>TF: testFixtureセットアップ
    TF->>T2: テスト2実行
    T2-->>TF: ティアダウン
    TF-->>AA: afterAll実行
    AA-->>WF: Worker終了時にティアダウン`;

const DIAGRAM_5 = `graph TB
    Runner["テストランナー"]
    Runner --> W1["Worker 1 (file-a.spec.ts, file-d.spec.ts)"]
    Runner --> W2["Worker 2 (file-b.spec.ts)"]
    Runner --> W3["Worker 3 (file-c.spec.ts)"]
    W1 -.->|"プロセス間通信不可(状態共有なし)"| W2
    W2 -.-> W3`;

const DIAGRAM_6 = `flowchart LR
    Push["git push"] --> Matrix["Actions Matrix shardIndex: [1,2,3,4]"]
    Matrix --> S1["Shard 1/4"]
    Matrix --> S2["Shard 2/4"]
    Matrix --> S3["Shard 3/4"]
    Matrix --> S4["Shard 4/4"]
    S1 --> Blob1["blob-report-1"]
    S2 --> Blob2["blob-report-2"]
    S3 --> Blob3["blob-report-3"]
    S4 --> Blob4["blob-report-4"]
    Blob1 --> Merge["merge-reportsジョブ (needs: すべてのShard)"]
    Blob2 --> Merge
    Blob3 --> Merge
    Blob4 --> Merge
    Merge --> HTML["統合HTMLレポート"]`;

const DIAGRAM_3 = `flowchart TD
    Start(["アクション呼び出し (例: locator.click())"]) --> Resolve{"Locatorが1要素に解決?"}
    Resolve -- 複数要素 --> StrictErr["Strictモード違反エラー"]
    Resolve -- 1要素 --> Attached{"要素はDOMにattachedか?"}
    Attached -- No --> Wait1["待機してリトライ"]
    Attached -- Yes --> Visible{"表示されているか?"}
    Visible -- No --> Wait1
    Visible -- Yes --> Stable{"安定しているか?(アニメーション完了)"}
    Stable -- No --> Wait1
    Stable -- Yes --> Receives{"イベントを受け取れるか?(他要素に非遮蔽)"}
    Receives -- No --> Wait1
    Receives -- Yes --> Enabled{"有効(enabled)か?"}
    Enabled -- No --> Wait1
    Enabled -- Yes --> Execute["アクション実行"]
    Wait1 --> Timeout{"タイムアウト到達?"}
    Timeout -- No --> Attached
    Timeout -- Yes --> TimeoutErr["TimeoutError"]`;

export default function PlaywrightIntermediateAdvancedPage() {
  return (
    <div className="playwright-intermediate-advanced-page">
      <div className="app">
        <NavBar />
        <main className="main-content">
          <header className="hero">
                    <div className="eyebrow">TECHNICAL GUIDE / QA ENGINEERING</div>
                    <h1 className="title">
                        Playwright実践ガイド<br />中級者から上級者のためのステップバイステップ解説
                    </h1>
                    <p className="lead">
                        本ガイドは
                        <a href="https://playwright.dev/docs/intro" target="_blank" rel="noopener noreferrer"
                            >Playwright公式ドキュメント</a
                        >
                        を主軸に、 Microsoft
                        Learn等の関連情報源を参照して作成した技術解説です。TypeScript +
                        <code>@playwright/test</code> を前提に、
                        実務で直面する設計判断・アーキテクチャ理解・運用ノウハウにフォーカスしています。各章末に参照URLを明記しています。
                    </p>
                    <div className="hero-meta">
                        <span className="chip">全21章</span>
                        <span className="chip">TypeScript / @playwright/test</span>
                        <span className="chip">2026年7月時点の情報</span>
                        <span className="chip">Mermaid図解</span>
                    </div>
                </header>

                {/* ============ SECTION 1 ============ */}
                <section className="doc-section" id="sec-1">
                    <h2 className="sec-title">
                        <span className="idx">01</span>Playwrightとは何か・全体アーキテクチャ
                    </h2>

                    <p>
                        Playwrightは Microsoft
                        が開発するオープンソースのEnd-to-End(E2E)テストフレームワークです。単一のAPIで
                        <strong>Chromium・Firefox・WebKit</strong>
                        の3エンジンを横断的に自動操作でき、Windows・Linux・macOS上でheadless/headed
                        両方の実行モードをサポートします。Node.js(TypeScript/JavaScript)のほか、Python・Java・.NETからも同一の思想でAPIが
                        提供されています。
                    </p>

                    <p>
                        Playwrightが他のE2Eツールと一線を画す最大の特徴は、<strong
                            >ブラウザ内部のプロトコル(CDPおよび各ブラウザ独自の
                            リモートデバッグプロトコル)に直接接続する</strong
                        >アーキテクチャです。Selenium系のようにWebDriverプロトコルを経由
                        しないため、通信オーバーヘッドが小さく、要素の状態変化を高精度に検知できます。この設計が後述する
                        「Auto-waiting」の基盤になっています。
                    </p>

                    <h3 className="sub-title">全体アーキテクチャ図</h3>
                    <div className="mermaid-container">
                      <Mermaid chart={DIAGRAM_1} />
                    </div>
                    

                    <p>このアーキテクチャの要点は次の3層です。</p>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>層</th>
                                    <th>役割</th>
                                    <th>特徴</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>テストランナー(<code>@playwright/test</code>)</td>
                                    <td>テストの発見・スケジューリング・レポート生成</td>
                                    <td>
                                        Jest/Mocha等と異なり、ブラウザ自動化に特化した専用ランナー
                                    </td>
                                </tr>
                                <tr>
                                    <td>Workerプロセス</td>
                                    <td>OSプロセスとして独立実行</td>
                                    <td>Worker間で状態を共有できない(意図的な設計)</td>
                                </tr>
                                <tr>
                                    <td>BrowserContext</td>
                                    <td>Cookie・LocalStorage・権限などを分離する単位</td>
                                    <td>
                                        通常のブラウザの「シークレットウィンドウ」に近い概念で、1つのBrowserプロセスから複数生成可能
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        Playwright Testは<strong
                            >テストランナー・アサーションライブラリ・並列化・リッチなツール群(コード生成/トレース
                            ビューア)を1つに束ねたオールインワン設計</strong
                        >である点が、公式ドキュメントでも明示されています。
                    </p>

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/intro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/intro</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/browser-contexts"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/browser-contexts</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://learn.microsoft.com/en-us/shows/getting-started-with-end-to-end-testing-with-playwright/introduction-to-playwright-for-end-to-end-testing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >learn.microsoft.com — Introduction to Playwright for end-to-end
                                    testing</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 2 ============ */}
                <section className="doc-section" id="sec-2">
                    <h2 className="sec-title">
                        <span className="idx">02</span>インストールとプロジェクトセットアップ
                    </h2>

                    <h3 className="sub-title">2.1 インストール</h3>
                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">{`bun create playwright`}</code></pre>
                    </div>
                    

                    <p>
                        このコマンドは新規プロジェクトの初期化、または既存プロジェクトへの追加のどちらにも対応しており、対話式で
                        以下を確認します。
                    </p>
                    <ul>
                        <li>TypeScript か JavaScript か(デフォルト: TypeScript)</li>
                        <li>
                            テストフォルダ名(デフォルト: <code>tests</code>、既に存在する場合は
                            <code>e2e</code>)
                        </li>
                        <li>GitHub Actionsワークフローを追加するか</li>
                        <li>Playwrightブラウザをインストールするか(デフォルト: Yes)</li>
                    </ul>

                    <p>セットアップ後に生成される構成は以下の通りです。</p>
                    <div className="code-block">
                        <div className="code-label">directory structure</div>
                        <pre><code className="language-text">{`playwright.config.ts     # テスト設定(対象ブラウザ・タイムアウト・リトライ・レポーター等を集約)
package.json
package-lock.json
tests/
  example.spec.ts        # 最小構成のサンプルテスト`}</code></pre>
                    </div>
                    

                    <h3 className="sub-title">2.2 動作要件(2026年7月時点)</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>項目</th>
                                    <th>要件</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Node.js</td>
                                    <td>22.x / 24.x / 26.x(いずれも最新版)</td>
                                </tr>
                                <tr>
                                    <td>Windows</td>
                                    <td>Windows 11以降、Windows Server 2019以降、またはWSL</td>
                                </tr>
                                <tr>
                                    <td>macOS</td>
                                    <td>macOS 14 (Sonoma) 以降</td>
                                </tr>
                                <tr>
                                    <td>Linux</td>
                                    <td>
                                        Debian 12/13、Ubuntu 22.04/24.04/26.04(x86-64またはarm64)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="sub-title">2.3 テストの実行とレポート確認</h3>
                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">{`# 全テスト実行(Chromium/Firefox/WebKitで並列)
bunx playwright test

# 特定ブラウザのみ
bunx playwright test --project=chromium

# 特定ファイルのみ
bunx playwright test tests/example.spec.ts

# ヘッド付きモード(ブラウザウィンドウを表示)
bunx playwright test --headed

# UI Mode(推奨: 開発時のデバッグ体験)
bunx playwright test --ui`}</code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">{`# HTMLレポートを表示
bunx playwright show-report`}</code></pre>
                    </div>
                    

                    <p>
                        HTMLレポートは失敗時に自動で開き、ブラウザ別・合格/失敗/flaky/スキップでフィルタ可能なダッシュボードを
                        提供します。
                    </p>

                    <h3 className="sub-title">2.4 バージョン更新</h3>
                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">{`bun add -d @playwright/test@latest
bunx playwright install --with-deps
bunx playwright --version`}</code></pre>
                    </div>
                    

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/intro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/intro</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-configuration"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-configuration</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-reporters"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-reporters</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 3 ============ */}
                <section className="doc-section" id="sec-3">
                    <h2 className="sec-title">
                        <span className="idx">03</span>基本概念: Browser / BrowserContext / Page
                    </h2>

                    <p>
                        Playwright
                        Testでは、テスト関数の引数に必要なオブジェクトを宣言するだけで自動的に注入される「フィクスチャ」
                        という仕組みが中核にあります(詳細は第7章)。まずは代表的な組み込みフィクスチャを押さえておきましょう。
                    </p>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>フィクスチャ</th>
                                    <th>型</th>
                                    <th>説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>page</code></td>
                                    <td><code>Page</code></td>
                                    <td>このテスト実行専用の分離されたページ</td>
                                </tr>
                                <tr>
                                    <td><code>context</code></td>
                                    <td><code>BrowserContext</code></td>
                                    <td>
                                        このテスト実行専用の分離されたコンテキスト。<code>page</code>はこのコンテキストに属する
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>browser</code></td>
                                    <td><code>Browser</code></td>
                                    <td>リソース最適化のためテスト間で共有される</td>
                                </tr>
                                <tr>
                                    <td><code>browserName</code></td>
                                    <td><code>string</code></td>
                                    <td>実行中のブラウザ名(chromium / firefox / webkit)</td>
                                </tr>
                                <tr>
                                    <td><code>request</code></td>
                                    <td><code>APIRequestContext</code></td>
                                    <td>HTTPリクエスト専用の分離されたコンテキスト</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="code-block">
                        <div className="code-label">basic.spec.ts</div>
                        <pre><code className="language-typescript">{`import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});`}</code></pre>
                    </div>
                    

                    <h3 className="sub-title">なぜBrowserContextによる分離が重要か</h3>
                    <p>
                        Playwrightは<strong>各テストを独立したBrowserContextで実行する</strong>ことをデフォルトの設計思想としています。
                        これにより、Cookie・セッションストレージ・権限設定などがテスト間で漏れることなく、シークレットウィンドウを
                        都度開くのと同等の再現性が得られます。テストの並列化・リトライ耐性・デバッグのしやすさは、すべてこの
                        「分離(Isolation)」の恩恵です。
                    </p>

                    <div className="mermaid-container">
                      <Mermaid chart={DIAGRAM_2} />
                    </div>
                    

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-fixtures"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-fixtures</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/browser-contexts"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/browser-contexts</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/pages"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/pages</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 4 ============ */}
                <section className="doc-section" id="sec-4">
                    <h2 className="sec-title"><span className="idx">04</span>Locators(ロケーター)戦略</h2>

                    <p>
                        Locatorは、Playwrightの自動待機とリトライ可能性(retry-ability)の中核をなす概念です。Locatorは「その瞬間に
                        ページ上の要素を探す方法」を表す<strong>遅延評価のオブジェクト</strong>であり、アクションを実行するたびにDOMを
                        再検索します。つまり、DOMの再レンダリングが発生しても、Locatorは常に最新の要素を指し続けます。
                    </p>

                    <h3 className="sub-title">4.1 推奨ロケーターの優先順位</h3>
                    <p>
                        公式ドキュメントは、ユーザーが実際に知覚する属性(ロール・テキスト・ラベルなど)を優先することを強く
                        推奨しています。
                    </p>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>優先度</th>
                                    <th>メソッド</th>
                                    <th>用途</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1(最推奨)</td>
                                    <td><code>page.getByRole()</code></td>
                                    <td>
                                        ARIAロールとアクセシブルネームで検索。アクセシビリティ検証の早期フィードバックにもなる
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><code>page.getByLabel()</code></td>
                                    <td>ラベルに紐づくフォームコントロールを検索</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><code>page.getByPlaceholder()</code></td>
                                    <td>placeholder属性で検索</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><code>page.getByText()</code></td>
                                    <td>非インタラクティブ要素(div/span/p)のテキスト内容で検索</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><code>page.getByAltText()</code></td>
                                    <td>画像の代替テキストで検索</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><code>page.getByTitle()</code></td>
                                    <td>title属性で検索</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><code>page.getByTestId()</code></td>
                                    <td>
                                        <code>data-testid</code
                                        >(カスタマイズ可)で検索。UI変更に強いが非ユーザー視点
                                    </td>
                                </tr>
                                <tr>
                                    <td>非推奨</td>
                                    <td>CSS / XPath</td>
                                    <td>DOM構造への依存が強く壊れやすい</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="code-block">
                        <div className="code-label">locators-basic.spec.ts</div>
                        <pre><code className="language-typescript">{`await page.getByRole('button', { name: 'Sign in' }).click();
await page.getByLabel('Password').fill('secret-password');
await expect(page.getByText('Welcome, John!')).toBeVisible();`}</code></pre>
                    </div>
                    

                    <p>
                        <code>data-testid</code
                        >を独自の属性名に変更したい場合は設定で切り替え可能です。
                    </p>
                    <div className="code-block">
                        <div className="code-label">playwright.config.ts</div>
                        <pre><code className="language-typescript">{`import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    testIdAttribute: 'data-pw',
  },
});`}</code></pre>
                    </div>
                    

                    <h3 className="sub-title">4.2 Locatorのフィルタリングとチェーン</h3>
                    <p>
                        一覧の中から特定要素を絞り込む際は
                        <code>filter()</code> を使います。テキスト・子孫要素の有無・可視性で
                        絞り込めます。
                    </p>
                    <div className="code-block">
                        <div className="code-label">filter-example.spec.ts</div>
                        <pre><code className="language-typescript">{`// テキストで絞り込み
await page
  .getByRole('listitem')
  .filter({ hasText: 'Product 2' })
  .getByRole('button', { name: 'Add to cart' })
  .click();

// 子孫ロケーターの有無で絞り込み(見出しに"Product 2"を含むリスト項目)
await page
  .getByRole('listitem')
  .filter({ has: page.getByRole('heading', { name: 'Product 2' }) })
  .getByRole('button', { name: 'Add to cart' })
  .click();`}</code></pre>
                    </div>
                    

                    <p>
                        複数フィルタのチェーンや、<code>.and()</code> /
                        <code>.or()</code> による論理結合もサポートされています。
                    </p>
                    <div className="code-block">
                        <div className="code-label">and-or-example.spec.ts</div>
                        <pre><code className="language-typescript">{`// role と title の両方に一致
const button = page.getByRole('button').and(page.getByTitle('Subscribe'));

// どちらかが表示されたら処理を分岐(2要素同時出現時はstrictエラーになるためfirst()で回避)
const newEmail = page.getByRole('button', { name: 'New' });
const dialog = page.getByText('Confirm security settings');
await expect(newEmail.or(dialog).first()).toBeVisible();`}</code></pre>
                    </div>
                    

                    <h3 className="sub-title">4.3 Strictモード</h3>
                    <p>
                        Locatorは<strong>厳格(strict)</strong>であり、複数要素にマッチする操作(クリックなど)は例外をスローします。
                        これは意図しない要素操作によるテストの誤動作を防ぐ安全装置です。<code>count()</code>のような複数要素向け操作は
                        例外の対象外です。<code>.first()</code> / <code>.last()</code> /
                        <code>.nth()</code> によるオプトアウトは可能ですが、
                        DOM変更時に意図しない要素を指す危険があるため非推奨とされています。
                    </p>

                    <h3 className="sub-title">4.4 Shadow DOMの扱い</h3>
                    <p>
                        PlaywrightのLocatorは<strong>デフォルトでShadow DOMを貫通</strong
                        >します(XPathを除く)。Web Componentsを
                        扱うプロジェクトでも特別な記述なしに要素を検索できる点は、他ツールとの大きな差異です。
                    </p>

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/locators"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/locators</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/best-practices"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/best-practices</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/other-locators"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/other-locators</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 5 ============ */}
                <section className="doc-section" id="sec-5">
                    <h2 className="sec-title">
                        <span className="idx">05</span>Auto-waiting(自動待機)の仕組み
                    </h2>

                    <p>
                        Playwrightのテストが安定している(Flakyになりにくい)最大の理由は、アクション実行前に<strong
                            >アクショナビリティ チェック(actionability checks)</strong
                        >を自動的に行い、すべての条件が満たされるまで待機してからアクションを
                        実行する設計にあります。条件がタイムアウトまでに満たされない場合は<code>TimeoutError</code>が発生します。
                    </p>

                    <p>
                        例えば
                        <code>locator.click()</code>
                        の場合、Playwrightは次を保証してから実行します。
                    </p>
                    <ul>
                        <li>Locatorが<strong>厳密に1要素</strong>に解決されること</li>
                        <li>要素が<strong>可視(Visible)</strong>であること</li>
                        <li>
                            要素が<strong>安定(Stable)</strong>していること(アニメーション中でない)
                        </li>
                        <li>
                            要素が<strong>イベントを受け取れる</strong>こと(他要素に隠れていない)
                        </li>
                        <li>要素が<strong>有効(Enabled)</strong>であること</li>
                    </ul>

                    <h3 className="sub-title">アクショナビリティチェックのフロー</h3>
                    <div className="mermaid-container">
                      <Mermaid chart={DIAGRAM_3} />
                    </div>
                    

                    <h3 className="sub-title">5.1 Web-First Assertionsとの関係</h3>
                    <p>
                        <code>expect(locator).toBeVisible()</code
                        >のような<strong>Web-Firstアサーション</strong>も同様にリトライを
                        内蔵しており、条件が満たされるまで自動的に再試行します。手動で<code>isVisible()</code>のような即時判定APIを
                        使うと、この恩恵を失いFlakyの原因になります(詳細は第6章)。
                    </p>

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/actionability"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/actionability</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/best-practices"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/best-practices</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 6 ============ */}
                <section className="doc-section" id="sec-6">
                    <h2 className="sec-title">
                        <span className="idx">06</span>Web-First Assertions(アサーション)
                    </h2>

                    <p>
                        Playwright
                        Testの<code>expect</code>は、標準のJest系アサーションを拡張した<strong
                            >Web-First Assertions</strong
                        >
                        を提供します。最大の特徴は、期待条件が満たされるまで自動的にポーリング・リトライする点です。
                    </p>

                    <div className="code-block">
                        <div className="code-label">assertions.spec.ts</div>
                        <pre><code className="language-typescript">{`// 👍 推奨: 表示されるまで自動的に待機・リトライする
await expect(page.getByText('Welcome')).toBeVisible();

// 👎 非推奨: 即座に判定し、リトライしない(Flakyの温床)
expect(await page.getByText('Welcome').isVisible()).toBe(true);`}</code></pre>
                    </div>
                    

                    <h3 className="sub-title">6.1 主なアサーションの分類</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>カテゴリ</th>
                                    <th>代表例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Locator(要素)系</td>
                                    <td>
                                        <code>toBeVisible()</code> / <code>toBeEnabled()</code> /
                                        <code>toHaveText()</code> / <code>toHaveCount()</code> /
                                        <code>toHaveAttribute()</code>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Page系</td>
                                    <td><code>toHaveTitle()</code> / <code>toHaveURL()</code></td>
                                </tr>
                                <tr>
                                    <td>APIResponse系</td>
                                    <td><code>toBeOK()</code></td>
                                </tr>
                                <tr>
                                    <td>汎用値比較</td>
                                    <td><code>toEqual()</code> / <code>toMatchSnapshot()</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="sub-title">6.2 Soft Assertions(ソフトアサーション)</h3>
                    <p>
                        通常のアサーションは失敗した時点でテストを即座に終了しますが、<code>expect.soft()</code>を使うと
                        <strong>失敗を記録しつつテストの実行を継続</strong
                        >し、テスト終了時にまとめて失敗一覧を報告します。1つのテストで
                        複数の検証観点を独立して確認したい場合に有用です。
                    </p>

                    <div className="code-block">
                        <div className="code-label">soft-assertion.spec.ts</div>
                        <pre><code className="language-typescript">{`await expect.soft(page.getByTestId('status')).toHaveText('Success');
// 上のアサーションが失敗してもテストは継続する
await page.getByRole('link', { name: 'next page' }).click();`}</code></pre>
                    </div>
                    

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-assertions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-assertions</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/best-practices"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/best-practices</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 7 ============ */}
<section className="doc-section" id="sec-7">
                    <h2 className="sec-title">
                        <span className="idx">07</span>Test Fixtures(テストフィクスチャ)
                    </h2>

                    <p>
                        Playwright
                        Testは<strong>フィクスチャ</strong>という概念を中心に設計されています。フィクスチャとは、
                        テストに必要な環境(前提条件)を用意し、テストにはそれ以外の情報を渡さない仕組みです。フィクスチャはテスト間で
                        分離されており、共通のセットアップコードを持つテストを「意味」でグルーピングできるようになります。
                    </p>

                    <h3 className="sub-title">7.1 Fixtureなしとありの比較</h3>
                    <p>
                        <strong>Fixtureを使わない場合</strong
                        >(before/afterフックによる典型的な構成):
                    </p>
                    <div className="code-block">
                        <div className="code-label">without-fixtures.spec.ts</div>
                        <pre><code className="language-typescript">{`import { test } from '@playwright/test';
import { TodoPage } from './todo-page';

test.describe('todo tests', () => {
  let todoPage: TodoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addItem('item1');
  });

  test.afterEach(async () => {
    await todoPage.removeAll();
  });

  test('adds an item', async () => {
    await todoPage.addItem('my item');
  });
});`}</code></pre>
                    </div>
                    

                    <p>
                        <strong>Fixtureを使う場合</strong
                        >(<code>test.extend()</code>でセットアップ/ティアダウンをカプセル化):
                    </p>
                    <div className="code-block">
                        <div className="code-label">with-fixtures.spec.ts</div>
                        <pre><code className="language-typescript">{`import { test as base } from '@playwright/test';
import { TodoPage } from './todo-page';

const test = base.extend<{ todoPage: TodoPage }>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addItem('item1');
    await use(todoPage);          // ← ここでテスト本体が実行される
    await todoPage.removeAll();   // ← テスト終了後にティアダウン
  },
});

test('adds an item', async ({ todoPage }) => {
  await todoPage.addItem('my item');
});`}</code></pre>
                    </div>
                    

                    <p>フィクスチャは次の利点を持ちます。</p>
                    <ul>
                        <li>
                            <strong>カプセル化</strong>: セットアップとティアダウンが1箇所にまとまる
                        </li>
                        <li><strong>再利用性</strong>: 複数のテストファイルで使い回せる</li>
                        <li>
                            <strong>オンデマンド</strong>:
                            テストが実際に必要とするフィクスチャのみセットアップされる
                        </li>
                        <li><strong>合成可能</strong>: フィクスチャ同士が依存し合える</li>
                        <li>
                            <strong>柔軟性</strong>:
                            テストごとに任意のフィクスチャの組み合わせが可能
                        </li>
                    </ul>

                    <h3 className="sub-title">7.2 Worker-scopedフィクスチャ</h3>
                    <p>
                        Playwright
                        Testは複数のWorkerプロセスでテストファイルを並列実行します。フィクスチャには「テストスコープ
                        (デフォルト)」と「ワーカースコープ」があり、後者は<strong>Workerプロセスにつき1回だけ</strong>セットアップされ、
                        そのWorkerが実行する全テストで再利用されます。DBセットアップや外部サービス起動など、コストの高い初期化に
                        向いています。
                    </p>

                    <div className="code-block">
                        <div className="code-label">worker-fixture.ts</div>
                        <pre><code className="language-typescript">{`import { test as base } from '@playwright/test';

type Account = { username: string; password: string };

export const test = base.extend<{}, { account: Account }>({
  account: [async ({ browser }, use, workerInfo) => {
    const username = \`user-\${workerInfo.workerIndex}\`;
    const page = await browser.newPage();
    await page.goto('/signup');
    await page.getByLabel('User Name').fill(username);
    await page.getByText('Sign up').click();
    await page.close();
    await use({ username, password: 'verysecure' });
  }, { scope: 'worker' }],
});`}</code></pre>
                    </div>
                    

                    <h3 className="sub-title">7.3 Automatic Fixtures(自動フィクスチャ)</h3>
                    <p>
                        <code>{'{ auto: true }'}</code
                        >を付けると、テストが明示的に要求しなくても常にセットアップされます。失敗時のログ
                        収集など「常に動いてほしい」補助的な処理に向いています。
                    </p>

                    <div className="code-block">
                        <div className="code-label">auto-fixture.ts</div>
                        <pre><code className="language-typescript">{`export const test = base.extend<{ saveLogsOnFailure: void }>({
  saveLogsOnFailure: [async ({}, use, testInfo) => {
    await use();
    if (testInfo.status !== testInfo.expectedStatus) {
      // 失敗時のみログを添付する処理をここに書く
    }
  }, { auto: true }],
});`}</code></pre>
                    </div>
                    

                    <h3 className="sub-title">7.4 実行順序を理解する</h3>
                    <p>フィクスチャの実行順序には明確なルールがあります。</p>
                    <ul>
                        <li>
                            フィクスチャAがフィクスチャBに依存する場合、<strong>Bは常にAより先にセットアップされ、Aより後にティアダウン</strong>される
                        </li>
                        <li>
                            非自動フィクスチャは<strong>遅延評価</strong>され、テスト/フックが実際に必要とした時点で初めてセットアップされる
                        </li>
                        <li>
                            テストスコープのフィクスチャは各テスト後にティアダウンされ、ワーカースコープのフィクスチャはWorkerプロセス終了時にのみティアダウンされる
                        </li>
                    </ul>

                    <div className="mermaid-container">
  <Mermaid chart={DIAGRAM_4} />
</div>
                    

                    <h3 className="sub-title">7.5 複数モジュールのフィクスチャ合成</h3>
                    <div className="code-block">
                        <div className="code-label">merge-fixtures.ts</div>
                        <pre><code className="language-typescript">{`import { mergeTests } from '@playwright/test';
import { test as dbTest } from './database-fixtures';
import { test as a11yTest } from './a11y-fixtures';

export const test = mergeTests(dbTest, a11yTest);`}</code></pre>
                    </div>
                    

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-fixtures"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-fixtures</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-parallel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-parallel</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 8 ============ */}
                <section className="doc-section" id="sec-8">
                    <h2 className="sec-title">
                        <span className="idx">08</span>Page Object Model(POM)設計パターン
                    </h2>

                    <p>
                        大規模なテストスイートでは、テストの可読性と保守性を高めるために<strong
                            >Page Object Model</strong
                        >の導入が 推奨されています。Page
                        Objectはアプリケーションの特定の画面(あるいは画面の一部)を表すクラスで、要素の
                        Locatorを1箇所に集約し、画面固有の操作を高レベルAPIとして提供します。
                    </p>

                    <div className="code-block">
                        <div className="code-label">playwright-dev-page.ts</div>
                        <pre><code className="language-typescript">{`import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDevPage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.gettingStartedHeader = page.getByRole('heading', { name: 'Installation' });
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async clickGetStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }
}`}</code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">example.spec.ts</div>
                        <pre><code className="language-typescript">{`import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from './playwright-dev-page';

test('Get Startedからインストールページへ遷移できる', async ({ page }) => {
  const devPage = new PlaywrightDevPage(page);
  await devPage.goto();
  await devPage.clickGetStarted();
});`}</code></pre>
                    </div>
                    

                    <h3 className="sub-title">8.1 POM単体からFixture統合されたPOMへ</h3>
                    <p>
                        POMは単体でも有用ですが、実務では第7章のFixtureと組み合わせることで真価を発揮します。テストごとに
                        <code>new TodoPage(page)</code
                        >と書く代わりに、フィクスチャとして注入すればテストコードから初期化・後始末の
                        ノイズが消えます。
                    </p>

                    <div className="code-block">
                        <div className="code-label">fixtures.ts</div>
                        <pre><code className="language-typescript">{`import { test as base } from '@playwright/test';
import { PlaywrightDevPage } from './playwright-dev-page';

export const test = base.extend<{ devPage: PlaywrightDevPage }>({
  devPage: async ({ page }, use) => {
    const devPage = new PlaywrightDevPage(page);
    await devPage.goto();
    await use(devPage);
  },
});`}</code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">example.spec.ts</div>
                        <pre><code className="language-typescript">{`import { test } from './fixtures';

test('Get Startedからインストールページへ遷移できる', async ({ devPage }) => {
  await devPage.clickGetStarted();
});`}</code></pre>
                    </div>
                    

                    <h3 className="sub-title">8.2 POM設計のポイント</h3>
                    <ul>
                        <li>
                            Locatorはコンストラクタで一括初期化し、テストコードに直接CSS/XPathを書かせない
                        </li>
                        <li>
                            画面固有の「意味のある操作」(例:
                            <code>login()</code
                            >、<code>addToCart()</code>)をメソッド化し、内部実装の変更をPOM内に閉じ込める
                        </li>
                        <li>
                            アサーションをPOM内に持たせるかは議論があるが、<strong>画面遷移の確認など操作の一部として自然なもの</strong>はPOM内に置き、<strong>ビジネスロジックの検証</strong>はテスト側に置くと責務が分離しやすい
                        </li>
                    </ul>

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/pom"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/pom</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-fixtures"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-fixtures</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 9 ============ */}
                <section className="doc-section" id="sec-9">
                    <h2 className="sec-title"><span className="idx">09</span>並列実行とWorkerプロセス</h2>

                    <p>
                        Playwright
                        Testは<strong>デフォルトで並列実行</strong>されます。複数のWorkerプロセス(OSプロセスとして独立)が
                        同時に起動し、各Workerが自分自身のブラウザインスタンスを持ちます。デフォルトでは<strong
                            >テストファイル単位</strong
                        >
                        が並列化の粒度であり、同一ファイル内のテストは順番に、同じWorkerプロセス内で実行されます。
                    </p>

                    <div className="mermaid-container">
  <Mermaid chart={DIAGRAM_5} />
</div>
                    

                    <h3 className="sub-title">9.1 Worker数の制御</h3>
                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">{`bunx playwright test --workers 4`}</code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">playwright.config.ts</div>
                        <pre><code className="language-typescript">{`export default defineConfig({
  workers: process.env.CI ? 2 : undefined, // CIでは絞り、ローカルはCPUコア数に応じて自動
});`}</code></pre>
                    </div>
                    

                    <p>
                        並列化を無効化(デバッグ時など)したい場合は<code>--workers=1</code>を指定します。
                    </p>

                    <h3 className="sub-title">9.2 ファイル内並列化(fullyParallel)</h3>
                    <p>
                        デフォルトでは同一ファイル内のテストは順番に実行されますが、
                        <code>{"test.describe.configure({ mode: 'parallel' })"}</code
                        >または設定ファイルの<code>fullyParallel: true</code>
                        によって、ファイル内のテストも並列化できます。
                    </p>

                    <div className="code-block">
                        <div className="code-label">parallel-in-file.spec.ts</div>
                        <pre><code className="language-typescript">{`test.describe.configure({ mode: 'parallel' });

test('独立したテストA', async ({ page }) => { /* ... */ });
test('独立したテストB', async ({ page }) => { /* ... */ });`}</code></pre>
                    </div>
                    

                    <div className="callout warn">
                        <div className="icon">⚠</div>
                        <p>
                            <strong>注意</strong>:
                            並列テストは別々のWorkerプロセスで実行されるため、グローバル変数や状態を共有できません。
                            各テストは<code>beforeAll</code>/<code>afterAll</code>を含む関連フックをそれぞれ独立して実行します。
                        </p>
                    </div>

                    <h3 className="sub-title">9.3 Serialモード(非推奨だが必要な場面もある)</h3>
                    <p>
                        相互に依存するテストは<code
                            >{"test.describe.configure({ mode: 'serial' })"}</code
                        >でグループ化できますが、
                        公式ドキュメントは「通常はテストを独立させる方が良い」と明言しています。1つが失敗すると後続はすべてスキップ
                        されます。
                    </p>

                    <h3 className="sub-title">9.4 Worker単位でのデータ分離</h3>
                    <p>
                        <code>testInfo.workerIndex</code
                        >を使うことで、Worker間でテストデータ(DBユーザー等)を安全に分離できます。
                    </p>
                    <div className="code-block">
                        <div className="code-label">worker-scoped-data.ts</div>
                        <pre><code className="language-typescript">{`export const test = baseTest.extend<{}, { dbUserName: string }>({
  dbUserName: [async ({}, use) => {
    const userName = \`user-\${test.info().workerIndex}\`;
    await createUserInTestDatabase(userName);
    await use(userName);
    await deleteUserFromTestDatabase(userName);
  }, { scope: 'worker' }],
});`}</code></pre>
                    </div>
                    

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-parallel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-parallel</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-fixtures"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-fixtures</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 10 ============ */}
                <section className="doc-section" id="sec-10">
                    <h2 className="sec-title">
                        <span className="idx">10</span>Sharding(シャーディング)によるスケールアウト
                    </h2>

                    <p>
                        1台のマシンでの並列化には限界があります。<strong>Sharding</strong>は、テストスイート全体を複数の「シャード」に
                        分割し、複数のマシン(典型的にはCIのジョブ)で同時に実行する仕組みです。
                    </p>

                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">{`bunx playwright test --shard=1/4
bunx playwright test --shard=2/4
bunx playwright test --shard=3/4
bunx playwright test --shard=4/4`}</code></pre>
                    </div>
                    

                    <p>
                        4台で並列実行すれば、理論上テストスイート全体の実行時間を1/4に短縮できます。
                    </p>

                    <h3 className="sub-title">10.1 シャードのバランシング</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>設定</th>
                                    <th>分割の粒度</th>
                                    <th>特徴</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>fullyParallel: true</code></td>
                                    <td>個々のテスト単位</td>
                                    <td>シャード間でテスト数が均等に分配されやすい(推奨)</td>
                                </tr>
                                <tr>
                                    <td><code>fullyParallel</code>なし(デフォルト)</td>
                                    <td>ファイル単位</td>
                                    <td>
                                        ファイルごとのテスト数に偏りがあるとシャード間の負荷が不均衡になりやすい
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="sub-title">10.2 レポートのマージ</h3>
                    <p>
                        シャードごとに生成された個別レポートを1つに統合するには、<code>blob</code>レポーターを使います。
                    </p>
                    <div className="code-block">
                        <div className="code-label">playwright.config.ts</div>
                        <pre><code className="language-typescript">{`export default defineConfig({
  reporter: process.env.CI ? 'blob' : 'html',
});`}</code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">{`bunx playwright merge-reports --reporter html ./all-blob-reports`}</code></pre>
                    </div>
                    

                    <h3 className="sub-title">10.3 GitHub Actionsでのシャーディング例</h3>
                    <div className="mermaid-container">
  <Mermaid chart={DIAGRAM_6} />
</div>
                    

                    <div className="code-block">
                        <div className="code-label">.github/workflows/playwright.yml(抜粋)</div>
                        <pre><code className="language-yaml">{`jobs:
  playwright-tests:
    strategy:
      fail-fast: false
      matrix:
        shardIndex: [1, 2, 3, 4]
        shardTotal: [4]
    steps:
      - uses: actions/checkout@v5
      - uses: actions/setup-node@v5
        with:
          node-version: lts/*
      - uses: oven-sh/setup-bun@v2
      - run: bun install --frozen-lockfile
      - run: bunx playwright install --with-deps
      - run: bunx playwright test --shard=\${{ matrix.shardIndex }}/\${{ matrix.shardTotal }}
      - uses: actions/upload-artifact@v4
        if: \${{ !cancelled() }}
        with:
          name: blob-report-\${{ matrix.shardIndex }}
          path: blob-report
          retention-days: 1

  merge-reports:
    if: \${{ !cancelled() }}
    needs: [playwright-tests]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: oven-sh/setup-bun@v2
      - uses: actions/download-artifact@v5
        with:
          path: all-blob-reports
          pattern: blob-report-*
          merge-multiple: true
      - run: bunx playwright merge-reports --reporter html ./all-blob-reports
      - uses: actions/upload-artifact@v4
        with:
          name: html-report
          path: playwright-report`}</code></pre>
                    </div>
                    

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-sharding"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-sharding</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-parallel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-parallel</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-reporters"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-reporters</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 11 ============ */}
                <section className="doc-section" id="sec-11">
                    <h2 className="sec-title"><span className="idx">11</span>リトライとFlakyテスト対策</h2>

                    <p>
                        失敗したテストを自動的に再試行する仕組みが<strong>Retries</strong>です。デフォルトでは無効ですが、CI環境では
                        有効化するのが一般的です。
                    </p>

                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">{`bunx playwright test --retries=3`}</code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">playwright.config.ts</div>
                        <pre><code className="language-typescript">{`export default defineConfig({
  retries: process.env.CI ? 2 : 0,
});`}</code></pre>
                    </div>
                    

                    <h3 className="sub-title">11.1 テストの分類</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>分類</th>
                                    <th>意味</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>passed</td>
                                    <td>初回実行で合格</td>
                                </tr>
                                <tr>
                                    <td>flaky</td>
                                    <td>初回は失敗したがリトライで合格</td>
                                </tr>
                                <tr>
                                    <td>failed</td>
                                    <td>初回・リトライすべてで失敗</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        Workerプロセスはテストが1つでも失敗すると<strong>破棄され、新しいWorkerプロセスが起動</strong>します。これは、
                        失敗したテストが残した副作用(グローバル状態の汚染など)が後続テストに影響しないようにするための設計です。
                        リトライが有効な場合、新しいWorkerプロセスは失敗したテストからやり直します。
                    </p>

                    <h3 className="sub-title">11.2 リトライ回数はテストの中からも参照できる</h3>
                    <div className="code-block">
                        <div className="code-label">retry-aware.spec.ts</div>
                        <pre><code className="language-typescript">{`test('サーバー状態に依存するテスト', async ({ page }, testInfo) => {
  if (testInfo.retry) {
    await cleanUpServerSideCache();
  }
  // ...
});`}</code></pre>
                    </div>
                    

                    <h3 className="sub-title">11.3 Flaky対策の本質</h3>
                    <p>
                        リトライは<strong>対症療法</strong>であり、根本原因(不十分な待機、不安定なテストデータ、外部依存のブレ)への
                        対応が本筋です。第4〜6章のLocator戦略・Auto-waiting・Web-Firstアサーションを正しく使うことが、最も効果的な
                        Flaky対策になります。
                    </p>

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-retries"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-retries</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/best-practices"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/best-practices</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 12 ============ */}
                

                
        </main>
      </div>
    </div>
  );
}
