import React from 'react';

export default function SummaryQuestions() {
    return <>
        <h2 id="5-項目別ベストプラクティス総まとめ">
            {"5. 項目別ベストプラクティス総まとめ"}
        </h2>
        <h3 id="51-サービス機能別の使い分け例">
            {"5.1 サービス・機能別の使い分け（例）"}
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
                    {" 以下のツール名は代表例です。試験ではツール名は問われません。導入前に各公式ドキュメントで最新の機能を確認してください。 "}
                </p>
            </div>
        </div>
        <div className="table-scroll">
            <table>
                <caption className="table-caption">
                    {"サービス・機能別の使い分け（例）"}
                </caption>
                <thead>
                    <tr className="header">
                        <th>
                            {"目的"}
                        </th>
                        <th>
                            {"機能・ツールの例"}
                        </th>
                        <th>
                            {"使いどころ"}
                        </th>
                        <th>
                            {"注意点"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"テスト結果レポート（HTML）"}
                        </td>
                        <td>
                            {"Playwright の HTML レポーター、Allure Report"}
                        </td>
                        <td>
                            {"人が読む詳細レポート"}
                        </td>
                        <td>
                            {"保管先と公開方法を決める"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"CI 連携用の結果出力"}
                        </td>
                        <td>
                            {"JUnit 形式の XML、JSON"}
                        </td>
                        <td>
                            {"CI/CD やテスト管理ツールへの取り込み"}
                        </td>
                        <td>
                            {"ツールが読める形式を事前確認"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"失敗時の証拠"}
                        </td>
                        <td>
                            {"スクリーンショット、動画、トレース"}
                        </td>
                        <td>
                            {"失敗の再現と原因分析"}
                        </td>
                        <td>
                            {"失敗時のみ保存にして容量を抑える"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"失敗分析の補助（AI／ML）"}
                        </td>
                        <td>
                            {"ReportPortal など"}
                        </td>
                        <td>
                            {"大量ログの分類、失敗傾向の把握"}
                        </td>
                        <td>
                            {"判定は根拠ログで検証する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"ダッシュボード"}
                        </td>
                        <td>
                            {"Grafana など"}
                        </td>
                        <td>
                            {"傾向の可視化"}
                        </td>
                        <td>
                            {"データ源と更新頻度を明確にする"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"分散追跡"}
                        </td>
                        <td>
                            {" W3C Trace Context に沿った "}
                            <code>
                                {"traceparent"}
                            </code>
                            {" ヘッダー、OpenTelemetry "}
                        </td>
                        <td>
                            {"TAS ログと SUT ログの突き合わせ"}
                        </td>
                        <td>
                            {"SUT 側も ID をログに出す必要がある"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="52-611613-横断のチェックリスト">
            {"5.2 6.1.1〜6.1.3 横断のチェックリスト"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="52-611613-横断のチェックリスト">
                <thead>
                    <tr className="header">
                        <th>
                            {"フェーズ"}
                        </th>
                        <th>
                            {"確認事項"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"収集"}
                        </td>
                        <td>
                            {"ログ、証拠、時刻、ID が失敗調査に十分か"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"分析"}
                        </td>
                        <td>
                            {" 一次データ→二次データの順で、SUT・TAS・環境を切り分けられるか "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"報告"}
                        </td>
                        <td>
                            {"受け手に合った粒度か。履歴は保管されているか"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"自動化の信頼性"}
                        </td>
                        <td>
                            {" TAS failure を分けて集計しているか。結果の合否判定は正しいか "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="53-他の章との関係">
            {"5.3 他の章との関係"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="53-他の章との関係">
                <thead>
                    <tr className="header">
                        <th>
                            {"関連する章"}
                        </th>
                        <th>
                            {"関係"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"第3章 アーキテクチャ"}
                        </td>
                        <td>
                            {" レイヤー構造に記録機能を組み込む（gTAA のテスト実行にロギング・レポート機能が含まれる） "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"第4章 実装"}
                        </td>
                        <td>
                            {"ログレベル、テスト構造化（フィクスチャ）、パッケージング"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"第5章 CI/CD"}
                        </td>
                        <td>
                            {" パイプラインのビルドログ・デプロイログ、パイプライン内のテスト結果 "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"第7章 TAS の検証"}
                        </td>
                        <td>
                            {"ログやレポートが正確な情報を出しているかの検証"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"第8章 継続的改善"}
                        </td>
                        <td>
                            {"収集データを基にした改善（テストヒストグラム等）"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr />
        <h2 id="6-試験対策ポイントと確認問題">
            {"6. 試験対策ポイントと確認問題"}
        </h2>
        <h3 id="61-k-レベル別の出題イメージ">
            {"6.1 K レベル別の出題イメージ"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="61-k-レベル別の出題イメージ">
                <thead>
                    <tr className="header">
                        <th>
                            {"LO"}
                        </th>
                        <th>
                            {"K レベル"}
                        </th>
                        <th>
                            {"問われ方のイメージ"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"6.1.1"}
                        </td>
                        <td>
                            {"K3（適用）"}
                        </td>
                        <td>
                            {" シナリオを与えられ、「どのデータ源から」「どの情報をログに記録するか」を選ぶ "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"6.1.2"}
                        </td>
                        <td>
                            {"K4（分析）"}
                        </td>
                        <td>
                            {" ログや状況から、原因が SUT・TAS・環境のどこにあるかを推論する "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"6.1.3"}
                        </td>
                        <td>
                            {"K2（理解）"}
                        </td>
                        <td>
                            {"レポートの内容、受け手ごとの関心、公開方法を説明できるか"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="62-覚えておくべき要点">
            {"6.2 覚えておくべき要点"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="62-覚えておくべき要点">
                <thead>
                    <tr className="header">
                        <th>
                            {"要点"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"一次と二次"}
                        </td>
                        <td>
                            {"TAS のデータが一次、SUT のデータが二次"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAS failure"}
                        </td>
                        <td>
                            {"欠陥が SUT にない状況に付けるステータス"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"期待と実際が一致して失敗"}
                        </td>
                        <td>
                            {"多くは TAS の欠陥"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"全テスト失敗"}
                        </td>
                        <td>
                            {"環境停止を疑い、SUT ログで確認"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"相関 ID／トレース ID"}
                        </td>
                        <td>
                            {"操作を追跡してさかのぼるための一意の ID"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ログの同期"}
                        </td>
                        <td>
                            {"タイムスタンプで各ログを同期"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"レポートの受け手"}
                        </td>
                        <td>
                            {"管理層（傾向）、運用層（利用メトリクス）、技術層（詳細）"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="63-確認問題">
            {"6.3 確認問題"}
        </h3>
        <p>
            <strong>
                {"問1"}
            </strong>
            {"：あるテスト実行で、ほぼすべてのテストが同じ時間帯から一斉に失敗した。最初に確認すべきものとして最も適切なものはどれか。 "}
        </p>
        <ul>
            <li>
                {"A. 各テストのアサーションをすべて書き直す"}
            </li>
            <li>
                {"B. SUT ログで、その時間帯にテスト環境の停止がなかったか確認する"}
            </li>
            <li>
                {"C. すべてのテストを欠陥として起票する"}
            </li>
            <li>
                {"D. レポートの色を変更する"}
            </li>
        </ul>
        <details className="answer">
            <summary>
                {"解答と解説"}
            </summary>
            <p>
                <strong>
                    {"正解：B"}
                </strong>
                {"。テスト環境が使えない（または一部だけ使えない）と、すべてのテストが失敗しうるとシラバスに記載があります。SUT ログで環境停止の有無を確認します。 "}
            </p>
        </details>
        <p>
            <strong>
                {"問2"}
            </strong>
            {"：テスト失敗の分析で、実際の結果と期待結果が一致しているにもかかわらずテストが失敗していた。最も可能性が高い原因はどれか。 "}
        </p>
        <ul>
            <li>
                {"A. SUT の欠陥"}
            </li>
            <li>
                {"B. TAS の欠陥、または見えない不一致"}
            </li>
            <li>
                {"C. ネットワークの遅延のみ"}
            </li>
            <li>
                {"D. レポートの公開先の誤り"}
            </li>
        </ul>
        <details className="answer">
            <summary>
                {"解答と解説"}
            </summary>
            <p>
                <strong>
                    {"正解：B"}
                </strong>
                {"。この場合、多くはテスト自動化ソリューション側に欠陥があるとされています。 "}
            </p>
        </details>
        <p>
            <strong>
                {"問3"}
            </strong>
            {"：管理層のステークホルダーが特に関心を持つ情報として、シラバスの記述に最も合うものはどれか。 "}
        </p>
        <ul>
            <li>
                {"A. 個々のテストステップの低レベルな実行ログ"}
            </li>
            <li>
                {" B. 前回実行からの追加テストケース数、合否比率の変化、TAS と SUT の信頼性といった傾向 "}
            </li>
            <li>
                {"C. データベースのスキーマ定義"}
            </li>
            <li>
                {"D. IDE の設定ファイル"}
            </li>
        </ul>
        <details className="answer">
            <summary>
                {"解答と解説"}
            </summary>
            <p>
                <strong>
                    {"正解：B"}
                </strong>
                {"。管理層は傾向に注目します。詳細（A）は技術層の関心です。 "}
            </p>
        </details>
        <p>
            <strong>
                {"問4"}
            </strong>
            {"：失敗を SUT ログと TAS のテストログで簡単に突き合わせるために、シラバスが挙げる方法はどれか。 "}
        </p>
        <ul>
            <li>
                {"A. ログを手作業で印刷して照合する"}
            </li>
            <li>
                {"B. 各テストログのタイムスタンプを同期する"}
            </li>
            <li>
                {"C. すべてのログを1つのファイルに手で統合する"}
            </li>
            <li>
                {"D. Debug レベルのログを無効にする"}
            </li>
        </ul>
        <details className="answer">
            <summary>
                {"解答と解説"}
            </summary>
            <p>
                <strong>
                    {"正解：B"}
                </strong>
                {"。タイムスタンプでテストログを同期すると、失敗の報告時に何が起きたかを対応付けやすくなります。 "}
            </p>
        </details>
        <p>
            <strong>
                {"問5"}
            </strong>
            {"：テスト進捗レポートが必ず含むべき内容の組み合わせとして正しいものはどれか。 "}
        </p>
        <ul>
            <li>
                {"A. テスト結果、SUT 情報、テスト環境の記録"}
            </li>
            <li>
                {"B. ソースコード全体、ライセンス契約、給与情報"}
            </li>
            <li>
                {"C. 使用した IDE の一覧のみ"}
            </li>
            <li>
                {"D. テストケースの作成者の履歴書"}
            </li>
        </ul>
        <details className="answer">
            <summary>
                {"解答と解説"}
            </summary>
            <p>
                <strong>
                    {"正解：A"}
                </strong>
                {"。シラバスは、テスト結果、SUT 情報、テストを実行した環境の記録を、各関係者に適した形式で含めるとしています。 "}
            </p>
        </details>
        <hr />
    </>;
}
