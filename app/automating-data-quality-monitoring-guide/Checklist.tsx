'use client';

import React, { useState } from 'react';

export const CHECKLIST_ITEMS: readonly string[] = [
  '自社で過去に起きたデータ品質インシデントを棚卸しし、検知までの時間と損失額を概算した',
  '監視したいデータの量・種類・更新頻度・リスクプロファイルを4つのVで整理した',
  '現在の監視手法が「4本柱」のどこに該当し、どこが欠けているかを整理した',
  'ROI試算（現状コストと自動化後の想定コスト）を大まかにでも算出した',
  '教師なしMLモデルを使う場合、季節性・時間依存特徴量・カオスなテーブル・特殊な更新タイプ・カラム相関の5つの落とし穴を意識した設計にした',
  '合成異常を使ったバックテスト計画（適合率・再現率・F1・AUCの計測方法）を用意した',
  'アラートの宛先（Audience）・チャンネル（Channel）・タイミング（Timing）を明確に設計した',
  '優先度別のアラート抑制ルール（Low/Normal/High）を定義した',
  'データウェアハウス・オーケストレーター・カタログ・BI・MLOpsとの統合計画を立てた',
  'ビルドかバイかを、初期コストだけでなく継続的な保守コストまで含めて検討した',
  '監視対象テーブルの優先順位付けとロールアウト計画を立てた',
  'ランブック・オーナーシップ・社内規範・ダッシュボードによる継続改善の仕組みを用意した',
];

export default function Checklist() {
  const [checked, setChecked] = useState<ReadonlySet<number>>(new Set());

  const handleToggle = (index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="checklist">
      <div className="checklist-header">
        <strong>進捗</strong>
        <span className="checklist-counter" id="checkCounter" aria-live="polite">
          {`${checked.size} / ${CHECKLIST_ITEMS.length} 完了`}
        </span>
      </div>
      {CHECKLIST_ITEMS.map((label, index) => (
        <label key={label} className={`check-item${checked.has(index) ? ' done' : ''}`}>
          <input
            type="checkbox"
            checked={checked.has(index)}
            onChange={() => handleToggle(index)}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
}
