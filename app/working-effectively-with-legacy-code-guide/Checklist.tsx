'use client';
import React, { useState } from 'react';
const ITEMS = [
  "「レガシーコード＝テストのないコード」という定義を自分の言葉で説明できる",
  "「レガシーコードのジレンマ」を自分の状況に当てはめて説明できる",
  "5ステップの変更アルゴリズムを、直近の小さな修正1件に実際に適用してみた",
  "オブジェクトシームを使って、少なくとも1つの依存を差し替えてテストを書いた",
  "キャラクタリゼーションテストを最低1つ、実際のコードに対して書いた",
  "Sprout Method と Wrap Method\n                                        の違いを、自分の言葉で説明できる",
  "Extract Interface / Parameterize Constructor\n                                        のどちらかを実際に適用したことがある",
  "自分のプロジェクトの「あるある」問題を13章の早見表に照らして、次に読むべき章を特定した"
];
export default function Checklist() {
 const [checked, setChecked] = useState<boolean[]>(ITEMS.map(() => false));
 return <><div className="checklist-counter" id="checklistCounter" role="status" aria-live="polite">{checked.filter(Boolean).length} / {ITEMS.length} 完了</div><ul className="checklist" id="checklist">{ITEMS.map((label,i) => <li key={label} className={checked[i] ? 'done' : undefined}><label><input type="checkbox" checked={checked[i]} onChange={() => setChecked(values => values.map((value,index) => index === i ? !value : value))} /><span>{label}</span></label></li>)}</ul></>;
}
