import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Practice6() {
  return (
    <div className="practice-block" id="practice-6">
      <h3>
        {"プラクティス6: まずテストを書く"}
      </h3>
      <div className="prose">
        <p>
          {" テストを実装の後に書くのではなく先に書くことで、設計そのものがテストしやすい形に矯正されます。本書ではテスト駆動開発(TDD)が、素早いフィードバックを生み、リファクタリングを支える安全網になり、テストしやすいコードを書く規律を作ると説明されています。あわせて、TDDがうまく機能しない場合の注意点や、チームへの導入方法にも触れられています。 "}
        </p>
      </div>
      <div id="diagram-tdd" className="diagram-container">
        <Mermaid chart={DIAGRAMS["diagram-tdd"]} />
      </div>
      <p className="diagram-caption">
        {"図5: TDDのRed-Green-Refactorサイクル"}
      </p>
      <div className="callout practice">
        <p className="callout-title">
          <i className="ti ti-checkbox">
          </i>
          {"初学者向けの第一歩 "}
        </p>
        <ul>
          <li>
            {" いきなり大きな機能ではなく、1つの小さな振る舞いに対して1つのテストから始める "}
          </li>
          <li>
            {"テストが赤(失敗)であることを必ず確認してから実装に進む"}
          </li>
          <li>
            {"テストを通すための実装は、まず最小限のコードで済ませる"}
          </li>
        </ul>
      </div>
    </div>
  );
}
