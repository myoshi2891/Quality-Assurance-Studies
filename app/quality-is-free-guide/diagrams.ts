// Preserve the paper palette even when merged with the shared dark defaults.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "transparent",
    "primaryColor": "#fffdf7",
    "mainBkg": "#fffdf7",
    "primaryTextColor": "#2a241c",
    "nodeTextColor": "#2a241c",
    "primaryBorderColor": "#413d8a",
    "nodeBorder": "#413d8a",
    "lineColor": "#413d8a",
    "secondaryColor": "#f2ecdd",
    "tertiaryColor": "#faf6ec",
    "clusterBkg": "#f2ecdd",
    "clusterBorder": "#e6ddc7",
    "titleColor": "#2a241c",
    "edgeLabelBackground": "#fffdf7",
    "labelTextColor": "#2a241c",
    "fontFamily": "Noto Sans JP, system-ui, sans-serif",
    "fontSize": "16px"
  },
  "flowchart": {
    "htmlLabels": true,
    "curve": "basis",
    "useMaxWidth": false
  },
  "htmlLabels": true
}}%%`;

export const DIAGRAM_0 = `${MERMAID_CONFIG}
flowchart TB
classDef hub fill:#c9c4ef,color:#221f52,stroke:#413d8a,stroke-width:1px;
ROOT[Quality Is Free 全体構成]
ROOT --> P1[Part One The Understanding]
P1 --> C1[品質を確実にする]
C1 --> C2[品質とは何か]
C2 --> C3[品質管理成熟度グリッド]
C3 --> C4[品質コスト]
C4 --> C5[14ステップ改善プログラム]
C5 --> P2[Part Two The Doing HPA Corporation]
P2 --> C6[プロジェクトの経緯]
C6 --> C7[プログラムの実施]
C7 --> P3[Part Three The Tools]
P3 --> C8[HPA社ケーススタディ指導者ガイド]
C8 --> C9[Make Certain実践ツール]
class P1,P2,P3 hub`;

export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart TB
classDef hub fill:#c9c4ef,color:#221f52,stroke:#413d8a,stroke-width:1px;
ROOT[品質の4つの絶対原則]
ROOT --> D1[定義　要求への適合]
ROOT --> D2[システム　予防が中心]
ROOT --> D3[基準　ゼロディフェクト]
ROOT --> D4[測定　不適合コストで測る]
class ROOT hub`;

export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TB
classDef hub fill:#c9c4ef,color:#221f52,stroke:#413d8a,stroke-width:1px;
COQ[品質コスト COQ]
COQ --> POC[適合コスト POC]
COQ --> PONC[不適合コスト PONC]
POC --> PREV[予防コスト　設計レビュー・教育・標準策定]
POC --> APPR[評価コスト　テスト・QA・コードレビュー]
PONC --> INT[内部失敗コスト　リリース前のバグ修正・手戻り]
PONC --> EXT[外部失敗コスト　本番障害・サポート対応・信頼損失]
class COQ hub`;

export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart TB
classDef hub fill:#c9c4ef,color:#221f52,stroke:#413d8a,stroke-width:1px;
classDef done fill:#bfe4d2,color:#123722,stroke:#2f6b4f,stroke-width:1px;
S1[Step1 経営層のコミットメント]
S1 --> S2[Step2 品質改善チームの結成]
S2 --> S3[Step3 品質の測定]
S3 --> S4[Step4 品質コストの算定]
S4 --> S5[Step5 品質意識の向上]
S5 --> S6[Step6 是正処置]
S6 --> S7[Step7 ゼロディフェクト計画委員会]
S7 --> S8[Step8 監督者訓練]
S8 --> S9[Step9 ゼロディフェクトデー]
S9 --> S10[Step10 目標設定]
S10 --> S11[Step11 エラー原因の除去]
S11 --> S12[Step12 表彰]
S12 --> S13[Step13 品質評議会]
S13 --> S14[Step14 もう一度繰り返す]
S14 -.->|12から18ヶ月後に再始動| S1
class S1,S3,S6,S12 hub
class S14 done`;

