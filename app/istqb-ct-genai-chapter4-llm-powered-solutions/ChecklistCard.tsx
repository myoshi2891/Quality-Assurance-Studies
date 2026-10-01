'use client';

import React, { useState } from 'react';

export const CHECKLIST_ITEMS: readonly string[] = [
    'フロントエンド・バックエンド・LLMの責務を区別して説明できる',
    'リレーショナルDBとベクトルDBの用途の違いを説明できる',
    '後処理が必要な理由と、その具体例を挙げられる',
    'RAGの事前処理（チャンク分割→クリーニング→埋め込み→ベクトルDB）の流れを言える',
    'RAGの実行時2ステップ（検索→生成）を説明できる',
    'チャンクサイズの目安（256〜512トークン）を覚えている',
    'RAGとファインチューニングの違いを説明できる',
    'エージェントがチャットボットと違う点（ツール呼び出し）を説明できる',
    '自律型と半自律型の違い、半自律型が向く場面を説明できる',
    'マルチエージェントとオーケストレーションを定義できる',
    'エージェントのリスクと緩和策（自動検証、半自律型）を挙げられる',
    'ファインチューニングの定義と、LLMとSLMの使い分けを説明できる',
    'ファインチューニングの4つの課題を挙げられる',
    'LLMOpsの定義と目的を説明できる',
    '3つの導入アプローチとそれぞれの考慮点の違いを説明でき、併用可能であることを知っている',
    '公式の最新シラバス（v1.1）で用語の表現を最終確認した',
];

export default function ChecklistCard() {
    const [checkedState, setCheckedState] = useState<boolean[]>(() =>
        new Array(CHECKLIST_ITEMS.length).fill(false)
    );

    const total = CHECKLIST_ITEMS.length;
    const done = checkedState.filter(Boolean).length;
    const progressPercent = total > 0 ? (done / total) * 100 : 0;

    const handleToggle = (index: number) => {
        setCheckedState((prev) => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };

    return (
        <div>
            <div className="checklist-progress">
                <span id="checklistCount">{`${done} / ${total} 完了`}</span>
                <div className="checklist-bar">
                    <div
                        className="checklist-bar-fill"
                        id="checklistBarFill"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
            </div>
            <ul className="checklist" id="examChecklist">
                {CHECKLIST_ITEMS.map((item, index) => {
                    const isChecked = checkedState[index];
                    return (
                        <li key={index}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => handleToggle(index)}
                                />
                                <span className={isChecked ? 'done-text' : undefined}>
                                    {item}
                                </span>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
