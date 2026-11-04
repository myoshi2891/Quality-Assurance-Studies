import { describe, expect, it } from 'bun:test';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';

const html = readFileSync('docs/coverage-dashboard.html', 'utf8');

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null;
}

/** renderInventory() が描画時に算出する総数を、埋め込みデータから同じ手順で求める。 */
function inventoryTotal(): number {
    const block = html.match(/inventory:\s*(\{[\s\S]*?\n\})/)?.[1];
    if (!block) throw new Error('DATA.inventory が見つからない');
    const inventory: unknown = JSON.parse(block);
    if (!isRecord(inventory)) throw new Error('DATA.inventory がオブジェクトではない');
    return Object.values(inventory).reduce<number>(
        (total, files) => total + (Array.isArray(files) ? files.length : 0),
        0
    );
}

describe('coverage dashboard static totals', () => {
    // JS 実行前に見える初期値が描画後の値と食い違わないよう、静的 HTML の総数を埋め込みデータと一致させる
    it.each(['#kpi-total-files', '#inv-total'])('%s matches the embedded inventory', (selector) => {
        const $ = load(html);
        expect($(selector).text()).toBe(`${inventoryTotal()}${selector === '#inv-total' ? ' ' : ''}files`);
    });
});
