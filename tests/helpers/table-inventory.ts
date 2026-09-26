/**
 * ページ内テーブルを「構成要素インベントリ」と 1 対 1 で照合するための共通ヘルパー。
 * 件数だけでは検出できない個々のテーブルの欠落・置換・並び替えを、
 * 直前見出し・列ヘッダー・行列構成・代表セルの組で検出する。
 */
export type TableSpec = {
    /** テーブルより前にある直近の h1〜h4 見出し */
    heading: string;
    /** ヘッダー行（thead、なければ th を含む先頭行）のセル */
    headers: readonly string[];
    /** ヘッダー行を除いた行数 */
    rows: number;
    /** 最も多い行のセル数 */
    cols: number;
    /** 先頭データ行の先頭セル */
    sample: string;
};

const normalize = (text: string | null | undefined): string => (text ?? '').replace(/\s+/g, ' ').trim();

function headerRowOf(table: HTMLTableElement): Element | null {
    const theadRow = table.querySelector('thead tr');
    if (theadRow) return theadRow;
    const firstRow = table.querySelector('tr');
    return firstRow?.querySelector('th') ? firstRow : null;
}

/** 文書順に全テーブルを走査し、インベントリと同じ形の値を返す（比較用に index を付与） */
export function collectTableInventory(root: ParentNode): Array<TableSpec & { index: number }> {
    let heading = '';
    const tables: Array<TableSpec & { index: number }> = [];
    root.querySelectorAll('h1, h2, h3, h4, table').forEach((element) => {
        if (!(element instanceof HTMLTableElement)) {
            heading = normalize(element.textContent);
            return;
        }
        const headerRow = headerRowOf(element);
        const allRows = Array.from(element.querySelectorAll('tr'));
        const bodyRows = allRows.filter((row) => row !== headerRow);
        tables.push({
            index: tables.length,
            heading,
            headers: headerRow ? Array.from(headerRow.children).map((cell) => normalize(cell.textContent)) : [],
            rows: bodyRows.length,
            cols: Math.max(0, ...allRows.map((row) => row.children.length)),
            sample: normalize(bodyRows[0]?.children[0]?.textContent),
        });
    });
    return tables;
}
