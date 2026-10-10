import React from 'react';

export default function Section1() {
  return (
    <>
<h2 id="1-29119-1-とは何かstep-1">1. 29119-1 とは何か（Step 1）</h2>
<h3 id="11-基本情報">1.1 基本情報</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>項目</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>規格番号</td>
<td>ISO/IEC/IEEE 29119-1:2022</td>
</tr>
<tr className="even">
<td>名称</td>
<td>Software and systems engineering — Software testing — Part 1:
General concepts</td>
</tr>
<tr className="odd">
<td>版</td>
<td>第2版（Edition 2）</td>
</tr>
<tr className="even">
<td>発行</td>
<td>2022年1月（ISOステージ 60.60: 国際規格発行済み）</td>
</tr>
<tr className="odd">
<td>ページ数</td>
<td>47ページ</td>
</tr>
<tr className="even">
<td>担当委員会</td>
<td>ISO/IEC JTC 1/SC 7（ソフトウェアおよびシステムエンジニアリング）＋
IEEE Computer Society</td>
</tr>
<tr className="odd">
<td>前版</td>
<td>ISO/IEC/IEEE 29119-1:2013（廃止）</td>
</tr>
<tr className="even">
<td>ICS分類</td>
<td>35.080（ソフトウェア）</td>
</tr>
<tr className="odd">
<td>種別</td>
<td><strong>参考（informative）</strong>:
適合を主張するための「要求事項」は含まない</td>
</tr>
</tbody>
</table></div>
<h3 id="12-一言でいうと">1.2 一言でいうと</h3>
<p><strong>「ソフトウェアテストの共通の考え方と言葉を定める、29119
シリーズの入口となる規格」</strong> です。</p>
<p>規格のスコープ（適用範囲）は非常に短く、次の趣旨です。</p>
<ul>
<li>ソフトウェアテストの一般概念を規定する</li>
<li>29119 シリーズ全体の鍵となる概念を示す</li>
</ul>
<h3 id="13-なぜ共通の言葉が必要なのか">1.3
なぜ「共通の言葉」が必要なのか</h3>
<p>テストの現場では、同じ言葉が人によって違う意味で使われがちです。</p>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>よくある言葉</th>
<th>起こりがちな食い違い</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>「テスト」</td>
<td>実行して確認することだけ？ レビューも含む？</td>
</tr>
<tr className="even">
<td>「テストケース」</td>
<td>手順書のこと？ 入力と期待結果の組？</td>
</tr>
<tr className="odd">
<td>「バグ」「障害」「不具合」</td>
<td>原因？ 現象？ 報告書？</td>
</tr>
<tr className="even">
<td>「回帰テスト」と「再テスト」</td>
<td>同じ？ 違う？</td>
</tr>
</tbody>
</table></div>
<p>29119-1
は、こうした食い違いを減らすために、<strong>用語（第3章）と概念（第4章）を整理</strong>しています。</p>
<hr />
    </>
  );
}
