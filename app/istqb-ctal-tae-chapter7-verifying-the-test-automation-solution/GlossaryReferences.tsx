import React from 'react';


export default function GlossaryReferences() {
    return <>
        <h2 id="10-用語集">
            {"10. 用語集"}
        </h2>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"用語"}
                        </th>
                        <th>
                            {"説明"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"静的解析（static analysis）"}
                        </td>
                        <td>
                            {" コードを実行せずに検査して、欠陥や脆弱性を見つける技術。第7章のキーワード "}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"DevSecOps"}
                        </td>
                        <td>
                            {"セキュリティを重視した DevOps"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"根本原因分析（root cause analysis）"}
                        </td>
                        <td>
                            {"問題の直接原因ではなく、根本にある原因を突き止める分析"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"再現性（repeatability）"}
                        </td>
                        <td>
                            {"同じ条件で繰り返したとき、同じ結果になる性質"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"侵入性（intrusiveness）"}
                        </td>
                        <td>
                            {"テストツールが SUT の挙動に与える影響の度合い"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"競合状態（race condition）"}
                        </td>
                        <td>
                            {" 処理のタイミング次第で結果が変わる状態。不安定なテストの原因になりうる "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"TAS failure"}
                        </td>
                        <td>
                            {"欠陥が SUT ではない失敗（第6章）"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"inconclusive"}
                        </td>
                        <td>
                            {"結論が出ない状態。アサーション欠落などで起こりうる"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"セットアップ／ティアダウン"}
                        </td>
                        <td>
                            {"テストの前後に行う準備と後片付けの処理"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"テストフィクスチャ"}
                        </td>
                        <td>
                            {"テストが実行できるために用意されるもの（第4章）"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"事前条件（precondition）"}
                        </td>
                        <td>
                            {"処理や検証を始める前に満たすべき条件"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr />
        <h2 id="11-参考url根拠ソース">
            {"11. 参考URL（根拠ソース）"}
        </h2>
        <h3 id="111-一次情報第7章の根拠">
            {"11.1 一次情報（第7章の根拠）"}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"資料名"}
                        </th>
                        <th>
                            {"URL"}
                        </th>
                        <th>
                            {"使った箇所"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"ISTQB CTAL-TAE v2.0 認定ページ"}
                        </td>
                        <td>
                            <a href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/" target="_blank" rel="noopener noreferrer">
                                {"https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"}
                            </a>
                        </td>
                        <td>
                            {"試験概要"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"CTAL-TAE Syllabus v2.0（PDF）"}
                        </td>
                        <td>
                            <a href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf" target="_blank" rel="noopener noreferrer">
                                {"https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf"}
                            </a>
                        </td>
                        <td>
                            {" 第7章（7.1.1〜7.1.4）の全記述。他章（第3、4、5、6、8章）の参照箇所 "}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"ISTQB Glossary"}
                        </td>
                        <td>
                            <a href="https://glossary.istqb.org/" target="_blank" rel="noopener noreferrer">
                                {"https://glossary.istqb.org/"}
                            </a>
                        </td>
                        <td>
                            {"用語の確認"}
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
                    {" 本ガイドの「シラバスの記述」にあたる部分は、上記 PDF の第7章（Page 43〜46）に基づきます。「補足」「具体例」「コード例」と明記した部分は、理解を助けるための一般的な例であり、シラバスの記述ではありません。 "}
                </p>
            </div>
        </div>
        <h3 id="112-補足の参考資料シラバス外ベストプラクティスの補強">
            {" 11.2 補足の参考資料（シラバス外・ベストプラクティスの補強） "}
        </h3>
        <div className="table-scroll">
            <table>
                <thead>
                    <tr className="header">
                        <th>
                            {"資料名"}
                        </th>
                        <th>
                            {"URL"}
                        </th>
                        <th>
                            {"関連する節"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"Martin Fowler「Eradicating Non-Determinism in Tests」"}
                        </td>
                        <td>
                            <a href="https://martinfowler.com/articles/nonDeterminism.html" target="_blank" rel="noopener noreferrer">
                                {"https://martinfowler.com/articles/nonDeterminism.html"}
                            </a>
                        </td>
                        <td>
                            {"4.4 再現性、不安定なテストの隔離"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {" Google Testing Blog「Flaky Tests at Google and How We Mitigate Them」 "}
                        </td>
                        <td>
                            <a href="https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html" target="_blank" rel="noopener noreferrer">
                                {"https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html"}
                            </a>
                        </td>
                        <td>
                            {"4.4 不安定なテスト"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"OWASP「Static Code Analysis」"}
                        </td>
                        <td>
                            <a href="https://owasp.org/www-community/controls/Static_Code_Analysis" target="_blank" rel="noopener noreferrer">
                                {"https://owasp.org/www-community/controls/Static_Code_Analysis"}
                            </a>
                        </td>
                        <td>
                            {"6 静的解析"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"OWASP Secrets Management Cheat Sheet"}
                        </td>
                        <td>
                            <a href="https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">
                                {"https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"}
                            </a>
                        </td>
                        <td>
                            {"6.3 認証情報の扱い"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"GitHub Docs「About secret scanning」"}
                        </td>
                        <td>
                            <a href="https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning" target="_blank" rel="noopener noreferrer">
                                {"https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning"}
                            </a>
                        </td>
                        <td>
                            {"6.4 秘密情報の検出"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"Gitleaks"}
                        </td>
                        <td>
                            <a href="https://github.com/gitleaks/gitleaks" target="_blank" rel="noopener noreferrer">
                                {"https://github.com/gitleaks/gitleaks"}
                            </a>
                        </td>
                        <td>
                            {"6.4 秘密情報の検出"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"SonarQube ドキュメント"}
                        </td>
                        <td>
                            <a href="https://docs.sonarsource.com/" target="_blank" rel="noopener noreferrer">
                                {"https://docs.sonarsource.com/"}
                            </a>
                        </td>
                        <td>
                            {"6.4 静的解析ツール"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ESLint ドキュメント"}
                        </td>
                        <td>
                            <a href="https://eslint.org/docs/latest/" target="_blank" rel="noopener noreferrer">
                                {"https://eslint.org/docs/latest/"}
                            </a>
                        </td>
                        <td>
                            {"6.4 静的解析ツール"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"pytest ドキュメント（マーカー）"}
                        </td>
                        <td>
                            <a href="https://docs.pytest.org/en/stable/how-to/mark.html" target="_blank" rel="noopener noreferrer">
                                {"https://docs.pytest.org/en/stable/how-to/mark.html"}
                            </a>
                        </td>
                        <td>
                            {"4.4 隔離のコード例"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"ISO/IEC 25010 品質特性の解説"}
                        </td>
                        <td>
                            <a href="https://iso25000.com/index.php/en/iso-25000-standards/iso-25010" target="_blank" rel="noopener noreferrer">
                                {"https://iso25000.com/index.php/en/iso-25000-standards/iso-25010"}
                            </a>
                        </td>
                        <td>
                            {"非機能テストの観点（シラバスが品質特性の枠組みとして参照）"}
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
                    {" 補足資料の URL は、執筆時点で公開されている公式・準公式のページです。ページ構成の変更により、リンク切れが生じる可能性があります。試験対策ではまず一次情報（シラバス PDF）を優先してください。 "}
                </p>
            </div>
        </div>
        <p className="page-footer">
            <em>
                {"本ガイドは学習支援を目的とした非公式の解説資料です。試験の出題範囲・内容は必ず ISTQB 公式のシラバスおよび各国 Member Board の最新情報で確認してください。ISTQB® は International Software Testing Qualifications Board の登録商標です。"}
            </em>
        </p>
    </>;
}
