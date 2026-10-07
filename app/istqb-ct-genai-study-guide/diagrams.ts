const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontSize": "16px",
    "fontFamily": "Noto Sans JP, sans-serif",
    "primaryColor": "#eff6ff",
    "primaryTextColor": "#0f172a",
    "primaryBorderColor": "#2563eb",
    "lineColor": "#94a3b8",
    "secondaryColor": "#f1f5f9",
    "tertiaryColor": "#f1f5f9",
    "background": "#ffffff",
    "mainBkg": "#eff6ff",
    "nodeBorder": "#2563eb",
    "nodeTextColor": "#0f172a",
    "clusterBkg": "#f1f5f9",
    "clusterBorder": "#cbd5e1",
    "edgeLabelBackground": "#ffffff",
    "titleColor": "#0f172a"
  },
  "htmlLabels": true,
  "flowchart": {
    "useMaxWidth": false,
    "htmlLabels": true,
    "subGraphTitleMargin": {
      "top": 12,
      "bottom": 18
    },
    "nodeSpacing": 60,
    "rankSpacing": 60
  }
}}%%`;

export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart LR
C1["第1章<br/>生成AI入門<br/>100分"] --> C2["第2章<br/>プロンプト<br/>エンジニアリング<br/>365分"]
C2 --> C3["第3章<br/>リスク管理<br/>160分"]
C3 --> C4["第4章<br/>LLM搭載<br/>テストインフラ<br/>110分"]
C4 --> C5["第5章<br/>導入と統合<br/>80分"]

classDef ch fill:#eaf1ff,stroke:#1a56db,color:#0f172a
class C1,C2,C3,C4,C5 ch`;

export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TD
SP_AI["人工知能(AI)"] --> SP_SYM["記号的AI<br/>ルールベースで人間の意思決定を模倣"]
SP_AI --> SP_ML["古典的機械学習<br/>データ準備・特徴量選択・モデル学習が必要"]
SP_AI --> SP_DL["深層学習<br/>ニューラルネットワークで特徴量を自動学習"]
SP_DL --> SP_GEN["生成AI<br/>深層学習を用いて新しいコンテンツを生成"]

classDef box fill:#eaf1ff,stroke:#1a56db,color:#0f172a
class SP_SYM,SP_ML,SP_DL,SP_GEN box`;

export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart LR
TK_IN["入力テキスト"] --> TK_TOK["トークン化<br/>(文字/サブワード単位に分割)"]
TK_TOK --> TK_EMB["埋め込み<br/>(高次元ベクトルへ変換)"]
TK_EMB --> TK_TRANS["トランスフォーマー<br/>(文脈内のトークン関係を学習)"]
TK_TRANS --> TK_OUT["次トークン予測 → 応答生成"]

classDef step fill:#eaf1ff,stroke:#1a56db,color:#0f172a
class TK_TOK,TK_EMB,TK_TRANS step`;

export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart LR
LT_F["基盤LLM<br/>(Foundation)<br/>汎用的な事前学習のみ"] --> LT_I["指示チューニング済みLLM<br/>(Instruction-tuned)<br/>指示追従性を強化"]
LT_I --> LT_R["推論LLM<br/>(Reasoning)<br/>多段階推論・思考の連鎖を強化"]

classDef stage fill:#eaf1ff,stroke:#1a56db,color:#0f172a
class LT_F,LT_I,LT_R stage`;

export const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart TD
PS_P["構造化プロンプト"] --> PS_ROLE["Role(役割)<br/>LLMに取らせる視点・ペルソナ"]
PS_P --> PS_CTX["Context(文脈)<br/>テスト対象・機能の背景情報"]
PS_P --> PS_INS["Instruction(指示)<br/>実行すべき具体的タスク"]
PS_P --> PS_DATA["Input data(入力データ)<br/>ユーザーストーリー・画面・コード等"]
PS_P --> PS_CON["Constraints(制約)<br/>遵守すべき制限事項"]
PS_P --> PS_FMT["Output format(出力形式)<br/>期待する応答の形式・構造"]

classDef el fill:#eaf1ff,stroke:#1a56db,color:#0f172a
class PS_ROLE,PS_CTX,PS_INS,PS_DATA,PS_CON,PS_FMT el`;

