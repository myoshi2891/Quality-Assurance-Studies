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
                
        </main>
      </div>
    </div>
  );
}
