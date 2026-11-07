// レビューで承認した原本の補正。原本側だけへ適用し、未修正のページが比較で失敗するようにする。
// 公開されている目次には第8章が載っている。
export const CLAUSE_8 = /<td>8<\/td>\s*<td><strong>未確認<\/strong>（プレビューに掲載なし）<\/td>\s*<td>原文で確認してください<\/td>/;
export const applyReviewCorrections = (html: string) => html.replace(CLAUSE_8, '<td>8 Status codes</td><td>8.1 SQLSTATE</td><td>SQL文の実行状態を示す値と、その返し方を定める章</td>');
