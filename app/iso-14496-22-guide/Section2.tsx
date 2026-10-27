import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section2() { return <>
<h2 id="step-2">{"Step\n2：OFFとOpenTypeの関係を理解する"}</h2>
<h3 id="2-1-3つの名前を整理する">{"2-1. 3つの名前を整理する"}</h3>
<div className="table-scroll"><table>{"\n"}<thead>{"\n"}<tr className="header">{"\n"}<th>{"名前"}</th>{"\n"}<th>{"何者か"}</th>{"\n"}<th>{"管理者"}</th>{"\n"}</tr>{"\n"}</thead>{"\n"}<tbody>{"\n"}<tr className="odd">{"\n"}<td><strong>{"OpenType"}</strong></td>{"\n"}<td>{"業界仕様。実際のフォント制作で広く使われる名称"}</td>{"\n"}<td>{"Microsoft の仕様書サイト等で公開・更新"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td><strong>{"OFF（Open Font Format）"}</strong></td>{"\n"}<td>{"OpenTypeとほぼ同内容の"}<strong>{"ISO国際規格"}</strong></td>{"\n"}<td>{"ISO/IEC JTC 1/SC 29（MPEG）"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td><strong>{"WOFF / WOFF2"}</strong></td>{"\n"}<td>{"OpenType/TrueTypeフォントを"}<strong>{"Web配信用に圧縮"}</strong>{"したラッパー形式"}</td>{"\n"}<td>{"W3C"}</td>{"\n"}</tr>{"\n"}</tbody>{"\n"}</table></div>
<div className="mermaid-diagram" id="mmd-2" role="img"><Mermaid chart={DIAGRAMS["mmd-2"]!} /></div>
<h3 id="2-2-同期の仕組み">{"2-2. 同期の仕組み"}</h3>
<ul>{"\n"}<li>{"2007年の初版は、技術的に "}<strong>{"OpenType 1.4"}</strong>{"\n仕様と同等でした。"}</li>{"\n"}<li>{"2009年の第2版は、OpenType仕様と「技術的に同等」と宣言され、以後\n"}<strong>{"OFFとOpenTypeは同期して維持"}</strong>{"されています。"}</li>{"\n"}<li>{"Microsoft の OpenType 1.9.1\n仕様ページには、「第5版の予備作業草案の改訂を取り込んでいる」と明記されています。つまり、"}<strong>{"OFF第5版の審議中の草案が、OpenType\n1.9.1 に取り込まれた"}</strong>{"ことが確認できます。"}</li>{"\n"}</ul>
<div className="callout callout-key">{"\n"}<p>{"🔑 "}<strong>{"初学者向けの覚え方"}</strong>{"：OpenType =\n「現場で使う名前」、OFF =\n「国際標準として文書化された名前」。中身はほぼ同じ。"}</p>{"\n"}</div>
</>; }
