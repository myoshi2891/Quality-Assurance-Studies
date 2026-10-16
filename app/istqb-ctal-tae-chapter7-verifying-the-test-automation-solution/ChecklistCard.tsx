'use client';

import React, { useState } from 'react';

export default function ChecklistCard() {
    const [checked, setChecked] = useState<boolean[]>(() => Array(6).fill(false));
    const count = checked.filter(Boolean).length;
    const toggle = (index: number) => setChecked(values => values.map((value, i) => i === index ? !value : value));
    return <div className="checklist-card">
        <div className="checklist-progress">
            <span className="cp-label">
                {"進捗"}
            </span>
            <div className="cp-bar" role="progressbar" aria-label="学習の進捗" aria-valuemin={0} aria-valuemax={6} aria-valuenow={count}>
                <div className="cp-bar-fill" style={{ width: `${count / 6 * 100}%` }}>

                </div>
            </div>
            <span className="cp-count" aria-live="polite">
                {count} / 6 完了
            </span>
        </div>
        <ul className="task-list">
            <li>
                <label>
                    <input className="checklist-checkbox" type="checkbox" checked={checked[0] ?? false} onChange={() => toggle(0)} />
                    {"環境検証の4観点（インストール・構成、再現性、接続性、TAF コンポーネントテスト）を言える"}
                </label>
            </li>
            <li>
                <label>
                    <input className="checklist-checkbox" type="checkbox" checked={checked[1] ?? false} onChange={() => toggle(1)} />
                    {"接続性の事前条件（ログイン、ツール起動、SUT へのアクセス、設定の確認、権限）を言える"}
                </label>
            </li>
            <li>
                <label>
                    <input className="checklist-checkbox" type="checkbox" checked={checked[2] ?? false} onChange={() => toggle(2)} />
                    {"スイート検証の4項目（構成、新機能、再現性、侵入性）を言える"}
                </label>
            </li>
            <li>
                <label>
                    <input className="checklist-checkbox" type="checkbox" checked={checked[3] ?? false} onChange={() => toggle(3)} />
                    {"不具合の場所の5つ（テストケース、SUT、TAF、ハードウェア、ネットワーク）を言える"}
                </label>
            </li>
            <li>
                <label>
                    <input className="checklist-checkbox" type="checkbox" checked={checked[4] ?? false} onChange={() => toggle(4)} />
                    {"静的解析の重大度（critical、high、medium、low）を言える"}
                </label>
            </li>
            <li>
                <label>
                    <input className="checklist-checkbox" type="checkbox" checked={checked[5] ?? false} onChange={() => toggle(5)} />
                    {"静的解析が DevSecOps で果たす役割を説明できる"}
                </label>
            </li>
        </ul>
    </div>;
}
