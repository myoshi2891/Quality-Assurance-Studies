import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './testing-ai-confidence-engineering-guide.css';

export const metadata: Metadata = {
  title: 'Testing AI 完全ガイド — Engineering Confidence in Non-Deterministic Systems',
  description:
    '非決定的なAIシステムをどうやって「自信を持って」出荷できる状態にするか。Jason Arbon著『Testing AI』に基づく初学者向けステップバイステップ解説ガイド。',
};

const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontFamily": "'Source Serif 4', 'Noto Serif JP', Georgia, serif",
    "fontSize": "15px",
    "primaryColor": "#efeaf9",
    "primaryTextColor": "#221f2e",
    "primaryBorderColor": "#9d95d1",
    "lineColor": "#6f6aa0",
    "secondaryColor": "#f2ecdd",
    "tertiaryColor": "#fffefb",
    "edgeLabelBackground": "#faf6ec"
  },
  "flowchart": { "htmlLabels": true, "curve": "basis" }
}}%%
`;

export const DIAGRAM_ROADMAP = `${MERMAID_CONFIG}flowchart TD
    Start["読者はどの役割に近いか"]
    Dev["開発者やコーディングエージェント利用者"]
    Tester["テスターや自動化エンジニア"]
    Leader["プロダクト開発者やリーダー層"]

    Start --> Dev
    Start --> Tester
    Start --> Leader

    Dev --> DevPath["第1部で基礎概念を掴む から 第9章 生成コードが仕事を変える へ そして実践ワークで最小限の品質システムを組む"]
    Tester --> TesterPath["第1部から第2部でEvalと統計を学ぶ から 第5章 判定者と不一致 と 第10章 アンチパターン を重点的に読む"]
    Leader --> LeaderPath["第11章 Confidence Engineerという役割 から 第19章 ガバナンス と 第20章 実践プレイブック を優先して読む"]

    DevPath --> Common["共通ゴール 第20章 実践プレイブック で自分のチームに当てはめる"]
    TesterPath --> Common
    LeaderPath --> Common
    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f86d9,stroke-width:1.5px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6fb897,stroke-width:1.5px;
    classDef box fill:#f0dfb0,color:#4a3a0a,stroke:#d1ad4f,stroke-width:1.5px;
    class Start hub
    class Common done`;

export const DIAGRAM_CONFIDENCE_LOOP = `${MERMAID_CONFIG}flowchart LR
    Gen["AIが出力を生成する"]
    Sample["同じケースを繰り返し実行してサンプリングする"]
    Judge["人間とLLM判定者で評価する"]
    Evidence["結果をエビデンスとして記録する"]
    Decide["出荷 保留 カナリア ロールバックを判断する"]
    Monitor["本番でモニタリングする"]

    Gen --> Sample --> Judge --> Evidence --> Decide --> Monitor
    Monitor -->|次のバージョンへ フィードバック| Gen
    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f86d9,stroke-width:1.5px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6fb897,stroke-width:1.5px;
    classDef box fill:#f0dfb0,color:#4a3a0a,stroke:#d1ad4f,stroke-width:1.5px;
    class Gen hub
    class Monitor done`;

export const DIAGRAM_OLD_VS_NEW = `${MERMAID_CONFIG}flowchart TD
    Old["従来の考え方 単発の入力を1回実行し 出力を正解と完全一致で照合する"]
    New["新しい考え方 同じケースを繰り返し実行し 出力の分布とばらつきを測定する"]

    Old -->|限界 1回の結果だけでは母集団のリスクは分からない| New
    New --> Interval["スコアと一緒に信頼区間とサンプル数を報告する"]
    New --> Slice["ユーザー属性や状況ごとにスライスして報告する"]
    New --> Rare["まれにしか起きない致命的な失敗を積極的に探す"]
    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f86d9,stroke-width:1.5px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6fb897,stroke-width:1.5px;
    classDef box fill:#f0dfb0,color:#4a3a0a,stroke:#d1ad4f,stroke-width:1.5px;
    class Old box
    class New done`;

export const DIAGRAM_LLM_JUDGE = `${MERMAID_CONFIG}flowchart TD
    Input["ユーザーからの入力"]
    LLMJudge["LLM判定者がスコアリングする"]
    Compare["人間によるキャリブレーションセットと比較する"]
    Agree{"十分に一致しているか"}
    Escalate["深刻な失敗や曖昧なケースは人間がレビューする"]
    Version["ルーブリックと判定プロンプトをバージョン管理して更新する"]

    Input --> LLMJudge --> Compare --> Agree
    Agree -->|一致している| Version
    Agree -->|不一致が多い| Escalate --> Version
    Version -->|再度キャリブレーション| LLMJudge
    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f86d9,stroke-width:1.5px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6fb897,stroke-width:1.5px;
    classDef box fill:#f0dfb0,color:#4a3a0a,stroke:#d1ad4f,stroke-width:1.5px;
    class Input hub
    class Version done`;

export const DIAGRAM_EVAL_STEPS = `${MERMAID_CONFIG}flowchart TD
    Define["何を測定するか なぜユーザーに重要かを定義する"]
    Oracle["正解判定の仕組み オラクルを決める"]
    Cases["代表的なケース集合を作る 通常利用 高価値フロー 境界ケース ポリシー境界 セキュリティに敏感なケース"]
    Adversarial["敵対的 レッドチーム的なサンプルを加える"]
    Manage["Evalデータをバージョン管理し 継続的に更新する"]
    Compare["公開ベンチマークと比較しつつ その死角を鵜呑みにしない"]

    Define --> Oracle --> Cases --> Adversarial --> Manage --> Compare
    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f86d9,stroke-width:1.5px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6fb897,stroke-width:1.5px;
    classDef box fill:#f0dfb0,color:#4a3a0a,stroke:#d1ad4f,stroke-width:1.5px;
    class Define hub
    class Compare done`;

export const DIAGRAM_RELEASE_GATE = `${MERMAID_CONFIG}flowchart LR
    NewVer["新しいバージョンを用意する"]
    OfflineEval["オフラインEvalのゲートを通過させる"]
    Shadow["シャドウ展開 実トラフィックを複製し ユーザーには影響を与えない"]
    Canary["カナリア展開 一部のユーザーにだけ公開する"]
    Watch["コスト レイテンシ 品質 安全性の指標を監視する"]
    Ship["問題なければ全体展開する"]
    Rollback["問題があれば即座にロールバックする"]

    NewVer --> OfflineEval --> Shadow --> Canary --> Watch
    Watch -->|良好| Ship
    Watch -->|悪化| Rollback
    Rollback --> NewVer
    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f86d9,stroke-width:1.5px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6fb897,stroke-width:1.5px;
    classDef box fill:#f0dfb0,color:#4a3a0a,stroke:#d1ad4f,stroke-width:1.5px;
    class NewVer hub
    class Ship done
    class Rollback box`;

export const DIAGRAM_GENCODE_PIPELINE = `${MERMAID_CONFIG}flowchart TD
    Gen["AIがコードを生成する"]
    Static["静的解析と自動チェックを行う"]
    Review["別のAIまたは人間による独立したレビュー経路を通す"]
    Integ["統合テストとセキュリティテストを行う"]
    Deploy["デプロイ時の振る舞いを検証する"]
    Maint["保守性とアーキテクチャ上の負債を確認する"]
    Ship["出荷を判断する"]

    Gen --> Static --> Review --> Integ --> Deploy --> Maint --> Ship
    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f86d9,stroke-width:1.5px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6fb897,stroke-width:1.5px;
    classDef box fill:#f0dfb0,color:#4a3a0a,stroke:#d1ad4f,stroke-width:1.5px;
    class Gen hub
    class Ship done`;

export const DIAGRAM_CONFIDENCE_ENGINEER = `${MERMAID_CONFIG}flowchart TD
    CE["Confidence Engineer"]
    Intent["プロダクトの意図"]
    Code["コード"]
    TestsEval["テストとEval"]
    Trace["トレース"]
    Rollout["ロールアウト"]
    Business["ビジネス上の帰結"]
    Exec["経営層 エンジニア 利用者への説明"]

    Intent --> CE
    Code --> CE
    TestsEval --> CE
    Trace --> CE
    Rollout --> CE
    CE --> Business
    CE --> Exec
    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f86d9,stroke-width:1.5px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6fb897,stroke-width:1.5px;
    classDef box fill:#f0dfb0,color:#4a3a0a,stroke:#d1ad4f,stroke-width:1.5px;
    class CE hub
    class Exec done`;

export const DIAGRAM_MODEL_INTERNALS = `${MERMAID_CONFIG}flowchart TD
    Token["トークン化と入力の扱い"]
    Context["コンテキストウィンドウとサンプリング"]
    Attention["アテンション診断 どのトークンに注目しているか"]
    Activation["活性化と概念プローブ"]
    SAE["スパースオートエンコーダによる特徴の分解"]
    Triage["既知の良い例 悪い例 曖昧な例と比較しトリアージの根拠にする"]

    Token --> Context --> Attention --> Activation --> SAE --> Triage
    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f86d9,stroke-width:1.5px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6fb897,stroke-width:1.5px;
    classDef box fill:#f0dfb0,color:#4a3a0a,stroke:#d1ad4f,stroke-width:1.5px;
    class Token hub
    class Triage done`;

export const DIAGRAM_SECURITY_SAFETY = `${MERMAID_CONFIG}flowchart TD
    Channels["信頼できない入力チャネル ユーザーテキスト 取得したページ ツール出力 ファイル 画像 外部API"]
    Threat["脅威モデリングを行う"]
    Guard["ガードレールを実装する"]
    Frontier["危険能力テストと封じ込めを設計する"]
    Layered["層になった安全性として運用する"]

    Channels --> Threat --> Guard --> Frontier --> Layered
    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f86d9,stroke-width:1.5px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6fb897,stroke-width:1.5px;
    classDef box fill:#f0dfb0,color:#4a3a0a,stroke:#d1ad4f,stroke-width:1.5px;
    class Channels hub
    class Layered done`;

export const DIAGRAM_PART5_CHAIN = `${MERMAID_CONFIG}flowchart TD
    P17["第17章 パーソナライズされた動的なAIプロダクト ユーザーが1人でもそのユーザーにとって正しくあるべき"]
    P18["第18章 身体性AIと長時間稼働するAIシステム シミュレーションを優先し 重要なケースのみ物理検証する"]
    P19["第19章 ガバナンス 規制 道徳的な未来 現行法と普遍的な品質原則を分けて追跡する"]

    P17 --> P18 --> P19
    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f86d9,stroke-width:1.5px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6fb897,stroke-width:1.5px;
    classDef box fill:#f0dfb0,color:#4a3a0a,stroke:#d1ad4f,stroke-width:1.5px;
    class P17 hub
    class P19 done`;

export const DIAGRAM_SIX_PREDICTIONS = `${MERMAID_CONFIG}flowchart LR
    Hub["トークン化プロダクトの未来への6つの予測"]
    Pred1["予測1 検証がコンピュートの中心になる"]
    Pred2["予測2 開発者がコーディングエージェントを管理し 実践的な統計家になる"]
    Pred3["予測3 プロダクトが動的であることがデフォルトになる"]
    Pred4["予測4 プロダクト作成が継続的なプロセスになる"]
    Pred5["予測5 APIとインターフェースがより緩やかになる"]
    Pred6["予測6 AIがAIテストの大半を行うようになる"]

    Hub --> Pred1
    Hub --> Pred2
    Hub --> Pred3
    Hub --> Pred4
    Hub --> Pred5
    Hub --> Pred6
    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f86d9,stroke-width:1.5px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6fb897,stroke-width:1.5px;
    classDef box fill:#f0dfb0,color:#4a3a0a,stroke:#d1ad4f,stroke-width:1.5px;
    class Hub hub`;

export default function TestingAiConfidenceGuidePage() {
  return (
    <div className="testing-ai-confidence-layout">
      <NavBar />

      <main className="main">
        <header className="hero" id="top">
          <div className="hero-kicker">
            <i className="ti ti-sparkles" aria-hidden="true"></i>
            <span>AI時代のソフトウェアテスト入門</span>
          </div>
          <h1 className="hero-title">
            『Testing AI: Engineering Confidence in Non-Deterministic Systems』完全ガイド
          </h1>
          <p className="hero-lead">
            非決定的なAIシステムを、どうやって「自信を持って」出荷できる状態にするか——初学者でも順番に理解できるステップバイステップ解説です。
          </p>
          <p className="hero-note">
            対象読者：AIを組み込んだソフトウェアの品質保証に関わり始めたばかりのエンジニア、テスター、プロダクトマネージャー
          </p>
        </header>

        {/* Section: position */}
        <section className="section" id="position">
          <h2>
            <i className="ti ti-compass" aria-hidden="true"></i>
            <span>この本の位置づけ</span>
          </h2>
          <div className="prose">
            <p>
              生成AIやLLM（大規模言語モデル）を組み込んだソフトウェアは、同じ入力を与えても毎回まったく同じ出力を返すとは限りません。これは「バグ」ではなく、AIシステムの本質的な性質です。ところが、従来のソフトウェアテストは「同じ入力には同じ出力」という前提（決定性）の上に成り立っています。
            </p>
            <p>
              『Testing AI』は、この前提が崩れた世界でどうやってソフトウェアの品質に「自信」を持つかを扱う実務書です。著者のJason Arbonは、テストという入り口から始めて、最終的に「Confidence Engineering（確信のエンジニアリング）」と呼ぶ運用規律にたどり着きます。これは、実行するたびに振る舞いが変わり、変化するデータから学習し、ツールを呼び出し、ユーザーごとにパーソナライズされ、本番負荷の下で違う振る舞いをするシステムを出荷するための考え方です。
            </p>
          </div>
        </section>

        {/* Section: book-info */}
        <section className="section" id="book-info">
          <h2>
            <i className="ti ti-book" aria-hidden="true"></i>
            <span>書籍データ</span>
          </h2>
          <div className="book-card">
            <div className="book-cover">
              <div className="bc-title">Testing AI</div>
              <div className="bc-author">
                Engineering Confidence in Non-Deterministic Systems<br />Jason Arbon
              </div>
            </div>
            <div className="book-card-body">
              <div className="table-wrap">
                <table className="kv-table">
                  <tbody>
                    <tr>
                      <th>原題</th>
                      <td>
                        Testing AI: Engineering Confidence in Non-Deterministic Systems
                      </td>
                    </tr>
                    <tr>
                      <th>著者</th>
                      <td>Jason Arbon</td>
                    </tr>
                    <tr>
                      <th>刊行</th>
                      <td>
                        2026年、初版（Amazonにてペーパーバック・Kindle版で入手可能）
                      </td>
                    </tr>
                    <tr>
                      <th>構成</th>
                      <td>
                        全5部・21章、98の実例、42の実務者コラム「From the Field」、32の図版
                      </td>
                    </tr>
                    <tr>
                      <th>想定読者</th>
                      <td>
                        開発者、テスター・自動化エンジニア、AIプロダクトの開発者やアーキテクト、エンジニアリングリーダーや経営層
                      </td>
                    </tr>
                    <tr>
                      <th>中心概念</th>
                      <td>Confidence Engineering（確信のエンジニアリング）</td>
                    </tr>
                    <tr>
                      <th>公式サイト</th>
                      <td>
                        testingaibook.com（章ごとの概要を無料公開する「Knowledge Edition」も併設）
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section: author */}
        <section className="section" id="author">
          <h2>
            <i className="ti ti-user" aria-hidden="true"></i>
            <span>著者紹介：Jason Arbonとは</span>
          </h2>
          <div className="prose">
            <p>
              Jason Arbonは、ソフトウェアエンジニア・起業家であり、20年以上にわたりソフトウェア開発・テスト・プロダクトエンジニアリングに携わってきた人物です。Microsoft、Bing、Google検索、Chrome、ChromeOS、Applauseといった大規模プロダクトの品質システムを構築・統率してきました。
            </p>
            <p>代表的な経歴は次の通りです。</p>
            <ul className="plain-list">
              <li>
                『How Google Tests Software』（James Whittaker、Jeff Carolloとの共著）の共著者として、Googleの規模でのテスト文化を紹介
              </li>
              <li>
                『App Quality: Secrets for Agile App Teams』の著者として、アプリストアのデータや実地テストから得た知見をまとめる
              </li>
              <li>
                AIをソフトウェアテストに応用する企業（test.ai、Testers.ai、Checkie.AI、Jank.AI）やAI品質の変革を支援するIcebergQAの創業に関与
              </li>
              <li>ユタ大学で電気工学・コンピュータ工学の学位を取得</li>
            </ul>
            <p>
              『Testing AI』は、これらの経験を「Confidence Engineering」という一つの実務規律にまとめ上げたものです。
            </p>
          </div>
        </section>

        {/* Section: audience */}
        <section className="section" id="audience">
          <h2>
            <i className="ti ti-users" aria-hidden="true"></i>
            <span>対象読者</span>
          </h2>
          <div className="prose">
            <p>本書は次のような役割の人に向けて書かれています。</p>
            <ul className="plain-list">
              <li>
                <strong>開発者・コーディングエージェント利用者</strong>：自分がすべて書いたわけではないコードやシステムを、隠れた統合不良・セキュリティ・データ・運用上の欠陥まで含めて検証する方法を学ぶ
              </li>
              <li>
                <strong>テスター・自動化エンジニア</strong>：脆い完全一致アサーションから脱却し、Eval（評価）・確率的なエビデンス・本番トレース・リスク別のスライス・人間とAIの協働レビューへと進む
              </li>
              <li>
                <strong>AIプロダクト開発者・アーキテクト</strong>：プロンプト、モデル、データ、検索（retrieval）、ツール、ポリシー、ユーザー体験、コスト、リリース制御を、1つのテスト可能なシステムとしてつなげる
              </li>
              <li>
                <strong>エンジニアリングリーダー・経営層</strong>：出荷・保留・カナリア・ロールバック・投資・ガバナンス・顧客リスクの判断を支えるエビデンスを求める
              </li>
            </ul>
          </div>
        </section>

        {/* Section: changes */}
        <section className="section" id="changes">
          <h2>
            <i className="ti ti-bulb" aria-hidden="true"></i>
            <span>本書を読むと何が変わるか</span>
          </h2>
          <div className="prose">
            <p>
              公式サイトでは、読了後に問えるようになる6つの問いが示されています。これらは本ガイド全体を貫く軸でもあるので、最初に押さえておきましょう。
            </p>
            <ol className="plain-list">
              <li>
                どの種類のばらつきは無害で、どの種類のばらつきはプロダクトの欠陥なのか
              </li>
              <li>
                どんな母集団をサンプリングしたのか、そして平均値によって隠されているリスクは何か
              </li>
              <li>
                誰が、あるいは何が品質を判定しているのか、その測定システムはキャリブレーションされているか
              </li>
              <li>
                システムは正しい根拠を検索し、ツールを安全に使い、監査可能なトレースを残せたか
              </li>
              <li>
                品質の向上は、レイテンシ・計算コスト・運用の複雑さ・ユーザーへの影響に見合っているか
              </li>
              <li>
                どのエビデンスがリリースを正当化し、どんな明確なシグナルがロールバックの引き金になるべきか
              </li>
            </ol>
          </div>
        </section>

        {/* Section: roadmap */}
        <section className="section" id="roadmap">
          <h2>
            <i className="ti ti-route" aria-hidden="true"></i>
            <span>学習ロードマップ</span>
          </h2>
          <div className="prose">
            <p>
              本書は全5部・21章という大きな構成ですが、初学者は必ずしも頭から一直線に読む必要はありません。以下は役割別のおすすめの読み進め方です。
            </p>
          </div>
          <div className="diagram-block">
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_ROADMAP} />
            </div>
            <div className="diagram-caption">
              図1　学習ロードマップ　読者の役割別おすすめの読み進め方
            </div>
          </div>
        </section>

        {/* Section: step0 */}
        <section className="section" id="step0">
          <h2>
            <i className="ti ti-flag" aria-hidden="true"></i>
            <span>
              Step 0：なぜ「AIのテスト」は別物なのか — Confidence Engineeringという発想
            </span>
          </h2>
          <div className="prose">
            <p>従来のソフトウェアテストは、次のような前提の上に成り立っていました。</p>
            <ul className="plain-list">
              <li>同じ入力を与えれば、同じ出力が返る（決定性）</li>
              <li>
                出力が「正解」と一致するかどうかを、完全一致のアサーションでチェックできる
              </li>
              <li>テストが1回通れば、その振る舞いは今後も保証される</li>
            </ul>
            <p>
              生成AIやLLMを組み込んだシステムでは、この前提のすべてが崩れます。モデルはサンプリングによってゆらぎのある出力を返し、検索拡張生成（RAG）は取得するコンテキストによって挙動が変わり、エージェントはツールを呼び出しながら多段階で動きます。ここで必要になるのが、著者が「Confidence Engineering（確信のエンジニアリング）」と呼ぶ考え方です。
            </p>
          </div>
          <div className="diagram-block">
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_CONFIDENCE_LOOP} />
            </div>
            <div className="diagram-caption">図2　Confidence Engineeringのコアループ</div>
          </div>
          <div className="prose">
            <p>
              このループの中心にあるのが「観察」と「推論」を分けるという発想です。あるサンプルで得られた結果は「観察」にすぎず、そこから見積もる信頼区間は「推論」であり、リリースするかどうかの判断は、その両方に加えてビジネス上の文脈・深刻度・可逆性・モニタリング計画を組み合わせたリスク判断になります。本書全体は、この一連の流れを実務レベルまで具体化していく構成になっています。
            </p>
          </div>
        </section>

        {/* Section: step1 */}
        <section className="section" id="step1">
          <h2>
            <i className="ti ti-circle-number-1" aria-hidden="true"></i>
            <span>
              Step 1：第I部 — AI品質の新しいかたち（第1〜5章）
            </span>
          </h2>
          <div className="prose">
            <p>
              第I部は、本書全体の土台となる5つの章で構成されています。「完全一致のテスト」から「分布とエビデンスに基づく評価」へと発想を転換するパートです。
            </p>
          </div>
          <div className="diagram-block">
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_OLD_VS_NEW} />
            </div>
            <div className="diagram-caption">
              図3　ワンショットテストから分布ベースの評価への転換
            </div>
          </div>

          <h3>第1章　ワンショットテストの終焉</h3>
          <div className="prose">
            <p>
              完全一致のアサーションをやめ、「許容できるばらつき」と「有害なばらつき」を区別できる評価基準に置き換えることが出発点です。同じテストケースを繰り返し実行して、出力の分布そのものを測定します。0から10、あるいは0から1のスケールで品質をスコアリングする発想もここで導入されます。重要なのは、「観察したサンプル結果」と「そこから見積もる母集団の信頼区間」、そして「ビジネス文脈を踏まえたリリース判断」を、はっきり切り分けて考えることです。
            </p>
          </div>

          <h3>第2章　テストからリリースエビデンスへ</h3>
          <div className="prose">
            <p>
              個々のテストケースを、スライス（セグメント別の集計）・トレース・レビュアーの判断・明示的なリリースゲートと組み合わせて、初めて「リリースの根拠（エビデンス）」と呼べるものに変わります。同値なはずの入力に対して重要な振る舞いが保たれているかを確認する「メタモルフィックテスト」も、ここで紹介される有力な手法です。ゴールデンセット（いつも使う基準ケース集）と、本番トラフィックからのライブサンプリングを組み合わせる考え方や、めったに起きない失敗を狙って探す「レア障害ハンティング」もこの章の範囲です。
            </p>
          </div>

          <h3>第3章　サンプリングと不確実性</h3>
          <div className="prose">
            <p>
              「1回の実行結果はほとんど何も教えてくれない」という前提から始まります。何件サンプリングすれば十分と言えるのか、信頼区間を専門家らしく「だいたい」と言うにはどう計算するのか、AIモデル自身が申告する確信度と統計的な信頼度がどう違うのか、といった基礎統計を扱います。同じケース集合を新旧バージョンの両方に走らせる「ペア比較」を優先することも、この章で強調されるポイントです。
            </p>
          </div>

          <h3>第4章　AI品質のための統計的検定</h3>
          <div className="prose">
            <p>
              対応あり・対応なし、数値・カテゴリ、順序・二値といったデータの形に応じて、適切な統計検定を選ぶ方法を扱います。Evalを実行する前に帰無仮説を明確にすること、p値を「証明」ではなく「エビデンスの一部」として扱うこと、統計的有意性と実務上の意味のある有意性（practical significance）を区別すること、検出力分析（power analysis）や多重比較による誤検出の問題、適合率・再現率・F値の扱いなどが含まれます。
            </p>
          </div>

          <h3>第5章　判定者、人間、そして意見の不一致</h3>
          <div className="prose">
            <p>
              LLMを「判定者（ジャッジ）」として自動化する前に、まず人間による測定システム自体を定義しておく必要がある、というのがこの章の核心です。具体的な根拠の要件とキャリブレーション用の例を盛り込んだルーブリックを書くこと、そして一致率だけでなく「意見の不一致そのもの」を測定することが強調されます。
            </p>
          </div>
          <div className="diagram-block">
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_LLM_JUDGE} />
            </div>
            <div className="diagram-caption">図4　LLM判定者の運用フロー</div>
          </div>
          <div className="prose">
            <p>
              実務で信頼されているチームは、判定者自体を「テスト対象のシステム」として扱います。人間レビュアーとの一致率を測定し、流暢な文章に引きずられるバイアスを追跡し、ブラインドでの比較を使い、判定プロンプトをバージョン管理し、判定者が低い確信度を報告した例や過去に信頼できなかった例を隔離して扱う、といった運用が紹介されています。
            </p>
          </div>
        </section>

        {/* Section: step2 */}
        <section className="section" id="step2">
          <h2>
            <i className="ti ti-circle-number-2" aria-hidden="true"></i>
            <span>
              Step 2：第II部 — エビデンス、Eval、本番運用（第6〜8章）
            </span>
          </h2>
          <div className="prose">
            <p>
              第II部では、「意味のあるEvalをどう作るか」「リリース判断をどう下すか」「本番でどう運用し続けるか」という、実務に直結する3つの章を扱います。
            </p>
          </div>

          <h3>第6章　意味のあるEvalの構築</h3>
          <div className="prose">
            <p>
              Evalが「何を測定しているのか」「なぜユーザーにとって重要なのか」「オラクル（正解判定の仕組み）がどう機能するのか」を明確に定義することから始まります。公開ベンチマークと製品固有のEvalを比較し、ベンチマークが持つ死角をそのまま引き継がないようにすること、敵対的・レッドチーム的なサンプリングを取り入れること、検索の関連性を測るNDCGのような指標、そして「品質の頭打ちカーブ（asymptotic curve）」を意識して高水準だけを追い求めないようにすることなどが扱われます。
            </p>
          </div>
          <div className="diagram-block">
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_EVAL_STEPS} />
            </div>
            <div className="diagram-caption">図5　意味のあるEvalを構築するステップ</div>
          </div>

          <h3>第7章　AIシステムのリリース準備</h3>
          <div className="prose">
            <p>
              リリースは「品質保証の終わり」ではなく「本当の意味での品質測定の始まり」だという考え方が軸になります。許容できるばらつきは通しつつ、ポリシー違反・ツールの誤用・安全性の後退といったリグレッションは確実に検知する仕組みを作ります。ツールを使う多段階エージェントのワークフローをどう評価するか、人間によるレビューとエスカレーションのルールをどう設計するかもここで扱われます。
            </p>
          </div>

          <h3>第8章　AIの運用：可観測性、関連性、経済性</h3>
          <div className="prose">
            <p>
              入力・プロンプト組み立て・検索（retrieval）・モデル呼び出し・ツール・出力フィルタ・ユーザーに見える結果まで、パイプライン全体を計装（インストルメント）することが出発点です。RAGでは検索の失敗と生成の失敗を切り分けて評価する必要があります。本番トレースからの学習、プロンプトやポリシーのバージョン管理、そしてカナリア・シャドウ・ロールバック戦略が、この章の重要なテーマです。
            </p>
          </div>
          <div className="diagram-block">
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_RELEASE_GATE} />
            </div>
            <div className="diagram-caption">
              図6　リリースゲートとCanary Shadow Rollbackの流れ
            </div>
          </div>
        </section>

        {/* Section: step3 */}
        <section className="section" id="step3">
          <h2>
            <i className="ti ti-circle-number-3" aria-hidden="true"></i>
            <span>
              Step 3：第III部 — AI生成コードとConfidence Engineering（第9〜11章）
            </span>
          </h2>
          <div className="prose">
            <p>
              第III部は、AIがコードそのものを生成する時代における品質保証と、「Confidence Engineer」という新しい役割を扱います。
            </p>
          </div>

          <h3>第9章　生成コードが仕事を変える</h3>
          <div className="prose">
            <p>
              一見正しく見える生成コードでも、統合・セキュリティ・プライバシー・権限・デプロイの振る舞いにおいて誤りうる、という前提から出発します。生成されたコードを検証するために、別のAIやレビュー経路を使うことが推奨されます。生成テストが「カバレッジがあるように見えて実は薄い」という錯覚を生む問題や、ハルティング問題やゲーデルの不完全性定理が示すような「AI生成コードのテストには理論的な限界がある」という視点も紹介されます。
            </p>
          </div>
          <div className="diagram-block">
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_GENCODE_PIPELINE} />
            </div>
            <div className="diagram-caption">図7　AI生成コードの検証パイプライン</div>
          </div>

          <h3>第10章　誤った安心感を生むアンチパターン</h3>
          <div className="prose">
            <p>
              この章は16個ものセクションブリーフを持つ、本書で最もボリュームのあるアンチパターン集です。修正を提案する前に、まずその「誤った安心感のパターン」に名前を付けることが大切だと説きます。以下は代表的なアンチパターンの一部です。
            </p>
          </div>
          <div className="table-wrap">
            <div className="table-title">代表的なアンチパターン（第10章より抜粋）</div>
            <table>
              <thead>
                <tr>
                  <th>アンチパターン</th>
                  <th>何が問題か</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>合否だけのブール判定の罠</td>
                  <td>
                    「通った・落ちた」の二値だけでは、どれだけ悪かったか、どれだけ際どかったかが分からない
                  </td>
                </tr>
                <tr>
                  <td>通過率だけを品質と見なす</td>
                  <td>
                    パーセンテージは平均を隠し、致命的な少数の失敗を埋もれさせる
                  </td>
                </tr>
                <tr>
                  <td>過度に具体的なテストケースやテスト計画</td>
                  <td>
                    非決定的な出力に完全一致を求めると、些細な言い換えでも壊れる
                  </td>
                </tr>
                <tr>
                  <td>ゴールデンアンサー問題</td>
                  <td>唯一の正解を決め打ちすると、妥当な別解を誤って不合格にする</td>
                </tr>
                <tr>
                  <td>すべての悪い出力をバグとして起票する</td>
                  <td>
                    ばらつきの範囲内の変動まで、バグ管理システムを埋め尽くしてしまう
                  </td>
                </tr>
                <tr>
                  <td>もぐら叩き式のチューニングの罠</td>
                  <td>個別の失敗を潰すたびに、別の場所で新しい失敗が生まれる</td>
                </tr>
                <tr>
                  <td>ワンショットデモの誤謬</td>
                  <td>1回のデモがうまくいっただけで、本番品質を保証したと錯覚する</td>
                </tr>
                <tr>
                  <td>静的なテスト計画</td>
                  <td>
                    モデルやデータが変わり続けるのに、テスト計画だけが固定されたままになる
                  </td>
                </tr>
                <tr>
                  <td>集計スコアの罠</td>
                  <td>
                    一つの数字に平均化すると、どのスライスで何が壊れているか見えなくなる
                  </td>
                </tr>
                <tr>
                  <td>最終回答だけをテストする</td>
                  <td>
                    途中の検索やツール呼び出しの過程を検証しないと、原因を特定できない
                  </td>
                </tr>
                <tr>
                  <td>判定者を真実として扱う</td>
                  <td>
                    LLM判定者自体もキャリブレーションが必要な測定システムにすぎない
                  </td>
                </tr>
                <tr>
                  <td>テストの数が多いほど確信できるという誤解</td>
                  <td>量よりも、リスクに対してカバレッジがあるかが重要</td>
                </tr>
                <tr>
                  <td>拒否を安全性と混同する</td>
                  <td>
                    何でも断るAIは安全なのではなく、ただ役に立たないだけの場合がある
                  </td>
                </tr>
                <tr>
                  <td>AIのバグをUIのバグと同じように扱う</td>
                  <td>非決定的な失敗には、UIの決定的なバグとは違う調査手法が必要</td>
                </tr>
                <tr>
                  <td>古いテスターの肩書きの罠</td>
                  <td>
                    役割の呼び名だけを変えても、実務のやり方が変わらなければ意味がない
                  </td>
                </tr>
                <tr>
                  <td>昨日のテスターを今日のシステムのために雇う罠</td>
                  <td>統計、Eval設計、AIの仕組みを理解した人材が必要になっている</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>第11章　Confidence Engineerという役割</h3>
          <div className="prose">
            <p>
              第11章はわずか1つのセクションブリーフしかありませんが、本書全体の結論にあたる重要な章です。プロダクトの意図・コード・テスト・Eval・トレース・ロールアウト・ビジネス上の帰結をつなぐ人物として「Confidence Engineer」を位置づけます。役職名自体は新しいものですが、その必要性は昔から変わりません。著者は、真剣に取り組むすべてのAIプロダクトには、そのシステムが良くなっているか、安全になっているか、現実の世界でより信頼できるようになっているかを裏付けるエビデンスに、誰かが責任を持つ必要があると論じています。
            </p>
          </div>
          <div className="diagram-block">
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_CONFIDENCE_ENGINEER} />
            </div>
            <div className="diagram-caption">図8　Confidence Engineerの役割</div>
          </div>
        </section>

        {/* Section: step4 */}
        <section className="section" id="step4">
          <h2>
            <i className="ti ti-circle-number-4" aria-hidden="true"></i>
            <span>
              Step 4：第IV部 — データ・セキュリティ・安全性・モデル内部（第12〜16章）
            </span>
          </h2>
          <div className="prose">
            <p>
              第IV部は、データとバイアス、セキュリティ、フロンティア安全性、そしてモデルそのものの仕組みという、やや発展的なテーマを扱う5つの章です。
            </p>
          </div>

          <h3>第12章　データ、バイアス、評価者、インセンティブ</h3>
          <div className="prose">
            <p>
              データ・ラベル・評価者（レイター）・インセンティブ・展開後のフィードバックのすべてを、品質に関わる監査対象として扱います。ユーザーの属性・言語・文化・デバイス・地域・アクセス性によってスライスと反実仮想（カウンターファクチュアル、もし属性が違っていたらどうなるか）を報告することが求められます。データのバイアス、ラベリングのバイアス、学習時のバイアス、プロダクト化する段階でのバイアス、そして生存バイアス（うまくいった事例だけが目に入ってしまう罠）まで、細かく分解して扱われます。
            </p>
          </div>

          <h3>第13章　AIセキュリティとガードレール</h3>
          <div className="prose">
            <p>
              チャットボットのテキストボックスだけでなく、AIシステム全体を脅威モデリングすることが出発点です。ユーザーテキスト・取得したページ・ツール出力・ファイル・OCR・隠れたUnicode文字・画像・外部APIなど、信頼できないあらゆるチャネルをテストします。プロンプトインジェクションや間接的プロンプトインジェクション、学習データの汚染やバックドア、MCP（Model Context Protocol）のようなツール連携における権限管理、OWASPのLLMアプリケーション向けトップ10といった具体的な脅威分類も扱われます。
            </p>
          </div>

          <h3>第14章　フロンティア安全性と封じ込め</h3>
          <div className="prose">
            <p>
              フロンティアの安全性を、通常のプロダクトバグとは別の品質クラスとして扱うべきだと説きます。危険なコンテンツそのものを教え込むことなく悪用可能性を測定する「危険能力テスト」の設計、操作・説得・不当な影響力の行使のテスト、欺瞞やスキーミング（計画的な振る舞い）、評価されていることに気づいてしまう「evaluation awareness」のテスト、封じ込めやサンドボックスの設計まで扱われます。
            </p>
          </div>

          <h3>第15章　モデルの仕組み</h3>
          <div className="prose">
            <p>
              トークン化、コンテキストウィンドウ、サンプリング、ロジット、報酬チューニング、マルチモーダルパイプラインが、それぞれ固有の失敗モードを生むという前提で、より良いテストを設計する方法を扱います。RLHFやRLAIF、報酬モデルの振る舞いのテスト、有用なLLMバグレポートと役に立たないバグレポートの違い、画像生成モデルや視覚言語モデルの仕組み、ファインチューニング済みモデルにおけるリグレッションのリスクなど、幅広いトピックが含まれます。
            </p>
          </div>

          <h3>第16章　内省：ホワイトボックスでネットワークをテストする</h3>
          <div className="prose">
            <p>
              内省（introspection）を「正しさの証明」としてではなく「トリアージ（優先順位づけ）のためのエビデンス」として使うという立場が明確に示されています。既知の良い例・悪い例・曖昧な例・新バージョンの例の間で、内部シグナル（アテンション、活性化など）を比較する手法や、概念プローブ、スパースオートエンコーダといった解釈可能性（interpretability）のツールを、テスト設計にどう活かすかが扱われます。
            </p>
          </div>
          <div className="diagram-block">
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_MODEL_INTERNALS} />
            </div>
            <div className="diagram-caption">図9　モデル内部を理解するテスト観点</div>
          </div>
          <div className="prose">
            <p>
              安全性の観点でも、脅威モデリングから封じ込めまでは一続きの階層として理解すると整理しやすくなります。
            </p>
          </div>
          <div className="diagram-block">
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_SECURITY_SAFETY} />
            </div>
            <div className="diagram-caption">
              図10　AIセキュリティの脅威モデルと安全性の階層
            </div>
          </div>
        </section>

        {/* Section: step5 */}
        <section className="section" id="step5">
          <h2>
            <i className="ti ti-circle-number-5" aria-hidden="true"></i>
            <span>
              Step 5：第V部 — 未来のシステムと実践プレイブック（第17〜21章）
            </span>
          </h2>
          <div className="prose">
            <p>
              最後の第V部は、パーソナライズされたプロダクト、身体性AI（ロボティクス）、ガバナンス、そして実践的なプレイブックと未来予測という5つの章で締めくくられます。
            </p>
          </div>
          <div className="diagram-block">
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_PART5_CHAIN} />
            </div>
            <div className="diagram-caption">
              図11　第V部　パーソナライズ・身体性AI・ガバナンスのテスト範囲
            </div>
          </div>

          <h3>第17章　パーソナライズされた動的なAIプロダクト</h3>
          <div className="prose">
            <p>
              「N=1」、つまりユーザーがたった1人であっても、その人にとって正しくなければならないという前提でパーソナライズされた振る舞いをテストします。コンテンツ・レイアウト・アクション・トーン・ランキングといった動的なUIサーフェスをマッピングし、いつパーソナライズすべきでないかも検討します。ユーザーが所有する記憶やAIのアイデンティティ、パーソナライズによるロックインとポータビリティ、AIペルソナや合成ユーザーのテストも扱われます。
            </p>
          </div>

          <h3>第18章　身体性AIと長時間稼働するAIシステム</h3>
          <div className="prose">
            <p>
              速度・安全性・コストの観点から、まずシミュレーションと仮想世界での検証を優先し、重要なケースだけを物理的に検証するという方針が示されます。危害を及ぼさないデフォルトの振る舞い、安全な不作為（何もしない選択）、復旧、権限管理といった観点でロボティクスをテストします。センサーフュージョンや知覚・世界モデル、電力・レイテンシ・運用コスト、人間との相互作用と社会的受容性、AI同士の群れや社会のテスト、永続的に動き続けるAIシステムのテストまで幅広く扱われます。
            </p>
          </div>

          <h3>第19章　ガバナンス、規制、道徳的な未来</h3>
          <div className="prose">
            <p>
              ガバナンス・倫理・規制を、テスト入力とエビデンス要件に翻訳するという実務的な姿勢が中心です。現行の法律や標準は、時代とともに変わるものとして、普遍的な品質原則とは別に追跡すべきだとされます。AIの意識の可能性やモデルウェルフェア、AIの法的人格や自動化された法といった、やや思弁的なテーマにも踏み込んでいます。
            </p>
          </div>

          <h3>第20章　実践プレイブック</h3>
          <div className="prose">
            <p>
              本書を、チームやリポジトリのための具体的な運用システムに変換する章です。ケース・繰り返し実行・トレース・ルーブリック・スライス・ゲート・モニター・インシデント対応ループという「小さな品質システム」から始めることが推奨されています。この章の実践的な内容は、次の「実践ワーク」セクションで詳しく取り上げます。
            </p>
          </div>

          <h3>第21章　トークン化されたプロダクトの未来への予測</h3>
          <div className="prose">
            <p>
              未来のAI品質は「もっと大きなテスト計画」ではなく、プロダクトの振る舞いの大半が動的になり、多くの開発者がコーディングエージェントを管理する立場になり、検証のための計算量が生成のための計算量を上回っていく世界だと著者は予測します。
            </p>
          </div>
          <div className="diagram-block">
            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_SIX_PREDICTIONS} />
            </div>
            <div className="diagram-caption">図12　トークン化プロダクトの未来への6つの予測</div>
          </div>
          <div className="prose">
            <p>
              生成されたインターフェース・コード・ワークフロー・API呼び出し・説明文などを、すべて「候補となる成果物」として扱い、利用の前・最中・後にスコアリングし、モデル・プロンプト・データ・ツール・制約・ポリシー・ユーザー文脈のプロブナンス（来歴）を保持し続けることが、この未来に備える具体的な行動として示されています。
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
