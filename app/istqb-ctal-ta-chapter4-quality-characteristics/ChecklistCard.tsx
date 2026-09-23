'use client';

import React, { useState } from 'react';

export interface ChecklistItem {
    id: string;
    label: React.ReactNode;
}

interface ChecklistCardProps {
    items: ChecklistItem[];
}

export default function ChecklistCard({ items }: ChecklistCardProps) {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    const total = items.length;
    const completedCount = Object.values(checkedItems).filter(Boolean).length;
    const progressPercent = total > 0 ? (completedCount / total) * 100 : 0;

    const toggleItem = (id: string) => {
        setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="checklist-card">
            <div className="checklist-progress">
                <span>進捗</span>
                <span className="cp-bar">
                    <span className="cp-bar-fill" style={{ width: `${progressPercent}%` }}></span>
                </span>
                <span className="cp-count" role="status" aria-live="polite">{`${completedCount} / ${total} 完了`}</span>
            </div>
            <ul className="task-list">
                {items.map((item) => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                        <li key={item.id} className={isChecked ? 'checked' : undefined}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleItem(item.id)}
                                />
                                <span className="cl-text">{item.label}</span>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
