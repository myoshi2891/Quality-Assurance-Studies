import React from 'react';
import Diagram from './Diagram';

export default function Section02() {
    return <>
<h2 id="2-規格の基本情報">{"2. 規格の基本情報"}</h2>{" "}<p>{"ISO のカタログページ（ご指定のURL）で確認できた内容と、各機関の情報を整理します。"}</p>{" "}<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"規格番号"}</td><td>{"IEC 62304:2006"}</td></tr><tr className="even"><td>{"英語タイトル"}</td><td>{"Medical device software — Software life cycle processes"}</td></tr><tr className="odd"><td>{"日本語タイトル"}</td><td>{"医療機器ソフトウェア ― ソフトウェアライフサイクルプロセス"}</td></tr><tr className="even"><td>{"発行年月"}</td><td>{"2006年5月（第1版）"}</td></tr><tr className="odd"><td>{"技術委員会"}</td><td>{"ISO/TC 210（ISOカタログ上の表示）"}</td></tr><tr className="even"><td>{"追補"}</td><td>{"Amendment 1:2015（1件）"}</td></tr><tr className="odd"><td>{"統合版"}</td><td>{"IEC 62304:2006+AMD1:2015 CSV（通称「Version 1.1」）"}</td></tr><tr className="even"><td>{"ISOカタログ上の状態"}</td><td>{" 2023年8月に見直しのうえ"}<strong>{"確認（confirmed）"}</strong>{"、現行版として有効 "}</td></tr><tr className="odd"><td>{"日本のJIS"}</td><td>{"JIS T 2304:2017（IEC 62304:2006 + Amd.1:2015 に対応）"}</td></tr><tr className="even"><td>{"次期改訂"}</td><td>{" 第2版が改訂中（"}<a href="#16-第2版edition-2の最新動向">{"第16章"}</a>{"参照）。"}<strong>{"2026年10月時点で未発行"}</strong>{" "}</td></tr></tbody></table>{" "}</div>{" "}<Diagram id="mmd-0" />{" "}<blockquote className="callout">{" "}<p>{" "}<strong>{"ポイント"}</strong>{": 実務で「IEC 62304」といえば、通常は "}<strong>{"2006年版に2015年の追補を統合した Version 1.1"}</strong>{" を指します。 "}</p>{" "}</blockquote>{" "}
    </>;
}
