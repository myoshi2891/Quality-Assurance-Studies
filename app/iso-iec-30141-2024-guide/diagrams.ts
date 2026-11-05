export const MERMAID_CONFIG = `%%{init: {"theme":"base","themeVariables":{"background":"#07111e","mainBkg":"#13233a","primaryColor":"#13233a","primaryBorderColor":"#7c9eff","primaryTextColor":"#e6edf7","lineColor":"#7c9eff","secondaryColor":"#0d1b2e","tertiaryColor":"#10203a","clusterBkg":"#0d1b2e","clusterBorder":"#7c9eff","edgeLabelBackground":"#0d1b2e","fontFamily":"Noto Sans JP, sans-serif","fontSize":"16px"},"look":"classic","htmlLabels":true,"flowchart":{"curve":"basis"}}}%%`;
export const DIAGRAM_0 = `${MERMAID_CONFIG}
flowchart LR
N0_P1["物理世界の対象<br/>（機械・環境・人など）"] -->|"計測"| N0_SN["センサー"]
N0_SN -->|"データ"| N0_NW["ネットワーク"]
N0_NW -->|"データ"| N0_CP["クラウド／エッジ／アプリ<br/>（分析・判断）"]
N0_CP -->|"指令"| N0_NW2["ネットワーク"]
N0_NW2 -->|"指令"| N0_AC["アクチュエータ"]
N0_AC -->|"作用"| N0_P2["物理世界の対象"]`;
export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart LR
N1_ST["ステークホルダー"] -->|"持つ"| N1_CN["関心事"]
N1_CN -->|"整理される"| N1_VP["ビューポイント<br/>（見方のルール）"]
N1_VP -->|"支配・規定する"| N1_VW["ビュー<br/>（実際の図や記述）"]
N1_VW -->|"答える"| N1_CN`;
export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TB
N2_RA["ISO/IEC 30141<br/>IoT参照アーキテクチャ"] -->|"規範的参照（任意）"| N2_DSRA["IoT領域別参照アーキテクチャ<br/>（DSRA：スマート製造、スマートシティなど）"]
N2_RA -->|"直接参照（任意）"| N2_SA["個別のIoTソリューション<br/>アーキテクチャ"]
N2_DSRA -->|"DSRAに基づく（任意）"| N2_SA
N2_SA -->|"導く"| N2_IMP["IoTシステムの実装"]`;
export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart LR
subgraph N3_E1["第1版（2018年8月）"]
direction TB
N3_C1["概念モデル<br/>＋参照モデル"]
N3_C2["機能ビュー"]
N3_C3["システム（配置）ビュー"]
N3_C4["ネットワークビュー"]
N3_C5["利用ビュー"]
N3_C1 --> N3_C2
N3_C1 --> N3_C3
N3_C1 --> N3_C4
N3_C1 --> N3_C5
end
subgraph N3_E2["第2版（2024年8月）"]
direction TB
N3_D1["基礎（Foundational）"]
N3_D2["ビジネス"]
N3_D3["利用"]
N3_D4["機能"]
N3_D5["信頼性（Trustworthiness）"]
N3_D6["構築（Construction）"]
N3_D1 --> N3_D2
N3_D1 --> N3_D3
N3_D1 --> N3_D4
N3_D1 --> N3_D5
N3_D1 --> N3_D6
end
N3_E1 -->|"技術的改訂"| N3_E2`;
export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart TB
N4_P0["序文<br/>背景と目的"] --> N4_P1["1〜4章<br/>適用範囲・引用・用語・略語"]
N4_P1 --> N4_P5["5章<br/>IoT RAの文脈<br/>ステークホルダーと関心事"]
N4_P5 --> N4_P6["6章<br/>6つのビューポイントとビュー<br/>（本規格の中核）"]
N4_P6 --> N4_AA["附属書A（規範）<br/>追加の構築パターン"]
N4_P6 --> N4_AB["附属書B（参考）<br/>42010の使い方"]
N4_P6 --> N4_AC["附属書C（参考）<br/>IoTシステムの特性"]`;
export const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart TB
N5_Q0{"今の悩みは？"}
N5_Q0 -->|"IoTの定義・特性を知りたい"| N5_R1["基礎ビュー（6.2）"]
N5_Q0 -->|"事業価値・ビジネスモデル"| N5_R2["ビジネスビュー（6.3）"]
N5_Q0 -->|"誰がどう使うか"| N5_R3["利用ビュー（6.4）"]
N5_Q0 -->|"必要な機能の分類"| N5_R4["機能ビュー（6.5）"]
N5_Q0 -->|"セキュリティ・信頼性"| N5_R5["信頼性ビュー（6.6）"]
N5_Q0 -->|"作り方の型・パターン"| N5_R6["構築ビュー（6.7）と附属書A"]`;
export const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart TB
N6_F["6.2 基礎（Foundational）<br/>IoTとは何かの土台"]
N6_F --> N6_B["6.3 ビジネス<br/>事業価値"]
N6_F --> N6_U["6.4 利用<br/>人・デジタルの関わり"]
N6_F --> N6_FN["6.5 機能<br/>抽象的な機能クラス"]
N6_F --> N6_T["6.6 信頼性<br/>信頼できる設計と保証"]
N6_F --> N6_C["6.7 構築<br/>パターンによる実装の型"]`;
export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart LR
N7_VB["ビジネスビュー"] --> N7_CV["構築ビュー<br/>（パターンで実装の型にする）"]
N7_VU["利用ビュー"] --> N7_CV
N7_VF["機能ビュー"] --> N7_CV
N7_VT["信頼性ビュー"] --> N7_CV
N7_CV --> N7_OUT["IoT部品・IoTシステムの<br/>実装アーキテクチャ"]`;
export const DIAGRAM_8 = `${MERMAID_CONFIG}
flowchart TB
N8_S1["STEP1：目的と関心事を整理する<br/>（5章のTable 1で誰が何を知りたいか確認）"]
N8_S2["STEP2：IoTシステムかを確認する<br/>（基礎ビューで特性を照合）"]
N8_S3["STEP3：必要な機能を洗い出す<br/>（機能ビューの抽象機能クラス）"]
N8_S4["STEP4：利用者と物理対象を整理する<br/>（利用ビュー）"]
N8_S5["STEP5：信頼性目標を決める<br/>（信頼性ビューとISO/IEC TS 30149）"]
N8_S6["STEP6：パターンを選び当てはめる<br/>（構築ビューと附属書A）"]
N8_S7["STEP7：自分の領域向けに具体化する<br/>（DSRA／ソリューションアーキテクチャ）"]
N8_S1 --> N8_S2 --> N8_S3 --> N8_S4 --> N8_S5 --> N8_S6 --> N8_S7`;
export const DIAGRAM_9 = `${MERMAID_CONFIG}
flowchart TB
N9_RA["ISO/IEC 30141:2024<br/>IoT参照アーキテクチャ"]
N9_V["ISO/IEC 20924<br/>IoTとデジタルツインの用語<br/>（規範的引用）"]
N9_A["ISO/IEC/IEEE 42010:2022<br/>アーキテクチャ記述<br/>（準拠）"]
N9_T["ISO/IEC TS 30149:2024<br/>IoTの信頼性原則<br/>（30141に基づく）"]
N9_I["ISO/IEC 21823 シリーズ<br/>IoTシステムの相互運用性"]
N9_IIRA["IIC IIRA<br/>産業用IoT参照アーキテクチャ"]
N9_V --> N9_RA
N9_A --> N9_RA
N9_RA --> N9_T
N9_RA -.->|"相互運用の文脈で関連"| N9_I
N9_IIRA -.->|"第1版の土台の一つ"| N9_RA`;
export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart TB
N10_Q1["QA1：対象がIoTシステムか確認<br/>（基礎ビューの特性）"]
N10_Q2["QA2：関心事ごとにテスト観点を分ける<br/>（利用／機能／信頼性）"]
N10_Q3["QA3：非機能特性を観点に変換<br/>（附属書Cの特性）"]
N10_Q4["QA4：信頼性目標を検証可能にする<br/>（ISO/IEC TS 30149の原則）"]
N10_Q5["QA5：パターンの能力ごとに結合・統合テストを設計<br/>（構築ビュー）"]
N10_Q1 --> N10_Q2 --> N10_Q3 --> N10_Q4 --> N10_Q5`;
