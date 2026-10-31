import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_09, DIAGRAM_10 } from './diagrams';

export default function Section6() {
  return (
    <section>
      <h2 id="step-6テストフレームワーク43節">
        STEP 6：テストフレームワーク（4.3節）
      </h2>
      <p>
        序文は、テストプロセス（およびプロセス改善）、テストメトリクス、テスト文書、構成管理、ツール支援を「テストフレームワーク」として紹介すると述べています。
      </p>
      <h3 id="6-1-テストプロセスの3層モデル">6-1. テストプロセスの3層モデル</h3>
      <p>
        Part 2
        が詳細を定めるテストプロセスは、<strong>組織レベル・テスト管理レベル・動的テストレベル</strong>の3層で捉えます（Part
        1 序文・ISO/ANSI等の Part 2 解説）。
      </p>
      <div aria-label="図解9" className="mermaid-diagram" id="mmd09" role="img">
        <Mermaid chart={DIAGRAM_09} />
      </div>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>層</th>
              <th>役割</th>
              <th>具体例（学習用）</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>組織レベル</td>
              <td>組織共通のルールを決める</td>
              <td>
                「全プロジェクトでリスクベースドテストを採る」というポリシー
              </td>
            </tr>
            <tr className="even">
              <td>テスト管理レベル</td>
              <td>プロジェクトやテストレベル単位で計画・監視・完了させる</td>
              <td>結合テスト計画の作成、進捗の監視、完了判断</td>
            </tr>
            <tr className="odd">
              <td>動的テストレベル</td>
              <td>実際にテストを設計・実行する</td>
              <td>テストケースを作り、環境を用意して実行し、不具合を報告</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="6-2-プロセスのインスタンス化とプロジェクトベース">
        6-2. プロセスの「インスタンス化」と「プロジェクトベース」
      </h3>
      <p>
        2022年版では、テストサブプロセスの概念を削除し、代わりに<strong>テストプロセスのインスタンス化（現場に合わせた具体化）</strong>の説明が加わりました。目次には、プロジェクト単位のテスト（project-based
        testing）を扱う項目もあります。
      </p>
      <div aria-label="図解10" className="mermaid-diagram" id="mmd10" role="img">
        <Mermaid chart={DIAGRAM_10} />
      </div>
      <h3 id="6-3-テスト文書3つのレベル">6-3. テスト文書（3つのレベル）</h3>
      <p>
        目次で確認できる文書名を、層ごとに整理します。テンプレートや記載例は Part 3
        が定めます。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>レベル</th>
              <th>文書（目次で確認できるもの）</th>
              <th>概要</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>組織レベル</td>
              <td>テストポリシー、組織テストプラクティス</td>
              <td>組織としてのテストの方針と、推奨するやり方</td>
            </tr>
            <tr className="even">
              <td>テスト管理レベル</td>
              <td>
                テスト計画、テスト状況報告（ほかに完了報告などが Part 3
                に存在）
              </td>
              <td>計画と進捗の共有</td>
            </tr>
            <tr className="odd">
              <td>動的テストレベル</td>
              <td>
                テスト仕様、テスト環境要求・テストデータ要求、テスト環境報告・テストデータ準備状況報告
              </td>
              <td>何をどう試すか、環境とデータの準備状況</td>
            </tr>
          </tbody>
        </table>
      </div>
      <aside className="callout callout-note">
        <div className="callout-body">
          <p>
            規格の用語定義：<strong>組織テストプラクティス</strong>は「組織内で行うテストに推奨される方法・やり方を記した文書」で、テストポリシーと整合させます。モバイルアプリ用と安全重視システム用など、<strong>複数持ってもよい</strong>と注記されています。
          </p>
        </div>
      </aside>
      <h3 id="6-4-43節のその他の項目">6-4. 4.3節のその他の項目</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>節</th>
              <th>内容</th>
              <th>ポイント（学習用の整理）</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>4.3.3 文書化の要求</td>
              <td>文書に何を求めるか</td>
              <td>必要十分な量に調整する</td>
            </tr>
            <tr className="even">
              <td>4.3.4 構成管理とテスト</td>
              <td>テスト資産の版管理</td>
              <td>テストケースと対象ソフトのバージョンを対応づける</td>
            </tr>
            <tr className="odd">
              <td>4.3.5 ツール支援</td>
              <td>テストの自動化・管理ツール</td>
              <td>ツールは目的に合わせて選ぶ</td>
            </tr>
            <tr className="even">
              <td>4.3.6 プロセス改善とテスト</td>
              <td>テスト自体を継続的に改善</td>
              <td>実績を測って見直す</td>
            </tr>
            <tr className="odd">
              <td>4.3.7 テストメトリクス</td>
              <td>テストの測定</td>
              <td>2022年版で<strong>附属書から本文へ移動</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="6-5-メトリクスの例学習用">6-5. メトリクスの例（学習用）</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>測定対象</th>
              <th>指標の例</th>
              <th>読み取り方</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>進捗</td>
              <td>実行済みテストケース数／計画数</td>
              <td>計画との差を把握</td>
            </tr>
            <tr className="even">
              <td>結果</td>
              <td>合格率、失敗数</td>
              <td>品質の傾向を把握</td>
            </tr>
            <tr className="odd">
              <td>欠陥</td>
              <td>重大度別の欠陥数、再発率</td>
              <td>リスクの高い領域を把握</td>
            </tr>
            <tr className="even">
              <td>カバレッジ</td>
              <td>要求カバレッジ、分岐カバレッジ</td>
              <td>テストの網羅度を把握</td>
            </tr>
          </tbody>
        </table>
      </div>
      <aside className="callout callout-warn">
        <div className="callout-title">注意</div>
        <div className="callout-body">
          <p>
            数値は目的ではなく<strong>意思決定の材料</strong>です。「合格率100%」だけで安心せず、何を試していないかも併せて確認します。
          </p>
        </div>
      </aside>
    </section>
  );
}
