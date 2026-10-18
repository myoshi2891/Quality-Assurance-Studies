import React from 'react';
import ChecklistCard from './ChecklistCard';

export default function LearningReferences() {
    return <>
        <h2 id="7-学習チェックリスト">
            {"7. 学習チェックリスト"}
        </h2>
        <ChecklistCard />
        <hr />
        <h2 id="8-参考文献ソース-url">
            {"8. 参考文献・ソース URL"}
        </h2>
        <h3 id="81-一次情報試験の根拠">
            {"8.1 一次情報（試験の根拠）"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="81-一次情報試験の根拠">
                <thead>
                    <tr className="header">
                        <th>
                            {"資料"}
                        </th>
                        <th>
                            {"URL"}
                        </th>
                        <th>
                            {"備考"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"ISTQB CTAL-TAE v2.0 認定ページ"}
                        </td>
                        <td>
                            <a href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/" rel="noopener noreferrer" target="_blank">
                                {"https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"}
                            </a>
                        </td>
                        <td>
                            {"試験の公式ページ"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ISTQB CTAL-TAE Syllabus v2.0（PDF）"}
                        </td>
                        <td>
                            <a href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf" rel="noopener noreferrer" target="_blank">
                                {"https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf"}
                            </a>
                        </td>
                        <td>
                            {"第6章は p.37〜p.42。本ガイドの根拠"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"ISTQB Glossary"}
                        </td>
                        <td>
                            <a href="https://glossary.istqb.org/" rel="noopener noreferrer" target="_blank">
                                {"https://glossary.istqb.org/"}
                            </a>
                        </td>
                        <td>
                            {"用語の公式定義の確認用"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="82-シラバスが参照する関連シラバス章内の言及">
            {" 8.2 シラバスが参照する関連シラバス（章内の言及） "}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="82-シラバスが参照する関連シラバス章内の言及">
                <thead>
                    <tr className="header">
                        <th>
                            {"関連シラバス"}
                        </th>
                        <th>
                            {"言及箇所"}
                        </th>
                        <th>
                            {"URL"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"CT-PT（Performance Testing）"}
                        </td>
                        <td>
                            {"6.1.1 本番でのパフォーマンス監視"}
                        </td>
                        <td>
                            <a href="https://istqb.org/" rel="noopener noreferrer" target="_blank">
                                {"https://istqb.org/"}
                            </a>
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"CT-AI（AI Testing）"}
                        </td>
                        <td>
                            {"6.1.3 AI／ML によるテストログ分析"}
                        </td>
                        <td>
                            <a href="https://istqb.org/" rel="noopener noreferrer" target="_blank">
                                {"https://istqb.org/"}
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
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
                    {" 上記2つは、ISTQB 公式サイトのトップから該当シラバスを検索して確認してください。 "}
                </p>
            </div>
        </div>
        <h3 id="83-補足資料実務の例に関する参考情報試験範囲外">
            {" 8.3 補足資料（実務の例に関する参考情報。試験範囲外） "}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="83-補足資料実務の例に関する参考情報試験範囲外">
                <thead>
                    <tr className="header">
                        <th>
                            {"資料"}
                        </th>
                        <th>
                            {"URL"}
                        </th>
                        <th>
                            {"本ガイドでの用途"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"W3C Trace Context"}
                        </td>
                        <td>
                            <a href="https://www.w3.org/TR/trace-context/" rel="noopener noreferrer" target="_blank">
                                {"https://www.w3.org/TR/trace-context/"}
                            </a>
                        </td>
                        <td>
                            <code>
                                {"traceparent"}
                            </code>
                            {" ヘッダーの形式"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"OpenTelemetry ドキュメント"}
                        </td>
                        <td>
                            <a href="https://opentelemetry.io/docs/" rel="noopener noreferrer" target="_blank">
                                {"https://opentelemetry.io/docs/"}
                            </a>
                        </td>
                        <td>
                            {"分散トレースの一般情報"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"Playwright Test Reporters"}
                        </td>
                        <td>
                            <a href="https://playwright.dev/docs/test-reporters" rel="noopener noreferrer" target="_blank">
                                {"https://playwright.dev/docs/test-reporters"}
                            </a>
                        </td>
                        <td>
                            {"レポーター設定の例"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"Playwright Trace Viewer"}
                        </td>
                        <td>
                            <a href="https://playwright.dev/docs/trace-viewer" rel="noopener noreferrer" target="_blank">
                                {"https://playwright.dev/docs/trace-viewer"}
                            </a>
                        </td>
                        <td>
                            {"失敗時のトレース収集の例"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"Allure Report ドキュメント"}
                        </td>
                        <td>
                            <a href="https://allurereport.org/docs/" rel="noopener noreferrer" target="_blank">
                                {"https://allurereport.org/docs/"}
                            </a>
                        </td>
                        <td>
                            {"HTML レポートツールの例"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ReportPortal"}
                        </td>
                        <td>
                            <a href="https://reportportal.io/" rel="noopener noreferrer" target="_blank">
                                {"https://reportportal.io/"}
                            </a>
                        </td>
                        <td>
                            {"AI／ML を活用した結果分析ツールの例"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"Grafana ドキュメント"}
                        </td>
                        <td>
                            <a href="https://grafana.com/docs/" rel="noopener noreferrer" target="_blank">
                                {"https://grafana.com/docs/"}
                            </a>
                        </td>
                        <td>
                            {"ダッシュボードツールの例"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <footer className="page-footer">
            {" 本ガイドは、ISTQB® CTAL-TAE v2.0 シラバス第6章の内容を初学者向けに整理した学習補助資料です。ISTQB® は International Software Testing Qualifications Board の登録商標です。試験の出題範囲・正式な定義は、必ず公式シラバスで確認してください。実務上の整理や外部ツールの例は、シラバスの記述ではない旨を各所に明記しています。 "}
        </footer>
    </>;
}
