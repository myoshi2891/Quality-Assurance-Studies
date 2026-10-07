'use client';
import React from 'react';
import { useScrollSpy } from '../../lib/useScrollSpy';
export const TOC_ITEMS = [
  {
    "id": "overview",
    "label": "0. 全体像"
  },
  {
    "id": "fundamentals",
    "label": "1. LangGraphの基礎"
  },
  {
    "id": "pipeline-graph",
    "label": "2. パイプライン構造"
  },
  {
    "id": "implementation",
    "label": "3. ステップバイステップ実装"
  },
  {
    "id": "walkthrough",
    "label": "4. 実践ウォークスルー"
  },
  {
    "id": "best-practices",
    "label": "5. ベストプラクティス"
  },
  {
    "id": "summary",
    "label": "6. まとめ"
  },
  {
    "id": "references",
    "label": "参考文献・情報源"
  }
];
const IDS=TOC_ITEMS.map(item=>item.id);
const BAND={top:0.2,bottom:0.3};
export default function NavBar(){
 const activeId=useScrollSpy(IDS,BAND);
 return <aside className="sidebar">
 <div className="brand">LangGraph QAエージェント構築ガイド</div>
 <div className="brand-sub">Knowledge Graphs and LLMs in Action — 第15章</div>
 <nav><ul>{TOC_ITEMS.map(item=><li key={item.id}><a href={'#'+item.id} className={activeId===item.id?'active':undefined} aria-current={activeId===item.id?'location':undefined}>{item.label}</a></li>)}</ul></nav>
 <div className="sidebar-foot">Python / LangGraph / Neo4j<br />2026年9月23日時点</div>
 </aside>;
}
