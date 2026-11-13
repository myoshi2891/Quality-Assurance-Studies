/** Reviewed factual corrections; keep the archived migration inventory immutable. */
export function applyReviewCorrections(html: string): string {
  return html
    .replace('ICS 15：本規格の用語クラスター', '用語分類番号 15：本規格の用語クラスター')
    .replace('<td>文に関する節</td>', '<td>宣言</td>')
    .replace('<td>英語原文の節名は未確認</td>', '<td>Declarations</td>')
    .replace(/(<td>Declarations<\/td>\s*<td>)⚠️ 要確認/, '$1公式プレビューで節名を確認')
    .replace(/15\.02 と 15\.08\s+は、/, '15.02 の節名は公式プレビューで「Declarations（宣言）」と確認できました。15.08 は、')
    .replace(/ が返す種類の名前にもとづく例です。実行する Python\s+のバージョンによって、先頭に ENCODING が付くなど細部が異なる場合があります。/, ' が返す種類の名前にもとづく例です。この例で使う tokenize.generate_tokens は文字列を読み取り、ENCODING トークンを出力しません。バイト列を読み取る tokenize.tokenize は、先頭に ENCODING トークンを出力します。')
    .replace(/\/\/\s+文字列を足そうとすると、型チェッカーが実行前に止める。/, "// 文字列を足した結果を number に代入すると、型チェッカーが誤りを報告する。")
    .replace(/\/\/\s+実行してから発覚する不具合を減らすための仕組みである。/, "// 型エラーの報告だけで、JavaScript の出力や実行が必ず止まるわけではない。")
    .replace('// const total: number = price', '// const invalidTotal: number = price')
    .replace(/TypeScript\s+の型チェックは、TypeScript\s+7\.0/, "上のコメントアウトした invalidTotal の行を有効にすると型エラーになります。ただし tsc は既定では型エラーがあっても JavaScript を出力する場合があります。出力を止めるには noEmitOnError: true を指定します。また、ビルド工程で tsc の終了ステータスを確認し、エラー時に後続の実行・配布を止める方法もあります（出力済みのファイルは残り得ます）。型注釈は実行時には残らないため、その JavaScript を実行すると price + \"3\" は文字列 \"1203\" になります。\n                TypeScript の型チェックは、TypeScript 7.0")
    .replace(/GIL：Python\s+で同時に1つのスレッドしか動かさない仕組み/, "GIL：GILを有効にしたCPythonで、Pythonバイトコードを同時に実行するスレッドを1つに制限する仕組み。スレッドは交互に実行でき、ブロッキングI/O中にはGILが解放されることもあるため、並行したスレッドの活動を妨げるものではない")
    .replace(/機械翻訳の並びが乱れており、15\.02\s+と\s+15\.08\s+の節名は断定できませんでした。/, "15.02 は公式プレビューで「Declarations（宣言）」と確認済みです。機械翻訳の並びが乱れており、15.08 の節名は断定できませんでした。")
    .replace(/15\.02・15\.08\s+を含む一部の節名は第三者の機械翻訳目次に依存している/, "15.02 は公式プレビューで確認済み。15.08 を含む一部の節名は第三者の機械翻訳目次に依存している");
}
