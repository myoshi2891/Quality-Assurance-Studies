// レビューで承認した原本の補正。原本側だけへ適用し、未修正のページが比較で失敗するようにする。
const CALLOUT_OPEN = '<blockquote class="callout">\n                <p>\n                    ';
// 図の説明として参照できるよう、図に隣接する注記へ id を付ける。
export const PROCESS_ORDER_NOTE = 'process-order-note';
export const CLASS_SUMMARY_NOTE = 'class-summary-note';
const NOTE_IDS = [[PROCESS_ORDER_NOTE, 'この順番は<strong>論理的な流れ</strong>'], [CLASS_SUMMARY_NOTE, '<strong>注意</strong>:\n                    この表は理解のための要約です。']] as const;
export const applyReviewCorrections = (html: string) => NOTE_IDS.reduce(
    (text, [id, start]) => text.replace(CALLOUT_OPEN + start, `<blockquote class="callout" id="${id}">\n                <p>\n                    ${start}`),
    html,
);
