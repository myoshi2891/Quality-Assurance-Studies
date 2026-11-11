import React from 'react';

/** 1. 30秒サマリ — preserve the complete original category. */
export default function Section02() {
  return <>
<h2 id={"s2"}>{"1. 30秒サマリ"}</h2>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s2"}><table><thead><tr className={"header"}><th>{"質問"}</th><th>{"答え"}</th></tr></thead><tbody><tr className={"odd"}><td>{"これは何？"}</td><td><strong>{"生体認証システムを、ISO/IEC/IEEE 29119（ソフトウェアテスト規格）に沿ってテストするための技術報告書（TR）"}</strong></td></tr><tr className={"even"}><td>{"何がうれしい？"}</td><td>{"生体認証の専門家向け規格（ISO/IEC 19795系）と、ソフトウェアテスト規格（29119系）の"}<strong>{"橋渡し"}</strong>{"ができる"}</td></tr><tr className={"odd"}><td>{"一番のポイントは？"}</td><td>{"誤り率・スループットだけでなく、"}<strong>{"信頼性・セキュリティ・使いやすさ・プライバシー規制適合まで含む全品質特性"}</strong>{"を "}<strong>{"リスクベース"}</strong>{" でテストする"}</td></tr><tr className={"even"}><td>{"規格ですか？"}</td><td><strong>{"いいえ、TR（技術報告書）"}</strong>{"。要求事項（shall）を課す文書ではなく、"}<strong>{"情報提供・指針"}</strong>{" の文書"}</td></tr><tr className={"odd"}><td>{"付属するものは？"}</td><td>{"生体認証システムの"}<strong>{"リスク例"}</strong>{"、および19795系規格・29109-1と29119の"}<strong>{"対応表（マッピング）"}</strong></td></tr></tbody></table>{"\n"}</div>
{"\n"}
<hr />
{"\n"}
  </>;
}
