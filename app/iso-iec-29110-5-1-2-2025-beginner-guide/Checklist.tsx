'use client';
import React,{useState} from 'react';
const ITEMS=[
  "VSEは何人以下の組織か説明できる",
  "ISO/IEC 29110-4-1（仕様）と5-1-2（ガイド）の違いを説明できる",
  "4つのプロファイルを順に挙げ、Basicの対象を説明できる",
  "本書の対象外になるケース（安全重要など）を2つ挙げられる",
  "PMの4活動とSIの6活動を挙げられる",
  "条件付きタスクが何を置き換えたか説明できる",
  "2025年版で追加された付録A〜Dの内容を言える",
  "自分のチームで導入する最初の一歩を決められる"
];
/** Preserve each self-check and update its original progress bar without moving focus. */
export default function Checklist(){const [checked,setChecked]=useState<boolean[]>(()=>ITEMS.map(()=>false));const done=checked.filter(Boolean).length;return <div className="check-card"><div className="check-head"><span className="check-title">セルフチェック</span><span className="check-hint">できたらチェックを入れましょう</span></div>{"\n"}<ul className="task-list checklist">{ITEMS.map((text,index)=><li key={text} className={checked[index]?'done':undefined}>{"\n"}<label><input type="checkbox" checked={checked[index]} onChange={()=>setChecked(values=>values.map((value,i)=>i===index?!value:value))}/>{text}</label>{"\n"}</li>)}</ul>{"\n"}<div className={done===ITEMS.length?'progress complete':'progress'}><div className="progress-track" role="progressbar" aria-label="セルフチェックの完了数" aria-valuemin={0} aria-valuemax={ITEMS.length} aria-valuenow={done}><div className="progress-fill" style={{width:done/ITEMS.length*100+'%'}}/></div><span className="progress-label" role="status">{done} / {ITEMS.length} 完了</span></div></div>;}
