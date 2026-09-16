import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
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
classDef riskStyle fill:#fdecea,stroke:#c0526e,color:#5a1420
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
      </main>
    </div>
  );
}
