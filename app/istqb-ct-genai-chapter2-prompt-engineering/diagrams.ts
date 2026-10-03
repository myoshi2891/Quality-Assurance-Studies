export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#ffffff",
    "mainBkg": "#eff6ff",
    "primaryColor": "#eff6ff",
    "primaryBorderColor": "#2563eb",
    "primaryTextColor": "#0f172a",
    "lineColor": "#94a3b8",
    "secondaryColor": "#f1f5f9",
    "tertiaryColor": "#ffffff",
    "nodeBorder": "#2563eb",
    "clusterBkg": "#f1f5f9",
    "clusterBorder": "#e2e8f0",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "htmlLabels": true,
  "flowchart": {
    "curve": "basis",
    "nodeSpacing": 50,
    "rankSpacing": 60
  }
}}%%`;

export const DIAGRAM_CH2_OVERVIEW = `${MERMAID_CONFIG}
flowchart TB
subgraph OV_CH2["第2章 プロンプトエンジニアリング（365分）"]
    OV_S1["2.1 効果的な<br/>プロンプト開発"]
    OV_S2["2.2 テスト業務への<br/>技法の適用"]
    OV_S3["2.3 結果の評価と<br/>プロンプトの改善"]
    OV_S1 --> OV_S2 --> OV_S3
    OV_S3 -.フィードバック.-> OV_S1
