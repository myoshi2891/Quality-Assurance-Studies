import React from 'react';

export default function Category5() {
    return <>
<h2 id="step-4最初に押さえる3つの用語">{"Step 4：最初に押さえる3つの用語"}</h2>
{" "}
<p className="callout-practice">{" 💡 この章では、第2章（Terms and definitions）の3つの定義を説明します。この3語は、後で「どこまでが対象か」を判断する基準になります。 "}</p>
{" "}
<h3 id="3つの定義言い換え">{"3つの定義（言い換え）"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"用語"}</th><th>{"この規格での意味"}</th><th>{"初学者向け補足"}</th></tr></thead><tbody><tr className="odd"><td>{"standard（規格）"}</td><td>{" 具体的な指針を含む、識別できる文書。ISO・ISO/IEC の規格、技術報告書、公開仕様（PAS）に加え、同様の役割を持つ他組織の文書も含む "}</td><td>{"普通の「規格」より広い。W3Cの勧告や国内法令に近い文書も入る"}</td></tr><tr className="even"><td>{"user（利用者）"}</td><td>{"製品、サービス、環境と関わる人"}</td><td>{"Guide 71 の定義を借りた言葉"}</td></tr><tr className="odd"><td>{"user accessibility need（ユーザーアクセシビリティニーズ）"}</td><td>{" 環境、けが、障害、加齢による衰えなどで能力が下がった利用者にとって、使いやすさを高めるために製品や利用環境が満たすべき要件 "}</td><td>{"注意：全てのニーズを満たせるとは限らない（原文の注記）"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="ここが重要standardの範囲が広い">{"ここが重要：「standard」の範囲が広い"}</h3>
{" "}
<p>{" 通常「規格」と聞くと、ISOやJISを思い浮かべます。しかしこの規格は、"}<strong>{"一覧に載せる対象を広く取っています"}</strong>{"。そのため、一覧には各国の法律（例：米国のSection 508）や、各国のガイドラインも並びます（Step 6で例を示します）。 "}</p>
{" "}
<p className="gloss-title">{"📖 このセクションで登場した用語"}</p>
{" "}
<ul className="gloss-list">{" "}<li>{"PAS（公開仕様）：ISOが規格に準じる文書として公開するもの"}</li>{" "}<li>{" ニーズ：ここでは「あると助かる」ではなく、使えるかどうかを左右する要件を指す "}</li>{" "}</ul>
{" "}
<hr />
{" "}
<p></p>
{" "}
    </>;
}
