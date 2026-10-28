import React from 'react';

export default function Section12() { return <>
<h2 id="caveats">{"確認できたこと・できていないこと"}</h2>
<p>{"調査の透明性のため、本稿の根拠の強さを分けて記します。"}</p>
<h3 id="-公式情報で確認できたこと">{"✅ 公式情報で確認できたこと"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"事項"}</th>

<th>{"根拠"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"発行年月（2026年7月）、第5版、ステージ60.60、ICS、委員会"}</td>

<td>{"ISO公式ページ"}</td>
</tr>

<tr className="even">
<td>{"発行日が 2026-07-16、FDIS投票終了が 2026-04-29"}</td>

<td>{"ISO公式ページのライフサイクル"}</td>
</tr>

<tr className="odd">
<td>{"2019年版・Amd 1・Amd 2 が撤回済み"}</td>

<td>{"ISO公式ページ"}</td>
</tr>

<tr className="even">
<td>{"OpenType 1.9.1 が第5版の予備作業草案の改訂を取り込んでいる"}</td>

<td>{"Microsoft OpenType 仕様ページ"}</td>
</tr>
</tbody>
</table></div>
<h3 id="二次情報に基づく事項">{"二次情報に基づく事項"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"事項"}</th>
<th>{"根拠"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>{"初版2007年〜第5版2026年の発行年"}</td>

<td>{"日本語Wikipedia（二次情報）"}</td>
</tr>
</tbody>
</table></div>
<h3 id="-実装者の一次発言から読み取った事項">{"🔶\n実装者の一次発言から読み取った事項"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"事項"}</th>

<th>{"根拠"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td><code>{"GLYF"}</code>
{"/"}
<code>{"LOCA"}</code>
{"、24ビット参照、3次曲線、"}
<code>{"MAXP"}</code>
{"、"}
<code>{"HHEA"}</code>
{"/"}
<code>{"HMTX"}</code>
{"\nなどの存在と挙動"}</td>

<td>{"fontations PR（Behdad Esfahbod 氏）、HarfBuzz PR、fontTools PR"}</td>
</tr>

<tr className="even">
<td>{"テストフォントのグリフ数（106,958 / 104,404）"}</td>

<td>{"HarfBuzz PR、fontations PR"}</td>
</tr>
</tbody>
</table></div>
<h3 id="-本稿では確認できていないこと">{"❓\n本稿では確認できていないこと"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"事項"}</th>

<th>{"理由"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td><strong>{"第5版の本文（約1,000ページ）の逐条確認"}</strong></td>

<td>{"ISOページはプレビューまでの公開で、本文を読んでいない"}</td>
</tr>

<tr className="even">
<td>{"最終ページ数"}</td>

<td>{"発行版はISO公式ページで1,003ページと確認済み。ただし、規格本文は未確認"}</td>
</tr>

<tr className="odd">
<td>{"第5版の入手方法・価格"}</td>

<td>{"第4版までは無料ダウンロードの記載があったが、第5版は未確認。ISOページで確認を推奨"}</td>
</tr>

<tr className="even">
<td><code>{"CUBIC"}</code>
{" フラグの最終的なビット位置・名称"}</td>

<td>{"提案文書の記述。最終版との一致は未確認"}</td>
</tr>

<tr className="odd">
<td>{"実装PRのマージ状況（2026年10月8日時点）"}</td>

<td>{"PRの一部は「Open」や「Closed（再提出）」で、各リポジトリで要確認"}</td>
</tr>

<tr className="even">
<td>{"各OS・ブラウザ（Windows、macOS、Chrome等）の対応状況"}</td>

<td>{"公式情報を確認できていない"}</td>
</tr>
</tbody>
</table></div>
<div className="callout callout-key">
<p>{"🔑 "}
<strong>{"おすすめの確認手順"}</strong>
{"：まず\nISO公式ページ（本稿末尾の参考文献）で本文を入手し、本稿の Step 7\nの表と照らして確認してください。"}</p>
</div>
</>; }
