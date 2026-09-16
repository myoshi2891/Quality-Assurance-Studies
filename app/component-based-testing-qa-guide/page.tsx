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
      </main>
    </div>
  );
}
