import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_1 } from './diagrams';
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
                </main>
            </div>
        </div>
    );
}
