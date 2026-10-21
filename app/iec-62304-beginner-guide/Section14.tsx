import React from 'react';
import Diagram from './Diagram';
export default function Section14() { return <><h2 id="sec-30">{"14. SOUP（出自不明ソフトウェア）の扱い"}</h2>

<h3 id="sec-31">{"14.1 SOUPとは"}</h3>

<p>{" IEC 62304:2006/Amd 1:2015 の定義（3.29）では、SOUP は次の 2 つの条件のいずれかに該当するソフトウェアアイテムです。 "}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"条件"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"① 既製ソフトウェア"}</td><td>{" 既に開発され、一般に入手可能で、当該医療機器に組み込む目的で開発されたものではないソフトウェアアイテム（off-the-shelf software） "}</td></tr><tr className="even"><td>{"② 記録が不十分な既開発ソフトウェア"}</td><td>{" 以前に開発されたが、開発プロセスの十分な記録が利用できないソフトウェアアイテム "}</td></tr></tbody></table></div>

<aside className="callout callout-warn"><div className="callout-icon">{"⚠"}</div><div className="callout-body"><p><strong>{"注意"}</strong>{"：SOUP は医療機器ソフトウェアシステムを構成する「アイテム」に対する概念です。"}<strong>{"医療機器ソフトウェアシステムそのものを SOUP とみなすことはできません"}</strong>{"。 "}</p></div></aside>

<div className="table-scroll"><table><thead><tr className="header"><th>{"分類"}</th><th>{"例"}</th></tr></thead><tbody><tr className="odd"><td>{"OS"}</td><td>{"Linux、Android、RTOS"}</td></tr><tr className="even"><td>{"ライブラリ・フレームワーク"}</td><td>{"OSSのライブラリ、通信スタック、暗号ライブラリ"}</td></tr><tr className="odd"><td>{"ミドルウェア"}</td><td>{"データベース、メッセージキュー"}</td></tr><tr className="even"><td>{"商用既製品（COTS）"}</td><td>{"購入したSDK"}</td></tr></tbody></table></div>

<h3 id="sec-32">{"14.2 SOUPの管理サイクル"}</h3>

<Diagram id="mmd-13" label="SOUPの管理サイクル" />

<div className="table-scroll"><table><thead><tr className="header"><th>{"管理項目"}</th><th>{"記録する内容"}</th></tr></thead><tbody><tr className="odd"><td>{"識別"}</td><td>{"名称、メーカー／提供元、バージョン"}</td></tr><tr className="even"><td>{"要求"}</td><td>{"そのSOUPに期待する機能・性能、必要なシステム環境"}</td></tr><tr className="odd"><td>{"異常リスト"}</td><td>{"公開されている既知の不具合、評価結果"}</td></tr><tr className="even"><td>{"リスク"}</td><td>{"危険状態への寄与、対策"}</td></tr><tr className="odd"><td>{"変更管理"}</td><td>{"バージョン更新時の影響評価"}</td></tr></tbody></table></div>

<aside className="callout callout-tip"><div className="callout-icon">{"💡"}</div><div className="callout-body"><p>{" 実務の失敗例として、「サードパーティだから他人の問題」と扱うことが挙げられています。"}<strong>{"使う以上、機器全体の安全には自社が責任を持ちます"}</strong>{"。 "}</p></div></aside>
</>; }
