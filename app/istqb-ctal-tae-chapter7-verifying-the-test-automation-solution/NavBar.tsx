'use client';

import React, { useEffect, useRef, useState } from 'react';

export const TOC_ITEMS = [
    {
        "id": "1-この章の全体像",
        "text": "1. この章の全体像"
    },
    {
        "id": "11-この章で学ぶこと",
        "text": "1.1 この章で学ぶこと"
    },
    {
        "id": "12-学習目標learning-objectives",
        "text": "1.2 学習目標（Learning Objectives）"
    },
    {
        "id": "13-全体マップ",
        "text": "1.3 全体マップ"
    },
    {
        "id": "2-前提知識と用語の整理",
        "text": "2. 前提知識と用語の整理"
    },
    {
        "id": "21-sut-のテストとtas-の検証の違い",
        "text": "2.1 「SUT のテスト」と「TAS の検証」の違い"
    },
    {
        "id": "3-711-テスト自動化環境ツールのセットアップを含むの検証を計画するk3",
        "text": "3. 7.1.1 テスト自動化環境（ツールのセットアップを含む）の検証を計画する（K3）"
    },
    {
        "id": "31-なぜ環境の検証が必要か",
        "text": "3.1 なぜ環境の検証が必要か"
    },
    {
        "id": "32-検証の進め方全体フロー",
        "text": "3.2 検証の進め方（全体フロー）"
    },
    {
        "id": "33-観点1テストツールのインストールセットアップ構成カスタマイズ",
        "text": "3.3 観点1：テストツールのインストール・セットアップ・構成・カスタマイズ"
    },
    {
        "id": "34-観点2テスト環境のセットアップティアダウンの再現性",
        "text": "3.4 観点2：テスト環境のセットアップ／ティアダウンの再現性"
    },
    {
        "id": "35-観点3内部外部システムインターフェースとの接続性",
        "text": "3.5 観点3：内部・外部システム／インターフェースとの接続性"
    },
    {
        "id": "36-観点4taf-コンポーネントのテスト",
        "text": "3.6 観点4：TAF コンポーネントのテスト"
    },
    {
        "id": "37-k3-として試験に出やすい形",
        "text": "3.7 K3 として試験に出やすい形"
    },
    {
        "id": "4-712-自動テストスクリプトスイートの正しい振る舞いを説明するk2",
        "text": "4. 7.1.2 自動テストスクリプト／スイートの正しい振る舞いを説明する（K2）"
    },
    {
        "id": "41-何を確認するか",
        "text": "4.1 何を確認するか"
    },
    {
        "id": "42-項目1テストスイートの構成を確認する",
        "text": "4.2 項目1：テストスイートの構成を確認する"
    },
    {
        "id": "43-項目2taf-の新機能に焦点を当てた新しいテストの検証",
        "text": "4.3 項目2：TAF の新機能に焦点を当てた新しいテストの検証"
    },
    {
        "id": "44-項目3テストの再現性repeatability",
        "text": "4.4 項目3：テストの再現性（Repeatability）"
    },
    {
        "id": "45-項目4自動テストツールの侵入性intrusiveness",
        "text": "4.5 項目4：自動テストツールの侵入性（Intrusiveness）"
    },
    {
        "id": "5-713-テスト自動化が予期しない結果を出す箇所を特定するk2",
        "text": "5. 7.1.3 テスト自動化が予期しない結果を出す箇所を特定する（K2）"
    },
    {
        "id": "51-何を確認するか",
        "text": "5.1 何を確認するか"
    },
    {
        "id": "52-予期しないは失敗だけではない",
        "text": "5.2 「予期しない」は失敗だけではない"
    },
    {
        "id": "53-不具合が潜みうる場所",
        "text": "5.3 不具合が潜みうる場所"
    },
    {
        "id": "54-調査の進め方",
        "text": "5.4 調査の進め方"
    },
    {
        "id": "6-714-静的解析がテスト自動化コードの品質向上にどう役立つかk2",
        "text": "6. 7.1.4 静的解析がテスト自動化コードの品質向上にどう役立つか（K2）"
    },
    {
        "id": "61-静的解析とは",
        "text": "6.1 静的解析とは"
    },
    {
        "id": "62-静的解析の出力と支援機能",
        "text": "6.2 静的解析の出力と支援機能"
    },
    {
        "id": "63-なぜテスト自動化コードにも静的解析が必要か",
        "text": "6.3 なぜ「テスト自動化コード」にも静的解析が必要か"
    },
    {
        "id": "64-パイプラインへの組み込み",
        "text": "6.4 パイプラインへの組み込み"
    },
    {
        "id": "7-ベストプラクティス総まとめ",
        "text": "7. ベストプラクティス総まとめ"
    },
    {
        "id": "8-試験対策ポイント",
        "text": "8. 試験対策ポイント"
    },
    {
        "id": "81-出題の構造",
        "text": "8.1 出題の構造"
    },
    {
        "id": "82-間違えやすいポイント",
        "text": "8.2 間違えやすいポイント"
    },
    {
        "id": "83-暗記用チェックリスト",
        "text": "8.3 暗記用チェックリスト"
    },
    {
        "id": "9-確認問題解答付き",
        "text": "9. 確認問題（解答付き）"
    },
    {
        "id": "10-用語集",
        "text": "10. 用語集"
    },
    {
        "id": "11-参考url根拠ソース",
        "text": "11. 参考URL（根拠ソース）"
    },
    {
        "id": "111-一次情報第7章の根拠",
        "text": "11.1 一次情報（第7章の根拠）"
    },
    {
        "id": "112-補足の参考資料シラバス外ベストプラクティスの補強",
        "text": "11.2 補足の参考資料（シラバス外・ベストプラクティスの補強）"
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
                <li className="nav-h2">
                    <a href="#1-この章の全体像" data-target="1-この章の全体像" className={active === "1-この章の全体像" ? "active" : undefined} aria-current={active === "1-この章の全体像" ? "location" : undefined} onClick={() => { setActive("1-この章の全体像"); setIsOpen(false); }}>
                        {"1. この章の全体像"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#11-この章で学ぶこと" data-target="11-この章で学ぶこと" className={active === "11-この章で学ぶこと" ? "active" : undefined} aria-current={active === "11-この章で学ぶこと" ? "location" : undefined} onClick={() => { setActive("11-この章で学ぶこと"); setIsOpen(false); }}>
                        {"1.1 この章で学ぶこと"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#12-学習目標learning-objectives" data-target="12-学習目標learning-objectives" className={active === "12-学習目標learning-objectives" ? "active" : undefined} aria-current={active === "12-学習目標learning-objectives" ? "location" : undefined} onClick={() => { setActive("12-学習目標learning-objectives"); setIsOpen(false); }}>
                        {"1.2 学習目標（Learning Objectives）"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#13-全体マップ" data-target="13-全体マップ" className={active === "13-全体マップ" ? "active" : undefined} aria-current={active === "13-全体マップ" ? "location" : undefined} onClick={() => { setActive("13-全体マップ"); setIsOpen(false); }}>
                        {"1.3 全体マップ"}
                    </a>
                </li>
                <li className="nav-h2">
                    <a href="#2-前提知識と用語の整理" data-target="2-前提知識と用語の整理" className={active === "2-前提知識と用語の整理" ? "active" : undefined} aria-current={active === "2-前提知識と用語の整理" ? "location" : undefined} onClick={() => { setActive("2-前提知識と用語の整理"); setIsOpen(false); }}>
                        {"2. 前提知識と用語の整理"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#21-sut-のテストとtas-の検証の違い" data-target="21-sut-のテストとtas-の検証の違い" className={active === "21-sut-のテストとtas-の検証の違い" ? "active" : undefined} aria-current={active === "21-sut-のテストとtas-の検証の違い" ? "location" : undefined} onClick={() => { setActive("21-sut-のテストとtas-の検証の違い"); setIsOpen(false); }}>
                        {"2.1 「SUT のテスト」と「TAS の検証」の違い"}
                    </a>
                </li>
                <li className="nav-h2">
                    <a href="#3-711-テスト自動化環境ツールのセットアップを含むの検証を計画するk3" data-target="3-711-テスト自動化環境ツールのセットアップを含むの検証を計画するk3" className={active === "3-711-テスト自動化環境ツールのセットアップを含むの検証を計画するk3" ? "active" : undefined} aria-current={active === "3-711-テスト自動化環境ツールのセットアップを含むの検証を計画するk3" ? "location" : undefined} onClick={() => { setActive("3-711-テスト自動化環境ツールのセットアップを含むの検証を計画するk3"); setIsOpen(false); }}>
                        {"3. 7.1.1 テスト自動化環境（ツールのセットアップを含む）の検証を計画する（K3）"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#31-なぜ環境の検証が必要か" data-target="31-なぜ環境の検証が必要か" className={active === "31-なぜ環境の検証が必要か" ? "active" : undefined} aria-current={active === "31-なぜ環境の検証が必要か" ? "location" : undefined} onClick={() => { setActive("31-なぜ環境の検証が必要か"); setIsOpen(false); }}>
                        {"3.1 なぜ環境の検証が必要か"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#32-検証の進め方全体フロー" data-target="32-検証の進め方全体フロー" className={active === "32-検証の進め方全体フロー" ? "active" : undefined} aria-current={active === "32-検証の進め方全体フロー" ? "location" : undefined} onClick={() => { setActive("32-検証の進め方全体フロー"); setIsOpen(false); }}>
                        {"3.2 検証の進め方（全体フロー）"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#33-観点1テストツールのインストールセットアップ構成カスタマイズ" data-target="33-観点1テストツールのインストールセットアップ構成カスタマイズ" className={active === "33-観点1テストツールのインストールセットアップ構成カスタマイズ" ? "active" : undefined} aria-current={active === "33-観点1テストツールのインストールセットアップ構成カスタマイズ" ? "location" : undefined} onClick={() => { setActive("33-観点1テストツールのインストールセットアップ構成カスタマイズ"); setIsOpen(false); }}>
                        {"3.3 観点1：テストツールのインストール・セットアップ・構成・カスタマイズ"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#34-観点2テスト環境のセットアップティアダウンの再現性" data-target="34-観点2テスト環境のセットアップティアダウンの再現性" className={active === "34-観点2テスト環境のセットアップティアダウンの再現性" ? "active" : undefined} aria-current={active === "34-観点2テスト環境のセットアップティアダウンの再現性" ? "location" : undefined} onClick={() => { setActive("34-観点2テスト環境のセットアップティアダウンの再現性"); setIsOpen(false); }}>
                        {"3.4 観点2：テスト環境のセットアップ／ティアダウンの再現性"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#35-観点3内部外部システムインターフェースとの接続性" data-target="35-観点3内部外部システムインターフェースとの接続性" className={active === "35-観点3内部外部システムインターフェースとの接続性" ? "active" : undefined} aria-current={active === "35-観点3内部外部システムインターフェースとの接続性" ? "location" : undefined} onClick={() => { setActive("35-観点3内部外部システムインターフェースとの接続性"); setIsOpen(false); }}>
                        {"3.5 観点3：内部・外部システム／インターフェースとの接続性"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#36-観点4taf-コンポーネントのテスト" data-target="36-観点4taf-コンポーネントのテスト" className={active === "36-観点4taf-コンポーネントのテスト" ? "active" : undefined} aria-current={active === "36-観点4taf-コンポーネントのテスト" ? "location" : undefined} onClick={() => { setActive("36-観点4taf-コンポーネントのテスト"); setIsOpen(false); }}>
                        {"3.6 観点4：TAF コンポーネントのテスト"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#37-k3-として試験に出やすい形" data-target="37-k3-として試験に出やすい形" className={active === "37-k3-として試験に出やすい形" ? "active" : undefined} aria-current={active === "37-k3-として試験に出やすい形" ? "location" : undefined} onClick={() => { setActive("37-k3-として試験に出やすい形"); setIsOpen(false); }}>
                        {"3.7 K3 として試験に出やすい形"}
                    </a>
                </li>
                <li className="nav-h2">
                    <a href="#4-712-自動テストスクリプトスイートの正しい振る舞いを説明するk2" data-target="4-712-自動テストスクリプトスイートの正しい振る舞いを説明するk2" className={active === "4-712-自動テストスクリプトスイートの正しい振る舞いを説明するk2" ? "active" : undefined} aria-current={active === "4-712-自動テストスクリプトスイートの正しい振る舞いを説明するk2" ? "location" : undefined} onClick={() => { setActive("4-712-自動テストスクリプトスイートの正しい振る舞いを説明するk2"); setIsOpen(false); }}>
                        {"4. 7.1.2 自動テストスクリプト／スイートの正しい振る舞いを説明する（K2）"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#41-何を確認するか" data-target="41-何を確認するか" className={active === "41-何を確認するか" ? "active" : undefined} aria-current={active === "41-何を確認するか" ? "location" : undefined} onClick={() => { setActive("41-何を確認するか"); setIsOpen(false); }}>
                        {"4.1 何を確認するか"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#42-項目1テストスイートの構成を確認する" data-target="42-項目1テストスイートの構成を確認する" className={active === "42-項目1テストスイートの構成を確認する" ? "active" : undefined} aria-current={active === "42-項目1テストスイートの構成を確認する" ? "location" : undefined} onClick={() => { setActive("42-項目1テストスイートの構成を確認する"); setIsOpen(false); }}>
                        {"4.2 項目1：テストスイートの構成を確認する"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#43-項目2taf-の新機能に焦点を当てた新しいテストの検証" data-target="43-項目2taf-の新機能に焦点を当てた新しいテストの検証" className={active === "43-項目2taf-の新機能に焦点を当てた新しいテストの検証" ? "active" : undefined} aria-current={active === "43-項目2taf-の新機能に焦点を当てた新しいテストの検証" ? "location" : undefined} onClick={() => { setActive("43-項目2taf-の新機能に焦点を当てた新しいテストの検証"); setIsOpen(false); }}>
                        {"4.3 項目2：TAF の新機能に焦点を当てた新しいテストの検証"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#44-項目3テストの再現性repeatability" data-target="44-項目3テストの再現性repeatability" className={active === "44-項目3テストの再現性repeatability" ? "active" : undefined} aria-current={active === "44-項目3テストの再現性repeatability" ? "location" : undefined} onClick={() => { setActive("44-項目3テストの再現性repeatability"); setIsOpen(false); }}>
                        {"4.4 項目3：テストの再現性（Repeatability）"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#45-項目4自動テストツールの侵入性intrusiveness" data-target="45-項目4自動テストツールの侵入性intrusiveness" className={active === "45-項目4自動テストツールの侵入性intrusiveness" ? "active" : undefined} aria-current={active === "45-項目4自動テストツールの侵入性intrusiveness" ? "location" : undefined} onClick={() => { setActive("45-項目4自動テストツールの侵入性intrusiveness"); setIsOpen(false); }}>
                        {"4.5 項目4：自動テストツールの侵入性（Intrusiveness）"}
                    </a>
                </li>
                <li className="nav-h2">
                    <a href="#5-713-テスト自動化が予期しない結果を出す箇所を特定するk2" data-target="5-713-テスト自動化が予期しない結果を出す箇所を特定するk2" className={active === "5-713-テスト自動化が予期しない結果を出す箇所を特定するk2" ? "active" : undefined} aria-current={active === "5-713-テスト自動化が予期しない結果を出す箇所を特定するk2" ? "location" : undefined} onClick={() => { setActive("5-713-テスト自動化が予期しない結果を出す箇所を特定するk2"); setIsOpen(false); }}>
                        {"5. 7.1.3 テスト自動化が予期しない結果を出す箇所を特定する（K2）"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#51-何を確認するか" data-target="51-何を確認するか" className={active === "51-何を確認するか" ? "active" : undefined} aria-current={active === "51-何を確認するか" ? "location" : undefined} onClick={() => { setActive("51-何を確認するか"); setIsOpen(false); }}>
                        {"5.1 何を確認するか"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#52-予期しないは失敗だけではない" data-target="52-予期しないは失敗だけではない" className={active === "52-予期しないは失敗だけではない" ? "active" : undefined} aria-current={active === "52-予期しないは失敗だけではない" ? "location" : undefined} onClick={() => { setActive("52-予期しないは失敗だけではない"); setIsOpen(false); }}>
                        {"5.2 「予期しない」は失敗だけではない"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#53-不具合が潜みうる場所" data-target="53-不具合が潜みうる場所" className={active === "53-不具合が潜みうる場所" ? "active" : undefined} aria-current={active === "53-不具合が潜みうる場所" ? "location" : undefined} onClick={() => { setActive("53-不具合が潜みうる場所"); setIsOpen(false); }}>
                        {"5.3 不具合が潜みうる場所"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#54-調査の進め方" data-target="54-調査の進め方" className={active === "54-調査の進め方" ? "active" : undefined} aria-current={active === "54-調査の進め方" ? "location" : undefined} onClick={() => { setActive("54-調査の進め方"); setIsOpen(false); }}>
                        {"5.4 調査の進め方"}
                    </a>
                </li>
                <li className="nav-h2">
                    <a href="#6-714-静的解析がテスト自動化コードの品質向上にどう役立つかk2" data-target="6-714-静的解析がテスト自動化コードの品質向上にどう役立つかk2" className={active === "6-714-静的解析がテスト自動化コードの品質向上にどう役立つかk2" ? "active" : undefined} aria-current={active === "6-714-静的解析がテスト自動化コードの品質向上にどう役立つかk2" ? "location" : undefined} onClick={() => { setActive("6-714-静的解析がテスト自動化コードの品質向上にどう役立つかk2"); setIsOpen(false); }}>
                        {"6. 7.1.4 静的解析がテスト自動化コードの品質向上にどう役立つか（K2）"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#61-静的解析とは" data-target="61-静的解析とは" className={active === "61-静的解析とは" ? "active" : undefined} aria-current={active === "61-静的解析とは" ? "location" : undefined} onClick={() => { setActive("61-静的解析とは"); setIsOpen(false); }}>
                        {"6.1 静的解析とは"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#62-静的解析の出力と支援機能" data-target="62-静的解析の出力と支援機能" className={active === "62-静的解析の出力と支援機能" ? "active" : undefined} aria-current={active === "62-静的解析の出力と支援機能" ? "location" : undefined} onClick={() => { setActive("62-静的解析の出力と支援機能"); setIsOpen(false); }}>
                        {"6.2 静的解析の出力と支援機能"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#63-なぜテスト自動化コードにも静的解析が必要か" data-target="63-なぜテスト自動化コードにも静的解析が必要か" className={active === "63-なぜテスト自動化コードにも静的解析が必要か" ? "active" : undefined} aria-current={active === "63-なぜテスト自動化コードにも静的解析が必要か" ? "location" : undefined} onClick={() => { setActive("63-なぜテスト自動化コードにも静的解析が必要か"); setIsOpen(false); }}>
                        {"6.3 なぜ「テスト自動化コード」にも静的解析が必要か"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#64-パイプラインへの組み込み" data-target="64-パイプラインへの組み込み" className={active === "64-パイプラインへの組み込み" ? "active" : undefined} aria-current={active === "64-パイプラインへの組み込み" ? "location" : undefined} onClick={() => { setActive("64-パイプラインへの組み込み"); setIsOpen(false); }}>
                        {"6.4 パイプラインへの組み込み"}
                    </a>
                </li>
                <li className="nav-h2">
                    <a href="#7-ベストプラクティス総まとめ" data-target="7-ベストプラクティス総まとめ" className={active === "7-ベストプラクティス総まとめ" ? "active" : undefined} aria-current={active === "7-ベストプラクティス総まとめ" ? "location" : undefined} onClick={() => { setActive("7-ベストプラクティス総まとめ"); setIsOpen(false); }}>
                        {"7. ベストプラクティス総まとめ"}
                    </a>
                </li>
                <li className="nav-h2">
                    <a href="#8-試験対策ポイント" data-target="8-試験対策ポイント" className={active === "8-試験対策ポイント" ? "active" : undefined} aria-current={active === "8-試験対策ポイント" ? "location" : undefined} onClick={() => { setActive("8-試験対策ポイント"); setIsOpen(false); }}>
                        {"8. 試験対策ポイント"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#81-出題の構造" data-target="81-出題の構造" className={active === "81-出題の構造" ? "active" : undefined} aria-current={active === "81-出題の構造" ? "location" : undefined} onClick={() => { setActive("81-出題の構造"); setIsOpen(false); }}>
                        {"8.1 出題の構造"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#82-間違えやすいポイント" data-target="82-間違えやすいポイント" className={active === "82-間違えやすいポイント" ? "active" : undefined} aria-current={active === "82-間違えやすいポイント" ? "location" : undefined} onClick={() => { setActive("82-間違えやすいポイント"); setIsOpen(false); }}>
                        {"8.2 間違えやすいポイント"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#83-暗記用チェックリスト" data-target="83-暗記用チェックリスト" className={active === "83-暗記用チェックリスト" ? "active" : undefined} aria-current={active === "83-暗記用チェックリスト" ? "location" : undefined} onClick={() => { setActive("83-暗記用チェックリスト"); setIsOpen(false); }}>
                        {"8.3 暗記用チェックリスト"}
                    </a>
                </li>
                <li className="nav-h2">
                    <a href="#9-確認問題解答付き" data-target="9-確認問題解答付き" className={active === "9-確認問題解答付き" ? "active" : undefined} aria-current={active === "9-確認問題解答付き" ? "location" : undefined} onClick={() => { setActive("9-確認問題解答付き"); setIsOpen(false); }}>
                        {"9. 確認問題（解答付き）"}
                    </a>
                </li>
                <li className="nav-h2">
                    <a href="#10-用語集" data-target="10-用語集" className={active === "10-用語集" ? "active" : undefined} aria-current={active === "10-用語集" ? "location" : undefined} onClick={() => { setActive("10-用語集"); setIsOpen(false); }}>
                        {"10. 用語集"}
                    </a>
                </li>
                <li className="nav-h2">
                    <a href="#11-参考url根拠ソース" data-target="11-参考url根拠ソース" className={active === "11-参考url根拠ソース" ? "active" : undefined} aria-current={active === "11-参考url根拠ソース" ? "location" : undefined} onClick={() => { setActive("11-参考url根拠ソース"); setIsOpen(false); }}>
                        {"11. 参考URL（根拠ソース）"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#111-一次情報第7章の根拠" data-target="111-一次情報第7章の根拠" className={active === "111-一次情報第7章の根拠" ? "active" : undefined} aria-current={active === "111-一次情報第7章の根拠" ? "location" : undefined} onClick={() => { setActive("111-一次情報第7章の根拠"); setIsOpen(false); }}>
                        {"11.1 一次情報（第7章の根拠）"}
                    </a>
                </li>
                <li className="nav-h3">
                    <a href="#112-補足の参考資料シラバス外ベストプラクティスの補強" data-target="112-補足の参考資料シラバス外ベストプラクティスの補強" className={active === "112-補足の参考資料シラバス外ベストプラクティスの補強" ? "active" : undefined} aria-current={active === "112-補足の参考資料シラバス外ベストプラクティスの補強" ? "location" : undefined} onClick={() => { setActive("112-補足の参考資料シラバス外ベストプラクティスの補強"); setIsOpen(false); }}>
                        {"11.2 補足の参考資料（シラバス外・ベストプラクティスの補強）"}
                    </a>
                </li>
            </ul>
        </nav>
    </>;
}
