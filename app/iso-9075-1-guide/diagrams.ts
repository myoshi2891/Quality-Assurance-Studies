// Definitions reconstructed from the source HTML SVGs; preserve their layout directions.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#0d1b2e",
    "primaryColor": "#12233a",
    "mainBkg": "#12233a",
    "primaryTextColor": "#e6edf7",
    "primaryBorderColor": "#7c9eff",
    "lineColor": "#7c9eff",
    "secondaryColor": "#12233a",
    "tertiaryColor": "#12233a",
    "nodeBorder": "#7c9eff",
    "clusterBkg": "#12233a",
    "clusterBorder": "#7c9eff",
    "edgeLabelBackground": "#07111e",
    "actorBkg": "#12233a",
    "actorBorder": "#7c9eff",
    "actorTextColor": "#e6edf7",
    "signalColor": "#e6edf7",
    "signalTextColor": "#e6edf7",
    "labelBoxBkgColor": "#12233a",
    "labelTextColor": "#e6edf7",
    "noteBkgColor": "#12233a",
    "noteTextColor": "#e6edf7",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "16px"
  },
  "htmlLabels": true,
  "flowchart": {
    "curve": "basis"
  }
}}%%`;
export const DIAGRAMS: Record<string, string> = {
"diagram-0": `${MERMAID_CONFIG}
flowchart LR
N0_A["<p>ISO/IEC 9075 シリーズ<br>Database languages SQL</p>"]
N0_P1["<p>Part 1: Framework<br>(SQL/Framework)<br>★この記事の主役</p>"]
N0_P2["<p>Part 2: Foundation<br>(SQL/Foundation)<br>SQLの中核文法</p>"]
N0_P3["<p>Part 3: CLI</p>"]
N0_P4["<p>Part 4: PSM</p>"]
N0_P9["<p>Part 9: MED</p>"]
N0_P10["<p>Part 10: OLB</p>"]
N0_P11["<p>Part 11: Schemata</p>"]
N0_P13["<p>Part 13: JRT</p>"]
N0_P14["<p>Part 14: XML</p>"]
N0_P15["<p>Part 15: MDA</p>"]
N0_P16["<p>Part 16: PGQ<br>2023年に新設</p>"]
N0_A --> N0_P1
N0_A --> N0_P2
N0_A --> N0_P3
N0_A --> N0_P4
N0_A --> N0_P9
N0_A --> N0_P10
N0_A --> N0_P11
N0_A --> N0_P13
N0_A --> N0_P14
N0_A --> N0_P15
N0_A --> N0_P16
N0_P1 -.->|"用語・表記・概念を提供"| N0_P2
N0_P1 -.->|"用語・表記・概念を提供"| N0_P16`,
"diagram-1": `${MERMAID_CONFIG}
flowchart LR
N1_F["<p>Part 1<br>概念・用語・表記</p>"]
N1_FD["<p>Part 2<br>文法と動作の規定</p>"]
N1_EXT["<p>Part 4 / 14 / 16 など</p>"]
N1_F -->|"前提として参照"| N1_FD
N1_FD -->|"拡張"| N1_EXT
N1_F -->|"前提として参照"| N1_EXT`,
"diagram-2": `${MERMAID_CONFIG}
flowchart TD
N2_ENV["<p>SQL-environment<br>SQL環境</p>"]
N2_CAT["<p>Catalog<br>カタログ</p>"]
N2_SCH["<p>Schema<br>スキーマ</p>"]
N2_OBJ["<p>SQL-object<br>テーブル / ビュー / 型 / ルーチン など</p>"]
N2_DATA["<p>SQL-data<br>実際のデータ</p>"]
N2_ENV --> N2_CAT
N2_CAT --> N2_SCH
N2_SCH --> N2_OBJ
N2_OBJ --> N2_DATA`,
"diagram-3": `${MERMAID_CONFIG}
sequenceDiagram
    participant App as アプリケーション<br/>(SQL-agent)
    participant Cli as SQL-client
    participant Srv as SQL-server
    participant DB as データ
    App->>Cli: SQL文を発行
    Cli->>Srv: セッションを確立し送信
    Srv->>DB: 解析・実行
    DB-->>Srv: 結果
    Srv-->>Cli: 結果（または例外）
    Cli-->>App: 結果を返却`,
"diagram-4": `${MERMAID_CONFIG}
flowchart TD
N4_A["<p>SQL標準の全機能</p>"]
N4_B["<p>必須機能の集合<br>Core SQL</p>"]
N4_C["<p>オプション機能<br>機能ごとに識別子を持つ</p>"]
N4_D["<p>Core SQL に準拠すれば<br>最低限の標準準拠を主張可能</p>"]
N4_E["<p>ベンダーは機能単位で<br>対応を宣言</p>"]
N4_A --> N4_B
N4_A --> N4_C
N4_B --> N4_D
N4_C --> N4_E`,
"diagram-5": `${MERMAID_CONFIG}
flowchart TD
N5_N["<p>SQL:2023 の変更点</p>"]
N5_A["<p>既存SQLの<br>小さな改良</p>"]
N5_B["<p>JSON関連の<br>新機能</p>"]
N5_C["<p>新パート<br>Part 16: SQL/PGQ</p>"]
N5_N --> N5_A
N5_N --> N5_B
N5_N --> N5_C`,
"diagram-6": `${MERMAID_CONFIG}
flowchart LR
N6_T1["<p>person テーブル</p>"]
N6_G["<p>PROPERTY GRAPH</p>"]
N6_T2["<p>friendship テーブル</p>"]
N6_R["<p>パターンに一致した結果表</p>"]
N6_T1 -->|"頂点として定義"| N6_G
N6_T2 -->|"辺として定義"| N6_G
N6_G -->|"GRAPH_TABLE + MATCH"| N6_R`,
"diagram-7": `${MERMAID_CONFIG}
flowchart LR
N7_A["<p>2016年版<br>9075-1:2016<br>(撤回済み)</p>"]
N7_B["<p>2023年版<br>9075-1:2023<br>(現行・第6版)</p>"]
N7_C["<p>Cor 1:2022 は旧版に対する訂正</p>"]
N7_D["<p>Cor 1:2026<br>(現行版の訂正・発行済み)</p>"]
N7_E["<p>ISO/IEC CD 9075-1<br>(後継版・開発中)</p>"]
N7_A --> N7_B
N7_A --> N7_C
N7_B --> N7_D
N7_B -.-> N7_E`,
"diagram-8": `${MERMAID_CONFIG}
flowchart TD
N8_S1["<p>① 本ガイドで全体像を把握</p>"]
N8_S2["<p>② modern-sql.com で機能別の対応状況を確認</p>"]
N8_S3["<p>③ 利用中DBの SQL Conformance ドキュメントを読む</p>"]
N8_S4["<p>④ 機能IDごとの適合テストを作成</p>"]
N8_S5["<p>⑤ 必要に応じて ISO OBP で規格本文を確認</p>"]
N8_S1 --> N8_S2
N8_S2 --> N8_S3
N8_S3 --> N8_S4
N8_S4 --> N8_S5`
};
