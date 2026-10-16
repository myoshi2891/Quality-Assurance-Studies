export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#fffdf8",
    "primaryColor": "#fffdf8",
    "primaryTextColor": "#2b2620",
    "primaryBorderColor": "#c9bfa8",
    "lineColor": "#8a7f68",
    "secondaryColor": "#f3ede2",
    "tertiaryColor": "#faf7f2",
    "mainBkg": "#fffdf8",
    "nodeTextColor": "#2b2620",
    "nodeBorder": "#c9bfa8",
    "clusterBkg": "#fbf8f2",
    "clusterBorder": "#e4dbc9",
    "edgeLabelBackground": "#fffdf8",
    "fontFamily": "Noto Sans JP, -apple-system, BlinkMacSystemFont, sans-serif",
    "fontSize": "15px"
  },
  "htmlLabels": true,
  "flowchart": { "curve": "basis" }
}}%%`;

const CLASSDEFS = `
    classDef default fill:#fffdf8,stroke:#c9bfa8,color:#2b2620
    classDef box fill:#f5ead0,stroke:#8a6a1f,color:#5c4310
    classDef hub fill:#e0e3fa,stroke:#3538a6,color:#22246b
    classDef done fill:#dcf3e3,stroke:#1f6b3f,color:#154d2c
`;

export const DIAGRAM_ROADMAP = `${MERMAID_CONFIG}
flowchart TD
    C1["第1章　導入と目的　45分"]:::box
    C2["第2章　準備　180分"]
    C3["第3章　アーキテクチャ　210分"]
    C4["第4章　実装　150分"]
    C5["第5章　CI・CD統合　90分"]
    C6["第6章　レポーティング　150分"]
    C7["第7章　検証　135分"]
    C8["第8章　継続的改善　210分"]
    C1 --> C2 --> C3 --> C4 --> C5 --> C6 --> C7 --> C8
${CLASSDEFS}`;

export const DIAGRAM_PURPOSE3 = `${MERMAID_CONFIG}
flowchart TB
    A1["①テストスイートの制御・セットアップ"]:::box
    A2["②テストの自動実行"]:::hub
    A3["③実際の結果と期待結果の比較"]:::done
    A1 --> SUT
    A2 --> SUT
    A3 --> SUT
    SUT["SUT　テスト対象システム"]
${CLASSDEFS}`;

export const DIAGRAM_DECISION = `${MERMAID_CONFIG}
flowchart TD
    Q["自動化するかどうかの判断"]:::hub --> D1{"結果は機械で判定可能か"}
    D1 -- はい --> D2{"テストオラクルを実装できるか"}
    D1 -- いいえ --> M["手動テストが必要　限界①③に該当"]:::box
    D2 -- はい --> AUTO["自動化に適する"]:::done
    D2 -- いいえ --> M2["手動テストが必要　限界④に該当"]:::box
${CLASSDEFS}`;

export const DIAGRAM_WATERFALL = `${MERMAID_CONFIG}
flowchart TB
    R["要件定義"] --> D["設計"]
    D --> I["実装　自動化構築が並行・後追いで進む"]:::hub
    I --> V["検証　テスト実行はここで実施"]:::box
    V --> M["保守"]
${CLASSDEFS}`;

export const DIAGRAM_VMODEL = `${MERMAID_CONFIG}
flowchart TB
    L1["要件定義"]:::hub --> L2["方式設計"]
    L2 --> L3["詳細設計"]
    L3 --> L4["実装"]
    R5["コンポーネントテスト　TAF"] --> R4["コンポーネント統合テスト　TAF"]
    R4 --> R3["システムテスト　TAF"]
    R3 --> R2["システム統合テスト　TAF"]
    R2 --> R1["受け入れテスト　TAF"]:::done
    L1 -.->|"対応"| R1
    L2 -.->|"対応"| R2
    L2 -.->|"対応"| R3
    L3 -.->|"対応"| R4
    L4 --> R5
${CLASSDEFS}`;

export const DIAGRAM_AGILE = `${MERMAID_CONFIG}
flowchart TB
    S["スプリント計画　TAEとビジネス代表が共同でロードマップ決定"]:::hub --> P["ペアプログラミング・コードレビュー"]
    P --> A["頻繁な自動テスト実行"]
    A --> G["サイロの排除　開発者・テスター・ステークホルダーが協働"]
    G --> IS["スプリント内自動化　in-sprint automation"]:::done
${CLASSDEFS}`;

export const DIAGRAM_TOOLSELECT = `${MERMAID_CONFIG}
flowchart TD
    Start["SUTの分析開始"]:::hub --> Req["プロジェクト要件の特定　ツール選定のベースライン"]
    Req --> Type["SUTの種類は　UIあり・なし　Web・モバイル等"]
    Type --> Cost["コストを考慮した選択肢の絞り込み　COTSまたはOSSベースの自作"]
    Cost --> Skill{"チームのプログラミング経験は"}
    Skill -- 少ない・なし --> LowCode["ローコード・ノーコードツールを検討"]
    Skill -- 十分にある --> LangMatch["SUTと同じ言語のツールも検討"]
    LangMatch --> Benefit["開発者との協働・デバッグ効率が向上　チーム間の相互トレーニングが容易"]:::done
${CLASSDEFS}`;
