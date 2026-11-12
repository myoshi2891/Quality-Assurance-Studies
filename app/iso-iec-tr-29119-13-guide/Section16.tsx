import React from 'react';

/** 15. よくある誤解とQ&A — preserve the complete original category. */
export default function Section16() {
  return <>
<h2 id={"s47"}>{"15. よくある誤解とQ&A"}</h2>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s47"}><table><thead><tr className={"header"}><th>{"質問"}</th><th>{"回答"}</th></tr></thead><tbody><tr className={"odd"}><td>{"Q1. このTRに準拠すれば認証や適合マークがもらえる？"}</td><td>{"いいえ。TRは"}<strong>{"情報提供の文書"}</strong>{"であり、認証制度の基準ではありません。"}</td></tr><tr className={"even"}><td>{"Q2. 19795を使っていれば29119は不要？"}</td><td>{"19795は性能テストの専門規格です。TRによれば、"}<strong>{"リスクベースの戦略と全品質特性"}</strong>{"の観点は19795だけではカバーされません。両者の併用が前提です。"}</td></tr><tr className={"odd"}><td>{"Q3. 誤り率さえ良ければ合格でよい？"}</td><td>{"TRの主張の核心は、"}<strong>{"それでは不十分"}</strong>{"という点です。信頼性・セキュリティ・使いやすさ・プライバシー規制適合も検討対象です。"}</td></tr><tr className={"even"}><td>{"Q4. なりすまし（プレゼンテーション攻撃）のテストは？"}</td><td>{"19795-1が対象外と明記しているのは、"}<strong>{"意図的にシステムを欺こうとする人が関与する場合の誤り率・スループットの測定"}</strong>{"です"}<span className={"tag tag-tr"}>{"TR確認済"}</span>{"。プレゼンテーション攻撃のテスト全般を対象外としているわけではありません。PADの評価は一般にISO/IEC 30107系で扱われます"}<span className={"tag tag-gen"}>{"一般知識"}</span>{"。"}</td></tr><tr className={"odd"}><td>{"Q5. 生体認証を使う小さな機能だけでもTRは使える？"}</td><td>{"使えます。TRは"}<strong>{"「生体認証サブシステムを含む大規模システム」"}</strong>{"も対象です"}<span className={"tag tag-tr"}>{"TR確認済"}</span>{"。"}</td></tr><tr className={"even"}><td>{"Q6. Annex Cのリスクを全部やる必要がある？"}</td><td>{"ありません。例の集合です。自プロジェクトに合わせて取捨選択します。"}</td></tr><tr className={"odd"}><td>{"Q7. TRは頻繁に改訂される？"}</td><td>{"公開情報では Edition 1（2022）のみが確認できます。今後の改訂状況はISOページで確認してください。"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<hr />
{"\n"}
  </>;
}
