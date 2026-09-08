import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './sonarqube-intermediate-guide.css';

const DIAGRAM_1 = `flowchart LR
DEV["開発者"] --> IDE["SonarQube for IDE"]
IDE -->|"Connected Mode"| SERVER["SonarQube Server / Cloud"]
DEV --> REPO["Gitリポジトリ"]
REPO -->|"push / PR作成"| CI["CI/CDパイプライン"]
CI -->|"SonarScanner実行"| SERVER
SERVER -->|"Quality Gate結果"| CI
SERVER -->|"PRデコレーション"| REPO
AGENT["AIコーディングエージェント"] -->|"MCP経由"| SERVER`;

const DIAGRAM_2 = `flowchart TD
SCANNER["SonarScanner"] -->|"解析レポート送信"| WEB["Webプロセス"]
WEB --> QUEUE["レポートジョブキュー"]
QUEUE --> CE["Compute Engine"]
CE --> DB["リレーショナルDB"]
CE --> ES["Elasticsearch"]
WEB --> DB
WEB --> ES
USER["利用者"] -->|"ブラウザ / REST API"| WEB`;

const DIAGRAM_3 = `flowchart TD
LB["ロードバランサー"] --> APP1["アプリノード1 (Web+CE)"]
LB --> APP2["アプリノード2 (Web+CE)"]
APP1 --> ES1["検索ノード1"]
APP1 --> ES2["検索ノード2"]
APP1 --> ES3["検索ノード3"]
APP2 --> ES1
APP2 --> ES2
APP2 --> ES3
APP1 --> DB["共有DB"]
APP2 --> DB`;

