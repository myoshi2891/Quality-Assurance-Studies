import React from 'react';
import ChapterDiagram from './ChapterDiagram';

import CodeExample from './CodeExample';

export default function UnexpectedResults() {
    return <>
        <h2 id="5-713-テスト自動化が予期しない結果を出す箇所を特定するk2">
            {" 5. 7.1.3 テスト自動化が予期しない結果を出す箇所を特定する（K2） "}
        </h2>
        <h3 id="51-何を確認するか">
            {"5.1 何を確認するか"}
        </h3>
        <p>
            {" テストスクリプトが"}
            <strong>
                {"予期せず失敗したり、予期せず成功したり"}
            </strong>
            {"したときは、根本原因分析（root cause analysis）を行わなければなりません。シラバスは、次を確認するとしています。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"確認対象"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"テストログ"}
                        </td>
                        <td>
                            {"テストケース、SUT、TAF それぞれのログ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"性能データ"}
                        </td>
                        <td>
                            {"実行時の性能に異常がないか"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"セットアップとティアダウン"}
                        </td>
                        <td>
                            {"テストスクリプトの前後処理が正しく動いたか"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="52-予期しないは失敗だけではない">
            {"5.2 「予期しない」は失敗だけではない"}
        </h3>
        <p>
            {" 多くの初学者が見落とす点として、"}
            <strong>
                {"予期せず成功するテスト"}
            </strong>
            {"も調査対象です。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"現象"}
                        </th>
                        <th>
                            {"例"}
                        </th>
                        <th>
                            {"危険性"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"予期しない失敗"}
                        </td>
                        <td>
                            {"SUT は正常なのにテストが失敗する"}
                        </td>
                        <td>
                            {"無駄な調査、信頼の低下"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"予期しない成功"}
                        </td>
                        <td>
                            {"SUT に不具合があるのにテストが成功する"}
                        </td>
                        <td>
                            {"不具合の見逃し"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            {" シラバスは、"}
            <strong>
                {"アサーションがすべて入っているかを確認する"}
            </strong>
            {"こと、そして"}
            <strong>
                {"アサーションが欠けていると結論が出ない（inconclusive）テスト結果になりうる"}
            </strong>
            {"ことを述べています。 "}
        </p>
        <h4 id="コード例補足アサーションが欠けたテスト">
            {" コード例（補足）：アサーションが欠けたテスト "}
        </h4>
        <CodeExample index={5} />
        <h3 id="53-不具合が潜みうる場所">
            {"5.3 不具合が潜みうる場所"}
        </h3>
        <p>
            {"シラバスは、不具合の場所として次の5つを挙げています。"}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"不具合の場所"}
                        </th>
                        <th>
                            {"例（補足）"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"テストケース"}
                        </td>
                        <td>
                            {"期待値の誤り、アサーション不足、データ依存"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"SUT"}
                        </td>
                        <td>
                            {"本物の欠陥"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAF"}
                        </td>
                        <td>
                            {"ヘルパー関数のバグ、ドライバとの不整合"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ハードウェア"}
                        </td>
                        <td>
                            {"実機の電源・バッテリー、リソース不足"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"ネットワーク"}
                        </td>
                        <td>
                            {"遅延、切断、ファイアウォール"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="54-調査の進め方">
            {"5.4 調査の進め方"}
        </h3>
        <div className="mermaid-container">
            <ChapterDiagram id="mermaid-diagram-9" />
        </div>
        <p>
            {"シラバスに基づく要点は次のとおりです。"}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"手段"}
                        </th>
                        <th>
                            {"説明"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"いくつかのテストを単独で実行する"}
                        </td>
                        <td>
                            {"他のテストの影響を排除して切り分ける"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"間欠的な失敗は分析が難しい"}
                        </td>
                        <td>
                            {"再現条件が不明なため、特に注意が必要"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"システムリソースを監視する"}
                        </td>
                        <td>
                            {"根本原因の手がかりになりうる"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"テストケース・SUT・TAF のログを分析する"}
                        </td>
                        <td>
                            {"欠陥の根本原因の特定を助ける"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"デバッグ"}
                        </td>
                        <td>
                            {"必要になる場合がある"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"他の役割の支援"}
                        </td>
                        <td>
                            {" テスト分析者、ビジネスアナリスト、開発者、システムエンジニアの協力が必要になりうる "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 id="第6章の分析手順との関係">
            {"第6章の分析手順との関係"}
        </h4>
        <p>
            {" 第6章の 6.1.2 は、失敗を分析する5ステップ（過去の失敗の確認、テストケースの特定、失敗したステップの特定、SUT の状態の確認、欠陥の記録）を示していました。第7章の 7.1.3 は、その考え方を「TAS の検証」という視点で広げたものです。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"場面"}
                        </th>
                        <th>
                            {"第6章（結果の分析）"}
                        </th>
                        <th>
                            {"第7章（TAS の検証）"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"主な問い"}
                        </td>
                        <td>
                            {"この失敗は SUT の欠陥か、TAS の欠陥か"}
                        </td>
                        <td>
                            {"予期しない合否の原因はどこにあるか"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"見る対象"}
                        </td>
                        <td>
                            {"TAS のデータが主、SUT のデータが副"}
                        </td>
                        <td>
                            {"テスト、SUT、TAF、ハードウェア、ネットワーク"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="callout callout-practice">
            <div className="callout-header">
                <span className="callout-icon">
                    {"💡"}
                </span>
                <span className="callout-label">
                    {"ベストプラクティス（予期しない結果の調査）"}
                </span>
            </div>
            <div className="callout-body">
                <ul>
                    <li>
                        {"失敗と同様に「予期しない成功」も調査対象にする"}
                    </li>
                    <li>
                        {" 失敗時にはログ、スクリーンショット、スタックトレースなど、後の分析に必要な情報を自動で保存する "}
                    </li>
                    <li>
                        {" 間欠的な失敗は、テストログ、SUT のログ、TAF のログを時刻で突き合わせる "}
                    </li>
                    <li>
                        {" 調査結果は、テストの修正、TAF の修正、SUT の欠陥報告、環境の修正のどれにあたるか区別して記録する "}
                    </li>
                </ul>
            </div>
        </div>
        <hr />
    </>;
}
