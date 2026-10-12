import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_GTAA } from './diagrams';

export default function Section1() {
  return (
    <section>
      <h2 id="1-tae-311テスト自動化アーキテクチャにおける主要な機能gtaa">
        1. TAE-3.1.1：テスト自動化アーキテクチャにおける主要な機能（gTAA）
      </h2>
      <h3 id="11-gtaageneric-test-automation-architectureとは">
        1.1 gTAA（Generic Test Automation Architecture）とは
      </h3>
      <p>
        <strong>gTAA（汎用テスト自動化アーキテクチャ）</strong>
        は、テスト自動化の「参照モデル」です。個別の製品や実装方法に依存せず、テスト自動化ソリューション（TAS）が持つべき機能・コンポーネント・インターフェースを抽象的に定義したものです。
      </p>
      <p>
        gTAAは、次の4つの外部システムとテスト自動化がどう連携するかをインターフェースとして定義します。
      </p>
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr className="header">
              <th>インターフェース</th>
              <th>説明</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>
                <strong>SUTインターフェース</strong>
              </td>
              <td>
                SUT（System Under
                Test：テスト対象システム）とTAF（テスト自動化フレームワーク）間の接続を表す
              </td>
            </tr>
            <tr className="even">
              <td>
                <strong>プロジェクト管理インターフェース</strong>
              </td>
              <td>テスト自動化の開発進捗を表す</td>
            </tr>
            <tr className="odd">
              <td>
                <strong>テスト管理インターフェース</strong>
              </td>
              <td>テストケース定義と自動化されたテストケースのマッピングを表す</td>
            </tr>
            <tr className="even">
              <td>
                <strong>構成管理インターフェース</strong>
              </td>
              <td>CI/CDパイプライン、環境、テストウェアを表す</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>gTAAが定義する4つのコア機能（ケーパビリティ）は次の通りです。</p>
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr className="header">
              <th>機能</th>
              <th>役割</th>
              <th>補足</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>
                <strong>Test Generation（テスト生成）</strong>
              </td>
              <td>テストモデルに基づき自動的にテストケースを設計する</td>
              <td>
                モデルベーステスト（MBT）ツールが活用できる。
                <strong>任意（オプション）</strong>の機能
              </td>
            </tr>
            <tr className="even">
              <td>
                <strong>Test Definition（テスト定義）</strong>
              </td>
              <td>テストケース／テストスイートの定義と実装を支援する</td>
              <td>
                テストモデルから導出できる場合もある。テスト定義をSUT・テストツールから分離する
              </td>
            </tr>
            <tr className="odd">
              <td>
                <strong>Test Execution（テスト実行）</strong>
              </td>
              <td>テスト実行とテストログ記録を支援する</td>
              <td>
                選択したテストを自動実行するツール、およびログ・レポートのコンポーネントを持つ
              </td>
            </tr>
            <tr className="even">
              <td>
                <strong>Test Adaptation（テスト適応）</strong>
              </td>
              <td>
                自動化されたテストをSUTの各種コンポーネント/インターフェースに適応させる機能を提供する
              </td>
              <td>API・プロトコル・サービスへ接続するための各種アダプタを提供する</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>これらの関係を図解すると以下のようになります。</p>
      <div className="mermaid-container">
        <Mermaid chart={DIAGRAM_GTAA} />
      </div>
      <div className="callout callout-practice">
        <div className="callout-header">
          <span className="callout-icon">💡</span>
          <span className="callout-label">ベストプラクティス</span>
        </div>
        <div className="callout-body">
          <ul>
            <li>
              gTAAはあくまで「参照モデル」であり、すべてのプロジェクトが4機能すべてを実装する必要はない。特にTest
              Generation（モデルベースのテスト生成）は多くの現場で任意扱いになる。
            </li>
            <li>
              ツール選定・アーキテクチャ設計を始める前に、まず「自分たちのTASはgTAAのどの機能を、どのツール／コンポーネントで担うのか」をマッピングしておくと、後工程での抜け漏れ（例：レポーティング機能の欠落）を防げる。
            </li>
            <li>
              Test
              Adaptation層を意識的に独立させておくと、SUTのAPIやUI構造が変わってもTest
              Definition層（テストケースそのもの）への影響を最小化できる（後述3.1.5のFacadeパターンとも直結する）。
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </section>
  );
}
