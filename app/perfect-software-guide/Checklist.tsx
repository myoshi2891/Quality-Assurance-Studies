'use client';

import React, { useState } from 'react';

export const CHECKLIST_ITEMS = [
  'このテストは「何を確かめるための、どんな情報を得るためのものか」を言語化できているか',
  '「テストにパスした」ことと「バグがない」ことを混同していないか',
  'バグ報告の際、「事実」と「自分の解釈」を分けて書けているか',
  'テスト結果を見て、自分の中に否認・合理化・責任転嫁などの反応が出ていないか気づけているか',
  'テストとデバッグ、どちらの作業に時間がかかっているのかを区別できているか',
  '新しいテストツールの提案を、宣伝文句だけで判断していないか',
  '自動テストで拾えない観点を、レビューやウォークスルーで補っているか',
];

export default function Checklist() {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(CHECKLIST_ITEMS.length).fill(false)
  );

  const toggleCheck = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const completedCount = checked.filter(Boolean).length;

  return (
    <>
      <div className="checklist-counter">
        <i className="ti ti-checklist"></i>
        <span id="checklistCounter">
          {completedCount} / {CHECKLIST_ITEMS.length} 完了
        </span>
      </div>
      <ul className="checklist" id="checklist">
        {CHECKLIST_ITEMS.map((item, index) => (
          <li key={index} className={checked[index] ? 'done' : ''}>
            <label>
              <input
                type="checkbox"
                checked={checked[index]}
                onChange={() => toggleCheck(index)}
              />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
