export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "darkMode": true,
    "background": "#0d1b2e",
    "primaryColor": "#16233a",
    "mainBkg": "#16233a",
    "primaryTextColor": "#e6edf7",
    "primaryBorderColor": "#7c9eff",
    "nodeBorder": "#7c9eff",
    "lineColor": "#7c9eff",
    "secondaryColor": "#0d1b2e",
    "tertiaryColor": "#0d1b2e",
    "clusterBkg": "#0d1b2e",
    "titleColor": "#e6edf7",
    "edgeLabelBackground": "#0d1b2e",
    "fontFamily": "Noto Sans JP, Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo, sans-serif",
    "fontSize": "16px"
  },
  "htmlLabels": true,
  "flowchart": {
    "curve": "basis",
    "padding": 28,
    "wrappingWidth": 340
  }
}}%%`;
export const DIAGRAMS: Record<string, string> = {
"mermaid-diagram-1": `${MERMAID_CONFIG}\nflowchart TB
P1["ISO/IEC 27001:2022<br/>ISMSの要求事項"]
P2["ISO/IEC 27002:2022<br/>汎用の情報セキュリティ管理策 93個"]
P3["ISO 27799:2025<br/>医療向けの補足ガイダンス＋HLT管理策"]
P4["ISO 81001-1<br/>ヘルスソフトウェアの<br/>安全性・有効性・セキュリティ"]
P5["IEC/TS 81001-2-2:2025<br/>セキュリティ要求の伝達と能力の整理"]
P6["医療機関・医療ITベンダー・医療機器メーカー"]

P1 -->|管理策の選択に使う| P2
P2 -->|ベースとして拡張| P3
P4 -->|規範的参照| P3
P3 -->|Annex Dで対応づけ| P5
P3 -->|現場で適用| P6
P1 -->|SoA作成時にAnnex Aも活用| P3

classDef core fill:#1e3a8a,stroke:#93c5fd,color:#ffffff
classDef base fill:#334155,stroke:#cbd5e1,color:#ffffff
classDef user fill:#14532d,stroke:#86efac,color:#ffffff
class P3 core
class P1,P2,P4,P5 base
class P6 user`,
"mermaid-diagram-2": `${MERMAID_CONFIG}\nflowchart LR
S1["ISO 27799:2025の適用範囲"]
S2["もの<br/>ICT機器・EHR・医療機器・ビル/環境機器"]
S3["情報<br/>紙・電子・音声・画像・動画"]
S4["組織<br/>医療提供者・健康情報の管理者"]
S5["場所<br/>病院・救急車・在宅・遠隔医療"]

S1 --> S2
S1 --> S3
S1 --> S4
S1 --> S5

classDef root fill:#1e3a8a,stroke:#93c5fd,color:#ffffff
classDef leaf fill:#334155,stroke:#cbd5e1,color:#ffffff
class S1 root
class S2,S3,S4,S5 leaf`,
"mermaid-diagram-3": `${MERMAID_CONFIG}\nflowchart TB
M0["ISO 27799:2025 全体 72ページ"]
M1["本文 第1〜4章<br/>範囲・用語・一般事項"]
M2["本文 第5章 組織的管理策<br/>全43項目 うちHLT 6"]
M3["本文 第6章 人的管理策<br/>全9項目 うちHLT 1"]
M4["本文 第7章 物理的管理策<br/>全14項目"]
M5["本文 第8章 技術的管理策<br/>全35項目 うちHLT 1"]
M6["Annex A 医療向け管理策の一覧"]
M7["Annex B 2016年版との対応"]
M8["Annex C 医療組織の情報セキュリティ解説"]
M9["Annex D 要求例と81001-2-2との対応"]

M0 --> M1
M0 --> M2
M0 --> M3
M0 --> M4
M0 --> M5
M0 --> M6
M0 --> M7
M0 --> M8
M0 --> M9

