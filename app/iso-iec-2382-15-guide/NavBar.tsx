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
    const button = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const query = window.matchMedia('(max-width: 960px)');
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
        const app = nav.current?.closest('.iso2382-page');
        const main = app?.querySelector('.main');
        const inert = main?.hasAttribute('inert');
        const releaseScrollLock = acquireBodyScrollLock();
        app?.classList.add('nav-open');
        main?.setAttribute('inert', '');
        nav.current?.querySelector<HTMLAnchorElement>('a')?.focus();
        return () => {
            app?.classList.remove('nav-open');
            if (!inert)
                main?.removeAttribute('inert');
            releaseScrollLock();
            button.current?.focus();
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
        /** Cycle through the drawer links and its close button in either direction. */
        const keydown = (event: KeyboardEvent) => {
            if (document.getElementById('global-nav-panel')) return;
            if (event.key === 'Escape') {
                close();
                return;
            }
            if (event.key !== 'Tab')
                return;
            const items = [...(nav.current?.querySelectorAll<HTMLElement>('a[href], button') ?? [])];
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
    return <>
    <aside className={"sidebar" + (open ? " open" : "")} id="sidebar" aria-label="目次" role={mobile && open ? 'dialog' : undefined} ref={nav} inert={mobile && !open}>
      <div className="sidebar-title">ISO/IEC 2382-15:1999</div>
      <nav><ul className="nav-list">{"\n                    "}<li className="nav-h2">{"\n                        "}<a href="#sec-1" data-target="sec-1" className={active === '#sec-1' ? 'active' : undefined} aria-current={active === '#sec-1' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"第1章 この規格を一言でいうと"}</a>{"\n                        "}<ul>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-2" data-target="sec-2" className={active === '#sec-2' ? 'active' : undefined} aria-current={active === '#sec-2' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"1-1. なぜ最初に「何の規格か」を確認するのか"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-3" data-target="sec-3" className={active === '#sec-3' ? 'active' : undefined} aria-current={active === '#sec-3' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"1-2. 結論"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-4" data-target="sec-4" className={active === '#sec-4' ? 'active' : undefined} aria-current={active === '#sec-4' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"1-3. たとえ話：国際会議の通訳用語集"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-5" data-target="sec-5" className={active === '#sec-5' ? 'active' : undefined} aria-current={active === '#sec-5' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"1-4. 規格の種類を整理する図"}</a>{"\n                            "}</li>{"\n                        "}</ul>{"\n                    "}</li>{"\n                    "}<li className="nav-h2">{"\n                        "}<a href="#sec-6" data-target="sec-6" className={active === '#sec-6' ? 'active' : undefined} aria-current={active === '#sec-6' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"第2章 ISO/IEC 2382 シリーズの中での位置づけ"}</a>{"\n                        "}<ul>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-7" data-target="sec-7" className={active === '#sec-7' ? 'active' : undefined} aria-current={active === '#sec-7' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"2-1. なぜシリーズ構造を知る必要があるのか"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-8" data-target="sec-8" className={active === '#sec-8' ? 'active' : undefined} aria-current={active === '#sec-8' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"2-2. たとえ話：百科事典の巻"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-9" data-target="sec-9" className={active === '#sec-9' ? 'active' : undefined} aria-current={active === '#sec-9' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"2-3. 主な部の例"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-10" data-target="sec-10" className={active === '#sec-10' ? 'active' : undefined} aria-current={active === '#sec-10' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"2-4. 2015年の統合版との関係"}</a>{"\n                            "}</li>{"\n                        "}</ul>{"\n                    "}</li>{"\n                    "}<li className="nav-h2">{"\n                        "}<a href="#sec-11" data-target="sec-11" className={active === '#sec-11' ? 'active' : undefined} aria-current={active === '#sec-11' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"第3章 ライフサイクルと現在のステータス（2026年10月11日時点）"}</a>{"\n                        "}<ul>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-12" data-target="sec-12" className={active === '#sec-12' ? 'active' : undefined} aria-current={active === '#sec-12' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"3-1. なぜ「現行かどうか」を確認するのか"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-13" data-target="sec-13" className={active === '#sec-13' ? 'active' : undefined} aria-current={active === '#sec-13' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"3-2. 確認できた事実（ISO 公式ページより）"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-14" data-target="sec-14" className={active === '#sec-14' ? 'active' : undefined} aria-current={active === '#sec-14' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"3-3. 読み方の注意：情報源によって表示が違う"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-15" data-target="sec-15" className={active === '#sec-15' ? 'active' : undefined} aria-current={active === '#sec-15' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"3-4. ステージの流れ"}</a>{"\n                            "}</li>{"\n                        "}</ul>{"\n                    "}</li>{"\n                    "}<li className="nav-h2">{"\n                        "}<a href="#sec-16" data-target="sec-16" className={active === '#sec-16' ? 'active' : undefined} aria-current={active === '#sec-16' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"第4章 規格が扱う概念の地図"}</a>{"\n                        "}<ul>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-17" data-target="sec-17" className={active === '#sec-17' ? 'active' : undefined} aria-current={active === '#sec-17' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"4-1. なぜ地図から始めるのか"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-18" data-target="sec-18" className={active === '#sec-18' ? 'active' : undefined} aria-current={active === '#sec-18' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"4-2. 節構成（確認できた範囲）"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-19" data-target="sec-19" className={active === '#sec-19' ? 'active' : undefined} aria-current={active === '#sec-19' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"4-3. たとえ話：言語を「料理」にたとえる"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-20" data-target="sec-20" className={active === '#sec-20' ? 'active' : undefined} aria-current={active === '#sec-20' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"4-4. 概念の地図"}</a>{"\n                            "}</li>{"\n                        "}</ul>{"\n                    "}</li>{"\n                    "}<li className="nav-h2">{"\n                        "}<a href="#sec-21" data-target="sec-21" className={active === '#sec-21' ? 'active' : undefined} aria-current={active === '#sec-21' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"第5章 ステップ別解説：ソースコードが動くまで"}</a>{"\n                        "}<ul>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-22" data-target="sec-22" className={active === '#sec-22' ? 'active' : undefined} aria-current={active === '#sec-22' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"STEP 1：字句トークン（Lexical tokens）"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-23" data-target="sec-23" className={active === '#sec-23' ? 'active' : undefined} aria-current={active === '#sec-23' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"STEP 2：データオブジェクトとデータ型（Data objects / Data\n                                    types）"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-24" data-target="sec-24" className={active === '#sec-24' ? 'active' : undefined} aria-current={active === '#sec-24' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"STEP 3：文と式（Statements and expressions）"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-25" data-target="sec-25" className={active === '#sec-25' ? 'active' : undefined} aria-current={active === '#sec-25' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"STEP 4：プログラム部品（Program parts）"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-26" data-target="sec-26" className={active === '#sec-26' ? 'active' : undefined} aria-current={active === '#sec-26' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"STEP 5：タスクと実行（Tasks / Execution）"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-27" data-target="sec-27" className={active === '#sec-27' ? 'active' : undefined} aria-current={active === '#sec-27' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"STEP 6：オブジェクト指向プログラミング（Object-oriented\n                                    programming）"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-28" data-target="sec-28" className={active === '#sec-28' ? 'active' : undefined} aria-current={active === '#sec-28' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"STEP 7：言語の機能と特性（Features and characteristics）"}</a>{"\n                            "}</li>{"\n                        "}</ul>{"\n                    "}</li>{"\n                    "}<li className="nav-h2">{"\n                        "}<a href="#sec-29" data-target="sec-29" className={active === '#sec-29' ? 'active' : undefined} aria-current={active === '#sec-29' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"第6章 1999年の語彙と2026年の現場のギャップ"}</a>{"\n                        "}<ul>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-30" data-target="sec-30" className={active === '#sec-30' ? 'active' : undefined} aria-current={active === '#sec-30' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"6-1. なぜギャップを知るのか"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-31" data-target="sec-31" className={active === '#sec-31' ? 'active' : undefined} aria-current={active === '#sec-31' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"6-2. 土台として今も使える概念と、後から重要になった概念"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-32" data-target="sec-32" className={active === '#sec-32' ? 'active' : undefined} aria-current={active === '#sec-32' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"6-3. 2026年10月時点の主な動き（確認できたもの）"}</a>{"\n                            "}</li>{"\n                        "}</ul>{"\n                    "}</li>{"\n                    "}<li className="nav-h2">{"\n                        "}<a href="#sec-33" data-target="sec-33" className={active === '#sec-33' ? 'active' : undefined} aria-current={active === '#sec-33' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"第7章 実務での使いどころ（エンジニア・QA 向け）"}</a>{"\n                        "}<ul>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-34" data-target="sec-34" className={active === '#sec-34' ? 'active' : undefined} aria-current={active === '#sec-34' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"7-1. なぜ用語をそろえるのか"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-35" data-target="sec-35" className={active === '#sec-35' ? 'active' : undefined} aria-current={active === '#sec-35' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"7-2. 活用の流れ"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-36" data-target="sec-36" className={active === '#sec-36' ? 'active' : undefined} aria-current={active === '#sec-36' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"7-3. チェックリスト"}</a>{"\n                            "}</li>{"\n                        "}</ul>{"\n                    "}</li>{"\n                    "}<li className="nav-h2">{"\n                        "}<a href="#sec-37" data-target="sec-37" className={active === '#sec-37' ? 'active' : undefined} aria-current={active === '#sec-37' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"第8章 理解度チェック"}</a>{"\n                    "}</li>{"\n                    "}<li className="nav-h2">{"\n                        "}<a href="#sec-38" data-target="sec-38" className={active === '#sec-38' ? 'active' : undefined} aria-current={active === '#sec-38' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"第9章 根拠となるソース一覧（URL）"}</a>{"\n                        "}<ul>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-39" data-target="sec-39" className={active === '#sec-39' ? 'active' : undefined} aria-current={active === '#sec-39' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"9-1. 規格そのものの情報（一次情報）"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-40" data-target="sec-40" className={active === '#sec-40' ? 'active' : undefined} aria-current={active === '#sec-40' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"9-2. 目次の再構成に使った第三者情報（機械翻訳のため要確認）"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-41" data-target="sec-41" className={active === '#sec-41' ? 'active' : undefined} aria-current={active === '#sec-41' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"9-3. 著名な開発者・コミュニティの一次発信"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-42" data-target="sec-42" className={active === '#sec-42' ? 'active' : undefined} aria-current={active === '#sec-42' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"9-3-補. 報道（C++26）"}</a>{"\n                            "}</li>{"\n                            "}<li className="nav-h3">{"\n                                "}<a href="#sec-43" data-target="sec-43" className={active === '#sec-43' ? 'active' : undefined} aria-current={active === '#sec-43' ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return; close(mobile && open); }}>{"9-4. このガイドの限界"}</a>{"\n                            "}</li>{"\n                        "}</ul>{"\n                    "}</li>{"\n                "}</ul></nav>
      {mobile && open && <button className="sidebar-close" type="button" onClick={() => close()}>目次を閉じる</button>}
    </aside>
    <div className="scrim" onClick={() => close()}/>
    <button id="sidebarToggle" className="sidebar-toggle" type="button" ref={button} style={mobile && open ? { display: 'none' } : undefined} aria-label={open ? '目次を閉じる' : '目次を開く'} aria-expanded={open} aria-controls="sidebar" onClick={() => setOpen(value => !value)}>
      ☰ 目次
    </button>
  </>;
}
