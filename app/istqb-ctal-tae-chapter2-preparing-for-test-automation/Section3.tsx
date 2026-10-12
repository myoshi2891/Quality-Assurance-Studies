import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_SUT, DIAGRAM_TOOLS } from './diagrams';

export default function Section3() {
  return (
    <>
      <section id="sec-3">
        <h2>3. 2.2 適切なツール・戦略を選定するための評価プロセス</h2>
        <h3 id="sec-3-1">3.1 SUTの分析（2.2.1）</h3>
        <p>
          自動化ソリューションを決める前に、まず対象となるSUTを分析し、<strong>要件を集める</strong>必要があります。SUTの種類（Webサービス、モバイル、Webアプリなど）によって、技術的に必要な自動化アプローチは異なります。
        </p>
        <blockquote>
          <p>
            この調査は、手動テスト担当者、ビジネス関係者、ビジネスアナリストなど、<strong>他のステークホルダーと協働して行うことが推奨されています</strong>。これにより、リスクとその緩和策をできるだけ多く洗い出し、将来にわたって有益な自動化ソリューションにつなげることができます。
          </p>
        </blockquote>

        <div className="mermaid-container" id="mermaid-diagram-sut">
          <Mermaid chart={DIAGRAM_SUT} />
        </div>

        <h4 id="perspectives-heading">分析で検討すべき8つの観点</h4>
        <div className="table-scroll">
          <table aria-labelledby="perspectives-heading">
            <thead>
              <tr>
                <th>#</th>
                <th>観点</th>
                <th>具体的な問い</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>テストプロセス活動</td>
                <td>
                  テスト管理・テスト設計・テスト生成・テスト実行のどれを自動化するか
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>テストレベル</td>
                <td>
                  コンポーネント／統合／システム／受入のどのレベルを対象とするか
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>テストタイプ</td>
                <td>
                  機能テスト、性能テスト、セキュリティテストなど、どのタイプを対象とするか
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>役割・スキルセット</td>
                <td>
                  どの役割（テスト分析者、TAEなど）がどのスキルで関与するか
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>対象製品・製品ライン</td>
                <td>ソリューションの適用範囲・寿命をどう定義するか</td>
              </tr>
              <tr>
                <td>6</td>
                <td>SUTとの互換性</td>
                <td>対象となるSUTの技術スタックとの互換性</td>
              </tr>
              <tr>
                <td>7</td>
                <td>テストデータ</td>
                <td>テストデータの入手可能性と品質</td>
              </tr>
              <tr>
                <td>8</td>
                <td>到達困難なケースのエミュレーション</td>
                <td>
                  サードパーティ連携など、直接テストできない部分をどう模倣するか
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="callout-practice">
          <div className="callout-header">
            <span className="callout-icon">💡</span>
            <span className="callout-label">ベストプラクティス</span>
          </div>
          <ul>
            <li>
              「自動化ありき」で進めず、必ずSUTの技術的特性（UIの有無、プロトコル、モバイル/Web/APIなど）を先に把握してから要件を定義する。
            </li>
            <li>
              要件収集は一人で行わず、テスト分析者・ビジネスアナリスト・ビジネス関係者を巻き込み、<strong>リスクの見落としを減らす</strong>。
            </li>
            <li>
              8つの観点はチェックリストとして使い、抜け漏れなく初期要件をドキュメント化しておくと、後のツール比較（2.2.2）で判断がぶれない。
            </li>
          </ul>
        </div>

        <h3 id="sec-3-2">3.2 ツール評価の技術的所見の図示（2.2.2）</h3>
        <p>
          SUTの分析と要件収集が終わったら、次に候補となるテストツールを比較します。シラバスは「<strong>単一のツールでは全要件を満たせない場合がある</strong>」と明言しており、ステークホルダーもその前提を理解しておく必要があります。
        </p>

        <h4 id="comparison-heading">比較表（Comparison Table）の作り方</h4>
        <p>
          推奨されるのは、ツールを列に、要件を行にした<strong>比較表</strong>を作ることです。各セルにはそのツールがその要件をどの程度満たすか（適合度）を記載し、要件の優先度は別の列で記録します。
        </p>
        <div className="table-scroll">
          <table aria-labelledby="comparison-heading">
            <thead>
              <tr>
                <th>要件 ＼ ツール</th>
                <th>優先度</th>
                <th>ツールA</th>
                <th>ツールB</th>
                <th>ツールC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>対応言語／技術・IDE</td>
                <td>高</td>
                <td>◎</td>
                <td>○</td>
                <td>△</td>
              </tr>
              <tr>
                <td>環境設定の柔軟性（動的/静的値）</td>
                <td>中</td>
                <td>○</td>
                <td>◎</td>
                <td>○</td>
              </tr>
              <tr>
                <td>テストデータ管理（バージョン管理連携）</td>
                <td>高</td>
                <td>△</td>
                <td>◎</td>
                <td>○</td>
              </tr>
              <tr>
                <td>対応テストタイプ</td>
                <td>中</td>
                <td>○</td>
                <td>○</td>
                <td>◎</td>
              </tr>
              <tr>
                <td>レポーティング機能</td>
                <td>低</td>
                <td>◎</td>
                <td>○</td>
                <td>○</td>
              </tr>
              <tr>
                <td>他ツール連携（CI/CD、タスク管理、テスト管理）</td>
                <td>高</td>
                <td>○</td>
                <td>◎</td>
                <td>△</td>
              </tr>
              <tr>
                <td>拡張性・保守性・変更容易性・互換性・信頼性</td>
                <td>中</td>
                <td>○</td>
                <td>◎</td>
                <td>○</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="legend-note">
          凡例（適合度）：◎＝十分に満たす／○＝ある程度満たす／△＝満たさない・要追加検討
          <br />
          凡例（優先度）：高／中／低（要件の重要度。適合度の記号とは独立に記録する）
        </p>

        <h4 id="tech-requirements-heading">評価すべき7つの技術要件</h4>
        <div className="mermaid-container" id="mermaid-diagram-tools">
          <Mermaid chart={DIAGRAM_TOOLS} />
        </div>

        <div className="table-scroll">
          <table aria-labelledby="tech-requirements-heading">
            <thead>
              <tr>
                <th>#</th>
                <th>要件</th>
                <th>確認ポイント</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>言語／技術／IDE</td>
                <td>
                  ツールの実装言語・対応IDEはSUTやチームのスキルセットと合っているか
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>環境設定の柔軟性</td>
                <td>
                  複数の実行環境・実行構成に対応でき、動的/静的な設定値を扱えるか
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>テストデータ管理</td>
                <td>
                  ツール内でテストデータを管理できるか。中央リポジトリでのバージョン管理と統合できるか
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>対応テストタイプ</td>
                <td>
                  テストタイプごとに異なるツールが必要になる場合がある点を考慮しているか
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>レポーティング機能</td>
                <td>プロジェクトのテストレポーティング要件と整合しているか</td>
              </tr>
              <tr>
                <td>6</td>
                <td>他ツールとの連携</td>
                <td>
                  CI/CD、タスク管理、テスト管理、レポーティングなど組織内の既存ツール群と統合できるか
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>アーキテクチャ拡張性</td>
                <td>
                  スケーラビリティ・保守性・変更容易性・互換性・信頼性の観点で将来の拡張に耐えられるか
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="callout-practice">
          <div className="callout-header">
            <span className="callout-icon">💡</span>
            <span className="callout-label">ベストプラクティス</span>
          </div>
          <ul>
            <li>
              比較表は「ツールの機能一覧」ではなく、<strong>2.2.1で洗い出した要件に対する適合度</strong>を軸に作る。要件起点で評価することが重要。
            </li>
            <li>
              唯一絶対のツールは存在しない前提で、<strong>複数ツールの組み合わせ（ツールセット）</strong>を選択肢として提示する。
            </li>
            <li>
              最終判断のプロセス（誰がどう決めるか）はプロジェクトごとに異なってよいが、<strong>必ず提案内容をステークホルダーに提示し承認を得るステップを設ける</strong>。
            </li>
            <li>
              コスト（ライセンス費用、学習コスト、保守コスト）も比較軸に含め、機能面だけで判断しない。
            </li>
          </ul>
        </div>
      </section>

      <hr />
    </>
  );
}
