import React from 'react';
import type { Metadata } from 'next';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './secure-by-design-guide.css';

export const metadata: Metadata = {
  title: 'セキュア・バイ・デザイン ─ 安全なソフトウェア設計 完全ガイド | QA Studies',
  description:
    'セキュリティは「機能」ではなく「関心事」である。ドメイン駆動設計（DDD）と型を活用し、脆弱性が原理的に生まれ得ない堅牢なコードを設計する。',
};

const DIAGRAM_0 = `flowchart TD
    subgraph P1["Part 1 - 導入編"]
        C1["第1章<br/>なぜ設計がセキュリティを左右するのか"]
        C2["第2章(幕間)<br/>アンチ・ハムレット:浅いモデリングの代償"]
    end

    subgraph P2["Part 2 - 基礎編"]
        C3["第3章<br/>DDDの中心概念"]
        C4["第4章<br/>セキュリティを促進するコード構造"]
        C5["第5章<br/>ドメイン・プリミティブ"]
        C6["第6章<br/>状態の整合性を保証する"]
        C7["第7章<br/>状態の複雑さを減らす"]
        C8["第8章<br/>デリバリーパイプラインの活用"]
        C9["第9章<br/>安全な障害処理"]
        C10["第10章<br/>クラウド思考によるメリット"]
        C11["第11章(幕間)<br/>ただで手に入る保険"]
    end

    subgraph P3["Part 3 - 応用編"]
        C12["第12章<br/>レガシーコードへの適用"]
        C13["第13章<br/>マイクロサービスへの適用"]
        C14["第14章<br/>まとめ:セキュリティを忘れずに"]
    end

    C1 --> C2 --> C3 --> C4 --> C5 --> C6 --> C7 --> C8 --> C9 --> C10 --> C11 --> C12 --> C13 --> C14`;

const DIAGRAM_1 = `flowchart LR
    A["セキュリティを機能として捉える"] --> B["個別の機能を1つずつ実装"]
    B --> C["守られていない抜け道が残る"]
    C --> D["インシデント発生"]

    A2["セキュリティを関心事として捉える"] --> B2["すべての経路を横断的に検証"]
    B2 --> C2["抜け道自体が設計上存在しない"]`;

const DIAGRAM_2 = `flowchart TD
    T["従来型アプローチ:<br/>「常にセキュリティを意識せよ」"]
    T --> P1["問題1: ビジネス機能への集中と<br/>セキュリティへの集中は競合する"]
    T --> P2["問題2: 全開発者が<br/>セキュリティ専門家になるのは非現実的"]
    T --> P3["問題3: 「未知の攻撃手法」まで<br/>事前に想定するのは原理的に不可能"]
    P1 --> R["結果: セキュリティタスクは<br/>常にバックログの下位に沈む"]
    P2 --> R
    P3 --> R`;

const DIAGRAM_3 = `flowchart TD
    IN["外部から受け取ったXML"] --> L1
    subgraph L1["層1 - パーサー設定"]
        direction TB
        S1["DOCTYPE宣言を禁止"]
        S2["外部一般・パラメータ実体を禁止"]
        S3["外部DTDの読み込みを禁止"]
    end
    L1 --> L2
    subgraph L2["層2 - 字句スキャン"]
        direction TB
        S4["エンティティ参照が含まれていないか検査"]
    end
    L2 --> L3
    subgraph L3["層3 - 構造検証"]
        direction TB
        S5["必須要素がすべて揃っているか検証"]
    end
    L3 --> OK["パーサー設定・エンティティ参照・構造の観点で<br/>検査済みのデータとしてドメインに受け渡し"]`;

const DIAGRAM_4 = `flowchart LR
    subgraph Shallow["浅いモデリング"]
        direction TB
        SA["数量は int 型で十分"] --> SB["負の数量が紛れ込む"]
        SB --> SC["表面上はエラーも出ず稼働し続ける"]
        SC --> SD["気づかぬまま損失が蓄積"]
    end

    subgraph Deep["深いモデリング"]
        direction TB
        DA["ドメインエキスパートと『数量とは何か』を議論"] --> DB["Quantity型として1から上限値の範囲を明示"]
        DB --> DC["検証付きコンストラクタ経由なら<br/>不正な値は生成時に拒否"]
        DC --> DD["この経路を通す限り<br/>不正な数量が入り込みにくい"]
    end`;

const DIAGRAM_5 = `flowchart TD
    UL["ユビキタス言語<br/>(開発者とドメインエキスパートが共有する共通言語)"]
    UL --> M["ドメインモデル"]
    M --> E["エンティティ<br/>(IDによって同一性が決まる、状態を持つオブジェクト)"]
    M --> V["値オブジェクト<br/>(属性の値そのもので同一性が決まる、不変なオブジェクト)"]
    M --> AG["集約(Aggregate)<br/>(一貫性の境界を持つエンティティ+値オブジェクトの集合)"]
    M --> BC["境界づけられたコンテキスト<br/>(同じ言葉が別の意味を持ち得る境界)"]
    BC --> CM["コンテキストマップ<br/>(複数のコンテキスト間の関係を図示)"]`;

const DIAGRAM_6 = `flowchart LR
    IN["入力データ"] --> S1
    S1["① 出所チェック<br/>信頼できる経路から来たデータか"] --> S2
    S2["② サイズチェック<br/>長さ・バイト数は許容範囲内か"] --> S3
    S3["③ 字句チェック<br/>使用可能な文字・エンコーディングか"] --> S4
    S4["④ 構文チェック<br/>期待するフォーマットに合致するか"] --> S5
    S5["⑤ 意味チェック<br/>ビジネスルール上、意味的に妥当か"] --> OK["ドメインオブジェクトとして受理"]`;

const DIAGRAM_7 = `flowchart TD
    A["生の入力値(int, String など)"] --> B{"ドメイン・プリミティブの<br/>コンストラクタに渡す"}
    B -- 不変条件を満たす --> C["有効なドメイン・プリミティブ<br/>(以後、常に正しい値であることが保証される)"]
    B -- 不変条件を満たさない --> D["例外をスローし、即座に処理を停止<br/>(フェイルファスト)"]`;

const DIAGRAM_8 = `stateDiagram-v2
    [*] --> 下書き: 生成(必須項目は生成時に確定)
    下書き --> 提出済み: 提出(バリデーション済みの遷移のみ許可)
    提出済み --> 承認済み: 承認
    提出済み --> 却下: 却下
    承認済み --> [*]
    却下 --> [*]`;

const DIAGRAM_9 = `flowchart LR
    R1["Rotate<br/>(ローテート)<br/>秘密情報を数分から数時間ごとに<br/>自動的に更新する"]
    R2["Repave<br/>(再構築)<br/>サーバーやアプリケーションを<br/>数時間ごとにゼロから作り直す"]
    R3["Repair<br/>(修復)<br/>脆弱性が判明したら<br/>数時間以内にパッチを適用する"]
    R1 --> R2 --> R3 --> R1`;

const DIAGRAM_10 = `flowchart TD
    A["レガシーコード:<br/>String・int による曖昧なAPI"] --> B{"移行戦略を選択"}
    B --> C1["直接アプローチ<br/>一気に型を置き換える"]
    B --> C2["発見アプローチ<br/>まず利用箇所を洗い出す"]
    B --> C3["新APIアプローチ<br/>新しいAPIを並行稼働させ、<br/>段階的に移行する"]
    C1 --> D["ドメイン・プリミティブによる<br/>型安全なAPI"]
    C2 --> D
    C3 --> D`;

