import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
import SourceCode from './SourceCode';
export default function FiveSteps() {return <>
    <section className="section" id="sec6">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-target-arrow">
                </i>
            </div>
            <h2>
                {"6. ステップ1：変更点を特定する"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 最初のステップは、実は「簡単な場合」と「非常に難しい場合」に二極化します。目的の変更が1箇所のメソッドで完結するなら簡単ですが、変更点が深くネストしたif/elseの奥や、あちこちのクラスから参照される構造の中に埋もれている場合は、コードの病み具合に比例して調査コストが増える、と説明されています"}
                <sup>
                    {"[13]"}
                </sup>
                {"。 "}
            </p>
            <p>
                {" この段階では、まだテストを書く前に「コードの見取り図」を作る作業（メモを取る、責務を書き出す、使われていないコードを見つけて削るといった軽量な整理）が有効です。これは第16〜17章（「コードを理解するには」「アプリケーションに構造がない」）で詳しく扱われている内容に対応します"}
                <sup>
                    {"[23]"}
                </sup>
                {"。 "}
            </p>
        </div>
    </section>

    
    <section className="section" id="sec7">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-route">
                </i>
            </div>
            <h2>
                {"7. ステップ2：テストポイントを見つける（Effect Sketch）"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 変更点が決まったら、次に「どこでテストを書けば、その変更が正しく行われたことを確認できるか」を考えます。Feathers はこれを"}
                <strong>
                    {"「前向きの推論（reasoning forward）」"}
                </strong>
                {"あるいは"}
                <strong>
                    {"「Effect Sketch（効果のスケッチ）」"}
                </strong>
                {"と呼びます"}
                <sup>
                    {"[23]"}
                </sup>
                {"。 "}
            </p>
            <p>
                {" 通常のデバッグでは結果からその原因を遡る後ろ向きの推論をしますが、レガシーコードで変更を安全に行うためには逆に「この変更を行ったら、プログラムの他の結果にどう影響が伝播しうるか」を前もって描く必要があります。この影響の伝わり方を図にしたものが Effect Sketch であり、これによって「どのクラスの、どのメソッドの、どの戻り値や状態を確認すればよいか」というテストポイントの候補が見えてきます。 "}
            </p>
            <div className="mermaid-wrapper">
                <div id="d4">
                    <Mermaid chart={DIAGRAMS.d4} />
                </div>
            </div>
            <p>
                {" このとき、変更したいクラスの「クライアント（呼び出し元）」を漏れなく洗い出しておくことが重要です。影響の伝わり方を見落とすと、テストで守られていない箇所で不具合を出してしまうリスクが残ります。 "}
            </p>
        </div>
    </section>

    
    <section className="section" id="sec8">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-plug-connected-x">
                </i>
            </div>
            <h2>
                {"8. ステップ3：依存関係を断ち切る（センシングと分離、シーム）"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" テストポイントが決まっても、多くのレガシーコードは「そのままではテストハーネス上で実行できない」状態にあります。Feathers は、テストを書く際に依存関係を断ち切る理由を大きく2つに整理しています。 "}
            </p>
            <ul>
                <li>
                    <strong>
                        {"センシング（Sensing）の問題"}
                    </strong>
                    {"：コードが計算した値を外から観測できない "}
                </li>
                <li>
                    <strong>
                        {"分離（Separation）の問題"}
                    </strong>
                    {"：そもそもそのコード片単体をテストハーネスに載せて動かせない "}
                </li>
            </ul>
            <p>
                {" これらの問題を解決する際の考え方として登場するのが"}
                <strong>
                    {"「シーム（Seam）」"}
                </strong>
                {"という概念です。シームとは、あるコードそのものを編集しなくても、その振る舞いを変更できる箇所のことです"}
                <sup>
                    {"[10]"}
                </sup>
                {"。Google のエンジニアである Mike Bland も自身のブログで、このシームの概念とレガシーコードの定義を、ソフトウェア設計における重要な洞察として繰り返し取り上げています"}
                <sup>
                    {"[5]"}
                </sup>
                {"。 "}
            </p>
            <div className="mermaid-wrapper">
                <div id="d5">
                    <Mermaid chart={DIAGRAMS.d5} />
                </div>
            </div>
            <p>
                {"代表的なシームには次の3種類があります。"}
            </p>
            <div className="table-wrap">
                <div className="table-title">
                    {"シームの種類"}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"シームの種類"}
                            </th>
                            <th>
                                {"差し替えのタイミング"}
                            </th>
                            <th>
                                {"主な用途・特徴"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"オブジェクトシーム"}
                            </td>
                            <td>
                                {"実行時（多態性・DI）"}
                            </td>
                            <td>
                                {" オブジェクト指向言語で最も使いやすく、Feathers 自身も一般に最良の選択と説明している"}
                                <sup>
                                    {"[10]"}
                                </sup>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"リンクシーム"}
                            </td>
                            <td>
                                {"リンク／ロード時"}
                            </td>
                            <td>
                                {" テスト用のスタブライブラリに差し替える。環境切り替えが分かりにくくなりがちなので注意 "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"プリプロセッサシーム"}
                            </td>
                            <td>
                                {"コンパイル時"}
                            </td>
                            <td>
                                {" C/C++ のマクロなどを利用。強力だが乱用するとコードの追跡が困難になる "}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mermaid-wrapper">
                <div id="d6">
                    <Mermaid chart={DIAGRAMS.d6} />
                </div>
            </div>
            <p>
                {" 依存関係を断ち切ることは「ソフトウェア開発における最も重要な課題の一つ」とまで表現されており、レガシーコードに関する作業の多くは、変更を容易にするための依存関係の解消に費やされる、とされています"}
                <sup>
                    {"[14]"}
                </sup>
                {"。 "}
            </p>
        </div>
    </section>

    
    <section className="section" id="sec9">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-camera-check">
                </i>
            </div>
            <h2>
                {"9. ステップ4：キャラクタリゼーションテストを書く"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 依存関係を切り離してテストが書ける状態になったら、次はいよいよテストを書きます。ここで登場するのが本書のもう一つの中心概念、"}
                <strong>
                    {"キャラクタリゼーションテスト（Characterization Test）"}
                </strong>
                {"です。 "}
            </p>
            <p>
                {" キャラクタリゼーションテストとは、「コードがあるべき姿を検証するテスト」ではなく、「コードが実際にどう振る舞っているかを記録するテスト」です"}
                <sup>
                    {"[4]"}
                </sup>
                {"。仕様が失われていたり、誰も正確な仕様を把握していないレガシーコードに対しては、まず今の挙動そのものをスナップショットとして固定し、これから先意図せずこの挙動を変えてしまっていないかを検知できるようにする、という発想です。 "}
            </p>
            <div className="mermaid-wrapper">
                <div id="d7">
                    <Mermaid chart={DIAGRAMS.d7} />
                </div>
            </div>
            <div className="code-block">
                <div className="code-title">
                    {" 例：挙動を固定するキャラクタリゼーションテストの骨格（架空のコード例） "}
                </div>
                <SourceCode />
            </div>
            <p>
                {" この手法は「TDDの逆再生」と表現されることもあります。通常のTDDは先にあるべき挙動をテストで定義してから実装する流れですが、キャラクタリゼーションテストは逆に、既に存在する実装の挙動を確認してからテスト化するという流れになります"}
                <sup>
                    {"[9]"}
                </sup>
                {"。 "}
            </p>
            <div className="table-wrap">
                <div className="table-title">
                    {"テストの種類の違い"}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"テストの種類"}
                            </th>
                            <th>
                                {"目的"}
                            </th>
                            <th>
                                {"いつ書くか"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"スペシフィケーションテスト"}
                            </td>
                            <td>
                                {"コードがあるべき通りに動くかを検証する"}
                            </td>
                            <td>
                                {"実装前（TDDの通常フロー）"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"キャラクタリゼーションテスト"}
                            </td>
                            <td>
                                {"コードの実際の挙動を記録し、崩れていないか検知する"}
                            </td>
                            <td>
                                {"既存コードに手を入れる前"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    
    <section className="section" id="sec10">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-tools">
                </i>
            </div>
            <h2>
                {"10. ステップ5：変更してリファクタリングする"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 5ステップの最後は、テストという安全網の下で、当初の目的（機能追加やバグ修正）を実現し、必要であればコードの整理まで行うというステップです。ここで注意したいのは、「最後の最後まで新しいコードを書かない」という順序です。レガシーコードに対する作業のほとんどは、実は「どこにどう手を入れるかを理解し、慎重に選び抜く」ことに費やされるべきであり、それによってリスクと必要なテストコードの量を最小化できます"}
                <sup>
                    {"[12]"}
                </sup>
                {"。 "}
            </p>
            <p>
                {" また、TDD の「Red-Green-Refactor」サイクルにおいて最後の「Refactor」が省略されがちなのと同じように、変更後のリファクタリングも見落とされがちですが、これは本来欠かせない工程だと強調されています"}
                <sup>
                    {"[12]"}
                </sup>
                {"。 "}
            </p>
        </div>
    </section>
</>;}
