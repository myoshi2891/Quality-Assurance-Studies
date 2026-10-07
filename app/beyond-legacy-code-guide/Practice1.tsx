import React from 'react';

export default function Practice1() {
  return (
    <div className="practice-block" id="practice-1">
      <h3>
        {"プラクティス1: やり方より先に目的・理由・対象を伝える"}
      </h3>
      <div className="prose">
        <p>
          {" 開発チームに実装手順(How)だけを渡すと、要求の背景が失われ、状況が変わったときに柔軟に対応できません。本書では、依頼する側が「How」を「What」に翻訳し、目的・理由・対象者(誰のためか)を先に共有することを勧めています。具体的な手段として、プロダクトオーナーを置くこと、ユーザーストーリーで要求を表現すること、受け入れ基準を明確にして自動化することが挙げられています。 "}
        </p>
      </div>
      <div className="callout practice">
        <p className="callout-title">
          <i className="ti ti-checkbox">
          </i>
          {"初学者向けの第一歩 "}
        </p>
        <ul>
          <li>
            {" タスクを受け取ったら「これは誰のために、なぜ必要なのか」を確認する習慣をつける "}
          </li>
          <li>
            {"チケットやIssueに実装方法ではなく期待する振る舞いを書く"}
          </li>
          <li>
            {"受け入れ条件(Acceptance Criteria)を箇条書きで明文化する"}
          </li>
        </ul>
      </div>
    </div>
  );
}
