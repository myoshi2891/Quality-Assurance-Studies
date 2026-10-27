'use client';
import React, { useState } from 'react';
const ITEMS = [
  "ISO/IEC\n                                    19770-5が「概要と用語」を扱う規格であることを説明できる",
  "ITAM、SAM、HAMの違いを自分の言葉で言える",
  "本規格が提供する4つの柱（全体像・入門・基本原則・用語）を挙げられる",
  "19770-1／-2／-3／-4の役割の違いを説明できる",
  "SWID・ENT・RUMが「何が入っているか／何を使ってよいか／どれだけ使ったか」に対応することを理解した",
  "19770-5自体が認証対象の要求事項を定める規格ではないことを理解した",
  "現行は第2版（2015年）で、第3版（Vocabulary）が制定前であることを説明できる",
  "社内文書で規格を引用するときは「版（年）を明記する」ことを意識できる"
];
export default function Checklist() {
    const [checked,setChecked] = useState<boolean[]>(() => ITEMS.map(() => false));
    const count = checked.filter(Boolean).length;
    const toggle = (index: number) => setChecked(previous => previous.map((value,i)=> i===index ? !value : value));
    return <div className="checklist-card">
        <div className="checklist-progress"><span className="cp-label">理解度</span><div className="cp-bar"><div className="cp-fill" style={{width:Math.round(count/ITEMS.length*100)+'%'}} /></div><span className="cp-count"><b>{count}</b> / 8</span></div>
        <ul className="checklist">{ITEMS.map((item,index)=><li key={item} className={checked[index]?'done':undefined} onClick={event=> { if (!(event.target as HTMLElement).closest('label,input,a')) toggle(index); }}>
            <label><input type="checkbox" checked={checked[index]} onChange={()=>toggle(index)} />{item}</label>
        </li>)}</ul>
    </div>;
}
