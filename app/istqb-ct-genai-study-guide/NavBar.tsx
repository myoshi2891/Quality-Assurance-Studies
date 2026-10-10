'use client';
import React, { useEffect, useRef, useState } from 'react';
const IDS = [
  "0-資格の概要",
  "01-試験概要",
  "02-ビジネスアウトカム合格者が到達すべき状態",
  "03-認知レベルk-レベル",
  "04-章構成と学習時間",
  "第1章-ソフトウェアテストにおける生成ai入門100分",
  "11-生成aiの基礎と主要概念",
  "12-ソフトウェアテストにおける生成ai活用の基本原則",
  "第2章-効果的なソフトウェアテストのためのプロンプトエンジニアリング365分",
  "21-効果的なプロンプト開発",
  "22-プロンプトエンジニアリング技法の適用k3",
  "23-生成ai結果の評価とプロンプトの改善",
  "第3章-ソフトウェアテストにおける生成aiのリスク管理160分",
  "31-ハルシネーション推論エラーバイアス",
  "32-データプライバシーとセキュリティリスク",
  "33-エネルギー消費と環境影響",
  "34-ai規制標準ベストプラクティスフレームワークk1",
  "第4章-ソフトウェアテストのためのllm搭載テストインフラ110分",
  "41-llm搭載テストインフラのアーキテクチャアプローチ",
  "42-ファインチューニングとllmops",
  "第5章-テスト組織における生成aiの導入と統合80分",
  "51-生成ai導入のロードマップ",
  "52-生成ai導入における変更管理",
  "学習ロードマップと試験対策のポイント",
  "出典参考資料"
];
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(IDS[0]);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-15% 0px -75% 0px', threshold: 0 });
    IDS.forEach(id => { const heading = document.getElementById(id); if (heading) observer.observe(heading); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  const onNavigate = (event: React.MouseEvent<HTMLElement>) => {
    const target = (event.target as Element).closest('a')?.getAttribute('data-target');
    if (!target) return;
    setActive(target);
    setOpen(false);
  };
  return <>

    <button className="mobile-toggle" id="sidebarToggle" ref={toggle} aria-label="メニューを開閉" aria-expanded={open} aria-controls="sidebar" onClick={() => setOpen(value => !value)}>☰
    </button>

    <nav className={open ? "sidebar open" : "sidebar"} id="sidebar" aria-label="CT-GenAI 学習ガイドの目次" onClick={onNavigate}>
      <div className="sidebar-title">
        {"CT-GenAI 完全学習ガイド"}
      </div>
      <ul >
        <li >
          <a className={active === "0-資格の概要" ? "nav-h2 active" : "nav-h2"} aria-current={active === "0-資格の概要" ? 'location' : undefined} data-target="0-資格の概要" href="#0-資格の概要">
            {"0. 資格の概要"}
          </a>
          <ul className="nav-sub">
            <li >
              <a className={active === "01-試験概要" ? "nav-h3 active" : "nav-h3"} aria-current={active === "01-試験概要" ? 'location' : undefined} data-target="01-試験概要" href="#01-試験概要">
                {"0.1 試験概要"}
              </a>
            </li>
            <li >
              <a className={active === "02-ビジネスアウトカム合格者が到達すべき状態" ? "nav-h3 active" : "nav-h3"} aria-current={active === "02-ビジネスアウトカム合格者が到達すべき状態" ? 'location' : undefined} data-target="02-ビジネスアウトカム合格者が到達すべき状態" href="#02-ビジネスアウトカム合格者が到達すべき状態">
                {"0.2 ビジネスアウトカム（合格者が到達すべき状態）"}
              </a>
            </li>
            <li >
              <a className={active === "03-認知レベルk-レベル" ? "nav-h3 active" : "nav-h3"} aria-current={active === "03-認知レベルk-レベル" ? 'location' : undefined} data-target="03-認知レベルk-レベル" href="#03-認知レベルk-レベル">
                {"0.3 認知レベル（K-レベル）"}
              </a>
            </li>
            <li >
              <a className={active === "04-章構成と学習時間" ? "nav-h3 active" : "nav-h3"} aria-current={active === "04-章構成と学習時間" ? 'location' : undefined} data-target="04-章構成と学習時間" href="#04-章構成と学習時間">
                {"0.4 章構成と学習時間"}
              </a>
            </li>
          </ul>
        </li>
        <li >
          <a className={active === "第1章-ソフトウェアテストにおける生成ai入門100分" ? "nav-h2 active" : "nav-h2"} aria-current={active === "第1章-ソフトウェアテストにおける生成ai入門100分" ? 'location' : undefined} data-target="第1章-ソフトウェアテストにおける生成ai入門100分" href="#第1章-ソフトウェアテストにおける生成ai入門100分">
            {"第1章 ソフトウェアテストにおける生成AI入門（100分）"}
          </a>
          <ul className="nav-sub">
            <li >
              <a className={active === "11-生成aiの基礎と主要概念" ? "nav-h3 active" : "nav-h3"} aria-current={active === "11-生成aiの基礎と主要概念" ? 'location' : undefined} data-target="11-生成aiの基礎と主要概念" href="#11-生成aiの基礎と主要概念">
                {"1.1 生成AIの基礎と主要概念"}
              </a>
            </li>
            <li >
              <a className={active === "12-ソフトウェアテストにおける生成ai活用の基本原則" ? "nav-h3 active" : "nav-h3"} aria-current={active === "12-ソフトウェアテストにおける生成ai活用の基本原則" ? 'location' : undefined} data-target="12-ソフトウェアテストにおける生成ai活用の基本原則" href="#12-ソフトウェアテストにおける生成ai活用の基本原則">
                {"1.2 ソフトウェアテストにおける生成AI活用の基本原則"}
              </a>
            </li>
          </ul>
        </li>
        <li >
          <a className={active === "第2章-効果的なソフトウェアテストのためのプロンプトエンジニアリング365分" ? "nav-h2 active" : "nav-h2"} aria-current={active === "第2章-効果的なソフトウェアテストのためのプロンプトエンジニアリング365分" ? 'location' : undefined} data-target="第2章-効果的なソフトウェアテストのためのプロンプトエンジニアリング365分" href="#第2章-効果的なソフトウェアテストのためのプロンプトエンジニアリング365分">
            {"第2章 効果的なソフトウェアテストのためのプロンプトエンジニアリング（365分）"}
          </a>
          <ul className="nav-sub">
            <li >
              <a className={active === "21-効果的なプロンプト開発" ? "nav-h3 active" : "nav-h3"} aria-current={active === "21-効果的なプロンプト開発" ? 'location' : undefined} data-target="21-効果的なプロンプト開発" href="#21-効果的なプロンプト開発">
                {"2.1 効果的なプロンプト開発"}
              </a>
            </li>
            <li >
              <a className={active === "22-プロンプトエンジニアリング技法の適用k3" ? "nav-h3 active" : "nav-h3"} aria-current={active === "22-プロンプトエンジニアリング技法の適用k3" ? 'location' : undefined} data-target="22-プロンプトエンジニアリング技法の適用k3" href="#22-プロンプトエンジニアリング技法の適用k3">
                {"2.2 プロンプトエンジニアリング技法の適用（K3）"}
              </a>
            </li>
            <li >
              <a className={active === "23-生成ai結果の評価とプロンプトの改善" ? "nav-h3 active" : "nav-h3"} aria-current={active === "23-生成ai結果の評価とプロンプトの改善" ? 'location' : undefined} data-target="23-生成ai結果の評価とプロンプトの改善" href="#23-生成ai結果の評価とプロンプトの改善">
                {"2.3 生成AI結果の評価とプロンプトの改善"}
              </a>
            </li>
          </ul>
        </li>
        <li >
          <a className={active === "第3章-ソフトウェアテストにおける生成aiのリスク管理160分" ? "nav-h2 active" : "nav-h2"} aria-current={active === "第3章-ソフトウェアテストにおける生成aiのリスク管理160分" ? 'location' : undefined} data-target="第3章-ソフトウェアテストにおける生成aiのリスク管理160分" href="#第3章-ソフトウェアテストにおける生成aiのリスク管理160分">
            {"第3章 ソフトウェアテストにおける生成AIのリスク管理（160分）"}
          </a>
          <ul className="nav-sub">
            <li >
              <a className={active === "31-ハルシネーション推論エラーバイアス" ? "nav-h3 active" : "nav-h3"} aria-current={active === "31-ハルシネーション推論エラーバイアス" ? 'location' : undefined} data-target="31-ハルシネーション推論エラーバイアス" href="#31-ハルシネーション推論エラーバイアス">
                {"3.1 ハルシネーション・推論エラー・バイアス"}
              </a>
            </li>
            <li >
              <a className={active === "32-データプライバシーとセキュリティリスク" ? "nav-h3 active" : "nav-h3"} aria-current={active === "32-データプライバシーとセキュリティリスク" ? 'location' : undefined} data-target="32-データプライバシーとセキュリティリスク" href="#32-データプライバシーとセキュリティリスク">
                {"3.2 データプライバシーとセキュリティリスク"}
              </a>
            </li>
            <li >
              <a className={active === "33-エネルギー消費と環境影響" ? "nav-h3 active" : "nav-h3"} aria-current={active === "33-エネルギー消費と環境影響" ? 'location' : undefined} data-target="33-エネルギー消費と環境影響" href="#33-エネルギー消費と環境影響">
                {"3.3 エネルギー消費と環境影響"}
              </a>
            </li>
            <li >
              <a className={active === "34-ai規制標準ベストプラクティスフレームワークk1" ? "nav-h3 active" : "nav-h3"} aria-current={active === "34-ai規制標準ベストプラクティスフレームワークk1" ? 'location' : undefined} data-target="34-ai規制標準ベストプラクティスフレームワークk1" href="#34-ai規制標準ベストプラクティスフレームワークk1">
                {"3.4 AI規制・標準・ベストプラクティスフレームワーク（K1）"}
              </a>
            </li>
          </ul>
        </li>
        <li >
          <a className={active === "第4章-ソフトウェアテストのためのllm搭載テストインフラ110分" ? "nav-h2 active" : "nav-h2"} aria-current={active === "第4章-ソフトウェアテストのためのllm搭載テストインフラ110分" ? 'location' : undefined} data-target="第4章-ソフトウェアテストのためのllm搭載テストインフラ110分" href="#第4章-ソフトウェアテストのためのllm搭載テストインフラ110分">
            {"第4章 ソフトウェアテストのためのLLM搭載テストインフラ（110分）"}
          </a>
          <ul className="nav-sub">
            <li >
              <a className={active === "41-llm搭載テストインフラのアーキテクチャアプローチ" ? "nav-h3 active" : "nav-h3"} aria-current={active === "41-llm搭載テストインフラのアーキテクチャアプローチ" ? 'location' : undefined} data-target="41-llm搭載テストインフラのアーキテクチャアプローチ" href="#41-llm搭載テストインフラのアーキテクチャアプローチ">
                {"4.1 LLM搭載テストインフラのアーキテクチャアプローチ"}
              </a>
            </li>
            <li >
              <a className={active === "42-ファインチューニングとllmops" ? "nav-h3 active" : "nav-h3"} aria-current={active === "42-ファインチューニングとllmops" ? 'location' : undefined} data-target="42-ファインチューニングとllmops" href="#42-ファインチューニングとllmops">
                {"4.2 ファインチューニングとLLMOps"}
              </a>
            </li>
          </ul>
        </li>
        <li >
          <a className={active === "第5章-テスト組織における生成aiの導入と統合80分" ? "nav-h2 active" : "nav-h2"} aria-current={active === "第5章-テスト組織における生成aiの導入と統合80分" ? 'location' : undefined} data-target="第5章-テスト組織における生成aiの導入と統合80分" href="#第5章-テスト組織における生成aiの導入と統合80分">
            {"第5章 テスト組織における生成AIの導入と統合（80分）"}
          </a>
          <ul className="nav-sub">
            <li >
              <a className={active === "51-生成ai導入のロードマップ" ? "nav-h3 active" : "nav-h3"} aria-current={active === "51-生成ai導入のロードマップ" ? 'location' : undefined} data-target="51-生成ai導入のロードマップ" href="#51-生成ai導入のロードマップ">
                {"5.1 生成AI導入のロードマップ"}
              </a>
            </li>
            <li >
              <a className={active === "52-生成ai導入における変更管理" ? "nav-h3 active" : "nav-h3"} aria-current={active === "52-生成ai導入における変更管理" ? 'location' : undefined} data-target="52-生成ai導入における変更管理" href="#52-生成ai導入における変更管理">
                {"5.2 生成AI導入における変更管理"}
              </a>
            </li>
          </ul>
        </li>
        <li >
          <a className={active === "学習ロードマップと試験対策のポイント" ? "nav-h2 active" : "nav-h2"} aria-current={active === "学習ロードマップと試験対策のポイント" ? 'location' : undefined} data-target="学習ロードマップと試験対策のポイント" href="#学習ロードマップと試験対策のポイント">
            {"学習ロードマップと試験対策のポイント"}
          </a>
        </li>
        <li >
          <a className={active === "出典参考資料" ? "nav-h2 active" : "nav-h2"} aria-current={active === "出典参考資料" ? 'location' : undefined} data-target="出典参考資料" href="#出典参考資料">
            {"出典・参考資料"}
          </a>
        </li>
      </ul>
    </nav>

  </>;
}
