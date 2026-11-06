// レビューで承認した原本の補正。原本側だけへ適用し、未修正のページが比較で失敗するようにする。
// 原本には Markdown の強調記号が変換されずに残っている。
// 入力欄の例には関連付いた可視ラベルが必要。インベントリのコード文字列と、HTMLへエスケープされた本文の両方を補正する。
const FORM_LABELS = [['postal', 'text', '郵便番号'], ['pw', 'password', 'パスワード']] as const;
export const applyReviewCodeCorrections = (code: string) => FORM_LABELS.reduce((text, [id, type, label]) => text.replace(`<input type="${type}" id="${id}"`, `<label for="${id}">${label}</label>\n<input type="${type}" id="${id}"`), code);
const SC_258_CRITERION = '24×24 以上、または例外・間隔条件を満たす';
export const SC_258_REVIEWED = '24×24 CSS px の正方形が対象の内側に完全に収まる、または例外・間隔条件を満たす';
// 2.3 の互換性の説明は、4.1.1 の削除による例外を Section07 の注記と揃える。
export const COMPATIBILITY_SENTENCE_END = '<strong>追加</strong>した構造）。';
export const COMPATIBILITY_EXCEPTION = 'ただし 4.1.1（構文解析）は 2.2 で削除されたため、契約・調達要件や法令が WCAG 2.0 または 2.1 を参照している場合は、2.2 への適合だけでは足りず、引き続き 4.1.1 の試験と報告が求められることがあります。';
// 補足のQ&A（誤解3）も同じ互換性の説明なので、2.3 と同じ文言の留保を続ける。原本のセルは句点なしで終わる。
export const COMPATIBILITY_QA_CLAIM_END = '<strong>2.0 / 2.1 にも適合</strong>';
// 図5は見出しどおり新規9基準を示す。原本に欠けていた AAA の2基準を、対応内容が同じグループの末尾へ追加する。
export const DIAGRAM_NODE_ADDITIONS: Readonly<Record<string, readonly { after: string; id: string; label: string }[]>> = {
    'mermaid-diagram-4': [
        { after: 'D4_A3', id: 'D4_A4', label: '2.4.12 フォーカスが隠れない（拡張・AAA）' },
        { after: 'D4_C2', id: 'D4_C3', label: '3.3.9 アクセシブルな認証（拡張・AAA）' },
    ],
};
export const applyReviewDiagramCorrections = (id: string, chart: string) => (DIAGRAM_NODE_ADDITIONS[id] ?? []).reduce(
    (text, { after, id: nodeId, label }) => text.replace(new RegExp(`^(${after}\\[.*)$`, 'm'), `$1\n${nodeId}["${label}"]`),
    chart,
);
export const applyReviewCorrections = (html: string) => FORM_LABELS.reduce(
    (text, [id, type, label]) => text.replace(`&lt;input type="${type}" id="${id}"`, `&lt;label for="${id}"&gt;${label}&lt;/label&gt;\n&lt;input type="${type}" id="${id}"`),
    html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(SC_258_CRITERION, SC_258_REVIEWED).replace(COMPATIBILITY_SENTENCE_END, `${COMPATIBILITY_SENTENCE_END}${COMPATIBILITY_EXCEPTION}`).replace(COMPATIBILITY_QA_CLAIM_END, `${COMPATIBILITY_QA_CLAIM_END}。${COMPATIBILITY_EXCEPTION}`),
);
