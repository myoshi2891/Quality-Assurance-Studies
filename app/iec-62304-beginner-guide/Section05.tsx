import React from 'react';
import Diagram from './Diagram';
export default function Section05() { return <><h2 id="sec-8">{"5. 版の歴史と現在の状況"}</h2>

<Diagram id="mmd-2" />

<div className="table-scroll"><table><thead><tr className="header"><th>{"版"}</th><th>{"年"}</th><th>{"位置づけ"}</th></tr></thead><tbody><tr className="odd"><td>{"IEC 62304:2006"}</td><td>{"2006"}</td><td>{"原典（Edition 1.0）。ISOのページ（今回の参照URL）はこの版"}</td></tr><tr className="even"><td>{"Amd 1:2015"}</td><td>{"2015"}</td><td>{" 追加改訂。"}<strong>{"安全クラス判定の考え方やレガシーソフトウェアの扱い"}</strong>{"などが整理された "}</td></tr><tr className="odd"><td>{"統合版 2006+A1:2015"}</td><td>{"2015"}</td><td>{"実務で使う版。本文と改訂を一体化したもの"}</td></tr><tr className="even"><td>{"Edition 2"}</td><td>{"未発行（2026年10月時点）"}</td><td>{"第20章参照"}</td></tr></tbody></table></div>

<aside className="callout callout-tip"><div className="callout-icon">{"💡"}</div><div className="callout-body"><p><strong>{"実務のポイント"}</strong>{"：ISOの該当ページに掲載されているのは2006年の本体と、別ID（Amd 1）の2つです。"}<strong>{"実務ではAmd 1を含めた統合版"}</strong>{"を入手して使うのが基本です。購入前に「統合版（CSV 付き版など）」の表記を確認してください。 "}</p></div></aside>
</>; }
