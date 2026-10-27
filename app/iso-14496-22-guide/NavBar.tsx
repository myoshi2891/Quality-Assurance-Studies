'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
const TOC_IDS: readonly string[] = ["step-0","step-1","1-1-規格のプロフィール","1-2-発行までの経緯isoの公開ライフサイクル","step-2","2-1-3つの名前を整理する","2-2-同期の仕組み","step-3","3-1-版ごとの主な出来事","3-2-第3版でカラーフォントが入った背景","step-4","4-1-全体像","4-2-ファイル先頭のテーブルディレクトリ","4-3-主要テーブルの早見表","step-5","step-6","6-1-2種類のアウトライン形式","6-2-レイアウト機能off-layout","6-3-カラーフォント","6-4-バリアブルフォント","step-7","7-1-なぜ問題だったのか","7-2-仕組み大文字タグのテーブルを新設","7-3-合わせて入った拡張","7-4-3次ベジェ曲線とは","step-8","実装者が実際に作ったテストフォント","実装者が報告した仕様からの逸脱","step-9","9-1-手元のフォントのテーブル構成を見るfonttools","9-2-pythonでグリフ数とテーブルを確認する","9-3-確認のステップ","step-10","10-1-なぜqaの対象になるのか","10-2-テスト観点の一覧","10-3-リスクの優先度筆者の見立て","roadmap","caveats","-公式情報で確認できたこと","-実装者の一次発言から読み取った事項","-本稿では確認できていないこと","sources","一次情報規格団体仕様管理者","著名な国際的開発者プロジェクトの一次発言","二次情報補助的な参照","用語集"];

// URL ハッシュ由来の任意の文字列を includes で照合できるよう string として扱う
type TocLink = { readonly id: string; readonly label: string };

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
            className={active === item.id ? 'active' : undefined}
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
        <button className="nav-toggle" id="navToggle" type="button" ref={toggleRef}
            aria-label={isOpen ? '目次を閉じる' : '目次を開く'} aria-controls="sidebar"
            aria-expanded={isOpen} onClick={() => setIsOpen(open => !open)}>
            ☰ 目次
        </button>
