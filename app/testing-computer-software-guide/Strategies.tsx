import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
export default function Strategies() {return <>
    <section className="section" id="sec7">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-hierarchy">

                </i>
            </div>
            <h2>
                {"7. テスト自動化戦略 ― テストピラミッドとテストトロフィー"}
            </h2>
        </div>
        <div className="prose">
            <h3>
                {"7.1 テストピラミッド(Martin Fowler)"}
            </h3>
            <p>
                {" 「テストピラミッド」は、ソフトウェア工学の分野で世界的に著名な Martin Fowler が自身のブログで広めた考え方で、自動テストを粒度別のグループに分け、下層(粒度の細かい単体テスト)ほど多く、上層(粒度の粗いE2Eテスト)ほど少なく作るべきだというバランスの取り方を示すメタファーです。Fowler の同僚である Ham Vocke が「The Practical Test Pyramid」という記事で、実例を交えてこの考え方を具体化しています。 "}
            </p>
            <div className="diagram-block">
                <div className="mermaid-wrapper">
                    <div id="diag-2"><Mermaid chart={DIAGRAMS["diag-2"]} /></div>
                </div>
                <div className="diagram-caption">
                    {" 図2: テストピラミッド(下層ほど多く、上層ほど少なく) "}
                </div>
            </div>
            <div className="callout source">
                <i className="ti ti-quote">

                </i>
                <div>
                    <span className="callout-title">
                        {"Google Testing Blog の主張"}
                    </span>
                    <p>
                        {" Googleのテストブログが2015年に公開した「Just Say No to More End-to-End Tests」という記事も同様の問題意識から書かれたもので、E2Eテストは壊れやすく(flaky)、原因の特定が難しく、実行に時間がかかるため、テストの大部分は単体テストで担い、E2Eテストは本当に重要な導線に絞るべきだと主張しています。 "}
                    </p>
                </div>
            </div>
            <h3>
                {"7.2 テストトロフィー(Kent C. Dodds)"}
            </h3>
            <p>
                {" 一方で、JavaScriptコミュニティで著名なエンジニア・教育者である Kent C. Dodds は、2018年ごろから「テストトロフィー(Testing Trophy)」という別の形のメタファーを提唱しています。静的型チェックやLintのような「静的テスト」を土台に置き、結合テストに最も大きな比重を置く点がテストピラミッドとの大きな違いです。Dodds は、モダンなテストツールの進化により結合テストのコストが下がったことで、費用対効果(ROI)の面で結合テストが最も割に合う投資先になったと説明しています。 "}
            </p>
            <div className="diagram-block">
                <div className="mermaid-wrapper">
                    <div id="diag-3"><Mermaid chart={DIAGRAMS["diag-3"]} /></div>
                </div>
                <div className="diagram-caption">
                    {" 図3: テストトロフィー(結合テストが最大の比重) "}
                </div>
            </div>
            <div className="callout source">
                <i className="ti ti-quote">

                </i>
                <div>
                    <span className="callout-title">
                        {"Dodds自身による補足"}
                    </span>
                    <p>
                        {" Dodds自身も、このトロフィーの考え方は単一のコードベースを前提としており、マイクロサービスやサーバーレス関数を組み合わせた構成では比率が変わりうると補足しています。 "}
                    </p>
                </div>
            </div>
            <h3>
                {"7.3 どちらを選ぶべきか"}
            </h3>
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"観点"}
                            </th>
                            <th>
                                {"テストピラミッド"}
                            </th>
                            <th>
                                {"テストトロフィー"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"提唱者"}
                            </td>
                            <td>
                                {"Martin Fowler(および Mike Cohn の初期の着想)"}
                            </td>
                            <td>
                                {"Kent C. Dodds"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"最重要視する層"}
                            </td>
                            <td>
                                {"ユニットテスト"}
                            </td>
                            <td>
                                {"結合テスト"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"土台に含むか"}
                            </td>
                            <td>
                                {"静的解析は明示的な層としない"}
                            </td>
                            <td>
                                {"静的テスト(型チェック・Lint)を土台に含む"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"向いている領域"}
                            </td>
                            <td>
                                {"サーバーサイドのロジックが複雑なシステム"}
                            </td>
                            <td>
                                {"UIコンポーネントを多く持つフロントエンド"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                {" どちらの形も「絶対的な正解」ではなく、自分たちのアーキテクチャとツールに応じて調整すべき「考え方の道具」として理解することが重要です。 "}
            </p>
        </div>
    </section>
    <section className="section" id="sec8">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-puzzle">

                </i>
            </div>
            <h2>
                {"8. テスト設計技法 ― ブラックボックス/ホワイトボックス/経験ベース"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" テストケースをどう作るかには体系立った技法があります。ISTQBのシラバスでも体系的に整理されている代表的な技法を紹介します。 "}
            </p>
            <div className="diagram-block">
                <div className="mermaid-wrapper">
                    <div id="diag-4"><Mermaid chart={DIAGRAMS["diag-4"]} /></div>
                </div>
                <div className="diagram-caption">
                    {"図4: テスト設計技法の分類"}
                </div>
            </div>
            <h3>
                {"8.1 代表的なブラックボックス技法"}
            </h3>
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"技法"}
                            </th>
                            <th>
                                {"概要"}
                            </th>
                            <th>
                                {"具体例"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"同値分割(Equivalence Partitioning)"}
                            </td>
                            <td>
                                {" 入力値を「同じ結果になるはずのグループ」に分け、各グループから代表値を1つ選んでテストする "}
                            </td>
                            <td>
                                {" 年齢入力欄なら「未成年」「成人」の2グループから1件ずつ選ぶ "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"境界値分析(Boundary Value Analysis)"}
                            </td>
                            <td>
                                {" 同値クラスの境界(最小値・最大値・その前後)を重点的にテストする "}
                            </td>
                            <td>
                                {"「18歳以上」の条件なら17歳・18歳・19歳をテストする"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"デシジョンテーブルテスト"}
                            </td>
                            <td>
                                {" 複数条件の組み合わせを表にまとめ、組み合わせごとの期待結果を網羅的に検証する "}
                            </td>
                            <td>
                                {" 「会員かつクーポン有り」など条件の掛け合わせを表で整理する "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"状態遷移テスト"}
                            </td>
                            <td>
                                {" システムが取りうる状態と、状態間の遷移を洗い出してテストする "}
                            </td>
                            <td>
                                {" ログイン前・ログイン後・ロック中、といった状態の遷移を検証する "}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>
                {"8.2 ホワイトボックス技法"}
            </h3>
            <p>
                {" ホワイトボックス技法は、コードの内部構造(制御フロー)に基づいてテストケースを設計する手法です。代表的なものに、すべての命令行を最低1回は実行する「ステートメントカバレッジ」と、すべての分岐(if文のtrue/falseなど)を最低1回は通す「ブランチカバレッジ」があります。カバレッジ100%は「すべての行を実行した」ことを保証しますが、「すべての組み合わせを網羅した」ことまでは保証しない点に注意が必要です。 "}
            </p>
        </div>
    </section>
    <section className="section" id="sec9">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-repeat">

                </i>
            </div>
            <h2>
                {"9. テスト駆動開発(TDD)"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" テスト駆動開発(Test-Driven Development, TDD)は、エクストリームプログラミング(XP)の実践者として知られる Kent Beck が体系化した開発手法です。著書『Test-Driven Development: By Example』の中で、Beck は「Red・Green・Refactor」という短いサイクルを繰り返すリズムとしてTDDを説明しています。 "}
            </p>
            <div className="diagram-block">
                <div className="mermaid-wrapper">
                    <div id="diag-5"><Mermaid chart={DIAGRAMS["diag-5"]} /></div>
                </div>
                <div className="diagram-caption">
                    {"図5: TDDのRed-Green-Refactorサイクル"}
                </div>
            </div>
            <ul>
                <li>
                    <b>
                        {"Red"}
                    </b>
                    {": まだ存在しない機能に対して、まず失敗するテストを書く "}
                </li>
                <li>
                    <b>
                        {"Green"}
                    </b>
                    {": そのテストを通すために必要最小限のコードを書く(多少泥臭くてもよい) "}
                </li>
                <li>
                    <b>
                        {"Refactor"}
                    </b>
                    {": テストが通っている安全な状態を保ちながら、コードの重複や設計上の問題を整理する "}
                </li>
            </ul>
            <p>
                {" TDDの本質はテストそのものよりも「設計の道具」である点にあります。先にテストを書くことで、実装よりも先にインターフェースや依存関係について考えることを強制されるためです。Robert C. Martin(Uncle Bob)も、Beckから直接ペアプログラミングで指導を受けた際の経験として、非常に細かい粒度でRed/Green/Refactorのサイクルを回す実践を紹介しています。 "}
            </p>
        </div>
    </section>
    <section className="section" id="sec10">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-microscope">

                </i>
            </div>
            <h2>
                {"10. 探索的テストとコンテキスト駆動テスト"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 自動テストがどれだけ充実していても、人間による探索的な調査は依然として重要です。探索的テスト(Exploratory Testing)は、James Bach が1990年代に提唱し、Michael Bolton とともに体系化した「Rapid Software Testing(RST)」というアプローチの中核をなす考え方です。両者は、テスト設計・学習・テスト実行を同時並行的に行うプロセスとして探索的テストを定義しています。 "}
            </p>
            <div className="diagram-block">
                <div className="mermaid-wrapper">
                    <div id="diag-6"><Mermaid chart={DIAGRAMS["diag-6"]} /></div>
                </div>
                <div className="diagram-caption">
                    {"図6: 探索的テストのセッションループ"}
                </div>
            </div>
            <div className="callout note">
                <i className="ti ti-users">

                </i>
                <div>
                    <span className="callout-title">
                        {"コンテキスト駆動テストの成り立ち"}
                    </span>
                    <p>
                        {" Cem Kaner・James Bach・Bret Pettichord・Brian Marick らは2001年、テストは常にプロジェクトの文脈(予算・スケジュール・技術・関係者の価値観)に依存して最適な方法が変わるという考え方を「コンテキスト駆動テスト(Context-Driven Testing)」という一つの学派として宣言しました(第1章で触れたとおり、Kaner らはそれ以前から同じ問題意識を共有しており、2001年の『Lessons Learned in Software Testing』刊行が学派としての宣言の節目にあたります)。これは「テストケースを網羅的に書いて実行する」という factory-style(工場方式)のテストとは対照的に、スキルを持ったテスト担当者による継続的な調査・判断を重視するアプローチです。 "}
                    </p>
                </div>
            </div>
            <p>
                {" このアプローチの実践単位として、あらかじめ大まかな目的(チャーター)を決めて一定時間(例えば90分)集中してテストする「セッションベーステストマネジメント(Session-Based Test Management)」という手法もよく併用されます。 "}
            </p>
        </div>
    </section>
</>;}
