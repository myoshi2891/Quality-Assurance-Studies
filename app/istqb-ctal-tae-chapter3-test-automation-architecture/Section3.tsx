import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_TAF_LAYERS, DIAGRAM_TAF_SCALING } from './diagrams';

export default function Section3() {
  return (
    <section>
      <h2 id="3-tae-313テスト自動化フレームワークtafのレイヤー化">
        3. TAE-3.1.3：テスト自動化フレームワーク（TAF）のレイヤー化
      </h2>
      <h3 id="31-tafとは">3.1 TAFとは</h3>
      <p>
        <strong>TAF（Test Automation Framework）</strong>はTASの土台（基盤）です。一般的に以下を含みます。
      </p>
      <ul>
        <li>
          <strong>テストハーネス（テストランナー）</strong>：テストを実行する仕組み
        </li>
        <li>
          <strong>テストライブラリ</strong>
        </li>
        <li>
          <strong>テストスクリプト</strong>
        </li>
        <li>
          <strong>テストスイート</strong>
        </li>
      </ul>
      <h3 id="32-tafレイヤーの設計原則">3.2 TAFレイヤーの設計原則</h3>
      <p>
        TAFレイヤーとは、目的が似ているクラス群（テストケース、テストレポーティング、テストロギング、暗号化、テストハーネスなど）を明確に分離する境界のことです。
      </p>
      <p>
        <strong>
          重要な原則：レイヤーは1目的につき1つ導入できるが、増やしすぎると設計が複雑になるため、レイヤー数はできるだけ少なく保つことが推奨される。
        </strong>
      </p>
      <p>代表的な3層構造は以下の通りです。</p>
      <div className="mermaid-container">
        <Mermaid chart={DIAGRAM_TAF_LAYERS} />
      </div>
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr className="header">
              <th>層</th>
              <th>役割</th>
              <th>重要な制約</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>
                <strong>Test Scripts（テストスクリプト層）</strong>
              </td>
              <td>
                SUTのテストケースリポジトリ、テストスイートのアノテーションを提供。ビジネスロジック層のサービス（テストステップ、ユーザーフロー、API呼び出し）を呼び出す
              </td>
              <td>
                <strong>Core Librariesへの直接呼び出しは禁止</strong>
                （必ずBusiness Logic層を経由する）
              </td>
            </tr>
            <tr className="even">
              <td>
                <strong>Business Logic（ビジネスロジック層）</strong>
              </td>
              <td>
                SUTに依存するすべてのライブラリを格納。Core
                Librariesのクラスファイルを継承する、またはCore
                Librariesが提供するFacadeを利用する。TAFをSUTに対して実行するためのセットアップや追加設定を担う
              </td>
              <td>Core Librariesとの結合点。SUTごとに実装が変わる</td>
            </tr>
            <tr className="odd">
              <td>
                <strong>Core Libraries（コアライブラリ層）</strong>
              </td>
              <td>SUTに依存しないすべてのライブラリを格納</td>
              <td>
                同一の開発スタックであれば、
                <strong>あらゆる種類のプロジェクトで再利用可能</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="33-テスト自動化のスケーリング複数プロジェクトへの拡張">
        3.3 テスト自動化のスケーリング（複数プロジェクトへの拡張）
      </h3>
      <p>
        Core Librariesを複数のTAF・複数プロジェクトで再利用することで、組織全体のテスト自動化をスケールできます。シラバスの例（Figure
        3）は以下のような構成です。
      </p>
      <div className="mermaid-container">
        <Mermaid chart={DIAGRAM_TAF_SCALING} />
      </div>
      <div className="callout callout-practice">
        <div className="callout-header">
          <span className="callout-icon">💡</span>
          <span className="callout-label">ベストプラクティス</span>
        </div>
        <div className="callout-body">
          <ul>
            <li>
              レイヤー間の依存方向は必ず「Test Scripts → Business Logic → Core
              Libraries」の一方向に保つ。Test ScriptsからCore
              Librariesへの直接呼び出しを許すと、SUT固有のロジックが混入し、Core
              Librariesの再利用性が崩れる。
            </li>
            <li>
              Core
              Librariesに「SUT固有の情報」を一切含めないことを設計ルールとして明文化する。含めてしまうと、他プロジェクトへの再利用時に予期しない副作用が発生する。
            </li>
            <li>
              複数プロジェクトでCore
              Librariesを共有する場合は、バージョニング（後述8章の内容とも関連）と後方互換性の方針を先に決めておく。
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </section>
  );
}
