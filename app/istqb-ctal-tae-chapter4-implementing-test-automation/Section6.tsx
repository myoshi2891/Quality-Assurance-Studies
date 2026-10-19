'use client';

import React, { useState } from 'react';

const CHECKLIST_ITEMS = [
  'パイロットで評価すべき5つの項目（言語・ツール・テストレベル・テストケース・開発アプローチ）を説明できる',
  'パイロットの早い段階でCI・CDに統合すべき理由を説明できる',
  '一般的デプロイリスクと技術的デプロイリスクの違いを区別できる',
  'Fatal〜Traceの6段階のログレベルとその用途を説明できる',
  'テストフィクスチャが担う「反復可能性」と「独立性」の意味を説明できる',
  'Robert C. Martinのクリーンコード8原則を列挙できる',
  'ハードコーディングを避け、データ駆動テストや定数を使うべき理由を説明できる',
  '静的解析ツール・フォーマッタ・ブランチ戦略が保守性に果たす役割を説明できる',
];

export default function Section6() {
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(CHECKLIST_ITEMS.length).fill(false)
  );

  const handleToggle = (index: number) => {
    setCheckedState((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const completedCount = checkedState.filter(Boolean).length;
  const progressPercent = Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);

  return (
    <section className="block" id="s-check">
      <span className="section-num">7</span>
      <h2>理解度セルフチェック</h2>
      <div className="prose">
        <p>
          学習した内容を振り返るためのチェックリストです。説明できる項目にチェックを入れてみましょう。
        </p>
      </div>

      <div className="checklist-card">
        <div className="checklist-progress">
          <div className="bar">
            <div
              className="bar-fill"
              id="checklistBarFill"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="count" id="checklistCount">
            {completedCount} / {CHECKLIST_ITEMS.length} 完了
          </div>
        </div>
        <ul id="checklistList">
          {CHECKLIST_ITEMS.map((item, index) => {
            const inputId = `c${index + 1}`;
            const isChecked = checkedState[index] ?? false;
            return (
              <li key={inputId} className={isChecked ? 'checked' : ''}>
                <input
                  type="checkbox"
                  id={inputId}
                  checked={isChecked}
                  onChange={() => handleToggle(index)}
                />
                <label htmlFor={inputId}>{item}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
