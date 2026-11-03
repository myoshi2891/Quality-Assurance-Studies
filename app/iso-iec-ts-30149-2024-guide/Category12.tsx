import React from 'react';

export default function Category12() {
    return <>
<h2 id="12-よくある誤解">{"12. よくある誤解"}</h2>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"誤解"}</th><th>{"実際"}</th></tr></thead><tbody><tr className="odd"><td>{"この規格に準拠すれば認証が取れる"}</td><td>{" 本書は信頼に足る性質の原則・要素と参考パターンを示す文書。公開プレビューの範囲では適合性評価用の要求事項は確認できなかった（本文全体は未確認）。なおISO/IEC自身は認証を行わない "}</td></tr><tr className="even"><td>{"セキュリティのことだけを書いた規格"}</td><td>{" セキュリティは5特性のうちの1つ。Safety・Privacy・Resilience・Reliabilityも同格 "}</td></tr><tr className="odd"><td>{"具体的な技術要件（暗号方式など）が書いてある"}</td><td>{" 原則・考え方・パターンが中心で、特定の暗号方式などを強制する文書ではない（本文は有料のため詳細は原文で確認） "}</td></tr><tr className="even"><td>{"ReliabilityとResilienceは同じ"}</td><td>{" 定められた条件・期間で機能を果たす力と、混乱を引き起こす事象に抵抗・適応し回復する力で別物 "}</td></tr><tr className="odd"><td>{"信頼（trust）と信頼に足る性質（trustworthiness）は同義"}</td><td>{"前者は思い込みを含み、後者は検証可能な根拠を伴う"}</td></tr><tr className="even"><td>{"1度評価すれば終わり"}</td><td>{"運用・更新の中で証拠と成熟度を継続的に管理する発想"}</td></tr></tbody></table>{" "}</div>
{" "}
    </>;
}
