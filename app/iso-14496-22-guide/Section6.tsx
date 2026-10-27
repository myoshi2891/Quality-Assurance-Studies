import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section6() { return <>
<h2 id="step-6">{"Step 6：規格の主要機能"}</h2>
<h3 id="6-1-2種類のアウトライン形式">{"6-1. 2種類のアウトライン形式"}</h3>
<div className="table-scroll"><table>{"\n"}<thead>{"\n"}<tr className="header">{"\n"}<th>{"項目"}</th>{"\n"}<th>{"TrueType形式（"}<code>{"glyf"}</code>{"）"}</th>{"\n"}<th>{"CFF / CFF2形式"}</th>{"\n"}</tr>{"\n"}</thead>{"\n"}<tbody>{"\n"}<tr className="odd">{"\n"}<td>{"曲線の種類（従来）"}</td>{"\n"}<td>{"2次ベジェ"}</td>{"\n"}<td>{"3次ベジェ"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td>{"由来"}</td>{"\n"}<td>{"Apple / Microsoft"}</td>{"\n"}<td>{"Adobe（PostScript）"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td>{"向いている用途"}</td>{"\n"}<td>{"画面表示、ヒンティング重視"}</td>{"\n"}<td>{"印刷・DTP、データ量の効率"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td>{"識別"}</td>{"\n"}<td>{"TrueType系の識別子"}</td>{"\n"}<td><code>{"OTTO"}</code>{" 系の識別子"}</td>{"\n"}</tr>{"\n"}</tbody>{"\n"}</table></div>
<div className="callout callout-new">{"\n"}<p>{"🆕 "}<strong>{"第5版"}</strong>{"では、"}<code>{"glyf"}</code>{"\n側でも"}<strong>{"3次ベジェ曲線"}</strong>{"を扱えるようにする拡張が入りました（Step\n7）。"}</p>{"\n"}</div>
<h3 id="6-2-レイアウト機能off-layout">{"6-2. レイアウト機能（OFF\nLayout）"}</h3>
<p>{"規格は、フォント制作者が国際的・高度な組版を設計できるよう、"}<strong>{"グリフ置換・グリフ位置調整・ベースライン情報"}</strong>{"などを持つレイアウトテーブルを定義しています。"}</p>
<div className="table-scroll"><table>{"\n"}<thead>{"\n"}<tr className="header">{"\n"}<th>{"テーブル"}</th>{"\n"}<th>{"役割"}</th>{"\n"}<th>{"例"}</th>{"\n"}</tr>{"\n"}</thead>{"\n"}<tbody>{"\n"}<tr className="odd">{"\n"}<td><code>{"GSUB"}</code></td>{"\n"}<td>{"グリフ置換"}</td>{"\n"}<td>{"合字、異体字、縦書き用字形"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td><code>{"GPOS"}</code></td>{"\n"}<td>{"グリフ位置調整"}</td>{"\n"}<td>{"カーニング、アクセント位置"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td><code>{"GDEF"}</code></td>{"\n"}<td>{"グリフ定義"}</td>{"\n"}<td>{"グリフの分類、合字のキャレット位置"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td><code>{"BASE"}</code></td>{"\n"}<td>{"ベースライン"}</td>{"\n"}<td>{"欧文・和文の混植時の基準線"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td><code>{"JSTF"}</code></td>{"\n"}<td>{"両端揃え"}</td>{"\n"}<td>{"行末調整の情報"}</td>{"\n"}</tr>{"\n"}</tbody>{"\n"}</table></div>
<div className="callout callout-note">{"\n"}<p>{"日本語組版では、縦書き用の機能（"}<code>{"vert"}</code>{"\nなど）や、約物の幅調整（"}<code>{"chws"}</code>{" 機能が Amd 1\nで追加）が重要になります。"}</p>{"\n"}</div>
<h3 id="6-3-カラーフォント">{"6-3. カラーフォント"}</h3>
<div className="mermaid-diagram" id="mmd-6" role="img"><Mermaid chart={DIAGRAMS["mmd-6"]!} /></div>
<div className="callout callout-note">{"\n"}<p>{"Amd 1:2020 では、SVGテーブルは TrueType・CFF・CFF2\nのいずれのアウトラインを持つフォントでも使え、SVG文書はXML定義に準拠しなければならない、と整理されています。"}</p>{"\n"}</div>
<h3 id="6-4-バリアブルフォント">{"6-4. バリアブルフォント"}</h3>
<p>{"1つのフォントファイルの中に"}<strong>{"太さ・幅などの連続的な変化"}</strong>{"（軸）を持たせる仕組みです。"}</p>
<div className="table-scroll"><table>{"\n"}<thead>{"\n"}<tr className="header">{"\n"}<th>{"テーブル"}</th>{"\n"}<th>{"役割"}</th>{"\n"}</tr>{"\n"}</thead>{"\n"}<tbody>{"\n"}<tr className="odd">{"\n"}<td><code>{"fvar"}</code></td>{"\n"}<td>{"軸の定義（太さ、幅など）"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td><code>{"gvar"}</code></td>{"\n"}<td>{"TrueTypeアウトラインの変化データ"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td><code>{"CFF2"}</code></td>{"\n"}<td>{"変化に対応したCFF"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td><code>{"avar"}</code>{" / "}<code>{"cvar"}</code>{" / "}<code>{"HVAR"}</code>{" /\n"}<code>{"MVAR"}</code>{" / "}<code>{"VVAR"}</code></td>{"\n"}<td>{"軸の補正、メトリクスの変化"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td><code>{"STAT"}</code></td>{"\n"}<td>{"スタイル属性"}</td>{"\n"}</tr>{"\n"}</tbody>{"\n"}</table></div>
<div className="callout callout-note">{"\n"}<p>{"第4版（2019）の規格本文に「OFF Font\nvariations」の節があり、この仕組みが標準として整理されています。"}</p>{"\n"}</div>
</>; }
