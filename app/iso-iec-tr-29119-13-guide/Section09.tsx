import React from 'react';
import Diagram from './Diagram';

/** 8. Step 4：ISO/IEC/IEEE 29119 シリーズを復習する — preserve the complete original category. */
export default function Section09() {
  return <>
<h2 id={"s21"}>{"8. Step 4：ISO/IEC/IEEE 29119 シリーズを復習する"}</h2>
{"\n"}
<h3 id={"s22"}>{"8.1 29119のモデル"}<span className={"tag tag-tr"}>{"TR確認済"}</span></h3>
{"\n"}
<p>{"TR本文（5.5.2節）では、29119のモデルは"}<strong>{"テストプロセスを中心"}</strong>{"に置き、テスト文書はプロセスの"}<strong>{"成果物"}</strong>{"であると説明されています。テスト設計技法は29119-4に、全体の概念は29119-1に定義されます。"}</p>
{"\n"}
<figure className={"diagram"}><Diagram index={6} />{"\n"}</figure>
{"\n"}
<h3 id={"s23"}>{"8.2 29119が適用できる範囲"}<span className={"tag tag-tr"}>{"TR確認済"}</span></h3>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s23"}><table><thead><tr className={"header"}><th>{"観点"}</th><th>{"29119は…"}</th></tr></thead><tbody><tr className={"odd"}><td>{"品質特性"}</td><td>{"機能・非機能の"}<strong>{"全品質特性"}</strong>{"に適用可"}</td></tr><tr className={"even"}><td>{"業界"}</td><td><strong>{"あらゆる産業分野"}</strong></td></tr><tr className={"odd"}><td>{"重要度"}</td><td>{"安全重視・非安全重視の"}<strong>{"どちらにも"}</strong></td></tr><tr className={"even"}><td>{"手法"}</td><td>{"探索的テスト・スクリプト化テスト"}<strong>{"どちらにも"}</strong></td></tr><tr className={"odd"}><td>{"ライフサイクル"}</td><td>{"ウォーターフォール、V字、アジャイル（Scrum, Kanban等）"}<strong>{"どれでも"}</strong></td></tr><tr className={"even"}><td>{"自動化"}</td><td><strong>{"自動化テスト"}</strong>{"にも"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<h3 id={"s24"}>{"8.3 歴史"}<span className={"tag tag-tr"}>{"TR確認済"}</span></h3>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s24"}><table><thead><tr className={"header"}><th>{"年"}</th><th>{"出来事"}</th></tr></thead><tbody><tr className={"odd"}><td>{"2007"}</td><td>{"新テスト規格群の提案がISOで承認、WG 26設立（IEEE 829、BS 7925-1/-2などをベース）"}</td></tr><tr className={"even"}><td>{"2013"}</td><td>{"29119の最初の3パート（-1, -2, -3）発行"}</td></tr><tr className={"odd"}><td>{"2015"}</td><td>{"29119-4発行"}</td></tr><tr className={"even"}><td>{"2016"}</td><td>{"29119-5発行"}</td></tr><tr className={"odd"}><td>{"2017年2月"}</td><td>{"ISO/IEC 20246（レビュー）発行"}</td></tr><tr className={"even"}><td>{"2021"}</td><td>{"29119-2、-3、-4 の第2版発行"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<blockquote>{"\n"}<p>{"関連する各パートの詳しい解説は、同シリーズの各ガイド（29119-1〜5）を参照してください。"}</p>{"\n"}</blockquote>
{"\n"}
<h3 id={"s25"}>{"8.4 静的テストと動的テスト"}<span className={"tag tag-tr"}>{"TR確認済"}</span></h3>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s25"}><table><thead><tr className={"header"}><th>{"種類"}</th><th>{"内容"}</th><th>{"例"}</th></tr></thead><tbody><tr className={"odd"}><td><strong>{"静的テスト"}</strong></td><td>{"テスト対象（要求仕様・設計仕様・コードなど）を実行せずに評価する"}</td><td>{"レビュー（インスペクション、テクニカルレビュー、ウォークスルー、非公式レビュー）、静的解析ツール"}</td></tr><tr className={"even"}><td><strong>{"動的テスト"}</strong></td><td>{"コードを実行してテストケースを走らせる"}</td><td>{"ブラックボックス、ホワイトボックス、グレーボックス"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"従来の19795系は動的テスト中心ですが、このTRは"}<strong>{"静的・動的の両方"}</strong>{"を対象にします（6.2.5節）。"}</p>
{"\n"}
<hr />
{"\n"}
  </>;
}
