import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import Checklist from './Checklist';
import './component-based-testing-qa-guide.css';

const DIAGRAM_1 = `flowchart TD
subgraph MONO["モノリシック開発の流れ"]
M1["要件定義"] --> M2["設計"]
M2 --> M3["実装"]
M3 --> M4["単体テスト"]
M4 --> M5["結合テスト"]
M5 --> M6["システムテスト"]
end
subgraph CBSE["コンポーネントベース開発の流れ"]
C1["コンポーネントの選定<br/>(自社開発 or COTS)"] --> C2["インターフェース仕様の確認"]
C2 --> C3["コンポーネント単体テスト<br/>(多くはブラックボックス)"]
C3 --> C4["コンポーネント間の結合テスト"]
C4 --> C5["コントラクトテスト"]
C5 --> C6["システム全体テスト"]
end`;

const DIAGRAM_2 = `sequenceDiagram
participant Tester as テスト担当者
participant Iface as 公開インターフェース
participant Comp as コンポーネント内部(非公開)
Tester->>Iface: 入力データを送信
Iface->>Comp: 内部処理を実行(不可視)
Comp-->>Iface: 処理結果を返却
Iface-->>Tester: 出力データを受信
Note over Tester,Comp: 内部のソースコードや構造を見ずに、入出力の対応関係だけで検証する`;

const DIAGRAM_3 = `flowchart TD
COTS["サードパーティ/COTSコンポーネント"] --> R1["ソースコード非公開<br/>(内部構造が見えない)"]
COTS --> R2["ベンダー都合のバージョンアップ<br/>(互換性が崩れる可能性)"]
COTS --> R3["既知の脆弱性<br/>(CVE)の混入"]
COTS --> R4["ライセンス条件の制約"]
COTS --> R5["ベンダーサポート終了<br/>(保守停止リスク)"]
classDef compStyle fill:#1f2430,stroke:#8b9bb4,color:#ffffff
classDef riskStyle fill:#fdecea,stroke:#c0526e,color:#5a1420
class COTS compStyle
class R1,R2,R3,R4,R5 riskStyle`;

const DIAGRAM_4 = `flowchart BT
U["単体テスト(Unit)<br/>数量: 非常に多い / 実行: 数ミリ秒"] --> I["統合テスト(Integration)<br/>数量: 中程度 / 実行: 数百ミリ秒〜数秒"]
I --> CT["コンポーネント/コントラクトテスト<br/>数量: 中程度 / 実行: 数秒"]
CT --> E["E2Eテスト(End-to-End)<br/>数量: 少ない / 実行: 数十秒〜数分"]
classDef unitStyle fill:#eafaf1,stroke:#2e9e5b,color:#164a2c
classDef intStyle fill:#e8f0fe,stroke:#3b6fd6,color:#1a2b4c
classDef ctStyle fill:#fdf3e0,stroke:#c98a1f,color:#4c3a1a
classDef e2eStyle fill:#fdecea,stroke:#c0526e,color:#5a1420
class U unitStyle
class I intStyle
class CT ctStyle
class E e2eStyle`;

const DIAGRAM_5 = `flowchart TD
subgraph TOPDOWN["トップダウン統合(スタブを使用)"]
TD1["上位コンポーネント<br/>(実装済み)"] --> TD2["未実装の下位コンポーネント<br/>→ スタブで代替"]
end
subgraph BOTTOMUP["ボトムアップ統合(ドライバを使用)"]
BU1["下位コンポーネント<br/>(実装済み)"] --> BU2["未実装の上位コンポーネント<br/>→ ドライバで代替"]
end`;

const DIAGRAM_6 = `sequenceDiagram
participant ConsumerTest as コンシューマー側テスト
participant MockProvider as モックプロバイダ
participant PactFile as 契約ファイル
participant ProviderTest as プロバイダ側検証テスト
participant RealProvider as 実際のプロバイダ
ConsumerTest->>MockProvider: 期待するリクエスト/レスポンスを定義
MockProvider-->>ConsumerTest: モック応答を返却
ConsumerTest->>PactFile: やり取りの内容を契約として記録
PactFile->>ProviderTest: 契約を共有
ProviderTest->>RealProvider: 契約どおりのリクエストを再生
RealProvider-->>ProviderTest: 実際の応答を返却
ProviderTest->>ProviderTest: 契約の期待値と実際の応答を比較検証`;

const DIAGRAM_7 = `flowchart LR
Con1["コンシューマーA"] -->|契約A| Broker["契約ブローカー<br/>(Pact Broker等)"]
Con2["コンシューマーB"] -->|契約B| Broker
Con3["コンシューマーC"] -->|契約C| Broker
Broker -->|全契約を集約して検証| Provider["プロバイダサービス"]
classDef conStyle fill:#e8f0fe,stroke:#3b6fd6,color:#1a2b4c
classDef brokerStyle fill:#fdf3e0,stroke:#c98a1f,color:#4c3a1a
classDef provStyle fill:#eafaf1,stroke:#2e9e5b,color:#164a2c
class Con1,Con2,Con3 conStyle
class Broker brokerStyle
class Provider provStyle`;

const DIAGRAM_8 = `flowchart LR
Src["ソースコード/<br/>依存関係マニフェスト"] --> Scan["SCAツールによるスキャン<br/>(例: OWASP Dependency-Check)"]
Scan --> DB["既知の脆弱性データベース<br/>(NVD等)と照合"]
DB --> Report["レポート生成 + SBOM出力"]
Report --> Gate{"重大な脆弱性は<br/>あるか？"}
Gate -->|あり| Block["ビルドを失敗させる"]
Gate -->|なし| Pass["パイプラインを継続"]
classDef stepStyle fill:#e8f0fe,stroke:#3b6fd6,color:#1a2b4c
classDef gateStyle fill:#fdf3e0,stroke:#c98a1f,color:#4c3a1a
classDef blockStyle fill:#fdecea,stroke:#c0526e,color:#5a1420
classDef passStyle fill:#eafaf1,stroke:#2e9e5b,color:#164a2c
class Src,Scan,DB,Report stepStyle
class Gate gateStyle
class Block blockStyle
class Pass passStyle`;

const DIAGRAM_9 = `flowchart TD
Test["統合テストプロセス"] --> DB["使い捨てのDBコンテナ<br/>(例: PostgreSQL)"]
Test --> MQ["使い捨てのメッセージキュー<br/>コンテナ(例: Kafka)"]
Test --> Cache["使い捨てのキャッシュ<br/>コンテナ(例: Redis)"]
DB --> Cleanup["テスト終了後に<br/>自動的に破棄"]
MQ --> Cleanup
Cache --> Cleanup
classDef testStyle fill:#e8f0fe,stroke:#3b6fd6,color:#1a2b4c
classDef infraStyle fill:#fdf3e0,stroke:#c98a1f,color:#4c3a1a
classDef cleanupStyle fill:#eafaf1,stroke:#2e9e5b,color:#164a2c
class Test testStyle
class DB,MQ,Cache infraStyle
class Cleanup cleanupStyle`;

