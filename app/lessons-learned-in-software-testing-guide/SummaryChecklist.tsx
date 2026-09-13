'use client';

import React, { useState } from 'react';

export const CHECKLIST_ITEMS = [
  'テストを始める前に「このテストで何を明らかにしたいのか」を言語化したか',
  '自分をリリースの「ゲートキーパー」だと誤解していないか',
  'バグレポートは、忙しい相手にも一目で伝わるサマリーになっているか',
  'severity(深刻度)と priority(優先度)を混同していないか',
  '再現しないバグを「再現しないから」という理由で握りつぶしていないか',
  '自動化する前に、そもそものテスト手順が整理されているか(汚いプロセスのまま自動化していないか)',
  'テスト計画を「一度作って終わりの文書」ではなく「回し続けるプロセス」として扱っているか',
  'AIが生成した結果を無条件に信頼せず、シグナルとノイズを見極めているか',
  '今のテストのやり方は、今のプロジェクトのコンテキスト(状況)に本当に合っているか',
];

export default function SummaryChecklist() {
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
      <span className="checklist-counter" id="checklistCounter">
        {completedCount} / {CHECKLIST_ITEMS.length} 完了
      </span>
      <ul className="checklist">
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
