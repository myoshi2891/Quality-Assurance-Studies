import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Checklist from './Checklist';
import Mermaid from '../../components/Mermaid';
import './ai-driven-software-testing-guide.css';

export const metadata: Metadata = {
  title: 'AI駆動ソフトウェアテスト入門ガイド ― AI-Driven Software Testing',
  description:
    'Srinivasa Rao Bittla『AI-Driven Software Testing』の目次構成をもとにした、初学者向けステップバイステップ解説ガイド',
};

const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontFamily": "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Yu Gothic UI', Meiryo, sans-serif",
    "fontSize": "16px",
    "primaryColor": "#ffffff",
    "primaryTextColor": "#26221c",
    "primaryBorderColor": "#3f3d8a",
    "lineColor": "#8a8477",
    "secondaryColor": "#f2ecdd",
    "tertiaryColor": "#faf6ec",
    "background": "#ffffff",
    "mainBkg": "#ffffff",
    "nodeBorder": "#3f3d8a",
    "clusterBkg": "#f2ecdd",
    "clusterBorder": "#e3dbc7",
    "edgeLabelBackground": "#ffffff"
  },
  "flowchart": { "htmlLabels": true, "curve": "basis" }
}}%%
`;

export const DIAGRAM_STRUCTURE = `${MERMAID_CONFIG}flowchart LR
    Title["書籍全体像"] --> P1["Part1 基礎編 全6章"]
    P1 --> P2["Part2 実践編 全6章"]
    P2 --> P3["Part3 発展編 全6章"]
    classDef hub fill:#c9c4ef,color:#221f52;
    class Title hub;`;

export const DIAGRAM_CAPABILITIES = `${MERMAID_CONFIG}flowchart TD
    Hub["AIとMLがもたらす5つの変化"] --> G1["インテリジェントなテスト生成"]
    Hub --> G2["セルフヒーリング自動化"]
    Hub --> G3["予測的な不具合検出"]
    Hub --> G4["大規模なビジュアルテスト"]
    Hub --> G5["継続的な学習と最適化"]
    classDef hub fill:#c9c4ef,color:#221f52;
    class Hub hub;`;

export const DIAGRAM_TIMELINE = `${MERMAID_CONFIG}flowchart LR
    Era1["1960から1970年代 手動テスト黎明期"] --> Era2["1980から1990年代 構造化テストの時代"]
    Era2 --> Era3["2000から2010年代 自動化革命"]
    Era3 --> Era4["2010年代 アジャイルとDevOpsによる加速"]
    Era4 --> Era5["2015年から現在 AI駆動テストの時代"]
    Era5 --> Era6["これから 自律的QEへ"]
    classDef hub fill:#c9c4ef,color:#221f52;
    classDef done fill:#bfe4d2,color:#123722;
    class Era5 hub;
    class Era6 done;`;

export const DIAGRAM_SDLC_STLC = `${MERMAID_CONFIG}flowchart TD
    Req["要件定義"] --> Design["設計"]
    Design --> Dev["実装"]
    Dev --> Test["テスト"]
    Test --> Deploy["リリース"]
    Deploy --> Maint["保守"]
    TReq["テスト要件分析"] --> TPlan["テスト計画"]
    TPlan --> TCase["テスト設計"]
    TCase --> TEnv["環境構築"]
    TEnv --> TExec["テスト実行"]
    TExec --> TClose["テストクローズ"]
    Req -.->|並走| TReq
    Test -.->|並走| TExec
    classDef done fill:#bfe4d2,color:#123722;
    class Deploy,TClose done;`;

export const DIAGRAM_PYRAMID = `${MERMAID_CONFIG}flowchart BT
    Unit["ユニットテスト層 スマートなテスト生成とセルフヒーリング"] --> Int["統合テスト層 動的なテスト生成とリスクベース優先度付け"]
    Int --> E2E["E2Eテスト層 リアルなユーザー行動シミュレーション"]
    E2E --> Intel["横断的インテリジェンス層 継続的な学習と最適化"]
    classDef hub fill:#c9c4ef,color:#221f52;
    class Intel hub;`;

export const DIAGRAM_LIFECYCLE = `${MERMAID_CONFIG}flowchart LR
    Plan["AIテスト計画 リスク予測と資源配分"] --> Design2["インテリジェントなテストケース開発"]
    Design2 --> Env["AI駆動テスト環境のセットアップ"]
    Env --> Exec["実行とリアルタイムモニタリング"]
    Exec --> Defect["スマートな不具合管理"]
    Defect --> Close["AIレポーティングとテストクローズ"]
    Close -.->|学習を還元| Plan
    classDef hub fill:#c9c4ef,color:#221f52;
    classDef done fill:#bfe4d2,color:#123722;
    class Plan hub;
    class Close done;`;

export const DIAGRAM_CASE_DEV_PILLARS = `${MERMAID_CONFIG}flowchart TD
    Hub2["インテリジェントなテストケース開発の5本柱"] --> P1["履歴データからのパターン抽出"]
    Hub2 --> P2["要件変化に追従する動的テストケース"]
    Hub2 --> P3["ユーザー行動に基づくカバレッジ最適化"]
    Hub2 --> P4["エッジケースの合成データ生成"]
    Hub2 --> P5["モジュール化された再利用シナリオ"]
    classDef hub fill:#c9c4ef,color:#221f52;
    class Hub2 hub;`;

export const DIAGRAM_SELF_HEALING = `${MERMAID_CONFIG}flowchart TD
    Change["環境の異常や変更を検知"] --> Diagnose["AIが原因を診断"]
    Diagnose --> Heal["設定やリソースを自動修復"]
    Heal --> Verify["修復結果を検証"]
    Verify --> Learn["パターンを学習しモデルを更新"]
    Learn --> Change
    classDef hub fill:#c9c4ef,color:#221f52;
    classDef done fill:#bfe4d2,color:#123722;
    class Diagnose hub;
    class Learn done;`;

export const DIAGRAM_DEFECT_LOOP = `${MERMAID_CONFIG}flowchart LR
    Detect["不具合の検知"] --> Context["コンテキストの自動収集"]
    Context --> RCA["根本原因分析"]
    RCA --> Priority["実データに基づく優先順位付け"]
    Priority --> Share["開発者とQEでの共有"]
    Share --> Learn2["本番シグナルからの学習"]
    Learn2 --> Detect
    classDef hub fill:#c9c4ef,color:#221f52;
    classDef done fill:#bfe4d2,color:#123722;
    class RCA hub;
    class Learn2 done;`;

export const DIAGRAM_GAP_APPROACHES = `${MERMAID_CONFIG}flowchart TD
    HubG["テストギャップを排除する4つのアプローチ"] --> A1["ブラインドスポットハンター 見えない盲点の発見"]
    HubG --> A2["ユーザー思考のスマートテスト生成"]
    HubG --> A3["リアルタイム異常検知"]
    HubG --> A4["マルチプラットフォーム一貫性検証"]
    classDef hub fill:#c9c4ef,color:#221f52;
    class HubG hub;`;

export const DIAGRAM_CICD = `${MERMAID_CONFIG}flowchart LR
    Commit["コミット"] --> Trigger["インテリジェントなテストトリガー"]
    Trigger --> Select["変更影響に基づくテスト選択"]
    Select --> Run["並列実行とリソース最適化"]
    Run --> Analyze["失敗要因の自動分析"]
    Analyze --> Gate["リリース可否判定"]
    Gate -.->|フィードバック| Trigger
    classDef hub fill:#c9c4ef,color:#221f52;
    classDef done fill:#bfe4d2,color:#123722;
    class Trigger hub;
    class Gate done;`;

export const DIAGRAM_PREDICTIVE = `${MERMAID_CONFIG}flowchart TD
    Data["履歴データ 本番シグナル コード変更"] --> Model["予測モデル"]
    Model --> Risk["リスクスコアリング"]
    Risk --> Alert["早期警告"]
    Alert --> Action["予防的アクション"]
    Action --> Data
    classDef hub fill:#c9c4ef,color:#221f52;
    class Model hub;
    class Action done;`;

export const DIAGRAM_ROADMAP_ADOPTION = `${MERMAID_CONFIG}flowchart LR
    Phase1["フェーズ1 基盤づくり 1から6ヶ月"] --> Phase2["フェーズ2 拡張 6から18ヶ月"]
    Phase2 --> Phase3["フェーズ3 最適化 18ヶ月以降"]
    Phase1 --> F1["最大の痛点から着手"]
    Phase1 --> F2["データ基盤の整備"]
    Phase2 --> F3["成功パターンの横展開"]
    Phase2 --> F4["チームスキルの育成"]
    Phase3 --> F5["継続的な学習ループ"]
    Phase3 --> F6["戦略的な意思決定への統合"]
    classDef hub fill:#c9c4ef,color:#221f52;
    classDef done fill:#bfe4d2,color:#123722;
    class Phase1 hub;
    class Phase3 done;`;

export const DIAGRAM_ROADMAP_LEARNING = `${MERMAID_CONFIG}flowchart TD
    Start["まず基礎用語を押さえる"] --> Read["Part1で全体像をつかむ"]
    Read --> Try["小さなパイロットでAIツールを試す"]
    Try --> Measure["効果とリスクを実測する"]
    Measure --> Expand["Part2の手法をチームへ広げる"]
    Expand --> Future["Part3で将来像と倫理を学ぶ"]
    Future --> Practice["継続的に実践し学び続ける"]
    classDef hub fill:#c9c4ef,color:#221f52;
    classDef done fill:#bfe4d2,color:#123722;
    class Start hub;
    class Practice done;`;

export default function AiDrivenSoftwareTestingGuidePage() {
  return (
    <div className="ai-driven-test-layout">
      <NavBar />

      <main className="main">
        <header className="hero">
          <div className="hero-kicker">初学者向け解説ガイド</div>
          <h1>AI駆動ソフトウェアテスト入門ガイド</h1>
          <p className="hero-lead">
            Srinivasa Rao Bittla著『AI-Driven Software Testing: Transforming Software
            Testing with Artificial Intelligence and Machine
            Learning』の目次構成をもとに、AIによるソフトウェアテスト変革のテーマを初学者向けに再構成し、国際的に著名な実践者・組織による2026年時点の一次情報を交えて解説します。
          </p>
          <div className="hero-meta">
            <span className="hero-tag">
              <i className="ti ti-book-2" aria-hidden="true"></i>全3部 全18章
            </span>
            <span className="hero-tag">
              <i className="ti ti-diagram-3" aria-hidden="true"></i>図解14点 Mermaid
            </span>
            <span className="hero-tag">
              <i className="ti ti-link" aria-hidden="true"></i>参考文献12件
            </span>
          </div>
        </header>

        <div className="content">
          {/* Section 1: intro */}
          <section className="section" id="intro">
            <div className="section-kicker">
              <i className="ti ti-compass" aria-hidden="true"></i>この記事の読み方
            </div>
            <div className="prose">
              <p className="lead">
                本ガイドは、Apress刊行・O&apos;Reilly収録の書籍『AI-Driven Software
                Testing』（著者: Srinivasa Rao
                Bittla、2025年10月刊、536ページ）の目次構成をもとに、AIによるソフトウェアテスト変革のテーマを初学者向けに再構成し、業界の著名な実践者・組織による2026年時点の一次情報を交えて解説したものです。書籍本文の逐語的な引用は行わず、各章のテーマを独自の説明・図解で再構成しています。
              </p>
              <ul>
                <li>
                  ソフトウェアテストの基礎（テストケース、CI/CD、回帰テストなど）を触ったことがある人を主な対象にしつつ、専門用語はその都度かみ砕いて説明します。
                </li>
                <li>
                  図解はすべてMermaidのフローチャートを使用しています（ASCIIアートは使用していません）。ページを開くとブラウザ上で描画されます。
                </li>
                <li>
                  各ステップは書籍の該当する章に対応させていますが、内容は独自にまとめ直したものです。書籍そのものを読む際の「地図」として使ってください。
                </li>
                <li>
                  末尾に、Mark WinteringhamやAngie
                  Jones、ThoughtWorks、DORA、ISTQB、James Bach / Michael
                  Boltonなど、国際的に著名な実践者・組織による一次情報・参考情報への参照リンクをまとめています。
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: glossary */}
          <section className="section" id="glossary">
            <div className="section-kicker">
              <i className="ti ti-abc" aria-hidden="true"></i>用語ミニ辞典
            </div>
            <h2>まず押さえておきたい7つの用語</h2>
            <div className="table-wrap">
              <div className="table-title">用語ミニ辞典</div>
              <table>
                <thead>
                  <tr>
                    <th>用語</th>
                    <th>意味</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>QE（品質エンジニアリング）</td>
                    <td>
                      バグを見つける「テスト」より広く、品質を作り込む活動全体を指す言葉
                    </td>
                  </tr>
                  <tr>
                    <td>SDLC</td>
                    <td>
                      Software Development Life
                      Cycle。要件定義からリリース・保守までのソフトウェア開発全体の流れ
                    </td>
                  </tr>
                  <tr>
                    <td>STLC</td>
                    <td>
                      Software Testing Life
                      Cycle。テスト要件分析からテストクローズまでのテスト活動の流れ
                    </td>
                  </tr>
                  <tr>
                    <td>自己修復（セルフヒーリング）テスト</td>
                    <td>
                      UIの変更などでテストが壊れたとき、AIがセレクタや手順を自動的に修正する仕組み
                    </td>
                  </tr>
                  <tr>
                    <td>予測分析</td>
                    <td>
                      過去のデータやパターンから、将来起こりうる不具合やリスクを事前に予測する手法
                    </td>
                  </tr>
                  <tr>
                    <td>CI/CD</td>
                    <td>
                      継続的インテグレーション・継続的デリバリー。コード変更を自動でビルド・テスト・リリースする仕組み
                    </td>
                  </tr>
                  <tr>
                    <td>LLM</td>
                    <td>
                      Large Language
                      Model。大規模言語モデル。ChatGPTなどの基盤となる自然言語処理モデル
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: book-info */}
          <section className="section" id="book-info">
            <div className="section-kicker">
              <i className="ti ti-book-2" aria-hidden="true"></i>書籍情報
            </div>
            <div className="book-card">
              <div className="book-cover">
                <div className="book-cover-top">APRESS / O&apos;REILLY</div>
                <div className="book-cover-title">AI-Driven Software Testing</div>
                <div className="book-cover-author">Srinivasa Rao Bittla</div>
              </div>
              <div className="book-card-body">
                <h3>AI-Driven Software Testing</h3>
                <p className="lead">
                  Transforming Software Testing with Artificial Intelligence and Machine Learning
                </p>
                <div className="table-wrap">
                  <table className="kv-table">
                    <tbody>
                      <tr>
                        <th>著者</th>
                        <td>Srinivasa Rao Bittla</td>
                      </tr>
                      <tr>
                        <th>出版社</th>
                        <td>Apress（O&apos;Reilly収録）</td>
                      </tr>
                      <tr>
                        <th>刊行</th>
                        <td>2025年10月</td>
                      </tr>
                      <tr>
                        <th>ページ数</th>
                        <td>536ページ</td>
                      </tr>
                      <tr>
                        <th>読者レベル</th>
                        <td>中級から上級（Intermediate to advanced）</td>
                      </tr>
                      <tr>
                        <th>想定読者</th>
                        <td>
                          品質エンジニア、データサイエンティスト、AI/MLをテスト・自動化に組み込みたい開発者
                        </td>
                      </tr>
                      <tr>
                        <th>構成</th>
                        <td>全3部・18章</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: structure */}
          <section className="section" id="structure">
            <div className="section-kicker">
              <i className="ti ti-map" aria-hidden="true"></i>全体構成をつかむ
            </div>
            <h2>3部構成の地図</h2>
            <div className="prose">
              <p>
                書籍は「基礎」「実践」「発展」の3部構成になっています。まず全体地図を頭に入れておくと、各章がどこに位置づけられるかが分かりやすくなります。詳しい全18章のタイトルは、後半の「全18章
                一覧」セクションにまとめています。
              </p>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">図1 書籍全体の3部構成</div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_STRUCTURE} />
              </div>
            </div>
          </section>

          {/* Section 5: step1 */}
          <section className="section" id="step1">
            <div className="section-kicker">
              <i className="ti ti-bulb" aria-hidden="true"></i>Part I 基礎編 ・ Step1（第1章対応）
            </div>
            <h2>AIとMLはソフトウェアテストの何を変えるのか</h2>
            <div className="prose">
              <p>
                書籍の第1章は「目覚まし時計」のような章として位置づけられています。ソフトウェアの複雑さとリリース速度は年々上がり続けている一方で、従来のQEプロセスはその速度に追いつけなくなっている、という問題提起から始まります。
              </p>
              <p>AI・MLがQEにもたらす代表的な変化は、次の5つに整理できます。</p>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">図2 AIとMLがもたらす5つの変化</div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_CAPABILITIES} />
              </div>
            </div>
            <div className="prose">
              <ul>
                <li>
                  <strong>インテリジェントなテスト生成</strong>：要件やユーザー行動ログから、人間が思いつかないようなテストケースをAIが提案する。
                </li>
                <li>
                  <strong>セルフヒーリング自動化</strong>：UIのセレクタ変更などでテストが壊れても、AIが自動的に修復する。
                </li>
                <li>
                  <strong>予測的な不具合検出</strong>：過去の障害データやコード変更の傾向から、不具合が起きやすい箇所を事前に予測する。
                </li>
                <li>
                  <strong>大規模なビジュアルテスト</strong>：画面の見た目の差分を、ピクセル単位ではなく「意味のある変化かどうか」で判定する。
                </li>
                <li>
                  <strong>継続的な学習と最適化</strong>：テストスイート自体が実行結果から学習し、優先順位や実行方法を継続的に改善する。
                </li>
              </ul>
            </div>
            <div className="callout info">
              <i className="ti ti-info-circle" aria-hidden="true"></i>
              <div className="callout-body">
                <span className="callout-title">変わらないもの</span>
                <p>
                  書籍が強調しているのは「変わらないもの」の存在です。テストの目的（リスクを可視化し、意思決定を支える）や、批判的思考力、ドメイン知識の重要性は、AIが導入されても変わりません。AIは代替ではなく増幅装置であるという視点は、後述するAngie
                  JonesやThoughtWorksの見解とも一致します。
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: step2 */}
          <section className="section" id="step2">
            <div className="section-kicker">
              <i className="ti ti-history" aria-hidden="true"></i>Part I 基礎編 ・ Step2（第2章対応）
            </div>
            <h2>手動からAI駆動へ ― テストの歴史をたどる</h2>
            <div className="prose">
              <p>
                テストの実務がどのように進化してきたかを俯瞰すると、AI駆動テストが「突然現れたもの」ではなく、数十年にわたる進化の延長線上にあることが分かります。
              </p>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">図3 テスト実務の進化タイムライン</div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_TIMELINE} />
              </div>
            </div>
            <div className="table-wrap">
              <div className="table-title">テストの時代区分と課題</div>
              <table>
                <thead>
                  <tr>
                    <th>時代</th>
                    <th>特徴</th>
                    <th>主な課題</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>手動テスト黎明期</td>
                    <td>品質は後工程で確認するものという認識</td>
                    <td>品質危機、体系的な手法の欠如</td>
                  </tr>
                  <tr>
                    <td>構造化テストの時代</td>
                    <td>ウォーターフォール、テストドキュメントの整備</td>
                    <td>硬直的なプロセス、フィードバックの遅さ</td>
                  </tr>
                  <tr>
                    <td>自動化革命</td>
                    <td>ツールによるスクリプト実行の自動化</td>
                    <td>
                      メンテナンスコストの増大、過信によるハネムーン期の終焉
                    </td>
                  </tr>
                  <tr>
                    <td>アジャイルとDevOpsの加速</td>
                    <td>シフトレフト、CI、継続的デリバリー</td>
                    <td>スピードと品質のトレードオフ、テストの負債化</td>
                  </tr>
                  <tr>
                    <td>AI駆動テストの時代</td>
                    <td>学習・予測・自己修復を組み込んだテスト</td>
                    <td>データ品質、説明可能性、組織文化の変化</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7: step3 */}
          <section className="section" id="step3">
            <div className="section-kicker">
              <i className="ti ti-adjustments" aria-hidden="true"></i>Part I 基礎編 ・ Step3（第3章対応）
            </div>
            <h2>AI時代の品質エンジニアリングとは何か</h2>
            <div className="prose">
              <p>
                第3章では、QEを「バグを見つける仕事」から「リスクを予測し、継続的に品質を作り込む仕事」へと再定義しています。AIがQEにもたらす変化は、次の観点で整理されています。
              </p>
              <ul>
                <li>
                  <strong>ルールベースから学習ベースへ</strong>：固定的なテストスクリプトから、データから学習し状況に適応するアプローチへ。
                </li>
                <li>
                  <strong>速度と精度のトレードオフの緩和</strong>：従来は速さと正確さが両立しにくかったが、AIによる優先順位付けでその緊張関係が緩和される。
                </li>
                <li>
                  <strong>スケールでの信頼性</strong>：大規模なテストスイートでも、人手を線形に増やさずに信頼性を維持できる。
                </li>
              </ul>
              <p>
                同時に、書籍は「データの質」「スキルギャップ」「組織文化の抵抗」といった、AI導入時に実際につまずきやすい課題も率直に扱っています。この点は、後述するDORAの調査結果とも重なります。
              </p>
            </div>
          </section>

          {/* Section 8: step4 */}
          <section className="section" id="step4">
            <div className="section-kicker">
              <i className="ti ti-arrows-left-right" aria-hidden="true"></i>Part I 基礎編 ・ Step4（第4章対応）
            </div>
            <h2>従来型テストとAI駆動テストを比較する</h2>
            <div className="prose">
              <p>両者の違いを整理すると、次のようになります。</p>
            </div>
            <div className="table-wrap">
              <div className="table-title">従来型テストとAI駆動テストの比較</div>
              <table>
                <thead>
                  <tr>
                    <th>観点</th>
                    <th>従来型テスト</th>
                    <th>AI駆動テスト</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>テストケース作成</td>
                    <td>人手による設計・記述</td>
                    <td>要件やログからAIが候補を生成し、人が精査</td>
                  </tr>
                  <tr>
                    <td>メンテナンス</td>
                    <td>UI変更のたびに手動修正</td>
                    <td>セルフヒーリングによる自動修正を併用</td>
                  </tr>
                  <tr>
                    <td>優先順位付け</td>
                    <td>経験と勘に基づく</td>
                    <td>リスクスコアや影響範囲分析に基づく</td>
                  </tr>
                  <tr>
                    <td>不具合検出のタイミング</td>
                    <td>テスト実行後に判明することが多い</td>
                    <td>予測モデルによる事前の兆候検知を併用</td>
                  </tr>
                  <tr>
                    <td>スケール対応</td>
                    <td>人員増強に依存しやすい</td>
                    <td>並列実行とリソース最適化で対応</td>
                  </tr>
                  <tr>
                    <td>限界</td>
                    <td>網羅性・速度の限界</td>
                    <td>データ品質・説明可能性・過信のリスク</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="prose">
              <p>
                ここで重要なのは、AI駆動テストが従来型テストを「置き換える」のではなく「補完する」ものとして描かれている点です。書籍はこれを「パートナーシップモデル」と呼び、最終的な判断は人間が担うという前提を繰り返し強調しています。
              </p>
            </div>
          </section>

          {/* Section 9: step5 */}
          <section className="section" id="step5">
            <div className="section-kicker">
              <i className="ti ti-git-branch" aria-hidden="true"></i>Part I 基礎編 ・ Step5（第5章対応）
            </div>
            <h2>SDLCとSTLCの基礎を理解する</h2>
            <div className="prose">
              <p>
                AI駆動テストを理解する前提として、SDLC（ソフトウェア開発ライフサイクル）とSTLC（テストライフサイクル）の関係を押さえておく必要があります。
              </p>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">図4 SDLCとSTLCの並走関係</div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_SDLC_STLC} />
              </div>
            </div>
            <div className="prose">
              <p>
                シフトレフト、探索的テスト、DevOps、CI/CDパイプラインといった現代的な実践は、いずれもSDLCとSTLCを「順番に実行する別々の工程」から「並走し継続的にフィードバックし合う工程」へと変える取り組みです。AIはこの並走関係を、より速く、より高い頻度で回すための手段として位置づけられています。
              </p>
            </div>
          </section>

          {/* Section 10: step6 */}
          <section className="section" id="step6">
            <div className="section-kicker">
              <i className="ti ti-pyramid" aria-hidden="true"></i>Part I 基礎編 ・ Step6（第6章対応）
            </div>
            <h2>テストピラミッドをAIで再構築する</h2>
            <div className="prose">
              <p>
                古典的なテストピラミッド（ユニットテストを土台に、統合テスト、E2Eテストを積み上げる考え方）は理論上は優れていますが、実践では「メンテナンスの悪夢」「スケールの壁」「カバレッジの幻想」といった痛点を抱えがちです。
              </p>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">
                図5 AIが強化するテストピラミッドの各層
              </div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_PYRAMID} />
              </div>
            </div>
            <div className="prose">
              <ul>
                <li>
                  <strong>ユニットテスト層</strong>：コンテキストを理解したテスト生成、変更に応じたセルフヒーリング。
                </li>
                <li>
                  <strong>統合テスト層</strong>：動的なテストケース作成、リスクに基づく優先順位付け、予測的なテスト選択。
                </li>
                <li>
                  <strong>E2Eテスト層</strong>：完璧なロボットではなく実際のユーザー行動を模したシナリオ生成、ビジネスインパクトに基づく重み付け。
                </li>
                <li>
                  <strong>横断的インテリジェンス層</strong>：実行結果を学習し、テストスイート全体を継続的に最適化する。
                </li>
              </ul>
            </div>
          </section>

          {/* Section 11: step7 */}
          <section className="section" id="step7">
            <div className="section-kicker">
              <i className="ti ti-clipboard-list" aria-hidden="true"></i>Part II 実践編 ・ Step7（第7章対応）
            </div>
            <h2>AIによるテスト計画と実行の革新</h2>
            <div className="prose">
              <p>
                Part IIでは、テスト計画から不具合管理、テストクローズまで、STLCの各フェーズにAI/MLをどう組み込むかが具体的に扱われます。全体像を先に示します。
              </p>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">
                図6 AI駆動テストライフサイクルの全体像
              </div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_LIFECYCLE} />
              </div>
            </div>
            <div className="prose">
              <p>テスト計画の分野でAIが貢献するのは、主に次の3点です。</p>
              <ol>
                <li>
                  <strong>要件分析の高度化</strong>：自然言語で書かれた要件から、リスクの高い領域を自動的に抽出する。
                </li>
                <li>
                  <strong>リスク予測</strong>：過去の障害履歴と変更内容を突き合わせ、どの機能がリスクを持ちやすいかをスコアリングする。
                </li>
                <li>
                  <strong>動的なリソース配分</strong>：テスト実行の進捗や結果に応じて、リソース配分やスケジュールをリアルタイムに調整する。
                </li>
              </ol>
              <p>
                書籍ではこれを「フラッシュセールのテスト計画」のような具体例で説明していますが、共通しているのは「固定された計画書」から「実行しながら更新され続ける生きた計画」への転換という考え方です。
              </p>
              <p>
                優先順位付けの領域でも、AIは「声の大きさ」ではなく「実際の顧客影響データ」を根拠にします。
              </p>
              <ul>
                <li>
                  <strong>顧客インパクト分析</strong>：機能ごとの利用頻度や収益貢献度を踏まえて、テストすべき順番を並べ替える。
                </li>
                <li>
                  <strong>動的な再調整</strong>：開発の進捗やテスト結果に応じて、優先順位をリアルタイムに更新する。
                </li>
                <li>
                  <strong>リソースマッチング</strong>：難易度の高いテストには経験豊富な担当者を、定型的なテストにはAI自動実行を割り当てる。
                </li>
              </ul>
              <p>
                さらに、テスト実行中の「ブラックボックス感」を解消するリアルタイムモニタリングと、UIやAPIの変更でテストが壊れても実行を止めない適応的な実行も、この章の重要なテーマです。テストが失敗したときに「なぜ失敗したか」を即座に診断し、環境要因によるノイズと本当の不具合を区別する仕組みは、次のStep9で扱う環境レベルのセルフヒーリングとも密接に関わっています。
              </p>
            </div>
          </section>

          {/* Section 12: step8 */}
          <section className="section" id="step8">
            <div className="section-kicker">
              <i className="ti ti-list-check" aria-hidden="true"></i>Part II 実践編 ・ Step8（第8章対応）
            </div>
            <h2>インテリジェントなテストケース開発</h2>
            <div className="prose">
              <p>
                手動でのテストケース作成には限界があります。AIが貢献できる領域を、5つの柱として整理します。
              </p>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">
                図7 インテリジェントなテストケース開発の5本柱
              </div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_CASE_DEV_PILLARS} />
              </div>
            </div>
            <div className="prose">
              <ul>
                <li>
                  <strong>履歴データからのパターン抽出</strong>：過去の不具合パターンから、優先的にテストすべきケースを推定する。同時に、実行結果からリアルタイムに学習し、価値の低いテストへの投資を減らして重要な領域に集中する。
                </li>
                <li>
                  <strong>動的なテストケース</strong>：要件変更をリアルタイムに追跡し、テストケース自体を追従させる。CI/CDパイプラインと連動し、関連システムへの影響を自動分析したうえで、必要なテストだけを連鎖的に更新する。
                </li>
                <li>
                  <strong>カバレッジの最適化</strong>：単なる網羅率ではなく、ユーザー行動やビジネスインパクトに基づいたギャップ分析を行う。重複したテストをインテリジェントに統合し、速度とカバレッジのバランスを取る。
                </li>
                <li>
                  <strong>エッジケースの予測</strong>：組み合わせ爆発が起きやすい領域や、時間依存の不具合、機能同士の相互作用が生む複雑な不具合など「人間が想定しづらいケース」を合成データで再現する。
                </li>
                <li>
                  <strong>再利用可能なシナリオ</strong>：モジュール化されたテスト部品を、コンテキストに応じて組み合わせ直す。部品の陳腐化を自動検知し、バージョン管理と組み合わせて継続的にメンテナンスする。
                </li>
              </ul>
            </div>
          </section>

          {/* Section 13: step9 */}
          <section className="section" id="step9">
            <div className="section-kicker">
              <i className="ti ti-server-2" aria-hidden="true"></i>Part II 実践編 ・ Step9（第9章対応）
            </div>
            <h2>AI/MLによるテスト環境のセットアップと管理</h2>
            <div className="prose">
              <p>
                環境構築は地味ながら時間を奪われがちな領域です。AIはここで、次のような形で貢献します。
              </p>
              <ul>
                <li>
                  <strong>テンプレート駆動の一貫性</strong>：環境ごとの設定差異を減らし、どの環境でも同じ条件でテストできるようにする。環境の来歴（いつ、何のために作られたか）も自動的に記録する。
                </li>
                <li>
                  <strong>リアルな模擬環境</strong>：実際のユーザー行動をモデル化したテストデータや、意図的に障害を注入するカオスエンジニアリング的な手法を組み合わせ、本番に近い条件でテストする。
                </li>
                <li>
                  <strong>需要予測に基づくスケーリング</strong>：過去の利用パターンから必要なリソース量を予測し、地域ごとのクラウドリソースを過不足なく確保する（詳しいスケーリングの考え方はStep13で扱います）。
                </li>
                <li>
                  <strong>障害発生時の自己修復</strong>：環境の異常を検知し、原因を診断したうえで設定やリソースを自動修復する。
                </li>
              </ul>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">
                図8 環境レベルのセルフヒーリングループ
              </div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_SELF_HEALING} />
              </div>
            </div>
            <div className="prose">
              <p>
                このサイクルは、テスト実行自体のセルフヒーリング（Step1で紹介した自動修復）と対になる「環境レベルのセルフヒーリング」と捉えると理解しやすくなります。あわせて、チームごとの需要をAIが調整し、コストを可視化しながらリソースを配分する「リソース配分のインテリジェンス化」も、この章の後半で扱われているテーマです。
              </p>
            </div>
          </section>

          {/* Section 14: step10 */}
          <section className="section" id="step10">
            <div className="section-kicker">
              <i className="ti ti-bug" aria-hidden="true"></i>Part II 実践編 ・ Step10（第10章対応）
            </div>
            <h2>スマートな不具合管理と解決</h2>
            <div className="prose">
              <p>
                「自分の環境では再現しない」という古典的な問題に対して、AIは不具合対応のライフサイクル全体を強化します。
              </p>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">
                図9 不具合対応のインテリジェンス強化ループ
              </div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_DEFECT_LOOP} />
              </div>
            </div>
            <div className="prose">
              <ul>
                <li>
                  <strong>コンテキストの自動収集</strong>：ログ、環境情報、直前の変更履歴をAIが自動的に紐付ける。担当者が一から状況を再現する手間を大幅に減らす。
                </li>
                <li>
                  <strong>根本原因分析</strong>：複数システムをまたぐ障害パターンを、過去の類似事例と照合して特定する。早期警告パターンを検出し、問題が広がる前に予防的な対応につなげる。
                </li>
                <li>
                  <strong>現実を反映した優先順位付け</strong>：政治的な声の大きさではなく、実際のユーザー影響や収益インパクト、技術的リスクを組み合わせて優先順位を決める。状況の変化に応じて優先順位も動的に見直される。
                </li>
                <li>
                  <strong>フィードバックループ</strong>：本番環境から得られる実際のユーザー行動データを、次のテスト戦略の改善に継続的に還元する。コンテキストが失われがちな「情報のブラックホール」問題を解消する。
                </li>
                <li>
                  <strong>開発者とQEの協働</strong>：共有されたインテリジェンスプラットフォームにより、双方が同じコンテキストを見ながら議論できる。対立的な関係から、共同で問題を解決する関係への文化的な転換を後押しする。
                </li>
              </ul>
            </div>
          </section>

          {/* Section 15: step11 */}
          <section className="section" id="step11">
            <div className="section-kicker">
              <i className="ti ti-report" aria-hidden="true"></i>Part II 実践編 ・ Step11（第11章対応）
            </div>
            <h2>AIレポーティングとフィードバックループによるテストクローズ</h2>
            <div className="prose">
              <p>
                テストクローズを「チェックボックスを埋める儀式」で終わらせず、実際に意思決定に使えるレポートに変えることが、この章のテーマです。
              </p>
              <ul>
                <li>リアルタイムの目標達成状況の追跡と、動的な優先順位の調整。</li>
                <li>
                  ステークホルダーごとに異なる粒度で情報を提示するダッシュボード。
                </li>
                <li>リリース可否を予測する「予測的リリース判定」。</li>
                <li>
                  過去のリリースからパターンを学習し、次のテスト戦略を自動的に改善するフィードバックループ。
                </li>
                <li>
                  タグ付けと横断検索によって、過去のテスト資産が「二度と参照されないアーカイブ」ではなく、次のプロジェクトで実際に再利用される知識になる。
                </li>
                <li>
                  蓄積されたデータをもとに、次のリリースのリスク予測やリソース配分そのものを継続的に磨き上げる戦略的な計画立案。
                </li>
              </ul>
            </div>
            <div className="table-wrap">
              <div className="table-title">
                従来のテストクローズとAI強化テストクローズの比較
              </div>
              <table>
                <thead>
                  <tr>
                    <th>観点</th>
                    <th>従来のテストクローズ</th>
                    <th>AI強化テストクローズ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>カバレッジ検証</td>
                    <td>チェックボックスを埋める儀式</td>
                    <td>実際のギャップを発見する継続的な検証</td>
                  </tr>
                  <tr>
                    <td>レポート</td>
                    <td>静的なドキュメント</td>
                    <td>
                      ステークホルダーごとに粒度の異なるリアルタイムダッシュボード
                    </td>
                  </tr>
                  <tr>
                    <td>学習</td>
                    <td>教訓がドキュメントに眠ったまま</td>
                    <td>リリースをまたいだパターン認識と戦略の自動更新</td>
                  </tr>
                  <tr>
                    <td>成果物の活用</td>
                    <td>アーカイブされて二度と参照されない</td>
                    <td>タグ付けと検索で次のプロジェクトに再利用される</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 16: step12 */}
          <section className="section" id="step12">
            <div className="section-kicker">
              <i className="ti ti-search" aria-hidden="true"></i>Part II 実践編 ・ Step12（第12章対応）
            </div>
            <h2>AI/MLでテストギャップを排除する</h2>
            <div className="prose">
              <p>
                「自分たちが知らないことを知らない」という盲点（ブラインドスポット）をどう発見するかが、この章の核心です。書籍では、この課題への取り組みを4つのアプローチに整理しています。
              </p>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">
                図10 テストギャップを排除する4つのアプローチ
              </div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_GAP_APPROACHES} />
              </div>
            </div>
            <div className="prose">
              <ul>
                <li>
                  <strong>ブラインドスポットハンター</strong>：ユーザー行動分析、過去の不具合との相関、システム間の依存関係の変化を組み合わせ、人間が見落としがちな領域を可視化する。アーキテクチャの変更や新機能の追加が生む新たな盲点の兆候も追跡する。
                </li>
                <li>
                  <strong>ユーザー思考のスマートテスト生成</strong>：単なる組み合わせ網羅ではなく、実際のユーザー行動データを掘り下げて「人がどう使うか」を反映したテストを生成する。本番環境からの継続的な学習によって、テスト自体が常に最新の使われ方に追従する。
                </li>
                <li>
                  <strong>リアルタイム異常検知</strong>：テスト実行中のシステムの健全性を継続的に監視し、複数のテスト結果を横断して相関を取ることで、単体では気づけない予兆を検出する。トレンドを外挿することで、将来起こりうる不具合を未然に防ぐ。
                </li>
                <li>
                  <strong>マルチプラットフォーム一貫性検証</strong>：複数プラットフォームにまたがるユーザージャーニーを分析し、機能面・パフォーマンス面・UI/UX面での一貫性を自動検証する。プラットフォーム固有のエッジケースや、データ連携の不整合も個別に洗い出す。
                </li>
              </ul>
            </div>
          </section>

          {/* Section 17: step13 */}
          <section className="section" id="step13">
            <div className="section-kicker">
              <i className="ti ti-cloud" aria-hidden="true"></i>Part III 発展編 ・ Step13（第13章対応）
            </div>
            <h2>AI/MLでソフトウェアテストをスケーリングする</h2>
            <div className="prose">
              <p>
                クラウド環境でのテストは、過剰プロビジョニングによるコスト増大という古典的な問題を抱えています。書籍はこの章を4つの柱で整理しています。
              </p>
            </div>
            <div className="table-wrap">
              <div className="table-title">AI駆動スケーリングの4つの柱</div>
              <table>
                <thead>
                  <tr>
                    <th>観点</th>
                    <th>課題</th>
                    <th>AIによる解決</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>クラウドキャパシティ計画</td>
                    <td>過剰プロビジョニングによるコスト増大</td>
                    <td>
                      需要予測に基づく動的なキャパシティ計画と、地域ごとのスマートなリソース配分
                    </td>
                  </tr>
                  <tr>
                    <td>実トラフィックへの適応</td>
                    <td>
                      人工的な負荷パターンが実際のユーザー行動とかけ離れている
                    </td>
                    <td>
                      行動パターン認識による現実的な負荷モデリングと、早期警告を伴う予測的なスケーリング
                    </td>
                  </tr>
                  <tr>
                    <td>負荷テストの質</td>
                    <td>見当違いの箇所に負荷をかけてしまう</td>
                    <td>
                      インテリジェントなストレスパターン生成と、性能劣化・キャパシティの事前予測
                    </td>
                  </tr>
                  <tr>
                    <td>コスト最適化</td>
                    <td>クラウド請求書の急激な増加</td>
                    <td>
                      予測的コストモデリング、ジャストインタイムのリソース調達、テストROIの可視化
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="prose">
              <p>
                書籍では、フラッシュセールに向けたスケーリングの実例を通じて、これら4つの柱がどう組み合わさって機能するかを説明しています。負荷をかけるタイミングやリソースの調達を先回りして計画することで、当日になって慌ててスケールアップするのではなく、あらかじめ予測されたシナリオに沿って落ち着いて対応できる状態を作ることが目標です。
              </p>
            </div>
          </section>

          {/* Section 18: step14 */}
          <section className="section" id="step14">
            <div className="section-kicker">
              <i className="ti ti-infinity" aria-hidden="true"></i>Part III 発展編 ・ Step14（第14章対応）
            </div>
            <h2>CI/CDパイプラインをAI/MLで強化する</h2>
            <div className="prose">
              <p>CI/CDパイプラインにおけるAIの役割は、次のように整理できます。</p>
              <ul>
                <li>
                  <strong>インテリジェントなテストトリガー</strong>：コミットの内容を分析し、本当に影響を受けるテストだけをリアルタイムに実行する。失敗のパターンから学習し、次に何を優先してテストすべきかを予測する。
                </li>
                <li>
                  <strong>回帰テストの賢い絞り込み</strong>：テストごとの価値を分析し、シグナルをほとんど生まない古いテストを整理する一方で、変更の多い領域には新しいテストを自動生成する。並列実行の割り当ても動的に最適化する。
                </li>
                <li>
                  <strong>見えないボトルネックの発見</strong>：パイプライン全体のパフォーマンスを継続的に監視し、パターン認識によって原因不明の遅延の正体を突き止める。傾向分析によって、将来のボトルネックを事前に予測する。
                </li>
              </ul>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">図11 AI強化CI/CDパイプライン</div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_CICD} />
              </div>
            </div>
            <div className="prose">
              <p>
                書籍が強調しているのは「説明可能な判断」「人間による上書き可能性」「継続的な検証」という3原則です。AIによる判断がブラックボックス化しないようにする設計思想は、後述するThoughtWorksの見解とも一致しています。
              </p>
            </div>
          </section>

          {/* Section 19: step15 */}
          <section className="section" id="step15">
            <div className="section-kicker">
              <i className="ti ti-activity" aria-hidden="true"></i>Part III 発展編 ・ Step15（第15章対応）
            </div>
            <h2>AI/MLによるリアルタイムテスト実行モニタリング</h2>
            <div className="prose">
              <p>何を監視すべきかを整理すると、次のようになります。</p>
            </div>
            <div className="table-wrap">
              <div className="table-title">監視すべき主要指標</div>
              <table>
                <thead>
                  <tr>
                    <th>指標</th>
                    <th>何を教えてくれるか</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>テスト実行時間</td>
                    <td>パイプライン全体の健全性を示す「炭鉱のカナリア」</td>
                  </tr>
                  <tr>
                    <td>テストカバレッジ</td>
                    <td>単なる数値ではなく、どこがカバーされていないかの質</td>
                  </tr>
                  <tr>
                    <td>不具合検出率</td>
                    <td>品質プロセスそのものの質を測る指標</td>
                  </tr>
                  <tr>
                    <td>成功・失敗比率</td>
                    <td>ビルドの脈拍のような即時シグナル</td>
                  </tr>
                  <tr>
                    <td>不具合の再オープン率</td>
                    <td>修正の正直さを測る指標</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="prose">
              <p>
                AIはこれらの指標をリアルタイムに関連付け、異常検知や「先の角を見通す」ような予測的インサイトを提供します。重要なのは、ダッシュボードを「見る人ごとに最適化する」という発想です。経営層には全体のリリース健全性を、現場のエンジニアには具体的な失敗の詳細を、というように、同じデータでも相手に応じて異なる粒度で見せることで、モニタリングの結果が実際の意思決定や優先順位付けに直結するようになります。
              </p>
            </div>
          </section>

          {/* Section 20: step16 */}
          <section className="section" id="step16">
            <div className="section-kicker">
              <i className="ti ti-alert-triangle" aria-hidden="true"></i>Part III 発展編 ・ Step16（第16章対応）
            </div>
            <h2>AI/MLアナリティクスで障害を予測する</h2>
            <div className="prose">
              <p>
                多くの障害は、実は「予兆のない突然の出来事」ではなく、事前にパターンとして現れていることが多いという前提から出発します。書籍は予測の種類を大きく3つに整理しています。
              </p>
              <ul>
                <li>
                  <strong>どこで壊れるかの予測</strong>：どのモジュールやコンポーネントが不具合を起こしやすいかを、コードの変更履歴や複雑度から推定する。
                </li>
                <li>
                  <strong>いつ壊れるかの予測</strong>：リソースの逼迫やアクセス増加のタイミングなど、時間的な要因から障害の発生時期を推定する。
                </li>
                <li>
                  <strong>なぜ壊れるかの予測</strong>：障害の根本的なメカニズムを推定し、再発を防ぐための構造的な対策につなげる。
                </li>
              </ul>
              <p>
                また「予防の経済学」という考え方も紹介されています。障害が起きてから対応するコストは、事前に予防するコストよりもはるかに高くつくことが多く、AIによる予測はその非対称性を利用して、限られたエンジニアリングリソースを最も効果的な場所に先回りして投入するための判断材料になります。
              </p>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">図12 予測分析による障害予防のサイクル</div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_PREDICTIVE} />
              </div>
            </div>
            <div className="prose">
              <p>
                書籍は同時に「予測精度への正直な向き合い方」も扱っており、誤検知（フォールスポジティブ）への備えや、人間の専門知識とAIの洞察を組み合わせることの重要性を強調しています。この慎重さは、後述するDORAの「検証税」の議論とも通じるものです。
              </p>
            </div>
          </section>

          {/* Section 21: step17 */}
          <section className="section" id="step17">
            <div className="section-kicker">
              <i className="ti ti-crystal-ball" aria-hidden="true"></i>Part III 発展編 ・ Step17（第17章対応）
            </div>
            <h2>AI駆動QEの未来とQEの倫理</h2>
            <div className="prose">
              <p>
                第17章では、現在すでに実用段階にあるもの（セルフヒーリングテスト、部分的な自律テスト生成、行動を変える予測的リスク評価）と、まだ実験段階にあるもの（真に探索的なAIテスト、完全自律型のE2E QE）を区別しています。
              </p>
              <p>同時に、次のような倫理的課題にも正面から向き合っています。</p>
              <ul>
                <li>
                  <strong>見えないバイアス</strong>：AIが学習データに含まれる偏りをそのまま反映してしまうリスク。
                </li>
                <li>
                  <strong>透明性の課題</strong>：なぜその判断に至ったのかを説明できるかどうか。
                </li>
                <li>
                  <strong>説明責任のギャップ</strong>：AIの判断ミスが引き起こした問題を、誰がどう説明責任を負うか。
                </li>
                <li>
                  <strong>プライバシーとデータ取り扱い</strong>：テストデータや本番データをAIに学習させる際のガバナンス。
                </li>
              </ul>
              <p>
                書籍はさらに、QEという職種そのものがどう変化していくかにも踏み込んでいます。定型的で反復的な手動のテスト実行作業は縮小していく一方で、批判的思考力、探索的テストの設計力、AIが生成した結果を検証し説明する力、そしてAIシステム自体の振る舞いを評価する力の重要性はむしろ高まっていく、という見立てです。プロンプトを使ってテストシナリオを設計する能力や、AIの判断に潜むリスクを評価する能力は、これからのQEにとって新しいキャリアパスにもなり得ます。
              </p>
            </div>
          </section>

          {/* Section 22: step18 */}
          <section className="section" id="step18">
            <div className="section-kicker">
              <i className="ti ti-rocket" aria-hidden="true"></i>Part III 発展編 ・ Step18（第18章対応）
            </div>
            <h2>AI駆動QE導入への次のステップ</h2>
            <div className="prose">
              <p>最終章は、実際に組織へ導入するための現実的なロードマップです。</p>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">図13 組織導入の3フェーズロードマップ</div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_ROADMAP_ADOPTION} />
              </div>
            </div>
            <div className="prose">
              <p>
                書籍は「準備ができているかどうかの正直な自己評価」から始めることを勧めています。現在のテストプロセス、データの状態、インフラの現実、チームのスキルという4つの観点でのチェックリストは、多くの組織にとってそのまま出発点として使えるでしょう。
              </p>
            </div>
            <div className="callout warn">
              <i className="ti ti-alert-triangle" aria-hidden="true"></i>
              <div className="callout-body">
                <span className="callout-title">
                  導入時につまずきやすい3種類の障害物
                </span>
                <p>
                  人（変化への抵抗や不安）、技術（既存システムとの統合の難しさ）、組織（承認プロセスや部門間の壁）という3種類の障害物への率直な言及も、この章の実践的な価値です。ツール選定については「マーケティングの誇大広告を見抜く」ことの大切さが強調されており、華やかな機能デモよりも、自分たちの最大の痛点を解決できるかどうかで判断すべきだとされています。これは、後述する「批判的に読む」セクションの視点とも重なる、本書自身による自己戒めとも言える箇所です。
                </p>
              </div>
            </div>
          </section>

          {/* Section 23: chapter-list */}
          <section className="section" id="chapter-list">
            <div className="section-kicker">
              <i className="ti ti-list-numbers" aria-hidden="true"></i>まとめと参考情報
            </div>
            <h2>全18章 一覧</h2>
            <div className="table-wrap">
              <div className="table-title">全18章 一覧</div>
              <table>
                <thead>
                  <tr>
                    <th>Part</th>
                    <th>章</th>
                    <th>タイトル</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>I</td>
                    <td>1</td>
                    <td>AIとMLが現代のソフトウェアテストで果たす役割</td>
                  </tr>
                  <tr>
                    <td>I</td>
                    <td>2</td>
                    <td>手動からAI駆動自動化へのソフトウェアテストの変遷</td>
                  </tr>
                  <tr>
                    <td>I</td>
                    <td>3</td>
                    <td>AI時代の品質エンジニアリング</td>
                  </tr>
                  <tr>
                    <td>I</td>
                    <td>4</td>
                    <td>従来型テストとAI駆動テストの比較</td>
                  </tr>
                  <tr>
                    <td>I</td>
                    <td>5</td>
                    <td>SDLCとSTLC 基本の理解</td>
                  </tr>
                  <tr>
                    <td>I</td>
                    <td>6</td>
                    <td>従来型とAI駆動テストにおけるテストピラミッド</td>
                  </tr>
                  <tr>
                    <td>II</td>
                    <td>7</td>
                    <td>AI・MLによるテスト計画と実行の革新</td>
                  </tr>
                  <tr>
                    <td>II</td>
                    <td>8</td>
                    <td>AI・MLによるインテリジェントなテストケース開発</td>
                  </tr>
                  <tr>
                    <td>II</td>
                    <td>9</td>
                    <td>AI・MLによるテストセットアップと管理</td>
                  </tr>
                  <tr>
                    <td>II</td>
                    <td>10</td>
                    <td>AI・MLによるスマートな不具合管理と解決</td>
                  </tr>
                  <tr>
                    <td>II</td>
                    <td>11</td>
                    <td>
                      AI・MLレポーティングとフィードバックループによるテストクローズ
                    </td>
                  </tr>
                  <tr>
                    <td>II</td>
                    <td>12</td>
                    <td>AI・MLの精度でテストギャップを排除する</td>
                  </tr>
                  <tr>
                    <td>III</td>
                    <td>13</td>
                    <td>AI・MLによるソフトウェアテストのスケーリング</td>
                  </tr>
                  <tr>
                    <td>III</td>
                    <td>14</td>
                    <td>AI・MLによるCI/CDパイプラインの強化</td>
                  </tr>
                  <tr>
                    <td>III</td>
                    <td>15</td>
                    <td>AI・MLによるリアルタイムテスト実行モニタリング</td>
                  </tr>
                  <tr>
                    <td>III</td>
                    <td>16</td>
                    <td>AI・MLアナリティクスによる障害予測</td>
                  </tr>
                  <tr>
                    <td>III</td>
                    <td>17</td>
                    <td>AI駆動テストによるQEの未来</td>
                  </tr>
                  <tr>
                    <td>III</td>
                    <td>18</td>
                    <td>AI駆動QE実装への次のステップ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 24: voices */}
          <section className="section" id="voices">
            <div className="section-kicker">
              <i className="ti ti-microphone-2" aria-hidden="true"></i>業界の声から読み解く
            </div>
            <h2>期待と実像</h2>
            <div className="prose">
              <p>
                書籍のテーマである「AIによるテストの変革」は、業界全体で議論が進んでいるホットな領域です。ここでは、国際的に著名な実践者・組織の2026年時点での見解を紹介します。
              </p>
            </div>

            <h3>Mark Winteringham ― 「ハイプ抜き」の実践論</h3>
            <div className="prose">
              <p>
                Ministry of TestingのDojoBossであり、『Software Testing with
                Generative AI』（Manning刊）の著者でもあるMark
                Winteringhamは、AIツールを使ったテストデータ生成、探索的テストの発想支援、プロンプトエンジニアリングなど、実務に即した活用法を体系化しています。彼の議論で一貫しているのは「AIはテスターを置き換えるのではなく、思考の及ぶ範囲を広げる」という姿勢です。テストエンジニアがAIの台頭に不安を感じやすい中で、AIはあくまで人間の判断力・目的意識を中心に据えた「増幅装置」であるべきだという考え方は、本書の「パートナーシップモデル」とも響き合います。
              </p>
            </div>

            <h3>Angie Jones ― エージェント型AIとテストピラミッドの再解釈</h3>
            <div className="prose">
              <p>
                Block社でグローバルVP of Developer Relationsを務め、Test Automation
                Universityの創設者でもあるAngie Jonesは、Sauce
                Labsのポッドキャストでエージェント型AIについて語っています。彼女は、決定論的なユニットテスト、記録された対話、繰り返しベンチマーク、ルーブリックに基づく評価を組み合わせることで、AIエージェントのような非決定論的な振る舞いを測定可能にする「エージェント評価のためのテストピラミッド」を提唱しています。これは、本書の第6章が扱う「テストピラミッドの再構築」というテーマの、AIエージェント時代における発展形と位置づけられます。
              </p>
            </div>

            <h3>ThoughtWorks Technology Radar ― 実験から実務への移行</h3>
            <div className="prose">
              <p>
                ThoughtWorksのTechnology
                Radar（2026年4月発行のVol.34を含む）は、AI支援によるテストファースト開発や、Playwright・SeleniumのMCPサーバーを活用したAI駆動UIテストといった技術を継続的に評価しています。同時に、Vol.34では「AIが加速させる複雑さに対抗するため、エンジニアリングの基礎に立ち返る必要がある」という強いメッセージも打ち出されており、ミューテーションテストのような地に足のついた品質保証手法への回帰が指摘されています。AIによる速度の獲得と、品質保証の基礎の再確認は、両輪であるべきだという視点です。
              </p>
            </div>

            <h3>DORA ― 「検証税」という現実的なブレーキ</h3>
            <div className="prose">
              <p>
                Google CloudのDORA（DevOps Research and
                Assessment）チームは、2026年の記事で紹介された2025年のDORAレポートの調査結果として「検証税（verification
                tax）」という概念を提示しました。これは、AIによってコード生成やテスト生成が速くなった分、その成果物が本当に信頼できるかを確認する作業に時間が再投資されるという現象です。AI導入直後に生産性が一時的に落ち込む「Jカーブ」の存在も指摘されており、学習曲線・検証負荷・下流工程（テストや変更承認プロセス）の適応という3つの要因がその落ち込みを説明するとされています。本書がAI駆動テストの「約束」を語る一方で、DORAのデータは、その約束が無条件に実現するわけではないことを示す重要なカウンターバランスです。
              </p>
            </div>
          </section>

          {/* Section 25: critical */}
          <section className="section" id="critical">
            <div className="section-kicker">
              <i className="ti ti-shield-check" aria-hidden="true"></i>批判的に読む
            </div>
            <h2>AIテスト言説を鵜呑みにしないために</h2>
            <div className="prose">
              <p>
                AI駆動テストに関する書籍や記事の多くは、成功事例を印象的なストーリーとして語ります。本書もその例外ではありません。初学者として読み進める際は、次の3つの視点を持っておくことをおすすめします。
              </p>
            </div>

            <div className="callout critical">
              <i className="ti ti-list-check" aria-hidden="true"></i>
              <div className="callout-body">
                <span className="callout-title">
                  1. James Bach / Michael Boltonのチェックリストを借りる
                </span>
                <p>
                  Rapid Software Testingの創始者であるJames BachとMichael
                  Boltonは、GenAIを使った作業を批判的に評価するためのチェックリストを提唱しています。「そのツールをどう選んだのか」「AIを直接使ったのか、それとも特定の構造を強制するツール経由だったのか」「AIにどんな文脈をどれだけ与えたのか」「対話的な支援として使ったのか、自律的なエージェントとして使ったのか」といった問いは、AI駆動テストの成功事例を読むときにそのまま使える検証の視点です。派手な成功事例を見たときほど、この種の問いを自分自身に投げかける価値があります。
                </p>
              </div>
            </div>

            <div className="callout critical">
              <i className="ti ti-certificate" aria-hidden="true"></i>
              <div className="callout-body">
                <span className="callout-title">
                  2.「テストにAIを使う」と「AIをテストする」は別のスキルである
                </span>
                <p>
                  国際的なテスト資格認定団体ISTQBは、2026年4月にCertified Tester
                  AI
                  Testing（CT-AI）シラバスのバージョン2.0をリリースしました。このバージョンでは、旧バージョンに含まれていた「テストにAIを活用する」という内容が切り離され、「AIベースのシステムそのものをどうテストするか」（データ品質、モデルの振る舞い、公平性、説明可能性など）に特化した内容へと再編されています。「テストにAIを使う」テーマは、新設のCT-GenAI資格が担うことになりました。本書のタイトルにある「AI-Driven
                  Software
                  Testing」は基本的に前者（AIを使ってテストを行う）を扱っていますが、AI・ML機能そのものを含む製品を開発・テストする立場の人は、後者（AIシステムのテスト）についても別途学ぶ必要があることを意識しておくとよいでしょう。
                </p>
              </div>
            </div>

            <div className="callout critical">
              <i className="ti ti-flask" aria-hidden="true"></i>
              <div className="callout-body">
                <span className="callout-title">
                  3. 成功事例は「参考になる仮説」であって「統計的な証拠」ではない
                </span>
                <p>
                  本書の各章には、印象的な「現場のストーリー」形式の事例が多数含まれています。こうした事例は具体的なイメージをつかむのに有用ですが、多くの実践者向け書籍と同様、特定の企業に対する検証可能な公開データというより、教育的に構成された例示として読むのが妥当です。組織としての投資判断を行う際は、DORAのような大規模調査データや、自社のパイロットプロジェクトで得られた実測値と突き合わせることをおすすめします。
                </p>
              </div>
            </div>
          </section>

          {/* Section 26: checklist */}
          <section className="section" id="checklist">
            <div className="section-kicker">
              <i className="ti ti-checklist" aria-hidden="true"></i>実践チェックリスト
            </div>
            <h2>理解度をセルフチェックする</h2>
            <div className="prose">
              <p>
                ここまでの内容を実務に活かせるか、10項目でセルフチェックしてみましょう。チェックはブラウザ内だけで保持され、ページを離れるとリセットされます。
              </p>
            </div>
            <Checklist />
          </section>

          {/* Section 27: roadmap */}
          <section className="section" id="roadmap">
            <div className="section-kicker">
              <i className="ti ti-route" aria-hidden="true"></i>学習ロードマップ
            </div>
            <h2>初学者におすすめの進め方</h2>
            <div className="diagram-block">
              <div className="diagram-caption">図14 学習ロードマップ</div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_ROADMAP_LEARNING} />
              </div>
            </div>
            <div className="prose">
              <ol>
                <li>まず本ガイドの「用語ミニ辞典」とPart Iで全体像をつかむ。</li>
                <li>
                  自分のチームで最も痛みを感じている領域（テストのメンテナンス負荷、実行時間、不具合の見逃しなど）を1つ選ぶ。
                </li>
                <li>
                  その領域に対応するPart
                  IIの章を読み、小さなパイロットプロジェクトとして試す。
                </li>
                <li>
                  DORAの「検証税」の考え方を念頭に、導入前後で実際にかかる時間・工数を計測する。
                </li>
                <li>
                  Part
                  IIIを読み、スケーリングと倫理の観点から、パイロットの結果を組織全体に展開すべきかを判断する。
                </li>
              </ol>
            </div>
          </section>

          {/* Section 28: summary */}
          <section className="section" id="summary">
            <div className="section-kicker">
              <i className="ti ti-flag-3" aria-hidden="true"></i>まとめ
            </div>
            <h2>本ガイドの要点</h2>
            <div className="prose">
              <ul>
                <li>
                  『AI-Driven Software
                  Testing』は、AI・MLがソフトウェアテストのライフサイクル全体（計画・設計・実行・不具合管理・クロージャー・スケーリング・CI/CD・将来展望）にどう関わるかを、実務目線で網羅的に整理した書籍です。
                </li>
                <li>
                  本書が一貫して強調しているのは「AIは人間の代替ではなく増幅装置である」という考え方で、これはMark
                  WinteringhamやAngie
                  Jonesといった国際的な実践者の見解とも一致しています。
                </li>
                <li>
                  一方で、DORAの「検証税」やThoughtWorksの「エンジニアリングの基礎への回帰」というメッセージが示すように、AI導入には見えにくいコストとリスクが伴います。
                </li>
                <li>
                  ISTQBのCT-AIとCT-GenAIの分離が示すように、「テストにAIを使う」ことと「AIシステムをテストする」ことは別のスキルセットです。自分がどちらの課題に取り組んでいるのかを常に意識することが、初学者にとって最初の一歩になります。
                </li>
                <li>
                  James Bach / Michael
                  Boltonのチェックリストのように、華やかな成功事例に対しても批判的な問いを持ち続ける姿勢が、AI駆動テストを実務に活かすうえでの鍵になります。
                </li>
              </ul>
            </div>
          </section>

          {/* Section 29: references */}
          <section className="section" id="references">
            <div className="section-kicker">
              <i className="ti ti-link" aria-hidden="true"></i>参考文献
            </div>
            <h2>出典一覧</h2>
            <ul className="ref-list">
              <li className="ref-card">
                <div className="ref-num">1</div>
                <div className="ref-body">
                  <div className="ref-title">
                    O&apos;Reilly（Apress） 書籍ページ『AI-Driven Software Testing』
                  </div>
                  <a
                    className="ref-url"
                    href="https://www.oreilly.com/library/view/ai-driven-software-testing/9798868818295/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.oreilly.com/library/view/ai-driven-software-testing/9798868818295/
                  </a>
                </div>
              </li>
              <li className="ref-card">
                <div className="ref-num">2</div>
                <div className="ref-body">
                  <div className="ref-title">
                    Apress 公式購入ページ（出版社サイト）
                  </div>
                  <a
                    className="ref-url"
                    href="https://www.apress.com/9798868818295"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.apress.com/9798868818295
                  </a>
                </div>
              </li>
              <li className="ref-card">
                <div className="ref-num">3</div>
                <div className="ref-body">
                  <div className="ref-title">
                    Mark Winteringham『Software Testing with Generative AI』紹介ページ（Manning）
                  </div>
                  <a
                    className="ref-url"
                    href="https://www.manning.com/books/software-testing-with-generative-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.manning.com/books/software-testing-with-generative-ai
                  </a>
                </div>
              </li>
              <li className="ref-card">
                <div className="ref-num">4</div>
                <div className="ref-body">
                  <div className="ref-title">
                    Mark Winteringham Medium プロフィール
                  </div>
                  <a
                    className="ref-url"
                    href="https://medium.com/@mwinteringham"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://medium.com/@mwinteringham
                  </a>
                </div>
              </li>
              <li className="ref-card">
                <div className="ref-num">5</div>
                <div className="ref-body">
                  <div className="ref-title">
                    Sauce Labs「Agentic AI and the Future of Software Testing」（Angie Jonesへのインタビュー）
                  </div>
                  <a
                    className="ref-url"
                    href="https://saucelabs.com/resources/blog/agentic-ai-and-the-future-of-software-testing-a-q-and-a-with-angie-jones"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://saucelabs.com/resources/blog/agentic-ai-and-the-future-of-software-testing-a-q-and-a-with-angie-jones
                  </a>
                </div>
              </li>
              <li className="ref-card">
                <div className="ref-num">6</div>
                <div className="ref-body">
                  <div className="ref-title">
                    ThoughtWorks Technology Radar「AI-aided test-first development」
                  </div>
                  <a
                    className="ref-url"
                    href="https://www.thoughtworks.com/en-us/radar/techniques/ai-aided-test-first-development"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.thoughtworks.com/en-us/radar/techniques/ai-aided-test-first-development
                  </a>
                </div>
              </li>
              <li className="ref-card">
                <div className="ref-num">7</div>
                <div className="ref-body">
                  <div className="ref-title">
                    ThoughtWorks Technology Radar「AI-powered UI testing」
                  </div>
                  <a
                    className="ref-url"
                    href="https://www.thoughtworks.com/en-us/radar/techniques/ai-powered-ui-testing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.thoughtworks.com/en-us/radar/techniques/ai-powered-ui-testing
                  </a>
                </div>
              </li>
              <li className="ref-card">
                <div className="ref-num">8</div>
                <div className="ref-body">
                  <div className="ref-title">
                    ThoughtWorks Technology Radar Vol.34 発行に関するニュースリリース
                  </div>
                  <a
                    className="ref-url"
                    href="https://www.thoughtworks.com/about-us/news/2026/combat-ai-cognitive-debt-radar-v34"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.thoughtworks.com/about-us/news/2026/combat-ai-cognitive-debt-radar-v34
                  </a>
                </div>
              </li>
              <li className="ref-card">
                <div className="ref-num">9</div>
                <div className="ref-body">
                  <div className="ref-title">
                    James Bach / Michael BoltonのGenAI批判的評価チェックリストを紹介する記事（tjmaher.com）
                  </div>
                  <a
                    className="ref-url"
                    href="https://www.tjmaher.com/2026/06/testing-and-ai-workshop-by-james-bach.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.tjmaher.com/2026/06/testing-and-ai-workshop-by-james-bach.html
                  </a>
                </div>
              </li>
              <li className="ref-card">
                <div className="ref-num">10</div>
                <div className="ref-body">
                  <div className="ref-title">
                    DORA「Balancing AI tensions: Moving from AI adoption to effective SDLC use」（検証税の解説）
                  </div>
                  <a
                    className="ref-url"
                    href="https://dora.dev/insights/balancing-ai-tensions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://dora.dev/insights/balancing-ai-tensions/
                  </a>
                </div>
              </li>
              <li className="ref-card">
                <div className="ref-num">11</div>
                <div className="ref-body">
                  <div className="ref-title">
                    ISTQB「ISTQB Releases Certified Tester AI Testing (CT-AI) Syllabus Version 2.0」
                  </div>
                  <a
                    className="ref-url"
                    href="https://istqb.org/istqb-releases-certified-tester-ai-testing-ct-ai-syllabus-version-2-0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://istqb.org/istqb-releases-certified-tester-ai-testing-ct-ai-syllabus-version-2-0/
                  </a>
                </div>
              </li>
              <li className="ref-card">
                <div className="ref-num">12</div>
                <div className="ref-body">
                  <div className="ref-title">
                    ISTQB「Certified Tester AI Testing (CT-AI)」公式資格ページ
                  </div>
                  <a
                    className="ref-url"
                    href="https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <footer>
          本ガイドは2026年9月14日時点の公開情報をもとに作成しています。AI駆動テストは変化の速い領域のため、実務での採用検討にあたっては各ソース元の最新情報も併せてご確認ください。書籍本文の逐語的な引用は行わず、目次構成をもとに独自に再構成した解説コンテンツです。
        </footer>
      </main>
    </div>
  );
}
