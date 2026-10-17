// Chapter-local config preserves the source layout and light palette.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontSize": "16px",
    "fontFamily": "-apple-system, BlinkMacSystemFont, Hiragino Kaku Gothic ProN, Noto Sans JP, sans-serif",
    "primaryColor": "#dbeafe",
    "mainBkg": "#dbeafe",
    "primaryTextColor": "#0f172a",
    "primaryBorderColor": "#1d4ed8",
    "lineColor": "#475569",
    "secondaryColor": "#fef3c7",
    "tertiaryColor": "#f1f5f9",
    "noteBkgColor": "#fef9c3",
    "noteTextColor": "#0f172a",
    "actorBkg": "#dbeafe",
    "actorBorder": "#1d4ed8",
    "actorTextColor": "#0f172a",
    "signalColor": "#334155",
    "signalTextColor": "#0f172a",
    "background": "#ffffff",
    "clusterBkg": "#ffffff",
    "clusterBorder": "#cbd5e1",
    "edgeLabelBackground": "#ffffff",
    "nodeBorder": "#1d4ed8"
  },
  "flowchart": {
    "useMaxWidth": false,
    "htmlLabels": true,
    "nodeSpacing": 70,
    "rankSpacing": 60,
    "subGraphTitleMargin": {
      "top": 12,
      "bottom": 18
    }
  },
  "sequence": {
    "useMaxWidth": false
  },
  "state": {
    "useMaxWidth": false
  },
  "htmlLabels": true
}}%%`;

export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart LR
S1["ステップ1<br/>集める<br/>6.1.1 データ収集"]
S2["ステップ2<br/>読み解く<br/>6.1.2 データ分析"]
S3["ステップ3<br/>伝える<br/>6.1.3 レポートと公開"]
S1 --> S2 --> S3
S3 -. "改善のヒント" .-> S1

classDef step fill:#dbeafe,stroke:#1d4ed8,color:#0f172a
class S1,S2,S3 step`;

export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TB
subgraph SRC["データ源"]
D1["SUT ログ"]
D2["TAF ログ"]
D3["ビルド・デプロイログ"]
D4["本番ログ・監視データ"]
D5["スクリーンショット・録画"]
end
subgraph PROC["処理"]
P1["収集と保存"]
P2["分析と原因切り分け"]
end
subgraph OUT["出力"]
O1["テスト進捗レポート"]
O2["ダッシュボード"]
end
SRC --> P1 --> P2 --> O1
P2 --> O2

classDef src fill:#fef3c7,stroke:#b45309,color:#0f172a
classDef proc fill:#dbeafe,stroke:#1d4ed8,color:#0f172a
classDef out fill:#dcfce7,stroke:#15803d,color:#0f172a
class D1,D2,D3,D4,D5 src
class P1,P2 proc
class O1,O2 out`;

export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart LR
DS_T["自動テスト実行"] --> DS_A["TAF ログ"]
DS_T --> DS_B["スクリーンショット・録画"]
DS_C["SUT"] --> DS_E["SUT ログ<br/>UI・API・Web・DB"]
DS_F["CI/CD"] --> DS_G["ビルドログ<br/>デプロイログ"]
DS_H["本番・性能環境"] --> DS_I["監視データ<br/>性能テストログ"]
DS_A --> DS_R["分析へ"]
DS_B --> DS_R
DS_E --> DS_R
DS_G --> DS_R
DS_I --> DS_R

classDef a fill:#dbeafe,stroke:#1d4ed8,color:#0f172a
classDef b fill:#fef3c7,stroke:#b45309,color:#0f172a
class DS_T,DS_A,DS_B,DS_R a
class DS_C,DS_E,DS_F,DS_G,DS_H,DS_I b`;

export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart TB
TS["上位：テストスクリプト群"] --> BL["中位：ビジネスロジック層"]
BL --> CL["下位：コアライブラリ<br/>ここに記録機能を追加"]
CL --> LOG["開始・終了時刻<br/>ステータス<br/>ステップ情報"]

classDef upper fill:#dbeafe,stroke:#1d4ed8,color:#0f172a
classDef core fill:#dcfce7,stroke:#15803d,color:#0f172a
class TS,BL upper
class CL,LOG core`;

export const DIAGRAM_5 = `${MERMAID_CONFIG}
stateDiagram-v2
direction LR
[*] --> Running
Running --> Passed: 期待結果と一致
Running --> Failed: SUT の欠陥の疑い
Running --> TasFailure: SUT ではなく TAS 側の問題
Running --> Inconclusive: 判定できない
Passed --> [*]
Failed --> [*]
TasFailure --> [*]
Inconclusive --> [*]`;

export const DIAGRAM_6 = `${MERMAID_CONFIG}
sequenceDiagram
participant TAS as TAS
participant SUT as SUT
participant SLOG as SUT ログ
TAS->>SUT: リクエスト送信 (相関 ID を付与)
SUT->>SLOG: 処理内容を記録 (同じ相関 ID)
SUT-->>TAS: レスポンス
TAS->>TAS: TAF ログに相関 ID と結果を記録
Note over TAS,SLOG: 失敗時は相関 ID とタイムスタンプで両ログを突き合わせる`;

export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart LR
AN_P["一次データ<br/>TAS のデータ<br/>TAF ログ・テスト結果"] --> AN_A["結果の分析"]
AN_Q["二次データ<br/>SUT のデータ<br/>SUT ログ・監視データ"] --> AN_A
AN_A --> AN_R["原因の特定"]

classDef prim fill:#dbeafe,stroke:#1d4ed8,color:#0f172a
classDef sec fill:#fef3c7,stroke:#b45309,color:#0f172a
classDef res fill:#dcfce7,stroke:#15803d,color:#0f172a
class AN_P prim
class AN_Q sec
class AN_A,AN_R res`;

