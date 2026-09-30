export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "darkMode": true,
    "background": "#07111e",
    "primaryColor": "#14243d",
    "primaryTextColor": "#e8eefb",
    "primaryBorderColor": "#5c7fe0",
    "secondaryColor": "#10203a",
    "tertiaryColor": "#0d1a2e",
    "lineColor": "#8aa3d8",
    "textColor": "#e8eefb",
    "mainBkg": "#14243d",
    "nodeBorder": "#5c7fe0",
    "clusterBkg": "#0c1a30",
    "clusterBorder": "#2b4170",
    "titleColor": "#c9d6f5",
    "edgeLabelBackground": "#0b1626",
    "nodeTextColor": "#e8eefb",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "15px"
  },
  "flowchart": { "curve": "basis", "htmlLabels": true }
}}%%`;

export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart TB
    A["ステップ1　1.1 テストプロセス：全体の骨格をつかむ"] --> B["ステップ2　1.2 コンテキスト：状況で活動が変わる理由"]
    B --> C["ステップ3　1.3 リスクベースドテスト：優先順位の考え方"]
    C --> D["ステップ4　1.4 プロジェクトテスト戦略：アプローチと目標の決め方"]
    D --> E["ステップ5　1.5 プロセス改善：IDEAL と振り返り"]
    E --> F["ステップ6　1.6 テストツール：導入・選定・ROI"]
    F --> G["ステップ7　章末の練習問題で K4 の解き方を確認"]`;

export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TB
    ORG["組織のテスト戦略<br/>（前提として与えられる）"] --> STRAT["1.4 プロジェクトテスト戦略"]
    CTX["1.2 テストのコンテキスト<br/>ステークホルダー・SDLC・テストレベル・テストタイプ"] --> STRAT
    RISK["1.3 リスクベースドテスト"] --> STRAT
    STRAT --> PLAN["1.1.1 テスト計画"]
    PLAN --> MC["1.1.2 モニタリングとコントロール"]
    MC --> DONE["1.1.3 テスト完了"]
    DONE --> IMP["1.5 テストプロセス改善<br/>（レトロスペクティブ含む）"]
    IMP -. "次のプロジェクト・反復へ反映" .-> PLAN
    TOOL["1.6 テストツール"] -. "全活動を支える" .-> PLAN
    TOOL -.-> MC
    TOOL -.-> DONE`;

export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart TB
    PLAN["テスト計画<br/>Test Planning"]
    EXEC["テスト分析・設計・実装・実行<br/>（FL v4.0 の活動）"]
    MC["モニタリングとコントロール<br/>Test Monitoring and Control"]
    DONE["テスト完了<br/>Test Completion"]
    IMP["テストプロセス改善<br/>Section 1.5"]

    PLAN --> EXEC
    PLAN <--> MC
    EXEC <--> MC
    EXEC --> DONE
    MC --> DONE
    DONE --> IMP`;

export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart TB
    T1["タスク1<br/>コンテキストの理解と<br/>テスト計画作成の組織化"]
    T2["タスク2<br/>プロダクトリスクの<br/>特定と分析"]
    T3["タスク3<br/>リスク対応アプローチの<br/>特定"]
    T4["タスク4<br/>テストアプローチの定義と<br/>リソースの見積り・配分"]
    T5["タスク5<br/>テスト計画の確立<br/>（ステークホルダーの合意）"]

    T1 --> T2 --> T3 --> T4 --> T5
    T5 -. "変更・フィードバックで再計画" .-> T1`;

export const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart LR
    A["テスト計画<br/>目標値・測定項目"] --> B["テスト実施"]
    B --> C["モニタリング<br/>結果の収集・記録"]
    C --> D{"計画と<br/>乖離あり？"}
    D -- "いいえ" --> B
    D -- "はい" --> E["コントロール<br/>是正措置の決定・実施"]
    E --> F{"計画自体の<br/>見直しが必要？"}
    F -- "はい" --> A
    F -- "いいえ" --> B`;

export const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart TB
    S["終了基準の達成"] --> A["1. テスト完了報告書の作成・承認"]
    A --> B["2. テストウェアのアーカイブ"]
    B --> C["3. テストウェアの引き渡し"]
    C --> D["4. テスト環境の清掃と<br/>所定状態への復元"]
    D --> E["5. 教訓（Lessons learned）の<br/>収集・文書化"]
    E --> F["テストプロセス改善へ<br/>（Section 1.5）"]`;

export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart TB
    L["Latents<br/>影響力：高 ／ 関心：低<br/>決定権者として把握<br/>例：経営層"]
    P["Promoters<br/>影響力：高 ／ 関心：高<br/>積極的に協働<br/>例：プロダクトオーナー"]
    A["Apathetics<br/>影響力：低 ／ 関心：低<br/>節目で情報提供<br/>例：関連部門"]
    D["Defenders<br/>影響力：低 ／ 関心：高<br/>定期的に情報共有<br/>例：運用チーム・一般ユーザー"]
    L ~~~ A
    P ~~~ D
    classDef promo fill:#12332c,stroke:#4ade80,color:#e8eefb
    classDef latent fill:#33291a,stroke:#f5b942,color:#e8eefb
    classDef defend fill:#14243d,stroke:#7c9eff,color:#e8eefb
    classDef apath fill:#1b2233,stroke:#7b8aa8,color:#e8eefb
    class P promo
    class L latent
    class D defend
    class A apath`;

