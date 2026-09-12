import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './owasp-zap-beginner-guide.css';

export const metadata: Metadata = {
  title: 'OWASP ZAP 完全ガイド ― 初学者のための Web アプリケーションセキュリティテスト入門 | QA Studies',
  description:
    'ZAP 公式ドキュメントの一次情報をもとに、初学者が ZAP (Zed Attack Proxy) を体系的に学べるようステップバイステップでまとめたガイド。インストール、プロキシ設定、Spider、Passive/Active Scan、認証、自動化までを網羅。',
};

const DIAGRAM_ARCHITECTURE = `flowchart LR
    Browser["Webブラウザ"] -->|プロキシ経由| ZAP["ZAP Proxy"]
    ZAP --> Target["対象Webアプリケーション"]
    Target --> ZAP
    ZAP --> Browser
    ZAP -.-> PScan["Passive Scanner"]
    ZAP -.-> Spider["Spider / Ajax Spider"]
    ZAP -.-> AScan["Active Scanner"]
    PScan -.-> Alerts["Alerts"]
    Spider -.-> Alerts
    AScan -.-> Alerts`;

const DIAGRAM_MODE = `stateDiagram-v2
    [*] --> Standard
    Standard --> Safe
    Safe --> Protected
    Protected --> ATTACK
    ATTACK --> Protected
    Protected --> Standard`;

const DIAGRAM_PENTEST_FLOW = `flowchart TD
    A["① Explore（手動探索）"] --> B["② Spider（クローリング）"]
    B --> C["③ Forced Browse"]
    C --> D["④ Active Scan"]
    D --> E["⑤ Manual Test"]`;



