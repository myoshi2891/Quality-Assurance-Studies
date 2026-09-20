'use client';

import React, { useState } from 'react';

interface ChecklistItem {
  id: string;
  label: React.ReactNode;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'item-1',
    label: (
      <>
        <code>automationName</code>を含め、Capabilitiesにベンダープレフィックス（<code>appium:</code>など）を正しく付与しているか
      </>
    ),
  },
  {
    id: 'item-2',
    label: 'ロケーターはID/Accessibility IDを優先し、XPathを乱用していないか',
  },
  {
    id: 'item-3',
    label: 'Page Object Modelなどの設計パターンでロケーターと操作ロジックを分離しているか',
  },
  {
    id: 'item-4',
    label: (
      <>
        固定<code>sleep</code>を使わず、Explicit Waitで条件ベースの待機を行っているか
      </>
    ),
  },
  {
    id: 'item-5',
    label: 'ImplicitとExplicit、どちらか一方のWait戦略に統一しているか',
  },
  {
    id: 'item-6',
    label: 'セッション終了処理を確実に実行し、リソースリークを防いでいるか',
  },
  {
    id: 'item-7',
    label: 'ジェスチャー操作はハードコードした座標ではなく、要素基準やパーセンテージ指定で組んでいるか',
  },
  {
    id: 'item-8',
    label: 'CI/CDパイプラインに組み込み、失敗時のスクリーンショット・ログを自動保存しているか',
  },
  {
    id: 'item-9',
    label:
      'テストのレイヤー（スモーク/回帰）に応じて、エミュレーター・実機・クラウドデバイスファームを使い分けているか',
  },
  {
    id: 'item-10',
    label:
      'Appiumのメジャーバージョン（現在は3.x系）とNode.jsの必須バージョンを把握し、計画的にアップグレードしているか',
  },
];

export default function Checklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleToggle = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = CHECKLIST_ITEMS.length;

  return (
    <div>
      <p className="checklist-counter" id="checklistCounter">
        {completedCount} / {totalCount} 完了
      </p>
      <ul className="checklist" id="bestPracticeChecklist">
        {CHECKLIST_ITEMS.map(item => {
          const isChecked = !!checkedItems[item.id];
          return (
            <li key={item.id} className={isChecked ? 'done' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleToggle(item.id)}
                />
                <span>{item.label}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
