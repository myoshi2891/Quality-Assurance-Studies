import React from 'react';
import type { Metadata } from 'next';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import SummaryChecklist from './SummaryChecklist';
import './lessons-learned-guide.css';

export const metadata: Metadata = {
  title: 'Lessons Learned in Software Testing 実践ガイド ー 初学者のためのステップバイステップ解説',
  description:
    'テスト分野の古典 "Lessons Learned in Software Testing: A Context-Driven Approach" (Cem Kaner, James Bach, Bret Pettichord 著) の要点を初学者向けに再構成した実践ガイド。',
};

const DIAGRAM_OVERVIEW = `flowchart TB
subgraph S1["基礎編 テスターとしての土台"]
A1["第1章 テスターの役割"]
A2["第2章 テスターの思考法"]
A1 --> A2
end
subgraph S2["実践編 手を動かす技術"]
B1["第3章 テスト技法"]
B2["第4章 バグアドボカシー"]
B3["第5章 テスト自動化"]
B1 --> B2 --> B3
end
subgraph S3["運用編 現場で人と回す"]
C1["第6章 テストの文書化"]
C2["第7章 プログラマーとの協働"]
C3["第8章 プロジェクト管理"]
C4["第9章 チーム管理"]
C1 --> C2 --> C3 --> C4
end
subgraph S4["発展編 キャリアと戦略"]
D1["第10章 キャリア形成"]
D2["第11章 テスト戦略の立案"]
D1 --> D2
end
S1 --> S2 --> S3 --> S4`;

const DIAGRAM_TECHNIQUES = `flowchart TB
P["人ベースの技法"] --> Hub["状況に応じて組み合わせるテスト技法"]
C["カバレッジベースの技法"] --> Hub
R["問題ベースの技法"] --> Hub
Ac["活動ベースの技法"] --> Hub
E["評価ベースの技法"] --> Hub
classDef hub fill:#e9c874,stroke:#8a6708,stroke-width:2px,color:#241a00
class Hub hub`;

const DIAGRAM_BUG = `flowchart TB
A["バグを発見する"] --> B["再現条件を調査する"]
B --> C["説得力のある報告を書く"]
C --> D["トリアージで優先度を議論する"]
D --> E{"修正されるか"}
E -->|"修正される"| F["修正内容を検証する"]
E -->|"延期される"| G["延期理由を記録し追跡し続ける"]
F --> H{"正しく直っているか"}
H -->|"はい"| I["レポートをクローズする"]
H -->|"いいえ"| C
G --> J["次のリリース判断時に再度取り上げる"]
classDef done fill:#cfe3d6,stroke:#3f6b4a,stroke-width:2px,color:#123319
class I done`;

const DIAGRAM_PLAN = `flowchart TB
S1["1 主要な課題を把握する"] --> S2["2 ミッションを明確にする"]
S2 --> S3["3 プロダクトを分析する"]
S3 --> S4["4 プロダクトリスクを分析する"]
S4 --> S5["5 テスト戦略を設計する"]
S5 --> S6["6 ロジスティクスを計画する"]
S6 --> S7["7 計画を共有する"]
S7 -.->|"新しい情報をもとに再び見直す"| S1
classDef hub fill:#e9c874,stroke:#8a6708,stroke-width:2px,color:#241a00
class S5 hub`;

const DIAGRAM_AI = `flowchart LR
Plan["計画"] --> Dev["開発"]
Dev --> CI["CI CDでのテスト自動化"]
CI --> Prod["本番運用"]
Tester["テスターの探索的思考と判断"] -.->|"リスクを見極める"| Plan
Tester -.->|"バグアドボカシー"| Dev
AI["AI支援のテスト生成と保守"] -.->|"効率化を提供"| CI
Tester -.->|"シグナルを検証しノイズを除く"| CI
classDef done fill:#cfe3d6,stroke:#3f6b4a,stroke-width:2px,color:#123319
class Prod done`;

