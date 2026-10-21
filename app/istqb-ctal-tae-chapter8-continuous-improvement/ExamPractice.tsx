import React from 'react';

export default function ExamPractice() {
    return <>
        <h2 id="6-試験対策ひっかけポイントと確認問題">
            {" 6. 試験対策：ひっかけポイントと確認問題 "}
        </h2>
        <h3 id="61-ひっかけポイント表">
            {"6.1 ひっかけポイント表"}
        </h3>
        <div className="table-scroll">
            <table aria-labelledby="61-ひっかけポイント表">
                <thead>
                    <tr className="header">
                        <th>
                            {"#"}
                        </th>
                        <th>
                            {"論点"}
                        </th>
                        <th>
                            {"正しい理解"}
                        </th>
                        <th>
                            {"ありがちな誤解"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        <td>
                            {"1"}
                        </td>
                        <td>
                            {"test histogram の目的"}
                        </td>
                        <td>
                            {"fragile なテストを特定しリファクタする"}
                        </td>
                        <td>
                            {"実行時間の短縮だけが目的"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {"自己修復"}
                        </td>
                        <td>
                            {" 変更ロケータはレポートに記録され、後続のバージョン管理・保守を速める "}
                        </td>
                        <td>
                            {"人の確認が一切不要になる"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {"schema validation"}
                        </td>
                        <td>
                            {"個別 assertion を書かずに型・必須要素をまとめて検証できる"}
                        </td>
                        <td>
                            {"ビジネスロジックまですべて検証できる"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {"待機方式の信頼性"}
                        </td>
                        <td>
                            {"固定待機 < ポーリング < イベント購読"}
                        </td>
                        <td>
                            {"ポーリングが最も信頼できる"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"5"}
                        </td>
                        <td>
                            {"タイムアウト"}
                        </td>
                        <td>
                            {"ポーリングとイベント購読の両方で必要"}
                        </td>
                        <td>
                            {"ポーリングだけで必要"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"6"}
                        </td>
                        <td>
                            {"固定待機"}
                        </td>
                        <td>
                            {"応答時間が予測できず自動化の欠陥の原因になりやすい"}
                        </td>
                        <td>
                            {"最も確実な方法"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"7"}
                        </td>
                        <td>
                            {"TAA の変更"}
                        </td>
                        <td>
                            {"後から加えると高コスト。早期から検討すべき"}
                        </td>
                        <td>
                            {"後半に対応すればよい"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"8"}
                        </td>
                        <td>
                            {"コアライブラリの更新"}
                        </td>
                        <td>
                            {"まずパイロットと影響分析、その後に導入計画"}
                        </td>
                        <td>
                            {"最新版を即時に依存関係へ反映する"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"9"}
                        </td>
                        <td>
                            {"TAS 機能の追加"}
                        </td>
                        <td>
                            {"使われる機能だけ追加する"}
                        </td>
                        <td>
                            {"多いほど良い"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"10"}
                        </td>
                        <td>
                            {"ツールのアップグレード"}
                        </td>
                        <td>
                            {"代表的なサンプルテストで事前確認"}
                        </td>
                        <td>
                            {"全テストを一度に本番で試す"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"11"}
                        </td>
                        <td>
                            {"SUT 変更への対応"}
                        </td>
                        <td>
                            {"段階的（MVP）に変更し、最後に完全リグレッション"}
                        </td>
                        <td>
                            {"最初から全面適用する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"12"}
                        </td>
                        <td>
                            {"機能の実装"}
                        </td>
                        <td>
                            {"継ぎ足し（bolt-on）ではなく TAA を分析・変更して実装"}
                        </td>
                        <td>
                            {"目先の機能を継ぎ足す"}
                        </td>
                    </tr>
                    <tr className="odd">
                        <td>
                            {"13"}
                        </td>
                        <td>
                            {"実行されないテスト"}
                        </td>
                        <td>
                            {"廃止を検討して TAS を簡素化"}
                        </td>
                        <td>
                            {"すべて保持する"}
                        </td>
                    </tr>
                    <tr className="even">
                        <td>
                            {"14"}
                        </td>
                        <td>
                            {"複雑で長いテスト"}
                        </td>
                        <td>
                            {"小さなテストに分解する場合がある"}
                        </td>
                        <td>
                            {"1 本のまま維持する"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="62-確認問題自己チェック">
            {"6.2 確認問題（自己チェック）"}
        </h3>
        <div className="qa-card">
            <p className="qa-question">
                <strong>
                    {"Q1."}
                </strong>
                {" API のレスポンスに 6 つの必須文字列要素があります。個別の assertion を 6 本書く代わりに、テストコードを短くしつつ型と必須要素を確認できる方法は？ "}
            </p>
            <blockquote className="callout-answer">
                <div className="callout-icon">
                    {"✅"}
                </div>
                <p>
                    {" 答え：Schema validation（スキーマ検証）。スキーマ違反時は実際の検証結果が返るため、原因特定にも役立つ。 "}
                </p>
            </blockquote>
        </div>
        <div className="qa-card">
            <p className="qa-question">
                <strong>
                    {"Q2."}
                </strong>
                {" 「固定待機」「ポーリング」「イベント購読」のうち、最も信頼性が高いのはどれ？ その条件は？ "}
            </p>
            <blockquote className="callout-answer">
                <div className="callout-icon">
                    {"✅"}
                </div>
                <p>
                    {" 答え：イベント購読。ただし、テストスクリプト言語がイベント購読に対応し、SUT がイベントを TAS に提供する必要がある。タイムアウト機構も必要。 "}
                </p>
            </blockquote>
        </div>
        <div className="qa-card">
            <p className="qa-question">
                <strong>
                    {"Q3."}
                </strong>
                {" コアライブラリのメジャーアップデートが出ました。どう進めるのが適切？ "}
            </p>
            <blockquote className="callout-answer">
                <div className="callout-icon">
                    {"✅"}
                </div>
                <p>
                    {" 答え：まずパイロットと影響分析を行い、導入計画を作る。全チーム同時採用（コアライブラリ層のビルドファイルで依存関係を更新）か、各チームが個別に更新（ビジネスロジック層）し、最終的に全チームの準備が整ってからコアライブラリ層を更新する。 "}
                </p>
            </blockquote>
        </div>
        <div className="qa-card">
            <p className="qa-question">
                <strong>
                    {"Q4."}
                </strong>
                {" SUT が更新されました。テストウェアの変更を安全に進める最終確認の手段は？ "}
            </p>
            <blockquote className="callout-answer">
                <div className="callout-icon">
                    {"✅"}
                </div>
                <p>
                    {" 答え：まず限定したテストスクリプトで副作用がないことを確認して変更を全面適用し、最後に完全なリグレッション実行で確認する。失敗が出たら、その原因が改善作業によるものでないかをログ・レポート・データ分析で確認する。 "}
                </p>
            </blockquote>
        </div>
        <div className="qa-card">
            <p className="qa-question">
                <strong>
                    {"Q5."}
                </strong>
                {" 「テストにあったら便利そう」という理由で、誰も使わないレポート機能を TAS に追加する提案がありました。適切な判断は？ "}
            </p>
            <blockquote className="callout-answer">
                <div className="callout-icon">
                    {"✅"}
                </div>
                <p>
                    {" 答え：追加しない。使われない機能は複雑さを増し、信頼性と保守性を下げる。使われる機能だけを追加する。 "}
                </p>
            </blockquote>
        </div>
        <div className="qa-card">
            <p className="qa-question">
                <strong>
                    {"Q6."}
                </strong>
                {" 何か月も実行されていない複雑なテストスクリプトがあります。どう対処する？ "}
            </p>
            <blockquote className="callout-answer">
                <div className="callout-icon">
                    {"✅"}
                </div>
                <p>
                    {" 答え：廃止の対象として評価する。TAS の複雑さを減らし、何を保守すべきかが明確になる。複雑で長いだけのテストなら、小さなテストへの分解も検討する。 "}
                </p>
            </blockquote>
        </div>
    </>;
}
