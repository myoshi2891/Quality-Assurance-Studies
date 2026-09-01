'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, groupByCategory, matchesQuery, CATEGORY_CODES } from '../lib/navigation';

const TOTAL_GUIDES = NAV_ITEMS.filter((item) => item.category !== 'home').length;

/**
 * ガイドライブラリ index 画面の本体。
 *
 * `NAV_ITEMS` を認定レベル単位のセクションとして描画する。各セクションの左には
 * レベル背骨（ISTQB 略号 + 件数）が sticky で貼り付き、スクロール中も現在地が読める。
 * `home` カテゴリ（index 自身へのリンク）はカード化しない。
 *
 * 検索窓の隣には常に件数を出す。50 件を絞り込む画面では、絞り込みが効いているかどうかを
 * カードを数えずに確かめられることが操作の手応えそのものになる。
 */
export default function GuideIndex() {
  const [query, setQuery] = useState('');

  const levels = useMemo(() => {
    const guides = NAV_ITEMS.filter(
      (item) => item.category !== 'home' && matchesQuery(item, query),
    );
    return groupByCategory(guides);
  }, [query]);

  const matched = levels.reduce((sum, level) => sum + level.items.length, 0);
  const isFiltering = query.trim().length > 0;

  return (
    <div className="guide-index">
      <div className="guide-index-search">
        <div className="guide-index-search-field">
          <svg
            className="guide-index-search-icon"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
          <input
            type="search"
            className="guide-index-search-input"
            aria-label="ガイドを検索"
            placeholder="ガイド名・キーワードで検索"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="guide-index-count" data-result-count aria-live="polite">
            {isFiltering ? `${matched} / ${TOTAL_GUIDES}` : `${TOTAL_GUIDES} 件`}
          </span>
        </div>
      </div>

      {levels.length === 0 ? (
        <div className="guide-index-empty">
          <p className="guide-index-empty-title">該当するガイドがありません</p>
          <p className="guide-index-empty-hint" data-empty-hint>
            検索語を短くするか、ヒーローの階段からレベルを選んでください。
          </p>
        </div>
      ) : (
        levels.map((level) => (
          <section
            key={level.category}
            id={level.category}
            className="guide-section"
            data-category={level.category}
          >
            <div className="guide-section-spine">
              <span className="spine-code">{CATEGORY_CODES[level.category]}</span>
              <h2 className="guide-section-title">{level.title}</h2>
              <span className="spine-count">{level.items.length} guides</span>
            </div>
            <div className="guide-list">
              {level.items.map((item) => (
                <Link key={item.href} href={item.href} className="guide-card">
                  <h3 className="guide-card-title">{item.label}</h3>
                  <p className="guide-card-desc">{item.description}</p>
                  <span className="guide-card-cue" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
