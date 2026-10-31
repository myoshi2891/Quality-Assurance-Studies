import React from 'react';

export default function Section13() {
  return (
    <section>
<h2 id="用語集">用語集</h2>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>用語（英）</th>
                                    <th>日本語</th>
                                    <th>意味（要約）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>A/B testing</td>
                                    <td>A/Bテスト</td>
                                    <td>
                                        2つのシステムまたはコンポーネントのどちらがよく機能するかを統計的に判断する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>Back-to-back testing</td>
                                    <td>バックトゥバックテスト（差分テスト）</td>
                                    <td>別バージョンのシステムで期待結果を作って比較する</td>
                                </tr>
                                <tr className="odd">
                                    <td>Boundary value analysis</td>
                                    <td>境界値分析</td>
                                    <td>同値パーティションの境界を試す仕様ベースの技法</td>
                                </tr>
                                <tr className="even">
                                    <td>Equivalence partitioning</td>
                                    <td>同値分割</td>
                                    <td>同様に扱われる入力の区分から代表値を選ぶ技法</td>
                                </tr>
                                <tr className="odd">
                                    <td>Error guessing</td>
                                    <td>エラー推測</td>
                                    <td>
                                        過去の失敗や一般的な失敗モードの知識からテストを作る技法
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>Exhaustive testing</td>
                                    <td>網羅テスト</td>
                                    <td>
                                        すべての入力値・事前条件の組合せを試すこと（通常は不可能）
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>Exploratory testing</td>
                                    <td>探索的テスト</td>
                                    <td>
                                        経験や直観に基づき、その場でテストを設計・実行する経験ベースのテスト
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>Fuzz testing</td>
                                    <td>ファズテスト</td>
                                    <td>大量のランダムに近いデータを入力に使うテスト</td>
                                </tr>
                                <tr className="odd">
                                    <td>Incident</td>
                                    <td>インシデント</td>
                                    <td>ライフサイクル中の異常または予期しない事象・状態</td>
                                </tr>
                                <tr className="even">
                                    <td>MC/DC</td>
                                    <td>修正条件判定カバレッジ</td>
                                    <td>
                                        各条件が単独で判定結果に影響することを示す構造ベースの技法
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>Metamorphic testing</td>
                                    <td>メタモルフィックテスト</td>
                                    <td>
                                        入力変更と出力変化の関係を使ってテストケースを増やす技法
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>Product risk</td>
                                    <td>プロダクトリスク</td>
                                    <td>製品が機能・品質・構造で欠陥を持つ可能性</td>
                                </tr>
                                <tr className="odd">
                                    <td>Project risk</td>
                                    <td>プロジェクトリスク</td>
                                    <td>プロジェクト管理に関わるリスク</td>
                                </tr>
                                <tr className="even">
                                    <td>Regression testing</td>
                                    <td>回帰テスト</td>
                                    <td>変更後に、変更していない部分の不具合を検出するテスト</td>
                                </tr>
                                <tr className="odd">
                                    <td>Retesting</td>
                                    <td>再テスト（確認テスト）</td>
                                    <td>欠陥の修正が成功したかを確認するテスト</td>
                                </tr>
                                <tr className="even">
                                    <td>Risk-based testing</td>
                                    <td>リスクベースドテスト</td>
                                    <td>
                                        分析されたリスクに基づいてテストを管理・選択・優先順位付けする
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>Scripted testing</td>
                                    <td>スクリプト化テスト</td>
                                    <td>文書化されたテストスクリプトに基づくテスト</td>
                                </tr>
                                <tr className="even">
                                    <td>Static testing</td>
                                    <td>静的テスト</td>
                                    <td>実行せずに品質基準に照らして調べるテスト</td>
                                </tr>
                                <tr className="odd">
                                    <td>Dynamic testing</td>
                                    <td>動的テスト</td>
                                    <td>テストアイテムを実行して評価するテスト</td>
                                </tr>
                                <tr className="even">
                                    <td>Test approach</td>
                                    <td>テストアプローチ</td>
                                    <td>テスト戦略設計での高レベルの実装上の選択</td>
                                </tr>
                                <tr className="odd">
                                    <td>Test basis</td>
                                    <td>テストベース</td>
                                    <td>テストケースの設計・実装の根拠になる情報</td>
                                </tr>
                                <tr className="even">
                                    <td>Test case</td>
                                    <td>テストケース</td>
                                    <td>前提条件・入力・期待結果の組</td>
                                </tr>
                                <tr className="odd">
                                    <td>Test oracle</td>
                                    <td>テストオラクル</td>
                                    <td>期待結果を判断する拠り所</td>
                                </tr>
                                <tr className="even">
                                    <td>Test practice</td>
                                    <td>テストプラクティス</td>
                                    <td>
                                        テストを容易にするために、組織・テスト管理・動的テストの各プロセスに適用できる概念的枠組み（例：モデルベーステスト、探索的テスト）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    
    </section>
  );
}