import React from 'react';
export default function Section() { return <>
<h2 id="付録b調査の検証ステータスと限界">{"付録B：調査の検証ステータスと限界"}</h2>

<div className="callout callout-note"><span className="callout-icon">{"ℹ️"}</span><div className="callout-body"><p>{"このガイドは"}<strong>{"透明性のため、何をどこまで確認したか"}</strong>{"を明記します。"}</p></div></div>

<h3 id="b-1-検証できたことできなかったこと">{"B-1.\n検証できたこと／できなかったこと"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"区分"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"✅ 確認できた"}</td><td>{"ISO公式ページの基本情報・要旨・ライフサイクル（版、日付、ページ数、旧版、委員会）"}</td></tr><tr className="even"><td>{"✅ 確認できた"}</td><td>{"関連パート（30, 31, 33, 34, 35）の公式ページの要旨・発行日"}</td></tr><tr className="odd"><td>{"✅ 確認できた"}</td><td>{"Part 1:2023\nの目次プレビューおよび変更点リストの断片（ANSI公開プレビュー経由）"}</td></tr><tr className="even"><td>{"✅ 確認できた"}</td><td>{"Part 3:2023 サンプルにおける分割の説明"}</td></tr><tr className="odd"><td>{"⚠️ 限定的"}</td><td>{"Part 1:2023\nの"}<strong>{"本文全体"}</strong>{"は読めていないため、各条項の細部（条項番号や厳密な定義文）は未確認"}</td></tr><tr className="even"><td>{"⚠️ 限定的"}</td><td>{"Part 2 / 4 / 5 / 6\nの"}<strong>{"最新版の発行年"}</strong>{"は未確認（旧版系の資料に基づく概要のみ）"}</td></tr><tr className="odd"><td>{"⚠️ 限定的"}</td><td>{"図中の多重度・登録状態などは"}<strong>{"学習用の簡略化"}</strong>{"であり、原典の厳密な規定とは異なる可能性がある"}</td></tr></tbody></table></div>

<h3 id="b-2-著名で国際的な開発者の投稿についての正直な報告">{"B-2.\n「著名で国際的な開発者の投稿」についての正直な報告"}</h3>

<p>{"要請に沿って実装者・実務家の一次情報を優先しましたが、2023年版 Part 1\nを直接取り上げた"}<strong>{"個人開発者のブログ投稿はほとんど見つかりませんでした"}</strong>{"。代わりに、次のような"}<strong>{"実装者・運用者による公開ドキュメント"}</strong>{"を根拠としています。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"区分"}</th><th>{"根拠"}</th></tr></thead><tbody><tr className="odd"><td>{"OSS 実装者"}</td><td>{"Aristotle Metadata Registry（作者：Samuel\nSpencer）の公式ドキュメント"}</td></tr><tr className="even"><td>{"大規模運用組織"}</td><td>{"米国国立がん研究所（NCI）caDSR の公式Wiki"}</td></tr><tr className="odd"><td>{"コミュニティ標準"}</td><td>{"DDI Alliance の技術ガイド"}</td></tr><tr className="even"><td>{"研究者"}</td><td>{"LLNL（米国）の技術報告、UNECE METIS 会合向け資料（Daniel W.\nGillman）"}</td></tr></tbody></table></div>

<p>{"これらは"}<strong>{"2015年版や旧版 Part 3\nを前提とした記述を含みます"}</strong>{"。2023年版との差異に注意してください。"}</p>

<h3 id="b-3-利用上の注意">{"B-3. 利用上の注意"}</h3>

<ul><li>{"ISO\nの規格本文は著作権で保護されています。本ガイドは"}<strong>{"公開情報の要約と学習用の言い換え"}</strong>{"であり、規格本文の再掲ではありません。"}</li><li>{"実務での適合性判断・引用には、"}<strong>{"必ず ISO\n公式の規格原典"}</strong>{"をご確認ください。"}</li></ul>

</>; }
