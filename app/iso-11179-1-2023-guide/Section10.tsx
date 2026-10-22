import React from 'react';
import Diagram from './Diagram';
import CodeExample from './CodeExample';
import Checklist from './Checklist';
export default function Section() { return <>
<h2 id="step-9手を動かして理解する設計ワークフローと記述例">{"STEP\n9：手を動かして理解する（設計ワークフローと記述例）"}</h2>

<h3 id="9-1-新しいデータ項目を登録するときの判断フロー">{"9-1.\n新しいデータ項目を登録するときの判断フロー"}</h3>

<Diagram id="diagram-14" />

<ol>
<li>{"新しいデータ項目が必要になったら、同じ意味の DEC が既にあるかを確認する。"}</li>
<li>{"DEC がある（はい）場合は既存の DEC を再利用する。ない（いいえ）場合はオブジェクトクラスとプロパティを決めて DEC を新規作成する。"}</li>
<li>{"次に、同じ表現の VD が既にあるかを確認する。"}</li>
<li>{"VD がある（はい）場合は既存の VD を再利用する。ない（いいえ）場合はデータ型・単位・許容値を決めて VD を新規作成する。"}</li>
<li>{"DEC と VD を組み合わせて DE を作成する。"}</li>
<li>{"定義・命名をレビューし、レジストリに登録する。"}</li>
<li>{"登録後は共有・再利用する。"}</li>
</ol>

<h3 id="9-2-設計時のチェックリスト">{"9-2. 設計時のチェックリスト"}</h3>

<Checklist />

<h3 id="9-3-記述例yaml学習用の簡略表現">{"9-3.\n記述例（YAML：学習用の簡略表現）"}</h3>

<div className="callout callout-note"><span className="callout-icon">{"ℹ️"}</span><div className="callout-body"><p>{"これは"}<strong>{"学習用の簡略例"}</strong>{"です。11179\n公式のデータ形式ではありません。登録に使う実際の属性は Part 3 / Part 30\n/ Part 31 を参照してください。"}</p></div></div>

<CodeExample />

<h3 id="9-4-qaエンジニア視点メタデータからテスト観点を導く">{"9-4.\nQAエンジニア視点：メタデータからテスト観点を導く"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"メタデータ"}</th><th>{"導けるテスト観点"}</th></tr></thead><tbody><tr className="odd"><td>{"VD の許容範囲（0〜300）"}</td><td>{"境界値（−1, 0, 300, 301）、同値分割"}</td></tr><tr className="even"><td>{"VD の列挙値（"}<code>{"M/F/O/U"}</code>{"）"}</td><td>{"許容値すべて、許容外値、大文字小文字"}</td></tr><tr className="odd"><td>{"VD のデータ型"}</td><td>{"型違い入力、桁あふれ、フォーマット違反"}</td></tr><tr className="even"><td>{"DE が共有する DEC"}</td><td>{"同じ DEC を使う別システム間での"}<strong>{"値変換の一貫性"}</strong></td></tr><tr className="odd"><td>{"単位"}</td><td>{"単位変換時の丸め誤差、換算ミス"}</td></tr></tbody></table></div>

<div className="callout callout-practice"><span className="callout-icon">{"💡"}</span><div className="callout-body"><div className="callout-title">{"ベストプラクティス"}</div><p>{"テスト設計の「期待値の根拠」を、"}<strong>{"レジストリ上の\nVD・許容値"}</strong>{"に紐づけておくと、仕様変更時の影響範囲の追跡が容易になります。"}</p></div></div>

</>; }
