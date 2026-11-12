// レビューで承認した原本の補正。インベントリとアーカイブは変えず原本側だけへ適用し、未修正のページが比較で失敗するようにする。
const REPLACEMENTS: readonly (readonly [RegExp, string])[] = [
    // STEP 7: 原本の入れ子の strong を解消し、適用宣言書と15のプロセス領域だけを強調する。
    [/<strong>(適用宣言書（Statement of Applicability）)<strong>([\s\S]*?)<\/strong>(15のプロセス領域)<\/strong>/, '<strong>$1</strong>$2<strong>$3</strong>'],
    // Q1: 原本に残った Markdown の ** を strong へ置き換える。
    [/\*\*(IT資産全般のマネジメントシステム（ITAMS）)\*\*/, '<strong>$1</strong>'],
    // VDE プレビュー: 波括弧をパーセントエンコードした URL（表示文字列も同じ）へ置き換える。
    [/19770-1\{ed3\.0\}en\.pdf/g, '19770-1%7Bed3.0%7Den.pdf'],
];
// STEP 7: ティアごとに行グループ（tbody）へ分け、ティア名を行グループ全体の見出し（th scope="rowgroup"）にする。各領域の行は原本のまま。
export const TIER_GROUPS = [['Trustworthy Data', 4], ['Life Cycle Integration', 7], ['Optimization', 3]] as const;
const TIER_TABLE = /(<th>ティア（カテゴリ）<\/th>[\s\S]*?<\/thead>\s*)<tbody>([\s\S]*?)<\/tbody>/;
const groupTierRows = (body: string) => {
    const groups: { tier: string; rows: string[] }[] = [];
    for (const [, className, first, rest] of body.matchAll(/<tr class="(odd|even)">\s*<td>([\s\S]*?)<\/td>([\s\S]*?)<\/tr>/g)) {
        if (first!.trim()) groups.push({ tier: first!, rows: [] });
        groups[groups.length - 1]!.rows.push(`<tr class="${className}">${rest}</tr>`);
    }
    return groups.map(({ tier, rows }) => `<tbody>${rows.map((row, i) => i === 0 ? row.replace('>', `><th scope="rowgroup" rowspan="${rows.length}">${tier}</th>`) : row).join('')}</tbody>`).join('');
};
// STEP 12: 横にはみ出す表を、見出しを名前にしたキーボード操作領域にする。
export const MISCONCEPTION_HEADING = 'step-12-よくある誤解とつまずきポイント';
// 横にはみ出す全ての表を、直前の見出しを名前にしたキーボード操作領域にする。
const SCROLL_REGION = /<h[23] id="([^"]+)"|<div class="table-scroll">/g;
const makeScrollRegions = (html: string) => { let heading = ''; return html.replace(SCROLL_REGION, (match, id?: string) => { if (id) { heading = id; return match; } return `<div class="table-scroll" tabindex="0" role="region" aria-labelledby="${heading}">`; }); };
export const applyReviewCorrections = (html: string) => REPLACEMENTS.reduce<string>((text, [from, to]) => text.replace(from, to), html)
    .replace(TIER_TABLE, (_, head: string, body: string) => head + groupTierRows(body))
    .replace(/^[\s\S]*$/, makeScrollRegions);
// 図の補正。インベントリは原本の記録として変えず、テストと E2E にはこの補正を適用した定義を渡す。
export type DiagramEdge = { from: string; to: string; arrowStart: boolean; arrowEnd: boolean; dotted: boolean; invisible: boolean; label: string };
type DiagramCorrection = { nodes?: Readonly<Record<string, string>>; edges: readonly DiagramEdge[] };
const solid = (from: string, to: string): DiagramEdge => ({ from, to, arrowStart: false, arrowEnd: true, dotted: false, invisible: false, label: '' });
const dotted = (from: string, to: string, label = '', arrowEnd = true): DiagramEdge => ({ from, to, arrowStart: false, arrowEnd, dotted: true, invisible: false, label });
export const DIAGRAM_CORRECTIONS: Readonly<Record<string, DiagramCorrection>> = {
    // 図5: ライフサイクルは例示。開発・リリースは開発する資産だけが通り、購入した SaaS・機器などは調達から展開へ進める。
    'mermaid-diagram-5': { edges: [
        solid('N5_S', 'N5_AQ'), dotted('N5_AQ', 'N5_DV', '開発する場合'), solid('N5_DV', 'RL'), solid('RL', 'N5_DP'),
        dotted('N5_AQ', 'N5_DP', '購入した SaaS・機器など'), solid('N5_DP', 'N5_OP'), solid('N5_OP', 'N5_RT'), dotted('N5_RT', 'N5_S', '再利用・教訓'),
        dotted('N5_TDA', 'N5_S', '', false), dotted('N5_TDA', 'N5_OP', '', false), dotted('N5_OP2', 'N5_OP', '', false),
    ] },
    // 図8: 評価と改善は Tier 3 の後だけでなく、各ティアの導入中から並行して行う。
    'mermaid-diagram-8': {
        nodes: { N8_S8: '⑧ 評価と改善（箇条9・10）<br/>各ティアで並行して継続<br/>内部監査・マネジメントレビュー' },
        edges: [
            solid('N8_S1', 'N8_S2'), solid('N8_S2', 'N8_S3'), solid('N8_S3', 'N8_S4'), solid('N8_S4', 'N8_S5'), solid('N8_S5', 'N8_S6'), solid('N8_S6', 'N8_S7'),
            dotted('N8_S5', 'N8_S8', '評価・改善'), dotted('N8_S6', 'N8_S8', '評価・改善'), dotted('N8_S7', 'N8_S8', '評価・改善'), dotted('N8_S8', 'N8_S3', '継続'),
        ],
    },
};
export const reviewedDiagrams = <D extends { id: string; nodes: readonly { id: string; label: string }[]; edges: readonly DiagramEdge[] }>(diagrams: readonly D[]): D[] => diagrams.map(diagram => {
    const correction = DIAGRAM_CORRECTIONS[diagram.id];
    if (!correction) return diagram;
    const labels = correction.nodes ?? {};
    return { ...diagram, nodes: diagram.nodes.map(node => ({ ...node, label: labels[node.id] ?? node.label })), edges: [...correction.edges] };
});
