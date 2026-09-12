import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './explore-it-guide.css';

export const metadata: Metadata = {
  title: 'Explore It! を読み解く ― 探索的テスト実践フィールドガイド | QA Studies',
  description:
    'Elisabeth Hendrickson『Explore It!』に基づく探索的テスト実践フィールドガイド。チャーター、観察、ヒューリスティクスを網羅。',
};

const DIAGRAM_0 = `flowchart LR
subgraph Checking["チェック（Checking）: 事前に台本を書く"]
    direction TB
    A1["要件・仕様"] --> A2["事前にテストケースを設計"]
    A2 --> A3["手順どおりに実行"]
    A3 --> A4{"期待結果と一致?"}
    A4 -->|Yes| A5["合格"]
    A4 -->|No| A6["不合格"]
end

subgraph Exploring["探索（Exploring）: 学習と設計と実行が同時進行"]
    direction TB
    B1["学習 Learn"] --> B2["次の一手を設計 Design"]
    B2 --> B3["実行して観察 Execute"]
    B3 --> B1
end`;

const DIAGRAM_1 = `flowchart TD
S1["準備<br/>基礎を理解する<br/>(チェックと探索の違い)"] --> S2["Step1<br/>チャーターを書く"]
S2 --> S3["Step2<br/>タイムボックスされた<br/>セッションを実施"]
S3 --> S4["Step3<br/>観察する<br/>(見えないものを見える化)"]
S4 --> S5["Step4<br/>変化(バリエーション)を<br/>意図的に加える"]
S5 --> S6["Step5<br/>結果を評価する<br/>(オラクルを選ぶ)"]
S6 --> S7["Step6<br/>次元を加える<br/>(順序/エンティティ/状態/生態系)"]
S7 --> S8["Step7<br/>コンテキストに応じて適用<br/>(API/既存システム/要件)"]
S8 --> S9["Step8<br/>デブリーフィングし<br/>次のチャーターへ活かす"]
S9 -.->|継続的に繰り返す| S2`;

const DIAGRAM_2 = `flowchart TD
Start["探索を始めたい"] --> Q1{"何が気になっている?"}
Q1 -->|仕様や要求から| Src1["要件/仕様書を読む"]
Q1 -->|過去の不具合から| Src2["バグ履歴・障害報告を見る"]
Q1 -->|ステークホルダーの懸念から| Src3["ステークホルダーに聞く"]
Src1 --> Draft["チャーター案を作成<br/>Explore/With/To discover"]
Src2 --> Draft
Src3 --> Draft
Draft --> Check{"ミッションは1つ<br/>かつ時間内に収まるか?"}
Check -->|No| Split["チャーターを分割/絞り込む"]
Split --> Draft
Check -->|Yes| Ready["セッション実施へ"]`;

const DIAGRAM_3 = `flowchart TD
C["チャーター作成"] --> S["セッション開始<br/>(45〜120分、目安90分の<br/>タイムボックス／中断禁止)"]
S --> T["テストを設計しながら実行"]
T --> B["不具合の調査・報告"]
T --> N["新たな疑問・派生チャーターの発見"]
B --> R["セッションレポート作成"]
N --> R
R --> D["デブリーフィング<br/>(マネージャー/チームとの振り返り)"]
D --> Metric["セッションメトリクスの記録"]
Metric --> C2["次のチャーターへ反映"]
C2 -.-> C`;

const DIAGRAM_4 = `flowchart LR
Action["操作を実行する"] --> UI["画面上の見た目を確認"]
Action --> Log["コンソール/ログを確認"]
Action --> State["内部状態・DBを確認"]
Action --> Perf["応答時間や負荷を確認"]
UI --> Judge{"異常はないか?"}
Log --> Judge
State --> Judge
Perf --> Judge
Judge -->|見えない異常があるかも| Widen["観察範囲をさらに広げる"]`;

