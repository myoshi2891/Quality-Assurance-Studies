import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './agile-testing-practical-guide.css';

export const metadata: Metadata = {
  title: '初学者のための実践ガイド | Agile Testing: A Practical Guide for Testers and Agile Teams',
  description:
    'Lisa Crispin と Janet Gregory の共著書をもとに、初めてアジャイルテストに触れる方向けにステップ・バイ・ステップで解説。アジャイルテスターの10原則、ホールチームアプローチ、4象限、テストピラミッド、探索的テストまで網羅。',
};

const DIAGRAM_FLOW_TRADITIONAL = `flowchart TD
A["要件定義"] --> B["設計"]
B --> C["実装"]
C --> D["テスト工程 QAチームが担当"]
D --> E["リリース"]
D -.->|バグ発見・手戻り| C
classDef hub fill:#c9a227,stroke:#8a6d1a,stroke-width:2px,color:#2b2416;
class D hub`;

const DIAGRAM_FLOW_AGILE = `flowchart TD
A["イテレーション計画"] --> B["要件をチーム全員で理解"]
B --> C["開発とテストを並行して実施"]
C --> D["継続的インテグレーションで自動テストを実行"]
D --> E["探索的テストで手動検証"]
E --> F["リリース可能な状態"]
F --> A
classDef done fill:#2f6f4e,stroke:#1f4d36,stroke-width:2px,color:#faf6ee;
class F done`;

const DIAGRAM_WHOLE_TEAM = `flowchart TB
PO["プロダクトオーナー"] --> Team["ひとつのクロスファンクショナルチーム"]
DEV["開発者"] --> Team
QA["テスター"] --> Team
OPS["運用担当"] --> Team
Team --> Q["共有された品質責任"]
classDef hub fill:#c9a227,stroke:#8a6d1a,stroke-width:2px,color:#2b2416;
classDef done fill:#2f6f4e,stroke:#1f4d36,stroke-width:2px,color:#faf6ee;
class Team hub
class Q done`;

const DIAGRAM_PYRAMID = `flowchart TB
N["ユニットテスト 数が多く高速で低コスト"] --> S["サービスAPIテスト 中間レイヤー"]
S --> U["UI E2Eテスト 数が少なく低速で高コスト"]
classDef hub fill:#c9a227,stroke:#8a6d1a,stroke-width:2px,color:#2b2416;
class N hub`;

const DIAGRAM_POWER_OF_THREE = `flowchart TB
PO["プロダクトオーナー ビジネス側"] --> M["共通理解と受け入れ基準"]
DEV["開発者"] --> M
QA["テスター"] --> M
M --> AC["実行可能な受け入れテスト ATDD BDD"]
classDef hub fill:#c9a227,stroke:#8a6d1a,stroke-width:2px,color:#2b2416;
class M hub`;

const DIAGRAM_ITERATION_CYCLE = `flowchart TB
A["リリース テーマ計画 全体像の把握"] --> B["助走 ストーリーの事前準備"]
B --> C["イテレーションキックオフ"]
C --> D["コーディングとテストを同時進行"]
D --> E["イテレーションの振り返りとまとめ"]
E --> F["確実なリリース"]
F --> A
classDef done fill:#2f6f4e,stroke:#1f4d36,stroke-width:2px,color:#faf6ee;
class F done`;

