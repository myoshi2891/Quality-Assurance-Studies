'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
const TOC_IDS: readonly string[] = ["1-この規格を一言でいうと","step-1まず基本用語を押さえる","itamの基本サイクル","step-2規格の基本情報を確認する","2-1-基本プロフィール","2-2-2013年版からの大きな変化","2-3-現在のステータス2026年10月18日時点","step-3規格が扱う4つの柱を理解する","itamsamを実践する意義3つの目的","step-4isoiec-19770ファミリー全体像","4-1-各パートの役割","4-2-ファミリーの関係図","4-3-今後追加が計画されているパート","step-5データ標準swidentrumのつながり","swidタグのライフサイクル補足","step-6なぜ今itamが重要かセキュリティとの関係","step-7改訂動向第3版への置き換え","7-1-改訂の経緯isoのステージ記録より","7-2-第2版現行と第3版予定の比較","step-8学習ロードマップと読む順番","8-1-目的別次に読む規格","8-2-初学者向け5ステップ学習プラン","よくある誤解-qa","理解度チェックリスト","参考ソース一覧url","a-一次情報isoiec標準化コミュニティ","b-国際的な技術コミュニティ政府機関の技術文書","c-補助的な参考二次情報要注意","本ガイドの調査範囲と限界"];

// URL ハッシュ由来の任意の文字列を includes で照合できるよう string として扱う
type TocLink = { readonly id: string; readonly label: string; readonly sub?: boolean };

export default function NavBar({children}: {children?: React.ReactNode}) {
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
        <button className="nav-toggle" id="navToggle" type="button" ref={toggleRef} aria-label={isOpen?'目次を閉じる':'目次を開く'} aria-controls="sidebar" aria-expanded={isOpen} onClick={()=>setIsOpen(open=>!open)}>☰ 目次</button>
        <div className={isOpen?'scrim show':'scrim'} id="scrim" onClick={()=>{setIsOpen(false);toggleRef.current?.focus();}} />
        <div className="layout">
<nav className={isOpen ? "sidebar open" : "sidebar"} ref={sidebarRef} id="sidebar" aria-label="目次">

<div className="brand">
<span className="dot">

</span>
<span>
{"ISO/IEC 19770-5 Guide"}
</span>
</div>

<ul>

<li>

{link({id:"1-この規格を一言でいうと",label:"1. この規格を一言でいうと",sub:false})}

</li>

<li>

{link({id:"step-1まず基本用語を押さえる",label:"Step 1：まず基本用語を押さえる",sub:false})}

<ul>

<li>

{link({id:"itamの基本サイクル",label:"ITAMの基本サイクル",sub:true})}

</li>

</ul>

</li>

<li>

{link({id:"step-2規格の基本情報を確認する",label:"Step 2：規格の基本情報を確認する",sub:false})}

<ul>

<li>

{link({id:"2-1-基本プロフィール",label:"2-1. 基本プロフィール",sub:true})}

</li>

<li>

{link({id:"2-2-2013年版からの大きな変化",label:"2-2. 2013年版からの大きな変化",sub:true})}

</li>

<li>

{link({id:"2-3-現在のステータス2026年10月18日時点",label:"2-3. 現在のステータス（2026年10月18日時点）",sub:true})}

</li>

</ul>

</li>

<li>

{link({id:"step-3規格が扱う4つの柱を理解する",label:"Step 3：規格が扱う4つの柱を理解する",sub:false})}

<ul>

<li>

{link({id:"itamsamを実践する意義3つの目的",label:"ITAM／SAMを実践する意義（3つの目的）",sub:true})}

</li>

</ul>

</li>

<li>

{link({id:"step-4isoiec-19770ファミリー全体像",label:"Step 4：ISO/IEC 19770ファミリー全体像",sub:false})}

<ul>

<li>

{link({id:"4-1-各パートの役割",label:"4-1. 各パートの役割",sub:true})}

</li>

<li>

{link({id:"4-2-ファミリーの関係図",label:"4-2. ファミリーの関係図",sub:true})}

</li>

<li>

{link({id:"4-3-今後追加が計画されているパート",label:"4-3. 今後追加が計画されているパート",sub:true})}

</li>

</ul>

</li>

<li>

{link({id:"step-5データ標準swidentrumのつながり",label:"Step 5：データ標準（SWID・ENT・RUM）のつながり",sub:false})}

<ul>

<li>

{link({id:"swidタグのライフサイクル補足",label:"SWIDタグのライフサイクル（補足）",sub:true})}

</li>

</ul>

</li>

<li>

{link({id:"step-6なぜ今itamが重要かセキュリティとの関係",label:"Step 6：なぜ今ITAMが重要か（セキュリティとの関係）",sub:false})}

</li>

<li>

{link({id:"step-7改訂動向第3版への置き換え",label:"Step 7：改訂動向（第3版への置き換え）",sub:false})}

<ul>

<li>

{link({id:"7-1-改訂の経緯isoのステージ記録より",label:"7-1. 改訂の経緯（ISOのステージ記録より）",sub:true})}

</li>

<li>

{link({id:"7-2-第2版現行と第3版予定の比較",label:"7-2. 第2版（現行）と第3版（予定）の比較",sub:true})}

</li>

</ul>

</li>

<li>

{link({id:"step-8学習ロードマップと読む順番",label:"Step 8：学習ロードマップと読む順番",sub:false})}

<ul>

<li>

{link({id:"8-1-目的別次に読む規格",label:"8-1. 目的別・次に読む規格",sub:true})}

</li>

<li>

{link({id:"8-2-初学者向け5ステップ学習プラン",label:"8-2. 初学者向け5ステップ学習プラン",sub:true})}

</li>

</ul>

</li>

<li>

{link({id:"よくある誤解-qa",label:"よくある誤解 Q&A",sub:false})}

</li>

<li>

{link({id:"理解度チェックリスト",label:"理解度チェックリスト",sub:false})}

</li>

<li>

{link({id:"参考ソース一覧url",label:"参考ソース一覧（URL）",sub:false})}

<ul>

<li>

{link({id:"a-一次情報isoiec標準化コミュニティ",label:"A. 一次情報：ISO／IEC／標準化コミュニティ",sub:true})}

</li>

<li>

{link({id:"b-国際的な技術コミュニティ政府機関の技術文書",label:"B. 国際的な技術コミュニティ／政府機関の技術文書",sub:true})}

</li>

<li>

{link({id:"c-補助的な参考二次情報要注意",label:"C. 補助的な参考（二次情報・要注意）",sub:true})}

</li>

</ul>

</li>

<li>

{link({id:"本ガイドの調査範囲と限界",label:"本ガイドの調査範囲と限界",sub:false})}

</li>

</ul>

</nav>
        <div className="main">{children}</div></div>
    </>;
}