export const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart LR
PC_S1["ステップ1のプロンプト"] --> PC_V1{"人手/自動<br/>で検証"}
PC_V1 -->|OK| PC_S2["ステップ2のプロンプト<br/>(前段の結果を利用)"]
PC_V1 -->|NG| PC_S1
PC_S2 --> PC_V2{"検証"}
PC_V2 -->|OK| PC_S3["ステップ3のプロンプト"]
PC_V2 -->|NG| PC_S2

classDef step fill:#eaf1ff,stroke:#1a56db,color:#0f172a
classDef gate fill:#fef3c7,stroke:#b45309,color:#0f172a
class PC_S1,PC_S2,PC_S3 step
class PC_V1,PC_V2 gate`;

export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart TD
RK_OUT["LLM出力"] --> RK_HD["ハルシネーション検出"]
RK_OUT --> RK_RD["推論エラー検出"]
RK_OUT --> RK_BD["バイアス検出"]

RK_HD --> RK_HD1["クロス検証:既存文書・既知の挙動と照合"]
RK_HD --> RK_HD2["ドメイン専門家によるレビュー"]
RK_HD --> RK_HD3["一貫性チェック:出力同士の整合性確認"]

RK_RD --> RK_RD1["論理検証:一貫性・論理構造のレビュー"]
RK_RD --> RK_RD2["出力テスト:生成物を実際に実行して結果確認"]

RK_BD --> RK_BD1["生成テストウェアが定義済みのテスト戦略・カバレッジ要件を公平に反映しているか確認"]
RK_BD --> RK_BD2["非機能テストの過小生成など、テスト種別の偏りを評価"]

classDef cat fill:#eaf1ff,stroke:#1a56db,color:#0f172a
classDef method fill:#f1f5f9,stroke:#334155,color:#0f172a
class RK_HD,RK_RD,RK_BD cat
class RK_HD1,RK_HD2,RK_HD3,RK_RD1,RK_RD2,RK_BD1,RK_BD2 method`;

export const DIAGRAM_8 = `${MERMAID_CONFIG}
flowchart LR
subgraph AR_FE["フロントエンド"]
AR_UI["テスターが<br/>クエリ/コマンドを入力"]
end

subgraph AR_BE["バックエンド"]
AR_AUTH["認証"]
AR_RET["データ取得"]
AR_PREP["プロンプト準備"]
AR_POST["後処理<br/>(テスト条件との整合確認)"]
end

subgraph AR_DATA["データソース"]
AR_RDB["リレーショナルDB<br/>(テストケース等の構造化データ)"]
AR_VDB["ベクトルDB<br/>(埋め込みによる意味検索)"]
end

AR_LLM["LLM<br/>(サードパーティAPI／自社ホスト)"]

AR_UI --> AR_AUTH --> AR_RET --> AR_PREP --> AR_LLM
AR_RET <--> AR_RDB
AR_RET <--> AR_VDB
AR_LLM --> AR_POST --> AR_UI

classDef fe fill:#eaf1ff,stroke:#1a56db,color:#0f172a
classDef be fill:#f1f5f9,stroke:#334155,color:#0f172a
classDef data fill:#fef3c7,stroke:#b45309,color:#0f172a
classDef llm fill:#dcfce7,stroke:#15803d,color:#0f172a
class AR_UI fe
class AR_AUTH,AR_RET,AR_PREP,AR_POST be
class AR_RDB,AR_VDB data
class AR_LLM llm`;

