import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_13 } from './diagrams';

export default function Roadmap() {
  return <>
    <h2 id="学習ロードマップと試験対策のポイント">
      {" 学習ロードマップと試験対策のポイント "}
    </h2>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-13">
        <Mermaid chart={DIAGRAM_13} />
      </div>
    </div>
    <ul >
      <li >
        <strong >
          {"配点の重心"}
        </strong>
        {"：40問46点のうち、プロンプトエンジニアリング（第2章）とリスク管理（第3章）に関連する出題が多くを占めます。特に K3（適用）レベルの問題は主に第2章の「2.2 プロンプトエンジニアリング技法の適用」に集中しているため、単なる暗記でなく実際にプロンプトを書いて試す学習が有効です。 "}
      </li>
      <li >
        <strong >
          {"キーワードの暗記を軽視しない"}
        </strong>
        {"：各章冒頭の「GenAI固有キーワード」は学習目標に明記されていなくてもK1（記憶）として出題されます。 "}
      </li>
      <li >
        <strong >
          {"表形式の内容は対応関係で覚える"}
        </strong>
        {"：プロンプト技法の使い分け（2.2.5）、評価指標（2.3.1）、攻撃ベクトル（3.2.2）、規制・標準（3.4）などの対応表は、単語単位でなく「状況→技法／リスク→対策」という関係性で覚えると応用問題に強くなります。 "}
      </li>
      <li >
        <strong >
          {"前提資格を忘れずに"}
        </strong>
        {"：CT-GenAI受験にはISTQB® CTFL（Foundation Level）の取得が必須です。 "}
      </li>
      <li >
        <strong >
          {"公式サンプル試験の活用"}
        </strong>
        {"：公式サイトで配布されているサンプル試験A（問題・解答）で出題形式に慣れておくことを推奨します。 "}
      </li>
    </ul>

  </>;
}
