'use client';

import React, { useEffect, useState } from 'react';

interface TocSubItem {
    id: string;
    title: string;
}

interface TocPartItem {
    id: string;
    tn: string;
    title: string;
    subs: TocSubItem[];
}

const TOC_DATA: TocPartItem[] = [
    {
        id: 'part-0',
        tn: 'パート0',
        title: 'このガイドの使い方と情報源の確度',
        subs: [
            { id: 'sec-1', title: '0.1 情報源の確度マーク' },
            { id: 'sec-2', title: '0.2 重要な注意（必ず読んでください）' },
        ],
    },
    {
        id: 'part-1',
        tn: 'パート1',
        title: '第5章の全体像',
        subs: [
            { id: 'sec-3', title: '1.1 一言でいうと' },
            { id: 'sec-4', title: '1.2 章の構造' },
            { id: 'sec-5', title: '1.3 学習目標（LO）一覧【○】' },
            { id: 'sec-6', title: '1.4 v3.1 から v4.0 で何が変わったか【○】' },
            { id: 'sec-7', title: '1.5 試験の基本情報' },
        ],
    },
    {
        id: 'part-2',
        tn: 'パート2',
        title: '5.1 欠陥防止の実践（TA-5.1.1 / K2）',
        subs: [
            { id: 'sec-8', title: '2.1 なぜ「検出」だけでは足りないのか' },
            { id: 'sec-9', title: '2.2 TA が貢献できる活動' },
            { id: 'sec-10', title: '2.3 TA の防止活動の流れ' },
            { id: 'sec-11', title: '2.4 ベストプラクティス' },
            { id: 'sec-12', title: '2.5 よくある誤解' },
        ],
    },
    {
        id: 'part-3',
        tn: 'パート3',
        title: '5.2 フェーズ封じ込めの支援（前半：考え方・指標・TA-5.2.1 / K3）',
        subs: [
            { id: 'sec-13', title: '3.1 フェーズ封じ込めとは【○／△】' },
            { id: 'sec-14', title: '3.2 封じ込めの効き目を数字で見る：DDP と PCE' },
            { id: 'sec-15', title: '3.3 5.2.1 モデルで欠陥を検出する（TA-5.2.1 / K3）' },
        ],
    },
    {
        id: 'part-4',
        tn: 'パート4',
        title: '5.2.2 レビュー技法の適用（TA-5.2.2 / K3）',
        subs: [
            { id: 'sec-16', title: '4.1 なぜレビュー技法を学ぶのか' },
            { id: 'sec-17', title: '4.2 4つのレビュー技法【○ #42】' },
            { id: 'sec-18', title: '4.3 レビューの進め方【△ 一般的な手順】' },
            { id: 'sec-19', title: '4.4 実例：シナリオベースレビューと偽陽性【○ #41 を題材に再構成】' },
            { id: 'sec-20', title: '4.5 チェックリストの作り方と例' },
            { id: 'sec-21', title: '4.6 ベストプラクティス' },
        ],
    },
    {
        id: 'part-5',
        tn: 'パート5',
        title: '5.3 欠陥の再発緩和（TA-5.3.1 / K4・TA-5.3.2 / K2）',
        subs: [
            { id: 'sec-22', title: 'A. TA-5.3.1 テスト結果を分析して検出の改善点を特定する（K4）' },
            { id: 'sec-23', title: 'B. TA-5.3.2 欠陥分類が根本原因分析をどう支えるか（K2）' },
            { id: 'sec-24', title: 'C. ベストプラクティス' },
        ],
    },
    {
        id: 'part-6',
        tn: 'パート6',
        title: 'ツール・機能別のベストプラクティス',
        subs: [],
    },
    {
        id: 'part-7',
        tn: 'パート7',
        title: '試験対策',
        subs: [
            { id: 'sec-25', title: '7.1 公式サンプル試験 #38〜#45 の整理【○】' },
            { id: 'sec-26', title: '7.2 混同しやすい概念の比較' },
            { id: 'sec-27', title: '7.3 この章の暗記ポイント' },
            { id: 'sec-28', title: '7.4 練習問題（本ガイドのオリジナル）' },
            { id: 'sec-29', title: '7.5 学習計画の例【△】' },
        ],
    },
    {
        id: 'part-8',
        tn: 'パート8',
        title: '根拠となるソース（URL）',
        subs: [
            { id: 'sec-30', title: '8.1 公式シラバス 48〜54 ページで照合すべき項目' },
            { id: 'sec-31', title: '8.2 このガイドの限界' },
        ],
    },
];

