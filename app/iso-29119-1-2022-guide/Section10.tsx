import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_18 } from './diagrams';

export default function Section10() {
  return (
    <section>
<h2 id="step-10実務への適用手順">STEP 10：実務への適用手順</h2>
                    <h3 id="10-1-導入ステップ">10-1. 導入ステップ</h3>
                    <div aria-label="図解18" className="mermaid-diagram" id="mmd18" role="img">
                        
<Mermaid chart={DIAGRAM_18} />

                    </div>
                    <h3 id="10-2-現場での使い方の指針">10-2. 現場での使い方の指針</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>場面</th>
                                    <th>活かし方</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>チームの用語がそろっていない</td>
                                    <td>
                                        Part 1
                                        の用語を共通語彙として使う（例：再テストと回帰テストを区別する）
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>テスト戦略が属人的</td>
                                    <td>
                                        テストアプローチ（レベル・タイプ・技法・プラクティス）を表にして書き出す
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>優先順位が曖昧</td>
                                    <td>
                                        リスクベースドテストの考え方で「なぜその順か」を説明できるようにする
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>アジャイル／DevOps</td>
                                    <td>
                                        序文の「調整適合（tailored
                                        conformance）」の考え方で、必要な部分だけ取り入れる。要求事項に従わない正当な理由がある場合は、調整の程度と根拠を記述し、関係者と合意したうえで適合を主張する。Part
                                        6（アジャイル技術報告）も参照
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>AIを含むシステム</td>
                                    <td>
                                        附属書Aと Part
                                        11（AIベースシステムのテスト技術報告）を併読する
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="10-3-初学者が最初にやるべき3つのこと">
                        10-3. 初学者が最初にやるべき3つのこと
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>順番</th>
                                    <th>アクション</th>
                                    <th>目的</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>①</td>
                                    <td>自分のプロジェクトの「テストアプローチ表」を作る</td>
                                    <td>現状の言語化</td>
                                </tr>
                                <tr className="even">
                                    <td>②</td>
                                    <td>主な機能を3段階（高・中・低）でリスク評価する</td>
                                    <td>優先順位の根拠づくり</td>
                                </tr>
                                <tr className="odd">
                                    <td>③</td>
                                    <td>再テストと回帰テストを区別して計画に書く</td>
                                    <td>用語の統一</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    
    </section>
  );
}