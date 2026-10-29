import React from 'react';
export default function Section00() { return <>
<h2 id="0-このガイドの前提と読み方">{"0. このガイドの前提と読み方"}</h2>

<h3 id="想定読者">{"想定読者"}</h3>

<ul><li>{"動画配信や ABR（Adaptive\nBitrate：適応ビットレート）を初めて学ぶソフトウェアエンジニア・QA\nエンジニア"}</li><li>{"DASH の MPD（XML\nファイル）を見たことはあるが、規格として何が決まっているのかを整理したい人"}</li></ul>

<h3 id="表記ルール">{"表記ルール"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"表記"}</th><th>{"意味"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"【根拠あり】"}</strong></td><td>{"末尾のソース一覧にある公開情報で確認できた内容"}</td></tr><tr className="even"><td><strong>{"【一般知識】"}</strong></td><td>{"DASH\nの基本的な仕組みとして広く知られている内容（今回の検索で個別に再確認していないもの）"}</td></tr><tr className="odd"><td><strong>{"【筆者の解釈・提案】"}</strong></td><td>{"公開情報をもとにした筆者の解釈や、実務上の提案（規格が定めている内容ではない）"}</td></tr></tbody></table></div>

<div className="callout callout-warn"><div className="callout-label">{"⚠ 注意"}</div><p><strong>{"重要"}</strong>{"：ISO/IEC 23009-1:2026\nの本文（375ページ）は有償規格であり、本ガイドは本文を逐条で読んだものではありません。第6版の新機能は、MPEG\n公式のプレスリリースと、規格編集者による会合レポートに基づいています。詳細は「"}<a href="#調査の限界と注意事項">{"調査の限界と注意事項"}</a>{"」を必ず確認してください。"}</p></div>

</>; }
