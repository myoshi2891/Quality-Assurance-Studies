'use client';

import React, { useState } from 'react';

interface ChecklistItem {
  id: string;
  label: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 'c1', label: 'SDLCとSTLCの基本用語を説明できる' },
  { id: 'c2', label: 'AIとMLがもたらす5つの変化を挙げられる' },
  { id: 'c3', label: '従来型テストとAI駆動テストの違いを比較できる' },
  { id: 'c4', label: 'セルフヒーリングテストの仕組みを説明できる' },
  { id: 'c5', label: '自分のチームで最も痛みを感じている領域を1つ特定した' },
  { id: 'c6', label: '小さなパイロットプロジェクトの対象領域を選んだ' },
  { id: 'c7', label: 'DORAの「検証税」の考え方を理解した' },
  { id: 'c8', label: 'ISTQBのCT-AIとCT-GenAIの違いを説明できる' },
  { id: 'c9', label: 'James Bach / Michael Boltonのチェックリストの視点を使える' },
  { id: 'c10', label: '組織導入ロードマップの3フェーズを説明できる' },
];

export default function Checklist() {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

  const handleToggle = (id: string) => {
    setCheckedState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedState).filter(Boolean).length;

  return (
    <>
      <div className="checklist-counter" id="checklistCounter">
        {completedCount} / {CHECKLIST_ITEMS.length} 完了
      </div>
      <ul className="checklist" id="checklistItems">
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = !!checkedState[item.id];
          return (
            <li key={item.id} className={isChecked ? 'done' : ''}>
              <input
                type="checkbox"
                id={item.id}
                checked={isChecked}
                onChange={() => handleToggle(item.id)}
              />
              <label htmlFor={item.id}>{item.label}</label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
