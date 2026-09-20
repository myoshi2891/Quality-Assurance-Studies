import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './appium-essentials-guide.css';

export const metadata: Metadata = {
  title: 'Appium Essentials 完全ガイド ― モバイルテスト自動化の基礎とベストプラクティス',
  description:
    '初学者向けAppiumステップバイステップガイド。アーキテクチャ、Capabilities、ロケーター戦略、Page Object Model、待機戦略、CI/CD統合までを最新情報で解説。',
};

const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#07111e",
    "primaryColor": "#0f2138",
    "primaryTextColor": "#e7edf7",
    "primaryBorderColor": "#86efc9",
    "lineColor": "#7c9eff",
    "secondaryColor": "#13273f",
    "secondaryBorderColor": "#7c9eff",
    "tertiaryColor": "#0f2138",
    "tertiaryBorderColor": "#86efc9",
    "edgeLabelBackground": "#0d1b2f",
    "fontSize": "15px",
    "fontFamily": "Inter, 'Noto Sans JP', sans-serif"
  },
  "flowchart": { "htmlLabels": true, "curve": "basis" }
}}%%
`;

export const DIAGRAM_ARCH = `${MERMAID_CONFIG}flowchart TD
A["テストコード<br/>Python・Java・JavaScriptなど"] --> B["Appiumクライアントライブラリ"]
B -->|"HTTPリクエスト<br/>W3C WebDriverプロトコル"| C["Appiumサーバー<br/>Node.jsプロセス"]
C --> D{"どのドライバーを使うか"}
D -->|"Android"| E["UiAutomator2ドライバー"]
D -->|"Android（ネイティブ限定）"| F["Espressoドライバー"]
D -->|"iOS"| G["XCUITestドライバー"]
D -->|"デスクトップ"| H["Mac2 / Windowsドライバー"]
E --> I["Android実機 / エミュレーター"]
F --> I
G --> J["iOS実機 / シミュレーター"]
H --> K["macOS / Windows PC"]`;

export const DIAGRAM_VERSION = `${MERMAID_CONFIG}flowchart TD
A["Appium 1.x<br/>2013年から"] --> B["JSONWP / MJSONWP対応<br/>ドライバー同梱型"]
B --> C["Appium 2.0<br/>2023年7月GA"]
C --> D["W3C WebDriver専用<br/>ドライバー・プラグイン分離"]
D --> E["Appium 3.x<br/>2025年8月GA"]
E --> F["Node.js 20.19+ / 22.12+ / 24+ が必須<br/>非推奨エンドポイント全廃"]`;

export const DIAGRAM_SETUP = `${MERMAID_CONFIG}flowchart TD
A["ステップ1<br/>Node.jsをインストール"] --> B["ステップ2<br/>npm install -g appiumでサーバー導入"]
B --> C["ステップ3<br/>プラットフォームドライバーを追加"]
C --> D["ステップ4<br/>appium driver doctorで環境検証"]
D --> E["ステップ5<br/>Appium Inspectorを導入"]
E --> F["ステップ6<br/>appiumコマンドでサーバー起動"]
F --> G["ステップ7<br/>最初のテストスクリプトを実行"]`;

export const DIAGRAM_LOCATOR = `${MERMAID_CONFIG}flowchart TD
A["要素を特定したい"] --> B{"resource-id や<br/>accessibility idがあるか"}
B -->|"ある"| C["ID / AccessibilityIdを使う<br/>最優先"]
B -->|"ない"| D{"プラットフォーム固有の<br/>属性で絞り込めるか"}
D -->|"Android"| E["安定したresource-id /<br/>accessibility idの付与を優先<br/>(-android uiautomatorはレガシー)"]
D -->|"iOS"| F["-ios predicate string<br/>-ios class chainを使う"]
D -->|"判断できない"| G["ClassNameで候補を絞れるか"]
G -->|"絞れる"| H["ClassNameを併用する"]
G -->|"絞れない"| I["最終手段としてXPathを使う<br/>変更に弱いため多用しない"]`;

export const DIAGRAM_POM = `${MERMAID_CONFIG}flowchart TD
A["テストケース<br/>test_login.py"] --> B["Page Object<br/>LoginPage"]
A --> C["Page Object<br/>HomePage"]
B --> D["ロケーター定義"]
B --> E["操作メソッド<br/>enter_id / enter_password / tap_login"]
C --> F["ロケーター定義"]
C --> G["操作メソッド<br/>get_welcome_text"]
D --> H["Appiumドライバー"]
E --> H
F --> H
G --> H`;

export const DIAGRAM_WAIT = `${MERMAID_CONFIG}flowchart TD
A["要素の出現を待ちたい"] --> B{"固定sleepを<br/>使っていないか"}
B -->|"使っている"| C["アンチパターン<br/>遅くて不安定になる"]
B -->|"使っていない"| D{"待ちたい条件は<br/>要素ごとに異なるか"}
D -->|"はい"| E["WebDriverWaitで<br/>Explicit Waitを使う"]
D -->|"いいえ・全体で統一したい"| F["Implicit Waitを<br/>セッション全体に設定"]
E --> G["Explicit WaitとImplicit Waitを<br/>混在させない"]
F --> G
G --> H["安定したテスト実行"]`;

export default function AppiumGuidePage() {
  return (
    <div className="appium-guide-layout">
      <NavBar />

      <main className="content">
        <header className="hero">
          <div className="chips">
            <span className="chip">Appium 3.x対応</span>
            <span className="chip">2026年8月26日更新</span>
            <span className="chip">初学者向け</span>
          </div>
          <h1>
            Appium Essentials 完全ガイド<br />―
            モバイルテスト自動化の基礎とベストプラクティス
          </h1>
          <p className="lead">
            初学者がゼロからAppiumを使えるようになるための、ステップバイステップ解説書です。2026年8月時点の最新情報（Appium
            3.x系）に基づいて執筆しています。
          </p>
        </header>

        <div className="prose">
          {/* Section 1 */}
          <section id="about" className="section">
            <h2>
              <span className="num">1</span>このガイドについて
            </h2>
            <p>
              このガイドは、モバイルアプリのテスト自動化ツール「Appium」を初めて学ぶ人のために書かれています。想定する読者は次のような人です。
            </p>
            <ul>
              <li>Selenium（Web自動化）の経験はあるが、モバイル自動化は初めて</li>
              <li>手動テストからテスト自動化にステップアップしたいQAエンジニア</li>
              <li>Android/iOSアプリの開発者で、UIテストを自分で組みたい人</li>
            </ul>
            <p>
              出発点として、O&apos;Reilly（Packt Publishing）から出版されている書籍『
              <a
                href="https://www.oreilly.com/library/view/appium-essentials/9781784392482/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Appium Essentials
              </a>
              』（Manoj Hans 著、2015年刊行）の構成と基本概念を参考にしています。ただし同書はAppium 1.x時代の内容であるため、本書では<strong>2026年8月現在の最新状況（Appium 3.x系、W3C WebDriver仕様の完全適用、プラグインエコシステム）</strong>に合わせて全編を全面的に書き直しています。
            </p>
            <div className="callout">
              <div className="callout-title">このガイドのコード例について</div>
              <p>
                本ガイドのテストコード例は<strong>Python</strong>（<code>pytest</code> + <code>Appium-Python-Client</code>）と<strong>Java</strong>（<code>TestNG</code> + <code>java-client</code>）の2言語を併記しています。どちらか一方の言語環境があれば、そのまま手元で動かせます。
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="what-is-appium" className="section">
            <h2>
              <span className="num">2</span>Appiumとは何か
            </h2>
            <p>
              <strong>Appium（アピウム）</strong>は、ネイティブアプリ、ハイブリッドアプリ、モバイルWebアプリのテストを自動化するためのオープンソースフレームワークです。
            </p>
            <p>
              Appiumの最大の特徴は、<strong>「テストのためにアプリの再コンパイルやソースコード変更を求めない」</strong>という設計思想にあります。開発中のアプリコードにテスト専用のSDKを組み込む必要がなく、リリースビルドに近い状態のアプリに対してそのままテストを実行できます。
            </p>
            <p>
              Appiumプロジェクトは次の<strong>4つの哲学</strong>を掲げています。
            </p>
            <ol>
              <li><strong>アプリを再コンパイルしたり、修正したりしなくてもテストできること</strong>（ベンダー標準の自動化フレームワークを裏側で利用）</li>
              <li><strong>テストを書くために特定の言語やフレームワークに縛られないこと</strong>（WebDriverプロトコルによる多言語対応）</li>
              <li><strong>自動化APIの車輪の再発明をしないこと</strong>（W3C WebDriver仕様の拡張）</li>
              <li><strong>完全にオープンソースであること</strong></li>
            </ol>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>プラットフォーム</th>
                    <th>ドライバー名</th>
                    <th>対象OS</th>
                    <th>基盤テストフレームワーク</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Android</td>
                    <td><code>uiautomator2</code></td>
                    <td>Android 6.0 (API 23) 以降</td>
                    <td>Google UI Automator</td>
                  </tr>
                  <tr>
                    <td>Android（代替）</td>
                    <td><code>espresso</code></td>
                    <td>Android</td>
                    <td>Google Espresso（高速・ネイティブ専用）</td>
                  </tr>
                  <tr>
                    <td>iOS / iPadOS</td>
                    <td><code>xcuitest</code></td>
                    <td>iOS 9.3 以降 / tvOS / watchOS</td>
                    <td>Apple XCTest / XCUITest</td>
                  </tr>
                  <tr>
                    <td>macOS</td>
                    <td><code>mac2</code></td>
                    <td>macOS 10.15 以降</td>
                    <td>Apple XCTest</td>
                  </tr>
                  <tr>
                    <td>Windows</td>
                    <td><code>windows</code></td>
                    <td>Windows 10 / 11</td>
                    <td>Windows Application Driver</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="callout">
              <div className="callout-title">Seleniumとの関係</div>
              <p>
                AppiumはSeleniumのモバイル版と言えます。どちらも<strong>W3C WebDriver</strong>仕様に準拠しており、Seleniumを使ったことがあれば「ドライバーを起動して要素を探し、操作する」という基本的な流れはまったく同じ感覚で使えます。
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="architecture" className="section">
            <h2>
              <span className="num">3</span>Appiumのアーキテクチャを理解する
            </h2>
            <p>
              Appiumは<strong>クライアント・サーバーモデル</strong>で動作します。テストコードが直接端末を操作するのではなく、テストコードはHTTPリクエストをAppiumサーバーに送り、Appiumサーバーが各プラットフォームのテストフレームワーク（UI AutomatorやXCUITest）を介して端末を動かします。
            </p>
            <div className="mermaid-wrapper">
              <Mermaid chart={DIAGRAM_ARCH} />
            </div>
            <div className="fig-caption">図1: Appiumのクライアント・サーバーアーキテクチャ</div>
            <p>この構成には以下の役割分担があります。</p>
            <ul>
              <li>
                <strong>テストコード（クライアント）:</strong>
                Python、Java、JavaScript、Ruby、C#などの好きな言語で記述できます。Appiumクライアントライブラリを通じて、AppiumサーバーへHTTP経由でコマンド（W3C WebDriverエンドポイント）を送出します。
              </li>
              <li>
                <strong>Appiumサーバー:</strong>
                Node.jsで書かれたWebサーバーです。クライアントからのリクエストを受け取り、適切なプラットフォームドライバーに処理を委譲します。
              </li>
              <li>
                <strong>ドライバー（Drivers）:</strong>
                各プラットフォーム専用の拡張機能です。Android用の<code>uiautomator2</code>やiOS用の<code>xcuitest</code>などがあり、端末上にエージェント（Androidの<code>appium-uiautomator2-server.apk</code>、iOSの<code>WebDriverAgentRunner</code>）を常駐させて実機を操作します。
              </li>
              <li>
                <strong>プラグイン（Plugins）:</strong>
                Appium 2.0以降で導入された仕組みで、画像認識ロケーター（Imagesプラグイン）や要素の自動修復、ネットワークインターセプトなどの追加機能をサーバーに後付けできます。
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="version-history" className="section">
            <h2>
              <span className="num">4</span>Appiumのバージョンの歴史と現在地
            </h2>
            <p>
              Appiumを学ぶ際、ネット上の古い情報（Appium 1.x系）に惑わされないよう、バージョンの歴史と現在の立ち位置を把握しておくことが重要です。
            </p>
            <div className="mermaid-wrapper">
              <Mermaid chart={DIAGRAM_VERSION} />
            </div>
            <div className="fig-caption">図2: Appiumバージョンの変遷</div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>バージョン</th>
                    <th>リリース時期</th>
                    <th>ドライバー同梱</th>
                    <th>プロトコル</th>
                    <th>必須Node.js</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Appium 1.x</strong></td>
                    <td>2013年 〜 2023年（サポート終了）</td>
                    <td>全ドライバー同梱（巨大な単一パッケージ）</td>
                    <td>JSONWP / MJSONWP（一部W3C）</td>
                    <td>Node 12〜16系</td>
                  </tr>
                  <tr>
                    <td><strong>Appium 2.x</strong></td>
                    <td>2023年7月 GA 〜 2025年</td>
                    <td>分離。<code>appium driver install</code>で導入</td>
                    <td>完全W3C WebDriver準拠</td>
                    <td>Node 18+</td>
                  </tr>
                  <tr>
                    <td><strong>Appium 3.x</strong></td>
                    <td>2025年8月 GA（現在の最新系）</td>
                    <td>分離（2.x同様）。モジュール性の強化</td>
                    <td>完全W3C WebDriver準拠（非推奨全廃）</td>
                    <td>Node 20.19+ / 22.12+ / 24+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="callout">
              <div className="callout-title">Appium 1.xの情報に注意</div>
              <p>
                「<code>npm install -g appium</code>を実行したらすぐにAndroidテストが動いた」「<code>desired_capabilities</code>という引数を使う」といった解説記事は、すべてAppium 1.x時代の古い情報です。Appium 2.x/3.xでは、サーバーのインストール後に<strong>利用するドライバーを個別に追加するステップが必須</strong>であり、Capabilitiesも各言語の<strong>Optionsクラス</strong>を使用します。
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="setup" className="section">
            <h2>
              <span className="num">5</span>環境構築ステップバイステップ
            </h2>
            <p>
              Appiumの環境構築は、<strong>「Node.jsの導入 → Appiumサーバーの導入 → プラットフォームドライバーの追加 → ドクターによる環境検証 → Inspectorの導入 → サーバー起動 → テスト実行」</strong>という7つの明確なステップに沿って進めます。
            </p>
            <div className="mermaid-wrapper">
              <Mermaid chart={DIAGRAM_SETUP} />
            </div>
            <div className="fig-caption">図3: 環境構築の7つのステップ</div>

            <h3>ステップ1: Node.jsをインストールする</h3>
            <p>
              Appium 3.xは<strong>Node.js 20.19以降、22.12以降、または24以降</strong>が必要です（LTSバージョンの利用を強く推奨します）。ターミナルでバージョンを確認してください。
            </p>
            <div className="code-block">
              <div className="code-label">bash</div>
              <pre>
                <code>{`node -v
