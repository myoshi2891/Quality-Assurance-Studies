'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC_ITEMS } from './toc';
import { acquireBodyScrollLock } from '../../lib/bodyScrollLock';
/** Preserve the responsive drawer, keyboard focus cycle and measured current-section links. */
export default function NavBar() {
    const [mobile, setMobile] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');
    const nav = useRef<HTMLElement>(null);
    const boundary = useRef<HTMLDivElement>(null);
    const button = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const query = window.matchMedia('(max-width: 900px)');
        /** Close the drawer when switching back to the desktop column. */
        const update = () => { setMobile(query.matches); if (!query.matches)
            setOpen(false); };
        update();
        query.addEventListener('change', update);
        return () => query.removeEventListener('change', update);
    }, []);
    useEffect(() => {
        if (!mobile || !open)
            return;
        const app = nav.current?.closest('.iso33063-page');
        const background: Element[] = [];
        let current: Element | null = boundary.current;
        while (current?.parentElement) {
            for (const sibling of current.parentElement.children) {
                if (sibling !== current && !sibling.hasAttribute('inert')) {
                    sibling.setAttribute('inert', '');
                    background.push(sibling);
                }
            }
            if (current.parentElement === document.body) break;
            current = current.parentElement;
        }
        const releaseScrollLock = acquireBodyScrollLock();
        app?.classList.add('nav-open');
        nav.current?.querySelector<HTMLAnchorElement>('a')?.focus();
        return () => {
            app?.classList.remove('nav-open');
            background.forEach(element => element.removeAttribute('inert'));
            releaseScrollLock();
        };
    }, [mobile, open]);
    /** Dismiss the drawer, optionally returning keyboard focus to its floating toggle. */
    function close(restoreFocus = true) {
        if (restoreFocus)
            button.current?.focus();
        setOpen(false);
    }
    useEffect(() => {
        if (!mobile || !open)
            return;
        /** Cycle through the drawer links and floating close button in either direction. */
        const keydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                close();
                return;
            }
            if (event.key !== 'Tab')
                return;
            const items: HTMLElement[] = [...(nav.current?.querySelectorAll<HTMLAnchorElement>('a[href]') ?? []), ...(button.current ? [button.current] : [])];
            const index = items.indexOf(document.activeElement as HTMLElement);
            const next = index < 0 ? 0 : (index + (event.shiftKey ? -1 : 1) + items.length) % items.length;
            event.preventDefault();
            items[next]?.focus();
        };
        document.addEventListener('keydown', keydown);
        return () => document.removeEventListener('keydown', keydown);
    }, [mobile, open]);
    useEffect(() => {
        const headings = TOC_ITEMS.map(i => document.getElementById(i.href.slice(1))).filter((h): h is HTMLElement => !!h);
        let frame = 0;
        /** Recompute from document geometry so upward or fast scrolling cannot retain stale headings. */
        function update() {
            frame = 0;
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
                setActive(TOC_ITEMS.at(-1)!.href);
                return;
            }
            let current = '';
            for (const h of headings) {
                if (h.getBoundingClientRect().top <= (Number.parseFloat(getComputedStyle(h).scrollMarginTop) || 80) + 2)
                    current = '#' + h.id;
            }
            setActive(current);
        }
        /** Coalesce independent scroll/resize/observer notifications. */
        const schedule = () => { if (!frame)
            frame = requestAnimationFrame(update); };
        /** Honor only fragments that identify a registered chapter. */
        const fragment = () => { try {
            return decodeURIComponent(location.hash);
        }
        catch {
            return '';
        } };
        const hash = () => { const href = fragment(); if (TOC_ITEMS.some(i => i.href === href))
            setActive(href); };
        const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(schedule, { rootMargin: '-20% 0px -70% 0px' });
        headings.forEach(h => observer?.observe(h));
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        window.addEventListener('hashchange', hash);
        if (TOC_ITEMS.some(i => i.href === fragment()))
            hash();
        else
            schedule();
        return () => {
            observer?.disconnect();
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            window.removeEventListener('hashchange', hash);
        };
    }, []);
    useEffect(() => {
        const sidebar = nav.current;
        const link = sidebar?.querySelector<HTMLAnchorElement>('a[aria-current="location"]');
        if (!sidebar || !link) return;
        const entry = link.getBoundingClientRect();
        const bounds = sidebar.getBoundingClientRect();
        if (entry.top < bounds.top + 40 || entry.bottom > bounds.bottom - 40) {
            sidebar.scrollTop += entry.top - bounds.top - bounds.height / 3;
        }
    }, [active]);
    return <div ref={boundary} role={mobile && open ? 'dialog' : undefined} aria-modal={mobile && open ? true : undefined} aria-label={mobile && open ? '目次' : undefined}>
      <aside id="sidebar" className={open?'open':undefined} aria-label="目次" ref={nav} inert={mobile&&!open}>
        <div className="brand">ISO/IEC FDIS 33063</div><ul>{TOC_ITEMS.map(item=><li key={item.href}><a href={item.href} data-target={item.target} className={active===item.href?'active':undefined} aria-current={active===item.href?'location':undefined} onClick={event=>{if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;close(mobile&&open);}}>{item.text}</a></li>)}</ul>
      </aside>
      <div className="scrim" onClick={()=>close()}/>
      <button id="navtoggle" type="button" ref={button} aria-label="メニュー" aria-expanded={open} aria-controls="sidebar" onClick={()=>setOpen(v=>!v)}>☰</button>
    </div>;
}
