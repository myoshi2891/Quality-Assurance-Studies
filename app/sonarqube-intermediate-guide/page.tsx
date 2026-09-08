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

const DIAGRAM_4 = `flowchart LR
RULE["ルール違反 (Issue)"] --> ATTR["Clean Code属性"]
ATTR --> CAT["属性カテゴリ"]
ATTR --> QUALITY["Software Quality"]
QUALITY --> RATING["A-Eの格付け"]`;

const DIAGRAM_5 = `flowchart LR
DETECT["Hotspot検出"] --> REVIEW["To Review"]
REVIEW --> ACK["Acknowledged"]
REVIEW --> SAFE["Safe"]
REVIEW --> FIXED["Fixed"]
ACK --> FIXED
ACK --> SAFE`;

const DIAGRAM_6 = `flowchart TD
SONARWAY["Sonar way (組み込み)"] -->|"継承"| CUSTOM1["自社標準プロファイル"]
CUSTOM1 -->|"継承"| CUSTOM2["プロジェクトA用"]
CUSTOM1 -->|"継承"| CUSTOM3["プロジェクトB用"]`;

const DIAGRAM_7 = `flowchart TD
START["New Code Definitionを設定"] --> TYPE{"どのオプション?"}
TYPE -->|"Reference Branch"| RB["参照ブランチとの差分計算"]
TYPE -->|"Number of Days"| ND["開始日 = 現在日 - X日"]
TYPE -->|"Previous Version"| PV["開始日 = バージョン更新日"]
RB --> MARK["対象行を新規コードとしてマーキング"]
ND --> MARK
PV --> MARK
MARK --> GATE["Quality Gateの新規コード条件を適用"]`;

const DIAGRAM_8 = `flowchart TD
START["解析開始"] --> CALC["メトリクス計算"]
CALC --> FUDGE{"新規行数 >= 20行?"}
FUDGE -->|"No"| SKIP["重複/カバレッジ条件をスキップ"]
FUDGE -->|"Yes"| FULL["全条件を評価"]
SKIP --> CHECK{"条件を満たすか?"}
FULL --> CHECK
CHECK -->|"Yes"| PASS["Passed (緑)"]
CHECK -->|"No"| FAIL["Failed (赤)"]
PASS --> MERGE["マージ許可"]
FAIL --> BLOCK["マージブロック"]`;

const DIAGRAM_9 = `flowchart TD
PR["PR作成/更新"] --> TRIGGER["CI/CDトリガー"]
TRIGGER --> SCAN["差分を解析"]
SCAN --> COMPARE["ターゲットブランチと比較"]
COMPARE --> DECORATE["PRへのデコレーション"]
DECORATE --> GATECHECK{"Quality Gate"}
GATECHECK -->|"Passed"| ALLOW["マージ可能"]
GATECHECK -->|"Failed"| DENY["マージブロック"]`;

