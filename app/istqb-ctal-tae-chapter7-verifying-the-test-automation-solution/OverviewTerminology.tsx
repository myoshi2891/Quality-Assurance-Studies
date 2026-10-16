import React from 'react';
import ChapterDiagram from './ChapterDiagram';


export default function OverviewTerminology() {
    return <>
        <h2 id="1-この章の全体像">
            {"1. この章の全体像"}
        </h2>
        <h3 id="11-この章で学ぶこと">
            {"1.1 この章で学ぶこと"}
        </h3>
        <p>
            {" 第7章のテーマは「"}
            <strong>
                {"自動テストの仕組みそのもの（TAS）が正しく動いていることを、どう確かめるか"}
            </strong>
            {"」です。 "}
        </p>
        <p>
            {" テストは SUT（テスト対象システム）の品質を測る道具です。ところが道具自体が壊れていると、次のような事態になります。 "}
        </p>
        <ul>
            <li>
                {"SUT は正常なのに、テストが失敗する（誤った失敗）"}
            </li>
            <li>
                {"SUT に不具合があるのに、テストが成功する（見逃し）"}
            </li>
            <li>
                {"実行のたびに結果が変わり、誰もテスト結果を信用しなくなる"}
            </li>
        </ul>
        <p>
            {"つまり「テストを信頼できる状態に保つための検証」がこの章の中心です。"}
        </p>
        <h3 id="12-学習目標learning-objectives">
            {"1.2 学習目標（Learning Objectives）"}
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
                            {"TAE-7.1.1"}
                        </td>
                        <td>
                            {"K3（適用）"}
                        </td>
                        <td>
                            {" テスト自動化環境（テストツールのセットアップを含む）を検証する計画を立てる "}
                        </td>
                        <td>
                            {"3"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAE-7.1.2"}
                        </td>
                        <td>
                            {"K2（理解）"}
                        </td>
                        <td>
                            {"自動テストスクリプト／スイートの正しい振る舞いを説明する"}
                        </td>
                        <td>
                            {"4"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAE-7.1.3"}
                        </td>
                        <td>
                            {"K2（理解）"}
                        </td>
                        <td>
                            {"テスト自動化が予期しない結果を出す箇所を特定する"}
                        </td>
                        <td>
                            {"5"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAE-7.1.4"}
                        </td>
                        <td>
                            {"K2（理解）"}
                        </td>
                        <td>
                            {"静的解析がテスト自動化コードの品質にどう役立つかを説明する"}
                        </td>
                        <td>
                            {"6"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="callout callout-note">
            <div className="callout-header">
                <span className="callout-icon">
                    {"ℹ️"}
                </span>
                <span className="callout-label">
                    {"章のキーワード"}
                </span>
            </div>
            <div className="callout-body">
                <p>
                    <strong>
                        {"static analysis（静的解析）"}
                    </strong>
                </p>
            </div>
        </div>
        <h3 id="13-全体マップ">
            {"1.3 全体マップ"}
        </h3>
        <div className="mermaid-container">
            <ChapterDiagram id="mermaid-diagram-0" />
        </div>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"観点"}
                        </th>
                        <th>
                            {"対応する LO"}
                        </th>
                        <th>
                            {"検証のタイミング"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"環境とツール"}
                        </td>
                        <td>
                            {"7.1.1"}
                        </td>
                        <td>
                            {"自動テストを始める前"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"テストスイートの中身"}
                        </td>
                        <td>
                            {"7.1.2"}
                        </td>
                        <td>
                            {"スイートを実行可能にする前・新機能を使う初回"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"結果の妥当性"}
                        </td>
                        <td>
                            {"7.1.3"}
                        </td>
                        <td>
                            {"実行して、想定外の合否が出たとき"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"コードの品質"}
                        </td>
                        <td>
                            {"7.1.4"}
                        </td>
                        <td>
                            {"コミット・ビルドなど開発の早い段階"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr />
        <h2 id="2-前提知識と用語の整理">
            {"2. 前提知識と用語の整理"}
        </h2>
        <p>
            {" 第7章は、第3章（アーキテクチャ）と第6章（レポートとメトリクス）の知識を前提にします。最低限の用語を押さえましょう。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"用語"}
                        </th>
                        <th>
                            {"意味"}
                        </th>
                        <th>
                            {"第7章での関わり"}
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
                        <td>
                            {"検証対象ではなく「テストされる側」"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAS（Test Automation Solution）"}
                        </td>
                        <td>
                            {" 自動テストの解決策全体（ツール、フレームワーク、環境、アダプタなど） "}
                        </td>
                        <td>
                            {"この章で「検証する対象」"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAF（Test Automation Framework）"}
                        </td>
                        <td>
                            {" TAS の土台。テストハーネス、テストライブラリ、スクリプト、スイートを含む "}
                        </td>
                        <td>
                            {"コンポーネントテストの対象"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAA（Test Automation Architecture）"}
                        </td>
                        <td>
                            {"TAS の技術設計"}
                        </td>
                        <td>
                            {"環境の構成要素の前提"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"テストウェア（testware）"}
                        </td>
                        <td>
                            {" テスト自動化で使う成果物一式（スクリプト、データ、設定など） "}
                        </td>
                        <td>
                            {"完全性・バージョンの確認対象"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"テストハーネス"}
                        </td>
                        <td>
                            {"テストを実行する仕組み（テストランナー）"}
                        </td>
                        <td>
                            {"セットアップ検証の対象"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAE（Test Automation Engineer）"}
                        </td>
                        <td>
                            {"テスト自動化エンジニア"}
                        </td>
                        <td>
                            {"検証を計画・実施する主役"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="21-sut-のテストとtas-の検証の違い">
            {" 2.1 「SUT のテスト」と「TAS の検証」の違い "}
        </h3>
        <div className="mermaid-container">
            <ChapterDiagram id="mermaid-diagram-1" />
        </div>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"比較項目"}
                        </th>
                        <th>
                            {"SUT のテスト"}
                        </th>
                        <th>
                            {"TAS の検証（第7章）"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"目的"}
                        </td>
                        <td>
                            {"SUT の不具合を見つける"}
                        </td>
                        <td>
                            {"自動テストが信頼できることを確認する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"対象"}
                        </td>
                        <td>
                            {"SUT の機能・非機能"}
                        </td>
                        <td>
                            {"環境、ツール、TAF、スクリプト、スイート"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"失敗の意味"}
                        </td>
                        <td>
                            {"SUT の欠陥の可能性"}
                        </td>
                        <td>
                            {"TAS 自体の欠陥の可能性もある"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="callout callout-note">
            <div className="callout-header">
                <span className="callout-icon">
                    {"ℹ️"}
                </span>
                <span className="callout-label">
                    {"補足"}
                </span>
            </div>
            <div className="callout-body">
                <p>
                    {" テスト実行の状態には passed、failed に加えて "}
                    <strong>
                        {"TAS failure（欠陥が SUT ではない失敗）"}
                    </strong>
                    {" があり、組織として定義を統一する必要があります。第7章はこの「TAS failure をどう減らすか」を扱う章と捉えると理解しやすくなります。 "}
                </p>
            </div>
        </div>
        <hr />
    </>;
}
