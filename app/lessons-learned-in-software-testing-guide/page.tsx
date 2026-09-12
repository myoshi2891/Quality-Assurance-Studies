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
        </div>
      </div>
    </div>
  );
}