end`;

export const DIAGRAM_PROMPT_6_ELEMENTS = `${MERMAID_CONFIG}
flowchart TB
EL_P["構造化プロンプト<br/>Structured Prompt"]
EL_P --> EL_R["① Role<br/>役割"]
EL_P --> EL_C["② Context<br/>文脈"]
EL_P --> EL_I["③ Instruction<br/>指示"]
EL_P --> EL_D["④ Input Data<br/>入力データ"]
EL_P --> EL_CO["⑤ Constraints<br/>制約条件"]
EL_P --> EL_O["⑥ Output Format<br/>出力形式"]
classDef EL_comp fill:#dbeafe,stroke:#2563eb,color:#0f172a;
class EL_R,EL_C,EL_I,EL_D,EL_CO,EL_O EL_comp;`;

export const DIAGRAM_SHOT_COMPARISON = `${MERMAID_CONFIG}
flowchart LR
SH_Z["Zero-shot<br/>ゼロショット<br/>例を一切与えない<br/>モデルの既存知識に依存"]
SH_O["One-shot<br/>ワンショット<br/>例を1つだけ与える<br/>望ましい結果を1例で示す"]
SH_F["Few-shot<br/>フューショット<br/>例を複数（a few）与える<br/>望ましい応答パターンを補強"]
SH_Z --> SH_O --> SH_F
classDef SH_step fill:#dbeafe,stroke:#2563eb,color:#0f172a;
class SH_Z,SH_O,SH_F SH_step;`;

export const DIAGRAM_PROMPT_CHAINING = `${MERMAID_CONFIG}
flowchart LR
CN_S1["Step1<br/>プロンプト"] --> CN_R1["出力1"] --> CN_V1{"人による検証"}
CN_V1 -->|"OK"| CN_S2["Step2<br/>プロンプト"]
CN_V1 -->|"要修正"| CN_S1
CN_S2 --> CN_R2["出力2"] --> CN_V2{"人による検証"}
CN_V2 -->|"OK"| CN_S3["Step3<br/>プロンプト"]
CN_V2 -->|"要修正"| CN_S2
CN_S3 --> CN_R3["最終出力"]
classDef CN_ok fill:#dcfce7,stroke:#15803d,color:#0f172a;
classDef CN_chk fill:#fef3c7,stroke:#b45309,color:#0f172a;
class CN_R1,CN_R2,CN_R3 CN_ok;
class CN_V1,CN_V2 CN_chk;`;

export const DIAGRAM_META_PROMPTING = `${MERMAID_CONFIG}
flowchart LR
MT_G["目的・タスクの<br/>大まかな説明"] --> MT_M["LLMが<br/>プロンプト草案を生成"]
MT_M --> MT_E{"テスターが評価"}
MT_E -->|"改善が必要"| MT_M
MT_E -->|"OK"| MT_U["最適化された<br/>プロンプトをテスト業務に使用"]
classDef MT_loop fill:#dbeafe,stroke:#2563eb,color:#0f172a;
class MT_G,MT_M,MT_U MT_loop;`;

export const DIAGRAM_SYSTEM_USER_PROMPT = `${MERMAID_CONFIG}
sequenceDiagram
participant SU_T as テスター
participant SU_L as LLM
SU_T->>SU_L: システムプロンプト（対話開始時に一度だけ設定）
Note over SU_L: 役割・トーン・制約条件を<br/>セッション全体で保持
SU_T->>SU_L: ユーザープロンプト①
SU_L-->>SU_T: 応答①
SU_T->>SU_L: ユーザープロンプト②
SU_L-->>SU_T: 応答②
SU_T->>SU_L: ユーザープロンプト③
SU_L-->>SU_T: 応答③`;

export const DIAGRAM_TEST_ACTIVITIES_FLOW = `${MERMAID_CONFIG}
flowchart LR
TP_A["2.2.1<br/>テスト分析"] --> TP_B["2.2.2<br/>テスト設計・実装"] --> TP_C["2.2.3<br/>自動リグレッションテスト"] --> TP_D["2.2.4<br/>テスト監視・コントロール"]
TP_A -. 技法の選択 .-> TP_E["2.2.5<br/>状況に応じた<br/>技法選択"]
TP_B -. 技法の選択 .-> TP_E
TP_C -. 技法の選択 .-> TP_E
TP_D -. 技法の選択 .-> TP_E
classDef TP_phase fill:#dbeafe,stroke:#2563eb,color:#0f172a;
classDef TP_sel fill:#fef3c7,stroke:#b45309,color:#0f172a;
class TP_A,TP_B,TP_C,TP_D TP_phase;
class TP_E TP_sel;`;

export const DIAGRAM_TECHNIQUE_DECISION_TREE = `${MERMAID_CONFIG}
flowchart TD
DF_Q1{"タスクは複雑で、<br/>段階的な人による検証が必要か？"}
DF_Q1 -->|"はい"| DF_PC["プロンプトチェイニングを選択"]
DF_Q1 -->|"いいえ"| DF_Q2{"出力形式やパターンが<br/>反復的・固定的か？"}
DF_Q2 -->|"はい"| DF_FS["Few-shotプロンプティングを選択"]
DF_Q2 -->|"いいえ"| DF_Q3{"新しいタスク向けに<br/>柔軟にプロンプトを設計したいか？"}
DF_Q3 -->|"はい"| DF_MP["メタプロンプティングを選択"]
DF_Q3 -->|"いいえ"| DF_COMB["複数技法の組み合わせを検討"]
classDef DF_q fill:#fef3c7,stroke:#b45309,color:#0f172a;
classDef DF_a fill:#dcfce7,stroke:#15803d,color:#0f172a;
class DF_Q1,DF_Q2,DF_Q3 DF_q;
class DF_PC,DF_FS,DF_MP,DF_COMB DF_a;`;

export const DIAGRAM_PROMPT_EVAL_CYCLE = `${MERMAID_CONFIG}
flowchart LR
EC_B0["ベースプロンプト"] --> EC_R0["結果を評価<br/>（指標で測定）"]
EC_R0 --> EC_IM["反復的な<br/>プロンプト修正"]
EC_R0 --> EC_AB["プロンプトの<br/>A/Bテスト"]
EC_R0 --> EC_OA["出力分析"]
EC_R0 --> EC_UF["利用者フィードバック<br/>の統合"]
EC_IM --> EC_AS["プロンプトの長さ・<br/>具体性の調整"]
EC_AB --> EC_AS
EC_OA --> EC_AS
EC_UF --> EC_AS
EC_AS --> EC_B0
classDef EC_n fill:#dbeafe,stroke:#2563eb,color:#0f172a;
class EC_B0,EC_R0,EC_IM,EC_AB,EC_OA,EC_UF,EC_AS EC_n;`;
