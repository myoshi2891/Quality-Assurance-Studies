import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './clean-code-cookbook-guide.css';

export const metadata: Metadata = {
  title: 'Clean Code Cookbook 実践ガイド | 初心者のためのステップバイステップ・ベストプラクティス',
  description:
    'O’Reilly 刊『Clean Code Cookbook』（著者: Maximiliano Contieri）を軸に、Fowler、Beck、Uncle Bob、Sandi Metzなどの知見を統合した初学者向けステップバイステップ実践ガイド。',
};

const DIAGRAM_1 = `flowchart TB
A["読みやすいコード"] --> B["バグの発見が早くなる"]
A --> C["新しいメンバーが早く戦力化する"]
A --> D["変更にかかる時間が短くなる"]
B --> E["技術的負債が蓄積しにくい"]
C --> E
D --> E
E --> F["開発チームの持続可能な速度が保たれる"]`;

const DIAGRAM_2 = `flowchart TB
A["コードを読んで違和感に気づく"] --> B["スメルの種類を分類する"]
B --> C{"安全網となるテストは十分か"}
C -- はい --> E["小さな一歩でリファクタリングする"]
C -- いいえ --> D["先にテストを追加する"]
D --> E
E --> F["テストを実行して挙動が変わっていないか確認する"]
F --> G{"問題は解消したか"}
G -- いいえ --> B
G -- はい --> H["小さくコミットする"]
H --> I["次のコードへ進む"]
I --> A`;

const DIAGRAM_3 = `flowchart TB
R["Red: 失敗するテストを先に書く"] --> G["Green: 最小限のコードでテストを通す"]
G --> Ref["Refactor: 重複やコードスメルを取り除く"]
Ref --> R`;

const DIAGRAM_4 = `flowchart TB
S["新しい変更に着手する前に"] --> Q1{"今のコードは変更しやすい状態か"}
Q1 -- はい --> Impl["そのまま機能を実装する"]
Q1 -- いいえ --> Q2{"整頓のコストは今回の変更で回収できるか"}
Q2 -- はい --> Tidy["先に小さく整頓する Tidy First"]
Tidy --> Impl
Q2 -- いいえ --> Later["整頓は後回しにし記録だけ残す"]
Later --> Impl
Impl --> Commit["変更後の振る舞いと既存部分をテストしてコミットする"]`;

