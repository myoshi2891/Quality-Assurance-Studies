import React from 'react';
import Diagram from './Diagram';
export default function Section13() { return <><h2 id="sec-27">{"Step 7：保守と問題解決（箇条6・9）"}</h2>

<h3 id="sec-28">{"7.1 保守プロセス（箇条6）"}</h3>

<p>{" 保守は、出荷後のソフトウェアに起きる"}<strong>{"問題の受付・評価・修正"}</strong>{"を管理するプロセスです。 "}</p>

<Diagram id="mmd-12" label="ソフトウェア保守プロセスの流れ" />

<div className="table-scroll"><table><thead><tr className="header"><th>{"要点"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"保守計画"}</td><td>{"問題報告の受付、評価、修正、SOUPの更新対応を計画しておく"}</td></tr><tr className="even"><td>{"安全性の評価"}</td><td>{" 受け取ったすべての問題報告について、"}<strong>{"安全性への影響"}</strong>{"を評価する "}</td></tr><tr className="odd"><td>{"修正の実装"}</td><td>{" 開発プロセス（箇条5）を再利用し、変更の影響を評価して再検証する "}</td></tr></tbody></table></div>

<h3 id="sec-29">{"7.2 問題解決プロセス（箇条9）"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"手順"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"1. 問題報告の作成"}</td><td>{"不具合・異常を記録する"}</td></tr><tr className="even"><td>{"2. 調査"}</td><td>{"原因と影響（安全性を含む）を調べる"}</td></tr><tr className="odd"><td>{"3. 通知"}</td><td>{"必要に応じて関係者に通知する"}</td></tr><tr className="even"><td>{"4. 変更要求の承認"}</td><td>{"修正の可否を判断する"}</td></tr><tr className="odd"><td>{"5. 記録の維持"}</td><td>{"問題と解決の履歴を残す"}</td></tr><tr className="even"><td>{"6. 傾向分析"}</td><td>{"問題の傾向を分析する"}</td></tr><tr className="odd"><td>{"7. 解決の検証"}</td><td>{"修正が有効で、新たな問題を生まないことを確認する"}</td></tr></tbody></table></div>
</>; }
