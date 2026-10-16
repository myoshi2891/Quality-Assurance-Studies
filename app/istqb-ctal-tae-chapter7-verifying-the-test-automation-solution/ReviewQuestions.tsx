import React from 'react';


export default function ReviewQuestions() {
    return <>
        <h2 id="7-ベストプラクティス総まとめ">
            {"7. ベストプラクティス総まとめ"}
        </h2>
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
                            {"根拠となる章・項目"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"ツール導入"}
                        </td>
                        <td>
                            {" バージョンと構成をリポジトリで管理し、自動インストールを使う "}
                        </td>
                        <td>
                            {"7.1.1"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"環境の構築"}
                        </td>
                        <td>
                            {"構築・再構築を自動化し、差が出ないことを確認する"}
                        </td>
                        <td>
                            {"7.1.1"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"接続性"}
                        </td>
                        <td>
                            {"本実行の前に、到達性・認証・権限の事前チェックを実施する"}
                        </td>
                        <td>
                            {"7.1.1"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAF の部品"}
                        </td>
                        <td>
                            {"機能テストと非機能テスト（性能、メモリ、相互運用性）を行う"}
                        </td>
                        <td>
                            {"7.1.1"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"スイート構成"}
                        </td>
                        <td>
                            {" 期待結果、テストデータ、TAF と SUT のバージョンの完全性を確認する "}
                        </td>
                        <td>
                            {"7.1.2"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"新機能"}
                        </td>
                        <td>
                            {"TAF の新機能の初回利用は綿密に監視する"}
                        </td>
                        <td>
                            {"7.1.2"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"再現性"}
                        </td>
                        <td>
                            {"不安定なテストは外して原因分析し、直してから戻す"}
                        </td>
                        <td>
                            {"7.1.2"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"侵入性"}
                        </td>
                        <td>
                            {" TAS が SUT に与える影響を意識し、手動での再現確認を可能にする "}
                        </td>
                        <td>
                            {"7.1.2"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"予期しない結果"}
                        </td>
                        <td>
                            {"ログ、性能データ、前後処理を確認し、単独実行で切り分ける"}
                        </td>
                        <td>
                            {"7.1.3"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"アサーション"}
                        </td>
                        <td>
                            {"欠けていないかを確認する"}
                        </td>
                        <td>
                            {"7.1.3"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"静的解析"}
                        </td>
                        <td>
                            {"テスト自動化コードにも適用し、パイプラインで早期に実行する"}
                        </td>
                        <td>
                            {"7.1.4"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"秘密情報"}
                        </td>
                        <td>
                            {"平文のパスワードをコードに書かない"}
                        </td>
                        <td>
                            {"7.1.4"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr />
        <h2 id="8-試験対策ポイント">
            {"8. 試験対策ポイント"}
        </h2>
        <h3 id="81-出題の構造">
            {"8.1 出題の構造"}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"LO"}
                        </th>
                        <th>
                            {"認知レベル"}
                        </th>
                        <th>
                            {"問われやすい形"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"7.1.1"}
                        </td>
                        <td>
                            {"K3"}
                        </td>
                        <td>
                            {" 状況に対して、どの検証（インストール、再現性、接続性、TAF テスト）をどう計画するかを選ぶ "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"7.1.2"}
                        </td>
                        <td>
                            {"K2"}
                        </td>
                        <td>
                            {"スイート検証の4項目、再現性、侵入性の説明"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"7.1.3"}
                        </td>
                        <td>
                            {"K2"}
                        </td>
                        <td>
                            {"予期しない結果の原因箇所、調査方法、アサーション欠落"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"7.1.4"}
                        </td>
                        <td>
                            {"K2"}
                        </td>
                        <td>
                            {"静的解析の目的、TAF にも適用する理由、平文パスワードの例"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="82-間違えやすいポイント">
            {"8.2 間違えやすいポイント"}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"ひっかけ"}
                        </th>
                        <th>
                            {"正しい理解"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"検証対象は SUT だけ"}
                        </td>
                        <td>
                            {"第7章は TAS（環境、ツール、TAF、スイート）自体の検証"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"静的解析は SUT のコード専用"}
                        </td>
                        <td>
                            {"TAF やテスト自動化コードも対象"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"テストコードは本番に出ないから秘密情報を書いてよい"}
                        </td>
                        <td>
                            {"付随するスクリプトから漏れれば脆弱性になりうる"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"不安定なテストはスイートに残して監視すればよい"}
                        </td>
                        <td>
                            {"アクティブなスイートから外して根本原因を別に分析する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"失敗したテストだけを調べればよい"}
                        </td>
                        <td>
                            {"予期しない成功も根本原因分析の対象"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"アサーションがなくてもテストは成功なので問題ない"}
                        </td>
                        <td>
                            {"アサーション欠落は inconclusive な結果につながりうる"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"侵入性が高いのは自動化の宿命で、気にしなくてよい"}
                        </td>
                        <td>
                            {"本番で見られない失敗を生み、TAS への信頼を下げる"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"環境の検証は一度行えば十分"}
                        </td>
                        <td>
                            {" 環境を作るたび、TAS を更新するたびに繰り返す（再現性の観点） "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="83-暗記用チェックリスト">
            {"8.3 暗記用チェックリスト"}
        </h3>
        <div className="checklist-card">
            <div className="checklist-progress">
                <span className="cp-label">
                    {"進捗"}
                </span>
                <div className="cp-bar">
                    <div className="cp-bar-fill">

                    </div>
                </div>
                <span className="cp-count">
                    {"0 / 6 完了"}
                </span>
            </div>
            <ul className="task-list">
                <li>
                    <label>
                        <input className="checklist-checkbox" type="checkbox" />
                        {"環境検証の4観点（インストール・構成、再現性、接続性、TAF コンポーネントテスト）を言える"}
                    </label>
                </li>
                <li>
                    <label>
                        <input className="checklist-checkbox" type="checkbox" />
                        {"接続性の事前条件（ログイン、ツール起動、SUT へのアクセス、設定の確認、権限）を言える"}
                    </label>
                </li>
                <li>
                    <label>
                        <input className="checklist-checkbox" type="checkbox" />
                        {"スイート検証の4項目（構成、新機能、再現性、侵入性）を言える"}
                    </label>
                </li>
                <li>
                    <label>
                        <input className="checklist-checkbox" type="checkbox" />
                        {"不具合の場所の5つ（テストケース、SUT、TAF、ハードウェア、ネットワーク）を言える"}
                    </label>
                </li>
                <li>
                    <label>
                        <input className="checklist-checkbox" type="checkbox" />
                        {"静的解析の重大度（critical、high、medium、low）を言える"}
                    </label>
                </li>
                <li>
                    <label>
                        <input className="checklist-checkbox" type="checkbox" />
                        {"静的解析が DevSecOps で果たす役割を説明できる"}
                    </label>
                </li>
            </ul>
        </div>
        <hr />
        <h2 id="9-確認問題解答付き">
            {"9. 確認問題（解答付き）"}
        </h2>
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
                    {" 試験形式の練習用に作成したオリジナル問題です（公式問題ではありません）。 "}
                </p>
            </div>
        </div>
        <p>
            <strong>
                {"問1（K3）"}
            </strong>
            {" 新しく用意した CI エージェントに TAS を配置した。本実行の前に実施すべき接続性の確認として、最も適切なものはどれか。 "}
        </p>
        <ul>
            <li>
                {"A. 全テストを1回実行し、失敗数を数える"}
            </li>
            <li>
                {" B. サーバーへのログイン、ツールの起動、ツールから SUT へのアクセス、ログ・レポート出力の権限を確認する "}
            </li>
            <li>
                {"C. TAF のコードを静的解析にかける"}
            </li>
            <li>
                {"D. 手動テストの結果と比較する"}
            </li>
        </ul>
        <details className="quiz-details">
            <summary className="quiz-summary">
                {"解答と解説"}
            </summary>
            <p>
                <strong>
                    {"B"}
                </strong>
                {"。シラバス 7.1.1 は、接続性の事前条件として、サーバーへのログイン、ツールの起動、SUT へのアクセス確認、設定の目視確認、テストログ・レポートの権限確認を挙げています。A は本実行そのものであり、事前確認ではありません。C は 7.1.4 の内容で、接続性とは別の観点です。 "}
            </p>
        </details>
        <p>
            <strong>
                {"問2（K2）"}
            </strong>
            {" 「TAS を構築・再構築しても、複数のテスト環境の内外で動作に目立った差がない」状態を表す観点はどれか。 "}
        </p>
        <ul>
            <li>
                {"A. 侵入性"}
            </li>
            <li>
                {"B. セットアップ／ティアダウンの再現性"}
            </li>
            <li>
                {"C. TAF コンポーネントテスト"}
            </li>
            <li>
                {"D. アサーションの網羅性"}
            </li>
        </ul>
        <details className="quiz-details">
            <summary className="quiz-summary">
                {"解答と解説"}
            </summary>
            <p>
                <strong>
                    {"B"}
                </strong>
                {"。7.1.1 の「テスト環境のセットアップ／ティアダウンの再現性」の説明です。 "}
            </p>
        </details>
        <p>
            <strong>
                {"問3（K2）"}
            </strong>
            {" 競合状態が原因で、実行するたびに結果が変わるテストケースへの対応として、シラバスに沿った説明はどれか。 "}
        </p>
        <ul>
            <li>
                {"A. 成功するまでリトライして合格とする"}
            </li>
            <li>
                {"B. アクティブなスイートに残し、失敗のたびに分析する"}
            </li>
            <li>
                {"C. アクティブなスイートから外し、根本原因を別途分析する"}
            </li>
            <li>
                {"D. 削除して二度と使わない"}
            </li>
        </ul>
        <details className="quiz-details">
            <summary className="quiz-summary">
                {"解答と解説"}
            </summary>
            <p>
                <strong>
                    {"C"}
                </strong>
                {"。7.1.2 は、信頼できない結果のテストは、アクティブな自動テストスイートから外して、根本原因を別に分析するとしています。B だと、同じ失敗の分析を繰り返すことになります。 "}
            </p>
        </details>
        <p>
            <strong>
                {"問4（K2）"}
            </strong>
            {" 自動テストツールの「侵入性」が高い場合に起こりうることとして、正しいものはどれか。 "}
        </p>
        <ul>
            <li>
                {"A. 本番では見られない失敗がテストで現れ、TAS への信頼が下がる"}
            </li>
            <li>
                {"B. テストの実行速度が必ず向上する"}
            </li>
            <li>
                {"C. 静的解析が不要になる"}
            </li>
            <li>
                {"D. アサーションを書く必要がなくなる"}
            </li>
        </ul>
        <details className="quiz-details">
            <summary className="quiz-summary">
                {"解答と解説"}
            </summary>
            <p>
                <strong>
                    {"A"}
                </strong>
                {"。7.1.2 の記述どおりです。B、C、D はシラバスに根拠がありません。 "}
            </p>
        </details>
        <p>
            <strong>
                {"問5（K2）"}
            </strong>
            {" 自動テストが予期せず「成功」した。まず確認すべき事項として、シラバスの内容に最も近いものはどれか。 "}
        </p>
        <ul>
            <li>
                {"A. 予期しない成功は問題ないので確認しない"}
            </li>
            <li>
                {"B. すべてのアサーションが入っているかを確認する"}
            </li>
            <li>
                {"C. 静的解析のレポートだけを確認する"}
            </li>
            <li>
                {"D. SUT のバージョンを更新する"}
            </li>
        </ul>
        <details className="quiz-details">
            <summary className="quiz-summary">
                {"解答と解説"}
            </summary>
            <p>
                <strong>
                    {"B"}
                </strong>
                {"。7.1.3 は、アサーションがすべて入っているかを確認するよう述べ、欠けていると結論が出ない結果になりうるとしています。 "}
            </p>
        </details>
        <p>
            <strong>
                {"問6（K2）"}
            </strong>
            {" テスト自動化コードに静的解析を適用する理由として、シラバスの記述に合うものはどれか。 "}
        </p>
        <ul>
            <li>
                {"A. テスト自動化コードは本番にデプロイされるため"}
            </li>
            <li>
                {" B. テスト自動化コードに平文のパスワードなどが含まれると、デプロイされなくても脆弱性になりうるため "}
            </li>
            <li>
                {" C. 静的解析ツールはテスト自動化に使われるプログラミング言語に対応していないため "}
            </li>
            <li>
                {"D. テスト自動化コードは品質を測る必要がないため"}
            </li>
        </ul>
        <details className="quiz-details">
            <summary className="quiz-summary">
                {"解答と解説"}
            </summary>
            <p>
                <strong>
                    {"B"}
                </strong>
                {"。7.1.4 の記述に一致します。A は誤りです（シラバスは「必ずしもデプロイされるわけではない」としています）。C は逆で、静的解析ツールはテスト自動化ソフトウェアが使う言語を含め、多くの言語に対応するとされています。 "}
            </p>
        </details>
        <hr />
    </>;
}
