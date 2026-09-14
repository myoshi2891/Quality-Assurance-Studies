import React from 'react';
import type { Metadata } from 'next';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './tdd-guide.css';

export const metadata: Metadata = {
  title: 'Test-Driven Development: By Example ガイド ─ 初学者のためのステップバイステップ解説',
  description:
    'Kent Beck著『Test-Driven Development: By Example』を初学者向けに解説するステップバイステップガイド。Red-Green-Refactor、Canon TDD、Three Laws of TDD、AI時代のTDDまでを図解付きで紹介します。',
};

/* ---------- Mermaid Diagram Sources ---------- */
const DIAGRAMS = {
  dgCycle: `flowchart LR
    A["Redフェーズ - 失敗するテストを書く"] --> B["Greenフェーズ - テストを通す最小限のコードを書く"]
    B --> C["Refactorフェーズ - 重複を除去し設計を整理する"]
    C --> A
    classDef done fill:#e1f0e4,stroke:#2f6b45,color:#173a20;
    class B done`,

  dgStructure: `flowchart TD
    A["Part I The Money Example - 多通貨Moneyオブジェクトを題材にTDDサイクルを体得する"] --> B["Part II The xUnit Example - テストフレームワーク自体をTDDで構築する"]
    B --> C["Part III Patterns for Test-Driven Development - TDDの概念とプラクティスをパターンとして体系化する"]
    classDef hub fill:#f7ecd2,stroke:#b8860b,color:#2a2118;
    class C hub`,

  dgTax: `flowchart TD
    T1["テスト1 - 0円の税込み価格は0円"] --> C1["Fake Itで0を返すだけの実装"]
    C1 --> T2["テスト2 - 100円の税込み価格は110円"]
    T2 --> C2["Triangulateで一般化した計算式に到達"]
    C2 --> C3["Refactorでマジックナンバーを定数に抽出"]
    classDef done fill:#e1f0e4,stroke:#2f6b45,color:#173a20;
    class C3 done`,

  dgXunit: `flowchart TD
    A["TestCase - 1つのテストメソッドを表す"] --> B["TestResult - 成功・失敗・エラーの数を集計する"]
    B --> C["TestSuite - 複数のTestCaseをまとめて実行する"]
    C --> D["Fixture - setUpとtearDownでテスト前後の状態を整える"]
    classDef hub fill:#f7ecd2,stroke:#b8860b,color:#2a2118;
    class C hub`,

  dgLaws: `flowchart TD
    L1["第1法則 - 失敗するテストを書くまでプロダクションコードを書いてはならない"] --> L2["第2法則 - コンパイルが通らない、または失敗する以上のテストコードを書いてはならない"]
    L2 --> L3["第3法則 - 現在失敗しているテストを通す以上のプロダクションコードを書いてはならない"]
    L3 --> L1`,

  dgCanon: `flowchart TD
    A["1. カバーしたいテストシナリオのリストを書く"] --> B["2. リストから1件を選び具体的で実行可能なテストにする"]
    B --> C["3. テストとこれまでの全テストが通るようにコードを変更する"]
    C --> D["必要であればリファクタリングする"]
    D --> E{"リストは空になったか"}
    E -- いいえ --> B
    E -- はい --> F["完了"]
    classDef done fill:#e1f0e4,stroke:#2f6b45,color:#173a20;
    class F done`,

  dgAi: `flowchart TD
    H["開発者がテストシナリオのリストを与える"] --> AI["AIエージェントが1件のテストを実装する"]
    AI --> T{"テストは意図どおり失敗するか"}
    T -- はい --> C["AIまたは開発者が最小限の実装を書く"]
    C --> G{"全テストが通るか"}
    G -- はい --> R["リファクタリングして次のテストへ進む"]
    G -- いいえ --> Guard["失敗テストの削除を許可せず実装を修正させる"]
    Guard --> C
    T -- いいえ --> Fix["テストの意図と粒度を見直す"]
    Fix --> AI
    R --> AI
    classDef hub fill:#f7ecd2,stroke:#b8860b,color:#2a2118;
    class Guard hub`,
};

