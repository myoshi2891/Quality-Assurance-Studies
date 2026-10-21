import React from 'react';
import ChapterDiagram from './ChapterDiagram';
import CodeExample from './CodeExample';

export default function TechnicalImprovements() {
    return <>
        <h2 id="3-812-導入済み-tas-の技術的側面を分析し改善を提案するk4">
            {" 3. 8.1.2 導入済み TAS の技術的側面を分析し改善を提案する（K4） "}
        </h2>
        <h3 id="31-まず押さえる考え方">
            {"3.1 まず押さえる考え方"}
        </h3>
        <ul>
            <li>
                {" 日々のメンテナンス（SUT の変更に TAS を追従させる作業）とは別に、TAS には改善の余地がたくさんあります。 "}
            </li>
            <li>
                {" 改善の目的は、効率（手作業の削減）、使いやすさ、機能追加、テスト支援の向上など。 "}
            </li>
            <li>
                {" どの改善を行うかは、「プロジェクトにとって最も価値の高い機能は何か」で決めます。 "}
            </li>
        </ul>
        <h3 id="32-改善を検討する-9-つの領域">
            {"3.2 改善を検討する 9 つの領域"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="32-改善を検討する-9-つの領域">
                <thead>
                    <tr className="header">
                        <th>
                            {"#"}
                        </th>
                        <th>
                            {"領域"}
                        </th>
                        <th>
                            {"一言でいうと"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"1"}
                        </td>
                        <td>
                            {"Scripting"}
                        </td>
                        <td>
                            {"スクリプト手法の見直しと実装の改善"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {"Test execution"}
                        </td>
                        <td>
                            {"実行時間の短縮・並列化・スケジューリング"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {"Verification"}
                        </td>
                        <td>
                            {"検証（assertion）処理の標準化"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {"TAA"}
                        </td>
                        <td>
                            {"SUT のテスト容易性向上に合わせたアーキテクチャ変更"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"5"}
                        </td>
                        <td>
                            {"TAF"}
                        </td>
                        <td>
                            {"コアライブラリのバージョンアップ管理"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"6"}
                        </td>
                        <td>
                            {"Setup and teardown"}
                        </td>
                        <td>
                            {"繰り返し処理の集約"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"7"}
                        </td>
                        <td>
                            {"Documentation"}
                        </td>
                        <td>
                            {"自動化コード・TAS 利用者向け・レポート／ログの文書"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"8"}
                        </td>
                        <td>
                            {"TAS features"}
                        </td>
                        <td>
                            {"使われる機能だけを追加"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"9"}
                        </td>
                        <td>
                            {"TAF updates and upgrades"}
                        </td>
                        <td>
                            {"ツールの更新前にサンプルテストで確認"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-6" />
        </div>
        <h3 id="33-領域①-scriptingスクリプティング">
            {" 3.3 領域① Scripting（スクリプティング） "}
        </h3>
        <h4 id="331-スクリプト手法をアップグレードする">
            {" 3.3.1 スクリプト手法をアップグレードする "}
        </h4>
        <p>
            {"第3章で学んだ手法の進化の方向です。"}
        </p>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-7" />
        </div>
        <div className="table-scroll">
            <table aria-labelledby="331-スクリプト手法をアップグレードする">
                <thead>
                    <tr className="header">
                        <th>
                            {"選択肢"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"新規テストのみ新手法にする"}
                        </td>
                        <td>
                            {"移行コストを抑えられる"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"既存テストにも新手法を適用する（後付け）"}
                        </td>
                        <td>
                            {" 全部が難しければ、保守工数が最も大きいテストだけでも対象にする "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 id="332-実装面の改善3つの例">
            {"3.3.2 実装面の改善（3つの例）"}
        </h4>
        <p>
            <strong>
                {"（1）テストスクリプト／ケース／ステップの重複を統合する"}
            </strong>
        </p>
        <ul>
            <li>
                {"似た操作の並びを何度も実装しない。"}
            </li>
            <li>
                {" 共通のステップを関数化してライブラリに追加し、複数のテストで再利用する。 "}
            </li>
            <li>
                {" 同一ではなく「似ている」場合はパラメータ化する（キーワード駆動テストでよく使う考え方）。 "}
            </li>
        </ul>
        <div className="table-scroll">
            <table>
                <caption className="sr-only">
                    {"3.3.2（1）重複統合の Before／After"}
                </caption>
                <thead>
                    <tr className="header">
                        <th>
                            {"Before"}
                        </th>
                        <th>
                            {"After"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"ログイン手順を 30 本のテストに個別コピー"}
                        </td>
                        <td>
                            <code>
                                {"login(user, password)"}
                            </code>
                            {" を 1 か所に定義し、30 本から呼ぶ "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"「一般ユーザー用」「管理者用」で別関数"}
                        </td>
                        <td>
                            <code>
                                {"login(user, password)"}
                            </code>
                            {" に引数でユーザー種別を渡す "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            <strong>
                {"（2）失敗からの復旧手順（failure recovery）を用意する"}
            </strong>
        </p>
        <ul>
            <li>
                {" スイート実行中に失敗しても、TAS が復旧して次のテストを続けられるようにする。 "}
            </li>
            <li>
                {" SUT 側の失敗では、可能かつ現実的なら SUT の復旧操作（例：再起動）を TAS が行う。 "}
            </li>
        </ul>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-8" />
        </div>
        <p>
            <strong>
                {"（3）待機方式（wait mechanism）を見直す"}
            </strong>
        </p>
        <p>
            {"3つの方式を比較します。試験頻出です。"}
        </p>
        <div className="table-scroll">
            <table>
                <caption className="sr-only">
                    {"3.3.2（3）待機方式 3 種の比較"}
                </caption>
                <thead>
                    <tr className="header">
                        <th>
                            {"方式"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                        <th>
                            {"長所"}
                        </th>
                        <th>
                            {"短所・注意"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"① 固定待機（hard coded wait）"}
                        </td>
                        <td>
                            {"決まったミリ秒だけ待つ"}
                        </td>
                        <td>
                            {"実装が簡単"}
                        </td>
                        <td>
                            {" ソフトウェアの応答時間は予測しにくく、自動化の欠陥の原因になりやすい "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"② ポーリングによる動的待機"}
                        </td>
                        <td>
                            {"状態変化や動作の完了を繰り返し確認する"}
                        </td>
                        <td>
                            {" 必要な時間だけ待つので時間の無駄がない。想定より遅くても条件成立まで待てる "}
                        </td>
                        <td>
                            {"タイムアウト必須（欠陥があると永遠に待つため）"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"③ イベント購読"}
                        </td>
                        <td>
                            {"SUT のイベント機構を購読する"}
                        </td>
                        <td>
                            {"①②より信頼性が高い"}
                        </td>
                        <td>
                            {" スクリプト言語がイベント購読に対応し、SUT がイベントを提供する必要あり。タイムアウト必須 "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            {"コード例（Selenium の明示的待機。ポーリングの考え方）"}
        </p>
        <CodeExample index={2} />
        <blockquote className="callout-note">
            <div className="callout-icon">
                {"💡"}
            </div>
            <p>
                {" 覚え方：信頼性は「固定待機 < ポーリング < イベント購読」。ただし②③は必ずタイムアウトを付ける。 "}
            </p>
        </blockquote>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-9" />
        </div>
        <h3 id="34-領域②-test-executionテスト実行">
            {" 3.4 領域② Test execution（テスト実行） "}
        </h3>
        <h4 id="341-課題リグレッションが時間内に終わらない">
            {" 3.4.1 課題：リグレッションが時間内に終わらない "}
        </h4>
        <div className="table-scroll">
            <table aria-labelledby="341-課題リグレッションが時間内に終わらない">
                <thead>
                    <tr className="header">
                        <th>
                            {"対策"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                        <th>
                            {"制約・注意"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"複数環境で並行実行"}
                        </td>
                        <td>
                            {"別々のテスト環境で同時にテストする"}
                        </td>
                        <td>
                            {"可能な場合のみ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"スイートの分割"}
                        </td>
                        <td>
                            {"一定時間内（例：一晩）に収まるよう複数部分に分割"}
                        </td>
                        <td>
                            {" 高価なシステムを使い、単一ターゲットでしか実行できない場合に有効 "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"重複の排除"}
                        </td>
                        <td>
                            {"自動化カバレッジを分析して重複を見つけ、除く"}
                        </td>
                        <td>
                            {"実行時間の短縮とさらなる効率化につながる"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"CI/CD でバッチジョブを並列実行"}
                        </td>
                        <td>
                            {"実行時間を最適化"}
                        </td>
                        <td>
                            {"良い実践として示されている"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"パイプラインのスケジュール実行"}
                        </td>
                        <td>
                            {"例：毎朝決まった時刻に実行"}
                        </td>
                        <td>
                            {"手作業とやり取りを減らし、開発を速める"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 id="342-github-actions-での実装例考え方の理解用">
            {" 3.4.2 GitHub Actions での実装例（考え方の理解用） "}
        </h4>
        <CodeExample index={3} />
        <h4 id="343-ベストプラクティス">
            {"3.4.3 ベストプラクティス"}
        </h4>
        <div className="table-scroll">
            <table aria-labelledby="343-ベストプラクティス">
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
                            {"まず重複の排除から着手する（並列化の前に総量を減らす）"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {"分割後も各部分の実行時間を計測して偏りを直す"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {" 並列化するテストは相互に独立させる（共有データに依存しない） "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {" 朝に結果が見えるよう夜間実行にする（第5章の nightly regression と連動） "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="35-領域③-verification検証">
            {"3.5 領域③ Verification（検証）"}
        </h3>
        <ul>
            <li>
                {" 新しい検証関数を作る前に、全テストで使う標準の検証方法のセットを採用する。 "}
            </li>
            <li>
                {"これにより、複数テストで検証処理の再実装を避けられる。"}
            </li>
            <li>
                {" 検証方法が「同一ではないが似ている」場合は、パラメータ化で1つの関数を複数種類のオブジェクトに使えるようにする。 "}
            </li>
        </ul>
        <div className="table-scroll">
            <table aria-labelledby="35-領域③-verification検証">
                <thead>
                    <tr className="header">
                        <th>
                            {"Before"}
                        </th>
                        <th>
                            {"After"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"テストごとに独自の「表示確認」処理"}
                        </td>
                        <td>
                            {" 標準の "}
                            <code>
                                {"verify_visible(element)"}
                            </code>
                            {" を全テストで共通利用 "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"入力欄用・ドロップダウン用・ボタン用で別々の検証関数"}
                        </td>
                        <td>
                            {"対象タイプを引数にした共通検証関数"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="36-領域④-taaテスト自動化アーキテクチャ">
            {" 3.6 領域④ TAA（テスト自動化アーキテクチャ） "}
        </h3>
        <h4 id="361-内容">
            {"3.6.1 内容"}
        </h4>
        <ul>
            <li>
                {" SUT のテスト容易性（testability）を高めるために、SUT のアーキテクチャと TAS の TAA の両方を変える場合がある。 "}
            </li>
            <li>
                {"大きな改善につながるが、SUT／TAS への大きな変更と投資が必要になりうる。"}
            </li>
            <li>
                {" 例：SUT がテスト用の API を提供するように変わるなら、TAS もそれに合わせてリファクタリングする。 "}
            </li>
        </ul>
        <h4 id="362-重要ポイント">
            {"3.6.2 重要ポイント"}
        </h4>
        <blockquote className="callout-note">
            <div className="callout-icon">
                {"💡"}
            </div>
            <p>
                {" 後から追加すると高くつく。テスト容易性の機能は、テスト自動化の開始時点、および SUT の SDLC の早い段階から考えるのがはるかに良い。 "}
            </p>
        </blockquote>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-10" />
        </div>
        <p>
            {" 関連：第2章の「観測可能性（Observability）」「制御可能性（Controllability）」「アーキテクチャの透明性」。 "}
        </p>
        <h3 id="37-領域⑤-tafコアライブラリのバージョンアップ">
            {" 3.7 領域⑤ TAF（コアライブラリのバージョンアップ） "}
        </h3>
        <p>
            {" 第3章のレイヤー構成（テストスクリプト層 / ビジネスロジック層 / コアライブラリ層）が前提です。 "}
        </p>
        <h4 id="371-課題">
            {"3.7.1 課題"}
        </h4>
        <p>
            {" コアライブラリにメジャーアップデートが出ても、最新版をすぐに TAF の依存関係に指定すると、多くのチームのテストが壊れるおそれがあります。 "}
        </p>
        <h4 id="372-推奨する進め方">
            {"3.7.2 推奨する進め方"}
        </h4>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-11" />
        </div>
        <div className="table-scroll">
            <table aria-labelledby="372-推奨する進め方">
                <thead>
                    <tr className="header">
                        <th>
                            {"方法"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                        <th>
                            {"向いている状況"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"同時採用"}
                        </td>
                        <td>
                            {" コアライブラリ層のビルドファイルの依存関係を更新し、全チームが同時に新版へ "}
                        </td>
                        <td>
                            {"チーム間の足並みを揃えやすいとき"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"個別採用"}
                        </td>
                        <td>
                            {"各チームがビジネスロジック層で更新時期を決める"}
                        </td>
                        <td>
                            {" チームごとに事情が違うとき。最終的に全チーム準備完了後、コアライブラリ層を更新 "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="38-領域⑥-setup-and-teardownセットアップとティアダウン">
            {" 3.8 領域⑥ Setup and teardown（セットアップとティアダウン） "}
        </h3>
        <ul>
            <li>
                {" 各テストスクリプトやテストスイートの前後で繰り返される操作・設定は、setup／teardown メソッドに移す。 "}
            </li>
            <li>
                {"変更があっても1 か所の修正で済むため、保守工数が減る。"}
            </li>
            <li>
                {" 例：UI テストの前提条件・後始末に Web サービス呼び出しを使う（ユーザー登録、ユーザー削除、プロフィール設定など）。 "}
            </li>
        </ul>
        <p>
            <strong>
                {"pytest のフィクスチャの例"}
            </strong>
        </p>
        <CodeExample index={4} />
        <div className="table-scroll">
            <table aria-labelledby="38-領域⑥-setup-and-teardownセットアップとティアダウン">
                <thead>
                    <tr className="header">
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
                            {"前提条件は API で作る（可能な場合）"}
                        </td>
                        <td>
                            {"UI 操作より速く、UI 変更の影響も受けにくい"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"teardown はテストが失敗しても必ず実行される仕組みにする"}
                        </td>
                        <td>
                            {"データが残ると次のテストに影響する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"setup／teardown の処理は 1 か所に集約"}
                        </td>
                        <td>
                            {"変更箇所を最小にできる"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="39-領域⑦-documentationドキュメント">
            {" 3.9 領域⑦ Documentation（ドキュメント） "}
        </h3>
        <p>
            {"対象は次のすべてです。"}
        </p>
        <div className="table-scroll">
            <table aria-labelledby="39-領域⑦-documentationドキュメント">
                <thead>
                    <tr className="header">
                        <th>
                            {"種類"}
                        </th>
                        <th>
                            {"内容の例"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"自動化コードの文書"}
                        </td>
                        <td>
                            {"コードが何をするか、どう使うか"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAS の利用者向け文書"}
                        </td>
                        <td>
                            {"TAS を使う人のためのガイド"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"テストレポート・テストログ"}
                        </td>
                        <td>
                            {"TAS が出力するもの"}
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
                {" 改善の観点：文書が古くなっていないか、新メンバーが読んで使い始められるか、レポート・ログが分析に十分な情報を含んでいるか。 "}
            </p>
        </blockquote>
        <h3 id="310-領域⑧-tas-featurestas-の機能">
            {"3.10 領域⑧ TAS features（TAS の機能）"}
        </h3>
        <ul>
            <li>
                {"追加候補：詳細なテストレポート、テストログ、他システムとの連携など。"}
            </li>
            <li>
                {"使われる機能だけを追加する。"}
            </li>
            <li>
                {"使われない機能を増やすと、複雑さが増し、信頼性と保守性が下がる。"}
            </li>
        </ul>
        <div className="table-scroll">
            <table aria-labelledby="310-領域⑧-tas-featurestas-の機能">
                <thead>
                    <tr className="header">
                        <th>
                            {"追加してよい機能"}
                        </th>
                        <th>
                            {"追加を控えるべき機能"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"利用者・ステークホルダーが実際に使う"}
                        </td>
                        <td>
                            {"「あったら便利かも」という想定だけ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"課題（例：原因調査に時間がかかる）を解決する"}
                        </td>
                        <td>
                            {"誰も使わないダッシュボード"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="311-領域⑨-taf-updates-and-upgradestaf-の更新アップグレード">
            {" 3.11 領域⑨ TAF updates and upgrades（TAF の更新・アップグレード） "}
        </h3>
        <ul>
            <li>
                {"新バージョンで新機能が使える、または不具合が修正される利点がある。"}
            </li>
            <li>
                {" リスク：既存ツールのアップグレードや新ツールの導入が、既存テストに悪影響を与える可能性がある。 "}
            </li>
            <li>
                {"対策：本番展開の前に、最新版ツールでサンプルテストを実行する。"}
            </li>
            <li>
                {"サンプルテストは、次を代表するものにする。"}
            </li>
        </ul>
        <div className="table-scroll">
            <table aria-labelledby="311-領域⑨-taf-updates-and-upgradestaf-の更新アップグレード">
                <thead>
                    <tr className="header">
                        <th>
                            {"サンプルテストが代表すべき対象"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"異なる SUT"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"異なるテストタイプ"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"（適切なら）異なるテスト環境"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="mermaid-container">
            <ChapterDiagram id="mmd-12" />
        </div>
    </>;
}
