'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
const TOC_IDS: readonly string[] = ["step-0この規格を一言でいうと","step-1なぜ医療に専用の規格が必要なのか","step-2規格ファミリーの中での位置づけ","step-3何が誰にどこまで適用されるかスコープ","step-4先に覚える用語","step-5規格全体の構造を地図で見る","step-627002-とのつながり方4パターン","step-7第4章-general-の読みどころ安全性comply-or-explain27001併用","step-84つのテーマ別コントロール早見93hlt-8","step-9医療専用の追加コントロールhlt8個を理解する","step-10付録-annex-ad-の使い方","step-112016年版から何が変わったか","step-12導入の進め方実務フロー","step-13ソフトウェアqaエンジニアの視点","step-14関連規格との関係","step-15つまずきやすいポイント-faq","step-16理解度チェックリスト","付録a参考ソースurl一覧","付録b調査の限界と注意"];

// URL ハッシュ由来の任意の文字列を includes で照合できるよう string として扱う
const TOC_GROUPS = [{"id":"step-0この規格を一言でいうと","label":"Step 0：この規格を一言でいうと"},{"id":"step-1なぜ医療に専用の規格が必要なのか","label":"Step 1：なぜ医療に専用の規格が必要なのか"},{"id":"step-2規格ファミリーの中での位置づけ","label":"Step 2：規格ファミリーの中での位置づけ"},{"id":"step-3何が誰にどこまで適用されるかスコープ","label":"Step 3：何が・誰に・どこまで適用されるか（スコープ）"},{"id":"step-4先に覚える用語","label":"Step 4：先に覚える用語"},{"id":"step-5規格全体の構造を地図で見る","label":"Step 5：規格全体の構造を地図で見る"},{"id":"step-627002-とのつながり方4パターン","label":"Step 6：27002 とのつながり方（4パターン）"},{"id":"step-7第4章-general-の読みどころ安全性comply-or-explain27001併用","label":"Step 7：第4章 General の読みどころ（安全性・Comply or\n                            Explain・27001併用）"},{"id":"step-84つのテーマ別コントロール早見93hlt-8","label":"Step 8：4つのテーマ別コントロール早見（93＋HLT 8）"},{"id":"step-9医療専用の追加コントロールhlt8個を理解する","label":"Step 9：医療専用の追加コントロール「HLT」8個を理解する"},{"id":"step-10付録-annex-ad-の使い方","label":"Step 10：付録 Annex A〜D の使い方"},{"id":"step-112016年版から何が変わったか","label":"Step 11：2016年版から何が変わったか"},{"id":"step-12導入の進め方実務フロー","label":"Step 12：導入の進め方（実務フロー）"},{"id":"step-13ソフトウェアqaエンジニアの視点","label":"Step 13：ソフトウェア／QAエンジニアの視点"},{"id":"step-14関連規格との関係","label":"Step 14：関連規格との関係"},{"id":"step-15つまずきやすいポイント-faq","label":"Step 15：つまずきやすいポイント FAQ"},{"id":"step-16理解度チェックリスト","label":"Step 16：理解度チェックリスト"},{"id":"付録a参考ソースurl一覧","label":"付録A：参考ソースURL一覧"},{"id":"付録b調査の限界と注意","label":"付録B：調査の限界と注意"}];
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
<button className="sidebar-toggle" id="sidebarToggle" type="button" ref={toggleRef} aria-label={isOpen?'目次を閉じる':'目次を開く'} aria-controls="sidebar" aria-expanded={isOpen} onClick={()=>setIsOpen(open=>!open)}>☰ 目次</button>
<aside className={isOpen?'sidebar open':'sidebar'} id="sidebar" ref={sidebarRef}>
<div className="sb-brand"><span className="sb-badge">ISO 27799:2025</span><span className="sb-sub">初学者向けガイド</span></div>
<nav aria-label="目次"><ul className="sb-list">{TOC_GROUPS.map(item=><li key={item.id}>{link(item)}</li>)}</ul></nav>
</aside></>;
}
