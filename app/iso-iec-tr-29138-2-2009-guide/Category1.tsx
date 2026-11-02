import React from 'react';

export default function Category1() {
    return <>
<h2 id="step-03分で分かる結論">{"Step 0：3分で分かる結論"}</h2>
{" "}
<p className="callout-practice">{" 💡 この章では、規格の全体像を先に3点で示します。細かい説明を読む前に結論を知っておくと、後の章の位置づけが分かりやすくなります。 "}</p>
{" "}
<p>{" "}<strong>{"この規格は、図書館の「蔵書目録」のようなものです。"}</strong>{" 本の中身（技術的な要求事項）は書かれておらず、「どの棚（分類）に、どんな本（規格）があるか」が書かれています。 "}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"#"}</th><th>{"結論"}</th><th>{"根拠となる確認事項"}</th></tr></thead><tbody><tr className="odd"><td>{"①"}</td><td>{" 要求事項を定める規格ではなく、障害のある人のニーズに応える指針となる文書を一覧にした技術報告書（TR）である "}</td><td>{"ISO公式ページの要旨、序文のタイプ3の説明"}</td></tr><tr className="even"><td>{"②"}</td><td>{" 一覧は「7つの分類」で整理され、各分類はさらに2つの区分に分かれる "}</td><td>{"目次と第3章"}</td></tr><tr className="odd"><td>{"③"}</td><td>{" 2009年時点の一覧なので、掲載された規格の状況は今では変わっている。使う前に最新状況の確認が要る "}</td><td>{"発行年と、現在の各規格の状況（Step 8）"}</td></tr></tbody></table>{" "}</div>
{" "}
<p className="gloss-title">{"📖 このセクションで登場した用語"}</p>
{" "}
<ul className="gloss-list">{" "}<li>{" 技術報告書（TR）：ISO/IEC が出す文書の種類の1つ。国際規格（IS）と違い、情報の整理や現状のまとめを目的にすることがある "}</li>{" "}<li>{"インベントリ：一覧表・棚卸しのこと。ここでは「規格の一覧」を指す"}</li>{" "}</ul>
{" "}
<hr />
{" "}
<p></p>
{" "}
    </>;
}
