export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#ffffff",
    "primaryColor": "#e7eafb",
    "primaryBorderColor": "#3b4fc2",
    "primaryTextColor": "#29348a",
    "lineColor": "#726858",
    "secondaryColor": "#f7f3ea",
    "tertiaryColor": "#efe8d8",
    "mainBkg": "#ffffff",
    "nodeTextColor": "#2b2420",
    "nodeBorder": "#e2d9c8",
    "clusterBkg": "#f7f3ea",
    "clusterBorder": "#e2d9c8",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "htmlLabels": true,
  "flowchart": { "curve": "basis", "wrappingWidth": 460, "useMaxWidth": false }
}}%%`;

export const DIAGRAM_CH4_OVERVIEW = `${MERMAID_CONFIG}
flowchart TD
    T["第4章　Implementing Test Automation　学習時間150分"]
    T --> A["4.1　テスト自動化の開発　パイロットとデプロイのガイドライン　K3"]
    A --> B["4.2　テスト自動化開発に伴うリスク　K4"]
    B --> C["4.3　テスト自動化ソリューションの保守性　K2"]

    classDef hub fill:#e7eafb,stroke:#3b4fc2,color:#29348a,stroke-width:1.5px;
    classDef done fill:#dcefe3,stroke:#1f4a36,color:#1f4a36,stroke-width:1.5px;
    class T hub;
    class C done;`;

export const DIAGRAM_PILOT_FLOW = `${MERMAID_CONFIG}
flowchart TD
    START(["パイロット開始"]) --> PLAN["言語・ツール・テストレベル・テストケース・開発アプローチを評価"]
    PLAN --> PROTO["初期プロトタイプを作成　要件に応じて複数作成し比較"]
    PROTO --> TIMELINE["タイムラインを設定し定期的に進捗をチェック"]
    TIMELINE --> CICD["CI・CDへの統合を試みる　問題を早期に発見するため"]
    CICD --> RISKCHECK{"未対応リスクが残っているか"}
    RISKCHECK -->|Yes| MITIGATE["リスクを識別し緩和策を実施"]
    MITIGATE --> TIMELINE
    RISKCHECK -->|No| NONTECH["非技術面を評価　チームの知識と経験　チーム体制　ライセンスと組織ルール　対象テストレベル"]
    NONTECH --> EVAL["TAEとテストマネージャーが成功・失敗を評価"]
    EVAL --> DECISION{"本格展開する価値があるか"}
    DECISION -->|Yes| SCALE(["本格展開へ移行"])
    DECISION -->|No| REVISE(["アプローチを見直し再パイロット"])

    classDef hub fill:#e7eafb,stroke:#3b4fc2,color:#29348a,stroke-width:1.5px;
    classDef box fill:#f6ecd3,stroke:#7d5c14,color:#5c4310,stroke-width:1.5px;
    classDef done fill:#dcefe3,stroke:#1f4a36,color:#1f4a36,stroke-width:1.5px;
    class START hub;
    class RISKCHECK,DECISION box;
    class SCALE done;`;

export const DIAGRAM_DEPLOYMENT_RISKS = `${MERMAID_CONFIG}
flowchart TB
    ROOT["テスト自動化におけるデプロイリスク"]
    ROOT --> GEN["一般的なデプロイリスク"]
    ROOT --> TECH["技術的デプロイリスク"]

    GEN --> G1["ファイアウォールの開放設定"]
    GEN --> G2["リソース使用率　CPU・RAM"]
    GEN --> G3["ネットワーク接続と信頼性"]
    GEN --> G4["モバイル実機の電源・充電・ネットワーク接続"]

    TECH --> T1["パッケージング　Packaging"]
    TECH --> T2["ロギング　Logging"]
    TECH --> T3["テスト構造化　Test Structuring"]
    TECH --> T4["更新　Updating"]

    classDef hub fill:#e7eafb,stroke:#3b4fc2,color:#29348a,stroke-width:1.5px;
    classDef box fill:#f6ecd3,stroke:#7d5c14,color:#5c4310,stroke-width:1.5px;
    classDef done fill:#efe3f2,stroke:#4a2757,color:#4a2757,stroke-width:1.5px;
    class ROOT hub;
    class GEN box;
    class TECH done;`;

export const DIAGRAM_RISK_FLOW = `${MERMAID_CONFIG}
flowchart LR
    A["アーキテクチャ設計時にTAF-SUT間のインターフェースを検討"] --> B["パッケージング・ロギング・テストハーネスツールを選定"]
    B --> C["パイロット実施中にデプロイリスクを識別"]
    C --> D1["一般的リスク　FW・リソース・ネットワーク"]
    C --> D2["技術的リスク　パッケージング・ログ・構造化・更新"]
    D1 --> E["緩和策を計画・実施"]
    D2 --> E
    E --> F["信頼できる品質ゲートとして継続運用"]

    classDef hub fill:#e7eafb,stroke:#3b4fc2,color:#29348a,stroke-width:1.5px;
    classDef done fill:#dcefe3,stroke:#1f4a36,color:#1f4a36,stroke-width:1.5px;
    class A hub;
    class F done;`;

export const DIAGRAM_HARDCODING_AVOIDANCE = `${MERMAID_CONFIG}
flowchart LR
    A["値をコードに直接埋め込む　ハードコーディング"] -->|保守コスト増大| B["変更のたびに複数箇所を修正"]
    C["データ駆動テスト　DDT　外部データソース化"] -->|保守コスト低減| D["1箇所のデータ変更で全テストに反映"]
    E["変化しない値"] --> F["定数　constant　として定義"]

    classDef box fill:#f6ecd3,stroke:#7d5c14,color:#5c4310,stroke-width:1.5px;
    classDef hub fill:#e7eafb,stroke:#3b4fc2,color:#29348a,stroke-width:1.5px;
    classDef done fill:#dcefe3,stroke:#1f4a36,color:#1f4a36,stroke-width:1.5px;
    class A box;
    class C hub;
    class D,F done;`;

export const DIAGRAM_CH4_SUMMARY = `${MERMAID_CONFIG}
flowchart TD
    P1["4.1 開発　パイロットのスコープ・言語・ツール・テストレベルを評価し小さく試して方向性を決める"]
    P2["4.2 リスク　一般的リスクと技術的リスクを識別し緩和する"]
    P3["4.3 保守性　クリーンコード原則・命名規則・デザインパターン・静的解析で長期的に保守可能な状態を保つ"]
    P1 --> P2 --> P3
    P3 -.->|継続的な改善は第8章へ| P4["第8章　Continuous Improvement"]

    classDef hub fill:#e7eafb,stroke:#3b4fc2,color:#29348a,stroke-width:1.5px;
    classDef done fill:#dcefe3,stroke:#1f4a36,color:#1f4a36,stroke-width:1.5px;
    class P1 hub;
    class P3,P4 done;`;
