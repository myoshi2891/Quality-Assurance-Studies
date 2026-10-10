'use client';

import React, { useEffect, useState } from 'react';

const TARGETS = [
  "0-はじめにこのガイドの読み方",
  "01-このガイドで分かること",
  "02-重要な注意情報の確度について",
  "1-29119-1-とは何かstep-1",
  "11-基本情報",
  "12-一言でいうと",
  "13-なぜ共通の言葉が必要なのか",
  "2-29119-シリーズの中での位置づけstep-2",
  "21-全体像",
  "22-各パートの役割",
  "23-併用される他の規格",
  "3-2013年版から何が変わったかstep-3",
  "31-変更の流れ",
  "4-規格の構成と読み順step-4",
  "41-章立て",
  "42-初学者向けのおすすめ読み順",
  "5-テストの基本概念41step-5",
  "51-概念マップ",
  "52-各概念の解説",
  "6-テスト計画とテスト戦略42step-6",
  "61-ここが29119の核心-リスクベースドテスト",
  "62-2種類のリスク",
  "63-リスクベースドテストの基本の流れ",
  "64-リスクの見積り例筆者の作例",
  "65-テスト計画とテスト戦略の違い",
  "66-テストアプローチ424",
  "67-開発保守ライフサイクルでのテスト425",
  "68-領域とシステム特性426",
  "69-テスト戦略に含まれる内容427",
  "7-テストフレームワーク43step-7",
  "71-テストプロセス431-3階層モデル",
  "72-テストプロセスのインスタンス化",
  "73-テスト文書化432-433",
  "74-構成管理とテスト434",
  "75-ツールによる支援435",
  "76-プロセス改善とテスト436",
  "77-テストメトリクス437",
  "8-テスト設計と実行44step-8",
  "81-2022年版の簡略化されたテスト設計プロセス",
  "82-具体例で理解する筆者の作例",
  "83-テスト設計技法444",
  "84-モデルベーステスト442",
  "85-スクリプト化テストと探索的テスト443-445",
  "86-再テストと回帰テスト446",
  "87-手動テストと自動テスト447",
  "88-その他のテストアプローチ4484411",
  "89-aiに関する用語も追加されている",
  "810-テスト環境とテストデータ管理4412-4413",
  "9-管理報告欠陥附属書4547附属書ab",
  "91-プロジェクトマネジメントとテスト45",
  "92-コミュニケーションと報告46",
  "93-欠陥とインシデントの管理47",
  "94-附属書a参考-システム特性とテスト",
  "95-附属書b参考-テストの役割",
  "10-適合性とテーラリングstep-9",
  "101-29119-1-自体には適合要求はない",
  "102-テーラード適合tailored-conformance",
  "11-現場での活用step-10",
  "111-使いどころ",
  "112-実務での最初の3ステップ筆者の提案",
  "12-議論と批判的な見解を知っておくstep-11",
  "13-学習ロードマップ",
  "14-理解度チェック",
  "付録a-用語ミニ辞典第3章から抜粋要約",
  "付録b-参考ソースurl",
  "b1-一次情報規格の公式情報",
  "b2-規格策定関係者国際的に著名な実務家研究者の情報",
  "b3-批判的な見解コンテキスト駆動テストのコミュニティ",
  "b4-情報の鮮度に関する注記"
] as const;

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('0-はじめにこのガイドの読み方');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const id of TARGETS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.3) {
          current = id;
        } else {
          break;
        }
      }
      if (current) {
        setActive(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth <= 960) {
      setOpen(false);
    }
  };

  return (
    <>
      <button
        className="sidebar-toggle"
        id="sidebarToggle"
        aria-label="メニューを開閉"
        aria-expanded={open}
        aria-controls="sidebar"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <nav className={`sidebar${open ? ' open' : ''}`} id="sidebar">

    <div className="sidebar-title">目次</div>
    <ul className="nav-list">
<li><a className={`nav-link nav-h2${active === "0-はじめにこのガイドの読み方" ? " active" : ""}`} data-target="0-はじめにこのガイドの読み方" href="#0-はじめにこのガイドの読み方" aria-current={active === "0-はじめにこのガイドの読み方" ? "location" : undefined} onClick={handleLinkClick}>0. はじめに（このガイドの読み方）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "01-このガイドで分かること" ? " active" : ""}`} data-target="01-このガイドで分かること" href="#01-このガイドで分かること" aria-current={active === "01-このガイドで分かること" ? "location" : undefined} onClick={handleLinkClick}>0.1 このガイドで分かること</a></li>
<li><a className={`nav-link nav-h3${active === "02-重要な注意情報の確度について" ? " active" : ""}`} data-target="02-重要な注意情報の確度について" href="#02-重要な注意情報の確度について" aria-current={active === "02-重要な注意情報の確度について" ? "location" : undefined} onClick={handleLinkClick}>0.2 重要な注意（情報の確度について）</a></li>
</ul></li>
<li><a className={`nav-link nav-h2${active === "1-29119-1-とは何かstep-1" ? " active" : ""}`} data-target="1-29119-1-とは何かstep-1" href="#1-29119-1-とは何かstep-1" aria-current={active === "1-29119-1-とは何かstep-1" ? "location" : undefined} onClick={handleLinkClick}>1. 29119-1 とは何か（Step 1）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "11-基本情報" ? " active" : ""}`} data-target="11-基本情報" href="#11-基本情報" aria-current={active === "11-基本情報" ? "location" : undefined} onClick={handleLinkClick}>1.1 基本情報</a></li>
<li><a className={`nav-link nav-h3${active === "12-一言でいうと" ? " active" : ""}`} data-target="12-一言でいうと" href="#12-一言でいうと" aria-current={active === "12-一言でいうと" ? "location" : undefined} onClick={handleLinkClick}>1.2 一言でいうと</a></li>
<li><a className={`nav-link nav-h3${active === "13-なぜ共通の言葉が必要なのか" ? " active" : ""}`} data-target="13-なぜ共通の言葉が必要なのか" href="#13-なぜ共通の言葉が必要なのか" aria-current={active === "13-なぜ共通の言葉が必要なのか" ? "location" : undefined} onClick={handleLinkClick}>1.3 なぜ「共通の言葉」が必要なのか</a></li>
</ul></li>
<li><a className={`nav-link nav-h2${active === "2-29119-シリーズの中での位置づけstep-2" ? " active" : ""}`} data-target="2-29119-シリーズの中での位置づけstep-2" href="#2-29119-シリーズの中での位置づけstep-2" aria-current={active === "2-29119-シリーズの中での位置づけstep-2" ? "location" : undefined} onClick={handleLinkClick}>2. 29119 シリーズの中での位置づけ（Step 2）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "21-全体像" ? " active" : ""}`} data-target="21-全体像" href="#21-全体像" aria-current={active === "21-全体像" ? "location" : undefined} onClick={handleLinkClick}>2.1 全体像</a></li>
<li><a className={`nav-link nav-h3${active === "22-各パートの役割" ? " active" : ""}`} data-target="22-各パートの役割" href="#22-各パートの役割" aria-current={active === "22-各パートの役割" ? "location" : undefined} onClick={handleLinkClick}>2.2 各パートの役割</a></li>
<li><a className={`nav-link nav-h3${active === "23-併用される他の規格" ? " active" : ""}`} data-target="23-併用される他の規格" href="#23-併用される他の規格" aria-current={active === "23-併用される他の規格" ? "location" : undefined} onClick={handleLinkClick}>2.3 併用される他の規格</a></li>
</ul></li>
<li><a className={`nav-link nav-h2${active === "3-2013年版から何が変わったかstep-3" ? " active" : ""}`} data-target="3-2013年版から何が変わったかstep-3" href="#3-2013年版から何が変わったかstep-3" aria-current={active === "3-2013年版から何が変わったかstep-3" ? "location" : undefined} onClick={handleLinkClick}>3. 2013年版から何が変わったか（Step 3）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "31-変更の流れ" ? " active" : ""}`} data-target="31-変更の流れ" href="#31-変更の流れ" aria-current={active === "31-変更の流れ" ? "location" : undefined} onClick={handleLinkClick}>3.1 変更の流れ</a></li>
</ul></li>
<li><a className={`nav-link nav-h2${active === "4-規格の構成と読み順step-4" ? " active" : ""}`} data-target="4-規格の構成と読み順step-4" href="#4-規格の構成と読み順step-4" aria-current={active === "4-規格の構成と読み順step-4" ? "location" : undefined} onClick={handleLinkClick}>4. 規格の構成と読み順（Step 4）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "41-章立て" ? " active" : ""}`} data-target="41-章立て" href="#41-章立て" aria-current={active === "41-章立て" ? "location" : undefined} onClick={handleLinkClick}>4.1 章立て</a></li>
<li><a className={`nav-link nav-h3${active === "42-初学者向けのおすすめ読み順" ? " active" : ""}`} data-target="42-初学者向けのおすすめ読み順" href="#42-初学者向けのおすすめ読み順" aria-current={active === "42-初学者向けのおすすめ読み順" ? "location" : undefined} onClick={handleLinkClick}>4.2 初学者向けのおすすめ読み順</a></li>
</ul></li>
<li><a className={`nav-link nav-h2${active === "5-テストの基本概念41step-5" ? " active" : ""}`} data-target="5-テストの基本概念41step-5" href="#5-テストの基本概念41step-5" aria-current={active === "5-テストの基本概念41step-5" ? "location" : undefined} onClick={handleLinkClick}>5. テストの基本概念（4.1）（Step 5）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "51-概念マップ" ? " active" : ""}`} data-target="51-概念マップ" href="#51-概念マップ" aria-current={active === "51-概念マップ" ? "location" : undefined} onClick={handleLinkClick}>5.1 概念マップ</a></li>
<li><a className={`nav-link nav-h3${active === "52-各概念の解説" ? " active" : ""}`} data-target="52-各概念の解説" href="#52-各概念の解説" aria-current={active === "52-各概念の解説" ? "location" : undefined} onClick={handleLinkClick}>5.2 各概念の解説</a></li>
</ul></li>
<li><a className={`nav-link nav-h2${active === "6-テスト計画とテスト戦略42step-6" ? " active" : ""}`} data-target="6-テスト計画とテスト戦略42step-6" href="#6-テスト計画とテスト戦略42step-6" aria-current={active === "6-テスト計画とテスト戦略42step-6" ? "location" : undefined} onClick={handleLinkClick}>6. テスト計画とテスト戦略（4.2）（Step 6）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "61-ここが29119の核心-リスクベースドテスト" ? " active" : ""}`} data-target="61-ここが29119の核心-リスクベースドテスト" href="#61-ここが29119の核心-リスクベースドテスト" aria-current={active === "61-ここが29119の核心-リスクベースドテスト" ? "location" : undefined} onClick={handleLinkClick}>6.1 ここが29119の核心: リスクベースドテスト</a></li>
<li><a className={`nav-link nav-h3${active === "62-2種類のリスク" ? " active" : ""}`} data-target="62-2種類のリスク" href="#62-2種類のリスク" aria-current={active === "62-2種類のリスク" ? "location" : undefined} onClick={handleLinkClick}>6.2 2種類のリスク</a></li>
<li><a className={`nav-link nav-h3${active === "63-リスクベースドテストの基本の流れ" ? " active" : ""}`} data-target="63-リスクベースドテストの基本の流れ" href="#63-リスクベースドテストの基本の流れ" aria-current={active === "63-リスクベースドテストの基本の流れ" ? "location" : undefined} onClick={handleLinkClick}>6.3 リスクベースドテストの基本の流れ</a></li>
<li><a className={`nav-link nav-h3${active === "64-リスクの見積り例筆者の作例" ? " active" : ""}`} data-target="64-リスクの見積り例筆者の作例" href="#64-リスクの見積り例筆者の作例" aria-current={active === "64-リスクの見積り例筆者の作例" ? "location" : undefined} onClick={handleLinkClick}>6.4 リスクの見積り例（筆者の作例）</a></li>
<li><a className={`nav-link nav-h3${active === "65-テスト計画とテスト戦略の違い" ? " active" : ""}`} data-target="65-テスト計画とテスト戦略の違い" href="#65-テスト計画とテスト戦略の違い" aria-current={active === "65-テスト計画とテスト戦略の違い" ? "location" : undefined} onClick={handleLinkClick}>6.5 テスト計画とテスト戦略の違い</a></li>
<li><a className={`nav-link nav-h3${active === "66-テストアプローチ424" ? " active" : ""}`} data-target="66-テストアプローチ424" href="#66-テストアプローチ424" aria-current={active === "66-テストアプローチ424" ? "location" : undefined} onClick={handleLinkClick}>6.6 テストアプローチ（4.2.4）</a></li>
<li><a className={`nav-link nav-h3${active === "67-開発保守ライフサイクルでのテスト425" ? " active" : ""}`} data-target="67-開発保守ライフサイクルでのテスト425" href="#67-開発保守ライフサイクルでのテスト425" aria-current={active === "67-開発保守ライフサイクルでのテスト425" ? "location" : undefined} onClick={handleLinkClick}>6.7 開発・保守ライフサイクルでのテスト（4.2.5）</a></li>
<li><a className={`nav-link nav-h3${active === "68-領域とシステム特性426" ? " active" : ""}`} data-target="68-領域とシステム特性426" href="#68-領域とシステム特性426" aria-current={active === "68-領域とシステム特性426" ? "location" : undefined} onClick={handleLinkClick}>6.8 領域とシステム特性（4.2.6）</a></li>
<li><a className={`nav-link nav-h3${active === "69-テスト戦略に含まれる内容427" ? " active" : ""}`} data-target="69-テスト戦略に含まれる内容427" href="#69-テスト戦略に含まれる内容427" aria-current={active === "69-テスト戦略に含まれる内容427" ? "location" : undefined} onClick={handleLinkClick}>6.9 テスト戦略に含まれる内容（4.2.7）</a></li>
</ul></li>
<li><a className={`nav-link nav-h2${active === "7-テストフレームワーク43step-7" ? " active" : ""}`} data-target="7-テストフレームワーク43step-7" href="#7-テストフレームワーク43step-7" aria-current={active === "7-テストフレームワーク43step-7" ? "location" : undefined} onClick={handleLinkClick}>7. テストフレームワーク（4.3）（Step 7）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "71-テストプロセス431-3階層モデル" ? " active" : ""}`} data-target="71-テストプロセス431-3階層モデル" href="#71-テストプロセス431-3階層モデル" aria-current={active === "71-テストプロセス431-3階層モデル" ? "location" : undefined} onClick={handleLinkClick}>7.1 テストプロセス（4.3.1）: 3階層モデル</a></li>
<li><a className={`nav-link nav-h3${active === "72-テストプロセスのインスタンス化" ? " active" : ""}`} data-target="72-テストプロセスのインスタンス化" href="#72-テストプロセスのインスタンス化" aria-current={active === "72-テストプロセスのインスタンス化" ? "location" : undefined} onClick={handleLinkClick}>7.2 テストプロセスの「インスタンス化」</a></li>
<li><a className={`nav-link nav-h3${active === "73-テスト文書化432-433" ? " active" : ""}`} data-target="73-テスト文書化432-433" href="#73-テスト文書化432-433" aria-current={active === "73-テスト文書化432-433" ? "location" : undefined} onClick={handleLinkClick}>7.3 テスト文書化（4.3.2, 4.3.3）</a></li>
<li><a className={`nav-link nav-h3${active === "74-構成管理とテスト434" ? " active" : ""}`} data-target="74-構成管理とテスト434" href="#74-構成管理とテスト434" aria-current={active === "74-構成管理とテスト434" ? "location" : undefined} onClick={handleLinkClick}>7.4 構成管理とテスト（4.3.4）</a></li>
<li><a className={`nav-link nav-h3${active === "75-ツールによる支援435" ? " active" : ""}`} data-target="75-ツールによる支援435" href="#75-ツールによる支援435" aria-current={active === "75-ツールによる支援435" ? "location" : undefined} onClick={handleLinkClick}>7.5 ツールによる支援（4.3.5）</a></li>
<li><a className={`nav-link nav-h3${active === "76-プロセス改善とテスト436" ? " active" : ""}`} data-target="76-プロセス改善とテスト436" href="#76-プロセス改善とテスト436" aria-current={active === "76-プロセス改善とテスト436" ? "location" : undefined} onClick={handleLinkClick}>7.6 プロセス改善とテスト（4.3.6）</a></li>
<li><a className={`nav-link nav-h3${active === "77-テストメトリクス437" ? " active" : ""}`} data-target="77-テストメトリクス437" href="#77-テストメトリクス437" aria-current={active === "77-テストメトリクス437" ? "location" : undefined} onClick={handleLinkClick}>7.7 テストメトリクス（4.3.7）</a></li>
</ul></li>
<li><a className={`nav-link nav-h2${active === "8-テスト設計と実行44step-8" ? " active" : ""}`} data-target="8-テスト設計と実行44step-8" href="#8-テスト設計と実行44step-8" aria-current={active === "8-テスト設計と実行44step-8" ? "location" : undefined} onClick={handleLinkClick}>8. テスト設計と実行（4.4）（Step 8）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "81-2022年版の簡略化されたテスト設計プロセス" ? " active" : ""}`} data-target="81-2022年版の簡略化されたテスト設計プロセス" href="#81-2022年版の簡略化されたテスト設計プロセス" aria-current={active === "81-2022年版の簡略化されたテスト設計プロセス" ? "location" : undefined} onClick={handleLinkClick}>8.1 2022年版の簡略化されたテスト設計プロセス</a></li>
<li><a className={`nav-link nav-h3${active === "82-具体例で理解する筆者の作例" ? " active" : ""}`} data-target="82-具体例で理解する筆者の作例" href="#82-具体例で理解する筆者の作例" aria-current={active === "82-具体例で理解する筆者の作例" ? "location" : undefined} onClick={handleLinkClick}>8.2 具体例で理解する（筆者の作例）</a></li>
<li><a className={`nav-link nav-h3${active === "83-テスト設計技法444" ? " active" : ""}`} data-target="83-テスト設計技法444" href="#83-テスト設計技法444" aria-current={active === "83-テスト設計技法444" ? "location" : undefined} onClick={handleLinkClick}>8.3 テスト設計技法（4.4.4）</a></li>
<li><a className={`nav-link nav-h3${active === "84-モデルベーステスト442" ? " active" : ""}`} data-target="84-モデルベーステスト442" href="#84-モデルベーステスト442" aria-current={active === "84-モデルベーステスト442" ? "location" : undefined} onClick={handleLinkClick}>8.4 モデルベーステスト（4.4.2）</a></li>
<li><a className={`nav-link nav-h3${active === "85-スクリプト化テストと探索的テスト443-445" ? " active" : ""}`} data-target="85-スクリプト化テストと探索的テスト443-445" href="#85-スクリプト化テストと探索的テスト443-445" aria-current={active === "85-スクリプト化テストと探索的テスト443-445" ? "location" : undefined} onClick={handleLinkClick}>8.5 スクリプト化テストと探索的テスト（4.4.3, 4.4.5）</a></li>
<li><a className={`nav-link nav-h3${active === "86-再テストと回帰テスト446" ? " active" : ""}`} data-target="86-再テストと回帰テスト446" href="#86-再テストと回帰テスト446" aria-current={active === "86-再テストと回帰テスト446" ? "location" : undefined} onClick={handleLinkClick}>8.6 再テストと回帰テスト（4.4.6）</a></li>
<li><a className={`nav-link nav-h3${active === "87-手動テストと自動テスト447" ? " active" : ""}`} data-target="87-手動テストと自動テスト447" href="#87-手動テストと自動テスト447" aria-current={active === "87-手動テストと自動テスト447" ? "location" : undefined} onClick={handleLinkClick}>8.7 手動テストと自動テスト（4.4.7）</a></li>
<li><a className={`nav-link nav-h3${active === "88-その他のテストアプローチ4484411" ? " active" : ""}`} data-target="88-その他のテストアプローチ4484411" href="#88-その他のテストアプローチ4484411" aria-current={active === "88-その他のテストアプローチ4484411" ? "location" : undefined} onClick={handleLinkClick}>8.8 その他のテストアプローチ（4.4.8〜4.4.11）</a></li>
<li><a className={`nav-link nav-h3${active === "89-aiに関する用語も追加されている" ? " active" : ""}`} data-target="89-aiに関する用語も追加されている" href="#89-aiに関する用語も追加されている" aria-current={active === "89-aiに関する用語も追加されている" ? "location" : undefined} onClick={handleLinkClick}>8.9 AIに関する用語も追加されている</a></li>
<li><a className={`nav-link nav-h3${active === "810-テスト環境とテストデータ管理4412-4413" ? " active" : ""}`} data-target="810-テスト環境とテストデータ管理4412-4413" href="#810-テスト環境とテストデータ管理4412-4413" aria-current={active === "810-テスト環境とテストデータ管理4412-4413" ? "location" : undefined} onClick={handleLinkClick}>8.10 テスト環境とテストデータ管理（4.4.12, 4.4.13）</a></li>
</ul></li>
<li><a className={`nav-link nav-h2${active === "9-管理報告欠陥附属書4547附属書ab" ? " active" : ""}`} data-target="9-管理報告欠陥附属書4547附属書ab" href="#9-管理報告欠陥附属書4547附属書ab" aria-current={active === "9-管理報告欠陥附属書4547附属書ab" ? "location" : undefined} onClick={handleLinkClick}>9. 管理・報告・欠陥、附属書（4.5〜4.7、附属書A/B）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "91-プロジェクトマネジメントとテスト45" ? " active" : ""}`} data-target="91-プロジェクトマネジメントとテスト45" href="#91-プロジェクトマネジメントとテスト45" aria-current={active === "91-プロジェクトマネジメントとテスト45" ? "location" : undefined} onClick={handleLinkClick}>9.1 プロジェクトマネジメントとテスト（4.5）</a></li>
<li><a className={`nav-link nav-h3${active === "92-コミュニケーションと報告46" ? " active" : ""}`} data-target="92-コミュニケーションと報告46" href="#92-コミュニケーションと報告46" aria-current={active === "92-コミュニケーションと報告46" ? "location" : undefined} onClick={handleLinkClick}>9.2 コミュニケーションと報告（4.6）</a></li>
<li><a className={`nav-link nav-h3${active === "93-欠陥とインシデントの管理47" ? " active" : ""}`} data-target="93-欠陥とインシデントの管理47" href="#93-欠陥とインシデントの管理47" aria-current={active === "93-欠陥とインシデントの管理47" ? "location" : undefined} onClick={handleLinkClick}>9.3 欠陥とインシデントの管理（4.7）</a></li>
<li><a className={`nav-link nav-h3${active === "94-附属書a参考-システム特性とテスト" ? " active" : ""}`} data-target="94-附属書a参考-システム特性とテスト" href="#94-附属書a参考-システム特性とテスト" aria-current={active === "94-附属書a参考-システム特性とテスト" ? "location" : undefined} onClick={handleLinkClick}>9.4 附属書A（参考）: システム特性とテスト</a></li>
<li><a className={`nav-link nav-h3${active === "95-附属書b参考-テストの役割" ? " active" : ""}`} data-target="95-附属書b参考-テストの役割" href="#95-附属書b参考-テストの役割" aria-current={active === "95-附属書b参考-テストの役割" ? "location" : undefined} onClick={handleLinkClick}>9.5 附属書B（参考）: テストの役割</a></li>
</ul></li>
<li><a className={`nav-link nav-h2${active === "10-適合性とテーラリングstep-9" ? " active" : ""}`} data-target="10-適合性とテーラリングstep-9" href="#10-適合性とテーラリングstep-9" aria-current={active === "10-適合性とテーラリングstep-9" ? "location" : undefined} onClick={handleLinkClick}>10. 適合性と「テーラリング」（Step 9）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "101-29119-1-自体には適合要求はない" ? " active" : ""}`} data-target="101-29119-1-自体には適合要求はない" href="#101-29119-1-自体には適合要求はない" aria-current={active === "101-29119-1-自体には適合要求はない" ? "location" : undefined} onClick={handleLinkClick}>10.1 29119-1 自体には適合要求はない</a></li>
<li><a className={`nav-link nav-h3${active === "102-テーラード適合tailored-conformance" ? " active" : ""}`} data-target="102-テーラード適合tailored-conformance" href="#102-テーラード適合tailored-conformance" aria-current={active === "102-テーラード適合tailored-conformance" ? "location" : undefined} onClick={handleLinkClick}>10.2 テーラード適合（Tailored conformance）</a></li>
</ul></li>
<li><a className={`nav-link nav-h2${active === "11-現場での活用step-10" ? " active" : ""}`} data-target="11-現場での活用step-10" href="#11-現場での活用step-10" aria-current={active === "11-現場での活用step-10" ? "location" : undefined} onClick={handleLinkClick}>11. 現場での活用（Step 10）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "111-使いどころ" ? " active" : ""}`} data-target="111-使いどころ" href="#111-使いどころ" aria-current={active === "111-使いどころ" ? "location" : undefined} onClick={handleLinkClick}>11.1 使いどころ</a></li>
<li><a className={`nav-link nav-h3${active === "112-実務での最初の3ステップ筆者の提案" ? " active" : ""}`} data-target="112-実務での最初の3ステップ筆者の提案" href="#112-実務での最初の3ステップ筆者の提案" aria-current={active === "112-実務での最初の3ステップ筆者の提案" ? "location" : undefined} onClick={handleLinkClick}>11.2 実務での最初の3ステップ（筆者の提案）</a></li>
</ul></li>
<li><a className={`nav-link nav-h2${active === "12-議論と批判的な見解を知っておくstep-11" ? " active" : ""}`} data-target="12-議論と批判的な見解を知っておくstep-11" href="#12-議論と批判的な見解を知っておくstep-11" aria-current={active === "12-議論と批判的な見解を知っておくstep-11" ? "location" : undefined} onClick={handleLinkClick}>12. 議論と批判的な見解を知っておく（Step 11）</a>
<ul className="nav-sublist">
</ul></li>
<li><a className={`nav-link nav-h2${active === "13-学習ロードマップ" ? " active" : ""}`} data-target="13-学習ロードマップ" href="#13-学習ロードマップ" aria-current={active === "13-学習ロードマップ" ? "location" : undefined} onClick={handleLinkClick}>13. 学習ロードマップ</a>
<ul className="nav-sublist">
</ul></li>
<li><a className={`nav-link nav-h2${active === "14-理解度チェック" ? " active" : ""}`} data-target="14-理解度チェック" href="#14-理解度チェック" aria-current={active === "14-理解度チェック" ? "location" : undefined} onClick={handleLinkClick}>14. 理解度チェック</a>
<ul className="nav-sublist">
</ul></li>
<li><a className={`nav-link nav-h2${active === "付録a-用語ミニ辞典第3章から抜粋要約" ? " active" : ""}`} data-target="付録a-用語ミニ辞典第3章から抜粋要約" href="#付録a-用語ミニ辞典第3章から抜粋要約" aria-current={active === "付録a-用語ミニ辞典第3章から抜粋要約" ? "location" : undefined} onClick={handleLinkClick}>付録A. 用語ミニ辞典（第3章から抜粋・要約）</a>
<ul className="nav-sublist">
</ul></li>
<li><a className={`nav-link nav-h2${active === "付録b-参考ソースurl" ? " active" : ""}`} data-target="付録b-参考ソースurl" href="#付録b-参考ソースurl" aria-current={active === "付録b-参考ソースurl" ? "location" : undefined} onClick={handleLinkClick}>付録B. 参考ソース（URL）</a>
<ul className="nav-sublist">
<li><a className={`nav-link nav-h3${active === "b1-一次情報規格の公式情報" ? " active" : ""}`} data-target="b1-一次情報規格の公式情報" href="#b1-一次情報規格の公式情報" aria-current={active === "b1-一次情報規格の公式情報" ? "location" : undefined} onClick={handleLinkClick}>B.1 一次情報（規格の公式情報）</a></li>
<li><a className={`nav-link nav-h3${active === "b2-規格策定関係者国際的に著名な実務家研究者の情報" ? " active" : ""}`} data-target="b2-規格策定関係者国際的に著名な実務家研究者の情報" href="#b2-規格策定関係者国際的に著名な実務家研究者の情報" aria-current={active === "b2-規格策定関係者国際的に著名な実務家研究者の情報" ? "location" : undefined} onClick={handleLinkClick}>B.2 規格策定関係者・国際的に著名な実務家・研究者の情報</a></li>
<li><a className={`nav-link nav-h3${active === "b3-批判的な見解コンテキスト駆動テストのコミュニティ" ? " active" : ""}`} data-target="b3-批判的な見解コンテキスト駆動テストのコミュニティ" href="#b3-批判的な見解コンテキスト駆動テストのコミュニティ" aria-current={active === "b3-批判的な見解コンテキスト駆動テストのコミュニティ" ? "location" : undefined} onClick={handleLinkClick}>B.3 批判的な見解（コンテキスト駆動テストのコミュニティ）</a></li>
<li><a className={`nav-link nav-h3${active === "b4-情報の鮮度に関する注記" ? " active" : ""}`} data-target="b4-情報の鮮度に関する注記" href="#b4-情報の鮮度に関する注記" aria-current={active === "b4-情報の鮮度に関する注記" ? "location" : undefined} onClick={handleLinkClick}>B.4 情報の鮮度に関する注記</a></li>
</ul></li>
</ul>
  
      </nav>
    </>
  );
}
