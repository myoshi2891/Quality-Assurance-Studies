import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import {
    DIAGRAM_CH3_OVERVIEW,
    DIAGRAM_CH3_SKILL_AREAS,
    DIAGRAM_CH3_SKILL_DERIVATION,
    DIAGRAM_CH3_SKILL_GAP,
    DIAGRAM_CH3_TRAINING_FLOW,
} from './diagrams';
import './istqb-ctal-tm-chapter3-managing-the-team.css';

export const metadata = {
    title: 'CTAL-TM v3.0 第3章「チームの管理」｜初学者向け解説ガイド',
    description:
        'ISTQB® Certified Tester Advanced Level Test Management (CTAL-TM) v3.0 第3章「チームの管理」初学者向け完全解説ガイド。4つの能力領域、スキル分析・評価・育成、動機付け、品質コストと費用対効果。',
};

export default function CtalTmChapter3Page() {
    return (
        <div className="ctal-tm-ch3-page">
            <NavBar />

            <main className="main">
                {/* Hero */}
                <div className="hero">
                    <span className="hero-eyebrow">ISTQB® CTAL-TM v3.0 ・ Chapter 3</span>
                    <h1>CTAL-TM v3.0 第3章「チームの管理」</h1>
                    <p>
                        初学者向け解説ガイド — ISTQB® Certified Tester Advanced Level Test Management
                        (CTAL-TM) v3.0 / Chapter 3: Managing the Team（学習時間 225 分）
                    </p>
                </div>

                {/* 0. この文書の読み方と根拠の確度 */}
                <section>
                    <h2 id="0-この文書の読み方と根拠の確度">0. この文書の読み方と「根拠の確度」</h2>
                    <p>この文書では、内容ごとに根拠の確度を次の記号で示します。</p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>記号</th>
                                    <th>意味</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>🟢</td>
                                    <td>
                                        ISTQB 公式ページ／公式シラバス PDF
                                        の原文で直接確認できた内容（目次・章の概要・他章の記述など）
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>🟡</td>
                                    <td>
                                        一般的な実務知識・ISTQB
                                        用語集・二次情報で補足した内容。第3章の本文（シラバス
                                        p.65〜74）で表現や範囲を必ず確認してください
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout-warning">
                        <div className="practice-label">
                            <span className="practice-icon">⚠️</span>
                            <span>重要な注意</span>
                        </div>
                        <div className="practice-body">
                            <p>
                                本ガイドの作成時、公式シラバス PDF の取得が第1章の途中（p.45
                                付近）で打ち切られたため、第3章の本文（p.65〜74）そのものは原文で確認できていませんでした。
                            </p>
                            <p>
                                その後 Version 3.0.J04
                                で、3.1.1（4つの能力領域）・3.1.6（動機付け要因と衛生要因）・3.2.1（品質コストの4カテゴリーと「評定コスト」の用語）を原文と突き合わせ済みです。それ以外の節は引き続き
                                🟡 を含みます。
                            </p>
                            <p>
                                第3章の節構成・学習時間・章の狙い・第1章からの参照は 🟢
                                ですが、各節の詳細説明は 🟡 を含みます。
                            </p>
                            <p>
                                試験対策として使う前に、日本語版シラバス（JSTQB 版 Version
                                3.0.J04：最新版）の第3章（p.65〜74）と突き合わせてください。このページ範囲は
                                Version 3.0.J04 の目次で確認済みです（3.1 は p.66、3.1.6 は p.70、3.2 は
                                p.72、3.2.1 品質コストは p.72、3.2.2 は p.73〜74。p.75 から「4
                                参考文献」）。Version 3.0.J02 / J01
                                は旧版で、差分確認用として参照してください。URL は「9. 出典」にあります。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 1. 第3章の全体像 */}
                <section>
                    <h2 id="1-第3章の全体像">1. 第3章の全体像</h2>
                    <h3 id="11-章の基本情報">1.1 章の基本情報（🟢）</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>項目</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>章タイトル</td>
                                    <td>Managing the Team（チームの管理）</td>
                                </tr>
                                <tr className="even">
                                    <td>最低学習時間</td>
                                    <td>
                                        225 分（第1章 750 分、第2章 390 分、第3章 225 分の合計 1,365 分）
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>節構成</td>
                                    <td>3.1 The Test Team ／ 3.2 Stakeholder Relationships</td>
                                </tr>
                                <tr className="even">
                                    <td>対応するビジネスアウトカム</td>
                                    <td>
                                        TM_07（必要なスキルを特定し、チーム内で育成する）、TM_08（テストのビジネスケースを、コストと期待される便益とともに準備・提示する）
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>試験の形式</td>
                                    <td>50 問、120 分（非母語は +25%）、満点 88 点、合格 58 点</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>シラバスの序論は、第3章で学ぶことを次の3点にまとめています（🟢）。</p>
                    <ol>
                        <li>プロジェクトのコンテキストを分析し、テストチームに必要なスキルを特定する</li>
                        <li>ホールチームアプローチ（whole team approach）に沿ってチームを管理する</li>
                        <li>プロジェクトにおけるテスト活動のビジネスケースを定義する</li>
                    </ol>

                    <h3 id="12-全体マップ">1.2 全体マップ</h3>
                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_CH3_OVERVIEW} />
                    </div>

                    <h3 id="13-学習の進め方ステップバイステップ">
                        1.3 学習の進め方（ステップバイステップ）
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>ステップ</th>
                                    <th>やること</th>
                                    <th>目安</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>1</td>
                                    <td>3.1.1 で「4つの能力領域」を覚える</td>
                                    <td>30 分</td>
                                </tr>
                                <tr className="even">
                                    <td>2</td>
                                    <td>3.1.2〜3.1.4 を「分析 → 評価 → 育成」の1本の流れとして理解する</td>
                                    <td>60 分</td>
                                </tr>
                                <tr className="odd">
                                    <td>3</td>
                                    <td>3.1.5〜3.1.6 で、マネージャーとして何をするかを整理する</td>
                                    <td>40 分</td>
                                </tr>
                                <tr className="even">
                                    <td>4</td>
                                    <td>3.2.1〜3.2.2 で品質コストの4分類と計算手順を身に付ける</td>
                                    <td>60 分</td>
                                </tr>
                                <tr className="odd">
                                    <td>5</td>
                                    <td>「5.2 想定問題」で確認する</td>
                                    <td>35 分</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr />

                {/* 2. 3.1 テストチーム（The Test Team） */}
                <section>
                    <h2 id="2-31-テストチームthe-test-team">2. 3.1 テストチーム（The Test Team）</h2>
                    <h3 id="20-前提となる用語">2.0 前提となる用語（🟢）</h3>
                    <p>
                        シラバスは「テストチームメンバー（test team
                        member）」を、組織のコンテキストや他の役割に関係なく、テストマネジメントまたはテストをする役割でテストを実施するすべての人と定義しています（Version
                        3.0.J04 p.15 の用語説明で確認）。
                    </p>
                    <ul>
                        <li>テストチームは、さまざまなスキルと能力を持つ個人で構成されます</li>
                        <li>メンバーの経験や資格（Foundation／Advanced／Expert）も異なります</li>
                        <li>
                            使うテストアプローチやプロセスモデル（アジャイルテスト、モデルベースドテスト、リスクベースドテストなど）によって、役割と責任も変わります
                        </li>
                    </ul>
                    <p>
                        第1章の役割比較表（Table
                        1）には、シーケンシャル開発ではテストマネージャーが意思決定とチーム管理を担い、スクラムのようなイテレーティブ開発では役割が統合され、ファシリテーターやコーチが従来のテストマネージャーの代わりになる、という趣旨の記述があります（🟢）。
                    </p>
                    <p>
                        つまり、第3章の「チームの管理」は、テストマネージャーという肩書きの人だけの話ではなく、テストチーム全体を良い状態にするための考え方だと捉えると理解しやすくなります。
                    </p>

                    <h3 id="21-311-4つの能力領域における典型的なスキル">
                        2.1 3.1.1 4つの能力領域における典型的なスキル（🟡）
                    </h3>
                    <h4 id="ステップ14つの領域を知る">ステップ1：4つの領域を知る</h4>
                    <p>
                        チームメンバーのスキルは、次の4つの能力領域（areas of
                        competence）に分けて整理します。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>能力領域</th>
                                    <th>英語</th>
                                    <th>一言でいうと</th>
                                    <th>テストにおける具体例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>専門的能力</td>
                                    <td>Professional competence</td>
                                    <td>専門的な業務を遂行するためのスキル</td>
                                    <td>
                                        テスト技法のスキル、アプリケーション領域における技術的専門知識、ビジネス専門知識、プロジェクトマネジメントスキル
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>方法論的能力</td>
                                    <td>Methodological competence</td>
                                    <td>
                                        ある領域で独自に使用でき、複雑度または新規性の高い課題を独自に遂行できる一般的な能力
                                    </td>
                                    <td>分析力、概念力、判断力</td>
                                </tr>
                                <tr className="odd">
                                    <td>社会的能力</td>
                                    <td>Social competence</td>
                                    <td>他者とどう関わるか（対人）</td>
                                    <td>
                                        コミュニケーション、チームワーク、交渉、対立の解消、共感、フィードバックの授受、ステークホルダーへの説明
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>個人的能力</td>
                                    <td>Personal competence</td>
                                    <td>自分をどう律するか（自己）</td>
                                    <td>
                                        自信を持って行動する力、レジリエンス、自己管理、主体性、学習意欲、ストレス耐性
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <blockquote>
                        <p>
                            🟡
                            補足：試験対策向けの二次資料でも「自信を持って行動する能力」は個人的能力に分類される、という趣旨の出題例が確認できました。ただし正式な分類語彙は日本語版シラバスの訳語で確認してください。
                        </p>
                    </blockquote>

                    <h4 id="ステップ2見分け方のコツ">ステップ2：見分け方のコツ</h4>
                    <p>迷ったときは、次の質問で判定します。</p>
                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_CH3_SKILL_AREAS} />
                    </div>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>例</th>
                                    <th>領域</th>
                                    <th>理由</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>医療機器の薬事規制に詳しい</td>
                                    <td>専門的能力</td>
                                    <td>ドメイン知識</td>
                                </tr>
                                <tr className="even">
                                    <td>同値分割と境界値分析を使い分けられる</td>
                                    <td>専門的能力</td>
                                    <td>テスト技法のスキル</td>
                                </tr>
                                <tr className="odd">
                                    <td>前例のない新機能に対してテストアプローチを自分で組み立てられる</td>
                                    <td>方法論的能力</td>
                                    <td>分析力・概念力・判断力</td>
                                </tr>
                                <tr className="even">
                                    <td>開発者と対立せずに欠陥の重要度を交渉できる</td>
                                    <td>社会的能力</td>
                                    <td>他者との関係の築き方</td>
                                </tr>
                                <tr className="odd">
                                    <td>締切前でも落ち着いて自分のタスクを管理できる</td>
                                    <td>個人的能力</td>
                                    <td>自己管理・レジリエンス</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout-practice">
                        <div className="practice-label">
                            <span className="practice-icon">💡</span>
                            <span>ベストプラクティス</span>
                        </div>
                        <div className="practice-body">
                            <p>
                                採用・育成・アサインの議論で「あの人はスキルが高い」と曖昧に言わず、4領域のどこが強くどこが弱いかを分けて話します。専門（テスト技法やドメイン知識）は強いが方法論（新規課題を自力で組み立てる力）が弱い、といった具体的な処方に直結します。
                            </p>
                        </div>
                    </div>

                    <h3 id="22-312-必要なテストチームメンバーのスキルの分析">
                        2.2 3.1.2 必要なテストチームメンバーのスキルの分析（🟡＋🟢）
                    </h3>
                    <h4 id="ステップ1なぜ分析が必要か">ステップ1：なぜ分析が必要か</h4>
                    <p>
                        第1章の 1.4.2
                        は、テストアプローチを選ぶために分析すべき要素として「テストリソース（テストツール、インフラ、利用可能なテスト担当者とそのスキル）」を挙げ、詳細を
                        3.1 に参照させています（🟢）。例として次のような記述があります。
                    </p>
                    <ul>
                        <li>経験ベースドテストには、ドメイン知識の豊富なテスト担当者が必要</li>
                        <li>モバイルアプリのテストには限られた数の実機が必要</li>
                        <li>ツールの利用はライセンス数に制約される</li>
                    </ul>
                    <p>
                        さらに 1.3.3
                        では、品質リスクの発生可能性を高める要因として、スキル・可用性・モチベーション・自律的な働き方、使用中の
                        SDLC
                        に関する知識の問題、チーム内の対立、地理的に分散したチームなどが挙げられています（🟢）。1.3.4
                        では「最もリスクの高いテストアイテムは、最も適任の人がテストすべき」とされています（🟢）。
                    </p>
                    <p>つまり、必要なスキルはプロジェクトの文脈から逆算して決めます。</p>

                    <h4 id="ステップ2分析の流れ">ステップ2：分析の流れ</h4>
                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_CH3_SKILL_DERIVATION} />
                    </div>

                    <h4 id="ステップ3コンテキストと必要スキルの対応表">
                        ステップ3：コンテキストと必要スキルの対応表
                    </h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>コンテキスト要因（第1章 1.4.2 の観点）</th>
                                    <th>必要になりやすいスキル</th>
                                    <th>主な領域</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>ドメイン（医療・金融・保険など）</td>
                                    <td>ドメイン知識、規制・標準の理解、文書化の厳密さ</td>
                                    <td>専門</td>
                                </tr>
                                <tr className="even">
                                    <td>組織の目標（自動化率向上、テスト成熟度向上）</td>
                                    <td>自動化ツール、CI/CD、メトリクス分析</td>
                                    <td>方法論・専門</td>
                                </tr>
                                <tr className="odd">
                                    <td>プロジェクト目標とタイプ（受託か製品開発か）</td>
                                    <td>契約上の受入基準の読解、交渉</td>
                                    <td>専門・社会</td>
                                </tr>
                                <tr className="even">
                                    <td>テストリソース（ツール、環境、要員）</td>
                                    <td>ツール操作、環境構築、見積り</td>
                                    <td>方法論・専門</td>
                                </tr>
                                <tr className="odd">
                                    <td>SDLC（シーケンシャル／アジャイル／ハイブリッド）</td>
                                    <td>アジャイルの作法、開発者との協働、継続的テスト</td>
                                    <td>方法論・社会</td>
                                </tr>
                                <tr className="even">
                                    <td>他システムとのインタフェース</td>
                                    <td>統合テストの設計、他チームとの調整</td>
                                    <td>方法論・社会</td>
                                </tr>
                                <tr className="odd">
                                    <td>テストデータの可用性</td>
                                    <td>匿名化、データ生成、データ検証</td>
                                    <td>専門・方法論</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 id="ステップ4具体例架空">ステップ4：具体例（架空）</h4>
                    <blockquote>
                        <p>
                            状況：医療系データ管理 Web アプリ。要件は規制対応が必須。スクラムで開発し、CI
                            で回帰テストを自動実行したい。
                        </p>
                    </blockquote>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>必要な活動</th>
                                    <th>必要スキル</th>
                                    <th>領域</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>患者安全リスクに基づくテスト設計</td>
                                    <td>リスク分析、ドメイン知識</td>
                                    <td>方法論・専門</td>
                                </tr>
                                <tr className="even">
                                    <td>スプリント内でのテスト</td>
                                    <td>開発者とのペア作業、迅速なフィードバック</td>
                                    <td>社会・方法論</td>
                                </tr>
                                <tr className="odd">
                                    <td>回帰テストの自動化</td>
                                    <td>自動化ツールとパイプラインの理解</td>
                                    <td>方法論・専門</td>
                                </tr>
                                <tr className="even">
                                    <td>規制当局向けの証跡整備</td>
                                    <td>文書化、トレーサビリティ</td>
                                    <td>専門・方法論</td>
                                </tr>
                                <tr className="odd">
                                    <td>逼迫時の判断</td>
                                    <td>冷静さ、優先順位付け</td>
                                    <td>個人</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout-practice">
                        <div className="practice-label">
                            <span className="practice-icon">💡</span>
                            <span>ベストプラクティス</span>
                        </div>
                        <div className="practice-body">
                            <ul>
                                <li>スキルの要件は「人の名前」からでなく「活動」から導出する</li>
                                <li>必須スキルと歓迎スキルを分ける</li>
                                <li>単一人物への依存（バス係数 1）になっているスキルを必ず洗い出す</li>
                                <li>
                                    ハイブリッド開発では、構造化プロセスとアジャイルの柔軟性の両方をこなせるかを評価する（1.2.3
                                    🟢）
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3 id="23-313-テストチームメンバーのスキルの評価">
                        2.3 3.1.3 テストチームメンバーのスキルの評価（🟡）
                    </h3>
                    <h4 id="ステップ1評価の目的">ステップ1：評価の目的</h4>
                    <p>
                        評価の目的は、優劣をつけることではなく、必要スキルと現有スキルのギャップを見える化して、育成やアサインの判断材料にすることです。
                    </p>

                    <h4 id="ステップ2主な評価方法">ステップ2：主な評価方法</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>方法</th>
                                    <th>内容</th>
                                    <th>長所</th>
                                    <th>注意点</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>自己評価</td>
                                    <td>本人がスキルの習熟度を申告する</td>
                                    <td>手軽、本人の納得感</td>
                                    <td>過大・過小評価が起きる</td>
                                </tr>
                                <tr className="even">
                                    <td>マネージャー評価</td>
                                    <td>上長が観察に基づき評価</td>
                                    <td>一貫した基準</td>
                                    <td>観察できていない領域は評価できない</td>
                                </tr>
                                <tr className="odd">
                                    <td>ピア評価・360度評価</td>
                                    <td>同僚や関係者から評価</td>
                                    <td>社会的能力の把握に有効</td>
                                    <td>心理的安全性が前提</td>
                                </tr>
                                <tr className="even">
                                    <td>実務成果のレビュー</td>
                                    <td>テストケース、欠陥報告書、レポートを確認</td>
                                    <td>客観的</td>
                                    <td>時間がかかる</td>
                                </tr>
                                <tr className="odd">
                                    <td>面談・インタビュー</td>
                                    <td>経験と考え方を対話で確認</td>
                                    <td>個人的能力を把握しやすい</td>
                                    <td>面談者の力量に依存</td>
                                </tr>
                                <tr className="even">
                                    <td>認定資格・研修履歴</td>
                                    <td>ISTQB などの資格や研修の受講記録</td>
                                    <td>定量的で比較しやすい</td>
                                    <td>資格は実務能力の一部のみを示す</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 id="ステップ3スキルマトリクスskills-matrixの例">
                        ステップ3：スキルマトリクス（skills matrix）の例
                    </h4>
                    <p>
                        習熟度を 0〜3 で表します。0 は未経験、1 は指導が必要、2 は自立して実施可能、3
                        は他者を指導できる、という定義です。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>メンバー</th>
                                    <th>ドメイン知識（専門）</th>
                                    <th>テスト技法（専門）</th>
                                    <th>自動化（方法論）</th>
                                    <th>交渉・調整（社会）</th>
                                    <th>自己管理（個人）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>A さん</td>
                                    <td>3</td>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                                <tr className="even">
                                    <td>B さん</td>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>2</td>
                                </tr>
                                <tr className="odd">
                                    <td>C さん</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>2</td>
                                </tr>
                                <tr className="even">
                                    <td>必要水準</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>読み取り例は次のとおりです。</p>
                    <ul>
                        <li>自動化は、B さんだけが必要水準を満たす。B さんへの依存リスクがある</li>
                        <li>C さんは自動化が未経験。育成対象の候補</li>
                        <li>B さんは交渉・調整が弱く、ステークホルダー対応は他のメンバーが補う</li>
                    </ul>
                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_CH3_SKILL_GAP} />
                    </div>
                    <div className="callout-practice">
                        <div className="practice-label">
                            <span className="practice-icon">💡</span>
                            <span>ベストプラクティス</span>
                        </div>
                        <div className="practice-body">
                            <ul>
                                <li>評価基準（習熟度の定義）を事前に合意し、全員に公開する</li>
                                <li>評価は個人攻撃ではなく育成のために行うと明言する</li>
                                <li>定期的に再評価し、マトリクスを更新し続ける</li>
                                <li>資格や研修履歴だけでなく、実務成果も見る</li>
                            </ul>
                        </div>
                    </div>

                    <h3 id="24-314-テストチームメンバーのスキルの育成">
                        2.4 3.1.4 テストチームメンバーのスキルの育成（🟡）
                    </h3>
                    <h4 id="ステップ1育成手段の選択肢">ステップ1：育成手段の選択肢</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>手段</th>
                                    <th>内容</th>
                                    <th>向いているスキル</th>
                                    <th>注意点</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>公式トレーニング</td>
                                    <td>認定トレーニングプロバイダーの講座</td>
                                    <td>体系的な知識、資格取得</td>
                                    <td>コストと時間が必要</td>
                                </tr>
                                <tr className="even">
                                    <td>自己学習</td>
                                    <td>書籍・動画・シラバスでの学習</td>
                                    <td>専門知識の補強</td>
                                    <td>定着確認が別途必要</td>
                                </tr>
                                <tr className="odd">
                                    <td>OJT（実務を通じた学習）</td>
                                    <td>実プロジェクトで経験する</td>
                                    <td>方法論、専門</td>
                                    <td>失敗のコストを許容する範囲を設計する</td>
                                </tr>
                                <tr className="even">
                                    <td>メンタリング／コーチング</td>
                                    <td>経験者が伴走する</td>
                                    <td>社会的・個人的能力</td>
                                    <td>指導者の時間確保が必要</td>
                                </tr>
                                <tr className="odd">
                                    <td>ペアワーク／モブワーク</td>
                                    <td>二人以上で同時に作業</td>
                                    <td>技法、ツール、ドメイン</td>
                                    <td>相性と役割の設計</td>
                                </tr>
                                <tr className="even">
                                    <td>ジョブローテーション／クロストレーニング</td>
                                    <td>別の役割・領域を経験</td>
                                    <td>属人化の解消</td>
                                    <td>短期的な生産性は下がる</td>
                                </tr>
                                <tr className="odd">
                                    <td>勉強会・実践コミュニティ</td>
                                    <td>社内で知識共有</td>
                                    <td>全般</td>
                                    <td>継続の仕組み化が必要</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        第1章の
                        1.6.1（🟢）では、ツール導入のベストプラクティスとして「ツール利用者へのトレーニング・コーチング・メンタリングを提供する」「ツールの所有者を定義する」が挙げられています。これは、育成をツール導入計画の一部として計画に組み込むべきだという実例です。
                    </p>

                    <h4 id="ステップ3育成計画の立て方">ステップ3：育成計画の立て方</h4>
                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_CH3_TRAINING_FLOW} />
                    </div>
                    <p>
                        第1章の 1.4.3（🟢）にある
                        S.M.A.R.T.（Specific、Measurable、Achievable、Relevant、Timely）は、テスト目的や終了基準だけでなく、育成目標にも同じ考え方で適用できます（🟡）。
                    </p>
                    <blockquote>
                        <p>
                            例：悪い目標「自動化を頑張る」／良い目標「3か月以内に、C
                            さんが回帰テスト10件を自動化し、レビューで指摘ゼロで承認される」
                        </p>
                    </blockquote>
                    <div className="callout-practice">
                        <div className="practice-label">
                            <span className="practice-icon">💡</span>
                            <span>ベストプラクティス</span>
                        </div>
                        <div className="practice-body">
                            <ul>
                                <li>研修だけで終わらせず、学んだことを実務で使う機会を必ず設計する</li>
                                <li>高リスク領域のスキルほど早く、厚く育成する</li>
                                <li>
                                    育成の時間をプロジェクト計画（見積り）に最初から組み込む。第1章 1.6.3
                                    が指摘する機会コスト（学習や導入に費やす時間はテスト作業に使えない時間）と同じ考え方
                                </li>
                                <li>育成の成果をレトロスペクティブで振り返る</li>
                            </ul>
                        </div>
                    </div>

                    <h3 id="25-315-テストチームの管理に必要なマネジメントスキル">
                        2.5 3.1.5 テストチームの管理に必要なマネジメントスキル（🟡）
                    </h3>
                    <h4 id="ステップ1ホールチームアプローチ">
                        ステップ1：ホールチームアプローチ（🟢＋🟡）
                    </h4>
                    <p>
                        シラバスは、第3章で「ホールチームアプローチに沿ってチームを管理する」ことを学ぶと述べています（🟢）。1.5.4
                        では、レトロスペクティブはチーム全員で実施され、ホールチームアプローチを支え、継続的改善を促す、と書かれています（🟢）。
                    </p>
                    <p>
                        一般にホールチームアプローチとは、品質に関する責任をテスト担当者だけに負わせず、開発者・プロダクトオーナー・運用担当などチーム全員で共有する考え方です（🟡、ISTQB
                        Foundation Level v4.0 の用語）。1.3.2
                        にも「品質はみんなの関心事であることを明確にする」というテストマネージャーの役割の記述があります（🟢）。
                    </p>

                    <h4 id="ステップ2必要なマネジメントスキル">ステップ2：必要なマネジメントスキル</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>スキル</th>
                                    <th>具体的にやること</th>
                                    <th>主な領域</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>リーダーシップ</td>
                                    <td>目標とビジョンを示し、意思決定の方針を明確にする</td>
                                    <td>社会・個人</td>
                                </tr>
                                <tr className="even">
                                    <td>コミュニケーション</td>
                                    <td>
                                        状況を相手に合わせて伝える。テスト結果を「リスクの言葉」で説明する（1.3.4
                                        🟢）
                                    </td>
                                    <td>社会</td>
                                </tr>
                                <tr className="odd">
                                    <td>交渉・対立解消</td>
                                    <td>開発者やプロジェクトマネージャーとの合意形成</td>
                                    <td>社会</td>
                                </tr>
                                <tr className="even">
                                    <td>委任と権限移譲</td>
                                    <td>適切な人に適切なタスクと責任を任せる</td>
                                    <td>方法論・社会</td>
                                </tr>
                                <tr className="odd">
                                    <td>動機付け</td>
                                    <td>3.1.6 を参照</td>
                                    <td>社会・個人</td>
                                </tr>
                                <tr className="even">
                                    <td>計画・優先順位付け</td>
                                    <td>リソース制約下でのスコープと優先度の決定</td>
                                    <td>方法論</td>
                                </tr>
                                <tr className="odd">
                                    <td>分散チームの調整</td>
                                    <td>
                                        オンサイト／オフサイトなど、同期とコミュニケーション規約の整備（1.2.7
                                        🟢）
                                    </td>
                                    <td>社会・方法論</td>
                                </tr>
                                <tr className="even">
                                    <td>変化への対応</td>
                                    <td>組織変更、ハイブリッド開発への移行時のチームの支援（1.2.3 🟢）</td>
                                    <td>社会・個人</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 id="ステップ3状況別の使い分け">ステップ3：状況別の使い分け</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>状況</th>
                                    <th>推奨されるマネジメントの重心</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>新人が多い</td>
                                    <td>指示を具体的にし、レビューと伴走を厚くする</td>
                                </tr>
                                <tr className="even">
                                    <td>熟練者が多い</td>
                                    <td>目的と制約を伝え、やり方は任せる</td>
                                </tr>
                                <tr className="odd">
                                    <td>分散チーム</td>
                                    <td>通信規約、共通ツール、定例の同期を整える</td>
                                </tr>
                                <tr className="even">
                                    <td>アジャイル</td>
                                    <td>促進型（ファシリテーター／コーチ）、自己組織化の支援</td>
                                </tr>
                                <tr className="odd">
                                    <td>規制の厳しい領域</td>
                                    <td>手順と証跡を明確にし、逸脱を早期に検知する</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout-practice">
                        <div className="practice-label">
                            <span className="practice-icon">💡</span>
                            <span>ベストプラクティス</span>
                        </div>
                        <div className="practice-body">
                            <ul>
                                <li>品質を「テストチームの仕事」に閉じ込めず、チーム全体の目標にする</li>
                                <li>意思決定の理由を透明にする</li>
                                <li>問題は早期に、責める口調でなく事実とデータで扱う</li>
                            </ul>
                        </div>
                    </div>

                    <h3 id="26-316-特定の状況におけるテストチームの動機付け要因と意欲低下要因">
                        2.6 3.1.6 特定の状況におけるテストチームの動機付け要因と意欲低下要因（🟡）
                    </h3>
                    <h4 id="ステップ1考え方">ステップ1：考え方</h4>
                    <p>
                        同じ施策でも、状況が違えばチームのやる気を高めることも下げることもあります。マネージャーは、状況ごとに何が効いて何が逆効果かを見分ける必要があります。
                    </p>

                    <h4 id="ステップ2要因の一覧">ステップ2：要因の一覧</h4>
                    <p>
                        シラバスは<strong>動機付け衛生理論</strong>に基づき、「モチベーションを上げる要因（動機付け要因）」と「衛生要因」を区別しています。
                        衛生要因は<strong>満たしても自動的に満足度が上がるわけではないが、欠けているとモチベーションが下がる</strong>点が動機付け要因との決定的な違いです。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>種類</th>
                                    <th>性質</th>
                                    <th>要因の例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>動機付け要因</td>
                                    <td>意識的に認識され、成長と満足感につながる</td>
                                    <td>
                                        仕事の達成に対する承認と評価（インセンティブ、個別アプローチ）、責任と自律性の向上（テストチーム内でのテストプロセスの定義）、達成可能かつ努力する価値がある興味深く有意義でやりがいのあるタスク（テスト自動化の新ツールの選定と導入）、プロフェッショナルとしての昇進と成長
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>衛生要因</td>
                                    <td>
                                        通常は当然のものと見なされる。満たしても満足度は自動的には上がらないが、欠けるとモチベーションが下がる
                                    </td>
                                    <td>
                                        適切な報酬（市場に見合った給与、時間外手当、社会保障）、評価される人事方針とマネジメントスタイル（現実的な目標、外部干渉や過負荷からの保護）、快適な労働条件（曖昧でない仕様、成熟したテスト対象、適切に修正された欠陥、安定したテスト環境）、最低限必要な安全性、良好な対人関係
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>意欲低下要因</td>
                                    <td>上記を踏まえた一般的な整理（🟡）</td>
                                    <td>
                                        目標や優先順位の頻繁な変更、テストが軽視される文化、過度な残業と締切圧力、成果に見合わない評価、不明確な役割、頻繁なやり直し、スキルの停滞、批判的で心理的安全性のない雰囲気
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        テストマネジメントは、<strong>モチベーションを下げる要因を継続的に排除しつつ、モチベーションを上げる要因を作り出し強化する</strong>ことが求められます。
                    </p>

                    <h4 id="ステップ3状況別の対処例">ステップ3：状況別の対処例</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>状況</th>
                                    <th>起こりやすい意欲低下</th>
                                    <th>マネージャーの対応例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>納期直前に大量の欠陥が見つかる</td>
                                    <td>疲弊、責任の押し付け合い</td>
                                    <td>
                                        優先順位を絞り、残業の上限を設け、進捗を可視化してリスクベースで判断する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>上流工程の遅れでテスト期間が圧縮される</td>
                                    <td>「テストが最後のしわ寄せ」という不満</td>
                                    <td>
                                        圧縮の影響をリスクとして経営層に報告し、スコープの再交渉をする（1.3.4
                                        の「延長するか残存リスクを受け入れるか」の根拠づくり 🟢）
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>手作業の反復が続く</td>
                                    <td>単調さによる意欲低下</td>
                                    <td>自動化を推進し、探索的テストなど創造的な作業を組み込む</td>
                                </tr>
                                <tr className="even">
                                    <td>オフサイト／分散チーム</td>
                                    <td>孤立感、情報格差</td>
                                    <td>定例の同期、共通ツール、対面や交流の機会を設ける</td>
                                </tr>
                                <tr className="odd">
                                    <td>ハイブリッド開発への移行</td>
                                    <td>不安、やり方の混乱</td>
                                    <td>期待を明確にし、役割の変化を説明し、育成機会を提供する</td>
                                </tr>
                                <tr className="even">
                                    <td>手厚いレビューで欠陥が減った</td>
                                    <td>「テストが不要では」という誤解による軽視感</td>
                                    <td>品質コストの観点（3.2）で、予防・検出の価値を示す</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout-practice">
                        <div className="practice-label">
                            <span className="practice-icon">💡</span>
                            <span>ベストプラクティス</span>
                        </div>
                        <div className="practice-body">
                            <ul>
                                <li>
                                    個別に話を聞く場と、チーム全体で話す場（レトロスペクティブ）の両方を持つ
                                </li>
                                <li>成果は公に称え、問題は個別に丁寧に伝える</li>
                                <li>
                                    「動機付け」を気合いの問題にせず、環境・目標・成長・公正さの設計の問題として扱う
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
