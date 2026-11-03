export const MERMAID_CONFIG = `%%{init: {"startOnLoad":false,"theme":"base","securityLevel":"loose","themeVariables":{"fontSize":"16px","fontFamily":"-apple-system,BlinkMacSystemFont,\\"Hiragino Kaku Gothic ProN\\",\\"Noto Sans JP\\",sans-serif","background":"#0d1b2e","primaryColor":"#16294a","primaryTextColor":"#e8eefc","primaryBorderColor":"#7c9eff","secondaryColor":"#12233b","tertiaryColor":"#0d1b2e","lineColor":"#9db6ff","textColor":"#dbe5f7","mainBkg":"#16294a","nodeBorder":"#7c9eff","clusterBkg":"#0f1f38","clusterBorder":"#3b5a94","titleColor":"#ffffff","edgeLabelBackground":"#0d1b2e","cScale0":"#2a3f7a","cScale1":"#2b5d7a","cScale2":"#3a5f8f","cScale3":"#4a4f9a","cScale4":"#2f6b6b","cScaleLabel0":"#fff","cScaleLabel1":"#fff","cScaleLabel2":"#fff","cScaleLabel3":"#fff","cScaleLabel4":"#fff"},"flowchart":{"useMaxWidth":false,"padding":15,"htmlLabels":true,"nodeSpacing":70,"rankSpacing":60,"subGraphTitleMargin":{"top":12,"bottom":18}},"timeline":{"useMaxWidth":false}}}%%`;
export const DIAGRAM_0 = `${MERMAID_CONFIG}
flowchart LR
accTitle: Part 1〜4 の関係
accDescr: Part 2（テストプロセス、何をするか）の成果物として Part 3（テスト文書、何を書くか）がある。Part 4（テスト技法、どう設計するか）は Part 2 の設計の中で使われる。Part 1（概念と用語）は Part 2・Part 3・Part 4 の共通の前提になる。
A["Part 2<br/>テストプロセス<br/>何をするか"] -->|"成果物として"| B["Part 3<br/>テスト文書<br/>何を書くか"]
C["Part 4<br/>テスト技法<br/>どう設計するか"] -->|"設計の中で使う"| A
D["Part 1<br/>概念と用語"] -.->|"共通の前提"| A
D -.-> B
D -.-> C`;
export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart LR
Y1["<b>2013</b><br/>第1版 発行<br/>IEEE 829 の後継的位置づけ"]:::old
Y2["<b>2019</b><br/>IEEE PAR 承認<br/>改訂の開始"]:::rev
Y3["<b>2020</b><br/>ISO で改訂プロジェクト承認<br/>DIS 投票"]:::rev
Y4["<b>2021年9月</b><br/>IEEE 標準委員会承認"]:::rev
Y5["<b>2021年10月</b><br/>第2版 発行<br/>テスト条件からテストモデルへ"]:::now
Y1 --> Y2 --> Y3 --> Y4 --> Y5
classDef old fill:#1c2f57,stroke:#7c9eff,color:#ffffff,stroke-width:2px
classDef rev fill:#12233b,stroke:#5b7bbf,color:#dbe5f7
classDef now fill:#1d5c55,stroke:#4fd1b5,color:#ffffff,stroke-width:3px`;
export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TB
accTitle: ISO/IEC/IEEE 29119 シリーズの構成
accDescr: Part 1（概念と用語）が Part 2（テストプロセス）の前提となり、Part 2 から Part 3（テスト文書化）、Part 4（テスト技法）、Part 5（キーワード駆動テスト）、Part 8（モデルベーステスト。IEEE は Active、ISO は発行準備中）、Part 14（データ移行テスト、ドラフト）へつながる。Part 4 は Part 3 にもつながる。
subgraph SERIES["ISO/IEC/IEEE 29119 シリーズ"]
P1["Part 1<br/>概念と用語"]
P2["Part 2<br/>テストプロセス"]
P3["Part 3<br/>テスト文書化"]
P4["Part 4<br/>テスト技法"]
P5["Part 5<br/>キーワード駆動テスト"]
P8["Part 8<br/>モデルベーステスト<br/>（IEEE: Active／ISO: 発行準備中）"]
P14["Part 14<br/>データ移行テスト（ドラフト）"]
end
P1 --> P2
P2 --> P3
P2 --> P4
P2 --> P5
P2 --> P8
P2 --> P14
P4 --> P3`;
export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart TD
accTitle: 適合の主張を選ぶ判断フロー
accDescr: 29119-3 を採用するとき、すべての文書とすべての shall を満たせるなら Full conformance を主張し、証拠を用意する。満たせない場合、使う文書のサブセットを決められなければ適合は主張せず参考として活用する。決められる場合はサブセットを記録し、外した要求の理由を記載し、すべてのテーラリング決定をリスクを考慮した根拠とともに記録し、関係ステークホルダーの合意を得る。そのうえで残した要求のすべての shall を満たせれば Tailored conformance を主張し、満たせなければ適合は主張しない。どちらを主張するかは組織として明言する。
S["29119-3 を採用したい"] --> Q1{"すべての文書と<br/>すべての shall を<br/>満たせるか？"}
Q1 -->|"はい"| F["Full conformance を主張<br/>証拠を用意"]
Q1 -->|"いいえ"| Q2{"使う文書の<br/>サブセットを<br/>決められるか？"}
Q2 -->|"はい"| T["サブセットを記録<br/>外した要求の理由を記載<br/>すべてのテーラリング決定を<br/>リスクを考慮した根拠とともに記録<br/>関係ステークホルダーの合意を得る"]
Q2 -->|"いいえ"| N["適合は主張せず<br/>参考として活用"]
T --> Q3{"残した要求の<br/>すべての shall を<br/>満たせるか？"}
Q3 -->|"はい"| TC["Tailored conformance を主張"]
Q3 -->|"いいえ"| N
F --> M["どちらを主張するか<br/>組織として明言する"]
TC --> M`;
export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart TD
accTitle: 組織レベルの文書の流れ
accDescr: テストポリシー（なぜ・何のためにテストするか）から組織テストプラクティス（どのようにテストするか）が導かれ、各プロジェクトのテスト計画へつながる。
POL["テストポリシー<br/>なぜ・何のためにテストするか"] --> PRAC["組織テストプラクティス<br/>どのようにテストするか"]
PRAC --> PLAN["各プロジェクトのテスト計画へ"]`;
export const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart LR
accTitle: テストマネジメント文書の流れ
accDescr: テスト計画からテストステータスレポートへ進み、ステータスレポートは期間ごとに繰り返し作成される。最後にテスト完了報告書を作り、教訓と再利用資産を組織テストプラクティスへフィードバックする。
PL["テスト計画<br/>Test plan"] --> ST["テストステータスレポート<br/>Test status report<br/>（期間ごとに繰り返し）"]
ST --> ST
ST --> CP["テスト完了報告書<br/>Test completion report"]
CP -.->|"教訓・再利用資産"| PRAC["組織テストプラクティスへ<br/>フィードバック"]`;
export const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart TD
accTitle: 動的テストの文書群
accDescr: 設計と実装では 8.2 テストモデル仕様から 8.3 テストケース仕様、8.4 テスト手順仕様へ進む。環境とデータの準備では 8.5 テストデータ要求から 8.7 テストデータレディネスレポートへ、8.6 テスト環境要求から 8.8 テスト環境レディネスレポートへ進む。テスト手順仕様と2つのレディネスレポートが実行（8.9 実際の結果とテスト結果、8.10 テスト実行ログ）につながり、期待と異なる結果は問題の報告（8.11 テストインシデントレポート）へ進む。
subgraph DESIGN["設計と実装"]
TM["8.2 テストモデル仕様"] --> TC["8.3 テストケース仕様"]
TC --> TP["8.4 テスト手順仕様"]
end
subgraph PREP["環境とデータの準備"]
TDR["8.5 テストデータ要求"] --> TDRR["8.7 テストデータレディネスレポート"]
TER["8.6 テスト環境要求"] --> TERR["8.8 テスト環境レディネスレポート"]
end
subgraph EXEC["実行"]
AR["8.9 実際の結果とテスト結果"]
LOG["8.10 テスト実行ログ"]
end
subgraph INC["問題の報告"]
IR["8.11 テストインシデントレポート"]
end
TP --> EXEC
TDRR --> EXEC
TERR --> EXEC
EXEC -->|"期待と異なる結果"| IR`;
export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart LR
accTitle: テスト実行からインシデント対応までの流れ
accDescr: テストを実行し、比較できる実際の結果があるかを確認する。結果が出る前の予期せぬ事象では、テスト結果を付けずにテストインシデントを起票する。結果がある場合は期待結果と比べ、一致すれば合格、不一致なら不合格として実行ログに記録し、不合格ではインシデントを起票する。起票後は報告者が深刻度・優先度を評価し、調査と対応でステータスを更新し、必要なら再テストしてテスト実行に戻る。
A["テスト実行"] --> R{"比較できる<br/>実際の結果はあるか？"}
R -->|"ある"| B{"実際の結果 と<br/>期待結果 は一致？"}
R -->|"ない（結果が出る前の予期せぬ事象）"| D["テストインシデントを起票"]
B -->|"一致"| C["テスト結果: 合格<br/>実行ログに記録"]
B -->|"不一致"| H["テスト結果: 不合格<br/>実行ログに記録"]
H --> D
D --> E["深刻度・優先度を<br/>報告者が評価"]
E --> F["調査と対応<br/>ステータス更新"]
F --> G["必要なら再テスト"]
G --> A`;
export const DIAGRAM_8 = `${MERMAID_CONFIG}
flowchart LR
subgraph OLD["2013年版"]
O1["テストベース"] --> O2["テスト条件"] --> O3["テストケース"]
end
subgraph NEW["2021年版"]
N1["テストベース"] --> N2["テストモデル<br/>＋ 必要なカバレッジ"] --> N3["テストカバレッジアイテム"] --> N4["テストケース"]
end
OLD -->|"置き換え"| NEW`;
export const DIAGRAM_9 = `${MERMAID_CONFIG}
flowchart TD
accTitle: 文書どうしの依存関係
accDescr: テストポリシーから組織テストプラクティス、テスト計画（テスト戦略を含む）へ進む。テスト計画からは、テストモデル仕様、テストケース仕様、テスト手順仕様の流れと、テストデータ要求からデータレディネスレポート、テスト環境要求から環境レディネスレポートへの流れに分かれる。テスト手順仕様と2つのレディネスレポートがテスト実行ログにつながり、実際の結果・テスト結果が得られる。結果はインシデントレポートとテストステータスレポートへ進み、インシデントレポートもステータスレポートに反映され、最後にテスト完了報告書にまとまる。
POL["テストポリシー"] --> PRAC["組織テストプラクティス"]
PRAC --> PLAN["テスト計画<br/>（テスト戦略を含む）"]
PLAN --> TMS["テストモデル仕様"]
TMS --> TCS["テストケース仕様"]
TCS --> TPS["テスト手順仕様"]
PLAN --> TDREQ["テストデータ要求"]
PLAN --> TEREQ["テスト環境要求"]
TDREQ --> TDRDY["データレディネスレポート"]
TEREQ --> TERDY["環境レディネスレポート"]
TPS --> LOG["テスト実行ログ"]
TDRDY --> LOG
TERDY --> LOG
LOG --> RES["実際の結果・テスト結果"]
RES --> INC["インシデントレポート"]
RES --> STAT["テストステータスレポート"]
INC --> STAT
STAT --> COMP["テスト完了報告書"]`;
export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart TD
accTitle: 文書を選ぶ判断フロー
accDescr: テスト活動の開始時に、規制・契約・監査で文書の提出が必要かを確認する。必要なら必要な文書を洗い出し、Annex A で shall を確認する。不要なら、複数チーム・長期のプロダクトかを確認する。該当すればポリシー・プラクティス・テスト計画・完了報告を優先し、該当しなければテスト計画（軽量）とテストケース・インシデントに絞る。どの場合もテーラリングの理由を記録する。
START["テスト活動を開始"] --> Q1{"規制・契約・監査で<br/>文書の提出が必要か？"}
Q1 -->|"はい"| FULL["必要な文書を洗い出し<br/>Annex A で shall を確認"]
Q1 -->|"いいえ"| Q2{"複数チーム・長期<br/>プロダクトか？"}
Q2 -->|"はい"| MID["ポリシー・プラクティス・<br/>テスト計画・完了報告を優先"]
Q2 -->|"いいえ"| LIGHT["テスト計画（軽量）と<br/>テストケース・インシデントに絞る"]
FULL --> TAILOR["テーラリングの理由を記録"]
MID --> TAILOR
LIGHT --> TAILOR`;
export const DIAGRAM_11 = `${MERMAID_CONFIG}
flowchart LR
S1["1 用語と全体像<br/>Step 0-2"] --> S2["2 構成と適合<br/>Step 3-4"]
S2 --> S3["3 3階層の文書<br/>Step 5-8"]
S3 --> S4["4 テストモデル<br/>Step 9"]
S4 --> S5["5 追跡と運用<br/>Step 10-11"]
S5 --> S6["6 実践と批判的視点<br/>Step 12-13"]
S6 --> S7["7 Part 2 と Part 4 へ"]`;
