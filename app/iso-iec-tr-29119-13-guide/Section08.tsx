import React from 'react';
import Diagram from './Diagram';

/** 7. Step 3：標準化の地図を頭に入れる — preserve the complete original category. */
export default function Section08() {
  return <>
<h2 id={"s18"}>{"7. Step 3：標準化の地図を頭に入れる"}</h2>
{"\n"}
<h3 id={"s19"}>{"7.1 関係する標準化組織"}<span className={"tag tag-tr"}>{"TR確認済"}</span></h3>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s19"}><table><thead><tr className={"header"}><th>{"組織"}</th><th>{"役割"}</th></tr></thead><tbody><tr className={"odd"}><td>{"ISO/IEC JTC 1"}</td><td>{"情報技術の合同技術委員会"}</td></tr><tr className={"even"}><td><strong>{"JTC 1/SC 37"}</strong></td><td><strong>{"生体認証"}</strong>{" の標準化。共通ファイル形式、API、データ交換形式、プロファイル、評価基準の適用、性能テスト方法論など"}</td></tr><tr className={"odd"}><td><strong>{"JTC 1/SC 37/WG 5"}</strong></td><td><strong>{"生体認証のテストと報告"}</strong></td></tr><tr className={"even"}><td>{"JTC 1/SC 17"}</td><td>{"個人識別用のカードとセキュリティデバイス"}</td></tr><tr className={"odd"}><td>{"JTC 1/SC 27"}</td><td>{"情報セキュリティ、サイバーセキュリティ、プライバシー保護"}</td></tr><tr className={"even"}><td><strong>{"JTC 1/SC 7"}</strong></td><td>{"ソフトウェアおよびシステムエンジニアリング"}</td></tr><tr className={"odd"}><td><strong>{"JTC 1/SC 7/WG 26"}</strong></td><td><strong>{"ソフトウェアテスト"}</strong>{"（29119シリーズを作成。2007年設立）"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<figure className={"diagram"}><Diagram index={5} />{"\n"}</figure>
{"\n"}
<h3 id={"s20"}>{"7.2 Annex Bで扱われる関連規格と、TRがマッピングする規格"}</h3>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"序文に、次の規格との"}<strong>{"マッピング"}</strong>{"が提供されると明記されています。"}</p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s20"}><table><thead><tr className={"header"}><th>{"規格"}</th><th>{"内容（一般的な理解）"}<span className={"tag tag-gen"}>{"一般知識"}</span></th><th>{"文書要求のマッピング（Annex D）"}</th></tr></thead><tbody><tr className={"odd"}><td>{"ISO/IEC 19795-1"}</td><td>{"性能テストと報告の原則と枠組み"}</td><td>{"○"}</td></tr><tr className={"even"}><td>{"ISO/IEC 19795-2"}</td><td>{"技術評価・シナリオ評価のテスト方法論"}</td><td>{"○"}</td></tr><tr className={"odd"}><td>{"ISO/IEC 19795-4"}</td><td>{"相互運用性の性能テスト"}</td><td>{"—"}</td></tr><tr className={"even"}><td>{"ISO/IEC 19795-6"}</td><td>{"運用評価の方法論"}</td><td>{"○"}</td></tr><tr className={"odd"}><td>{"ISO/IEC 19795-7"}</td><td>{"カード内（on-card）比較アルゴリズムのテスト"}</td><td>{"—"}</td></tr><tr className={"even"}><td>{"ISO/IEC TS 19795-9"}</td><td>{"モバイルデバイス上の性能テスト"}</td><td>{"—"}</td></tr><tr className={"odd"}><td>{"ISO/IEC 29109-1"}</td><td>{"生体データ交換形式の適合性試験の方法論"}</td><td>{"—"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<blockquote>{"\n"}<p>{"各規格の内容説明は"}<span className={"tag tag-gen"}>{"一般知識"}</span>{"であり、TRの記述そのままではありません。タイトルの正確な確認は各規格のISOページで行ってください。"}</p>{"\n"}</blockquote>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"ISO/IEC 19795-1:2021 のスコープでは、"}<strong>{"プレゼンテーション攻撃（なりすまし等、意図的にシステムを欺く行為）に対する誤り率・スループットの測定は対象外"}</strong>{"とされています。この領域は一般に ISO/IEC 30107 シリーズ（PAD: Presentation Attack Detection）で扱われます。TR 29119-13 でも、セキュリティ品質特性のテストを検討する際にPADのような関連規格との関係に留意すると良いでしょう"}<span className={"tag tag-gen"}>{"一般知識"}</span>{"。"}</p>
{"\n"}
<hr />
{"\n"}
  </>;
}
