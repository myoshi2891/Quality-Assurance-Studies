import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_CHECKLIST } from './diagrams';

export default function Section6() {
  return (
    <section>
      <h2 id="6-章全体のまとめtaaを設計する際のチェックリスト">
        6. 章全体のまとめ：TAAを設計する際のチェックリスト
      </h2>
      <div className="mermaid-container">
        <Mermaid chart={DIAGRAM_CHECKLIST} />
      </div>
      <hr />
    </section>
  );
}
