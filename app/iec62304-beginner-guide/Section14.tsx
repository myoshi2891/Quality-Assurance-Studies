import React from 'react';
import Diagram from './Diagram';

export default function Section14() {
    return <>
<h2 id="14-規制上の位置づけeu--米国--日本">{"14. 規制上の位置づけ（EU / 米国 / 日本）"}</h2>{" "}<Diagram id="mmd-13" />{" "}<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"地域"}</th><th>{"位置づけ"}</th><th>{"補足"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"EU"}</strong></td><td>{" EN 62304:2006+A1:2015 は欧州規格として広く利用されるが、欧州委員会が公表する MDR の整合規格リストには掲載されていない "}</td><td>{" 整合規格ではないため、適合しても MDR 要求への"}<strong>{"適合推定"}</strong>{"は得られない。一般安全性能要求（GSPR）への適合を示す手段の一つとして、技術文書で根拠を説明する "}</td></tr><tr className="even"><td><strong>{"米国"}</strong></td><td>{" FDA が合意規格として認知。適合宣言を提出して市販前要求を満たす材料にできる "}</td><td>{"IMDRF の整理でも、FDA は 62304 の認知を明記"}</td></tr><tr className="odd"><td><strong>{"日本"}</strong></td><td>{" JIS T 2304:2017 が対応規格。基本要件基準第12条第2項（平成17年厚生労働省告示第122号）への適合は、"}<strong>{"JIS T 2304 またはこれと同等以上の適切な国際規格等"}</strong>{"への適合で示す "}</td><td>{" 同等の国際規格（IEC 62304 等）を用いる場合は、申請や届出の際に、その規格が JIS T 2304 と同等以上であることを申請資料で説明できることが条件。JIS T 2304 は IEC 62304 の一致規格（IDT） "}</td></tr><tr className="even"><td><strong>{"その他"}</strong></td><td>{"豪州・カナダ等でも認知された規格として扱われる"}</td><td>{"IMDRF/MC/N35（2015年）が各法域の使い方を整理"}</td></tr></tbody></table>{" "}</div>{" "}<blockquote className="callout">{" "}<p>{" "}<strong>{"注意"}</strong>{": 規制の詳細は更新されます。申請や審査の前には、必ず最新の通知・ガイダンスを確認してください。 "}</p>{" "}</blockquote>{" "}
    </>;
}