classDef root fill:#1e3a8a,stroke:#93c5fd,color:#ffffff
classDef body fill:#334155,stroke:#cbd5e1,color:#ffffff
classDef annex fill:#78350f,stroke:#fcd34d,color:#ffffff
class M0 root
class M1,M2,M3,M4,M5 body
class M6,M7,M8,M9 annex`,
"mermaid-diagram-4": `${MERMAID_CONFIG}\nflowchart TD
Q0["ISO/IEC 27002:2022 の管理策1個"]
Q1{"医療で特別な<br/>配慮が必要か"}
Q2["パターンa<br/>そのまま適用"]
Q3{"管理策自体の<br/>書き換えが必要か"}
Q4["パターンb<br/>適用方法のガイダンスを追加"]
Q5["パターンc<br/>管理策・目的・ガイダンスを補足<br/>supplementary"]
Q6["パターンd<br/>27002にない医療専用管理策を新設<br/>HLT additional"]
Q7["Annex A に一覧化<br/>パターンcとdが対象"]

Q0 --> Q1
Q1 -->|いいえ| Q2
Q1 -->|はい| Q3
Q3 -->|いいえ ヒントだけ| Q4
Q3 -->|はい| Q5
Q0 -.->|27002に該当なし| Q6
Q5 --> Q7
Q6 --> Q7

classDef a fill:#334155,stroke:#cbd5e1,color:#ffffff
classDef b fill:#1e3a8a,stroke:#93c5fd,color:#ffffff
classDef c fill:#78350f,stroke:#fcd34d,color:#ffffff
classDef d fill:#14532d,stroke:#86efac,color:#ffffff
class Q2 a
class Q4 b
class Q5 c
class Q6,Q7 d`,
"mermaid-diagram-5": `${MERMAID_CONFIG}\nflowchart LR
T1["不正アクセスを防ぐため<br/>制御を強化"]
T2["使い勝手・可用性が低下"]
T3["現場がワークアラウンドを採用<br/>例 認証情報の使い回し"]
T4["追跡不能・誤操作の増加<br/>患者安全とセキュリティの両方が悪化"]
T5["管理策の選定時に<br/>安全への影響を評価"]
T6["臨床現場と一緒に<br/>運用可能な管理策へ調整"]

T1 --> T2
T2 --> T3
T3 --> T4
T5 --> T6
T4 -.->|再発防止| T5

classDef bad fill:#7f1d1d,stroke:#fca5a5,color:#ffffff
classDef good fill:#14532d,stroke:#86efac,color:#ffffff
classDef mid fill:#334155,stroke:#cbd5e1,color:#ffffff
class T1,T2 mid
class T3,T4 bad
class T5,T6 good`,
"mermaid-diagram-6": `${MERMAID_CONFIG}\nflowchart TD
C1["スコープを明確にする"]
C2["リスクアセスメントを実施"]
C3["リスク対応の方針を決める<br/>受容基準・対応オプション"]
C4["27799と27002から<br/>必要な管理策を選ぶ"]
C5{"医療向けガイダンスが<br/>ある管理策か"}
C6["ガイダンスに従って実施"]
C7["従わない理由と<br/>目的の達成方法を文書化"]
C8["安全への影響を確認"]
C9["適用宣言書 SoA に反映<br/>Annex Aも活用"]

C1 --> C2
C2 --> C3
C3 --> C4
C4 --> C5
C5 -->|はい 従う| C6
C5 -->|はい 従わない| C7
C6 --> C8
C7 --> C8
C8 --> C9

classDef step fill:#334155,stroke:#cbd5e1,color:#ffffff
classDef dec fill:#78350f,stroke:#fcd34d,color:#ffffff
classDef out fill:#14532d,stroke:#86efac,color:#ffffff
class C1,C2,C3,C4,C6,C7,C8 step
class C5 dec
class C9 out`,
"mermaid-diagram-7": `${MERMAID_CONFIG}\nflowchart LR
Z1["利用者・機器・サービス"]
Z2["小さなセグメントAに所属"]
Z3{"相互認証に成功したか"}
Z4["セグメントBへのアクセスを許可"]
Z5["アクセスを拒否・記録"]

Z1 --> Z2
Z2 --> Z3
Z3 -->|はい| Z4
Z3 -->|いいえ| Z5

