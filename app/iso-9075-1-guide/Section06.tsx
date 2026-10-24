import React from 'react';
import Diagram from './Diagram';
import CodeExample from './CodeExample';
export default function Section() { return <>
<h2 id="s-5-step-5-sql-2023-で何が新しくなったか">{"5. Step 5: SQL:2023 で何が新しくなったか"}</h2>

<p>{"Part 1 自体は枠組みの巻ですが、"}<strong>{"SQL:2023 というエディション全体"}</strong>{"の変更点を知ることは、Part 1 の「枠組み」が実際にどう使われるかを理解する近道です。Eisentraut 氏は変更点を次の3つに整理しています。"}</p>

<Diagram id="diagram-5" />

<h3 id="s-5-1-既存sqlの小さな改良-機能id付き">{"5.1 既存SQLの小さな改良（機能ID付き）"}</h3>

<div className="table-scroll"><table aria-labelledby="s-5-1-既存sqlの小さな改良-機能id付き"><thead><tr className="header"><th>{"機能"}</th><th>{"機能ID"}</th><th>{"概要"}</th><th>{"使用例"}</th></tr></thead><tbody><tr className="odd"><td>{"UNIQUE制約のNULL扱い"}</td><td>{"F292"}</td><td>{"NULLを重複とみなすか選べる"}</td><td><code>{"UNIQUE NULLS NOT DISTINCT (col)"}</code></td></tr><tr className="even"><td>{"GROUP化された表のORDER BY"}</td><td>{"F868"}</td><td>{"グループ化表でのORDER BY"}</td><td>{"－"}</td></tr><tr className="odd"><td>{"GREATEST / LEAST"}</td><td>{"T054"}</td><td>{"複数値の最大・最小"}</td><td><code>{"GREATEST(1, 5, 3)"}</code></td></tr><tr className="even"><td>{"文字列パディング関数"}</td><td>{"T055"}</td><td><code>{"LPAD"}</code>{" / "}<code>{"RPAD"}</code></td><td><code>{"LPAD('7', 3, '0')"}</code></td></tr><tr className="odd"><td>{"複数文字のTRIM"}</td><td>{"T056"}</td><td>{"複数文字を指定してTRIM"}</td><td>{"－"}</td></tr><tr className="even"><td>{"文字列型の最大長省略"}</td><td>{"T081"}</td><td>{"長さ指定を省略可能に"}</td><td>{"－"}</td></tr><tr className="odd"><td>{"循環検出の標識値の拡張"}</td><td>{"T133"}</td><td>{"再帰クエリのcycle mark値を拡張"}</td><td>{"－"}</td></tr><tr className="even"><td>{"ANY_VALUE"}</td><td>{"T626"}</td><td>{"グループ内の任意の1値を返す集約関数"}</td><td><code>{"ANY_VALUE(name)"}</code></td></tr><tr className="odd"><td>{"非10進整数リテラル"}</td><td>{"T661"}</td><td>{"16進等の整数リテラル"}</td><td><code>{"0xFF"}</code></td></tr><tr className="even"><td>{"数値リテラル内のアンダースコア"}</td><td>{"T662"}</td><td>{"桁区切りに使える"}</td><td><code>{"1_000_000"}</code></td></tr></tbody></table></div>

<CodeExample source={"-- 例: department_id ごとに department_name が一意な場合に限り、ANY_VALUE で GROUP BY に含めずに取り出せる\n-- （一意でない場合は、グループ内のどの値が返るかは不定）\nSELECT department_id,\n       ANY_VALUE(department_name) AS department_name,\n       COUNT(*)                   AS employee_count\nFROM employees\nGROUP BY department_id;"} className="" />

<h3 id="s-5-2-json関連の新機能">{"5.2 JSON関連の新機能"}</h3>

<div className="table-scroll"><table aria-labelledby="s-5-2-json関連の新機能"><thead><tr className="header"><th>{"機能"}</th><th>{"機能ID"}</th><th>{"概要"}</th></tr></thead><tbody><tr className="odd"><td>{"JSONデータ型"}</td><td>{"T801"}</td><td>{"ネイティブなJSON型"}</td></tr><tr className="even"><td>{"拡張JSONデータ型"}</td><td>{"T802"}</td><td>{"JSON型の強化"}</td></tr><tr className="odd"><td>{"文字列ベースJSON"}</td><td>{"T803"}</td><td>{"文字列としてJSONを扱う従来方式"}</td></tr><tr className="even"><td>{"SQL/JSONパスの16進整数リテラル"}</td><td>{"T840"}</td><td>{"JSONパス言語での16進表記"}</td></tr><tr className="odd"><td>{"SQL/JSON簡易アクセサ"}</td><td>{"T860〜T864"}</td><td>{"ドット記法等での簡易アクセス"}</td></tr><tr className="even"><td>{"SQL/JSONアイテムメソッド"}</td><td>{"T865〜T878"}</td><td>{"JSON値に適用するメソッド群"}</td></tr><tr className="odd"><td>{"JSON比較"}</td><td>{"T879〜T882"}</td><td>{"JSON値の比較"}</td></tr></tbody></table></div>

<div className="callout callout-note"><p>{"Eisentraut 氏は、SQL:2023 のJSON関連は SQL:2016 を土台にした強化であり、SQL/JSONパス言語は JavaScript 由来であること、ECMAScriptの構文拡張を実装拡張として追従できるよう規格の文言が調整されたことにも触れています。"}</p></div>

<h3 id="s-5-3-新パート-sql-pgq-プロパティグラフ問合せ">{"5.3 新パート: SQL/PGQ（プロパティグラフ問合せ）"}</h3>

<p>{"SQL/PGQ は、リレーショナルDBのテーブルの上に"}<strong>{"グラフ構造"}</strong>{"（頂点と辺）を定義し、パターンマッチングで問い合わせる機能です。Winand 氏は、これが新しいグラフ問合せ標準（GQL）の一部をSQLに取り込むものと説明しています。"}</p>

<Diagram id="diagram-6" />

<CodeExample source={"-- 概念例（製品により細部の構文は異なる）\nCREATE PROPERTY GRAPH social\n  VERTEX TABLES (person KEY (id) PROPERTIES (name))\n  EDGE TABLES (\n    friendship KEY (id)\n      SOURCE      KEY (person_a) REFERENCES person (id)\n      DESTINATION KEY (person_b) REFERENCES person (id)\n      PROPERTIES (since)\n  );\n\nSELECT *\nFROM GRAPH_TABLE (\n  social\n  MATCH (p IS person)-[f IS friendship]->(q IS person)\n  COLUMNS (p.name AS from_name, q.name AS to_name, f.since)\n);"} className="" />

<hr />

</>; }
