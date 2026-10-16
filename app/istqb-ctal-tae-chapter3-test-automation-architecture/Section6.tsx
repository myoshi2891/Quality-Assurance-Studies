import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_CHECKLIST } from './diagrams';

// DIAGRAM_CHECKLIST の判断ノード Q1〜Q4 と同じ文言。図の描画に失敗しても読めるよう HTML でも示す
const CHECKLIST_DECISIONS = [
  'gTAAの4機能（生成・定義・実行・適応）をどのツールが担うか整理したか？',
  'TAF内のレイヤー構成（Test Scripts / Business Logic / Core Libraries）は明確か？',
  'チームのスキルとSUTの変化頻度に見合った自動化アプローチを選んだか？',
  '要件に適した設計原則・デザインパターンを選定・適用したか？',
] as const;

export default function Section6() {
  return (
    <section>
      <h2 id="6-章全体のまとめtaaを設計する際のチェックリスト">
        6. 章全体のまとめ：TAAを設計する際のチェックリスト
      </h2>
      <div className="mermaid-container">
        <Mermaid chart={DIAGRAM_CHECKLIST} />
      </div>
      <ol className="checklist-decisions" aria-label="TAA設計の判断項目">
        {CHECKLIST_DECISIONS.map((decision) => (
          <li key={decision}>{decision}</li>
        ))}
      </ol>
      <hr />
    </section>
  );
}
