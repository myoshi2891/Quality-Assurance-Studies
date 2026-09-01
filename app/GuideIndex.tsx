'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, groupByCategory, matchesQuery, CATEGORY_CODES } from '../lib/navigation';

/**
 * ガイドライブラリ index 画面の本体。
 *
 * `NAV_ITEMS` を認定レベル単位のセクションとして描画する。各セクションの左には
 * レベル背骨（ISTQB 略号 + 件数）が sticky で貼り付き、スクロール中も現在地が読める。
 * `home` カテゴリ（index 自身へのリンク）はカード化しない。
 */
export default function GuideIndex() {
  const [query, setQuery] = useState('');

  const levels = useMemo(() => {
    const guides = NAV_ITEMS.filter(
      (item) => item.category !== 'home' && matchesQuery(item, query),
    );
    return groupByCategory(guides);
  }, [query]);

  return (
    <div className="guide-index">
      <div className="guide-index-search">
        <input
          type="search"
          className="guide-index-search-input"
          aria-label="ガイドを検索"
          placeholder="ガイド名・キーワードで検索"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {levels.length === 0 ? (
        <p className="guide-index-empty">該当するガイドがありません</p>
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
                </Link>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
