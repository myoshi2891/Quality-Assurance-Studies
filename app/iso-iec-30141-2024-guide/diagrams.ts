export const MERMAID_CONFIG = `%%{init: {"theme":"base","themeVariables":{"background":"#07111e","primaryColor":"#13233a","primaryBorderColor":"#7c9eff","primaryTextColor":"#e6edf7","lineColor":"#7c9eff","secondaryColor":"#0d1b2e","tertiaryColor":"#10203a","clusterBkg":"#0d1b2e","clusterBorder":"#2a4066","edgeLabelBackground":"#0d1b2e","fontFamily":"Noto Sans JP, sans-serif","fontSize":"16px"},"look":"neo","htmlLabels":true,"flowchart":{"curve":"basis"}}}%%`;
export const DIAGRAM_0 = `${MERMAID_CONFIG}
flowchart LR
P1["物理世界の対象<br/>（機械・環境・人など）"] -->|"計測"| SN["センサー"]
SN -->|"データ"| NW["ネットワーク"]
NW -->|"データ"| CP["クラウド／エッジ／アプリ<br/>（分析・判断）"]
CP -->|"指令"| NW2["ネットワーク"]
NW2 -->|"指令"| AC["アクチュエータ"]
AC -->|"作用"| P2["物理世界の対象"]`;
export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart LR
ST["ステークホルダー"] -->|"持つ"| CN["関心事"]
CN -->|"整理される"| VP["ビューポイント<br/>（見方のルール）"]
VP -->|"支配・規定する"| VW["ビュー<br/>（実際の図や記述）"]
VW -->|"答える"| CN`;
export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TB
RA["ISO/IEC 30141<br/>IoT参照アーキテクチャ"] -->|"規範的参照"| DSRA["IoT領域別参照アーキテクチャ<br/>（DSRA：スマート製造、スマートシティなど）"]
RA -->|"参考にする"| SA["個別のIoTソリューション<br/>アーキテクチャ"]
DSRA -->|"具体化"| SA
SA -->|"導く"| IMP["IoTシステムの実装"]`;
export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart LR
subgraph E1["第1版（2018年8月）"]
direction TB
C1["概念モデル<br/>＋参照モデル"]
C2["機能ビュー"]
C3["システム（配置）ビュー"]
C4["ネットワークビュー"]
C5["利用ビュー"]
C1 --> C2
C1 --> C3
C1 --> C4
C1 --> C5
end
subgraph E2["第2版（2024年8月）"]
direction TB
D1["基礎（Foundational）"]
D2["ビジネス"]
D3["利用"]
D4["機能"]
D5["信頼に足る性質（Trustworthiness）"]
D6["構築（Construction）"]
D1 --> D2
D1 --> D3
D1 --> D4
D1 --> D5
D1 --> D6
end
E1 -->|"技術的改訂"| E2`;
export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart TB
P0["序文<br/>背景と目的"] --> P1["1〜4章<br/>適用範囲・引用・用語・略語"]
P1 --> P5["5章<br/>IoT RAの文脈<br/>ステークホルダーと関心事"]
P5 --> P6["6章<br/>6つのビューポイントとビュー<br/>（本規格の中核）"]
P6 --> AA["附属書A（規範）<br/>追加の構築パターン"]
P6 --> AB["附属書B（参考）<br/>42010の使い方"]
P6 --> AC["附属書C（参考）<br/>IoTシステムの特性"]`;
export const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart TB
Q0{"今の悩みは？"}
Q0 -->|"IoTの定義・特性を知りたい"| R1["基礎ビュー（6.2）"]
Q0 -->|"事業価値・ビジネスモデル"| R2["ビジネスビュー（6.3）"]
Q0 -->|"誰がどう使うか"| R3["利用ビュー（6.4）"]
Q0 -->|"必要な機能の分類"| R4["機能ビュー（6.5）"]
Q0 -->|"セキュリティ・信頼に足る性質"| R5["信頼に足る性質ビュー（6.6）"]
Q0 -->|"作り方の型・パターン"| R6["構築ビュー（6.7）と附属書A"]`;
export const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart TB
F["6.2 基礎（Foundational）<br/>IoTとは何かの土台"]
F --> B["6.3 ビジネス<br/>事業価値"]
F --> U["6.4 利用<br/>人・デジタルの関わり"]
F --> FN["6.5 機能<br/>抽象的な機能クラス"]
F --> T["6.6 信頼に足る性質<br/>信頼できる設計と保証"]
F --> C["6.7 構築<br/>パターンによる実装の型"]`;
export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart LR
VB["ビジネスビュー"] --> CV["構築ビュー<br/>（パターンで実装の型にする）"]
VU["利用ビュー"] --> CV
VF["機能ビュー"] --> CV
VT["信頼に足る性質ビュー"] --> CV
CV --> OUT["IoT部品・IoTシステムの<br/>実装アーキテクチャ"]`;
export const DIAGRAM_8 = `${MERMAID_CONFIG}
flowchart TB
S1["STEP1：目的と関心事を整理する<br/>（5章のTable 1で誰が何を知りたいか確認）"]
S2["STEP2：IoTシステムかを確認する<br/>（基礎ビューで特性を照合）"]
S3["STEP3：必要な機能を洗い出す<br/>（機能ビューの抽象機能クラス）"]
S4["STEP4：利用者と物理対象を整理する<br/>（利用ビュー）"]
S5["STEP5：信頼に足る性質の目標を決める<br/>（信頼に足る性質ビューとISO/IEC TS 30149）"]
S6["STEP6：パターンを選び当てはめる<br/>（構築ビューと附属書A）"]
S7["STEP7：自分の領域向けに具体化する<br/>（DSRA／ソリューションアーキテクチャ）"]
S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7`;
export const DIAGRAM_9 = `${MERMAID_CONFIG}
flowchart TB
RA["ISO/IEC 30141:2024<br/>IoT参照アーキテクチャ"]
V["ISO/IEC 20924<br/>IoTとデジタルツインの用語<br/>（規範的引用）"]
A["ISO/IEC/IEEE 42010:2022<br/>アーキテクチャ記述<br/>（準拠）"]
T["ISO/IEC TS 30149:2024<br/>IoTの信頼に足る性質の原則<br/>（30141に基づく）"]
I["ISO/IEC 21823 シリーズ<br/>IoTシステムの相互運用性"]
IIRA["IIC IIRA<br/>産業用IoT参照アーキテクチャ"]
V --> RA
A --> RA
RA --> T
RA -.->|"相互運用の文脈で関連"| I
IIRA -.->|"第1版の土台の一つ"| RA`;
export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart TB
Q1["QA1：対象がIoTシステムか確認<br/>（基礎ビューの特性）"]
Q2["QA2：関心事ごとにテスト観点を分ける<br/>（利用／機能／信頼に足る性質）"]
Q3["QA3：非機能特性を観点に変換<br/>（附属書Cの特性）"]
Q4["QA4：信頼に足る性質の目標を検証可能にする<br/>（ISO/IEC TS 30149の原則）"]
Q5["QA5：パターンの能力ごとに結合・統合テストを設計<br/>（構築ビュー）"]
Q1 --> Q2 --> Q3 --> Q4 --> Q5`;
