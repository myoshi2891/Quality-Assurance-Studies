import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="s-8-step-8-エンジニア-qaのための活用ガイド">{"8. Step 8: エンジニア／QAのための活用ガイド"}</h2>

<h3 id="s-8-1-いつ-part-1-を読むべきか">{"8.1 いつ Part 1 を読むべきか"}</h3>

<div className="table-scroll"><table aria-labelledby="s-8-1-いつ-part-1-を読むべきか"><thead><tr className="header"><th>{"場面"}</th><th>{"読むべきか"}</th><th>{"理由"}</th></tr></thead><tbody><tr className="odd"><td>{"SQLの書き方を学ぶ"}</td><td>{"いいえ（Part 2が主）"}</td><td>{"Part 1は概念・用語の巻"}</td></tr><tr className="even"><td>{"ベンダー比較・移行調査"}</td><td><strong>{"はい"}</strong></td><td>{"適合性（Core SQL／機能ID）の考え方を理解できる"}</td></tr><tr className="odd"><td>{"適合テスト設計"}</td><td><strong>{"はい"}</strong></td><td>{"機能単位でテスト項目を切り出す土台になる"}</td></tr><tr className="even"><td>{"規格本文を読み進める"}</td><td><strong>{"はい（最初に）"}</strong></td><td>{"用語・表記法の凡例にあたる"}</td></tr></tbody></table></div>

<h3 id="s-8-2-学習ロードマップ">{"8.2 学習ロードマップ"}</h3>

<Diagram id="diagram-8" />

<h3 id="s-8-3-よくある誤解">{"8.3 よくある誤解"}</h3>

<div className="table-scroll"><table aria-labelledby="s-8-3-よくある誤解"><thead><tr className="header"><th>{"誤解"}</th><th>{"正しい理解"}</th></tr></thead><tbody><tr className="odd"><td>{"Part 1 にSQLの文法が書いてある"}</td><td>{"文法の中核は Part 2。Part 1 は枠組み"}</td></tr><tr className="even"><td>{"SQL:2023対応＝全機能対応"}</td><td>{"新機能は"}<strong>{"オプション"}</strong>{"。機能ID単位で確認が必要"}</td></tr><tr className="odd"><td>{"標準準拠ならどのDBでも同じに動く"}</td><td>{"実装依存要素や対応機能の差があり、製品間差は残る"}</td></tr><tr className="even"><td>{"SQL標準は1冊の文書"}</td><td>{"複数パートの"}<strong>{"シリーズ"}</strong></td></tr></tbody></table></div>

<hr />

</>; }
