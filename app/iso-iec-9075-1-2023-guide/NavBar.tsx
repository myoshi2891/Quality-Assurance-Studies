'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC } from './toc';
export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [active, setActive] = useState('');
    const button = useRef<HTMLButtonElement>(null);
    const pending = useRef<string | null>(null);
    const pendingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    function close(restore = false) { setOpen(false); if (restore) button.current?.focus(); }
    useEffect(() => {
        let frame = 0;
        const headings = TOC.map(item => document.getElementById(item.id)).filter((h): h is HTMLElement => h !== null);
        function update() {
            frame = 0;
            if (pending.current) return;
            // Recompute positions on every scroll; large jumps can skip observer bands.
            let current = '';
            for (const heading of headings) if (heading.getBoundingClientRect().top <= window.innerHeight * 0.25) current = heading.id;
            setActive(current);
        }
        function schedule() { if (!frame) frame = requestAnimationFrame(update); }
        function resize() { const small = window.innerWidth <= 900; setMobile(small); if (!small) setOpen(false); schedule(); }
        function hash() {
            try { const id = decodeURIComponent(window.location.hash.slice(1)); if (TOC.some(item => item.id === id)) setActive(id); }
            catch (error) { if (!(error instanceof URIError)) throw error; }
        }
        function escape(event: KeyboardEvent) { if (event.key === 'Escape') { setOpen(false); button.current?.focus(); } }
        const observer = new IntersectionObserver(schedule, { rootMargin: '-15% 0px -75% 0px' });
        headings.forEach(h => observer.observe(h));
        resize(); update(); hash();
        window.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', resize); window.addEventListener('hashchange', hash); document.addEventListener('keydown', escape);
        return () => {
            observer.disconnect(); cancelAnimationFrame(frame);
            if (pendingTimer.current) clearTimeout(pendingTimer.current);
            window.removeEventListener('scroll', schedule); window.removeEventListener('resize', resize); window.removeEventListener('hashchange', hash); document.removeEventListener('keydown', escape);
        };
    }, []);
    function choose(id: string) {
        close(open); setActive(id); pending.current = id;
        if (pendingTimer.current) clearTimeout(pendingTimer.current);
        pendingTimer.current = setTimeout(() => { pending.current = null; window.dispatchEvent(new Event('scroll')); }, 900);
    }
    return <>
        <button ref={button} className="nav-toggle" id="navToggle" type="button" aria-label="目次を開閉" aria-expanded={open} aria-controls="sql-framework-toc" onClick={() => setOpen(value => !value)}>☰</button>
        <div className={`scrim${open ? ' show' : ''}`} id="scrim" aria-hidden="true" onClick={() => close(true)} />
        <nav aria-label="目次" className={`sidebar${open ? ' open' : ''}`} id="sql-framework-toc" inert={mobile && !open}>
            <p className="side-title">ISO/IEC 9075-1:2023</p><p className="side-sub">SQLフレームワーク 初学者向けガイド</p>
            <ul>{TOC.map(item => <li key={item.id}><a data-target={item.id} href={`#${item.id}`} className={active === item.id ? 'active' : undefined} aria-current={active === item.id ? 'location' : undefined} onClick={() => choose(item.id)}>{item.label}</a></li>)}</ul>
        </nav>
    </>;
}