const DIAGRAM_11 = `flowchart LR
    subgraph SVC_A["サービスA(注文)"]
        A1["ドメイン・プリミティブで<br/>入力を検証"]
    end
    subgraph SVC_B["サービスB(決済)"]
        B1["受け取ったDTOを境界で<br/>ドメイン・プリミティブへ変換し検証"]
    end
    subgraph LOG["ドメイン指向ロガー"]
        L1["機密情報は型レベルで<br/>ログ出力から除外"]
    end
    SVC_A -- "API契約(スキーマ)＋境界での明示的な再検証" --> SVC_B
    SVC_A --> LOG
    SVC_B --> LOG`;

const DIAGRAM_12 = `flowchart TD
    S1["Step 1<br/>セキュリティ要件を『機能』ではなく<br/>『関心事』として書き直す"]
    S2["Step 2<br/>ドメインエキスパートと一緒に<br/>重要な概念のユビキタス言語を定義する"]
    S3["Step 3<br/>String・int・boolean で<br/>ドメイン概念を表現している箇所を洗い出す"]
    S4["Step 4<br/>優先度の高い概念から<br/>ドメイン・プリミティブとして型を作る"]
    S5["Step 5<br/>不変性・フェイルファスト・<br/>正しい順序でのバリデーションを組み込む"]
    S6["Step 6<br/>境界づけられたコンテキストと<br/>サービス境界の不変条件を明示する"]
    S7["Step 7<br/>CI・CDパイプラインに<br/>異常系・境界値のセキュリティテストを追加する"]
    S8["Step 8<br/>ログ出力・障害処理・インフラの<br/>使い捨て化(Rotate・Repave・Repair)を見直す"]
    S9["Step 9<br/>設計による予防を土台にしつつ、<br/>ペネトレーションテスト等を継続的に実施する"]

    S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7 --> S8 --> S9`;

