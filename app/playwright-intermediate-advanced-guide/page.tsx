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

const DIAGRAM_7 = `flowchart TD
    A["テスト実行"] --> B{"失敗した?"}
    B -- Yes --> C["trace.zip を自動生成(on-first-retryの場合)"]
    B -- No --> D["トレースなし(設定次第)"]
    C --> E["bunx playwright show-report"]
    E --> F["HTMLレポート内のトレースアイコンをクリック"]
    F --> G["Trace Viewerが開く"]
    G --> H["タイムライン上でアクションを1つずつ確認"]
    H --> I["DOMスナップショット閲覧 + DevTools起動可能"]
    H --> J["ネットワークログ確認"]
    H --> K["コンソールログ確認"]`;

const DIAGRAM_8 = `flowchart LR
    A["page.routeFromHAR() update: true"] --> B["実際にAPIへアクセスしHARファイルへ記録"]
    B --> C["HARファイルをバージョン管理にコミット"]
    C --> D["update: false で再実行"]
    D --> E["記録済みHARからレスポンスを再生(実APIは呼ばれない)"]`;

const DIAGRAM_9 = `flowchart TD
    Start(["テストはサーバー側状態を変更するか?"]) -->|変更しない| Basic
    Start -->|"変更する(例: 設定変更テストが並列実行される)"| Worker
    Basic["基本戦略: 全テストで共有アカウント1つ"] --> BasicDetail["setupプロジェクトで1回だけログイン → storageState.jsonを保存 → 全テストプロジェクトがdependenciesで参照"]
    Worker["中級戦略: Workerごとに専用アカウント"] --> WorkerDetail["parallelIndexでWorker固有のアカウントを払い出し → Worker単位でstorageStateをキャッシュ"]
    BasicDetail --> Roles{"複数ロール(admin/user等)が必要か?"}
    WorkerDetail --> Roles
    Roles -- Yes --> Multi["複数回ログインしロールごとにstorageStateを保存 test.use()で使い分け"]
    Roles -- No --> Done["完了"]
    Multi --> Together{"複数ロールを1テスト内で同時に操作するか?"}
    Together -- Yes --> Contexts["browser.newContext()で複数のBrowserContextを生成し同時に操作"]
    Together -- No --> Done`;

const DIAGRAM_11 = `flowchart TD
    A["git push / PR"] --> B["リポジトリをclone"]
    B --> C["Node.jsをセットアップ"]
    C --> D["bun install --frozen-lockfile"]
    D --> E["bunx playwright install --with-deps"]
    E --> F["bunx playwright test"]
    F --> G{"テスト結果"}
    G -- 合格 --> H["HTMLレポートをArtifactへアップロード"]
    G -- 失敗 --> H
    H --> I["GitHub Actions ActionsタブでArtifact確認"]
    I --> J["bunx playwright show-report でローカル閲覧"]
    J --> K["Trace Viewerで失敗箇所を特定"]`;

const DIAGRAM_12 = `graph LR
    subgraph DC["Docker Container"]
        Server["Playwright Server (ws://0.0.0.0:3000)"]
    end
    subgraph HM["ホスト / 別マシン"]
        Test["bunx playwright test (PW_TEST_CONNECT_WS_ENDPOINT経由)"]
    end
    Test -->|WebSocket接続| Server`;

