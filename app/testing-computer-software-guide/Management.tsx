import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
export default function Management() {return <>
    <section className="section" id="sec11">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-bug">

                </i>
            </div>
            <h2>
                {"11. 効果的なバグレポートの書き方"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" どれほど良いテストを実施しても、その結果が開発者に正しく伝わらなければ意味がありません。PuTTY の開発者としても知られるプログラマー Simon Tatham は、「How to Report Bugs Effectively」という広く読まれているエッセイの中で、良いバグレポートの目的は「開発者の目の前でプログラムが壊れる様子を再現させること」にあると説明しています。この考え方は今なお多くのOSSプロジェクトのバグ報告ガイドラインの基礎になっています。 "}
            </p>
            <div className="diagram-block">
                <div className="mermaid-wrapper">
                    <div id="diag-7"><Mermaid chart={DIAGRAMS["diag-7"]} /></div>
                </div>
                <div className="diagram-caption">
                    {"図7: 良いバグレポートの構成要素"}
                </div>
            </div>
            <ol className="diagram-steps">
                <li>{"タイトル（何が起きたかを一言で）"}</li>
                <li>{"再現手順（番号付きで具体的に）"}</li>
                <li>{"期待結果（本来どうあるべきか）"}</li>
                <li>{"実際の結果（何が起きたか）"}</li>
                <li>{"環境情報（OS、ブラウザ、バージョン）"}</li>
                <li>{"証拠（スクリーンショットとログ）"}</li>
            </ol>
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"要素"}
                            </th>
                            <th>
                                {"ポイント"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"再現手順"}
                            </td>
                            <td>
                                {" 「その手順を踏めば誰でも同じ現象を再現できる」レベルまで具体的に書く "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"事実と推測の区別"}
                            </td>
                            <td>
                                {" 「実際に見たこと」と「自分の推測」を明確に分けて書く "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"期待結果と実際の結果"}
                            </td>
                            <td>
                                {" 「何を期待していたか」と「実際に何が起きたか」を両方書く "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"バージョン情報"}
                            </td>
                            <td>
                                {"ソフトウェアのバージョン、OS、環境情報を書き添える"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"1レポート1バグ"}
                            </td>
                            <td>
                                {"複数の問題を1つのレポートに詰め込まない"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"感情的な表現を避ける"}
                            </td>
                            <td>
                                {" 開発者を非難する表現よりも、事実に基づいた記述を優先する "}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="callout source">
                <i className="ti ti-quote">

                </i>
                <div>
                    <span className="callout-title">
                        {"Simon Tathamの主張"}
                    </span>
                    <p>
                        {" Tatham は、バグレポートにおいて「事実」と「推測」を混同しないこと、そして開発者が実際に問題を再現できるだけの十分な情報を提供することの重要性を繰り返し強調しています。 "}
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="section" id="sec12">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-clipboard-list">

                </i>
            </div>
            <h2>
                {"12. テスト計画とドキュメント"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 『Testing Computer Software』でも1つの章が割かれているように、テスト計画書は「何を」「どこまで」「どのように」テストするかについて関係者の認識を揃えるための重要な成果物です。ISO/IEC/IEEE 29119 などの国際規格でもテストの作業成果物として位置づけられています。 "}
            </p>
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"ドキュメント"}
                            </th>
                            <th>
                                {"主な記載内容"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"テスト計画書(Test Plan)"}
                            </td>
                            <td>
                                {" テストの目的・範囲・スケジュール・体制・リスクと対応方針 "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"テスト設計仕様書"}
                            </td>
                            <td>
                                {" テスト対象の機能ごとに、どのような観点でテストするかの方針 "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"テストケース"}
                            </td>
                            <td>
                                {"具体的な入力・操作手順・期待結果の組み合わせ"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"テスト実行ログ"}
                            </td>
                            <td>
                                {" いつ・誰が・どのテストを・どんな結果で実行したかの記録 "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"インシデント/欠陥レポート"}
                            </td>
                            <td>
                                {"発見された不具合の詳細(第11章参照)"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"テストサマリーレポート"}
                            </td>
                            <td>
                                {" テスト活動全体の結果、残存リスク、品質の状況をまとめた報告書 "}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                {" 初学者がまず作成すべきなのは、壮大な文書ではなく「何をテストして、何をテストしないのかが一目でわかる」シンプルなテスト計画のメモです。ドキュメントの厚みよりも、チーム内でリスクの認識が揃っていることの方がずっと重要です。 "}
            </p>
        </div>
    </section>
    <section className="section" id="sec13">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-git-branch">

                </i>
            </div>
            <h2>
                {"13. シフトレフトとCI/CDへのテスト統合"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 「シフトレフト(Shift-Left Testing)」とは、開発工程を左から右へ流れる図(要件→設計→実装→リリース)に見立てたとき、従来は右側(リリース直前)に置かれがちだったテスト活動を、できるだけ左側(要件定義・設計・実装の早い段階)に移す考え方です。この用語は2001年に Larry Smith が提唱したとされ、現在ではCI/CDパイプラインへのテストの組み込みとセットで語られるのが一般的です。 "}
            </p>
            <div className="diagram-block">
                <div className="mermaid-wrapper">
                    <div id="diag-8"><Mermaid chart={DIAGRAMS["diag-8"]} /></div>
                </div>
                <div className="diagram-caption">
                    {"図8: シフトレフトとCI/CDパイプライン"}
                </div>
            </div>
            <ol className="diagram-steps">
                <li>{"要件定義"}</li>
                <li>{"設計"}</li>
                <li>{"実装とユニットテスト"}</li>
                <li>{"CIビルド（静的解析と単体テスト）"}</li>
                <li>{"結合テストとAPIテスト"}</li>
                <li>{"ステージングでのE2Eテスト"}</li>
                <li>{"本番リリース"}</li>
                <li>{"本番監視（得られたフィードバックを要件定義へ戻す）"}</li>
            </ol>
            <div className="callout source">
                <i className="ti ti-quote">

                </i>
                <div>
                    <span className="callout-title">
                        {"DORAの知見"}
                    </span>
                    <p>
                        {" DORA(DevOps Research and Assessment)も、コミットのたびに自動テストが走る継続的インテグレーションを、ソフトウェアデリバリのパフォーマンスを高める中核ケイパビリティの一つとして挙げています(参考文献16)。実務上のコツとして、CIのテストは「10分以内」を目安に高速化することが重要だとされます。実行時間が長すぎるテストはやがて開発者に敬遠され、形骸化してしまうためです。 "}
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="section" id="sec14">
        <div className="section-head">
            <div className="section-icon">
                <i className="ti ti-robot">

                </i>
            </div>
            <h2>
                {"14. 2026年の潮流 ― AIとエージェント型テスト自動化"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 2026年8月時点の業界動向として、AIによるテスト生成・実行の自動化(いわゆる「エージェント型テスト」)への投資が急速に進んでいます。テスト管理ツールベンダーの Tricentis が2025年秋のカンファレンス「Transform」の内容をもとに公開した分析では、自然言語のユーザーストーリーや要件から直接テストケースを生成する「エージェント型テスト生成」が、手動でのテスト作成の手間を大きく減らす手段として注目されていると紹介されています。 "}
            </p>
            <p>
                {" 一方で、同分析は前年に書かれたコードの4割以上がAIによって生成されたとする業界データを紹介しつつ、AIが生成したコードの本番投入に自信を持てないと回答した開発者が大多数を占めるという調査結果や、AIの誤りが原因でリリースをロールバックした経験を持つチームが一定数存在するという調査結果にも触れており、AI活用が進む一方で人間による品質判断の重要性は変わらないと結論づけています。 "}
            </p>
            <p>
                {" 初学者への実務的な示唆としては、以下の点を押さえておくとよいでしょう。 "}
            </p>
            <ul>
                <li>
                    {" AIが生成したテストコードも、人間が書いたコードと同様にレビューが必要 "}
                </li>
                <li>
                    {" 「テストが自動生成された」ことと「そのテストが意味のある検証をしている」ことは別問題 "}
                </li>
                <li>
                    {" テストの合否判断や、リリース可否のような最終判断は引き続き人間が担う領域として位置づけられている "}
                </li>
            </ul>
        </div>
    </section>
</>;}
