'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
const TOC_IDS: readonly string[] = ["step-03分で分かる結論","step-1この規格を一言でいうと","タイプ3とは何か","step-2なぜこの規格が作られたのか","例え話地図のない巨大な商店街","序文の要点言い換え","step-3規格ファミリー全体での位置づけ","3部構成","家系図","現在の状況2026年10月13日時点で確認できた範囲","関連isoiec-guide-71","step-4最初に押さえる3つの用語","3つの定義言い換え","ここが重要standardの範囲が広い","step-5中心となる7つの分類","51-分類の考え方広さで並べる","52-7分類の一覧表","53-各分類の中は2つの区分に分かれる","54-並び順のルール","55-表の読み方","step-6収録されている規格の実例","61-高レベル411","62-ハードウェア機器系421","63-ソフトウェアサービス系431","64-この実例から分かること","step-7作成の経緯20072009年","作業部会の移り変わり","step-82009年の一覧と現在の姿","81-確認できた変化","82-この表から言えること","step-9実務での使い方qa開発向け","91-使い方の流れ","92-分類ごとのテスト対象の例本ガイドの提案","93-自社版インベントリの雛形","step-10よくある誤解","step-11理解度チェック","step-12根拠となるソースurl","121-一次情報規格団体標準化機関","122-規格本文無料サンプルに基づく情報","123-実務者向け二次情報","124-開発者向けの学習リソース国際的に知られたもの","125-この調査の限界"];
const TOC_GROUPS = [{"id":"step-03分で分かる結論","label":"Step 0：3分で分かる結論","children":[]},{"id":"step-1この規格を一言でいうと","label":"Step 1：この規格を一言でいうと","children":[{"id":"タイプ3とは何か","label":"「タイプ3」とは何か","sub":true}]},{"id":"step-2なぜこの規格が作られたのか","label":"Step 2：なぜこの規格が作られたのか","children":[{"id":"例え話地図のない巨大な商店街","label":"例え話：地図のない巨大な商店街","sub":true},{"id":"序文の要点言い換え","label":"序文の要点（言い換え）","sub":true}]},{"id":"step-3規格ファミリー全体での位置づけ","label":"Step 3：規格ファミリー全体での位置づけ","children":[{"id":"3部構成","label":"3部構成","sub":true},{"id":"家系図","label":"家系図","sub":true},{"id":"現在の状況2026年10月13日時点で確認できた範囲","label":"現在の状況（2026年10月13日時点で確認できた範囲）","sub":true},{"id":"関連isoiec-guide-71","label":"関連：ISO/IEC Guide 71","sub":true}]},{"id":"step-4最初に押さえる3つの用語","label":"Step 4：最初に押さえる3つの用語","children":[{"id":"3つの定義言い換え","label":"3つの定義（言い換え）","sub":true},{"id":"ここが重要standardの範囲が広い","label":"ここが重要：「standard」の範囲が広い","sub":true}]},{"id":"step-5中心となる7つの分類","label":"Step 5：中心となる「7つの分類」","children":[{"id":"51-分類の考え方広さで並べる","label":"5.1 分類の考え方：「広さ」で並べる","sub":true},{"id":"52-7分類の一覧表","label":"5.2 7分類の一覧表","sub":true},{"id":"53-各分類の中は2つの区分に分かれる","label":"5.3 各分類の中は「2つの区分」に分かれる","sub":true},{"id":"54-並び順のルール","label":"5.4 並び順のルール","sub":true},{"id":"55-表の読み方","label":"5.5 表の読み方","sub":true}]},{"id":"step-6収録されている規格の実例","label":"Step 6：収録されている規格の実例","children":[{"id":"61-高レベル411","label":"6.1 高レベル（4.1.1）","sub":true},{"id":"62-ハードウェア機器系421","label":"6.2 ハードウェア・機器系（4.2.1）","sub":true},{"id":"63-ソフトウェアサービス系431","label":"6.3 ソフトウェア・サービス系（4.3.1）","sub":true},{"id":"64-この実例から分かること","label":"6.4 この実例から分かること","sub":true}]},{"id":"step-7作成の経緯20072009年","label":"Step 7：作成の経緯（2007〜2009年）","children":[{"id":"作業部会の移り変わり","label":"作業部会の移り変わり","sub":true}]},{"id":"step-82009年の一覧と現在の姿","label":"Step 8：2009年の一覧と現在の姿","children":[{"id":"81-確認できた変化","label":"8.1 確認できた変化","sub":true},{"id":"82-この表から言えること","label":"8.2 この表から言えること","sub":true}]},{"id":"step-9実務での使い方qa開発向け","label":"Step 9：実務での使い方（QA・開発向け）","children":[{"id":"91-使い方の流れ","label":"9.1 使い方の流れ","sub":true},{"id":"92-分類ごとのテスト対象の例本ガイドの提案","label":"9.2 分類ごとの、テスト対象の例（本ガイドの提案）","sub":true},{"id":"93-自社版インベントリの雛形","label":"9.3 自社版インベントリの雛形","sub":true}]},{"id":"step-10よくある誤解","label":"Step 10：よくある誤解","children":[]},{"id":"step-11理解度チェック","label":"Step 11：理解度チェック","children":[]},{"id":"step-12根拠となるソースurl","label":"Step 12：根拠となるソースURL","children":[{"id":"121-一次情報規格団体標準化機関","label":"12.1 一次情報（規格団体・標準化機関）","sub":true},{"id":"122-規格本文無料サンプルに基づく情報","label":"12.2 規格本文（無料サンプル）に基づく情報","sub":true},{"id":"123-実務者向け二次情報","label":"12.3 実務者向け・二次情報","sub":true},{"id":"124-開発者向けの学習リソース国際的に知られたもの","label":"12.4 開発者向けの学習リソース（国際的に知られたもの）","sub":true},{"id":"125-この調査の限界","label":"12.5 この調査の限界","sub":true}]}];
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
            className={[item.sub ? 'sub' : '', active === item.id ? 'active' : ''].filter(Boolean).join(' ') || undefined}
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
<button className="menu-btn" id="menuBtn" type="button" ref={toggleRef} aria-label={isOpen?'目次を閉じる':'目次を開く'} aria-controls="sidebar" aria-expanded={isOpen} onClick={()=>setIsOpen(open=>!open)}>☰ 目次</button>
<aside aria-label="目次" className={isOpen?'sidebar open':'sidebar'} id="sidebar" ref={sidebarRef}>
<div className="side-title">ISO/IEC TR 29138-2:2009</div>
<nav aria-label="目次">
<ul>{TOC_GROUPS.map(item=><li key={item.id}>{link(item)}{item.children.length > 0 && <ul>{item.children.map(child => <li key={child.id}>{link(child)}</li>)}</ul>}</li>)}</ul>
</nav></aside></>;
}
