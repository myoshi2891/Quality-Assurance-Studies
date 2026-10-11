import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_4, DIAGRAM_5, DIAGRAM_6 } from './diagrams';

export default function Section5() {
  return (
    <>
<h2 id="5-テストの基本概念41step-5">5. テストの基本概念（4.1）（Step
5）</h2>
<h3 id="51-概念マップ">5.1 概念マップ</h3>
<div className="mermaid-diagram" id="mermaid-4">
  <Mermaid chart={DIAGRAM_4} />
</div>
<h3 id="52-各概念の解説">5.2 各概念の解説</h3>
<h4 id="1-品質マネジメントとの関係412">(1)
品質マネジメントとの関係（4.1.2）</h4>
<p>テストは、品質を「作る」活動そのものではなく、<strong>品質の状態についての情報を得て、リスクを扱う活動</strong>です。開発や品質保証など、組織の品質マネジメントの一部として位置づけられます。</p>
<h4 id="2-検証verificationと妥当性確認validation413">(2)
検証（Verification）と妥当性確認（Validation）（4.1.3）</h4>
<div className="table-scroll"><table aria-labelledby="2-検証verificationと妥当性確認validation413">
<thead>
<tr className="header">
<th>観点</th>
<th>検証</th>
<th>妥当性確認</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>問い</td>
<td>仕様どおりに<strong>正しく作れているか</strong></td>
<td><strong>正しいものを作ったか</strong>（利用者のニーズに合うか）</td>
</tr>
<tr className="even">
<td>たとえ話</td>
<td>設計図どおりに家が建ったか</td>
<td>住む人が望む家になっているか</td>
</tr>
</tbody>
</table></div>
<p>テストは、このどちらにも使われます。</p>
<h4 id="3-テスト対象test-item414">(3) テスト対象（Test
item）（4.1.4）</h4>
<p>テストされる「もの」のことです。プログラム全体だけでなく、コンポーネント、システム、ドキュメントなども含みます。用語定義でも「テスト対象」という言葉が繰り返し使われます。</p>
<h4 id="4-静的テストと動的テスト415">(4)
静的テストと動的テスト（4.1.5）</h4>
<div className="table-scroll"><table aria-labelledby="4-静的テストと動的テスト415">
<thead>
<tr className="header">
<th>種類</th>
<th>定義（要約）</th>
<th>例</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td><strong>静的テスト</strong></td>
<td>対象を<strong>実行せずに</strong>評価する</td>
<td>レビュー、静的解析、ドキュメントの点検</td>
</tr>
<tr className="even">
<td><strong>動的テスト</strong></td>
<td>対象を<strong>実行して</strong>評価する（規格の定義：テスト対象を実行することで評価するテスト）</td>
<td>画面操作、API呼び出し、自動テスト</td>
</tr>
</tbody>
</table></div>
<div className="mermaid-diagram" id="mermaid-5">
  <Mermaid chart={DIAGRAM_5} />
</div>
<blockquote>
<p>補足: 29119 シリーズのプロセス（Part
2）は動的テストの階層を中心に記述されています。公開情報では、静的テストを含めることについて作業部会内で合意が得られなかった経緯が言及されています。</p>
</blockquote>
<h4 id="5-網羅テストとサンプリング416">(5)
網羅テストとサンプリング（4.1.6）</h4>
<p>規格の用語定義では、<strong>網羅テスト</strong>（入力値と事前条件のすべての組合せをテストするアプローチ）に対し、「ほぼすべての現実的な状況で、テストの数が多すぎて不可能」と注記されています。</p>
<p>たとえば、たった 10 個の入力項目があり、それぞれ 10
通りの値を取り得るだけで 10 の 10 乗、つまり 100
億通りです。したがって、<strong>限られたテストを賢く選ぶ（サンプリングする）</strong>ことが必要になります。この「賢く選ぶ」ための考え方が、次章で説明するリスクベースドテストです。</p>
<h4 id="6-ヒューリスティックとしてのテスト417">(6)
ヒューリスティックとしてのテスト（4.1.7）</h4>
<p>テストは「バグがないことを証明する」ものではなく、<strong>経験則にもとづく有限のサンプリングで、欠陥の存在や品質の状況を推定する手段</strong>です。したがって、合格しても「欠陥ゼロ」の証明にはなりません。</p>
<h4 id="7-テストの目的418">(7) テストの目的（4.1.8）</h4>
<p>テストの目的は複数あります（筆者の整理）。</p>
<div className="table-scroll"><table aria-labelledby="7-テストの目的418">
<thead>
<tr className="header">
<th>目的</th>
<th>例</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>欠陥を見つける</td>
<td>不具合を早期に検出する</td>
</tr>
<tr className="even">
<td>情報を提供する</td>
<td>リリース可否の判断材料を出す</td>
</tr>
<tr className="odd">
<td>信頼を築く</td>
<td>要求が満たされているという確信を得る</td>
</tr>
<tr className="even">
<td>リスクを低減する</td>
<td>重大な問題が残るリスクを減らす</td>
</tr>
</tbody>
</table></div>
<h4 id="8-テストベースとテストオラクル419-4110">(8)
テストベースとテストオラクル（4.1.9, 4.1.10）</h4>
<div className="table-scroll"><table aria-labelledby="8-テストベースとテストオラクル419-4110">
<thead>
<tr className="header">
<th>用語</th>
<th>意味</th>
<th>例</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td><strong>テストベース</strong></td>
<td>テストを設計する際の<strong>根拠となる情報</strong></td>
<td>要件定義書、ユーザーストーリー、設計書、過去の障害情報</td>
</tr>
<tr className="even">
<td><strong>テストオラクル</strong></td>
<td>期待結果を決める<strong>判断の拠り所</strong></td>
<td>仕様、既存システムの出力、計算式、専門家の判断</td>
</tr>
</tbody>
</table></div>
<div className="mermaid-diagram" id="mermaid-6">
  <Mermaid chart={DIAGRAM_6} />
</div>
<p>用語定義では、<strong>期待結果</strong>は「仕様やその他の情報源にもとづく、特定条件下でのテスト対象の観察可能な予測された振る舞い」、<strong>実際の結果</strong>は「テスト実行の結果として観察された、テスト対象やデータ・テスト環境の振る舞いや状態」と説明されています。</p>
<h4 id="9-テストの独立性4111">(9) テストの独立性（4.1.11）</h4>
<p>「作った人」と「テストする人」が同じだと、思い込みで見落としが起きやすくなります。序文でも<strong>テスト独立性のメリット</strong>が導入されています。独立性には程度があります（筆者の整理）。</p>
<div className="table-scroll"><table aria-labelledby="9-テストの独立性4111">
<thead>
<tr className="header">
<th>独立性の程度</th>
<th>例</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>低い</td>
<td>開発者が自分のコードをテスト</td>
</tr>
<tr className="even">
<td>中</td>
<td>同じチームの別の人がテスト</td>
</tr>
<tr className="odd">
<td>高い</td>
<td>別組織・第三者がテスト</td>
</tr>
</tbody>
</table></div>
<hr />
    </>
  );
}
