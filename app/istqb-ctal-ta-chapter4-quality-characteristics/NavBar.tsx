'use client';

import React, { useEffect, useRef, useState } from 'react';

interface NavItem {
    id: string;
    title: string;
    items?: { id: string; title: string }[];
}

const NAV_STRUCTURE: NavItem[] = [
    {
        id: '0-このガイドの読み方',
        title: '0. このガイドの読み方',
        items: [
            { id: '01-ゴールと学習の進め方', title: '0.1 ゴールと学習の進め方' },
            { id: '02-信頼度タグの見方', title: '0.2 信頼度タグの見方' },
            { id: '03--このガイドの限界必ず読んでください', title: '0.3 ⚠ このガイドの限界（必ず読んでください）' },
            { id: '04-バージョン情報受験前に確認', title: '0.4 バージョン情報（受験前に確認）' },
        ],
    },
    {
        id: '1-第4章の全体像',
        title: '1. 第4章の全体像',
        items: [
            { id: '11-章の位置づけ', title: '1.1 章の位置づけ' },
            { id: '12-なぜ-ta-が品質特性のテストを扱うのか', title: '1.2 なぜ TA が品質特性のテストを扱うのか' },
            { id: '13-isoiec-250102023-との対応', title: '1.3 ISO/IEC 25010:2023 との対応' },
            { id: '14-v31-から-v40-への用語構成の変更点', title: '1.4 v3.1 から v4.0 への用語・構成の変更点' },
            { id: '15-キーワード13語k1定義を思い出せること', title: '1.5 キーワード13語（K1：定義を思い出せること）' },
        ],
    },
    {
        id: '2-41-機能テストta-411k2',
        title: '2. 4.1 機能テスト（TA-4.1.1・K2）',
        items: [
            { id: '21-まず結論3つの違いを一枚で', title: '2.1 まず結論：3つの違いを一枚で' },
            { id: '22-機能適合性functional-suitabilityとは', title: '2.2 機能適合性（Functional suitability）とは' },
            { id: '23-3つのサブ特性を詳しく', title: '2.3 3つのサブ特性を詳しく' },
            { id: '24-見分け方どの特性の問題か迷ったとき', title: '2.4 見分け方：どの特性の問題か迷ったとき' },
            { id: '25-機能テストの進め方ステップバイステップ', title: '2.5 機能テストの進め方（ステップバイステップ）' },
            { id: '26-特性ごとの技法の選び方', title: '2.6 特性ごとの技法の選び方' },
            { id: '27-いつどのレベルでテストするか', title: '2.7 いつ・どのレベルでテストするか' },
            { id: '28-ベストプラクティス機能テスト', title: '2.8 ベストプラクティス（機能テスト）' },
            { id: '29--対比', title: '2.9 ✅／❌ 対比' },
            { id: '210-公式サンプル試験-q34-の考え方', title: '2.10 公式サンプル試験 Q34 の考え方' },
            { id: '211-41-のまとめ', title: '2.11 4.1 のまとめ' },
        ],
    },
    {
        id: '3-42-ユーザビリティテストta-421k2',
        title: '3. 4.2 ユーザビリティテスト（TA-4.2.1・K2）',
        items: [
            { id: '31-用語の整理usabilityinteraction-capabilityux', title: '3.1 用語の整理：usability・interaction capability・UX' },
            { id: '32-インタラクション能力の8つのサブ特性', title: '3.2 インタラクション能力の8つのサブ特性' },
            { id: '33-ta-はユーザビリティテストにどう貢献するか', title: '3.3 TA はユーザビリティテストにどう貢献するか' },
            { id: '34-ユーザビリティテスト利用者テストの進め方', title: '3.4 ユーザビリティテスト（利用者テスト）の進め方' },
            { id: '35-具体例ecサイトの初回購入', title: '3.5 具体例：ECサイトの「初回購入」' },
            { id: '36-評価手法の使い分け', title: '3.6 評価手法の使い分け' },
            { id: '37-アクセシビリティ包括性ユーザー支援の扱い', title: '3.7 アクセシビリティ（包括性・ユーザー支援）の扱い' },
            { id: '38-ベストプラクティスユーザビリティテスト', title: '3.8 ベストプラクティス（ユーザビリティテスト）' },
            { id: '39--対比', title: '3.9 ✅／❌ 対比' },
            { id: '310-公式サンプル試験-q35-の考え方', title: '3.10 公式サンプル試験 Q35 の考え方' },
            { id: '311-42-のまとめ', title: '3.11 4.2 のまとめ' },
        ],
    },
    {
        id: '4-43-フレキシビリティテストta-431k2',
        title: '4. 4.3 フレキシビリティテスト（TA-4.3.1・K2）',
        items: [
            { id: '41-フレキシビリティ柔軟性とは', title: '4.1 フレキシビリティ（柔軟性）とは' },
            { id: '42-適応性adaptabilityテスト', title: '4.2 適応性（Adaptability）テスト' },
            { id: '43-インストール性installabilityテスト', title: '4.3 インストール性（Installability）テスト' },
            { id: '44-ベストプラクティスフレキシビリティテスト', title: '4.4 ベストプラクティス（フレキシビリティテスト）' },
            { id: '45--対比', title: '4.5 ✅／❌ 対比' },
            { id: '46-公式サンプル試験-q36-の考え方', title: '4.6 公式サンプル試験 Q36 の考え方' },
            { id: '47-43-のまとめ', title: '4.7 4.3 のまとめ' },
        ],
    },
    {
        id: '5-44-互換性テストta-441k2',
        title: '5. 4.4 互換性テスト（TA-4.4.1・K2）',
        items: [
            { id: '51-互換性compatibilityとは', title: '5.1 互換性（Compatibility）とは' },
            { id: '52-相互運用性interoperabilityの定義', title: '5.2 相互運用性（Interoperability）の定義' },
            { id: '53-ta-は相互運用性テストにどう貢献するか', title: '5.3 TA は相互運用性テストにどう貢献するか' },
            { id: '54-テスト観点', title: '5.4 テスト観点' },
            { id: '55-相互運用性テストの進め方', title: '5.5 相互運用性テストの進め方' },
            { id: '56-具体例ecサイトと決済サービス在庫システム', title: '5.6 具体例：ECサイトと決済サービス・在庫システム' },
            { id: '57-テストダブルサービス仮想化契約テスト', title: '5.7 テストダブル・サービス仮想化・契約テスト' },
            { id: '58-ベストプラクティス相互運用性テスト', title: '5.8 ベストプラクティス（相互運用性テスト）' },
            { id: '59--対比', title: '5.9 ✅／❌ 対比' },
            { id: '510-公式サンプル試験-q37-の考え方', title: '5.10 公式サンプル試験 Q37 の考え方' },
            { id: '511-44-のまとめ', title: '5.11 4.4 のまとめ' },
        ],
    },
    {
        id: '6-機能サービス別-適用早見表',
        title: '6. 機能・サービス別 適用早見表',
    },
    {
        id: '7-試験対策',
        title: '7. 試験対策',
        items: [
            { id: '71-混同しやすい概念の比較', title: '7.1 混同しやすい概念の比較' },
            { id: '72-lo-ごとのこれだけは説明できるポイント', title: '7.2 LO ごとの「これだけは説明できる」ポイント' },
            { id: '73-公式サンプル試験の第4章q34q37一覧', title: '7.3 公式サンプル試験の第4章（Q34〜Q37）一覧' },
            { id: '74-自己診断ミニクイズ-筆者作成公式問題ではありません', title: '7.4 自己診断ミニクイズ（💡 筆者作成・公式問題ではありません）' },
            { id: '75-学習プラン-目安', title: '7.5 学習プラン（💡 目安）' },
            { id: '76-公式シラバス4447-ページ通読時のチェックポイント', title: '7.6 公式シラバス（44〜47 ページ）通読時のチェックポイント' },
        ],
    },
    {
        id: '8-実務チェックリスト',
        title: '8. 実務チェックリスト',
    },
    {
        id: '9-参考文献根拠ソースの-url',
        title: '9. 参考文献（根拠ソースの URL）',
        items: [
            { id: '91-istqb-公式一次情報', title: '9.1 ISTQB 公式（一次情報）' },
            { id: '92-iso-規格', title: '9.2 ISO 規格' },
            { id: '93-ユーザビリティアクセシビリティ', title: '9.3 ユーザビリティ・アクセシビリティ' },
            { id: '94-環境ci用語補足', title: '9.4 環境・CI・用語（補足）' },
            { id: '95-二次情報学習の補助', title: '9.5 二次情報（学習の補助）' },
        ],
    },
    {
        id: '付録-aこのガイドの記述と根拠の対応要点',
        title: '付録 A：このガイドの記述と根拠の対応（要点）',
    },
    {
        id: '付録-b用語の対応表日本語英語',
        title: '付録 B：用語の対応表（日本語・英語）',
    },
];

