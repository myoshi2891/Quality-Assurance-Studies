import React from 'react';
import Diagram from './Diagram';

export default function Section05() {
    return <>
<h2 id="5-全体像規格の構造マップ">{"5. 全体像：規格の構造マップ"}</h2>{" "}<p>{" IEC 62304 は大きく、"}<strong>{"共通の土台（箇条4）"}</strong>{"の上に "}<strong>{"5つの主要プロセス（箇条5〜9）"}</strong>{"が載る構造です。 "}</p>{" "}<Diagram id="mmd-1" />{" "}<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"箇条"}</th><th>{"内容"}</th><th>{"役割"}</th></tr></thead><tbody><tr className="odd"><td>{"1〜3"}</td><td>{"適用範囲、引用規格、用語"}</td><td>{"前提知識"}</td></tr><tr className="even"><td>{"4"}</td><td>{"一般要求事項"}</td><td>{"QMS、リスク管理、安全クラス、レガシー"}</td></tr><tr className="odd"><td>{"5"}</td><td>{"ソフトウェア開発プロセス"}</td><td>{"作る"}</td></tr><tr className="even"><td>{"6"}</td><td>{"ソフトウェア保守プロセス"}</td><td>{"直す"}</td></tr><tr className="odd"><td>{"7"}</td><td>{"ソフトウェアリスクマネジメントプロセス"}</td><td>{"安全を守る"}</td></tr><tr className="even"><td>{"8"}</td><td>{"ソフトウェア構成管理プロセス"}</td><td>{"版を管理する"}</td></tr><tr className="odd"><td>{"9"}</td><td>{"ソフトウェア問題解決プロセス"}</td><td>{"不具合を処理する"}</td></tr><tr className="even"><td>{"附属書A〜C"}</td><td>{"根拠、ガイダンス、他規格との関係"}</td><td>{"理解の補助（附属書は参考情報として使う）"}</td></tr></tbody></table>{" "}</div>{" "}
    </>;
}
