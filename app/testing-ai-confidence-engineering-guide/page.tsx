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
      </main>
    </div>
  );
}
