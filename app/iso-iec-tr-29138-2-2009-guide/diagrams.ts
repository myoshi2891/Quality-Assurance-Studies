export const MERMAID_CONFIG = `%%{init: {"theme":"base","themeVariables":{"background":"#0c1a2e","primaryColor":"#13233a","primaryBorderColor":"#7c9eff","primaryTextColor":"#e6edf7","mainBkg":"#13233a","nodeBorder":"#7c9eff","lineColor":"#7c9eff","secondaryColor":"#13233a","tertiaryColor":"#0c1a2e","clusterBkg":"#0c1a2e","clusterBorder":"#1f3452","edgeLabelBackground":"#07111e","fontFamily":"Noto Sans JP, sans-serif","fontSize":"16px"},"htmlLabels":true,"flowchart":{"curve":"basis"}}}%%`;
export const DIAGRAM_0 = `${MERMAID_CONFIG}
flowchart LR
FAM["ISO/IEC TR 29138 2009 三部構成の技術報告書"]
PA1["Part 1 ユーザーニーズ要約"]
PA2["Part 2 規格インベントリ 本ガイドの対象"]
PA3["Part 3 ユーザーニーズ対応付けの指針"]
NEW1["ISO/IEC 29138-1:2018 ユーザーアクセシビリティニーズ"]
NEW3["ISO/IEC 29138-3:2022 ユーザーニーズ対応付けの要件と推奨"]
INV13["規格インベントリ 2013年版 Part 2 を拡張した文書"]
FAM --> PA1
FAM --> PA2
FAM --> PA3
PA1 -->|"後継版"| NEW1
PA3 -->|"後継版"| NEW3
PA2 -.->|"発展版"| INV13`;
export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart TD
ROOT["TR 29138-2 の一覧 広い順に足し合わせて使う"]
K1["4.1 高レベル 最も広く使える指針 ほかの分類にも当てはまる"]
K2["4.2 ハードウェア 機器 系"]
K3["4.3 ソフトウェア サービス 系"]
K4["4.4 ユーザーの能力 系"]
K5["4.5 環境 系"]
K6["4.6 通信サービス 系"]
K7["4.7 その他"]
ROOT --> K1
ROOT --> K2
ROOT --> K3
ROOT --> K4
ROOT --> K5
ROOT --> K6
ROOT --> K7`;
export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TD
SECT["1つの分類 例 4.3 ソフトウェア系"]
SUBA["区分A 主題がアクセシビリティ"]
SUBB["区分B 一部だけ関係する"]
ORD1["① ISO と ISO/IEC の規格 ISO番号順"]
ORD2["② その他の国際規格やガイドライン 例 W3C IEEE"]
ORD3["③ 地域規格 国内規格 ガイドライン 法令"]
SECT --> SUBA
SECT --> SUBB
SUBA --> ORD1
SUBB --> ORD1
ORD1 --> ORD2
ORD2 --> ORD3`;
export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart LR
ST1["2007-09-05 新規プロジェクト承認"]
ST2["2007-10-30 委員会原案 CD の登録と照会"]
ST3["2008-03-31 CD を DIS として登録することを承認"]
ST4["2008-07-12 ISO: DIS登録・DIS投票開始 / JTC 1: DTR投票"]
ST5["2008-10-22 DIS を FDIS として登録することを承認"]
ST6["2009-03-18 最終文書受領 または FDIS登録 後に8週間の投票"]
ST7["2009-06-10 公開"]
ST1 --> ST2
ST2 --> ST3
ST3 --> ST4
ST4 --> ST5
ST5 --> ST6
ST6 --> ST7`;
export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart TD
WK1["① 対象の製品を決める 例 業務Webアプリ"]
WK2["② 7分類のどこに当たるかを選ぶ 例 4.3 ソフトウェア"]
WK3["③ 該当分類の収録規格を拾い出す"]
WK4{"④ 最新版か 置き換えや廃止はないか"}
WK5["⑤ 現行の規格や法令を調べ直す"]
WK6["⑥ ユーザーニーズと対応付ける 29138-1 と 29138-3 を参照"]
WK7["⑦ テスト条件とチェック項目に落とし込む"]
WK8{"後継の規格や法令はあるか"}
WK9["対象から外す または ほかに当てはまる規格を選ぶ"]
WK1 --> WK2
WK2 --> WK3
WK3 --> WK4
WK4 -->|"いいえ"| WK5
WK5 --> WK8
WK8 -->|"ある 後継版を採用"| WK4
WK8 -->|"ない"| WK9
WK9 --> WK6
WK4 -->|"はい"| WK6
WK6 --> WK7`;
