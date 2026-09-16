'use client';

import React, { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export const TOC_ITEMS: readonly TocItem[] = [
  { id: 'はじめにこのガイドについて', text: 'はじめに：このガイドについて', level: 2 },
  { id: '対象読者', text: '対象読者', level: 3 },
  { id: 'このガイドで学べること', text: 'このガイドで学べること', level: 3 },
  { id: '1-コンポーネントベースソフトウェアの基礎', text: '1. コンポーネントベースソフトウェアの基礎', level: 2 },
  { id: '11-ソフトウェアコンポーネントとは何か', text: '1.1 「ソフトウェアコンポーネント」とは何か', level: 3 },
  { id: '12-コンポーネントベースソフトウェアシステムcbssの特徴', text: '1.2 コンポーネントベースソフトウェアシステム（CBSS）の特徴', level: 3 },
  { id: '13-モノリシックな開発との違い', text: '1.3 モノリシックな開発との違い', level: 3 },
  { id: '14-現代におけるコンポーネントの広がり', text: '1.4 現代における「コンポーネント」の広がり', level: 3 },
  { id: '2-なぜコンポーネントのテストは難しいのか', text: '2. なぜコンポーネントのテストは難しいのか', level: 2 },
  { id: '21-ブラックボックスの壁', text: '2.1 ブラックボックスの壁', level: 3 },
  { id: '22-cots商用オフザシェルフコンポーネント特有の課題', text: '2.2 COTS（商用オフザシェルフ）コンポーネント特有の課題', level: 3 },
  { id: '23-テスト容易性testabilityという設計上の課題', text: '2.3 テスト容易性（Testability）という設計上の課題', level: 3 },
  { id: '24-バージョンと互換性の問題', text: '2.4 バージョンと互換性の問題', level: 3 },
  { id: '3-テストレベルの全体像とテストピラミッド', text: '3. テストレベルの全体像とテストピラミッド', level: 2 },
  { id: '31-テストピラミッドfowler--cohn', text: '3.1 テストピラミッド（Fowler / Cohn）', level: 3 },
  { id: '32-googleのsmallmediumlargeモデル', text: '3.2 Googleの「Small/Medium/Large」モデル', level: 3 },
  { id: '33-テストレベル比較表', text: '3.3 テストレベル比較表', level: 3 },
  { id: '4-コンポーネントテストと統合テストの実践', text: '4. コンポーネントテストと統合テストの実践', level: 2 },
  { id: '41-コンポーネントテストとは', text: '4.1 コンポーネントテストとは', level: 3 },
  { id: '42-統合テストトップダウンとボトムアップ', text: '4.2 統合テスト：トップダウンとボトムアップ', level: 3 },
  { id: '43-テストダブルtest-doubleの使い分け', text: '4.3 テストダブル（Test Double）の使い分け', level: 3 },
  { id: '5-コントラクトテストとコンシューマー駆動契約cdc', text: '5. コントラクトテストとコンシューマー駆動契約（CDC）', level: 2 },
  { id: '51-なぜサービス間の統合テストは壊れやすいのか', text: '5.1 なぜサービス間の統合テストは壊れやすいのか', level: 3 },
  { id: '52-コンシューマー駆動契約cdcとは', text: '5.2 コンシューマー駆動契約（CDC）とは', level: 3 },
  { id: '53-複数のコンシューマーを持つプロバイダの契約管理', text: '5.3 複数のコンシューマーを持つプロバイダの契約管理', level: 3 },
  { id: '54-コントラクトテストのコード例イメージ', text: '5.4 コントラクトテストのコード例（イメージ）', level: 3 },
  { id: '6-サードパーティcotsコンポーネントの品質保証', text: '6. サードパーティ／COTSコンポーネントの品質保証', level: 2 },
  { id: '61-動くかどうかだけでは足りない', text: '6.1 「動くかどうか」だけでは足りない', level: 3 },
  { id: '62-ソフトウェア構成分析scaとsbom', text: '6.2 ソフトウェア構成分析（SCA）とSBOM', level: 3 },
  { id: '63-サードパーティコンポーネントに対するqaチェック項目', text: '6.3 サードパーティコンポーネントに対するQAチェック項目', level: 3 },
  { id: '64-信頼するが検証するという姿勢', text: '6.4 「信頼するが検証する」という姿勢', level: 3 },
  { id: '7-現実的な依存関係を使ったテスト', text: '7. 現実的な依存関係を使ったテスト', level: 2 },
  { id: '71-モックだけでは見えないもの', text: '7.1 モックだけでは見えないもの', level: 3 },
  { id: '72-testcontainersという選択肢', text: '7.2 Testcontainersという選択肢', level: 3 },
  { id: '73-モックと実物どちらを使うべきか', text: '7.3 モックと実物、どちらを使うべきか', level: 3 },
  { id: '8-テストの質を測るカバレッジとミューテーションテスト', text: '8. テストの「質」を測る：カバレッジとミューテーションテスト', level: 2 },
  { id: '81-コードカバレッジの限界', text: '8.1 コードカバレッジの限界', level: 3 },
  { id: '82-ミューテーションテストという発想', text: '8.2 ミューテーションテストという発想', level: 3 },
  { id: '83-コンポーネント単位での品質メトリクス', text: '8.3 コンポーネント単位での品質メトリクス', level: 3 },
  { id: '9-品質特性と非機能テスト', text: '9. 品質特性と非機能テスト', level: 2 },
  { id: '91-コンポーネントベースシステムにおける品質特性', text: '9.1 コンポーネントベースシステムにおける品質特性', level: 3 },
  { id: '92-コンポーネントの性能テスト', text: '9.2 コンポーネントの性能テスト', level: 3 },
  { id: '93-検証verificationと妥当性確認validation', text: '9.3 検証（Verification）と妥当性確認（Validation）', level: 3 },
  { id: '10-cicdにおける継続的テストパイプライン', text: '10. CI/CDにおける継続的テストパイプライン', level: 2 },
  { id: '101-テストピラミッドをパイプラインに落とし込む', text: '10.1 テストピラミッドをパイプラインに落とし込む', level: 3 },
  { id: '102-速いテストを頻繁に遅いテストをたまにという原則', text: '10.2 「速いテストを頻繁に、遅いテストをたまに」という原則', level: 3 },
  { id: '11-まとめ品質保証チェックリスト', text: '11. まとめ：品質保証チェックリスト', level: 2 },
  { id: '12-参考文献', text: '12. 参考文献', level: 2 },
  { id: '学術文献専門書籍', text: '学術文献・専門書籍', level: 3 },
  { id: 'martin-fowler--thoughtworks', text: 'Martin Fowler / ThoughtWorks', level: 3 },
  { id: 'google', text: 'Google', level: 3 },
  { id: '標準非営利団体', text: '標準・非営利団体', level: 3 },
  { id: 'ツール公式ドキュメント', text: 'ツール公式ドキュメント', level: 3 },
] as const;

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-15% 0px -75% 0px',
        threshold: 0,
      }
    );

    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button
        className="sidebar-toggle"
        id="sidebarToggle"
        aria-label="メニューを開閉"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
      </button>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-brand-mark">Q</div>
          <div>
            <div className="sidebar-brand-text">コンポーネントQAガイド</div>
            <div className="sidebar-brand-sub">Testing &amp; QA for CBSS</div>
          </div>
        </div>

        <ul className="nav-list">
          {TOC_ITEMS.map((item) => {
            const isH2 = item.level === 2;
            const isActive = activeId === item.id;

            return (
              <li key={item.id} className={isH2 ? 'nav-item-h2' : 'nav-item-h3'}>
                <a
                  className={`${isH2 ? 'nav-h2' : 'nav-h3'} ${isActive ? 'active' : ''}`}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
