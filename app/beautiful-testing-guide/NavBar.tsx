'use client';
import React, {useEffect,useRef,useState} from 'react';
import {useScrollSpy} from '../../lib/useScrollSpy';
export const TOC_ITEMS = [
    {
        "id": "sec-1",
        "label": "1. なぜ「美しい」テストなのか"
    },
    {
        "id": "sec-2",
        "label": "2. 本書の全体構成"
    },
    {
        "id": "sec-3",
        "label": "3. ステップ1：ステークホルダー"
    },
    {
        "id": "sec-4",
        "label": "4. ステップ2：現代の地図"
    },
    {
        "id": "sec-5",
        "label": "5. ステップ3：ユニットテストとTDD"
    },
    {
        "id": "sec-6",
        "label": "6. ステップ4：探索的テスト"
    },
    {
        "id": "sec-7",
        "label": "7. ステップ5：バグ管理"
    },
    {
        "id": "sec-8",
        "label": "8. ステップ6：自動化とCI"
    },
    {
        "id": "sec-9",
        "label": "9. ステップ7：パフォーマンス"
    },
    {
        "id": "sec-10",
        "label": "10. ステップ8：ファジング／ミューテーション"
    },
    {
        "id": "sec-11",
        "label": "11. ステップ9：コミュニティ"
    },
    {
        "id": "sec-12",
        "label": "12. AIエージェント時代の視点"
    },
    {
        "id": "sec-13",
        "label": "13. 章立て早見表"
    },
    {
        "id": "sec-14",
        "label": "14. チェックリスト"
    },
    {
        "id": "sec-15",
        "label": "15. 参考文献・出典"
    }
];
const SECTION_IDS=TOC_ITEMS.map(item=>item.id);
const BAND={top:0.2,bottom:0.3};
export default function NavBar(){
 const [isOpen,setIsOpen]=useState(false);
 const toggleRef=useRef<HTMLButtonElement>(null);
 const activeId=useScrollSpy(SECTION_IDS,BAND);
 useEffect(()=>{
  if(!isOpen)return;
  const handleKey=(event:KeyboardEvent)=>{if(event.key==='Escape'){setIsOpen(false);toggleRef.current?.focus({preventScroll:true});}};
  window.addEventListener('keydown',handleKey);
  return ()=>window.removeEventListener('keydown',handleKey);
 },[isOpen]);
 const followLink=()=>{if(isOpen)toggleRef.current?.focus({preventScroll:true});setIsOpen(false);};
 return <>
  <button className="menu-toggle" id="menuToggle" type="button" aria-label="メニュー" aria-expanded={isOpen} aria-controls="sidebar" ref={toggleRef} onClick={()=>setIsOpen(previous=>!previous)}>☰</button>
  <aside className={isOpen?'sidebar open':'sidebar'} id="sidebar">
   <div className="brand">Beautiful Testing 完全ガイド</div>
   <nav aria-label="目次"><ul>{TOC_ITEMS.map(item=><li key={item.id}><a href={'#'+item.id} className={activeId===item.id?'active':undefined} aria-current={activeId===item.id?'location':undefined} onClick={followLink}>{item.label}</a></li>)}</ul></nav>
  </aside>
 </>;
}
