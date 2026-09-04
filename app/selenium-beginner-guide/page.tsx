import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './selenium-beginner-guide.css';

export const metadata: Metadata = {
  title: 'Selenium 完全ガイド：初心者のためのステップバイステップ解説 | QA Studies',
  description:
    'Seleniumの基本概念、アーキテクチャ、環境構築、ロケーター戦略、待機戦略、Actions API、Selenium Manager、Page Object Model、Selenium Grid、Selenium IDEまでを網羅した初学者向け完全学習ガイド。',
};

const DIAGRAM_1 = `graph TD
    A["Selenium プロジェクト"] --> B["WebDriver"]
    A --> C["Selenium Grid"]
    A --> D["Selenium IDE"]
    A --> E["Selenium Manager"]
    B --> F["ブラウザドライバー"]
    F --> G["Chrome / Firefox / Edge / Safari"]`;

const DIAGRAM_2 = `graph LR
    A["テストコード"] --> B["WebDriver API"]
    B --> C["ブラウザドライバー"]
    C --> D["ブラウザ"]`;

const DIAGRAM_3 = `graph LR
    A["テストコード"] --> B["RemoteWebDriver"]
    B --> C["Selenium Grid / Server"]
    C --> D["ブラウザドライバー"]
    D --> E["ブラウザ"]`;

const DIAGRAM_4 = `flowchart TD
    S1["1. セッション開始"] --> S2["2. ブラウザで操作する"]
    S2 --> S3["3. ブラウザの情報を取得する"]
    S3 --> S4["4. 待機戦略を設定する"]
    S4 --> S5["5. 要素を検索する"]
    S5 --> S6["6. 要素を操作する"]
    S6 --> S7["7. 要素の情報を取得する"]
    S7 --> S8["8. セッションを終了する"]`;

const DIAGRAM_5 = `flowchart TD
    A["要素の準備を待つ必要がある"] --> B{"待機の種類は？"}
    B -->|"セッション全体に一律適用したい"| C["Implicit Wait 暗黙的待機"]
    B -->|"特定の条件をピンポイントで待ちたい"| D["Explicit Wait 明示的待機"]
    C --> E["driver.implicitly_wait 秒数"]
    D --> F["WebDriverWait と until条件"]`;

const DIAGRAM_6 = `flowchart TD
    A["driver = webdriver.Chrome を実行"] --> B{"ドライバーはPATH上にある？"}
    B -->|"ない"| C["Selenium Managerが起動"]
    C --> D["インストール済みブラウザのバージョンを検出"]
    D --> E["対応するドライバーのバージョンを解決"]
    E --> F["ドライバーをダウンロードしローカルキャッシュに保存"]
    F --> G["ブラウザセッションを開始"]
    B -->|"ある"| G`;

const DIAGRAM_7 = `graph TD
    A["テストコード"] --> B["LoginPage Page Object"]
    B --> C["HomePage Page Object"]
    C --> D["ProductComponent Page Component Object"]`;

const DIAGRAM_8 = `graph TD
    A["テストコード RemoteWebDriver"] --> B["Router"]
    B --> C["New Session Queue"]
    B --> D["Distributor"]
    D --> E["Session Map"]
    D --> F["Node 1"]
    D --> G["Node 2"]
    D --> H["Node N"]
    F --> I["ブラウザ"]
    G --> J["ブラウザ"]
    H --> K["ブラウザ"]`;