const DIAGRAM_10 = `flowchart TD
    A["元のソースコード"] --> B["ミューテーションツールが<br/>コードに小さな欠陥を注入"]
    B --> C["既存のテストスイートを実行"]
    C --> D{"テストは失敗したか？"}
    D -->|失敗した| E["ミュータントは Killed<br/>（テストの質は良好）"]
    D -->|失敗しなかった| F["ミュータントは Survived<br/>（テストの抜け漏れを示唆）"]
    F --> G["テストケースを追加/強化する"]

    classDef srcStyle fill:#e8f0fe,stroke:#3b6fd6,color:#1a2b4c
    classDef killedStyle fill:#eafaf1,stroke:#2e9e5b,color:#164a2c
    classDef survivedStyle fill:#fdecea,stroke:#c0526e,color:#5a1420
    class A,B,C srcStyle
    class E killedStyle
    class F,G survivedStyle`;

const DIAGRAM_11 = `flowchart LR
    Commit["コードのコミット"] --> Unit["単体テスト<br/>（数秒）"]
    Unit --> CompT["コンポーネントテスト<br/>（数十秒）"]
    CompT --> Contract["コントラクトテスト<br/>（数十秒）"]
    Contract --> Integ["統合テスト<br/>（数分）"]
    Integ --> E2E["E2Eテスト<br/>（夜間バッチ等）"]
    E2E --> Deploy["本番デプロイ"]

    classDef fastStyle fill:#eafaf1,stroke:#2e9e5b,color:#164a2c
    classDef midStyle fill:#e8f0fe,stroke:#3b6fd6,color:#1a2b4c
    classDef slowStyle fill:#fdf3e0,stroke:#c98a1f,color:#4c3a1a
    class Unit,CompT fastStyle
    class Contract,Integ midStyle
    class E2E slowStyle`;

