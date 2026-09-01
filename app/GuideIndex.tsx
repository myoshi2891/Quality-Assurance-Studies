'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, groupByCategory, matchesQuery } from '../lib/navigation';

/**
 * ガイドライブラリ index 画面の本体。
 * `NAV_ITEMS` をカテゴリ別のカードグリッドとして描画し、インクリメンタル検索で絞り込む。
 * `home` カテゴリ（index 自身へのリンク）はカード化しない。
 */
export default function GuideIndex() {
  const [query, setQuery] = useState('');

  const groups = useMemo(() => {
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
          placeholder="ガイド名・キーワードで検索..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {groups.length === 0 ? (
        <p className="guide-index-empty">該当するガイドがありません</p>
      ) : (
        groups.map((group) => (
          <section key={group.category} id={group.category} className="guide-index-section">
            <h2 className="guide-index-heading">{group.title}</h2>
            <div className="guide-card-grid">
              {group.items.map((item) => (
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
