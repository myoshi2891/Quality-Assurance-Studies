import type { Metadata } from 'next';
import './index-page.css';
import GuideIndex from './GuideIndex';
import { NAV_ITEMS, groupByCategory, CATEGORY_CODES } from '../lib/navigation';

export const metadata: Metadata = {
  title: 'QA_STUDIES ガイドライブラリ',
  description: 'ISTQB 準拠のテスト学習ガイドを、基礎から Expert まで登る順に並べたインデックス。',
};

/**
 * Renders the guide library index at the site root.
 *
 * かつてこのルートには「現代ソフトウェアテスト完全ガイド 2025」本文が置かれていたが、
 * ガイド数の増加によりサイトの入口として機能しなくなったため、本文は
 * `/modern-software-testing-complete-guide-2025` へ移設し、ここは全ガイドへの
 * 導線に専念する。
 *
 * ヒーローの階梯（ladder）は装飾ではなく、ISTQB の実際の資格レベルを段として並べ、
 * バー長をそのレベルのガイド数に比例させたもの。ライブラリの偏り（Specialist に量が
 * 集中している事実）がそのまま形として読め、各段はそのセクションへのアンカーになる。
 *
 * @returns The JSX element for the index layout (level ladder hero + searchable level sections)
 */
export default function Home() {
  const levels = groupByCategory(NAV_ITEMS).filter((g) => g.category !== 'home');
  const guideCount = levels.reduce((sum, g) => sum + g.items.length, 0);
  const largest = Math.max(...levels.map((g) => g.items.length));

  return (
    <main className="index-page">
      <header className="index-hero">
        <p className="index-eyebrow">QA_STUDIES / LIBRARY</p>
        <h1 className="index-title">
          登る順に並べた、
          <br />
          {guideCount} のガイド。
        </h1>
        <p className="index-lead">
          ISTQB シラバスと現場実践をもとにしたテスト学習ガイド集。
          レベルから辿るか、検索で直接開く。
        </p>
        <p className="index-meta">
          <span data-total-guides>{guideCount} GUIDES</span>
          <span aria-hidden="true"> · </span>
          <span>{levels.length} LEVELS</span>
        </p>

        <nav className="ladder" aria-label="レベル別ガイド数">
          {levels.map((level) => (
            <a
              key={level.category}
              href={`#${level.category}`}
              className="ladder-rung"
              data-ladder-rung
              data-category={level.category}
            >
              <span className="ladder-code">{CATEGORY_CODES[level.category]}</span>
              <span className="ladder-label">{level.title}</span>
              <span className="ladder-bar" aria-hidden="true">
                <span
                  className="ladder-fill"
                  style={{ width: `${Math.round((level.items.length / largest) * 100)}%` }}
                />
              </span>
              <span className="ladder-count">{level.items.length}</span>
            </a>
          ))}
        </nav>
      </header>

      <GuideIndex />
    </main>
  );
}
