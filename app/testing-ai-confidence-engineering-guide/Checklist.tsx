'use client';

import React, { useState } from 'react';

const CHECKLIST_ITEMS = [
  '完全一致のアサーションに頼っているテストがないか洗い出した',
  '少なくとも1つの重要な機能について、繰り返し実行して出力の分布を測定した',
  'スコアと一緒に信頼区間やサンプル数を報告する習慣がある',
  'ユーザー属性や状況別のスライスで結果を確認している',
  'LLM判定者を使う場合、人間のレビューでキャリブレーションしている',
  '評価者同士の意見の不一致を、隠さずに確認している',
  'すべての実行についてプロンプト・モデル・バージョン・コストなどのトレースを記録している',
  'カナリアやシャドウ展開など、段階的なリリース戦略を持っている',
  'ロールバックの引き金になる明確なシグナルを事前に定義している',
  'AI生成コードを、別の経路でレビューする仕組みがある',
  'プロンプトインジェクションなど、信頼できない入力チャネルへの脅威モデリングを行っている',
  'ハードブロッカー（プライバシー漏えい、危険なツール呼び出しなど）を明文化している',
  '品質に関するエビデンスに責任を持つ人（Confidence Engineerに相当する役割）が明確になっている',
];

export default function Checklist() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const handleToggle = (index: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div>
      <div className="checklist-counter" id="checklistCounter">
        {completedCount} / {CHECKLIST_ITEMS.length} 完了
      </div>
      <ul className="checklist" id="checklist">
        {CHECKLIST_ITEMS.map((item, index) => {
          const id = `chk${index + 1}`;
          return (
            <li key={id} className={checkedItems[index] ? 'done' : ''}>
              <input
                type="checkbox"
                id={id}
                checked={!!checkedItems[index]}
                onChange={() => handleToggle(index)}
              />
              <label htmlFor={id}>{item}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
