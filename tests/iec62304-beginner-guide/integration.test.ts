import { expect, it } from 'bun:test';
import { NAV_ITEMS } from '../../lib/navigation';
import { PAGES, EXPECTED_PAGE_COUNT } from '../../e2e/pages';
it('registers this additional source once, retains the earlier guide, and synchronizes 124 routes',()=>{
    const href='/iec62304-beginner-guide';
    expect(NAV_ITEMS.filter(i=>i.href===href)).toHaveLength(1);
    expect(NAV_ITEMS.find(i=>i.href===href)).toMatchObject({category:'iso',label:'IEC 62304 初学者ステップガイド'});
    expect(NAV_ITEMS.find(i=>i.href===href)!.description.length).toBeLessThanOrEqual(80);
    expect(NAV_ITEMS.filter(i=>i.href==='/iec-62304-beginner-guide')).toHaveLength(1);
    expect(PAGES.filter(i=>i.path===href)).toHaveLength(1);
    expect(PAGES.find(i=>i.path===href)!.h1.test('IEC 62304:2006 初学者向けステップバイステップ解説ガイド')).toBe(true);
    expect(EXPECTED_PAGE_COUNT).toBe(124);expect(PAGES).toHaveLength(124);expect(NAV_ITEMS).toHaveLength(124);
});
