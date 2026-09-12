import React from 'react';
import type { Metadata } from 'next';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
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
        </div>
      </div>
    </div>
  );
}
