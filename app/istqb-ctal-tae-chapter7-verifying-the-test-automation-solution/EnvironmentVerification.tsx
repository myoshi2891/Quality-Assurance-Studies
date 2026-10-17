import React from 'react';
import ChapterDiagram from './ChapterDiagram';

import CodeExample from './CodeExample';

export default function EnvironmentVerification() {
    return <>
        <h2 id="3-711-テスト自動化環境ツールのセットアップを含むの検証を計画するk3">
            {" 3. 7.1.1 テスト自動化環境（ツールのセットアップを含む）の検証を計画する（K3） "}
        </h2>
        <h3 id="31-なぜ環境の検証が必要か">
            {"3.1 なぜ環境の検証が必要か"}
        </h3>
        <p>
            {" シラバスは、TAS の環境やコンポーネントが期待どおり動くかは"}
            <strong>
                {"必ず検証が必要"}
            </strong>
            {"で、これらのチェックは例えば"}
            <strong>
                {"テスト自動化を始める前"}
            </strong>
            {"に行うと述べています。K3（適用）なので、「用語を知っている」だけでなく、"}
            <strong>
                {"与えられた状況に対して検証計画を組み立てられること"}
            </strong>
            {"が求められます。 "}
        </p>
        <p>
            {"シラバスが挙げる検証の観点は次の4つです。"}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"#"}
                        </th>
                        <th>
                            {"検証観点（シラバスの見出し）"}
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
                            {" テストツールのインストール、セットアップ、構成、カスタマイズ "}
                        </td>
                        <td>
                            {"ツールが正しく入り、正しく設定されているか"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {"テスト環境のセットアップ／ティアダウンの再現性"}
                        </td>
                        <td>
                            {"何度作り直しても同じ状態になるか"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {"内部・外部システム／インターフェースとの接続性"}
                        </td>
                        <td>
                            {"SUT や周辺システムにつながるか"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {"TAF コンポーネントのテスト"}
                        </td>
                        <td>
                            {"自動化の部品自体にバグがないか"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="32-検証の進め方全体フロー">
            {"3.2 検証の進め方（全体フロー）"}
        </h3>
        <div className="mermaid-container">
            <ChapterDiagram id="mermaid-diagram-2" />
        </div>
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
                    {" 上図は理解のための整理です。シラバスは4項目を列挙しており、番号順の実施を義務づけてはいません。実際には CI/CD パイプラインに組み込み、環境を作るたびに繰り返し実行します。 "}
                </p>
            </div>
        </div>
        <h3 id="33-観点1テストツールのインストールセットアップ構成カスタマイズ">
            {" 3.3 観点1：テストツールのインストール・セットアップ・構成・カスタマイズ "}
        </h3>
        <h4 id="何を確認するか">
            {"何を確認するか"}
        </h4>
        <p>
            {" TAS は多くのコンポーネントで構成されます。シラバスは、中核として次を挙げています。 "}
        </p>
        <ul>
            <li>
                {"実行可能コンポーネント"}
            </li>
            <li>
                {"対応する関数ライブラリ"}
            </li>
            <li>
                {"支えるデータ・設定ファイル"}
            </li>
        </ul>
        <p>
            {" セットアップの方法は「自動インストールスクリプト」から「手作業でフォルダにファイルを置く」まで幅があります。また、テストツールも OS などと同様にサービスパックがあったり、SUT 環境との互換性のために"}
            <strong>
                {"オプションまたは必須のアドイン"}
            </strong>
            {"が必要だったりします。 "}
        </p>
        <h4 id="自動インストールやリポジトリからのコピーの利点">
            {" 自動インストールやリポジトリからのコピーの利点 "}
        </h4>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"利点"}
                        </th>
                        <th>
                            {"説明"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"同一バージョンの保証"}
                        </td>
                        <td>
                            {" 異なる SUT でのテストを、同じバージョンの TAS で実施したことを担保できる "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"同一構成の保証"}
                        </td>
                        <td>
                            {"同じ TAS 構成で実施したことを担保できる（適切な場合）"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"アップグレードの一元化"}
                        </td>
                        <td>
                            {"TAS のアップグレードをリポジトリ経由で行える"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            {" シラバスは、リポジトリの使い方と新バージョンへのアップグレード手順を"}
            <strong>
                {"標準的な開発ツールと同じにすべき"}
            </strong>
            {"としています。 "}
        </p>
        <h4 id="具体例補足">
            {"具体例（補足）"}
        </h4>
        <p>
            {"以下は理解のための例です（シラバスの記述ではありません）。"}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"やりたいこと"}
                        </th>
                        <th>
                            {"手段の例"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"ツールのバージョンを固定する"}
                        </td>
                        <td>
                            {" 依存関係のロックファイル（package-lock.json、requirements.txt にバージョン固定など） "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ブラウザとドライバの組み合わせを揃える"}
                        </td>
                        <td>
                            {" コンテナイメージにブラウザとドライバを同梱し、イメージのタグで固定する "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"設定を環境ごとに切り替える"}
                        </td>
                        <td>
                            {" 環境変数や設定ファイルを環境別に用意し、リポジトリで管理する "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="callout callout-practice">
            <div className="callout-header">
                <span className="callout-icon">
                    {"💡"}
                </span>
                <span className="callout-label">
                    {"ベストプラクティス（インストール・構成）"}
                </span>
            </div>
            <div className="callout-body">
                <ul>
                    <li>
                        {" TAS のバージョンと構成をリポジトリで管理し、手作業のインストールを避ける "}
                    </li>
                    <li>
                        {" 「ツールのバージョン」「アドインの有無」「設定値」を一覧にして文書化する "}
                    </li>
                    <li>
                        {" アップグレードは開発ツールと同じ手順（レビュー、段階的展開）で行う "}
                    </li>
                </ul>
            </div>
        </div>
        <h3 id="34-観点2テスト環境のセットアップティアダウンの再現性">
            {" 3.4 観点2：テスト環境のセットアップ／ティアダウンの再現性 "}
        </h3>
        <h4 id="何を確認するか-1">
            {"何を確認するか"}
        </h4>
        <p>
            {" TAS は、さまざまなシステム、サーバー、そして CI/CD パイプラインの上で動きます。どの環境でも正しく動くために、TAS を"}
            <strong>
                {"環境へ読み込み、取り除く体系的な方法"}
            </strong>
            {"が必要です。 "}
        </p>
        <p>
            {" シラバスは、この再現性が達成された状態を、"}
            <strong>
                {"TAS を構築・再構築しても、複数のテスト環境の内外で動作に目立った差がないこと"}
            </strong>
            {"と説明しています。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"達成すべきこと"}
                        </th>
                        <th>
                            {"シラバスの根拠"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"構成管理で「決まった構成を確実に作れる」ようにする"}
                        </td>
                        <td>
                            {" TAS コンポーネントの構成管理により、所定の構成を確実に作成できる "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"コンポーネントを文書化する"}
                        </td>
                        <td>
                            {" SUT 環境が変わったとき、TAS のどこに影響し、どこを変える必要があるかが分かる "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 id="再現性の確認方法補足">
            {"再現性の確認方法（補足）"}
        </h4>
        <div className="mermaid-container">
            <ChapterDiagram id="mermaid-diagram-3" />
        </div>
        <p>
            {" 「手順書どおり」ではなく、"}
            <strong>
                {"スクリプトなどで機械的に何度でも作り直せる"}
            </strong>
            {"状態が理想です。差が出る原因の多くは、手作業の設定、バージョンを固定していない依存関係、環境に残った前回のデータです。 "}
        </p>
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
                        {"環境の構築と破棄を自動化し、毎回同じ手順で実行する"}
                    </li>
                    <li>
                        {"「作って壊して作り直す」を実際に試して、結果の差を確認する"}
                    </li>
                    <li>
                        {" 環境に依存する値（URL、認証情報など）はコードに埋め込まず、構成管理する "}
                    </li>
                </ul>
            </div>
        </div>
        <h3 id="35-観点3内部外部システムインターフェースとの接続性">
            {" 3.5 観点3：内部・外部システム／インターフェースとの接続性 "}
        </h3>
        <h4 id="何を確認するか-2">
            {"何を確認するか"}
        </h4>
        <p>
            {" TAS を SUT 環境にインストールしたら、SUT を使う前に、内部システム、外部システム、インターフェースへの接続が可能かを確認する"}
            <strong>
                {"一連のチェック（事前条件）"}
            </strong>
            {"を実施します。シラバスは次を良い習慣として挙げています。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"チェック項目"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"サーバーへのログイン"}
                        </td>
                        <td>
                            {"必要なサーバーにログインできる"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ツールの起動"}
                        </td>
                        <td>
                            {"テスト自動化ツールを起動できる"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"SUT へのアクセス"}
                        </td>
                        <td>
                            {"ツールから SUT にアクセスできる"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"設定の目視確認"}
                        </td>
                        <td>
                            {"構成設定を手動で確認する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"権限の確認"}
                        </td>
                        <td>
                            {" テストログとテストレポートを、システム間で出力・共有するための権限が正しい "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            {" シラバスは、このように"}
            <strong>
                {"テスト自動化の事前条件を確立することが、TAS が正しくインストール・構成されたことを保証するために不可欠"}
            </strong>
            {"だと述べています。 "}
        </p>
        <h4 id="事前チェックの流れ補足">
            {"事前チェックの流れ（補足）"}
        </h4>
        <div className="mermaid-container">
            <ChapterDiagram id="mermaid-diagram-4" />
        </div>
        <h4 id="コード例補足pytest-による事前チェック">
            {" コード例（補足）：pytest による事前チェック "}
        </h4>
        <CodeExample index={0} />
        <p>
            {" 事前チェックが失敗したときに、個々のテストが大量に失敗する状況を避けられます。これは第6章で学んだ「テスト環境が利用できないと、すべてのテストが同じ原因で失敗する、または一部が本物の失敗のように見える」問題への対策にもなります。 "}
        </p>
        <h4 id="cicd-での組み込み例補足">
            {"CI/CD での組み込み例（補足）"}
        </h4>
        <CodeExample index={1} />
        <div className="callout callout-practice">
            <div className="callout-header">
                <span className="callout-icon">
                    {"💡"}
                </span>
                <span className="callout-label">
                    {"ベストプラクティス（接続性）"}
                </span>
            </div>
            <div className="callout-body">
                <ul>
                    <li>
                        {" 本実行の前に「事前チェック専用のジョブまたはテスト」を置き、失敗したら本実行を止める "}
                    </li>
                    <li>
                        {" 到達性、認証、権限、ログ出力先の書き込みを最小限の操作で確認する "}
                    </li>
                    <li>
                        {" 事前チェックの結果もログに残し、環境障害とテスト失敗を切り分けやすくする "}
                    </li>
                </ul>
            </div>
        </div>
        <h3 id="36-観点4taf-コンポーネントのテスト">
            {" 3.6 観点4：TAF コンポーネントのテスト "}
        </h3>
        <h4 id="何を確認するか-3">
            {"何を確認するか"}
        </h4>
        <p>
            {" TAS も一種のソフトウェア開発です。シラバスは、"}
            <strong>
                {"TAF の各コンポーネントも、通常の開発プロジェクトと同様に個別にテスト・検証する"}
            </strong>
            {"必要があると述べています。機能テストだけでなく、非機能テストも対象です。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"種類"}
                        </th>
                        <th>
                            {"例（シラバスの記述に基づく）"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"機能テスト"}
                        </td>
                        <td>
                            {" GUI のオブジェクト検証コンポーネントを、幅広いオブジェクトクラスでテストし、正しく検証できることを確認する "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"機能テスト"}
                        </td>
                        <td>
                            {" テストログとテストレポートが、テスト自動化の状態と SUT の振る舞いを正確に出力することを確認する "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"非機能テスト"}
                        </td>
                        <td>
                            {"TAF の性能劣化を把握する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"非機能テスト"}
                        </td>
                        <td>
                            {" システムリソースの使用状況から、メモリリークなどの欠陥の兆候を見つける "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"非機能テスト"}
                        </td>
                        <td>
                            {"TAF 内外のコンポーネント間の相互運用性の欠如を確認する"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 id="具体例補足-1">
            {"具体例（補足）"}
        </h4>
        <div className="mermaid-container">
            <ChapterDiagram id="mermaid-diagram-5" />
        </div>
        <div className="callout callout-practice">
            <div className="callout-header">
                <span className="callout-icon">
                    {"💡"}
                </span>
                <span className="callout-label">
                    {"ベストプラクティス（TAF コンポーネントテスト）"}
                </span>
            </div>
            <div className="callout-body">
                <ul>
                    <li>
                        {" コアライブラリ（SUT に依存しない部品）には単体テストを書き、ビルドのたびに実行する "}
                    </li>
                    <li>
                        {" 検証用の関数（オブジェクト検証など）は、代表的な複数パターンで動作を確認する "}
                    </li>
                    <li>
                        {" 長時間の実行でメモリ使用量が増え続けないか、性能が劣化しないかも観察する "}
                    </li>
                    <li>
                        {" ログとレポートの出力内容は、期待するステータス（passed、failed、TAS failure）と一致するかを確認する "}
                    </li>
                </ul>
            </div>
        </div>
        <h3 id="37-k3-として試験に出やすい形">
            {"3.7 K3 として試験に出やすい形"}
        </h3>
        <p>
            {"K3 は「適用」なので、シナリオ問題が出ます。次のように考えると整理できます。"}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"シナリオの手がかり"}
                        </th>
                        <th>
                            {"対応する観点"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"「新しいテストサーバーに TAS を配置した」"}
                        </td>
                        <td>
                            {"インストール・構成、接続性"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"「環境を再構築したら挙動が違った」"}
                        </td>
                        <td>
                            {"再現性（構成管理・文書化）"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"「実行前にどのチェックを入れるか」"}
                        </td>
                        <td>
                            {" 接続性の事前条件（ログイン、ツール起動、SUT アクセス、権限） "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"「自動化ライブラリの部品が怪しい」"}
                        </td>
                        <td>
                            {"TAF コンポーネントテスト（機能・非機能）"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr />
    </>;
}
