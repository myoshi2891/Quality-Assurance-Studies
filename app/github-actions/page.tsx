import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './github-actions.css';

const DIAGRAM_CONCEPTS = `flowchart LR
A["イベント (Event)<br/>例: push, pull_request"] --> B["ワークフロー (Workflow)<br/>.github/workflows/*.yml"]
B --> C1["ジョブ1 (Job)<br/>ランナー上で実行"]
B --> C2["ジョブ2 (Job)<br/>ランナー上で実行"]
C1 --> D1["ステップ1.1 (Step)"]
C1 --> D2["ステップ1.2 (Step)"]
D2 --> E1["アクション (Action)<br/>再利用可能な処理単位"]
C2 --> D3["ステップ2.1 (Step)"]`;

const DIAGRAM_SYNTAX = `flowchart TD
W["ワークフロー定義 (YAML)"] --> N["name<br/>ワークフロー名"]
W --> RN["run-name<br/>実行ごとの表示名"]
W --> ON["on<br/>トリガーイベント"]
W --> PM["permissions<br/>GITHUB_TOKENの権限"]
W --> ENV["env<br/>環境変数"]
W --> DEF["defaults<br/>shellや作業ディレクトリの既定値"]
W --> CC["concurrency<br/>同時実行の制御"]
W --> J["jobs<br/>実行するジョブ群"]
J --> J1["jobs.job_id.runs-on"]
J --> J2["jobs.job_id.needs"]
J --> J3["jobs.job_id.steps"]`;

const DIAGRAM_EVENTS = `flowchart LR
subgraph sg1["リポジトリ操作"]
P["push"]
PR["pull_request"]
PRT["pull_request_target"]
REL["release"]
end
subgraph sg2["手動 / 外部"]
WD["workflow_dispatch"]
RD["repository_dispatch"]
WC["workflow_call"]
end
subgraph sg3["スケジュール"]
SC["schedule (cron)"]
end
P --> WF["ワークフロー実行"]
PR --> WF
PRT --> WF
REL --> WF
WD --> WF
RD --> WF
WC --> WF
SC --> WF`;

const DIAGRAM_CONDITIONS = `flowchart LR
Job1["job1<br/>ビルド"] --> Job2["job2<br/>テスト<br/>needs: job1"]
Job1 --> Job3["job3<br/>Lint<br/>needs: job1"]
Job2 --> Job4["job4<br/>デプロイ<br/>needs: (job2, job3)"]
Job3 --> Job4`;

const DIAGRAM_MATRIX = `flowchart TB
M["strategy.matrix<br/>os × node-version"] --> A["ubuntu × 18"]
M --> B["ubuntu × 20"]
M --> C["ubuntu × 22"]
M --> D["windows × 18"]
M --> E["windows × 20"]
M --> F["windows × 22"]
M --> G["macos × 18"]
M --> H["macos × 20"]
M --> I["macos × 22"]`;

const DIAGRAM_TOKEN = `flowchart TD
Org["組織 / リポジトリの既定設定"] --> WF["ワークフローレベルのpermissions"]
WF --> Job["ジョブレベルのpermissions(上書き可)"]
Job --> Fork{"forkからのPRか?"}
Fork -- "Yes(write許可設定なし)" --> ReadOnly["書き込み権限をreadに強制ダウングレード"]
Fork -- "No" --> Final["設定通りの権限でGITHUB_TOKENが発行される"]
ReadOnly --> Final2["読み取り専用トークンとして実行"]`;

const DIAGRAM_ARTIFACTS = `flowchart LR
B["build ジョブ<br/>npm run build"] -->|upload-artifact| A["アーティファクト<br/>dist-files"]
A -->|download-artifact| D["deploy ジョブ<br/>needs: build"]`;

const DIAGRAM_REUSABLE = `flowchart LR
Caller["呼び出し元ワークフロー<br/>ci.yml"] -->|uses + with + secrets| Called["再利用ワークフロー<br/>reusable-build.yml<br/>on: workflow_call"]
Called -->|outputs| Caller`;

const DIAGRAM_PRACTICAL = `flowchart TD
Push["push / pull_request イベント"] --> Lint["lint ジョブ<br/>ESLint実行"]
Push --> Test["test ジョブ<br/>マトリックス: Node 18/20/22"]
Lint --> Build["build ジョブ<br/>needs: (lint, test)"]
Test --> Build
Build --> Artifact["ビルド成果物を<br/>アーティファクトとして保存"]
Artifact --> Deploy["deploy ジョブ<br/>mainブランチへのpushのみ実行<br/>needs: build"]
Deploy --> Prod["本番環境へデプロイ"]`;

