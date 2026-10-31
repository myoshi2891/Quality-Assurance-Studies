import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_17 } from './diagrams';

export default function Section9() {
  return (
    <section>
<h2 id="step-9システム特性とテストの役割附属書ab">
                        STEP 9：システム特性とテストの役割（附属書A・B）
                    </h2>
                    <h3 id="9-1-附属書aシステム特性とテスト例">
                        9-1. 附属書A：システム特性とテスト（例）
                    </h3>
                    <p>
                        2022年版で<strong>新設</strong>された附属書です。序文は、テスト対象システムに当てはまる特性を特定できたら、その特性に挙げられた<strong
                            >専門的なテスト（specialized testing）</strong
                        >を、テスト戦略に含めるか検討する、という使い方を示しています。
                    </p>
                    <h4 id="附属書aで扱われる13特性">附属書Aで扱われる13特性</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>節</th>
                                    <th>特性</th>
                                    <th>初学者向けの注目ポイント（解説者の補足）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>A.2</td>
                                    <td>人工知能（AI）</td>
                                    <td>
                                        学習データ、非決定性、メタモルフィックテスト、ニューロンカバレッジの考え方
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>A.3</td>
                                    <td>自律システム</td>
                                    <td>人間の介入なしで長時間動く。想定外状況での振る舞い</td>
                                </tr>
                                <tr className="odd">
                                    <td>A.4</td>
                                    <td>特注（Bespoke）</td>
                                    <td>利用者要求への適合、受入テスト</td>
                                </tr>
                                <tr className="even">
                                    <td>A.5</td>
                                    <td>クローズドループ</td>
                                    <td>出力が入力に戻る制御系。フィードバック挙動</td>
                                </tr>
                                <tr className="odd">
                                    <td>A.6</td>
                                    <td>COTS（市販パッケージ）</td>
                                    <td>ソース非公開が多く、仕様ベース・互換性中心</td>
                                </tr>
                                <tr className="even">
                                    <td>A.7</td>
                                    <td>組込み</td>
                                    <td>ハードとの結合、資源制約、実機環境</td>
                                </tr>
                                <tr className="odd">
                                    <td>A.8</td>
                                    <td>Fit and forget（設置したら放置）</td>
                                    <td>長期間の信頼性、保守が難しい前提</td>
                                </tr>
                                <tr className="even">
                                    <td>A.9</td>
                                    <td>IoT</td>
                                    <td>多数のデバイス、通信、セキュリティ</td>
                                </tr>
                                <tr className="odd">
                                    <td>A.10</td>
                                    <td>モバイル</td>
                                    <td>多様な端末・OS、通信状態、バッテリー</td>
                                </tr>
                                <tr className="even">
                                    <td>A.11</td>
                                    <td>リアルタイム</td>
                                    <td>時間制約、タイミングの検証</td>
                                </tr>
                                <tr className="odd">
                                    <td>A.12</td>
                                    <td>規制対象</td>
                                    <td>法規制・標準への適合、証跡</td>
                                </tr>
                                <tr className="even">
                                    <td>A.13</td>
                                    <td>安全関連</td>
                                    <td>人命・財産・環境への影響、厳格な構造ベーステスト</td>
                                </tr>
                                <tr className="odd">
                                    <td>A.14</td>
                                    <td>科学技術（Scientific/technical）</td>
                                    <td>数値精度、正解が不明な場合の検証</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <aside className="callout callout-note">
                        <div className="callout-title">ポイント</div>
                        <div className="callout-body">
                            <p>
                                目次では、附属書Aの各特性に「Specialized
                                testing（A.x.3）」の節が確認できます（AI、自律、特注、クローズドループ、COTS、組込み、Fit
                                and forget
                                など）。<strong>特性ごとの具体的な推奨テストの中身</strong>は正式版でご確認ください。表の注目ポイントは、特性名から導ける一般的な観点の補足です。
                            </p>
                        </div>
                    </aside>
                    <h4 id="ai関連の用語が増えた2022年版の用語節">
                        AI関連の用語が増えた（2022年版の用語節）
                    </h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>用語</th>
                                    <th>規格の定義（趣旨）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>AIベースシステム</td>
                                    <td>AIを実装した構成要素を1つ以上含むシステム</td>
                                </tr>
                                <tr className="even">
                                    <td>神経網（ニューラルネットワーク）</td>
                                    <td>重み付きリンクで結ばれた処理要素のネットワーク</td>
                                </tr>
                                <tr className="odd">
                                    <td>ニューロンカバレッジ</td>
                                    <td>
                                        ニューラルネット内の「活性化したニューロン」の割合（テストセットに対して）
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>非決定的システム</td>
                                    <td>
                                        同じ入力・初期状態でも、常に同じ出力・最終状態を出すとは限らないシステム
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>メタモルフィックテスト</td>
                                    <td>
                                        既存のテストケースとメタモルフィック関係から、新たなテストケースを作る仕様ベースの技法
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="9-2-システム特性から戦略を考える流れ">
                        9-2. システム特性から戦略を考える流れ
                    </h3>
                    <div aria-label="図解17" aria-describedby="mmd17-desc" className="mermaid-diagram" id="mmd17" role="img">

<Mermaid chart={DIAGRAM_17} />

                    </div>
                    <p className="visually-hidden" id="mmd17-desc">
                        附属書Aの13特性と照合して該当する特性を特定し、専門的なテスト手法を確認、リスクに照らして戦略へ反映する。
                    </p>
                    <h3 id="9-3-附属書bテストの役割">9-3. 附属書B：テストの役割</h3>
                    <p>
                        附属書B（参考）は、<strong>汎用的なテストの役割とその責任の概要</strong>を紹介します。組織では「役職名」ではなく「役割」でテスト活動を捉えると、小規模チームやアジャイル開発でも責務の整理に役立ちます。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>観点</th>
                                    <th>整理のしかた（学習用）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>1人が複数の役割を担う</td>
                                    <td>小規模チームでは普通。役割と人を分けて考える</td>
                                </tr>
                                <tr className="even">
                                    <td>独立性の確保</td>
                                    <td>重要な領域は、作成者と別の人がテストする（STEP 4参照）</td>
                                </tr>
                                <tr className="odd">
                                    <td>責任の明確化</td>
                                    <td>計画・設計・実行・報告・環境管理など、誰が何を担うか</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    
    </section>
  );
}