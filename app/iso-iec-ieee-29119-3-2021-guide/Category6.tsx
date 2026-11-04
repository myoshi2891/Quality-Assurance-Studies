import React from 'react';

export default function Category6() {
    return <>
<h2 id="step-5-すべての文書に共通する情報項目">{" Step 5: すべての文書に共通する情報項目 "}</h2>
{" "}
<p>{" Clause 5 は、"}<strong>{"どの文書にも入れるべき共通のヘッダー的情報"}</strong>{"を定めています。 "}</p>
{" "}
<div aria-label="表：Step 5: すべての文書に共通する情報項目" className="table-scroll" role="region" tabIndex={0}>{" "}<table><thead><tr className="header"><th>{"項番"}</th><th>{"項目"}</th><th>{"意味（初学者向けの言い換え）"}</th></tr></thead><tbody><tr className="odd"><td>{"5.2.1"}</td><td>{"Unique identifier"}</td><td>{"文書を一意に識別する ID"}</td></tr><tr className="even"><td>{"5.2.2"}</td><td>{"Issuing organization"}</td><td>{"文書を発行した組織"}</td></tr><tr className="odd"><td>{"5.2.3"}</td><td>{"Approval authority"}</td><td>{"承認者・承認権限"}</td></tr><tr className="even"><td>{"5.2.4"}</td><td>{"Change history"}</td><td>{"変更履歴"}</td></tr><tr className="odd"><td>{"5.2.5"}</td><td>{"Status"}</td><td>{"文書のステータス（ドラフト、承認済み等）"}</td></tr><tr className="even"><td>{"5.2.6"}</td><td>{"Introduction"}</td><td>{"導入（この文書の目的）"}</td></tr><tr className="odd"><td>{"5.2.7"}</td><td>{"Scope"}</td><td>{"対象範囲"}</td></tr><tr className="even"><td>{"5.2.8"}</td><td>{"References"}</td><td>{"参照文書"}</td></tr><tr className="odd"><td>{"5.2.9"}</td><td>{"Glossary"}</td><td>{"用語集"}</td></tr></tbody></table>{" "}</div>
{" "}
<blockquote>{" "}<p>{" 実務のヒント: Confluence・Notion・Git 管理の Markdown などでは、"}<strong>{"ページ ID、承認者、履歴、ステータス"}</strong>{"をツール標準機能で満たせる場合があります。ただし「Issuing organization（発行組織）」は個人の作成者とは別の項目です。ツールの作成者欄が発行組織を記録している場合に限りこの項目を満たすと考え、そうでなければ組織名を別途記載してください。 "}</p>{" "}</blockquote>
{" "}
    </>;
}
