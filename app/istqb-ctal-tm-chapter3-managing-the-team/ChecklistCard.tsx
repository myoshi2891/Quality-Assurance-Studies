'use client';

import React, { useState } from 'react';

const CHECKLIST_ITEMS = [
    '第3章の3つの学習ポイントを説明できる',
    '4つの能力領域を挙げ、具体例を正しく振り分けられる',
    'コンテキストから必要スキルを導出する手順を説明できる',
    'スキルマトリクスを読み取り、ギャップと依存リスクを指摘できる',
    'スキルの育成手段を 5 つ以上挙げ、使い分けを説明できる',
    'ホールチームアプローチの考え方を説明できる',
    '状況別に動機付け要因・意欲低下要因への対応を挙げられる',
    '品質コスト4分類を、リリース前後の区別とともに説明できる',
    '回避できる外部失敗コストとリリース前コストから正味便益を計算できる',
    'ステークホルダーの種類に応じたビジネスケースの伝え方を説明できる',
    '日本語版シラバスの p.65〜74 と本ガイドの 🟡 部分を突き合わせた',
];

export default function ChecklistCard() {
    const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

    const handleToggle = (index: number) => {
        setCheckedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const completedCount = Object.values(checkedItems).filter(Boolean).length;
    const totalCount = CHECKLIST_ITEMS.length;
    const progressPercent = Math.round((completedCount / totalCount) * 100);

    return (
        <div className="checklist-card">
            <div className="checklist-progress">
                <span className="cp-label">学習の進み具合</span>
                <div className="cp-bar">
                    <div
                        className="cp-bar-fill"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
                <span className="cp-count">
                    {completedCount} / {totalCount} 完了
                </span>
            </div>
            <ul className="task-list">
                {CHECKLIST_ITEMS.map((item, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                checked={!!checkedItems[index]}
                                onChange={() => handleToggle(index)}
                            />
                            <span>{item}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
