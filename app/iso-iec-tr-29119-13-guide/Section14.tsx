import React from 'react';
import Diagram from './Diagram';

/** 13. Step 9：Annex C（汎用リスク）と文書化マッピング（Annex D〜K） — preserve the complete original category. */
export default function Section14() {
  return <>
<h2 id={"s39"}>{"13. Step 9：Annex C（汎用リスク）と文書化マッピング（Annex D〜K）"}</h2>
{"\n"}
<h3 id={"s40"}>{"13.1 Annex C：生体認証システムの汎用リスク"}</h3>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"Annex C（約45ページ）は、生体認証システムに関連する"}<strong>{"製品リスクとプロジェクトリスクの例"}</strong>{"を提供し、"}<strong>{"それらをRBTの一部としてどう扱うか"}</strong>{"の提案も含みます。"}</p>
{"\n"}
<p><strong>{"活用手順【一般知識に基づく使い方の提案】"}</strong></p>
{"\n"}
<figure className={"diagram"}><Diagram index={12} />{"\n"}</figure>
{"\n"}
<blockquote>{"\n"}<p><strong>{"注意:"}</strong>{" Annex Cを"}<strong>{"丸ごと使う必要はありません"}</strong>{"。「例」ですので、プロジェクトの文脈に合わせて取捨選択し、足りないものを補うのが本来の使い方です。"}</p>{"\n"}</blockquote>
{"\n"}
<h3 id={"s41"}>{"13.2 文書化のマッピング（Annex D〜K）"}</h3>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span></p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s41"}><table><thead><tr className={"header"}><th>{"Annex"}</th><th>{"内容"}</th><th>{"ページ（目次より）"}</th></tr></thead><tbody><tr className={"odd"}><td>{"D"}</td><td>{"生体認証システムのテスト文書マッピング（19795-1, -2, -6 と 29119-3）"}</td><td>{"p.77〜"}</td></tr><tr className={"even"}><td>{"E"}</td><td>{"ISO/IEC 19795-1 → 29119"}</td><td>{"p.97〜"}</td></tr><tr className={"odd"}><td>{"F"}</td><td>{"ISO/IEC 19795-2 → 29119"}</td><td>{"p.150〜"}</td></tr><tr className={"even"}><td>{"G"}</td><td>{"ISO/IEC 19795-4 → 29119"}</td><td>{"p.194〜"}</td></tr><tr className={"odd"}><td>{"H"}</td><td>{"ISO/IEC 19795-6 → 29119"}</td><td>{"p.226〜"}</td></tr><tr className={"even"}><td>{"I"}</td><td>{"ISO/IEC 19795-7 → 29119"}</td><td>{"p.236〜"}</td></tr><tr className={"odd"}><td>{"J"}</td><td>{"ISO/IEC TS 19795-9 → 29119"}</td><td>{"p.247〜"}</td></tr><tr className={"even"}><td>{"K"}</td><td>{"ISO/IEC 29109-1 → 29119"}</td><td>{"p.261〜"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<p><strong>{"使い方のイメージ"}<span className={"tag tag-ex"}>{"例示"}</span></strong></p>
{"\n"}
<figure className={"diagram"}><Diagram index={13} />{"\n"}</figure>
{"\n"}
<p>{"つまり、"}<strong>{"「19795に従った文書を作れば、29119の文書要求のうちどこまで満たせるか」"}</strong>{"、逆に "}<strong>{"「29119に従った文書に、19795が要求する情報をどう入れるか」"}</strong>{" を確認するための辞書です。"}</p>
{"\n"}
<h3 id={"s42"}>{"13.3 参考：29119-3 の主なテスト文書"}<span className={"tag tag-gen"}>{"一般知識"}</span></h3>
{"\n"}
<p>{"マッピングの「右辺」になる29119-3の文書は、一般的に次のようなものです（2021年版）。"}</p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s42"}><table><thead><tr className={"header"}><th>{"区分"}</th><th>{"文書例"}</th></tr></thead><tbody><tr className={"odd"}><td>{"組織レベル"}</td><td>{"組織テスト方針、組織テスト戦略"}</td></tr><tr className={"even"}><td>{"管理"}</td><td>{"テスト計画、テスト状況報告、テスト完了報告"}</td></tr><tr className={"odd"}><td>{"設計・実装"}</td><td>{"テスト設計仕様、テストケース仕様、テスト手順仕様"}</td></tr><tr className={"even"}><td>{"データ・環境"}</td><td>{"テストデータ要求、テスト環境要求、各準備状況報告"}</td></tr><tr className={"odd"}><td>{"実行・結果"}</td><td>{"実測結果、テスト結果、インシデント報告"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<hr />
{"\n"}
  </>;
}
