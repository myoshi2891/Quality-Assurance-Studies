import { describe, expect, it } from 'bun:test';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { PAGES } from '../e2e/pages';

const html = readFileSync('docs/coverage-dashboard.html', 'utf8');

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null;
}

/** 埋め込みの pages 配列を、path を持つレコード単位で読み取る。tested が不正なレコードは例外にする。 */
function pageRecords(): { path: string; tested: boolean }[] {
    const block = html.match(/const pages = \[([\s\S]*?)\n\];/)?.[1];
    if (!block) throw new Error('pages 配列が見つからない');
    const records = [...block.matchAll(/\{([^{}]*)\}/g)].map((match) => {
        const body = match[1] ?? '';
        const path = body.match(/\bpath:\s*'([^']+)'/)?.[1];
        const flag = body.match(/\btested:\s*(true|false)\s*$/)?.[1];
        if (!path) throw new Error(`path のないレコード: ${body}`);
        if (!flag) throw new Error(`tested が不正なレコード: ${path}`);
        return { path, tested: flag === 'true' };
    });
    if (records.length !== [...block.matchAll(/\bpath:/g)].length) throw new Error('レコード外に path がある');
    return records;
}

/** 埋め込みの pages 配列から全ページ数とテスト済みページ数を求める。 */
function pageCounts(): { total: number; tested: number } {
    const records = pageRecords();
    return { total: records.length, tested: records.filter((record) => record.tested).length };
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
        expect($('#kpi-pages-label').text()).toBe(`Pages Tested · ${Math.round((tested / total) * 100)}%`);
    });

    it('recalculates the page percentage from the embedded data when rendering', () => {
        const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
        if (!script) throw new Error('埋め込みスクリプトが見つからない');
        const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)?.[1];
        if (!body) throw new Error('body が見つからない');
        const { total, tested } = pageCounts();
        document.body.innerHTML = body.replace(/<script>[\s\S]*?<\/script>/, '');
        // 1 件を未テストにして実スクリプトを動かし、静的な値のままなら失敗させる
        new Function(script.replace('tested: true', 'tested: false'))();
        const label = document.getElementById('kpi-pages-label')?.textContent;
        document.body.innerHTML = '';
        expect(label).toBe(`Pages Tested · ${Math.round(((tested - 1) / total) * 100)}%`);
    });

    // カードは DATA.pages から描画されるため、欠落・重複があればルート一覧との差として検出する
    it('lists every registered route exactly once', () => {
        const paths = pageRecords().map((record) => record.path);
        expect(new Set(paths).size).toBe(paths.length);
        expect([...paths].sort()).toEqual(PAGES.map((page) => page.path).sort());
    });

    it.each(['pages', 'components', 'lib', 'scripts', 'e2e', 'tooling'])('#inv-count-%s matches its embedded group', (group) => {
        const $ = load(html);
        const count = inventoryCounts()[group];
        if (count === undefined) throw new Error(`DATA.inventory に ${group} がない`);
        expect($(`#inv-count-${group}`).text()).toBe(`${count} file${count === 1 ? '' : 's'}`);
    });
});
