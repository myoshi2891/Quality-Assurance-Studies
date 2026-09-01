import type { Metadata } from 'next';
import './index-page.css';
import GuideIndex from './GuideIndex';
import { NAV_ITEMS, groupByCategory } from '../lib/navigation';

export const metadata: Metadata = {
  title: 'QA_STUDIES ガイドライブラリ',
  description: 'ISTQB 準拠のテスト学習ガイドをカテゴリ別に一覧できるインデックス。',
};

/**
 * Renders the guide library index at the site root.
 *
 * かつてこのルートには「現代ソフトウェアテスト完全ガイド 2025」本文が置かれていたが、
 * ガイド数の増加によりサイトの入口として機能しなくなったため、本文は
 * `/modern-software-testing-complete-guide-2025` へ移設し、ここは全ガイドへの
 * 導線に専念する。
 *
 * @returns The JSX element for the index layout (hero summary + searchable category grid)
 */
export default function Home() {
  const guideCount = NAV_ITEMS.filter((item) => item.category !== 'home').length;
  const categoryCount = groupByCategory(NAV_ITEMS).filter((g) => g.category !== 'home').length;

  return (
    <main className="index-page">
      <section className="index-hero">
        <p className="index-eyebrow">QA_STUDIES</p>
        <h1 className="index-title">ガイドライブラリ</h1>
        <p className="index-lead">
          ISTQB シラバスと現場実践をもとにしたテスト学習ガイド集。
          カテゴリから辿るか、検索で目的のガイドへ直接移動できる。
        </p>
        <dl className="index-stats">
          <div className="index-stat">
            <dt>ガイド</dt>
            <dd>{guideCount}</dd>
          </div>
          <div className="index-stat">
            <dt>カテゴリ</dt>
            <dd>{categoryCount}</dd>
          </div>
        </dl>
      </section>

      <GuideIndex />
    </main>
  );
}
