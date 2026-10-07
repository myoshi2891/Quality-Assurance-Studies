const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontSize": "16px",
    "primaryColor": "#efe8d8",
    "primaryTextColor": "#2b2620",
    "primaryBorderColor": "#c9bfa4",
    "lineColor": "#8a8271",
    "background": "#fffdf7",
    "fontFamily": "Noto Sans JP, sans-serif",
    "mainBkg": "#efe8d8",
    "nodeBorder": "#c9bfa4",
    "nodeTextColor": "#2b2620",
    "edgeLabelBackground": "#fffdf7",
    "secondaryColor": "#efe8d8",
    "tertiaryColor": "#fffdf7",
    "clusterBkg": "#fffdf7",
    "clusterBorder": "#ddd3ba",
    "titleColor": "#34406b"
  },
  "htmlLabels": true,
  "flowchart": {
    "useMaxWidth": false,
    "htmlLabels": true,
    "curve": "basis"
  }
}}%%`;

export const DIAGRAM_VICIOUS = `${MERMAID_CONFIG}
flowchart LR
classDef box fill:#efe8d8,stroke:#c9bfa4,color:#2b2620
classDef hub fill:#34406b,stroke:#232d4d,color:#f7f3ea
A1[仕様変更や納期優先]:::hub --> A2[場当たり的な修正]:::box
A2 --> A3[複雑さと重複の増大]:::box
A3 --> A4[バグとリスクの増加]:::box
A4 --> A5[変更コストの上昇]:::box
A5 --> A1`;

export const DIAGRAM_VIRTUOUS = `${MERMAID_CONFIG}
flowchart LR
classDef box fill:#efe8d8,stroke:#c9bfa4,color:#2b2620
classDef hub fill:#34406b,stroke:#232d4d,color:#f7f3ea
classDef done fill:#3f6b4f,stroke:#2c4d38,color:#f7f3ea
B1[目的と理由を先に共有]:::hub --> B2[小さく作り継続的に統合]:::box
B2 --> B3[CLEANなコードとテストで品質確保]:::box
B3 --> B4[変更が怖くなくなる]:::box
B4 --> B5[すぐにフィードバックを反映できる]:::done
B5 --> B1`;

export const DIAGRAM_OVERVIEW = `${MERMAID_CONFIG}
flowchart TB
classDef box fill:#efe8d8,stroke:#c9bfa4,color:#2b2620
classDef hub fill:#34406b,stroke:#232d4d,color:#f7f3ea
classDef done fill:#3f6b4f,stroke:#2c4d38,color:#f7f3ea
P1[プラクティス1 目的 理由 対象を先に伝える]:::hub --> P2[プラクティス2 小さなバッチで作る]:::hub
P2 --> P3[プラクティス3 継続的に統合する]:::box
P3 --> P4[プラクティス4 協力しあう]:::box
P4 --> P5[プラクティス5 CLEANなコードを作る]:::hub
P5 --> P6[プラクティス6 まずテストを書く]:::box
P6 --> P7[プラクティス7 テストで振る舞いを明示する]:::box
P7 --> P8[プラクティス8 設計は最後に実装する]:::box
P8 --> P9[プラクティス9 レガシーコードをリファクタリングする]:::done`;

export const DIAGRAM_CI = `${MERMAID_CONFIG}
flowchart LR
classDef box fill:#efe8d8,stroke:#c9bfa4,color:#2b2620
classDef hub fill:#34406b,stroke:#232d4d,color:#f7f3ea
classDef done fill:#3f6b4f,stroke:#2c4d38,color:#f7f3ea
Dev[開発者がコードを変更]:::hub --> Commit[こまめにコミット]:::box
Commit --> Build[自動ビルド]:::box
Build --> Test[自動テスト実行]:::box
Test -->|成功| Merge[メインブランチに統合]:::done
Test -->|失敗| Fix[すぐに修正]:::box
Fix --> Commit`;

export const DIAGRAM_TDD = `${MERMAID_CONFIG}
flowchart LR
classDef box fill:#efe8d8,stroke:#c9bfa4,color:#2b2620
classDef hub fill:#34406b,stroke:#232d4d,color:#f7f3ea
classDef done fill:#3f6b4f,stroke:#2c4d38,color:#f7f3ea
Red[Red 失敗するテストを書く]:::hub --> Green[Green テストを通す最小限の実装]:::box
Green --> Refactor[Refactor 重複を除去し設計を整える]:::done
Refactor --> Red`;

export const DIAGRAM_REFACTOR = `${MERMAID_CONFIG}
flowchart TB
classDef box fill:#efe8d8,stroke:#c9bfa4,color:#2b2620
classDef hub fill:#34406b,stroke:#232d4d,color:#f7f3ea
classDef done fill:#3f6b4f,stroke:#2c4d38,color:#f7f3ea
L1[テストのないレガシーコードに直面]:::hub --> L2{"そのままテストを書けるか"}:::box
L2 -->|書ける| L2a[特性化テストを直接追加]:::box
L2 -->|書きにくい| L2b[継ぎ目 Seam を作ってから特性化テストを追加]:::box
L2a --> L3[テストで現状の振る舞いを固定]:::box
L2b --> L3
L3 --> L4[小さな単位でリファクタリング]:::box
L4 --> L5[テストが通ることを都度確認]:::box
L5 --> L6[安全に構造を改善できた状態]:::done`;

export const DIAGRAMS = {
  "diagram-vicious": DIAGRAM_VICIOUS,
  "diagram-virtuous": DIAGRAM_VIRTUOUS,
  "diagram-overview": DIAGRAM_OVERVIEW,
  "diagram-ci": DIAGRAM_CI,
  "diagram-tdd": DIAGRAM_TDD,
  "diagram-refactor": DIAGRAM_REFACTOR,
} as const;