export const DIAGRAM_8 = `${MERMAID_CONFIG}
flowchart TB
F0["テストが失敗した"] --> F1{"手順1<br/>過去の実行でも<br/>同じ失敗があったか"}
F1 -- "はい" --> F1Y["既知の欠陥の可能性<br/>SUT か TAS かを確認"]
F1 -- "いいえ" --> F2["手順2<br/>どのテストケースが<br/>何を確認していたか特定"]
F2 --> F3["手順3<br/>どのテストステップで<br/>失敗したか特定"]
F3 --> F4["手順4<br/>SUT の状態を確認<br/>スクリーンショット・API ログ・<br/>ネットワークログ"]
F4 --> F5{"手順5<br/>SUT の状態は<br/>期待どおりか"}
F5 -- "期待どおりではない" --> F5A["欠陥管理システムに起票<br/>正当性を示すログを添付"]
F5 -- "期待どおり" --> F5B["TAS の欠陥<br/>または見えない不一致"]

classDef start fill:#fee2e2,stroke:#b91c1c,color:#0f172a
classDef step fill:#dbeafe,stroke:#1d4ed8,color:#0f172a
classDef dec fill:#fef3c7,stroke:#b45309,color:#0f172a
classDef res fill:#dcfce7,stroke:#15803d,color:#0f172a
class F0 start
class F2,F3,F4,F1Y step
class F1,F5 dec
class F5A,F5B res`;

export const DIAGRAM_9 = `${MERMAID_CONFIG}
flowchart TB
RC_R["テスト進捗レポート"] --> RC_R1["テスト結果"]
RC_R --> RC_R2["SUT 情報"]
RC_R --> RC_R3["テスト環境の記録"]
RC_R --> RC_R4["失敗の理由"]
RC_R --> RC_R5["実行履歴と担当者"]

classDef root fill:#dbeafe,stroke:#1d4ed8,color:#0f172a
classDef leaf fill:#dcfce7,stroke:#15803d,color:#0f172a
class RC_R root
class RC_R1,RC_R2,RC_R3,RC_R4,RC_R5 leaf`;

export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart LR
E1["テストスイート実行"] --> E2["ログ・結果の収集"]
E2 --> E3["レポートジェネレーター<br/>で要約を生成"]
E3 --> E4["公開<br/>Web・クラウド・オンプレミス<br/>メーリングリスト・テスト管理ツール"]
E4 --> E5["通知<br/>メール・チャットボット"]
E4 --> E6["履歴を保管<br/>傾向分析"]

classDef a fill:#dbeafe,stroke:#1d4ed8,color:#0f172a
classDef b fill:#dcfce7,stroke:#15803d,color:#0f172a
class E1,E2,E3 a
class E4,E5,E6 b`;

export const DIAGRAM_11 = `${MERMAID_CONFIG}
flowchart TB
ST_RPT["同じテスト結果データ"] --> ST_M["管理層向け<br/>傾向・合否比率・信頼性"]
ST_RPT --> ST_O["運用層向け<br/>製品の利用に関するメトリクス"]
ST_RPT --> ST_T["技術層向け<br/>失敗の詳細・ログ・実行履歴"]

classDef root fill:#dbeafe,stroke:#1d4ed8,color:#0f172a
classDef m fill:#fef3c7,stroke:#b45309,color:#0f172a
classDef o fill:#fce7f3,stroke:#be185d,color:#0f172a
classDef t fill:#dcfce7,stroke:#15803d,color:#0f172a
class ST_RPT root
class ST_M m
class ST_O o
class ST_T t`;

export const DIAGRAMS = {
    "mermaid-diagram-1": DIAGRAM_1,
    "mermaid-diagram-2": DIAGRAM_2,
    "mermaid-diagram-3": DIAGRAM_3,
    "mermaid-diagram-4": DIAGRAM_4,
    "mermaid-diagram-5": DIAGRAM_5,
    "mermaid-diagram-6": DIAGRAM_6,
    "mermaid-diagram-7": DIAGRAM_7,
    "mermaid-diagram-8": DIAGRAM_8,
    "mermaid-diagram-9": DIAGRAM_9,
    "mermaid-diagram-10": DIAGRAM_10,
    "mermaid-diagram-11": DIAGRAM_11,
} as const;

export type DiagramId = keyof typeof DIAGRAMS;