export const DIAGRAM_9 = `${MERMAID_CONFIG}
flowchart TD
RAG_DOC["大規模文書"] --> RAG_CHUNK["チャンク分割<br/>(例:256〜512トークン)"]
RAG_CHUNK --> RAG_ENC["埋め込みへエンコード"]
RAG_ENC --> RAG_VDB[("ベクトルデータベース")]

RAG_Q["ユーザークエリ"] --> RAG_QENC["クエリを埋め込みへエンコード"]
RAG_QENC --> RAG_SEARCH["意味的類似度に基づく検索"]
RAG_VDB --> RAG_SEARCH
RAG_SEARCH --> RAG_CTX["関連チャンクを文脈として取得"]
RAG_CTX --> RAG_GEN["LLMによる根拠に基づく応答生成"]

classDef prep fill:#f1f5f9,stroke:#334155,color:#0f172a
classDef runtime fill:#eaf1ff,stroke:#1a56db,color:#0f172a
class RAG_DOC,RAG_CHUNK,RAG_ENC prep
class RAG_Q,RAG_QENC,RAG_SEARCH,RAG_CTX,RAG_GEN runtime`;

export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart LR
AG_A["LLM搭載エージェント"] --> AG_AUT["自律型エージェント<br/>最小限の人手介入で独立動作<br/>(ルール・強化学習・適応フィードバック)"]
AG_A --> AG_SEMI["半自律型エージェント<br/>定期的な人手監視のもとで動作"]
AG_AUT --> AG_MULTI["マルチエージェント構成<br/>複数の専門化されたエージェントが<br/>連携・協調(オーケストレーション)"]
AG_SEMI --> AG_MULTI

classDef box fill:#eaf1ff,stroke:#1a56db,color:#0f172a
class AG_AUT,AG_SEMI,AG_MULTI box`;

export const DIAGRAM_11 = `${MERMAID_CONFIG}
flowchart LR
OP_DEV["プロンプト/モデルの<br/>開発・改善"] --> OP_VER["バージョン管理<br/>(プロンプト・モデル・評価データセット)"]
OP_VER --> OP_EVAL["自動評価<br/>(2.3.1の指標で品質ゲート)"]
OP_EVAL --> OP_DEPLOY["デプロイ<br/>(テストツールへの組み込み)"]
OP_DEPLOY --> OP_MON["本番モニタリング<br/>(出力品質・コスト・レイテンシ・逸脱検知)"]
OP_MON --> OP_DEV

classDef step fill:#eaf1ff,stroke:#1a56db,color:#0f172a
class OP_DEV,OP_VER,OP_EVAL,OP_DEPLOY,OP_MON step`;

export const DIAGRAM_12 = `${MERMAID_CONFIG}
flowchart LR
PH_D["Discovery<br/>(発見)<br/>認知向上・ツールへの<br/>アクセス提供・試行"] --> PH_I["Initiation and Usage Definition<br/>(開始と利用定義)<br/>ユースケース特定・<br/>テストインフラ評価・目標整合"]
PH_I --> PH_U["Utilization and Iteration<br/>(活用と反復)<br/>既存プロセスへの統合・<br/>メトリクス監視・スケール"]

classDef phase fill:#eaf1ff,stroke:#1a56db,color:#0f172a
class PH_D,PH_I,PH_U phase`;

export const DIAGRAM_13 = `${MERMAID_CONFIG}
flowchart TD
RM_W1["Week 1<br/>第1章・第4章<br/>(基礎概念・K1/K2中心)"] --> RM_W2["Week 2<br/>第2章<br/>(プロンプト技法・K3の実践演習)"]
RM_W2 --> RM_W3["Week 3<br/>第3章・第5章<br/>(リスクと組織導入・K1/K2)"]
RM_W3 --> RM_MOCK["模擬試験<br/>サンプル試験Aで実力確認"]

classDef wk fill:#eaf1ff,stroke:#1a56db,color:#0f172a
class RM_W1,RM_W2,RM_W3,RM_MOCK wk`;
