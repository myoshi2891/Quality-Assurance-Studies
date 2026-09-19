'use client';

import React, { useState } from 'react';

const CHECKLIST_ITEMS = [
  'タスクが「生成」「変換」「強化」のどれに該当するかを意識してプロンプトを設計した',
  'プロンプトに役割・文脈・指示・入力データ・制約・出力形式の6要素を含めた',
  '複雑なタスクはプロンプトチェイニングで小さなステップに分解した',
  '出力形式を揃えたい場合はフューショットプロンプティングで具体例を示した',
  '生成されたテストケース・テストデータ・テストスクリプトを人間がレビューしてから採用した',
  '生成物の品質を、正確性・適合率・再現率などの観点で振り返った',
  '機密情報や個人情報をプロンプトに含めていないか確認した',
  '自動化やセルフヒーリングの修復ログを定期的に見直す運用を用意した',
  'AIエージェントに重要な操作を任せる場合、人間の承認ステップを組み込んだ',
  'チームやAI活用のガイドラインとShadow AI対策を明文化した',
  '生成AIの利用状況が組織のセキュリティ方針や規制（ISO/IEC 42001、EU AI Actなど）に沿っているか確認した',
  '有効だったプロンプトやワークフローをチームで共有する仕組みを持っている',
  '小規模な試行から始め、段階的に適用範囲を広げる計画を立てた',
];

export default function Checklist() {
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

  const checkedCount = checkedState.filter(Boolean).length;

  return (
    <div className="checklist-card">
      <div className="checklist-header">
        <span className="checklist-progress" id="checklist-progress">
          {checkedCount} / {CHECKLIST_ITEMS.length} 完了
        </span>
      </div>
      <ul className="checklist-list">
        {CHECKLIST_ITEMS.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={checkedState[index]}
                onChange={() => handleToggle(index)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
