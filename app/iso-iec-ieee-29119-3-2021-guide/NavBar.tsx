'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
const TOC_IDS: readonly string[] = ["step-0-まず全体像をつかむ30秒サマリー","step-1-規格の基本情報","step-2-29119-シリーズ内での位置づけ","step-3-規格の構成章附属書を読む地図","step-4-適合conformanceの考え方","step-5-すべての文書に共通する情報項目","step-6-組織レベルの文書clause-6","step-7-テストマネジメントの文書clause-7","step-8-動的テストの文書clause-8","step-9-2021年版の最大の変更点テストモデル","step-10-文書どうしのつながりトレーサビリティ","step-11-アジャイルdevops-での使い方テーラリング","step-12-実践ミニ例ログイン機能","step-13-よくある誤解と批判的視点","step-14-学習ロードマップと理解度チェック","参考ソース一覧url"];
const TOC_GROUPS = [{"id":"step-0-まず全体像をつかむ30秒サマリー","label":"Step 0: まず全体像をつかむ（30秒サマリー）"},{"id":"step-1-規格の基本情報","label":"Step 1: 規格の基本情報"},{"id":"step-2-29119-シリーズ内での位置づけ","label":"Step 2: 29119 シリーズ内での位置づけ"},{"id":"step-3-規格の構成章附属書を読む地図","label":"Step 3: 規格の構成（章・附属書）を読む地図"},{"id":"step-4-適合conformanceの考え方","label":"Step 4: 適合（Conformance）の考え方"},{"id":"step-5-すべての文書に共通する情報項目","label":"Step 5: すべての文書に共通する情報項目"},{"id":"step-6-組織レベルの文書clause-6","label":"Step 6: 組織レベルの文書（Clause 6）"},{"id":"step-7-テストマネジメントの文書clause-7","label":"Step 7: テストマネジメントの文書（Clause 7）"},{"id":"step-8-動的テストの文書clause-8","label":"Step 8: 動的テストの文書（Clause 8）"},{"id":"step-9-2021年版の最大の変更点テストモデル","label":"Step 9: 2021年版の最大の変更点「テストモデル」"},{"id":"step-10-文書どうしのつながりトレーサビリティ","label":"Step 10: 文書どうしのつながり（トレーサビリティ）"},{"id":"step-11-アジャイルdevops-での使い方テーラリング","label":"Step 11: アジャイル／DevOps での使い方（テーラリング）"},{"id":"step-12-実践ミニ例ログイン機能","label":"Step 12: 実践ミニ例（ログイン機能）"},{"id":"step-13-よくある誤解と批判的視点","label":"Step 13: よくある誤解と批判的視点"},{"id":"step-14-学習ロードマップと理解度チェック","label":"Step 14: 学習ロードマップと理解度チェック"},{"id":"参考ソース一覧url","label":"参考ソース一覧（URL）"}];
type TocLink = { readonly id: string; readonly label: string; readonly sub?: boolean };
// 読み取り帯の下端。画面高さに対する割合
const BAND_BOTTOM_RATIO = 0.25;
// スクロール位置の丸めで生じる端数を吸収する
const LANDING_TOLERANCE_PX = 2;

// 帯の下端より上にある最後の見出しが、いま読んでいる節。最初の見出しより上では空文字を返す
const headingAboveBandBottom = (): string => {
    const bandBottom = window.innerHeight * BAND_BOTTOM_RATIO;
    let current = '';
    for (const id of TOC_IDS) {
        const heading = document.getElementById(id);
        if (heading && heading.getBoundingClientRect().top < bandBottom) current = id;
    }
    return current;
};

// クリック先の見出しが読み取り位置まで来たか。読み飛ばして上へ残った場合や、手前で止まった場合は到達していない
const reachedDestination = (heading: HTMLElement): boolean => {
    const { top } = heading.getBoundingClientRect();
    if (top < 0) return false;
    // 背の低い画面では scroll-margin-top の着地位置が帯より下になるため、着地位置まで許容する
    const landing = (Number.parseFloat(getComputedStyle(heading).scrollMarginTop) || 0) + LANDING_TOLERANCE_PX;
    if (top <= Math.max(window.innerHeight * BAND_BOTTOM_RATIO, landing)) return true;
    // 終盤の節が短いと見出しは帯まで上がれないため、ページ末尾で見えていれば到達とみなす
    const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;
    return atPageEnd && top < window.innerHeight;
};

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('');
    const [isMobile, setIsMobile] = useState(false);
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
        const heading = document.getElementById(id);
        // ユーザー操作などで手前に止まった場合は、実際に表示している節を示す
        setActive(!heading || reachedDestination(heading) ? id : headingAboveBandBottom());
    }, []);
    // scrollend 非対応ブラウザやスクロールが発生しない場合に備え、最後のスクロールから一定時間で完了とみなす
    const scheduleSettle = useCallback(() => {
        clearTimeout(settleTimerRef.current);
        settleTimerRef.current = setTimeout(settle, 150);
    }, [settle]);

    useEffect(() => {
        // IntersectionObserver は見出しが帯を 1 フレームで飛び越えると通知しないため、スクロールごとに位置を実測する
        const onScroll = () => {
            if (pendingRef.current) {
                scheduleSettle();
                return;
            }
            setActive(headingAboveBandBottom());
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        window.addEventListener('scrollend', settle);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            window.removeEventListener('scrollend', settle);
            clearTimeout(settleTimerRef.current);
        };
    }, [settle, scheduleSettle]);

    // CSS の 900px 境界と対応。visibility は閉じる動きの完了まで遅れるため、閉じた瞬間からフォーカスを外す
    useEffect(() => {
        const query = window.matchMedia('(max-width: 900px)');
        const update = () => {
            setIsMobile(query.matches);
            // 広い画面でも open が残ると、モバイル幅へ戻ったときに開いたまま表示される
            if (!query.matches) setIsOpen(false);
        };
        update();
        query.addEventListener('change', update);
        return () => query.removeEventListener('change', update);
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
            className={['', active === item.id ? 'active' : ''].filter(Boolean).join(' ') || undefined}
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
<button className="toggle" id="navToggle" type="button" ref={toggleRef} aria-label={isOpen?'目次を閉じる':'目次を開く'} aria-controls="sidebar" aria-expanded={isOpen} onClick={()=>setIsOpen(open=>!open)}>☰ 目次</button>
<nav aria-label="目次" className={isOpen?'sidebar open':'sidebar'} id="sidebar" inert={isMobile && !isOpen} ref={sidebarRef}>
<div className="brand">ISO/IEC/IEEE 29119-3:2021 GUIDE</div>
<ul>{TOC_GROUPS.map(item=><li key={item.id}>{link(item)}</li>)}</ul>
</nav></>;
}
