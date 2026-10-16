import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_CH4_SUMMARY } from './diagrams';

export default function Section5() {
  return (
    <section className="block" id="s-summary">
      <span className="section-num">6</span>
      <h2>章全体のまとめ</h2>
      <div className="prose">
        <p>
          第4章「Implementing Test Automation」の学習内容を、実装の時間軸に沿って整理すると次のようになります。
        </p>
      </div>

      <div className="step-row">
        <div className="step-card">
          <span className="step-num">4.1</span>
          <h4>開発</h4>
          <p>
            パイロットのスコープ・言語・ツール・テストレベルを評価し、小さく試して方向性を決める。
          </p>
        </div>
        <div className="step-card">
          <span className="step-num">4.2</span>
          <h4>リスク</h4>
          <p>
            パイロット・展開時に生じる一般的リスクと技術的リスク（パッケージング・ログ・構造化・更新）を識別し緩和する。
          </p>
        </div>
        <div className="step-card">
          <span className="step-num">4.3</span>
          <h4>保守性</h4>
          <p>
            クリーンコード原則・命名規則・デザインパターン・静的解析を通じて、長期的に保守可能な状態を保つ。
          </p>
        </div>
      </div>

      <div className="diagram-card">
        <div className="diagram-title">
          <i className="ti ti-timeline"></i> 第4章の学習フロー全体図
        </div>
        <div className="mermaid-wrapper">
          <Mermaid chart={DIAGRAM_CH4_SUMMARY} />
        </div>
        <div className="diagram-fallback" style={{ display: 'none' }}>
          図：4.1開発→4.2リスク→4.3保守性の順に学習が進み、継続的な改善は第8章に接続する。
        </div>
      </div>

      <div className="prose">
        <p>
          第3章で「どう設計するか」を学び、第4章で「どう小さく試し、リスクを管理しながら、保守可能な形で実装するか」を学ぶという流れです。この後の第5章では、ここで実装したテスト自動化を<strong>CI・CDパイプラインへ統合する具体的な戦略</strong>（テストレベルごとの組み込み方、設定管理、API依存関係）へと話が続いていきます。
        </p>
      </div>
    </section>
  );
}