export default function OwaspZapBeginnerGuidePage() {
  return (
    <div className="owasp-zap-layout">
      <NavBar />

      <main className="content">
        <div className="content-inner">
          <div className="doc-header">
            <h1>
              OWASP ZAP 完全ガイド
              <br />
              初学者のための Web アプリケーションセキュリティテスト入門
            </h1>
            <p>
              ZAP 公式ドキュメント（zaproxy.org/docs/）および ZAP 公式サイト・GitHub
              リポジトリの一次情報をもとに、初学者が ZAP (Zed Attack Proxy)
              を体系的に学べるようステップバイステップでまとめたガイドです。各章末に参照した
              URL を明記しています。
            </p>
            <div className="source-line">
              <a href="https://www.zaproxy.org/" target="_blank" rel="noopener noreferrer">
                zaproxy.org
              </a>
              <a href="https://www.zaproxy.org/docs/" target="_blank" rel="noopener noreferrer">
                zaproxy.org/docs/
              </a>
            </div>
          </div>

          {/* 1. Introduction */}
          <section id="intro">
            <div className="section-eyebrow">
              <i className="ti ti-info-circle"></i>SECTION 01
            </div>
            <h2>ZAP とは何か</h2>
            <p>
              <strong>ZAP（Zed Attack Proxy）</strong>は、Web
              アプリケーションの脆弱性を発見するための無料・オープンソースのセキュリティテストツールです。もともと
              OWASP（Open Web Application Security
              Project）のフラッグシッププロジェクトとして開発され、現在は Checkmarx
              社がスポンサーとなり「<strong>ZAP by Checkmarx</strong>
              」としてコミュニティ主導で開発が続けられています。GitHub 上でも Top
              1000 に入る規模のプロジェクトです。
            </p>
            <p>
              ZAP は
              <strong>
                DAST（Dynamic Application Security
                Testing：動的アプリケーションセキュリティテスト）
              </strong>
              ツールに分類され、実際に動作している Web
              アプリケーションに対してリクエストを送信し、レスポンスを解析することで脆弱性を検出します。ソースコードを解析する
              SAST（静的解析）とは異なり、実際の通信を観察・操作する点が特徴です。
            </p>
            <p>
              ZAP
              はセキュリティ専門家でなくても扱いやすいように設計されており、開発者や
              QA エンジニアが CI/CD
              パイプラインに組み込んで日常的にセキュリティテストを行うことも、経験豊富なペネトレーションテスターが手動テストのために使うことも、どちらの用途にも対応できます。
            </p>
            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP 公式サイト
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP Desktop User Guide - Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/zaproxy/zaproxy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub - zaproxy/zaproxy
                  </a>
                </li>
                <li>
                  <a
                    href="https://checkmarx.com/product/zap/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Checkmarx ZAP 製品ページ
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 2. Disclaimer */}
          <section id="disclaimer">
            <div className="section-eyebrow">
              <i className="ti ti-alert-triangle"></i>SECTION 02
            </div>
            <h2>免責事項・法的な注意点</h2>
            <p>
              ZAP
              の学習・利用を始める前に、必ず理解しておくべき重要な注意点があります。
            </p>
            <div className="callout callout-danger">
              <i className="ti ti-gavel"></i>
              <p>
                <strong>
                  多くの法域において、許可を得ずに Web
                  サイト／アプリケーションを「テスト」することは違法です。
                </strong>
                ZAP は強力な攻撃機能（SQL インジェクション、XSS
                などのペイロード送信）を含むため、自分が所有する環境または明示的にテスト許可を得た環境に対してのみ使用してください。
              </p>
            </div>
            <p>
              学習用途では、後述する意図的に脆弱性を含んだ公開テスト環境（OWASP Juice
              Shop、Google Firing Range など）の利用を推奨します。
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>用途</th>
                    <th>対象</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>学習・練習</td>
                    <td>
                      OWASP Juice Shop、Google Firing Range、bodgeit
                      などの意図的脆弱アプリ
                    </td>
                  </tr>
                  <tr>
                    <td>業務利用</td>
                    <td>
                      自社が管理する環境、書面で許可を得たステージング／本番環境
                    </td>
                  </tr>
                  <tr>
                    <td>禁止</td>
                    <td>許可のない第三者サイトへのスキャン・攻撃</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/api/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP API Reference - Introduction（法的注意の記載）
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.owasp.org/wstg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OWASP Testing Guide
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Features */}
          <section id="features">
            <div className="section-eyebrow">
              <i className="ti ti-checklist"></i>SECTION 03
            </div>
            <h2>ZAP の主な特徴</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>機能カテゴリ</th>
                    <th>概要</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Manipulator-in-the-middle Proxy</td>
                    <td>
                      ブラウザと対象アプリの通信を中継し、リクエスト/レスポンスを観察・改ざんできる
                    </td>
                  </tr>
                  <tr>
                    <td>Spider / Ajax Spider</td>
                    <td>
                      サイト内のリンクを自動でたどり URL を網羅的に発見（Ajax
                      Spider は JavaScript で動的生成されるリンクにも対応）
                    </td>
                  </tr>
                  <tr>
                    <td>Passive Scan</td>
                    <td>
                      通過したトラフィックを受動的に解析し、攻撃を送らずに検出できる問題を報告
                    </td>
                  </tr>
                  <tr>
                    <td>Active Scan</td>
                    <td>
                      既知の攻撃パターン（ペイロード）を実際に送信し、SQL
                      インジェクションや XSS などを能動的に検出
                    </td>
                  </tr>
                  <tr>
                    <td>Automation Framework</td>
                    <td>
                      YAML ファイル 1
                      つで一連のテストを定義・自動実行できる仕組み
                    </td>
                  </tr>
                  <tr>
                    <td>REST API</td>
                    <td>
                      ほぼすべての機能を HTTP API 経由で操作可能。CI/CD
                      やカスタムスクリプトとの連携に使う
                    </td>
                  </tr>
                  <tr>
                    <td>HUD（Heads Up Display）</td>
                    <td>
                      ブラウザ上に ZAP
                      の機能をオーバーレイ表示するインターフェース
                    </td>
                  </tr>
                  <tr>
                    <td>Docker イメージ / GitHub Actions</td>
                    <td>
                      <code>zap-baseline.py</code>、<code>zap-full-scan.py</code>
                      などのパッケージスキャンとそのラッパーとなる GitHub Actions を提供
                    </td>
                  </tr>
                  <tr>
                    <td>Add-on Marketplace</td>
                    <td>
                      数十種類の追加機能（レポート生成、認証補助、GraphQL/SOAP/OpenAPI
                      対応など）を追加インストール可能
                    </td>
                  </tr>
                  <tr>
                    <td>スクリプティング</td>
                    <td>
                      JavaScript（GraalVM）、Python（Jython）、Ruby、Groovy、Kotlin
                      など複数言語でスキャンや認証をカスタマイズ可能
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/features/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Features 一覧
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/addons/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Add-ons 一覧
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/automate/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Automate ZAP
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 4. Install */}
          <section id="install">
            <div className="section-eyebrow">
              <i className="ti ti-download"></i>SECTION 04
            </div>
            <h2>インストール方法</h2>
            <p>
              ZAP は Windows・macOS・Linux・Docker
              など幅広い環境に対応しています。<strong>Java 17 以上</strong>
              が必要です（クロスプラットフォーム版・Linux 版の場合。Windows/macOS
              のインストーラー版は Java 込みの場合もあります）。
            </p>

            <h3>インストール方法一覧</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>プラットフォーム</th>
                    <th>主な方法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Windows</td>
                    <td>
                      公式インストーラー（.exe）／ Windows Package Manager（winget）／ Scoop ／ Chocolatey
                    </td>
                  </tr>
                  <tr>
                    <td>macOS</td>
                    <td>
                      公式インストーラー（.dmg、Apple Silicon / Intel 別配布）
                    </td>
                  </tr>
                  <tr>
                    <td>Linux</td>
                    <td>
                      公式インストーラー ／ Flathub（<code>flatpak install flathub org.zaproxy.ZAP</code>） ／ Snapcraft
                    </td>
                  </tr>
                  <tr>
                    <td>FreeBSD</td>
                    <td>
                      <code>zaproxy</code> パッケージ
                    </td>
                  </tr>
                  <tr>
                    <td>クロスプラットフォーム</td>
                    <td>ZIP 版（インストーラー不要、Java 17+ が別途必要）</td>
                  </tr>
                  <tr>
                    <td>コンテナ</td>
                    <td>
                      Docker（<code>ghcr.io/zaproxy/zaproxy:stable</code> など）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>リリースチャンネル</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>チャンネル</th>
                    <th>更新頻度</th>
                    <th>用途</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Stable（安定版）</td>
                    <td>フルリリースごと（+ 月1回の base image 更新）</td>
                    <td>通常利用・本番導入</td>
                  </tr>
                  <tr>
                    <td>Weekly（週次版）</td>
                    <td>毎週月曜</td>
                    <td>最新機能を試したい開発者向け</td>
                  </tr>
                  <tr>
                    <td>Nightly（夜間版）</td>
                    <td>少なくとも1日1回</td>
                    <td>最新コミットを追う場合</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout callout-info">
              <i className="ti ti-info-circle"></i>
              <p>
                2026 年 7 月時点の最新安定版は
                <strong>ZAP 2.17.0</strong>
                です。バージョンは今後も更新されるため、実際にインストールする際は公式ダウンロードページで最新版を確認してください。
              </p>
            </div>

            <h3>Docker での起動例</h3>
            <pre>
              <code className="language-bash">
                <div className="code-line"># stable イメージを取得</div>
                <div className="code-line">docker pull ghcr.io/zaproxy/zaproxy:stable</div>
                <div className="code-line"></div>
                <div className="code-line"># デスクトップUIなしでAPIサーバーとして起動（daemonモード）</div>
                <div className="code-line">docker run -u zap -p 8080:8080 -i ghcr.io/zaproxy/zaproxy:stable zap.sh \</div>
                <div className="code-line">  -daemon -host 0.0.0.0 -port 8080 \</div>
                <div className="code-line">  -config api.addrs.addr.name=.* -config api.addrs.addr.regex=true</div>
              </code>
            </pre>

            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Download
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/docker/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – ZAP Docker User Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/zaproxy/zaproxy/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub - zaproxy/zaproxy Releases
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 5. Architecture */}
          <section id="architecture">
            <div className="section-eyebrow">
              <i className="ti ti-sitemap"></i>SECTION 05
            </div>
            <h2>全体アーキテクチャと基本用語</h2>
            <p>
              ZAP の核心は「<strong>manipulator-in-the-middle proxy</strong>」（ZAP
              公式が用いる呼称。いわゆる中間者プロキシ）であるという点です。ブラウザや自動テストツールの通信を
              ZAP
              経由にすることで、すべてのリクエスト・レスポンスを観察・記録・改変できます。
            </p>

            <div className="mermaid-diagram">
              <Mermaid chart={DIAGRAM_ARCHITECTURE} />
            </div>

            <h3>基本用語まとめ</h3>
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
                    <td>Sites Tree</td>
                    <td>
                      アクセスしたすべての URL をツリー構造で表示するパネル
                    </td>
                  </tr>
                  <tr>
                    <td>History</td>
                    <td>送受信されたすべてのリクエスト/レスポンスの一覧</td>
                  </tr>
                  <tr>
                    <td>Context</td>
                    <td>テスト対象の URL 群を関連付ける論理的なグループ</td>
                  </tr>
                  <tr>
                    <td>Scope</td>
                    <td>
                      現在テスト対象としている URL の集合（Context
                      をスコープに追加して定義）
                    </td>
                  </tr>
                  <tr>
                    <td>Mode</td>
                    <td>
                      ZAP の動作制限レベル（Safe / Protected / Standard / ATTACK）
                    </td>
                  </tr>
                  <tr>
                    <td>Alert</td>
                    <td>ZAP が検出した問題（脆弱性の可能性がある事象）</td>
                  </tr>
                  <tr>
                    <td>Session</td>
                    <td>
                      現在の ZAP の作業状態。ファイルとして保存・再読み込み可能
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/features/intercept/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Manipulator-in-the-middle Proxy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/features/sitestree/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Sites Tree
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/ui/tabs/sites/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Sites tab (UI)
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 6. Proxy setup */}
          <section id="proxy-setup">
            <div className="section-eyebrow">
              <i className="ti ti-plug"></i>SECTION 06
            </div>
            <h2>起動とプロキシ設定</h2>
            <p>
              ZAP を最大限活用するには、ブラウザ（または自動テストツール）の通信を ZAP
              経由にする必要があります。
            </p>

            <h3>手順</h3>
            <ol>
              <li>ZAP を起動する。</li>
              <li>
                ZAP の Local Proxy の待受アドレス・ポート（デフォルトは
                <code>localhost:8080</code>）を確認する（Tools &gt; Options &gt;
                Local Servers/Proxies）。
              </li>
              <li>ブラウザのプロキシ設定を ZAP のアドレス・ポートに設定する。</li>
              <li>ブラウザから対象アプリケーションへアクセスしてみる。</li>
              <li>
                <strong>Sites</strong> タブ・<strong>History</strong>
                タブに通信が記録されれば成功。
              </li>
            </ol>
            <p>
              Quick Start タブの「<strong>Manual Explore</strong>」機能を使うと、ZAP
              用に事前設定されたブラウザプロファイルをワンクリックで起動できるため、既存のブラウザ設定を変更したくない場合に便利です。
            </p>

            <h3>HTTPS 通信を見るために</h3>
            <p>
              HTTPS の内容まで解析するには、ZAP が生成する
              <strong>Root CA 証明書</strong>をブラウザ／OS
              の信頼済みルート証明書としてインストールする必要があります（Tools &gt;
              Options &gt; Dynamic SSL Certificates からエクスポート可能）。
            </p>

            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Getting Started
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/proxies/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Configuring Proxies
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/ui/dialogs/options/dynsslcert/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Dynamic SSL Certificates
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 7. Quick Start */}
          <section id="quickstart">
            <div className="section-eyebrow">
              <i className="ti ti-bolt"></i>SECTION 07
            </div>
            <h2>Quick Start：最速でスキャンを試す</h2>
            <p>
              <strong>Quick Start</strong>
              アドオンはデフォルトでインストールされており、初学者が最も簡単に ZAP
              を使い始められる入口です。
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
                    <td>Automated Scan</td>
                    <td>
                      URL を 1 つ入力するだけで、Spider（通常 or Ajax）→
                      Active Scan を自動的に実行
                    </td>
                  </tr>
                  <tr>
                    <td>Manual Explore</td>
                    <td>
                      ZAP 経由でプロキシ設定済みのブラウザを起動し、HUD
                      を有効にするかどうかも選択できる
                    </td>
                  </tr>
                  <tr>
                    <td>Learn More</td>
                    <td>ローカル／オンラインの学習リソースへのリンク集</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Automated Scan を試す</h3>
            <ol>
              <li>Quick Start タブを開く。</li>
              <li>
                「URL to attack」に対象 URL（例：学習用アプリの URL）を入力する。
              </li>
              <li>「Attack」ボタンをクリックする。</li>
              <li>Spider が URL を収集し、続けて Active Scan が自動実行される。</li>
              <li>完了後、下部の Alerts タブに検出結果が一覧表示される。</li>
            </ol>

            <div className="callout callout-warning">
              <i className="ti ti-alert-triangle"></i>
              <p>
                Automated Scan は Active
                Scan（実際の攻撃ペイロード送信）まで自動実行するため、許可のない対象や本番環境には絶対に使用しないでください。
              </p>
            </div>

            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/addons/quick-start/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Quick Start Add-on
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/addons/quick-start/cmdline/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Quick Start Command Line
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 8. Context Scope Mode */}
          <section id="scsm">
            <div className="section-eyebrow">
              <i className="ti ti-target-arrow"></i>SECTION 08
            </div>
            <h2>Sites Tree・Context・Scope・Mode</h2>
            <p>初学者がつまずきやすい 4 つの概念を整理します。</p>

            <h3>Context（コンテキスト）</h3>
            <p>
              Context は、一連の URL をひとつのまとまり（＝ひとつの Web
              アプリケーション）として関連付ける仕組みです。Context
              は<strong>正規表現（regex）</strong>で定義され、その正規表現は URL
              全体にマッチする必要があります。複数の Web
              アプリをテストするシステムでは、アプリごとに Context
              を分けて定義することが推奨されています。
            </p>
            <p>Context には以下のような付随情報を関連付けられます。</p>
            <ul>
              <li>認証方式（Authentication Method）</li>
              <li>セッション管理方式（Session Management Method）</li>
              <li>ユーザー定義（Users）</li>
              <li>除外 URL、構造修飾子（Structural Modifiers）など</li>
            </ul>

            <h3>Scope（スコープ）</h3>
            <p>
              Scope は「現在テスト対象としている URL の集合」であり、Context
              をスコープに追加することで定義されます。デフォルトでは何もスコープに入っていません。Scope
              は以下に影響します。
            </p>
            <ul>
              <li>Protected Mode で「危険な操作」を実行できる対象</li>
              <li>History タブなどでの表示フィルタ</li>
            </ul>

            <h3>Mode（モード）</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Mode</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Safe</td>
                    <td>危険な操作を一切許可しない</td>
                  </tr>
                  <tr>
                    <td>Protected</td>
                    <td>Scope 内の URL に対してのみ危険な操作を許可</td>
                  </tr>
                  <tr>
                    <td>Standard</td>
                    <td>制限なし（デフォルト）</td>
                  </tr>
                  <tr>
                    <td>ATTACK</td>
                    <td>
                      Scope 内で新しく発見されたノードを自動的に Active Scan
                      する
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mermaid-diagram">
              <Mermaid chart={DIAGRAM_MODE} />
            </div>

            <p>
              初学者は、意図しない対象を誤って攻撃しないよう
              <strong>Protected Mode</strong>
              の利用が推奨されています。
            </p>

            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/features/contexts/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Contexts
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/features/scope/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Scope
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/features/modes/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Modes
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/ui/dialogs/session/contexts/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Session Context screens
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 9. Manual explore */}
          <section id="manual-explore">
            <div className="section-eyebrow">
              <i className="ti ti-hand-click"></i>SECTION 09
            </div>
            <h2>手動探索（Explore）と MITM プロキシ</h2>
            <p>
              自動化されたスキャンだけでは、フォーム入力やログイン後の画面など、実際にユーザーが操作しないと到達できないページを見逃すことがあります。そのため
              ZAP
              を使ったテストの最初のステップとして「<strong>手動探索（Explore）</strong>」が推奨されます。
            </p>

            <h3>手動探索の考え方</h3>
            <ol>
              <li>ZAP 経由でプロキシ設定したブラウザで対象アプリを開く。</li>
              <li>
                すべてのリンクをクリックし、すべてのボタンを押し、すべてのフォームに入力・送信する。
              </li>
              <li>
                アプリが複数のロール（一般ユーザー・管理者など）を持つ場合は、ロールごとに別セッションで探索する。
              </li>
              <li>
                これにより Sites Tree・History に多くの URL
                とリクエストパターンが記録され、後続の Spider・Active Scan
                の精度が上がる。
              </li>
            </ol>

            <h3>Breakpoints（ブレークポイント）</h3>
            <p>
              リクエストやレスポンスをその場で書き換えてテストしたい場合は、
              <strong>Breakpoints</strong>
              機能を使います。特定の条件に一致した通信を一時停止し、内容を編集してから送信できます。
            </p>

            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/pentest/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – A Basic Penetration Test
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/features/breakpoints/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Breakpoints
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/features/intercept/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Manipulator-in-the-middle Proxy
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 10. Spider */}
          <section id="spider">
            <div className="section-eyebrow">
              <i className="ti ti-network"></i>SECTION 10
            </div>
            <h2>Spider（クローラー）</h2>
            <p>
              <strong>Spider</strong>
              は、対象アプリケーション内のリンクを自動的にたどり、URL
              を網羅的に発見する機能です。HTML の <code>&lt;a&gt;</code> タグや
              <code>&lt;form&gt;</code> タグなどを解析してリンクを収集します。
            </p>

            <h3>通常の Spider と Ajax Spider の違い</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>Spider（通常）</th>
                    <th>Ajax Spider</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>解析対象</td>
                    <td>静的 HTML のリンク・フォーム</td>
                    <td>JavaScript によって動的生成される DOM / リンク</td>
                  </tr>
                  <tr>
                    <td>動作方式</td>
                    <td>HTTP リクエストを直接解析</td>
                    <td>
                      実ブラウザ（Selenium
                      経由）でページを描画してリンクを収集
                    </td>
                  </tr>
                  <tr>
                    <td>速度</td>
                    <td>高速</td>
                    <td>低速（実ブラウザ起動のため）</td>
                  </tr>
                  <tr>
                    <td>向いているアプリ</td>
                    <td>従来型の MPA（マルチページアプリ）</td>
                    <td>
                      SPA（React/Vue などの JavaScript
                      フレームワーク使用アプリ）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>両方を組み合わせて使うことで、より網羅的な URL 収集が可能になります。</p>

            <h3>使い方</h3>
            <ol>
              <li>
                Sites タブで対象ノードを右クリック →「Attack」→「Spider…」を選択。
              </li>
              <li>Spider dialog でスコープや最大深度、Context/User などを設定。</li>
              <li>「Start Scan」で実行。</li>
              <li>Spider タブで進捗と発見された URL のリストを確認。</li>
            </ol>

            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/features/spider/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Spider (Feature)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/addons/spider/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Spider Add-on
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/addons/ajax-spider/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – AJAX Spider Add-on
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/ui/dialogs/spider/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Spider dialog
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 11. Passive scan */}
          <section id="passive-scan">
            <div className="section-eyebrow">
              <i className="ti ti-eye"></i>SECTION 11
            </div>
            <h2>Passive Scan（受動的スキャン）</h2>
            <p>
              <strong>Passive Scan（受動的スキャン）</strong> は、ZAP
              を通過したすべてのトラフィックをバックグラウンドで解析し、<strong>攻撃ペイロードを一切送信せずに</strong>検出できる問題を報告する機能です。ZAP
              を起動してブラウザ経由でアクセスするだけで、常にバックグラウンドで動作しています。
            </p>

            <h3>Passive Scan で検出できる代表例</h3>
            <ul>
              <li>
                セキュリティ関連 HTTP
                ヘッダーの欠落（<code>X-Content-Type-Options</code>、
                <code>Content-Security-Policy</code>
                など）
              </li>
              <li>
                Cookie の <code>Secure</code> / <code>HttpOnly</code> 属性の欠落
              </li>
              <li>ソースコード内のコメントに含まれる機密情報の可能性</li>
              <li>
                脆弱なバージョンの JavaScript ライブラリ（Retire.js
                アドオンとの連携）
              </li>
              <li>サーバーのバージョン情報の露出</li>
            </ul>

            <div className="callout callout-success">
              <i className="ti ti-shield-check"></i>
              <p>
                Passive Scan は安全なため、本番環境に対しても実行可能です（Active
                Scan とは異なり攻撃を行わないため）。
              </p>
            </div>

            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/features/pscan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Passive Scan (Feature)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/addons/passive-scanner/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Passive Scanner Add-on
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Passive Scan Rules
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 12. Active scan */}
          <section id="active-scan">
            <div className="section-eyebrow">
              <i className="ti ti-radar-2"></i>SECTION 12
            </div>
            <h2>Active Scan（能動的スキャン）</h2>
            <p>
              <strong>Active Scan（能動的スキャン）</strong>
              は、既知の攻撃パターン（ペイロード）を対象アプリケーションに実際に送信し、その応答から脆弱性の有無を判定する機能です。SQL
              インジェクション、Cross-Site
              Scripting（XSS）、コマンドインジェクションなどを検出できます。
            </p>

            <div className="callout callout-danger">
              <i className="ti ti-alert-octagon"></i>
              <p>
                <strong>重要</strong>：Active Scan
                は実際に攻撃を行うため、必ず許可を得た対象・テスト環境に対してのみ実行してください。データの破損や意図しない副作用（メール送信、レコード削除など）が発生する可能性があります。
              </p>
            </div>

            <h3>実行の流れ</h3>
            <ol>
              <li>
                Spider などで URL を十分に収集しておく（Active Scan は「発見済みの
                URL」に対してのみ攻撃を行うため）。
              </li>
              <li>
                Sites タブでノードを右クリック →「Attack」→「Active Scan…」を選択。
              </li>
              <li>
                Scan Policy
                を選択し、スキャン対象の入力ベクトル（クエリパラメータ、POST
                データ、Cookie、HTTP ヘッダーなど）を確認。
              </li>
              <li>「Start Scan」で実行。</li>
              <li>
                Active Scan タブで進捗を確認し、完了後は Alerts タブで結果を確認。
              </li>
            </ol>

            <h3>Active Scan の入力ベクトル設定</h3>
            <p>
              デフォルトでは URL クエリパラメータと POST
              パラメータが対象ですが、Options &gt; Active Scan Input Vectors 画面で
              Cookie
              やヘッダーもスキャン対象に含めるよう変更できます（誤検知や負荷増大とのトレードオフに注意）。
            </p>

            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/features/ascan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Active Scan (Feature)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/addons/active-scan-rules/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Active Scan Rules
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/ui/dialogs/advascan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Active Scan dialog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/ui/dialogs/options/ascaninput/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Options Active Scan Input Vectors screen
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 13. Pentest flow */}
          <section id="pentest-flow">
            <div className="section-eyebrow">
              <i className="ti ti-route"></i>SECTION 13
            </div>
            <h2>基本的なペネトレーションテストの流れ</h2>
            <p>
              ZAP 公式ドキュメントでは、基本的なペネトレーションテストの流れを次の 5
              ステップで説明しています。
            </p>

            <div className="mermaid-diagram">
              <Mermaid chart={DIAGRAM_PENTEST_FLOW} />
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ステップ</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>① Explore</td>
                    <td>
                      ブラウザでアプリのすべての機能・リンク・フォームを操作する。複数ロールがある場合はロールごとに実施
                    </td>
                  </tr>
                  <tr>
                    <td>② Spider</td>
                    <td>
                      Spider / Ajax Spider を使い、見逃した URL
                      や動的生成リンクを発見する
                    </td>
                  </tr>
                  <tr>
                    <td>③ Forced Browse</td>
                    <td>
                      「Forced
                      Browse」アドオンを使い、リンクされていないファイルやディレクトリ（バックアップファイルなど）を辞書ベースで探索する
                    </td>
                  </tr>
                  <tr>
                    <td>④ Active Scan</td>
                    <td>Active Scanner で基本的な脆弱性を検出する</td>
                  </tr>
                  <tr>
                    <td>⑤ Manual Test</td>
                    <td>
                      自動化では見つからない論理的な脆弱性（認可不備など）を
                      OWASP Testing Guide を参考に手動でテストする
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              自動化された ①〜④
              のステップだけでも基本的な脆弱性は発見できますが、認可制御の不備やビジネスロジックの欠陥など、<strong>自動スキャンでは検出できない問題</strong>を見つけるためには
              ⑤ の手動テストが不可欠です。
            </p>

            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/pentest/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – A Basic Penetration Test
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/addons/forced-browse/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Forced Browse Add-on
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.owasp.org/wstg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OWASP Testing Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAPping the OWASP Top 10（ZAP ドキュメントトップ）
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* 14. Alerts */}
          <section id="alerts">
            <div className="section-eyebrow">
              <i className="ti ti-bell-ringing"></i>SECTION 14
            </div>
            <h2>Alerts（検出結果）の見方</h2>
            <p>
              ZAP
              がスキャン中に検出した問題は<strong>Alert（アラート）</strong>として記録されます。Alerts
              タブでは、検出されたすべてのアラートがツリー形式で一覧表示されます。
            </p>

            <h3>Alert の主なフィールド</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>フィールド</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>
                      アラート名（例：「Cross Site Scripting (Reflected)」）
                    </td>
                  </tr>
                  <tr>
                    <td>URL</td>
                    <td>検出された URL（正規化された URL）</td>
                  </tr>
                  <tr>
                    <td>Risk（リスク）</td>
                    <td>深刻度：Informational / Low / Medium / High</td>
                  </tr>
                  <tr>
                    <td>Confidence（確信度）</td>
                    <td>
                      検出結果の確からしさ：Low / Medium / High（人が手動で
                      False Positive / Confirmed に変更可能）
                    </td>
                  </tr>
                  <tr>
                    <td>Parameter</td>
                    <td>攻撃対象となったパラメータ名</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>問題の詳細説明</td>
                  </tr>
                  <tr>
                    <td>Solution</td>
                    <td>
                      一般的な対処方法（ソースコードを解析しているわけではないため一般論に留まる）
                    </td>
                  </tr>
                  <tr>
                    <td>Reference</td>
                    <td>詳細情報へのリンク</td>
                  </tr>
                  <tr>
                    <td>Tags</td>
                    <td>関連タグ（CWE、OWASP Top 10 カテゴリなど）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Risk × Confidence の考え方</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Risk ＼ Confidence</th>
                    <th>Low</th>
                    <th>Medium</th>
                    <th>High</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>High</td>
                    <td>要確認（誤検知の可能性あり）</td>
                    <td>優先度高</td>
                    <td>最優先で対応</td>
                  </tr>
                  <tr>
                    <td>Medium</td>
                    <td>参考情報として確認</td>
                    <td>通常の優先度</td>
                    <td>優先的に確認</td>
                  </tr>
                  <tr>
                    <td>Low</td>
                    <td>参考情報</td>
                    <td>参考情報</td>
                    <td>低リスクだが確実</td>
                  </tr>
                  <tr>
                    <td>Informational</td>
                    <td>情報提供のみ</td>
                    <td>情報提供のみ</td>
                    <td>情報提供のみ</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              ZAP
              が検出する全アラートの一覧は公式サイトに常時公開されています。個々のアラートには固有の
              Alert Reference（ID）があり、静的なページ URL が割り当てられています。
            </p>

            <div className="refs">
              <div className="refs-title">
                <i className="ti ti-link"></i>参考 URL
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/start/features/alerts/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Alerts (Feature)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/alerts/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – 全アラート一覧
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/alerttags/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Alert Tags 一覧
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/ui/tabs/alerts/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Alerts tab (UI)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zaproxy.org/docs/desktop/ui/dialogs/addalert/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZAP – Add Alert dialog
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


