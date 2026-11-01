import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_10 } from './diagrams';
export default function Category11() { return <>
<h2 id="11-step-9-実務での使い方設計者開発者qa別">{"11. Step 9: 実務での使い方（設計者・開発者・QA別）"}</h2>

<h3 id="111-役割別の活用ポイント">{"11.1 役割別の活用ポイント"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"役割"}</th><th>{"使いどころ"}</th><th>{"具体例"}</th></tr></thead><tbody><tr className="odd"><td>{"アーキテクト"}</td><td>{"設計の語彙と構造を揃える"}</td><td>{"設計書の章立てを、ビューポイント単位（利用・機能・信頼性・構築）に合わせる"}</td></tr><tr className="even"><td>{"開発者"}</td><td>{"部品の責務を揃える"}</td><td>{"IoTコンポーネントパターンで、デバイスやゲートウェイの能力を言語化する"}</td></tr><tr className="odd"><td>{"セキュリティ担当"}</td><td>{"信頼性を設計に組み込む"}</td><td>{"信頼性ビューとISO/IEC TS 30149で、設計目標と保証の方法を整理する"}</td></tr><tr className="even"><td>{"QAエンジニア"}</td><td>{"テスト観点の網羅性確認"}</td><td>{"附属書Cの特性、機能ビューの機能分類を、テスト観点の洗い出しに使う"}</td></tr><tr className="odd"><td>{"プロジェクトマネージャー"}</td><td>{"ステークホルダーの関心事整理"}</td><td>{"5章のTable 1を、ステークホルダー分析の雛形にする"}</td></tr><tr className="even"><td>{"標準化・調達担当"}</td><td>{"他の標準との整合確認"}</td><td>{"DSRAを作る際に、30141を規範的に参照する"}</td></tr></tbody></table></div>

<h3 id="112-qaエンジニア向け-観点の洗い出しフロー解説者による実践提案">{"11.2 QAエンジニア向け: 観点の洗い出しフロー（解説者による実践提案）"}</h3>

<div className="mermaid-diagram" id="diagram-11" role="img" aria-label="図11: QA1：対象がIoTシステムか確認（基礎ビューの特性）、QA2：関心事ごとにテスト観点を分ける（利用／機能／信頼性）、QA3：非機能特性を観点に変換（附属書Cの特性）、QA4：信頼性目標を検証可能にする（ISO/IEC TS 30149の原則）、QA5：パターンの能力ごとに結合・統合テストを設計（構築ビュー）"><Mermaid chart={DIAGRAM_10} /></div>

<h3 id="113-適合性認証についての注意">{"11.3 適合性（認証）についての注意"}</h3>

<p>{"ISO/IEC 30141 は"}<strong>{"参照アーキテクチャ"}</strong>{"であり、「この規格に認証される」という性質の規格ではありません。箇条5.1（IoT RA Context）では、DSRAが"}<strong>{"本規格の一部への適合を規定できる"}</strong>{"とされています。使い方は「設計の参考・規範的参照」です。"}</p>

<div className="callout"><p>{"注意: 本規格には、第1版の時点で「適合性評価の指針は別途作成され得る」という注記がありました。第2版の適合性の扱いは、正規版で確認してください。"}</p></div>

<hr />
</>; }
