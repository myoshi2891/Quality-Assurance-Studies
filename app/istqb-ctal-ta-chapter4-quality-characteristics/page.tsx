import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import ChecklistCard from './ChecklistCard';
import Mermaid from '../../components/Mermaid';
import './istqb-ctal-ta-chapter4-quality-characteristics.css';

const SYLLABUS_CHECKLIST_ITEMS = [
    {
        id: 'syl-1',
        label: (
            <>
                4.1：3特性それぞれの<strong>定義文</strong>、テスト時期・テストレベルの記述、典型的な欠陥・使う技法の記述（本ガイドの 2.6 節と比較）
            </>
        ),
    },
    {
        id: 'syl-2',
        label: (
            <>
                4.2：TA の貢献として<strong>列挙された項目</strong>が、本ガイドの 3.3 節と一致するか。ユーザビリティ指標や評価手法の例示があるか
            </>
        ),
    },
    {
        id: 'syl-3',
        label: (
            <>
                4.3：適応性・インストール性の<strong>定義</strong>と、TA の貢献の<strong>具体的な列挙</strong>（4.2、4.3 節と比較）
            </>
        ),
    },
    {
        id: 'syl-4',
        label: (
            <>
                4.4：相互運用性の<strong>定義</strong>と、TA の貢献の具体例。共存性の扱い
            </>
        ),
    },
    {
        id: 'syl-5',
        label: <>キーワード13語が、本文中でどう定義・使用されているか</>,
    },
    {
        id: 'syl-6',
        label: <>図・表・例に書かれた固有の用語（試験で問われやすい）</>,
    },
];

const FUNCTIONAL_CHECKLIST_ITEMS = [
    {
        id: 'func-1',
        label: (
            <>
                テスト条件を、正確性・適切性・完全性のどれに関するものかで<strong>分類した</strong>
            </>
        ),
    },
    {
        id: 'func-2',
        label: (
            <>
                要件・ユーザーストーリー・ユースケースと<strong>トレーサビリティ</strong>が取れている
            </>
        ),
    },
    {
        id: 'func-3',
        label: (
            <>
                CRUD マトリクスで、各エンティティの操作の<strong>欠落</strong>を確認した
            </>
        ),
    },
    {
        id: 'func-4',
        label: (
            <>
                期待結果を<strong>独立したオラクル</strong>から決めた（実装を見て決めていない）
            </>
        ),
    },
    {
        id: 'func-5',
        label: <>主要シナリオを、ペルソナ・利用パターンから作った</>,
    },
];

const USABILITY_CHECKLIST_ITEMS = [
    {
        id: 'use-1',
        label: (
            <>
                対象利用者グループと<strong>代表する参加者</strong>を定義した
            </>
        ),
    },
    {
        id: 'use-2',
        label: (
            <>
                タスクを<strong>利用者の目的</strong>で書き、成功基準と指標を決めた
            </>
        ),
    },
    {
        id: 'use-3',
        label: (
            <>
                セッションでは<strong>観察に徹する</strong>手順を関係者と合意した
            </>
        ),
    },
    {
        id: 'use-4',
        label: (
            <>
                学習性・操作性・エラー防止・包括性までの<strong>観点</strong>をチェックリスト化した
            </>
        ),
    },
    {
        id: 'use-5',
        label: (
            <>
                問題を<strong>影響と頻度</strong>で優先度づけし、再テスト計画を立てた
            </>
        ),
    },
];

const FLEXIBILITY_CHECKLIST_ITEMS = [
    {
        id: 'flex-1',
        label: (
            <>
                サポート対象環境（OS・ブラウザ・DB・クラウドなど）を<strong>一覧化</strong>した
            </>
        ),
    },
    {
        id: 'flex-2',
        label: (
            <>
                環境をパラメータと値で整理し、<strong>制約</strong>を反映した
            </>
        ),
    },
    {
        id: 'flex-3',
        label: (
            <>
                組み合わせ技法（ペアワイズ・基本選択・全組み合わせ）を<strong>リスクに応じて</strong>選んだ
            </>
        ),
    },
    {
        id: 'flex-4',
        label: (
            <>
                インストール性で、<strong>新規・更新・失敗・ロールバック・アンインストール</strong>を確認した
            </>
        ),
    },
    {
        id: 'flex-5',
        label: (
            <>
                テスト環境の<strong>初期状態と初期化手順</strong>、本番との忠実度を記録した
            </>
        ),
    },
];

const COMPATIBILITY_CHECKLIST_ITEMS = [
    {
        id: 'comp-1',
        label: (
            <>
                連携する<strong>システムとインタフェース</strong>を一覧化した
            </>
        ),
    },
    {
        id: 'comp-2',
        label: (
            <>
                交換される情報の<strong>形式・意味・単位・文字コード・日時</strong>を確認した
            </>
        ),
    },
    {
        id: 'comp-3',
        label: (
            <>
                <strong>正常・代替・例外</strong>のシナリオを設計した
            </>
        ),
    },
    {
        id: 'comp-4',
        label: (
            <>
                相手が使えない部分は、テストダブルやサービス仮想化で補い、<strong>最終確認は実環境で</strong>行った
            </>
        ),
    },
    {
        id: 'comp-5',
        label: (
            <>
                <strong>両側</strong>（送信側・受信側）の状態を確認した
            </>
        ),
    },
];

export const metadata: Metadata = {
    title: 'CTAL-TA v4.0 第4章「品質特性のテスト」完全ガイド（初学者向け） | QA Studies',
    description: 'ISTQB Certified Tester Advanced Level Test Analyst (CTAL-TA) v4.0 第4章「品質特性のテスト」の完全解説。機能適合性・ユーザビリティ・フレキシビリティ・相互運用性のテスト設計と評価。',
};

export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontSize": "16px",
    "background": "#ffffff",
    "primaryColor": "#e8efff",
    "primaryTextColor": "#14213d",
    "primaryBorderColor": "#4f6fd6",
    "secondaryColor": "#f1f2f5",
    "secondaryTextColor": "#14213d",
    "secondaryBorderColor": "#8a8f9c",
    "tertiaryColor": "#ffffff",
    "tertiaryTextColor": "#14213d",
    "tertiaryBorderColor": "#c9d3e6",
    "mainBkg": "#e8efff",
    "nodeBorder": "#4f6fd6",
    "nodeTextColor": "#14213d",
    "lineColor": "#5b6b8c",
    "textColor": "#14213d",
    "titleColor": "#14213d",
    "edgeLabelBackground": "#ffffff",
    "clusterBkg": "#f6f8fc",
    "clusterBorder": "#c9d3e6",
    "noteBkgColor": "#fff4dc",
    "noteTextColor": "#5a3d0a",
    "noteBorderColor": "#d9a441",
    "actorBkg": "#e8efff",
    "actorBorder": "#4f6fd6",
    "actorTextColor": "#14213d",
    "actorLineColor": "#8a94b3",
    "signalColor": "#3b4a6b",
    "signalTextColor": "#14213d",
    "labelBoxBkgColor": "#e8efff",
    "labelBoxBorderColor": "#4f6fd6",
    "labelTextColor": "#14213d",
    "transitionColor": "#5b6b8c",
    "transitionLabelColor": "#14213d",
    "stateBkg": "#e8efff",
    "stateLabelColor": "#14213d",
    "stateBorder": "#4f6fd6",
    "specialStateColor": "#3b4a6b",
    "labelColor": "#14213d"
  },
  "flowchart": {
    "useMaxWidth": false,
    "htmlLabels": true,
    "curve": "basis",
    "nodeSpacing": 50,
    "rankSpacing": 55,
    "padding": 12
  },
  "sequence": { "useMaxWidth": false, "wrap": false, "mirrorActors": false },
  "state": { "useMaxWidth": false }
}}%%`;

export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart TD
  S0["0 読み方と限界を確認"] --> S1["1 章の全体像<br/>ISO 25010 との対応"]
  S1 --> S2["2 機能テスト<br/>4.1"]
  S2 --> S3["3 ユーザビリティ<br/>4.2"]
  S3 --> S4["4 フレキシビリティ<br/>4.3"]
  S4 --> S5["5 互換性<br/>4.4"]
  S5 --> S6["6 機能別 早見表"]
  S6 --> S7["7 試験対策"]
  S7 --> S8["8 実務チェックリスト"]
  classDef step fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef last fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class S0,S1,S2,S3,S4,S5,S6,S7 step
  class S8 last`;

export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TD
  G1["このガイドで学ぶ"] --> G2["公式シラバス PDF 44 から 47 ページを通読"]
  G2 --> G3{"ガイドの記述と<br/>公式本文に差異がある?"}
  G3 -->|はい| G4["公式本文を正とする"]
  G3 -->|いいえ| G5["そのまま試験対策へ"]
  classDef step fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef warn fill:#fdebee,stroke:#c05a6e,color:#5a1424
  classDef ok fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class G1,G2,G3 step
  class G4 warn
  class G5 ok`;

export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart TD
  R1["第2章<br/>プロダクトリスクの特定と評価"] --> R2["リスクを品質特性で分類<br/>ISO 25010:2023"]
  R2 --> R3["第4章<br/>品質特性に合うテストタイプを選ぶ"]
  R3 --> R4["第3章<br/>テスト技法で条件とケースを設計"]
  R4 --> R5["実行・結果評価"]
  classDef step fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef focus fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class R1,R2,R4,R5 step
  class R3 focus`;

export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart LR
  ISO["ISO/IEC 25010:2023<br/>製品品質モデル 9特性"]
  FS["機能適合性<br/>Functional suitability"]
  IC["インタラクション能力<br/>Interaction capability<br/>旧 Usability"]
  FX["柔軟性<br/>Flexibility<br/>旧 Portability"]
  CP["互換性<br/>Compatibility"]
  OT["第4章の対象外<br/>性能効率性・信頼性・セキュリティ<br/>保守性・安全性"]
  ISO --> FS
  ISO --> IC
  ISO --> FX
  ISO --> CP
  ISO --> OT
  FS --> T41["4.1 機能テスト<br/>正確性・適切性・完全性"]
  IC --> T42["4.2 ユーザビリティテスト"]
  FX --> T43["4.3 フレキシビリティテスト<br/>適応性・インストール性"]
  CP --> T44["4.4 互換性テスト<br/>相互運用性"]
  classDef core fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef ta fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  classDef out fill:#f1f2f5,stroke:#8a8f9c,color:#2b2b33
  class ISO core
  class FS,IC,FX,CP,T41,T42,T43,T44 ta
  class OT out`;

export const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart LR
  K1["正 Correctness<br/>結果は正しいか"]
  K2["適 Appropriateness<br/>タスクに役立つか"]
  K3["完 Completeness<br/>必要な機能は揃っているか"]
  K1 --- K2
  K2 --- K3
  classDef mem fill:#e8efff,stroke:#4f6fd6,color:#14213d
  class K1,K2,K3 mem`;

export const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart TD
  FS["機能適合性<br/>Functional suitability"]
  C1["機能完全性<br/>必要な機能が揃っている"]
  C2["機能正確性<br/>結果が正確"]
  C3["機能適切性<br/>タスクに役立つ"]
  FS --> C1
  FS --> C2
  FS --> C3
  C1 --> Q1["問い：抜けはないか"]
  C2 --> Q2["問い：間違いはないか"]
  C3 --> Q3["問い：役に立つか"]
  classDef core fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef sub fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  classDef q fill:#f1f2f5,stroke:#8a8f9c,color:#2b2b33
  class FS core
  class C1,C2,C3 sub
  class Q1,Q2,Q3 q`;

export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart TD
  S["不具合の疑いや<br/>テスト観点を見つけた"] --> Q1{"必要な機能やデータ操作<br/>そのものが存在しない?"}
  Q1 -->|はい| T1["機能完全性 Completeness<br/>の問題"]
  Q1 -->|いいえ| Q2{"結果や出力が<br/>仕様や期待と違う?"}
  Q2 -->|はい| T2["機能正確性 Correctness<br/>の問題"]
  Q2 -->|いいえ| Q3{"機能はあるが、タスク達成に<br/>不要な手順や役に立たない<br/>要素がある?"}
  Q3 -->|はい| T3["機能適切性 Appropriateness<br/>の問題"]
  Q3 -->|いいえ| T4["別の特性を検討<br/>使いやすさ・互換性・適応性など"]
  classDef start fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef dec fill:#f1f2f5,stroke:#8a8f9c,color:#2b2b33
  classDef res fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  classDef other fill:#fff4dc,stroke:#d9a441,color:#5a3d0a
  class S start
  class Q1,Q2,Q3 dec
  class T1,T2,T3 res
  class T4 other`;

export const DIAGRAM_8 = `${MERMAID_CONFIG}
flowchart TD
  P1["1 テストベースを集める<br/>要件・ユーザーストーリー・暗黙のニーズ"] --> P2["2 テスト条件を定義<br/>高レベルから詳細へ"]
  P2 --> P3["3 特性に振り分ける<br/>正確性・適切性・完全性"]
  P3 --> P4["4 技法を選ぶ<br/>第3章の技法"]
  P4 --> P5["5 テストケースとデータを設計"]
  P5 --> P6["6 実行し結果を評価"]
  P6 --> P7["7 トレーサビリティと<br/>リスク情報を更新"]
  classDef step fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef last fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class P1,P2,P3,P4,P5,P6 step
  class P7 last`;

export const DIAGRAM_9 = `${MERMAID_CONFIG}
flowchart LR
  A["機能正確性<br/>結果は正しいか"] --> A1["同値分割・境界値分析<br/>ドメインテスト"]
  A --> A2["デシジョンテーブルテスト"]
  A --> A3["状態遷移テスト"]
  A --> A4["メタモルフィックテスト<br/>オラクルが弱いとき"]
  B["機能完全性<br/>抜けはないか"] --> B1["CRUD テスト<br/>完全性テストは静的"]
  B --> B2["要件とのトレーサビリティ確認"]
  B --> B3["シナリオベーステスト<br/>ユースケースの網羅"]
  C["機能適切性<br/>役に立つか"] --> C1["シナリオベーステスト<br/>実利用者の目的から"]
  C --> C2["経験ベース<br/>チャーター・チェックリスト"]
  C --> C3["クラウドテスト<br/>実利用者の視点"]
  classDef head fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef tech fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class A,B,C head
  class A1,A2,A3,A4,B1,B2,B3,C1,C2,C3 tech`;

