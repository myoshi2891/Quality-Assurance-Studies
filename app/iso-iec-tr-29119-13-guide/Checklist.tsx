'use client';
import React, { useState } from 'react';

const ITEMS = [
  "TRが「規格」ではなく「技術報告書」である意味を説明できる",
  "19795系とTR 29119-13の役割の違いを説明できる",
  "FMR・FNMR・FTER・FTARを自分の言葉で定義し、計算できる（FTE・FTAは失敗事象、FTER・FTARはその発生率であることを区別できる）",
  "FMR/FNMR（比較レベル）とFAR/FRR（取引レベル）の違いを説明できる",
  "しきい値の動かし方で誤りがどう変わるか説明できる",
  "リスク露出度を「影響度×発生可能性」で算出し、優先順位付けできる",
  "製品リスクとプロジェクトリスクの違いを例で示せる",
  "「性能だけでなく全品質特性」を具体例で説明できる",
  "19795-1が対象外とするのは、意図的にシステムを欺こうとする人が関与する誤り率・スループットの測定であり、プレゼンテーション攻撃のテスト全般ではない点を説明できる",
  "Annex D〜Kがどんな時に役立つか説明できる"
];

/** Keep every checkbox independent and announce progress without moving focus. */
export default function Checklist() {
  const [checked, setChecked] = useState<boolean[]>(() => ITEMS.map(() => false));
  const done = checked.filter(Boolean).length;
  return <>
    <div className={done === ITEMS.length ? 'progress complete' : 'progress'}><div className="progress-head"><span>理解度チェック</span><span className="progress-count" role="status">{done} / {ITEMS.length}</span></div>
      <div className="progress-bar" role="progressbar" aria-label="理解度チェックの完了数" aria-valuemin={0} aria-valuemax={ITEMS.length} aria-valuenow={done}><div className="progress-fill" style={{ width: (done / ITEMS.length * 100) + '%' }} /></div>
    </div>
    {" "}<ul className="checklist">{ITEMS.map((item, index) => <React.Fragment key={item}><li><label><input type="checkbox" checked={checked[index]} onChange={event => { const value = event.currentTarget.checked; setChecked(current => current.map((old, i) => i === index ? value : old)); }} /><span className="cl-text">{item}</span></label></li>{" "}</React.Fragment>)}</ul>
  </>;
}
