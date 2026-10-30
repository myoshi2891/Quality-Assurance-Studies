import React from 'react';
import Diagram from './Diagram';
export default function Section02() { return <>
<h2 id="step-2規格ファミリーの中での位置づけ">{"\n                    Step 2：規格ファミリーの中での位置づけ"}<a aria-label="リンク" className="anchor" href="#step-2規格ファミリーの中での位置づけ">{"#"}</a></h2>

<p>{"\n                    ISO 27799 は単独では動きません。"}<strong>{"ISO/IEC 27001（ISMS）と ISO/IEC 27002（管理策集）の"}</strong>{"「"}<strong>{"医療版アドオン"}</strong>{"」として使います。また、規格本文は\n                    "}<strong>{"ISO 81001-1"}</strong>{"（ヘルスソフトウェア／ヘルスITシステムの安全性・有効性・セキュリティの原則と概念）を規範的参照にしています。\n                "}</p>

<Diagram id="mermaid-diagram-1" />

<h3 id="3つの規格の役割分担">{"\n                    3つの規格の役割分担"}<a aria-label="リンク" className="anchor" href="#3つの規格の役割分担">{"#"}</a></h3>

<div className="table-scroll" tabIndex={0}><table><thead><tr className="header"><th>{"規格"}</th><th>{"一言でいうと"}</th><th>{"学ぶタイミング"}</th></tr></thead><tbody><tr className="odd"><td>{"ISO/IEC 27001"}</td><td>{"\n                                    ISMSを"}<strong>{"作って回す"}</strong>{"ための要求事項（認証の対象）\n                                "}</td><td>{"最初"}</td></tr><tr className="even"><td>{"ISO/IEC 27002"}</td><td>{"具体的な"}<strong>{"管理策のカタログ"}</strong>{"と実施ガイダンス"}</td><td>{"次"}</td></tr><tr className="odd"><td>{"ISO 27799"}</td><td>{"\n                                    27002を"}<strong>{"医療向けに補強"}</strong>{"した管理策とガイダンス\n                                "}</td><td>{"その次"}</td></tr></tbody></table></div>

<hr  />

</>; }
