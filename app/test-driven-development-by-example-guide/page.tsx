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
        </div>
      </main>
    </div>
  );
}
