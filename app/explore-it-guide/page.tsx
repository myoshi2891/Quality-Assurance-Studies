import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './explore-it-guide.css';

export const metadata: Metadata = {
  title: 'Explore It! を読み解く ― 探索的テスト実践フィールドガイド | QA Studies',
  description:
    'Elisabeth Hendrickson『Explore It!』に基づく探索的テスト実践フィールドガイド。チャーター、観察、ヒューリスティクスを網羅。',
};

const DIAGRAM_0 = `flowchart LR
subgraph Checking["チェック（Checking）: 事前に台本を書く"]
    direction TB
    A1["要件・仕様"] --> A2["事前にテストケースを設計"]
    A2 --> A3["手順どおりに実行"]
    A3 --> A4{"期待結果と一致?"}
    A4 -->|Yes| A5["合格"]
    A4 -->|No| A6["不合格"]
end

subgraph Exploring["探索（Exploring）: 学習と設計と実行が同時進行"]
    direction TB
    B1["学習 Learn"] --> B2["次の一手を設計 Design"]
    B2 --> B3["実行して観察 Execute"]
    B3 --> B1
end`;

const DIAGRAM_1 = `flowchart TD
S1["準備<br/>基礎を理解する<br/>(チェックと探索の違い)"] --> S2["Step1<br/>チャーターを書く"]
S2 --> S3["Step2<br/>タイムボックスされた<br/>セッションを実施"]
S3 --> S4["Step3<br/>観察する<br/>(見えないものを見える化)"]
S4 --> S5["Step4<br/>変化(バリエーション)を<br/>意図的に加える"]
S5 --> S6["Step5<br/>結果を評価する<br/>(オラクルを選ぶ)"]
S6 --> S7["Step6<br/>次元を加える<br/>(順序/エンティティ/状態/生態系)"]
S7 --> S8["Step7<br/>コンテキストに応じて適用<br/>(API/既存システム/要件)"]
S8 --> S9["Step8<br/>デブリーフィングし<br/>次のチャーターへ活かす"]
S9 -.->|継続的に繰り返す| S2`;

