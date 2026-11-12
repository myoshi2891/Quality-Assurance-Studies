import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-4中核概念--sql-environment-とその部品">{"\n                    STEP 4：中核概念 ― SQL-environment とその部品\n                "}</h2>
{"\n                "}
<p>{"\n                    Part\n                    1の第4章は、SQLを「言語」だけでなく「"}<strong>{"どこで・誰が・何に対して実行するか"}</strong>{"」まで含めて定義します\n                    "}<a className="cite" href="#ref-S2">{"[S2]"}</a><a className="cite" href="#ref-S3">{"[S3]"}</a>{"。用語がハイフン付きで独特ですが、日常用語に置き換えると理解しやすくなります。\n                "}</p>
{"\n                "}
<h3 id="4-1-用語の対応表目次で確認できた語">{"\n                    4-1. 用語の対応表（目次で確認できた語）\n                "}</h3>
{"\n                "}
<div className="table-scroll">{"\n                    "}<table><thead><tr className="header"><th>{"規格の用語"}</th><th>{"日常的な言い換え（理解用）"}</th><th>{"ひとこと"}</th></tr></thead><tbody><tr className="odd"><td>{"SQL-environment"}</td><td>{"SQLが動く「環境」全体"}</td><td>{"以下の部品を包む最上位の概念"}</td></tr><tr className="even"><td>{"SQL-agent"}</td><td>{"SQLの実行を引き起こす主体（アプリ側）"}</td><td>{"「誰がSQLを発行するか」"}</td></tr><tr className="odd"><td>{"SQL-implementation"}</td><td>{"DBMS製品（クライアント側＋サーバー側）"}</td><td>{"「SQLを処理する実体」"}</td></tr><tr className="even"><td>{"SQL-client"}</td><td>{"SQL-implementation の呼び出し側の部分"}</td><td>{"アプリとつながる窓口"}</td></tr><tr className="odd"><td>{"SQL-server"}</td><td>{"SQL-implementation のデータ管理側の部分"}</td><td>{"データを実際に扱う"}</td></tr><tr className="even"><td>{"SQL-client module"}</td><td>{"アプリ側のSQL文のまとまり"}</td><td>{"埋め込みSQL等に対応する概念"}</td></tr><tr className="odd"><td>{"user mapping / routine mapping"}</td><td>{"外部データ連携のためのユーザー／ルーチン対応づけ"}</td><td>{"Part 9（MED）と関連"}</td></tr><tr className="even"><td>{"SQL-schema"}</td><td>{"スキーマ（表・ビュー等を束ねる入れ物）"}</td><td>{"カタログの中に置かれる"}</td></tr><tr className="odd"><td>{"SQL-data"}</td><td>{"実際に格納される表のデータ"}</td><td>{"「中身」"}</td></tr></tbody></table>{"\n                "}</div>
{"\n                "}
<h3 id="4-2-図で見るsqlが実行される流れ概念図">{"\n                    4-2. 図で見る：SQLが実行される流れ（概念図）\n                "}</h3>
{"\n                "}
<Diagram id="mmd-4" />
{"\n                "}
<div className="callout-tip">{"\n                    "}<span className="callout-icon">{"💡"}</span>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            この図は"}<strong>{"理解のための単純化"}</strong>{"です。規格が定義する関係（カタログ、認可識別子など）は、原文で確認してください。\n                        "}</p>{"\n                    "}</div>{"\n                "}</div>
{"\n                "}
<h3 id="4-3-データ型とスキーマオブジェクト">{"4-3. データ型とスキーマオブジェクト"}</h3>
{"\n                "}
<p>{"\n                    目次には 4.6「SQL data types」と 4.8「SQL-schema\n                    objects」があり、後者の下に"}<strong>{"ユーザー定義型"}</strong>{"（User-defined\n                    types）や"}<strong>{"表制約"}</strong>{"（Table constraints）の節が確認できます\n                    "}<a className="cite" href="#ref-S2">{"[S2]"}</a><a className="cite" href="#ref-S3">{"[S3]"}</a>{"。SQL:2023の\n                    "}<code>{"UNIQUE NULLS [NOT] DISTINCT"}</code>{"（後述）は、まさにこの「表制約」の解釈に関わる変更点です。\n                "}</p>
{"\n                "}
<hr />
{"\n                "}
</>; }
