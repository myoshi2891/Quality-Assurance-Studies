import React from 'react';
import Diagram from './Diagram';
export default function Section12() { return <><h2 id="sec-26">{"Step 6：構成管理と変更管理（箇条8）"}</h2>

<div className="table-scroll"><table><thead><tr className="header"><th>{"活動"}</th><th>{"目的"}</th><th>{"具体例"}</th></tr></thead><tbody><tr className="odd"><td>{"構成識別"}</td><td>{"管理対象を特定する"}</td><td>{" ソース、設計書、テスト、ツール、"}<strong>{"SOUP（名前とバージョン）"}</strong></td></tr><tr className="even"><td>{"変更管理"}</td><td>{"変更を統制する"}</td><td>{"変更要求→評価→承認→実装→検証、全体の追跡可能性"}</td></tr><tr className="odd"><td>{"構成状況の記録"}</td><td>{"何が、いつ、どの版かを追跡"}</td><td>{"リリース時点の構成を再現できる"}</td></tr></tbody></table></div>

<Diagram id="mmd-11" />

<aside className="callout callout-tip"><div className="callout-icon">{"💡"}</div><div className="callout-body"><p>{" Gitなどのバージョン管理は、構成管理の"}<strong>{"手段"}</strong>{"にすぎません。プルリクエストのレビュー記録、承認、課題管理との紐付けをどう残すかが、規格への適合の本質です。 "}</p></div></aside>
</>; }
