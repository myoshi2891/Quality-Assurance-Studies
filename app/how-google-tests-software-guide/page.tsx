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
        </div>
      </main>
    </div>
  );
}
