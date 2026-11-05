import { describe, expect, it, spyOn } from 'bun:test';
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

/** 実スクリプトを文書へ描画して read の結果を返す。script の差し替えで埋め込みデータを変更できる。 */
function renderDashboard<T>(mutate: (script: string) => string, read: () => T): T {
    const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
    if (!script) throw new Error('埋め込みスクリプトが見つからない');
    const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)?.[1];
    if (!body) throw new Error('body が見つからない');
    document.body.innerHTML = body.replace(/<script>[\s\S]*?<\/script>/, '');
    const listen = spyOn(document, 'addEventListener');
    new Function(mutate(script))();
    // 描画は DOMContentLoaded で始まるため明示的に発火し、登録したリスナーは他のテストへ残さない
    document.dispatchEvent(new Event('DOMContentLoaded'));
    for (const [type, listener] of listen.mock.calls) document.removeEventListener(type, listener);
    listen.mockRestore();
    const result = read();
    document.body.innerHTML = '';
    return result;
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
        expect($('#kpi-pages-desc-tested').text()).toBe(String(tested));
        expect($('#kpi-pages-desc-status').text()).toBe(tested === total ? '完了' : '未完了');
        expect($('#kpi-pages-label').text()).toBe(`Pages Tested · ${Math.round((tested / total) * 100)}%`);
    });

    it('recalculates the page percentage from the embedded data when rendering', () => {
        const { total, tested } = pageCounts();
        // 1 件を未テストにして実スクリプトを動かし、静的な値のままなら失敗させる
        const label = renderDashboard((script) => script.replace('tested: true', 'tested: false'), () =>
            document.getElementById('kpi-pages-label')?.textContent);
        expect(label).toBe(`Pages Tested · ${Math.round(((tested - 1) / total) * 100)}%`);
    });

    it('states render and E2E coverage in the Pages Tested description without claiming a partial count is complete', () => {
        const { total, tested } = pageCounts();
        const readDescription = () => document.getElementById('kpi-pages-desc-count')?.closest('p')?.textContent ?? '';

        const complete = renderDashboard((script) => script, readDescription);
        const partial = renderDashboard((script) => script.replace('tested: true', 'tested: false'), readDescription);

        expect(complete).toContain(`${tested} / ${total} ページ`);
        expect(complete).toContain('P0 完了');
        expect(partial).toContain(`${tested - 1} / ${total} ページ`);
        expect(partial).toContain('P0 未完了');
        for (const text of [complete, partial]) {
            expect(text).not.toContain('完備');
            expect(text).not.toContain(`全 ${total} ルート`);
            expect(text).toContain('e2e/pages.ts');
            // a11y とビジュアル検証の記述は件数に依存しないため、そのまま残す
            expect(text).toContain('a11y は e2e/a11y.e2e.ts（axe-core）を一覧に掲載済み、ビジュアル検証は CSS geometry による部分検証のみ（スクリーンショット基準は未整備）。');
        }
    });

    it('marks the Pages row complete only while every page is tested', () => {
        const { total, tested } = pageCounts();
        const readCell = () => {
            const cell = document.querySelector('#matrix-body tr td');
            return {
                state: cell?.getAttribute('data-state'),
                dot: cell?.querySelector('.cell')?.getAttribute('data-state'),
                value: cell?.querySelector('.lbl')?.textContent,
                label: cell?.getAttribute('aria-label') ?? ''
            };
        };

        const complete = renderDashboard((script) => script, readCell);
        const partial = renderDashboard((script) => script.replace('tested: true', 'tested: false'), readCell);

        expect(complete).toMatchObject({ state: 'full', dot: 'full', value: `${tested}/${total}` });
        expect(complete.label).toContain(': 完全 — ');
        expect(complete.label).toContain(`Unit tests on ${tested}/${total} pages`);
        expect(partial).toMatchObject({ state: 'partial', dot: 'partial', value: `${tested - 1}/${total}` });
        expect(partial.label).toContain(': 部分 — ');
        expect(partial.label).toContain(`Unit tests on ${tested - 1}/${total} pages`);
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
