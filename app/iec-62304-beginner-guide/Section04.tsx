import React from 'react';
import Diagram from './Diagram';
export default function Section04() { return <><h2 id="sec-7">{"4. 規格の位置づけ（関連規格マップ）"}</h2>

<p>{" 62304は単独では機能しません。周辺規格との関係を先に押さえると、全体像が掴みやすくなります。 "}</p>

<Diagram id="mmd-1" label="IEC 62304と周辺規格の関係" />

<aside className="callout callout-note"><div className="callout-icon">{"ℹ"}</div><div className="callout-body"><p>{" 各国規制での扱いは一律ではありません。米国では FDA の認知コンセンサス規格、EU MDR では EN 62304 による適合推定は得られず（第20章参照）、日本では国内制度に応じて活用されます。 "}</p></div></aside>

<div className="table-scroll"><table><thead><tr className="header"><th>{"関連規格"}</th><th>{"62304との関係"}</th><th>{"一言メモ"}</th></tr></thead><tbody><tr className="odd"><td>{"ISO 13485"}</td><td>{"前提（QMS）"}</td><td>{"62304はQMSの中で運用する"}</td></tr><tr className="even"><td>{"ISO 14971"}</td><td>{"前提（リスク）"}</td><td>{"62304の安全クラス判定やリスク活動の土台"}</td></tr><tr className="odd"><td>{"IEC/TR 80002-1:2009"}</td><td>{"手引き"}</td><td>{" ISO 14971:2007 を IEC 62304:2006 のソフトウェアに適用する際のガイダンス。両規格の要求事項を追加・変更するものではない。なお ISO 14971 の現行版は 2019 年版だが、本報告書は 2019 年版向けに改訂されておらず、その要求事項を置き換えたり更新したりするものでもない "}</td></tr><tr className="even"><td>{"IEC 81001-5-1"}</td><td>{"補完"}</td><td>{"サイバーセキュリティは62304本体では詳細に扱わない"}</td></tr><tr className="odd"><td>{"IEC 82304-1"}</td><td>{"補完"}</td><td>{"専用ハードを持たないヘルスソフトウェアの製品要求"}</td></tr><tr className="even"><td>{"FDA"}</td><td>{"規制当局がコンセンサス規格として認識"}</td><td>{"米国では文書化レベルの考え方が別にある（Step 2参照）"}</td></tr></tbody></table></div>
</>; }
