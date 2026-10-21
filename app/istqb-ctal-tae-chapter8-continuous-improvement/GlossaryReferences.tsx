import React from 'react';

export default function GlossaryReferences() {
    return <>
        <h2 id="8-用語集">
            {"8. 用語集"}
        </h2>
        <div className="table-scroll">
            <table aria-labelledby="8-用語集">
                <thead>
                    <tr className="header">
                        <th>
                            {"用語"}
                        </th>
                        <th>
                            {"意味"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"test histogram"}
                        </td>
                        <td>
                            {" テストデータの傾向を示す視覚レポート。fragile なテストの特定に使う "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"schema validation"}
                        </td>
                        <td>
                            {" データ構造の定義（スキーマ）に基づき、型・必須要素などを検証すること "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"fragile test"}
                        </td>
                        <td>
                            {"壊れやすい（不安定な）テスト"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"self-healing"}
                        </td>
                        <td>
                            {"ロケータ変更などを検知し、テストを自動で修復する仕組み"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"wait mechanism"}
                        </td>
                        <td>
                            {"待機方式（固定待機・ポーリング・イベント購読）"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"polling"}
                        </td>
                        <td>
                            {"条件が成立したかを繰り返し確認する方式"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"timeout"}
                        </td>
                        <td>
                            {"待機の上限時間。無限待機を防ぐ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"failure recovery"}
                        </td>
                        <td>
                            {"失敗後に TAS／SUT を復旧し、テストを継続する仕組み"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"setup / teardown"}
                        </td>
                        <td>
                            {"テストの前提条件を整える処理 / 後始末をする処理"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"bolt-on"}
                        </td>
                        <td>
                            {" 既存の設計を見直さず継ぎ足して機能を追加すること（避けるべき） "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"MVP mindset"}
                        </td>
                        <td>
                            {"最小限の変更から始めて影響を測る考え方"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAA"}
                        </td>
                        <td>
                            {"テスト自動化アーキテクチャ"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAF"}
                        </td>
                        <td>
                            {"テスト自動化フレームワーク"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"TAS"}
                        </td>
                        <td>
                            {"テスト自動化ソリューション"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"core libraries"}
                        </td>
                        <td>
                            {"SUT に依存しない共通ライブラリの層（第3章）"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"business logic layer"}
                        </td>
                        <td>
                            {"SUT 依存のライブラリを置く層（第3章）"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 id="9-出典ソースurl">
            {"9. 出典（ソース）URL"}
        </h2>
        <h3 id="91-一次情報本ガイドの根拠">
            {"9.1 一次情報（本ガイドの根拠）"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="91-一次情報本ガイドの根拠">
                <thead>
                    <tr className="header">
                        <th>
                            {"#"}
                        </th>
                        <th>
                            {"出典"}
                        </th>
                        <th>
                            {"URL"}
                        </th>
                        <th>
                            {"根拠にした箇所"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"1"}
                        </td>
                        <td>
                            {"ISTQB CTAL-TAE v2.0 認定ページ"}
                        </td>
                        <td>
                            <a href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/" target="_blank" rel="noopener noreferrer">
                                {"https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"}
                            </a>
                        </td>
                        <td>
                            {"試験の位置づけ・公式資料の入口"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {"ISTQB CTAL-TAE Syllabus v2.0（PDF）"}
                        </td>
                        <td>
                            <a href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf" target="_blank" rel="noopener noreferrer">
                                {"https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf"}
                            </a>
                        </td>
                        <td>
                            {" 第8章 8.1.1〜8.1.4（47〜53 ページ）。第3・4・5・6・7章の関連記述 "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="92-補足資料コード例実装の理解用">
            {"9.2 補足資料（コード例・実装の理解用）"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="92-補足資料コード例実装の理解用">
                <thead>
                    <tr className="header">
                        <th>
                            {"#"}
                        </th>
                        <th>
                            {"テーマ"}
                        </th>
                        <th>
                            {"URL"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {"待機（Selenium）"}
                        </td>
                        <td>
                            <a href="https://www.selenium.dev/documentation/webdriver/waits/" target="_blank" rel="noopener noreferrer">
                                {"https://www.selenium.dev/documentation/webdriver/waits/"}
                            </a>
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {"自動待機（Playwright）"}
                        </td>
                        <td>
                            <a href="https://playwright.dev/docs/actionability" target="_blank" rel="noopener noreferrer">
                                {"https://playwright.dev/docs/actionability"}
                            </a>
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"5"}
                        </td>
                        <td>
                            {"JSON Schema"}
                        </td>
                        <td>
                            <a href="https://json-schema.org/" target="_blank" rel="noopener noreferrer">
                                {"https://json-schema.org/"}
                            </a>
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"6"}
                        </td>
                        <td>
                            {"契約テスト（Pact）"}
                        </td>
                        <td>
                            <a href="https://docs.pact.io/" target="_blank" rel="noopener noreferrer">
                                {"https://docs.pact.io/"}
                            </a>
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"7"}
                        </td>
                        <td>
                            {"フィクスチャ（pytest）"}
                        </td>
                        <td>
                            <a href="https://docs.pytest.org/en/stable/how-to/fixtures.html" target="_blank" rel="noopener noreferrer">
                                {"https://docs.pytest.org/en/stable/how-to/fixtures.html"}
                            </a>
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"8"}
                        </td>
                        <td>
                            {"不安定なテスト（Martin Fowler）"}
                        </td>
                        <td>
                            <a href="https://martinfowler.com/articles/nonDeterminism.html" target="_blank" rel="noopener noreferrer">
                                {"https://martinfowler.com/articles/nonDeterminism.html"}
                            </a>
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"9"}
                        </td>
                        <td>
                            {"Page Object（Martin Fowler）"}
                        </td>
                        <td>
                            <a href="https://martinfowler.com/bliki/PageObject.html" target="_blank" rel="noopener noreferrer">
                                {"https://martinfowler.com/bliki/PageObject.html"}
                            </a>
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"10"}
                        </td>
                        <td>
                            {"GitHub Actions のマトリクス戦略"}
                        </td>
                        <td>
                            <a href="https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs" target="_blank" rel="noopener noreferrer">
                                {"https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs"}
                            </a>
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"11"}
                        </td>
                        <td>
                            {"GitHub Actions のスケジュール実行"}
                        </td>
                        <td>
                            <a href="https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#schedule" target="_blank" rel="noopener noreferrer">
                                {"https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#schedule"}
                            </a>
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"12"}
                        </td>
                        <td>
                            {"セマンティックバージョニング"}
                        </td>
                        <td>
                            <a href="https://semver.org/" target="_blank" rel="noopener noreferrer">
                                {"https://semver.org/"}
                            </a>
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
                {" 補足資料（#3〜#12）は、シラバスの内容を実装レベルで理解するための一般的な技術資料です。試験範囲の根拠は #2 のシラバスです（シラバスの引用元として挙げられた標準・書籍は試験範囲外で、シラバスに要約された内容のみが対象）。 "}
            </p>
        </blockquote>
        <h2 id="10-本ガイドに関する注記">
            {"10. 本ガイドに関する注記"}
        </h2>
        <ol type="1">
            <li>
                {" シラバス原文の確認範囲：8.1.1〜8.1.4 は、公式 PDF（47〜53 ページ）の原文を確認して記述しています。8.1.4 の3項目（環境のセットアップと制御、データエイジング、スクリーンショットと動画の生成）もすべて原文に基づきます。 "}
            </li>
            <li>
                {" 例・数値・コードについて：ヒストグラムの数値、Python／YAML のコード、Before／After の対比は、理解を助けるために本ガイドが作成した説明用の例です。シラバスの記載ではありません。 "}
            </li>
            <li>
                {" 試験範囲：ISTQB の規定により、シラバス内で参照されている標準・書籍の内容は、シラバスに要約されている範囲を除いて試験範囲外です。 "}
            </li>
            <li>
                {" 最新情報：シラバスや試験構成は改訂される可能性があります。受験前に必ず "}
                <a href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/" target="_blank" rel="noopener noreferrer">
                    {"ISTQB 公式ページ"}
                </a>
                {" で最新情報を確認してください。 "}
            </li>
        </ol>
        <p>
            <em>
                {"本ガイドは学習支援を目的とした二次的な解説資料です。試験の公式な範囲・根拠は必ず ISTQB 公式シラバスでご確認ください。"}
            </em>
        </p>
    </>;
}
