// レビューで承認した原本の補正。原本側だけへ適用し、未修正のページが比較で失敗するようにする。
// 原本には Markdown の強調記号が変換されずに残っている。
export const applyReviewCorrections = (html: string) => html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