npm -v`}</code>
              </pre>
            </div>

            <h3>ステップ2: Appiumサーバーをインストールする</h3>
            <p>npmを使ってAppiumサーバーをグローバルにインストールします。</p>
            <div className="code-block">
              <div className="code-label">bash</div>
              <pre>
                <code>{`npm install -g appium
appium -v`}</code>
              </pre>
            </div>
            <p>
              <code>appium -v</code>を実行して、<code>3.x.x</code>（または最新バージョン）が表示されればサーバー本体のインストールは完了です。
            </p>

            <h3>ステップ3: プラットフォームドライバーを追加する</h3>
            <p>
              Appium 2.x以降、ドライバーはサーバー本体に含まれていません。自動化したいプラットフォームに応じたドライバーをコマンドで追加します。
            </p>
            <div className="code-block">
              <div className="code-label">bash</div>
              <pre>
                <code>{`# Androidを自動化する場合
appium driver install uiautomator2

# iOSを自動化する場合（macOSのみ）
appium driver install xcuitest

# インストール済みドライバーの一覧を確認
appium driver list --installed`}</code>
              </pre>
            </div>

            <h3>ステップ4: 環境をセルフチェックする</h3>
            <p>
              モバイルテストの環境構築で最もつまずきやすいのが、Android SDKやXcode、環境変数（<code>ANDROID_HOME</code>や<code>JAVA_HOME</code>）の設定漏れです。Appium公式のドクターツールを使って、必要な前提条件が揃っているかを自動検証します。
            </p>
            <div className="code-block">
              <div className="code-label">bash</div>
              <pre>
                <code>{`# uiautomator2 をインストールしている場合のみ
