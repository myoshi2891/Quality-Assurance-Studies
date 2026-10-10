import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_18 } from './diagrams';

export default function Section11() {
  return (
    <>
<h2 id="11-現場での活用step-10">11. 現場での活用（Step 10）</h2>
<h3 id="111-使いどころ">11.1 使いどころ</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>場面</th>
<th>29119-1 の使い方</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>チームの用語統一</td>
<td>用語集として共通認識をつくる</td>
</tr>
<tr className="even">
<td>テスト戦略の作成</td>
<td>リスクベースの考え方と戦略の構成要素を確認する</td>
</tr>
<tr className="odd">
<td>新人教育</td>
<td>概念の全体像を教える教材にする</td>
</tr>
<tr className="even">
<td>監査・規制対応</td>
<td>自社プロセスの説明根拠にする</td>
</tr>
<tr className="odd">
<td>認定資格の学習</td>
<td>ISTQB 等の用語・概念との対応を確認する</td>
</tr>
</tbody>
</table></div>
<h3 id="112-実務での最初の3ステップ筆者の提案">11.2
実務での最初の3ステップ（筆者の提案）</h3>
<div className="mermaid-diagram" id="mermaid-18">
  <Mermaid chart={DIAGRAM_18} />
</div>
<ol>
<li>Step A: 自分たちの用語を棚卸しし、食い違いのある言葉を洗い出す</li>
<li>Step B: 用語を 29119-1 に照らして整理し、チーム用語集を作る</li>
<li>Step C: 次のプロジェクトで、リスクの特定 → 戦略 → 計画の順に試す</li>
<li>振り返りと改善: 足りない部分は Part 2、3、4 で補う</li>
</ol>
<hr />
    </>
  );
}
