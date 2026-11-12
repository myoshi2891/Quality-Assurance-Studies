import React from 'react';
import Diagram from './Diagram';

/** 2. 文書の基本情報 — preserve the complete original category. */
export default function Section03() {
  return <>
<h2 id={"s3"}>{"2. 文書の基本情報"}</h2>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span></p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s3"}><table><thead><tr className={"header"}><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className={"odd"}><td>{"規格番号"}</td><td>{"ISO/IEC TR 29119-13:2022"}</td></tr><tr className={"even"}><td>{"種別"}</td><td>{"Technical Report（技術報告書）"}</td></tr><tr className={"odd"}><td>{"版"}</td><td>{"Edition 1"}</td></tr><tr className={"even"}><td>{"発行"}</td><td>{"2022年11月（ISOページ記載の発行日は2022-11-18）"}</td></tr><tr className={"odd"}><td>{"ステージ"}</td><td>{"60.60（International Standard published）"}</td></tr><tr className={"even"}><td>{"ページ数"}</td><td>{"274ページ"}</td></tr><tr className={"odd"}><td>{"担当委員会"}</td><td>{"ISO/IEC JTC 1/SC 7（ソフトウェアおよびシステムエンジニアリング）"}</td></tr><tr className={"even"}><td>{"ICS"}</td><td>{"35.080（Software）"}</td></tr><tr className={"odd"}><td>{"言語"}</td><td>{"英語"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<blockquote>{"\n"}<p>{"2026年10月4日時点で、ISOの規格ページには Edition 1 が Published として表示されており、より新しい版の表示は確認できませんでした（なお、販売サイトによって発行日が1日ずれる表記があります）。"}</p>{"\n"}</blockquote>
{"\n"}
<h3 id={"s4"}>{"2.1 TRとIS（国際規格）の違い"}</h3>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"序文には、技術報告書は通常の国際規格や技術仕様書とは異なり、「state of the art（技術の現状）」のようなデータを含む文書だと書かれています。"}</p>
{"\n"}
<figure className={"diagram"}><Diagram index={0} />{"\n"}</figure>
{"\n"}
<p>{"つまり、"}<strong>{"「この通りにやらなければ不適合」という文書ではなく、「こう適用すると良い」という手引き"}</strong>{" として読むのが正しい姿勢です。"}</p>
{"\n"}
<hr />
{"\n"}
  </>;
}
