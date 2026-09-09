import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './how-google-tests-software-guide.css';

export const metadata: Metadata = {
  title: '『How Google Tests Software』完全ガイド ― Googleのソフトウェアテスト文化を初学者向けに解説',
  description:
    'James Whittaker・Jason Arbon・Jeff Carollo著『How Google Tests Software』を初学者向けにステップバイステップで解説。SET/TE/TEM、Small/Medium/Large、ACC分析、Test Certified、フレーキーテスト対策、2026年時点の最新動向までMermaid図解付きで紹介。',
};

const DIAGRAM_HISTORY = `flowchart TB
A["Google初期 手動リグレッションテストへの依存"] --> B["有志による Testing Grouplet結成"]
B --> C["2006年 GTAC第1回をロンドンで開催"]
B --> D["2007年 Testing on the Toilet連載開始"]
D --> E["Test Certified制度とテストサイズ分類を整備"]
C --> F["2012年 書籍 How Google Tests Software 出版"]
E --> F
F --> G["2016年 SET職をSETIへ改称"]
G --> H["2017年 GTAC最終開催"]
H --> I["2020年 後継書籍 Software Engineering at Google 刊行"]
I --> J["2024年以降 Tech on the Toiletとして継続"]
classDef box fill:#fbf7ec,stroke:#c9bd9a,color:#24211c,stroke-width:1px;
classDef hub fill:#33417a,stroke:#232c56,color:#fbf7ec,stroke-width:1px;
classDef done fill:#2f5d43,stroke:#1f3f2c,color:#fbf7ec,stroke-width:1px;
class A,B,C,D,E,G,H,I box;
class F hub;
class J done;`;

const DIAGRAM_ROLES = `flowchart LR
DEV["ソフトウェアエンジニア SWE"] -->|コードレビュー| SET["SET テスト自動化基盤の開発"]
SET -->|テスト基盤を提供| DEV
TE["TE リスク分析と品質保証"] -->|リスクマップを提示| DEV
SET <-->|密接に協働| TE
TEM["TEM 採用と品質戦略"] --> SET
TEM --> TE
classDef box fill:#fbf7ec,stroke:#c9bd9a,color:#24211c,stroke-width:1px;
classDef hub fill:#33417a,stroke:#232c56,color:#fbf7ec,stroke-width:1px;
classDef done fill:#2f5d43,stroke:#1f3f2c,color:#fbf7ec,stroke-width:1px;
class DEV,SET,TE box;
class TEM hub;`;

const DIAGRAM_SIZES = `flowchart TB
L["Largeテスト 全体の約1割 本番同等環境で実行"] --> M["Mediumテスト 全体の約2割 複数プロセスが連携"] --> S["Smallテスト 全体の約7割 単一プロセス内で高速に実行"]
classDef box fill:#fbf7ec,stroke:#c9bd9a,color:#24211c,stroke-width:1px;
classDef hub fill:#33417a,stroke:#232c56,color:#fbf7ec,stroke-width:1px;
classDef done fill:#2f5d43,stroke:#1f3f2c,color:#fbf7ec,stroke-width:1px;
class L,M box;
class S done;`;

const DIAGRAM_ACC = `flowchart TB
A["Attributes 属性 製品を形容する言葉"] --> CAP["Capabilities 能力"]
C["Components 構成要素 製品を構成する部品"] --> CAP
CAP --> RISK["リスク評価 発生確率と影響度"]
RISK --> HEATMAP["リスクヒートマップ"]
HEATMAP --> TESTS["テストケースとテスト計画"]
classDef box fill:#fbf7ec,stroke:#c9bd9a,color:#24211c,stroke-width:1px;
classDef hub fill:#33417a,stroke:#232c56,color:#fbf7ec,stroke-width:1px;
classDef done fill:#2f5d43,stroke:#1f3f2c,color:#fbf7ec,stroke-width:1px;
class A,C,RISK,HEATMAP box;
class CAP hub;
class TESTS done;`;

const DIAGRAM_CERTIFIED = `flowchart TB
L1["レベル1 継続的ビルド導入とテスト分類"] --> L2["レベル2 フレーキーテストの隔離と修正"] --> L3["レベル3 カバレッジ向上と品質目標設定"] --> L4["レベル4以上 品質文化の他チームへの伝播"]
classDef box fill:#fbf7ec,stroke:#c9bd9a,color:#24211c,stroke-width:1px;
classDef hub fill:#33417a,stroke:#232c56,color:#fbf7ec,stroke-width:1px;
classDef done fill:#2f5d43,stroke:#1f3f2c,color:#fbf7ec,stroke-width:1px;
class L1,L2,L3 box;
class L4 done;`;

const DIAGRAM_FLAKY = `flowchart TD
START["テストが不安定 たまに失敗する"] --> Q1{"同じ入力同じコードで結果が変わるか"}
Q1 -->|変わらない 常に失敗| BUG["本物のバグとして修正する"]
Q1 -->|変わる 非決定的| Q2{"原因はテストコードか本番コードか"}
Q2 -->|テストコードの欠陥| FIX1["時刻や乱数や外部依存をモックに置き換える"]
Q2 -->|本番コードの非決定性| FIX2["競合状態や実行順序への依存を解消する"]
FIX1 --> RERUN["継続的ビルド上で安定性を再監視する"]
FIX2 --> RERUN
RERUN --> DONE["安定を確認し通常のテストへ戻す"]
classDef box fill:#fbf7ec,stroke:#c9bd9a,color:#24211c,stroke-width:1px;
classDef hub fill:#33417a,stroke:#232c56,color:#fbf7ec,stroke-width:1px;
classDef done fill:#2f5d43,stroke:#1f3f2c,color:#fbf7ec,stroke-width:1px;
class START,BUG,FIX1,FIX2,RERUN box;
class Q1,Q2 hub;
class DONE done;`;