const DIAGRAM_5 = `flowchart LR
Create["作成 Create"] --> Read["参照 Read"]
Read --> Update["更新 Update"]
Update --> Delete["削除 Delete"]
Delete -.->|削除後に再作成できるか?<br/>関連データはどうなるか?| Create`;

const DIAGRAM_6 = `stateDiagram-v2
[*] --> 未ログイン
未ログイン --> ログイン試行中: ログインボタン押下
ログイン試行中 --> ログイン済み: 認証成功
ログイン試行中 --> 未ログイン: 認証失敗
ログイン済み --> 未ログイン: ログアウト
ログイン済み --> アカウントロック: 連続失敗を検知
アカウントロック --> 未ログイン: 一定時間経過 or 管理者解除`;

const DIAGRAM_7 = `flowchart LR
User["ユーザー"] -->|HTTPS| WebApp["Webアプリケーション"]
WebApp -->|API呼び出し| PaymentAPI["外部決済API"]
WebApp -->|クエリ| DB[("データベース")]
WebApp -->|Webhook| ExternalService["サードパーティ連携サービス"]

subgraph Trust["信頼境界（自社が管理する範囲）"]
    WebApp
    DB
end`;

export default function ExploreItGuidePage() {
  return (
    <div className="explore-it-layout">
      <NavBar />
      <main>
        {/* Hero */}
        <div className="hero">
          <span className="kicker">FIELD GUIDE · SOFTWARE QA</span>
          <h1>Explore It! を読み解く</h1>
          <p className="sub">
            初学者のための探索的テスト実践フィールドガイド。原著の要点をステップバイステップのベストプラクティスとして再構成しました。
          </p>
          <dl className="bookcard">
            <dt>原著</dt>
            <dd>Explore It!: Reduce Risk and Increase Confidence with Exploratory Testing</dd>
            <dt>著者</dt>
            <dd>Elisabeth Hendrickson</dd>
            <dt>出版</dt>
            <dd>Pragmatic Bookshelf, 2013年初版</dd>
            <dt>参照元</dt>
            <dd>
              <a
                href="https://www.oreilly.com/library/view/explore-it/9781941222584/f_0000.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                oreilly.com/library/view/explore-it/9781941222584
              </a>
            </dd>
          </dl>
          <p className="lede">
            図解はすべて Mermaid
            で作成し、比較・整理には表を用いています。ASCIIアートによる図解は使用していません。2026年9月5日時点の情報をWeb検索で確認し、末尾に出典URLを一覧化しています。
          </p>
        </div>

        {/* 01: Overview */}
        <section id="overview">
          <div className="sec-tag">
            <span className="num">01</span>
            <span className="label">OVERVIEW</span>
          </div>
          <h2>この本はどんな本か</h2>
          <p>
            <strong>Elisabeth Hendrickson</strong>
            は1980年からコードを書き始めたベテランのテスター・開発者・アジャイル実践者で、2010年にAgile
            AllianceのGordon Pask
            Award（アジャイルコミュニティへの貢献に贈られる賞）を受賞しています。GoogleのTech
            Talkでのアジャイルテスト講演や、後述する「Test Heuristics Cheat
            Sheet」でも広く知られる人物です。
          </p>
          <p>
            <code>Agile Testing</code>の共著者であるJanet
            Gregoryは、本書について「開発チームの全員の机に置かれるべき本であり、探索的テストをチームに導入する際にいつも持ち歩いている本だ」という趣旨の推薦の言葉を寄せています。
          </p>
          <p>本書は3部構成・全13章＋付録2つで構成されています。</p>
          <div className="tblwrap">
            <table>
              <thead>
                <tr>
                  <th>Part</th>
                  <th>テーマ</th>
                  <th>主な内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Part 1</td>
                  <td>Establishing Foundations（基礎を固める）</td>
                  <td>チャーター、観察、バリエーション探し、結果評価</td>
                </tr>
                <tr>
                  <td>Part 2</td>
                  <td>Adding Dimensions（次元を加える）</td>
                  <td>操作の順序、エンティティと関係、状態遷移、エコシステム</td>
                </tr>
                <tr>
                  <td>Part 3</td>
                  <td>Putting It in Context（文脈に当てはめる）</td>
                  <td>UIがない場合、既存システム、要件定義の場、テスト戦略全体への統合</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            対象読者は「初級から上級まで」とされており、テスターに限らず開発者・プロダクトオーナーが読んでも実践的な発見がある構成になっています。
          </p>
        </section>

        {/* 02: Why Exploratory Testing */}
        <section id="why">
          <div className="sec-tag">
            <span className="num">02</span>
            <span className="label">WHY EXPLORATORY TESTING</span>
          </div>
          <h2>なぜ探索的テストが必要なのか</h2>
          <h3>チェック（Checking）と探索（Exploring）は別物</h3>
          <p>
            ThoughtWorksのチーフサイエンティストであり、多くのソフトウェア開発者に影響を与えてきた
            <strong>Martin Fowler</strong>
            は、自身のbliki（ブログ+wiki）で探索的テストを次のように整理しています。
          </p>
          <ul>
            <li>
              <strong>スクリプト化されたテスト（Checking）</strong>
              ：あらかじめ書かれた手順と期待結果に沿って実行し、一致しなければ失敗と判定する。
            </li>
            <li>
              <strong>探索的テスト（Exploring）</strong>
              ：ソフトウェアの特性そのものを探りながら、発見した挙動が「妥当」か「不具合」かをその場で判断していく、学習・設計・実行が一体化したスタイル。
            </li>
          </ul>
          <p>
            Fowlerは自動化されたセルフテストの強力な推進者として知られますが、それでも「自動テストは頑丈なバグ捕獲網を提供するが、その網が本当に必要な範囲を覆っているかどうかを確かめるには探索的テストが必要だ」という趣旨を述べています。
          </p>
          <p>
            探索的テストという用語自体は<strong>Cem Kaner</strong>
            が1984年に提唱したとされ、Wikipediaに引用されている定義では「個々のテスターが自身の作業品質を継続的に最適化する、個人の自由と責任を重視するテストスタイルであり、テストに関連する学習・設計・実行・結果解釈を、プロジェクトを通じて並行して行う相互補完的な活動として扱うもの」とされています。
            <strong>James Marcus Bach</strong>
            とKanerは、探索的テストは手法というより「思考様式（マインドセット）」であり、わずかに探索的なもの（曖昧・緩いスクリプト）から完全に自由な探索まで連続体をなす、とも説明しています。
          </p>
          <div className="quote">
            探索的テストとは、テスト対象のソフトウェアについて学習しながら、同時にテストを設計・実行し、直前のテストで得たフィードバックを次のテストに活かしていく活動である。
            <cite>Elisabeth Hendrickson の定義として広く引用される言葉（意訳）</cite>
          </div>

          <div className="figure">
            <div className="cap">FIGURE 02-A ｜ チェックと探索の違い</div>
            <div className="mermaid-target">
              <Mermaid chart={DIAGRAM_0} />
            </div>
          </div>
          <p>
            チェックは「安全網（セーフティネット）」であり、探索はその網がカバーしきれていない領域を能動的に探しに行く活動、という対比がよく使われます。実務では両者は対立するものではなく、状況に応じて配分が変わる
            <strong>連続体</strong>として組み合わせて使うのが基本です。
          </p>
        </section>

        {/* 03: Core Elements */}
        <section id="elements">
          <div className="sec-tag">
            <span className="num">03</span>
            <span className="label">CORE ELEMENTS</span>
          </div>
          <h2>探索的テストの本質的要素</h2>
          <p>
            本書 第1章（On Testing and
            Exploration）では、探索的テストを成立させる要素として次のようなものが挙げられています。
          </p>
          <div className="tblwrap">
            <table>
              <thead>
                <tr>
                  <th>要素</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>タイムボックス化されたセッション</td>
                  <td>探索を「時間で区切った作業単位」として扱い、集中と説明責任を両立させる</td>
                </tr>
                <tr>
                  <td>チャーター（憲章／指針）</td>
                  <td>何を、何を使って、何のために探索するかを事前に短く言語化する</td>
                </tr>
                <tr>
                  <td>同時並行の学習・設計・実行</td>
                  <td>あらかじめ全テストを設計せず、直前の結果から次の一手を組み立てる</td>
                </tr>
                <tr>
                  <td>観察力</td>
                  <td>画面だけでなくログ・コンソール・裏側の状態まで注意深く見る</td>
                </tr>
                <tr>
                  <td>バリエーションの発見</td>
                  <td>「変化しうるもの（変数）」を洗い出し、意図的にそれを変えてみる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            これらは独立した技法ではなく、
            <strong>1つのセッションの中で循環的に使われるスキルセット</strong>
            である点が本書の重要なメッセージです。
          </p>
        </section>

        {/* 04: Roadmap */}
        <section id="roadmap">
          <div className="sec-tag">
            <span className="num">04</span>
            <span className="label">ROADMAP</span>
          </div>
          <h2>実践ロードマップ（全体像）</h2>
          <p>
            初学者がゼロから探索的テストを実務に取り入れる際の全体の流れを、本書の構成に沿って1つのループとして可視化すると、以下のようになります。
          </p>
          <div className="figure">
            <div className="cap">FIGURE 04-A ｜ 探索的テストの実践ループ</div>
            <div className="mermaid-target">
              <Mermaid chart={DIAGRAM_1} />
            </div>
          </div>
          <div className="stepgrid">
            <div>
              <b>STEP 1</b>チャーター作成
            </div>
            <div>
              <b>STEP 2</b>セッション構造化
            </div>
            <div>
              <b>STEP 3</b>観察
            </div>
            <div>
              <b>STEP 4</b>バリエーション
            </div>
            <div>
              <b>STEP 5</b>結果評価
            </div>
            <div>
              <b>STEP 6</b>次元追加
            </div>
            <div>
              <b>STEP 7</b>文脈適用
            </div>
            <div>
              <b>STEP 8</b>デブリーフィング
            </div>
          </div>
          <p>以降のセクションで、各ステップを順番に詳しく解説します。</p>
        </section>

        {/* STEP1 */}
        <section id="step1">
          <div className="sec-tag">
            <span className="num step">1</span>
            <span className="label">CHARTER YOUR EXPLORATIONS</span>
          </div>
          <h2>チャーター（探索の指針）を書く</h2>
          <p>
            本書 第2章「Charter Your
            Explorations」の中心テーマです。探索的テストは自由度が高い分、
            <strong>何も指針がないと「ただ画面をクリックしているだけ」になりがち</strong>
            です。それを防ぐのがチャーター（憲章）です。
          </p>

          <h3>シンプルなチャーターテンプレート</h3>
          <p>多くの実務者・ブログ記事で紹介されている基本形は次の3要素です。</p>
          <pre className="tmpl">
            <span className="k">Explore</span>（探索対象）　　　　: [対象領域・機能]
            {'\n'}
            <span className="k">With</span>（使うもの）　　　　　 : [使用するツール・データ・リソース]
            {'\n'}
            <span className="k">To discover</span>（発見したいこと）: [気になっているリスク・情報・不具合]
          </pre>

          <div className="tblwrap">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>記入例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Explore（対象）</td>
                  <td>新規会員登録フォーム</td>
                </tr>
                <tr>
                  <td>With（使うもの）</td>
                  <td>全角文字・絵文字・非常に長い文字列を含むテストデータ</td>
                </tr>
                <tr>
                  <td>To discover（目的）</td>
                  <td>
                    入力バリデーションの抜け漏れと、エラーメッセージの分かりやすさ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            このテンプレートの利点は、「何を厳密にやるか」ではなく「どこに焦点を当て、何を使い、何を知りたいのか」という
            <strong>方向性だけ</strong>
            を示す点です。手順を細かく書きすぎるとチャーターの目的である「自由な探索」を阻害してしまうため、具体的すぎず、かといって曖昧すぎない粒度が重要とされています。
          </p>

          <h3>良いチャーターの条件</h3>
          <ul>
            <li>
              <strong>1つのミッションが明確である</strong>
              （複数の目的を1つのチャーターに詰め込まない）
            </li>
            <li>
              <strong>リスクや疑問に基づいている</strong>
              （仕様・過去の不具合・ステークホルダーの懸念などから発想する）
            </li>
            <li>
              <strong>時間内に完了できる粒度である</strong>
              （大きすぎる場合は分割する）
            </li>
            <li>
              <strong>対象外（スコープ外）も明示できるとなお良い</strong>
              （後の解釈のブレを防ぐ）
            </li>
          </ul>

          <div className="figure">
            <div className="cap">FIGURE S1-A ｜ チャーター作成の流れ</div>
            <div className="mermaid-target">
              <Mermaid chart={DIAGRAM_2} />
            </div>
          </div>

          <div className="note">
            <strong>補足｜</strong>
            本書ではチャーターを事前に大量生成しておく「チャーター・ライブラリ」を作る発想や、「悪夢の見出しゲーム（The
            Nightmare Headline Game）」—
            もしこの機能が原因でニュースの見出しになるとしたら、それはどんな見出しか？を考えることでリスクを洗い出す
            — といった、チャーターのアイデア出しを支援するワークも紹介されています。
          </div>
        </section>

        {/* STEP2 */}
        <section id="step2">
          <div className="sec-tag">
            <span className="num step">2</span>
            <span className="label">SESSION-BASED TEST MANAGEMENT</span>
          </div>
          <h2>セッションを構造化する</h2>
          <p>
            チャーターを書いたら、実際に<strong>タイムボックス化されたセッション</strong>
            として実行します。ここで参照される代表的な方法論が、
            <strong>James Bach と Jonathan Bach（兄弟）</strong>
            が2000年に考案した
            <strong>Session-Based Test Management（SBTM）</strong>
            です。これは探索的テストに対してよく向けられる「再現性がない」「測定できない」「説明責任が果たせない」という批判に応えるために生まれた仕組みで、探索的テストに構造とアカウンタビリティを与えるものとして広く実務で採用されています。
          </p>

          <div className="figure">
            <div className="cap">FIGURE S2-A ｜ SBTMの基本サイクル</div>
            <div className="mermaid-target">
              <Mermaid chart={DIAGRAM_3} />
            </div>
          </div>

          <h3>セッションの長さの目安</h3>
          <div className="tblwrap">
            <table>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>目安時間</th>
                  <th>主な用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ショート</td>
                  <td>〜45分程度</td>
                  <td>集中しにくい環境、細かい機能確認</td>
                </tr>
                <tr>
                  <td>ノーマル</td>
                  <td>60〜90分</td>
                  <td>標準的な探索セッション。90分が最適とされることが多い</td>
                </tr>
                <tr>
                  <td>ロング</td>
                  <td>90〜120分以上</td>
                  <td>複雑な機能、深く追いかけたい調査</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            セッション中はメール・チャット通知などをオフにし、
            <strong>中断されない集中した時間</strong>
            として扱うことがポイントです。セッション終了後は「デブリーフィング（振り返り）」を行い、発見した情報・不具合・新たな疑問をチームに共有します（詳細はStep
            8）。
          </p>
        </section>

        {/* STEP3 */}
        <section id="step3">
          <div className="sec-tag">
            <span className="num step">3</span>
            <span className="label">OBSERVE THE DETAILS</span>
          </div>
          <h2>観察力を鍛える ― 見えないものを見えるようにする</h2>
          <p>
            本書 第3章「Observe the Details」のテーマです。この章でHendricksonが取り上げる有名な例え話が「
            <strong>ムーンウォークするクマ（Moonwalking Bear）</strong>
            」で、注意を1点に向けていると、視界の中の明らかな異常にすら気づかなくなるという
            <strong>非注意性盲目（inattentional blindness）</strong>
            の心理学的現象を指しています。テスターも同様に、「期待した結果が出たかどうか」だけに注意を向けていると、画面の隅で起きている別の異常を見逃してしまう、というのがこの章の教訓です。
          </p>

          <h3>観察のためのベストプラクティス</h3>
          <ul>
            <li>
              <strong>期待した結果だけでなく、画面全体・周辺の変化にも意識的に注意を向ける</strong>
            </li>
            <li>
              <strong>テスタビリティ（testability）を高める</strong>
              ：ログ出力、デバッグコンソール、管理画面などを積極的に活用する
            </li>
            <li>
              <strong>コンソールやログを常時確認する</strong>
              ：UI上は正常に見えても、裏側でエラーが出ていることは珍しくない
            </li>
            <li>
              <strong>「何も表示されない」ことも1つの情報として扱う</strong>
              ：エラーが握りつぶされて画面に何も出ないケースこそ危険な場合がある
            </li>
          </ul>

          <div className="figure">
            <div className="cap">FIGURE S3-A ｜ 観察範囲を広げるチェックポイント</div>
            <div className="mermaid-target">
              <Mermaid chart={DIAGRAM_4} />
            </div>
          </div>
        </section>

        {/* STEP4 */}
        <section id="step4">
          <div className="sec-tag">
            <span className="num step">4</span>
            <span className="label">FIND INTERESTING VARIATIONS</span>
          </div>
          <h2>「面白い変化（バリエーション）」を見つける</h2>
          <p>
            本書 第4章「Find Interesting
            Variations」は、複数のレビュー記事で「本書の中で最も価値が高い章」「ソフトウェアテスト本の中で一番好きな章」と評されるほど、実務者からの評価が高い章です。LogiGear社のブログでは、この章だけで書籍の価格に見合う価値がある、と評されています。
          </p>
          <p>
            この章の核心は、「<strong>変数（variables）とは、変化しうるすべてのもの</strong>」という考え方です。
          </p>

          <div className="tblwrap">
            <table>
              <thead>
                <tr>
                  <th>変数の種類</th>
                  <th>具体例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>入力変数</td>
                  <td>フォームの入力値、アップロードファイル、APIパラメータ</td>
                </tr>
                <tr>
                  <td>出力変数</td>
                  <td>表示されるメッセージ、レスポンス、生成されるファイル</td>
                </tr>
                <tr>
                  <td>隠れた変数</td>
                  <td>セッション状態、キャッシュ、タイムゾーン、ロケール設定</td>
                </tr>
                <tr>
                  <td>微妙な変数</td>
                  <td>文字エンコーディング、浮動小数点の丸め、並び順、同時実行のタイミング</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            「微妙な変数（subtle
            variables）」ほど見落とされやすく、それが原因で大きな不具合（本書の言う
            &quot;Subtle Variables, Big Disasters&quot;）につながることが強調されています。
          </p>

          <h3>バリエーションを見つけるための問いかけ</h3>
          <ul>
            <li>この画面・機能に関わる「変数」を、思いつく限りすべて書き出してみたか？</li>
            <li>入力だけでなく、環境・タイミング・順序・組み合わせも変数として捉えられているか？</li>
            <li>「普段は固定だと思っている値」（言語設定、通貨、日付書式など）は、本当に固定か？</li>
          </ul>
        </section>

        {/* STEP5 */}
        <section id="step5">
          <div className="sec-tag">
            <span className="num step">5</span>
            <span className="label">EVALUATE RESULTS</span>
          </div>
          <h2>結果を評価する（オラクル問題）</h2>
          <p>
            本書 第5章「Evaluate Results」のテーマです。探索的テストでは事前に「正解」が書かれたテストケースが存在しないため、
            <strong>「これは正しい挙動か、それともバグか」をその場で判断する基準（オラクル）</strong>
            が必要になります。
          </p>

          <div className="tblwrap">
            <table>
              <thead>
                <tr>
                  <th>オラクルの種類</th>
                  <th>判断基準の例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Never / Always ヒューリスティック</td>
                  <td>
                    「絶対に〜してはいけない」「常に〜であるべき」という一般原則（例：クレジットカード番号を平文でログに出力してはいけない）
                  </td>
                </tr>
                <tr>
                  <td>代替リソース</td>
                  <td>仕様書、既存の類似機能、競合製品、過去のバージョンとの比較</td>
                </tr>
                <tr>
                  <td>近似</td>
                  <td>
                    厳密な正解がなくても「おおよそ妥当な範囲」で判断する（パフォーマンス値など）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            初学者にとって重要なのは、
            <strong>「仕様書に書いていないから正解が分からない」という状態でも、判断のための手がかりは複数存在する</strong>
            という点です。オラクルを複数持っておくことで、仕様の不備そのものにも気づきやすくなります。
          </p>
        </section>

        {/* STEP6 */}
        <section id="step6">
          <div className="sec-tag">
            <span className="num step">6</span>
            <span className="label">ADDING DIMENSIONS</span>
          </div>
          <h2>探索に「次元」を加える</h2>
          <p>
            Part 2「Adding Dimensions」（第6〜9章）では、探索の「切り口」を広げるための具体的な技法が紹介されます。基礎スキル（チャーター・観察・バリエーション・評価）を土台に、以下の4つの視点を追加していきます。
          </p>

          <div className="tblwrap">
            <table>
              <thead>
                <tr>
                  <th>章</th>
                  <th>次元</th>
                  <th>中心的な問い</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>第6章</td>
                  <td>操作の順序・組み合わせ</td>
                  <td>
                    名詞（対象）と動詞（操作）を洗い出し、想定外の順番で操作したらどうなるか？
                    ランダムなナビゲーションやペルソナを使うとどんな発見があるか？
                  </td>
                </tr>
                <tr>
                  <td>第7章</td>
                  <td>エンティティと依存関係</td>
                  <td>
                    データのCRUD各操作は整合しているか？ データの流れを最後まで追えるか？
                  </td>
                </tr>
                <tr>
                  <td>第8章</td>
                  <td>状態と遷移</td>
                  <td>
                    システムには「状態」と「イベント」がいくつ存在するか？ 想定していない遷移が起きないか？
                  </td>
                </tr>
                <tr>
                  <td>第9章</td>
                  <td>システムを取り巻く環境</td>
                  <td>
                    このシステムは何と連携しているか？ 信頼境界はどこにあるか？「もし〜だったら」を問い続ける
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>CRUDのライフサイクルを図で捉える（第7章）</h3>
          <div className="figure">
            <div className="cap">FIGURE S6-A ｜ CRUD ライフサイクル</div>
            <div className="mermaid-target">
              <Mermaid chart={DIAGRAM_5} />
            </div>
          </div>

          <h3>状態遷移モデルの例（第8章）</h3>
          <p>
            本書では、状態モデル図を描くことで「想定していない遷移」や「本来あってはならない状態」を見つけやすくなる、という技法が紹介されています。例えば認証機能を単純化すると次のようになります。
          </p>
          <div className="figure">
            <div className="cap">FIGURE S6-B ｜ 認証機能の状態遷移モデル</div>
            <div className="mermaid-target">
              <Mermaid chart={DIAGRAM_6} />
            </div>
          </div>
          <p>
            この図を描いた上で、「ログイン試行中に別タブでログアウトしたら？」「ロック中に正しいパスワードを入力したら？」のように、
            <strong>図に描かれていない・想定されていない遷移</strong>
            を意図的に探しにいくのが、状態モデルを使った探索の勘所です。
          </p>

          <h3>エコシステムと信頼境界の図（第9章）</h3>
          <div className="figure">
            <div className="cap">FIGURE S6-C ｜ システムのエコシステムと信頼境界</div>
            <div className="mermaid-target">
              <Mermaid chart={DIAGRAM_7} />
            </div>
          </div>
          <p>
            信頼境界をまたぐポイント（図でいえば外部決済APIやサードパーティ連携との接続部分）は、探索的テストで重点的に狙うべきリスクの高い領域として本書で強調されています。
          </p>
        </section>

        {/* STEP7 */}
        <section id="step7">
          <div className="sec-tag">
            <span className="num step">7</span>
            <span className="label">PUTTING IT IN CONTEXT</span>
          </div>
          <h2>コンテキストに応じて探索を適用する</h2>
          <p>
            Part 3「Putting It in Context」（第10〜13章）では、探索的テストを様々な現場の状況に適用する方法が紹介されます。
          </p>
          <div className="tblwrap">
            <table>
              <thead>
                <tr>
                  <th>章</th>
                  <th>状況</th>
                  <th>ポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>第10章</td>
                  <td>UIが存在しない対象（API、言語、Webサービス）</td>
                  <td>
                    REPLやコンソールを使い、不具合の「性質を特徴づける」ことに焦点を当てる
                  </td>
                </tr>
                <tr>
                  <td>第11章</td>
                  <td>既存の（ドキュメントが乏しい）システム</td>
                  <td>
                    「偵察セッション」から始め、観察内容を共有し、ステークホルダーへのインタビューから疑問を集める
                  </td>
                </tr>
                <tr>
                  <td>第12章</td>
                  <td>要件定義の会議そのもの</td>
                  <td>
                    会議に同席し「〜性（-ilities）」に耳を傾け、アクティブリーディングでチャーターの種を見つける
                  </td>
                </tr>
                <tr>
                  <td>第13章</td>
                  <td>プロジェクト全体</td>
                  <td>
                    テスト戦略への組み込み、ペア探索、根本原因の発見、探索の見積もり
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            第13章でHendricksonが述べている考え方として、「テスト戦略にチェックと探索の両方が含まれ、チームがテストで得られた情報をもとに行動するとき、非常に高品質なソフトウェアが生まれる」という趣旨のメッセージが紹介されています。これは、探索的テストを「片手間の作業」ではなく、
            <strong>チーム全体の意思決定プロセスの一部</strong>
            として位置づける本書の一貫した主張の集約点といえます。
          </p>
        </section>

        {/* STEP8 */}
        <section id="step8">
          <div className="sec-tag">
            <span className="num step">8</span>
            <span className="label">DEBRIEF &amp; ITERATE</span>
          </div>
          <h2>デブリーフィングと継続的改善</h2>
          <p>
            セッションを実施したら終わりではなく、
            <strong>デブリーフィング（debrief）</strong>
            を通じて次のサイクルに知見をつなげることが重要です。
          </p>
          <h3>デブリーフィングで確認すべきこと</h3>
          <ul>
            <li>
              このセッションで<strong>何を学んだか</strong>（機能そのものについて／システムのリスクについて）
            </li>
            <li>
              <strong>見つかった不具合</strong>とその重要度
            </li>
            <li>
              チャーターから<strong>外れた（off-charter）</strong>探索があった場合、それは正当だったか
            </li>
            <li>
              次のセッションで<strong>チャーターにすべき新しい疑問</strong>が生まれたか
            </li>
            <li>
              「もう十分に探索した」と判断できる材料は何か（第13章「How to Tell When You Have Explored Enough」のテーマ）
            </li>
          </ul>
          <p>
            デブリーフィングの内容は、ステークホルダーへの報告や、チーム内のナレッジとして蓄積される「有用な知恵の断片（Capturing
            Useful Nuggets of Wisdom）」としても活用されます。
          </p>
        </section>
      </main>
    </div>
  );
}
