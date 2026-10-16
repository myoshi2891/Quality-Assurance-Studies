import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_PILOT_FLOW } from './diagrams';

export default function Section2() {
  return (
    <section className="block" id="s-41">
      <span className="section-num">3</span>
      <h2>4.1 テスト自動化の開発（パイロット／デプロイのガイドライン）</h2>

      <h3 id="s-41-why">なぜ「パイロットプロジェクト」から始めるのか</h3>
      <div className="prose">
        <p>
          いきなり本格的なテスト自動化基盤（TAS：Test Automation Solution）を全面導入するのはリスクが高すぎます。そこでシラバスは、<strong>小規模な検証（パイロット）から始めて、成功パターンを確認してから本格展開する</strong>というアプローチを推奨しています。
        </p>
        <p>
          初学者向けに言い換えると、パイロットとは「本格的に投資する前のお試し期間」です。期間は短くても、その結果がプロジェクト全体の自動化方針を左右するほどインパクトが大きい、という点がポイントです。
        </p>
      </div>

      <h3 id="s-41-eval">パイロットで評価すべき5つの項目</h3>
      <div className="prose">
        <p>
          シラバスは、SUT（System Under Test：テスト対象システム）とプロジェクト要件から集めた情報をもとに、次の5項目を評価してガイドラインを定めるべきだとしています。
        </p>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th className="num">#</th>
              <th style={{ width: '26%' }}>評価項目</th>
              <th>具体的に検討する内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="num">1</td>
              <td>使用するプログラミング言語</td>
              <td>
                SUTの開発言語と揃えるか、テストに適した言語を別途選ぶか。
              </td>
            </tr>
            <tr>
              <td className="num">2</td>
              <td>適切な商用ツール・OSSツール</td>
              <td>
                ライセンス費用、コミュニティのサポート状況、機能要件との適合。
              </td>
            </tr>
            <tr>
              <td className="num">3</td>
              <td>カバーすべきテストレベル</td>
              <td>
                コンポーネント・統合・システム・受入のどこを自動化対象にするか。
              </td>
            </tr>
            <tr>
              <td className="num">4</td>
              <td>選定するテストケース</td>
              <td>パイロットでの検証に十分な代表性を持つテストケース群。</td>
            </tr>
            <tr>
              <td className="num">5</td>
              <td>テストケース開発アプローチ</td>
              <td>
                第3章で学んだ線形スクリプティング、構造化スクリプティング、データ駆動、キーワード駆動、BDD等のどれを採用するか。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="prose">
        <p>
          これらの評価結果をもとに、TAE（Test Automation Engineer）は<strong>初期プロトタイプを作成</strong>し（要件に応じて複数作成し、それぞれの長所・短所を比較する場合もあります）、進むべき方向性を決定します。
        </p>
      </div>

      <h3 id="s-41-ops">パイロット実行時の運用プラクティス</h3>
      <div className="prose">
        <p>
          シラバス本文から、パイロット期間中に実施すべき運用上のポイントを整理すると、次のようなサイクルになります。
        </p>
      </div>

      <div className="diagram-card">
        <div className="diagram-title">
          <i className="ti ti-git-branch"></i> パイロット実行フロー
        </div>
        <div className="mermaid-wrapper">
          <Mermaid chart={DIAGRAM_PILOT_FLOW} />
        </div>
        <div className="diagram-fallback" style={{ display: 'none' }}>
          図：パイロットは「評価→プロトタイプ作成→CI・CD統合→リスク緩和→非技術面評価→展開判断」の順に進み、リスクが残る限りタイムラインへ戻って調整する。
        </div>
      </div>

      <div className="prose">
        <p>
          とくに重要なのは、<strong>パイロットの早い段階でCI・CDへの統合を試すこと</strong>です。シラバスは「これによりSUT側、TAS側、組織内ツール連携のいずれかに存在する問題が早期に露見しうる」と明記しています。問題を後工程で発見するよりも、パイロットの時点で発見するほうが手戻りコストが小さいためです。
        </p>
        <p>
          またテストケース数が増えてくると、当初決めたCI・CD構成（実行タイミングや実行方法）を見直す必要が出てくる点も述べられています。
        </p>
      </div>

      <h3 id="s-41-nontech">技術面以外に評価すべき観点</h3>
      <div className="prose">
        <p>
          自動化の成否は技術だけで決まりません。シラバスは以下の非技術的な観点もパイロット中に評価すべきとしています。
        </p>
      </div>
      <div className="kv-grid">
        <div className="kv-card">
          <div className="kv-label"><i className="ti ti-users"></i> チーム</div>
          <div className="kv-value">メンバーの知識・経験</div>
        </div>
        <div className="kv-card">
          <div className="kv-label"><i className="ti ti-building"></i> 体制</div>
          <div className="kv-value">チーム体制（組織構造）</div>
        </div>
        <div className="kv-card">
          <div className="kv-label"><i className="ti ti-license"></i> ルール</div>
          <div className="kv-value">ライセンスおよび組織のルール</div>
        </div>
        <div className="kv-card">
          <div className="kv-label"><i className="ti ti-target-arrow"></i> 対象範囲</div>
          <div className="kv-value">
            計画されているテストの種類と、自動化対象とするテストレベル
          </div>
        </div>
      </div>
      <div className="prose">
        <p>
          パイロット完了後は、TAEとテストマネージャーが共同で成果を評価し、<strong>継続するか、方向転換するか</strong>を意思決定します。
        </p>
      </div>

      <div id="s-41-bp" className="practice-card">
        <div className="practice-title">
          <i className="ti ti-bulb"></i> ベストプラクティス（4.1 パイロット計画）
        </div>
        <ul>
          <li>
            <i className="ti ti-check"></i>パイロットの<strong>スコープと評価範囲を最初に明文化</strong>し、目的を関係者間で合意する
          </li>
          <li>
            <i className="ti ti-check"></i>タイムラインを設定し、<strong>定期的な進捗チェックポイント</strong>を設けてリスクを早期に発見する
          </li>
          <li>
            <i className="ti ti-check"></i>可能な限り早い段階でCI・CDパイプラインへ組み込み、統合上の問題を先に洗い出す
          </li>
          <li>
            <i className="ti ti-check"></i>技術評価だけでなく、チームのスキルセット・体制・ライセンス条件も並行して評価する
          </li>
          <li>
            <i className="ti ti-check"></i>パイロット終了時は<strong>TAEとテストマネージャーの両者で成功・失敗を判断</strong>し、意思決定の記録を残す
          </li>
        </ul>
      </div>
    </section>
  );
}
