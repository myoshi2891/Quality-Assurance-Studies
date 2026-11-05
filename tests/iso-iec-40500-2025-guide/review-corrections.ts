// レビューで承認した原本の補正。原本側だけへ適用し、未修正のページが比較で失敗するようにする。
// 原本には Markdown の強調記号が変換されずに残っている。
// 入力欄の例には関連付いた可視ラベルが必要。インベントリのコード文字列と、HTMLへエスケープされた本文の両方を補正する。
const FORM_LABELS = [['postal', 'text', '郵便番号'], ['pw', 'password', 'パスワード']] as const;
export const applyReviewCodeCorrections = (code: string) => FORM_LABELS.reduce((text, [id, type, label]) => text.replace(`<input type="${type}" id="${id}"`, `<label for="${id}">${label}</label>\n<input type="${type}" id="${id}"`), code);
const SC_258_CRITERION = '24×24 以上、または例外・間隔条件を満たす';
export const SC_258_REVIEWED = '24×24 CSS px の正方形が対象の内側に完全に収まる、または例外・間隔条件を満たす';
export const applyReviewCorrections = (html: string) => FORM_LABELS.reduce(
    (text, [id, type, label]) => text.replace(`&lt;input type="${type}" id="${id}"`, `&lt;label for="${id}"&gt;${label}&lt;/label&gt;\n&lt;input type="${type}" id="${id}"`),
    html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(SC_258_CRITERION, SC_258_REVIEWED),
);
