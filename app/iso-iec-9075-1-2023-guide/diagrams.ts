export const MERMAID_CONFIG = "%%{init: {\"theme\":\"base\",\"themeVariables\":{\"background\":\"#07111e\",\"primaryColor\":\"#1e293b\",\"mainBkg\":\"#1e293b\",\"primaryBorderColor\":\"#7c9eff\",\"primaryTextColor\":\"#e6edf7\",\"lineColor\":\"#7c9eff\",\"secondaryColor\":\"#13294a\",\"tertiaryColor\":\"#0f2036\",\"nodeBorder\":\"#7c9eff\",\"clusterBkg\":\"#0f1d33\",\"clusterBorder\":\"#4a6fd6\",\"edgeLabelBackground\":\"#07111e\",\"fontFamily\":\"Noto Sans JP, Noto Sans CJK JP, Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo, sans-serif\",\"fontSize\":\"16px\"},\"htmlLabels\":true,\"flowchart\":{\"curve\":\"basis\",\"padding\":15}}}%%";
export const DIAGRAMS: Record<string, string> = {
"mmd-1": `${MERMAID_CONFIG}\nflowchart LR
subgraph SERIES["ISO/IEC 9075 の各パート"]
direction LR
P1["Part 1<br/>Framework<br/>本ガイドの対象"]
P2["Part 2<br/>Foundation<br/>中核言語"]
P3["Part 3<br/>CLI"]
P4["Part 4<br/>PSM"]
P9["Part 9<br/>MED"]
P10["Part 10<br/>OLB"]
P11["Part 11<br/>Schemata"]
P13["Part 13<br/>JRT"]
P14["Part 14<br/>XML"]
P15["Part 15<br/>MDA"]
P16["Part 16<br/>PGQ<br/>2023で新設"]
P1 ~~~ P2
P1 ~~~ P3
P1 ~~~ P4
P1 ~~~ P9
P1 ~~~ P10
P2 ~~~ P11
P3 ~~~ P13
P4 ~~~ P14
P9 ~~~ P15
P10 ~~~ P16
end
classDef target fill:#1e3a8a,stroke:#7c9eff,color:#ffffff
classDef core fill:#14532d,stroke:#86efac,color:#ffffff
classDef other fill:#334155,stroke:#94a3b8,color:#ffffff
classDef newpart fill:#7c2d12,stroke:#fdba74,color:#ffffff
class P1 target
class P2 core
class P3,P4,P9,P10,P11,P13,P14,P15 other
class P16 newpart`,
"mmd-2": `${MERMAID_CONFIG}\nflowchart LR
R1["Part 1<br/>Framework"]
R2["他パートを<br/>日付なしで引用"]
R3["常に最新版の<br/>他パートと整合"]
R4["Part 1だけでは<br/>仕様が完結しない"]
R1 --> R2
R2 --> R3
R3 --> R4
classDef step fill:#1e293b,stroke:#7c9eff,color:#ffffff
class R1,R2,R3,R4 step`,
"mmd-3": `${MERMAID_CONFIG}\nflowchart LR
S1["STEP1：<br/>4章 概念"]
S2["STEP2：<br/>5章 パート紹介"]
S3["STEP3：<br/>6章 記法"]
S4["STEP4：<br/>9章 適合性"]
S5["STEP5：<br/>Annex B と C"]
S1 --> S2
S2 --> S3
S3 --> S4
S4 --> S5
classDef step fill:#1e293b,stroke:#7c9eff,color:#ffffff
class S1,S2,S3,S4,S5 step`,
"mmd-4": `${MERMAID_CONFIG}\nflowchart LR
E1["SQL-agent<br/>アプリ側の実行主体"]
subgraph IMPL["SQL-implementation"]
E2["SQL-client"]
E3["SQL-server"]
end
E4["SQL-schema<br/>表やビューの入れ物"]
E5["SQL-data<br/>格納された行"]
E1 -->|SQL文| E2
E2 -->|要求| E3
E3 --> E4
E4 --> E5
classDef agent fill:#7c2d12,stroke:#fdba74,color:#ffffff
classDef impl fill:#1e3a8a,stroke:#7c9eff,color:#ffffff
classDef store fill:#14532d,stroke:#86efac,color:#ffffff
class E1 agent
class E2,E3 impl
class E4,E5 store`,
"mmd-5": `${MERMAID_CONFIG}\nflowchart TB
C1["標準準拠を<br/>主張したい"]
C2{"Core SQLの<br/>必須機能を満たす?"}
C3["準拠は<br/>主張できない"]
C4["最小適合の<br/>要件を確認"]
C5{"追加機能も<br/>主張する?"}
C6["機能ID単位で<br/>対応を宣言"]
C7["Core SQLの範囲で<br/>主張"]
C8["実装定義の要素は<br/>実装側で決めて文書化"]
C9["実装定義の要素は<br/>実装側で決めて文書化"]
C1 --> C2
C2 -->|いいえ| C3
C2 -->|はい| C4
C4 --> C5
C5 -->|はい| C6
C5 -->|いいえ| C7
C6 --> C8
C7 --> C9
classDef decision fill:#7c2d12,stroke:#fdba74,color:#ffffff
classDef ok fill:#14532d,stroke:#86efac,color:#ffffff
classDef ng fill:#7f1d1d,stroke:#fca5a5,color:#ffffff
classDef step fill:#1e293b,stroke:#7c9eff,color:#ffffff
class C2,C5 decision
class C6,C7,C8,C9 ok
class C3 ng
class C1,C4 step`,
"mmd-6": `${MERMAID_CONFIG}\nflowchart LR
W0["SQL:2023<br/>の変更"]
W1["言語の<br/>小さな改善"]
W2["JSON関連"]
W3["新Part 16<br/>SQL/PGQ"]
W11["F292 UNIQUE NULLS"]
W12["T054 GREATEST/LEAST"]
W13["T626 ANY_VALUE"]
W21["T801 JSON型"]
W22["T860-T864<br/>簡易アクセサ"]
W23["T865-T878<br/>項目メソッド"]
W31["CREATE<br/>PROPERTY GRAPH"]
W32["GRAPH_TABLE<br/>と MATCH"]
W0 --> W1
W0 --> W2
W0 --> W3
W1 --> W11
W1 --> W12
W1 --> W13
W2 --> W21
W2 --> W22
W2 --> W23
W3 --> W31
W3 --> W32
classDef root fill:#1e3a8a,stroke:#7c9eff,color:#ffffff
classDef grp fill:#334155,stroke:#94a3b8,color:#ffffff
classDef item fill:#1e293b,stroke:#64748b,color:#ffffff
class W0 root
class W1,W2,W3 grp
class W11,W12,W13,W21,W22,W23,W31,W32 item`,
"mmd-7": `${MERMAID_CONFIG}\nflowchart LR
G1["既存の表<br/>頂点表と辺表"]
G2["CREATE PROPERTY GRAPH<br/>ビューに似た定義"]
G3["GRAPH_TABLE と MATCH<br/>グラフパターンで検索"]
G4["結果は通常の<br/>行と列"]
G5["JOINや集計と<br/>組み合わせ可能"]
G1 --> G2
G2 --> G3
G3 --> G4
G4 --> G5
classDef step fill:#1e293b,stroke:#7c9eff,color:#ffffff
classDef key fill:#7c2d12,stroke:#fdba74,color:#ffffff
class G1,G4,G5 step
class G2,G3 key`,
"mmd-8": `${MERMAID_CONFIG}\nflowchart TB
Q1["2026年6月<br/>PG19 beta1<br/>早期版SQL/PGQを含む"]
Q2["2026-08-25<br/>Robert Haas氏が<br/>revert候補をML上で問う"]
Q3["2026-09-07<br/>SQL/PGQをrevert<br/>47コミットを巻き戻し"]
Q4["2026-09-24<br/>PG19 beta4<br/>複数機能のrevertを告知"]
Q5["2026-10-15<br/>RC1予定"]
Q6["2026-11-19<br/>GA予定<br/>RC2は11-12予定"]
Q1 --> Q2
Q2 --> Q3
Q3 --> Q4
Q4 --> Q5
Q5 --> Q6
classDef step fill:#1e293b,stroke:#7c9eff,color:#ffffff
classDef alert fill:#7f1d1d,stroke:#fca5a5,color:#ffffff
class Q1,Q2,Q4,Q5,Q6 step
class Q3 alert`,
"mmd-9": `${MERMAID_CONFIG}\nflowchart LR
V1["9075-1:2016<br/>撤回済み"]
V2["Cor 1:2022<br/>撤回済み"]
V3["9075-1:2023<br/>第6版 2023-06"]
V4["2025-06-22<br/>改訂予定ステージへ"]
V5["Cor 1:2026<br/>2026-08-03"]
V6["CD 9075-1<br/>次期版 開発中"]
V1 --> V2
V2 --> V3
V3 --> V4
V4 --> V5
V5 --> V6
classDef old fill:#334155,stroke:#94a3b8,color:#ffffff
classDef cur fill:#1e3a8a,stroke:#7c9eff,color:#ffffff
classDef next fill:#14532d,stroke:#86efac,color:#ffffff
class V1,V2 old
class V3,V4,V5 cur
class V6 next`,
"mmd-10": `${MERMAID_CONFIG}\nflowchart TB
U1["対象DBMSの<br/>適合性一覧を確認"]
U2["使いたい機能の<br/>機能IDを特定"]
U3{"DBMSが<br/>対応している?"}
U4["標準構文を採用"]
U5["方言構文を<br/>分離して隔離"]
U6["標準構文の<br/>移植テストを作成"]
U7["方言差を吸収する<br/>テストを作成"]
U1 --> U2
U2 --> U3
U3 -->|はい| U4
U3 -->|いいえ| U5
U4 --> U6
U5 --> U7
classDef step fill:#1e293b,stroke:#7c9eff,color:#ffffff
classDef decision fill:#7c2d12,stroke:#fdba74,color:#ffffff
classDef ok fill:#14532d,stroke:#86efac,color:#ffffff
class U1,U2,U4,U5 step
class U3 decision
class U6,U7 ok`
};
