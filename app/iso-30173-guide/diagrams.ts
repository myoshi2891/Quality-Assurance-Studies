// ISO/IEC 30173:2023 Guide Mermaid Diagrams
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#07111e",
    "primaryColor": "#16233a",
    "mainBkg": "#16233a",
    "primaryTextColor": "#e6edf7",
    "primaryBorderColor": "#7c9eff",
    "lineColor": "#9cb0cf",
    "signalColor": "#c7d6ec",
    "secondaryColor": "#0d1b2e",
    "tertiaryColor": "#0d1b2e",
    "nodeBorder": "#7c9eff",
    "clusterBkg": "#0d1b2e",
    "clusterBorder": "#2a3f63",
    "edgeLabelBackground": "#0d1b2e",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "15px"
  },
  "htmlLabels": true,
  "flowchart": {
    "curve": "basis",
    "nodeSpacing": 50,
    "rankSpacing": 50,
    "padding": 15
  }
}}%%`;

export const DIAGRAMS: Record<string, string> = {
  "mmd-1": `${MERMAID_CONFIG}
flowchart TB
    P0["ISO/IEC 30173 の目的"]
    P1["目的1：デジタルツインの概念と構成を理解する共通基盤を、関連概念の定義で提供する"]
    P2["目的2：対象エンティティとの関係でデジタルツインのライフサイクルを概観する"]
    P3["目的3：標準・仕様・デジタルツインの利用を開発するための基盤を提供する"]
    P0 --> P1
    P0 --> P2
    P0 --> P3
    classDef root fill:#1e3a8a,stroke:#93c5fd,color:#ffffff
    classDef goal fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e
    class P0 root
    class P1,P2,P3 goal
`,
  "mmd-2": `${MERMAID_CONFIG}
flowchart LR
    TE["対象エンティティ<br/>（現実側）"]
    DR["デジタル表現<br/>（デジタル側）"]
    TE <-->|"データ接続<br/>（適切な同期レート）"| DR
    DR --> CAP["能力の例<br/>接続 / 統合 / 分析 / シミュレーション<br/>可視化 / 最適化 / 協調"]
    classDef real fill:#fef3c7,stroke:#b45309,color:#451a03
    classDef digital fill:#dbeafe,stroke:#1d4ed8,color:#1e3a8a
    classDef cap fill:#dcfce7,stroke:#15803d,color:#14532d
    class TE real
    class DR digital
    class CAP cap
`,
  "mmd-3": `${MERMAID_CONFIG}
flowchart TB
    subgraph SG_BASE["土台"]
        B1["序文 / 1 適用範囲 / 2 引用規格なし"]
        B2["3 用語と定義（3.1〜3.5）"]
        B3["4 記号・略語"]
    end
    subgraph SG_CORE["中核"]
        C1["5 概念（5.1〜5.7）"]
        C2["6 ステークホルダー"]
        C3["7 機能的な見方"]
    end
    subgraph SG_ANNEX["参考情報"]
        A1["附属書A：他規格の定義比較"]
        A2["附属書B：記号論"]
    end
    B1 --> B2
    B2 --> B3
    B3 --> C1
    C1 --> C2
    C2 --> C3
    C3 --> A1
    C3 --> A2
`,
  "mmd-4": `${MERMAID_CONFIG}
flowchart TB
    CTX["デジタルツイン システムコンテキスト（図1）"]
    X1["デジタルツインシステム"]
    X2["サービス"]
    X3["応用領域"]
    X4["インフラ"]
    X5["システムの側面"]
    CTX --> X1
    CTX --> X2
    CTX --> X3
    CTX --> X4
    CTX --> X5
    classDef ctx fill:#1e3a8a,stroke:#93c5fd,color:#ffffff
    classDef part fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e
    class CTX ctx
    class X1,X2,X3,X4,X5 part
`,
  "mmd-5": `${MERMAID_CONFIG}
flowchart LR
    T1["コンポーネント<br/>デジタルツイン"]
    T2["アセット<br/>デジタルツイン"]
    T3["システム<br/>デジタルツイン"]
    T4["プロセス<br/>デジタルツイン"]
    T1 --> T2 --> T3 --> T4
`,
  "mmd-6": `${MERMAID_CONFIG}
