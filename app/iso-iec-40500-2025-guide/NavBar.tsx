'use client';
import React, { useEffect, useRef, useState } from 'react';
import { GROUPS, TOC } from './toc';
export default function NavBar() {
    const [open,setOpen] = useState(false), [mobile,setMobile] = useState(false), [active,setActive] = useState('');
    const button = useRef<HTMLButtonElement>(null), nav = useRef<HTMLElement>(null);
    const pending = useRef<string | null>(null), timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    function close(restore = false) { setOpen(false); if (restore) button.current?.focus(); }
    useEffect(() => {
        let frame = 0;
        const headings = TOC.map(item => document.getElementById(item.id)).filter((h): h is HTMLElement => h !== null);
        function update() {
            frame = 0; if (pending.current) return;
            let current = '';
            for (const heading of headings) if (heading.getBoundingClientRect().top <= (Number.parseFloat(getComputedStyle(heading).scrollMarginTop) || 0) + 2) current = heading.id;
            setActive(current);
        }
        function schedule() { if (!frame) frame = requestAnimationFrame(update); }
        function resize() { const small = window.innerWidth <= 900; setMobile(small); if (!small) setOpen(false); schedule(); }
        function hash() { try { const id = decodeURIComponent(window.location.hash.slice(1)); if (TOC.some(item => item.id === id)) setActive(id); } catch (error) { if (!(error instanceof URIError)) throw error; } }
        function escape(event: KeyboardEvent) { if (event.key === 'Escape' && button.current?.getAttribute('aria-expanded') === 'true') { setOpen(false); button.current.focus(); } }
        const observer = new IntersectionObserver(schedule, {rootMargin:'-15% 0px -75% 0px'}); headings.forEach(h => observer.observe(h));
        resize(); update(); hash();
        window.addEventListener('scroll',schedule,{passive:true}); window.addEventListener('resize',resize); window.addEventListener('hashchange',hash); document.addEventListener('keydown',escape);
        return () => { observer.disconnect(); cancelAnimationFrame(frame); if (timer.current) clearTimeout(timer.current); window.removeEventListener('scroll',schedule); window.removeEventListener('resize',resize); window.removeEventListener('hashchange',hash); document.removeEventListener('keydown',escape); };
    },[]);
    useEffect(() => {
        const link = Array.from(nav.current?.querySelectorAll<HTMLAnchorElement>('a') ?? []).find(a => a.dataset.target === active);
        if (!link || !nav.current || (mobile && !open)) return;
        const bounds = link.getBoundingClientRect(), container = nav.current.getBoundingClientRect();
        if (bounds.top < container.top || bounds.bottom > container.bottom) link.scrollIntoView?.({block:'nearest',behavior:'instant'});
    },[active,mobile,open]);
    // 本文は背面に残るだけなので、開いている間はキーボードでも到達できないようにする
    useEffect(() => {
        if (!mobile || !open) return;
        const main = document.querySelector('main.main');
        if (!main) return;
        const wasInert = main.hasAttribute('inert');
        main.setAttribute('inert','');
        return () => { if (!wasInert) main.removeAttribute('inert'); };
    },[mobile,open]);
    function choose(id: string) { close(open); setActive(id); pending.current = id; if (timer.current) clearTimeout(timer.current); timer.current = setTimeout(() => { pending.current = null; window.dispatchEvent(new Event('scroll')); },900); }
    function link(item: {id:string;label:string}, heading: boolean) { return <a className={[heading ? 'nav-h2' : '',active === item.id ? 'active' : ''].filter(Boolean).join(' ') || undefined} href={`#${item.id}`} data-target={item.id} aria-current={active === item.id ? 'location' : undefined} onClick={event => { if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; choose(item.id); }}>{item.label}</a>; }
    return <>
        <button ref={button} className="toggle" id="toggle" type="button" aria-label="目次を開閉" aria-expanded={open} aria-controls="sidebar" onClick={() => setOpen(value => !value)}>☰ 目次</button>
        <nav ref={nav} className={`sidebar${open ? ' open' : ''}`} id="sidebar" aria-label="目次" inert={mobile && !open}>
            <p className="sb-title">ISO/IEC 40500:2025<br />WCAG 2.2 解説ガイド</p>
            {GROUPS.map(group => <React.Fragment key={group.heading.id}>{link(group.heading,true)}{group.children.length > 0 ? <ul className="nav-sub">{group.children.map(item => <li key={item.id}>{link(item,false)}</li>)}</ul> : null}</React.Fragment>)}
        </nav>
    </>;
}
