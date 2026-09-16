import type { Metadata } from 'next';
import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './perfect-software-guide.css';

export const metadata: Metadata = {
  title: '『Perfect Software』初学者ガイド ｜ テストの限界と実践ベストプラクティス',
  description: 'Gerald M. Weinberg著『Perfect Software: And Other Illusions about Testing』を初学者向けに解説する実践ガイド。',
};

const DIAGRAM_1 = `flowchart TB
    classDef hub fill:#c9c4ef,stroke:#3f3d8a,color:#221f52,stroke-width:2px;
    classDef done fill:#bfe4d2,stroke:#2f6b4f,color:#123722,stroke-width:2px;
    Title["Perfect Software 書籍全体像"]
    Title --> Part1["Part1 なぜテストするのか"]
    Title --> Part2["Part2 心理とテストの質"]
    Title --> Part3["Part3 罠を見抜き実践する"]
    Part1 --> P1a["Ch1-2 テストは情報収集である"]
    P1a --> P1b["Ch3-4 全数テスト不可能とデバッグとの違い"]
    Part2 --> P2a["Ch5-8 メタテストと良いテストの基準"]
    P2a --> P2b["Ch6-7 情報免疫と防衛反応"]
    P2b --> P2c["Ch9-14 誤解の解消と情報処理サイクル"]
    Part3 --> P3a["Ch15-16 テストを楽にする設計とレビュー"]
    P3a --> P3b["Ch17-18 テストの詐欺を見抜く"]
    class Title hub
    class P1b,P2c,P3b done`;

