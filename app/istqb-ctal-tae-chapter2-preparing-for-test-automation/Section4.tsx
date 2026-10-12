'use client';

import React, { useState } from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_SUMMARY } from './diagrams';

const CHECKLIST_ITEMS = [
  'Observability・Controllability・Architecture Transparencyの3つを、それぞれ自分の言葉で説明できる',
  'アクセシビリティ識別子・システム環境変数・デプロイ変数の違いと設定方法を説明できる',
  '代表的な5つの環境例（ローカル開発／ビルド／統合／プレプロダクション／本番）の目的と、それぞれで実施される代表的なテストを言える',
  '監視（モニタリング）が最初に導入される環境がどこかを説明できる',
  'SUT分析で検討すべき8つの観点を挙げられる',
  'ツール比較表の作り方（列＝ツール、行＝要件）と、評価すべき7つの技術要件を説明できる',
  '「単一のツールがすべての要件を満たすとは限らない」という前提を踏まえた提案の進め方を説明できる',
];

export default function Section4() {
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(CHECKLIST_ITEMS.length).fill(false)
  );

  const total = CHECKLIST_ITEMS.length;
  const checkedCount = checkedState.filter(Boolean).length;
  const pct = total ? Math.round((checkedCount / total) * 100) : 0;

  const handleToggle = (index: number) => {
    setCheckedState((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <>
      <section id="sec-4">
        <h2>4. 章のまとめとチェックリスト</h2>

        <div className="mermaid-container">
          <Mermaid chart={DIAGRAM_SUMMARY} />
        </div>

        <h3>学習到達度チェックリスト</h3>

        <div className="checklist-progress">
          <span className="cp-label">学習到達度</span>
          <div className="cp-bar">
            <div
              className="cp-bar-fill"
              id="cpBarFill"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="cp-count" id="cpCount">
            {checkedCount} / {total} 完了
          </span>
        </div>

        <ul className="checklist-card" id="checklistCard">
          {CHECKLIST_ITEMS.map((item, idx) => (
            <li key={idx}>
              <label>
                <input
                  type="checkbox"
                  checked={checkedState[idx]}
                  onChange={() => handleToggle(idx)}
                />
                <span>{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      <hr />
    </>
  );
}
