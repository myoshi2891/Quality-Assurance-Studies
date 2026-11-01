import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_5 } from './diagrams';
export default function Category6() { return <>
<h2 id="6-step-4-ステークホルダーと関心事5章">{"6. Step 4: ステークホルダーと関心事（5章）"}</h2>

<p>{"5章の Table 1 は、「"}<strong>{"誰が何を知りたいか"}</strong>{"」と「"}<strong>{"どのビューポイントが答えるか"}</strong>{"」を対応づけています。ここが規格を\"使う\"ための入口です。以下は要旨を日本語で整理したものです。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"ビューポイント"}</th><th>{"主なステークホルダー"}</th><th>{"主な関心事（要旨）"}</th></tr></thead><tbody><tr className="odd"><td>{"基礎（Foundational IoT）"}</td><td>{"アーキテクト、プロジェクト／プログラムマネージャー、標準化専門家、ドメイン専門家、事業責任者、システムオーナー"}</td><td>{"IoTとは何か。IoTシステムの本質的特性は何か。何が新しく何が違うか。あるシステムはIoTシステムといえるか。"}</td></tr><tr className="even"><td>{"ビジネス"}</td><td>{"事業責任者、システムオーナー、アーキテクト"}</td><td>{"IoTの能力をどう事業価値に変えるか。新しいビジネスモデルにどう使うか。IoTの特性は事業やオーナーにどう影響するか。"}</td></tr><tr className="odd"><td>{"利用（Usage）"}</td><td>{"システムアーキテクト、プロジェクトマネージャー"}</td><td>{"利用者（人・デジタル）はIoTシステムとどう関わるか。対象の物理的な実体とどう関わるか。"}</td></tr><tr className="even"><td>{"機能（Functional）"}</td><td>{"アーキテクト、プロジェクト／プログラムマネージャー、IoT標準化専門家、事業責任者、システムオーナー"}</td><td>{"IoTシステムに実装が必要な抽象的な機能の種類は何か。"}</td></tr><tr className="odd"><td>{"信頼性（Trustworthiness）"}</td><td>{"システムアーキテクト、セキュリティ担当、プライバシー担当、プロジェクトマネージャー、事業責任者"}</td><td>{"信頼性目標を満たすIoTシステムをどう設計するか。実装したシステムが設計目標を満たすことをどう保証するか。"}</td></tr><tr className="even"><td>{"構築（Construction）"}</td><td>{"システムアーキテクト、プロジェクトマネージャー、システム設計者"}</td><td>{"要件を満たすIoTシステム／IoT部品を作るとき、どんな設計の型が役立つか。"}</td></tr></tbody></table></div>

<h3 id="使い方の発想">{"使い方の発想"}</h3>

<p>{"「どの章から読めばいいか分からない」ときは、"}<strong>{"自分の役割と悩み"}</strong>{"から逆引きします。"}</p>

<div className="mermaid-diagram" id="diagram-6" role="img" aria-label="図6: 今の悩みは？、基礎ビュー（6.2）、ビジネスビュー（6.3）、利用ビュー（6.4）、機能ビュー（6.5）、信頼性ビュー（6.6）、構築ビュー（6.7）と附属書A"><Mermaid chart={DIAGRAM_5} /></div>

<hr />
</>; }