export default function AgileTestingPracticalGuidePage() {
  return (
    <div className="agile-testing-practical-page">
      <NavBar />

      <main className="main">
        {/* ---------- Hero ---------- */}
        <div className="hero">
          <span className="eyebrow">
            <i className="ti ti-book" aria-hidden="true" />
            名著解説 BOOK GUIDE
          </span>
          <h1>
            初学者のための実践ガイド
            <br />
            Agile Testing: A Practical Guide for Testers and Agile Teams
          </h1>
          <p className="lead">
            Lisa Crispin と Janet Gregory の共著書をもとに、初めてアジャイルテストに触れる方向けにステップ・バイ・ステップで解説します。
            あわせて Martin Fowler・Elisabeth Hendrickson・Gojko Adzic など著名な国際的開発者・テスト専門家の解説も参照し、
            2026年9月時点での「現在どう語られているか」も補足しています。アジャイルテストのバイブルとして読み継がれる一冊です。
          </p>
          <div className="chip-row">
            <span className="chip">
              <i className="ti ti-users" aria-hidden="true" />
              著者: Lisa Crispin, Janet Gregory
            </span>
            <span className="chip">
              <i className="ti ti-building" aria-hidden="true" />
              Addison-Wesley Professional
            </span>
            <span className="chip">
              <i className="ti ti-calendar" aria-hidden="true" />
              初版 2009年
            </span>
            <span className="chip">
              <i className="ti ti-external-link" aria-hidden="true" />
              <a
                className="ref-url"
                href="https://www.oreilly.com/library/view/agile-testing-a/9780321616944/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"O'Reilly掲載ページ"}
              </a>
            </span>
          </div>
        </div>

        {/* ---------- About ---------- */}
        <section id="about">
          <h2>
            <span className="icon-badge">
              <i className="ti ti-book" aria-hidden="true" />
            </span>
            この本について
          </h2>
          <div className="prose">
            <p>
              この本は、テスターとQAマネージャーが「アジャイルチームの中でテスターは何をすべきか」という長年の疑問に答えるために書かれた、
              アジャイルテスト分野における最初期の体系的な実践書のひとつです。単なる理論書ではなく、実際のアジャイルチームで働いていた著者らの経験と、
              寄稿された数多くの実例(ストーリー)で構成されているのが特徴です。
            </p>
            <p>
              著名なアジャイル開発者であり ThoughtWorks のチーフサイエンティストである Martin Fowler と同時代に活動してきた Gojko Adzic（『Specification by Example』著者）は自身のブログで、この本が「テスターにとって長らく不足していた実践的な指針を埋める、間違いなく優れた本」だと評しています。
            </p>

            <div className="table-wrap">
              <div className="table-title">書誌情報</div>
              <table className="kv-table">
                <tbody>
                  <tr>
                    <th>原題</th>
                    <td>
                      <em>Agile Testing: A Practical Guide for Testers and Agile Teams</em>
                    </td>
                  </tr>
                  <tr>
                    <th>著者</th>
                    <td>Lisa Crispin, Janet Gregory</td>
                  </tr>
                  <tr>
                    <th>出版社</th>
                    <td>Addison-Wesley Professional (Addison-Wesley Signature Series)</td>
                  </tr>
                  <tr>
                    <th>初版</th>
                    <td>2008年12月 (2009年1月 (初版) 刊行)</td>
                  </tr>
                  <tr>
                    <th>ページ数</th>
                    <td>576ページ</td>
                  </tr>
                  <tr>
                    <th>序文</th>
                    <td>Mike Cohn, Brian Marick</td>
                  </tr>
                  <tr>
                    <th>対象レベル</th>
                    <td>初級〜中級</td>
                  </tr>
                  <tr>
                    <th>{"O'Reilly掲載ページ"}</th>
                    <td>
                      <a
                        className="ref-url"
                        href="https://www.oreilly.com/library/view/agile-testing-a/9780321616944/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        oreilly.com/library/view/agile-testing-a/9780321616944
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              本のコンテンツは大きく6部・21章から構成されています。本ガイドの各ステップがどこに対応するかは次のとおりです。
            </p>

            <div className="table-wrap">
              <div className="table-title">本書の構成マップ</div>
              <table>
                <thead>
                  <tr>
                    <th>Part</th>
                    <th>主な内容</th>
                    <th>本ガイドの対応ステップ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Part I: はじめに (Part I. Introduction)</td>
                    <td>アジャイルテストの定義 / 10の原則</td>
                    <td>ステップ1・2</td>
                  </tr>
                  <tr>
                    <td>Part II: 組織的な課題への対処 (Part II. Organizational Challenges)</td>
                    <td>文化的課題 / チームの物理配置 / プロセス移行</td>
                    <td>ステップ3</td>
                  </tr>
                  <tr>
                    <td>Part III: アジャイルテストの4象限 (Part III. The Agile Testing Quadrants)</td>
                    <td>4象限による分類とツールキット</td>
                    <td>ステップ4</td>
                  </tr>
                  <tr>
                    <td>Part IV: 自動化 (Part IV. Automation)</td>
                    <td>自動化を阻む壁と戦略</td>
                    <td>ステップ5</td>
                  </tr>
                  <tr>
                    <td>Part V: テスターのイテレーションライフ (Part V. An Iteration in the Life of a Tester)</td>
                    <td>計画からリリースまでの1イテレーション</td>
                    <td>ステップ6・7</td>
                  </tr>
                  <tr>
                    <td>Part VI: 成功への鍵 (Part VI. Summary)</td>
                    <td>成功の鍵となる7要因</td>
                    <td>ステップ9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ---------- Step 1 ---------- */}
        <section id="step1">
          <h2>
            <span className="icon-badge">
              <i className="ti ti-git-branch" aria-hidden="true" />
            </span>
            ステップ1: アジャイルテストとは何か
          </h2>
          <p className="kicker">原著 第1〜2章「What Is Agile Testing, Anyway?」</p>
          <div className="prose">
            <p>
              まず押さえるべきは、アジャイルテストは<strong>「テストという工程」ではなく「チーム全体で品質をつくり込む考え方」</strong>だという点です。
              従来型(ウォーターフォール的)の開発では、テストは開発の後工程として独立したフェーズになりがちでした。
            </p>

            <div className="mmd-wrap" data-diagram-id="flow-traditional">
              <Mermaid chart={DIAGRAM_FLOW_TRADITIONAL} />
            </div>
            <p className="mmd-caption">図1: 従来型(テスト後工程型)の開発フロー</p>

            <p>
              このモデルの問題は、バグの発見が遅く、手戻りコストが大きいことです。これに対しアジャイルテストでは、テストは開発と並行して継続的に行われ、
              チーム全員(プログラマー・テスター・プロダクトオーナーなど)が品質に責任を持ちます。
            </p>

            <div className="mmd-wrap" data-diagram-id="flow-agile">
              <Mermaid chart={DIAGRAM_FLOW_AGILE} />
            </div>
            <p className="mmd-caption">図2: アジャイルにおける継続的テストフロー</p>

            <p>
              この違いこそが本書の出発点であり、著者らは「品質は最後にテストして作り込むものではなく、開発の最初から全員で作り込むものだ」という考え方を
              一貫して主張しています。
            </p>
          </div>
        </section>

        {/* ---------- Step 2 ---------- */}
        <section id="step2">
          <h2>
            <span className="icon-badge">
              <i className="ti ti-list-numbers" aria-hidden="true" />
            </span>
            ステップ2: アジャイルテスターの10の原則
          </h2>
          <p className="kicker">原著 第2章</p>
          <div className="prose">
            <p>
              著者らは、XP(エクストリーム・プログラミング)の価値観とアジャイル宣言の原則を踏まえ、アジャイルテスターに求められる姿勢を10の原則としてまとめています。
              開発者コミュニティでもよく引用される要約(Jeff Langr と Tim Ottinger による &quot;Agile in a Flash&quot; カード)を基に、初学者向けに整理すると次のようになります。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>原則</th>
                    <th>初学者向けポイント</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>継続的にフィードバックを提供する</td>
                    <td>受け入れ基準を明確にし、進捗を早く・頻繁に伝える</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>顧客に価値を届ける</td>
                    <td>受け入れテストで「スコープが膨らんでいないか」を常にチェックする</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>対面のコミュニケーションを可能にする</td>
                    <td>テスターは顧客と開発者の翻訳者になれる</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>勇気を持つ</td>
                    <td>短いイテレーションで動くソフトウェアを出し続ける覚悟を持つ</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>シンプルさを保つ</td>
                    <td>過剰な作り込みを避け、必要十分なテストにとどめる</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>継続的な改善を実践する</td>
                    <td>ふりかえり(レトロスペクティブ)に必ず参加する</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>変化に対応する</td>
                    <td>仕様変更にも耐えられるよう自動テストを整備する</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>自己組織化する</td>
                    <td>チームの誰もがテスト作業を担える状態を目指す</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>人にフォーカスする</td>
                    <td>テスターを下請けではなく対等な貢献者として扱う文化をつくる</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>楽しむ</td>
                    <td>プロセスを主体的に動かせることが、テスターの働きがいになる</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout source">
              <div className="callout-title">
                <i className="ti ti-quote" aria-hidden="true" />
                出典
              </div>
              <p>
                Crispin, L. &amp; Gregory, J. <em>Agile Testing</em>, Addison-Wesley, 2009(第2章)。要約は Jeff Langr / Tim Ottinger, &quot;Ten Principles for Agile Testers&quot;, Agile in a Flash, 2009 を参照 (Lisa Crispin 自身のブログでも「うまくまとめられている」と紹介されています)。
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Step 3 ---------- */}
        <section id="step3">
          <h2>
            <span className="icon-badge">
              <i className="ti ti-users-group" aria-hidden="true" />
            </span>
            ステップ3: 組織的な課題とホールチームアプローチ
          </h2>
          <p className="kicker">
            原著 第3〜5章: Cultural Challenges / Team Logistics / Transitioning Typical Processes
          </p>
          <div className="prose">
            <p>
              アジャイルへの移行で最も難しいのは、ツールや技術ではなく「組織文化」です。本書はこの部分に3章を割いており、代表的な課題は次のとおりです。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>課題領域</th>
                    <th>従来型の状態</th>
                    <th>アジャイルで目指す状態</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>組織構造</td>
                    <td>テスターは独立したQA部門に所属</td>
                    <td>テスターは機能横断チームの一員</td>
                  </tr>
                  <tr>
                    <td>物理配置 / コミュニケーション</td>
                    <td>部署ごとに離れた席・非同期連絡が中心</td>
                    <td>同じチームで密に対面(またはリモートでも高頻度)コミュニケーション</td>
                  </tr>
                  <tr>
                    <td>役割意識</td>
                    <td>テスターがバグを見つける責任者</td>
                    <td>品質はチーム全員の責任</td>
                  </tr>
                  <tr>
                    <td>プロセス</td>
                    <td>フェーズゲート型の承認プロセス</td>
                    <td>継続的な検証と早期フィードバック</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              この考え方の中心にあるのが<strong>ホールチームアプローチ(Whole-Team Approach)</strong>です。Lisa Crispin は自身のブログで、
              これは本書の「成功の鍵となる7要因」の第1番目に挙げるほど重要な原則だとし、「チーム全員が最高品質を届けることにコミットしない限り、長期的な成功はあり得ない」という趣旨を述べています。
            </p>

            <div className="mmd-wrap" data-diagram-id="whole-team">
              <Mermaid chart={DIAGRAM_WHOLE_TEAM} />
            </div>
            <p className="mmd-caption">図3: ホールチームアプローチの構造</p>
          </div>
        </section>

        {/* ---------- Step 4 ---------- */}
        <section id="step4">
          <h2>
            <span className="icon-badge">
              <i className="ti ti-layout-grid" aria-hidden="true" />
            </span>
            ステップ4: アジャイルテストの4象限(Agile Testing Quadrants)
          </h2>
          <p className="kicker">原著 第6〜12章: The Agile Testing Quadrants</p>
          <div className="prose">
            <p>
              本書で最も有名な概念が、この「4象限(Agile Testing Quadrants)」です。もともと Brian Marick が提唱した「アジャイルテストマトリクス」を、Crispin と Gregory がチームの実践に合わせて発展させたもので、Lisa Crispin は2024年のブログ記事で「20年以上使い続けている」と述べ、著書『Agile Testing Condensed』掲載の最新版図を公開しています(原案者である Brian Marick へのクレジットも重視されています)。
            </p>
            <p>
              この図は「(1)テストの目的がビジネス向けか技術向けか」「(2)テストがチームを支援する(開発を導く)ものかプロダクトを批評するものか」という2つの軸で、テストの種類を4つに分類する<strong>思考の道具(thinking tool)</strong>です。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>ビジネス視点で捉える(Business-Facing)</th>
                    <th>技術視点で捉える(Technology-Facing)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>チームを支援する</strong>
                      <br />
                      (開発を導くテスト)
                    </td>
                    <td className="q-cell q2">
                      <span className="q-tag">Q2</span>
                      <br />
                      機能テスト、ストーリーテスト、プロトタイプ、受け入れ基準の具体例(ATDD/BDD)
                    </td>
                    <td className="q-cell q1">
                      <span className="q-tag">Q1</span>
                      <br />
                      ユニットテスト、コンポーネントテスト。CIで完全自動化されるべき領域
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>プロダクトを批評する</strong>
                      <br />
                      (できたものを検証)
                    </td>
                    <td className="q-cell q3">
                      <span className="q-tag">Q3</span>
                      <br />
                      探索的テスト、シナリオテスト、ユーザビリティテスト、UAT/アルファ・ベータテスト。多くは手動
                    </td>
                    <td className="q-cell q4">
                      <span className="q-tag">Q4</span>
                      <br />
                      性能・負荷・セキュリティ・保守性・互換性などの非機能テスト
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>初学者がまず意識すべきポイントは次の3つです。</p>
            <ul>
              <li>
                <strong>4象限に「実施順序」はない</strong>(Lisa Crispin 自身がブログで繰り返し強調している点です)。プロジェクトやチームの状況に応じて重み付けを変えてよい思考ツールです。
              </li>
              <li>
                Q1・Q4は「技術的な観点」、Q2・Q3は「ビジネス / ユーザーの観点」という軸で捉えると理解しやすい。
              </li>
              <li>
                Q1・Q2は「開発を導く」= コードを書く前・書いている最中に使う。Q3・Q4は「できたものを批評する」= 完成に近づいてから使う。
              </li>
            </ul>
          </div>
        </section>

        {/* ---------- Step 5 ---------- */}
        <section id="step5">
          <h2>
            <span className="icon-badge">
              <i className="ti ti-pyramid" aria-hidden="true" />
            </span>
            ステップ5: テスト自動化戦略とテストピラミッド
          </h2>
          <p className="kicker">
            原著 第13〜14章: Why We Want to Automate Tests and What Holds Us Back / An Agile Test Automation Strategy
          </p>
          <div className="prose">
            <p>
              Q1(技術視点でチームを支援するテスト)を実現する上で欠かせないのが自動化戦略です。本書ではテスト自動化を阻む典型的な壁 (スキル不足、ツール選定の失敗、経営層の理解不足など)を挙げたうえで、どのレイヤーにどれだけテストを持つべきかという指針を示します。
            </p>
            <p>
              この考え方は、Mike Cohn が提唱し、ThoughtWorks のチーフサイエンティスト Martin Fowler が広く一般化した「<strong>テストピラミッド(Test Pyramid)</strong>」とも強く結びついています。Fowler は自身のサイトで、テストピラミッドを「異なる粒度の自動テストをどう使うべきかを考えるための比喩」と説明し、「GUIを通しで実行する高コストなテストより、低レベルなユニットテストをはるかに多く持つべきだ」という原則を提示しています。
            </p>

            <div className="mmd-wrap" data-diagram-id="pyramid">
              <Mermaid chart={DIAGRAM_PYRAMID} />
            </div>
            <p className="mmd-caption">図4: テスト自動化戦略における3つのレイヤー</p>

            <p>初学者向けの実践ステップは次のとおりです。</p>
            <ol className="step-list">
              <li>
                <strong>まずユニットテストの土台を作る</strong>:
                最も数を増やしやすく、実行も速いレイヤー。
              </li>
              <li>
                <strong>サービス / APIレベルの統合テストを追加する</strong>:
                ユニットテストではカバーできない、コンポーネント間の結合部分を検証。
              </li>
              <li>
                <strong>UI / E2Eテストは最小限に絞る</strong>:
                壊れやすく実行が遅いため、重要なユーザーシナリオに限定する。
              </li>
            </ol>

            <div className="callout note">
              <div className="callout-title">
                <i className="ti ti-bulb" aria-hidden="true" />
                補足
              </div>
              <p>
                Martin Fowler は2021年の記事で、チームによっては「ピラミッド」よりも「ハニカム(蜂の巣)」や「トロフィー」型 (ユニットテストより統合テストを厚めにする考え方)を好む場合があるとも紹介しており、テストピラミッドは唯一絶対の正解ではなく、システムの性質に応じて調整すべき指針であることも初学者は知っておくとよいでしょう。
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Step 6 ---------- */}
        <section id="step6">
          <h2>
            <span className="icon-badge">
              <i className="ti ti-puzzle" aria-hidden="true" />
            </span>
            ステップ6: Power of Three(Three Amigos)と受け入れテスト
          </h2>
          <p className="kicker">
            原著 第8〜9章: Business-Facing Tests that Support the Team / そのツールキット
          </p>
          <div className="prose">
            <p>
              Q2(ビジネス視点でチームを支援するテスト)を実現する代表的なプラクティスが、<strong>Power of Three(通称 Three Amigos)</strong>です。
              これは、プロダクトオーナー(ビジネス)、開発者、テスターの3者が要件定義の初期段階から一緒に会話し、具体例(Examples)を通じて認識を合わせる手法です。
            </p>

            <div className="mmd-wrap" data-diagram-id="power-of-three">
              <Mermaid chart={DIAGRAM_POWER_OF_THREE} />
            </div>
            <p className="mmd-caption">図5: Power of Three による共通理解の形成</p>

            <p>
              Janet Gregory と Lisa Crispin は、あるポッドキャスト(Tech Lead Journal, 2022年)の中で、この Power of Three の考え方が「ホリスティックテスティング」実践の中核にもなっていると説明しています。3者が事前に会話することで、コードが書かれる前に曖昧さを解消でき、手戻りを大幅に減らせるのがメリットです。
            </p>
          </div>
        </section>

        {/* ---------- Step 7 ---------- */}
        <section id="step7">
          <h2>
            <span className="icon-badge">
              <i className="ti ti-refresh" aria-hidden="true" />
            </span>
            ステップ7: テスターのイテレーションサイクル
          </h2>
          <p className="kicker">原著 第15〜20章: An Iteration in the Life of a Tester</p>
          <div className="prose">
            <p>
              本書の中核となるもう一つのパートが、実際の1イテレーション(スプリント)を通してテスターが何をするかを時系列で描いた部分です。
              初学者はこの流れをそのまま自分のチームに当てはめて考えると理解しやすくなります。
            </p>

            <div className="mmd-wrap" data-diagram-id="iteration-cycle">
              <Mermaid chart={DIAGRAM_ITERATION_CYCLE} />
            </div>
            <p className="mmd-caption">図6: テスターのイテレーションサイクル</p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ステップ</th>
                    <th>原著の章</th>
                    <th>テスターの主な活動</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>リリース / テーマ計画</td>
                    <td>第15章</td>
                    <td>大きな受け入れ基準の洗い出し、リスクの洗い出し</td>
                  </tr>
                  <tr>
                    <td>助走(Hit the Ground Running)</td>
                    <td>第16章</td>
                    <td>ストーリーの事前準備、テスト観点の整理</td>
                  </tr>
                  <tr>
                    <td>イテレーションキックオフ</td>
                    <td>第17章</td>
                    <td>Power of Threeでの会話、受け入れ基準の合意</td>
                  </tr>
                  <tr>
                    <td>コーディングとテスト</td>
                    <td>第18章</td>
                    <td>開発と並行したテスト設計・自動化・探索的テスト</td>
                  </tr>
                  <tr>
                    <td>イテレーションのまとめ</td>
                    <td>第19章</td>
                    <td>デモ、ふりかえり、未完了項目の扱い</td>
                  </tr>
                  <tr>
                    <td>確実なリリース</td>
                    <td>第20章</td>
                    <td>リリース判定、UAT、本番影響の確認</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              このサイクルが1回で終わらず、次のイテレーションへ継続的にループしていく点が、従来型の「テストフェーズ」との決定的な違いです。
            </p>
          </div>
        </section>

        {/* ---------- Step 8 ---------- */}
        <section id="step8">
          <h2>
            <span className="icon-badge">
              <i className="ti ti-search" aria-hidden="true" />
            </span>
            ステップ8: 探索的テストという技法
          </h2>
          <p className="kicker">
            Q3の中核技法として原著でも扱われ、著者らのその後の発信でも繰り返し重視されているテーマ
          </p>
          <div className="prose">
            <p>
              Q3(ビジネス視点でプロダクトを批評するテスト)の代表格が<strong>探索的テスト(Exploratory Testing)</strong>です。用語自体は Cem Kaner が1980年代に提唱し、James Bach らが定義を発展させたものですが、Crispin と Gregory はこれをアジャイルテストの必須スキルとして本書に組み込みました。
            </p>
            <p>
              探索的テストの第一人者である Elisabeth Hendrickson は、著書『Explore It!』の中で、探索的テストを「事前にすべてのテストケースを設計するのではなく、小さく素早い実験を設計・実行し、直前の学びを次の一手に活かす」プロセスだと説明しています。ポイントは次の3つです。
            </p>
            <ul>
              <li>
                <strong>同時並行で行う</strong>:
                ソフトウェアについて学びながら、テストを設計し、実行する。
              </li>
              <li>
                <strong>でたらめに触ることではない</strong>:
                目的を持った調査であり、通常は「チャーター(何を確認したいかの簡潔な宣言)」を用いて範囲を絞る。
              </li>
              <li>
                <strong>タイムボックスで管理する</strong>:
                セッションベースドテストマネジメントなどの手法で、探索の時間と成果を管理する。
              </li>
            </ul>

            <div className="callout source">
              <div className="callout-title">
                <i className="ti ti-quote" aria-hidden="true" />
                出典
              </div>
              <p>
                Hendrickson の同書には、Janet Gregory 自身が「チームメンバー全員の机に置いておくべき一冊」という推薦コメントを寄せています。
              </p>
            </div>
          </div>
        </section>

        {/* Placeholder sections for Category D */}
        <section id="step9" />
        <section id="step10" />
        <section id="checklist" />
        <section id="pitfalls" />
        <section id="references" />
      </main>
    </div>
  );
}
