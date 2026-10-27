import React from 'react';
export default function Introduction() {return <>
    <section className="section" id="sec1">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-history">
                </i>
            </div>
            <h2>
                {"1. はじめに：なぜ今もこの本が読まれ続けるのか"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 『Working Effectively with Legacy Code』は2004年に出版された本ですが、今日でも「レガシーコードの話題になると必ず名前が挙がる」定番書として扱われています。ソフトウェア開発者向けブログ Understand Legacy Code の運営者 Nicolas Carlo も、この本が出版から年月が経ってもなお内容が色褪せない基準そのものと言えるほどの立ち位置にあると述べています"}
                <sup>
                    {"[3]"}
                </sup>
                {"。また技術系ブログ DaedTech を運営する Erik Dietrich も、本書は刊行から10年近く経っても十分通用する内容であり、本書が題材にしていたシステム自体よりもよほど長持ちしていると評しています"}
                <sup>
                    {"[2]"}
                </sup>
                {"。 "}
            </p>
            <p>
                {" 著者の Michael Feathers は現在も R7K Research & Conveyance の創業者としてソフトウェア設計・組織設計のコンサルティングを行っており、2025年の技術カンファレンス「Code Freeze」でも基調講演者として、AIやアーキテクチャの新しい潮流の中で本書の原則がどう活きるかを語っています"}
                <sup>
                    {"[21]"}
                </sup>
                {"。つまりこの本は「古い本」ではなく、「今も現役の実務書」として読み継がれているのです。 "}
            </p>
            <p>
                {" 本書が扱う「レガシーコード」とは、必ずしも古い言語や退職したエンジニアが書いたコードのことではありません。次章で見るように、Feathers はもっとシンプルで実務的な定義を与えています。 "}
            </p>
        </div>
    </section>

    
    <section className="section" id="sec2">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-layout-list">
                </i>
            </div>
            <h2>
                {"2. 本書の全体構成"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 原著は大きく3部構成になっています（O'Reilly収録の目次に基づく）"}
                <sup>
                    {"[15]"}
                </sup>
                {"。 "}
            </p>
            <div className="table-wrap">
                <div className="table-title">
                    {"本書の3部構成"}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"パート"}
                            </th>
                            <th>
                                {"内容"}
                            </th>
                            <th>
                                {"主な章"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"Part I：変更のメカニズム"}
                            </td>
                            <td>
                                {" 変更・フィードバック・センシングと分離・シームモデル・ツールという、本書全体を貫く基礎概念 "}
                            </td>
                            <td>
                                {"第1〜5章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"Part II：ソフトウェアを変更する"}
                            </td>
                            <td>
                                {" 「時間がない」「巨大クラスが崩せない」など、現場で頻発する19の困りごとに対する具体的な処方箋 "}
                            </td>
                            <td>
                                {"第6〜24章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"Part III：依存関係破壊テクニック"}
                            </td>
                            <td>
                                {" コードとテストを切り離すための24の具体的リファクタリング手法のカタログ "}
                            </td>
                            <td>
                                {"第25章＋付録"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                {" 初学者はまず Part I の考え方（本ガイドの3〜10章に相当）を理解し、そのあと自分の直面している問題に近い Part II の章をつまみ食いする、という読み方がおすすめです。 "}
            </p>
        </div>
    </section>
</>;}
