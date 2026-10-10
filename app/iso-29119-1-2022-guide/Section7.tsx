import React from 'react';

export default function Section7() {
  return (
    <>
<h2 id="7-テストフレームワーク43step-7">7.
テストフレームワーク（4.3）（Step 7）</h2>
<h3 id="71-テストプロセス431-3階層モデル">7.1 テストプロセス（4.3.1）:
3階層モデル</h3>
<p>29119-2
で詳細が定められるテストプロセスモデルは、次の3階層で構成されます。序文でも「組織レベル、テスト管理レベル、動的テストレベル」を扱うと述べられています。</p>
<div className="mermaid-diagram" id="mermaid-9">
</div>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>階層</th>
<th>目的</th>
<th>対応する文書（Part 3）</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>組織</td>
<td>組織全体の共通ルール</td>
<td>組織テスト方針、組織テストプラクティス</td>
</tr>
<tr className="even">
<td>管理</td>
<td>プロジェクトのテストを計画・管理</td>
<td>テスト計画書、進捗報告、完了報告</td>
</tr>
<tr className="odd">
<td>動的テスト</td>
<td>実際にテストを設計・実行</td>
<td>テスト設計仕様、テストケース、インシデント報告</td>
</tr>
</tbody>
</table></div>
<h4 id="組織テスト仕様書の用語第3章から">組織テスト仕様書の用語（第3章から）</h4>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>用語</th>
<th>意味（要約）</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>組織テスト方針</td>
<td>組織のテストに対する基本姿勢を示す</td>
</tr>
<tr className="even">
<td>組織テストプラクティス</td>
<td>組織内で推奨されるテストの進め方・方法を詳細に記述したもの。組織テスト方針と整合させる</td>
</tr>
<tr className="odd">
<td>組織テスト仕様書</td>
<td>プロジェクト固有でない、組織向けのテスト情報の文書（上記2つが代表例）</td>
</tr>
</tbody>
</table></div>
<blockquote>
<p>用語定義の注記では、組織テストプラクティスは、モバイルアプリ向けと安全重要システム向けのように、状況が大きく異なる場合は複数用意してよいとされています。</p>
</blockquote>
<h3 id="72-テストプロセスのインスタンス化">7.2
テストプロセスの「インスタンス化」</h3>
<p>2022年版では、複雑さを理由にサブプロセスの概念を削除し、代わりに<strong>プロセスのインスタンス化</strong>の説明が追加されました。ここでの意味合いは次のとおりです（筆者の解釈）。</p>
<div className="mermaid-diagram" id="mermaid-10">
</div>
<h3 id="73-テスト文書化432-433">7.3 テスト文書化（4.3.2, 4.3.3）</h3>
<p>テストで作る文書のテンプレートや例は Part 3 で定義されます。29119-1
では「どのような文書があるか」「文書化の要求は何で決まるか」という考え方を説明します。</p>
<h3 id="74-構成管理とテスト434">7.4 構成管理とテスト（4.3.4）</h3>
<p>テスト成果物（テストケース、データ、環境設定など）も版管理の対象です。「どの版のテスト対象を、どの版のテストで確認したか」を追跡できないと、結果の信頼性が損なわれます。</p>
<h3 id="75-ツールによる支援435">7.5 ツールによる支援（4.3.5）</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>支援対象</th>
<th>ツール例（一般例）</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>テスト管理</td>
<td>テスト管理ツール、課題管理ツール</td>
</tr>
<tr className="even">
<td>テスト設計</td>
<td>組合せ生成ツール、モデリングツール</td>
</tr>
<tr className="odd">
<td>テスト実行</td>
<td>テスト自動化フレームワーク、CI/CD</td>
</tr>
<tr className="even">
<td>分析</td>
<td>カバレッジ測定、静的解析</td>
</tr>
</tbody>
</table></div>
<h3 id="76-プロセス改善とテスト436">7.6
プロセス改善とテスト（4.3.6）</h3>
<p>テストプロセス自体も改善の対象です。序文でも「テストプロセス（および改善）」が言及されています。</p>
<h3 id="77-テストメトリクス437">7.7 テストメトリクス（4.3.7）</h3>
<p>2022年版で、メトリクスは附属書から<strong>本文へ移されました</strong>。測定は、進捗の把握、品質の判断、改善の根拠に使われます。</p>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>種類</th>
<th>例（一般的な例）</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>進捗</td>
<td>実施済みテスト数 / 計画数</td>
</tr>
<tr className="even">
<td>品質</td>
<td>検出した欠陥数、重大度別の分布</td>
</tr>
<tr className="odd">
<td>カバレッジ</td>
<td>ステートメントカバレッジ、ディシジョンカバレッジ、要件カバレッジ</td>
</tr>
<tr className="even">
<td>効率</td>
<td>1テストあたりの工数、自動化率</td>
</tr>
</tbody>
</table></div>
<blockquote>
<p>注意:
数字は「状況を考えるための材料」です。数値だけで品質を断定するのは危険です（12章で触れる批判的な見解も参照）。</p>
</blockquote>
<hr />
    </>
  );
}
