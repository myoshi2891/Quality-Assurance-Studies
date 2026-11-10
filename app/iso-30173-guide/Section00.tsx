import React from "react";

export default function Section00() {
    return (
        <>
<h2 id="0-はじめにこの解説の確実さの範囲">{"0. はじめに：この解説の「確実さ」の範囲"}</h2>{"\n            "}<p>{"\n                この規格の本文は有償です（ISO公式で CHF\n                159）。今回の調査で私が"}<strong>{"実際に確認できた範囲"}</strong>{"は次のとおりです。\n            "}</p>{"\n            "}<div className="table-scroll" role="region" tabIndex={0} aria-labelledby="0-はじめにこの解説の確実さの範囲">{"\n                "}<table><thead><tr className="header"><th>{"区分"}</th><th>{"確認できた内容"}</th><th>{"確実さ"}</th></tr></thead><tbody><tr className="odd"><td>{"公式メタ情報"}</td><td>{"発行年月、版、ページ数、所管委員会、ICS"}</td><td>{"高（ISO公式ページ）"}</td></tr><tr className="even"><td>{"目次（全章・全節）"}</td><td>{"第1章〜第7章、附属書A・B、図表一覧"}</td><td>{"高（VDE出版の無料プレビューPDF）"}</td></tr><tr className="odd"><td>{"序文（Introduction）と適用範囲"}</td><td>{"規格の目的、対象、利点の例"}</td><td>{"高（同PDF）"}</td></tr><tr className="even"><td>{"用語 3.1.1「digital twin」と 3.1.2「entity」"}</td><td>{"定義と注記"}</td><td>{"高（同PDF）"}</td></tr><tr className="odd"><td>{"第5章〜第7章の本文詳細"}</td><td><strong>{"目次レベルまで"}</strong></td><td>{"中（章題のみ確認。詳細は本文で要確認）"}</td></tr></tbody></table>{"\n            "}</div>{"\n            "}<div className="callout callout-warn">{"\n                "}<div className="callout-label">{"要確認・注意"}</div>{"\n                "}<p>{"\n                    "}<strong>{"注意"}</strong>{":\n                    第5章以降の「中身」は目次の章題から読み取れる範囲で整理しています。"}<strong>{"各節で規格が具体的に何と書いているかは、規格本文で必ず確認してください"}</strong>{"。本ガイドで本文未確認の部分には「📌\n                    要確認」を付けています。\n                "}</p>{"\n            "}</div>
        </>
    );
}
