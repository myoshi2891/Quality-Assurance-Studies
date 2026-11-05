import React from 'react';
import Diagram from './Diagram';
import CodeExample from './CodeExample';
export default function Section() { return <>
<h2 id="step-6sql2023-で何が変わったか">{"STEP 6：SQL:2023 で何が変わったか"}</h2>
{"\n                "}
<p>{"\n                    Part\n                    1自体は枠組みの文書ですが、"}<strong>{"シリーズ全体（SQL:2023）の改訂内容"}</strong>{"を知ることは、Part\n                    1が紹介する各パートを理解する近道です。以下は Peter Eisentraut\n                    氏（PostgreSQLコア開発者）の整理\n                    "}<a className="cite" href="#ref-S5">{"[S5]"}</a>{" に基づきます。\n                "}</p>
{"\n                "}
<div className="callout-note">{"\n                    "}<span className="callout-icon">{"📝"}</span>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            SQL:2023の新機能は、すべて"}<strong>{"任意（オプション）機能"}</strong>{"として追加されています\n                            "}<a className="cite" href="#ref-S5">{"[S5]"}</a>{"。既存実装が必ず変更を迫られるわけではありません。\n                        "}</p>{"\n                    "}</div>{"\n                "}</div>
{"\n                "}
<h3 id="6-1-変更の3系統">{"6-1. 変更の3系統"}</h3>
{"\n                "}
<Diagram id="mmd-6" />
{"\n                "}
<h3 id="6-2-小さな改善の機能一覧">{"6-2. 「小さな改善」の機能一覧"}</h3>
{"\n                "}
<div className="table-scroll">{"\n                    "}<table><thead><tr className="header"><th>{"機能ID"}</th><th>{"機能名"}</th><th>{"内容（初学者向け）"}</th></tr></thead><tbody><tr className="odd"><td>{"F292"}</td><td>{"UNIQUE null treatment"}</td><td>{"\n                                    UNIQUE制約で"}<strong>{"NULLを重複とみなすか"}</strong>{"を明示指定できる（"}<code>{"NULLS DISTINCT"}</code>{"\n                                    / "}<code>{"NULLS NOT DISTINCT"}</code>{"）。既定は実装定義\n                                "}</td></tr><tr className="even"><td>{"F868"}</td><td>{"ORDER BY in grouped table"}</td><td>{"GROUP BYした結果を、SELECT句に出ていない列で並べ替えてよい"}</td></tr><tr className="odd"><td>{"T054"}</td><td>{"GREATEST / LEAST"}</td><td>{"\n                                    複数引数の最大／最小。集計関数のMAX/MINと別名なのは、構文上区別できないため\n                                "}</td></tr><tr className="even"><td>{"T055"}</td><td>{"文字列パディング"}</td><td><code>{"LPAD"}</code>{" / "}<code>{"RPAD"}</code></td></tr><tr className="odd"><td>{"T056"}</td><td>{"複数文字TRIM"}</td><td>{"\n                                    "}<code>{"LTRIM"}</code>{" / "}<code>{"RTRIM"}</code>{" / "}<code>{"BTRIM"}</code>{"\n                                "}</td></tr><tr className="even"><td>{"T081"}</td><td>{"文字列型の最大長を省略可"}</td><td>{"\n                                    "}<code>{"VARCHAR"}</code>{"\n                                    の長さ指定を省略できる（既定上限は実装定義）\n                                "}</td></tr><tr className="odd"><td>{"T133"}</td><td>{"強化されたサイクルマーク値"}</td><td>{"\n                                    再帰クエリの "}<code>{"CYCLE"}</code>{" 句でboolean型や既定値を使える\n                                "}</td></tr><tr className="even"><td>{"T626"}</td><td>{"ANY_VALUE"}</td><td>{"グループから任意の非NULL値を返す集計関数"}</td></tr><tr className="odd"><td>{"T661"}</td><td>{"非10進整数リテラル"}</td><td>{"\n                                    "}<code>{"0xFF"}</code>{"（16進）・"}<code>{"0o755"}</code>{"（8進）・"}<code>{"0b1010"}</code>{"（2進）\n                                "}</td></tr><tr className="even"><td>{"T662"}</td><td>{"数値リテラルのアンダースコア"}</td><td><code>{"1_000_000"}</code>{" のように区切れる"}</td></tr></tbody></table>{"\n                "}</div>
{"\n                "}
<h3 id="6-3-json関連の機能一覧">{"6-3. JSON関連の機能一覧"}</h3>
{"\n                "}
<div className="table-scroll">{"\n                    "}<table><thead><tr className="header"><th>{"機能ID"}</th><th>{"機能名"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"T801"}</td><td>{"JSON data type"}</td><td>{"\n                                    "}<strong>{"JSON型"}</strong>{"の導入。SQL:2016は文字列に格納したJSONへの操作が中心だった\n                                "}</td></tr><tr className="even"><td>{"T802"}</td><td>{"Enhanced JSON data type"}</td><td>{"重複キーのチェック（"}<code>{"WITH UNIQUE KEYS"}</code>{"）"}</td></tr><tr className="odd"><td>{"T803"}</td><td>{"String-based JSON"}</td><td>{"SQL:2016の文字列ベースJSON機能の位置づけ"}</td></tr><tr className="even"><td>{"T840"}</td><td>{"Hex integer literals in SQL/JSON path"}</td><td>{"SQL/JSONパスで16進リテラルを許可"}</td></tr><tr className="odd"><td>{"T860-T864"}</td><td>{"SQL/JSON simplified accessor"}</td><td>{"\n                                    "}<code>{"t.j.foo.bar[2]"}</code>{"\n                                    のようにドットと添字でJSONへアクセス（"}<code>{"JSON_QUERY"}</code>{"/"}<code>{"JSON_VALUE"}</code>{"の糖衣構文）\n                                "}</td></tr><tr className="even"><td>{"T865-T878"}</td><td>{"SQL/JSON item methods"}</td><td>{"\n                                    "}<code>{"bigint()"}</code>{"、"}<code>{"date()"}</code>{"、"}<code>{"timestamp()"}</code>{"\n                                    など"}<strong>{"型変換系"}</strong>{"のメソッド群\n                                "}</td></tr><tr className="odd"><td>{"T879-T882"}</td><td>{"JSON comparison"}</td><td>{"JSON型の比較・ソート・グルーピング"}</td></tr></tbody></table>{"\n                "}</div>
{"\n                "}
<h3 id="6-4-具体例で理解する概念理解用のサンプル">{"\n                    6-4. 具体例で理解する（概念理解用のサンプル）\n                "}</h3>
{"\n                "}
<CodeExample code={"-- F292: NULLの扱いを明示する\nCREATE TABLE users (\n    email VARCHAR,              -- T081: 長さ指定を省略\n    UNIQUE NULLS NOT DISTINCT (email)\n);\nINSERT INTO users VALUES (NULL);\nINSERT INTO users VALUES (NULL);   -- NULLS NOT DISTINCT なので重複エラー\n\n-- T054 / T055 / T661 / T662\nSELECT GREATEST(10, 20, 15)        AS max_value,\n       LPAD('42', 6, '0')          AS padded,\n       0xFF + 0b1010 + 1_000_000   AS literal_sum;\n\n-- T626: GROUP BY に含まれない列から任意の1値を取る\nSELECT dept_id, ANY_VALUE(dept_name) AS dept_name, COUNT(*)\nFROM employees\nGROUP BY dept_id;\n\n-- T860: JSONの簡易アクセサ（JSON_VALUE等の糖衣構文）\nSELECT t.j.foo.bar[2] FROM tbl t;"} />
{"\n                "}
<div className="callout-warn">{"\n                    "}<span className="callout-icon">{"⚠️"}</span>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            各DBMSで対応状況・方言が異なります。実行前に"}<strong>{"使用するDBMSの対応表"}</strong>{"を確認してください（STEP\n                            7）。\n                        "}</p>{"\n                    "}</div>{"\n                "}</div>
{"\n                "}
<h3 id="6-5-目玉part-16-sqlpgqプロパティグラフ問合せ">{"\n                    6-5. 目玉：Part 16 SQL/PGQ（プロパティグラフ問合せ）\n                "}</h3>
{"\n                "}
<p>{"\n                    "}<strong>{"一言で"}</strong>{":\n                    既存の表を"}<strong>{"グラフ（頂点と辺）として問い合わせる"}</strong>{"ための構文です。Eisentraut氏は、単純なケースでは複雑な結合クエリをより直感的に書ける可能性がある、と説明しています\n                    "}<a className="cite" href="#ref-S5">{"[S5]"}</a>{"。\n                "}</p>
{"\n                "}
<Diagram id="mmd-7" />
{"\n                "}
<CodeExample code={"-- 概念例（構文の細部はDBMSごとに確認してください）\nCREATE PROPERTY GRAPH bank_graph\n    VERTEX TABLES (person, account)\n    EDGE TABLES (ownerof);          -- 外部キーがあれば関係を推論できる [S5]\n\nSELECT *\nFROM GRAPH_TABLE (bank_graph\n    MATCH (p IS person WHERE p.name = 'Alice') -[IS ownerof]-> (a IS account)\n    COLUMNS (p.name AS owner_name, a.account_no AS account_no)\n);"} />
{"\n                "}
<p>{"\n                    Oracleの説明でも、SQLのプロパティグラフは"}<strong>{"既存の表に対するビューのようなオブジェクト"}</strong>{"とされ、SQLの開発者・ツール資産をそのまま使える点が利点とされています\n                    "}<a className="cite" href="#ref-S11">{"[S11]"}</a>{"。\n                "}</p>
{"\n                "}
<h3 id="6-6-part-1との関係なぜここで扱うか">{"\n                    6-6. Part 1との関係（なぜここで扱うか）\n                "}</h3>
{"\n                "}
<p>{"\n                    Part 1の第5章（パート紹介）には"}<strong>{"5.12 SQL/PGQ"}</strong>{"の節があり、新パートの追加がPart\n                    1側にも反映されていることが目次から確認できます\n                    "}<a className="cite" href="#ref-S2">{"[S2]"}</a><a className="cite" href="#ref-S3">{"[S3]"}</a>{"。「新しい機能群はまずPart\n                    1の“地図”に載り、詳細は個別パートで定義される」という構図です。\n                "}</p>
{"\n                "}
<hr />
{"\n                "}
</>; }
