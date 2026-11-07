import React from 'react';

export default function Section01() {
    return <>
<h2 id="step-1-この規格を一言でいうと">{" "}<span className="step-num">{"STEP 1"}</span>{"この規格を一言でいうと "}</h2>{" "}<p>{" "}<strong>{"「組織が持つIT資産（ハードウェア・ソフトウェア・クラウド等）を、ライフサイクル全体にわたって正しく把握・管理・改善し続けるための『仕組み（マネジメントシステム）』の要求事項」"}</strong>{" です。 "}</p>{" "}<p>{"ポイントは次の3つです。"}</p>{" "}<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"キーワード"}</th><th>{"意味"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"IT資産"}</strong></td><td>{" サーバ・PC等の機器だけでなく、実行ソフト（OS・アプリ）や非実行ソフト（フォント・設定情報）、SaaSやクラウド環境も含む "}</td></tr><tr className="even"><td><strong>{"マネジメントシステム"}</strong></td><td>{" 一度きりのプロジェクトではなく、Plan-Do-Check-Actで回し続ける組織的な仕組み "}</td></tr><tr className="odd"><td><strong>{"要求事項"}</strong></td><td>{" 「何を満たすべきか」を定めるもの。「どうやるか（手順・書式）」は定めない "}</td></tr></tbody></table>{" "}</div>{" "}<div className="callout callout-tip">{" "}<span aria-hidden="true" className="callout-icon">{"💡"}</span>{" "}<div className="callout-body">{" "}<p>{" "}<strong>{"初学者向けメモ"}</strong>{"：この規格は「IT資産管理の作業マニュアル」ではありません。「IT資産管理がちゃんと運営されている組織とはこういう状態です」という"}<strong>{"到達すべき姿のチェックリスト"}</strong>{"に近い存在です。 "}</p>{" "}</div>{" "}</div>{" "}
    </>;
}
