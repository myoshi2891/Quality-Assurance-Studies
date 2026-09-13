import React from 'react';
import type { Metadata } from 'next';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './art-of-testing-guide.css';

export const metadata: Metadata = {
  title: '『The Art of Software Testing』から学ぶソフトウェアテスト実践ガイド',
  description:
    'Glenford J. Myersの古典的名著『The Art of Software Testing』の思想を土台に、テストの7原則、テストピラミッド、TDD、デバッグ技法、AI時代のテスト動向までを初学者向けにステップバイステップで解説する実践ガイド。',
};

const DIAGRAM_CH1 = `flowchart TB
subgraph OldWay["よくある誤解（避けるべき考え方）"]
direction TB
A1["目的: 正しく動くことを証明する"] --> A2["無意識に成功しそうな入力ばかり選ぶ"]
A2 --> A3["境界値や異常系を見落としやすい"]
end
subgraph NewWay["Myersが提唱する心構え（推奨）"]
direction TB
B1["目的: 誤りを見つけ出す"] --> B2["意図的に壊れそうな入力を選ぶ"]
B2 --> B3["欠陥発見率の高いテストケースが増える"]
end
OldWay ~~~ NewWay`;

const DIAGRAM_CH3 = `flowchart TB
Req["要件定義"] --> Design["設計"]
Design --> Code["実装"]
Code --> UT["単体テスト<br/>Unit Test"]
UT --> IT["結合テスト<br/>Integration Test"]
IT --> ST["システムテスト<br/>System Test"]
ST --> AT["受け入れテスト<br/>Acceptance Test"]
AT --> Release["リリース判定"]`;