appium driver doctor uiautomator2

# xcuitest をインストールしている場合のみ（macOS）
appium driver doctor xcuitest`}</code>
              </pre>
            </div>
            <div className="callout">
              <div className="callout-title">Appium Doctorの変更点</div>
              <p>
                以前使われていた独立パッケージ<code>appium-doctor</code>は非推奨となり、現在は各ドライバーの拡張コマンド<code>appium driver doctor &lt;driver-name&gt;</code>に統合されました。必要なツールが欠けている場合は、コンソールに表示される解決策に従って設定を追加してください。
              </p>
            </div>

            <h3>ステップ5: Appium Inspectorを導入する</h3>
            <p>
              <strong>Appium Inspector</strong>は、接続中の端末画面をGUI上にミラーリング表示し、画面上のUI要素の階層構造や属性（ID、XPath、Accessibility ID等）をリアルタイムに調査できる必須の公式ツールです。
            </p>
            <p>
              公式GitHubリポジトリ（<code>appium/appium-inspector</code>）のリリースページから、お使いのOSに応じたデスクトップアプリ（macOSなら<code>.dmg</code>、Windowsなら<code>.exe</code>）をダウンロードしてインストールしてください。ブラウザから直接使えるWeb版（<code>inspector.appium.io</code>）も提供されています。
            </p>

            <h3>ステップ6・7: サーバーを起動し、最初のテストを動かす</h3>
            <p>
              ターミナルで<code>appium</code>コマンドを実行してサーバーを起動します。
            </p>
            <div className="code-block">
              <div className="code-label">bash</div>
              <pre>
                <code>appium --address 127.0.0.1</code>
              </pre>
            </div>
            <p>
              デフォルトでは<code>http://127.0.0.1:4723</code>でHTTPサーバーが待ち受けを開始します。この状態でInspectorやテストコードから接続を行います。
            </p>
          </section>

          {/* Section 6 */}
          <section id="capabilities" className="section">
            <h2>
              <span className="num">6</span>Capabilitiesを理解する
            </h2>
            <p>
              <strong>Capabilities（機能指定子）</strong>は、テストセッションを開始する際にクライアントからAppiumサーバーへ送る「セッション要求パラメータ」です。どのOSの、どのデバイスで、どのアプリを、どういう条件で起動するかを宣言します。
            </p>

            <h3>何が変わったのか</h3>
            <p>
              Appium 1.x時代はプレーンな辞書形式（JSON）で自由なキー名（<code>platformName</code>, <code>deviceName</code>, <code>app</code>等）を渡していましたが、W3C WebDriver仕様の完全適用に伴い、<strong>ベンダープレフィックス（<code>appium:</code>）が標準必須</strong>となりました。
            </p>
            <p>
              手動でプレフィックスを付ける手間やタイプミスを防ぐため、最新のクライアントライブラリではプラットフォーム専用の<strong>Optionsクラス</strong>（<code>UiAutomator2Options</code>や<code>XCUITestOptions</code>）を使用することが強く推奨されています。
            </p>

            <h3>コード例（Python）</h3>
            <div className="code-block">
              <div className="code-label">python</div>
              <pre>
                <code>{`from appium.options.android import UiAutomator2Options