export default function SeleniumBeginnerGuidePage() {
  return (
    <div className="selenium-guide-page">
      <NavBar />

      <main className="content">
        <div className="content-inner">
          <header className="page-header">
            <div className="badges">
              <span className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 9l-3 3l3 3" />
                  <path d="M14 9l3 3l-3 3" />
                </svg>
                <span>Selenium 4.46.0（2026年7月時点）</span>
              </span>
              <span className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
                <span>日本語 / コード例: Python</span>
              </span>
              <span className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                  <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                  <path d="M6 9l12 0" />
                  <path d="M6 12l3 0" />
                  <path d="M6 15l2 0" />
                </svg>
                <span>初心者〜中級者向け</span>
              </span>
            </div>
            <h1 className="page-title">
              Selenium 完全ガイド：初心者のためのステップバイステップ解説
            </h1>
            <p className="page-subtitle">
              <a
                href="https://www.selenium.dev/documentation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Selenium 公式ドキュメント
              </a>
              を主な情報源とし、
              アーキテクチャの理解から実際のコードの書き方、保守性の高いテスト設計までを段階的に解説します。
              各セクションの末尾に参照元URLを明記しています。
            </p>
          </header>

          {/* ============ 1. Seleniumとは何か ============ */}
          <section className="doc-section" id="sec-1">
            <h2>
              <span className="num">1</span>Seleniumとは何か
            </h2>
            <p>
              Selenium
              は、Webブラウザの操作を自動化するためのオープンソースプロジェクトの総称です。単一のツールではなく、
              複数のツール・ライブラリの集合体（アンブレラプロジェクト）であり、主に4つのコンポーネントから構成されています。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>コンポーネント</th>
                    <th>役割</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Selenium WebDriver</strong>
                    </td>
                    <td>
                      ブラウザをネイティブに直接操作するためのAPI。Seleniumの中核
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Selenium Grid</strong>
                    </td>
                    <td>
                      複数のマシン・ブラウザにテストを分散させ、並列実行を可能にする基盤
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Selenium IDE</strong>
                    </td>
                    <td>
                      ブラウザの操作を記録・再生できるブラウザ拡張機能（ノーコード）
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Selenium Manager</strong>
                    </td>
                    <td>
                      ブラウザドライバーとブラウザ本体を自動的に検出・ダウンロード・管理するCLIツール
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Seleniumは
              <a
                href="https://www.w3.org/TR/webdriver/"
                target="_blank"
                rel="noopener noreferrer"
              >
                W3C WebDriver仕様
              </a>
              の実装基盤を提供しており、
              この標準化された仕様のおかげで、Chrome・Firefox・Edge・Safariなど主要ブラウザに対して同じコードで
              操作できる「相互運用性」が実現されています。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_1} />
            </div>
            <div className="diagram-caption">図1: Seleniumプロジェクトの全体構成</div>

            <h3>
              <span className="step-icon">▶</span>最小構成のコード例
            </h3>
            <pre>
              <div className="code-line">
                <span className="token keyword">from</span> selenium <span className="token keyword">import</span> webdriver
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                driver = webdriver.<span className="token function">Chrome</span>()
              </div>
              <div className="code-line">
                driver.<span className="token function">get</span>(<span className="token string">&quot;https://www.selenium.dev&quot;</span>)
              </div>
              <div className="code-line">
                driver.<span className="token function">quit</span>()
              </div>
            </pre>
            <p>
              これだけで、Chromeブラウザが起動し、指定したURLを開き、ブラウザを終了するという一連の自動操作が完了します。
            </p>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 2. アーキテクチャ ============ */}
          <section className="doc-section" id="sec-2">
            <h2>
              <span className="num">2</span>Seleniumのアーキテクチャを理解する
            </h2>
            <p>
              SeleniumのWebDriverは、テストコードから直接ブラウザを操作しているように見えますが、実際には
              「ドライバー」と呼ばれる仲介プロセスを経由しています。ドライバーは各ブラウザベンダーが提供する実行ファイル
              （chromedriver、geckodriver、msedgedriverなど）で、ブラウザと同じマシン上で動作します。
            </p>

            <h3>
              <span className="step-icon">■</span>用語の整理
            </h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>用語</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>API</td>
                    <td>WebDriverを操作するための「命令」の集合</td>
                  </tr>
                  <tr>
                    <td>ライブラリ</td>
                    <td>各プログラミング言語向けにAPIを実装したパッケージ</td>
                  </tr>
                  <tr>
                    <td>ドライバー</td>
                    <td>
                      ブラウザを直接制御する実行ファイル（ブラウザベンダー提供）
                    </td>
                  </tr>
                  <tr>
                    <td>フレームワーク</td>
                    <td>
                      JUnit・NUnit・pytestなど、テストの実行・アサーションを担う追加ライブラリ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              WebDriver自体は「アサーション（成功・失敗の判定）」や「レポート出力」の機能を持ちません。
              これらはテストフレームワーク（pytest、JUnitなど）が担当する領域です。
            </p>

            <h3>
              <span className="step-icon">→</span>直接通信（ローカル実行）
            </h3>
            <p>
              最もシンプルな構成は、テストコードがローカルマシン上のドライバーを経由してブラウザを操作する形です。
            </p>
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_2} />
            </div>
            <div className="diagram-caption">図2: 直接通信によるローカル実行の構成</div>

            <h3>
              <span className="step-icon">☁</span>リモート通信（Selenium Grid経由）
            </h3>
            <p>
              <code>RemoteWebDriver</code>
              を使うと、テストコードとブラウザが異なるマシン上にあっても操作できます。
              この場合、Selenium ServerやSelenium Gridがドライバーとの仲介役を担います。
            </p>
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_3} />
            </div>
            <div className="diagram-caption">図3: リモート通信によるGrid経由の実行構成</div>

            <p>
              この仕組みにより、CI/CD環境やクラウド上の複数ブラウザ・複数OSでテストを実行するスケーラブルな構成が
              可能になります（詳細は「11. Selenium Grid」で解説します）。
            </p>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/overview/components/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/overview/components/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 3. 環境構築 ============ */}
          <section className="doc-section" id="sec-3">
            <h2>
              <span className="num">3</span>環境構築（インストール）
            </h2>

            <h3>
              <span className="step-icon">✔</span>Step 1: 前提条件の確認
            </h3>
            <ul>
              <li>
                ブラウザ本体（Chrome、Firefox、Edgeなど）がインストールされていること
              </li>
              <li>
                各言語の実行環境（Pythonの場合は Python
                3系）がセットアップ済みであること
              </li>
              <li>
                ブラウザドライバーは手動でダウンロードする必要はありません。Selenium
                4.6以降は「Selenium Manager」が自動的に管理してくれます（詳細は9章）
              </li>
            </ul>

            <h3>
              <span className="step-icon">📦</span>Step 2: 各言語でのインストール方法
            </h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>言語</th>
                    <th>インストールコマンド</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Python</td>
                    <td>
                      <code>pip install selenium</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Java (Maven)</td>
                    <td>
                      <code>pom.xml</code> に
                      <code>org.seleniumhq.selenium:selenium-java</code>
                      を依存関係として追加
                    </td>
                  </tr>
                  <tr>
                    <td>Java (Gradle)</td>
                    <td>
                      <code>build.gradle</code> に
                      <code>org.seleniumhq.selenium:selenium-java</code> を追加
                    </td>
                  </tr>
                  <tr>
                    <td>C#（.NET CLI）</td>
                    <td>
                      <code>dotnet add package Selenium.WebDriver</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Ruby</td>
                    <td>
                      <code>gem install selenium-webdriver</code>
                    </td>
                  </tr>
                  <tr>
                    <td>JavaScript（Node.js）</td>
                    <td>
                      <code>npm install selenium-webdriver</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Python環境で
              <code>requirements.txt</code>
              を使ってバージョンを固定する場合は、以下のように記述します
              （本ガイド執筆時点の最新安定版は
              <strong>4.46.0</strong> です。最新バージョンは必ず
              <a
                href="https://www.selenium.dev/downloads/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Downloadsページ
              </a>
              で確認してください）。
            </p>
            <pre>
              <div className="code-line">selenium==4.46.0</div>
              <div className="code-line">pytest==9.0.3</div>
            </pre>

            <h3>
              <span className="step-icon">✓</span>Step 3: インストールの確認
            </h3>
            <p>以下のスクリプトを実行し、ブラウザが起動すれば環境構築は成功です。</p>
            <pre>
              <div className="code-line">
                <span className="token keyword">from</span> selenium <span className="token keyword">import</span> webdriver
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                driver = webdriver.<span className="token function">Chrome</span>()
              </div>
              <div className="code-line">
                driver.<span className="token function">get</span>(<span className="token string">&quot;https://www.selenium.dev&quot;</span>)
              </div>
              <div className="code-line">
                <span className="token function">print</span>(driver.title)
              </div>
              <div className="code-line">
                driver.<span className="token function">quit</span>()
              </div>
            </pre>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/getting_started/install_library/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/getting_started/install_library/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/downloads/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/downloads/
                  </a>
                </li>
                <li>
                  <a
                    href="https://pypi.org/project/selenium/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://pypi.org/project/selenium/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 4. はじめてのスクリプト ============ */}
          <section className="doc-section" id="sec-4">
            <h2>
              <span className="num">4</span>はじめてのSeleniumスクリプト
            </h2>
            <p>
              Selenium公式ドキュメントでは、WebDriverの操作を「8つの基本コンポーネント」として整理しています。
              この構造を理解すれば、ほとんどのSeleniumコードが読み書きできるようになります。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_4} />
            </div>
            <div className="diagram-caption">図4: WebDriverの8つの基本コンポーネント</div>

            <h3>
              <span className="step-icon">▶</span>Step 1: セッション開始
            </h3>
            <p>
              <code>webdriver.Chrome()</code>
              を呼び出すと、ブラウザが起動し、以降の操作を受け付けるセッションが開始されます。
            </p>
            <pre>
              <div className="code-line">
                driver = webdriver.<span className="token function">Chrome</span>()
              </div>
            </pre>

            <h3>
              <span className="step-icon">🧭</span>Step 2:
              ブラウザで操作する（ナビゲーション）
            </h3>
            <p>
              <code>get()</code> メソッドで指定したURLへ遷移します。
            </p>
            <pre>
              <div className="code-line">
                driver.<span className="token function">get</span>(<span className="token string">&quot;https://www.selenium.dev/selenium/web/web-form.html&quot;</span>)
              </div>
            </pre>

            <h3>
              <span className="step-icon">ℹ</span>Step 3: ブラウザの情報を取得する
            </h3>
            <p>タイトルやURL、Cookieなど、ブラウザ全体に関する情報を取得できます。</p>
            <pre>
              <div className="code-line">title = driver.title</div>
            </pre>

            <h3>
              <span className="step-icon">⏳</span>Step 4: 待機戦略を設定する
            </h3>
            <p>要素が操作可能になるまで待つ設定を行います（詳細は6章）。</p>
            <pre>
              <div className="code-line">
                driver.<span className="token function">implicitly_wait</span>(0.5)
              </div>
            </pre>

            <h3>
              <span className="step-icon">🎯</span>Step 5: 要素を検索する
            </h3>
            <p>
              <code>By</code> クラスを使って、操作対象の要素を特定します（詳細は5章）。
            </p>
            <pre>
              <div className="code-line">
                <span className="token keyword">from</span> selenium.webdriver.common.by <span className="token keyword">import</span> By
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                text_box = driver.<span className="token function">find_element</span>(by=By.NAME, value=<span className="token string">&quot;my-text&quot;</span>)
              </div>
              <div className="code-line">
                submit_button = driver.<span className="token function">find_element</span>(by=By.CSS_SELECTOR, value=<span className="token string">&quot;button&quot;</span>)
              </div>
            </pre>

            <h3>
              <span className="step-icon">👆</span>Step 6: 要素を操作する
            </h3>
            <p>文字入力やクリックなど、実際のユーザー操作を再現します。</p>
            <pre>
              <div className="code-line">
                text_box.<span className="token function">send_keys</span>(<span className="token string">&quot;Selenium&quot;</span>)
              </div>
              <div className="code-line">
                submit_button.<span className="token function">click</span>()
              </div>
            </pre>

            <h3>
              <span className="step-icon">📄</span>Step 7: 要素の情報を取得する
            </h3>
            <p>操作後の画面に表示されているテキストなどを検証用に取得します。</p>
            <pre>
              <div className="code-line">
                message = driver.<span className="token function">find_element</span>(by=By.ID, value=<span className="token string">&quot;message&quot;</span>)
              </div>
              <div className="code-line">result_text = message.text</div>
            </pre>

            <h3>
              <span className="step-icon">⚡</span>Step 8: セッションを終了する
            </h3>
            <p>
              <code>quit()</code>
              を呼び出すと、ドライバープロセスとブラウザが終了します。これ以降そのdriverインスタンスへ命令を送ることはできません。
            </p>
            <pre>
              <div className="code-line">
                driver.<span className="token function">quit</span>()
              </div>
            </pre>

            <h3>
              <span className="step-icon">💻</span>まとめ：完全なスクリプト例
            </h3>
            <pre>
              <div className="code-line">
                <span className="token keyword">from</span> selenium <span className="token keyword">import</span> webdriver
              </div>
              <div className="code-line">
                <span className="token keyword">from</span> selenium.webdriver.common.by <span className="token keyword">import</span> By
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                driver = webdriver.<span className="token function">Chrome</span>()
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                driver.<span className="token function">get</span>(<span className="token string">&quot;https://www.selenium.dev/selenium/web/web-form.html&quot;</span>)
              </div>
              <div className="code-line">title = driver.title</div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                driver.<span className="token function">implicitly_wait</span>(0.5)
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                text_box = driver.<span className="token function">find_element</span>(by=By.NAME, value=<span className="token string">&quot;my-text&quot;</span>)
              </div>
              <div className="code-line">
                submit_button = driver.<span className="token function">find_element</span>(by=By.CSS_SELECTOR, value=<span className="token string">&quot;button&quot;</span>)
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                text_box.<span className="token function">send_keys</span>(<span className="token string">&quot;Selenium&quot;</span>)
              </div>
              <div className="code-line">
                submit_button.<span className="token function">click</span>()
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                message = driver.<span className="token function">find_element</span>(by=By.ID, value=<span className="token string">&quot;message&quot;</span>)
              </div>
              <div className="code-line">result_text = message.text</div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                driver.<span className="token function">quit</span>()
              </div>
            </pre>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/getting_started/first_script/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/getting_started/first_script/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/getting_started/using_selenium/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/getting_started/using_selenium/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 5. ロケーター ============ */}
          <section className="doc-section" id="sec-5">
            <h2>
              <span className="num">5</span>要素の検索方法（ロケーター戦略）
            </h2>
            <p>
              「ロケーター（Locator）」とは、DOM上の要素を一意に特定するための指定方法です。
              Selenium WebDriverには、伝統的に8種類のロケーター戦略が用意されています。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ロケーター</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>class name</code>
                    </td>
                    <td>
                      要素のclass属性に一致する要素を検索（複合クラス名は不可）
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>css selector</code>
                    </td>
                    <td>CSSセレクター構文に一致する要素を検索</td>
                  </tr>
                  <tr>
                    <td>
                      <code>id</code>
                    </td>
                    <td>要素のid属性に一致する要素を検索</td>
                  </tr>
                  <tr>
                    <td>
                      <code>name</code>
                    </td>
                    <td>要素のname属性に一致する要素を検索</td>
                  </tr>
                  <tr>
                    <td>
                      <code>link text</code>
                    </td>
                    <td>表示テキストが完全一致するリンク要素を検索</td>
                  </tr>
                  <tr>
                    <td>
                      <code>partial link text</code>
                    </td>
                    <td>
                      表示テキストが部分一致するリンク要素を検索（複数該当時は最初の1件）
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>tag name</code>
                    </td>
                    <td>タグ名が一致する要素を検索</td>
                  </tr>
                  <tr>
                    <td>
                      <code>xpath</code>
                    </td>
                    <td>XPath式に一致する要素を検索</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>
              <span className="step-icon">📥</span>Step 1:
              <code>By</code> クラスをインポートする
            </h3>
            <pre>
              <div className="code-line">
                <span className="token keyword">from</span> selenium.webdriver.common.by <span className="token keyword">import</span> By
              </div>
            </pre>

            <h3>
              <span className="step-icon">💻</span>Step 2: 各ロケーターの使用例
            </h3>
            <p>以下のようなHTMLがあるとします。</p>
            <pre>
              <div className="code-line">
                <span className="token punctuation">&lt;</span><span className="token keyword">input</span> <span className="token property">class</span>=<span className="token string">&quot;information&quot;</span> <span className="token property">type</span>=<span className="token string">&quot;text&quot;</span> <span className="token property">id</span>=<span className="token string">&quot;fname&quot;</span> <span className="token property">name</span>=<span className="token string">&quot;fname&quot;</span> <span className="token property">value</span>=<span className="token string">&quot;Jane&quot;</span><span className="token punctuation">&gt;</span>
              </div>
              <div className="code-line">
                <span className="token punctuation">&lt;</span><span className="token keyword">a</span> <span className="token property">href</span>=<span className="token string">&quot;www.selenium.dev&quot;</span><span className="token punctuation">&gt;</span>Selenium Official Page<span className="token punctuation">&lt;/</span><span className="token keyword">a</span><span className="token punctuation">&gt;</span>
              </div>
            </pre>

            <pre>
              <div className="code-line">
                <span className="token comment"># id で検索</span>
              </div>
              <div className="code-line">
                element = driver.<span className="token function">find_element</span>(By.ID, <span className="token string">&quot;fname&quot;</span>)
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="token comment"># css selector で検索</span>
              </div>
              <div className="code-line">
                element = driver.<span className="token function">find_element</span>(By.CSS_SELECTOR, <span className="token string">&quot;#fname&quot;</span>)
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="token comment"># class name で検索</span>
              </div>
              <div className="code-line">
                element = driver.<span className="token function">find_element</span>(By.CLASS_NAME, <span className="token string">&quot;information&quot;</span>)
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="token comment"># name で検索</span>
              </div>
              <div className="code-line">
                element = driver.<span className="token function">find_element</span>(By.NAME, <span className="token string">&quot;fname&quot;</span>)
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="token comment"># link text で検索</span>
              </div>
              <div className="code-line">
                element = driver.<span className="token function">find_element</span>(By.LINK_TEXT, <span className="token string">&quot;Selenium Official Page&quot;</span>)
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="token comment"># partial link text で検索</span>
              </div>
              <div className="code-line">
                element = driver.<span className="token function">find_element</span>(By.PARTIAL_LINK_TEXT, <span className="token string">&quot;Official Page&quot;</span>)
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="token comment"># tag name で検索</span>
              </div>
              <div className="code-line">
                element = driver.<span className="token function">find_element</span>(By.TAG_NAME, <span className="token string">&quot;a&quot;</span>)
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="token comment"># xpath で検索</span>
              </div>
              <div className="code-line">
                element = driver.<span className="token function">find_element</span>(By.XPATH, <span className="token string">&quot;//input[@value=&#39;Jane&#39;]&quot;</span>)
              </div>
            </pre>

            <h3>
              <span className="step-icon">💡</span>Step 3: ロケーター選定の考え方
            </h3>
            <ul>
              <li>
                <code>id</code> は一意性が高く、変更されにくいため最優先で検討する
              </li>
              <li>
                <code>id</code> がない場合は
                <code>css selector</code> が可読性・パフォーマンスの面で扱いやすい
              </li>
              <li>
                <code>xpath</code>
                は柔軟だが複雑になりやすく、DOM構造の変化に弱いため必要な場面に限定する
              </li>
              <li>
                ロケーターはテストコード内に散在させず、Page Object
                などに一元管理する（10章参照）
              </li>
            </ul>

            <h3>
              <span className="step-icon">⤢</span>Relative Locators（相対ロケーター）
            </h3>
            <p>
              Selenium
              4からは、既存の要素を基準に「上」「下」「左」「右」「近く」といった位置関係で要素を探す
              「相対ロケーター」も利用できます。動的に生成されるフォームなどで、固定的なIDが振られていない要素を
              特定する際に有用です。
            </p>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/elements/locators/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/elements/locators/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/elements/finders/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/elements/finders/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/test_practices/encouraged/locators/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/test_practices/encouraged/locators/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 6. 待機戦略 ============ */}
          <section className="doc-section" id="sec-6">
            <h2>
              <span className="num">6</span>待機戦略（Waits）
            </h2>
            <p>
              ブラウザ自動化における最大の課題のひとつが「タイミングの同期」です。JavaScriptによる非同期描画やSPA
              （シングルページアプリケーション）では、要素がまだDOM上に存在しない、あるいは非表示のタイミングで
              Seleniumが操作を試み、失敗する「フレーキーテスト（不安定なテスト）」が発生しがちです。
            </p>
            <p>Seleniumには、これを解決するための2種類の待機の仕組みがあります。</p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_5} />
            </div>
            <div className="diagram-caption">図5: 待機戦略の使い分けフロー</div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>Implicit Wait（暗黙的待機）</th>
                    <th>Explicit Wait（明示的待機）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>適用範囲</td>
                    <td>セッション全体（すべての要素検索に適用）</td>
                    <td>個別の待機箇所ごとに指定</td>
                  </tr>
                  <tr>
                    <td>待つ対象</td>
                    <td>要素が見つかるまで</td>
                    <td>表示状態・クリック可能状態など任意の条件</td>
                  </tr>
                  <tr>
                    <td>デフォルト値</td>
                    <td>0秒（即座にエラーを返す）</td>
                    <td>都度指定が必要</td>
                  </tr>
                  <tr>
                    <td>カスタマイズ性</td>
                    <td>低い</td>
                    <td>ポーリング間隔・無視する例外なども指定可能</td>
                  </tr>
                  <tr>
                    <td>推奨度</td>
                    <td>限定的な用途向け</td>
                    <td>基本的にはこちらを推奨</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 9v4" />
                <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                <path d="M12 16h.01" />
              </svg>
              <p>
                <strong>重要な警告：</strong> Implicit WaitとExplicit
                Waitを混在させると、待ち時間が想定以上に加算され、
                意図しないタイムアウトが発生することがあります。例えば暗黙的待機を10秒、明示的待機を15秒に設定すると、
                最悪の場合20秒後にタイムアウトが発生する可能性があります。どちらか一方の戦略に統一することが推奨されます。
              </p>
            </div>

            <h3>
              <span className="step-icon">⏳</span>Step 1: Implicit
              Wait（暗黙的待機）を設定する
            </h3>
            <pre>
              <div className="code-line">
                driver.<span className="token function">implicitly_wait</span>(2)&nbsp;&nbsp;<span className="token comment"># 秒単位</span>
              </div>
            </pre>
            <p>
              要素が見つかるまで、指定した時間内はリトライを続けます。要素が見つかった時点ですぐに処理は継続されるため、待機時間を長めに設定しても常に待たされるわけではありません。
            </p>

            <h3>
              <span className="step-icon">⏱</span>Step 2: Explicit
              Wait（明示的待機）を設定する
            </h3>
            <p>
              <code>WebDriverWait</code>
              を使い、特定の条件（表示されるまで、など）が満たされるまでポーリングします。
            </p>
            <pre>
              <div className="code-line">
                <span className="token keyword">from</span> selenium.webdriver.common.by <span className="token keyword">import</span> By
              </div>
              <div className="code-line">
                <span className="token keyword">from</span> selenium.webdriver.support.wait <span className="token keyword">import</span> WebDriverWait
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                wait = <span className="token function">WebDriverWait</span>(driver, timeout=2)
              </div>
              <div className="code-line">
                revealed = wait.<span className="token function">until</span>(<span className="token keyword">lambda</span> d: d.<span className="token function">find_element</span>(By.ID, <span className="token string">&quot;revealed&quot;</span>))
              </div>
              <div className="code-line">
                revealed.<span className="token function">is_displayed</span>()
              </div>
            </pre>

            <h3>
              <span className="step-icon">⚙</span>Step 3:
              カスタマイズ（ポーリング間隔・例外の無視）
            </h3>
            <pre>
              <div className="code-line">
                <span className="token keyword">from</span> selenium.common <span className="token keyword">import</span> NoSuchElementException, ElementNotInteractableException
              </div>
              <div className="code-line">
                <span className="token keyword">from</span> selenium.webdriver.common.by <span className="token keyword">import</span> By
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                errors = [NoSuchElementException, ElementNotInteractableException]
              </div>
              <div className="code-line">
                wait = <span className="token function">WebDriverWait</span>(driver, timeout=2, poll_frequency=0.3, ignored_exceptions=errors)
              </div>
              <div className="code-line">
                revealed = wait.<span className="token function">until</span>(<span className="token keyword">lambda</span> d: d.<span className="token function">find_element</span>(By.ID, <span className="token string">&quot;revealed&quot;</span>))
              </div>
              <div className="code-line">
                revealed.<span className="token function">send_keys</span>(<span className="token string">&quot;Displayed&quot;</span>)
              </div>
            </pre>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/waits/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/waits/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/support_features/expected_conditions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/support_features/expected_conditions/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 7. ブラウザの操作 ============ */}
          <section className="doc-section" id="sec-7">
            <h2>
              <span className="num">7</span>ブラウザの操作（Interactions）
            </h2>
            <p>
              要素そのものへの操作以外に、ブラウザ全体を対象とした操作も頻繁に利用します。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>操作対象</th>
                    <th>主な用途</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Navigation（ナビゲーション）</td>
                    <td>ページ遷移、戻る・進む・リロード</td>
                  </tr>
                  <tr>
                    <td>Alerts（アラート）</td>
                    <td>JavaScriptのalert・confirm・promptへの応答</td>
                  </tr>
                  <tr>
                    <td>Cookies（Cookie）</td>
                    <td>Cookieの取得・追加・削除</td>
                  </tr>
                  <tr>
                    <td>Frames（フレーム）</td>
                    <td>iframe内部への切り替え</td>
                  </tr>
                  <tr>
                    <td>Windows（ウィンドウ・タブ）</td>
                    <td>複数タブ・ウィンドウ間の切り替え</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>
              <span className="step-icon">🧭</span>Step 1: ページ遷移（Navigation）
            </h3>
            <pre>
              <div className="code-line">
                driver.<span className="token function">get</span>(<span className="token string">&quot;https://www.selenium.dev&quot;</span>)
              </div>
              <div className="code-line">
                driver.<span className="token function">back</span>()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="token comment"># 戻る</span>
              </div>
              <div className="code-line">
                driver.<span className="token function">forward</span>()&nbsp;&nbsp;&nbsp;<span className="token comment"># 進む</span>
              </div>
              <div className="code-line">
                driver.<span className="token function">refresh</span>()&nbsp;&nbsp;&nbsp;<span className="token comment"># リロード</span>
              </div>
            </pre>

            <h3>
              <span className="step-icon">⚠</span>Step 2: アラートへの対応
            </h3>
            <pre>
              <div className="code-line">alert = driver.switch_to.alert</div>
              <div className="code-line">
                alert.<span className="token function">accept</span>()&nbsp;&nbsp;&nbsp;<span className="token comment"># OKを押す</span>
              </div>
              <div className="code-line">
                <span className="token comment"># alert.dismiss()&nbsp;&nbsp;# キャンセルを押す</span>
              </div>
            </pre>

            <h3>
              <span className="step-icon">🔲</span>Step 3: フレーム内部への切り替え
            </h3>
            <pre>
              <div className="code-line">
                driver.switch_to.<span className="token function">frame</span>(<span className="token string">&quot;frame_name&quot;</span>)
              </div>
              <div className="code-line">
                <span className="token comment"># 元のコンテキストに戻る</span>
              </div>
              <div className="code-line">
                driver.switch_to.<span className="token function">default_content</span>()
              </div>
            </pre>

            <h3>
              <span className="step-icon">🗂</span>Step 4: ウィンドウ・タブの切り替え
            </h3>
            <pre>
              <div className="code-line">original_window = driver.current_window_handle</div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="token keyword">for</span> handle <span className="token keyword">in</span> driver.window_handles:
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">if</span> handle != original_window:
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.switch_to.<span className="token function">window</span>(handle)
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">break</span>
              </div>
            </pre>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/interactions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/interactions/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/interactions/navigation/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/interactions/navigation/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/interactions/alerts/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/interactions/alerts/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/interactions/cookies/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/interactions/cookies/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/interactions/frames/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/interactions/frames/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/interactions/windows/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/interactions/windows/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 8. Actions API ============ */}
          <section className="doc-section" id="sec-8">
            <h2>
              <span className="num">8</span>Actions API（キーボード・マウス操作）
            </h2>
            <p>
              クリックやテキスト入力だけでは表現できない、ドラッグ＆ドロップ、マウスホバー、複数キーの同時押しなどの
              複雑な操作は「Actions API」を使って表現します。
            </p>

            <h3>
              <span className="step-icon">📥</span>Step 1:
              <code>ActionChains</code> をインポートする
            </h3>
            <pre>
              <div className="code-line">
                <span className="token keyword">from</span> selenium.webdriver.common.action_chains <span className="token keyword">import</span> ActionChains
              </div>
            </pre>

            <h3>
              <span className="step-icon">🖱</span>Step 2:
              マウス操作（ホバー・ドラッグ＆ドロップ）
            </h3>
            <pre>
              <div className="code-line">
                menu = driver.<span className="token function">find_element</span>(By.CSS_SELECTOR, <span className="token string">&quot;#menu&quot;</span>)
              </div>
              <div className="code-line">
                item = driver.<span className="token function">find_element</span>(By.CSS_SELECTOR, <span className="token string">&quot;#item&quot;</span>)
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="token function">ActionChains</span>(driver).<span className="token function">move_to_element</span>(menu).<span className="token function">click</span>(item).<span className="token function">perform</span>()
              </div>
            </pre>

            <h3>
              <span className="step-icon">⌨</span>Step 3:
              キーボード操作（複数キーの組み合わせ）
            </h3>
            <pre>
              <div className="code-line">
                <span className="token keyword">from</span> selenium.webdriver.common.keys <span className="token keyword">import</span> Keys
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                text_box = driver.<span className="token function">find_element</span>(By.NAME, <span className="token string">&quot;my-text&quot;</span>)
              </div>
              <div className="code-line">
                <span className="token function">ActionChains</span>(driver).<span className="token function">click</span>(text_box).<span className="token function">send_keys</span>(<span className="token string">&quot;selenium&quot;</span>).<span className="token function">key_down</span>(Keys.SHIFT).<span className="token function">send_keys</span>(<span className="token string">&quot;selenium&quot;</span>).<span className="token function">key_up</span>(Keys.SHIFT).<span className="token function">perform</span>()
              </div>
            </pre>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/actions_api/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/actions_api/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/actions_api/keyboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/actions_api/keyboard/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/actions_api/mouse/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/actions_api/mouse/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 9. Selenium Manager ============ */}
          <section className="doc-section" id="sec-9">
            <h2>
              <span className="num">9</span>Selenium Manager（ドライバーの自動管理）
            </h2>
            <p>
              以前のSeleniumでは、ブラウザとドライバー（chromedriver等）のバージョンが一致していないと
              <code>session not created</code>
              エラーが発生し、手動でドライバーをダウンロードし直す必要がありました。
              Chromeなどのブラウザは自動更新される「エバーグリーン」な性質を持つため、これは頻繁に発生する運用課題でした。
            </p>
            <p>
              この課題を解決するために、Selenium 4.6以降は
              <strong>Selenium Manager</strong> がSeleniumバインディングに
              標準搭載されています。Rust製のCLIツールで、追加のインストール作業なしに自動的に機能します。
            </p>

            <h3>
              <span className="step-icon">🧠</span>Step 1: 仕組みを理解する
            </h3>
            <p>
              Selenium
              Managerは、ドライバーが未指定・未検出の場合にのみフォールバックとして動作します。
              手動でドライバーパスを指定している場合はそちらが優先されます。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_6} />
            </div>
            <div className="diagram-caption">
              図6: Selenium Managerによる自動ドライバー管理の流れ
            </div>

            <h3>
              <span className="step-icon">🌐</span>Step 2:
              自動ブラウザ管理（Automated Browser Management）
            </h3>
            <p>
              Selenium
              4.11以降では、ドライバーだけでなくブラウザ本体（Chrome、Firefox、Edge）もローカルに存在しない
              場合は自動的にダウンロード・キャッシュされます。<code>browserVersion</code>
              オプションを使えば、
              <code>stable</code>・<code>beta</code>・<code>dev</code>・<code>canary</code>・<code>esr</code>
              （Firefoxのみ）といったラベルで特定バージョンを指定することも可能です。
            </p>

            <h3>
              <span className="step-icon">⚙</span>Step 3: 主要な設定項目
            </h3>
            <p>
              Selenium
              Managerは、CLI引数・設定ファイル（<code>se-config.toml</code>）・環境変数の3通りで設定できます
              （優先順位はこの順）。
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>CLI引数</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>--browser</code>
                    </td>
                    <td>ブラウザ名（chrome / firefox / edge など）を指定</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--browser-version</code>
                    </td>
                    <td>
                      バージョン番号、または stable / beta / dev / canary を指定
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>--proxy</code>
                    </td>
                    <td>ネットワークプロキシを指定（企業ネットワーク内で有用）</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--clear-cache</code>
                    </td>
                    <td>ローカルキャッシュ（~/.cache/selenium）を削除</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--offline</code>
                    </td>
                    <td>ネットワークアクセスを無効化するオフラインモード</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--debug</code>
                    </td>
                    <td>詳細なデバッグログを出力</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>
              <span className="step-icon">🔒</span>Step 4: データ収集について
            </h3>
            <p>
              Selenium
              Managerはデフォルトで匿名の利用統計情報（Seleniumバージョン、言語バインディング、OS、
              ブラウザバージョン、おおまかな地理情報）を収集します。これを無効化したい場合は、環境変数
              <code>SE_AVOID_STATS=true</code> を設定します。
            </p>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/selenium_manager/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/selenium_manager/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 10. Page Object Model ============ */}
          <section className="doc-section" id="sec-10">
            <h2>
              <span className="num">10</span>Page Object Model（保守性の高いテスト設計）
            </h2>
            <p>
              テストコードにロケーターや操作ロジックを直接書き続けると、UIの変更のたびに複数のテストファイルを
              修正する必要が生じ、保守性が急速に悪化します。この課題に対する定番の設計パターンが
              <strong>Page Object Model（POM）</strong> です。
            </p>

            <h3>
              <span className="step-icon">💡</span>基本的な考え方
            </h3>
            <p>
              Page Object
              とは、テスト対象アプリケーションの「1つのページ」をオブジェクト指向のクラスとしてモデル化
              したものです。ロケーターや操作方法はPage
              Objectクラス内に閉じ込め、テストコードはそのクラスが提供する
              「サービス（メソッド）」だけを呼び出します。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_7} />
            </div>
            <div className="diagram-caption">図7: Page Object間の関係</div>

            <h3>
              <span className="step-icon">⚠</span>Step 1: Page
              Objectを持たない場合の問題点
            </h3>
            <pre>
              <div className="code-line">
                <span className="token keyword">def</span> <span className="token function">test_login</span>(driver):
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;driver.<span className="token function">find_element</span>(By.NAME, <span className="token string">&quot;user_name&quot;</span>).<span className="token function">send_keys</span>(<span className="token string">&quot;username&quot;</span>)
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;driver.<span className="token function">find_element</span>(By.NAME, <span className="token string">&quot;password&quot;</span>).<span className="token function">send_keys</span>(<span className="token string">&quot;my-secret-password&quot;</span>)
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;driver.<span className="token function">find_element</span>(By.NAME, <span className="token string">&quot;sign-in&quot;</span>).<span className="token function">click</span>()
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;heading = driver.<span className="token function">find_element</span>(By.TAG_NAME, <span className="token string">&quot;h1&quot;</span>)
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">assert</span> heading.text == <span className="token string">&quot;Hello username&quot;</span>
              </div>
            </pre>
            <p>
              ロケーターとテストロジックが密結合しており、UIが変わるたびにこのテストを直接修正する必要があります。
            </p>

            <h3>
              <span className="step-icon">♻</span>Step 2: Page Objectとして書き直す
            </h3>
            <pre>
              <div className="code-line">
                <span className="token keyword">class</span> <span className="token class-name">LoginPage</span>:
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">def</span> <span className="token function">__init__</span>(self, driver):
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.driver = driver
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">def</span> <span className="token function">login_as</span>(self, username, password):
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.driver.<span className="token function">find_element</span>(By.NAME, <span className="token string">&quot;user_name&quot;</span>).<span className="token function">send_keys</span>(username)
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.driver.<span className="token function">find_element</span>(By.NAME, <span className="token string">&quot;password&quot;</span>).<span className="token function">send_keys</span>(password)
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.driver.<span className="token function">find_element</span>(By.NAME, <span className="token string">&quot;sign-in&quot;</span>).<span className="token function">click</span>()
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">return</span> <span className="token function">HomePage</span>(self.driver)
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="token keyword">class</span> <span className="token class-name">HomePage</span>:
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">def</span> <span className="token function">__init__</span>(self, driver):
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.driver = driver
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">def</span> <span className="token function">get_heading_text</span>(self):
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">return</span> self.driver.<span className="token function">find_element</span>(By.TAG_NAME, <span className="token string">&quot;h1&quot;</span>).text
              </div>
            </pre>

            <h3>
              <span className="step-icon">🧪</span>Step 3: テストコード側の変化
            </h3>
            <pre>
              <div className="code-line">
                <span className="token keyword">def</span> <span className="token function">test_login</span>(driver):
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;login_page = <span className="token function">LoginPage</span>(driver)
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;home_page = login_page.<span className="token function">login_as</span>(<span className="token string">&quot;username&quot;</span>, <span className="token string">&quot;my-secret-password&quot;</span>)
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="token keyword">assert</span> home_page.<span className="token function">get_heading_text</span>() == <span className="token string">&quot;Hello username&quot;</span>
              </div>
            </pre>
            <p>
              UIの構造が変わった場合でも、修正が必要なのは <code>LoginPage</code> や
              <code>HomePage</code> クラスの 内部だけで、テストコード自体は変更不要です。
            </p>

            <h3>
              <span className="step-icon">📋</span>設計上の重要なルール
            </h3>
            <ul>
              <li>
                Page
                Object自体はアサーション（検証）を行わない。検証はテストコード側の責務
              </li>
              <li>
                例外として、コンストラクタで「正しいページが表示されているか」だけは確認してよい
              </li>
              <li>
                メソッドは別のPage
                Objectを返すことで、ユーザーの画面遷移をそのままコードで表現できる（フルーエントな設計）
              </li>
              <li>
                大きなページは「Page Component
                Object」として部品単位に分割し、繰り返し利用できるようにする
              </li>
            </ul>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 11. Selenium Grid ============ */}
          <section className="doc-section" id="sec-11">
            <h2>
              <span className="num">11</span>Selenium Grid（並列・分散実行）
            </h2>
            <p>
              テストの数が増えてくると、1台のマシンで直列にテストを実行するのは非効率になります。
              <strong>Selenium Grid</strong>
              は、複数のマシン・複数のブラウザに対してテストを分散させ、
              並列実行を可能にする仕組みです。
            </p>

            <h3>
              <span className="step-icon">🗂</span>3つの実行モード
            </h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>モード</th>
                    <th>特徴</th>
                    <th>主な用途</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Standalone</td>
                    <td>
                      全コンポーネントが1プロセスに統合。1台のマシンのみで完結
                    </td>
                    <td>ローカル開発・デバッグ、CI/CDでの簡易Grid</td>
                  </tr>
                  <tr>
                    <td>Hub and Node</td>
                    <td>Hubが受付を担当し、複数のNodeへ処理を振り分ける</td>
                    <td>複数OS・複数ブラウザバージョンでの分散実行</td>
                  </tr>
                  <tr>
                    <td>Distributed</td>
                    <td>
                      Router・Distributor・Session
                      Map等、6つのコンポーネントを個別に別マシンで起動
                    </td>
                    <td>大規模・高可用性が求められる本番運用環境</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>
              <span className="step-icon">▶</span>Step 1:
              Standaloneモードで最速に試す
            </h3>
            <pre>
              <div className="code-line">
                java -jar selenium-server-&lt;version&gt;.jar standalone
              </div>
            </pre>
            <p>
              デフォルトで
              <code>http://localhost:4444</code>
              がリクエストを受け付けます。ブラウザで同じURLを開くと、 Grid
              UIで実行中のセッションを確認できます。
            </p>

            <h3>
              <span className="step-icon">🔌</span>Step 2:
              テストコードから接続する
            </h3>
            <pre>
              <div className="code-line">
                <span className="token keyword">from</span> selenium <span className="token keyword">import</span> webdriver
              </div>
              <div className="code-line">
                <span className="token keyword">from</span> selenium.webdriver.chrome.options <span className="token keyword">import</span> Options
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">options = <span className="token function">Options</span>()</div>
              <div className="code-line">
                driver = webdriver.<span className="token function">Remote</span>(command_executor=<span className="token string">&quot;http://localhost:4444&quot;</span>, options=options)
              </div>
              <div className="code-line">
                driver.<span className="token function">get</span>(<span className="token string">&quot;https://www.selenium.dev&quot;</span>)
              </div>
              <div className="code-line">
                driver.<span className="token function">quit</span>()
              </div>
            </pre>

            <h3>
              <span className="step-icon">🌟</span>Step 3: Hub and
              Nodeモードで分散させる
            </h3>
            <pre>
              <div className="code-line">
                <span className="token comment"># Hub側</span>
              </div>
              <div className="code-line">
                java -jar selenium-server-&lt;version&gt;.jar hub
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="token comment"># Node側（別マシンでもよい）</span>
              </div>
              <div className="code-line">
                java -jar selenium-server-&lt;version&gt;.jar node --hub http://&lt;hub-ip&gt;:4444
              </div>
            </pre>

            <h3>
              <span className="step-icon">🌐</span>Gridのコンポーネント構成（Distributedモードの内部構造）
            </h3>
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_8} />
            </div>
            <div className="diagram-caption">
              図8: Selenium Grid（Distributedモード）のコンポーネント構成
            </div>

            <h3>
              <span className="step-icon">📏</span>Gridの規模の目安
            </h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>規模</th>
                    <th>構成</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Small</td>
                    <td>StandaloneまたはNode数5台以下のHub/Node構成</td>
                  </tr>
                  <tr>
                    <td>Middle</td>
                    <td>Node数6〜60台程度のHub/Node構成</td>
                  </tr>
                  <tr>
                    <td>Large</td>
                    <td>
                      Node数60〜100台程度のHub/Node、または100台超のDistributed構成
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout danger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                <path d="M10 10l4 4m0 -4l-4 4" />
              </svg>
              <p>
                <strong>セキュリティ上の警告：</strong> Selenium
                Gridは適切なファイアウォール設定なしにインターネットへ
                公開してはいけません。外部からGridへの不正アクセスを許すと、内部アプリケーションやファイルへの
                アクセス、任意のバイナリ実行を許してしまう危険性があります。
              </p>
            </div>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/grid/getting_started/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/grid/getting_started/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/grid/components/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/grid/components/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/grid/architecture/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/grid/architecture/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 12. Selenium IDE ============ */}
          <section className="doc-section" id="sec-12">
            <h2>
              <span className="num">12</span>Selenium IDE（ノーコード記録ツール）
            </h2>
            <p>
              <strong>Selenium IDE</strong>
              は、Chrome・Firefox・Edge向けのブラウザ拡張機能で、ユーザーのブラウザ操作を
              そのまま記録し、Seleniumのコマンドとして再生できるツールです。コードを書かずに簡単なテストシナリオを
              作成できるため、Seleniumの構文を学ぶ入り口としても適しています。
            </p>

            <h3>
              <span className="step-icon">🧩</span>Step 1: 拡張機能をインストールする
            </h3>
            <p>
              Chrome・Firefox・Edgeそれぞれの拡張機能ストアからSelenium
              IDEをインストールします。
            </p>

            <h3>
              <span className="step-icon">🎥</span>Step 2: 操作を記録する
            </h3>
            <p>
              「Record」ボタンを押した状態でブラウザを操作すると、クリック・入力・遷移などの操作がコマンドとして
              自動的に記録されます。
            </p>

            <h3>
              <span className="step-icon">📤</span>Step 3: 再生・エクスポートする
            </h3>
            <p>
              記録したシナリオはIDE上でそのまま再生できるほか、Java・Python・JavaScriptなどのコードとしてエクスポートし、
              WebDriverベースのテストスイートに組み込むことも可能です。
            </p>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/ide/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/ide/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/selenium-ide/docs/en/introduction/getting-started"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/selenium-ide/docs/en/introduction/getting-started
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 13. ベストプラクティス ============ */}
          <section className="doc-section" id="sec-13">
            <h2>
              <span className="num">13</span>テストのベストプラクティス
            </h2>
            <p>
              Selenium公式ドキュメントの Test Practices
              セクションでは、自動テストを長期的に保守可能にするための
              「推奨される振る舞い」と「避けるべき振る舞い」がまとめられています。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>推奨されるプラクティス</th>
                    <th>避けるべきプラクティス</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Page Object Model を活用してロケーターを一元管理する</td>
                    <td>テスト間で状態（ログインセッション等）を共有する</td>
                  </tr>
                  <tr>
                    <td>各テストを独立させ、実行順序に依存させない</td>
                    <td>CAPTCHA突破を自動化しようとする</td>
                  </tr>
                  <tr>
                    <td>テストごとに新しいブラウザセッションを使う</td>
                    <td>HTTPステータスコードだけでテストの成否を判定する</td>
                  </tr>
                  <tr>
                    <td>テスト結果のレポーティングを充実させる</td>
                    <td>
                      Gmail・外部メール・Facebookログインのような外部サービスへ依存する
                    </td>
                  </tr>
                  <tr>
                    <td>外部サービスはモック化して安定性を高める</td>
                    <td>2要素認証（2FA）を自動テストの中で回避しようとする</td>
                  </tr>
                  <tr>
                    <td>Fluent API（メソッドチェーン）で読みやすいテストを書く</td>
                    <td>リンクを再帰的に辿るクローリング的なテストを書く</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              これらの背景には共通して「テストの決定論性（同じ入力で常に同じ結果になること）を保つ」という思想が
              あります。外部サービスやCAPTCHA、2FAのような「意図的に自動化を妨げる仕組み」に依存すると、テストが
              不安定になったり、対象サービスの利用規約に抵触したりするリスクがあるため、避けることが推奨されています。
            </p>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/test_practices/encouraged/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/test_practices/encouraged/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/test_practices/discouraged/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/test_practices/discouraged/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 14. トラブルシューティング ============ */}
          <section className="doc-section" id="sec-14">
            <h2>
              <span className="num">14</span>よくあるエラーとトラブルシューティング
            </h2>
            <p>初学者がつまずきやすい代表的なエラーを整理します。</p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>エラー</th>
                    <th>主な原因</th>
                    <th>対処法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>NoSuchElementException</code>
                    </td>
                    <td>指定したロケーターに一致する要素が見つからない</td>
                    <td>ロケーターの見直し、待機戦略（6章）の導入</td>
                  </tr>
                  <tr>
                    <td>
                      <code>ElementNotInteractableException</code>
                    </td>
                    <td>要素は存在するが、非表示・無効化状態などで操作できない</td>
                    <td>Explicit Waitで「クリック可能になるまで」待機する</td>
                  </tr>
                  <tr>
                    <td>
                      <code>StaleElementReferenceException</code>
                    </td>
                    <td>取得済みの要素参照が、DOM更新により無効になった</td>
                    <td>要素を再取得してから操作する</td>
                  </tr>
                  <tr>
                    <td>
                      <code>session not created</code>
                    </td>
                    <td>ブラウザとドライバーのバージョン不一致</td>
                    <td>Selenium Manager（9章）を利用してバージョン管理を任せる</td>
                  </tr>
                  <tr>
                    <td>ドライバーが見つからないエラー</td>
                    <td>ドライバーがPATH上に存在しない、パス指定の誤り</td>
                    <td>
                      Selenium
                      Managerに任せるか、Serviceクラスで明示的にパスを指定する
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section-refs">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <span>参考</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/troubleshooting/errors/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/troubleshooting/errors/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/troubleshooting/errors/driver_location/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/troubleshooting/errors/driver_location/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/troubleshooting/logging/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.selenium.dev/documentation/webdriver/troubleshooting/logging/
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ============ 15. まとめ ============ */}
          <section className="doc-section" id="sec-15">
            <h2>
              <span className="num">15</span>まとめと次のステップ
            </h2>
            <p>
              本ガイドでは、Seleniumの全体像から実際のコードの書き方、そして保守性・拡張性を高めるための
              設計パターンまでを段階的に解説しました。
            </p>
            <ul>
              <li>
                Seleniumは WebDriver・Grid・IDE・Manager
                から構成されるアンブレラプロジェクトである
              </li>
              <li>WebDriverの操作は「8つの基本コンポーネント」に整理できる</li>
              <li>
                ロケーター戦略を理解し、Page Object
                Modelでテストコードを整理することが保守性の鍵
              </li>
              <li>
                待機戦略（特にExplicit Wait）を正しく使うことがテストの安定性に直結する
              </li>
              <li>
                Selenium Managerのおかげで、ドライバー管理の手間はほぼ解消されている
              </li>
              <li>テストが増えてきたらSelenium Gridによる並列実行を検討する</li>
            </ul>

            <h3>
              <span className="step-icon">➡</span>次のステップ
            </h3>
            <ol>
              <li>
                実際に手を動かして、自分のアプリケーションやサンプルサイトに対してテストを書いてみる
              </li>
              <li>
                pytestなどのテストフレームワークと組み合わせ、アサーションやレポート出力を整備する
              </li>
              <li>
                CI/CDパイプライン（GitHub
                Actionsなど）にテストを組み込み、継続的に実行する
              </li>
              <li>
                チームで開発している場合は、Page Object
                Modelのディレクトリ構成をあらかじめ決めておく
              </li>
            </ol>
          </section>

          {/* ============ 16. 参考文献一覧 ============ */}
          <section className="doc-section" id="sec-16">
            <h2>
              <span className="num">16</span>参考文献一覧
            </h2>
            <p>
              本ガイド作成にあたって参照した Selenium
              公式ドキュメントのURLを以下にまとめます。
            </p>

            <ul className="ref-list">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/overview/components/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/overview/components/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/getting_started/install_library/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/getting_started/install_library/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/getting_started/first_script/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/getting_started/first_script/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/getting_started/using_selenium/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/getting_started/using_selenium/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/elements/locators/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/elements/locators/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/elements/finders/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/elements/finders/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/test_practices/encouraged/locators/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/test_practices/encouraged/locators/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/waits/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/waits/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/support_features/expected_conditions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/support_features/expected_conditions/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/interactions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/interactions/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/interactions/navigation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/interactions/navigation/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/interactions/alerts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/interactions/alerts/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/interactions/cookies/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/interactions/cookies/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/interactions/frames/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/interactions/frames/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/interactions/windows/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/interactions/windows/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/actions_api/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/actions_api/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/actions_api/keyboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/actions_api/keyboard/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/actions_api/mouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/actions_api/mouse/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/selenium_manager/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/selenium_manager/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/grid/getting_started/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/grid/getting_started/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/grid/components/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/grid/components/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/grid/architecture/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/grid/architecture/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/ide/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/ide/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/selenium-ide/docs/en/introduction/getting-started"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/selenium-ide/docs/en/introduction/getting-started
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/test_practices/encouraged/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/test_practices/encouraged/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/test_practices/discouraged/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/test_practices/discouraged/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/troubleshooting/errors/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/troubleshooting/errors/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/troubleshooting/errors/driver_location/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/troubleshooting/errors/driver_location/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/documentation/webdriver/troubleshooting/logging/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/documentation/webdriver/troubleshooting/logging/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.selenium.dev/downloads/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.selenium.dev/downloads/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://pypi.org/project/selenium/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pypi.org/project/selenium/
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
                <a
                  href="https://www.w3.org/TR/webdriver/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.w3.org/TR/webdriver/
                </a>
              </li>
            </ul>
          </section>

          <footer className="page-footer">
            Selenium 完全ガイド &mdash; Selenium 公式ドキュメント（2026年7月時点）を基に作成。
          </footer>
        </div>
      </main>
    </div>
  );
}