flowchart TB
    SH["デジタルツイン ステークホルダー（図3）"]
    SYS["システムのステークホルダー"]
    ECO["エコシステムパートナー"]
    SH --> SYS
    SH --> ECO
    SYS --> S1["開発者"]
    SYS --> S2["リソース提供者"]
    SYS --> S3["インテグレーター"]
    SYS --> S4["ユーザー"]
    SYS --> S5["運用者"]
    ECO --> E1["インフラ提供者"]
    ECO --> E2["サービス提供者"]
    ECO --> E3["標準化団体"]
    ECO --> E4["政府・コミュニティ"]
    classDef root fill:#1e3a8a,stroke:#93c5fd,color:#ffffff
    classDef grp fill:#fef3c7,stroke:#b45309,color:#451a03
    classDef leaf fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e
    class SH root
    class SYS,ECO grp
    class S1,S2,S3,S4,S5,E1,E2,E3,E4 leaf
`,
  "mmd-7": `${MERMAID_CONFIG}
flowchart TB
    R1["ISO/IEC 30141<br/>IoT参照アーキテクチャ"]
    R2["ISO 23247 シリーズ<br/>製造向けデジタルツインフレームワーク"]
    R3["ISO/IEC 30173<br/>概念と用語（汎用）"]
    R4["ISO/IEC 30172<br/>ユースケース"]
    R5["ISO/IEC 20924<br/>IoT用語"]
    R1 -->|"基礎になる"| R2
    R5 -->|"entity の定義の出典"| R3
    R3 --- R4
    R3 -.->|"用語の共通基盤"| R2
`,
  "mmd-8": `${MERMAID_CONFIG}
flowchart LR
    SPEC["ISO/IEC 30173<br/>共通の用語と概念"]
    CPT["DTC CPT<br/>能力で要件を整理"]
    DTDL["Azure Digital Twins + DTDL<br/>モデル言語とサービス"]
    DITTO["Eclipse Ditto + WoT<br/>オープンソースの実装基盤"]
    ISO23247["ISO 23247<br/>製造向けフレームワーク"]
    SPEC -.->|"用語の土台"| CPT
    SPEC -.->|"用語の土台"| DTDL
    SPEC -.->|"用語の土台"| DITTO
    SPEC -.->|"用語の土台"| ISO23247
`,
  "mmd-9": `${MERMAID_CONFIG}
flowchart TB
    Q0["対象システムを評価する"]
    Q1{"対象エンティティは<br/>明確か"}
    Q2{"デジタル表現は<br/>あるか"}
    Q3{"対象との間に<br/>データ接続があるか"}
    Q4{"用途に適切な<br/>同期レートが定義済みか"}
    Q5{"物理状態とデジタル状態の<br/>収束を確認できるか"}
    OK["デジタルツインの定義に合致する"]
    NG1["まず対象を定義する"]
    NG2["デジタル表現を作る"]
    NG3["静的なモデルにとどまる<br/>データ接続を設計する"]
    NG4["同期レートを要件化する"]
    NG5["状態のズレを測る<br/>収束の確認方法を設計する"]
    Q0 --> Q1
    Q1 -->|"はい"| Q2
    Q1 -->|"いいえ"| NG1
    Q2 -->|"はい"| Q3
    Q2 -->|"いいえ"| NG2
    Q3 -->|"はい"| Q4
    Q3 -->|"いいえ"| NG3
    Q4 -->|"はい"| Q5
    Q4 -->|"いいえ"| NG4
    Q5 -->|"はい"| OK
    Q5 -->|"いいえ"| NG5
`,
  "mmd-10": `${MERMAID_CONFIG}
flowchart TB
    L1["ステップ1：序文と適用範囲を読む<br/>なぜ共通用語が必要かを知る"]
    L2["ステップ2：3.1.1 と 3.1.2 を精読<br/>定義を部品に分解する"]
    L3["ステップ3：第3章の用語を一通り読む<br/>一般・データ・モデル・性能・応用"]
    L4["ステップ4：第5章の概念を読む<br/>関連概念・応用・システムコンテキスト・種類"]
    L5["ステップ5：第6章と第7章を読む<br/>関係者と機能的な見方"]
    L6["ステップ6：附属書Aで他規格の定義と比較"]
    L7["ステップ7：ISO 23247 や 30172 などへ進む"]
    L1 --> L2 --> L3 --> L4 --> L5 --> L6 --> L7
`
};

