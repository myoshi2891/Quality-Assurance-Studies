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
        </div>
      </main>
    </div>
  );
}
