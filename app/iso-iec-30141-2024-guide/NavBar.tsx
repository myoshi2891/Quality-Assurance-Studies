'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
const TOC_IDS: readonly string[] = ["1-この規格を一言でいうと", "この規格がやらないこと", "2-step-0-前提知識参照アーキテクチャとは何か", "21-参照アーキテクチャreference-architecture-raとは", "22-iotとは規格の序文introduction02より", "23-isoiecieee-42010-の基本用語読むうえで必須", "3-step-1-規格の基本情報と位置づけ", "31-基本情報iso公式ページより", "32-規格の使われ方序文introduction04-の-figure-1-の趣旨", "4-step-2-第2版2024で何が変わったか", "5-step-3-規格全体の構成を地図で把握する", "読む順番のおすすめ", "6-step-4-ステークホルダーと関心事5章", "使い方の発想", "7-step-5-6つのビューポイントとビュー6章", "71-基礎foundational-iotビュー62", "72-ビジネスビュー63", "73-利用ビュー64", "74-機能ビュー65", "75-信頼性ビュー66", "76-構築ビュー67", "8-step-6-構築ビューとパターンを深掘りする", "81-構築ビューの位置づけ", "82-構築ビューの考え方", "83-iotコンポーネントパターンを理解する", "84-ステップ別-パターンを使った設計の流れ解説者による実践提案", "9-step-7-附属書abcの読み方", "91-附属書a規範-追加のiot構築パターン", "92-附属書b参考-isoiecieee-420102022-の使い方", "93-附属書c参考-iotシステムの特性", "10-step-8-関連規格関連フレームワークとの関係", "11-step-9-実務での使い方設計者開発者qa別", "111-役割別の活用ポイント", "112-qaエンジニア向け-観点の洗い出しフロー解説者による実践提案", "113-適合性認証についての注意", "12-よくある誤解と注意点", "13-用語集", "14-理解度チェック", "15-参考にした情報源url", "151-一次情報公式", "152-規格プレビュー目次本ガイドの構成の根拠", "153-業界団体標準化関係者研究機関による解説", "154-本ガイドで採用しなかった情報", "155-情報の限界と確認のすすめ"];

