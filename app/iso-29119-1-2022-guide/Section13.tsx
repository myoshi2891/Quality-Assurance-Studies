import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_19 } from './diagrams';

export default function Section13() {
  return (
    <>
<h2 id="13-学習ロードマップ">13. 学習ロードマップ</h2>
<div className="mermaid-diagram" id="mermaid-19">
  <Mermaid chart={DIAGRAM_19} />
</div>
{/* 図の描画に失敗しても手順を読めるよう、DIAGRAM_19 と同じ手順を本文にも置く */}
<ol>
<li>本ガイドで全体像を把握</li>
<li>29119-1 の公開プレビュー（序文・目次・用語）を確認</li>
<li>正式な規格書で第4章を精読</li>
<li>29119-2 テストプロセス</li>
<li>29119-3 テスト文書化</li>
<li>29119-4 テスト技法</li>
<li>必要に応じて 29119-5 と 29119-11</li>
<li>実プロジェクトでテーラリングして適用</li>
</ol>
<hr />
    </>
  );
}