export default function NavBar() {
    const [navOpen, setNavOpen] = useState(false);
    const [activeTarget, setActiveTarget] = useState<string>('');
    const [openH2, setOpenH2] = useState<string>('');

    useEffect(() => {
        // 監視領域内に現在入っている見出しの ID。スクロール位置だけで判定すると、
        // ページ上部でも見出しが領域内にある間に選択状態が消えてしまうため、実際の交差状態で判定する
        const visibleIds = new Set<string>();

        const handleScroll = () => {
            if (window.scrollY < 220 && visibleIds.size === 0) {
                setActiveTarget('');
                setOpenH2('');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // 見出し ID を文書順に並べた一覧（離脱時に残存見出しから現在位置を再計算するため）
        const orderedIds = NAV_STRUCTURE.flatMap((sec) => [sec.id, ...(sec.items?.map((item) => item.id) ?? [])]);

        const activate = (id: string) => {
            setActiveTarget(id);

            // Find parent H2 for this target
            for (const sec of NAV_STRUCTURE) {
                if (sec.id === id) {
                    setOpenH2(sec.id);
                    break;
                }
                if (sec.items?.some((item) => item.id === id)) {
                    setOpenH2(sec.id);
                    break;
                }
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                let entered = false;
                let left = false;
                for (const entry of entries) {
                    if (!entry.isIntersecting) {
                        visibleIds.delete(entry.target.id);
                        left = true;
                    }
                    if (entry.isIntersecting) {
                        visibleIds.add(entry.target.id);
                        entered = true;
                        activate(entry.target.id);
                    }
                }
                // 進入がなく離脱のみの場合は、領域内に残る見出しのうち文書順で最初のものを現在位置とする
                if (!entered && left) {
                    const current = orderedIds.find((id) => visibleIds.has(id));
                    if (current) activate(current);
                }
            },
            { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
        );

        const observedElements: Element[] = [];
        NAV_STRUCTURE.forEach((sec) => {
            const el = document.getElementById(sec.id);
            if (el) {
                observer.observe(el);
                observedElements.push(el);
            }
            sec.items?.forEach((item) => {
                const subEl = document.getElementById(item.id);
                if (subEl) {
                    observer.observe(subEl);
                    observedElements.push(subEl);
                }
            });
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const toggleRef = useRef<HTMLButtonElement>(null);

    const toggleNav = () => setNavOpen(!navOpen);
    // 閉じたサイドバーは画面外へ移動するため、フォーカスを可視のトグルへ戻す
    const closeNav = () => {
        setNavOpen(false);
        toggleRef.current?.focus();
    };
    // モバイルで目次リンクを選んだら、閉じたうえでフォーカスを遷移先の見出しへ移す
    // （デスクトップではサイドバーが常時表示のため既定動作のままにする）
    const handleLinkSelect = (targetId: string) => {
        if (!navOpen) return;
        setNavOpen(false);
        const heading = document.getElementById(targetId);
        if (!heading) {
            toggleRef.current?.focus();
            return;
        }
        if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
    };

    return (
        <>
            <button
                className="sb-toggle"
                id="sbToggle"
                ref={toggleRef}
                type="button"
                aria-label={navOpen ? '目次を閉じる' : '目次を開く'}
                aria-expanded={navOpen}
                aria-controls="sidebar"
                onClick={toggleNav}
            >
                目次
            </button>
            <div
                className={`sb-scrim ${navOpen ? 'open' : ''}`}
                id="sbScrim"
                aria-hidden="true"
                onClick={closeNav}
            />
            <aside className={`sidebar ${navOpen ? 'open' : ''}`} id="sidebar" aria-label="目次">
                <div className="sb-brand">ISTQB CTAL-TA v4.0</div>
                <div className="sb-title">第4章 品質特性のテスト</div>
                <nav>
                    <ul>
                        {NAV_STRUCTURE.map((sec) => {
                            const isH2Active = activeTarget === sec.id;
                            const isGroupOpen = openH2 === sec.id || isH2Active;
                            return (
                                <li
                                    key={sec.id}
                                    className={`nav-h2 ${isGroupOpen ? 'open' : ''}`}
                                >
                                    <a
                                        href={`#${sec.id}`}
                                        data-target={sec.id}
                                        className={isH2Active ? 'active' : ''}
                                        aria-current={isH2Active ? 'location' : undefined}
                                        onClick={() => {
                                            setOpenH2(sec.id);
                                            handleLinkSelect(sec.id);
                                        }}
                                    >
                                        {sec.title}
                                    </a>
                                    {sec.items && sec.items.length > 0 && (
                                        <ul>
                                            {sec.items.map((sub) => {
                                                const isH3Active = activeTarget === sub.id;
                                                return (
                                                    <li key={sub.id} className="nav-h3">
                                                        <a
                                                            href={`#${sub.id}`}
                                                            data-target={sub.id}
                                                            className={isH3Active ? 'active' : ''}
                                                            aria-current={isH3Active ? 'location' : undefined}
                                                            onClick={() => handleLinkSelect(sub.id)}
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
                </nav>
            </aside>
        </>
    );
}
