import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
export default function Foundations() {return <>
    <section className="section" id="sec3">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-fingerprint">
                </i>
            </div>
            <h2>
                {"3. 「レガシーコード」の定義を変える"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 多くの人は「レガシーコード」と聞くと、「もう誰も触れない古いコード」「読みにくくて汚いコード」を想像します。しかし Feathers はまったく違う切り口で定義しています。 "}
            </p>
            <p>
                {" 彼の定義を一言で言えば、"}
                <strong>
                    {"自動テストで保護されていないコードはすべてレガシーコードである"}
                </strong>
                {"、というものです"}
                <sup>
                    {"[2][15]"}
                </sup>
                {"。書かれてから1週間しか経っていない新しいコードであっても、テストがなければそれは既に「レガシーコード」だと考えます。逆に、10年前に書かれたコードでも手厚いテストで守られていれば、Feathers の定義上はレガシーコードとは呼びません。 "}
            </p>
            <p>
                {" この定義が重要なのは、「テストがない＝変更のたびに何が壊れるか分からない」という状態そのものが問題の本質だ、と焦点を絞ってくれるからです。読みやすさやアーキテクチャの綺麗さよりも、まず「安全に変更できるか」を最優先の物差しにする、という考え方です。 "}
            </p>
            <div className="mermaid-wrapper">
                <div id="d1">
                    <Mermaid chart={DIAGRAMS.d1} />
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" id="sec4">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-refresh-alert">
                </i>
            </div>
            <h2>
                {"4. レガシーコードのジレンマ"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" テストのないコードに手を入れようとすると、多くの人が次のような堂々巡りに陥ります。 "}
            </p>
            <ul>
                <li>
                    {"安全にコードを変更するにはテストが欲しい"}
                </li>
                <li>
                    {"テストを書くには、テストしやすい形にコードを変更する必要がある"}
                </li>
                <li>
                    {" しかし今はテストがないので、その変更自体が安全かどうか分からない "}
                </li>
            </ul>
            <p>
                {" Feathers はこれを"}
                <strong>
                    {"「レガシーコードのジレンマ」"}
                </strong>
                {"と呼び、これを解消する鍵は「ごく小さく、保守的な、テスト導入前の下準備的リファクタリング」であるとしています。多少コードの見た目が悪くなっても、それはテストという保護網を手に入れるまでの一時的な「傷」であり、テストが揃った後で治せばよい、という割り切りが重要です。 "}
            </p>
            <div className="mermaid-wrapper">
                <div id="d2">
                    <Mermaid chart={DIAGRAMS.d2} />
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" id="sec5">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-list-numbers">
                </i>
            </div>
            <h2>
                {"5. レガシーコード変更アルゴリズム（5ステップ）"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" Feathers は、レガシーコードに変更を加えるときの一般的な手順を、次の5ステップのアルゴリズムとして提示しています"}
                <sup>
                    {"[13][14][15]"}
                </sup>
                {"。この5ステップこそが本書全体を貫く背骨であり、以降の6〜10章はこの各ステップを詳しく掘り下げたものです。 "}
            </p>
            <div className="mermaid-wrapper">
                <div id="d3">
                    <Mermaid chart={DIAGRAMS.d3} />
                </div>
            </div>
            <div className="table-wrap">
                <div className="table-title">
                    {"5ステップの目的"}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"ステップ"}
                            </th>
                            <th>
                                {"やること"}
                            </th>
                            <th>
                                {"目的"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"① 変更点の特定"}
                            </td>
                            <td>
                                {" 機能追加・バグ修正のために手を入れるべき箇所を洗い出す "}
                            </td>
                            <td>
                                {"「どこを変えるか」を明確化する"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"② テストポイントの発見"}
                            </td>
                            <td>
                                {"変更の影響が観測できる箇所を探す"}
                            </td>
                            <td>
                                {"「どこを検証すれば安全か」を決める"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"③ 依存関係を断ち切る"}
                            </td>
                            <td>
                                {"外部依存やハードコードされた結合を切り離す"}
                            </td>
                            <td>
                                {"テストハーネスにコードを載せられるようにする"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"④ テストを書く"}
                            </td>
                            <td>
                                {"現状の振る舞いを固定するテストを用意する"}
                            </td>
                            <td>
                                {"「今の挙動」を安全網として確保する"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"⑤ 変更・リファクタリング"}
                            </td>
                            <td>
                                {"テストの保護下で目的の変更を行う"}
                            </td>
                            <td>
                                {"安全に目的を達成し、次の変更をしやすくする"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</>;}
