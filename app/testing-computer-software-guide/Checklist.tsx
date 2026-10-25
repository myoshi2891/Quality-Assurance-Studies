'use client';
import React, { useState } from 'react';
const ITEMS = [
    "テスト対象の仕様・受け入れ条件を理解できているか",
    "正常系だけでなく異常系・境界値のテスト観点を洗い出したか",
    "テストレベル(単体・結合・システム・受け入れ)の役割分担が明確か",
    "自チームのアーキテクチャに合わせてテストピラミッド/トロフィーの比率を検討したか",
    "単体テストがCIで自動実行される状態になっているか",
    "E2Eテストを「重要な導線」に絞り込めているか",
    "探索的テストの時間を意識的に確保しているか",
    "バグレポートに再現手順・期待結果・実際の結果・環境情報が揃っているか",
    "テスト計画のメモがチーム内で共有されているか",
    "AIが生成したテストコードもレビュー対象にしているか"
];
export default function Checklist() {
    const [checked, setChecked] = useState<boolean[]>(ITEMS.map(() => false));
    return <>
        <div className="checklist-counter"><i className="ti ti-circle-check" /><span id="checklistCounter" role="status" aria-live="polite">{checked.filter(Boolean).length} / {ITEMS.length} 完了</span></div>
        <ul className="checklist" id="checklist">{ITEMS.map((label,i) => <li key={label} className={checked[i] ? 'done' : undefined}><label><input type="checkbox" checked={checked[i]} onChange={() => setChecked(values => values.map((value,index) => index === i ? !value : value))} /><span className="txt">{label}</span></label></li>)}</ul>
    </>;
}
