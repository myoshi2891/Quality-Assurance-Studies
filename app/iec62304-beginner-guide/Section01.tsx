import React from 'react';

export default function Section01() {
    return <>
<h2 id="1-30秒でわかる-iec-62304">{"1. 30秒でわかる IEC 62304"}</h2>{" "}<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"問い"}</th><th>{"答え"}</th></tr></thead><tbody><tr className="odd"><td>{"何の規格？"}</td><td>{" 医療機器に使われる"}<strong>{"ソフトウェアの開発と保守のプロセス"}</strong>{"を定めた国際規格 "}</td></tr><tr className="even"><td>{"何を求める？"}</td><td>{" 計画 → 要求 → 設計 → 実装 → 検証 → リリース → 保守、そしてリスク管理・構成管理・問題解決を"}<strong>{"文書化された形で実施すること"}</strong>{" "}</td></tr><tr className="odd"><td>{"一番の特徴は？"}</td><td>{" ソフトウェアを"}<strong>{"安全クラス A / B / C"}</strong>{" に分類し、"}<strong>{"クラスが高いほど厳格なプロセス"}</strong>{"を求める "}</td></tr><tr className="even"><td>{"どのモデルで開発する？"}</td><td>{" 特定のライフサイクルモデル（ウォーターフォール等）は"}<strong>{"指定しない"}</strong>{" "}</td></tr><tr className="odd"><td>{"製品の合否を決める？"}</td><td>{" 決めない。"}<strong>{"プロセスの規格"}</strong>{"であり、医療機器レベルのバリデーションと最終リリースは対象外。ただし、ソフトウェア要求・リスクコントロール・検証・ソフトウェアシステム試験は対象 "}</td></tr><tr className="even"><td>{"日本では？"}</td><td>{" "}<strong>{"JIS T 2304:2017"}</strong>{" として同等内容が存在し、QMS省令関連の要求として位置づけられている "}</td></tr></tbody></table>{" "}</div>{" "}<blockquote className="callout">{" "}<p>{" "}<strong>{"一言でいうと"}</strong>{": 「どんなソフトを作るか」ではなく、「"}<strong>{"どう作り、どう直し、どう証明するか"}</strong>{"」を決める規格です。 "}</p>{" "}</blockquote>{" "}
    </>;
}
