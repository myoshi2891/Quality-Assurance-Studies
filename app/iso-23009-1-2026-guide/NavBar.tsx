'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
const TOC_IDS: readonly string[] = ["0-このガイドの前提と読み方","想定読者","表記ルール","1-規格の基本情報早見表","step-1そもそも-dash-とは何か","1-1-解決したい課題","1-2-dash-の考え方","1-3-全体像","step-2規格ファミリーisoiec-23009の中での-part-1-の位置づけ","step-3part-1-が決めている-2-つのものmpd-とセグメント","①-mpdmedia-presentation-description","②-セグメント形式","step-4mpd-の階層構造を理解する","各階層の意味","step-5セグメントの場所を示す-4-つの方法アドレッシング","5-1-オンデマンド向けの最小例学習用に簡略化","5-2-ライブ向けの最小例segmenttemplate--segmenttimeline","step-6オンデマンドstaticとライブdynamic","step-7プロファイルとは何か","step-8dash-クライアントの動き方","abr-ロジックは規格の対象外","step-9版の歴史第1版第6版","第6版に至るまでの流れmpeg-会合ベース","step-10第6版2026の主な強化点","追加で確認できた採択内容第145回会合2024年1月","コンテンツステアリングの動き概念図","step-11発行後の動きと実装エコシステム","11-1-発行後も規格は進化している","11-2-代表的な実装での扱い","step-12qa-エンジニア視点のテスト観点","12-1-mpd-そのものの検証","12-2-再生abr-の検証","12-3-ライブ特有の検証","12-4-第6版の新機能に関する検証導入する場合","用語集","根拠となるソース一覧url","a-規格標準化団体の一次情報","b-国際的な開発者研究者の発信規格編集者業界団体主要-oss","c-二次情報参考導入判断は一次情報で再確認してください","調査の限界と注意事項"];

// URL ハッシュ由来の任意の文字列を includes で照合できるよう string として扱う
const TOC_GROUPS = [{"id":"0-このガイドの前提と読み方","label":"0. このガイドの前提と読み方","children":[{"id":"想定読者","label":"想定読者"},{"id":"表記ルール","label":"表記ルール"}]},{"id":"1-規格の基本情報早見表","label":"1. 規格の基本情報（早見表）","children":[]},{"id":"step-1そもそも-dash-とは何か","label":"Step 1：そもそも DASH とは何か","children":[{"id":"1-1-解決したい課題","label":"1-1. 解決したい課題"},{"id":"1-2-dash-の考え方","label":"1-2. DASH の考え方"},{"id":"1-3-全体像","label":"1-3. 全体像"}]},{"id":"step-2規格ファミリーisoiec-23009の中での-part-1-の位置づけ","label":"Step 2：規格ファミリー（ISO/IEC 23009）の中での Part 1 の位置づけ","children":[]},{"id":"step-3part-1-が決めている-2-つのものmpd-とセグメント","label":"Step 3：Part 1 が決めている 2 つのもの（MPD とセグメント）","children":[{"id":"①-mpdmedia-presentation-description","label":"① MPD（Media Presentation Description）"},{"id":"②-セグメント形式","label":"② セグメント形式"}]},{"id":"step-4mpd-の階層構造を理解する","label":"Step 4：MPD の階層構造を理解する","children":[{"id":"各階層の意味","label":"各階層の意味"}]},{"id":"step-5セグメントの場所を示す-4-つの方法アドレッシング","label":"Step 5：セグメントの場所を示す 4 つの方法（アドレッシング）","children":[{"id":"5-1-オンデマンド向けの最小例学習用に簡略化","label":"5-1. オンデマンド向けの最小例（学習用に簡略化）"},{"id":"5-2-ライブ向けの最小例segmenttemplate--segmenttimeline","label":"5-2. ライブ向けの最小例（SegmentTemplate + SegmentTimeline）"}]},{"id":"step-6オンデマンドstaticとライブdynamic","label":"Step 6：オンデマンド（static）とライブ（dynamic）","children":[]},{"id":"step-7プロファイルとは何か","label":"Step 7：プロファイルとは何か","children":[]},{"id":"step-8dash-クライアントの動き方","label":"Step 8：DASH クライアントの動き方","children":[{"id":"abr-ロジックは規格の対象外","label":"ABR ロジックは規格の対象外"}]},{"id":"step-9版の歴史第1版第6版","label":"Step 9：版の歴史（第1版〜第6版）","children":[{"id":"第6版に至るまでの流れmpeg-会合ベース","label":"第6版に至るまでの流れ（MPEG 会合ベース）"}]},{"id":"step-10第6版2026の主な強化点","label":"Step 10：第6版（2026）の主な強化点","children":[{"id":"追加で確認できた採択内容第145回会合2024年1月","label":"追加で確認できた採択内容（第145回会合・2024年1月）"},{"id":"コンテンツステアリングの動き概念図","label":"コンテンツステアリングの動き（概念図）"}]},{"id":"step-11発行後の動きと実装エコシステム","label":"Step 11：発行後の動きと実装エコシステム","children":[{"id":"11-1-発行後も規格は進化している","label":"11-1. 発行後も規格は進化している"},{"id":"11-2-代表的な実装での扱い","label":"11-2. 代表的な実装での扱い"}]},{"id":"step-12qa-エンジニア視点のテスト観点","label":"Step 12：QA エンジニア視点のテスト観点","children":[{"id":"12-1-mpd-そのものの検証","label":"12-1. MPD そのものの検証"},{"id":"12-2-再生abr-の検証","label":"12-2. 再生・ABR の検証"},{"id":"12-3-ライブ特有の検証","label":"12-3. ライブ特有の検証"},{"id":"12-4-第6版の新機能に関する検証導入する場合","label":"12-4. 第6版の新機能に関する検証（導入する場合）"}]},{"id":"用語集","label":"用語集","children":[]},{"id":"根拠となるソース一覧url","label":"根拠となるソース一覧（URL）","children":[{"id":"a-規格標準化団体の一次情報","label":"A. 規格・標準化団体の一次情報"},{"id":"b-国際的な開発者研究者の発信規格編集者業界団体主要-oss","label":"B. 国際的な開発者・研究者の発信（規格編集者・業界団体・主要 OSS）"},{"id":"c-二次情報参考導入判断は一次情報で再確認してください","label":"C. 二次情報（参考。導入判断は一次情報で再確認してください）"}]},{"id":"調査の限界と注意事項","label":"調査の限界と注意事項","children":[]}];
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
<div className="sidebar-title">ISO/IEC 23009-1:2026<span>MPEG-DASH 初学者ガイド</span></div>
<nav aria-label="目次"><ul className="nav-list">{TOC_GROUPS.map(group=><li key={group.id}>{link(group)}{group.children.length>0&&<ul className="nav-sub">{group.children.map(child=><li key={child.id}>{link(child)}</li>)}</ul>}</li>)}</ul></nav>
</aside></>;
}
