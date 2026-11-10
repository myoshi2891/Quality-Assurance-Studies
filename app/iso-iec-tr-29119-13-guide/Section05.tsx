import React from 'react';
import Diagram from './Diagram';

/** 4. 文書の構成（目次マップ） — preserve the complete original category. */
export default function Section05() {
  return <>
<h2 id={"s8"}>{"4. 文書の構成（目次マップ）"}</h2>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"公開されている目次に基づく構成です。"}</p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s8"}><table><thead><tr className={"header"}><th>{"章・附属書"}</th><th>{"タイトル"}</th><th>{"本ガイドの対応Step"}</th></tr></thead><tbody><tr className={"odd"}><td>{"1"}</td><td>{"Scope（適用範囲）"}</td><td>{"Step 0, 3"}</td></tr><tr className={"even"}><td>{"2"}</td><td>{"Normative references"}</td><td>{"規定参照なし"}</td></tr><tr className={"odd"}><td>{"3"}</td><td>{"Terms, definitions and abbreviated terms"}</td><td>{"Step 1, 2"}</td></tr><tr className={"even"}><td>{"4"}</td><td>{"Introduction to biometrics"}</td><td>{"Step 1, 3"}</td></tr><tr className={"odd"}><td>{"5"}</td><td>{"Introduction to software testing"}</td><td>{"Step 4, 5"}</td></tr><tr className={"even"}><td>{"6"}</td><td>{"Software testing of biometric systems and subsystems"}</td><td>{"Step 6, 7"}</td></tr><tr className={"odd"}><td>{"Annex A"}</td><td>{"Brief introduction to biometric systems"}</td><td>{"Step 1"}</td></tr><tr className={"even"}><td>{"Annex B"}</td><td>{"Standards related to the testing of biometric systems"}</td><td>{"Step 3"}</td></tr><tr className={"odd"}><td>{"Annex C"}</td><td>{"Generic risks in biometric systems"}</td><td>{"Step 9"}</td></tr><tr className={"even"}><td>{"Annex D"}</td><td>{"Test documentation mappings for biometric systems"}</td><td>{"Step 9"}</td></tr><tr className={"odd"}><td>{"Annex E〜K"}</td><td>{"19795-1 / -2 / -4 / -6 / -7 / TS 19795-9 / 29109-1 から29119へのマッピング"}</td><td>{"Step 9"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<blockquote>{"\n"}<p><strong>{"ポイント:"}</strong>{" 274ページのうち、本編（1〜6章）は約20ページ程度で、"}<strong>{"大半は附属書（Annex）"}</strong>{" です。Annex C（リスク、約45ページ）と Annex E〜K（マッピング、約200ページ）が本体と言えます。"}<strong>{"本編は短く、附属書がデータベース的な役割"}</strong>{"を担っています。"}</p>{"\n"}</blockquote>
{"\n"}
<figure className={"diagram"}><Diagram index={2} />{"\n"}</figure>
{"\n"}
<blockquote>{"\n"}<p>{"上の円グラフは、目次のページ番号から算出した概算値です。"}</p>{"\n"}</blockquote>
{"\n"}
<hr />
{"\n"}
  </>;
}
