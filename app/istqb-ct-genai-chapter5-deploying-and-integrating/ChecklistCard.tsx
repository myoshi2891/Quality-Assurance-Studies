'use client';

import React, { useState } from 'react';

export interface ChecklistGroup {
    title: string;
    items: {
        id: string;
        text: string;
    }[];
}

interface ChecklistCardProps {
    groups: ChecklistGroup[];
}

export default function ChecklistCard({ groups }: ChecklistCardProps) {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    const allItems = groups.flatMap((g) => g.items);
    const total = allItems.length;
    const completedCount = allItems.filter((item) => checkedItems[item.id]).length;
    const progressPercent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

    const toggleItem = (id: string) => {
        setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="checklist-card">
            <div className="checklist-progress">
                <span className="cp-label">学習進捗</span>
                <div className="cp-bar">
                    <div className="cp-bar-fill" style={{ width: `${progressPercent}%` }} />
                </div>
                <span className="cp-count" role="status" aria-live="polite">
                    {`${completedCount} / ${total} 完了`}
                </span>
            </div>
            {groups.map((group) => (
                <div key={group.title} className="check-group">
                    <div className="check-group-title">{group.title}</div>
                    <ul className="task-list">
                        {group.items.map((item) => {
                            const isChecked = !!checkedItems[item.id];
                            return (
                                <li key={item.id} className={isChecked ? 'checked' : undefined}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={() => toggleItem(item.id)}
                                        />
                                        <span className="cl-text">{item.text}</span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
}
