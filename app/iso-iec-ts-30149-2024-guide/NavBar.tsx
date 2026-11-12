'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
const TOC_IDS: readonly string[] = ["1-この規格をひとことで言うと","2-基本情報まず押さえる事実","ts技術仕様書とis国際規格の違い","公開情報で確認できた最近の動き","3-step-0-前提知識--isoiec-30141-との関係","初学者向けの例え","4-step-1-中心概念--trust-と-trustworthiness","41-日本語にすると似ているが別物","42-規格が整理する3つの関係箇条5","43-重要用語箇条3の定義を要約","5-規格の全体構成マップ","6-step-2-5つの特性","61-5特性の早見表","62-reliabilityとresilienceの違い初学者がつまずく点","63-規格の箇条6の型を読み取る","64-特性同士は衝突するトレードオフ","7-step-3-信頼に足る性質を管理する箇条7","71-composition合成が重要な理由","8-step-4-信頼に足る性質を構築する箇条8","81-保証の核心-主張論拠証拠","82-参照アーキテクチャ内のリスク要因","9-step-5-附属書a--ベストプラクティスパターン集","10-step-6-実務での使い方qa開発の視点","101-プロジェクトへの適用フロー","102-特性別のテスト観点の例独自整理","103-自己点検チェックリスト","11-関連する規格フレームワークとの違い","12-よくある誤解","13-理解度チェック","14-参照ソース根拠url","141-一次情報規格公的情報","142-国際的な開発者企業による解説","15-この資料の限界重要"];
const TOC_GROUPS = [{"id":"1-この規格をひとことで言うと","label":"1. この規格をひとことで言うと","children":[]},{"id":"2-基本情報まず押さえる事実","label":"2. 基本情報（まず押さえる事実）","children":[{"id":"ts技術仕様書とis国際規格の違い","label":"TS（技術仕様書）とIS（国際規格）の違い","sub":true},{"id":"公開情報で確認できた最近の動き","label":"公開情報で確認できた最近の動き","sub":true}]},{"id":"3-step-0-前提知識--isoiec-30141-との関係","label":"3. Step 0: 前提知識 ― ISO/IEC 30141 との関係","children":[{"id":"初学者向けの例え","label":"初学者向けの例え","sub":true}]},{"id":"4-step-1-中心概念--trust-と-trustworthiness","label":"4. Step 1: 中心概念 ― trust と trustworthiness","children":[{"id":"41-日本語にすると似ているが別物","label":"4.1 日本語にすると似ているが、別物","sub":true},{"id":"42-規格が整理する3つの関係箇条5","label":"4.2 規格が整理する3つの関係（箇条5）","sub":true},{"id":"43-重要用語箇条3の定義を要約","label":"4.3 重要用語（箇条3の定義を要約）","sub":true}]},{"id":"5-規格の全体構成マップ","label":"5. 規格の全体構成マップ","children":[]},{"id":"6-step-2-5つの特性","label":"6. Step 2: 5つの特性","children":[{"id":"61-5特性の早見表","label":"6.1 5特性の早見表","sub":true},{"id":"62-reliabilityとresilienceの違い初学者がつまずく点","label":"6.2 ReliabilityとResilienceの違い（初学者がつまずく点）","sub":true},{"id":"63-規格の箇条6の型を読み取る","label":"6.3 規格の箇条6の「型」を読み取る","sub":true},{"id":"64-特性同士は衝突するトレードオフ","label":"6.4 特性同士は衝突する（トレードオフ）","sub":true}]},{"id":"7-step-3-信頼に足る性質を管理する箇条7","label":"7. Step 3: 信頼に足る性質を「管理する」（箇条7）","children":[{"id":"71-composition合成が重要な理由","label":"7.1 Composition（合成）が重要な理由","sub":true}]},{"id":"8-step-4-信頼に足る性質を構築する箇条8","label":"8. Step 4: 信頼に足る性質を「構築する」（箇条8）","children":[{"id":"81-保証の核心-主張論拠証拠","label":"8.1 保証の核心: 主張・論拠・証拠","sub":true},{"id":"82-参照アーキテクチャ内のリスク要因","label":"8.2 参照アーキテクチャ内のリスク要因","sub":true}]},{"id":"9-step-5-附属書a--ベストプラクティスパターン集","label":"9. Step 5: 附属書A ― ベストプラクティス（パターン集）","children":[]},{"id":"10-step-6-実務での使い方qa開発の視点","label":"10. Step 6: 実務での使い方（QA・開発の視点）","children":[{"id":"101-プロジェクトへの適用フロー","label":"10.1 プロジェクトへの適用フロー","sub":true},{"id":"102-特性別のテスト観点の例独自整理","label":"10.2 特性別のテスト観点の例（独自整理）","sub":true},{"id":"103-自己点検チェックリスト","label":"10.3 自己点検チェックリスト","sub":true}]},{"id":"11-関連する規格フレームワークとの違い","label":"11. 関連する規格・フレームワークとの違い","children":[]},{"id":"12-よくある誤解","label":"12. よくある誤解","children":[]},{"id":"13-理解度チェック","label":"13. 理解度チェック","children":[]},{"id":"14-参照ソース根拠url","label":"14. 参照ソース（根拠URL）","children":[{"id":"141-一次情報規格公的情報","label":"14.1 一次情報（規格・公的情報）","sub":true},{"id":"142-国際的な開発者企業による解説","label":"14.2 国際的な開発者・企業による解説","sub":true}]},{"id":"15-この資料の限界重要","label":"15. この資料の限界（重要）","children":[]}];
type TocLink = { readonly id: string; readonly label: string; readonly sub?: boolean };
// IntersectionObserver の rootMargin 下端（-75%）と対応する読み取り帯の下端
const BAND_BOTTOM_RATIO = 0.25;
// スクロール位置の丸めで生じる端数を吸収する
const LANDING_TOLERANCE_PX = 2;

