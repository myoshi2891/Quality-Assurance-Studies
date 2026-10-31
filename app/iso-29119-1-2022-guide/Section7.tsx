import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_11, DIAGRAM_12, DIAGRAM_13, DIAGRAM_14, DIAGRAM_15 } from './diagrams';

export default function Section7() {
  return (
    <section>
<h2 id="step-7テスト設計と実行44節">STEP 7：テスト設計と実行（4.4節）</h2>
                    <p>
                        序文は、テストモデルを使ったテスト設計と実行を説明し、重要な選択として<strong>スクリプト化テストと探索的テスト、テストケース作成のための技法、テストパターン、再テストと回帰テスト、手動と自動、バックトゥバック、A/Bテスト</strong>を挙げています。
                    </p>
                    <h3 id="7-1-テストモデルから実行まで概念図">
                        7-1. テストモデルから実行まで（概念図）
                    </h3>
                    <p>
                        2022年版では、テストケースの導出元が「テスト条件」から<strong>「テストモデル」</strong>に変わりました。
                    </p>
                    <div aria-label="図解11" className="mermaid-diagram" id="mmd11" role="img">
                        
<Mermaid chart={DIAGRAM_11} />

                    </div>
                    <aside className="callout callout-note">
                        <div className="callout-title">ポイント</div>
                        <div className="callout-body">
                            <p>
                                上図は、まえがきの変更点（テストモデルからのケース導出）と用語定義（テストケース＝前提条件・入力・期待結果、テストカバレッジ項目など）を組み合わせた<strong>概念整理</strong>です。手順名や粒度は、Part
                                2・Part 4 の記述を正としてください。
                            </p>
                        </div>
                    </aside>
                    <h3 id="7-2-テストモデルとモデルベーステスト441442">
                        7-2. テストモデルとモデルベーステスト（4.4.1／4.4.2）
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>項目</th>
                                    <th>説明</th>
                                    <th>具体例（学習用）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>テストモデル</td>
                                    <td>テスト対象の振る舞いなどを抽象化した表現</td>
                                    <td>状態遷移図、決定表、分類木</td>
                                </tr>
                                <tr className="even">
                                    <td>モデルベーステスト（MBT）</td>
                                    <td>モデルからテストケースを導出するプラクティス</td>
                                    <td>
                                        注文ステータスの状態遷移図から「遷移を1回ずつ通る」ケースを作る
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="7-3-スクリプト化テストと探索的テスト443">
                        7-3. スクリプト化テストと探索的テスト（4.4.3）
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>観点</th>
                                    <th>スクリプト化テスト</th>
                                    <th>探索的テスト</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>規格の定義（趣旨）</td>
                                    <td>
                                        <strong>文書化されたテストスクリプトに基づいて行う</strong
                                        >テスト（通常、手動実行のものを指す）
                                    </td>
                                    <td>
                                        テスト担当者が、既存の知識、これまでの探索結果、ヒューリスティック（経験則）に基づき、<strong>その場でテストを設計・実行する</strong>経験ベースのテスト
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>強み</td>
                                    <td>再現しやすい、実行者に依存しにくい</td>
                                    <td>隠れた振る舞いや想定外の相互作用を見つけやすい</td>
                                </tr>
                                <tr className="odd">
                                    <td>弱み</td>
                                    <td>スクリプトにない問題を見つけにくい</td>
                                    <td>記録や再現の工夫が必要</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        規格の注記は、探索的テストが「単独では無害でも他の性質と干渉してソフトウェアが失敗するリスクとなる、<strong>隠れた性質（隠れた振る舞い）</strong>を探す」と述べています。
                    </p>
                    <h4 id="選び方の考え方解説者による判断の目安">
                        選び方の考え方（解説者による判断の目安）
                    </h4>
                    <p>
                        2022年版は両者を並べて紹介しており、どちらか一方に固定するものでも、両方の使用を前提とするものでもありません。テストベースの安定性や証跡の要否などの状況に応じて、スクリプト化テスト・探索的テストのいずれか、または<strong>併用を選択肢として検討</strong>します。
                    </p>
                    <div aria-label="図解12" className="mermaid-diagram" id="mmd12" role="img">
                        
<Mermaid chart={DIAGRAM_12} />

                    </div>
                    <h3 id="7-4-テスト技法3つの分類と代表例444">
                        7-4. テスト技法：3つの分類と代表例（4.4.4）
                    </h3>
                    <p>規格の用語定義に基づく分類と代表技法です。</p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>分類</th>
                                    <th>根拠</th>
                                    <th>代表技法（用語定義に登場するもの）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>仕様ベース（ブラックボックス）</td>
                                    <td>外部の入出力（通常は仕様）</td>
                                    <td>
                                        同値分割、境界値分析、決定表テスト、因果グラフ、状態遷移テスト、シナリオテスト、組合せテスト（ペアワイズなど）、ランダムテスト、メタモルフィックテスト、要求ベーステスト
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>構造ベース（ホワイトボックス）</td>
                                    <td>内部構造（ソースコードなど）</td>
                                    <td>
                                        文網羅（ステートメント）、分岐（ブランチ）、判定（デシジョン）、MC/DC
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>経験ベース</td>
                                    <td>テスト担当者の経験</td>
                                    <td>
                                        エラー推測、探索的テスト、チェックリストベース、テストツアー・攻撃・欠陥分類の活用
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4 id="具体例①同値分割と境界値分析学習用">
                        具体例①：同値分割と境界値分析（学習用）
                    </h4>
                    <p>
                        仕様：「年齢0〜120歳を受け付け、0〜12歳＝子ども、13〜64歳＝大人、65歳以上＝シニアの料金区分にする」
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>同値パーティション</th>
                                    <th>範囲</th>
                                    <th>代表値</th>
                                    <th>境界値（2値法の例）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>無効（下）</td>
                                    <td>−1以下</td>
                                    <td>−5</td>
                                    <td>−1 と 0</td>
                                </tr>
                                <tr className="even">
                                    <td>子ども</td>
                                    <td>0〜12</td>
                                    <td>6</td>
                                    <td>0、12</td>
                                </tr>
                                <tr className="odd">
                                    <td>大人</td>
                                    <td>13〜64</td>
                                    <td>30</td>
                                    <td>13、64</td>
                                </tr>
                                <tr className="even">
                                    <td>シニア</td>
                                    <td>65〜120</td>
                                    <td>80</td>
                                    <td>65、120</td>
                                </tr>
                                <tr className="odd">
                                    <td>無効（上）</td>
                                    <td>121以上</td>
                                    <td>200</td>
                                    <td>120 と 121</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        テスト入力の例：<strong>−1、0、12、13、64、65、120、121</strong>（境界値）＋各区分の代表値。
                    </p>
                    <h4 id="具体例②決定表テスト学習用">具体例②：決定表テスト（学習用）</h4>
                    <p>
                        仕様：「会員かつクーポンありなら15%引き、会員のみなら5%引き、クーポンのみなら10%引き、どちらもなければ割引なし」
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>ルール</th>
                                    <th>会員</th>
                                    <th>クーポン</th>
                                    <th>割引</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>R1</td>
                                    <td>はい</td>
                                    <td>はい</td>
                                    <td>15%</td>
                                </tr>
                                <tr className="even">
                                    <td>R2</td>
                                    <td>はい</td>
                                    <td>いいえ</td>
                                    <td>5%</td>
                                </tr>
                                <tr className="odd">
                                    <td>R3</td>
                                    <td>いいえ</td>
                                    <td>はい</td>
                                    <td>10%</td>
                                </tr>
                                <tr className="even">
                                    <td>R4</td>
                                    <td>いいえ</td>
                                    <td>いいえ</td>
                                    <td>0%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>各ルールを1ケースとして、4ケースですべての条件の組合せを確認できます。</p>
                    <h4 id="具体例③ペアワイズ組合せテスト学習用">
                        具体例③：ペアワイズ（組合せテスト）（学習用）
                    </h4>
                    <p>
                        パラメータ：ブラウザ（Chrome／Firefox／Edge）× OS（Windows／macOS／Linux）×
                        言語（日本語／英語）。全組合せは
                        3×3×2＝18通りですが、<strong>すべてのパラメータ値の「ペア」を1回以上含む</strong>ように選ぶと9ケースで足ります。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>No.</th>
                                    <th>ブラウザ</th>
                                    <th>OS</th>
                                    <th>言語</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>1</td>
                                    <td>Chrome</td>
                                    <td>Windows</td>
                                    <td>日本語</td>
                                </tr>
                                <tr className="even">
                                    <td>2</td>
                                    <td>Chrome</td>
                                    <td>macOS</td>
                                    <td>英語</td>
                                </tr>
                                <tr className="odd">
                                    <td>3</td>
                                    <td>Chrome</td>
                                    <td>Linux</td>
                                    <td>日本語</td>
                                </tr>
                                <tr className="even">
                                    <td>4</td>
                                    <td>Firefox</td>
                                    <td>Windows</td>
                                    <td>英語</td>
                                </tr>
                                <tr className="odd">
                                    <td>5</td>
                                    <td>Firefox</td>
                                    <td>macOS</td>
                                    <td>日本語</td>
                                </tr>
                                <tr className="even">
                                    <td>6</td>
                                    <td>Firefox</td>
                                    <td>Linux</td>
                                    <td>英語</td>
                                </tr>
                                <tr className="odd">
                                    <td>7</td>
                                    <td>Edge</td>
                                    <td>Windows</td>
                                    <td>日本語</td>
                                </tr>
                                <tr className="even">
                                    <td>8</td>
                                    <td>Edge</td>
                                    <td>macOS</td>
                                    <td>英語</td>
                                </tr>
                                <tr className="odd">
                                    <td>9</td>
                                    <td>Edge</td>
                                    <td>Linux</td>
                                    <td>日本語</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <aside className="callout callout-note">
                        <div className="callout-body">
                            <p>
                                規格の用語定義でも、ペアワイズは<strong>組合せテストの最も一般的な形</strong>とされています。実際の環境では存在しない組合せ（例：特定ブラウザと特定OSの非対応）は別途除外してください。
                            </p>
                        </div>
                    </aside>
                    <h4 id="具体例④mcdc構造ベース学習用">具体例④：MC/DC（構造ベース）（学習用）</h4>
                    <p>
                        判定：<code>if (A &amp;&amp; (B || C))</code>
                        に対して、<strong>各条件が単独で判定結果を変えること</strong>を示すテストを選びます（4ケース＝条件数＋1）。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>テスト</th>
                                    <th>A</th>
                                    <th>B</th>
                                    <th>C</th>
                                    <th>結果</th>
                                    <th>独立性を示す相手</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>T1</td>
                                    <td>真</td>
                                    <td>真</td>
                                    <td>偽</td>
                                    <td>真</td>
                                    <td>基準</td>
                                </tr>
                                <tr className="even">
                                    <td>T2</td>
                                    <td>偽</td>
                                    <td>真</td>
                                    <td>偽</td>
                                    <td>偽</td>
                                    <td>T1との比較でAが結果を変える</td>
                                </tr>
                                <tr className="odd">
                                    <td>T3</td>
                                    <td>真</td>
                                    <td>偽</td>
                                    <td>偽</td>
                                    <td>偽</td>
                                    <td>T1との比較でBが結果を変える</td>
                                </tr>
                                <tr className="even">
                                    <td>T4</td>
                                    <td>真</td>
                                    <td>偽</td>
                                    <td>真</td>
                                    <td>真</td>
                                    <td>T3との比較でCが結果を変える</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4 id="具体例⑤メタモルフィックテスト学習用">
                        具体例⑤：メタモルフィックテスト（学習用）
                    </h4>
                    <p>
                        「正解が分からなくても、入力を変えたときの<strong>出力の関係（メタモルフィック関係）</strong>は分かる」場面で使います（AIや科学計算で特に有用）。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>対象</th>
                                    <th>メタモルフィック関係</th>
                                    <th>テスト</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>検索機能</td>
                                    <td>絞り込み条件を追加しても件数は増えない</td>
                                    <td>条件なしの件数 ≧ 条件ありの件数 を確認</td>
                                </tr>
                                <tr className="even">
                                    <td>三角関数の実装</td>
                                    <td>sin(x) と sin(π − x) は数学的に等しい</td>
                                    <td>
                                        複数のxで両者を比較する。浮動小数点では π
                                        を正確に表せず丸め誤差が生じるため、厳密な等値比較ではなく、あらかじめ定めた許容誤差（例：差の絶対値が
                                        1e-12 以下）以内かで判定する
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4 id="具体例⑥エラー推測経験ベース">具体例⑥：エラー推測（経験ベース）</h4>
                    <p>
                        過去の不具合や一般的な失敗パターンの知識から、テストを作る技法です。規格は、知識を<strong>欠陥データベースや「バグ分類（バグタクソノミー）」</strong>に蓄積して活用できると注記しています。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>失敗パターンの例</th>
                                    <th>テスト入力の例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>空入力の見落とし</td>
                                    <td>空文字、空白のみ</td>
                                </tr>
                                <tr className="even">
                                    <td>文字種の想定外</td>
                                    <td>絵文字、全角・半角混在</td>
                                </tr>
                                <tr className="odd">
                                    <td>上限の見落とし</td>
                                    <td>最大長＋1文字</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="7-5-経験ベースのテスト445">7-5. 経験ベースのテスト（4.4.5）</h3>
                    <p>
                        規格の用語注記は、経験ベーステストに<strong>テスト攻撃、ツアー、エラー分類</strong>などの概念が含まれ得ると述べています。目次には<strong>チェックリストベーステスト</strong>の項目もあります。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>手法</th>
                                    <th>概要（一般的な説明）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>チェックリストベース</td>
                                    <td>過去の経験をチェック項目にして網羅漏れを防ぐ</td>
                                </tr>
                                <tr className="even">
                                    <td>ツアー</td>
                                    <td>
                                        機能の「旅行コース」を決めて探索する（例：金融系フローを一巡する）
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>攻撃</td>
                                    <td>典型的な弱点を狙った入力を与える</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="7-6-再テストと回帰テスト446">7-6. 再テストと回帰テスト（4.4.6）</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>種類</th>
                                    <th>目的</th>
                                    <th>規格の整理（趣旨）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>再テスト（確認テスト）</td>
                                    <td>修正が欠陥を取り除けたか確認</td>
                                    <td>不具合を直したあとに行う</td>
                                </tr>
                                <tr className="even">
                                    <td>回帰テスト</td>
                                    <td>変更の影響で、変更していない部分が壊れていないか確認</td>
                                    <td>
                                        修正が正しく動くかではなく、<strong>他の部分が偶発的に影響を受けていないか</strong>を見る
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div aria-label="図解13" className="mermaid-diagram" id="mmd13" role="img">
                        
<Mermaid chart={DIAGRAM_13} />

                    </div>
                    <h3 id="7-7-手動テストと自動テスト447継続的テスト448">
                        7-7. 手動テストと自動テスト（4.4.7）、継続的テスト（4.4.8）
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>項目</th>
                                    <th>説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>手動テスト</td>
                                    <td>
                                        人間がテストアイテムに情報を入力し、結果を確認する。ツール・ロボット・実行エンジンは使わない（規格の定義の趣旨）
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>自動テスト</td>
                                    <td>
                                        ツール、ロボット、その他のテスト実行エンジンでテストを実行する
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>継続的テスト（4.4.8）</td>
                                    <td>
                                        目次にある項目。一般には、開発のパイプラインにテストを組み込み、継続的にフィードバックを得る考え方（詳細は正式版を参照）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <aside className="callout callout-practice">
                        <div className="callout-title">学習のヒント</div>
                        <div className="callout-body">
                            <p>
                                自動化は「手動をなくす」ことではありません。回帰テストなど<strong>繰り返し価値が高い部分から</strong>自動化し、探索的テストは人間が担う、という役割分担が基本です。
                            </p>
                        </div>
                    </aside>
                    <h3 id="7-8-バックトゥバックテスト449">7-8. バックトゥバックテスト（4.4.9）</h3>
                    <p>
                        <strong>別バージョンのシステム</strong
                        >に同じ入力を与えて、期待結果を作り、比較する方法です（別名：差分テスト）。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>別バージョンの例（規格の例示）</th>
                                    <th>具体例（学習用）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>既存のシステム</td>
                                    <td>旧システムと新システムの出力を比較（移行プロジェクト）</td>
                                </tr>
                                <tr className="even">
                                    <td>独立チームが開発したシステム</td>
                                    <td>同じ仕様から別チームが作った実装と比較</td>
                                </tr>
                                <tr className="odd">
                                    <td>別のプログラミング言語での実装</td>
                                    <td>Javaの実装とPythonの実装で比較</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="7-9-abテスト4410">7-9. A/Bテスト（4.4.10）</h3>
                    <p>
                        規格は、<strong>2つのシステム（またはコンポーネント）のどちらがより良く機能するかを統計的に判断する</strong>テストアプローチと定義しています（別名：スプリットラン）。
                    </p>
                    <div aria-label="図解14" className="mermaid-diagram" id="mmd14" role="img">
                        
<Mermaid chart={DIAGRAM_14} />

                    </div>
                    <p>例（学習用）：購入ボタンの色を2案用意し、購入率を比較する。</p>
                    <h3 id="7-10-数学ベースのテストとファズテスト4411">
                        7-10. 数学ベースのテストとファズテスト（4.4.11）
                    </h3>
                    <p>
                        規格の用語定義では、<strong>ファズテスト</strong>は大量のランダム（またはランダムに近い）データ（fuzz）をテストアイテムの入力に使うアプローチです。
                    </p>
                    <div aria-label="図解15" className="mermaid-diagram" id="mmd15" role="img">
                        
<Mermaid chart={DIAGRAM_15} />

                    </div>
                    <h3 id="7-11-テスト環境とテストデータ管理44124413">
                        7-11. テスト環境とテストデータ管理（4.4.12／4.4.13）
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>項目</th>
                                    <th>内容</th>
                                    <th>具体例（学習用）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>テスト環境</td>
                                    <td>
                                        テスト実行のために必要なハード・ソフト・ネットワークの構成
                                    </td>
                                    <td>本番に近い構成のステージング環境</td>
                                </tr>
                                <tr className="even">
                                    <td>テストデータ管理</td>
                                    <td>テストに使うデータの準備・保護・再利用</td>
                                    <td>個人情報を含まないマスキング済みデータ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        文書面では、<strong>テスト環境要求／テストデータ要求</strong>と、<strong>テスト環境報告／テストデータ準備状況報告</strong>が目次に挙がっています（STEP
                        6参照）。
                    </p>

                    </section>
  );
}