export default function ExploreItGuidePage() {
  return (
    <div className="explore-it-layout">
      <NavBar />
      <main>
        {/* Hero */}
        <div className="hero">
          <span className="kicker">FIELD GUIDE · SOFTWARE QA</span>
          <h1>Explore It! を読み解く</h1>
          <p className="sub">
            初学者のための探索的テスト実践フィールドガイド。原著の要点をステップバイステップのベストプラクティスとして再構成しました。
          </p>
          <dl className="bookcard">
            <dt>原著</dt>
            <dd>Explore It!: Reduce Risk and Increase Confidence with Exploratory Testing</dd>
            <dt>著者</dt>
            <dd>Elisabeth Hendrickson</dd>
            <dt>出版</dt>
            <dd>Pragmatic Bookshelf, 2013年初版</dd>
            <dt>参照元</dt>
            <dd>
              <a
                href="https://www.oreilly.com/library/view/explore-it/9781941222584/f_0000.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                oreilly.com/library/view/explore-it/9781941222584
              </a>
            </dd>
          </dl>
          <p className="lede">
            図解はすべて Mermaid
            で作成し、比較・整理には表を用いています。ASCIIアートによる図解は使用していません。2026年9月5日時点の情報をWeb検索で確認し、末尾に出典URLを一覧化しています。
          </p>
        </div>

        {/* 01: Overview */}
        <section id="overview">
          <div className="sec-tag">
            <span className="num">01</span>
            <span className="label">OVERVIEW</span>
          </div>
          <h2>この本はどんな本か</h2>
          <p>
            <strong>Elisabeth Hendrickson</strong>
            は1980年からコードを書き始めたベテランのテスター・開発者・アジャイル実践者で、2010年にAgile
            AllianceのGordon Pask
            Award（アジャイルコミュニティへの貢献に贈られる賞）を受賞しています。GoogleのTech
            Talkでのアジャイルテスト講演や、後述する「Test Heuristics Cheat
            Sheet」でも広く知られる人物です。
          </p>
          <p>
            <code>Agile Testing</code>の共著者であるJanet
            Gregoryは、本書について「開発チームの全員の机に置かれるべき本であり、探索的テストをチームに導入する際にいつも持ち歩いている本だ」という趣旨の推薦の言葉を寄せています。
          </p>
          <p>本書は3部構成・全13章＋付録2つで構成されています。</p>
          <div className="tblwrap">
            <table>
              <thead>
                <tr>
                  <th>Part</th>
                  <th>テーマ</th>
                  <th>主な内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Part 1</td>
                  <td>Establishing Foundations（基礎を固める）</td>
                  <td>チャーター、観察、バリエーション探し、結果評価</td>
                </tr>
                <tr>
                  <td>Part 2</td>
                  <td>Adding Dimensions（次元を加える）</td>
                  <td>操作の順序、エンティティと関係、状態遷移、エコシステム</td>
                </tr>
                <tr>
                  <td>Part 3</td>
                  <td>Putting It in Context（文脈に当てはめる）</td>
                  <td>UIがない場合、既存システム、要件定義の場、テスト戦略全体への統合</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            対象読者は「初級から上級まで」とされており、テスターに限らず開発者・プロダクトオーナーが読んでも実践的な発見がある構成になっています。
          </p>
        </section>

        {/* 02: Why Exploratory Testing */}
        <section id="why">
          <div className="sec-tag">
            <span className="num">02</span>
            <span className="label">WHY EXPLORATORY TESTING</span>
          </div>
          <h2>なぜ探索的テストが必要なのか</h2>
          <h3>チェック（Checking）と探索（Exploring）は別物</h3>
          <p>
            ThoughtWorksのチーフサイエンティストであり、多くのソフトウェア開発者に影響を与えてきた
            <strong>Martin Fowler</strong>
            は、自身のbliki（ブログ+wiki）で探索的テストを次のように整理しています。
          </p>
          <ul>
            <li>
              <strong>スクリプト化されたテスト（Checking）</strong>
              ：あらかじめ書かれた手順と期待結果に沿って実行し、一致しなければ失敗と判定する。
            </li>
            <li>
              <strong>探索的テスト（Exploring）</strong>
              ：ソフトウェアの特性そのものを探りながら、発見した挙動が「妥当」か「不具合」かをその場で判断していく、学習・設計・実行が一体化したスタイル。
            </li>
          </ul>
          <p>
            Fowlerは自動化されたセルフテストの強力な推進者として知られますが、それでも「自動テストは頑丈なバグ捕獲網を提供するが、その網が本当に必要な範囲を覆っているかどうかを確かめるには探索的テストが必要だ」という趣旨を述べています。
          </p>
          <p>
            探索的テストという用語自体は<strong>Cem Kaner</strong>
            が1984年に提唱したとされ、Wikipediaに引用されている定義では「個々のテスターが自身の作業品質を継続的に最適化する、個人の自由と責任を重視するテストスタイルであり、テストに関連する学習・設計・実行・結果解釈を、プロジェクトを通じて並行して行う相互補完的な活動として扱うもの」とされています。
            <strong>James Marcus Bach</strong>
            とKanerは、探索的テストは手法というより「思考様式（マインドセット）」であり、わずかに探索的なもの（曖昧・緩いスクリプト）から完全に自由な探索まで連続体をなす、とも説明しています。
          </p>
          <div className="quote">
            探索的テストとは、テスト対象のソフトウェアについて学習しながら、同時にテストを設計・実行し、直前のテストで得たフィードバックを次のテストに活かしていく活動である。
            <cite>Elisabeth Hendrickson の定義として広く引用される言葉（意訳）</cite>
          </div>

          <div className="figure">
            <div className="cap">FIGURE 02-A ｜ チェックと探索の違い</div>
            <div className="mermaid-target">
              <Mermaid chart={DIAGRAM_0} />
            </div>
          </div>
          <p>
            チェックは「安全網（セーフティネット）」であり、探索はその網がカバーしきれていない領域を能動的に探しに行く活動、という対比がよく使われます。実務では両者は対立するものではなく、状況に応じて配分が変わる
            <strong>連続体</strong>として組み合わせて使うのが基本です。
          </p>
        </section>

        {/* 03: Core Elements */}
        <section id="elements">
          <div className="sec-tag">
            <span className="num">03</span>
            <span className="label">CORE ELEMENTS</span>
          </div>
          <h2>探索的テストの本質的要素</h2>
          <p>
            本書 第1章（On Testing and
            Exploration）では、探索的テストを成立させる要素として次のようなものが挙げられています。
          </p>
          <div className="tblwrap">
            <table>
              <thead>
                <tr>
                  <th>要素</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>タイムボックス化されたセッション</td>
                  <td>探索を「時間で区切った作業単位」として扱い、集中と説明責任を両立させる</td>
                </tr>
                <tr>
                  <td>チャーター（憲章／指針）</td>
                  <td>何を、何を使って、何のために探索するかを事前に短く言語化する</td>
                </tr>
                <tr>
                  <td>同時並行の学習・設計・実行</td>
                  <td>あらかじめ全テストを設計せず、直前の結果から次の一手を組み立てる</td>
                </tr>
                <tr>
                  <td>観察力</td>
                  <td>画面だけでなくログ・コンソール・裏側の状態まで注意深く見る</td>
                </tr>
                <tr>
                  <td>バリエーションの発見</td>
                  <td>「変化しうるもの（変数）」を洗い出し、意図的にそれを変えてみる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            これらは独立した技法ではなく、
            <strong>1つのセッションの中で循環的に使われるスキルセット</strong>
            である点が本書の重要なメッセージです。
          </p>
        </section>

        {/* 04: Roadmap */}
        <section id="roadmap">
          <div className="sec-tag">
            <span className="num">04</span>
            <span className="label">ROADMAP</span>
          </div>
          <h2>実践ロードマップ（全体像）</h2>
          <p>
            初学者がゼロから探索的テストを実務に取り入れる際の全体の流れを、本書の構成に沿って1つのループとして可視化すると、以下のようになります。
          </p>
          <div className="figure">
            <div className="cap">FIGURE 04-A ｜ 探索的テストの実践ループ</div>
            <div className="mermaid-target">
              <Mermaid chart={DIAGRAM_1} />
            </div>
          </div>
          <div className="stepgrid">
            <div>
              <b>STEP 1</b>チャーター作成
            </div>
            <div>
              <b>STEP 2</b>セッション構造化
            </div>
            <div>
              <b>STEP 3</b>観察
            </div>
            <div>
              <b>STEP 4</b>バリエーション
            </div>
            <div>
              <b>STEP 5</b>結果評価
            </div>
            <div>
              <b>STEP 6</b>次元追加
            </div>
            <div>
              <b>STEP 7</b>文脈適用
            </div>
            <div>
              <b>STEP 8</b>デブリーフィング
            </div>
          </div>
          <p>以降のセクションで、各ステップを順番に詳しく解説します。</p>
        </section>
      </main>
    </div>
  );
}
