'use client';

import React, { useState } from 'react';

export interface ChecklistItem {
    id: string;
    label: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
    {
        id: 'cl-1',
        label: 'ON点・OFF点・IN点・OUT点の違いを、閉じた境界と開いた境界それぞれについて説明できる',
    },
    {
        id: 'cl-2',
        label: '簡略化ドメインカバレッジと信頼性ドメインカバレッジの違いを説明できる',
    },
    {
        id: 'cl-3',
        label: 'ベースチョイスカバレッジとペアワイズカバレッジの違いを説明できる',
    },
    {
        id: 'cl-4',
        label: 'なぜペアワイズテストが効果的とされるのか(相互作用障害の統計的傾向)を説明できる',
    },
    {
        id: 'cl-5',
        label: 'CRUDマトリクスを実際に作成し、網羅性テストと一貫性テストの違いを説明できる',
    },
    {
        id: 'cl-6',
        label: '0-switch・1-switch・N-switch・ラウンドトリップカバレッジをそれぞれ図で示せる',
    },
    {
        id: 'cl-7',
        label: 'メインシナリオ・拡張シナリオ・例外シナリオの違いを具体例で説明できる',
    },
    {
        id: 'cl-8',
        label: '単純ループカバレッジの4パターンを説明できる',
    },
    {
        id: 'cl-9',
        label: 'デシジョンテーブルの最小化とチェックサム手続きを、実際の数値例で計算できる',
    },
    {
        id: 'cl-10',
        label: 'メタモルフィック関係(MR)を使ったテストケースを、テストオラクル問題と絡めて説明できる',
    },
    {
        id: 'cl-11',
        label: 'テストチャーターの「Explore/With/To」形式で、自分の担当システムの例を1つ作れる',
    },
    {
        id: 'cl-12',
        label: 'Read-doチェックリストとDo-confirmチェックリストの違いを具体例で説明できる',
    },
    {
        id: 'cl-13',
        label: 'クラウドテストの利点・限界を、体系的テスト技法との使い分けの観点で説明できる',
    },
    {
        id: 'cl-14',
        label: '与えられたシナリオに対し、どの技法カテゴリ(データ/ビヘイビア/ルール/経験ベース)が適切かを判断できる',
    },
    {
        id: 'cl-15',
        label: 'テスト設計自動化の利点とリスクを、自分のプロジェクトに当てはめて具体的に語れる',
    },
];

export default function Checklist() {
    const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

    const toggleItem = (id: string) => {
        setCheckedState((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const completedCount = Object.values(checkedState).filter(Boolean).length;
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
                <span
                    className="cp-count"
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {completedCount} / {totalCount} 完了
                </span>
            </div>
            <ul className="task-list checklist">
                {CHECKLIST_ITEMS.map((item) => {
                    const isChecked = !!checkedState[item.id];
                    return (
                        <li key={item.id} className={isChecked ? 'checked' : ''}>
                            <label>
                                <input
                                    type="checkbox"
                                    className="checklist-checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleItem(item.id)}
                                />
                                {item.label}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
