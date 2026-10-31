import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_16 } from './diagrams';

export default function Section8() {
  return (
    <section>
<h2 id="step-8プロジェクト管理報告インシデント管理4547節">
                        STEP 8：プロジェクト管理・報告・インシデント管理（4.5〜4.7節）
                    </h2>
                    <p>
                        序文は、テスト設計・実行を直接支える活動として、<strong>テスト環境、テストデータ管理、コミュニケーションと報告、欠陥・インシデント管理</strong>を紹介しています。
                    </p>
                    <h3 id="8-1-各節の概要">8-1. 各節の概要</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>節</th>
                                    <th>内容</th>
                                    <th>ポイント</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>4.5 プロジェクト管理とテスト</td>
                                    <td>テストとプロジェクト管理の接点</td>
                                    <td>
                                        プロジェクトリスク（人員・納期・要求変更）をテスト計画に反映
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>4.6 コミュニケーションと報告</td>
                                    <td>テスト状況・結果の伝え方</td>
                                    <td>受け手に合わせた粒度で、判断材料として伝える</td>
                                </tr>
                                <tr className="odd">
                                    <td>4.7 欠陥・インシデント管理</td>
                                    <td>不具合の記録と追跡</td>
                                    <td>後述</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="8-2-インシデントとは">8-2. インシデントとは</h3>
                    <p>
                        規格は、<strong>インシデント</strong>を「プロジェクト・製品・サービス・システムのライフサイクル中に起きる、異常または予期しない事象・状態」と定義し、<strong>インシデント報告</strong>は同義語が非常に多い（不具合報告、バグ報告、欠陥報告、エラー報告、課題、障害報告など）と注記しています。
                    </p>
                    <h3 id="8-3-インシデントのライフサイクル典型例">
                        8-3. インシデントのライフサイクル（典型例）
                    </h3>
                    <p>
                        以下は一般的な運用例の図解であり、規格が定める必須の状態遷移ではありません。
                    </p>
                    <div aria-label="図解16" className="mermaid-diagram" id="mmd16" role="img">
                        
<Mermaid chart={DIAGRAM_16} />

                    </div>
                    <h3 id="8-4-良いインシデント報告の項目学習用チェックリスト">
                        8-4. 良いインシデント報告の項目（学習用チェックリスト）
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>項目</th>
                                    <th>記載例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>概要</td>
                                    <td>「注文確定ボタンを2回押すと二重請求される」</td>
                                </tr>
                                <tr className="even">
                                    <td>再現手順</td>
                                    <td>1回目クリック直後に2回目をクリック</td>
                                </tr>
                                <tr className="odd">
                                    <td>期待結果／実際の結果</td>
                                    <td>1件の請求／2件の請求</td>
                                </tr>
                                <tr className="even">
                                    <td>環境</td>
                                    <td>OS、ブラウザ、ビルド番号</td>
                                </tr>
                                <tr className="odd">
                                    <td>重大度・優先度</td>
                                    <td>重大度：高、優先度：高</td>
                                </tr>
                                <tr className="even">
                                    <td>添付</td>
                                    <td>スクリーンショット、ログ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    
    </section>
  );
}