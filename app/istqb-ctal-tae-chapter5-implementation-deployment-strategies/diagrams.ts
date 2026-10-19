// Original diagram labels, links and class definitions are preserved.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "htmlLabels": true,
  "fontFamily": "Noto Sans JP, Hiragino Kaku Gothic ProN, Yu Gothic, sans-serif",
  "flowchart": {
    "useMaxWidth": false,
    "htmlLabels": true,
    "curve": "basis",
    "nodeSpacing": 45,
    "rankSpacing": 55,
    "wrappingWidth": 1200,
    "padding": 16,
    "subGraphTitleMargin": {
      "top": 10,
      "bottom": 14
    }
  },
  "themeVariables": {
    "fontFamily": "Noto Sans JP, Hiragino Kaku Gothic ProN, Yu Gothic, sans-serif",
    "fontSize": "16px",
    "primaryColor": "#EEF1F8",
    "primaryTextColor": "#161B26",
    "primaryBorderColor": "#2E3F72",
    "secondaryColor": "#FAF1DF",
    "secondaryBorderColor": "#B8802A",
    "secondaryTextColor": "#161B26",
    "tertiaryColor": "#EAF4EC",
    "tertiaryBorderColor": "#2F6B3D",
    "tertiaryTextColor": "#161B26",
    "lineColor": "#454E60",
    "textColor": "#161B26",
    "edgeLabelBackground": "#FFFFFF",
    "clusterBkg": "#FFFFFF",
    "clusterBorder": "#C7CDD9",
    "titleColor": "#161B26",
    "nodeBorder": "#2E3F72",
    "mainBkg": "#EEF1F8",
    "background": "#F6F7F9"
  }
}}%%`;

export const DIAGRAM_OVERVIEW = `${MERMAID_CONFIG}
flowchart TB
A["5.1 CI/CDパイプラインへの統合"] --> B["5.1.1<br/>パイプライン内の<br/>テストレベル適用"]
A --> C["5.1.2<br/>テストウェアの<br/>構成管理"]
A --> D["5.1.3<br/>APIインフラの<br/>依存関係とコントラクトテスト"]

classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26
classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26
classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26
class A hub
class B,C,D box`;

export const DIAGRAM_APPROACHES = `${MERMAID_CONFIG}
flowchart LR
subgraph AP1["アプローチ①：デプロイフェーズの一部として実行"]
direction TB
A1["コンポーネント<br/>デプロイ完了"] --> A2["テストケース実行"]
A2 -->|失敗| A3["デプロイを失敗/<br/>ロールバック"]
A2 -->|成功| A4["デプロイ確定"]
end

subgraph AP2["アプローチ②：独立したパイプラインとして実行"]
direction TB
B1["デプロイ成功を<br/>トリガーに起動"] --> B2["別パイプラインで<br/>テストスイート実行"]
B2 --> B3["品質ゲートとしては<br/>機能しない"]
B3 --> B4["問題発生時は<br/>手動でロールバック"]
end

classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26
classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26
classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26
class A1,A2,A3,A4 done
class B1,B2,B3,B4 hub`;

export const DIAGRAM_CONFIGMGMT = `${MERMAID_CONFIG}
flowchart TB
CM["テストウェアの構成管理"] --> E["テスト環境設定<br/>（Test Environment Configuration）"]
CM --> D["テストデータ<br/>（Test Data）"]
CM --> S["テストスイート／<br/>テストケース"]

E --> E1["URLや認証情報など<br/>環境ごとの差異"]
D --> D1["環境・リリース・<br/>機能セットごとの差異"]
S --> S1["目的別のスイート編成<br/>（スモーク・回帰など）"]

classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26
classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26
classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26
class CM hub
class E,D,S,E1,D1,S1 box`;

export const DIAGRAM_CONSUMERPROVIDER = `${MERMAID_CONFIG}
flowchart TB
subgraph CD["コンシューマー駆動型（Consumer-Driven）"]
direction LR
C1["コンシューマー<br/>（利用する側）"] -->|"期待値を設定<br/>このリクエストには<br/>こう応答してほしい"| C2["プロバイダー<br/>（提供する側）"]
end

subgraph PD["プロバイダー駆動型（Provider-Driven）"]
direction LR
P1["プロバイダー<br/>（提供する側）"] -->|"自らのサービスの<br/>動作を示す<br/>コントラクトを作成"| P2["コンシューマー<br/>（利用する側）"]
end

classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26
classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26
classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26
class C1,C2 box
class P1,P2 hub`;

export const DIAGRAM_INTEGRATED = `${MERMAID_CONFIG}
flowchart TB
Start["コード変更をコミット"] --> Build["ビルドフェーズ"]
Build --> CT["コンフィギュレーションテスト<br/>（TAF/TAS）"]
Build --> CompT["コンポーネントテスト"]
Build --> CIT["コンポーネント統合テスト"]

CT --> Gate1{"品質ゲート<br/>通過？"}
CompT --> Gate1
CIT --> Gate1

Gate1 -->|"No"| Fail1["ビルド失敗を通知"]
Gate1 -->|"Yes"| Deploy["デプロイフェーズ"]

Deploy --> CFG["構成管理から<br/>環境設定・テストデータ<br/>を取得"]
CFG --> SysT["システムテスト /<br/>システム統合テスト<br/>アプローチ①：<br/>デプロイフェーズ内で実行"]

CIT -.- API["APIレベルでは<br/>コントラクトテストで<br/>サービス間整合性を検証<br/>コンポーネント統合テスト /<br/>システム統合テストの一部"]
SysT -.- API

SysT --> Gate2{"品質ゲート<br/>通過？"}
Gate2 -->|"No"| Fail2["ロールバック<br/>（自動 or 手動）"]
Gate2 -->|"Yes"| Release["リリース確定"]

Deploy -->|"デプロイ成功後に起動"| Sep["システムテスト /<br/>システム統合テスト<br/>アプローチ②：<br/>独立パイプラインで実行"]
Sep --> SepResult["テスト結果を報告<br/>デプロイの品質ゲートには<br/>ならない。失敗時は結果を報告し、<br/>通常は手動でロールバック"]

classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26
classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26
classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26
class Start,Build,CT,CompT,CIT,Deploy,CFG,SysT,API,Sep,SepResult box
class Gate1,Gate2 hub
class Release done`;

export const DIAGRAMS = {
    overview: DIAGRAM_OVERVIEW,
    approaches: DIAGRAM_APPROACHES,
    configmgmt: DIAGRAM_CONFIGMGMT,
    consumerprovider: DIAGRAM_CONSUMERPROVIDER,
    integrated: DIAGRAM_INTEGRATED,
} as const;
