import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_2 } from './diagrams';

export default function Section3() {
  return (
    <>
<h2 id="3-2013年版から何が変わったかstep-3">3.
2013年版から何が変わったか（Step 3）</h2>
<p>まえがきに列挙されている主な変更点は次のとおりです。</p>
<div className="table-scroll"><table aria-labelledby="3-2013年版から何が変わったかstep-3">
<thead>
<tr className="header">
<th>#</th>
<th>変更点</th>
<th>初学者向けの意味</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>1</td>
<td>他パートで扱わない用語定義を削除。<strong>タイトルを「Concepts and
definitions」から「General concepts」へ変更</strong></td>
<td>「用語集」から「概念の解説書」へ性格が変わった</td>
</tr>
<tr className="even">
<td>2</td>
<td>テスト概念の扱いをより簡潔にし、並べ替え</td>
<td>読みやすく整理された</td>
</tr>
<tr className="odd">
<td>3</td>
<td><strong>テストサブプロセスの概念を削除</strong>（複雑なため）。代わりに「テストプロセスのインスタンス化」の説明を追加</td>
<td>プロセスをプロジェクトに合わせて当てはめる考え方が中心に</td>
</tr>
<tr className="even">
<td>4</td>
<td><strong>テスト戦略に期待される内容を明確化</strong></td>
<td>戦略に何を書くべきかが分かりやすくなった</td>
</tr>
<tr className="odd">
<td>5</td>
<td><strong>簡略化されたテスト設計プロセス</strong>。テストケースは「テスト条件」ではなく「テストモデル」から導出</td>
<td>設計の流れがシンプルになった（8章で詳述）</td>
</tr>
<tr className="even">
<td>6</td>
<td><strong>メトリクスと測定の説明を附属書から本文へ移動</strong></td>
<td>測定が本編の重要事項になった</td>
</tr>
<tr className="odd">
<td>7</td>
<td>ライフサイクルモデルとテストの関係を説明していた附属書を削除</td>
<td>特定モデルに寄りすぎない方針</td>
</tr>
<tr className="even">
<td>8</td>
<td><strong>新附属書</strong>:
各領域のシステムの特性と、関連するテストアプローチの例</td>
<td>「この種のシステムならこのテストを検討」の手がかり</td>
</tr>
</tbody>
</table></div>
<h3 id="31-変更の流れ">3.1 変更の流れ</h3>
<div className="mermaid-diagram" id="mermaid-2">
  <Mermaid chart={DIAGRAM_2} />
</div>
<hr />
    </>
  );
}
