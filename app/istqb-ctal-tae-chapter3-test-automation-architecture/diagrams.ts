/**
 * Mermaid diagram definitions for CTAL-TAE Chapter 3
 * Configured according to .claude/skills/fix-mermaid/SKILL.md
 */

export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#ffffff",
    "primaryColor": "#eaf0ff",
    "primaryBorderColor": "#2f5fe0",
    "primaryTextColor": "#1e2430",
    "lineColor": "#8890a0",
    "secondaryColor": "#f1f4fb",
    "tertiaryColor": "#ffffff",
    "mainBkg": "#eaf0ff",
    "nodeTextColor": "#1e2430",
    "nodeBorder": "#2f5fe0",
    "clusterBkg": "#f7f8fb",
    "clusterBorder": "#cbd3e1",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "15px"
  },
  "htmlLabels": true,
  "flowchart": { "curve": "basis", "nodeSpacing": 60, "rankSpacing": 60 }
}}%%`;

export const DIAGRAM_OVERVIEW = `${MERMAID_CONFIG}
flowchart TB
    OV1["3.1.1 gTAA<br/>抽象的な参照モデルを理解する"] --> OV2["3.1.2 TAS設計<br/>要件からTAAを具体化する"]
    OV2 --> OV3["3.1.3 TAFレイヤー化<br/>Test Scripts / Business Logic / Core Librariesに分割する"]
    OV3 --> OV4["3.1.4 自動化アプローチ<br/>Capture/Playback〜BDDまで7手法を使い分ける"]
    OV4 --> OV5["3.1.5 設計原則とパターン<br/>OOP・SOLID・Facade・POM・Flow Modelで保守性を高める"]

    classDef step fill:#dbeafe,stroke:#1d4ed8,color:#1e293b;
    class OV1,OV2,OV3,OV4,OV5 step`;

export const DIAGRAM_GTAA = `${MERMAID_CONFIG}
flowchart TB
    subgraph EXT["外部システム"]
        PM["プロジェクト管理"]
        TM["テスト管理"]
        CM["構成管理<br/>(CI/CD, 環境, テストウェア)"]
    end

    subgraph GTAA["gTAA (Generic Test Automation Architecture)"]
        GEN["Test Generation<br/>テスト生成（任意）"]
        DEF["Test Definition<br/>テスト定義"]
        EXE["Test Execution<br/>テスト実行 / ログ / レポート"]
        ADA["Test Adaptation<br/>テスト適応（アダプタ層）"]

        GEN --> DEF --> EXE
        DEF --> ADA
        EXE --> ADA
    end

    SUT["SUT<br/>(System Under Test)"]

    PM <-. プロジェクト管理IF .-> GTAA
    TM <-. テスト管理IF .-> DEF
    CM <-. 構成管理IF .-> EXE
    ADA <-- SUTインターフェース --> SUT

    classDef ext fill:#f1f5f9,stroke:#64748b,color:#1e293b;
    classDef core fill:#dbeafe,stroke:#1d4ed8,color:#1e293b;
    classDef sut fill:#fee2e2,stroke:#dc2626,color:#1e293b;
    class PM,TM,CM ext
    class GEN,DEF,EXE,ADA core
    class SUT sut`;

export const DIAGRAM_TAA_DESIGN = `${MERMAID_CONFIG}
flowchart LR
    TAA["TAA設計で検討すべき事項"]
    TAA --> T1["テスト自動化ツール・<br/>専用ライブラリの選定"]
    TAA --> T2["プラグイン／<br/>コンポーネントの開発"]
    TAA --> T3["接続性・IF要件の特定<br/>(FW, DB, URL/接続,<br/>モック/スタブ, MQ, プロトコル)"]
    TAA --> T4["テスト管理・<br/>欠陥管理ツールとの連携"]
    TAA --> T5["バージョン管理システム・<br/>リポジトリの活用"]

    classDef item fill:#eef2ff,stroke:#4f46e5,color:#1e293b;
    class T1,T2,T3,T4,T5 item`;

export const DIAGRAM_TAF_LAYERS = `${MERMAID_CONFIG}
flowchart TB
    subgraph L1["① Test Scripts層"]
        TS["テストケースのリポジトリ<br/>テストスイートのアノテーション<br/>（テストステップ／ユーザーフロー／API呼び出しを呼び出す）"]
    end
    subgraph L2["② Business Logic層"]
        BL["SUT依存のライブラリ<br/>Core Librariesのクラスを継承 or<br/>Facade経由で利用<br/>TAFをSUTに合わせてセットアップ"]
    end
    subgraph L3["③ Core Libraries層"]
        CL["SUTに依存しない共通ライブラリ<br/>同じ開発スタックの<br/>他プロジェクトでも再利用可能"]
    end

    TS -- "呼び出す" --> BL
    BL -- "継承 / Facade利用" --> CL
    TS -. "直接呼び出し禁止" .-> CL

    classDef l1 fill:#dbeafe,stroke:#1d4ed8,color:#1e293b;
    classDef l2 fill:#dcfce7,stroke:#16a34a,color:#1e293b;
    classDef l3 fill:#fef3c7,stroke:#d97706,color:#1e293b;
    class TS l1
    class BL l2
    class CL l3`;

export const DIAGRAM_TAF_SCALING = `${MERMAID_CONFIG}
flowchart TB
    CORE["Core Libraries<br/>（全プロジェクト共通・再利用可能）"]

    subgraph P1["プロジェクト #1（TAE Aが担当）"]
        TAF1["TAF for App #1"]
        TAF2["TAF for App #2"]
    end

    subgraph P2["プロジェクト #2（TAE Bが担当）"]
        TAF3["TAF for App #3"]
    end

    CORE --> TAF1
    CORE --> TAF2
    CORE --> TAF3

    classDef core fill:#fef3c7,stroke:#d97706,color:#1e293b;
    classDef taf fill:#dbeafe,stroke:#1d4ed8,color:#1e293b;
    class CORE core
    class TAF1,TAF2,TAF3 taf`;

export const DIAGRAM_APPROACHES = `${MERMAID_CONFIG}
flowchart LR
    AP1["Capture/Playback<br/>録画型"]
    AP2["Linear Scripting<br/>線形スクリプティング"]
    AP3["Structured Scripting<br/>構造化スクリプティング"]
    AP3 --> AP4["Data-Driven Testing<br/>データ駆動テスト"]
    AP4 --> AP5["Keyword-Driven Testing<br/>キーワード駆動テスト"]

    AP6["Test-Driven Development<br/>テスト駆動開発"]
    AP7["Behavior-Driven Development<br/>振る舞い駆動開発"]

    classDef basic fill:#fee2e2,stroke:#dc2626,color:#1e293b;
    classDef mid fill:#fef3c7,stroke:#d97706,color:#1e293b;
    classDef adv fill:#dcfce7,stroke:#16a34a,color:#1e293b;
    classDef method fill:#e0e7ff,stroke:#4338ca,color:#1e293b;
    class AP1,AP2 basic
    class AP3 mid
    class AP4,AP5 adv
    class AP6,AP7 method`;

export const DIAGRAM_TDD_CYCLE = `${MERMAID_CONFIG}
flowchart LR
    RED["🔴 Red<br/>失敗するテストを1つ作成する"] --> GRN["🟢 Green<br/>テストを満たす<br/>最小限の実装を行う"]
    GRN --> REF["🔵 Refactor<br/>クリーンコード原則に沿って<br/>コードを最適化する"]
    REF -.次のテスト.-> RED

    classDef red fill:#fee2e2,stroke:#dc2626,color:#1e293b;
    classDef green fill:#dcfce7,stroke:#16a34a,color:#1e293b;
    classDef blue fill:#dbeafe,stroke:#1d4ed8,color:#1e293b;
    class RED red
    class GRN green
    class REF blue`;

export const DIAGRAM_FLOW_MODEL = `${MERMAID_CONFIG}
flowchart TB
    subgraph FM["Flow Modelパターン（二重Facade）"]
        direction LR
        FLOW["Flowクラス<br/>（ユーザーアクションの集合）"]
        POM1["Page Object<br/>ログイン画面"]
        POM2["Page Object<br/>検索画面"]
        POM3["Page Object<br/>注文画面"]
        FLOW --> POM1
        FLOW --> POM2
        FLOW --> POM3
    end

    TESTCASE["テストケース"] --> FLOW

    classDef flow fill:#dbeafe,stroke:#1d4ed8,color:#1e293b;
    classDef page fill:#dcfce7,stroke:#16a34a,color:#1e293b;
    classDef tc fill:#fef3c7,stroke:#d97706,color:#1e293b;
    class FLOW flow
    class POM1,POM2,POM3 page
    class TESTCASE tc`;

export const DIAGRAM_CHECKLIST = `${MERMAID_CONFIG}
flowchart TB
    START(["TAA設計を始める"]) --> Q1{"gTAAの4機能<br/>（生成・定義・実行・適応）を<br/>どのツールが担うか整理したか？"}
    Q1 -->|Yes| Q2{"TAF内のレイヤー構成<br/>（Test Scripts / Business Logic /<br/>Core Libraries）は明確か？"}
    Q1 -->|No| A1["gTAAの機能マッピングを行う"] --> Q1
    Q2 -->|Yes| Q3{"チームのスキルとSUTの<br/>変化頻度に見合った<br/>自動化アプローチを選んだか？"}
    Q2 -->|No| A2["レイヤーを再設計し、<br/>依存方向を一方向に統一する"] --> Q2
    Q3 -->|Yes| Q4{"要件に適した設計原則・<br/>デザインパターンを選定・<br/>適用したか？"}
    Q3 -->|No| A3["Capture/Playback〜BDDの<br/>比較表から適切な手法を選定する"] --> Q3
    Q4 -->|Yes| DONE(["保守性の高いTAAが完成"])
    Q4 -->|No| A4["要件（重複・変更頻度・並列実行等）に<br/>照らして原則・パターンを選び直す<br/>（Flow Modelは操作の重複が出てから）"] --> Q4

    classDef q fill:#fef3c7,stroke:#d97706,color:#1e293b;
    classDef a fill:#fee2e2,stroke:#dc2626,color:#1e293b;
    classDef s fill:#dcfce7,stroke:#16a34a,color:#1e293b;
    class Q1,Q2,Q3,Q4 q
    class A1,A2,A3,A4 a
    class START,DONE s`;
