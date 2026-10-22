import React from 'react';
export default function Section() { return <>
<h2 id="s-11-本ガイドの限界と注意点">{"11. 本ガイドの限界と注意点"}</h2>

<div className="table-scroll"><table aria-labelledby="s-11-本ガイドの限界と注意点"><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"規格本文の未参照"}</td><td>{"ISO規格本文は有料かつAI利用不可のため、"}<strong>{"Part 1 の条文の詳細（定義文、適合性条項の細部）は本ガイドで直接引用していません"}</strong>{"。第3章の概念説明は一般的なSQL知識に基づく解説です"}</td></tr><tr className="even"><td>{"時点依存の情報"}</td><td>{"製品の対応状況（特にPostgreSQL 19、Oracle）は変化が速いため、最新の公式ドキュメントで再確認してください"}</td></tr><tr className="odd"><td>{"実装差"}</td><td>{"コード例は概念理解用です。実際の構文は製品・バージョンで差があります"}</td></tr><tr className="even"><td>{"次の一歩"}</td><td>{"条文レベルの確認が必要な場合は、ISO OBPのサンプルまたは規格の購入版を参照してください"}</td></tr></tbody></table></div>
{"\n\n"}
<footer className="page-footer">{"本ガイドは2026年10月8日時点の公開情報に基づく初学者向け解説です。ISO規格本文は有料のため直接引用していません。正確な条文は ISO Online Browsing Platform または規格本文で確認してください。"}</footer>

</>; }
