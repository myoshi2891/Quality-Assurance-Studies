import React from 'react';
import Diagram from './Diagram';

/** 12. Step 8：品質特性ごとのテスト観点（具体化） — preserve the complete original category. */
export default function Section13() {
  return <>
<h2 id={"s37"}>{"12. Step 8：品質特性ごとのテスト観点（具体化）"}</h2>
{"\n"}
<blockquote>{"\n"}<p>{"ここは"}<span className={"tag tag-ex"}>{"例示"}</span>{"です。TRの品質特性の列挙を、実務で動かせる観点に落とし込んだ本ガイド筆者のたたき台です。Annex Cのリスク項目そのものではありません。"}</p>{"\n"}</blockquote>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s37"}><table><thead><tr className={"header"}><th>{"品質特性"}</th><th>{"テスト観点の例"}</th><th>{"主な技法の例（29119-4系）"}<span className={"tag tag-gen"}>{"一般知識"}</span></th></tr></thead><tbody><tr className={"odd"}><td><strong>{"性能（誤り率）"}</strong></td><td>{"FMR/FNMRが比較しきい値ごとに要件を満たすか、FTER/FTAR（FTE・FTAの発生率）が要件の率以内に収まるか"}</td><td>{"統計的評価、DET分析"}</td></tr><tr className={"even"}><td><strong>{"性能（スループット）"}</strong></td><td>{"ピーク時の1時間あたり処理人数"}</td><td>{"負荷テスト、性能テスト"}</td></tr><tr className={"odd"}><td><strong>{"信頼性"}</strong></td><td>{"連続稼働、センサ劣化、異常入力時の挙動"}</td><td>{"耐久テスト、状態遷移テスト"}</td></tr><tr className={"even"}><td><strong>{"可用性"}</strong></td><td>{"障害時のフォールバック（暗証番号、有人対応など）"}</td><td>{"障害注入、フェイルオーバー確認"}</td></tr><tr className={"odd"}><td><strong>{"保守性"}</strong></td><td>{"アルゴリズム更新後の再登録要否、ログの追跡可能性"}</td><td>{"回帰テスト、レビュー"}</td></tr><tr className={"even"}><td><strong>{"セキュリティ"}</strong></td><td>{"テンプレート保護、通信の暗号化、なりすまし（PAD）対策"}</td><td>{"ペネトレーション、脆弱性評価、PAD評価"}</td></tr><tr className={"odd"}><td><strong>{"適合性"}</strong></td><td>{"データ交換形式の仕様準拠、API仕様準拠"}</td><td>{"適合性テスト（29109-1の考え方）"}</td></tr><tr className={"even"}><td><strong>{"使いやすさ・人的要因"}</strong></td><td>{"提示姿勢の分かりやすさ、再試行の負担、アクセシビリティ"}</td><td>{"ユーザビリティテスト、探索的テスト"}</td></tr><tr className={"odd"}><td><strong>{"プライバシー規制適合"}</strong></td><td>{"同意取得、保存期間、削除要求への対応（例: GDPR）"}</td><td>{"レビュー、監査、シナリオテスト"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<blockquote>{"\n"}<p>{"TRの略語一覧にも "}<strong>{"GDPR"}</strong>{"（一般データ保護規則）が含まれており"}<span className={"tag tag-tr"}>{"TR確認済"}</span>{"、プライバシー規制適合がテストの検討対象であることが示唆されています。"}</p>{"\n"}</blockquote>
{"\n"}
<h3 id={"s38"}>{"12.1 人口統計的な偏り（デモグラフィック差）のテスト"}</h3>
{"\n"}
<p>{"【一般知識／外部情報】米国標準技術研究所（NIST）の顔認識評価（FRTE/旧FRVT）は、性別・年齢・出身地域などの属性ごとにFMR/FNMRを分解して報告しており、"}<strong>{"アルゴリズムによって属性間の誤り率の差（demographic differentials）が存在する"}</strong>{"ことを示しています。NISTはこの差を要約する指標について NIST IR 8429（2022年7月）でまとめています。"}</p>
{"\n"}
<p>{"これは、TRの品質特性でいう「人的要因」や「公平性」に関わる観点として、"}<strong>{"全体平均の誤り率だけで合否を決めない"}</strong>{"ことの重要性を裏付ける材料になります。"}</p>
{"\n"}
<figure className={"diagram"}><Diagram index={11} />{"\n"}</figure>
{"\n"}
<hr />
{"\n"}
  </>;
}
