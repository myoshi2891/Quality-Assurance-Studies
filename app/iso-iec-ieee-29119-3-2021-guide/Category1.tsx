import React from 'react';
import Diagram from './Diagram';
import { DIAGRAM_0 } from './diagrams';

export default function Category1() {
    return <>
<h2 id="step-0-まず全体像をつかむ30秒サマリー">{" Step 0: まず全体像をつかむ（30秒サマリー） "}</h2>
{" "}
<p>{" "}<strong>{"ISO/IEC/IEEE 29119-3 は「テストで作る文書のひな形（テンプレート）集」です。"}</strong>{" "}</p>
{" "}
<ul>{" "}<li>{" 「何をどうテストするか（プロセス）」を定めるのは "}<strong>{"Part 2"}</strong>{"。 "}</li>{" "}<li>{" その各プロセスの"}<strong>{"成果物（アウトプット）として、どんな情報を文書に書くか"}</strong>{"を定めるのが "}<strong>{"Part 3"}</strong>{"。 "}</li>{" "}<li>{" 文書は紙でも、テスト管理ツールの記録、スプレッドシート、マインドマップ、ホワイトボード写真でもよい、とされています。 "}</li>{" "}<li>{" すべてを作る必要はなく、"}<strong>{"プロジェクトに合わせて選んで使う（テーラリング）"}</strong>{"ことが前提です。 "}</li>{" "}</ul>
{" "}
<Diagram diagramKey="mm1" id="mermaid-diagram-1" chart={DIAGRAM_0} />
{" "}
<h3 id="用語の最低限セット">{"用語の最低限セット"}</h3>
{" "}
<div aria-label="表：用語の最低限セット" className="table-scroll" role="region" tabIndex={0}>{" "}<table><thead><tr className="header"><th>{"用語"}</th><th>{"ひとことで言うと"}</th></tr></thead><tbody><tr className="odd"><td>{"テストポリシー"}</td><td>{"組織がテストで何を目指すかを示す経営層向けの方針文書"}</td></tr><tr className="even"><td>{"テスト計画（テストプラン）"}</td><td>{" 目的・進め方・スケジュールをまとめた計画書。テスト戦略を含む "}</td></tr><tr className="odd"><td>{"テストモデル"}</td><td>{" テスト対象をテストしやすい形で表現したもの（状態遷移図、デシジョンテーブル等） "}</td></tr><tr className="even"><td>{"テストケース仕様"}</td><td>{"テストケースの集まりを記述した文書"}</td></tr><tr className="odd"><td>{"テスト手順仕様"}</td><td>{" テストケースを実行する順序・手順を記述した文書（テストスクリプトとも） "}</td></tr><tr className="even"><td>{"インシデント"}</td><td>{"テスト実行中などに起きた「調査が必要な、予期しない出来事」"}</td></tr></tbody></table>{" "}</div>
{" "}
    </>;
}
