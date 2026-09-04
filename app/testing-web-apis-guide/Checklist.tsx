'use client';

import React, { useState } from 'react';

interface ChecklistItem {
  id: string;
  text: string;
}

const CHECKLIST_ITEMS: readonly ChecklistItem[] = [
  { id: 'chk-1', text: '対象APIの仕様（OpenAPIなど）を確認・整備したか' },
  { id: 'chk-2', text: '品質特性とリスクを洗い出し、優先度を付けたか' },
  { id: 'chk-3', text: '各エンドポイントで正常系・異常系・境界値のテストケースを設計したか' },
  { id: 'chk-4', text: '探索的テストのチャーターを用意し、実際に手を動かして触ったか' },
  { id: 'chk-5', text: '自動テストが独立して実行でき、記述的な名前を持っているか' },
  { id: 'chk-6', text: 'サービス間連携がある場合、契約テストの導入を検討したか' },
  { id: 'chk-7', text: '性能テストのしきい値（レイテンシ・エラー率など）を事前に決めたか' },
  { id: 'chk-8', text: 'OWASP API Security Top 10の代表的な観点を自動テストに含めたか' },
  { id: 'chk-9', text: 'CI/CDパイプラインで、速いテストから遅いテストへ段階的に実行されているか' },
  { id: 'chk-10', text: '本番環境のSLI/SLOを定義し、継続的に監視しているか' },
];

export default function Checklist() {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

  const handleToggle = (id: string) => {
    setCheckedState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const doneCount = Object.values(checkedState).filter(Boolean).length;

  return (
    <>
      <p className="checklist-progress" id="checklist-progress">
        {doneCount} / {CHECKLIST_ITEMS.length} 完了
      </p>
      <ul className="checklist" id="checklist">
        {CHECKLIST_ITEMS.map((item) => {
          const isDone = !!checkedState[item.id];
          return (
            <li key={item.id} className={isDone ? 'done' : ''}>
              <input
                type="checkbox"
                id={item.id}
                checked={isDone}
                onChange={() => handleToggle(item.id)}
              />
              <label htmlFor={item.id}>{item.text}</label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
