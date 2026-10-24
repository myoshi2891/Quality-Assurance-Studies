import React from 'react';
import Diagram from './Diagram';
import CodeExample from './CodeExample';
export default function Section() { return <>
<h2 id="s-4-step-4-sql準拠-とは何か-conformance">{"4. Step 4: 「SQL準拠」とは何か（Conformance）"}</h2>

<h3 id="s-4-1-すべてを実装する製品は存在しない">{"4.1 すべてを実装する製品は存在しない"}</h3>

<p>{"Markus Winand 氏（modern-sql.com 運営、『SQL Performance Explained』著者）は、SQL標準は巨大で、"}<strong>{"単一の実装がすべてを実装することはあり得ない"}</strong>{"と述べています。SQL-92 では entry / intermediate / full の3段階の適合レベルがありましたが、SQL:1999 以降は次の構造です。"}</p>

<Diagram id="diagram-4" />

<div className="table-scroll"><table aria-labelledby="s-4-1-すべてを実装する製品は存在しない"><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"Core SQL"}</td><td>{"すべての準拠実装が満たすべき"}<strong>{"必須機能"}</strong>{"の集合"}</td></tr><tr className="even"><td>{"オプション機能"}</td><td>{"Core以外。"}<strong>{"機能単位"}</strong>{"で対応可否を主張する"}</td></tr><tr className="odd"><td>{"機能識別子（Feature ID）"}</td><td><code>{"T054"}</code>{"、"}<code>{"F292"}</code>{" のようなコード。機能を一意に指す"}</td></tr></tbody></table></div>

<div className="callout callout-note"><p>{"Winand 氏が引用した、ANSIデータベース委員会の元幹事の論文では、SQL:1999 の Core を実装することは「3社のうち2社を除き、ほぼ不可能」と評されています（出典: modern-sql.com「SQL Conformance Levels」）。"}</p></div>

<h3 id="s-4-2-sql-2023-で追加された機能はすべて-オプション">{"4.2 SQL:2023 で追加された機能はすべて「オプション」"}</h3>

<p>{"Peter Eisentraut 氏（PostgreSQLコミッタ、ISO SQL標準の策定にも関与）の解説によれば、SQL:2023 の新機能はすべて"}<strong>{"オプション機能"}</strong>{"です。つまり、「SQL:2023に対応」と言っても、"}<strong>{"どの機能に対応しているか"}</strong>{"の確認が必須です。"}</p>

<h3 id="s-4-3-実務での確認方法-qa向けチェックリスト">{"4.3 実務での確認方法（QA向けチェックリスト）"}</h3>

<div className="table-scroll"><table aria-labelledby="s-4-3-実務での確認方法-qa向けチェックリスト"><thead><tr className="header"><th>{"手順"}</th><th>{"やること"}</th><th>{"具体例"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td>{"製品ドキュメントの「SQL適合性」章を読む"}</td><td>{"PostgreSQL公式ドキュメントの Appendix D（SQL Conformance）"}</td></tr><tr className="even"><td>{"2"}</td><td>{"機能IDで対応状況を確認"}</td><td><code>{"T626 ANY_VALUE"}</code>{" など"}</td></tr><tr className="odd"><td>{"3"}</td><td>{"カタログビューで確認"}</td><td>{"PostgreSQLは "}<code>{"information_schema.sql_features"}</code>{" で機能一覧を参照可能"}</td></tr><tr className="even"><td>{"4"}</td><td>{"自前の適合テストを用意"}</td><td>{"機能ごとにテストケースを作り、製品間で比較"}</td></tr></tbody></table></div>

<CodeExample source={"-- PostgreSQL での確認例: ANY_VALUE (T626) に対応しているか\nSELECT feature_id, feature_name, is_supported\nFROM information_schema.sql_features\nWHERE feature_id = 'T626';"} className="" />

<div className="callout callout-note"><p><code>{"information_schema"}</code>{" の規定は Part 11（SQL/Schemata）にあります。"}</p></div>

<hr />

</>; }
