'use client';
import React, { useState } from 'react';
const ITEMS = [
  "ISO 27799:2025 が「ISO/IEC 27002:2022\n                                の医療向け版」であることを説明できる",
  "2025年版が「管理策に集中し、27001（ISMS）関連の内容を外した」ことを説明できる",
  "規格の本文構成（第4〜8章）と付録（Annex\n                                A〜D）の役割を言える",
  "27002の管理策の扱い方4パターン（変更なし・ガイダンス追加・補足・HLT追加）を説明できる",
  "管理策数（93＋HLT\n                                8＝101）とHLTの8個の番号・名称を言える",
  "「セキュリティ・安全・有効性は相互依存」の意味を具体例で説明できる",
  "Comply or Explain\n                                の意味を説明できる",
  "個人の健康情報、ケアの対象者、代理人、ヘルスソフトウェアの意味を説明できる",
  "適用宣言書（SoA）とAnnex\n                                Aの関係を説明できる",
  "ISO 81001-1、IEC/TS 81001-2-2、IEC\n                                81001-5-1 との役割の違いを説明できる"
];
export default function Checklist() {
const [checked, setChecked] = useState<boolean[]>(()=>ITEMS.map(()=>false));
const count = checked.filter(Boolean).length;
return <div className="checklist-card"><div className="checklist-progress"><span className="cp-label">理解度チェック</span><div className="cp-bar"><div className="cp-fill" style={count ? {width:count*10+'%'} : undefined} /></div><span className={count===ITEMS.length?'cp-count cp-done':'cp-count'} role="status" aria-live="polite">{count} / {ITEMS.length}</span><button className="cp-reset" type="button" onClick={()=>setChecked(ITEMS.map(()=>false))}>リセット</button></div><ul className="task-list task-list">{ITEMS.map((text,i)=><li key={text} className={checked[i]?'done':undefined}><label><input type="checkbox" checked={checked[i]} onChange={()=>setChecked(previous=>previous.map((value,j)=>j===i?!value:value))} />{text}</label></li>)}</ul></div>;
}
