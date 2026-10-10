export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#0c1930",
    "primaryColor": "#101f3a",
    "primaryBorderColor": "#7c9eff",
    "primaryTextColor": "#e8edf7",
    "lineColor": "#9cb0cf",
    "secondaryColor": "#0c1930",
    "tertiaryColor": "#07111e",
    "nodeBorder": "#7c9eff",
    "clusterBkg": "#101f3a",
    "clusterBorder": "#1f2f4e",
    "edgeLabelBackground": "#101f3a",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "htmlLabels": true,
  "flowchart": { "curve": "basis" }
}}%%`;

export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart TD
    P1["Part 1: 一般概念<br/>用語と考え方の土台<br/>参考 informative"]
    P2["Part 2: テストプロセス<br/>組織・管理・動的テストの3階層<br/>規範 normative"]
    P3["Part 3: テスト文書化<br/>テスト計画書などのテンプレート<br/>規範 normative"]
    P4["Part 4: テスト技法<br/>同値分割・境界値分析など<br/>規範 normative"]
    P5["Part 5: キーワード駆動テスト<br/>自動化の枠組み"]
    P11["Part 11: AIベースシステムのテスト<br/>ガイドライン"]

    P1 -->|"用語と概念を提供"| P2
    P1 -->|"用語と概念を提供"| P3
    P1 -->|"用語と概念を提供"| P4
    P2 -->|"プロセスの成果物"| P3
    P2 -->|"設計工程で使う"| P4
    P1 -.->|"関連"| P5
    P1 -.->|"関連"| P11`;

export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart LR
    A["2013年版<br/>Concepts and definitions"] --> B["用語を整理<br/>他パートで使わないものは削除"]
    A --> C["概念を簡潔化・並べ替え"]
    A --> D["テストサブプロセスを削除"]
    B --> E["2022年版<br/>General concepts"]
    C --> E
    D --> F["プロセスのインスタンス化を追加"]
    F --> E
    E --> G["テスト戦略の内容を明確化"]
    E --> H["テストモデル中心の設計プロセス"]
    E --> I["メトリクスを本文へ移動"]
    E --> J["附属書A: システム特性と<br/>テストアプローチの例"]`;

export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart TD
    S["スタート"] --> A["序文とまえがきを読む<br/>全体の狙いを掴む"]
    A --> B["4.1 テストの基本概念<br/>静的動的 オラクル 独立性"]
    B --> C["4.2 リスクとテスト戦略<br/>ここが規格の核心"]
    C --> D["4.3 プロセス 文書 メトリクス<br/>Part 2, 3 への橋渡し"]
    D --> E["4.4 設計と実行<br/>Part 4 への橋渡し"]
    E --> F["4.5〜4.7 と附属書"]
    F --> G["3章の用語を辞書として引く"]
    G --> H["Part 2 へ進む"]`;

export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart TD
    T["ソフトウェアテスト"]
    T --> QM["品質マネジメントの一部"]
    T --> VV["検証と妥当性確認 V&V の一部"]
    T --> IT["テスト対象 test item"]
    T --> SD["静的テスト / 動的テスト"]
    T --> EX["網羅テストは不可能<br/>サンプリングが必要"]
    T --> HE["テストはヒューリスティック"]
    T --> PU["テストの目的"]
    T --> BA["テストベース"]
    T --> OR["テストオラクル"]
    T --> IN["テストの独立性"]`;

export const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart LR
    T["テスト"] --> S["静的テスト<br/>実行しない"]
    T --> D["動的テスト<br/>実行する"]
    S --> S1["要件レビュー"]
    S --> S2["コードレビュー"]
    S --> S3["静的解析ツール"]
    D --> D1["単体テスト"]
    D --> D2["結合テスト"]
    D --> D3["システムテスト"]`;

export const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart TD
    B["テストベース<br/>要件 仕様 ユーザーストーリー"] --> D["テスト設計"]
    D --> TC["テストケース<br/>入力 と 期待結果"]
    O["テストオラクル<br/>期待結果の拠り所"] --> TC
    TC --> RUN["テスト実行"]
    RUN --> AR["実際の結果<br/>actual result"]
    TC --> ER["期待結果<br/>expected result"]
    AR --> CMP{"一致するか"}
    ER --> CMP
    CMP -->|"一致"| OK["合格"]
    CMP -->|"不一致"| NG["インシデント報告を検討"]`;

export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart TD
    A["1. リスクの特定<br/>何が起こり得るか"] --> B["2. リスクの見積り<br/>起こりやすさ x 影響の大きさ"]
    B --> C["3. リスクへの対応<br/>テストで対処する部分を決める"]
    C --> D["テスト戦略に反映<br/>どのレベル・種類・技法をどの深さで実施するか"]
    D --> E["テスト実施"]
    E --> F{"リスクは許容範囲か"}
    F -->|"いいえ"| G["追加テスト または 他の対応"]
    G --> B
    F -->|"はい"| H["テスト完了の判断"]`;

export const DIAGRAM_8 = `${MERMAID_CONFIG}
flowchart LR
    U["単体テスト<br/>コンポーネント単位"] --> I["結合テスト<br/>連携部分"]
    I --> S["システムテスト<br/>システム全体"]
    S --> A["受入テスト<br/>利用者・顧客の視点"]`;