export default function LessonsLearnedPage() {
  return (
    <div className="lessons-learned-layout">
      <NavBar />

      <div className="main">
        {/* Hero */}
        <div className="hero">
          <h1>
            Lessons Learned in Software Testing<br />実践ガイド ー
            初学者のためのステップバイステップ解説
          </h1>
          <p className="lead">
            テスト分野の古典 &quot;Lessons Learned in Software Testing: A Context-Driven
            Approach&quot; (Cem Kaner, James Bach, Bret Pettichord 著, Wiley, 2001年刊)
            の構成と考え方をベースに、
            初学者が最初につまずくポイントを解消しながら読み進められるように再構成しました。
          </p>
          <div className="badge-row">
            <span className="badge">
              <i className="ti ti-book"></i> 全11章 293レッスンの要点
            </span>
            <span className="badge">
              <i className="ti ti-chart-dots-3"></i> Mermaid図解 5点
            </span>
            <span className="badge">
              <i className="ti ti-calendar"></i> 2026年8月時点の情報を反映
            </span>
          </div>
        </div>

        <div className="prose">
          {/* 1. はじめに */}
          <section id="intro">
            <h2>
              <i className="ti ti-flag-3"></i>1. はじめに ー
              この本が「テストの古典」と呼ばれる理由
            </h2>
            <p>
              &quot;Lessons Learned in Software Testing&quot;
              は、テスト業界で「コンテキスト駆動学派 (Context-Driven School)」の
              創始者として知られる3人の専門家による共著です。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>著者</th>
                    <th>略歴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cem Kaner</td>
                    <td>
                      元フロリダ工科大学教授(同大学名誉教授。法学・実験心理学の博士号を保有)。&quot;Testing
                      Computer Software&quot; &quot;Bad Software&quot;
                      などの著者としても知られる、テスト分野の第一人者
                    </td>
                  </tr>
                  <tr>
                    <td>James Bach</td>
                    <td>
                      Satisfice, Inc. の創業者。Apple や Borland
                      での競争の激しいソフトウェア開発経験を持ち、探索的テストやリスクベーステストの体系化に貢献
                    </td>
                  </tr>
                  <tr>
                    <td>Bret Pettichord</td>
                    <td>
                      独立コンサルタント。Software Testing Hotlist
                      の編集者としても著名
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              本書は、3人が持つ合計30年以上(後年の紹介では50年以上)のテスト経験から抽出した、
              <strong>293個の「レッスン」</strong>
              を11章にまとめた構成になっています。各レッスンは
              「主張(アサーション)」とその解説・具体例のペアで構成されており、体系的な教科書というよりも
              「経験則集」に近いスタイルが特徴です。
            </p>

            <p>
              本書の根底にあるのが
              <strong>コンテキスト駆動アプローチ (Context-Driven Approach)</strong>
              という考え方です。
              これは「唯一絶対の正しいテスト手法は存在せず、テストのやり方はプロジェクトの状況(コンテキスト)に応じて
              選択すべきである」という思想で、後にコンテキスト駆動学派として世界中のテストコミュニティに広がりました。
            </p>
          </section>

          {/* 2. 全体マップ */}
          <section id="overview">
            <h2>
              <i className="ti ti-map-2"></i>2. 本書の全体マップ
            </h2>
            <p>
              11の章は、大きく「基礎編」「実践編」「運用編」「発展編」の4つの塊として捉えると理解しやすくなります。
            </p>

            <figure className="diagram">
              <div className="mermaid-wrapper" id="diag-overview">
                <Mermaid chart={DIAGRAM_OVERVIEW} />
              </div>
              <figcaption>
                図1: 本書11章の全体マップ(基礎編 → 実践編 → 運用編 → 発展編)
              </figcaption>
            </figure>

            <p>
              初学者は、まず「基礎編」で自分の役割と思考の型を理解し、「実践編」で具体的な技術
              (技法・バグ報告・自動化)
              を身につけ、「運用編」でチームや他職種との協働を学び、
              最終的に「発展編」でキャリアと戦略という長期的視点を得る、という順序で読み進めると理解が深まります。
            </p>
          </section>

          {/* 3. Step1 */}
          <section id="step1">
            <h2>
              <i className="ti ti-headlights"></i>3. ステップ1: テスターの役割を理解する
            </h2>
            <p>
              第1章(レッスン1〜15)は、「テスターとは何をする人か」という最も基本的な問いを扱います。
              初学者がまず誤解しやすいポイントを整理します。
            </p>

            <h3>押さえるべき考え方</h3>
            <ul>
              <li>
                <strong>テスターはプロジェクトの「ヘッドライト」である</strong>:
                進行方向に何があるか(リスクや問題)を関係者より先に照らし出す役割であり、後から結果を採点する「審判」ではありません。
              </li>
              <li>
                <strong>テストの目的(ミッション)が、やることすべてを決める</strong>:
                品質を上げること自体が目的なのではなく、「誰のために、何を明らかにするためにテストするのか」を最初に定義する必要があります。
              </li>
              <li>
                <strong>テスターは複数の利害関係者にサービスを提供する</strong>:
                開発者、プロダクトマネージャー、経営層、エンドユーザーなど、テスターが向き合う相手は一人ではありません。
              </li>
              <li>
                <strong>すべてのバグを見つけることはできない</strong>:
                時間もリソースも有限である以上、「十分なテスト」とは「関係者が意思決定できるだけの情報が揃った状態」を指します。
              </li>
              <li>
                <strong>テスターはゲートキーパー(門番)になってはいけない</strong>:
                リリースの可否を最終決定するのはテスターではなく、組織がその権限を与えた意思決定者(プロダクトオーナー、マネジメント層、リリース判定会議など、体制によって異なる)です。テスターの役割は判断材料を提供することにあります。
              </li>
            </ul>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>よくある誤解</th>
                    <th>実際の考え方</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>「バグをゼロにするのが自分の仕事」</td>
                    <td>
                      バグをゼロにすることは不可能。重要なバグを早く見つけることが仕事
                    </td>
                  </tr>
                  <tr>
                    <td>「テストに合格したらリリースしてよい」</td>
                    <td>
                      テスト結果は判断材料の一つに過ぎず、リリース可否の最終権限は組織が定めた意思決定者にあり、テスターにはない。テスターは判断材料の提供に責任を持つ
                    </td>
                  </tr>
                  <tr>
                    <td>「テストは開発が終わってから始まる工程」</td>
                    <td>
                      テストの機会は、要件定義からリリース後まで、成果物が人から人へ引き渡されるあらゆる場面に存在する
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Step2 */}
          <section id="step2">
            <h2>
              <i className="ti ti-brain"></i>4. ステップ2: テスターのように考える
            </h2>
            <p>
              第2章(レッスン16〜47)は、テストという行為を支える認知的な土台を扱います。
              本書の中でも最も哲学的で、かつ実務に直結する部分です。
            </p>

            <h3>核心となる考え方</h3>
            <ul>
              <li>
                <strong>テストは「認識論(epistemology)」の応用である</strong>:
                テストとは、突き詰めれば「私たちは何を知っており、何を知らないのか」を明らかにする活動です。
              </li>
              <li>
                <strong>テストはあなたの頭の中で起きている</strong>:
                テストケースを実行する行為そのものより、何を確認すべきかを考え、結果をどう解釈するかという思考プロセスの方が本質的です。
              </li>
              <li>
                <strong>すべてのテストは何らかのモデルに基づいている</strong>:
                プロダクト・ユーザー・リスクについて自分が持っている「モデル(頭の中の地図)」の精度が、テストの質を左右します。
              </li>
              <li>
                <strong>探索とは深く考えることである</strong>:
                探索的テストは行き当たりばったりにクリックすることではなく、学習・設計・実行を同時並行で行う高度な思考活動です。
              </li>
              <li>
                <strong>直感は良い出発点だが、悪い結論である</strong>:
                「なんとなく大丈夫そう」という感覚はテストのきっかけとしては有用ですが、それだけで「合格」と判断してはいけません。
              </li>
              <li>
                <strong>バイアスは避けられないが、管理はできる</strong>:
                自分が思い込みによって見落としをしている可能性を常に自覚し、意図的に視点を変える工夫(別の担当者によるレビュー、時間を置いての再確認など)が有効です。
              </li>
              <li>
                <strong>新鮮な目が失敗を見つける</strong>:
                同じ人が長時間見続けたプロダクトには「馴れ」による見落としが発生しやすいため、新しいメンバーやペアテストの視点が重要です。
              </li>
            </ul>

            <h3>実践のヒント</h3>
            <ol>
              <li>
                テストを始める前に「このテストで何を明らかにしたいのか」を一文で言語化する。
              </li>
              <li>
                「なぜこの結果になったのか」を説明できない場合は、まだ理解が浅いというサインと捉える。
              </li>
              <li>
                手順書に従うだけでなく、「この手順は本当に今のリスクに対して適切か」を都度問い直す。
              </li>
            </ol>
          </section>

          {/* 5. Step3 */}
          <section id="step3">
            <h2>
              <i className="ti ti-apps"></i>5. ステップ3: テスト技法を使い分ける
            </h2>
            <p>
              第3章(レッスン48〜54)では、数多く存在するテスト技法を、5つの視点から整理するフレームワークが紹介されています。
            </p>

            <figure className="diagram">
              <div className="mermaid-wrapper" id="diag-techniques">
                <Mermaid chart={DIAGRAM_TECHNIQUES} />
              </div>
              <figcaption>図2: テスト技法を捉える5つの視点</figcaption>
            </figure>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>視点</th>
                    <th>焦点</th>
                    <th>具体例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>人ベース</td>
                    <td>誰がテストするか</td>
                    <td>
                      初心者テスター、ドメイン専門家、エンドユーザーによるテスト
                    </td>
                  </tr>
                  <tr>
                    <td>カバレッジベース</td>
                    <td>何をテストするか</td>
                    <td>機能一覧、画面遷移、コードパスに基づく網羅</td>
                  </tr>
                  <tr>
                    <td>問題ベース</td>
                    <td>なぜテストするか(リスク)</td>
                    <td>
                      セキュリティリスク、性能リスク、過去の不具合傾向に基づくテスト
                    </td>
                  </tr>
                  <tr>
                    <td>活動ベース</td>
                    <td>どのように進めるか</td>
                    <td>探索的テスト、スクリプトテスト、ペアテスト</td>
                  </tr>
                  <tr>
                    <td>評価ベース</td>
                    <td>合否をどう判定するか(オラクル)</td>
                    <td>
                      仕様書との比較、過去バージョンとの比較、ユーザー期待との比較
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              重要なのは、これらは互いに排他的な分類ではなく「同じ技法を、異なる視点から見ている」に過ぎないという点です。
              たとえば「探索的テスト」は活動ベースの技法であると同時に、テスターの経験(人ベース)にも強く依存します。
            </p>

            <h3>補足: 組み合わせテスト(オールペア法)の考え方</h3>
            <p>
              本書には、入力項目が多い場合にすべての組み合わせを網羅するのが非現実的なときの手法として、
              <strong>オールペア法 (All-Pairs Technique)</strong>
              の考え方も紹介されています。
            </p>
            <ol className="step-list">
              <li>各入力項目を「ドメイン分割(同値分割)」して代表値を洗い出す。</li>
              <li>
                まず、各項目の値が最低1回は登場する組み合わせ(オールシングル)を作る。
              </li>
              <li>
                次に、任意の2項目の値の組み合わせがすべて最低1回は登場するように調整する(オールペア)。
              </li>
              <li>
                網羅率とテストケース数のバランスを見ながら、実務上必要な組み合わせのみに絞り込む。
              </li>
            </ol>
          </section>

          {/* 6. Step4 */}
          <section id="step4">
            <h2>
              <i className="ti ti-bug"></i>6. ステップ4:
              優れたバグレポートを書く(バグアドボカシー)
            </h2>
            <p>
              第4章(レッスン55〜101)は本書の中でも特にボリュームが大きく、
              <strong>「バグアドボカシー (Bug Advocacy)」</strong>
              という独自の概念を扱っています。
              これは単なる「不具合報告の書き方」ではなく、「見つけた不具合を実際に修正してもらうための説得力ある伝え方」を指します。
            </p>

            <figure className="diagram">
              <div className="mermaid-wrapper" id="diag-bug">
                <Mermaid chart={DIAGRAM_BUG} />
              </div>
              <figcaption>図3: バグレポートのライフサイクル</figcaption>
            </figure>

            <h3>押さえるべき原則</h3>
            <ul>
              <li>
                <strong>バグレポートはあなた自身を映す「代理人」である</strong>:
                報告の質が低いと、それだけで不具合そのものが軽視されてしまいます。
              </li>
              <li>
                <strong>1つのバグには1つのレポート</strong>:
                複数の問題を1つのレポートにまとめると、一部だけ修正されて残りが放置されるリスクが生じます。
              </li>
              <li>
                <strong>サマリー行が最も重要</strong>:
                トリアージ担当者はまずサマリーしか読まないため、内容が一目でわかる要約力が求められます。
              </li>
              <li>
                <strong>severity(深刻度)と priority(優先度)は別物</strong>:
                深刻度は「問題の技術的な大きさ」、優先度は「今すぐ直すべきかどうかというビジネス判断」であり、この2つを混同しないことが重要です。
              </li>
              <li>
                <strong>再現しないバグも必ず報告する</strong>:
                「たまにしか起きない不具合」は、将来的に重大な障害の前兆(いわゆる時限爆弾)である可能性があるため、再現できないからといって握りつぶしてはいけません。
              </li>
              <li>
                <strong>誇張しない、決めつけない</strong>:
                問題を正確に報告することが重要で、原因を決めつけて報告すると誤った修正判断につながる可能性があります。
              </li>
              <li>
                <strong>修正されたことを鵜呑みにしない</strong>:
                プログラマーが「直した」と言っても、必ず自分で検証してからクローズする習慣が信頼性を担保します。
              </li>
            </ul>

            <div className="callout source">
              <div className="callout-title">
                <i className="ti ti-quote"></i>現代の視点:
                バグアドボカシーは「調査」の技術である
              </div>
              <p>
                国際的なテストコミュニティでも、バグアドボカシーの考え方は現在も引き継がれています。
                フィンランドを拠点とする著名なテスト専門家 Maaret Pyhäjärvi
                は、2024年のブログ記事でバグアドボカシーを
                「バグ報告の授業ではなく、バグ調査の授業である」と位置づけ、単に「動きませんでした」と伝えるだけでは
                逆効果であり、最短の再現手順を見つけ、必要なログを添えて、多忙で余裕のない相手にも読んでもらえる報告に
                仕上げる作業そのものに価値があると論じています。
              </p>
            </div>
          </section>

          {/* 7. Step5 */}
          <section id="step5">
            <h2>
              <i className="ti ti-robot"></i>7. ステップ5: テスト自動化を正しく使う
            </h2>
            <p>
              第5章(レッスン102〜141)は、「自動化すれば楽になる」という単純な思い込みに警鐘を鳴らす内容が中心です。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>誤解</th>
                    <th>本書の立場</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>自動化の目的はコスト削減</td>
                    <td>
                      目的は「開発プロセスの速度を上げること」「手動では届かない範囲までテストの手を広げること」
                    </td>
                  </tr>
                  <tr>
                    <td>100%自動化が理想</td>
                    <td>
                      自動化率を目標にすること自体がリスクであり、状況に応じた自動化戦略を選ぶべき
                    </td>
                  </tr>
                  <tr>
                    <td>自動化はツールを買えば済む</td>
                    <td>
                      自動化は立派な「ソフトウェア開発プロジェクト」であり、設計・レビュー・保守が必要
                    </td>
                  </tr>
                  <tr>
                    <td>自動テストは資産が増えるほど良い</td>
                    <td>
                      保守されない自動テストはやがて壊れて放置され、誰も気づかないまま無価値化する
                    </td>
                  </tr>
                  <tr>
                    <td>汚いテスト手順を自動化すれば改善する</td>
                    <td>
                      「汚いプロセスを自動化しても、速く汚くなるだけ」であり、自動化前にテスト設計を見直すべき
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              とりわけ重要な指摘が、
              <strong>
                「テスタビリティ (testability) への投資は、しばしば自動化そのものへの投資よりも価値が高い」
              </strong>
              という考え方です。テスタビリティとは、プロダクトの内部状態を外から観測・制御しやすくする
              設計上の工夫(ログ出力、テスト用API、状態のリセット機能など)を指し、これがあるだけで手動・自動を問わず
              テスト全体の効率が大きく向上します。
            </p>
          </section>

          {/* 8. Step6 */}
          <section id="step6">
            <h2>
              <i className="ti ti-file-text"></i>8. ステップ6: テストを文書化する
            </h2>
            <p>
              第6章(レッスン142〜149)は短い章ですが、実務で頻繁に議論になるテーマ、「どこまでドキュメントを書くべきか」を扱います。
            </p>
            <ul>
              <li>
                テンプレートを使うべきかどうかは状況次第であり、「テンプレートを使えば自動的に品質が上がる」という考え方にも「テンプレートは形骸化するので不要」という考え方にも、どちらにも一理あります。
              </li>
              <li>
                標準規格を使うかどうかも、プロジェクトの契約形態や監査要件に応じて判断すべきであり、無条件に採用・排除するものではありません。なお本書が前提としていた
                IEEE 829
                は既に廃止された旧世代のテストドキュメント標準であり、現行の標準は
                ISO/IEC/IEEE
                29119-3:2021(テスト文書化)です。ただし契約や監査要件によっては、いまなお
                IEEE 829 形式の文書が求められる場合があります。
              </li>
              <li>
                ドキュメントを作る前に、「そもそも何のためにこの文書が必要なのか」という要件分析を行うべきであり、これはソフトウェア開発と同じ考え方が当てはまります。
              </li>
              <li>
                テスト文書化の目的は、最終的には「1文・3要素以内」で説明できるくらいまでシンプルに絞り込めるはずです。
              </li>
            </ul>
          </section>

          {/* 9. Step7 */}
          <section id="step7">
            <h2>
              <i className="ti ti-users"></i>9. ステップ7: プログラマーと協働する
            </h2>
            <p>
              第7章(レッスン150〜156)は短いながらも、テスターと開発者の関係性という、現場で最も摩擦が生まれやすいテーマを扱っています。
            </p>
            <ul>
              <li>
                プログラマーがどう考えるかを理解する努力をすることが、協働の出発点になります。
              </li>
              <li>
                信頼は一朝一夕には築けないため、日々の小さなやり取りの積み重ねが重要です。
              </li>
              <li>
                批判の矛先は「仕事の成果物」に向けるべきであり、「人」に向けてはなりません。
              </li>
              <li>
                プログラマーは自分の仕事について話すのを好む傾向があるため、質問を投げかけることが関係構築の近道になります。
              </li>
            </ul>
          </section>

          {/* 10. Step8 */}
          <section id="step8">
            <h2>
              <i className="ti ti-clipboard-list"></i>10. ステップ8:
              テストプロジェクトを管理する
            </h2>
            <p>
              第8章(レッスン157〜209)は本書で最もボリュームが大きい章の一つで、日々のテストプロジェクト運営の実務的な知恵が詰まっています。
            </p>
            <ul>
              <li>
                <strong>「サービス文化」を作る。「コントロール文化」を作ろうとしない</strong>:
                テストチームは開発を統制する部隊ではなく、価値ある情報を提供するサービス部門であるという自己認識を持つべきです。
              </li>
              <li>
                <strong>テスターが管理するのは「テストという名のサブプロジェクト」であり、開発プロジェクト全体ではない</strong>:
                権限の範囲を正しく認識することが、無用な軋轢を避けます。
              </li>
              <li>
                <strong>スモークテストでビルドの受け入れ可否を判断する</strong>:
                本格的なテストを始める前に、最低限の動作確認で「テスト可能な品質か」をふるいにかけます。
              </li>
              <li>
                <strong>セッションベースドテスト管理</strong>:
                探索的テストのセッションに「チャーター(憲章、目的)」を与え、時間を区切って実施・記録することで、自由度の高い探索的テストにも説明責任を持たせられます。
              </li>
              <li>
                <strong>バグ件数だけで進捗を語らない</strong>:
                バグの発見数はテストの深さや対象範囲によって大きく変わるため、単一の指標に頼った進捗管理は危険であり、複数の独立した指標を組み合わせるべきです。
              </li>
              <li>
                <strong>バランスドスコアカードで複数の観点から状況を報告する</strong>:
                進捗・品質・リスクなど、複数軸で状況を可視化することが、経営層への説明責任にもつながります。
              </li>
              <li>
                <strong>テスターはリリースの可否そのものにサインオフしない</strong>:
                「テストを自分が納得する水準まで実施した」という事実にサインオフするのであり、リリースの承認そのものは別の意思決定者の役割です。
              </li>
            </ul>
          </section>

          {/* 11. Step9 */}
          <section id="step9">
            <h2>
              <i className="ti ti-user-star"></i>11. ステップ9: テストチームを管理する
            </h2>
            <p>
              第9章(レッスン210〜244)は、テストリーダーやテストマネージャー向けの内容ですが、初学者が「良いチームとはどういうものか」を理解するうえでも有用です。
            </p>
            <ul>
              <li>
                <strong>スタッフを「幹部」として扱う</strong>:
                単なる作業者としてではなく、判断力を信頼される専門職として扱うことで、モチベーションと成果の両方が向上します。
              </li>
              <li>
                <strong>新人テスターの立ち上げ方には型がある</strong>:
                いきなり複雑な機能を任せるのではなく、まず既存ドキュメントとソフトウェアの突き合わせや、過去のバグの再確認といった作業から慣らしていくことが推奨されています。
              </li>
              <li>
                <strong>士気はチームの重要な資産である</strong>:
                過度な残業を強いること、スタッフが理不尽な扱いを受けることを放置しないことが、長期的なチームの生産性を守ります。
              </li>
              <li>
                <strong>採用は合議制で、誠実さを最重視する</strong>:
                スキルの高さだけでなく、チームの合意形成や人としての誠実さを重視した採用判断が推奨されています。
              </li>
            </ul>
          </section>

          {/* 12. Step10 */}
          <section id="step10">
            <h2>
              <i className="ti ti-briefcase"></i>12. ステップ10:
              テスターとしてのキャリアを築く
            </h2>
            <p>
              第10章(レッスン245〜273)は、テスターという職種を「一生の専門職」としてどう育てていくかという、キャリア論に近い内容です。
            </p>
            <ul>
              <li>
                自分のキャリアの方向性を主体的に選び、追求することが重要であり、会社の都合に流されるだけのキャリア形成は避けるべきです。
              </li>
              <li>
                テスターとしての専門性は、必ずしもプログラマーより収入が低いことを意味しません。
              </li>
              <li>
                カンファレンスは「参加する」だけでなく「議論に加わる」場として活用します。
              </li>
              <li>
                履歴書やポートフォリオは、自分を売り込むための積極的なツールとして設計します。
              </li>
              <li>
                スクリプト言語やプログラミング言語の習得は、テスターとしての可能性を広げる投資です。
              </li>
              <li>
                資格取得そのものを目的化しすぎることには注意が必要であり、短期間で得られる資格に過信しすぎないことが望ましいとされています。
              </li>
            </ul>
          </section>

          {/* 13. Step11 */}
          <section id="step11">
            <h2>
              <i className="ti ti-target-arrow"></i>13. ステップ11: テスト戦略を立案する
            </h2>
            <p>
              第11章(レッスン274〜293)は本書の集大成にあたる章で、個々の技法やレッスンを、プロジェクト全体の「戦略」としてどう統合するかを扱っています。
            </p>

            <h3>戦略を考えるための3つの基本的な問い</h3>
            <ol>
              <li>
                <strong>なぜテストするのか(why bother)</strong>
              </li>
              <li>
                <strong>誰が気にするのか(who cares)</strong>
              </li>
              <li>
                <strong>どこまでやるのか(how much)</strong>
              </li>
            </ol>

            <h3>押さえるべき原則</h3>
            <ul>
              <li>
                <strong>
                  本当の「テスト計画」とは、あなたのテストプロセスを導く一連の考え方そのものであり、文書そのものではない
                </strong>
                。文書はその考え方を伝えるための一つの手段に過ぎません。
              </li>
              <li>
                <strong>テスト計画はコンテキストに合わせて設計する</strong>:
                他プロジェクトの計画をそのまま流用する「先祖崇拝」的な使い回しには注意が必要です。
              </li>
              <li>
                <strong>最初に立てた戦略は、常に間違っている</strong>:
                プロジェクトの状況は刻々と変化するため、最初の戦略は仮説にすぎず、継続的に見直すことが前提となります。
              </li>
              <li>
                <strong>プロダクトの成熟度に応じてテストの深さを変える</strong>:
                開発初期と終盤とでは、適切なテストの重点は異なります。
              </li>
            </ul>

            <h3>コンテキスト駆動テスト計画を「進化」させる7ステップ</h3>
            <p>
              本書には、テスト計画を一度作って終わりにするのではなく、継続的に更新していくための実践的な7ステップの流れが紹介されています。
            </p>

            <figure className="diagram">
              <div className="mermaid-wrapper" id="diag-plan">
                <Mermaid chart={DIAGRAM_PLAN} />
              </div>
              <figcaption>
                図4: コンテキスト駆動テスト計画を進化させる7ステップループ
              </figcaption>
            </figure>

            <p>
              このループが示す通り、テスト計画は一度作って完成させる「成果物」ではなく、プロジェクトの状況変化に合わせて
              回し続ける「プロセス」だという点が、本書全体を貫く最大のメッセージの一つです。
            </p>
          </section>

          {/* 14. Appendix */}
          <section id="appendix">
            <h2>
              <i className="ti ti-scale"></i>14. 付録: コンテキスト駆動学派の7つの原則
            </h2>
            <p>
              本書の付録Aでは、コンテキスト駆動学派の立場を7つの原則として整理しています(原文は英語ですが、要旨を日本語でまとめます)。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>番号</th>
                    <th>原則の要旨</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      ある状況における実践の価値は、その状況に強く依存する
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      どんな状況にも通用する「ベストプラクティス」は存在せず、その時々の「良い実践」があるだけである
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      人はプロジェクトにおいて、単なる歯車ではなく、他のどんな要素よりも重要な存在である
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      プロジェクトの進行は基本的に予測不可能であり、成功は人の能力と創造性に強く依存する
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      プロダクトとは、ある問題に対する解決策である。その問題が解決されていなければ、プロダクトは機能していない
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      良いソフトウェアテストとは、知的で困難な、頭脳労働としてのプロセスである
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      私たちの仕事が価値を持つのは、対象となるプロジェクトの文脈の中に置かれたときだけである
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              これらの原則は、後年「アジャイルテスト」や「探索的テストの体系化」といった潮流の理論的な土台としても引用され続けています。
            </p>
          </section>

          {/* 15. Modern */}
          <section id="modern">
            <h2>
              <i className="ti ti-sparkles"></i>15. 現代における実践 ー
              AI時代のテスト(2026年時点の視点)
            </h2>
            <p>
              &quot;Lessons Learned in Software Testing&quot;
              が刊行されたのは2001年ですが、その中核にある
              「コンテキストに応じて判断する」という思想は、生成AIやエージェント型AIがテスト工程に組み込まれ始めた
              2026年の現在においても、色あせるどころかむしろ重要性を増しています。国際的に著名なテスト専門家たちの
              直近の発信を見てみましょう。
            </p>

            <h3>Rapid Software Testing ー 本書の思想の直系の後継</h3>
            <p>
              本書の共著者である James Bach と、長年のパートナーである Michael Bolton
              は、2006年から 「ラピッドソフトウェアテスティング (Rapid Software
              Testing, RST)」という方法論・マインドセットを
              共同開発してきました。そして2025年11月には、両者の共著による解説書
              &quot;Taking Testing Seriously: The Rapid Software Testing Approach&quot;
              が刊行されています。 この新著は RST
              の体系を初めて本格的にまとめた決定版とされ、不確実性や時間的制約の中でも本質的な問題を
              見つけ出すための考え方を扱っており、&quot;Lessons Learned in Software
              Testing&quot; からの直接的な発展形といえる内容です。
            </p>

            <h3>エージェント型AIとテスターの役割の変化</h3>
            <p>
              決済プラットフォーム企業でデベロッパーリレーションズを率いる著名なテスト自動化専門家
              Angie Jones は、
              2025年のインタビューで、従来のチャット形式の生成AIと、自律的にタスクを実行する「エージェント型AI」の
              違いについて解説しています。チャット型AIは提案止まりで、実装は人間が手作業で行う必要があるのに対し、
              エージェント型AIはより自律的にタスクを遂行できる点が異なるとされています。この変化は、本書が説く
              「テスターは判断材料を集める役割であり、最終判断は人が下す」という原則を、AI時代にどう適用するかという
              新しい問いを投げかけています。
            </p>

            <div className="callout source">
              <div className="callout-title">
                <i className="ti ti-quote"></i>「シグナル対ノイズ」という新しい課題
              </div>
              <p>
                テスト自動化プラットフォームを提供する Applitools
                は、2026年の分析記事の中で、AIの活用が進むほど
                テストから得られる情報の量は増える一方、その質(シグナル)と単なる雑音(ノイズ)の見極めが最大の
                ボトルネックになっていると指摘しています。信頼性・説明可能性・再現性のある結果を重視する組織ほど、
                2026年のテスト戦略として優位に立つとされており、これは本書が繰り返し説く「バグレポートの説得力」
                「オラクル(合否判定基準)の妥当性」といった原則と本質的に同じ課題であるといえます。
              </p>
            </div>

            <div className="callout note">
              <div className="callout-title">
                <i className="ti ti-info-circle"></i>コミュニティでの継続的な議論
              </div>
              <p>
                国際的なテスターコミュニティ Ministry of Testing
                のフォーラムでも、2025年末から2026年にかけて
                「AIエージェントの普及によってQAの役割はどう変わるのか」という議論のスレッドが立てられています。
                そのスレッドでは、AIがテストケース生成やテストデータ作成、回帰テストの高速化を担う一方で、QAの役割は
                「リスクベースの戦略立案」や「継続的品質(シフトレフトとシフトライトの両方)」、そしてAI機能を含む
                プロダクトに対する「ガバナンスとセキュリティ」により重点を移していくという見方が、一部の参加者から
                示されています。ただしこれはスレッド1件と少数の返信の範囲で確認できた見解であり、コミュニティ全体の
                合意を示すものではない点に留意してください。
              </p>
            </div>

            <figure className="diagram">
              <div className="mermaid-wrapper" id="diag-ai">
                <Mermaid chart={DIAGRAM_AI} />
              </div>
              <figcaption>
                図5: 開発ライフサイクルにおけるテスターの判断とAIの役割分担
              </figcaption>
            </figure>

            <p>
              このように、AIはテスト業務の「効率化の担い手」として存在感を増していますが、「何をテストすべきか」
              「その結果を信頼してよいか」を判断する部分は、依然として人間のテスターの技能と判断に委ねられています。
              これはまさに、本書がコンテキスト駆動アプローチとして20年以上前から主張してきた立場と一致しています。
            </p>
          </section>

          {/* 16. Summary */}
          <section id="summary">
            <h2>
              <i className="ti ti-list-check"></i>16. まとめ ー
              明日から使えるチェックリスト
            </h2>
            <SummaryChecklist />
          </section>

          {/* 17. References */}
          <section id="references">
            <h2>
              <i className="ti ti-link"></i>17. 参考文献・出典
            </h2>
            <p>
              本ガイドの作成にあたり、2026年8月31日時点で参照した情報源は以下の通りです。
            </p>

            <div className="ref-group">
              <h3>
                <i className="ti ti-book-2"></i>原著と公式情報
              </h3>
              <ul className="ref-list">
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://www.oreilly.com/library/view/lessons-learned-in/9780471081128/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lessons Learned in Software Testing: A Context-Driven Approach
                    </a>
                  </div>
                  <div className="ref-desc">
                    O&apos;Reilly / Wiley
                    書籍ページ。目次全体(全11章293レッスンの見出し)を含む
                  </div>
                  <span className="ref-url">
                    https://www.oreilly.com/library/view/lessons-learned-in/9780471081128/
                  </span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://www.wiley.com/en-us/Lessons+Learned+in+Software+Testing:+A+Context-Driven+Approach-p-9780471081128"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lessons Learned in Software Testing
                    </a>
                  </div>
                  <div className="ref-desc">Wiley 公式出版社ページ</div>
                  <span className="ref-url">
                    https://www.wiley.com/en-us/Lessons+Learned+in+Software+Testing:+A+Context-Driven+Approach-p-9780471081128
                  </span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://www.goodreads.com/book/show/26258294"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lessons Learned in Software Testing (Goodreads)
                    </a>
                  </div>
                  <div className="ref-desc">レビュー・概要ページ</div>
                  <span className="ref-url">
                    https://www.goodreads.com/book/show/26258294
                  </span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://context-driven-testing.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Context-Driven Testing 公式サイト
                    </a>
                  </div>
                  <div className="ref-desc">コンテキスト駆動学派の7原則の出典</div>
                  <span className="ref-url">https://context-driven-testing.com/</span>
                </li>
              </ul>
            </div>

            <div className="ref-group">
              <h3>
                <i className="ti ti-users-group"></i>James Bach / Michael Bolton / Cem Kaner
              </h3>
              <ul className="ref-list">
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://www.satisfice.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Satisfice, Inc. ー James Bach 公式サイト
                    </a>
                  </div>
                  <span className="ref-url">https://www.satisfice.com/</span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://www.thoughtworks.com/insights/blog/disruptive-testing-part-1-james-bach"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Disruptive Testing: Part 1 ー James Bach インタビュー
                    </a>
                  </div>
                  <div className="ref-desc">Thoughtworks Insights</div>
                  <span className="ref-url">
                    https://www.thoughtworks.com/insights/blog/disruptive-testing-part-1-james-bach
                  </span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://developsense.com/about-michael-bolton"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      About Michael Bolton ー DevelopSense
                    </a>
                  </div>
                  <div className="ref-desc">
                    &quot;Taking Testing Seriously&quot; (2025年11月刊) の紹介を含む
                  </div>
                  <span className="ref-url">
                    https://developsense.com/about-michael-bolton
                  </span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://www.amazon.com/Taking-Testing-Seriously-Software-Approach/dp/1394253192"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Taking Testing Seriously: The Rapid Software Testing Approach
                    </a>
                  </div>
                  <div className="ref-desc">書籍情報(2025年11月刊)</div>
                  <span className="ref-url">
                    https://www.amazon.com/Taking-Testing-Seriously-Software-Approach/dp/1394253192
                  </span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://kaner.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cem Kaner 公式サイト
                    </a>
                  </div>
                  <span className="ref-url">https://kaner.com/</span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://kaner.com/pdfs/BugAdvocacy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bug Advocacy (Cem Kaner, PDF資料)
                    </a>
                  </div>
                  <span className="ref-url">https://kaner.com/pdfs/BugAdvocacy.pdf</span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://bbst.courses/bbst-bug-advocacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BBST Bug Advocacy コース概要
                    </a>
                  </div>
                  <span className="ref-url">https://bbst.courses/bbst-bug-advocacy/</span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://visible-quality.blogspot.com/2024/02/contemporary-bug-advocacy.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      A Seasoned Tester&apos;s Crystal Ball: Contemporary Bug Advocacy
                    </a>
                  </div>
                  <div className="ref-desc">Maaret Pyhäjärvi, 2024年</div>
                  <span className="ref-url">
                    https://visible-quality.blogspot.com/2024/02/contemporary-bug-advocacy.html
                  </span>
                </li>
              </ul>
            </div>

            <div className="ref-group">
              <h3>
                <i className="ti ti-robot"></i>2026年時点のAIとテストに関する動向
              </h3>
              <ul className="ref-list">
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://saucelabs.com/resources/blog/agentic-ai-and-the-future-of-software-testing-a-q-and-a-with-angie-jones"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agentic AI and the Future of Software Testing
                    </a>
                  </div>
                  <div className="ref-desc">
                    Angie Jones インタビュー(Sauce Labs)
                  </div>
                  <span className="ref-url">
                    https://saucelabs.com/resources/blog/agentic-ai-and-the-future-of-software-testing-a-q-and-a-with-angie-jones
                  </span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://applitools.com/blog/ai-testing-strategy-in-2026/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AI Testing in 2026: Why Signal, Trust, and Intentional Choices
                      Matter More Than Ever
                    </a>
                  </div>
                  <div className="ref-desc">Applitools</div>
                  <span className="ref-url">
                    https://applitools.com/blog/ai-testing-strategy-in-2026/
                  </span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://club.ministryoftesting.com/t/how-will-software-qa-change-in-2026-with-ai-agents-and-which-qa-roles-will-be-most-valuable/86992"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      How will Software QA change in 2026 with AI/Agents
                    </a>
                  </div>
                  <div className="ref-desc">
                    ディスカッションスレッド(Ministry of Testing)
                  </div>
                  <span className="ref-url">
                    https://club.ministryoftesting.com/t/how-will-software-qa-change-in-2026-with-ai-agents-and-which-qa-roles-will-be-most-valuable/86992
                  </span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://www.n-ix.com/software-testing-best-practices/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Software testing best practices for 2026
                    </a>
                  </div>
                  <div className="ref-desc">N-iX</div>
                  <span className="ref-url">
                    https://www.n-ix.com/software-testing-best-practices/
                  </span>
                </li>
                <li className="ref-item">
                  <div className="ref-title">
                    <a
                      href="https://www.evozon.com/how-ai-is-redefining-software-testing-practices-in-2026/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      How AI Is Redefining Software Testing Practices in 2026
                    </a>
                  </div>
                  <div className="ref-desc">Evozon</div>
                  <span className="ref-url">
                    https://www.evozon.com/how-ai-is-redefining-software-testing-practices-in-2026/
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="footer">
          本ガイドは教育目的の要約・解説であり、原著の文章を逐語的に引用したものではありません。
          正確な原文や全293レッスンの詳細については、上記リンクから原著(Wiley刊)をご参照ください。
        </div>
      </div>
    </div>
  );
}