export default function NavBar({ children }: { children?: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('part-0');
    const [openParts, setOpenParts] = useState<Record<string, boolean>>({
        'part-0': true,
        'part-1': true,
        'part-2': true,
        'part-3': true,
        'part-4': true,
        'part-5': true,
        'part-6': true,
        'part-7': true,
        'part-8': true,
    });
    const [scrollProgress, setScrollProgress] = useState(0);

    // スクロール進捗バー
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const progress = (window.scrollY / totalHeight) * 100;
                setScrollProgress(Math.min(100, Math.max(0, progress)));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // IntersectionObserver スクロールスパイ
    useEffect(() => {
        const targetIds: string[] = [];
        TOC_DATA.forEach((part) => {
            targetIds.push(part.id);
            part.subs.forEach((sub) => targetIds.push(sub.id));
        });

        // コールバックには状態が変化した要素しか渡されないため、交差中の見出しを通知をまたいで保持する
        const intersecting = new Set<Element>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        intersecting.add(e.target);
                    } else {
                        intersecting.delete(e.target);
                    }
                });
                if (intersecting.size === 0) return;

                const topEl = Array.from(intersecting).reduce((prev, curr) =>
                    prev.getBoundingClientRect().top <= curr.getBoundingClientRect().top ? prev : curr
                );
                setActiveId(topEl.id);
            },
            {
                rootMargin: '-80px 0px -60% 0px',
                threshold: 0,
            }
        );

        targetIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const togglePart = (partId: string) => {
        setOpenParts((prev) => ({
            ...prev,
            [partId]: !prev[partId],
        }));
    };

    return (
        <>
            <a className="skip" href="#main">
                本文へ移動
            </a>
            <div id="progress" aria-hidden="true" style={{ width: `${scrollProgress}%` }}></div>
            <button
                className="toc-btn"
                id="tocBtn"
                type="button"
                aria-controls="toc"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                目次
            </button>
            <div className="shell">
                <nav className={`toc ${isOpen ? 'show' : ''}`} id="toc" aria-label="目次">
                    <p className="toc-head">第5章 ソフトウェア欠陥防止</p>
                    <p className="toc-cap">CTAL-TA v4.0 初学者向けガイド</p>
                    <ul>
                        {TOC_DATA.map((part) => {
                            const isPartOpen = !!openParts[part.id];
                            const isPartActive = activeId === part.id;
                            return (
                                <li
                                    key={part.id}
                                    className={`toc-part ${isPartOpen ? 'open' : ''}`}
                                    data-part={part.id}
                                >
                                    <a
                                        href={`#${part.id}`}
                                        aria-current={isPartActive ? 'true' : undefined}
                                        onClick={() => {
                                            setIsOpen(false);
                                            if (!isPartOpen) togglePart(part.id);
                                        }}
                                    >
                                        <span className="tn">{part.tn}</span>
                                        <span className="tt">{part.title}</span>
                                    </a>
                                    {part.subs.length > 0 && (
                                        <ul className="toc-sub">
                                            {part.subs.map((sub) => {
                                                const isSubActive = activeId === sub.id;
                                                return (
                                                    <li key={sub.id}>
                                                        <a
                                                            href={`#${sub.id}`}
                                                            aria-current={isSubActive ? 'true' : undefined}
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {sub.title}
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="legend">
                        <p>
                            <span className="mk mk-a">◎</span>公式シラバスで確認
                        </p>
                        <p>
                            <span className="mk mk-b">○</span>サンプル試験・LO対応表で確認
                        </p>
                        <p>
                            <span className="mk mk-c">△</span>業界一般の補足（要照合）
                        </p>
                    </div>
                </nav>
                {children}
            </div>
        </>
    );
}
