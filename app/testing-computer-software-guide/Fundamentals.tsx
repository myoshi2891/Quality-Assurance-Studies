import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
export default function Fundamentals() {return <>
    <section className="section" id="sec2">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-bulb">

                </i>
            </div>
            <h2>
                {"2. ソフトウェアテストとは何か"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 初学者がまず押さえるべきは、「テスト」「デバッグ」「品質保証(QA)」という似て非なる3つの言葉の違いです。 "}
            </p>
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"用語"}
                            </th>
                            <th>
                                {"目的"}
                            </th>
                            <th>
                                {"誰が行うか"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"テスト(Testing)"}
                            </td>
                            <td>
                                {" ソフトウェアが要件を満たしているかを検証し、欠陥を発見すること "}
                            </td>
                            <td>
                                {"テスター・開発者・チーム全員"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"デバッグ(Debugging)"}
                            </td>
                            <td>
                                {"テストで見つかった欠陥の原因を特定し、修正すること"}
                            </td>
                            <td>
                                {"主に開発者"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"品質保証(QA)"}
                            </td>
                            <td>
                                {" 欠陥が生まれにくい開発プロセスそのものを改善すること "}
                            </td>
                            <td>
                                {"チーム・組織全体"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                {" テストは「プログラムを壊すこと」が目的ではなく、リリース前にリスクを可視化し、関係者が意思決定できる情報を提供することが本質的な目的です。ISTQB(International Software Testing Qualifications Board)の公式シラバスでも、テストは要件の充足確認・欠陥の摘出・意思決定のための信頼性の提供という複数の目的を持つプロセスとして定義されています。 "}
            </p>
        </div>
    </section>
    <section className="section" id="sec3">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-scale">

                </i>
            </div>
            <h2>
                {"3. なぜテストが必要なのか ― 欠陥は早く見つけるほど安い"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" ソフトウェア開発における広く知られた経験則として、欠陥を発見する工程が後になるほど、修正コストが増大するという考え方があります。要件定義・設計段階で見つかった欠陥は仕様の書き換えだけで済むのに対し、本番リリース後に見つかった欠陥は、調査・修正・再テスト・再デプロイに加えて、障害対応や利用者への影響まで含めたコストがかかるためです。 "}
            </p>
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"欠陥が発見される工程"}
                            </th>
                            <th>
                                {"修正に必要となる作業の広がり"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"要件定義・設計段階"}
                            </td>
                            <td>
                                {"仕様・設計ドキュメントの修正のみ"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"コーディング段階"}
                            </td>
                            <td>
                                {"実装の修正と、対象箇所のテストのやり直し"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"システムテスト段階"}
                            </td>
                            <td>
                                {" 実装修正に加え、関連機能の回帰テストとスケジュールへの影響 "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"本番リリース後"}
                            </td>
                            <td>
                                {" 上記すべてに加え、障害対応・緊急リリース・利用者への影響 "}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="callout note">
                <i className="ti ti-alert-triangle">

                </i>
                <div>
                    <span className="callout-title">
                        {"数値の扱いに関する注記"}
                    </span>
                    <p>
                        {" 「要件定義段階の1倍に対してコーディングで6.5倍、本番で100倍」といった具体的な倍率が IBM Systems Sciences Institute の推計として広く引用されていますが、その原典データを追跡できる一次資料は確認できていないため、本ガイドでは倍率を示しません。「後工程ほど修正コストが跳ね上がる」という傾向についても、工程別の修正コストを直接測定した一次資料を確認できていないため、本ガイドでは特定の出典に帰属させません。上表は倍率ではなく、工程が進むほど修正に伴う作業の範囲が広がるという定性的な整理です。なお NIST が2002年に公表した報告書(参考文献15)は、不十分なテストインフラによる米国経済全体の損失額を試算したものであり、工程別の修正コスト比を示す資料ではありません。実際のコスト差はプロジェクトの規模・アーキテクチャ・リリース形態によって大きく変動します。 "}
                    </p>
                </div>
            </div>
            <p>
                {" この経験則が、後述する「シフトレフト」や「テスト駆動開発」といった「できるだけ早い段階でテストする」考え方の根拠になっています。 "}
            </p>
        </div>
    </section>
    <section className="section" id="sec4">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-list-check">

                </i>
            </div>
            <h2>
                {"4. テストの7原則(ISTQB)"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" ISTQB Foundation Level シラバスでは、テストに関する7つの原則が整理されています。初学者はまずこの原則を理解することで、テストに対する誤解(「全部テストすればバグはゼロになる」等)を避けられます。 "}
            </p>
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"原則"}
                            </th>
                            <th>
                                {"内容の要約"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {" ① テストは欠陥があることを示せるが、欠陥がないことは証明できない "}
                            </td>
                            <td>
                                {" テストで欠陥が見つからなくても「バグゼロ」の証明にはならない "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"② 全数テストは不可能"}
                            </td>
                            <td>
                                {" 入力の組み合わせは膨大なため、リスクに基づいて優先順位をつける必要がある "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"③ 早期テストで時間とコストを節約できる"}
                            </td>
                            <td>
                                {"開発の初期段階からテスト活動を始めるほど効果的"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"④ 欠陥は偏在する"}
                            </td>
                            <td>
                                {" バグは特定のモジュールに集中する傾向があり、そこを重点的にテストする "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"⑤ 殺虫剤のパラドックス"}
                            </td>
                            <td>
                                {" 同じテストを繰り返すと新しい欠陥を見つけられなくなるため、テストを見直し続ける必要がある "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"⑥ テストは状況次第"}
                            </td>
                            <td>
                                {"Webアプリと組込み機器では適切なテスト手法が異なる"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"⑦ 「バグゼロ」の落とし穴"}
                            </td>
                            <td>
                                {" バグを全部直しても、要件自体が間違っていればユーザーに使われないシステムになる "}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <section className="section" id="sec5">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-route">

                </i>
            </div>
            <h2>
                {"5. 基本テストプロセスの全体像"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" ISTQBが定義する基本テストプロセスは、以下のような活動のサイクルとして整理できます。ウォーターフォールのように一直線に進むのではなく、プロジェクトの中で繰り返し回される反復的なプロセスである点がポイントです。 "}
            </p>
            <div className="diagram-block">
                <div className="mermaid-wrapper">
                    <div id="diag-1"><Mermaid chart={DIAGRAMS["diag-1"]} /></div>
                </div>
                <div className="diagram-caption">
                    {" 図1: ISTQB基本テストプロセスの活動サイクル "}
                </div>
            </div>
            <ul>
                <li>
                    <b>
                        {"テスト計画"}
                    </b>
                    {": 何を、どこまで、どのようにテストするかの方針を決める "}
                </li>
                <li>
                    <b>
                        {"モニタリングと制御"}
                    </b>
                    {": 計画に対する進捗を継続的に確認し、必要に応じて計画を調整する "}
                </li>
                <li>
                    <b>
                        {"テスト分析"}
                    </b>
                    {": テストベース(要件やユーザーストーリー)から「何をテストすべきか」を洗い出す "}
                </li>
                <li>
                    <b>
                        {"テスト設計"}
                    </b>
                    {": テストケース・テストデータの具体的な内容を設計する "}
                </li>
                <li>
                    <b>
                        {"テスト実装"}
                    </b>
                    {": テストスクリプトや手順書を実際に用意する"}
                </li>
                <li>
                    <b>
                        {"テスト実行"}
                    </b>
                    {": テストを実際に走らせ、結果を記録する"}
                </li>
                <li>
                    <b>
                        {"テスト完了"}
                    </b>
                    {": テスト結果をまとめ、得られた知見を次のプロジェクトに活かす "}
                </li>
            </ul>
        </div>
    </section>
    <section className="section" id="sec6">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-stack-2">

                </i>
            </div>
            <h2>
                {"6. テストレベル ― 単体・結合・システム・受け入れ"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" テストは対象範囲の大きさによって、いくつかの「レベル」に分類されます。 "}
            </p>
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"テストレベル"}
                            </th>
                            <th>
                                {"対象範囲"}
                            </th>
                            <th>
                                {"主な実施者"}
                            </th>
                            <th>
                                {"実行速度"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"単体テスト(Unit Test)"}
                            </td>
                            <td>
                                {"関数・メソッド単位の最小の部品"}
                            </td>
                            <td>
                                {"開発者"}
                            </td>
                            <td>
                                {"非常に速い(ミリ秒～秒)"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"結合テスト(Integration Test)"}
                            </td>
                            <td>
                                {"複数のモジュール・サービス間の連携"}
                            </td>
                            <td>
                                {"開発者/テスター"}
                            </td>
                            <td>
                                {"速い(秒～分)"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"システムテスト(System Test)"}
                            </td>
                            <td>
                                {"アプリケーション全体の振る舞い"}
                            </td>
                            <td>
                                {"テスター"}
                            </td>
                            <td>
                                {"遅い(分～時間)"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"受け入れテスト(Acceptance Test)"}
                            </td>
                            <td>
                                {"ビジネス要件を満たしているかの最終確認"}
                            </td>
                            <td>
                                {"ユーザー/プロダクトオーナー"}
                            </td>
                            <td>
                                {"手動を含みさらに遅い"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                {" これらのレベルをどのような比率で組み合わせるべきかについては、次章で紹介する「テストピラミッド」と「テストトロフィー」という2つの有名な考え方があります。 "}
            </p>
        </div>
    </section>
</>;}