export default function SonarQubeIntermediateGuidePage() {
  return (
    <div className="sonarqube-page">
      <div className="app-shell">
        <NavBar />

        <main className="content">
          <div className="content-inner">
            <header className="hero">
              <span className="eyebrow">
                <i className="ti ti-point-filled"></i>Intermediate &ndash; Advanced Guide
              </span>
              <h1>SonarQube 完全解説ガイド</h1>
              <p className="lead">
                SonarSource社公式ドキュメント(docs.sonarsource.com)および公式プロダクトサイト(sonarsource.com)を主軸に、信頼できる複数の情報源を横断的にリサーチして作成した技術解説です。SonarQubeの基礎は理解している前提で、アーキテクチャ・品質モデルの内部構造・CI/CD統合、そして2026年時点でのAIエージェント統合(MCP
                Server / Agentic Analysis / Sonar
                Vortex)まで、実務で必要になる深さまで踏み込んで解説します。
              </p>
              <div className="callout">
                <i className="ti ti-alert-circle"></i>
                <div>
                  <strong>執筆時点の最新情報:</strong> SonarQube Serverの最新版は
                  <strong>2026.3</strong>(Long-Term Active版は
                  <strong>2026.1 LTA</strong>
                  )です。2025年からカレンダーバージョニングを採用しており、旧「SonarQube」ブランドは「SonarQube
                  Server」(セルフホスト)と「SonarQube
                  Cloud」(旧SonarCloud、フルマネージドSaaS)に整理されています。各セクション末尾に参照元URLを明記していますので、最新の仕様変更は必ず一次情報でも確認してください。
                </div>
              </div>
            </header>

            {/* 0 */}
            <section className="doc-section" id="overview">
              <span className="section-kicker">
                <i className="ti ti-info-circle"></i>SECTION 00
              </span>
              <h2>SonarQubeとは何か ― AI時代における立ち位置</h2>
              <p>
                SonarQubeは、SonarSource社が開発する自動コードレビュー・静的解析(SAST:
                Static Application Security
                Testing)プラットフォームです。ソースコードを解析し、バグ(Bug)、脆弱性(Vulnerability)、セキュリティホットスポット(Security
                Hotspot)、コードスメル(Code
                Smell)を検出し、CI/CDパイプラインやIDE、DevOpsプラットフォームに統合することで、コードがマージ・リリースされる前に品質と安全性を検証します。40以上の言語・フレームワーク・IaCプラットフォームに対応し、7,000種類を超えるルールを保有しています。
              </p>
              <p>
                重要なのは、SonarQubeが単なる「バグ検出ツール」ではなく、
                <strong>組織のコーディング標準を自動的に強制するガバナンス基盤</strong>
                として設計されている点です。近年は特に、生成AIやコーディングエージェント(Claude
                Code、GitHub
                Copilot、Cursorなど)が書いたコードの検証という新しい役割が急速に重要になっており、SonarSource社は「AI時代のコード検証レイヤー」を明確な戦略として打ち出しています。2026年のGartner&reg;
                Magic Quadrant&trade;でもLeaderとして評価されています。
              </p>
              <h3>ブランド構成の整理(2024年以降の変更点)</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>旧称</th>
                      <th>現称</th>
                      <th>位置づけ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SonarQube</td>
                      <td><strong>SonarQube Server</strong></td>
                      <td>セルフホスト型(オンプレミス/プライベートクラウド)</td>
                    </tr>
                    <tr>
                      <td>SonarCloud</td>
                      <td><strong>SonarQube Cloud</strong></td>
                      <td>フルマネージドSaaS</td>
                    </tr>
                    <tr>
                      <td>SonarLint</td>
                      <td><strong>SonarQube for IDE</strong></td>
                      <td>IDE拡張機能(VS Code, IntelliJ, Visual Studio, Eclipse)</td>
                    </tr>
                    <tr>
                      <td>―</td>
                      <td><strong>SonarQube MCP Server</strong></td>
                      <td>AIコーディングエージェント向けMCP(Model Context Protocol)連携</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Homepage | SonarQube Server
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sonarsource.com/products/sonarqube/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code Quality, Security &amp; Static Analysis Tool with SonarQube
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 1 */}
            <section className="doc-section" id="ecosystem">
              <span className="section-kicker">
                <i className="ti ti-topology-star-3"></i>SECTION 01
              </span>
              <h2>プロダクトファミリーとエコシステム全体像</h2>
              <p>
                SonarQubeの価値は単体の解析エンジンではなく、開発ライフサイクル全体を貫く「一貫した検証ループ」にあります。SonarSourceはこれを
                <strong>Sonar Ecosystem</strong> と呼んでおり、以下の構成要素が有機的に連携します。
              </p>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_1} />
              </div>
              <p>
                このエコシステムの最大の強みは、<strong>「IDEでローカルに検知されるルール」と「CI/CDでQuality Gateとして判定されるルール」が完全に同期される点</strong>です(Connected
                Mode機能)。開発者がエディタでコードを書いている最中にリアルタイムで警告を受け、PRを作成する頃には大半のIssueが修正済みになっている、というワークフローを実現できます。
              </p>
              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Homepage | SonarQube Server
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/user-guide/connected-mode.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connected Mode
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 2 */}
            <section className="doc-section" id="architecture">
              <span className="section-kicker"><i className="ti ti-server-2"></i>SECTION 02</span>
              <h2>アーキテクチャ徹底解説</h2>
              <p>
                SonarQube
                Serverは単一プロセスではなく、複数のサブプロセスが協調して動作する分散アーキテクチャです。中級以上のエンジニアがトラブルシューティングやキャパシティプランニングを行う上で、この内部構造の理解は不可欠です。
              </p>

              <h3>2.1 4つのコアコンポーネント</h3>
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
                      <td><strong>Web</strong></td>
                      <td>SonarQube ServerのユーザーインターフェースおよびREST APIを提供するプロセス</td>
                    </tr>
                    <tr>
                      <td><strong>Compute Engine (CE)</strong></td>
                      <td>スキャナーが送信した解析レポートを処理し、DBに保存するバックグラウンド処理系</td>
                    </tr>
                    <tr>
                      <td><strong>Elasticsearch (ES)</strong></td>
                      <td>DBの内容をインデックス化し、高速な検索・フィルタリングを実現する検索エンジン</td>
                    </tr>
                    <tr>
                      <td><strong>Sonar(ラッパープロセス)</strong></td>
                      <td>上記3プロセスの起動・死活監視を管理するJavaプロセス</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                これらに加えて、<strong>リレーショナルデータベース</strong>(PostgreSQL、Oracle、Microsoft SQL
                Serverのいずれか)が、メトリクス・Issue・インスタンス設定・解析ジョブキューを永続化します。WebプロセスとCompute
                Engineの両方が、DBとElasticsearchへの書き込み時にデータ整合性を保証する設計になっています。
              </p>

              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_2} />
              </div>

              <h3>2.2 解析処理の流れ</h3>
              <ol>
                <li>
                  CIパイプライン、またはローカル環境でSonarScannerがソースコードを静的解析し、解析レポート(バイナリ形式)を生成する
                </li>
                <li>
                  スキャナーはWebプロセスにレポートをアップロードし、DB上のジョブキューに登録される
                </li>
                <li>
                  Compute
                  Engineがキューからジョブを取り出し、Issueのトラッキング(過去のIssueとの突合)、メトリクス計算、Quality
                  Gateの評価を実行する
                </li>
                <li>
                  結果はDBに保存され、Elasticsearchのインデックスが更新される(IssueIndexerなどが担当)
                </li>
                <li>Web UI・API・PRデコレーション・IDE通知にその結果が反映される</li>
              </ol>

              <h3>2.3 本番環境向けリファレンスアーキテクチャ</h3>
              <p>
                公式ドキュメントでは、最大1,000万行(LOC)規模を「通常利用」と定義した非HA構成のリファレンスアーキテクチャが公開されています。構成要素は以下の通りです。
              </p>
              <ul>
                <li>
                  SonarQube Server(Developer/Enterprise
                  Edition)をインストールした仮想マシン +
                  nginxによるHTTPSリバースプロキシ
                </li>
                <li>専用ホスト上のPostgreSQLデータベース</li>
                <li>GitHub Actionsとの解析連携、GitHub.com経由の認証</li>
                <li>Prometheusによる監視、SMTPリレー経由のメール通知</li>
              </ul>
              <p>
                日次のメインブランチスキャンと複数のプルリクエスト解析を「通常利用」と想定しており、それを超える頻度でのスキャンや、平均50万行を超える大規模リポジトリの解析には、Compute
                Engineへの追加のメモリ・CPUリソース割り当てが必要になります。可用性が重要な場合は、後述の
                <strong>Data Center Edition</strong> の利用が推奨されます。
              </p>

              <h3>2.4 Data Center Edition(高可用性構成)</h3>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_3} />
              </div>
              <p>
                Data Center Edition (DCE) のデフォルトトポロジーは、
                <strong>アプリケーションノード2台 + 検索ノード(Elasticsearchクラスタ)3台</strong>
                で構成され、この構成であればアプリケーションノード1台・検索ノード1台が同時に失われても稼働を継続できます。検索ノードはユニキャスト・ディスカバリでElasticsearchクラスタを形成します。ロードバランサーはユーザー側で用意する必要があります。
              </p>

              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/server-installation/server-components-overview"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Server components | SonarQube Server
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/latest/setup-and-upgrade/reference-architectures/up-to-10m-loc/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reference architecture (DE and EE)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/server-installation/data-center-edition/dce-topology"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DCE topology | SonarQube Server
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://deepwiki.com/SonarSource/sonarqube/12-compute-engine"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Compute Engine (DeepWiki)
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 3 */}
            <section className="doc-section" id="editions">
              <span className="section-kicker"><i className="ti ti-stack-2"></i>SECTION 03</span>
              <h2>
                エディション比較 ― Community Build / Developer / Enterprise / Data Center / Cloud
              </h2>
              <p>
                SonarQubeは「オープンコア」モデルを採用しており、無料のオープンソース版から、エンタープライズ機能を含む商用版まで段階的にラインナップされています。2025年に「Community
                Edition」は<strong>「Community Build」</strong>
                に名称変更されました(機能・制限に変更はなく、名称のみの変更です)。
              </p>

              <h3>3.1 セルフホスト版(SonarQube Server)エディション比較</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>機能</th>
                      <th>Community Build</th>
                      <th>Developer Edition</th>
                      <th>Enterprise Edition</th>
                      <th>Data Center Edition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ライセンス</td>
                      <td>無料・LGPL-3.0(OSS)</td>
                      <td>商用(有償)</td>
                      <td>商用(有償)</td>
                      <td>商用(有償)</td>
                    </tr>
                    <tr>
                      <td>対応言語数</td>
                      <td>20以上</td>
                      <td>30以上(C, C++, Objective-C等追加)</td>
                      <td>Developerの全機能 + COBOL, RPG, Apex等</td>
                      <td>Enterpriseと同一</td>
                    </tr>
                    <tr>
                      <td>ブランチ分析</td>
                      <td>不可(メインのみ)</td>
                      <td>可能</td>
                      <td>可能</td>
                      <td>可能</td>
                    </tr>
                    <tr>
                      <td>PR分析・デコレーション</td>
                      <td>不可</td>
                      <td>可能</td>
                      <td>可能</td>
                      <td>可能</td>
                    </tr>
                    <tr>
                      <td>Taint Analysis</td>
                      <td>不可</td>
                      <td>可能</td>
                      <td>可能</td>
                      <td>可能</td>
                    </tr>
                    <tr>
                      <td>ポートフォリオ管理</td>
                      <td>不可</td>
                      <td>不可</td>
                      <td>可能</td>
                      <td>可能</td>
                    </tr>
                    <tr>
                      <td>コンプライアンスレポート</td>
                      <td>不可</td>
                      <td>不可</td>
                      <td>可能</td>
                      <td>可能</td>
                    </tr>
                    <tr>
                      <td>Prioritized Rules</td>
                      <td>不可</td>
                      <td>不可</td>
                      <td>可能</td>
                      <td>可能</td>
                    </tr>
                    <tr>
                      <td>並列レポート処理</td>
                      <td>不可(1 worker)</td>
                      <td>不可(1 worker)</td>
                      <td>可能(複数worker設定可)</td>
                      <td>可能(複数ノード・複数worker)</td>
                    </tr>
                    <tr>
                      <td>高可用性クラスタ</td>
                      <td>不可</td>
                      <td>不可</td>
                      <td>不可</td>
                      <td>可能(アクティブ/アクティブ)</td>
                    </tr>
                    <tr>
                      <td>SAML / SSO統合</td>
                      <td>一部限定</td>
                      <td>可能</td>
                      <td>可能</td>
                      <td>可能</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>中級者が押さえるべき最大の境界線:</strong>
                「ブランチ分析」「PR分析」「Taint
                Analysis(インジェクション等の高度なセキュリティ解析)」は、<strong>Developer
                Edition以上でしか利用できません</strong>。Community
                Buildではメインブランチのみの分析となり、CI/CDでPRをマージ前にブロックする運用(Clean
                as You Code)が成立しにくいため、チーム開発の実務では実質的にDeveloper
                Editionが事実上の下限となります。
              </p>

              <h3>3.2 料金の目安(セルフホスト、行数課金モデル)</h3>
              <p>
                SonarQubeの有償ライセンスは<strong>最大解析行数(LOC: Lines of
                Code)</strong>に基づく年額課金モデルです。プロジェクトで最も行数が多いブランチのLOCがカウント対象になります。Developer
                EditionはLOC数に応じた固定価格帯が設定されており、Enterprise/Data
                Centerは個別見積もりです。以下はサードパーティのレビューサイトによる2026年時点の<strong>目安</strong>であり、正式な金額は必ず公式のPricingページで確認してください。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>エディション</th>
                      <th>目安価格帯(年額)</th>
                      <th>備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Community Build</td>
                      <td>無料</td>
                      <td>LOC上限なし</td>
                    </tr>
                    <tr>
                      <td>Developer Edition</td>
                      <td>数百〜数千ドル程度(LOC次第)</td>
                      <td>公式サイトで開始価格を公開</td>
                    </tr>
                    <tr>
                      <td>Enterprise Edition</td>
                      <td>1万ドル台後半〜(1M LOC目安)</td>
                      <td>要問い合わせ</td>
                    </tr>
                    <tr>
                      <td>Data Center Edition</td>
                      <td>数万〜10万ドル超</td>
                      <td>インフラ費用は別途</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.3 SonarQube Cloud(フルマネージドSaaS)</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>プラン</th>
                      <th>概要</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Free</strong></td>
                      <td>
                        最大50,000 LOC・5ユーザーまで。30以上の言語でブランチ分析・PR分析が可能(セルフホストのCommunity Buildより機能が豊富)
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Team</strong></td>
                      <td>月額数十ドル程度からLOCに応じて段階的に増加</td>
                    </tr>
                    <tr>
                      <td><strong>Enterprise</strong></td>
                      <td>
                        Taint Analysis・SCA・コンプライアンスレポート・ポートフォリオビューを含むカスタム見積もり
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                SonarQube Cloudの無料枠は、セルフホストのCommunity
                Buildにはないブランチ分析・PRデコレーションを含んでいる点が大きな違いです。インフラ管理を避けたい小規模チームには有力な選択肢になります。
              </p>

              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://www.sonarsource.com/blog/sonarqube-compare-editions/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarQube Compare Editions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dev.to/rahulxsingh/sonarqube-pricing-in-2026-community-developer-enterprise-and-cloud-costs-explained-bdg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarQube Pricing in 2026(サードパーティ分析)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dev.to/rahulxsingh/sonarqube-community-vs-enterprise-comparison-2j0d"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarQube Community vs Enterprise
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dev.to/rahulxsingh/sonarqube-community-vs-developer-edition-24oo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarQube Community vs Developer Edition
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sonarsource.com/plans-and-pricing/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      公式Pricingページ
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 4 */}
            <section className="doc-section" id="quickstart">
              <span className="section-kicker"><i className="ti ti-rocket"></i>SECTION 04</span>
              <h2>クイックスタート ― Dockerによる構築</h2>
              <p>
                本番環境では公式にDockerイメージまたはHelm
                Chart(Kubernetes/OpenShift)での構築が推奨されており、ZIPインストールは両者が利用できない場合の最終手段とされています。
              </p>
              <pre>
                <code className="language-bash">
                  <div className="code-line"># データ永続化用のボリュームを作成(bind mountではなくvolumeを使うこと。</div>
                  <div className="code-line"># bind mountを使うとプラグインが正しく展開されない)</div>
                  <div className="code-line">docker volume create --name sonarqube_data</div>
                  <div className="code-line">docker volume create --name sonarqube_logs</div>
                  <div className="code-line">docker volume create --name sonarqube_extensions</div>
                  <div className="code-line"></div>
                  <div className="code-line"># 評価用: 組み込みH2データベースで起動(本番非推奨)</div>
                  <div className="code-line">docker run -d --name sonarqube \</div>
                  <div className="code-line">  -p 9000:9000 \</div>
                  <div className="code-line">  -v sonarqube_data:/opt/sonarqube/data \</div>
                  <div className="code-line">  -v sonarqube_logs:/opt/sonarqube/logs \</div>
                  <div className="code-line">  -v sonarqube_extensions:/opt/sonarqube/extensions \</div>
                  <div className="code-line">  sonarqube:community</div>
                </code>
              </pre>
              <p>
                起動後、ブラウザで <code>http://localhost:9000</code> にアクセスし、初期資格情報(<code>admin</code> / <code>admin</code>)でログインします(初回ログイン時に強制変更)。
              </p>
              <h3>本番構築時の重要な注意点</h3>
              <ul>
                <li>
                  <strong>H2データベースの禁止:</strong>
                  組み込みH2データベースは評価用のみであり、アップグレードが不可能でデータ破損リスクがあります。本番ではPostgreSQLなどを外部DBとして指定してください。
                </li>
                <li>
                  <strong>Docker volumeの使用:</strong>
                  <code>-v /host/path:/opt/sonarqube/data</code> のようなホストディレクトリ直接のbind
                  mountは、Elasticsearchのファイル権限要件や拡張プラグイン展開の制約によりトラブルの元になります。名前付きボリューム(<code>docker volume create</code>)を使用してください。
                </li>
                <li>
                  <strong>vm.max_map_count:</strong>
                  組み込みElasticsearchが正常に起動するために、Linuxホストで <code>sysctl -w vm.max_map_count=262144</code>(永続化は <code>/etc/sysctl.conf</code>)の設定が必須です。WSL2やDocker
                  Desktopでも同様の要件があります。
                </li>
              </ul>
              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/10.0/setup-and-upgrade/install-the-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Install the server | SonarQube Server
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/2026.1/analyzing-source-code/scanners/scanner-environment/general-requirements"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      General requirements | SonarQube Server
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 5 */}
            <section className="doc-section" id="scanners">
              <span className="section-kicker"><i className="ti ti-scan"></i>SECTION 05</span>
              <h2>スキャナーの選択と設定</h2>
              <p>
                SonarScannerは「解析エンジンをCI/CDパイプラインまたはローカル環境で実行するクライアント」です。ビルドシステムごとに専用スキャナーが用意されており、
                <strong>汎用のSonarScanner CLIを使うべきでないケース</strong>
                を正しく理解することが、解析品質を落とさないための第一歩です。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>スキャナー</th>
                      <th>対象</th>
                      <th>備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>SonarScanner for Maven</strong></td>
                      <td>Mavenプロジェクト</td>
                      <td><code>mvn</code> ゴールとして実行。pom.xmlの情報を自動的に読み取るため設定が最小限で済む</td>
                    </tr>
                    <tr>
                      <td><strong>SonarScanner for Gradle</strong></td>
                      <td>Gradleプロジェクト</td>
                      <td>Gradleタスクとして実行。マルチモジュール構成にも対応</td>
                    </tr>
                    <tr>
                      <td><strong>SonarScanner for .NET</strong></td>
                      <td>C# / VB.NET</td>
                      <td>C#/VB.NETの解析には<strong>必須</strong>。CLIでは代替不可</td>
                    </tr>
                    <tr>
                      <td><strong>SonarScanner for NPM</strong></td>
                      <td>JavaScript/TypeScript</td>
                      <td>package.json連携</td>
                    </tr>
                    <tr>
                      <td><strong>SonarScanner CLI</strong></td>
                      <td>上記に該当しない全プロジェクト</td>
                      <td>C#/VB.NETは非対応。ARM(macOS/Linux)にも対応</td>
                    </tr>
                    <tr>
                      <td><strong>SonarQube Scan GitHub Action</strong></td>
                      <td>GitHub Actions全般</td>
                      <td>C, C++, Objective-C, Dartの公式スキャン方法</td>
                    </tr>
                    <tr>
                      <td><strong>Azure DevOps / Jenkins Extension</strong></td>
                      <td>各CIツール</td>
                      <td>CIネイティブな統合</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>重要な原則:</strong>
                「Maven/Gradle/.NETプロジェクトに汎用CLIを使うと解析品質が劣化する」と公式ドキュメントは明言しています。ビルドツール固有の情報(依存関係・コンパイル済みバイナリの場所・テストレポートパスなど)を活用できないためです。
              </p>
              <h3>5.1 JRE(Java Runtime)要件の注意点</h3>
              <p>
                スキャナー自体の実行にはJavaランタイムが必要です(解析対象コードの言語とは無関係)。多くのスキャナーは
                <strong>JRE自動プロビジョニング</strong>(
                <code>sonar.scanner.skipJreProvisioning=false</code>
                がデフォルト)に対応しており、通常は追加設定不要です。ただし、EDR(Endpoint
                Detection and
                Response)製品がスキャナーの動作を阻害するケースが報告されており、その場合はスキャナーの作業ディレクトリに限定した除外設定で対応することが推奨されています(アンチウイルス自体を無効化するのは非推奨)。
              </p>
              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/analyzing-source-code/scanners/sonarscanner"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarScanner CLI
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/analyzing-source-code/scanners/sonarscanner-for-maven"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarScanner for Maven
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/analyzing-source-code/scanners/sonarscanner-for-gradle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarScanner for Gradle
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/10.8/analyzing-source-code/scanners/scanner-environment/general-requirements"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      General requirements
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