export default function CleanCodeCookbookGuidePage() {
  return (
    <div className="clean-code-cookbook-page">
      <NavBar />

      <main className="main">
        <div className="content prose">
          {/* ============ HERO ============ */}
          <div className="hero">
            <span className="eyebrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
              </svg>
              <span>初心者向け実践ガイド</span>
            </span>
            <h1>Clean Code Cookbook 実践ガイド</h1>
            <p className="lead">
              O&apos;Reilly 刊『Clean Code Cookbook』（著者: Maximiliano Contieri）を軸に、Martin Fowler、Kent Beck、Robert C. Martin（Uncle Bob）、Sandi Metz など世界的に著名な開発者たちの知見を統合し、初学者が実務でそのまま使えるステップバイステップの手順としてまとめました。
            </p>
            <div className="hero-meta">
              <span className="chip">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>2026年8月27日時点の情報</span>
              </span>
              <span className="chip">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span>全25章 → 8ステップに再構成</span>
              </span>
              <span className="chip">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8zm14 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8z" />
                </svg>
                <span>一次情報または信頼できる二次情報のURLを本文・巻末に明記</span>
              </span>
            </div>
          </div>

          {/* ============ 1. この本について ============ */}
          <section id="sec-1">
            <div className="section-head">
              <div className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 4v16H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12zm-8 4H9v2h2V8zm6 0h-4v2h4V8zm0 4h-4v2h4v-2zm-6 0H9v2h2v-2z" />
                </svg>
              </div>
              <div>
                <span className="section-num">SECTION 01</span>
                <h2>この本について</h2>
              </div>
            </div>

            <p>
              『Clean Code Cookbook』は、25年以上ソフトウェアエンジニアおよび講師として活動してきた Maximiliano Contieri 氏（アルゼンチン・ブエノスアイレス在住）が執筆した書籍で、O&apos;Reilly Media から刊行されています。JavaScript、PHP、Java、Python など複数の言語による実例を使い、可読性・結合度・テスト容易性・拡張性の観点から「コードスメル（コードの臭い）」を見つけ、それを改善するための具体的なレシピ（recipe）を提示する構成になっています。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>タイトル</td>
                    <td><strong>Clean Code Cookbook</strong></td>
                  </tr>
                  <tr>
                    <td>著者</td>
                    <td>Maximiliano Contieri</td>
                  </tr>
                  <tr>
                    <td>出版社</td>
                    <td>O&apos;Reilly Media, Inc.</td>
                  </tr>
                  <tr>
                    <td>出版時期</td>
                    <td>2023年9月</td>
                  </tr>
                  <tr>
                    <td>ページ数</td>
                    <td>約430ページ（音声換算 約8時間6分）</td>
                  </tr>
                  <tr>
                    <td>対象レベル</td>
                    <td>中級〜上級 Intermediate to Advanced</td>
                  </tr>
                  <tr>
                    <td>使用言語例</td>
                    <td>JavaScript, PHP, Java, Python ほか多数</td>
                  </tr>
                  <tr>
                    <td>章構成</td>
                    <td>全25章 + 序文・用語集・索引</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              著者自身は、ソフトウェア設計・リファクタリング・テスト駆動開発（TDD）・コードスメルに関する記事を500本以上執筆しており、自身のブログや Substack、DEV Community、HackerNoon などでも継続的に情報発信を行っている、コードスメル分野で国際的に広く読まれている実務者です。
            </p>

            <div className="callout note">
              <div className="callout-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                <span>補足</span>
              </div>
              <p>
                本ガイドは書籍の内容そのものの引用は最小限にとどめ、可能な限り独自の説明・独自のコード例で構成しています。書誌情報の出典は巻末を参照してください。
              </p>
            </div>
          </section>

          {/* ============ 2. 基礎知識 ============ */}
          <section id="sec-2">
            <div className="section-head">
              <div className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 21h6v-2H9v2zm3-19C7.48 2 3.82 5.66 3.82 10.18c0 2.8 1.4 5.28 3.54 6.77V18a1 1 0 0 0 1 1h7.28a1 1 0 0 0 1-1v-1.05c2.14-1.49 3.54-3.97 3.54-6.77C20.18 5.66 16.52 2 12 2z" />
                </svg>
              </div>
              <div>
                <span className="section-num">SECTION 02</span>
                <h2>クリーンコードとコードスメルの基礎知識</h2>
              </div>
            </div>

            <p>
              初学者がまず押さえておくべきなのは、「コードスメル」と「リファクタリング」という2つの言葉の正確な意味です。
            </p>

            <h3>2.1 コードスメルとは何か</h3>
            <p>
              コードスメルという用語は Kent Beck が考案し、Martin Fowler の著書『Refactoring: Improving the Design of Existing Code』で広く紹介されました。Fowler はコードスメルを「システムのより深い問題を示唆する表面的な兆候」と定義しています。
            </p>
            <p>
              重要なのは、コードスメルは「絶対に直さなければならないルール」ではなく、「注意を払うべきだという手がかり（ヒント）」に過ぎないという点です。『Clean Code Cookbook』自身も、コードスメルは症状であり、それ自体が「今すぐ全部作り直すべき」という証拠ではないという立場を取っています。
            </p>

            <div className="callout source">
              <div className="callout-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8zm14 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8z" />
                </svg>
                <span>出典</span>
              </div>
              <p>
                LinearB Blog – Code Smells: What Are They And How Can I Prevent Them?<br />
                <a
                  href="https://linearb.io/blog/what-is-a-code-smell"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://linearb.io/blog/what-is-a-code-smell
                </a>
              </p>
            </div>

            <h3>2.2 リファクタリングとは何か</h3>
            <p>
              Fowler は著書の中でリファクタリングを名詞と動詞の両面から定義しています。要約すると次のとおりです。
            </p>
            <ul className="plain">
              <li>
                <strong>名詞としてのリファクタリング</strong>: 外部から見た振る舞いを変えずに、ソフトウェアの内部構造だけを変更すること。
              </li>
              <li>
                <strong>動詞としてのリファクタリング</strong>: 一連の小さなリファクタリングを適用しながら、振る舞いを変えずにソフトウェアを再構築していく行為。
              </li>
            </ul>
            <p>
              この「振る舞いを変えない」という制約が、リファクタリングを単なる「書き直し」と区別する最大のポイントです。なお、リファクタリングという技法自体は William Opdyke の1992年の博士論文「Refactoring Object-Oriented Frameworks」に起源を持ち、Fowler の書籍によって業界に広まりました。
            </p>

            <div className="callout source">
              <div className="callout-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8zm14 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8z" />
                </svg>
                <span>出典</span>
              </div>
              <p>
                O&apos;Reilly – Clean Code Cookbook, Chapter 1<br />
                <a
                  href="https://www.oreilly.com/library/view/clean-code-cookbook/9781098144715/ch01.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.oreilly.com/library/view/clean-code-cookbook/9781098144715/ch01.html
                </a>
              </p>
            </div>

            <h3>2.3 なぜクリーンコードが重要なのか</h3>
            <p>
              コードは書く時間よりも読まれる時間・保守される時間の方が圧倒的に長くなります。読みやすく変更しやすいコードは、次のような複利効果を生みます。
            </p>

            <div className="diagram-card">
              <div className="diagram-wrap">
                <Mermaid chart={DIAGRAM_1} />
              </div>
              <div className="diagram-caption">図1: 読みやすいコードがもたらす複利効果</div>
            </div>
          </section>

          {/* ============ 3. 全体像 ============ */}
          <section id="sec-3">
            <div className="section-head">
              <div className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                </svg>
              </div>
              <div>
                <span className="section-num">SECTION 03</span>
                <h2>本書の全体像：25章とその関連</h2>
              </div>
            </div>

            <p>
              『Clean Code Cookbook』は25の章で構成されており、それぞれが特定の種類のコードスメルとその解消レシピを扱っています。初学者が迷わないよう、本ガイドでは各章を5つのカテゴリーに独自に整理しました。
            </p>

            <div className="callout note">
              <div className="callout-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                <span>補足</span>
              </div>
              <p>
                この分類は本ガイド独自の学習用整理であり、原著の目次構成そのものではありません。
              </p>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>カテゴリー</th>
                    <th>該当する章</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>A. 設計の基礎</strong></td>
                    <td>1章 Clean Code／2章 公理の設定 Setting Up the Axioms／6章 宣言的コード</td>
                  </tr>
                  <tr>
                    <td><strong>B. オブジェクト指向設計</strong></td>
                    <td>3章 貧血モデル／4章 プリミティブ執着／17章 結合度／18章 グローバル／19章 階層</td>
                  </tr>
                  <tr>
                    <td><strong>C. 可読性とコミュニケーション</strong></td>
                    <td>7章 命名／8章 コメント／9章 標準</td>
                  </tr>
                  <tr>
                    <td><strong>D. 複雑さの制御</strong></td>
                    <td>5章 可変性／10章 複雑さ／11章 肥大化／12章 YAGNI／16章 早すぎる最適化／23章 メタプログラミング／24章 型</td>
                  </tr>
                  <tr>
                    <td><strong>E. 安全性と品質保証</strong></td>
                    <td>13章 フェイルファスト／14章 If文／15章 Null／20章 テスト／21章 技術的負債／22章 例外／25章 セキュリティ</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>原著の全25章の一覧は以下のとおりです（章タイトルの日本語訳）。</p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>章</th>
                    <th>原題</th>
                    <th>内容の要点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Clean Code</td><td>コードスメル・リファクタリング・レシピという用語の定義</td></tr>
                  <tr><td>2</td><td>Setting Up the Axioms</td><td>設計の前提となる「モデル」の考え方</td></tr>
                  <tr><td>3</td><td>Anemic Models</td><td>データだけを持ち振る舞いを持たないオブジェクトの改善</td></tr>
                  <tr><td>4</td><td>Primitive Obsession</td><td>プリミティブ型を使いすぎることの弊害と対処</td></tr>
                  <tr><td>5</td><td>Mutability</td><td>不変性（イミュータビリティ）の活用</td></tr>
                  <tr><td>6</td><td>Declarative Code</td><td>命令的コードを宣言的に書き換える</td></tr>
                  <tr><td>7</td><td>Naming</td><td>命名の具体的な改善パターン</td></tr>
                  <tr><td>8</td><td>Comments</td><td>コメントに頼らない設計への転換</td></tr>
                  <tr><td>9</td><td>Standards</td><td>コーディング規約・一貫性の確保</td></tr>
                  <tr><td>10</td><td>Complexity</td><td>不必要な複雑さの除去</td></tr>
                  <tr><td>11</td><td>Bloaters</td><td>長すぎるメソッド・引数過多などの肥大化</td></tr>
                  <tr><td>12</td><td>YAGNI</td><td>使われない機能・デッドコードの除去</td></tr>
                  <tr><td>13</td><td>Fail Fast</td><td>早期にエラーを検知する設計</td></tr>
                  <tr><td>14</td><td>Ifs</td><td>条件分岐の単純化とポリモーフィズムへの置き換え</td></tr>
                  <tr><td>15</td><td>Null</td><td>Nullに起因する問題の解消</td></tr>
                  <tr><td>16</td><td>Premature Optimization</td><td>早すぎる最適化を避ける</td></tr>
                  <tr><td>17</td><td>Coupling</td><td>クラス間の結合度を下げる</td></tr>
                  <tr><td>18</td><td>Globals</td><td>グローバルな状態・関数の排除</td></tr>
                  <tr><td>19</td><td>Hierarchies</td><td>継承階層の適切な設計</td></tr>
                  <tr><td>20</td><td>Testing</td><td>テストコード自体の品質改善</td></tr>
                  <tr><td>21</td><td>Technical Debt</td><td>技術的負債の可視化と削減</td></tr>
                  <tr><td>22</td><td>Exceptions</td><td>例外処理の適切な設計</td></tr>
                  <tr><td>23</td><td>Metaprogramming</td><td>メタプログラミングの乱用を避ける</td></tr>
                  <tr><td>24</td><td>Types</td><td>型の扱い方の改善</td></tr>
                  <tr><td>25</td><td>Security</td><td>入力値のサニタイズなどセキュリティ上の基本対策</td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout source">
              <div className="callout-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8zm14 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8z" />
                </svg>
                <span>出典</span>
              </div>
              <p>
                O&apos;Reilly – Clean Code Cookbook（書誌・目次ページ）<br />
                <a
                  href="https://www.oreilly.com/library/view/clean-code-cookbook/9781098144715/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.oreilly.com/library/view/clean-code-cookbook/9781098144715/
                </a>
              </p>
            </div>
          </section>

          {/* ============ 4. 8ステップ実践 ============ */}
          <section id="sec-4">
            <div className="section-head">
              <div className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.59L8.41 12 9.83 10.59l3.17 3.18 5.17-5.18L19.59 10z" />
                </svg>
              </div>
              <div>
                <span className="section-num">SECTION 04</span>
                <h2>ステップバイステップ実践ガイド（初心者向け8ステップ）</h2>
              </div>
            </div>

            <p>
              ここからは、本書と著名開発者たちの知見を組み合わせた「実際に手を動かすための8ステップ」を紹介します。全体の流れは次のループ図の通りです。1つのコードスメルを見つけてから改善しコミットするまでを1サイクルとして、これを繰り返します。
            </p>

            <div className="diagram-card">
              <div className="diagram-wrap">
                <Mermaid chart={DIAGRAM_2} />
              </div>
              <div className="diagram-caption">図2: コードスメル発見から改善までの全体ループ</div>
            </div>

            <h3>ステップ1：コードスメルに気づく（発見）</h3>
            <p>
              最初のステップは「何かがおかしい」と感じる感覚を養うことです。Robert C. Martin（Uncle Bob）は、優れたコードを書く感覚は経験によって養われる「鼻」のようなものだと述べています。最初は意識的にチェックリスト（<a href="#sec-8">8章</a>を参照）を使い、徐々に自然に気づけるようにしていきましょう。
            </p>
            <p>代表的な初期サインには次のようなものがあります。</p>
            <ul className="plain">
              <li>同じようなコードが複数箇所にコピーされている（重複コード）</li>
              <li>1つの関数やメソッドが数十行を超えている</li>
              <li>変数名が <code>data</code>、<code>temp</code>、<code>obj</code> のように意味を持たない</li>
              <li>if文やswitch文が深くネストしている</li>
              <li>コメントがないと処理内容が理解できない</li>
            </ul>

            <h3>ステップ2：スメルを分類する</h3>
            <p>
              気づいた違和感がどのカテゴリーに属するかを、<a href="#sec-3">3章の表</a>を使って分類します。分類することで、どの改善レシピ（リファクタリング手法）を適用すべきかの見当がつきやすくなります。
            </p>

            <h3>ステップ3：変更前にテストの安全網を用意する</h3>
            <p>
              リファクタリングの定義は「振る舞いを変えないこと」でした。振る舞いが変わっていないことを機械的に検証する手段がテストです。テストが存在しない、または不十分な場合は、まず現状の振る舞いを固定する「特性化テスト」を先に書きます。特性化テストが守れるのは、そこで書いたケースの範囲だけです。正常系をなぞるだけでは変更による退行を見逃すため、境界値と異常系（例外・エラー経路）も併せて確認しておきます。
            </p>
            <p>
              新規のロジックを書く場合は、Kent Beck が提唱し普及させた TDD（テスト駆動開発）の Red-Green-Refactor サイクルが世界中の現場で広く実践されています。
            </p>

            <div className="diagram-card">
              <div className="diagram-wrap">
                <Mermaid chart={DIAGRAM_3} />
              </div>
              <div className="diagram-caption">図3: TDDのRed-Green-Refactorサイクル</div>
            </div>

            <h3>ステップ4：小さな一歩から始める（Tidy First の考え方）</h3>
            <p>
              Kent Beck は2023年の著書『Tidy First?』の中で、大きなリファクタリングをいきなり行うのではなく、「Tidying（整頓）」と呼ばれる数分〜数時間で終わる小さく安全な変更を積み重ねる方法を提案しています。ガード節の導入、変数名の変更、不要コードの削除などがその代表例です。
            </p>
            <p>新しい機能を実装する前には、次のような判断をするとよいでしょう。</p>

            <div className="diagram-card">
              <div className="diagram-wrap">
                <Mermaid chart={DIAGRAM_4} />
              </div>
              <div className="diagram-caption">図4: Tidy Firstの意思決定フロー</div>
            </div>

            <h4>コード例（マジックナンバーの整頓）</h4>
            <div className="code-block">
              <div className="code-label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2a10 10 0 0 0-3 19.54V17a3 3 0 0 1-3-3H4.46A10 10 0 1 0 12 2z" />
                </svg>
                <span>Python</span>
              </div>
              <pre>
                <code>
                  {`# Before
if user.age > 17:
    grant_access(user)

# After
# user.age は満年齢（整数）である前提。この前提のもとで > 17 と >= 18 は同値になる。
LEGAL_ADULT_AGE = 18

if user.age >= LEGAL_ADULT_AGE:
    grant_access(user)`}
                </code>
              </pre>
            </div>
            <p>数値の意味を名前で表すだけでも、読み手の理解速度は大きく変わります。</p>

            <h3>ステップ5：名前を改善する</h3>
            <p>
              命名は『Clean Code Cookbook』7章、そして Robert C. Martin の著書『Clean Code』の両方で最重要トピックの一つとして扱われています。良い名前は「なぜ存在し、何をし、どう使われるか」を説明できる名前です。
            </p>

            <div className="code-block">
              <div className="code-label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <path d="M16 8v8M8 8v8" />
                </svg>
                <span>JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// Before
function calc(a, b, t) {
  return a * b * (1 + t);
}

// After
function calculatePriceWithTax(basePrice, quantity, taxRate) {
  return basePrice * quantity * (1 + taxRate);
}`}
                </code>
              </pre>
            </div>

            <h3>ステップ6：関数とクラスを小さく保つ</h3>
            <p>
              長すぎるメソッドや肥大化したクラスは「複雑さ」「肥大化（Bloaters）」の章で扱われる典型的なスメルです。1つの関数・クラスが持つ責務は1つに絞るという考え方（単一責任原則、SRP）に基づき、機能ごとに小さな単位へ分割します。数値による具体的な目安は<a href="#sec-5">5章</a>で紹介します。
            </p>

            <div className="code-block">
              <div className="code-label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2a10 10 0 0 0-3 19.54V17a3 3 0 0 1-3-3H4.46A10 10 0 1 0 12 2z" />
                </svg>
                <span>Python — メソッドの抽出</span>
              </div>
              <pre>
                <code>
                  {`# Before
def process_order(order):
    total = 0
    for item in order.items:
        total += item.price * item.quantity
    tax = total * 0.1
    total_with_tax = total + tax
    send_email(order.customer_email, f"合計: {total_with_tax}")
    return total_with_tax

# After
def process_order(order):
    subtotal = calculate_subtotal(order.items)
    total_with_tax = apply_tax(subtotal)
    notify_customer(order.customer_email, total_with_tax)
    return total_with_tax

def calculate_subtotal(items):
    return sum(item.price * item.quantity for item in items)

def apply_tax(amount, tax_rate=0.1):
    return amount * (1 + tax_rate)

def notify_customer(email, total):
    send_email(email, f"合計: {total}")`}
                </code>
              </pre>
            </div>

            <h3>ステップ7：条件分岐・Null・例外を安全にする</h3>
            <p>
              If文の乱立、Nullチェックの散在、握りつぶされた例外は、いずれもバグを見えにくくする典型的なスメルです。以下は代表的な対処パターンです。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>スメル</th>
                    <th>症状</th>
                    <th>対処パターン</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>深くネストしたif文</strong></td>
                    <td>可読性が低く分岐を追いにくい</td>
                    <td>ガード節（早期return）で平坦化する</td>
                  </tr>
                  <tr>
                    <td><strong>種類ごとの分岐 switch/if-elseif</strong></td>
                    <td>種類が増えるたびに分岐を修正する必要がある</td>
                    <td>ポリモーフィズム（多態性）に置き換える</td>
                  </tr>
                  <tr>
                    <td><strong>nullチェックの散在</strong></td>
                    <td><code>if (x != null)</code> があちこちに存在する</td>
                    <td>Null Object パターンで代替する</td>
                  </tr>
                  <tr>
                    <td><strong>空のcatchブロック</strong></td>
                    <td>例外が握りつぶされ原因不明のバグになる</td>
                    <td>例外を握りつぶさず、適切な粒度で再送出・記録する</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="code-block">
              <div className="code-label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span>Java — ガード節</span>
              </div>
              <pre>
                <code>
                  {`// Before
public void ship(Order order) {
    if (order != null) {
        if (order.isPaid()) {
            if (!order.isShipped()) {
                dispatch(order);
            }
        }
    }
}

// After
public void ship(Order order) {
    if (order == null) return;
    if (!order.isPaid()) return;
    if (order.isShipped()) return;

    dispatch(order);
}`}
                </code>
              </pre>
            </div>

            <h3>ステップ8：小さくコミットし、継続的に磨き続ける</h3>
            <p>
              Robert C. Martin が提唱する「ボーイスカウト・ルール」は、「キャンプ場を、来たときよりも綺麗にして帰る」という考え方をソフトウェア開発に当てはめたものです。触れたコードは、変更のついでに少しだけ綺麗にしてからコミットする、という小さな習慣の積み重ねがコードベース全体の劣化を防ぎます。
            </p>

            <div className="callout source">
              <div className="callout-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8zm14 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8z" />
                </svg>
                <span>出典</span>
              </div>
              <p>
                InformIT – The Boy Scout Rule（Robert C. Martin）<br />
                <a
                  href="https://www.informit.com/articles/article.aspx?p=1235624&seqNum=6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.informit.com/articles/article.aspx?p=1235624&seqNum=6
                </a>
              </p>
            </div>

            <p>
              このステップが終わったら、ステップ1に戻って次のコードスメルを探します。これが本セクション冒頭のループ図の意味です。
            </p>
          </section>

          {/* ============ 5. Sandi Metz ============ */}
          <section id="sec-5">
            <div className="section-head">
              <div className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <div>
                <span className="section-num">SECTION 05</span>
                <h2>数値で分かるベストプラクティス：Sandi Metzのルール</h2>
              </div>
            </div>

            <p>
              「小さく保つ」と言っても、初学者にとっては具体的な基準がないと判断が難しいものです。著名なRuby技術者 Sandi Metz が提唱した「開発者のためのルール」は、経験の浅い開発者でも判断しやすい具体的な数値基準を示しており、Ruby以外の言語のコミュニティでも広く参照されています。
            </p>

            <div className="stat-grid">
              <div className="stat-card">
                <div className="num">100行</div>
                <div className="lbl">1クラスの上限</div>
              </div>
              <div className="stat-card">
                <div className="num">5行</div>
                <div className="lbl">1メソッドの上限</div>
              </div>
              <div className="stat-card">
                <div className="num">4個</div>
                <div className="lbl">引数の上限</div>
              </div>
              <div className="stat-card">
                <div className="num">1個</div>
                <div className="lbl">コントローラが生成するオブジェクト数</div>
              </div>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ルール</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>クラスの行数</strong></td>
                    <td>1クラスは100行を超えない</td>
                  </tr>
                  <tr>
                    <td><strong>メソッドの行数</strong></td>
                    <td>1メソッドは5行を超えない</td>
                  </tr>
                  <tr>
                    <td><strong>引数の数</strong></td>
                    <td>メソッドの引数は4個まで</td>
                  </tr>
                  <tr>
                    <td><strong>コントローラの責務</strong></td>
                    <td>1つのコントローラアクションはインスタンス化するオブジェクトを1つまでにする</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              著者自身が明言しているとおり、これらは絶対的な法則ではなく「良い設計判断が難しい人のための簡略化された指標」です。ペアやレビュアーに理由を説明できるのであれば、ルールを破ってもよいとされています。
            </p>

            <div className="callout source">
              <div className="callout-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8zm14 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8z" />
                </svg>
                <span>出典</span>
              </div>
              <p>
                thoughtbot – Sandi Metz&apos; Rules For Developers<br />
                <a
                  href="https://thoughtbot.com/blog/sandi-metz-rules-for-developers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://thoughtbot.com/blog/sandi-metz-rules-for-developers
                </a>
              </p>
            </div>
          </section>

          {/* ============ 6. 著名開発者の視点 ============ */}
          <section id="sec-6">
            <div className="section-head">
              <div className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div>
                <span className="section-num">SECTION 06</span>
                <h2>世界的に著名な開発者の視点</h2>
              </div>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>開発者</th>
                    <th>代表的な功績</th>
                    <th>クリーンコードに関する視点（要約）</th>
                    <th>出典</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Martin Fowler</strong></td>
                    <td>『Refactoring』著者、リファクタリングカタログの体系化</td>
                    <td>コードスメルは「表面的な兆候」であり、深い問題を示唆するサインである</td>
                    <td>
                      <a
                        href="https://www.laputan.org/pub/patterns/fowler/smells.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        laputan.org
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Kent Beck</strong></td>
                    <td>XPの創始者、TDDの普及者、『Tidy First?』著者</td>
                    <td>大きなリファクタリングより、数分〜数時間で終わる小さな「整頓」を積み重ねる方が持続可能</td>
                    <td>
                      <a
                        href="https://tidyfirst.substack.com/p/management-section-intro-tidy-together"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        tidyfirst.substack.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Robert C. Martin</strong></td>
                    <td>『Clean Code』『Clean Architecture』著者、SOLID原則の提唱者</td>
                    <td>「触れたコードは来たときより綺麗にして帰る」というボーイスカウト・ルールを提唱</td>
                    <td>
                      <a
                        href="https://www.informit.com/articles/article.aspx?p=1235624&seqNum=6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        informit.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Sandi Metz</strong></td>
                    <td>『Practical Object-Oriented Design in Ruby』著者</td>
                    <td>クラス100行・メソッド5行など、判断に迷ったときの具体的な数値基準を提供</td>
                    <td>
                      <a
                        href="https://thoughtbot.com/blog/sandi-metz-rules-for-developers"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        thoughtbot.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Maximiliano Contieri</strong></td>
                    <td>『Clean Code Cookbook』著者、コードスメルシリーズを500本以上執筆</td>
                    <td>コードスメルは「意見」であり絶対的なルールではなく、文脈に応じた判断が必要</td>
                    <td>
                      <a
                        href="https://maximilianocontieri.com/series/code-smells"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        maximilianocontieri.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ============ 7. AI時代 ============ */}
          <section id="sec-7">
            <div className="section-head">
              <div className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 9h-2V7a5 5 0 0 0-10 0v2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zM9 7a3 3 0 0 1 6 0v2H9V7zm10 12H5v-8h14v8zM9 13a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 9 13zm6 0a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15 13z" />
                </svg>
              </div>
              <div>
                <span className="section-num">SECTION 07</span>
                <h2>AI時代の新しいコードスメル（2025〜2026年の動向）</h2>
              </div>
            </div>

            <p>
              生成AIによるコーディング支援が一般化したことで、Contieri 氏をはじめとする実務者は、AI特有の新しいコードスメルについても発信を続けています。2026年8月時点で特に参照する価値のあるトピックを3つ紹介します。
            </p>

            <h3>7.1 Workslop（ワークスロップ）コード</h3>
            <p>
              AIが生成したコードを、内容を十分に理解しないままコピー＆ペーストして採用してしまう状態を指します。コンパイルは通り、テストもパスし、一見きれいに見えても、なぜそのコードが動作するのかを自分で説明できない場合は要注意です。「AIが書いたコードであっても、あなた自身がそのコードに責任を持つ」という原則が強調されています。
            </p>
            <div className="callout source">
              <div className="callout-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8zm14 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8z" />
                </svg>
                <span>出典</span>
              </div>
              <p>
                HackerNoon – Code Smell 313: &quot;Workslop&quot; in AI-Assisted Programming<br />
                <a
                  href="https://hackernoon.com/code-smell-313-workslop-in-ai-assisted-programming"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://hackernoon.com/code-smell-313-workslop-in-ai-assisted-programming
                </a>
              </p>
            </div>

            <h3>7.2 Model Collapse（モデル崩壊）パターン</h3>
            <p>
              人間によるレビューを挟まずにAIによる修正を何度も繰り返すと、機械学習分野の「モデル崩壊」に似た劣化が発生するという指摘です。ドメイン固有の語彙が失われたり（例えば <code>Customer</code> が汎用的な <code>data</code> に変わっていくなど）、命名の一貫性が徐々にぶれていく現象が起こり得ます。対策として、AIによる変更のたびに人間がレビューする、ドメイン語彙を保つゴールデンテストを用意する、といった方法が挙げられています。
            </p>
            <div className="callout source">
              <div className="callout-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8zm14 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8z" />
                </svg>
                <span>出典</span>
              </div>
              <p>
                DEV Community – Code Smell 314: Model Collapse<br />
                <a
                  href="https://dev.to/mcsee/code-smell-314-model-collapse-5ckc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://dev.to/mcsee/code-smell-314-model-collapse-5ckc
                </a>
              </p>
            </div>

            <h3>7.3 Nitpicking（枝葉末節への固執）</h3>
            <p>
              コードレビューの注意力を、カンマの位置や命名の些細な癖といったフォーマット上の指摘に使い切ってしまい、アーキテクチャやセキュリティ、設計意図といった本質的な問題を見逃してしまう現象です。フォーマットや静的解析で機械的に検出できる部分は自動化ツール（Linter・フォーマッタなど）に任せ、人間のレビューはアーキテクチャや意図の議論に集中させることが推奨されています。
            </p>
            <div className="callout source">
              <div className="callout-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8zm14 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 7 1 8 3 8z" />
                </svg>
                <span>出典</span>
              </div>
              <p>
                Maximiliano Contieri – Code Smell 316: Nitpicking<br />
                <a
                  href="https://maxicontieri.substack.com/p/code-smell-316-nitpicking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://maxicontieri.substack.com/p/code-smell-316-nitpicking
                </a>
              </p>
            </div>
          </section>

          {/* ============ 8. チェックリスト ============ */}
          <section id="sec-8">
            <div className="section-head">
              <div className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.29 13.29a1 1 0 0 1-1.41 0L6.71 13.7a1 1 0 0 1 1.41-1.41L10 14.17l5.88-5.88a1 1 0 1 1 1.41 1.41z" />
                </svg>
              </div>
              <div>
                <span className="section-num">SECTION 08</span>
                <h2>保存版チェックリスト</h2>
              </div>
            </div>

            <p>
              コードをコミットする前、あるいはコードレビューを行う際に使えるチェックリストです。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>観点</th>
                    <th>チェック項目</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>命名</strong></td><td>変数・関数・クラス名が「何をするか」を説明しているか</td></tr>
                  <tr><td><strong>関数の大きさ</strong></td><td>1つの関数が1つのことだけを行っているか</td></tr>
                  <tr><td><strong>クラスの大きさ</strong></td><td>クラスが単一の責務に絞られているか（目安: 100行、メソッド5行）</td></tr>
                  <tr><td><strong>重複</strong></td><td>同じロジックが複数箇所にコピーされていないか</td></tr>
                  <tr><td><strong>条件分岐</strong></td><td>ネストが深すぎないか、ポリモーフィズムで置き換えられないか</td></tr>
                  <tr><td><strong>Null</strong></td><td>Nullチェックが散在せず、Null Objectなどで代替できないか</td></tr>
                  <tr><td><strong>例外</strong></td><td>例外を握りつぶしていないか、適切な粒度で扱っているか</td></tr>
                  <tr><td><strong>テスト</strong></td><td>変更前にテストが存在するか、テストが実際の振る舞いを検証しているか</td></tr>
                  <tr><td><strong>コメント</strong></td><td>コメントに頼らず、コード自体で意図が伝わるか</td></tr>
                  <tr><td><strong>マジックナンバー・文字列</strong></td><td>意味のある定数や値オブジェクトに置き換えられているか</td></tr>
                  <tr><td><strong>セキュリティ</strong></td><td>外部入力のサニタイズや検証が行われているか</td></tr>
                  <tr><td><strong>AIコード</strong></td><td>AIが生成したコードの内容を自分で説明できるか、レビューを経ているか</td></tr>
                  <tr><td><strong>コミット単位</strong></td><td>変更は小さく、整頓（振る舞いを変えない変更）と機能変更を分けたうえで、ボーイスカウト・ルールに基づきテストが通る単位でコミットされているか</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ============ 9. まとめ ============ */}
          <section id="sec-9">
            <div className="section-head">
              <div className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
                </svg>
              </div>
              <div>
                <span className="section-num">SECTION 09</span>
                <h2>まとめ</h2>
              </div>
            </div>

            <p>
              『Clean Code Cookbook』は、コードスメルという「気づきの言語」を軸に、命名・複雑さ・条件分岐・Null・例外・テスト・セキュリティなど幅広いテーマを、実践的なレシピ形式でカバーしている書籍です。本ガイドで紹介したステップ（発見 → 分類 → テストの安全網 → 小さな一歩 → 命名 → サイズ管理 → 分岐とNullの安全化 → 継続的改善）を繰り返すことで、初学者でも徐々にコードの「臭い」に気づけるようになります。
            </p>

            <p>
              重要なのは、Fowler・Beck・Martin・Metz・Contieri のいずれもが強調しているとおり、これらは絶対的な規則ではなく、状況に応じて判断するための「指針」であるという点です。まずは小さく試し、チームで理由を説明できる形で適用していくことが、クリーンコードへの最も確実な近道です。
            </p>
          </section>

          {/* ============ 10. 参考文献 ============ */}
          <section id="sec-10">
            <div className="section-head">
              <div className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                </svg>
              </div>
              <div>
                <span className="section-num">SECTION 10</span>
                <h2>参考文献・出典一覧</h2>
              </div>
            </div>

            <div className="card ref-group">
              <ol className="ref-list">
                <li>
                  <span className="ref-num">01</span>
                  <span>
                    O&apos;Reilly – Clean Code Cookbook（書誌・目次ページ）
                    <span className="ref-src">
                      <a
                        href="https://www.oreilly.com/library/view/clean-code-cookbook/9781098144715/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.oreilly.com/library/view/clean-code-cookbook/9781098144715/
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">02</span>
                  <span>
                    O&apos;Reilly – Clean Code Cookbook, Chapter 1（Clean Code）
                    <span className="ref-src">
                      <a
                        href="https://www.oreilly.com/library/view/clean-code-cookbook/9781098144715/ch01.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.oreilly.com/library/view/clean-code-cookbook/9781098144715/ch01.html
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">03</span>
                  <span>
                    Maximiliano Contieri 公式サイト
                    <span className="ref-src">
                      <a
                        href="https://maximilianocontieri.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://maximilianocontieri.com/
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">04</span>
                  <span>
                    Maximiliano Contieri – Code Smells series
                    <span className="ref-src">
                      <a
                        href="https://maximilianocontieri.com/series/code-smells"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://maximilianocontieri.com/series/code-smells
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">05</span>
                  <span>
                    Maximiliano Contieri – Code Smell 316: Nitpicking（2025年12月）
                    <span className="ref-src">
                      <a
                        href="https://maxicontieri.substack.com/p/code-smell-316-nitpicking"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://maxicontieri.substack.com/p/code-smell-316-nitpicking
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">06</span>
                  <span>
                    Maximiliano Contieri / DEV Community – Code Smell 314: Model Collapse（2025年11月）
                    <span className="ref-src">
                      <a
                        href="https://dev.to/mcsee/code-smell-314-model-collapse-5ckc"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://dev.to/mcsee/code-smell-314-model-collapse-5ckc
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">07</span>
                  <span>
                    Maximiliano Contieri / HackerNoon – Code Smell 313: &quot;Workslop&quot; in AI-Assisted Programming（2025年11月）
                    <span className="ref-src">
                      <a
                        href="https://hackernoon.com/code-smell-313-workslop-in-ai-assisted-programming"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://hackernoon.com/code-smell-313-workslop-in-ai-assisted-programming
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">08</span>
                  <span>
                    Martin Fowler – Bad Smells in Code（『Refactoring』原文PDF）
                    <span className="ref-src">
                      <a
                        href="https://www.laputan.org/pub/patterns/fowler/smells.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.laputan.org/pub/patterns/fowler/smells.pdf
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">09</span>
                  <span>
                    LinearB Blog – Code Smells: What Are They And How Can I Prevent Them?
                    <span className="ref-src">
                      <a
                        href="https://linearb.io/blog/what-is-a-code-smell"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://linearb.io/blog/what-is-a-code-smell
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">10</span>
                  <span>
                    Kent Beck&apos;s Substack – Software Design: Tidy First?
                    <span className="ref-src">
                      <a
                        href="https://tidyfirst.substack.com/p/management-section-intro-tidy-together"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://tidyfirst.substack.com/p/management-section-intro-tidy-together
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">11</span>
                  <span>
                    Sandor Dargo&apos;s Blog – Tidy First? by Kent Beck（書評）
                    <span className="ref-src">
                      <a
                        href="https://www.sandordargo.com/blog/2024/03/16/tidy-first-by-kent-beck"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.sandordargo.com/blog/2024/03/16/tidy-first-by-kent-beck
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">12</span>
                  <span>
                    thoughtbot – Sandi Metz&apos; Rules For Developers
                    <span className="ref-src">
                      <a
                        href="https://thoughtbot.com/blog/sandi-metz-rules-for-developers"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://thoughtbot.com/blog/sandi-metz-rules-for-developers
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">13</span>
                  <span>
                    InformIT – The Boy Scout Rule（Robert C. Martin, What Is Clean Code?より）
                    <span className="ref-src">
                      <a
                        href="https://www.informit.com/articles/article.aspx?p=1235624&seqNum=6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.informit.com/articles/article.aspx?p=1235624&seqNum=6
                      </a>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ref-num">14</span>
                  <span>
                    Wikipedia – Design smell（Fowler・R.C. Martinの定義の整理）
                    <span className="ref-src">
                      <a
                        href="https://en.wikipedia.org/wiki/Design_smell"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://en.wikipedia.org/wiki/Design_smell
                      </a>
                    </span>
                  </span>
                </li>
              </ol>
            </div>

            <div className="footer">
              本ガイドは2026年8月27日時点で参照可能な情報をもとに作成しています。
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
