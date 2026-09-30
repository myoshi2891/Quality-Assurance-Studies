import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_1, DIAGRAM_2, DIAGRAM_3, DIAGRAM_4 } from './diagrams';
import './istqb-ctal-tm-chapter2-managing-the-product.css';

export const metadata: Metadata = {
    title: 'CTAL-TM v3.0 第2章「プロダクトのマネジメント（製品の管理）」初学者向けステップバイステップ解説ガイド',
    description: 'ISTQB Advanced Level Test Management (CTAL-TM) v3.0 第2章「プロダクトのマネジメント（製品の管理）」初学者向け完全解説ガイド。テストメトリクス、テスト見積り、欠陥マネジメントの全貌を網羅。',
};

export default function CtalTmChapter2Page() {
    return (
        <div className="ctal-tm-ch2-page">
            <div className="layout">
                <NavBar />
                <main className="main" role="main">
                    <div className="hero">
                        <h1>
                            CTAL-TM v3.0
                            第2章「プロダクトのマネジメント（製品の管理）」初学者向けステップバイステップ解説ガイド
                        </h1>
                        <div className="hero-sub">
                            ISTQB® Certified Tester Advanced Level Test Management（CTAL-TM）v3.0 の{' '}
                            <strong>
                                第2章 Managing the
                                Product（JSTQB日本語版の章題：プロダクトのマネジメント、390分）
                            </strong>{' '}
                            を、初学者向けに「なぜ → 何を → どうやって → 落とし穴」の順で解説します。
                            各項目に <strong>ベストプラクティス</strong> と{' '}
                            <strong>出典（URL・シラバス該当ページ）</strong> を付けています。
                            参照日：2026-09-21 ／ 根拠：ISTQB 英語版シラバス v3.0（2024/05/03 発行）と
                            JSTQB 日本語版 Version3.0.J04（2026/06 掲載）
                        </div>
                    </div>

                    <h2 id="1-本ガイドの読み方と第2章の全体像">1. 本ガイドの読み方と第2章の全体像</h2>
                    <h3 id="11-ご依頼の製品の管理と公式の章題の対応">
                        1.1 ご依頼の「製品の管理」と公式の章題の対応
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>呼び方</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>ご依頼の表記</td>
                                    <td>第2章「製品の管理」</td>
                                </tr>
                                <tr className="even">
                                    <td>ISTQB（英語）</td>
                                    <td>Chapter 2: Managing the Product</td>
                                </tr>
                                <tr className="odd">
                                    <td>JSTQB（日本語版シラバス）</td>
                                    <td>第2章：プロダクトのマネジメント</td>
                                </tr>
                                <tr className="even">
                                    <td>学習時間（認定トレーニングの最低時間）</td>
                                    <td>390分（全体 1,365分＝22.75時間の約29％）</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="callout-source">
                        出典：<a
                            href="https://www.jstqb.jp/wordpress/wp-content/uploads/2026/06/JSTQB-Syllabus.Advanced_TM_VersionV3.0.J04.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            JSTQB日本語版シラバス（PDF）
                        </a>{' '}
                        の 0.10 節（p.14〜15）、第2章冒頭（p.49）
                    </p>

                    <h3 id="12-第2章で学ぶ3つのテーマ">1.2 第2章で学ぶ3つのテーマ</h3>
                    <p>
                        第2章は「テストという仕事の<strong>成果物（プロダクト）を数字と記録で管理する</strong>」章です。第1章が「どう進めるか（活動のマネジメント）」、第3章が「誰がやるか（チームのマネジメント）」であるのに対し、第2章は次の3つを扱います。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>節</th>
                                    <th>テーマ</th>
                                    <th>一言でいうと</th>
                                    <th>章冒頭に書かれた学習内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>2.1</td>
                                    <td>テストメトリクス</td>
                                    <td>テストの進み具合と品質を<strong>測って報告する</strong></td>
                                    <td>
                                        テスト目的の達成をメトリクスでモニタリング／コントロールし、進捗を報告する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>2.2</td>
                                    <td>テスト見積り</td>
                                    <td>
                                        テストにどれだけ<strong>時間・工数・コストがかかるか予測する</strong>
                                    </td>
                                    <td>開発モデルやチームに合った見積り技法を選ぶ</td>
                                </tr>
                                <tr className="odd">
                                    <td>2.3</td>
                                    <td>欠陥マネジメント</td>
                                    <td>見つけた欠陥を<strong>記録し、決定し、直し、学ぶ</strong></td>
                                    <td>
                                        シーケンシャル／アジャイル／ハイブリッドに合う欠陥ワークフローを定義する
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mermaid-container" id="container-mmd-1">
                        <div className="mermaid-target" id="mmd-1">
                            <Mermaid chart={DIAGRAM_1} />
                        </div>
                    </div>
                    <p>
                        <strong>図の読み方</strong>：見積り（2.2）で立てた計画値と、テスト中に集めたメトリクス（2.1）を比べることで進捗が分かります。欠陥（2.3）の数・種類・原因は、そのままメトリクスの材料になり、最終的にはプロセス改善（第1章 1.5）へつながります。3つの節は独立した知識ではなく、ひとつの循環です。
                    </p>

                    <h3 id="13-学習の目的lo一覧と認知レベル">1.3 学習の目的（LO）一覧と認知レベル</h3>
                    <p>
                        シラバスでは、章見出しの下のキーワードは{' '}
                        <strong>K1（記憶）</strong> として全部覚える必要があり、LOごとに
                        K2（理解）／K3（適用）／K4（分析）が指定されています。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>LO</th>
                                    <th>内容（要約）</th>
                                    <th>Kレベル</th>
                                    <th>試験での聞かれ方の目安</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>TM-2.1.1</td>
                                    <td>テスト目的を達成するためのメトリクスの例を挙げる</td>
                                    <td>K2</td>
                                    <td>例を挙げられるか</td>
                                </tr>
                                <tr className="even">
                                    <td>TM-2.1.2</td>
                                    <td>
                                        テストメトリクスを用いてテストの進捗をコントロールする方法を説明する
                                    </td>
                                    <td>K2</td>
                                    <td>仕組みを説明できるか</td>
                                </tr>
                                <tr className="odd">
                                    <td>TM-2.1.3</td>
                                    <td>
                                        ステークホルダーの意思決定に役立つテストレポートを作成するためにテスト結果を分析する
                                    </td>
                                    <td><strong>K4</strong></td>
                                    <td>シナリオを分析して選ぶ・判断する</td>
                                </tr>
                                <tr className="even">
                                    <td>TM-2.2.1</td>
                                    <td>テスト見積りで考慮すべき要因を説明する</td>
                                    <td>K2</td>
                                    <td>説明できるか</td>
                                </tr>
                                <tr className="odd">
                                    <td>TM-2.2.2</td>
                                    <td>テスト見積りに影響を与える要因の例を挙げる</td>
                                    <td>K2</td>
                                    <td>例を挙げられるか</td>
                                </tr>
                                <tr className="even">
                                    <td>TM-2.2.3</td>
                                    <td>特定のコンテキストで適切な見積り技法・アプローチを選択する</td>
                                    <td><strong>K4</strong></td>
                                    <td>状況を分析して技法を選ぶ</td>
                                </tr>
                                <tr className="odd">
                                    <td>TM-2.3.1</td>
                                    <td>欠陥ワークフローを含む欠陥マネジメントプロセスを実装する</td>
                                    <td><strong>K3</strong></td>
                                    <td>手順を適用できるか</td>
                                </tr>
                                <tr className="even">
                                    <td>TM-2.3.2</td>
                                    <td>効果的な欠陥マネジメントに必要なプロセスと参加者を説明する</td>
                                    <td>K2</td>
                                    <td>説明できるか</td>
                                </tr>
                                <tr className="odd">
                                    <td>TM-2.3.3</td>
                                    <td>
                                        アジャイルソフトウェア開発における欠陥マネジメントを詳細に説明する
                                    </td>
                                    <td>K2</td>
                                    <td>説明できるか</td>
                                </tr>
                                <tr className="even">
                                    <td>TM-2.3.4</td>
                                    <td>
                                        ハイブリッドソフトウェア開発における欠陥マネジメントの課題を説明する
                                    </td>
                                    <td>K2</td>
                                    <td>説明できるか</td>
                                </tr>
                                <tr className="odd">
                                    <td>TM-2.3.5</td>
                                    <td>欠陥マネジメントで収集すべきデータと分類情報を利用する</td>
                                    <td><strong>K3</strong></td>
                                    <td>手順を適用できるか</td>
                                </tr>
                                <tr className="even">
                                    <td>TM-2.3.6</td>
                                    <td>
                                        欠陥レポートの統計情報がプロセス改善の考案にどう使えるか説明する
                                    </td>
                                    <td>K2</td>
                                    <td>説明できるか</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="callout-source">
                        出典：<a
                            href="https://www.jstqb.jp/wordpress/wp-content/uploads/2026/06/JSTQB-Syllabus.Advanced_TM_VersionV3.0.J04.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            JSTQB日本語版シラバス（PDF）
                        </a>{' '}
                        第2章「第2章の学習の目的」（p.49）、付録A（p.78〜80）
                    </p>

                    <h3 id="14-k1-として暗記するキーワード">1.4 K1 として暗記するキーワード</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>区分</th>
                                    <th>日本語</th>
                                    <th>英語</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>キーワード</td>
                                    <td>不正</td>
                                    <td>anomaly</td>
                                </tr>
                                <tr className="even">
                                    <td></td>
                                    <td>欠陥</td>
                                    <td>defect</td>
                                </tr>
                                <tr className="odd">
                                    <td></td>
                                    <td>欠陥レポート</td>
                                    <td>defect report</td>
                                </tr>
                                <tr className="even">
                                    <td></td>
                                    <td>欠陥ワークフロー</td>
                                    <td>defect workflow</td>
                                </tr>
                                <tr className="odd">
                                    <td></td>
                                    <td>故障</td>
                                    <td>failure</td>
                                </tr>
                                <tr className="even">
                                    <td></td>
                                    <td>メトリクス</td>
                                    <td>metric</td>
                                </tr>
                                <tr className="odd">
                                    <td></td>
                                    <td>テスト見積り</td>
                                    <td>test estimation</td>
                                </tr>
                                <tr className="even">
                                    <td></td>
                                    <td>テスト目的</td>
                                    <td>test objective</td>
                                </tr>
                                <tr className="odd">
                                    <td></td>
                                    <td>テスト進捗状況</td>
                                    <td>test progress</td>
                                </tr>
                                <tr className="even">
                                    <td>ドメイン固有キーワード</td>
                                    <td>プランニングポーカー</td>
                                    <td>planning poker</td>
                                </tr>
                                <tr className="odd">
                                    <td></td>
                                    <td>三点見積り</td>
                                    <td>three-point estimation</td>
                                </tr>
                                <tr className="even">
                                    <td></td>
                                    <td>ワイドバンドデルファイ</td>
                                    <td>wideband Delphi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout callout-practice">
                        <div className="callout-head">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">学習のヒント</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                ：<strong>欠陥・故障・不正</strong>の関係を最初に押さえると2.3が楽になります。作業成果物に混入した誤りが<strong>欠陥</strong>、欠陥が実行時に表面化して外部から見える誤動作になったものが<strong>故障</strong>、テスト担当者が観察する「期待結果と実際の結果の食い違い」が<strong>不正</strong>です。この3つは必ず一列に連鎖するわけではありません。欠陥があっても実行されなければ故障は起きませんし、観察された不正の原因は欠陥とは限らず、テストデータ・テストスクリプト・テスト環境・要件の理解違いなど別の原因のこともあります。したがって実務では、<strong>不正の観察は「原因の調査を始める合図」</strong>であって、欠陥の確定ではありません（だからこそ観測された事象は欠陥と呼び分けて「不正」と記録します）。
                            </p>
                        </div>
                    </div>

                    <h3 id="15-試験の基本情報istqb公式ページより">
                        1.5 試験の基本情報（ISTQB公式ページより）
                    </h3>
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
                                    <td>問題数</td>
                                    <td>50問</td>
                                </tr>
                                <tr className="even">
                                    <td>合格点</td>
                                    <td>58点（満点 88点）</td>
                                </tr>
                                <tr className="odd">
                                    <td>試験時間</td>
                                    <td>120分（英語以外が母語の受験者は +25％）</td>
                                </tr>
                                <tr className="even">
                                    <td>前提資格</td>
                                    <td>
                                        Foundation Level（CTFL v4.0 または旧版）の保有に加え、十分な実務経験。具体的な実務経験の基準は Member Board / Exam Provider に確認すること
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="callout-source">
                        出典：<a
                            href="https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ISTQB CTAL-TM v3.0 認定ページ
                        </a>（Exam Structure）
                    </p>
                    <hr />

                    {/* ==========================================================================
                       2. 【シラバス2.1】テストメトリクス
                       ========================================================================== */}
                    <h2 id="2-シラバス21テストメトリクス">2. 【シラバス2.1】テストメトリクス</h2>
                    <div className="callout callout-note">
                        <div className="callout-body">
                            <p>学習の目的：TM-2.1.1（K2）／TM-2.1.2（K2）／TM-2.1.3（K4）</p>
                        </div>
                    </div>

                    <h3 id="ステップ1なぜテストにメトリクスが必要なのか">
                        ステップ1：なぜテストにメトリクスが必要なのか
                    </h3>
                    <p>
                        マネジメントの世界には「測定できるものは達成できる」という格言があります。逆に、測られないものは無視されやすく、達成されにくくなります。
                    </p>
                    <p>
                        ここで第1章の <strong>テスト目的</strong> を思い出してください。テスト目的は「<strong>なぜテストするのか</strong>」の答えです（1.4 節）。目的が達成できたかどうかを判断するには、それを<strong>測る方法</strong>を先に決めておく必要があります。その「測る方法」がテストメトリクスです。
                    </p>
                    <div className="mermaid-container" id="container-mmd-2">
                        <div className="mermaid-target" id="mmd-2">
                            <Mermaid chart={DIAGRAM_2} />
                        </div>
                    </div>
                    <p>
                        <strong>ポイント</strong>：テストマネジメントは、<strong>テスト計画の段階で</strong>、モニタリング・コントロール・完了それぞれに使うメトリクスを定義できなければなりません。また、各メトリクスは「定義 → 測定 → モニタリング → 報告」まで一貫して運用する必要があります。
                    </p>

                    <h3 id="ステップ2メトリクスを3つに分類する">
                        ステップ2：メトリクスを3つに分類する
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>分類</th>
                                    <th>何を測るか</th>
                                    <th>例</th>
                                    <th>答える問い</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>プロジェクトメトリクス</td>
                                    <td>既存のプロジェクト終了基準に対する<strong>進捗</strong></td>
                                    <td>テストの実行率、合格率、不合格率</td>
                                    <td>予定どおり進んでいるか</td>
                                </tr>
                                <tr className="even">
                                    <td>プロダクトメトリクス</td>
                                    <td>
                                        プロダクトが想定ユーザーの期待する<strong>品質</strong>をどの程度満たすか
                                    </td>
                                    <td>リスクカバレッジ、欠陥密度、残存リスク</td>
                                    <td>品質は十分か</td>
                                </tr>
                                <tr className="odd">
                                    <td>プロセスメトリクス</td>
                                    <td>
                                        テストプロセスの<strong>能力</strong>とテストの<strong>有効性</strong>
                                    </td>
                                    <td>欠陥検出率（DDP）など</td>
                                    <td>テストのやり方は効果的・効率的か</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        補足：プロダクト／プロセスメトリクスの詳細は ISTQB Expert Level（Test Management、Improving the Test Process）の範囲です。Advanced Level では「分類と役割」を理解すれば十分です。
                    </p>
                    <div className="callout callout-practice">
                        <div className="callout-head">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">ベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <p>（シラバス根拠：2.1 導入）</p>
                            <ul>
                                <li>
                                    メトリクスは<strong>テスト目的から逆算して</strong>選ぶ（先に「何を知りたいか」、次に「何を測るか」）。
                                </li>
                                <li>
                                    3分類のバランスを取る。プロジェクトメトリクス（進捗）だけを追うと「終わったが品質は不明」になりやすい。
                                </li>
                                <li>
                                    測定できないものは「評価（専門家・ステークホルダーによるアセスメント）」で補う（1.4.3 節の考え方）。
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3 id="ステップ3tm-211テストマネジメント活動ごとのメトリクスの例">
                        ステップ3（TM-2.1.1）：テストマネジメント活動ごとのメトリクスの例
                    </h3>
                    <p>
                        テストマネジメントの主要活動は次の3つ（テスト計画／テストモニタリングとテストコントロール／テスト完了）で、それぞれにメトリクスが関係します。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>活動</th>
                                    <th>メトリクスの役割</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>テスト計画</td>
                                    <td>
                                        プロジェクトテスト戦略とテスト目的に合うメトリクスを<strong>定義</strong>する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>テストモニタリング／テストコントロール</td>
                                    <td>
                                        テスト活動の<strong>進捗</strong>を測る（テスト進捗レポートで報告）
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>テスト完了</td>
                                    <td>
                                        終了基準に対する<strong>テスト目的の達成度</strong>を測る（テスト完了レポートで報告）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>シラバスの「表2」に載っている代表的なメトリクスは次のとおりです。</p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>メトリクス</th>
                                    <th>何を見るか</th>
                                    <th>使いどころ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>要件カバレッジ</td>
                                    <td>要件のうちテストでカバーできた割合</td>
                                    <td>モニタリング／コントロール <strong>と</strong> 完了の両方</td>
                                </tr>
                                <tr className="even">
                                    <td>プロダクトリスクカバレッジ</td>
                                    <td>識別したプロダクトリスクのうち、テストで軽減できた割合</td>
                                    <td>モニタリング／コントロール <strong>と</strong> 完了の両方</td>
                                </tr>
                                <tr className="odd">
                                    <td>
                                        テストケースのステータス別実行割合（不合格、ブロックなど）対
                                        計画したテストケース
                                    </td>
                                    <td>計画に対する実行状況</td>
                                    <td>モニタリング／コントロール <strong>と</strong> 完了の両方</td>
                                </tr>
                                <tr className="even">
                                    <td>コードカバレッジ</td>
                                    <td>テストで実行されたコードの割合</td>
                                    <td>表2で○は1列のみ（下の注を参照）</td>
                                </tr>
                                <tr className="odd">
                                    <td>テスト活動の実績 対 計画時の見積り（時間単位）</td>
                                    <td>工数の計画値と実績</td>
                                    <td>表2で○は1列のみ（下の注を参照）</td>
                                </tr>
                                <tr className="even">
                                    <td>欠陥解決数累計 対 欠陥数累計</td>
                                    <td>見つかった欠陥のうち解決済みの割合</td>
                                    <td>表2で○は1列のみ（下の注を参照）</td>
                                </tr>
                                <tr className="odd">
                                    <td>実際の自動化テストケース 対 計画した自動化テストケース</td>
                                    <td>自動化の達成度</td>
                                    <td>表2で○は1列のみ（下の注を参照）</td>
                                </tr>
                                <tr className="even">
                                    <td>実際のテストコスト 対 計画したテストコスト</td>
                                    <td>予算に対する実績</td>
                                    <td>表2で○は1列のみ（下の注を参照）</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout callout-warning">
                        <div className="callout-head">
                            <span className="callout-icon">⚠️</span>
                            <span className="callout-label">注（確認のお願い）</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                ：表2は「○」の位置（どの列に付くか）で使いどころを示しています。私が参照した本文抽出では、上の3行以外は○が1つだけ付くことは読み取れましたが、<strong>モニタリング側か完了側かの列位置までは確認できませんでした</strong>。試験前に、英語版シラバス p.48〜49 または日本語版 p.51 の表2で列位置を必ず確認してください。考え方の目安は次のとおりです。
                            </p>
                            <ul>
                                <li>
                                    「進捗」を示すもの（工数の計画対実績、欠陥の解決状況など）は<strong>モニタリング／コントロール向き</strong>
                                </li>
                                <li>
                                    「目的の達成度」を示すもの（自動化の達成度、終了基準となるカバレッジなど）は<strong>完了向き</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        補足：テストの有効性をモニタリングするメトリクスとして<strong>欠陥検出率</strong>（DDP：Defect Detection Percentage）もあります。DDP は Expert Level（テストプロセス改善）で詳しく扱われる範囲です。
                    </p>
                    <p className="callout-source">
                        出典：<a
                            href="https://www.jstqb.jp/wordpress/wp-content/uploads/2026/06/JSTQB-Syllabus.Advanced_TM_VersionV3.0.J04.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            JSTQB日本語版シラバス（PDF）
                        </a>{' '}
                        2.1 導入・2.1.1（p.50〜51）、<a
                            href="https://istqb.org/?sdm_process_download=1&amp;download_id=3445"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ISTQB英語版シラバス（PDF）
                        </a>{' '}
                        2.1 節（p.48〜49）
                    </p>
                    <div className="callout callout-practice">
                        <div className="callout-head">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">ベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <p>（実務補足）</p>
                            <ul>
                                <li>
                                    メトリクスごとに「<strong>計画値・目標値・測定方法・報告頻度・責任者</strong>」を1行で定義した一覧（メトリクス定義表）を、テスト計画書に入れる。
                                </li>
                                <li>
                                    「計画に対する実績」の形（対 計画）で持つ。実績だけの数字では良し悪しが判断できない。
                                </li>
                                <li>
                                    ツール（テストマネジメントツール、欠陥マネジメントツール、CI/CD）から<strong>自動収集できる</strong>指標を優先し、手作業の集計コストを下げる（1.6.5 節「ツールメトリクス」との関連）。
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3 id="ステップ4tm-212モニタリングコントロール完了の違い">
                        ステップ4（TM-2.1.2）：モニタリング・コントロール・完了の違い
                    </h3>
                    <p>3つの言葉は似ていますが、役割がはっきり違います。</p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>用語</th>
                                    <th>定義（やさしく言うと）</th>
                                    <th>具体例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>テストメトリクス</td>
                                    <td>
                                        テストがどこまで進んだか、終了基準や関連タスクが達成されたかを示す<strong>指標</strong>
                                    </td>
                                    <td>実行率、合格率、要件カバレッジ</td>
                                </tr>
                                <tr className="even">
                                    <td>テストモニタリング</td>
                                    <td>
                                        テストと関連する評価・アセスメントの<strong>データを集める</strong>活動。進捗の評価と、終了基準の達成確認に使う
                                    </td>
                                    <td>毎日の実行結果の集計、新しいリスクの識別</td>
                                </tr>
                                <tr className="odd">
                                    <td>テストコントロール</td>
                                    <td>
                                        モニタリングの情報を使い、効果的・効率的にテストするための<strong>ガイダンスと是正措置</strong>を与える活動
                                    </td>
                                    <td>下の4例</td>
                                </tr>
                                <tr className="even">
                                    <td>テスト完了</td>
                                    <td>
                                        完了したテスト活動のデータを集め、教訓・テストウェアなどを<strong>統合する</strong>活動
                                    </td>
                                    <td>テスト完了レポート、ふりかえり</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p><strong>テストコントロールの具体例（シラバス記載）</strong></p>
                    <ol>
                        <li>
                            識別したリスクが<strong>課題事項になった</strong>場合に、テストを再優先順位付けする
                        </li>
                        <li>
                            <strong>手戻り</strong>により、テストアイテムが開始基準／終了基準を満たすかを再評価する
                        </li>
                        <li>
                            <strong>テスト環境の提供遅れ</strong>を考慮して、テストスケジュールを調整する
                        </li>
                        <li>必要なときに必要な場所へ<strong>新しいリソースを追加</strong>する</li>
                    </ol>
                    <p>
                        <strong>テスト完了が発生するタイミング</strong>：テストレベルの完了、イテレーションの完了、テストプロジェクトの完了（または中止）、メンテナンスリリースの完了など、プロジェクトのマイルストーンです。
                    </p>
                    <div className="mermaid-container" id="container-mmd-3">
                        <div className="mermaid-target" id="mmd-3">
                            <Mermaid chart={DIAGRAM_3} />
                        </div>
                    </div>
                    <p className="callout-source">
                        出典：<a
                            href="https://www.jstqb.jp/wordpress/wp-content/uploads/2026/06/JSTQB-Syllabus.Advanced_TM_VersionV3.0.J04.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            JSTQB日本語版シラバス（PDF）
                        </a>{' '}
                        2.1.2（p.51〜52）、1.1.2 テストモニタリングとコントロールの活動（p.20）
                    </p>
                    <div className="callout callout-practice">
                        <div className="callout-head">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">ベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <p>（シラバス根拠：2.1.2 ＋ 実務補足）</p>
                            <ul>
                                <li>
                                    モニタリング（見る）とコントロール（動く）を<strong>セットで運用</strong>する。「見るだけ」のダッシュボードは是正措置につながらない。
                                </li>
                                <li>
                                    コントロールの発動条件（例：ブロックされたテストが全体の10％を超えたらエスカレーション）を<strong>あらかじめ</strong>決めておく（実務補足）。
                                </li>
                                <li>
                                    テストモニタリングとテストコントロールで使うメトリクスは、テスト完了時のものと<strong>異なってよい</strong>。進捗用と達成度用を意識して分ける。
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3 id="ステップ5tm-213k4テストレポートを作るために結果を分析する">
                        ステップ5（TM-2.1.3・K4）：テストレポートを作るために結果を分析する
                    </h3>
                    <p>
                        K4（分析）なので、「知っている」だけでなく<strong>状況を読み解いて判断する力</strong>が問われます。
                    </p>
                    <h4 id="テストレベルによって使えるメトリクスが違う">
                        テストレベルによって「使えるメトリクス」が違う
                    </h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>テストレベル</th>
                                    <th>主なテストベース</th>
                                    <th>適したカバレッジ・メトリクスの例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>コンポーネントテスト</td>
                                    <td>コード・詳細設計</td>
                                    <td>構造カバレッジ（例：ステートメントカバレッジ）</td>
                                </tr>
                                <tr className="even">
                                    <td>コンポーネント統合テスト</td>
                                    <td>インターフェース仕様・アーキテクチャ</td>
                                    <td>構造カバレッジ（例：インターフェースカバレッジ）</td>
                                </tr>
                                <tr className="odd">
                                    <td>
                                        システムテスト／システム統合テスト／受け入れテスト／セキュリティテスト
                                    </td>
                                    <td>
                                        要件仕様書、ユースケース、ユーザーストーリー、プロダクトリスク
                                    </td>
                                    <td>要件カバレッジ、プロダクトリスクカバレッジ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>重要な注意が2つあります。</p>
                    <ul>
                        <li>
                            コードカバレッジは「テストがテスト対象の構造をどの程度実行したか」の測定に使えますが、<strong>上位のテスト結果の報告は、プロジェクトの文脈とニーズに合わせる</strong>べきです。たとえば頻繁に変更がある環境では、コードカバレッジで「コード変更がテストスイートに与える影響」を監視し、ギャップやリスクを見つける使い方が有用です。
                        </li>
                        <li>
                            コンポーネントテストとコンポーネント統合テストで<strong>構造カバレッジ100％を達成しても</strong>、欠陥と品質リスクは<strong>より上位のテストレベルで対処する必要が残ります</strong>。
                        </li>
                    </ul>

                    <h4 id="報告の形式スナップショットとトレンド">
                        報告の形式：スナップショットとトレンド
                    </h4>
                    <ul>
                        <li>
                            <strong>スナップショット</strong>：ある時点の値（例：本日時点の合格率78％）
                        </li>
                        <li>
                            <strong>トレンド</strong>：時系列の変遷（例：過去2週間の未解決欠陥数の推移）
                        </li>
                    </ul>
                    <p>
                        報告の目的は、マネジメントが<strong>情報を素早く理解する</strong>ことです。スナップショットは「今どこか」、トレンドは「どちらへ向かっているか」を示します。
                    </p>

                    <h4 id="目的別メトリクスの一覧">目的別メトリクスの一覧</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>目的</th>
                                    <th>メトリクス</th>
                                    <th>何が分かるか</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>プロダクトリスク</td>
                                    <td>すべてのテストが合格したリスクの割合</td>
                                    <td>軽減済みのリスク</td>
                                </tr>
                                <tr className="even">
                                    <td></td>
                                    <td>一部またはすべてのテストが不合格になったリスクの割合</td>
                                    <td>問題が見つかっているリスク</td>
                                </tr>
                                <tr className="odd">
                                    <td></td>
                                    <td>まだ全部テストできていないリスクの割合</td>
                                    <td>残っているリスク</td>
                                </tr>
                                <tr className="even">
                                    <td>欠陥</td>
                                    <td>欠陥数累計に対する解決済み欠陥数累計</td>
                                    <td>欠陥解決の進み具合</td>
                                </tr>
                                <tr className="odd">
                                    <td></td>
                                    <td>
                                        内訳（テストアイテム／発生源／テストリリース／混入・検出・修正件数／優先度・重要度／根本原因／ステータス）
                                    </td>
                                    <td>欠陥が多い領域、テストの効率性・有効性</td>
                                </tr>
                                <tr className="even">
                                    <td>テスト進捗</td>
                                    <td>
                                        テスト実行状況（計画・実装・実行・合格・不合格・ブロック・スキップの総数）
                                    </td>
                                    <td>実行の進み具合</td>
                                </tr>
                                <tr className="odd">
                                    <td></td>
                                    <td>テスト工数（リソース時間の計画対実績）</td>
                                    <td>労力の消化状況</td>
                                </tr>
                                <tr className="even">
                                    <td>カバレッジ</td>
                                    <td>
                                        要件カバレッジ／プロダクトリスクカバレッジ／コードカバレッジ
                                    </td>
                                    <td>どこまで確認できたか</td>
                                </tr>
                                <tr className="odd">
                                    <td>コスト・労力</td>
                                    <td>テストしていないコンポーネントの残存リスク</td>
                                    <td>未テスト部分に欠陥がある場合の影響と可能性</td>
                                </tr>
                                <tr className="even">
                                    <td></td>
                                    <td>テストコスト（計画対実績）</td>
                                    <td>予算の消化状況</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>さらに、異なるカテゴリを<strong>組み合わせる</strong>と、理解が深まります。</p>
                    <ul>
                        <li>未解決欠陥の傾向と、実行したテストの傾向の<strong>相関</strong></li>
                        <li>
                            要件で見つかった欠陥の数から、<strong>テストベースの品質</strong>を示す指標
                        </li>
                        <li>
                            テスト実行を続けても新たに識別される欠陥が減ってきたら、<strong>終了基準に照らして</strong>テスト終了を判断できる（メトリクスと合意済みの終了基準に基づくこと）
                        </li>
                    </ul>

                    <h4 id="手順意思決定に役立つテストレポートの作り方ステップバイステップ">
                        手順：意思決定に役立つテストレポートの作り方（ステップバイステップ）
                    </h4>
                    <div className="callout callout-note">
                        <div className="callout-body">
                            <p>
                                この手順は、シラバスの記述（目的別メトリクス、スナップショット／トレンド、コンテキストへの適合）を実務で使いやすいように筆者が整理したものです。
                            </p>
                        </div>
                    </div>
                    <div className="mermaid-container" id="container-mmd-4">
                        <div className="mermaid-target" id="mmd-4">
                            <Mermaid chart={DIAGRAM_4} />
                        </div>
                    </div>

                    <h4 id="具体例架空のデータリリース判定会議向けのテストレポート">
                        具体例（架空のデータ）：リリース判定会議向けのテストレポート
                    </h4>
                    <p>ある業務システムのシステムテスト終了時点で、次の数値が得られたとします。</p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>区分</th>
                                    <th>指標</th>
                                    <th>値</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>プロダクトリスク（全20件）</td>
                                    <td>すべて合格</td>
                                    <td>11件（55％）</td>
                                </tr>
                                <tr className="even">
                                    <td></td>
                                    <td>一部または全部が不合格</td>
                                    <td>6件（30％）</td>
                                </tr>
                                <tr className="odd">
                                    <td></td>
                                    <td>未完了</td>
                                    <td>3件（15％）</td>
                                </tr>
                                <tr className="even">
                                    <td>欠陥</td>
                                    <td>検出累計／解決累計</td>
                                    <td>118件／104件（解決率88％）</td>
                                </tr>
                                <tr className="odd">
                                    <td></td>
                                    <td>未解決の重要度「高」</td>
                                    <td>3件（すべて決済機能に関するもの）</td>
                                </tr>
                                <tr className="even">
                                    <td>進捗</td>
                                    <td>工数（計画400h に対し実績）</td>
                                    <td>430h（＋7.5％）</td>
                                </tr>
                                <tr className="odd">
                                    <td>カバレッジ</td>
                                    <td>要件カバレッジ</td>
                                    <td>92％</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p><strong>分析（ステップ4〜6）</strong></p>
                    <ol>
                        <li>
                            リスクの30％（6件）が不合格、15％（3件）が未完了。ただし<strong>この表は各リスクの重要度を示していない</strong>ため、「重大リスクは全件合格」という終了基準をそのまま適用することはできない。まず<strong>6件の不合格リスクと3件の未完了リスクのうち、どれが重大リスクに該当するかを判定する</strong>必要がある。判定の結果、重大リスクが1件でも含まれていれば終了基準を満たしていないと結論できる。
                        </li>
                        <li>
                            未解決の重要度「高」3件が決済機能に集中している →
                            事業影響が大きい領域で<strong>残存リスクが高い</strong>。
                        </li>
                        <li>
                            工数超過は7.5％。ただし<strong>この数値だけでは許容可否を判断できない</strong>。テストコントロールは実績を計画と比較して是正処置を取るものであり（2.1.2、日本語版 p.51〜52）、シラバスは「何％までなら許容」という数値基準を定めていない。判断するには、<strong>合意済みの許容差（変動幅）・予算の予備費（コンティンジェンシー）・ステークホルダーが承認した判断基準</strong>のいずれかが前提として必要であり、それが無い場合は「許容範囲内」と結論づけず、超過の事実と判断材料をステークホルダーに提示して判断を仰ぐ。
                        </li>
                    </ol>
                    <p>
                        <strong>報告の結論の例</strong>：「決済機能の重要度『高』3件が未解決のため、現時点でのリリースは推奨しません。（案A）1週間テストを延長し、修正と再テストを実施する。（案B）リスクを受容してリリースし、決済は暫定的に機能を無効化する。リスクの最終判断をお願いします。」
                    </p>
                    <p>
                        このように、<strong>数字を並べるだけでなくリスクに翻訳し、判断の選択肢まで示す</strong>のが K4 レベルの「意思決定に役立つレポート」です。
                    </p>
                    <p className="callout-source">
                        出典：<a
                            href="https://www.jstqb.jp/wordpress/wp-content/uploads/2026/06/JSTQB-Syllabus.Advanced_TM_VersionV3.0.J04.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            JSTQB日本語版シラバス（PDF）
                        </a>{' '}
                        2.1.3（p.52〜53）、1.3.4 適切なテストによる品質リスク軽減（p.31〜32：残存リスクレベルによる報告）
                    </p>
                    <div className="callout callout-practice">
                        <div className="callout-head">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">ベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <p>（シラバス根拠：2.1.3 ＋ 実務補足）</p>
                            <ul>
                                <li>
                                    <strong>リスクの言葉で報告する</strong>：テスト結果を、ステークホルダーが理解できる方法で「リスクの観点」から報告する（1.3.4 節）。
                                </li>
                                <li>
                                    <strong>メトリクスを1枚に詰め込みすぎない</strong>。読み手ごと（経営層・プロジェクトリーダー・開発者）に、判断に必要な3〜5指標へ絞る（実務補足）。
                                </li>
                                <li>
                                    <strong>スナップショットとトレンドを併記</strong>する。特に欠陥の未解決数は、傾向で見ないと収束しているのか悪化しているのか分からない。
                                </li>
                                <li>
                                    <strong>構造カバレッジ100％を品質の証明として扱わない</strong>（上位テストレベルの欠陥・リスクが残るため）。
                                </li>
                                <li>
                                    高いレベルのテストは、要件・ユースケース・ユーザーストーリー・プロダクトリスクを基準にカバレッジを測る。
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h4 id="21-節でよくある間違い試験の引っかけ">
                        2.1 節でよくある間違い（試験の引っかけ）
                    </h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>誤解</th>
                                    <th>正しい理解</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>
                                        テストモニタリングとテスト完了のメトリクスは同じでなければならない
                                    </td>
                                    <td>
                                        目的が違うため、<strong>異なってよい</strong>（進捗用と目的達成度用）
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>
                                        コンポーネントテストで構造カバレッジ100％なら、上位レベルのテストは不要
                                    </td>
                                    <td>上位レベルでも欠陥と品質リスクへの対処が必要</td>
                                </tr>
                                <tr className="odd">
                                    <td>実績値だけで進捗を判断できる</td>
                                    <td><strong>計画値との比較</strong>があって初めて判断できる</td>
                                </tr>
                                <tr className="even">
                                    <td>欠陥数が多い＝テストの質が高い</td>
                                    <td>内訳（発生源・重要度・根本原因）と合わせて解釈する</td>
                                </tr>
                                <tr className="odd">
                                    <td>プロセスメトリクスはテスト対象の品質を測る</td>
                                    <td>
                                        プロセスメトリクスは<strong>テストプロセスの能力と有効性</strong>を測る（品質はプロダクトメトリクス）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr />
                </main>
            </div>
        </div>
    );
}
