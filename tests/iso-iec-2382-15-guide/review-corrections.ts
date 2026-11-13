/** Reviewed factual corrections; keep the archived migration inventory immutable. */
export function applyReviewCorrections(html: string): string {
  return html
    .replace('ICS 15：本規格の用語クラスター', '用語分類番号 15：本規格の用語クラスター')
    .replace('<td>文に関する節</td>', '<td>宣言</td>')
    .replace('<td>英語原文の節名は未確認</td>', '<td>Declarations</td>')
    .replace(/(<td>Declarations<\/td>\s*<td>)⚠️ 要確認/, '$1公式プレビューで節名を確認')
    .replace(/15\.02 と 15\.08\s+は、/, '15.02 の節名は公式プレビューで「Declarations（宣言）」と確認できました。15.08 は、')
    .replace(/ が返す種類の名前にもとづく例です。実行する Python\s+のバージョンによって、先頭に ENCODING が付くなど細部が異なる場合があります。/, ' が返す種類の名前にもとづく例です。この例で使う tokenize.generate_tokens は文字列を読み取り、ENCODING トークンを出力しません。バイト列を読み取る tokenize.tokenize は、先頭に ENCODING トークンを出力します。');
}
