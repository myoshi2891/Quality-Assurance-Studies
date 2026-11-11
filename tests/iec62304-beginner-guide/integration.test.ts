import { expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { load } from 'cheerio';
import { sourceModule } from '../helpers/source-module';
import { NAV_ITEMS, matchesQuery } from '../../lib/navigation';
import { PAGES, EXPECTED_PAGE_COUNT } from '../../e2e/pages';
it('registers this additional source once, retains the earlier guide, and synchronizes 129 routes',()=>{
    const href='/iec62304-beginner-guide';
    expect(NAV_ITEMS.filter(i=>i.href===href)).toHaveLength(1);
    expect(NAV_ITEMS.find(i=>i.href===href)).toMatchObject({category:'iso',label:'IEC 62304 初学者ステップガイド'});
    expect(NAV_ITEMS.find(i=>i.href===href)!.description.length).toBeLessThanOrEqual(80);
    for(const query of ['SOUP','リスク管理'])expect(matchesQuery(NAV_ITEMS.find(i=>i.href===href)!,query)).toBe(true);
    expect(NAV_ITEMS.filter(i=>i.href==='/iec-62304-beginner-guide')).toHaveLength(1);
    expect(PAGES.filter(i=>i.path===href)).toHaveLength(1);
    // 登録されたパターンを固定の見出し文字列ではなく、実際に描画したページの h1 に当てる。
    const Page=sourceModule('app/iec62304-beginner-guide/page.tsx').default as React.ComponentType;
    const heading=load(renderToStaticMarkup(React.createElement(Page)))('h1').first().text();
    expect(PAGES.find(i=>i.path===href)!.h1.test(heading)).toBe(true);
    expect(EXPECTED_PAGE_COUNT).toBe(129);expect(PAGES).toHaveLength(129);expect(NAV_ITEMS).toHaveLength(129);
});
