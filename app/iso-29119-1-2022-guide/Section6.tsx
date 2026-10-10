import React from 'react';

export default function Section6() {
  return (
    <>
<h2 id="6-テスト計画とテスト戦略42step-6">6.
テスト計画とテスト戦略（4.2）（Step 6）</h2>
<h3 id="61-ここが29119の核心-リスクベースドテスト">6.1
ここが29119の核心: リスクベースドテスト</h3>
<p>序文は、リスクベースドテストを「テスト戦略立案とテスト管理の<strong>推奨アプローチ</strong>であり、テストの優先順位づけと焦点の基礎になる」と説明しています。また「テストはソフトウェア開発におけるリスク対応の主要な手段」とも述べています。</p>
<p>規格策定作業部会（WG26）の議長 Stuart Reid 氏は、公開記事で「29119
シリーズはすべてのテストがリスクベースであることを求める」旨を述べています。</p>
<h3 id="62-2種類のリスク">6.2 2種類のリスク</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>種類</th>
<th>定義（要約）</th>
<th>例</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td><strong>プロダクトリスク</strong></td>
<td>製品が機能・品質・構造の面で欠陥を持つリスク</td>
<td>決済の二重請求、個人情報の漏えい</td>
</tr>
<tr className="even">
<td><strong>プロジェクトリスク</strong></td>
<td>プロジェクトの管理に関するリスク（用語定義の例：人員不足、厳しい納期、要求の変更）</td>
<td>メンバーの離脱、納期短縮</td>
</tr>
</tbody>
</table></div>
<h3 id="63-リスクベースドテストの基本の流れ">6.3
リスクベースドテストの基本の流れ</h3>
<p>Reid
氏の解説では、リスクの扱いは「特定・見積り・対応」の3段階で説明されています。</p>
<div className="mermaid-diagram" id="mermaid-7">
</div>
<h3 id="64-リスクの見積り例筆者の作例">6.4
リスクの見積り例（筆者の作例）</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>機能</th>
<th>起こりやすさ</th>
<th>影響</th>
<th>優先度</th>
<th>方針</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>ログイン</td>
<td>中</td>
<td>大</td>
<td>高</td>
<td>詳細に設計、自動化</td>
</tr>
<tr className="even">
<td>決済</td>
<td>中</td>
<td>特大</td>
<td>最高</td>
<td>複数技法を組合せ、独立性を高める</td>
</tr>
<tr className="odd">
<td>プロフィール画像の変更</td>
<td>低</td>
<td>小</td>
<td>低</td>
<td>簡易な確認のみ</td>
</tr>
</tbody>
</table></div>
<h3 id="65-テスト計画とテスト戦略の違い">6.5
テスト計画とテスト戦略の違い</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>項目</th>
<th>テスト戦略</th>
<th>テスト計画</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>主な問い</td>
<td><strong>どういう考え方・方針</strong>でテストするか</td>
<td><strong>具体的に</strong>いつ・誰が・何を・どこまでやるか</td>
</tr>
<tr className="even">
<td>性質</td>
<td>方針（アプローチ、優先度、技法の選択）</td>
<td>実行計画（スケジュール、体制、環境、完了基準）</td>
</tr>
<tr className="odd">
<td>関係</td>
<td>計画の土台になる</td>
<td>戦略を具体化する</td>
</tr>
</tbody>
</table></div>
<h3 id="66-テストアプローチ424">6.6 テストアプローチ（4.2.4）</h3>
<p><strong>テストアプローチ</strong>とは、テストをどう進めるかの方針のことです。テストレベル、テストタイプ、テスト設計技法（およびその測定指標）は、この戦略の中に含まれる要素として説明されます。</p>
<h4 id="テストレベル一般的な例">テストレベル（一般的な例）</h4>
<div className="mermaid-diagram" id="mermaid-8">
</div>
<h4 id="テストタイプ用語定義に登場するものの例">テストタイプ（用語定義に登場するものの例）</h4>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>テストタイプ</th>
<th>何を評価するか</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>性能テスト</td>
<td>時間やリソースの制約の中で機能を果たす度合い</td>
</tr>
<tr className="even">
<td>負荷テスト</td>
<td>低・通常・ピーク時の負荷での振る舞い</td>
</tr>
<tr className="odd">
<td>互換性テスト</td>
<td>他製品との共存や情報交換（相互運用性）</td>
</tr>
<tr className="even">
<td>保守性テスト</td>
<td>修正のしやすさ</td>
</tr>
<tr className="odd">
<td>移植性テスト</td>
<td>別の環境へ移せる容易さ</td>
</tr>
<tr className="even">
<td>アクセシビリティテスト</td>
<td>多様な利用者が操作できる度合い</td>
</tr>
<tr className="odd">
<td>手順テスト</td>
<td>操作手順の指示が利用者の要求に合うか</td>
</tr>
</tbody>
</table></div>
<h3 id="67-開発保守ライフサイクルでのテスト425">6.7
開発・保守ライフサイクルでのテスト（4.2.5）</h3>
<p>2022年版では、ライフサイクルを説明していた附属書は削除されました。序文でも、オブジェクト指向、従来型、アジャイル、DevOps
など多様な方法論のもとで使えることが強調されています。</p>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>開発スタイル</th>
<th>テストの考え方（筆者の整理）</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>ウォーターフォール / V字</td>
<td>フェーズごとにレベル別のテストを計画</td>
</tr>
<tr className="even">
<td>アジャイル</td>
<td>反復ごとに小さく回し、継続的に見直す</td>
</tr>
<tr className="odd">
<td>DevOps</td>
<td>自動化と継続的テストでフィードバックを高速化</td>
</tr>
<tr className="even">
<td>保守</td>
<td>変更影響の範囲を見極め、回帰テストを重視</td>
</tr>
</tbody>
</table></div>
<h3 id="68-領域とシステム特性426">6.8 領域とシステム特性（4.2.6）</h3>
<p>システムの種類（IT、PC、組込み、モバイル、科学技術計算など）や特性によって、必要なテストは変わります。詳細は附属書Aで例示されます（9章）。</p>
<h3 id="69-テスト戦略に含まれる内容427">6.9
テスト戦略に含まれる内容（4.2.7）</h3>
<p>2022年版では「戦略に期待される内容」が明確化されました。正確な項目は規格本文を参照してください。ここでは、序文と本文構成から読み取れる<strong>戦略の主な構成要素</strong>を整理します（筆者の整理であり、規格の項目リストそのものではありません）。</p>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>構成要素</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>リスクと優先順位</td>
<td>何を重点的にテストするか</td>
</tr>
<tr className="even">
<td>テストレベル・テストタイプ</td>
<td>何の観点で、どの範囲を見るか</td>
</tr>
<tr className="odd">
<td>テスト設計技法と測定指標</td>
<td>どの技法で、どこまで網羅するか</td>
</tr>
<tr className="even">
<td>自動化・ツールの方針</td>
<td>何を自動化するか</td>
</tr>
<tr className="odd">
<td>テスト環境・データ</td>
<td>どこで、どのデータを使うか</td>
</tr>
<tr className="even">
<td>独立性</td>
<td>誰がテストするか</td>
</tr>
<tr className="odd">
<td>完了基準</td>
<td>どうなれば完了とするか（完了基準は用語定義にも登場）</td>
</tr>
</tbody>
</table></div>
<hr />
    </>
  );
}