// URL ハッシュ由来の任意の文字列を includes で照合できるよう string として扱う
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
<div className="side-title">{"ISO/IEC 30141:2024"}<br /><span>{"IoT参照アーキテクチャ解説"}</span></div>
<ul className="nav-list"><li>{link({"id": "1-この規格を一言でいうと", "label": "1. この規格を一言でいうと"})}<ul className="nav-sub"><li>{link({"id": "この規格がやらないこと", "label": "この規格が\"やらないこと\""})}</li></ul></li><li>{link({"id": "2-step-0-前提知識参照アーキテクチャとは何か", "label": "2. Step 0: 前提知識（参照アーキテクチャとは何か）"})}<ul className="nav-sub"><li>{link({"id": "21-参照アーキテクチャreference-architecture-raとは", "label": "2.1 参照アーキテクチャ（Reference Architecture, RA）とは"})}</li><li>{link({"id": "22-iotとは規格の序文introduction02より", "label": "2.2 IoTとは（規格の序文（Introduction）0.2より）"})}</li><li>{link({"id": "23-isoiecieee-42010-の基本用語読むうえで必須", "label": "2.3 ISO/IEC/IEEE 42010 の基本用語（読むうえで必須）"})}</li></ul></li><li>{link({"id": "3-step-1-規格の基本情報と位置づけ", "label": "3. Step 1: 規格の基本情報と位置づけ"})}<ul className="nav-sub"><li>{link({"id": "31-基本情報iso公式ページより", "label": "3.1 基本情報（ISO公式ページより）"})}</li><li>{link({"id": "32-規格の使われ方序文introduction04-の-figure-1-の趣旨", "label": "3.2 規格の使われ方（箇条5.1に基づく本ガイドの説明図）"})}</li></ul></li><li>{link({"id": "4-step-2-第2版2024で何が変わったか", "label": "4. Step 2: 第2版（2024）で何が変わったか"})}</li><li>{link({"id": "5-step-3-規格全体の構成を地図で把握する", "label": "5. Step 3: 規格全体の構成を地図で把握する"})}<ul className="nav-sub"><li>{link({"id": "読む順番のおすすめ", "label": "読む順番のおすすめ"})}</li></ul></li><li>{link({"id": "6-step-4-ステークホルダーと関心事5章", "label": "6. Step 4: ステークホルダーと関心事（5章）"})}<ul className="nav-sub"><li>{link({"id": "使い方の発想", "label": "使い方の発想"})}</li></ul></li><li>{link({"id": "7-step-5-6つのビューポイントとビュー6章", "label": "7. Step 5: 6つのビューポイントとビュー（6章）"})}<ul className="nav-sub"><li>{link({"id": "71-基礎foundational-iotビュー62", "label": "7.1 基礎（Foundational IoT）ビュー（6.2）"})}</li><li>{link({"id": "72-ビジネスビュー63", "label": "7.2 ビジネスビュー（6.3）"})}</li><li>{link({"id": "73-利用ビュー64", "label": "7.3 利用ビュー（6.4）"})}</li><li>{link({"id": "74-機能ビュー65", "label": "7.4 機能ビュー（6.5）"})}</li><li>{link({"id": "75-信頼性ビュー66", "label": "7.5 信頼性ビュー（6.6）"})}</li><li>{link({"id": "76-構築ビュー67", "label": "7.6 構築ビュー（6.7）"})}</li></ul></li><li>{link({"id": "8-step-6-構築ビューとパターンを深掘りする", "label": "8. Step 6: 構築ビューとパターンを深掘りする"})}<ul className="nav-sub"><li>{link({"id": "81-構築ビューの位置づけ", "label": "8.1 構築ビューの位置づけ"})}</li><li>{link({"id": "82-構築ビューの考え方", "label": "8.2 構築ビューの考え方"})}</li><li>{link({"id": "83-iotコンポーネントパターンを理解する", "label": "8.3 IoTコンポーネントパターンを理解する"})}</li><li>{link({"id": "84-ステップ別-パターンを使った設計の流れ解説者による実践提案", "label": "8.4 ステップ別: パターンを使った設計の流れ（解説者による実践提案）"})}</li></ul></li><li>{link({"id": "9-step-7-附属書abcの読み方", "label": "9. Step 7: 附属書A・B・Cの読み方"})}<ul className="nav-sub"><li>{link({"id": "91-附属書a規範-追加のiot構築パターン", "label": "9.1 附属書A（規範）: 追加のIoT構築パターン"})}</li><li>{link({"id": "92-附属書b参考-isoiecieee-420102022-の使い方", "label": "9.2 附属書B（参考）: ISO/IEC/IEEE 42010:2022 の使い方"})}</li><li>{link({"id": "93-附属書c参考-iotシステムの特性", "label": "9.3 附属書C（参考）: IoTシステムの特性"})}</li></ul></li><li>{link({"id": "10-step-8-関連規格関連フレームワークとの関係", "label": "10. Step 8: 関連規格・関連フレームワークとの関係"})}</li><li>{link({"id": "11-step-9-実務での使い方設計者開発者qa別", "label": "11. Step 9: 実務での使い方（設計者・開発者・QA別）"})}<ul className="nav-sub"><li>{link({"id": "111-役割別の活用ポイント", "label": "11.1 役割別の活用ポイント"})}</li><li>{link({"id": "112-qaエンジニア向け-観点の洗い出しフロー解説者による実践提案", "label": "11.2 QAエンジニア向け: 観点の洗い出しフロー（解説者による実践提案）"})}</li><li>{link({"id": "113-適合性認証についての注意", "label": "11.3 適合性（認証）についての注意"})}</li></ul></li><li>{link({"id": "12-よくある誤解と注意点", "label": "12. よくある誤解と注意点"})}</li><li>{link({"id": "13-用語集", "label": "13. 用語集"})}</li><li>{link({"id": "14-理解度チェック", "label": "14. 理解度チェック"})}</li><li>{link({"id": "15-参考にした情報源url", "label": "15. 参考にした情報源（URL）"})}<ul className="nav-sub"><li>{link({"id": "151-一次情報公式", "label": "15.1 一次情報（公式）"})}</li><li>{link({"id": "152-規格プレビュー目次本ガイドの構成の根拠", "label": "15.2 規格プレビュー・目次（本ガイドの構成の根拠）"})}</li><li>{link({"id": "153-業界団体標準化関係者研究機関による解説", "label": "15.3 業界団体・標準化関係者・研究機関による解説"})}</li><li>{link({"id": "154-本ガイドで採用しなかった情報", "label": "15.4 本ガイドで採用しなかった情報"})}</li><li>{link({"id": "155-情報の限界と確認のすすめ", "label": "15.5 情報の限界と確認のすすめ"})}</li></ul></li></ul>
</aside></>;
}
