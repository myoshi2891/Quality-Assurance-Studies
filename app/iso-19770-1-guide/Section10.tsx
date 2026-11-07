import React from 'react';
import Diagram from './Diagram';

export default function Section10() {
    return <>
<h2 id="step-10-関連規格ファミリー19770シリーズ">{" "}<span className="step-num">{"STEP 10"}</span>{"関連規格ファミリー（19770シリーズ） "}</h2>{" "}<Diagram id="mermaid-diagram-9" />{" "}<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"パート"}</th><th>{"内容"}</th><th>{"本書との関係"}</th></tr></thead><tbody><tr className="odd"><td>{"19770-1:2017"}</td><td>{"ITAMシステムの要求事項"}</td><td><strong>{"本ガイドの対象"}</strong></td></tr><tr className="even"><td>{"19770-2"}</td><td>{"ソフトウェア識別タグ（データ標準）"}</td><td>{"データ面の標準"}</td></tr><tr className="odd"><td>{"19770-3"}</td><td>{"権利（ライセンス）の表現スキーマ"}</td><td>{"ライセンス管理で関連"}</td></tr><tr className="even"><td>{"19770-4"}</td><td>{"リソース使用量の標準"}</td><td>{"最適化で関連"}</td></tr><tr className="odd"><td>{"19770-5:2015"}</td><td>{"概要と用語"}</td><td>{"用語の定義元"}</td></tr><tr className="even"><td><strong>{"19770-10:2025（TS）"}</strong></td><td>{"ITAM実装ガイダンス（144ページ、2025年6月発行）"}</td><td>{"実装の手引き。ITAMプロセスの考え方を詳しく解説"}</td></tr></tbody></table>{" "}</div>{" "}<div className="callout callout-info">{" "}<span aria-hidden="true" className="callout-icon">{"🔗"}</span>{" "}<div className="callout-body">{" "}<p>{"用語に迷ったら、まず ISO/IEC 19770-5 を参照するのが定石です。"}</p>{" "}</div>{" "}</div>{" "}
    </>;
}
