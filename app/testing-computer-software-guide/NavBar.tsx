'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC } from './toc';
import { useScrollSpy } from '../../lib/useScrollSpy';
const SECTION_IDS: readonly string[] = TOC.map(item => item.id);
const SCROLL_SPY_BAND = { top: 0.2, bottom: 0.3 } as const;
export default function NavBar() {
    const [open, setOpen] = useState(false);
    const active = useScrollSpy(SECTION_IDS, SCROLL_SPY_BAND);
    const toggle = useRef<HTMLButtonElement>(null);
    const nav = useRef<HTMLElement>(null);
    // Escape ではトグルへフォーカスを戻す。リンク選択時は閉じるだけにし、フラグメント移動で移動先の節（tabIndex={-1}）へフォーカスを渡す
    useEffect(() => {
        if (!open) return;
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') { setOpen(false); toggle.current?.focus({ preventScroll: true }); }
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
            <button id="menuToggle" type="button" ref={toggle} aria-label={open ? '目次を閉じる' : '目次を開く'} aria-expanded={open} aria-controls="sidebar" onClick={() => setOpen(value => !value)}><i className="ti ti-menu-2" aria-hidden="true" /></button>
            <span className="mobile-title">Testing Computer Software 入門ガイド</span>
        </div>
        <aside role="navigation" className={open ? 'sidebar open' : 'sidebar'} id="sidebar" ref={nav} aria-label="目次">
            <div className="sidebar-brand"><i className="ti ti-book-2" aria-hidden="true" /><span>Testing Computer Software 入門ガイド</span></div>
            <ul className="nav-list">{TOC.map(item => <li key={item.id}>
                <a className={active === item.id ? 'nav-a active' : 'nav-a'} href={'#' + item.id} aria-current={active === item.id ? 'location' : undefined} onClick={() => setOpen(false)}><span className="n-num">{item.number}</span>{item.label}</a>
            </li>)}</ul>
        </aside>
    </>;
}
