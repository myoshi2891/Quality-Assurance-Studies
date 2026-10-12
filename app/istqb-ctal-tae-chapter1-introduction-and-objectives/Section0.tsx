import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_ROADMAP } from './diagrams';

export default function Section0() {
  return (
    <section className="section" id="s0">
      <div className="section-head">
        <div className="section-icon">
          <i className="ti ti-route"></i>
        </div>
        <div>
          <span className="eyebrow">Chapter 1 の位置づけと全体像</span>
          <h2>なぜこの章から学ぶのか</h2>
        </div>
      </div>

      <p>
        CTAL-TAE v2.0
        のシラバスは全8章構成で、認定トレーニングコースには最低21時間の講習時間が求められています。第1章はその導入部にあたり、「なぜテスト自動化を行うのか」「テスト自動化はソフトウェア開発ライフサイクル（SDLC）の中でどう位置づけられるのか」という、以降のアーキテクチャ設計・実装・CI/CD統合・レポーティング・検証・継続的改善の各章を学ぶための土台をつくる章です。
      </p>

      <div className="diagram-card">
        <div className="diagram-wrap" data-diagram="roadmap">
          <Mermaid chart={DIAGRAM_ROADMAP} />
        </div>
        <p className="cap">
          第1章はシラバス全体の導入にあたり、以降の全章が積み上がっていく土台となる
        </p>
      </div>

      <p>
        第1章は認知レベルが<strong>K2（理解する）</strong>のみで構成されており、第2章以降のK3（適用する）・K4（分析する）に比べると、求められるのは概念を理解する能力（K2）です。Kレベルは試験の回答形式ではなく、問われる認知能力を示します。ただし、シラバスの序章と付録を除く全章が試験範囲となるため、第1章の内容も油断せず押さえておく必要があります。
      </p>

      <div className="callout note">
        <i className="ti ti-info-circle"></i>
        <div className="callout-body">
          <div className="callout-title">試験の前提条件</div>
          <p>
            CTAL-TAE試験を受験するには、ISTQB® Foundation
            Level認定を先に取得している必要があります。また、ソフトウェアテストまたは開発の実務経験（目安6か月程度）があることが推奨されています。
          </p>
        </div>
      </div>
    </section>
  );
}
