'use client';

import React, { useState } from 'react';

export const CHECKLIST_ITEMS = [
  '自分たちが依存しているコンポーネントの境界（インターフェース仕様）を明文化している',
  'テストピラミッドを意識し、単体テストを最も厚く、E2Eテストを最も薄くしている',
  'サービス間の連携には、E2Eテストだけでなくコントラクトテストを併用している',
  'サードパーティ／OSSコンポーネントに対してSCAツールによる脆弱性スキャンを自動化している',
  'SBOM（ソフトウェア部品表）を生成し、依存関係のインベントリを把握している',
  '統合テストでは、必要に応じてTestcontainers等で実物に近い依存関係を使っている',
  'コードカバレッジだけでなく、ミューテーションテストでテストの質そのものを定期的に検証している',
  'コンポーネントの信頼性・性能・保守性といった非機能品質特性を継続的に測定している',
  'CI/CDパイプラインの中で、テストの実行速度に応じて実行タイミングを分けている',
  'コンポーネントの脆弱性・バージョン・ライセンス・保守状況を定期的に棚卸ししている',
];

export default function Checklist() {
  const [checked, setChecked] = useState<boolean[]>(() =>
    new Array(CHECKLIST_ITEMS.length).fill(false)
  );

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const completedCount = checked.filter(Boolean).length;

  return (
    <div className="checklist-card">
      <div className="checklist-header">
        <span className="checklist-title">チェックリスト</span>
        <span className="checklist-progress">
          {completedCount} / {CHECKLIST_ITEMS.length} 完了
        </span>
      </div>
      <ul className="checklist">
        {CHECKLIST_ITEMS.map((item, idx) => (
          <li key={idx}>
            <label>
              <input
                type="checkbox"
                checked={checked[idx]}
                onChange={() => toggle(idx)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
