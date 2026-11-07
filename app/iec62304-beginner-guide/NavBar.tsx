'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC } from './toc';
export default function NavBar() {
    const [open,setOpen]=useState(false);
    const [active,setActive]=useState('');
    const toggle=useRef<HTMLButtonElement>(null);
    useEffect(()=>{
        if(typeof IntersectionObserver==='undefined')return;
        const observer=new IntersectionObserver(entries=>{
            for(const entry of entries)if(entry.isIntersecting)setActive(entry.target.id);
        },{rootMargin:'-15% 0px -75% 0px'});
        for(const item of TOC){const heading=document.getElementById(item.id);if(heading)observer.observe(heading);}
        return ()=>observer.disconnect();
    },[]);
    useEffect(()=>{
        if(!open)return;
        const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);toggle.current?.focus();}};
        document.addEventListener('keydown',escape);
        return ()=>document.removeEventListener('keydown',escape);
    },[open]);
    return <>
        <button type="button" className="nav-toggle" id="navToggle" ref={toggle} aria-label={open?'目次を閉じる':'目次を開く'} aria-expanded={open} aria-controls="sidebar" onClick={()=>setOpen(value=>!value)}>☰ 目次</button>
        <aside className={open?'sidebar open':'sidebar'} id="sidebar" role="navigation" aria-label="目次">
            <div className="side-title">IEC 62304 ガイド</div>
            <ul>{TOC.map(item=><li key={item.id}><a href={`#${item.id}`} data-target={item.id} className={active===item.id?'active':undefined} aria-current={active===item.id?'location':undefined} onClick={()=>setOpen(false)}>{item.label}</a></li>)}</ul>
        </aside>
    </>;
}
