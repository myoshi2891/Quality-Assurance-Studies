import { describe, expect, it } from 'bun:test';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';

const html = readFileSync('docs/coverage-dashboard.html', 'utf8');

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null;
}

/** 埋め込みの pages 配列から全ページ数とテスト済みページ数を求める。 */
function pageCounts(): { total: number; tested: number } {
    const block = html.match(/const pages = \[([\s\S]*?)\n\];/)?.[1];
    if (!block) throw new Error('pages 配列が見つからない');
    const flags = [...block.matchAll(/\btested:\s*(true|false)/g)].map((match) => match[1]);
    return { total: flags.length, tested: flags.filter((flag) => flag === 'true').length };
}

/** 埋め込みデータからグループごとのファイル数を求める。 */
function inventoryCounts(): Record<string, number> {
    const block = html.match(/inventory:\s*(\{[\s\S]*?\n\})/)?.[1];
    if (!block) throw new Error('DATA.inventory が見つからない');
    const inventory: unknown = JSON.parse(block);
    if (!isRecord(inventory)) throw new Error('DATA.inventory がオブジェクトではない');
    return Object.fromEntries(
        Object.entries(inventory).map(([group, files]) => [group, Array.isArray(files) ? files.length : 0])
    );
}

/** renderInventory() が描画時に算出する総数を、埋め込みデータから同じ手順で求める。 */
function inventoryTotal(): number {
    return Object.values(inventoryCounts()).reduce((total, count) => total + count, 0);
}

describe('coverage dashboard static totals', () => {
    // JS 実行前に見える初期値が描画後の値と食い違わないよう、静的 HTML の総数を埋め込みデータと一致させる
    it.each(['#kpi-total-files', '#inv-total'])('%s matches the embedded inventory', (selector) => {
        const $ = load(html);
        expect($(selector).text()).toBe(`${inventoryTotal()}${selector === '#inv-total' ? ' ' : ''}files`);
    });

    it('keeps the static page figures in step with the embedded pages array', () => {
        const $ = load(html);
        const { total, tested } = pageCounts();
        expect(total).toBeGreaterThan(0);
        expect($('#mc-scope').text()).toMatch(new RegExp(`\\b${total} pages?\\b`));
        expect($('#kpi-pages-tested').text()).toBe(`${tested}/ ${total}`);
        expect($('#kpi-pages-desc-count').text()).toBe(String(total));
    });

    it.each(['pages', 'components', 'lib', 'scripts', 'e2e', 'tooling'])('#inv-count-%s matches its embedded group', (group) => {
        const $ = load(html);
        const count = inventoryCounts()[group];
        if (count === undefined) throw new Error(`DATA.inventory に ${group} がない`);
        expect($(`#inv-count-${group}`).text()).toBe(`${count} file${count === 1 ? '' : 's'}`);
    });
});
