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

        {/* Placeholder sections for Category B, C, D */}
        <section id="step2" />
        <section id="step3" />
        <section id="step4" />
        <section id="step5" />
        <section id="step6" />
        <section id="step7" />
        <section id="step8" />
        <section id="step9" />
        <section id="step10" />
        <section id="checklist" />
        <section id="pitfalls" />
        <section id="references" />
      </main>
    </div>
  );
}