<aside className={isOpen ? "sidebar open" : "sidebar"} ref={sidebarRef} id="sidebar">{"\n"}<div className="sidebar-title">{"ISO/IEC 14496-22:2026"}<span>{"Open Font Format ガイド"}</span></div>{"\n"}<nav><ul className="nav-list"><li className="nav-h2">{link({id:"step-0",label:"0. この規格を一言でいうと"})}</li><li className="nav-h2">{link({id:"step-1",label:"Step 1：基本情報を押さえる"})}<ul><li className="nav-h3">{link({id:"1-1-規格のプロフィール",label:"1-1. 規格のプロフィール"})}</li><li className="nav-h3">{link({id:"1-2-発行までの経緯isoの公開ライフサイクル",label:"1-2.\n発行までの経緯（ISOの公開ライフサイクル）"})}</li></ul></li><li className="nav-h2">{link({id:"step-2",label:"Step\n2：OFFとOpenTypeの関係を理解する"})}<ul><li className="nav-h3">{link({id:"2-1-3つの名前を整理する",label:"2-1. 3つの名前を整理する"})}</li><li className="nav-h3">{link({id:"2-2-同期の仕組み",label:"2-2. 同期の仕組み"})}</li></ul></li><li className="nav-h2">{link({id:"step-3",label:"Step 3：5つの版の歴史をたどる"})}<ul><li className="nav-h3">{link({id:"3-1-版ごとの主な出来事",label:"3-1. 版ごとの主な出来事"})}</li><li className="nav-h3">{link({id:"3-2-第3版でカラーフォントが入った背景",label:"3-2.\n第3版でカラーフォントが入った背景"})}</li></ul></li><li className="nav-h2">{link({id:"step-4",label:"Step\n4：フォントファイルの構造を知る"})}<ul><li className="nav-h3">{link({id:"4-1-全体像",label:"4-1. 全体像"})}</li><li className="nav-h3">{link({id:"4-2-ファイル先頭のテーブルディレクトリ",label:"4-2.\nファイル先頭の「テーブルディレクトリ」"})}</li><li className="nav-h3">{link({id:"4-3-主要テーブルの早見表",label:"4-3. 主要テーブルの早見表"})}</li></ul></li><li className="nav-h2">{link({id:"step-5",label:"Step\n5：文字が画面に出るまでの流れを知る"})}</li><li className="nav-h2">{link({id:"step-6",label:"Step 6：規格の主要機能"})}<ul><li className="nav-h3">{link({id:"6-1-2種類のアウトライン形式",label:"6-1. 2種類のアウトライン形式"})}</li><li className="nav-h3">{link({id:"6-2-レイアウト機能off-layout",label:"6-2. レイアウト機能（OFF\nLayout）"})}</li><li className="nav-h3">{link({id:"6-3-カラーフォント",label:"6-3. カラーフォント"})}</li><li className="nav-h3">{link({id:"6-4-バリアブルフォント",label:"6-4. バリアブルフォント"})}</li></ul></li><li className="nav-h2">{link({id:"step-7",label:"Step\n7：2026年・第5版の最大のポイント「64Kの壁」の突破"})}<ul><li className="nav-h3">{link({id:"7-1-なぜ問題だったのか",label:"7-1. なぜ問題だったのか"})}</li><li className="nav-h3">{link({id:"7-2-仕組み大文字タグのテーブルを新設",label:"7-2.\n仕組み：「大文字タグのテーブル」を新設"})}</li><li className="nav-h3">{link({id:"7-3-合わせて入った拡張",label:"7-3. 合わせて入った拡張"})}</li><li className="nav-h3">{link({id:"7-4-3次ベジェ曲線とは",label:"7-4. 3次ベジェ曲線とは"})}</li></ul></li><li className="nav-h2">{link({id:"step-8",label:"Step 8：実装側の対応状況"})}<ul><li className="nav-h3">{link({id:"実装者が実際に作ったテストフォント",label:"実装者が実際に作ったテストフォント"})}</li><li className="nav-h3">{link({id:"実装者が報告した仕様からの逸脱",label:"実装者が報告した「仕様からの逸脱」"})}</li></ul></li><li className="nav-h2">{link({id:"step-9",label:"Step 9：手を動かして確認する"})}<ul><li className="nav-h3">{link({id:"9-1-手元のフォントのテーブル構成を見るfonttools",label:"9-1.\n手元のフォントのテーブル構成を見る（fontTools）"})}</li><li className="nav-h3">{link({id:"9-2-pythonでグリフ数とテーブルを確認する",label:"9-2.\nPythonでグリフ数とテーブルを確認する"})}</li><li className="nav-h3">{link({id:"9-3-確認のステップ",label:"9-3. 確認のステップ"})}</li></ul></li><li className="nav-h2">{link({id:"step-10",label:"Step\n10：QAエンジニア視点のテスト観点"})}<ul><li className="nav-h3">{link({id:"10-1-なぜqaの対象になるのか",label:"10-1. なぜQAの対象になるのか"})}</li><li className="nav-h3">{link({id:"10-2-テスト観点の一覧",label:"10-2. テスト観点の一覧"})}</li><li className="nav-h3">{link({id:"10-3-リスクの優先度筆者の見立て",label:"10-3.\nリスクの優先度（筆者の見立て）"})}</li></ul></li><li className="nav-h2">{link({id:"roadmap",label:"学習ロードマップ"})}</li><li className="nav-h2">{link({id:"caveats",label:"確認できたこと・できていないこと"})}<ul><li className="nav-h3">{link({id:"-公式情報で確認できたこと",label:"✅ 公式情報で確認できたこと"})}</li><li className="nav-h3">{link({id:"-実装者の一次発言から読み取った事項",label:"🔶\n実装者の一次発言から読み取った事項"})}</li><li className="nav-h3">{link({id:"-本稿では確認できていないこと",label:"❓\n本稿では確認できていないこと"})}</li></ul></li><li className="nav-h2">{link({id:"sources",label:"参考文献・根拠URL"})}<ul><li className="nav-h3">{link({id:"一次情報規格団体仕様管理者",label:"一次情報（規格団体・仕様管理者）"})}</li><li className="nav-h3">{link({id:"著名な国際的開発者プロジェクトの一次発言",label:"著名な国際的開発者・プロジェクトの一次発言"})}</li><li className="nav-h3">{link({id:"二次情報補助的な参照",label:"二次情報（補助的な参照）"})}</li></ul></li><li className="nav-h2">{link({id:"用語集",label:"用語集"})}</li></ul></nav>{"\n"}</aside>
    </>;
}
