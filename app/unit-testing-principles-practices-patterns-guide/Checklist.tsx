'use client';

import React, { useState } from 'react';

const CHECKLIST_ITEMS = [
  'このテストは「1つのメソッド」ではなく「1つの意味のある振る舞い」を検証しているか',
  'Arrange / Act / Assert が明確に分かれており、Actは実質1行になっているか',
  'テスト名は非プログラマにも伝わる文章になっているか',
  'このテストは「観測可能な振る舞い」だけを検証しており、内部実装の手順を検証していないか',
  'モックを使っている場合、それは「アプリケーション境界を越えたunmanaged dependency」に対してだけか',
  'DBなどmanaged dependencyを不必要にモック化していないか',
  '4本柱（回帰保護・リファクタリング耐性・速さ・保守性）のうち、極端に低いものがないか',
  '純粋なロジックをOutput-basedテストで検証できる形（Functional Core）に切り出せているか',
  'プライベートメソッド・プライベート状態を無理にテストしようとしていないか',
  '現在時刻やランダム値など非決定的な要素を、注入可能な形に抽象化しているか',
];

export default function Checklist() {
  const [checked, setChecked] = useState<boolean[]>(() =>
    Array(CHECKLIST_ITEMS.length).fill(false),
  );

  const handleToggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const doneCount = checked.filter(Boolean).length;

  return (
    <>
      <div className="checklist-counter">
        <span id="checklistCount">{doneCount}</span> / {CHECKLIST_ITEMS.length} 完了
      </div>
      <ul className="checklist" id="checklistItems">
        {CHECKLIST_ITEMS.map((item, index) => {
          const id = `chk${index + 1}`;
          const isDone = checked[index];
          return (
            <li key={id} className={isDone ? 'done' : ''}>
              <input
                type="checkbox"
                id={id}
                checked={isDone}
                onChange={() => handleToggle(index)}
              />
              <label htmlFor={id}>{item}</label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
