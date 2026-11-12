import React from 'react';

/** 0. 本ガイドの読み方（重要） — preserve the complete original category. */
export default function Section01() {
  return <>
<h2 id={"s1"}>{"0. 本ガイドの読み方（重要）"}</h2>
{"\n"}
<p>{"ISO/IEC TR 29119-13 は有料規格です（ISOストアで CHF 227、全274ページ）。本ガイドは "}<strong>{"公開されている目次・抄録・序文・本文サンプル"}</strong>{" と、関連する公開資料をもとに、"}<strong>{"著者自身の言葉で再構成した解説"}</strong>{" です。規格本文の転載ではありません。"}</p>
{"\n"}
<p>{"記述の根拠レベルを、次の3種類のラベルで区別しています。"}</p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s1"}><table><thead><tr className={"header"}><th>{"ラベル"}</th><th>{"意味"}</th></tr></thead><tbody><tr className={"odd"}><td><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span></td><td>{"ISO公式ページや公開プレビュー（目次・序文・本文冒頭部）で内容を確認できた事項"}</td></tr><tr className={"even"}><td><span className={"tag tag-lead tag-gen"}>{"一般知識"}</span></td><td>{"生体認証・テスト工学の一般的な知識。TR本文での記載は未確認"}</td></tr><tr className={"odd"}><td><span className={"tag tag-lead tag-ex"}>{"例示"}</span></td><td>{"理解を助けるために本ガイド筆者が作った具体例。TRの記載ではない"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<blockquote>{"\n"}<p><strong>{"注意:"}</strong>{" Annex C（汎用リスク一覧、約45ページ）や Annex E〜K の詳細マッピングは有料部分です。本ガイドではその"}<strong>{"構造と使い方"}</strong>{"を解説し、個別のリスク項目や対応表の中身は"}<span className={"tag tag-ex"}>{"例示"}</span>{"として示します。実務で適用する際は、必ず規格本文を購入して確認してください。"}</p>{"\n"}</blockquote>
{"\n"}
<hr />
{"\n"}
  </>;
}
