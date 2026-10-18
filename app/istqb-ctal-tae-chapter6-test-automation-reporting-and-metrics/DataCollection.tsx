import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function DataCollection() {
    return <>
        <h2 id="2-611-データ収集方法の適用k3">
            {"2. 6.1.1 データ収集方法の適用（K3）"}
        </h2>
        <p>
            <strong>
                {"この節のゴール"}
            </strong>
            {"：どこから、どのようにデータを集めればよいかを、状況に合わせて選べるようになること。 "}
        </p>
        <h3 id="21-ステップ1データ源を知る">
            {"2.1 ステップ1：データ源を知る"}
        </h3>
        <p>
            {"シラバスが挙げるデータ源は次のとおりです。"}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"データ源"}
                        </th>
                        <th>
                            {"具体例"}
                        </th>
                        <th>
                            {"主な使いどころ"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"SUT ログ"}
                        </td>
                        <td>
                            {" Web／モバイル UI、API、アプリケーション、Web サーバー、DB サーバーのログ "}
                        </td>
                        <td>
                            {"SUT 側の欠陥の原因調査"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAF ログ"}
                        </td>
                        <td>
                            {"TAF が出力する実行記録"}
                        </td>
                        <td>
                            {"監査証跡（audit trail）として利用"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"ビルドログ"}
                        </td>
                        <td>
                            {"ビルド工程の出力"}
                        </td>
                        <td>
                            {"ビルド失敗と自動テスト失敗の切り分け"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"デプロイログ"}
                        </td>
                        <td>
                            {"デプロイ工程の出力"}
                        </td>
                        <td>
                            {"デプロイ起因の不具合の切り分け"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"本番ログ・監視データ"}
                        </td>
                        <td>
                            {" 本番のパフォーマンス監視、性能テスト環境の負荷・ストレス・スパイクテストログ "}
                        </td>
                        <td>
                            {"傾向分析（trend analysis）"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"スクリーンショット・画面録画"}
                        </td>
                        <td>
                            {"ツール標準機能、または第三者ツール"}
                        </td>
                        <td>
                            {"失敗時の SUT の状態確認"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ChapterDiagram id="mermaid-diagram-3" />
        <div className="callout-practice">
            <div className="callout-head">
                <span className="callout-icon">
                    {"💡"}
                </span>
                <span className="callout-title">
                    {"ベストプラクティス：データ源の選び方"}
                </span>
            </div>
            <div className="callout-body">
                <ol type="1">
                    <li>
                        {" まず TAF ログ（一次情報）で「どのテストのどのステップで失敗したか」を特定する。 "}
                    </li>
                    <li>
                        {" 次に SUT ログ・スクリーンショットで「そのとき SUT がどんな状態だったか」を確認する。 "}
                    </li>
                    <li>
                        {" 環境全体が怪しいときだけ、ビルド・デプロイログや監視データまで広げる。 "}
                    </li>
                </ol>
            </div>
        </div>
        <h3 id="22-ステップ2テストウェアに記録機能を組み込む">
            {" 2.2 ステップ2：テストウェアに記録機能を組み込む "}
        </h3>
        <p>
            {" TAS の中心は自動化されたテストウェア（テストスクリプトやライブラリ）です。そのため、"}
            <strong>
                {"下位のテストウェアに記録機能を足すと、上位の全テストスクリプトがその恩恵を受けます。"}
            </strong>
        </p>
        <p>
            {" シラバスの例：下位のテストウェアに「テストの開始・終了時刻の記録」を追加すれば、ほとんどすべてのテストに効果があります。 "}
        </p>
        <ChapterDiagram id="mermaid-diagram-4" />
        <div className="callout-practice">
            <div className="callout-head">
                <span className="callout-icon">
                    {"💡"}
                </span>
                <span className="callout-title">
                    {"ベストプラクティス"}
                </span>
            </div>
            <div className="callout-body">
                <ul>
                    <li>
                        {" ログ出力はテストスクリプトごとに書かず、"}
                        <strong>
                            {"共通フック（setup／teardown、フィクスチャ、リスナー）に1回だけ実装"}
                        </strong>
                        {"する。 "}
                    </li>
                    <li>
                        {" 記録項目を増やしたいときも下位層を直せば全テストに反映される。第3章の「レイヤー化」「Facade パターン」の考え方と同じです。 "}
                    </li>
                </ul>
            </div>
        </div>
        <h3 id="23-ステップ3測定とレポート生成を支える機能を使う">
            {" 2.3 ステップ3：測定とレポート生成を支える機能を使う "}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"機能"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                        <th>
                            {"覚えるポイント"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"実行前・中・後の記録"}
                        </td>
                        <td>
                            {" 多くのテストツールのスクリプト言語には、個別テストやスイート全体の前後で情報を記録する機能がある "}
                        </td>
                        <td>
                            {"測定・レポートの土台"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"過去実行との比較分析"}
                        </td>
                        <td>
                            {"複数回の実行結果を踏まえ、成功率の変化などの傾向を示す"}
                        </td>
                        <td>
                            {"「1回の結果」ではなく「推移」を見る"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"アサーションによる比較"}
                        </td>
                        <td>
                            {" 実際の結果と期待結果の比較はツールのアサーションで行うのが最適 "}
                        </td>
                        <td>
                            {"合否（passed／failed）を正しく判定する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"失敗時の追加情報"}
                        </td>
                        <td>
                            {" failed のときは原因把握のための情報（例：スクリーンショット）が必要 "}
                        </td>
                        <td>
                            {"合否だけでは調査できない"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"期待される差異の無視"}
                        </td>
                        <td>
                            {" 日付・時刻など、毎回変わって当然の差異は比較から除外し、想定外の差異だけを目立たせる "}
                        </td>
                        <td>
                            {"誤検知（偽の失敗）を減らす"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="callout-warning">
            <div className="callout-head">
                <span className="callout-icon">
                    {"⚠️"}
                </span>
                <span className="callout-title">
                    {"注意"}
                </span>
            </div>
            <div className="callout-body">
                <p>
                    {" テスト状況（合否）が正しく判定されないと、以降のレポートやメトリクスはすべて信頼できなくなります。 "}
                </p>
            </div>
        </div>
        <h3 id="24-ステップ4テストロギングの設計">
            {"2.4 ステップ4：テストロギングの設計"}
        </h3>
        <h4 id="241-ログレベル第4章の復習">
            {"2.4.1 ログレベル（第4章の復習）"}
        </h4>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"レベル"}
                        </th>
                        <th>
                            {"用途"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"Fatal"}
                        </td>
                        <td>
                            {"テスト実行の中断につながりうるエラー"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"Error"}
                        </td>
                        <td>
                            {"条件や操作が失敗し、テストケースも失敗になる"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"Warn"}
                        </td>
                        <td>
                            {"想定外の状況が起きたが、テストの流れは止まらない"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"Info"}
                        </td>
                        <td>
                            {"テストケースと実行中の基本情報"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"Debug"}
                        </td>
                        <td>
                            {"通常は不要だが、失敗調査に役立つ実行時の詳細"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"Trace"}
                        </td>
                        <td>
                            {"Debug よりさらに詳細"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 id="242-tas-ロギングで記録すべき内容">
            {"2.4.2 TAS ロギングで記録すべき内容"}
        </h4>
        <p>
            {"シラバスが挙げる項目を、目的別に整理しました。"}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"分類"}
                        </th>
                        <th>
                            {"記録する内容"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"実行の特定"}
                        </td>
                        <td>
                            {"実行中のテストケース、開始・終了時刻"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ステータス"}
                        </td>
                        <td>
                            {" passed／failed／"}
                            <strong>
                                {"TAS failure"}
                            </strong>
                            {"（欠陥が SUT ではない場合）。inconclusive（結論不能）になることもあるため、組織で明確に定義する "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"詳細"}
                        </td>
                        <td>
                            {"重要なテストステップと時間情報"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"SUT の動的情報"}
                        </td>
                        <td>
                            {" サードパーティツールで検出したメモリリークなど。失敗は実行していたスイートと共に記録 "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"反復"}
                        </td>
                        <td>
                            {"信頼性テスト・ストレステストでは実行回数のカウンタ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ランダム要素"}
                        </td>
                        <td>
                            {"ランダムなパラメータや選択があるときは、その値・選択を記録"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"再現性"}
                        </td>
                        <td>
                            {" すべての操作を、同じステップ・同じタイミングで再生できる形で記録 "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"証拠"}
                        </td>
                        <td>
                            {"スクリーンショット、クラッシュダンプ、スタックトレース"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"上書き対策"}
                        </td>
                        <td>
                            {" 循環バッファなど上書きされうるログは、失敗時に別の場所へ退避 "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"見やすさ"}
                        </td>
                        <td>
                            {"色分け（例：欠陥は赤、進捗は緑）"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ChapterDiagram id="mermaid-diagram-5" />
        <div className="callout-practice">
            <div className="callout-head">
                <span className="callout-icon">
                    {"💡"}
                </span>
                <span className="callout-title">
                    {"ベストプラクティス：ステータス定義"}
                </span>
            </div>
            <div className="callout-body">
                <ul>
                    <li>
                        {" 「passed／failed」だけでなく "}
                        <strong>
                            {"TAS failure"}
                        </strong>
                        {" を分けて集計する。分けないと「SUT の品質が悪い」のか「テストが壊れている」のかが混ざり、メトリクスが誤解を生みます。 "}
                    </li>
                    <li>
                        {" inconclusive の扱い（再実行するか、欠陥扱いにするか）を、チームで文書化しておく。 "}
                    </li>
                </ul>
            </div>
        </div>
        <h4 id="243-sut-ロギングで押さえること">
            {"2.4.3 SUT ロギングで押さえること"}
        </h4>
        <div className="table-scroll">
            <table>
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
                            {"欠陥情報"}
                        </td>
                        <td>
                            {"日時、欠陥の発生箇所（ソース位置）、エラーメッセージ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"起動時の構成情報"}
                        </td>
                        <td>
                            {" ソフトウェア／ファームウェアのバージョン、SUT の構成、OS の構成をファイルに記録 "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"検索性と同期"}
                        </td>
                        <td>
                            {" TAS のテストログで見つけた失敗を SUT ログで簡単に探せる（逆も同様）ように、"}
                            <strong>
                                {"タイムスタンプで各ログを同期"}
                            </strong>
                            {"する "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ChapterDiagram id="mermaid-diagram-6" />
        <h3 id="25-ステップ5サードパーティツールとの連携と可視化">
            {" 2.5 ステップ5：サードパーティツールとの連携と可視化 "}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"項目"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                        <th>
                            {"ベストプラクティス"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"他ツール連携"}
                        </td>
                        <td>
                            {" 表計算、XML、ドキュメント、DB、レポートツールなどで追跡・報告できる形式で結果を出力する（例：トレーサビリティ情報の更新）。ツール標準のエクスポート形式か、カスタムレポートで実現 "}
                        </td>
                        <td>
                            {" 標準的な形式（例：JUnit 形式の XML）で出力しておくと、多くの CI/CD やレポートツールが読み取れる "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"結果の可視化"}
                        </td>
                        <td>
                            {" グラフで表現。信号機のような色付きアイコンで全体状態を示すと、判断しやすい。管理者は視覚的な要約を好み、必要ならドリルダウンで詳細へ "}
                        </td>
                        <td>
                            {"最上段に全体状態、そこから詳細へ掘り下げられる構成にする"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="26-実践例コードで見る収集設定">
            {"2.6 実践例：コードで見る収集設定"}
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
                    {" 以下は"}
                    <strong>
                        {"理解を助けるための一例"}
                    </strong>
                    {"で、シラバスの内容ではありません。ツールの詳細は各公式ドキュメントで確認してください。 "}
                </p>
            </div>
        </div>
        <h4 id="例1playwright-でレポートとトレースを収集する設定">
            {" 例1：Playwright でレポートとトレースを収集する設定 "}
        </h4>
        <div className="code-card">
            <div className="code-lang">
                {"typescript"}
            </div>
            <pre className="typescript"><code><span className="c1">{"// playwright.config.ts"}</span>{"\n"}<span className="k">{"import"}</span><span className="w">{" "}</span><span className="p">{"{"}</span><span className="w">{" "}</span><span className="nx">{"defineConfig"}</span><span className="w">{" "}</span><span className="p">{"}"}</span><span className="w">{" "}</span><span className="kr">{"from"}</span><span className="w">{" "}</span><span className="s1">{"'@playwright/test'"}</span><span className="p">{";"}</span>{"\n\n"}<span className="k">{"export"}</span><span className="w">{" "}</span><span className="k">{"default"}</span><span className="w">{" "}</span><span className="nx">{"defineConfig"}</span><span className="p">{"({"}</span>{"\n"}<span className="w">{"  "}</span><span className="nx">{"reporter"}</span><span className="o">{":"}</span><span className="w">{" "}</span><span className="p">{"["}</span>{"\n"}<span className="w">{"    "}</span><span className="p">{"["}</span><span className="s1">{"'list'"}</span><span className="p">{"],"}</span>{"\n"}<span className="w">{"    "}</span><span className="p">{"["}</span><span className="s1">{"'html'"}</span><span className="p">{","}</span><span className="w">{" "}</span><span className="p">{"{"}</span><span className="w">{" "}</span><span className="nx">{"open"}</span><span className="o">{":"}</span><span className="w">{" "}</span><span className="s1">{"'never'"}</span><span className="w">{" "}</span><span className="p">{"}],"}</span>{"\n"}<span className="w">{"    "}</span><span className="p">{"["}</span><span className="s1">{"'junit'"}</span><span className="p">{","}</span><span className="w">{" "}</span><span className="p">{"{"}</span><span className="w">{" "}</span><span className="nx">{"outputFile"}</span><span className="o">{":"}</span><span className="w">{" "}</span><span className="s1">{"'results/junit.xml'"}</span><span className="w">{" "}</span><span className="p">{"}],"}</span>{"\n"}<span className="w">{"    "}</span><span className="p">{"["}</span><span className="s1">{"'json'"}</span><span className="p">{","}</span><span className="w">{" "}</span><span className="p">{"{"}</span><span className="w">{" "}</span><span className="nx">{"outputFile"}</span><span className="o">{":"}</span><span className="w">{" "}</span><span className="s1">{"'results/results.json'"}</span><span className="w">{" "}</span><span className="p">{"}],"}</span>{"\n"}<span className="w">{"  "}</span><span className="p">{"],"}</span>{"\n"}<span className="w">{"  "}</span><span className="nx">{"use"}</span><span className="o">{":"}</span><span className="w">{" "}</span><span className="p">{"{"}</span>{"\n"}<span className="w">{"    "}</span><span className="nx">{"trace"}</span><span className="o">{":"}</span><span className="w">{" "}</span><span className="s1">{"'retain-on-failure'"}</span><span className="p">{","}</span>{"\n"}<span className="w">{"    "}</span><span className="nx">{"screenshot"}</span><span className="o">{":"}</span><span className="w">{" "}</span><span className="s1">{"'only-on-failure'"}</span><span className="p">{","}</span>{"\n"}<span className="w">{"    "}</span><span className="nx">{"video"}</span><span className="o">{":"}</span><span className="w">{" "}</span><span className="s1">{"'retain-on-failure'"}</span><span className="p">{","}</span>{"\n"}<span className="w">{"  "}</span><span className="p">{"},"}</span>{"\n"}<span className="p">{"});"}</span>{"\n"}</code></pre>
        </div>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"設定"}
                        </th>
                        <th>
                            {"役割"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"html／junit／json"}
                        </td>
                        <td>
                            {"人が読む形と、他ツールが読む形の両方を出力"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"trace／screenshot／video"}
                        </td>
                        <td>
                            {"失敗時だけ証拠を残す（容量と調査効率のバランス）"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 id="例2相関-id-を付与して-taf-ログに残すpython">
            {" 例2：相関 ID を付与して TAF ログに残す（Python） "}
        </h4>
        <div className="code-card">
            <div className="code-lang">
                {"python"}
            </div>
            <pre className="python"><code><span className="kn">{"import"}</span><span className="w">{" "}</span><span className="nn">{"json"}</span>{"\n"}<span className="kn">{"import"}</span><span className="w">{" "}</span><span className="nn">{"logging"}</span>{"\n"}<span className="kn">{"import"}</span><span className="w">{" "}</span><span className="nn">{"time"}</span>{"\n"}<span className="kn">{"import"}</span><span className="w">{" "}</span><span className="nn">{"uuid"}</span>{"\n"}<span className="kn">{"from"}</span><span className="w">{" "}</span><span className="nn">{"urllib.parse"}</span><span className="w">{" "}</span><span className="kn">{"import"}</span>{" "}<span className="n">{"urlsplit"}</span><span className="p">{","}</span>{" "}<span className="n">{"urlunsplit"}</span>{"\n\n"}<span className="kn">{"import"}</span><span className="w">{" "}</span><span className="nn">{"requests"}</span>{"\n\n"}<span className="n">{"logger"}</span>{" "}<span className="o">{"="}</span>{" "}<span className="n">{"logging"}</span><span className="o">{"."}</span><span className="n">{"getLogger"}</span><span className="p">{"("}</span><span className="s2">{"\"taf\""}</span><span className="p">{")"}</span>{"\n\n\n"}<span className="k">{"def"}</span><span className="w">{" "}</span><span className="nf">{"call_api"}</span><span className="p">{"("}</span><span className="n">{"base_url"}</span><span className="p">{":"}</span>{" "}<span className="nb">{"str"}</span><span className="p">{","}</span>{" "}<span className="n">{"path"}</span><span className="p">{":"}</span>{" "}<span className="nb">{"str"}</span><span className="p">{","}</span>{" "}<span className="n">{"test_id"}</span><span className="p">{":"}</span>{" "}<span className="nb">{"str"}</span><span className="p">{")"}</span>{" "}<span className="o">{"->"}</span>{" "}<span className="n">{"requests"}</span><span className="o">{"."}</span><span className="n">{"Response"}</span><span className="p">{":"}</span>{"\n    "}<span className="n">{"trace_id"}</span>{" "}<span className="o">{"="}</span>{" "}<span className="n">{"uuid"}</span><span className="o">{"."}</span><span className="n">{"uuid4"}</span><span className="p">{"()"}</span><span className="o">{"."}</span><span className="n">{"hex"}</span>{"                      "}<span className="c1">{"# 32桁の16進数"}</span>{"\n    "}<span className="n">{"span_id"}</span>{" "}<span className="o">{"="}</span>{" "}<span className="n">{"uuid"}</span><span className="o">{"."}</span><span className="n">{"uuid4"}</span><span className="p">{"()"}</span><span className="o">{"."}</span><span className="n">{"hex"}</span><span className="p">{"[:"}</span><span className="mi">{"16"}</span><span className="p">{"]"}</span>{"                  "}<span className="c1">{"# 16桁の16進数"}</span>{"\n    "}<span className="n">{"headers"}</span>{" "}<span className="o">{"="}</span>{" "}<span className="p">{"{"}</span><span className="s2">{"\"traceparent\""}</span><span className="p">{":"}</span>{" "}<span className="sa">{"f"}</span><span className="s2">{"\"00-"}</span><span className="si">{"{"}</span><span className="n">{"trace_id"}</span><span className="si">{"}"}</span><span className="s2">{"-"}</span><span className="si">{"{"}</span><span className="n">{"span_id"}</span><span className="si">{"}"}</span><span className="s2">{"-01\""}</span><span className="p">{"}"}</span>{"\n\n    "}<span className="n">{"url"}</span>{" "}<span className="o">{"="}</span>{" "}<span className="sa">{"f"}</span><span className="s2">{"\""}</span><span className="si">{"{"}</span><span className="n">{"base_url"}</span><span className="si">{"}{"}</span><span className="n">{"path"}</span><span className="si">{"}"}</span><span className="s2">{"\""}</span>{"\n    "}<span className="n">{"parts"}</span>{" "}<span className="o">{"="}</span>{" "}<span className="n">{"urlsplit"}</span><span className="p">{"("}</span><span className="n">{"url"}</span><span className="p">{")"}</span>{"\n    "}<span className="c1">{"# 認証情報が平文で流れないよう、HTTPS 以外は送信前に拒否する"}</span>{"\n    "}<span className="k">{"if"}</span>{" "}<span className="n">{"parts"}</span><span className="o">{"."}</span><span className="n">{"scheme"}</span>{" "}<span className="o">{"!="}</span>{" "}<span className="s2">{"\"https\""}</span><span className="p">{":"}</span>{"\n        "}<span className="k">{"raise"}</span>{" "}<span className="ne">{"ValueError"}</span><span className="p">{"("}</span><span className="s2">{"\"base_url は https:// で始まる必要があります\""}</span><span className="p">{")"}</span>{"\n\n    "}<span className="c1">{"# userinfo（user:password@）・パス・クエリ・フラグメントには秘密情報が含まれうるため、ログにはオリジンだけを載せる"}</span>{"\n    "}<span className="n">{"host"}</span>{" "}<span className="o">{"="}</span>{" "}<span className="n">{"parts"}</span><span className="o">{"."}</span><span className="n">{"hostname"}</span>{" "}<span className="ow">{"or"}</span>{" "}<span className="s2">{"\"\""}</span>{"\n    "}<span className="n">{"netloc"}</span>{" "}<span className="o">{"="}</span>{" "}<span className="sa">{"f"}</span><span className="s2">{"\""}</span><span className="si">{"{"}</span><span className="n">{"host"}</span><span className="si">{"}"}</span><span className="s2">{":"}</span><span className="si">{"{"}</span><span className="n">{"parts"}</span><span className="o">{"."}</span><span className="n">{"port"}</span><span className="si">{"}"}</span><span className="s2">{"\""}</span>{" "}<span className="k">{"if"}</span>{" "}<span className="n">{"parts"}</span><span className="o">{"."}</span><span className="n">{"port"}</span>{" "}<span className="k">{"else"}</span>{" "}<span className="n">{"host"}</span>{"\n    "}<span className="n">{"logged_url"}</span>{" "}<span className="o">{"="}</span>{" "}<span className="n">{"urlunsplit"}</span><span className="p">{"(("}</span><span className="n">{"parts"}</span><span className="o">{"."}</span><span className="n">{"scheme"}</span><span className="p">{","}</span>{" "}<span className="n">{"netloc"}</span><span className="p">{","}</span>{" "}<span className="s2">{"\"\""}</span><span className="p">{","}</span>{" "}<span className="s2">{"\"\""}</span><span className="p">{","}</span>{" "}<span className="s2">{"\"\""}</span><span className="p">{"))"}</span>{"\n\n    "}<span className="c1">{"# time.time() はシステム時刻の補正で巻き戻りうるため、経過時間は単調増加の perf_counter() で測る"}</span>{"\n    "}<span className="n">{"started"}</span>{" "}<span className="o">{"="}</span>{" "}<span className="n">{"time"}</span><span className="o">{"."}</span><span className="n">{"perf_counter"}</span><span className="p">{"()"}</span>{"\n    "}<span className="k">{"try"}</span><span className="p">{":"}</span>{"\n        "}<span className="c1">{"# リダイレクトは追従しない（HTTP など想定外の送信先へ認証情報が渡るのを防ぐ）"}</span>{"\n        "}<span className="n">{"response"}</span>{" "}<span className="o">{"="}</span>{" "}<span className="n">{"requests"}</span><span className="o">{"."}</span><span className="n">{"get"}</span><span className="p">{"("}</span><span className="n">{"url"}</span><span className="p">{","}</span>{" "}<span className="n">{"headers"}</span><span className="o">{"="}</span><span className="n">{"headers"}</span><span className="p">{","}</span>{" "}<span className="n">{"timeout"}</span><span className="o">{"="}</span><span className="mi">{"10"}</span><span className="p">{","}</span>{" "}<span className="n">{"allow_redirects"}</span><span className="o">{"="}</span><span className="kc">{"False"}</span><span className="p">{")"}</span>{"\n    "}<span className="k">{"except"}</span>{" "}<span className="n">{"requests"}</span><span className="o">{"."}</span><span className="n">{"RequestException"}</span>{" "}<span className="k">{"as"}</span>{" "}<span className="n">{"exc"}</span><span className="p">{":"}</span>{"\n        "}<span className="c1">{"# 失敗時も相関 ID を残し、SUT ログと突き合わせられるようにしてから再送出する"}</span>{"\n        "}<span className="c1">{"# 例外メッセージには URL（認証情報・トークンを含みうる）が入るため、型名だけを記録する"}</span>{"\n        "}<span className="n">{"logger"}</span><span className="o">{"."}</span><span className="n">{"error"}</span><span className="p">{"("}</span><span className="n">{"json"}</span><span className="o">{"."}</span><span className="n">{"dumps"}</span><span className="p">{"({"}</span>{"\n            "}<span className="s2">{"\"test_id\""}</span><span className="p">{":"}</span>{" "}<span className="n">{"test_id"}</span><span className="p">{","}</span>{"\n            "}<span className="s2">{"\"trace_id\""}</span><span className="p">{":"}</span>{" "}<span className="n">{"trace_id"}</span><span className="p">{","}</span>{"\n            "}<span className="s2">{"\"url\""}</span><span className="p">{":"}</span>{" "}<span className="n">{"logged_url"}</span><span className="p">{","}</span>{"\n            "}<span className="s2">{"\"error\""}</span><span className="p">{":"}</span>{" "}<span className="nb">{"type"}</span><span className="p">{"("}</span><span className="n">{"exc"}</span><span className="p">{")"}</span><span className="o">{"."}</span><span className="vm">{"__name__"}</span><span className="p">{","}</span>{"\n            "}<span className="s2">{"\"elapsed_ms\""}</span><span className="p">{":"}</span>{" "}<span className="nb">{"int"}</span><span className="p">{"(("}</span><span className="n">{"time"}</span><span className="o">{"."}</span><span className="n">{"perf_counter"}</span><span className="p">{"()"}</span>{" "}<span className="o">{"-"}</span>{" "}<span className="n">{"started"}</span><span className="p">{")"}</span>{" "}<span className="o">{"*"}</span>{" "}<span className="mi">{"1000"}</span><span className="p">{"),"}</span>{"\n        "}<span className="p">{"}))"}</span>{"\n        "}<span className="k">{"raise"}</span>{"\n\n    "}<span className="n">{"logger"}</span><span className="o">{"."}</span><span className="n">{"info"}</span><span className="p">{"("}</span><span className="n">{"json"}</span><span className="o">{"."}</span><span className="n">{"dumps"}</span><span className="p">{"({"}</span>{"\n        "}<span className="s2">{"\"test_id\""}</span><span className="p">{":"}</span>{" "}<span className="n">{"test_id"}</span><span className="p">{","}</span>{"\n        "}<span className="s2">{"\"trace_id\""}</span><span className="p">{":"}</span>{" "}<span className="n">{"trace_id"}</span><span className="p">{","}</span>{"\n        "}<span className="s2">{"\"url\""}</span><span className="p">{":"}</span>{" "}<span className="n">{"logged_url"}</span><span className="p">{","}</span>{"\n        "}<span className="s2">{"\"status\""}</span><span className="p">{":"}</span>{" "}<span className="n">{"response"}</span><span className="o">{"."}</span><span className="n">{"status_code"}</span><span className="p">{","}</span>{"\n        "}<span className="s2">{"\"elapsed_ms\""}</span><span className="p">{":"}</span>{" "}<span className="nb">{"int"}</span><span className="p">{"(("}</span><span className="n">{"time"}</span><span className="o">{"."}</span><span className="n">{"perf_counter"}</span><span className="p">{"()"}</span>{" "}<span className="o">{"-"}</span>{" "}<span className="n">{"started"}</span><span className="p">{")"}</span>{" "}<span className="o">{"*"}</span>{" "}<span className="mi">{"1000"}</span><span className="p">{"),"}</span>{"\n    "}<span className="p">{"}))"}</span>{"\n    "}<span className="k">{"return"}</span>{" "}<span className="n">{"response"}</span>{"\n"}</code></pre>
        </div>
        <p>
            <code>
                {"traceparent"}
            </code>
            {" は W3C Trace Context で定められたヘッダーです（形式の詳細は"}
            <a href="#8-参考文献ソース-url">
                {"参考文献"}
            </a>
            {"を参照）。SUT 側もこの ID をログに出す構成であれば、TAF ログと SUT ログを ID で突き合わせられます。 "}
        </p>
        <h3 id="27-この節のベストプラクティスまとめ">
            {" 2.7 この節のベストプラクティス（まとめ） "}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"対象"}
                        </th>
                        <th>
                            {"ベストプラクティス"}
                        </th>
                        <th>
                            {"根拠"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"ログ出力の実装場所"}
                        </td>
                        <td>
                            {"下位のテストウェア（共通層）に実装し全テストへ波及させる"}
                        </td>
                        <td>
                            {"シラバス 6.1.1"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ステータス"}
                        </td>
                        <td>
                            {"passed／failed／TAS failure を区別し、定義を組織で統一"}
                        </td>
                        <td>
                            {"シラバス 6.1.1"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"失敗時の証拠"}
                        </td>
                        <td>
                            {" スクリーンショット、スタックトレース、クラッシュダンプを保存 "}
                        </td>
                        <td>
                            {"シラバス 6.1.1"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ログの寿命"}
                        </td>
                        <td>
                            {"上書きされるログは失敗時に退避"}
                        </td>
                        <td>
                            {"シラバス 6.1.1"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"再現性"}
                        </td>
                        <td>
                            {"操作を再生できる粒度で記録。ランダム値も記録"}
                        </td>
                        <td>
                            {"シラバス 6.1.1"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ログ間の対応付け"}
                        </td>
                        <td>
                            {"時刻同期と相関 ID"}
                        </td>
                        <td>
                            {"シラバス 6.1.1、6.1.2"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"比較の精度"}
                        </td>
                        <td>
                            {"日時など期待される差異は無視し、想定外の差異だけ強調"}
                        </td>
                        <td>
                            {"シラバス 6.1.1"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"連携"}
                        </td>
                        <td>
                            {"標準的なエクスポート形式で出力"}
                        </td>
                        <td>
                            {"シラバス 6.1.1"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr />
    </>;
}