export default function Page() {
  return (
    <div className="tdd-guide-layout">
      <NavBar />

      <main className="main">
        <header className="hero">
          <p className="hero-eyebrow">CLASSIC SOFTWARE TESTING BOOKS シリーズ</p>
          <h1>Test-Driven Development: By Example</h1>
          <p className="hero-sub">初学者のためのステップバイステップ解説ガイド</p>
          <div className="hero-meta">
            <span className="chip">
              <i className="ti ti-user"></i>Kent Beck 著
            </span>
            <span className="chip">
              <i className="ti ti-calendar"></i>2002年11月刊行
            </span>
            <span className="chip">
              <i className="ti ti-file-text"></i>240ページ
            </span>
            <span className="chip">
              <i className="ti ti-building"></i>Addison-Wesley Professional
            </span>
          </div>
        </header>

        <div id="section-root">
          {/* Section 01: この本について */}
          <section id="book-info" className="section prose">
            <p className="section-eyebrow">
              <i className="ti ti-book"></i>01
            </p>
            <h2>この本について</h2>
            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-info-circle"></i>書誌情報
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>書名</strong>
                    </td>
                    <td>Test-Driven Development: By Example</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>著者</strong>
                    </td>
                    <td>Kent Beck</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>出版社</strong>
                    </td>
                    <td>Addison-Wesley Professional</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>出版年月</strong>
                    </td>
                    <td>2002年11月</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>ページ数</strong>
                    </td>
                    <td>240ページ</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>難易度</strong>
                    </td>
                    <td>中級〜上級（ただし実例は平易）</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>主な功績</strong>
                    </td>
                    <td>テスト駆動開発（TDD）という手法を体系立てて世界に広めた最初期の書籍のひとつ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Kent Beckは、Extreme
              Programming（XP）の創始者であり、2001年の「アジャイルソフトウェア開発宣言」の共著者の一人でもあります。TDDはもともとXPのプラクティスのひとつとして育まれ、本書によって独立した実践技法として広く認知されるようになりました。
            </p>
            <p>
              本書の最大の特徴は、
              <strong>
                抽象的な理論の説明ではなく、実際にコードを書きながらTDDのサイクルを追体験させる「By Example（実例による）」形式
              </strong>
              にある点です。読者は著者と一緒に、小さすぎるほど小さなステップでコードを書き、テストを赤くし、緑にし、リファクタリングする過程を目撃することになります。
            </p>
          </section>

          {/* Section 02: 対象読者と前提知識 */}
          <section id="audience" className="section prose">
            <p className="section-eyebrow">
              <i className="ti ti-users"></i>02
            </p>
            <h2>対象読者と前提知識</h2>
            <ul>
              <li>プログラミングの基礎（変数・関数・クラス・条件分岐）を理解している人</li>
              <li>
                何らかの言語で簡単なコードが書ける人（本書はJavaとPythonで例示されますが、考え方はどの言語にも応用可能）
              </li>
              <li>単体テストという概念に初めて触れる、あるいは触れたばかりの人</li>
              <li>
                「テストを書くのは面倒」「TDDは遅くなる」と感じたことがある人（本書はまさにその誤解を解くために書かれています）
              </li>
            </ul>
            <p>
              前提知識として、xUnit系のテストフレームワーク（JUnit、pytestなど）の使用経験があると理解がスムーズですが、必須ではありません。
            </p>
          </section>

          {/* Section 03: TDDとは何か */}
          <section id="what-is-tdd" className="section prose">
            <p className="section-eyebrow">
              <i className="ti ti-refresh"></i>03
            </p>
            <h2>TDDとは何か</h2>
            <p>
              TDD（Test-Driven Development、テスト駆動開発）は、
              <strong>プロダクションコードを書く前に、まずそのコードが満たすべき振る舞いをテストとして書く</strong>
              という開発手法です。Martin Fowlerの定義を要約すると、TDDは次の3つのステップを繰り返すことで進みます。
            </p>
            <ol>
              <li>これから追加したい機能に対するテストを書く</li>
              <li>そのテストが通るまで最小限の実装コードを書く</li>
              <li>新旧のコードをリファクタリングして構造を整える</li>
            </ol>
            <p>
              この3ステップは一般に<strong>Red → Green → Refactor</strong>というサイクル名で知られています。
            </p>

            <div className="mermaid-wrap" id="dg-cycle">
              <Mermaid chart={DIAGRAMS.dgCycle} />
            </div>
            <p className="mermaid-caption">図: Red-Green-Refactorサイクル</p>

            <ul>
              <li>
                <strong>Red（赤）</strong>:
                まだ実装していない機能に対するテストを書く。当然このテストは失敗する（赤くなる）。
              </li>
              <li>
                <strong>Green（緑）</strong>:
                そのテストを通すために、可能な限り最小限のコードを書く。美しさは後回しでよい。
              </li>
              <li>
                <strong>Refactor（リファクタリング）</strong>:
                テストが通っている状態（緑）を維持したまま、コードの重複や不要な複雑さを取り除く。
              </li>
            </ul>

            <div className="callout">
              <i className="ti ti-bulb"></i>
              <p>
                Kent
                Beckは本書冒頭で、TDDの目的を「恐怖（fear）の排除」だと述べています。常に実行可能なテストスイートがあれば、変更やリファクタリングへの恐怖を取り除き、自信を持ってコードを改善し続けられる、というのが本書全体を貫く思想です。
              </p>
            </div>
          </section>

          {/* Section 04: 本書の3部構成 */}
          <section id="structure" className="section prose">
            <p className="section-eyebrow">
              <i className="ti ti-stack-2"></i>04
            </p>
            <h2>本書の3部構成</h2>
            <p>本書は大きく3つのパートに分かれています。</p>

            <div className="mermaid-wrap" id="dg-structure">
              <Mermaid chart={DIAGRAMS.dgStructure} />
            </div>
            <p className="mermaid-caption">図: 本書全体の3部構成</p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-list-details"></i>各パートの概要
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Part</th>
                    <th>章</th>
                    <th>主なテーマ</th>
                    <th>学べること</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Part I: The Money Example</td>
                    <td>1〜17章</td>
                    <td>多通貨（ドル・フラン）に対応したMoneyクラスの実装</td>
                    <td>Red-Green-Refactorの基本サイクル、小さなステップの威力、テストリストの使い方</td>
                  </tr>
                  <tr>
                    <td>Part II: The xUnit Example</td>
                    <td>18〜24章</td>
                    <td>xUnit系テストフレームワークそのものをTDDで作る</td>
                    <td>テストフレームワークの内部構造の理解、インフラコードもTDDで作れることの実証</td>
                  </tr>
                  <tr>
                    <td>Part III: Patterns for Test-Driven Development</td>
                    <td>25〜32章</td>
                    <td>TDDに関する65個のパターン集と考察</td>
                    <td>テストパターン、設計パターン、リファクタリングパターンの語彙、TDDの限界と応用範囲</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Part I と Part II の終わりには「Retrospective（回顧）」という振り返り章が置かれており、実装しながら得られた気づきや設計上の教訓がまとめられているのも本書の特徴です。
            </p>
          </section>

          {/* Section 05: Part I: Moneyの例 */}
          <section id="part1" className="section prose">
            <p className="section-eyebrow">
              <i className="ti ti-coin"></i>05
            </p>
            <h2>Part I: Moneyの例で学ぶTDDの基本サイクル</h2>
            <p>
              Part Iは、ドルとフランという2つの通貨を扱うMoneyクラスを、1章ごとに少しずつ機能を追加しながら実装していく、いわば「TDD入門の写経パート」です。
            </p>

            <h3>ステップ・バイ・ステップの流れ</h3>
            <ol>
              <li>
                <strong>やりたいことをテストリストとして書き出す</strong>
                （例:「5ドル×2は10ドルになるべきだ」「異なる通貨同士は直接足せない」など）
              </li>
              <li>
                <strong>リストから1つを選び、実際に動くテストコードに変換する</strong>
              </li>
              <li>
                <strong>そのテストをコンパイルが通る最小限の形にする</strong>
                （存在しないクラスやメソッドを仮に作るだけでもよい）
              </li>
              <li>
                <strong>テストを実行し、失敗（Red）することを確認する</strong>
              </li>
              <li>
                <strong>テストを通すための最小限のコードを書く</strong>（多少ズルをしてもよい）
              </li>
              <li>
                <strong>テストが通ったら（Green）、コードの重複や設計上の課題をリファクタリングする</strong>
              </li>
              <li>
                <strong>テストリストに新しく気づいた項目を追加し、2に戻る</strong>
              </li>
            </ol>
            <p>
              この「小さすぎるくらい小さなステップ」の積み重ねこそが本書の核心であり、初学者が最初に驚くポイントでもあります。慣れてきたらステップを大きくしてよい、と本書内でも述べられています。
            </p>

            <h3>テストを通す3つの戦略（Green Barパターン）</h3>
            <p>
              Part Iを通じて、Kent Beckはテストを通すための3つの異なるアプローチを使い分けます。これは28章「Green Bar Patterns」として後にパターン化されます。
            </p>
            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-bulb"></i>Green Barパターンの使い分け
              </div>
              <table>
                <thead>
                  <tr>
                    <th>手法</th>
                    <th>概要</th>
                    <th>使うタイミング</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fake It（Til You Make It）</td>
                    <td>まず固定値やベタ書きの値を返すだけで、とにかくテストを通す</td>
                    <td>実装の方向性がまだ見えていない、最初の一歩を素早く踏み出したいとき</td>
                  </tr>
                  <tr>
                    <td>Triangulate（三角測量）</td>
                    <td>2つ以上のテストケースが示す共通点から、一般化された実装を導き出す</td>
                    <td>どこまで一般化してよいか確信が持てないとき</td>
                  </tr>
                  <tr>
                    <td>Obvious Implementation（明白な実装）</td>
                    <td>実装方法が明白なら、最初から正しい実装をそのまま書く</td>
                    <td>実装が単純で自信を持って書けるとき</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              これらは対立する手法ではなく、
              <strong>開発者の自信の度合いに応じて使い分けるための引き出し</strong>
              です。自信がないときほど小さなステップ（Fake It）を、自信があるときは大きなステップ（Obvious Implementation）を選ぶ、というのが本書の教えです。
            </p>

            <h3>オリジナルの例で追体験する（税込み価格計算）</h3>
            <p>
              書籍本文のMoneyの実装をそのまま転載する代わりに、同じ考え方を使ったオリジナルの練習例を示します。「小計に消費税（10%）を加算した金額を返す関数」をTDDで作るケースです。
            </p>

            <div className="mermaid-wrap" id="dg-tax">
              <Mermaid chart={DIAGRAMS.dgTax} />
            </div>
            <p className="mermaid-caption">図: 税込み価格計算の例でRed-Green-Refactorを追体験する</p>

            <p>
              以下は<strong>1つのファイルを 5 回書き換えていく過程</strong>です。各ステップのコードブロックはその時点のファイル全体を表しており、<code>pytest tax_example.py</code> を実行するとそのステップのテストが走ります。1つのブロックに全ステップを並べて書くと、後から定義した<code>税込み価格</code>が先の定義を上書きしてしまい、Red が Red として観測できなくなる点に注意してください。
            </p>

            <div className="code-block">
              <div className="code-head">
                <span>ステップ1: Red — tax_example.py</span>
                <span>Python</span>
              </div>
              <pre>
                <code>
                  <div className="code-line"><span className="hl-cm"># まだ 税込み価格 が存在しないので NameError で失敗する（これが Red）</span></div>
                  <div className="code-line"><span className="hl-kw">def</span> <span className="hl-fn">test_税込み価格_0円の場合は0円</span>():</div>
                  <div className="code-line">    <span className="hl-kw">assert</span> 税込み価格(<span className="hl-num">0</span>) == <span className="hl-num">0</span></div>
                </code>
              </pre>
            </div>

            <div className="code-block">
              <div className="code-head">
                <span>ステップ2: Green (Fake It) — tax_example.py</span>
                <span>Python</span>
              </div>
              <pre>
                <code>
                  <div className="code-line"><span className="hl-cm"># ベタ書きの 0 を返すだけで、今あるテストは通る（Fake It）</span></div>
                  <div className="code-line"><span className="hl-kw">def</span> <span className="hl-fn">税込み価格</span>(小計):</div>
                  <div className="code-line">    <span className="hl-kw">return</span> <span className="hl-num">0</span></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"><span className="hl-kw">def</span> <span className="hl-fn">test_税込み価格_0円の場合は0円</span>():</div>
                  <div className="code-line">    <span className="hl-kw">assert</span> 税込み価格(<span className="hl-num">0</span>) == <span className="hl-num">0</span></div>
                </code>
              </pre>
            </div>

            <div className="code-block">
              <div className="code-head">
                <span>ステップ3: Red — tax_example.py</span>
                <span>Python</span>
              </div>
              <pre>
                <code>
                  <div className="code-line"><span className="hl-kw">def</span> <span className="hl-fn">税込み価格</span>(小計):</div>
                  <div className="code-line">    <span className="hl-kw">return</span> <span className="hl-num">0</span></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"><span className="hl-kw">def</span> <span className="hl-fn">test_税込み価格_0円の場合は0円</span>():</div>
                  <div className="code-line">    <span className="hl-kw">assert</span> 税込み価格(<span className="hl-num">0</span>) == <span className="hl-num">0</span></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"><span className="hl-cm"># 2つ目のテストを追加する。0 を返す実装では 110 にならず失敗する（Red）</span></div>
                  <div className="code-line"><span className="hl-kw">def</span> <span className="hl-fn">test_税込み価格_100円の場合は110円</span>():</div>
                  <div className="code-line">    <span className="hl-kw">assert</span> 税込み価格(<span className="hl-num">100</span>) == <span className="hl-num">110</span></div>
                </code>
              </pre>
            </div>

            <div className="code-block">
              <div className="code-head">
                <span>ステップ4: Green (Triangulate) — tax_example.py</span>
                <span>Python</span>
              </div>
              <pre>
                <code>
                  <div className="code-line"><span className="hl-cm"># 2つの例が揃ったことで、ベタ書きでは足りず一般化せざるを得なくなる（Triangulate）</span></div>
                  <div className="code-line"><span className="hl-kw">def</span> <span className="hl-fn">税込み価格</span>(小計):</div>
                  <div className="code-line">    <span className="hl-kw">return</span> <span className="hl-fn">int</span>(小計 * <span className="hl-num">1.1</span>)</div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"><span className="hl-kw">def</span> <span className="hl-fn">test_税込み価格_0円の場合は0円</span>():</div>
                  <div className="code-line">    <span className="hl-kw">assert</span> 税込み価格(<span className="hl-num">0</span>) == <span className="hl-num">0</span></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"><span className="hl-kw">def</span> <span className="hl-fn">test_税込み価格_100円の場合は110円</span>():</div>
                  <div className="code-line">    <span className="hl-kw">assert</span> 税込み価格(<span className="hl-num">100</span>) == <span className="hl-num">110</span></div>
                </code>
              </pre>
            </div>

            <div className="code-block">
              <div className="code-head">
                <span>ステップ5: Refactor — tax_example.py</span>
                <span>Python</span>
              </div>
              <pre>
                <code>
                  <div className="code-line"><span className="hl-cm"># テストを緑に保ったまま、マジックナンバー 1.1 を意味のある定数へ抽出する</span></div>
                  <div className="code-line">消費税率 = <span className="hl-num">0.10</span></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"><span className="hl-kw">def</span> <span className="hl-fn">税込み価格</span>(小計):</div>
                  <div className="code-line">    <span className="hl-kw">return</span> <span className="hl-fn">int</span>(小計 * (<span className="hl-num">1</span> + 消費税率))</div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"><span className="hl-kw">def</span> <span className="hl-fn">test_税込み価格_0円の場合は0円</span>():</div>
                  <div className="code-line">    <span className="hl-kw">assert</span> 税込み価格(<span className="hl-num">0</span>) == <span className="hl-num">0</span></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"><span className="hl-kw">def</span> <span className="hl-fn">test_税込み価格_100円の場合は110円</span>():</div>
                  <div className="code-line">    <span className="hl-kw">assert</span> 税込み価格(<span className="hl-num">100</span>) == <span className="hl-num">110</span></div>
                </code>
              </pre>
            </div>
            <p>
              このように、<strong>テストが増えるたびにベタ書きから一般化へと実装を育てていく</strong>流れこそがTDDの基本形です。
            </p>
          </section>

          {/* Section 06: Part II: xUnitを自作する意味 */}
          <section id="part2" className="section prose">
            <p className="section-eyebrow">
              <i className="ti ti-tool"></i>06
            </p>
            <h2>Part II: xUnitを自作する意味</h2>
            <p>
              Part IIでは、視点を変えて「テストを実行するためのフレームワーク（xUnit系）そのもの」をTDDで構築していきます。これは単なる余興ではなく、以下のような重要なメッセージを含んでいます。
            </p>
            <ul>
              <li>
                <strong>TDDは業務ロジックだけでなく、テストインフラ自体の開発にも適用できる</strong>
              </li>
              <li>
                xUnit系フレームワーク（JUnit、pytest、NUnitなど）が内部で何をしているか（テストの収集・実行・結果集計・セットアップとクリーンアップ）を理解することで、テストコードの書き方への理解も深まる
              </li>
              <li>
                <strong>
                  「テストするものが自分自身のテストの仕組みである」という自己言及的な状況でも、TDDのサイクルは変わらず機能する
                </strong>
                ことを実証している
              </li>
            </ul>
            <p>
              初学者にとってPart IIは難易度がやや上がりますが、「自分が普段使っているテストランナーの中身がどうなっているか」を知る良い機会になります。
            </p>

            <div className="mermaid-wrap" id="dg-xunit">
              <Mermaid chart={DIAGRAMS.dgXunit} />
            </div>
            <p className="mermaid-caption">図: xUnit系フレームワークの主要な構成要素</p>
          </section>

          {/* Section 07: Part III: TDDパターン集 */}
          <section id="part3" className="section prose">
            <p className="section-eyebrow">
              <i className="ti ti-puzzle"></i>07
            </p>
            <h2>Part III: TDDパターン集</h2>
            <p>
              Part IIIは、Part I・IIで実際に使われた考え方を、再利用可能な「パターン」として整理し直したカタログです。全部で65個のパターンが7つのカテゴリに分類されています。
            </p>
            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-category"></i>パターン分類一覧
              </div>
              <table>
                <thead>
                  <tr>
                    <th>パターン分類</th>
                    <th>章</th>
                    <th>代表的なパターン</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test-Driven Development Patterns</td>
                    <td>25章</td>
                    <td>
                      Test (noun), Isolated Test, Test List, Test First, Assert First, Test Data, Evident Data
                    </td>
                  </tr>
                  <tr>
                    <td>Red Bar Patterns</td>
                    <td>26章</td>
                    <td>
                      One Step Test, Starter Test, Explanation Test, Learning Test, Another Test, Regression Test, Break, Do Over
                    </td>
                  </tr>
                  <tr>
                    <td>Testing Patterns</td>
                    <td>27章</td>
                    <td>
                      Child Test, Mock Object, Self Shunt, Log String, Crash Test Dummy, Broken Test, Clean Check-in
                    </td>
                  </tr>
                  <tr>
                    <td>Green Bar Patterns</td>
                    <td>28章</td>
                    <td>
                      Fake It（Til You Make It）, Triangulate, Obvious Implementation, One to Many
                    </td>
                  </tr>
                  <tr>
                    <td>xUnit Patterns</td>
                    <td>29章</td>
                    <td>
                      Assertion, Fixture, External Fixture, Test Method, Exception Test, All Tests
                    </td>
                  </tr>
                  <tr>
                    <td>Design Patterns</td>
                    <td>30章</td>
                    <td>
                      Command, Value Object, Null Object, Template Method, Pluggable Object, Factory Method, Imposter, Composite, Collecting Parameter, Singleton
                    </td>
                  </tr>
                  <tr>
                    <td>Refactoring</td>
                    <td>31章</td>
                    <td>
                      Reconcile Differences, Isolate Change, Migrate Data, Extract Method, Inline Method, Extract Interface, Move Method, Method Object, Add Parameter
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              初学者はこの一覧を最初から丸暗記する必要はありません。
              <strong>
                Part IとPart IIで実際に手を動かした後で、「あの時やっていたことにはこういう名前がついていたのか」と答え合わせのように読む
              </strong>
              のが効果的な使い方です。
            </p>
            <div className="callout plum">
              <i className="ti ti-target"></i>
              <p>
                最終章の32章「Mastering TDD」では、「ステップの大きさはどのくらいがよいか」「何をテストしなくてよいか」「良いテストの見分け方」といった、実践者が必ずぶつかる疑問にQ&amp;A形式で答えています。
              </p>
            </div>
          </section>

          {/* Section 08: TDDの三原則 */}
          <section id="three-laws" className="section prose">
            <p className="section-eyebrow">
              <i className="ti ti-gavel"></i>08
            </p>
            <h2>TDDの三原則（Uncle Bobによる定式化）</h2>
            <p>
              本書刊行後、Robert C. Martin（愛称 Uncle Bob）は、Kent
              Beckから直接学んだ実践を「TDDの三原則（Three Laws of
              TDD）」として整理し、広めました。これは本書自体のパターンではありませんが、TDDの解説として国際的に非常によく引用される定式化です。
            </p>

            <div className="mermaid-wrap" id="dg-laws">
              <Mermaid chart={DIAGRAMS.dgLaws} />
            </div>
            <p className="mermaid-caption">図: Three Laws of TDD（Robert C. Martin）</p>

            <p>
              三原則は、テストコードとプロダクションコードを<strong>ほぼ1行単位で交互に</strong>書かせるほど粒度が細かいことが特徴です。Uncle
              Bob自身も「最初は簡単そうに見えるが、実際にこの粒度でやってみると驚くほど規律が要求される」と述べています。
            </p>
          </section>

          {/* Section 09: Canon TDD */}
          <section id="canon-tdd" className="section prose">
            <p className="section-eyebrow">
              <i className="ti ti-list-check"></i>09
            </p>
            <h2>Canon TDD ─ Kent Beckが自身の手順を整理した記事</h2>
            <p>
              2023年12月11日、Kent Beckは自身のニュースレターで「Canon
              TDD（規範的TDD）」と題した記事を公開しました。これは、TDDに対する誤解や自己流の&quot;TDDもどき&quot;批判が増えてきたことを受け、
              <strong>
                Kent Beck自身が考える手順を、あらためて簡潔に整理・明文化したもの
              </strong>
              です。2002年刊行の本書で説明されるTDDそのものの再定義ではなく、また全員が採用すべき標準として提示されたものでもない点に注意してください。
            </p>

            <div className="mermaid-wrap" id="dg-canon">
              <Mermaid chart={DIAGRAMS.dgCanon} />
            </div>
            <p className="mermaid-caption">図: Canon TDDの手順</p>

            <p>Kent Beck自身がこの記事で強調しているのは、次の点です。</p>
            <ul>
              <li>
                最初の「テストシナリオのリストを書く」ステップは、しばしば省略されて教えられがちだが、
                <strong>「いつ終わりにするか」を判断するために重要</strong>である
              </li>
              <li>
                TDDを批判するなら、この手順（Canon
                TDD）を批判してほしい。手順から外れた自己流のやり方を批判して「TDDはダメだ」と結論づけるのは藁人形論法（ストローマン）である
              </li>
              <li>
                手順どおりにやらなくても、それでうまくいっているなら問題ない。ただしそれは「Canon
                TDD」ではない、というだけのこと
              </li>
            </ul>
            <p>
              初学者は、まず本書の実例でこのサイクルを体得したうえで、このCanon
              TDD記事を読むと、Beck自身が要点をどこに置いているかを確認できます。
            </p>
          </section>

          {/* Section 10: 初学者がつまずきやすいポイントと対策 */}
          <section id="pitfalls" className="section prose">
            <p className="section-eyebrow">
              <i className="ti ti-alert-triangle"></i>10
            </p>
            <h2>初学者がつまずきやすいポイントと対策</h2>
            <div className="card-grid">
              <div className="pitfall-card">
                <p className="p-q">
                  <i className="ti ti-help-circle"></i>ステップが小さすぎて退屈に感じる
                </p>
                <p className="p-a">
                  <i className="ti ti-arrow-right"></i>本書でも「慣れてきたらステップを大きくしてよい」と明言されています。最初は意図的に小さく、習熟に応じて歩幅を広げましょう。
                </p>
              </div>
              <div className="pitfall-card">
                <p className="p-q">
                  <i className="ti ti-help-circle"></i>「テストファースト」と「TDD」を混同する
                </p>
                <p className="p-a">
                  <i className="ti ti-arrow-right"></i>テストを先に書くだけでは不十分です。Red（失敗）を確認してからGreen（成功）に進み、必ずRefactorのステップを踏むところまでがTDDです。
                </p>
              </div>
              <div className="pitfall-card">
                <p className="p-q">
                  <i className="ti ti-help-circle"></i>Fake Itが「ズル」に見えて抵抗を感じる
                </p>
                <p className="p-a">
                  <i className="ti ti-arrow-right"></i>Fake
                  Itは正当な戦略です。ベタ書きの実装は、後続のテスト（Triangulate）によって自然に一般化されていきます。焦って最初から一般化しようとしない方が、結果的に安全な設計に到達しやすいというのが本書の主張です。
                </p>
              </div>
              <div className="pitfall-card">
                <p className="p-q">
                  <i className="ti ti-help-circle"></i>何でもかんでもテストしようとして疲弊する
                </p>
                <p className="p-a">
                  <i className="ti ti-arrow-right"></i>32章では「何をテストしなくてよいか」という問いに、著者自身が「バグが心配になる箇所だけをテストする」という現実的な指針を示しています。
                </p>
              </div>
              <div className="pitfall-card">
                <p className="p-q">
                  <i className="ti ti-help-circle"></i>リファクタリングを省略してしまう
                </p>
                <p className="p-a">
                  <i className="ti ti-arrow-right"></i>Greenの状態はゴールではなく通過点です。リファクタリングを飛ばすと、Fake
                  Itで書いたベタ書きコードがそのまま積み上がってしまいます。
                </p>
              </div>
            </div>
          </section>

          {/* Section 11: 「TDD is Dead」論争 */}
          <section id="tdd-is-dead" className="section prose">
            <p className="section-eyebrow">
              <i className="ti ti-messages"></i>11
            </p>
            <h2>「TDD is Dead」論争 ─ 賛否両論を知る</h2>
            <p>
              TDDは称賛される一方で、たびたび激しい議論の的にもなってきました。中でも国際的に最も有名な論争が、2014年にRuby
              on Railsの作者David Heinemeier Hansson（DHH）が公開した記事「TDD is dead. Long live
              testing.」を発端とするものです。
            </p>
            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-scale"></i>論争における立場の比較
              </div>
              <table>
                <thead>
                  <tr>
                    <th>論者</th>
                    <th>主張の要旨</th>
                    <th>立場</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>David Heinemeier Hansson（DHH）</td>
                    <td>
                      テストファースト原理主義は設計をゆがめる（過剰な間接化・モック依存を生む）。テスト自体は書くが、書く順序にはこだわらない
                    </td>
                    <td>テストファーストへの懐疑・脱原理主義</td>
                  </tr>
                  <tr>
                    <td>Kent Beck</td>
                    <td>
                      TDDは厳格な宗教ではなく、状況に応じて使う規律・道具である。批判するなら本来の手順（Canon
                      TDD）を対象にしてほしい
                    </td>
                    <td>TDD提唱者としての立場明確化</td>
                  </tr>
                  <tr>
                    <td>Martin Fowler</td>
                    <td>
                      DHHとKent Beckの対話を仲介し、TDDの価値と限界を整理する記事・動画シリーズ「Is TDD
                      Dead?」を公開
                    </td>
                    <td>中立的な整理・橋渡し役</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              この論争のあと、DHHとKent Beck、Martin Fowlerの3人による対話シリーズ「Is TDD
              Dead?」が公開され、単なる炎上では終わらず、建設的な意見交換の記録として広く参照されています。Robert C.
              Martinも自身のブログで「TDDはアーキテクチャを傷つける」という批判に対する反論記事を書くなど、この議論はコミュニティ全体を巻き込む形で発展しました。
            </p>
            <div className="callout">
              <i className="ti ti-bulb"></i>
              <p>
                初学者にとって重要なのは、
                <strong>「TDDは万能の銀の弾丸ではない」という前提を最初から持っておくこと</strong>
                です。本書自体も32章で「TDDが向かないケース」に言及しており、著者自身が原理主義的な立場を取っていないことがわかります。
              </p>
            </div>
          </section>

          {/* Section 12: 2025〜2026年の潮流: AIエージェント時代のTDD */}
          <section id="ai-era" className="section prose">
            <p className="section-eyebrow">
              <i className="ti ti-robot"></i>12
            </p>
            <h2>2025〜2026年の潮流: AIエージェント時代のTDD</h2>
            <p>
              本書の出版から20年以上が経った現在、Kent
              Beck自身がAIコーディングエージェントとTDDの関係について活発に発信しています。これは本書の内容そのものではありませんが、
              <strong>古典的なTDDの原則が、なぜ今あらためて重要視されているか</strong>
              を理解するうえで欠かせない文脈です。
            </p>
            <p>
              Kent Beckは2025年のインタビューで、AIエージェントを「望みを叶えてくれるが、しばしば予期せぬ副作用を伴う&quot;ジニー（魔神）&quot;」にたとえ、次のような課題を指摘しています。
            </p>
            <ul>
              <li>
                AIエージェントは「まずコードを書いて、後から通るテストを書く」という、TDD本来の順序とは逆の振る舞いをしがちである
              </li>
              <li>
                テストを通すために、実装を直す代わりに
                <strong>失敗しているテストそのものを削除してしまう</strong>ケースが観測されている
              </li>
              <li>
                そのためTDDは、AIエージェントが書くコードの品質を保証する「超能力（superpower）」として、あらためて注目されている
              </li>
            </ul>

            <div className="mermaid-wrap" id="dg-ai">
              <Mermaid chart={DIAGRAMS.dgAi} />
            </div>
            <p className="mermaid-caption">図: AIエージェント時代のTDDサイクル（人間による安全弁付き）</p>

            <p>
              Martin
              Fowlerも自身のサイトで、多くの実務者が「LLMエージェントにソフトウェアを作らせる際はTDDを使うよう指示する」ことを推奨していると紹介しており、TDDが
              <strong>人間だけでなくAIエージェントの手綱を締めるための規律</strong>
              としても再評価されている状況がうかがえます。Kent Beckは2025〜2026年にかけて、CraftConfでの「Canon
              TDD」講演や、ニュースレター「Tidy First?」での連載を通じて、この「Augmented
              Coding（拡張されたコーディング）」というテーマを継続的に発信しています。
            </p>
            <div className="callout forest">
              <i className="ti ti-shield-check"></i>
              <p>
                初学者にとっての教訓はシンプルです。
                <strong>
                  AIツールを使う・使わないにかかわらず、本書が教える「小さなステップ」「テストリスト」「Red-Green-Refactor」という基本規律そのものの価値は変わっていない
                </strong>
                、むしろAIエージェントの出力を検証する基準としてその重要性が増している、ということです。
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
