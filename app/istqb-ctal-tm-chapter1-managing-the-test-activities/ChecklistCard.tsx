'use client';

import React, { useState } from 'react';

const CHECKLIST_ITEMS = [
    '計画の 5 タスクを順に説明できる',
    'モニタリングとコントロールの違いを説明できる',
    'テスト完了の 5 タスクを挙げられる',
    'ステークホルダーマトリクスの 4 象限を説明できる',
    '逐次型と反復型のテスト管理の違いを 5 つ挙げられる',
    '5 つのテストレベルの管理活動を説明できる',
    'リスク特定の技法を 7 つ挙げられる',
    '発生可能性と影響の要因を挙げられる',
    '深さ優先と幅優先の違いを例で説明できる',
    '重量級と軽量級の技法を分類できる',
    'テストアプローチ選択の 7 要因を挙げられる',
    'S.M.A.R.T. で終了基準を書き換えられる',
    'IDEAL の 5 フェーズと、プロジェクトレベルでの違いを説明できる',
    'TMMi と TPI NEXT の違いを説明できる',
    'RCA と GQM の流れを説明できる',
    'レトロスペクティブの 5 ステップを説明できる',
    'ツール導入の手順（評価から展開まで）を説明できる',
    'ツールの一度きりのコスト、継続コスト、機会費用を挙げられる',
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
                <span className="cp-label">進捗</span>
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
            <ul>
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
