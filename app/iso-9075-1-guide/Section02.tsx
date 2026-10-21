import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="s-1-step-1-sql標準の全体像をつかむ">{"1. Step 1: SQL標準の全体像をつかむ"}</h2>

<h3 id="s-1-1-sql標準は-1冊-ではなく-パートの集合">{"1.1 SQL標準は「1冊」ではなく「パートの集合」"}</h3>

<p>{"SQL標準は SQL:1999 以降、複数の"}<strong>{"パート"}</strong>{"（Part）に分割されています。Part 1 はその「親玉」ではなく、"}<strong>{"他のパートが共通で参照する前提知識の巻"}</strong>{"です。"}</p>

<Diagram id="diagram-0" />

<h3 id="s-1-2-iso-iec-9075-シリーズ全体のパート一覧-現行パート">{"1.2 ISO/IEC 9075 シリーズ全体のパート一覧（現行パート）"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"Part"}</th><th>{"略称"}</th><th>{"日本語での意味"}</th><th>{"一言説明"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td>{"SQL/Framework"}</td><td>{"フレームワーク"}</td><td><strong>{"本ガイドの対象"}</strong>{"。概念・用語・表記の共通基盤"}</td></tr><tr className="even"><td>{"2"}</td><td>{"SQL/Foundation"}</td><td>{"基盤"}</td><td>{"SELECT/INSERT/DDL等、SQLの中核機能の規定"}</td></tr><tr className="odd"><td>{"3"}</td><td>{"SQL/CLI"}</td><td>{"コールレベルインタフェース"}</td><td>{"アプリからSQLを呼び出すAPI"}</td></tr><tr className="even"><td>{"4"}</td><td>{"SQL/PSM"}</td><td>{"永続格納モジュール"}</td><td>{"ストアドプロシージャ等の手続き言語"}</td></tr><tr className="odd"><td>{"9"}</td><td>{"SQL/MED"}</td><td>{"外部データ管理"}</td><td>{"外部データソースへの接続（Foreign Data）"}</td></tr><tr className="even"><td>{"10"}</td><td>{"SQL/OLB"}</td><td>{"オブジェクト言語バインディング"}</td><td>{"埋め込みSQL的な言語連携（SQLJ系）"}</td></tr><tr className="odd"><td>{"11"}</td><td>{"SQL/Schemata"}</td><td>{"情報・定義スキーマ"}</td><td><code>{"INFORMATION_SCHEMA"}</code>{" の規定"}</td></tr><tr className="even"><td>{"13"}</td><td>{"SQL/JRT"}</td><td>{"Java関連"}</td><td>{"JavaでのSQLルーチン・型"}</td></tr><tr className="odd"><td>{"14"}</td><td>{"SQL/XML"}</td><td>{"XML関連"}</td><td>{"XMLとSQLの連携"}</td></tr><tr className="even"><td>{"15"}</td><td>{"SQL/MDA"}</td><td>{"多次元配列"}</td><td>{"配列データの扱い"}</td></tr><tr className="odd"><td>{"16"}</td><td>{"SQL/PGQ"}</td><td>{"プロパティグラフ問合せ"}</td><td><strong>{"2023年版で新設"}</strong>{"。グラフ問合せをSQLに追加"}</td></tr></tbody></table></div>

<div className="callout callout-practice"><p><strong>{"補足（規定参照との区別）"}</strong>{": 上表はシリーズ全体のパート一覧であり、Part 1 自身を含みます。これとは別に、ISO公式ページに示される Part 1 の Clause 2（規定参照）が挙げているのは "}<strong>{"Part 2、3、4、9、10、11、13、14、15、16"}</strong>{" で、Part 1 自身は規定参照には含まれません。"}</p><p>{"歴史的には Part 5〜8・12 なども存在した、または計画されましたが、現行シリーズには含まれていません。欠番の経緯（内容が他パートへ吸収された等）は Markus Winand 氏の「The 16 Parts of SQL」に整理されています（参考URLは末尾）。"}</p></div>

<hr />

</>; }
