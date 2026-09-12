'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface TocItem {
  id: string;
  num: string;
  label: string;
}

export const TOC_ITEMS: TocItem[] = [
  { id: 'overview', num: '01', label: 'この本はどんな本か' },
  { id: 'why', num: '02', label: 'なぜ探索的テストか' },
  { id: 'elements', num: '03', label: '本質的要素' },
  { id: 'roadmap', num: '04', label: '実践ロードマップ' },
  { id: 'step1', num: '05', label: 'Step1: チャーターを書く' },
  { id: 'step2', num: '06', label: 'Step2: セッション構造化' },
  { id: 'step3', num: '07', label: 'Step3: 観察力を鍛える' },
  { id: 'step4', num: '08', label: 'Step4: バリエーション発見' },
  { id: 'step5', num: '09', label: 'Step5: 結果を評価する' },
  { id: 'step6', num: '10', label: 'Step6: 次元を加える' },
  { id: 'step7', num: '11', label: 'Step7: コンテキスト適用' },
  { id: 'step8', num: '12', label: 'Step8: デブリーフィング' },
  { id: 'cheatsheet', num: '13', label: 'ヒューリスティック' },
  { id: 'ai2026', num: '14', label: '2026年とAI時代' },
  { id: 'checklist', num: '15', label: 'チェックリスト' },
  { id: 'references', num: '16', label: '出典URL一覧' },
];

const TOC_LIST_ID = 'explore-it-toc-list';

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('overview');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  const toggleToc = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // 閉じる前にトグルへフォーカスを戻す。
  // 閉じた瞬間に目次が display:none となり、フォーカスが body へ飛ぶのを防ぐ
  const closeToc = useCallback(() => {
    if (isOpen) {
      toggleRef.current?.focus({ preventScroll: true });
    }
    setIsOpen(false);
  }, [isOpen]);

  // 開いた直後は先頭リンクへフォーカスを移し、キーボード操作を目次内で継続できるようにする
  useEffect(() => {
    if (!isOpen) return;
    listRef.current?.querySelector('a')?.focus();
  }, [isOpen]);

  // Escape で閉じたときはトグルボタンへフォーカスを戻す（フォーカスの迷子を防ぐ）
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key !== 'Escape' || !isOpen) return;
      setIsOpen(false);
      toggleRef.current?.focus();
    },
    [isOpen]
  );

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
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
      }
    );

    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="toc" aria-label="目次" onKeyDown={handleKeyDown}>
      <div className="brand">
        Field Guide<strong>Explore It!</strong>
      </div>
      <button
        type="button"
        ref={toggleRef}
        className="toc-toggle"
        aria-expanded={isOpen}
        aria-controls={TOC_LIST_ID}
        onClick={toggleToc}
      >
        {isOpen ? '目次を閉じる' : '目次を開く'}
      </button>
      <ol id={TOC_LIST_ID} ref={listRef} className={isOpen ? 'open' : undefined}>
        {TOC_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeId === item.id ? 'active' : ''}
              aria-current={activeId === item.id ? 'location' : undefined}
              onClick={closeToc}
            >
              {item.num} ｜ {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