options = UiAutomator2Options()
options.platform_name = "Android"
options.automation_name = "UiAutomator2"
options.device_name = "Pixel_7_API_34"
# avd と udid は排他。どちらか一方だけを指定する
# ここでは avd を有効にし、エミュレーターをAVD名から起動して使う
options.avd = "Pixel_7_API_34"
# 実機、または既に起動済みのエミュレーターに接続する場合は、
# 上の avd を指定せず、代わりに udid を指定する
# options.udid = "emulator-5554"   # adb devices で確認できるID
options.app = "/path/to/your/app.apk"
# テスト間の独立性を確保するため、アプリのデータを毎回初期化する
options.full_reset = True`}</code>
              </pre>
            </div>

            <h3>コード例（Java）</h3>
            <div className="code-block">
              <div className="code-label">java</div>
              <pre>
                <code>{`import io.appium.java_client.android.options.UiAutomator2Options;

UiAutomator2Options options = new UiAutomator2Options();
options.setPlatformName("Android");
options.setAutomationName("UiAutomator2");
options.setDeviceName("Pixel_7_API_34");
// エミュレーターを起動して使う場合は setAvd() でAVD名を指定する
options.setAvd("Pixel_7_API_34");
// 実機、または既に起動済みのエミュレーターに接続する場合は setUdid() を指定する
// options.setUdid("emulator-5554");   // adb devices で確認できるID
options.setApp("/path/to/your/app.apk");
// テスト間の独立性を確保するため、アプリのデータを毎回初期化する
options.setFullReset(true);`}</code>
              </pre>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>キー名</th>
                    <th>型</th>
                    <th>説明</th>
                    <th>指定例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>platformName</code></td>
                    <td>文字列</td>
                    <td>対象OS名（W3C標準。プレフィックス不要）</td>
                    <td><code>&quot;Android&quot;</code>, <code>&quot;iOS&quot;</code></td>
                  </tr>
                  <tr>
                    <td><code>appium:automationName</code></td>
                    <td>文字列</td>
                    <td>利用するドライバー名（必須）</td>
                    <td><code>&quot;UiAutomator2&quot;</code>, <code>&quot;XCUITest&quot;</code></td>
                  </tr>
                  <tr>
                    <td><code>appium:deviceName</code></td>
                    <td>文字列</td>
                    <td>デバイス表示名（ログや一部ドライバー参照用）</td>
                    <td><code>&quot;Pixel_7_API_34&quot;</code>, <code>&quot;iPhone 15&quot;</code></td>
                  </tr>
                  <tr>
                    <td><code>appium:udid</code></td>
                    <td>文字列</td>
                    <td>実機または特定エミュレーターの一意識別子</td>
                    <td><code>&quot;emulator-5554&quot;</code>, <code>&quot;00008101-00123...&quot;</code></td>
                  </tr>
                  <tr>
                    <td><code>appium:app</code></td>
                    <td>文字列</td>
                    <td>インストールするアプリファイルの絶対パス / URL</td>
                    <td><code>&quot;/path/to/app.apk&quot;</code>, <code>&quot;/path/to/app.app&quot;</code></td>
                  </tr>
                  <tr>
                    <td><code>appium:appPackage</code></td>
                    <td>文字列</td>
                    <td>起動するAndroidパッケージ名（既存アプリ起動時）</td>
                    <td><code>&quot;com.example.myapp&quot;</code></td>
                  </tr>
                  <tr>
                    <td><code>appium:appActivity</code></td>
                    <td>文字列</td>
                    <td>起動するAndroidメインActivity名</td>
                    <td><code>&quot;.MainActivity&quot;</code></td>
                  </tr>
                  <tr>
                    <td><code>appium:noReset</code></td>
                    <td>真偽値</td>
                    <td>セッション前後でアプリデータを消去しない</td>
                    <td><code>True</code> / <code>False</code></td>
                  </tr>
                  <tr>
                    <td><code>appium:fullReset</code></td>
                    <td>真偽値</td>
                    <td>アプリのアンインストールと再インストールを行う</td>
                    <td><code>True</code> / <code>False</code></td>
                  </tr>
                  <tr>
                    <td><code>appium:autoGrantPermissions</code></td>
                    <td>真偽値</td>
                    <td>初回起動時のシステム権限ダイアログを自動承認（Android）</td>
                    <td><code>True</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>対象デバイスの指定方法に注意する</h3>
            <p>
              初学者がよく陥るミスとして、「<code>device_name</code>にエミュレーターの名前を書いたのに、意図しないデバイスに接続されてしまう」という現象があります。実は<code>device_name</code>は主にログ用の表示名であり、複数の端末が接続されている場合にどの端末を使うかを決定づける識別子としては機能しません。
            </p>
            <ul>
              <li><strong>エミュレーターをAppiumに自動起動させたい場合:</strong> <code>avd</code>オプションにAVDマネージャーで作成した名前を指定します。</li>
              <li><strong>起動済みの特定デバイス（実機またはエミュレーター）に接続したい場合:</strong> <code>adb devices</code>コマンドで確認できる一意のシリアル番号を<code>udid</code>オプションに指定します。</li>
            </ul>

            <h3>リセット系capabilityとテストの独立性</h3>
            <p>
              自動テストでは「前のテストケースのログイン状態や保存データが次のテストに影響を与えない」という<strong>テストの独立性</strong>を保つことが鉄則です。Appiumにはリセットレベルを制御するいくつかの方法があります。
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Option / 設定</th>
                    <th>アプリデータ（DB/キャッシュ）</th>
                    <th>アプリのアンインストール</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>既定値（両方False）</td>
                    <td>セッション終了時にクリアされる</td>
                    <td>アンインストールされない（高速）</td>
                  </tr>
                  <tr>
                    <td><code>noReset = True</code></td>
                    <td>保持される（ログイン状態を維持してテストしたい場合）</td>
                    <td>アンインストールされない</td>
                  </tr>
                  <tr>
                    <td><code>fullReset = True</code></td>
                    <td>完全に消去される</td>
                    <td>セッション終了時にアンインストールされる（最もクリーンだが低速）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              テスト実行速度を向上させつつクリーンな状態を保ちたい場合は、毎回フル再インストールを行うのではなく、既定のリセット動作を利用するか、テスト終了時（teardown）にアプリデータをコマンドでクリアする手法が実務的です。
            </p>
            <div className="code-block">
              <div className="code-label">python</div>
              <pre>
                <code>{`# プロセス停止 → データ削除の順に実行する
