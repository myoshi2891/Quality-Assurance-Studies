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
    "nodeBorder": "#3b4fc2",
    "clusterBkg": "#f7f3ea",
    "clusterBorder": "#e2d9c8",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "htmlLabels": true,
  "flowchart": { "curve": "basis" }
}}%%`;

export const DIAGRAM_CH4_OVERVIEW = `${MERMAID_CONFIG}
flowchart TD
    T["第4章　Implementing Test Automation　学習時間150分"]
    T --> A["4.1　テスト自動化の開発　パイロットとデプロイのガイドライン　K3"]
    T --> B["4.2　テスト自動化開発に伴うリスク　一般的・技術的デプロイリスク　K4"]
    T --> C["4.3　テスト自動化ソリューションの保守性　クリーンコード原則と設計　K2"]
    A -->|開発したTAF・TASを展開| B
    B -->|リスクに対処し長期運用へ| C`;

export const DIAGRAM_PILOT_FLOW = `${MERMAID_CONFIG}
flowchart TD
    START(["パイロット開始"]) --> PLAN["言語・ツール・テストレベル・テストケース・開発アプローチを評価"]
    PLAN --> PROTO["初期プロトタイプを作成　要件に応じて複数作成し比較"]
    PROTO --> CI["CI・CDパイプラインへ早期に統合　自動実行・結果通知を確認"]
    CI --> EVAL{"成功基準を満たしたか？"}
    EVAL -->|Yes| EXPAND["本番展開へスケールアップ　第5章「展開」へ進む"]
    EVAL -->|No| ADAPT["アプローチ・ツール・言語の見直しまたはパイロット中止の判断"]
    ADAPT --> PLAN`;

export const DIAGRAM_DEPLOYMENT_RISKS = `${MERMAID_CONFIG}
flowchart TB
    ROOT["テスト自動化におけるデプロイリスク"]
    ROOT --> GEN["一般的なデプロイリスク"]
    ROOT --> TECH["技術的デプロイリスク"]

    GEN --> G1["誤った期待　銀の弾丸視"]
    GEN --> G2["スキルのミスマッチ"]
    GEN --> G3["組織のレジスタンス"]

    TECH --> T1["パッケージング　依存関係・共有ライブラリ管理"]
    TECH --> T2["ロギング　粒度不足・過剰ログ・一貫性欠如"]
    TECH --> T3["テスト構造化　ハーネス・スイート・フィクスチャの設計不備"]
    TECH --> T4["更新　SUT変更・OSアップデートへの追従不能"]`;

export const DIAGRAM_RISK_FLOW = `${MERMAID_CONFIG}
flowchart LR
    A["アーキテクチャ設計時にTAF-SUT間のインターフェースを検討"] --> B["パッケージング・ロギング・テストハーネスツールを選定"]
    B --> C["パイロット実施中にデプロイリスクを識別"]
    C --> D["リスクを緩和する具体的な仕組みを実装"]
    D --> E["本番展開・長期運用へ安全に移行"]`;

export const DIAGRAM_HARDCODING_AVOIDANCE = `${MERMAID_CONFIG}
flowchart LR
    A["値をコードに直接埋め込む　ハードコーディング"] -->|保守コスト増大| B["変更のたびに複数箇所を修正"]
    C["データ駆動テスト　DDT　外部データソース化"] -->|保守コスト低減| D["1箇所のデータ変更で全テストに反映"]
    E["変化しない値"] --> F["定数　constant　として定義"]`;

export const DIAGRAM_CH4_SUMMARY = `${MERMAID_CONFIG}
flowchart TD
    P1["4.1 開発　パイロットのスコープ・言語・ツール・テストレベルを評価し小さく試して方向性を決める"]
    P2["4.2 リスク　一般的リスクと技術的リスクを識別し緩和する"]
    P3["4.3 保守性　クリーンコード原則・命名規則・デザインパターン・静的解析で長期的に保守可能な状態を保つ"]
    P1 --> P2 --> P3
    P3 -.->|継続的な改善は第8章へ| P4["第8章　Continuous Improvement"]`;
