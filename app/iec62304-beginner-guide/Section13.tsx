import React from 'react';
import Diagram from './Diagram';

export default function Section13() {
    return <>
<h2 id="13-関連規格との関係">{"13. 関連規格との関係"}</h2>{" "}<p>{" IEC 62304 は"}<strong>{"単独では完結しません"}</strong>{"。複数の規格が役割分担しています。 "}</p>{" "}<Diagram id="mmd-12" />{" "}<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"規格"}</th><th>{"62304 との関係"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"ISO 13485"}</strong></td><td>{" 開発を支える品質マネジメントシステム。62304 は QMS の存在を前提とする "}</td></tr><tr className="even"><td><strong>{"ISO 14971"}</strong></td><td>{"医療機器全体のリスクマネジメント。62304 の箇条7が接続する"}</td></tr><tr className="odd"><td><strong>{"IEC/TR 80002-1"}</strong></td><td>{"ISO 14971 をソフトウェアに適用するための技術報告（ガイダンス）"}</td></tr><tr className="even"><td><strong>{"IEC 60601-1"}</strong></td><td>{"医用電気機器の安全規格。ソフトウェアを含む機器では 62304 と連携"}</td></tr><tr className="odd"><td><strong>{"IEC 62366-1"}</strong></td><td>{" ユーザビリティエンジニアリング。ユーザーインターフェースの安全性 "}</td></tr><tr className="even"><td><strong>{"IEC 82304-1"}</strong></td><td>{" 単独のヘルスソフトウェア製品の安全。バリデーションなど"}<strong>{"62304 が扱わない領域"}</strong>{"を補う "}</td></tr><tr className="odd"><td><strong>{"IEC 81001-5-1"}</strong></td><td>{" ヘルスソフトウェアのセキュリティライフサイクル。62304 だけでは薄いセキュリティを補う "}</td></tr></tbody></table>{" "}</div>{" "}<blockquote className="callout">{" "}<p>{" 日本では、単体ソフトウェア製品の製品安全を扱う "}<strong>{"JIS T 82304-1:2018"}</strong>{" が、JIS T 2304 を引用して使う関係にあります（PMDA 資料）。 "}</p>{" "}</blockquote>{" "}
    </>;
}