driver.terminate_app(app_id)
driver.execute_script("mobile: clearApp", {"appId": app_id})`}</code>
              </pre>
            </div>
          </section>

          {/* Section 7 */}
          <section id="first-test" className="section">
            <h2>
              <span className="num">7</span>はじめてのテストを書く
            </h2>
            <p>
              環境が整ったら、最初の自動テストスクリプトを書いて動かしてみましょう。ここでは「アプリを起動し、ログイン画面のヘッダーテキストが表示されていることをアサートして終了する」という最小構成のスモークテストを作成します。
            </p>

            <h3>Python版（pytest + Appium-Python-Client）</h3>
            <div className="code-block">
              <div className="code-label">python</div>
              <pre>
                <code>{`import pytest
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


@pytest.fixture
def driver():
    options = UiAutomator2Options()
    options.platform_name = "Android"
    options.device_name = "Pixel_7_API_34"
    options.automation_name = "UiAutomator2"
    options.app = "/path/to/your/app.apk"
    # 対象デバイスを明示する（前述のとおりdevice_nameだけでは一意に決まらない）
    # エミュレーターをAppiumに起動させる場合:
    options.avd = "Pixel_7_API_34"
    # 実機や起動済みエミュレーターに接続する場合は、avdの代わりにudidを指定する:
    # options.udid = "emulator-5554"  # adb devices で確認したデバイスID

    drv = webdriver.Remote("http://127.0.0.1:4723", options=options)
    yield drv
    drv.quit()


def test_login_screen_shows_header(driver):
    wait = WebDriverWait(driver, 10)
    header = wait.until(
        EC.visibility_of_element_located((AppiumBy.ACCESSIBILITY_ID, "login_header"))
    )
    assert header.text == "ログイン"`}</code>
              </pre>
            </div>

            <h3>Java版（TestNG）</h3>
            <div className="code-block">
              <div className="code-label">java</div>
              <pre>
                <code>{`import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.*;

import java.net.URL;
import java.time.Duration;

public class LoginScreenTest {
    private AndroidDriver driver;

