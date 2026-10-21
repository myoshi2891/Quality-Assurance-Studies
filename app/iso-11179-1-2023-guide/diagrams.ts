// HTML SVGs define the labels, shapes, connections and group structure.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#08162a",
    "primaryColor": "#12233d",
    "mainBkg": "#12233d",
    "primaryTextColor": "#e6eefc",
    "primaryBorderColor": "#7c9eff",
    "lineColor": "#8fb0ff",
    "secondaryColor": "#0c1a2e",
    "tertiaryColor": "#0c1a2e",
    "nodeBorder": "#7c9eff",
    "clusterBkg": "#0c1a2e",
    "clusterBorder": "#2c4470",
    "edgeLabelBackground": "#0b1626",
    "actorBkg": "#12233d",
    "actorBorder": "#7c9eff",
    "actorTextColor": "#e6eefc",
    "signalColor": "#e6eefc",
    "signalTextColor": "#e6eefc",
    "labelBoxBkgColor": "#12233d",
    "labelTextColor": "#e6eefc",
    "noteBkgColor": "#0c1a2e",
    "noteTextColor": "#e6eefc",
    "fontFamily": "Noto Sans JP, Noto Sans CJK JP, sans-serif",
    "fontSize": "16px"
  },
  "htmlLabels": true,
  "flowchart": {
    "curve": "basis"
  }
}}%%`;
export const DIAGRAMS: Record<string, string> = {
"diagram-1": `${MERMAID_CONFIG}
flowchart LR
N0_S1["STEP 1<br>課題を知る"]
N0_S2["STEP 2<br>規格の位置づけ"]
N0_S3["STEP 3<br>ファミリー全体像"]
N0_S4["STEP 4<br>2023年版の変更点"]
N0_S5["STEP 5<br>コア概念"]
N0_S6["STEP 6<br>2層構造"]
N0_S7["STEP 7<br>運用と役割"]
N0_S8["STEP 8<br>他規格・実装"]
N0_S9["STEP 9<br>実践"]
N0_S10["STEP 10<br>確認"]
N0_S1 --> N0_S2
N0_S2 --> N0_S3
N0_S3 --> N0_S4
N0_S4 --> N0_S5
N0_S5 --> N0_S6
N0_S6 --> N0_S7
N0_S7 --> N0_S8
N0_S8 --> N0_S9
N0_S9 --> N0_S10`,
"diagram-2": `${MERMAID_CONFIG}
flowchart TB
subgraph N1_BEFORE["従来の項目定義"]
direction TB
N1_B1["電子カルテ sex<br>M / F / U"]
N1_B2["治験 GENDER<br>1 / 2 / 9"]
N1_B3["受付 性別<br>男 / 女 / 不明"]
end
subgraph N1_AFTER["11179の登録方式"]
direction LR
N1_DEC["データエレメントコンセプト<br>患者の性別（意味）"]
N1_CD["概念領域<br>男・女・その他・不明（値の意味の集合）"]
N1_VD1["値領域A：M / F / O / U"]
N1_VD2["値領域B：1 / 2 / 3 / 9"]
N1_VD3["値領域C：男 / 女 / その他 / 不明"]
end

