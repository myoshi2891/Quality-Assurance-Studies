'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
const TOC_IDS: readonly string[] = ["0-このガイドの読み方と確認できたことできなかったこと","1-30秒でわかる-isoiec-301302016","2-step-1まずテストツールを整理しよう","3-step-2この規格の立ち位置を理解する","4-step-3規格の目的と守備範囲","5-step-43本柱を初学者向けにかみ砕く","6-step-529119-2-のテストプロセスと重ねて見る","7-step-6現場のツール分類と見比べる","8-step-7実務での使い方-解説者による提案","9-step-8よくある誤解と注意点","10-規格のライフサイクルiso公式より","11-理解度チェック","12-参考ソースurl根拠一覧"];

// URL ハッシュ由来の任意の文字列を includes で照合できるよう string として扱う
const TOC_GROUPS = [{"id":"0-このガイドの読み方と確認できたことできなかったこと","label":"0. このガイドの読み方と「確認できたこと／できなかったこと」"},{"id":"1-30秒でわかる-isoiec-301302016","label":"1. 30秒でわかる ISO/IEC 30130:2016"},{"id":"2-step-1まずテストツールを整理しよう","label":"2. Step 1：まず「テストツール」を整理しよう"},{"id":"3-step-2この規格の立ち位置を理解する","label":"3. Step 2：この規格の「立ち位置」を理解する"},{"id":"4-step-3規格の目的と守備範囲","label":"4. Step 3：規格の「目的」と「守備範囲」"},{"id":"5-step-43本柱を初学者向けにかみ砕く","label":"5. Step 4：3本柱を初学者向けにかみ砕く"},{"id":"6-step-529119-2-のテストプロセスと重ねて見る","label":"6. Step 5：29119-2 のテストプロセスと重ねて見る"},{"id":"7-step-6現場のツール分類と見比べる","label":"7. Step 6：現場のツール分類と見比べる"},{"id":"8-step-7実務での使い方-解説者による提案","label":"8. Step 7：実務での使い方（💡 解説者による提案）"},{"id":"9-step-8よくある誤解と注意点","label":"9. Step 8：よくある誤解と注意点"},{"id":"10-規格のライフサイクルiso公式より","label":"10. 規格のライフサイクル（ISO公式より）"},{"id":"11-理解度チェック","label":"11. 理解度チェック"},{"id":"12-参考ソースurl根拠一覧","label":"12. 参考ソースURL（根拠一覧）"}];
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
<button className="nav-toggle" id="navToggle" type="button" ref={toggleRef} aria-label={isOpen?'目次を閉じる':'目次を開く'} aria-controls="sidebar" aria-expanded={isOpen} onClick={()=>setIsOpen(open=>!open)}>☰ 目次</button>
<aside className={isOpen?'sidebar open':'sidebar'} id="sidebar" ref={sidebarRef}>
<div className="side-title">ISO/IEC 30130<small>初学者向け概要ガイド</small></div>
<nav aria-label="目次"><ul>{TOC_GROUPS.map(item=><li key={item.id}>{link(item)}</li>)}</ul></nav>
</aside></>;
}
