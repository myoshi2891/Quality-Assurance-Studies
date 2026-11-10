// レビューで承認した原本の補正。インベントリとアーカイブは変えず原本側だけへ適用し、未修正のページが比較で失敗するようにする。
export type DiagramEdge = { from: string; to: string; arrowStart: boolean; arrowEnd: boolean; dotted: boolean; invisible: boolean; label: string };
type DiagramCorrection = { nodes?: Readonly<Record<string, string>>; edges: readonly DiagramEdge[] };

export const DIAGRAM_CORRECTIONS: Readonly<Record<string, DiagramCorrection>> = {};

// 横にはみ出す全ての表を、直前の見出しを名前にしたキーボード操作領域にする。
const SCROLL_REGION = /<h[234] id="([^"]+)"|<div class="table-scroll">/g;
/** Make source table wrappers keyboard accessible and name them from the preceding heading. */
const makeScrollRegions = (html: string) => {
    let heading = '';
    return html.replace(SCROLL_REGION, (match, id?: string) => {
        if (id) {
            heading = id;
            return match;
        }
        return `<div class="table-scroll" tabindex="0" role="region" aria-labelledby="${heading}">`;
    });
};

/** Apply approved markup corrections to the reference HTML without changing the archived inventory. */
export const applyReviewCorrections = (html: string) =>
    makeScrollRegions(html)
        .replace(/(<p><strong>9\.2 の6観点<\/strong><\/p>\s*<div class="table-scroll" tabindex="0" role="region") aria-labelledby="[^"]+"/, '$1 aria-label="9.2 の6観点"')
        .replace('<aside class="sidebar">', '<aside class="sidebar" id="sidebar">')
        .replace('<nav>', '<nav aria-label="目次">')
        .replace('<span class="cp-count">0 / 9</span>', '<span class="cp-count">0 / 9</span><span class="checklist-status" role="status" aria-live="polite" aria-atomic="true">確認済み 0 / 9 項目。</span>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        // 原本HTMLの生成時に $10〜$13 が $1 + '0'〜'3' として展開された末尾のゴミ数字を除去する。
        .replace(/<\/svg>\s*[0123](\s*<\/div>)/g, '</svg>$1');

/** Apply approved node and edge corrections to reference diagrams while preserving other diagram fields. */
export const reviewedDiagrams = <D extends { id: string; nodes: readonly { id: string; label: string }[]; edges: readonly DiagramEdge[] }>(diagrams: readonly D[]): D[] => diagrams.map(diagram => {
    const correction = DIAGRAM_CORRECTIONS[diagram.id];
    if (!correction) return diagram;
    return {
        ...diagram,
        nodes: diagram.nodes.map(node => ({
            ...node,
            label: correction.nodes?.[node.id] ?? node.label,
        })),
        edges: correction.edges as D['edges'],
    };
});
