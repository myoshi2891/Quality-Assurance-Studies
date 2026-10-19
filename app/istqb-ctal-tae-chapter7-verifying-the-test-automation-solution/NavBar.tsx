'use client';

import React, { useEffect, useRef, useState } from 'react';

export const TOC_ITEMS = [
    {
        "id": "1-この章の全体像",
        "text": "1. この章の全体像",
        "level": "h2"
    },
    {
        "id": "11-この章で学ぶこと",
        "text": "1.1 この章で学ぶこと",
        "level": "h3"
    },
    {
        "id": "12-学習目標learning-objectives",
        "text": "1.2 学習目標（Learning Objectives）",
        "level": "h3"
    },
    {
        "id": "13-全体マップ",
        "text": "1.3 全体マップ",
        "level": "h3"
    },
    {
        "id": "2-前提知識と用語の整理",
        "text": "2. 前提知識と用語の整理",
        "level": "h2"
    },
    {
        "id": "21-sut-のテストとtas-の検証の違い",
        "text": "2.1 「SUT のテスト」と「TAS の検証」の違い",
        "level": "h3"
    },
    {
        "id": "3-711-テスト自動化環境ツールのセットアップを含むの検証を計画するk3",
        "text": "3. 7.1.1 テスト自動化環境（ツールのセットアップを含む）の検証を計画する（K3）",
        "level": "h2"
    },
    {
        "id": "31-なぜ環境の検証が必要か",
        "text": "3.1 なぜ環境の検証が必要か",
        "level": "h3"
    },
    {
        "id": "32-検証の進め方全体フロー",
        "text": "3.2 検証の進め方（全体フロー）",
        "level": "h3"
    },
    {
        "id": "33-観点1テストツールのインストールセットアップ構成カスタマイズ",
        "text": "3.3 観点1：テストツールのインストール・セットアップ・構成・カスタマイズ",
        "level": "h3"
    },
    {
        "id": "34-観点2テスト環境のセットアップティアダウンの再現性",
        "text": "3.4 観点2：テスト環境のセットアップ／ティアダウンの再現性",
        "level": "h3"
    },
    {
        "id": "35-観点3内部外部システムインターフェースとの接続性",
        "text": "3.5 観点3：内部・外部システム／インターフェースとの接続性",
        "level": "h3"
    },
    {
        "id": "36-観点4taf-コンポーネントのテスト",
        "text": "3.6 観点4：TAF コンポーネントのテスト",
        "level": "h3"
    },
    {
        "id": "37-k3-として試験に出やすい形",
        "text": "3.7 K3 として試験に出やすい形",
        "level": "h3"
    },
    {
        "id": "4-712-自動テストスクリプトスイートの正しい振る舞いを説明するk2",
        "text": "4. 7.1.2 自動テストスクリプト／スイートの正しい振る舞いを説明する（K2）",
        "level": "h2"
    },
    {
        "id": "41-何を確認するか",
        "text": "4.1 何を確認するか",
        "level": "h3"
    },
    {
        "id": "42-項目1テストスイートの構成を確認する",
        "text": "4.2 項目1：テストスイートの構成を確認する",
        "level": "h3"
    },
    {
        "id": "43-項目2taf-の新機能に焦点を当てた新しいテストの検証",
        "text": "4.3 項目2：TAF の新機能に焦点を当てた新しいテストの検証",
        "level": "h3"
    },
    {
        "id": "44-項目3テストの再現性repeatability",
        "text": "4.4 項目3：テストの再現性（Repeatability）",
        "level": "h3"
    },
    {
        "id": "45-項目4自動テストツールの侵入性intrusiveness",
        "text": "4.5 項目4：自動テストツールの侵入性（Intrusiveness）",
        "level": "h3"
    },
    {
        "id": "5-713-テスト自動化が予期しない結果を出す箇所を特定するk2",
        "text": "5. 7.1.3 テスト自動化が予期しない結果を出す箇所を特定する（K2）",
        "level": "h2"
    },
    {
        "id": "51-何を確認するか",
        "text": "5.1 何を確認するか",
        "level": "h3"
    },
    {
        "id": "52-予期しないは失敗だけではない",
        "text": "5.2 「予期しない」は失敗だけではない",
        "level": "h3"
    },
    {
        "id": "53-不具合が潜みうる場所",
        "text": "5.3 不具合が潜みうる場所",
        "level": "h3"
    },
    {
        "id": "54-調査の進め方",
        "text": "5.4 調査の進め方",
        "level": "h3"
    },
    {
        "id": "6-714-静的解析がテスト自動化コードの品質向上にどう役立つかk2",
        "text": "6. 7.1.4 静的解析がテスト自動化コードの品質向上にどう役立つか（K2）",
        "level": "h2"
    },
    {
        "id": "61-静的解析とは",
        "text": "6.1 静的解析とは",
        "level": "h3"
    },
    {
        "id": "62-静的解析の出力と支援機能",
        "text": "6.2 静的解析の出力と支援機能",
        "level": "h3"
    },
    {
        "id": "63-なぜテスト自動化コードにも静的解析が必要か",
        "text": "6.3 なぜ「テスト自動化コード」にも静的解析が必要か",
        "level": "h3"
    },
    {
        "id": "64-パイプラインへの組み込み",
        "text": "6.4 パイプラインへの組み込み",
        "level": "h3"
    },
    {
        "id": "7-ベストプラクティス総まとめ",
        "text": "7. ベストプラクティス総まとめ",
        "level": "h2"
    },
    {
        "id": "8-試験対策ポイント",
        "text": "8. 試験対策ポイント",
        "level": "h2"
    },
    {
        "id": "81-出題の構造",
        "text": "8.1 出題の構造",
        "level": "h3"
    },
    {
        "id": "82-間違えやすいポイント",
        "text": "8.2 間違えやすいポイント",
        "level": "h3"
    },
    {
        "id": "83-暗記用チェックリスト",
        "text": "8.3 暗記用チェックリスト",
        "level": "h3"
    },
    {
        "id": "9-確認問題解答付き",
        "text": "9. 確認問題（解答付き）",
        "level": "h2"
    },
    {
        "id": "10-用語集",
        "text": "10. 用語集",
        "level": "h2"
    },
    {
        "id": "11-参考url根拠ソース",
        "text": "11. 参考URL（根拠ソース）",
        "level": "h2"
    },
    {
        "id": "111-一次情報第7章の根拠",
        "text": "11.1 一次情報（第7章の根拠）",
        "level": "h3"
    },
    {
        "id": "112-補足の参考資料シラバス外ベストプラクティスの補強",
        "text": "11.2 補足の参考資料（シラバス外・ベストプラクティスの補強）",
        "level": "h3"
    }
] as const;

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState<string>('');
    const toggleRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(entries => {
            for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
        }, { rootMargin: '-15% 0px -75% 0px' });
        for (const item of TOC_ITEMS) {
            const target = document.getElementById(item.id);
            if (target) observer?.observe(target);
        }
        return () => observer?.disconnect();
    }, []);
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isOpen]);
    return <>
        <button type="button" ref={toggleRef} className="sidebar-toggle" id="sidebarToggle" aria-label="メニュー" aria-controls="sidebar" aria-expanded={isOpen} onClick={() => setIsOpen(value => !value)}>☰</button>
        <button type="button" className={`sidebar-scrim${isOpen ? " open" : ""}`} id="sidebarScrim" aria-label="目次を閉じる" aria-hidden={!isOpen} tabIndex={isOpen ? 0 : -1} onClick={() => { setIsOpen(false); toggleRef.current?.focus(); }} />
        <nav className={`sidebar${isOpen ? " open" : ""}`} id="sidebar">
            <div className="sidebar-brand">
                <div className="sidebar-brand-kicker">
                    {"CTAL-TAE v2.0 ｜ Ch.7"}
                </div>
                <div className="sidebar-brand-title">
                    {" Verifying the Test"}
                    <br />
                    {"Automation Solution "}
                </div>
            </div>
            <ul className="sidebar-nav">
                {TOC_ITEMS.map(item => (
                    <li key={item.id} className={`nav-${item.level}`}>
                        <a href={`#${item.id}`} data-target={item.id} className={active === item.id ? "active" : undefined} aria-current={active === item.id ? "location" : undefined} onClick={() => { setActive(item.id); setIsOpen(false); }}>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </>;
}
