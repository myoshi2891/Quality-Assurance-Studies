import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './cypress-beginner-guide.css';

export const metadata: Metadata = {
  title: 'Cypress入門ガイド：初学者のためのステップバイステップ解説 | QA Studies',
  description:
    'Cypressの基本概念、アーキテクチャ、Playwright/Seleniumとの違い、インストール、E2E・コンポーネントテスト、セレクター戦略、CI/CD連携までを網羅した初学者向け完全学習ガイド。',
};

const DIAGRAM_1 = `flowchart TB
    subgraph SEL["従来型ツール (例: Selenium)"]
        direction LR
        A1["テストコード"] --> A2["WebDriverプロトコル通信"]
        A2 --> A3["ブラウザを外部から遠隔操作"]
    end
    subgraph CY["Cypress"]
        direction LR
        B1["Node.jsサーバープロセス"] <--> B2["ブラウザ内で動くテストランナー"]
        B2 --> B3["アプリケーションと同じ実行ループで動作"]
    end`;

const DIAGRAM_2 = `flowchart LR
    A["1. システム要件を確認"] --> B["2. npm install cypress --save-dev"]
    B --> C["3. npx cypress open で起動"]
    C --> D["4. E2E または Component を選択しテストを書き始める"]`;

const DIAGRAM_3 = `flowchart LR
    A["1. cy.visit() でページ訪問"] --> B["2. cy.get() / cy.contains() で要素を検索"]
    B --> C["3. .click() や .type() で操作"]
    C --> D["4. .should() でアサーション"]`;

const DIAGRAM_4 = `flowchart TD
    A["before (describe内で一度だけ実行)"] --> B["beforeEach (各itの直前に実行)"]
    B --> C["it (個々のテスト本体)"]
    C --> D["afterEach (各itの直後に実行)"]
    D --> E{"未実行のitが残っている？"}
    E -->|"はい"| B
    E -->|"いいえ"| F["after (describe内で一度だけ実行)"]`;

const DIAGRAM_5 = `flowchart TD
    A["何をテストしたいか？"] --> B{"アプリ全体としての統合された挙動を検証したい？"}
    B -->|"はい"| C["E2Eテストを選択 (cy.visit)"]
    B -->|"いいえ"| D{"個々のUIコンポーネント単体を素早く検証したい？"}
    D -->|"はい"| E["コンポーネントテストを選択 (cy.mount)"]
    D -->|"いいえ"| F["両方を組み合わせて使うのが一般的"]`;

