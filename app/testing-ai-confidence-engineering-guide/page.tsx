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
      </main>
    </div>
  );
}
