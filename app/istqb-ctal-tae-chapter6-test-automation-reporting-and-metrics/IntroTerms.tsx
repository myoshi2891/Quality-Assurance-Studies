import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function IntroTerms() {
    return <>
        <h2 id="0-この章の全体像">
            {"0. この章の全体像"}
        </h2>
        <p>
            {" 第6章は、"}
            <strong>
                {"自動テストが「動いた」だけで終わらせず、結果を集め、原因を読み解き、関係者に伝える"}
            </strong>
            {"ところまでを扱います。 "}
        </p>
        <h3 id="01-学習目標learning-objectives">
            {"0.1 学習目標（Learning Objectives）"}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"LO 番号"}
                        </th>
                        <th>
                            {"認知レベル"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                        <th>
                            {"本ガイドの節"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"TAE-6.1.1"}
                        </td>
                        <td>
                            {"K3（適用）"}
                        </td>
                        <td>
                            {"TAS と SUT からのデータ収集方法を適用する"}
                        </td>
                        <td>
                            {"第2章"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAE-6.1.2"}
                        </td>
                        <td>
                            {"K4（分析）"}
                        </td>
                        <td>
                            {"TAS と SUT のデータを分析して結果をより良く理解する"}
                        </td>
                        <td>
                            {"第3章"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAE-6.1.3"}
                        </td>
                        <td>
                            {"K2（理解）"}
                        </td>
                        <td>
                            {"テスト進捗レポートがどう作られ公開されるかを説明する"}
                        </td>
                        <td>
                            {"第4章"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            <strong>
                {"キーワード（暗記対象）"}
            </strong>
            {"：measurement（測定）、metric（メトリクス）、test log（テストログ）、test progress report（テスト進捗レポート）、test step（テストステップ） "}
        </p>
        <div className="callout-practice">
            <div className="callout-head">
                <span className="callout-icon">
                    {"💡"}
                </span>
                <span className="callout-title">
                    {"学習のヒント"}
                </span>
            </div>
            <div className="callout-body">
                <p>
                    {" シラバスでは「キーワードは学習目標に明記されていなくても覚えておくこと」とされています。上の5語は必ず自分の言葉で説明できるようにしましょう。 "}
                </p>
            </div>
        </div>
        <h3 id="02-章の流れ3ステップ">
            {"0.2 章の流れ（3ステップ）"}
        </h3>
        <ChapterDiagram id="mermaid-diagram-1" />
        <h3 id="03-データの流れ全体マップ">
            {"0.3 データの流れ（全体マップ）"}
        </h3>
        <ChapterDiagram id="mermaid-diagram-2" />
        <hr />
        <h2 id="1-最初に押さえる用語">
            {"1. 最初に押さえる用語"}
        </h2>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"用語"}
                        </th>
                        <th>
                            {"意味（やさしい言い換え）"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"SUT（System Under Test）"}
                        </td>
                        <td>
                            {"テスト対象のシステム"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAS（Test Automation Solution）"}
                        </td>
                        <td>
                            {" 自動テストの仕組み全体（ツール、ライブラリ、スクリプト、環境など） "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAF（Test Automation Framework）"}
                        </td>
                        <td>
                            {" TAS の土台。テストハーネス（テストランナー）、ライブラリ、スクリプト、スイートを含む "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAE（Test Automation Engineer）"}
                        </td>
                        <td>
                            {"自動テストを設計・実装・保守する人"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"テストログ（test log）"}
                        </td>
                        <td>
                            {"テスト実行中の出来事の記録。欠陥分析の主要な情報源"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"測定（measurement）／メトリクス（metric）"}
                        </td>
                        <td>
                            {"数値で捉えること／その指標（合格率、実行時間など）"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"テスト進捗レポート"}
                        </td>
                        <td>
                            {"実行後に作る簡潔な要約。結果・SUT 情報・環境情報を含む"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"テストステップ（test step）"}
                        </td>
                        <td>
                            {"テストケースを構成する個々の操作と確認"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"アサーション（assertion）"}
                        </td>
                        <td>
                            {"実際の結果と期待結果を自動で比較する仕組み"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"相関 ID／トレース ID"}
                        </td>
                        <td>
                            {" 1つのリクエストを複数システムにまたがって追跡するための一意の ID "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
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
                    {" SUT や TAF など第1〜5章で登場した用語は、本章でも前提知識として使われます。 "}
                </p>
            </div>
        </div>
        <hr />
    </>;
}
