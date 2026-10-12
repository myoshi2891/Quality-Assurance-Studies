import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_FLOW_MODEL } from './diagrams';

export default function Section5() {
  return (
    <section>
      <h2 id="5-tae-315テスト自動化における設計原則とデザインパターン">
        5. TAE-3.1.5：テスト自動化における設計原則とデザインパターン
      </h2>
      <p>
        テスト自動化はソフトウェア開発活動そのものであるため、TAEにもソフトウェア開発者と同様に
        <strong>設計原則</strong>と<strong>デザインパターン</strong>の適用が求められます。
      </p>
      <h3 id="51-オブジェクト指向プログラミングの4原則">
        5.1 オブジェクト指向プログラミングの4原則
      </h3>
      <div className="table-scroll">
        <table className="data-table">
          <caption>オブジェクト指向プログラミングの4原則</caption>
          <thead>
            <tr className="header">
              <th>原則</th>
              <th>説明</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>
                <strong>カプセル化（Encapsulation）</strong>
              </td>
              <td>データと処理を1つの単位にまとめ、内部実装を隠蔽する</td>
            </tr>
            <tr className="even">
              <td>
                <strong>抽象化（Abstraction）</strong>
              </td>
              <td>本質的な部分だけを見せ、複雑な詳細を隠す</td>
            </tr>
            <tr className="odd">
              <td>
                <strong>継承（Inheritance）</strong>
              </td>
              <td>既存クラスの性質を引き継いで新しいクラスを作る</td>
            </tr>
            <tr className="even">
              <td>
                <strong>ポリモーフィズム（Polymorphism）</strong>
              </td>
              <td>同じインターフェースで異なる実装を扱えるようにする</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="52-solid原則">5.2 SOLID原則</h3>
      <p>
        <strong>SOLID</strong>は以下5つの原則の頭文字です。コードの可読性・保守性・拡張性を高めます。
      </p>
      <div className="table-scroll">
        <table className="data-table">
          <caption>SOLID原則</caption>
          <thead>
            <tr className="header">
              <th>頭文字</th>
              <th>原則名</th>
              <th>意味</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>
                <strong>S</strong>
              </td>
              <td>単一責任の原則（Single Responsibility）</td>
              <td>1つのクラスは1つの責任のみを持つ</td>
            </tr>
            <tr className="even">
              <td>
                <strong>O</strong>
              </td>
              <td>オープン・クローズドの原則（Open-Closed）</td>
              <td>拡張に対して開いており、修正に対して閉じている</td>
            </tr>
            <tr className="odd">
              <td>
                <strong>L</strong>
              </td>
              <td>リスコフの置換原則（Liskov Substitution）</td>
              <td>サブクラスは親クラスと置換可能でなければならない</td>
            </tr>
            <tr className="even">
              <td>
                <strong>I</strong>
              </td>
              <td>インターフェース分離の原則（Interface Segregation）</td>
              <td>クライアントが使わないインターフェースへの依存を強制しない</td>
            </tr>
            <tr className="odd">
              <td>
                <strong>D</strong>
              </td>
              <td>依存性逆転の原則（Dependency Inversion）</td>
              <td>上位モジュールは下位モジュールの具象ではなく抽象に依存する</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="53-テスト自動化における主なデザインパターン">
        5.3 テスト自動化における主なデザインパターン
      </h3>
      <div className="mermaid-container">
        <Mermaid chart={DIAGRAM_FLOW_MODEL} />
      </div>
      <div className="table-scroll">
        <table className="data-table">
          <caption>テスト自動化で使われるデザインパターン</caption>
          <thead>
            <tr className="header">
              <th>パターン</th>
              <th>説明</th>
              <th>得られる効果</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>
                <strong>Facadeパターン</strong>
              </td>
              <td>実装の詳細を隠し、テスターが必要とする操作だけを公開する</td>
              <td>テストケース作成者が内部実装を意識せずに済む</td>
            </tr>
            <tr className="even">
              <td>
                <strong>Singletonパターン</strong>
              </td>
              <td>SUTと通信するドライバのインスタンスが1つだけであることを保証する</td>
              <td>ドライバの重複生成による競合・リソース浪費を防ぐ</td>
            </tr>
            <tr className="odd">
              <td>
                <strong>Page Object Model（POM）</strong>
              </td>
              <td>
                画面ごとに「ページモデル」というクラスファイルを作成し、ロケータ（要素の場所）をそこに集約する
              </td>
              <td>
                SUTの構造が変わっても、修正箇所はページモデル内の1箇所のみで済む（各テストケースを個別修正する必要がない）
              </td>
            </tr>
            <tr className="even">
              <td>
                <strong>Flow Modelパターン</strong>
              </td>
              <td>
                POMをさらに拡張し、Page Objectの上にもう1つのFacade（ユーザーアクションの集合）を重ねる「二重Facade」構造
              </td>
              <td>テストステップを複数のテストスクリプトで再利用でき、抽象度・保守性がさらに向上する</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="callout callout-practice">
        <div className="callout-header">
          <span className="callout-icon">💡</span>
          <span className="callout-label">ベストプラクティス</span>
        </div>
        <div className="callout-body">
          <ul>
            <li>
              Page Object
              Modelを導入する際は「ロケータ（要素特定情報）」と「操作（クリック・入力など）」を明確に分離し、ロケータの変更が起きても操作メソッドのシグネチャは変えずに済むよう設計する。
            </li>
            <li>
              Flow
              Modelパターンは、テストケース数が増え「同じユーザー操作の組み合わせ」が複数のテストで重複し始めたタイミングで導入を検討するとよい。導入が早すぎると過剰設計（over-engineering）になりやすい。
            </li>
            <li>
              SOLID原則の中でも特に<strong>単一責任の原則</strong>と<strong>依存性逆転の原則</strong>は、Core
              Libraries／Business Logic／Test
              Scriptsのレイヤー分離（3.1.3参照）と直接結びつく。レイヤー設計そのものがSOLID原則の実践例になっていることを意識すると理解が深まる。
            </li>
            <li>
              Singletonパターンを使う際は、並列実行（並列テスト）環境でのスレッドセーフ性に注意する。単純なSingleton実装は並列実行時にドライバの共有・競合を引き起こすことがある。
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </section>
  );
}
