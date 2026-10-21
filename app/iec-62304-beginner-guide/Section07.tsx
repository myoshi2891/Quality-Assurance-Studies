import React from 'react';
import Diagram from './Diagram';
export default function Section07() { return <><h2 id="sec-10">{"Step 1：自分のソフトウェアが対象か判断する"}</h2>

<h3 id="sec-11">{"1.1 適用対象の判断"}</h3>

<Diagram id="mmd-4" label="62304の適用対象の判断フロー" />

<div className="table-scroll"><table><thead><tr className="header"><th>{"区分"}</th><th>{"例"}</th><th>{"62304"}</th></tr></thead><tbody><tr className="odd"><td>{"SaMD（ソフトウェア単体の医療機器）"}</td><td>{" 画像診断支援プログラム、血糖値管理アプリ（医療機器該当の場合） "}</td><td>{"対象"}</td></tr><tr className="even"><td>{"SiMD（組込みソフトウェア）"}</td><td>{"輸液ポンプの制御ソフト、人工呼吸器のファームウェア"}</td><td>{"対象"}</td></tr><tr className="odd"><td>{"製造・品質支援ツール"}</td><td>{"社内のテスト自動化ツール、構成管理ツール"}</td><td>{"直接の対象外（ただし品質システム側で管理）"}</td></tr><tr className="even"><td>{"医療機器でない一般ソフト"}</td><td>{"一般的な業務システム"}</td><td>{"対象外（医療機器でなければ）"}</td></tr></tbody></table></div>

<aside className="callout callout-tip"><div className="callout-icon">{"💡"}</div><div className="callout-body"><p>{" 「医療機器に該当するかどうか」は規制側（薬機法、FDA、EU MDRなど）の判断です。62304自体は"}<strong>{"該当を判定しません"}</strong>{"。 "}</p></div></aside>

<h3 id="sec-12">{"1.2 スコープの限界"}</h3>

<p>{" 規格は、"}<strong>{"機器のバリデーションと最終リリース"}</strong>{"を扱いません。ソフトウェアのみで成り立つ医療機器であっても同じです。これらは別の枠組み（ISO 13485の設計開発、各国規制）で対応します。 "}</p>
</>; }
