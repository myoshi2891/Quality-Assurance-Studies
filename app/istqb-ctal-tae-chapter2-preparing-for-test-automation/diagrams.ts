const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#ffffff",
    "primaryColor": "#e8eefd",
    "primaryBorderColor": "#2f5fdc",
    "primaryTextColor": "#1b2333",
    "lineColor": "#8891a3",
    "secondaryColor": "#eef1f8",
    "tertiaryColor": "#ffffff",
    "nodeBorder": "#2f5fdc",
    "clusterBkg": "#f6f7fb",
    "clusterBorder": "#c7d0e0",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "15px"
  },
  "htmlLabels": true,
  "flowchart": { "curve": "basis", "useMaxWidth": false }
}}%%`;

export const DIAGRAM_POSITION = `${MERMAID_CONFIG}
flowchart LR
    P1["Ch.1 自動化の目的を理解する"] --> P2["Ch.2 自動化の準備をする"]
    P2 --> P3["Ch.3 自動化アーキテクチャを設計する"]
    P2 --> P4["2.1 インフラ構成の理解"]
    P2 --> P5["2.2 ツール・戦略の評価プロセス"]
    classDef current fill:#e8eefd,stroke:#2f5fdc,stroke-width:2px,color:#1b2333;
    classDef sub fill:#eef1f8,stroke:#c7d0e0,stroke-width:1px,color:#1b2333;
    class P2 current;
    class P1,P3 sub;
    class P4,P5 sub;`;

export const DIAGRAM_TESTABILITY = `${MERMAID_CONFIG}
flowchart TD
    subgraph TBD["SUT設計フェーズ"]
        TB_F1["機能要件の設計"]
        TB_F2["非機能要件の設計"]
        TB_F2 --> TB_T["テスト容易性の設計"]
    end
    TB_T --> TB_O["Observability<br>観測可能性"]
    TB_T --> TB_C["Controllability<br>制御可能性"]
    TB_T --> TB_A["Architecture Transparency<br>アーキテクチャの透明性"]
    TB_O --> TB_R["TAEが効率よく<br>自動テストを実装できる"]
    TB_C --> TB_R
    TB_A --> TB_R
    classDef aspect fill:#e8eefd,stroke:#2f5fdc,stroke-width:1.5px,color:#1b2333;
    classDef result fill:#e6f7ef,stroke:#1a8a5f,stroke-width:1.5px,color:#1b2333;
    class TB_O,TB_C,TB_A aspect;
    class TB_R result;`;

export const DIAGRAM_ENVS = `${MERMAID_CONFIG}
flowchart LR
    V_A["ローカル開発環境<br>白箱テスト・<br>コンポーネントテスト"] -.-> V_B["ビルド環境<br>静的解析・<br>低レベルテスト"]
    V_B -.-> V_C["統合環境<br>黒箱テスト<br>(UI/APIテスト)"]
    V_C -.-> V_D["プレプロダクション環境<br>非機能テスト・UAT"]
    V_D -.-> V_E["本番/運用環境<br>カナリア/Blue-Green・<br>A/Bテスト"]
    classDef env fill:#eef1f8,stroke:#8891a3,stroke-width:1px,color:#1b2333;
    classDef monitored fill:#e8eefd,stroke:#2f5fdc,stroke-width:1.5px,color:#1b2333;
    class V_A,V_B env;
    class V_C,V_D,V_E monitored;`;

export const DIAGRAM_SUT = `${MERMAID_CONFIG}
flowchart TD
    S_Start(["SUT分析の開始"]) --> S_Q1{"どのテストプロセス活動<br>を自動化するか?"}
    S_Start --> S_Q2{"どのテストレベルを<br>サポートするか?"}
    S_Start --> S_Q3{"どのテストタイプを<br>サポートするか?"}
    S_Start --> S_Q4{"どの役割・スキルセット<br>を想定するか?"}
    S_Start --> S_Q5{"どの製品/製品群を<br>サポートするか?"}
    S_Start --> S_Q6{"どんなSUTと<br>互換性が必要か?"}
    S_Start --> S_Q7{"テストデータの<br>可用性・品質は?"}
    S_Start --> S_Q8{"到達困難なケースを<br>どうエミュレートするか?"}
    S_Q1 & S_Q2 & S_Q3 & S_Q4 & S_Q5 & S_Q6 & S_Q7 & S_Q8 --> S_Req["自動化アプローチ/<br>アーキテクチャの要件定義"]
    classDef q fill:#eef1f8,stroke:#8891a3,stroke-width:1px,color:#1b2333;
    classDef req fill:#e8eefd,stroke:#2f5fdc,stroke-width:1.5px,color:#1b2333;
    class S_Q1,S_Q2,S_Q3,S_Q4,S_Q5,S_Q6,S_Q7,S_Q8 q;
    class S_Req req;`;

export const DIAGRAM_TOOLS = `${MERMAID_CONFIG}
flowchart LR
    R_Tool["候補ツール"] --> R_R1["言語/技術・IDE対応"]
    R_Tool --> R_R2["環境設定の柔軟性"]
    R_Tool --> R_R3["テストデータ管理"]
    R_Tool --> R_R4["対応テストタイプ"]
    R_Tool --> R_R5["レポーティング機能"]
    R_Tool --> R_R6["他ツールとの連携性"]
    R_Tool --> R_R7["拡張性・保守性・<br>変更容易性・互換性・信頼性"]
    R_R1 & R_R2 & R_R3 & R_R4 & R_R5 & R_R6 & R_R7 --> R_Decision["比較表を基に<br>ツール/ツールセットを提案"]
    R_Decision --> R_Approval["ステークホルダーへの<br>提示・承認"]
    classDef req fill:#eef1f8,stroke:#8891a3,stroke-width:1px,color:#1b2333;
    classDef decide fill:#e8eefd,stroke:#2f5fdc,stroke-width:1.5px,color:#1b2333;
    class R_R1,R_R2,R_R3,R_R4,R_R5,R_R6,R_R7 req;
    class R_Decision,R_Approval decide;`;

export const DIAGRAM_SUMMARY = `${MERMAID_CONFIG}
flowchart TD
    M_Root["Ch.2 テスト自動化の準備"] --> M_Infra
    M_Root --> M_Eval
    subgraph M_Infra["インフラ構成の理解"]
        M_Test["テスト容易性<br>Observability・Controllability・<br>Architecture Transparency"]
        M_Config["構成要素<br>識別子・環境変数・デプロイ変数"]
        M_Env["環境の種類<br>ローカル〜本番の5例"]
    end
    subgraph M_Eval["評価プロセス"]
        M_Sut["SUT分析<br>8つの検討観点"]
        M_ToolEval["ツール評価<br>比較表・7つの技術要件"]
    end
    classDef root fill:#2f5fdc,stroke:#1e3fa0,stroke-width:1.5px,color:#ffffff;
    classDef leaf fill:#ffffff,stroke:#c7d0e0,stroke-width:1px,color:#1b2333;
    class M_Root root;
    class M_Test,M_Config,M_Env,M_Sut,M_ToolEval leaf;`;