export default function GithubActionsBeginnerPage() {
  return (
    <div className="github-actions-beginner-page">
      <NavBar />

      <main>
        <div className="hero">
          <span className="kicker">Step-by-step Beginner Guide</span>
          <h1>
            GitHub Actions 完全ガイド
            <br />
            〜初学者向けステップバイステップ解説〜
          </h1>
          <p className="lead">
            ワークフローの基本概念から、トリガー・ランナー・シークレット・キャッシュ・再利用可能ワークフロー、実践的なCI/CDパイプライン構築、セキュリティのベストプラクティスまでを、図解と実例コードを交えて体系的に解説します。
          </p>
          <div className="source-note">
            本ガイドは{' '}
            <a
              href="https://docs.github.com/en/actions"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Actions公式ドキュメント (docs.github.com/en/actions)
            </a>{' '}
            および GitHub公式サイトの各種リファレンスページを一次情報源として、最新仕様に基づき作成しています。各セクションの末尾に参照元URLを明記していますので、より詳しく知りたい場合はリンク先をご確認ください。
          </div>
        </div>

        {/* ============ 01. Overview ============ */}
        <section id="sec-overview">
          <span className="section-eyebrow">01 / Introduction</span>
          <h2>GitHub Actionsとは何か</h2>
          <p>
            <strong>GitHub Actions</strong>
            は、ソフトウェア開発のビルド・テスト・デプロイのパイプラインを自動化できる、GitHubに統合されたCI/CD(継続的インテグレーション／継続的デリバリー)プラットフォームです。リポジトリへのプルリクエストのたびにビルドとテストを実行したり、マージされたプルリクエストを自動的に本番環境へデプロイしたりするワークフローを作成できます。
          </p>
          <p>
            GitHub Actionsは単なるDevOpsツールにとどまらず、リポジトリ内で発生する様々なイベント(Issueの作成、ラベル付けなど)に応じてワークフローを実行することも可能です。GitHubはLinux・Windows・macOSの仮想マシンを提供しており、これらを使ってワークフローを実行するほか、自社のデータセンターやクラウドインフラにセルフホストランナーを構築して実行することもできます。
          </p>

          <h3>GitHub Actionsでできること(代表例)</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ユースケース</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CI(継続的インテグレーション)</td>
                  <td>プッシュやプルリクエストのたびに自動でビルド・テストを実行</td>
                </tr>
                <tr>
                  <td>CD(継続的デリバリー／デプロイ)</td>
                  <td>mainブランチへのマージ後、自動で本番・ステージング環境にデプロイ</td>
                </tr>
                <tr>
                  <td>Issue／PR管理の自動化</td>
                  <td>ラベル付け、古いIssueのクローズ、コメント自動応答など</td>
                </tr>
                <tr>
                  <td>パッケージの公開</td>
                  <td>npm・Docker・Mavenなどのパッケージを自動ビルド・公開</td>
                </tr>
                <tr>
                  <td>スケジュール実行</td>
                  <td>cronのようなスケジュールで定期的にジョブを実行</td>
                </tr>
                <tr>
                  <td>セキュリティスキャン</td>
                  <td>コードスキャン、依存関係の脆弱性チェックなどを自動実行</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/get-started/understand-github-actions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Understanding GitHub Actions
            </a>{' '}
            ／{' '}
            <a
              href="https://github.com/features/actions?locale=ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Actions 製品ページ(日本語)
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/get-started/continuous-integration"
              target="_blank"
              rel="noopener noreferrer"
            >
              Continuous integration
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/get-started/continuous-deployment"
              target="_blank"
              rel="noopener noreferrer"
            >
              Continuous deployment
            </a>
          </p>
        </section>

        {/* ============ 02. Concepts ============ */}
        <section id="sec-concepts">
          <span className="section-eyebrow">02 / Core Concepts</span>
          <h2>基本概念を理解する</h2>
          <p>
            GitHub Actionsを理解する上で欠かせない6つの用語があります。まずはこれらの関係性を図で把握しましょう。
          </p>

          <div className="diagram-card">
            <Mermaid chart={DIAGRAM_CONCEPTS} />
            <div className="diagram-caption">
              図: イベントからアクションまでの構成要素の関係
            </div>
          </div>

          <h3>各要素の説明</h3>
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
                  <td><strong>ワークフロー (Workflow)</strong></td>
                  <td>
                    1つ以上のジョブから構成される、設定可能な自動化プロセス。<code className="inline">.github/workflows</code>ディレクトリに配置するYAMLファイルで定義される
                  </td>
                </tr>
                <tr>
                  <td><strong>イベント (Event)</strong></td>
                  <td>
                    リポジトリ内で発生し、ワークフローの実行トリガーとなる特定のアクティビティ(例: pull requestの作成、issueのオープン、pushなど)
                  </td>
                </tr>
                <tr>
                  <td><strong>ジョブ (Job)</strong></td>
                  <td>
                    同一のランナー上で実行される、一連のステップの集合。デフォルトでは各ジョブは並列に実行される
                  </td>
                </tr>
                <tr>
                  <td><strong>ステップ (Step)</strong></td>
                  <td>
                    ジョブ内で実行される個々の処理単位。シェルスクリプトの実行、またはアクションの実行のいずれか
                  </td>
                </tr>
                <tr>
                  <td><strong>アクション (Action)</strong></td>
                  <td>
                    頻繁に繰り返されるタスクをまとめた再利用可能なコード単位(リポジトリのチェックアウト、ビルド環境のセットアップなど)
                  </td>
                </tr>
                <tr>
                  <td><strong>ランナー (Runner)</strong></td>
                  <td>
                    ワークフローがトリガーされたときにジョブを実行するサーバー。GitHubホスト型と、自身で用意するセルフホスト型がある
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/get-started/understand-github-actions#the-components-of-github-actions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Understanding GitHub Actions - The components of GitHub Actions
            </a>
          </p>
        </section>

        {/* ============ 03. Quickstart ============ */}
        <section id="sec-quickstart">
          <span className="section-eyebrow">03 / Quickstart</span>
          <h2>クイックスタート:最初のワークフローを作る</h2>
          <p>ここでは実際に手を動かして最初のワークフローを作成してみましょう。</p>

          <h3>手順</h3>
          <div className="step-item">
            <span className="step-badge">1</span>
            <p>
              リポジトリ内に <code className="inline">.github/workflows/github-actions-demo.yml</code> というファイルを作成します。<code className="inline">.github/workflows</code> ディレクトリが存在しない場合は、ファイルを作成すると同時に自動的に生成されます。
            </p>
          </div>
          <div className="step-item">
            <span className="step-badge">2</span>
            <p>以下のYAMLを貼り付けます。</p>
          </div>
          <div className="step-item">
            <span className="step-badge">3</span>
            <p>
              「Commit changes」でコミットします(デフォルトブランチへの直接コミット、またはブランチを切ってPRを作成するかを選べます)。
            </p>
          </div>
          <div className="step-item">
            <span className="step-badge">4</span>
            <p>
              コミットにより <code className="inline">push</code> イベントが発火し、ワークフローが自動的に実行されます。
            </p>
          </div>

          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">.github/workflows/github-actions-demo.yml</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">name</span>: <span className="str">GitHub Actions Demo</span></div>
              <div className="code-line"><span className="kw">run-name</span>: <span className="val">${'{'}{'{'} github.actor {'}'}{'}'}</span> is testing out GitHub Actions 🚀</div>
              <div className="code-line"><span className="kw">on</span>: [<span className="prop">push</span>]</div>
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">Explore-GitHub-Actions</span>:</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">run</span>: echo <span className="str">&quot;🎉 The job was automatically triggered by a <span className="val">${'{'}{'{'} github.event_name {'}'}{'}'}</span> event.&quot;</span></div>
              <div className="code-line">      - <span className="kw">run</span>: echo <span className="str">&quot;🐧 This job is now running on a <span className="val">${'{'}{'{'} runner.os {'}'}{'}'}</span> server hosted by GitHub!&quot;</span></div>
              <div className="code-line">      - <span className="kw">run</span>: echo <span className="str">&quot;🔎 The name of your branch is <span className="val">${'{'}{'{'} github.ref {'}'}{'}'}</span> and your repository is <span className="val">${'{'}{'{'} github.repository {'}'}{'}'}</span>.&quot;</span></div>
              <div className="code-line">      - <span className="prop">name</span>: Check out repository code</div>
              <div className="code-line">        <span className="kw">uses</span>: actions/checkout@v6</div>
              <div className="code-line">      - <span className="kw">run</span>: echo <span className="str">&quot;💡 The <span className="val">${'{'}{'{'} github.repository {'}'}{'}'}</span> repository has been cloned to the runner.&quot;</span></div>
              <div className="code-line">      - <span className="kw">run</span>: echo <span className="str">&quot;🖥️ The workflow is now ready to test your code on the runner.&quot;</span></div>
              <div className="code-line">      - <span className="prop">name</span>: List files in the repository</div>
              <div className="code-line">        <span className="kw">run</span>: |</div>
              <div className="code-line">          ls <span className="val">${'{'}{'{'} github.workspace {'}'}{'}'}</span></div>
              <div className="code-line">      - <span className="kw">run</span>: echo <span className="str">&quot;🍏 This job&apos;s status is <span className="val">${'{'}{'{'} job.status {'}'}{'}'}</span>.&quot;</span></div>
            </div>
          </div>

          <h3>実行結果を確認する</h3>
          <div className="step-item">
            <span className="step-badge">1</span>
            <p>リポジトリの <strong>Actions</strong> タブを開く</p>
          </div>
          <div className="step-item">
            <span className="step-badge">2</span>
            <p>サイドバーから該当のワークフロー名(例: &quot;GitHub Actions Demo&quot;)をクリック</p>
          </div>
          <div className="step-item">
            <span className="step-badge">3</span>
            <p>実行履歴の一覧から見たい実行(run)を選択</p>
          </div>
          <div className="step-item">
            <span className="step-badge">4</span>
            <p>
              左サイドバーの <strong>Jobs</strong> から <code className="inline">Explore-GitHub-Actions</code> ジョブをクリック
            </p>
          </div>
          <div className="step-item">
            <span className="step-badge">5</span>
            <p>各ステップをクリックして展開し、実行ログを確認</p>
          </div>

          <div className="tip">
            <strong>Tip:</strong> GitHubには言語やフレームワークを解析して最適な<strong>ワークフローテンプレート</strong>を提案してくれる機能があります。テンプレート一覧は{' '}
            <a
              href="https://github.com/actions/starter-workflows"
              target="_blank"
              rel="noopener noreferrer"
            >
              actions/starter-workflows
            </a>{' '}
            リポジトリで確認できます。
          </div>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/get-started/quickstart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quickstart for GitHub Actions
            </a>
          </p>
        </section>

        {/* ============ 04. Syntax ============ */}
        <section id="sec-syntax">
          <span className="section-eyebrow">04 / Workflow Syntax</span>
          <h2>ワークフローファイルの基本文法</h2>
          <p>
            ワークフローファイルはYAML形式で記述します。ここでは頻出するトップレベルキーを解説します。
          </p>

          <div className="diagram-card">
            <Mermaid chart={DIAGRAM_SYNTAX} />
            <div className="diagram-caption">図: ワークフローYAMLのトップレベル構造</div>
          </div>

          <h3>name / run-name</h3>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">name / run-name の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">name</span>: <span className="str">CI Pipeline</span></div>
              <div className="code-line"><span className="kw">run-name</span>: Deploy to <span className="val">${'{'}{'{'} inputs.deploy_target {'}'}{'}'}</span> by @<span className="val">${'{'}{'{'} github.actor {'}'}{'}'}</span></div>
            </div>
          </div>
          <ul>
            <li>
              <code className="inline">name</code>: Actionsタブに表示されるワークフロー名。省略時はファイルパスが表示される
            </li>
            <li>
              <code className="inline">run-name</code>: 個々の実行に付けられる名前。<code className="inline">github</code>コンテキストや<code className="inline">inputs</code>コンテキストを利用した式を含められる
            </li>
          </ul>

          <h3>env(環境変数)</h3>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">env の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">env</span>:</div>
              <div className="code-line">  <span className="prop">SERVER</span>: production</div>
            </div>
          </div>
          <p>
            ワークフロー全体・ジョブ単位・ステップ単位のいずれでも<code className="inline">env</code>を設定でき、より具体的なスコープ(ステップ &gt; ジョブ &gt; ワークフロー)の値が優先されます。
          </p>

          <h3>defaults(既定値)</h3>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">defaults の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">defaults</span>:</div>
              <div className="code-line">  <span className="prop">run</span>:</div>
              <div className="code-line">    <span className="prop">shell</span>: bash</div>
              <div className="code-line">    <span className="prop">working-directory</span>: ./scripts</div>
            </div>
          </div>
          <p>
            すべての<code className="inline">run</code>ステップに適用されるデフォルトのシェルや作業ディレクトリを指定できます。サポートされる<code className="inline">shell</code>の値は以下の通りです。
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>プラットフォーム</th>
                  <th>shellの値</th>
                  <th>内部で実行されるコマンド</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Linux/macOS</td>
                  <td>未指定(既定)</td>
                  <td><code className="inline">bash -e {'{0}'}</code></td>
                </tr>
                <tr>
                  <td>全OS</td>
                  <td><code className="inline">bash</code></td>
                  <td><code className="inline">bash --noprofile --norc -eo pipefail {'{0}'}</code></td>
                </tr>
                <tr>
                  <td>全OS</td>
                  <td><code className="inline">pwsh</code></td>
                  <td><code className="inline">pwsh -command &quot;. &apos;{'{0}'}&apos;&quot;</code></td>
                </tr>
                <tr>
                  <td>全OS</td>
                  <td><code className="inline">python</code></td>
                  <td><code className="inline">python {'{0}'}</code></td>
                </tr>
                <tr>
                  <td>Linux/macOS</td>
                  <td><code className="inline">sh</code></td>
                  <td><code className="inline">sh -e {'{0}'}</code></td>
                </tr>
                <tr>
                  <td>Windows</td>
                  <td><code className="inline">cmd</code></td>
                  <td><code className="inline">%ComSpec% /D /E:ON /V:OFF /S /C &quot;CALL &quot;{'{0}'}&quot;&quot;</code></td>
                </tr>
                <tr>
                  <td>Windows</td>
                  <td><code className="inline">powershell</code></td>
                  <td><code className="inline">powershell -command &quot;. &apos;{'{0}'}&apos;&quot;</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>steps(ステップ)の主なキー</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>キー</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="inline">name</code></td>
                  <td>ステップの表示名</td>
                </tr>
                <tr>
                  <td><code className="inline">uses</code></td>
                  <td>使用するアクション(例: <code className="inline">actions/checkout@v6</code>)</td>
                </tr>
                <tr>
                  <td><code className="inline">run</code></td>
                  <td>実行するシェルコマンド</td>
                </tr>
                <tr>
                  <td><code className="inline">with</code></td>
                  <td>アクションに渡す入力パラメータ</td>
                </tr>
                <tr>
                  <td><code className="inline">env</code></td>
                  <td>ステップ単位の環境変数</td>
                </tr>
                <tr>
                  <td><code className="inline">if</code></td>
                  <td>条件付き実行</td>
                </tr>
                <tr>
                  <td><code className="inline">continue-on-error</code></td>
                  <td>失敗してもワークフローを継続するか</td>
                </tr>
                <tr>
                  <td><code className="inline">timeout-minutes</code></td>
                  <td>ステップのタイムアウト時間</td>
                </tr>
                <tr>
                  <td><code className="inline">working-directory</code></td>
                  <td>作業ディレクトリの指定</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
              target="_blank"
              rel="noopener noreferrer"
            >
              Workflow syntax for GitHub Actions
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idsteps"
              target="_blank"
              rel="noopener noreferrer"
            >
              jobs.&lt;job_id&gt;.steps リファレンス
            </a>
          </p>
        </section>

        {/* ============ 05. Events ============ */}
        <section id="sec-events">
          <span className="section-eyebrow">05 / Triggers</span>
          <h2>トリガーイベント(on)を使いこなす</h2>
          <p>
            <code className="inline">on</code>キーでワークフローが実行される条件を定義します。イベントは非常に多くの種類がありますが、ここでは初学者が押さえておくべき主要なものを紹介します。
          </p>

          <div className="diagram-card">
            <Mermaid chart={DIAGRAM_EVENTS} />
            <div className="diagram-caption">図: 代表的なトリガーイベントの分類</div>
          </div>

          <h3>主要なイベント一覧</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>イベント</th>
                  <th>発火タイミング</th>
                  <th>主な用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="inline">push</code></td>
                  <td>ブランチまたはタグへのpush</td>
                  <td>CIビルド・テスト</td>
                </tr>
                <tr>
                  <td><code className="inline">pull_request</code></td>
                  <td>PRのopen/synchronize/reopenなど</td>
                  <td>PRごとのCI</td>
                </tr>
                <tr>
                  <td><code className="inline">pull_request_target</code></td>
                  <td>forkからのPRでも書き込み権限のトークンで実行</td>
                  <td>forkからのPRにラベル付け等(注意が必要)</td>
                </tr>
                <tr>
                  <td><code className="inline">schedule</code></td>
                  <td>cron式で指定した時刻</td>
                  <td>定期実行バッチ、夜間ビルド</td>
                </tr>
                <tr>
                  <td><code className="inline">workflow_dispatch</code></td>
                  <td>UI/CLI/APIから手動実行</td>
                  <td>手動デプロイなど</td>
                </tr>
                <tr>
                  <td><code className="inline">release</code></td>
                  <td>リリースの作成・公開など</td>
                  <td>リリース時のパッケージ公開</td>
                </tr>
                <tr>
                  <td><code className="inline">workflow_call</code></td>
                  <td>他のワークフローから呼び出された時</td>
                  <td>再利用可能ワークフロー</td>
                </tr>
                <tr>
                  <td><code className="inline">repository_dispatch</code></td>
                  <td>外部からのREST API呼び出し</td>
                  <td>GitHub外のイベント連携</td>
                </tr>
                <tr>
                  <td>
                    <code className="inline">issues</code> / <code className="inline">issue_comment</code>
                  </td>
                  <td>Issueやコメントの作成・編集など</td>
                  <td>Issue自動管理</td>
                </tr>
                <tr>
                  <td><code className="inline">workflow_run</code></td>
                  <td>他のワークフローの完了時</td>
                  <td>権限を分離した後続処理</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>単一イベント・複数イベントの指定</h3>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">単一/複数イベントの例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="cm"># 単一イベント</span></div>
              <div className="code-line"><span className="kw">on</span>: <span className="prop">push</span></div>
              <div className="code-line"></div>
              <div className="code-line"><span className="cm"># 複数イベント(いずれか1つが発生すれば実行される)</span></div>
              <div className="code-line"><span className="kw">on</span>: [<span className="prop">push</span>, <span className="prop">fork</span>]</div>
            </div>
          </div>

          <h3>ブランチ・タグ・パスによるフィルタリング</h3>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">フィルタの例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">on</span>:</div>
              <div className="code-line">  <span className="prop">push</span>:</div>
              <div className="code-line">    <span className="prop">branches</span>:</div>
              <div className="code-line">      - main</div>
              <div className="code-line">      - <span className="str">&apos;releases/**&apos;</span></div>
              <div className="code-line">    <span className="prop">paths</span>:</div>
              <div className="code-line">      - <span className="str">&apos;**.js&apos;</span></div>
              <div className="code-line">    <span className="prop">tags</span>:</div>
              <div className="code-line">      - <span className="str">&apos;v*.*.*&apos;</span></div>
            </div>
          </div>
          <ul>
            <li>
              <code className="inline">branches</code> / <code className="inline">branches-ignore</code>: 対象・除外するブランチ名パターン
            </li>
            <li>
              <code className="inline">tags</code> / <code className="inline">tags-ignore</code>: 対象・除外するタグ名パターン
            </li>
            <li>
              <code className="inline">paths</code> / <code className="inline">paths-ignore</code>: 変更されたファイルパスによるフィルタ
            </li>
          </ul>
          <div className="tip">
            <strong>注意:</strong> <code className="inline">branches</code>と<code className="inline">paths</code>を同時に指定した場合は、両方の条件を満たした場合のみワークフローが実行されます。
          </div>

          <h3>スケジュール実行(cron)</h3>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">schedule の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">on</span>:</div>
              <div className="code-line">  <span className="prop">schedule</span>:</div>
              <div className="code-line">    - <span className="prop">cron</span>: <span className="str">&apos;30 5 * * 1-5&apos;</span></div>
              <div className="code-line">      <span className="prop">timezone</span>: <span className="str">&quot;America/New_York&quot;</span></div>
            </div>
          </div>

          <p>cron構文は5つのフィールドから構成されます。</p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>フィールド</th>
                  <th>意味</th>
                  <th>値の範囲</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1番目</td>
                  <td>分</td>
                  <td>0-59</td>
                </tr>
                <tr>
                  <td>2番目</td>
                  <td>時</td>
                  <td>0-23</td>
                </tr>
                <tr>
                  <td>3番目</td>
                  <td>日</td>
                  <td>1-31</td>
                </tr>
                <tr>
                  <td>4番目</td>
                  <td>月</td>
                  <td>1-12 または JAN-DEC</td>
                </tr>
                <tr>
                  <td>5番目</td>
                  <td>曜日</td>
                  <td>0-6 または SUN-SAT</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>演算子</th>
                  <th>意味</th>
                  <th>例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="inline">*</code></td>
                  <td>すべての値</td>
                  <td><code className="inline">15 * * * *</code>(毎時15分)</td>
                </tr>
                <tr>
                  <td><code className="inline">,</code></td>
                  <td>値のリスト</td>
                  <td><code className="inline">2,10 4,5 * * *</code>(4時・5時台の2分と10分)</td>
                </tr>
                <tr>
                  <td><code className="inline">-</code></td>
                  <td>範囲</td>
                  <td><code className="inline">30 4-6 * * *</code>(4〜6時台の30分)</td>
                </tr>
                <tr>
                  <td><code className="inline">/</code></td>
                  <td>ステップ値</td>
                  <td><code className="inline">20/15 * * * *</code>(20分から59分まで15分おき)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            デフォルトのタイムゾーンはUTCで、実行間隔の最短は5分です。<code className="inline">@yearly</code>や<code className="inline">@daily</code>のような非標準構文はサポートされていません。
          </p>

          <h3>手動実行(workflow_dispatch)と入力パラメータ</h3>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">workflow_dispatch の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">on</span>:</div>
              <div className="code-line">  <span className="prop">workflow_dispatch</span>:</div>
              <div className="code-line">    <span className="prop">inputs</span>:</div>
              <div className="code-line">      <span className="prop">logLevel</span>:</div>
              <div className="code-line">        <span className="prop">description</span>: <span className="str">&apos;Log level&apos;</span></div>
              <div className="code-line">        <span className="prop">required</span>: <span className="val">true</span></div>
              <div className="code-line">        <span className="prop">default</span>: <span className="str">&apos;warning&apos;</span></div>
              <div className="code-line">        <span className="prop">type</span>: choice</div>
              <div className="code-line">        <span className="prop">options</span>:</div>
              <div className="code-line">          - info</div>
              <div className="code-line">          - warning</div>
              <div className="code-line">          - debug</div>
              <div className="code-line">      <span className="prop">print_tags</span>:</div>
              <div className="code-line">        <span className="prop">description</span>: <span className="str">&apos;True to print to STDOUT&apos;</span></div>
              <div className="code-line">        <span className="prop">required</span>: <span className="val">true</span></div>
              <div className="code-line">        <span className="prop">type</span>: boolean</div>
              <div className="code-line"></div>
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">print-tag</span>:</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="kw">if</span>: <span className="val">${'{'}{'{'} inputs.print_tags {'}'}{'}'}</span></div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">run</span>: echo <span className="str">&quot;Log level is <span className="val">${'{'}{'{'} inputs.logLevel {'}'}{'}'}</span>&quot;</span></div>
            </div>
          </div>
          <p>
            <code className="inline">workflow_dispatch</code>はデフォルトブランチ上にワークフローファイルが存在する場合のみUIに表示され、手動でトリガーできます。入力の型には <code className="inline">boolean</code> / <code className="inline">choice</code> / <code className="inline">number</code> / <code className="inline">environment</code> / <code className="inline">string</code> が指定できます。
          </p>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
              target="_blank"
              rel="noopener noreferrer"
            >
              Events that trigger workflows
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#onschedule"
              target="_blank"
              rel="noopener noreferrer"
            >
              Workflow syntax - on.schedule
            </a>{' '}
            ／{' '}
            <a href="https://crontab.guru/" target="_blank" rel="noopener noreferrer">
              crontab guru
            </a>
          </p>
        </section>

        {/* ============ 06. Jobs and runners ============ */}
        <section id="sec-runners">
          <span className="section-eyebrow">06 / Jobs &amp; Runners</span>
          <h2>ジョブとランナー(実行環境)</h2>

          <h3>ジョブの基本</h3>
          <p>
            1回のワークフロー実行は1つ以上の<strong>ジョブ</strong>から構成され、デフォルトでは<strong>並列</strong>に実行されます。ジョブを順番に実行したい場合は<code className="inline">needs</code>キーで依存関係を明示します。
          </p>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">jobs の基本例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">my_first_job</span>:</div>
              <div className="code-line">    <span className="prop">name</span>: My first job</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">run</span>: echo <span className="str">&quot;Hello&quot;</span></div>
              <div className="code-line">  <span className="prop">my_second_job</span>:</div>
              <div className="code-line">    <span className="prop">name</span>: My second job</div>
              <div className="code-line">    <span className="prop">needs</span>: my_first_job</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">run</span>: echo <span className="str">&quot;World&quot;</span></div>
            </div>
          </div>

          <h3>GitHubホスト型ランナー</h3>
          <p>
            <code className="inline">runs-on</code>で指定するラベルにより、GitHubが提供する仮想マシン(またはセルフホストランナー)を選択します。パブリックリポジトリでは標準ランナーの利用は無料かつ無制限です。
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>OS</th>
                  <th>CPU</th>
                  <th>メモリ</th>
                  <th>ストレージ</th>
                  <th>アーキテクチャ</th>
                  <th>ワークフローラベル</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Linux</td>
                  <td>1</td>
                  <td>5GB</td>
                  <td>14GB</td>
                  <td>x64</td>
                  <td><code className="inline">ubuntu-slim</code></td>
                </tr>
                <tr>
                  <td>Linux</td>
                  <td>4</td>
                  <td>16GB</td>
                  <td>14GB</td>
                  <td>x64</td>
                  <td>
                    <code className="inline">ubuntu-latest</code>, <code className="inline">ubuntu-24.04</code>, <code className="inline">ubuntu-22.04</code>
                  </td>
                </tr>
                <tr>
                  <td>Linux</td>
                  <td>4</td>
                  <td>16GB</td>
                  <td>14GB</td>
                  <td>arm64</td>
                  <td>
                    <code className="inline">ubuntu-24.04-arm</code>, <code className="inline">ubuntu-22.04-arm</code>
                  </td>
                </tr>
                <tr>
                  <td>Windows</td>
                  <td>4</td>
                  <td>16GB</td>
                  <td>14GB</td>
                  <td>x64</td>
                  <td>
                    <code className="inline">windows-latest</code>, <code className="inline">windows-2025</code>, <code className="inline">windows-2022</code>
                  </td>
                </tr>
                <tr>
                  <td>Windows</td>
                  <td>4</td>
                  <td>16GB</td>
                  <td>14GB</td>
                  <td>arm64</td>
                  <td><code className="inline">windows-11-arm</code></td>
                </tr>
                <tr>
                  <td>macOS</td>
                  <td>3 (M1)</td>
                  <td>7GB</td>
                  <td>14GB</td>
                  <td>arm64</td>
                  <td>
                    <code className="inline">macos-latest</code>, <code className="inline">macos-14</code>, <code className="inline">macos-15</code>
                  </td>
                </tr>
                <tr>
                  <td>macOS</td>
                  <td>4</td>
                  <td>14GB</td>
                  <td>14GB</td>
                  <td>Intel</td>
                  <td><code className="inline">macos-15-intel</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">runs-on の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">build</span>:</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
            </div>
          </div>

          <h3>セルフホストランナー</h3>
          <p>
            自前のマシンやクラウドインスタンスをランナーとして登録できます。特定のOSやハードウェア(GPUなど)が必要な場合、あるいはネットワークの制約でGitHub提供のランナーが使えない場合に有効です。
          </p>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">self-hosted の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">build</span>:</div>
              <div className="code-line">    <span className="prop">runs-on</span>: [self-hosted, linux, x64, gpu]</div>
            </div>
          </div>
          <p>
            複数のラベルを配列で指定すると、<strong>すべてのラベルに一致する</strong>ランナーが選ばれます。
          </p>

          <h3>コンテナ上でジョブを実行する</h3>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">container の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">build</span>:</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">container</span>:</div>
              <div className="code-line">      <span className="prop">image</span>: node:20-bookworm</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
              <div className="code-line">      - <span className="kw">run</span>: npm ci</div>
            </div>
          </div>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#standard-github-hosted-runners-for-public-repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Standard GitHub-hosted runners for public repositories
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/concepts/runners/github-hosted-runners"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub-hosted runners
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/concepts/runners/self-hosted-runners"
              target="_blank"
              rel="noopener noreferrer"
            >
              Self-hosted runners
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/how-tos/write-workflows/choose-where-workflows-run/run-jobs-in-a-container"
              target="_blank"
              rel="noopener noreferrer"
            >
              Run jobs in a container
            </a>
          </p>
        </section>

        {/* ============ 07. Conditions ============ */}
        <section id="sec-conditions">
          <span className="section-eyebrow">07 / Dependencies &amp; Conditions</span>
          <h2>ジョブの依存関係と条件分岐</h2>

          <h3>needsによる順序制御</h3>
          <div className="diagram-card">
            <Mermaid chart={DIAGRAM_CONDITIONS} />
            <div className="diagram-caption">図: needsキーによるジョブの依存関係グラフ</div>
          </div>

          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">needs の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">job1</span>:</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>: [ ]</div>
              <div className="code-line">  <span className="prop">job2</span>:</div>
              <div className="code-line">    <span className="prop">needs</span>: job1</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>: [ ]</div>
              <div className="code-line">  <span className="prop">job3</span>:</div>
              <div className="code-line">    <span className="prop">needs</span>: [job1, job2]</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>: [ ]</div>
            </div>
          </div>
          <p>
            依存先のジョブが失敗またはスキップされると、それに依存するジョブも通常はスキップされます。依存先の成否に関わらず必ず実行したい場合は<code className="inline">if: {'${{ always() }}'}</code>を使用します。
          </p>

          <h3>if による条件付き実行</h3>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">if の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">production-deploy</span>:</div>
              <div className="code-line">    <span className="kw">if</span>: github.repository == <span className="str">&apos;octo-org/octo-repo-prod&apos;</span></div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
            </div>
          </div>
          <div className="danger-box">
            <strong>注意:</strong> <code className="inline">if</code>式の先頭が<code className="inline">!</code>で始まる場合は、YAMLの予約文字と衝突するため<code className="inline">{'${{ }}'}</code>または引用符での囲みが必須です。例: <code className="inline">if: {'${{ !startsWith(github.ref, \'refs/tags/\') }}'}</code>
          </div>

          <h3>concurrency(同時実行の制御)</h3>
          <p>
            同じconcurrencyグループに属する実行は同時に1つしか走らせない、という制御ができます。CI/CDで「同じブランチへの連続pushの場合、古い実行はキャンセルして最新のものだけ実行する」といった用途で頻繁に使われます。
          </p>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">concurrency の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">concurrency</span>:</div>
              <div className="code-line">  <span className="prop">group</span>: <span className="val">${'{'}{'{'} github.workflow {'}'}{'}'}</span>-<span className="val">${'{'}{'{'} github.ref {'}'}{'}'}</span></div>
              <div className="code-line">  <span className="prop">cancel-in-progress</span>: <span className="val">true</span></div>
            </div>
          </div>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idneeds"
              target="_blank"
              rel="noopener noreferrer"
            >
              jobs.&lt;job_id&gt;.needs
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idif"
              target="_blank"
              rel="noopener noreferrer"
            >
              jobs.&lt;job_id&gt;.if
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#concurrency"
              target="_blank"
              rel="noopener noreferrer"
            >
              concurrency
            </a>
          </p>
        </section>

        {/* ============ 08. Matrix ============ */}
        <section id="sec-matrix">
          <span className="section-eyebrow">08 / Matrix Strategy</span>
          <h2>マトリックス戦略で複数環境をテストする</h2>
          <p>
            マトリックス戦略を使うと、OSやランタイムバージョンなど変数の組み合わせごとに、同一ジョブを自動的に複数回実行できます。
          </p>

          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">matrix の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">test</span>:</div>
              <div className="code-line">    <span className="prop">strategy</span>:</div>
              <div className="code-line">      <span className="prop">matrix</span>:</div>
              <div className="code-line">        <span className="prop">os</span>: [ubuntu-latest, windows-latest, macos-latest]</div>
              <div className="code-line">        <span className="prop">node-version</span>: [<span className="num">18</span>, <span className="num">20</span>, <span className="num">22</span>]</div>
              <div className="code-line">    <span className="prop">runs-on</span>: <span className="val">${'{'}{'{'} matrix.os {'}'}{'}'}</span></div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/setup-node@v4</div>
              <div className="code-line">        <span className="kw">with</span>:</div>
              <div className="code-line">          <span className="prop">node-version</span>: <span className="val">${'{'}{'{'} matrix.node-version {'}'}{'}'}</span></div>
              <div className="code-line">      - <span className="kw">run</span>: npm ci</div>
              <div className="code-line">      - <span className="kw">run</span>: npm test</div>
            </div>
          </div>
          <p>
            上記の例では、3種類のOS × 3種類のNode.jsバージョン = <strong>9通りの組み合わせ</strong>でジョブが並列実行されます。
          </p>

          <div className="diagram-card">
            <Mermaid chart={DIAGRAM_MATRIX} />
            <div className="diagram-caption">
              図: マトリックス戦略による組み合わせ展開(3 × 3 = 9通り)
            </div>
          </div>

          <p>
            <code className="inline">fail-fast: false</code>を指定すると、いずれかの組み合わせが失敗しても他の組み合わせの実行を継続します。<code className="inline">max-parallel</code>で同時実行数の上限を制御できます。
          </p>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">fail-fast / max-parallel の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">strategy</span>:</div>
              <div className="code-line">  <span className="prop">fail-fast</span>: <span className="val">false</span></div>
              <div className="code-line">  <span className="prop">max-parallel</span>: <span className="num">3</span></div>
              <div className="code-line">  <span className="prop">matrix</span>:</div>
              <div className="code-line">    <span className="prop">node-version</span>: [<span className="num">18</span>, <span className="num">20</span>, <span className="num">22</span>]</div>
            </div>
          </div>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstrategymatrix"
              target="_blank"
              rel="noopener noreferrer"
            >
              jobs.&lt;job_id&gt;.strategy.matrix
            </a>
          </p>
        </section>

        {/* ============ 09. Secrets ============ */}
        <section id="sec-secrets">
          <span className="section-eyebrow">09 / Secrets &amp; Variables</span>
          <h2>シークレットと変数の管理</h2>

          <h3>シークレットとは</h3>
          <p>
            シークレットは、組織・リポジトリ・環境単位で作成できる機密情報の保管先です。GitHub Actionsは、ワークフロー内で明示的に参照されたシークレットのみを読み取ることができます。
          </p>
          <p>
            シークレットは{' '}
            <a
              href="https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Libsodium sealed boxes
            </a>{' '}
            方式で暗号化されてGitHubに送信されるため、GitHubのインフラ内での偶発的なログ出力などによる漏えいリスクが低減されています。ログに出力されたシークレットの値は自動的にマスク(redact)されますが、この仕組みは完全ではないため、シークレットの値自体を意図的にログへ出力しないよう注意が必要です。
          </p>

          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">secrets の利用例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">steps</span>:</div>
              <div className="code-line">  - <span className="prop">name</span>: Deploy</div>
              <div className="code-line">    <span className="kw">env</span>:</div>
              <div className="code-line">      <span className="prop">API_KEY</span>: <span className="val">${'{'}{'{'} secrets.API_KEY {'}'}{'}'}</span></div>
              <div className="code-line">    <span className="kw">run</span>: ./deploy.sh</div>
            </div>
          </div>

          <h3>組織レベル・環境レベルのシークレット</h3>
          <div>
            <div className="callout">
              <strong>組織レベル</strong>
              <p>複数リポジトリで共通のシークレットを共有し、更新の手間を削減できます。</p>
            </div>
            <div className="callout">
              <strong>環境シークレット</strong>
              <p>環境ごと(例: staging/production)に異なる値を設定でき、必須レビュアーによる承認フローも設定可能です。</p>
            </div>
          </div>

          <h3>変数(Variables)</h3>
          <p>
            機密ではない設定値には<code className="inline">vars</code>コンテキストを使う変数機能が利用できます。
          </p>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">vars の利用例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">steps</span>:</div>
              <div className="code-line">  - <span className="kw">run</span>: echo <span className="str">&quot;Deploying to <span className="val">${'{'}{'{'} vars.ENVIRONMENT_NAME {'}'}{'}'}</span>&quot;</span></div>
            </div>
          </div>

          <h3>認証情報の権限を最小限にする</h3>
          <p>
            個人の認証情報を使う代わりに、デプロイキーやサービスアカウントの利用を推奨します。個人アクセストークンを発行する場合は、必要最小限のスコープのみを選択してください。ユーザーに紐付かず、細かい権限設定と短命なトークンを持つ<strong>GitHub App</strong>の利用も選択肢の一つです。
          </p>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/concepts/security/secrets"
              target="_blank"
              rel="noopener noreferrer"
            >
              Secrets
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets"
              target="_blank"
              rel="noopener noreferrer"
            >
              Use secrets in GitHub Actions
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables"
              target="_blank"
              rel="noopener noreferrer"
            >
              Use variables in GitHub Actions
            </a>
          </p>
        </section>

        {/* ============ 10. GITHUB_TOKEN ============ */}
        <section id="sec-token">
          <span className="section-eyebrow">10 / GITHUB_TOKEN &amp; Permissions</span>
          <h2>GITHUB_TOKENと権限(permissions)</h2>

          <h3>GITHUB_TOKENとは</h3>
          <p>
            各ワークフロージョブの開始時に、GitHubは一意の<code className="inline">GITHUB_TOKEN</code>シークレットを自動生成します。これはリポジトリにインストールされたGitHub Appのインストールアクセストークンであり、ワークフロー内の認証に利用できます。
          </p>

          <div>
            <div className="callout">
              <strong>GitHubホスト型ランナー</strong>
              <p>最大ジョブ実行時間は6時間で、トークンの有効期間もそれに準じます。</p>
            </div>
            <div className="callout">
              <strong>セルフホストランナー</strong>
              <p>最大ジョブ実行時間は5日ですが、トークンは最大24時間までしか延長できません。24時間を超えるジョブでは個人アクセストークンなど別の認証方式が必要です。</p>
            </div>
          </div>

          <p>
            <code className="inline">GITHUB_TOKEN</code>を使って行った操作(pushなど)は、原則として新たなワークフロー実行をトリガーしません(無限ループ防止のため)。ただし<code className="inline">workflow_dispatch</code>・<code className="inline">repository_dispatch</code>は例外で、常にワークフロー実行を作成します。
          </p>

          <h3>permissionsで最小権限を設定する</h3>
          <p>
            <code className="inline">GITHUB_TOKEN</code>の既定権限は、最小権限の原則に従ってワークフロー単位・ジョブ単位で調整すべきです。
          </p>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">permissions の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">permissions</span>:</div>
              <div className="code-line">  <span className="prop">contents</span>: read</div>
              <div className="code-line">  <span className="prop">pull-requests</span>: write</div>
            </div>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>権限キー</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="inline">contents</code></td>
                  <td>リポジトリ内容の読み書き(コミット一覧の取得、リリース作成など)</td>
                </tr>
                <tr>
                  <td><code className="inline">pull-requests</code></td>
                  <td>プルリクエストの操作(ラベル追加など)</td>
                </tr>
                <tr>
                  <td><code className="inline">issues</code></td>
                  <td>Issueの操作(コメント追加など)</td>
                </tr>
                <tr>
                  <td><code className="inline">id-token</code></td>
                  <td>OpenID Connect (OIDC) トークンの取得(<code className="inline">write</code>が必要)</td>
                </tr>
                <tr>
                  <td><code className="inline">packages</code></td>
                  <td>GitHub Packagesへのアップロード・公開</td>
                </tr>
                <tr>
                  <td><code className="inline">checks</code></td>
                  <td>チェックランの作成・更新</td>
                </tr>
                <tr>
                  <td><code className="inline">actions</code></td>
                  <td>ワークフロー実行のキャンセルなど</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <code className="inline">permissions: read-all</code> / <code className="inline">permissions: write-all</code>ですべての権限を一括指定することも可能ですが、実運用では<strong>必要な権限だけを個別指定</strong>することが推奨されます。
          </p>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">全権限の無効化</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">permissions</span>: {'{}'}</div>
            </div>
          </div>

          <h3>権限フロー図</h3>
          <div className="diagram-card">
            <Mermaid chart={DIAGRAM_TOKEN} />
            <div className="diagram-caption">図: GITHUB_TOKENの権限が計算される流れ</div>
          </div>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/concepts/security/github_token"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB_TOKEN
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#permissions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Workflow syntax - permissions
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#how-permissions-are-calculated-for-a-workflow-job"
              target="_blank"
              rel="noopener noreferrer"
            >
              How permissions are calculated for a workflow job
            </a>
          </p>
        </section>

        {/* ============ 11. Caching ============ */}
        <section id="sec-caching">
          <span className="section-eyebrow">11 / Dependency Caching</span>
          <h2>依存関係のキャッシュで高速化する</h2>
          <p>
            GitHubホスト型ランナーは毎回クリーンな仮想マシンから起動するため、依存パッケージ(npm、Maven、Gradle、pipなど)を都度ダウンロードし直す必要があり、実行時間・ネットワーク利用量・コストが増加します。<strong>依存関係キャッシュ</strong>を使うことでこれを高速化できます。
          </p>

          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">setup-node の cache オプション</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">steps</span>:</div>
              <div className="code-line">  - <span className="kw">uses</span>: actions/checkout@v6</div>
              <div className="code-line">  - <span className="kw">uses</span>: actions/setup-node@v4</div>
              <div className="code-line">    <span className="kw">with</span>:</div>
              <div className="code-line">      <span className="prop">node-version</span>: <span className="num">20</span></div>
              <div className="code-line">      <span className="prop">cache</span>: <span className="str">&apos;npm&apos;</span></div>
              <div className="code-line">  - <span className="kw">run</span>: npm ci</div>
            </div>
          </div>

          <p>
            <code className="inline">actions/setup-node</code>など多くの<code className="inline">setup-*</code>アクションには<code className="inline">cache</code>オプションが組み込まれており、簡単にキャッシュを有効化できます。より柔軟な制御が必要な場合は汎用の<code className="inline">actions/cache</code>アクションを使用します。
          </p>

          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">actions/cache の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">steps</span>:</div>
              <div className="code-line">  - <span className="kw">uses</span>: actions/cache@v4</div>
              <div className="code-line">    <span className="kw">with</span>:</div>
              <div className="code-line">      <span className="prop">path</span>: ~/.npm</div>
              <div className="code-line">      <span className="prop">key</span>: <span className="val">${'{'}{'{'} runner.os {'}'}{'}'}</span>-node-<span className="val">${'{'}{'{'} hashFiles(&apos;**/package-lock.json&apos;) {'}'}{'}'}</span></div>
              <div className="code-line">      <span className="prop">restore-keys</span>: |</div>
              <div className="code-line">        <span className="val">${'{'}{'{'} runner.os {'}'}{'}'}</span>-node-</div>
            </div>
          </div>

          <h3>キャッシュとアーティファクトの違い</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>観点</th>
                  <th>キャッシュ (Cache)</th>
                  <th>アーティファクト (Artifact)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>主な用途</td>
                  <td>ジョブ／実行間で変化の少ないファイルの再利用(依存パッケージなど)</td>
                  <td>ワークフロー実行後に閲覧・ダウンロードしたい成果物(ビルド済みバイナリ、ログなど)</td>
                </tr>
                <tr>
                  <td>典型例</td>
                  <td><code className="inline">node_modules</code>、Mavenの<code className="inline">.m2</code>キャッシュ</td>
                  <td>ビルド済みのバイナリファイル、テストレポート</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/concepts/workflows-and-actions/dependency-caching"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dependency caching
            </a>
          </p>
        </section>

        {/* ============ 12. Artifacts ============ */}
        <section id="sec-artifacts">
          <span className="section-eyebrow">12 / Artifacts</span>
          <h2>アーティファクト:成果物の保存と共有</h2>
          <p>
            ワークフロー実行が生成したファイル(ビルド成果物、ログ、レポートなど)を保存し、実行終了後にダウンロードしたり、同一ワークフロー内の別ジョブに引き継いだりできます。
          </p>

          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">upload-artifact / download-artifact の例</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">build</span>:</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
              <div className="code-line">      - <span className="kw">run</span>: npm ci &amp;&amp; npm run build</div>
              <div className="code-line">      - <span className="prop">name</span>: Upload build artifact</div>
              <div className="code-line">        <span className="kw">uses</span>: actions/upload-artifact@v4</div>
              <div className="code-line">        <span className="kw">with</span>:</div>
              <div className="code-line">          <span className="prop">name</span>: dist-files</div>
              <div className="code-line">          <span className="prop">path</span>: dist/</div>
              <div className="code-line"></div>
              <div className="code-line">  <span className="prop">deploy</span>:</div>
              <div className="code-line">    <span className="prop">needs</span>: build</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="prop">name</span>: Download build artifact</div>
              <div className="code-line">        <span className="kw">uses</span>: actions/download-artifact@v4</div>
              <div className="code-line">        <span className="kw">with</span>:</div>
              <div className="code-line">          <span className="prop">name</span>: dist-files</div>
              <div className="code-line">          <span className="prop">path</span>: dist/</div>
              <div className="code-line">      - <span className="kw">run</span>: echo <span className="str">&quot;デプロイ処理をここに記述&quot;</span></div>
            </div>
          </div>

          <div className="diagram-card">
            <Mermaid chart={DIAGRAM_ARTIFACTS} />
            <div className="diagram-caption">
              図: アーティファクトを介したジョブ間のデータ受け渡し
            </div>
          </div>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Workflow artifacts
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/tutorials/store-and-share-data"
              target="_blank"
              rel="noopener noreferrer"
            >
              Store and share data with workflow artifacts
            </a>
          </p>
        </section>

        {/* ============ 13. Reusable workflows ============ */}
        <section id="sec-reusable">
          <span className="section-eyebrow">13 / Reusable Workflows</span>
          <h2>再利用可能なワークフロー(Reusable Workflows)</h2>
          <p>
            複数のリポジトリやワークフロー間で共通処理を使い回したい場合、<strong>再利用可能なワークフロー(Reusable Workflow)</strong>を作成できます。
          </p>

          <h3>呼び出される側(Called workflow)を作る</h3>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">.github/workflows/reusable-build.yml</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">name</span>: <span className="str">Reusable build workflow</span></div>
              <div className="code-line"></div>
              <div className="code-line"><span className="kw">on</span>:</div>
              <div className="code-line">  <span className="prop">workflow_call</span>:</div>
              <div className="code-line">    <span className="prop">inputs</span>:</div>
              <div className="code-line">      <span className="prop">config-path</span>:</div>
              <div className="code-line">        <span className="prop">required</span>: <span className="val">true</span></div>
              <div className="code-line">        <span className="prop">type</span>: string</div>
              <div className="code-line">    <span className="prop">secrets</span>:</div>
              <div className="code-line">      <span className="prop">token</span>:</div>
              <div className="code-line">        <span className="prop">required</span>: <span className="val">true</span></div>
              <div className="code-line">    <span className="prop">outputs</span>:</div>
              <div className="code-line">      <span className="prop">build-result</span>:</div>
              <div className="code-line">        <span className="prop">description</span>: <span className="str">&quot;ビルド結果&quot;</span></div>
              <div className="code-line">        <span className="prop">value</span>: <span className="val">${'{'}{'{'} jobs.build.outputs.result {'}'}{'}'}</span></div>
              <div className="code-line"></div>
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">build</span>:</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">outputs</span>:</div>
              <div className="code-line">      <span className="prop">result</span>: <span className="val">${'{'}{'{'} steps.build-step.outputs.result {'}'}{'}'}</span></div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
              <div className="code-line">      - <span className="prop">id</span>: build-step</div>
              <div className="code-line">        <span className="kw">run</span>: |</div>
              <div className="code-line">          echo <span className="str">&quot;result=success&quot;</span> &gt;&gt; <span className="str">&quot;$GITHUB_OUTPUT&quot;</span></div>
            </div>
          </div>

          <h3>呼び出す側(Caller workflow)を作る</h3>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">.github/workflows/ci.yml</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">name</span>: <span className="str">CI</span></div>
              <div className="code-line"></div>
              <div className="code-line"><span className="kw">on</span>:</div>
              <div className="code-line">  <span className="prop">push</span>:</div>
              <div className="code-line">    <span className="prop">branches</span>: [main]</div>
              <div className="code-line"></div>
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">call-reusable</span>:</div>
              <div className="code-line">    <span className="kw">uses</span>: ./.github/workflows/reusable-build.yml</div>
              <div className="code-line">    <span className="kw">with</span>:</div>
              <div className="code-line">      <span className="prop">config-path</span>: .github/config.yml</div>
              <div className="code-line">    <span className="prop">secrets</span>:</div>
              <div className="code-line">      <span className="prop">token</span>: <span className="val">${'{'}{'{'} secrets.GITHUB_TOKEN {'}'}{'}'}</span></div>
              <div className="code-line"></div>
              <div className="code-line">  <span className="prop">use-output</span>:</div>
              <div className="code-line">    <span className="prop">needs</span>: call-reusable</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">run</span>: echo <span className="str">&quot;Build result was <span className="val">${'{'}{'{'} needs.call-reusable.outputs.build-result {'}'}{'}'}</span>&quot;</span></div>
            </div>
          </div>

          <h3>呼び出し関係の図</h3>
          <div className="diagram-card">
            <Mermaid chart={DIAGRAM_REUSABLE} />
            <div className="diagram-caption">
              図: 呼び出し元ワークフローと再利用ワークフローの関係
            </div>
          </div>

          <h3>重要なポイント</h3>
          <ul>
            <li>
              呼び出す際は <code className="inline">{'{owner}/{repo}/.github/workflows/{filename}@{ref}'}</code> または同一リポジトリ内なら <code className="inline">./.github/workflows/{'{filename}'}</code> の形式で参照する
            </li>
            <li>
              <code className="inline">secrets: inherit</code> を使うと、呼び出し元のすべてのシークレットを暗黙的に引き継げる(同一Organization/Enterprise内に限る)
            </li>
            <li>
              ネスト(多重呼び出し)は最大10階層(呼び出し元 + 再利用ワークフロー9段階)まで
            </li>
            <li>
              権限はチェーンをたどるごとに「維持または縮小」のみが可能で、昇格はできない
            </li>
          </ul>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reuse workflows
            </a>
          </p>
        </section>

        {/* ============ 14. Practical CI/CD ============ */}
        <section id="sec-practical">
          <span className="section-eyebrow">14 / Hands-on</span>
          <h2>実践編:Node.jsアプリのCI/CDパイプラインを作る</h2>
          <p>
            ここまで学んだ要素を組み合わせて、実践的なCI/CDパイプラインを構築してみましょう。
          </p>

          <h3>パイプライン全体像</h3>
          <div className="diagram-card">
            <Mermaid chart={DIAGRAM_PRACTICAL} />
            <div className="diagram-caption">図: Node.js CI/CDパイプラインの全体フロー</div>
          </div>

          <h3>実装例</h3>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">.github/workflows/ci-cd.yml</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">name</span>: <span className="str">Node.js CI/CD Pipeline</span></div>
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
              <div className="code-line">  <span className="prop">group</span>: <span className="val">${'{'}{'{'} github.workflow {'}'}{'}'}</span>-<span className="val">${'{'}{'{'} github.ref {'}'}{'}'}</span></div>
              <div className="code-line">  <span className="prop">cancel-in-progress</span>: <span className="val">true</span></div>
              <div className="code-line"></div>
              <div className="code-line"><span className="kw">jobs</span>:</div>
              <div className="code-line">  <span className="prop">lint</span>:</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/setup-node@v4</div>
              <div className="code-line">        <span className="kw">with</span>:</div>
              <div className="code-line">          <span className="prop">node-version</span>: <span className="num">20</span></div>
              <div className="code-line">          <span className="prop">cache</span>: <span className="str">&apos;npm&apos;</span></div>
              <div className="code-line">      - <span className="kw">run</span>: npm ci</div>
              <div className="code-line">      - <span className="kw">run</span>: npm run lint</div>
              <div className="code-line"></div>
              <div className="code-line">  <span className="prop">test</span>:</div>
              <div className="code-line">    <span className="prop">runs-on</span>: <span className="val">${'{'}{'{'} matrix.os {'}'}{'}'}</span></div>
              <div className="code-line">    <span className="prop">strategy</span>:</div>
              <div className="code-line">      <span className="prop">fail-fast</span>: <span className="val">false</span></div>
              <div className="code-line">      <span className="prop">matrix</span>:</div>
              <div className="code-line">        <span className="prop">os</span>: [ubuntu-latest]</div>
              <div className="code-line">        <span className="prop">node-version</span>: [<span className="num">18</span>, <span className="num">20</span>, <span className="num">22</span>]</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/setup-node@v4</div>
              <div className="code-line">        <span className="kw">with</span>:</div>
              <div className="code-line">          <span className="prop">node-version</span>: <span className="val">${'{'}{'{'} matrix.node-version {'}'}{'}'}</span></div>
              <div className="code-line">          <span className="prop">cache</span>: <span className="str">&apos;npm&apos;</span></div>
              <div className="code-line">      - <span className="kw">run</span>: npm ci</div>
              <div className="code-line">      - <span className="kw">run</span>: npm test</div>
              <div className="code-line"></div>
              <div className="code-line">  <span className="prop">build</span>:</div>
              <div className="code-line">    <span className="prop">needs</span>: [lint, test]</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/checkout@v6</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/setup-node@v4</div>
              <div className="code-line">        <span className="kw">with</span>:</div>
              <div className="code-line">          <span className="prop">node-version</span>: <span className="num">20</span></div>
              <div className="code-line">          <span className="prop">cache</span>: <span className="str">&apos;npm&apos;</span></div>
              <div className="code-line">      - <span className="kw">run</span>: npm ci</div>
              <div className="code-line">      - <span className="kw">run</span>: npm run build</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/upload-artifact@v4</div>
              <div className="code-line">        <span className="kw">with</span>:</div>
              <div className="code-line">          <span className="prop">name</span>: production-build</div>
              <div className="code-line">          <span className="prop">path</span>: dist/</div>
              <div className="code-line"></div>
              <div className="code-line">  <span className="prop">deploy</span>:</div>
              <div className="code-line">    <span className="kw">if</span>: github.ref == <span className="str">&apos;refs/heads/main&apos;</span> &amp;&amp; github.event_name == <span className="str">&apos;push&apos;</span></div>
              <div className="code-line">    <span className="prop">needs</span>: build</div>
              <div className="code-line">    <span className="prop">runs-on</span>: ubuntu-latest</div>
              <div className="code-line">    <span className="prop">environment</span>: production</div>
              <div className="code-line">    <span className="kw">permissions</span>:</div>
              <div className="code-line">      <span className="prop">contents</span>: read</div>
              <div className="code-line">      <span className="prop">id-token</span>: write</div>
              <div className="code-line">    <span className="prop">steps</span>:</div>
              <div className="code-line">      - <span className="kw">uses</span>: actions/download-artifact@v4</div>
              <div className="code-line">        <span className="kw">with</span>:</div>
              <div className="code-line">          <span className="prop">name</span>: production-build</div>
              <div className="code-line">          <span className="prop">path</span>: dist/</div>
              <div className="code-line">      - <span className="prop">name</span>: Deploy</div>
              <div className="code-line">        <span className="kw">run</span>: echo <span className="str">&quot;ここで実際のデプロイコマンドを実行します&quot;</span></div>
            </div>
          </div>

          <h3>このパイプラインのポイント解説</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>設定</th>
                  <th>目的</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code className="inline">concurrency</code> + <code className="inline">cancel-in-progress: true</code>
                  </td>
                  <td>同一ブランチへの連続pushで古い実行を自動キャンセルし、リソースを節約</td>
                </tr>
                <tr>
                  <td><code className="inline">test</code>ジョブの<code className="inline">strategy.matrix</code></td>
                  <td>複数のNode.jsバージョンで並列にテストし、互換性を担保</td>
                </tr>
                <tr>
                  <td><code className="inline">build</code>の<code className="inline">needs: [lint, test]</code></td>
                  <td>LintとTestの両方が成功した場合のみビルドを実行</td>
                </tr>
                <tr>
                  <td><code className="inline">deploy</code>の<code className="inline">if</code>条件</td>
                  <td>mainブランチへの直接pushイベントの場合のみ実行し、PRでは実行しない</td>
                </tr>
                <tr>
                  <td><code className="inline">environment: production</code></td>
                  <td>GitHub上の環境保護ルール(必須レビュアーなど)を適用可能に</td>
                </tr>
                <tr>
                  <td><code className="inline">permissions</code>の最小化</td>
                  <td>ジョブごとに必要最小限の権限のみ付与</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/get-started/continuous-integration"
              target="_blank"
              rel="noopener noreferrer"
            >
              Continuous integration
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js building and testing tutorial
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployment environments
            </a>
          </p>
        </section>

        {/* ============ 15. Security ============ */}
        <section id="sec-security">
          <span className="section-eyebrow">15 / Security</span>
          <h2>セキュリティのベストプラクティス</h2>

          <h3>サードパーティアクションのバージョン固定</h3>
          <p>
            アクションをタグ(<code className="inline">@v4</code>など)ではなく<strong>コミットSHA</strong>で固定することで、アクション提供元が悪意あるコードに差し替えるリスクを軽減できます。
          </p>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">バージョン固定の比較</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="cm"># より安全(コミットSHA固定)</span></div>
              <div className="code-line">- <span className="kw">uses</span>: actions/checkout@8e8a3f4f6c8b3e1e9b1e...</div>
              <div className="code-line"></div>
              <div className="code-line"><span className="cm"># 一般的だが、タグの再割り当てリスクがある</span></div>
              <div className="code-line">- <span className="kw">uses</span>: actions/checkout@v6</div>
            </div>
          </div>

          <h3>pull_request_targetの取り扱い注意</h3>
          <div className="danger-box">
            <strong>警告:</strong> <code className="inline">pull_request_target</code>イベントはデフォルトブランチのコンテキストで実行され、フォークからのPRであっても書き込み権限のある<code className="inline">GITHUB_TOKEN</code>が発行されます。この特性を悪用され、フォークのPRに含まれる未信頼コードを実行してしまうと、シークレットの窃取やキャッシュポイズニングにつながる恐れがあります。フォークのPRコードをチェックアウトして実行する必要がある場合は、このイベントの使用を避けるか、{' '}
            <a
              href="https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target"
              target="_blank"
              rel="noopener noreferrer"
            >
              Securely using pull_request_target
            </a>{' '}
            のガイドラインに従ってください。
          </div>

          <h3>最小権限のpermissions設定</h3>
          <p>
            前述の通り、ワークフロー・ジョブ単位で<code className="inline">permissions</code>を明示的に絞り込み、不要な<code className="inline">write</code>権限を持たせないようにします。
          </p>

          <h3>OpenID Connect (OIDC) の活用</h3>
          <p>
            クラウドプロバイダー(AWS、Azure、GCPなど)への認証情報として長期間有効なシークレットを保存する代わりに、OIDCを使って短命なトークンを都度発行させる方式が推奨されています。
          </p>
          <div className="code-block">
            <div className="code-block-header">
              <span className="filename">OIDCの利用例(AWS)</span>
              <span className="lang-tag">YAML</span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="kw">permissions</span>:</div>
              <div className="code-line">  <span className="prop">id-token</span>: write</div>
              <div className="code-line">  <span className="prop">contents</span>: read</div>
              <div className="code-line"></div>
              <div className="code-line"><span className="kw">steps</span>:</div>
              <div className="code-line">  - <span className="prop">name</span>: Configure AWS credentials</div>
              <div className="code-line">    <span className="kw">uses</span>: aws-actions/configure-aws-credentials@v4</div>
              <div className="code-line">    <span className="kw">with</span>:</div>
              <div className="code-line">      <span className="prop">role-to-assume</span>: arn:aws:iam::123456789012:role/my-github-actions-role</div>
              <div className="code-line">      <span className="prop">aws-region</span>: ap-northeast-1</div>
            </div>
          </div>

          <h3>シークレットのログ出力に注意</h3>
          <p>
            シークレットは自動的にマスクされますが、Base64エンコードなど変換した値やマルチライン文字列などは完全にはredactされない場合があります。デバッグ目的でも<code className="inline">echo</code>等でシークレットの値を出力しないようにしましょう。
          </p>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/concepts/security/openid-connect"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenID Connect
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/reference/security/secure-use"
              target="_blank"
              rel="noopener noreferrer"
            >
              Secure use reference
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target"
              target="_blank"
              rel="noopener noreferrer"
            >
              Securely using pull_request_target
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/concepts/security/secrets#automatically-redacted-secrets"
              target="_blank"
              rel="noopener noreferrer"
            >
              Secrets - Automatically redacted secrets
            </a>
          </p>
        </section>

        {/* ============ 16. Troubleshooting ============ */}
        <section id="sec-troubleshooting">
          <span className="section-eyebrow">16 / Troubleshooting</span>
          <h2>トラブルシューティング</h2>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>症状</th>
                  <th>主な原因</th>
                  <th>対処法</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ワークフローが全く実行されない</td>
                  <td>
                    ファイルが<code className="inline">.github/workflows</code>にない／YAML構文エラー／Actionsが無効化されている
                  </td>
                  <td>ファイルパスとYAMLの構文を確認、リポジトリ設定でActionsが有効か確認</td>
                </tr>
                <tr>
                  <td><code className="inline">pull_request</code>ワークフローが実行されない</td>
                  <td>PRにマージコンフリクトがある</td>
                  <td>
                    コンフリクトを解消する(<code className="inline">pull_request_target</code>は解消不要だがセキュリティリスクに注意)
                  </td>
                </tr>
                <tr>
                  <td>forkからのPRでチェックが「保留」のまま</td>
                  <td>初回コントリビューターの承認待ち</td>
                  <td>Write権限を持つメンバーが「Approve workflows to run」を実施</td>
                </tr>
                <tr>
                  <td>シークレットが空になる</td>
                  <td>
                    forkからのPRで<code className="inline">GITHUB_TOKEN</code>以外のシークレットが渡されない仕様
                  </td>
                  <td>
                    forkからのPRではシークレットに依存する処理を避けるか、<code className="inline">pull_request_target</code>を慎重に検討
                  </td>
                </tr>
                <tr>
                  <td><code className="inline">permissions</code>関連で403エラー</td>
                  <td>必要な権限が<code className="inline">GITHUB_TOKEN</code>に付与されていない</td>
                  <td><code className="inline">permissions</code>キーで該当スコープに<code className="inline">write</code>を明示的に付与</td>
                </tr>
                <tr>
                  <td>キャッシュがヒットしない</td>
                  <td>
                    <code className="inline">key</code>に使用したファイルのハッシュが変化した／OSやパスが異なる
                  </td>
                  <td><code className="inline">restore-keys</code>でフォールバックキーを設定、キー設計を見直す</td>
                </tr>
                <tr>
                  <td>スケジュール実行が動かない</td>
                  <td>パブリックリポジトリで60日間アクティビティがなく自動的に無効化された</td>
                  <td>ワークフローを手動で再度有効化する</td>
                </tr>
                <tr>
                  <td>ログに詳細情報が出ない</td>
                  <td>デバッグログが無効</td>
                  <td><code className="inline">ACTIONS_STEP_DEBUG</code>シークレットを<code className="inline">true</code>に設定してデバッグログを有効化</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/how-tos/troubleshoot-workflows"
              target="_blank"
              rel="noopener noreferrer"
            >
              Troubleshoot workflows
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enable debug logging
            </a>{' '}
            ／{' '}
            <a
              href="https://docs.github.com/en/actions/how-tos/manage-workflow-runs/approve-runs-from-forks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Approve runs from forks
            </a>
          </p>
        </section>

        {/* ============ 17. Summary ============ */}
        <section id="sec-summary">
          <span className="section-eyebrow">17 / Summary</span>
          <h2>まとめと次のステップ</h2>
          <p>
            本ガイドでは、GitHub Actionsの基本概念(ワークフロー・イベント・ジョブ・ステップ・アクション・ランナー)から始まり、YAML構文、トリガーイベント、ランナーの種類、依存関係と条件分岐、マトリックス戦略、シークレット管理、<code className="inline">GITHUB_TOKEN</code>と権限設計、キャッシュとアーティファクト、再利用可能なワークフロー、そして実践的なCI/CDパイプラインの構築とセキュリティのベストプラクティスまでを解説しました。
          </p>

          <h3>次のステップとしておすすめの学習内容</h3>
          <ul>
            <li>
              使用している言語・フレームワークに応じた{' '}
              <a
                href="https://docs.github.com/en/actions/tutorials/create-an-example-workflow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Building and testing tutorials
              </a>{' '}
              (Go, Java, .NET, Python, Rubyなど)
            </li>
            <li>
              <a
                href="https://docs.github.com/en/actions/tutorials/publish-packages"
                target="_blank"
                rel="noopener noreferrer"
              >
                Publishing packages
              </a>{' '}
              (npm、Docker、Maven等のパッケージ公開)
            </li>
            <li>
              <a
                href="https://docs.github.com/en/actions/how-tos/deploy/deploy-to-third-party-platforms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy to third-party platforms
              </a>{' '}
              (Azure、AWS、GCPなどへのデプロイ)
            </li>
            <li>
              独自のアクションを作る:{' '}
              <a
                href="https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create a JavaScript action
              </a>{' '}
              /{' '}
              <a
                href="https://docs.github.com/en/actions/tutorials/create-actions/create-a-composite-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create a composite action
              </a>
            </li>
            <li>
              <a
                href="https://docs.github.com/en/actions/reference/github-actions-importer/supplemental-arguments-and-settings"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Actions Importer
              </a>{' '}
              によるJenkins・CircleCI・GitLab CI/CD等からの移行
            </li>
          </ul>
          <p>
            GitHub Actionsの習熟度を証明したい場合は、GitHub Certificationsの認定資格取得も検討してみてください。
          </p>

          <p className="muted">
            参照:{' '}
            <a
              href="https://docs.github.com/en/actions/get-started/understand-github-actions#next-steps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Understanding GitHub Actions - Next steps
            </a>
          </p>
        </section>

        {/* ============ 18. References ============ */}
        <section id="sec-references">
          <span className="section-eyebrow">18 / References</span>
          <h2>参考文献・参照リンク一覧</h2>
          <p>
            本ガイドの作成にあたって参照した公式ドキュメントのURL一覧です。
          </p>

          <h3>GitHub Actions 公式ドキュメント(docs.github.com)</h3>
          <ul className="ref-list">
            <li>
              <span className="ref-title">GitHub Actions ドキュメントトップ</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Quickstart for GitHub Actions</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/get-started/quickstart" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/get-started/quickstart
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Understanding GitHub Actions</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/get-started/understand-github-actions" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/get-started/understand-github-actions
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Continuous integration</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/get-started/continuous-integration" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/get-started/continuous-integration
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Continuous deployment</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/get-started/continuous-deployment" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/get-started/continuous-deployment
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Workflow syntax for GitHub Actions</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Events that trigger workflows</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Secrets(Concepts)</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/concepts/security/secrets" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/concepts/security/secrets
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Use secrets in GitHub Actions(How-to)</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Use variables in GitHub Actions</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">GITHUB_TOKEN(Concepts)</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/concepts/security/github_token" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/concepts/security/github_token
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">OpenID Connect</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/concepts/security/openid-connect" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/concepts/security/openid-connect
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Secure use reference</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/reference/security/secure-use" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/reference/security/secure-use
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Securely using pull_request_target</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Dependency caching(Concepts)</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/concepts/workflows-and-actions/dependency-caching" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/concepts/workflows-and-actions/dependency-caching
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Workflow artifacts(Concepts)</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Store and share data with workflow artifacts(Tutorial)</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/tutorials/store-and-share-data" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/tutorials/store-and-share-data
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Reuse workflows(How-to)</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Deployment environments(Concepts)</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">GitHub-hosted runners(Concepts)</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/concepts/runners/github-hosted-runners" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/concepts/runners/github-hosted-runners
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Self-hosted runners(Concepts)</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/concepts/runners/self-hosted-runners" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/concepts/runners/self-hosted-runners
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Run jobs in a container</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/how-tos/write-workflows/choose-where-workflows-run/run-jobs-in-a-container" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/how-tos/write-workflows/choose-where-workflows-run/run-jobs-in-a-container
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Troubleshoot workflows</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/how-tos/troubleshoot-workflows" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/how-tos/troubleshoot-workflows
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Enable debug logging</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Approve runs from forks</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/how-tos/manage-workflow-runs/approve-runs-from-forks" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/how-tos/manage-workflow-runs/approve-runs-from-forks
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Node.js building and testing tutorial</span>
              <span className="ref-url">
                <a href="https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs" target="_blank" rel="noopener noreferrer">
                  https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">actions/starter-workflows(GitHubリポジトリ)</span>
              <span className="ref-url">
                <a href="https://github.com/actions/starter-workflows" target="_blank" rel="noopener noreferrer">
                  https://github.com/actions/starter-workflows
                </a>
              </span>
            </li>
          </ul>

          <h3>GitHub 製品ページ</h3>
          <ul className="ref-list">
            <li>
              <span className="ref-title">GitHub Actions 製品ページ(日本語)</span>
              <span className="ref-url">
                <a href="https://github.com/features/actions?locale=ja" target="_blank" rel="noopener noreferrer">
                  https://github.com/features/actions?locale=ja
                </a>
              </span>
            </li>
          </ul>

          <h3>外部リファレンス</h3>
          <ul className="ref-list">
            <li>
              <span className="ref-title">crontab guru(cron式の確認ツール)</span>
              <span className="ref-url">
                <a href="https://crontab.guru/" target="_blank" rel="noopener noreferrer">
                  https://crontab.guru/
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">POSIX cron構文仕様</span>
              <span className="ref-url">
                <a href="https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07" target="_blank" rel="noopener noreferrer">
                  https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07
                </a>
              </span>
            </li>
            <li>
              <span className="ref-title">Libsodium sealed boxes(シークレット暗号化の仕組み)</span>
              <span className="ref-url">
                <a href="https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes" target="_blank" rel="noopener noreferrer">
                  https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes
                </a>
              </span>
            </li>
          </ul>

          <footer className="page-footer">
            本ドキュメントは学習・社内共有目的で作成された非公式の解説資料です。最新の詳細情報は必ず上記の公式ドキュメントを直接ご確認ください。
          </footer>
        </section>
      </main>
    </div>
  );
}
