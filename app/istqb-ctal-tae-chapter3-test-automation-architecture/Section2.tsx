import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_TAA_DESIGN } from './diagrams';

export default function Section2() {
  return (
    <section>
      <h2 id="2-tae-312テスト自動化ソリューションtasの設計方法">
        2. TAE-3.1.2：テスト自動化ソリューション（TAS）の設計方法
      </h2>
      <h3 id="21-tasとtaaの関係">2.1 TASとTAAの関係</h3>
      <ul>
        <li>
          <strong>TAS（Test Automation Solution）</strong>
          ：SUTの機能要件・非機能要件・技術要件の理解に基づいて定義される、実際に稼働する自動化の仕組み全体。商用ツールやOSSツールで実装され、必要に応じてSUT固有のアダプタが追加される。
        </li>
        <li>
          <strong>TAA（Test Automation Architecture）</strong>
          ：TAS全体の技術設計そのものを指す。
        </li>
      </ul>
      <p>TAAを設計する際に検討すべき事項は以下の通りです。</p>
      <div className="mermaid-container">
        <Mermaid chart={DIAGRAM_TAA_DESIGN} />
      </div>
      <div className="table-scroll">
        <table className="data-table">
          <caption>TAA設計時の検討項目</caption>
          <thead>
            <tr className="header">
              <th>検討項目</th>
              <th>具体例・観点</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>ツール・ライブラリ選定</td>
              <td>ツール固有のライブラリ、言語との整合性</td>
            </tr>
            <tr className="even">
              <td>プラグイン／コンポーネント開発</td>
              <td>SUT固有のアダプタ、カスタム拡張</td>
            </tr>
            <tr className="odd">
              <td>接続性・インターフェース要件</td>
              <td>ファイアウォール、DB接続、URL、モック/スタブ、メッセージキュー、プロトコル</td>
            </tr>
            <tr className="even">
              <td>テスト管理・欠陥管理ツール連携</td>
              <td>JiraやXray等、レポート・トレーサビリティの自動連携</td>
            </tr>
            <tr className="odd">
              <td>バージョン管理・リポジトリ</td>
              <td>Git等でのテストウェアのバージョン管理</td>
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
              TAA設計は「SUTの要件理解」から始める。ツール選定を先に決めてしまう（ツールありきの設計）は、後々の接続性・拡張性の問題につながりやすい。
            </li>
            <li>
              モック/スタブや外部依存のエミュレーション方法を早期に検討することで、外部システム側の制約（サードパーティAPIのレート制限など）に自動化がブロックされるリスクを減らせる。
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </section>
  );
}
