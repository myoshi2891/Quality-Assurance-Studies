'use client';
import React, { useState } from 'react';
const ITEMS: React.ReactNode[] = [
<>{"意味（DEC）と表現（VD）を"}<strong>{"混ぜずに"}</strong>{"書いているか"}</>,
<>{"定義文は"}<strong>{"その概念を他の概念から区別できる"}</strong>{"か"}</>,
<>{"単位・データ型・許容値が"}<strong>{"表現（VD）側"}</strong>{"に書かれているか"}</>,
<>{"既存の DEC / VD\nを"}<strong>{"検索して再利用"}</strong>{"を検討したか"}</>,
<>{"責任者（Steward）と提出者（Submitter）が"}<strong>{"明確"}</strong>{"か"}</>,
<>{"命名規則（Part 5）と登録手順（Part\n6）に"}<strong>{"沿っているか"}</strong></>
];
export default function Checklist() {
    const [checked, setChecked] = useState<boolean[]>(() => ITEMS.map(() => false));
    const count = checked.filter(Boolean).length;
    return <div className="checklist-card"><div className="checklist-progress"><span className="cp-label">チェック進捗</span><div className="cp-bar" role="progressbar" aria-label="設計チェック進捗" aria-valuemin={0} aria-valuemax={ITEMS.length} aria-valuenow={count}><div className="cp-fill" style={{ width: (count / ITEMS.length * 100) + '%' }} /></div><span className="cp-count" aria-live="polite">{count} / {ITEMS.length}</span></div><ul className="checklist">{ITEMS.map((item,i)=><li key={i}><label><input className="cb" type="checkbox" checked={checked[i]} onChange={() => setChecked(previous => previous.map((value,j)=>j===i?!value:value))} /><span className="cb-text">{item}</span></label></li>)}</ul></div>;
}
