// Chapter-local config preserves the source layout and light palette.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontSize": "16px",
    "fontFamily": "-apple-system, BlinkMacSystemFont, Hiragino Kaku Gothic ProN, Noto Sans JP, sans-serif",
    "primaryColor": "#eaf0ff",
    "primaryTextColor": "#1c2536",
    "primaryBorderColor": "#3459e6",
    "lineColor": "#8891a1",
    "secondaryColor": "#fff2e5",
    "tertiaryColor": "#eef6ff",
    "clusterBkg": "#f6f8fb",
    "clusterBorder": "#c9d2e3",
    "background": "#ffffff",
    "edgeLabelBackground": "#ffffff",
    "nodeBorder": "#3459e6",
    "actorTextColor": "#1c2536"
  },
  "flowchart": {
    "useMaxWidth": false,
    "htmlLabels": true,
    "subGraphTitleMargin": {
      "top": 12,
      "bottom": 18
    },
    "nodeSpacing": 60,
    "rankSpacing": 60
  },
  "sequence": {
    "useMaxWidth": false
  },
  "htmlLabels": true
}}%%`;

export const DIAGRAM_0 = `${MERMAID_CONFIG}
flowchart LR
OV0["第7章<br/>TASの検証"] --> OV1["7.1.1 環境の検証計画<br/>K3"]
OV0 --> OV2["7.1.2 スクリプト/スイートの<br/>正しい振る舞い K2"]
OV0 --> OV3["7.1.3 予期しない結果の<br/>特定 K2"]
OV0 --> OV4["7.1.4 静的解析<br/>K2"]
OV1 --> OV5["使う前に確認する"]
OV2 --> OV5
OV3 --> OV6["使った後に確認する"]
OV4 --> OV7["コードの段階で確認する"]`;

export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart LR
DF1["SUT"] -->|"テストされる"| DF2["自動テスト<br/>TAS"]
DF2 -->|"検証される<br/>第7章"| DF3["TAE"]
DF2 -->|"結果を報告<br/>第6章"| DF4["ステークホルダー"]`;

export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TD
P1["TASの導入・更新"] --> P2["1. インストール/設定の確認"]
P2 --> P3["2. 接続性の事前確認"]
P3 --> P4["3. TAFコンポーネントテスト"]
P4 --> P5["4. セットアップ/ティアダウンの<br/>再現性確認"]
P5 --> P6{"すべて合格?"}
P6 -->|"はい"| P7["自動テストの本実行を開始"]
P6 -->|"いいえ"| P8["原因調査と構成の修正"]
P8 --> P2`;

export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart LR
R1["環境を構築"] --> R2["検証テストを実行"]
R2 --> R3["環境を破棄"]
R3 --> R4["同じ手順で再構築"]
R4 --> R5["再度、検証テストを実行"]
R5 --> R6{"結果と動作は<br/>同じか?"}
R6 -->|"はい"| R7["再現性あり"]
R6 -->|"いいえ"| R8["差分の原因を調査<br/>手作業/未管理設定を疑う"]`;

export const DIAGRAM_4 = `${MERMAID_CONFIG}
sequenceDiagram
participant AG as CIエージェント
participant TS as TAS
participant SU as SUT環境
participant LG as ログ/レポート保管先
AG->>TS: 事前チェックを起動
TS->>SU: 到達性の確認
SU-->>TS: 応答あり
TS->>SU: 認証情報で最小限の操作
SU-->>TS: 成功
TS->>LG: 書き込み権限の確認
LG-->>TS: 書き込み可
TS-->>AG: 事前チェック合格
AG->>TS: 本実行を開始`;

export const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart TD
C1["TAFのコンポーネント"] --> C2["コアライブラリ<br/>SUT非依存"]
C1 --> C3["ビジネスロジック層<br/>SUT依存"]
C1 --> C4["ログ/レポート機能"]
C2 --> C5["ユニットテストを作成"]
C3 --> C6["モックSUTなどで検証"]
C4 --> C7["出力内容の正確さを確認"]`;

export const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart TD
S1["スイートを実行可能にする前"] --> S2{"全テストに<br/>期待結果がある?"}
S2 -->|"いいえ"| S3["期待結果を追加"]
S2 -->|"はい"| S4{"テストデータは<br/>揃っている?"}
S4 -->|"いいえ"| S5["テストデータを用意"]
S4 -->|"はい"| S6{"TAFとSUTの<br/>バージョンは正しい?"}
S6 -->|"いいえ"| S7["バージョンを合わせる"]
S6 -->|"はい"| S8["スイートは実行可能"]`;

export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart TD
F1["同じ条件で繰り返し実行"] --> F2{"結果は毎回同じ?"}
F2 -->|"はい"| F3["アクティブなスイートに残す"]
F2 -->|"いいえ<br/>例: 競合状態"| F4["アクティブなスイートから外す"]
F4 --> F5["別途、根本原因を分析"]
F5 --> F6["修正して再検証"]
F6 --> F1`;

export const DIAGRAM_8 = `${MERMAID_CONFIG}
flowchart LR
I1["TASがSUT環境の内側にある<br/>または計装が強い"] --> I2["SUTの挙動や性能が<br/>手動利用時と変わる"]
I2 --> I3["本番では起きない失敗が<br/>テストで発生"]
I3 --> I4["TASへの信頼が低下"]
I4 --> I5["開発者が手動での<br/>再現を要求"]`;

export const DIAGRAM_9 = `${MERMAID_CONFIG}
flowchart TD
U1["予期しない結果<br/>失敗または成功"] --> U2["テストログ・性能データ・<br/>セットアップ/ティアダウンを確認"]
U2 --> U3["少数のテストを<br/>単独で実行"]
U3 --> U4{"再現する?"}
U4 -->|"毎回再現"| U5["ログから原因箇所を特定<br/>テスト/SUT/TAF"]
U4 -->|"時々のみ<br/>間欠的"| U6["システムリソースを監視<br/>複数のログを突き合わせる"]
U5 --> U7["必要ならデバッグ"]
U6 --> U7
U7 --> U8["必要に応じて専門家の支援<br/>テスト分析者/BA/開発者/システムエンジニア"]
U8 --> U9["原因に応じて修正<br/>テスト・TAF・SUT欠陥報告・環境"]`;

export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart LR
T1["コミット/PR"] --> T2["静的解析を実行<br/>SUT + TAF + テストコード"]
T2 --> T3{"重大度が<br/>高い指摘あり?"}
T3 -->|"あり"| T4["ビルド失敗<br/>修正へ"]
T3 -->|"なし"| T5["ビルド/コンポーネントテスト"]
T5 --> T6["デプロイ後の自動テスト"]`;

export const DIAGRAMS = {
    "mermaid-diagram-0": DIAGRAM_0,
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
} as const;

export type DiagramId = keyof typeof DIAGRAMS;
