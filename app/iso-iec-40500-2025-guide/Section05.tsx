import React from 'react';
import Diagram from './Diagram';
export default function Category() { return <>
<h2 id="step-4-wcag-22-の新規9基準を一覧で押さえる">{"\n                Step 4. WCAG 2.2 の新規9基準を一覧で押さえる\n            "}</h2>
{"\n            "}
<h3 id="41-新規達成基準の一覧">{"4.1 新規達成基準の一覧"}</h3>
{"\n            "}
<div aria-label="表：4.1 新規達成基準の一覧" className="table-scroll" role="region" tabIndex={0}>{"\n                "}<table><thead><tr className="header"><th>{"SC"}</th><th>{"名称"}</th><th>{"レベル"}</th><th>{"主に助けられる人"}</th><th>{"一言でいうと"}</th></tr></thead><tbody><tr className="odd"><td>{"2.4.11"}</td><td>{"フォーカスが隠れない（最小）"}</td><td><strong>{"AA"}</strong></td><td>{"キーボード利用者・低視力"}</td><td>{"\n                                キーボードフォーカスされた要素が、固定ヘッダー等に"}<strong>{"完全には隠れない"}</strong>{"\n                            "}</td></tr><tr className="even"><td>{"2.4.12"}</td><td>{"フォーカスが隠れない（拡張）"}</td><td>{"AAA"}</td><td>{"同上"}</td><td>{"フォーカスされた要素が"}<strong>{"まったく隠れない"}</strong></td></tr><tr className="odd"><td>{"2.4.13"}</td><td>{"フォーカスの外観"}</td><td>{"AAA"}</td><td>{"低視力・認知障害"}</td><td>{"\n                                フォーカス表示が"}<strong>{"十分な大きさとコントラスト"}</strong>{"を持つ\n                            "}</td></tr><tr className="even"><td>{"2.5.7"}</td><td>{"ドラッグ動作"}</td><td><strong>{"AA"}</strong></td><td>{"運動障害・ポインタ操作が難しい人"}</td><td>{"\n                                ドラッグ操作には"}<strong>{"クリックなど単純な代替手段"}</strong>{"を用意する\n                            "}</td></tr><tr className="odd"><td>{"2.5.8"}</td><td>{"ターゲットのサイズ（最小）"}</td><td><strong>{"AA"}</strong></td><td>{"運動障害・タッチ操作"}</td><td>{"操作対象は原則 "}<strong>{"24×24 CSS px 以上"}</strong>{"（例外あり）"}</td></tr><tr className="even"><td>{"3.2.6"}</td><td>{"一貫したヘルプ"}</td><td><strong>{"A"}</strong></td><td>{"認知障害・学習障害"}</td><td>{"ヘルプ手段を"}<strong>{"毎回同じ相対位置"}</strong>{"に置く"}</td></tr><tr className="odd"><td>{"3.3.7"}</td><td>{"冗長な入力"}</td><td><strong>{"A"}</strong></td><td>{"認知障害・記憶に困難がある人"}</td><td>{"同じ情報を"}<strong>{"二度入力させない"}</strong></td></tr><tr className="even"><td>{"3.3.8"}</td><td>{"アクセシブルな認証（最小）"}</td><td><strong>{"AA"}</strong></td><td>{"認知障害・学習障害"}</td><td>{"\n                                認証で"}<strong>{"認知機能テスト"}</strong>{"（記憶・転記・パズル）を強いない\n                            "}</td></tr><tr className="odd"><td>{"3.3.9"}</td><td>{"アクセシブルな認証（拡張）"}</td><td>{"AAA"}</td><td>{"同上"}</td><td>{"3.3.8 より例外が少ない厳格版"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<p>{"\n                "}<strong>{"レベル別の件数"}</strong>{": A が 2件（3.2.6、3.3.7）、AA が\n                4件（2.4.11、2.5.7、2.5.8、3.3.8）、AAA が 3件（2.4.12、2.4.13、3.3.9）。\n            "}</p>
{"\n            "}
<h3 id="42-削除された達成基準">{"4.2 削除された達成基準"}</h3>
{"\n            "}
<div aria-label="表：4.2 削除された達成基準" className="table-scroll" role="region" tabIndex={0}>{"\n                "}<table><thead><tr className="header"><th>{"SC"}</th><th>{"名称"}</th><th>{"扱い"}</th></tr></thead><tbody><tr className="odd"><td>{"4.1.1"}</td><td>{"構文解析（Parsing）"}</td><td>{"\n                                WCAG 2.2\n                                で"}<strong>{"削除"}</strong>{"。かつて想定された問題は、現在はブラウザ・支援技術の進化で起きにくいか、他の達成基準でカバーされるため\n                            "}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<blockquote className="callout">{"\n                "}<p>{"\n                    ただし、HTML\n                    が正しく書けていなくてよい、という意味ではありません。壊れたマークアップが原因で"}<strong>{"名前・役割・値が正しく伝わらない"}</strong>{"場合は、引き続き\n                    4.1.2 などの違反になります。\n                "}</p>{"\n            "}</blockquote>
{"\n            "}
<h3 id="43-新規基準の影響度マップ">{"4.3 新規基準の影響度マップ"}</h3>
{"\n            "}
<Diagram id="mermaid-diagram-4" />
{"\n            "}
</>; }
