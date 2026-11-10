import { expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { load } from 'cheerio';
import { sourceModule } from '../helpers/source-module';
import { NAV_ITEMS } from '../../lib/navigation';
import { PAGES, EXPECTED_PAGE_COUNT } from '../../e2e/pages';
it('registers the ITAM systems guide once and synchronizes all 126 routes',()=>{
    const href='/iso-19770-1-guide',items=NAV_ITEMS.filter(i=>i.href===href);
    expect(items).toHaveLength(1);expect(items[0]).toMatchObject({category:'iso',label:'ISO/IEC 19770-1:2017 初学者ガイド'});
    expect(items[0]!.description.length).toBeLessThanOrEqual(80);
    const pages=PAGES.filter(p=>p.path===href);expect(pages).toHaveLength(1);
    const Page=sourceModule('app/iso-19770-1-guide/page.tsx').default as React.ComponentType;
    const h1=load(renderToStaticMarkup(React.createElement(Page)))('h1').first().text().replace(/\s+/g,' ').trim();
    expect(h1).not.toBe('');expect(pages[0]!.h1.test(h1)).toBe(true);
    expect(NAV_ITEMS).toHaveLength(126);expect(PAGES).toHaveLength(126);expect(EXPECTED_PAGE_COUNT).toBe(126);
});
