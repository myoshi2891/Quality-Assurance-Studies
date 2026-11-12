'use client';
import React,{useState} from 'react';
const ITEMS=[
  "仕様書で「文」「式」「関数」などの語が、一貫した意味で使われているか",
  "言語固有の語（所有権、ゴルーチンなど）を、一般語と混ぜて使っていないか",
  "引用する定義は、公式の正規版またはプレビューで確認したか",
  "規格のステータス（現行・改訂予定）を、ISO\n                            公式ページの日付つきで確認したか",
  "規格本文を無断で転載せず、要約や参照にとどめているか"
];
/** Update each source check and its original progress display. */
export default function Checklist(){const [checks,setChecks]=useState(()=>ITEMS.map(()=>false));const done=checks.filter(Boolean).length;return <div className="checklist-card" data-total="5"><div className="checklist-progress"><span className="cp-label">確認の進み具合</span><div className="cp-bar" role="progressbar" aria-label="チェック完了数" aria-valuemin={0} aria-valuemax={5} aria-valuenow={done}><div className="cp-fill" style={{width:done*20+'%'}} /></div><span className="cp-count" role="status">{done} / 5</span></div><ul className="task-list checklist">{ITEMS.map((text,i)=><li key={i}><label><input type="checkbox" checked={checks[i]} onChange={()=>setChecks(values=>values.map((v,j)=>j===i?!v:v))}/>{text}</label></li>)}</ul></div>;}