const isAtPageEnd = (): boolean => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;

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
    return isAtPageEnd() && top < window.innerHeight;
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
        if (!heading || reachedDestination(heading)) {
            setActive(id);
            return;
        }
        // ユーザー操作などで宛先に届かなかった場合は、実際に表示している節を示す
        setActive(isAtPageEnd() ? TOC_IDS[TOC_IDS.length - 1]! : headingAboveBandBottom());
    }, []);
    // scrollend 非対応ブラウザやスクロールが発生しない場合に備え、最後のスクロールから一定時間で完了とみなす
    const scheduleSettle = useCallback(() => {
        clearTimeout(settleTimerRef.current);
        settleTimerRef.current = setTimeout(settle, 150);
    }, [settle]);

    useEffect(() => {
        const onScroll = () => {
            if (pendingRef.current) {
                scheduleSettle();
                return;
            }
            // 最後の節が短いと見出しが監視帯へ届かないため、ページ末尾では最後の目次項目を選ぶ
            if (isAtPageEnd()) setActive(TOC_IDS[TOC_IDS.length - 1]!);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('scrollend', settle);
        return () => {
            window.removeEventListener('scroll', onScroll);
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

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;
        // 通知には状態が変わった見出ししか含まれないため、帯の中の見出しを通知をまたいで保持する
        const inBand = new Set<string>();
        const observer = new IntersectionObserver(entries => {
            // 保留中の変化も取りこぼさないよう、強調の更新より先に反映する
            for (const entry of entries) {
                if (entry.isIntersecting) inBand.add(entry.target.id);
                else inBand.delete(entry.target.id);
            }
            // ページ末尾では onScroll が選んだ最後の目次項目を保つ
            if (pendingRef.current || isAtPageEnd()) return;
            // 帯が空になる通知だけでは上下どちらへ抜けたか分からないため、見出しの位置から読み直す
            setActive(TOC_IDS.filter(id => inBand.has(id)).at(-1) ?? headingAboveBandBottom());
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
<button className="nav-toggle" id="navToggle" type="button" ref={toggleRef} aria-label={isOpen?'目次を閉じる':'目次を開く'} aria-controls="sidebar" aria-expanded={isOpen} onClick={()=>setIsOpen(open=>!open)}>目次</button>
<aside aria-label="目次" className={isOpen?'sidebar open':'sidebar'} id="sidebar" inert={isMobile && !isOpen} ref={sidebarRef}>
<div className="sidebar-title">ISO/IEC TS 30149:2024</div>
<nav aria-label="目次">
<ul className="nav-list">{TOC_GROUPS.map(item=><li className="nav-h2" key={item.id}>{link(item)}{item.children.length > 0 && <ul className="nav-sub">{item.children.map(child => <li className="nav-h3" key={child.id}>{link(child)}</li>)}</ul>}</li>)}</ul>
</nav></aside></>;
}
