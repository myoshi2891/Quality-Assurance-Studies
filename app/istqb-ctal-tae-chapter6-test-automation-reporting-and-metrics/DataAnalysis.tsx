import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function DataAnalysis() {
    return <>
        <h2 id="3-612-データ分析による結果理解k4">
            {" 3. 6.1.2 データ分析による結果理解（K4） "}
        </h2>
        <p>
            <strong>
                {"この節のゴール"}
            </strong>
            {"：失敗の原因が SUT・TAS・環境のどこにあるかを、ログから筋道立てて切り分けられること。 "}
        </p>
        <h3 id="31-一次データと二次データ">
            {"3.1 一次データと二次データ"}
        </h3>
        <blockquote>
            <p>
                <strong>
                    {"分析では、TAS から集めたデータが一次（primary）、SUT から集めたデータが二次（secondary）です。"}
                </strong>
            </p>
        </blockquote>
        <ChapterDiagram id="mermaid-diagram-7" />
        <h3 id="32-分析で見るもの">
            {"3.2 分析で見るもの"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="32-分析で見るもの">
                <thead>
                    <tr className="header">
                        <th>
                            {"観点"}
                        </th>
                        <th>
                            {"具体例"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"テスト環境データ"}
                        </td>
                        <td>
                            {" クラスタやリソース（CPU、RAM）。クラウド上での自動テストの適正な規模の判断に使う。単一ブラウザか複数ブラウザ（クロスブラウザ）かも含む "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"過去の実行との比較"}
                        </td>
                        <td>
                            {"結果の推移、同じ失敗が過去にもあったか"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"Web ログの活用"}
                        </td>
                        <td>
                            {"ソフトウェアの利用状況の監視方法を決める"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="33-テスト実行失敗の分析手順5ステップ">
            {" 3.3 テスト実行失敗の分析手順（5ステップ） "}
        </h3>
        <ChapterDiagram id="mermaid-diagram-8" />
        <div className="table-scroll">
            <table>
                <caption className="table-caption">
                    {"テスト実行失敗の分析手順（5ステップ）"}
                </caption>
                <thead>
                    <tr className="header">
                        <th>
                            {"手順"}
                        </th>
                        <th>
                            {"やること"}
                        </th>
                        <th>
                            {"使う情報"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"1"}
                        </td>
                        <td>
                            {" 過去の実行で同じ失敗がなかったか確認する。既知の欠陥（SUT または TAS）の可能性がある。TAS に過去のテスト結果を記録させておくと分析しやすい "}
                        </td>
                        <td>
                            {"履歴ログ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {" 既知でなければ、失敗したテストケースと確認内容を特定する。テスト管理システム上の ID がログに出ていれば探しやすい "}
                        </td>
                        <td>
                            {"テスト ID"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {"テストケースのどのテストステップで失敗したかを特定する"}
                        </td>
                        <td>
                            {"TAS ログ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {"ログの情報から SUT の状態が期待結果と合うかを分析する"}
                        </td>
                        <td>
                            {"スクリーンショット、API ログ、ネットワークログなど"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"5"}
                        </td>
                        <td>
                            {" SUT の状態が期待と異なれば、欠陥管理システムに起票する。欠陥だと言える根拠となるログを添える "}
                        </td>
                        <td>
                            {"欠陥情報とログ"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="34-失敗したのに原因が見当たらないケース">
            {" 3.4 「失敗したのに原因が見当たらない」ケース "}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="34-失敗したのに原因が見当たらないケース">
                <thead>
                    <tr className="header">
                        <th>
                            {"ケース"}
                        </th>
                        <th>
                            {"起きていること"}
                        </th>
                        <th>
                            {"対処の方向性"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"実際の結果と期待結果が一致しているのに失敗"}
                        </td>
                        <td>
                            {" 多くの場合、"}
                            <strong>
                                {"TAS 側に欠陥"}
                            </strong>
                            {"がある。または目に見えない不一致が存在する "}
                        </td>
                        <td>
                            {"TAS（テストコードや比較ロジック）を修正する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"テスト環境が使えない、または一部だけ使えない"}
                        </td>
                        <td>
                            {" 全テストが同じ理由で失敗する。一部が落ちているだけなら、本物の失敗に見える失敗も出る "}
                        </td>
                        <td>
                            {" SUT ログを分析し、テスト実行時刻に環境の停止がなかったか確認する "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="35-相関-idトレース-idによる追跡">
            {"3.5 相関 ID（トレース ID）による追跡"}
        </h3>
        <p>
            {" SUT がユーザー操作（UI セッションや API 呼び出し）の"}
            <strong>
                {"監査ログ"}
            </strong>
            {"を出している場合、結果の分析が容易になります。 "}
        </p>
        <div className="table-scroll">
            <table>
                <caption className="table-caption">
                    {"相関 ID による追跡の項目と内容"}
                </caption>
                <thead>
                    <tr className="header">
                        <th>
                            {"項目"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"仕組み"}
                        </td>
                        <td>
                            {" 操作に一意の ID を付け、その後の呼び出しや連携でも同じ ID を使う "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"呼び名"}
                        </td>
                        <td>
                            {"相関 ID（correlation ID）またはトレース ID（trace ID）"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"効果"}
                        </td>
                        <td>
                            {"ID を知っていれば、システムの挙動を追跡してさかのぼれる"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAS でやること"}
                        </td>
                        <td>
                            {"この ID を TAS もログに残し、テスト結果の分析に使う"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="36-原因の切り分け整理表実務上の整理">
            {" 3.6 原因の切り分け整理表（実務上の整理） "}
        </h3>
        <div className="callout-note">
            <div className="callout-head">
                <span className="callout-icon">
                    {"ℹ️"}
                </span>
                <span className="callout-title">
                    {"補足"}
                </span>
            </div>
            <div className="callout-body">
                <p>
                    {" 以下はシラバスの記述を初学者向けに整理した"}
                    <strong>
                        {"実務上のまとめ"}
                    </strong>
                    {"です。分類名そのものは試験の暗記対象ではありません。 "}
                </p>
            </div>
        </div>
        <div className="table-scroll">
            <table>
                <caption className="table-caption">
                    {"原因の切り分け整理表"}
                </caption>
                <thead>
                    <tr className="header">
                        <th>
                            {"原因の所在"}
                        </th>
                        <th>
                            {"典型的な兆候"}
                        </th>
                        <th>
                            {"確認するデータ"}
                        </th>
                        <th>
                            {"次のアクション"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"SUT の欠陥"}
                        </td>
                        <td>
                            {"SUT の状態が期待と異なる"}
                        </td>
                        <td>
                            {"SUT ログ、スクリーンショット、API ログ"}
                        </td>
                        <td>
                            {"欠陥として起票"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAS の欠陥"}
                        </td>
                        <td>
                            {" 実際の結果と期待結果が一致しているのに失敗、または壊れたロケーター "}
                        </td>
                        <td>
                            {"TAF ログ、比較ロジック"}
                        </td>
                        <td>
                            {"テストコード・ライブラリを修正"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"テスト環境"}
                        </td>
                        <td>
                            {"大量のテストが同時に同じ理由で失敗"}
                        </td>
                        <td>
                            {"SUT ログ、監視データ、環境のリソースデータ"}
                        </td>
                        <td>
                            {"環境を復旧し再実行"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"既知の問題"}
                        </td>
                        <td>
                            {"過去の実行でも同じ失敗"}
                        </td>
                        <td>
                            {"テスト結果の履歴"}
                        </td>
                        <td>
                            {"既存の欠陥や課題に紐づける"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="37-この節のベストプラクティス">
            {"3.7 この節のベストプラクティス"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="37-この節のベストプラクティス">
                <thead>
                    <tr className="header">
                        <th>
                            {"対象"}
                        </th>
                        <th>
                            {"ベストプラクティス"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"分析の順序"}
                        </td>
                        <td>
                            {" TAS のデータ（一次）から始め、SUT のデータ（二次）で裏付ける "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"履歴"}
                        </td>
                        <td>
                            {"TAS にテスト結果の履歴を記録させ、既知の失敗を素早く判別"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"テスト ID"}
                        </td>
                        <td>
                            {"テスト管理システムの ID をログに出力する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"欠陥起票"}
                        </td>
                        <td>
                            {"必要な欠陥情報と、欠陥だと示すログをそろえて起票"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"環境停止の疑い"}
                        </td>
                        <td>
                            {"大量失敗のときは、まず環境停止を疑い SUT ログで確認"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"相関 ID"}
                        </td>
                        <td>
                            {"TAS が相関 ID を記録し、SUT の監査ログと突き合わせ"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"リソース分析"}
                        </td>
                        <td>
                            {" CPU・RAM などの利用状況から、自動テストの規模（クラウド上のサイジング）を決める "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr />
    </>;
}
