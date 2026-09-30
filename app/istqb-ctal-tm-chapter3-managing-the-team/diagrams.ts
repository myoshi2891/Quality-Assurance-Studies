export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#0c1b2e",
    "primaryColor": "#1e3a8a",
    "primaryBorderColor": "#7c9eff",
    "primaryTextColor": "#e6edf6",
    "lineColor": "#7c9eff",
    "secondaryColor": "#0e2036",
    "tertiaryColor": "#07111e",
    "nodeBorder": "#7c9eff",
    "clusterBkg": "#0c1b2e",
    "clusterBorder": "#1c3350",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "htmlLabels": true,
  "flowchart": { "curve": "basis" }
}}%%`;

/**
 * 1.2 全体マップ
 */
export const DIAGRAM_CH3_OVERVIEW = `${MERMAID_CONFIG}
flowchart LR
    C3["第3章 チームの管理<br/>225分"]
    S31["3.1 テストチーム"]
    S32["3.2 ステークホルダーとの関係"]
    A1["3.1.1 4つの能力領域のスキル"]
    A2["3.1.2 必要スキルの分析"]
    A3["3.1.3 スキルの評価"]
    A4["3.1.4 スキルの育成"]
    A5["3.1.5 チーム管理に必要な<br/>マネジメントスキル"]
    A6["3.1.6 動機付け要因と<br/>意欲低下要因"]
    B1["3.2.1 品質コスト"]
    B2["3.2.2 テストの費用対効果"]
    C3 --> S31
    C3 --> S32
    S31 --> A1 --> A2 --> A3 --> A4
    S31 --> A5
    S31 --> A6
    S32 --> B1 --> B2
    classDef chapter fill:#1e3a8a,stroke:#7c9eff,color:#ffffff
    classDef section fill:#1e293b,stroke:#7c9eff,color:#e6edf6
    classDef leaf fill:#0e2036,stroke:#1c3350,color:#e6edf6
    class C3 chapter
    class S31,S32 section
    class A1,A2,A3,A4,A5,A6,B1,B2 leaf`;

/**
 * 2.1 4つの能力領域の判定フロー
 */
export const DIAGRAM_CH3_SKILL_AREAS = `${MERMAID_CONFIG}
flowchart TD
    Q["そのスキルは何に関するもの？"]
    Q -->|"知識・ドメイン・技術・テスト技法やツールの使い方"| P["専門的能力"]
    Q -->|"複雑・新規の課題を自力で分析し組み立てる力"| M["方法論的能力"]
    Q -->|"他者との関係・やり取り"| S["社会的能力"]
    Q -->|"自分自身の姿勢・行動の仕方"| PE["個人的能力"]
    classDef ans fill:#1e3a8a,stroke:#7c9eff,color:#ffffff
    class P,M,S,PE ans`;

/**
 * 2.2 必要スキルの導出フロー
 */
export const DIAGRAM_CH3_SKILL_DERIVATION = `${MERMAID_CONFIG}
flowchart TD
    S1["1. プロジェクトの<br/>コンテキストを把握"]
    S2["2. テストアプローチと<br/>リスクから必要な活動を洗い出す"]
    S3["3. 活動ごとに必要な<br/>スキルを4領域で列挙"]
    S4["4. 必要な習熟度と<br/>人数を決める"]
    S5["5. 現有スキルと比較して<br/>ギャップを特定"]
    S6["6. 埋め方を選ぶ<br/>育成・採用・外部調達"]
    S1 --> S2 --> S3 --> S4 --> S5 --> S6
    classDef step fill:#1e3a8a,stroke:#7c9eff,color:#ffffff
    class S1,S2,S3,S4,S5,S6 step`;

/**
 * 2.3 スキルギャップ特定フロー
 */
export const DIAGRAM_CH3_SKILL_GAP = `${MERMAID_CONFIG}
flowchart LR
    GR["必要スキル<br/>3.1.2"]
    GC["現有スキル<br/>3.1.3 評価"]
    GG["ギャップ"]
    GD["育成計画<br/>3.1.4"]
    GR --> GG
    GC --> GG
    GG --> GD
    GD -->|"再評価"| GC
    classDef n fill:#1e3a8a,stroke:#7c9eff,color:#ffffff
    class GR,GC,GG,GD n`;

/**
 * 2.4 育成計画フロー
 */
export const DIAGRAM_CH3_TRAINING_FLOW = `${MERMAID_CONFIG}
flowchart TD
    T1["ギャップの優先順位付け<br/>リスクとプロジェクト目標に基づく"]
    T2["個人ごとの目標設定<br/>SMARTで具体化"]
    T3["手段の選択<br/>研修・OJT・メンタリングなど"]
    T4["時間と予算の確保"]
    T5["実施"]
    T6["効果の確認と再評価"]
    T1 --> T2 --> T3 --> T4 --> T5 --> T6
    T6 -->|"必要なら"| T1
    classDef n fill:#1e3a8a,stroke:#7c9eff,color:#ffffff
    class T1,T2,T3,T4,T5,T6 n`;

/**
 * 3.1 品質コスト（CoQ）のリリース前後の境界
 */
export const DIAGRAM_CH3_COQ_BOUNDARY = `${MERMAID_CONFIG}
flowchart LR
    subgraph QPRE["リリース前に発生"]
        QP["予防コスト"]
        QA["評定 アプレイザル コスト"]
        QI["内部失敗コスト"]
    end
    subgraph QPOST["リリース後に発生"]
        QE["外部失敗コスト"]
    end
    QP -->|"欠陥の作り込みを減らす"| QA
    QA -->|"欠陥を見つける"| QI
    QA -.->|"見逃すと"| QE
    classDef pre fill:#1e3a8a,stroke:#7c9eff,color:#ffffff
    classDef post fill:#7f1d1d,stroke:#f87171,color:#ffffff
    class QP,QA,QI pre
    class QE post`;

/**
 * 3.2 ビジネスケース作成ステップ
 */
export const DIAGRAM_CH3_BUSINESS_CASE = `${MERMAID_CONFIG}
flowchart TD
    U1["1. 目的と対象を明確化<br/>誰に何を判断してほしいか"]
    U2["2. 過去データを集める<br/>欠陥数・修正コスト・障害コスト"]
    U3["3. 品質コスト4分類で<br/>コストを漏れなく整理"]
    U4["4. 便益を見積る<br/>回避できる失敗コストなど"]
    U5["5. 正味便益と ROI を計算<br/>前提と不確実性を明記"]
    U6["6. 聞き手に合わせて提示<br/>経営層は金額、現場は作業負荷"]
    U7["7. 実績を測り、結果を次に活かす"]
    U1 --> U2 --> U3 --> U4 --> U5 --> U6 --> U7
    classDef n fill:#1e3a8a,stroke:#7c9eff,color:#ffffff
    class U1,U2,U3,U4,U5,U6,U7 n`;
