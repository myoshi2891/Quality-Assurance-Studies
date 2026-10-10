import React from 'react';

export default function Section2() {
  return (
    <>
<h2 id="2-29119-シリーズの中での位置づけstep-2">2. 29119
シリーズの中での位置づけ（Step 2）</h2>
<h3 id="21-全体像">2.1 全体像</h3>
<p>29119-1
は「概念の土台」で、実際に「何をするか（プロセス）」「何を書くか（文書）」「どう設計するか（技法）」は他のパートが担当します。</p>
<div className="mermaid-diagram" id="mermaid-1">
</div>
<h3 id="22-各パートの役割">2.2 各パートの役割</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>パート</th>
<th>主題</th>
<th>一言でいうと</th>
<th>適合性を主張できるか</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>29119-1</td>
<td>一般概念</td>
<td>共通の言葉と考え方</td>
<td>主張対象の要求事項なし（参考）</td>
</tr>
<tr className="even">
<td>29119-2</td>
<td>テストプロセス</td>
<td>誰が・いつ・何をするか</td>
<td>できる（規範）</td>
</tr>
<tr className="odd">
<td>29119-3</td>
<td>テスト文書化</td>
<td>何を書き残すか</td>
<td>できる（規範）</td>
</tr>
<tr className="even">
<td>29119-4</td>
<td>テスト技法</td>
<td>どうテストを設計するか</td>
<td>できる（規範）</td>
</tr>
<tr className="odd">
<td>29119-5</td>
<td>キーワード駆動テスト</td>
<td>自動化のための共通枠組み</td>
<td>パート内の規定に従う</td>
</tr>
<tr className="even">
<td>29119-11</td>
<td>AIベースシステムのテスト</td>
<td>AI特有の論点</td>
<td>ガイドライン</td>
</tr>
</tbody>
</table></div>
<blockquote>
<p>序文には「29119-1 は参考（informative）であり、29119-2・3・4
は規範（normative）で、適合を主張したい人への要求事項を含む」旨が書かれています。</p>
</blockquote>
<h3 id="23-併用される他の規格">2.3 併用される他の規格</h3>
<p>序文では、29119
シリーズは単独でも、より大きな規格群の一部としても使えるとされています。たとえば、ソフトウェアのライフサイクル定義に
ISO/IEC/IEEE 12207（システム側は 15288）を使い、テストについては 29119
を参照する、という使い方です。</p>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>併用する規格</th>
<th>役割</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>ISO/IEC/IEEE 12207</td>
<td>ソフトウェアライフサイクルプロセス</td>
</tr>
<tr className="even">
<td>ISO/IEC/IEEE 15288</td>
<td>システムライフサイクルプロセス</td>
</tr>
<tr className="odd">
<td>ISO/IEC/IEEE 24765</td>
<td>システム・ソフトウェア工学の用語集（SEVOCAB）</td>
</tr>
<tr className="even">
<td>ISO/IEC 25010</td>
<td>製品品質モデル（品質特性の分類）</td>
</tr>
</tbody>
</table></div>
<hr />
    </>
  );
}
