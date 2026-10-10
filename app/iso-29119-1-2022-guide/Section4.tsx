import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_3 } from './diagrams';

export default function Section4() {
  return (
    <>
<h2 id="4-規格の構成と読み順step-4">4. 規格の構成と読み順（Step 4）</h2>
<h3 id="41-章立て">4.1 章立て</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>章</th>
<th>内容</th>
<th>本ガイドの章</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>1</td>
<td>適用範囲（Scope）</td>
<td>1</td>
</tr>
<tr className="even">
<td>2</td>
<td>引用規格（この文書には規範的引用なし）</td>
<td>-</td>
</tr>
<tr className="odd">
<td>3</td>
<td>用語と定義</td>
<td>付録A</td>
</tr>
<tr className="even">
<td>4.1</td>
<td>ソフトウェアテストの概要</td>
<td>5</td>
</tr>
<tr className="odd">
<td>4.2</td>
<td>テスト計画とテスト戦略</td>
<td>6</td>
</tr>
<tr className="even">
<td>4.3</td>
<td>テストフレームワーク</td>
<td>7</td>
</tr>
<tr className="odd">
<td>4.4</td>
<td>テスト設計と実行</td>
<td>8</td>
</tr>
<tr className="even">
<td>4.5</td>
<td>プロジェクトマネジメントとテスト</td>
<td>9</td>
</tr>
<tr className="odd">
<td>4.6</td>
<td>コミュニケーションと報告</td>
<td>9</td>
</tr>
<tr className="even">
<td>4.7</td>
<td>欠陥とインシデントの管理</td>
<td>9</td>
</tr>
<tr className="odd">
<td>附属書A（参考）</td>
<td>システム特性とテスト（例）</td>
<td>9</td>
</tr>
<tr className="even">
<td>附属書B（参考）</td>
<td>テストの役割</td>
<td>9</td>
</tr>
</tbody>
</table></div>
<h3 id="42-初学者向けのおすすめ読み順">4.2
初学者向けのおすすめ読み順</h3>
<div className="mermaid-diagram" id="mermaid-3">
  <Mermaid chart={DIAGRAM_3} />
</div>
<ol>
<li>序文とまえがきを読む（全体の狙いを掴む）</li>
<li>4.1 テストの基本概念（静的テストと動的テスト、テストオラクル、独立性）</li>
<li>4.2 リスクとテスト戦略（ここが規格の核心）</li>
<li>4.3 プロセス・文書・メトリクス（Part 2、3 への橋渡し）</li>
<li>4.4 設計と実行（Part 4 への橋渡し）</li>
<li>4.5〜4.7 と附属書</li>
<li>3章の用語を辞書として引く</li>
<li>Part 2 へ進む</li>
</ol>
<hr />
    </>
  );
}