export const DIAGRAM_9 = `${MERMAID_CONFIG}
flowchart TD
    subgraph ORG["組織レベル"]
        OTP["組織テストプロセス<br/>テスト方針とテストプラクティスを策定・管理"]
    end
    subgraph MGMT["テスト管理レベル"]
        PLAN["テスト計画"] --> MON["テストの監視とコントロール"]
        MON --> COMP["テスト完了"]
    end
    subgraph DYN["動的テストレベル"]
        DES["テスト設計と実装"] --> ENV["テスト環境の構築と維持"]
        ENV --> EXE["テスト実行"]
        EXE --> INC["テストインシデントの報告"]
    end
    OTP -->|"方針・プラクティスを提供"| PLAN
    PLAN -->|"計画・指示"| DES
    EXE -->|"結果・進捗の報告"| MON`;

export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart LR
    G["汎用のテストプロセス<br/>29119-2 のモデル"] --> I1["プロジェクトAに当てはめる<br/>アジャイル 小規模"]
    G --> I2["プロジェクトBに当てはめる<br/>安全重要 大規模"]
    G --> I3["テストレベルごとに当てはめる<br/>単体 結合 システム"]`;

export const DIAGRAM_11 = `${MERMAID_CONFIG}
flowchart TD
    B["テストベース<br/>要件 仕様 リスク"] --> M["1. テストモデルを作る<br/>対象をどう捉えるか"]
    M --> C["2. テストカバレッジアイテムを導出<br/>何を網羅するかの単位"]
    C --> T["3. テストケースを導出<br/>入力 と 期待結果"]
    T --> S["4. テストセット・テスト手順に組み立てる"]
    S --> E["テスト実行"]`;

export const DIAGRAM_12 = `${MERMAID_CONFIG}
flowchart TD
    TD["テスト設計技法"] --> SP["仕様ベース<br/>要求・仕様に着目"]
    TD --> ST["構造ベース<br/>内部構造に着目"]
    TD --> EB["経験ベース<br/>テスト担当者の経験に着目"]
    SP --> SP1["同値分割"]
    SP --> SP2["境界値分析"]
    SP --> SP3["ディシジョンテーブル"]
    SP --> SP4["原因結果グラフ"]
    SP --> SP5["組合せテスト ペアワイズ"]
    SP --> SP6["ランダムテスト"]
    SP --> SP7["メタモルフィックテスト"]
    ST --> ST1["ステートメントテスト"]
    ST --> ST2["ブランチテスト"]
    ST --> ST3["ディシジョンテスト"]
    ST --> ST4["MC/DCテスト"]
    EB --> EB1["エラー推測"]
    TP["テストプラクティス<br/>設計技法とは別の区分"] --> TP1["探索的テスト"]`;

export const DIAGRAM_13 = `${MERMAID_CONFIG}
flowchart LR
    F["欠陥を発見"] --> FIX["修正"]
    FIX --> R["再テスト<br/>直ったか"]
    FIX --> G["回帰テスト<br/>他が壊れていないか"]
    R --> DONE["確認完了"]
    G --> DONE`;

export const DIAGRAM_14 = `${MERMAID_CONFIG}
flowchart LR
    T["テスト担当"] -->|"進捗・結果・リスク"| M["テスト管理者"]
    M -->|"状況・判断材料"| S["ステークホルダー"]
    S -->|"意思決定 リリース判断"| M`;

export const DIAGRAM_15 = `${MERMAID_CONFIG}
flowchart TD
    A["テスト中に異常を観察"] --> B["インシデントとして記録"]
    B --> C{"調査・分類"}
    C -->|"欠陥"| D["修正を依頼"]
    C -->|"仕様の解釈違い"| E["要件を確認"]
    C -->|"環境やテスト側の問題"| F["環境・テストを修正"]
    D --> G["再テストと回帰テスト"]
    E --> G
    F --> G
    G --> H["クローズ"]`;

export const DIAGRAM_16 = `${MERMAID_CONFIG}
flowchart LR
    A["対象システムの特性を確認"] --> B["該当する特性を特定"]
    B --> C["附属書Aの関連テストを確認"]
    C --> D{"戦略に含めるべきか"}
    D -->|"はい"| E["テスト戦略へ追加"]
    D -->|"いいえ"| F["理由を記録して見送り"]`;

export const DIAGRAM_17 = `${MERMAID_CONFIG}
flowchart TD
    A["規格の要求事項"] --> B{"すべて従うか"}
    B -->|"はい"| C["完全適合"]
    B -->|"いいえ 正当な理由あり"| D["調整の程度と根拠を記述"]
    D --> E["関係者と合意"]
    E --> F["テーラード適合を主張可能"]
    B -->|"いいえ 理由・合意なし"| G["適合を主張できない"]`;

export const DIAGRAM_18 = `${MERMAID_CONFIG}
flowchart TD
    A["Step A: 自分たちの用語を棚卸し<br/>食い違いのある言葉を洗い出す"] --> B["Step B: 用語を29119-1に照らして整理<br/>チーム用語集を作る"]
    B --> C["Step C: 次のプロジェクトで<br/>リスクの特定 → 戦略 → 計画の順に試す"]
    C --> D["振り返りと改善<br/>足りない部分は Part 2 3 4 で補う"]`;

export const DIAGRAM_19 = `${MERMAID_CONFIG}
flowchart TD
    A["1. 本ガイドで全体像を把握"] --> B["2. 29119-1 の公開プレビュー<br/>序文 目次 用語を確認"]
    B --> C["3. 正式な規格書で第4章を精読"]
    C --> D["4. 29119-2 テストプロセス"]
    D --> E["5. 29119-3 テスト文書化"]
    E --> F["6. 29119-4 テスト技法"]
    F --> G["7. 必要に応じて 29119-5 と 29119-11"]
    G --> H["8. 実プロジェクトで<br/>テーラリングして適用"]`;
