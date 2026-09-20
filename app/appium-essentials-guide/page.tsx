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

          {/* Stubs for Category 2 - 4 (Will be incrementally implemented in upcoming steps) */}
          <section id="setup" className="section">
            <h2>
              <span className="num">5</span>環境構築ステップバイステップ
            </h2>
            <p>（実装準備中）</p>
          </section>

          <section id="capabilities" className="section">
            <h2>
              <span className="num">6</span>Capabilitiesを理解する
            </h2>
            <p>（実装準備中）</p>
          </section>

          <section id="first-test" className="section">
            <h2>
              <span className="num">7</span>はじめてのテストを書く
            </h2>
            <p>（実装準備中）</p>
          </section>

          <section id="locators" className="section">
            <h2>
              <span className="num">8</span>要素を見つけるロケーター戦略
            </h2>
            <p>（実装準備中）</p>
          </section>

          <section id="pom" className="section">
            <h2>
              <span className="num">9</span>Page Object Modelを実践する
            </h2>
            <p>（実装準備中）</p>
          </section>

          <section id="waits" className="section">
            <h2>
              <span className="num">10</span>待機戦略でテストを安定させる
            </h2>
            <p>（実装準備中）</p>
          </section>

          <section id="gestures" className="section">
            <h2>
              <span className="num">11</span>ジェスチャー操作を自動化する
            </h2>
            <p>（実装準備中）</p>
          </section>

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
