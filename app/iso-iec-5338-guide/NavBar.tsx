'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
const TOC_IDS: readonly string[] = ["0-このガイドの使い方", "step-1-規格の全体像をつかむ", "step-2-なぜ作られたのか背景と位置づけ", "step-3-aiシステムはなぜ特別扱いが必要なのか", "step-4-3種類のプロセスgeneric--modified--ai-specific", "step-5-規格の構成目次を把握する", "step-6-第6章4つのプロセスグループを理解する", "step-7-ai固有の3プロセスを深掘りする", "step-8-機械学習モデル開発はどのプロセスに対応するか", "step-9-他の規格との関係", "step-10-現場への導入手順と注意点", "付録a-用語集", "付録b-理解度チェック", "付録c-参考ソース一覧2026年10月8日時点で確認"];
const TOC_GROUPS = [{"id": "0-このガイドの使い方", "label": "0. このガイドの使い方"}, {"id": "step-1-規格の全体像をつかむ", "label": "Step 1. 規格の全体像をつかむ"}, {"id": "step-2-なぜ作られたのか背景と位置づけ", "label": "Step 2. なぜ作られたのか：背景と位置づけ"}, {"id": "step-3-aiシステムはなぜ特別扱いが必要なのか", "label": "Step 3. AIシステムはなぜ「特別扱い」が必要なのか"}, {"id": "step-4-3種類のプロセスgeneric--modified--ai-specific", "label": "Step 4. 3種類のプロセス：Generic / Modified / AI-specific"}, {"id": "step-5-規格の構成目次を把握する", "label": "Step 5. 規格の構成（目次）を把握する"}, {"id": "step-6-第6章4つのプロセスグループを理解する", "label": "Step 6. 第6章：4つのプロセスグループを理解する"}, {"id": "step-7-ai固有の3プロセスを深掘りする", "label": "Step 7. AI固有の3プロセスを深掘りする"}, {"id": "step-8-機械学習モデル開発はどのプロセスに対応するか", "label": "Step 8. 機械学習モデル開発は、どのプロセスに対応するか"}, {"id": "step-9-他の規格との関係", "label": "Step 9. 他の規格との関係"}, {"id": "step-10-現場への導入手順と注意点", "label": "Step 10. 現場への導入手順と注意点"}, {"id": "付録a-用語集", "label": "付録A. 用語集"}, {"id": "付録b-理解度チェック", "label": "付録B. 理解度チェック"}, {"id": "付録c-参考ソース一覧2026年10月8日時点で確認", "label": "付録C. 参考ソース一覧（2026年10月8日時点で確認）"}];
type TocLink = { readonly id: string; readonly label: string; readonly sub?: boolean };

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('');
    const sidebarRef = useRef<HTMLElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);
    // 目次クリックで選んだ見出し。スムーススクロール中に通過する見出しで active が揺れないよう、完了まで保持する
    const pendingRef = useRef<string | null>(null);
    const settleTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const settle = useCallback(() => {
        clearTimeout(settleTimerRef.current);
        const id = pendingRef.current;
        if (!id) return;
        pendingRef.current = null;
        setActive(id);
    }, []);
    // scrollend 非対応ブラウザやスクロールが発生しない場合に備え、最後のスクロールから一定時間で完了とみなす
    const scheduleSettle = useCallback(() => {
        clearTimeout(settleTimerRef.current);
        settleTimerRef.current = setTimeout(settle, 150);
    }, [settle]);

    useEffect(() => {
        const onScroll = () => { if (pendingRef.current) scheduleSettle(); };
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('scrollend', settle);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('scrollend', settle);
            clearTimeout(settleTimerRef.current);
        };
    }, [settle, scheduleSettle]);

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(entries => {
            if (pendingRef.current) return;
            for (const entry of entries) {
                if (entry.isIntersecting) setActive(entry.target.id);
            }
        }, { rootMargin: '-15% 0px -75% 0px' });
        for (const id of TOC_IDS) {
            const heading = document.getElementById(id);
            if (heading) observer.observe(heading);
        }
        return () => observer.disconnect();
    }, []);

    // ブラウザ履歴（戻る/進む）によるハッシュ変更にも追従する。直後のスクロール中はクリック時と同様に保持する
    // 見出しハッシュ付きの直接アクセスでは hashchange が発火しないため、マウント時にも同じ判定を行う
    useEffect(() => {
        const onHashChange = () => {
            let id: string;
            try {
                id = decodeURIComponent(window.location.hash.slice(1));
            } catch (error) {
                // 不正なパーセントエンコードのハッシュは目次の見出しを指さないため対象外とする
                if (error instanceof URIError) return;
                throw error;
            }
            if (!TOC_IDS.includes(id)) return;
            pendingRef.current = id;
            setActive(id);
            scheduleSettle();
        };
        onHashChange();
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, [scheduleSettle]);

    useEffect(() => {
        if (!active) return;
        const sidebar = sidebarRef.current;
        const link = sidebar?.querySelector('a[aria-current="location"]');
        if (!sidebar || !link) return;
        const bounds = link.getBoundingClientRect();
        const viewport = sidebar.getBoundingClientRect();
        if (bounds.top < viewport.top + 60 || bounds.bottom > viewport.bottom - 20) {
            sidebar.scrollTop += bounds.top - viewport.top - viewport.height / 3;
        }
    }, [active]);

    useEffect(() => {
        if (!isOpen) return;
        const escape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener('keydown', escape);
        return () => document.removeEventListener('keydown', escape);
    }, [isOpen]);

    const link = (item: TocLink) => (
        <a href={`#${item.id}`} data-target={item.id}
            className={[active === item.id ? 'active' : ''].filter(Boolean).join(' ') || undefined}
            aria-current={active === item.id ? 'location' : undefined}
            onClick={() => {
                pendingRef.current = item.id;
                setActive(item.id);
                scheduleSettle();
                // 閉じて非表示になるサイドバー内にフォーカスを残さない（アンカーへのスクロールは妨げない）
                if (isOpen) toggleRef.current?.focus({ preventScroll: true });
                setIsOpen(false);
            }}>
            {item.label}
        </a>
    );

    return <>
<button className="toggle" id="toggle" type="button" ref={toggleRef} aria-label={isOpen?'目次を閉じる':'目次を開く'} aria-controls="sidebar" aria-expanded={isOpen} onClick={()=>setIsOpen(open=>!open)}>☰ 目次</button>
<nav aria-label="目次" className={isOpen?'sidebar open':'sidebar'} id="sidebar" ref={sidebarRef}>
<div className="brand">ISO/IEC 5338:2023</div>
<div className="brand-title">初学者向け完全ガイド</div>
<ul>{TOC_GROUPS.map(item=><li key={item.id}>{link(item)}</li>)}</ul>
</nav></>;
}
