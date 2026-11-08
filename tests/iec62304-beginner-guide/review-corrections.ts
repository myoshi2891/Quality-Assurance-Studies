// レビューで承認した原本の補正。原本側だけへ適用し、未修正のページが比較で失敗するようにする。
const CALLOUT_OPEN = '<blockquote class="callout">\n                <p>\n                    ';
// 図の説明として参照できるよう、図に隣接する注記へ id を付ける。
export const PROCESS_ORDER_NOTE = 'process-order-note';
// mmd-2: 判定の分岐と結果を、図の直後の説明文として追加する。
export const CLASS_DECISION_NOTE = 'class-decision-note';
export const CLASS_DECISION_TEXT = '判定の流れ：ソフトウェアシステムを特定し、危険状態に寄与しうるかを確認する。寄与しない場合はクラス A。寄与しうる場合は、ソフトウェア外のリスクコントロール後も許容できないリスクが残るかを確認する。残らない場合はクラス A。残る場合は、起こりうる危害が死亡または重傷かを確認する。はい（死亡または重傷）ならクラス C、いいえ（重傷ではない）ならクラス B。いずれの場合も最後にクラスの根拠を文書化する。';
const addDecisionNote = (html: string) => html.replace(/(<\/div>\s*)(<h3 id="64-クラスを決めるときの重要ルール">)/, `$1<p id="${CLASS_DECISION_NOTE}">${CLASS_DECISION_TEXT}</p>\n$2`);
export const CLASS_SUMMARY_NOTE = 'class-summary-note';
const NOTE_IDS = [[PROCESS_ORDER_NOTE, 'この順番は<strong>論理的な流れ</strong>'], [CLASS_SUMMARY_NOTE, '<strong>注意</strong>:\n                    この表は理解のための要約です。']] as const;
const addNoteIds = (html: string) => NOTE_IDS.reduce(
    (text, [id, start]) => text.replace(CALLOUT_OPEN + start, `<blockquote class="callout" id="${id}">\n                <p>\n                    ${start}`),
    html,
);
// 9.2: 見積もりが難しいのはソフトウェアの故障確率で、危害の発生確率とは区別する。原本の入れ子の strong も解消する。
const RISK_PARAGRAPH = /<strong>設計や実装の誤り（システマティックな不具合）<strong>[\s\S]*?が基本になります。/;
export const RISK_REVIEWED_PLAIN = 'そのため、ソフトウェアの故障確率は見積もりが難しく、「この機能が誤動作したらどうなるか」という深刻度中心の分析が基本になります。ただし、見積もりが難しいのはソフトウェアの故障確率であり、危害の発生確率そのものではありません。危険状態が危害に至る確率やソフトウェア外のリスクコントロールなど、危害の発生確率に寄与する他の要因は、機器全体のリスクアセスメント（ISO 14971）で引き続き考慮します。';
const RISK_REVIEWED = `<strong>設計や実装の誤り（システマティックな不具合）</strong>が原因になります。${RISK_REVIEWED_PLAIN.replace('深刻度中心の分析', '<strong>深刻度中心の分析</strong>')}`;
// 6.4・18: 米国の該当する市販前申請は、2023年の FDA ガイダンスの Basic / Enhanced で整理する。
export const FDA_CLASS_LABEL = 'FDA のドキュメンテーションレベルとは別物';
export const FDA_CLASS_TEXT = '米国の該当する市販前申請では、2023年の FDA ガイダンスが旧 Level of Concern に代えて Basic / Enhanced のドキュメンテーションレベルを用いる。これらと IEC 62304 の安全クラスは直接対応しない';
export const FDA_MISTAKE_LABEL = 'FDA のドキュメンテーションレベル（旧 Level of Concern）と混同';
export const FDA_MISTAKE_TEXT = '別の概念で、直接対応しない。該当する市販前申請の文書化は、2023年の FDA ガイダンスの Basic / Enhanced で整理し、旧 Level of Concern の区分は用いない';
export const FDA_URL = 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/content-premarket-submissions-device-software-functions';
export const FDA_SOURCE = 'FDA: Content of Premarket Submissions for Device Software Functions（2023年6月）';
export const FDA_SOURCE_DETAIL = '該当する市販前申請の Basic / Enhanced ドキュメンテーションレベル、2005年ガイダンスの置き換え';
const FDA_LINK = `<a href="${FDA_URL}">${FDA_URL}</a>`;
const FDA_ROW = `<tr class="odd"><td>${FDA_SOURCE}</td><td>${FDA_SOURCE_DETAIL}</td><td> ${FDA_LINK} </td></tr>`;
// 20.1 の JFMDA の行の次へ追加する。外部リンクの一覧でも同じ位置に入る。
const LAST_PUBLIC_SOURCE_ROW = /c483cd75448d9aa162fd6d5d6657db05\.pdf<\/a>\s*<\/td>\s*<\/tr>/;
export const withFdaReference = (items: readonly string[]) => {
    const index = items.findIndex(item => item.includes('c483cd75448d9aa162fd6d5d6657db05'));
    return [...items.slice(0, index + 1), FDA_LINK, ...items.slice(index + 1)];
};
// 20.1: 対象外なのは医療機器のバリデーション・最終リリースで、5.8 のソフトウェアリリースではない。
export const IEC_SCOPE_REVIEWED = '医療機器のバリデーション・最終リリースを対象外とする旨（5.8 のソフトウェアリリースとは別）';
const REPLACEMENTS: readonly (readonly [string | RegExp, string])[] = [
    [RISK_PARAGRAPH, RISK_REVIEWED],
    ['FDA の Level of Concern とは別物', FDA_CLASS_LABEL],
    [/米国のドキュメンテーションレベルと IEC 62304\s+の安全クラスは直接対応しない/, FDA_CLASS_TEXT],
    ['FDA の Level of Concern と混同', FDA_MISTAKE_LABEL],
    ['<td>別の概念で、直接対応しない</td>', `<td>${FDA_MISTAKE_TEXT}</td>`],
    ['バリデーション・最終リリースを対象外とする旨', IEC_SCOPE_REVIEWED],
    // 5.8.3 既知の残存異常の評価はクラス B・C のみ。
    // 17.2: 残存異常の文書化は A・B・C、5.8.3 の評価は B・C。
    ['<td>リリース記録（残存異常の評価を含む）</td>', '<td>リリース記録（残存異常の文書化。B・C は 5.8.3 の評価を含む）</td>'],
    [/(既知の残存異常の評価（安全上の影響）<\/td>\s*<td>)A・B・C/, '$1B・C'],
];
export const applyReviewCorrections = (html: string) => REPLACEMENTS.reduce<string>(
    (text, [from, to]) => text.replace(from, to),
    addDecisionNote(addNoteIds(html)),
).replace(LAST_PUBLIC_SOURCE_ROW, match => match + FDA_ROW);
// mmd-5: クラス B はアーキテクチャをユニットへ分割する（5.4.1）。図の他のノードとクラス C の内容は原本のまま。
// mmd-6: 安全への影響評価を変更要否の判断より前へ移し、不要の場合も判断の根拠を記録する。
// mmd-16: SOUP の識別・評価を、要求から実装までの作業（旧 Step 5）より前の Step 5 へ移す。
export const DIAGRAM_NODE_LABELS: Readonly<Record<string, Readonly<Record<string, string>>>> = {
    'mmd-5': { N5_CB: 'クラス B<br/>A に加えて アーキテクチャ・ユニットへの分割・ユニット検証・統合テスト' },
    'mmd-6': { N6_M9: '判断の根拠を記録して終了' },
    'mmd-16': { N16_T5: 'Step 5<br/>SOUP の識別・評価と<br/>一覧・構成管理を整備', N16_T6: 'Step 6<br/>要求 → 設計 → 実装 → テストを<br/>トレーサビリティ付きで実施' },
};
export type DiagramEdge = { from: string; to: string; dotted: boolean; invisible: boolean; label: string };
const solid = (from: string, to: string, label = ''): DiagramEdge => ({ from, to, dotted: false, invisible: false, label });
export const DIAGRAM_EDGES: Readonly<Record<string, readonly DiagramEdge[]>> = {
    'mmd-6': [solid('N6_M1', 'N6_M2'), solid('N6_M2', 'N6_M4'), solid('N6_M4', 'N6_M3'), solid('N6_M3', 'N6_M9', '不要'), solid('N6_M3', 'N6_M5', '必要'), solid('N6_M5', 'N6_M6'), solid('N6_M6', 'N6_M7')],
};
export const reviewedDiagrams = <D extends { id: string; nodes: readonly { id: string; label: string }[]; edges: readonly DiagramEdge[] }>(diagrams: readonly D[]): D[] => diagrams.map(diagram => {
    const labels = DIAGRAM_NODE_LABELS[diagram.id];
    const edges = DIAGRAM_EDGES[diagram.id];
    if (!labels && !edges) return diagram;
    return { ...diagram, nodes: diagram.nodes.map(node => ({ ...node, label: labels?.[node.id] ?? node.label })), edges: edges ? [...edges] : diagram.edges };
});
