'use client';

import React, { useState } from 'react';

export default function ChecklistCard() {
    const [checked, setChecked] = useState<boolean[]>(() => Array(13).fill(false));
    const count = checked.filter(Boolean).length;
    const toggle = (index: number) => setChecked(values => values.map((value, i) => i === index ? !value : value));
    return <div className="checklist-card">
        <div className="checklist-progress">
            <span className="cp-label">
                {"学習の進捗"}
            </span>
            <div className="cp-bar" role="progressbar" aria-label="学習の進捗" aria-valuemin={0} aria-valuemax={13} aria-valuenow={count}>
                <div className="cp-bar-fill" style={{ width: `${count / 13 * 100}%` }}>

                </div>
            </div>
            <span className="cp-count" aria-live="polite">
                {count} / 13 完了
            </span>
        </div>
        <ul className="task-list">
            <li>
                <label>
                    <input type="checkbox" checked={checked[0] ?? false} onChange={() => toggle(0)} />
                    {"第6章のキーワード5語（measurement、metric、test log、test progress report、test step）を説明できる"}
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked={checked[1] ?? false} onChange={() => toggle(1)} />
                    {"SUT ログ、TAF ログ、ビルドログ、デプロイログ、本番ログ、スクリーンショットの違いを説明できる"}
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked={checked[2] ?? false} onChange={() => toggle(2)} />
                    {"下位のテストウェアに記録機能を組み込む利点を説明できる"}
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked={checked[3] ?? false} onChange={() => toggle(3)} />
                    {"passed／failed／TAS failure／inconclusive の違いを説明できる"}
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked={checked[4] ?? false} onChange={() => toggle(4)} />
                    {"TAS ロギングで記録する内容を挙げられる"}
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked={checked[5] ?? false} onChange={() => toggle(5)} />
                    {"SUT ロギングで押さえる内容とタイムスタンプ同期の意義を説明できる"}
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked={checked[6] ?? false} onChange={() => toggle(6)} />
                    {"一次データ（TAS）と二次データ（SUT）の違いを説明できる"}
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked={checked[7] ?? false} onChange={() => toggle(7)} />
                    {"失敗分析の5ステップを順に言える"}
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked={checked[8] ?? false} onChange={() => toggle(8)} />
                    {"「期待と実際が一致しているのに失敗」「全テスト失敗」の原因を説明できる"}
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked={checked[9] ?? false} onChange={() => toggle(9)} />
                    {"相関 ID（トレース ID）の役割を説明できる"}
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked={checked[10] ?? false} onChange={() => toggle(10)} />
                    {"テスト進捗レポートの必須内容と公開方法を説明できる"}
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked={checked[11] ?? false} onChange={() => toggle(11)} />
                    {"管理層・運用層・技術層の関心の違いを説明できる"}
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked={checked[12] ?? false} onChange={() => toggle(12)} />
                    {"ダッシュボードと AI／ML 分析の役割を説明できる"}
                </label>
            </li>
        </ul>
    </div>;
}