    @BeforeMethod
    public void setUp() throws Exception {
        UiAutomator2Options options = new UiAutomator2Options();
        options.setPlatformName("Android");
        options.setDeviceName("Pixel_7_API_34");
        options.setAutomationName("UiAutomator2");
        options.setApp("/path/to/your/app.apk");
        // 対象デバイスを明示する（deviceNameだけでは一意に決まらない）
        // エミュレーターをAppiumに起動させる場合:
        options.setAvd("Pixel_7_API_34");
        // 実機や起動済みエミュレーターに接続する場合は setAvd()の代わりにsetUdid()を使う:
        // options.setUdid("emulator-5554");  // adb devices で確認したデバイスID

        driver = new AndroidDriver(new URL("http://127.0.0.1:4723"), options);
    }

    @Test
    public void loginScreenShowsHeader() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement header = wait.until(
            ExpectedConditions.visibilityOfElementLocated(AppiumBy.accessibilityId("login_header"))
        );
        Assert.assertEquals(header.getText(), "ログイン");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}`}</code>
              </pre>
            </div>
            <div className="callout">
              <div className="callout-title">driver.quit()の重要性</div>
              <p>
                テストが成功しても失敗しても、<strong>必ず<code>tearDown</code>で<code>driver.quit()</code>を呼ぶこと</strong>が極めて重要です。これを怠ると、端末上のエージェントサーバー（UI Automator等）やポートフォワーディングのセッションが端末に残骸として残り続け、次回のテスト実行時に「セッションを作成できない」というトラブルの原因になります。
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="locators" className="section">
            <h2>
              <span className="num">8</span>要素を見つけるロケーター戦略
            </h2>
            <p>
              Appiumのテストが壊れる最大の原因は、多くの場合「不安定なロケーター」です。著名なAppiumプロジェクトの開発者であるJonathan
              Lipps氏も、Appiumテストが不安定になる要因の多くは、フレームワーク自体の問題ではなく、待機処理の不備や壊れやすいロケーターの選び方に起因すると指摘しています。ロケーター戦略の優先順位を理解しておくことが、保守しやすいテストへの近道です。
            </p>
            <div className="mermaid-wrapper">
              <Mermaid chart={DIAGRAM_LOCATOR} />
            </div>
            <div className="fig-caption">図4: ロケーター選定の意思決定フロー</div>

            <h3>主なロケーター戦略の比較</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ロケーター戦略</th>
                    <th>対応プラットフォーム</th>
                    <th>特徴・推奨度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ID（resource-id）</td>
                    <td>Android</td>
                    <td>ネイティブのID属性を利用。高速かつ安定。最優先候補。</td>
                  </tr>
                  <tr>
                    <td>Accessibility ID</td>
                    <td>Android / iOS</td>
                    <td>
                      アクセシビリティラベルを利用。クロスプラットフォームで同じ書き方ができ、テストコードの再利用性が高い。最優先候補。
                    </td>
                  </tr>
                  <tr>
                    <td><code>-android uiautomator</code></td>
                    <td>Android</td>
                    <td>
                      UiAutomatorのUiSelectorをそのまま文字列で渡せる。複雑な条件での絞り込みに強いが、UI階層や表示文言の変更に追随しづらいレガシーな選択肢。まずはresource-idやaccessibility
                      idを付与してもらう方向で解決し、それが難しい場合の代替手段とする。
                    </td>
                  </tr>
                  <tr>
                    <td><code>-ios predicate string</code></td>
                    <td>iOS</td>
                    <td>
                      NSPredicateベースの柔軟な条件指定。iOS版XPathの代替として推奨される。
                    </td>
                  </tr>
                  <tr>
                    <td><code>-ios class chain</code></td>
                    <td>iOS</td>
                    <td>
                      XPathとpredicate stringのハイブリッド的な記法。階層的な問い合わせをXPathより高速に処理できる。
                    </td>
                  </tr>
                  <tr>
                    <td>ClassName</td>
                    <td>Android / iOS</td>
                    <td>
                      UI部品の型（ボタン、テキストフィールドなど）で絞り込む。単独では要素を一意に特定しにくいことが多い。
                    </td>
                  </tr>
                  <tr>
                    <td>XPath</td>
                    <td>Android / iOS</td>
                    <td>
                      最も柔軟だが、DOM階層のわずかな変更にも弱く、実行速度も他の戦略より遅い傾向がある。他の戦略で特定できない場合の最終手段とするのが定石。
                    </td>
                  </tr>
                  <tr>
                    <td>Image（テンプレート画像）</td>
                    <td>Android / iOS</td>
                    <td>
                      <strong>Appium 2.x以降ではドライバー標準の機能ではなく、別途Imagesプラグインの導入が必要</strong>（下記参照）。他の戦略が使えない特殊なケース向けで、解像度やUIの見た目の変化に弱くテストが不安定になりやすい。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Imageロケーターを使う場合のみ必要な追加セットアップ</h3>
            <p>
              <code>-image</code>ロケーター戦略は、Appium 2.xでコア機能からプラグインとして分離されました。<code>uiautomator2</code>や<code>xcuitest</code>といったドライバーを入れただけでは利用できず、<code>-image</code>を使うテストがある場合に限り、次の追加セットアップを行います。他のロケーター戦略しか使わないのであれば、前章のドライバー導入手順だけで十分です。
            </p>
            <div className="code-block">
              <div className="code-label">bash</div>
              <pre>
                <code>{`# 1. Imagesプラグインをインストールする（-image を使う場合のみ）
appium plugin install images

# 2. インストール済みプラグインを確認する
appium plugin list --installed

