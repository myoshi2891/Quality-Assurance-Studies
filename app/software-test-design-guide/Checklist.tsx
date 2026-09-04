'use client';

import React, { useState } from 'react';

interface ChecklistItem {
  id: string;
  text: string;
}

const CHECKLIST_ITEMS: readonly ChecklistItem[] = [
  { id: 'chk-1', text: '仕様書だけでなく、実際の画面・API・過去の不具合履歴も確認したか' },
  { id: 'chk-2', text: '同値分割は必ず境界値分析とセットで実施したか' },
  { id: 'chk-3', text: '無効な同値クラスは、原則1クラスにつき1テストケースに分けたか（複数の無効値を同時投入しない）' },
  { id: 'chk-4', text: '複数条件で結果が決まる仕様は、デシジョンテーブルで整理したか' },
  { id: 'chk-5', text: '「過去の操作」で挙動が変わる仕様は、状態遷移図で可視化したか' },
  { id: 'chk-6', text: '「定義されていない遷移」（本来起きてはいけない状態変化）も意図的にテストしたか' },
  { id: 'chk-7', text: '設定項目の組み合わせが爆発しそうな箇所に、ペアワイズ法を検討したか' },
  { id: 'chk-8', text: '重要な業務シナリオは、ユースケーステストでエンドツーエンドの流れを確認したか' },
  { id: 'chk-9', text: 'テストケースの「期待結果」は具体的で、誰が見ても合否判定できる記述になっているか' },
  { id: 'chk-10', text: '設計したテストケースを、別のエンジニアやPMにレビューしてもらったか' },
  { id: 'chk-11', text: 'ホワイトボックスカバレッジ（分岐・ステートメント）を把握し、未テストの経路がないか確認したか' },
  { id: 'chk-12', text: 'テスト設計をスクリプト実行だけで終わらせず、探索的テストの時間も確保したか' },
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
      <span className="checklist-counter ui" id="checklistCounter">
        {doneCount} / {CHECKLIST_ITEMS.length} 完了
      </span>
      <ul className="checklist" id="checklist">
        {CHECKLIST_ITEMS.map((item) => {
          const isDone = !!checkedState[item.id];
          return (
            <li key={item.id} className={isDone ? 'done' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={isDone}
                  onChange={() => handleToggle(item.id)}
                />
                <span>{item.text}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