N1_BEFORE ==> N1_AFTER
N1_DEC --- N1_CD
N1_CD --- N1_VD1
N1_CD --- N1_VD2
N1_CD --- N1_VD3`,
"diagram-3": `${MERMAID_CONFIG}
flowchart TB
N2_P1["Part 1 フレームワーク<br>（地図・入口）"]
N2_UNDERSTAND["全体像と用語の理解"]
N2_NAVI["各パートへの案内"]
N2_REL["他のSC 32規格との関係"]
N2_P3["Part 3 登録共通機能<br>メタモデル"]
N2_EXT["拡張パート群<br>30 / 31 / 32 / 33 / 34 / 35"]
N2_OPS["運用系パート<br>命名・登録など"]
N2_P1 --> N2_UNDERSTAND
N2_P1 --> N2_NAVI
N2_P1 --> N2_REL
N2_NAVI --> N2_P3
N2_NAVI --> N2_EXT
N2_NAVI --> N2_OPS`,
"diagram-4": `${MERMAID_CONFIG}
flowchart TB
subgraph N3_EXT["Part 3 の拡張群"]
direction LR
N3_P30["Part 30<br>基本属性（簡易用）"]
N3_P31["Part 31<br>データ仕様"]
N3_P32["Part 32<br>概念体系"]
N3_P33["Part 33<br>データセット"]
N3_P34["Part 34<br>計算可能データ"]
N3_P35["Part 35<br>モデル"]
end
subgraph N3_OPS["運用・原則系"]
direction TB
N3_P2["Part 2 分類 TR"]
N3_P4["Part 4 定義の書き方"]
N3_P5["Part 5 命名原則"]
N3_P6["Part 6 登録"]
end
N3_P1["Part 1<br>Framework"]
N3_P3["Part 3<br>レジストリ共通メタモデル"]
N3_P1 --> N3_P3
N3_P3 --> N3_P31
N3_P3 --> N3_P32
N3_P3 --> N3_P33
N3_P3 --> N3_P34
N3_P3 --> N3_P35
N3_P3 --> N3_P30
N3_P1 --> N3_OPS`,
"diagram-5": `${MERMAID_CONFIG}
flowchart LR
subgraph N4_OLD["従来の構成"]
direction TB
N4_O3["Part 3<br>基本属性<br>データ記述<br>共通機能 など"]
end
subgraph N4_NEW["2023年版の構成"]
direction TB
N4_N3["Part 3 共通機能"]
N4_N30["Part 30 基本属性"]
N4_N31["Part 31 データ仕様"]
N4_N32["Part 32 概念体系"]
N4_N33["Part 33 データセット"]
N4_N35["Part 35 モデル"]
end

N4_O3 ==> N4_N3
N4_O3 ==> N4_N30
N4_O3 ==> N4_N31
N4_O3 ==> N4_N32
N4_O3 ==> N4_N33
N4_O3 ==> N4_N35`,
"diagram-6": `${MERMAID_CONFIG}
flowchart TB
N5_OC["オブジェクトクラス<br>何について記録するか"]
N5_PR["プロパティ<br>その特性は何か"]
N5_DEC["データエレメントコンセプト DEC<br>意味"]
N5_CD["概念領域 CD<br>取り得る値の意味の集合"]
N5_VD["値領域 VD<br>実際に使う値の集合と表現"]
N5_DE["データエレメント DE<br>意味と表現の組"]
N5_OC --> N5_DEC
N5_PR --> N5_DEC
N5_CD -.->|"値の意味を与える"| N5_VD
N5_DEC --> N5_DE
N5_VD --> N5_DE`,
"diagram-7": `${MERMAID_CONFIG}
flowchart LR
N6_OC["オブジェクトクラス<br>人"]
N6_PR["プロパティ<br>純収入"]
N6_DEC["DEC<br>人の純収入"]
N6_OC --> N6_DEC
N6_PR --> N6_DEC`,
"diagram-8": `${MERMAID_CONFIG}
flowchart LR
N7_VD["値領域 VD"]
N7_T["データ型<br>文字・整数・日付など"]
N7_U["測定単位<br>mmHg・kg など"]
N7_PV["許容値の集合<br>列挙または規則"]
N7_RC["表現クラス<br>コード・日付・数量など"]
N7_VD --> N7_T
N7_VD --> N7_U
N7_VD --> N7_PV
N7_VD --> N7_RC`,
"diagram-9": `${MERMAID_CONFIG}
flowchart TB
N8_DEC["DEC：患者の性別"]
N8_DE1["DE-1<br>VD：M / F / O / U"]
N8_DE2["DE-2<br>VD：1 / 2 / 3 / 9"]
N8_DE3["DE-3<br>VD：男 / 女 / その他 / 不明"]
N8_DEC --> N8_DE1
N8_DEC --> N8_DE2
N8_DEC --> N8_DE3`,
"diagram-10": `${MERMAID_CONFIG}
classDiagram
direction LR
class ObjectClass
class Property
class DataElementConcept
class ConceptualDomain
class ValueMeaning
class ValueDomain
class PermissibleValue
class DataElement
ObjectClass --> DataElementConcept : 対象を与える
Property --> DataElementConcept : 特性を与える
DataElementConcept --> DataElement : 意味を与える
ValueDomain --> DataElement : 表現を与える
ConceptualDomain --> ValueDomain : 値の意味を与える
ConceptualDomain o-- ValueMeaning : 含む
ValueDomain o-- PermissibleValue : 含む
PermissibleValue --> ValueMeaning : 意味を指す`,
"diagram-11": `${MERMAID_CONFIG}
flowchart TB
subgraph N10_L1["概念レベル"]
direction LR
N10_DEC["データエレメントコンセプト"]
N10_CD["概念領域"]
end
subgraph N10_L2["表現レベル"]
direction TB
N10_DE["データエレメント"]
N10_VD["値領域"]
end

