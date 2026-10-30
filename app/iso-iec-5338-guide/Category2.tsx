import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_1 } from './diagrams';
export default function Category2() { return <>
<h2 id="step-1-規格の全体像をつかむ">{"Step 1. 規格の全体像をつかむ"}</h2>

<h3 id="1-1-一言でいうと">{"1-1. 一言でいうと"}</h3>

<p><strong>{"ISO/IEC 5338:2023 は、「AIシステムを企画してから廃棄するまで」の工程（プロセス）を、既存のシステム・ソフトウェア工学の標準に AI 特有の観点を足して整理した国際規格"}</strong>{"です。"}</p>

<h3 id="1-2-基本情報iso公式ページより">{"1-2. 基本情報（ISO公式ページより）"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"規格番号"}</td><td>{"ISO/IEC 5338:2023"}</td></tr><tr className="even"><td>{"タイトル"}</td><td>{"AI system life cycle processes（AIシステムライフサイクルプロセス）"}</td></tr><tr className="odd"><td>{"発行"}</td><td>{"2023年12月（第1版）"}</td></tr><tr className="even"><td>{"ステータス"}</td><td>{"Published（ステージ 60.60：国際規格として発行済み）"}</td></tr><tr className="odd"><td>{"担当委員会"}</td><td>{"ISO/IEC JTC 1/SC 42（Artificial intelligence）"}</td></tr><tr className="even"><td>{"ページ数"}</td><td>{"39ページ"}</td></tr><tr className="odd"><td>{"ICS"}</td><td>{"35.020（情報技術一般）"}</td></tr><tr className="even"><td>{"言語"}</td><td>{"英語のみ"}</td></tr><tr className="odd"><td>{"価格（公式ストア）"}</td><td>{"CHF 181（PDF + ePub / 変動の可能性あり）"}</td></tr></tbody></table></div>

<h3 id="1-3-対象範囲scopeの要点">{"1-3. 対象範囲（Scope）の要点"}</h3>

<ul><li><strong>{"機械学習（ML）システム"}</strong>{"と"}<strong>{"ヒューリスティック（ルール・知識ベース）システム"}</strong>{"の両方が対象"}</li><li>{"土台となる規格は "}<strong>{"ISO/IEC/IEEE 15288（システム）"}</strong>{" と "}<strong>{"ISO/IEC/IEEE 12207（ソフトウェア）"}</strong></li><li>{"AI固有のプロセスは "}<strong>{"ISO/IEC 22989"}</strong>{" と "}<strong>{"ISO/IEC 23053"}</strong>{" から取り入れている"}</li><li>{"AIシステムの中に「普通のソフトウェア」部分がある場合、その部分には 12207 / 15288 をそのまま使える"}</li><li>{"組織内・プロジェクト内で、AIシステムを"}<strong>{"開発するとき"}</strong>{"にも"}<strong>{"調達するとき"}</strong>{"にも使える"}</li></ul>

<h3 id="1-4-プロセス規格であることが重要">{"1-4. 「プロセス規格」であることが重要"}</h3>

<p>{"この規格は「このAIモデルは精度○○%以上であること」のような"}<strong>{"成果物の品質基準を決める規格ではありません"}</strong>{"。 「どんな活動を、どんな順序・観点で行えば、AIシステムを適切に作り・運用できるか」という"}<strong>{"活動の枠組み"}</strong>{"を提供します。"}</p>

<div className="mermaid-diagram" id="diagram-2" role="img" aria-label="ISO/IEC 5338がプロセス規格であり製品品質規格やマネジメントシステム規格ではないことを示す判断図"><Mermaid chart={DIAGRAM_1} /></div>

<hr />

</>; }