# 3. プラグインを有効にしてサーバーを起動する（認証を持たないため接続元をループバックに限定する）
appium --use-plugins=images --address 127.0.0.1`}</code>
              </pre>
            </div>
            <p>
              プラグインは明示的に有効化しないと読み込まれません。手順3の<code>--use-plugins=images</code>を忘れると、テスト実行時に<code>-image</code>ロケーターが未知の戦略として拒否されます。複数のプラグインを同時に使う場合は<code>--use-plugins=images,other-plugin</code>のようにカンマ区切りで指定します。指定できるのは<code>appium plugin install</code>でインストール済みのプラグインだけです。
            </p>
            <p>
              要素を実際に調べる際は、前章で紹介したAppium Inspectorを使い、画面をキャプチャしながらresource-idやaccessibility
              idの有無を確認するのが最も効率的です。アプリ開発チームと連携し、主要なUI部品にaccessibility
              idやresource-idを付与してもらう「テスト容易性の作り込み」も、長期的には非常に効果の高い施策です。
            </p>
          </section>

          {/* Section 9 */}
          <section id="pom" className="section">
            <h2>
              <span className="num">9</span>Page Object Modelを実践する
            </h2>
            <p>
              テストが増えてくると、「同じ画面のロケーターが複数のテストファイルに散らばる」という問題が起きます。あるボタンのIDがアプリの改修で変わっただけで、数十個のテストファイルを直さなければならない、という状況です。これを防ぐデザインパターンがPage Object Model（POM）です。
            </p>
            <p>
              POMの考え方はシンプルです。画面（ページ）ごとに1つのクラスを作り、その画面に関するロケーターと操作メソッドをそのクラスの中に閉じ込めます。テストコード側は「ログインページでIDとパスワードを入力してログインボタンを押す」という意図だけを書き、実際にどのロケーターでどう操作するかはPage Objectクラスに任せます。
            </p>
            <div className="mermaid-wrapper">
              <Mermaid chart={DIAGRAM_POM} />
            </div>
            <div className="fig-caption">図5: Page Object Modelのアーキテクチャ</div>

            <h3>コード例（Python）</h3>
            <div className="code-block">
              <div className="code-label">python</div>
              <pre>
                <code>{`from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class LoginPage:
    ID_FIELD = (AppiumBy.ACCESSIBILITY_ID, "login_id_field")
    PASSWORD_FIELD = (AppiumBy.ACCESSIBILITY_ID, "login_password_field")
    LOGIN_BUTTON = (AppiumBy.ACCESSIBILITY_ID, "login_submit_button")

    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)

    def enter_id(self, user_id: str):
        field = self.wait.until(EC.visibility_of_element_located(self.ID_FIELD))
        field.send_keys(user_id)
        return self

    def enter_password(self, password: str):
        field = self.wait.until(EC.visibility_of_element_located(self.PASSWORD_FIELD))
        field.send_keys(password)
        return self

    def tap_login(self):
        button = self.wait.until(EC.element_to_be_clickable(self.LOGIN_BUTTON))
        button.click()
        return self`}</code>
              </pre>
            </div>
            <p>テストコード側は次のようにシンプルになります。</p>
            <div className="code-block">
              <div className="code-label">python</div>
              <pre>
                <code>{`def test_successful_login(driver):
    login_page = LoginPage(driver)
    login_page.enter_id("demo_user").enter_password("demo_pass").tap_login()`}</code>
              </pre>
            </div>
            <p>POMを導入する効果は次の3点に集約されます。</p>
            <ol>
              <li><strong>保守性</strong>：UI変更があってもPage Objectクラス1箇所を直せばよい</li>
              <li><strong>可読性</strong>：テストコードが「業務シナリオ」の記述に集中できる</li>
              <li><strong>再利用性</strong>：複数のテストシナリオで同じ画面操作を使い回せる</li>
            </ol>
            <p>
              また、Android/iOSで同じユーザーシナリオを検証する場合、Page Objectの内部実装（ロケーターの種類など）だけをプラットフォームごとに分岐させ、テストシナリオ本体はプラットフォームに依存しないコードとして共通化する、という設計も広く採用されています。
            </p>
          </section>

          {/* Section 10 */}
          <section id="waits" className="section">
            <h2>
              <span className="num">10</span>待機戦略でテストを安定させる
            </h2>
            <p>
              モバイルアプリはネットワーク通信やアニメーションを伴うことが多く、画面遷移や要素の表示に時間差が生じます。この時間差を正しく吸収できないと、テストは「たまに失敗する」不安定な状態（Flaky Test）に陥ります。
            </p>
            <div className="mermaid-wrapper">
              <Mermaid chart={DIAGRAM_WAIT} />
            </div>
            <div className="fig-caption">図6: 待機戦略の判断フロー</div>

            <h3>Implicit WaitとExplicit Waitの違い</h3>
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
                    <td>セッション全体に一律で適用される</td>
                    <td>個々の要素・条件ごとに個別指定できる</td>
                  </tr>
                  <tr>
                    <td>柔軟性</td>
                    <td>低い（すべての検索に同じ時間がかかる）</td>
                    <td>高い（可視性・クリック可能性など条件を選べる）</td>
                  </tr>
                  <tr>
                    <td>向いている場面</td>
                    <td>アプリ全体でおおよそ同じ応答速度が期待できる小規模なテスト</td>
                    <td>画面ごとに読み込み時間が大きく異なる実務的なテストスイート</td>
                  </tr>
                  <tr>
                    <td>注意点</td>
                    <td>
                      Explicit Waitと併用すると待機時間が予測できなくなるため、基本的にどちらか一方に統一する
                    </td>
                    <td>Explicit Waitを使う場合はImplicit Waitを0にしておくのが定石</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              現場のノウハウとして広く共有されているのが、「固定の<code>sleep</code>は使わない」という原則です。<code>sleep(5)</code>のようなハードコードされた待機は、通信が速いときには無駄に時間を浪費し、通信が遅いときにはタイムアウトしてテストが失敗する、という両方向のデメリットしかありません。Explicit Waitで「特定の状態になるまで、最大N秒だけポーリングする」という書き方にすることで、平均実行時間の短縮とテストの安定化を同時に達成できます。
            </p>

            <h3>Explicit Waitのコード例（Python）</h3>
            <div className="code-block">
              <div className="code-label">python</div>
              <pre>
                <code>{`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from appium.webdriver.common.appiumby import AppiumBy