export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart TD
  L1["要件・ユーザーストーリーの段階"] --> L1a["完全性：レビューで機能の抜けを見つける<br/>静的テスト"]
  L2["設計・実装の段階"] --> L2a["正確性：コンポーネントレベルの確認<br/>主に開発者・TTA"]
  L3["システム・受け入れテストの段階"] --> L3a["正確性・適切性・完全性を利用者視点で確認<br/>TA の主戦場"]
  classDef stage fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef act fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class L1,L2,L3 stage
  class L1a,L2a,L3a act`;

export const DIAGRAM_11 = `${MERMAID_CONFIG}
flowchart LR
  UA["製品の品質<br/>Interaction capability<br/>操作しやすい作り"] --> UB["利用の結果<br/>Usability<br/>効果・効率・満足"]
  UB --> UC["全体的な受け止め方<br/>User experience"]
  classDef prod fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef use fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  classDef ux fill:#fff4dc,stroke:#d9a441,color:#5a3d0a
  class UA prod
  class UB use
  class UC ux`;

export const DIAGRAM_12 = `${MERMAID_CONFIG}
flowchart LR
  IC["Interaction capability<br/>インタラクション能力"]
  IC --> U1["適切性の認識"]
  IC --> U2["学習性"]
  IC --> U3["操作性"]
  IC --> U4["ユーザーエラー防止"]
  IC --> U5["ユーザーエンゲージメント"]
  IC --> U6["包括性"]
  IC --> U7["ユーザー支援"]
  IC --> U8["自己記述性"]
  classDef head fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef sub fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class IC head
  class U1,U2,U3,U4,U5,U6,U7,U8 sub`;

export const DIAGRAM_13 = `${MERMAID_CONFIG}
flowchart TD
  U1["1 目的と対象利用者を決める"] --> U2["2 ペルソナと利用パターンから<br/>タスクシナリオを作る"]
  U2 --> U3["3 成功の基準と指標を決める<br/>成功率・時間・エラー・満足度"]
  U3 --> U4["4 対象グループを代表する<br/>実利用者を募集"]
  U4 --> U5["5 セッションを実施<br/>助けず観察して記録"]
  U5 --> U6["6 問題を分類し優先度をつける"]
  U6 --> U7["7 報告し、修正後に再テスト"]
  classDef step fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef last fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class U1,U2,U3,U4,U5,U6 step
  class U7 last`;

export const DIAGRAM_14 = `${MERMAID_CONFIG}
flowchart LR
  FX["Flexibility<br/>柔軟性"]
  FX --> F1["Adaptability<br/>適応性"]
  FX --> F2["Installability<br/>インストール性"]
  FX --> F3["Scalability<br/>拡張性"]
  FX --> F4["Replaceability<br/>置換性"]
  F1 --> TA1["第4章の LO 対象"]
  F2 --> TA1
  F3 --> OT1["負荷・性能の観点<br/>第4章の LO の対象外"]
  F4 --> OT2["第4章の LO の対象外"]
  classDef head fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef ta fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  classDef out fill:#f1f2f5,stroke:#8a8f9c,color:#2b2b33
  class FX head
  class F1,F2,TA1 ta
  class F3,F4,OT1,OT2 out`;

export const DIAGRAM_15 = `${MERMAID_CONFIG}
flowchart TD
  A1["1 対象環境を特定<br/>OS・ブラウザ・端末・DB・クラウド・バージョン"] --> A2["2 パラメータと値の表を作る"]
  A2 --> A3["3 実在しない組み合わせを除く<br/>制約の整理"]
  A3 --> A4["4 組み合わせ技法を選ぶ<br/>ペアワイズまたは基本選択"]
  A4 --> A5["5 各構成で同じテストを実行"]
  A5 --> A6["6 環境ごとの差異を分析<br/>環境固有の不具合か共通の不具合か"]
  A6 --> A7["7 結果を記録し優先度を更新"]
  classDef step fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef last fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class A1,A2,A3,A4,A5,A6 step
  class A7 last`;

export const DIAGRAM_16 = `${MERMAID_CONFIG}
stateDiagram-v2
  direction LR
  state "未インストール" as NotInstalled
  state "インストール済み" as Installed
  state "アップグレード済み" as Upgraded
  [*] --> NotInstalled
  NotInstalled --> Installed : install
  Installed --> Upgraded : upgrade
  Upgraded --> Installed : rollback
  Installed --> NotInstalled : uninstall
  Upgraded --> NotInstalled : uninstall`;

export const DIAGRAM_17 = `${MERMAID_CONFIG}
flowchart TD
  CP["Compatibility<br/>互換性"]
  CP --> CO["Co-existence<br/>共存性<br/>同じ環境を共有しても邪魔しない"]
  CP --> IO["Interoperability<br/>相互運用性<br/>情報を交換して使い合える"]
  IO --> LO["TA-4.4.1 の対象"]
  CO --> OUT["第4章の LO の対象外"]
  classDef head fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef ta fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  classDef out fill:#f1f2f5,stroke:#8a8f9c,color:#2b2b33
  class CP head
  class IO,LO ta
  class CO,OUT out`;

export const DIAGRAM_18 = `${MERMAID_CONFIG}
flowchart TD
  I1["1 連携するシステムと<br/>インタフェースを洗い出す"] --> I2["2 交換される情報を整理<br/>形式・意味・頻度・方向"]
  I2 --> I3["3 テストシナリオを設計<br/>正常・代替・例外"]
  I3 --> I4["4 テストデータを用意<br/>本番相当と異常値"]
  I4 --> I5{"相手システムを<br/>テストで使える?"}
  I5 -->|使える| I6a["実システムまたは<br/>検証環境で接続"]
  I5 -->|使えない| I6b["スタブやサービス仮想化で<br/>相手を模擬"]
  I6a --> I7["5 実行して送信内容と<br/>受信後の状態を両側で確認"]
  I6b --> I7
  I7 --> I8["6 差異を分析し記録"]
  classDef step fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef dec fill:#f1f2f5,stroke:#8a8f9c,color:#2b2b33
  classDef last fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class I1,I2,I3,I4,I6a,I6b,I7 step
  class I5 dec
  class I8 last`;

export const DIAGRAM_19 = `${MERMAID_CONFIG}
sequenceDiagram
  participant EC as ECサイト
  participant PAY as 決済サービス
  participant INV as 在庫システム
  EC->>PAY: 決済リクエスト 注文ID 金額 通貨
  PAY-->>EC: 決済結果 成功または失敗
  EC->>INV: 在庫引当 商品ID 数量
  INV-->>EC: 引当結果
  Note over EC,INV: 各連携で情報が正しく受け渡され、受け側が正しく使えるかを確認する`;

export const DIAGRAM_20 = `${MERMAID_CONFIG}
flowchart TD
  Z1["テスト対象の機能・サービス"] --> Z2{"何を確かめたい?"}
  Z2 -->|結果の正しさ・抜け・有用性| Z3["4.1 機能テスト"]
  Z2 -->|利用者の使いやすさ| Z4["4.2 ユーザビリティ"]
  Z2 -->|環境・インストール| Z5["4.3 フレキシビリティ"]
  Z2 -->|他システムとの情報交換| Z6["4.4 互換性 相互運用性"]
  classDef start fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef dec fill:#f1f2f5,stroke:#8a8f9c,color:#2b2b33
  classDef res fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class Z1 start
  class Z2 dec
  class Z3,Z4,Z5,Z6 res`;



export default function CtalTaChapter4Page() {
    return (
        <div className="ctal-ta-ch4-page">
            <div className="layout">
                <NavBar />
                <main className="main" id="main">
                    <header className="hero">
                        <span className="eyebrow">ISTQB® CTAL-TA v4.0 ／ CHAPTER 4</span>
                        <h1>CTAL-TA v4.0 第4章「品質特性のテスト」完全ガイド（初学者向け）</h1>
                        <p className="sub">
                            ISTQB® Certified Tester Advanced Level Test Analyst（CTAL-TA）v4.0 ／
                            Chapter 4 &quot;Testing Quality Characteristics&quot;
                        </p>
                        <p className="sub">対象：CTFL を学んだ直後で、Advanced Level は初めての方</p>
                        <div className="pills">
                            <span className="pill">
                                章の学習時間 <b>60分</b>
                            </span>
                            <span className="pill">
                                学習目標 <b>K2 × 4</b>
                            </span>
                            <span className="pill">
                                キーワード <b>13語</b>
                            </span>
                            <span className="pill">
                                図解（mermaid） <b>20点</b>
                            </span>
                            <span className="pill">
                                参考 URL <b>21件</b>
                            </span>
                        </div>
                    </header>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>項目</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>対象シラバス</td>
                                    <td>ISTQB® CTAL-TA Syllabus v4.0（表紙の GA 日付は 2025/05/02）</td>
                                </tr>
                                <tr className="even">
                                    <td>対象章</td>
                                    <td>第4章 Testing Quality Characteristics（品質特性のテスト）</td>
                                </tr>
                                <tr className="odd">
                                    <td>章の学習時間</td>
                                    <td>60分（シラバス全体 1,215 分のうち約 4.9%）</td>
                                </tr>
                                <tr className="even">
                                    <td>学習目標（LO）</td>
                                    <td>
                                        4本すべて K2（理解）：TA-4.1.1 ／ TA-4.2.1 ／ TA-4.3.1 ／
                                        TA-4.4.1
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>作成日</td>
                                    <td>2026-09-20</td>
                                </tr>
                                <tr className="even">
                                    <td>形式</td>
                                    <td>
                                        HTML（ライトモード）。フローチャートは mermaid、図解・表は
                                        Markdown を変換して掲載。ASCII アートは使用しません
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<h2 id="0-このガイドの読み方">0. このガイドの読み方</h2>
<h3 id="01-ゴールと学習の進め方">0.1 ゴールと学習の進め方</h3>
<p>
                    この章を学び終えたときに、次の4つを<strong>自分の言葉で説明できる</strong>ことがゴールです。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>LO</th>
                                <th>レベル</th>
                                <th>学習時間の目安（LO 比較表）</th>
                                <th>説明できるようになること</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>TA-4.1.1</td>
                                <td>K2</td>
                                <td>15 分</td>
                                <td>
                                    機能正確性・機能適切性・機能完全性の<strong>テストの違い</strong>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>TA-4.2.1</td>
                                <td>K2</td>
                                <td>15 分</td>
                                <td>
                                    テストアナリスト（TA）が<strong>ユーザビリティテストにどう貢献するか</strong>
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>TA-4.3.1</td>
                                <td>K2</td>
                                <td>15 分</td>
                                <td>
                                    TA が<strong>適応性（adaptability）とインストール性（installability）のテストにどう貢献するか</strong>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>TA-4.4.1</td>
                                <td>K2</td>
                                <td>15 分</td>
                                <td>
                                    TA が<strong>相互運用性（interoperability）のテストにどう貢献するか</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=6363">ISTQB CTAL-TA v4.0 LO new vs old syllabus（xlsx を PDF 化したもの）</a>
                    </p>
                </div>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-1"><Mermaid chart={DIAGRAM_1} /></div>
                </div>
<h3 id="02-信頼度タグの見方">0.2 信頼度タグの見方</h3>
<p>
                    このガイドでは、内容の根拠の強さを次のタグで区別します。<strong>試験で問われるのは公式文書に書かれていること</strong>なので、タグを意識して読んでください。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>タグ</th>
                                <th>意味</th>
                                <th>扱い方</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 公式根拠
                                </td>
                                <td>
                                    ISTQB
                                    公式文書（シラバスの取得できた範囲、LO、キーワード、サンプル試験の解説、LO
                                    比較表、リリースノート）や ISO/IEC 25010:2023 の本文で<strong>直接確認できた内容</strong>
                                </td>
                                <td>試験対策の軸にしてよい</td>
                            </tr>
                            <tr className="even">
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> 実務補足
                                </td>
                                <td>
                                    筆者による解説・具体例・ベストプラクティス。公式文書の逐語的な記述ではない
                                </td>
                                <td>理解の助けとして使い、試験では公式表現を優先</td>
                            </tr>
                            <tr className="odd">
                                <td><span className="chip chip-w" title="要確認">⚠</span> 要確認</td>
                                <td>原典の確認が必要な点</td>
                                <td>公式 PDF で必ず裏取りする</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<h3 id="03--このガイドの限界必ず読んでください">
                    0.3 ⚠ このガイドの限界（必ず読んでください）
                </h3>
<div className="callout callout-warn">
                    <span className="lbl">重要なお知らせ</span>
                    <p>
                        <strong>第4章の本文（シラバス PDF の 44〜47
                            ページ）を、この文書の作成環境では全文取得できませんでした。</strong>
                        取得できたのは PDF の 1〜43 ページと、第4章のタイトル・キーワード・LO
                        の冒頭までです。
                    </p>
                </div>
<p>そのため、次の方針で作成しています。</p>
<ol type="1">
                    <li>
                        <strong>確認できた公式情報</strong>を土台にしました：目次（4.1〜4.4）、キーワード、LO、第0〜3章の関連記述（たとえば第3章が第4.1節を参照している箇所）、公式サンプル試験
                        v4.1 の第4章の問題（Q34〜Q37）の<strong>解説文</strong>、LO
                        新旧比較表、ISO/IEC 25010:2023 の定義。
                    </li>
                    <li>
                        本文を直接読めていない部分（典型的な欠陥の一覧、手順の細目など）は
                        <strong><span className="chip chip-t" title="実務補足">💡</span> 実務補足</strong>
                        と明記しました。
                    </li>
                    <li>
                        <strong>学習の最後に、公式シラバスの 44〜47
                            ページ（約4ページ）を必ず通読してください。</strong>
                        差異があれば公式を優先します。
                    </li>
                </ol>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-2"><Mermaid chart={DIAGRAM_2} /></div>
                </div>
<h3 id="04-バージョン情報受験前に確認">0.4 バージョン情報（受験前に確認）</h3>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>項目</th>
                                <th>内容</th>
                                <th>根拠</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>試験構成</td>
                                <td>45 問・合計 78 点・合格 51 点・120 分（非母国語は +25%）</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span>
                                    <a href="https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/">ISTQB 認定ページ</a>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>v3.1 の失効日</td>
                                <td>英語 2026-05-16、英語以外 2026-11-16</td>
                                <td><span className="chip chip-o" title="公式根拠">📘</span> 同上</td>
                            </tr>
                            <tr className="odd">
                                <td>v4.0 の発効日</td>
                                <td>リリースノートでは 2025-05-30 が発効日と記載</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span>
                                    <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5762">リリースノート</a>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>日本語で受験する場合</td>
                                <td>
                                    提供されている試験バージョンは各国の Member Board（日本は
                                    JSTQB）で確認
                                </td>
                                <td><span className="chip chip-w" title="要確認">⚠</span> 要確認</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<h2 id="1-第4章の全体像">1. 第4章の全体像</h2>
<h3 id="11-章の位置づけ">1.1 章の位置づけ</h3>
<p>
                    <span className="chip chip-o" title="公式根拠">📘</span>
                    <strong>第4章の基本情報</strong>
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>項目</th>
                                <th>内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>章タイトル</td>
                                <td>Testing Quality Characteristics（60 分）</td>
                            </tr>
                            <tr className="even">
                                <td>節構成</td>
                                <td>
                                    4.1 Functional Testing ／ 4.2 Usability Testing ／ 4.3
                                    Flexibility Testing ／ 4.4 Compatibility Testing
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>章の学習内容（シラバス 0.10）</td>
                                <td>
                                    いくつかの種類の<strong>機能テスト</strong>の実施方法、および機能に関する専門知識を使った<strong>非機能テスト</strong>（ユーザビリティ・柔軟性・互換性）への貢献
                                </td>
                            </tr>
                            <tr className="even">
                                <td>LO</td>
                                <td>4本（すべて K2）</td>
                            </tr>
                            <tr className="odd">
                                <td>キーワード（K1）</td>
                                <td>13語（1.5 節に一覧）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5745">CTAL-TA v4.0 シラバス</a>（目次、0.10、第4章冒頭）
                    </p>
                </div>
<p><strong>配点のイメージ</strong></p>
<ul>
                    <li>
                        公式サンプル試験 v4.1 では、第4章に対応する問題は
                        <strong>Q34〜Q37 の4問</strong>（すべて K2・各 1 点）です。
                    </li>
                    <li>
                        4 点 ÷ 78 点 ≒ <strong>5.1%</strong>。学習時間の割合（60 ÷ 1,215 ≒
                        4.9%）とほぼ一致します。
                    </li>
                    <li>
                        ただし<strong>サンプル試験は本番の配点配分を保証しません</strong>。本番の構成は「Exam
                        Structures and Rules」を確認してください。
                    </li>
                </ul>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5759">公式サンプル試験 解答 v4.1</a>
                    </p>
                </div>
<div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス</span>
                    <ul>
                        <li>
                            4問しかなくても、合格ラインは 51/78 点です。K2 の 1
                            点問題は<strong>落としにくい問題</strong>なので、取りこぼさないことが効率的な得点源になります。
                        </li>
                        <li>
                            第4章は「用語の違いを区別する」問題が中心です。1.5 節のキーワードと、第
                            7 章の比較表を重点的に覚えましょう。
                        </li>
                    </ul>
                </div>
<h3 id="12-なぜ-ta-が品質特性のテストを扱うのか">
                    1.2 なぜ TA が品質特性のテストを扱うのか
                </h3>
<p>
                    <span className="chip chip-o" title="公式根拠">📘</span> シラバスは TA
                    を次のような役割として定義しています（0.2）。
                </p>
<ul>
                    <li>顧客のビジネスニーズに、技術的な側面よりも重点を置く</li>
                    <li>
                        主に<strong>機能テスト</strong>を行い、さらにユーザー志向の<strong>非機能テスト</strong>（ユーザビリティ、適応性、インストール性、相互運用性）にも貢献する
                    </li>
                    <li>
                        ホワイトボックスよりも、<strong>ブラックボックス技法と経験ベースのテスト</strong>を使う
                    </li>
                </ul>
<p>
                    第2章では、TA
                    が<strong>プロダクトリスクを品質特性で分類</strong>すること（ISO/IEC 25010:2023
                    を使用）、そしてリスク軽減策の一つとして「<strong>適切なテストタイプを適用すること</strong>」があり、それは<strong>第4章で扱う</strong>と明記されています。
                </p>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-3"><Mermaid chart={DIAGRAM_3} /></div>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<span className="chip chip-o" title="公式根拠">📘</span>
                        <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5745">シラバス 0.2、2.1、2.2</a>
                    </p>
                </div>
<h3 id="13-isoiec-250102023-との対応">1.3 ISO/IEC 25010:2023 との対応</h3>
<p>
                    第4章は ISO/IEC
                    25010:2023（製品品質モデル）を<strong>枠組み</strong>として使います（シラバス
                    0.8）。ISO/IEC 25010:2023 は <strong>9つの品質特性</strong>を定義しています。
                </p>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-4"><Mermaid chart={DIAGRAM_4} /></div>
                </div>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>#</th>
                                <th>特性（英語）</th>
                                <th>日本語（仮訳）</th>
                                <th>サブ特性</th>
                                <th>第4章</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>Functional suitability</td>
                                <td>機能適合性</td>
                                <td>完全性・正確性・適切性</td>
                                <td><strong>4.1</strong></td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>Performance efficiency</td>
                                <td>性能効率性</td>
                                <td>時間効率性・資源効率性・容量</td>
                                <td>対象外</td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>Compatibility</td>
                                <td>互換性</td>
                                <td>共存性・<strong>相互運用性</strong></td>
                                <td><strong>4.4</strong>（LO は相互運用性）</td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>Interaction capability</td>
                                <td>インタラクション能力</td>
                                <td>
                                    適切性の認識・学習性・操作性・ユーザーエラー防止・ユーザーエンゲージメント・包括性・ユーザー支援・自己記述性
                                </td>
                                <td><strong>4.2</strong></td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>Reliability</td>
                                <td>信頼性</td>
                                <td>無欠陥性・可用性・耐障害性・回復性</td>
                                <td>対象外</td>
                            </tr>
                            <tr className="even">
                                <td>6</td>
                                <td>Security</td>
                                <td>セキュリティ</td>
                                <td>機密性・完全性・否認防止・責任追跡性・真正性・耐性</td>
                                <td>対象外</td>
                            </tr>
                            <tr className="odd">
                                <td>7</td>
                                <td>Maintainability</td>
                                <td>保守性</td>
                                <td>モジュール性・再利用性・解析性・修正性・試験性</td>
                                <td>対象外</td>
                            </tr>
                            <tr className="even">
                                <td>8</td>
                                <td>Flexibility</td>
                                <td>柔軟性</td>
                                <td>
                                    <strong>適応性</strong>・拡張性・<strong>インストール性</strong>・置換性
                                </td>
                                <td><strong>4.3</strong>（LO は適応性とインストール性）</td>
                            </tr>
                            <tr className="odd">
                                <td>9</td>
                                <td>Safety</td>
                                <td>安全性</td>
                                <td>
                                    運用上の制約・リスク特定・フェールセーフ・危険警告・安全な統合
                                </td>
                                <td>対象外</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<ul>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span>
                        9特性の名称と、Usability→Interaction capability／Portability→Flexibility
                        への置き換えは ISO の前文で確認済みです。
                    </li>
                    <li>
                        <span className="chip chip-t" title="実務補足">💡</span> 「対象外」は「第4章の
                        LO の対象外」という意味です。TA
                        が性能やセキュリティにまったく関与しないという意味ではありません（第2章のとおり、リスクの分類では
                        TA も関与します）。
                    </li>
                    <li>
                        <span className="chip chip-w" title="要確認">⚠</span> 一部のWebサイト（arc42
                        の一覧）では testability が柔軟性の行に並んで表示されますが、ISO/IEC
                        25010:2023 では保守性の下位と理解しています。原典で確認してください。
                    </li>
                </ul>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://www.iso.org/standard/78176.html">ISO/IEC 25010:2023（iso.org）</a>
                        ／
                        <a href="https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf">ISO/IEC 25010:2023 プレビュー PDF（iteh）</a>
                        ／
                        <a href="https://quality.arc42.org/standards/iso-25010">arc42 Quality Model：ISO 25010 一覧</a>
                    </p>
                </div>
<h3 id="14-v31-から-v40-への用語構成の変更点">
                    1.4 v3.1 から v4.0 への用語・構成の変更点
                </h3>
<p>
                    <span className="chip chip-o" title="公式根拠">📘</span>
                    旧版の知識（や古い学習教材）が混ざると混乱しやすいので、違いを整理します。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>観点</th>
                                <th>旧（ISO 25010:2011／CTAL-TA v3.1）</th>
                                <th>新（ISO 25010:2023／CTAL-TA v4.0）</th>
                                <th>根拠</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>ユーザビリティの特性名</td>
                                <td>Usability</td>
                                <td>
                                    <strong>Interaction capability</strong>（第4章のキーワードには
                                    usability と interaction capability の両方が残る）
                                </td>
                                <td>ISO 前文、v4.0 キーワード</td>
                            </tr>
                            <tr className="even">
                                <td>移植性の特性名</td>
                                <td>Portability</td>
                                <td>
                                    <strong>Flexibility</strong>（LO 比較表：ISO 25010 (2023)
                                    に合わせて名称変更）
                                </td>
                                <td>LO 比較表</td>
                            </tr>
                            <tr className="odd">
                                <td>アクセシビリティ</td>
                                <td>Accessibility</td>
                                <td>
                                    <strong>Inclusivity（包括性）と User
                                        assistance（ユーザー支援）に分割</strong>
                                </td>
                                <td>ISO 前文</td>
                            </tr>
                            <tr className="even">
                                <td>UI の美しさ</td>
                                <td>User interface aesthetics</td>
                                <td><strong>User engagement</strong> に置き換え</td>
                                <td>ISO 前文</td>
                            </tr>
                            <tr className="odd">
                                <td>成熟性</td>
                                <td>Maturity</td>
                                <td><strong>Faultlessness（無欠陥性）</strong> に置き換え</td>
                                <td>ISO 前文</td>
                            </tr>
                            <tr className="even">
                                <td>追加された特性・サブ特性</td>
                                <td>—</td>
                                <td>
                                    Safety（特性）、Self-descriptiveness・Inclusivity（インタラクション能力）、Resistance（セキュリティ）、Scalability（柔軟性）
                                </td>
                                <td>ISO 前文</td>
                            </tr>
                            <tr className="odd">
                                <td>章の学習時間</td>
                                <td>180 分（v3.1 の 4 章）</td>
                                <td><strong>60 分</strong></td>
                                <td>LO 比較表</td>
                            </tr>
                            <tr className="even">
                                <td>機能テストの扱い</td>
                                <td>4.2.1〜4.2.3 で技法・欠陥・時期を K2 で3本の LO</td>
                                <td>
                                    1 本の
                                    LO（TA-4.1.1）に<strong>簡素化</strong>。詳細は第3章の技法の説明に移動
                                </td>
                                <td>LO 比較表</td>
                            </tr>
                            <tr className="odd">
                                <td>学習目標の焦点</td>
                                <td>「対象とする典型的な欠陥を定義する」など</td>
                                <td>
                                    「<strong>TA がどう貢献するか</strong>を説明する」に書き換え
                                </td>
                                <td>LO 比較表</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf">ISO/IEC 25010:2023 前文</a>
                        ／
                        <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=6363">LO 新旧比較表</a>
                    </p>
                </div>
<div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス</span>
                    <ul>
                        <li>
                            v3.1 の教材（「Portability」「Usability
                            evaluation」などの表現）で学ぶ場合は、v4.0
                            の用語（Flexibility／Interaction
                            capability）に<strong>読み替える</strong>メモを作りましょう。
                        </li>
                        <li>
                            v3.1 が学習目標にしていた「典型的な欠陥の一覧」は、v4.0 では LO
                            から外れています。暗記より「TA
                            が何をするか」を説明できることを優先してください。
                        </li>
                    </ul>
                </div>
<h3 id="15-キーワード13語k1定義を思い出せること">
                    1.5 キーワード13語（K1：定義を思い出せること）
                </h3>
<p>
                    <span className="chip chip-o" title="公式根拠">📘</span>
                    第4章の冒頭に列挙されたキーワードです。LO に含まれなくても、<strong>用語集（ISTQB Glossary）の名称と定義を思い出せる</strong>ことが求められます（シラバス 0.5）。日本語は仮訳で、正式な訳語は JSTQB
                    用語集を確認してください。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>#</th>
                                <th>キーワード</th>
                                <th>日本語（仮訳）</th>
                                <th>一言でいうと</th>
                                <th>定義の根拠</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>functional suitability</td>
                                <td>機能適合性</td>
                                <td>利用者の明示・暗黙のニーズを満たす機能を提供できる能力</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO
                                    25010:2023 3.1
                                </td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>functional completeness</td>
                                <td>機能完全性</td>
                                <td>
                                    特定されたタスクと利用者の目的を<strong>すべて</strong>カバーする機能がある
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO 3.1.1
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>functional correctness</td>
                                <td>機能正確性</td>
                                <td><strong>正確な結果</strong>を提供できる（精度も含む）</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO 3.1.2
                                </td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>functional appropriateness</td>
                                <td>機能適切性</td>
                                <td>
                                    タスクや目的の達成を<strong>助ける</strong>機能である（不要な手順がない）
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO 3.1.3
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>functional testing</td>
                                <td>機能テスト</td>
                                <td>機能適合性を評価するテスト</td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span>
                                    用語集で確認
                                </td>
                            </tr>
                            <tr className="even">
                                <td>6</td>
                                <td>usability</td>
                                <td>ユーザビリティ（使用性）</td>
                                <td>利用者が目標を効果的・効率的・満足して達成できる度合い</td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> 用語集／ISO
                                    25019
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>7</td>
                                <td>interaction capability</td>
                                <td>インタラクション能力</td>
                                <td>
                                    利用者が UI
                                    を介して情報をやりとりし、タスクを完了できる能力（<strong>旧 usability</strong>）
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO 3.4
                                </td>
                            </tr>
                            <tr className="even">
                                <td>8</td>
                                <td>user experience</td>
                                <td>ユーザーエクスペリエンス（UX）</td>
                                <td>製品の利用（または利用の予期）によって生じる人の知覚や反応</td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> 用語集／ISO
                                    9241-210 で確認
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>9</td>
                                <td>flexibility</td>
                                <td>柔軟性</td>
                                <td>
                                    異なる、または変化する環境に適応できる度合い（<strong>旧 portability</strong>）
                                </td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> ISO
                                    25010:2023
                                </td>
                            </tr>
                            <tr className="even">
                                <td>10</td>
                                <td>adaptability</td>
                                <td>適応性</td>
                                <td>異なる環境に<strong>適応</strong>できる</td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span>
                                    用語集で確認
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>11</td>
                                <td>installability</td>
                                <td>インストール性</td>
                                <td>
                                    指定環境に<strong>インストール／アンインストール</strong>できる
                                </td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span>
                                    用語集で確認
                                </td>
                            </tr>
                            <tr className="even">
                                <td>12</td>
                                <td>compatibility</td>
                                <td>互換性</td>
                                <td>
                                    他製品と情報を交換できる、または同じ環境や資源を共有しながら機能を果たせる
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO 3.3
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>13</td>
                                <td>interoperability</td>
                                <td>相互運用性</td>
                                <td>
                                    他製品と情報を<strong>交換し、その情報を相互に利用</strong>できる
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO
                                    3.3.2、サンプル試験 Q37 の解説
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5745">シラバス 第4章 Keywords</a>
                        ／
                        <a href="https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf">ISO/IEC 25010:2023 プレビュー</a>
                        ／ <a href="https://glossary.istqb.org/">ISTQB Glossary</a>
                    </p>
                </div>
<p>
                    <strong>覚え方のコツ（<span className="chip chip-t" title="実務補足">💡</span>）</strong>：4.1
                    の3特性は「<strong>正（correctness）・適（appropriateness）・完（completeness）</strong>」の3文字で覚えます。
                </p>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-5"><Mermaid chart={DIAGRAM_5} /></div>
                </div>
                <h2 id="2-41-機能テストta-411k2">2. 4.1 機能テスト（TA-4.1.1・K2）</h2>
<div className="callout callout-lo">
                    <span className="lbl">学習目標</span>
                    <p>
                        <strong>LO TA-4.1.1（K2）</strong>：機能正確性・機能適切性・機能完全性のテストを<strong>区別できる</strong>（Differentiate）
                    </p>
                </div>
<h3 id="21-まず結論3つの違いを一枚で">2.1 まず結論：3つの違いを一枚で</h3>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th></th>
                                <th>機能正確性<br />Functional correctness</th>
                                <th>機能適切性<br />Functional appropriateness</th>
                                <th>機能完全性<br />Functional completeness</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>一言で</td>
                                <td><strong>正しく</strong>動くか</td>
                                <td>タスクの達成に<strong>役立つ</strong>か</td>
                                <td>必要な機能が<strong>漏れなく</strong>あるか</td>
                            </tr>
                            <tr className="even">
                                <td>
                                    ISO 25010:2023 の定義
                                    <span className="chip chip-o" title="公式根拠">📘</span>
                                </td>
                                <td>
                                    利用者が使ったとき<strong>正確な結果</strong>を返す能力（精度も含む）
                                </td>
                                <td>
                                    指定されたタスクや目的の達成を<strong>促進する</strong>機能を提供する能力
                                </td>
                                <td>
                                    特定されたタスクと利用者の目的を<strong>すべてカバーする</strong>機能を提供する能力
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>確かめる問い</td>
                                <td>出力・計算・状態遷移は期待どおりか</td>
                                <td>手順は必要十分か。不要な手順や役に立たない選択肢はないか</td>
                                <td>要件・利用者の目的に対して、機能の抜けはないか</td>
                            </tr>
                            <tr className="even">
                                <td>
                                    典型的な不具合
                                    <span className="chip chip-t" title="実務補足">💡</span>
                                </td>
                                <td>計算ミス、絞り込み条件の誤り、境界値の誤判定</td>
                                <td>意味の薄い選択肢、余計な確認画面、タスクに不要な入力</td>
                                <td>要件にある機能が未実装、データの更新はできるが削除できない</td>
                            </tr>
                            <tr className="odd">
                                <td>主な検証の視点</td>
                                <td>仕様との<strong>一致</strong></td>
                                <td>利用者の<strong>目的への適合</strong></td>
                                <td>要求に対する<strong>網羅</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<span className="chip chip-o" title="公式根拠">📘</span>
                        <a href="https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf">ISO/IEC 25010:2023 3.1〜3.1.3</a>（定義・注記・例）／
                        <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5759">公式サンプル試験 解答 v4.1 Q34</a>
                    </p>
                </div>
<p>
                    ISO
                    の注記には、機能適合性は「機能が<strong>明示・暗黙のニーズ</strong>を満たすか」だけでなく「<strong>機能仕様</strong>を満たすか」にも関わる、とあります。つまり「仕様どおりか」と「ニーズに合うか」の<strong>両方</strong>を見る特性です。
                </p>
<h3 id="22-機能適合性functional-suitabilityとは">
                    2.2 機能適合性（Functional suitability）とは
                </h3>
<ul>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span> ISO/IEC
                        25010:2023：指定された条件で使用したとき、<strong>明示された、および暗黙のニーズ</strong>を満たす機能を提供する製品の能力。
                    </li>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span> 第1章の導入：TA
                        は品質特性のうち、まず<strong>機能適合性</strong>に専門性を持ちます。TA
                        が主に担当するテストレベルは、システムテスト・受け入れテスト・システム統合テストです。
                    </li>
                    <li>
                        <span className="chip chip-t" title="実務補足">💡</span>
                        機能テストは「ボタンを押して画面が変わるか」だけではありません。<strong>要件に書かれていない暗黙のニーズ</strong>（たとえば「検索結果は関連度順に並ぶはず」）も対象になります。
                    </li>
                </ul>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-6"><Mermaid chart={DIAGRAM_6} /></div>
                </div>
<h3 id="23-3つのサブ特性を詳しく">2.3 3つのサブ特性を詳しく</h3>
<h4 id="231-機能正確性functional-correctness">
                    2.3.1 機能正確性（Functional correctness）
                </h4>
<p>
                    <strong>定義</strong>：<span className="chip chip-o" title="公式根拠">📘</span>
                    利用者が使用したとき、<strong>正確な結果</strong>を提供できる能力。精度（precision）は正確性の属性の一つで、科学計算ソフトのように高い精度が必要な製品では、必要な桁数まで正確であることが求められます。
                </p>
<p>
                    <strong>なぜ重要か</strong>：<span className="chip chip-t" title="実務補足">💡</span>
                    結果が間違っていると、利用者は誤った判断・誤った金額・誤ったデータを受け取ります。金融・医療・会計のように、誤りがそのまま損害に直結する領域ではもっとも優先度が高い特性です。
                </p>
<p><strong>具体例（ECサイト）</strong></p>
<ul>
                    <li>
                        送料無料の判定：合計 5,000 円以上で無料 → 4,999 円と 5,000 円で判定が変わる
                    </li>
                    <li>消費税の計算：端数処理（切り捨て・四捨五入）が仕様どおりか</li>
                    <li>
                        絞り込み検索：「価格 1,000 円以上 3,000
                        円以下」で結果が条件どおりか（サンプル試験 Q34
                        が「絞り込み機能の正しさ」を正確性の例として挙げている
                        <span className="chip chip-o" title="公式根拠">📘</span>）
                    </li>
                </ul>
<p>
                    <strong>ポイント</strong>：仕様（期待結果＝テストオラクル）と<strong>実際の結果を比べる</strong>ことが基本です。オラクルが作りにくい場合の対策は第1章
                    1.3.4 にあります（疑似オラクル、メタモルフィックテストなど
                    <span className="chip chip-o" title="公式根拠">📘</span>）。
                </p>
<h4 id="232-機能適切性functional-appropriateness">
                    2.3.2 機能適切性（Functional appropriateness）
                </h4>
<p>
                    <strong>定義</strong>：<span className="chip chip-o" title="公式根拠">📘</span>
                    指定されたタスクや目的の<strong>達成を促進する</strong>機能を提供できる能力。ISO
                    の例では「<strong>必要十分なステップ</strong>を提供し、不要なステップを含まない」ことが挙げられています。ISO
                    9241-110 の「タスクへの適合性（suitability for the task）」に相当します。
                </p>
<p>
                    <strong>なぜ重要か</strong>：<span className="chip chip-t" title="実務補足">💡</span>
                    仕様どおりに正しく動いていても、利用者の目的に対して<strong>遠回り</strong>だったり<strong>役に立たなかったり</strong>すれば、製品としての価値が下がります。仕様の妥当性そのものを疑う観点で、レビューや利用者の声から見つかることが多い特性です。
                </p>
<p><strong>具体例（ECサイト）</strong></p>
<ul>
                    <li>
                        商品カテゴリの一覧が、利用者にとって探しやすい分類になっているか（サンプル試験
                        Q34 が<strong>適切性の例</strong>として挙げている
                        <span className="chip chip-o" title="公式根拠">📘</span>）
                    </li>
                    <li>購入完了までに、目的に不要な入力項目や確認画面がないか</li>
                    <li>「注文履歴」を見たい利用者が、ログイン後に何ステップで到達できるか</li>
                </ul>
<p>
                    <strong>正確性との違い</strong>：<span className="chip chip-t" title="実務補足">💡</span>
                    正確性は「間違っていないか」、適切性は「<strong>間違っていなくても、役に立つか</strong>」です。仕様どおりなのに使えない場合は、適切性の問題である可能性が高いです。
                </p>
<h4 id="233-機能完全性functional-completeness">
                    2.3.3 機能完全性（Functional completeness）
                </h4>
<p>
                    <strong>定義</strong>：<span className="chip chip-o" title="公式根拠">📘</span>
                    特定されたタスクと利用者の目的を<strong>すべてカバー</strong>する機能一式を提供できる能力。
                </p>
<p>
                    <strong>なぜ重要か</strong>：<span className="chip chip-t" title="実務補足">💡</span>
                    機能が<strong>存在しない</strong>ことは、テストを実行しても見つかりません（実行するものがないため）。要件・ユースケース・データのライフサイクルと突き合わせる<strong>網羅の確認</strong>が必要です。
                </p>
<p><strong>具体例（ECサイト）</strong></p>
<ul>
                    <li>要件に「領収書の発行」があるのに、画面から発行できない</li>
                    <li>
                        住所を「登録」「参照」「更新」できるのに、「削除」できない（CRUD の欠落）
                    </li>
                    <li>返品の申請はできるが、返品状況を確認する機能がない</li>
                </ul>
<p>
                    <strong>第3章との接続 <span className="chip chip-o" title="公式根拠">📘</span></strong>：CRUD テストの<strong>完全性テスト（completeness testing）<strong>は静的テストで、すべてのエンティティに C・R・U・D
                            の全操作が存在するかを確認し、<strong>操作の欠落は調査が必要な異常</strong>とされます（シラバス
                            3.2.1）。また第3章 3.5.1 は、振る舞いベースの技法が</strong>機能の欠落</strong>（missing features）のような欠陥を見つけやすいと述べています。
                </p>
<h3 id="24-見分け方どの特性の問題か迷ったとき">
                    2.4 見分け方：どの特性の問題か迷ったとき
                </h3>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-7"><Mermaid chart={DIAGRAM_7} /></div>
                </div>
<p>
                    <strong>間違えやすいペア（<span className="chip chip-t" title="実務補足">💡</span>）</strong>
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>迷う例</th>
                                <th>正しい分類</th>
                                <th>理由</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>送料の計算結果が 1 円ずれる</td>
                                <td>正確性</td>
                                <td>結果が間違っている</td>
                            </tr>
                            <tr className="even">
                                <td>「削除」ボタン自体がない</td>
                                <td>完全性</td>
                                <td>機能が存在しない</td>
                            </tr>
                            <tr className="odd">
                                <td>削除の前に確認画面が3回出る</td>
                                <td>適切性（または使いやすさ）</td>
                                <td>
                                    不要なステップが多い。ステップの分かりにくさや操作感が主なら 4.2
                                </td>
                            </tr>
                            <tr className="even">
                                <td>ボタンの文言が分かりにくい</td>
                                <td>使いやすさ（4.2）</td>
                                <td>機能の有無・結果ではなく、認識・操作の問題</td>
                            </tr>
                            <tr className="odd">
                                <td>他システムに注文データが渡らない</td>
                                <td>相互運用性（4.4）</td>
                                <td>機能単体ではなく、システム間の情報交換の問題</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<h3 id="25-機能テストの進め方ステップバイステップ">
                    2.5 機能テストの進め方（ステップバイステップ）
                </h3>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-8"><Mermaid chart={DIAGRAM_8} /></div>
                </div>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>Step</th>
                                <th>やること</th>
                                <th>根拠・補足</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>
                                    テストベース（要件、ユーザーストーリー、受け入れ基準、有識者の知識）を集める。会話で得た情報も含める
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> シラバス
                                    1.2.1（口頭情報もテストベースに含める）。<span className="chip chip-t" title="実務補足">💡</span>
                                    暗黙のニーズは有識者へのヒアリングで補う
                                </td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>
                                    テスト条件を、まず「画面 x
                                    の機能」のような<strong>高レベル</strong>で、次に「画面 x は 1
                                    桁足りない口座番号を拒否する」のように<strong>詳細</strong>に定義する
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> シラバス
                                    1.2.1。アジャイルでは受け入れ基準として表現できる
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>
                                    各テスト条件を、正確性・適切性・完全性のどれを確かめるものか<strong>振り分ける</strong>（複数に該当してよい）
                                </td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> 実務補足
                                </td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>特性ごとに適切な技法を選ぶ（2.6 節）</td>
                                <td><span className="chip chip-o" title="公式根拠">📘</span> 第3章</td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>
                                    高レベルテストケースから低レベルへ具体化し、テストデータを用意。<strong>ロジックとデータを分離</strong>する
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> シラバス
                                    1.3.1、1.3.5
                                </td>
                            </tr>
                            <tr className="even">
                                <td>6</td>
                                <td>
                                    実行して実際の結果と期待結果を比較し、異常の原因を分析する（テストスクリプトや環境の欠陥、仕様の誤解の可能性も）
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> シラバス
                                    1.2.4
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>7</td>
                                <td>
                                    テストベースとのトレーサビリティを更新し、結果をリスクやカバレッジの情報に変換する
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> シラバス
                                    1.2.4
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<h3 id="26-特性ごとの技法の選び方">2.6 特性ごとの技法の選び方</h3>
<p>
                    第3章は「<strong>どの欠陥を狙うか</strong>でテスト技法を選ぶ」考え方を示しています。
                </p>
<ul>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span>
                        データベースの技法：データ処理・ドメイン実装・UI・計算・パラメータの組み合わせの欠陥
                    </li>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span>
                        振る舞いベースの技法：機能の欠落・コミュニケーション・処理の欠陥
                    </li>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span>
                        ルールベースの技法：ロジックと制御フローの欠陥
                    </li>
                </ul>
<p>
                    これを 4.1 の3特性に当てはめると、次のようになります（<span className="chip chip-t" title="実務補足">💡</span>
                    対応づけは実務的な整理）。
                </p>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-9"><Mermaid chart={DIAGRAM_9} /></div>
                </div>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>特性</th>
                                <th>主な技法（第3章）</th>
                                <th>何を確かめるか</th>
                                <th>根拠</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>正確性</td>
                                <td>
                                    同値分割・境界値分析・ドメインテスト（3.1.1）、デシジョンテーブル（3.3.1）、状態遷移（3.2.2）、メタモルフィック（3.3.2）
                                </td>
                                <td>計算・判定・状態ごとの結果・ルールの正しさ</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span>
                                    技法の説明は第3章。特性との対応づけは
                                    <span className="chip chip-t" title="実務補足">💡</span>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>完全性</td>
                                <td>
                                    CRUD
                                    テストの完全性テスト（3.2.1）、シナリオベース（3.2.3）、要件・ユースケースとのトレーサビリティ
                                </td>
                                <td>機能・操作・シナリオの抜け</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span>
                                    3.2.1、3.5.1。トレーサビリティの位置づけは 1.2.2
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>適切性</td>
                                <td>
                                    シナリオベース（3.2.3）、セッションベース（3.4.1）、チェックリスト（3.4.2）、クラウドテスト（3.4.3）
                                </td>
                                <td>実利用者の目的に対する有用性、手順の必要十分さ</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 3.2.3
                                    は「システムの機能適合性を利用者の視点で見るエンドツーエンドテスト」と説明。3.4.3
                                    は「実利用者の視点」を利点に挙げる
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<p>
                    <strong>この節のポイント</strong>：<span className="chip chip-o" title="公式根拠">📘</span>
                    第3章 3.2.3
                    は、シナリオベーステストを「<strong>機能適合性（第4.1節参照）を、利用者の視点から見るエンドツーエンドのテスト</strong>」と説明しています。4.1
                    と 3.2.3 は<strong>つながっている</strong>ので、セットで理解しましょう。
                </p>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5745">シラバス 3.1〜3.5</a>
                    </p>
                </div>
<h3 id="27-いつどのレベルでテストするか">2.7 いつ・どのレベルでテストするか</h3>
<ul>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span> TA
                        が主に担当するのは、<strong>システムテスト、受け入れテスト、システム統合テスト</strong>です（シラバス
                        1 章の導入）。
                    </li>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span>
                        アジャイルでは、テスト条件を<strong>受け入れ基準</strong>として表現できます（1.2.1）。
                    </li>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span>
                        <strong>シフトレフト</strong>の考え方で、リスク軽減に最も早く効くテスト活動（レビューなどの静的テスト）を示します（2.1）。<strong>完全性の欠落は、要件やユースケースのレビューで最も早く見つけられます</strong>（<span className="chip chip-t" title="実務補足">💡</span>）。
                    </li>
                </ul>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-10"><Mermaid chart={DIAGRAM_10} /></div>
                </div>
<h3 id="28-ベストプラクティス機能テスト">2.8 ベストプラクティス（機能テスト）</h3>
<div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス（全体）</span>
                    <ul>
                        <li>
                            <strong>トレーサビリティを保つ</strong>：要件 → テスト条件 →
                            テストケース →
                            結果をたどれるようにします。完全性の確認（要件に対する網羅）はこれが前提です（<span className="chip chip-o" title="公式根拠">📘</span>
                            シラバス 1.2.2、1.2.4）。
                        </li>
                        <li>
                            <strong>仕様の適合とニーズの適合を分けて記録する</strong>：正確性の欠陥は「仕様との差」、適切性・完全性の欠陥は「ニーズや目的との差」であることが多く、修正の相談先（開発者か、プロダクトオーナーか）が変わります（<span className="chip chip-t" title="実務補足">💡</span>）。
                        </li>
                        <li>
                            <strong>暗黙のニーズを言語化する</strong>：「当然こうなるはず」という期待を、有識者へのインタビューやペルソナから拾い、テスト条件にします（<span className="chip chip-t" title="実務補足">💡</span>。ペルソナの活用は
                            <span className="chip chip-o" title="公式根拠">📘</span> 1.3.5
                            のテストデータの説明にも登場）。
                        </li>
                        <li>
                            <strong>リスクに応じて厚みを変える</strong>：重要度が高い機能ほど厳密なカバレッジ（例：ペアワイズよりすべての組み合わせ）、低い場合は経験ベースで軽く（<span className="chip chip-o" title="公式根拠">📘</span>
                            シラバス 3.5.1）。
                        </li>
                    </ul>
                </div>
<div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス（正確性）</span>
                    <ul>
                        <li>
                            期待結果（テストオラクル）を<strong>独立して</strong>用意する：仕様書、レガシーシステム（疑似オラクル）、メタモルフィック関係など（<span className="chip chip-o" title="公式根拠">📘</span>
                            1.3.4）。
                        </li>
                        <li>
                            精度が要件になる機能では、<strong>許容誤差と桁数</strong>をテスト条件に含める（<span className="chip chip-o" title="公式根拠">📘</span>
                            ISO の注記で精度は正確性の属性）。
                        </li>
                        <li>
                            境界値は
                            <strong>ON／OFF／IN／OUT 点</strong>の考え方で漏れなく選ぶ（<span className="chip chip-o" title="公式根拠">📘</span>
                            3.1.1 ドメインテスト）。
                        </li>
                    </ul>
                </div>
<div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス（適切性）</span>
                    <ul>
                        <li>
                            実利用者の<strong>操作パターン（オペレーショナルプロファイル）とペルソナ</strong>からシナリオを作る（<span className="chip chip-o" title="公式根拠">📘</span>
                            サンプル試験 Q35 の解説が使用を示唆。3.2.3
                            も、ユーザー調査・ペルソナ・ジャーニーマップを挙げる）。
                        </li>
                        <li>
                            手順数を<strong>測る</strong>：目的達成までのクリック数・画面数を記録し、要件やベースラインと比べる（<span className="chip chip-t" title="実務補足">💡</span>）。
                        </li>
                        <li>
                            客観的な判断が難しいため、<strong>複数の利用者視点</strong>（クラウドテスト、受け入れテスト）を組み合わせる（<span className="chip chip-o" title="公式根拠">📘</span>
                            3.4.3）。
                        </li>
                    </ul>
                </div>
<div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス（完全性）</span>
                    <ul>
                        <li>
                            <strong>CRUD マトリクス</strong>を作り、エンティティごとに C・R・U・D
                            の欠落を静的に確認する（<span className="chip chip-o" title="公式根拠">📘</span>
                            3.2.1）。
                        </li>
                        <li>
                            ユースケースの<strong>主シナリオ・拡張・例外</strong>がすべて実装されているか確認する（<span className="chip chip-o" title="公式根拠">📘</span>
                            3.2.3）。
                        </li>
                        <li>
                            要件レビューの段階で、「この目的を達成するために足りない機能はないか」を<strong>利用者の目的</strong>から逆算して確認する（<span className="chip chip-t" title="実務補足">💡</span>）。
                        </li>
                    </ul>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5745">シラバス 1.2、1.3、3.1、3.2、3.5</a>
                    </p>
                </div>
<h3 id="29--対比">2.9 ✅／❌ 対比</h3>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>観点</th>
                                <th className="bad-col">❌ 悪い例</th>
                                <th className="good-col">✅ 良い例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>特性の切り分け</td>
                                <td className="bad-col">「不具合＝正確性」とだけ分類する</td>
                                <td className="good-col">
                                    正確性・適切性・完全性のどれかを明示して記録する
                                </td>
                            </tr>
                            <tr className="even">
                                <td>期待結果</td>
                                <td className="bad-col">開発者が書いた実装を見て期待結果を決める</td>
                                <td className="good-col">仕様・有識者・独立したオラクルから決める</td>
                            </tr>
                            <tr className="odd">
                                <td>完全性</td>
                                <td className="bad-col">実装済みの機能だけをテストする</td>
                                <td className="good-col">
                                    要件・ユースケース・CRUD
                                    と突き合わせて<strong>抜け</strong>を探す
                                </td>
                            </tr>
                            <tr className="even">
                                <td>適切性</td>
                                <td className="bad-col">
                                    テスト担当者の感覚だけで「使いにくい」と報告する
                                </td>
                                <td className="good-col">
                                    ペルソナ・実利用者の観察・手順数などの根拠を添える
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>テストケース</td>
                                <td className="bad-col">期待結果が「正しく動く」だけ</td>
                                <td className="good-col">
                                    具体的な値・状態を期待結果に書く（<span className="chip chip-o" title="公式根拠">📘</span>
                                    1.3.2 の「正確さ・完全性」基準）
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<h3 id="210-公式サンプル試験-q34-の考え方">2.10 公式サンプル試験 Q34 の考え方</h3>
<p>
                    <span className="chip chip-o" title="公式根拠">📘</span> 公式サンプル試験 v4.1 の
                    Q34（LO：TA-4.1.1・K2）は、次のような<strong>具体的なテスト活動がどの種類のテストか</strong>を選ばせる問題です。解説文の要点は次のとおりです（設問の全文は公式資料で確認してください）。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>解説から読み取れる選択肢の内容</th>
                                <th>解説が示す分類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>分類のカテゴリが利用者にとって役立つかを確認する</td>
                                <td><strong>機能適切性</strong>のテスト</td>
                            </tr>
                            <tr className="even">
                                <td>フィルタ機能の正しさを確認する</td>
                                <td><strong>機能正確性</strong>のテスト（正解）</td>
                            </tr>
                            <tr className="odd">
                                <td>2つのシステム間のやりとりを確認する</td>
                                <td><strong>相互運用性</strong>のテスト</td>
                            </tr>
                            <tr className="even">
                                <td>インタフェースの学習しやすさや見た目を確認する</td>
                                <td><strong>ユーザビリティ</strong>のテスト</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<p>
                    <strong>解き方</strong>：活動の<strong>目的語</strong>を見ます。「役に立つか」なら適切性、「正しいか」なら正確性、「システム間」なら相互運用性、「学習しやすさ・見た目」ならユーザビリティです。
                </p>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5759">公式サンプル試験 解答 v4.1 Q34</a>
                    </p>
                </div>
<h3 id="211-41-のまとめ">2.11 4.1 のまとめ</h3>
<ul>
                    <li>
                        機能適合性 ＝ 完全性（漏れなく）＋正確性（正しく）＋適切性（役に立つ）。
                    </li>
                    <li>
                        3つは<strong>確かめる問いが違う</strong>：抜けはないか／間違いはないか／役に立つか。
                    </li>
                    <li>
                        完全性は<strong>存在しないものを探す</strong>ので、静的なレビュー・CRUD
                        マトリクス・トレーサビリティが有効。
                    </li>
                    <li>
                        適切性は<strong>利用者の目的</strong>が基準なので、シナリオ・ペルソナ・実利用者が有効。
                    </li>
                    <li>
                        第3章の技法（特にシナリオベースと
                        CRUD）と<strong>つなげて</strong>理解する。
                    </li>
                </ul>
                <h2 id="3-42-ユーザビリティテストta-421k2">
                    3. 4.2 ユーザビリティテスト（TA-4.2.1・K2）
                </h2>
<div className="callout callout-lo">
                    <span className="lbl">学習目標</span>
                    <p>
                        <strong>LO TA-4.2.1（K2）</strong>：テストアナリストが<strong>ユーザビリティテストにどう貢献するか</strong>を説明できる（Explain）
                    </p>
                </div>
<h3 id="31-用語の整理usabilityinteraction-capabilityux">
                    3.1 用語の整理：usability・interaction capability・UX
                </h3>
<p>
                    第4章のキーワードには、<strong>usability・interaction capability・user experience</strong>
                    の3語が並びます。混同しやすいので、まず関係を整理します。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>用語</th>
                                <th>何を指すか</th>
                                <th>根拠</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>
                                    <strong>Interaction capability</strong>（インタラクション能力）
                                </td>
                                <td>
                                    製品が、利用者と UI
                                    を介して情報をやりとりし、意図したタスクを完了できる<strong>製品側の能力</strong>。旧
                                    Usability を置き換えた特性名
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO/IEC
                                    25010:2023 3.4
                                </td>
                            </tr>
                            <tr className="even">
                                <td><strong>Usability</strong>（ユーザビリティ）</td>
                                <td>
                                    利用の<strong>結果</strong>として、利用者が目標を効果的・効率的・満足して達成できたか（quality-in-use
                                    モデル：ISO/IEC 25019）
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO 3.4
                                    の注記
                                </td>
                            </tr>
                            <tr className="odd">
                                <td><strong>User experience</strong>（UX）</td>
                                <td>製品の利用（や利用の予期）によって生じる、人の知覚や反応</td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> 用語集／ISO
                                    9241-210 で確認（<span className="chip chip-w" title="要確認">⚠</span>）
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<p>
                    ISO
                    の注記には、「<strong>インタラクション能力はユーザビリティの前提条件</strong>」とあります。つまり、製品側がインタラクション能力を備えていて、はじめて利用の結果としてのユーザビリティが得られます。
                </p>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-11"><Mermaid chart={DIAGRAM_11} /></div>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf">ISO/IEC 25010:2023 プレビュー（3.4 と注記）</a>
                    </p>
                </div>
<h3 id="32-インタラクション能力の8つのサブ特性">
                    3.2 インタラクション能力の8つのサブ特性
                </h3>
<p>
                    <span className="chip chip-o" title="公式根拠">📘</span> ISO/IEC 25010:2023
                    のサブ特性名は arc42 の一覧と ISO
                    前文で確認できます。定義文は、下表の上から4つ（★）を ISO
                    の本文で確認しました。残り4つは
                    <span className="chip chip-t" title="実務補足">💡</span>
                    平易な言い換えです（原典で確認してください）。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>#</th>
                                <th>サブ特性（英語）</th>
                                <th>日本語（仮訳）</th>
                                <th>意味</th>
                                <th>
                                    テスト観点の例（<span className="chip chip-t" title="実務補足">💡</span>）
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>Appropriateness recognizability ★</td>
                                <td>適切性の認識</td>
                                <td>
                                    利用者が、その製品が自分のニーズに合うと<strong>認識できる</strong>（初期の印象・説明・ホームページなどから）
                                </td>
                                <td>トップ画面やデモで「何ができる製品か」が伝わるか</td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>Learnability ★</td>
                                <td>学習性</td>
                                <td>
                                    指定された利用者が、<strong>指定の時間内</strong>に機能の使い方を学べる
                                </td>
                                <td>初回利用者が説明なしで主要タスクを完了できるまでの時間</td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>Operability ★</td>
                                <td>操作性</td>
                                <td>
                                    機能や属性が<strong>操作・制御しやすい</strong>（制御のしやすさ、期待との一致、マウスやペンなどの入力装置の効率にも関係）
                                </td>
                                <td>キーボード操作、戻る・取り消し、操作の一貫性</td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>User error protection ★</td>
                                <td>ユーザーエラー防止</td>
                                <td><strong>操作ミスを防ぐ</strong></td>
                                <td>
                                    入力チェック、確認ダイアログ、取り消し（Undo）、危険操作の誤クリック防止
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>User engagement</td>
                                <td>ユーザーエンゲージメント</td>
                                <td>
                                    魅力的で、継続して使いたくなる提示（旧 UI aesthetics に相当）
                                </td>
                                <td>視覚デザインの一貫性、快適さ</td>
                            </tr>
                            <tr className="even">
                                <td>6</td>
                                <td>Inclusivity</td>
                                <td>包括性</td>
                                <td>多様な背景（言語・文化・年齢・能力など）の人が使える</td>
                                <td>多言語、文字サイズ、色覚への配慮</td>
                            </tr>
                            <tr className="odd">
                                <td>7</td>
                                <td>User assistance</td>
                                <td>ユーザー支援</td>
                                <td>
                                    幅広い能力の人が使えるようにする支援（旧 accessibility の一部）
                                </td>
                                <td>スクリーンリーダー対応、キーボードのみでの操作</td>
                            </tr>
                            <tr className="even">
                                <td>8</td>
                                <td>Self-descriptiveness</td>
                                <td>自己記述性</td>
                                <td>
                                    説明書に頼らずとも、必要なときに必要な情報が提示され、使い方が分かる
                                </td>
                                <td>ラベル、ヘルプ、エラーメッセージの分かりやすさ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-12"><Mermaid chart={DIAGRAM_12} /></div>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf">ISO/IEC 25010:2023 プレビュー</a>（★の定義）／
                        <a href="https://quality.arc42.org/standards/iso-25010">arc42：ISO 25010 の特性一覧</a>（サブ特性名）／
                        <a href="https://quality.arc42.org/articles/iso-25010-update-2023">arc42：2023 版の変更点</a>
                    </p>
                </div>
<h3 id="33-ta-はユーザビリティテストにどう貢献するか">
                    3.3 TA はユーザビリティテストにどう貢献するか
                </h3>
<p>
                    <span className="chip chip-o" title="公式根拠">📘</span> LO 比較表は、この LO
                    を「<strong>言い換えて簡素化し、専門資格 CT-UT との重複を減らした</strong>」と説明しています。つまり Advanced Level TA
                    では、ユーザビリティの<strong>深い専門技法</strong>ではなく、<strong>TA の強み（業務知識・機能知識・シナリオ設計）を使った貢献</strong>が問われます。
                </p>
<p>
                    公式サンプル試験 Q35 の解説から、TA の貢献として次の点が読み取れます（<span className="chip chip-o" title="公式根拠">📘</span>）。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>#</th>
                                <th>TA の貢献</th>
                                <th>根拠となる解説の要点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>
                                    <strong>オペレーショナルプロファイル（利用パターン）とペルソナ</strong>を使い、実際の利用を反映した<strong>シナリオ</strong>を作る
                                </td>
                                <td>正解の選択肢の内容</td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>
                                    セッションの参加者は、<strong>対象となる利用者グループの特性</strong>を代表する実利用者にする（最も経験豊富な人ばかりを選ばない）
                                </td>
                                <td>誤答 a の否定理由</td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>
                                    参加者を TA
                                    自身で代用しない。<strong>組織の利用者</strong>が参加する
                                </td>
                                <td>誤答 b の否定理由</td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>
                                    参加者を<strong>訂正・誘導せず、観察</strong>する（助けると、実際の利用での効率や有効性を正しく評価できない）
                                </td>
                                <td>誤答 c の否定理由</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<p>
                    <span className="chip chip-t" title="実務補足">💡</span> さらに、TA
                    が日常的に行える貢献を実務として補足します。
                </p>
<ul>
                    <li>
                        要件や UI
                        設計を<strong>レビュー</strong>して、学習性・操作性・エラー防止の問題を早期に指摘する（静的テスト）
                    </li>
                    <li>
                        機能テストの結果や不具合の傾向から、使いにくい箇所（誤操作が多い画面）を指摘する
                    </li>
                    <li>
                        ヒューリスティクスやチェックリストを使った<strong>専門家評価</strong>を行う（3.6
                        節）
                    </li>
                    <li>
                        利用者テストの<strong>タスク設計・データ準備・実施・記録</strong>を支える
                    </li>
                </ul>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5759">公式サンプル試験 解答 v4.1 Q35</a>
                        ／
                        <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=6363">LO 新旧比較表</a>
                    </p>
                </div>
<h3 id="34-ユーザビリティテスト利用者テストの進め方">
                    3.4 ユーザビリティテスト（利用者テスト）の進め方
                </h3>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-13"><Mermaid chart={DIAGRAM_13} /></div>
                </div>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>Step</th>
                                <th>やること</th>
                                <th>補足</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>
                                    何を判断するための調査か（新規機能の受容性、フロー改善など）と、対象利用者を決める
                                </td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span>
                                    目的が曖昧だと結果が使えない
                                </td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>
                                    ペルソナとオペレーショナルプロファイルから、現実的なタスクシナリオを作る
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> Q35 の解説
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>
                                    指標を事前に決める：<strong>タスク成功率、所要時間、エラー数、主観的満足度</strong>
                                </td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span>
                                    効果（成功率）・効率（時間）・満足（アンケート）に対応
                                </td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>
                                    対象利用者グループの<strong>属性</strong>（経験、年齢、環境など）で参加者を選ぶ
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> Q35 の解説
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>
                                    参加者に<strong>タスクを与え、観察</strong>する。声かけで誘導しない
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> Q35 の解説
                                </td>
                            </tr>
                            <tr className="even">
                                <td>6</td>
                                <td>
                                    見つかった問題を、影響（タスク失敗か遅延か）と頻度で優先度づけ
                                </td>
                                <td><span className="chip chip-t" title="実務補足">💡</span></td>
                            </tr>
                            <tr className="odd">
                                <td>7</td>
                                <td>
                                    修正案とともに報告し、修正後に<strong>再テスト</strong>して改善を確認
                                </td>
                                <td><span className="chip chip-t" title="実務補足">💡</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<h3 id="35-具体例ecサイトの初回購入">3.5 具体例：ECサイトの「初回購入」</h3>
<p>
                    <strong>ペルソナ（<span className="chip chip-t" title="実務補足">💡</span> 例）</strong>：田中さん（50 代・スマートフォンで初めてネットショッピングをする）／
                    佐藤さん（30 代・PC で日常的に購入する）
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>タスク</th>
                                <th>成功基準</th>
                                <th>指標</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>会員登録して、商品を 1 つカートに入れる</td>
                                <td>説明なしで完了</td>
                                <td>完了率、所要時間、つまずいた画面</td>
                            </tr>
                            <tr className="even">
                                <td>クーポンコードを入力して注文を確定する</td>
                                <td>割引が適用されて確定</td>
                                <td>入力エラー回数、ヘルプ参照の有無</td>
                            </tr>
                            <tr className="odd">
                                <td>誤って入れた商品をカートから取り除く</td>
                                <td>操作 3 回以内に完了</td>
                                <td>迷いの回数、取り消しの発見のしやすさ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<p>
                    <strong>チャーターの書き方（<span className="chip chip-o" title="公式根拠">📘</span>
                        3.4.1 の形式）</strong>：
                </p>
<ul>
                    <li>形式：「Explore [対象] With [資源] To discover [情報]」</li>
                    <li>
                        例：<strong>Explore 会員登録から初回購入までのフロー With 上記 2
                            つのペルソナとスマートフォン実機 To discover
                            学習しにくい箇所と、入力エラーから回復しにくい箇所</strong>
                    </li>
                </ul>
<h3 id="36-評価手法の使い分け">3.6 評価手法の使い分け</h3>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>手法</th>
                                <th>内容</th>
                                <th>向く場面</th>
                                <th>根拠</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>利用者テスト</td>
                                <td>実利用者に代表タスクをやってもらい観察</td>
                                <td>学習性・操作性を実際の行動で確認</td>
                                <td><span className="chip chip-o" title="公式根拠">📘</span> Q35</td>
                            </tr>
                            <tr className="even">
                                <td>チェックリストベース</td>
                                <td>ヒューリスティクスなどをチェックリスト化して確認</td>
                                <td>短時間で広く網羅、専門家評価</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span>
                                    3.4.2、<span className="chip chip-t" title="実務補足">💡</span>
                                    ヒューリスティクス
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>セッションベース（探索的）</td>
                                <td>チャーターで範囲と目的を決めて探索</td>
                                <td>新機能の UX 検証、仕様が固まっていない段階</td>
                                <td><span className="chip chip-o" title="公式根拠">📘</span> 3.4.1</td>
                            </tr>
                            <tr className="even">
                                <td>クラウドテスト</td>
                                <td>多様な実利用者に分散して実施</td>
                                <td>多様な端末・環境・利用者の意見を集める</td>
                                <td><span className="chip chip-o" title="公式根拠">📘</span> 3.4.3</td>
                            </tr>
                            <tr className="odd">
                                <td>アンケート型指標</td>
                                <td>利用後に満足度を尺度で測る</td>
                                <td>主観的満足の定量化</td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> SUS
                                    など。<span className="chip chip-w" title="要確認">⚠</span> v3.1
                                    では SUMI／WAMMI が例示されていた（ANZTB の資料）
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<p>
                    <strong>ヒューリスティクス評価に使えるチェックリスト（<span className="chip chip-t" title="実務補足">💡</span>）</strong>：Jakob Nielsen の「ユーザーインターフェース設計の 10
                    ヒューリスティクス」は、次のような観点を挙げています。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>#</th>
                                <th>観点</th>
                                <th>意味</th>
                                <th>
                                    対応するサブ特性（<span className="chip chip-t" title="実務補足">💡</span>）
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>システム状態の可視性</td>
                                <td>適切なフィードバックを合理的な時間内に返す</td>
                                <td>自己記述性</td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>システムと実世界の一致</td>
                                <td>利用者の言葉・概念で話す</td>
                                <td>適切性の認識・学習性</td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>ユーザーの制御と自由</td>
                                <td>間違えたときの「非常口」、Undo／Redo</td>
                                <td>ユーザーエラー防止・操作性</td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>一貫性と標準</td>
                                <td>同じ意味は同じ表現、慣習に従う</td>
                                <td>操作性・学習性</td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>エラーの防止</td>
                                <td>問題が起きる前に防ぐ、確認を挟む</td>
                                <td>ユーザーエラー防止</td>
                            </tr>
                            <tr className="even">
                                <td>6</td>
                                <td>再生より再認</td>
                                <td>記憶に頼らず、選択肢を見えるように</td>
                                <td>操作性</td>
                            </tr>
                            <tr className="odd">
                                <td>7</td>
                                <td>柔軟性と効率</td>
                                <td>初心者にも熟練者にも合う近道</td>
                                <td>操作性</td>
                            </tr>
                            <tr className="even">
                                <td>8〜10</td>
                                <td>
                                    ミニマルなデザイン／エラーの認識・診断・回復／ヘルプとドキュメント
                                </td>
                                <td>情報の取捨、分かるエラー、必要な支援</td>
                                <td>自己記述性・ユーザー支援</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://nngroup.com/articles/ten-usability-heuristics/">Nielsen Norman Group：10 Usability Heuristics</a>
                    </p>
                </div>
<h3 id="37-アクセシビリティ包括性ユーザー支援の扱い">
                    3.7 アクセシビリティ（包括性・ユーザー支援）の扱い
                </h3>
<ul>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span> ISO/IEC 25010:2023
                        は、旧 accessibility を<strong>包括性（Inclusivity）とユーザー支援（User assistance）に分割</strong>しました。
                    </li>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span>
                        シラバス第3章のサンプル問題（Q29）は、ゲームの<strong>アクセシビリティ</strong>（読字に困難がある人、視覚障害のある人）を確認するチェックリスト項目を作らせる問題で、<strong>「はい／いいえ／該当なし」で答えられる項目</strong>にする点が重要とされています。
                    </li>
                    <li>
                        <span className="chip chip-t" title="実務補足">💡</span> 実務では、W3C の
                        WCAG（Web Content Accessibility Guidelines）が、Web
                        の達成基準の代表的な参照先です（<span className="chip chip-w" title="要確認">⚠</span>
                        本ガイドでは原典を再取得していません）。
                    </li>
                </ul>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5759">公式サンプル試験 解答 v4.1 Q29</a>
                        ／ <a href="https://www.w3.org/TR/WCAG22/">W3C：WCAG 2.2</a>
                    </p>
                </div>
<h3 id="38-ベストプラクティスユーザビリティテスト">
                    3.8 ベストプラクティス（ユーザビリティテスト）
                </h3>
<div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス</span>
                    <ul>
                        <li>
                            <strong>実利用者を代表する参加者</strong>を選ぶ：TA
                            自身や開発者では代用しない（<span className="chip chip-o" title="公式根拠">📘</span>
                            Q35）。
                        </li>
                        <li>
                            <strong>観察に徹する</strong>：参加者がつまずいても助けない。助けが必要だった事実を記録する（<span className="chip chip-o" title="公式根拠">📘</span>
                            Q35）。
                        </li>
                        <li>
                            <strong>タスクは目的で書く</strong>：「ボタン A
                            を押す」ではなく「クーポンを使って注文する」のように、利用者の目的で書く（<span className="chip chip-t" title="実務補足">💡</span>）。
                        </li>
                        <li>
                            <strong>成功基準を事前に決める</strong>：完了率、時間、エラー数などを、テスト前に定義する（<span className="chip chip-t" title="実務補足">💡</span>）。
                        </li>
                        <li>
                            <strong>早い段階から</strong>：完成後だけでなく、ワイヤーフレームやプロトタイプの段階で試す（<span className="chip chip-t" title="実務補足">💡</span>
                            シフトレフト。<span className="chip chip-o" title="公式根拠">📘</span> 2.1
                            のシフトレフトの考え方）。
                        </li>
                        <li>
                            <strong>チェックリストを育てる</strong>：見つかった問題をチェックリストに追加して再利用する（<span className="chip chip-o" title="公式根拠">📘</span>
                            3.4.2）。
                        </li>
                        <li>
                            <strong>多様性を確保する</strong>：クラウドテストで、端末・環境・利用者のバリエーションを補う（<span className="chip chip-o" title="公式根拠">📘</span>
                            3.4.3）。
                        </li>
                    </ul>
                </div>
<h3 id="39--対比">3.9 ✅／❌ 対比</h3>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>観点</th>
                                <th className="bad-col">❌ 悪い例</th>
                                <th className="good-col">✅ 良い例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>参加者</td>
                                <td className="bad-col">開発チームの詳しい人だけで確認する</td>
                                <td className="good-col">対象利用者グループの属性を代表する人を選ぶ</td>
                            </tr>
                            <tr className="even">
                                <td>実施中</td>
                                <td className="bad-col">迷っている参加者に操作方法を教える</td>
                                <td className="good-col">黙って観察し、どこで迷ったかを記録する</td>
                            </tr>
                            <tr className="odd">
                                <td>シナリオ</td>
                                <td className="bad-col">機能一覧を順番に押させる</td>
                                <td className="good-col">
                                    ペルソナの目的から実際の利用パターンを再現する
                                </td>
                            </tr>
                            <tr className="even">
                                <td>指標</td>
                                <td className="bad-col">「使いやすいと思う」の感想のみ</td>
                                <td className="good-col">完了率・時間・エラー数と感想を併用する</td>
                            </tr>
                            <tr className="odd">
                                <td>範囲</td>
                                <td className="bad-col">画面の見た目だけを見る</td>
                                <td className="good-col">
                                    学習性・操作性・エラー防止・包括性まで観点を広げる
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<h3 id="310-公式サンプル試験-q35-の考え方">3.10 公式サンプル試験 Q35 の考え方</h3>
<p>
                    <span className="chip chip-o" title="公式根拠">📘</span>
                    Q35（LO：TA-4.2.1・K2）は、<strong>TA がユーザビリティテストのセッションを準備するときの正しい進め方</strong>を選ぶ問題です。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>誤答のパターン</th>
                                <th>否定される理由</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>最も経験豊富な利用者だけを選ぶ</td>
                                <td>対象利用者グループの特性を考慮していない</td>
                            </tr>
                            <tr className="even">
                                <td>参加者を TA にする</td>
                                <td>参加者は組織の<strong>利用者</strong>であるべき</td>
                            </tr>
                            <tr className="odd">
                                <td>誤りを訂正し、誘導する</td>
                                <td>実際の有効性・効率を評価できなくなる</td>
                            </tr>
                            <tr className="even">
                                <td>
                                    <strong>利用パターンとペルソナからシナリオを作る</strong>（正解）
                                </td>
                                <td>実際の利用を反映できる</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5759">公式サンプル試験 解答 v4.1 Q35</a>
                    </p>
                </div>
<h3 id="311-42-のまとめ">3.11 4.2 のまとめ</h3>
<ul>
                    <li>
                        Interaction capability（製品側の能力）→ Usability（利用の結果）→
                        UX（受け止め方）。
                    </li>
                    <li>
                        8つのサブ特性のうち、ISO
                        本文で確認した4つ（適切性の認識・学習性・操作性・ユーザーエラー防止）は定義を押さえる。
                    </li>
                    <li>
                        TA
                        の貢献の核は、<strong>ペルソナと利用パターンからシナリオを作る／実利用者を代表として選ぶ／観察に徹する</strong>。
                    </li>
                    <li>
                        深い専門技法は専門資格（CT-UT）に任せ、Advanced TA
                        では<strong>貢献の仕方</strong>を説明できればよい（<span className="chip chip-o" title="公式根拠">📘</span>
                        LO 比較表）。
                    </li>
                </ul>

                {/* ===== セクション 4: 4.3 フレキシビリティテスト ===== */}
                <h2 id="4-43-フレキシビリティテストta-431k2">
                    4. 4.3 フレキシビリティテスト（TA-4.3.1・K2）
                </h2>
                <div className="callout callout-lo">
                    <span className="lbl">学習目標</span>
                    <p>
                        <strong>LO TA-4.3.1（K2）</strong>：テストアナリストが<strong>適応性（adaptability）とインストール性（installability）のテストにどう貢献するか</strong>を説明できる（Explain）
                    </p>
                </div>
                <h3 id="41-フレキシビリティ柔軟性とは">4.1 フレキシビリティ（柔軟性）とは</h3>
                <ul>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span> ISO/IEC 25010:2023 では、旧 <strong>Portability（移植性）が Flexibility（柔軟性）に置き換わりました</strong>。LO 比較表も「ISO 25010 (2023) に合わせて名称変更」と説明しています。
                    </li>
                    <li>
                        <span className="chip chip-t" title="実務補足">💡</span> ISO の考え方：異なる、または変化していくハードウェア・ソフトウェア・その他の運用環境や利用環境に、製品が適応できる度合い。
                    </li>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span> サブ特性には Scalability（拡張性）が新たに追加されました。
                    </li>
                </ul>
                <div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-14">
                        <Mermaid chart={DIAGRAM_14} />
                    </div>
                </div>
                <ul>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span> サンプル試験 Q36 の解説は、<strong>負荷テスト・スケーラビリティテスト</strong>を適応性テストとは別のものとして扱っています。適応性は「システムが環境に合わせる」ことで、「利用者がシステムに合わせる」ことではありません。
                    </li>
                </ul>
                <div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=6363">LO 新旧比較表</a> ／ <a href="https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf">ISO/IEC 25010:2023 前文</a> ／ <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5759">公式サンプル試験 解答 v4.1 Q36</a>
                    </p>
                </div>

                <h3 id="42-適応性adaptabilityテスト">4.2 適応性（Adaptability）テスト</h3>
                <p>
                    <strong>定義（<span className="chip chip-o" title="公式根拠">📘</span>・旧版の用語集に基づく）</strong>：<strong>異なる指定環境に、そのために用意された手段以外の操作を加えずに適応できる</strong>能力（ISO 9126 に由来する定義。<span className="chip chip-w" title="要確認">⚠</span> v4.0 の用語集で最新の文言を確認）。
                </p>
                <p>
                    <strong>なぜ重要か（<span className="chip chip-t" title="実務補足">💡</span>）</strong>：利用者の環境は多様です。OS・ブラウザ・端末・DB・クラウド基盤の組み合わせによって、同じ機能でも動作が変わることがあります。
                </p>
                <p>
                    <strong>TA の貢献（<span className="chip chip-o" title="公式根拠">📘</span> サンプル試験 Q36 の解説）</strong>：
                </p>
                <div className="callout callout-quote">
                    <p>
                        TA は、<strong>意図した対象環境を特定</strong>し、<strong>それらの環境の組み合わせを網羅するテストを設計</strong>することで、適応性テストを支援する。
                    </p>
                </div>
                <p>
                    例：解説は「<strong>さまざまなクラウドサービス基盤への適応</strong>」を適応性テストの例として挙げています。
                </p>
                <p>
                    <strong>具体例（<span className="chip chip-t" title="実務補足">💡</span>）</strong>：業務システムを Windows／macOS／Linux、DB を PostgreSQL／MySQL／Oracle、クラウドを AWS／Azure／GCP に展開する場合
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>特徴</th>
                                <th>内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>組み合わせの総数</td>
                                <td>3 × 3 × 3 = <strong>27 通り</strong></td>
                            </tr>
                            <tr className="even">
                                <td>目的</td>
                                <td>
                                    どの環境でも<strong>同じ機能が同じ結果</strong>を返すことを確認する
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>課題</td>
                                <td>すべてを試すのは非現実的 → 組み合わせを減らす技法を使う</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 id="421-適応性テストの手順">4.2.1 適応性テストの手順</h4>
                <div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-15">
                        <Mermaid chart={DIAGRAM_15} />
                    </div>
                </div>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>Step</th>
                                <th>やること</th>
                                <th>根拠・補足</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>
                                    利用者・運用者にとって<strong>実際に対象となる環境</strong>を特定する。利用統計や契約条件から優先度を決める
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> Q36 の解説（環境の特定）、<span className="chip chip-t" title="実務補足">💡</span> 優先度づけ
                                </td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>
                                    環境を「パラメータ（OS、DB…）」と「値（Windows、macOS…）」で整理する
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 3.1.2（構成パラメータの組み合わせ）
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>存在しない組み合わせや、サポート対象外の組み合わせを除く</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 3.1.2（パラメータ値ペア間の制約、無効・実行不可能な組み合わせ）
                                </td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>
                                    <strong>ペアワイズ</strong>または<strong>基本選択（base choice）</strong>で組み合わせを減らす。重要度が高い場合は全組み合わせ
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 3.1.2、3.5.1
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>
                                    各構成で<strong>同じテストケース</strong>を実行する（構成パラメータの組み合わせは同じテストケースで確認できる）
                                </td>
                                <td><span className="chip chip-o" title="公式根拠">📘</span> 3.1.2</td>
                            </tr>
                            <tr className="even">
                                <td>6</td>
                                <td>
                                    失敗した環境に共通点がないか分析する。テスト環境の問題か、製品の問題かを切り分ける
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 1.2.4（異常の原因分析）、1.3.3（環境の忠実度）
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>7</td>
                                <td>結果を記録し、環境ごとのリスクを更新する</td>
                                <td><span className="chip chip-o" title="公式根拠">📘</span> 1.2.4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 id="422-組み合わせの削減27-通りを-9-通りに">
                    4.2.2 組み合わせの削減：27 通りを 9 通りに
                </h4>
                <p>
                    <span className="chip chip-o" title="公式根拠">📘</span> ペアワイズカバレッジは、<strong>任意の 2 つのパラメータの値の組み合わせをすべてカバー</strong>します。3.1.2 は、失敗の大半が 1〜2 個の条件の相互作用で起きるという<strong>限定的な研究</strong>（約 97%）を引用しています。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>#</th>
                                <th>OS</th>
                                <th>DB</th>
                                <th>クラウド</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>Windows</td>
                                <td>PostgreSQL</td>
                                <td>AWS</td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>Windows</td>
                                <td>MySQL</td>
                                <td>Azure</td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>Windows</td>
                                <td>Oracle</td>
                                <td>GCP</td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>macOS</td>
                                <td>PostgreSQL</td>
                                <td>Azure</td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>macOS</td>
                                <td>MySQL</td>
                                <td>GCP</td>
                            </tr>
                            <tr className="even">
                                <td>6</td>
                                <td>macOS</td>
                                <td>Oracle</td>
                                <td>AWS</td>
                            </tr>
                            <tr className="odd">
                                <td>7</td>
                                <td>Linux</td>
                                <td>PostgreSQL</td>
                                <td>GCP</td>
                            </tr>
                            <tr className="even">
                                <td>8</td>
                                <td>Linux</td>
                                <td>MySQL</td>
                                <td>AWS</td>
                            </tr>
                            <tr className="odd">
                                <td>9</td>
                                <td>Linux</td>
                                <td>Oracle</td>
                                <td>Azure</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <span className="chip chip-t" title="実務補足">💡</span> この 9 行で、OS×DB の 9 組、OS×クラウドの 9 組、DB×クラウドの 9 組が<strong>すべて 1 回以上</strong>現れます（27 通り → 9 通り）。実際にはツールで生成し、制約（実在しない組み合わせ）も反映します。
                </p>
                <p>
                    <strong>基本選択（base choice）カバレッジ</strong>（<span className="chip chip-o" title="公式根拠">📘</span> 3.1.2）：最も重要な値の組み合わせを基準に、<strong>1 つのパラメータずつ他の値に置き換える</strong>方法です。上の例で基準を「Windows／PostgreSQL／AWS」とすれば、1 + 2 + 2 + 2 = <strong>7 通り</strong>になります（<span className="chip chip-t" title="実務補足">💡</span> 計算例）。
                </p>

                <h4 id="423-サービスツール活用">4.2.3 サービス・ツール活用</h4>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>場面</th>
                                <th>使えるサービス・機能</th>
                                <th>注意点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>CI で OS やランタイムの組み合わせを自動テスト</td>
                                <td>
                                    GitHub Actions の <strong>matrix</strong>（<code>strategy.matrix</code>）。<code>include</code>／<code>exclude</code> で組み合わせを追加・除外、<code>max-parallel</code> で同時実行数を制限 <span className="chip chip-o" title="公式根拠">📘</span>
                                </td>
                                <td>
                                    matrix は<strong>指定した値の全組み合わせ</strong>を実行する（ペアワイズではない）。ペアワイズ生成ツールの出力を <code>include</code> に渡す運用も可能（<span className="chip chip-t" title="実務補足">💡</span>）
                                </td>
                            </tr>
                            <tr className="even">
                                <td>端末・ブラウザの多様性</td>
                                <td>実機・仮想化サービス、コンテナ、VM、スナップショット</td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> 環境の忠実度（本番との近さ）を明記する（<span className="chip chip-o" title="公式根拠">📘</span> 1.3.3）
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>多様な利用者環境の検証</td>
                                <td>クラウドテスト</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 3.4.3（多様な端末・ブラウザ・ネットワーク条件）
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <pre className="code-block"><code>{`jobs:
  compat:
    runs-on: \${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node: [18, 20, 22]
        exclude:
          - os: macos-latest
            node: 18
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node }}
      - run: npm test`}</code></pre>
                <p>
                    <span className="chip chip-t" title="実務補足">💡</span> 上記は matrix の書式を示す例です（3 × 3 = 9 通りから、除外指定の 1 通りを引いた 8 ジョブ）。
                </p>
                <div className="callout callout-source">
                    <p>
                        出典：<a href="https://docs.github.com/actions/using-jobs/using-a-matrix-for-your-jobs">GitHub Docs：Using a matrix for your jobs</a> ／ <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5745">シラバス 3.1.2、3.4.3</a>
                    </p>
                </div>

                <h3 id="43-インストール性installabilityテスト">
                    4.3 インストール性（Installability）テスト
                </h3>
                <p>
                    <strong>定義（<span className="chip chip-t" title="実務補足">💡</span>）</strong>：指定された環境に、製品を<strong>インストールおよびアンインストールできる</strong>ことの度合い（<span className="chip chip-w" title="要確認">⚠</span> 用語集で確認）。
                </p>
                <p>
                    <strong>なぜ重要か（<span className="chip chip-t" title="実務補足">💡</span>）</strong>：インストールできなければ、機能に問題がなくても利用が始まりません。最初に触れる部分なので、印象と信頼にも直結します。
                </p>
                <p>
                    <strong>具体例（<span className="chip chip-t" title="実務補足">💡</span>）</strong>：業務用デスクトップアプリ、モバイルアプリ、オンプレミス製品のセットアップ、SaaS の初期設定
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>テスト観点</th>
                                <th>確認内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>新規インストール</td>
                                <td>手順書どおりに完了し、起動できる</td>
                            </tr>
                            <tr className="even">
                                <td>前提条件</td>
                                <td>
                                    必要な OS バージョン・空き容量・権限が<strong>不足</strong>しているとき、分かるエラーで止まる
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>設定パラメータ</td>
                                <td>
                                    インストール時に選べる設定（言語・保存先・コンポーネント）が正しく反映される
                                </td>
                            </tr>
                            <tr className="even">
                                <td>中断・失敗</td>
                                <td>
                                    途中で中断・失敗した場合に、環境が壊れず<strong>再実行できる</strong>
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>アップグレード</td>
                                <td>
                                    旧バージョンから更新でき、<strong>既存データが保持される</strong>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>ロールバック</td>
                                <td>更新に失敗したとき、元の状態に戻せる</td>
                            </tr>
                            <tr className="odd">
                                <td>アンインストール</td>
                                <td>
                                    残骸（ファイル・設定・サービス）が残らない、または仕様どおりに残る
                                </td>
                            </tr>
                            <tr className="even">
                                <td>インストール後の確認</td>
                                <td>スモークテストで、主要機能が動作する</td>
                            </tr>
                            <tr className="odd">
                                <td>文書</td>
                                <td>手順書・メッセージが正確で理解できる</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <strong>製品のライフサイクルを状態で見る</strong>（<span className="chip chip-t" title="実務補足">💡</span>）：
                </p>
                <div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-16">
                        <Mermaid chart={DIAGRAM_16} />
                    </div>
                </div>
                <p>
                    <span className="chip chip-o" title="公式根拠">📘</span> 状態遷移テストの<strong>ラウンドトリップカバレッジ</strong>（3.2.2）は、開始と終了が同じ状態のループ（ただし途中で同じ状態を 2 回通らない）をカバー対象とします。上の図では「インストール済み → アップグレード済み → インストール済み（rollback）」が1つのラウンドトリップです。
                </p>
                <p>
                    <strong>メタモルフィックテストとの関係（<span className="chip chip-o" title="公式根拠">📘</span> 3.3.2）</strong>：シラバスは、メタモルフィックテストの適用例として「<strong>さまざまなインストールパラメータを、複数の順序で選択するインストール性テスト</strong>」を挙げています。
                </p>
                <p>
                    <strong>TA の貢献（<span className="chip chip-t" title="実務補足">💡</span>）</strong>：
                </p>
                <ul>
                    <li>
                        <strong>利用者の視点</strong>で、手順書どおりにインストール・アンインストールを行い、誤解しやすい手順・メッセージを指摘する
                    </li>
                    <li>
                        対象環境と<strong>インストール構成</strong>（新規・更新・パラメータ）の組み合わせを整理する
                    </li>
                    <li>
                        テスト環境の<strong>要件</strong>（クリーンな環境、旧バージョンが入った環境、権限）を定義する（<span className="chip chip-o" title="公式根拠">📘</span> 1.3.3）
                    </li>
                    <li>
                        実行後の<strong>環境の初期化手順</strong>を決める（<span className="chip chip-o" title="公式根拠">📘</span> 1.2.3：リセット手順）
                    </li>
                </ul>
                <div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5745">シラバス 1.2.3、1.3.3、3.2.2、3.3.2</a>
                    </p>
                </div>

                <h3 id="44-ベストプラクティスフレキシビリティテスト">
                    4.4 ベストプラクティス（フレキシビリティテスト）
                </h3>
                <div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス</span>
                    <ul>
                        <li>
                            <strong>対象環境を要件として明文化</strong>する：サポート対象の OS・ブラウザ・DB・クラウドを一覧にしないと、テスト範囲を決められません（<span className="chip chip-t" title="実務補足">💡</span>。<span className="chip chip-o" title="公式根拠">📘</span> Q36 の解説は環境の特定を TA の貢献としている）。
                        </li>
                        <li>
                            <strong>利用実態で優先度づけ</strong>する：利用者の多い環境から厚くテストする（<span className="chip chip-t" title="実務補足">💡</span>。<span className="chip chip-o" title="公式根拠">📘</span> 3.2.3 は運用プロファイルを柔軟性・互換性テストにも使えると述べる）。
                        </li>
                        <li>
                            <strong>組み合わせ技法を使い分ける</strong>：通常はペアワイズ、リスクが高い組み合わせは全組み合わせ、基準構成が明確なら基本選択（<span className="chip chip-o" title="公式根拠">📘</span> 3.1.2、3.5.1）。
                        </li>
                        <li>
                            <strong>クリーンな環境を再現可能にする</strong>：インストール性テストは環境の初期状態が結果を左右する。スナップショットやコンテナで<strong>毎回同じ状態から始める</strong>（<span className="chip chip-t" title="実務補足">💡</span>）。
                        </li>
                        <li>
                            <strong>アンインストールとアップグレードを必ず含める</strong>：新規インストールだけでは不十分（<span className="chip chip-t" title="実務補足">💡</span>）。
                        </li>
                        <li>
                            <strong>環境の忠実度を記録する</strong>：本番との差（ネットワーク、データ量、権限）を明記する（<span className="chip chip-o" title="公式根拠">📘</span> 1.3.3：忠実度 fidelity）。
                        </li>
                        <li>
                            <strong>環境の準備が整っているかをスモークテストで確認</strong>する（<span className="chip chip-o" title="公式根拠">📘</span> 1.2.3）。
                        </li>
                    </ul>
                </div>

                <h3 id="45--対比">4.5 ✅／❌ 対比</h3>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>観点</th>
                                <th className="bad-col">❌ 悪い例</th>
                                <th className="good-col">✅ 良い例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>対象環境</td>
                                <td className="bad-col">開発者の手元の環境だけで確認する</td>
                                <td className="good-col">
                                    サポート対象環境を一覧化し、優先度をつけて確認する
                                </td>
                            </tr>
                            <tr className="even">
                                <td>組み合わせ</td>
                                <td className="bad-col">思いつく環境だけを試す</td>
                                <td className="good-col">
                                    パラメータと値の表を作り、ペアワイズなどで系統的に選ぶ
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>インストール</td>
                                <td className="bad-col">新規インストールだけ確認する</td>
                                <td className="good-col">
                                    アップグレード・失敗・中断・アンインストールも確認する
                                </td>
                            </tr>
                            <tr className="even">
                                <td>環境の初期状態</td>
                                <td className="bad-col">前回の残骸が残った環境で再テストする</td>
                                <td className="good-col">
                                    スナップショットなどで毎回クリーンな状態に戻す
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>記録</td>
                                <td className="bad-col">「動いた」とだけ記録する</td>
                                <td className="good-col">環境の構成と結果を組み合わせで記録する</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 id="46-公式サンプル試験-q36-の考え方">4.6 公式サンプル試験 Q36 の考え方</h3>
                <p>
                    <span className="chip chip-o" title="公式根拠">📘</span> Q36（LO：TA-4.3.1・K2）は、<strong>どの活動が適応性テストの支援になるか</strong>を選ぶ問題です。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>解説から読み取れる選択肢の内容</th>
                                <th>解説が示す分類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>利用者がシステムに慣れるよう支援する活動</td>
                                <td>
                                    <strong>アクセシビリティ</strong>のテストの支援（適応性ではない）
                                </td>
                            </tr>
                            <tr className="even">
                                <td>他システムとのデータ交換の確認</td>
                                <td><strong>相互運用性</strong>のテストの支援</td>
                            </tr>
                            <tr className="odd">
                                <td>大量の利用者による負荷の確認</td>
                                <td><strong>負荷テスト・スケーラビリティテスト</strong>の支援</td>
                            </tr>
                            <tr className="even">
                                <td>
                                    <strong>さまざまなクラウド基盤への適応を確認する</strong>（正解）
                                </td>
                                <td>対象環境を特定し、組み合わせを網羅するテストを設計する</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <strong>解き方</strong>：適応性は「<strong>システムが環境に合わせる</strong>」。利用者が慣れる話（アクセシビリティ）や、他システムとのやりとり（相互運用性）、負荷（拡張性）とは別物です。
                </p>
                <div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5759">公式サンプル試験 解答 v4.1 Q36</a>
                    </p>
                </div>

                <h3 id="47-43-のまとめ">4.7 4.3 のまとめ</h3>
                <ul>
                    <li>Portability → <strong>Flexibility</strong> への名称変更を覚える。</li>
                    <li>
                        LO の対象は<strong>適応性</strong>と<strong>インストール性</strong>。拡張性（負荷）や置換性は対象外。
                    </li>
                    <li>
                        適応性は「<strong>対象環境を特定し、組み合わせを網羅するテストを設計する</strong>」が TA の貢献の核。
                    </li>
                    <li>
                        組み合わせの削減は第3章の<strong>組み合わせテスト</strong>（ペアワイズ・基本選択）と直結する。
                    </li>
                    <li>
                        インストール性は、新規だけでなく<strong>アップグレード・ロールバック・アンインストール</strong>まで見る。
                    </li>
                </ul>

                {/* ===== セクション 5: 4.4 互換性テスト ===== */}
                <h2 id="5-44-互換性テストta-441k2">5. 4.4 互換性テスト（TA-4.4.1・K2）</h2>
                <div className="callout callout-lo">
                    <span className="lbl">学習目標</span>
                    <p>
                        <strong>LO TA-4.4.1（K2）</strong>：テストアナリストが<strong>相互運用性（interoperability）のテストにどう貢献するか</strong>を説明できる（Explain）
                    </p>
                </div>
                <h3 id="51-互換性compatibilityとは">5.1 互換性（Compatibility）とは</h3>
                <p>
                    <span className="chip chip-o" title="公式根拠">📘</span> ISO/IEC 25010:2023 の定義：<strong>他の製品と情報を交換する</strong>、および／または、<strong>共通の環境や資源を共有しながら</strong>必要な機能を果たす能力。サブ特性は次の2つです。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>サブ特性</th>
                                <th>意味</th>
                                <th>第4章での扱い</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td><strong>Co-existence（共存性）</strong></td>
                                <td>
                                    同じ環境・資源を共有する他の製品に<strong>悪影響を与えず</strong>、必要な機能を効率的に果たす
                                </td>
                                <td>
                                    LO の対象外 <span className="chip chip-w" title="要確認">⚠</span>（旧 v3.1 では TTA の領域として整理されていた）
                                </td>
                            </tr>
                            <tr className="even">
                                <td><strong>Interoperability（相互運用性）</strong></td>
                                <td>
                                    他の製品と情報を<strong>交換し、その情報を相互に利用</strong>できる
                                </td>
                                <td><strong>LO TA-4.4.1 の対象</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-17">
                        <Mermaid chart={DIAGRAM_17} />
                    </div>
                </div>
                <div className="callout callout-source">
                    <p>
                        出典：<a href="https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf">ISO/IEC 25010:2023 プレビュー（3.3、3.3.1、3.3.2）</a> ／ <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=6363">LO 新旧比較表（TA-4.4.1 の LO）</a>
                    </p>
                </div>

                <h3 id="52-相互運用性interoperabilityの定義">
                    5.2 相互運用性（Interoperability）の定義
                </h3>
                <ul>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span> ISO：他の製品と情報を交換し、<strong>交換された情報を相互に使う</strong>能力。注記：ここでいう「情報」とは<strong>意味のあるデータ</strong>であり、情報の交換には<strong>交換のためのデータ変換</strong>も含まれる。
                    </li>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span> サンプル試験 Q37 の解説：2つ以上のコンポーネントまたはシステムが<strong>情報を交換し、交換された情報を使える</strong>度合い。
                    </li>
                </ul>
                <p>
                    <strong>ポイント（<span className="chip chip-t" title="実務補足">💡</span>）</strong>：「データが<strong>届いた</strong>」だけでは不十分です。受け取った側が<strong>意味を理解して正しく使える</strong>（型・単位・文字コード・意味の解釈が合う）ことが相互運用性です。
                </p>

                <h3 id="53-ta-は相互運用性テストにどう貢献するか">
                    5.3 TA は相互運用性テストにどう貢献するか
                </h3>
                <p>
                    <span className="chip chip-o" title="公式根拠">📘</span> シラバスの関連記述から、TA の貢献は次のように整理できます。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>#</th>
                                <th>TA の貢献</th>
                                <th>根拠</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>
                                    テストベースを分析するとき、<strong>テスト対象と環境（利用者・他システム・機器）の相互作用</strong>を洗い出す
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 1.3.6（キーワード駆動テストの説明の中で、TA が相互作用を探すと記述）
                                </td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>
                                    交換される<strong>データの形式</strong>（CSV・JSON・XML・データベース）を整理し、テストデータを用意する
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 1.3.5（データ形式の項目）
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>
                                    相手システムがテスト時に使えない場合、<strong>テストダブル（スタブ・ドライバ）</strong>や<strong>サービス仮想化</strong>で補う
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 1.3.3、1.3.5
                                </td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>
                                    <strong>システム間のシナリオ</strong>を設計する（エンドツーエンド）。運用プロファイルから互換性テストのシナリオ要素を作る
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 3.2.3（シナリオが柔軟性・互換性テストの運用プロファイルの要素になりうる）
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>
                                    過去に見つかった<strong>互換性・相互運用性の欠陥</strong>を、チャーターの履歴情報に活かす
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 3.4.1（チャーターの履歴情報の例に、互換性・相互運用性の欠陥が挙がる）
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <span className="chip chip-t" title="実務補足">💡</span> 実務では、TA が<strong>業務データの意味</strong>を理解していることが最大の強みです。「この項目は税込か税抜か」「この日付はどのタイムゾーンか」といった<strong>意味の食い違い</strong>を見つけられるのは、業務を知る TA です。
                </p>

                <h3 id="54-テスト観点">5.4 テスト観点</h3>
                <p>
                    相互運用性の不具合は、次のどこで起きるかを分けて考えると設計しやすくなります（<span className="chip chip-t" title="実務補足">💡</span>）。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>観点</th>
                                <th>何を確認するか</th>
                                <th>不具合の例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>形式・構造</td>
                                <td>必須項目、型、桁数、区切り、スキーマ</td>
                                <td>必須項目が欠けて受信側がエラー</td>
                            </tr>
                            <tr className="even">
                                <td>意味・単位</td>
                                <td>単位、通貨、税込・税抜、コード値の意味</td>
                                <td>金額の単位が円と銭で解釈が食い違う</td>
                            </tr>
                            <tr className="odd">
                                <td>文字・日時</td>
                                <td>文字コード、改行、タイムゾーン、日付形式</td>
                                <td>UTF-8 と Shift_JIS で文字化け</td>
                            </tr>
                            <tr className="even">
                                <td>データ変換</td>
                                <td>変換ルール、丸め、null と空文字の扱い</td>
                                <td>小数の丸めで 1 円のずれ</td>
                            </tr>
                            <tr className="odd">
                                <td>プロトコル・バージョン</td>
                                <td>API のバージョン、認証方式、必須ヘッダ</td>
                                <td>旧バージョンの項目が新 API で無視される</td>
                            </tr>
                            <tr className="even">
                                <td>タイミング・順序</td>
                                <td>応答時間、タイムアウト、リトライ、順序保証</td>
                                <td>二重送信で二重登録</td>
                            </tr>
                            <tr className="odd">
                                <td>エラー処理</td>
                                <td>相手側の失敗・遅延・不正応答への対応</td>
                                <td>相手が失敗を返しても成功扱いにする</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 id="55-相互運用性テストの進め方">5.5 相互運用性テストの進め方</h3>
                <div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-18">
                        <Mermaid chart={DIAGRAM_18} />
                    </div>
                </div>

                <h3 id="56-具体例ecサイトと決済サービス在庫システム">
                    5.6 具体例：ECサイトと決済サービス・在庫システム
                </h3>
                <div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-19">
                        <Mermaid chart={DIAGRAM_19} />
                    </div>
                </div>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>#</th>
                                <th>確認する内容</th>
                                <th>期待する結果</th>
                                <th>観点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>金額 1,980 円の注文を送る</td>
                                <td>決済サービス側でも 1,980 円として処理される</td>
                                <td>意味・単位</td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>商品名に全角文字・絵文字・改行を含める</td>
                                <td>文字化けせず、相手側でも同じ内容で保持される</td>
                                <td>文字・日時</td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>注文日時をタイムゾーン違いで送る</td>
                                <td>相手側の日付が仕様どおり（日跨ぎでずれない）</td>
                                <td>文字・日時</td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>決済サービスが「失敗」を返す</td>
                                <td>EC は注文を確定せず、在庫を引き当てない</td>
                                <td>エラー処理</td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>決済サービスの応答が遅延・タイムアウトする</td>
                                <td>二重決済せず、状態が整合する</td>
                                <td>タイミング・順序</td>
                            </tr>
                            <tr className="even">
                                <td>6</td>
                                <td>相手 API のバージョンが上がり、項目が追加される</td>
                                <td>既存の項目は従来どおり処理される</td>
                                <td>プロトコル・バージョン</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <span className="chip chip-t" title="実務補足">💡</span> これらは<strong>振る舞い（シナリオ）</strong>として設計でき、第3章のシナリオベーステスト（主シナリオ・拡張・例外）と組み合わせられます。
                </p>

                <h3 id="57-テストダブルサービス仮想化契約テスト">
                    5.7 テストダブル・サービス仮想化・契約テスト
                </h3>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>手法</th>
                                <th>内容</th>
                                <th>使いどころ</th>
                                <th>根拠</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>テストダブル（スタブ・ドライバ）</td>
                                <td>相手システムを模擬する部品</td>
                                <td>相手が未完成、またはテストで使えない</td>
                                <td><span className="chip chip-o" title="公式根拠">📘</span> 1.3.3</td>
                            </tr>
                            <tr className="even">
                                <td>サービス仮想化</td>
                                <td>
                                    不在・アクセス不能な外部サービスを<strong>シミュレート</strong>する
                                </td>
                                <td>外部サービスがテスト用に用意されない、課金がある、不安定</td>
                                <td><span className="chip chip-o" title="公式根拠">📘</span> 1.3.5</td>
                            </tr>
                            <tr className="odd">
                                <td>契約テスト（consumer-driven contract testing など）</td>
                                <td>
                                    送り手と受け手が、インタフェースの<strong>期待を契約として共有</strong>し、それぞれ独立に検証する
                                </td>
                                <td>複数チームが独立して開発・リリースするマイクロサービス</td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> 実務手法
                                </td>
                            </tr>
                            <tr className="even">
                                <td>疑似オラクル</td>
                                <td>同じ仕様を満たす別系統のシステムを期待結果の基準にする</td>
                                <td>旧システムの置き換え時など</td>
                                <td><span className="chip chip-o" title="公式根拠">📘</span> 1.3.4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス</span>
                    <ul>
                        <li>
                            <strong>仮想化した結果と実システムの差</strong>を必ず記録する：仮想化は速く安定するが、実システム固有の挙動は見えない（<span className="chip chip-t" title="実務補足">💡</span>）。
                        </li>
                        <li>
                            <strong>本番に近い検証環境</strong>での<strong>最終確認</strong>を必ず残す（<span className="chip chip-o" title="公式根拠">📘</span> 1.3.3：本番と同じ結果になる環境が理想）。
                        </li>
                    </ul>
                </div>

                <h3 id="58-ベストプラクティス相互運用性テスト">
                    5.8 ベストプラクティス（相互運用性テスト）
                </h3>
                <div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス</span>
                    <ul>
                        <li>
                            <strong>インタフェース一覧（連携マップ）を作る</strong>：送り手・受け手・方向・形式・頻度を一覧にすると、テストの網羅と漏れの確認ができます（<span className="chip chip-t" title="実務補足">💡</span>）。
                        </li>
                        <li>
                            <strong>データの意味を確認する</strong>：項目の型だけでなく、単位・コード値・null の扱い・日時の基準を、<strong>仕様と実データの両方</strong>で確認する（<span className="chip chip-t" title="実務補足">💡</span>）。
                        </li>
                        <li>
                            <strong>正常だけでなく例外を設計する</strong>：相手の失敗・遅延・不正応答を、<strong>シナリオの例外</strong>として設計する（<span className="chip chip-o" title="公式根拠">📘</span> 3.2.3）。
                        </li>
                        <li>
                            <strong>両側の状態を確認する</strong>：送信側の画面だけでなく、<strong>受信側に届いたデータと状態</strong>も確認する（<span className="chip chip-t" title="実務補足">💡</span>）。
                        </li>
                        <li>
                            <strong>テストデータを機密面で保護する</strong>：本番データを使う場合は、仮名化・匿名化を検討する（<span className="chip chip-o" title="公式根拠">📘</span> 1.3.5）。
                        </li>
                        <li>
                            <strong>バージョン変更の影響を調べる</strong>：相手システムが変更されたときに影響を受ける回帰テストを、インパクト分析で選ぶ（<span className="chip chip-o" title="公式根拠">📘</span> 2.2）。
                        </li>
                        <li>
                            <strong>過去の互換性の欠陥を記録して活かす</strong>：チャーターやチェックリストに反映する（<span className="chip chip-o" title="公式根拠">📘</span> 3.4.1、3.4.2）。
                        </li>
                    </ul>
                </div>

                <h3 id="59--対比">5.9 ✅／❌ 対比</h3>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>観点</th>
                                <th className="bad-col">❌ 悪い例</th>
                                <th className="good-col">✅ 良い例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>確認範囲</td>
                                <td className="bad-col">送信側の画面表示だけを確認する</td>
                                <td className="good-col">
                                    受信側の保存内容と後続処理の結果まで確認する
                                </td>
                            </tr>
                            <tr className="even">
                                <td>データ</td>
                                <td className="bad-col">正常な短い半角データだけを使う</td>
                                <td className="good-col">全角・長文・特殊文字・境界値・欠損を含める</td>
                            </tr>
                            <tr className="odd">
                                <td>例外</td>
                                <td className="bad-col">成功だけを確認する</td>
                                <td className="good-col">
                                    相手の失敗・タイムアウト・不正応答も確認する
                                </td>
                            </tr>
                            <tr className="even">
                                <td>相手システム</td>
                                <td className="bad-col">使えないのでテストしない</td>
                                <td className="good-col">
                                    スタブやサービス仮想化で模擬し、最終確認は実環境で行う
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>仕様</td>
                                <td className="bad-col">「連携できた」で終わる</td>
                                <td className="good-col">
                                    項目ごとの意味・単位・変換ルールを仕様と照合する
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 id="510-公式サンプル試験-q37-の考え方">5.10 公式サンプル試験 Q37 の考え方</h3>
                <p>
                    <span className="chip chip-o" title="公式根拠">📘</span> Q37（LO：TA-4.4.1・K2）は、<strong>相互運用性テストの例</strong>を選ぶ問題です。解説の要点は次のとおりです。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>選択肢の内容（解説から読み取れる分類）</th>
                                <th>分類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>環境への適応を確認するテスト（4.3.1 と用語集を参照）</td>
                                <td><strong>適応性</strong>テスト</td>
                            </tr>
                            <tr className="even">
                                <td>
                                    2つ以上のコンポーネント・システムが情報を交換し、その情報を使えるかを確認する（正解）
                                </td>
                                <td><strong>相互運用性</strong>テスト</td>
                            </tr>
                            <tr className="odd">
                                <td>利用者の使いやすさを確認するテスト（4.2.1 を参照）</td>
                                <td><strong>ユーザビリティ</strong>テスト</td>
                            </tr>
                            <tr className="even">
                                <td>精度に焦点を当てた結果の正しさの確認（4.1 を参照）</td>
                                <td><strong>機能正確性</strong>テスト</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <strong>解き方</strong>：<strong>「情報の交換」</strong>が出てきたら相互運用性。「環境」なら適応性、「使いやすさ」ならユーザビリティ、「結果の正しさ・精度」なら正確性です。
                </p>
                <div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5759">公式サンプル試験 解答 v4.1 Q37</a>
                    </p>
                </div>

                <h3 id="511-44-のまとめ">5.11 4.4 のまとめ</h3>
                <ul>
                    <li>
                        Compatibility ＝ 共存性＋相互運用性。<strong>LO の対象は相互運用性</strong>。
                    </li>
                    <li>
                        相互運用性 ＝ 情報を<strong>交換</strong>し、<strong>交換した情報を使える</strong>。届くだけでなく、<strong>意味が合う</strong>ことが重要。
                    </li>
                    <li>
                        TA の貢献は、<strong>連携する相手・情報・シナリオを洗い出して設計する</strong>こと。業務データの意味を知る TA の強みが生きる。
                    </li>
                    <li>
                        相手が使えないときは<strong>テストダブル／サービス仮想化</strong>、最終確認は本番に近い環境で。
                    </li>
                </ul>

                {/* ===== セクション 6: 機能・サービス別 適用早見表 ===== */}
                <h2 id="6-機能サービス別-適用早見表">6. 機能・サービス別 適用早見表</h2>
                <p>
                    現場では「この機能・サービスに、どの特性のテストを当てるか」を迷います。次の表は、代表的な機能・サービスに対する<strong>観点の割り当て例</strong>です（<span className="chip chip-t" title="実務補足">💡</span> 実務の整理。第4章の LO を実務に落とし込むための目安です）。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>機能・サービス</th>
                                <th>主に見る特性</th>
                                <th>重点となる観点</th>
                                <th>有効な技法・手法</th>
                                <th>参照節</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>ログイン・会員登録</td>
                                <td>正確性・完全性・ユーザビリティ</td>
                                <td>
                                    認証結果の正しさ、パスワード再設定などの機能の抜け、エラーからの回復のしやすさ
                                </td>
                                <td>状態遷移、デシジョンテーブル、CRUD 完全性、利用者テスト</td>
                                <td>2、3</td>
                            </tr>
                            <tr className="even">
                                <td>検索・絞り込み</td>
                                <td>正確性・適切性</td>
                                <td>条件どおりの結果、結果の並び順・カテゴリの有用性</td>
                                <td>
                                    同値分割・ドメインテスト、メタモルフィック（検索条件の変更に対する結果の関係）、クラウドテスト
                                </td>
                                <td>2</td>
                            </tr>
                            <tr className="odd">
                                <td>カート・決済</td>
                                <td>正確性・完全性・相互運用性</td>
                                <td>
                                    金額・税・送料、決済失敗時の整合性、決済サービスとのデータ交換
                                </td>
                                <td>デシジョンテーブル、シナリオベース、スタブ／サービス仮想化</td>
                                <td>2、5</td>
                            </tr>
                            <tr className="even">
                                <td>帳票・PDF・CSV 出力</td>
                                <td>正確性・相互運用性</td>
                                <td>桁・丸め・文字コード、受け取る側での取り込み</td>
                                <td>ドメインテスト、実データでの取り込み確認</td>
                                <td>2、5</td>
                            </tr>
                            <tr className="odd">
                                <td>外部 API 連携</td>
                                <td>相互運用性</td>
                                <td>形式・意味・バージョン・エラー・タイムアウト</td>
                                <td>シナリオベース（例外を含む）、契約テスト、サービス仮想化</td>
                                <td>5</td>
                            </tr>
                            <tr className="even">
                                <td>データ管理（登録・更新・削除）</td>
                                <td>完全性・正確性</td>
                                <td>操作の抜け（削除できない）、更新後の整合性</td>
                                <td>CRUD テスト（完全性テストと整合性テスト）</td>
                                <td>2</td>
                            </tr>
                            <tr className="odd">
                                <td>インストーラ・モバイルアプリ</td>
                                <td>インストール性・適応性</td>
                                <td>新規・更新・アンインストール、端末や OS の組み合わせ</td>
                                <td>状態遷移（ラウンドトリップ）、ペアワイズ、クラウドテスト</td>
                                <td>4</td>
                            </tr>
                            <tr className="even">
                                <td>Web アプリ（ブラウザ対応）</td>
                                <td>適応性・ユーザビリティ</td>
                                <td>ブラウザ×OS×画面サイズ、文字サイズや操作方法の違い</td>
                                <td>ペアワイズ、CI の matrix、チェックリスト</td>
                                <td>3、4</td>
                            </tr>
                            <tr className="odd">
                                <td>SaaS の管理画面</td>
                                <td>適切性・ユーザビリティ</td>
                                <td>管理者の業務手順の必要十分さ、誤操作の防止</td>
                                <td>シナリオベース、ヒューリスティクス評価、利用者テスト</td>
                                <td>2、3</td>
                            </tr>
                            <tr className="even">
                                <td>データ移行・バッチ</td>
                                <td>正確性・完全性・相互運用性</td>
                                <td>件数・金額の一致、欠損、変換ルール</td>
                                <td>疑似オラクル（旧システム）、ドメインテスト</td>
                                <td>2、5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-20">
                        <Mermaid chart={DIAGRAM_20} />
                    </div>
                </div>
                <div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス（特性の割り当て）</span>
                    <ul>
                        <li>
                            1つの機能に<strong>複数の特性</strong>が該当することは普通です。特性ごとに<strong>テスト条件を分けて</strong>書きます。
                        </li>
                        <li>
                            どの特性を厚くするかは、<strong>リスクの大きさ</strong>で決めます（<span className="chip chip-o" title="公式根拠">📘</span> 2.1：TA は品質特性の観点でリスクを分類し、各リスクに対するテスト活動を提案する）。
                        </li>
                        <li>
                            優先度が低い特性は、<strong>チェックリストや探索的テスト</strong>で軽く見る（<span className="chip chip-o" title="公式根拠">📘</span> 3.5.1：リスクが低い・スケジュールが厳しいときは経験ベース）。
                        </li>
                    </ul>
                </div>

                {/* ===== セクション 7: 試験対策 ===== */}
                <h2 id="7-試験対策">7. 試験対策</h2>
                <h3 id="71-混同しやすい概念の比較">7.1 混同しやすい概念の比較</h3>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th></th>
                                <th>確かめる問い</th>
                                <th>キーワード</th>
                                <th>例</th>
                                <th>該当節</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>機能正確性</td>
                                <td>結果は正しいか</td>
                                <td>精度・計算・判定</td>
                                <td>送料の判定が仕様どおり</td>
                                <td>4.1</td>
                            </tr>
                            <tr className="even">
                                <td>機能適切性</td>
                                <td>タスクに役立つか</td>
                                <td>必要十分・不要なステップなし</td>
                                <td>カテゴリが利用者に有用</td>
                                <td>4.1</td>
                            </tr>
                            <tr className="odd">
                                <td>機能完全性</td>
                                <td>必要な機能が揃っているか</td>
                                <td>抜け・網羅・CRUD</td>
                                <td>削除機能がない</td>
                                <td>4.1</td>
                            </tr>
                            <tr className="even">
                                <td>ユーザビリティ（インタラクション能力）</td>
                                <td>学びやすく、操作しやすく、誤りを防げるか</td>
                                <td>ペルソナ・観察・実利用者</td>
                                <td>初回利用者が説明なしで購入できる</td>
                                <td>4.2</td>
                            </tr>
                            <tr className="odd">
                                <td>適応性</td>
                                <td>異なる環境で同じように動くか</td>
                                <td>環境の特定・組み合わせ</td>
                                <td>複数のクラウド基盤で動作する</td>
                                <td>4.3</td>
                            </tr>
                            <tr className="even">
                                <td>インストール性</td>
                                <td>インストール・アンインストールできるか</td>
                                <td>新規・更新・アンインストール</td>
                                <td>更新に失敗しても元に戻せる</td>
                                <td>4.3</td>
                            </tr>
                            <tr className="odd">
                                <td>相互運用性</td>
                                <td>情報を交換し、使い合えるか</td>
                                <td>連携・データ形式・意味</td>
                                <td>EC と決済サービスの連携</td>
                                <td>4.4</td>
                            </tr>
                            <tr className="even">
                                <td>（参考）アクセシビリティ</td>
                                <td>幅広い人が使えるか</td>
                                <td>包括性・ユーザー支援</td>
                                <td>スクリーンリーダー対応</td>
                                <td>4.2（ISO では分割）</td>
                            </tr>
                            <tr className="odd">
                                <td>（参考）負荷・拡張性</td>
                                <td>大量の利用に耐えるか</td>
                                <td>負荷・スケーラビリティ</td>
                                <td>同時 1 万人のアクセス</td>
                                <td>第4章 LO の対象外</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 id="72-lo-ごとのこれだけは説明できるポイント">
                    7.2 LO ごとの「これだけは説明できる」ポイント
                </h3>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>LO</th>
                                <th>答えられるべき問い</th>
                                <th>模範的な要点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>TA-4.1.1</td>
                                <td>3特性はどう違う？</td>
                                <td>
                                    正確性＝結果が正確／適切性＝タスクに役立つ・必要十分／完全性＝必要な機能・目的がすべて揃っている
                                </td>
                            </tr>
                            <tr className="even">
                                <td>TA-4.2.1</td>
                                <td>TA はどう貢献する？</td>
                                <td>
                                    ペルソナ・利用パターンからシナリオを作る／対象グループを代表する実利用者を選ぶ／誘導せず観察する
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>TA-4.3.1</td>
                                <td>TA はどう貢献する？</td>
                                <td>
                                    対象環境を特定し、その組み合わせを網羅するテストを設計する（適応性）／インストール手順・構成を利用者視点で確認する（インストール性）
                                </td>
                            </tr>
                            <tr className="even">
                                <td>TA-4.4.1</td>
                                <td>TA はどう貢献する？</td>
                                <td>
                                    連携する相手・交換される情報を洗い出し、システム間のシナリオとデータを設計する。相手が使えないときはテストダブルなどで補う
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 id="73-公式サンプル試験の第4章q34q37一覧">
                    7.3 公式サンプル試験の第4章（Q34〜Q37）一覧
                </h3>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>Q</th>
                                <th>LO</th>
                                <th>問われていること</th>
                                <th>正解の考え方</th>
                                <th>点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>34</td>
                                <td>TA-4.1.1（K2）</td>
                                <td>具体的なテスト活動がどの特性のテストか</td>
                                <td>「フィルタの正しさ」→ 機能正確性</td>
                                <td>1</td>
                            </tr>
                            <tr className="even">
                                <td>35</td>
                                <td>TA-4.2.1（K2）</td>
                                <td>ユーザビリティテストの準備で TA がすべきこと</td>
                                <td>利用パターンとペルソナからシナリオを作る</td>
                                <td>1</td>
                            </tr>
                            <tr className="odd">
                                <td>36</td>
                                <td>TA-4.3.1（K2）</td>
                                <td>適応性テストの支援になる活動</td>
                                <td>
                                    対象環境（クラウド基盤）を特定し、組み合わせを網羅するテストを設計する
                                </td>
                                <td>1</td>
                            </tr>
                            <tr className="even">
                                <td>37</td>
                                <td>TA-4.4.1（K2）</td>
                                <td>相互運用性テストの例</td>
                                <td>情報の交換とその利用の確認</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 id="74-自己診断ミニクイズ-筆者作成公式問題ではありません">
                    7.4 自己診断ミニクイズ（💡 筆者作成・公式問題ではありません）
                </h3>
                <p>以下は K2 の理解を確認するための練習問題です。答えは最後にあります。</p>
                <ol type="1">
                    <li>
                        要件に「領収書の発行」があるのに、画面のどこにも発行機能がない。どの特性の問題か。
                    </li>
                    <li>
                        合計 5,000 円以上で送料無料の仕様で、ちょうど 5,000 円のとき送料が加算された。どの特性の問題か。
                    </li>
                    <li>
                        購入完了までに、目的に不要な確認画面が 5 つ表示される。仕様どおりに実装されている。最も近い特性はどれか（機能面から見る場合）。
                    </li>
                    <li>ユーザビリティテストの参加者を選ぶとき、TA が最も重視すべきことは何か。</li>
                    <li>TA が適応性テストで行う中心的な貢献は何か。</li>
                    <li>ISO/IEC 25010:2023 で、旧 Portability に置き換わった特性名は何か。</li>
                    <li>Interaction capability と Usability の関係を一言で説明せよ。</li>
                    <li>
                        パラメータ 3 つ・各 3 値のとき、ペアワイズの最小テスト数と、全組み合わせの数はいくつか。
                    </li>
                    <li>CRUD テストの「完全性テスト」は静的テストか動的テストか。</li>
                    <li>
                        「EC サイトが送った注文データを、在庫システムが正しく解釈して使えるか」は、どの種類のテストか。
                    </li>
                </ol>
                <p>
                    <strong>答え（<span className="chip chip-t" title="実務補足">💡</span>）</strong>：
                </p>
                <ol type="1">
                    <li>
                        機能完全性　2. 機能正確性（境界値の誤り）　3. 機能適切性（手順が必要十分でない）　4. 対象利用者グループの特性を代表する実利用者を選ぶ　5. 対象環境を特定し、その組み合わせを網羅するテストを設計する　6. Flexibility（柔軟性）　7. Interaction capability は Usability の前提条件（製品側の能力と、利用の結果の関係）　8. 9 通り（全組み合わせは 27 通り）　9. 静的テスト　10. 相互運用性テスト
                    </li>
                </ol>

                <h3 id="75-学習プラン-目安">7.5 学習プラン（💡 目安）</h3>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>ステップ</th>
                                <th>内容</th>
                                <th>所要</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>
                                    第0〜1章：限界の確認、ISO 25010:2023 マップ、キーワード 13 語
                                </td>
                                <td>30 分</td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>第2〜5章：各 LO を「説明できる」まで音読・書き出し</td>
                                <td>60 分</td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>公式サンプル試験 Q34〜Q37 を解き、解説を読む</td>
                                <td>15 分</td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>
                                    <strong>公式シラバス PDF の 44〜47 ページを通読し、本ガイドとの差異を確認</strong>
                                </td>
                                <td>30 分</td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>第7章の比較表と、自己診断クイズを復習</td>
                                <td>15 分</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 id="76-公式シラバス4447-ページ通読時のチェックポイント">
                    7.6 公式シラバス（44〜47 ページ）通読時のチェックポイント
                </h3>
                <p>
                    本ガイドは第4章の本文を全文確認できていません（0.3 節）。通読するときは、次を確認してください。
                </p>
                <ChecklistCard items={SYLLABUS_CHECKLIST_ITEMS} />

                {/* ===== セクション 8: 実務チェックリスト ===== */}
                <h2 id="8-実務チェックリスト">8. 実務チェックリスト</h2>
                <p><strong>機能テスト（4.1）</strong></p>
                <ChecklistCard items={FUNCTIONAL_CHECKLIST_ITEMS} />

                <p><strong>ユーザビリティテスト（4.2）</strong></p>
                <ChecklistCard items={USABILITY_CHECKLIST_ITEMS} />

                <p><strong>フレキシビリティテスト（4.3）</strong></p>
                <ChecklistCard items={FLEXIBILITY_CHECKLIST_ITEMS} />

                <p><strong>互換性テスト（4.4）</strong></p>
                <ChecklistCard items={COMPATIBILITY_CHECKLIST_ITEMS} />
                </main>
            </div>
        </div>
    );
}