export default function CypressBeginnerGuidePage() {
  return (
    <div className="cypress-beginner-page">
      <NavBar />

      <main className="main-content">
        <div className="content-inner">
          <header className="doc-header">
            <div className="doc-eyebrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
              <span>E2E / COMPONENT TESTING GUIDE</span>
            </div>
            <h1>Cypress入門ガイド：初学者のためのステップバイステップ解説</h1>
            <p className="doc-lede">
              本ガイドは、Cypress公式ドキュメント（
              <a
                href="https://docs.cypress.io/app/get-started/why-cypress"
                target="_blank"
                rel="noopener noreferrer"
              >
                Why Cypress?
              </a>
              を中心に）および
              <a
                href="https://www.cypress.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                cypress.io
              </a>
              公式サイト、比較対象としてPlaywright公式サイトの情報をもとに、2026年7月時点の最新情報として作成しています。各セクションの末尾に参照元URLを明記しているので、詳細を確認したい場合はそちらもあわせてご覧ください。
            </p>
          </header>

          {/* ============ 1 ============ */}
          <section>
            <h2 id="sec-1">
              <span className="sec-badge">01</span>
              <span>Cypressとは何か</span>
            </h2>

            <h3>1-1. 概要</h3>
            <p>
              Cypressは、モダンなWebアプリケーションを開発するチームのための「品質プラットフォーム」です。E2Eテスト、コンポーネントテスト、アクセシビリティチェック、そしてテストカバレッジの可視化までを一つのワークフローにまとめており、ローカル環境でもCI環境でも同じ仕組みで動作します。
            </p>
            <p>
              多くのチームは「フロントエンドのテストをもっと良い方法で書きたい」という理由でCypressを使い始めますが、チームやアプリケーションが成長するにつれて、単なるテストツール以上の役割を果たすようになるのが特徴です。1人の開発者が最初のテストを書く場面から、QAチームが数千のテストスペックを管理する場面、そしてリリース判断を行うエンジニアリングリーダーまで、同じプラットフォーム上でカバーできます。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/why-cypress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why Cypress? - Cypress Documentation
                </a>
              </span>
            </div>

            <h3>1-2. Cypressが提供する4つの製品</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>製品</th>
                    <th>概要</th>
                    <th>位置づけ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Cypress App</strong></td>
                    <td>テストの作成・実行を行う、無料かつオープンソースのローカルアプリ</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td><strong>Cypress Cloud</strong></td>
                    <td>テスト結果の記録・可視化・分析を行う有料サービス</td>
                    <td>有料</td>
                  </tr>
                  <tr>
                    <td><strong>UI Coverage</strong></td>
                    <td>アプリの各ページ・コンポーネントに対するテストカバレッジを可視化するプレミアム機能</td>
                    <td>プレミアム</td>
                  </tr>
                  <tr>
                    <td><strong>Cypress Accessibility</strong></td>
                    <td>アクセシビリティ上の問題を自動検出するプレミアム機能</td>
                    <td>プレミアム</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Cypress AppはGitHub上でオープンソースとして公開されており、テストコード自体は特定の有料サービスに縛られることなく単独で動作します。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/why-cypress#Products"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why Cypress? - Products
                </a>
              </span>
            </div>

            <h3>1-3. Cypressのミッション</h3>
            <p>
              Cypressチームは「実際に機能するテストプロセス」を作ることをミッションに掲げています。ドキュメントは「何を」だけでなく「なぜ」を理解できるように書かれるべきだという考え方に基づいており、オープンソースエコシステムを大切にする姿勢を明言しています。テストコードは特定の有料サービスに結合されることなく、常に単独で動作するように設計されています。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/why-cypress#Our-mission"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why Cypress? - Our mission
                </a>
              </span>
            </div>
          </section>

          {/* ============ 2 ============ */}
          <section>
            <h2 id="sec-2">
              <span className="sec-badge">02</span>
              <span>なぜCypressが選ばれるのか</span>
            </h2>

            <h3>2-1. チームの成長段階に合わせた使い方</h3>
            <p>
              Cypressの使い方は、チームの成熟度に応じて段階的に広がっていく設計になっています。
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>段階</th>
                    <th>やること</th>
                    <th>得られるもの</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. 導入期</td>
                    <td>Cypress Appをインストールし、開発と同時にテストを書く</td>
                    <td>Time Travel（実行状態のスナップショット）、自動待機、Studio AIによるアサーション提案</td>
                  </tr>
                  <tr>
                    <td>2. CI移行期</td>
                    <td>Cypress CloudにテストをレコードしCIパイプラインに組み込む</td>
                    <td>Test Replay、フレーキーテスト検知、Branch Review、Smart Orchestration</td>
                  </tr>
                  <tr>
                    <td>3. スケール期</td>
                    <td>UI CoverageやCypress Accessibilityを導入</td>
                    <td>テストカバレッジの可視化、アクセシビリティ問題の継続的検出</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/why-cypress#How-Cypress-grows-with-your-team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why Cypress? - How Cypress grows with your team
                </a>
              </span>
            </div>

            <h3>2-2. Cypress Appの主な機能</h3>
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
                    <td>Time Travel</td>
                    <td>テスト実行中の各コマンドのスナップショットを記録し、実行後にホバーして状態を確認できる</td>
                  </tr>
                  <tr>
                    <td>Debuggability</td>
                    <td>ブラウザのDevToolsから直接デバッグでき、読みやすいエラーメッセージとスタックトレースを提供</td>
                  </tr>
                  <tr>
                    <td>Automatic Waiting</td>
                    <td>コマンドやアサーションの完了を自動的に待つため、waitやsleepを手動で書く必要がない</td>
                  </tr>
                  <tr>
                    <td>Spies, Stubs, and Clocks</td>
                    <td>関数やサーバーレスポンス、タイマーの挙動を検証・制御できる</td>
                  </tr>
                  <tr>
                    <td>Network Traffic Control</td>
                    <td>サーバーを介さずにネットワーク通信をスタブ化・制御できる</td>
                  </tr>
                  <tr>
                    <td>Consistent Results</td>
                    <td>SeleniumやWebDriverを使わない独自アーキテクチャにより、flake（不安定な失敗）の少ない一貫した結果を得られる</td>
                  </tr>
                  <tr>
                    <td>Cypress Studio / Studio AI</td>
                    <td>アプリ内の操作を記録してテストを自動生成し、Studio AIがアサーションを提案する</td>
                  </tr>
                  <tr>
                    <td>Cross Browser Testing</td>
                    <td>Firefox、Chrome系ブラウザ（Edge・Electron含む）でローカル・CI双方で実行可能</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/why-cypress#Features"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why Cypress? - Features
                </a>
              </span>
            </div>

            <h3>2-3. アーキテクチャ図解</h3>
            <p>
              Cypressの最大の特徴は「ブラウザの外側からリモート操作する」のではなく「アプリケーションと同じ実行ループの中で動作する」という点です。裏側にはNode.jsのサーバープロセスがあり、Cypress本体と常に通信・同期しながらタスクを分担しています。これにより、ブラウザ内外の出来事をCypressがすべて把握でき、他のツールよりも一貫性の高い結果を実現しています。
            </p>

            <div className="mermaid-wrap">
              <Mermaid chart={DIAGRAM_1} />
            </div>

            <p>
              この「ブラウザ内で動く」という設計により、window・document・DOM要素・アプリケーションのインスタンス・タイマー・Service Workerなど、あらゆるオブジェクトへネイティブにアクセスできます。また、<code>cy.session()</code>によってログイン状態をキャッシュできるため、テストごとにログイン画面を経由する必要がなくなり実行時間を短縮できます。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/why-cypress#Key-Differences"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why Cypress? - Key Differences（Architecture / Native access / Shortcuts）
                </a>
              </span>
            </div>
          </section>

          {/* ============ 3 ============ */}
          <section>
            <h2 id="sec-3">
              <span className="sec-badge">03</span>
              <span>Cypress vs Selenium vs Playwright：アーキテクチャの違い</span>
            </h2>

            <h3>3-1. 実行モデルの比較</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>Cypress</th>
                    <th>Selenium</th>
                    <th>Playwright</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>アーキテクチャ</td>
                    <td>ブラウザ内実行（同一ループ）</td>
                    <td>WebDriverプロトコル（外部から遠隔操作）</td>
                    <td>CDP/独自のWebSocket接続（外部高速操作）</td>
                  </tr>
                  <tr>
                    <td>実行モデル</td>
                    <td>ブラウザと同じ実行ループ内で動作。裏側のNode.jsプロセスと常時通信</td>
                    <td>WebDriverプロトコル経由でブラウザを外部から遠隔操作</td>
                    <td>Node.jsプロセスからブラウザを外部制御し、非同期（async/await）で操作を待つ</td>
                  </tr>
                  <tr>
                    <td>対応ブラウザ</td>
                    <td>Chrome系（Chrome・Edge・Electron）、Firefox、WebKit（実験的）</td>
                    <td>事実上すべての主要ブラウザ（WebDriver実装があるもの）</td>
                    <td>Chromium・Firefox・WebKit</td>
                  </tr>
                  <tr>
                    <td>ブラウザの取得方法</td>
                    <td>マシンに既にインストールされているブラウザを使用し、Cypress自体はブラウザバイナリをダウンロードしない</td>
                    <td>別途WebDriverと対応ブラウザが必要</td>
                    <td>Playwright専用にビルドされたブラウザバイナリを自前でダウンロード・管理する</td>
                  </tr>
                  <tr>
                    <td>待機処理</td>
                    <td>コマンド・アサーションが自動的にリトライ待機する（auto-wait）</td>
                    <td>明示的な待機（WebDriverWaitなど）が基本的に必要</td>
                    <td>要素がアクション可能になるまで自動待機し、アサーションも自動リトライする</td>
                  </tr>
                  <tr>
                    <td>コードの書き方</td>
                    <td>コマンドをキューに積んで連鎖させる方式。async/awaitは不要</td>
                    <td>各言語の同期/非同期APIに依存</td>
                    <td>async/awaitを用いた非同期コード</td>
                  </tr>
                  <tr>
                    <td>テストランナー</td>
                    <td>Mocha + Chaiをベースに構築</td>
                    <td>各言語のテストフレームワークに依存（JUnit、pytestなど）</td>
                    <td>Playwright独自のテストランナー（Playwright Test）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/why-cypress#Architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why Cypress? - Architecture
                </a>
                、
                <a
                  href="https://docs.cypress.io/app/references/trade-offs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trade-offs
                </a>
                、
                <a
                  href="https://docs.cypress.io/app/guides/migration/playwright-to-cypress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Migrate from Playwright to Cypress
                </a>
                、
                <a
                  href="https://github.com/microsoft/playwright"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Playwright（GitHub公式）
                </a>
              </span>
            </div>

            <h3>3-2. CypressとPlaywrightの詳細比較</h3>
            <p>
              ユーザーの要望に応じて、Cypress公式の移行ガイドとPlaywright公式情報をもとに、より実務的な観点で両者を比較します。
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>Cypress</th>
                    <th>Playwright</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>設定ファイル</td>
                    <td><code>cypress.config.ts</code>（E2E固有の設定は<code>e2e</code>オブジェクト配下）</td>
                    <td><code>playwright.config.ts</code>（<code>use</code>ブロックがフラットな構造）</td>
                  </tr>
                  <tr>
                    <td>テスト定義の書き方</td>
                    <td><code>describe()</code> / <code>it()</code>（Mocha由来）</td>
                    <td><code>test.describe()</code> / <code>test()</code></td>
                  </tr>
                  <tr>
                    <td>ロケーター取得の考え方</td>
                    <td><code>data-*</code>属性を用いたセレクターを推奨</td>
                    <td><code>getByRole()</code>・<code>getByLabel()</code>・<code>getByTestId()</code>などロールベースのロケーターを標準搭載</td>
                  </tr>
                  <tr>
                    <td>並列実行</td>
                    <td>Cypress Cloudの「Smart Orchestration」が過去の実行時間をもとに動的にスペックを分配</td>
                    <td><code>--workers</code>によるローカル並列化と、<code>--shard</code>による手動シャーディング</td>
                  </tr>
                  <tr>
                    <td>デバッグ用リプレイ機能</td>
                    <td>Cypress CloudのTest Replayでネットワーク・コンソール・DOMスナップショットを再生</td>
                    <td><code>--trace on</code>で記録し、Trace Viewerで確認</td>
                  </tr>
                  <tr>
                    <td>コンポーネントテスト</td>
                    <td>React・Angular・Vue・Svelte向けに公式マウントライブラリを提供し、Vite・Webpack双方に対応</td>
                    <td>React・Vue・Svelte向けの実験的パッケージを提供し、Viteのみに対応</td>
                  </tr>
                  <tr>
                    <td>複数タブ・ウィンドウ操作</td>
                    <td>標準では1ブラウザのみ制御可能（複数タブは<code>@cypress/puppeteer</code>プラグインで対応）</td>
                    <td><code>page.context()</code>など複数ページ・複数コンテキストをネイティブにサポート</td>
                  </tr>
                  <tr>
                    <td>クロスオリジンナビゲーション</td>
                    <td>1テストにつき1つのスーパードメインが基本。別オリジンへは<code>cy.origin()</code>で明示的にスコープを切る必要がある</td>
                    <td>通常のページ遷移として扱いやすい</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/guides/migration/playwright-to-cypress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Migrate from Playwright to Cypress: Complete Migration Guide
                </a>
                、
                <a
                  href="https://docs.cypress.io/app/references/trade-offs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trade-offs
                </a>
                、
                <a
                  href="https://github.com/microsoft/playwright"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Playwright（GitHub公式）
                </a>
                、
                <a
                  href="https://playwright.dev/docs/browsers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Browsers | Playwright
                </a>
              </span>
            </div>

            <h3>3-3. どちらを選ぶべきか</h3>
            <div className="callout callout-info">
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
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8l.01 0" />
                <path d="M11 12l1 0l0 4l1 0" />
              </svg>
              <p>
                どちらのツールも活発に開発が続く高品質なE2Eテストフレームワークであり、優劣を一概に決められるものではありません。一般的な目安として、<strong>Cypress</strong>はブラウザ内部の状態（DOM・アプリのインスタンス・タイマーなど）に直接アクセスしてスタブ化したい場合やTime Travelによる視覚的なデバッグ体験を重視する場合に、<strong>Playwright</strong>は複数タブ・複数ブラウザコンテキストを頻繁に扱う場合やChromium・Firefox・WebKitを同一設定で厳密に固定したい場合に向いています。実際に両方を試してからチームに合う方を選ぶのが確実です。
              </p>
            </div>
          </section>

          {/* ============ 4 ============ */}
          <section>
            <h2 id="sec-4">
              <span className="sec-badge">04</span>
              <span>インストール手順</span>
            </h2>

            <h3>4-1. システム要件</h3>
            <p>インストール前に、以下の要件を満たしているか確認します。</p>

            <p><strong>OS要件</strong></p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>OS</th>
                    <th>バージョン</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>macOS</td>
                    <td>13.5以上（Intel／Apple Silicon 64bit）</td>
                  </tr>
                  <tr>
                    <td>Linux</td>
                    <td>Ubuntu 22.04以上、Debian 11以上、Fedora 43以上（x64／arm64）</td>
                  </tr>
                  <tr>
                    <td>Windows</td>
                    <td>10・11（x64）、Windows 11 25H2（arm64、x64エミュレーションで動作・プレビュー）</td>
                  </tr>
                  <tr>
                    <td>Windows Server</td>
                    <td>2019・2022・2025（x64）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p><strong>Node.jsとパッケージマネージャー</strong></p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ツール</th>
                    <th>必要バージョン</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Node.js</td>
                    <td>20.x、22.x、24.x以上</td>
                  </tr>
                  <tr>
                    <td>npm</td>
                    <td>10.1.0以上</td>
                  </tr>
                  <tr>
                    <td>Yarn（Classic）</td>
                    <td>1.22.22以上</td>
                  </tr>
                  <tr>
                    <td>Yarn（Modern／Berry）</td>
                    <td>4.x以上</td>
                  </tr>
                  <tr>
                    <td>pnpm</td>
                    <td>8.x以上</td>
                  </tr>
                  <tr>
                    <td>Bun</td>
                    <td>1.2.22以上</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>対応ブラウザ</strong>：CypressにバンドルされたElectron（Chromiumベース）に加え、Google Chrome・Microsoft Edge・Mozilla Firefox（最新3メジャーバージョン）、WebKitは実験的サポートです。<br />
              <strong>ハードウェア</strong>：ローカルは一般的な開発マシンで問題ありません。CI環境では最低2CPU・4GB RAM、動画録画や長時間実行には8GB以上を推奨します。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/install-cypress#System-requirements"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install using npm, Yarn, pnpm, or Bun - System requirements
                </a>
              </span>
            </div>

            <h3>4-2. ステップバイステップ・インストール</h3>

            <div className="mermaid-wrap">
              <Mermaid chart={DIAGRAM_2} />
            </div>

            <p><strong>ステップ1：プロジェクトルートでインストール</strong></p>
            <pre>
              <div className="code-line"><span className="token-fn">npm</span> install cypress --save-dev</div>
            </pre>
            <p>
              これによりCypressがdevDependencyとしてプロジェクトにローカルインストールされます。
            </p>

            <p><strong>ステップ2：Cypressを開く</strong></p>
            <pre>
              <div className="code-line"><span className="token-fn">npx</span> cypress open</div>
            </pre>
            <p>
              Cypress Appが起動し、End-to-End Testing（E2E）かComponent Testing（CT）かを選択できます。
            </p>

            <p><strong>ステップ3：はじめてのテストを書く</strong></p>
            <p>
              セットアップが完了すると、<code>cypress.config.js</code>（または<code>.ts</code>）と<code>cypress/</code>ディレクトリが自動生成されます。ここから「はじめてのテストを書く」セクションに進みます。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/install-cypress#Install--Run"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install using npm, Yarn, pnpm, or Bun - Install &amp; Run
                </a>
              </span>
            </div>

            <h3>4-3. npm実行スクリプトのブロック対策（重要）</h3>
            <p>
              npm 12以降、依存パッケージのインストールスクリプト（<code>postinstall</code>など）がデフォルトでブロックされる場合があります。Cypressの<code>postinstall</code>スクリプトがブロックされるとバイナリがダウンロードされないため、以下のいずれかの対応が必要です。
            </p>
            <pre>
              <div className="code-line"><span className="token-fn">npm</span> approve-scripts cypress</div>
            </pre>
            <p>または、バイナリのみを明示的にインストールします。</p>
            <pre>
              <div className="code-line"><span className="token-fn">npx</span> cypress install</div>
            </pre>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/install-cypress#npm-configuration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install using npm, Yarn, pnpm, or Bun - npm configuration
                </a>
              </span>
            </div>

            <h3>4-4. Linux環境の追加設定</h3>
            <p>
              Linux環境（特にCIコンテナ）では、以下のような追加パッケージが必要になる場合があります（Ubuntu 22.04・Debianの例）。
            </p>
            <pre>
              <div className="code-line"><span className="token-fn">apt-get</span> install libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb</div>
            </pre>
            <p>
              これらの依存関係を毎回手動でインストールする代わりに、必要なパッケージが事前にインストール済みの
              <a
                href="https://github.com/cypress-io/cypress-docker-images"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cypress公式Dockerイメージ
              </a>
              を利用することもできます。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/install-cypress#Linux-Prerequisites"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install using npm, Yarn, pnpm, or Bun - Linux Prerequisites
                </a>
              </span>
            </div>
          </section>

          {/* ============ 5 ============ */}
          <section>
            <h2 id="sec-5">
              <span className="sec-badge">05</span>
              <span>プロジェクト構成を理解する</span>
            </h2>
            <p>
              Cypressは「設定より規約（convention over configuration）」を重視しており、プロジェクトを追加すると自動的に以下のフォルダー構成が生成されます。すべて設定ファイルで変更可能ですが、初めてのプロジェクトではデフォルトのまま進めることが推奨されています。
            </p>

            <h3>5-1. デフォルトフォルダー構成</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>パス</th>
                    <th>役割</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>cypress.config.js</code>（または<code>.ts</code>）</td>
                    <td>Cypress全体の設定ファイル</td>
                  </tr>
                  <tr>
                    <td><code>cypress/fixtures/example.json</code></td>
                    <td>テストで使う静的なテストデータ（フィクスチャ）</td>
                  </tr>
                  <tr>
                    <td><code>cypress/support/commands.js</code></td>
                    <td>カスタムコマンドを定義する場所</td>
                  </tr>
                  <tr>
                    <td><code>cypress/support/e2e.js</code></td>
                    <td>E2Eテスト実行前に毎回読み込まれるサポートファイル</td>
                  </tr>
                  <tr>
                    <td><code>cypress/support/component.js</code></td>
                    <td>コンポーネントテスト用のサポートファイル</td>
                  </tr>
                  <tr>
                    <td><code>cypress/e2e/</code></td>
                    <td>E2Eテストのスペックファイルを配置する場所（デフォルト）</td>
                  </tr>
                  <tr>
                    <td><code>cypress/downloads/</code></td>
                    <td>テスト中にダウンロードしたファイルの保存先</td>
                  </tr>
                  <tr>
                    <td><code>cypress/screenshots/</code></td>
                    <td>スクリーンショットの保存先</td>
                  </tr>
                  <tr>
                    <td><code>cypress/videos/</code></td>
                    <td>実行動画の保存先</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests#Project-structure"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Writing and organizing Cypress tests - Project structure
                </a>
              </span>
            </div>

            <h3>5-2. specファイルの命名規則</h3>
            <p>
              Cypressはテストフォルダー内のすべてのファイルをテストとして扱うわけではありません。ファイル名に<code>.cy.</code>という接尾辞が含まれるファイルのみを<code>specPattern</code>として認識します。
            </p>
            <ul>
              <li>E2E: <code>cypress/e2e/**/*.cy.{'{js,jsx,ts,tsx}'}</code></li>
              <li>Component: <code>**/*.cy.{'{js,jsx,ts,tsx}'}</code></li>
            </ul>
            <p>
              たとえば<code>cypress/e2e/login.js</code>は認識されませんが、<code>cypress/e2e/login.cy.js</code>は認識されます。テストが一覧に表示されない場合は、まずこのファイル名の規則を疑うとよいでしょう。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests#Spec-files"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Writing and organizing Cypress tests - Spec files
                </a>
              </span>
            </div>

            <h3>5-3. サポートファイルとフィクスチャ</h3>
            <p>
              サポートファイル（<code>cypress/support/e2e.js</code>など）は、すべてのスペックファイルより先に毎回読み込まれるため、カスタムコマンドやグローバルな<code>beforeEach</code>フックを定義するのに最適な場所です。ただし、ここでインポートしたものはすべてのスペック実行のたびにコストがかかるため、軽量に保つことが推奨されています。
            </p>
            <p>
              フィクスチャ（<code>cypress/fixtures/</code>）は、<code>cy.fixture()</code>でテスト内に読み込んだり、<code>cy.intercept()</code>のレスポンスとして指定したりできる静的データです。<code>.json</code>・<code>.js</code>・<code>.html</code>・<code>.csv</code>・<code>.png</code>など多様な形式をサポートしています。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests#Support-file"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Writing and organizing Cypress tests - Support file / Fixtures
                </a>
              </span>
            </div>
          </section>

          {/* ============ 6 ============ */}
          <section>
            <h2 id="sec-6">
              <span className="sec-badge">06</span>
              <span>はじめてのテストを書く</span>
            </h2>

            <h3>6-1. 空のspecファイルを作成する</h3>
            <p>
              Cypress Appの「Create new empty spec」ボタンから新しいスペックファイルを作成します。デフォルトのファイル名のまま作成すると、<code>cypress/e2e</code>配下に自動的に配置され、Cypressがファイルの変更を監視して即座に一覧へ反映します。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test#Add-a-test-file"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Your First Test - Add a test file
                </a>
              </span>
            </div>

            <h3>6-2. 最初のテストを書いてみる</h3>
            <p>まずは動作確認のため、シンプルなアサーションだけのテストを書きます。</p>
            <pre>
              <div className="code-line"><span className="token-fn">describe</span>(<span className="token-str">'My First Test'</span>, () =&gt; {'{'}</div>
              <div className="code-line">  <span className="token-fn">it</span>(<span className="token-str">'Does not do much!'</span>, () =&gt; {'{'}</div>
              <div className="code-line">    <span className="token-fn">expect</span>(<span className="token-kw">true</span>).to.<span className="token-fn">equal</span>(<span className="token-kw">true</span>)</div>
              <div className="code-line">  {'}'})</div>
              <div className="code-line">{'}'})</div>
            </pre>
            <p>
              保存するとブラウザが自動的にリロードされ、緑色でパスしたことが表示されます。<code>true</code>を<code>false</code>に変えて保存すると、今度は赤色で失敗し、詳細なスタックトレースとコードフレームが表示されます。
            </p>
            <p>
              ここで使われている<code>describe</code>・<code>it</code>は
              <a
                href="https://mochajs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mocha
              </a>
              、<code>expect</code>は
              <a
                href="https://www.chaijs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chai
              </a>
              というライブラリに由来しており、Cypressはこれらの実績あるライブラリの上に構築されています。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test#Write-your-first-test"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Your First Test - Write your first test
                </a>
              </span>
            </div>

            <h3>6-3. 実際のテストを組み立てる（4ステップ）</h3>
            <p>
              しっかりとしたテストは、一般的に「①アプリケーションの状態を準備する→②操作を行う→③結果となる状態をアサーションする」という3フェーズ（「Given/When/Then」や「Arrange/Act/Assert」とも呼ばれます）で構成されます。Cypressの基本コマンドに当てはめると、次の4ステップになります。
            </p>

            <div className="mermaid-wrap">
              <Mermaid chart={DIAGRAM_3} />
            </div>

            <p><strong>ステップ1：ページを訪問する</strong></p>
            <pre>
              <div className="code-line"><span className="token-fn">describe</span>(<span className="token-str">'My First Test'</span>, () =&gt; {'{'}</div>
              <div className="code-line">  <span className="token-fn">it</span>(<span className="token-str">'Visits the Kitchen Sink'</span>, () =&gt; {'{'}</div>
              <div className="code-line">    cy.<span className="token-fn">visit</span>(<span className="token-str">'https://example.cypress.io'</span>)</div>
              <div className="code-line">  {'}'})</div>
              <div className="code-line">{'}'})</div>
            </pre>

            <p><strong>ステップ2：要素を検索する</strong></p>
            <pre>
              <div className="code-line">cy.<span className="token-fn">visit</span>(<span className="token-str">'https://example.cypress.io'</span>)</div>
              <div className="code-line">cy.<span className="token-fn">contains</span>(<span className="token-str">'type'</span>)</div>
            </pre>
            <p>
              <code>cy.contains()</code>のようなコマンドの多くは「見つからなければ失敗する」という暗黙のアサーションを内蔵しています。存在しない文字列を指定すると、即座に失敗するのではなく、Cypressが自動的にリトライしながら数秒間待機したうえで失敗する点がポイントです（デフォルトのタイムアウトは約4秒）。
            </p>

            <p><strong>ステップ3：要素をクリックする</strong></p>
            <pre>
              <div className="code-line">cy.<span className="token-fn">contains</span>(<span className="token-str">'type'</span>).<span className="token-fn">click</span>()</div>
            </pre>

            <p><strong>ステップ4：アサーションを行う</strong></p>
            <pre>
              <div className="code-line">cy.<span className="token-fn">url</span>().<span className="token-fn">should</span>(<span className="token-str">'include'</span>, <span className="token-str">'/commands/actions'</span>)</div>
            </pre>

            <p><strong>完成した一連のテスト例</strong></p>
            <pre>
              <div className="code-line"><span className="token-fn">describe</span>(<span className="token-str">'My First Test'</span>, () =&gt; {'{'}</div>
              <div className="code-line">  <span className="token-fn">it</span>(<span className="token-str">'Gets, types and asserts'</span>, () =&gt; {'{'}</div>
              <div className="code-line">    cy.<span className="token-fn">visit</span>(<span className="token-str">'https://example.cypress.io'</span>)</div>
              <div className="code-line"></div>
              <div className="code-line">    cy.<span className="token-fn">contains</span>(<span className="token-str">'type'</span>).<span className="token-fn">click</span>()</div>
              <div className="code-line"></div>
              <div className="code-line">    <span className="token-cm">// 新しいURLに '/commands/actions' が含まれることを確認</span></div>
              <div className="code-line">    cy.<span className="token-fn">url</span>().<span className="token-fn">should</span>(<span className="token-str">'include'</span>, <span className="token-str">'/commands/actions'</span>)</div>
              <div className="code-line"></div>
              <div className="code-line">    <span className="token-cm">// 入力欄を取得して文字を入力</span></div>
              <div className="code-line">    cy.<span className="token-fn">get</span>(<span className="token-str">'.action-email'</span>).<span className="token-fn">type</span>(<span className="token-str">'jane@example.com'</span>)</div>
              <div className="code-line"></div>
              <div className="code-line">    <span className="token-cm">// 入力した値が反映されていることを確認</span></div>
              <div className="code-line">    cy.<span className="token-fn">get</span>(<span className="token-str">'.action-email'</span>).<span className="token-fn">should</span>(<span className="token-str">'have.value'</span>, <span className="token-str">'jane@example.com'</span>)</div>
              <div className="code-line">  {'}'})</div>
              <div className="code-line">{'}'})</div>
            </pre>
            <p>
              このテストが2ページにまたがっている点にも注目してください。Cypressはページ遷移イベントを自動的に検出し、次のページの読み込みが完了するまでコマンドの実行を一時停止します。通常4秒のタイムアウトも、ページ遷移が検出されると自動的に60秒まで延長されます。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test#Write-a-real-test"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Your First Test - Write a real test
                </a>
              </span>
            </div>
          </section>

          {/* ============ 7 ============ */}
          <section>
            <h2 id="sec-7">
              <span className="sec-badge">07</span>
              <span>テストの構造：describe・it・hooks</span>
            </h2>

            <h3>7-1. BDD構文</h3>
            <p>
              Cypressのテストインターフェースは、Mocha由来の<code>describe()</code>・<code>context()</code>・<code>it()</code>・<code>specify()</code>から構成されます。<code>describe()</code>で関連するテストをグループ化し、<code>it()</code>で個々のテストを定義します。<code>context()</code>は<code>describe()</code>と、<code>specify()</code>は<code>it()</code>と全く同じ動作をするエイリアスです。
            </p>
            <pre>
              <div className="code-line"><span className="token-fn">describe</span>(<span className="token-str">'Account settings'</span>, () =&gt; {'{'}</div>
              <div className="code-line">  <span className="token-fn">beforeEach</span>(() =&gt; {'{'}</div>
              <div className="code-line">    cy.<span className="token-fn">visit</span>(<span className="token-str">'/account'</span>)</div>
              <div className="code-line">  {'}'})</div>
              <div className="code-line"></div>
              <div className="code-line">  <span className="token-fn">it</span>(<span className="token-str">'shows the current user name'</span>, () =&gt; {'{'}</div>
              <div className="code-line">    cy.<span className="token-fn">get</span>(<span className="token-str">'[data-testid="profile-name"]'</span>).<span className="token-fn">should</span>(<span className="token-str">'have.value'</span>, <span className="token-str">'Jane Lane'</span>)</div>
              <div className="code-line">  {'}'})</div>
              <div className="code-line">{'}'})</div>
            </pre>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests#Test-Structure"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Writing and organizing Cypress tests - Test Structure
                </a>
              </span>
            </div>

            <h3>7-2. フック（before / beforeEach / afterEach / after）</h3>
            <p>
              セットアップやクリーンアップの処理を各テストの中で繰り返し書く代わりに、フックを使ってまとめて定義できます。
            </p>

            <div className="mermaid-wrap">
              <Mermaid chart={DIAGRAM_4} />
            </div>

            <div className="callout callout-danger">
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
                <strong>注意点：</strong>Cypress公式ドキュメントは「状態のクリーンアップを<code>after</code>や<code>afterEach</code>で行う」ことをアンチパターンとして明確に挙げています。理由は、テストの途中でCypressをリフレッシュした場合に<code>after</code>系フックが実行される保証がないためです。状態のリセットが本当に必要な場合は、<code>before</code>や<code>beforeEach</code>側で行うべきとされています。
              </p>
            </div>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests#Hooks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Writing and organizing Cypress tests - Hooks
                </a>
                、
                <a
                  href="https://docs.cypress.io/app/core-concepts/best-practices#Using-after-Or-afterEach-Hooks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cypress best practices - Using after Or afterEach Hooks
                </a>
              </span>
            </div>

            <h3>7-3. テストの独立性（Test Isolation）</h3>
            <p>
              Cypressは各テストの前にブラウザの状態をクリーンアップする「Test Isolation」をデフォルトで有効にしています（<code>testIsolation: true</code>）。これにより、1つのテストの動作が別のテストに影響を与えることを防ぎ、テストをどの順序・どの組み合わせで実行しても再現性のある結果が得られます。あるテストが単独では失敗するのに他のテストと一緒に実行すると成功する場合、それはテスト同士が暗黙的に依存している兆候です。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests#Test-Isolation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Writing and organizing Cypress tests - Test Isolation
                </a>
              </span>
            </div>
          </section>

          {/* ============ 8 ============ */}
          <section>
            <h2 id="sec-8">
              <span className="sec-badge">08</span>
              <span>テストの種類：E2Eテスト vs コンポーネントテスト</span>
            </h2>
            <p>
              Cypressを使い始める際に最初に決めるべきことの一つが、E2Eテストとコンポーネントテストのどちらを書くかです。両方を組み合わせて使うのが一般的です。
            </p>

            <h3>8-1. 比較表</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>E2Eテスト</th>
                    <th>コンポーネントテスト</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>テスト対象</td>
                    <td>アプリの全レイヤー（フロントエンドからバックエンドまで）</td>
                    <td>個々のコンポーネント単体</td>
                  </tr>
                  <tr>
                    <td>特徴</td>
                    <td>包括的だが実行が遅く、flakeが発生しやすい</td>
                    <td>専門特化していて高速・安定</td>
                  </tr>
                  <tr>
                    <td>主な用途</td>
                    <td>アプリ全体が一体として正しく動くことの検証</td>
                    <td>個々のコンポーネントの機能検証</td>
                  </tr>
                  <tr>
                    <td>実装者</td>
                    <td>開発者、QAチーム、SDET</td>
                    <td>開発者、デザイナー</td>
                  </tr>
                  <tr>
                    <td>CIインフラ</td>
                    <td>複雑なセットアップが必要になることが多い</td>
                    <td>特別なインフラ不要</td>
                  </tr>
                  <tr>
                    <td>初期化コマンド</td>
                    <td><code>cy.visit(url)</code></td>
                    <td><code>{'cy.mount(<MyComponent />)'}</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/core-concepts/testing-types#Testing-Type-Comparison"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Testing Types - Testing Type Comparison
                </a>
              </span>
            </div>

            <h3>8-2. どちらを選ぶかの判断フロー</h3>
            <div className="mermaid-wrap">
              <Mermaid chart={DIAGRAM_5} />
            </div>
            <p>
              E2Eテストは、認証フローや購入フローのような重要な業務フローの検証、複数画面にまたがるデータの永続化の確認、デプロイ前のスモークテストに向いています。一方でコンポーネントテストは、日付ピッカーのような複雑なUI部品の様々なシナリオ検証や、フォームの表示・非表示ロジックの検証、デザインシステムから切り出されたコンポーネントの検証に向いています。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/core-concepts/testing-types"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Testing Types - What is E2E Testing / What is Component Testing
                </a>
              </span>
            </div>
          </section>

          {/* ============ 9 ============ */}
          <section>
            <h2 id="sec-9">
              <span className="sec-badge">09</span>
              <span>セレクター戦略とベストプラクティス</span>
            </h2>

            <h3>9-1. 良いセレクター・悪いセレクター</h3>
            <p>
              Cypress公式ドキュメントは、テストの壊れやすさを大きく左右する「セレクター選び」について明確な指針を示しています。次のようなHTMLがあるとします。
            </p>
            <pre>
              <div className="code-line">&lt;<span className="token-fn">button</span></div>
              <div className="code-line">  <span className="token-prop">id</span>=<span className="token-str">"main"</span></div>
              <div className="code-line">  <span className="token-prop">class</span>=<span className="token-str">"btn btn-large"</span></div>
              <div className="code-line">  <span className="token-prop">name</span>=<span className="token-str">"submission"</span></div>
              <div className="code-line">  <span className="token-prop">role</span>=<span className="token-str">"button"</span></div>
              <div className="code-line">  <span className="token-prop">data-cy</span>=<span className="token-str">"submit"</span></div>
              <div className="code-line">&gt;</div>
              <div className="code-line">  Submit</div>
              <div className="code-line">&lt;/<span className="token-fn">button</span>&gt;</div>
            </pre>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>セレクター</th>
                    <th>優先度</th>
                    <th>推奨度</th>
                    <th>理由</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>cy.get('button')</code></td>
                    <td>低</td>
                    <td>非推奨</td>
                    <td>汎用的すぎて文脈がない</td>
                  </tr>
                  <tr>
                    <td><code>cy.get('.btn.btn-large')</code></td>
                    <td>低</td>
                    <td>非推奨</td>
                    <td>スタイルに結合しており変更に弱い</td>
                  </tr>
                  <tr>
                    <td><code>cy.get('#main')</code></td>
                    <td>中</td>
                    <td>限定的に可</td>
                    <td>スタイルやJSのイベントリスナーと結合しやすい</td>
                  </tr>
                  <tr>
                    <td><code>cy.get('[name="submission"]')</code></td>
                    <td>中</td>
                    <td>限定的に可</td>
                    <td>HTML意味論を持つname属性に結合している</td>
                  </tr>
                  <tr>
                    <td><code>cy.contains('Submit')</code></td>
                    <td>高</td>
                    <td>状況による</td>
                    <td>テキストが変わる可能性があると壊れる</td>
                  </tr>
                  <tr>
                    <td><code>cy.get('[data-cy="submit"]')</code><br />(または <code>data-cy / data-test / data-testid</code>)</td>
                    <td>最高（推奨）</td>
                    <td>最推奨</td>
                    <td>CSSやJSの変更から完全に独立している</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <code>data-*</code>属性はCSSのスタイル変更やJavaScriptの挙動変更の影響を受けないため、最も堅牢なセレクター戦略とされています。
              <a
                href="https://github.com/cypress-io/eslint-plugin-cypress"
                target="_blank"
                rel="noopener noreferrer"
              >
                eslint-plugin-cypress
              </a>
              の<code>cypress/require-data-selectors</code>ルールを使えば、この規約をリント時点で強制することもできます。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/core-concepts/best-practices#Selecting-Elements"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cypress best practices - Selecting Elements
                </a>
              </span>
            </div>

            <h3>9-2. テキストコンテンツを使うべきかの判断基準</h3>
            <p>「そのテキストが変わったらテストを失敗させたいか？」を自問するのがコツです。</p>
            <ul>
              <li>
                <strong>はい</strong>（そのテキストが重要な意味を持つ）→ <code>cy.contains()</code>を使う
              </li>
              <li>
                <strong>いいえ</strong>（テキストは変わりうる）→ <code>data-*</code>属性を使う
              </li>
            </ul>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/core-concepts/best-practices#Text-Content"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cypress best practices - Text Content
                </a>
              </span>
            </div>

            <h3>9-3. 代表的なアンチパターンと推奨パターン</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>アンチパターン</th>
                    <th>推奨されるベストプラクティス</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>シークレット情報をテストコードにハードコーディングする</td>
                    <td><code>cy.env()</code>でセンシティブな値を扱い、公開設定は<code>Cypress.expose()</code>を使う</td>
                  </tr>
                  <tr>
                    <td>UIを経由してログインする、複数テスト間でページオブジェクトを共有する</td>
                    <td>プログラム的にログインし、テストは独立させてアプリの状態を直接コントロールする</td>
                  </tr>
                  <tr>
                    <td>コマンドの戻り値を<code>const</code>・<code>let</code>・<code>var</code>に代入しようとする</td>
                    <td>エイリアスとクロージャ（<code>.as()</code> / <code>cy.get('@alias')</code>）を使う</td>
                  </tr>
                  <tr>
                    <td>自分がコントロールできない外部サイトを訪問・操作する</td>
                    <td>自分の管理下にあるドメインのみをテストし、外部連携は<code>cy.request()</code>で扱う</td>
                  </tr>
                  <tr>
                    <td>前のテストの状態に依存したテストを書く</td>
                    <td><code>it.only</code>を付けて単独実行してもパスするように書く</td>
                  </tr>
                  <tr>
                    <td>ユニットテストのように1アサーションずつ細かくテストを分割する</td>
                    <td>1つのテストに複数のアサーションを含めてもよい（E2Eではむしろ推奨）</td>
                  </tr>
                  <tr>
                    <td><code>after</code>・<code>afterEach</code>で状態をクリーンアップする</td>
                    <td>クリーンアップは<code>before</code>・<code>beforeEach</code>で行う</td>
                  </tr>
                  <tr>
                    <td><code>cy.wait(数値)</code>で決め打ちの時間待機をする</td>
                    <td>ルートエイリアスやアサーションでCypressに待機条件を伝える</td>
                  </tr>
                  <tr>
                    <td>Cypressスクリプトからバックエンドサーバーを起動しようとする</td>
                    <td>Cypressを実行する前にWebサーバーを起動しておく</td>
                  </tr>
                  <tr>
                    <td><code>baseUrl</code>を設定せず、<code>cy.visit()</code>にフルURLを書く</td>
                    <td><code>cypress.config.js</code>で<code>baseUrl</code>をグローバル設定する</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p><strong>不要な待機の悪い例と良い例</strong></p>
            <div className="code-label">悪い例：決め打ちの待機時間</div>
            <pre>
              <div className="code-line">cy.<span className="token-fn">intercept</span>(<span className="token-str">'GET'</span>, <span className="token-str">'/users'</span>, [<span className="token-obj">{'{'} name: <span className="token-str">'Maggy'</span> {'}'}</span>, <span className="token-obj">{'{'} name: <span className="token-str">'Joan'</span> {'}'}</span>])</div>
              <div className="code-line">cy.<span className="token-fn">get</span>(<span className="token-str">'#fetch'</span>).<span className="token-fn">click</span>()</div>
              <div className="code-line">cy.<span className="token-fn">wait</span>(<span className="token-num">4000</span>) <span className="token-cm">// ← これは不要</span></div>
              <div className="code-line">cy.<span className="token-fn">get</span>(<span className="token-str">'table tr'</span>).<span className="token-fn">should</span>(<span className="token-str">'have.length'</span>, <span className="token-num">2</span>)</div>
            </pre>
            <div className="code-label">良い例：ルートエイリアスを明示的に待つ</div>
            <pre>
              <div className="code-line">cy.<span className="token-fn">intercept</span>(<span className="token-str">'GET'</span>, <span className="token-str">'/users'</span>, [<span className="token-obj">{'{'} name: <span className="token-str">'Maggy'</span> {'}'}</span>, <span className="token-obj">{'{'} name: <span className="token-str">'Joan'</span> {'}'}</span>]).<span className="token-fn">as</span>(<span className="token-str">'getUsers'</span>)</div>
              <div className="code-line">cy.<span className="token-fn">get</span>(<span className="token-str">'[data-testid="fetch-users"]'</span>).<span className="token-fn">click</span>()</div>
              <div className="code-line">cy.<span className="token-fn">wait</span>(<span className="token-str">'@getUsers'</span>) <span className="token-cm">// ← このリクエストの完了を明示的に待つ</span></div>
              <div className="code-line">cy.<span className="token-fn">get</span>(<span className="token-str">'table tr'</span>).<span className="token-fn">should</span>(<span className="token-str">'have.length'</span>, <span className="token-num">2</span>)</div>
            </pre>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/core-concepts/best-practices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cypress best practices
                </a>
              </span>
            </div>
          </section>

          {/* ============ 10 ============ */}
          <section>
            <h2 id="sec-10">
              <span className="sec-badge">10</span>
              <span>コマンドラインの使い方</span>
            </h2>
            <p>
              Cypressをインストールした後は、プロジェクトルートから以下のコマンドを実行できます（<code>npx</code>・<code>yarn</code>・<code>pnpm</code>のいずれかを頭に付けます）。
            </p>

            <h3>10-1. 主要コマンド</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>コマンド</th>
                    <th>用途</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>cypress open</code></td>
                    <td>インタラクティブなCypress Appを開く</td>
                  </tr>
                  <tr>
                    <td><code>cypress run</code></td>
                    <td>すべてのテストをヘッドレスモードで一括実行する（デフォルト動作）</td>
                  </tr>
                  <tr>
                    <td><code>cypress info</code></td>
                    <td>検出されたブラウザや環境変数などの診断情報を表示する</td>
                  </tr>
                  <tr>
                    <td><code>cypress verify</code></td>
                    <td>Cypressが正しくインストールされているか検証する</td>
                  </tr>
                  <tr>
                    <td><code>cypress version</code></td>
                    <td>インストール済みのバージョン情報を表示する</td>
                  </tr>
                  <tr>
                    <td><code>cypress cache list</code></td>
                    <td>キャッシュされているCypressバージョン一覧を表示する</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>10-2. cypress run の主なオプション</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>コマンド / オプション</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>--browser</code>, <code>-b</code></td>
                    <td>実行するブラウザを指定する（例：chrome）</td>
                  </tr>
                  <tr>
                    <td><code>--headed</code></td>
                    <td>ブラウザを表示した状態で実行する</td>
                  </tr>
                  <tr>
                    <td><code>--spec</code>, <code>-s</code></td>
                    <td>実行するスペックファイルを限定する</td>
                  </tr>
                  <tr>
                    <td><code>--config</code>, <code>-c</code></td>
                    <td>設定値をコマンドラインから上書きする</td>
                  </tr>
                  <tr>
                    <td><code>--env</code>, <code>-e</code></td>
                    <td>センシティブな環境変数を<code>cy.env()</code>用に渡す</td>
                  </tr>
                  <tr>
                    <td><code>--record</code></td>
                    <td>Cypress Cloudへ記録する</td>
                  </tr>
                  <tr>
                    <td><code>--parallel</code></td>
                    <td>Cypress Cloudで並列実行する</td>
                  </tr>
                  <tr>
                    <td><code>--reporter</code>, <code>-r</code></td>
                    <td>Mochaレポーターを指定する</td>
                  </tr>
                  <tr>
                    <td><code>--group</code></td>
                    <td>記録したテストをグループにまとめる</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="code-label">
              ヘッドレスモードで単一スペックを実行し、Cypress Cloudに記録する例
            </div>
            <pre>
              <div className="code-line"><span className="token-fn">npx</span> cypress run --record --spec <span className="token-str">"cypress/e2e/my-spec.cy.js"</span></div>
            </pre>

            <h3>10-3. package.jsonへのスクリプト登録</h3>
            <p>
              頻繁に使うコマンドは<code>package.json</code>の<code>scripts</code>に登録しておくと便利です。
            </p>
            <pre>
              <div className="code-line">{'{'}</div>
              <div className="code-line">  <span className="token-prop">"scripts"</span>: {'{'}</div>
              <div className="code-line">    <span className="token-prop">"e2e:chrome"</span>: <span className="token-str">"cypress run --browser chrome"</span></div>
              <div className="code-line">  {'}'}</div>
              <div className="code-line">{'}'}</div>
            </pre>
            <pre>
              <div className="code-line"><span className="token-fn">npm</span> run e2e:chrome</div>
            </pre>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/references/command-line"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Command Line - Cypress Documentation
                </a>
              </span>
            </div>
          </section>

          {/* ============ 11 ============ */}
          <section>
            <h2 id="sec-11">
              <span className="sec-badge">11</span>
              <span>CI/CDへの統合：GitHub Actionsの例</span>
            </h2>
            <p>
              Cypressは公式の
              <a
                href="https://github.com/marketplace/actions/cypress-io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cypress GitHub Action
              </a>
              を提供しており、依存関係のインストール・キャッシュ・テスト実行をまとめて扱えます。
            </p>

            <h3>11-1. 基本的なワークフロー例</h3>
            <pre>
              <div className="code-line"><span className="token-prop">name</span>: Cypress Tests</div>
              <div className="code-line"></div>
              <div className="code-line"><span className="token-prop">on</span>: push</div>
              <div className="code-line"></div>
              <div className="code-line"><span className="token-prop">jobs</span>:</div>
              <div className="code-line">  <span className="token-prop">cypress-run</span>:</div>
              <div className="code-line">    <span className="token-prop">runs-on</span>: ubuntu-24.04</div>
              <div className="code-line">    <span className="token-prop">steps</span>:</div>
              <div className="code-line">      - <span className="token-prop">name</span>: Checkout</div>
              <div className="code-line">        <span className="token-prop">uses</span>: actions/checkout@v6</div>
              <div className="code-line">      - <span className="token-prop">name</span>: Cypress run</div>
              <div className="code-line">        <span className="token-prop">uses</span>: cypress-io/github-action@v7</div>
              <div className="code-line">        <span className="token-prop">with</span>:</div>
              <div className="code-line">          <span className="token-prop">build</span>: npm run build</div>
              <div className="code-line">          <span className="token-prop">start</span>: npm start</div>
            </pre>
            <p>
              このワークフローは、pushをトリガーにUbuntu環境を起動し、リポジトリをチェックアウトしたうえで、依存関係のインストール・ビルド・アプリの起動・Electronブラウザでのテスト実行までを自動的に行います。
            </p>

            <h3>11-2. 特定ブラウザでの実行</h3>
            <p>
              GitHub Actionsのホスト型ランナーにはあらかじめChrome・Firefox・Edgeがインストールされています（macOSランナーにはSafariも含まれます）。<code>browser</code>パラメーターで使用ブラウザを指定できます。
            </p>
            <pre>
              <div className="code-line">      - <span className="token-prop">name</span>: Cypress run</div>
              <div className="code-line">        <span className="token-prop">uses</span>: cypress-io/github-action@v7</div>
              <div className="code-line">        <span className="token-prop">with</span>:</div>
              <div className="code-line">          <span className="token-prop">build</span>: npm run build</div>
              <div className="code-line">          <span className="token-prop">start</span>: npm start</div>
              <div className="code-line">          <span className="token-prop">browser</span>: chrome</div>
            </pre>

            <h3>11-3. 並列実行（Parallelization）</h3>
            <p>
              Cypress Cloudに記録することで、GitHub Actionsのmatrix strategyを使った並列実行が可能になります。以下は5並列で実行する例の要点です。
            </p>
            <pre>
              <div className="code-line"><span className="token-prop">jobs</span>:</div>
              <div className="code-line">  <span className="token-prop">cypress-run</span>:</div>
              <div className="code-line">    <span className="token-prop">runs-on</span>: ubuntu-24.04</div>
              <div className="code-line">    <span className="token-prop">needs</span>: install</div>
              <div className="code-line">    <span className="token-prop">strategy</span>:</div>
              <div className="code-line">      <span className="token-prop">fail-fast</span>: <span className="token-kw">false</span></div>
              <div className="code-line">      <span className="token-prop">matrix</span>:</div>
              <div className="code-line">        <span className="token-prop">containers</span>: [<span className="token-num">1</span>, <span className="token-num">2</span>, <span className="token-num">3</span>, <span className="token-num">4</span>, <span className="token-num">5</span>]</div>
              <div className="code-line">    <span className="token-prop">steps</span>:</div>
              <div className="code-line">      - <span className="token-prop">name</span>: Cypress run</div>
              <div className="code-line">        <span className="token-prop">uses</span>: cypress-io/github-action@v7</div>
              <div className="code-line">        <span className="token-prop">with</span>:</div>
              <div className="code-line">          <span className="token-prop">record</span>: <span className="token-kw">true</span></div>
              <div className="code-line">          <span className="token-prop">parallel</span>: <span className="token-kw">true</span></div>
              <div className="code-line">          <span className="token-prop">group</span>: <span className="token-str">'UI-Chrome'</span></div>
              <div className="code-line">          <span className="token-prop">start</span>: npm start</div>
            </pre>
            <p>
              <code>record: true</code>によってCypress Cloudへ結果を記録し、プルリクエスト上でのステータスチェックやフレーキーテストの検知が可能になります。<code>parallel: true</code>は、実行時間の履歴に基づいてスペックを動的に振り分けるSmart Orchestrationを利用します。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/continuous-integration/github-actions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Run Cypress in GitHub Actions
                </a>
              </span>
            </div>
          </section>

          {/* ============ 12 ============ */}
          <section>
            <h2 id="sec-12">
              <span className="sec-badge">12</span>
              <span>Cypress CloudとAI機能</span>
            </h2>
            <p>
              Cypress Cloudは、CI上でのテスト結果を「解釈すべき情報の山」から「チーム全員が行動できるシグナル」に変える有料サービスです。主な機能は以下の通りです。
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
                    <td>Test Replay</td>
                    <td>記録されたテストをネットワークリクエスト・コンソール出力・DOMスナップショットとともに、CI上で実行されたとおりに再生できる</td>
                  </tr>
                  <tr>
                    <td>Smart Orchestration</td>
                    <td>過去の実行時間に基づく負荷分散（Load Balancing）、失敗したスペックを優先して再実行するSpec Prioritization、一定数の失敗でランを打ち切るAuto Cancellationを含む</td>
                  </tr>
                  <tr>
                    <td>Flaky test management</td>
                    <td>再試行後にパスするテスト（flake）を自動的に特定し、傾向を追跡する</td>
                  </tr>
                  <tr>
                    <td>Branch Review</td>
                    <td>プルリクエストがテストスイートに与える影響を、失敗・flaky・追加・変更ごとに一覧できる</td>
                  </tr>
                  <tr>
                    <td>Cloud MCP</td>
                    <td>AIコーディングアシスタントに、テストの実行結果や失敗コンテキストをIDE内から直接渡せる</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              さらに、Cypress Studio（レコーディングによるテスト自動生成）にCypress Cloudアカウントを組み合わせると「Studio AI」が有効になり、記録した操作に対してアサーションを自動提案してくれます。cypress.io公式サイトのトップページでは、この一連の体験が「Create（作成）→ Debug（デバッグ）→ Improve（改善）→ Collaborate（連携）」という4ステップのワークフローとして紹介されています。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/why-cypress#Cypress-Cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why Cypress? - Cypress Cloud
                </a>
                、
                <a
                  href="https://www.cypress.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cypress.io トップページ
                </a>
              </span>
            </div>

            <div className="callout callout-success">
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
                <path d="M3 3v18h18" />
                <path d="M20 18v3" />
                <path d="M16 16v5" />
                <path d="M12 13v8" />
                <path d="M8 10v11" />
                <path d="M4 7v14" />
              </svg>
              <p>
                Cypressは、週間ダウンロード数6M以上、GitHubスター数50K以上、依存リポジトリ数150万以上という規模で利用されているオープンソースプロジェクトです。
              </p>
            </div>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://www.cypress.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cypress.io トップページ - Loved by OSS, trusted by Enterprise
                </a>
              </span>
            </div>
          </section>

          {/* ============ 13 ============ */}
          <section>
            <h2 id="sec-13">
              <span className="sec-badge">13</span>
              <span>トレードオフと制限事項</span>
            </h2>
            <p>
              Cypressは独自アーキテクチャによってこれまでにない機能を実現している一方で、明確なトレードオフも存在します。公式ドキュメントは、これらの制約の多くが「悪いテスト・遅いテスト・不安定なテストを書かせないための、良い意味での境界線」であると位置づけています。
            </p>

            <h3>13-1. 恒久的なトレードオフ</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>制約</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>汎用自動化ツールではない</td>
                    <td>Webのインデックス作成やスパイダリング、パフォーマンステスト、サードパーティサイトのスクレイピングには向いていない</td>
                  </tr>
                  <tr>
                    <td>ブラウザ内で実行される</td>
                    <td>テストコードはNode.jsではなくブラウザ内のJavaScriptとして評価されるため、サーバーサイドのライブラリを直接importできない（<code>cy.exec()</code>・<code>cy.task()</code>・<code>cy.request()</code>経由でNode側とやり取りする）</td>
                  </tr>
                  <tr>
                    <td>同時に複数ブラウザを開けない</td>
                    <td>1つのブラウザのみ制御可能。複数タブが必要な場合は<code>@cypress/puppeteer</code>プラグインで対応する</td>
                  </tr>
                  <tr>
                    <td>1テスト=1スーパードメインが基本</td>
                    <td>別オリジンへのナビゲーションを行う場合は<code>cy.origin()</code>で明示的にスコープする必要がある</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>13-2. 将来的に改善が見込まれる一時的な制約</h3>
            <ul>
              <li><code>cy.hover()</code>コマンドが存在しない（回避策あり）</li>
              <li>ネイティブ／モバイルアプリのイベントには非対応</li>
              <li>iframeサポートは限定的（同一オリジンのiframeはネイティブにクエリ可能）</li>
            </ul>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/references/trade-offs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trade-offs - Cypress Documentation
                </a>
              </span>
            </div>
          </section>

          {/* ============ 14 ============ */}
          <section>
            <h2 id="sec-14">
              <span className="sec-badge">14</span>
              <span>まとめと次のステップ</span>
            </h2>
            <p>
              ここまでの内容を振り返ると、Cypressは以下のような流れで学んでいくのがおすすめです。
            </p>
            <ol>
              <li>インストールして<code>npx cypress open</code>を実行する</li>
              <li>
                はじめてのテストで<code>cy.visit()</code> → <code>cy.get()</code> → <code>.click()</code> → <code>.should()</code>の基本パターンを体に染み込ませる
              </li>
              <li>
                ベストプラクティスを意識し、<code>data-*</code>属性でセレクターを組み立てる習慣をつける
              </li>
              <li>
                自分のアプリケーションに対してE2Eテストとコンポーネントテストを組み合わせて書く
              </li>
              <li>GitHub ActionsなどのCIパイプラインに組み込む</li>
              <li>
                必要に応じてCypress Cloudを導入し、Test ReplayやSmart Orchestrationでスケールさせる
              </li>
            </ol>
            <p>
              Cypressチームは、ベストプラクティスを実践的なシナリオで学べる
              <a
                href="https://github.com/cypress-io/cypress-realworld-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Real World App（RWA）
              </a>
              というフルスタックのサンプルアプリケーションを公開しています。複数ブラウザ・複数デバイスサイズでのE2Eテスト、ビジュアルリグレッションテスト、APIテスト、ユニットテストを、効率的なCIパイプラインの中でどのように組み合わせるかを学ぶのに最適です。
            </p>
            <p>
              また、SeleniumやProtractor、Playwrightから移行する場合は、公式の移行ガイドが充実しているので参照してください。
            </p>
            <div className="source-note">
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
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <span>
                出典：
                <a
                  href="https://docs.cypress.io/app/get-started/why-cypress#Cypress-in-the-Real-World"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why Cypress? - Cypress in the Real World
                </a>
              </span>
            </div>
          </section>

          {/* ============ 15 ============ */}
          <section>
            <h2 id="sec-15">
              <span className="sec-badge">15</span>
              <span>参考文献・出典一覧</span>
            </h2>
            <p>
              本ガイドの作成にあたり、以下の一次情報源（2026年7月時点の最新版）を参照しました。
            </p>

            <h3>Cypress公式ドキュメント</h3>
            <ul>
              <li>
                <a
                  href="https://docs.cypress.io/app/get-started/why-cypress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why Cypress? - Cypress Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.cypress.io/app/get-started/install-cypress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install using npm, Yarn, pnpm, or Bun - Cypress Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Your First Test - Cypress Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Writing and organizing Cypress tests - Cypress Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.cypress.io/app/core-concepts/testing-types"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Testing Types - Cypress Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.cypress.io/app/core-concepts/best-practices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cypress best practices - Cypress Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.cypress.io/app/references/command-line"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Command Line - Cypress Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.cypress.io/app/references/trade-offs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trade-offs - Cypress Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.cypress.io/app/guides/migration/playwright-to-cypress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Migrate from Playwright to Cypress: Complete Migration Guide - Cypress Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.cypress.io/app/continuous-integration/github-actions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Run Cypress in GitHub Actions - Cypress Documentation
                </a>
              </li>
            </ul>

            <h3>Cypress公式サイト</h3>
            <ul>
              <li>
                <a
                  href="https://www.cypress.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cypress.io（トップページ）
                </a>
              </li>
              <li>
                <a
                  href="https://www.cypress.io/#create"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cypress.io/#create
                </a>
              </li>
            </ul>

            <h3>Playwright公式情報（比較参照用）</h3>
            <ul>
              <li>
                <a
                  href="https://playwright.dev/docs/browsers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Browsers | Playwright
                </a>
              </li>
              <li>
                <a
                  href="https://playwright.dev/docs/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Installation | Playwright
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/microsoft/playwright"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub - microsoft/playwright
                </a>
              </li>
            </ul>

            <h3>サンプルリポジトリ</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/cypress-io/cypress-realworld-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cypress-io/cypress-realworld-app（GitHub）
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/cypress-io/eslint-plugin-cypress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cypress-io/eslint-plugin-cypress（GitHub）
                </a>
              </li>
            </ul>

            <footer className="doc-footer">
              本ガイドは学習・社内共有目的で作成された二次資料です。最新の公式情報は必ず上記リンク先でご確認ください。
            </footer>
          </section>
        </div>
      </main>
    </div>
  );
}
