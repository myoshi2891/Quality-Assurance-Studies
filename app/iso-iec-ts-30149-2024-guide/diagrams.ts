export const MERMAID_CONFIG = `%%{init: {"theme":"base","themeVariables":{"background":"#0d1b2e","primaryColor":"#e8f0ff","primaryBorderColor":"#3b5bdb","primaryTextColor":"#102a63","lineColor":"#7c9eff","secondaryColor":"#0b1a2e","tertiaryColor":"#0d1b2e","clusterBkg":"#0b1a2e","clusterBorder":"#1c3050","edgeLabelBackground":"#0d1b2e","fontFamily":"Noto Sans JP, sans-serif","fontSize":"16px"},"htmlLabels":true,"flowchart":{"curve":"basis"}}}%%`;
export const DIAGRAM_0 = `${MERMAID_CONFIG}
flowchart LR
N1_P1["ISO/IEC 30141<br/>IoT参照アーキテクチャ"] --> N1_P2["信頼に足る性質の視点<br/>trustworthiness view"]
N1_P1 --> N1_P3["構築の視点<br/>construction view"]
N1_P2 --> N1_P4["TS 30149 本文<br/>信頼に足る性質の原則を専門化"]
N1_P3 --> N1_P5["TS 30149 附属書A<br/>パターン集"]
classDef base fill:#e8f0ff,stroke:#3b5bdb,color:#102a63
classDef ts fill:#fff3d6,stroke:#d9822b,color:#4a2a00
class N1_P1,N1_P2,N1_P3 base
class N1_P4,N1_P5 ts`;
export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart LR
N2_E1["利用者の期待<br/>expectation"] --> N2_T1["信頼 trust<br/>前提を含む「思い込み」も混ざる"]
N2_TV1["検証可能な証拠<br/>evidence"] --> N2_W1["信頼に足る性質 trustworthiness<br/>期待に応える能力を証拠で示せる"]
N2_W1 -->|"正当な根拠を与える"| N2_T1
classDef a fill:#e8f0ff,stroke:#3b5bdb,color:#102a63
classDef b fill:#e6f7ec,stroke:#2f9e44,color:#0b3d1c
class N2_E1,N2_T1 a
class N2_TV1,N2_W1 b`;
export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TB
N3_TW["IoTの信頼に足る性質<br/>Trustworthiness"] --> N3_C1["Safety<br/>安全"]
N3_TW --> N3_C2["Security<br/>セキュリティ"]
N3_TW --> N3_C3["Privacy<br/>プライバシー"]
N3_TW --> N3_C4["Resilience<br/>レジリエンス"]
N3_TW --> N3_C5["Reliability<br/>信頼性"]
classDef root fill:#fff3d6,stroke:#d9822b,color:#4a2a00
classDef leaf fill:#e8f0ff,stroke:#3b5bdb,color:#102a63
class N3_TW root
class N3_C1,N3_C2,N3_C3,N3_C4,N3_C5 leaf`;
export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart LR
N4_G1["目標 goals<br/>何を達成したいか"] --> N4_A1["前提 assumptions<br/>何を仮定しているか"]
N4_A1 --> N4_D1["設計 design<br/>どう実現するか"]
N4_D1 --> N4_S1["保証と制御<br/>assurance and control<br/>できていることをどう示すか"]
classDef n fill:#e8f0ff,stroke:#3b5bdb,color:#102a63
class N4_G1,N4_A1,N4_D1,N4_S1 n`;
export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart LR
N5_X1["Security観点<br/>扉を確実に施錠したい"] <-->|"両立の設計が必要"| N5_X2["Safety観点<br/>非常時に確実に避難できたい"]
N5_X3["Security観点<br/>ログを詳しく残したい"] <-->|"両立の設計が必要"| N5_X4["Privacy観点<br/>個人情報を最小限にしたい"]
classDef n fill:#fff3d6,stroke:#d9822b,color:#4a2a00
class N5_X1,N5_X2,N5_X3,N5_X4 n`;
export const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart LR
N6_M1["前提を明示<br/>Assumptions"] --> N6_M2["リスクを把握<br/>Risks"]
N6_M2 --> N6_M3["証拠で示す<br/>Assurance"]
N6_M3 --> N6_M4["組み合わせても成立<br/>Composition"]
N6_M4 --> N6_M5["用途別にまとめる<br/>Profiles"]
classDef n fill:#e6f7ec,stroke:#2f9e44,color:#0b3d1c
class N6_M1,N6_M2,N6_M3,N6_M4,N6_M5 n`;
export const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart TB
N7_V1["能力の視点<br/>目標指向"] --> N7_O1["運用化<br/>Operationalization"]
N7_V2["リスクの視点<br/>リスク指向"] --> N7_O1
N7_V3["保証の視点<br/>主張・論拠・証拠"] --> N7_O1
N7_O1 --> N7_R1["現場で回る<br/>信頼に足る性質の作り込み"]
classDef v fill:#e8f0ff,stroke:#3b5bdb,color:#102a63
classDef o fill:#fff3d6,stroke:#d9822b,color:#4a2a00
class N7_V1,N7_V2,N7_V3 v
class N7_O1,N7_R1 o`;
export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart LR
N8_CL["主張 claim<br/>この機器は安全に停止する"] --> N8_AR["論拠 argument<br/>なぜ主張が成り立つと言えるか"]
N8_AR --> N8_EV["証拠 evidence<br/>試験結果・レビュー記録・設計書"]
classDef c fill:#fff3d6,stroke:#d9822b,color:#4a2a00
classDef a fill:#e8f0ff,stroke:#3b5bdb,color:#102a63
classDef e fill:#e6f7ec,stroke:#2f9e44,color:#0b3d1c
class N8_CL c
class N8_AR a
class N8_EV e`;
export const DIAGRAM_8 = `${MERMAID_CONFIG}
flowchart LR
N9_PT1["特徴づけ<br/>characterization"] --> N9_PT2["成熟度評価<br/>maturity model"]
N9_PT2 --> N9_PT3["影響評価<br/>impact assessment"]
N9_PT3 --> N9_PT4["作り込み<br/>engineering"]
N9_PT4 --> N9_PT5["保証<br/>assurance"]
classDef n fill:#e8f0ff,stroke:#3b5bdb,color:#102a63
class N9_PT1,N9_PT2,N9_PT3,N9_PT4,N9_PT5 n`;
export const DIAGRAM_9 = `${MERMAID_CONFIG}
flowchart TB
N10_F1["対象IoTシステムを<br/>30141のビューで整理"] --> N10_F2["5特性ごとに<br/>目標を言語化"]
N10_F2 --> N10_F3["前提とリスクを<br/>洗い出す"]
N10_F3 --> N10_F4["主張・論拠・証拠の<br/>対応表を作る"]
N10_F4 --> N10_F5["設計・実装・テストで<br/>証拠を作る"]
N10_F5 --> N10_F6["運用で証拠を更新し<br/>成熟度を高める"]
N10_F6 --> N10_F3
classDef n fill:#e6f7ec,stroke:#2f9e44,color:#0b3d1c
class N10_F1,N10_F2,N10_F3,N10_F4,N10_F5,N10_F6 n`;
export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart LR
N11_IIC1["IIC<br/>IISF・IIRA"] --> N11_IIC2["IIoT Trustworthiness<br/>Framework Foundations<br/>2021年"]
N11_IIC2 -.->|"同じ5特性の考え方"| N11_TS1["ISO/IEC TS 30149<br/>2024年"]
N11_RA1["ISO/IEC 30141<br/>IoT参照アーキテクチャ"] --> N11_TS1
classDef a fill:#e8f0ff,stroke:#3b5bdb,color:#102a63
classDef b fill:#fff3d6,stroke:#d9822b,color:#4a2a00
class N11_IIC1,N11_IIC2,N11_RA1 a
class N11_TS1 b`;
