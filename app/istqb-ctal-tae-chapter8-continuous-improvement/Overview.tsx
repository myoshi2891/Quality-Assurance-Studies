import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function Overview() {
    return <>
        <h2 id="1-この章の全体像">
            {"1. この章の全体像"}
        </h2>
        <h3 id="11-一言でいうと">
            {"1.1 一言でいうと"}
        </h3>
        <p>
            {" 「作って終わり」ではなく、動かしながら集めたデータをもとに、テスト自動化の仕組み（TAS）を育て続けるための章です。 "}
        </p>
        <h3 id="12-学習目標learning-objectives">
            {"1.2 学習目標（Learning Objectives）"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="12-学習目標learning-objectives">
                <thead>
                    <tr className="header">
                        <th>
                            {"LO 番号"}
                        </th>
                        <th>
                            {"認知レベル"}
                        </th>
                        <th>
                            {"内容（要約）"}
                        </th>
                        <th>
                            {"本ガイドの節"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"TAE-8.1.1"}
                        </td>
                        <td>
                            {"K3（適用）"}
                        </td>
                        <td>
                            {"データ収集・分析を通じてテストケース改善の機会を見つける"}
                        </td>
                        <td>
                            {"2"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAE-8.1.2"}
                        </td>
                        <td>
                            {"K4（分析）"}
                        </td>
                        <td>
                            {"導入済み TAS の技術面を分析し、改善を推奨する"}
                        </td>
                        <td>
                            {"3"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAE-8.1.3"}
                        </td>
                        <td>
                            {"K3（適用）"}
                        </td>
                        <td>
                            {"SUT の更新に合わせてテストウェアを再構成する"}
                        </td>
                        <td>
                            {"4"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAE-8.1.4"}
                        </td>
                        <td>
                            {"K2（理解）"}
                        </td>
                        <td>
                            {"テスト以外の活動でのテスト自動化ツール活用機会をまとめる"}
                        </td>
                        <td>
                            {"5"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <blockquote className="callout-note">
            <div className="callout-icon">
                {"💡"}
            </div>
            <p>
                {" K レベルの読み方：K2 = 理解 / K3 = 適用（手順を当てはめる）/ K4 = 分析（状況を分解して判断・提案する）。8.1.2 は K4 なので「なぜその改善が必要か」「どの改善を優先するか」まで問われます。 "}
            </p>
        </blockquote>
        <h3 id="13-試験で必ず覚えるキーワードこの章">
            {" 1.3 試験で必ず覚えるキーワード（この章） "}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="13-試験で必ず覚えるキーワードこの章">
                <thead>
                    <tr className="header">
                        <th>
                            {"キーワード"}
                        </th>
                        <th>
                            {"ひとことで"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"test histogram（テストヒストグラム）"}
                        </td>
                        <td>
                            {" テストデータの傾向を視覚化したレポート。壊れやすい（fragile）テストの発見に使う "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"schema validation（スキーマ検証）"}
                        </td>
                        <td>
                            {" API レスポンスや DB のデータ型・必須項目などを、スキーマ定義に基づいてまとめて検証する方法 "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="14-略語の早見表">
            {"1.4 略語の早見表"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="14-略語の早見表">
                <thead>
                    <tr className="header">
                        <th>
                            {"略語"}
                        </th>
                        <th>
                            {"正式名称"}
                        </th>
                        <th>
                            {"意味"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"SUT"}
                        </td>
                        <td>
                            {"System Under Test"}
                        </td>
                        <td>
                            {"テスト対象システム"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAS"}
                        </td>
                        <td>
                            {"Test Automation Solution"}
                        </td>
                        <td>
                            {"テスト自動化ソリューション全体"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAF"}
                        </td>
                        <td>
                            {"Test Automation Framework"}
                        </td>
                        <td>
                            {"テスト自動化フレームワーク（TAS の土台）"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAA"}
                        </td>
                        <td>
                            {"Test Automation Architecture"}
                        </td>
                        <td>
                            {"テスト自動化アーキテクチャ"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAE"}
                        </td>
                        <td>
                            {"Test Automation Engineer"}
                        </td>
                        <td>
                            {"テスト自動化エンジニア"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="15-第8章の構造">
            {"1.5 第8章の構造"}
        </h3>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-1" />
        </div>
        <h3 id="16-改善サイクルのイメージ">
            {"1.6 改善サイクルのイメージ"}
        </h3>
        <p>
            {"改善は一度きりではなく、測る → 分析する → 直す → 確かめるの繰り返しです。"}
        </p>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-2" />
        </div>
    </>;
}
