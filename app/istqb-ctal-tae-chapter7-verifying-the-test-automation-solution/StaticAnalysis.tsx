import React from 'react';
import ChapterDiagram from './ChapterDiagram';

import CodeExample from './CodeExample';

export default function StaticAnalysis() {
    return <>
        <h2 id="6-714-静的解析がテスト自動化コードの品質向上にどう役立つかk2">
            {" 6. 7.1.4 静的解析がテスト自動化コードの品質向上にどう役立つか（K2） "}
        </h2>
        <h3 id="61-静的解析とは">
            {"6.1 静的解析とは"}
        </h3>
        <p>
            {" シラバスは、"}
            <strong>
                {"静的コード解析（static code analysis）"}
            </strong>
            {"は、プログラムコードの"}
            <strong>
                {"脆弱性や欠陥を見つける"}
            </strong>
            {"のに役立つと述べています。対象は "}
            <strong>
                {"SUT だけでなく TAF も含みます"}
            </strong>
            {"。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"項目"}
                        </th>
                        <th>
                            {"説明"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"仕組み"}
                        </td>
                        <td>
                            {"自動スキャンでコードを検査し、リスクを減らす"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"位置づけ"}
                        </td>
                        <td>
                            {"事前（プロアクティブ）な欠陥検出技術"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"DevSecOps"}
                        </td>
                        <td>
                            {"セキュリティを重視した DevOps において重要な役割を果たす"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"実行タイミング"}
                        </td>
                        <td>
                            {" SDLC の早い段階、パイプライン内で実行し、開発チームにすぐフィードバックを返す "}
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
                    {" 静的解析は、コードを"}
                    <strong>
                        {"実行せずに"}
                    </strong>
                    {"検査する点が特徴です。テストの実行結果を待たずに問題を見つけられます。 "}
                </p>
            </div>
        </div>
        <h3 id="62-静的解析の出力と支援機能">
            {"6.2 静的解析の出力と支援機能"}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"シラバスの記述"}
                        </th>
                        <th>
                            {"意味"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"欠陥は重大度で分類される（critical、high、medium、low）"}
                        </td>
                        <td>
                            {"開発チームが修正の優先順位を決められる"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"修正案を提示するツールもある"}
                        </td>
                        <td>
                            {"問題のあるコード行と、可能な修正例を見せてくれる"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAE を支援する機能"}
                        </td>
                        <td>
                            {" 品質の測定、コメントを付けるべき箇所の提案、リソース処理を最適化する設計改善（try/catch ブロックの活用、より良いループ構造）、不適切なライブラリ呼び出しの除去 "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="63-なぜテスト自動化コードにも静的解析が必要か">
            {" 6.3 なぜ「テスト自動化コード」にも静的解析が必要か "}
        </h3>
        <p>
            {" テスト自動化ツールはプログラミング言語を使うため、"}
            <strong>
                {"不適切なテスト自動化コードが SDLC に持ち込まれるリスク"}
            </strong>
            {"があります。 "}
        </p>
        <p>
            {" シラバスの例：テスト自動化ではユーザー名とパスワードを使うことが多く、TAE が誤って"}
            <strong>
                {"パスワードを平文のまま"}
            </strong>
            {"1つまたは複数のテストスクリプトに書いてしまうことがありえます。 "}
        </p>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"誤解しやすい点"}
                        </th>
                        <th>
                            {"正しい理解（シラバス）"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"「テストコードは製品にデプロイされないので安全」"}
                        </td>
                        <td>
                            {" デプロイされなくても、付随する自動テストスクリプトからパスワードが見つかれば脆弱性になりうる "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"「静的解析は SUT のコードだけが対象」"}
                        </td>
                        <td>
                            {" TAF や、テスト自動化コードにもスキャンを広げるのが重要（TAE の責務） "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 id="コード例補足認証情報の扱い">
            {"コード例（補足）：認証情報の扱い"}
        </h4>
        <CodeExample index={6} />
        <h3 id="64-パイプラインへの組み込み">
            {"6.4 パイプラインへの組み込み"}
        </h3>
        <div className="mermaid-container">
            <ChapterDiagram id="mermaid-diagram-10" />
        </div>
        <h4 id="ツールの例補足シラバスには記載のない一般的な例">
            {" ツールの例（補足：シラバスには記載のない一般的な例） "}
        </h4>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"目的"}
                        </th>
                        <th>
                            {"ツール例"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"コード品質・保守性の解析"}
                        </td>
                        <td>
                            {"SonarQube、ESLint（JavaScript）、Pylint や Ruff（Python）"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"セキュリティ上の問題の検出"}
                        </td>
                        <td>
                            {"Semgrep など"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"秘密情報（パスワード、トークン）の検出"}
                        </td>
                        <td>
                            {"Gitleaks、TruffleHog、GitHub の secret scanning"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"整形（読みやすさの向上）"}
                        </td>
                        <td>
                            {"IDE のコードフォーマッター、Prettier、Black など"}
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
                    {"ベストプラクティス（静的解析）"}
                </span>
            </div>
            <div className="callout-body">
                <ul>
                    <li>
                        {" SUT のコードだけでなく、TAF とテストスクリプトも同じスキャン対象にする "}
                    </li>
                    <li>
                        {" パイプラインの早い段階で実行し、プルリクエストの時点でフィードバックを返す "}
                    </li>
                    <li>
                        {" 重大度（critical、high、medium、low）に基づき、失敗にする基準（ゲート）を決める "}
                    </li>
                    <li>
                        {" 認証情報は環境変数やシークレット管理に移し、秘密情報の検出も併用する "}
                    </li>
                    <li>
                        {" フォーマッターで書き方を揃え、可読性と保守性を高める（第4章のクリーンコード原則とも一致） "}
                    </li>
                </ul>
            </div>
        </div>
        <hr />
    </>;
}
