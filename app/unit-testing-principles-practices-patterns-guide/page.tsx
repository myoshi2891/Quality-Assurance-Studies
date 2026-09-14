import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './unit-testing-guide.css';

export const metadata = {
  title: 'Unit Testing Principles, Practices, and Patterns 完全ガイド ― 初学者のためのステップバイステップ ベストプラクティス',
  description: 'Vladimir Khorikov著『Unit Testing Principles, Practices, and Patterns』に基づく単体テスト実践ガイド。4本柱、AAAパターン、古典派vsロンドン派、モックの正しい使い方まで。',
};

const DIAGRAM_0 = `flowchart TB
A["テストがない、または壊れやすい"] --> B["リファクタリングが怖くなる"]
B --> C["技術的負債が蓄積し、コードが腐敗する"]
C --> D["変更コストが増大し開発速度が低下する"]
D --> A

E["価値あるテストスイートを持つ"] --> F["安心してリファクタリングできる"]
F --> G["設計を継続的に改善できる"]
G --> H["開発速度が長期にわたり維持される"]
H --> E

D ~~~ E`;

export default function Page() {
  return (
    <div className="unit-testing-layout">
      <NavBar />

      <main className="content">
        <header className="hero">
          <div className="hero-eyebrow">Book Guide</div>
          <h1>Unit Testing Principles, Practices, and Patterns 完全ガイド</h1>
          <p className="lead">初学者のためのステップバイステップ ベストプラクティス</p>
          <p>
            この記事は、ソフトウェアテスト分野で国際的に高く評価されている書籍<em>Unit Testing Principles, Practices, and Patterns</em>（Vladimir Khorikov 著）の考え方を土台に、初学者でも迷わず実践できるよう「ステップ形式」で再構成した学習ガイドです。あわせて、Martin Fowler・Kent Beck・Kent C. Dodds・Ian Cooper・Gary Bernhardt といった著名な国際的開発者の発信内容、および2025〜2026年にかけての最新の議論（Test Desiderata 2.0、AI生成コードのテストなど）も参照し、現在の実務にそのまま使える形にまとめています。参照したソースのURLはすべて末尾の「参考文献・情報源」にまとめています。
          </p>
          <div className="book-card">
            <div>
              <div className="label"><i className="ti ti-book"></i>書名</div>
              <div className="value">Unit Testing Principles, Practices, and Patterns</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-user"></i>著者</div>
              <div className="value">Vladimir Khorikov</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-building"></i>出版社</div>
              <div className="value">Manning Publications</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-calendar"></i>刊行</div>
              <div className="value">2020年1月 / 304ページ</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-barcode"></i>ISBN</div>
              <div className="value">978-1-61729-627-7</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-external-link"></i>出版社ページ</div>
              <div className="value">
                <a
                  href="https://www.oreilly.com/library/view/unit-testing-principles/9781617296277/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  O&apos;Reilly で見る
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* ===== About ===== */}
        <section className="section" id="about">
          <div className="section-head">
            <span className="section-badge">Guide</span>
            <h2>この記事の対象読者と使い方</h2>
          </div>
          <div className="prose">
            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-info-circle"></i>本ガイドの前提
              </div>
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>対象読者</td>
                    <td>
                      ユニットテストの書き方は知っているが、「何を」「どこまで」「どう」テストすべきか迷っている初〜中級エンジニア
                    </td>
                  </tr>
                  <tr>
                    <td>前提知識</td>
                    <td>
                      任意の言語で xUnit系フレームワーク（JUnit, pytest, Jest, xUnit.net など）を使ったテストを書いたことがある
                    </td>
                  </tr>
                  <tr>
                    <td>使用言語</td>
                    <td>
                      原著はC#だが、考え方自体はどの言語・フレームワークにも応用できるため、本記事のコード例は擬似コード中心で表記する
                    </td>
                  </tr>
                  <tr>
                    <td>ゴール</td>
                    <td>
                      「テストの本数」ではなく「テストの価値」で品質を判断できるようになること
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== Step 01 ===== */}
        <section className="section" id="step1">
          <div className="section-head">
            <span className="section-badge">Step 01</span>
            <h2>ユニットテストの「本当の目的」を理解する</h2>
          </div>
          <div className="prose">
            <p>
              多くのチームは「カバレッジ80%達成」のような数値目標を掲げますが、これは本質的な目的ではありません。Khorikovはこの本の冒頭で、コードカバレッジのような指標は<strong>簡単に操作できてしまう</strong>ため、テストスイートの質を測る指標としては信頼できないと指摘しています。たとえばループや条件分岐を一切検証せずに実行だけする空疎なテストでも、カバレッジ数値は上がってしまいます。
            </p>
            <p>
              ユニットテストの本当の目的は、<strong>「ソフトウェアプロジェクトの持続的成長を可能にすること」</strong>です。テストが無い、またはテストが壊れやすいプロジェクトでは、次のような悪循環に陥ります。
            </p>

            <div className="mermaid-wrapper" id="diag-0">
              <Mermaid chart={DIAGRAM_0} />
            </div>
            <p className="diagram-caption">
              図1: 悪循環（左）と良い循環（右）― テストの目的は「持続的成長」
            </p>

            <p>
              ポイントは、<strong>「テストの数を増やすこと」ではなく「後述する4本柱を満たす価値の高いテストを選び取ること」</strong>がゴールだという点です。価値の低いテストは書かない方がまし、というのが本書全体を貫く姿勢です。
            </p>
          </div>
        </section>

        {/* ===== Step 02 ===== */}
        <section className="section" id="step2">
          <div className="section-head">
            <span className="section-badge">Step 02</span>
            <h2>そもそも「ユニットテスト」とは何か</h2>
          </div>
          <div className="prose">
            <p>
              「ユニットテスト」という言葉は現場でかなり曖昧に使われています。Khorikovは次の3つの性質を満たすテストを「ユニットテスト」と定義しています。
            </p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-list-check"></i>ユニットテストの3つの性質
              </div>
              <table>
                <thead>
                  <tr>
                    <th>性質</th>
                    <th>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>小さな「振る舞いの単位」を検証する</td>
                    <td>
                      「1つのクラス」や「1つのメソッド」という<strong>コードの単位</strong>ではなく、意味のある<strong>振る舞い（behavior）の単位</strong>を検証する
                    </td>
                  </tr>
                  <tr>
                    <td>高速に実行できる</td>
                    <td>
                      ミリ秒〜数十ミリ秒のオーダーで完了し、何百回実行しても苦にならない
                    </td>
                  </tr>
                  <tr>
                    <td>他のテストから隔離されている</td>
                    <td>
                      あるテストの結果が、他のテストの実行順序や実行有無に影響されない
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              ここで重要なのは3つ目の「隔離」の解釈です。「隔離」を<strong>テスト対象のコード（SUT: System Under Test）を他のクラスから隔離すること</strong>だと考えるか、<strong>テスト自体を他のテストから隔離すること</strong>だと考えるかで、後述する2つの流派が分かれます。
            </p>

            <div className="callout">
              <div>
                補足: 「1ユニット = 1メソッド」という誤解は非常によくあるアンチパターンの温床です。振る舞いは複数のクラス・メソッドにまたがって実装されることが多く、テストはその振る舞い単位に対して書くべきだ、という考え方は Ian Cooper氏の講演「TDD, Where Did It All Go Wrong?」でも強調されています（詳細はStep 3・参考文献参照）。
              </div>
            </div>
          </div>
        </section>

        {/* ===== Step 03 ===== */}
        <section className="section" id="step3">
          <div className="section-head">
            <span className="section-badge">Step 03</span>
            <h2>二大流派 ― classical school と London school</h2>
          </div>
          <div className="prose">
            <p>
              ユニットテストの世界には、大きく分けて2つの学派（流派）が存在します。本書はこの対比を軸に構成されており、著者自身は classical school（別名: Detroit school / Chicago school）の立場を取っています。
            </p>

            <div className="table-wrap">
              <div className="table-title">
                <i className="ti ti-arrows-split"></i>classical school vs London school
              </div>
              <table>
                <thead>
                  <tr>
                    <th>観点</th>
                    <th>classical school（Detroit / Chicago）</th>
                    <th>London school（mockist）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>「隔離」の対象</td>
                    <td>テストケース同士を隔離する</td>
                    <td>SUT（テスト対象）を協働オブジェクトから隔離する</td>
                  </tr>
                  <tr>
                    <td>テスト対象の粒度</td>
                    <td>クラスの集合体（振る舞いの単位）</td>
                    <td>基本的に1クラス単位</td>
                  </tr>
                  <tr>
                    <td>依存への対応</td>
                    <td>
                      <strong>共有され、かつ可変な依存（例: 静的なグローバル状態、外部サービス）のみ</strong>をテストダブルに置き換える
                    </td>
                    <td>
                      不変なオブジェクト以外のほぼ全ての依存をモックに置き換える
                    </td>
                  </tr>
                  <tr>
                    <td>設計への影響</td>
                    <td>
                      大きな依存グラフの塊が悪い設計の兆候として自然に見える
                    </td>
                    <td>
                      依存を全てインターフェース越しに注入する設計（DIコンテナ多用）に誘導しやすい
                    </td>
                  </tr>
                  <tr>
                    <td>代表的な文献</td>
                    <td>Kent Beck『Test-Driven Development: By Example』</td>
                    <td>
                      Steve Freeman &amp; Nat Pryce『Growing Object-Oriented Software, Guided by Tests』
                    </td>
                  </tr>
                  <tr>
                    <td>失敗しやすいテストの特徴</td>
                    <td>大きな結合度の高いクラス群に気づきにくい</td>
                    <td>
                      モックの多用によりテストが実装詳細に強く結合し、壊れやすくなる
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              どちらが「正しい」というより、<strong>モックをどこまで使うか</strong>という判断軸の違いだと理解するのが実務的です。次のStep 5・Step 6で扱う「4本柱」と「observable behavior」の考え方を理解すると、この対立を統一的に説明できるようになります。
            </p>
          </div>
        </section>
        <section className="section" id="step4"></section>
        <section className="section" id="step5"></section>
        <section className="section" id="step6"></section>
        <section className="section" id="step7"></section>
        <section className="section" id="step8"></section>
        <section className="section" id="step9"></section>
        <section className="section" id="step10"></section>
        <section className="section" id="step11"></section>
        <section className="section" id="step12"></section>
        <section className="section" id="step13"></section>
        <section className="section" id="checklist"></section>
        <section className="section" id="update2026"></section>
        <section className="section" id="references"></section>

        <footer className="footer">
          <p>
            Unit Testing Principles, Practices, and Patterns 完全ガイド ― Classic Software Testing Books companion series
          </p>
        </footer>
      </main>
    </div>
  );
}
