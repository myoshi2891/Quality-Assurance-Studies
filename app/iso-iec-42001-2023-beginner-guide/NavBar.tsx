'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC_ITEMS } from './toc';

/** Render a responsive TOC with measured active headings, keyboard dismissal and mobile background isolation. */
export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [active, setActive] = useState(TOC_ITEMS[0]?.target || '');
    const toggle = useRef<HTMLButtonElement>(null);
    const sidebar = useRef<HTMLElement>(null);

    useEffect(() => {
        const query = window.matchMedia('(max-width: 900px)');
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
        const main = document.querySelector<HTMLElement>('.iso42001-page main.main');
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

    return <><button type="button" className="toggle" id="toggle" ref={toggle} aria-label={open ? "目次を閉じる" : "目次を開く"} aria-expanded={open} aria-controls="sidebar" onClick={()=>setOpen(value=>!value)}>{"目次"}</button><nav className={open ? "sidebar open" : "sidebar"} id="sidebar" ref={sidebar} aria-label="目次" inert={mobile && !open}><div className="brand">{"ISO/IEC 42001:2023 ガイド"}</div><ul><li><a href="#0-このガイドの読み方と情報源の方針" data-target="0-このガイドの読み方と情報源の方針" onClick={navigate} className={active === "0-このガイドの読み方と情報源の方針" ? "active" : undefined} aria-current={active === "0-このガイドの読み方と情報源の方針" ? "location" : undefined}>{"0.\nこのガイドの読み方と情報源の方針"}</a></li><li><a href="#1-一言でいうと何の規格か" data-target="1-一言でいうと何の規格か" onClick={navigate} className={active === "1-一言でいうと何の規格か" ? "active" : undefined} aria-current={active === "1-一言でいうと何の規格か" ? "location" : undefined}>{"1. 一言でいうと何の規格か"}</a></li><li><a href="#2-なぜ今この規格が必要なのか" data-target="2-なぜ今この規格が必要なのか" onClick={navigate} className={active === "2-なぜ今この規格が必要なのか" ? "active" : undefined} aria-current={active === "2-なぜ今この規格が必要なのか" ? "location" : undefined}>{"2. なぜ今この規格が必要なのか"}</a></li><li><a href="#3-規格の基本情報" data-target="3-規格の基本情報" onClick={navigate} className={active === "3-規格の基本情報" ? "active" : undefined} aria-current={active === "3-規格の基本情報" ? "location" : undefined}>{"3. 規格の基本情報"}</a></li><li><a href="#4-aimsとは何か" data-target="4-aimsとは何か" onClick={navigate} className={active === "4-aimsとは何か" ? "active" : undefined} aria-current={active === "4-aimsとは何か" ? "location" : undefined}>{"4. AIMSとは何か"}</a></li><li><a href="#5-規格の全体構造とpdcaサイクル" data-target="5-規格の全体構造とpdcaサイクル" onClick={navigate} className={active === "5-規格の全体構造とpdcaサイクル" ? "active" : undefined} aria-current={active === "5-規格の全体構造とpdcaサイクル" ? "location" : undefined}>{"5.\n規格の全体構造とPDCAサイクル"}</a></li><li><a href="#6-本文箇条410をステップバイステップで読む" data-target="6-本文箇条410をステップバイステップで読む" onClick={navigate} className={active === "6-本文箇条410をステップバイステップで読む" ? "active" : undefined} aria-current={active === "6-本文箇条410をステップバイステップで読む" ? "location" : undefined}>{"6.\n本文（箇条4〜10）をステップバイステップで読む"}</a></li><li><a href="#7-附属書adの役割" data-target="7-附属書adの役割" onClick={navigate} className={active === "7-附属書adの役割" ? "active" : undefined} aria-current={active === "7-附属書adの役割" ? "location" : undefined}>{"7. 附属書A〜Dの役割"}</a></li><li><a href="#8-附属書a38個の管理策を一覧で理解する" data-target="8-附属書a38個の管理策を一覧で理解する" onClick={navigate} className={active === "8-附属書a38個の管理策を一覧で理解する" ? "active" : undefined} aria-current={active === "8-附属書a38個の管理策を一覧で理解する" ? "location" : undefined}>{"8.\n附属書A：38個の管理策を一覧で理解する"}</a></li><li><a href="#9-リスクアセスメントとaiシステム影響評価の違い" data-target="9-リスクアセスメントとaiシステム影響評価の違い" onClick={navigate} className={active === "9-リスクアセスメントとaiシステム影響評価の違い" ? "active" : undefined} aria-current={active === "9-リスクアセスメントとaiシステム影響評価の違い" ? "location" : undefined}>{"9.\nリスクアセスメントとAIシステム影響評価の違い"}</a></li><li><a href="#10-導入ロードマップ12ステップとケーススタディ" data-target="10-導入ロードマップ12ステップとケーススタディ" onClick={navigate} className={active === "10-導入ロードマップ12ステップとケーススタディ" ? "active" : undefined} aria-current={active === "10-導入ロードマップ12ステップとケーススタディ" ? "location" : undefined}>{"10.\n導入ロードマップ（12ステップ）とケーススタディ"}</a></li><li><a href="#11-認証第三者審査の仕組み" data-target="11-認証第三者審査の仕組み" onClick={navigate} className={active === "11-認証第三者審査の仕組み" ? "active" : undefined} aria-current={active === "11-認証第三者審査の仕組み" ? "location" : undefined}>{"11. 認証（第三者審査）の仕組み"}</a></li><li><a href="#12-関連規格との関係" data-target="12-関連規格との関係" onClick={navigate} className={active === "12-関連規格との関係" ? "active" : undefined} aria-current={active === "12-関連規格との関係" ? "location" : undefined}>{"12. 関連規格との関係"}</a></li><li><a href="#13-eu-ai-act-との関係誤解しやすいポイント" data-target="13-eu-ai-act-との関係誤解しやすいポイント" onClick={navigate} className={active === "13-eu-ai-act-との関係誤解しやすいポイント" ? "active" : undefined} aria-current={active === "13-eu-ai-act-との関係誤解しやすいポイント" ? "location" : undefined}>{"13. EU AI Act\nとの関係（誤解しやすいポイント）"}</a></li><li><a href="#14-国際的な企業の取得事例" data-target="14-国際的な企業の取得事例" onClick={navigate} className={active === "14-国際的な企業の取得事例" ? "active" : undefined} aria-current={active === "14-国際的な企業の取得事例" ? "location" : undefined}>{"14. 国際的な企業の取得事例"}</a></li><li><a href="#15-エンジニアqaの視点での活用ポイント" data-target="15-エンジニアqaの視点での活用ポイント" onClick={navigate} className={active === "15-エンジニアqaの視点での活用ポイント" ? "active" : undefined} aria-current={active === "15-エンジニアqaの視点での活用ポイント" ? "location" : undefined}>{"15.\nエンジニア・QAの視点での活用ポイント"}</a></li><li><a href="#16-よくある誤解-faq" data-target="16-よくある誤解-faq" onClick={navigate} className={active === "16-よくある誤解-faq" ? "active" : undefined} aria-current={active === "16-よくある誤解-faq" ? "location" : undefined}>{"16. よくある誤解 FAQ"}</a></li><li><a href="#17-実務チェックリスト" data-target="17-実務チェックリスト" onClick={navigate} className={active === "17-実務チェックリスト" ? "active" : undefined} aria-current={active === "17-実務チェックリスト" ? "location" : undefined}>{"17. 実務チェックリスト"}</a></li><li><a href="#18-出典url一覧" data-target="18-出典url一覧" onClick={navigate} className={active === "18-出典url一覧" ? "active" : undefined} aria-current={active === "18-出典url一覧" ? "location" : undefined}>{"18. 出典URL一覧"}</a></li><li><a href="#19-本ガイドの限界と情報の確認方法" data-target="19-本ガイドの限界と情報の確認方法" onClick={navigate} className={active === "19-本ガイドの限界と情報の確認方法" ? "active" : undefined} aria-current={active === "19-本ガイドの限界と情報の確認方法" ? "location" : undefined}>{"19.\n本ガイドの限界と情報の確認方法"}</a></li></ul></nav></>;
}
