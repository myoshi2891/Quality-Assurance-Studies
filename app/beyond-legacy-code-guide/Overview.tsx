import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Overview() {
  return (
    <section id="overview">
      <p className="section-eyebrow">
        <i className="ti ti-list-details">
        </i>
        {"OVERVIEW"}
      </p>
      <h2>
        {"9つのプラクティス全体像"}
      </h2>
      <div className="prose">
        <p>
          {" 9つのプラクティスは、著者によれば、エクストリーム・プログラミング(XP)・スクラム(Scrum)・リーン(Lean)といったアジャイル手法に由来する実践を、初学者にも扱いやすい形に整理し直したものです(このうちXPを出自とする技術プラクティスが中心に据えられています)。全体は大きく4つの目的グループに分けて理解すると把握しやすくなります。 "}
        </p>
      </div>
      <div id="diagram-overview" className="diagram-container">
        <Mermaid chart={DIAGRAMS["diagram-overview"]} />
      </div>
      <p className="diagram-caption">
        {" 図3: 9つのプラクティスの流れ(色が濃いノードは各目的グループの起点、緑は最終到達点) "}
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>
                {"#"}
              </th>
              <th>
                {"英語名"}
              </th>
              <th>
                {"日本語名"}
              </th>
              <th>
                {"ひとことで言うと"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {"1"}
              </td>
              <td>
                {"Say What, Why, and for Whom Before How"}
              </td>
              <td>
                {"やり方より先に目的・理由・対象を伝える"}
              </td>
              <td>
                {"実装方法の指示ではなく、達成したいゴールを共有する"}
              </td>
            </tr>
            <tr>
              <td>
                {"2"}
              </td>
              <td>
                {"Build in Small Batches"}
              </td>
              <td>
                {"小さなバッチで作る"}
              </td>
              <td>
                {"作業を小さく分割し、早く頻繁にフィードバックを得る"}
              </td>
            </tr>
            <tr>
              <td>
                {"3"}
              </td>
              <td>
                {"Integrate Continuously"}
              </td>
              <td>
                {"継続的に統合する"}
              </td>
              <td>
                {"変更をこまめに統合し、統合の痛みを分散する"}
              </td>
            </tr>
            <tr>
              <td>
                {"4"}
              </td>
              <td>
                {"Collaborate"}
              </td>
              <td>
                {"協力しあう"}
              </td>
              <td>
                {"ペアプロやモブ、レビューで知識を分散・共有する"}
              </td>
            </tr>
            <tr>
              <td>
                {"5"}
              </td>
              <td>
                {"Create CLEAN Code"}
              </td>
              <td>
                {"CLEANなコードを作る"}
              </td>
              <td>
                {"5つの品質特性を満たすコードを書く"}
              </td>
            </tr>
            <tr>
              <td>
                {"6"}
              </td>
              <td>
                {"Write the Test First"}
              </td>
              <td>
                {"まずテストを書く"}
              </td>
              <td>
                {" テストを実装より先に書き、テスト容易性の高い設計に導く "}
              </td>
            </tr>
            <tr>
              <td>
                {"7"}
              </td>
              <td>
                {"Specify Behaviors with Tests"}
              </td>
              <td>
                {"テストで振る舞いを明示する"}
              </td>
              <td>
                {"テストを仕様書として扱う"}
              </td>
            </tr>
            <tr>
              <td>
                {"8"}
              </td>
              <td>
                {"Implement the Design Last"}
              </td>
              <td>
                {"設計は最後に実装する"}
              </td>
              <td>
                {"設計を先に固定せず、小さなサイクルの中で発展させる"}
              </td>
            </tr>
            <tr>
              <td>
                {"9"}
              </td>
              <td>
                {"Refactor Legacy Code"}
              </td>
              <td>
                {"レガシーコードをリファクタリングする"}
              </td>
              <td>
                {"動作を変えずに構造を継続的に改善する"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