N10_DEC ==> N10_DE
N10_CD ==> N10_VD
N10_VD --> N10_DE`,
"diagram-12": `${MERMAID_CONFIG}
sequenceDiagram
participant SUB as 提出者
participant STW as 管理者
participant REG as 登録官
participant RA as 登録機関
participant MDR as レジストリ
SUB->>REG: 新しい項目の登録を申請
REG->>STW: 内容の確認・責任範囲の確認を依頼
STW-->>REG: 定義・表現の妥当性を回答
REG->>RA: 登録可否を上申
RA-->>REG: 承認
REG->>MDR: 項目を登録
MDR-->>SUB: 識別子とともに登録を通知`,
"diagram-13": `${MERMAID_CONFIG}
flowchart LR
N12_P1["ISO/IEC 11179-1:2023"]
N12_A["ISO/IEC 19763 系<br>メタモデル相互運用"]
N12_B["ISO/IEC 20943 系<br>MDR内容達成の手順"]
N12_C["その他 SC 32 の<br>メタデータ関連規格"]
N12_P1 --> N12_A
N12_P1 --> N12_B
N12_P1 --> N12_C`,
"diagram-14": `${MERMAID_CONFIG}
flowchart TB
N13_START(["新しいデータ項目が必要"])
N13_Q1{"同じ意味の<br>DEC が既にある？"}
N13_REUSE_DEC["既存の DEC を再利用"]
N13_NEW_DEC["オブジェクトクラスと<br>プロパティを決めて DEC を新規作成"]
N13_Q2{"同じ表現の<br>VD が既にある？"}
N13_REUSE_VD["既存の VD を再利用"]
N13_NEW_VD["データ型・単位・許容値を決めて<br>VD を新規作成"]
N13_MAKE["DEC と VD を組合せて DE を作成"]
N13_REVIEW["定義・命名を<br>レビュー"]
N13_REGISTER["レジストリに登録"]
N13_END(["共有・再利用"])
N13_START --> N13_Q1
N13_Q1 -->|"はい"| N13_REUSE_DEC
N13_Q1 -->|"いいえ"| N13_NEW_DEC
N13_REUSE_DEC --> N13_Q2
N13_NEW_DEC --> N13_Q2
N13_Q2 -->|"はい"| N13_REUSE_VD
N13_Q2 -->|"いいえ"| N13_NEW_VD
N13_REUSE_VD --> N13_MAKE
N13_NEW_VD --> N13_MAKE
N13_MAKE --> N13_REVIEW
N13_REVIEW --> N13_REGISTER
N13_REGISTER --> N13_END`
};
