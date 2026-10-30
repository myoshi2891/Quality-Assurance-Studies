import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_3 } from './diagrams';
export default function Category5() { return <>
<h2 id="step-4-3種類のプロセスgeneric--modified--ai-specific">{"Step 4. 3種類のプロセス：Generic / Modified / AI-specific"}</h2>

<p>{"5338 のプロセスは、"}<strong>{"12207/15288 との関係"}</strong>{"で次の3種類に分類されます。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"種類"}</th><th>{"意味"}</th><th>{"初学者向けのたとえ"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"Generic（汎用）"}</strong></td><td>{"15288/12207 と"}<strong>{"同一"}</strong>{"のプロセス"}</td><td>{"既存のレシピをそのまま使う"}</td></tr><tr className="even"><td><strong>{"Modified（修正）"}</strong></td><td>{"15288/12207 の要素を"}<strong>{"追加・変更・削除"}</strong>{"したもの。各節に「AI-specific particularities（AI特有の留意点）」の小節がある"}</td><td>{"既存のレシピに AI 用の注意書きを足す"}</td></tr><tr className="odd"><td><strong>{"AI-specific（AI固有）"}</strong></td><td>{"15288/12207 に直接対応するものがない、AI 特有のプロセス"}</td><td>{"新しいレシピを追加する"}</td></tr></tbody></table></div>

<div className="mermaid-diagram" id="diagram-4" role="img" aria-label="15288・12207のプロセスをGeneric・Modified・AI-specificの3種類に分類する関係図"><Mermaid chart={DIAGRAM_3} /></div>

<h3 id="4-1-この設計の意味">{"4-1. この設計の意味"}</h3>

<p>{"Rob van der Veer 氏の解説によれば、5338 は 12207 に沿ったソフトウェアライフサイクルの全プロセスについて、"}<strong>{"AI特有の「注意点（AI particularities）」を示す"}</strong>{"構成です。12207 を使っていない組織でも、"}<strong>{"AIのための注意点チェックリスト"}</strong>{"として使えるとも説明されています。"}</p>

<hr />

</>; }
