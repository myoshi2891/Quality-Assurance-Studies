import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Checklist from './Checklist';
import Mermaid from '../../components/Mermaid';
import './software-test-design-guide.css';

export const metadata: Metadata = {
  title: "A Practitioner's Guide to Software Test Design 実践ガイド",
  description:
    "Lee Copeland 著『A Practitioner's Guide to Software Test Design』に基づくテスト設計技法の完全解説ガイド。同値分割・境界値分析・デシジョンテーブル・状態遷移・ペアワイズ・ユースケース・ホワイトボックステストまで網羅。",
};

const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#fffdf8",
    "primaryColor": "#fffdf8",
    "primaryTextColor": "#241f1a",
    "primaryBorderColor": "#34408f",
    "lineColor": "#5b5347",
    "secondaryColor": "#f3e6c8",
    "secondaryTextColor": "#241f1a",
    "tertiaryColor": "#f2e5f1",
    "tertiaryTextColor": "#241f1a",
    "textColor": "#241f1a",
    "nodeTextColor": "#241f1a",
    "titleColor": "#241f1a",
    "edgeLabelColor": "#241f1a",
    "edgeLabelBackground": "#f3e6c8",
    "stateLabelColor": "#241f1a",
    "stateBkg": "#fffdf8",
    "stateBorder": "#34408f",
    "transitionColor": "#5b5347",
    "transitionLabelColor": "#241f1a",
    "specialStateColor": "#34408f",
    "labelColor": "#241f1a",
    "mainBkg": "#fffdf8",
    "nodeBorder": "#34408f",
    "fontFamily": "'Inter', -apple-system, sans-serif",
    "fontSize": "15px"
  },
  "flowchart": {
    "useMaxWidth": false,
    "htmlLabels": true
  },
  "stateDiagram": {
    "useMaxWidth": false
  }
}}%%`;

const DIAGRAM_PROCESS = `${MERMAID_CONFIG}
flowchart TB
    classDef hub fill:#f3e6c8,stroke:#a9760f,color:#241f1a
    classDef done fill:#e2efe3,stroke:#2f6b42,color:#16321f
    A["要件・仕様・ユーザーストーリーを理解する"] --> B["テストベースを分析する"]
    B --> C["リスクを特定する"]
    C --> D["適した技法を選ぶ"]
    D --> E["テスト条件を洗い出す"]
    E --> F["テストケースを設計する"]
    F --> G["テストデータを準備する"]
    G --> H["テストケースをレビューする"]
    H --> I{"カバレッジは十分か"}
    I -->|不足| E
    I -->|十分| J["テストを実行する"]
    J --> K["結果を分析し保守する"]
    class A hub
    class K done`;

const DIAGRAM_STATE = `${MERMAID_CONFIG}
stateDiagram-v2
    [*] --> カート中
    カート中 --> 注文確定: 注文を確定する
    カート中 --> カート中: 商品を追加削除する
    注文確定 --> 発送準備中: 決済が完了する
    注文確定 --> キャンセル済み: 注文をキャンセルする
    発送準備中 --> 発送済み: 出荷処理をする
    発送準備中 --> キャンセル済み: 出荷前にキャンセルする
    発送済み --> 配達完了: 配達が完了する
    キャンセル済み --> [*]
    配達完了 --> [*]`;

const DIAGRAM_USECASE = `${MERMAID_CONFIG}
flowchart TB
    classDef hub fill:#f3e6c8,stroke:#a9760f,color:#241f1a
    classDef done fill:#e2efe3,stroke:#2f6b42,color:#16321f
    Start(["カートに商品がある状態から開始する"]) --> Step1["注文内容を確認する"]
    Step1 --> Step2["配送先を選択する"]
    Step2 --> Step3["決済方法を選択する"]
    Step3 --> Step4["注文を確定する"]
    Step4 --> End(["注文確定メールが届いて終了する"])
    Step2 --> Alt1["代替フローとして新しい配送先を登録する"]
    Alt1 --> Step3
    Step3 --> Exc1["例外フローとして決済が失敗する"]
    Exc1 --> Step3
    Step1 --> Exc2["例外フローとして在庫切れの商品がある"]
    Exc2 --> Step1
    class Start hub
    class End done`;

const DIAGRAM_COVERAGE = `${MERMAID_CONFIG}
flowchart TB
    B["分岐カバレッジ100%"] --> A["ステートメントカバレッジ100%を必ず満たす"]`;

const DIAGRAM_SELECT = `${MERMAID_CONFIG}
flowchart TB
    classDef hub fill:#f3e6c8,stroke:#a9760f,color:#241f1a
    classDef done fill:#e2efe3,stroke:#2f6b42,color:#16321f
    Start(["テスト対象の性質を確認する"])
    Start --> Q1{"入力に有効範囲・数値レンジがあるか"}
    Q1 -->|はい| T1["同値分割と境界値分析を採用する"]
    T1 --> Q2{"結果が複数条件の組み合わせで決まるか"}
    Q1 -->|いいえ| Q2
    Q2 -->|はい| T2["デシジョンテーブルテストを追加する"]
    T2 --> Q3{"操作履歴によって挙動が変わるか"}
    Q2 -->|いいえ| Q3
    Q3 -->|はい| T3["状態遷移テストを追加する"]
    T3 --> Q4{"独立した設定項目が多数組み合わさるか"}
    Q3 -->|いいえ| Q4
    Q4 -->|はい| T4["ペアワイズ・組み合わせテストを追加する"]
    T4 --> Q5{"一連の業務フローを検証したいか"}
    Q4 -->|いいえ| Q5
    Q5 -->|はい| T5["ユースケーステストを追加する"]
    T5 --> Check{"Q1からQ5でひとつでも技法を選んだか"}
    Q5 -->|いいえ| Check
    Check -->|はい| Goal["選択した技法を組み合わせて設計する"]
    Check -->|いいえ| Fallback["ドメイン分析・経験ベーステストで補う"]
    class Start hub
    class Goal done
    class Fallback done`;

export default function SoftwareTestDesignGuidePage() {
  return (
    <div className="software-test-design-page">
      <div className="layout">
        <NavBar />

        <div className="content">
          <header className="hero">
            <p className="eyebrow ui">Beginner&apos;s Step-by-Step Guide</p>
            <h1>A Practitioner&apos;s Guide to Software Test Design 実践ガイド</h1>
            <p className="subtitle">
              〜初学者のためのステップバイステップ・ベストプラクティス〜
            </p>
            <div className="hero-quote">
              本ガイドは、Lee Copeland 著『A Practitioner&apos;s Guide to Software Test
              Design』(Artech House, 2004)
              を土台にしながら、ISTQB（国際ソフトウェアテスト資格委員会）のシラバスや、Martin
              Fowler、Cem Kaner、James Bach &amp; Michael Bolton、Ministry of Testing
              など国際的に著名なテスト実務家・開発者の一次情報を交え、2026年8月時点の情報でアップデートしてまとめたものです。
            </div>
            <div className="hero-meta">
              <span className="chip">
                <i className="ti ti-book" aria-hidden="true" />
                原著：Lee Copeland (2004)
              </span>
              <span className="chip">
                <i className="ti ti-certificate" aria-hidden="true" />
                ISTQB CTFL v4.0.1 対応
              </span>
              <span className="chip">
                <i className="ti ti-calendar" aria-hidden="true" />
                2026年8月時点の情報
              </span>
            </div>
          </header>

          {/* 01 */}
          <section className="section" id="s01">
            <div className="section-head">
              <span className="section-num ui">01</span>
              <h2>この記事について</h2>
            </div>
            <div className="prose">
              <p className="lede">
                <strong>対象読者</strong>
                ：ソフトウェアテストを学び始めたばかりの初学者、QAエンジニアを目指す方、開発者でテストケース設計の基礎を体系的に学びたい方。
              </p>
              <h3>書籍情報</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>項目</th>
                      <th>内容</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>書名</td>
                      <td>A Practitioner&apos;s Guide to Software Test Design</td>
                    </tr>
                    <tr>
                      <td>著者</td>
                      <td>Lee Copeland</td>
                    </tr>
                    <tr>
                      <td>出版社</td>
                      <td>Artech House</td>
                    </tr>
                    <tr>
                      <td>出版年</td>
                      <td>2004年</td>
                    </tr>
                    <tr>
                      <td>位置づけ</td>
                      <td>
                        ブラックボックス／ホワイトボックスのテスト設計技法を、実務的な視点から一冊にまとめた入門〜実践書
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                原著は出版から20年以上が経過していますが、そこで扱われている
                <strong>
                  同値分割・境界値分析・デシジョンテーブル・状態遷移・ドメインテスト・ペアワイズ・ユースケーステスト・ホワイトボックスカバレッジ
                </strong>
                といった技法は、今なお「テスト設計の共通言語」としての価値を持っています。
              </p>
              <p>
                ただし、Copeland が扱う技法の一覧と ISTQB Foundation Level
                シラバス（2024年9月15日付の v4.0.1
                が最新版）の収録範囲は同一ではありません。初学者が資格学習と併読する際に混乱しやすい点なので、対応関係を整理しておきます。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Copeland が扱う技法</th>
                      <th>CTFL v4.0.1 での扱い</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>同値分割／境界値分析／デシジョンテーブル／状態遷移</td>
                      <td>ブラックボックス技法（4.2節）として収録</td>
                    </tr>
                    <tr>
                      <td>ユースケーステスト</td>
                      <td>
                        シラバスの範囲外（v3.1 までは収録されていたが、v4.0
                        でブラックボックス技法から外れた）
                      </td>
                    </tr>
                    <tr>
                      <td>ドメインテスト</td>
                      <td>
                        シラバスの範囲外（上位資格や実務知識として扱われる）
                      </td>
                    </tr>
                    <tr>
                      <td>ペアワイズ（直交表・組み合わせ）テスト</td>
                      <td>シラバスの範囲外</td>
                    </tr>
                    <tr>
                      <td>データフローテスト</td>
                      <td>シラバスの範囲外</td>
                    </tr>
                    <tr>
                      <td>ホワイトボックスカバレッジ</td>
                      <td>
                        4.3節でステートメントテストとブランチテストに限定して収録
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="callout note">
                <i className="ti ti-info-circle" aria-hidden="true" />
                <div>
                  <strong>ポイント</strong>
                  <p>
                    CTFL v4.0.1
                    のホワイトボックス領域は<strong>ステートメントテストとブランチテストが中心</strong>です。本ガイドで後述するパスカバレッジやデータフローテストは、シラバスを超えた実務向けの発展的な内容として読んでください。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 02 */}
          <section className="section" id="s02">
            <div className="section-head">
              <span className="section-num ui">02</span>
              <h2>ソフトウェアテスト設計とは何か</h2>
            </div>
            <div className="prose">
              <h3>なぜ「全部テストする」ことができないのか</h3>
              <p>
                たとえば「1〜100の整数を2つ入力して合計を返す」という単純な関数でも、入力の組み合わせは
                100 × 100 = 10,000
                通りあります。実際のソフトウェアは文字列・日付・複数の設定項目・外部システムとの連携などが絡み合うため、理論上の組み合わせ数は瞬く間に天文学的な数字（いわゆる「組み合わせ爆発」）になります。
              </p>
              <p>
                <strong>
                  テスト設計とは、「限られた時間と人員の中で、欠陥を発見できる可能性が高いテストケースを、体系的な方法で選び出す技術」
                </strong>
                です。勘や経験だけに頼るのではなく、再現性のある手順（技法）に沿ってテストケースを導出することで、次のようなメリットが得られます。
              </p>
              <ul>
                <li>少ないテストケース数で高いカバレッジを得られる</li>
                <li>
                  テスト担当者が変わっても同じ考え方でテストケースを再現・レビューできる
                </li>
                <li>
                  「なぜこのテストケースが必要か」を第三者に説明できる（トレーサビリティ）
                </li>
                <li>見落としやすい境界条件や組み合わせ条件を体系的に拾える</li>
              </ul>
              <h3>テストケースを構成する要素</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>要素</th>
                      <th>説明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>テスト条件</td>
                      <td>
                        何を検証したいか（例：「未成年は購入できないこと」）
                      </td>
                    </tr>
                    <tr>
                      <td>テストケース</td>
                      <td>具体的な入力値・手順・期待結果のセット</td>
                    </tr>
                    <tr>
                      <td>テストデータ</td>
                      <td>テストケースを実行するために必要な具体的な値</td>
                    </tr>
                    <tr>
                      <td>期待結果</td>
                      <td>正しい挙動として期待される出力・状態変化</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 03 */}
          <section className="section" id="s03">
            <div className="section-head">
              <span className="section-num ui">03</span>
              <h2>
                書籍紹介：Lee Copeland『A Practitioner&apos;s Guide to Software Test Design』
              </h2>
            </div>
            <div className="prose">
              <p>
                Copeland は、Software Quality Engineering
                社でテスト手法・テストマネジメントのコンサルタントを務めた、25年以上のキャリアを持つ実務家です。本書の特徴は、
                <strong>
                  各技法を「理論より先に簡単な具体例から入り、その後で詳しく解説する」という一貫した構成
                </strong>
                を取っている点にあります。各章末には要点のまとめと演習問題があり、巻末には「Brown
                &amp; Donaldson」（オンライン証券会社）と「Stateless University
                Registration
                System」（大学の履修登録システム）という2つのケーススタディが付属し、各技法の実例として使われています。
              </p>
              <h3>原著の章構成（概要）</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>章</th>
                      <th>主なテーマ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>テストプロセス全体の考え方</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>同値分割 (Equivalence Class Testing)</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>境界値分析 (Boundary Value Testing)</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>デシジョンテーブルテスト</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>ペアワイズテスト</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>状態遷移テスト</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>ドメインテスト</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>ユースケーステスト</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>
                        ステートメント・分岐・パス・制御フローテスト（ホワイトボックス）
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>データフローテスト</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>
                        Some Final Thoughts — Your Testing Toolbox（技法の使い分けまとめ）
                      </td>
                    </tr>
                    <tr>
                      <td>付録</td>
                      <td>ケーススタディ2本、参考文献</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                このガイドでは、この章構成を尊重しつつ、現在の ISTQB
                用語・分類（ブラックボックス技法／ホワイトボックス技法／経験ベース技法）に合わせて再整理して解説します。
              </p>
            </div>
          </section>

          {/* 04 */}
          <section className="section" id="s04">
            <div className="section-head">
              <span className="section-num ui">04</span>
              <h2>テスト設計プロセスの全体像（ステップバイステップ）</h2>
            </div>
            <div className="prose">
              <p>
                まず、個別の技法に入る前に、テスト設計が開発プロセス全体の中でどのステップで行われるかを俯瞰します。
              </p>
              <div className="mermaid-wrapper">
                <div className="diagram-caption">図1 — テスト設計プロセス全体の流れ</div>
                <div className="mermaid-target" id="diagram-process">
                  <Mermaid chart={DIAGRAM_PROCESS} />
                </div>
              </div>
              <h4>各ステップのポイント</h4>
              <ol className="step-list">
                <li>
                  <span className="step-num">1</span>
                  <div className="step-body">
                    <strong>要件の理解</strong>
                    <p>
                      仕様書・ユーザーストーリー・受け入れ基準を読み込み、不明点は開発者やプロダクトオーナーに確認する。
                    </p>
                  </div>
                </li>
                <li>
                  <span className="step-num">2</span>
                  <div className="step-body">
                    <strong>テストベースの分析</strong>
                    <p>
                      何（仕様書、画面設計、API定義、過去の不具合履歴など）を根拠にテストを作るかを明確にする。
                    </p>
                  </div>
                </li>
                <li>
                  <span className="step-num">3</span>
                  <div className="step-body">
                    <strong>リスク特定</strong>
                    <p>
                      全機能を均等にテストするのではなく、影響範囲が大きい・複雑・変更頻度が高い箇所を優先する（リスクベースドテスト）。
                    </p>
                  </div>
                </li>
                <li>
                  <span className="step-num">4</span>
                  <div className="step-body">
                    <strong>技法選択</strong>
                    <p>
                      後述の「比較と選び方」を参照し、対象の性質（数値範囲か、条件の組み合わせか、状態遷移かなど）に合った技法を選ぶ。
                    </p>
                  </div>
                </li>
                <li>
                  <span className="step-num">5</span>
                  <div className="step-body">
                    <strong>テスト条件の洗い出し → テストケース設計</strong>
                    <p>技法に従って機械的にテスト条件・ケースを導出する。</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">6</span>
                  <div className="step-body">
                    <strong>レビュー</strong>
                    <p>
                      他のメンバーによるレビューを経て、抜け漏れや誤りを減らす。
                    </p>
                  </div>
                </li>
                <li>
                  <span className="step-num">7</span>
                  <div className="step-body">
                    <strong>実行と保守</strong>
                    <p>
                      実行結果を記録し、仕様変更に応じてテストケースを更新し続ける。
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* 05 */}
          <section className="section" id="s05">
            <div className="section-head">
              <span className="section-num ui">05</span>
              <h2>本ガイドを通して使う共通例：オンラインショップの注文システム</h2>
            </div>
            <div className="prose">
              <p>
                以降の各技法セクションでは、理解しやすくするために次の共通例を使い回します。
              </p>
              <div className="callout note">
                <i className="ti ti-shopping-cart" aria-hidden="true" />
                <div>
                  <strong>架空のシステム「ShopEasy」の注文機能</strong>
                  <ul>
                    <li>
                      会員登録時に<strong>年齢</strong>を入力する（<strong>18歳〜120歳</strong>のみ登録可能）
                    </li>
                    <li>
                      注文確定時、<strong>会員ランク（一般／ゴールド／プラチナ）</strong>、<strong>注文金額</strong>、<strong>クーポンの有無</strong>の組み合わせで<strong>割引率</strong>が決まる
                    </li>
                    <li>
                      注文は
                      <strong>
                        カート → 注文確定 → 発送準備 → 発送済み → 配達完了
                      </strong>
                      という状態を遷移し、途中で<strong>キャンセル</strong>も可能
                    </li>
                    <li>
                      チェックアウト画面は<strong>ブラウザ（Chrome／Safari／Edge）</strong>、<strong>OS（Windows／macOS／iOS）</strong>、<strong>決済方法（クレジットカード／コンビニ払い／電子マネー）</strong>の組み合わせで検証する必要がある
                    </li>
                    <li>
                      「商品を注文する」という一連の業務フロー（ユースケース）がある
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 06 */}
          <section className="section" id="s06">
            <div className="section-head">
              <span className="section-num ui">06</span>
              <h2>同値分割（Equivalence Partitioning）</h2>
            </div>
            <div className="prose">
              <p>
                <strong>考え方</strong>
                ：入力（または出力）を、「同じ挙動をするはず」の値のグループ（同値クラス）に分割し、各グループから代表値を1つ選んでテストする技法です。全部の値を試す代わりに、各グループの代表だけをテストすれば十分だと考えます。
              </p>
              <h4>手順</h4>
              <ol className="step-list">
                <li>
                  <span className="step-num">1</span>
                  <div className="step-body">
                    <p>入力・出力の仕様から「有効」と「無効」の範囲を特定する</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">2</span>
                  <div className="step-body">
                    <p>それぞれの範囲を同値クラスに分割する</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">3</span>
                  <div className="step-body">
                    <p>各同値クラスから最低1つの代表値を選ぶ</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">4</span>
                  <div className="step-body">
                    <p>
                      無効な同値クラスは、原則として1クラスにつき1テストケースとする（複数の無効値を同時に入れると、どちらが原因でエラーになったか分からなくなるため）
                    </p>
                  </div>
                </li>
              </ol>
              <h4>共通例への適用：会員登録の年齢入力（18〜120歳が有効）</h4>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>同値クラス</th>
                      <th>範囲</th>
                      <th>代表値の例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>無効（下限未満）</td>
                      <td>17歳以下（負値を含む）</td>
                      <td>10, -1</td>
                    </tr>
                    <tr>
                      <td>有効</td>
                      <td>18〜120歳</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>無効（上限超過）</td>
                      <td>121歳以上</td>
                      <td>150</td>
                    </tr>
                    <tr>
                      <td>無効（型不正）</td>
                      <td>数値以外・空欄</td>
                      <td>&quot;abc&quot;, &quot;&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="callout note">
                <i className="ti ti-alert-triangle" aria-hidden="true" />
                <div>
                  <strong>注意点</strong>
                  <p>
                    同値分割だけでは「17歳と18歳のどちらで境界が切り替わるか」といった<strong>境界線上の誤り</strong>（オフバイワン・エラーなど）を見つけにくいという弱点があります。そのため、次に説明する境界値分析と必ずセットで使うのが実務上のベストプラクティスです。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 07 */}
          <section className="section" id="s07">
            <div className="section-head">
              <span className="section-num ui">07</span>
              <h2>境界値分析（Boundary Value Analysis）</h2>
            </div>
            <div className="prose">
              <p>
                <strong>考え方</strong>
                ：「バグは範囲の境界付近に集中しやすい」という経験則に基づき、同値クラスの<strong>端の値とその前後</strong>を重点的にテストする技法です。境界値分析は同値分割を土台にした技法であり、単独ではなくペアで使われます。
              </p>
              <h4>手順（2点境界値分析の場合）</h4>
              <ol className="step-list">
                <li>
                  <span className="step-num">1</span>
                  <div className="step-body">
                    <p>同値分割で各クラスの範囲を確定する</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">2</span>
                  <div className="step-body">
                    <p>
                      各境界について「境界の値そのもの」と「境界のすぐ外側の値」の2点をテストする
                    </p>
                  </div>
                </li>
                <li>
                  <span className="step-num">3</span>
                  <div className="step-body">
                    <p>
                      3点境界値分析（より厳密な方式）では、境界の内側・境界そのもの・境界の外側の3点をテストする
                    </p>
                  </div>
                </li>
              </ol>
              <h4>共通例への適用：年齢入力（有効範囲 18〜120）</h4>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>境界</th>
                      <th>テスト値</th>
                      <th>期待結果</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>下限の外側</td>
                      <td>17</td>
                      <td>登録エラーになる</td>
                    </tr>
                    <tr>
                      <td>下限そのもの</td>
                      <td>18</td>
                      <td>登録できる</td>
                    </tr>
                    <tr>
                      <td>下限の内側</td>
                      <td>19</td>
                      <td>登録できる</td>
                    </tr>
                    <tr>
                      <td>上限の内側</td>
                      <td>119</td>
                      <td>登録できる</td>
                    </tr>
                    <tr>
                      <td>上限そのもの</td>
                      <td>120</td>
                      <td>登録できる</td>
                    </tr>
                    <tr>
                      <td>上限の外側</td>
                      <td>121</td>
                      <td>登録エラーになる</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="callout source">
                <i className="ti ti-quote" aria-hidden="true" />
                <div>
                  <strong>出典に基づく補足</strong>
                  <p>
                    <strong>境界付近では欠陥が見つかりやすい</strong>
                    というのは、テスト実務で広く共有されている経験則です（ISTQB
                    CTFL
                    シラバスも、境界値分析を同値分割と併用すべき中核技法として位置づけています）。具体的に何割の欠陥が境界に集中するかを示す信頼できる測定データは確認できていないため、本ガイドでは数値を挙げません。少ないテストケース数で効果が期待できる技法として、同値分割とセットで実施してください。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 08 */}
          <section className="section" id="s08">
            <div className="section-head">
              <span className="section-num ui">08</span>
              <h2>デシジョンテーブルテスト</h2>
            </div>
            <div className="prose">
              <p>
                <strong>考え方</strong>
                ：出力（振る舞い）が<strong>複数の条件の組み合わせ</strong>によって決まる場合に有効な技法です。条件と結果（アクション）を表形式に整理することで、「業務ルールの抜け漏れ」を視覚的に発見できます。ISTQBシラバスでも「複雑なビジネスルールを記録するための効果的な方法」として紹介されています。
              </p>
              <h4>手順</h4>
              <ol className="step-list">
                <li>
                  <span className="step-num">1</span>
                  <div className="step-body">
                    <p>結果に影響する条件をすべて洗い出す</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">2</span>
                  <div className="step-body">
                    <p>各条件がとりうる値（多くは Yes/No）を列挙する</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">3</span>
                  <div className="step-body">
                    <p>
                      条件の組み合わせをすべて列挙し、各組み合わせに対応するアクション（結果）を定義する
                    </p>
                  </div>
                </li>
                <li>
                  <span className="step-num">4</span>
                  <div className="step-body">
                    <p>
                      同じアクションになる組み合わせをまとめて整理する（テーブルの圧縮）
                    </p>
                  </div>
                </li>
                <li>
                  <span className="step-num">5</span>
                  <div className="step-body">
                    <p>各列（ルール）を最低1つのテストケースにする</p>
                  </div>
                </li>
              </ol>
              <h4>共通例への適用：会員ランク × 注文金額 × クーポンによる割引ルール</h4>
              <p>
                まず割引の要件を明確に定義します。<strong>プラチナ会員は基本10%、注文金額が1万円以上なら+5%、クーポンを持っていれば+5%</strong>（非プラチナ会員の基本は0%）とします。条件が3つ・各条件が
                Yes/No の2値なので、組み合わせは 2³ =
                8通りです。8通りすべてを列挙すると次のようになります。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>条件</th>
                      <th>ルール1</th>
                      <th>ルール2</th>
                      <th>ルール3</th>
                      <th>ルール4</th>
                      <th>ルール5</th>
                      <th>ルール6</th>
                      <th>ルール7</th>
                      <th>ルール8</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>会員ランクがプラチナか</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>注文金額が1万円以上か</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>No</td>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>クーポンを持っているか</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td><strong>結果：割引率</strong></td>
                      <td><strong>20%</strong></td>
                      <td><strong>15%</strong></td>
                      <td><strong>15%</strong></td>
                      <td><strong>10%</strong></td>
                      <td><strong>10%</strong></td>
                      <td><strong>5%</strong></td>
                      <td><strong>5%</strong></td>
                      <td><strong>0%</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                なお、ここでの「会員ランクがプラチナか」が No
                のケース（ルール5〜8）には、<strong>ゴールド会員も一般会員も含まれます</strong>。つまりこの表は「プラチナか、それ以外か」という2値でしか会員ランクを見ていません。ゴールド会員に固有の割引ルールが要件に存在する場合は、条件を「プラチナ／ゴールド／一般」の3値に拡張する必要があり、その時点で組み合わせは
                3 × 2 × 2 =
                12通りに増えます。条件の値域を2値に単純化してよいかどうかは、必ず要件に立ち返って確認してください。
              </p>
              <p>
                このように8通りを漏れなく列挙すると、「一般会員がクーポンなしで1万円未満の注文をした場合」（ルール8）はもちろん、うっかり定義から漏れやすい「一般会員がクーポンなしで1万円以上の注文をした場合」（ルール6）や「プラチナ会員がクーポンなしで1万円未満の注文をした場合」（ルール4）といった組み合わせも確実に押さえられます。
              </p>
              <div className="callout note">
                <i className="ti ti-info-circle" aria-hidden="true" />
                <div>
                  <strong>テーブルの圧縮について</strong>
                  <p>
                    同じアクションになる列は「–（don&apos;t
                    care）」でまとめられますが、圧縮は「その条件が本当に結果に影響しない」ことを確認してから行ってください。上の例ではルール1とルール2の割引率が異なる（20%
                    と
                    15%）ため、クーポンの列を「–」でまとめることはできません。安易に「–」を置くと、未定義の組み合わせが表から消えてしまいます。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 09 */}
          <section className="section" id="s09">
            <div className="section-head">
              <span className="section-num ui">09</span>
              <h2>状態遷移テスト</h2>
            </div>
            <div className="prose">
              <p>
                <strong>考え方</strong>
                ：システムが<strong>過去の操作履歴（現在の状態）によって、同じ入力でも異なる振る舞いをする</strong>場合に有効な技法です。ISTQBシラバスでは、遷移は「イベント
                [ガード条件] /
                アクション」という記法でラベル付けされると定義されています。
              </p>
              <h4>手順</h4>
              <ol className="step-list">
                <li>
                  <span className="step-num">1</span>
                  <div className="step-body">
                    <p>システムが取りうる「状態」をすべて洗い出す</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">2</span>
                  <div className="step-body">
                    <p>
                      状態間の「遷移」と、それを引き起こす「イベント」を洗い出す
                    </p>
                  </div>
                </li>
                <li>
                  <span className="step-num">3</span>
                  <div className="step-body">
                    <p>状態遷移図（または状態遷移表）を作成する</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">4</span>
                  <div className="step-body">
                    <p>
                      少なくとも「すべての状態を1回は通る」「すべての遷移を1回は通る」テストケースを設計する
                    </p>
                  </div>
                </li>
                <li>
                  <span className="step-num">5</span>
                  <div className="step-body">
                    <p>
                      さらに厳密にテストする場合は、「定義されていない遷移（無効な遷移）」も意図的に試す
                    </p>
                  </div>
                </li>
              </ol>
              <h4>共通例への適用：注文ステータスの遷移</h4>
              <div className="mermaid-wrapper">
                <div className="diagram-caption">図2 — 注文ステータスの状態遷移図</div>
                <div className="mermaid-target" id="diagram-state">
                  <Mermaid chart={DIAGRAM_STATE} />
                </div>
              </div>
              <p>
                この図から、「発送済みになった後にキャンセルできてしまわないか」「配達完了後にステータスを戻せてしまわないか」といった、<strong>定義されていない（禁止されているべき）遷移が誤って許可されていないか</strong>を確認するテストケースが自然に導き出せます。
              </p>
            </div>
          </section>

          {/* 10 */}
          <section className="section" id="s10">
            <div className="section-head">
              <span className="section-num ui">10</span>
              <h2>ドメイン分析テスト</h2>
            </div>
            <div className="prose">
              <p>
                <strong>考え方</strong>
                ：複数の入力変数が<strong>同時に</strong>境界値付近にある状況を扱う、境界値分析の発展形です。1つの変数だけでなく、複数の変数の境界が重なるケースでバグが起きやすいという着眼点に基づきます。ONポイント（境界上の値）・OFFポイント（境界のすぐ外の値）・INポイント（範囲内の値）・OUTポイント（範囲外の値）という4種類の点を、変数の組み合わせごとに設計します。
              </p>
              <div className="callout note">
                <i className="ti ti-target" aria-hidden="true" />
                <div>
                  <strong>共通例への適用</strong>
                  <p>
                    たとえば「クーポン割引後の合計金額が0円未満にならないこと」を検証する場合、「注文金額」と「クーポン割引額」という2つの変数が同時に境界（0円）付近にある状況をドメイン分析で洗い出します。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 11 */}
          <section className="section" id="s11">
            <div className="section-head">
              <span className="section-num ui">11</span>
              <h2>ペアワイズ／組み合わせテスト</h2>
            </div>
            <div className="prose">
              <p>
                <strong>考え方</strong>
                ：独立した設定項目（パラメータ）が多数あり、全組み合わせをテストすると現実的な数を超えてしまう場合に使う技法です。米国
                NIST（米国国立標準技術研究所）が1999〜2004年に実施した一連の調査により、<strong>ソフトウェアの欠陥・障害の大部分は1〜2個のパラメータの相互作用によって発生し、3個以上が関与するものは急激に少なくなる</strong>ことが報告されています。この知見に基づき、「すべてのパラメータの組み合わせの中の、すべての“2つの組み合わせ（ペア）”を最低1回はテストする」ことで、全数テストに近い欠陥検出力を、大幅に少ないテストケース数で実現します。
              </p>
              <div className="callout source">
                <i className="ti ti-quote" aria-hidden="true" />
                <div>
                  <strong>出典</strong>
                  <p>
                    D. Richard Kuhn, Raghu N. Kacker, Yu Lei,{' '}
                    <em>Practical Combinatorial Testing</em>, NIST Special
                    Publication 800-142（NIST,
                    2010年10月）。詳細は参考文献セクションを参照してください。
                  </p>
                </div>
              </div>
              <h4>共通例への適用：チェックアウト画面の環境組み合わせ</h4>
              <p>
                パラメータが「ブラウザ（3種）× OS（3種）×
                決済方法（3種）」の場合、全組み合わせは 3×3×3 =
                27通りですが、ペアワイズ法を使うと以下のように9通り程度まで削減できます（PICT
                や ACTS といった専用ツールで自動生成するのが一般的です）。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>ブラウザ</th>
                      <th>OS</th>
                      <th>決済方法</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Chrome</td>
                      <td>Windows</td>
                      <td>クレジットカード</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Chrome</td>
                      <td>macOS</td>
                      <td>コンビニ払い</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Chrome</td>
                      <td>iOS</td>
                      <td>電子マネー</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Safari</td>
                      <td>Windows</td>
                      <td>コンビニ払い</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Safari</td>
                      <td>macOS</td>
                      <td>電子マネー</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Safari</td>
                      <td>iOS</td>
                      <td>クレジットカード</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Edge</td>
                      <td>Windows</td>
                      <td>電子マネー</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Edge</td>
                      <td>macOS</td>
                      <td>クレジットカード</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Edge</td>
                      <td>iOS</td>
                      <td>コンビニ払い</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                この9通りで、任意の2パラメータ間のすべての値の組み合わせ（例：「Safari ×
                電子マネー」「Windows ×
                クレジットカード」など）が最低1回は登場しています。
              </p>
              <div className="callout note">
                <i className="ti ti-alert-triangle" aria-hidden="true" />
                <div>
                  <strong>注意</strong>
                  <p>
                    ペアワイズはあくまで「組み合わせを網羅的にテストしないための効率化技法」であり、単独で完全なテスト戦略にはなりません。決済処理や認証まわりなど、失敗時の影響が大きい重要フローについては、ペアワイズで削減された組み合わせ以外にも個別にテストケースを追加すべきだとされています。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 12 */}
          <section className="section" id="s12">
            <div className="section-head">
              <span className="section-num ui">12</span>
              <h2>ユースケーステスト</h2>
            </div>
            <div className="prose">
              <p>
                <strong>考え方</strong>
                ：機能単位ではなく、<strong>ユーザーが目的を達成するまでの一連の業務フロー</strong>を検証する技法です。「基本フロー（正常系）」と「代替フロー」「例外フロー」を明示することで、実際の利用シーンに即したテストケースを作れます。
              </p>
              <h4>共通例への適用：「商品を注文する」ユースケース</h4>
              <div className="mermaid-wrapper">
                <div className="diagram-caption">
                  図3 — 「商品を注文する」ユースケースフロー
                </div>
                <div className="mermaid-target" id="diagram-usecase">
                  <Mermaid chart={DIAGRAM_USECASE} />
                </div>
              </div>
              <p>
                基本フロー1本だけでなく、「配送先を新規登録するケース」「決済に失敗して再入力するケース」「在庫切れが発覚してカートに戻るケース」まで洗い出すのがユースケーステストのポイントです。
              </p>
            </div>
          </section>

          {/* 13 */}
          <section className="section" id="s13">
            <div className="section-head">
              <span className="section-num ui">13</span>
              <h2>ホワイトボックステスト技法</h2>
            </div>
            <div className="prose">
              <p>
                ホワイトボックステストは、ブラックボックステストとは対照的に、<strong>ソースコードの内部構造（制御フロー）を根拠にテストケースを設計する</strong>アプローチです。主に開発者による単体テストで使われます。
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>技法</th>
                      <th>説明</th>
                      <th>カバレッジ基準</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ステートメントカバレッジ</td>
                      <td>
                        コード中のすべての実行文（ステートメント）を最低1回は実行する
                      </td>
                      <td>実行された文の割合</td>
                    </tr>
                    <tr>
                      <td>分岐カバレッジ（ブランチカバレッジ）</td>
                      <td>
                        制御フローグラフ上のすべての分岐（branch）、すなわち if
                        やループの条件分岐（true/false
                        の分岐先）だけでなく、switch
                        の各ケースや例外ハンドラへの遷移といった無条件分岐も含む制御移行を、最低1回は実行する
                      </td>
                      <td>実行された制御移行数 ÷ 全制御移行数</td>
                    </tr>
                    <tr>
                      <td>条件カバレッジ</td>
                      <td>
                        複合条件（A &amp;&amp; B
                        など）を構成する各アトミック条件の真偽（条件アウトカム）を実行対象とする。100%
                        を達成した状態では、各アトミック条件が true と false
                        の両方を取ることになる（条件の組み合わせを網羅するわけではない）
                      </td>
                      <td>実行した条件アウトカム数 ÷ 全条件アウトカム数</td>
                    </tr>
                    <tr>
                      <td>パスカバレッジ</td>
                      <td>プログラム内のすべての実行経路（パス）を通す</td>
                      <td>実行された経路の割合</td>
                    </tr>
                    <tr>
                      <td>データフローテスト</td>
                      <td>
                        変数が「定義された箇所」から「使用される箇所」までの経路に着目してテストする
                      </td>
                      <td>定義-使用ペアの網羅率</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>カバレッジの包含関係</h3>
              <p>
                カバレッジ基準は「弱い順に一直線に並ぶ」と説明されることがありますが、それは正確ではありません。確実に言えるのは、<strong>分岐カバレッジ100%はステートメントカバレッジ100%を包含する</strong>という関係です。
              </p>
              <div className="mermaid-wrapper">
                <div className="diagram-caption">
                  図4 — 分岐カバレッジとステートメントカバレッジの関係
                </div>
                <div className="mermaid-target" id="diagram-coverage">
                  <Mermaid chart={DIAGRAM_COVERAGE} />
                </div>
              </div>
              <p>
                一方で、<strong>分岐カバレッジと条件カバレッジのあいだに包含関係はありません</strong>。次のコードで確かめてみましょう。
              </p>
              <div className="code-block">
                <div className="code-label">JAVA — 短絡評価 OR</div>
                <pre>
                  <code>
                    <div className="code-line"><span className="code-kw">if</span> (A || B) {'{'}</div>
                    <div className="code-line">    <span className="code-fn">doSomething</span>();</div>
                    <div className="code-line">{'}'}</div>
                  </code>
                </pre>
              </div>
              <p>
                ここで <code>A = true, B = false</code> と
                <code>A = false, B = false</code> の2ケースをテストすると、<code>if</code>
                は true と false
                の両方を通るため<strong>分岐カバレッジは100%</strong>になります。しかし
                <code>B</code> は false しか取っていないため（<code>||</code>
                は短絡評価であり、<code>A</code> が true の場合
                <code>B</code>
                は評価すらされません）、<strong>条件カバレッジは満たされていません</strong>。
              </p>
              <p>逆のケースを見るには、短絡評価をしない非短絡 OR を使います。</p>
              <div className="code-block">
                <div className="code-label">JAVA — 非短絡 OR</div>
                <pre>
                  <code>
                    <div className="code-line"><span className="code-kw">if</span> (A | B) {'{'}</div>
                    <div className="code-line">    <span className="code-fn">doSomething</span>();</div>
                    <div className="code-line">{'}'}</div>
                  </code>
                </pre>
              </div>
              <p>
                この形で <code>A = true, B = false</code> と
                <code>A = false, B = true</code> の2ケースをテストすると、<code>A</code>
                も <code>B</code> も必ず評価されて true/false
                を両方取るので<strong>条件カバレッジは100%</strong>ですが、<code>A | B</code>
                は常に true となり、<code>if</code> の false
                側を一度も通らないため<strong>分岐カバレッジは100%になりません</strong>。
              </p>
              <p>
                このように、条件カバレッジ・パスカバレッジ・データフローテストのあいだに「必ずこちらが強い」という普遍的な順序関係があるわけではなく、何を強いとみなすかは対象のコード構造に依存します。
              </p>
              <div className="callout note">
                <i className="ti ti-bulb" aria-hidden="true" />
                <div>
                  <strong>初学者向けポイント</strong>
                  <p>
                    ステートメントカバレッジ100%を達成しても、<code>if</code>文の片方の分岐しか通っていない可能性があります。逆にパスカバレッジは非常に強力ですが、ループを含むコードでは経路の数が爆発的に増えるため、現実的にはステートメント／分岐カバレッジを基本としつつ、リスクの高い箇所だけパスカバレッジやデータフローテストを追加するのが一般的です。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 14 */}
          <section className="section" id="s14">
            <div className="section-head">
              <span className="section-num ui">14</span>
              <h2>技法の比較と選び方</h2>
            </div>
            <div className="prose">
              <h3>技法選択フローチャート</h3>
              <p>
                テスト設計では、ひとつの技法だけで十分になることはほとんどありません。下のフローは「最初に当てはまった技法で終わり」ではなく、<strong>Q1からQ5までをすべて順に評価し、当てはまったものを積み上げて組み合わせる</strong>ためのものです。たとえば「同値分割＋境界値分析」を選んだあとも、条件の組み合わせ・状態・設定項目・業務フローについて引き続き判定し、必要な技法を補助的に追加していきます。
              </p>
              <div className="mermaid-wrapper">
                <div className="diagram-caption">図5 — テスト技法の選択フロー</div>
                <div className="mermaid-target" id="diagram-select">
                  <Mermaid chart={DIAGRAM_SELECT} />
                </div>
              </div>
              <p>
                たとえば「注文金額のレンジがあり、かつ会員ランクとクーポンの組み合わせで結果が決まる」画面であれば、Q1で同値分割・境界値分析を、Q2でデシジョンテーブルテストを選び、両方を組み合わせて設計することになります。
              </p>
              <h3>技法比較表</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>技法</th>
                      <th>分類</th>
                      <th>得意なこと</th>
                      <th>苦手なこと</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>同値分割</td>
                      <td>ブラックボックス</td>
                      <td>テストケース数の削減</td>
                      <td>境界付近の欠陥は拾いにくい</td>
                    </tr>
                    <tr>
                      <td>境界値分析</td>
                      <td>ブラックボックス</td>
                      <td>境界付近の欠陥検出</td>
                      <td>条件の組み合わせは扱えない</td>
                    </tr>
                    <tr>
                      <td>デシジョンテーブル</td>
                      <td>ブラックボックス</td>
                      <td>複雑な業務ルールの網羅</td>
                      <td>条件数が多いとテーブルが巨大化</td>
                    </tr>
                    <tr>
                      <td>状態遷移テスト</td>
                      <td>ブラックボックス</td>
                      <td>履歴依存の挙動の検証</td>
                      <td>状態数が多いと管理が煩雑</td>
                    </tr>
                    <tr>
                      <td>ドメイン分析</td>
                      <td>ブラックボックス</td>
                      <td>複数変数の境界の相互作用</td>
                      <td>設計コストがやや高い</td>
                    </tr>
                    <tr>
                      <td>ペアワイズ／組み合わせ</td>
                      <td>ブラックボックス</td>
                      <td>多数パラメータの効率的網羅</td>
                      <td>3つ以上の相互作用による欠陥は見逃す可能性</td>
                    </tr>
                    <tr>
                      <td>ユースケーステスト</td>
                      <td>ブラックボックス</td>
                      <td>実利用シナリオの妥当性確認</td>
                      <td>内部ロジックの網羅性は保証しない</td>
                    </tr>
                    <tr>
                      <td>ステートメント／分岐カバレッジ</td>
                      <td>ホワイトボックス</td>
                      <td>実装漏れの検出、単体テストの指標化</td>
                      <td>仕様の誤りそのものは検出しにくい</td>
                    </tr>
                    <tr>
                      <td>パスカバレッジ／データフローテスト</td>
                      <td>ホワイトボックス</td>
                      <td>複雑なロジック・変数依存関係の検証</td>
                      <td>コストが高く全箇所には適用しにくい</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>テストレベルと技法の対応</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>テストレベル</th>
                      <th>主に使われる技法の例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>単体テスト</td>
                      <td>
                        ステートメント／分岐カバレッジ、パスカバレッジ、同値分割
                      </td>
                    </tr>
                    <tr>
                      <td>結合テスト</td>
                      <td>デシジョンテーブル、状態遷移テスト、ペアワイズ</td>
                    </tr>
                    <tr>
                      <td>システムテスト</td>
                      <td>ユースケーステスト、状態遷移テスト、境界値分析</td>
                    </tr>
                    <tr>
                      <td>受け入れテスト</td>
                      <td>ユースケーステスト、探索的テスト（経験ベース技法）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 15 */}
          <section className="section" id="s15">
            <div className="section-head">
              <span className="section-num ui">15</span>
              <h2>ベストプラクティス・チェックリスト</h2>
            </div>
            <div className="prose">
              <p>
                初学者がテスト設計を行う際に押さえておきたいポイントを、ステップごとにまとめます。クリックしてチェックできます。
              </p>
              <Checklist />
            </div>
          </section>

          {/* 16 */}
          <section className="section" id="s16">
            <div className="section-head">
              <span className="section-num ui">16</span>
              <h2>よくあるアンチパターン</h2>
            </div>
            <div className="prose">
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>アンチパターン</th>
                      <th>何が問題か</th>
                      <th>改善策</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>境界値分析をせず、範囲の中央値だけをテストする</td>
                      <td>境界付近の欠陥（オフバイワン・エラー等）を見逃す</td>
                      <td>同値分割とセットで境界値分析を必ず行う</td>
                    </tr>
                    <tr>
                      <td>無効な入力を複数同時にテストケースに詰め込む</td>
                      <td>どの無効値が原因でエラーになったか切り分けられない</td>
                      <td>無効な同値クラスは1テストケースにつき1つに限定する</td>
                    </tr>
                    <tr>
                      <td>条件分岐が絡む仕様を、思いつきでテストケース化する</td>
                      <td>条件の組み合わせに抜け漏れが発生する</td>
                      <td>デシジョンテーブルで組み合わせを機械的に整理する</td>
                    </tr>
                    <tr>
                      <td>状態を意識せず、単発の入力だけをテストする</td>
                      <td>「2回目以降の操作で初めて起きる不具合」を見逃す</td>
                      <td>状態遷移図を書き、遷移の網羅率を意識する</td>
                    </tr>
                    <tr>
                      <td>
                        パラメータが多い設定画面を全組み合わせでテストしようとして時間切れになる
                      </td>
                      <td>現実的な工数で終わらない</td>
                      <td>ペアワイズ／組み合わせテストで効率化する</td>
                    </tr>
                    <tr>
                      <td>ハッピーパス（正常系）のシナリオしかテストしない</td>
                      <td>代替フロー・例外フローのバグが本番で発覚する</td>
                      <td>
                        ユースケーステストで代替・例外フローを明示的に洗い出す
                      </td>
                    </tr>
                    <tr>
                      <td>カバレッジ100%を目的化してしまう</td>
                      <td>「通っただけ」のテストが増え、欠陥検出力が伴わない</td>
                      <td>
                        カバレッジは指標の1つとして扱い、リスクベースで技法を組み合わせる
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 17 */}
          <section className="section" id="s17">
            <div className="section-head">
              <span className="section-num ui">17</span>
              <h2>現代的視点：2020年代後半のテスト設計トレンド</h2>
            </div>
            <div className="prose">
              <p>
                Copeland
                の技法は今も有効ですが、2026年時点の実務では次のような潮流と組み合わせて使われることが増えています。
              </p>

              <h3>スクリプトテストと探索的テストの併用</h3>
              <p>
                Cem Kaner（BBST: Black Box Software Testing コースの開発者）や、James
                Bach・Michael Bolton による Rapid Software Testing (RST)
                メソドロジーでは、Copeland
                流の体系的な技法（スクリプトテスト）を土台にしつつ、そこに載らない欠陥を見つけるために
                <strong>
                  探索的テスト（Exploratory Testing）とヒューリスティクス（発見的手法）を組み合わせる
                </strong>
                ことの重要性が強調されています。
              </p>
              <div className="callout source">
                <i className="ti ti-quote" aria-hidden="true" />
                <div>
                  <strong>出典</strong>
                  <p>
                    Ministry of Testing が公開している「Test Heuristics Cheat
                    Sheet」（Elisabeth
                    Hendrickson氏らによる）も、技法だけではカバーしきれないテストアイデアを補う実践的なリソースとして国際的に広く参照されています。
                  </p>
                </div>
              </div>

              <h3>開発者テストとの融合（テストピラミッド）</h3>
              <p>
                ThoughtWorks のチーフサイエンティストである Martin Fowler
                は、自身のサイトで「テストピラミッド」の考え方を提唱し、単体テスト（ホワイトボックス寄り）を厚く、UIを介したテスト（ブラックボックス寄り）を薄くするバランスを推奨しています。Copeland
                の技法のうち、同値分割・境界値分析・分岐カバレッジなどは、この単体テストの層で開発者自身が実践するケースが増えています。
              </p>

              <h3>AIによるテスト設計支援と、その限界</h3>
              <p>
                2025〜2026年にかけて、AIを使ってテストケースを自動生成するツールが急速に普及しました。ISTQB
                も「Certified Tester - Testing with Generative AI
                (CT-GenAI)」という資格を新設し、生成AI／LLMがテストプロセス全体（同値分割のようなテスト設計技法を含む）をどう支援できるかを体系化しています。ただし、AIが生成する候補はあくまで「たたき台」であり、<strong>ドメイン知識・リスク判断・境界条件の妥当性検証は依然として人間のレビューが不可欠</strong>という点は、多くの実務家が指摘しているとおりです。実務では、AIで初期候補を洗い出し→本ガイドの技法（同値分割・境界値分析・デシジョンテーブル等）でテスターが検証・補完する、というワークフローが現実的です。
              </p>

              <h3>シフトレフトとテスト設計の早期化</h3>
              <p>
                テスト設計を実装後ではなく、<strong>要件定義・設計レビューの段階から始める「シフトレフト」</strong>の考え方も定着しています。デシジョンテーブルや状態遷移図は、コードを書く前の仕様レビューの段階で作成することで、仕様そのものの矛盾や漏れを早期に発見する「静的テスト技法」としても活用されています。
              </p>
            </div>
          </section>

          {/* 18 */}
          <section className="section" id="s18">
            <div className="section-head">
              <span className="section-num ui">18</span>
              <h2>まとめ</h2>
            </div>
            <div className="prose">
              <ul>
                <li>
                  ソフトウェアテスト設計とは、<strong>限られたリソースの中で欠陥検出力の高いテストケースを体系的に選ぶ技術</strong>である
                </li>
                <li>
                  Lee Copeland の『A Practitioner&apos;s Guide to Software Test
                  Design』は、同値分割・境界値分析・デシジョンテーブル・状態遷移・ドメインテスト・ペアワイズ・ユースケーステスト・ホワイトボックスカバレッジという技法を、実践的な例とともに体系化した書籍であり、今日の
                  CTFL
                  の中核技法の一部とも重なっている（ただし収録範囲は一致しない。詳細はセクション01の対応表を参照）
                </li>
                <li>
                  どの技法にも得意・不得意があるため、<strong>対象の性質（数値範囲か、条件の組み合わせか、状態遷移かなど）に応じて技法を使い分け、組み合わせる</strong>ことが実務上のベストプラクティスである
                </li>
                <li>
                  2020年代後半の現在では、Copeland
                  流の体系的技法に加えて、探索的テスト、開発者テスト、AI支援、シフトレフトといった潮流と組み合わせて使うのが主流になっている
                </li>
              </ul>
            </div>
          </section>

          {/* 19 */}
          <section className="section" id="s19">
            <div className="section-head">
              <span className="section-num ui">19</span>
              <h2>参考文献・出典</h2>
            </div>
            <div className="prose">
              <p>
                本ガイドの作成にあたり、2026年8月時点で以下の情報源を参照しました（原著書籍情報、国際的に著名なテスト実務家・組織の一次情報を優先しています）。
              </p>

              <div className="ref-group">
                <h3><i className="ti ti-book-2" aria-hidden="true" /> 書籍情報・原著</h3>
                <ul className="ref-list">
                  <li>
                    <a
                      href="https://books.google.co.jp/books/about/A_Practitioner_s_Guide_to_Software_Test.html?id=dMX_C8z9PfMC&redir_esc=y"
                      target="_blank"
                      rel="noopener"
                    >
                      Google Books（ユーザー提供リンク）
                    </a>
                    <span className="ref-url">
                      https://books.google.co.jp/books/about/A_Practitioner_s_Guide_to_Software_Test.html?id=dMX_C8z9PfMC&amp;redir_esc=y
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://us.artechhouse.com/A-Practitioners-Guide-to-Software-Test-Design-P756.aspx"
                      target="_blank"
                      rel="noopener"
                    >
                      Artech House（出版社公式ページ）
                    </a>
                    <span className="ref-url">
                      https://us.artechhouse.com/A-Practitioners-Guide-to-Software-Test-Design-P756.aspx
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://www.goodreads.com/en/book/show/1290169.A_Practitioner_s_Guide_to_Software_Test_Design"
                      target="_blank"
                      rel="noopener"
                    >
                      Goodreads（書籍レビュー・目次情報）
                    </a>
                    <span className="ref-url">
                      https://www.goodreads.com/en/book/show/1290169.A_Practitioner_s_Guide_to_Software_Test_Design
                    </span>
                  </li>
                </ul>
              </div>

              <div className="ref-group">
                <h3><i className="ti ti-certificate" aria-hidden="true" /> 国際的な標準・認定団体</h3>
                <ul className="ref-list">
                  <li>
                    <a href="https://istqb.org/" target="_blank" rel="noopener">
                      ISTQB（国際ソフトウェアテスト資格委員会）公式サイト
                    </a>
                    <span className="ref-url">https://istqb.org/</span>
                  </li>
                  <li>
                    <a
                      href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                      target="_blank"
                      rel="noopener"
                    >
                      ISTQB Certified Tester Foundation Level Syllabus
                      v4.0.1（公式PDF, 2024年9月15日付）
                    </a>
                    <span className="ref-url">
                      https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://astqb.org/4-2-black-box-test-techniques/"
                      target="_blank"
                      rel="noopener"
                    >
                      ASTQB（米国ソフトウェアテスト資格委員会）4.2 Black-Box Test
                      Techniques 解説
                    </a>
                    <span className="ref-url">
                      https://astqb.org/4-2-black-box-test-techniques/
                    </span>
                  </li>
                </ul>
              </div>

              <div className="ref-group">
                <h3>
                  <i className="ti ti-users" aria-hidden="true" />
                  著名な国際的テスト実務家・開発者による一次情報
                </h3>
                <ul className="ref-list">
                  <li>
                    <a
                      href="https://martinfowler.com/testing/"
                      target="_blank"
                      rel="noopener"
                    >
                      Martin Fowler（ThoughtWorks チーフサイエンティスト）Testing
                      ガイド
                    </a>
                    <span className="ref-url">https://martinfowler.com/testing/</span>
                  </li>
                  <li>
                    <a
                      href="https://martinfowler.com/bliki/TestPyramid.html"
                      target="_blank"
                      rel="noopener"
                    >
                      Martin Fowler, Test Pyramid
                    </a>
                    <span className="ref-url">
                      https://martinfowler.com/bliki/TestPyramid.html
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://martinfowler.com/bliki/ExploratoryTesting.html"
                      target="_blank"
                      rel="noopener"
                    >
                      Martin Fowler, Exploratory Testing
                    </a>
                    <span className="ref-url">
                      https://martinfowler.com/bliki/ExploratoryTesting.html
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://kaner.com/pdfs/ParadigmsTutorial.pdf"
                      target="_blank"
                      rel="noopener"
                    >
                      Cem Kaner, Paradigms of Black Box Software
                      Testing（一次資料PDF）
                    </a>
                    <span className="ref-url">
                      https://kaner.com/pdfs/ParadigmsTutorial.pdf
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://www.satisfice.com/rapid-software-testing-explored"
                      target="_blank"
                      rel="noopener"
                    >
                      James Bach, Rapid Software Testing Explored（Satisfice,
                      Inc.）
                    </a>
                    <span className="ref-url">
                      https://www.satisfice.com/rapid-software-testing-explored
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://rapid-software-testing.com/authors/"
                      target="_blank"
                      rel="noopener"
                    >
                      James Bach &amp; Michael Bolton, Rapid Software Testing
                      公式サイト
                    </a>
                    <span className="ref-url">
                      https://rapid-software-testing.com/authors/
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://www.ministryoftesting.com/articles/ab1cd85c"
                      target="_blank"
                      rel="noopener"
                    >
                      Ministry of Testing, Test Heuristics Cheat Sheet（Elisabeth
                      Hendrickson 氏ほか）
                    </a>
                    <span className="ref-url">
                      https://www.ministryoftesting.com/articles/ab1cd85c
                    </span>
                  </li>
                </ul>
              </div>

              <div className="ref-group">
                <h3>
                  <i className="ti ti-git-merge" aria-hidden="true" />
                  ペアワイズ／組み合わせテストの参考情報
                </h3>
                <ul className="ref-list">
                  <li>
                    <a
                      href="https://doi.org/10.6028/NIST.SP.800-142"
                      target="_blank"
                      rel="noopener"
                    >
                      D. Richard Kuhn, Raghu N. Kacker, Yu Lei, Practical
                      Combinatorial Testing — NIST Special Publication
                      800-142（2010年10月）
                    </a>
                    <span className="ref-note">
                      「欠陥の大部分は比較的少数のパラメータの相互作用によって生じる」という
                      t-way 組み合わせテストの前提を示した一次資料。
                    </span>
                    <span className="ref-url">
                      https://doi.org/10.6028/NIST.SP.800-142
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://csrc.nist.gov/projects/automated-combinatorial-testing-for-software"
                      target="_blank"
                      rel="noopener"
                    >
                      NIST, Combinatorial Methods for Trust and Assurance（ACTS
                      プロジェクト公式ページ）
                    </a>
                    <span className="ref-note">
                      1999〜2004年の一連の NIST 調査に基づく一次情報。
                    </span>
                    <span className="ref-url">
                      https://csrc.nist.gov/projects/automated-combinatorial-testing-for-software
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://www.pairwise.org/"
                      target="_blank"
                      rel="noopener"
                    >
                      Pairwise.org（ペアワイズテストの専門情報サイト）
                    </a>
                    <span className="ref-url">https://www.pairwise.org/</span>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/All-pairs_testing"
                      target="_blank"
                      rel="noopener"
                    >
                      Wikipedia, All-pairs testing
                    </a>
                    <span className="ref-url">
                      https://en.wikipedia.org/wiki/All-pairs_testing
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <footer className="footer">
            本ガイドは教育目的の解説記事であり、原著書籍の代替物ではありません。より詳細な内容・演習問題・ケーススタディについては、原著『A
            Practitioner&apos;s Guide to Software Test
            Design』および上記の一次情報源を直接ご参照ください。
          </footer>
        </div>
      </div>
    </div>
  );
}
