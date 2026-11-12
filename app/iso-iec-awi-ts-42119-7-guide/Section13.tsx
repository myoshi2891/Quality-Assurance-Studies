import React from 'react';
/** Preserve source category: 12. 実務ガイドとの対応表. */
export default function Section13() {
    return <>
<h2 id="12-実務ガイドとの対応表">{"12. 実務ガイドとの対応表"}</h2>{"\n"}
<div className="callout callout-intro">
<div className="callout-head">
<span className="callout-icon">{"💡"}</span>
<span className="callout-title">{"この章でやること"}</span>
</div>
<div className="callout-body">
<p>{"この章では、規格の議論と、現場でよく使われるガイドの対応を整理します。標準が固まる前に実務を始めたい場合の、道しるべになります。"}</p>
</div>
</div>{"\n"}
<h3 id="12-1-3つの枠組みの比較-">{"12-1. 3つの枠組みの比較 🔵🟡"}</h3>{"\n"}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="12-1-3つの枠組みの比較-">
<table>
<thead>
<tr className="header">
<th>{"観点"}</th>
<th>{"42119-7 ドラフト（紹介された内容）"}</th>
<th>{"OWASP GenAI Red Teaming Guide"}</th>
<th>{"日本AISIガイド"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>{"性格"}</td>
<td>{"規格ドラフト"}</td>
<td>{"実務ガイド（2025年1月公開）"}</td>
<td>{"国の手法ガイド（第1.10版、2025年3月更新）"}</td>
</tr>
<tr className="even">
<td>{"構成"}</td>
<td>{"準備、実行、知識共有と報告の3段階"}</td>
<td>{"モデル評価、実装評価、システム評価、ランタイム（人とエージェント）評価の4つの局面"}</td>
<td>{"着手の判断から後続の対応までの段階的な手順"}</td>
</tr>
<tr className="odd">
<td>{"強み"}</td>
<td>{"29119との整合、報告のテンプレート"}</td>
<td>{"脅威モデリング、チェックリスト、指標、ツール"}</td>
<td>{"手順、役割、公開前後の使い分け"}</td>
</tr>
<tr className="even">
<td>{"補足"}</td>
<td>{"用語と手順の共通化が狙い"}</td>
<td>{"局面ごとのチェックリストを持つ"}</td>
<td>{"RAGを搭載したシステムでの実例を追加"}</td>
</tr>
</tbody>
</table>
</div>{"\n"}
<p>{"ETRIの論文は、"}<strong>{"ISOが抽象的な手順の構造を提供し、AISIのガイドが組織運営レベルの詳細を補う"}</strong>{"\nという関係だと整理しています🟡。"}</p>{"\n"}
<h3 id="12-2-owasp-の4つの局面の中身-">{"12-2. OWASP の4つの局面の中身\n🔵"}</h3>{"\n"}
<p>{"OWASPのガイドを紹介した解説記事（CSO Online、Chris\nHughes氏）によると、各局面で見る内容は次のとおりです。"}</p>{"\n"}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="12-2-owasp-の4つの局面の中身-">
<table>
<thead>
<tr className="header">
<th>{"局面"}</th>
<th>{"見るもの"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>{"モデル評価"}</td>
<td>{"モデルの出所とデータの流れ"}</td>
</tr>
<tr className="even">
<td>{"実装評価"}</td>
<td>{"導入されているガードレールのテスト"}</td>
</tr>
<tr className="odd">
<td>{"システム評価"}</td>
<td>{"動いているシステムの、悪用されうる部品"}</td>
</tr>
<tr className="even">
<td>{"ランタイム評価"}</td>
<td>{"複数のAI部品が運用中に連携するときの、業務プロセスの失敗や脆弱性"}</td>
</tr>
</tbody>
</table>
</div>{"\n"}
<h3 id="12-3-道具ツールについて-">{"12-3. 道具（ツール）について 🔵"}</h3>{"\n"}
<p>{"レッドチーミングを助けるオープンソースの道具がいくつかあります。"}</p>{"\n"}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="12-3-道具ツールについて-">
<table>
<thead>
<tr className="header">
<th>{"道具"}</th>
<th>{"提供元"}</th>
<th>{"特徴（解説記事による）"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>{"garak"}</td>
<td>{"NVIDIA"}</td>
<td>{"LLMの脆弱性スキャナー。既知の問題を広く試す。モデル層向け"}</td>
</tr>
<tr className="even">
<td>{"PyRIT"}</td>
<td>{"Microsoft AI Red Team"}</td>
<td>{"攻撃の流れを組み立てるための仕組み。100以上の運用で使われた実績がある。論文（CEUR-WS）あり"}</td>
</tr>
<tr className="odd">
<td>{"promptfoo"}</td>
<td>{"オープンソース"}</td>
<td>{"アプリ層向けのテストに使いやすい"}</td>
</tr>
<tr className="even">
<td>{"DeepTeam"}</td>
<td>{"Confident AI"}</td>
<td>{"OWASPのLLM Top 10への対応が分かりやすい"}</td>
</tr>
</tbody>
</table>
</div>{"\n"}
<div className="callout callout-note">
<div className="callout-head">
<span className="callout-icon">{"⚠️"}</span>
<span className="callout-title">{"注意"}</span>
</div>
<div className="callout-body">
<p>{"PyRIT について、2026年8月更新のDEV\nCommunityの記事は、"}<strong>{"2026年3月27日にアーカイブされた"}</strong>{"\nと書いています🔵。ただし、アーカイブされたのは"}<strong>{"旧リポジトリ（Azure/PyRIT）"}</strong>{"\nであり、プロジェクト自体が終了したわけではありません。移行先の\n"}<strong>{"microsoft/PyRIT"}</strong>{"\nでは公開リリースが継続しています。利用前に移行先の公式リポジトリで現在の状態を確認してください。"}</p>
<p>{"注意\n2：道具はテストの「実行を助けるもの」であり、規格が求める「計画、判定基準、報告」を代わりに用意してくれるものではありません\n⚪。"}</p>
</div>
</div>{"\n"}
<div className="glossary">
<div className="glossary-head">{"📖 このセクションで登場した用語"}</div>
<ul>{"\n"}
<li>{"チェックリスト：確認すべき項目を並べた一覧表"}</li>{"\n"}
<li>{"ガードレール：AIの出力や動作を制限するための防御"}</li>{"\n"}
<li>{"ランタイム：システムが実際に動いている状態"}</li>{"\n"}
<li>{"オープンソース：誰でもソースコードを見て使える形で公開されているソフトウェア"}</li>{"\n"}
</ul>
</div>{"\n"}
<hr />{"\n"}
</>;
}
