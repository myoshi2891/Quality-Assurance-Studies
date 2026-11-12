import React from 'react';
import Diagram from './Diagram';

export default function Section10() {
    return <>
<h2 id="10-step-5構成管理箇条8">{"10. Step 5：構成管理（箇条8）"}</h2>{" "}<p>{" "}<strong>{"構成管理とは"}</strong>{": 「どのバージョンの何が、どう変更されたか」を常に追跡できる状態にすることです。 "}</p>{" "}<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"活動"}</th><th>{"内容"}</th><th>{"実務での例"}</th></tr></thead><tbody><tr className="odd"><td>{"8.1 構成の識別"}</td><td>{"管理対象（構成アイテム）を決め、識別する"}</td><td>{" ソースコード、ドキュメント、"}<strong>{"SOUP の名称とバージョン"}</strong>{"、ビルド設定 "}</td></tr><tr className="even"><td>{"8.2 変更管理"}</td><td>{"変更を依頼 → 承認 → 実施 → 検証の流れで管理"}</td><td>{"Pull Request の承認ルール、変更依頼チケット"}</td></tr><tr className="odd"><td>{"8.3 構成状況の記録"}</td><td>{"変更履歴とバージョンの状態を記録"}</td><td>{"リリースタグ、変更履歴、ビルドの出所"}</td></tr></tbody></table>{" "}</div>{" "}<Diagram id="mmd-9" />{" "}<blockquote className="callout">{" "}<p>{" "}<strong>{"SOUP も構成管理の対象"}</strong>{"です。使っているライブラリの名前とバージョンを、一覧で管理します。 "}</p>{" "}</blockquote>{" "}
    </>;
}
