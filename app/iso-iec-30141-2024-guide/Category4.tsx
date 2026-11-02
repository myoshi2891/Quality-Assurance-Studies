import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_3 } from './diagrams';
export default function Category4() { return <>
<h2 id="4-step-2-第2版2024で何が変わったか">{" 4. Step 2: 第2版（2024）で何が変わったか "}</h2>

<p>{" ISO公式ページには、第1版（2018）から次の"}<strong>{"3つの大きな技術的変更"}</strong>{"が明記されています。 "}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"変更点"}</th><th>{"初学者向けの意味"}</th></tr></thead><tbody><tr className="odd"><td>{"① ISO/IEC/IEEE 42010:2022 への準拠"}</td><td>{" アーキテクチャ記述の国際ルールに沿った構造になり、他の参照アーキテクチャと整合しやすくなった "}</td></tr><tr className="even"><td>{"② 使いやすさの向上"}</td><td>{" 利用者（設計者）が自分の関心事から必要な箇所に辿り着きやすくなった "}</td></tr><tr className="odd"><td>{"③ 実装パターンのサポート"}</td><td><strong>{"構築ビュー"}</strong>{"が加わり、IoT部品やシステムの作り方の型（パターン）が示された "}</td></tr></tbody></table></div>

<div className="mermaid-diagram" id="diagram-4" role="img" aria-label="図4: 第1版（2018年8月）では、概念モデル＋参照モデルから、機能ビュー、システム（配置）ビュー、ネットワークビュー、利用ビューへ分かれる。第2版（2024年8月）では、基礎（Foundational）から、ビジネス、利用、機能、信頼性（Trustworthiness）、構築（Construction）の各ビューへ分かれる。第1版は技術的改訂により第2版へ置き換えられた。"><Mermaid chart={DIAGRAM_3} /></div>

<div className="callout"><p><strong>{"読み取りの注意"}</strong></p><ul><li>{" 第1版の抄録は、情報源によって「4つのビュー（機能・システム・ネットワーク・利用）」「5つのビュー」と書き方が揺れています。ここでは大きな傾向として図示しています。 "}</li><li>{" 第2版は、ISOの公式目次で "}<strong>{"6つのビューポイントとそれに対応するビュー"}</strong>{" が確認できます（次章で詳説）。 "}</li><li>{" 第1版にあった「ネットワークビュー」「システム配置ビュー」は、第2版では独立した章立てとしては現れません。第2版では、構築ビュー側のパターン（附属書AのEnterprise networking pattern など）として扱われている形跡が目次から読み取れますが、"}<strong>{"正確な対応関係は正規版で確認してください"}</strong>{"。 "}</li></ul></div>

<hr />
</>; }
