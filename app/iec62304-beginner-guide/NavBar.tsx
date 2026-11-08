'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC } from './toc';
export default function NavBar() {
    const [open,setOpen]=useState(false);
    const [active,setActive]=useState<string>(TOC[0].id);
    const toggle=useRef<HTMLButtonElement>(null);
    const sidebar=useRef<HTMLElement>(null);
    useEffect(()=>{
        let frame=0;
        const headings=TOC.map(item=>document.getElementById(item.id)).filter((heading):heading is HTMLElement=>heading!==null);
        // 交差の通知は帯を飛び越えた見出しに届かないため、通知は再計測の合図にとどめ、位置は毎回実測する
        function update(){
            frame=0;
            const last=headings[headings.length-1];
            if(last&&window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-2){setActive(last.id);return;}
            let current:string=TOC[0].id;
            for(const heading of headings)if(heading.getBoundingClientRect().top<=(Number.parseFloat(getComputedStyle(heading).scrollMarginTop)||0)+2)current=heading.id;
            setActive(current);
        }
        function schedule(){if(!frame)frame=requestAnimationFrame(update);}
        const observer=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(schedule,{rootMargin:'-15% 0px -75% 0px'});
        for(const heading of headings)observer?.observe(heading);
        // 図は描画後に高さが変わるため、スクロールやリサイズがなくても見出しの位置が動く。サイズ変化も再計測の合図にする
        const resizer=typeof ResizeObserver==='undefined'?null:new ResizeObserver(schedule);
        for(const diagram of document.querySelectorAll('.mermaid-diagram'))resizer?.observe(diagram);
        schedule();
        window.addEventListener('scroll',schedule,{passive:true});
        window.addEventListener('resize',schedule);
        return ()=>{observer?.disconnect();resizer?.disconnect();cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);};
    },[]);
    // 強調した項目が目次の表示範囲から外れたら、ページではなく目次だけをスクロールして見える位置へ戻す
    useEffect(()=>{
        const panel=sidebar.current,link=panel?.querySelector('[aria-current="location"]');
        if(!panel||!link)return;
        const bounds=link.getBoundingClientRect(),viewport=panel.getBoundingClientRect();
        if(bounds.top<viewport.top+40||bounds.bottom>viewport.bottom-40)panel.scrollTop+=bounds.top-viewport.top-viewport.height/2;
    },[active]);
    useEffect(()=>{
        if(!open)return;
        const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);toggle.current?.focus();}};
        document.addEventListener('keydown',escape);
        return ()=>document.removeEventListener('keydown',escape);
    },[open]);
    return <>
        <button type="button" className="nav-toggle" id="navToggle" ref={toggle} aria-label={open?'目次を閉じる':'目次を開く'} aria-expanded={open} aria-controls="sidebar" onClick={()=>setOpen(value=>!value)}>☰ 目次</button>
        <aside ref={sidebar} className={open?'sidebar open':'sidebar'} id="sidebar" onBlur={event=>{const next=event.relatedTarget as Node|null;if(next&&!event.currentTarget.contains(next)&&next!==toggle.current)setOpen(false);}} role="navigation" aria-label="目次">
            <div className="side-title">IEC 62304 ガイド</div>
            <ul>{TOC.map(item=><li key={item.id}><a href={`#${item.id}`} data-target={item.id} className={active===item.id?'active':undefined} aria-current={active===item.id?'location':undefined} onClick={()=>setOpen(false)}>{item.label}</a></li>)}</ul>
        </aside>
    </>;
}