export default function PerfectSoftwareGuidePage() {
  return (
    <div className="perfect-software-layout">
      <a className="skip-link" href="#main-content">
        本文へスキップ
      </a>

      <NavBar />

      <div className="main">
        <header className="hero">
          <span className="hero-kicker">
            <i className="ti ti-books"></i>Classic Software Testing Books
          </span>
          <h1>
            『Perfect Software: And Other Illusions about Testing』
            <br />
            初学者ガイド
          </h1>
          <p className="hero-sub">
            ジェラルド・M・ワインバーグに学ぶ「テストの限界」と実践ベストプラクティス
          </p>
          <p className="lede">
            ソフトウェアテストの古典を、テストを学び始めたばかりの方向けにステップ・バイ・ステップで解説します。図解はすべてMermaid、表はすべてMarkdown由来のHTML表で構成し、巻末には著名な国際的テスト専門家の発言・記事を含む参考ソースのURLを掲載しています。
          </p>
        </header>

        <main id="main-content" className="content prose">
          {/* Section 00: intro */}
          <section className="section" id="intro">
            <h2>
              <i className="ti ti-info-circle"></i>この記事について / 対象読者
            </h2>
            <div className="lede-note">
              前提知識は不要です。専門用語が出てきた際は、その都度やさしく解説します。
            </div>
            <ul>
              <li>
                ソフトウェアテストを学び始めたばかりのエンジニア、これからQAやテスターを目指す方
              </li>
              <li>
                「テストをどれだけやれば十分か」「なぜバグが出荷後も見つかるのか」といった疑問を持つ開発者・マネージャー
              </li>
            </ul>
            <p>
              本書は特定のテスト技法（境界値分析や同値分割など）を教える本ではありません。むしろ「テストとは何をする行為で、何ができて、何ができないのか」という、テストに関わるすべての人が誤解しがちな前提そのものを問い直す一冊です。だからこそ、初学者が最初に読むと、後々の技法学習の土台がぐっと安定します。
            </p>
          </section>

          {/* Section 01: book-info */}
          <section className="section" id="book-info">
            <h2>
              <i className="ti ti-book-2"></i>書籍の基本情報
            </h2>

            <div className="book-card">
              <div className="book-card-cover">
                <i className="ti ti-bug"></i>
                <span>
                  Perfect
                  <br />
                  Software
                </span>
              </div>
              <div className="book-card-body">
                <h3>Perfect Software: And Other Illusions about Testing</h3>
                <p style={{ margin: 0, color: 'var(--ink-soft)' }}>
                  Gerald M. Weinberg 著（Dorset House Publishing, 2008）
                </p>
                <div className="book-card-tags">
                  <span className="tag">ソフトウェアテスト</span>
                  <span className="tag gold">ソフトウェア品質</span>
                  <span className="tag plum">組織心理</span>
                </div>
              </div>
            </div>

            <div className="table-wrap">
              <div className="table-title">書籍データ</div>
              <table className="kv-table">
                <tbody>
                  <tr>
                    <th>原題</th>
                    <td>Perfect Software: And Other Illusions about Testing</td>
                  </tr>
                  <tr>
                    <th>著者</th>
                    <td>
                      Gerald M. Weinberg（共著協力 James Bach、当初の共同執筆者として Elisabeth Hendrickson が関わった経緯も知られる）
                    </td>
                  </tr>
                  <tr>
                    <th>出版社</th>
                    <td>Dorset House Publishing</td>
                  </tr>
                  <tr>
                    <th>出版年</th>
                    <td>2008年</td>
                  </tr>
                  <tr>
                    <th>ISBN</th>
                    <td>978-0-932633-69-9</td>
                  </tr>
                  <tr>
                    <th>ジャンル</th>
                    <td>ソフトウェアテスト・ソフトウェア品質・組織心理</td>
                  </tr>
                  <tr>
                    <th>主な既刊著作</th>
                    <td>The Psychology of Computer Programming など40冊以上</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              ワインバーグは「人間の心理」と「技術」の両面からソフトウェア開発を論じてきた著者で、本書はその集大成として、テストという行為を技術論としてだけでなく、情報・意思決定・組織心理の観点から解き明かしています。
            </p>

            <p>
              出版元の公式ページには、著名な文脈駆動テスト（Context-Driven Testing）派の専門家からの推薦文が並んでいます。たとえば、
              <em>Lessons Learned in Software Testing</em>
              の著者でもあるテストコンサルタントの James Bach は、ワインバーグを「今生きている中で最も優れたテスター」だと評しています。テスト・トレーニング会社 DevelopSense の Michael Bolton や、<em>Tester Tested!</em> ブログの著者 Pradeep Soundararajan、コンサルタントの Fiona Charles も、テストの「できること／できないこと」を明快に説明した本として本書を推薦しています。
            </p>

            <p>
              なお、アジャイル・テスト分野で国際的に知られるコンサルタント Markus Gärtner は、ワインバーグを追悼する連載レビューの中で本書を取り上げ、当初共著者として名を連ねていなかった James Bach が実質的に執筆を引き継いで完成させたという成立の経緯を紹介しています。
            </p>
          </section>

          {/* Section 02: structure */}
          <section className="section" id="structure">
            <h2>
              <i className="ti ti-map"></i>全体像を1枚で理解する　本書の構成マップ
            </h2>
            <p>
              本書は大きく3つのパートに分けて理解すると見通しがよくなります。「なぜテストするのか」という前提の確認から始まり、「テストの質を左右する人間の心理」を経て、「テスト現場で出会う落とし穴の回避」へと進みます。
            </p>

            <div className="diagram-wrap">
              <Mermaid chart={DIAGRAM_1} />
            </div>
            <p className="diagram-caption">図1　書籍全体の3部構成マップ</p>

            <p>
              このガイドでも、この3パートの流れに沿ってStep 1〜11として解説していきます。
            </p>
          </section>

          {/* Section 03: core-message */}
          <section className="section" id="core-message">
            <h2>
              <i className="ti ti-quote"></i>核心メッセージ　「完璧なソフトウェア」という幻想
            </h2>
            <p>
              本書のタイトルにある「完璧なソフトウェア」は、皮肉を込めた言葉です。ワインバーグは、テストによって「バグが0件であること」を証明することはできないと繰り返し説きます。この考え方の源流として本書が冒頭で引用しているのが、計算機科学の先駆者エドガー・ダイクストラの有名な言葉です。
            </p>

            <blockquote>
              &ldquo;Program testing can be used to show the presence of bugs, but never to show their absence!&rdquo;
              <cite>
                — Edsger W. Dijkstra（&ldquo;Structured Programming&rdquo;, 1969 / EWD 268 より）
              </cite>
            </blockquote>

            <p>
              日本語で言えば「テストはバグの存在を示すことはできても、バグが存在しないことを証明することは決してできない」という意味です。本書全体のテーマは、この一文に集約されていると言っても過言ではありません。
            </p>

            <p>ここから導かれる実務上の結論はシンプルです。</p>
            <ul>
              <li>
                テストの目的は「品質を保証すること」ではなく、「意思決定に使える情報を集めること」である
              </li>
              <li>「テストにパスした」は「バグがない」の証明にはならない</li>
              <li>
                逆に「テストに落ちるものがあっても出荷してよい」というビジネス判断も、状況次第ではあり得る
              </li>
            </ul>
            <p>
              これらは初学者ほど誤解しやすいポイントなので、最初の心構えとしてしっかり押さえておきましょう。
            </p>
          </section>

          {/* Section 04: chapters */}
          <section className="section" id="chapters">
            <h2>
              <i className="ti ti-list-numbers"></i>章立て一覧　全18章 + エピローグ
            </h2>
            <p>
              本書の構成を、初学者にも分かるよう章タイトルと要点とともに一覧化しました。
            </p>

            <div className="table-wrap">
              <div className="table-title">章立て一覧</div>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>原題（章タイトル）</th>
                    <th>この章の要点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Why Do We Bother Testing?</td>
                    <td>
                      人間は完璧な思考者ではないため、意思決定のリスクを減らす情報としてテストが必要になる
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>What Testing Cannot Do</td>
                    <td>
                      テストは無償でも瞬時でもできず、集めた情報が必ず活用されるとも限らない
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Why Not Just Test Everything?</td>
                    <td>
                      テストケースは理論上無限であり、テストは常にサンプリングにすぎない
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>What&apos;s the Difference Between Testing and Debugging?</td>
                    <td>
                      テストは情報収集、デバッグは原因特定と修正という別の活動である
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Meta-Testing</td>
                    <td>
                      テストの結果そのものだけでなく、「その情報がどれだけ信頼できるか」というメタ情報が重要になる
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Information Immunity</td>
                    <td>
                      人は自分にとって都合の悪い情報を無意識に拒む「情報免疫」を持っている
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>How to Deal With Defensive Reactions</td>
                    <td>
                      防衛反応を乗り越えるには、恐れの正体を見極め、批判的思考を訓練する必要がある
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>What Makes a Good Test?</td>
                    <td>
                      テストの「良さ」は事後にしか分からず、統計的にしか見積もれない
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Major Fallacies About Testing</td>
                    <td>
                      テストにまつわる根強い誤解を具体的に列挙し、反証する
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Testing Is More Than Banging Keys</td>
                    <td>
                      テストとは単純作業ではなく、テスターにも技能と訓練が必要な知的活動である
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Information Intake</td>
                    <td>
                      起きた出来事をどう観察し取り込むかが、その後の判断の質を左右する
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Making Meaning</td>
                    <td>
                      取り込んだ事実に対してどんな意味づけをするかで、対応が変わってくる
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Determining Significance</td>
                    <td>
                      見つかった問題がどれだけ重大かは、文脈によって変わる相対的な判断である
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Making a Response</td>
                    <td>
                      情報を得た後、誰に何をどう伝えて対応するかを設計する
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Preventing Testing from Growing More Difficult</td>
                    <td>
                      システムを小さく保ち、疎結合に作ることでテストの負担を将来にわたって抑える
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Testing Without Machinery</td>
                    <td>
                      自動化されたテストだけでは不十分であり、レビューやウォークスルーが有効な補完手段になる
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Testing Scams</td>
                    <td>
                      「魔法のツール」を売り込む営業トークの典型的な手口を見抜く
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Oblivious Scams</td>
                    <td>
                      悪意はなくとも結果的に誤解を招く、無自覚な「スキャム」的報告のパターンを扱う
                    </td>
                  </tr>
                  <tr>
                    <td>—</td>
                    <td>Epilogue</td>
                    <td>
                      ここまでの議論を振り返り、テストとの向き合い方を再確認する
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
