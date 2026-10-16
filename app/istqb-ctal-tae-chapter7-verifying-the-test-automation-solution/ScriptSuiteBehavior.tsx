import React from 'react';
import ChapterDiagram from './ChapterDiagram';

import CodeExample from './CodeExample';

export default function ScriptSuiteBehavior() {
    return <>
        <h2 id="4-712-自動テストスクリプトスイートの正しい振る舞いを説明するk2">
            {" 4. 7.1.2 自動テストスクリプト／スイートの正しい振る舞いを説明する（K2） "}
        </h2>
        <h3 id="41-何を確認するか">
            {"4.1 何を確認するか"}
        </h3>
        <p>
            {" 自動テストスイートは、"}
            <strong>
                {"網羅性、一貫性、正しい振る舞い"}
            </strong>
            {"についてテストされる必要があります。シラバスは、スイートがいつでも使える状態にあること、または使用に適していることを判断するために、次の検証を挙げています。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"#"}
                        </th>
                        <th>
                            {"検証項目"}
                        </th>
                        <th>
                            {"要点"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"1"}
                        </td>
                        <td>
                            {"テストスイートの構成を確認する"}
                        </td>
                        <td>
                            {"網羅性と、TAF・SUT の正しいバージョン"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {"TAF の新機能に焦点を当てた新しいテストを検証する"}
                        </td>
                        <td>
                            {"初回は近くで監視する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {"テストの再現性を考慮する"}
                        </td>
                        <td>
                            {"何度実行しても結果が同じか"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {"自動テストツールの侵入性を考慮する"}
                        </td>
                        <td>
                            {"ツールが SUT に与える影響"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="42-項目1テストスイートの構成を確認する">
            {" 4.2 項目1：テストスイートの構成を確認する "}
        </h3>
        <p>
            {" シラバスは、"}
            <strong>
                {"完全性"}
            </strong>
            {"（例：すべてのテストケースに期待結果があり、テストデータが存在する）と、"}
            <strong>
                {"TAF と SUT の正しいバージョン"}
            </strong>
            {"を確認するとしています。 "}
        </p>
        <div className="mermaid-container">
            <ChapterDiagram id="mermaid-diagram-6" />
        </div>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"確認対象"}
                        </th>
                        <th>
                            {"具体例（補足）"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"期待結果"}
                        </td>
                        <td>
                            {"アサーション（検証コマンド）が各テストに入っている"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"テストデータ"}
                        </td>
                        <td>
                            {"参照するファイル、DB のレコード、テストユーザーが存在する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"バージョン"}
                        </td>
                        <td>
                            {" ブランチやタグで、テストウェアと SUT のバージョンが対応している "}
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
                    {" 第5章で学んだように、テストウェアを SUT と同じバージョンでリリースし、タグやブランチで管理すると、SUT のバージョンと検証できるテストの対応が明確になります。 "}
                </p>
            </div>
        </div>
        <h3 id="43-項目2taf-の新機能に焦点を当てた新しいテストの検証">
            {" 4.3 項目2：TAF の新機能に焦点を当てた新しいテストの検証 "}
        </h3>
        <p>
            {" TAF の新機能を"}
            <strong>
                {"初めてテストケースで使うとき"}
            </strong>
            {"は、その機能が正しく動いているかを確認し、"}
            <strong>
                {"綿密に監視"}
            </strong>
            {"します。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"場面（補足）"}
                        </th>
                        <th>
                            {"監視のしかた"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"新しい待機ヘルパー関数を初めて使う"}
                        </td>
                        <td>
                            {"ログで待機時間と結果を確認し、意図どおりに動くか見る"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"新しいレポート出力機能を追加"}
                        </td>
                        <td>
                            {"出力内容を手作業のテスト結果と照合する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"ツールのメジャーアップグレード後"}
                        </td>
                        <td>
                            {"代表的なサンプルテストで先に動作を確認する"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="44-項目3テストの再現性repeatability">
            {" 4.4 項目3：テストの再現性（Repeatability） "}
        </h3>
        <p>
            {" シラバスは、テストを繰り返したときは"}
            <strong>
                {"結果が常に同じ"}
            </strong>
            {"であるべきだと述べています。"}
            <strong>
                {"信頼できない結果を返すテストケース"}
            </strong>
            {"（例：競合状態が原因）は、アクティブな自動テストスイートから"}
            <strong>
                {"外して"}
            </strong>
            {"、根本原因を別に分析します。外さないと、同じ失敗の分析に何度も時間を使うことになるからです。 "}
        </p>
        <div className="mermaid-container">
            <ChapterDiagram id="mermaid-diagram-7" />
        </div>
        <h4 id="コード例補足不安定なテストの隔離">
            {" コード例（補足）：不安定なテストの隔離 "}
        </h4>
        <CodeExample index={2} />
        <CodeExample index={3} />
        <CodeExample index={4} />
        <div className="callout callout-warning">
            <div className="callout-header">
                <span className="callout-icon">
                    {"⚠️"}
                </span>
                <span className="callout-label">
                    {"注意"}
                </span>
            </div>
            <div className="callout-body">
                <p>
                    {" リトライで「たまたま成功すれば合格」にしてしまうと、不安定さの原因を隠すことになります。リトライを使う場合も、リトライが発生した事実をレポートに残しましょう。 "}
                </p>
            </div>
        </div>
        <div className="callout callout-practice">
            <div className="callout-header">
                <span className="callout-icon">
                    {"💡"}
                </span>
                <span className="callout-label">
                    {"ベストプラクティス（再現性）"}
                </span>
            </div>
            <div className="callout-body">
                <ul>
                    <li>
                        {" 不安定なテストは放置せず、隔離して原因を調査し、直したらスイートに戻す "}
                    </li>
                    <li>
                        {"隔離の理由・担当者・期限を記録し、隔離したまま忘れない"}
                    </li>
                    <li>
                        {" 固定の待機ではなく、状態を確認する待機を使う（詳細は第8章の待機メカニズム） "}
                    </li>
                </ul>
            </div>
        </div>
        <h3 id="45-項目4自動テストツールの侵入性intrusiveness">
            {" 4.5 項目4：自動テストツールの侵入性（Intrusiveness） "}
        </h3>
        <p>
            {"シラバスは次のように説明しています。"}
        </p>
        <ul>
            <li>
                {" TAS は SUT と"}
                <strong>
                    {"密結合"}
                </strong>
                {"になりがち。これは互換性や連携レベルを高めるために意図的な設計でもある "}
            </li>
            <li>
                {" しかし密接な統合は"}
                <strong>
                    {"悪影響"}
                </strong>
                {"も生む。例えば TAS が SUT 環境の内側にあると、手動テストのときと SUT の機能が異なる可能性があり、性能にも影響しうる "}
            </li>
            <li>
                {" 侵入の度合いが高いと、"}
                <strong>
                    {"本番では見られない失敗"}
                </strong>
                {"がテストで現れることがある。その失敗で自動テストが失敗すると、"}
                <strong>
                    {"TAS への信頼が大きく低下"}
                </strong>
                {"する "}
            </li>
            <li>
                {" 開発者から、自動テストが見つけた失敗を"}
                <strong>
                    {"手動で再現"}
                </strong>
                {"するよう求められることがある "}
            </li>
        </ul>
        <div className="mermaid-container">
            <ChapterDiagram id="mermaid-diagram-8" />
        </div>
        <h4 id="侵入性の例と対策補足">
            {"侵入性の例と対策（補足）"}
        </h4>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"侵入性の例（補足）"}
                        </th>
                        <th>
                            {"起こりうる影響"}
                        </th>
                        <th>
                            {"対策の例"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"テスト用のフックや計装コードが SUT に入っている"}
                        </td>
                        <td>
                            {"本番にはない挙動や遅延"}
                        </td>
                        <td>
                            {"侵入の範囲を最小にし、影響を把握する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAS が SUT と同じサーバーで動く"}
                        </td>
                        <td>
                            {"CPU、メモリの取り合い"}
                        </td>
                        <td>
                            {"TAS の実行環境を分離する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"詳細すぎるログを常時出力する"}
                        </td>
                        <td>
                            {"I/O 負荷で性能が変わる"}
                        </td>
                        <td>
                            {"ログレベルを調整する（Debug、Trace は調査時のみ）"}
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
                    {" ログレベル（Fatal、Error、Warn、Info、Debug、Trace）は第4章で学んだ内容です。 "}
                </p>
            </div>
        </div>
        <div className="callout callout-practice">
            <div className="callout-header">
                <span className="callout-icon">
                    {"💡"}
                </span>
                <span className="callout-label">
                    {"ベストプラクティス（侵入性）"}
                </span>
            </div>
            <div className="callout-body">
                <ul>
                    <li>
                        {" TAS を SUT から分離できるなら分離し、侵入の度合いを意識して設計する "}
                    </li>
                    <li>
                        {" 自動テストで見つけた失敗は、可能なら手動でも再現できるか確認してから報告する "}
                    </li>
                    <li>
                        {" 侵入によって生じた失敗と、本物の欠陥を区別できるよう、環境情報をレポートに残す "}
                    </li>
                </ul>
            </div>
        </div>
        <hr />
    </>;
}
