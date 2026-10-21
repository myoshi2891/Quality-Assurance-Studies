import React from 'react';
import ChapterDiagram from './ChapterDiagram';
import CodeExample from './CodeExample';

export default function DataAnalysis() {
    return <>
        <h2 id="2-811-データ収集と分析でテストケースを改善するk3">
            {" 2. 8.1.1 データ収集と分析でテストケースを改善する（K3） "}
        </h2>
        <p>
            {" 第6章で学んだ「ログやレポートの収集」を土台に、そのデータを使ってテストケース自体を良くするための3つの切り口が示されています。 "}
        </p>
        <div className="table-scroll">
            <table aria-labelledby="2-811-データ収集と分析でテストケースを改善するk3">
                <thead>
                    <tr className="header">
                        <th>
                            {"切り口"}
                        </th>
                        <th>
                            {"何をするか"}
                        </th>
                        <th>
                            {"得られる効果"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"Test histogram"}
                        </td>
                        <td>
                            {"テスト結果データの傾向を可視化"}
                        </td>
                        <td>
                            {"壊れやすいテストの特定・リファクタ対象の選定"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"Artificial Intelligence"}
                        </td>
                        <td>
                            {"ロケータ変更の検知と自己修復など"}
                        </td>
                        <td>
                            {"メンテナンス工数の削減"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"Schema validation"}
                        </td>
                        <td>
                            {"API・DB の構造をスキーマで一括検証"}
                        </td>
                        <td>
                            {"テストコードの短縮と欠陥検出効率の向上"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="21-test-histogramテストヒストグラム">
            {" 2.1 Test histogram（テストヒストグラム） "}
        </h3>
        <h4 id="211-何のためのものか">
            {"2.1.1 何のためのものか"}
        </h4>
        <ul>
            <li>
                {" CI/CD ツールやテストレポートツールは、テスト結果と付随データ（例外ログ、エラーメッセージ、スクリーンショットなど）を表示できます。 "}
            </li>
            <li>
                {" それらをヒストグラム（度数分布）などの視覚レポートにすると、テストケースごとのデータ傾向が一目で分かります。 "}
            </li>
            <li>
                {" 目的は、壊れやすい（fragile）テストケースを見つけ、追加の改善や実装の考え直しでリファクタすることです。 "}
            </li>
        </ul>
        <h4 id="212-具体例イメージをつかむための例">
            {" 2.1.2 具体例（イメージをつかむための例） "}
        </h4>
        <blockquote className="callout-note">
            <div className="callout-icon">
                {"💡"}
            </div>
            <p>
                {" 以下の数値は説明用の架空データです。シラバスが指定した形式ではなく、考え方を示す例です。 "}
            </p>
        </blockquote>
        <p>
            {"直近 30 回の CI 実行で、テストケースごとの「失敗回数」を集計したとします。"}
        </p>
        <div className="table-scroll">
            <table aria-labelledby="212-具体例イメージをつかむための例">
                <thead>
                    <tr className="header">
                        <th>
                            {"テストケース"}
                        </th>
                        <th>
                            {"失敗回数（30 回中）"}
                        </th>
                        <th>
                            {"主なエラーメッセージ"}
                        </th>
                        <th>
                            {"判断"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"TC-001 ログイン成功"}
                        </td>
                        <td>
                            {"0"}
                        </td>
                        <td>
                            {"なし"}
                        </td>
                        <td>
                            {"安定"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TC-014 カート追加"}
                        </td>
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {"要素が見つからない"}
                        </td>
                        <td>
                            {"経過観察"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TC-027 注文確定"}
                        </td>
                        <td>
                            {"11"}
                        </td>
                        <td>
                            {"Timeout waiting for element"}
                        </td>
                        <td>
                            {"fragile：待機方法を見直す"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TC-033 検索結果表示"}
                        </td>
                        <td>
                            {"9"}
                        </td>
                        <td>
                            {"Stale element reference"}
                        </td>
                        <td>
                            {"fragile：ロケータ／再取得を見直す"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-3" />
        </div>
        <h4 id="213-分析の手順ステップバイステップ">
            {" 2.1.3 分析の手順（ステップバイステップ） "}
        </h4>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-4" />
        </div>
        <h4 id="214-ベストプラクティス">
            {"2.1.4 ベストプラクティス"}
        </h4>
        <div className="table-scroll">
            <table aria-labelledby="214-ベストプラクティス">
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
                            {" 失敗の回数だけでなく原因の種類（例外・エラーメッセージ・スクリーンショット）も併せて見る "}
                        </td>
                        <td>
                            {"同じ失敗回数でも原因が SUT かテストかで打ち手が変わる"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {"実行履歴を継続的に蓄積する"}
                        </td>
                        <td>
                            {"傾向は 1 回の実行では見えない"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {" fragile なテストは通常の実行から切り離して原因を調べる（第7章の再現性の考え方と一致） "}
                        </td>
                        <td>
                            {"不安定なテストが全体の信頼性を下げるのを防ぐ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {"直したら同じ指標で再測定する"}
                        </td>
                        <td>
                            {"改善効果を客観的に示せる"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="22-artificial-intelligenceaiの活用">
            {" 2.2 Artificial Intelligence（AI）の活用 "}
        </h3>
        <h4 id="221-何ができるか">
            {"2.2.1 何ができるか"}
        </h4>
        <ul>
            <li>
                {" UI テストでは、ロケータ値（要素を特定するための ID・XPath・CSS セレクタなど）も「データ」として扱えます。 "}
            </li>
            <li>
                {" 最近のツールには、ロケータが変わったことを検知し、機械学習や画像認識で新しいセレクタを特定して、自己修復（self-healing）アルゴリズムでテストケースを直すものがあります。 "}
            </li>
            <li>
                {" 変更されたロケータはテストレポートにも記録され、その後のバージョン管理への反映やコードメンテナンスを速められます。 "}
            </li>
        </ul>
        <h4 id="222-自己修復の流れ">
            {"2.2.2 自己修復の流れ"}
        </h4>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-5" />
        </div>
        <h4 id="223-ベストプラクティスと注意点">
            {"2.2.3 ベストプラクティスと注意点"}
        </h4>
        <div className="table-scroll">
            <table aria-labelledby="223-ベストプラクティスと注意点">
                <thead>
                    <tr className="header">
                        <th>
                            {"観点"}
                        </th>
                        <th>
                            {"推奨"}
                        </th>
                        <th>
                            {"補足"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"修復結果の扱い"}
                        </td>
                        <td>
                            {" 自動修復を鵜呑みにせず、レポートで確認して恒久的にコードへ反映する "}
                        </td>
                        <td>
                            {" 修復内容はレポートに記録されるので、確認とバージョン管理の材料になる "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"期待する効果"}
                        </td>
                        <td>
                            {"「壊れたロケータ探し」の時間を減らす"}
                        </td>
                        <td>
                            {"設計の悪さ（例：不安定なロケータ設計）までは解決しない"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"併用すべき設計"}
                        </td>
                        <td>
                            {"Page Object Model などでロケータを 1 か所に集約"}
                        </td>
                        <td>
                            {"第3章の設計パターンと併用するとメンテナンスが楽になる"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"失敗原因の切り分け"}
                        </td>
                        <td>
                            {"SUT の欠陥か TAS の欠陥かの判別支援にも使える"}
                        </td>
                        <td>
                            {"第6章の AI/ML ログ分析と関連"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="23-schema-validationスキーマ検証">
            {"2.3 Schema validation（スキーマ検証）"}
        </h3>
        <h4 id="231-何ができるか">
            {"2.3.1 何ができるか"}
        </h4>
        <ul>
            <li>
                {" API のデータ分析（エンドポイントが返すプロパティなど）と データベースの分析（フィールドの許容データ型・値の範囲などの検証ルール）に使います。 "}
            </li>
            <li>
                {" レスポンスが実際のビジネス仕様に合っているかを確認できます。 "}
                <ul>
                    <li>
                        {"必須要素が含まれているか"}
                    </li>
                    <li>
                        {"各要素のオブジェクト型がスキーマ定義と一致するか"}
                    </li>
                </ul>
            </li>
            <li>
                {" スキーマが崩れたときは、どの検証で失敗したかが返るため、原因特定に役立ちます。 "}
            </li>
        </ul>
        <h4 id="232-シラバスの例をコードで理解する">
            {" 2.3.2 シラバスの例をコードで理解する "}
        </h4>
        <p>
            {" シラバスの例：「API に必須のレスポンス要素が 6 つあり、すべて文字列であるべき」。 スキーマ検証ツールを使うと、6 要素それぞれに型チェック・null チェックの assertion を書かなくてよいため、テストコードが短くなり、バックエンドサービスの欠陥検出効率も上がります。 "}
        </p>
        <p>
            <strong>
                {"Before：個別の assertion を並べる場合"}
            </strong>
        </p>
        <CodeExample index={0} />
        <p>
            <strong>
                {"After：スキーマ検証を使う場合（JSON Schema と Python の jsonschema の例）"}
            </strong>
        </p>
        <CodeExample index={1} />
        <h4 id="233-使いどころの整理">
            {"2.3.3 使いどころの整理"}
        </h4>
        <div className="table-scroll">
            <table aria-labelledby="233-使いどころの整理">
                <thead>
                    <tr className="header">
                        <th>
                            {"対象"}
                        </th>
                        <th>
                            {"検証できること（例）"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"REST API のレスポンス"}
                        </td>
                        <td>
                            {"必須プロパティの有無、型、null 不可"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"データベース"}
                        </td>
                        <td>
                            {"フィールドの型、値の範囲、必須項目"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"メッセージ／イベント"}
                        </td>
                        <td>
                            {"ペイロードの構造"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 id="234-スキーマ検証と契約テスト第5章の違い">
            {" 2.3.4 スキーマ検証と契約テスト（第5章）の違い "}
        </h4>
        <div className="table-scroll">
            <table aria-labelledby="234-スキーマ検証と契約テスト第5章の違い">
                <thead>
                    <tr className="header">
                        <th>
                            {"観点"}
                        </th>
                        <th>
                            {"スキーマ検証"}
                        </th>
                        <th>
                            {"契約テスト（Contract testing）"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"主な目的"}
                        </td>
                        <td>
                            {"レスポンス／データが仕様の構造に合っているか"}
                        </td>
                        <td>
                            {"サービス同士が合意したやり取りを守っているか"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"合意の有無"}
                        </td>
                        <td>
                            {"定義済みスキーマとの照合"}
                        </td>
                        <td>
                            {" 提供側と利用側が許容される相互作用に合意し、契約として保存して双方が検証 "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"範囲"}
                        </td>
                        <td>
                            {"データの形"}
                        </td>
                        <td>
                            {"やり取りの内容全体（進化への対応も含む）"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"関係"}
                        </td>
                        <td>
                            {"契約テストはスキーマ検証を超えるもの（第5章より）"}
                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 id="235-ベストプラクティス">
            {"2.3.5 ベストプラクティス"}
        </h4>
        <div className="table-scroll">
            <table aria-labelledby="235-ベストプラクティス">
                <thead>
                    <tr className="header">
                        <th>
                            {"#"}
                        </th>
                        <th>
                            {"ベストプラクティス"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"1"}
                        </td>
                        <td>
                            {" スキーマは手書きの assertion より先に検討し、テストコードを短く保つ "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {" スキーマ定義は仕様書（API ドキュメント）と同期させる（第5章：API ドキュメントはテスト自動化の基準） "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {" 型・必須チェックはスキーマに任せ、ビジネスルールの検証だけを個別 assertion にする "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {" スキーマ違反時のメッセージをログ・レポートに残す（原因特定に直結する） "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>;
}