const DIAGRAM_10 = `flowchart LR
GUIDE["Guide: コンテキスト注入"] --> VERIFY["Verify: リアルタイム検証"]
VERIFY --> SOLVE["Solve: 既存負債の自動修正"]
SOLVE --> GUIDE`;

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
              <div className="code-block">
                <div className="code-block-header">
                  <span className="code-title"><i className="ti ti-terminal-2"></i>Docker Quickstart Setup</span>
                  <span className="code-lang">BASH</span>
                </div>
                <pre>
                  <code className="language-bash">
                    <div className="code-line"><span className="code-comment"># データ永続化用のボリュームを作成(bind mountではなくvolumeを使うこと。</span></div>
                    <div className="code-line"><span className="code-comment"># bind mountを使うとプラグインが正しく展開されない)</span></div>
                    <div className="code-line"><span className="code-keyword">docker</span> <span className="code-property">volume</span> <span className="code-fn">create</span> <span className="code-flag">--name</span> sonarqube_data</div>
                    <div className="code-line"><span className="code-keyword">docker</span> <span className="code-property">volume</span> <span className="code-fn">create</span> <span className="code-flag">--name</span> sonarqube_logs</div>
                    <div className="code-line"><span className="code-keyword">docker</span> <span className="code-property">volume</span> <span className="code-fn">create</span> <span className="code-flag">--name</span> sonarqube_extensions</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-comment"># 評価用: 組み込みH2データベースで起動(本番非推奨)</span></div>
                    <div className="code-line"><span className="code-keyword">docker</span> <span className="code-fn">run</span> <span className="code-flag">-d</span> <span className="code-flag">--name</span> sonarqube \</div>
                    <div className="code-line">  <span className="code-flag">-p</span> <span className="code-number">9000</span>:<span className="code-number">9000</span> \</div>
                    <div className="code-line">  <span className="code-flag">-v</span> sonarqube_data:<span className="code-string">/opt/sonarqube/data</span> \</div>
                    <div className="code-line">  <span className="code-flag">-v</span> sonarqube_logs:<span className="code-string">/opt/sonarqube/logs</span> \</div>
                    <div className="code-line">  <span className="code-flag">-v</span> sonarqube_extensions:<span className="code-string">/opt/sonarqube/extensions</span> \</div>
                    <div className="code-line">  <span className="code-string">sonarqube:community</span></div>
                  </code>
                </pre>
              </div>
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

            {/* 6 */}
            <section className="doc-section" id="quality-model">
              <span className="section-kicker"><i className="ti ti-brain"></i>SECTION 06</span>
              <h2>品質モデルを理解する ― Clean Code Taxonomy と MQR Mode</h2>
              <p>
                ここからが中級者が本当に理解すべき「SonarQubeの頭脳」の部分です。SonarQubeは2024年以降、旧来の「Bug / Vulnerability / Code Smell」という3分類から、
                <strong>MQR Mode(Multi-Quality-Rule Mode)</strong>
                および <strong>Clean Code Taxonomy</strong> への移行を推進しています。
              </p>

              <h3>6.1 Standard Experience vs MQR Mode</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>項目</th>
                      <th>Standard Experience(従来型)</th>
                      <th>MQR Mode(新方式)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Issue分類</td>
                      <td>Bug / Vulnerability / Code Smell(1ルール=1種別)</td>
                      <td>Reliability / Security / Maintainability(1ルールが複数の品質特性に影響しうる)</td>
                    </tr>
                    <tr>
                      <td>重大度スケール</td>
                      <td>Blocker, Critical, Major, Minor, Info</td>
                      <td>Blocker, High, Medium, Low, Info(品質特性ごとに個別設定)</td>
                    </tr>
                    <tr>
                      <td>表現力</td>
                      <td>1つのルールに1つの重大度</td>
                      <td>「保守性=Medium、信頼性=Low」のように多面的に評価される</td>
                    </tr>
                    <tr>
                      <td>切替方法</td>
                      <td>Administration &gt; Configuration &gt; General Settings &gt; Mode</td>
                      <td>同上(いつでも相互に切替可能)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                たとえば、あるコードの不備が「バグも生みうるし、後々の保守も難しくする」場合、Standard
                Experienceでは「最も影響が大きい1種別」に押し込められますが、MQR Modeでは Reliability=Medium、Maintainability=Low
                のように<strong>複数の軸で同時に評価</strong>できます。これはAI生成コードのように「一見動くが将来的なリスクを内包するコード」を評価する上で特に有効です。
              </p>

              <h3>6.2 Clean Code Taxonomy(4つの属性カテゴリ)</h3>
              <p>
                MQR Modeの土台にあるのが <strong>Clean Code Taxonomy</strong> です。「良いコードとは何か」を4つの大カテゴリ・計14の具体属性に分解し、Issueが検出されるたびに「そのコードがどの属性を欠いているか」を紐づけます。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>カテゴリ</th>
                      <th>意味</th>
                      <th>含まれる属性</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Consistent(一貫性)</strong></td>
                      <td>フォーマットや命名が統一されている</td>
                      <td>Formatted, Conventional, Identifiable</td>
                    </tr>
                    <tr>
                      <td><strong>Intentional(意図の明確さ)</strong></td>
                      <td>コードが意図通りに、明確に、効率よく動く</td>
                      <td>Clear, Logical, Complete, Efficient</td>
                    </tr>
                    <tr>
                      <td><strong>Adaptable(適応性)</strong></td>
                      <td>変更・拡張・テストがしやすい</td>
                      <td>Focused, Distinct, Modular, Tested</td>
                    </tr>
                    <tr>
                      <td><strong>Responsible(責任)</strong></td>
                      <td>法令・信頼性・プライバシーへの配慮</td>
                      <td>Lawful, Trustworthy, Respectful</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                各Issueは、影響するClean Code属性 &rarr; 影響するSoftware Quality(Security/Reliability/Maintainability)という2段階のマッピングを経て評価されます。この設計思想は「コードスタイルの問題」と「本質的な品質問題」を同じ枠組みで語れるようにする狙いがあります。
              </p>

              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_4} />
              </div>

              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/instance-administration/analysis-functions/instance-mode/mqr-mode"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MQR mode | SonarQube Server
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/10.8/user-guide/code-metrics/changing-modes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Changing instance modes
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/2026.1/quality-standards-administration/managing-rules/software-qualities"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Software qualities | SonarQube Server 2026.1 LTA
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/10.8/glossary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarQube glossary
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 7 */}
            <section className="doc-section" id="issue-types">
              <span className="section-kicker"><i className="ti ti-bug"></i>SECTION 07</span>
              <h2>Issueの分類 ― Bug / Vulnerability / Code Smell / Security Hotspot</h2>
              <p>
                Standard Experienceでの4分類を理解することは、MQR Modeを理解する上でも前提知識として重要です。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>種別</th>
                      <th>定義</th>
                      <th>対応する Software Quality</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Bug</strong></td>
                      <td>実行時に不具合を起こしうるコード上の欠陥</td>
                      <td>Reliability</td>
                    </tr>
                    <tr>
                      <td><strong>Vulnerability</strong></td>
                      <td>攻撃者に悪用されうるセキュリティ上の欠陥。即座の修正が必要</td>
                      <td>Security</td>
                    </tr>
                    <tr>
                      <td><strong>Code Smell</strong></td>
                      <td>実行時エラーには直結しないが、保守性を低下させる欠陥</td>
                      <td>Maintainability</td>
                    </tr>
                    <tr>
                      <td><strong>Security Hotspot</strong></td>
                      <td>セキュリティ上重要だが、悪用可能かどうかは人間のレビューが必要な箇所</td>
                      <td>Security(レビュー後に確定)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>7.1 Security HotspotとVulnerabilityの決定的な違い</h3>
              <p>
                これは実務でしばしば混同されるポイントです。<strong>Vulnerability(脆弱性)は「問題が実際にある」と確信を持って報告されるもの</strong>であるのに対し、
                <strong>Security Hotspot(セキュリティホットスポット)は「注意深く見る必要がある箇所」であり、それ自体が問題であると確定していません</strong>。たとえば、暗号鍵の生成コードは、鍵長が適切であれば安全ですが、不適切であれば脆弱性になります。この「文脈依存の判断」が必要な箇所がHotspotとして報告されます。
              </p>
              <p>Hotspotのレビューステータスは4段階です。</p>

              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_5} />
              </div>

              <div className="callout">
                <i className="ti ti-trending-up"></i>
                <div>
                  <strong>2026年時点のトレンド:</strong>
                  SonarSourceは分類の単純化を進めており、従来Hotspotとして報告されていたルールの一部を、段階的にVulnerability(Standard Experience)/ Security(MQR Mode)として直接報告する方向に移行しています。今後、両者の境界線がさらに整理される可能性があるため、最新のリリースノートを確認してください。
                </div>
              </div>

              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/user-guide/security-hotspots"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Managing Security Hotspots
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bitegarden.com/differences-hotspots-vulnerabilities"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      What is the difference between a hotspot and a vulnerability?
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 8 */}
            <section className="doc-section" id="quality-profiles">
              <span className="section-kicker"><i className="ti ti-list-check"></i>SECTION 08</span>
              <h2>Quality Profiles ― ルールセットの管理と継承</h2>
              <p>
                <strong>Quality Profile(品質プロファイル)</strong> は「言語ごとに、どのルールを有効化するか」を定義する設定です。プロジェクトは言語ごとに1つのQuality Profileを持ちます。
              </p>
              <p>
                SonarQubeは各言語に対して組み込みの <strong>Sonar way</strong> プロファイル(編集不可)を提供しており、これは「多くのプロジェクトに適用可能な標準的なルールセット」として設計されています。ただし公式ドキュメントでも「Sonar wayはあくまで出発点であり、プロジェクトが進むにつれてカスタマイズが必要になる」と明言されています。
              </p>

              <h3>8.1 コピー(Copy) vs 継承(Extend)</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>方式</th>
                      <th>挙動</th>
                      <th>用途</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>コピー(Copy)</strong></td>
                      <td>ある時点のルールセットを複製。以後は完全に独立し、元プロファイルの変更は反映されない</td>
                      <td>完全に独自管理したい共通ベースプロファイルを作る場合</td>
                    </tr>
                    <tr>
                      <td><strong>継承(Extend)</strong></td>
                      <td>親プロファイルの有効ルールをすべて引き継ぎ、追加のルールのみ子プロファイルで有効化。親の変更は自動的に子へ反映される</td>
                      <td>Sonar wayをベースに、プロジェクトごとの追加ルールを乗せたい場合(推奨)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                公式には「Sonar wayからの継承」が強く推奨されています。理由は、SonarQubeのアップグレードで新しいルールが追加されたり、ルールのデフォルト設定が変わったりした際に、継承関係にあれば自動的に反映されるためです。コピーの場合、新しいルールを自分で追いかけて手動反映する必要があります。
              </p>

              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_6} />
              </div>

              <h3>8.2 補足機能</h3>
              <ul>
                <li>
                  <strong>Enterprise Edition以上:</strong> ルールを「Prioritized(優先)」に指定でき、そのルールが引き起こすIssueが全体コードに存在する場合、Quality Gateを強制的に失敗させることができます
                </li>
                <li>
                  <strong>バックアップ/リストア:</strong> カスタムプロファイルはXML形式でエクスポート/インポート可能で、複数のSonarQubeインスタンス間での移行に使えます
                </li>
                <li>
                  <strong>Changelog:</strong> プロファイルへの変更履歴を追跡でき、「なぜ突然このIssueが出るようになったか」の原因調査に有用です
                </li>
              </ul>
              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/quality-standards-administration/managing-quality-profiles/understanding-quality-profiles"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Understanding quality profiles
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/10.8/instance-administration/analysis-functions/quality-profiles"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quality profiles 10.8
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 9 */}
            <section className="doc-section" id="security">
              <span className="section-kicker"><i className="ti ti-shield-lock"></i>SECTION 09</span>
              <h2>セキュリティ分析の内部構造 ― Taint Analysis と SAST/SCA</h2>
              <h3>9.1 セキュリティルールの2分類</h3>
              <p>SonarQubeのセキュリティルールは内部的に2種類に分かれています。</p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>ルールタイプ</th>
                      <th>検出対象</th>
                      <th>使用技術</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Security-injection rules</strong></td>
                      <td>ユーザー入力(source)が検証・サニタイズされないまま危険な処理(sink)に到達するケース(SQLインジェクション、XSS等)</td>
                      <td><strong>Taint Analysis(汚染データ追跡解析)</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Security-configuration rules</strong></td>
                      <td>不適切なパラメータでのセキュリティ関数呼び出し(弱い暗号アルゴリズム、古いTLS等)、権限チェックの欠落・順序誤り</td>
                      <td>パターンベースの静的解析</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Taint Analysis</strong> は、信頼できない外部入力(source)からセンシティブな処理(sink)までのデータフローをコード全体にわたって追跡する技術です。この技術により、単一行のパターンマッチでは検出できない、複数関数・複数ファイルにまたがる注入系脆弱性を検出できます。この機能はDeveloper Edition以上でのみ有効です(Community Buildには含まれません)。SonarQube for IDEはConnected Mode時にこのTaint Vulnerability(注入系脆弱性)をサーバーから取得して表示します。
              </p>
              <p>
                自社フレームワークのsource/sanitizer/validator/sinkを追加登録することで、Taint Analysisの検出範囲を拡張することも可能です(Security engine custom configuration機能)。
              </p>

              <h3>9.2 セキュリティ標準との対応付け</h3>
              <p>
                SonarQubeは2015年からCWE互換製品として認定されており、検出したIssueをOWASP Top 10、CWE Top 25などの業界標準にマッピングしてレポートできます(コンプライアンスレポートはEnterprise Edition以上)。
              </p>

              <h3>9.3 SonarQube Advanced Security(SCA・シークレット検出)</h3>
              <p>
                SonarQube Advanced Securityは、依存関係の脆弱性を検出するSCA(Software Composition Analysis)、コード中のシークレット(APIキー・パスワード等)を検出するSecrets Detection、IaC(Terraform/CloudFormation/Kubernetes等)のスキャンを含む上位セキュリティ機能群です。サプライチェーンセキュリティやコンプライアンスレポート(CycloneDX形式のVEXエクスポート等)を重視する組織向けに設計されています。
              </p>

              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/quality-standards-administration/managing-rules/security-related-rules"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Security-related rules
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/user-guide/security-hotspots"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Managing Security Hotspots
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sonarsource.com/products/sonarqube/advanced-security/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarQube Advanced Security
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 10 */}
            <section className="doc-section" id="technical-debt">
              <span className="section-kicker"><i className="ti ti-coin"></i>SECTION 10</span>
              <h2>技術的負債とメトリクス ― SQALEモデル</h2>
              <p>
                SonarQubeの技術的負債(Technical Debt)の計算は、<strong>SQALE(Software Quality Assessment based on Lifecycle Expectations)</strong> メソドロジーに基づいています。J.L. Letouzeyによって提唱されたこのモデルは、「技術的負債=すべての保守性Issueを修正するのに必要な見積もり時間の合計」として定量化します。
              </p>

              <h3>10.1 計算式</h3>
              <div className="code-block">
                <div className="code-block-header">
                  <span className="code-title"><i className="ti ti-math-function"></i>SQALE Debt Calculation Formula</span>
                  <span className="code-lang">FORMULA</span>
                </div>
                <pre>
                  <code className="language-yaml">
                    <div className="code-line"><span className="code-property">技術的負債 (Technical Debt / sqale_index)</span></div>
                    <div className="code-line">  <span className="code-operator">=</span> <span className="code-string">すべての保守性Issueの修正見積時間の合計(分単位、1日=8時間換算)</span></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-property">技術的負債比率 (Technical Debt Ratio / sqale_debt_ratio)</span></div>
                    <div className="code-line">  <span className="code-operator">=</span> 技術的負債 <span className="code-operator">÷</span> (1行あたりの開発コスト <span className="code-operator">×</span> 総行数)</div>
                    <div className="code-line"></div>
                    <div className="code-line">  <span className="code-comment">※ 1行あたりの開発コストはデフォルトで30分(DB設定でカスタマイズ可能)</span></div>
                  </code>
                </pre>
              </div>

              <h3>10.2 Maintainability Rating(保守性格付け)グリッド</h3>
              <p>
                技術的負債比率は、以下のデフォルトグリッドによってA〜Eの5段階評価に変換されます(このグリッドもカスタマイズ可能です)。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>格付け</th>
                      <th>技術的負債比率の範囲</th>
                      <th>意味</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="rating-a">A</td>
                      <td>0% 〜 5%</td>
                      <td>すでに投じた開発工数の5%以下で全負債を解消できる</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>6% 〜 10%</td>
                      <td>―</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>11% 〜 20%</td>
                      <td>―</td>
                    </tr>
                    <tr>
                      <td>D</td>
                      <td>21% 〜 50%</td>
                      <td>―</td>
                    </tr>
                    <tr>
                      <td className="rating-e">E</td>
                      <td>51%以上</td>
                      <td>大規模なリファクタリングが必要な状態</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Reliability Rating・Security Ratingについては、比率ではなく「最も重大なIssueの重大度」によって決まります(例: Blocker Bugが1件でもあればReliability RatingはE)。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>格付け</th>
                      <th>Reliability Ratingの条件例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="rating-a">A</td>
                      <td>Bug 0件</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>少なくとも1件のMinor Bug</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>少なくとも1件のMajor Bug</td>
                    </tr>
                    <tr>
                      <td>D</td>
                      <td>少なくとも1件のCritical Bug</td>
                    </tr>
                    <tr>
                      <td className="rating-e">E</td>
                      <td>少なくとも1件のBlocker Bug</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>10.3 全体コード vs 新規コードの二重管理</h3>
              <p>
                ほとんどのメトリクスは「全体コード(Overall Code)」と「新規コード(New Code)」の両方で個別に計算されます。これは次章で解説する「Clean as You Code」方法論の中核であり、レガシーコードの負債を無理に一括返済させず、<strong>新しく書くコードだけを高い基準で管理する</strong>という思想の技術的な裏付けになっています。
              </p>

              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/latest/user-guide/code-metrics/metrics-definition/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Understanding measures and metrics
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/10.8/user-guide/code-metrics/metrics-definition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Metric definitions 10.8
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://arxiv.org/pdf/2003.00447"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Longitudinal Evaluation of OSS Maintainability(学術論文)
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 11 */}
            <section className="doc-section" id="clean-as-you-code">
              <span className="section-kicker"><i className="ti ti-sparkles"></i>SECTION 11</span>
              <h2>Clean as You Code と New Code Definition</h2>
              <p>
                <strong>Clean as You Code</strong>
                は、SonarQubeが提唱する品質改善方法論であり、「既存のレガシーコードを一括で直そうとするのではなく、新しく書く・変更するコードを常にクリーンに保つ」ことに焦点を当てます。これにより、数百万行規模のレガシーコードベースでも現実的に品質改善を進められます。
              </p>
              <p>
                この方法論を技術的に支えるのが
                <strong>New Code Definition(NCD、新規コード定義)</strong>
                です。SonarQubeが「どこからどこまでを新規コードとみなすか」を決める設定で、グローバル・プロジェクト・ブランチの各レベルで設定できます。
              </p>

              <h3>11.1 New Code Definitionの4つのオプション</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>オプション</th>
                      <th>定義</th>
                      <th>利用可能レベル</th>
                      <th>推奨シーン</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Previous Version</strong></td>
                      <td>プロジェクトの現在のバージョンが上がってからの変更分</td>
                      <td>グローバル/プロジェクト/ブランチ</td>
                      <td>定期リリースを行うプロジェクト</td>
                    </tr>
                    <tr>
                      <td><strong>Number of Days</strong></td>
                      <td>現在時刻からX日前までの変更(最大90日、デフォルト30日)</td>
                      <td>グローバル/プロジェクト/ブランチ</td>
                      <td>継続的デリバリーを行うプロジェクト</td>
                    </tr>
                    <tr>
                      <td><strong>Reference Branch</strong></td>
                      <td>指定したブランチとのSCM差分</td>
                      <td>プロジェクト/ブランチ</td>
                      <td>フィーチャーブランチ運用のプロジェクト(推奨)</td>
                    </tr>
                    <tr>
                      <td><strong>Specific Analysis</strong></td>
                      <td>過去の特定の解析時点からの差分(Web API経由のみ設定可)</td>
                      <td>ブランチ(Developer以上)/プロジェクト(Community Build)</td>
                      <td>自動化されたバルクインポート時</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>実務上の注意:</strong> Number of
                Days以外のオプションを使う場合、マージ時にファストフォワードマージ(GitHubのSquash
                and MergeやRebase and
                Merge)を使うことが推奨されています。理由は、マージコミットを作ると、そのコミットのblame情報(誰がいつ書いたか)が最新化され、新規コードの判定が正しく機能するためです。
              </p>

              <h3>11.2 判定ロジック</h3>
              <p>
                Reference
                Branchオプションの場合、解析対象ブランチと参照ブランチの現在の状態をSCM情報(Gitのblame等)を使って比較します。それ以外のオプションでは「新規コード期間の開始日」を算出し、その日以降に変更された全ファイルの該当行が黄色くハイライトされます。そのハイライトされた行を主・副の発生箇所に持つIssueが「新規コードのIssue」として分類されます。
              </p>

              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_7} />
              </div>

              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/latest/core-concepts/clean-as-you-code/about-new-code/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      About new code
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/10.7/project-administration/setting-up-clean-as-you-code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Setting up Clean as You Code
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/10.5/project-administration/clean-as-you-code-settings/defining-new-code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Defining new code
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 12 */}
            <section className="doc-section" id="quality-gates">
              <span className="section-kicker"><i className="ti ti-gauge"></i>SECTION 12</span>
              <h2>Quality Gates ― リリース可否の自動判定</h2>
              <p>
                <strong>Quality Gate(品質ゲート)</strong>
                は「このコードはリリース可能な状態か?」という問いに答えるための、一連の条件(Condition)の集合です。各条件は「新規コード」または「全体コード」のいずれかに対して定義され、分析結果がすべての条件を満たせば
                <strong>Passed(緑)</strong>、1つでも満たさなければ
                <strong>Failed(赤)</strong> と判定されます。
              </p>

              <h3>12.1 Sonar way Quality Gateのデフォルト条件</h3>
              <p>
                Sonar way Quality
                Gateは、意図的に「新規コードのみ」を対象とした条件で構成されています。これは前述のClean
                as You Code思想の直接的な実装です。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>条件(新規コードに適用)</th>
                      <th>デフォルト閾値</th>
                      <th>備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Issue数</td>
                      <td>0件を超えたら失敗(推奨設定)</td>
                      <td>新規コードを完全にクリーンに保つための最も厳格な条件</td>
                    </tr>
                    <tr>
                      <td>Reliability Rating</td>
                      <td>A未満で失敗</td>
                      <td>―</td>
                    </tr>
                    <tr>
                      <td>Security Rating</td>
                      <td>A未満で失敗</td>
                      <td>―</td>
                    </tr>
                    <tr>
                      <td>Maintainability Rating</td>
                      <td>A未満で失敗</td>
                      <td>―</td>
                    </tr>
                    <tr>
                      <td>Security Hotspots Reviewed</td>
                      <td>100%未満で失敗</td>
                      <td>未レビューのHotspotが残っているとNG</td>
                    </tr>
                    <tr>
                      <td>Coverage</td>
                      <td>設定値未満で失敗(調整可能)</td>
                      <td>―</td>
                    </tr>
                    <tr>
                      <td>Duplicated Lines</td>
                      <td>設定値超過で失敗(調整可能)</td>
                      <td>―</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="callout">
                <i className="ti ti-bulb"></i>
                <div>
                  Reliability/Security/Maintainability
                  Ratingの3条件は、格付けが「A未満」であることを許容する分、若干の技術的負債の混入を許してしまいます。より厳格に運用したい場合は「Issue数が0件を超えたら失敗」という条件を使うことで、新規コードを完全にIssueフリーに保てます。
                </div>
              </div>

              <h3>12.2 Fudge Factor(判定の緩和機構)</h3>
              <p>
                小さな変更(数行のホットフィックス等)が重複率やカバレッジの条件で不当に失敗しないよう、
                <strong>Fudge Factor</strong>
                という仕組みがデフォルトで働きます。新規行数が20行未満の場合、重複行・カバレッジに関する条件判定はスキップされます。
              </p>

              <h3>12.3 評価フロー</h3>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_8} />
              </div>

              <h3>12.4 運用上のポイント</h3>
              <ul>
                <li>
                  プロジェクトごとに異なるQuality
                  Gateを割り当てられます(Webアプリとバックエンドで求めるカバレッジ水準を変える、など)
                </li>
                <li>
                  Quality Gateへの変更権限は「Administer Quality
                  Gates」権限を持つユーザーに限定されます。さらにEnterprise
                  Edition以上では、特定のQuality
                  Gateだけを特定の担当者グループに管理委譲できます
                </li>
                <li>
                  Quality
                  Gate状態の変化(Passed→Failed、Failed→Passed)はメール通知の対象にでき、PRデコレーション・CIパイプラインのステータスにも反映されます
                </li>
                <li>
                  プルリクエスト解析では「新規コードに関する条件のみ」が適用されます(全体コードの条件は評価されません)
                </li>
              </ul>
              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/quality-standards-administration/managing-quality-gates/introduction-to-quality-gates"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Understanding quality gates
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/10.8/instance-administration/analysis-functions/quality-gates"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quality gates 10.8
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 13 */}
            <section className="doc-section" id="branch-pr">
              <span className="section-kicker">
                <i className="ti ti-git-pull-request"></i>SECTION 13
              </span>
              <h2>ブランチ分析とプルリクエスト分析</h2>
              <p>
                Community
                Buildは<strong>メインブランチ1本のみ</strong>の解析に制限されており、フィーチャーブランチやプルリクエストの解析はDeveloper
                Edition以上(またはSonarQube Cloud)でのみ利用できます。
              </p>

              <h3>13.1 ブランチ分析とPR分析の違い</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>項目</th>
                      <th>ブランチ分析</th>
                      <th>プルリクエスト分析</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>対象</td>
                      <td>名前付きの長寿命/短命ブランチ</td>
                      <td>オープン中のプルリクエスト/マージリクエスト</td>
                    </tr>
                    <tr>
                      <td>Quality Gate適用範囲</td>
                      <td>新規コード条件 + 全体コード条件</td>
                      <td>新規コード条件のみ</td>
                    </tr>
                    <tr>
                      <td>結果の表示場所</td>
                      <td>SonarQube Server/Cloud のUI</td>
                      <td>PR/MRのコメント・チェックステータス + SonarQube UI</td>
                    </tr>
                    <tr>
                      <td>New Code Definitionの基準</td>
                      <td>グローバル/プロジェクト設定に従う</td>
                      <td>ターゲットブランチとの差分が新規コード</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>13.2 プルリクエスト解析のフロー</h3>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_9} />
              </div>

              <p>
                PRデコレーションは、対象のDevOpsプラットフォーム(GitHub, GitLab,
                Bitbucket, Azure
                DevOps)のブランチ保護ルールと組み合わせることで、「Quality
                Gateが赤のPRはマージできない」という強制力を持たせられます。GitHubの場合、Settings
                &gt; Branches &gt; Branch protection
                rulesでSonarQubeのステータスチェックを必須化します。
              </p>

              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/discovering/code-analysis/pull-request-analysis.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pull request analysis
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dev.to/rahulxsingh/sonarqube-community-vs-developer-edition-24oo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarQube Community vs Developer(PRデコレーション解説)
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 14 */}
            <section className="doc-section" id="cicd">
              <span className="section-kicker">
                <i className="ti ti-brand-github"></i>SECTION 14
              </span>
              <h2>CI/CD統合の実践 ― GitHub Actionsによる構築例</h2>
              <h3>14.1 基本ワークフロー(GitHub Secretsの準備)</h3>
              <p>
                GitHub
                ActionsでSonarQube解析を行うには、まずリポジトリのSecretsに以下を登録します。
              </p>
              <ul>
                <li>
                  <code>SONAR_TOKEN</code>:
                  SonarQube上で発行したユーザートークンまたはプロジェクトトークン
                </li>
                <li>
                  <code>SONAR_HOST_URL</code>: SonarQube
                  Serverのアクセス先URL(SonarQube Cloudの場合は不要な場合あり)
                </li>
              </ul>

              <h3>14.2 公式SonarQube Scan GitHub Actionによる構成例</h3>
              <div className="code-block">
                <div className="code-block-header">
                  <span className="code-title"><i className="ti ti-brand-github"></i>.github/workflows/sonarqube.yml</span>
                  <span className="code-lang">YAML</span>
                </div>
                <pre>
                  <code className="language-yaml">
                    <div className="code-line"><span className="code-comment"># .github/workflows/sonarqube.yml</span></div>
                    <div className="code-line"><span className="code-property">name</span><span className="code-punct">:</span> <span className="code-string">SonarQube Analysis</span></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-property">on</span><span className="code-punct">:</span></div>
                    <div className="code-line">  <span className="code-property">push</span><span className="code-punct">:</span></div>
                    <div className="code-line">    <span className="code-property">branches</span><span className="code-punct">:</span></div>
                    <div className="code-line">      <span className="code-punct">-</span> <span className="code-string">main</span></div>
                    <div className="code-line">      <span className="code-punct">-</span> <span className="code-string">develop</span></div>
                    <div className="code-line">      <span className="code-punct">-</span> <span className="code-string">&apos;releases/**&apos;</span></div>
                    <div className="code-line">  <span className="code-property">pull_request</span><span className="code-punct">:</span></div>
                    <div className="code-line">    <span className="code-property">types</span><span className="code-punct">:</span> <span className="code-punct">[</span><span className="code-string">opened</span><span className="code-punct">,</span> <span className="code-string">synchronize</span><span className="code-punct">,</span> <span className="code-string">reopened</span><span className="code-punct">]</span></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-property">jobs</span><span className="code-punct">:</span></div>
                    <div className="code-line">  <span className="code-property">sonarqube</span><span className="code-punct">:</span></div>
                    <div className="code-line">    <span className="code-property">runs-on</span><span className="code-punct">:</span> <span className="code-string">ubuntu-latest</span></div>
                    <div className="code-line">    <span className="code-property">permissions</span><span className="code-punct">:</span></div>
                    <div className="code-line">      <span className="code-property">contents</span><span className="code-punct">:</span> <span className="code-string">read</span></div>
                    <div className="code-line">      <span className="code-property">pull-requests</span><span className="code-punct">:</span> <span className="code-string">write</span>   <span className="code-comment"># PRへのコメント投稿に必要</span></div>
                    <div className="code-line">    <span className="code-property">steps</span><span className="code-punct">:</span></div>
                    <div className="code-line">      <span className="code-punct">-</span> <span className="code-property">name</span><span className="code-punct">:</span> <span className="code-string">Checkout</span></div>
                    <div className="code-line">        <span className="code-property">uses</span><span className="code-punct">:</span> <span className="code-string">actions/checkout@v6</span></div>
                    <div className="code-line">        <span className="code-property">with</span><span className="code-punct">:</span></div>
                    <div className="code-line">          <span className="code-comment"># シャロークローンを無効化(blame情報の欠落を防ぐため必須)</span></div>
                    <div className="code-line">          <span className="code-property">fetch-depth</span><span className="code-punct">:</span> <span className="code-number">0</span></div>
                    <div className="code-line"></div>
                    <div className="code-line">      <span className="code-punct">-</span> <span className="code-property">name</span><span className="code-punct">:</span> <span className="code-string">SonarQube Scan</span></div>
                    <div className="code-line">        <span className="code-property">uses</span><span className="code-punct">:</span> <span className="code-string">SonarSource/sonarqube-scan-action@v5</span></div>
                    <div className="code-line">        <span className="code-property">env</span><span className="code-punct">:</span></div>
                    <div className="code-line">          <span className="code-property">SONAR_TOKEN</span><span className="code-punct">:</span> <span className="code-var">{'${{ secrets.SONAR_TOKEN }}'}</span></div>
                    <div className="code-line">          <span className="code-property">SONAR_HOST_URL</span><span className="code-punct">:</span> <span className="code-var">{'${{ vars.SONAR_HOST_URL }}'}</span></div>
                    <div className="code-line"></div>
                    <div className="code-line">      <span className="code-punct">-</span> <span className="code-property">name</span><span className="code-punct">:</span> <span className="code-string">SonarQube Quality Gate Check</span></div>
                    <div className="code-line">        <span className="code-property">uses</span><span className="code-punct">:</span> <span className="code-string">SonarSource/sonarqube-quality-gate-action@master</span></div>
                    <div className="code-line">        <span className="code-property">timeout-minutes</span><span className="code-punct">:</span> <span className="code-number">5</span></div>
                    <div className="code-line">        <span className="code-property">env</span><span className="code-punct">:</span></div>
                    <div className="code-line">          <span className="code-property">SONAR_TOKEN</span><span className="code-punct">:</span> <span className="code-var">{'${{ secrets.SONAR_TOKEN }}'}</span></div>
                  </code>
                </pre>
              </div>

              <h3>設計上の重要ポイント</h3>
              <ul>
                <li>
                  <code>fetch-depth: 0</code>
                  は必須級の設定です。シャロークローンのままだとSCMのblame情報が取得できず、「Missing
                  blame information」エラーやNew Code Definitionの誤判定が発生します
                </li>
                <li>
                  Quality Gateの成否をワークフローの成功/失敗に直結させたい場合、
                  <code>sonarqube-quality-gate-action</code>
                  を使うか、スキャナーに
                  <code>-Dsonar.qualitygate.wait=true</code>
                  を渡してポーリングさせます
                </li>
                <li>
                  Developer Edition以上では、GitHub
                  Actions上で実行されるスキャナーが<strong>ブランチ・PRの情報を自動検出</strong>するため、明示的なパラメータ指定は基本的に不要です
                </li>
                <li>
                  モノレポ構成の場合は、プロジェクトごとにジョブを分割し、
                  <code>projectBaseDir</code>
                  でパスを指定します
                </li>
              </ul>

              <h3>14.3 主要CI/CDプラットフォームの対応状況</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>プラットフォーム</th>
                      <th>統合方式</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GitHub Actions</td>
                      <td>SonarQube Scan Action(公式)</td>
                    </tr>
                    <tr>
                      <td>GitLab CI/CD</td>
                      <td>GitLab統合(ネイティブMR分析対応)</td>
                    </tr>
                    <tr>
                      <td>Azure DevOps</td>
                      <td>専用Extension(タスクとして提供)</td>
                    </tr>
                    <tr>
                      <td>Jenkins</td>
                      <td>専用Plugin(宣言的パイプライン対応)</td>
                    </tr>
                    <tr>
                      <td>Bitbucket Pipelines</td>
                      <td>Bitbucket Cloud統合</td>
                    </tr>
                    <tr>
                      <td>CircleCI / 汎用CI</td>
                      <td>SonarScanner CLIを直接呼び出し</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://github.com/marketplace/actions/official-sonarqube-scan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official SonarQube Scan (GitHub Marketplace)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/10.5/devops-platform-integration/github-integration/adding-sonarqube-analysis-to-your-workflow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Adding analysis to GitHub Actions workflow
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/marketplace/actions/sonarqube-pull-request-comment"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarQube Pull Request Comment Action
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 15 */}
            <section className="doc-section" id="ide">
              <span className="section-kicker"><i className="ti ti-code"></i>SECTION 15</span>
              <h2>IDE統合 ― SonarQube for IDE と Connected Mode</h2>
              <p>
                <strong>SonarQube for IDE</strong>(旧SonarLint)は、VS Code、IntelliJ
                IDEA、Visual
                Studio、Eclipseで動作する無料のIDE拡張です。単体でもオフライン解析が可能ですが、真価を発揮するのは
                <strong>Connected Mode</strong> でサーバーと接続したときです。
              </p>
              <h3>15.1 Connected Modeで同期される情報</h3>
              <ul>
                <li>プロジェクトのQuality Profile(有効化されたルールセット)</li>
                <li>New Code Definition(何が新規コードか)</li>
                <li>
                  サーバー側で解決済み(False Positive・Won&apos;t
                  Fix等)とマークされたIssueの状態
                </li>
                <li>Quality Gateの変化・新規Issue割り当てのスマート通知</li>
              </ul>
              <p>
                これにより、「IDEで警告が出るが、サーバー側では対応不要と判断済み」といった不整合を防ぎ、開発者はローカルとCI/CDで一貫した基準のもとで作業できます。
              </p>
              <h3>15.2 AIアシスタント連携ツール群(VS Code / Copilot等)</h3>
              <p>
                近年のSonarQube for IDEは、GitHub Copilot Agent ModeやCursor等のAI
                IDE向けに、自然言語で操作可能な専用ツール群を提供しています。たとえば「このファイルの新しい脆弱性を教えて」と自然言語で質問すると、SonarQube
                MCP
                Serverを介してCopilotがSonarQubeに問い合わせ、結果をエディタ内に返します。Connected
                Mode設定済みの環境であれば、ワンクリックでMCP
                Serverの設定を生成できる機能も用意されています。
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
                      SonarQube for IDE Homepage
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-for-vs-code/ai-capabilities/agents"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AI agents | VS Code
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 16 */}
            <section className="doc-section" id="ai-agents">
              <span className="section-kicker"><i className="ti ti-robot"></i>SECTION 16</span>
              <h2>
                AIエージェント時代のSonarQube ― MCP Server / Agentic Analysis / Sonar Vortex
              </h2>
              <p>
                このセクションは2026年時点で最も動きの速い領域です。AIコーディングエージェントが書くコードの量が急増する中(SonarSourceは「AIエージェントがエンタープライズコードの40%以上の生成に関与している」と述べています)、SonarSourceは「検証(Verification)」を軸にした新製品群を矢継ぎ早に投入しています。
              </p>

              <h3>16.1 Agent Centric Development Cycle(ACDC)という設計思想</h3>
              <p>
                SonarSourceは、AIエージェント時代の開発ループを
                <strong>Guide &rarr; Verify &rarr; Solve</strong> の3段階として再定義しています。
              </p>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_10} />
              </div>

              <h3>16.2 SonarQube MCP Server</h3>
              <p>
                <strong>SonarQube MCP Server</strong> は、Model Context
                Protocol(MCP)を通じてAIコーディングエージェント(Claude
                Code、Cursor、GitHub Copilot、Windsurf、Gemini
                CLI等)にSonarQubeの機能をツールとして公開するサーバーです。「プロジェクトのQuality
                Gateステータスを問い合わせる」「依存関係のリスクを検索する」「Issueのステータスを更新する・False
                Positiveとしてマークする」といった操作を、エージェントが自然言語の指示から実行できます。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>形態</th>
                      <th>対象</th>
                      <th>特徴</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ネイティブ管理型MCPエンドポイント</td>
                      <td>SonarQube Cloud</td>
                      <td>インストール不要、ゼロコンフィグ</td>
                    </tr>
                    <tr>
                      <td>Dockerコンテナ(セルフホスト)</td>
                      <td>SonarQube Server / ローカル開発</td>
                      <td>
                        <code>sonarsource/sonarqube-mcp</code> イメージで起動
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                2026.3リリースでは、SonarQube Server自体が
                <code>/mcp</code>
                エンドポイントをネイティブにホストできるようになり、外部のDockerコンテナを別途運用する必要がなくなりました。管理者はトークンベースの<strong>グローバルkill-switch</strong>でAIエージェントからのアクセスを一括制御できるため、セキュリティポリシー・情報統制の観点でも導入しやすい設計になっています。
              </p>
              <div className="code-block">
                <div className="code-block-header">
                  <span className="code-title"><i className="ti ti-terminal-2"></i>Claude Code MCP Server Configuration</span>
                  <span className="code-lang">BASH</span>
                </div>
                <pre>
                  <code className="language-bash">
                    <div className="code-line"><span className="code-comment"># Claude CodeにSonarQube MCP Serverを追加する例</span></div>
                    <div className="code-line"><span className="code-keyword">claude</span> <span className="code-property">mcp</span> <span className="code-fn">add</span> sonarqube \</div>
                    <div className="code-line">  <span className="code-flag">--env</span> SONARQUBE_TOKEN=<span className="code-var">$SONAR_USER_TOKEN</span> \</div>
                    <div className="code-line">  <span className="code-flag">--env</span> SONARQUBE_URL=<span className="code-var">$SONAR_URL</span> \</div>
                    <div className="code-line">  <span className="code-punct">--</span> <span className="code-keyword">docker</span> <span className="code-fn">run</span> <span className="code-flag">--init</span> <span className="code-flag">--pull=always</span> <span className="code-flag">-i</span> <span className="code-flag">--rm</span> \</div>
                    <div className="code-line">     <span className="code-flag">-e</span> SONARQUBE_TOKEN <span className="code-flag">-e</span> SONARQUBE_URL <span className="code-string">sonarsource/sonarqube-mcp</span></div>
                  </code>
                </pre>
              </div>

              <h3>16.3 Sonar Vortex(旧: Agentic Analysis + Context Augmentation)</h3>
              <p>
                2026年6月30日、SonarSourceは
                <strong>Sonar Vortex</strong>
                を正式発表しました。これは、それまでベータ提供されていた2つの機能 &mdash;
                <strong>Sonar Context Augmentation</strong>
                (コード生成前にプロジェクト固有の文脈を提供)と
                <strong>SonarQube Agentic Analysis</strong>
                (生成後のコードをリアルタイム検証)を統合した製品です。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>フェーズ</th>
                      <th>機能</th>
                      <th>効果</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Guide(生成前)</strong></td>
                      <td>
                        Context Augmentation:
                        クラス階層・呼び出しフロー・コーディング規約・依存関係の健全性情報をAIエージェントに事前注入
                      </td>
                      <td>トークン消費量を最大36%削減</td>
                    </tr>
                    <tr>
                      <td><strong>Verify(生成後)</strong></td>
                      <td>
                        Agentic Analysis:
                        直近のCIフルスキャンのコンテキストを再利用し、クロスファイルの問題を数秒で検証
                      </td>
                      <td>ソフトウェア欠陥を最大92%削減(公式発表値)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                技術的な肝は「CI相当の精度を、CIでは実現不可能な速さで提供する」二段階アプローチです。通常のCI実行時に解析コンテキストを収集・保存しておき、エージェントが検証を必要とするタイミングでそのコンテキストをオンデマンドに復元することで、単一/複数ファイルの検証を数秒で完了させます。利用要件は、SonarQube
                Cloudの有償プラン(Teams/Enterprise)、直近のSonarQubeプロジェクトスキャン、MCP対応のAIコーディングツールです。
              </p>

              <h3>16.4 SonarQube Remediation Agent</h3>
              <p>
                同じく2026年6月30日にGA(一般提供開始)された
                <strong>SonarQube Remediation Agent</strong> は、Sonar Vortexとは逆方向 &mdash;
                <strong>既存コードベースに蓄積した技術的負債を自律的に解消する</strong>
                エージェントです。SonarQubeダッシュボード上で過去のIssue(脆弱性・アーキテクチャの逸脱・保守性負債)をエージェントにアサインすると、非同期でバックグラウンド処理が走り、修正を生成
                &rarr; Sonarの解析エンジンで検証 &rarr;
                マージ可能な状態のPRとして提出、という一連の流れを人手を介さず実行します。
              </p>

              <h3>16.5 AI CodeFix</h3>
              <p>
                <strong>AI CodeFix</strong>
                は、検出されたIssue(バグ・脆弱性)に対してLLMベースのワンクリック修正案を提示する機能です。2026.2リリース以降は<strong>モデルアグノスティック化</strong>され、単一プロバイダーへのロックインなしに複数のLLMプロバイダーを接続できるようになりました。対応言語はJava,
                JavaScript, TypeScript, Python, C#, C++で、拡大が続いています。
              </p>

              <h3>16.6 なぜこれが重要か</h3>
              <p>
                Addy
                Osmani氏(2026年6月)の言葉を借りれば、「無人で動くループは、無人でミスを重ねるループでもある」という課題意識が、これら一連の製品群の背景にあります。単一ファイルのリンターはファイル間の依存関係を理解できず、PRレビューやCIでの検出は「もう手遅れ」なタイミングです。SonarQubeのAIエージェント統合戦略は、<strong>検証をエージェントのコーディングループの内側に移動させる</strong>ことで、この構造的なギャップを埋めようとしています。
              </p>

              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://www.sonarsource.com/products/sonarqube/mcp-server/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MCP Server: Agentic Code Assurance
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sonarsource.com/products/sonarqube/agentic-analysis/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agentic Analysis
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/SonarSource/sonarqube-mcp-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarQube MCP Server(GitHub)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sonarsource.com/blog/introducing-sonar-vortex/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Introducing Sonar Vortex and the SonarQube Remediation Agent
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/agent-centric-development-cycle/developer-tools/mcp-server/about-the-mcp-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      About the MCP Server(ACDC)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sonarsource.com/products/sonarqube/whats-new/2026-3/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarQube Server 2026.3 Release
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sonarsource.com/blog/announcing-sonarqube-server-2026-3/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Announcing SonarQube Server 2026.3
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 17 */}
            <section className="doc-section" id="enterprise">
              <span className="section-kicker">
                <i className="ti ti-building-skyscraper"></i>SECTION 17
              </span>
              <h2>
                エンタープライズ機能 ― Portfolio・コンプライアンスレポート・Data Center Edition
              </h2>
              <h3>17.1 Portfolio(ポートフォリオ管理)</h3>
              <p>
                Enterprise
                Edition以上で利用できるPortfolio機能は、複数プロジェクトを束ねて組織横断的な健全性指標・リスクインサイトを可視化する機能です。数百プロジェクトを運用する大規模組織で、「全社的にどこにリスクが集中しているか」を経営層にも分かる形で提示できます。PDFレポートをオンデマンドまたはスケジュール実行でエクスポートし、監査対応にも利用できます。
              </p>
              <h3>17.2 コンプライアンスレポート</h3>
              <p>
                OWASP Top 10、CWE Top 25、NIST
                SSDF、STIG、CASAなど、複数の業界標準に基づく準拠状況レポートを自動生成できます。AI生成コードを含むコードベース全体が規制要件・データセキュリティ標準に適合しているかを継続的に検証する目的で設計されています。
              </p>
              <h3>17.3 Data Center Edition再訪</h3>
              <p>
                第2章で解説した高可用性クラスタ構成に加え、Data Center
                Editionは水平スケーリング(ノード追加によるCompute
                Engine処理能力の向上)を主目的としています。SonarQube
                Serverのダウンタイムが許容できない、CI/CDパイプラインのボトルネックになってはいけない、という組織に適しています。
              </p>
              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://www.sonarsource.com/products/sonarqube/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SonarQube homepage(エンタープライズ機能)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/server-installation/data-center-edition/dce-topology"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DCE topology
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 18 */}
            <section className="doc-section" id="best-practices">
              <span className="section-kicker"><i className="ti ti-checklist"></i>SECTION 18</span>
              <h2>実践ベストプラクティス集</h2>
              <ul className="practice-list">
                <li>
                  <span className="num">1</span>
                  <span>
                    <strong>Quality Profileは必ずSonar wayから継承する。</strong>
                    ゼロから作る、あるいはコピーで独立させると、新しいルールの追随が手作業になり、負債化します。
                  </span>
                </li>
                <li>
                  <span className="num">2</span>
                  <span>
                    <strong>New Code DefinitionはReference Branchを基本にする。</strong>
                    フィーチャーブランチ運用が主流の現在、日数指定よりも意図が明確で、マージ後のIssueステータス引き継ぎもスムーズです。
                  </span>
                </li>
                <li>
                  <span className="num">3</span>
                  <span>
                    <strong>Quality Gateの「Issue数 &gt; 0で失敗」条件を積極的に採用する。</strong>
                    Rating系条件(A未満で失敗)だけでは新規コードへの負債混入を防ぎきれません。
                  </span>
                </li>
                <li>
                  <span className="num">4</span>
                  <span>
                    <strong><code>fetch-depth: 0</code> を必ず設定する。</strong>
                    シャロークローンによるblame情報欠落は、New Code Definitionの誤判定・PRデコレーション不具合の最頻出原因です。
                  </span>
                </li>
                <li>
                  <span className="num">5</span>
                  <span>
                    <strong>
                      Community Buildで運用を始める場合でも、PRベース開発をしているなら早期にDeveloper Editionへの移行を検討する。
                    </strong>
                    ダッシュボードを見に行く運用は形骸化しやすいというのが実務者の共通見解です。
                  </span>
                </li>
                <li>
                  <span className="num">6</span>
                  <span>
                    <strong>MQR Modeへの移行は計画的に行う。</strong>
                    既存のCustom Quality Gateは、モードを切り替えると更新アイコンが表示され、手動での確認・更新作業が必要になります。
                  </span>
                </li>
                <li>
                  <span className="num">7</span>
                  <span>
                    <strong>AIコーディングエージェントを使うチームでは、MCP Serverの導入を早期に検討する。</strong>
                    Guide(コンテキスト注入)とVerify(リアルタイム検証)を組み合わせることで、PRレビューに到達する前に大半の問題を解消できます。
                  </span>
                </li>
                <li>
                  <span className="num">8</span>
                  <span>
                    <strong>Taint Analysisが必要な言語・プロジェクトでは、Community Buildの限界を正しく認識する。</strong>
                    SQLインジェクション等の注入系脆弱性の検出には商用エディションが前提です。
                  </span>
                </li>
              </ul>
            </section>

            {/* 19 */}
            <section className="doc-section" id="troubleshooting">
              <span className="section-kicker"><i className="ti ti-tool"></i>SECTION 19</span>
              <h2>トラブルシューティング</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>症状</th>
                      <th>主な原因</th>
                      <th>対処</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>Missing blame information</code></td>
                      <td>シャロークローン、Git submodule設定漏れ</td>
                      <td>
                        CIの checkout ステップで <code>fetch-depth: 0</code> を設定
                      </td>
                    </tr>
                    <tr>
                      <td>PRにコメントが投稿されない</td>
                      <td>
                        <code>permissions</code> に <code>pull-requests: write</code> が不足 / エディション非対応
                      </td>
                      <td>
                        ワークフローのpermissionsを確認 / Developer Edition以上かを確認
                      </td>
                    </tr>
                    <tr>
                      <td>Quality Gateが常にNot Computed</td>
                      <td>解析が1回のみ実行 / New Code Definition未設定</td>
                      <td>2回目の解析を実行 / New Code Definitionを設定</td>
                    </tr>
                    <tr>
                      <td>Elasticsearchが起動しない</td>
                      <td>rootユーザーで実行している</td>
                      <td>専用の非rootユーザーでSonarQubeを起動する</td>
                    </tr>
                    <tr>
                      <td>MS SQL Serverでデッドロックが多発</td>
                      <td><code>READ_COMMITTED_SNAPSHOT</code> が無効</td>
                      <td>
                        <code>ALTER DATABASE ... SET READ_COMMITTED_SNAPSHOT ON</code> を実行
                      </td>
                    </tr>
                    <tr>
                      <td>Maven/Gradleの解析結果が不完全</td>
                      <td>SonarScanner CLIを誤用している</td>
                      <td>SonarScanner for Maven / Gradleに切り替える</td>
                    </tr>
                    <tr>
                      <td>MQR Mode切替後にゲートの挙動が変化</td>
                      <td>モードごとにメトリクス体系が異なる</td>
                      <td>更新アイコン付きのゲート/条件を1つずつ確認・更新</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="refs">
                <div className="refs-label"><i className="ti ti-link"></i>参考</div>
                <ul>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/10.6/devops-platform-integration/github-integration/adding-analysis-to-github-actions-workflow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Adding analysis to GitHub Actions workflow
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.sonarsource.com/sonarqube-server/8.9/setup-and-upgrade/install-the-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Install the server(DB要件)
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 20 */}
            <section className="doc-section" id="summary">
              <span className="section-kicker">
                <i className="ti ti-flag-check"></i>SECTION 20
              </span>
              <h2>まとめ</h2>
              <p>
                SonarQubeを単なる「Lintツールの延長」として捉えると、その真価の半分も引き出せません。本ガイドで解説した通り、SonarQubeの本質は以下の3層構造にあります。
              </p>
              <ol>
                <li>
                  <strong>品質モデル層:</strong> Clean Code Taxonomy と MQR Mode により、「何が良いコードか」を多面的・定量的に定義する
                </li>
                <li>
                  <strong>ガバナンス層:</strong> Quality Profile / Quality Gate / New Code Definition の組み合わせにより、Clean as You Codeという現実的な改善戦略を組織全体に強制する
                </li>
                <li>
                  <strong>検証ループ層:</strong> IDE・CI/CD・そして2026年以降はAIエージェントのコーディングループそのものに検証を埋め込み、問題がPRに到達する前に解消する
                </li>
              </ol>
              <p>
                特に第16章で解説したMCP Server・Sonar Vortex・Remediation
                Agentは、AIエージェントが書くコード量が加速度的に増える中で、SonarQubeが「静的解析ツール」から「AI開発ガバナンス基盤」へと役割を拡張していることを示しています。今後もリリースサイクルが速いため、本ガイドの情報は定期的に一次情報(docs.sonarsource.com)と突き合わせて更新することを推奨します。
              </p>
            </section>

            {/* 21 */}
            <section className="doc-section" id="references">
              <span className="section-kicker"><i className="ti ti-books"></i>SECTION 21</span>
              <h2>参考文献・情報源一覧</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>タイトル</th>
                      <th>URL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Homepage | SonarQube Server</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server" target="_blank" rel="noopener noreferrer">docs.sonarsource.com/sonarqube-server</a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Code Quality, Security &amp; Static Analysis Tool</td>
                      <td>
                        <a href="https://www.sonarsource.com/products/sonarqube/" target="_blank" rel="noopener noreferrer">sonarsource.com/products/sonarqube</a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Server components | SonarQube Server</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/server-installation/server-components-overview" target="_blank" rel="noopener noreferrer">Server components</a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Reference architecture (DE and EE)</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/latest/setup-and-upgrade/reference-architectures/up-to-10m-loc/" target="_blank" rel="noopener noreferrer">Reference architecture</a>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>DCE topology | SonarQube Server</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/server-installation/data-center-edition/dce-topology" target="_blank" rel="noopener noreferrer">DCE topology</a>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Compute Engine (DeepWiki)</td>
                      <td>
                        <a href="https://deepwiki.com/SonarSource/sonarqube/12-compute-engine" target="_blank" rel="noopener noreferrer">DeepWiki</a>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>SonarQube Compare Editions</td>
                      <td>
                        <a href="https://www.sonarsource.com/blog/sonarqube-compare-editions/" target="_blank" rel="noopener noreferrer">Compare Editions</a>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>SonarQube Pricing in 2026</td>
                      <td>
                        <a href="https://dev.to/rahulxsingh/sonarqube-pricing-in-2026-community-developer-enterprise-and-cloud-costs-explained-bdg" target="_blank" rel="noopener noreferrer">dev.to</a>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>SonarQube Community vs Enterprise</td>
                      <td>
                        <a href="https://dev.to/rahulxsingh/sonarqube-community-vs-enterprise-comparison-2j0d" target="_blank" rel="noopener noreferrer">dev.to</a>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>SonarQube Community vs Developer Edition</td>
                      <td>
                        <a href="https://dev.to/rahulxsingh/sonarqube-community-vs-developer-edition-24oo" target="_blank" rel="noopener noreferrer">dev.to</a>
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>SonarQube Review 2026</td>
                      <td>
                        <a href="https://appsecsanta.com/sonarqube" target="_blank" rel="noopener noreferrer">appsecsanta.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>公式Pricingページ</td>
                      <td>
                        <a href="https://www.sonarsource.com/plans-and-pricing/" target="_blank" rel="noopener noreferrer">plans-and-pricing</a>
                      </td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Install the server | 10.0</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/10.0/setup-and-upgrade/install-the-server" target="_blank" rel="noopener noreferrer">Install the server</a>
                      </td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>General requirements | 2026.1 LTA</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/2026.1/analyzing-source-code/scanners/scanner-environment/general-requirements" target="_blank" rel="noopener noreferrer">General requirements</a>
                      </td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>SonarScanner CLI</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/analyzing-source-code/scanners/sonarscanner" target="_blank" rel="noopener noreferrer">SonarScanner CLI</a>
                      </td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>SonarScanner for Maven</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/analyzing-source-code/scanners/sonarscanner-for-maven" target="_blank" rel="noopener noreferrer">for Maven</a>
                      </td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>SonarScanner for Gradle</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/analyzing-source-code/scanners/sonarscanner-for-gradle" target="_blank" rel="noopener noreferrer">for Gradle</a>
                      </td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>Understanding quality gates</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/quality-standards-administration/managing-quality-gates/introduction-to-quality-gates" target="_blank" rel="noopener noreferrer">Quality gates</a>
                      </td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>Software qualities | 2026.1 LTA</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/2026.1/quality-standards-administration/managing-rules/software-qualities" target="_blank" rel="noopener noreferrer">Software qualities</a>
                      </td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>Changing instance modes | 10.8</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/10.8/user-guide/code-metrics/changing-modes" target="_blank" rel="noopener noreferrer">Changing modes</a>
                      </td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td>MQR mode | SonarQube Server</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/instance-administration/analysis-functions/instance-mode/mqr-mode" target="_blank" rel="noopener noreferrer">MQR mode</a>
                      </td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td>SonarQube glossary | 10.8</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/10.8/glossary" target="_blank" rel="noopener noreferrer">Glossary</a>
                      </td>
                    </tr>
                    <tr>
                      <td>23</td>
                      <td>Understanding quality profiles</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/quality-standards-administration/managing-quality-profiles/understanding-quality-profiles" target="_blank" rel="noopener noreferrer">Quality profiles</a>
                      </td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>Security-related rules</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/quality-standards-administration/managing-rules/security-related-rules" target="_blank" rel="noopener noreferrer">Security rules</a>
                      </td>
                    </tr>
                    <tr>
                      <td>25</td>
                      <td>Managing Security Hotspots</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/user-guide/security-hotspots" target="_blank" rel="noopener noreferrer">Security Hotspots</a>
                      </td>
                    </tr>
                    <tr>
                      <td>26</td>
                      <td>Hotspot vs vulnerability</td>
                      <td>
                        <a href="https://www.bitegarden.com/differences-hotspots-vulnerabilities" target="_blank" rel="noopener noreferrer">bitegarden.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td>27</td>
                      <td>SonarQube Advanced Security</td>
                      <td>
                        <a href="https://www.sonarsource.com/products/sonarqube/advanced-security/" target="_blank" rel="noopener noreferrer">Advanced Security</a>
                      </td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td>Understanding measures and metrics</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/latest/user-guide/code-metrics/metrics-definition/" target="_blank" rel="noopener noreferrer">Metrics</a>
                      </td>
                    </tr>
                    <tr>
                      <td>29</td>
                      <td>Longitudinal Evaluation of OSS Maintainability</td>
                      <td>
                        <a href="https://arxiv.org/pdf/2003.00447" target="_blank" rel="noopener noreferrer">arXiv</a>
                      </td>
                    </tr>
                    <tr>
                      <td>30</td>
                      <td>About new code</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/latest/core-concepts/clean-as-you-code/about-new-code/" target="_blank" rel="noopener noreferrer">About new code</a>
                      </td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td>Setting up Clean as You Code | 10.7</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/10.7/project-administration/setting-up-clean-as-you-code" target="_blank" rel="noopener noreferrer">Setting up</a>
                      </td>
                    </tr>
                    <tr>
                      <td>32</td>
                      <td>Defining new code | 10.5</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/10.5/project-administration/clean-as-you-code-settings/defining-new-code" target="_blank" rel="noopener noreferrer">Defining new code</a>
                      </td>
                    </tr>
                    <tr>
                      <td>33</td>
                      <td>Official SonarQube Scan (Marketplace)</td>
                      <td>
                        <a href="https://github.com/marketplace/actions/official-sonarqube-scan" target="_blank" rel="noopener noreferrer">GitHub Marketplace</a>
                      </td>
                    </tr>
                    <tr>
                      <td>34</td>
                      <td>Adding analysis to GH Actions (10.5)</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/10.5/devops-platform-integration/github-integration/adding-sonarqube-analysis-to-your-workflow" target="_blank" rel="noopener noreferrer">GH Actions integration</a>
                      </td>
                    </tr>
                    <tr>
                      <td>35</td>
                      <td>Adding analysis to GH Actions (10.6)</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/10.6/devops-platform-integration/github-integration/adding-analysis-to-github-actions-workflow" target="_blank" rel="noopener noreferrer">GH Actions integration</a>
                      </td>
                    </tr>
                    <tr>
                      <td>36</td>
                      <td>SonarQube Pull Request Comment</td>
                      <td>
                        <a href="https://github.com/marketplace/actions/sonarqube-pull-request-comment" target="_blank" rel="noopener noreferrer">GitHub Marketplace</a>
                      </td>
                    </tr>
                    <tr>
                      <td>37</td>
                      <td>MCP Server: Agentic Code Assurance</td>
                      <td>
                        <a href="https://www.sonarsource.com/products/sonarqube/mcp-server/" target="_blank" rel="noopener noreferrer">MCP Server</a>
                      </td>
                    </tr>
                    <tr>
                      <td>38</td>
                      <td>Agentic Analysis</td>
                      <td>
                        <a href="https://www.sonarsource.com/products/sonarqube/agentic-analysis/" target="_blank" rel="noopener noreferrer">Agentic Analysis</a>
                      </td>
                    </tr>
                    <tr>
                      <td>39</td>
                      <td>SonarQube MCP Server (GitHub)</td>
                      <td>
                        <a href="https://github.com/SonarSource/sonarqube-mcp-server" target="_blank" rel="noopener noreferrer">GitHub</a>
                      </td>
                    </tr>
                    <tr>
                      <td>40</td>
                      <td>Introducing Sonar Vortex</td>
                      <td>
                        <a href="https://www.sonarsource.com/blog/introducing-sonar-vortex/" target="_blank" rel="noopener noreferrer">Sonar Vortex</a>
                      </td>
                    </tr>
                    <tr>
                      <td>41</td>
                      <td>About the MCP Server | ACDC</td>
                      <td>
                        <a href="https://docs.sonarsource.com/agent-centric-development-cycle/developer-tools/mcp-server/about-the-mcp-server" target="_blank" rel="noopener noreferrer">ACDC</a>
                      </td>
                    </tr>
                    <tr>
                      <td>42</td>
                      <td>SonarQube Server 2026.3 Release</td>
                      <td>
                        <a href="https://www.sonarsource.com/products/sonarqube/whats-new/2026-3/" target="_blank" rel="noopener noreferrer">2026.3 Release</a>
                      </td>
                    </tr>
                    <tr>
                      <td>43</td>
                      <td>Announcing SonarQube Server 2026.3</td>
                      <td>
                        <a href="https://www.sonarsource.com/blog/announcing-sonarqube-server-2026-3/" target="_blank" rel="noopener noreferrer">Announcement</a>
                      </td>
                    </tr>
                    <tr>
                      <td>44</td>
                      <td>LTA to LTA release notes | 2026.1</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/2026.1/server-update-and-maintenance/lta-to-lta-release-notes" target="_blank" rel="noopener noreferrer">Release notes</a>
                      </td>
                    </tr>
                    <tr>
                      <td>45</td>
                      <td>Release notes(最新)</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-server/server-update-and-maintenance/release-notes" target="_blank" rel="noopener noreferrer">Release notes</a>
                      </td>
                    </tr>
                    <tr>
                      <td>46</td>
                      <td>AI agents | VS Code</td>
                      <td>
                        <a href="https://docs.sonarsource.com/sonarqube-for-vs-code/ai-capabilities/agents" target="_blank" rel="noopener noreferrer">AI agents</a>
                      </td>
                    </tr>
                    <tr>
                      <td>47</td>
                      <td>Sonar Launches Vortex &amp; Remediation Agent</td>
                      <td>
                        <a href="https://www.prnewswire.com/news-releases/sonar-launches-sonar-vortex-and-sonarqube-remediation-agent-to-improve-agentic-effectiveness-302814173.html" target="_blank" rel="noopener noreferrer">PR Newswire</a>
                      </td>
                    </tr>
                    <tr>
                      <td>48</td>
                      <td>SonarQube Agentic Analysis Beta Program</td>
                      <td>
                        <a href="https://www.sonarsource.com/blog/agentic-analysis-beta/" target="_blank" rel="noopener noreferrer">Beta Program</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="final-note">
                本ガイドは2026年7月時点の公開情報に基づいて作成されています。SonarQubeはリリースサイクルが速いプロダクトのため、恒久的な仕様として引用する際は必ず
                docs.sonarsource.com の最新版ドキュメントで裏取りしてください。
              </p>
              <footer className="doc-footer">
                SonarQube 完全解説ガイド &mdash; Intermediate &amp; Advanced Edition
              </footer>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
