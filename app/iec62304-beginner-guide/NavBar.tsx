'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC } from './toc';
export default function NavBar() {
    const [open,setOpen]=useState(false);
    const [active,setActive]=useState<string>(TOC[0].id);
    const toggle=useRef<HTMLButtonElement>(null);
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
        schedule();
        window.addEventListener('scroll',schedule,{passive:true});
        window.addEventListener('resize',schedule);
        return ()=>{observer?.disconnect();cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);};
    },[]);
    useEffect(()=>{
        if(!open)return;
        const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);toggle.current?.focus();}};
        document.addEventListener('keydown',escape);
        return ()=>document.removeEventListener('keydown',escape);
    },[open]);
    return <>
        <button type="button" className="nav-toggle" id="navToggle" ref={toggle} aria-label={open?'目次を閉じる':'目次を開く'} aria-expanded={open} aria-controls="sidebar" onClick={()=>setOpen(value=>!value)}>☰ 目次</button>
        <aside className={open?'sidebar open':'sidebar'} id="sidebar" onBlur={event=>{const next=event.relatedTarget as Node|null;if(next&&!event.currentTarget.contains(next)&&next!==toggle.current)setOpen(false);}} role="navigation" aria-label="目次">
            <div className="side-title">IEC 62304 ガイド</div>
            <ul>{TOC.map(item=><li key={item.id}><a href={`#${item.id}`} data-target={item.id} className={active===item.id?'active':undefined} aria-current={active===item.id?'location':undefined} onClick={()=>setOpen(false)}>{item.label}</a></li>)}</ul>
        </aside>
    </>;
}
