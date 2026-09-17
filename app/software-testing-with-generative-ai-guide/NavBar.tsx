'use client';

import React, { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
  level: 2 | 3;
}

export interface TocGroup {
  id: string;
  label: string;
  subItems?: { id: string; label: string }[];
}

export const TOC_GROUPS: TocGroup[] = [
  { id: 'この記事の対象読者', label: 'この記事の対象読者' },
  {
    id: '第1章-生成aiとllmの基礎知識',
    label: '第1章 生成AIとLLMの基礎知識',
    subItems: [
      { id: '11-aiの系譜を整理する', label: '1.1 AIの系譜を整理する' },
      { id: '12-トークン化埋め込みコンテキストウィンドウ', label: '1.2 トークン化・埋め込み・コンテキストウィンドウ' },
      { id: '13-foundationinstruction-tunedreasoning-llmの違い', label: '1.3 Foundation・Instruction-tuned・Reasoning LLMの違い' },
      { id: '14-マルチモーダルllmとテストへの応用', label: '1.4 マルチモーダルLLMとテストへの応用' },
    ],
  },
  {
    id: '第2章-マインドセット--人間とaiの協働モデル',
    label: '第2章 マインドセット ― 人間とAIの協働モデル',
    subItems: [
      { id: '21-aiは代替ではなく増幅器である', label: '2.1 AIは代替ではなく増幅器である' },
      { id: '22-予測不能なジーニーとして向き合う', label: '2.2 「予測不能なジーニー」として向き合う' },
      { id: '23-llm出力は必ず検証する', label: '2.3 LLM出力は必ず検証する' },
      { id: '24-生成aiの3つの能力を見極める', label: '2.4 生成AIの3つの能力を見極める' },
      { id: '25-協働のループを描く', label: '2.5 協働のループを描く' },
      { id: '26-自動化バイアスへの警戒', label: '2.6 自動化バイアスへの警戒' },
    ],
  },
  {
    id: '第3章-プロンプトエンジニアリングの基本とテスト実務への応用',
    label: '第3章 プロンプトエンジニアリングの基本とテスト実務への応用',
    subItems: [
      { id: '31-プロンプトの6要素構造', label: '3.1 プロンプトの6要素構造' },
      { id: '32-3つの核となるプロンプト技法', label: '3.2 3つの核となるプロンプト技法' },
      { id: '33-プロンプトチェイニングの具体例', label: '3.3 プロンプトチェイニングの具体例' },
      { id: '34-システムプロンプトとユーザープロンプト', label: '3.4 システムプロンプトとユーザープロンプト' },
    ],
  },
  {
    id: '第4章-aiによるテスト分析とテストケース生成',
    label: '第4章 AIによるテスト分析とテストケース生成',
    subItems: [
      { id: '41-要件から潜在的な不具合を洗い出す', label: '4.1 要件から潜在的な不具合を洗い出す' },
      { id: '42-テスト条件からテストケースへ', label: '4.2 テスト条件からテストケースへ' },
      { id: '43-gherkin形式のテストケース生成', label: '4.3 Gherkin形式のテストケース生成' },
      { id: '44-生成結果を評価するための指標', label: '4.4 生成結果を評価するための指標' },
    ],
  },
  {
    id: '第5章-aiによるテストデータ生成',
    label: '第5章 AIによるテストデータ生成',
    subItems: [
      { id: '51-合成テストデータのメリット', label: '5.1 合成テストデータのメリット' },
      { id: '52-データ生成のパイプライン', label: '5.2 データ生成のパイプライン' },
      { id: '53-プライバシーを意識したデータ生成', label: '5.3 プライバシーを意識したデータ生成' },
    ],
  },
  {
    id: '第6章-aiを活用したテスト自動化とセルフヒーリング',
    label: '第6章 AIを活用したテスト自動化とセルフヒーリング',
    subItems: [
      { id: '61-コード生成による自動化の高速化', label: '6.1 コード生成による自動化の高速化' },
      { id: '62-アクセシビリティツリーに基づくブラウザ自動化', label: '6.2 アクセシビリティツリーに基づくブラウザ自動化' },
      { id: '63-セルフヒーリング型テスト自動化の2世代', label: '6.3 セルフヒーリング型テスト自動化の2世代' },
      { id: '64-コマンドラインからのai活用とドキュメント生成', label: '6.4 コマンドラインからのAI活用とドキュメント生成' },
      { id: '65-リグレッションテストへの適用', label: '6.5 リグレッションテストへの適用' },
    ],
  },
  {
    id: '第7章-探索的テストとaiアシスタント',
    label: '第7章 探索的テストとAIアシスタント',
    subItems: [
      { id: '71-チャーターとリスクの洗い出し', label: '7.1 チャーターとリスクの洗い出し' },
      { id: '72-セッション中のai活用ループ', label: '7.2 セッション中のAI活用ループ' },
      { id: '73-バグ調査の補助', label: '7.3 バグ調査の補助' },
    ],
  },
  {
    id: '第8章-aiエージェントとmcpによるテスト作業の自動化',
    label: '第8章 AIエージェントとMCPによるテスト作業の自動化',
    subItems: [
      { id: '81-llm-powered-agentとは何か', label: '8.1 LLM-powered agentとは何か' },
      { id: '82-ツール呼び出しのループ', label: '8.2 ツール呼び出しのループ' },
      { id: '83-model-context-protocolmcpの基本構造', label: '8.3 Model Context Protocol（MCP）の基本構造' },
    ],
  },
  {
    id: '第9章-生成ai活用のリスク管理',
    label: '第9章 生成AI活用のリスク管理',
    subItems: [
      { id: '91-ハルシネーション推論エラーバイアス', label: '9.1 ハルシネーション・推論エラー・バイアス' },
      { id: '92-データプライバシーとセキュリティのリスク', label: '9.2 データプライバシーとセキュリティのリスク' },
      { id: '93-環境負荷という見落とされがちな視点', label: '9.3 環境負荷という見落とされがちな視点' },
      { id: '94-規制標準の全体像', label: '9.4 規制・標準の全体像' },
    ],
  },
  {
    id: '第10章-コンテキストの拡張--ragとファインチューニング',
    label: '第10章 コンテキストの拡張 ― RAGとファインチューニング',
    subItems: [
      { id: '101-rag検索拡張生成の仕組み', label: '10.1 RAG（検索拡張生成）の仕組み' },
      { id: '102-ファインチューニングとの比較', label: '10.2 ファインチューニングとの比較' },
      { id: '103-llmopsという運用の視点', label: '10.3 LLMOpsという運用の視点' },
    ],
  },
  {
    id: '第11章-組織導入とチーム変革',
    label: '第11章 組織導入とチーム変革',
    subItems: [
      { id: '111-shadow-aiのリスク', label: '11.1 Shadow AIのリスク' },
      { id: '112-段階的な導入ロードマップ', label: '11.2 段階的な導入ロードマップ' },
      { id: '113-dora-2025レポートが示す教訓', label: '11.3 DORA 2025レポートが示す教訓' },
      { id: '114-必要なスキルとチームの変化', label: '11.4 必要なスキルとチームの変化' },
    ],
  },
  {
    id: '第12章-まとめとチェックリスト',
    label: '第12章 まとめとチェックリスト',
    subItems: [
      { id: '121-学習の道筋', label: '12.1 学習の道筋' },
      { id: '122-実践チェックリスト', label: '12.2 実践チェックリスト' },
      { id: '123-最後に', label: '12.3 最後に' },
    ],
  },
  { id: '参考文献', label: '参考文献' },
];

