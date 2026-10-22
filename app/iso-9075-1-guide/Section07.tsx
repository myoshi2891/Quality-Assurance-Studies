import React from 'react';
export default function Section() { return <>
<h2 id="s-6-step-6-主要製品の対応状況-2026年10月8日時点で確認できた範囲">{"6. Step 6: 主要製品の対応状況（2026年10月8日時点で確認できた範囲）"}</h2>

<h3 id="s-6-1-postgresql">{"6.1 PostgreSQL"}</h3>

<div className="table-scroll"><table aria-labelledby="s-6-1-postgresql"><thead><tr className="header"><th>{"機能"}</th><th>{"対応状況"}</th><th>{"出典"}</th></tr></thead><tbody><tr className="odd"><td>{"UNIQUE のNULL扱い（F292）"}</td><td>{"PostgreSQL 15"}</td><td>{"Eisentraut氏ブログ"}</td></tr><tr className="even"><td>{"ANY_VALUE（T626）"}</td><td>{"PostgreSQL 16"}</td><td>{"同上"}</td></tr><tr className="odd"><td>{"非10進整数リテラル（T661）・アンダースコア（T662）"}</td><td>{"PostgreSQL 16"}</td><td>{"同上"}</td></tr><tr className="even"><td>{"独自の "}<code>{"json"}</code>{"／"}<code>{"jsonb"}</code>{" 型の追加"}</td><td><code>{"json"}</code>{" は 9.2、"}<code>{"jsonb"}</code>{" は 9.4 で追加（"}<strong>{"T801への適合とは別の話"}</strong>{"）"}</td><td>{"PostgreSQL公式ドキュメント"}</td></tr><tr className="odd"><td>{"JSONデータ型（T801）"}</td><td><strong>{"PostgreSQL 18 時点で未対応"}</strong>{"（公式ドキュメントの Unsupported Features に掲載）"}</td><td>{"PostgreSQL 18 公式ドキュメント Appendix D"}</td></tr><tr className="even"><td>{"JSON簡易アクセサ・アイテムメソッド"}</td><td>{"記事公開時点では「将来」"}</td><td>{"Eisentraut氏ブログ（2023年4月時点の情報）"}</td></tr><tr className="odd"><td><strong>{"SQL/PGQ"}</strong></td><td>{"2026年3月16日に master へコミットされたが、"}<strong>{"2026年9月7日に master と REL_19_STABLE の両方から revert"}</strong>{"。"}<strong>{"PostgreSQL 19 には搭載されず、今後の搭載版は未定"}</strong></td><td>{"pgsql-committers／depesz／pgEdge"}</td></tr></tbody></table></div>

<p>{"SQL/PGQ の実装（"}<code>{"GRAPH_TABLE"}</code>{" によるグラフパターンマッチングと "}<code>{"CREATE / ALTER / DROP PROPERTY GRAPH"}</code>{"）は、2026年3月に一度コミットされたものの、リリース前に設計上の課題が複数指摘されたため、2026年9月7日に Peter Eisentraut氏自身のコミットで revert されました。pgsql-hackers では、カタログ表現と pg_dump 対応の再設計が必要として、19 からの revert を求める意見が出ており（2026年9月3日のスレッド）、Eisentraut氏が同意しています。したがって、これらは "}<strong>{"PostgreSQL 19 の機能ではありません"}</strong>{"。後継バージョンでの再提案が見込まれますが、搭載版は確定していません。"}</p>

<div className="callout callout-warn"><p><strong>{"注意"}</strong>{": Eisentraut氏の対応表は2023年4月時点です。最新の対応状況は、お使いのバージョンの公式ドキュメント（SQL Conformance）で必ず確認してください。SQL/PGQ の搭載版についても、PostgreSQL 公式のリリースノートで確認してください。なお、PostgreSQL 19 自体のリリースも、ベータ期間中の機能 revert や見直しの影響で例年より遅れる見通しと報じられています（Snowflakeのエンジニアリングブログ）。"}</p></div>

<h3 id="s-6-2-oracle-database">{"6.2 Oracle Database"}</h3>

<p>{"Oracle の公式ブログによれば、Oracle は SQL/PGQ の標準化を主導し、"}<strong>{"Oracle Database 23ai で最初の商用SQL/PGQ実装"}</strong>{"を提供しました。JSON型やVECTOR型をプロパティのデータ型に使える点なども特徴として挙げられています。"}</p>

<h3 id="s-6-3-postgresqlとoracleのpgq実装差-コミュニティでの検証例">{"6.3 PostgreSQLとOracleのPGQ実装差（コミュニティでの検証例）"}</h3>

<p>{"PostgreSQLのメーリングリストでは、PGQのリグレッションテストをOracleでも動かした比較が共有されています。報告された例を抜粋します（個別の挙動は各製品の最新版で再確認してください）。PostgreSQL 列は、2026年9月7日に revert される前の開発版（master）での挙動であり、PostgreSQL 19 で利用できる機能ではありません。Oracle 列は報告時点の挙動です。"}</p>

<div className="table-scroll"><table aria-labelledby="s-6-3-postgresqlとoracleのpgq実装差-コミュニティでの検証例"><thead><tr className="header"><th>{"項目"}</th><th>{"PostgreSQL（2026年9月7日の revert 前の開発版）"}</th><th>{"Oracle（報告時点）"}</th></tr></thead><tbody><tr className="odd"><td><code>{"ALTER PROPERTY GRAPH"}</code></td><td>{"対応（revert 前の開発版）"}</td><td>{"非対応（報告時点）"}</td></tr><tr className="even"><td><code>{"NODE"}</code>{" / "}<code>{"RELATIONSHIP"}</code>{" の同義語"}</td><td>{"標準の同義語に対応（revert 前の開発版）"}</td><td><code>{"VERTEX"}</code>{" / "}<code>{"EDGE"}</code>{" のみ"}</td></tr><tr className="odd"><td><code>{"TEMPORARY PROPERTY GRAPH"}</code></td><td>{"対応（revert 前の開発版）"}</td><td>{"非対応（報告時点）"}</td></tr></tbody></table></div>

<div className="callout callout-practice"><p><strong>{"QAの教訓"}</strong>{": 同じ標準機能でも"}<strong>{"製品間で差が出る"}</strong>{"ことが、実例として確認できます。移植性を謳うシステムでは、機能単位の適合テストが重要です。"}</p></div>

<hr />

</>; }
