import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-2規格の基本情報と位置づけ">{"STEP\n2：規格の基本情報と位置づけ"}</h2>

<h3 id="2-1-基本情報iso公式ページより">{"2-1.\n基本情報（ISO公式ページより）"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"規格番号"}</td><td>{"ISO/IEC 11179-1:2023"}</td></tr><tr className="even"><td>{"題名"}</td><td>{"Information technology — Metadata registries (MDR) — Part 1:\nFramework"}</td></tr><tr className="odd"><td>{"版"}</td><td>{"Edition 4（第4版）"}</td></tr><tr className="even"><td>{"発行"}</td><td>{"2023年1月（公式ライフサイクル上は 2023-01-16 に 60.60「International\nStandard published」）"}</td></tr><tr className="odd"><td>{"状態"}</td><td>{"Published（発行済み）"}</td></tr><tr className="even"><td>{"ページ数"}</td><td>{"34ページ"}</td></tr><tr className="odd"><td>{"担当委員会"}</td><td>{"ISO/IEC JTC 1/SC 32（Data management and interchange）"}</td></tr><tr className="even"><td>{"ICS"}</td><td>{"35.040.50"}</td></tr><tr className="odd"><td>{"旧版"}</td><td>{"ISO/IEC 11179-1:2015（Withdrawn＝廃止）"}</td></tr><tr className="even"><td>{"言語"}</td><td>{"英語"}</td></tr><tr className="odd"><td>{"SDGs"}</td><td>{"SDG 9（産業・技術革新・基盤）に貢献と表示"}</td></tr></tbody></table></div>

<h3 id="2-2-規格の目的要旨の言い換え">{"2-2.\n規格の目的（要旨の言い換え）"}</h3>

<p>{"公式の要旨を要約すると、この規格は次の2点を担います。"}</p>

<ol type="1"><li><strong>{"ISO/IEC 11179\nの各パートを理解し、互いに関連付けるための手段"}</strong>{"を提供する"}</li><li><strong>{"メタデータとメタデータレジストリを概念的に理解するための基礎"}</strong>{"となる"}</li></ol>

<p>{"加えて、"}<strong>{"JTC 1/SC 32\nの他の規格・技術仕様・技術報告書（メタデータ関連）との関係"}</strong>{"も説明します。"}</p>

<h3 id="2-3-part-1-は何を決めない規格か">{"2-3. Part 1\nは「何を決めない」規格か"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"決める（扱う）"}</th><th>{"決めない（扱わない）"}</th></tr></thead><tbody><tr className="odd"><td>{"11179全体の構成と各パートの役割の整理"}</td><td>{"具体的なテーブル設計やDBスキーマ"}</td></tr><tr className="even"><td>{"メタデータ・MDRを理解するための概念枠組み"}</td><td>{"メタデータ全般の一般論"}</td></tr><tr className="odd"><td>{"他のSC 32規格との関係の説明"}</td><td>{"データのビット/バイトレベルの物理表現"}</td></tr></tbody></table></div>

<div className="callout callout-note"><span className="callout-icon">{"ℹ️"}</span><div className="callout-body"><p>{"※ 最後の行（物理表現を扱わない）は、Part 1 の姉妹規格である Part 31\nの適用範囲の記述から読み取れる方針です。"}</p></div></div>

<h3 id="2-4-part-1-の立ち位置">{"2-4. Part 1 の立ち位置"}</h3>

<Diagram id="diagram-3" />

</>; }