const DIAGRAM_10 = `flowchart LR
    subgraph PRE["前提条件の準備(APIで高速化)"]
        A["APIでテストデータを作成"]
    end
    subgraph UI["UI検証"]
        B["ブラウザでページ遷移・操作"]
        C["UI上で期待通り表示されるか検証"]
    end
    subgraph POST["事後条件の検証(APIで確実に)"]
        D["APIでサーバー側状態を検証"]
    end
    A --> B --> C --> D`;

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
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-keyword">bun</span> create <span className="hljs-keyword">playwright</span></div>
                        </code></pre>
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
                        <pre><code className="language-text">
                        <div className="code-line">playwright.config.ts     <span className="hljs-comment"># テスト設定(対象ブラウザ・タイムアウト・リトライ・レポーター等を集約)</span></div>
                        <div className="code-line">package.json</div>
                        <div className="code-line">package-lock.json</div>
                        <div className="code-line">tests/</div>
                        <div className="code-line">  example.spec.ts        <span className="hljs-comment"># 最小構成のサンプルテスト</span></div>
                        </code></pre>
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
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-comment"># 全テスト実行(Chromium/Firefox/WebKitで並列)</span></div>
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-comment"># 特定ブラウザのみ</span></div>
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test <span className="hljs-attr">--project</span>=chromium</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-comment"># 特定ファイルのみ</span></div>
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test tests/example.spec.ts</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-comment"># ヘッド付きモード(ブラウザウィンドウを表示)</span></div>
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test <span className="hljs-attr">--headed</span></div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-comment"># UI Mode(推奨: 開発時のデバッグ体験)</span></div>
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test <span className="hljs-attr">--ui</span></div>
                        </code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-comment"># HTMLレポートを表示</span></div>
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> show-report</div>
                        </code></pre>
                    </div>
                    

                    <p>
                        HTMLレポートは失敗時に自動で開き、ブラウザ別・合格/失敗/flaky/スキップでフィルタ可能なダッシュボードを
                        提供します。
                    </p>

                    <h3 className="sub-title">2.4 バージョン更新</h3>
                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-keyword">bun</span> add <span className="hljs-attr">-d</span> @<span className="hljs-keyword">playwright</span>/test@latest</div>
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> install <span className="hljs-attr">--with-deps</span></div>
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> <span className="hljs-attr">--version</span></div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; <span className="hljs-built_in">test</span>, <span className="hljs-built_in">expect</span> &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'@playwright/test'</span>;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'basic test'</span>, <span className="hljs-keyword">async</span> (&#123; page &#125;) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">goto</span>(<span className="hljs-string">'https://playwright.dev/'</span>);</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>(page).<span className="hljs-title function_">toHaveTitle</span>(/Playwright/);</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">await</span> page.<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'button'</span>, &#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'Sign in'</span> &#125;).<span className="hljs-title function_">click</span>();</div>
                        <div className="code-line"><span className="hljs-keyword">await</span> page.<span className="hljs-title function_">getByLabel</span>(<span className="hljs-string">'Password'</span>).<span className="hljs-title function_">fill</span>(<span className="hljs-string">'secret-password'</span>);</div>
                        <div className="code-line"><span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>(page.<span className="hljs-title function_">getByText</span>(<span className="hljs-string">'Welcome, John!'</span>)).<span className="hljs-title function_">toBeVisible</span>();</div>
                        </code></pre>
                    </div>
                    

                    <p>
                        <code>data-testid</code
                        >を独自の属性名に変更したい場合は設定で切り替え可能です。
                    </p>
                    <div className="code-block">
                        <div className="code-label">playwright.config.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; defineConfig &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'@playwright/test'</span>;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">default</span> <span className="hljs-title function_">defineConfig</span>(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">use</span>: &#123;</div>
                        <div className="code-line">    <span className="hljs-attr">testIdAttribute</span>: <span className="hljs-string">'data-pw'</span>,</div>
                        <div className="code-line">  &#125;,</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">4.2 Locatorのフィルタリングとチェーン</h3>
                    <p>
                        一覧の中から特定要素を絞り込む際は
                        <code>filter()</code> を使います。テキスト・子孫要素の有無・可視性で
                        絞り込めます。
                    </p>
                    <div className="code-block">
                        <div className="code-label">filter-example.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-comment">// テキストで絞り込み</span></div>
                        <div className="code-line"><span className="hljs-keyword">await</span> page</div>
                        <div className="code-line">  .<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'listitem'</span>)</div>
                        <div className="code-line">  .<span className="hljs-title function_">filter</span>(&#123; <span className="hljs-attr">hasText</span>: <span className="hljs-string">'Product 2'</span> &#125;)</div>
                        <div className="code-line">  .<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'button'</span>, &#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'Add to cart'</span> &#125;)</div>
                        <div className="code-line">  .<span className="hljs-title function_">click</span>();</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-comment">// 子孫ロケーターの有無で絞り込み(見出しに&quot;Product 2&quot;を含むリスト項目)</span></div>
                        <div className="code-line"><span className="hljs-keyword">await</span> page</div>
                        <div className="code-line">  .<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'listitem'</span>)</div>
                        <div className="code-line">  .<span className="hljs-title function_">filter</span>(&#123; <span className="hljs-attr">has</span>: page.<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'heading'</span>, &#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'Product 2'</span> &#125;) &#125;)</div>
                        <div className="code-line">  .<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'button'</span>, &#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'Add to cart'</span> &#125;)</div>
                        <div className="code-line">  .<span className="hljs-title function_">click</span>();</div>
                        </code></pre>
                    </div>
                    

                    <p>
                        複数フィルタのチェーンや、<code>.and()</code> /
                        <code>.or()</code> による論理結合もサポートされています。
                    </p>
                    <div className="code-block">
                        <div className="code-label">and-or-example.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-comment">// role と title の両方に一致</span></div>
                        <div className="code-line"><span className="hljs-keyword">const</span> button = page.<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'button'</span>).<span className="hljs-title function_">and</span>(page.<span className="hljs-title function_">getByTitle</span>(<span className="hljs-string">'Subscribe'</span>));</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-comment">// どちらかが表示されたら処理を分岐(2要素同時出現時はstrictエラーになるためfirst()で回避)</span></div>
                        <div className="code-line"><span className="hljs-keyword">const</span> newEmail = page.<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'button'</span>, &#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'New'</span> &#125;);</div>
                        <div className="code-line"><span className="hljs-keyword">const</span> dialog = page.<span className="hljs-title function_">getByText</span>(<span className="hljs-string">'Confirm security settings'</span>);</div>
                        <div className="code-line"><span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>(newEmail.<span className="hljs-title function_">or</span>(dialog).<span className="hljs-title function_">first</span>()).<span className="hljs-title function_">toBeVisible</span>();</div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-comment">// 👍 推奨: 表示されるまで自動的に待機・リトライする</span></div>
                        <div className="code-line"><span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>(page.<span className="hljs-title function_">getByText</span>(<span className="hljs-string">'Welcome'</span>)).<span className="hljs-title function_">toBeVisible</span>();</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-comment">// 👎 非推奨: 即座に判定し、リトライしない(Flakyの温床)</span></div>
                        <div className="code-line"><span className="hljs-built_in">expect</span>(<span className="hljs-keyword">await</span> page.<span className="hljs-title function_">getByText</span>(<span className="hljs-string">'Welcome'</span>).<span className="hljs-title function_">isVisible</span>()).<span className="hljs-title function_">toBe</span>(<span className="hljs-built_in">true</span>);</div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>.<span className="hljs-title function_">soft</span>(page.<span className="hljs-title function_">getByTestId</span>(<span className="hljs-string">'status'</span>)).<span className="hljs-title function_">toHaveText</span>(<span className="hljs-string">'Success'</span>);</div>
                        <div className="code-line"><span className="hljs-comment">// 上のアサーションが失敗してもテストは継続する</span></div>
                        <div className="code-line"><span className="hljs-keyword">await</span> page.<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'link'</span>, &#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'next page'</span> &#125;).<span className="hljs-title function_">click</span>();</div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; <span className="hljs-built_in">test</span> &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'@playwright/test'</span>;</div>
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; TodoPage &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'./todo-page'</span>;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-built_in">test</span>.<span className="hljs-title function_">describe</span>(<span className="hljs-string">'todo tests'</span>, () =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">let</span> <span className="hljs-attr">todoPage</span>: TodoPage;</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="hljs-built_in">test</span>.<span className="hljs-title function_">beforeEach</span>(<span className="hljs-keyword">async</span> (&#123; page &#125;) =&gt; &#123;</div>
                        <div className="code-line">    todoPage = <span className="hljs-keyword">new</span> <span className="hljs-title function_">TodoPage</span>(page);</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> todoPage.<span className="hljs-title function_">goto</span>();</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> todoPage.<span className="hljs-title function_">addItem</span>(<span className="hljs-string">'item1'</span>);</div>
                        <div className="code-line">  &#125;);</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="hljs-built_in">test</span>.<span className="hljs-title function_">afterEach</span>(<span className="hljs-keyword">async</span> () =&gt; &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> todoPage.<span className="hljs-title function_">removeAll</span>();</div>
                        <div className="code-line">  &#125;);</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="hljs-built_in">test</span>(<span className="hljs-string">'adds an item'</span>, <span className="hljs-keyword">async</span> () =&gt; &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> todoPage.<span className="hljs-title function_">addItem</span>(<span className="hljs-string">'my item'</span>);</div>
                        <div className="code-line">  &#125;);</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <p>
                        <strong>Fixtureを使う場合</strong
                        >(<code>test.extend()</code>でセットアップ/ティアダウンをカプセル化):
                    </p>
                    <div className="code-block">
                        <div className="code-label">with-fixtures.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; <span className="hljs-built_in">test</span> <span className="hljs-keyword">as</span> base &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'@playwright/test'</span>;</div>
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; TodoPage &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'./todo-page'</span>;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-keyword">const</span> <span className="hljs-built_in">test</span> = base.<span className="hljs-property">extend</span>&lt;&#123; <span className="hljs-attr">todoPage</span>: TodoPage &#125;&gt;(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">todoPage</span>: <span className="hljs-keyword">async</span> (&#123; page &#125;, use) =&gt; &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">const</span> todoPage = <span className="hljs-keyword">new</span> <span className="hljs-title function_">TodoPage</span>(page);</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> todoPage.<span className="hljs-title function_">goto</span>();</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> todoPage.<span className="hljs-title function_">addItem</span>(<span className="hljs-string">'item1'</span>);</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> <span className="hljs-title function_">use</span>(todoPage);          <span className="hljs-comment">// ← ここでテスト本体が実行される</span></div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> todoPage.<span className="hljs-title function_">removeAll</span>();   <span className="hljs-comment">// ← テスト終了後にティアダウン</span></div>
                        <div className="code-line">  &#125;,</div>
                        <div className="code-line">&#125;);</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'adds an item'</span>, <span className="hljs-keyword">async</span> (&#123; todoPage &#125;) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> todoPage.<span className="hljs-title function_">addItem</span>(<span className="hljs-string">'my item'</span>);</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; <span className="hljs-built_in">test</span> <span className="hljs-keyword">as</span> base &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'@playwright/test'</span>;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-keyword">type</span> Account = &#123; <span className="hljs-attr">username</span>: <span className="hljs-built_in">string</span>; <span className="hljs-attr">password</span>: <span className="hljs-built_in">string</span> &#125;;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">const</span> <span className="hljs-built_in">test</span> = base.<span className="hljs-property">extend</span>&lt;&#123;&#125;, &#123; <span className="hljs-attr">account</span>: Account &#125;&gt;(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">account</span>: [<span className="hljs-keyword">async</span> (&#123; browser &#125;, use, workerInfo) =&gt; &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">const</span> username = <span className="hljs-string">`user-$&#123;workerInfo.workerIndex&#125;`</span>;</div>
                        <div className="code-line">    <span className="hljs-keyword">const</span> page = <span className="hljs-keyword">await</span> browser.<span className="hljs-title function_">newPage</span>();</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">goto</span>(<span className="hljs-string">'/signup'</span>);</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">getByLabel</span>(<span className="hljs-string">'User Name'</span>).<span className="hljs-title function_">fill</span>(username);</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">getByText</span>(<span className="hljs-string">'Sign up'</span>).<span className="hljs-title function_">click</span>();</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">close</span>();</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> <span className="hljs-title function_">use</span>(&#123; username, <span className="hljs-attr">password</span>: <span className="hljs-string">'verysecure'</span> &#125;);</div>
                        <div className="code-line">  &#125;, &#123; <span className="hljs-attr">scope</span>: <span className="hljs-string">'worker'</span> &#125;],</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">7.3 Automatic Fixtures(自動フィクスチャ)</h3>
                    <p>
                        <code>{'{ auto: true }'}</code
                        >を付けると、テストが明示的に要求しなくても常にセットアップされます。失敗時のログ
                        収集など「常に動いてほしい」補助的な処理に向いています。
                    </p>

                    <div className="code-block">
                        <div className="code-label">auto-fixture.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">const</span> <span className="hljs-built_in">test</span> = base.<span className="hljs-property">extend</span>&lt;&#123; <span className="hljs-attr">saveLogsOnFailure</span>: <span className="hljs-keyword">void</span> &#125;&gt;(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">saveLogsOnFailure</span>: [<span className="hljs-keyword">async</span> (&#123;&#125;, use, testInfo) =&gt; &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> <span className="hljs-title function_">use</span>();</div>
                        <div className="code-line">    <span className="hljs-keyword">if</span> (testInfo.<span className="hljs-property">status</span> !== testInfo.<span className="hljs-property">expectedStatus</span>) &#123;</div>
                        <div className="code-line">      <span className="hljs-comment">// 失敗時のみログを添付する処理をここに書く</span></div>
                        <div className="code-line">    &#125;</div>
                        <div className="code-line">  &#125;, &#123; <span className="hljs-attr">auto</span>: <span className="hljs-built_in">true</span> &#125;],</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; mergeTests &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'@playwright/test'</span>;</div>
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; <span className="hljs-built_in">test</span> <span className="hljs-keyword">as</span> dbTest &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'./database-fixtures'</span>;</div>
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; <span className="hljs-built_in">test</span> <span className="hljs-keyword">as</span> a11yTest &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'./a11y-fixtures'</span>;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">const</span> <span className="hljs-built_in">test</span> = <span className="hljs-title function_">mergeTests</span>(dbTest, a11yTest);</div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; <span className="hljs-built_in">expect</span>, <span className="hljs-keyword">type</span> <span className="hljs-built_in">Locator</span>, <span className="hljs-keyword">type</span> <span className="hljs-built_in">Page</span> &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'@playwright/test'</span>;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">class</span> PlaywrightDevPage &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">readonly</span> <span className="hljs-attr">page</span>: <span className="hljs-built_in">Page</span>;</div>
                        <div className="code-line">  <span className="hljs-keyword">readonly</span> <span className="hljs-attr">getStartedLink</span>: <span className="hljs-built_in">Locator</span>;</div>
                        <div className="code-line">  <span className="hljs-keyword">readonly</span> <span className="hljs-attr">gettingStartedHeader</span>: <span className="hljs-built_in">Locator</span>;</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="hljs-title function_">constructor</span>(<span className="hljs-attr">page</span>: <span className="hljs-built_in">Page</span>) &#123;</div>
                        <div className="code-line">    this.<span className="hljs-property">page</span> = page;</div>
                        <div className="code-line">    this.<span className="hljs-property">getStartedLink</span> = page.<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'link'</span>, &#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'Get started'</span> &#125;);</div>
                        <div className="code-line">    this.<span className="hljs-property">gettingStartedHeader</span> = page.<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'heading'</span>, &#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'Installation'</span> &#125;);</div>
                        <div className="code-line">  &#125;</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="hljs-keyword">async</span> <span className="hljs-title function_">goto</span>() &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> this.<span className="hljs-property">page</span>.<span className="hljs-title function_">goto</span>(<span className="hljs-string">'https://playwright.dev'</span>);</div>
                        <div className="code-line">  &#125;</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="hljs-keyword">async</span> <span className="hljs-title function_">clickGetStarted</span>() &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> this.<span className="hljs-property">getStartedLink</span>.<span className="hljs-title function_">first</span>().<span className="hljs-title function_">click</span>();</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>(this.<span className="hljs-property">gettingStartedHeader</span>).<span className="hljs-title function_">toBeVisible</span>();</div>
                        <div className="code-line">  &#125;</div>
                        <div className="code-line">&#125;</div>
                        </code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">example.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; <span className="hljs-built_in">test</span>, <span className="hljs-built_in">expect</span> &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'@playwright/test'</span>;</div>
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; PlaywrightDevPage &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'./playwright-dev-page'</span>;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'Get Startedからインストールページへ遷移できる'</span>, <span className="hljs-keyword">async</span> (&#123; page &#125;) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">const</span> devPage = <span className="hljs-keyword">new</span> <span className="hljs-title function_">PlaywrightDevPage</span>(page);</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> devPage.<span className="hljs-title function_">goto</span>();</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> devPage.<span className="hljs-title function_">clickGetStarted</span>();</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; <span className="hljs-built_in">test</span> <span className="hljs-keyword">as</span> base &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'@playwright/test'</span>;</div>
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; PlaywrightDevPage &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'./playwright-dev-page'</span>;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">const</span> <span className="hljs-built_in">test</span> = base.<span className="hljs-property">extend</span>&lt;&#123; <span className="hljs-attr">devPage</span>: PlaywrightDevPage &#125;&gt;(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">devPage</span>: <span className="hljs-keyword">async</span> (&#123; page &#125;, use) =&gt; &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">const</span> devPage = <span className="hljs-keyword">new</span> <span className="hljs-title function_">PlaywrightDevPage</span>(page);</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> devPage.<span className="hljs-title function_">goto</span>();</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> <span className="hljs-title function_">use</span>(devPage);</div>
                        <div className="code-line">  &#125;,</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">example.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; <span className="hljs-built_in">test</span> &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'./fixtures'</span>;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'Get Startedからインストールページへ遷移できる'</span>, <span className="hljs-keyword">async</span> (&#123; devPage &#125;) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> devPage.<span className="hljs-title function_">clickGetStarted</span>();</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
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
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test <span className="hljs-attr">--workers</span> </div>
                        </code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">playwright.config.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">default</span> <span className="hljs-title function_">defineConfig</span>(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">workers</span>: process.<span className="hljs-property">env</span>.<span className="hljs-property">CI</span> ? <span className="hljs-number">2</span> : <span className="hljs-built_in">undefined</span>, <span className="hljs-comment">// CIでは絞り、ローカルはCPUコア数に応じて自動</span></div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-built_in">test</span>.<span className="hljs-property">describe</span>.<span className="hljs-title function_">configure</span>(&#123; <span className="hljs-attr">mode</span>: <span className="hljs-string">'parallel'</span> &#125;);</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'独立したテストA'</span>, <span className="hljs-keyword">async</span> (&#123; page &#125;) =&gt; &#123; <span className="hljs-comment">/* ... */</span> &#125;);</div>
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'独立したテストB'</span>, <span className="hljs-keyword">async</span> (&#123; page &#125;) =&gt; &#123; <span className="hljs-comment">/* ... */</span> &#125;);</div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">const</span> <span className="hljs-built_in">test</span> = baseTest.<span className="hljs-property">extend</span>&lt;&#123;&#125;, &#123; <span className="hljs-attr">dbUserName</span>: <span className="hljs-built_in">string</span> &#125;&gt;(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">dbUserName</span>: [<span className="hljs-keyword">async</span> (&#123;&#125;, use) =&gt; &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">const</span> userName = <span className="hljs-string">`user-$&#123;test.info().workerIndex&#125;`</span>;</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> <span className="hljs-title function_">createUserInTestDatabase</span>(userName);</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> <span className="hljs-title function_">use</span>(userName);</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> <span className="hljs-title function_">deleteUserFromTestDatabase</span>(userName);</div>
                        <div className="code-line">  &#125;, &#123; <span className="hljs-attr">scope</span>: <span className="hljs-string">'worker'</span> &#125;],</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
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
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test <span className="hljs-attr">--shard</span>=/</div>
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test <span className="hljs-attr">--shard</span>=/</div>
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test <span className="hljs-attr">--shard</span>=/</div>
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test <span className="hljs-attr">--shard</span>=/</div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">default</span> <span className="hljs-title function_">defineConfig</span>(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">reporter</span>: process.<span className="hljs-property">env</span>.<span className="hljs-property">CI</span> ? <span className="hljs-string">'blob'</span> : <span className="hljs-string">'html'</span>,</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> merge-reports <span className="hljs-attr">--reporter</span> html ./all-blob-reports</div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">10.3 GitHub Actionsでのシャーディング例</h3>
                    <div className="mermaid-container">
  <Mermaid chart={DIAGRAM_6} />
</div>
                    

                    <div className="code-block">
                        <div className="code-label">.github/workflows/playwright.yml(抜粋)</div>
                        <pre><code className="language-yaml">
                        <div className="code-line"><span className="hljs-attr">jobs</span>:</div>
                        <div className="code-line">  <span className="hljs-attr">playwright-tests</span>:</div>
                        <div className="code-line">    <span className="hljs-attr">strategy</span>:</div>
                        <div className="code-line">      <span className="hljs-attr">fail-fast</span>: <span className="hljs-literal">false</span></div>
                        <div className="code-line">      <span className="hljs-attr">matrix</span>:</div>
                        <div className="code-line">        <span className="hljs-attr">shardIndex</span>: [1, 2, 3, 4]</div>
                        <div className="code-line">        <span className="hljs-attr">shardTotal</span>: [4]</div>
                        <div className="code-line">    <span className="hljs-attr">steps</span>:</div>
                        <div className="code-line">      - uses: actions/checkout@v5</div>
                        <div className="code-line">      - uses: actions/setup-node@v5</div>
                        <div className="code-line">        <span className="hljs-attr">with</span>:</div>
                        <div className="code-line">          <span className="hljs-attr">node-version</span>: lts/*</div>
                        <div className="code-line">      - uses: oven-sh/setup-bun@v2</div>
                        <div className="code-line">      - run: bun install --frozen-lockfile</div>
                        <div className="code-line">      - run: bunx playwright install --with-deps</div>
                        <div className="code-line">      - run: bunx playwright test --shard=$&#123;&#123; matrix.shardIndex &#125;&#125;/$&#123;&#123; matrix.shardTotal &#125;&#125;</div>
                        <div className="code-line">      - uses: actions/upload-artifact@v4</div>
                        <div className="code-line">        <span className="hljs-attr">if</span>: $&#123;&#123; !cancelled() &#125;&#125;</div>
                        <div className="code-line">        <span className="hljs-attr">with</span>:</div>
                        <div className="code-line">          <span className="hljs-attr">name</span>: blob-report-$&#123;&#123; matrix.shardIndex &#125;&#125;</div>
                        <div className="code-line">          <span className="hljs-attr">path</span>: blob-report</div>
                        <div className="code-line">          <span className="hljs-attr">retention-days</span>: <span className="hljs-number">1</span></div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="hljs-attr">merge-reports</span>:</div>
                        <div className="code-line">    <span className="hljs-attr">if</span>: $&#123;&#123; !cancelled() &#125;&#125;</div>
                        <div className="code-line">    <span className="hljs-attr">needs</span>: [playwright-tests]</div>
                        <div className="code-line">    <span className="hljs-attr">runs-on</span>: ubuntu-latest</div>
                        <div className="code-line">    <span className="hljs-attr">steps</span>:</div>
                        <div className="code-line">      - uses: actions/checkout@v5</div>
                        <div className="code-line">      - uses: oven-sh/setup-bun@v2</div>
                        <div className="code-line">      - uses: actions/download-artifact@v5</div>
                        <div className="code-line">        <span className="hljs-attr">with</span>:</div>
                        <div className="code-line">          <span className="hljs-attr">path</span>: all-blob-reports</div>
                        <div className="code-line">          <span className="hljs-attr">pattern</span>: blob-report-*</div>
                        <div className="code-line">          <span className="hljs-attr">merge-multiple</span>: <span className="hljs-literal">true</span></div>
                        <div className="code-line">      - run: bunx playwright merge-reports --reporter html ./all-blob-reports</div>
                        <div className="code-line">      - uses: actions/upload-artifact@v4</div>
                        <div className="code-line">        <span className="hljs-attr">with</span>:</div>
                        <div className="code-line">          <span className="hljs-attr">name</span>: html-report</div>
                        <div className="code-line">          <span className="hljs-attr">path</span>: playwright-report</div>
                        </code></pre>
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
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test <span className="hljs-attr">--retries</span>=</div>
                        </code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">playwright.config.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">default</span> <span className="hljs-title function_">defineConfig</span>(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">retries</span>: process.<span className="hljs-property">env</span>.<span className="hljs-property">CI</span> ? <span className="hljs-number">2</span> : <span className="hljs-number">0</span>,</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
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
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'サーバー状態に依存するテスト'</span>, <span className="hljs-keyword">async</span> (&#123; page &#125;, testInfo) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">if</span> (testInfo.<span className="hljs-property">retry</span>) &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> <span className="hljs-title function_">cleanUpServerSideCache</span>();</div>
                        <div className="code-line">  &#125;</div>
                        <div className="code-line">  <span className="hljs-comment">// ...</span></div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
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
                

                
        
<div className="divider"></div>

{/* ============ CATEGORY 3 ============ */}
<section className="doc-section" id="sec-12">
                    <h2 className="sec-title"><span className="idx">12</span>Trace Viewerによるデバッグ</h2>

                    <p>
                        <strong>Trace Viewer</strong
                        >は、記録されたテスト実行の軌跡(トレース)を探索できるGUIツールです。各アクションの
                        前後でページがどう変化したかを、タイムラインを操作しながら視覚的に確認できます。
                    </p>

                    <h3 className="sub-title">12.1 トレースの記録設定</h3>
                    <p>
                        デフォルトの設定テンプレートでは、CI環境で「最初のリトライ時にのみ」トレースを記録するようになっています
                        (常時記録は性能への影響が大きいため非推奨)。
                    </p>

                    <div className="code-block">
                        <div className="code-label">playwright.config.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">default</span> <span className="hljs-title function_">defineConfig</span>(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">retries</span>: process.<span className="hljs-property">env</span>.<span className="hljs-property">CI</span> ? <span className="hljs-number">2</span> : <span className="hljs-number">0</span>,</div>
                        <div className="code-line">  <span className="hljs-attr">use</span>: &#123;</div>
                        <div className="code-line">    <span className="hljs-attr">trace</span>: <span className="hljs-string">'on-first-retry'</span>, <span className="hljs-comment">// 失敗したテストの最初のリトライでのみ記録</span></div>
                        <div className="code-line">  &#125;,</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <p>ローカルで強制的に記録したい場合:</p>
                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test <span className="hljs-attr">--trace</span> on</div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">12.2 トレースの閲覧フロー</h3>
                    <div className="mermaid-container">
  <Mermaid chart={DIAGRAM_7} />
</div>
                    

                    <p>
                        Trace
                        Viewerでは、各アクション実行前後のDOMスナップショットを完全にインタラクティブな形で再現でき、
                        ブラウザのDevToolsをその場で開いてHTML/CSSを検証することも可能です。ネットワークリクエスト・コンソールログ・
                        実行時のログ(要素が可視になるまでの待機など)も同時に確認できます。
                    </p>

                    <h3 className="sub-title">12.3 UI Modeとの使い分け</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>ツール</th>
                                    <th>主な用途</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>UI Mode(<code>--ui</code>)</td>
                                    <td>
                                        ローカル開発中の<strong>リアルタイム</strong>デバッグ・ウォッチモード
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trace Viewer</td>
                                    <td>
                                        <strong>CI環境で失敗したテスト</strong
                                        >の事後解析(共有可能なPWAとして)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/trace-viewer-intro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/trace-viewer-intro</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/trace-viewer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/trace-viewer</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-ui-mode"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-ui-mode</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 13 ============ */}
                <section className="doc-section" id="sec-13">
                    <h2 className="sec-title">
                        <span className="idx">13</span>ネットワークインターセプションとAPIモック
                    </h2>

                    <p>
                        Playwrightは、ページが発行するHTTP(S)リクエスト(XHR・fetchを含む)をすべて追跡・変更・モックするAPIを
                        提供します。
                    </p>

                    <h3 className="sub-title">13.1 APIレスポンスの完全モック</h3>
                    <div className="code-block">
                        <div className="code-label">mock-api.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'APIをモックしフルーツ一覧を表示する'</span>, <span className="hljs-keyword">async</span> (&#123; page &#125;) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">route</span>(<span className="hljs-string">'*/**/api/v1/fruits'</span>, <span className="hljs-keyword">async</span> route =&gt; &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">const</span> json = [&#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'Strawberry'</span>, <span className="hljs-attr">id</span>: <span className="hljs-number">21</span> &#125;];</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> route.<span className="hljs-title function_">fulfill</span>(&#123; json &#125;);</div>
                        <div className="code-line">  &#125;);</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">goto</span>(<span className="hljs-string">'https://demo.playwright.dev/api-mocking'</span>);</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>(page.<span className="hljs-title function_">getByText</span>(<span className="hljs-string">'Strawberry'</span>)).<span className="hljs-title function_">toBeVisible</span>();</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <p>
                        このパターンでは実際のAPIには一切リクエストが送信されず、指定したモックデータでレスポンスが完結します。
                    </p>

                    <h3 className="sub-title">13.2 実際のレスポンスを部分的に改変</h3>
                    <p>
                        実サーバーへのリクエストは発生させつつ、レスポンスボディだけを差し替えることも可能です。
                    </p>
                    <div className="code-block">
                        <div className="code-label">mock-partial.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'実APIのレスポンスに要素を追加する'</span>, <span className="hljs-keyword">async</span> (&#123; page &#125;) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">route</span>(<span className="hljs-string">'*/**/api/v1/fruits'</span>, <span className="hljs-keyword">async</span> route =&gt; &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">const</span> response = <span className="hljs-keyword">await</span> route.<span className="hljs-title function_">fetch</span>();</div>
                        <div className="code-line">    <span className="hljs-keyword">const</span> json = <span className="hljs-keyword">await</span> response.<span className="hljs-title function_">json</span>();</div>
                        <div className="code-line">    json.<span className="hljs-title function_">push</span>(&#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'Loquat'</span>, <span className="hljs-attr">id</span>: <span className="hljs-number">100</span> &#125;);</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> route.<span className="hljs-title function_">fulfill</span>(&#123; response, json &#125;);</div>
                        <div className="code-line">  &#125;);</div>
                        <div className="code-line"></div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">goto</span>(<span className="hljs-string">'https://demo.playwright.dev/api-mocking'</span>);</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>(page.<span className="hljs-title function_">getByText</span>(<span className="hljs-string">'Loquat'</span>, &#123; <span className="hljs-attr">exact</span>: <span className="hljs-built_in">true</span> &#125;)).<span className="hljs-title function_">toBeVisible</span>();</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">13.3 HARファイルによる記録・再生</h3>
                    <p>
                        HAR(HTTP
                        Archive)ファイルはページロード時に発生した全通信の記録です。これをテストのモックデータとして
                        再利用できます。
                    </p>

                    <div className="mermaid-container">
  <Mermaid chart={DIAGRAM_8} />
</div>
                    

                    <div className="code-block">
                        <div className="code-label">har-replay.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">await</span> page.<span className="hljs-title function_">routeFromHAR</span>(<span className="hljs-string">'./hars/fruit.har'</span>, &#123;</div>
                        <div className="code-line">  <span className="hljs-attr">url</span>: <span className="hljs-string">'*/**/api/v1/fruits'</span>,</div>
                        <div className="code-line">  <span className="hljs-attr">update</span>: <span className="hljs-built_in">false</span>, <span className="hljs-comment">// true にすると実データでHARを更新する</span></div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <p>
                        HAR再生はURLとHTTPメソッドを厳密に照合し、POSTの場合はペイロードも厳密照合します。複数のエントリが
                        一致する場合はヘッダー一致数が最も多いものが選択されます。
                    </p>

                    <h3 className="sub-title">13.4 WebSocketのモック</h3>
                    <div className="code-block">
                        <div className="code-label">websocket-mock.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">await</span> page.<span className="hljs-title function_">routeWebSocket</span>(<span className="hljs-string">'wss://example.com/ws'</span>, ws =&gt; &#123;</div>
                        <div className="code-line">  ws.<span className="hljs-title function_">onMessage</span>(message =&gt; &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">if</span> (message === <span className="hljs-string">'request'</span>) ws.<span className="hljs-title function_">send</span>(<span className="hljs-string">'response'</span>);</div>
                        <div className="code-line">  &#125;);</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <p>
                        実サーバーに接続しつつ、メッセージの一部だけを書き換える「中間者」的な使い方も可能です。
                    </p>

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/mock"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/mock</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/network"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/network</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 14 ============ */}
                <section className="doc-section" id="sec-14">
                    <h2 className="sec-title"><span className="idx">14</span>認証状態の再利用戦略</h2>

                    <p>
                        Playwrightはテストごとに独立したBrowserContextで実行されるため、毎回ログインフローを繰り返すのは非効率です。
                        公式ドキュメントは認証状態(Cookie・LocalStorage・IndexedDB)をファイルに保存し、テスト開始時に再利用する複数の
                        戦略を提示しています。
                    </p>

                    <h3 className="sub-title">14.1 認証戦略の選択フロー</h3>
                    <div className="mermaid-container">
  <Mermaid chart={DIAGRAM_9} />
</div>
                    

                    <h3 className="sub-title">14.2 基本戦略: 共有アカウント</h3>
                    <div className="code-block">
                        <div className="code-label">tests/auth.setup.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">import</span> &#123; <span className="hljs-built_in">test</span> <span className="hljs-keyword">as</span> setup, <span className="hljs-built_in">expect</span> &#125; <span className="hljs-keyword">from</span> <span className="hljs-string">'@playwright/test'</span>;</div>
                        <div className="code-line"><span className="hljs-keyword">import</span> path <span className="hljs-keyword">from</span> <span className="hljs-string">'path'</span>;</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-keyword">const</span> authFile = path.<span className="hljs-title function_">join</span>(__dirname, <span className="hljs-string">'../playwright/.auth/user.json'</span>);</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-title function_">setup</span>(<span className="hljs-string">'authenticate'</span>, <span className="hljs-keyword">async</span> (&#123; page &#125;) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">goto</span>(<span className="hljs-string">'https://example.com/login'</span>);</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">getByLabel</span>(<span className="hljs-string">'Username'</span>).<span className="hljs-title function_">fill</span>(<span className="hljs-string">'username'</span>);</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">getByLabel</span>(<span className="hljs-string">'Password'</span>).<span className="hljs-title function_">fill</span>(<span className="hljs-string">'password'</span>);</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'button'</span>, &#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'Sign in'</span> &#125;).<span className="hljs-title function_">click</span>();</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">waitForURL</span>(<span className="hljs-string">'https://example.com/'</span>);</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">context</span>().<span className="hljs-title function_">storageState</span>(&#123; <span className="hljs-attr">path</span>: authFile &#125;);</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">playwright.config.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">default</span> <span className="hljs-title function_">defineConfig</span>(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">projects</span>: [</div>
                        <div className="code-line">    &#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'setup'</span>, <span className="hljs-attr">testMatch</span>: /.*\.<span className="hljs-property">setup</span>\.<span className="hljs-property">ts</span>/ &#125;,</div>
                        <div className="code-line">    &#123;</div>
                        <div className="code-line">      <span className="hljs-attr">name</span>: <span className="hljs-string">'chromium'</span>,</div>
                        <div className="code-line">      <span className="hljs-attr">use</span>: &#123; ...<span className="hljs-property">devices</span>[<span className="hljs-string">'Desktop Chrome'</span>], <span className="hljs-attr">storageState</span>: <span className="hljs-string">'playwright/.auth/user.json'</span> &#125;,</div>
                        <div className="code-line">      <span className="hljs-attr">dependencies</span>: [<span className="hljs-string">'setup'</span>],</div>
                        <div className="code-line">    &#125;,</div>
                        <div className="code-line">  ],</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <div className="callout warn">
                        <div className="icon">⚠</div>
                        <p>
                            <strong>重要</strong>:
                            <code>playwright/.auth</code
                            >ディレクトリは機密情報(Cookie・トークン)を含むため、
                            必ず<code>.gitignore</code>に追加してください。
                        </p>
                    </div>

                    <h3 className="sub-title">14.3 中級戦略: Workerごとに専用アカウント</h3>
                    <p>
                        サーバー側状態を変更するテスト(設定変更のテストなど)が並列実行される場合、共有アカウントでは競合が
                        起きます。この場合はWorkerごとに一意なアカウントを用意します。
                    </p>
                    <div className="code-block">
                        <div className="code-label">worker-auth.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">const</span> <span className="hljs-built_in">test</span> = baseTest.<span className="hljs-property">extend</span>&lt;&#123;&#125;, &#123; <span className="hljs-attr">workerStorageState</span>: <span className="hljs-built_in">string</span> &#125;&gt;(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">storageState</span>: (&#123; workerStorageState &#125;, use) =&gt; <span className="hljs-title function_">use</span>(workerStorageState),</div>
                        <div className="code-line">  <span className="hljs-attr">workerStorageState</span>: [<span className="hljs-keyword">async</span> (&#123; browser &#125;, use) =&gt; &#123;</div>
                        <div className="code-line">    <span className="hljs-keyword">const</span> id = <span className="hljs-built_in">test</span>.<span className="hljs-title function_">info</span>().<span className="hljs-property">parallelIndex</span>;</div>
                        <div className="code-line">    <span className="hljs-keyword">const</span> fileName = path.<span className="hljs-title function_">resolve</span>(<span className="hljs-built_in">test</span>.<span className="hljs-title function_">info</span>().<span className="hljs-property">project</span>.<span className="hljs-property">outputDir</span>, <span className="hljs-string">`.auth/$&#123;id&#125;.json`</span>);</div>
                        <div className="code-line">    <span className="hljs-keyword">if</span> (fs.<span className="hljs-title function_">existsSync</span>(fileName)) &#123;</div>
                        <div className="code-line">      <span className="hljs-keyword">await</span> <span className="hljs-title function_">use</span>(fileName);</div>
                        <div className="code-line">      <span className="hljs-keyword">return</span>;</div>
                        <div className="code-line">    &#125;</div>
                        <div className="code-line">    <span className="hljs-keyword">const</span> page = <span className="hljs-keyword">await</span> browser.<span className="hljs-title function_">newPage</span>(&#123; <span className="hljs-attr">storageState</span>: <span className="hljs-built_in">undefined</span> &#125;);</div>
                        <div className="code-line">    <span className="hljs-keyword">const</span> account = <span className="hljs-keyword">await</span> <span className="hljs-title function_">acquireAccount</span>(id);</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">goto</span>(<span className="hljs-string">'/login'</span>);</div>
                        <div className="code-line">    <span className="hljs-comment">// ... ログイン処理 ...</span></div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">context</span>().<span className="hljs-title function_">storageState</span>(&#123; <span className="hljs-attr">path</span>: fileName &#125;);</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">close</span>();</div>
                        <div className="code-line">    <span className="hljs-keyword">await</span> <span className="hljs-title function_">use</span>(fileName);</div>
                        <div className="code-line">  &#125;, &#123; <span className="hljs-attr">scope</span>: <span className="hljs-string">'worker'</span> &#125;],</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">14.4 APIリクエストによる認証(UIを経由しない高速化)</h3>
                    <div className="code-block">
                        <div className="code-label">api-auth.setup.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-title function_">setup</span>(<span className="hljs-string">'authenticate via API'</span>, <span className="hljs-keyword">async</span> (&#123; request &#125;) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> request.<span className="hljs-title function_">post</span>(<span className="hljs-string">'https://example.com/login'</span>, &#123;</div>
                        <div className="code-line">    <span className="hljs-attr">form</span>: &#123; <span className="hljs-attr">user</span>: <span className="hljs-string">'user'</span>, <span className="hljs-attr">password</span>: <span className="hljs-string">'password'</span> &#125;,</div>
                        <div className="code-line">  &#125;);</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> request.<span className="hljs-title function_">storageState</span>(&#123; <span className="hljs-attr">path</span>: <span className="hljs-string">'playwright/.auth/user.json'</span> &#125;);</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">14.5 複数ロールの同時操作</h3>
                    <div className="code-block">
                        <div className="code-label">multi-role.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'adminとuserが同時にやり取りする'</span>, <span className="hljs-keyword">async</span> (&#123; browser &#125;) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">const</span> adminContext = <span className="hljs-keyword">await</span> browser.<span className="hljs-title function_">newContext</span>(&#123; <span className="hljs-attr">storageState</span>: <span className="hljs-string">'playwright/.auth/admin.json'</span> &#125;);</div>
                        <div className="code-line">  <span className="hljs-keyword">const</span> userContext = <span className="hljs-keyword">await</span> browser.<span className="hljs-title function_">newContext</span>(&#123; <span className="hljs-attr">storageState</span>: <span className="hljs-string">'playwright/.auth/user.json'</span> &#125;);</div>
                        <div className="code-line">  <span className="hljs-keyword">const</span> adminPage = <span className="hljs-keyword">await</span> adminContext.<span className="hljs-title function_">newPage</span>();</div>
                        <div className="code-line">  <span className="hljs-keyword">const</span> userPage = <span className="hljs-keyword">await</span> userContext.<span className="hljs-title function_">newPage</span>();</div>
                        <div className="code-line">  <span className="hljs-comment">// ... 両方のページを操作 ...</span></div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> adminContext.<span className="hljs-title function_">close</span>();</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> userContext.<span className="hljs-title function_">close</span>();</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">14.6 Passkeys(WebAuthn)への対応</h3>
                    <p>
                        <code>browserContext.credentials</code
                        >は仮想WebAuthn認証器として機能し、パスキー認証にも対応します。
                        Cookie系と異なり<code>storageState</code>ではなく<code
                            >credentials.create()</code
                        >
                        /
                        <code>credentials.install()</code
                        >で<strong>命令的に</strong>シードする点が特徴です。
                    </p>

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/auth"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/auth</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/api-testing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/api-testing</a
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

                {/* ============ SECTION 15 ============ */}
                <section className="doc-section" id="sec-15">
                    <h2 className="sec-title">
                        <span className="idx">15</span>Visual Regression Testing(視覚的回帰テスト)
                    </h2>

                    <p>
                        Playwright
                        Testは<code>expect(page).toHaveScreenshot()</code>によって、スクリーンショットの生成と比較を
                        組み込みでサポートします。初回実行時に基準画像(ゴールデンファイル)が生成され、以降の実行はそれと比較されます。
                    </p>

                    <div className="code-block">
                        <div className="code-label">visual.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'トップページの見た目を検証'</span>, <span className="hljs-keyword">async</span> (&#123; page &#125;) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">goto</span>(<span className="hljs-string">'https://playwright.dev'</span>);</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>(page).<span className="hljs-title function_">toHaveScreenshot</span>();</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">15.1 注意点: 環境依存性</h3>
                    <p>
                        ブラウザのレンダリングはOS・バージョン・設定・ハードウェア・電源状態(バッテリー/電源接続)・headlessモード
                        などで変わり得ます。基準画像を生成した環境と同一環境で実行することが、視覚的テストの安定運用の前提条件です
                        (多くの場合、CI上のLinuxコンテナに統一します)。
                    </p>

                    <h3 className="sub-title">15.2 スナップショットの命名規則</h3>
                    <div className="code-block">
                        <div className="code-label">directory structure</div>
                        <pre><code className="language-text">
                        <div className="code-line">example.spec.ts-snapshots/</div>
                        <div className="code-line">  example-test-1-chromium-darwin.png</div>
                        </code></pre>
                    </div>
                    

                    <p>
                        <code>chromium-darwin</code
                        >の部分はブラウザ名とOSを表し、レンダリング差異のため環境ごとに個別の
                        スナップショットが必要になります。複数プロジェクト構成の場合は<code>chromium</code>の部分がプロジェクト名に
                        置き換わります。
                    </p>

                    <h3 className="sub-title">15.3 基準画像の更新</h3>
                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test <span className="hljs-attr">--update-snapshots</span></div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">15.4 差分許容度とノイズ除去</h3>
                    <div className="code-block">
                        <div className="code-label">threshold.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-comment">// 数ピクセルの差異は許容する</span></div>
                        <div className="code-line"><span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>(page).<span className="hljs-title function_">toHaveScreenshot</span>(&#123; <span className="hljs-attr">maxDiffPixels</span>: <span className="hljs-number">100</span> &#125;);</div>
                        </code></pre>
                    </div>
                    

                    <p>
                        動的要素(広告・iframe等)を除外したい場合は、カスタムCSSを適用してからスクリーンショットを撮ることで
                        決定論性を高められます。
                    </p>
                    <div className="code-block">
                        <div className="code-label">screenshot-style.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-comment">// screenshot.css</span></div>
                        <div className="code-line"><span className="hljs-comment">// iframe &#123; visibility: hidden; &#125;</span></div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>(page).<span className="hljs-title function_">toHaveScreenshot</span>(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">stylePath</span>: path.<span className="hljs-title function_">join</span>(__dirname, <span className="hljs-string">'screenshot.css'</span>),</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">15.5 非画像スナップショット</h3>
                    <div className="code-block">
                        <div className="code-label">text-snapshot.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-built_in">expect</span>(<span className="hljs-keyword">await</span> page.<span className="hljs-title function_">textContent</span>(<span className="hljs-string">'.hero__title'</span>)).<span className="hljs-title function_">toMatchSnapshot</span>(<span className="hljs-string">'hero.txt'</span>);</div>
                        </code></pre>
                    </div>
                    

                    <p>
                        テキストや任意のバイナリデータの比較にも対応しており、Playwrightがコンテンツタイプを自動判定して
                        適切な比較アルゴリズムを選びます。
                    </p>

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-snapshots"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-snapshots</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 16 ============ */}
                <section className="doc-section" id="sec-16">
                    <h2 className="sec-title">
                        <span className="idx">16</span>API Testing(バックエンドAPIテスト)
                    </h2>

                    <p>
                        Playwrightはブラウザ操作だけでなく、Node.jsから直接HTTPリクエストを送信する<code>APIRequestContext</code>も
                        提供します。ブラウザを起動せずにサーバーAPIそのものを検証したい場合や、UIテストの前提条件(サーバー側状態)を
                        準備する場合に有用です。
                    </p>

                    <h3 className="sub-title">16.1 設定とベーステスト</h3>
                    <div className="code-block">
                        <div className="code-label">playwright.config.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">default</span> <span className="hljs-title function_">defineConfig</span>(&#123;</div>
                        <div className="code-line">  <span className="hljs-attr">use</span>: &#123;</div>
                        <div className="code-line">    <span className="hljs-attr">baseURL</span>: <span className="hljs-string">'https://api.example.com'</span>,</div>
                        <div className="code-line">    <span className="hljs-attr">extraHTTPHeaders</span>: &#123;</div>
                        <div className="code-line">      <span className="hljs-string">'Accept'</span>: <span className="hljs-string">'application/vnd.example.v1+json'</span>,</div>
                        <div className="code-line">      <span className="hljs-string">'Authorization'</span>: <span className="hljs-string">`token $&#123;process.env.API_TOKEN&#125;`</span>,</div>
                        <div className="code-line">    &#125;,</div>
                        <div className="code-line">  &#125;,</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">api.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'Issueを作成できる'</span>, <span className="hljs-keyword">async</span> (&#123; request &#125;) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">const</span> newIssue = <span className="hljs-keyword">await</span> request.<span className="hljs-title function_">post</span>(<span className="hljs-string">'/repos/org/repo/issues'</span>, &#123;</div>
                        <div className="code-line">    <span className="hljs-attr">data</span>: &#123; <span className="hljs-attr">title</span>: <span className="hljs-string">'[Bug] report'</span>, <span className="hljs-attr">body</span>: <span className="hljs-string">'説明文'</span> &#125;,</div>
                        <div className="code-line">  &#125;);</div>
                        <div className="code-line">  <span className="hljs-built_in">expect</span>(newIssue.<span className="hljs-title function_">ok</span>()).<span className="hljs-title function_">toBeTruthy</span>();</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <p>
                        <code>request</code
                        >フィクスチャは組み込みであり、<code>baseURL</code>や<code>extraHTTPHeaders</code>などの
                        設定を自動的に引き継ぎます。
                    </p>

                    <h3 className="sub-title">16.2 UIテストとAPIテストの併用パターン</h3>
                    <div className="mermaid-container">
  <Mermaid chart={DIAGRAM_10} />
</div>
                    

                    <ul>
                        <li>
                            <strong>事前条件の準備</strong>:
                            UIを経由せずAPIでデータを作成し、UIテストの実行時間を短縮する
                        </li>
                        <li>
                            <strong>事後条件の検証</strong>:
                            UI上の操作結果が実際にサーバーへ反映されたかをAPI経由で確認する
                        </li>
                    </ul>

                    <div className="code-block">
                        <div className="code-label">combined.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-built_in">test</span>.<span className="hljs-title function_">beforeAll</span>(<span className="hljs-keyword">async</span> (&#123; playwright &#125;) =&gt; &#123;</div>
                        <div className="code-line">  apiContext = <span className="hljs-keyword">await</span> playwright.<span className="hljs-property">request</span>.<span className="hljs-title function_">newContext</span>(&#123; <span className="hljs-attr">baseURL</span>: <span className="hljs-string">'https://api.example.com'</span> &#125;);</div>
                        <div className="code-line">&#125;);</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-built_in">test</span>.<span className="hljs-title function_">afterAll</span>(<span className="hljs-keyword">async</span> () =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> apiContext.<span className="hljs-title function_">dispose</span>();</div>
                        <div className="code-line">&#125;);</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-built_in">test</span>(<span className="hljs-string">'最後に作成したIssueが一覧の先頭に表示される'</span>, <span className="hljs-keyword">async</span> (&#123; page &#125;) =&gt; &#123;</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> apiContext.<span className="hljs-title function_">post</span>(<span className="hljs-string">'/repos/org/repo/issues'</span>, &#123; <span className="hljs-attr">data</span>: &#123; <span className="hljs-attr">title</span>: <span className="hljs-string">'Feature request'</span> &#125; &#125;);</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> page.<span className="hljs-title function_">goto</span>(<span className="hljs-string">'https://example.com/org/repo/issues'</span>);</div>
                        <div className="code-line">  <span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>(page.<span className="hljs-title function_">locator</span>(<span className="hljs-string">&quot;[data-hovercard-type='issue']&quot;</span>).<span className="hljs-title function_">first</span>()).<span className="hljs-title function_">toHaveText</span>(<span className="hljs-string">'Feature request'</span>);</div>
                        <div className="code-line">&#125;);</div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">16.3 認証状態の相互運用性</h3>
                    <p>
                        <code>storageState</code
                        >は<code>BrowserContext</code>と<code>APIRequestContext</code>の間で相互運用可能です。
                        APIでログインしてCookieを取得し、それをブラウザコンテキストの初期状態として使うことで、UIログインを完全に
                        省略できます。
                    </p>
                    <div className="code-block">
                        <div className="code-label">interop.spec.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-keyword">const</span> requestContext = <span className="hljs-keyword">await</span> request.<span className="hljs-title function_">newContext</span>();</div>
                        <div className="code-line"><span className="hljs-keyword">await</span> requestContext.<span className="hljs-keyword">get</span>(<span className="hljs-string">'https://api.example.com/login'</span>);</div>
                        <div className="code-line"><span className="hljs-keyword">await</span> requestContext.<span className="hljs-title function_">storageState</span>(&#123; <span className="hljs-attr">path</span>: <span className="hljs-string">'state.json'</span> &#125;);</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-keyword">const</span> context = <span className="hljs-keyword">await</span> browser.<span className="hljs-title function_">newContext</span>(&#123; <span className="hljs-attr">storageState</span>: <span className="hljs-string">'state.json'</span> &#125;);</div>
                        </code></pre>
                    </div>
                    

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/api-testing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/api-testing</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/auth"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/auth</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 17 ============ */}
                <section className="doc-section" id="sec-17">
                    <h2 className="sec-title"><span className="idx">17</span>UI ModeとVS Code拡張機能</h2>

                    <h3 className="sub-title">17.1 UI Mode</h3>
                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test <span className="hljs-attr">--ui</span></div>
                        </code></pre>
                    </div>
                    

                    <p>
                        UI
                        Modeは「タイムトラベル」型のデバッグ体験を提供する統合ビューです。主な機能は以下の通りです。
                    </p>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>機能</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>テストサイドバー</td>
                                    <td>
                                        全テストファイルを表示し、個別・グループ単位で実行/監視/デバッグ可能
                                    </td>
                                </tr>
                                <tr>
                                    <td>フィルタリング</td>
                                    <td>
                                        テスト名・プロジェクト・@tag・実行結果(合格/失敗/スキップ)で絞り込み
                                    </td>
                                </tr>
                                <tr>
                                    <td>タイムラインビュー</td>
                                    <td>
                                        ナビゲーションとアクションを色分けして表示し、アクション単位でスナップショットを確認
                                    </td>
                                </tr>
                                <tr>
                                    <td>DOMスナップショットのポップアウト</td>
                                    <td>
                                        別ウィンドウで開き、DevTools(HTML/CSS/Console)を直接使って調査可能
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pick Locator</td>
                                    <td>
                                        DOMスナップショット上でホバーするとLocatorをリアルタイム表示、クリックでプレイグラウンドに追加
                                    </td>
                                </tr>
                                <tr>
                                    <td>Watch Mode</td>
                                    <td>
                                        監視アイコンをクリックすると、コード変更時にテストを自動再実行
                                    </td>
                                </tr>
                                <tr>
                                    <td>Network / Console タブ</td>
                                    <td>
                                        各アクション実行時のネットワークリクエストやコンソールログを確認
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        Docker・GitHub
                        Codespaces環境では、<code>--ui-host=0.0.0.0</code>でブラウザ経由のUI
                        Mode利用も可能です
                        (ネットワーク越しにトレース・パスワード等が閲覧可能になる点に注意)。
                    </p>

                    <h3 className="sub-title">17.2 VS Code拡張機能</h3>
                    <p>VS Code拡張は次の機能を提供します。</p>
                    <ul>
                        <li>ブレークポイントを使ったライブデバッグ</li>
                        <li>
                            Locatorをクリックするとブラウザ上で対応要素がハイライトされる「Show
                            Browsers」機能
                        </li>
                        <li>
                            テスト失敗時に詳細なエラーメッセージ(期待値 vs
                            実際の値、コールログ)をエディタ上に表示
                        </li>
                        <li>Copilotによる「Fix with AI」提案(失敗の原因分析とコード修正案)</li>
                        <li>Trace Viewerの自動起動によるステップバイステップ解析</li>
                    </ul>

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-ui-mode"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-ui-mode</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/getting-started-vscode"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/getting-started-vscode</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 18 ============ */}
                

<div className="divider"></div>

{/* ============ CATEGORY 4 ============ */}
<section className="doc-section" id="sec-18">
                    <h2 className="sec-title"><span className="idx">18</span>CI/CD統合(GitHub Actions)</h2>

                    <h3 className="sub-title">18.1 基本ワークフロー</h3>
                    <p>
                        <code>bun create playwright</code>実行時にGitHub
                        Actionsワークフローの追加を選択すると、以下の
                        <code>.github/workflows/playwright.yml</code>が自動生成されます。
                    </p>

                    <div className="code-block">
                        <div className="code-label">.github/workflows/playwright.yml</div>
                        <pre><code className="language-yaml">
                        <div className="code-line"><span className="hljs-attr">name</span>: Playwright Tests</div>
                        <div className="code-line"><span className="hljs-attr">on</span>:</div>
                        <div className="code-line">  <span className="hljs-attr">push</span>:</div>
                        <div className="code-line">    <span className="hljs-attr">branches</span>: [ main, master ]</div>
                        <div className="code-line">  <span className="hljs-attr">pull_request</span>:</div>
                        <div className="code-line">    <span className="hljs-attr">branches</span>: [ main, master ]</div>
                        <div className="code-line"><span className="hljs-attr">jobs</span>:</div>
                        <div className="code-line">  <span className="hljs-attr">test</span>:</div>
                        <div className="code-line">    <span className="hljs-attr">timeout-minutes</span>: <span className="hljs-number">60</span></div>
                        <div className="code-line">    <span className="hljs-attr">runs-on</span>: ubuntu-latest</div>
                        <div className="code-line">    <span className="hljs-attr">steps</span>:</div>
                        <div className="code-line">    - uses: actions/checkout@v5</div>
                        <div className="code-line">    - uses: oven-sh/setup-bun@v2</div>
                        <div className="code-line">      <span className="hljs-attr">with</span>:</div>
                        <div className="code-line">        <span className="hljs-attr">bun-version</span>: latest</div>
                        <div className="code-line">    - name: Install dependencies</div>
                        <div className="code-line">      <span className="hljs-attr">run</span>: bun install --frozen-lockfile</div>
                        <div className="code-line">    - name: Install Playwright Browsers</div>
                        <div className="code-line">      <span className="hljs-attr">run</span>: bunx playwright install --with-deps</div>
                        <div className="code-line">    - name: Run Playwright tests</div>
                        <div className="code-line">      <span className="hljs-attr">run</span>: bunx playwright test</div>
                        <div className="code-line">    - uses: actions/upload-artifact@v4</div>
                        <div className="code-line">      <span className="hljs-attr">if</span>: $&#123;&#123; !cancelled() &#125;&#125;</div>
                        <div className="code-line">      <span className="hljs-attr">with</span>:</div>
                        <div className="code-line">        <span className="hljs-attr">name</span>: playwright-report</div>
                        <div className="code-line">        <span className="hljs-attr">path</span>: playwright-report/</div>
                        <div className="code-line">        <span className="hljs-attr">retention-days</span>: <span className="hljs-number">30</span></div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">18.2 CI/CDパイプライン全体像</h3>
                    <div className="mermaid-container">
  <Mermaid chart={DIAGRAM_11} />
</div>
                    

                    <h3 className="sub-title">18.3 レポートの閲覧</h3>
                    <p>
                        Artifactとしてダウンロードした<code>playwright-report</code>はローカルでの直接表示(ファイルを開くだけ)では
                        正しく動作しないため、Webサーバー越しに閲覧する必要があります。
                    </p>
                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> show-report name-of-extracted-report-folder</div>
                        </code></pre>
                    </div>
                    

                    <h3 className="sub-title">18.4 CI最適化のポイント</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>施策</th>
                                    <th>効果</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Linux(Ubuntu)ランナーを使用</td>
                                    <td>クラウドCIのコストが最も低い</td>
                                </tr>
                                <tr>
                                    <td>必要なブラウザのみインストール</td>
                                    <td>
                                        <code>bunx playwright install chromium --with-deps</code
                                        >のように絞り込みダウンロード時間を短縮
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sharding併用</td>
                                    <td>複数ジョブに分散し実行時間を短縮(第10章参照)</td>
                                </tr>
                                <tr>
                                    <td><code>retries</code>をCIのみ有効化</td>
                                    <td>ローカルでは0、CIでは2程度に設定するのが定石</td>
                                </tr>
                                <tr>
                                    <td>Secretsの取り扱い</td>
                                    <td>
                                        トレース・レポート・コンソールログには機密情報が含まれ得るため、信頼できるArtifactストアにのみアップロードするか暗号化する
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="sub-title">18.5 レポートのWeb公開(Azure Storageの例)</h3>
                    <p>
                        Artifactのzipダウンロードは不便なため、Azure
                        Storageの静的Webサイトホスティングを使い、CIのジョブ内で
                        HTMLレポートを直接公開URLとしてアップロードする方法も紹介されています。Service
                        Principalの発行・Storage Blob Data Contributorロールの付与・GitHub Actions
                        Secretsへの認証情報登録が前提条件です。
                    </p>

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/ci-intro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/ci-intro</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/ci"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/ci</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-sharding"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-sharding</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 19 ============ */}
                <section className="doc-section" id="sec-19">
                    <h2 className="sec-title"><span className="idx">19</span>Docker活用</h2>

                    <p>
                        公式は<code>mcr.microsoft.com/playwright</code>イメージを提供しており、ブラウザ本体とOS依存ライブラリを
                        含みますが、Playwrightパッケージ自体は含まれないため別途インストールが必要です。
                    </p>

                    <h3 className="sub-title">19.1 基本的な使い方</h3>
                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-keyword">docker</span> pull mcr.microsoft.com/<span className="hljs-keyword">playwright</span>:v1..<span className="hljs-attr">-noble</span></div>
                        <div className="code-line"><span className="hljs-keyword">docker</span> run <span className="hljs-attr">-it</span> <span className="hljs-attr">--rm</span> <span className="hljs-attr">--ipc</span>=host mcr.microsoft.com/<span className="hljs-keyword">playwright</span>:v1..<span className="hljs-attr">-noble</span> /bin/bash</div>
                        </code></pre>
                    </div>
                    

                    <p>
                        信頼できるコード(自社のE2Eテストなど)を実行する場合はrootユーザーで問題ありませんが、Chromiumの
                        サンドボックスがrootでは無効化される点に留意してください。信頼できないWebサイトをクロールする用途では、
                        専用ユーザー+seccompプロファイルの利用が推奨されます。
                    </p>

                    <h3 className="sub-title">19.2 推奨Docker設定</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>設定</th>
                                    <th>理由</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>--init</code>フラグ</td>
                                    <td>PID=1プロセスのゾンビプロセス化を防止</td>
                                </tr>
                                <tr>
                                    <td><code>--ipc=host</code></td>
                                    <td>
                                        Chromium利用時、これがないとメモリ不足でクラッシュしやすい
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>--cap-add=SYS_ADMIN</code>(開発時のみ)</td>
                                    <td>Chromium起動時の謎のエラーを回避</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="sub-title">19.3 リモートPlaywrightサーバー</h3>
                    <p>
                        Dockerコンテナ内でPlaywright
                        Serverを起動し、ホスト側やCIの別マシンからテストを実行することも可能です。
                        サポート外のLinuxディストリビューションでの実行や、リモート実行シナリオに有用です。
                    </p>

                    <div className="mermaid-container">
  <Mermaid chart={DIAGRAM_12} />
</div>
                    

                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">
                        <div className="code-line"><span className="hljs-keyword">docker</span> run <span className="hljs-attr">-p</span> : <span className="hljs-attr">--rm</span> <span className="hljs-attr">--init</span> <span className="hljs-attr">-it</span> <span className="hljs-attr">--workdir</span> {'/ho' + 'me/pwuser'} <span className="hljs-attr">--user</span> pwuser \</div>
                        <div className="code-line">  mcr.microsoft.com/<span className="hljs-keyword">playwright</span>:v1..<span className="hljs-attr">-noble</span> \</div>
                        <div className="code-line">  /bin/<span className="hljs-keyword">sh</span> <span className="hljs-attr">-c</span> <span className="hljs-string">&quot;npx -y playwright@1.61.0 run-server --port 3000 --host 0.0.0.0&quot;</span></div>
                        </code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">bash</div>
                        <pre><code className="language-bash">
                        <div className="code-line">PW_TEST_CONNECT_WS_ENDPOINT=ws://...:/ <span className="hljs-keyword">bunx</span> <span className="hljs-keyword">playwright</span> test</div>
                        </code></pre>
                    </div>
                    

                    <div className="callout warn">
                        <div className="icon">⚠</div>
                        <p>
                            <strong>重要</strong>:
                            リモート実行時は、テスト側とサーバー側のPlaywrightバージョンを完全に一致させる
                            必要があります。
                        </p>
                    </div>

                    <h3 className="sub-title">19.4 自前イメージのビルド</h3>
                    <div className="code-block">
                        <div className="code-label">Dockerfile</div>
                        <pre><code className="language-dockerfile">
                        <div className="code-line"><span className="hljs-keyword">FROM</span> node:20-bookworm</div>
                        <div className="code-line"><span className="hljs-keyword">RUN</span> bunx playwright@1.61.0 install --with-deps</div>
                        </code></pre>
                    </div>
                    

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/docker"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/docker</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/ci"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/ci</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 20 ============ */}
                <section className="doc-section" id="sec-20">
                    <h2 className="sec-title"><span className="idx">20</span>ベストプラクティス総まとめ</h2>

                    <p>
                        公式ドキュメントの「Best
                        Practices」ガイドが提示する原則を、実務での適用ポイントとともに整理します。
                    </p>

                    <h3 className="sub-title">20.1 テスト哲学</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>原則</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ユーザーに見える振る舞いを検証する</td>
                                    <td>
                                        関数名や内部実装(配列かどうか、CSSクラス名)ではなく、エンドユーザーが見て操作できるものだけをテスト対象にする
                                    </td>
                                </tr>
                                <tr>
                                    <td>テストを可能な限り独立させる</td>
                                    <td>
                                        各テストは自分専用のlocalStorage・sessionStorage・Cookie・データで動くべき。beforeEachで共通処理を括り出しつつ、シンプルなテストでは多少の重複を許容する方が読みやすい場合もある
                                    </td>
                                </tr>
                                <tr>
                                    <td>サードパーティ依存をテストしない</td>
                                    <td>
                                        外部リンク・外部サーバーはネットワークAPIでモックし、自分が制御できる範囲だけを検証する
                                    </td>
                                </tr>
                                <tr>
                                    <td>DBを使う場合は状態を制御する</td>
                                    <td>
                                        ステージング環境を固定化し、視覚的回帰テストではOS・ブラウザバージョンを揃える
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="sub-title">20.2 実装レベルのベストプラクティス</h3>
                    <div className="code-block">
                        <div className="code-label">good-vs-bad-locators.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-comment">// 👍 推奨: ユーザー視点のLocator</span></div>
                        <div className="code-line">page.<span className="hljs-title function_">getByRole</span>(<span className="hljs-string">'button'</span>, &#123; <span className="hljs-attr">name</span>: <span className="hljs-string">'submit'</span> &#125;);</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-comment">// 👎 非推奨: DOM構造に依存した壊れやすいセレクタ</span></div>
                        <div className="code-line">page.<span className="hljs-title function_">locator</span>(<span className="hljs-string">'button.buttonIcon.episode-actions-later'</span>);</div>
                        </code></pre>
                    </div>
                    

                    <div className="code-block">
                        <div className="code-label">good-vs-bad-assertions.ts</div>
                        <pre><code className="language-typescript">
                        <div className="code-line"><span className="hljs-comment">// 👍 推奨: Web-Firstアサーション(自動リトライ)</span></div>
                        <div className="code-line"><span className="hljs-keyword">await</span> <span className="hljs-built_in">expect</span>(page.<span className="hljs-title function_">getByText</span>(<span className="hljs-string">'welcome'</span>)).<span className="hljs-title function_">toBeVisible</span>();</div>
                        <div className="code-line"></div>
                        <div className="code-line"><span className="hljs-comment">// 👎 非推奨: 即時判定(リトライなし)</span></div>
                        <div className="code-line"><span className="hljs-built_in">expect</span>(<span className="hljs-keyword">await</span> page.<span className="hljs-title function_">getByText</span>(<span className="hljs-string">'welcome'</span>).<span className="hljs-title function_">isVisible</span>()).<span className="hljs-title function_">toBe</span>(<span className="hljs-built_in">true</span>);</div>
                        </code></pre>
                    </div>
                    

                    <ul>
                        <li>
                            <strong>Locatorを使う</strong>:
                            自動待機とリトライ可能性の恩恵を最大限活用する
                        </li>
                        <li>
                            <strong>チェーンとフィルタを活用する</strong>:
                            特定範囲に検索スコープを絞ることで壊れにくいLocatorを構築する
                        </li>
                        <li>
                            <strong>codegenで生成する</strong>:
                            <code>bunx playwright codegen &lt;URL&gt;</code
                            >はロール・テキスト・test-idを優先した堅牢なLocatorを自動生成する
                        </li>
                        <li>
                            <strong>デバッグ環境を整備する</strong>: ローカルはVS
                            Code拡張機能でのライブデバッグ、CIはTrace Viewerを使い分ける
                        </li>
                        <li>
                            <strong>全ブラウザでテストする</strong>:
                            <code>projects</code
                            >設定でChromium/Firefox/WebKitを横断し、対象ユーザー全体をカバーする
                        </li>
                        <li>
                            <strong>依存を最新に保つ</strong>:
                            <code>bun add -d @playwright/test@latest</code
                            >で最新ブラウザに追従し、リリース前に不具合を検知する
                        </li>
                        <li>
                            <strong>CIで頻繁に実行する</strong>:
                            可能であれば全コミット・全PRで実行し、Linux + Shardingで高速化する
                        </li>
                        <li>
                            <strong>リンティングを導入する</strong>:
                            <code>@typescript-eslint/no-floating-promises</code
                            >で<code>await</code>忘れを機械的に検出する
                        </li>
                        <li>
                            <strong>並列化とシャーディングを併用する</strong>:
                            単一ファイル内の独立したテストは<code>fullyParallel</code>で、マシン単位のスケールは<code>--shard</code>で対応する
                        </li>
                    </ul>

                    <h3 className="sub-title">20.3 生産性を高めるテクニック</h3>
                    <ul>
                        <li>
                            <strong>Soft Assertions</strong>:
                            1テスト内の複数の検証観点を独立してレポートし、1つ目の失敗で処理を止めない
                        </li>
                        <li>
                            <strong>UI Modeでのウォッチモード</strong>:
                            コード変更のたびに自動でテストを再実行し、開発ループを短縮する
                        </li>
                        <li>
                            <strong>codegenで迷わずLocatorを取得する</strong>:
                            手動でセレクタを推測せず、生成→調整のフローに乗る
                        </li>
                    </ul>

                    <h3 className="sub-title">20.4 章横断チェックリスト</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>チェック項目</th>
                                    <th>対応章</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Locatorの優先順位(role &gt; label &gt; text &gt; testid &gt;
                                        CSS/XPath)を守っているか
                                    </td>
                                    <td>第4章</td>
                                </tr>
                                <tr>
                                    <td>
                                        手動isVisible()ではなくWeb-Firstアサーションを使っているか
                                    </td>
                                    <td>第6章</td>
                                </tr>
                                <tr>
                                    <td>セットアップ/ティアダウンをFixtureに集約できているか</td>
                                    <td>第7章</td>
                                </tr>
                                <tr>
                                    <td>Locatorの集約先としてPOMを活用しているか</td>
                                    <td>第8章</td>
                                </tr>
                                <tr>
                                    <td>CIでのみretriesを有効化しているか</td>
                                    <td>第11章</td>
                                </tr>
                                <tr>
                                    <td><code>trace: 'on-first-retry'</code>を設定しているか</td>
                                    <td>第12章</td>
                                </tr>
                                <tr>
                                    <td>外部依存はネットワークモックで切り離しているか</td>
                                    <td>第13章</td>
                                </tr>
                                <tr>
                                    <td>
                                        認証はUIログインを毎回繰り返さずstorageStateで再利用しているか
                                    </td>
                                    <td>第14章</td>
                                </tr>
                                <tr>
                                    <td>
                                        大規模スイートはSharding+blobレポートのマージで運用しているか
                                    </td>
                                    <td>第10章・第18章</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="refs">
                        <div className="refs-label">参照URL</div>
                        <ul>
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
                                    href="https://playwright.dev/docs/locators"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/locators</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://playwright.dev/docs/test-assertions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >https://playwright.dev/docs/test-assertions</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="divider"></div>

                {/* ============ SECTION 21 ============ */}
                <section className="doc-section" id="sec-21">
                    <h2 className="sec-title"><span className="idx">21</span>参考文献一覧</h2>

                    <p>本ガイド作成にあたり参照した情報源の一覧です(2026年7月時点)。</p>

                    <h3 className="sub-title">Playwright公式ドキュメント</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>ページ</th>
                                    <th>URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Installation(Getting Started)</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/intro"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/intro</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Locators</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/locators"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/locators</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Other locators</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/other-locators"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/other-locators</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Auto-waiting</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/actionability"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/actionability</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Assertions</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/test-assertions"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/test-assertions</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fixtures</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/test-fixtures"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/test-fixtures</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Page object models</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/pom"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/pom</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Parallelism</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/test-parallel"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/test-parallel</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sharding</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/test-sharding"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/test-sharding</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Retries</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/test-retries"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/test-retries</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trace viewer(イントロ)</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/trace-viewer-intro"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/trace-viewer-intro</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trace viewer(詳細)</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/trace-viewer"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/trace-viewer</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mock APIs</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/mock"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/mock</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Network</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/network"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/network</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Authentication</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/auth"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/auth</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Visual comparisons</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/test-snapshots"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/test-snapshots</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>API testing</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/api-testing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/api-testing</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>UI Mode</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/test-ui-mode"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/test-ui-mode</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Getting started (VS Code)</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/getting-started-vscode"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/getting-started-vscode</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Setting up CI</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/ci-intro"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/ci-intro</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Continuous Integration</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/ci"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/ci</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Docker</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/docker"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/docker</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Best Practices</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/best-practices"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/best-practices</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Isolation(Browser contexts)</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/browser-contexts"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/browser-contexts</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Test configuration</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/test-configuration"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/test-configuration</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Reporters</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/test-reporters"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/test-reporters</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pages</td>
                                    <td>
                                        <a
                                            href="https://playwright.dev/docs/pages"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >playwright.dev/docs/pages</a
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="sub-title">その他の信頼できる情報源</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>ページ</th>
                                    <th>URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Microsoft Learn: Introduction to Playwright for end-to-end
                                        testing
                                    </td>
                                    <td>
                                        <a
                                            href="https://learn.microsoft.com/en-us/shows/getting-started-with-end-to-end-testing-with-playwright/introduction-to-playwright-for-end-to-end-testing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >learn.microsoft.com</a
                                        >
                                    </td>
                                </tr>
                                <tr>
                                    <td>Playwright公式GitHubリポジトリ</td>
                                    <td>
                                        <a
                                            href="https://github.com/microsoft/playwright"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >github.com/microsoft/playwright</a
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <footer className="doc-footer">
                    本ガイドはPlaywright公式ドキュメント(2026年7月時点の内容)を基に、中級〜上級者向けに再構成・要約したものです。
                    実装の詳細な最新仕様は必ず公式ドキュメントを一次情報として参照してください。
                </footer>
            
</main>
      </div>
    </div>
  );
}
