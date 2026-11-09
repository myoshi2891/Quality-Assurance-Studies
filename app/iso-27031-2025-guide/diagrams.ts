// ISO/IEC 27031:2025 Guide Mermaid Diagrams
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#07111e",
    "primaryColor": "#12233b",
    "mainBkg": "#12233b",
    "primaryTextColor": "#e6eefc",
    "primaryBorderColor": "#7c9eff",
    "lineColor": "#7c9eff",
    "secondaryColor": "#0d1b2e",
    "tertiaryColor": "#0d1b2e",
    "nodeBorder": "#7c9eff",
    "clusterBkg": "#0d1b2e",
    "clusterBorder": "#25405f",
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
  "mmd-0": `${MERMAID_CONFIG}
flowchart LR
A1["最後に確実に残っている<br/>データの時点<br/>例：直近のバックアップ"]
A2["障害発生"]
A3["ICTサービス復旧"]
A1 -->|"RPO：失ってよいデータの時間幅"| A2
A2 -->|"RTO：止まってよい時間"| A3
`,
  "mmd-1": `${MERMAID_CONFIG}
flowchart TB
subgraph BCL["事業継続の規格"]
R1["ISO 22301<br/>事業継続マネジメントシステム 要求事項"]
R2["ISO 22313<br/>BCMS ガイダンス 序文で言及"]
end
subgraph ISL["情報セキュリティの規格"]
R3["ISO/IEC 27001 / 27002<br/>ISMSとコントロール"]
R4["ISO/IEC 27005<br/>情報セキュリティリスク管理"]
R5["ISO/IEC 27035-1<br/>インシデント管理"]
end
R6["ISO/IEC 27031:2025<br/>ICT準備 IRBC"]
R7["ICTサービス<br/>システム・ネットワーク・クラウド"]
R1 -->|"事業継続の目標を提示"| R6
R2 -.->|"考え方を共有"| R6
R3 -->|"コントロールを補完"| R6
R4 -->|"リスク管理を支援"| R6
R5 -->|"対応を準備・訓練へ拡張"| R6
R6 -->|"復旧できる状態を作る"| R7
`,
  "mmd-2": `${MERMAID_CONFIG}
flowchart LR
H1["2011年版<br/>自社ICT中心の準備"]
H2["環境の変化<br/>クラウド・SaaS・外部依存の拡大"]
H3["2025年版<br/>外部サービスへの依存も含めて準備"]
H4["ISO 27001 / ISO 22301と<br/>統合して運用"]
H1 --> H2
H2 --> H3
H3 --> H4
`,
  "mmd-3": `${MERMAID_CONFIG}
flowchart TB
S1["第6章<br/>BCMへ統合する"]
S2["第7章<br/>事業側の期待を把握する"]
S3["第8章<br/>前提を決める<br/>目的・RTO・RPO"]
S4["第9章<br/>戦略を選ぶ"]
S5["第10章<br/>継続計画を作る"]
S6["第11章<br/>試験・演習・監査"]
S7["第12章 最終MBCOの確定<br/>第13章 経営層の評価"]
S1 --> S2
S2 --> S3
S3 --> S4
S4 --> S5
S5 --> S6
S6 --> S7
S6 -.->|"学びを反映"| S4
S6 -.->|"学びを反映"| S5
S7 -.->|"見直し"| S1
`,
  "mmd-4": `${MERMAID_CONFIG}
flowchart LR
G1["経営・BCM<br/>事業継続の目標"]
G2["IRBC<br/>ICT側の準備"]
G3["リスクマネジメント<br/>ISO/IEC 27005"]
G4["インシデントマネジメント<br/>ISO/IEC 27035-1"]
G5["BCM戦略"]
G6["ICTサービスの<br/>確実な復旧"]
G1 --> G2
G3 --> G2
G4 --> G2
G5 --> G2
G2 --> G6
`,
  "mmd-5": `${MERMAID_CONFIG}
flowchart TB
B1["重要な事業プロセス"]
B2["BIA<br/>止まったときの影響を評価"]
B3["重要なICTサービスの特定"]
B4["依存関係の洗い出し<br/>内部システム・ネットワーク・外部サービス"]
B5["契約面の確認<br/>SLA・復旧に関する取り決め"]
B1 --> B2
B2 --> B3
B3 --> B4
B4 --> B5
`,
  "mmd-6": `${MERMAID_CONFIG}
flowchart TB
M1["事業が求める最低限の水準<br/>MBCO"]
M2["ICTサービスごとに分解"]
M3["RTOを設定<br/>何時間以内に戻す"]
M4["RPOを設定<br/>何分前のデータまで許容"]
M5["設備冗長化・復旧能力の検討"]
M6["目標の合意<br/>事業部門・ICT部門・経営層"]
M1 --> M2
M2 --> M3
M2 --> M4
M3 --> M5
M4 --> M5
M5 --> M6
`,
  "mmd-7": `${MERMAID_CONFIG}
flowchart LR
ST0["IRBC戦略"]
ST1["人材と知識"]
ST2["設備"]
ST3["技術"]
ST4["データ"]
ST5["プロセス"]
ST6["供給者"]
ST0 --> ST1
ST0 --> ST2
ST0 --> ST3
ST0 --> ST4
ST0 --> ST5
ST0 --> ST6
`,
  "mmd-8": `${MERMAID_CONFIG}
flowchart TD
Q1{"RTOはどれくらい？"}
D1["Backup and Restore<br/>Cold"]
D2["Pilot Light"]
D3["Warm Standby<br/>Warm"]
D4["Multi-site active/active<br/>Hot"]
Q2{"RPOは満たせる？<br/>バックアップ間隔を確認"}
E1["候補として採用"]
E2["データ複製方式を見直す"]
Q1 -->|"数時間以上でもよい"| D1
Q1 -->|"数十分程度"| D2
Q1 -->|"数分程度"| D3
Q1 -->|"ほぼゼロ"| D4
D1 --> Q2
D2 --> Q2
D3 --> Q2
D4 --> Q2
Q2 -->|"満たせる"| E1
Q2 -->|"満たせない"| E2
`,
  "mmd-9": `${MERMAID_CONFIG}
sequenceDiagram
  participant MON as "監視・運用担当"
  participant IC as "インシデント責任者"
  participant RO as "復旧組織"
  participant MG as "経営層"
  MON->>IC: 障害を検知して報告
  IC->>IC: 影響範囲とRTOへの影響を評価
  IC->>MG: 発動基準に達したためエスカレーション
  MG->>IC: ICT継続計画の発動を承認
  IC->>RO: 復旧手順の実行を指示
  RO->>RO: 暫定回避策を実施しながら復旧
  RO->>IC: 復旧完了を報告
  IC->>MG: 結果を報告`,
  "mmd-10": `${MERMAID_CONFIG}
flowchart LR
X1["試験・演習の<br/>計画"]
X2["演習の実施"]
X3["結果の評価<br/>RTO・RPOを満たしたか"]
X4["学びの整理"]
X5["戦略・計画の改善"]
X1 --> X2
X2 --> X3
X3 --> X4
X4 --> X5
X5 --> X1
`,
  "mmd-11": `${MERMAID_CONFIG}
flowchart TB
F1["試験・演習・監査の結果"]
F2["実際に達成できる水準の把握"]
F3["最終MBCOの確定"]
F4["経営層によるIRBCの評価"]
F5["戦略・計画・投資の見直し"]
F6["継続的な運用と定期見直し"]
F1 --> F2
F2 --> F3
F3 --> F4
F4 -->|"課題あり"| F5
F4 -->|"問題なし"| F6
F5 --> F6
`,
  "mmd-12": `${MERMAID_CONFIG}
flowchart LR
EX1["事業部門の<br/>期待を聞く"]
EX2["決済：数分<br/>サイト：1時間"]
EX3["決済：複数拠点<br/>サイト：縮小版待機"]
EX4["計画・手順書"]
EX5["半期ごとの演習"]
EX6["経営層が評価<br/>MBCO確定"]
EX1 --> EX2
EX2 --> EX3
EX3 --> EX4
EX4 --> EX5
EX5 --> EX6
`,
  "mmd-13": `${MERMAID_CONFIG}
flowchart TB
L1["1. 本ガイドで全体像をつかむ"]
L2["2. 正式版の規格を入手し<br/>第6〜13章を確認"]
L3["3. 自社の重要ICTサービスで<br/>RTO・RPOを仮置き"]
L4["4. 既存のISO 27001<br/>ISO 22301の運用と接続"]
L5["5. 小さな演習から開始<br/>結果を経営層へ報告"]
L1 --> L2
L2 --> L3
L3 --> L4
L4 --> L5
`,
};
