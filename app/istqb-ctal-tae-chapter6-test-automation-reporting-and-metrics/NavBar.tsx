'use client';

import React, { useEffect, useRef, useState } from 'react';

type TocItem = {
    readonly id: string;
    readonly text: string;
    readonly children?: readonly TocItem[];
};

// 目次の唯一の情報源。描画と IntersectionObserver の監視対象をここから導出する
export const TOC_ITEMS: readonly TocItem[] = [
    {
        id: "0-この章の全体像", text: "0. この章の全体像",
        children: [
            { id: "01-学習目標learning-objectives", text: "0.1 学習目標（Learning Objectives）" },
            { id: "02-章の流れ3ステップ", text: "0.2 章の流れ（3ステップ）" },
            { id: "03-データの流れ全体マップ", text: "0.3 データの流れ（全体マップ）" },
        ],
    },
    { id: "1-最初に押さえる用語", text: "1. 最初に押さえる用語" },
    {
        id: "2-611-データ収集方法の適用k3", text: "2. 6.1.1 データ収集方法の適用（K3）",
        children: [
            { id: "21-ステップ1データ源を知る", text: "2.1 ステップ1：データ源を知る" },
            { id: "22-ステップ2テストウェアに記録機能を組み込む", text: "2.2 ステップ2：テストウェアに記録機能を組み込む" },
            { id: "23-ステップ3測定とレポート生成を支える機能を使う", text: "2.3 ステップ3：測定とレポート生成を支える機能を使う" },
            { id: "24-ステップ4テストロギングの設計", text: "2.4 ステップ4：テストロギングの設計" },
            { id: "25-ステップ5サードパーティツールとの連携と可視化", text: "2.5 ステップ5：サードパーティツールとの連携と可視化" },
            { id: "26-実践例コードで見る収集設定", text: "2.6 実践例：コードで見る収集設定" },
            { id: "27-この節のベストプラクティスまとめ", text: "2.7 この節のベストプラクティス（まとめ）" },
        ],
    },
    {
        id: "3-612-データ分析による結果理解k4", text: "3. 6.1.2 データ分析による結果理解（K4）",
        children: [
            { id: "31-一次データと二次データ", text: "3.1 一次データと二次データ" },
            { id: "32-分析で見るもの", text: "3.2 分析で見るもの" },
            { id: "33-テスト実行失敗の分析手順5ステップ", text: "3.3 テスト実行失敗の分析手順（5ステップ）" },
            { id: "34-失敗したのに原因が見当たらないケース", text: "3.4 「失敗したのに原因が見当たらない」ケース" },
            { id: "35-相関-idトレース-idによる追跡", text: "3.5 相関 ID（トレース ID）による追跡" },
            { id: "36-原因の切り分け整理表実務上の整理", text: "3.6 原因の切り分け整理表（実務上の整理）" },
            { id: "37-この節のベストプラクティス", text: "3.7 この節のベストプラクティス" },
        ],
    },
    {
        id: "4-613-テスト進捗レポートの作成と公開k2", text: "4. 6.1.3 テスト進捗レポートの作成と公開（K2）",
        children: [
            { id: "41-なぜログだけでは足りないのか", text: "4.1 なぜログだけでは足りないのか" },
            { id: "42-レポートの内容", text: "4.2 レポートの内容" },
            { id: "43-レポートの作成から公開までの流れ", text: "4.3 レポートの作成から公開までの流れ" },
            { id: "44-関係者ごとの関心", text: "4.4 関係者ごとの関心" },
            { id: "45-ダッシュボード", text: "4.5 ダッシュボード" },
            { id: "46-ai機械学習によるテストログ分析", text: "4.6 AI／機械学習によるテストログ分析" },
            { id: "47-メトリクスの例実務上の整理", text: "4.7 メトリクスの例（実務上の整理）" },
            { id: "48-この節のベストプラクティス", text: "4.8 この節のベストプラクティス" },
        ],
    },
    {
        id: "5-項目別ベストプラクティス総まとめ", text: "5. 項目別ベストプラクティス総まとめ",
        children: [
            { id: "51-サービス機能別の使い分け例", text: "5.1 サービス・機能別の使い分け（例）" },
            { id: "52-611613-横断のチェックリスト", text: "5.2 6.1.1〜6.1.3 横断のチェックリスト" },
            { id: "53-他の章との関係", text: "5.3 他の章との関係" },
        ],
    },
    {
        id: "6-試験対策ポイントと確認問題", text: "6. 試験対策ポイントと確認問題",
        children: [
            { id: "61-k-レベル別の出題イメージ", text: "6.1 K レベル別の出題イメージ" },
            { id: "62-覚えておくべき要点", text: "6.2 覚えておくべき要点" },
            { id: "63-確認問題", text: "6.3 確認問題" },
        ],
    },
    { id: "7-学習チェックリスト", text: "7. 学習チェックリスト" },
    {
        id: "8-参考文献ソース-url", text: "8. 参考文献・ソース URL",
        children: [
            { id: "81-一次情報試験の根拠", text: "8.1 一次情報（試験の根拠）" },
            { id: "82-シラバスが参照する関連シラバス章内の言及", text: "8.2 シラバスが参照する関連シラバス（章内の言及）" },
            { id: "83-補足資料実務の例に関する参考情報試験範囲外", text: "8.3 補足資料（実務の例に関する参考情報。試験範囲外）" },
        ],
    },
];

const flattenIds = (items: readonly TocItem[]): string[] =>
    items.flatMap(item => [item.id, ...flattenIds(item.children ?? [])]);

const TOC_IDS = flattenIds(TOC_ITEMS);

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState<string>('');
    const toggleRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(entries => {
            for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
        }, { rootMargin: '-15% 0px -75% 0px' });
        for (const id of TOC_IDS) {
            const target = document.getElementById(id);
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
    const select = (id: string) => {
        setActive(id);
        setIsOpen(false);
    };
    const renderList = (items: readonly TocItem[]) => <ul>
        {items.map(item => <li key={item.id}>
            <a href={`#${item.id}`} data-target={item.id} className={active === item.id ? "active" : undefined} aria-current={active === item.id ? "location" : undefined} onClick={() => select(item.id)}>
                {item.text}
            </a>
            {item.children && renderList(item.children)}
        </li>)}
    </ul>;
    return <>
        <button type="button" ref={toggleRef} className="sb-toggle" id="sbToggle" aria-label="目次を開閉" aria-controls="sidebar" aria-expanded={isOpen} onClick={() => setIsOpen(value => !value)}>☰ 目次</button>
        <nav className={`sidebar${isOpen ? " open" : ""}`} id="sidebar">
            <p className="sb-title">
                {"CONTENTS"}
            </p>
            {renderList(TOC_ITEMS)}
        </nav>
    </>;
}
