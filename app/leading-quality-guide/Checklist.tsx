'use client';

import React, { useState } from 'react';

interface ChecklistItem {
  id: string;
  label: string;
}

const CHECKLIST_ITEMS: readonly ChecklistItem[] = [
  {
    id: 'chk1',
    label: 'フィーチャーフラグなどで機能の有効/無効を即座に切り替えられるか',
  },
  {
    id: 'chk2',
    label: 'カナリアリリースや段階的ロールアウトの仕組みがあるか',
  },
  {
    id: 'chk3',
    label: '異常検知・ロールバックを自動化できているか',
  },
  {
    id: 'chk4',
    label: '本番影響を最小化する（一部ユーザーのみ対象にする等）仕組みがあるか',
  },
] as const;

export default function Checklist() {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

  const handleToggle = (id: string) => {
    setCheckedState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ul className="checklist">
      {CHECKLIST_ITEMS.map((item) => {
        const isChecked = !!checkedState[item.id];
        return (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                id={item.id}
                checked={isChecked}
                onChange={() => handleToggle(item.id)}
              />
              <span>{item.label}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
