// Definitions reconstructed from the original HTML SVG nodes, styles and edges.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#0b1a2e",
    "primaryColor": "#e8f0fe",
    "mainBkg": "#e8f0fe",
    "primaryTextColor": "#0b1f4d",
    "primaryBorderColor": "#3b6fd4",
    "lineColor": "#7c9eff",
    "secondaryColor": "#fff7e0",
    "tertiaryColor": "#ecfdf5",
    "nodeBorder": "#3b6fd4",
    "clusterBkg": "#0b1a2e",
    "clusterBorder": "#2b4670",
    "edgeLabelBackground": "#0b1a2e",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "16px"
  },
  "htmlLabels": true,
  "flowchart": {
    "curve": "basis",
    "useMaxWidth": false
  }
}}%%`;
export const DIAGRAMS: Record<string,string> = {
"mmd-1": MERMAID_CONFIG + "\nflowchart LR\nLC1[\"調達<br/>購入・契約\"]\nLC2[\"導入<br/>配備・設定\"]\nLC3[\"運用<br/>利用状況の把握\"]\nLC4[\"保守<br/>更新・パッチ\"]\nLC5[\"廃棄・返却<br/>権利の整理\"]\nLC1 --> LC2\nLC2 --> LC3\nLC3 --> LC4\nLC4 --> LC5\nLC5 -.->|\"棚卸しの結果を次の調達へ\"| LC1\nstyle LC1 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle LC2 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle LC3 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle LC4 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle LC5 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d",
"mmd-2": MERMAID_CONFIG + "\nflowchart LR\nVA[\"2013年版<br/>Software asset management<br/>Part 5\"]\nVB[\"2015年版<br/>IT asset management<br/>Part 5\"]\nVC[\"対象の拡大<br/>ソフトウェアからIT資産全般へ\"]\nVA -->|\"改訂\"| VB\nVB --> VC\nstyle VA fill:#f3f4f6,stroke:#6b7280,color:#111827\nstyle VB fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle VC fill:#fff7e0,stroke:#b7791f,color:#3d2a00",
"mmd-3": MERMAID_CONFIG + "\nflowchart TB\nPT[\"ISO/IEC 19770-5:2015\"]\nP1[\"① ファミリーの全体像\"]\nP2[\"② ITAM・SAMの入門\"]\nP3[\"③ SAMの基本原則とアプローチ\"]\nP4[\"④ 一貫した用語と定義\"]\nPT --> P1\nPT --> P2\nPT --> P3\nPT --> P4\nstyle PT fill:#1e3a8a,stroke:#1e3a8a,color:#ffffff\nstyle P1 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle P2 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle P3 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle P4 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d",
"mmd-4": MERMAID_CONFIG + "\nflowchart TB\nFM5[\"19770-5<br/>概要と用語<br/>全体の共通言語\"]\nFM1[\"19770-1<br/>ITAMシステム要求事項<br/>プロセスと管理の枠組み\"]\nFM2[\"19770-2<br/>SWID<br/>何が入っているか\"]\nFM3[\"19770-3<br/>ENT<br/>何を使ってよいか\"]\nFM4[\"19770-4<br/>RUM<br/>どれだけ使ったか\"]\nFM8[\"19770-8<br/>マッピング指針\"]\nFM5 --> FM1\nFM5 --> FM2\nFM5 --> FM3\nFM5 --> FM4\nFM5 --> FM8\nFM1 -.->|\"プロセスがデータを活用\"| FM2\nFM2 <-->|\"識別情報を整合\"| FM3\nFM3 <-->|\"権利情報を整合\"| FM4\nstyle FM5 fill:#1e3a8a,stroke:#1e3a8a,color:#ffffff\nstyle FM1 fill:#fff7e0,stroke:#b7791f,color:#3d2a00\nstyle FM2 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle FM3 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle FM4 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle FM8 fill:#ecfdf5,stroke:#2f855a,color:#064e3b",
"mmd-5": MERMAID_CONFIG + "\nflowchart LR\nDT1[\"SWID<br/>何が入っているか\"]\nDT2[\"ENT<br/>何を使ってよいか\"]\nDT3[\"RUM<br/>どれだけ使ったか\"]\nDT4[\"突き合わせ<br/>ライセンスの過不足を判定\"]\nDT5[\"コンプライアンスの証明\"]\nDT6[\"コスト最適化\"]\nDT1 --> DT4\nDT2 --> DT4\nDT3 --> DT4\nDT4 --> DT5\nDT4 --> DT6\nstyle DT1 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle DT2 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle DT3 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle DT4 fill:#fff7e0,stroke:#b7791f,color:#3d2a00\nstyle DT5 fill:#ecfdf5,stroke:#2f855a,color:#064e3b\nstyle DT6 fill:#ecfdf5,stroke:#2f855a,color:#064e3b",
"mmd-6": MERMAID_CONFIG + "\nflowchart LR\nLC1[\"配布前のソフトウェア\"]\nLC2[\"インストール済みのソフトウェア\"]\nLC3[\"パッチ適用済みのソフトウェア\"]\nTG1[\"コーパスタグ<br/>インストール媒体を識別\"]\nTG2[\"プライマリタグ<br/>インストール済み製品を識別\"]\nTG3[\"パッチタグ<br/>適用したパッチを識別\"]\nTG4[\"サプリメンタルタグ<br/>利用者が情報を追加\"]\nLC1 -->|\"インストール\"| LC2\nLC2 -->|\"パッチ適用\"| LC3\nLC1 -.->|\"媒体の情報\"| TG1\nLC2 -.->|\"別のタグをインストールまたは作成\"| TG2\nLC3 -.->|\"別のタグを追加\"| TG3\nTG2 ---|\"併存\"| TG3\nTG4 -.->|\"元のタグは変更せず補足\"| TG2\nstyle LC1 fill:#fff7e0,stroke:#b7791f,color:#3d2a00\nstyle LC2 fill:#fff7e0,stroke:#b7791f,color:#3d2a00\nstyle LC3 fill:#fff7e0,stroke:#b7791f,color:#3d2a00\nstyle TG1 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle TG2 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle TG3 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle TG4 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d",
"mmd-7": MERMAID_CONFIG + "\nflowchart TB\nSC1[\"正確なIT資産データ<br/>台帳・SWID等\"]\nSC2[\"脆弱性管理<br/>影響範囲の特定\"]\nSC3[\"パッチ管理<br/>適用漏れの発見\"]\nSC4[\"ライセンス遵守<br/>監査対応\"]\nSC5[\"コスト最適化\"]\nSC1 --> SC2\nSC1 --> SC3\nSC1 --> SC4\nSC1 --> SC5\nstyle SC1 fill:#1e3a8a,stroke:#1e3a8a,color:#ffffff\nstyle SC2 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle SC3 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle SC4 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle SC5 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d",
"mmd-8": MERMAID_CONFIG + "\nflowchart LR\nRV1[\"2015年7月<br/>第2版発行\"]\nRV2[\"2021年2月<br/>確認\"]\nRV3[\"2023年8月<br/>改訂プロジェクト承認\"]\nRV4[\"2024年10月<br/>DIS投票開始\"]\nRV5[\"2026年7月<br/>FDIS登録\"]\nRV6[\"2026年9月22日<br/>最終承認投票開始\"]\nRV7[\"2026年11月予定<br/>第3版発行\"]\nRV1 --> RV2\nRV2 --> RV3\nRV3 --> RV4\nRV4 --> RV5\nRV5 --> RV6\nRV6 --> RV7\nstyle RV1 fill:#f3f4f6,stroke:#6b7280,color:#111827\nstyle RV2 fill:#f3f4f6,stroke:#6b7280,color:#111827\nstyle RV3 fill:#f3f4f6,stroke:#6b7280,color:#111827\nstyle RV4 fill:#f3f4f6,stroke:#6b7280,color:#111827\nstyle RV5 fill:#f3f4f6,stroke:#6b7280,color:#111827\nstyle RV6 fill:#fff7e0,stroke:#b7791f,color:#3d2a00\nstyle RV7 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d",
"mmd-9": MERMAID_CONFIG + "\nflowchart TB\nGD1{\"何を知りたいですか？\"}\nGD2[\"全体像と用語<br/>19770-5を読む\"]\nGD3[\"組織の仕組みを作る<br/>19770-1を読む\"]\nGD4[\"ソフトの識別データ<br/>19770-2とNISTIR 8060\"]\nGD5[\"ライセンス権利のデータ<br/>19770-3を読む\"]\nGD6[\"利用実績の計測データ<br/>19770-4を読む\"]\nGD1 -->|\"まず全体を知りたい\"| GD2\nGD1 -->|\"運用体制・認証\"| GD3\nGD1 -->|\"インストール状況\"| GD4\nGD1 -->|\"ライセンス条件\"| GD5\nGD1 -->|\"利用量の測定\"| GD6\nstyle GD1 fill:#fff7e0,stroke:#b7791f,color:#3d2a00\nstyle GD2 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle GD3 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle GD4 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle GD5 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d\nstyle GD6 fill:#e8f0fe,stroke:#3b6fd4,color:#0b1f4d"
};
