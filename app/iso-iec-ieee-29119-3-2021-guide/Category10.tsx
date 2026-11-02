import React from 'react';
import Diagram from './Diagram';
import { DIAGRAM_8 } from './diagrams';

export default function Category10() {
    return <>
<h2 id="step-9-2021年版の最大の変更点テストモデル">{" Step 9: 2021年版の最大の変更点「テストモデル」 "}</h2>
{" "}
<h3 id="9-1-何が変わったのか">{"9-1. 何が変わったのか"}</h3>
{" "}
<p>{"規格の前付けには、2013年版からのおもな変更点として次の趣旨が書かれています。"}</p>
{" "}
<blockquote>{" "}<p>{" "}<strong>{"「テスト条件」の概念を「テストモデル」に置き換えた。"}</strong>{" 理由: 旧版へのフィードバックで、テスト条件の意味と、そこからテストケースを導く方法が利用者にわかりにくいという問題が指摘されたため。 "}</p>{" "}</blockquote>
{" "}
<Diagram diagramKey="mm9" id="mermaid-diagram-9" chart={DIAGRAM_8} />
{" "}
<h3 id="9-2-テストモデルとは">{"9-2. テストモデルとは"}</h3>
{" "}
<p>{" "}<strong>{"テスト対象を、特定の性質や品質特性に焦点を当ててテストできるように表現したもの"}</strong>{"です。規格が挙げる例は次のとおりです。 "}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"例"}</th><th>{"関連するテスト設計の発想"}</th></tr></thead><tbody><tr className="odd"><td>{"要求記述"}</td><td>{"要求ベースのテスト"}</td></tr><tr className="even"><td>{"同値分割"}</td><td>{"同値分割法"}</td></tr><tr className="odd"><td>{"状態遷移図"}</td><td>{"状態遷移テスト"}</td></tr><tr className="even"><td>{"ユースケース記述"}</td><td>{"ユースケーステスト"}</td></tr><tr className="odd"><td>{"デシジョンテーブル"}</td><td>{"デシジョンテーブルテスト"}</td></tr><tr className="even"><td>{"入力構文"}</td><td>{"構文テスト"}</td></tr><tr className="odd"><td>{"ソースコード"}</td><td>{"構造ベースのテスト"}</td></tr><tr className="even"><td>{"制御フローグラフ"}</td><td>{"分岐・パスの網羅"}</td></tr><tr className="odd"><td>{"パラメータと値"}</td><td>{"組合せテスト"}</td></tr><tr className="even"><td>{"分類ツリー"}</td><td>{"分類木法"}</td></tr><tr className="odd"><td>{"自然言語"}</td><td>{"記述ベースの設計"}</td></tr></tbody></table>{" "}</div>
{" "}
<p>{"規格の注記から押さえておきたいポイント:"}</p>
{" "}
<ul>{" "}<li>{" テストモデルと「必要なカバレッジ」から、"}<strong>{"テストカバレッジアイテム"}</strong>{"を特定する。 "}</li>{" "}<li>{" 完了基準に含まれるカバレッジの種類ごとに、"}<strong>{"別々のテストモデルが必要になる場合がある"}</strong>{"。 "}</li>{" "}<li>{" テストモデルは"}<strong>{"1つ以上のテスト条件を含みうる"}</strong>{"（テスト条件の概念が完全に消えたわけではない）。 "}</li>{" "}<li>{" テストモデルは主にテスト設計を支える（Part 4 の技法、モデルベーステスト）。ほかにも、テスト環境モデルやテスト成熟度モデルなど別種のモデルがある。 "}</li>{" "}</ul>
{" "}
<h3 id="9-3-テストベース--テストモデル--テストケースの具体例">{" 9-3. 「テストベース → テストモデル → テストケース」の具体例 "}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"ステップ"}</th><th>{"成果物"}</th><th>{"例（パスワード入力欄「8〜16文字」）"}</th></tr></thead><tbody><tr className="odd"><td>{"① テストベース"}</td><td>{"要求・仕様"}</td><td>{"「パスワードは8文字以上16文字以下」"}</td></tr><tr className="even"><td>{"② テストモデル"}</td><td>{"同値分割"}</td><td>{" 分割: 7文字以下（無効）／8〜16文字（有効）／17文字以上（無効） "}</td></tr><tr className="odd"><td>{"③ カバレッジアイテム"}</td><td>{"各分割"}</td><td>{"3つの分割それぞれ"}</td></tr><tr className="even"><td>{"④ テストケース"}</td><td>{"具体的入力と期待結果"}</td><td>{"5文字→エラー、10文字→成功、20文字→エラー"}</td></tr></tbody></table>{" "}</div>
{" "}
    </>;
}
