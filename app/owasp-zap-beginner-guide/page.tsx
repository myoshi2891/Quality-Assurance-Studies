import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import './owasp-zap-beginner-guide.css';

export const metadata: Metadata = {
  title: 'OWASP ZAP 完全ガイド ― 初学者のための Web アプリケーションセキュリティテスト入門 | QA Studies',
  description:
    'ZAP 公式ドキュメントの一次情報をもとに、初学者が ZAP (Zed Attack Proxy) を体系的に学べるようステップバイステップでまとめたガイド。インストール、プロキシ設定、Spider、Passive/Active Scan、認証、自動化までを網羅。',
};

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
        </div>
      </main>
    </div>
  );
}
