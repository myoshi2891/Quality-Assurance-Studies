import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section11() { return <>
<h2 id="roadmap">{"学習ロードマップ"}</h2>
<div className="mermaid-diagram" id="mmd-10" role="img"><Mermaid chart={DIAGRAMS["mmd-10"]!} /></div>
<div className="table-scroll"><table>{"\n"}<thead>{"\n"}<tr className="header">{"\n"}<th>{"段階"}</th>{"\n"}<th>{"目標"}</th>{"\n"}<th>{"おすすめの題材"}</th>{"\n"}</tr>{"\n"}</thead>{"\n"}<tbody>{"\n"}<tr className="odd">{"\n"}<td>{"基礎"}</td>{"\n"}<td>{"グリフとGIDの違いを説明できる"}</td>{"\n"}<td>{"手元のフォントを "}<code>{"ttx"}</code>{" で開く"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td>{"構造"}</td>{"\n"}<td>{"必須テーブルを言える"}</td>{"\n"}<td>{"Microsoft の OpenType 仕様の各テーブルの章"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td>{"描画の流れ"}</td>{"\n"}<td>{"cmap→GSUB→GPOS→描画の順を説明できる"}</td>{"\n"}<td>{"HarfBuzz の解説"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td>{"発展"}</td>{"\n"}<td>{"バリアブルとカラーの違いを説明できる"}</td>{"\n"}<td>{"仕様書の該当章"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td>{"最新"}</td>{"\n"}<td>{"64Kの壁と24ビット化の仕組みを説明できる"}</td>{"\n"}<td>{"本稿 Step 7、実装者のPR"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td>{"実践"}</td>{"\n"}<td>{"境界値のテストフォントを作れる"}</td>{"\n"}<td>{"fontTools の FontBuilder"}</td>{"\n"}</tr>{"\n"}</tbody>{"\n"}</table></div>
</>; }
