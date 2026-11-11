'use client';
import React, { useState } from 'react';

/** Keep each source checklist independent, announcing progress while retaining checkbox focus. */
export default function Checklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));
  const done = checked.filter(Boolean).length;
  return <div className="checklist-card"><div className="checklist-progress"><span className="cp-label">進み具合</span><span className="cp-bar" role="progressbar" aria-label="チェックリストの完了数" aria-valuemin={0} aria-valuemax={items.length} aria-valuenow={done}><span className="cp-fill" style={{ width: `${items.length ? done / items.length * 100 : 0}%` }} /></span><span className="cp-count" role="status">{done} / {items.length}</span></div><ul className="checklist">{"\n"}{items.map((item,index)=><React.Fragment key={item}><li className={checked[index] ? 'done' : undefined}><label><input aria-label="完了にする" type="checkbox" checked={checked[index]} onChange={event=>{const value=event.currentTarget.checked;setChecked(current=>current.map((old,i)=>i === index ? value : old));}}/>{item}</label></li>{"\n"}</React.Fragment>)}</ul></div>;
}
