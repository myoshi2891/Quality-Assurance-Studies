'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC_ITEMS, TOC_TREE } from './toc';

/** Render a responsive TOC with measured active headings, keyboard dismissal and mobile background isolation. */
export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [active, setActive] = useState(TOC_ITEMS[0]?.target || '');
    const toggle = useRef<HTMLButtonElement>(null);
    const sidebar = useRef<HTMLElement>(null);

    useEffect(() => {
        const query = window.matchMedia('(max-width: 960px)');
        /** Keep TOC visibility in sync with the mobile breakpoint. */
        const update = () => setMobile(query.matches);
        update();
        query.addEventListener('change', update);
        return () => query.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        let frame = 0;
        const headings = TOC_ITEMS.map(item => document.getElementById(item.target)).filter((heading): heading is HTMLElement => heading !== null);

        /** Select the last heading above the fixed chrome, or the final heading at the document end. */
        function update() {
            frame = 0;
            const last = headings[headings.length - 1];
            if (last && document.documentElement.scrollHeight > window.innerHeight && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
                setActive(last.id);
                return;
            }
            let current = headings[0]?.id || '';
            for (const heading of headings) {
                if (heading.getBoundingClientRect().top <= (Number.parseFloat(getComputedStyle(heading).scrollMarginTop) || 0) + 2) {
                    current = heading.id;
                }
            }
            setActive(current);
        }

        /** Coalesce scroll, resize and observer updates into one animation frame. */
        function schedule() {
            if (!frame) frame = requestAnimationFrame(update);
        }

        const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(schedule, { rootMargin: '-15% 0px -75% 0px' });
        for (const heading of headings) observer?.observe(heading);

        const resizer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(schedule);
        for (const diagram of document.querySelectorAll('.mermaid-diagram')) resizer?.observe(diagram);

        schedule();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);

        return () => {
            observer?.disconnect();
            resizer?.disconnect();
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
        };
    }, []);

    useEffect(() => {
        const panel = sidebar.current;
        const link = panel?.querySelector('[aria-current="location"]');
        if (!panel || !link) return;
        const bounds = link.getBoundingClientRect();
        const viewport = panel.getBoundingClientRect();
        if (bounds.top < viewport.top + 40 || bounds.bottom > viewport.bottom - 40) {
            panel.scrollTop += bounds.top - viewport.top - viewport.height / 2;
        }
    }, [active]);

    useEffect(() => {
        if (!open) return;
        /** Close the TOC on Escape and restore focus to its toggle. */
        const escape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
                toggle.current?.focus();
            }
        };
        document.addEventListener('keydown', escape);
        return () => document.removeEventListener('keydown', escape);
    }, [open]);

    useEffect(() => {
        if (!mobile || !open) return;
        const main = document.querySelector<HTMLElement>('.iso42119-7-page main.main');
        if (!main) return;
        const hadInert = main.hasAttribute('inert');
        main.setAttribute('inert', '');
        return () => {
            if (!hadInert) main.removeAttribute('inert');
        };
    }, [mobile, open]);

    /** Close ordinary mobile links and leave modified link behavior to the browser. */
    function navigate(event: React.MouseEvent<HTMLAnchorElement>) {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        setActive(event.currentTarget.dataset.target || '');
        setOpen(false);
        if (mobile) toggle.current?.focus();
    }

    return <>
      <button type="button" className="nav-toggle" id="navToggle" ref={toggle} aria-label={open ? '目次を閉じる' : '目次を開く'} aria-expanded={open} aria-controls="sidebar" onClick={()=>setOpen(value=>!value)}>☰ 目次</button>
      <aside ref={sidebar} className={open ? 'sidebar open' : 'sidebar'} id="sidebar" aria-label="目次" inert={mobile && !open} onBlur={event=>{ const next=event.relatedTarget as Node | null; if(next && !event.currentTarget.contains(next) && next !== toggle.current) setOpen(false); }}>
        <div className="sb-title"><span>ISO/IEC AWI TS 42119-7</span>初学者向け解説ガイド</div>
        <nav><ul className="nav-list">{TOC_TREE.map(item=><li key={item.target} className="nav-h2"><a href={item.href} data-target={item.target} className={active===item.target ? 'active' : undefined} aria-current={active===item.target ? 'location' : undefined} onClick={navigate}>{item.text}</a>{item.children.length>0 && <ul className="nav-sub">{item.children.map(child=><li key={child.target}><a href={child.href} data-target={child.target} className={active===child.target ? 'active' : undefined} aria-current={active===child.target ? 'location' : undefined} onClick={navigate}>{child.text}</a></li>)}</ul>}</li>)}</ul></nav>
      </aside>
    </>;
}
