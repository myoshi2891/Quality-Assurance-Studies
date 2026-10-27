// Original HTML SVG connections take precedence over the companion Markdown.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#0d1c30",
    "primaryColor": "#12263f",
    "mainBkg": "#12263f",
    "primaryTextColor": "#e6eefc",
    "primaryBorderColor": "#7c9eff",
    "lineColor": "#7c9eff",
    "secondaryColor": "#12263f",
    "tertiaryColor": "#12263f",
    "nodeBorder": "#7c9eff",
    "clusterBkg": "#12263f",
    "clusterBorder": "#7c9eff",
    "edgeLabelBackground": "#07111e",
    "actorBkg": "#12263f",
    "actorBorder": "#7c9eff",
    "actorTextColor": "#e6eefc",
    "signalColor": "#e6eefc",
    "signalTextColor": "#e6eefc",
    "labelBoxBkgColor": "#12263f",
    "labelTextColor": "#e6eefc",
    "noteBkgColor": "#12263f",
    "noteTextColor": "#e6eefc",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "16px"
  },
  "htmlLabels": true,
  "flowchart": {
    "curve": "basis"
  }
}}%%`;

export const DIAGRAMS: Record<string, string> = {
"mmd-1": MERMAID_CONFIG + "\nflowchart LR\nL1[\"DIS登録<br/>2024-12-20\"] --> L2[\"DIS投票開始<br/>2025-02-24<br/>12週間\"]\nL2 --> L3[\"DIS投票終了<br/>2025-05-20\"]\nL3 --> L4[\"FDIS登録<br/>2025-10-11\"]\nL4 --> L5[\"FDIS投票開始<br/>2026-03-03<br/>8週間\"]\nL5 --> L6[\"投票終了<br/>2026-04-29\"]\nL6 --> L7[\"発行<br/>2026-07-16\"]\n\nclassDef doneStep fill:#1f3a5f,stroke:#7c9eff,color:#ffffff\nclass L1,L2,L3,L4,L5,L6,L7 doneStep",
"mmd-2": MERMAID_CONFIG + "\nflowchart TB\nsubgraph SG_ORIGIN[\"元になった技術\"]\nTT[\"TrueType<br/>Apple / Microsoft\"]\nPS[\"PostScript Type 1 / CFF<br/>Adobe\"]\nend\nsubgraph SG_SPEC[\"統合された仕様\"]\nOT[\"OpenType<br/>業界仕様\"]\nOFF[\"OFF = ISO/IEC 14496-22<br/>国際標準\"]\nend\nsubgraph SG_WEB[\"Web配信\"]\nWOFF[\"WOFF / WOFF2<br/>圧縮ラッパー\"]\nend\n\nTT --> OT\nPS --> OT\nOT <-->|\"内容を同期して維持\"| OFF\nOT -.->|\"圧縮して配信\"| WOFF\n\nclassDef origin fill:#2b2f3a,stroke:#9aa4b2,color:#ffffff\nclassDef spec fill:#1f3a5f,stroke:#7c9eff,color:#ffffff\nclassDef web fill:#3a2f1f,stroke:#e0a458,color:#ffffff\nclass TT,PS origin\nclass OT,OFF spec\nclass WOFF web",
"mmd-3": MERMAID_CONFIG + "\nflowchart LR\nV1[\"第1版<br/>2007\"] --> V2[\"第2版<br/>2009\"]\nV2 --> V3[\"第3版<br/>2015<br/>カラー・MATH\"]\nV3 --> V4[\"第4版<br/>2019<br/>バリアブル\"]\nV4 --> V4A[\"Amd 1 / Amd 2<br/>2020 / 2023\"]\nV4A --> V5[\"第5版<br/>2026<br/>24ビット GID\"]\n\nclassDef old fill:#2b2f3a,stroke:#9aa4b2,color:#ffffff\nclassDef latest fill:#1f5f3a,stroke:#6fe09a,color:#ffffff\nclass V1,V2,V3,V4,V4A old\nclass V5 latest",
"mmd-4": MERMAID_CONFIG + "\nflowchart TB\nFILE[\"OFFフォントファイル\"] --> HDR[\"sfntヘッダー<br/>形式識別子・テーブル数\"]\nHDR --> DIR[\"テーブルディレクトリ<br/>タグ・位置・長さの一覧\"]\nDIR --> GRP_REQ[\"必須テーブル群\"]\nDIR --> GRP_OUT[\"アウトライン<br/>テーブル群\"]\nDIR --> GRP_LAY[\"レイアウト<br/>テーブル群\"]\nDIR --> GRP_COL[\"カラー<br/>テーブル群\"]\nDIR --> GRP_VAR[\"バリエーション<br/>テーブル群\"]\n\nGRP_REQ --> REQ1[\"cmap / head / hhea / hmtx<br/>maxp / name / OS/2 / post\"]\nGRP_OUT --> OUT1[\"glyf+loca<br/>TrueType形式\"]\nGRP_OUT --> OUT2[\"CFF / CFF2<br/>PostScript形式\"]\nGRP_LAY --> LAY1[\"GSUB / GPOS / GDEF\"]\nGRP_COL --> COL1[\"COLR / CPAL / SVG / CBDT / CBLC\"]\nGRP_VAR --> VAR1[\"fvar / gvar / avar / STAT など\"]\n\nclassDef root fill:#1f3a5f,stroke:#7c9eff,color:#ffffff\nclassDef group fill:#2b2f3a,stroke:#9aa4b2,color:#ffffff\nclassDef leaf fill:#1f5f3a,stroke:#6fe09a,color:#ffffff\nclass FILE,HDR,DIR root\nclass GRP_REQ,GRP_OUT,GRP_LAY,GRP_COL,GRP_VAR group\nclass REQ1,OUT1,OUT2,LAY1,COL1,VAR1 leaf",
"mmd-5": MERMAID_CONFIG + "\nflowchart TB\nP1[\"入力：文字列<br/>Unicode\"] --> P2[\"cmapで<br/>文字→GIDに変換\"]\nP2 --> P3[\"GSUBで<br/>合字・異体字へ置換\"]\nP3 --> P4[\"GPOSで<br/>カーニング等の位置調整\"]\nP4 --> P5[\"hmtxで<br/>文字送り幅を取得\"]\nP5 --> P6[\"glyf / CFFで<br/>輪郭データを取得\"]\nP6 --> P7[\"ラスタライズ<br/>画素へ変換\"]\nP7 --> P8[\"画面に表示\"]\n\nclassDef step fill:#1f3a5f,stroke:#7c9eff,color:#ffffff\nclassDef final fill:#1f5f3a,stroke:#6fe09a,color:#ffffff\nclass P1,P2,P3,P4,P5,P6,P7 step\nclass P8 final",
"mmd-6": MERMAID_CONFIG + "\nflowchart LR\nCF[\"カラーフォント\"] --> CF1[\"ビットマップ方式<br/>CBDT / CBLC\"]\nCF --> CF2[\"レイヤー方式<br/>COLR / CPAL\"]\nCF --> CF3[\"SVG方式<br/>SVG テーブル\"]\n\nCF1 --> CF1D[\"絵文字など<br/>拡大に弱い\"]\nCF2 --> CF2D[\"ベクターで<br/>拡大に強い\"]\nCF3 --> CF3D[\"表現力が高い<br/>XML準拠が必須\"]\n\nclassDef root fill:#1f3a5f,stroke:#7c9eff,color:#ffffff\nclassDef type fill:#2b2f3a,stroke:#9aa4b2,color:#ffffff\nclassDef note fill:#1f5f3a,stroke:#6fe09a,color:#ffffff\nclass CF root\nclass CF1,CF2,CF3 type\nclass CF1D,CF2D,CF3D note",
"mmd-7": MERMAID_CONFIG + "\nflowchart TB\nS1[\"フォントを読み込む\"] --> S2{\"GLYF が<br/>存在するか\"}\nS2 -->|\"はい\"| S3[\"GLYF と LOCA を<br/>ペアで採用\"]\nS2 -->|\"いいえ\"| S4[\"従来の glyf と loca を採用\"]\nS3 --> S5[\"24ビットGIDで<br/>字形を取得\"]\nS4 --> S6[\"16ビットGIDで<br/>字形を取得\"]\nS5 --> S7[\"描画へ\"]\nS6 --> S7\n\nclassDef step fill:#1f3a5f,stroke:#7c9eff,color:#ffffff\nclassDef decision fill:#3a2f1f,stroke:#e0a458,color:#ffffff\nclassDef newpath fill:#1f5f3a,stroke:#6fe09a,color:#ffffff\nclass S1,S4,S6,S7 step\nclass S2 decision\nclass S3,S5 newpath",
"mmd-8": MERMAID_CONFIG + "\nflowchart LR\nI1[\"規格<br/>ISO/IEC 14496-22:2026\"] --> I2[\"フォント制作<br/>fontTools\"]\nI1 --> I3[\"シェーピング<br/>HarfBuzz / harfrust\"]\nI1 --> I4[\"読み書き・描画<br/>fontations\"]\nI2 --> I5[\"24ビット対応<br/>フォントを生成\"]\nI3 --> I6[\"24ビット対応<br/>フォントを整形\"]\nI4 --> I7[\"24ビット対応<br/>フォントを描画\"]\nI5 --> I8[\"OS・ブラウザ・アプリ<br/>での利用\"]\nI6 --> I8\nI7 --> I8\n\nclassDef spec fill:#1f3a5f,stroke:#7c9eff,color:#ffffff\nclassDef tool fill:#2b2f3a,stroke:#9aa4b2,color:#ffffff\nclassDef out fill:#1f5f3a,stroke:#6fe09a,color:#ffffff\nclass I1 spec\nclass I2,I3,I4,I5,I6,I7 tool\nclass I8 out",
"mmd-9": MERMAID_CONFIG + "\nflowchart TB\nT1[\"フォントを用意\"] --> T2[\"ttx -l で<br/>テーブル一覧を確認\"]\nT2 --> T3{\"小文字か<br/>大文字か\"}\nT3 -->|\"小文字のみ\"| T4[\"従来形式<br/>最大65,535グリフ\"]\nT3 -->|\"大文字を含む\"| T5[\"第5版の拡張形式\"]\nT4 --> T6[\"既存ツールで<br/>通常どおり検証\"]\nT5 --> T7[\"対応ツールの版を確認<br/>HarfBuzz / fontTools 等\"]\n\nclassDef step fill:#1f3a5f,stroke:#7c9eff,color:#ffffff\nclassDef decision fill:#3a2f1f,stroke:#e0a458,color:#ffffff\nclassDef result fill:#1f5f3a,stroke:#6fe09a,color:#ffffff\nclass T1,T2,T6,T7 step\nclass T3 decision\nclass T4,T5 result",
"mmd-10": MERMAID_CONFIG + "\nflowchart LR\nR1[\"基礎<br/>グリフとGIDを理解\"] --> R2[\"構造<br/>テーブルを読む\"]\nR2 --> R3[\"描画の流れ<br/>cmap・GSUB・GPOS\"]\nR3 --> R4[\"発展<br/>バリアブル・カラー\"]\nR4 --> R5[\"最新<br/>第5版の24ビット化\"]\nR5 --> R6[\"実践<br/>fontToolsで検証\"]\n\nclassDef step fill:#1f3a5f,stroke:#7c9eff,color:#ffffff\nclassDef goal fill:#1f5f3a,stroke:#6fe09a,color:#ffffff\nclass R1,R2,R3,R4,R5 step\nclass R6 goal"
};
