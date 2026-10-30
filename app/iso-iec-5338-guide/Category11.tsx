import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_9 } from './diagrams';
export default function Category11() { return <>
<h2 id="step-10-現場への導入手順と注意点">{"Step 10. 現場への導入手順と注意点"}</h2>

<h3 id="10-1-導入のステップ">{"10-1. 導入のステップ"}</h3>

<div className="mermaid-diagram" id="diagram-10" role="img"><Mermaid chart={DIAGRAM_9} /></div>

<h3 id="10-2-実務で整備したい項目チェックリスト">{"10-2. 実務で整備したい項目（チェックリスト）"}</h3>

<p>{"専門家の解説（SIG、DeepInspect など）を参考に整理したものです。"}<strong>{"規格の要求事項そのものではなく、実装の目安"}</strong>{"として使ってください。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"区分"}</th><th>{"確認項目"}</th></tr></thead><tbody><tr className="odd"><td>{"システム定義"}</td><td>{"AIシステムの境界、目的、構成要素、データソース、環境を記録しているか"}</td></tr><tr className="even"><td>{"要件"}</td><td>{"テスト可能な要件になっているか。モデル要件は定義されているか"}</td></tr><tr className="odd"><td>{"データ"}</td><td>{"データの出所・版・品質を管理しているか"}</td></tr><tr className="even"><td>{"検証"}</td><td>{"展開前の検証計画と合格基準があるか"}</td></tr><tr className="odd"><td>{"展開"}</td><td>{"承認された"}<strong>{"リリース記録"}</strong>{"があるか"}</td></tr><tr className="even"><td>{"運用"}</td><td>{"継続的検証のスケジュールと閾値（しきい値）があるか"}</td></tr><tr className="odd"><td>{"是正"}</td><td>{"検証失敗時の是正処置の記録があるか"}</td></tr><tr className="even"><td>{"人材"}</td><td>{"データサイエンティスト等の役割と力量が定義されているか"}</td></tr><tr className="odd"><td>{"調達"}</td><td>{"外部モデル・データ・サービスの供給者を管理しているか"}</td></tr></tbody></table></div>

<h3 id="10-3-よくある誤解">{"10-3. よくある誤解"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"誤解"}</th><th>{"実際"}</th></tr></thead><tbody><tr className="odd"><td>{"5338 を満たせば AI の品質が保証される"}</td><td>{"プロセスの枠組みであり、製品の性能・安全性を直接保証しない"}</td></tr><tr className="even"><td>{"5338 の認証を受けられる"}</td><td>{"5338 は認証規格ではない（認証可能なAI規格は 42001 側）"}</td></tr><tr className="odd"><td>{"特定の開発手法（ウォーターフォール等）が必須"}</td><td>{"特定のライフサイクルは規定されていない"}</td></tr><tr className="even"><td>{"MLだけが対象"}</td><td><strong>{"ヒューリスティック（知識ベース）システム"}</strong>{"も対象"}</td></tr><tr className="odd"><td>{"展開したら終わり"}</td><td><strong>{"継続的検証"}</strong>{"が AI 固有の重要プロセス"}</td></tr><tr className="even"><td>{"すべてを新規に作る必要がある"}</td><td>{"既存の 12207 / 15288 準拠プロセスを"}<strong>{"拡張"}</strong>{"して使う"}</td></tr></tbody></table></div>

<h3 id="10-4-適合性conformanceについて">{"10-4. 適合性（Conformance）について"}</h3>

<p>{"規格は第5.4.3項で適合性の考え方を定めています。実際に「適合」を主張する場合は、"}<strong>{"どのプロセスを、どの範囲で採用（テーラリング）したか"}</strong>{"を文書化することが重要です。詳細な適合基準は正式な規格本文で確認してください。"}</p>

<hr />

</>; }