export const DIAGRAM_8 = `${MERMAID_CONFIG}
flowchart TB
    H["ハイブリッド環境のテスト管理"]
    H --> A["チームの<br/>移行能力・理解度の評価"]
    H --> B["ハイブリッドへの適応における<br/>強み・弱みの特定"]
    H --> C["構造化プロセスと<br/>アジャイルの柔軟性の両立を確認"]
    H --> D["テストチームとステークホルダーの<br/>協働の強化"]
    H --> E["テスター向けの<br/>スクラム・オブ・スクラムなど<br/>連携への参加"]
    H --> F["スプリント内のテスト工数・<br/>テストケースの追跡とレビュー"]`;

export const DIAGRAM_9 = `${MERMAID_CONFIG}
flowchart LR
    CT["コンポーネントテスト"] --> CIT["コンポーネント統合テスト"]
    CIT --> SIT["システム統合テスト"]
    SIT --> ST["システムテスト"]
    ST --> AT["受け入れテスト"]`;

export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart TB
    S1["1. 状況文から<br/>コンテキスト要因を抽出<br/>（SDLC・規制・体制・変化の頻度・リスク）"] --> S2["2. 各要因が<br/>計画／モニタリング／コントロールの<br/>どこに影響するか対応づける"]
    S2 --> S3["3. 最も影響が大きい活動を<br/>選択肢と照合"]
    S3 --> S4["4. 選択肢の細部<br/>（誰が・いつ・何を）が<br/>状況文と矛盾しないか確認"]`;

export const DIAGRAM_11 = `${MERMAID_CONFIG}
flowchart TB
    ID["リスク特定<br/>Risk Identification<br/>（リスク分析）"] --> AS["リスク評価<br/>Risk Assessment<br/>（リスク分析）"]
    AS --> MO["リスク監視<br/>Risk Monitoring<br/>（リスク制御）"]
    MO --> MI["リスク軽減<br/>Risk Mitigation<br/>（リスク制御）"]
    MI -. "新たなリスク・状況変化" .-> ID`;

export const DIAGRAM_12 = `${MERMAID_CONFIG}
flowchart LR
    A["テスト開始"] --> B["深さ優先<br/>高リスク項目から徹底的に"]
    B --> C{"時間が<br/>限られてきた？"}
    C -- "いいえ" --> B
    C -- "はい" --> D["幅優先へ切り替え<br/>未テストのリスク項目を<br/>最低1回ずつテスト"]
    D --> E{"計画したテストを<br/>すべて実行できた？"}
    E -- "はい" --> F["テスト完了"]
    E -- "いいえ" --> G["延長 or 残存リスクの受容を<br/>根拠付きでマネジメントに提言"]`;

export const DIAGRAM_13 = `${MERMAID_CONFIG}
flowchart TB
    POL["テストポリシー"] --> ORG["組織のテスト戦略<br/>（与えられる）"]
    ORG --> PRJ["プロジェクトテスト戦略<br/>テスト計画の主要な成果"]
    CTX["プロジェクトの<br/>コンテキストと制約"] --> PRJ
    PRJ --> MASTER["プロジェクトテスト計画<br/>（マスターテスト計画）"]
    MASTER --> LEVEL["テストレベル計画"]
    MASTER --> TYPE["品質特性別テスト計画<br/>（セキュリティ・性能など）"]
    MASTER --> ITER["反復テスト計画<br/>（アジャイル／ハイブリッド）"]`;

export const DIAGRAM_14 = `${MERMAID_CONFIG}
flowchart TB
    A["1. 組織のテスト戦略の要求を把握<br/>（不足があればステークホルダーに確認）"] --> B["2. 状況文から<br/>7つの要因を抽出"]
    B --> C["3. 要因ごとに制約と機会を整理<br/>例：期限厳しい→RBT<br/>CI導入→自動化"]
    C --> D["4. テストレベル・タイプ・技法の<br/>組み合わせを決定"]
    D --> E["5. 選択肢と照合<br/>戦略の要求と矛盾する選択肢を除外"]`;

export const DIAGRAM_15 = `${MERMAID_CONFIG}
flowchart TB
    IMP["テストプロセス改善"]
    IMP --> IDEAL["1.5.1 IDEAL モデル<br/>改善活動の進め方"]
    IMP --> MODEL["1.5.2 モデルベース<br/>TMMi / TPI NEXT<br/>外部のベストプラクティスと比較"]
    IMP --> ANALY["1.5.3 分析ベース<br/>根本原因分析 / メトリクス / GQM<br/>自分たちのデータから問題を特定"]
    IMP --> RETRO["1.5.4 レトロスペクティブ<br/>定性データを収集し改善アクションを決定"]`;

export const DIAGRAM_16 = `${MERMAID_CONFIG}
flowchart LR
    I["I Initiating<br/>目的とスコープを<br/>ステークホルダーと合意"] --> D["D Diagnosing<br/>現状のテストプロセスを評価"]
    D --> E["E Establishing<br/>改善計画を策定<br/>優先順位付け"]
    E --> A["A Acting<br/>研修・パイロット・展開"]
    A --> L["L Learning<br/>効果を検証し教訓を得る"]
    L -. "次の改善サイクルへ" .-> D`;

export const DIAGRAM_17 = `${MERMAID_CONFIG}
flowchart TB
    A["分析ベースの改善"]
    A --> R["根本原因分析<br/>Root Cause Analysis"]
    A --> M["メジャー・メトリクス・指標による分析"]
    A --> G["GQM<br/>Goal-Question-Metric"]`;

export const DIAGRAM_18 = `${MERMAID_CONFIG}
flowchart LR
    A["1. 適切な欠陥の<br/>集合を選択"] --> B["2. データ内の<br/>クラスターを特定"]
    B --> C["3. 因果関係図<br/>（石川図／フィッシュボーン）で<br/>根本原因を特定"]
    C --> D["4. 同種の欠陥を防ぐ<br/>改善策を導出"]`;

export const DIAGRAM_19 = `${MERMAID_CONFIG}
flowchart TB
    G["Goal<br/>例：欠陥の検出効率を高めたい"] --> Q1["Question 1<br/>どのテストレベルで<br/>欠陥が多く見つかっているか？"]
    G --> Q2["Question 2<br/>本番に流出した欠陥は<br/>どの程度か？"]
    Q1 --> M1["Metric<br/>テストレベル別の検出欠陥数"]
    Q2 --> M2["Metric<br/>本番流出欠陥数／全欠陥数"]`;

export const DIAGRAM_20 = `${MERMAID_CONFIG}
flowchart LR
    S1["1. 導入<br/>Introduction"] --> S2["2. データ収集<br/>Collect data"]
    S2 --> S3["3. 改善案の導出<br/>Derive improvements"]
    S3 --> S4["4. 改善アクションの決定<br/>Decide on improvement actions"]
    S4 --> S5["5. 終了<br/>Close retrospective"]
    S5 -. "次回の改善へ反映" .-> S1`;

export const DIAGRAM_21 = `${MERMAID_CONFIG}
flowchart LR
    subgraph EVAL["評価・選定の段階"]
        direction TB
        E1["1. 課題起点でプロセス改善の機会を特定<br/>組織の技術との互換性・SDLC への統合を確認"]
        E2["2. 明確な要件と客観的基準で評価<br/>ベンダー／サポート体制・ライセンスモデルを比較"]
        E3["3. 研修・コーチング・メンタリングの<br/>要件を特定"]
        E4["4. 最終ステップ：概念実証（PoC）"]
        E1 --> E2 --> E3 --> E4
    end
    subgraph ROLL["導入・展開の段階"]
        direction TB
        R1["5. パイロットプロジェクトで<br/>選定基準・要件を検証"]
        R2["6. プロセスとツールを相互に調整<br/>利用ガイドラインを定義"]
        R3["7. 利用者への研修・コーチング<br/>組織へ段階的に展開"]
        R4["8. 実利用の情報を収集して改善<br/>ツールの所有者（オーナー）を定義"]
        R1 --> R2 --> R3 --> R4
    end
    EVAL --> ROLL`;

export const DIAGRAM_22 = `${MERMAID_CONFIG}
flowchart TB
    A["1. 状況文から<br/>要件・制約・立場を抽出"] --> B["2. 6.2 の4要因で整理<br/>規制／財務／要件／既存環境"]
    B --> C["3. 6.3.1 の立場別観点で<br/>評価基準を決める"]
    C --> D["4. コスト（一度／継続／機会）と<br/>便益・リスクを比較"]
    D --> E["5. PoC → パイロット → 段階展開<br/>の計画に落とし込む"]`;

export const DIAGRAM_23 = `${MERMAID_CONFIG}
flowchart LR
    A["取得<br/>Acquisition"] --> B["サポートと保守<br/>Support and maintenance"]
    B --> C["進化<br/>Evolution"]
    C --> D["廃止<br/>Retirement"]`;