wait = WebDriverWait(driver, 15, poll_frequency=0.5)
element = wait.until(
    EC.visibility_of_element_located((AppiumBy.ACCESSIBILITY_ID, "checkout_button"))
)
element.click()`}</code>
              </pre>
            </div>
            <p>
              ImplicitとExplicitのWaitを同一セッション内で混在させると、「Explicit Waitのポーリングのたびに、内部的なfindElement呼び出しにImplicit Waitの待機時間が上乗せされる」といった、直感に反する遅延が発生することが実務でも報告されています。どちらか一方の戦略に統一することを強くおすすめします。
            </p>
          </section>

          {/* Section 11 */}
          <section id="gestures" className="section">
            <h2>
              <span className="num">11</span>ジェスチャー操作を自動化する
            </h2>
            <p>
              スワイプ・スクロール・ロングタップ・ピンチといったタッチジェスチャーは、モバイルアプリのテストにおいて避けて通れません。Appiumは、W3C WebDriver仕様で定義された「Actionsクラス」（複数の入力ポインターを組み合わせて任意のジェスチャーを合成できる低レベルAPI）と、各ドライバーが独自に提供する<code>mobile:</code>名前空間の高レベルコマンドの、2種類の方法でジェスチャーを実現します。
            </p>
            <p>
              初学者には、まず各ドライバー標準の<code>mobile:</code>コマンドを使うことをおすすめします。W3C Actions APIは非常に柔軟な反面、複雑なジェスチャーを一から組み立てる必要があり、学習コストが高いためです。
            </p>

            <h3>代表的な <code>mobile:</code> ジェスチャーコマンド</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ジェスチャー</th>
                    <th>Android（UiAutomator2）</th>
                    <th>iOS（XCUITest）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>タップ</td>
                    <td><code>mobile: clickGesture</code></td>
                    <td>標準の<code>click()</code>で代用可能</td>
                  </tr>
                  <tr>
                    <td>ロングプレス</td>
                    <td><code>mobile: longClickGesture</code></td>
                    <td><code>mobile: touchAndHold</code></td>
                  </tr>
                  <tr>
                    <td>スワイプ</td>
                    <td><code>mobile: swipeGesture</code></td>
                    <td><code>mobile: swipe</code></td>
                  </tr>
                  <tr>
                    <td>スクロール</td>
                    <td><code>mobile: scrollGesture</code></td>
                    <td><code>mobile: scroll</code></td>
                  </tr>
                  <tr>
                    <td>ドラッグ＆ドロップ</td>
                    <td><code>mobile: dragGesture</code></td>
                    <td><code>mobile: dragFromToForDuration</code></td>
                  </tr>
                  <tr>
                    <td>ピンチ（拡大縮小）</td>
                    <td>
                      <code>mobile: pinchOpenGesture</code> / <code>mobile: pinchCloseGesture</code>
                    </td>
                    <td><code>mobile: pinch</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>コード例（Python・Android）</h3>
            <div className="code-block">
              <div className="code-label">python</div>
              <pre>
                <code>{`driver.execute_script("mobile: scrollGesture", {
    "left": 100, "top": 300, "width": 200, "height": 800,
    "direction": "down",
    "percent": 1.0,
})

driver.execute_script("mobile: swipeGesture", {
    "left": 100, "top": 800, "width": 200, "height": 400,
    "direction": "up",
    "percent": 0.75,
})`}</code>
              </pre>
            </div>
            <p>
              <code>left</code>・<code>top</code>・<code>width</code>・<code>height</code>でジェスチャーを行う矩形領域を指定し、<code>direction</code>と<code>percent</code>（その領域に対する移動量の割合）で動きを制御する、という設計になっています。座標を直接ハードコードするのではなく、対象要素の<code>elementId</code>を渡すオプションも用意されており、画面サイズの異なる端末間でも同じロジックを再利用しやすくなっています。
            </p>
            <p>
              W3C Actions APIは、ドライバー標準のジェスチャーコマンドでは表現できない特殊な複合入力（マルチタッチでの複雑な同時操作など）が必要になったときの、より汎用的な選択肢として押さえておくとよいでしょう。
            </p>
          </section>

          {/* Stubs for Category 4 (Sections 12-17) */}
          <section id="environments" className="section">
            <h2>
              <span className="num">12</span>実機・エミュレーター・クラウドデバイスファームでの実行
            </h2>
            <p>（実装準備中）</p>
          </section>

          <section id="cicd" className="section">
            <h2>
              <span className="num">13</span>並列実行とCI/CD統合
            </h2>
            <p>（実装準備中）</p>
          </section>

          <section id="anti-patterns" className="section">
            <h2>
              <span className="num">14</span>よくあるアンチパターンと落とし穴
            </h2>
            <p>（実装準備中）</p>
          </section>

          <section id="checklist" className="section">
            <h2>
              <span className="num">15</span>ベストプラクティスチェックリスト
            </h2>
            <p>（実装準備中）</p>
          </section>

          <section id="summary" className="section">
            <h2>
              <span className="num">16</span>まとめ
            </h2>
            <p>（実装準備中）</p>
          </section>

          <section id="references" className="section">
            <h2>
              <span className="num">17</span>参考文献と情報源
            </h2>
            <p>（実装準備中）</p>
          </section>
        </div>
      </main>
    </div>
  );
}