classDef step fill:#334155,stroke:#cbd5e1,color:#ffffff
classDef dec fill:#78350f,stroke:#fcd34d,color:#ffffff
classDef ok fill:#14532d,stroke:#86efac,color:#ffffff
classDef ng fill:#7f1d1d,stroke:#fca5a5,color:#ffffff
class Z1,Z2 step
class Z3 dec
class Z4 ok
class Z5 ng`,
"mermaid-diagram-8": `${MERMAID_CONFIG}\nflowchart LR
D1["調達・開発する<br/>医療情報システム"]
D2["Annex D<br/>セキュリティ・プライバシー要求の例"]
D3["27799 の管理策"]
D4["IEC/TS 81001-2-2<br/>のセキュリティ能力"]
D5["MDS2<br/>製造業者開示書"]
D6["仕様書・RFP・テスト計画"]

D1 --> D2
D2 --> D3
D2 --> D4
D2 -.->|規格4.1で言及| D5
D3 --> D6
D4 --> D6

classDef n fill:#334155,stroke:#cbd5e1,color:#ffffff
classDef a fill:#78350f,stroke:#fcd34d,color:#ffffff
classDef o fill:#14532d,stroke:#86efac,color:#ffffff
class D1,D3,D4,D5 n
class D2 a
class D6 o`,
"mermaid-diagram-9": `${MERMAID_CONFIG}\nflowchart LR
V1["2008年 初版"]
V2["2016年 第2版<br/>27002:2013準拠"]
V3["2022年 ISO/IEC 27002 改訂<br/>93管理策・4テーマ"]
V4["2022年2月 新規作業項目承認"]
V5["2025年1〜4月 DISの投票"]
V6["2025年9〜11月 FDISの投票"]
V7["2025年12月18日 第3版 発行"]
V8["2026年 EN ISO 27799:2026"]

V1 --> V2
V2 --> V3
V3 --> V4
V4 --> V5
V5 --> V6
V6 --> V7
V7 --> V8

classDef old fill:#334155,stroke:#cbd5e1,color:#ffffff
classDef dev fill:#78350f,stroke:#fcd34d,color:#ffffff
classDef now fill:#14532d,stroke:#86efac,color:#ffffff
class V1,V2,V3 old
class V4,V5,V6 dev
class V7,V8 now`,
"mermaid-diagram-10": `${MERMAID_CONFIG}\nflowchart TD
I1["対象範囲を決める<br/>部門・システム・拠点・医療機器"]
I2["情報と資産の棚卸し<br/>電子カルテ・医療機器・クラウド・紙"]
I3["リスクアセスメント<br/>患者安全への影響も評価"]
I4["管理策を選定<br/>27002と27799のAnnex Aを活用"]
I5["Comply or Explainを整理<br/>従わない場合は理由を文書化"]
I6["適用宣言書 SoA を作成"]
I7["運用ルールを整備<br/>臨床現場と一緒に実効性を検証"]
I8["教育訓練<br/>経営層向けも含む"]
I9["監視・インシデント対応<br/>外部報告の仕組みも確認"]
I10["レビューと改善<br/>独立したレビューを含む"]

I1 --> I2
I2 --> I3
I3 --> I4
I4 --> I5
I5 --> I6
I6 --> I7
I7 --> I8
I8 --> I9
I9 --> I10
I10 -.->|継続的改善| I3

classDef plan fill:#1e3a8a,stroke:#93c5fd,color:#ffffff
classDef doit fill:#334155,stroke:#cbd5e1,color:#ffffff
classDef check fill:#14532d,stroke:#86efac,color:#ffffff
class I1,I2,I3,I4,I5,I6 plan
class I7,I8,I9 doit
class I10 check`,
"mermaid-diagram-11": `${MERMAID_CONFIG}\nflowchart TB
R1["組織のISMS<br/>ISO/IEC 27001"]
R2["管理策<br/>ISO/IEC 27002 + ISO 27799"]
R3["開発プロセス<br/>IEC 62304・IEC 81001-5-1"]
R4["製品のセキュリティ要求の伝達<br/>IEC/TS 81001-2-2・MDS2"]
R5["プライバシー<br/>ISO/IEC 27701"]
R6["安全・有効性・セキュリティの原則<br/>ISO 81001-1"]

R6 --> R2
R1 --> R2
R2 --> R4
R3 --> R4
R5 -.->|個人の健康情報の保護で関連| R2

classDef core fill:#1e3a8a,stroke:#93c5fd,color:#ffffff
classDef n fill:#334155,stroke:#cbd5e1,color:#ffffff
class R2 core
class R1,R3,R4,R5,R6 n`
};