export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart TB
classDef hub fill:#c9c4ef,color:#221f52,stroke:#413d8a,stroke-width:1px;
classDef done fill:#bfe4d2,color:#123722,stroke:#2f6b4f,stroke-width:1px;
L1[Stage1 Uncertainty 品質は場当たり的　経営層は無関心]
L1 --> L2[Stage2 Awakening 問題意識は生まれるが対応は断片的]
L2 --> L3[Stage3 Enlightenment 予防重視の体系立った取り組みが始まる]
L3 --> L4[Stage4 Wisdom 品質が組織文化に根付く]
L4 --> L5[Stage5 Certainty 品質マネジメントが日常業務そのものになる]
L5 -.->|後年のCMMとCMMIの原型に| CMM[ソフトウェアCMMへ]
class L1 hub
class L5,CMM done`;

export const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart TB
classDef hub fill:#c9c4ef,color:#221f52,stroke:#413d8a,stroke-width:1px;
classDef done fill:#bfe4d2,color:#123722,stroke:#2f6b4f,stroke-width:1px;
REQ[要件定義　受け入れ基準を明文化]
REQ --> DESIGN[設計　アーキテクチャレビュー]
DESIGN --> CODE[実装　TDD ペアプログラミング]
CODE --> STATIC[静的解析とLint　CIパイプライン]
STATIC --> REVIEW[コードレビュー]
REVIEW --> TEST[自動テスト　単体 結合 E2E]
TEST --> STAGE[ステージング環境　受け入れテスト]
STAGE --> PROD[本番リリース]
PROD --> MONITOR[本番監視とSLO　インシデント対応]
MONITOR -.->|フィードバックをシフトレフト| REQ
class REQ hub
class MONITOR done`;

export const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart TB
classDef hub fill:#c9c4ef,color:#221f52,stroke:#413d8a,stroke-width:1px;
classDef done fill:#bfe4d2,color:#123722,stroke:#2f6b4f,stroke-width:1px;
CLAIM[よく引用される主張　1x 6.5x 15x 100xという固定倍率表]
CLAIM --> SRC[出典を遡ると根拠不明　IBM System Science Institute研究は実在が未確認]
EVID[複数の独立した研究が支持する点　Boehm 1981とBoehm and Basili 2001]
EVID --> DIR[方向性は妥当　後工程での修正ほど一般に高コスト]
DIR --> CAUTION[ただし正確な倍率を数値として引用するのは避ける]
class CLAIM hub
class CAUTION done`;

export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart TB
classDef hub fill:#c9c4ef,color:#221f52,stroke:#413d8a,stroke-width:1px;
classDef done fill:#bfe4d2,color:#123722,stroke:#2f6b4f,stroke-width:1px;
START[Quality Is Freeを読了]
START --> B1[Perfect Software　Gerald M Weinberg]
START --> B2[Out of the Crisis　W Edwards Deming]
START --> B3[Accelerate　Forsgren Humble Kim]
START --> B4[The Leprechauns of Software Engineering　Laurent Bossavit]
B1 --> NEXT[ソフトウェア品質への応用を深める]
B2 --> NEXT
B3 --> NEXT
B4 --> NEXT
class START hub
class NEXT done`;

export const DIAGRAMS = {
    "dg-structure": DIAGRAM_0,
    "dg-absolutes": DIAGRAM_1,
    "dg-coq": DIAGRAM_2,
    "dg-steps": DIAGRAM_3,
    "dg-maturity": DIAGRAM_4,
    "dg-pipeline": DIAGRAM_5,
    "dg-critique": DIAGRAM_6,
    "dg-roadmap": DIAGRAM_7
} as const;
export type DiagramId = keyof typeof DIAGRAMS;
