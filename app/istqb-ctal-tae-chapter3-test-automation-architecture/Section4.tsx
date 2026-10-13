import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_APPROACHES, DIAGRAM_TDD_CYCLE } from './diagrams';

export default function Section4() {
  return (
    <section>
      <h2 id="4-tae-314テストケース自動化のさまざまなアプローチ">
        4. TAE-3.1.4：テストケース自動化のさまざまなアプローチ
      </h2>
      <p>
        シラバスでは7つのアプローチが紹介されています。これらは優劣の順位ではなく、
        <strong>前の手法を土台に積み上がる関係</strong>として理解すると覚えやすいです。たとえば DDT
        は Structured Scripting を基礎とし、KDT は DDT を基礎とする場合が多い、という具合です。どれを採用するかは、SUT
        の安定性、テストデータの量、テスト作成者のスキル、保守にかけられる工数などの状況に応じて選びます。後段の手法ほど準備・設計のコストも増えるため、常に後段が優れているわけではありません（TDD/BDDは開発方法論ですが、正しく実践すれば自動化テストケースの生成につながります）。
      </p>
      <div className="mermaid-container">
        <Mermaid chart={DIAGRAM_APPROACHES} />
      </div>
      <h3 id="41-比較表メリットデメリット向いている場面">
        4.1 比較表（メリット・デメリット・向いている場面）
      </h3>
      <div className="table-scroll">
        <table className="data-table">
          <caption>テストケース自動化アプローチの比較</caption>
          <thead>
            <tr className="header">
              <th>アプローチ</th>
              <th>概要</th>
              <th>メリット</th>
              <th>デメリット</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>
                <strong>Capture/Playback（録画・再生）</strong>
              </td>
              <td>
                手動操作をツールが記録し、テストスクリプトを自動生成する。コードを公開しないものは
                <strong>ノーコード</strong>、コードを公開するものは<strong>ローコード</strong>と呼ばれる
              </td>
              <td>初期セットアップと利用が容易</td>
              <td>
                保守・拡張が困難／SUTが可用である必要がある／小規模かつ変化の少ないSUT向け／SUTバージョンへの依存度が高い／再利用より個別録画になりがちで工数がかかる
              </td>
            </tr>
            <tr className="even">
              <td>
                <strong>Linear Scripting（線形スクリプティング）</strong>
              </td>
              <td>
                カスタムライブラリを使わずにテストスクリプトを記述・実行するプログラミング手法。Capture/Playbackで録画したスクリプトを流用・修正することも可能
              </td>
              <td>セットアップと記述開始が容易／Capture/Playbackより修正しやすい</td>
              <td>
                保守・拡張が困難／テストケースの録画中はSUTが可用である必要がある／小規模向け／多少のプログラミング知識が必要
              </td>
            </tr>
            <tr className="odd">
              <td>
                <strong>Structured Scripting（構造化スクリプティング）</strong>
              </td>
              <td>再利用可能な要素（テストステップ、ユーザージャーニー）を持つテストライブラリを導入する</td>
              <td>保守・拡張・移植性が高い／ビジネスロジックとテストスクリプトを分離できる</td>
              <td>プログラミング知識が必要／TAF開発とテストウェア定義に初期投資が必要</td>
            </tr>
            <tr className="even">
              <td>
                <strong>Test-Driven Development（TDD）</strong>
              </td>
              <td>
                新機能実装前にテストケースを定義する。<strong>Red→Green→Refactor</strong>
                のサイクルで進める
              </td>
              <td>
                コンポーネントレベルのテストケース開発が単純化／コード品質・構造の向上／テスタビリティの向上／コードカバレッジ達成が容易／上位テストレベルへの欠陥伝播を削減／開発者・ビジネス担当者・テスト担当者間のコミュニケーション改善
              </td>
              <td>最初は習得に時間がかかる／正しく実践しないとコード品質への過信につながる</td>
            </tr>
            <tr className="odd">
              <td>
                <strong>Data-Driven Testing（DDT）</strong>
              </td>
              <td>
                構造化スクリプティングを発展させ、テストスクリプトにテストデータ（CSV、Excel、DBダンプ等）を与える。同じスクリプトを異なるデータで繰り返し実行できる
              </td>
              <td>
                データ投入だけでテストケースを迅速に拡張できる／新規テスト追加コストを大幅削減／テストアナリストがデータファイル作成だけでテストを指定でき、技術的なテスト自動化エンジニアへの依存を減らせる
              </td>
              <td>適切なテストデータ管理が必要</td>
            </tr>
            <tr className="even">
              <td>
                <strong>Keyword-Driven Testing（KDT）</strong>
              </td>
              <td>
                ユーザー視点で定義された「キーワード」とそれが操作するテストデータからなる、テストステップのリスト/表。多くはDDTの上に構築される
              </td>
              <td>
                テストアナリストやビジネスアナリストがテストケース作成に参加できる／手動テストにも応用可能（ISO/IEC/IEEE
                29119-5参照）
              </td>
              <td>
                キーワードの実装・保守が複雑／スコープが拡大すると困難／小規模システムには過剰な労力になる
              </td>
            </tr>
            <tr className="odd">
              <td>
                <strong>Behavior-Driven Development（BDD）</strong>
              </td>
              <td>
                Given-When-Thenという自然言語形式で受け入れ基準を記述し、フィーチャーファイルとして保存。BDDツールがこれを解釈・実行する
              </td>
              <td>
                開発者・ビジネス担当者・テスト担当者間のコミュニケーション改善／自動化されたシナリオが仕様のカバレッジを保証／テストピラミッドの複数レベルで活用可能
              </td>
              <td>
                ネガティブ条件・エッジケースは別途定義が必要（通常テストアナリストやTAEが担当）／自然言語記述だけがBDDだと誤解され、ビジネス担当者・開発者を巻き込めていないチームが多い／自然言語テストステップの実装・保守が複雑／ステップが過度に複雑だとデバッグが困難でコストがかかる
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="42-tddのred-green-refactorサイクル">4.2 TDDのRed-Green-Refactorサイクル</h3>
      <div className="mermaid-container">
        <Mermaid chart={DIAGRAM_TDD_CYCLE} />
      </div>
      <div className="callout callout-practice">
        <div className="callout-header">
          <span className="callout-icon">💡</span>
          <span className="callout-label">ベストプラクティス</span>
        </div>
        <div className="callout-body">
          <ul>
            <li>
              チームの技術レベルとSUTの変化頻度に応じてアプローチを選ぶ。プログラミング未経験者が多い場合はCapture/Playback系のノーコード/ローコードツールから始め、成熟に応じてStructured
              Scripting以降へ移行するのが現実的。
            </li>
            <li>
              DDT・KDTを導入する際は「誰が何を担当するか」（技術者がキーワード実装、非技術者がデータ・キーワード列を記述）を明確にし、テストデータ管理の仕組み（バージョン管理・命名規則）を最初に整備する。
            </li>
            <li>
              BDDを導入する際は「自然言語で書くこと」自体を目的化しない。ビジネス担当者・開発者・テスト担当者が三者で仕様策定に参加する（Three
              Amigos的な進め方）ことがBDD本来の価値を引き出す条件である。
            </li>
            <li>
              TDDは「テストファースト」を徹底しないと効果が出ない。テストを後付けする「TDDもどき」は品質への過信（false
              confidence）を生むため注意する。
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </section>
  );
}
