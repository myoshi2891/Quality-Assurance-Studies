import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_PURPOSE3, DIAGRAM_DECISION } from './diagrams';

export default function Section2() {
  return (
    <section className="section" id="s2">
      <div className="section-head">
        <div className="section-icon">
          <i className="ti ti-target-arrow"></i>
        </div>
        <div>
          <span className="eyebrow">
            1.1 テスト自動化の目的（Purpose of Test Automation）
          </span>
          <h2>テスト自動化は何のために行うのか</h2>
        </div>
      </div>

      <h3>
        <i className="ti ti-info-circle"></i>テスト自動化とは何か
      </h3>
      <p>
        シラバスでは、テスト自動化（自動テスト実行とテストレポーティングを含む）を、以下のいずれか、または複数の活動と定義しています。
      </p>
      <ul>
        <li>
          専用のソフトウェアツールを使ってテストスイートの制御・セットアップを行うこと
        </li>
        <li>テストを自動的な方法で実行すること</li>
        <li>
          実際の結果（actual results）と期待される結果（expected results）を比較すること
        </li>
      </ul>
      <p>
        テスト自動化はテスト対象システム（SUT）と相互作用する重要な機能・能力を提供します。対象範囲も幅広く、UIのあるSUT、UIのないSUT、モバイルアプリケーション、ネットワークプロトコル・接続など、多様なソフトウェアをカバーできます。
      </p>

      <div className="diagram-card">
        <div className="diagram-wrap" data-diagram="purpose3">
          <Mermaid chart={DIAGRAM_PURPOSE3} />
        </div>
        <p className="cap">テスト自動化を構成する3つの活動と、それらが対象とするSUT</p>
      </div>

      <h3 id="s2-advantages-heading">
        <i className="ti ti-thumb-up"></i>テスト自動化のメリット（Advantages）
      </h3>
      <div className="table-wrap">
        <table aria-labelledby="s2-advantages-heading">
          <thead>
            <tr>
              <th>#</th>
              <th>メリット</th>
              <th>解説</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="centered">1</td>
              <td>ビルドあたりの実行テスト数増加</td>
              <td>手動テストより多くのテストを1ビルドで実行できる</td>
            </tr>
            <tr>
              <td className="centered">2</td>
              <td>手動では不可能なテストの実現</td>
              <td>リアルタイム応答、リモートテスト、並行（並列）テストなど</td>
            </tr>
            <tr>
              <td className="centered">3</td>
              <td>より複雑なテストの実行</td>
              <td>手動より複雑な条件・シナリオを扱える</td>
            </tr>
            <tr>
              <td className="centered">4</td>
              <td>実行速度の向上</td>
              <td>手動テストより高速に実行できる</td>
            </tr>
            <tr>
              <td className="centered">5</td>
              <td>ヒューマンエラーの低減</td>
              <td>人為的ミスの影響を受けにくい</td>
            </tr>
            <tr>
              <td className="centered">6</td>
              <td>テストリソースの効率的活用</td>
              <td>人的リソースをより効果的・効率的に使える</td>
            </tr>
            <tr>
              <td className="centered">7</td>
              <td>迅速なフィードバック</td>
              <td>SUTの品質について早期にフィードバックが得られる</td>
            </tr>
            <tr>
              <td className="centered">8</td>
              <td>システム信頼性の向上支援</td>
              <td>可用性・回復性（availability, recoverability）などの向上に貢献</td>
            </tr>
            <tr>
              <td className="centered">9</td>
              <td>テスト実行の一貫性向上</td>
              <td>テストサイクルをまたいで一貫した実行結果が得られる</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="s2-disadvantages-heading">
        <i className="ti ti-thumb-down"></i>テスト自動化のデメリット（Disadvantages）
      </h3>
      <div className="table-wrap">
        <table aria-labelledby="s2-disadvantages-heading">
          <thead>
            <tr>
              <th>#</th>
              <th>デメリット</th>
              <th>解説</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="centered">1</td>
              <td>追加コストの発生</td>
              <td>
                TAE（テスト自動化エンジニア）の採用、新規ハードウェア購入、トレーニング費用など
              </td>
            </tr>
            <tr>
              <td className="centered">2</td>
              <td>初期投資の必要性</td>
              <td>テスト自動化ソリューション構築のための初期投資が必要</td>
            </tr>
            <tr>
              <td className="centered">3</td>
              <td>開発・保守にかかる時間</td>
              <td>ソリューションの開発と継続的なメンテナンスに時間がかかる</td>
            </tr>
            <tr>
              <td className="centered">4</td>
              <td>明確な目的設定の必要性</td>
              <td>成功のためには明確なテスト自動化の目的定義が不可欠</td>
            </tr>
            <tr>
              <td className="centered">5</td>
              <td>テストの硬直性</td>
              <td>SUTの変更に対する適応力が手動テストより低い場合がある</td>
            </tr>
            <tr>
              <td className="centered">6</td>
              <td>新たな欠陥混入のリスク</td>
              <td>テスト自動化自体が新たな欠陥を持ち込む可能性がある</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>
        <i className="ti ti-alert-triangle"></i>テスト自動化の限界（Limitations）
      </h3>
      <p className="section-note">
        デメリットとは別に、シラバスでは「テスト自動化そのものが持つ限界」も明示しています。試験では「デメリット」と「限界」の区別を問われることがあるため注意しましょう。
      </p>
      <ul>
        <li>すべての手動テストが自動化できるわけではない</li>
        <li>自動化されたテストは、プログラムされた内容しか検証できない</li>
        <li>
          テスト自動化は機械で解釈可能な結果しか確認できないため、品質特性の一部は自動化で検証できない場合がある
        </li>
        <li>
          テスト自動化は、自動化されたテストオラクル（test oracle）で検証可能な結果しか確認できない
        </li>
      </ul>

      <div className="diagram-card">
        <div className="diagram-wrap" data-diagram="decision">
          <Mermaid chart={DIAGRAM_DECISION} />
        </div>
        <p className="cap">
          自動化するかどうかを判断する際の考え方（限界①③・限界④との対応）
        </p>
      </div>

      <div className="practice-card">
        <div className="practice-card-head">
          <i className="ti ti-bulb"></i>
          <span>ベストプラクティス：1.1 テスト自動化の目的</span>
        </div>
        <ul className="practice-list">
          <li>
            <span className="p-num">1</span>
            <div className="p-body">
              <strong>メリット・デメリット・限界を分けて整理する。</strong>
              面接や社内提案の場でも「デメリット（コストや保守負荷）」と「限界（手動テストの一部を自動化できないことや、プログラムされた内容しか検証できないことを含む自動化固有の制約・適用範囲）」を混同すると誤解を招くため、常に分離して説明できるようにしておく。
            </div>
          </li>
          <li>
            <span className="p-num">2</span>
            <div className="p-body">
              <strong>自動化の目的を最初に定義する。</strong>
              デメリットの1つである「明確な目的設定の必要性」に対応するため、自動化プロジェクトの開始前に「何を、どのレベルで、なぜ自動化するのか」を明文化する。
            </div>
          </li>
          <li>
            <span className="p-num">3</span>
            <div className="p-body">
              <strong>テストオラクルの実現可能性を事前検証する。</strong>
              機械判定できない品質特性（UIの見た目の美しさなど）は自動化の対象から除外するか、探索的テストなど別の検証手段と組み合わせる。
            </div>
          </li>
          <li>
            <span className="p-num">4</span>
            <div className="p-body">
              <strong>ROI（投資対効果）を継続的に可視化する。</strong>
              初期投資と保守コストがかかる特性を踏まえ、自動化によるコスト削減・品質向上の効果を定量的に追跡し、経営層への説明材料とする。
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
