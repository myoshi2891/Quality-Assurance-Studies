import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_7, DIAGRAM_8 } from './diagrams';
export default function Category8() { return <>
<h2 id="8-step-6-構築ビューとパターンを深掘りする">{"8. Step 6: 構築ビューとパターンを深掘りする"}</h2>

<h3 id="81-構築ビューの位置づけ">{"8.1 構築ビューの位置づけ"}</h3>

<p>{"規格の説明によれば、構築ビューは「"}<strong>{"実装アーキテクチャの観点"}</strong>{"から、IoT参照アーキテクチャを記述する」ものです。ビューは"}<strong>{"パターン"}</strong>{"として示されます。"}</p>

<p>{"規格の概要に挙がっているパターンの例は次のとおりです。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"パターン"}</th><th>{"規格内の位置"}</th><th>{"概要（目次・概要から読み取れる範囲）"}</th></tr></thead><tbody><tr className="odd"><td>{"IoTコンポーネントパターン"}</td><td>{"6.7.3"}</td><td>{"IoT部品が持つ能力（Capability）を整理するパターン。Figure 8、Table 9〜11"}</td></tr><tr className="even"><td>{"IoTシステムパターン"}</td><td>{"6.7（Table 12）"}</td><td>{"IoTシステムを構成する型"}</td></tr><tr className="odd"><td>{"RAMI 4.0 パターン"}</td><td>{"附属書A.2"}</td><td>{"ドイツ発の産業向け参照アーキテクチャ（Reference Architecture Model Industrie 4.0）との対応づけ"}</td></tr><tr className="even"><td>{"動的IoTシステムパターン"}</td><td>{"附属書A.3"}</td><td>{"動的サービス合成（DSC：Dynamic Service Composition）を扱う型。メッセージフローと家庭用の空気清浄サービスの例が図示されている"}</td></tr><tr className="odd"><td>{"IoTエンタープライズシステムパターン"}</td><td>{"附属書A.4"}</td><td>{"企業内のIoTシステム配置の型"}</td></tr><tr className="even"><td>{"IoTエンタープライズネットワーキングパターン"}</td><td>{"附属書A.5"}</td><td>{"ネットワーク構成の型"}</td></tr><tr className="odd"><td>{"IoTエンタープライズ利用パターン"}</td><td>{"附属書A.6"}</td><td>{"役割（IoTサービス提供者、サービス開発者など）と活動の型"}</td></tr></tbody></table></div>

<h3 id="82-構築ビューの考え方">{"8.2 構築ビューの考え方"}</h3>

<p>{"規格のプレビューによれば、構築ビューは、"}<strong>{"ビジネス、利用、機能、信頼性の各ビューポイントの結果を踏まえて"}</strong>{"IoTアーキテクチャを構築する、という立て付けです。"}</p>

<div className="mermaid-diagram" id="diagram-8" role="img" aria-label="図8: ビジネスビュー、構築ビュー（パターンで実装の型にする）、利用ビュー、機能ビュー、信頼性ビュー、IoT部品・IoTシステムの実装アーキテクチャ"><Mermaid chart={DIAGRAM_7} /></div>

<h3 id="83-iotコンポーネントパターンを理解する">{"8.3 IoTコンポーネントパターンを理解する"}</h3>

<p>{"目次から、次の構成が読み取れます。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"図表"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"Figure 8"}</td><td>{"IoTコンポーネントの能力（Capabilities of an IoT component）"}</td></tr><tr className="even"><td>{"Table 9"}</td><td>{"IoTコンポーネントパターン"}</td></tr><tr className="odd"><td>{"Table 10"}</td><td>{"IoTコンポーネントの能力に関する追加情報"}</td></tr><tr className="even"><td>{"Table 11"}</td><td>{"能力の主要な変換（Key capability transformations）"}</td></tr><tr className="odd"><td>{"Table 12"}</td><td>{"IoTシステムパターン"}</td></tr></tbody></table></div>

<p><strong>{"初学者向けの捉え方"}</strong>{": 「センサー」「ゲートウェイ」「クラウドサービス」など、呼び名の違う部品を、"}<strong>{"どんな能力を持つか"}</strong>{"という共通の言葉で整理するための仕組みです。設計レビューで「この部品の役割は何か」を揃えるときに役立ちます。"}</p>

<h3 id="84-ステップ別-パターンを使った設計の流れ解説者による実践提案">{"8.4 ステップ別: パターンを使った設計の流れ（解説者による実践提案）"}</h3>

<div className="callout"><p>{"以下は規格本文の手順そのものではなく、"}<strong>{"構築ビューの考え方を実務に置き換えた学習用の提案"}</strong>{"です。"}</p></div>

<div className="mermaid-diagram" id="diagram-9" role="img" aria-label="図9: STEP1：目的と関心事を整理する（5章のTable 1で誰が何を知りたいか確認）、STEP2：IoTシステムかを確認する（基礎ビューで特性を照合）、STEP3：必要な機能を洗い出す（機能ビューの抽象機能クラス）、STEP4：利用者と物理対象を整理する（利用ビュー）、STEP5：信頼性目標を決める（信頼性ビューとISO/IEC TS 30149）、STEP6：パターンを選び当てはめる（構築ビューと附属書A）、STEP7：自分の領域向けに具体化する（DSRA／ソリューションアーキテクチャ）"><Mermaid chart={DIAGRAM_8} /></div>

<hr />
</>; }
