'use client';

import React, { useState } from 'react';

export interface ChecklistItem {
    id: string;
    label: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
    {
        id: 'c1',
        label: '3種類のSDLCモデル(順次/インクリメンタル/イテレーティブ)ごとにTAのタスクの変化パターンを説明できる',
    },
    {
        id: 'c2',
        label: 'テスト分析のエントリ基準を3つ挙げられる',
    },
    {
        id: 'c3',
        label: 'テスト分析→設計→実装→実行の各活動でTAが担う代表的なタスクを説明できる',
    },
    {
        id: 'c4',
        label: 'ハイレベルテストケースとローレベルテストケースの違いを具体例付きで説明できる',
    },
    {
        id: 'c5',
        label: 'テストケースの品質基準9つを列挙し、それぞれの意味を説明できる',
    },
    {
        id: 'c6',
        label: 'テスト環境要件の5属性(識別子・説明・責任・期間・忠実度)を説明できる',
    },
    {
        id: 'c7',
        label: 'テストオラクル問題の要因と5つの解決策を説明できる',
    },
    {
        id: 'c8',
        label: 'テストデータ要件の10の考慮事項を説明できる(特に類似性・機密性・保守性)',
    },
    {
        id: 'c9',
        label: 'キーワード駆動テストにおけるアクション/検証キーワードの違い、ドメイン層/インタフェース層の違いを説明できる',
    },
    {
        id: 'c10',
        label: 'キーワードが満たすべき6条件を列挙できる',
    },
    {
        id: 'c11',
        label: 'テストウェア管理に使う5種類のツールとそれぞれの役割を説明できる',
    },
];

export const Checklist: React.FC = () => {
    const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

    const toggleItem = (id: string) => {
        setCheckedState((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const completedCount = Object.values(checkedState).filter(Boolean).length;
    const totalCount = CHECKLIST_ITEMS.length;

    return (
        <div className="checklist-card">
            <div className="checklist-header">
                <h3 style={{ margin: 0 }}>理解度セルフチェック</h3>
                <span
                    className="count"
                    id="checklistCount"
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {completedCount} / {totalCount} 完了
                </span>
            </div>
            <ul id="checklistItems">
                {CHECKLIST_ITEMS.map((item) => {
                    const isChecked = !!checkedState[item.id];
                    return (
                        <li key={item.id} className={isChecked ? 'checked' : ''}>
                            <input
                                type="checkbox"
                                id={item.id}
                                checked={isChecked}
                                onChange={() => toggleItem(item.id)}
                            />
                            <label htmlFor={item.id}>{item.label}</label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