const DIAGRAM_CI = `flowchart LR
CODE["コード変更 CL"] --> PRESUBMIT["プレサブミットチェック"] --> REVIEW["コードレビュー"] --> COMMIT["メインラインへコミット"] --> CI["継続的ビルド 全テストサイズを実行"] --> DASH["テストダッシュボードで可視化"] --> RELEASE["カナリアリリース"]
classDef box fill:#fbf7ec,stroke:#c9bd9a,color:#24211c,stroke-width:1px;
classDef hub fill:#33417a,stroke:#232c56,color:#fbf7ec,stroke-width:1px;
classDef done fill:#2f5d43,stroke:#1f3f2c,color:#fbf7ec,stroke-width:1px;
class CODE,PRESUBMIT,REVIEW,COMMIT,DASH box;
class CI hub;
class RELEASE done;`;

export default function HowGoogleTestsSoftwareGuidePage() {
  return (
    <div className="how-google-tests-page">
      <NavBar />

      <main className="main">
        <header className="hero">
          <span className="kicker">
            <i className="ti ti-book" aria-hidden="true" />
            書籍ガイド・QAエンジニア向け
          </span>
          <h1>『How Google Tests Software』完全ガイド</h1>
          <p className="subtitle">
            Googleのソフトウェアテスト文化を、初学者にもわかるようにステップバイステップで解説します。原書の考え方に加え、2026年9月現在までのGoogle公式情報もあわせて調査しました。
          </p>
          <div className="chips">
            <span className="chip">
              <i className="ti ti-users" aria-hidden="true" />
              James Whittaker・Jason Arbon・Jeff Carollo 著
            </span>
            <span className="chip">
              <i className="ti ti-calendar" aria-hidden="true" />
              Addison-Wesley Professional・2012年刊
            </span>
            <span className="chip">
              <a
                href="https://books.google.co.jp/books/about/How_Google_Tests_Software.html?id=vHlTOVTKHeUC&redir_esc=y"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ti ti-external-link" aria-hidden="true" />
                Google Booksで見る
              </a>
            </span>
          </div>
        </header>

        <div className="prose">
          {/* Section: about */}
          <section className="block" id="about">
            <h2>
              <span className="num">
                <i className="ti ti-info-circle" aria-hidden="true" />
              </span>
              この記事について
            </h2>
            <p>
              『How Google Tests Software』は、Googleでテスト部門を率いた James Whittaker（当時Googleのエンジニアリングディレクター。Chrome・Google Maps・Google+のテストを統括）と、同僚の Jason Arbon、Jeff Carollo が、Google社内のテスト組織・プロセス・文化を初めて外部に体系的に公開した書籍です。前書きは Alberto Savoia と Patrick Copeland（いずれもGoogleでテスト改革を主導した人物）が執筆しており、2012年のJolt Award最終候補にも選ばれました。
            </p>
            <p>
              本ガイドは、この書籍で語られる考え方に加えて、2026年9月現在までのGoogle公式テストブログ（testing.googleblog.com）や、Testing Grouplet創設メンバーである Mike Bland 氏のブログ、InfoQ（Craig Smith氏によるレビュー・著者インタビュー）などの一次情報を調査し、<strong>「2012年時点の考え方」と「2026年現在どう変化したか」の両方</strong>を初学者にもわかるようにまとめたものです。フローチャートはすべてMermaidで描画し、ASCIIによる図解は使用していません。
            </p>
          </section>

          {/* Section: s1 */}
          <section className="block" id="s1">
            <h2>
              <span className="num">1</span>なぜGoogleは独自のテスト文化を築いたのか
            </h2>
            <p>
              2000年代半ばのGoogleでは、検索・Gmail・Docsといった無料プロダクトを、既存の有料製品より高品質にする必要がありました。しかし当時は手動によるリグレッションテストへの依存が大きく、コードベースが巨大化するにつれてリリースサイクルが遅くなり、バグの発見が遅れるほど修正コストが跳ね上がるという典型的な問題に直面していました。
            </p>
            <p>
              これに対して、有志のエンジニアたちが「Testing Grouplet」という非公式のボランティア活動を結成し、全社に自動テストの文化を広める活動を始めます。この活動から生まれたのが、後に書籍の土台となる仕組み――Testing on the Toilet（TotT）、Test Certified制度、そしてGTAC（Google Test Automation Conference）でした。
            </p>

            <div className="diagram-card">
              <div className="diagram-scroll">
                <div className="mermaid" id="dg-history">
                  <Mermaid chart={DIAGRAM_HISTORY} />
                </div>
              </div>
              <p className="diagram-caption">
                図1: Googleのテスト文化が形成された歴史的な流れ（2000年代半ば〜2026年）
              </p>
            </div>

            <p>
              この流れの重要な点は、テスト改革が<strong>トップダウンの命令ではなく、現場のボランティア活動から始まった</strong>ということです。Testing Grouplet の中心人物の一人であった Mike Bland 氏は、当時Google Web Server（GWS）チームのリードだった Bharat Mediratte 氏とともに、「自動テストが付いていない変更は受け付けない」という厳格な方針を導入し、継続的ビルドとカバレッジ計測を定着させたことをブログで振り返っています。
            </p>
          </section>

          {/* Section: s2 */}
          <section className="block" id="s2">
            <h2>
              <span className="num">2</span>Googleのテスト思想：「品質」と「テスト」は別物
            </h2>
            <p>
              本書で繰り返し強調される最も重要な考え方は、<strong>「品質（Quality）」と「テスト（Test）」はイコールではない</strong>というものです。テストは品質を確認する手段の一つに過ぎず、品質そのものは開発とテストを一体化させたプロセス全体から生まれる、という立場を取っています。
            </p>
            <p>
              Patrick Copeland は前書きで、「テスターに開発者と同等のコーディングスキルを求め、テストという機能をプロダクトの一機能として扱う」という方針転換の難しさを語っています。エンジニアからは「テストなんてQAの仕事だ」という反発があり、テスター側からも「自分たちの役割が変わることへの抵抗」があったといいます。
            </p>
            <blockquote>
              「Scarcity brings clarity（乏しさは明確さをもたらす）」― Google共同創業者 Larry Page の言葉として、書籍内で繰り返し引用されています。
            </blockquote>
            <p>
              Googleはプロダクト規模に対してテスターの人数を意図的に絞り込むことで、「本当に必要な部分にだけ人手をかける」という優先順位付けの規律を生み出したとされています。
            </p>
            <div className="callout indigo">
              <i className="ti ti-bulb" aria-hidden="true" />
              <div>
                <div className="callout-title">初学者へのポイント</div>
                <p>
                  テストを「専門のテスターだけの仕事」と捉えず、開発プロセス自体に組み込むという考え方が、Googleのテスト文化のすべての土台になっています。
                </p>
              </div>
            </div>
          </section>

          {/* Section: s3 */}
          <section className="block" id="s3">
            <h2>
              <span className="num">3</span>3つのテストエンジニアリングの役割
            </h2>
            <p>
              書籍の第2〜4章は、それぞれ異なる役割に割り当てられています。この3つの役割の関係を理解することが、本書を読み解く鍵になります。
            </p>

            <div className="diagram-card">
              <div className="diagram-scroll">
                <div className="mermaid" id="dg-roles">
                  <Mermaid chart={DIAGRAM_ROLES} />
                </div>
              </div>
              <p className="diagram-caption">図2: SET・TE・TEMの3つの役割の関係</p>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>役割</th>
                    <th>略称</th>
                    <th>主な仕事</th>
                    <th>求められるスキル</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Software Engineer in Test</td>
                    <td>SET</td>
                    <td>
                      テスト自動化基盤・実行環境の開発、既存コードのテスタビリティ改善、継続的ビルド／プレサブミット環境の整備
                    </td>
                    <td>
                      ソフトウェアエンジニアと同等のコーディング力に加え、テスト設計・ツール開発の専門性
                    </td>
                  </tr>
                  <tr>
                    <td>Test Engineer</td>
                    <td>TE</td>
                    <td>
                      リスク分析（ACC分析）、テスト計画立案、探索的テスト、クラウドソーシングの活用、バグレポートの精査
                    </td>
                    <td>
                      対象プロダクトのドメイン知識、コーディング力、ユーザー視点での品質へのこだわり
                    </td>
                  </tr>
                  <tr>
                    <td>Test Engineering Manager</td>
                    <td>TEM</td>
                    <td>
                      SET/TEチームの採用・育成、組織横断の品質戦略の立案、他部門との調整
                    </td>
                    <td>マネジメント経験に加えて技術的バックグラウンド</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              書籍のTE章では、「テストを体系的に教える学校が少ないため、コーディング力と品質へのこだわりを兼ね備えたTEを採用するのは、どの会社にとっても難しい」という趣旨の指摘がなされています。つまりGoogle自身も、この3つの役割にふさわしい人材確保に苦労してきたことが率直に語られている点は、初学者にとって参考になるでしょう。
            </p>
          </section>

          {/* Section: s4 */}
          <section className="block" id="s4">
            <h2>
              <span className="num">4</span>テストサイズという考え方：Small / Medium / Large
            </h2>
            <p>
              Googleのテスト文化を象徴する概念の一つが、テストを「単体・結合・システム」のような従来の分類ではなく、<strong>実行に必要なリソース（プロセス数・メモリ・実行時間・依存先）を基準にした「Small／Medium／Large」という3段階</strong>で分類する方式です。
            </p>
            <p>
              この仕組みは、Testing Grouplet の Mike Bland 氏らが中心となって整備したもので、旧来のビルドルールを廃止し、サイズ属性を持つ新しいテストルールに統合する形でビルドシステムに組み込まれました。新人研修では、Smallを底辺、Largeを頂点とするピラミッド図としてこの比率が説明されていたといいます。
            </p>

            <div className="diagram-card">
              <div className="diagram-scroll">
                <div className="mermaid" id="dg-sizes">
                  <Mermaid chart={DIAGRAM_SIZES} />
                </div>
              </div>
              <p className="diagram-caption">
                図3: Small / Medium / Large の関係（上ほど広範囲・下ほど高速で数が多い）
              </p>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>サイズ</th>
                    <th>実行範囲</th>
                    <th>許可される依存関係</th>
                    <th>目安の実行時間</th>
                    <th>目安の構成比</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Small</td>
                    <td>単一プロセス内</td>
                    <td>不可（ネットワーク・ディスクI/O・他プロセス禁止）</td>
                    <td>数十ミリ秒〜1秒未満</td>
                    <td>約70%</td>
                  </tr>
                  <tr>
                    <td>Medium</td>
                    <td>単一マシン内の複数プロセス</td>
                    <td>localhost通信のみ許可</td>
                    <td>数秒〜1分未満</td>
                    <td>約20%</td>
                  </tr>
                  <tr>
                    <td>Large</td>
                    <td>複数マシン・本番同等環境</td>
                    <td>外部ネットワーク・実サービス呼び出し可</td>
                    <td>数分以上</td>
                    <td>約10%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Mike Bland 氏自身がブログで振り返っているとおり、この「70/20/10」という比率は厳密な統計から導かれたものではなく、あくまで議論の出発点として感覚的に決めた数字だったといいます。それでも、この語彙が定着したことで、社内での議論が「テストの呼び方」を巡る不毛な論争から「テストの目的」を巡る建設的な議論へとシフトした点が重要だとされています。
            </p>
            <p>
              この分類は後に、<strong>TAP（Test Automation Platform）</strong>と呼ばれる社内基盤にも受け継がれ、「Smallを最優先、次にMedium、最後にLarge」という順序で実行し、分散実行環境と高速なフィードバックループを提供する仕組みへと発展しました。
            </p>
          </section>

          {/* Section: s5 */}
          <section className="block" id="s5">
            <h2>
              <span className="num">5</span>リスクベースのテスト計画：ACC分析と10分間テストプラン
            </h2>
            <p>
              TE章の中核をなすのが、<strong>ACC（Attribute・Component・Capability）分析</strong>と呼ばれるリスクベースのテスト計画手法です。従来の分厚いテスト計画書を書く代わりに、対象システムを3つの要素に素早く分解し、リスクの高い部分から優先的にテストする考え方です。
            </p>

            <div className="diagram-card">
              <div className="diagram-scroll">
                <div className="mermaid" id="dg-acc">
                  <Mermaid chart={DIAGRAM_ACC} />
                </div>
              </div>
              <p className="diagram-caption">図4: ACC分析からテストケースを導くまでの流れ</p>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ACCの要素</th>
                    <th>品詞のたとえ</th>
                    <th>ECサイトを例にした場合</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Attribute（属性）</td>
                    <td>形容詞</td>
                    <td>「速い」「安全」「使いやすい」</td>
                  </tr>
                  <tr>
                    <td>Component（構成要素）</td>
                    <td>名詞</td>
                    <td>「カート」「検索」「決済」「レビュー」</td>
                  </tr>
                  <tr>
                    <td>Capability（能力）</td>
                    <td>動詞（属性×構成要素の交差点）</td>
                    <td>「安全にカートへ商品を追加できる」「速く検索結果を絞り込める」</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Google社内では、この分析結果を記録・可視化するために<strong>Google Test Analytics（GTA）</strong>という社内ツールが開発され、後にオープンソースとしても公開されました。リスクは「発生確率（Frequency of Failure）」と「影響度（Impact）」の2軸で評価され、最終的に優先度の高い領域を示す「リスクヒートマップ」が生成されます。
            </p>

            <h3>10分間テストプラン</h3>
            <p>
              著者の James Whittaker は、あるとき参加者に「10分間で製品のテスト計画を書いてもらう」という実験を行いました。時間制約があるため、参加者は長い文章ではなく、箇条書きや表形式で要点だけをまとめる傾向がありました。この実験から得られた結論は、<strong>「テスト計画は完璧である必要はなく、まず何をテストすべきか（＝Capability）を素早く洗い出すことこそが本質だ」</strong>というものです。ACC分析は、この10分間テストプランを体系化したものと位置づけられています。
            </p>
          </section>

          {/* Section: s6 */}
          <section className="block" id="s6">
            <h2>
              <span className="num">6</span>Test Certified：品質改善のはしご
            </h2>
            <p>
              Test Certified（通称「TC」）は、チームが自動テストの成熟度を段階的に高めていくためのマイルストーン制度です。Mike Bland 氏は「厳密には12ステップではないが、12ステップ・プログラムのようなもの」と表現しています。
            </p>

            <div className="diagram-card">
              <div className="diagram-scroll">
                <div className="mermaid" id="dg-certified">
                  <Mermaid chart={DIAGRAM_CERTIFIED} />
                </div>
              </div>
              <p className="diagram-caption">図5: Test Certifiedの成熟度レベル</p>
            </div>

            <p>
              レベル1は「1日〜5日程度で達成できる」ように設計されており、まずは現状を可視化するための土台（継続的ビルド、カバレッジ計測、テストサイズの分類、フレーキーテストの洗い出し）を整えることに主眼が置かれています。
            </p>
            <div className="callout gold">
              <i className="ti ti-bulb" aria-hidden="true" />
              <div>
                <div className="callout-title">面白い副次効果</div>
                <p>
                  Test Certified Mentorに登録すると、テスト人材が慢性的に不足している社内で、通常なら得られないはずのテスト人材の支援を受けられたといいます。成熟度向上の取り組み自体が、希少なテストリソースを引き寄せる仕組みとしても機能していたわけです。
                </p>
              </div>
            </div>
          </section>

          {/* Section: s7 */}
          <section className="block" id="s7">
            <h2>
              <span className="num">7</span>フレーキーテスト（不安定なテスト）との戦い方
            </h2>
            <p>
              フレーキーテストとは、<strong>コードを変更していないのに、実行するたびに成功したり失敗したりする</strong>非決定的なテストのことです。Googleでは2008年の時点ですでにTotT（Testing on the Toilet）でこの問題を取り上げており、現在に至るまで継続的な関心事となっています。
            </p>
            <p>原因は大きく2つに分類されます。</p>
            <ol>
              <li>テスト対象のコード自体に非決定的な欠陥がある（競合状態など）</li>
              <li>テストコード自体に欠陥がある（時刻・乱数・外部依存・共有リソースへの依存など）</li>
            </ol>

            <div className="diagram-card">
              <div className="diagram-scroll">
                <div className="mermaid" id="dg-flaky">
                  <Mermaid chart={DIAGRAM_FLAKY} />
                </div>
              </div>
              <p className="diagram-caption">
                図6: フレーキーテストの原因切り分けと対処フロー
              </p>
            </div>

            <p>
              Googleでは、フレーキーテストを放置すると「テストが失敗しても誰も気にしなくなる」という信頼崩壊が起きることを重視し、原因不明のまま無視するのではなく、原因を切り分けて修正するか、一時的に隔離するかを明確にルール化しています。この考え方は、後継書籍『Software Engineering at Google』（2020年）でも引き続き重要なテーマとして扱われています。
            </p>
          </section>

          {/* Section: s8 */}
          <section className="block" id="s8">
            <h2>
              <span className="num">8</span>クラウドソーシングとドッグフーディング
            </h2>
            <p>
              書籍の著者インタビュー（InfoQ掲載）によると、Googleが外部から全面的に取り入れた数少ない「テスト手法」がクラウドソーシングだったといいます。ベータテスターや一般ユーザーからのフィードバックを活用し、社内リソースだけでは網羅しきれない多様な環境・利用シナリオでの検証を補完する狙いがあります。
            </p>
            <p>
              また、Google社内では自社製品を社員自身が日常的に使う「ドッグフーディング」も広く実践されており、例えばChromeの品質改善では、社内向けの先行ビルドを配布して問題を早期に発見する取り組みが行われてきました。書籍のレビューによれば、Google社内で開発された<strong>BITE（Browser Integrated Test Environment）</strong>という、ブラウザに統合されたテスト支援ツールも紹介されています。
            </p>
            <p>
              著者の一人は「オープンソースコミュニティ（特にSeleniumやWebDriver）に関わり続けることが、最新のテスト手法をキャッチアップする最良の方法だ」とも語っており、Googleが商用テストツールよりもオープンソースへの貢献を重視してきた姿勢がうかがえます。
            </p>
          </section>

          {/* Section: s9 */}
          <section className="block" id="s9">
            <h2>
              <span className="num">9</span>継続的インテグレーションと「Testing on the Toilet」文化
            </h2>
            <p>
              Googleでは、コードの変更（CL: Changelist）がメインラインに取り込まれるまでに、プレサブミットチェック・コードレビュー・継続的ビルドという複数の関門を通過します。
            </p>

            <div className="diagram-card">
              <div className="diagram-scroll">
                <div className="mermaid" id="dg-ci">
                  <Mermaid chart={DIAGRAM_CI} />
                </div>
              </div>
              <p className="diagram-caption">
                図7: コード変更からリリースまでの継続的インテグレーションの流れ
              </p>
            </div>

            <p>
              この文化を支えてきたもう一つの仕組みが、社内トイレの個室に1枚ものの記事を掲示する<strong>Testing on the Toilet（TotT）</strong>です。2007年1月に始まったこの取り組みは、コードレビューでの良い応答の仕方、テストダブル（フェイク／モック）の使い分け、変更検出だけのテスト（Change-Detector Tests）を避ける方法など、実践的なトピックを継続的に発信してきました。
            </p>
            <div className="callout forest">
              <i className="ti ti-calendar-event" aria-hidden="true" />
              <div>
                <div className="callout-title">2026年9月時点の最新動向</div>
                <p>
                  Google公式テストブログ（testing.googleblog.com）は稼働を続けており、直近では2026年7月21日付で「Prefactoring（先行リファクタリング）」という記事が公開されています。興味深いことに、この連載は2024年12月ごろから<strong>「Tech on the Toilet」</strong>という名称に変わっており、テストに限らずコードレビューでの効果的な返信の仕方や、マップのルックアップ処理の最適化など、より広範なソフトウェアエンジニアリングの実践知を扱うようになっています。
                </p>
              </div>
            </div>
          </section>

          {/* Section: s10 */}
          <section className="block" id="s10">
            <h2>
              <span className="num">10</span>初学者のためのステップバイステップ導入ガイド
            </h2>
            <p>
              ここまでの内容を踏まえ、自分のチーム・プロジェクトにGoogle流の考え方を取り入れるための8つのステップを紹介します。書籍の著者インタビューでも「Googleがやってきたことをコピーして、自分たちのソフトウェアエンジニアリングDNAの一部にしてしまうのが良い」とアドバイスされています。
            </p>
            <ol className="step-list">
              <li>
                <span className="step-num" />
                <div>
                  <div className="step-title">開発とテストを分離しない文化をつくる</div>
                  <p>
                    「テストは専任者の仕事」という前提を捨て、コードを書いたエンジニア自身がテストにも責任を持つ体制を目指します。
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num" />
                <div>
                  <div className="step-title">
                    既存のテストをSmall／Medium／Largeに分類し、可視化する
                  </div>
                  <p>
                    実行時間・依存関係を基準に分類するだけで、「なぜこのテストスイートは遅いのか」が可視化されます。
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num" />
                <div>
                  <div className="step-title">
                    継続的ビルドとプレサブミットチェックを導入する
                  </div>
                  <p>
                    「テストのないコード変更はマージしない」というルールを、ツールで強制できる形にします。
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num" />
                <div>
                  <div className="step-title">
                    ACC分析でリスクマップを作り、10分間テストプランから始める
                  </div>
                  <p>
                    完璧な計画書を目指さず、まず10分でCapability（できること）を洗い出すところから始めます。
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num" />
                <div>
                  <div className="step-title">
                    フレーキーテストをゼロトレランスで扱うルールを決める
                  </div>
                  <p>
                    「失敗しても気にしない」文化が定着する前に、原因切り分けと隔離のルールを明文化します。
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num" />
                <div>
                  <div className="step-title">小さく始めて成熟度のはしごを登る</div>
                  <p>
                    Test Certifiedのように、まず1〜5日で達成できる最初のマイルストーン（継続的ビルド・カバレッジ計測・テスト分類）から着手します。
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num" />
                <div>
                  <div className="step-title">
                    品質にまつわる知識を共有する仕組みを作る
                  </div>
                  <p>
                    TotTのように、短く・定期的に・実例ベースで知見を発信する仕組み（社内Wiki、Slackの定期投稿など）を用意します。
                  </p>
                </div>
              </li>
              <li>
                <span className="step-num" />
                <div>
                  <div className="step-title">
                    自動化できる領域を継続的に広げ、テストコストをゼロに近づける
                  </div>
                  <p>
                    書籍の最終章が示唆するように、「自動化・クラウドソーシングでテストコストを下げ続ける」ことをゴールに、定期的に見直します。
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Section: s11 */}
          <section className="block" id="s11">
            <h2>
              <span className="num">11</span>2012年から2026年までの進化：何が変わり、何が変わらなかったか
            </h2>
            <p>
              書籍出版から14年が経った2026年9月時点で、Googleのテスト組織・文化がどう変化したかを整理します。
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>2012年の書籍での呼称・概念</th>
                    <th>2026年現在の状況</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SET（Software Engineer in Test）</td>
                    <td>
                      2016年にSETI（Software Engineer, Tools &amp; Infrastructure）へ改称。テスト自動化に留まらず、IDE拡張・リリース自動化・本番監視まで含む「Engineering Productivity」全体を担う役割へ拡大
                    </td>
                  </tr>
                  <tr>
                    <td>TE（Test Engineer）</td>
                    <td>
                      現在も採用が続く職種。製品品質の権威として、リリース候補の自動検証や、機能横断の品質戦略を担う
                    </td>
                  </tr>
                  <tr>
                    <td>GTAC（外部カンファレンス）</td>
                    <td>
                      2006年から毎年開催されていたが、2017年の開催を最後に休止。アーカイブ動画は現在も公開されている
                    </td>
                  </tr>
                  <tr>
                    <td>Testing on the Toilet（TotT）</td>
                    <td>
                      2024年末ごろから「Tech on the Toilet」に改称され、テストに限らないエンジニアリング実践知を扱う連載として2026年現在も継続中
                    </td>
                  </tr>
                  <tr>
                    <td>Google Test Analytics（ACC用ツール）</td>
                    <td>
                      オープンソース版としては公開されていたが、ACCという考え方自体は後継書籍やチームのプラクティスに引き継がれている
                    </td>
                  </tr>
                  <tr>
                    <td>書籍そのもの</td>
                    <td>
                      後継として『Software Engineering at Google』（2020年、O'Reilly、Titus Winters・Tom Manshreck・Hyrum Wright著）が、より成熟した時代のテスト文化を無料公開している
                    </td>
                  </tr>
                  <tr>
                    <td>GoogleTest（gtest、C++用ユニットテストライブラリ）</td>
                    <td>
                      オープンソースとして開発が継続しており、Android・Chromium・LLVMなどで利用され続けている
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              変わらなかった点としては、「開発とテストを一体化させる」という根本思想、テストをリソース消費量で分類する考え方（Small/Medium/Large）、そしてリスクベースでテスト対象を絞り込む発想（ACCの精神）が、形を変えながらも一貫して受け継がれていることが挙げられます。一方で、組織構造や役職名、外部発信の形（カンファレンスからブログ連載へ）は大きく変化しています。
            </p>
          </section>

          {/* Section: s12 */}
          <section className="block" id="s12">
            <h2>
              <span className="num">12</span>批判的視点・初学者が誤解しやすいポイント
            </h2>
            <p>本書を読む・参考にする際に注意すべき点もあります。</p>
            <ul className="check-list">
              <li>
                <i className="ti ti-alert-triangle" aria-hidden="true" />
                <div>
                  <strong>「Googleだからできた」問題</strong>：著者自身がインタビューで先回りして反論していますが、「潤沢なリソースがあるからこそ実現できた」という批判は根強くあります。著者は「私たちは優れたテスターだったからGoogleになれたのであり、Googleだから優れたテスターになれたわけではない」と反論していますが、スタートアップや小規模チームがそのまま適用しようとすると、体制や採用基準の面でハードルが高い部分もあります。
                </div>
              </li>
              <li>
                <i className="ti ti-alert-triangle" aria-hidden="true" />
                <div>
                  <strong>章ごとの筆致の違い</strong>：InfoQのレビュー（Craig Smith氏）では、3人の著者が分担して執筆したことで、章ごとに文体や構成の一貫性がやや欠ける点が指摘されています。
                </div>
              </li>
              <li>
                <i className="ti ti-alert-triangle" aria-hidden="true" />
                <div>
                  <strong>著者全員がその後Googleを退職している</strong>：同レビューでは、執筆時点でGoogleに在籍していた3人の著者が、出版後に全員Googleを離れたという事実にも触れられています。書籍の内容がある種の「過渡期のスナップショット」であることを念頭に置くとよいでしょう。
                </div>
              </li>
              <li>
                <i className="ti ti-alert-triangle" aria-hidden="true" />
                <div>
                  <strong>Agile用語をあえて使わない</strong>：著者インタビューでは「Googleはスクラムやスクラムマスターといった用語にはこだわらず、独自の高速な開発プロセスを築いてきた」と説明されています。アジャイル方法論の教科書的な実践とは異なる用語体系である点に注意が必要です。
                </div>
              </li>
              <li>
                <i className="ti ti-alert-triangle" aria-hidden="true" />
                <div>
                  <strong>「テスターを増やすな」という主張の文脈</strong>：書籍では意図的にテスターの人数を絞る方針が語られますが、これは「開発者自身がテストに責任を持つ」文化とセットで初めて機能する主張であり、単に人員を削減するだけでは同じ効果は得られません。
                </div>
              </li>
            </ul>
          </section>

          {/* Section: s13 */}
          <section className="block" id="s13">
            <h2>
              <span className="num">13</span>原著の章立て一覧
            </h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>章</th>
                    <th>タイトル（原題）</th>
                    <th>主な内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>第1章</td>
                    <td>Introduction to Google Software Testing</td>
                    <td>Googleのテスト思想の全体像、開発とテストの融合という基本方針</td>
                  </tr>
                  <tr>
                    <td>第2章</td>
                    <td>The Software Engineer in Test</td>
                    <td>SETの役割、テストサイズの定義、Test Certified制度</td>
                  </tr>
                  <tr>
                    <td>第3章</td>
                    <td>The Test Engineer</td>
                    <td>TEの役割、ACC分析、10分間テストプラン、クラウドソーシングとツール活用</td>
                  </tr>
                  <tr>
                    <td>第4章</td>
                    <td>The Test Engineering Manager</td>
                    <td>TEM/SETチームの採用・育成、組織運営、複数名へのインタビュー集</td>
                  </tr>
                  <tr>
                    <td>第5章</td>
                    <td>Improving How Google Tests Software</td>
                    <td>
                      テストの将来像、ドッグフーディング／クラウドソーシングの拡大、テストコストをゼロに近づけるという理想
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: s14 */}
          <section className="block" id="s14">
            <h2>
              <span className="num">14</span>まとめ：持ち帰るべき10のポイント
            </h2>
            <ul className="check-list">
              <li>
                <i className="ti ti-checkbox" aria-hidden="true" />
                <div>
                  「品質」は「テスト」とイコールではなく、開発プロセス全体で作り込むものである。
                </div>
              </li>
              <li>
                <i className="ti ti-checkbox" aria-hidden="true" />
                <div>
                  テストは専任の「テスター」だけの仕事ではなく、コードを書いた人自身の責任でもある。
                </div>
              </li>
              <li>
                <i className="ti ti-checkbox" aria-hidden="true" />
                <div>
                  テストは「単体／結合／システム」ではなく、実行に必要なリソース量（Small/Medium/Large）で分類すると議論が建設的になる。
                </div>
              </li>
              <li>
                <i className="ti ti-checkbox" aria-hidden="true" />
                <div>
                  リスクベースでテスト対象を絞り込むACC分析は、完璧な計画書より素早い優先順位付けを重視する。
                </div>
              </li>
              <li>
                <i className="ti ti-checkbox" aria-hidden="true" />
                <div>
                  「10分間テストプラン」のように、まず短時間で要点を洗い出すことがテスト計画の第一歩になる。
                </div>
              </li>
              <li>
                <i className="ti ti-checkbox" aria-hidden="true" />
                <div>
                  フレーキーテストは放置せず、原因（テスト側かコード側か）を切り分けて修正・隔離するルールを持つ。
                </div>
              </li>
              <li>
                <i className="ti ti-checkbox" aria-hidden="true" />
                <div>
                  品質改善は一足飛びではなく、Test Certifiedのような段階的なマイルストーンで進める。
                </div>
              </li>
              <li>
                <i className="ti ti-checkbox" aria-hidden="true" />
                <div>
                  クラウドソーシングやドッグフーディングは、社内リソースだけでは網羅できない検証を補完する。
                </div>
              </li>
              <li>
                <i className="ti ti-checkbox" aria-hidden="true" />
                <div>
                  継続的ビルド・プレサブミットチェック・コードレビューという複数の関門が、品質を支える仕組みの土台になる。
                </div>
              </li>
              <li>
                <i className="ti ti-checkbox" aria-hidden="true" />
                <div>
                  Googleの組織・役職名・発信手段は14年間で大きく変化しており、「今のGoogle」を知るには本書だけでなく後継の情報源も合わせて参照するとよい。
                </div>
              </li>
            </ul>
          </section>

          {/* Section: s15 */}
          <section className="block" id="s15">
            <h2>
              <span className="num">15</span>参考文献・出典URL一覧
            </h2>

            <div className="ref-group-title">
              <i className="ti ti-book" aria-hidden="true" />
              書籍・公式レビュー
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>出典</th>
                    <th>URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google Books（原著紹介ページ・本記事の起点）</td>
                    <td>
                      <a
                        href="https://books.google.co.jp/books/about/How_Google_Tests_Software.html?id=vHlTOVTKHeUC&redir_esc=y"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        books.google.co.jp
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Amazon（書籍情報・著者略歴）</td>
                    <td>
                      <a
                        href="https://www.amazon.com/Google-Tests-Software-James-Whittaker/dp/0321803027"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        amazon.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>O'Reilly（書籍情報・目次インデックス）</td>
                    <td>
                      <a
                        href="https://www.oreilly.com/library/view/how-google-tests/9780132851572/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        oreilly.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      InfoQ「Interview and Book Review: How Google Tests Software」（Craig Smith）
                    </td>
                    <td>
                      <a
                        href="https://www.infoq.com/articles/how-google-tests-software/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        infoq.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>InfoQ 提供のサンプル第3章PDF</td>
                    <td>
                      <a
                        href="https://res.infoq.com/articles/how-google-tests-software/en/resources/SampleChapter-Chapter3.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        res.infoq.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Software Testing Magazine によるレビュー</td>
                    <td>
                      <a
                        href="https://www.softwaretestingmagazine.com/knowledge/how-google-tests-software-by-james-whittaker/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        softwaretestingmagazine.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="ref-group-title">
              <i className="ti ti-brand-google" aria-hidden="true" />
              Google公式テストブログ
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>出典</th>
                    <th>URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google Testing Blog トップページ（2026年7月時点の最新記事を確認）</td>
                    <td>
                      <a
                        href="https://testing.googleblog.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        testing.googleblog.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>「Test Sizes」（Small/Medium/Largeの解説）</td>
                    <td>
                      <a
                        href="https://testing.googleblog.com/2010/12/test-sizes.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        testing.googleblog.com/2010/12/test-sizes.html
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>「What Test Engineers do at Google」</td>
                    <td>
                      <a
                        href="https://testing.googleblog.com/2016/09/what-test-engineers-do-at-google.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        testing.googleblog.com/2016/09/…
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      「From QA to Engineering Productivity」（SET→SETIへの改称の経緯）
                    </td>
                    <td>
                      <a
                        href="https://testing.googleblog.com/2016/03/from-qa-to-engineering-productivity.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        testing.googleblog.com/2016/03/…
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>「Evolution of GTAC and Engineering Productivity」</td>
                    <td>
                      <a
                        href="https://testing.googleblog.com/2017/07/evolution-of-gtac-and-engineering.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        testing.googleblog.com/2017/07/…
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>「TotT: Avoiding Flakey Tests」（2008年）</td>
                    <td>
                      <a
                        href="https://testing.googleblog.com/2008/04/tott-avoiding-flakey-tests.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        testing.googleblog.com/2008/04/…
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Google Test Automation Conference（GTAC）公式概要</td>
                    <td>
                      <a
                        href="https://developers.google.com/google-test-automation-conference"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        developers.google.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="ref-group-title">
              <i className="ti ti-world" aria-hidden="true" />
              著名な国際的エンジニア・専門メディアによる解説
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>出典</th>
                    <th>URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Mike Bland（元Testing Grouplet中心メンバー）「Small, Medium, Large」
                    </td>
                    <td>
                      <a
                        href="https://mike-bland.com/2011/11/01/small-medium-large.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        mike-bland.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Mike Bland「Test Certified」</td>
                    <td>
                      <a
                        href="https://mike-bland.com/2011/10/18/test-certified.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        mike-bland.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Mike Bland「The Practice of Testing」</td>
                    <td>
                      <a
                        href="https://mike-bland.com/2012/09/11/practice-of-testing.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        mike-bland.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      StickyMinds「Google's New Methodology for Risk-driven Testing」（ACC分析の解説）
                    </td>
                    <td>
                      <a
                        href="https://www.stickyminds.com/presentation/googles-new-methodology-risk-driven-testing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        stickyminds.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      InformIT「Using Other Influences for Planning」（ACC手法の詳細解説）
                    </td>
                    <td>
                      <a
                        href="https://www.informit.com/articles/article.aspx?p=2253544&seqNum=3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        informit.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Software Engineering at Google（無料公開・後継書籍、第12章 Unit Testing）
                    </td>
                    <td>
                      <a
                        href="https://abseil.io/resources/swe-book/html/ch12.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        abseil.io
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Wikipedia「Flaky test」</td>
                    <td>
                      <a
                        href="https://en.wikipedia.org/wiki/Flaky_test"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        en.wikipedia.org
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <footer className="page-footer">
          本ガイドは2026年9月4日時点で確認できる公開情報をもとに作成しています。Googleの組織体制やツールの状況は今後も変化する可能性があるため、最新情報は上記のGoogle公式テストブログ等で随時ご確認ください。
        </footer>
      </main>
    </div>
  );
}
