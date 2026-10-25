'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC } from './toc';
const GROUPS: Record<number, string> = { 0: '導入', 2: '基礎概念', 5: '5ステップ詳解', 10: '実践テクニック', 15: '応用' };
export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');
    const toggle = useRef<HTMLButtonElement>(null);
    const nav = useRef<HTMLElement>(null);
    const close = () => { setOpen(false); toggle.current?.focus({ preventScroll: true }); };
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
        }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
        TOC.forEach(item => { const section = document.getElementById(item.id); if (section) observer.observe(section); });
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (!open) return;
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);
    useEffect(() => {
        if (!active) return;
        const link = nav.current?.querySelector('a[aria-current="location"]');
        if (!link || !nav.current) return;
        const bounds = link.getBoundingClientRect(); const panel = nav.current.getBoundingClientRect();
        if (bounds.top < panel.top || bounds.bottom > panel.bottom) nav.current.scrollTop += bounds.top - panel.top - panel.height / 3;
    }, [active]);
    return <>
        <div className="mobile-bar">
            <button id="mobileToggle" type="button" ref={toggle} aria-label={open ? '目次を閉じる' : '目次を開く'} aria-expanded={open} aria-controls="sidebar" onClick={() => setOpen(value => !value)}><i className="ti ti-menu-2" aria-hidden="true" /></button>
            <span className="mobile-bar-title">WEwLC 実践ガイド</span>
        </div>
        <nav className={open ? 'sidebar open' : 'sidebar'} id="sidebar" ref={nav} aria-label="目次">
            <div className="sidebar-brand"><i className="ti ti-book-2" aria-hidden="true" /> WEwLC 実践ガイド</div>
            {TOC.map((item, index) => <React.Fragment key={item.id}>
                {GROUPS[index] && <div className="nav-group-label">{GROUPS[index]}</div>}
                <a className={active === item.id ? 'nav-a active' : 'nav-a'} href={'#' + item.id} aria-current={active === item.id ? 'location' : undefined} onClick={() => { setActive(item.id); if (open) close(); }}><span className="n-num">{item.number}</span>{item.label}</a>
            </React.Fragment>)}
        </nav>
        <div className="sidebar-scrim" id="sidebarScrim" onClick={close} aria-hidden="true" />
    </>;
}