export default function ArtOfSoftwareTestingPage() {
  return (
    <div className="art-of-testing-layout">
      <NavBar />

      <main className="main">
        <div className="hero">
          <p className="kicker">Beginner Guide &middot; Step-by-Step Best Practices</p>
          <h1>
            『The Art of Software Testing』から学ぶ
            <br />
            ソフトウェアテスト実践ガイド
          </h1>
          <p className="subtitle">初学者のためのステップバイステップ・ベストプラクティス</p>
          <div className="callout source">
            <div className="callout-title">
              <i className="ti ti-book-2"></i>参考書籍
            </div>
            Glenford J. Myers, Tom Badgett, Corey Sandler『The Art of Software Testing, 3rd Edition』
            <br />
            <a
              className="ref-url"
              href="https://www.oreilly.com/library/view/the-art-of/9781118133156/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.oreilly.com/library/view/the-art-of/9781118133156/
            </a>
          </div>
        </div>

        {/* はじめに */}
        <section className="chapter prose" id="intro">
          <div className="section-head">
            <span className="chip">
              <i className="ti ti-book-2"></i>
            </span>
            <h2>はじめに</h2>
          </div>
          <p>
            『The Art of Software Testing』は1979年にGlenford J. Myersが著し、2004年・2012年に改訂された、ソフトウェアテスト分野における最も古典的な書籍の一つです。ハードウェアやプログラミング言語は大きく変わりましたが、この本が説く「テストに対する考え方（心理学）」と「テストケースを設計する方法論」は、今日のアジャイル開発やAI支援開発の時代においても色褪せていません。
          </p>
          <p>
            このガイドは、その古典的な原則を土台としながら、Martin Fowler、Kent Beck、Robert C. Martin（Uncle Bob）、Googleのテストエンジニアリングチームなど、国際的に著名な開発者たちが発展させてきた現代のベストプラクティス（テストピラミッド、TDD、FIRST原則、Flaky Test対策など）を組み合わせ、初学者が最初の一歩を踏み出せるように、ステップバイステップで解説するものです。
          </p>
          <p>
            対象読者は、これからソフトウェアテストを学ぶプログラマー・QAエンジニアの初学者です。各章は独立して読める構成になっていますが、順番に読み進めることで、テストの考え方 &rarr; 技法 &rarr; 実践の流れが自然につながるようになっています。
          </p>
        </section>

        {/* 第1章 */}
        <section className="chapter prose" id="ch1">
          <div className="section-head">
            <span className="chip">
              <i className="ti ti-bug"></i>
            </span>
            <h2>第1章: テストの心理学 — なぜ「バグを探す」姿勢が重要なのか</h2>
          </div>
          <p>
            Myersが本書の中で最も強調したのは、テストの「目的」に関する定義でした。多くの人は無意識のうちに「プログラムが正しく動くことを証明するためにテストする」と考えてしまいますが、Myersはこれを明確に否定します。その代わりに、彼はテストを「プログラムの誤りを見つけ出す意図を持って実行するプロセス」であると再定義しました。
          </p>
          <p>
            この違いは些細な言葉遊びに見えるかもしれませんが、実務においては大きな差を生みます。「動作を証明したい」という気持ちでテストを設計すると、人は無意識に「失敗しなさそうな入力」ばかりを選んでしまい、結果として欠陥を見逃しやすくなります。逆に「壊してやろう」という意図を持つと、境界値や異常系など、欠陥が潜んでいそうな箇所を積極的に狙うようになり、テストの価値（欠陥発見率）が高まります。
          </p>
          <p>
            Myersはさらに、「良いテストケースとは、まだ見つかっていない欠陥を発見する確率が高いテストケースである」「成功したテストケースとは、まだ見つかっていない欠陥を検出できたテストケースである」という2つの原則を示しました。一般的な業務用語で言う「テストが成功した（＝エラーが出なかった）」という感覚とは、正反対の定義になっている点に注意してください。
          </p>

          <figure className="diagram-fig">
            <div className="diagram-wrap" id="diag-ch1">
              <Mermaid chart={DIAGRAM_CH1} />
            </div>
            <p className="fig-caption">
              図: 「証明したい」という思い込みと、Myersが提唱する「発見する」心構えの違い
            </p>
          </figure>

          <p>
            この心構えの転換は、後述するテストピラミッドやTDD、境界値分析といった、あらゆる現代的な技法の土台になっています。
          </p>
        </section>

        {/* 第2章 */}
        <section className="chapter prose" id="ch2">
          <div className="section-head">
            <span className="chip">
              <i className="ti ti-list-check"></i>
            </span>
            <h2>第2章: ソフトウェアテストの7原則</h2>
          </div>
          <p>
            Myersが説いた「テストとは欠陥を見つけるための破壊的な作業である」という心理学的な視点と、ISTQB（International Software Testing Qualifications Board）が Foundation Level シラバスにまとめた「テストの7原則」は、いずれもソフトウェアテストの土台をなす考え方であり、内容の面で強く響き合っています。ただし ISTQB の7原則が Myers の原則を直接体系化したものであるという公式の説明はなく、両者は同じテスト観を共有する別々の系譜として捉えるのが正確です。以下の7原則は ISTQB のシラバスに基づくもので、初学者はまずこの7つを頭に入れておくと、以降の技法の意味が理解しやすくなります。
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>原則</th>
                  <th>内容</th>
                  <th>実務での意味</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>テストは欠陥があることは示せるが、欠陥がないことは示せない</td>
                  <td>どれだけテストしても「バグゼロ」を証明することはできない</td>
                  <td>「全テスト成功＝安全」と過信しない</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>全数テストは不可能</td>
                  <td>入力の組み合わせは無限に近く、すべてを網羅することは非現実的</td>
                  <td>リスクベースで優先順位をつけて選択する</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>早期テストの原則</td>
                  <td>開発の早い段階でテスト活動を始めるほど欠陥修正コストが下がる</td>
                  <td>要件定義・設計段階からテスト観点を洗い出す</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>欠陥の偏在（クラスタリング）</td>
                  <td>欠陥は一部のモジュールに集中する傾向がある（パレートの法則的）</td>
                  <td>複雑・変更頻度の高い箇所を重点的にテストする</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>殺虫剤のパラドックス</td>
                  <td>同じテストを繰り返すだけでは新しい欠陥は見つからなくなる</td>
                  <td>テストケースを定期的に見直し・追加する</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>テストは状況に依存する</td>
                  <td>医療機器と社内ダッシュボードでは求められるテストの厳格さが異なる</td>
                  <td>プロジェクトのリスクに応じてテスト戦略を調整する</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>「バグゼロ」の誤信</td>
                  <td>バグがなくてもユーザーのニーズを満たさなければ失敗作である</td>
                  <td>機能要件だけでなくユーザー価値も検証する</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout source">
            <div className="callout-title">
              <i className="ti ti-certificate"></i>出典
            </div>
            ASTQB（ISTQB公認団体）による解説を要約 — 詳細は参考文献を参照してください。
          </div>
        </section>

        {/* 第3章 */}
        <section className="chapter prose" id="ch3">
          <div className="section-head">
            <span className="chip">
              <i className="ti ti-stack-2"></i>
            </span>
            <h2>第3章: テストレベルの全体像</h2>
          </div>
          <p>
            Myersは著書の中で、テストを「単体テスト」と「高次テスト（結合・システム・受け入れ・設置テストなど）」に分類しました。この考え方は、現在の開発プロセスにもそのまま受け継がれています。
          </p>

          <figure className="diagram-fig">
            <div className="diagram-wrap" id="diag-ch3">
              <Mermaid chart={DIAGRAM_CH3} />
            </div>
            <p className="fig-caption">
              図: 要件定義からリリース判定までのテストレベルの流れ
            </p>
          </figure>

          <p>各テストレベルの目的を表にまとめます。</p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>テストレベル</th>
                  <th>目的</th>
                  <th>対象</th>
                  <th>主な実施者</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>単体テスト</td>
                  <td>関数・クラス単位のロジックが正しいか検証する</td>
                  <td>個々のモジュール</td>
                  <td>開発者</td>
                </tr>
                <tr>
                  <td>結合テスト</td>
                  <td>モジュール間のインターフェースが正しく連携するか検証する</td>
                  <td>複数モジュールの組み合わせ</td>
                  <td>開発者・QA</td>
                </tr>
                <tr>
                  <td>システムテスト</td>
                  <td>システム全体が仕様どおりに動作するか検証する</td>
                  <td>システム全体</td>
                  <td>QAチーム</td>
                </tr>
                <tr>
                  <td>受け入れテスト</td>
                  <td>ユーザーの要求を満たしているか、ビジネス視点で検証する</td>
                  <td>システム全体</td>
                  <td>顧客・プロダクトオーナー</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 第4章 */}
        <section className="chapter prose" id="ch4">
          <div className="section-head">
            <span className="chip">
              <i className="ti ti-box"></i>
            </span>
            <h2>第4章: ブラックボックステスト技法</h2>
          </div>
          <p>
            ブラックボックステストとは、内部の実装コードを見ずに、入力と出力の関係だけに着目してテストケースを設計する手法です。Myersはこの分野の代表的な技法として「同値分割」と「境界値分析」を紹介しており、これらは今日でも実務で最も使われる技法です。
          </p>

          <h3>4.1 同値分割（Equivalence Partitioning）</h3>
          <p>
            入力データを「同じ挙動をするはずのグループ（同値クラス）」に分割し、各グループから代表値を1つずつ選んでテストする技法です。これにより、無限に近い入力パターンを現実的な数のテストケースに絞り込めます。
          </p>
          <p>例: 「年齢18〜65歳のみ会員登録できるサービス」の場合</p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>区分</th>
                  <th>範囲</th>
                  <th>代表値の例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>無効パーティション（下限未満）</td>
                  <td>18歳未満</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>有効パーティション</td>
                  <td>18〜65歳</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>無効パーティション（上限超過）</td>
                  <td>65歳超</td>
                  <td>80</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>4.2 境界値分析（Boundary Value Analysis）</h3>
          <p>
            Myers自身が強調したように、欠陥は範囲の「境界」付近に集中しやすい性質があります（オフバイワンエラーなど）。境界値分析は、同値分割で求めた境界の直前・直後・境界そのものの値を重点的にテストする技法です。
          </p>
          <p>
            先ほどの例（18〜65歳）で境界値分析を行うと、以下のようなテストケースになります。
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>テストケース</th>
                  <th>入力値</th>
                  <th>期待結果</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>下限境界の直前</td>
                  <td>17</td>
                  <td>登録拒否</td>
                </tr>
                <tr>
                  <td>下限境界</td>
                  <td>18</td>
                  <td>登録許可</td>
                </tr>
                <tr>
                  <td>下限境界の直後</td>
                  <td>19</td>
                  <td>登録許可</td>
                </tr>
                <tr>
                  <td>上限境界の直前</td>
                  <td>64</td>
                  <td>登録許可</td>
                </tr>
                <tr>
                  <td>上限境界</td>
                  <td>65</td>
                  <td>登録許可</td>
                </tr>
                <tr>
                  <td>上限境界の直後</td>
                  <td>66</td>
                  <td>登録拒否</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            同値分割だけなら3件（10 / 30 / 80）ですが、これに境界値分析の6件を追加すると合計9件のテストケースになります。境界値分析は同値分割を置き換えるものではなく、境界付近を上乗せで厚くする技法であり、少ないコストで欠陥の出やすい箇所を効率よくカバーできます。
          </p>
        </section>

        {/* 第5章 */}
        <section className="chapter prose" id="ch5">
          <div className="section-head">
            <span className="chip">
              <i className="ti ti-code"></i>
            </span>
            <h2>第5章: ホワイトボックステスト技法とコードカバレッジ</h2>
          </div>
          <p>
            ホワイトボックステストは、内部のソースコード構造（分岐やループ）に着目してテストケースを設計する手法です。Myersは「どれだけコードを通しても、それだけでは正しさを保証できない」と繰り返し警告しており、この考え方はGoogleのテストエンジニアリングチームが公開している「コードカバレッジのベストプラクティス」にも引き継がれています。
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>カバレッジ種別</th>
                  <th>意味</th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ステートメント（命令網羅）</td>
                  <td>すべての行が最低1回実行されたか</td>
                  <td>最も基本的だが弱い基準</td>
                </tr>
                <tr>
                  <td>ブランチ（分岐網羅）</td>
                  <td>すべてのif/switch分岐の両方が実行されたか</td>
                  <td>ステートメントより厳格</td>
                </tr>
                <tr>
                  <td>条件網羅</td>
                  <td>複雑な論理式の各条件が真偽両方をとったか</td>
                  <td>AND/OR条件のバグを検出しやすい</td>
                </tr>
                <tr>
                  <td>パス網羅</td>
                  <td>すべての実行経路を網羅したか</td>
                  <td>理論上最も厳格だが現実的には組み合わせ爆発を起こす</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Googleのテストブログが指摘しているように、カバレッジ率が高いこと自体は「そのコードを実行した」ことを示すに過ぎず、「意味のある検証（アサーション）をした」ことは保証しません。カバレッジは目的ではなく、テストの抜け漏れを見つけるための手がかりとして使うのが健全な運用です。ミューテーションテスト（コードにわざと小さなバグを注入し、テストがそれを検知できるか確認する手法）を併用すると、カバレッジだけでは見えない「見せかけのテスト」を発見できます。
          </p>
        </section>

        {/* 第6章 */}
        <section className="chapter prose" id="ch6">
          <div className="section-head">
            <span className="chip">
              <i className="ti ti-eye"></i>
            </span>
            <h2>
              第6章: 非実行型テスト — インスペクション・ウォークスルー・デスクチェック
            </h2>
          </div>
          <p>
            Myersの著書でもう一つ重要なのが、プログラムを実際に実行せずにレビューする「非実行型テスト」です。現代のコードレビュー文化の原型とも言える考え方です。
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>手法</th>
                  <th>進め方</th>
                  <th>向いている場面</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>インスペクション</td>
                  <td>
                    作成者含む3〜4名で、チェックリストに沿って一行ずつ声に出して確認する
                  </td>
                  <td>重要なモジュールの品質を厳格に担保したいとき</td>
                </tr>
                <tr>
                  <td>ウォークスルー</td>
                  <td>
                    グループで簡単なテストケースを使い、プログラムの実行を人力でたどる
                  </td>
                  <td>設計の妥当性を早期に確認したいとき</td>
                </tr>
                <tr>
                  <td>デスクチェック</td>
                  <td>個人でコードを静かに読み返し、論理的な誤りを探す</td>
                  <td>個人作業の最終確認、レビュー前のセルフチェック</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Myersは、これらの人手によるレビューだけでも、実行テストと同程度、あるいはそれ以上の欠陥を発見できると述べています。現代のプルリクエストレビューやペアプログラミングも、この考え方の延長線上にあります。
          </p>
        </section>
      </main>
    </div>
  );
}
