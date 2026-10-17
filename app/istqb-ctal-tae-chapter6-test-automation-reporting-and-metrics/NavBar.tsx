'use client';

import React, { useEffect, useRef, useState } from 'react';

export const TOC_ITEMS = [
    {
        "id": "0-この章の全体像",
        "text": "0. この章の全体像"
    },
    {
        "id": "01-学習目標learning-objectives",
        "text": "0.1 学習目標（Learning Objectives）"
    },
    {
        "id": "02-章の流れ3ステップ",
        "text": "0.2 章の流れ（3ステップ）"
    },
    {
        "id": "03-データの流れ全体マップ",
        "text": "0.3 データの流れ（全体マップ）"
    },
    {
        "id": "1-最初に押さえる用語",
        "text": "1. 最初に押さえる用語"
    },
    {
        "id": "2-611-データ収集方法の適用k3",
        "text": "2. 6.1.1 データ収集方法の適用（K3）"
    },
    {
        "id": "21-ステップ1データ源を知る",
        "text": "2.1 ステップ1：データ源を知る"
    },
    {
        "id": "22-ステップ2テストウェアに記録機能を組み込む",
        "text": "2.2 ステップ2：テストウェアに記録機能を組み込む"
    },
    {
        "id": "23-ステップ3測定とレポート生成を支える機能を使う",
        "text": "2.3 ステップ3：測定とレポート生成を支える機能を使う"
    },
    {
        "id": "24-ステップ4テストロギングの設計",
        "text": "2.4 ステップ4：テストロギングの設計"
    },
    {
        "id": "25-ステップ5サードパーティツールとの連携と可視化",
        "text": "2.5 ステップ5：サードパーティツールとの連携と可視化"
    },
    {
        "id": "26-実践例コードで見る収集設定",
        "text": "2.6 実践例：コードで見る収集設定"
    },
    {
        "id": "27-この節のベストプラクティスまとめ",
        "text": "2.7 この節のベストプラクティス（まとめ）"
    },
    {
        "id": "3-612-データ分析による結果理解k4",
        "text": "3. 6.1.2 データ分析による結果理解（K4）"
    },
    {
        "id": "31-一次データと二次データ",
        "text": "3.1 一次データと二次データ"
    },
    {
        "id": "32-分析で見るもの",
        "text": "3.2 分析で見るもの"
    },
    {
        "id": "33-テスト実行失敗の分析手順5ステップ",
        "text": "3.3 テスト実行失敗の分析手順（5ステップ）"
    },
    {
        "id": "34-失敗したのに原因が見当たらないケース",
        "text": "3.4 「失敗したのに原因が見当たらない」ケース"
    },
    {
        "id": "35-相関-idトレース-idによる追跡",
        "text": "3.5 相関 ID（トレース ID）による追跡"
    },
    {
        "id": "36-原因の切り分け整理表実務上の整理",
        "text": "3.6 原因の切り分け整理表（実務上の整理）"
    },
    {
        "id": "37-この節のベストプラクティス",
        "text": "3.7 この節のベストプラクティス"
    },
    {
        "id": "4-613-テスト進捗レポートの作成と公開k2",
        "text": "4. 6.1.3 テスト進捗レポートの作成と公開（K2）"
    },
    {
        "id": "41-なぜログだけでは足りないのか",
        "text": "4.1 なぜログだけでは足りないのか"
    },
    {
        "id": "42-レポートの内容",
        "text": "4.2 レポートの内容"
    },
    {
        "id": "43-レポートの作成から公開までの流れ",
        "text": "4.3 レポートの作成から公開までの流れ"
    },
    {
        "id": "44-関係者ごとの関心",
        "text": "4.4 関係者ごとの関心"
    },
    {
        "id": "45-ダッシュボード",
        "text": "4.5 ダッシュボード"
    },
    {
        "id": "46-ai機械学習によるテストログ分析",
        "text": "4.6 AI／機械学習によるテストログ分析"
    },
    {
        "id": "47-メトリクスの例実務上の整理",
        "text": "4.7 メトリクスの例（実務上の整理）"
    },
    {
        "id": "48-この節のベストプラクティス",
        "text": "4.8 この節のベストプラクティス"
    },
    {
        "id": "5-項目別ベストプラクティス総まとめ",
        "text": "5. 項目別ベストプラクティス総まとめ"
    },
    {
        "id": "51-サービス機能別の使い分け例",
        "text": "5.1 サービス・機能別の使い分け（例）"
    },
    {
        "id": "52-611613-横断のチェックリスト",
        "text": "5.2 6.1.1〜6.1.3 横断のチェックリスト"
    },
    {
        "id": "53-他の章との関係",
        "text": "5.3 他の章との関係"
    },
    {
        "id": "6-試験対策ポイントと確認問題",
        "text": "6. 試験対策ポイントと確認問題"
    },
    {
        "id": "61-k-レベル別の出題イメージ",
        "text": "6.1 K レベル別の出題イメージ"
    },
    {
        "id": "62-覚えておくべき要点",
        "text": "6.2 覚えておくべき要点"
    },
    {
        "id": "63-確認問題",
        "text": "6.3 確認問題"
    },
    {
        "id": "7-学習チェックリスト",
        "text": "7. 学習チェックリスト"
    },
    {
        "id": "8-参考文献ソース-url",
        "text": "8. 参考文献・ソース URL"
    },
    {
        "id": "81-一次情報試験の根拠",
        "text": "8.1 一次情報（試験の根拠）"
    },
    {
        "id": "82-シラバスが参照する関連シラバス章内の言及",
        "text": "8.2 シラバスが参照する関連シラバス（章内の言及）"
    },
    {
        "id": "83-補足資料実務の例に関する参考情報試験範囲外",
        "text": "8.3 補足資料（実務の例に関する参考情報。試験範囲外）"
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
        <button type="button" ref={toggleRef} className="sb-toggle" id="sbToggle" aria-label="目次を開閉" aria-controls="sidebar" aria-expanded={isOpen} onClick={() => setIsOpen(value => !value)}>☰ 目次</button>
        <nav className={`sidebar${isOpen ? " open" : ""}`} id="sidebar">
            <p className="sb-title">
                {"CONTENTS"}
            </p>
            <ul>
                <li>
                    <a href="#0-この章の全体像" data-target="0-この章の全体像" className={active === "0-この章の全体像" ? "active" : undefined} aria-current={active === "0-この章の全体像" ? "location" : undefined} onClick={() => { setActive("0-この章の全体像"); setIsOpen(false); }}>
                        {"0. この章の全体像"}
                    </a>
                    <ul>
                        <li>
                            <a href="#01-学習目標learning-objectives" data-target="01-学習目標learning-objectives" className={active === "01-学習目標learning-objectives" ? "active" : undefined} aria-current={active === "01-学習目標learning-objectives" ? "location" : undefined} onClick={() => { setActive("01-学習目標learning-objectives"); setIsOpen(false); }}>
                                {"0.1 学習目標（Learning Objectives）"}
                            </a>
                        </li>
                        <li>
                            <a href="#02-章の流れ3ステップ" data-target="02-章の流れ3ステップ" className={active === "02-章の流れ3ステップ" ? "active" : undefined} aria-current={active === "02-章の流れ3ステップ" ? "location" : undefined} onClick={() => { setActive("02-章の流れ3ステップ"); setIsOpen(false); }}>
                                {"0.2 章の流れ（3ステップ）"}
                            </a>
                        </li>
                        <li>
                            <a href="#03-データの流れ全体マップ" data-target="03-データの流れ全体マップ" className={active === "03-データの流れ全体マップ" ? "active" : undefined} aria-current={active === "03-データの流れ全体マップ" ? "location" : undefined} onClick={() => { setActive("03-データの流れ全体マップ"); setIsOpen(false); }}>
                                {"0.3 データの流れ（全体マップ）"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#1-最初に押さえる用語" data-target="1-最初に押さえる用語" className={active === "1-最初に押さえる用語" ? "active" : undefined} aria-current={active === "1-最初に押さえる用語" ? "location" : undefined} onClick={() => { setActive("1-最初に押さえる用語"); setIsOpen(false); }}>
                        {"1. 最初に押さえる用語"}
                    </a>
                </li>
                <li>
                    <a href="#2-611-データ収集方法の適用k3" data-target="2-611-データ収集方法の適用k3" className={active === "2-611-データ収集方法の適用k3" ? "active" : undefined} aria-current={active === "2-611-データ収集方法の適用k3" ? "location" : undefined} onClick={() => { setActive("2-611-データ収集方法の適用k3"); setIsOpen(false); }}>
                        {"2. 6.1.1 データ収集方法の適用（K3）"}
                    </a>
                    <ul>
                        <li>
                            <a href="#21-ステップ1データ源を知る" data-target="21-ステップ1データ源を知る" className={active === "21-ステップ1データ源を知る" ? "active" : undefined} aria-current={active === "21-ステップ1データ源を知る" ? "location" : undefined} onClick={() => { setActive("21-ステップ1データ源を知る"); setIsOpen(false); }}>
                                {"2.1 ステップ1：データ源を知る"}
                            </a>
                        </li>
                        <li>
                            <a href="#22-ステップ2テストウェアに記録機能を組み込む" data-target="22-ステップ2テストウェアに記録機能を組み込む" className={active === "22-ステップ2テストウェアに記録機能を組み込む" ? "active" : undefined} aria-current={active === "22-ステップ2テストウェアに記録機能を組み込む" ? "location" : undefined} onClick={() => { setActive("22-ステップ2テストウェアに記録機能を組み込む"); setIsOpen(false); }}>
                                {"2.2 ステップ2：テストウェアに記録機能を組み込む"}
                            </a>
                        </li>
                        <li>
                            <a href="#23-ステップ3測定とレポート生成を支える機能を使う" data-target="23-ステップ3測定とレポート生成を支える機能を使う" className={active === "23-ステップ3測定とレポート生成を支える機能を使う" ? "active" : undefined} aria-current={active === "23-ステップ3測定とレポート生成を支える機能を使う" ? "location" : undefined} onClick={() => { setActive("23-ステップ3測定とレポート生成を支える機能を使う"); setIsOpen(false); }}>
                                {"2.3 ステップ3：測定とレポート生成を支える機能を使う"}
                            </a>
                        </li>
                        <li>
                            <a href="#24-ステップ4テストロギングの設計" data-target="24-ステップ4テストロギングの設計" className={active === "24-ステップ4テストロギングの設計" ? "active" : undefined} aria-current={active === "24-ステップ4テストロギングの設計" ? "location" : undefined} onClick={() => { setActive("24-ステップ4テストロギングの設計"); setIsOpen(false); }}>
                                {"2.4 ステップ4：テストロギングの設計"}
                            </a>
                        </li>
                        <li>
                            <a href="#25-ステップ5サードパーティツールとの連携と可視化" data-target="25-ステップ5サードパーティツールとの連携と可視化" className={active === "25-ステップ5サードパーティツールとの連携と可視化" ? "active" : undefined} aria-current={active === "25-ステップ5サードパーティツールとの連携と可視化" ? "location" : undefined} onClick={() => { setActive("25-ステップ5サードパーティツールとの連携と可視化"); setIsOpen(false); }}>
                                {"2.5 ステップ5：サードパーティツールとの連携と可視化"}
                            </a>
                        </li>
                        <li>
                            <a href="#26-実践例コードで見る収集設定" data-target="26-実践例コードで見る収集設定" className={active === "26-実践例コードで見る収集設定" ? "active" : undefined} aria-current={active === "26-実践例コードで見る収集設定" ? "location" : undefined} onClick={() => { setActive("26-実践例コードで見る収集設定"); setIsOpen(false); }}>
                                {"2.6 実践例：コードで見る収集設定"}
                            </a>
                        </li>
                        <li>
                            <a href="#27-この節のベストプラクティスまとめ" data-target="27-この節のベストプラクティスまとめ" className={active === "27-この節のベストプラクティスまとめ" ? "active" : undefined} aria-current={active === "27-この節のベストプラクティスまとめ" ? "location" : undefined} onClick={() => { setActive("27-この節のベストプラクティスまとめ"); setIsOpen(false); }}>
                                {"2.7 この節のベストプラクティス（まとめ）"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#3-612-データ分析による結果理解k4" data-target="3-612-データ分析による結果理解k4" className={active === "3-612-データ分析による結果理解k4" ? "active" : undefined} aria-current={active === "3-612-データ分析による結果理解k4" ? "location" : undefined} onClick={() => { setActive("3-612-データ分析による結果理解k4"); setIsOpen(false); }}>
                        {"3. 6.1.2 データ分析による結果理解（K4）"}
                    </a>
                    <ul>
                        <li>
                            <a href="#31-一次データと二次データ" data-target="31-一次データと二次データ" className={active === "31-一次データと二次データ" ? "active" : undefined} aria-current={active === "31-一次データと二次データ" ? "location" : undefined} onClick={() => { setActive("31-一次データと二次データ"); setIsOpen(false); }}>
                                {"3.1 一次データと二次データ"}
                            </a>
                        </li>
                        <li>
                            <a href="#32-分析で見るもの" data-target="32-分析で見るもの" className={active === "32-分析で見るもの" ? "active" : undefined} aria-current={active === "32-分析で見るもの" ? "location" : undefined} onClick={() => { setActive("32-分析で見るもの"); setIsOpen(false); }}>
                                {"3.2 分析で見るもの"}
                            </a>
                        </li>
                        <li>
                            <a href="#33-テスト実行失敗の分析手順5ステップ" data-target="33-テスト実行失敗の分析手順5ステップ" className={active === "33-テスト実行失敗の分析手順5ステップ" ? "active" : undefined} aria-current={active === "33-テスト実行失敗の分析手順5ステップ" ? "location" : undefined} onClick={() => { setActive("33-テスト実行失敗の分析手順5ステップ"); setIsOpen(false); }}>
                                {"3.3 テスト実行失敗の分析手順（5ステップ）"}
                            </a>
                        </li>
                        <li>
                            <a href="#34-失敗したのに原因が見当たらないケース" data-target="34-失敗したのに原因が見当たらないケース" className={active === "34-失敗したのに原因が見当たらないケース" ? "active" : undefined} aria-current={active === "34-失敗したのに原因が見当たらないケース" ? "location" : undefined} onClick={() => { setActive("34-失敗したのに原因が見当たらないケース"); setIsOpen(false); }}>
                                {"3.4 「失敗したのに原因が見当たらない」ケース"}
                            </a>
                        </li>
                        <li>
                            <a href="#35-相関-idトレース-idによる追跡" data-target="35-相関-idトレース-idによる追跡" className={active === "35-相関-idトレース-idによる追跡" ? "active" : undefined} aria-current={active === "35-相関-idトレース-idによる追跡" ? "location" : undefined} onClick={() => { setActive("35-相関-idトレース-idによる追跡"); setIsOpen(false); }}>
                                {"3.5 相関 ID（トレース ID）による追跡"}
                            </a>
                        </li>
                        <li>
                            <a href="#36-原因の切り分け整理表実務上の整理" data-target="36-原因の切り分け整理表実務上の整理" className={active === "36-原因の切り分け整理表実務上の整理" ? "active" : undefined} aria-current={active === "36-原因の切り分け整理表実務上の整理" ? "location" : undefined} onClick={() => { setActive("36-原因の切り分け整理表実務上の整理"); setIsOpen(false); }}>
                                {"3.6 原因の切り分け整理表（実務上の整理）"}
                            </a>
                        </li>
                        <li>
                            <a href="#37-この節のベストプラクティス" data-target="37-この節のベストプラクティス" className={active === "37-この節のベストプラクティス" ? "active" : undefined} aria-current={active === "37-この節のベストプラクティス" ? "location" : undefined} onClick={() => { setActive("37-この節のベストプラクティス"); setIsOpen(false); }}>
                                {"3.7 この節のベストプラクティス"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#4-613-テスト進捗レポートの作成と公開k2" data-target="4-613-テスト進捗レポートの作成と公開k2" className={active === "4-613-テスト進捗レポートの作成と公開k2" ? "active" : undefined} aria-current={active === "4-613-テスト進捗レポートの作成と公開k2" ? "location" : undefined} onClick={() => { setActive("4-613-テスト進捗レポートの作成と公開k2"); setIsOpen(false); }}>
                        {"4. 6.1.3 テスト進捗レポートの作成と公開（K2）"}
                    </a>
                    <ul>
                        <li>
                            <a href="#41-なぜログだけでは足りないのか" data-target="41-なぜログだけでは足りないのか" className={active === "41-なぜログだけでは足りないのか" ? "active" : undefined} aria-current={active === "41-なぜログだけでは足りないのか" ? "location" : undefined} onClick={() => { setActive("41-なぜログだけでは足りないのか"); setIsOpen(false); }}>
                                {"4.1 なぜログだけでは足りないのか"}
                            </a>
                        </li>
                        <li>
                            <a href="#42-レポートの内容" data-target="42-レポートの内容" className={active === "42-レポートの内容" ? "active" : undefined} aria-current={active === "42-レポートの内容" ? "location" : undefined} onClick={() => { setActive("42-レポートの内容"); setIsOpen(false); }}>
                                {"4.2 レポートの内容"}
                            </a>
                        </li>
                        <li>
                            <a href="#43-レポートの作成から公開までの流れ" data-target="43-レポートの作成から公開までの流れ" className={active === "43-レポートの作成から公開までの流れ" ? "active" : undefined} aria-current={active === "43-レポートの作成から公開までの流れ" ? "location" : undefined} onClick={() => { setActive("43-レポートの作成から公開までの流れ"); setIsOpen(false); }}>
                                {"4.3 レポートの作成から公開までの流れ"}
                            </a>
                        </li>
                        <li>
                            <a href="#44-関係者ごとの関心" data-target="44-関係者ごとの関心" className={active === "44-関係者ごとの関心" ? "active" : undefined} aria-current={active === "44-関係者ごとの関心" ? "location" : undefined} onClick={() => { setActive("44-関係者ごとの関心"); setIsOpen(false); }}>
                                {"4.4 関係者ごとの関心"}
                            </a>
                        </li>
                        <li>
                            <a href="#45-ダッシュボード" data-target="45-ダッシュボード" className={active === "45-ダッシュボード" ? "active" : undefined} aria-current={active === "45-ダッシュボード" ? "location" : undefined} onClick={() => { setActive("45-ダッシュボード"); setIsOpen(false); }}>
                                {"4.5 ダッシュボード"}
                            </a>
                        </li>
                        <li>
                            <a href="#46-ai機械学習によるテストログ分析" data-target="46-ai機械学習によるテストログ分析" className={active === "46-ai機械学習によるテストログ分析" ? "active" : undefined} aria-current={active === "46-ai機械学習によるテストログ分析" ? "location" : undefined} onClick={() => { setActive("46-ai機械学習によるテストログ分析"); setIsOpen(false); }}>
                                {"4.6 AI／機械学習によるテストログ分析"}
                            </a>
                        </li>
                        <li>
                            <a href="#47-メトリクスの例実務上の整理" data-target="47-メトリクスの例実務上の整理" className={active === "47-メトリクスの例実務上の整理" ? "active" : undefined} aria-current={active === "47-メトリクスの例実務上の整理" ? "location" : undefined} onClick={() => { setActive("47-メトリクスの例実務上の整理"); setIsOpen(false); }}>
                                {"4.7 メトリクスの例（実務上の整理）"}
                            </a>
                        </li>
                        <li>
                            <a href="#48-この節のベストプラクティス" data-target="48-この節のベストプラクティス" className={active === "48-この節のベストプラクティス" ? "active" : undefined} aria-current={active === "48-この節のベストプラクティス" ? "location" : undefined} onClick={() => { setActive("48-この節のベストプラクティス"); setIsOpen(false); }}>
                                {"4.8 この節のベストプラクティス"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#5-項目別ベストプラクティス総まとめ" data-target="5-項目別ベストプラクティス総まとめ" className={active === "5-項目別ベストプラクティス総まとめ" ? "active" : undefined} aria-current={active === "5-項目別ベストプラクティス総まとめ" ? "location" : undefined} onClick={() => { setActive("5-項目別ベストプラクティス総まとめ"); setIsOpen(false); }}>
                        {"5. 項目別ベストプラクティス総まとめ"}
                    </a>
                    <ul>
                        <li>
                            <a href="#51-サービス機能別の使い分け例" data-target="51-サービス機能別の使い分け例" className={active === "51-サービス機能別の使い分け例" ? "active" : undefined} aria-current={active === "51-サービス機能別の使い分け例" ? "location" : undefined} onClick={() => { setActive("51-サービス機能別の使い分け例"); setIsOpen(false); }}>
                                {"5.1 サービス・機能別の使い分け（例）"}
                            </a>
                        </li>
                        <li>
                            <a href="#52-611613-横断のチェックリスト" data-target="52-611613-横断のチェックリスト" className={active === "52-611613-横断のチェックリスト" ? "active" : undefined} aria-current={active === "52-611613-横断のチェックリスト" ? "location" : undefined} onClick={() => { setActive("52-611613-横断のチェックリスト"); setIsOpen(false); }}>
                                {"5.2 6.1.1〜6.1.3 横断のチェックリスト"}
                            </a>
                        </li>
                        <li>
                            <a href="#53-他の章との関係" data-target="53-他の章との関係" className={active === "53-他の章との関係" ? "active" : undefined} aria-current={active === "53-他の章との関係" ? "location" : undefined} onClick={() => { setActive("53-他の章との関係"); setIsOpen(false); }}>
                                {"5.3 他の章との関係"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#6-試験対策ポイントと確認問題" data-target="6-試験対策ポイントと確認問題" className={active === "6-試験対策ポイントと確認問題" ? "active" : undefined} aria-current={active === "6-試験対策ポイントと確認問題" ? "location" : undefined} onClick={() => { setActive("6-試験対策ポイントと確認問題"); setIsOpen(false); }}>
                        {"6. 試験対策ポイントと確認問題"}
                    </a>
                    <ul>
                        <li>
                            <a href="#61-k-レベル別の出題イメージ" data-target="61-k-レベル別の出題イメージ" className={active === "61-k-レベル別の出題イメージ" ? "active" : undefined} aria-current={active === "61-k-レベル別の出題イメージ" ? "location" : undefined} onClick={() => { setActive("61-k-レベル別の出題イメージ"); setIsOpen(false); }}>
                                {"6.1 K レベル別の出題イメージ"}
                            </a>
                        </li>
                        <li>
                            <a href="#62-覚えておくべき要点" data-target="62-覚えておくべき要点" className={active === "62-覚えておくべき要点" ? "active" : undefined} aria-current={active === "62-覚えておくべき要点" ? "location" : undefined} onClick={() => { setActive("62-覚えておくべき要点"); setIsOpen(false); }}>
                                {"6.2 覚えておくべき要点"}
                            </a>
                        </li>
                        <li>
                            <a href="#63-確認問題" data-target="63-確認問題" className={active === "63-確認問題" ? "active" : undefined} aria-current={active === "63-確認問題" ? "location" : undefined} onClick={() => { setActive("63-確認問題"); setIsOpen(false); }}>
                                {"6.3 確認問題"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#7-学習チェックリスト" data-target="7-学習チェックリスト" className={active === "7-学習チェックリスト" ? "active" : undefined} aria-current={active === "7-学習チェックリスト" ? "location" : undefined} onClick={() => { setActive("7-学習チェックリスト"); setIsOpen(false); }}>
                        {"7. 学習チェックリスト"}
                    </a>
                </li>
                <li>
                    <a href="#8-参考文献ソース-url" data-target="8-参考文献ソース-url" className={active === "8-参考文献ソース-url" ? "active" : undefined} aria-current={active === "8-参考文献ソース-url" ? "location" : undefined} onClick={() => { setActive("8-参考文献ソース-url"); setIsOpen(false); }}>
                        {"8. 参考文献・ソース URL"}
                    </a>
                    <ul>
                        <li>
                            <a href="#81-一次情報試験の根拠" data-target="81-一次情報試験の根拠" className={active === "81-一次情報試験の根拠" ? "active" : undefined} aria-current={active === "81-一次情報試験の根拠" ? "location" : undefined} onClick={() => { setActive("81-一次情報試験の根拠"); setIsOpen(false); }}>
                                {"8.1 一次情報（試験の根拠）"}
                            </a>
                        </li>
                        <li>
                            <a href="#82-シラバスが参照する関連シラバス章内の言及" data-target="82-シラバスが参照する関連シラバス章内の言及" className={active === "82-シラバスが参照する関連シラバス章内の言及" ? "active" : undefined} aria-current={active === "82-シラバスが参照する関連シラバス章内の言及" ? "location" : undefined} onClick={() => { setActive("82-シラバスが参照する関連シラバス章内の言及"); setIsOpen(false); }}>
                                {"8.2 シラバスが参照する関連シラバス（章内の言及）"}
                            </a>
                        </li>
                        <li>
                            <a href="#83-補足資料実務の例に関する参考情報試験範囲外" data-target="83-補足資料実務の例に関する参考情報試験範囲外" className={active === "83-補足資料実務の例に関する参考情報試験範囲外" ? "active" : undefined} aria-current={active === "83-補足資料実務の例に関する参考情報試験範囲外" ? "location" : undefined} onClick={() => { setActive("83-補足資料実務の例に関する参考情報試験範囲外"); setIsOpen(false); }}>
                                {"8.3 補足資料（実務の例に関する参考情報。試験範囲外）"}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>;
}
