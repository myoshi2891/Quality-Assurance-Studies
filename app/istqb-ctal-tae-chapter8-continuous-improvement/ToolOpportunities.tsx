import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function ToolOpportunities() {
    return <>
        <h2 id="5-814-テスト自動化ツールの活用機会k2">
            {" 5. 8.1.4 テスト自動化ツールの活用機会（K2） "}
        </h2>
        <h3 id="51-考え方">
            {"5.1 考え方"}
        </h3>
        <p>
            {" テスト自動化ツールは「テストそのものの実行」以外の、テスト関連の付随活動も助けられます。 "}
        </p>
        <h3 id="52-環境のセットアップと制御environment-setup-and-control">
            {" 5.2 環境のセットアップと制御（Environment setup and control） "}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"観点"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"テストデータの作成"}
                        </td>
                        <td>
                            {" テストデータを作るスクリプトを、setup メソッドに組み込み、新しいテスト環境に多様なテストデータを作成できる "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"複数プロフィールのユーザー作成"}
                        </td>
                        <td>
                            {" 異なるデータ入力に基づく複数プロフィールのユーザーが必要なとき、Web サービスのエンドポイントを呼び出してユーザーを登録する自動テストスクリプトを使える "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"インフラのセットアップ制御"}
                        </td>
                        <td>
                            {" テストスクリプトでテストインフラのセットアップを制御し、後片付け（クリーンアップ）にも利用できる "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"効果"}
                        </td>
                        <td>
                            {" 時間を節約し、新しいテスト環境ごとに適切なユーザーが確実に存在するようにできる。例：テストログなどのテストウェアをテスト環境から自動で削除し、環境の整理（ハウスキーピング）と利用を効率化する "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-15" />
        </div>
        <h3 id="53-データエイジングdata-aging">
            {"5.3 データエイジング（Data aging）"}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"観点"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"何をするか"}
                        </td>
                        <td>
                            {"テスト自動化を使って、テスト環境内のテストデータを操作する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"シラバスの例"}
                        </td>
                        <td>
                            {" データベースの日付フィールドを確認・制御し、年単位で見て最新の状態に保つ "}
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
                {" 補足（説明用の例）：「有効期限が今日から 1 年以内の会員」を前提にしたテストデータは、時間の経過とともに期限切れになり、テストが意図せず失敗するようになります。日付を定期的に更新するスクリプトを用意しておくと、テストデータを「古びない」状態に保てます。 "}
            </p>
        </blockquote>
        <h3 id="54-スクリーンショットと動画の生成screenshot-and-video-generation">
            {" 5.4 スクリーンショットと動画の生成（Screenshot and video generation） "}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"観点"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"ツールの機能"}
                        </td>
                        <td>
                            {" 最近の UI テスト自動化ツールの多くは、特定の条件でスクリーンショットや動画を作成・保存する機能を標準で備えている "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"テスト以外での活用"}
                        </td>
                        <td>
                            {" チームはこれらのツールを使い、ソフトウェアのリリース文書やマーケティング向けに、実際の利用画面のスクリーンショットや動画を作成してビジネス側を支援できる "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="55-ベストプラクティス">
            {"5.5 ベストプラクティス"}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"#"}
                        </th>
                        <th>
                            {"ベストプラクティス"}
                        </th>
                        <th>
                            {"理由"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"1"}
                        </td>
                        <td>
                            {"環境準備は手作業ではなくスクリプト化する"}
                        </td>
                        <td>
                            {"再現性が上がり、準備時間が減る"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {"準備と後片付けをセットで自動化する"}
                        </td>
                        <td>
                            {"前回のデータが次回に影響するのを防ぐ"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {"環境準備のスクリプトもバージョン管理する"}
                        </td>
                        <td>
                            {"第5章のテストウェアの構成管理の考え方と同じ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {"接続や権限は事前にチェックする"}
                        </td>
                        <td>
                            {"第7章：TAS 導入後の前提条件確認の考え方と一致"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"5"}
                        </td>
                        <td>
                            {" 日付に依存するテストデータはエイジング用スクリプトで定期的に更新する "}
                        </td>
                        <td>
                            {"時間の経過による意図しない失敗を防ぐ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"6"}
                        </td>
                        <td>
                            {" リリース文書用の画面は、既存の UI 自動テストのスクリーンショット・動画機能で作る "}
                        </td>
                        <td>
                            {" 手作業のキャプチャより再現性が高く、画面変更にも追従しやすい "}
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
                {" 補足：8.1.4 は「実際のテスト以外の、特定されないテスト活動」の例として、環境のセットアップと制御、データエイジング、スクリーンショットと動画の生成の3つを挙げています（公式シラバス PDF の 52〜53 ページ）。 "}
            </p>
        </blockquote>
    </>;
}
