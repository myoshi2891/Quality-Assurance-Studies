import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section1() { return <>
<h2 id="step-1">{"Step 1：基本情報を押さえる"}</h2>
<h3 id="1-1-規格のプロフィール">{"1-1. 規格のプロフィール"}</h3>
<div className="table-scroll"><table>{"\n"}<thead>{"\n"}<tr className="header">{"\n"}<th>{"項目"}</th>{"\n"}<th>{"内容"}</th>{"\n"}</tr>{"\n"}</thead>{"\n"}<tbody>{"\n"}<tr className="odd">{"\n"}<td>{"規格番号"}</td>{"\n"}<td>{"ISO/IEC 14496-22:2026"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td>{"正式名称"}</td>{"\n"}<td>{"Information technology — Coding of audio-visual objects — Part 22:\nOpen font format"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td>{"通称"}</td>{"\n"}<td>{"MPEG-4 Part 22 / Open Font Format（OFF）"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td>{"版"}</td>{"\n"}<td>{"第5版（Edition 5）"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td>{"発行年月"}</td>{"\n"}<td>{"2026年7月"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td>{"ステージ"}</td>{"\n"}<td>{"60.60（国際規格として発行済み）"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td>{"担当委員会"}</td>{"\n"}<td>{"ISO/IEC JTC 1/SC 29"}</td>{"\n"}</tr>{"\n"}<tr className="even">{"\n"}<td>{"ICS分類"}</td>{"\n"}<td>{"35.040.40"}</td>{"\n"}</tr>{"\n"}<tr className="odd">{"\n"}<td>{"置き換え対象"}</td>{"\n"}<td>{"ISO/IEC 14496-22:2019（および Amd 1:2020、Amd\n2:2023）は撤回済み"}</td>{"\n"}</tr>{"\n"}</tbody>{"\n"}</table></div>
<h3 id="1-2-発行までの経緯isoの公開ライフサイクル">{"1-2.\n発行までの経緯（ISOの公開ライフサイクル）"}</h3>
<div className="mermaid-diagram" id="mmd-1" role="img"><Mermaid chart={DIAGRAMS["mmd-1"]!} /></div>
<div className="callout callout-note">{"\n"}<p>{"用語："}<strong>{"DIS"}</strong>{" = Draft International\nStandard（国際規格案）、"}<strong>{"FDIS"}</strong>{" = Final Draft\nInternational\nStandard（最終国際規格案）。FDIS段階では「賛成／反対」の投票のみで、内容の修正はできません。"}</p>{"\n"}</div>
</>; }
