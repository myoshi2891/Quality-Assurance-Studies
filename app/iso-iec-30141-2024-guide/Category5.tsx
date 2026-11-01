import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_4 } from './diagrams';
export default function Category5() { return <>
<h2 id="5-step-3-規格全体の構成を地図で把握する">{"5. Step 3: 規格全体の構成を地図で把握する"}</h2>

<p>{"公開されている目次（iTeh Standardsのプレビュー）から、章構成を整理します。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"章"}</th><th>{"タイトル"}</th><th>{"役割"}</th></tr></thead><tbody><tr className="odd"><td>{"序文（Introduction）"}</td><td>{"0.1 一般／0.2 IoTについて／0.3 IoTの情報源／0.4 参照アーキテクチャの一般原則"}</td><td>{"背景と目的"}</td></tr><tr className="even"><td>{"1"}</td><td>{"適用範囲"}</td><td>{"この規格が扱う範囲"}</td></tr><tr className="odd"><td>{"2"}</td><td>{"引用規格"}</td><td><strong>{"ISO/IEC 20924"}</strong>{"（IoTとデジタルツインの用語）を引用"}</td></tr><tr className="even"><td>{"3"}</td><td>{"用語及び定義"}</td><td>{"用語はISO/IEC 20924に従う"}</td></tr><tr className="odd"><td>{"4"}</td><td>{"略語"}</td><td>{"ASD、OMD、PED、RAID、SCD などの略語"}</td></tr><tr className="even"><td>{"5"}</td><td>{"IoT RAの文脈"}</td><td>{"概要とステークホルダー・関心事"}</td></tr><tr className="odd"><td>{"6"}</td><td>{"IoT RAのビューポイントとビュー"}</td><td><strong>{"本規格の中核"}</strong></td></tr><tr className="even"><td>{"附属書A（規範）"}</td><td>{"追加のIoT構築パターン"}</td><td>{"RAMI 4.0、動的IoTシステムなど"}</td></tr><tr className="odd"><td>{"附属書B（参考）"}</td><td>{"ISO/IEC/IEEE 42010:2022の使い方の指針"}</td><td>{"アーキテクチャ記述としての整理"}</td></tr><tr className="even"><td>{"附属書C（参考）"}</td><td>{"特定の文脈でのIoTシステムの特性"}</td><td>{"共通特性、信頼性関連特性"}</td></tr></tbody></table></div>

<div className="mermaid-diagram" id="diagram-5" role="img" aria-label="図5: 序文背景と目的、1〜4章適用範囲・引用・用語・略語、5章IoT RAの文脈ステークホルダーと関心事、6章6つのビューポイントとビュー（本規格の中核）、附属書A（規範）追加の構築パターン、附属書B（参考）42010の使い方、附属書C（参考）IoTシステムの特性"><Mermaid chart={DIAGRAM_4} /></div>

<h3 id="読む順番のおすすめ">{"読む順番のおすすめ"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"目的"}</th><th>{"おすすめの順番"}</th></tr></thead><tbody><tr className="odd"><td>{"まず全体像をつかみたい"}</td><td>{"序文 → 5章 → 6.1（概要）"}</td></tr><tr className="even"><td>{"設計の考え方を知りたい"}</td><td>{"6.2（基礎）→ 6.5（機能）→ 6.7（構築）"}</td></tr><tr className="odd"><td>{"セキュリティ・信頼性を設計に入れたい"}</td><td>{"6.6（信頼性）→ 関連規格 ISO/IEC TS 30149"}</td></tr><tr className="even"><td>{"実装の型を知りたい"}</td><td>{"6.7（構築）→ 附属書A"}</td></tr></tbody></table></div>

<hr />
</>; }
