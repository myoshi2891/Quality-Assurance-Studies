import type { Metadata } from 'next';
import './index-page.css';
import GuideIndex from './GuideIndex';
import { NAV_ITEMS, groupByCategory, CATEGORY_CODES, type NavGroup } from '../lib/navigation';

export const metadata: Metadata = {
  title: 'QA_STUDIES ガイドライブラリ',
  description: 'ISTQB 準拠のテスト学習ガイドを、基礎から Expert まで登る順に並べたインデックス。',
};

/** ISTQB の資格階梯そのものを成すカテゴリ。下から上へ、この順に登る。 */
const CERTIFICATION_TRACK = [
  'foundation',
  'istqb-foundation-ext',
  'istqb-advanced',
  'istqb-specialist',
  'istqb-expert',
] as const;

/**
 * Renders one step of the hero staircase.
 *
 * バーの軌道長は全段で等しく、伸びた長さだけがガイド数を表す。段のインデントは
 * CSS 側で付けるため、長さの比較は段が上がっても壊れない。
 *
 * @param level - The category group this step represents
 * @param largest - The guide count of the biggest group, used as the 100% reference
 * @param track - Which of the two tracks this step belongs to
 * @returns The JSX element for a single ladder rung
 */
function Rung({
  level,
  largest,
  track,
}: {
  level: NavGroup;
  largest: number;
  track: 'certification' | 'practice';
}) {
  return (
    <a
      href={`#${level.category}`}
      className="ladder-rung"
      data-ladder-rung
      data-category={level.category}
      data-track={track}
    >
      <span className="ladder-code">{CATEGORY_CODES[level.category]}</span>
      <span className="ladder-bar" aria-hidden="true">
        <span
          className="ladder-fill"
          style={{ width: `${Math.round((level.items.length / largest) * 100)}%` }}
        />
      </span>
      <span className="ladder-count">{level.items.length}</span>
      <span className="ladder-label">{level.title}</span>
    </a>
  );
}

/**
 * Renders the guide library index at the site root.
 *
 * かつてこのルートには「現代ソフトウェアテスト完全ガイド 2025」本文が置かれていたが、
 * ガイド数の増加によりサイトの入口として機能しなくなったため、本文は
 * `/modern-software-testing-complete-guide-2025` へ移設し、ここは全ガイドへの
 * 導線に専念する。
 *
 * ヒーローの階段は装飾ではない。ISTQB の資格レベルを下から上へ積み、バーの伸びを
 * そのレベルのガイド数に比例させる。CI/CD・ツール・書籍は資格階梯の段ではないため
 * 階段には積まず、その脇の「実務の棚」として別トラックに置く。各段はそのセクションへの
 * アンカーでもある。
 *
 * @returns The JSX element for the index layout (climb hero + searchable level sections)
 */
export default function Home() {
  const levels = groupByCategory(NAV_ITEMS).filter((g) => g.category !== 'home');
  const guideCount = levels.reduce((sum, g) => sum + g.items.length, 0);
  const largest = Math.max(...levels.map((g) => g.items.length));

  const isCertification = (category: NavGroup['category']) =>
    (CERTIFICATION_TRACK as readonly string[]).includes(category);
  const climb = levels.filter((g) => isCertification(g.category));
  const shelf = levels.filter((g) => !isCertification(g.category));

  return (
    <main className="index-page">
      <header className="index-hero">
        <div className="index-hero-inner">
          <div className="index-hero-text">
            <p className="index-eyebrow">QA_STUDIES / LIBRARY</p>
            <h1 className="index-title">
              登る順に並べた、
              <br />
              <span className="index-count">{guideCount}</span> のガイド。
            </h1>
            <p className="index-lead">
              ISTQB シラバスと現場実践をもとにしたテスト学習ガイド集。
              レベルから辿るか、検索して直接開く。
            </p>
            <p className="index-meta">
              <span data-total-guides>{guideCount} GUIDES</span>
              <span aria-hidden="true"> · </span>
              <span>{levels.length} LEVELS</span>
            </p>
          </div>

          <nav className="climb" aria-label="レベル別ガイド数">
            {/* column-reverse で描画順を反転し、文書順（＝カリキュラム順）を保ったまま
                BASE を最下段に置く。読み込み時のアニメーションも下から上へ進む。 */}
            <div className="climb-stairs">
              {climb.map((level) => (
                <Rung key={level.category} level={level} largest={largest} track="certification" />
              ))}
            </div>
            <div className="climb-shelf">
              <p className="climb-shelf-label">階梯の外 / 実務の棚</p>
              {shelf.map((level) => (
                <Rung key={level.category} level={level} largest={largest} track="practice" />
              ))}
            </div>
          </nav>
        </div>
      </header>

      <GuideIndex />
    </main>
  );
}