export const TOC_ITEMS: TocItem[] = TOC_GROUPS.flatMap((group) => [
  { id: group.id, label: group.label, level: 2 },
  ...(group.subItems?.map((sub) => ({ id: sub.id, label: sub.label, level: 3 as const })) || []),
]);

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('この記事の対象読者');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const ids = TOC_ITEMS.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="sidebar-toggle"
        id="sidebarToggle"
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div
        className={`sidebar-scrim ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar" aria-label="目次">
        <div className="sidebar-title">生成AIとソフトウェアテスト</div>
        <ul className="nav-list">
          {TOC_GROUPS.map((group) => (
            <li key={group.id} className="nav-h2">
              <a
                href={`#${group.id}`}
                className={activeId === group.id ? 'active' : ''}
                aria-current={activeId === group.id ? 'location' : undefined}
                onClick={handleLinkClick}
              >
                {group.label}
              </a>
              {group.subItems && group.subItems.length > 0 && (
                <ul className="nav-sub">
                  {group.subItems.map((sub) => (
                    <li key={sub.id} className="nav-h3">
                      <a
                        href={`#${sub.id}`}
                        className={activeId === sub.id ? 'active' : ''}
                        aria-current={activeId === sub.id ? 'location' : undefined}
                        onClick={handleLinkClick}
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