export default function ComponentBasedTestingPage() {
  return (
    <div className="cbss-qa-layout">
      <NavBar />

      <main className="main">
        {/* Hero */}
        <header className="hero">
          <h1>コンポーネントベースソフトウェアシステムのテストと品質保証</h1>
          <p className="hero-lede">完全ガイド</p>
          <div className="hero-pills">
            <span className="pill">📊 図解 11点</span>
            <span className="pill">📋 表 12点</span>
            <span className="pill">✅ チェックリスト 10項目</span>
            <span className="pill">📚 参考文献 19件</span>
          </div>
        </header>

        {/* Section: はじめに：このガイドについて */}
        <section>
          <h2 id="はじめにこのガイドについて">はじめに：このガイドについて</h2>
          <p>
            現代のソフトウェアは、ゼロからすべてを自前で書き上げることはほとんどありません。認証機能はライブラリを使い、決済はサードパーティのSDKを呼び出し、ログ基盤はOSSパッケージに頼り、システム全体はマイクロサービスという名の小さな「コンポーネント」の集合体として組み上がっています。このように、独立して開発・配布・交換可能な部品（コンポーネント）を組み合わせてシステムを構築するアプローチを
            <strong>コンポーネントベースソフトウェア工学（Component-Based Software Engineering, CBSE）</strong>
            と呼びます。
          </p>
          <p>
            CBSEが普及するほど、テストと品質保証（QA）のやり方は、昔ながらの「1つの巨大なプログラムを頭から尾まで読んでテストする」方式では通用しなくなります。コンポーネントの中身（ソースコード）が見えないことすらあり、テスト対象は「関数」ではなく「契約（インターフェース）」になり、品質保証は「自分のコードだけ」ではなく「自分が組み込んだ他人のコードの品質」まで含めて考える必要が出てきます。
          </p>
          <p>
            このガイドは、Jerry Gao・H.-S. J. Tsao・Ye Wu共著『Testing and Quality Assurance for Component-based Software』（Artech House, 2003）[1] が体系立てた「コンポーネントの導入」「ソフトウェアの検証手法」「コンポーネントベースソフトウェアの検証手法」「品質保証」という4部構成の考え方を土台にしながら、2026年現在の実務（マイクロサービス、コンテナ、コンテナ化されたCI/CD、コントラクトテスト、サプライチェーンセキュリティなど）に合わせてアップデートした内容です。Martin Fowler（ThoughtWorks）、Google、OWASP、ISTQBなど、国際的に著名な開発者・組織の発信内容を参照しながら、初学者でも迷わないようステップバイステップで解説していきます。
          </p>

          <h3 id="対象読者">対象読者</h3>
          <ul className="bullet-list">
            <li>ソフトウェアテストを学び始めたばかりのエンジニア・QAエンジニア</li>
            <li>マイクロサービスやOSSライブラリを多用したシステムで「どこまで自分でテストすればよいか」に悩んでいる方</li>
            <li>コンポーネント/モジュール単位の品質保証プロセスを設計したいテックリード・アーキテクト</li>
          </ul>

          <h3 id="このガイドで学べること">このガイドで学べること</h3>
          <ul className="bullet-list">
            <li>コンポーネントベースソフトウェアとは何か、なぜ普通のテストと違うのか</li>
            <li>単体テストからE2Eテストまでの全体像と、テストピラミッドの正しい読み方</li>
            <li>ブラックボックスのコンポーネント／COTS（商用オフザシェルフ）コンポーネントを安全に組み込むための考え方</li>
            <li>コントラクトテスト（契約テスト）とコンシューマー駆動契約（CDC）の仕組み</li>
            <li>サードパーティ依存関係のセキュリティ品質保証（SCA/SBOM）</li>
            <li>テストの「質」そのものを測定するミューテーションテスト</li>
            <li>CI/CDパイプラインへのテスト自動化の組み込み方</li>
          </ul>
        </section>

        <hr />

        {/* Section 1: 1. コンポーネントベースソフトウェアの基礎 */}
        <section>
          <h2 id="1-コンポーネントベースソフトウェアの基礎">
            1. コンポーネントベースソフトウェアの基礎
          </h2>

          <h3 id="11-ソフトウェアコンポーネントとは何か">
            1.1 「ソフトウェアコンポーネント」とは何か
          </h3>
          <p>
            コンポーネントという言葉は現場でかなり緩く使われますが、学術的にもっとも広く引用される定義は、マイクロソフトリサーチのClemens Szyperskiによるものです。Szyperskiは著書『Component Software: Beyond Object-Oriented Programming』の中で、ソフトウェアコンポーネントを次のような性質を持つ合成の単位として整理しています[2][3]。
          </p>
          <ul className="bullet-list">
            <li>
              <strong>契約によって明示されたインターフェースを持つ</strong>
              ：何を提供し、何を必要とするかが仕様として明確になっている
            </li>
            <li>
              <strong>明示的なコンテキスト依存のみを持つ</strong>
              ：実行環境への依存関係が隠れておらず、宣言されている
            </li>
            <li>
              <strong>独立してデプロイできる</strong>
              ：一部だけを切り出して配布することができない、まとまった単位である
            </li>
            <li>
              <strong>サードパーティによる合成の対象になる</strong>
              ：作った本人以外が、ソースコードを見ずに組み合わせて使える
            </li>
          </ul>
          <p>
            この定義のポイントは、「コンポーネント＝クラス」でも「コンポーネント＝マイクロサービス」でもなく、
            <strong>独立して配布・合成できる単位である</strong>
            という点です。npmパッケージ、Javaのライブラリ、REST APIを公開するマイクロサービス、社内で共有されるSDK、さらにはOS上で動く実行ファイルまで、この定義に当てはまるものはすべて「コンポーネント」として同じ枠組みで語ることができます。
          </p>

          <h3 id="12-コンポーネントベースソフトウェアシステムcbssの特徴">
            1.2 コンポーネントベースソフトウェアシステム（CBSS）の特徴
          </h3>
          <p>
            Gao・Tsao・Wuの書籍では、こうしたコンポーネントを組み合わせて作られたシステムを
            <strong>CBSS（Component-Based Software System）</strong>
            と呼び、次のような特徴を挙げています[1]。
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr className="header">
                  <th>特徴</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>独立した開発ライフサイクル</td>
                  <td>各コンポーネントは別々のチーム・会社が別々のスケジュールで開発する</td>
                </tr>
                <tr className="even">
                  <td>ブラックボックス性</td>
                  <td>利用者はソースコードではなく、インターフェース仕様だけを頼りに使う</td>
                </tr>
                <tr className="odd">
                  <td>再利用性</td>
                  <td>同じコンポーネントが複数のシステムで再利用される</td>
                </tr>
                <tr className="even">
                  <td>合成可能性</td>
                  <td>複数のコンポーネントを組み合わせて新しい機能を作れる</td>
                </tr>
                <tr className="odd">
                  <td>進化の非同期性</td>
                  <td>コンポーネントごとにバージョンアップのタイミングが異なる</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 id="13-モノリシックな開発との違い">1.3 モノリシックな開発との違い</h3>
          <p>
            下図は、1つのアプリケーションを最初から最後まで自社で書き切る「モノリシック開発」と、複数のコンポーネントを選定・統合していく「コンポーネントベース開発」のテストの流れを比較したものです。
          </p>
          <div className="mermaid-wrap">
            <Mermaid chart={DIAGRAM_1} />
          </div>
          <p>
            モノリシック開発では「設計者＝テスト対象コードを書いた人」であることが多く、ソースコードを見ながらテストを設計する
            <strong>ホワイトボックステスト</strong>
            が中心になります。一方、コンポーネントベース開発では「自分が書いていないコード」をどう検証するかが主戦場になり、インターフェース仕様と入出力だけを頼りにする
            <strong>ブラックボックステスト</strong>
            の比重が大きくなります。
          </p>

          <h3 id="14-現代におけるコンポーネントの広がり">
            1.4 現代における「コンポーネント」の広がり
          </h3>
          <p>
            2003年の原著が主に念頭に置いていたのはCORBA・COM・EJBといったコンポーネントモデルでしたが、その考え方は形を変えて現在も生き続けています。
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr className="header">
                  <th>時代</th>
                  <th>代表的なコンポーネントの形</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>2000年代前半</td>
                  <td>CORBA、COM/DCOM、Enterprise JavaBeans（EJB）</td>
                </tr>
                <tr className="even">
                  <td>2000年代後半〜2010年代</td>
                  <td>Webサービス（SOAP/WSDL）、OSGiバンドル</td>
                </tr>
                <tr className="odd">
                  <td>2010年代〜現在</td>
                  <td>REST/gRPCマイクロサービス、npm/PyPI/Maven等のパッケージ、コンテナイメージ</td>
                </tr>
                <tr className="even">
                  <td>現在進行形</td>
                  <td>サーバーレス関数（FaaS）、AIエージェントが呼び出すツール/MCPサーバー</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            呼び方や技術は変わっても、「独立して配布され、契約によってのみやり取りする単位を、ソースコードを見ずに組み合わせて使う」という本質的な課題は変わっていません。
          </p>
        </section>

        <hr />

        {/* Section 2: 2. なぜコンポーネントのテストは難しいのか */}
        <section>
          <h2 id="2-なぜコンポーネントのテストは難しいのか">
            2. なぜコンポーネントのテストは難しいのか
          </h2>

          <h3 id="21-ブラックボックスの壁">2.1 ブラックボックスの壁</h3>
          <p>
            自社で書いたコードなら、バグが疑われる箇所にログを仕込んだり、デバッガでステップ実行したりできます。しかし、サードパーティのライブラリやマイクロサービスが相手だと、そうはいきません。
          </p>
          <div className="mermaid-wrap">
            <Mermaid chart={DIAGRAM_2} />
          </div>
          <p>
            このように「入力と出力の対応関係だけで正しさを判断する」テストが
            <strong>ブラックボックステスト</strong>
            です。ISTQB（国際ソフトウェアテスト資格認定委員会）の用語集でも、コンポーネントテストは個々のソフトウェア／ハードウェアコンポーネントに焦点を当てたテストレベルであり、ブラックボックス・ホワイトボックス・グレーボックスのいずれの技法も使われうると定義されています[4]。ただしコンポーネントの中身が見えない場合、選べる技法は自然とブラックボックス寄りになります。
          </p>

          <h3 id="22-cots商用オフザシェルフコンポーネント特有の課題">
            2.2 COTS（商用オフザシェルフ）コンポーネント特有の課題
          </h3>
          <p>
            自社が管理していない「買ってきた」「借りてきた」コンポーネント（COTS: Commercial Off-The-Shelf）を組み込む場合、原著が指摘する課題は今でもそのまま当てはまります[1]。
          </p>
          <div className="mermaid-wrap">
            <Mermaid chart={DIAGRAM_3} />
          </div>
          <p>
            これらのリスクへの向き合い方は第6章（サードパーティ／COTSコンポーネントの品質保証）で詳しく扱います。
          </p>

          <h3 id="23-テスト容易性testabilityという設計上の課題">
            2.3 テスト容易性（Testability）という設計上の課題
          </h3>
          <p>
            コンポーネントが「テストしやすいかどうか」は、そのコンポーネントの設計そのものに左右されます。原著ではこれを
            <strong>コンポーネントテスタビリティ（component testability）</strong>
            と呼び、次のような観点を挙げています[1]。
          </p>
          <ul className="bullet-list">
            <li>
              <strong>可観測性（Observability）</strong>
              ：内部の状態や処理結果を外部から観測できるか（ログ、メトリクス、ヘルスチェックエンドポイントなど）
            </li>
            <li>
              <strong>制御可能性（Controllability）</strong>
              ：外部からテスト用の入力や状態を注入できるか（テスト用フラグ、フィーチャーフラグ、モック可能な依存注入など）
            </li>
            <li>
              <strong>組み込みテスト（Built-in Test）</strong>
              ：コンポーネント自身が自己診断機能やセルフテスト機能を持っているか
            </li>
          </ul>
          <p>
            自社でコンポーネントを設計する立場であれば、この3点を意識するだけでテストのしやすさが大きく変わります。
          </p>

          <h3 id="24-バージョンと互換性の問題">2.4 バージョンと互換性の問題</h3>
          <p>
            コンポーネントベースシステムでは、あるコンポーネントのバージョンアップが、それを利用している他のコンポーネントを壊す「破壊的変更（Breaking Change）」がいつでも起こり得ます。これは第5章で扱う
            <strong>コントラクトテスト</strong>
            が解決しようとしている中心的な課題です。
          </p>
        </section>

        <hr />

        {/* Section 3: 3. テストレベルの全体像とテストピラミッド */}
        <section>
          <h2 id="3-テストレベルの全体像とテストピラミッド">
            3. テストレベルの全体像とテストピラミッド
          </h2>

          <h3 id="31-テストピラミッドfowler--cohn">3.1 テストピラミッド（Fowler / Cohn）</h3>
          <p>
            「どの種類のテストを、どれくらいの比率で書くべきか」という問いに対する古典的な回答が<strong>テストピラミッド</strong>です。この概念はMike Cohnの著書に由来し、Martin Fowlerが自身のbliki（ブログ兼wiki）で広く紹介したことで実務者の間に定着しました[5]。Fowlerは、GUIを介した従来型のテストよりもはるかに多くの自動テストを単体テストレベルで行うべきだと説明しています[5]。
          </p>
          <div className="mermaid-wrap">
            <Mermaid chart={DIAGRAM_4} />
          </div>
          <p>
            ピラミッドの下ほどテストの数が多く、実行が速く、対象範囲が狭い。上に行くほどテストの数は少なく、実行に時間がかかり、対象範囲（ユーザーシナリオ全体）は広くなります。Googleのテストブログも、E2Eテストばかりに頼るとテストスイート全体が遅く壊れやすくなると警告し、下位レイヤーのテストを厚くすることを推奨しています[6]。
          </p>

          <h3 id="32-googleのsmallmediumlargeモデル">
            3.2 Googleの「Small/Medium/Large」モデル
          </h3>
          <p>
            Googleは社内で「単体/統合/システム」という分類の代わりに、テストが使うリソース（プロセス数、ネットワーク、時間）に着目した
            <strong>Small・Medium・Large</strong>
            という分類を使っています[7][8]。
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr className="header">
                  <th>サイズ</th>
                  <th>実行環境</th>
                  <th>典型的な対応関係</th>
                  <th>目的</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>Small</td>
                  <td>単一プロセス内、ネットワークI/O禁止</td>
                  <td>単体テストに相当</td>
                  <td>1つの関数・クラスのロジックを検証</td>
                </tr>
                <tr className="even">
                  <td>Medium</td>
                  <td>単一マシン上の複数バイナリ</td>
                  <td>統合テストに相当</td>
                  <td>少数のコンポーネント間の連携を検証</td>
                </tr>
                <tr className="odd">
                  <td>Large</td>
                  <td>複数マシンにまたがる分散環境</td>
                  <td>E2E/システムテストに相当</td>
                  <td>本番に近い環境でユーザーシナリオ全体を検証</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            書籍『Software Engineering at Google』でも、システム全体を1つのバイナリにまとめてしまうと本番トポロジーへの忠実度は下がるが実行は速くなり、逆に複数マシンに分散させるほど忠実度は上がるがテストは遅く不安定（flaky）になりやすいという、忠実度と速度のトレードオフが説明されています[8]。
          </p>

          <h3 id="33-テストレベル比較表">3.3 テストレベル比較表</h3>
          <p>
            ここまでの内容を、実務でよく使われる5つのテストレベルとして整理すると次のようになります。ThoughtWorksのToby Clemsonがマイクロサービス向けにまとめたテスト戦略も、基本的にこの5層構造に沿っています[9]。
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr className="header">
                  <th>テストレベル</th>
                  <th>検証すること</th>
                  <th>依存関係の扱い</th>
                  <th>実行速度</th>
                  <th>主な担当者</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>単体テスト</td>
                  <td>1つの関数/クラスのロジック</td>
                  <td>すべてモック/スタブ</td>
                  <td>非常に速い</td>
                  <td>開発者</td>
                </tr>
                <tr className="even">
                  <td>統合テスト</td>
                  <td>自コンポーネントと直接の依存先（DB等）</td>
                  <td>実物 or 軽量な代替（コンテナ等）</td>
                  <td>速い〜中程度</td>
                  <td>開発者</td>
                </tr>
                <tr className="odd">
                  <td>コンポーネントテスト</td>
                  <td>1つのサービス/コンポーネント全体</td>
                  <td>外部依存はスタブ化</td>
                  <td>中程度</td>
                  <td>開発者/QA</td>
                </tr>
                <tr className="even">
                  <td>コントラクトテスト</td>
                  <td>サービス間のインターフェース契約の整合性</td>
                  <td>モックプロバイダ/コンシューマー</td>
                  <td>速い</td>
                  <td>開発者</td>
                </tr>
                <tr className="odd">
                  <td>E2Eテスト</td>
                  <td>ユーザーシナリオ全体</td>
                  <td>すべて実物（本番同等環境）</td>
                  <td>遅い</td>
                  <td>QA/開発者</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            なお、Fowler自身も「単体テスト」や「統合テスト」といった用語は業界内でも定義が揺れがちであることを認めており、チームごとに用語の定義をすり合わせておくことが重要だと述べています[10]。
          </p>
        </section>

        <hr />

        {/* Section 4: 4. コンポーネントテストと統合テストの実践 */}
        <section>
          <h2 id="4-コンポーネントテストと統合テストの実践">
            4. コンポーネントテストと統合テストの実践
          </h2>

          <h3 id="41-コンポーネントテストとは">4.1 コンポーネントテストとは</h3>
          <p>
            ISTQBの定義では、コンポーネントテストは個々のソフトウェアコンポーネントに焦点を当てたテストレベルとされています[4]。原著の言葉を借りれば、コンポーネントテストの目的は「そのコンポーネント単体が、公開された仕様どおりに振る舞うこと」を、他のコンポーネントと組み合わせる前に確認することです[1]。
          </p>
          <p>
            コンポーネントテストと単体テストの違いは、スコープの粒度にあります。単体テストが「1つの関数・1つのクラス」を対象にするのに対し、コンポーネントテストは「1つのマイクロサービス」や「1つのデプロイ可能な単位」全体を対象にし、外部の依存先だけをスタブ化して検証します。
          </p>

          <h3 id="42-統合テストトップダウンとボトムアップ">
            4.2 統合テスト：トップダウンとボトムアップ
          </h3>
          <p>
            複数のコンポーネントを組み合わせていく際、すべてのコンポーネントが同時に完成することはまずありません。そこで、未完成の部分を仮の実装で埋めながら段階的に統合していく2つの伝統的な戦略があります。
          </p>
          <div className="mermaid-wrap">
            <Mermaid chart={DIAGRAM_5} />
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr className="header">
                  <th>戦略</th>
                  <th>仮の実装</th>
                  <th>メリット</th>
                  <th>デメリット</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>トップダウン</td>
                  <td>スタブ（下位コンポーネントの代役）</td>
                  <td>上位の制御ロジックを早期に検証できる</td>
                  <td>下位コンポーネントの実際の挙動は後回しになる</td>
                </tr>
                <tr className="even">
                  <td>ボトムアップ</td>
                  <td>ドライバ（上位コンポーネントの代役）</td>
                  <td>基盤となる部品から確実に固められる</td>
                  <td>ユーザーに近いシナリオの検証が遅れる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            実務では、この2つを組み合わせた「サンドイッチ統合」や、後述するTestcontainersのように実物に近い依存関係を使う方法が広く使われています。
          </p>

          <h3 id="43-テストダブルtest-doubleの使い分け">
            4.3 テストダブル（Test Double）の使い分け
          </h3>
          <p>
            コンポーネントテストや単体テストでは、外部依存の代わりに「テストダブル」と呼ばれる代役を使います。Fowlerは、外部サービスとの通信のように低速・不安定・チーム管理外な依存関係に対してテストダブルを使うことで、テストの速度と決定性を確保できると説明しています[11]。ただし同時に、テストダブルが実際のサービスの挙動を正しく模倣できているかという新たな課題が生まれる点にも注意が必要です[11]。この課題こそが、次章で扱う「コントラクトテスト」が解決しようとしている問題です。
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr className="header">
                  <th>種類</th>
                  <th>役割</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>ダミー（Dummy）</td>
                  <td>引数を埋めるためだけに存在し、実際には使われない</td>
                </tr>
                <tr className="even">
                  <td>スタブ（Stub）</td>
                  <td>あらかじめ決められた固定の応答を返す</td>
                </tr>
                <tr className="odd">
                  <td>スパイ（Spy）</td>
                  <td>呼び出された内容を記録し、後で検証できる</td>
                </tr>
                <tr className="even">
                  <td>モック（Mock）</td>
                  <td>期待される呼び出しをあらかじめ定義し、それ以外の呼び出しがあれば失敗させる</td>
                </tr>
                <tr className="odd">
                  <td>フェイク（Fake）</td>
                  <td>簡易だが実際に動作する実装（インメモリDBなど）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr />

        {/* Section 5: 5. コントラクトテストとコンシューマー駆動契約（CDC） */}
        <section>
          <h2 id="5-コントラクトテストとコンシューマー駆動契約cdc">
            5. コントラクトテストとコンシューマー駆動契約（CDC）
          </h2>

          <h3 id="51-なぜサービス間の統合テストは壊れやすいのか">
            5.1 なぜサービス間の統合テストは壊れやすいのか
          </h3>
          <p>
            マイクロサービス間の連携をすべてE2Eテストで確認しようとすると、関係するサービスをすべて起動する必要があり、テストは遅く、環境要因で不安定（flaky）になりがちです。Toby Clemsonのテスト戦略解説でも、統合テストの層は「自分のサービスと直接の依存先との間のやり取りだけ」に絞り、より広い範囲の検証は別の手法に委ねることが推奨されています[9]。
          </p>
          <p>
            その「別の手法」の1つが<strong>コントラクトテスト（契約テスト）</strong>です。コントラクトテストは、サービス間でやり取りされるメッセージが「契約」としてドキュメント化された共通認識に沿っているかどうかを、それぞれのアプリケーションを単独でテストすることによって確認する手法です[12]。Pactプロジェクトの公式ドキュメントは、これを「家に火をつけて火災報知器をテストする必要はなく、ボタンを押してテストすればよい」という比喩で説明しています[12]。
          </p>

          <h3 id="52-コンシューマー駆動契約cdcとは">
            5.2 コンシューマー駆動契約（CDC）とは
          </h3>
          <p>
            <strong>コンシューマー駆動契約（Consumer-Driven Contracts, CDC）</strong>
            は、ThoughtWorksのIan Robinsonが2006年に提唱したパターンで、契約をプロバイダ側ではなく、そのサービスを利用するコンシューマー側が主導して定義するという考え方です[13]。Robinsonは、コンシューマーがそれぞれプロバイダに期待する内容を伝え、それらを組み合わせたものがプロバイダ側の責務になると説明しています[13]。
          </p>
          <div className="mermaid-wrap">
            <Mermaid chart={DIAGRAM_6} />
          </div>
          <p>
            このデファクトスタンダードとなっているオープンソース実装が<strong>Pact</strong>です。Pactの公式ドキュメントによれば、コンシューマー側のテストで発生した各リクエストと期待するレスポンスのペア（インタラクション）が契約ファイルとして記録され、プロバイダ側ではその契約ファイルを再生して実際の応答と比較することで、双方のテストを同期させる仕組みになっています[14]。
          </p>

          <h3 id="53-複数のコンシューマーを持つプロバイダの契約管理">
            5.3 複数のコンシューマーを持つプロバイダの契約管理
          </h3>
          <p>
            1つのプロバイダに複数のコンシューマーが存在する場合、それぞれの契約を集約して管理する必要があります。
          </p>
          <div className="mermaid-wrap">
            <Mermaid chart={DIAGRAM_7} />
          </div>
          <p>
            コンシューマー駆動契約の大きな利点は、コンシューマーが実際に使っている部分だけが契約として検証され、使われていない部分はプロバイダが自由に変更できるという点です。つまり、プロバイダを壊すかもしれない変更を、本番デプロイの前に、しかも高速なテストとして検出できます。
          </p>

          <h3 id="54-コントラクトテストのコード例イメージ">
            5.4 コントラクトテストのコード例（イメージ）
          </h3>
          <p>
            以下は、注文サービス（コンシューマー）が在庫サービス（プロバイダ）に対して抱く期待を、Pactに似たAPIで表現した例です（学習用の簡略化されたサンプルコードであり、特定の書籍やドキュメントからの引用ではありません）。
          </p>
          <div className="code-block">
            <div className="code-line"><span className="code-comment">// コンシューマー側：注文サービスが在庫サービスに期待する契約を定義する</span></div>
            <div className="code-line"><span className="code-fn">describe</span>(<span className="code-string">&quot;在庫サービスとの契約&quot;</span>, () =&gt; &#123;</div>
            <div className="code-line">  <span className="code-fn">it</span>(<span className="code-string">&quot;商品IDを渡すと在庫数を返す&quot;</span>, <span className="code-keyword">async</span> () =&gt; &#123;</div>
            <div className="code-line">    <span className="code-keyword">await</span> provider.<span className="code-fn">addInteraction</span>(&#123;</div>
            <div className="code-line">      <span className="code-prop">state</span>: <span className="code-string">&quot;商品1001が5個在庫にある&quot;</span>,</div>
            <div className="code-line">      <span className="code-prop">uponReceiving</span>: <span className="code-string">&quot;在庫確認リクエスト&quot;</span>,</div>
            <div className="code-line">      <span className="code-prop">withRequest</span>: &#123; <span className="code-prop">method</span>: <span className="code-string">&quot;GET&quot;</span>, <span className="code-prop">path</span>: <span className="code-string">&quot;/inventory/1001&quot;</span> &#125;,</div>
            <div className="code-line">      <span className="code-prop">willRespondWith</span>: &#123;</div>
            <div className="code-line">        <span className="code-prop">status</span>: <span className="code-num">200</span>,</div>
            <div className="code-line">        <span className="code-prop">body</span>: &#123; <span className="code-prop">productId</span>: <span className="code-num">1001</span>, <span className="code-prop">quantity</span>: <span className="code-num">5</span> &#125;,</div>
            <div className="code-line">      &#125;,</div>
            <div className="code-line">    &#125;);</div>
            <div className="code-line"></div>
            <div className="code-line">    <span className="code-keyword">const</span> result = <span className="code-keyword">await</span> inventoryClient.<span className="code-fn">getStock</span>(<span className="code-num">1001</span>);</div>
            <div className="code-line">    <span className="code-fn">expect</span>(result.quantity).<span className="code-fn">toBe</span>(<span className="code-num">5</span>);</div>
            <div className="code-line">  &#125;);</div>
            <div className="code-line">&#125;);</div>
          </div>
          <p>
            このテストが成功すると、コンシューマーが期待する内容が契約ファイルとして書き出され、プロバイダ側のパイプラインでその契約を満たしているかどうかが自動的に検証されます。
          </p>
        </section>

        <hr />

        {/* Section 6: 6. サードパーティ／COTSコンポーネントの品質保証 */}
        <section>
          <h2 id="6-サードパーティcotsコンポーネントの品質保証">
            6. サードパーティ／COTSコンポーネントの品質保証
          </h2>

          <h3 id="61-動くかどうかだけでは足りない">6.1 「動くかどうか」だけでは足りない</h3>
          <p>
            自社が直接書いていないコンポーネントを組み込む際、機能的な正しさに加えて、セキュリティ・ライセンス・保守性という観点の品質保証が欠かせません。OWASP（Open Web Application Security Project）は、こうした活動を
            <strong>コンポーネント分析（Component Analysis）</strong>
            と呼び、サードパーティおよびオープンソースコンポーネントのコードベース内でのリスクを管理する自動化プロセスと位置づけています[15]。
          </p>

          <h3 id="62-ソフトウェア構成分析scaとsbom">6.2 ソフトウェア構成分析（SCA）とSBOM</h3>
          <p>
            サードパーティコンポーネントの中身を1つ1つ人間がレビューすることは現実的ではないため、自動化ツールによる
            <strong>ソフトウェア構成分析（Software Composition Analysis, SCA）</strong>
            が使われます。代表的なOSSツールであるOWASP Dependency-Checkは、プロジェクトの依存関係を解析し、既知の脆弱性データベース（NVD等）と突き合わせることで、公開済みの脆弱性を検出します[16]。
          </p>
          <div className="mermaid-wrap">
            <Mermaid chart={DIAGRAM_8} />
          </div>
          <p>
            SCAツールが出力する
            <strong>SBOM（Software Bill of Materials、ソフトウェア部品表）</strong>
            は、システムがどのコンポーネントのどのバージョンに依存しているかを一覧化したものです。OWASPは、正確なインベントリ（在庫目録）を持つことがリスク特定の前提であり、SBOMなどの依存関係管理の仕組みがこのインベントリ作成に役立つと説明しています[15]。
          </p>

          <h3 id="63-サードパーティコンポーネントに対するqaチェック項目">
            6.3 サードパーティコンポーネントに対するQAチェック項目
          </h3>
          <div className="table-scroll">
            <table>
              <thead>
                <tr className="header">
                  <th>チェック項目</th>
                  <th>目的</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>既知の脆弱性（CVE）の有無</td>
                  <td>セキュリティリスクの早期発見</td>
                </tr>
                <tr className="even">
                  <td>ライセンス条件の確認</td>
                  <td>法的リスクの回避</td>
                </tr>
                <tr className="odd">
                  <td>最終更新日・メンテナンス状況</td>
                  <td>保守停止（EOL）リスクの把握</td>
                </tr>
                <tr className="even">
                  <td>バージョン固定（ピン留め）</td>
                  <td>意図しない自動アップデートによる破壊的変更の防止</td>
                </tr>
                <tr className="odd">
                  <td>インターフェース仕様のテスト（第5章のコントラクトテスト）</td>
                  <td>期待どおりに動作することの確認</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 id="64-信頼するが検証するという姿勢">6.4 「信頼するが検証する」という姿勢</h3>
          <p>
            サードパーティコンポーネントに対しては、ソースコードを読んで完全に理解することよりも、「公開されているインターフェース仕様どおりに動くこと」と「セキュリティ上の既知の問題を持ち込まないこと」を継続的に検証し続ける姿勢が現実的です。これは原著が強調する、コンポーネントベースシステムにおける品質保証が単発のテストではなく継続的なプロセスであるという考え方[1]とも一致します。
          </p>
        </section>

        <hr />

        {/* Section 7: 7. 現実的な依存関係を使ったテスト */}
        <section>
          <h2 id="7-現実的な依存関係を使ったテスト">7. 現実的な依存関係を使ったテスト</h2>

          <h3 id="71-モックだけでは見えないもの">7.1 モックだけでは見えないもの</h3>
          <p>
            単体テストではモックを使って依存関係を切り離すのが定石ですが、モックはあくまで「自分がそう思い込んでいる依存先の振る舞い」を再現しているに過ぎません。実際のデータベースやメッセージキューが持つ細かな挙動の違い（SQLの方言、トランザクションの分離レベルなど）は、モックでは検出できないことがあります。
          </p>

          <h3 id="72-testcontainersという選択肢">7.2 Testcontainersという選択肢</h3>
          <p>
            <strong>Testcontainers</strong>
            は、Dockerコンテナとして提供される「使い捨て」の実サービス（データベース、メッセージキュー、キャッシュなど）をテストコードから直接起動・破棄できるライブラリです。公式ドキュメントは、Testcontainersを使うことでモックやインメモリサービスに頼らず、本番で使うものと同じ種類のサービスに対してテストを書けると説明しています[17][18]。
          </p>
          <div className="mermaid-wrap">
            <Mermaid chart={DIAGRAM_9} />
          </div>
          <p>
            各テスト（またはテストクラス）の実行に合わせてコンテナのライフサイクルが管理されるため、「前回のテストで残ったゴミデータ」に悩まされることもなく、テスト終了時には確実にクリーンアップされます。
          </p>

          <h3 id="73-モックと実物どちらを使うべきか">7.3 モックと実物、どちらを使うべきか</h3>
          <div className="table-scroll">
            <table>
              <thead>
                <tr className="header">
                  <th>観点</th>
                  <th>モック/スタブ</th>
                  <th>Testcontainers（実物）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>実行速度</td>
                  <td>非常に速い</td>
                  <td>やや遅い（コンテナ起動時間）</td>
                </tr>
                <tr className="even">
                  <td>本番との忠実度</td>
                  <td>低い（思い込みに依存）</td>
                  <td>高い（実際のミドルウェアと同じ挙動）</td>
                </tr>
                <tr className="odd">
                  <td>セットアップの手間</td>
                  <td>少ない</td>
                  <td>Dockerが必要</td>
                </tr>
                <tr className="even">
                  <td>向いているテストレベル</td>
                  <td>単体テスト</td>
                  <td>統合テスト・コンポーネントテスト</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            両者は対立するものではなく、テストピラミッドの中で役割分担するのが基本です。単体テストは高速なモックで数を稼ぎ、統合テストではTestcontainersのような実物に近い依存関係を使って忠実度を確保します。
          </p>
        </section>

        <hr />

        {/* Section 8: 8. テストの「質」を測る：カバレッジとミューテーションテスト */}
        <section>
          <h2 id="8-テストの質を測るカバレッジとミューテーションテスト">
            8. テストの「質」を測る：カバレッジとミューテーションテスト
          </h2>
          <h3 id="81-コードカバレッジの限界">8.1 コードカバレッジの限界</h3>
          <p>
            「カバレッジ80%達成」といった目標はよく聞かれますが、カバレッジはあくまで「そのコードがテスト実行中に通過したかどうか」を示すだけで、「そのコードの結果が正しく検証されたかどうか」までは保証しません。アサーションのないテストでも、コードを実行しさえすればカバレッジは上がってしまいます。
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr className="header">
                  <th>カバレッジの種類</th>
                  <th>測定対象</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>行カバレッジ（Line Coverage）</td>
                  <td>実行された行の割合</td>
                </tr>
                <tr className="even">
                  <td>分岐カバレッジ（Branch Coverage）</td>
                  <td>条件分岐の各方向が実行された割合</td>
                </tr>
                <tr className="odd">
                  <td>パスカバレッジ（Path Coverage）</td>
                  <td>取りうる実行経路が網羅された割合</td>
                </tr>
                <tr className="even">
                  <td>ミューテーションカバレッジ（後述）</td>
                  <td>テストが実際にバグを検出できる能力の割合</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 id="82-ミューテーションテストという発想">
            8.2 ミューテーションテストという発想
          </h3>
          <p>
            <strong>ミューテーションテスト</strong>
            は、「テストの質そのもの」を測定する手法です。代表的なJVM向けツールPIT（PITest）の公式サイトによれば、まずコードに小さな欠陥（ミュータント）を自動的に埋め込み、その状態でテストスイートを実行し、テストが失敗すればそのミュータントは「Killed（撃退された）」、成功してしまえば「Survived（生き残った）」と判定します[19]。テストの質は、この撃退されたミュータントの割合（ミューテーションスコア）で測ることができます[19]。
          </p>
          <div className="mermaid-wrap">
            <Mermaid chart={DIAGRAM_10} />
          </div>
          <p>
            例えば、コード中の比較演算子<code>&gt;</code>が誤って<code>&gt;=</code>に書き換えられた「ミュータント」に対してテストが何も反応しなければ、そのテストは境界値をきちんと検証できていないということが分かります。ミューテーションテストは実行コストが高いため、コミットのたびに実行するのではなく、定期的なバッチやリリース前のゲートとして使うのが現実的です。
          </p>

          <h3 id="83-コンポーネント単位での品質メトリクス">
            8.3 コンポーネント単位での品質メトリクス
          </h3>
          <p>
            原著が強調するもう1つの観点は、品質を「テストの合否」という一点だけでなく、継続的に追跡できるメトリクスとして捉えることです[1]。実務でよく使われる指標を以下にまとめます。
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr className="header">
                  <th>メトリクス</th>
                  <th>意味</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>欠陥密度（Defect Density）</td>
                  <td>コンポーネントの規模あたりに検出された欠陥の数</td>
                </tr>
                <tr className="even">
                  <td>テストカバレッジ</td>
                  <td>テストが通過したコードの割合</td>
                </tr>
                <tr className="odd">
                  <td>ミューテーションスコア</td>
                  <td>テストが実際に欠陥を検出できる能力の割合</td>
                </tr>
                <tr className="even">
                  <td>平均故障間隔（MTBF）</td>
                  <td>障害と障害の間の平均稼働時間</td>
                </tr>
                <tr className="odd">
                  <td>依存関係の脆弱性件数</td>
                  <td>SCAツールで検出された未対応の既知脆弱性の数</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr />

        {/* Section 9: 9. 品質特性と非機能テスト */}
        <section>
          <h2 id="9-品質特性と非機能テスト">9. 品質特性と非機能テスト</h2>
          <h3 id="91-コンポーネントベースシステムにおける品質特性">
            9.1 コンポーネントベースシステムにおける品質特性
          </h3>
          <p>
            原著は、コンポーネントおよびコンポーネントベースシステムの品質を評価する観点として、機能性・信頼性・性能・保守性・移植性・使用性といった品質特性を体系的に検証することの重要性を説いています[1]。これは現在のISO/IEC
            25010（旧ISO/IEC 9126）が定める品質特性モデルとも通底する考え方です。
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr className="header">
                  <th>品質特性</th>
                  <th>コンポーネントベースシステムにおける具体例</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>機能性</td>
                  <td>インターフェース仕様どおりの入出力が得られるか</td>
                </tr>
                <tr className="even">
                  <td>信頼性</td>
                  <td>
                    依存先コンポーネントの障害時にどう振る舞うか（リトライ、フォールバック）
                  </td>
                </tr>
                <tr className="odd">
                  <td>性能効率性</td>
                  <td>コンポーネント間通信のレイテンシ、スループット</td>
                </tr>
                <tr className="even">
                  <td>保守性</td>
                  <td>コンポーネントの差し替え・バージョンアップの容易さ</td>
                </tr>
                <tr className="odd">
                  <td>移植性</td>
                  <td>異なる実行環境やクラウド間での可搬性</td>
                </tr>
                <tr className="even">
                  <td>互換性</td>
                  <td>新旧バージョンの共存、契約の後方互換性</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 id="92-コンポーネントの性能テスト">9.2 コンポーネントの性能テスト</h3>
          <p>
            コンポーネント単体では性能に問題がなくても、複数のコンポーネントを直列・並列に組み合わせたときにボトルネックが発生することがあります。性能テストでは、単一コンポーネントの応答時間だけでなく、コンポーネント間の呼び出し連鎖（コールチェーン）全体のレイテンシやタイムアウト設定の妥当性を検証する必要があります。
          </p>

          <h3 id="93-検証verificationと妥当性確認validation">
            9.3 検証（Verification）と妥当性確認（Validation）
          </h3>
          <p>
            品質保証の文脈では、「検証（Verification）」と「妥当性確認（Validation）」はしばしば次のように区別されます。
          </p>
          <ul>
            <li>
              <strong>検証（Verification）</strong>：「正しく作られているか（Are we
              building the product
              right）」を確認する活動。仕様どおりに実装されているかのチェック
            </li>
            <li>
              <strong>妥当性確認（Validation）</strong>：「正しいものを作っているか（Are
              we building the right
              product）」を確認する活動。ユーザーの実際のニーズを満たしているかのチェック
            </li>
          </ul>
          <p>
            コンポーネントベースシステムでは、個々のコンポーネントの検証（契約どおりに動くか）と、システム全体の妥当性確認（ユーザーの業務要件を満たしているか）の両方が必要であり、どちらか一方だけでは品質保証として不十分です。
          </p>
        </section>

        <hr />

        {/* Section 10: 10. CI/CDにおける継続的テストパイプライン */}
        <section>
          <h2 id="10-cicdにおける継続的テストパイプライン">
            10. CI/CDにおける継続的テストパイプライン
          </h2>
          <h3 id="101-テストピラミッドをパイプラインに落とし込む">
            10.1 テストピラミッドをパイプラインに落とし込む
          </h3>
          <p>
            ここまでに説明してきた各テストレベルは、実行時間とフィードバック速度が異なります。これをCI/CDパイプラインの中でどう配置するかが、開発チームの生産性を大きく左右します。
          </p>
          <div className="mermaid-wrap">
            <Mermaid chart={DIAGRAM_11} />
          </div>
          <p>
            Googleのテストブログは、E2Eテストへの過度な依存がパイプライン全体を不安定にすると警告しており、コミットのたびに実行する軽量なテスト（単体・コンポーネント・コントラクト）と、定期的にしか実行しない重量級のテスト（E2E）を明確に使い分けることを推奨しています[6]。
          </p>

          <h3 id="102-速いテストを頻繁に遅いテストをたまにという原則">
            10.2 「速いテストを頻繁に、遅いテストをたまに」という原則
          </h3>
          <div className="table-scroll">
            <table>
              <thead>
                <tr className="header">
                  <th>実行タイミング</th>
                  <th>含めるべきテスト</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>コミットのたび（数分以内）</td>
                  <td>単体テスト、コンポーネントテスト、コントラクトテスト</td>
                </tr>
                <tr className="even">
                  <td>プルリクエストのマージ前</td>
                  <td>上記に加えて主要な統合テスト</td>
                </tr>
                <tr className="odd">
                  <td>定期実行（夜間・週次）</td>
                  <td>
                    フルのE2Eテスト、性能テスト、ミューテーションテスト、SCAスキャン
                  </td>
                </tr>
                <tr className="even">
                  <td>リリース前ゲート</td>
                  <td>セキュリティスキャン、契約の後方互換性チェック</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            このように実行タイミングを分けることで、開発者への即時フィードバックの速さと、リリース前の網羅的な品質保証の両方を実現できます。
          </p>
        </section>

        <hr />

        {/* Section 11: 11. まとめ：品質保証チェックリスト */}
        <section>
          <h2 id="11-まとめ品質保証チェックリスト">11. まとめ：品質保証チェックリスト</h2>
          <p>
            コンポーネントベースソフトウェアシステムのテストと品質保証を実践する際のチェックリストです。
          </p>
          <Checklist />
        </section>

        <hr />

        {/* Section 12: 12. 参考文献 */}
        <section>
          <h2 id="12-参考文献">12. 参考文献</h2>

          <h3 id="学術文献専門書籍">学術文献・専門書籍</h3>
          <div className="ref-grid">
            <div className="ref-card">
              <div className="ref-badge">1</div>
              <div className="ref-body">
                Jerry Gao, H.-S. J. Tsao, Ye Wu,{' '}
                <em>Testing and Quality Assurance for Component-based Software</em>,
                Artech House, 2003. Google Books:{' '}
                <a
                  href="https://books.google.co.jp/books/about/Testing_and_Quality_Assurance_for_Compon.html?id=oUEwDwAAQBAJ&redir_esc=y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://books.google.co.jp/books/about/Testing_and_Quality_Assurance_for_Compon.html?id=oUEwDwAAQBAJ&amp;redir_esc=y
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">2</div>
              <div className="ref-body">
                Clemens Szyperski,{' '}
                <em>Component Software: Beyond Object-Oriented Programming</em>,
                Addison-Wesley, 1998（定義の引用に関する解説）:{' '}
                <a
                  href="https://arxiv.org/pdf/0906.1667"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://arxiv.org/pdf/0906.1667
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">3</div>
              <div className="ref-body">
                <em>A Practical Guide to Testing Object-Oriented Software</em> —
                Component Models（Szyperskiの定義をテストの文脈で解説）:{' '}
                <a
                  href="https://www.oreilly.com/library/view/a-practical-guide/0201325640/0201325640_ch10lev1sec1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.oreilly.com/library/view/a-practical-guide/0201325640/0201325640_ch10lev1sec1.html
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">4</div>
              <div className="ref-body">
                ISTQB Glossary, <em>Component Testing</em> /{' '}
                <em>Component Integration Testing</em>:{' '}
                <a
                  href="https://glossary.istqb.org/en_US/term/component-testing-4-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://glossary.istqb.org/en_US/term/component-testing-4-3
                </a>
                、
                <a
                  href="https://istqb-glossary.page/component-integration-testing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://istqb-glossary.page/component-integration-testing/
                </a>
              </div>
            </div>
          </div>

          <h3 id="martin-fowler--thoughtworks">Martin Fowler / ThoughtWorks</h3>
          <div className="ref-grid">
            <div className="ref-card">
              <div className="ref-badge">5</div>
              <div className="ref-body">
                Martin Fowler, <em>TestPyramid</em> (bliki):{' '}
                <a
                  href="https://martinfowler.com/bliki/TestPyramid.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://martinfowler.com/bliki/TestPyramid.html
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">9</div>
              <div className="ref-body">
                Toby Clemson,{' '}
                <em>Testing Strategies in a Microservice Architecture</em>,
                martinfowler.com, 2014:{' '}
                <a
                  href="https://martinfowler.com/articles/microservice-testing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://martinfowler.com/articles/microservice-testing/
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">10</div>
              <div className="ref-body">
                Martin Fowler, <em>Software Testing Guide</em>:{' '}
                <a
                  href="https://martinfowler.com/testing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://martinfowler.com/testing/
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">11</div>
              <div className="ref-body">
                Martin Fowler, <em>TestDouble</em> / <em>IntegrationTest</em> (test
                categories タグ一覧):{' '}
                <a
                  href="https://martinfowler.com/tags/test%20categories.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://martinfowler.com/tags/test%20categories.html
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">13</div>
              <div className="ref-body">
                Ian Robinson,{' '}
                <em>Consumer-Driven Contracts: A Service Evolution Pattern</em>,
                martinfowler.com, 2006:{' '}
                <a
                  href="https://www.martinfowler.com/articles/consumerDrivenContracts.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.martinfowler.com/articles/consumerDrivenContracts.html
                </a>
              </div>
            </div>
          </div>

          <h3 id="google">Google</h3>
          <div className="ref-grid">
            <div className="ref-card">
              <div className="ref-badge">6</div>
              <div className="ref-body">
                Google Testing Blog, <em>Just Say No to More End-to-End Tests</em>,
                2015:{' '}
                <a
                  href="https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">7</div>
              <div className="ref-body">
                Google Testing Blog, <em>Test Sizes</em>, 2010:{' '}
                <a
                  href="https://testing.googleblog.com/2010/12/test-sizes.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://testing.googleblog.com/2010/12/test-sizes.html
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">8</div>
              <div className="ref-body">
                <em>Software Engineering at Google</em> — Chapter 14: Larger Testing:{' '}
                <a
                  href="https://abseil.io/resources/swe-book/html/ch14.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://abseil.io/resources/swe-book/html/ch14.html
                </a>
              </div>
            </div>
          </div>

          <h3 id="標準非営利団体">標準・非営利団体</h3>
          <div className="ref-grid">
            <div className="ref-card">
              <div className="ref-badge">15</div>
              <div className="ref-body">
                OWASP, <em>Component Analysis</em>:{' '}
                <a
                  href="https://owasp.org/www-community/Component_Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://owasp.org/www-community/Component_Analysis
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">16</div>
              <div className="ref-body">
                OWASP Dependency-Check:{' '}
                <a
                  href="https://owasp.github.io/www-project-dependency-check/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://owasp.github.io/www-project-dependency-check/
                </a>
              </div>
            </div>
          </div>

          <h3 id="ツール公式ドキュメント">ツール公式ドキュメント</h3>
          <div className="ref-grid">
            <div className="ref-card">
              <div className="ref-badge">12</div>
              <div className="ref-body">
                Pact Docs, <em>Introduction</em>:{' '}
                <a
                  href="https://docs.pact.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://docs.pact.io/
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">14</div>
              <div className="ref-body">
                Pact Docs, <em>How Pact Works</em>:{' '}
                <a
                  href="https://docs.pact.io/getting_started/how_pact_works"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://docs.pact.io/getting_started/how_pact_works
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">17</div>
              <div className="ref-body">
                Testcontainers, <em>Getting Started</em>:{' '}
                <a
                  href="https://testcontainers.com/getting-started/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://testcontainers.com/getting-started/
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">18</div>
              <div className="ref-body">
                Docker, <em>Testcontainers: Testing with Real Dependencies</em>:{' '}
                <a
                  href="https://www.docker.com/blog/testcontainers-testing-with-real-dependencies/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.docker.com/blog/testcontainers-testing-with-real-dependencies/
                </a>
              </div>
            </div>
            <div className="ref-card">
              <div className="ref-badge">19</div>
              <div className="ref-body">
                PIT Mutation Testing, 公式サイト:{' '}
                <a
                  href="https://pitest.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pitest.org/
                </a>
              </div>
            </div>
          </div>

          <hr />

          <p className="disclaimer">
            <em>
              本ガイドは、コンポーネントベースソフトウェアのテストとQAを体系的に学ぶための教育目的の資料です。実際のプロジェクトに適用する際は、チームの技術スタックやリスク許容度に応じて、テストレベルの比重やツール選定を調整してください。
            </em>
          </p>
        </section>
      </main>
    </div>
  );
}