export default function SecureByDesignGuidePage() {
  return (
    <div className="secure-by-design-page">
      <header className="cover" id="top">
        <div className="cover-inner">
          <span className="eyebrow">Book Guide · 初学者向け解説</span>
          <h1>セキュア・バイ・デザイン</h1>
          <p className="subtitle">─ 安全なソフトウェア設計 完全ガイド</p>
          <p className="thesis">
            セキュリティは「機能」ではなく「関心事」である。優れた設計こそが、その関心事に応える最も効果的な手段である
            ── <em>Secure by Design</em> の核心的な主張を、ドメイン駆動設計（DDD）の基礎から実践のステップまで、
            オリジナルの図解とコード例でひも解く学習ガイドです。
          </p>
        </div>
        <div className="titleblock">
          <div>
            <span className="lbl">原題</span>
            <span className="val">Secure by Design</span>
          </div>
          <div>
            <span className="lbl">著者</span>
            <span className="val">Bergh Johnsson / Deogun / Sawano</span>
          </div>
          <div>
            <span className="lbl">出版社</span>
            <span className="val">Manning Publications（2019）</span>
          </div>
          <div>
            <span className="lbl">邦訳版</span>
            <span className="val">マイナビ出版</span>
          </div>
          <div>
            <span className="lbl">序文</span>
            <span className="val">Daniel Terhorst-North</span>
          </div>
          <div>
            <span className="lbl">ISBN</span>
            <span className="val">978-1-61729-435-8</span>
          </div>
          <div>
            <span className="lbl">対象読者</span>
            <span className="val">Java / C# 経験者</span>
          </div>
          <div>
            <span className="lbl">本ガイド更新</span>
            <span className="val">2026年8月27日 時点</span>
          </div>
        </div>
        <div className="cover-foot">
          SHEET 01 / 13 &nbsp;·&nbsp; ドメイン駆動セキュリティ実践ガイド &nbsp;·&nbsp; build 2026-08-30-05
        </div>
      </header>

      <div className="shell">
        <NavBar />

        <main className="content">
          <section id="sec1">
            <h2>
              <span className="num">01</span>この本は何を解決するのか
            </h2>
            <p>
              多くの現場では、セキュリティは「後付けの機能」として扱われがちです。バックログには「ログイン画面を作る」「入力値をバリデーションする」といったセキュリティ関連タスクが並びますが、これらは常にビジネス機能より優先順位が下げられ、結果としてリリース直前のペネトレーションテストで大量の脆弱性が発覚する、あるいは本番運用中にインシデントが起きて初めて気づく、というパターンを繰り返します。
            </p>
            <p>
              <em>Secure by Design</em> の核心的な主張は非常にシンプルです。
            </p>
            <div className="callout callout--quote">
              <svg
                className="ic"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M7 7h5v5H8c0 3-1 5-3 6" />
                <path d="M14 7h5v5h-4c0 3-1 5-3 6" />
              </svg>
              <p>
                セキュリティは「機能（feature）」ではなく「関心事（concern）」である。そして、優れた設計（design）こそが、その関心事に応える最も効果的な手段である。
              </p>
            </div>
            <p>
              つまり、
              <strong>
                ドメイン駆動設計（DDD）に代表される「良い設計」を徹底することで、セキュリティ上の欠陥が作り込まれるリスクを大きく減らせる
              </strong>
              、という考え方です。この思想は著者らによって「
              <strong>ドメイン駆動セキュリティ（Domain-Driven Security）</strong>
              」と呼ばれ、2009年頃から実務の中で育てられてきました。
            </p>
            <div className="callout callout--caveat">
              <svg
                className="ic"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M12 3 2 20h20L12 3z" />
                <path d="M12 9v5" />
                <circle cx="12" cy="17" r=".6" fill="currentColor" />
              </svg>
              <p>
                ただし、良い設計はあくまでリスクを下げる手段であって、欠陥を単独で無くすものではありません。認証・認可、出力エンコーディング、脅威モデリング、ペネトレーションテストといった具体的なセキュリティ活動は、良い設計と併せて引き続き必要です（本書自身も第14章でこれらの補完的なプラクティスを扱っています）。
              </p>
            </div>
          </section>

          <section id="sec2">
            <h2>
              <span className="num">02</span>書籍情報と著者
            </h2>
            <div className="table-wrap">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>原題</strong>
                    </td>
                    <td>
                      <em>Secure by Design</em>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>著者</strong>
                    </td>
                    <td>Dan Bergh Johnsson, Daniel Deogun, Daniel Sawano</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>序文</strong>
                    </td>
                    <td>
                      Daniel Terhorst-North（BDD＝振舞い駆動開発の提唱者として著名）
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>出版社</strong>
                    </td>
                    <td>Manning Publications</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>出版年</strong>
                    </td>
                    <td>2019年9月</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>ISBN</strong>
                    </td>
                    <td>978-1-61729-435-8</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>ページ数</strong>
                    </td>
                    <td>約400ページ</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>翻訳版</strong>
                    </td>
                    <td>日本語、ロシア語、簡体字中国語</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>日本語版出版社</strong>
                    </td>
                    <td>マイナビ出版（Compass Booksシリーズ）</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>対象読者</strong>
                    </td>
                    <td>
                      Java や C#（.NETプラットフォーム）といった静的型付け言語で、ある程度アプリケーション設計の経験がある開発者
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>著者について</h4>
            <ul>
              <li>
                <strong>Dan Bergh Johnsson</strong> ─ スウェーデンのコンサルティング会社 Omegapoint のシニアコンサルタント兼VP。アジャイル、DDD、コード品質、セキュリティの交差点で長年活動し、「ドメイン駆動セキュリティ」という概念の創始者の一人。
              </li>
              <li>
                <strong>Daniel Deogun</strong> ─ 同じく Omegapoint のシニアコンサルタント兼VP。アプリケーション開発とセキュリティの橋渡しを専門とし、国際カンファレンスでの登壇多数。
              </li>
              <li>
                <strong>Daniel Sawano</strong> ─ ソフトウェア開発者・アーキテクト。株式取引、ゲーム、通信、メディアなど高負荷システムでの経験を持ち、設計・パフォーマンス・セキュリティを組み合わせる思想の実践者。
              </li>
            </ul>
            <p>
              3人とも国際カンファレンス（GOTO、DDD Europe、Jfokus、QCon など）の常連スピーカーであり、本書はその講演内容を体系化したものです。
            </p>
          </section>

          <section id="sec3">
            <h2>
              <span className="num">03</span>世界の開発者からの評価
            </h2>
            <p>
              本書は技術書として広く読まれており、著名な開発者からのレビューも多数存在します。ここでは肯定的な評価と、あわせて批判的な視点の両方を公平に紹介します。
            </p>

            <h4>好意的な評価</h4>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>評者</th>
                    <th>コメントの要旨</th>
                    <th>出典</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Daniel Terhorst-North
                      <br />
                      <span style={{ color: 'var(--ink-soft)', fontSize: '0.88rem' }}>
                        （序文、BDDの提唱者として国際的に著名）
                      </span>
                    </td>
                    <td>
                      単なる「セキュリティを真剣に扱おう」という掛け声ではなく、設計の検討から実際のコードまで一貫した実例を豊富に示す、実践的で行動につながる一冊だと評価
                    </td>
                    <td>Manning公式ページ</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Matt Raible</strong>
                      <br />
                      <span style={{ color: 'var(--ink-soft)', fontSize: '0.88rem' }}>
                        （当時Okta所属、Java/Spring/Angular分野で国際的に著名）
                      </span>
                    </td>
                    <td>
                      「ドメイン・プリミティブの例が気に入りすぎて、自分のマイクロサービスセキュリティに関するブログ記事でも引用した」と述べ、5段階評価で満点を付けている
                    </td>
                    <td>raibledesigns.com</td>
                  </tr>
                  <tr>
                    <td>Jeremy Lange, Sertifi</td>
                    <td>
                      DDDと優れた設計原則への優れた入門書であり、良い設計こそが最良のセキュリティ形態になり得ることを示す&quot;目からうろこ&quot;の内容と評価
                    </td>
                    <td>Manning公式ページ</td>
                  </tr>
                  <tr>
                    <td>
                      Adrian Citu
                      <br />
                      <span style={{ color: 'var(--ink-soft)', fontSize: '0.88rem' }}>
                        （技術ブロガー）
                      </span>
                    </td>
                    <td>
                      ソフトウェアエンジニアが読むべきセキュリティ書籍リストに入れたいと明言
                    </td>
                    <td>adriancitu.com</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>批判的な視点</h4>
            <div className="callout callout--caveat">
              <svg
                className="ic"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M12 3 2 20h20L12 3z" />
                <path d="M12 9v5" />
                <circle cx="12" cy="17" r=".6" fill="currentColor" />
              </svg>
              <p>
                一方で、Goodreadsなどでは「本書はDDDの実践方法の解説が中心で、セキュリティそのものを扱う分量は相対的に少ない（セキュリティ単体の議論は最終章の10ページ程度）」「アイデア自体は1本のブログ記事にまとめられる程度のものだ」という辛口の評価も存在します。これは本書の性質を理解するうえで重要な指摘で、
                <strong>
                  本書は「ペネトレーションテストや脅威モデリングの代替」ではなく、「設計品質を通じてセキュリティの土台を底上げする」ための本
                </strong>
                である、と捉えるのが適切です（この点は9章で改めて整理します）。
              </p>
            </div>
          </section>

          <section id="sec4">
            <h2>
              <span className="num">04</span>本書全体のマップ
            </h2>
            <p>
              本書は3部構成・全14章（うち2つは「インターミッション」と呼ばれる実話ベースの箸休め的な章）です。
            </p>

            <figure className="plate">
              <figcaption>FIG. 01 — 本書の全体構成と読み進め方</figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_0} />
              </div>
            </figure>
            <p>
              読み進める順序としては、コードに近い話題（第3〜5章）から、より抽象度の高いアーキテクチャの話題（第12〜13章）へと段階的に上がっていく構成になっています。
            </p>
          </section>

          <section id="sec5">
            <h2>
              <span className="num">05</span>Part 1: 導入編
            </h2>
            <p className="lede">
              なぜ設計がセキュリティを左右するのか ─
              セキュリティを「機能」から「関心事」へ捉え直す最初の一歩。
            </p>

            <h3 id="sec5-1">
              <span className="num">5.1</span>第1章：セキュリティは「機能」ではなく「関心事」
            </h3>

            <h4>歴史から学ぶ：エスト・ヨータ銀行（Öst-Götha Bank）強盗事件（1854年）</h4>
            <p>
              本書の冒頭は、1854年にスウェーデンで実際に起きた銀行強盗事件から始まります。エスト・ヨータ銀行は「高品質な錠前」という
              <strong>セキュリティ機能</strong>
              に投資していましたが、犯人たちは鍵が外の釘に掛けられたままの外扉から侵入し、頑丈な金庫の扉ではなく、
              <strong>弱い蝶番</strong>を破壊して押し入りました。
            </p>
            <p>
              この逸話が示すのは、「良い機能を1つ実装すること」と「本当にセキュリティという関心事に応えること」はまったく別物だという教訓です。ソフトウェアでも同様に、「ログイン画面がある」ことと「写真への全アクセスがログインを経由する」ことはイコールではありません。ユーザーストーリーを次のように書き換えることで、初めて本当の関心事が見えてきます。
            </p>
            <ul>
              <li>
                ❌ 機能視点：「ユーザーとして、自分がアップロードした写真を見るためのログイン画面が欲しい」
              </li>
              <li>
                ✅ 関心事視点：「ユーザーとして、自分の写真へのすべてのアクセスがログインを経由してほしい。写真を機密に保つために」
              </li>
            </ul>

            <figure className="plate">
              <figcaption>
                FIG. 02 — 機能として捉える場合 vs 関心事として捉える場合
              </figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_1} />
              </div>
            </figure>

            <h4>CIA-T：4つの古典的なセキュリティ関心事</h4>
            <p>
              情報セキュリティの世界では伝統的に「CIA」というモデルが使われますが、本書ではさらに「T（追跡可能性）」を加えた「CIA-T」を紹介しています。
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>頭文字</th>
                    <th>意味</th>
                    <th>説明</th>
                    <th>具体例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>C</strong>
                    </td>
                    <td>Confidentiality（機密性）</td>
                    <td>秘密にすべき情報を秘密のまま保つこと</td>
                    <td>診療記録が第三者に漏れないこと</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>I</strong>
                    </td>
                    <td>Integrity（完全性）</td>
                    <td>データが許可された方法でしか変更されないこと</td>
                    <td>選挙の投票結果が改ざんされていないこと</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>A</strong>
                    </td>
                    <td>Availability（可用性）</td>
                    <td>必要なときにデータ・機能が使えること</td>
                    <td>消防が火災発生場所の情報に即座にアクセスできること</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>T</strong>
                    </td>
                    <td>Traceability（追跡可能性）</td>
                    <td>誰が・いつ・何を変更/参照したかを追跡できること</td>
                    <td>
                      処理内容や文脈によっては、GDPR（EU一般データ保護規則）のアカウンタビリティやセキュリティの要請から、監査可能な記録が必要になる
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              同じデータでも、文脈によってどの要素が最も重要かは変わります。銀行口座の場合、残高照会ができない（可用性の欠如）のは単に苛立たしいだけですが、年金資産が突然消える（完全性の欠如）のは破滅的です。
            </p>

            <h4>「従来型アプローチ」の3つの限界</h4>
            <p>
              従来のセキュリティ教育では、「開発者は全員セキュリティに詳しくなるべき」「常にセキュリティを意識しながらコードを書くべき」と説かれてきました。しかし著者らは、このアプローチには構造的な限界があると指摘します。
            </p>

            <figure className="plate">
              <figcaption>FIG. 03 — 従来型アプローチが構造的に抱える3つの限界</figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_2} />
              </div>
            </figure>

            <h4>設計視点で同じ問題を解く：ドメイン・プリミティブの初歩</h4>
            <p>
              著者らは、ユーザー名を保持するだけの単純なクラスを例に、これを説明します。要点は「バリデーションを外付けの関数として後から足す」のではなく、
              <strong>
                「ドメインエキスパートと会話し、&quot;ユーザー名とは何か&quot;を厳密に定義したうえで、その定義自体を型として表現する」
              </strong>
              という発想の転換です。
            </p>
            <p>
              以下は書籍の主張と同じ考え方を示すための、筆者独自の疑似コード例です（Java風）。
            </p>

            <pre className="code">
              <div className="code-line"><span className="cm">// ❌ 従来型: 文字列としてゆるく受け取り、後から個別にバリデーションする</span></div>
              <div className="code-line"><span className="kw">public class</span> <span className="tp">LegacyUser</span> {'{'}</div>
              <div className="code-line">    <span className="kw">private final</span> <span className="tp">String</span> username; <span className="cm">// どんな文字列でも入ってしまう</span></div>
              <div className="code-line"></div>
              <div className="code-line">    <span className="kw">public</span> LegacyUser(<span className="tp">String</span> username) {'{'}</div>
              <div className="code-line">        <span className="kw">this</span>.username = username; <span className="cm">// 制御文字やマークアップを含む文字列もそのまま保持できてしまう</span></div>
              <div className="code-line">    {'}'}</div>
              <div className="code-line">{'}'}</div>
              <div className="code-line"></div>
              <div className="code-line"><span className="cm">// ✅ 設計視点: 「ユーザー名とは何か」をドメインエキスパートと定義し、型に落とし込む</span></div>
              <div className="code-line"><span className="kw">public final class</span> <span className="tp">Username</span> {'{'}</div>
              <div className="code-line">    <span className="kw">private static final int</span> MIN_LENGTH = <span className="str">4</span>;</div>
              <div className="code-line">    <span className="kw">private static final int</span> MAX_LENGTH = <span className="str">40</span>;</div>
              <div className="code-line">    <span className="kw">private static final</span> <span className="tp">Pattern</span> ALLOWED = <span className="tp">Pattern</span>.compile(<span className="str">&quot;[A-Za-z0-9_-]+&quot;</span>);</div>
              <div className="code-line"></div>
              <div className="code-line">    <span className="kw">private final</span> <span className="tp">String</span> value;</div>
              <div className="code-line"></div>
              <div className="code-line">    <span className="kw">public</span> Username(<span className="tp">String</span> rawValue) {'{'}</div>
              <div className="code-line">        <span className="tp">Objects</span>.requireNonNull(rawValue);</div>
              <div className="code-line">        <span className="tp">String</span> trimmed = rawValue.trim();</div>
              <div className="code-line">        <span className="kw">if</span> (trimmed.length() &lt; MIN_LENGTH || trimmed.length() &gt; MAX_LENGTH) {'{'}</div>
              <div className="code-line">            <span className="kw">throw new</span> <span className="tp">IllegalArgumentException</span>(<span className="str">&quot;ユーザー名の長さが不正です&quot;</span>);</div>
              <div className="code-line">        {'}'}</div>
              <div className="code-line">        <span className="kw">if</span> (!ALLOWED.matcher(trimmed).matches()) {'{'}</div>
              <div className="code-line">            <span className="kw">throw new</span> <span className="tp">IllegalArgumentException</span>(<span className="str">&quot;許可されていない文字が含まれています&quot;</span>);</div>
              <div className="code-line">        {'}'}</div>
              <div className="code-line">        <span className="kw">this</span>.value = trimmed;</div>
              <div className="code-line">    {'}'}</div>
              <div className="code-line"></div>
              <div className="code-line">    <span className="kw">public</span> <span className="tp">String</span> value() {'{'} <span className="kw">return</span> value; {'}'}</div>
              <div className="code-line">{'}'}</div>
            </pre>

            <p>
              <code>&lt;script&gt;alert(1)&lt;/script&gt;</code>
              のような文字列は、そもそも
              <code>Username</code>
              オブジェクトとして<strong>生成すること自体ができません</strong>。セキュリティを意識して書いたわけではなく、「ユーザー名という概念を正確にモデリングした」結果として、副産物的にこのフィールド経由で危険な入力が入り込む余地が消えています。これが「Secure by Design（設計によって安全になる）」の核心です。
            </p>

            <div className="callout callout--caveat">
              <svg
                className="ic"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M12 3 2 20h20L12 3z" />
                <path d="M12 9v5" />
                <circle cx="12" cy="17" r=".6" fill="currentColor" />
              </svg>
              <p>
                ただし、この許可リストが防いでいるのは
                <strong>このフィールドが受け付けない入力が混入すること</strong>
                だけであり、XSS対策として十分なわけではありません。許可された文字だけで構成された値であっても、HTML・属性値・JavaScript・URLなど出力先ごとに適切なエスケープを行う必要があります。入力バリデーションは、文脈に応じた出力エンコーディングの代替にはなりません。
              </p>
            </div>

            <h4>多層防御（Defense in Depth）：Billion Laughs攻撃を例に</h4>
            <p>
              第1章の後半では、XMLの「内部エンティティ」の展開機能を悪用した
              <strong>Billion Laughs攻撃</strong>
              （1KB未満の小さなXMLが再帰的なエンティティ参照によって数GBのメモリを消費させる攻撃）を題材に、「設計による多層防御」を説明しています。
            </p>

            <figure className="plate">
              <figcaption>FIG. 04 — XML入力に対する多層防御の3つの層</figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_3} />
              </div>
            </figure>

            <p>
              ポイントは、パーサー設定だけに頼らないことです。著者らはこれを「家の周りにフェンスを立てただけでドアの鍵をかけていない状態」に例えています。仮に1つの防御層が突破されても、次の層が攻撃を食い止められるように設計するのが「多層防御」の考え方です。
            </p>

            <div className="callout callout--quote">
              <svg
                className="ic"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              <div>
                <p>
                  <strong>第1章のまとめ</strong>
                </p>
                <p>
                  ・セキュリティは「機能」ではなく「関心事」として捉える
                  <br />
                  ・設計とは「意思決定を伴うあらゆる活動」を指し、コードの1行からアーキテクチャまで全てが対象
                  <br />
                  ・汎用的な型（<code>String</code> など）で特定の意味を持つ概念を表現するのは危険の温床
                  <br />
                  ・多層防御は、単一の防御機構の突破を前提にした設計手法
                </p>
              </div>
            </div>

            <h3 id="sec5-2">
              <span className="num">5.2</span>第2章（幕間）：アンチ・ハムレット ─ 浅いモデリングの代償
            </h3>
            <p>
              第2章は、著者らが実際に関わった（詳細を匿名化した）事例をもとにした読み物です。ある企業のシステムで、
              <strong>注文数量が負の値になり得る</strong>
              という設計上の見落としが放置され続けた結果、技術的には何も「壊れて」いないにもかかわらず、長期間にわたって多額の金銭的損失が発生していたという実話です（類似の事例として、2000年頃のAmazonでも数量関連のバグが報告されています）。
            </p>
            <p>
              この章の核心は「<strong>浅いモデリング（shallow modeling）</strong>」と「<strong>深いモデリング（deep modeling）</strong>」の対比です。
            </p>

            <figure className="plate">
              <figcaption>FIG. 05 — 浅いモデリング と 深いモデリング の対比</figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_4} />
              </div>
            </figure>

            <p>
              この章は、
              <strong>
                セキュリティ上の欠陥は必ずしも「ハッキング」の形を取るとは限らず、ビジネスロジックの完全性（Integrity）を軽視した設計そのものが重大なリスクになる
              </strong>
              、ということを鮮烈に印象づけます。
            </p>
          </section>

          <section id="sec6">
            <h2>
              <span className="num">06</span>Part 2: 基礎編
            </h2>
            <p className="lede">
              セキュアな設計を支える技術 ─
              DDDの語彙からドメイン・プリミティブ、CI/CDやクラウドまで、コードとアーキテクチャを貫く実践知。
            </p>

            <h3 id="sec6-1">
              <span className="num">6.1</span>第3章：ドメイン駆動設計（DDD）の中心概念
            </h3>
            <p>
              本書全体の土台となるのがDDDの基本語彙です。DDDに馴染みがない読者向けに、要点を整理します。
            </p>

            <figure className="plate">
              <figcaption>FIG. 06 — DDDの基本語彙とその関係</figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_5} />
              </div>
            </figure>

            <ul>
              <li>
                <strong>モデルは単純化である</strong>
                ：現実の複雑さをすべて写し取ることはできず、常に「何を捨て、何を残すか」という選択が伴います。
              </li>
              <li>
                <strong>モデルは厳密でなければならない</strong>
                ：曖昧なモデルは曖昧なコードを生み、曖昧なコードは脆弱性の温床になります。
              </li>
              <li>
                <strong>境界づけられたコンテキスト</strong>
                は特に重要な概念です。例えば「顧客」という言葉は、営業部門のコンテキストと、配送部門のコンテキストでは意味する属性がまったく異なることがあります。この境界を明示しないままシステムを設計すると、片方のコンテキストでは有効な値が、もう一方のコンテキストでは無効な値として扱われるべきなのに素通りしてしまう、というセキュリティ上の穴が生まれます。
              </li>
            </ul>

            <h3 id="sec6-2">
              <span className="num">6.2</span>第4章：セキュリティを促進するコード構造を支える3つの柱
            </h3>
            <p>
              第4章では、DDDの知識を土台に、具体的な「安全になりやすいコードの書き方」を3つの柱で説明します。
            </p>

            <h4>柱1：不変性（Immutability）</h4>
            <p>
              一度生成したら状態を変更できないオブジェクトは、複数のスレッドから安全に共有でき、状態変更に伴う競合や、生成後に不正な値へ書き換えられるという攻撃経路そのものを取り除けます。ただし不変性はあくまで「状態の書き換え」に対する防御であり、それ自体が可用性を高めたりサービス拒否攻撃への耐性を与えたりするものではありません。可用性を守るには、リソース制限・タイムアウト・レート制限といった別の対策を併せて講じる必要があります。
            </p>

            <h4>柱2：契約による設計とフェイルファスト（Fail Fast）</h4>
            <p>
              「事前条件（precondition）」「事後条件（postcondition）」「不変条件（invariant）」を明示し、それを満たさない場合は
              <strong>即座に例外を投げて処理を止める</strong>
              という考え方です。問題を握りつぶして処理を先に進めるコードは、後になるほど原因の特定が難しくなり、セキュリティ上のグレーゾーンを生み出します。
            </p>

            <h4>柱3：バリデーションの正しい順序</h4>
            <p>
              バリデーションの順序は、入力形式や想定する脅威モデルに応じて決めます。書籍が推奨するのは「軽い検査から重い検査へ」という原則で、これを踏まえずに（例えばコストの高い構文チェックを先にしてしまうと）攻撃者に有利な情報を与えたり、無駄な計算資源を消費させられたりします。以下は、その原則を典型的な入力に当てはめた一例です。
            </p>

            <figure className="plate">
              <figcaption>
                FIG. 07 — バリデーションの推奨順序（軽い検査から重い検査へ）
              </figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_6} />
              </div>
            </figure>

            <div className="callout callout--caveat">
              <svg
                className="ic"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M12 3 2 20h20L12 3z" />
                <path d="M12 9v5" />
                <circle cx="12" cy="17" r=".6" fill="currentColor" />
              </svg>
              <p>
                この順序で軽い検査から重い検査へと進めることで、不正データを早い段階（安価な段階）で弾き、パーサーに到達する前に処理コストを抑えられます。ただし、サイズチェックや字句チェックだけで Billion Laughs 攻撃を確実に排除できるわけではありません。展開後にはじめて肥大化するペイロードは、入力段階では小さく無害に見えるためです。XMLを扱う場合は、外部エンティティ（XXE）の無効化やエンティティ展開の制限といった、安全なパーサー設定による防御を別途必ず組み合わせてください。
              </p>
            </div>

            <h3 id="sec6-3">
              <span className="num">6.3</span>第5章：ドメイン・プリミティブ
            </h3>
            <p>
              第4章の3本柱を「個別に」適用するだけでは不十分で、これらを1つのオブジェクトに統合した最小単位が
              <strong>ドメイン・プリミティブ（Domain Primitive）</strong>
              です。DDDの「値オブジェクト」と似ていますが、明確な違いがあります。
            </p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>観点</th>
                    <th>通常の値オブジェクト</th>
                    <th>ドメイン・プリミティブ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>不変性</td>
                    <td>推奨される</td>
                    <td>
                      <strong>必須</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>不変条件（invariant）</td>
                    <td>持つこともある</td>
                    <td>
                      <strong>必ず持ち、生成時点で強制される</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      言語プリミティブ（<code>int</code>, <code>String</code> など）や <code>null</code> の使用
                    </td>
                    <td>許容されることがある</td>
                    <td>
                      <strong>ドメインの概念を表すためには使用禁止</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>目的</td>
                    <td>ドメインの概念をモデル化する</td>
                    <td>
                      モデル化に加え、
                      <strong>
                        コンストラクタまたは明示的な変換の時点で不変条件を実行時検証し、以後は「検証済みの型」として扱えるようにする
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              例えば、ある商品の注文数量という概念があった場合、それを裸の
              <code>int</code>
              として扱うのではなく、「1以上・上限240以下の整数」という制約を持つ
              <code>Quantity</code>
              型として定義します。こうすることで、検証付きコンストラクタや明示的な変換をすべての生成経路で通す限り、「数量が負になる」というPart 1で見た事故は、そもそも
              <code>Quantity</code>
              オブジェクトの生成に失敗するため防げます。ただしこれを保証するのはコンストラクタ内の実行時検証であり、Javaの型システム自体が値の妥当性を検査してくれるわけではありません。デシリアライズやリフレクションのようにコンストラクタを迂回し得る生成経路がある場合は、その経路でも同じ検証が必ず通るようにしておく必要があります。
            </p>

            <figure className="plate">
              <figcaption>FIG. 08 — ドメイン・プリミティブの生成フロー</figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_7} />
              </div>
            </figure>

            <p>第5章ではさらに、次のような発展的なテクニックも紹介されています。</p>
            <ul>
              <li>
                <strong>APIの堅牢化</strong>
                ：内部のドメイン・プリミティブをそのまま外部公開APIの型として晒すのではなく、公開境界ではDTO（およびスキーマなどプロトコル上の制約）で受け取り、サービス境界で明示的にドメイン・プリミティブへ変換・検証する。不変条件が働くのはコンストラクタや明示的な変換・検証を通したときだけなので、「境界で必ず変換する」ことを設計上の規約にして、検証を通っていない生の値が内部へ流れ込まないようにする。
              </li>
              <li>
                <strong>Read-once オブジェクト</strong>
                ：パスワードやクレジットカード番号のような機密情報を「一度しか読み出せない」オブジェクトとして表現し、二回目以降の読み出しを検知・拒否する。効果があるのはあくまで「複数回読み出されたこと」の検知に限られ、
                <strong>初回の読み出しで得た値がそのままログや別のシンクへ渡されることは検知も防止もできない</strong>
                点に注意してください。ログ経由の漏えいを防ぐには、機密値のレダクション（
                <code>toString()</code>
                のマスキングやログフィールドのフィルタリング）や、機密値を扱えるロガーを限定するといった別の制御を併用する必要があります。
              </li>
              <li>
                <strong>テイント解析（Taint Analysis）</strong>
                ：信頼できない入力（tainted）が、検証を経ずに危険な処理（シンクと呼ばれる箇所）に到達していないかを機械的に追跡する考え方。
              </li>
              <li>
                <strong>エンティティの肥大化を防ぐ</strong>
                ：エンティティのメソッドが個別のバリデーションロジックで埋め尽くされることを防ぐため、その責務をドメイン・プリミティブ側に委譲する。
              </li>
            </ul>

            <h3 id="sec6-4">
              <span className="num">6.4</span>第6章・第7章：状態の整合性と複雑さの軽減
            </h3>
            <p>
              DDDの「エンティティ」はミュータブル（変更可能）な状態を持つため、値オブジェクトやドメイン・プリミティブよりも扱いが難しくなります。この2つの章では次のような指針が示されます。
            </p>
            <ul>
              <li>
                <strong>生成時点で完全な状態にする</strong>
                ：引数なしコンストラクタ（no-arg constructor）でオブジェクトを生成し、後から setter で値を埋めていくパターンは、「一時的に不正な状態」が存在する隙間を生みます。必須項目はコンストラクタで受け取るのが基本です。複雑な組み立てが必要な場合は
                <strong>Builderパターン</strong>
                を使えますが、生成時点の一貫性が保証されるのは、
                <code>build()</code>
                が必須項目の充足と制約を検証したうえで、生成後に状態を変更できないオブジェクトを返す場合に限られます。単に setter の呼び出しをビルダーへ移し替えただけでは、不正な状態の生成を防げません。
              </li>
              <li>
                <strong>状態遷移を制限する</strong>
                ：エンティティが取り得る状態と、その間の遷移を明示的にモデル化する（多くの場合、状態機械やドメインイベントとして表現する）ことで、「本来あり得ないはずの状態」への遷移を防ぎます。
              </li>
            </ul>

            <figure className="plate">
              <figcaption>FIG. 09 — エンティティの状態遷移をモデル化する例</figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_8} />
              </div>
            </figure>

            <h3 id="sec6-5">
              <span className="num">6.5</span>第8章：デリバリーパイプラインの活用
            </h3>
            <p>
              セキュリティ対策は一度実装して終わるものではなく、CI/CDパイプラインの中で継続的に検証すべき対象です。書評でも触れられているように、書籍内のテストコード例はJUnit 5を用いた実践的なものになっており、次のような観点が扱われます。
            </p>
            <ul>
              <li>
                不正な入力・極端な入力（境界値、空文字、非常に長い文字列など）を狙ったセキュリティテストをテストスイートに組み込む
              </li>
              <li>
                ビルドパイプラインの中に「既知の脆弱性を含む依存ライブラリがないか」を確認するステップを組み込む
              </li>
              <li>
                「エンティティ展開を伴うXMLを拒否できるか」のような、特定の攻撃パターンに対する回帰テストを用意する
              </li>
            </ul>

            <h3 id="sec6-6">
              <span className="num">6.6</span>第9章：安全な障害処理
            </h3>
            <p>
              例外処理の設計は、可用性（Availability）に直結するセキュリティ上のテーマです。
            </p>
            <ul>
              <li>
                例外は「バグ（プログラミングミス）」と「予期されるビジネス上の失敗」を区別できる階層構造にする
              </li>
              <li>
                障害が発生した際に、システム全体を道連れにせず
                <strong>部分的に機能を縮退させる</strong>
                （グレースフルデグラデーション）
              </li>
              <li>
                サーキットブレーカーのようなレジリエンス（回復力）パターンを用いて、障害の連鎖を遮断する
              </li>
            </ul>

            <h3 id="sec6-7">
              <span className="num">6.7</span>第10章：クラウド思考によるメリット
            </h3>
            <p>
              クラウドネイティブな設計思想（Twelve-Factor Appの原則など）は、副産物として強力なセキュリティ上の利点をもたらします。書評で紹介されている「
              <strong>3つのR</strong>
              」は特に覚えやすい指針です。
            </p>

            <figure className="plate">
              <figcaption>
                FIG. 10 — クラウド思考の3つのR（Rotate / Repave / Repair）
              </figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_9} />
              </div>
            </figure>

            <div className="callout callout--caveat">
              <svg
                className="ic"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M12 3 2 20h20L12 3z" />
                <path d="M12 9v5" />
                <circle cx="12" cy="17" r=".6" fill="currentColor" />
              </svg>
              <p>
                インフラを「使い捨てにできるもの（immutable infrastructure）」として扱うこと自体は、それだけで侵入の影響を小さくするわけではありません。定期的な自動再構築、短命な資格情報、最小権限の付与、ネットワーク分離といった運用と組み合わせて初めて、攻撃者がサーバーに侵入できた場合の滞在時間と被害範囲を構造的に抑えられます。逆に、長期間有効な資格情報が再構築後のインスタンスへ引き継がれていたり、権限やネットワーク境界が緩いままであれば、再構築しても足がかりは残り続けます。
              </p>
            </div>

            <h3 id="sec6-8">
              <span className="num">6.8</span>第11章（幕間）：ただで手に入る保険
            </h3>
            <p>
              第2の「幕間」章です。ここまでに学んだ設計プラクティス（ドメイン・プリミティブ、フェイルファスト、境界づけられたコンテキストなど）を導入することが、追加コストではなく、
              <strong>設計品質向上の&quot;ついで&quot;に手に入る保険</strong>
              であることを、別の実例を通じて再確認する内容になっています。
            </p>
          </section>

          <section id="sec7">
            <h2>
              <span className="num">07</span>Part 3: 応用編
            </h2>
            <p className="lede">
              レガシーコードとマイクロサービスへの適用 ─
              理想的な設計を「これから」ではなく「今あるコード」に落とし込む現実解。
            </p>

            <h3 id="sec7-1">
              <span className="num">7.1</span>第12章：レガシーコードへの適用
            </h3>
            <p>
              新規プロジェクトであれば理想的な設計を最初から採用できますが、現実には巨大なレガシーコードベースを相手にすることの方が多いはずです。第12章では、Part 2の考え方を
              <strong>既存コードに後から適用する</strong>ための現実的な手法が示されます。
            </p>
            <ul>
              <li>
                <strong>曖昧なパラメータリストの解消</strong>：
                <code>createOrder(String, String, int, int, boolean)</code>
                のような、型だけでは意味が分からない引数列を、ドメイン・プリミティブに置き換えていく。一度に全て置き換える「直接アプローチ」、まず使用箇所を洗い出す「発見アプローチ」、新しいAPIを並行して用意する「新APIアプローチ」という3つの移行戦略が紹介されます。
              </li>
              <li>
                <strong>検証されていない文字列のログ出力の危険性</strong>
                ：ログに未検証の文字列をそのまま出力すると、ログインジェクションや意図しない機密情報の漏えいにつながる。
              </li>
              <li>
                <strong>防御的なコード構造</strong>：自分自身の出力すら信用しない（&quot;code that doesn&apos;t trust itself&quot;）という考え方。呼び出し元が正しく検証済みのデータを渡してくると期待するのではなく、境界ごとに再検証する。
              </li>
              <li>
                <strong>DRY原則の誤用への警鐘</strong>
                ：「同じような見た目のコード」を安易に共通化する（構文的なDRY）のではなく、「同じ意味を持つ概念」を共通化する（意味的なDRY）ことの重要性。見た目が同じでも意味が異なる場合に無理に共通化すると、後から片方だけ変更が必要になった際にセキュリティ上の分岐ミスを生みます。
              </li>
              <li>
                <strong>通貨の例（部分的なドメイン・プリミティブ）</strong>
                ：金額を表す型を作ったとしても、通貨単位（USD, JPYなど）を暗黙の前提としてしまうと、「1米ドル」と「1スロベニア・トラール」を区別できずに合算してしまうような重大なバグを生みます。ドメイン・プリミティブは「概念のすべて」を包含して初めて安全になるという教訓です。
              </li>
            </ul>

            <figure className="plate">
              <figcaption>FIG. 11 — レガシーコードへの3つの移行戦略</figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_10} />
              </div>
            </figure>

            <h3 id="sec7-2">
              <span className="num">7.2</span>第13章：マイクロサービスへの適用
            </h3>
            <p>
              マイクロサービスは疎結合であるがゆえに、モノリスよりもセキュリティ設計が難しくなる側面があります。第13章では次のようなテーマが扱われます。
            </p>
            <ul>
              <li>
                <strong>サービスをまたぐ機密データの扱い</strong>
                ：あるサービスでは「機密」として扱われるべきデータが、別のサービスの境界を越えた瞬間にその文脈を失ってしまうリスク。
              </li>
              <li>
                <strong>サービスAPIでの不変条件の強制</strong>
                ：サービス間の契約（API）のスキーマだけでは型や形式しか縛れず、意味的な不変条件までは満たせない。受信側サービスが境界で受け取ったDTOをドメイン・プリミティブへ明示的に変換・検証することで、「信頼できない他チームのサービスからの入力」を確実に弾く。
              </li>
              <li>
                <strong>ログの一貫性・改ざん防止・追跡可能性</strong>
                ：分散システムでは、1つの取引が複数のサービスをまたぐため、ログを追跡可能な形で相関付けること（トレーシング）が難しくなります。さらに、ログ自体が改ざんされたり、ログに意図せず機密データが書き込まれてしまうことで、ログそのものが新たな攻撃対象（セカンダリーな攻撃経路）になり得る点が指摘されています。
              </li>
              <li>
                <strong>ドメイン指向のロガーAPI</strong>：「何でも
                <code>log.info(str)</code>
                で出力できる」汎用ロガーではなく、ログに出力してよい情報とそうでない情報をドメインの型システムで区別できるロガーの設計。
              </li>
            </ul>

            <figure className="plate">
              <figcaption>FIG. 12 — マイクロサービス間の検証境界とログの扱い</figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_11} />
              </div>
            </figure>

            <h3 id="sec7-3">
              <span className="num">7.3</span>第14章：まとめ ─ セキュリティを忘れずに
            </h3>
            <p>
              最終章では、ここまでの「設計による予防」を補完する、より実務的・組織的なプラクティスがまとめられています。
            </p>
            <ul>
              <li>コードレビューにセキュリティの観点を組み込む</li>
              <li>ペネトレーションテストを継続的な&quot;設計への挑戦&quot;として位置づける</li>
              <li>
                バグバウンティプログラムを継続的なペネトレーションテストの一形態として活用する
              </li>
              <li>チーム全体がセキュリティ分野の基礎知識を持つよう学習を促す</li>
              <li>
                セキュリティの脅威を「恐れるもの」ではなく「設計のインスピレーション源」として捉え直す
              </li>
              <li>インシデント対応の仕組み（検知・対応・再発防止）を用意しておく</li>
              <li>
                レジリエンス／アンチフラジリティ（&quot;やられ強さ&quot;を超えて、攻撃を糧に強くなる仕組み）という概念
              </li>
            </ul>

            <div className="callout callout--quote">
              <svg
                className="ic"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M7 7h5v5H8c0 3-1 5-3 6" />
                <path d="M14 7h5v5h-4c0 3-1 5-3 6" />
              </svg>
              <p>
                著者らはここで、
                <strong>
                  「Good design is the best form of security（優れた設計こそが最良のセキュリティである）」としつつも、「設計による予防」と「従来型の探索的なセキュリティ活動（ペンテスト、脅威モデリングなど）」は対立するものではなく、両輪であるべきだ
                </strong>
                と明確に述べています。本書のタイトルだけを見て「設計さえ良ければペンテストは不要」と誤読しないよう注意が必要です。
              </p>
            </div>
          </section>

          <section id="sec8">
            <h2>
              <span className="num">08</span>初学者向け ステップバイステップ実践ロードマップ
            </h2>
            <p>
              ここからは、本書のエッセンスを実際のプロジェクトに導入する際の、現実的な導入手順として再構成したものです。
            </p>

            <figure className="plate">
              <figcaption>FIG. 13 — 導入ロードマップ（Step 1〜9）</figcaption>
              <div className="mermaid">
                <Mermaid chart={DIAGRAM_12} />
              </div>
            </figure>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ステップ</th>
                    <th>目的</th>
                    <th>該当章</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="step-num">1</span>関心事として再定義
                    </td>
                    <td>
                      「何のためにこの機能が必要か」を明確化し、抜け道を塞ぐ範囲を正しく捉える
                    </td>
                    <td>第1章</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="step-num">2</span>ユビキタス言語の確立
                    </td>
                    <td>開発者とビジネス側の認識のズレ（＝設計ミス）を減らす</td>
                    <td>第3章</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="step-num">3</span>曖昧な型の棚卸し
                    </td>
                    <td>どこに危険が潜んでいるかを可視化する</td>
                    <td>第1, 12章</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="step-num">4</span>ドメイン・プリミティブ化
                    </td>
                    <td>「不正な状態そのものを作れなくする」</td>
                    <td>第4, 5章</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="step-num">5</span>不変性・フェイルファスト・順序
                    </td>
                    <td>データ整合性と早期検知を両立する</td>
                    <td>第4章</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="step-num">6</span>コンテキスト境界とAPI契約
                    </td>
                    <td>サービスをまたいだ際の意味の取り違えを防ぐ</td>
                    <td>第3, 13章</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="step-num">7</span>継続的なセキュリティテスト
                    </td>
                    <td>一度作った安全性を退行させない</td>
                    <td>第8章</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="step-num">8</span>障害処理とインフラの使い捨て化
                    </td>
                    <td>可用性を高め、侵入後の被害範囲を縮小する</td>
                    <td>第9, 10章</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="step-num">9</span>探索的セキュリティ活動の継続
                    </td>
                    <td>設計だけではカバーできない領域を補う</td>
                    <td>第14章</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="sec9">
            <h2>
              <span className="num">09</span>批判的な視点（本書の限界）
            </h2>
            <p>初学者が誤解しないよう、あらかじめ知っておくとよい限界を整理します。</p>

            <div className="card-grid">
              <div className="lim-card">
                <span className="tag">限界 1：スコープ</span>
                <p>
                  <strong>セキュリティの教科書ではない</strong>
                  ：ネットワークセキュリティ、暗号技術、認証・認可の詳細な実装方法、OWASP Top 10の個別対策など、セキュリティ全般を体系的に扱う書籍ではありません。あくまで「設計品質を上げることでセキュリティを底上げする」という一断面に特化しています。
                </p>
              </div>
              <div className="lim-card">
                <span className="tag">限界 2：前提知識</span>
                <p>
                  <strong>DDD自体の学習コストがある</strong>
                  ：境界づけられたコンテキストや集約に馴染みがない場合、まず第3章のDDD入門部分の理解に時間がかかります。原典であるEric Evansの著作と併読すると理解が深まります。
                </p>
              </div>
              <div className="lim-card">
                <span className="tag">限界 3：対象言語</span>
                <p>
                  <strong>静的型付け言語を前提としている</strong>
                  ：Java, C#, .NET を主な対象読者としており、動的型付け言語（Python, JavaScriptなど）でどこまで同じ手法を適用できるかは読者自身の翻訳作業が必要です。
                </p>
              </div>
              <div className="lim-card">
                <span className="tag">限界 4：補完の必要性</span>
                <p>
                  <strong>「設計で守れる範囲」には限界がある</strong>
                  ：著者ら自身が第14章で明言している通り、ペネトレーションテストや脅威モデリングといった探索的な活動を代替するものではありません。
                </p>
              </div>
            </div>
          </section>

          <section id="sec10">
            <h2>
              <span className="num">10</span>さらに学ぶためのリソース
            </h2>
            <ul>
              <li>
                著者による無料記事「Domain Primitives: what they are and how you can use them to make more secure software」（Manning公式ブログ）
              </li>
              <li>Daniel Sawano氏個人ブログでの先行記事（書籍執筆前の草稿的内容）</li>
              <li>
                Dan Bergh Johnsson &amp; Daniel Deogun によるカンファレンス講演「Domain Primitives in Action: Making it Secure by Design」（Explore DDD, 2017）
              </li>
              <li>
                Software Engineering Radio および Arrested DevOps ポッドキャストでの著者インタビュー
              </li>
              <li>
                Matt Raible（Okta）による書評ブログおよび、それを参照したマイクロサービスセキュリティパターンの記事
              </li>
            </ul>
          </section>

          <section id="sec11">
            <h2>
              <span className="num">11</span>参考文献・出典
            </h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1rem' }}>
              本ガイドの作成にあたり、以下の一次情報・書評記事を参照しました（2026年8月27日時点でアクセス可能であることを確認済み）。
            </p>
            <ul className="ref-list">
              <li>
                <span className="n">01</span>
                <a
                  href="https://www.manning.com/books/secure-by-design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manning Publications 公式書籍ページ
                </a>
              </li>
              <li>
                <span className="n">02</span>
                <a
                  href="https://manning-content.s3.amazonaws.com/download/a/78580ef-38c8-4bd1-bc2f-ba4e8c7d7880/Johnsson_SbD_MEAP_V13_ch1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Secure by Design 第1章 無料プレビュー（MEAP版PDF, Manning公式）
                </a>
              </li>
              <li>
                <span className="n">03</span>
                <a
                  href="https://livebook.manning.com/book/secure-by-design/chapter-1/v-5/d5e499"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  liveBook（Manning）第1章
                </a>
              </li>
              <li>
                <span className="n">04</span>
                <a
                  href="https://livebook.manning.com/book/secure-by-design/chapter-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  liveBook（Manning）第2章（幕間：アンチ・ハムレット）
                </a>
              </li>
              <li>
                <span className="n">05</span>
                <a
                  href="https://livebook.manning.com/book/secure-by-design/chapter-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  liveBook（Manning）第3章（DDDの中心概念）
                </a>
              </li>
              <li>
                <span className="n">06</span>
                <a
                  href="https://livebook.manning.com/book/secure-by-design/chapter-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  liveBook（Manning）第5章（ドメイン・プリミティブ）
                </a>
              </li>
              <li>
                <span className="n">07</span>
                <a
                  href="https://livebook.manning.com/book/secure-by-design/chapter-13/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  liveBook（Manning）第13章（マイクロサービス）
                </a>
              </li>
              <li>
                <span className="n">08</span>
                <a
                  href="https://www.oreilly.com/library/view/secure-by-design/9781617294358/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  O&apos;Reilly Online Learning 収録ページ（詳細目次）
                </a>
              </li>
              <li>
                <span className="n">09</span>
                <a
                  href="https://freecontent.manning.com/domain-primitives-what-they-are-and-how-you-can-use-them-to-make-more-secure-software/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manning公式ブログ「Domain Primitives」記事
                </a>
              </li>
              <li>
                <span className="n">10</span>
                <a
                  href="https://manningbooks.medium.com/domain-primitives-what-they-are-and-how-you-can-use-them-to-make-more-secure-software-174504696518"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  同記事（Medium転載版）
                </a>
              </li>
              <li>
                <span className="n">11</span>
                <a
                  href="https://software.sawano.se/2017/09/domain-primitives.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Daniel Sawano氏個人ブログ（書籍執筆時の草稿記事）
                </a>
              </li>
              <li>
                <span className="n">12</span>
                <a
                  href="https://raibledesigns.com/rd/entry/secure_by_design_book_review"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matt Raible（Okta）による書評
                </a>
              </li>
              <li>
                <span className="n">13</span>
                <a
                  href="https://adriancitu.com/2022/10/05/book-review-secure-by-design/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adrian Citu によるレビュー記事
                </a>
              </li>
              <li>
                <span className="n">14</span>
                <a
                  href="https://www.goodreads.com/book/show/33953413-secure-by-design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Goodreads 書籍ページ（賛否両論のレビュー集）
                </a>
              </li>
              <li>
                <span className="n">15</span>
                <a
                  href="https://se-radio.net/2025/09/se-radio-684-dan-bergh-johnsson-and-daniel-deogun-on-secure-by-design/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Software Engineering Radio エピソード（著者インタビュー）
                </a>
              </li>
              <li>
                <span className="n">16</span>
                <a
                  href="https://www.arresteddevops.com/secure-by-design/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Arrested DevOps ポッドキャスト（著者インタビュー）
                </a>
              </li>
              <li>
                <span className="n">17</span>
                <a
                  href="https://virtualddd.com/videos/dan-bergh-johnsson-daniel-deogun-domain-primitives-in-action-making-it-secure-by-design/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  virtualDDD.com 収録カンファレンス動画
                </a>
              </li>
              <li>
                <span className="n">18</span>
                <a
                  href="https://www.youtube.com/watch?v=ogjOKlXHi08"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  同講演 YouTube 版（Explore DDD, Denver）
                </a>
              </li>
              <li>
                <span className="n">19</span>
                <a
                  href="https://katharina.damschen.net/post/2025-11-10-domain-primitives/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Katharina&apos;s blog（ドメイン・プリミティブ実践記）
                </a>
              </li>
              <li>
                <span className="n">20</span>
                <a
                  href="https://book.mynavi.jp/ec/products/detail/id=124056"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  マイナビ出版 日本語版書籍ページ
                </a>
              </li>
              <li>
                <span className="n">21</span>
                <a
                  href="https://blog.kymmt.com/entry/secure-by-design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kymmt氏によるブログ書評（日本語）
                </a>
              </li>
              <li>
                <span className="n">22</span>
                <a
                  href="https://en.wikipedia.org/wiki/Secure_by_design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia「Secure by design」（一般的な概念の参考として）
                </a>
              </li>
            </ul>
          </section>
        </main>
      </div>

      <footer>
        <p>
          本ドキュメントは学習・教育目的で作成された二次的な解説資料です。書籍本文の引用は最小限にとどめ、コード例はすべて独自に作成したものです。正確な内容・完全なコード例については、必ず原著（またはマイナビ出版の日本語版）をご参照ください。
        </p>
      </footer>
    </div>
  );
}
