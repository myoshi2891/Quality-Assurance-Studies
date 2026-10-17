import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function Reporting() {
    return <>
        <h2 id="4-613-テスト進捗レポートの作成と公開k2">
            {" 4. 6.1.3 テスト進捗レポートの作成と公開（K2） "}
        </h2>
        <p>
            <strong>
                {"この節のゴール"}
            </strong>
            {"：レポートに何を載せ、誰に、どう届けるかを説明できること。 "}
        </p>
        <h3 id="41-なぜログだけでは足りないのか">
            {"4.1 なぜログだけでは足りないのか"}
        </h3>
        <ul>
            <li>
                {" テストログは、テストステップ・操作・期待される応答といった"}
                <strong>
                    {"詳細"}
                </strong>
                {"を与えてくれる。 "}
            </li>
            <li>
                {"しかし、ログだけでは"}
                <strong>
                    {"全体の結果の概観"}
                </strong>
                {"は得られない。"}
            </li>
            <li>
                {" そこで、テストスイートの実行後に"}
                <strong>
                    {"簡潔なテスト進捗レポート"}
                </strong>
                {"を作成し、公開する。レポートジェネレーターを使うことができる。 "}
            </li>
        </ul>
        <h3 id="42-レポートの内容">
            {"4.2 レポートの内容"}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"必須の内容"}
                        </th>
                        <th>
                            {"説明"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"テスト結果"}
                        </td>
                        <td>
                            {"どのテストが失敗し、その理由は何か"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"SUT 情報"}
                        </td>
                        <td>
                            {"どのバージョン・構成の SUT をテストしたか"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"テスト環境の記録"}
                        </td>
                        <td>
                            {"どの環境でテストを実行したか"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"実行履歴と担当者"}
                        </td>
                        <td>
                            {" 一般に、そのテストを作成または最後に更新した人。原因調査、欠陥起票、修正のフォローアップ、修正確認を担当 "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAF 構成要素の診断"}
                        </td>
                        <td>
                            {"レポートは TAF 自体の不具合の診断にも使う"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ChapterDiagram id="mermaid-diagram-9" />
        <h3 id="43-レポートの作成から公開までの流れ">
            {" 4.3 レポートの作成から公開までの流れ "}
        </h3>
        <ChapterDiagram id="mermaid-diagram-10" />
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"公開の選択肢"}
                        </th>
                        <th>
                            {"補足"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"Web サイトへのアップロード"}
                        </td>
                        <td>
                            {"クラウド上でもオンプレミスでもよい"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"メーリングリストへの送信"}
                        </td>
                        <td>
                            {"購読者にメールで届く"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"他ツールへのアップロード"}
                        </td>
                        <td>
                            {"テスト管理ツールなど"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"チャットへの投稿"}
                        </td>
                        <td>
                            {" チャットボットによるメッセージ投稿。購読すれば、レポートがレビュー・分析される可能性が高まる "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            <strong>
                {"履歴の活用"}
            </strong>
            {"：SUT の問題のある部分を特定し、テストレポートの履歴を保管すると、頻繁に回帰（リグレッション）するテストケースやテストスイートの統計を集めて"}
            <strong>
                {"傾向分析"}
            </strong>
            {"ができます。 "}
        </p>
        <h3 id="44-関係者ごとの関心">
            {"4.4 関係者ごとの関心"}
        </h3>
        <p>
            {"シラバスは報告先を3種類に分けています。"}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"区分"}
                        </th>
                        <th>
                            {"典型的な役割"}
                        </th>
                        <th>
                            {"主な関心"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"管理層（Management）"}
                        </td>
                        <td>
                            {" ソリューション／エンタープライズアーキテクト、プロジェクト／デリバリーマネージャー、プログラムマネージャー、テストマネージャー、テストディレクター "}
                        </td>
                        <td>
                            <strong>
                                {"傾向"}
                            </strong>
                            {"：前回実行からの追加テストケース数、合否比率の変化、TAS と SUT の信頼性 "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"運用層（Operational）"}
                        </td>
                        <td>
                            {" プロダクトオーナー／マネージャー、ビジネス担当者、ビジネスアナリスト "}
                        </td>
                        <td>
                            <strong>
                                {"製品の利用に関連するメトリクス"}
                            </strong>
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"技術層（Technical）"}
                        </td>
                        <td>
                            {" チームリーダー、スクラムマスター、Web 管理者、DB 開発者／管理者、テストリーダー、TAE、テスター、開発者 "}
                        </td>
                        <td>
                            <strong>
                                {"低レベルの詳細"}
                            </strong>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ChapterDiagram id="mermaid-diagram-11" />
        <div className="callout-practice">
            <div className="callout-head">
                <span className="callout-icon">
                    {"💡"}
                </span>
                <span className="callout-title">
                    {"ベストプラクティス：受け手に合わせた出し分け"}
                </span>
            </div>
            <div className="callout-body">
                <ul>
                    <li>
                        {" 元になるデータは1つにして、"}
                        <strong>
                            {"見せ方を受け手ごとに変える"}
                        </strong>
                        {"（データの二重管理を避ける）。 "}
                    </li>
                    <li>
                        {" 管理層向けは「信号機＋傾向グラフ」、技術層向けは「失敗テストの一覧＋ログ・スクリーンショットへのリンク」のように構成する。 "}
                    </li>
                </ul>
            </div>
        </div>
        <h3 id="45-ダッシュボード">
            {"4.5 ダッシュボード"}
        </h3>
        <p>
            {" 最新のレポートツールは、ダッシュボード、カラフルなグラフ、詳細なログの収集、テストログの自動分析などを提供します。 "}
        </p>
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
                            {"集約できるデータ源"}
                        </td>
                        <td>
                            {" パイプライン実行のテストログ、プロジェクト管理ツール、コードリポジトリなど "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"見えるようになる傾向"}
                        </td>
                        <td>
                            {" 欠陥のクラスター、特定のテスト環境への欠陥の伝播の増減、SUT の性能劣化、ビルドの信頼性 "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"効果"}
                        </td>
                        <td>
                            {"関係者が傾向を見て判断できる"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="46-ai機械学習によるテストログ分析">
            {"4.6 AI／機械学習によるテストログ分析"}
        </h3>
        <p>
            {" 近年、機械学習（ML）アルゴリズムを含む、またはそれに基づくテスト自動化ツールがあります。大量のテストログの自動分析は、TAE の次の作業時間を減らします。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"AI／ML が支援すること"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"壊れたロケーターの検出"}
                        </td>
                        <td>
                            {"探す時間の削減"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"失敗原因の分析"}
                        </td>
                        <td>
                            {"SUT の欠陥か TAS の欠陥かの判別"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"共通の欠陥のグルーピング"}
                        </td>
                        <td>
                            {"テストレポート用の集約"}
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
                    {" AI の分析結果は「候補」として扱い、最終判断は TAE が根拠ログで確認する運用が安全です。（これは実務上の推奨であり、シラバスの記述ではありません。） "}
                </p>
            </div>
        </div>
        <h3 id="47-メトリクスの例実務上の整理">
            {"4.7 メトリクスの例（実務上の整理）"}
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
                    {" シラバス第6章は具体的なメトリクス一覧を規定していません。以下は、シラバスの記述（合否比率、追加テストケース数、信頼性、性能劣化など）に沿った"}
                    <strong>
                        {"実務上の例"}
                    </strong>
                    {"です。 "}
                </p>
            </div>
        </div>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"メトリクスの例"}
                        </th>
                        <th>
                            {"何がわかるか"}
                        </th>
                        <th>
                            {"主な受け手"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"合格率（pass rate）の推移"}
                        </td>
                        <td>
                            {"品質と変更の影響の傾向"}
                        </td>
                        <td>
                            {"管理層"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"前回実行からの追加テストケース数"}
                        </td>
                        <td>
                            {"自動化の進み具合"}
                        </td>
                        <td>
                            {"管理層"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAS failure の割合"}
                        </td>
                        <td>
                            {"TAS の信頼性"}
                        </td>
                        <td>
                            {"管理層、技術層"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"実行時間"}
                        </td>
                        <td>
                            {"自動テストの効率、規模の適正"}
                        </td>
                        <td>
                            {"技術層"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"頻繁に失敗するテスト（回帰の多いテスト）"}
                        </td>
                        <td>
                            {"問題のある SUT 領域、またはテストの脆さ"}
                        </td>
                        <td>
                            {"技術層"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"欠陥のクラスター"}
                        </td>
                        <td>
                            {"欠陥が集中している領域"}
                        </td>
                        <td>
                            {"運用層、技術層"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="48-この節のベストプラクティス">
            {"4.8 この節のベストプラクティス"}
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
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"レポートの構成"}
                        </td>
                        <td>
                            {"結果、SUT 情報、環境情報を必ず含める"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"担当者"}
                        </td>
                        <td>
                            {" 各失敗の担当者を明確にし、起票から修正確認までのフォローを任せる "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"公開"}
                        </td>
                        <td>
                            {"購読可能な形（メール、チャット、テスト管理ツール）で届ける"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"履歴"}
                        </td>
                        <td>
                            {"レポート履歴を保管し、傾向分析に使う"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"出し分け"}
                        </td>
                        <td>
                            {"管理層は傾向、運用層は利用メトリクス、技術層は詳細"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ダッシュボード"}
                        </td>
                        <td>
                            {"複数のデータ源を集約して傾向を可視化"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"AI／ML"}
                        </td>
                        <td>
                            {"ロケーター破損の検出や失敗のグルーピングに活用"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr />
    </>;
}
