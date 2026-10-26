import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
export default function Techniques() {return <>
    <section className="section" id="sec11">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-seedling">
                </i>
            </div>
            <h2>
                {"11. 新機能を安全に追加する：Sprout と Wrap"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 「変更にとても時間がかかる」という悩みは第7章で扱われますが、「時間がない」という現場の悩みに対しては、Feathers は第6章で、Sprout と Wrap を含む、新しい機能を安全に追加するための実践的な技法を紹介しています"}
                <sup>
                    {"[9]"}
                </sup>
                {"。中でも特に有名なのが、いずれも第6章で解説される "}
                <strong>
                    {"Sprout（芽吹かせる）"}
                </strong>
                {" と "}
                <strong>
                    {"Wrap（包む）"}
                </strong>
                {" という2つの考え方です。 "}
            </p>
            <div className="mermaid-wrapper">
                <div id="d8">
                    <Mermaid chart={DIAGRAMS.d8} />
                </div>
            </div>
            <div className="table-wrap">
                <div className="table-title">
                    {"Sprout / Wrap の使い分け"}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"技法"}
                            </th>
                            <th>
                                {"やり方"}
                            </th>
                            <th>
                                {"向いているケース"}
                            </th>
                            <th>
                                {"長所"}
                            </th>
                            <th>
                                {"短所"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"Sprout Method"}
                            </td>
                            <td>
                                {" 既存メソッドに新メソッドへの呼び出しを差し込み、新メソッドはTDDで実装する"}
                                <sup>
                                    {"[44]"}
                                </sup>
                            </td>
                            <td>
                                {" 新しい振る舞いをロジックの1箇所に差し込みたいとき"}
                                <sup>
                                    {"[41]"}
                                </sup>
                            </td>
                            <td>
                                {" 新旧を分離でき新しい部分は確実にテストされる"}
                                <sup>
                                    {"[42]"}
                                </sup>
                            </td>
                            <td>
                                {"既存メソッドのテスト整備は先送り"}
                                <sup>
                                    {"[42]"}
                                </sup>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"Sprout Class"}
                            </td>
                            <td>
                                {"新機能をまるごと新クラスに切り出す"}
                            </td>
                            <td>
                                {"新機能の独立性が高いとき"}
                            </td>
                            <td>
                                {"新クラスは最初からテスト可能な設計にできる"}
                            </td>
                            <td>
                                {"クラス数が増える"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"Wrap Method"}
                            </td>
                            <td>
                                {" 元のメソッドをリネームし、新しい名前で前後処理と旧メソッド呼び出しをまとめる"}
                                <sup>
                                    {"[45]"}
                                </sup>
                            </td>
                            <td>
                                {" 既存の呼び出し前後に処理を追加したいとき"}
                                <sup>
                                    {"[41]"}
                                </sup>
                            </td>
                            <td>
                                {"呼び出し元を変えずに新旧を分離できる"}
                                <sup>
                                    {"[45]"}
                                </sup>
                            </td>
                            <td>
                                {"リネームで命名が不自然になりがち"}
                                <sup>
                                    {"[42]"}
                                </sup>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"Wrap Class"}
                            </td>
                            <td>
                                {" 元のクラスをコンストラクタで受け取り委譲する新クラスを作る "}
                            </td>
                            <td>
                                {"クラス単位で前後処理を挟みたいとき"}
                            </td>
                            <td>
                                {"Wrap Method のクラス版として同様の利点"}
                            </td>
                            <td>
                                {"委譲コードが増える"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                {" これらの技法に共通する目的は、「今日中に安全に機能を出す」ことと「将来的にテストを充実させる」ことの間で現実的な折り合いをつける点にあります。いきなり既存コード全体をテスト可能にしようとするのではなく、"}
                <strong>
                    {"新しく書く部分だけは必ずテストで守る"}
                </strong>
                {"という現実的な戦略です。 "}
            </p>
        </div>
    </section>

    
    <section className="section" id="sec12">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-scissors">
                </i>
            </div>
            <h2>
                {"12. 代表的な依存関係破壊テクニック（全24種の抜粋）"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" 本書第25章「Dependency-Breaking Techniques」では、依存関係を断ち切るための具体的なリファクタリング手法が24種類カタログ化されています"}
                <sup>
                    {"[15]"}
                </sup>
                {"。すべてを覚える必要はなく、まずは代表的なものから使えるようにするのがおすすめです。 "}
            </p>
            <div className="table-wrap">
                <div className="table-title">
                    {"代表的な依存関係破壊テクニック"}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"テクニック名"}
                            </th>
                            <th>
                                {"概要"}
                            </th>
                            <th>
                                {"主に効くケース"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"Extract Interface"}
                            </td>
                            <td>
                                {" 差し替えたいメソッド群をインターフェースとして切り出す "}
                            </td>
                            <td>
                                {"テストでフェイク実装を渡したいとき"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"Parameterize Constructor"}
                            </td>
                            <td>
                                {" コンストラクタ内部で生成していた協調オブジェクトを外から渡せる引数にする "}
                            </td>
                            <td>
                                {"依存オブジェクトをテスト用に差し替えたいとき"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"Subclass and Override Method"}
                            </td>
                            <td>
                                {" テスト専用のサブクラスで問題のメソッドだけを無害な実装に置き換える "}
                            </td>
                            <td>
                                {"呼び出し箇所を変更できない・したくないとき"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"Extract and Override Call"}
                            </td>
                            <td>
                                {" 問題の呼び出しを別メソッドに切り出し、サブクラスでそこだけ差し替える "}
                            </td>
                            <td>
                                {"特定の呼び出し1箇所だけを無害化したいとき"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"Replace Global Reference with Getter"}
                            </td>
                            <td>
                                {" グローバル参照をオーバーライド可能なGetter経由に置き換える "}
                            </td>
                            <td>
                                {"シングルトンやグローバル状態への依存を切りたいとき"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"Extract and Override Factory Method"}
                            </td>
                            <td>
                                {" 生成処理を専用メソッドに切り出し、生成方法だけ差し替える "}
                            </td>
                            <td>
                                {"直接生成に依存しているとき"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="callout">
                <p>
                    {" GitHub 上の \"dependency-breaking-katas\" のように、公開APIを変えずにこれらのテクニックだけでクラスをテスト可能にする練習問題も公開されています"}
                    <sup>
                        {"[17]"}
                    </sup>
                    {"。すべての協調オブジェクトにインターフェースを抽出するのではなく、「今日行う変更」に必要な1箇所にだけシームを作るという実務的な指針も紹介されており、"}
                    <strong>
                        {"必要な配線だけを切って、あとはそのままにしておく"}
                    </strong>
                    {"という割り切りが実務での使いこなしのコツです"}
                    <sup>
                        {"[14]"}
                    </sup>
                    {"。 "}
                </p>
            </div>
        </div>
    </section>

    
    <section className="section" id="sec13">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-list-search">
                </i>
            </div>
            <h2>
                {"13. 「あるある」問題と対応する章・技法の早見表"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" Part II（第6〜24章）は、どれも現場でよく聞く悩みをそのまま章タイトルにしているのが特徴です"}
                <sup>
                    {"[15]"}
                </sup>
                {"。初学者は、まず自分が直面している状況に近い行を探すと、目的の章にすぐアクセスできます。 "}
            </p>
            <div className="table-wrap">
                <div className="table-title">
                    {"現場の悩み早見表"}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"現場の悩み"}
                            </th>
                            <th>
                                {"主に関連する概念・技法"}
                            </th>
                            <th>
                                {"対応する章"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"時間がないのに変更しなければならない"}
                            </td>
                            <td>
                                {"Sprout Method／Class"}
                            </td>
                            <td>
                                {"第6章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"変更にとにかく時間がかかりすぎる"}
                            </td>
                            <td>
                                {"ラグタイム（ビルドとテストの待ち時間）の短縮、依存関係の解消（Wrap Method／Class は第6章）"}
                            </td>
                            <td>
                                {"第7章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"このクラスをテストハーネスに載せられない"}
                            </td>
                            <td>
                                {"センシングと分離、Extract Interface 等"}
                            </td>
                            <td>
                                {"第9章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"このメソッド単体をテストハーネスで動かせない"}
                            </td>
                            <td>
                                {"オブジェクトシーム、Subclass and Override"}
                            </td>
                            <td>
                                {"第10章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"何をテストすればいいか分からない"}
                            </td>
                            <td>
                                {"Effect Sketch（前向きの推論）"}
                            </td>
                            <td>
                                {"第11章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"1箇所直すのに関係クラス全部の依存を切る必要があるか"}
                            </td>
                            <td>
                                {"高レベルの介入点・Pinch Point の活用"}
                            </td>
                            <td>
                                {"第12章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"ライブラリへの依存に振り回される"}
                            </td>
                            <td>
                                {" ライブラリをラップして自前のインターフェース越しに使う "}
                            </td>
                            <td>
                                {"第14章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"コードを理解するだけの余裕がない"}
                            </td>
                            <td>
                                {"Effect Sketch、コードの見取り図作り"}
                            </td>
                            <td>
                                {"第16章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"アプリケーションに構造がない"}
                            </td>
                            <td>
                                {"責務の分離、CRCによる整理"}
                            </td>
                            <td>
                                {"第17章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"クラスが巨大でこれ以上大きくしたくない"}
                            </td>
                            <td>
                                {"責務の分割、God Class 化の回避"}
                            </td>
                            <td>
                                {"第20章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"手のつけられない「モンスターメソッド」がある"}
                            </td>
                            <td>
                                {"巨大メソッドの段階的分解"}
                            </td>
                            <td>
                                {"第22章"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"チームが疲弊し状況が良くなる気がしない"}
                            </td>
                            <td>
                                {" 小さな成功体験の積み重ね、変更アルゴリズムの反復適用 "}
                            </td>
                            <td>
                                {"第24章"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    
    <section className="section" id="sec14">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-stamp">
                </i>
            </div>
            <h2>
                {"14. 承認テスト（Approval Testing）／ゴールデンマスターとの関係"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" キャラクタリゼーションテストと似た考え方に、"}
                <strong>
                    {"承認テスト（Approval Testing）"}
                </strong>
                {"、あるいは"}
                <strong>
                    {"ゴールデンマスターテスト"}
                </strong>
                {"と呼ばれる手法があります。Approval Tests ツールの開発者として知られる Llewellyn Falco は、レガシーコードに対しては内部構造を深く理解しなくても、出力ベースで良好なテストカバレッジを比較的簡単に得られる点で、この手法を高く評価しています"}
                <sup>
                    {"[38]"}
                </sup>
                {"。 "}
            </p>
            <p>
                {" 承認テストの基本的な考え方は、期待値をコードの中に直接書き込むのではなく、出力をファイルに保存し、その内容を人間が承認することで期待値として確定するというものです。97 Things シリーズの著者でもある Emily Bache は、この手法をスナップショットテストやゴールデンマスターテストと呼ばれることもあると説明しつつ、専用ツールを使うことで期待値の更新や差分比較が格段にやりやすくなる点を強調しています"}
                <sup>
                    {"[16]"}
                </sup>
                {"。 "}
            </p>
            <div className="table-wrap">
                <div className="table-title">
                    {"近縁の用語の違い"}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"用語"}
                            </th>
                            <th>
                                {"主な使われ方"}
                            </th>
                            <th>
                                {"ニュアンス"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"キャラクタリゼーションテスト"}
                            </td>
                            <td>
                                {"Feathers の用語。既存コードの挙動を記録し保護する"}
                            </td>
                            <td>
                                {"今の挙動を理解し固定するプロセス寄り"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"ゴールデンマスターテスト"}
                            </td>
                            <td>
                                {"出力全体を正解として保存し差分を検知する"}
                            </td>
                            <td>
                                {"出力全体をまるごと比較する手法寄り"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"承認テスト"}
                            </td>
                            <td>
                                {" 出力をファイルに保存し人間が確認・承認して期待値にする "}
                            </td>
                            <td>
                                {"「承認」という人間の意思決定を重視"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                {" Understand Legacy Code の運営者 Nicolas Carlo は、「ゴールデンマスター」という呼び方には二度と触れない神聖なものという含みがあるため好ましくなく、人間が振る舞いを承認し必要に応じて更新していくという意味で「承認テスト」という呼び方を好む、という見解を示しています"}
                <sup>
                    {"[32]"}
                </sup>
                {"。呼び方はどうあれ、いずれも「まず今の振る舞いを固定してから、安心して変更に取り組む」という Feathers の考え方の延長線上にある実践です。 "}
            </p>
        </div>
    </section>

    
    <section className="section" id="sec15">
        <div className="section-head">
            <div className="icon-badge">
                <i className="ti ti-plant-2">
                </i>
            </div>
            <h2>
                {"15. より大きなスケールへ：Strangler Fig パターンとの関係"}
            </h2>
        </div>
        <div className="prose">
            <p>
                {" Feathers の技法の多くは、メソッドやクラスといった「コードレベル」でのミクロな安全策です。一方で、システム全体を段階的に置き換えていくマクロな戦略として広く知られているのが、Martin Fowler が提唱した"}
                <strong>
                    {"Strangler Fig パターン"}
                </strong>
                {"です"}
                <sup>
                    {"[19][27]"}
                </sup>
                {"。 "}
            </p>
            <p>
                {" このパターンは、宿主となる木に巻きついて成長し最終的に宿主に取って代わる「絞め殺しの木」という植物に由来しています。一気に書き直す「ビッグバン・リライト」の代わりに、新しい実装を少しずつ既存システムの周りに構築し、機能単位で置き換えを進めていく、という考え方です"}
                <sup>
                    {"[24]"}
                </sup>
                {"。 "}
            </p>
            <div className="mermaid-wrapper">
                <div id="d9">
                    <Mermaid chart={DIAGRAMS.d9} />
                </div>
            </div>
            <p>
                {" EC企業 Shopify のエンジニアリングブログでは、実際にこのパターンを用いて巨大な Shop モデルから設定値を切り出した際の具体的な進め方が紹介されています"}
                <sup>
                    {"[20]"}
                </sup>
                {"。また Microsoft の Azure Architecture Center でも、モノリスからの段階的な移行パターンとして正式に文書化されています"}
                <sup>
                    {"[25]"}
                </sup>
                {"。 "}
            </p>
            <div className="table-wrap">
                <div className="table-title">
                    {"スケールの異なる補完関係"}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {"観点"}
                            </th>
                            <th>
                                {"Feathers の技法"}
                            </th>
                            <th>
                                {"Strangler Fig パターン"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {"対象の粒度"}
                            </td>
                            <td>
                                {"メソッド・クラス単位"}
                            </td>
                            <td>
                                {"システム・サービス単位"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"主な道具"}
                            </td>
                            <td>
                                {"シーム、キャラクタリゼーションテスト、Sprout/Wrap"}
                            </td>
                            <td>
                                {"ファサード／プロキシ層、機能単位の段階的移行"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {"ゴール"}
                            </td>
                            <td>
                                {"既存コードを安全にテスト可能にし変更する"}
                            </td>
                            <td>
                                {"モノリス全体を安全に新システムへ移行する"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                {" 大規模な近代化プロジェクトの中でも、実際に個々のクラスやメソッドに手を入れる場面では、結局のところ本書のテクニックが必要になります。 "}
            </p>
        </div>
    </section>
</>;}
