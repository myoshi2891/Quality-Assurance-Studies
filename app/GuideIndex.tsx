'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, groupByCategory, matchesQuery, CATEGORY_CODES, type NavCategory } from '../lib/navigation';

const CATEGORIES = groupByCategory(NAV_ITEMS).filter(g => g.category !== 'home');

const TOTAL_GUIDES = NAV_ITEMS.filter((item) => item.category !== 'home').length;

/**
 * ガイドライブラリ index 画面の本体。
 *
 * `NAV_ITEMS` からカテゴリ操作・件数・ガイド一覧を生成する。
 * PC では左にカテゴリ、モバイルでは横スクロールのカテゴリ操作を置く。
 * `home` カテゴリ（index 自身へのリンク）はカード化しない。
 *
 * 検索窓の隣には常に件数を出す。多数のガイドを絞り込む画面では、絞り込みが効いているかどうかを
 * カードを数えずに確かめられることが操作の手応えそのものになる。
 */
export default function GuideIndex() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<NavCategory | 'all'>('all');
  const [mapTarget, setMapTarget] = useState<string | null>(null);
  const reset = () => {
    setQuery('');
    setCategory('all');
  };

  // Keep native map anchors usable even when filtering has removed their target.
  useEffect(() => {
    const root = document.querySelector('.index-page');
    const onMapClick = (event: Event) => {
      const click = event as MouseEvent;
      if (click.defaultPrevented || click.button !== 0 ||
          click.metaKey || click.ctrlKey || click.shiftKey || click.altKey) return;
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[data-ladder-rung]');
      if (!anchor) return;
      setQuery('');
      setCategory('all');
      setMapTarget(anchor.dataset.category ?? null);
    };
    root?.addEventListener('click', onMapClick);
    return () => root?.removeEventListener('click', onMapClick);
  }, []);

  useEffect(() => {
    if (!mapTarget) return;
    document.getElementById(mapTarget)?.scrollIntoView?.({ block: 'start' });
    setMapTarget(null);
  }, [mapTarget]);

  const levels = useMemo(() => {
    const guides = NAV_ITEMS.filter(
      (item) => item.category !== 'home' &&
        (category === 'all' || item.category === category) && matchesQuery(item, query),
    );
    return groupByCategory(guides);
  }, [query, category]);

  const matched = levels.reduce((sum, level) => sum + level.items.length, 0);
  const isFiltering = query.trim().length > 0 || category !== 'all';

  return (
    <div className="guide-index" id="guide-library">
      <div className="library-heading">
        <span>THE LIBRARY</span>
        <p>次に学ぶことを、ここから。</p>
      </div>
      <div className="library-layout">
        <aside className="library-categories" aria-label="カテゴリで絞り込み">
          <p className="library-category-label">カテゴリ</p>
          <button type="button" aria-pressed={category === 'all'} onClick={() => setCategory('all')}>
            すべてのガイド <span>{TOTAL_GUIDES}</span>
          </button>
          {CATEGORIES.map(group => (
            <button
              type="button"
              key={group.category}
              data-category={group.category}
              aria-pressed={category === group.category}
              onClick={() => setCategory(group.category)}
            >
              {group.title}<span>{group.items.length}</span>
            </button>
          ))}
        </aside>
        <div className="library-results">
          <div className="guide-index-search">
            <label htmlFor="library-query" className="library-search-label">ガイドを検索</label>
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
                id="library-query"
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
                検索語を短くするか、別のカテゴリを選んでください。
              </p>
              <button className="library-reset" type="button" onClick={reset}>絞り込みをリセット</button>
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
                  <span className="spine-count">{level.items.length}件</span>
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
      </div>
    </div>
  );
}
