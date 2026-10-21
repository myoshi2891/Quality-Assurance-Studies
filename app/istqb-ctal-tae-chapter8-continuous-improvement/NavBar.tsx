'use client';

import React, { useEffect, useRef, useState } from 'react';

const TOC_IDS = [
  "1-この章の全体像",
  "11-一言でいうと",
  "12-学習目標learning-objectives",
  "13-試験で必ず覚えるキーワードこの章",
  "14-略語の早見表",
  "15-第8章の構造",
  "16-改善サイクルのイメージ",
  "2-811-データ収集と分析でテストケースを改善するk3",
  "21-test-histogramテストヒストグラム",
  "211-何のためのものか",
  "212-具体例イメージをつかむための例",
  "213-分析の手順ステップバイステップ",
  "214-ベストプラクティス",
  "22-artificial-intelligenceaiの活用",
  "221-何ができるか",
  "222-自己修復の流れ",
  "223-ベストプラクティスと注意点",
  "23-schema-validationスキーマ検証",
  "231-何ができるか",
  "232-シラバスの例をコードで理解する",
  "233-使いどころの整理",
  "234-スキーマ検証と契約テスト第5章の違い",
  "235-ベストプラクティス",
  "3-812-導入済み-tas-の技術的側面を分析し改善を提案するk4",
  "31-まず押さえる考え方",
  "32-改善を検討する-9-つの領域",
  "33-領域①-scriptingスクリプティング",
  "331-スクリプト手法をアップグレードする",
  "332-実装面の改善3つの例",
  "34-領域②-test-executionテスト実行",
  "341-課題リグレッションが時間内に終わらない",
  "342-github-actions-での実装例考え方の理解用",
  "343-ベストプラクティス",
  "35-領域③-verification検証",
  "36-領域④-taaテスト自動化アーキテクチャ",
  "361-内容",
  "362-重要ポイント",
  "37-領域⑤-tafコアライブラリのバージョンアップ",
  "371-課題",
  "372-推奨する進め方",
  "38-領域⑥-setup-and-teardownセットアップとティアダウン",
  "39-領域⑦-documentationドキュメント",
  "310-領域⑧-tas-featurestas-の機能",
  "311-領域⑨-taf-updates-and-upgradestaf-の更新アップグレード",
  "4-813-sut-の更新に合わせてテストウェアを再構成するk3",
  "41-前提",
  "42-進め方テスト環境コンポーネントの変更への対応",
  "43-具体的な再構成項目",
  "①-コア-tas-関数ライブラリの効率と効果を高める",
  "②-同じコントロール種別に作用する複数関数を統合する",
  "③-sut-の変更に対応して-taa-をリファクタリングする",
  "④-命名規則と標準化",
  "⑤-既存テストスクリプトの見直し廃止の評価",
  "5-814-テスト自動化ツールの活用機会k2",
  "51-考え方",
  "52-環境のセットアップと制御environment-setup-and-control",
  "53-データエイジングdata-aging",
  "54-スクリーンショットと動画の生成screenshot-and-video-generation",
  "55-ベストプラクティス",
  "6-試験対策ひっかけポイントと確認問題",
  "61-ひっかけポイント表",
  "62-確認問題自己チェック",
  "7-ベストプラクティス総まとめ",
  "71-項目別",
  "72-改善提案を書くときの型k4-対策",
  "8-用語集",
  "9-出典ソースurl",
  "91-一次情報本ガイドの根拠",
  "92-補足資料コード例実装の理解用",
  "10-本ガイドに関する注記"
] as const;

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('');
    const toggleRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
        }, { rootMargin: '-15% 0px -75% 0px' });
        for (const id of TOC_IDS) {
            const target = document.getElementById(id);
            if (target) observer.observe(target);
        }
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') { setIsOpen(false); toggleRef.current?.focus(); }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isOpen]);
    return <>
        <button className="sidebar-toggle" id="sidebarToggle" ref={toggleRef} aria-label={isOpen ? '目次を閉じる' : '目次を開く'} aria-controls="sidebar" aria-expanded={isOpen} onClick={() => setIsOpen(open => !open)}>☰</button>
        <button className={isOpen ? 'sidebar-scrim open' : 'sidebar-scrim'} type="button" aria-label="目次を閉じる" aria-hidden={!isOpen} tabIndex={-1} onClick={() => setIsOpen(false)} />
        <nav className={`sidebar${isOpen ? " open" : ""}`} id="sidebar" aria-label="章の目次">
            <div className="sidebar-title">
                {"目次"}
                <small >
                    {"CTAL-TAE v2.0 第8章"}
                </small>
            </div>
            <ul className="nav-list">
                <li >
                    <a href="#1-この章の全体像" data-target="1-この章の全体像" className={["nav-h2", active === "1-この章の全体像" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "1-この章の全体像" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                        {"1. この章の全体像"}
                    </a>
                    <ul className="nav-sub">
                        <li >
                            <a href="#11-一言でいうと" data-target="11-一言でいうと" className={["nav-h3", active === "11-一言でいうと" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "11-一言でいうと" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"1.1 一言でいうと"}
                            </a>
                        </li>
                        <li >
                            <a href="#12-学習目標learning-objectives" data-target="12-学習目標learning-objectives" className={["nav-h3", active === "12-学習目標learning-objectives" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "12-学習目標learning-objectives" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"1.2 学習目標（Learning Objectives）"}
                            </a>
                        </li>
                        <li >
                            <a href="#13-試験で必ず覚えるキーワードこの章" data-target="13-試験で必ず覚えるキーワードこの章" className={["nav-h3", active === "13-試験で必ず覚えるキーワードこの章" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "13-試験で必ず覚えるキーワードこの章" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"1.3 試験で必ず覚えるキーワード（この章）"}
                            </a>
                        </li>
                        <li >
                            <a href="#14-略語の早見表" data-target="14-略語の早見表" className={["nav-h3", active === "14-略語の早見表" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "14-略語の早見表" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"1.4 略語の早見表"}
                            </a>
                        </li>
                        <li >
                            <a href="#15-第8章の構造" data-target="15-第8章の構造" className={["nav-h3", active === "15-第8章の構造" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "15-第8章の構造" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"1.5 第8章の構造"}
                            </a>
                        </li>
                        <li >
                            <a href="#16-改善サイクルのイメージ" data-target="16-改善サイクルのイメージ" className={["nav-h3", active === "16-改善サイクルのイメージ" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "16-改善サイクルのイメージ" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"1.6 改善サイクルのイメージ"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li >
                    <a href="#2-811-データ収集と分析でテストケースを改善するk3" data-target="2-811-データ収集と分析でテストケースを改善するk3" className={["nav-h2", active === "2-811-データ収集と分析でテストケースを改善するk3" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "2-811-データ収集と分析でテストケースを改善するk3" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                        {"2. 8.1.1 データ収集と分析でテストケースを改善する（K3）"}
                    </a>
                    <ul className="nav-sub">
                        <li >
                            <a href="#21-test-histogramテストヒストグラム" data-target="21-test-histogramテストヒストグラム" className={["nav-h3", active === "21-test-histogramテストヒストグラム" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "21-test-histogramテストヒストグラム" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.1 Test histogram（テストヒストグラム）"}
                            </a>
                        </li>
                        <li >
                            <a href="#211-何のためのものか" data-target="211-何のためのものか" className={["nav-h4", active === "211-何のためのものか" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "211-何のためのものか" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.1.1 何のためのものか"}
                            </a>
                        </li>
                        <li >
                            <a href="#212-具体例イメージをつかむための例" data-target="212-具体例イメージをつかむための例" className={["nav-h4", active === "212-具体例イメージをつかむための例" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "212-具体例イメージをつかむための例" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.1.2 具体例（イメージをつかむための例）"}
                            </a>
                        </li>
                        <li >
                            <a href="#213-分析の手順ステップバイステップ" data-target="213-分析の手順ステップバイステップ" className={["nav-h4", active === "213-分析の手順ステップバイステップ" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "213-分析の手順ステップバイステップ" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.1.3 分析の手順（ステップバイステップ）"}
                            </a>
                        </li>
                        <li >
                            <a href="#214-ベストプラクティス" data-target="214-ベストプラクティス" className={["nav-h4", active === "214-ベストプラクティス" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "214-ベストプラクティス" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.1.4 ベストプラクティス"}
                            </a>
                        </li>
                        <li >
                            <a href="#22-artificial-intelligenceaiの活用" data-target="22-artificial-intelligenceaiの活用" className={["nav-h3", active === "22-artificial-intelligenceaiの活用" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "22-artificial-intelligenceaiの活用" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.2 Artificial Intelligence（AI）の活用"}
                            </a>
                        </li>
                        <li >
                            <a href="#221-何ができるか" data-target="221-何ができるか" className={["nav-h4", active === "221-何ができるか" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "221-何ができるか" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.2.1 何ができるか"}
                            </a>
                        </li>
                        <li >
                            <a href="#222-自己修復の流れ" data-target="222-自己修復の流れ" className={["nav-h4", active === "222-自己修復の流れ" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "222-自己修復の流れ" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.2.2 自己修復の流れ"}
                            </a>
                        </li>
                        <li >
                            <a href="#223-ベストプラクティスと注意点" data-target="223-ベストプラクティスと注意点" className={["nav-h4", active === "223-ベストプラクティスと注意点" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "223-ベストプラクティスと注意点" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.2.3 ベストプラクティスと注意点"}
                            </a>
                        </li>
                        <li >
                            <a href="#23-schema-validationスキーマ検証" data-target="23-schema-validationスキーマ検証" className={["nav-h3", active === "23-schema-validationスキーマ検証" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "23-schema-validationスキーマ検証" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.3 Schema validation（スキーマ検証）"}
                            </a>
                        </li>
                        <li >
                            <a href="#231-何ができるか" data-target="231-何ができるか" className={["nav-h4", active === "231-何ができるか" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "231-何ができるか" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.3.1 何ができるか"}
                            </a>
                        </li>
                        <li >
                            <a href="#232-シラバスの例をコードで理解する" data-target="232-シラバスの例をコードで理解する" className={["nav-h4", active === "232-シラバスの例をコードで理解する" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "232-シラバスの例をコードで理解する" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.3.2 シラバスの例をコードで理解する"}
                            </a>
                        </li>
                        <li >
                            <a href="#233-使いどころの整理" data-target="233-使いどころの整理" className={["nav-h4", active === "233-使いどころの整理" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "233-使いどころの整理" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.3.3 使いどころの整理"}
                            </a>
                        </li>
                        <li >
                            <a href="#234-スキーマ検証と契約テスト第5章の違い" data-target="234-スキーマ検証と契約テスト第5章の違い" className={["nav-h4", active === "234-スキーマ検証と契約テスト第5章の違い" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "234-スキーマ検証と契約テスト第5章の違い" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.3.4 スキーマ検証と契約テスト（第5章）の違い"}
                            </a>
                        </li>
                        <li >
                            <a href="#235-ベストプラクティス" data-target="235-ベストプラクティス" className={["nav-h4", active === "235-ベストプラクティス" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "235-ベストプラクティス" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"2.3.5 ベストプラクティス"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li >
                    <a href="#3-812-導入済み-tas-の技術的側面を分析し改善を提案するk4" data-target="3-812-導入済み-tas-の技術的側面を分析し改善を提案するk4" className={["nav-h2", active === "3-812-導入済み-tas-の技術的側面を分析し改善を提案するk4" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "3-812-導入済み-tas-の技術的側面を分析し改善を提案するk4" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                        {"3. 8.1.2 導入済み TAS の技術的側面を分析し改善を提案する（K4）"}
                    </a>
                    <ul className="nav-sub">
                        <li >
                            <a href="#31-まず押さえる考え方" data-target="31-まず押さえる考え方" className={["nav-h3", active === "31-まず押さえる考え方" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "31-まず押さえる考え方" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.1 まず押さえる考え方"}
                            </a>
                        </li>
                        <li >
                            <a href="#32-改善を検討する-9-つの領域" data-target="32-改善を検討する-9-つの領域" className={["nav-h3", active === "32-改善を検討する-9-つの領域" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "32-改善を検討する-9-つの領域" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.2 改善を検討する 9 つの領域"}
                            </a>
                        </li>
                        <li >
                            <a href="#33-領域①-scriptingスクリプティング" data-target="33-領域①-scriptingスクリプティング" className={["nav-h3", active === "33-領域①-scriptingスクリプティング" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "33-領域①-scriptingスクリプティング" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.3 領域① Scripting（スクリプティング）"}
                            </a>
                        </li>
                        <li >
                            <a href="#331-スクリプト手法をアップグレードする" data-target="331-スクリプト手法をアップグレードする" className={["nav-h4", active === "331-スクリプト手法をアップグレードする" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "331-スクリプト手法をアップグレードする" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.3.1 スクリプト手法をアップグレードする"}
                            </a>
                        </li>
                        <li >
                            <a href="#332-実装面の改善3つの例" data-target="332-実装面の改善3つの例" className={["nav-h4", active === "332-実装面の改善3つの例" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "332-実装面の改善3つの例" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.3.2 実装面の改善（3つの例）"}
                            </a>
                        </li>
                        <li >
                            <a href="#34-領域②-test-executionテスト実行" data-target="34-領域②-test-executionテスト実行" className={["nav-h3", active === "34-領域②-test-executionテスト実行" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "34-領域②-test-executionテスト実行" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.4 領域② Test execution（テスト実行）"}
                            </a>
                        </li>
                        <li >
                            <a href="#341-課題リグレッションが時間内に終わらない" data-target="341-課題リグレッションが時間内に終わらない" className={["nav-h4", active === "341-課題リグレッションが時間内に終わらない" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "341-課題リグレッションが時間内に終わらない" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.4.1 課題：リグレッションが時間内に終わらない"}
                            </a>
                        </li>
                        <li >
                            <a href="#342-github-actions-での実装例考え方の理解用" data-target="342-github-actions-での実装例考え方の理解用" className={["nav-h4", active === "342-github-actions-での実装例考え方の理解用" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "342-github-actions-での実装例考え方の理解用" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.4.2 GitHub Actions での実装例（考え方の理解用）"}
                            </a>
                        </li>
                        <li >
                            <a href="#343-ベストプラクティス" data-target="343-ベストプラクティス" className={["nav-h4", active === "343-ベストプラクティス" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "343-ベストプラクティス" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.4.3 ベストプラクティス"}
                            </a>
                        </li>
                        <li >
                            <a href="#35-領域③-verification検証" data-target="35-領域③-verification検証" className={["nav-h3", active === "35-領域③-verification検証" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "35-領域③-verification検証" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.5 領域③ Verification（検証）"}
                            </a>
                        </li>
                        <li >
                            <a href="#36-領域④-taaテスト自動化アーキテクチャ" data-target="36-領域④-taaテスト自動化アーキテクチャ" className={["nav-h3", active === "36-領域④-taaテスト自動化アーキテクチャ" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "36-領域④-taaテスト自動化アーキテクチャ" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.6 領域④ TAA（テスト自動化アーキテクチャ）"}
                            </a>
                        </li>
                        <li >
                            <a href="#361-内容" data-target="361-内容" className={["nav-h4", active === "361-内容" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "361-内容" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.6.1 内容"}
                            </a>
                        </li>
                        <li >
                            <a href="#362-重要ポイント" data-target="362-重要ポイント" className={["nav-h4", active === "362-重要ポイント" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "362-重要ポイント" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.6.2 重要ポイント"}
                            </a>
                        </li>
                        <li >
                            <a href="#37-領域⑤-tafコアライブラリのバージョンアップ" data-target="37-領域⑤-tafコアライブラリのバージョンアップ" className={["nav-h3", active === "37-領域⑤-tafコアライブラリのバージョンアップ" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "37-領域⑤-tafコアライブラリのバージョンアップ" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.7 領域⑤ TAF（コアライブラリのバージョンアップ）"}
                            </a>
                        </li>
                        <li >
                            <a href="#371-課題" data-target="371-課題" className={["nav-h4", active === "371-課題" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "371-課題" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.7.1 課題"}
                            </a>
                        </li>
                        <li >
                            <a href="#372-推奨する進め方" data-target="372-推奨する進め方" className={["nav-h4", active === "372-推奨する進め方" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "372-推奨する進め方" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.7.2 推奨する進め方"}
                            </a>
                        </li>
                        <li >
                            <a href="#38-領域⑥-setup-and-teardownセットアップとティアダウン" data-target="38-領域⑥-setup-and-teardownセットアップとティアダウン" className={["nav-h3", active === "38-領域⑥-setup-and-teardownセットアップとティアダウン" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "38-領域⑥-setup-and-teardownセットアップとティアダウン" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.8 領域⑥ Setup and teardown（セットアップとティアダウン）"}
                            </a>
                        </li>
                        <li >
                            <a href="#39-領域⑦-documentationドキュメント" data-target="39-領域⑦-documentationドキュメント" className={["nav-h3", active === "39-領域⑦-documentationドキュメント" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "39-領域⑦-documentationドキュメント" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.9 領域⑦ Documentation（ドキュメント）"}
                            </a>
                        </li>
                        <li >
                            <a href="#310-領域⑧-tas-featurestas-の機能" data-target="310-領域⑧-tas-featurestas-の機能" className={["nav-h3", active === "310-領域⑧-tas-featurestas-の機能" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "310-領域⑧-tas-featurestas-の機能" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.10 領域⑧ TAS features（TAS の機能）"}
                            </a>
                        </li>
                        <li >
                            <a href="#311-領域⑨-taf-updates-and-upgradestaf-の更新アップグレード" data-target="311-領域⑨-taf-updates-and-upgradestaf-の更新アップグレード" className={["nav-h3", active === "311-領域⑨-taf-updates-and-upgradestaf-の更新アップグレード" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "311-領域⑨-taf-updates-and-upgradestaf-の更新アップグレード" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"3.11 領域⑨ TAF updates and upgrades（TAF の更新・アップグレード）"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li >
                    <a href="#4-813-sut-の更新に合わせてテストウェアを再構成するk3" data-target="4-813-sut-の更新に合わせてテストウェアを再構成するk3" className={["nav-h2", active === "4-813-sut-の更新に合わせてテストウェアを再構成するk3" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "4-813-sut-の更新に合わせてテストウェアを再構成するk3" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                        {"4. 8.1.3 SUT の更新に合わせてテストウェアを再構成する（K3）"}
                    </a>
                    <ul className="nav-sub">
                        <li >
                            <a href="#41-前提" data-target="41-前提" className={["nav-h3", active === "41-前提" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "41-前提" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"4.1 前提"}
                            </a>
                        </li>
                        <li >
                            <a href="#42-進め方テスト環境コンポーネントの変更への対応" data-target="42-進め方テスト環境コンポーネントの変更への対応" className={["nav-h3", active === "42-進め方テスト環境コンポーネントの変更への対応" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "42-進め方テスト環境コンポーネントの変更への対応" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"4.2 進め方（テスト環境コンポーネントの変更への対応）"}
                            </a>
                        </li>
                        <li >
                            <a href="#43-具体的な再構成項目" data-target="43-具体的な再構成項目" className={["nav-h3", active === "43-具体的な再構成項目" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "43-具体的な再構成項目" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"4.3 具体的な再構成項目"}
                            </a>
                        </li>
                        <li >
                            <a href="#①-コア-tas-関数ライブラリの効率と効果を高める" data-target="①-コア-tas-関数ライブラリの効率と効果を高める" className={["nav-h4", active === "①-コア-tas-関数ライブラリの効率と効果を高める" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "①-コア-tas-関数ライブラリの効率と効果を高める" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"① コア TAS 関数ライブラリの効率と効果を高める"}
                            </a>
                        </li>
                        <li >
                            <a href="#②-同じコントロール種別に作用する複数関数を統合する" data-target="②-同じコントロール種別に作用する複数関数を統合する" className={["nav-h4", active === "②-同じコントロール種別に作用する複数関数を統合する" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "②-同じコントロール種別に作用する複数関数を統合する" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"② 同じコントロール種別に作用する複数関数を統合する"}
                            </a>
                        </li>
                        <li >
                            <a href="#③-sut-の変更に対応して-taa-をリファクタリングする" data-target="③-sut-の変更に対応して-taa-をリファクタリングする" className={["nav-h4", active === "③-sut-の変更に対応して-taa-をリファクタリングする" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "③-sut-の変更に対応して-taa-をリファクタリングする" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"③ SUT の変更に対応して TAA をリファクタリングする"}
                            </a>
                        </li>
                        <li >
                            <a href="#④-命名規則と標準化" data-target="④-命名規則と標準化" className={["nav-h4", active === "④-命名規則と標準化" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "④-命名規則と標準化" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"④ 命名規則と標準化"}
                            </a>
                        </li>
                        <li >
                            <a href="#⑤-既存テストスクリプトの見直し廃止の評価" data-target="⑤-既存テストスクリプトの見直し廃止の評価" className={["nav-h4", active === "⑤-既存テストスクリプトの見直し廃止の評価" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "⑤-既存テストスクリプトの見直し廃止の評価" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"⑤ 既存テストスクリプトの見直し・廃止の評価"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li >
                    <a href="#5-814-テスト自動化ツールの活用機会k2" data-target="5-814-テスト自動化ツールの活用機会k2" className={["nav-h2", active === "5-814-テスト自動化ツールの活用機会k2" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "5-814-テスト自動化ツールの活用機会k2" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                        {"5. 8.1.4 テスト自動化ツールの活用機会（K2）"}
                    </a>
                    <ul className="nav-sub">
                        <li >
                            <a href="#51-考え方" data-target="51-考え方" className={["nav-h3", active === "51-考え方" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "51-考え方" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"5.1 考え方"}
                            </a>
                        </li>
                        <li >
                            <a href="#52-環境のセットアップと制御environment-setup-and-control" data-target="52-環境のセットアップと制御environment-setup-and-control" className={["nav-h3", active === "52-環境のセットアップと制御environment-setup-and-control" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "52-環境のセットアップと制御environment-setup-and-control" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"5.2 環境のセットアップと制御（Environment setup and control）"}
                            </a>
                        </li>
                        <li >
                            <a href="#53-データエイジングdata-aging" data-target="53-データエイジングdata-aging" className={["nav-h3", active === "53-データエイジングdata-aging" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "53-データエイジングdata-aging" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"5.3 データエイジング（Data aging）"}
                            </a>
                        </li>
                        <li >
                            <a href="#54-スクリーンショットと動画の生成screenshot-and-video-generation" data-target="54-スクリーンショットと動画の生成screenshot-and-video-generation" className={["nav-h3", active === "54-スクリーンショットと動画の生成screenshot-and-video-generation" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "54-スクリーンショットと動画の生成screenshot-and-video-generation" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"5.4 スクリーンショットと動画の生成（Screenshot and video generation）"}
                            </a>
                        </li>
                        <li >
                            <a href="#55-ベストプラクティス" data-target="55-ベストプラクティス" className={["nav-h3", active === "55-ベストプラクティス" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "55-ベストプラクティス" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"5.5 ベストプラクティス"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li >
                    <a href="#6-試験対策ひっかけポイントと確認問題" data-target="6-試験対策ひっかけポイントと確認問題" className={["nav-h2", active === "6-試験対策ひっかけポイントと確認問題" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "6-試験対策ひっかけポイントと確認問題" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                        {"6. 試験対策：ひっかけポイントと確認問題"}
                    </a>
                    <ul className="nav-sub">
                        <li >
                            <a href="#61-ひっかけポイント表" data-target="61-ひっかけポイント表" className={["nav-h3", active === "61-ひっかけポイント表" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "61-ひっかけポイント表" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"6.1 ひっかけポイント表"}
                            </a>
                        </li>
                        <li >
                            <a href="#62-確認問題自己チェック" data-target="62-確認問題自己チェック" className={["nav-h3", active === "62-確認問題自己チェック" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "62-確認問題自己チェック" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"6.2 確認問題（自己チェック）"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li >
                    <a href="#7-ベストプラクティス総まとめ" data-target="7-ベストプラクティス総まとめ" className={["nav-h2", active === "7-ベストプラクティス総まとめ" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "7-ベストプラクティス総まとめ" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                        {"7. ベストプラクティス総まとめ"}
                    </a>
                    <ul className="nav-sub">
                        <li >
                            <a href="#71-項目別" data-target="71-項目別" className={["nav-h3", active === "71-項目別" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "71-項目別" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"7.1 項目別"}
                            </a>
                        </li>
                        <li >
                            <a href="#72-改善提案を書くときの型k4-対策" data-target="72-改善提案を書くときの型k4-対策" className={["nav-h3", active === "72-改善提案を書くときの型k4-対策" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "72-改善提案を書くときの型k4-対策" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"7.2 改善提案を書くときの型（K4 対策）"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li >
                    <a href="#8-用語集" data-target="8-用語集" className={["nav-h2", active === "8-用語集" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "8-用語集" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                        {"8. 用語集"}
                    </a>
                </li>
                <li >
                    <a href="#9-出典ソースurl" data-target="9-出典ソースurl" className={["nav-h2", active === "9-出典ソースurl" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "9-出典ソースurl" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                        {"9. 出典（ソース）URL"}
                    </a>
                    <ul className="nav-sub">
                        <li >
                            <a href="#91-一次情報本ガイドの根拠" data-target="91-一次情報本ガイドの根拠" className={["nav-h3", active === "91-一次情報本ガイドの根拠" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "91-一次情報本ガイドの根拠" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"9.1 一次情報（本ガイドの根拠）"}
                            </a>
                        </li>
                        <li >
                            <a href="#92-補足資料コード例実装の理解用" data-target="92-補足資料コード例実装の理解用" className={["nav-h3", active === "92-補足資料コード例実装の理解用" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "92-補足資料コード例実装の理解用" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                                {"9.2 補足資料（コード例・実装の理解用）"}
                            </a>
                        </li>
                    </ul>
                </li>
                <li >
                    <a href="#10-本ガイドに関する注記" data-target="10-本ガイドに関する注記" className={["nav-h2", active === "10-本ガイドに関する注記" ? "active" : ""].filter(Boolean).join(" ")} aria-current={active === "10-本ガイドに関する注記" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                        {"10. 本ガイドに関する注記"}
                    </a>
                </li>
            </ul>
        </nav>
    </>;
}
