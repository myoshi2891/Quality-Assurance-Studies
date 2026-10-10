import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Practice3() {
  return (
    <div className="practice-block" id="practice-3">
      <h3>
        {"プラクティス3: 継続的に統合する"}
      </h3>
      <div className="prose">
        <p>
          {" このプラクティスは、プロジェクトの「鼓動(ハートビート)」を確立し、ビルドを自動化し、変更を早く頻繁に統合することを指します。「Done」「Done-Done」「Done-Done-Done」のように完了の定義を段階的に区別する考え方も紹介されており、単に動くコードを書いた状態と、リリース可能な状態は別物であることを強調しています。 "}
        </p>
      </div>
      <div id="diagram-ci" className="diagram-container">
        <Mermaid chart={DIAGRAMS["diagram-ci"]} />
      </div>
      <p className="diagram-caption">
        {"図4: 継続的インテグレーションの流れ"}
      </p>
      <div className="callout practice">
        <p className="callout-title">
          <i className="ti ti-checkbox">
          </i>
          {"初学者向けの第一歩 "}
        </p>
        <ul>
          <li>
            {" 1日に複数回、小さな単位でメインブランチに統合することを目指す "}
          </li>
          <li>
            {"ビルドとテストをCIサービスで自動化する"}
          </li>
          <li>
            {"テストが失敗した状態を放置せず、最優先で直す文化を作る"}
          </li>
        </ul>
      </div>
    </div>
  );
}
