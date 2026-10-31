import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_4 } from './diagrams';
export default function Category7() { return <>
<h2 id="step-6-第6章4つのプロセスグループを理解する">{"Step 6. 第6章：4つのプロセスグループを理解する"}</h2>

<p>{"第6章は、プロセスを"}<strong>{"4つのグループ"}</strong>{"に分けて説明します。全体で "}<strong>{"合計 33 プロセス"}</strong>{"（2 + 6 + 8 + 17）が定義されています。"}</p>

<div className="mermaid-diagram" id="diagram-5" role="img" aria-label="第6章のAIシステムライフサイクルプロセスを4つのプロセスグループに分けた構成図"><Mermaid chart={DIAGRAM_4} /></div>

<h3 id="6-1-61agreement-processes合意プロセス">{"6-1. 【6.1】Agreement processes（合意プロセス）"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"番号"}</th><th>{"プロセス"}</th><th>{"役割"}</th></tr></thead><tbody><tr className="odd"><td>{"6.1.1"}</td><td>{"Acquisition（取得）"}</td><td>{"AIシステム・データ・モデルなどを"}<strong>{"調達する側"}</strong>{"の活動"}</td></tr><tr className="even"><td>{"6.1.2"}</td><td>{"Supply（供給）"}</td><td>{"取得者に対して"}<strong>{"提供する側"}</strong>{"の活動"}</td></tr></tbody></table></div>

<blockquote className="callout-practice"><p>{"💡 規格は、AIライフサイクルの一部（データやMLモデル、コードなど）が"}<strong>{"別の組織"}</strong>{"によって所有・管理される可能性を前提にし、サプライチェーン上のリスクにも配慮したプロセスにしています。"}</p></blockquote>

<h3 id="6-2-62organizational-project-enabling-processes組織のプロジェクト実現プロセス">{"6-2. 【6.2】Organizational project-enabling processes（組織のプロジェクト実現プロセス）"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"番号"}</th><th>{"プロセス"}</th><th>{"初学者向けの要点"}</th></tr></thead><tbody><tr className="odd"><td>{"6.2.1"}</td><td>{"Life cycle model management"}</td><td>{"組織が使うライフサイクルモデルを定め、維持する"}</td></tr><tr className="even"><td>{"6.2.2"}</td><td>{"Infrastructure management"}</td><td>{"開発・学習・運用の基盤（オンプレ/クラウド/ハイブリッド）を整える"}</td></tr><tr className="odd"><td>{"6.2.3"}</td><td>{"Portfolio management"}</td><td>{"複数のAI案件への投資・優先順位を管理する"}</td></tr><tr className="even"><td>{"6.2.4"}</td><td>{"Human resource management"}</td><td>{"データサイエンティストなど AI 特有の人材・スキルを確保する"}</td></tr><tr className="odd"><td>{"6.2.5"}</td><td>{"Quality management"}</td><td>{"組織としての品質方針・目標を管理する"}</td></tr><tr className="even"><td>{"6.2.6"}</td><td>{"Knowledge management"}</td><td>{"ヒューリスティックでも ML でも重要な"}<strong>{"知識の蓄積・共有"}</strong></td></tr></tbody></table></div>

<h3 id="6-3-63technical-management-processes技術マネジメントプロセス">{"6-3. 【6.3】Technical management processes（技術マネジメントプロセス）"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"番号"}</th><th>{"プロセス"}</th><th>{"初学者向けの要点"}</th></tr></thead><tbody><tr className="odd"><td>{"6.3.1"}</td><td>{"Project planning"}</td><td>{"計画に"}<strong>{"継続的検証の準備"}</strong>{"など AI 特有事項を織り込む"}</td></tr><tr className="even"><td>{"6.3.2"}</td><td>{"Project assessment and control"}</td><td>{"進捗・品質を評価し、必要なら是正する"}</td></tr><tr className="odd"><td>{"6.3.3"}</td><td>{"Decision management"}</td><td>{"意思決定の根拠と記録を管理する"}</td></tr><tr className="even"><td>{"6.3.4"}</td><td>{"Risk management"}</td><td>{"AI 固有のリスクを扱う（詳細は ISO/IEC 23894 を参照）"}</td></tr><tr className="odd"><td>{"6.3.5"}</td><td>{"Configuration management"}</td><td><strong>{"コード・データ・モデル"}</strong>{"のバージョンと構成を管理する"}</td></tr><tr className="even"><td>{"6.3.6"}</td><td>{"Information management"}</td><td>{"情報（データ・文書）のライフサイクルを管理する"}</td></tr><tr className="odd"><td>{"6.3.7"}</td><td>{"Measurement"}</td><td>{"指標を定義・収集して判断に使う"}</td></tr><tr className="even"><td>{"6.3.8"}</td><td>{"Quality assurance"}</td><td>{"品質保証活動（プロセスと成果物の両面）"}</td></tr></tbody></table></div>

<h3 id="6-4-64technical-processes技術プロセス17個">{"6-4. 【6.4】Technical processes（技術プロセス：17個）"}</h3>

<p>{"これが規格の中心です。設計から廃棄までの流れに沿って並んでいます。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"番号"}</th><th>{"プロセス"}</th><th>{"種別の目安"}</th><th>{"要点"}</th></tr></thead><tbody><tr className="odd"><td>{"6.4.1"}</td><td>{"Business or mission analysis"}</td><td>{"Modified"}</td><td>{"事業課題の分析。AIで解くべき問題か？"}</td></tr><tr className="even"><td>{"6.4.2"}</td><td>{"Stakeholder needs and requirements definition"}</td><td>{"Modified"}</td><td>{"利害関係者のニーズ整理"}</td></tr><tr className="odd"><td>{"6.4.3"}</td><td>{"System requirements definition"}</td><td>{"Modified"}</td><td><strong>{"モデル要件の設定"}</strong>{"を含む"}</td></tr><tr className="even"><td>{"6.4.4"}</td><td>{"System architecture definition"}</td><td>{"Generic"}</td><td>{"データ・モデル・従来コンポーネントの構成を決める"}</td></tr><tr className="odd"><td>{"6.4.5"}</td><td>{"Design definition"}</td><td>{"Generic"}</td><td>{"詳細設計"}</td></tr><tr className="even"><td>{"6.4.6"}</td><td>{"System analysis"}</td><td>{"Generic"}</td><td>{"分析・トレードオフ評価"}</td></tr><tr className="odd"><td>{"6.4.7"}</td><td><strong>{"Knowledge acquisition"}</strong></td><td><strong>{"AI-specific"}</strong></td><td>{"知識の収集・精緻化・処理可能な形への変換"}</td></tr><tr className="even"><td>{"6.4.8"}</td><td><strong>{"AI data engineering"}</strong></td><td><strong>{"AI-specific"}</strong></td><td>{"データの取得・更新・準備"}</td></tr><tr className="odd"><td>{"6.4.9"}</td><td>{"Implementation"}</td><td>{"Modified"}</td><td><strong>{"モデルの学習・チューニング"}</strong>{"を含む"}</td></tr><tr className="even"><td>{"6.4.10"}</td><td>{"Integration"}</td><td>{"Generic"}</td><td>{"コンポーネントの統合"}</td></tr><tr className="odd"><td>{"6.4.11"}</td><td>{"Verification"}</td><td>{"Modified"}</td><td><strong>{"展開前のモデルテスト"}</strong></td></tr><tr className="even"><td>{"6.4.12"}</td><td>{"Transition"}</td><td>{"Modified"}</td><td><strong>{"モデルのデプロイ"}</strong></td></tr><tr className="odd"><td>{"6.4.13"}</td><td>{"Validation"}</td><td>{"Modified"}</td><td>{"利用者ニーズを満たすかの妥当性確認"}</td></tr><tr className="even"><td>{"6.4.14"}</td><td><strong>{"Continuous validation"}</strong></td><td><strong>{"AI-specific"}</strong></td><td><strong>{"展開後"}</strong>{"の継続的な検証（ドリフト検知など）"}</td></tr><tr className="odd"><td>{"6.4.15"}</td><td>{"Operation"}</td><td>{"Modified"}</td><td>{"運用"}</td></tr><tr className="even"><td>{"6.4.16"}</td><td>{"Maintenance"}</td><td>{"Modified"}</td><td>{"保守（再学習を含む）"}</td></tr><tr className="odd"><td>{"6.4.17"}</td><td>{"Disposal"}</td><td>{"Modified"}</td><td>{"廃棄・退役"}</td></tr></tbody></table></div>

<blockquote className="callout-warn"><p>{"⚠️ 「種別の目安」列は、本書が目次と公開情報から読み取った"}<strong>{"整理上の目安"}</strong>{"です。各プロセスが Generic / Modified / AI-specific のどれに該当するかの厳密な分類は、規格の図1および第6章本文で確認してください。確実に AI 固有と言えるのは、公開解説でも一致して挙げられている "}<strong>{"Knowledge acquisition / AI data engineering / Continuous validation"}</strong>{" です。"}</p></blockquote>

<hr />

</>; }
