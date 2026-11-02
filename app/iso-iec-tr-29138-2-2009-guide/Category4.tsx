import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_0 } from './diagrams';

export default function Category4() {
    return <>
<h2 id="step-3規格ファミリー全体での位置づけ">{" Step 3：規格ファミリー全体での位置づけ "}</h2>
{" "}
<p className="callout-practice">{" 💡 この章では、TR 29138 が3部構成であることと、関連規格との関係を説明します。Part 2 だけを読んでも全体像が見えないため、先に家系図を確認します。 "}</p>
{" "}
<h3 id="3部構成">{"3部構成"}</h3>
{" "}
<p>{"序文によると、ISO/IEC TR 29138 は次の3部で構成されています。"}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"Part"}</th><th>{"題名（原題）"}</th><th>{"2009年版の内容"}</th></tr></thead><tbody><tr className="odd"><td>{"Part 1"}</td><td>{"User needs summary"}</td><td>{"障害のある人のユーザーニーズの要約"}</td></tr><tr className="even"><td><strong>{"Part 2"}</strong></td><td><strong>{"Standards inventory"}</strong></td><td><strong>{"本ガイドの対象。規格の一覧"}</strong></td></tr><tr className="odd"><td>{"Part 3"}</td><td>{"Guidance on user needs mapping"}</td><td>{"ユーザーニーズを規格の条項に対応付ける指針"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="家系図">{"家系図"}</h3>
{" "}
<p>{" この図は、2009年の3部構成と、その後の関連文書の関係を表しています。左から右へ読み進めてください。実線は後継関係、点線は発展的な文書です。 "}</p>
{" "}
<div className="mermaid-diagram" id="mmd-0"><Mermaid chart={DIAGRAM_0} /></div>
{" "}
<p>{"各ノードの意味："}</p>
{" "}
<ul>{" "}<li>{"「ISO/IEC TR 29138 2009」：3部をまとめた総称。2009年6月に3部とも公開された"}</li>{" "}<li>{"「Part 1」：ISOの管理ページでは、2009年版は Withdrawn（廃止）になっている"}</li>{" "}<li>{"「Part 3」：同じく2009年版は廃止。2022年版が国際規格（IS）として出ている"}</li>{" "}<li>{" 「Part 2」：ISOページでは今も Published。2013年に発展版の一覧が出たという情報がある（出典はWikipedia。二次情報） "}</li>{" "}<li>{" 実線の矢印：新版が旧版の位置づけを引き継いでいる関係。題名と範囲の対応から読み取れる範囲の記述です "}</li>{" "}</ul>
{" "}
<h3 id="現在の状況2026年10月13日時点で確認できた範囲">{" 現在の状況（2026年10月13日時点で確認できた範囲） "}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"文書"}</th><th>{"状況"}</th><th>{"確認元"}</th></tr></thead><tbody><tr className="odd"><td>{"TR 29138-1:2009"}</td><td>{"Withdrawn（廃止）"}</td><td>{"ISO公式ページ"}</td></tr><tr className="even"><td>{"ISO/IEC 29138-1:2018"}</td><td>{"Published。2024年に見直されて現行のまま確認された"}</td><td>{"ISO公式ページ"}</td></tr><tr className="odd"><td>{"TR 29138-2:2009"}</td><td>{"Published（本ガイドの対象）"}</td><td>{"ISO公式ページ"}</td></tr><tr className="even"><td>{"TR 29138-3:2009"}</td><td>{"Withdrawn（廃止）"}</td><td>{"ISO公式ページ（committee.iso.org）"}</td></tr><tr className="odd"><td>{"ISO/IEC 29138-3:2022"}</td><td>{"Published"}</td><td>{"ISO公式ページ（committee.iso.org）"}</td></tr><tr className="even"><td>{"Part 2 を引き継ぐ国際規格（IS）"}</td><td>{"今回の検索では確認できなかった"}</td><td>{"—"}</td></tr></tbody></table>{" "}</div>
{" "}
<p>{" 最後の行は「無い」と断定する意味ではありません。今回の検索範囲では見つからなかった、という意味です。 "}</p>
{" "}
<h3 id="関連isoiec-guide-71">{"関連：ISO/IEC Guide 71"}</h3>
{" "}
<p>{" 要旨には、"}<strong>{"ISO/IEC Guide 71"}</strong>{"（規格作成者向けに、高齢者・障害のある人への配慮の方法を示すガイド）との関係が出てきます。このガイドは2014年に改訂され、現在の題名は「Guide for addressing accessibility in standards」です。2014年版はISO、IEC、ITU の共同声明とともに公表され、ITU-T SG16 も採択したと報じられています。 "}</p>
{" "}
<p className="gloss-title">{"📖 このセクションで登場した用語"}</p>
{" "}
<ul className="gloss-list">{" "}<li>{" Withdrawn：廃止。新しい版に置き換えられたり、不要になったりして取り下げられた状態 "}</li>{" "}<li>{"IS（International Standard）：国際規格。TR とは別の種類"}</li>{" "}<li>{" ISO/IEC Guide 71：規格を作る人が、アクセシビリティを規格に盛り込むための手引き "}</li>{" "}</ul>
{" "}
<hr />
{" "}
<p></p>
{" "}
    </>;
}
